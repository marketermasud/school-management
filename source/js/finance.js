/* =========================================================
   ফি আদায়, আয়-ব্যয়, বেতন
   ========================================================= */
let feeTab = 'collect';
const feeSel = { cls: '', sec: '', q: '' };
Views.fees = view => {
  setTitle('ফি আদায়', '', `<button class="btn btn-primary" id="newPay">${ic('plus', 'ico-16')}<span>ফি জমা নিন</span></button>`);
  $('#newPay').onclick = () => collectFee();
  const ym = todayISO().slice(0, 7), pays = Store.all('payments');
  const mTotal = pays.filter(p => p.date.startsWith(ym)).reduce((a, p) => a + p.total, 0);
  const tTotal = pays.filter(p => p.date === todayISO()).reduce((a, p) => a + p.total, 0);
  const yTotal = pays.filter(p => p.date.startsWith(ym.slice(0, 4))).reduce((a, p) => a + p.total, 0);
  const dues = activeStudents().map(s => ({ s, d: dueOf(s) })).filter(x => x.d.amount > 0);
  view.innerHTML = `<div class="row g-3 mb-3 stagger">
    <div class="col-6 col-xl-3"><div class="card-x card-pad stat"><div class="label">আজ আদায়</div><div class="fig num" data-to="${tTotal}" data-f="tk">০</div><div class="note">${Fmt.n(pays.filter(p => p.date === todayISO()).length)}টি রসিদ</div></div></div>
    <div class="col-6 col-xl-3"><div class="card-x card-pad stat"><div class="label">এ মাসে আদায়</div><div class="fig num" data-to="${mTotal}" data-f="tk">০</div><div class="note">${Fmt.ym(ym)}</div></div></div>
    <div class="col-6 col-xl-3"><div class="card-x card-pad stat"><div class="label">এ বছরে আদায়</div><div class="fig num" data-to="${yTotal}" data-f="tk">০</div><div class="note">${Fmt.n(pays.filter(p => p.date.startsWith(ym.slice(0, 4))).length)}টি রসিদ</div></div></div>
    <div class="col-6 col-xl-3"><div class="card-x card-pad stat"><div class="label">মোট বকেয়া বেতন</div><div class="fig num down" data-to="${dues.reduce((a, x) => a + x.d.amount, 0)}" data-f="tk">০</div><div class="note">${Fmt.n(dues.length)} জনের</div></div></div>
  </div>
  <div class="tabs">${[['collect', 'রসিদসমূহ'], ['dues', 'বকেয়া তালিকা'], ['heads', 'ফি-এর হার']].map(t => `<button data-t="${t[0]}" class="${feeTab === t[0] ? 'on' : ''}">${t[1]}</button>`).join('')}</div><div id="feeBody"></div>`;
  $$('[data-to]', view).forEach(el => UI.tween(el, +el.dataset.to));
  $$('.tabs button', view).forEach(b => b.onclick = () => { feeTab = b.dataset.t; Views.fees(view); });
  const body = $('#feeBody');
  if (feeTab === 'collect') {
    body.innerHTML = `<div class="toolbar"><div class="input-ico grow">${ic('search')}<input class="form-control" id="pq" placeholder="রসিদ নং, নাম বা রোল" value="${esc(feeSel.q)}"></div><input type="month" class="form-control" id="pm" value="${feeSel.month || ''}"><span class="ms-auto muted small-t" id="pc"></span></div>
      <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রসিদ নং</th><th>তারিখ</th><th>শিক্ষার্থী</th><th class="hide-m">বিবরণ</th><th class="hide-m">মাধ্যম</th><th class="r">টাকা</th><th></th></tr></thead><tbody id="ptb"></tbody></table></div></div>`;
    const draw = () => {
      const q = Fmt.en(feeSel.q).toLowerCase();
      const list = [...pays].filter(p => { const s = Store.find('students', p.studentId) || {}; return (!feeSel.month || p.date.startsWith(feeSel.month)) && (!q || [p.receiptNo, s.nameBn, String(s.roll), s.studentId].some(v => String(v || '').toLowerCase().includes(q))); })
        .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : (a.receiptNo < b.receiptNo ? 1 : -1))).slice(0, 300);
      $('#pc').textContent = `${Fmt.n(list.length)}টি রসিদ · ${Fmt.tk(list.reduce((a, p) => a + p.total, 0))}`;
      $('#ptb').innerHTML = list.length ? list.map(p => { const s = Store.find('students', p.studentId); return `<tr class="click" data-p="${p.id}"><td class="num">${esc(Fmt.bd(p.receiptNo))}</td><td class="sec">${Fmt.dateS(p.date)}</td>
        <td>${s ? `${esc(s.nameBn)} <span class="muted small-t">${esc(clsShort(s.classId))} ${esc(s.section)} · ${Fmt.n(s.roll)}</span>` : '<span class="muted">মুছে ফেলা শিক্ষার্থী</span>'}</td>
        <td class="sec small-t hide-m">${esc(p.items.map(i => i.month ? Fmt.monS(i.month) : i.label).join(', '))}</td><td class="hide-m"><span class="tag">${esc(p.method)}</span></td><td class="r num">${Fmt.tk(p.total)}</td>
        <td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-x="${p.id}" aria-label="মুছুন">${ic('trash', 'ico-16')}</button></td></tr>`; }).join('') : `<tr><td colspan="7">${UI.empty('কোনো রসিদ নেই', 'receipt')}</td></tr>`;
      $$('#ptb tr[data-p]').forEach(tr => tr.onclick = async e => {
        if (e.target.closest('[data-x]')) { if (await UI.confirm('এই রসিদটি বাতিল হবে এবং সংশ্লিষ্ট মাস আবার বকেয়া দেখাবে')) { Store.remove('payments', tr.dataset.p); refresh(); } return; }
        openStudio('receipt', { paymentId: tr.dataset.p });
      });
    };
    $('#pq').oninput = e => { feeSel.q = e.target.value; draw(); };
    $('#pm').onchange = e => { feeSel.month = e.target.value; draw(); };
    draw();
  } else if (feeTab === 'dues') {
    fixSel(feeSel);
    body.innerHTML = `<div class="toolbar"><select class="form-select" id="dc">${classOptions(feeSel.dcls || '', true)}</select><span class="ms-auto muted small-t" id="dcnt"></span></div>
      <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রোল</th><th>নাম</th><th>শ্রেণি</th><th class="hide-m">বকেয়া মাস</th><th class="hide-m">মোবাইল</th><th class="r">বকেয়া</th><th></th></tr></thead><tbody id="dtb"></tbody></table></div></div>`;
    const draw = () => {
      const list = sortStudents(dues.filter(x => !feeSel.dcls || x.s.classId === feeSel.dcls).map(x => x.s)).map(s => ({ s, d: dueOf(s) }));
      $('#dcnt').textContent = `${Fmt.n(list.length)} জন · ${Fmt.tk(list.reduce((a, x) => a + x.d.amount, 0))}`;
      $('#dtb').innerHTML = list.length ? list.map(x => `<tr><td><span class="roll num">${Fmt.n(x.s.roll)}</span></td><td>${esc(x.s.nameBn)}</td><td>${esc(clsShort(x.s.classId))} ${esc(x.s.section)}</td>
        <td class="sec small-t hide-m">${x.d.months.map(m => Fmt.monS(m)).join(', ')}</td><td class="num sec hide-m">${esc(Fmt.bd(x.s.phone))}</td><td class="r num down">${Fmt.tk(x.d.amount)}</td>
        <td class="r"><button class="btn btn-ghost btn-sm" data-c="${x.s.id}">আদায় করুন</button></td></tr>`).join('') : `<tr><td colspan="7">${UI.empty('কারো বকেয়া নেই', 'check')}</td></tr>`;
      $$('[data-c]', body).forEach(b => b.onclick = () => collectFee(b.dataset.c));
    };
    $('#dc').onchange = e => { feeSel.dcls = e.target.value; draw(); };
    draw();
  } else {
    body.innerHTML = feeHeadsEditor();
    bindFeeHeads(body);
  }
};

