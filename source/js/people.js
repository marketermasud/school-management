/* =========================================================
   শিক্ষার্থী ও শিক্ষক-কর্মচারী
   ========================================================= */
const stFilter = { q: '', cls: '', sec: '', grp: '', status: 'active' };
Views.students = view => {
  setTitle('শিক্ষার্থী', '', `<button class="btn btn-ghost" id="promo">${ic('arrowUp', 'ico-16')}<span>প্রমোশন</span></button><button class="btn btn-ghost" id="csv">${ic('download', 'ico-16')}<span>CSV</span></button><button class="btn btn-primary" id="addSt">${ic('plus', 'ico-16')}<span>নতুন ভর্তি</span></button>`);
  $('#addSt').onclick = () => studentForm();
  $('#promo').onclick = promotionTool;
  view.innerHTML = `
  <div class="toolbar">
    <div class="input-ico grow">${ic('search')}<input class="form-control" id="fq" placeholder="নাম, রোল, আইডি বা মোবাইল" value="${esc(stFilter.q)}"></div>
    <select class="form-select" id="fc">${classOptions(stFilter.cls, true)}</select>
    <select class="form-select" id="fs">${sectionOptions(stFilter.cls, stFilter.sec, true)}</select>
    <select class="form-select" id="fg"><option value="">সব বিভাগ</option>${S().groups.map(g => `<option ${g === stFilter.grp ? 'selected' : ''}>${esc(g)}</option>`).join('')}</select>
    <select class="form-select" id="fst">${[['active', 'অধ্যয়নরত'], ['transferred', 'বদলি হয়েছে'], ['passed', 'পাস করে বেরিয়েছে'], ['left', 'প্রাক্তন'], ['', 'সবাই']].map(o => `<option value="${o[0]}" ${o[0] === stFilter.status ? 'selected' : ''}>${o[1]}</option>`).join('')}</select>
    <span class="muted ms-auto small-t" id="cnt"></span>
  </div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রোল</th><th>নাম</th><th>শ্রেণি</th><th class="hide-m">বিভাগ</th><th class="hide-m">পিতার নাম</th><th class="hide-m">মোবাইল</th><th class="r">বকেয়া</th><th></th></tr></thead><tbody id="tb"></tbody></table></div></div>`;
  let list = [];
  const draw = () => {
    const q = Fmt.en(stFilter.q).toLowerCase();
    list = sortStudents(Store.all('students').filter(s => (!stFilter.status || s.status === stFilter.status) && (!stFilter.cls || s.classId === stFilter.cls) && (!stFilter.sec || s.section === stFilter.sec) && (!stFilter.grp || s.group === stFilter.grp) &&
      (!q || [s.nameBn, s.nameEn, s.studentId, s.phone, String(s.roll), s.father].some(v => String(v || '').toLowerCase().includes(q)))));
    $('#cnt').textContent = Fmt.n(list.length) + ' জন';
    $('#tb').innerHTML = list.length ? list.map(s => { const due = s.status === 'active' ? dueOf(s) : { amount: 0 }; return `<tr class="click" data-id="${s.id}">
      <td><span class="roll num">${Fmt.n(s.roll)}</span></td>
      <td><div class="d-flex align-items-center gap-2">${UI.avatar(s.nameBn, s.photo, '', s.gender)}<div><div>${esc(s.nameBn)}</div><div class="muted num" style="font-size:12.5px">${esc(Fmt.bd(s.studentId || ''))}</div></div></div></td>
      <td>${esc(clsShort(s.classId))} · ${esc(s.section)}</td><td class="hide-m">${s.group ? esc(s.group) : '<span class="muted">—</span>'}</td>
      <td class="sec hide-m">${esc(s.father || '—')}</td><td class="num sec hide-m">${esc(Fmt.bd(s.phone) || '—')}</td>
      <td class="r num">${due.amount ? `<span class="down">${Fmt.tk(due.amount)}</span>` : '<span class="muted">—</span>'}</td>
      <td class="r"><button class="btn btn-quiet btn-icon btn-sm" data-edit="${s.id}" aria-label="সম্পাদনা">${ic('edit', 'ico-16')}</button></td></tr>`; }).join('')
      : `<tr><td colspan="8">${UI.empty('এই খোঁজে কোনো শিক্ষার্থী পাওয়া যায়নি', 'search')}</td></tr>`;
    $$('#tb tr[data-id]').forEach(tr => tr.onclick = e => { const ed = e.target.closest('[data-edit]'); ed ? studentForm(Store.find('students', ed.dataset.edit)) : studentProfile(tr.dataset.id); });
  };
  $('#csv').onclick = () => {
    const head = ['আইডি', 'রোল', 'নাম', 'শ্রেণি', 'শাখা', 'বিভাগ', 'পিতা', 'মাতা', 'মোবাইল', 'জন্ম তারিখ', 'ঠিকানা'];
    const rows = list.map(s => [s.studentId, s.roll, s.nameBn, clsName(s.classId), s.section, s.group, s.father, s.mother, s.phone, s.dob, s.address]);
    const csv = '﻿' + [head, ...rows].map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
    if (!UI.download(`students-${todayISO()}.csv`, csv, 'text/csv')) UI.toast('এখানে ডাউনলোড চালু নেই', 'warn');
  };
  $('#fq').oninput = e => { stFilter.q = e.target.value; draw(); };
  $('#fc').onchange = e => { stFilter.cls = e.target.value; stFilter.sec = ''; $('#fs').innerHTML = sectionOptions(stFilter.cls, '', true); draw(); };
  $('#fs').onchange = e => { stFilter.sec = e.target.value; draw(); };
  $('#fg').onchange = e => { stFilter.grp = e.target.value; draw(); };
  $('#fst').onchange = e => { stFilter.status = e.target.value; draw(); };
  draw();
};

