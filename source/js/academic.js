/* =========================================================
   উপস্থিতি, রুটিন, পরীক্ষা ও ফলাফল
   ========================================================= */
let attTab = 'take';
const attSel = { date: '', cls: '', sec: '', month: '' };
function fixSel(o) {
  o.cls = clsById(o.cls) ? o.cls : sortedClasses()[0]?.id || '';
  if (!clsById(o.cls)?.sections.includes(o.sec)) o.sec = clsById(o.cls)?.sections[0] || '';
}
Views.attendance = view => {
  attSel.date = attSel.date || todayISO(); attSel.month = attSel.month || todayISO().slice(0, 7); fixSel(attSel);
  setTitle('উপস্থিতি', '', attTab === 'month' ? `<button class="btn btn-ghost" id="prt">${ic('print', 'ico-16')}<span>প্রিন্ট / PDF</span></button>` : '');
  view.innerHTML = `<div class="tabs"><button data-t="take" class="${attTab === 'take' ? 'on' : ''}">হাজিরা নিন</button><button data-t="month" class="${attTab === 'month' ? 'on' : ''}">মাসিক হাজিরা খাতা</button></div><div id="attBody"></div>`;
  $$('.tabs button', view).forEach(b => b.onclick = () => { attTab = b.dataset.t; Views.attendance(view); });
  attTab === 'take' ? attTake($('#attBody')) : attMonth($('#attBody'));
  if ($('#prt')) $('#prt').onclick = () => openStudio('attsheet', { classId: attSel.cls, section: attSel.sec, month: attSel.month });
};
function attTake(el) {
  el.innerHTML = `<div class="toolbar">
    <input type="date" class="form-control" id="ad" value="${attSel.date}" max="${todayISO()}">
    <select class="form-select" id="ac">${classOptions(attSel.cls)}</select>
    <select class="form-select" id="as">${sectionOptions(attSel.cls, attSel.sec)}</select>
    <span id="saved" class="ms-1"></span></div>
  <div class="card-x mb-3"><div class="card-pad d-flex flex-wrap align-items-center gap-3">
    <div class="att-sum" id="sum"></div>
    <div class="ms-auto d-flex gap-2"><button class="btn btn-ghost" id="allP">${ic('check', 'ico-16')} সবাই উপস্থিত</button><button class="btn btn-primary" id="saveA">সংরক্ষণ করুন</button></div>
  </div></div>
  <div id="offNote"></div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রোল</th><th>নাম</th><th class="hide-m">এ মাসে অনুপস্থিত</th><th class="r">হাজিরা</th></tr></thead><tbody id="atb"></tbody></table></div></div>`;
  let marks = {}, dirty = false;
  const roster = () => sortStudents(activeStudents().filter(s => s.classId === attSel.cls && s.section === attSel.sec));
  const sum = () => {
    const v = Object.values(marks), p = v.filter(x => x === 'P').length, a = v.filter(x => x === 'A').length, l = v.filter(x => x === 'L').length;
    $('#sum').innerHTML = `<div>মোট<b class="num">${Fmt.n(v.length)}</b></div><div>উপস্থিত<b class="num" style="color:var(--pos)">${Fmt.n(p)}</b></div><div>অনুপস্থিত<b class="num" style="color:var(--neg)">${Fmt.n(a)}</b></div><div>ছুটি<b class="num" style="color:var(--warn)">${Fmt.n(l)}</b></div>`;
    $('#saved').innerHTML = dirty ? `<span class="tag y">সংরক্ষণ বাকি</span>` : (Store.getAtt(attSel.date, attSel.cls, attSel.sec) ? `<span class="tag g">${ic('check', 'ico-16')} সংরক্ষিত</span>` : '');
  };
  const load = () => {
    const ex = Store.getAtt(attSel.date, attSel.cls, attSel.sec), r = roster(), from = attSel.date.slice(0, 7) + '-01';
    marks = {}; r.forEach(s => marks[s.id] = ex && ex[s.id] ? ex[s.id] : 'P'); dirty = false;
    $('#offNote').innerHTML = isOff(attSel.date) ? `<div class="card-x card-pad mb-3 sec" style="background:var(--gold-soft);border-color:transparent">${Fmt.day(attSel.date)} সাপ্তাহিক ছুটির দিন। দরকার হলে তবুও হাজিরা নিতে পারেন</div>` : '';
    $('#atb').innerHTML = r.length ? r.map(s => { const a = studentAtt(s, from, attSel.date).a; return `<tr data-id="${s.id}"><td><span class="roll num">${Fmt.n(s.roll)}</span></td>
      <td><div class="d-flex align-items-center gap-2">${UI.avatar(s.nameBn, s.photo, 'sm', s.gender)}<span>${esc(s.nameBn)}</span></div></td>
      <td class="hide-m">${a ? `<span class="${a >= 3 ? 'down' : 'sec'} num">${Fmt.n(a)} দিন</span>` : '<span class="muted">—</span>'}</td>
      <td class="r"><div class="att">${[['P', 'উপস্থিত', 'উ'], ['A', 'অনুপস্থিত', 'অ'], ['L', 'ছুটি', 'ছু']].map(([v, t, sh]) => `<button data-v="${v}" class="${marks[s.id] === v ? 'on' : ''}" aria-label="${t}"><span class="lf">${t}</span><span class="ls">${sh}</span></button>`).join('')}</div></td></tr>`; }).join('')
      : `<tr><td colspan="4">${UI.empty('এই শাখায় কোনো শিক্ষার্থী নেই', 'students')}</td></tr>`;
    sum();
  };
  $('#atb').onclick = e => { const b = e.target.closest('.att button'); if (!b) return; marks[b.closest('tr').dataset.id] = b.dataset.v; dirty = true; $$('button', b.parentElement).forEach(x => x.classList.toggle('on', x === b)); sum(); };
  $('#allP').onclick = () => { Object.keys(marks).forEach(k => marks[k] = 'P'); dirty = true; $$('#atb .att button').forEach(x => x.classList.toggle('on', x.dataset.v === 'P')); sum(); };
  $('#saveA').onclick = () => {
    if (!Object.keys(marks).length) return UI.toast('এই শাখায় কোনো শিক্ষার্থী নেই', 'warn');
    Store.setAtt(attSel.date, attSel.cls, attSel.sec, { ...marks }); dirty = false; sum();
    UI.success('হাজিরা সংরক্ষিত', `${clsShort(attSel.cls)} ${attSel.sec} শাখা · উপস্থিত ${Fmt.n(Object.values(marks).filter(x => x === 'P').length)}, অনুপস্থিত ${Fmt.n(Object.values(marks).filter(x => x === 'A').length)} জন`);
  };
  const guard = fn => async e => { if (dirty && !(await UI.confirm('এই শাখার হাজিরা এখনো সংরক্ষণ হয়নি। না করেই অন্যটায় যাবেন?', 'হ্যাঁ, যাব'))) { e.target.value = e.target.dataset.prev; return; } fn(e); e.target.dataset.prev = e.target.value; };
  ['#ad', '#ac', '#as'].forEach(s => { $(s).dataset.prev = $(s).value; });
  $('#ad').onchange = guard(e => { attSel.date = e.target.value || todayISO(); load(); });
  $('#ac').onchange = guard(e => { attSel.cls = e.target.value; $('#as').innerHTML = sectionOptions(attSel.cls); attSel.sec = $('#as').value; $('#as').dataset.prev = attSel.sec; load(); });
  $('#as').onchange = guard(e => { attSel.sec = e.target.value; load(); });
  load();
}
function attMonth(el) {
  el.innerHTML = `<div class="toolbar">
    <input type="month" class="form-control" id="rm" value="${attSel.month}" max="${todayISO().slice(0, 7)}">
    <select class="form-select" id="rc">${classOptions(attSel.cls)}</select>
    <select class="form-select" id="rs">${sectionOptions(attSel.cls, attSel.sec)}</select>
    <span class="ms-auto legend" style="gap:14px"><span><b class="mk-P">●</b> উপস্থিত</span><span><b class="mk-A">অ</b> অনুপস্থিত</span><span><b class="mk-L">ছু</b> ছুটি</span></span></div>
  <div class="card-x"><div class="card-head"><h3 id="rh"></h3><span class="right" id="rsub"></span></div><div class="tbl-wrap" id="rw"></div></div>`;
  const draw = () => {
    const [y, mo] = attSel.month.split('-').map(Number), n = new Date(y, mo, 0).getDate();
    $('#rh').textContent = `${clsName(attSel.cls)}, ${attSel.sec} শাখা`;
    const days = [...Array(n)].map((_, i) => `${attSel.month}-${String(i + 1).padStart(2, '0')}`);
    const recs = days.map(d => Store.getAtt(d, attSel.cls, attSel.sec));
    const r = sortStudents(activeStudents().filter(s => s.classId === attSel.cls && s.section === attSel.sec));
    let h = `<table class="tbl dense monthly"><thead><tr><th>রোল</th><th style="min-width:160px">নাম</th>${days.map((d, i) => `<th class="d num ${isOff(d) ? 'off' : ''}" title="${Fmt.day(d)}">${Fmt.n(i + 1)}</th>`).join('')}<th class="r">উপস্থিত</th><th class="r">হার</th></tr></thead><tbody>`;
    h += r.map(s => { let p = 0, t = 0;
      const cells = days.map((d, i) => { const v = recs[i] && recs[i][s.id]; if (v) { t++; if (v === 'P') p++; } return `<td class="d ${isOff(d) ? 'off' : ''}">${v === 'P' ? '<span class="mk-P">●</span>' : v === 'A' ? '<span class="mk-A">অ</span>' : v === 'L' ? '<span class="mk-L">ছু</span>' : ''}</td>`; }).join('');
      return `<tr><td><span class="roll num">${Fmt.n(s.roll)}</span></td><td class="text-nowrap">${esc(s.nameBn)}</td>${cells}<td class="r num">${Fmt.n(p)}/${Fmt.n(t)}</td><td class="r num ${t && p / t < .75 ? 'down' : ''}">${t ? Fmt.pct((p / t * 100).toFixed(0)) : '—'}</td></tr>`;
    }).join('') || `<tr><td colspan="${n + 4}">${UI.empty('এই শাখায় কোনো শিক্ষার্থী নেই')}</td></tr>`;
    $('#rw').innerHTML = h + '</tbody></table>';
    $('#rsub').textContent = `${Fmt.month(y, mo - 1)} · ${Fmt.n(recs.filter(Boolean).length)} দিন ক্লাস হয়েছে`;
  };
  $('#rm').onchange = e => { attSel.month = e.target.value || todayISO().slice(0, 7); draw(); };
  $('#rc').onchange = e => { attSel.cls = e.target.value; $('#rs').innerHTML = sectionOptions(attSel.cls); attSel.sec = $('#rs').value; draw(); };
  $('#rs').onchange = e => { attSel.sec = e.target.value; draw(); };
  draw();
}

