/* =========================================================
   Store — সব ডেটা এখান দিয়ে যায়।
   এখন ব্রাউজারের IndexedDB-তে রাখা হয় (ছবিসহ অনেক ডেটা ধরে)।
   লাইভে Firebase (cloud.js), ডেমোতে ব্রাউজারের IndexedDB।
   ========================================================= */
const Store = (() => {
  const IDB = 'sms_highschool', DEMO_KEY = 'demo_v2';
  let db = null, idb = null, timer = null, mode = null;
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  /* ---------- ডেমোর জন্য ব্রাউজারের IndexedDB ---------- */
  function openIDB() {
    if (idb) return Promise.resolve(idb);
    return new Promise((res, rej) => {
      try { const r = indexedDB.open(IDB, 1); r.onupgradeneeded = () => r.result.createObjectStore('kv'); r.onsuccess = () => { idb = r.result; res(idb); }; r.onerror = () => rej(r.error); }
      catch (e) { rej(e); }
    });
  }
  const idbGet = k => openIDB().then(d => new Promise(res => { const g = d.transaction('kv', 'readonly').objectStore('kv').get(k); g.onsuccess = () => res(g.result || null); g.onerror = () => res(null); })).catch(() => null);
  const idbPut = (k, v) => openIDB().then(d => new Promise(res => { const tx = d.transaction('kv', 'readwrite'); tx.objectStore('kv').put(v, k); tx.oncomplete = () => res(true); tx.onerror = () => res(false); })).catch(() => false);
  const idbDel = k => openIDB().then(d => new Promise(res => { const tx = d.transaction('kv', 'readwrite'); tx.objectStore('kv').delete(k); tx.oncomplete = res; tx.onerror = res; })).catch(() => 0);

  function persist() {
    if (mode === 'live') return Cloud.schedule();
    if (mode === 'demo') { clearTimeout(timer); timer = setTimeout(() => idbPut(DEMO_KEY, db), 150); }
  }
  window.addEventListener('pagehide', () => { if (mode === 'demo' && timer) { clearTimeout(timer); idbPut(DEMO_KEY, db); } if (mode === 'live') Cloud.flush(); });

  /* ---------- defaults ---------- */
  function defaults() {
    const cls = (order, name, short, groups) => ({ id: 'c' + order, order, name, short, sections: ['ক', 'খ'], hasGroups: groups, teacherBySection: {} });
    const classes = [cls(6, 'ষষ্ঠ শ্রেণি', '৬ষ্ঠ', false), cls(7, 'সপ্তম শ্রেণি', '৭ম', false), cls(8, 'অষ্টম শ্রেণি', '৮ম', false), cls(9, 'নবম শ্রেণি', '৯ম', true), cls(10, 'দশম শ্রেণি', '১০ম', true)];
    const all = ['c6', 'c7', 'c8', 'c9', 'c10'], jr = ['c6', 'c7', 'c8'], sr = ['c9', 'c10'];
    const sub = (name, code, classes, group = '', short) => ({ id: 's' + code, name, short: short || name, code, classes, group, fullMarks: 100, passMarks: 33 });
    const subjects = [
      sub('বাংলা প্রথম পত্র', '101', all, '', 'বাংলা ১ম'), sub('বাংলা দ্বিতীয় পত্র', '102', all, '', 'বাংলা ২য়'),
      sub('English 1st Paper', '107', all, '', 'Eng 1st'), sub('English 2nd Paper', '108', all, '', 'Eng 2nd'),
      sub('গণিত', '109', all), sub('সাধারণ বিজ্ঞান', '127', jr, '', 'বিজ্ঞান'),
      sub('বাংলাদেশ ও বিশ্বপরিচয়', '150', all, '', 'বাওবি'), sub('ধর্ম ও নৈতিক শিক্ষা', '111', all, '', 'ধর্ম'),
      sub('তথ্য ও যোগাযোগ প্রযুক্তি', '154', all, '', 'আইসিটি'), sub('কৃষিশিক্ষা', '134', all, '', 'কৃষি'),
      sub('পদার্থবিজ্ঞান', '136', sr, 'বিজ্ঞান', 'পদার্থ'), sub('রসায়ন', '137', sr, 'বিজ্ঞান'),
      sub('জীববিজ্ঞান', '138', sr, 'বিজ্ঞান', 'জীব'), sub('উচ্চতর গণিত', '126', sr, 'বিজ্ঞান', 'উ. গণিত'),
      sub('ইতিহাস ও বিশ্বসভ্যতা', '153', sr, 'মানবিক', 'ইতিহাস'), sub('ভূগোল ও পরিবেশ', '110', sr, 'মানবিক', 'ভূগোল'),
      sub('পৌরনীতি ও নাগরিকতা', '140', sr, 'মানবিক', 'পৌরনীতি'), sub('অর্থনীতি', '141', sr, 'মানবিক'),
      sub('হিসাববিজ্ঞান', '146', sr, 'ব্যবসায় শিক্ষা', 'হিসাব'), sub('ব্যবসায় উদ্যোগ', '143', sr, 'ব্যবসায় শিক্ষা', 'ব্যবসায়'),
      sub('ফিন্যান্স ও ব্যাংকিং', '152', sr, 'ব্যবসায় শিক্ষা', 'ফিন্যান্স')
    ];
    const amt = (a) => ({ c6: a[0], c7: a[1], c8: a[2], c9: a[3], c10: a[4] });
    return {
      v: 2,
      settings: {
        school: { name: '', nameEn: '', eiin: '', code: '', address: '', phone: '', email: '', website: '', logo: '', session: String(new Date().getFullYear()), established: '', headName: '', headSign: '', seal: '', motto: '' },
        admin: { username: 'admin', passHash: '' },
        secret: uid() + uid(),
        classes, subjects,
        groups: ['বিজ্ঞান', 'মানবিক', 'ব্যবসায় শিক্ষা'],
        designations: ['প্রধান শিক্ষক', 'সহকারী প্রধান শিক্ষক', 'সিনিয়র শিক্ষক', 'সহকারী শিক্ষক', 'খণ্ডকালীন শিক্ষক', 'অফিস সহকারী', 'হিসাবরক্ষক', 'লাইব্রেরিয়ান', 'অফিস সহায়ক', 'নৈশপ্রহরী'],
        weeklyOff: [5, 6],
        periods: [
          { id: 'p1', label: '১ম', start: '10:00', end: '10:45' }, { id: 'p2', label: '২য়', start: '10:45', end: '11:30' },
          { id: 'p3', label: '৩য়', start: '11:30', end: '12:15' }, { id: 'pb', label: 'টিফিন', start: '12:15', end: '12:45', brk: true },
          { id: 'p4', label: '৪র্থ', start: '12:45', end: '13:30' }, { id: 'p5', label: '৫ম', start: '13:30', end: '14:15' },
          { id: 'p6', label: '৬ষ্ঠ', start: '14:15', end: '15:00' }
        ],
        grading: [
          { min: 80, grade: 'A+', gp: 5 }, { min: 70, grade: 'A', gp: 4 }, { min: 60, grade: 'A-', gp: 3.5 },
          { min: 50, grade: 'B', gp: 3 }, { min: 40, grade: 'C', gp: 2 }, { min: 33, grade: 'D', gp: 1 }, { min: 0, grade: 'F', gp: 0 }
        ],
        feeHeads: [
          { id: 'fh_m', name: 'মাসিক বেতন', type: 'monthly', amounts: amt([300, 300, 350, 400, 400]) },
          { id: 'fh_a', name: 'ভর্তি ও সেশন ফি', type: 'once', amounts: amt([1500, 1500, 1500, 2000, 2000]) },
          { id: 'fh_e', name: 'পরীক্ষার ফি', type: 'once', amounts: amt([250, 250, 250, 350, 350]) },
          { id: 'fh_d', name: 'উন্নয়ন ফি', type: 'once', amounts: amt([500, 500, 500, 500, 500]) }
        ],
        expenseCats: ['শিক্ষক-কর্মচারী বেতন', 'বিদ্যুৎ ও পানি বিল', 'স্টেশনারি ও ছাপা', 'রক্ষণাবেক্ষণ', 'অনুষ্ঠান ও খেলাধুলা', 'অন্যান্য'],
        incomeCats: ['শিক্ষার্থী ফি', 'সরকারি অনুদান', 'দান', 'অন্যান্য'],
        docs: {
          signLabel: 'প্রধান শিক্ষকের স্বাক্ষর ও সিল',
          classTeacherLabel: 'শ্রেণি শিক্ষকের স্বাক্ষর',
          examCtrlLabel: 'পরীক্ষা নিয়ন্ত্রকের স্বাক্ষর',
          showQR: true, verifyBase: '',
          admitRules: 'পরীক্ষা শুরুর ৩০ মিনিট আগে আসন গ্রহণ করতে হবে\nপ্রবেশপত্র ছাড়া কোনো শিক্ষার্থীকে পরীক্ষায় বসতে দেওয়া হবে না\nমোবাইল ফোন বা কোনো ইলেকট্রনিক যন্ত্র সাথে আনা যাবে না\nপ্রবেশপত্রে কিছু লেখা বা কাটাকাটি করা যাবে না',
          testimonialText: 'এই মর্মে প্রত্যয়ন করা যাচ্ছে যে, {নাম}, পিতা: {পিতা}, মাতা: {মাতা}, ঠিকানা: {ঠিকানা}। সে অত্র বিদ্যালয়ের একজন নিয়মিত শিক্ষার্থী ছিল। সে {বিভাগ} বিভাগ থেকে {পরীক্ষার_সন} সালের মাধ্যমিক স্কুল সার্টিফিকেট (এস.এস.সি) পরীক্ষায় {বোর্ড} শিক্ষা বোর্ডের অধীনে অংশগ্রহণ করে জিপিএ {জিপিএ} পেয়ে উত্তীর্ণ হয়েছে। তার রোল নং {বোর্ড_রোল} এবং রেজিস্ট্রেশন নং {রেজি_নং}। বিদ্যালয়ের রেকর্ড অনুযায়ী তার জন্ম তারিখ {জন্ম_তারিখ}।\nআমার জানামতে সে রাষ্ট্র বা সমাজবিরোধী কোনো কাজে জড়িত ছিল না। তার স্বভাব ও চরিত্র ভালো। আমি তার জীবনের সর্বাঙ্গীণ উন্নতি ও সাফল্য কামনা করি।',
          tcText: 'এই মর্মে প্রত্যয়ন করা যাচ্ছে যে, {নাম}, পিতা: {পিতা}, মাতা: {মাতা}, অত্র বিদ্যালয়ের {শ্রেণি}, {শাখা} শাখার একজন নিয়মিত শিক্ষার্থী ছিল। তার রোল নং {রোল} এবং শিক্ষার্থী আইডি {আইডি}। বিদ্যালয়ের রেকর্ড অনুযায়ী তার জন্ম তারিখ {জন্ম_তারিখ}। {কারণ} অভিভাবকের আবেদনের প্রেক্ষিতে তাকে এই ছাড়পত্র দেওয়া হলো। বিদ্যালয়ের কাছে তার কোনো পাওনা নেই।\nআমি তার উজ্জ্বল ভবিষ্যৎ কামনা করি।',
          board: 'ঢাকা'
        },
        serials: {},
        customFields: [],
        theme: 'light'
      },
      students: [], teachers: [],
      attendance: {},          // date|classId|section → { studentId: P|A|L }
      routine: {},             // classId|section → { day: { periodId: { subjectId, teacherId } } }
      exams: [], marks: {},    // examId|studentId → { subjectId: number }
      payments: [], ledger: [], salaries: {},
      notices: [], books: [], loans: [], documents: []
    };
  }
  function migrate(d) {
    const base = defaults();
    for (const k of Object.keys(base)) if (d[k] === undefined) d[k] = base[k];
    for (const k of Object.keys(base.settings)) if (d.settings[k] === undefined) d.settings[k] = base.settings[k];
    for (const k of Object.keys(base.settings.school)) if (d.settings.school[k] === undefined) d.settings.school[k] = '';
    for (const k of Object.keys(base.settings.docs)) if (d.settings.docs[k] === undefined) d.settings.docs[k] = base.settings.docs[k];
    d.settings.subjects.forEach(s => { if (!s.short) s.short = s.name; if (s.passMarks == null) s.passMarks = Math.round(s.fullMarks * .33); });
    d.settings.classes.forEach(c => { if (!c.teacherBySection) c.teacherBySection = {}; });
    d.v = 2; return d;
  }

  async function hash(s) {
    try { const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('sms::' + s)); return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join(''); }
    catch (e) { return 'x' + quickHash('sms::' + s); }
  }
  function quickHash(s) { let h1 = 0x811c9dc5, h2 = 5381; for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 16777619); h2 = ((h2 << 5) + h2 + c) | 0; } return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0'); }

  return {
    uid, hash, quickHash, defaults, idbGet, idbPut,
    get mode() { return mode; },
    get raw() { return db; },
    get settings() { return db.settings; },
    isSetup() { return !!db; },
    /* ডেমো: আলাদা জায়গায়, কখনো অনলাইনে যায় না */
    async openDemo(fresh) {
      mode = 'demo';
      db = fresh ? null : await idbGet(DEMO_KEY);
      if (!db) {
        db = defaults();
        Object.assign(db.settings.school, { name: 'আদর্শ উচ্চ বিদ্যালয়', nameEn: 'Adarsha High School', eiin: '১১২২৩৩', address: 'কলেজ রোড, সদর, ময়মনসিংহ' });
        try { const cached = JSON.parse(localStorage.getItem('sms_brand') || 'null'); if (cached && cached.name) Object.assign(db.settings.school, { name: cached.name, logo: cached.logo || '' }); } catch (e) {}
        Demo.fill(db); migrate(db);
        try { db.routine = {}; autoRoutine(allSecKeys()); } catch (e) {}
        await idbPut(DEMO_KEY, db);
      }
      migrate(db); return db;
    },
    async resetDemo() { await idbDel(DEMO_KEY); return this.openDemo(true); },
    /* লাইভ: অনলাইন ডেটাবেস, শুরুতে একদম ফাঁকা */
    async openLive() { mode = 'live'; db = await Cloud.load(); if (db) migrate(db); return db; },
    async createLive(school) { mode = 'live'; db = defaults(); Object.assign(db.settings.school, school); await Cloud.seed(db); return db; },
    close() { db = null; mode = null; },
    save() { persist(); },
    all(col) { return db[col]; },
    find(col, id) { return db[col].find(x => x.id === id); },
    upsert(col, item) {
      if (!item.id) { item.id = uid(); item.createdAt = new Date().toISOString(); db[col].push(item); }
      else { const i = db[col].findIndex(x => x.id === item.id); if (i > -1) db[col][i] = { ...db[col][i], ...item }; else db[col].push(item); }
      persist(); return item;
    },
    remove(col, id) { db[col] = db[col].filter(x => x.id !== id); persist(); },
    getAtt(date, cid, sec) { return db.attendance[`${date}|${cid}|${sec}`] || null; },
    setAtt(date, cid, sec, marks) { db.attendance[`${date}|${cid}|${sec}`] = marks; persist(); },
    nextSerial(type) { const y = new Date().getFullYear(); const k = type + y; db.settings.serials[k] = (db.settings.serials[k] || 0) + 1; persist(); return `${type}-${y}-${String(db.settings.serials[k]).padStart(4, '0')}`; },
    exportJSON() { return JSON.stringify({ app: 'sms-highschool', version: 2, mode, exportedAt: new Date().toISOString(), data: db }); },
    async importJSON(text) { const o = JSON.parse(text); const d = o.data || o; if (!d.settings || !Array.isArray(d.students)) throw new Error('bad'); db = migrate(d); persist(); if (mode === 'live') await Cloud.flush(); },
    async wipeData() { const keep = db.settings; const fresh = defaults(); fresh.settings = keep; fresh.settings.serials = {}; db = fresh; persist(); if (mode === 'live') await Cloud.flush(); }
  };
})();