function nextStudentId(cid) {
  const c = clsById(cid), y = S().school.session || new Date().getFullYear();
  const pre = `${y}${String(c ? c.order : 0).padStart(2, '0')}`;
  const used = Store.all('students').map(s => s.studentId).filter(x => x && x.startsWith(pre)).map(x => +x.slice(pre.length) || 0);
  return pre + String((used.length ? Math.max(...used) : 0) + 1).padStart(3, '0');
}
function nextRoll(cid, sec) { const r = activeStudents().filter(s => s.classId === cid && s.section === sec).map(s => +s.roll); return r.length ? Math.max(...r) + 1 : 1; }

function studentForm(st = null) {
  const first = sortedClasses()[0];
  const s = st || { classId: first?.id, section: first?.sections[0], gender: 'M', status: 'active', admissionDate: todayISO(), custom: {}, religion: 'ইসলাম' };
  let photo = s.photo || '';
  const f = UI.inp, sel = UI.sel;
  const custom = S().customFields.map(cf => f('cf_' + cf.id, esc(cf.label), (s.custom || {})[cf.id] || '', `type="${cf.type === 'number' ? 'number' : cf.type === 'date' ? 'date' : 'text'}"`)).join('');
  UI.modal({
    title: st ? 'শিক্ষার্থীর তথ্য সম্পাদনা' : 'নতুন ভর্তি', size: 'lg',
    body: `<form class="mb" id="sf" autocomplete="off">
      <div class="fsec">ব্যক্তিগত তথ্য</div>
      <div class="photo-pick mb-3"><span id="pv">${UI.avatar(s.nameBn, photo, 'lg', s.gender)}</span>
        <div><label class="btn btn-ghost mb-0">${ic('upload', 'ico-16')} ছবি বাছুন<input type="file" accept="image/*" id="ph" hidden></label>
        <button type="button" class="btn btn-quiet" id="phx" ${photo ? '' : 'hidden'}>সরান</button><div class="hint">পাসপোর্ট সাইজের ছবি দিন, নিজে থেকে ছোট করে রাখা হবে</div></div></div>
      <div class="row g-3">
        ${f('nameBn', 'নাম (বাংলায়) *', s.nameBn, 'required')}${f('nameEn', 'নাম (ইংরেজিতে)', s.nameEn)}
        ${f('dob', 'জন্ম তারিখ', s.dob, 'type="date"', 'col-md-4')}
        ${sel('gender', 'লিঙ্গ', [['M', 'ছাত্র'], ['F', 'ছাত্রী']], s.gender, 'col-md-4')}
        ${sel('blood', 'রক্তের গ্রুপ', ['', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], s.blood || '', 'col-md-4')}
        ${sel('religion', 'ধর্ম', ['ইসলাম', 'হিন্দু', 'বৌদ্ধ', 'খ্রিস্টান', 'অন্যান্য'], s.religion, 'col-md-4')}
        ${f('birthReg', 'জন্ম নিবন্ধন নং', s.birthReg, 'inputmode="numeric"', 'col-md-8')}
      </div>
      <div class="fsec">একাডেমিক তথ্য</div>
      <div class="row g-3">
        <div class="col-md-4"><label class="form-label">শ্রেণি *</label><select class="form-select" name="classId" id="fCls">${classOptions(s.classId)}</select></div>
        <div class="col-md-4"><label class="form-label">শাখা *</label><select class="form-select" name="section" id="fSec">${sectionOptions(s.classId, s.section)}</select></div>
        ${f('roll', 'রোল *', s.roll ?? nextRoll(s.classId, s.section), 'type="number" min="1" required id="fRoll"', 'col-md-4')}
        <div class="col-md-4" id="grpBox"><label class="form-label">বিভাগ</label><select class="form-select" name="group">${S().groups.map(g => `<option ${g === s.group ? 'selected' : ''}>${esc(g)}</option>`).join('')}</select></div>
        ${f('sscReg', 'রেজিস্ট্রেশন নং (বোর্ড)', s.sscReg, 'inputmode="numeric"', 'col-md-4 ssc-col')}
        ${f('studentId', 'শিক্ষার্থী আইডি', s.studentId || nextStudentId(s.classId), 'id="sid"', 'col-md-4')}
        ${f('admissionDate', 'ভর্তির তারিখ', s.admissionDate, 'type="date"', 'col-md-4')}
        ${sel('status', 'অবস্থা', [['active', 'অধ্যয়নরত'], ['transferred', 'বদলি হয়েছে'], ['passed', 'পাস করে বেরিয়েছে'], ['left', 'প্রাক্তন']], s.status, 'col-md-4')}
        ${f('prevSchool', 'আগের প্রতিষ্ঠান', s.prevSchool, '', 'col-md-4')}
      </div>
      <div class="ssc-col"><div class="fsec">এসএসসি ফলাফল (প্রশংসাপত্রের জন্য)</div>
      <div class="row g-3">${f('sscRoll', 'বোর্ড রোল', s.sscRoll, 'inputmode="numeric"', 'col-md-3')}${f('sscGpa', 'জিপিএ', s.sscGpa, 'placeholder="৫.০০"', 'col-md-3')}${f('sscYear', 'পরীক্ষার সন', s.sscYear, 'inputmode="numeric"', 'col-md-3')}${f('sscBoard', 'বোর্ড', s.sscBoard || S().docs.board, '', 'col-md-3')}</div></div>
      <div class="fsec">অভিভাবক</div>
      <div class="row g-3">
        ${f('father', 'পিতার নাম', s.father)}${f('mother', 'মাতার নাম', s.mother)}
        ${f('guardian', 'অভিভাবকের নাম (পিতা-মাতা ছাড়া হলে)', s.guardian)}${f('phone', 'অভিভাবকের মোবাইল *', s.phone, 'required inputmode="tel"')}
        ${f('address', 'বর্তমান ঠিকানা', s.address, '', 'col-12')}
      </div>
      ${custom ? `<div class="fsec">অতিরিক্ত তথ্য</div><div class="row g-3">${custom}</div>` : ''}
      <div class="err" id="sfErr"></div>
    </form>`,
    foot: `${st ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="delSt">${ic('trash', 'ico-16')} মুছুন</button>` : ''}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="saveSt">${st ? 'সংরক্ষণ' : 'ভর্তি করুন'}</button>`,
    onMount: (m, close) => {
      const form = $('#sf', m);
      const sync = () => { const c = clsById($('#fCls', m).value); $('#grpBox', m).hidden = !(c && c.hasGroups); $$('.ssc-col', m).forEach(x => x.hidden = !(c && c.order >= 9)); };
      sync();
      $('#fCls', m).onchange = e => { $('#fSec', m).innerHTML = sectionOptions(e.target.value); if (!st) { $('#sid', m).value = nextStudentId(e.target.value); $('#fRoll', m).value = nextRoll(e.target.value, $('#fSec', m).value); } sync(); };
      $('#fSec', m).onchange = e => { if (!st) $('#fRoll', m).value = nextRoll($('#fCls', m).value, e.target.value); };
      $('#ph', m).onchange = async e => { const file = e.target.files[0]; if (!file) return; photo = await UI.readImage(file, 320); $('#pv', m).innerHTML = UI.avatar('', photo, 'lg'); $('#phx', m).hidden = false; };
      $('#phx', m).onclick = () => { photo = ''; $('#pv', m).innerHTML = UI.avatar($('[name=nameBn]', m).value, '', 'lg'); $('#phx', m).hidden = true; };
      $('#saveSt', m).onclick = () => {
        if (!form.reportValidity()) return;
        const d = UI.formData(form); const c = clsById(d.classId);
        if (!c.hasGroups) d.group = '';
        const dup = Store.all('students').find(x => x.id !== s.id && x.status === 'active' && x.classId === d.classId && x.section === d.section && +x.roll === +d.roll);
        if (dup && d.status === 'active') { $('#sfErr', m).textContent = `${c.short} ${d.section} শাখায় রোল ${Fmt.n(d.roll)} আগে থেকেই ${dup.nameBn}-এর`; return; }
        const custom = {}; Object.keys(d).filter(k => k.startsWith('cf_')).forEach(k => { custom[k.slice(3)] = d[k]; delete d[k]; });
        d.roll = +d.roll;
        Store.upsert('students', { ...(st ? { id: st.id } : {}), ...d, photo, custom });
        close(); UI.success(st ? 'তথ্য হালনাগাদ হয়েছে' : 'ভর্তি সম্পন্ন হয়েছে', `${d.nameBn} · ${clsShort(d.classId)} ${d.section} শাখা · রোল ${Fmt.n(d.roll)}`); refresh();
      };
      if (st) $('#delSt', m).onclick = async () => {
        if (await UI.confirm(`${esc(st.nameBn)}-এর সব তথ্য মুছে যাবে। শুধু ভুল করে যোগ হলে মুছুন, নইলে অবস্থা বদলে "প্রাক্তন" করুন`)) { Store.remove('students', st.id); close(); UI.toast('শিক্ষার্থী মুছে ফেলা হয়েছে'); refresh(); }
      };
    }
  });
}

function studentProfile(id) {
  const s = Store.find('students', id); if (!s) return;
  const c = clsById(s.classId);
  const all = studentAtt(s), mon = studentAtt(s, todayISO().slice(0, 7) + '-01');
  const rate = all.t ? all.p / all.t * 100 : null;
  const status = { active: ['অধ্যয়নরত', 'g'], transferred: ['বদলি হয়েছে', 'y'], passed: ['পাস করে বেরিয়েছে', 'b'], left: ['প্রাক্তন', ''] }[s.status] || ['', ''];
  const due = dueOf(s);
  const pays = Store.all('payments').filter(p => p.studentId === s.id).sort((a, b) => a.date < b.date ? 1 : -1);
  const exams = Store.all('exams').filter(e => (D().marks[`${e.id}|${s.id}`]));
  const ct = c && c.teacherBySection ? teacherName(c.teacherBySection[s.section]) : '';
  const kv = [['শিক্ষার্থী আইডি', s.studentId], ['শ্রেণি ও শাখা', `${clsName(s.classId)}, ${s.section} শাখা`], ['রোল', Fmt.n(s.roll)],
    ...(c && c.hasGroups ? [['বিভাগ', s.group]] : []), ...(s.sscReg ? [['রেজিস্ট্রেশন নং', s.sscReg]] : []), ...(ct ? [['শ্রেণি শিক্ষক', ct]] : []),
    ['নাম (ইংরেজি)', s.nameEn], ['জন্ম তারিখ', s.dob ? `${Fmt.date(s.dob)} (${Fmt.n(Fmt.age(s.dob))} বছর)` : ''], ['জন্ম নিবন্ধন', s.birthReg], ['লিঙ্গ', s.gender === 'M' ? 'ছাত্র' : 'ছাত্রী'],
    ['ধর্ম', s.religion], ['রক্তের গ্রুপ', s.blood], ['পিতার নাম', s.father], ['মাতার নাম', s.mother], ...(s.guardian ? [['অভিভাবক', s.guardian]] : []), ['মোবাইল', s.phone], ['ঠিকানা', s.address],
    ['ভর্তির তারিখ', s.admissionDate ? Fmt.date(s.admissionDate) : ''], ...(s.prevSchool ? [['আগের প্রতিষ্ঠান', s.prevSchool]] : []),
    ...(s.sscGpa ? [['এসএসসি', `জিপিএ ${s.sscGpa}, ${s.sscYear || ''} (${s.sscBoard || ''} বোর্ড), রোল ${s.sscRoll || '—'}`]] : []),
    ...S().customFields.map(cf => [cf.label, (s.custom || {})[cf.id]])];
  UI.modal({
    title: 'শিক্ষার্থীর প্রোফাইল', size: 'lg', cls: 'nofocus',
    body: `<div class="mb">
      <div class="prof-head mb-3">${UI.avatar(s.nameBn, s.photo, 'lg', s.gender)}<div style="min-width:0"><h2 style="font-size:25px">${esc(s.nameBn)}</h2>
        <div class="sec mt-1">${esc(clsName(s.classId))} · ${esc(s.section)} শাখা · রোল ${Fmt.n(s.roll)}</div>
        <div class="mt-2 d-flex gap-2 flex-wrap"><span class="tag ${status[1]}">${status[0]}</span>${s.group ? `<span class="tag">${esc(s.group)}</span>` : ''}${due.amount ? `<span class="tag r">বকেয়া ${Fmt.tk(due.amount)}</span>` : `<span class="tag g">বেতন হালনাগাদ</span>`}</div></div></div>
      <div class="tabs" id="ptabs"><button class="on" data-t="info">তথ্য</button><button data-t="att">উপস্থিতি</button><button data-t="res">ফলাফল</button><button data-t="fee">ফি</button></div>
      <div data-p="info"><dl class="kv">${kv.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${v ? esc(Fmt.bd(v)) : '<span class="muted">—</span>'}</dd>`).join('')}</dl></div>
      <div data-p="att" hidden><div class="row g-3 mb-3">
        <div class="col-6 col-md-3"><div class="card-x card-pad stat"><div class="label">মোট হার</div><div class="fig num" style="font-size:26px">${rate != null ? Fmt.pct(rate.toFixed(1)) : '—'}</div></div></div>
        <div class="col-6 col-md-3"><div class="card-x card-pad stat"><div class="label">এ মাসে উপস্থিত</div><div class="fig num" style="font-size:26px">${Fmt.n(mon.p)}</div></div></div>
        <div class="col-6 col-md-3"><div class="card-x card-pad stat"><div class="label">এ মাসে অনুপস্থিত</div><div class="fig num down" style="font-size:26px">${Fmt.n(mon.a)}</div></div></div>
        <div class="col-6 col-md-3"><div class="card-x card-pad stat"><div class="label">এ মাসে ছুটি</div><div class="fig num" style="font-size:26px">${Fmt.n(mon.l)}</div></div></div></div>
        <div class="sec small-t mb-2">শেষ ${Fmt.n(Math.min(60, all.days.length))} কর্মদিবস</div>
        <div class="d-flex flex-wrap gap-1">${all.days.slice(-60).map(([d, v]) => `<span data-tip="${Fmt.dateS(d)} · ${v === 'P' ? 'উপস্থিত' : v === 'A' ? 'অনুপস্থিত' : 'ছুটি'}" style="width:16px;height:16px;border-radius:4px;background:${v === 'P' ? 'var(--h3)' : v === 'A' ? 'var(--neg)' : 'var(--gold)'}"></span>`).join('') || '<span class="muted small-t">হাজিরার তথ্য নেই</span>'}</div></div>
      <div data-p="res" hidden>${exams.length ? `<table class="tbl dense"><thead><tr><th>পরীক্ষা</th><th class="r">মোট নম্বর</th><th class="r">জিপিএ</th><th class="r">গ্রেড</th><th class="r">মেধাক্রম</th><th></th></tr></thead><tbody>${exams.map(e => { const r = resultOf(e.id, s); const pos = (classResults(e.id, s.classId).find(x => x.st.id === s.id) || {}).pos;
        return `<tr><td>${esc(e.name)} <span class="muted">${Fmt.bd(e.session)}</span></td><td class="r num">${Fmt.n(r.total)}/${Fmt.n(r.full)}</td><td class="r num">${Fmt.gpa(r.gpa)}</td><td class="r"><span class="gp ${r.grade === 'F' ? 'gp-F' : ''}">${r.grade}</span></td><td class="r num">${pos ? Fmt.n(pos) : '—'}</td>
        <td class="r"><button class="btn btn-ghost btn-sm" data-tr="${e.id}">${ic('docs', 'ico-16')} ট্রান্সক্রিপ্ট</button></td></tr>`; }).join('')}</tbody></table>` : UI.empty('কোনো পরীক্ষার নম্বর নেই', 'exam')}</div>
      <div data-p="fee" hidden>${due.amount ? `<div class="card-x card-pad mb-3" style="background:var(--neg-soft);border-color:transparent"><b>${Fmt.tk(due.amount)}</b> বকেয়া · ${due.months.map(m => Fmt.monS(m)).join(', ')}</div>` : ''}
        ${pays.length ? `<table class="tbl dense"><thead><tr><th>রসিদ</th><th>তারিখ</th><th>বিবরণ</th><th class="r">টাকা</th><th></th></tr></thead><tbody>${pays.map(p => `<tr><td class="num">${esc(p.receiptNo)}</td><td>${Fmt.dateS(p.date)}</td><td class="sec small-t">${esc(p.items.map(i => i.month ? Fmt.monS(i.month) : i.label).join(', '))}</td><td class="r num">${Fmt.tk(p.total)}</td><td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-rc="${p.id}" aria-label="রসিদ">${ic('print', 'ico-16')}</button></td></tr>`).join('')}</tbody></table>` : UI.empty('কোনো ফি জমা নেই', 'fee')}</div>
    </div>`,
    foot: `<div class="me-auto d-flex gap-2 flex-wrap"><button class="btn btn-ghost" data-doc="testimonial">${ic('award', 'ico-16')} প্রশংসাপত্র</button><button class="btn btn-ghost" data-doc="idcard">${ic('id', 'ico-16')} আইডি কার্ড</button><button class="btn btn-ghost" data-doc="tc">${ic('docs', 'ico-16')} ছাড়পত্র</button></div>
      <button class="btn btn-ghost" id="feeSt">${ic('fee', 'ico-16')} ফি নিন</button><button class="btn btn-primary" id="edSt">${ic('edit', 'ico-16')} সম্পাদনা</button>`,
    onMount: (m, close) => {
      $$('#ptabs button', m).forEach(b => b.onclick = () => { $$('#ptabs button', m).forEach(x => x.classList.toggle('on', x === b)); $$('[data-p]', m).forEach(p => p.hidden = p.dataset.p !== b.dataset.t); });
      UI.bindTips(m);
      $('#edSt', m).onclick = () => { close(); setTimeout(() => studentForm(s), 160); };
      $('#feeSt', m).onclick = () => { close(); setTimeout(() => collectFee(s.id), 160); };
      $$('[data-doc]', m).forEach(b => b.onclick = () => { close(); setTimeout(() => openStudio(b.dataset.doc, { students: [s.id] }), 160); });
      $$('[data-tr]', m).forEach(b => b.onclick = () => { close(); setTimeout(() => openStudio('transcript', { students: [s.id], examId: b.dataset.tr }), 160); });
      $$('[data-rc]', m).forEach(b => b.onclick = () => { close(); setTimeout(() => openStudio('receipt', { paymentId: b.dataset.rc }), 160); });
    }
  });
}

