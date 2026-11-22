/* =========================================================
   কোর — শেয়ার করা হেল্পার, লগইন, শেল, রাউটার, খোঁজ
   ========================================================= */
const S = () => Store.settings;
const D = () => Store.raw;
const clsById = id => S().classes.find(c => c.id === id);
const clsName = id => (clsById(id) || {}).name || '—';
const clsShort = id => (clsById(id) || {}).short || '—';
const sortedClasses = () => [...S().classes].sort((a, b) => a.order - b.order);
const activeStudents = () => Store.all('students').filter(s => s.status === 'active');
const isOff = iso => S().weeklyOff.includes(new Date(iso + 'T00:00').getDay());
const todayISO = () => Fmt.iso(new Date());
const DAYS = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'];
const DAYS_FULL = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
const WEEK_ORDER = [6, 0, 1, 2, 3, 4, 5];
const teacherName = id => (Store.find('teachers', id) || {}).name || '';
const subjById = id => S().subjects.find(s => s.id === id);
const sortStudents = arr => arr.sort((a, b) => (clsById(a.classId)?.order || 0) - (clsById(b.classId)?.order || 0) || a.section.localeCompare(b.section) || (+a.roll) - (+b.roll));
const classOptions = (sel, withAll) => (withAll ? `<option value="">সব শ্রেণি</option>` : '') + sortedClasses().map(c => `<option value="${c.id}" ${c.id === sel ? 'selected' : ''}>${esc(c.name)}</option>`).join('');
const sectionOptions = (cid, sel, withAll) => { const c = clsById(cid); return (withAll ? `<option value="">সব শাখা</option>` : '') + (c ? c.sections.map(s => `<option value="${esc(s)}" ${s === sel ? 'selected' : ''}>${esc(s)} শাখা</option>`).join('') : ''); };
const studentLine = s => `${clsShort(s.classId)} · ${s.section} শাখা · রোল ${Fmt.n(s.roll)}`;

/* ---------- ফলাফল ---------- */
function subjectsFor(st) { return S().subjects.filter(x => x.classes.includes(st.classId) && (!x.group || x.group === st.group)).sort((a, b) => a.code.localeCompare(b.code)); }
function subjectsForClass(cid) { return S().subjects.filter(x => x.classes.includes(cid)).sort((a, b) => a.code.localeCompare(b.code)); }
function gradeOf(pct) { const g = [...S().grading].sort((a, b) => b.min - a.min); return g.find(x => pct >= x.min) || g[g.length - 1]; }
function gradeOfGpa(gpa) { const g = [...S().grading].sort((a, b) => b.gp - a.gp); return (g.find(x => gpa >= x.gp) || g[g.length - 1]).grade; }
function resultOf(examId, st) {
  const m = D().marks[`${examId}|${st.id}`] || {};
  const rows = subjectsFor(st).map(s => {
    const v = m[s.id]; const has = v !== undefined && v !== '' && v !== null;
    if (!has) return { s, has, v: null };
    const pct = v / s.fullMarks * 100, fail = v < s.passMarks, g = fail ? { grade: 'F', gp: 0 } : gradeOf(pct);
    return { s, has, v: +v, pct, fail, grade: g.grade, gp: g.gp };
  });
  const entered = rows.filter(r => r.has), fails = entered.filter(r => r.fail).length;
  const total = entered.reduce((a, r) => a + r.v, 0), full = rows.reduce((a, r) => a + r.s.fullMarks, 0);
  const gpa = !entered.length ? 0 : fails ? 0 : entered.reduce((a, r) => a + r.gp, 0) / entered.length;
  return { rows, total, full, gpa, grade: fails ? 'F' : entered.length ? gradeOfGpa(gpa) : '—', pass: entered.length > 0 && !fails, fails, complete: entered.length === rows.length && rows.length > 0, entered: entered.length };
}
function classResults(examId, classId) {
  const list = activeStudents().filter(s => s.classId === classId).map(s => ({ st: s, r: resultOf(examId, s) })).filter(x => x.r.entered);
  list.sort((a, b) => (b.r.pass - a.r.pass) || (b.r.gpa - a.r.gpa) || (b.r.total - a.r.total));
  list.forEach((x, i) => x.pos = i + 1);
  const bySec = {}; list.forEach(x => { (bySec[x.st.section] = bySec[x.st.section] || []).push(x); });
  Object.values(bySec).forEach(a => a.forEach((x, i) => x.secPos = i + 1));
  return list;
}

