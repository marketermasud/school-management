/* =========================================================
   ডকুমেন্ট ও সনদ — প্রিন্ট, PDF, QR যাচাই
   সব ডকুমেন্ট মিলিমিটার মাপে তৈরি, A4 কাগজে সাজানো।
   আপনার নিজের ডিজাইনের স্যাম্পল পেলে শুধু T.<নাম> ফাংশন বদলালেই হবে।
   ========================================================= */
const MM = 96 / 25.4;
const DOC_TYPES = {
  admit:       { title: 'প্রবেশপত্র', desc: 'A4-এর অর্ধেক, ল্যান্ডস্কেপ · এক পাতায় দুটি', unit: 'A5', orient: 'l', lock: true, pfx: 'ADM', icon: 'id' },
  testimonial: { title: 'প্রশংসাপত্র', desc: 'A4 পোর্ট্রেট · এসএসসি ফলাফলসহ', unit: 'A4', orient: 'p', pfx: 'TST', icon: 'award' },
  transcript:  { title: 'একাডেমিক ট্রান্সক্রিপ্ট', desc: 'বিষয়ভিত্তিক নম্বর, জিপিএ, মেধাক্রম', unit: 'A4', orient: 'p', pfx: 'TRN', icon: 'exam' },
  tabulation:  { title: 'ফলাফল শিট', desc: 'পুরো শ্রেণির টেবুলেশন শিট', unit: 'A4', orient: 'l', pfx: 'TAB', icon: 'register' },
  tc:          { title: 'ছাড়পত্র (TC)', desc: 'বদলি সনদ, A4 পোর্ট্রেট', unit: 'A4', orient: 'p', pfx: 'TC', icon: 'docs' },
  idcard:      { title: 'শিক্ষার্থী আইডি কার্ড', desc: 'CR80 মাপ · এক পাতায় ৯টি', unit: 'card', orient: 'p', lock: true, pfx: 'SID', icon: 'id' },
  staffid:     { title: 'শিক্ষক-কর্মচারী আইডি কার্ড', desc: 'CR80 মাপ · এক পাতায় ৯টি', unit: 'card', orient: 'p', lock: true, pfx: 'TID', icon: 'id' },
  receipt:     { title: 'ফি রসিদ', desc: 'অফিস ও শিক্ষার্থী কপি এক পাতায়', unit: 'A5', orient: 'l', pfx: 'RCP', icon: 'receipt' },
  routine:     { title: 'ক্লাস রুটিন', desc: 'শ্রেণি বা শিক্ষকের সাপ্তাহিক রুটিন', unit: 'A4', orient: 'l', pfx: 'RTN', icon: 'routine' },
  attsheet:    { title: 'মাসিক হাজিরা খাতা', desc: 'শাখাভিত্তিক মাসের হাজিরা', unit: 'A4', orient: 'l', pfx: 'ATT', icon: 'attendance' },
  notice:      { title: 'নোটিশ', desc: 'প্যাডে ছাপা বিজ্ঞপ্তি', unit: 'A4', orient: 'p', pfx: 'NTC', icon: 'notice' },
  salarysheet: { title: 'বেতন শিট', desc: 'মাসিক বেতন ও স্বাক্ষরের ঘর', unit: 'A4', orient: 'p', pfx: 'SAL', icon: 'salary' },
  ledger:      { title: 'আয়-ব্যয় প্রতিবেদন', desc: 'মাসের খাতভিত্তিক হিসাব', unit: 'A4', orient: 'p', pfx: 'ACC', icon: 'wallet' }
};

/* ---------- ক্রমিক নং ও রেজিস্ট্রি ---------- */
const Reg = {
  pending: [],
  serial(type, key, meta) {
    const ex = Store.all('documents').find(d => d.type === type && d.key === key);
    if (ex) return ex.serial;
    const pfx = DOC_TYPES[type].pfx, y = new Date().getFullYear();
    const p = this.pending.find(d => d.type === type && d.key === key); if (p) return p.serial;
    const used = (S().serials[pfx + y] || 0) + this.pending.filter(d => d.pfx === pfx).length + 1;
    const serial = `${pfx}-${y}-${String(used).padStart(4, '0')}`;
    this.pending.push({ type, key, pfx, serial, ...meta });
    return serial;
  },
  commit() {
    const y = new Date().getFullYear();
    this.pending.forEach(p => { S().serials[p.pfx + y] = Math.max(S().serials[p.pfx + y] || 0, +p.serial.split('-').pop()); Store.all('documents').push({ id: Store.uid(), type: p.type, key: p.key, serial: p.serial, name: p.name || '', sid: p.sid || '', issuedAt: todayISO(), info: p.info || '' }); });
    this.pending = []; Store.save();
  }
};

/* ---------- QR ---------- */
function verifyBase() { return location.origin + location.pathname.replace(/[^/]*$/, ''); }
// QR-এ শুধু ছোট একটা লিংক থাকে, তাই কোড হালকা আর সহজে স্ক্যান হয়। তথ্য মেলানো হয় অনলাইন রেকর্ড থেকে
function qrPayload(o) { return verifyBase() + 'verify.html#' + (Store.mode === 'demo' ? 'demo:' : '') + encodeURIComponent(o.serial); }
function qrImg(text) { try { const q = qrcode(0, 'M'); q.addData(text); q.make(); return q.createDataURL(4, 0); } catch (e) { return ''; } }
const qrBlock = (o, size = 19, label = 'যাচাই করতে স্ক্যান করুন') => studio.qr ? `<div class="qrbox"><div class="q" style="width:${size}mm;height:${size}mm"><img src="${qrImg(qrPayload(o))}" alt=""></div>${label ? `<small>${label}</small>` : ''}</div>` : '';

/* ---------- কমন অংশ ---------- */
function logoHTML(size) { const sc = S().school; return sc.logo ? `<img src="${sc.logo}" alt="">` : `<div class="ph" style="font-size:${size}pt">${esc(Fmt.initials(sc.name))}</div>`; }
function head(qr, compact) {
  const sc = S().school;
  return `<div class="dh"><div class="lg" style="${compact ? 'width:13mm;height:13mm' : ''}">${logoHTML(compact ? 12 : 16)}</div>
    <div class="ttl"><div class="nm" style="${compact ? 'font-size:14pt' : ''}">${esc(sc.name)}</div>${sc.nameEn ? `<div class="en">${esc(sc.nameEn)}</div>` : ''}
    <div class="ad">${esc(sc.address || '')}${sc.eiin ? ` · EIIN: ${esc(Fmt.bd(sc.eiin))}` : ''}${sc.code && !compact ? ` · কোড: ${esc(Fmt.bd(sc.code))}` : ''}</div></div>
    ${qr ? `<div class="qr">${qr}</div>` : `<div class="spacer" style="${compact ? 'width:13mm' : ''}"></div>`}</div>`;
}
function sign(label, opts = {}) {
  const sc = S().school, withImg = opts.head && studio.sigImg;
  return `<div class="sign"><div class="img">${withImg && sc.headSign ? `<img class="sg" src="${sc.headSign}" alt="">` : ''}${withImg && sc.seal ? `<img class="seal" src="${sc.seal}" alt="">` : ''}</div>
    <div class="ln">${esc(label)}</div>${opts.head && sc.headName ? `<div class="sub">${esc(sc.headName)}</div>` : opts.sub ? `<div class="sub">${esc(opts.sub)}</div>` : ''}</div>`;
}
const headSign = () => sign(S().docs.signLabel, { head: true });
const igrid = (pairs, cols = 2) => `<div class="igrid" style="grid-template-columns:repeat(${cols},minmax(0,1fr))">${pairs.filter(Boolean).map(([k, v]) => `<div class="ir"><span class="k">${esc(k)}</span><span class="c">:</span><span class="v">${esc(Fmt.bd(v ?? ''))}</span></div>`).join('')}</div>`;
const photoBox = st => `<div class="photo">${st.photo ? `<img src="${st.photo}" alt="">` : 'ছবি'}</div>`;
const corners = () => { const svg = `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 38V8a6 6 0 0 1 6-6h30"/><path d="M7 38V13a6 6 0 0 1 6-6h25"/><circle cx="7" cy="7" r="2.4" fill="currentColor"/><path d="M14 14c6 0 10 4 10 10"/></svg>`;
  return [['top:9mm;left:9mm', ''], ['top:9mm;right:9mm', 'transform:scaleX(-1)'], ['bottom:9mm;left:9mm', 'transform:scaleY(-1)'], ['bottom:9mm;right:9mm', 'transform:scale(-1,-1)']].map(([p, t]) => `<div class="corner" style="${p};${t}">${svg}</div>`).join(''); };