/* ---------- প্রমোশন ---------- */
function promotionTool() {
  const exams = Store.all('exams');
  UI.modal({
    title: 'শ্রেণি প্রমোশন', size: 'sm',
    body: `<form class="mb" id="pf"><p class="sec small-t">এক শ্রেণির শিক্ষার্থীদের পরের শ্রেণিতে তুলে দিন। পরীক্ষা বাছাই করলে ফেল করা শিক্ষার্থীরা আগের শ্রেণিতেই থাকবে, আর নতুন রোল মেধাক্রম অনুযায়ী বসবে</p>
      <div class="mb-3"><label class="form-label">কোন শ্রেণি থেকে</label><select class="form-select" name="from">${classOptions(sortedClasses()[0]?.id)}</select></div>
      <div class="mb-3"><label class="form-label">কোন শ্রেণিতে</label><select class="form-select" name="to">${classOptions(sortedClasses()[1]?.id)}<option value="__passed">পাস করে বেরিয়েছে (দশম শ্রেণির জন্য)</option></select></div>
      <div class="mb-3"><label class="form-label">ফলাফলের ভিত্তি</label><select class="form-select" name="exam"><option value="">সবাইকে তুলুন, রোল একই থাকবে</option>${exams.map(e => `<option value="${e.id}">${esc(e.name)} ${Fmt.bd(e.session)}</option>`).join('')}</select></div>
      <div class="mb-1"><label class="form-label">নতুন শিক্ষাবর্ষ</label><input class="form-control" name="session" value="${(+S().school.session || new Date().getFullYear()) + 1}"></div>
      <div class="hint">চলতি শিক্ষাবর্ষ সেটিংস থেকে আলাদাভাবে বদলাতে হবে</div></form>`,
    foot: `<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="doP">প্রমোশন দিন</button>`,
    onMount: (m, close) => $('#doP', m).onclick = async () => {
      const d = UI.formData($('#pf', m)); if (d.from === d.to) return UI.toast('একই শ্রেণি বাছাই করা হয়েছে', 'warn');
      let list = activeStudents().filter(s => s.classId === d.from);
      if (!list.length) return UI.toast('এই শ্রেণিতে কোনো শিক্ষার্থী নেই', 'warn');
      let moved = list, stay = [];
      if (d.exam) { const res = classResults(d.exam, d.from); const pass = res.filter(x => x.r.pass).map(x => x.st.id); moved = res.filter(x => x.r.pass).map(x => x.st); stay = list.filter(s => !pass.includes(s.id)); }
      if (!(await UI.confirm(`${Fmt.n(moved.length)} জন ${d.to === '__passed' ? 'পাস করে বেরিয়েছে হিসেবে চিহ্নিত হবে' : clsName(d.to) + '-এ যাবে'}${stay.length ? `, ${Fmt.n(stay.length)} জন আগের শ্রেণিতে থাকবে` : ''}`, 'প্রমোশন দিন', false))) return;
      const bySec = {};
      moved.forEach(s => {
        if (d.to === '__passed') { Store.upsert('students', { id: s.id, status: 'passed' }); return; }
        const to = clsById(d.to); const sec = to.sections.includes(s.section) ? s.section : to.sections[0];
        bySec[sec] = (bySec[sec] || 0) + 1;
        Store.upsert('students', { id: s.id, classId: d.to, section: sec, roll: d.exam ? bySec[sec] : s.roll, group: to.hasGroups ? (s.group || S().groups[0]) : '' });
      });
      close(); UI.success('প্রমোশন সম্পন্ন', `${Fmt.n(moved.length)} জন নতুন শ্রেণিতে উঠেছে`); refresh();
    }
  });
}

