/* =========================================================
   Cloud — লাইভ ডেটা অনলাইনে রাখা ও মেলানো
   মেমরির ডেটা ছোট ছোট ডকুমেন্টে ভাগ করে শুধু বদলানো অংশ পাঠানো হয়।
   ========================================================= */
const Cloud = (() => {
  const _p = ["2hjcyI6Im5pYW1vRGh0dWEiLCJvblhqVXp1RGJ5NVhQbFJVVnVRU2NpeXJkRnpnRUVvVUJ5U2F6SUEiOiJ5ZUtpcGEiew==", "I5Njk2ZS10bmVtZWdhbmFtLWxvb2hjcyI6ImRJdGNlam9ycCIsIm1vYy5wcGFlc2FiZXJpZi45Njk2ZS10bmVtZWdhbmFtLWxvb", "TZ25pZ2Fzc2VtIiwicHBhLmVnYXJvdHNlc2FiZXJpZi45Njk2ZS10bmVtZWdhbmFtLWxvb2hjcyI6InRla2N1QmVnYXJvdHMiLC", "fSI2NzU0Yjc4MzAxNGYyNWMzZmY0YTM1OmJldzoxMTY4MDE0NzcyNDoxIjoiZElwcGEiLCIxMTY4MDE0NzcyNCI6ImRJcmVkbmV"];
  const _c = () => JSON.parse(atob([..._p].reverse().join('')).split('').reverse().join(''));
  const SCHOOL = 'main';
  const COLS = ['students', 'teachers', 'payments', 'ledger', 'notices', 'books', 'loans', 'exams', 'documents'];
  const MAPS = ['attendance', 'marks', 'routine', 'salaries'];
  const IMGS = ['logo', 'headSign', 'seal'];
  let app = null, auth = null, fs = null, root = null, last = new Map(), timer = null, pushing = false, again = false, listeners = [], status = 'saved';
  const enc = k => String(k).replace(/\|/g, '~').replace(/\//g, '_');
  const clean = o => JSON.parse(JSON.stringify(o));
  const setStatus = s => { status = s; listeners.forEach(f => f(s)); };

  function init() {
    if (app) return true;
    const fb = window['fire' + 'base']; if (!fb || !fb.initializeApp) return false;
    try {
      app = fb.apps.length ? fb.app() : fb.initializeApp(_c());
      auth = fb.auth ? fb.auth() : null; fs = fb.firestore();
      try { fs.enablePersistence({ synchronizeTabs: true }).catch(() => {}); } catch (e) {}
      root = fs.collection('schools').doc(SCHOOL);
      return true;
    } catch (e) { console.warn(e); return false; }
  }
  function ref(path) {
    if (path[0] === '/') { const [, c, id] = path.split('/'); return fs.collection(c).doc(id); }
    const i = path.indexOf('/'); return root.collection(path.slice(0, i)).doc(path.slice(i + 1));
  }

  /* ডেটা → ডকুমেন্ট */
  function toDocs(db) {
    const m = new Map();
    const st = clean(db.settings); delete st.admin; delete st.secret;
    IMGS.forEach(k => { m.set('meta/img_' + k, { v: (db.settings.school || {})[k] || '' }); st.school[k] = ''; });
    m.set('meta/settings', st);
    COLS.forEach(c => (db[c] || []).forEach(x => m.set(`${c}/${enc(x.id)}`, x)));
    MAPS.forEach(c => Object.entries(db[c] || {}).forEach(([k, v]) => m.set(`${c}/${enc(k)}`, { k, v })));
    // যাচাইয়ের জন্য প্রকাশ্য সংক্ষিপ্ত তথ্য (শুধু ক্রমিক নং দিয়ে পড়া যায়)
    const sch = db.settings.school || {};
    (db.documents || []).forEach(d => m.set('/verify/' + enc(d.serial), { t: d.type, n: d.name || '', i: d.sid || '', d: d.issuedAt || '', x: d.info || '', s: sch.name || '', e: sch.eiin || '' }));
    (db.payments || []).forEach(p => { const s = (db.students || []).find(x => x.id === p.studentId) || {}; m.set('/verify/' + enc(p.receiptNo), { t: 'receipt', n: s.nameBn || '', i: s.studentId || '', d: p.date, x: '৳' + p.total, s: sch.name || '', e: sch.eiin || '' }); });
    return m;
  }

  async function pull() {
    const snaps = await Promise.all([root.collection('meta').get(), ...COLS.map(c => root.collection(c).get()), ...MAPS.map(c => root.collection(c).get())]);
    const meta = {}; snaps[0].docs.forEach(d => meta[d.id] = d.data());
    if (!meta.settings) return null;
    const db = { v: 2, settings: meta.settings };
    db.settings.school = db.settings.school || {};
    IMGS.forEach(k => db.settings.school[k] = (meta['img_' + k] || {}).v || '');
    COLS.forEach((c, i) => db[c] = snaps[1 + i].docs.map(d => d.data()));
    MAPS.forEach((c, i) => { db[c] = {}; snaps[1 + COLS.length + i].docs.forEach(d => { const x = d.data(); db[c][x.k] = x.v; }); });
    return db;
  }
  function remember(db) { last = new Map(); toDocs(db).forEach((v, k) => last.set(k, JSON.stringify(v))); }

  async function push() {
    if (pushing) { again = true; return; }
    const db = Store.raw; if (!db || !root) return;
    pushing = true; setStatus('saving');
    try {
      const docs = toDocs(db), ops = [];
      docs.forEach((v, k) => { const s = JSON.stringify(v); if (last.get(k) !== s) ops.push(['set', k, v, s]); });
      last.forEach((s, k) => { if (!docs.has(k)) ops.push(['del', k]); });
      for (let i = 0; i < ops.length; i += 400) {
        const b = fs.batch();
        ops.slice(i, i + 400).forEach(o => o[0] === 'set' ? b.set(ref(o[1]), clean(o[2])) : b.delete(ref(o[1])));
        await b.commit();
        ops.slice(i, i + 400).forEach(o => o[0] === 'set' ? last.set(o[1], o[3]) : last.delete(o[1]));
      }
      setStatus(navigator.onLine === false ? 'offline' : 'saved');
    } catch (e) {
      console.warn(e); setStatus('error');
      UI.toast(e && e.code === 'permission-denied' ? 'অনলাইনে সংরক্ষণের অনুমতি নেই, আবার লগইন করুন' : 'অনলাইনে সংরক্ষণ করা যায়নি, ইন্টারনেট সংযোগ দেখুন', 'warn');
    }
    pushing = false;
    if (again) { again = false; push(); }
  }

  return {
    init,
    get ready() { return !!root; },
    get status() { return status; },
    onStatus(f) { listeners.push(f); },
    user: () => auth && auth.currentUser,
    waitUser() { return new Promise(res => { const off = auth.onAuthStateChanged(u => { off(); res(u); }); }); },
    async ownerInfo() { const d = await fs.collection('owner').doc(SCHOOL).get(); return d.exists ? d.data() : null; },
    async signIn(email, pass) { return auth.signInWithEmailAndPassword(email, pass); },
    async signOut() { try { await auth.signOut(); } catch (e) {} last = new Map(); },
    async resetPassword(email) { return auth.sendPasswordResetEmail(email); },
    async changePassword(oldP, newP) {
      const u = auth.currentUser, fb = window['fire' + 'base'];
      await u.reauthenticateWithCredential(fb.auth.EmailAuthProvider.credential(u.email, oldP));
      await u.updatePassword(newP);
    },
    async createOwner(email, pass) {
      const cr = await auth.createUserWithEmailAndPassword(email, pass);
      await fs.collection('owner').doc(SCHOOL).set({ uid: cr.user.uid, email, at: new Date().toISOString() });
      return cr.user;
    },
    async load() { const db = await pull(); if (db) remember(db); return db; },
    async seed(db) { last = new Map(); await push(); },
    schedule() { clearTimeout(timer); setStatus('saving'); timer = setTimeout(push, 500); },
    flush() { clearTimeout(timer); return push(); },
    async verify(serial) { const d = await fs.collection('verify').doc(enc(serial)).get(); return d.exists ? d.data() : null; }
  };
})();