function fillTemplate(text, vals) {
  return text.split('\n').map(par => `<p style="margin:0 0 3mm">${esc(par).replace(/\{([^}]+)\}/g, (m, k) => { const v = vals[k.trim()]; return v ? `<b>${esc(Fmt.bd(v))}</b>` : '<b>................</b>'; })}</p>`).join('');
}
function stVals(st, extra = {}) {
  return { 'নাম': st.nameBn, 'পিতা': st.father, 'মাতা': st.mother, 'ঠিকানা': st.address, 'শ্রেণি': clsName(st.classId), 'শাখা': st.section, 'রোল': st.roll, 'আইডি': st.studentId, 'বিভাগ': st.group,
    'জন্ম_তারিখ': st.dob ? Fmt.date(st.dob) : '', 'পরীক্ষার_সন': st.sscYear || extra.year, 'বোর্ড': st.sscBoard || extra.board, 'জিপিএ': st.sscGpa, 'বোর্ড_রোল': st.sscRoll, 'রেজি_নং': st.sscReg, 'কারণ': extra.reason, ...extra.more };
}

/* ---------- টেমপ্লেট ---------- */
const T = {
  admit(st, ex) {
    const ser = Reg.serial('admit', `${ex.id}|${st.id}`, { name: st.nameBn, sid: st.studentId, info: ex.name });
    const qr = qrBlock({ type: 'admit', serial: ser, name: st.nameBn, sid: st.studentId, info: `${ex.name} · ${clsShort(st.classId)} ${st.section} · রোল ${st.roll}` }, 17, '');
    const c = clsById(st.classId);
    return `<div class="doc admit" style="padding:7.5mm 10mm 6.5mm"><div class="frame" style="inset:4mm"></div><div class="inner">
      ${head(qr, true)}<div class="rule" style="margin-top:2mm"></div><div class="rule2" style="margin-bottom:2.5mm"></div>
      <div style="display:flex;align-items:center;justify-content:center;gap:4mm;margin-bottom:3mm"><span class="title-pill" style="font-size:12pt">প্রবেশপত্র</span><span class="exam">${esc(ex.name)} ${esc(Fmt.bd(ex.session))}</span></div>
      <div style="display:flex;gap:6mm;align-items:flex-start">
        <div style="flex:1;min-width:0">${igrid([['নাম', st.nameBn], ['শিক্ষার্থী আইডি', st.studentId], ['পিতার নাম', st.father], ['মাতার নাম', st.mother], ['শ্রেণি', clsName(st.classId)], ['শাখা', st.section], ['রোল নং', st.roll], c && c.hasGroups ? ['বিভাগ', st.group] : ['শিক্ষাবর্ষ', ex.session], ...(st.sscReg ? [['রেজি. নং', st.sscReg]] : [])], 2)}</div>
        ${photoBox(st)}</div>
      <div style="margin-top:2.5mm;font-size:8.6pt;line-height:1.55"><span style="font-weight:600;color:var(--ink)">পরীক্ষার বিষয়: </span>${subjectsFor(st).map(x => `${esc(x.short)} (${Fmt.bd(x.code)})`).join(', ')}</div>
      <div style="margin-top:2mm"><div style="font-size:8.5pt;font-weight:600;color:var(--ink)">পরীক্ষার্থীর জন্য নির্দেশনা${ex.startDate ? ` · পরীক্ষা শুরু ${Fmt.date(ex.startDate)}` : ''}</div>
        <ol class="rules">${S().docs.admitRules.split('\n').filter(Boolean).map(r => `<li>${esc(r)}</li>`).join('')}</ol></div>
      <div class="signs" style="padding-top:2mm">${sign(S().docs.classTeacherLabel)}<div class="serial" style="align-self:flex-end">ক্রমিক: ${esc(ser)}</div>${headSign()}</div>
    </div></div>`;
  },
  cert(kind, st, opts) {
    const isT = kind === 'testimonial', sc = S().school;
    const ser = Reg.serial(kind, st.id, { name: st.nameBn, sid: st.studentId });
    const qr = qrBlock({ type: kind, serial: ser, name: st.nameBn, sid: st.studentId, date: opts.date, info: `${clsShort(st.classId)} · ${st.father || ''}` }, 22);
    const body = fillTemplate(isT ? S().docs.testimonialText : S().docs.tcText, stVals(st, { year: opts.year, board: opts.board, reason: opts.reason }));
    return `<div class="doc cert" style="padding:17mm 22mm 21mm"><div class="frame" style="inset:7mm;border-width:.8mm"></div>${corners()}
      ${sc.logo ? `<div class="watermark"><img src="${sc.logo}" alt=""></div>` : ''}
      <div class="inner">
        <div style="text-align:center"><div class="dh" style="justify-content:center"><div class="lg" style="width:22mm;height:22mm">${logoHTML(20)}</div></div>
          <div class="dh"><div class="ttl"><div class="nm" style="font-size:22pt;margin-top:2mm">${esc(sc.name)}</div>${sc.nameEn ? `<div class="en" style="font-size:10pt">${esc(sc.nameEn)}</div>` : ''}
          <div class="ad">${esc(sc.address || '')}</div><div class="ad">${[sc.eiin && 'EIIN: ' + Fmt.bd(sc.eiin), sc.established && 'স্থাপিত: ' + Fmt.bd(sc.established), sc.phone && 'ফোন: ' + Fmt.bd(sc.phone)].filter(Boolean).join(' · ')}</div></div></div></div>
        <div class="rule"></div><div class="rule2"></div>
        <div class="meta-row"><span>ক্রমিক নং: <b>${esc(ser)}</b></span><span>তারিখ: <b>${Fmt.dateN(opts.date)}</b></span></div>
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding-bottom:${studio.orient === 'l' ? 4 : 16}mm">
        <div class="title-u">${isT ? 'প্রশংসাপত্র' : 'ছাড়পত্র'}</div>${!isT ? '<div style="text-align:center;font-size:9pt;color:#4a5263">Transfer Certificate</div>' : ''}
        <div class="body" style="margin-top:${studio.orient === 'l' ? 5 : 10}mm">${body}</div></div>
        <div class="signs" style="align-items:flex-end">${qr || '<div></div>'}${headSign()}</div>
      </div></div>`;
  },
  transcript(st, ex, posMap) {
    const r = resultOf(ex.id, st), pos = posMap[st.id] || {}, c = clsById(st.classId);
    const ser = Reg.serial('transcript', `${ex.id}|${st.id}`, { name: st.nameBn, sid: st.studentId, info: ex.name });
    const qr = qrBlock({ type: 'transcript', serial: ser, name: st.nameBn, sid: st.studentId, info: `${ex.name} · জিপিএ ${r.gpa.toFixed(2)} · ${r.grade}` });
    const land = studio.orient === 'l';
    const table = `<table class="mt"><thead><tr><th>ক্রম</th><th>কোড</th><th style="text-align:left">বিষয়</th><th>পূর্ণমান</th><th>প্রাপ্ত নম্বর</th><th>লেটার গ্রেড</th><th>গ্রেড পয়েন্ট</th></tr></thead><tbody>
      ${r.rows.map((x, i) => `<tr><td>${Fmt.n(i + 1)}</td><td>${Fmt.bd(x.s.code)}</td><td class="l">${esc(x.s.name)}</td><td>${Fmt.n(x.s.fullMarks)}</td><td class="${x.fail ? 'F' : ''}">${x.has ? Fmt.n(x.v) : '—'}</td><td class="${x.fail ? 'F' : ''}">${x.has ? x.grade : '—'}</td><td>${x.has ? Fmt.gpa(x.gp) : '—'}</td></tr>`).join('')}
      </tbody><tfoot><tr><td colspan="3" class="l">মোট</td><td>${Fmt.n(r.full)}</td><td>${Fmt.n(r.total)}</td><td>${r.grade}</td><td>${Fmt.gpa(r.gpa)}</td></tr></tfoot></table>`;
    const sum = `<div class="sum-box"><div><small>মোট নম্বর</small><b>${Fmt.n(r.total)}</b></div><div><small>জিপিএ</small><b>${Fmt.gpa(r.gpa)}</b></div><div><small>গ্রেড</small><b>${r.grade}</b></div>
      <div><small>ফলাফল</small><b class="${r.pass ? 'pass' : 'fail'}">${r.pass ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'}</b></div><div><small>শ্রেণিতে মেধাক্রম</small><b>${r.pass && pos.pos ? Fmt.n(pos.pos) : '—'}</b></div><div><small>শাখায় মেধাক্রম</small><b>${r.pass && pos.secPos ? Fmt.n(pos.secPos) : '—'}</b></div></div>`;
    const scale = `<table class="scale"><thead><tr><th>নম্বর</th><th>গ্রেড</th><th>পয়েন্ট</th></tr></thead><tbody>${[...S().grading].sort((a, b) => b.min - a.min).map((g, i, arr) => `<tr><td>${Fmt.n(g.min)}${i ? '–' + Fmt.n(arr[i - 1].min - 1) : '–১০০'}</td><td>${g.grade}</td><td>${Fmt.gpa(g.gp)}</td></tr>`).join('')}</tbody></table>`;
    return `<div class="doc" style="padding:13mm 14mm 12mm"><div class="frame" style="inset:6mm"></div><div class="inner">
      ${head(qr)}<div class="rule"></div><div class="rule2"></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.5mm;margin-bottom:4mm"><span class="title-pill">একাডেমিক ট্রান্সক্রিপ্ট</span><span style="font-weight:600;color:var(--ink)">${esc(ex.name)} ${esc(Fmt.bd(ex.session))}</span></div>
      <div style="margin-bottom:4mm">${igrid([['নাম', st.nameBn], ['শিক্ষার্থী আইডি', st.studentId], ['পিতার নাম', st.father], ['মাতার নাম', st.mother], ['শ্রেণি', clsName(st.classId)], ['শাখা', st.section], ['রোল নং', st.roll], c && c.hasGroups ? ['বিভাগ', st.group] : ['জন্ম তারিখ', st.dob ? Fmt.dateN(st.dob) : ''], ...(c && c.hasGroups ? [['জন্ম তারিখ', st.dob ? Fmt.dateN(st.dob) : '']] : []), ['শিক্ষাবর্ষ', ex.session]], land ? 3 : 2)}</div>
      <div class="tr-body">${land ? `<div style="flex:1;min-width:0">${table}</div><div class="tr-side">${sum}${scale}</div>` : `${table}<div class="tr-foot">${sum}${scale}</div>`}</div>
      <div class="signs" style="padding-top:4mm">${sign(S().docs.classTeacherLabel)}${sign(S().docs.examCtrlLabel)}${headSign()}</div>
      <div class="serial" style="text-align:center;margin-top:2mm">ক্রমিক: ${esc(ser)} · ইস্যুর তারিখ: ${Fmt.dateN(studio.date)}</div>
    </div></div>`;
  },
  idcard(st) {
    const ser = Reg.serial('idcard', st.id, { name: st.nameBn, sid: st.studentId });
    const sc = S().school, y = +S().school.session || new Date().getFullYear();
    return `<div class="idc"><div class="top"><div class="s">${esc(sc.name)}</div>${sc.nameEn ? `<div class="e">${esc(sc.nameEn)}</div>` : ''}<div class="bar"></div></div>
      <div class="ph">${st.photo ? `<img src="${st.photo}" alt="">` : esc(Fmt.initials(st.nameBn))}</div>
      <div class="n">${esc(st.nameBn)}</div><div class="tg">শিক্ষার্থী</div>
      <table><tr><td class="k">শ্রেণি</td><td>${esc(clsShort(st.classId))}, ${esc(st.section)} শাখা</td></tr><tr><td class="k">রোল</td><td>${Fmt.n(st.roll)}</td></tr><tr><td class="k">আইডি</td><td>${esc(Fmt.bd(st.studentId))}</td></tr>
        <tr><td class="k">রক্তের গ্রুপ</td><td>${esc(st.blood || '—')}</td></tr><tr><td class="k">মোবাইল</td><td>${esc(Fmt.bd(st.phone || ''))}</td></tr><tr><td class="k">মেয়াদ</td><td>${Fmt.bd('31/12/' + y)}</td></tr></table>
      <div class="bt">${studio.qr ? `<div class="q"><img src="${qrImg(qrPayload({ type: 'idcard', serial: ser, name: st.nameBn, sid: st.studentId, info: `${clsShort(st.classId)} ${st.section} · রোল ${st.roll}` }))}" alt=""></div>` : '<div></div>'}
        <div class="sg">${studio.sigImg && sc.headSign ? `<img src="${sc.headSign}" alt="">` : ''}<div>প্রধান শিক্ষক</div></div></div><div class="foot"></div></div>`;
  },
  staffid(t) {
    const ser = Reg.serial('staffid', t.id, { name: t.name, sid: t.indexNo || t.id });
    const sc = S().school;
    return `<div class="idc"><div class="top"><div class="s">${esc(sc.name)}</div>${sc.nameEn ? `<div class="e">${esc(sc.nameEn)}</div>` : ''}<div class="bar"></div></div>
      <div class="ph">${t.photo ? `<img src="${t.photo}" alt="">` : esc(Fmt.initials(t.name))}</div>
      <div class="n">${esc(t.name)}</div><div class="tg">${esc(t.designation)}</div>
      <table>${t.subject ? `<tr><td class="k">বিষয়</td><td>${esc(t.subject)}</td></tr>` : ''}${t.indexNo ? `<tr><td class="k">ইনডেক্স</td><td>${esc(Fmt.bd(t.indexNo))}</td></tr>` : ''}<tr><td class="k">রক্তের গ্রুপ</td><td>${esc(t.blood || '—')}</td></tr><tr><td class="k">মোবাইল</td><td>${esc(Fmt.bd(t.phone || ''))}</td></tr><tr><td class="k">যোগদান</td><td>${t.joinDate ? Fmt.dateN(t.joinDate) : '—'}</td></tr></table>
      <div class="bt">${studio.qr ? `<div class="q"><img src="${qrImg(qrPayload({ type: 'staffid', serial: ser, name: t.name, sid: t.indexNo || '', info: t.designation }))}" alt=""></div>` : '<div></div>'}
        <div class="sg">${studio.sigImg && sc.headSign ? `<img src="${sc.headSign}" alt="">` : ''}<div>প্রধান শিক্ষক</div></div></div><div class="foot"></div></div>`;
  },
  receipt(p, copy) {
    const st = Store.find('students', p.studentId) || { nameBn: '—', classId: '', section: '', roll: '' };
    const qr = qrBlock({ type: 'receipt', serial: p.receiptNo, name: st.nameBn, sid: st.studentId, date: p.date, info: Fmt.tk(p.total) }, 15, '');
    const land = studio.orient === 'l';
    return `<div class="doc" style="padding:${land ? '7mm 10mm 6mm' : '9mm 8mm 8mm'}"><div class="frame" style="inset:4mm"></div><div class="inner">
      ${head(qr, true)}<div class="rule" style="margin-top:2mm"></div><div class="rule2" style="margin-bottom:2mm"></div>
      <div style="display:flex;align-items:center;justify-content:center;gap:3mm;margin-bottom:2.5mm"><span class="title-pill" style="font-size:11pt">টাকা প্রাপ্তির রসিদ</span><span style="font-size:8.5pt;border:.25mm solid #9aa3b2;border-radius:3mm;padding:.3mm 2.5mm;color:#3b4252">${copy}</span></div>
      <div class="meta-row" style="margin-bottom:2mm"><span>রসিদ নং: <b>${esc(Fmt.bd(p.receiptNo))}</b></span><span>তারিখ: <b>${Fmt.dateN(p.date)}</b></span></div>
      ${igrid([['নাম', st.nameBn], ['আইডি', st.studentId], ['শ্রেণি', `${clsShort(st.classId)}, ${st.section} শাখা`], ['রোল', st.roll]], land ? 2 : 1)}
      <table class="mt" style="margin-top:2.5mm;font-size:9pt"><thead><tr><th style="width:9mm">ক্রম</th><th style="text-align:left">বিবরণ</th><th style="width:26mm">টাকা</th></tr></thead><tbody>
        ${p.items.map((i, k) => `<tr><td>${Fmt.n(k + 1)}</td><td class="l">${esc(i.label)}${i.month ? ` (${Fmt.ym(i.month)})` : ''}</td><td style="text-align:right">${Fmt.n(i.amount)}</td></tr>`).join('')}
        ${p.discount ? `<tr><td></td><td class="l">ছাড়</td><td style="text-align:right">−${Fmt.n(p.discount)}</td></tr>` : ''}</tbody>
        <tfoot><tr><td colspan="2" class="l">সর্বমোট (${esc(p.method)})</td><td style="text-align:right">${Fmt.tk(p.total)}</td></tr></tfoot></table>
      <div class="signs" style="padding-top:2mm">${sign('আদায়কারীর স্বাক্ষর')}${headSign()}</div>
    </div></div>`;
  },
  notice(n) {
    const ser = Reg.serial('notice', n.id, { name: n.title });
    const qr = qrBlock({ type: 'notice', serial: ser, name: n.title, date: n.date }, 19);
    return `<div class="doc" style="padding:15mm 18mm 15mm"><div class="frame" style="inset:7mm"></div><div class="inner">
      ${head(qr)}<div class="rule"></div><div class="rule2"></div>
      <div class="meta-row"><span>স্মারক নং: <b>${esc(Fmt.bd(n.memo || ser))}</b></span><span>তারিখ: <b>${Fmt.dateN(n.date)}</b></span></div>
      <div class="title-u" style="margin-top:10mm;font-size:20pt">বিজ্ঞপ্তি</div>
      <div style="margin-top:8mm;font-size:12.5pt;font-weight:600">বিষয়: ${esc(n.title)}</div>
      <div class="serif" style="margin-top:5mm;font-size:12pt;line-height:2;text-align:justify;white-space:pre-line">${esc(n.body || '')}${n.eventDate ? `\n\nতারিখ: ${Fmt.day(n.eventDate)}, ${Fmt.date(n.eventDate)}` : ''}</div>
      <div class="signs" style="justify-content:flex-end">${headSign()}</div>
    </div></div>`;
  }
};