/* =========================================================
   শিক্ষক ও কর্মচারী
   ========================================================= */
const tFilter = { q: '', type: '' };
Views.teachers = view => {
  setTitle('শিক্ষক ও কর্মচারী', '', `<button class="btn btn-primary" id="addT">${ic('plus', 'ico-16')}<span>নতুন যোগ করুন</span></button>`);
  $('#addT').onclick = () => teacherForm();
  view.innerHTML = `<div class="toolbar">
    <div class="input-ico grow">${ic('search')}<input class="form-control" id="tq" placeholder="নাম, পদবি বা বিষয়" value="${esc(tFilter.q)}"></div>
    <div class="seg" id="tt">${[['', 'সবাই'], ['শিক্ষক', 'শিক্ষক'], ['কর্মচারী', 'কর্মচারী']].map(o => `<button data-v="${o[0]}" class="${o[0] === tFilter.type ? 'on' : ''}">${o[1]}</button>`).join('')}</div>
    <span class="muted ms-auto small-t" id="tc"></span></div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>নাম ও পদবি</th><th>বিষয়</th><th class="hide-m">শ্রেণি শিক্ষক</th><th class="hide-m">যোগ্যতা</th><th class="hide-m">মোবাইল</th><th class="hide-m">যোগদান</th><th class="r">বেতন</th></tr></thead><tbody id="ttb"></tbody></table></div></div>`;
  const rank = d => { const i = S().designations.indexOf(d); return i < 0 ? 99 : i; };
  const ctOf = id => { const out = []; S().classes.forEach(c => Object.entries(c.teacherBySection || {}).forEach(([sec, t]) => { if (t === id) out.push(`${c.short} ${sec}`); })); return out.join(', '); };
  const draw = () => {
    const q = Fmt.en(tFilter.q).toLowerCase();
    const list = Store.all('teachers').filter(t => (!tFilter.type || t.type === tFilter.type) && (!q || [t.name, t.designation, t.subject, t.phone].some(v => String(v || '').toLowerCase().includes(q))))
      .sort((a, b) => (a.status === 'left') - (b.status === 'left') || rank(a.designation) - rank(b.designation) || (a.joinDate || '').localeCompare(b.joinDate || ''));
    $('#tc').textContent = Fmt.n(list.length) + ' জন';
    $('#ttb').innerHTML = list.length ? list.map(t => `<tr class="click" data-id="${t.id}">
      <td><div class="d-flex align-items-center gap-2">${UI.avatar(t.name, t.photo)}<div><div>${esc(t.name)}${t.status === 'left' ? ' <span class="tag">প্রাক্তন</span>' : ''}</div><div class="muted" style="font-size:12.5px">${esc(t.designation)}</div></div></div></td>
      <td>${t.subject ? esc(t.subject) : '<span class="muted">—</span>'}</td><td class="hide-m">${ctOf(t.id) || '<span class="muted">—</span>'}</td><td class="sec hide-m">${esc(t.qualification || '—')}</td><td class="num sec hide-m">${esc(Fmt.bd(t.phone) || '—')}</td>
      <td class="sec hide-m">${t.joinDate ? Fmt.date(t.joinDate) : '—'}</td><td class="r num">${t.salary ? Fmt.tk(t.salary) : '—'}</td></tr>`).join('')
      : `<tr><td colspan="7">${UI.empty('কাউকে পাওয়া যায়নি', 'search')}</td></tr>`;
    $$('#ttb tr[data-id]').forEach(tr => tr.onclick = () => teacherForm(Store.find('teachers', tr.dataset.id)));
  };
  $('#tq').oninput = e => { tFilter.q = e.target.value; draw(); };
  $$('#tt button').forEach(b => b.onclick = () => { tFilter.type = b.dataset.v; $$('#tt button').forEach(x => x.classList.toggle('on', x === b)); draw(); });
  draw();
};