function defaultExam() {
  const ex = [...Store.all('exams')].sort((a, b) => a.startDate < b.startDate ? 1 : -1);
  const has = new Set(Object.keys(D().marks).map(k => k.split('|')[0]));
  return (ex.find(e => has.has(e.id)) || ex[0] || {}).id || '';
}
/* ---------- বকেয়া ফি ---------- */
function monthlyHead() { return S().feeHeads.find(h => h.type === 'monthly'); }
function paidMonths(st) { const set = new Set(); Store.all('payments').forEach(p => { if (p.studentId === st.id) p.items.forEach(i => { if (i.month) set.add(i.month); }); }); return set; }
function dueOf(st) {
  const h = monthlyHead(); if (!h) return { months: [], amount: 0 };
  const y = +S().school.session || new Date().getFullYear(), now = new Date();
  const last = y < now.getFullYear() ? 12 : y > now.getFullYear() ? 0 : now.getMonth() + 1;
  const paid = paidMonths(st), months = [];
  const start = st.admissionDate && st.admissionDate.startsWith(String(y)) ? +st.admissionDate.slice(5, 7) : 1;
  for (let m = start; m <= last; m++) { const ym = `${y}-${String(m).padStart(2, '0')}`; if (!paid.has(ym)) months.push(ym); }
  return { months, amount: months.length * (+h.amounts[st.classId] || 0), rate: +h.amounts[st.classId] || 0 };
}
const paymentIncome = () => Store.all('payments').map(p => ({ id: p.id, type: 'income', date: p.date, category: 'শিক্ষার্থী ফি', amount: p.total, note: p.receiptNo, auto: true, studentId: p.studentId }));
const allLedger = () => [...paymentIncome(), ...Store.all('ledger')].sort((a, b) => a.date < b.date ? 1 : -1);

/* ---------- উপস্থিতি ---------- */
function dailyRates() {
  const map = {};
  Object.entries(D().attendance).forEach(([k, marks]) => { const d = k.split('|')[0]; map[d] = map[d] || { p: 0, t: 0 }; Object.values(marks).forEach(v => { map[d].t++; if (v === 'P') map[d].p++; }); });
  return map;
}
function studentAtt(st, from, to) {
  let p = 0, a = 0, l = 0; const days = [];
  Object.entries(D().attendance).forEach(([k, marks]) => {
    const [d, cid, sec] = k.split('|');
    if (cid !== st.classId || sec !== st.section || !(st.id in marks)) return;
    if ((from && d < from) || (to && d > to)) return;
    const v = marks[st.id]; v === 'P' ? p++ : v === 'A' ? a++ : l++; days.push([d, v]);
  });
  days.sort((x, y) => x[0] < y[0] ? -1 : 1);
  return { p, a, l, t: p + a + l, days };
}

/* ---------- মোড ও লগইন ---------- */
const Mode = { get() { try { return localStorage.getItem('sms_mode') || 'live'; } catch (e) { return 'live'; } }, set(v) { try { v ? localStorage.setItem('sms_mode', v) : localStorage.removeItem('sms_mode'); } catch (e) {} } };
const Auth = { logged: () => !!Store.raw };
const baseLayers = () => `<div class="toasts" id="toasts"></div><div class="tip" id="tip"></div><div id="printRoot"></div>`;
const FB_ERR = { 'auth/invalid-credential': 'ইমেইল বা পাসওয়ার্ড মেলেনি', 'auth/wrong-password': 'ইমেইল বা পাসওয়ার্ড মেলেনি', 'auth/user-not-found': 'ইমেইল বা পাসওয়ার্ড মেলেনি', 'auth/invalid-email': 'ইমেইল ঠিকানা সঠিক নয়',
  'auth/email-already-in-use': 'এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট আছে', 'auth/weak-password': 'পাসওয়ার্ড অন্তত ৬ অক্ষরের দিন', 'auth/network-request-failed': 'ইন্টারনেট সংযোগ পাওয়া যায়নি', 'auth/too-many-requests': 'অনেকবার চেষ্টা হয়েছে, কিছুক্ষণ পরে আবার চেষ্টা করুন',
  'auth/operation-not-allowed': 'Firebase-এ Email/Password লগইন চালু করা নেই', 'permission-denied': 'অনুমতি নেই, Firestore-এর রুলস ঠিকমতো বসানো হয়েছে কিনা দেখুন' };