/* ---------- টেবিলভিত্তিক রিপোর্ট (পাতা ভাগ করে) ---------- */
function reportPages({ type, key, title, sub, columns, rows, rowsPerPage, foot = '', tableCls = 'mt', after = '' }) {
  const ser = Reg.serial(type, key, { name: title });
  const qr = qrBlock({ type, serial: ser, name: title, info: sub || '' }, 17, '');
  const pages = []; for (let i = 0; i < Math.max(1, rows.length); i += rowsPerPage) pages.push(rows.slice(i, i + rowsPerPage));
  return pages.map((pr, pi) => `<div class="doc" style="padding:11mm 12mm 10mm"><div class="inner">
    ${head(qr, true)}<div class="rule" style="margin-top:2mm"></div><div class="rule2" style="margin-bottom:2.5mm"></div>
    <div style="display:flex;justify-content:center;align-items:center;gap:4mm;margin-bottom:2.5mm"><span class="title-pill" style="font-size:11.5pt">${esc(title)}</span>${sub ? `<b style="color:var(--ink)">${esc(sub)}</b>` : ''}</div>
    <table class="${tableCls}"><thead><tr>${columns.map(c => `<th style="${c.w ? 'width:' + c.w : ''}">${c.h}</th>`).join('')}</tr></thead><tbody>${pr.join('') || `<tr><td colspan="${columns.length}">কোনো তথ্য নেই</td></tr>`}</tbody>${pi === pages.length - 1 ? foot : ''}</table>
    ${pi === pages.length - 1 ? after : ''}
    ${pi === pages.length - 1 ? `<div class="signs" style="padding-top:4mm">${sign('প্রস্তুতকারীর স্বাক্ষর')}${headSign()}</div>` : '<div style="margin-top:auto"></div>'}
    <div class="pg-no">${esc(ser)} · পৃষ্ঠা ${Fmt.n(pi + 1)}/${Fmt.n(pages.length)}</div>
  </div></div>`);
}
const R = {
  tabulation(ex, cid, sec) {
    const res = classResults(ex.id, cid).filter(x => !sec || x.st.section === sec), subs = subjectsForClass(cid);
    const land = studio.orient === 'l';
    const rows = res.map(x => `<tr><td>${x.r.pass ? Fmt.n(x.pos) : '—'}</td><td>${Fmt.n(x.st.roll)}</td><td class="l">${esc(x.st.nameBn)}${sec ? '' : ` <span style="color:#6b7385">(${esc(x.st.section)})</span>`}</td>
      ${subs.map(s => { const row = x.r.rows.find(r => r.s.id === s.id); return row ? `<td class="${row.fail ? 'F' : ''}">${row.has ? Fmt.n(row.v) + '<br>' + row.grade : '—'}</td>` : '<td style="background:#f1f2f5">·</td>'; }).join('')}
      <td>${Fmt.n(x.r.total)}</td><td><b>${Fmt.gpa(x.r.gpa)}</b></td><td class="${x.r.grade === 'F' ? 'F' : ''}"><b>${x.r.grade}</b></td></tr>`);
    const pass = res.filter(x => x.r.pass).length;
    return reportPages({ type: 'tabulation', key: `${ex.id}|${cid}|${sec}`, title: 'ফলাফল শিট', sub: `${ex.name} ${Fmt.bd(ex.session)} · ${clsName(cid)}${sec ? ', ' + sec + ' শাখা' : ''}`, tableCls: 'tab',
      columns: [{ h: 'মেধা', w: '9mm' }, { h: 'রোল', w: '9mm' }, { h: 'নাম' }, ...subs.map(s => ({ h: esc(s.short) })), { h: 'মোট', w: '11mm' }, { h: 'জিপিএ', w: '11mm' }, { h: 'গ্রেড', w: '10mm' }],
      rows, rowsPerPage: land ? 16 : 26, after: `<div style="font-size:9pt;margin-top:2mm">মোট পরীক্ষার্থী ${Fmt.n(res.length)} · উত্তীর্ণ ${Fmt.n(pass)} · অনুত্তীর্ণ ${Fmt.n(res.length - pass)} · পাসের হার ${res.length ? Fmt.pct((pass / res.length * 100).toFixed(1)) : '—'} · জিপিএ ৫: ${Fmt.n(res.filter(x => x.r.grade === 'A+').length)}</div>` });
  },
  routine(o) {
    const P = S().periods, days = SCHOOL_DAYS(), meta = rtMeta();
    const colsP = P.map(p => ({ h: p.brk ? '' : `${esc(p.label)}<br><span style="font-size:7.5pt;font-weight:400">${Fmt.time(p.start)}–${Fmt.time(p.end)}</span>`, w: p.brk ? '9mm' : '' }));
    const eff = meta.effective ? ` · কার্যকর ${Fmt.dateN(meta.effective)}` : '';
    const cellOf = (k, d, p) => { const c = ((D().routine[k] || {})[d] || {})[p.id]; const s = c && subjById(c.subjectId); return s ? `<b>${esc(s.short)}</b><br><span style="font-size:7.5pt">${esc(teacherName(c.teacherId))}</span>` : ''; };
    if (o.scope === 'master') {
      const keys = allSecKeys(); const land = studio.orient === 'l';
      return days.flatMap(d => reportPages({ type: 'routine', key: 'master|' + d, title: meta.title, sub: DAYS_FULL[d] + eff, tableCls: 'tab', columns: [{ h: 'শ্রেণি', w: '20mm' }, ...colsP],
        rows: keys.map((k, ki) => `<tr><td class="l"><b>${esc(secShort(k))}</b></td>${P.map(p => p.brk ? (ki === 0 ? `<td rowspan="${keys.length}" style="background:#fbf2df;writing-mode:vertical-rl;font-weight:600;color:#8a5a0b">${esc(p.label)}</td>` : '') : `<td style="height:${land ? 12 : 16}mm">${cellOf(k, d, p)}</td>`).join('')}</tr>`), rowsPerPage: land ? 12 : 16 }));
    }
    if (o.scope === 'allclasses') return allSecKeys().flatMap(k => { const [cid, sec] = k.split('|'); return R.routine({ classId: cid, section: sec }); });
    let title = meta.title, sub, cell;
    if (o.teacherId) { sub = teacherName(o.teacherId); cell = (d, p) => { for (const [k, r] of Object.entries(D().routine)) { const c = r[d] && r[d][p.id]; if (c && c.teacherId === o.teacherId) { const [cid, sec] = k.split('|'); return `<b>${esc(clsShort(cid))} ${esc(sec)}</b><br>${esc(subjById(c.subjectId)?.short || '')}`; } } return ''; }; }
    else { sub = `${clsName(o.classId)}, ${o.section} শাখা${eff}`; const rt = D().routine[`${o.classId}|${o.section}`] || {}; cell = (d, p) => { const c = (rt[d] || {})[p.id]; const s = c && subjById(c.subjectId); return s ? `<b>${esc(s.short)}</b><br><span style="font-size:8pt">${esc(teacherName(c.teacherId))}</span>` : ''; }; }
    const rows = days.map((d, di) => `<tr><td class="l"><b>${DAYS_FULL[d]}</b></td>${P.map(p => p.brk ? (di === 0 ? `<td rowspan="${days.length}" style="background:#fbf2df;writing-mode:vertical-rl;font-weight:600;color:#8a5a0b">${esc(p.label)}</td>` : '') : `<td style="height:${studio.orient === 'l' ? 19 : 26}mm">${cell(d, p)}</td>`).join('')}</tr>`);
    return reportPages({ type: 'routine', key: o.teacherId || `${o.classId}|${o.section}`, title, sub, columns: [{ h: 'দিন', w: '24mm' }, ...colsP], rows, rowsPerPage: 7 });
  },
  attsheet(o) {
    const [y, mo] = o.month.split('-').map(Number), n = new Date(y, mo, 0).getDate();
    const days = [...Array(n)].map((_, i) => `${o.month}-${String(i + 1).padStart(2, '0')}`), recs = days.map(d => Store.getAtt(d, o.classId, o.section));
    const list = sortStudents(activeStudents().filter(s => s.classId === o.classId && s.section === o.section));
    const rows = list.map(s => { let p = 0, t = 0; const cells = days.map((d, i) => { const v = recs[i] && recs[i][s.id]; if (v) { t++; if (v === 'P') p++; } return `<td style="${isOff(d) ? 'background:#eef0f4' : ''}${v === 'A' ? ';color:#c0291b;font-weight:600' : ''}">${v === 'P' ? '✓' : v === 'A' ? 'অ' : v === 'L' ? 'ছু' : ''}</td>`; }).join('');
      return `<tr><td>${Fmt.n(s.roll)}</td><td class="l">${esc(s.nameBn)}</td>${cells}<td>${Fmt.n(p)}</td><td>${t ? Fmt.n(Math.round(p / t * 100)) + '%' : '—'}</td></tr>`; });
    return reportPages({ type: 'attsheet', key: `${o.classId}|${o.section}|${o.month}`, title: 'মাসিক হাজিরা খাতা', sub: `${clsName(o.classId)}, ${o.section} শাখা · ${Fmt.ym(o.month)}`, tableCls: 'tab',
      columns: [{ h: 'রোল', w: '8mm' }, { h: 'নাম', w: '38mm' }, ...days.map((d, i) => ({ h: Fmt.n(i + 1) })), { h: 'উপ.', w: '8mm' }, { h: '%', w: '9mm' }], rows, rowsPerPage: studio.orient === 'l' ? 24 : 36 });
  },
  salarysheet(o) {
    const staff = Store.all('teachers').filter(t => t.status !== 'left'), rec = D().salaries[o.month] || {};
    const rows = staff.map((t, i) => `<tr><td>${Fmt.n(i + 1)}</td><td class="l">${esc(t.name)}</td><td class="l">${esc(t.designation)}</td><td style="text-align:right">${Fmt.n(t.salary || 0)}</td><td>${rec[t.id]?.paid ? Fmt.dateN(rec[t.id].date) : ''}</td><td style="width:32mm"></td></tr>`);
    return reportPages({ type: 'salarysheet', key: o.month, title: 'বেতন শিট', sub: Fmt.ym(o.month), columns: [{ h: 'ক্রম', w: '10mm' }, { h: 'নাম' }, { h: 'পদবি' }, { h: 'বেতন (৳)', w: '24mm' }, { h: 'পরিশোধ', w: '22mm' }, { h: 'স্বাক্ষর', w: '32mm' }], rows, rowsPerPage: studio.orient === 'l' ? 14 : 24,
      foot: `<tfoot><tr><td colspan="3" class="l">মোট</td><td style="text-align:right">${Fmt.n(staff.reduce((a, t) => a + (+t.salary || 0), 0))}</td><td colspan="2"></td></tr></tfoot>` });
  },
  ledger(o) {
    const L = allLedger().filter(x => !o.month || x.date.startsWith(o.month));
    const group = t => { const m = {}; L.filter(x => x.type === t).forEach(x => m[x.category] = (m[x.category] || 0) + x.amount); return Object.entries(m); };
    const inc = group('income'), exp = group('expense'), ti = inc.reduce((a, x) => a + x[1], 0), te = exp.reduce((a, x) => a + x[1], 0);
    const n = Math.max(inc.length, exp.length);
    const rows = [...Array(n)].map((_, i) => `<tr><td class="l">${inc[i] ? esc(inc[i][0]) : ''}</td><td style="text-align:right">${inc[i] ? Fmt.n(inc[i][1]) : ''}</td><td class="l">${exp[i] ? esc(exp[i][0]) : ''}</td><td style="text-align:right">${exp[i] ? Fmt.n(exp[i][1]) : ''}</td></tr>`);
    return reportPages({ type: 'ledger', key: o.month || 'all', title: 'আয়-ব্যয় প্রতিবেদন', sub: o.month ? Fmt.ym(o.month) : 'সব সময়', columns: [{ h: 'আয়ের খাত' }, { h: 'টাকা', w: '28mm' }, { h: 'ব্যয়ের খাত' }, { h: 'টাকা', w: '28mm' }], rows, rowsPerPage: 30,
      foot: `<tfoot><tr><td class="l">মোট আয়</td><td style="text-align:right">${Fmt.n(ti)}</td><td class="l">মোট ব্যয়</td><td style="text-align:right">${Fmt.n(te)}</td></tr></tfoot>`,
      after: `<div class="sum-box" style="grid-template-columns:repeat(3,1fr);margin-top:5mm"><div><small>মোট আয়</small><b>${Fmt.tk(ti)}</b></div><div><small>মোট ব্যয়</small><b>${Fmt.tk(te)}</b></div><div><small>উদ্বৃত্ত</small><b class="${ti - te < 0 ? 'fail' : 'pass'}">${Fmt.tk(ti - te)}</b></div></div>` });
  }
};

