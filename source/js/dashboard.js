/* =========================================================
   ড্যাশবোর্ড
   ========================================================= */
Views.dashboard = view => {
  const today = todayISO(), now = new Date();
  setTitle('ড্যাশবোর্ড', '', `<button class="btn btn-ghost" id="palBtn">${ic('search', 'ico-16')}<span>খুঁজুন</span></button>`);
  $('#palBtn').onclick = openPalette;
  const st = activeStudents(), boys = st.filter(s => s.gender === 'M').length;
  const rates = dailyRates(), tr = rates[today];
  const sections = S().classes.reduce((n, c) => n + c.sections.length, 0);
  const takenToday = Object.keys(D().attendance).filter(k => k.startsWith(today + '|')).length;
  const ym = today.slice(0, 7);
  const feeMonth = Store.all('payments').filter(p => p.date.startsWith(ym)).reduce((a, p) => a + p.total, 0);
  const dues = st.map(s => ({ s, d: dueOf(s) })).filter(x => x.d.amount > 0).sort((a, b) => b.d.amount - a.d.amount);
  const dueTotal = dues.reduce((a, x) => a + x.d.amount, 0);
  const staff = Store.all('teachers').filter(t => t.status !== 'left');

  view.innerHTML = `
  <div class="today mb-3">
    <svg class="art" width="360" height="220" viewBox="0 0 360 220" aria-hidden="true"><g fill="none" stroke="#fff" stroke-opacity=".07" stroke-width="1.5"><circle cx="260" cy="60" r="90"/><circle cx="260" cy="60" r="140"/><circle cx="260" cy="60" r="190"/></g></svg>
    <div class="date">${Fmt.day(today)}, ${Fmt.date(today)}</div>
    <h2>${esc(S().school.name)}</h2>
    <div class="k stagger">
      <div><div class="l">অধ্যয়নরত শিক্ষার্থী</div><div class="v num" data-to="${st.length}">০</div><div class="s">ছাত্র ${Fmt.n(boys)} · ছাত্রী ${Fmt.n(st.length - boys)}</div></div>
      <div><div class="l">আজকের উপস্থিতি</div>${tr ? `<div class="v num gold" data-to="${(tr.p / tr.t * 100).toFixed(1)}" data-f="pct">০</div><div class="s">${Fmt.n(sections)}টি শাখার মধ্যে ${Fmt.n(takenToday)}টিতে নেওয়া হয়েছে</div>`
        : `<div class="v" style="font-size:20px;line-height:34px">${isOff(today) ? 'সাপ্তাহিক ছুটি' : 'এখনো নেওয়া হয়নি'}</div><div class="s">${isOff(today) ? 'আজ ক্লাস নেই' : `${Fmt.n(sections)}টি শাখা বাকি`}</div>`}</div>
      <div><div class="l">এ মাসে ফি আদায়</div><div class="v num" data-to="${feeMonth}" data-f="tk">০</div><div class="s">${Fmt.n(Store.all('payments').filter(p => p.date.startsWith(ym)).length)}টি রসিদ</div></div>
      <div><div class="l">মোট বকেয়া বেতন</div><div class="v num gold" data-to="${dueTotal}" data-f="tk">০</div><div class="s">${Fmt.n(dues.length)} জন শিক্ষার্থীর</div></div>
    </div>
    <div class="qa">
      <button class="btn btn-gold" id="qAdd">${ic('plus', 'ico-16')} নতুন ভর্তি</button>
      <a class="btn" href="#attendance">${ic('attendance', 'ico-16')} উপস্থিতি নিন</a>
      <a class="btn" href="#fees">${ic('fee', 'ico-16')} ফি আদায়</a>
      <a class="btn" href="#documents">${ic('docs', 'ico-16')} প্রবেশপত্র ও সনদ</a>
      <a class="btn" href="#notices">${ic('notice', 'ico-16')} নোটিশ দিন</a>
    </div>
  </div>

  <div class="row g-3 mb-3">
    <div class="col-xl-8"><div class="card-x h-100">
      <div class="card-head"><h3>উপস্থিতির ছবি</h3><span class="right">গত ৮ সপ্তাহ · বর্গে মাউস রাখলে দিনের হার দেখাবে</span></div>
      <div class="card-pad" id="heatWrap"></div></div></div>
    <div class="col-xl-4"><div class="card-x h-100">
      <div class="card-head"><h3>শ্রেণিভিত্তিক শিক্ষার্থী</h3><span class="right legend"><i style="background:var(--primary)"></i> ছাত্র <i style="background:var(--gold);margin-left:8px"></i> ছাত্রী</span></div>
      <div class="card-pad" id="bars"></div></div></div>
  </div>

  <div class="row g-3 mb-3">
    <div class="col-xl-5"><div class="card-x h-100">
      <div class="card-head"><h3>আয় ও ব্যয়</h3><span class="right legend"><i style="background:var(--primary)"></i> আয় <i style="background:var(--gold);margin-left:8px"></i> ব্যয়</span></div>
      <div class="card-pad" id="cash"></div></div></div>
    <div class="col-xl-4 col-lg-7"><div class="card-x h-100">
      <div class="card-head"><h3>নোটিশ ও আসন্ন ইভেন্ট</h3><a class="right" href="#notices">সব দেখুন</a></div><div id="nts"></div></div></div>
    <div class="col-xl-3 col-lg-5"><div class="card-x h-100">
      <div class="card-head"><h3>এ সপ্তাহে জন্মদিন</h3></div><div id="bday"></div></div></div>
  </div>

  <div class="row g-3">
    <div class="col-lg-4"><div class="card-x h-100"><div class="card-head"><h3>নজর দিন</h3><span class="right">টানা ৩ দিন অনুপস্থিত</span></div><div id="watch"></div></div></div>
    <div class="col-lg-4"><div class="card-x h-100"><div class="card-head"><h3>সবচেয়ে বেশি বকেয়া</h3><a class="right" href="#fees">ফি আদায়</a></div><div id="dues"></div></div></div>
    <div class="col-lg-4"><div class="card-x h-100"><div class="card-head"><h3>সাম্প্রতিক ভর্তি</h3><a class="right" href="#students">সব দেখুন</a></div><div id="recent"></div></div></div>
  </div>`;
  $('#qAdd').onclick = () => studentForm();
  $$('[data-to]', view).forEach(el => UI.tween(el, +el.dataset.to));

  /* heatmap */
  const weeks = 8;
  const start = new Date(now); start.setDate(now.getDate() - ((now.getDay() + 1) % 7) - (weeks - 1) * 7);
  let h = `<div class="heat" style="--weeks:${weeks}">`;
  WEEK_ORDER.forEach(dw => {
    h += `<span class="dl">${DAYS[dw]}</span>`;
    for (let w = 0; w < weeks; w++) {
      const d = new Date(start); d.setDate(start.getDate() + w * 7 + ((dw - 6 + 7) % 7));
      const iso = Fmt.iso(d), future = iso > today, r = rates[iso];
      let cls = 'c', l = 0, tip = Fmt.dateS(iso) + ' · ';
      if (future) { cls += ' off'; tip = ''; }
      else if (isOff(iso)) { cls += ' off'; tip += 'ছুটি'; }
      else if (r) { const pc = r.p / r.t * 100; l = pc >= 93 ? 4 : pc >= 88 ? 3 : pc >= 80 ? 2 : 1; tip += 'উপস্থিতি ' + Fmt.pct(pc.toFixed(1)); }
      else tip += 'হাজিরা নেওয়া হয়নি';
      if (iso === today) cls += ' today';
      h += `<span class="${cls}" data-l="${l}" data-tip="${tip}" style="${future ? 'visibility:hidden' : ''}"></span>`;
    }
  });
  h += `</div><div class="legend mt-3">কম <i style="background:var(--h1)"></i><i style="background:var(--h2)"></i><i style="background:var(--h3)"></i><i style="background:var(--h4)"></i> বেশি</div>`;
  const lastDays = Object.keys(rates).filter(d => d <= today).sort().slice(-5);
  const secRates = [];
  sortedClasses().forEach(c => c.sections.forEach(sec => {
    let p = 0, t = 0; lastDays.forEach(d => { const m = Store.getAtt(d, c.id, sec); if (m) Object.values(m).forEach(v => { t++; if (v === 'P') p++; }); });
    if (t) secRates.push({ label: `${c.short} ${sec}`, r: p / t * 100 });
  }));
  secRates.sort((a, b) => a.r - b.r);
  const rank = `<div class="rank"><div class="sec mb-2 small-t">শেষ ${Fmt.n(lastDays.length)} কর্মদিবসে শাখাভিত্তিক হার</div>
    ${secRates.map(x => `<div class="rank-row"><span>${esc(x.label)} শাখা</span><span class="track"><span class="${x.r < 85 ? 'n' : 'b'}" style="width:0" data-w="${Math.max(4, (x.r - 60) / 40 * 100)}"></span></span><span class="num text-end ${x.r < 85 ? 'down' : ''}">${Fmt.pct(x.r.toFixed(0))}</span></div>`).join('') || '<div class="muted small-t">এখনো হাজিরার তথ্য নেই</div>'}</div>`;
  $('#heatWrap').innerHTML = `<div class="heat-wrap"><div>${h}</div>${rank}</div>`;
  UI.bindTips($('#heatWrap'));

  /* class bars */
  const counts = sortedClasses().map(c => { const s = st.filter(x => x.classId === c.id); return { c, m: s.filter(x => x.gender === 'M').length, f: s.filter(x => x.gender !== 'M').length }; });
  const max = Math.max(1, ...counts.map(x => x.m + x.f));
  $('#bars').innerHTML = counts.map(x => `<div class="bar-row"><span class="sec">${esc(x.c.short)}</span>
    <div class="track" style="height:12px;border-radius:6px" data-tip="ছাত্র ${Fmt.n(x.m)}, ছাত্রী ${Fmt.n(x.f)}"><span class="b" style="width:0" data-w="${x.m / max * 100}"></span><span class="g" style="width:0" data-w="${x.f / max * 100}"></span></div>
    <span class="num text-end">${Fmt.n(x.m + x.f)}</span></div>`).join('') || UI.empty('কোনো শ্রেণি নেই');
  UI.bindTips($('#bars'));

  /* cash flow: last 6 months */
  const L = allLedger(), mths = [];
  for (let i = 5; i >= 0; i--) { const d = new Date(now.getFullYear(), now.getMonth() - i, 1); mths.push(Fmt.iso(d).slice(0, 7)); }
  const flow = mths.map(m => ({ m, in: L.filter(x => x.type === 'income' && x.date.startsWith(m)).reduce((a, x) => a + x.amount, 0), ex: L.filter(x => x.type === 'expense' && x.date.startsWith(m)).reduce((a, x) => a + x.amount, 0) }));
  const fmax = Math.max(1, ...flow.map(f => Math.max(f.in, f.ex)));
  const thisM = flow[flow.length - 1];
  $('#cash').innerHTML = `<div class="d-flex gap-4 mb-2"><div><div class="muted small-t">এ মাসে আয়</div><div class="num" style="font-size:20px;font-weight:500">${Fmt.tk(thisM.in)}</div></div>
    <div><div class="muted small-t">এ মাসে ব্যয়</div><div class="num" style="font-size:20px;font-weight:500">${Fmt.tk(thisM.ex)}</div></div></div>
    <div class="cols">${flow.map(f => `<div class="col"><div class="pair" data-tip="${Fmt.ym(f.m)} · আয় ${Fmt.tk(f.in)}, ব্যয় ${Fmt.tk(f.ex)}"><span class="in" data-h="${f.in / fmax * 100}"></span><span class="ex" data-h="${f.ex / fmax * 100}"></span></div><span class="lb">${Fmt.monS(f.m)}</span></div>`).join('')}</div>`;
  UI.bindTips($('#cash'));

  /* notices */
  const ns = [...Store.all('notices')].sort((a, b) => (b.pinned - a.pinned) || (a.date < b.date ? 1 : -1)).slice(0, 4);
  $('#nts').innerHTML = ns.length ? ns.map(n => { const d = n.eventDate || n.date; return `<div class="list-row click" data-n="${n.id}"><div class="date-chip"><b class="num">${Fmt.bd(+d.slice(8))}</b><span>${Fmt.monS(d.slice(0, 7))}</span></div>
    <div style="min-width:0" class="flex-grow-1"><div class="text-truncate">${esc(n.title)}</div><div class="muted small-t">${esc(n.kind)}${n.eventDate ? ' · ' + Fmt.day(n.eventDate) : ''}</div></div>${n.pinned ? `<span class="tag gold">${ic('pin', 'ico-16')}</span>` : ''}</div>`; }).join('') : UI.empty('কোনো নোটিশ নেই', 'notice');
  $$('[data-n]', view).forEach(r => r.onclick = () => noticeForm(Store.find('notices', r.dataset.n)));

  /* birthdays */
  const bd = st.filter(s => { if (!s.dob) return false; const d = new Date(s.dob + 'T00:00'); for (let i = 0; i < 7; i++) { const x = new Date(now); x.setDate(now.getDate() + i); if (x.getMonth() === d.getMonth() && x.getDate() === d.getDate()) return true; } return false; })
    .sort((a, b) => a.dob.slice(5) < b.dob.slice(5) ? -1 : 1);
  $('#bday').innerHTML = bd.length ? bd.slice(0, 5).map(s => studentRow(s, `<span class="tag gold">${Fmt.dateS(today.slice(0, 4) + s.dob.slice(4))}</span>`)).join('') : UI.empty('এ সপ্তাহে কারো জন্মদিন নেই', 'gift');

  /* watch */
  const flagged = [];
  sortedClasses().forEach(c => c.sections.forEach(sec => {
    const keys = Object.keys(D().attendance).filter(k => k.endsWith(`|${c.id}|${sec}`)).sort().slice(-3);
    if (keys.length < 3) return;
    st.filter(s => s.classId === c.id && s.section === sec).forEach(s => { if (keys.every(k => D().attendance[k][s.id] === 'A')) flagged.push(s); });
  }));
  $('#watch').innerHTML = flagged.length ? flagged.slice(0, 5).map(s => studentRow(s, `<span class="tag r">৩ দিন</span>`)).join('') : UI.empty('কেউ টানা অনুপস্থিত নেই', 'check');
  $('#dues').innerHTML = dues.length ? dues.slice(0, 5).map(x => studentRow(x.s, `<div class="text-end"><div class="num">${Fmt.tk(x.d.amount)}</div><div class="muted" style="font-size:12px">${Fmt.n(x.d.months.length)} মাস</div></div>`)).join('') : UI.empty('কারো বকেয়া নেই', 'check');
  const rec = [...st].sort((a, b) => ((b.createdAt || b.admissionDate || '') > (a.createdAt || a.admissionDate || '') ? 1 : -1)).slice(0, 5);
  $('#recent').innerHTML = rec.length ? rec.map(s => studentRow(s, `<span class="muted small-t">${Fmt.dateS(s.admissionDate)}</span>`)).join('') : UI.empty('এখনো কোনো শিক্ষার্থী নেই', 'students');
  $$('[data-sid]', view).forEach(r => r.onclick = () => studentProfile(r.dataset.sid));

  setTimeout(() => {
    $$('[data-w]', view).forEach(b => b.style.width = b.dataset.w + '%');
    $$('[data-h]', view).forEach(b => b.style.height = Math.max(2, b.dataset.h) + '%');
  }, 80);
};
const studentRow = (s, right) => `<div class="list-row click" data-sid="${s.id}">${UI.avatar(s.nameBn, s.photo, '', s.gender)}
  <div class="flex-grow-1" style="min-width:0"><div class="text-truncate">${esc(s.nameBn)}</div><div class="muted small-t">${esc(studentLine(s))}</div></div>${right}</div>`;