function teacherForm(t = null) {
  const s = t || { type: 'শিক্ষক', status: 'active', designation: 'সহকারী শিক্ষক' };
  let photo = s.photo || '';
  const f = UI.inp;
  UI.modal({
    title: t ? 'তথ্য সম্পাদনা' : 'নতুন শিক্ষক বা কর্মচারী', size: 'lg',
    body: `<form class="mb" id="tf" autocomplete="off">
      <div class="photo-pick mb-3"><span id="tpv">${UI.avatar(s.name, photo, 'lg')}</span>
        <label class="btn btn-ghost mb-0">${ic('upload', 'ico-16')} ছবি বাছুন<input type="file" accept="image/*" id="tph" hidden></label></div>
      <div class="row g-3">
        ${f('name', 'নাম *', s.name, 'required')}
        ${UI.sel('type', 'ধরন', ['শিক্ষক', 'কর্মচারী'], s.type, 'col-md-3')}
        ${UI.sel('designation', 'পদবি', S().designations, s.designation, 'col-md-3')}
        ${f('subject', 'বিষয়', s.subject, 'list="subjList"')}
        <datalist id="subjList">${[...new Set(S().subjects.map(x => x.name))].map(x => `<option value="${esc(x)}">`).join('')}</datalist>
        ${f('qualification', 'শিক্ষাগত যোগ্যতা', s.qualification)}${f('phone', 'মোবাইল *', s.phone, 'required inputmode="tel"')}
        ${f('email', 'ইমেইল', s.email, 'type="email"')}${f('joinDate', 'যোগদানের তারিখ', s.joinDate, 'type="date"', 'col-md-4')}
        ${f('indexNo', 'ইনডেক্স / MPO নং', s.indexNo, '', 'col-md-4')}${f('salary', 'মাসিক বেতন (টাকা)', s.salary, 'type="number" min="0"', 'col-md-4')}
        ${f('nid', 'জাতীয় পরিচয়পত্র নং', s.nid, '', 'col-md-4')}${f('blood', 'রক্তের গ্রুপ', s.blood, '', 'col-md-4')}
        ${UI.sel('status', 'অবস্থা', [['active', 'কর্মরত'], ['left', 'প্রাক্তন']], s.status, 'col-md-4')}
        ${f('address', 'ঠিকানা', s.address, '', 'col-12')}
      </div></form>`,
    foot: `${t ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="delT">${ic('trash', 'ico-16')} মুছুন</button><button class="btn btn-ghost" id="tid">${ic('id', 'ico-16')} আইডি কার্ড</button>` : ''}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="saveT">সংরক্ষণ</button>`,
    onMount: (m, close) => {
      $('#tph', m).onchange = async e => { const file = e.target.files[0]; if (!file) return; photo = await UI.readImage(file, 320); $('#tpv', m).innerHTML = UI.avatar('', photo, 'lg'); };
      $('#saveT', m).onclick = () => { const form = $('#tf', m); if (!form.reportValidity()) return; const d = UI.formData(form); d.salary = +d.salary || 0;
        Store.upsert('teachers', { ...(t ? { id: t.id } : {}), ...d, photo }); close(); UI.success('তথ্য সংরক্ষিত', d.name); refresh(); };
      if (t) {
        $('#delT', m).onclick = async () => { if (await UI.confirm(`${esc(t.name)}-এর তথ্য মুছে যাবে`)) { Store.remove('teachers', t.id); close(); UI.toast('মুছে ফেলা হয়েছে'); refresh(); } };
        $('#tid', m).onclick = () => { close(); setTimeout(() => openStudio('staffid', { teachers: [t.id] }), 160); };
      }
    }
  });
}