/* =========================================================
   স্টুডিও — বাছাই, প্রিভিউ, প্রিন্ট, PDF
   ========================================================= */
const studio = { type: '', opts: {}, orient: 'p', qr: true, sigImg: true, date: '', picked: null, cls: '', sec: '', exam: '', year: '', board: '', reason: '' };
function openStudio(type, opts = {}) {
  Object.assign(studio, { type, opts: { ...opts }, orient: DOC_TYPES[type].orient, qr: S().docs.showQR !== false, sigImg: true, date: todayISO(), picked: null, year: '', board: S().docs.board, reason: '' });
  if (['testimonial', 'tc'].includes(type) && !opts.students) { studio.cls = sortedClasses().slice(-1)[0]?.id; }
  if (opts.students && opts.students.length) { const s = Store.find('students', opts.students[0]); studio.cls = s.classId; studio.sec = s.section; studio.picked = new Set(opts.students); }
  else { if (opts.classId) studio.cls = opts.classId; studio.sec = opts.section || ''; }
  if (opts.examId) studio.exam = opts.examId;
  if (opts.teachers) studio.picked = new Set(opts.teachers);
  location.hash === '#documents' ? refresh() : (location.hash = 'documents');
}
Views.documents = view => {
  if (!studio.type) return docCenter(view);
  docStudio(view);
};
function docCenter(view) {
  setTitle('ডকুমেন্ট ও সনদ');
  const groups = [['শিক্ষার্থীর সনদ ও কার্ড', ['admit', 'testimonial', 'transcript', 'tc', 'idcard']], ['ফলাফল ও একাডেমিক', ['tabulation', 'routine', 'attsheet']], ['অফিস ও হিসাব', ['receipt', 'notice', 'salarysheet', 'ledger', 'staffid']]];
  const issued = Store.all('documents').length;
  view.innerHTML = `<div class="card-x card-pad mb-4 d-flex flex-wrap align-items-center gap-3" style="background:var(--primary-soft);border-color:transparent">${ic('shield', 'ico-20')}<div class="flex-grow-1"><b>প্রতিটি ডকুমেন্টে ক্রমিক নং আর QR কোড থাকে</b><div class="sec small-t">স্ক্যান করলে যাচাই পাতায় ডকুমেন্টের তথ্য দেখাবে। এ পর্যন্ত ${Fmt.n(issued)}টি ডকুমেন্ট ইস্যু হয়েছে। ডিজাইন আর লেখা সেটিংস থেকে বদলানো যায়</div></div><a class="btn btn-ghost" href="#settings" id="docSet">ডকুমেন্ট সেটিংস</a></div>
    ${groups.map(([g, ks]) => `<h3 style="font-size:15px;margin:0 0 12px" class="sec">${g}</h3><div class="doc-tiles mb-4 stagger">${ks.map(k => { const d = DOC_TYPES[k]; return `<div class="doc-tile" data-k="${k}"><div class="pg ${d.orient === 'l' && d.unit !== 'card' ? 'land' : ''}"></div><div><h4>${d.title}</h4><p>${d.desc}</p></div></div>`; }).join('')}</div>`).join('')}
    <div class="card-x"><div class="card-head"><h3>সাম্প্রতিক ইস্যু</h3><span class="right">${Fmt.n(issued)}টি</span></div>
    ${issued ? `<table class="tbl dense"><thead><tr><th>ক্রমিক নং</th><th>ধরন</th><th>নাম</th><th class="r">তারিখ</th></tr></thead><tbody>${[...Store.all('documents')].reverse().slice(0, 12).map(d => `<tr><td class="num">${esc(d.serial)}</td><td>${esc(DOC_TYPES[d.type]?.title || d.type)}</td><td>${esc(d.name)}</td><td class="r sec">${Fmt.dateS(d.issuedAt)}</td></tr>`).join('')}</tbody></table>` : UI.empty('এখনো কোনো ডকুমেন্ট প্রিন্ট বা ডাউনলোড হয়নি', 'docs')}</div>`;
  $$('.doc-tile', view).forEach(t => t.onclick = () => openStudio(t.dataset.k));
  $('#docSet').onclick = () => { setTab = 'docs'; };
}