const fbMsg = e => FB_ERR[e && e.code] || 'কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন';
function cacheBrand() { try { const sc = S().school; localStorage.setItem('sms_brand', JSON.stringify({ name: sc.name, logo: sc.logo && sc.logo.length < 400000 ? sc.logo : '' })); } catch (e) {} }
function brand() { try { return JSON.parse(localStorage.getItem('sms_brand') || 'null') || {}; } catch (e) { return {}; } }

function authArt() {
  return `<svg class="art" viewBox="0 0 640 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><pattern id="ruled" width="640" height="34" patternUnits="userSpaceOnUse"><line x1="0" y1="33" x2="640" y2="33" stroke="#ffffff" stroke-opacity=".05"/></pattern></defs>
    <rect width="640" height="900" fill="url(#ruled)"/>
    <line x1="92" y1="0" x2="92" y2="900" stroke="#f0a830" stroke-opacity=".35"/>
    <g transform="translate(360 470) rotate(-28)" class="pencil">
      <rect x="-210" y="-15" width="380" height="30" rx="3" fill="#f0a830"/><rect x="-210" y="-15" width="380" height="10" fill="#f6c25e"/>
      <rect x="170" y="-15" width="34" height="30" fill="#c9cdd6"/><rect x="176" y="-15" width="3" height="30" fill="#a5aab6"/><rect x="186" y="-15" width="3" height="30" fill="#a5aab6"/><rect x="196" y="-15" width="3" height="30" fill="#a5aab6"/>
      <rect x="204" y="-15" width="30" height="30" rx="5" fill="#e6878a"/>
      <path d="M-210 -15 L-262 0 L-210 15 Z" fill="#edd2a6"/><path d="M-246 -5 L-262 0 L-246 5 Z" fill="#2b2f3a"/>
    </g>
    <g fill="none" stroke="#ffffff" stroke-opacity=".16" stroke-width="1.5"><circle cx="470" cy="210" r="64"/><path d="M406 210 h128 M470 146 v128"/><path d="M150 680 l90 -150 l90 150 z"/></g>
  </svg>`;
}
function authShell(title, lead, formHTML, sideTitle) {
  const b = brand();
  document.documentElement.dataset.theme = 'light';
  document.body.innerHTML = baseLayers() + `
  <div class="auth">
    <div class="auth-art">${authArt()}
      <div class="brand"><span class="logo-mark">${b.logo ? `<img src="${b.logo}" alt="">` : ic('school')}</span> ${esc(b.name || 'স্কুল ম্যানেজমেন্ট')}</div>
      <h2>${sideTitle}</h2>
      <div class="foot"><span>৬ষ্ঠ থেকে ১০ম শ্রেণি</span><span>হাজিরা, পরীক্ষা, ফি, সনদ</span><span>QR দিয়ে যাচাই</span></div>
    </div>
    <div class="auth-form"><div class="auth-card view-enter">
      <h1>${title}</h1><p class="lead">${lead}</p>${formHTML}
      <div class="demo-box"><div><b>শিক্ষকদের দেখাতে চান?</b><div class="muted small-t">নমুনা তথ্যসহ ডেমো খুলবে। আসল ডেটায় কোনো প্রভাব পড়বে না</div></div><button class="btn btn-gold" id="goDemo">${ic('school', 'ico-16')} ডেমো দেখুন</button></div>
    </div></div>
  </div>`;
  $('#goDemo').onclick = () => { Mode.set('demo'); boot(); };
}
function renderSetup() {
  authShell('প্রথমবার সেটআপ', 'স্কুলের নাম আর অ্যাডমিনের ইমেইল-পাসওয়ার্ড দিন। এই অ্যাকাউন্টই হবে একমাত্র অ্যাডমিন। সিস্টেম একদম ফাঁকা অবস্থায় শুরু হবে', `
    <form id="setupForm" autocomplete="off">
      <div class="mb-3"><label class="form-label">স্কুলের নাম</label><input class="form-control" name="name" required placeholder="যেমন: চরপাড়া উচ্চ বিদ্যালয়"></div>
      <div class="row g-3 mb-3"><div class="col-6"><label class="form-label">EIIN</label><input class="form-control" name="eiin" inputmode="numeric"></div>
      <div class="col-6"><label class="form-label">শিক্ষাবর্ষ</label><input class="form-control" name="session" value="${new Date().getFullYear()}"></div></div>
      <div class="mb-3"><label class="form-label">ঠিকানা</label><input class="form-control" name="address" placeholder="গ্রাম/রোড, উপজেলা, জেলা"></div>
      <div class="fsec">অ্যাডমিন লগইন</div>
      <div class="mb-3"><label class="form-label">ইমেইল</label><input class="form-control" type="email" name="email" required autocomplete="username"></div>
      <div class="row g-3 mb-4"><div class="col-6"><label class="form-label">পাসওয়ার্ড</label><input class="form-control" type="password" name="password" required minlength="6" autocomplete="new-password"></div>
      <div class="col-6"><label class="form-label">আবার লিখুন</label><input class="form-control" type="password" name="password2" required minlength="6" autocomplete="new-password"></div></div>
      <button class="btn btn-primary btn-lg w-100">সেটআপ সম্পন্ন করুন</button><div class="err" id="err"></div>
    </form>`, 'ভর্তি থেকে প্রশংসাপত্র, স্কুলের সব কাজ <em>এক খাতায়</em>');
  $('#setupForm').onsubmit = async e => {
    e.preventDefault(); const d = UI.formData(e.target);
    if (d.password !== d.password2) return $('#err').textContent = 'দুটি পাসওয়ার্ড মেলেনি';
    UI.busy(true, 'অ্যাকাউন্ট তৈরি হচ্ছে…');
    try { await Cloud.createOwner(d.email, d.password); await Store.createLive({ name: d.name, eiin: d.eiin, session: d.session || String(new Date().getFullYear()), address: d.address }); UI.busy(false); cacheBrand(); enterApp(); }
    catch (er) { UI.busy(false); $('#err').textContent = fbMsg(er); }
  };
}
function renderLogin(msg = '') {
  const b = brand();
  authShell('লগইন', `${esc(b.name || 'স্কুল ম্যানেজমেন্ট')} · অ্যাডমিন প্যানেল`, `
    <form id="loginForm">
      <div class="mb-3"><label class="form-label">ইমেইল</label><input class="form-control" type="email" name="u" required autocomplete="username"></div>
      <div class="mb-2"><label class="form-label">পাসওয়ার্ড</label><input class="form-control" type="password" name="p" required autocomplete="current-password"></div>
      <div class="text-end mb-4"><a href="#" id="forgot" class="small-t">পাসওয়ার্ড ভুলে গেছেন?</a></div>
      <button class="btn btn-primary btn-lg w-100">প্রবেশ করুন</button><div class="err" id="err">${esc(msg)}</div>
    </form>`, 'আজকের হাজিরা খাতা <em>অপেক্ষা করছে</em>');
  $('#loginForm').onsubmit = async e => {
    e.preventDefault(); const d = UI.formData(e.target); $('#err').textContent = '';
    UI.busy(true, 'প্রবেশ করা হচ্ছে…');
    try { await Cloud.signIn(d.u, d.p); UI.busy(false); boot(); } catch (er) { UI.busy(false); $('#err').textContent = fbMsg(er); }
  };
  $('#forgot').onclick = async e => { e.preventDefault(); const em = $('[name=u]').value.trim(); if (!em) return $('#err').textContent = 'আগে ইমেইল লিখুন';
    try { await Cloud.resetPassword(em); UI.toast('পাসওয়ার্ড বদলানোর লিংক ইমেইলে পাঠানো হয়েছে'); } catch (er) { $('#err').textContent = fbMsg(er); } };
}
function renderOffline() {
  authShell('সংযোগ পাওয়া যায়নি', 'অনলাইন ডেটাবেসের সাথে সংযোগ করা যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন', `<button class="btn btn-primary btn-lg w-100" id="retry">আবার চেষ্টা করুন</button>`, 'আজকের হাজিরা খাতা <em>অপেক্ষা করছে</em>');
  $('#retry').onclick = () => location.reload();
}