function feeHeadsEditor() {
  const cl = sortedClasses();
  return `<div class="card-x"><div class="card-head"><h3>ফি-এর খাত ও হার</h3><span class="right">শ্রেণিভেদে টাকার পরিমাণ লিখুন, ঘর ছাড়লেই সংরক্ষণ হবে</span></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>খাত</th><th>ধরন</th>${cl.map(c => `<th class="c">${esc(c.short)}</th>`).join('')}<th></th></tr></thead><tbody>
    ${S().feeHeads.map(h => `<tr data-h="${h.id}"><td><input class="form-control form-control-sm" data-f="name" value="${esc(h.name)}" style="min-width:150px"></td>
      <td><select class="form-select form-select-sm" data-f="type" style="min-width:110px"><option value="monthly" ${h.type === 'monthly' ? 'selected' : ''}>মাসিক</option><option value="once" ${h.type === 'once' ? 'selected' : ''}>এককালীন</option></select></td>
      ${cl.map(c => `<td class="c"><input class="marks-in num" data-amt="${c.id}" value="${h.amounts[c.id] ?? ''}"></td>`).join('')}
      <td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-del aria-label="মুছুন">${ic('trash', 'ico-16')}</button></td></tr>`).join('')}
    </tbody></table></div><div class="card-pad"><button class="btn btn-ghost" id="addHead">${ic('plus', 'ico-16')} খাত যোগ করুন</button><div class="hint mt-2">"মাসিক" ধরনের খাত থেকে বকেয়া হিসাব হয়। একটির বেশি মাসিক খাত থাকলে প্রথমটি ধরা হবে</div></div></div>`;
}
function bindFeeHeads(el) {
  $$('tr[data-h]', el).forEach(tr => {
    const h = S().feeHeads.find(x => x.id === tr.dataset.h);
    $$('[data-f]', tr).forEach(i => i.onchange = () => { h[i.dataset.f] = i.value; Store.save(); UI.toast('সংরক্ষিত'); });
    $$('[data-amt]', tr).forEach(i => i.onchange = () => { h.amounts[i.dataset.amt] = +Fmt.en(i.value) || 0; Store.save(); UI.toast('সংরক্ষিত'); });
    $('[data-del]', tr).onclick = async () => { if (await UI.confirm(`"${esc(h.name)}" খাতটি মুছে যাবে। পুরোনো রসিদ ঠিক থাকবে`)) { S().feeHeads = S().feeHeads.filter(x => x !== h); Store.save(); refresh(); } };
  });
  $('#addHead', el).onclick = () => { S().feeHeads.push({ id: 'fh' + Store.uid(), name: 'নতুন খাত', type: 'once', amounts: {} }); Store.save(); refresh(); };
}