function docStudio(view) {
  const dt = DOC_TYPES[studio.type], type = studio.type;
  setTitle(dt.title, dt.desc, `<button class="btn btn-ghost" id="back">${ic('arrowLeft', 'ico-16')}<span>সব ডকুমেন্ট</span></button>`);
  $('#back').onclick = () => { studio.type = ''; refresh(); };
  const exams = [...Store.all('exams')].sort((a, b) => a.startDate < b.startDate ? 1 : -1);
  if (!Store.find('exams', studio.exam)) studio.exam = defaultExam();
  if (!clsById(studio.cls)) studio.cls = sortedClasses()[0]?.id;
  const needsStudents = ['admit', 'testimonial', 'transcript', 'tc', 'idcard'].includes(type);
  const needsExam = ['admit', 'transcript', 'tabulation'].includes(type);
  let ctrl = '';
  if (needsExam) ctrl += `<div class="mb-3"><label class="form-label">পরীক্ষা</label><select class="form-select" id="sEx">${exams.map(e => `<option value="${e.id}" ${e.id === studio.exam ? 'selected' : ''}>${esc(e.name)} ${Fmt.bd(e.session)}</option>`).join('') || '<option value="">আগে পরীক্ষা যোগ করুন</option>'}</select></div>`;
  if (type === 'routine') { studio.opts.scope = studio.opts.scope || (studio.opts.teacherId ? 'teacher' : studio.opts.classId ? 'class' : 'master');
    ctrl += `<div class="mb-3"><label class="form-label">কোন রুটিন</label><select class="form-select" id="sSc">${[['master', 'সব শ্রেণি, প্রতিদিন এক পাতা'], ['allclasses', 'সব শ্রেণি, প্রতি শাখা এক পাতা'], ['class', 'একটি শ্রেণি'], ['teacher', 'একজন শিক্ষক']].map(o => `<option value="${o[0]}" ${o[0] === studio.opts.scope ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></div>`; }
  if (needsStudents || ['tabulation', 'attsheet'].includes(type) || (type === 'routine' && studio.opts.scope === 'class'))
    ctrl += `<div class="row g-2 mb-3"><div class="col-7"><label class="form-label">শ্রেণি</label><select class="form-select" id="sCl">${classOptions(studio.cls)}</select></div><div class="col-5"><label class="form-label">শাখা</label><select class="form-select" id="sSe">${sectionOptions(studio.cls, studio.sec, ['tabulation', 'admit', 'idcard', 'transcript'].includes(type))}</select></div></div>`;
  if (type === 'routine' && studio.opts.scope === 'teacher') ctrl += `<div class="mb-3"><label class="form-label">শিক্ষক</label><select class="form-select" id="sTe">${Store.all('teachers').filter(t => t.type === 'শিক্ষক').map(t => `<option value="${t.id}" ${t.id === studio.opts.teacherId ? 'selected' : ''}>${esc(t.name)}</option>`).join('')}</select></div>`;
  if (type === 'routine' && studio.opts.scope === 'teacher' && !studio.opts.teacherId) studio.opts.teacherId = (Store.all('teachers').find(t => t.type === 'শিক্ষক') || {}).id;
  if (needsStudents) ctrl += `<div class="mb-3"><div class="d-flex align-items-center mb-1"><label class="form-label mb-0">শিক্ষার্থী</label><label class="check ms-auto small-t" style="margin:0"><input type="checkbox" id="pickAll"> সবাই</label></div><div class="pick-list" id="pick"></div></div>`;
  if (type === 'staffid') ctrl += `<div class="mb-3"><div class="d-flex align-items-center mb-1"><label class="form-label mb-0">শিক্ষক ও কর্মচারী</label><label class="check ms-auto small-t" style="margin:0"><input type="checkbox" id="pickAll"> সবাই</label></div><div class="pick-list" id="pick"></div></div>`;
  if (type === 'receipt') { const pays = [...Store.all('payments')].sort((a, b) => a.date < b.date ? 1 : -1).slice(0, 200); if (!studio.opts.paymentId) studio.opts.paymentId = pays[0]?.id;
    ctrl += `<div class="mb-3"><label class="form-label">রসিদ</label><select class="form-select" id="sPay">${pays.map(p => `<option value="${p.id}" ${p.id === studio.opts.paymentId ? 'selected' : ''}>${esc(Fmt.bd(p.receiptNo))} · ${esc((Store.find('students', p.studentId) || {}).nameBn || '')}</option>`).join('')}</select></div>`; }
  if (type === 'notice') { const ns = [...Store.all('notices')].sort((a, b) => a.date < b.date ? 1 : -1); if (!studio.opts.noticeId) studio.opts.noticeId = ns[0]?.id;
    ctrl += `<div class="mb-3"><label class="form-label">নোটিশ</label><select class="form-select" id="sNt">${ns.map(n => `<option value="${n.id}" ${n.id === studio.opts.noticeId ? 'selected' : ''}>${esc(n.title)}</option>`).join('')}</select></div>`; }
  if (['attsheet', 'salarysheet', 'ledger'].includes(type)) { studio.opts.month = studio.opts.month || todayISO().slice(0, 7); ctrl += `<div class="mb-3"><label class="form-label">মাস</label><input type="month" class="form-control" id="sMo" value="${studio.opts.month}"></div>`; }
  if (type === 'testimonial') ctrl += `<div class="row g-2 mb-3"><div class="col-6"><label class="form-label">এসএসসি সন</label><input class="form-control" id="sYr" value="${esc(studio.year || S().school.session)}"></div><div class="col-6"><label class="form-label">বোর্ড</label><input class="form-control" id="sBd" value="${esc(studio.board)}"></div><div class="col-12 hint">শিক্ষার্থীর প্রোফাইলে আলাদা দেওয়া থাকলে সেটাই বসবে</div></div>`;
  if (type === 'tc') ctrl += `<div class="mb-3"><label class="form-label">ছাড়পত্রের কারণ</label><input class="form-control" id="sRe" value="${esc(studio.reason)}" placeholder="যেমন: পারিবারিক স্থানান্তরের কারণে"></div>`;
  ctrl += `<div class="mb-3"><label class="form-label">ইস্যুর তারিখ</label><input type="date" class="form-control" id="sDt" value="${studio.date}"></div>`;
  ctrl += `<div class="mb-3"><label class="form-label">কাগজের দিক</label>${dt.lock ? `<div class="sec small-t">${dt.unit === 'card' ? 'A4 পোর্ট্রেট, এক পাতায় ৯টি কার্ড' : 'A4-এর অর্ধেক ল্যান্ডস্কেপ, এক পাতায় দুটি, মাঝে কাটার দাগ'}</div>`
    : `<div class="seg w-100" id="sOr"><button data-v="p" class="flex-fill ${studio.orient === 'p' ? 'on' : ''}">পোর্ট্রেট</button><button data-v="l" class="flex-fill ${studio.orient === 'l' ? 'on' : ''}">ল্যান্ডস্কেপ</button></div><div class="hint">${dt.unit === 'A5' ? 'A4-এর অর্ধেক মাপে, এক পাতায় দুটি কপি' : 'A4 কাগজ'}</div>`}</div>`;
  ctrl += `<div class="d-flex flex-column gap-2 mb-3"><label class="switch"><input type="checkbox" id="sQr" ${studio.qr ? 'checked' : ''}> যাচাইয়ের QR কোড</label><label class="switch"><input type="checkbox" id="sSg" ${studio.sigImg ? 'checked' : ''}> স্বাক্ষর ও সিলের ছবি ${S().school.headSign ? '' : '<span class="muted small-t">(সেটিংসে যোগ করুন)</span>'}</label></div>`;

  view.innerHTML = `<div class="doc-studio"><div class="doc-ctrl card-x card-pad">${ctrl}
    <div class="d-flex gap-2"><button class="btn btn-primary flex-fill" id="dPdf">${ic('download', 'ico-16')} PDF নামান</button><button class="btn btn-ghost flex-fill" id="dPrint">${ic('print', 'ico-16')} প্রিন্ট</button></div>
    <div class="hint mt-2" id="dInfo"></div></div>
    <div class="doc-stage" id="stage"></div></div>`;

  const pickFill = () => {
    if (!$('#pick')) return;
    let list;
    if (type === 'staffid') list = Store.all('teachers').filter(t => t.status !== 'left').map(t => ({ id: t.id, label: `${t.name}`, sub: t.designation }));
    else list = sortStudents(Store.all('students').filter(s => (s.status === 'active' || ['testimonial', 'tc'].includes(type) || (studio.picked && studio.picked.has(s.id))) && s.classId === studio.cls && (!studio.sec || s.section === studio.sec))).sort((a, b) => (a.status === 'active') - (b.status === 'active')).map(s => ({ id: s.id, label: `${Fmt.n(s.roll)}. ${s.nameBn}`, sub: s.status === 'active' ? `${s.section} শাখা` : ({ passed: 'পাস করেছে', transferred: 'বদলি', left: 'প্রাক্তন' }[s.status] || '') }));
    if (!studio.picked) studio.picked = new Set(['admit', 'idcard', 'transcript', 'staffid'].includes(type) ? list.map(x => x.id) : list.slice(0, 1).map(x => x.id));
    $('#pick').innerHTML = list.map(x => `<label><input type="checkbox" value="${x.id}" ${studio.picked.has(x.id) ? 'checked' : ''}> <span class="flex-grow-1">${esc(x.label)}</span><span class="muted small-t">${esc(x.sub)}</span></label>`).join('') || '<div class="empty" style="padding:20px">কেউ নেই</div>';
    $('#pickAll').checked = list.length && list.every(x => studio.picked.has(x.id));
    $$('#pick input').forEach(i => i.onchange = () => { i.checked ? studio.picked.add(i.value) : studio.picked.delete(i.value); $('#pickAll').checked = list.every(x => studio.picked.has(x.id)); render(); });
    $('#pickAll').onchange = e => { list.forEach(x => e.target.checked ? studio.picked.add(x.id) : studio.picked.delete(x.id)); pickFill(); render(); };
  };
  const on = (id, ev, fn) => { const el = $(id); if (el) el[ev] = fn; };
  on('#sEx', 'onchange', e => { studio.exam = e.target.value; render(); });
  on('#sCl', 'onchange', e => { studio.cls = e.target.value; $('#sSe').innerHTML = sectionOptions(studio.cls, '', ['tabulation', 'admit', 'idcard', 'transcript'].includes(type)); studio.sec = $('#sSe').value; studio.picked = null; pickFill(); render(); });
  on('#sSe', 'onchange', e => { studio.sec = e.target.value; studio.picked = null; pickFill(); render(); });
  on('#sTe', 'onchange', e => { studio.opts.teacherId = e.target.value; render(); });
  on('#sSc', 'onchange', e => { studio.opts.scope = e.target.value; refresh(); });
  on('#sPay', 'onchange', e => { studio.opts.paymentId = e.target.value; render(); });
  on('#sNt', 'onchange', e => { studio.opts.noticeId = e.target.value; render(); });
  on('#sMo', 'onchange', e => { studio.opts.month = e.target.value; render(); });
  on('#sYr', 'oninput', e => { studio.year = e.target.value; render(); });
  on('#sBd', 'oninput', e => { studio.board = e.target.value; render(); });
  on('#sRe', 'oninput', e => { studio.reason = e.target.value; render(); });
  on('#sDt', 'onchange', e => { studio.date = e.target.value || todayISO(); render(); });
  on('#sQr', 'onchange', e => { studio.qr = e.target.checked; render(); });
  on('#sSg', 'onchange', e => { studio.sigImg = e.target.checked; render(); });
  $$('#sOr button').forEach(b => b.onclick = () => { studio.orient = b.dataset.v; $$('#sOr button').forEach(x => x.classList.toggle('on', x === b)); render(); });
  if ($('#sSe')) { if (!['tabulation', 'admit', 'idcard', 'transcript'].includes(type) && !clsById(studio.cls).sections.includes(studio.sec)) studio.sec = clsById(studio.cls).sections[0]; $('#sSe').value = studio.sec || ''; studio.sec = $('#sSe').value; }
  pickFill();
  let timer;
  const render = () => { clearTimeout(timer); timer = setTimeout(draw, 60); };
  const draw = () => { const sheets = buildSheets(); studio.sheets = sheets; paintStage(sheets); $('#dInfo').textContent = sheets.length ? `${Fmt.n(sheets.length)} পাতা · ${sheets.orient === 'l' ? 'A4 ল্যান্ডস্কেপ' : 'A4 পোর্ট্রেট'}` : ''; };
  $('#dPrint').onclick = () => doPrint();
  $('#dPdf').onclick = () => doPdf();
  window.onresize = () => { if (currentView === 'documents' && studio.type) paintStage(studio.sheets || []); };
  draw();
}

/* ---------- পাতা তৈরি ---------- */
function buildSheets() {
  Reg.pending = [];
  const type = studio.type, dt = DOC_TYPES[type], docs = [];
  const ex = Store.find('exams', studio.exam);
  const picked = () => studio.picked ? sortStudents([...studio.picked].map(id => Store.find('students', id)).filter(Boolean)) : [];
  if (type === 'admit') { if (ex) picked().forEach(s => docs.push(T.admit(s, ex))); }
  else if (type === 'testimonial' || type === 'tc') picked().forEach(s => docs.push(T.cert(type, s, { date: studio.date, year: studio.year, board: studio.board, reason: studio.reason })));
  else if (type === 'transcript') { if (ex) { const pm = {}; const byCls = {}; picked().forEach(s => { if (!byCls[s.classId]) { byCls[s.classId] = 1; classResults(ex.id, s.classId).forEach(x => pm[x.st.id] = x); } }); picked().forEach(s => docs.push(T.transcript(s, ex, pm))); } }
  else if (type === 'idcard') picked().forEach(s => docs.push(T.idcard(s)));
  else if (type === 'staffid') [...(studio.picked || [])].map(id => Store.find('teachers', id)).filter(Boolean).forEach(t => docs.push(T.staffid(t)));
  else if (type === 'receipt') { const p = Store.find('payments', studio.opts.paymentId); if (p) { docs.push(T.receipt(p, 'শিক্ষার্থী কপি'), T.receipt(p, 'অফিস কপি')); } }
  else if (type === 'notice') { const n = Store.find('notices', studio.opts.noticeId); if (n) docs.push(T.notice(n)); }
  else if (type === 'tabulation') { if (ex) docs.push(...R.tabulation(ex, studio.cls, studio.sec)); }
  else if (type === 'routine') { const sc = studio.opts.scope; docs.push(...R.routine(sc === 'teacher' ? { teacherId: studio.opts.teacherId } : sc === 'class' ? { classId: studio.cls, section: studio.sec || clsById(studio.cls).sections[0] } : { scope: sc })); }
  else if (type === 'attsheet') docs.push(...R.attsheet({ classId: studio.cls, section: studio.sec || clsById(studio.cls).sections[0], month: studio.opts.month }));
  else if (type === 'salarysheet') docs.push(...R.salarysheet({ month: studio.opts.month }));
  else if (type === 'ledger') docs.push(...R.ledger({ month: studio.opts.month }));

  const sheets = [];
  if (dt.unit === 'A4') { docs.forEach(d => sheets.push(`<div class="sheet ${studio.orient === 'l' ? 'land' : ''}">${d}</div>`)); sheets.orient = studio.orient; }
  else if (dt.unit === 'A5') {
    const sheetLand = studio.orient === 'p'; // পোর্ট্রেট A5 হলে A4 ল্যান্ডস্কেপে পাশাপাশি
    for (let i = 0; i < docs.length; i += 2) sheets.push(`<div class="sheet ${sheetLand ? 'land split-h' : 'split-v'}"><div class="slot">${docs[i]}</div><div class="slot ${docs[i + 1] ? '' : 'blank'}">${docs[i + 1] || ''}</div><span class="cut">✂ এখানে কাটুন</span></div>`);
    sheets.orient = sheetLand ? 'l' : 'p';
  } else { for (let i = 0; i < docs.length; i += 9) sheets.push(`<div class="sheet cards">${docs.slice(i, i + 9).join('')}</div>`); sheets.orient = 'p'; }
  return sheets;
}
function paintStage(sheets) {
  const stage = $('#stage'); if (!stage) return;
  if (!sheets.length) { stage.innerHTML = `<div class="empty" style="color:#e5e8ef">${ic('docs')}<div>${!Store.all('exams').length && ['admit', 'transcript', 'tabulation'].includes(studio.type) ? 'আগে একটি পরীক্ষা যোগ করুন' : 'বাম পাশ থেকে বাছাই করুন'}</div></div>`; return; }
  const land = sheets.orient === 'l', w = (land ? 297 : 210) * MM, h = (land ? 210 : 297) * MM;
  const avail = Math.min(stage.clientWidth - 56, 980), k = Math.min(1, avail / w);
  const shown = sheets.slice(0, 40);
  stage.innerHTML = shown.map(s => `<div class="sheet-holder" style="width:${w * k}px;height:${h * k}px"><div style="transform:scale(${k});transform-origin:0 0;width:${w}px;height:${h}px">${s}</div></div>`).join('') +
    (sheets.length > shown.length ? `<div style="color:#e5e8ef" class="small-t">প্রিভিউতে প্রথম ${Fmt.n(shown.length)} পাতা দেখানো হচ্ছে, প্রিন্ট ও PDF-এ সব ${Fmt.n(sheets.length)} পাতা থাকবে</div>` : '');
}

/* ---------- প্রিন্ট ও PDF ---------- */
function setPageStyle(orient) { let st = $('#pageStyle'); if (!st) { st = document.createElement('style'); st.id = 'pageStyle'; document.head.appendChild(st); } st.textContent = `@page{size:A4 ${orient === 'l' ? 'landscape' : 'portrait'};margin:0}`; }
async function doPrint() {
  const sheets = studio.sheets || []; if (!sheets.length) return UI.toast('ছাপার মতো কিছু বাছাই করা হয়নি', 'warn');
  $('#printRoot').innerHTML = sheets.join(''); setPageStyle(sheets.orient);
  await waitImages($('#printRoot'));
  Reg.commit();
  try { window.print(); } catch (e) { UI.toast('এই পরিবেশে প্রিন্ট চালু নেই, PDF নামিয়ে প্রিন্ট করুন', 'warn'); }
  setTimeout(() => { $('#printRoot').innerHTML = ''; }, 1500);
}
function waitImages(root) { return Promise.all([...root.querySelectorAll('img')].map(i => i.complete ? 1 : new Promise(r => { i.onload = i.onerror = r; }))).then(() => document.fonts ? document.fonts.ready : 1); }
async function doPdf() {
  const sheets = studio.sheets || []; if (!sheets.length) return UI.toast('PDF বানানোর মতো কিছু বাছাই করা হয়নি', 'warn');
  if (!window.jspdf || !window.html2canvas) return UI.toast('PDF লাইব্রেরি লোড হয়নি', 'warn');
  UI.busy(true, `PDF তৈরি হচ্ছে… ০/${Fmt.n(sheets.length)}`);
  const land = sheets.orient === 'l';
  const host = document.createElement('div'); host.style.cssText = 'position:fixed;left:-20000px;top:0;z-index:-1;background:#fff'; document.body.appendChild(host);
  try {
    await (document.fonts ? document.fonts.ready : 1);
    const pdf = new jspdf.jsPDF({ orientation: land ? 'landscape' : 'portrait', unit: 'mm', format: 'a4', compress: true });
    for (let i = 0; i < sheets.length; i++) {
      host.innerHTML = sheets[i]; await waitImages(host);
      const canvas = await html2canvas(host.firstElementChild, { scale: 2.2, backgroundColor: '#ffffff', useCORS: true, logging: false });
      if (i) pdf.addPage('a4', land ? 'landscape' : 'portrait');
      pdf.addImage(canvas.toDataURL('image/jpeg', .93), 'JPEG', 0, 0, land ? 297 : 210, land ? 210 : 297);
      UI.busy(true, `PDF তৈরি হচ্ছে… ${Fmt.n(i + 1)}/${Fmt.n(sheets.length)}`);
    }
    Reg.commit();
    const name = `${DOC_TYPES[studio.type].pfx.toLowerCase()}-${todayISO()}.pdf`;
    const blob = pdf.output('blob');
    if (!UI.download(name, blob, 'application/pdf')) UI.toast('এই পরিবেশে ডাউনলোড চালু নেই, নিজের সাইটে খুললে কাজ করবে', 'warn');
    else UI.toast(`${name} নামানো হয়েছে`);
  } catch (e) { console.error(e); UI.toast('PDF তৈরি করা গেল না', 'warn'); }
  host.remove(); UI.busy(false);
}
