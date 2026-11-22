/* =========================================================
   সেটিংস — স্কুলের সব কিছু এখান থেকে বদলানো যায়
   ========================================================= */
let setTab = 'school';
const SET_TABS = [['school', 'স্কুলের তথ্য', 'school'], ['sign', 'স্বাক্ষর ও সিল', 'edit'], ['docs', 'ডকুমেন্ট ও সনদ', 'docs'], ['classes', 'শ্রেণি ও শাখা', 'layers'], ['subjects', 'বিষয়', 'library'],
  ['grading', 'গ্রেডিং', 'award'], ['periods', 'পিরিয়ড ও সময়', 'clock'], ['lists', 'তালিকা', 'list'], ['fields', 'অতিরিক্ত তথ্যঘর', 'plus'], ['admin', 'অ্যাডমিন', 'lock'], ['backup', 'ব্যাকআপ', 'database']];
Views.settings = view => {
  setTitle('সেটিংস', 'স্কুলের সব তথ্য, ডকুমেন্টের লেখা আর তালিকা এখান থেকে বদলান');
  view.innerHTML = `<div class="set-grid"><nav class="set-nav">${SET_TABS.map(t => `<button data-t="${t[0]}" class="${t[0] === setTab ? 'on' : ''}">${ic(t[2], 'ico-16')}${t[1]}</button>`).join('')}</nav><div id="tabBody" style="min-width:0;max-width:960px"></div></div>`;
  $$('.set-nav button', view).forEach(b => b.onclick = () => { setTab = b.dataset.t; $$('.set-nav button', view).forEach(x => x.classList.toggle('on', x === b)); Tabs[setTab]($('#tabBody')); });
  Tabs[setTab]($('#tabBody'));
};
const saveS = (msg = 'সংরক্ষণ হয়েছে') => { Store.save(); UI.toast(msg); };
const Tabs = {
  school(el) {
    const sc = S().school; let logo = sc.logo;
    const f = (n, l, attrs = '', col = 'col-md-6') => UI.inp(n, l, sc[n], attrs, col);
    el.innerHTML = `<div class="card-x card-pad"><form id="scf"><div class="photo-pick mb-4"><span class="logo-mark" id="lgv" style="width:76px;height:76px;font-size:28px;border-radius:18px">${logo ? `<img src="${logo}" alt="">` : esc(Fmt.initials(sc.name))}</span>
      <div><label class="btn btn-ghost mb-0">${ic('upload', 'ico-16')} লোগো বাছুন<input type="file" accept="image/*" id="lg" hidden></label> <button type="button" class="btn btn-quiet" id="lgx">সরান</button><div class="hint">লোগো সব ডকুমেন্টের হেডারে আর জলছাপে বসবে। সাদা বা স্বচ্ছ পটভূমির PNG ভালো</div></div></div>
      <div class="row g-3">${f('name', 'স্কুলের নাম (বাংলা) *', 'required')}${f('nameEn', 'স্কুলের নাম (ইংরেজি)')}${f('eiin', 'EIIN', '', 'col-md-3')}${f('code', 'স্কুল কোড', '', 'col-md-3')}${f('established', 'স্থাপিত', '', 'col-md-3')}${f('session', 'চলতি শিক্ষাবর্ষ', '', 'col-md-3')}
      ${f('address', 'ঠিকানা', '', 'col-12')}${f('phone', 'ফোন', '', 'col-md-4')}${f('email', 'ইমেইল', 'type="email"', 'col-md-4')}${f('website', 'ওয়েবসাইট', '', 'col-md-4')}${f('headName', 'প্রধান শিক্ষকের নাম')}${f('motto', 'স্কুলের মূলমন্ত্র')}</div>
      <div class="fsec">সাপ্তাহিক ছুটি</div><div class="d-flex flex-wrap gap-3">${WEEK_ORDER.map(d => `<label class="check"><input type="checkbox" data-off="${d}" ${S().weeklyOff.includes(d) ? 'checked' : ''}>${DAYS_FULL[d]}</label>`).join('')}</div>
      <div class="mt-4"><button class="btn btn-primary">সংরক্ষণ</button></div></form></div>`;
    $('#lg').onchange = async e => { const file = e.target.files[0]; if (!file) return; logo = await UI.readImage(file, 360, 'image/png'); $('#lgv').innerHTML = `<img src="${logo}" alt="">`; };
    $('#lgx').onclick = () => { logo = ''; $('#lgv').textContent = Fmt.initials(sc.name); };
    $('#scf').onsubmit = e => { e.preventDefault(); if (!e.target.reportValidity()) return; Object.assign(sc, UI.formData(e.target), { logo }); S().weeklyOff = $$('[data-off]').filter(x => x.checked).map(x => +x.dataset.off); saveS(); cacheBrand(); renderShell(); route(); UI.success('স্কুলের তথ্য সংরক্ষিত'); };
  },
  sign(el) {
    const sc = S().school;
    const slot = (k, label, hint) => `<div class="col-md-6"><div class="card-x card-pad h-100"><h3 style="font-size:15px" class="mb-1">${label}</h3><p class="muted small-t">${hint}</p>
      <div class="img-slot mb-3" style="width:100%;height:120px" id="v_${k}">${sc[k] ? `<img src="${sc[k]}" alt="">` : 'কোনো ছবি নেই'}</div>
      <label class="btn btn-ghost mb-0">${ic('upload', 'ico-16')} ছবি বাছুন<input type="file" accept="image/*" data-k="${k}" hidden></label> <button class="btn btn-quiet" data-x="${k}">সরান</button></div></div>`;
    el.innerHTML = `<div class="row g-3">${slot('headSign', 'প্রধান শিক্ষকের স্বাক্ষর', 'সাদা কাগজে কালো কালিতে স্বাক্ষর করে ছবি তুলুন বা স্ক্যান করুন। স্বচ্ছ PNG হলে সবচেয়ে ভালো দেখায়')}${slot('seal', 'স্কুলের সিল', 'গোল সিলের ছবি। স্বাক্ষরের উপর হালকা করে বসবে')}</div>
      <div class="card-x card-pad mt-3"><div class="sec small-t">স্বাক্ষরের নিচের লেখা: <b>${esc(S().docs.signLabel)}</b>${sc.headName ? ` · নাম: <b>${esc(sc.headName)}</b>` : ''}. এগুলো "ডকুমেন্ট ও সনদ" আর "স্কুলের তথ্য" ট্যাব থেকে বদলাতে পারবেন। ছবি না দিলে শুধু ফাঁকা দাগ আর লেখা ছাপা হবে, পরে হাতে স্বাক্ষর ও সিল দেওয়া যাবে</div></div>`;
    $$('[data-k]', el).forEach(i => i.onchange = async e => { const file = e.target.files[0]; if (!file) return; sc[i.dataset.k] = await UI.readImage(file, 500, 'image/png'); saveS('ছবি সংরক্ষিত'); Tabs.sign(el); });
    $$('[data-x]', el).forEach(b => b.onclick = () => { sc[b.dataset.x] = ''; saveS('সরানো হয়েছে'); Tabs.sign(el); });
  },
  docs(el) {
    const d = S().docs;
    const keys = ['নাম', 'পিতা', 'মাতা', 'ঠিকানা', 'শ্রেণি', 'শাখা', 'রোল', 'আইডি', 'বিভাগ', 'জন্ম_তারিখ', 'পরীক্ষার_সন', 'বোর্ড', 'জিপিএ', 'বোর্ড_রোল', 'রেজি_নং', 'কারণ'];
    el.innerHTML = `<form id="dcf"><div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-3">স্বাক্ষরের লেখা ও QR</h3><div class="row g-3">
      ${UI.inp('signLabel', 'প্রধান শিক্ষকের স্বাক্ষরের নিচে', d.signLabel)}${UI.inp('classTeacherLabel', 'শ্রেণি শিক্ষকের স্বাক্ষরের নিচে', d.classTeacherLabel)}
      ${UI.inp('examCtrlLabel', 'পরীক্ষা নিয়ন্ত্রকের স্বাক্ষরের নিচে', d.examCtrlLabel)}${UI.inp('board', 'শিক্ষা বোর্ড (প্রশংসাপত্রের জন্য)', d.board)}
      <div class="col-12"><div class="card-x card-pad" style="background:var(--primary-soft);border-color:transparent"><div class="d-flex gap-2 align-items-start">${ic('shield', 'ico-16')}<div class="small-t sec">QR যাচাই নিজে থেকে চলে, কিছু বসাতে হয় না। স্ক্যান করলে এই সাইটের যাচাই পাতা খুলবে: <span class="num">${esc(verifyBase())}verify.html</span></div></div></div></div>
      <div class="col-12"><label class="switch"><input type="checkbox" name="showQR" ${d.showQR !== false ? 'checked' : ''}> নতুন ডকুমেন্টে QR কোড আগে থেকে চালু থাকবে</label></div></div></div>
      <div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-1">প্রবেশপত্রের নির্দেশনা</h3><p class="muted small-t">প্রতি লাইনে একটি নির্দেশনা</p><textarea class="form-control" name="admitRules" rows="5">${esc(d.admitRules)}</textarea></div>
      <div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-1">প্রশংসাপত্রের লেখা</h3><p class="muted small-t">বন্ধনীর {ঘর} গুলো শিক্ষার্থীর তথ্য দিয়ে নিজে থেকে বসবে। নিচের যেকোনো ঘরে ক্লিক করলে লেখায় যোগ হবে</p>
        <div class="d-flex flex-wrap gap-1 mb-2">${keys.map(k => `<button type="button" class="tag b" style="border:0" data-ins="testimonialText" data-k="${k}">{${k}}</button>`).join('')}</div>
        <textarea class="form-control serif" name="testimonialText" rows="8" style="font-family:'Noto Serif Bengali',serif">${esc(d.testimonialText)}</textarea></div>
      <div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-1">ছাড়পত্রের লেখা</h3><div class="d-flex flex-wrap gap-1 mb-2">${keys.map(k => `<button type="button" class="tag b" style="border:0" data-ins="tcText" data-k="${k}">{${k}}</button>`).join('')}</div>
        <textarea class="form-control" name="tcText" rows="6" style="font-family:'Noto Serif Bengali',serif">${esc(d.tcText)}</textarea></div>
      <div class="card-x card-pad mb-3 sec small-t" style="background:var(--gold-soft);border-color:transparent">প্রবেশপত্র আর প্রশংসাপত্রের নিজস্ব ডিজাইনের স্যাম্পল দিলে সেই অনুযায়ী লেআউট বদলে দেওয়া হবে। এখনকার লেখা আর সেটিংস তখনও কাজ করবে</div>
      <button class="btn btn-primary">সংরক্ষণ</button> <button type="button" class="btn btn-ghost" id="prevT">${ic('award', 'ico-16')} প্রশংসাপত্র দেখুন</button></form>`;
    $$('[data-ins]', el).forEach(b => b.onclick = () => { const ta = $(`[name=${b.dataset.ins}]`, el); const p = ta.selectionStart ?? ta.value.length; ta.value = ta.value.slice(0, p) + `{${b.dataset.k}}` + ta.value.slice(ta.selectionEnd ?? p); ta.focus(); });
    $('#dcf').onsubmit = e => { e.preventDefault(); Object.assign(d, UI.formData(e.target)); saveS(); };
    $('#prevT').onclick = () => { Object.assign(d, UI.formData($('#dcf'))); Store.save(); const s = activeStudents().find(x => clsById(x.classId)?.order >= 10) || activeStudents()[0]; openStudio('testimonial', s ? { students: [s.id] } : {}); };
  },
  classes(el) {
    const tchs = Store.all('teachers').filter(t => t.type === 'শিক্ষক' && t.status !== 'left');
    const draw = () => {
      el.innerHTML = `<div class="card-x"><div class="card-head"><h3>শ্রেণি, শাখা ও শ্রেণি শিক্ষক</h3><span class="right">শাখা যোগ করতে ঘরে লিখে Enter চাপুন</span></div>
      ${sortedClasses().map(c => { const n = Store.all('students').filter(s => s.classId === c.id && s.status === 'active').length; return `<div class="srow" data-c="${c.id}">
        <div style="min-width:150px"><div>${esc(c.name)}</div><div class="muted small-t">${Fmt.n(n)} জন${c.hasGroups ? ' · বিভাগ আছে' : ''}</div></div>
        <div class="flex-grow-1 d-flex flex-wrap align-items-center gap-1">${c.sections.map(s => `<span class="chip-edit">${esc(s)} শাখা<select class="form-select form-select-sm" data-ct="${esc(s)}" style="width:auto;height:24px;padding:0 24px 0 6px;font-size:12px;border:0;background-color:transparent" title="শ্রেণি শিক্ষক"><option value="">শ্রেণি শিক্ষক</option>${tchs.map(t => `<option value="${t.id}" ${c.teacherBySection[s] === t.id ? 'selected' : ''}>${esc(t.name)}</option>`).join('')}</select><button data-rs="${esc(s)}" aria-label="সরান">${ic('x', 'ico-16')}</button></span>`).join('')}
          <input class="form-control form-control-sm" style="width:110px;height:28px" placeholder="নতুন শাখা" data-as></div>
        <button class="btn btn-quiet btn-icon btn-sm" data-ec aria-label="সম্পাদনা">${ic('edit', 'ico-16')}</button><button class="btn btn-quiet btn-icon btn-sm" data-dc aria-label="মুছুন">${ic('trash', 'ico-16')}</button></div>`; }).join('')}
      <div class="srow"><button class="btn btn-ghost" id="addC">${ic('plus', 'ico-16')} শ্রেণি যোগ করুন</button></div></div>`;
      $$('[data-c]', el).forEach(row => {
        const c = clsById(row.dataset.c);
        $('[data-as]', row).onkeydown = e => { if (e.key !== 'Enter') return; const v = e.target.value.trim(); if (!v) return; if (c.sections.includes(v)) return UI.toast('এই শাখা আগেই আছে', 'warn'); c.sections.push(v); saveS('শাখা যোগ হয়েছে'); draw(); };
        $$('[data-ct]', row).forEach(sl => sl.onchange = () => { c.teacherBySection[sl.dataset.ct] = sl.value; saveS('শ্রেণি শিক্ষক বসানো হয়েছে'); });
        $$('[data-rs]', row).forEach(b => b.onclick = async () => {
          const s = b.dataset.rs, n = Store.all('students').filter(x => x.classId === c.id && x.section === s && x.status === 'active').length;
          if (n) return UI.toast(`${s} শাখায় ${Fmt.n(n)} জন আছে, আগে তাদের সরান`, 'warn');
          if (await UI.confirm(`${c.name}-এর ${s} শাখা সরানো হবে`, 'সরান')) { c.sections = c.sections.filter(x => x !== s); saveS(); draw(); }
        });
        $('[data-ec]', row).onclick = () => classForm(c, draw);
        $('[data-dc]', row).onclick = async () => { if (Store.all('students').some(x => x.classId === c.id)) return UI.toast('এই শ্রেণিতে শিক্ষার্থী আছে, তাই মোছা যাবে না', 'warn'); if (await UI.confirm(`${c.name} মুছে যাবে`)) { S().classes = S().classes.filter(x => x.id !== c.id); saveS(); draw(); } };
      });
      $('#addC').onclick = () => classForm(null, draw);
    };
    draw();
  },
  subjects(el) {
    const draw = () => {
      const subs = [...S().subjects].sort((a, b) => a.code.localeCompare(b.code));
      el.innerHTML = `<div class="d-flex mb-3 align-items-center"><span class="sec">মোট ${Fmt.n(subs.length)}টি বিষয়</span><button class="btn btn-primary ms-auto" id="addSub">${ic('plus', 'ico-16')} বিষয় যোগ করুন</button></div>
      <div class="card-x"><div class="tbl-wrap"><table class="tbl dense"><thead><tr><th>কোড</th><th>বিষয়</th><th class="hide-m">সংক্ষেপ</th><th>শ্রেণি</th><th class="hide-m">বিভাগ</th><th class="r">পূর্ণমান</th><th class="r">পাস</th></tr></thead><tbody>
      ${subs.map(s => `<tr class="click" data-s="${s.id}"><td class="num">${esc(Fmt.bd(s.code))}</td><td>${esc(s.name)}</td><td class="sec hide-m">${esc(s.short)}</td><td class="sec small-t">${s.classes.map(id => clsShort(id)).join(', ')}</td><td class="hide-m">${s.group ? `<span class="tag">${esc(s.group)}</span>` : '<span class="muted small-t">সবার জন্য</span>'}</td><td class="r num">${Fmt.n(s.fullMarks)}</td><td class="r num">${Fmt.n(s.passMarks)}</td></tr>`).join('')}
      </tbody></table></div></div>`;
      $$('[data-s]', el).forEach(r => r.onclick = () => subjectForm(S().subjects.find(x => x.id === r.dataset.s), draw));
      $('#addSub').onclick = () => subjectForm(null, draw);
    };
    draw();
  },
  grading(el) {
    const draw = () => {
      const g = [...S().grading].sort((a, b) => b.min - a.min);
      el.innerHTML = `<div class="card-x"><div class="card-head"><h3>গ্রেডিং পদ্ধতি</h3><span class="right">শতকরা নম্বর অনুযায়ী</span></div><table class="tbl dense"><thead><tr><th>সর্বনিম্ন নম্বর (%)</th><th>লেটার গ্রেড</th><th>গ্রেড পয়েন্ট</th><th></th></tr></thead><tbody>
        ${g.map((x, i) => `<tr data-i="${S().grading.indexOf(x)}"><td><input class="marks-in" data-f="min" value="${x.min}"></td><td><input class="marks-in" data-f="grade" value="${esc(x.grade)}"></td><td><input class="marks-in" data-f="gp" value="${x.gp}"></td><td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-del aria-label="মুছুন">${ic('trash', 'ico-16')}</button></td></tr>`).join('')}
        </tbody></table><div class="card-pad"><button class="btn btn-ghost" id="addG">${ic('plus', 'ico-16')} ধাপ যোগ করুন</button><div class="hint mt-2">কোনো বিষয়ে পাস নম্বরের কম পেলে সেই বিষয়ে F ধরা হয়, আর মোট জিপিএ ০.০০ হয়। প্রতিটি বিষয়ের পাস নম্বর "বিষয়" ট্যাব থেকে বদলান</div></div></div>`;
      $$('tr[data-i]', el).forEach(tr => { const x = S().grading[+tr.dataset.i];
        $$('[data-f]', tr).forEach(i => i.onchange = () => { x[i.dataset.f] = i.dataset.f === 'grade' ? i.value.trim() : +Fmt.en(i.value) || 0; saveS(); });
        $('[data-del]', tr).onclick = () => { S().grading.splice(+tr.dataset.i, 1); saveS(); draw(); }; });
      $('#addG').onclick = () => { S().grading.push({ min: 0, grade: 'নতুন', gp: 0 }); saveS(); draw(); };
    };
    draw();
  },
  periods(el) {
    const draw = () => {
      el.innerHTML = `<div class="card-x"><div class="card-head"><h3>পিরিয়ড ও সময়</h3><span class="right">রুটিন এই অনুযায়ী সাজানো হয়</span></div><table class="tbl dense"><thead><tr><th>নাম</th><th>শুরু</th><th>শেষ</th><th>বিরতি</th><th></th></tr></thead><tbody>
        ${S().periods.map((p, i) => `<tr data-i="${i}"><td><input class="form-control form-control-sm" data-f="label" value="${esc(p.label)}" style="width:110px"></td><td><input type="time" class="form-control form-control-sm" data-f="start" value="${p.start}" style="width:120px"></td><td><input type="time" class="form-control form-control-sm" data-f="end" value="${p.end}" style="width:120px"></td>
          <td><label class="switch"><input type="checkbox" data-f="brk" ${p.brk ? 'checked' : ''}></label></td><td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-up aria-label="উপরে">${ic('arrowUp', 'ico-16')}</button><button class="btn btn-quiet btn-sm btn-icon" data-del aria-label="মুছুন">${ic('trash', 'ico-16')}</button></td></tr>`).join('')}
        </tbody></table><div class="card-pad"><button class="btn btn-ghost" id="addP">${ic('plus', 'ico-16')} পিরিয়ড যোগ করুন</button></div></div>`;
      $$('tr[data-i]', el).forEach(tr => { const i = +tr.dataset.i, p = S().periods[i];
        $$('[data-f]', tr).forEach(inp => inp.onchange = () => { p[inp.dataset.f] = inp.type === 'checkbox' ? inp.checked : inp.value; saveS(); });
        $('[data-del]', tr).onclick = async () => { if (await UI.confirm(`${esc(p.label)} পিরিয়ড আর রুটিনে এর সব ক্লাস সরানো হবে`, 'সরান')) { S().periods.splice(i, 1); saveS(); draw(); } };
        $('[data-up]', tr).onclick = () => { if (!i) return; const a = S().periods; [a[i - 1], a[i]] = [a[i], a[i - 1]]; saveS(); draw(); }; });
      $('#addP').onclick = () => { const last = S().periods[S().periods.length - 1]; S().periods.push({ id: 'p' + Store.uid(), label: 'নতুন', start: last?.end || '10:00', end: last?.end || '10:45' }); saveS(); draw(); };
    };
    draw();
  },
  lists(el) {
    const block = (key, title, hint) => `<div class="card-x mb-3"><div class="card-head"><h3>${title}</h3><span class="right">${hint}</span></div>
      <div class="card-pad d-flex flex-wrap align-items-center">${S()[key].map((x, i) => `<span class="chip-edit">${esc(x)}<button data-k="${key}" data-i="${i}" aria-label="সরান">${ic('x', 'ico-16')}</button></span>`).join('')}
      <input class="form-control form-control-sm ms-1" style="width:200px;height:28px" placeholder="নতুন যোগ করুন, তারপর Enter" data-add="${key}"></div></div>`;
    const draw = () => {
      el.innerHTML = block('designations', 'পদবি', 'এই ক্রমে শিক্ষকরা সাজানো হয়') + block('groups', 'বিভাগ (৯ম–১০ম)', '') + block('expenseCats', 'ব্যয়ের খাত', 'প্রথমটি বেতনের জন্য ব্যবহার হয়') + block('incomeCats', 'আয়ের খাত', '');
      $$('[data-add]', el).forEach(inp => inp.onkeydown = e => { if (e.key !== 'Enter') return; const v = inp.value.trim(); if (!v || S()[inp.dataset.add].includes(v)) return; S()[inp.dataset.add].push(v); saveS('যোগ হয়েছে'); draw(); });
      $$('[data-k]', el).forEach(b => b.onclick = () => { S()[b.dataset.k].splice(+b.dataset.i, 1); saveS('সরানো হয়েছে'); draw(); });
    };
    draw();
  },
  fields(el) {
    const draw = () => {
      el.innerHTML = `<p class="sec">শিক্ষার্থীর ফর্মে বাড়তি ঘর লাগলে এখানে যোগ করুন, যেমন উপবৃত্তি নম্বর বা বাসের রুট। এগুলো ভর্তি ফর্ম আর প্রোফাইলে দেখাবে</p>
      <div class="card-x">${S().customFields.map(cf => `<div class="srow"><div class="flex-grow-1">${esc(cf.label)}</div><span class="tag">${{ text: 'লেখা', number: 'সংখ্যা', date: 'তারিখ' }[cf.type]}</span><button class="btn btn-quiet btn-icon btn-sm" data-rf="${cf.id}" aria-label="সরান">${ic('trash', 'ico-16')}</button></div>`).join('')}
      <form class="srow" id="cff"><input class="form-control" name="label" placeholder="ঘরের নাম" required style="max-width:320px"><select class="form-select" name="type" style="width:120px"><option value="text">লেখা</option><option value="number">সংখ্যা</option><option value="date">তারিখ</option></select><button class="btn btn-primary">${ic('plus', 'ico-16')} যোগ</button></form></div>`;
      $('#cff').onsubmit = e => { e.preventDefault(); S().customFields.push({ id: Store.uid(), ...UI.formData(e.target) }); saveS('ঘর যোগ হয়েছে'); draw(); };
      $$('[data-rf]', el).forEach(b => b.onclick = async () => { if (await UI.confirm('এই ঘর আর এতে লেখা সব তথ্য সরানো হবে', 'সরান')) { S().customFields = S().customFields.filter(x => x.id !== b.dataset.rf); saveS(); draw(); } });
    };
    draw();
  },
  admin(el) {
    const live = Store.mode === 'live', u = live && Cloud.user();
    el.innerHTML = `<div class="card-x card-pad" style="max-width:520px">${live ? `<div class="mb-3"><div class="muted small-t">অ্যাডমিন অ্যাকাউন্ট</div><div style="font-size:16px">${esc(u ? u.email : '')}</div></div><form id="pwf">
      <div class="mb-3"><label class="form-label">বর্তমান পাসওয়ার্ড</label><input class="form-control" type="password" name="o" required autocomplete="current-password"></div>
      <div class="mb-3"><label class="form-label">নতুন পাসওয়ার্ড</label><input class="form-control" type="password" name="n" minlength="6" required autocomplete="new-password"></div>
      <button class="btn btn-primary">${ic('lock', 'ico-16')} পাসওয়ার্ড বদলান</button><div class="err" id="pwe"></div></form>`
      : `<div class="sec">ডেমো মোডে কোনো পাসওয়ার্ড নেই। আসল সিস্টেমে অ্যাডমিনের ইমেইল আর পাসওয়ার্ড দিয়ে লগইন করতে হয়</div>`}</div>
      <div class="card-x card-pad mt-3" style="max-width:520px"><label class="switch"><input type="checkbox" id="thm" ${S().theme === 'dark' ? 'checked' : ''}> ডার্ক মোড</label></div>`;
    if (live) $('#pwf').onsubmit = async e => { e.preventDefault(); const d = UI.formData(e.target); UI.busy(true, 'বদলানো হচ্ছে…');
      try { await Cloud.changePassword(d.o, d.n); UI.busy(false); e.target.reset(); $('#pwe').textContent = ''; UI.success('পাসওয়ার্ড বদলানো হয়েছে'); } catch (er) { UI.busy(false); $('#pwe').textContent = fbMsg(er); } };
    $('#thm').onchange = e => { S().theme = e.target.checked ? 'dark' : 'light'; Store.save(); renderShell(); route(); };
  },
  backup(el) {
    const size = (new Blob([Store.exportJSON()]).size / 1024).toFixed(0);
    el.innerHTML = `<div class="card-x mb-3"><div class="card-head"><h3>ব্যাকআপ নিন</h3><span class="right">ডেটার আকার প্রায় ${Fmt.n(size)} KB</span></div>
      <div class="card-pad"><p class="sec">${Store.mode === 'live' ? 'সব তথ্য অনলাইন ডেটাবেসে নিরাপদে রাখা আছে। তবুও মাঝে মাঝে একটি ব্যাকআপ ফাইল নিজের কাছে রেখে দিন' : 'ডেমোর তথ্য শুধু এই ব্রাউজারে থাকে, আসল সিস্টেমের সাথে এর কোনো সম্পর্ক নেই'}</p>
      <button class="btn btn-primary" id="dl">${ic('download', 'ico-16')} ব্যাকআপ ফাইল নামান</button> <button class="btn btn-ghost" id="cp">${ic('copy', 'ico-16')} কপি করুন</button></div></div>
      <div class="card-x mb-3"><div class="card-head"><h3>ব্যাকআপ থেকে ফিরিয়ে আনুন</h3></div><div class="card-pad"><p class="sec">বর্তমান সব তথ্যের জায়গায় ফাইলের তথ্য বসবে</p>
      <label class="btn btn-ghost mb-0">${ic('upload', 'ico-16')} ফাইল বাছুন<input type="file" accept=".json,application/json" id="imp" hidden></label></div></div>
      <div class="card-x"><div class="card-head"><h3 style="color:var(--neg)">সব তথ্য মুছুন</h3></div><div class="card-pad"><p class="sec">শিক্ষার্থী, শিক্ষক, হাজিরা, নম্বর, হিসাব সব মুছে যাবে। স্কুলের তথ্য, বিষয় আর অন্যান্য সেটিংস থেকে যাবে। আগে ব্যাকআপ নিয়ে রাখুন</p>
      <button class="btn btn-danger" id="rst">${ic('trash', 'ico-16')} সব ডেটা মুছুন</button></div></div>`;
    $('#dl').onclick = () => { if (!UI.download(`school-backup-${todayISO()}.json`, Store.exportJSON())) UI.toast('এখানে ডাউনলোড চালু নেই, কপি করুন', 'warn'); };
    $('#cp').onclick = async () => { try { await navigator.clipboard.writeText(Store.exportJSON()); UI.toast('কপি হয়েছে, একটি .json ফাইলে পেস্ট করে রাখুন'); } catch (e) { UI.toast('কপি করা গেল না', 'warn'); } };
    $('#imp').onchange = async e => { const file = e.target.files[0]; if (!file) return; if (!(await UI.confirm('বর্তমান সব তথ্যের জায়গায় ব্যাকআপের তথ্য বসবে', 'ফিরিয়ে আনুন'))) return;
      try { UI.busy(true, 'ফিরিয়ে আনা হচ্ছে…'); await Store.importJSON(await file.text()); UI.busy(false); UI.success('ব্যাকআপ ফিরিয়ে আনা হয়েছে'); renderShell(); route(); } catch (er) { UI.busy(false); UI.toast('ফাইলটি সঠিক ব্যাকআপ নয়', 'warn'); } };
    $('#rst').onclick = async () => { if (await UI.confirm('শিক্ষার্থী, শিক্ষক, হাজিরা, নম্বর আর হিসাবের সব তথ্য স্থায়ীভাবে মুছে যাবে। স্কুলের সেটিংস থেকে যাবে', 'সব মুছুন')) { UI.busy(true, 'মোছা হচ্ছে…'); await Store.wipeData(); UI.busy(false); UI.success('সব তথ্য মুছে ফেলা হয়েছে'); refresh(); } };
  }
};