function collectFee(studentId) {
  let st = studentId ? Store.find('students', studentId) : null;
  const first = st || null;
  const y = +S().school.session || new Date().getFullYear();
  UI.modal({
    title: 'ফি জমা নিন', size: 'lg',
    body: `<div class="mb">
      <div class="row g-3 mb-2">
        <div class="col-md-4"><label class="form-label">শ্রেণি</label><select class="form-select" id="cc">${classOptions(first ? first.classId : sortedClasses()[0]?.id)}</select></div>
        <div class="col-md-3"><label class="form-label">শাখা</label><select class="form-select" id="cs">${sectionOptions(first ? first.classId : sortedClasses()[0]?.id, first?.section)}</select></div>
        <div class="col-md-5"><label class="form-label">শিক্ষার্থী</label><select class="form-select" id="cst"></select></div>
      </div>
      <div id="feeBox"></div></div>`,
    foot: `<span class="me-auto" style="font-size:18px"><span class="muted small-t">মোট</span> <b class="num" id="ftot">৳০</b></span><button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-ghost" id="fSave">সংরক্ষণ</button><button class="btn btn-primary" id="fSavePrint">${ic('print', 'ico-16')} সংরক্ষণ ও রসিদ</button>`,
    onMount: (m, close) => {
      const fillStudents = () => {
        const list = sortStudents(activeStudents().filter(s => s.classId === $('#cc', m).value && s.section === $('#cs', m).value));
        $('#cst', m).innerHTML = list.map(s => `<option value="${s.id}" ${st && s.id === st.id ? 'selected' : ''}>${Fmt.n(s.roll)}. ${esc(s.nameBn)}</option>`).join('');
        st = Store.find('students', $('#cst', m).value); drawFee();
      };
      const drawFee = () => {
        if (!st) { $('#feeBox', m).innerHTML = UI.empty('এই শাখায় কোনো শিক্ষার্থী নেই'); calc(); return; }
        const paid = paidMonths(st), mh = monthlyHead(), due = dueOf(st);
        const months = [...Array(12)].map((_, i) => `${y}-${String(i + 1).padStart(2, '0')}`);
        $('#feeBox', m).innerHTML = `
          <div class="card-x card-pad mb-3 d-flex align-items-center gap-3" style="background:var(--hover)">${UI.avatar(st.nameBn, st.photo, '', st.gender)}<div class="flex-grow-1"><div>${esc(st.nameBn)}</div><div class="muted small-t">${esc(studentLine(st))} · আইডি ${esc(Fmt.bd(st.studentId))}</div></div>
            ${due.amount ? `<span class="tag r">বকেয়া ${Fmt.tk(due.amount)}</span>` : '<span class="tag g">বকেয়া নেই</span>'}</div>
          ${mh ? `<div class="fsec">${esc(mh.name)} · মাসে ${Fmt.tk(mh.amounts[st.classId] || 0)}</div>
          <div class="d-flex flex-wrap gap-2 mb-2">${months.map(ym => { const p = paid.has(ym), d = due.months.includes(ym);
            return `<label class="chip-edit" style="padding:0 11px;gap:7px;${p ? 'opacity:.5' : d ? 'background:var(--neg-soft)' : ''}"><input type="checkbox" data-m="${ym}" ${p ? 'disabled checked' : d ? 'checked' : ''} style="accent-color:var(--primary)"> ${Fmt.monS(ym)}${p ? ' ✓' : ''}</label>`; }).join('')}</div>` : ''}
          <div class="fsec">অন্যান্য ফি</div>
          ${S().feeHeads.filter(h => h.type !== 'monthly').map(h => `<div class="d-flex align-items-center gap-3 mb-2"><label class="check flex-grow-1" style="margin:0"><input type="checkbox" data-h="${h.id}"> ${esc(h.name)}</label><input class="form-control form-control-sm num" style="width:120px" data-ha="${h.id}" value="${h.amounts[st.classId] || 0}"></div>`).join('')}
          <div class="row g-3 mt-1">
            ${UI.inp('discount', 'ছাড় (টাকা)', 0, 'type="number" min="0" id="fdisc"', 'col-md-3')}
            ${UI.sel('method', 'মাধ্যম', ['নগদ', 'বিকাশ', 'নগদ (মোবাইল)', 'রকেট', 'ব্যাংক'], 'নগদ', 'col-md-3', 'id="fmeth"')}
            ${UI.inp('date', 'তারিখ', todayISO(), 'type="date" id="fdate"', 'col-md-3')}
            ${UI.inp('note', 'মন্তব্য', '', 'id="fnote"', 'col-md-3')}
          </div>`;
        $$('input', $('#feeBox', m)).forEach(i => i.addEventListener('input', calc));
        calc();
      };
      const items = () => {
        if (!st) return [];
        const mh = monthlyHead(), out = [];
        $$('[data-m]:not(:disabled):checked', m).forEach(i => out.push({ headId: mh.id, label: mh.name, month: i.dataset.m, amount: +mh.amounts[st.classId] || 0 }));
        $$('[data-h]:checked', m).forEach(i => { const h = S().feeHeads.find(x => x.id === i.dataset.h); out.push({ headId: h.id, label: h.name, amount: +Fmt.en($(`[data-ha="${h.id}"]`, m).value) || 0 }); });
        return out;
      };
      const calc = () => { const t = items().reduce((a, i) => a + i.amount, 0) - (+($('#fdisc', m)?.value) || 0); $('#ftot', m).textContent = Fmt.tk(Math.max(0, t)); };
      const save = print => {
        const it = items(); if (!it.length) return UI.toast('অন্তত একটি মাস বা খাত বাছুন', 'warn');
        const disc = +($('#fdisc', m).value) || 0, total = Math.max(0, it.reduce((a, i) => a + i.amount, 0) - disc);
        const p = Store.upsert('payments', { receiptNo: Store.nextSerial('RCP'), studentId: st.id, date: $('#fdate', m).value || todayISO(), items: it, discount: disc, total, method: $('#fmeth', m).value, note: $('#fnote', m).value });
        close(); UI.success('টাকা আদায় হয়েছে', `রসিদ ${Fmt.bd(p.receiptNo)} · ${st.nameBn}`, Fmt.tk(total)); refresh();
        if (print) setTimeout(() => openStudio('receipt', { paymentId: p.id }), 2200);
      };
      $('#cc', m).onchange = () => { $('#cs', m).innerHTML = sectionOptions($('#cc', m).value); st = null; fillStudents(); };
      $('#cs', m).onchange = () => { st = null; fillStudents(); };
      $('#cst', m).onchange = () => { st = Store.find('students', $('#cst', m).value); drawFee(); };
      $('#fSave', m).onclick = () => save(false);
      $('#fSavePrint', m).onclick = () => save(true);
      fillStudents();
    }
  });
}