/* =========================================================
   ক্লাস রুটিন — সব শ্রেণির রুটিন এক জায়গায়
   ========================================================= */
const rtSel = { tab: 'master', day: null, teacher: '', cls: '' };
const SCHOOL_DAYS = () => WEEK_ORDER.filter(d => !S().weeklyOff.includes(d));
const allSecKeys = () => sortedClasses().flatMap(c => c.sections.map(sec => `${c.id}|${sec}`));
const secLabel = k => { const [cid, sec] = k.split('|'); return `${clsName(cid)} · ${sec} শাখা`; };
const secShort = k => { const [cid, sec] = k.split('|'); return `${clsShort(cid)} ${sec}`; };
function rtMeta() { S().routineMeta = S().routineMeta || { title: `ক্লাস রুটিন ${Fmt.bd(S().school.session)}`, effective: '' }; return S().routineMeta; }
function teacherClash(day, pid, tid, exceptKey) {
  if (!tid) return '';
  for (const [k, rt] of Object.entries(D().routine)) { if (k === exceptKey) continue; const c = rt[day] && rt[day][pid]; if (c && c.teacherId === tid) return secShort(k); }
  return '';
}
function rtCell(key, d, p) {
  const c = ((D().routine[key] || {})[d] || {})[p.id]; const sub = c && subjById(c.subjectId); const clash = c && teacherClash(d, p.id, c.teacherId, key);
  return `<div class="cell ${sub ? 'set' : ''} ${clash ? 'clash' : ''}" data-k="${key}" data-d="${d}" data-p="${p.id}" ${clash ? `data-tip="${esc(teacherName(c.teacherId))} এই সময়ে ${esc(clash)}-এও আছেন"` : ''}>${sub ? `<b>${esc(sub.short)}</b><span>${esc(teacherName(c.teacherId)) || 'শিক্ষক বাছাই হয়নি'}</span>` : '<span class="muted">+ যোগ করুন</span>'}</div>`;
}
const periodHead = P => P.map(p => `<th style="${p.brk ? 'width:44px' : ''}">${p.brk ? '' : esc(p.label)}<span class="t">${p.brk ? '' : Fmt.time(p.start) + '–' + Fmt.time(p.end)}</span></th>`).join('');

