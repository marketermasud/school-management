/* =========================================================
   নোটিশ ও ইভেন্ট, লাইব্রেরি
   ========================================================= */
const ntSel = { kind: '', cal: '' };
Views.notices = view => {
  ntSel.cal = ntSel.cal || todayISO().slice(0, 7);
  setTitle('নোটিশ ও ইভেন্ট', '', `<button class="btn btn-primary" id="addN">${ic('plus', 'ico-16')}<span>নতুন নোটিশ</span></button>`);
  $('#addN').onclick = () => noticeForm();
  const list = [...Store.all('notices')].filter(n => !ntSel.kind || n.kind === ntSel.kind).sort((a, b) => (b.pinned - a.pinned) || (a.date < b.date ? 1 : -1));
  const [y, mo] = ntSel.cal.split('-').map(Number), days = new Date(y, mo, 0).getDate(), first = new Date(y, mo - 1, 1).getDay();
  const evs = {}; Store.all('notices').forEach(n => { const d = n.eventDate || ''; if (d.startsWith(ntSel.cal)) (evs[+d.slice(8)] = evs[+d.slice(8)] || []).push(n); });
  const lead = (first - 6 + 7) % 7;
  view.innerHTML = `<div class="row g-3"><div class="col-xl-8">
    <div class="toolbar"><div class="seg" id="nk">${[['', 'সব'], ['নোটিশ', 'নোটিশ'], ['ইভেন্ট', 'ইভেন্ট'], ['ছুটি', 'ছুটি']].map(o => `<button data-v="${o[0]}" class="${o[0] === ntSel.kind ? 'on' : ''}">${o[1]}</button>`).join('')}</div></div>
    <div class="d-flex flex-column gap-3 stagger">${list.length ? list.map(n => `<div class="card-x card-pad" style="cursor:pointer" data-n="${n.id}">
      <div class="d-flex align-items-start gap-3"><div class="date-chip"><b class="num">${Fmt.bd(+n.date.slice(8))}</b><span>${Fmt.monS(n.date.slice(0, 7))}</span></div>
      <div class="flex-grow-1" style="min-width:0"><div class="d-flex align-items-center gap-2 flex-wrap"><h3 style="font-size:16.5px">${esc(n.title)}</h3><span class="tag ${n.kind === 'ছুটি' ? 'gold' : n.kind === 'ইভেন্ট' ? 'b' : ''}">${esc(n.kind)}</span>${n.pinned ? `<span class="tag gold">${ic('pin', 'ico-16')} উপরে রাখা</span>` : ''}</div>
      <p class="sec mb-0 mt-1" style="white-space:pre-line">${esc(n.body)}</p>${n.eventDate ? `<div class="small-t mt-2" style="color:var(--primary)">${ic('calendar', 'ico-16')} ${Fmt.day(n.eventDate)}, ${Fmt.date(n.eventDate)}</div>` : ''}</div>
      <button class="btn btn-ghost btn-sm" data-print="${n.id}">${ic('print', 'ico-16')}<span class="hide-m">প্রিন্ট</span></button></div></div>`).join('') : `<div class="card-x">${UI.empty('কোনো নোটিশ নেই', 'notice')}</div>`}</div></div>
  <div class="col-xl-4"><div class="card-x" style="position:sticky;top:84px"><div class="card-head"><button class="btn btn-quiet btn-icon btn-sm" id="cp" aria-label="আগের মাস" style="transform:scaleX(-1)">${ic('chevron', 'ico-16')}</button><h3 class="flex-grow-1 text-center">${Fmt.month(y, mo - 1)}</h3><button class="btn btn-quiet btn-icon btn-sm" id="cn" aria-label="পরের মাস">${ic('chevron', 'ico-16')}</button></div>
    <div class="card-pad"><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center">
      ${WEEK_ORDER.map(d => `<div class="muted" style="font-size:12px;padding-bottom:4px">${DAYS[d]}</div>`).join('')}
      ${'<div></div>'.repeat(lead)}${[...Array(days)].map((_, i) => { const iso = `${ntSel.cal}-${String(i + 1).padStart(2, '0')}`, e = evs[i + 1], off = isOff(iso), td = iso === todayISO();
        return `<div ${e ? `data-tip="${esc(e.map(x => x.title).join(', '))}"` : ''} style="aspect-ratio:1;border-radius:9px;display:grid;place-items:center;font-size:13.5px;position:relative;${td ? 'background:var(--primary);color:#fff;' : e ? 'background:var(--gold-soft);color:var(--gold-ink);font-weight:500;' : off ? 'color:var(--muted);' : ''}">${Fmt.n(i + 1)}${e && !td ? '' : ''}</div>`; }).join('')}
    </div><div class="d-flex gap-3 mt-3 small-t muted"><span class="legend"><i style="background:var(--gold-soft);border:1px solid var(--gold)"></i> ইভেন্ট/ছুটি</span><span class="legend"><i style="background:var(--primary)"></i> আজ</span></div></div></div></div></div>`;
  UI.bindTips(view);
  $$('#nk button').forEach(b => b.onclick = () => { ntSel.kind = b.dataset.v; refresh(); });
  $('#cp').onclick = () => { const d = new Date(y, mo - 2, 1); ntSel.cal = Fmt.iso(d).slice(0, 7); refresh(); };
  $('#cn').onclick = () => { const d = new Date(y, mo, 1); ntSel.cal = Fmt.iso(d).slice(0, 7); refresh(); };
  $$('[data-n]', view).forEach(c => c.onclick = e => { if (e.target.closest('[data-print]')) return openStudio('notice', { noticeId: c.dataset.n }); noticeForm(Store.find('notices', c.dataset.n)); });
};
function noticeForm(n = null) {
  const x = n || { kind: 'নোটিশ', date: todayISO(), pinned: false };
  UI.modal({
    title: n ? 'নোটিশ সম্পাদনা' : 'নতুন নোটিশ',
    body: `<form class="mb" id="nf"><div class="row g-3">${UI.sel('kind', 'ধরন', ['নোটিশ', 'ইভেন্ট', 'ছুটি'], x.kind, 'col-md-4')}${UI.inp('title', 'শিরোনাম *', x.title, 'required', 'col-md-8')}
      <div class="col-12"><label class="form-label">বিস্তারিত</label><textarea class="form-control" name="body" rows="5">${esc(x.body || '')}</textarea></div>
      ${UI.inp('date', 'প্রকাশের তারিখ', x.date, 'type="date"', 'col-md-4')}${UI.inp('eventDate', 'অনুষ্ঠান/ছুটির তারিখ (থাকলে)', x.eventDate, 'type="date"', 'col-md-4')}${UI.inp('memo', 'স্মারক নং', x.memo, '', 'col-md-4')}
      <div class="col-12"><label class="switch"><input type="checkbox" name="pinned" ${x.pinned ? 'checked' : ''}> তালিকার উপরে রাখুন</label></div></div></form>`,
    foot: `${n ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="nd">${ic('trash', 'ico-16')} মুছুন</button><button class="btn btn-ghost" id="np">${ic('print', 'ico-16')} প্রিন্ট</button>` : ''}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="ns">প্রকাশ করুন</button>`,
    onMount: (m, close) => {
      $('#ns', m).onclick = () => { const f = $('#nf', m); if (!f.reportValidity()) return; const nd = UI.formData(f); Store.upsert('notices', { ...(n ? { id: n.id } : {}), ...nd }); close(); UI.success('নোটিশ প্রকাশিত', nd.title); refresh(); };
      if (n) { $('#nd', m).onclick = async () => { if (await UI.confirm('নোটিশটি মুছে যাবে')) { Store.remove('notices', n.id); close(); refresh(); } }; $('#np', m).onclick = () => { close(); setTimeout(() => openStudio('notice', { noticeId: n.id }), 160); }; }
    }
  });
}

/* ---------- লাইব্রেরি ---------- */
let libTab = 'books';
const libQ = { q: '' };
const activeLoans = bookId => Store.all('loans').filter(l => l.bookId === bookId && !l.returnDate).length;
Views.library = view => {
  setTitle('লাইব্রেরি', '', `<button class="btn btn-ghost" id="addB">${ic('plus', 'ico-16')}<span>নতুন বই</span></button><button class="btn btn-primary" id="issue">${ic('library', 'ico-16')}<span>বই ধার দিন</span></button>`);
  $('#addB').onclick = () => bookForm(); $('#issue').onclick = () => issueForm();
  const books = Store.all('books'), loans = Store.all('loans'), open = loans.filter(l => !l.returnDate), late = open.filter(l => l.dueDate < todayISO());
  view.innerHTML = `<div class="row g-3 mb-3 stagger">
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">মোট বই</div><div class="fig num">${Fmt.n(books.reduce((a, b) => a + (+b.copies || 0), 0))}</div><div class="note">${Fmt.n(books.length)}টি শিরোনাম</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">ধারে আছে</div><div class="fig num">${Fmt.n(open.length)}</div><div class="note">শিক্ষার্থীদের কাছে</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">ফেরতের সময় পার</div><div class="fig num ${late.length ? 'down' : ''}">${Fmt.n(late.length)}</div><div class="note">মনে করিয়ে দিন</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">এ মাসে ধার</div><div class="fig num">${Fmt.n(loans.filter(l => l.issueDate.startsWith(todayISO().slice(0, 7))).length)}</div><div class="note">বার</div></div></div></div>
  <div class="tabs"><button data-t="books" class="${libTab === 'books' ? 'on' : ''}">বইয়ের তালিকা</button><button data-t="loans" class="${libTab === 'loans' ? 'on' : ''}">ধার ও ফেরত</button></div>
  <div class="toolbar"><div class="input-ico grow">${ic('search')}<input class="form-control" id="lq" placeholder="${libTab === 'books' ? 'বইয়ের নাম, লেখক বা কোড' : 'শিক্ষার্থী বা বইয়ের নাম'}" value="${esc(libQ.q)}"></div></div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl" id="ltb"></table></div></div>`;
  $$('.tabs button', view).forEach(b => b.onclick = () => { libTab = b.dataset.t; refresh(); });
  const draw = () => {
    const q = Fmt.en(libQ.q).toLowerCase();
    if (libTab === 'books') {
      const list = books.filter(b => !q || [b.title, b.author, b.code].some(v => String(v || '').toLowerCase().includes(q)));
      $('#ltb').innerHTML = `<thead><tr><th>কোড</th><th>বইয়ের নাম</th><th class="hide-m">লেখক</th><th class="hide-m">অবস্থান</th><th class="r">কপি</th><th class="r">পাওয়া যাবে</th></tr></thead><tbody>${list.length ? list.map(b => { const av = (+b.copies || 0) - activeLoans(b.id);
        return `<tr class="click" data-b="${b.id}"><td class="num sec">${esc(Fmt.bd(b.code || ''))}</td><td>${esc(b.title)}</td><td class="sec hide-m">${esc(b.author || '')}</td><td class="sec hide-m">${esc(b.shelf || '')}</td><td class="r num">${Fmt.n(b.copies)}</td><td class="r"><span class="tag ${av > 0 ? 'g' : 'r'}">${Fmt.n(av)}</span></td></tr>`; }).join('') : `<tr><td colspan="6">${UI.empty('কোনো বই নেই', 'library')}</td></tr>`}</tbody>`;
      $$('[data-b]').forEach(r => r.onclick = () => bookForm(Store.find('books', r.dataset.b)));
    } else {
      const list = [...loans].sort((a, b) => (!!a.returnDate - !!b.returnDate) || (a.issueDate < b.issueDate ? 1 : -1)).filter(l => { const s = Store.find('students', l.studentId) || {}, b = Store.find('books', l.bookId) || {}; return !q || [s.nameBn, b.title, String(s.roll)].some(v => String(v || '').toLowerCase().includes(q)); });
      $('#ltb').innerHTML = `<thead><tr><th>বই</th><th>শিক্ষার্থী</th><th class="hide-m">ধার</th><th>ফেরতের তারিখ</th><th class="r"></th></tr></thead><tbody>${list.length ? list.map(l => { const s = Store.find('students', l.studentId), b = Store.find('books', l.bookId); const lateL = !l.returnDate && l.dueDate < todayISO();
        return `<tr><td>${esc(b?.title || 'মুছে ফেলা বই')}</td><td>${s ? `${esc(s.nameBn)} <span class="muted small-t">${esc(clsShort(s.classId))} ${esc(s.section)}</span>` : '—'}</td><td class="sec hide-m">${Fmt.dateS(l.issueDate)}</td>
        <td>${l.returnDate ? `<span class="muted">ফেরত ${Fmt.dateS(l.returnDate)}</span>` : `<span class="${lateL ? 'down' : ''}">${Fmt.dateS(l.dueDate)}${lateL ? ' · সময় পার' : ''}</span>`}</td>
        <td class="r">${l.returnDate ? '<span class="tag g">ফেরত</span>' : `<button class="btn btn-ghost btn-sm" data-ret="${l.id}">ফেরত নিন</button>`}</td></tr>`; }).join('') : `<tr><td colspan="5">${UI.empty('কোনো ধার নেই', 'library')}</td></tr>`}</tbody>`;
      $$('[data-ret]').forEach(b => b.onclick = () => { Store.upsert('loans', { id: b.dataset.ret, returnDate: todayISO() }); UI.toast('বই ফেরত নেওয়া হয়েছে'); refresh(); });
    }
  };
  $('#lq').oninput = e => { libQ.q = e.target.value; draw(); };
  draw();
};
function bookForm(b = null) {
  UI.modal({
    title: b ? 'বইয়ের তথ্য' : 'নতুন বই', size: 'sm',
    body: `<form class="mb" id="bf"><div class="row g-3">${UI.inp('title', 'বইয়ের নাম *', b?.title, 'required', 'col-12')}${UI.inp('author', 'লেখক', b?.author, '', 'col-12')}
      ${UI.inp('code', 'কোড', b?.code, '', 'col-4')}${UI.inp('copies', 'কপি', b?.copies ?? 1, 'type="number" min="0"', 'col-4')}${UI.inp('shelf', 'অবস্থান', b?.shelf, '', 'col-4')}</div></form>`,
    foot: `${b ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="bd">${ic('trash', 'ico-16')} মুছুন</button>` : ''}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="bs">সংরক্ষণ</button>`,
    onMount: (m, close) => {
      $('#bs', m).onclick = () => { const f = $('#bf', m); if (!f.reportValidity()) return; const d = UI.formData(f); d.copies = +d.copies || 0; Store.upsert('books', { ...(b ? { id: b.id } : {}), ...d }); close(); refresh(); };
      if (b) $('#bd', m).onclick = async () => { if (await UI.confirm('বইটি তালিকা থেকে মুছে যাবে')) { Store.remove('books', b.id); close(); refresh(); } };
    }
  });
}
function issueForm() {
  const due = new Date(); due.setDate(due.getDate() + 14);
  const avail = Store.all('books').filter(b => (+b.copies || 0) - activeLoans(b.id) > 0);
  const c0 = sortedClasses()[0];
  UI.modal({
    title: 'বই ধার দিন', size: 'sm',
    body: `<form class="mb" id="if"><div class="row g-3"><div class="col-12"><label class="form-label">বই</label><select class="form-select" name="bookId">${avail.map(b => `<option value="${b.id}">${esc(b.title)}</option>`).join('')}</select></div>
      <div class="col-6"><label class="form-label">শ্রেণি</label><select class="form-select" id="ic">${classOptions(c0?.id)}</select></div><div class="col-6"><label class="form-label">শাখা</label><select class="form-select" id="is">${sectionOptions(c0?.id)}</select></div>
      <div class="col-12"><label class="form-label">শিক্ষার্থী</label><select class="form-select" name="studentId" id="ist"></select></div>
      ${UI.inp('issueDate', 'ধারের তারিখ', todayISO(), 'type="date"', 'col-6')}${UI.inp('dueDate', 'ফেরতের তারিখ', Fmt.iso(due), 'type="date"', 'col-6')}</div></form>`,
    foot: `<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="iss">ধার দিন</button>`,
    onMount: (m, close) => {
      const fill = () => { $('#ist', m).innerHTML = sortStudents(activeStudents().filter(s => s.classId === $('#ic', m).value && s.section === $('#is', m).value)).map(s => `<option value="${s.id}">${Fmt.n(s.roll)}. ${esc(s.nameBn)}</option>`).join(''); };
      $('#ic', m).onchange = () => { $('#is', m).innerHTML = sectionOptions($('#ic', m).value); fill(); }; $('#is', m).onchange = fill; fill();
      $('#iss', m).onclick = () => { const d = UI.formData($('#if', m)); if (!d.bookId || !d.studentId) return UI.toast('বই ও শিক্ষার্থী বাছুন', 'warn'); Store.upsert('loans', { ...d, returnDate: '' }); close(); UI.success('বই ধার দেওয়া হয়েছে', (Store.find('books', d.bookId) || {}).title); libTab = 'loans'; refresh(); };
    }
  });
}