/* ---------- আয়-ব্যয় ---------- */
const accSel = { month: '', type: '' };
Views.accounts = view => {
  accSel.month = accSel.month ?? todayISO().slice(0, 7);
  setTitle('আয়-ব্যয়', '', `<button class="btn btn-ghost" id="accP">${ic('print', 'ico-16')}<span>প্রতিবেদন</span></button><button class="btn btn-ghost" id="addIn">${ic('plus', 'ico-16')}<span>আয়</span></button><button class="btn btn-primary" id="addEx">${ic('plus', 'ico-16')}<span>ব্যয়</span></button>`);
  $('#addIn').onclick = () => ledgerForm('income'); $('#addEx').onclick = () => ledgerForm('expense');
  $('#accP').onclick = () => openStudio('ledger', { month: accSel.month });
  const L = allLedger().filter(x => !accSel.month || x.date.startsWith(accSel.month));
  const inc = L.filter(x => x.type === 'income').reduce((a, x) => a + x.amount, 0), exp = L.filter(x => x.type === 'expense').reduce((a, x) => a + x.amount, 0);
  const cats = {}; L.filter(x => x.type === 'expense').forEach(x => cats[x.category] = (cats[x.category] || 0) + x.amount);
  const cmax = Math.max(1, ...Object.values(cats));
  const shown = L.filter(x => !accSel.type || x.type === accSel.type);
  view.innerHTML = `<div class="toolbar"><input type="month" class="form-control" id="am" value="${accSel.month}"><button class="btn btn-quiet" id="amAll">সব সময়</button>
    <div class="seg ms-auto" id="at">${[['', 'সব'], ['income', 'আয়'], ['expense', 'ব্যয়']].map(o => `<button data-v="${o[0]}" class="${o[0] === accSel.type ? 'on' : ''}">${o[1]}</button>`).join('')}</div></div>
  <div class="row g-3 mb-3 stagger">
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">মোট আয়</div><div class="fig num" data-to="${inc}" data-f="tk">০</div><div class="note">${accSel.month ? Fmt.ym(accSel.month) : 'সব সময়'}</div></div></div>
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">মোট ব্যয়</div><div class="fig num" data-to="${exp}" data-f="tk">০</div><div class="note">${Fmt.n(L.filter(x => x.type === 'expense').length)}টি খরচ</div></div></div>
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">উদ্বৃত্ত</div><div class="fig num ${inc - exp < 0 ? 'down' : 'up'}">${inc - exp < 0 ? '−' : ''}${Fmt.tk(Math.abs(inc - exp))}</div><div class="note">আয় বাদ ব্যয়</div></div></div>
  </div>
  <div class="row g-3"><div class="col-xl-8"><div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>তারিখ</th><th>খাত</th><th class="hide-m">বিবরণ</th><th class="r">আয়</th><th class="r">ব্যয়</th><th></th></tr></thead><tbody>
    ${shown.length ? shown.slice(0, 400).map(x => `<tr ${x.auto ? '' : `class="click" data-l="${x.id}"`}><td class="sec">${Fmt.dateS(x.date)}</td><td>${esc(x.category)}</td><td class="sec small-t hide-m">${esc(Fmt.bd(x.note || ''))}${x.auto ? ' · ফি আদায় থেকে' : ''}</td>
      <td class="r num">${x.type === 'income' ? `<span class="up">${Fmt.tk(x.amount)}</span>` : ''}</td><td class="r num">${x.type === 'expense' ? Fmt.tk(x.amount) : ''}</td><td class="r">${x.auto ? '' : ic('chevron', 'ico-16 muted')}</td></tr>`).join('') : `<tr><td colspan="6">${UI.empty('এই সময়ে কোনো লেনদেন নেই', 'wallet')}</td></tr>`}
  </tbody></table></div></div></div>
  <div class="col-xl-4"><div class="card-x"><div class="card-head"><h3>খাতভিত্তিক ব্যয়</h3></div><div class="card-pad">
    ${Object.keys(cats).length ? Object.entries(cats).sort((a, b) => b[1] - a[1]).map(([c, v]) => `<div class="mb-3"><div class="d-flex small-t mb-1"><span>${esc(c)}</span><span class="ms-auto num">${Fmt.tk(v)}</span></div><div class="track"><span class="g" style="width:${v / cmax * 100}%"></span></div></div>`).join('') : '<div class="muted small-t">কোনো ব্যয় নেই</div>'}
  </div></div></div></div>`;
  $$('[data-to]', view).forEach(el => UI.tween(el, +el.dataset.to));
  $('#am').onchange = e => { accSel.month = e.target.value; refresh(); };
  $('#amAll').onclick = () => { accSel.month = ''; refresh(); };
  $$('#at button').forEach(b => b.onclick = () => { accSel.type = b.dataset.v; refresh(); });
  $$('[data-l]', view).forEach(r => r.onclick = () => ledgerForm(null, Store.find('ledger', r.dataset.l)));
};
function ledgerForm(type, x = null) {
  const t = x ? x.type : type, cats = t === 'income' ? S().incomeCats : S().expenseCats;
  UI.modal({
    title: (x ? 'সম্পাদনা: ' : 'নতুন ') + (t === 'income' ? 'আয়' : 'ব্যয়'), size: 'sm',
    body: `<form class="mb" id="lf"><div class="row g-3">${UI.sel('category', 'খাত', cats, x?.category, 'col-12')}
      ${UI.inp('amount', 'টাকা *', x?.amount, 'type="number" min="1" required', 'col-6')}${UI.inp('date', 'তারিখ', x?.date || todayISO(), 'type="date"', 'col-6')}
      ${UI.inp('note', 'বিবরণ', x?.note, '', 'col-12')}</div></form>`,
    foot: `${x ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="ld">${ic('trash', 'ico-16')} মুছুন</button>` : ''}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="ls">সংরক্ষণ</button>`,
    onMount: (m, close) => {
      $('#ls', m).onclick = () => { const f = $('#lf', m); if (!f.reportValidity()) return; const d = UI.formData(f); d.amount = +d.amount; Store.upsert('ledger', { ...(x ? { id: x.id } : { type: t }), ...d }); close(); UI.success(t === 'income' ? 'আয় যোগ হয়েছে' : 'ব্যয় যোগ হয়েছে', d.category, Fmt.tk(d.amount)); refresh(); };
      if (x) $('#ld', m).onclick = async () => { if (await UI.confirm('এই লেনদেন মুছে যাবে')) { Store.remove('ledger', x.id); close(); refresh(); } };
    }
  });
}

/* ---------- বেতন ---------- */
const payMonth = { m: '' };
Views.payroll = view => {
  payMonth.m = payMonth.m || todayISO().slice(0, 7);
  setTitle('বেতন', '', `<button class="btn btn-ghost" id="slp">${ic('print', 'ico-16')}<span>বেতন শিট</span></button>`);
  $('#slp').onclick = () => openStudio('salarysheet', { month: payMonth.m });
  const staff = Store.all('teachers').filter(t => t.status !== 'left');
  const rec = D().salaries[payMonth.m] = D().salaries[payMonth.m] || {};
  const total = staff.reduce((a, t) => a + (+t.salary || 0), 0), paid = staff.filter(t => rec[t.id]?.paid), paidAmt = paid.reduce((a, t) => a + (rec[t.id].amount || 0), 0);
  view.innerHTML = `<div class="toolbar"><input type="month" class="form-control" id="pm" value="${payMonth.m}"><span class="sec small-t">${Fmt.ym(payMonth.m)}</span>
    <button class="btn btn-primary ms-auto" id="payAll">${ic('check', 'ico-16')} বাকি সবার বেতন দিন</button></div>
  <div class="row g-3 mb-3 stagger">
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">মোট বেতন</div><div class="fig num">${Fmt.tk(total)}</div><div class="note">${Fmt.n(staff.length)} জন</div></div></div>
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">পরিশোধিত</div><div class="fig num up">${Fmt.tk(paidAmt)}</div><div class="note">${Fmt.n(paid.length)} জন</div></div></div>
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">বাকি</div><div class="fig num ${total - paidAmt > 0 ? 'down' : ''}">${Fmt.tk(Math.max(0, total - paidAmt))}</div><div class="note">${Fmt.n(staff.length - paid.length)} জন</div></div></div>
  </div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>নাম ও পদবি</th><th class="r">মাসিক বেতন</th><th class="hide-m">পরিশোধের তারিখ</th><th class="r">অবস্থা</th></tr></thead><tbody>
  ${staff.map(t => { const r = rec[t.id]; return `<tr><td><div class="d-flex align-items-center gap-2">${UI.avatar(t.name, t.photo, 'sm')}<div><div>${esc(t.name)}</div><div class="muted" style="font-size:12.5px">${esc(t.designation)}</div></div></div></td>
    <td class="r num">${Fmt.tk(t.salary || 0)}</td><td class="sec hide-m">${r?.paid ? Fmt.date(r.date) : '—'}</td>
    <td class="r">${r?.paid ? `<button class="btn btn-ghost btn-sm" data-un="${t.id}"><span class="up">${ic('check', 'ico-16')}</span> পরিশোধিত</button>` : `<button class="btn btn-primary btn-sm" data-pay="${t.id}">বেতন দিন</button>`}</td></tr>`; }).join('') || `<tr><td colspan="4">${UI.empty('কোনো শিক্ষক বা কর্মচারী নেই', 'teachers')}</td></tr>`}
  </tbody></table></div></div>
  <div class="hint mt-2">বেতন দিলে আয়-ব্যয় খাতায় "শিক্ষক-কর্মচারী বেতন" হিসেবে ব্যয় যোগ হয়। বেতনের পরিমাণ শিক্ষকের প্রোফাইল থেকে বদলানো যায়</div>`;
  const syncLedger = () => {
    const sum = Object.values(rec).filter(r => r.paid).reduce((a, r) => a + r.amount, 0);
    const ref = 'salary:' + payMonth.m; const ex = Store.all('ledger').find(l => l.ref === ref);
    if (sum) Store.upsert('ledger', { ...(ex ? { id: ex.id } : {}), type: 'expense', category: S().expenseCats[0] || 'বেতন', amount: sum, date: ex?.date || todayISO(), note: Fmt.ym(payMonth.m) + ' মাসের বেতন', ref });
    else if (ex) Store.remove('ledger', ex.id);
  };
  const pay = id => { const t = Store.find('teachers', id); rec[id] = { paid: true, date: todayISO(), amount: +t.salary || 0 }; };
  $('#pm').onchange = e => { payMonth.m = e.target.value || todayISO().slice(0, 7); refresh(); };
  $$('[data-pay]', view).forEach(b => b.onclick = () => { pay(b.dataset.pay); syncLedger(); Store.save(); const t = Store.find('teachers', b.dataset.pay); UI.success('বেতন দেওয়া হয়েছে', t.name, Fmt.tk(t.salary || 0)); refresh(); });
  $$('[data-un]', view).forEach(b => b.onclick = async () => { if (await UI.confirm('এই মাসের বেতন অপরিশোধিত হিসেবে চিহ্নিত হবে', 'হ্যাঁ, বাতিল করুন')) { delete rec[b.dataset.un]; syncLedger(); Store.save(); refresh(); } });
  $('#payAll').onclick = async () => { const rest = staff.filter(t => !rec[t.id]?.paid); if (!rest.length) return UI.toast('সবার বেতন দেওয়া হয়ে গেছে'); if (await UI.confirm(`${Fmt.n(rest.length)} জনকে মোট ${Fmt.tk(rest.reduce((a, t) => a + (+t.salary || 0), 0))} বেতন দেওয়া হবে`, 'বেতন দিন', false)) { rest.forEach(t => pay(t.id)); syncLedger(); Store.save(); UI.success('সবার বেতন দেওয়া হয়েছে', `${Fmt.n(rest.length)} জন`, Fmt.tk(rest.reduce((a, t) => a + (+t.salary || 0), 0))); refresh(); } };
};