Views.routine = view => {
  const days = SCHOOL_DAYS(); if (!days.includes(rtSel.day)) rtSel.day = days.includes(new Date().getDay()) ? new Date().getDay() : days[0];
  const meta = rtMeta(), P = S().periods, keys = allSecKeys();
  const filled = keys.filter(k => D().routine[k] && Object.values(D().routine[k]).some(d => Object.keys(d).length)).length;
  setTitle('ক্লাস রুটিন', '', `<button class="btn btn-ghost" id="rtp">${ic('print', 'ico-16')}<span>প্রিন্ট / PDF</span></button><button class="btn btn-primary" id="rtNew">${ic('plus', 'ico-16')}<span>নতুন রুটিন তৈরি</span></button>`);
  $('#rtNew').onclick = newRoutine;
  $('#rtp').onclick = () => openStudio('routine', rtSel.tab === 'teacher' ? { scope: 'teacher', teacherId: rtSel.teacher } : { scope: rtSel.tab === 'master' ? 'master' : 'allclasses' });
  const tchs = Store.all('teachers').filter(t => t.type === 'শিক্ষক' && t.status !== 'left');
  if (!rtSel.teacher) rtSel.teacher = tchs[0]?.id || '';
  let clashes = 0; keys.forEach(k => days.forEach(d => P.forEach(p => { const c = ((D().routine[k] || {})[d] || {})[p.id]; if (c && teacherClash(d, p.id, c.teacherId, k)) clashes++; })));
  view.innerHTML = `<div class="card-x card-pad mb-3 d-flex flex-wrap gap-3 align-items-end">
      <div style="flex:1;min-width:240px"><label class="form-label">রুটিনের নাম</label><input class="form-control" id="rtTitle" value="${esc(meta.title)}"></div>
      <div><label class="form-label">কার্যকর হবে</label><input type="date" class="form-control" id="rtEff" value="${esc(meta.effective || '')}"></div>
      <div class="d-flex gap-2 flex-wrap pb-1"><span class="tag ${filled === keys.length ? 'g' : 'y'}">${Fmt.n(filled)}/${Fmt.n(keys.length)} শাখার রুটিন তৈরি</span>${clashes ? `<span class="tag r">${Fmt.n(clashes)}টি সময়-সংঘাত</span>` : `<span class="tag g">কোনো সংঘাত নেই</span>`}</div></div>
    <div class="tabs">${[['master', 'সব শ্রেণি, দিন অনুযায়ী'], ['classes', 'শ্রেণি অনুযায়ী (সব এক পাতায়)'], ['teacher', 'শিক্ষক অনুযায়ী']].map(t => `<button data-t="${t[0]}" class="${rtSel.tab === t[0] ? 'on' : ''}">${t[1]}</button>`).join('')}</div>
    <div id="rtBody"></div>`;
  $('#rtTitle').onchange = e => { meta.title = e.target.value.trim() || meta.title; Store.save(); UI.toast('রুটিনের নাম সংরক্ষিত'); };
  $('#rtEff').onchange = e => { meta.effective = e.target.value; Store.save(); };
  $$('.tabs button', view).forEach(b => b.onclick = () => { rtSel.tab = b.dataset.t; Views.routine(view); });
  const body = $('#rtBody');
  const bindCells = () => { UI.bindTips(body); $$('.cell[data-k]', body).forEach(c => c.onclick = () => routineCell(c.dataset.k, +c.dataset.d, c.dataset.p, () => Views.routine(view))); };

  if (rtSel.tab === 'master') {
    body.innerHTML = `<div class="toolbar"><div class="seg" id="rdays">${days.map(d => `<button data-d="${d}" class="${d === rtSel.day ? 'on' : ''}">${DAYS_FULL[d]}</button>`).join('')}</div><span class="ms-auto muted small-t">ঘরে ক্লিক করে বিষয় ও শিক্ষক বসান বা বদলান</span></div>
      <div class="card-x card-pad" style="overflow:auto"><table class="rt" style="min-width:${180 + P.length * 120}px"><thead><tr><th style="width:150px;text-align:left">শ্রেণি ও শাখা</th>${periodHead(P)}</tr></thead><tbody>
      ${keys.map((k, ki) => { const [cid, sec] = k.split('|'); const ct = teacherName((clsById(cid).teacherBySection || {})[sec]);
        return `<tr><td class="day"><div style="font-weight:500;color:var(--text)">${esc(secShort(k))}</div>${ct ? `<div class="muted" style="font-size:11.5px;line-height:1.2">${esc(ct)}</div>` : ''}</td>${P.map(p => p.brk ? (ki === 0 ? `<td rowspan="${keys.length}" class="brk">${esc(p.label)}</td>` : '') : `<td>${rtCell(k, rtSel.day, p)}</td>`).join('')}</tr>`; }).join('')}
      </tbody></table></div>`;
    $$('#rdays button').forEach(b => b.onclick = () => { rtSel.day = +b.dataset.d; Views.routine(view); });
    bindCells();
  } else if (rtSel.tab === 'classes') {
    body.innerHTML = `<div class="toolbar"><div class="d-flex flex-wrap gap-1">${keys.map(k => `<a class="tag b" href="#" data-jump="${k}">${esc(secShort(k))}</a>`).join('')}</div></div>
      <div class="d-flex flex-column gap-3">${keys.map(k => { const [cid, sec] = k.split('|'); const ct = teacherName((clsById(cid).teacherBySection || {})[sec]);
        return `<div class="card-x" id="rt_${k.replace('|', '_')}"><div class="card-head"><h3>${esc(secLabel(k))}</h3>${ct ? `<span class="muted small-t">শ্রেণি শিক্ষক: ${esc(ct)}</span>` : ''}
          <span class="right"><button class="btn btn-ghost btn-sm" data-auto="${k}">${ic('routine', 'ico-16')} স্বয়ংক্রিয় সাজান</button><button class="btn btn-ghost btn-sm" data-pr="${k}">${ic('print', 'ico-16')}</button><button class="btn btn-quiet btn-sm btn-icon" data-clear="${k}" aria-label="মুছুন">${ic('trash', 'ico-16')}</button></span></div>
          <div class="card-pad" style="overflow:auto"><table class="rt" style="min-width:${100 + P.length * 112}px"><thead><tr><th style="width:84px"></th>${periodHead(P)}</tr></thead><tbody>
          ${days.map((d, di) => `<tr><td class="day">${DAYS_FULL[d]}</td>${P.map(p => p.brk ? (di === 0 ? `<td rowspan="${days.length}" class="brk">${esc(p.label)}</td>` : '') : `<td>${rtCell(k, d, p)}</td>`).join('')}</tr>`).join('')}
          </tbody></table></div></div>`; }).join('')}</div>`;
    $$('[data-jump]', body).forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById('rt_' + a.dataset.jump.replace('|', '_'))?.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    $$('[data-auto]', body).forEach(b => b.onclick = async () => { if (await UI.confirm(`${esc(secLabel(b.dataset.auto))}-এর রুটিন নতুন করে সাজানো হবে। আগের রুটিন বদলে যাবে`, 'সাজান', false)) { autoRoutine([b.dataset.auto]); Store.save(); UI.success('রুটিন সাজানো হয়েছে', secLabel(b.dataset.auto)); Views.routine(view); } });
    $$('[data-clear]', body).forEach(b => b.onclick = async () => { if (await UI.confirm(`${esc(secLabel(b.dataset.clear))}-এর পুরো রুটিন খালি হবে`, 'খালি করুন')) { D().routine[b.dataset.clear] = {}; Store.save(); Views.routine(view); } });
    $$('[data-pr]', body).forEach(b => b.onclick = () => { const [cid, sec] = b.dataset.pr.split('|'); openStudio('routine', { scope: 'class', classId: cid, section: sec }); });
    bindCells();
  } else {
    const load = {}; Object.values(D().routine).forEach(rt => Object.values(rt).forEach(d => Object.values(d).forEach(c => { if (c.teacherId) load[c.teacherId] = (load[c.teacherId] || 0) + 1; })));
    body.innerHTML = `<div class="toolbar"><select class="form-select" id="rtt">${tchs.map(t => `<option value="${t.id}" ${t.id === rtSel.teacher ? 'selected' : ''}>${esc(t.name)} (${Fmt.n(load[t.id] || 0)} ক্লাস)</option>`).join('')}</select><span class="ms-auto muted small-t">সপ্তাহে ${Fmt.n(load[rtSel.teacher] || 0)}টি ক্লাস</span></div>
      <div class="card-x card-pad" style="overflow:auto"><table class="rt" style="min-width:${100 + P.length * 112}px"><thead><tr><th style="width:84px"></th>${periodHead(P)}</tr></thead><tbody>
      ${days.map((d, di) => `<tr><td class="day">${DAYS_FULL[d]}</td>${P.map(p => { if (p.brk) return di === 0 ? `<td rowspan="${days.length}" class="brk">${esc(p.label)}</td>` : '';
        let f = ''; for (const [k, r] of Object.entries(D().routine)) { const c = r[d] && r[d][p.id]; if (c && c.teacherId === rtSel.teacher) f = `<b>${esc(secShort(k))}</b><span>${esc(subjById(c.subjectId)?.short || '')}</span>`; }
        return `<td><div class="cell ${f ? 'set' : ''}" style="cursor:default">${f}</div></td>`; }).join('')}</tr>`).join('')}
      </tbody></table></div>`;
    $('#rtt').onchange = e => { rtSel.teacher = e.target.value; Views.routine(view); };
  }
};
function routineCell(key, day, pid, done) {
  const [cid] = key.split('|'); const rt = D().routine[key] = D().routine[key] || {}; rt[day] = rt[day] || {};
  const cur = rt[day][pid] || {}; const p = S().periods.find(x => x.id === pid);
  const tchs = Store.all('teachers').filter(t => t.type === 'শিক্ষক' && t.status !== 'left');
  UI.modal({
    title: `${secLabel(key)} · ${DAYS_FULL[day]}, ${p.label} পিরিয়ড`, size: 'sm',
    body: `<form class="mb" id="rcf"><div class="mb-3"><label class="form-label">বিষয়</label><select class="form-select" name="subjectId" id="rtS0"><option value="">খালি রাখুন</option>${subjectsForClass(cid).map(s => `<option value="${s.id}" ${s.id === cur.subjectId ? 'selected' : ''}>${esc(s.name)}${s.group ? ` (${esc(s.group)})` : ''}</option>`).join('')}</select></div>
      <div class="mb-1"><label class="form-label">শিক্ষক</label><select class="form-select" name="teacherId" id="rtT"><option value="">বাছাই করুন</option>${tchs.map(t => { const cl = teacherClash(day, pid, t.id, key); return `<option value="${t.id}" ${t.id === cur.teacherId ? 'selected' : ''}>${esc(t.name)}${t.subject ? ` · ${esc(t.subject)}` : ''}${cl ? ` · ব্যস্ত (${cl})` : ''}</option>`; }).join('')}</select></div>
      <div class="err" id="rtE"></div></form>`,
    foot: `<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="rtS">সংরক্ষণ</button>`,
    onMount: (m, close) => {
      const chk = () => { const cl = teacherClash(day, pid, $('#rtT', m).value, key); $('#rtE', m).textContent = cl ? `এই সময়ে এই শিক্ষক ${cl}-এ ক্লাস নিচ্ছেন` : ''; };
      $('#rtS0', m).onchange = () => { if ($('#rtT', m).value) return; const sub = subjById($('#rtS0', m).value); const t = sub && tchs.find(t => t.subject === sub.name && !teacherClash(day, pid, t.id, key)); if (t) { $('#rtT', m).value = t.id; chk(); } };
      $('#rtT', m).onchange = chk; chk();
      $('#rtS', m).onclick = () => { const d = UI.formData($('#rcf', m)); if (d.subjectId) rt[day][pid] = d; else delete rt[day][pid]; Store.save(); close(); done(); };
    }
  });
}
function autoRoutine(keys) {
  const days = SCHOOL_DAYS(), P = S().periods.filter(p => !p.brk);
  const tchs = Store.all('teachers').filter(t => t.type === 'শিক্ষক' && t.status !== 'left');
  const busy = {};
  Object.entries(D().routine).forEach(([k, rt]) => { if (keys.includes(k)) return; Object.entries(rt).forEach(([d, ps]) => Object.entries(ps).forEach(([pid, c]) => { if (c.teacherId) (busy[d + '|' + pid] = busy[d + '|' + pid] || new Set()).add(c.teacherId); })); });
  const fits = (t, s) => t.subject && (t.subject === s.name || s.name.split(' ')[0] === t.subject.split(' ')[0]);
  keys.forEach((k, ki) => {
    const [cid] = k.split('|');
    const common = subjectsForClass(cid).filter(s => !s.group), grp = subjectsForClass(cid).filter(s => s.group);
    const pool = []; let gi = 0;
    while (pool.length < days.length * P.length) { common.forEach(s => pool.push(s)); if (grp.length) pool.push(grp[gi++ % grp.length]); if (!common.length && !grp.length) break; }
    if (!pool.length) return;
    const rt = {}; let idx = (ki * 3) % pool.length;
    days.forEach(d => {
      rt[d] = {}; const used = new Set();
      P.forEach(p => {
        let s = null;
        for (let t = 0; t < pool.length; t++) { const c = pool[(idx + t) % pool.length]; if (!used.has(c.id)) { s = c; idx = (idx + t + 1) % pool.length; break; } }
        if (!s) { s = pool[idx % pool.length]; idx++; }
        used.add(s.id);
        const b = busy[d + '|' + p.id] = busy[d + '|' + p.id] || new Set();
        const t = tchs.find(t => t.subject === s.name && !b.has(t.id)) || tchs.find(t => fits(t, s) && !b.has(t.id));
        if (t) b.add(t.id);
        rt[d][p.id] = { subjectId: s.id, teacherId: t ? t.id : '' };
      });
    });
    D().routine[k] = rt;
  });
}
function newRoutine() {
  const keys = allSecKeys(), meta = rtMeta();
  UI.modal({
    title: 'নতুন রুটিন তৈরি', size: 'lg',
    body: `<form class="mb" id="nrf"><div class="row g-3 mb-2">${UI.inp('title', 'রুটিনের নাম', meta.title, '', 'col-md-8')}${UI.inp('effective', 'কার্যকর হবে', meta.effective, 'type="date"', 'col-md-4')}</div>
      <div class="fsec">কোন শ্রেণি ও শাখার রুটিন</div>
      <div class="d-flex align-items-center mb-2"><label class="check" style="margin:0"><input type="checkbox" id="nrAll" checked> সব শ্রেণি ও শাখা</label></div>
      <div class="d-flex flex-wrap gap-2">${keys.map(k => `<label class="chip-edit" style="padding:0 11px;gap:7px"><input type="checkbox" data-k="${k}" checked style="accent-color:var(--primary)"> ${esc(secShort(k))}</label>`).join('')}</div>
      <div class="fsec">কীভাবে তৈরি হবে</div>
      <label class="check mb-2"><input type="radio" name="how" value="auto" checked> <span><b>স্বয়ংক্রিয়ভাবে সাজান</b><br><span class="muted small-t">প্রতিটি শ্রেণির বিষয় সপ্তাহজুড়ে ভাগ হবে, শিক্ষক বসবেন তাঁর বিষয় অনুযায়ী, একই সময়ে কোনো শিক্ষকের দুই ক্লাস পড়বে না। পরে যেকোনো ঘর বদলানো যাবে</span></span></label>
      <label class="check"><input type="radio" name="how" value="blank"> <span><b>খালি রুটিন</b><br><span class="muted small-t">ফাঁকা ছক তৈরি হবে, নিজে একে একে বিষয় ও শিক্ষক বসাবেন</span></span></label>
      <div class="hint mt-3">পিরিয়ডের সংখ্যা ও সময় সেটিংস → পিরিয়ড ও সময় থেকে বদলানো যায়। বাছাই করা শাখার আগের রুটিন বদলে যাবে</div></form>`,
    foot: `<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="nrGo">রুটিন তৈরি করুন</button>`,
    onMount: (m, close) => {
      $('#nrAll', m).onchange = e => $$('[data-k]', m).forEach(i => i.checked = e.target.checked);
      $('#nrGo', m).onclick = () => {
        const d = UI.formData($('#nrf', m)); const sel = $$('[data-k]', m).filter(i => i.checked).map(i => i.dataset.k);
        if (!sel.length) return UI.toast('অন্তত একটি শাখা বাছুন', 'warn');
        meta.title = d.title || meta.title; meta.effective = d.effective;
        const how = $('[name=how]:checked', m).value;
        if (how === 'auto') autoRoutine(sel); else sel.forEach(k => D().routine[k] = {});
        Store.save(); close(); UI.success('রুটিন তৈরি হয়েছে', `${Fmt.n(sel.length)}টি শাখা · ${how === 'auto' ? 'স্বয়ংক্রিয়ভাবে সাজানো' : 'খালি ছক'}`);
        rtSel.tab = how === 'auto' ? 'master' : 'classes'; refresh();
      };
    }
  });
}