/* ---------- লোডিং স্ক্রিন ---------- */
function splash(on, text) {
  let el = $('#splash');
  if (on) {
    if (!el) { el = document.createElement('div'); el.id = 'splash'; document.body.appendChild(el); }
    const b = brand();
    el.className = 'splash'; el.innerHTML = `<div class="sp-mark"><svg class="sp-ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="54"/><circle class="arc" cx="60" cy="60" r="54"/></svg><div class="sp-logo">${b.logo ? `<img src="${b.logo}" alt="">` : esc(Fmt.initials(b.name || 'স'))}</div></div><div class="sp-name">${esc(b.name || 'স্কুল ম্যানেজমেন্ট')}</div><div class="sp-text">${esc(text || 'লোড হচ্ছে…')}</div>`;
  } else if (el) { el.classList.add('out'); setTimeout(() => el.remove(), 450); }
}

/* ---------- শেল ---------- */
const NAV = [
  ['প্রতিদিনের কাজ', [['dashboard', 'ড্যাশবোর্ড', 'dashboard'], ['students', 'শিক্ষার্থী', 'students'], ['teachers', 'শিক্ষক ও কর্মচারী', 'teachers'], ['attendance', 'উপস্থিতি', 'attendance'], ['routine', 'ক্লাস রুটিন', 'routine']]],
  ['একাডেমিক', [['exams', 'পরীক্ষা ও ফলাফল', 'exam'], ['documents', 'ডকুমেন্ট ও সনদ', 'docs'], ['library', 'লাইব্রেরি', 'library']]],
  ['হিসাব', [['fees', 'ফি আদায়', 'fee'], ['accounts', 'আয়-ব্যয়', 'wallet'], ['payroll', 'বেতন', 'salary']]],
  ['যোগাযোগ', [['notices', 'নোটিশ ও ইভেন্ট', 'notice']]]
];
const NAV_FLAT = NAV.flatMap(g => g[1]).concat([['settings', 'সেটিংস', 'settings']]);