function classForm(c, done) {
  const x = c || { name: '', short: '', order: Math.max(0, ...S().classes.map(k => k.order)) + 1, hasGroups: false };
  UI.modal({
    title: c ? 'শ্রেণি সম্পাদনা' : 'নতুন শ্রেণি', size: 'sm',
    body: `<form class="mb" id="cf"><div class="mb-3"><label class="form-label">নাম</label><input class="form-control" name="name" value="${esc(x.name)}" required placeholder="যেমন: নবম শ্রেণি"></div>
      <div class="row g-3 mb-3"><div class="col-6"><label class="form-label">সংক্ষেপে</label><input class="form-control" name="short" value="${esc(x.short)}" placeholder="৯ম"></div>
      <div class="col-6"><label class="form-label">ক্রম</label><input class="form-control" type="number" name="order" value="${x.order}"></div></div>
      <label class="switch"><input type="checkbox" name="hasGroups" ${x.hasGroups ? 'checked' : ''}> এই শ্রেণিতে বিভাগ আছে</label></form>`,
    foot: `<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="sv">সংরক্ষণ</button>`,
    onMount: (m, close) => $('#sv', m).onclick = () => {
      const f = $('#cf', m); if (!f.reportValidity()) return; const d = UI.formData(f); d.order = +d.order; d.short = d.short || d.name;
      if (c) Object.assign(c, d); else S().classes.push({ id: 'c' + Store.uid(), sections: ['ক'], teacherBySection: {}, ...d });
      saveS(); close(); done();
    }
  });
}
function subjectForm(s, done) {
  const x = s || { name: '', short: '', code: '', classes: [], group: '', fullMarks: 100, passMarks: 33 };
  UI.modal({
    title: s ? 'বিষয় সম্পাদনা' : 'নতুন বিষয়',
    body: `<form class="mb" id="subf"><div class="row g-3">
      ${UI.inp('name', 'বিষয়ের নাম *', x.name, 'required', 'col-md-6')}${UI.inp('short', 'সংক্ষেপ (ফলাফল শিটে)', x.short, '', 'col-md-3')}${UI.inp('code', 'কোড *', x.code, 'required', 'col-md-3')}
      ${UI.sel('group', 'বিভাগ', [['', 'সবার জন্য'], ...S().groups], x.group, 'col-md-6')}${UI.inp('fullMarks', 'পূর্ণমান', x.fullMarks, 'type="number"', 'col-md-3')}${UI.inp('passMarks', 'পাস নম্বর', x.passMarks, 'type="number"', 'col-md-3')}
      <div class="col-12"><label class="form-label">কোন কোন শ্রেণিতে পড়ানো হয়</label><div class="d-flex flex-wrap gap-3">${sortedClasses().map(c => `<label class="check"><input type="checkbox" data-cl="${c.id}" ${x.classes.includes(c.id) ? 'checked' : ''}>${esc(c.short)}</label>`).join('')}</div></div>
    </div></form>`,
    foot: `${s ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="dsub">${ic('trash', 'ico-16')} মুছুন</button>` : ''}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="ssub">সংরক্ষণ</button>`,
    onMount: (m, close) => {
      $('#ssub', m).onclick = () => {
        const f = $('#subf', m); if (!f.reportValidity()) return; const d = UI.formData(f);
        d.classes = $$('[data-cl]', m).filter(i => i.checked).map(i => i.dataset.cl); d.fullMarks = +d.fullMarks || 100; d.passMarks = +d.passMarks || Math.round(d.fullMarks * .33); d.short = d.short || d.name;
        if (!d.classes.length) return UI.toast('অন্তত একটি শ্রেণি বাছুন', 'warn');
        if (s) Object.assign(s, d); else S().subjects.push({ id: 's' + Store.uid(), ...d });
        saveS(); close(); done();
      };
      if (s) $('#dsub', m).onclick = async () => { if (await UI.confirm(`${esc(s.name)} বিষয়টি মুছে যাবে`)) { S().subjects = S().subjects.filter(k => k.id !== s.id); saveS(); close(); done(); } };
    }
  });
}
