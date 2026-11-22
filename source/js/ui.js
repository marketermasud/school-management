/* ---------- আইকন (Lucide) ---------- */
const ICONS = {
  dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  students: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  teachers: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  attendance: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  routine: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  exam: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/>',
  fee: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M6 15h4"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  salary: '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/>',
  notice: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  library: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  docs: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8M16 13H8M16 17H8"/>',
  register: '<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18"/>',
  settings: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  edit: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
  trash: '<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  alert: '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  print: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
  gift: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3M12 8v3M17 8v3"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  school: '<path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17"/><path d="m4 6 8-4 8 4"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1"/>',
  pin: '<line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>',
  arrowUp: '<path d="m5 12 7-7 7 7M12 19V5"/>',
  receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 17.5v-11"/>',
  id: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2M15 12h2M7 16h10"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  arrowLeft: '<path d="m12 19-7-7 7-7M19 12H5"/>'
};
const ic = (n, cls = '') => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ''}</svg>`;

/* ---------- ফরম্যাট ---------- */
const BN = '০১২৩৪৫৬৭৮৯';
const Fmt = {
  n: v => Number(v || 0).toLocaleString('bn-BD'),
  tk: v => '৳' + Number(v || 0).toLocaleString('bn-BD'),
  pct: v => Number(v || 0).toLocaleString('bn-BD', { maximumFractionDigits: 1 }) + '%',
  gpa: v => Number(v || 0).toFixed(2).replace(/[0-9]/g, d => BN[d]),
  bd: v => String(v ?? '').replace(/[0-9]/g, d => BN[d]),
  en: v => String(v ?? '').replace(/[০-৯]/g, d => BN.indexOf(d)),
  iso: d => { const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000); return z.toISOString().slice(0, 10); },
  date: s => s ? new Date(s + 'T00:00').toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }) : '—',
  dateN: s => s ? Fmt.bd(s.split('-').reverse().join('/')) : '—',
  dateS: s => s ? new Date(s + 'T00:00').toLocaleDateString('bn-BD', { day: 'numeric', month: 'short' }) : '—',
  day: s => new Date(s + 'T00:00').toLocaleDateString('bn-BD', { weekday: 'long' }),
  month: (y, m) => new Date(y, m, 1).toLocaleDateString('bn-BD', { month: 'long', year: 'numeric' }),
  ym: ym => { const [y, m] = ym.split('-').map(Number); return Fmt.month(y, m - 1); },
  monS: ym => { const [y, m] = ym.split('-').map(Number); return new Date(y, m - 1, 1).toLocaleDateString('bn-BD', { month: 'short' }); },
  initials: s => (s || '?').replace(/^(মোঃ|মোছাঃ|মাওলানা)\s*/, '').trim().charAt(0) || '?',
  age: dob => { if (!dob) return ''; const d = new Date(dob), t = new Date(); let a = t.getFullYear() - d.getFullYear(); if (t < new Date(t.getFullYear(), d.getMonth(), d.getDate())) a--; return a; },
  time: t => { if (!t) return ''; const [h, m] = t.split(':').map(Number); const hh = ((h + 11) % 12) + 1; return Fmt.bd(`${hh}:${String(m).padStart(2, '0')}`); }
};
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- UI helpers ---------- */
const UI = {
  toast(msg, kind = 'ok') {
    const host = $('#toasts'); if (!host) return;
    const t = document.createElement('div'); t.className = 'toast-x';
    t.innerHTML = (kind === 'ok' ? ic('check') : ic('alert')) + `<span>${esc(msg)}</span>`;
    host.appendChild(t);
    setTimeout(() => { t.style.transition = 'opacity .2s'; t.style.opacity = 0; setTimeout(() => t.remove(), 220); }, 2800);
  },
  success(title, sub = '', amount = '') {
    const el = document.createElement('div'); el.className = 'succ';
    el.innerHTML = `<div class="sb"><svg viewBox="0 0 84 84"><circle class="c1" cx="42" cy="42" r="40"/><circle class="c2" cx="42" cy="42" r="38"/><path class="ck" d="M27 43 l10 10 l20 -22"/></svg><h4>${esc(title)}</h4>${amount ? `<div class="amt num">${esc(amount)}</div>` : ''}${sub ? `<p>${esc(sub)}</p>` : ''}</div>`;
    document.body.appendChild(el);
    const close = () => { if (!el.isConnected) return; el.classList.add('out'); setTimeout(() => el.remove(), 250); };
    el.onclick = close; setTimeout(close, amount ? 2100 : 1600);
  },
  busy(on, text = 'তৈরি হচ্ছে…') {
    let b = $('#busy');
    if (on && !b) { b = document.createElement('div'); b.id = 'busy'; b.className = 'busy'; b.innerHTML = `<div class="bx"><span class="spin"></span><span>${esc(text)}</span></div>`; document.body.appendChild(b); }
    else if (on) b.querySelector('span:last-child').textContent = text;
    if (!on && b) b.remove();
  },
  modal({ title, body, foot = '', size = '', onMount, cls = '' }) {
    const m = document.createElement('div');
    m.className = 'modal-x ' + cls;
    m.innerHTML = `<div class="scrim"></div><div class="box ${size}" role="dialog" aria-modal="true">
      ${title ? `<div class="mh"><h3>${title}</h3><button class="btn btn-quiet btn-icon" data-close aria-label="বন্ধ">${ic('x')}</button></div>` : ''}
      <div class="mb-wrap">${body}</div>${foot ? `<div class="mf">${foot}</div>` : ''}</div>`;
    document.body.appendChild(m);
    const close = () => { if (m.classList.contains('closing')) return; m.classList.add('closing'); setTimeout(() => { m.remove(); m.dispatchEvent(new Event('closed')); }, 150); document.removeEventListener('keydown', onKey); };
    const onKey = e => { if (e.key === 'Escape' && document.querySelectorAll('.modal-x:not(.closing)')[document.querySelectorAll('.modal-x:not(.closing)').length - 1] === m) close(); };
    document.addEventListener('keydown', onKey);
    m.querySelector('.scrim').onclick = close;
    $$('[data-close]', m).forEach(b => b.onclick = close);
    m.close = close;
    onMount && onMount(m, close);
    const f = m.querySelector('input:not([type=hidden]):not([type=file]):not([type=checkbox]),select,textarea');
    if (f && !cls.includes('nofocus') && window.innerWidth > 760) setTimeout(() => f.focus(), 60);
    return m;
  },
  confirm(text, okLabel = 'মুছে ফেলুন', danger = true) {
    return new Promise(res => {
      let done = false;
      const m = UI.modal({
        title: 'নিশ্চিত করুন', size: 'sm', cls: 'nofocus', body: `<div class="mb"><p class="sec mb-0">${text}</p></div>`,
        foot: `<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn ${danger ? 'btn-danger' : 'btn-primary'}" data-ok>${okLabel}</button>`,
        onMount: (m, close) => { m.querySelector('[data-ok]').onclick = () => { done = true; close(); res(true); }; }
      });
      m.addEventListener('closed', () => { if (!done) res(false); });
    });
  },
  tween(el, to, dur = 800, fmt) {
    const t0 = performance.now(), f = fmt || (el.dataset.f === 'pct' ? v => Fmt.pct(Math.round(v * 10) / 10) : el.dataset.f === 'tk' ? v => Fmt.tk(Math.round(v)) : v => Fmt.n(Math.round(v)));
    const step = now => { const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = f(to * e); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  },
  tip: { show(text, x, y) { const el = $('#tip'); if (!el) return; el.textContent = text; el.style.left = (x + 12) + 'px'; el.style.top = (y - 36) + 'px'; el.style.opacity = 1; }, hide() { const el = $('#tip'); if (el) el.style.opacity = 0; } },
  bindTips(root) { $$('[data-tip]', root).forEach(c => { c.onmousemove = e => c.dataset.tip && UI.tip.show(c.dataset.tip, e.clientX, e.clientY); c.onmouseleave = () => UI.tip.hide(); }); },
  readImage(file, max = 300, type = 'image/jpeg') {
    return new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onload = () => {
        const img = new Image();
        img.onload = () => {
          const k = Math.min(1, max / Math.max(img.width, img.height));
          const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          res(c.toDataURL(type, .85));
        };
        img.onerror = rej; img.src = fr.result;
      };
      fr.onerror = rej; fr.readAsDataURL(file);
    });
  },
  avatar(name, photo, cls = '', g) { return `<span class="avatar ${cls} ${g === 'F' ? 'f' : ''}">${photo ? `<img src="${photo}" alt="">` : esc(Fmt.initials(name))}</span>`; },
  formData(form) { const o = {}; $$('[name]', form).forEach(i => { if (i.type === 'file') return; o[i.name] = i.type === 'checkbox' ? i.checked : i.value.trim(); }); return o; },
  download(name, data, type = 'application/json') {
    try { const a = document.createElement('a'); a.href = URL.createObjectURL(data instanceof Blob ? data : new Blob([data], { type })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); return true; }
    catch (e) { return false; }
  },
  empty(text, icon = 'list') { return `<div class="empty">${ic(icon)}<div>${text}</div></div>`; },
  sel(name, label, opts, val, col = 'col-md-6', attrs = '') {
    return `<div class="${col}"><label class="form-label">${label}</label><select class="form-select" name="${name}" ${attrs}>${opts.map(o => { const [v, t] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(v)}" ${String(v) === String(val ?? '') ? 'selected' : ''}>${esc(t)}</option>`; }).join('')}</select></div>`;
  },
  inp(name, label, val = '', attrs = '', col = 'col-md-6') { return `<div class="${col}"><label class="form-label">${label}</label><input class="form-control" name="${name}" value="${esc(val ?? '')}" ${attrs}></div>`; }
};