function applyTheme() { document.documentElement.dataset.theme = S().theme === 'dark' ? 'dark' : 'light'; }
function renderShell() {
  const sc = S().school;
  applyTheme();
  document.body.innerHTML = baseLayers() + `
  ${Store.mode === 'demo' ? `<div class="demo-bar">${ic('school', 'ico-16')}<span><b>ডেমো মোড</b> · এখানে নমুনা তথ্য দেখানো হচ্ছে। যা-ই বদলান, আসল ডেটায় কোনো প্রভাব পড়বে না</span><button class="btn btn-sm" id="demoRe">নতুন করে সাজান</button><button class="btn btn-sm" id="demoOut">ডেমো থেকে বের হন</button></div>` : ''}
  <div class="shell">
    <aside class="side" id="side">
      <div class="logo"><span class="logo-mark">${sc.logo ? `<img src="${sc.logo}" alt="">` : esc(Fmt.initials(sc.name))}</span>
        <div style="min-width:0"><div class="logo-name">${esc(sc.name)}</div><div class="logo-sub">শিক্ষাবর্ষ ${esc(Fmt.bd(sc.session))}</div></div></div>
      <button class="search-btn" id="openPal">${ic('search', 'ico-16')} খুঁজুন <span class="kbd">Ctrl K</span></button>
      ${NAV.map(([g, items]) => `<div class="nav-label">${g}</div>` + items.map(n => `<a class="nav-item" href="#${n[0]}" data-nav="${n[0]}">${ic(n[2])}<span>${n[1]}</span></a>`).join('')).join('')}
      <div class="side-foot">
        <a class="nav-item" href="#settings" data-nav="settings">${ic('settings')}<span>সেটিংস</span></a>
        <a class="nav-item" href="#" id="themeBtn">${ic(S().theme === 'dark' ? 'sun' : 'moon')}<span>${S().theme === 'dark' ? 'লাইট মোড' : 'ডার্ক মোড'}</span></a>
        <a class="nav-item" href="#" id="logout">${ic('logout')}<span>${Store.mode === 'demo' ? 'ডেমো থেকে বের হন' : 'লগআউট'}</span></a>
      </div>
    </aside>
    <div class="main">
      <header class="topbar"><button class="btn btn-quiet btn-icon menu-btn" id="menuBtn" aria-label="মেনু">${ic('menu')}</button>
        <h1 id="ttl"></h1><span class="sub" id="ttlSub"></span><span class="sync" id="sync"></span><div class="actions" id="tAct"></div></header>
      <main class="view" id="view"></main>
    </div>
  </div>`;
  $('#logout').onclick = async e => { e.preventDefault(); history.replaceState(null, '', location.pathname);
    if (Store.mode === 'demo') { Mode.set(null); Store.close(); return boot(); }
    UI.busy(true, 'বের হচ্ছে…'); await Cloud.flush(); await Cloud.signOut(); Store.close(); UI.busy(false); boot(); };
  if (Store.mode === 'demo') {
    $('#demoRe').onclick = async () => { if (await UI.confirm('ডেমোর সব পরিবর্তন মুছে নতুন নমুনা তথ্য সাজানো হবে', 'নতুন করে সাজান', false)) { splash(true, 'নমুনা তথ্য সাজানো হচ্ছে…'); await Store.resetDemo(); enterApp(); } };
    $('#demoOut').onclick = () => { Mode.set(null); Store.close(); history.replaceState(null, '', location.pathname); boot(); };
  }
  const paint = st => { const el = $('#sync'); if (!el) return; const m = { saving: ['সংরক্ষণ হচ্ছে', 'saving'], saved: ['সব সংরক্ষিত', 'ok'], offline: ['অফলাইন, পরে মিলবে', 'warn'], error: ['সংরক্ষণ হয়নি', 'bad'] }[st] || ['', '']; el.className = 'sync ' + m[1]; el.innerHTML = `<i></i>${m[0]}`; };
  if (Store.mode === 'live') { paint(Cloud.status); if (!Cloud._hooked) { Cloud._hooked = 1; Cloud.onStatus(paint); } }
  $('#themeBtn').onclick = e => { e.preventDefault(); S().theme = S().theme === 'dark' ? 'light' : 'dark'; Store.save(); renderShell(); route(); };
  $('#openPal').onclick = openPalette;
  $('#menuBtn').onclick = () => toggleSide(true);
  $$('.side .nav-item[data-nav]').forEach(a => a.addEventListener('click', e => { toggleSide(false); if (a.dataset.nav === 'documents' && typeof studio !== 'undefined') studio.type = ''; if (location.hash === '#' + a.dataset.nav) { e.preventDefault(); refresh(); } }));
}
function toggleSide(open) {
  $('#side').classList.toggle('open', open);
  let sc = $('.side-scrim');
  if (open && !sc) { sc = document.createElement('div'); sc.className = 'side-scrim'; sc.onclick = () => toggleSide(false); document.body.appendChild(sc); }
  if (!open && sc) sc.remove();
}