/* =========================================================
   পরীক্ষা ও ফলাফল
   ========================================================= */
let exTab = 'list';
const exSel = { exam: '', cls: '', sec: '', subj: '' };
Views.exams = view => {
  const exams = [...Store.all('exams')].sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
  if (!Store.find('exams', exSel.exam)) exSel.exam = defaultExam();
  fixSel(exSel);
  setTitle('পরীক্ষা ও ফলাফল', '', `<button class="btn btn-primary" id="addEx">${ic('plus', 'ico-16')}<span>নতুন পরীক্ষা</span></button>`);
  $('#addEx').onclick = () => examForm();
  view.innerHTML = `<div class="tabs">${[['list', 'পরীক্ষাসমূহ'], ['marks', 'নম্বর দিন'], ['results', 'ফলাফল']].map(t => `<button data-t="${t[0]}" class="${exTab === t[0] ? 'on' : ''}">${t[1]}</button>`).join('')}</div><div id="exBody"></div>`;
  $$('.tabs button', view).forEach(b => b.onclick = () => { exTab = b.dataset.t; Views.exams(view); });
  ({ list: exList, marks: exMarks, results: exResults })[exTab]($('#exBody'), exams);
};
function examProgress(e) {
  let need = 0, have = 0;
  activeStudents().filter(s => e.classes.includes(s.classId)).forEach(s => { const m = D().marks[`${e.id}|${s.id}`] || {}; subjectsFor(s).forEach(x => { need++; if (m[x.id] !== undefined && m[x.id] !== '') have++; }); });
  return need ? have / need * 100 : 0;
}
function exList(el, exams) {
  el.innerHTML = exams.length ? `<div class="row g-3 stagger">${exams.map(e => { const pr = examProgress(e); return `<div class="col-md-6 col-xl-4"><div class="card-x card-pad h-100 d-flex flex-column">
    <div class="d-flex align-items-start gap-2"><div class="flex-grow-1"><h3 style="font-size:17px">${esc(e.name)}</h3><div class="muted small-t">শিক্ষাবর্ষ ${Fmt.bd(e.session)} · ${e.startDate ? Fmt.dateS(e.startDate) : ''}${e.endDate ? ' – ' + Fmt.dateS(e.endDate) : ''}</div></div>
      <span class="tag ${e.published ? 'g' : 'y'}">${e.published ? 'ফলাফল প্রকাশিত' : 'চলমান'}</span></div>
    <div class="muted small-t mt-3">${e.classes.map(c => clsShort(c)).join(', ')} শ্রেণি</div>
    <div class="d-flex align-items-center gap-2 mt-2"><span class="track flex-grow-1"><span class="b" style="width:${pr}%"></span></span><span class="small-t num sec">${Fmt.pct(pr.toFixed(0))} নম্বর দেওয়া হয়েছে</span></div>
    <div class="d-flex gap-2 mt-3 flex-wrap pt-1">
      <button class="btn btn-ghost btn-sm" data-a="marks" data-e="${e.id}">${ic('edit', 'ico-16')} নম্বর</button>
      <button class="btn btn-ghost btn-sm" data-a="results" data-e="${e.id}">${ic('trend', 'ico-16')} ফলাফল</button>
      <button class="btn btn-ghost btn-sm" data-a="admit" data-e="${e.id}">${ic('id', 'ico-16')} প্রবেশপত্র</button>
      <button class="btn btn-quiet btn-sm btn-icon ms-auto" data-a="edit" data-e="${e.id}" aria-label="সম্পাদনা">${ic('settings', 'ico-16')}</button></div>
  </div></div>`; }).join('')}</div>` : `<div class="card-x">${UI.empty('এখনো কোনো পরীক্ষা যোগ করা হয়নি। উপরের "নতুন পরীক্ষা" বাটনে চাপুন', 'exam')}</div>`;
  $$('[data-a]', el).forEach(b => b.onclick = () => {
    const e = Store.find('exams', b.dataset.e); exSel.exam = e.id;
    if (b.dataset.a === 'edit') return examForm(e);
    if (b.dataset.a === 'admit') return openStudio('admit', { examId: e.id });
    exTab = b.dataset.a; refresh();
  });
}
function examForm(e = null) {
  const x = e || { name: '', session: S().school.session, classes: sortedClasses().map(c => c.id), startDate: '', endDate: '', published: false };
  UI.modal({
    title: e ? 'পরীক্ষা সম্পাদনা' : 'নতুন পরীক্ষা',
    body: `<form class="mb" id="exf"><div class="row g-3">
      ${UI.inp('name', 'পরীক্ষার নাম *', x.name, 'required list="exNames"', 'col-md-8')}<datalist id="exNames"><option value="প্রথম সাময়িক পরীক্ষা"><option value="অর্ধবার্ষিক পরীক্ষা"><option value="দ্বিতীয় সাময়িক পরীক্ষা"><option value="বার্ষিক পরীক্ষা"><option value="নির্বাচনী (টেস্ট) পরীক্ষা"><option value="প্রাক-নির্বাচনী পরীক্ষা"></datalist>
      ${UI.inp('session', 'শিক্ষাবর্ষ', x.session, '', 'col-md-4')}
      ${UI.inp('startDate', 'শুরু', x.startDate, 'type="date"')}${UI.inp('endDate', 'শেষ', x.endDate, 'type="date"')}
      <div class="col-12"><label class="form-label">কোন শ্রেণিগুলোর জন্য</label><div class="d-flex flex-wrap gap-3">${sortedClasses().map(c => `<label class="check"><input type="checkbox" data-cl="${c.id}" ${x.classes.includes(c.id) ? 'checked' : ''}>${esc(c.name)}</label>`).join('')}</div></div>
      <div class="col-12"><label class="switch"><input type="checkbox" name="published" ${x.published ? 'checked' : ''}> ফলাফল প্রকাশিত</label></div>
    </div></form>`,
    foot: `${e ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="dEx">${ic('trash', 'ico-16')} মুছুন</button>` : ''}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="sEx">সংরক্ষণ</button>`,
    onMount: (m, close) => {
      $('#sEx', m).onclick = () => { const f = $('#exf', m); if (!f.reportValidity()) return; const d = UI.formData(f); d.classes = $$('[data-cl]', m).filter(i => i.checked).map(i => i.dataset.cl);
        if (!d.classes.length) return UI.toast('অন্তত একটি শ্রেণি বাছুন', 'warn');
        const saved = Store.upsert('exams', { ...(e ? { id: e.id } : {}), ...d }); exSel.exam = saved.id; close(); UI.success('পরীক্ষা সংরক্ষিত', d.name); refresh(); };
      if (e) $('#dEx', m).onclick = async () => { if (await UI.confirm(`${esc(e.name)} এবং এর সব নম্বর মুছে যাবে`)) { Object.keys(D().marks).forEach(k => { if (k.startsWith(e.id + '|')) delete D().marks[k]; }); Store.remove('exams', e.id); close(); refresh(); } };
    }
  });
}
function examPicker(exams) { return `<select class="form-select" id="xe">${exams.map(e => `<option value="${e.id}" ${e.id === exSel.exam ? 'selected' : ''}>${esc(e.name)} ${Fmt.bd(e.session)}</option>`).join('')}</select>`; }
function exMarks(el, exams) {
  if (!exams.length) { el.innerHTML = `<div class="card-x">${UI.empty('আগে একটি পরীক্ষা যোগ করুন', 'exam')}</div>`; return; }
  const ex = Store.find('exams', exSel.exam);
  if (!ex.classes.includes(exSel.cls)) { exSel.cls = ex.classes[0]; exSel.sec = clsById(exSel.cls)?.sections[0]; }
  const subs = subjectsForClass(exSel.cls); if (!subs.find(s => s.id === exSel.subj)) exSel.subj = subs[0]?.id || '';
  el.innerHTML = `<div class="toolbar">${examPicker(exams)}
    <select class="form-select" id="xc">${sortedClasses().filter(c => ex.classes.includes(c.id)).map(c => `<option value="${c.id}" ${c.id === exSel.cls ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>
    <select class="form-select" id="xs">${sectionOptions(exSel.cls, exSel.sec)}</select>
    <select class="form-select" id="xsub">${subs.map(s => `<option value="${s.id}" ${s.id === exSel.subj ? 'selected' : ''}>${esc(s.name)}${s.group ? ` (${esc(s.group)})` : ''}</option>`).join('')}</select>
    <button class="btn btn-primary ms-auto" id="xSave">সংরক্ষণ করুন</button></div>
  <div class="card-x"><div class="card-head"><h3 id="xh"></h3><span class="right" id="xinfo"></span></div><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রোল</th><th>নাম</th><th class="hide-m">বিভাগ</th><th class="c">প্রাপ্ত নম্বর</th><th class="r">গ্রেড</th></tr></thead><tbody id="xtb"></tbody></table></div></div>`;
  const sub = subjById(exSel.subj);
  const list = sortStudents(activeStudents().filter(s => s.classId === exSel.cls && s.section === exSel.sec && (!sub?.group || s.group === sub.group)));
  $('#xh').textContent = `${sub ? sub.name : ''} · ${clsShort(exSel.cls)} ${exSel.sec} শাখা`;
  $('#xinfo').textContent = sub ? `পূর্ণমান ${Fmt.n(sub.fullMarks)} · পাস ${Fmt.n(sub.passMarks)}` : '';
  const gradeCell = v => { if (v === '' || v == null || isNaN(v)) return '<span class="muted">—</span>'; if (+v < sub.passMarks) return '<span class="gp gp-F">F</span>'; return `<span class="gp">${gradeOf(v / sub.fullMarks * 100).grade}</span>`; };
  $('#xtb').innerHTML = sub && list.length ? list.map((s, i) => { const v = (D().marks[`${ex.id}|${s.id}`] || {})[sub.id]; return `<tr data-id="${s.id}"><td><span class="roll num">${Fmt.n(s.roll)}</span></td><td>${esc(s.nameBn)}</td><td class="sec hide-m">${esc(s.group || '—')}</td>
    <td class="c"><input class="marks-in num" inputmode="numeric" data-i="${i}" value="${v ?? ''}"></td><td class="r" data-g>${gradeCell(v)}</td></tr>`; }).join('')
    : `<tr><td colspan="5">${UI.empty(sub ? 'এই শাখায় এই বিষয়ের কোনো শিক্ষার্থী নেই' : 'এই শ্রেণির কোনো বিষয় নেই', 'students')}</td></tr>`;
  let dirty = false;
  $$('.marks-in', el).forEach(inp => {
    inp.oninput = () => { inp.value = Fmt.en(inp.value).replace(/[^0-9.]/g, ''); const v = inp.value; const bad = v !== '' && (+v > sub.fullMarks || +v < 0); inp.classList.toggle('bad', bad); inp.closest('tr').querySelector('[data-g]').innerHTML = gradeCell(v === '' ? '' : +v); dirty = true; };
    inp.onkeydown = e => { if (e.key === 'Enter' || e.key === 'ArrowDown') { e.preventDefault(); $(`.marks-in[data-i="${+inp.dataset.i + 1}"]`, el)?.focus(); } if (e.key === 'ArrowUp') { e.preventDefault(); $(`.marks-in[data-i="${+inp.dataset.i - 1}"]`, el)?.focus(); } };
    inp.onfocus = () => inp.select();
  });
  const save = () => {
    if ($$('.marks-in.bad', el).length) { UI.toast(`পূর্ণমান ${Fmt.n(sub.fullMarks)}-এর বেশি নম্বর দেওয়া যাবে না`, 'warn'); return false; }
    $$('#xtb tr[data-id]', el).forEach(tr => { const k = `${ex.id}|${tr.dataset.id}`; const v = tr.querySelector('.marks-in').value; D().marks[k] = D().marks[k] || {}; if (v === '') delete D().marks[k][sub.id]; else D().marks[k][sub.id] = +v; });
    Store.save(); dirty = false; UI.success('নম্বর সংরক্ষিত', `${sub.name} · ${clsShort(exSel.cls)} ${exSel.sec} শাখা`); return true;
  };
  $('#xSave').onclick = save;
  const go = fn => async e => { if (dirty && !(await UI.confirm('নম্বর এখনো সংরক্ষণ হয়নি। সংরক্ষণ করে এগোবেন?', 'সংরক্ষণ করে এগোন', false))) { fn(e); return; } if (dirty && !save()) return; fn(e); };
  $('#xe').onchange = go(e => { exSel.exam = e.target.value; refresh(); });
  $('#xc').onchange = go(e => { exSel.cls = e.target.value; exSel.sec = clsById(exSel.cls).sections[0]; refresh(); });
  $('#xs').onchange = go(e => { exSel.sec = e.target.value; refresh(); });
  $('#xsub').onchange = go(e => { exSel.subj = e.target.value; refresh(); });
}
function exResults(el, exams) {
  if (!exams.length) { el.innerHTML = `<div class="card-x">${UI.empty('আগে একটি পরীক্ষা যোগ করুন', 'exam')}</div>`; return; }
  const ex = Store.find('exams', exSel.exam);
  if (!ex.classes.includes(exSel.cls)) exSel.cls = ex.classes[0];
  const res = classResults(ex.id, exSel.cls);
  const secs = clsById(exSel.cls).sections; const secF = exSel.rsec || '';
  const shown = res.filter(x => !secF || x.st.section === secF);
  const pass = shown.filter(x => x.r.pass).length, ap = shown.filter(x => x.r.grade === 'A+').length;
  const dist = {}; S().grading.forEach(g => dist[g.grade] = 0); shown.forEach(x => { if (dist[x.r.grade] != null) dist[x.r.grade]++; });
  const dmax = Math.max(1, ...Object.values(dist));
  el.innerHTML = `<div class="toolbar">${examPicker(exams)}
    <select class="form-select" id="xc">${sortedClasses().filter(c => ex.classes.includes(c.id)).map(c => `<option value="${c.id}" ${c.id === exSel.cls ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>
    <select class="form-select" id="xrs"><option value="">সব শাখা</option>${secs.map(s => `<option ${s === secF ? 'selected' : ''}>${esc(s)}</option>`).join('')}</select>
    <div class="ms-auto d-flex gap-2 flex-wrap">${ex.published ? `<span class="tag g" style="height:38px;padding:0 12px">${ic('check', 'ico-16')} প্রকাশিত</span>` : `<button class="btn btn-gold" id="pubRes">${ic('award', 'ico-16')} ফলাফল প্রকাশ করুন</button>`}<button class="btn btn-ghost" id="tabSheet">${ic('register', 'ico-16')} ফলাফল শিট</button><button class="btn btn-primary" id="allTr">${ic('docs', 'ico-16')} সবার ট্রান্সক্রিপ্ট</button></div></div>
  <div class="row g-3 mb-3 stagger">
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">পরীক্ষার্থী</div><div class="fig num">${Fmt.n(shown.length)}</div><div class="note">${Fmt.n(activeStudents().filter(s => s.classId === exSel.cls && (!secF || s.section === secF)).length)} জনের মধ্যে</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">পাসের হার</div><div class="fig num">${shown.length ? Fmt.pct((pass / shown.length * 100).toFixed(1)) : '—'}</div><div class="note">পাস ${Fmt.n(pass)} · ফেল ${Fmt.n(shown.length - pass)}</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">জিপিএ ৫</div><div class="fig num" style="color:var(--gold-ink)">${Fmt.n(ap)}</div><div class="note">A+ পেয়েছে</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad"><div class="label sec small-t mb-2">গ্রেড বিন্যাস</div>
      <div class="d-flex align-items-end gap-1" style="height:58px">${Object.entries(dist).map(([g, n]) => `<div class="flex-grow-1 text-center" data-tip="${g}: ${Fmt.n(n)} জন"><div style="height:${Math.max(3, n / dmax * 40)}px;border-radius:4px 4px 1px 1px;background:${g === 'F' ? 'var(--neg)' : g === 'A+' ? 'var(--gold)' : 'var(--h3)'}"></div><div class="muted" style="font-size:11px;margin-top:3px">${g}</div></div>`).join('')}</div></div></div>
  </div>
  ${shown.filter(x => x.r.pass).length >= 3 ? `<div class="card-x card-pad mb-3"><div class="sec small-t mb-1">${secF ? secF + ' শাখার' : 'শ্রেণির'} সেরা তিন</div><div class="podium">${[1, 0, 2].map(i => { const x = shown.filter(y => y.r.pass)[i]; return `<div class="pd p${i + 1}">${UI.avatar(x.st.nameBn, x.st.photo, 'lg', x.st.gender).replace('avatar lg', 'avatar lg mx-auto')}<div class="mt-2" style="font-weight:500">${esc(x.st.nameBn)}</div><div class="muted small-t">রোল ${Fmt.n(x.st.roll)} · জিপিএ ${Fmt.gpa(x.r.gpa)} · ${Fmt.n(x.r.total)} নম্বর</div><div class="st">${Fmt.n(i + 1)}</div></div>`; }).join('')}</div></div>` : ''}
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>মেধাক্রম</th><th>রোল</th><th>নাম</th><th class="hide-m">শাখা</th><th class="r">মোট</th><th class="r">জিপিএ</th><th class="r">গ্রেড</th><th class="r hide-m">ফেল</th><th></th></tr></thead><tbody>
  ${shown.length ? shown.map((x, i) => `<tr class="click res-row" style="animation-delay:${Math.min(i, 20) * 25}ms" data-s="${x.st.id}"><td class="num">${x.r.pass ? (x.pos <= 3 ? `<span class="medal m${x.pos}">${Fmt.n(x.pos)}</span>` : `<span class="roll">${Fmt.n(x.pos)}</span>`) : '<span class="muted">—</span>'}</td><td class="num">${Fmt.n(x.st.roll)}</td><td>${esc(x.st.nameBn)}${x.r.complete ? '' : ' <span class="tag y">নম্বর অসম্পূর্ণ</span>'}</td><td class="hide-m">${esc(x.st.section)}</td>
    <td class="r num">${Fmt.n(x.r.total)}</td><td class="r num">${Fmt.gpa(x.r.gpa)}</td><td class="r"><span class="gp ${x.r.grade === 'F' ? 'gp-F' : ''}">${x.r.grade}</span></td><td class="r num hide-m">${x.r.fails ? `<span class="down">${Fmt.n(x.r.fails)}</span>` : '—'}</td>
    <td class="r"><button class="btn btn-quiet btn-sm btn-icon" aria-label="ট্রান্সক্রিপ্ট">${ic('docs', 'ico-16')}</button></td></tr>`).join('') : `<tr><td colspan="9">${UI.empty('এই পরীক্ষায় এখনো নম্বর দেওয়া হয়নি', 'exam')}</td></tr>`}
  </tbody></table></div></div>`;
  UI.bindTips(el);
  $('#xe').onchange = e => { exSel.exam = e.target.value; refresh(); };
  $('#xc').onchange = e => { exSel.cls = e.target.value; exSel.rsec = ''; refresh(); };
  $('#xrs').onchange = e => { exSel.rsec = e.target.value; refresh(); };
  if ($('#pubRes')) $('#pubRes').onclick = async () => {
    const inc = res.filter(x => !x.r.complete).length;
    if (!(await UI.confirm(`${esc(ex.name)}-এর ফলাফল প্রকাশ করা হবে${inc ? `। ${Fmt.n(inc)} জনের নম্বর এখনো অসম্পূর্ণ` : ''}`, 'প্রকাশ করুন', false))) return;
    Store.upsert('exams', { id: ex.id, published: true }); const all = sortedClasses().filter(c => ex.classes.includes(c.id)).flatMap(c => classResults(ex.id, c.id));
    UI.success('ফলাফল প্রকাশিত হয়েছে', `পাসের হার ${all.length ? Fmt.pct((all.filter(x => x.r.pass).length / all.length * 100).toFixed(1)) : '—'} · জিপিএ ৫ পেয়েছে ${Fmt.n(all.filter(x => x.r.grade === 'A+').length)} জন`); refresh();
  };
  $('#tabSheet').onclick = () => openStudio('tabulation', { examId: ex.id, classId: exSel.cls, section: secF });
  $('#allTr').onclick = () => openStudio('transcript', { examId: ex.id, classId: exSel.cls, section: secF || clsById(exSel.cls).sections[0] });
  $$('[data-s]', el).forEach(r => r.onclick = () => openStudio('transcript', { examId: ex.id, students: [r.dataset.s] }));
}
