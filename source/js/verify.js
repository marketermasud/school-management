/* QR যাচাই পাতা — লাইভে অনলাইন রেকর্ড, ডেমোতে এই ব্রাউজারের নমুনা রেকর্ড */
const TYPES = { admit: 'প্রবেশপত্র', testimonial: 'প্রশংসাপত্র', transcript: 'একাডেমিক ট্রান্সক্রিপ্ট', tabulation: 'ফলাফল শিট', tc: 'ছাড়পত্র', idcard: 'শিক্ষার্থী আইডি কার্ড', staffid: 'শিক্ষক-কর্মচারী আইডি কার্ড', receipt: 'ফি রসিদ', routine: 'ক্লাস রুটিন', attsheet: 'হাজিরা খাতা', notice: 'নোটিশ', salarysheet: 'বেতন শিট', ledger: 'আয়-ব্যয় প্রতিবেদন' };
(async () => {
  const box = document.getElementById('v');
  const raw = decodeURIComponent(location.hash.slice(1) || ''), demo = raw.startsWith('demo:'), serial = demo ? raw.slice(5) : raw;
  const show = (cls, icon, title, rec, note, school) => {
    const rows = rec ? [['ডকুমেন্ট', TYPES[rec.t] || rec.t], ['ক্রমিক নং', serial], ['নাম', rec.n], ['আইডি', rec.i], ['বিবরণ', rec.x], ['ইস্যুর তারিখ', rec.d ? Fmt.date(rec.d) : '']].filter(r => r[1]) : [['ক্রমিক নং', serial]];
    box.innerHTML = `<div class="vtop"><span class="logo-mark">${school && school.logo ? `<img src="${school.logo}" alt="">` : ic('shield')}</span><div><div style="font-weight:500;font-size:17px">${esc(school && school.name || 'ডকুমেন্ট যাচাই')}</div><div class="muted small-t">${esc(school && school.e ? 'EIIN ' + Fmt.bd(school.e) : 'স্কুল ম্যানেজমেন্ট সিস্টেম')}</div></div></div>
      <div class="vbadge ${cls}"><span class="vtick">${ic(icon)}</span><span>${title}</span></div>
      <div class="vbody"><dl class="kv">${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(Fmt.bd(v))}</dd>`).join('')}</dl>${note ? `<p class="muted small-t mt-3 mb-0">${esc(note)}</p>` : ''}</div>`;
  };
  if (!serial) return show('bad', 'alert', 'QR কোডটি পড়া যায়নি', null, 'লিংকটি অসম্পূর্ণ। ডকুমেন্টের QR আবার স্ক্যান করুন');
  box.innerHTML = `<div class="vbody text-center sec" style="padding:48px"><span class="spin" style="display:inline-block;border-color:var(--line-2);border-top-color:var(--primary)"></span><div class="mt-2">যাচাই করা হচ্ছে…</div></div>`;
  try {
    if (demo) {
      const db = await Store.idbGet('demo_v2');
      const d = db && ((db.documents || []).find(x => x.serial === serial));
      const p = db && (db.payments || []).find(x => x.receiptNo === serial);
      const rec = d ? { t: d.type, n: d.name, i: d.sid, d: d.issuedAt, x: d.info } : p ? { t: 'receipt', n: ((db.students || []).find(s => s.id === p.studentId) || {}).nameBn, d: p.date, x: '৳' + p.total } : null;
      const sc = db ? { name: db.settings.school.name, logo: db.settings.school.logo, e: db.settings.school.eiin } : null;
      return rec ? show('warn', 'check', 'ডেমো ডকুমেন্ট: নমুনা রেকর্ডে পাওয়া গেছে', rec, 'এটি ডেমো মোডে তৈরি নমুনা ডকুমেন্ট, আসল নয়', sc) : show('bad', 'alert', 'রেকর্ডে পাওয়া যায়নি', null, 'ডেমোর তথ্য শুধু যে ব্রাউজারে ডেমো চালানো হয়েছে সেখানেই থাকে', sc);
    }
    if (!Cloud.init()) throw new Error('offline');
    const rec = await Cloud.verify(serial);
    if (rec) show('ok', 'check', 'যাচাই সম্পন্ন: ডকুমেন্টটি আসল', rec, 'এই ডকুমেন্ট স্কুলের অনলাইন রেকর্ডে নিবন্ধিত আছে। ডকুমেন্টের লেখার সাথে উপরের তথ্য মিলিয়ে নিন', { name: rec.s, e: rec.e });
    else show('bad', 'alert', 'রেকর্ডে পাওয়া যায়নি', null, 'এই ক্রমিক নম্বরের কোনো ডকুমেন্ট স্কুলের রেকর্ডে নেই। ডকুমেন্টটি নকল হতে পারে, স্কুলে যোগাযোগ করুন');
  } catch (e) { show('bad', 'alert', 'এখন যাচাই করা যাচ্ছে না', null, 'ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন'); }
})();