const Views = {};
let currentView = '';
function route() {
  if (!Auth.logged() || !$('#view')) return;
  const name = (location.hash || '#dashboard').slice(1);
  const v = Views[name] ? name : 'dashboard';
  currentView = v;
  $$('.side .nav-item[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === v));
  $('#tAct').innerHTML = ''; $('#ttlSub').textContent = '';
  const view = $('#view'); view.classList.remove('view-enter'); void view.offsetWidth; view.classList.add('view-enter');
  Views[v](view);
  window.scrollTo(0, 0);
}
const refresh = () => route();
const setTitle = (t, sub = '', actions = '') => { $('#ttl').textContent = t; $('#ttlSub').textContent = sub; $('#tAct').innerHTML = actions; document.title = t + ' · ' + S().school.name; };

/* ---------- খোঁজ (Ctrl+K) ---------- */
function openPalette() {
  if ($('.pal')) return;
  UI.modal({
    cls: 'pal', body: `<div style="position:relative">${ic('search', 'pi')}<input class="form-control" id="pq" placeholder="শিক্ষার্থী, শিক্ষক, বই বা পেজের নাম লিখুন"></div><div class="res" id="pr"></div>`,
    onMount: (m, close) => {
      let items = [], idx = 0;
      const draw = () => {
        const raw = $('#pq', m).value.trim(), q = Fmt.en(raw).toLowerCase();
        const pages = NAV_FLAT.filter(n => !q || n[1].includes(raw)).map(n => ({ g: 'পেজ', html: `${ic(n[2], 'ico-16 muted')}<span>${n[1]}</span>`, go: () => location.hash = n[0] }));
        const match = (arr, keys) => arr.filter(x => keys(x).some(v => String(v || '').toLowerCase().includes(q)));
        const st = q ? match(Store.all('students'), s => [s.nameBn, s.nameEn, s.studentId, s.phone, String(s.roll)]).slice(0, 8)
          .map(s => ({ g: 'শিক্ষার্থী', html: `${UI.avatar(s.nameBn, s.photo, 'sm', s.gender)}<span>${esc(s.nameBn)}</span><span class="meta">${esc(studentLine(s))}</span>`, go: () => studentProfile(s.id) })) : [];
        const tc = q ? match(Store.all('teachers'), t => [t.name, t.designation, t.subject, t.phone]).slice(0, 5)
          .map(t => ({ g: 'শিক্ষক ও কর্মচারী', html: `${UI.avatar(t.name, t.photo, 'sm')}<span>${esc(t.name)}</span><span class="meta">${esc(t.designation)}</span>`, go: () => teacherForm(t) })) : [];
        const bk = q ? match(Store.all('books'), b => [b.title, b.author, b.code]).slice(0, 4)
          .map(b => ({ g: 'বই', html: `${ic('library', 'ico-16 muted')}<span>${esc(b.title)}</span><span class="meta">${esc(b.author)}</span>`, go: () => { location.hash = 'library'; } })) : [];
        items = [...st, ...tc, ...bk, ...pages]; idx = 0;
        let g = '', h = '';
        items.forEach((it, i) => { if (it.g !== g) { g = it.g; h += `<div class="grp">${g}</div>`; } h += `<div class="it ${i === 0 ? 'on' : ''}" data-i="${i}">${it.html}</div>`; });
        $('#pr', m).innerHTML = h || UI.empty('কিছু পাওয়া যায়নি', 'search');
        $$('.it', m).forEach(el => { el.onclick = () => pick(+el.dataset.i); el.onmousemove = () => hi(+el.dataset.i); });
      };
      const hi = i => { idx = i; $$('.it', m).forEach(el => el.classList.toggle('on', +el.dataset.i === i)); $(`.it[data-i="${i}"]`, m)?.scrollIntoView({ block: 'nearest' }); };
      const pick = i => { const it = items[i]; if (!it) return; close(); setTimeout(it.go, 160); };
      $('#pq', m).oninput = draw;
      $('#pq', m).onkeydown = e => { if (e.key === 'ArrowDown') { e.preventDefault(); hi(Math.min(items.length - 1, idx + 1)); } if (e.key === 'ArrowUp') { e.preventDefault(); hi(Math.max(0, idx - 1)); } if (e.key === 'Enter') pick(idx); };
      draw();
    }
  });
}

/* ---------- বুট ---------- */
function enterApp() { cacheBrand(); applyTheme(); renderShell(); route(); splash(false); }
async function boot() {
  const mode = Mode.get();
  if (!$('#splash')) splash(true);
  if (mode === 'demo') { await Store.openDemo(); return enterApp(); }
  Store.close();
  if (!Cloud.init()) { splash(false); return renderOffline(); }
  try {
    const user = await Cloud.waitUser();
    if (!user) { let owner = null; try { owner = await Cloud.ownerInfo(); } catch (e) { owner = 'unknown'; } splash(false); return owner ? renderLogin() : renderSetup(); }
    splash(true, 'তথ্য আনা হচ্ছে…');
    const owner = await Cloud.ownerInfo();
    if (!owner || owner.uid !== user.uid) { await Cloud.signOut(); splash(false); return renderLogin('এই অ্যাকাউন্টের অ্যাডমিন অনুমতি নেই'); }
    if (!(await Store.openLive())) await Store.createLive({ name: brand().name || 'আমার স্কুল' });
    enterApp();
  } catch (e) { console.warn(e); splash(false); renderLogin(fbMsg(e)); }
}
window.addEventListener('hashchange', route);
document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && Auth.logged() && $('#view')) { e.preventDefault(); openPalette(); } });