/* ---------- নমুনা ডেটা ---------- */
const Demo = {
  fill(db) {
    const r = a => a[Math.floor(Math.random() * a.length)];
    const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    const boys = ['আরিফ', 'তানভীর', 'সাকিব', 'রাফি', 'মেহেদী', 'নাঈম', 'ইমরান', 'শাহরিয়ার', 'আবির', 'রিফাত', 'জুবায়ের', 'সাদমান', 'তাহমিদ', 'ফাহিম', 'নাফিস', 'রাকিব', 'সিয়াম', 'আসিফ', 'প্রান্ত', 'অনিক'];
    const girls = ['নুসরাত', 'সুমাইয়া', 'তাসনিম', 'ফারিহা', 'মারিয়া', 'সাদিয়া', 'আফরিন', 'জান্নাতুল', 'রুবাইয়া', 'মাহজাবিন', 'তানজিলা', 'নাবিলা', 'সুরাইয়া', 'ইশরাত', 'লামিয়া', 'আনিকা', 'প্রিয়াংকা', 'মৌমিতা'];
    const sur = ['হোসেন', 'রহমান', 'ইসলাম', 'আহমেদ', 'চৌধুরী', 'সরকার', 'মিয়া', 'খান', 'মাহমুদ', 'আলম', 'উদ্দিন', 'বিশ্বাস'];
    const fathers = ['মোঃ আব্দুল করিম', 'মোঃ রফিকুল ইসলাম', 'মোঃ জাহাঙ্গীর আলম', 'মোঃ নুরুল হক', 'মোঃ শফিকুল ইসলাম', 'মোঃ আনোয়ার হোসেন', 'মোঃ মিজানুর রহমান', 'মোঃ কামরুল হাসান', 'মোঃ আলমগীর কবির', 'মোঃ হাবিবুর রহমান'];
    const mothers = ['রাশিদা বেগম', 'নাসরিন আক্তার', 'শাহনাজ পারভীন', 'মর্জিনা খাতুন', 'ফাতেমা বেগম', 'সালমা আক্তার', 'রোকসানা বেগম', 'হাসিনা খাতুন'];
    const villages = ['চরপাড়া', 'নতুনবাজার', 'পূর্বপাড়া', 'কলেজ রোড', 'স্টেশন রোড', 'মধ্যপাড়া'];
    const blood = ['A+', 'B+', 'O+', 'AB+', 'O-', 'B-'];
    const year = new Date().getFullYear(), S = db.settings;
    Object.assign(S.school, { headName: S.school.headName || 'মোঃ আব্দুল মান্নান', phone: S.school.phone || '01711-000000', established: S.school.established || '১৯৬৮', nameEn: S.school.nameEn || 'Charpara High School' });
    let n = 0;
    S.classes.forEach(c => c.sections.forEach(sec => {
      const count = rnd(10, 13);
      for (let i = 1; i <= count; i++) {
        const g = Math.random() < .5 ? 'M' : 'F'; n++;
        const dob = new Date(year - (c.order + 5), rnd(0, 11), rnd(1, 27));
        db.students.push({
          id: 'st' + n, studentId: `${year}${String(c.order).padStart(2, '0')}${String(n).padStart(3, '0')}`,
          nameBn: (g === 'M' ? r(boys) : r(girls)) + ' ' + r(sur), nameEn: '', classId: c.id, section: sec,
          group: c.hasGroups ? r(S.groups) : '', roll: i, gender: g, dob: Fmt.iso(dob),
          religion: Math.random() < .9 ? 'ইসলাম' : 'হিন্দু', blood: r(blood), father: r(fathers), mother: r(mothers),
          phone: '01' + r(['7', '8', '9', '3', '5', '6']) + String(rnd(10000000, 99999999)),
          address: r(villages) + ', সদর', admissionDate: `${year}-01-0${rnd(1, 8)}`,
          sscReg: c.order >= 9 ? String(rnd(1910000000, 1999999999)) : '', status: 'active', photo: '', custom: {}
        });
      }
    }));
    // গত বছরের এসএসসি উত্তীর্ণ (প্রশংসাপত্রের জন্য)
    for (let i = 1; i <= 8; i++) { const g = Math.random() < .5 ? 'M' : 'F'; n++;
      db.students.push({ id: 'st' + n, studentId: `${year - 1}10${String(i).padStart(3, '0')}`, nameBn: (g === 'M' ? r(boys) : r(girls)) + ' ' + r(sur), nameEn: '', classId: 'c10', section: 'ক', group: r(S.groups), roll: i, gender: g,
        dob: Fmt.iso(new Date(year - 17, rnd(0, 11), rnd(1, 27))), religion: 'ইসলাম', blood: r(blood), father: r(fathers), mother: r(mothers), phone: '01' + r(['7', '8', '9']) + String(rnd(10000000, 99999999)),
        address: r(villages) + ', সদর', admissionDate: `${year - 5}-01-05`, sscReg: String(rnd(1810000000, 1899999999)), sscRoll: String(rnd(100000, 999999)), sscGpa: r(['5.00', '4.89', '4.67', '4.50', '4.11', '3.94']), sscYear: String(year - 1), sscBoard: 'ময়মনসিংহ', status: 'passed', photo: '', custom: {} }); }
    const T = [
      ['মোঃ আব্দুল মান্নান', 'প্রধান শিক্ষক', '', 'শিক্ষক', 'এম.এ, বি.এড', 52000],
      ['শামীমা নাসরিন', 'সহকারী প্রধান শিক্ষক', 'বাংলা প্রথম পত্র', 'শিক্ষক', 'এম.এ (বাংলা)', 45000],
      ['মোঃ রেজাউল করিম', 'সিনিয়র শিক্ষক', 'গণিত', 'শিক্ষক', 'এম.এসসি (গণিত)', 38000],
      ['ফারহানা ইয়াসমিন', 'সিনিয়র শিক্ষক', 'English 1st Paper', 'শিক্ষক', 'এম.এ (ইংরেজি)', 38000],
      ['মোঃ সাইফুল ইসলাম', 'সহকারী শিক্ষক', 'পদার্থবিজ্ঞান', 'শিক্ষক', 'এম.এসসি (পদার্থ)', 30000],
      ['তাহমিনা আক্তার', 'সহকারী শিক্ষক', 'রসায়ন', 'শিক্ষক', 'এম.এসসি (রসায়ন)', 30000],
      ['মোঃ কামাল হোসেন', 'সহকারী শিক্ষক', 'জীববিজ্ঞান', 'শিক্ষক', 'বি.এসসি, বি.এড', 28000],
      ['সুলতানা রাজিয়া', 'সহকারী শিক্ষক', 'হিসাববিজ্ঞান', 'শিক্ষক', 'এম.কম', 28000],
      ['মোঃ আনিসুর রহমান', 'সহকারী শিক্ষক', 'ইতিহাস ও বিশ্বসভ্যতা', 'শিক্ষক', 'এম.এ (ইতিহাস)', 28000],
      ['রুমানা আফরোজ', 'সহকারী শিক্ষক', 'তথ্য ও যোগাযোগ প্রযুক্তি', 'শিক্ষক', 'বি.এসসি (সিএসই)', 28000],
      ['মাওলানা আবু তাহের', 'সহকারী শিক্ষক', 'ধর্ম ও নৈতিক শিক্ষা', 'শিক্ষক', 'কামিল', 26000],
      ['মোঃ জসিম উদ্দিন', 'অফিস সহকারী', '', 'কর্মচারী', 'এইচ.এস.সি', 16000],
      ['মোঃ বাবুল মিয়া', 'অফিস সহায়ক', '', 'কর্মচারী', 'এস.এস.সি', 12000],
      ['নাসরিন সুলতানা', 'সহকারী শিক্ষক', 'বাংলা দ্বিতীয় পত্র', 'শিক্ষক', 'এম.এ (বাংলা)', 26000],
      ['মোঃ মাহবুবুর রহমান', 'সহকারী শিক্ষক', 'বাংলা প্রথম পত্র', 'শিক্ষক', 'বি.এ (অনার্স)', 25000],
      ['সাবরিনা ইসলাম', 'সহকারী শিক্ষক', 'English 2nd Paper', 'শিক্ষক', 'এম.এ (ইংরেজি)', 26000],
      ['মোঃ ইকবাল হোসেন', 'সহকারী শিক্ষক', 'English 1st Paper', 'শিক্ষক', 'বি.এ (ইংরেজি)', 25000],
      ['মোঃ শহিদুল আলম', 'সহকারী শিক্ষক', 'গণিত', 'শিক্ষক', 'বি.এসসি (গণিত)', 26000],
      ['রেহানা পারভীন', 'সহকারী শিক্ষক', 'সাধারণ বিজ্ঞান', 'শিক্ষক', 'বি.এসসি, বি.এড', 25000],
      ['মোঃ জাকির হোসেন', 'সহকারী শিক্ষক', 'সাধারণ বিজ্ঞান', 'শিক্ষক', 'এম.এসসি (প্রাণিবিদ্যা)', 25000],
      ['মোঃ মোস্তফা কামাল', 'সহকারী শিক্ষক', 'কৃষিশিক্ষা', 'শিক্ষক', 'বি.এসসি (কৃষি)', 24000],
      ['শাহানা আক্তার', 'সহকারী শিক্ষক', 'বাংলাদেশ ও বিশ্বপরিচয়', 'শিক্ষক', 'এম.এস.এস', 24000],
      ['মোঃ ফারুক আহমেদ', 'সহকারী শিক্ষক', 'উচ্চতর গণিত', 'শিক্ষক', 'এম.এসসি (গণিত)', 26000],
      ['শ্রী বিপ্লব কুমার দাস', 'সহকারী শিক্ষক', 'ধর্ম ও নৈতিক শিক্ষা', 'শিক্ষক', 'এম.এ', 24000],
      ['মোঃ রাশেদুল হক', 'সহকারী শিক্ষক', 'ভূগোল ও পরিবেশ', 'শিক্ষক', 'এম.এসসি (ভূগোল)', 24000],
      ['তানিয়া সুলতানা', 'সহকারী শিক্ষক', 'ব্যবসায় উদ্যোগ', 'শিক্ষক', 'এম.বি.এ', 24000],
      ['মোঃ সোহেল রানা', 'সহকারী শিক্ষক', 'তথ্য ও যোগাযোগ প্রযুক্তি', 'শিক্ষক', 'বি.এসসি (সিএসই)', 24000]
    ];
    T.forEach((t, i) => db.teachers.push({ id: 't' + (i + 1), name: t[0], designation: t[1], subject: t[2], type: t[3], qualification: t[4], salary: t[5],
      phone: '01' + r(['7', '8', '9', '1']) + String(rnd(10000000, 99999999)), email: '', joinDate: `${rnd(2005, 2022)}-0${rnd(1, 9)}-15`, address: '', photo: '', status: 'active' }));
    // শ্রেণি শিক্ষক
    S.classes.forEach((c, i) => c.sections.forEach((sec, j) => { c.teacherBySection[sec] = 't' + (2 + ((i * 2 + j) % 10)); }));
    // উপস্থিতি — গত ৮ সপ্তাহ
    const today = new Date();
    for (let d = 56; d >= 1; d--) {
      const dt = new Date(today); dt.setDate(today.getDate() - d);
      if (S.weeklyOff.includes(dt.getDay())) continue;
      const ds = Fmt.iso(dt), rate = .84 + Math.random() * .12;
      S.classes.forEach(c => c.sections.forEach(sec => {
        const m = {}; db.students.filter(s => s.classId === c.id && s.section === sec && s.status === 'active').forEach(s => { const x = Math.random(); m[s.id] = x < rate ? 'P' : x < rate + .03 ? 'L' : 'A'; });
        db.attendance[`${ds}|${c.id}|${sec}`] = m;
      }));
    }
    // রুটিন
    const days = [6, 0, 1, 2, 3, 4];
    S.classes.forEach(c => c.sections.forEach(sec => {
      const subs = S.subjects.filter(s => s.classes.includes(c.id) && !s.group);
      const rt = {}; days.forEach((d, di) => { rt[d] = {}; S.periods.filter(p => !p.brk).forEach((p, pi) => {
        const s = subs[(di + pi + c.order) % subs.length]; const t = db.teachers.find(t => t.subject === s.name);
        rt[d][p.id] = { subjectId: s.id, teacherId: t ? t.id : '' }; }); });
      db.routine[`${c.id}|${sec}`] = rt;
    }));
    // পরীক্ষা ও নম্বর
    const ex = { id: 'ex1', name: 'অর্ধবার্ষিক পরীক্ষা', session: String(year), classes: S.classes.map(c => c.id), startDate: `${year}-06-15`, endDate: `${year}-06-28`, published: true };
    const ex2 = { id: 'ex2', name: 'বার্ষিক পরীক্ষা', session: String(year), classes: S.classes.map(c => c.id), startDate: `${year}-12-01`, endDate: `${year}-12-14`, published: false };
    db.exams.push(ex, ex2);
    db.students.filter(s => s.status === 'active').forEach(s => {
      const lvl = rnd(45, 92); const m = {};
      S.subjects.filter(x => x.classes.includes(s.classId) && (!x.group || x.group === s.group)).forEach(x => { m[x.id] = Math.max(18, Math.min(100, lvl + rnd(-16, 12))); });
      db.marks[`ex1|${s.id}`] = m;
    });
    // ফি আদায় ও হিসাব
    let rc = 0; const months = today.getMonth() + 1;
    db.students.filter(s => s.status === 'active').forEach(s => {
      const paidTill = rnd(Math.max(1, months - 3), months);
      for (let mo = 1; mo <= paidTill; mo += rnd(1, 3)) {
        const span = Math.min(paidTill - mo + 1, rnd(1, 3)); const items = [];
        for (let k = 0; k < span; k++) items.push({ headId: 'fh_m', label: 'মাসিক বেতন', month: `${year}-${String(mo + k).padStart(2, '0')}`, amount: S.feeHeads[0].amounts[s.classId] });
        if (mo === 1) items.push({ headId: 'fh_a', label: 'ভর্তি ও সেশন ফি', amount: S.feeHeads[1].amounts[s.classId] });
        rc++; const date = `${year}-${String(Math.min(mo + span - 1, months)).padStart(2, '0')}-${String(rnd(3, 20)).padStart(2, '0')}`;
        const total = items.reduce((a, b) => a + b.amount, 0);
        db.payments.push({ id: 'pay' + rc, receiptNo: `RCP-${year}-${String(rc).padStart(4, '0')}`, studentId: s.id, date: date > Fmt.iso(today) ? Fmt.iso(today) : date, items, discount: 0, total, method: r(['নগদ', 'নগদ', 'বিকাশ', 'নগদ']), note: '' });
        mo += span - 1;
      }
    });
    S.serials['RCP' + year] = rc;
    for (let mo = Math.max(1, months - 5); mo <= months; mo++) {
      const ym = `${year}-${String(mo).padStart(2, '0')}`;
      [['বিদ্যুৎ ও পানি বিল', rnd(4500, 7000)], ['স্টেশনারি ও ছাপা', rnd(2000, 5000)], ['রক্ষণাবেক্ষণ', rnd(1000, 6000)]].forEach(([cat, a], i) =>
        db.ledger.push({ id: `lg${mo}_${i}`, type: 'expense', date: `${ym}-1${i}`, category: cat, amount: a, note: '' }));
      if (mo < months) {
        db.salaries[ym] = {}; db.teachers.forEach(t => { db.salaries[ym][t.id] = { paid: true, date: `${ym}-28`, amount: t.salary }; });
      }
    }
    db.ledger.push({ id: 'lgg', type: 'income', date: `${year}-${String(Math.max(1, months - 2)).padStart(2, '0')}-05`, category: 'সরকারি অনুদান', amount: 150000, note: 'অবকাঠামো অনুদান' });
    // নোটিশ
    const dISO = off => { const x = new Date(today); x.setDate(today.getDate() + off); return Fmt.iso(x); };
    db.notices.push(
      { id: 'n1', kind: 'নোটিশ', title: 'বার্ষিক পরীক্ষার সময়সূচি প্রকাশ', body: 'আগামী ১ ডিসেম্বর থেকে বার্ষিক পরীক্ষা শুরু হবে। বিস্তারিত সময়সূচি নোটিশ বোর্ডে দেওয়া আছে। সকল শিক্ষার্থীকে বকেয়া বেতন পরিশোধ করে প্রবেশপত্র সংগ্রহ করতে বলা হলো।', date: dISO(-2), pinned: true, eventDate: '' },
      { id: 'n2', kind: 'ইভেন্ট', title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা', body: 'বিদ্যালয় মাঠে সকাল ৯টায় উদ্বোধন।', date: dISO(-5), eventDate: dISO(9), pinned: false },
      { id: 'n3', kind: 'ছুটি', title: 'মহান বিজয় দিবস', body: 'বিদ্যালয় বন্ধ থাকবে।', date: dISO(-6), eventDate: `${year}-12-16`, pinned: false },
      { id: 'n4', kind: 'নোটিশ', title: 'অভিভাবক সমাবেশ', body: 'দশম শ্রেণির অভিভাবকদের উপস্থিত থাকার অনুরোধ করা হলো।', date: dISO(-9), eventDate: dISO(4), pinned: false }
    );
    // লাইব্রেরি
    [['আমার বন্ধু রাশেদ', 'মুহম্মদ জাফর ইকবাল', 3], ['পথের পাঁচালী', 'বিভূতিভূষণ বন্দ্যোপাধ্যায়', 2], ['ঠাকুরমার ঝুলি', 'দক্ষিণারঞ্জন মিত্র মজুমদার', 2], ['হাজার বছর ধরে', 'জহির রায়হান', 2], ['বিজ্ঞানের মজার খেলা', 'আব্দুল্লাহ আল-মুতী', 3], ['Oxford Advanced Learner\'s Dictionary', 'Oxford', 1], ['সংশপ্তক', 'শহীদুল্লা কায়সার', 1], ['দীপু নাম্বার টু', 'মুহম্মদ জাফর ইকবাল', 2]]
      .forEach((b, i) => db.books.push({ id: 'b' + (i + 1), title: b[0], author: b[1], copies: b[2], code: 'L-' + String(101 + i), shelf: 'তাক ' + (1 + (i % 3)) }));
    db.loans.push({ id: 'l1', bookId: 'b1', studentId: 'st3', issueDate: dISO(-20), dueDate: dISO(-6), returnDate: '' }, { id: 'l2', bookId: 'b5', studentId: 'st40', issueDate: dISO(-4), dueDate: dISO(10), returnDate: '' });
  }
};
