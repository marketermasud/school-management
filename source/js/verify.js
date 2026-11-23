(() => {
  "use strict";
  const ne = {
      dashboard:
        '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
      students: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
      teachers:
        '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      attendance:
        '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
      routine:
        '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
      exam: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/>',
      fee: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M6 15h4"/>',
      wallet:
        '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
      salary: '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/>',
      notice:
        '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
      library:
        '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
      docs: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8M16 13H8M16 17H8"/>',
      register: '<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18"/>',
      settings:
        '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
      search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
      plus: '<path d="M5 12h14M12 5v14"/>',
      edit: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
      trash: '<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
      x: '<path d="M18 6 6 18M6 6l12 12"/>',
      logout:
        '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
      menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
      calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
      download:
        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
      upload:
        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
      check: '<path d="M20 6 9 17l-5-5"/>',
      alert:
        '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
      copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
      chevron: '<path d="m9 18 6-6-6-6"/>',
      print:
        '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
      gift: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3M12 8v3M17 8v3"/>',
      lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      database:
        '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
      school:
        '<path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17"/><path d="m4 6 8-4 8 4"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/>',
      layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
      list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
      moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
      qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1"/>',
      pin: '<line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>',
      arrowUp: '<path d="m5 12 7-7 7 7M12 19V5"/>',
      receipt:
        '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 17.5v-11"/>',
      id: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2M15 12h2M7 16h10"/>',
      award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
      palette:
        '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
      clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      shield:
        '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
      trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
      arrowLeft: '<path d="m12 19-7-7 7-7M19 12H5"/>',
    },
    G = (e, n = "") => `<svg class="ico ${n}" viewBox="0 0 24 24" aria-hidden="true">${ne[e] || ""}</svg>`,
    se = "০১২৩৪৫৬৭৮৯",
    T = {
      n: (e) => Number(e || 0).toLocaleString("bn-BD"),
      tk: (e) => "৳" + Number(e || 0).toLocaleString("bn-BD"),
      pct: (e) => Number(e || 0).toLocaleString("bn-BD", { maximumFractionDigits: 1 }) + "%",
      gpa: (e) =>
        Number(e || 0)
          .toFixed(2)
          .replace(/[0-9]/g, (n) => se[n]),
      bd: (e) => String(e != null ? e : "").replace(/[0-9]/g, (n) => se[n]),
      en: (e) => String(e != null ? e : "").replace(/[০-৯]/g, (n) => se.indexOf(n)),
      iso: (e) => new Date(e.getTime() - e.getTimezoneOffset() * 6e4).toISOString().slice(0, 10),
      date: (e) =>
        e
          ? /* @__PURE__ */ new Date(e + "T00:00").toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "—",
      dateN: (e) => (e ? T.bd(e.split("-").reverse().join("/")) : "—"),
      dateS: (e) =>
        e
          ? /* @__PURE__ */ new Date(e + "T00:00").toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "short",
            })
          : "—",
      day: (e) => /* @__PURE__ */ new Date(e + "T00:00").toLocaleDateString("bn-BD", { weekday: "long" }),
      month: (e, n) => new Date(e, n, 1).toLocaleDateString("bn-BD", { month: "long", year: "numeric" }),
      ym: (e) => {
        const [n, t] = e.split("-").map(Number);
        return T.month(n, t - 1);
      },
      monS: (e) => {
        const [n, t] = e.split("-").map(Number);
        return new Date(n, t - 1, 1).toLocaleDateString("bn-BD", { month: "short" });
      },
      initials: (e) =>
        (e || "?")
          .replace(/^(মোঃ|মোছাঃ|মাওলানা)\s*/, "")
          .trim()
          .charAt(0) || "?",
      age: (e) => {
        if (!e) return "";
        const n = new Date(e),
          t = /* @__PURE__ */ new Date();
        let c = t.getFullYear() - n.getFullYear();
        return (t < new Date(t.getFullYear(), n.getMonth(), n.getDate()) && c--, c);
      },
      time: (e) => {
        if (!e) return "";
        const [n, t] = e.split(":").map(Number),
          c = ((n + 11) % 12) + 1;
        return T.bd(`${c}:${String(t).padStart(2, "0")}`);
      },
    },
    V = (e) =>
      String(e != null ? e : "").replace(
        /[&<>"']/g,
        (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n],
      ),
    Q = (e, n = document) => n.querySelector(e),
    ae = (e, n = document) => [...n.querySelectorAll(e)],
    K = {
      toast(e, n = "ok") {
        const t = Q("#toasts");
        if (!t) return;
        const c = document.createElement("div");
        ((c.className = "toast-x"),
          (c.innerHTML = G(n === "ok" ? "check" : "alert") + `<span>${V(e)}</span>`),
          t.appendChild(c),
          setTimeout(() => {
            ((c.style.transition = "opacity .2s"), (c.style.opacity = 0), setTimeout(() => c.remove(), 220));
          }, 2800));
      },
      success(e, n = "", t = "") {
        const c = document.createElement("div");
        ((c.className = "succ"),
          (c.innerHTML = `<div class="sb"><svg viewBox="0 0 84 84"><circle class="c1" cx="42" cy="42" r="40"/><circle class="c2" cx="42" cy="42" r="38"/><path class="ck" d="M27 43 l10 10 l20 -22"/></svg><h4>${V(e)}</h4>${t ? `<div class="amt num">${V(t)}</div>` : ""}${n ? `<p>${V(n)}</p>` : ""}</div>`),
          document.body.appendChild(c));
        const k = () => {
          c.isConnected && (c.classList.add("out"), setTimeout(() => c.remove(), 250));
        };
        ((c.onclick = k), setTimeout(k, t ? 2100 : 1600));
      },
      busy(e, n = "তৈরি হচ্ছে…") {
        let t = Q("#busy");
        (e && !t
          ? ((t = document.createElement("div")),
            (t.id = "busy"),
            (t.className = "busy"),
            (t.innerHTML = `<div class="bx"><span class="spin"></span><span>${V(n)}</span></div>`),
            document.body.appendChild(t))
          : e && (t.querySelector("span:last-child").textContent = n),
          !e && t && t.remove());
      },
      modal({ title: e, body: n, foot: t = "", size: c = "", onMount: k, cls: w = "" }) {
        const u = document.createElement("div");
        ((u.className = "modal-x " + w),
          (u.innerHTML = `<div class="scrim"></div><div class="box ${c}" role="dialog" aria-modal="true">
      ${e ? `<div class="mh"><h3>${e}</h3><button class="btn btn-quiet btn-icon" data-close aria-label="বন্ধ">${G("x")}</button></div>` : ""}
      <div class="mb-wrap">${n}</div>${t ? `<div class="mf">${t}</div>` : ""}</div>`),
          document.body.appendChild(u));
        const p = () => {
            u.classList.contains("closing") ||
              (u.classList.add("closing"),
              setTimeout(() => {
                (u.remove(), u.dispatchEvent(new Event("closed")));
              }, 150),
              document.removeEventListener("keydown", g));
          },
          g = (y) => {
            y.key === "Escape" &&
              document.querySelectorAll(".modal-x:not(.closing)")[
                document.querySelectorAll(".modal-x:not(.closing)").length - 1
              ] === u &&
              p();
          };
        (document.addEventListener("keydown", g),
          (u.querySelector(".scrim").onclick = p),
          ae("[data-close]", u).forEach((y) => (y.onclick = p)),
          (u.close = p),
          k && k(u, p));
        const j = u.querySelector(
          "input:not([type=hidden]):not([type=file]):not([type=checkbox]),select,textarea",
        );
        return (j && !w.includes("nofocus") && window.innerWidth > 760 && setTimeout(() => j.focus(), 60), u);
      },
      confirm(e, n = "মুছে ফেলুন", t = true) {
        return new Promise((c) => {
          let k = false;
          K.modal({
            title: "নিশ্চিত করুন",
            size: "sm",
            cls: "nofocus",
            body: `<div class="mb"><p class="sec mb-0">${e}</p></div>`,
            foot: `<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn ${t ? "btn-danger" : "btn-primary"}" data-ok>${n}</button>`,
            onMount: (u, p) => {
              u.querySelector("[data-ok]").onclick = () => {
                ((k = true), p(), c(true));
              };
            },
          }).addEventListener("closed", () => {
            k || c(false);
          });
        });
      },
      tween(e, n, t = 800, c) {
        const k = performance.now(),
          w =
            c ||
            (e.dataset.f === "pct"
              ? (p) => T.pct(Math.round(p * 10) / 10)
              : e.dataset.f === "tk"
                ? (p) => T.tk(Math.round(p))
                : (p) => T.n(Math.round(p))),
          u = (p) => {
            const g = Math.min(1, (p - k) / t),
              j = 1 - Math.pow(1 - g, 3);
            ((e.textContent = w(n * j)), g < 1 && requestAnimationFrame(u));
          };
        requestAnimationFrame(u);
      },
      tip: {
        show(e, n, t) {
          const c = Q("#tip");
          c &&
            ((c.textContent = e),
            (c.style.left = n + 12 + "px"),
            (c.style.top = t - 36 + "px"),
            (c.style.opacity = 1));
        },
        hide() {
          const e = Q("#tip");
          e && (e.style.opacity = 0);
        },
      },
      bindTips(e) {
        ae("[data-tip]", e).forEach((n) => {
          ((n.onmousemove = (t) => n.dataset.tip && K.tip.show(n.dataset.tip, t.clientX, t.clientY)),
            (n.onmouseleave = () => K.tip.hide()));
        });
      },
      readImage(e, n = 300, t = "image/jpeg") {
        return new Promise((c, k) => {
          const w = new FileReader();
          ((w.onload = () => {
            const u = new Image();
            ((u.onload = () => {
              const p = Math.min(1, n / Math.max(u.width, u.height)),
                g = document.createElement("canvas");
              ((g.width = Math.round(u.width * p)),
                (g.height = Math.round(u.height * p)),
                g.getContext("2d").drawImage(u, 0, 0, g.width, g.height),
                c(g.toDataURL(t, 0.85)));
            }),
              (u.onerror = k),
              (u.src = w.result));
          }),
            (w.onerror = k),
            w.readAsDataURL(e));
        });
      },
      avatar(e, n, t = "", c) {
        return `<span class="avatar ${t} ${c === "F" ? "f" : ""}">${n ? `<img src="${n}" alt="">` : V(T.initials(e))}</span>`;
      },
      formData(e) {
        const n = {};
        return (
          ae("[name]", e).forEach((t) => {
            t.type !== "file" && (n[t.name] = t.type === "checkbox" ? t.checked : t.value.trim());
          }),
          n
        );
      },
      download(e, n, t = "application/json") {
        try {
          const c = document.createElement("a");
          return (
            (c.href = URL.createObjectURL(n instanceof Blob ? n : new Blob([n], { type: t }))),
            (c.download = e),
            document.body.appendChild(c),
            c.click(),
            setTimeout(() => {
              (URL.revokeObjectURL(c.href), c.remove());
            }, 1e3),
            true
          );
        } catch {
          return false;
        }
      },
      empty(e, n = "list") {
        return `<div class="empty">${G(n)}<div>${e}</div></div>`;
      },
      sel(e, n, t, c, k = "col-md-6", w = "") {
        return `<div class="${k}"><label class="form-label">${n}</label><select class="form-select" name="${e}" ${w}>${t
          .map((u) => {
            const [p, g] = Array.isArray(u) ? u : [u, u];
            return `<option value="${V(p)}" ${String(p) === String(c != null ? c : "") ? "selected" : ""}>${V(g)}</option>`;
          })
          .join("")}</select></div>`;
      },
      inp(e, n, t = "", c = "", k = "col-md-6") {
        return `<div class="${k}"><label class="form-label">${n}</label><input class="form-control" name="${e}" value="${V(t != null ? t : "")}" ${c}></div>`;
      },
    },
    F = /* @__PURE__ */ (() => {
      const e = [
          "2hjcyI6Im5pYW1vRGh0dWEiLCJvblhqVXp1RGJ5NVhQbFJVVnVRU2NpeXJkRnpnRUVvVUJ5U2F6SUEiOiJ5ZUtpcGEiew==",
          "I5Njk2ZS10bmVtZWdhbmFtLWxvb2hjcyI6ImRJdGNlam9ycCIsIm1vYy5wcGFlc2FiZXJpZi45Njk2ZS10bmVtZWdhbmFtLWxvb",
          "TZ25pZ2Fzc2VtIiwicHBhLmVnYXJvdHNlc2FiZXJpZi45Njk2ZS10bmVtZWdhbmFtLWxvb2hjcyI6InRla2N1QmVnYXJvdHMiLC",
          "fSI2NzU0Yjc4MzAxNGYyNWMzZmY0YTM1OmJldzoxMTY4MDE0NzcyNDoxIjoiZElwcGEiLCIxMTY4MDE0NzcyNCI6ImRJcmVkbmV",
        ],
        n = () =>
          JSON.parse(
            atob([...e].reverse().join(""))
              .split("")
              .reverse()
              .join(""),
          ),
        t = "main",
        c = ["logo", "headSign", "seal"],
        k = {
          admin: {
            cols: [
              "students",
              "teachers",
              "payments",
              "ledger",
              "notices",
              "books",
              "loans",
              "exams",
              "documents",
              "requests",
              "log",
            ],
            maps: ["attendance", "marks", "routine", "salaries"],
          },
          teacher: {
            cols: ["students", "teachers", "payments", "notices", "exams", "documents"],
            maps: ["attendance", "marks", "routine"],
          },
        },
        w = [
          "students/",
          "attendance/",
          "marks/",
          "payments/",
          "documents/",
          "log/",
          "requests/",
          "/verify/",
        ];
      let u = null,
        p = null,
        g = null,
        j = null,
        y = null,
        b = null,
        O = /* @__PURE__ */ new Map(),
        R = null,
        C = false,
        U = false,
        Y = [],
        r = "saved",
        i = "admin",
        a = 0,
        f = null;
      const E = (o) => String(o).replace(/\|/g, "~").replace(/\//g, "_"),
        L = (o) => JSON.parse(JSON.stringify(o)),
        q = (o) => {
          ((r = o), Y.forEach((h) => h(o)));
        };
      function P() {
        if (u) return true;
        const o = window.firebase;
        if (!o || !o.initializeApp) return false;
        try {
          ((u = o.apps.length ? o.app() : o.initializeApp(n())),
            (p = o.auth ? o.auth() : null),
            (g = o.firestore()),
            (y = o.firestore.FieldValue),
            (b = o.firestore.Timestamp));
          try {
            g.enablePersistence({ synchronizeTabs: true }).catch(() => {});
          } catch {}
          return ((j = g.collection("schools").doc(t)), true);
        } catch (h) {
          return (console.warn(h), false);
        }
      }
      function s(o) {
        if (o[0] === "/") {
          const [, v, D] = o.split("/");
          return g.collection(v).doc(D);
        }
        const h = o.indexOf("/");
        return j.collection(o.slice(0, h)).doc(o.slice(h + 1));
      }
      function d(o) {
        const h = /* @__PURE__ */ new Map(),
          v = L(o.settings);
        (delete v.admin,
          delete v.secret,
          c.forEach((l) => {
            (h.set("meta/img_" + l, { v: (o.settings.school || {})[l] || "" }), (v.school[l] = ""));
          }),
          h.set("meta/settings", v),
          [
            "students",
            "payments",
            "ledger",
            "notices",
            "books",
            "loans",
            "exams",
            "documents",
            "requests",
            "log",
          ].forEach((l) => (o[l] || []).forEach((x) => h.set(`${l}/${E(x.id)}`, x))),
          (o.teachers || []).forEach((l) => {
            const { salary: x, ...m } = l;
            (h.set(`teachers/${E(l.id)}`, m), h.set(`pay/${E(l.id)}`, { v: +x || 0 }));
          }),
          Object.entries(o.attendance || {}).forEach(([l, x]) => {
            const [m, Z, J] = l.split("|"),
              z = (o.attLog || {})[l] || {};
            h.set(`attendance/${E(l)}`, {
              k: l,
              v: x,
              d: m,
              cls: `${Z}|${J}`,
              by: z.by || "",
              bn: z.bn || "",
            });
          }),
          Object.entries(o.marks || {}).forEach(([l, x]) => {
            const [m, Z] = l.split("|"),
              J = (o.students || []).find((ee) => ee.id === Z),
              z = (o.marksLog || {})[l] || {};
            h.set(`marks/${E(l)}`, {
              k: l,
              v: x,
              e: m,
              cls: J ? `${J.classId}|${J.section}` : "",
              by: z.by || "",
            });
          }),
          ["routine", "salaries"].forEach((l) =>
            Object.entries(o[l] || {}).forEach(([x, m]) => h.set(`${l}/${E(x)}`, { k: x, v: m })),
          ),
          (o.staff || []).forEach((l) => h.set("/staff/" + l.uid, l)));
        const D = o.settings.school || {};
        return (
          (o.documents || []).forEach((l) =>
            h.set("/verify/" + E(l.serial), {
              t: l.type,
              n: l.name || "",
              i: l.sid || "",
              d: l.issuedAt || "",
              x: l.info || "",
              s: D.name || "",
              e: D.eiin || "",
            }),
          ),
          (o.payments || []).forEach((l) => {
            const x = (o.students || []).find((m) => m.id === l.studentId) || {};
            h.set("/verify/" + E(l.receiptNo), {
              t: "receipt",
              n: x.nameBn || "",
              i: x.studentId || "",
              d: l.date,
              x: "৳" + l.total,
              s: D.name || "",
              e: D.eiin || "",
            });
          }),
          i !== "admin" &&
            [...h.keys()].forEach((l) => {
              w.some((x) => l.startsWith(x)) || h.delete(l);
            }),
          h
        );
      }
      const M = (o) => (o && typeof o.toMillis == "function" ? o.toMillis() : 0);
      async function $(o, h) {
        let v = j.collection(o);
        return (
          h && a > 0 && (v = v.where("u", ">", b.fromMillis(a))),
          (await v.get()).docs.map((D) => D.data())
        );
      }
      async function I(o, h) {
        const v = k[i],
          D = !!(o && o.db),
          l = await j.collection("meta").get(),
          x = {};
        if ((l.docs.forEach((S) => (x[S.id] = S.data())), !x.settings)) return null;
        const m = D ? o.db : { v: 2 };
        ((m.settings = x.settings),
          delete m.settings.u,
          (m.settings.school = m.settings.school || {}),
          c.forEach((S) => (m.settings.school[S] = (x["img_" + S] || {}).v || "")));
        let Z = a;
        const J = (S) => {
            const N = M(S.u);
            return (N > Z && (Z = N), delete S.u, S);
          },
          z = v.cols.filter((S) => S !== "requests" || i === "admin"),
          ee = await Promise.all([...z.map((S) => $(S, D)), ...v.maps.map((S) => $(S, D))]);
        if (
          (z.forEach((S, N) => {
            const H = ee[N].map(J);
            ((m[S] = D ? m[S] || [] : []),
              H.forEach((W) => {
                const te = m[S].findIndex((re) => re.id === W.id);
                W._del ? te > -1 && m[S].splice(te, 1) : te > -1 ? (m[S][te] = W) : m[S].push(W);
              }));
          }),
          v.maps.forEach((S, N) => {
            ((m[S] = D ? m[S] || {} : {}),
              ee[z.length + N].map(J).forEach((H) => {
                if (H.k) {
                  if (H._del) {
                    delete m[S][H.k];
                    return;
                  }
                  ((m[S][H.k] = H.v),
                    S === "attendance" &&
                      ((m.attLog = m.attLog || {}), (m.attLog[H.k] = { by: H.by || "", bn: H.bn || "" })),
                    S === "marks" &&
                      ((m.marksLog = m.marksLog || {}), (m.marksLog[H.k] = { by: H.by || "" })));
                }
              }));
          }),
          i === "admin")
        ) {
          const S = (await j.collection("pay").get()).docs;
          ((m._pay = {}),
            S.forEach((N) => (m._pay[N.id] = N.data().v)),
            (m.teachers || []).forEach((N) => {
              var H, W;
              return (N.salary = (W = (H = m._pay[E(N.id)]) != null ? H : N.salary) != null ? W : 0);
            }),
            (m.staff = (await g.collection("staff").get()).docs
              .map((N) => {
                const H = N.data();
                return (delete H.u, H);
              })
              .filter((N) => !N._del)));
        } else
          ((m.requests = (await j.collection("requests").where("uid", "==", h).get()).docs.map((S) => {
            const N = S.data();
            return (delete N.u, N);
          })),
            (m.staff = []));
        return (
          delete m._pay,
          ["ledger", "books", "loans", "log", "requests"].forEach((S) => (m[S] = m[S] || [])),
          ["salaries"].forEach((S) => (m[S] = m[S] || {})),
          (a = Z),
          m
        );
      }
      function _(o) {
        ((O = /* @__PURE__ */ new Map()), d(o).forEach((h, v) => O.set(v, JSON.stringify(h))));
      }
      async function B() {
        if (f && X.raw)
          try {
            await X.idbPut(f, { db: X.raw, since: a });
          } catch {}
      }
      async function A() {
        if (C) {
          U = true;
          return;
        }
        const o = X.raw;
        if (!(!o || !j)) {
          ((C = true), q("saving"));
          try {
            const h = d(o),
              v = [];
            (h.forEach((D, l) => {
              const x = JSON.stringify(D);
              O.get(l) !== x && v.push(["set", l, D, x]);
            }),
              O.forEach((D, l) => {
                h.has(l) || v.push(["del", l]);
              }));
            for (let D = 0; D < v.length; D += 400) {
              const l = g.batch();
              (v.slice(D, D + 400).forEach((x) => {
                if (x[0] === "set") {
                  const m = L(x[2]);
                  ((m.u = y.serverTimestamp()), l.set(s(x[1]), m));
                } else
                  x[1][0] === "/"
                    ? l.delete(s(x[1]))
                    : l.set(s(x[1]), {
                        _del: true,
                        k: JSON.parse(O.get(x[1]) || "{}").k || "",
                        u: y.serverTimestamp(),
                      });
              }),
                await l.commit(),
                v.slice(D, D + 400).forEach((x) => (x[0] === "set" ? O.set(x[1], x[3]) : O.delete(x[1]))));
            }
            (q(navigator.onLine === false ? "offline" : "saved"), B());
          } catch (h) {
            (console.warn(h),
              q("error"),
              K.toast(
                h && h.code === "permission-denied"
                  ? "এই কাজের অনুমতি আপনার নেই, তাই অনলাইনে সংরক্ষণ হয়নি"
                  : "অনলাইনে সংরক্ষণ করা যায়নি, ইন্টারনেট সংযোগ দেখুন",
                "warn",
              ));
          }
          ((C = false), U && ((U = false), A()));
        }
      }
      return {
        init: P,
        get ready() {
          return !!j;
        },
        get status() {
          return r;
        },
        get role() {
          return i;
        },
        onStatus(o) {
          Y.push(o);
        },
        user: () => p && p.currentUser,
        waitUser() {
          return new Promise((o) => {
            const h = p.onAuthStateChanged((v) => {
              (h(), o(v));
            });
          });
        },
        async signIn(o, h) {
          return p.signInWithEmailAndPassword(o, h);
        },
        async signOut() {
          try {
            await p.signOut();
          } catch {}
          ((O = /* @__PURE__ */ new Map()), (a = 0), (f = null));
        },
        async resetPassword(o) {
          return p.sendPasswordResetEmail(o);
        },
        async changePassword(o, h) {
          const v = p.currentUser,
            D = window.firebase;
          (await v.reauthenticateWithCredential(D.auth.EmailAuthProvider.credential(v.email, o)),
            await v.updatePassword(h));
        },
        async signUp(o, h, v) {
          const l = (await p.createUserWithEmailAndPassword(o, h)).user.uid;
          return (
            await g
              .collection("staff")
              .doc(l)
              .set({
                ...L(v),
                uid: l,
                email: o,
                status: "pending",
                classes: [],
                subjects: [],
                teacherId: "",
                at: /* @__PURE__ */ new Date().toISOString(),
                u: y.serverTimestamp(),
              }),
            l
          );
        },
        async myStaff(o) {
          const h = await g.collection("staff").doc(o).get();
          if (!h.exists) return null;
          const v = h.data();
          return (delete v.u, v);
        },
        async load(o, h) {
          ((i = o), (f = `live_${h}_${o}`));
          const v = await X.idbGet(f);
          a = (v && v.since) || 0;
          let D;
          try {
            D = await I(v, h);
          } catch (l) {
            if (v && v.db && l && l.code !== "permission-denied") ((D = v.db), q("offline"));
            else throw l;
          }
          return D;
        },
        remember: _,
        saveCache: B,
        async seed(o) {
          ((O = /* @__PURE__ */ new Map()), await A());
        },
        schedule() {
          (clearTimeout(R), q("saving"), (R = setTimeout(A, 500)));
        },
        flush() {
          return (clearTimeout(R), A());
        },
        async allocate(o, h, v) {
          const D = j.collection("counters").doc(o);
          return g.runTransaction(async (l) => {
            const x = await l.get(D),
              m = Math.max(x.exists ? x.data().n : 0, v || 0);
            return (l.set(D, { n: m + h }), m + 1);
          });
        },
        async verify(o) {
          const h = await g.collection("verify").doc(E(o)).get();
          return h.exists ? h.data() : null;
        },
      };
    })(),
    X = (() => {
      const e = "sms_highschool",
        n = "demo_v2";
      let t = null,
        c = null,
        k = null,
        w = null;
      const u = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      function p() {
        return c
          ? Promise.resolve(c)
          : new Promise((r, i) => {
              try {
                const a = indexedDB.open(e, 1);
                ((a.onupgradeneeded = () => a.result.createObjectStore("kv")),
                  (a.onsuccess = () => {
                    ((c = a.result), r(c));
                  }),
                  (a.onerror = () => i(a.error)));
              } catch (a) {
                i(a);
              }
            });
      }
      const g = (r) =>
          p()
            .then(
              (i) =>
                new Promise((a) => {
                  const f = i.transaction("kv", "readonly").objectStore("kv").get(r);
                  ((f.onsuccess = () => a(f.result || null)), (f.onerror = () => a(null)));
                }),
            )
            .catch(() => null),
        j = (r, i) =>
          p()
            .then(
              (a) =>
                new Promise((f) => {
                  const E = a.transaction("kv", "readwrite");
                  (E.objectStore("kv").put(i, r),
                    (E.oncomplete = () => f(true)),
                    (E.onerror = () => f(false)));
                }),
            )
            .catch(() => false),
        y = (r) =>
          p()
            .then(
              (i) =>
                new Promise((a) => {
                  const f = i.transaction("kv", "readwrite");
                  (f.objectStore("kv").delete(r), (f.oncomplete = a), (f.onerror = a));
                }),
            )
            .catch(() => 0);
      function b() {
        try {
          typeof syncStaffAccess == "function" && syncStaffAccess();
        } catch {}
        if (w === "live") return F.schedule();
        w === "demo" && (clearTimeout(k), (k = setTimeout(() => j(n, t), 150)));
      }
      window.addEventListener("pagehide", () => {
        (w === "demo" && k && (clearTimeout(k), j(n, t)), w === "live" && F.flush());
      });
      function O() {
        const r = (s, d, M, $) => ({
            id: "c" + s,
            order: s,
            name: d,
            short: M,
            sections: ["ক", "খ"],
            hasGroups: $,
            teacherBySection: {},
          }),
          i = [
            r(6, "ষষ্ঠ শ্রেণি", "৬ষ্ঠ", false),
            r(7, "সপ্তম শ্রেণি", "৭ম", false),
            r(8, "অষ্টম শ্রেণি", "৮ম", false),
            r(9, "নবম শ্রেণি", "৯ম", true),
            r(10, "দশম শ্রেণি", "১০ম", true),
          ],
          a = ["c6", "c7", "c8", "c9", "c10"],
          f = ["c6", "c7", "c8"],
          E = ["c9", "c10"],
          L = (s, d, M, $ = "", I) => ({
            id: "s" + d,
            name: s,
            short: I || s,
            code: d,
            classes: M,
            group: $,
            fullMarks: 100,
            passMarks: 33,
          }),
          q = [
            L("বাংলা প্রথম পত্র", "101", a, "", "বাংলা ১ম"),
            L("বাংলা দ্বিতীয় পত্র", "102", a, "", "বাংলা ২য়"),
            L("English 1st Paper", "107", a, "", "Eng 1st"),
            L("English 2nd Paper", "108", a, "", "Eng 2nd"),
            L("গণিত", "109", a),
            L("সাধারণ বিজ্ঞান", "127", f, "", "বিজ্ঞান"),
            L("বাংলাদেশ ও বিশ্বপরিচয়", "150", a, "", "বাওবি"),
            L("ধর্ম ও নৈতিক শিক্ষা", "111", a, "", "ধর্ম"),
            L("তথ্য ও যোগাযোগ প্রযুক্তি", "154", a, "", "আইসিটি"),
            L("কৃষিশিক্ষা", "134", a, "", "কৃষি"),
            L("পদার্থবিজ্ঞান", "136", E, "বিজ্ঞান", "পদার্থ"),
            L("রসায়ন", "137", E, "বিজ্ঞান"),
            L("জীববিজ্ঞান", "138", E, "বিজ্ঞান", "জীব"),
            L("উচ্চতর গণিত", "126", E, "বিজ্ঞান", "উ. গণিত"),
            L("ইতিহাস ও বিশ্বসভ্যতা", "153", E, "মানবিক", "ইতিহাস"),
            L("ভূগোল ও পরিবেশ", "110", E, "মানবিক", "ভূগোল"),
            L("পৌরনীতি ও নাগরিকতা", "140", E, "মানবিক", "পৌরনীতি"),
            L("অর্থনীতি", "141", E, "মানবিক"),
            L("হিসাববিজ্ঞান", "146", E, "ব্যবসায় শিক্ষা", "হিসাব"),
            L("ব্যবসায় উদ্যোগ", "143", E, "ব্যবসায় শিক্ষা", "ব্যবসায়"),
            L("ফিন্যান্স ও ব্যাংকিং", "152", E, "ব্যবসায় শিক্ষা", "ফিন্যান্স"),
          ],
          P = (s) => ({ c6: s[0], c7: s[1], c8: s[2], c9: s[3], c10: s[4] });
        return {
          v: 2,
          settings: {
            school: {
              name: "",
              nameEn: "",
              eiin: "",
              code: "",
              address: "",
              phone: "",
              email: "",
              website: "",
              logo: "",
              session: String(/* @__PURE__ */ new Date().getFullYear()),
              established: "",
              headName: "",
              headSign: "",
              seal: "",
              motto: "",
            },
            admin: { username: "admin", passHash: "" },
            secret: u() + u(),
            classes: i,
            subjects: q,
            groups: ["বিজ্ঞান", "মানবিক", "ব্যবসায় শিক্ষা"],
            designations: [
              "প্রধান শিক্ষক",
              "সহকারী প্রধান শিক্ষক",
              "সিনিয়র শিক্ষক",
              "সহকারী শিক্ষক",
              "খণ্ডকালীন শিক্ষক",
              "অফিস সহকারী",
              "হিসাবরক্ষক",
              "লাইব্রেরিয়ান",
              "অফিস সহায়ক",
              "নৈশপ্রহরী",
            ],
            weeklyOff: [5, 6],
            periods: [
              { id: "p1", label: "১ম", start: "10:00", end: "10:45" },
              { id: "p2", label: "২য়", start: "10:45", end: "11:30" },
              { id: "p3", label: "৩য়", start: "11:30", end: "12:15" },
              { id: "pb", label: "টিফিন", start: "12:15", end: "12:45", brk: true },
              { id: "p4", label: "৪র্থ", start: "12:45", end: "13:30" },
              { id: "p5", label: "৫ম", start: "13:30", end: "14:15" },
              { id: "p6", label: "৬ষ্ঠ", start: "14:15", end: "15:00" },
            ],
            grading: [
              { min: 80, grade: "A+", gp: 5 },
              { min: 70, grade: "A", gp: 4 },
              { min: 60, grade: "A-", gp: 3.5 },
              { min: 50, grade: "B", gp: 3 },
              { min: 40, grade: "C", gp: 2 },
              { min: 33, grade: "D", gp: 1 },
              { min: 0, grade: "F", gp: 0 },
            ],
            feeHeads: [
              { id: "fh_m", name: "মাসিক বেতন", type: "monthly", amounts: P([300, 300, 350, 400, 400]) },
              { id: "fh_a", name: "ভর্তি ও সেশন ফি", type: "once", amounts: P([1500, 1500, 1500, 2e3, 2e3]) },
              { id: "fh_e", name: "পরীক্ষার ফি", type: "once", amounts: P([250, 250, 250, 350, 350]) },
              { id: "fh_d", name: "উন্নয়ন ফি", type: "once", amounts: P([500, 500, 500, 500, 500]) },
            ],
            expenseCats: [
              "শিক্ষক-কর্মচারী বেতন",
              "বিদ্যুৎ ও পানি বিল",
              "স্টেশনারি ও ছাপা",
              "রক্ষণাবেক্ষণ",
              "অনুষ্ঠান ও খেলাধুলা",
              "অন্যান্য",
            ],
            incomeCats: ["শিক্ষার্থী ফি", "সরকারি অনুদান", "দান", "অন্যান্য"],
            docs: {
              signLabel: "প্রধান শিক্ষকের স্বাক্ষর ও সিল",
              classTeacherLabel: "শ্রেণি শিক্ষকের স্বাক্ষর",
              examCtrlLabel: "পরীক্ষা নিয়ন্ত্রকের স্বাক্ষর",
              showQR: true,
              verifyBase: "",
              admitRules: `পরীক্ষা শুরুর ৩০ মিনিট আগে আসন গ্রহণ করতে হবে
প্রবেশপত্র ছাড়া কোনো শিক্ষার্থীকে পরীক্ষায় বসতে দেওয়া হবে না
মোবাইল ফোন বা কোনো ইলেকট্রনিক যন্ত্র সাথে আনা যাবে না
প্রবেশপত্রে কিছু লেখা বা কাটাকাটি করা যাবে না`,
              testimonialText: `এই মর্মে প্রত্যয়ন করা যাচ্ছে যে, {নাম}, পিতা: {পিতা}, মাতা: {মাতা}, ঠিকানা: {ঠিকানা}। সে অত্র বিদ্যালয়ের একজন নিয়মিত শিক্ষার্থী ছিল। সে {বিভাগ} বিভাগ থেকে {পরীক্ষার_সন} সালের মাধ্যমিক স্কুল সার্টিফিকেট (এস.এস.সি) পরীক্ষায় {বোর্ড} শিক্ষা বোর্ডের অধীনে অংশগ্রহণ করে জিপিএ {জিপিএ} পেয়ে উত্তীর্ণ হয়েছে। তার রোল নং {বোর্ড_রোল} এবং রেজিস্ট্রেশন নং {রেজি_নং}। বিদ্যালয়ের রেকর্ড অনুযায়ী তার জন্ম তারিখ {জন্ম_তারিখ}।
আমার জানামতে সে রাষ্ট্র বা সমাজবিরোধী কোনো কাজে জড়িত ছিল না। তার স্বভাব ও চরিত্র ভালো। আমি তার জীবনের সর্বাঙ্গীণ উন্নতি ও সাফল্য কামনা করি।`,
              tcText: `এই মর্মে প্রত্যয়ন করা যাচ্ছে যে, {নাম}, পিতা: {পিতা}, মাতা: {মাতা}, অত্র বিদ্যালয়ের {শ্রেণি}, {শাখা} শাখার একজন নিয়মিত শিক্ষার্থী ছিল। তার রোল নং {রোল} এবং শিক্ষার্থী আইডি {আইডি}। বিদ্যালয়ের রেকর্ড অনুযায়ী তার জন্ম তারিখ {জন্ম_তারিখ}। {কারণ} অভিভাবকের আবেদনের প্রেক্ষিতে তাকে এই ছাড়পত্র দেওয়া হলো। বিদ্যালয়ের কাছে তার কোনো পাওনা নেই।
আমি তার উজ্জ্বল ভবিষ্যৎ কামনা করি।`,
              board: "ঢাকা",
            },
            serials: {},
            customFields: [],
            theme: "light",
          },
          students: [],
          teachers: [],
          attendance: {},
          routine: {},
          exams: [],
          marks: {},
          payments: [],
          ledger: [],
          salaries: {},
          notices: [],
          books: [],
          loans: [],
          documents: [],
          staff: [],
          requests: [],
          log: [],
          attLog: {},
          marksLog: {},
        };
      }
      function R(r) {
        const i = O();
        for (const a of Object.keys(i)) r[a] === void 0 && (r[a] = i[a]);
        for (const a of Object.keys(i.settings)) r.settings[a] === void 0 && (r.settings[a] = i.settings[a]);
        for (const a of Object.keys(i.settings.school))
          r.settings.school[a] === void 0 && (r.settings.school[a] = "");
        for (const a of Object.keys(i.settings.docs))
          r.settings.docs[a] === void 0 && (r.settings.docs[a] = i.settings.docs[a]);
        return (
          r.settings.subjects.forEach((a) => {
            (a.short || (a.short = a.name),
              a.passMarks == null && (a.passMarks = Math.round(a.fullMarks * 0.33)));
          }),
          r.settings.classes.forEach((a) => {
            a.teacherBySection || (a.teacherBySection = {});
          }),
          (r.exams || []).forEach((a) => {
            a.schedule || (a.schedule = []);
          }),
          (r.teachers || []).forEach((a) => {
            a.subjects || (a.subjects = C(r, a.subject));
          }),
          (r.v = 2),
          r
        );
      }
      function C(r, i) {
        return (r.settings.subjects || []).filter((f) => i && f.name === i).map((f) => f.id);
      }
      async function U(r) {
        try {
          const i = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("sms::" + r));
          return [...new Uint8Array(i)].map((a) => a.toString(16).padStart(2, "0")).join("");
        } catch {
          return "x" + Y("sms::" + r);
        }
      }
      function Y(r) {
        let i = 2166136261,
          a = 5381;
        for (let f = 0; f < r.length; f++) {
          const E = r.charCodeAt(f);
          ((i = Math.imul(i ^ E, 16777619)), (a = ((a << 5) + a + E) | 0));
        }
        return (i >>> 0).toString(16).padStart(8, "0") + (a >>> 0).toString(16).padStart(8, "0");
      }
      return {
        uid: u,
        hash: U,
        quickHash: Y,
        defaults: O,
        idbGet: g,
        idbPut: j,
        get mode() {
          return w;
        },
        get raw() {
          return t;
        },
        get settings() {
          return t.settings;
        },
        isSetup() {
          return !!t;
        },
        async openDemo(r) {
          if (((w = "demo"), (t = r ? null : await g(n)), !t)) {
            ((t = O()),
              Object.assign(t.settings.school, {
                name: "আদর্শ উচ্চ বিদ্যালয়",
                nameEn: "Adarsha High School",
                eiin: "১১২২৩৩",
                address: "কলেজ রোড, সদর, ময়মনসিংহ",
              }));
            try {
              const i = JSON.parse(localStorage.getItem("sms_brand") || "null");
              i && i.name && Object.assign(t.settings.school, { name: i.name, logo: i.logo || "" });
            } catch {}
            (oe.fill(t), R(t));
            try {
              ((t.routine = {}), autoRoutine(allSecKeys()));
            } catch {}
            await j(n, t);
          }
          return (R(t), t);
        },
        async resetDemo() {
          return (await y(n), this.openDemo(true));
        },
        async openLive(r, i) {
          return ((w = "live"), (t = await F.load(r, i)), t && (R(t), F.remember(t), F.saveCache()), t);
        },
        async createLive(r) {
          return ((w = "live"), (t = O()), Object.assign(t.settings.school, r), await F.seed(t), t);
        },
        async allocSerials(r, i) {
          const a = /* @__PURE__ */ new Date().getFullYear(),
            f = r + a;
          if (w === "live") return F.allocate(f, i, t.settings.serials[f] || 0);
          const E = (t.settings.serials[f] || 0) + 1;
          return ((t.settings.serials[f] = E + i - 1), b(), E);
        },
        async serial(r) {
          const i = /* @__PURE__ */ new Date().getFullYear(),
            a = await this.allocSerials(r, 1);
          return `${r}-${i}-${String(a).padStart(4, "0")}`;
        },
        close() {
          ((t = null), (w = null));
        },
        save() {
          b();
        },
        all(r) {
          return t[r];
        },
        find(r, i) {
          return t[r].find((a) => a.id === i);
        },
        upsert(r, i) {
          if (!i.id) ((i.id = u()), (i.createdAt = /* @__PURE__ */ new Date().toISOString()), t[r].push(i));
          else {
            const a = t[r].findIndex((f) => f.id === i.id);
            a > -1 ? (t[r][a] = { ...t[r][a], ...i }) : t[r].push(i);
          }
          return (b(), i);
        },
        remove(r, i) {
          ((t[r] = t[r].filter((a) => a.id !== i)), b());
        },
        getAtt(r, i, a) {
          return t.attendance[`${r}|${i}|${a}`] || null;
        },
        setAtt(r, i, a, f) {
          ((t.attendance[`${r}|${i}|${a}`] = f), b());
        },
        exportJSON() {
          return JSON.stringify({
            app: "sms-highschool",
            version: 2,
            mode: w,
            exportedAt: /* @__PURE__ */ new Date().toISOString(),
            data: t,
          });
        },
        async importJSON(r) {
          const i = JSON.parse(r),
            a = i.data || i;
          if (!a.settings || !Array.isArray(a.students)) throw new Error("bad");
          ((t = R(a)), b(), w === "live" && (await F.flush()));
        },
        async wipeData() {
          const r = t.settings,
            i = O();
          ((i.settings = r), (i.settings.serials = {}), (t = i), b(), w === "live" && (await F.flush()));
        },
      };
    })(),
    oe = {
      fill(e) {
        const n = (s) => s[Math.floor(Math.random() * s.length)],
          t = (s, d) => s + Math.floor(Math.random() * (d - s + 1)),
          c = [
            "আরিফ",
            "তানভীর",
            "সাকিব",
            "রাফি",
            "মেহেদী",
            "নাঈম",
            "ইমরান",
            "শাহরিয়ার",
            "আবির",
            "রিফাত",
            "জুবায়ের",
            "সাদমান",
            "তাহমিদ",
            "ফাহিম",
            "নাফিস",
            "রাকিব",
            "সিয়াম",
            "আসিফ",
            "প্রান্ত",
            "অনিক",
          ],
          k = [
            "নুসরাত",
            "সুমাইয়া",
            "তাসনিম",
            "ফারিহা",
            "মারিয়া",
            "সাদিয়া",
            "আফরিন",
            "জান্নাতুল",
            "রুবাইয়া",
            "মাহজাবিন",
            "তানজিলা",
            "নাবিলা",
            "সুরাইয়া",
            "ইশরাত",
            "লামিয়া",
            "আনিকা",
            "প্রিয়াংকা",
            "মৌমিতা",
          ],
          w = [
            "হোসেন",
            "রহমান",
            "ইসলাম",
            "আহমেদ",
            "চৌধুরী",
            "সরকার",
            "মিয়া",
            "খান",
            "মাহমুদ",
            "আলম",
            "উদ্দিন",
            "বিশ্বাস",
          ],
          u = [
            "মোঃ আব্দুল করিম",
            "মোঃ রফিকুল ইসলাম",
            "মোঃ জাহাঙ্গীর আলম",
            "মোঃ নুরুল হক",
            "মোঃ শফিকুল ইসলাম",
            "মোঃ আনোয়ার হোসেন",
            "মোঃ মিজানুর রহমান",
            "মোঃ কামরুল হাসান",
            "মোঃ আলমগীর কবির",
            "মোঃ হাবিবুর রহমান",
          ],
          p = [
            "রাশিদা বেগম",
            "নাসরিন আক্তার",
            "শাহনাজ পারভীন",
            "মর্জিনা খাতুন",
            "ফাতেমা বেগম",
            "সালমা আক্তার",
            "রোকসানা বেগম",
            "হাসিনা খাতুন",
          ],
          g = ["চরপাড়া", "নতুনবাজার", "পূর্বপাড়া", "কলেজ রোড", "স্টেশন রোড", "মধ্যপাড়া"],
          j = ["A+", "B+", "O+", "AB+", "O-", "B-"],
          y = /* @__PURE__ */ new Date().getFullYear(),
          b = e.settings;
        Object.assign(b.school, {
          headName: b.school.headName || "মোঃ আব্দুল মান্নান",
          phone: b.school.phone || "01711-000000",
          established: b.school.established || "১৯৬৮",
          nameEn: b.school.nameEn || "Charpara High School",
        });
        let O = 0;
        b.classes.forEach((s) =>
          s.sections.forEach((d) => {
            const M = t(10, 13);
            for (let $ = 1; $ <= M; $++) {
              const I = Math.random() < 0.5 ? "M" : "F";
              O++;
              const _ = new Date(y - (s.order + 5), t(0, 11), t(1, 27));
              e.students.push({
                id: "st" + O,
                studentId: `${y}${String(s.order).padStart(2, "0")}${String(O).padStart(3, "0")}`,
                nameBn: n(I === "M" ? c : k) + " " + n(w),
                nameEn: "",
                classId: s.id,
                section: d,
                group: s.hasGroups ? n(b.groups) : "",
                roll: $,
                gender: I,
                dob: T.iso(_),
                religion: Math.random() < 0.9 ? "ইসলাম" : "হিন্দু",
                blood: n(j),
                father: n(u),
                mother: n(p),
                phone: "01" + n(["7", "8", "9", "3", "5", "6"]) + String(t(1e7, 99999999)),
                address: n(g) + ", সদর",
                admissionDate: `${y}-01-0${t(1, 8)}`,
                sscReg: s.order >= 9 ? String(t(191e7, 1999999999)) : "",
                status: "active",
                photo: "",
                custom: {},
              });
            }
          }),
        );
        for (let s = 1; s <= 8; s++) {
          const d = Math.random() < 0.5 ? "M" : "F";
          (O++,
            e.students.push({
              id: "st" + O,
              studentId: `${y - 1}10${String(s).padStart(3, "0")}`,
              nameBn: n(d === "M" ? c : k) + " " + n(w),
              nameEn: "",
              classId: "c10",
              section: "ক",
              group: n(b.groups),
              roll: s,
              gender: d,
              dob: T.iso(new Date(y - 17, t(0, 11), t(1, 27))),
              religion: "ইসলাম",
              blood: n(j),
              father: n(u),
              mother: n(p),
              phone: "01" + n(["7", "8", "9"]) + String(t(1e7, 99999999)),
              address: n(g) + ", সদর",
              admissionDate: `${y - 5}-01-05`,
              sscReg: String(t(181e7, 1899999999)),
              sscRoll: String(t(1e5, 999999)),
              sscGpa: n(["5.00", "4.89", "4.67", "4.50", "4.11", "3.94"]),
              sscYear: String(y - 1),
              sscBoard: "ময়মনসিংহ",
              status: "passed",
              photo: "",
              custom: {},
            }));
        }
        ([
          ["মোঃ আব্দুল মান্নান", "প্রধান শিক্ষক", "", "শিক্ষক", "এম.এ, বি.এড", 52e3],
          ["শামীমা নাসরিন", "সহকারী প্রধান শিক্ষক", "বাংলা প্রথম পত্র", "শিক্ষক", "এম.এ (বাংলা)", 45e3],
          ["মোঃ রেজাউল করিম", "সিনিয়র শিক্ষক", "গণিত", "শিক্ষক", "এম.এসসি (গণিত)", 38e3],
          ["ফারহানা ইয়াসমিন", "সিনিয়র শিক্ষক", "English 1st Paper", "শিক্ষক", "এম.এ (ইংরেজি)", 38e3],
          ["মোঃ সাইফুল ইসলাম", "সহকারী শিক্ষক", "পদার্থবিজ্ঞান", "শিক্ষক", "এম.এসসি (পদার্থ)", 3e4],
          ["তাহমিনা আক্তার", "সহকারী শিক্ষক", "রসায়ন", "শিক্ষক", "এম.এসসি (রসায়ন)", 3e4],
          ["মোঃ কামাল হোসেন", "সহকারী শিক্ষক", "জীববিজ্ঞান", "শিক্ষক", "বি.এসসি, বি.এড", 28e3],
          ["সুলতানা রাজিয়া", "সহকারী শিক্ষক", "হিসাববিজ্ঞান", "শিক্ষক", "এম.কম", 28e3],
          ["মোঃ আনিসুর রহমান", "সহকারী শিক্ষক", "ইতিহাস ও বিশ্বসভ্যতা", "শিক্ষক", "এম.এ (ইতিহাস)", 28e3],
          ["রুমানা আফরোজ", "সহকারী শিক্ষক", "তথ্য ও যোগাযোগ প্রযুক্তি", "শিক্ষক", "বি.এসসি (সিএসই)", 28e3],
          ["মাওলানা আবু তাহের", "সহকারী শিক্ষক", "ধর্ম ও নৈতিক শিক্ষা", "শিক্ষক", "কামিল", 26e3],
          ["মোঃ জসিম উদ্দিন", "অফিস সহকারী", "", "কর্মচারী", "এইচ.এস.সি", 16e3],
          ["মোঃ বাবুল মিয়া", "অফিস সহায়ক", "", "কর্মচারী", "এস.এস.সি", 12e3],
          ["নাসরিন সুলতানা", "সহকারী শিক্ষক", "বাংলা দ্বিতীয় পত্র", "শিক্ষক", "এম.এ (বাংলা)", 26e3],
          ["মোঃ মাহবুবুর রহমান", "সহকারী শিক্ষক", "বাংলা প্রথম পত্র", "শিক্ষক", "বি.এ (অনার্স)", 25e3],
          ["সাবরিনা ইসলাম", "সহকারী শিক্ষক", "English 2nd Paper", "শিক্ষক", "এম.এ (ইংরেজি)", 26e3],
          ["মোঃ ইকবাল হোসেন", "সহকারী শিক্ষক", "English 1st Paper", "শিক্ষক", "বি.এ (ইংরেজি)", 25e3],
          ["মোঃ শহিদুল আলম", "সহকারী শিক্ষক", "গণিত", "শিক্ষক", "বি.এসসি (গণিত)", 26e3],
          ["রেহানা পারভীন", "সহকারী শিক্ষক", "সাধারণ বিজ্ঞান", "শিক্ষক", "বি.এসসি, বি.এড", 25e3],
          ["মোঃ জাকির হোসেন", "সহকারী শিক্ষক", "সাধারণ বিজ্ঞান", "শিক্ষক", "এম.এসসি (প্রাণিবিদ্যা)", 25e3],
          ["মোঃ মোস্তফা কামাল", "সহকারী শিক্ষক", "কৃষিশিক্ষা", "শিক্ষক", "বি.এসসি (কৃষি)", 24e3],
          ["শাহানা আক্তার", "সহকারী শিক্ষক", "বাংলাদেশ ও বিশ্বপরিচয়", "শিক্ষক", "এম.এস.এস", 24e3],
          ["মোঃ ফারুক আহমেদ", "সহকারী শিক্ষক", "উচ্চতর গণিত", "শিক্ষক", "এম.এসসি (গণিত)", 26e3],
          ["শ্রী বিপ্লব কুমার দাস", "সহকারী শিক্ষক", "ধর্ম ও নৈতিক শিক্ষা", "শিক্ষক", "এম.এ", 24e3],
          ["মোঃ রাশেদুল হক", "সহকারী শিক্ষক", "ভূগোল ও পরিবেশ", "শিক্ষক", "এম.এসসি (ভূগোল)", 24e3],
          ["তানিয়া সুলতানা", "সহকারী শিক্ষক", "ব্যবসায় উদ্যোগ", "শিক্ষক", "এম.বি.এ", 24e3],
          ["মোঃ সোহেল রানা", "সহকারী শিক্ষক", "তথ্য ও যোগাযোগ প্রযুক্তি", "শিক্ষক", "বি.এসসি (সিএসই)", 24e3],
        ].forEach((s, d) =>
          e.teachers.push({
            id: "t" + (d + 1),
            name: s[0],
            designation: s[1],
            subject: s[2],
            type: s[3],
            qualification: s[4],
            salary: s[5],
            phone: "01" + n(["7", "8", "9", "1"]) + String(t(1e7, 99999999)),
            email: "",
            joinDate: `${t(2005, 2022)}-0${t(1, 9)}-15`,
            address: "",
            photo: "",
            status: "active",
          }),
        ),
          b.classes.forEach((s, d) =>
            s.sections.forEach((M, $) => {
              s.teacherBySection[M] = "t" + (2 + ((d * 2 + $) % 10));
            }),
          ));
        const C = /* @__PURE__ */ new Date();
        for (let s = 56; s >= 1; s--) {
          const d = new Date(C);
          if ((d.setDate(C.getDate() - s), b.weeklyOff.includes(d.getDay()))) continue;
          const M = T.iso(d),
            $ = 0.84 + Math.random() * 0.12;
          b.classes.forEach((I) =>
            I.sections.forEach((_) => {
              const B = {};
              (e.students
                .filter((A) => A.classId === I.id && A.section === _ && A.status === "active")
                .forEach((A) => {
                  const o = Math.random();
                  B[A.id] = o < $ ? "P" : o < $ + 0.03 ? "L" : "A";
                }),
                (e.attendance[`${M}|${I.id}|${_}`] = B));
            }),
          );
        }
        const U = [6, 0, 1, 2, 3, 4];
        b.classes.forEach((s) =>
          s.sections.forEach((d) => {
            const M = b.subjects.filter((I) => I.classes.includes(s.id) && !I.group),
              $ = {};
            (U.forEach((I, _) => {
              (($[I] = {}),
                b.periods
                  .filter((B) => !B.brk)
                  .forEach((B, A) => {
                    const o = M[(_ + A + s.order) % M.length],
                      h = e.teachers.find((v) => v.subject === o.name);
                    $[I][B.id] = { subjectId: o.id, teacherId: h ? h.id : "" };
                  }));
            }),
              (e.routine[`${s.id}|${d}`] = $));
          }),
        );
        const Y = {
            id: "ex1",
            name: "অর্ধবার্ষিক পরীক্ষা",
            session: String(y),
            classes: b.classes.map((s) => s.id),
            startDate: `${y}-06-15`,
            endDate: `${y}-06-28`,
            published: true,
          },
          r = {
            id: "ex2",
            name: "বার্ষিক পরীক্ষা",
            session: String(y),
            classes: b.classes.map((s) => s.id),
            startDate: `${y}-12-01`,
            endDate: `${y}-12-14`,
            published: false,
          };
        (e.exams.push(Y, r),
          e.students
            .filter((s) => s.status === "active")
            .forEach((s) => {
              const d = t(45, 92),
                M = {};
              (b.subjects
                .filter(($) => $.classes.includes(s.classId) && (!$.group || $.group === s.group))
                .forEach(($) => {
                  M[$.id] = Math.max(18, Math.min(100, d + t(-16, 12)));
                }),
                (e.marks[`ex1|${s.id}`] = M));
            }));
        let i = 0;
        const a = C.getMonth() + 1;
        (e.students
          .filter((s) => s.status === "active")
          .forEach((s) => {
            const d = t(Math.max(1, a - 3), a);
            for (let M = 1; M <= d; M += t(1, 3)) {
              const $ = Math.min(d - M + 1, t(1, 3)),
                I = [];
              for (let A = 0; A < $; A++)
                I.push({
                  headId: "fh_m",
                  label: "মাসিক বেতন",
                  month: `${y}-${String(M + A).padStart(2, "0")}`,
                  amount: b.feeHeads[0].amounts[s.classId],
                });
              (M === 1 &&
                I.push({ headId: "fh_a", label: "ভর্তি ও সেশন ফি", amount: b.feeHeads[1].amounts[s.classId] }),
                i++);
              const _ = `${y}-${String(Math.min(M + $ - 1, a)).padStart(2, "0")}-${String(t(3, 20)).padStart(2, "0")}`,
                B = I.reduce((A, o) => A + o.amount, 0);
              (e.payments.push({
                id: "pay" + i,
                receiptNo: `RCP-${y}-${String(i).padStart(4, "0")}`,
                studentId: s.id,
                date: _ > T.iso(C) ? T.iso(C) : _,
                items: I,
                discount: 0,
                total: B,
                method: n(["নগদ", "নগদ", "বিকাশ", "নগদ"]),
                note: "",
              }),
                (M += $ - 1));
            }
          }),
          (b.serials["RCP" + y] = i));
        for (let s = Math.max(1, a - 5); s <= a; s++) {
          const d = `${y}-${String(s).padStart(2, "0")}`;
          ([
            ["বিদ্যুৎ ও পানি বিল", t(4500, 7e3)],
            ["স্টেশনারি ও ছাপা", t(2e3, 5e3)],
            ["রক্ষণাবেক্ষণ", t(1e3, 6e3)],
          ].forEach(([M, $], I) =>
            e.ledger.push({
              id: `lg${s}_${I}`,
              type: "expense",
              date: `${d}-1${I}`,
              category: M,
              amount: $,
              note: "",
            }),
          ),
            s < a &&
              ((e.salaries[d] = {}),
              e.teachers.forEach((M) => {
                e.salaries[d][M.id] = { paid: true, date: `${d}-28`, amount: M.salary };
              })));
        }
        e.ledger.push({
          id: "lgg",
          type: "income",
          date: `${y}-${String(Math.max(1, a - 2)).padStart(2, "0")}-05`,
          category: "সরকারি অনুদান",
          amount: 15e4,
          note: "অবকাঠামো অনুদান",
        });
        const f = (s) => {
          const d = new Date(C);
          return (d.setDate(C.getDate() + s), T.iso(d));
        };
        (e.notices.push(
          {
            id: "n1",
            kind: "নোটিশ",
            title: "বার্ষিক পরীক্ষার সময়সূচি প্রকাশ",
            body: "আগামী ১ ডিসেম্বর থেকে বার্ষিক পরীক্ষা শুরু হবে। বিস্তারিত সময়সূচি নোটিশ বোর্ডে দেওয়া আছে। সকল শিক্ষার্থীকে বকেয়া বেতন পরিশোধ করে প্রবেশপত্র সংগ্রহ করতে বলা হলো।",
            date: f(-2),
            pinned: true,
            eventDate: "",
          },
          {
            id: "n2",
            kind: "ইভেন্ট",
            title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
            body: "বিদ্যালয় মাঠে সকাল ৯টায় উদ্বোধন।",
            date: f(-5),
            eventDate: f(9),
            pinned: false,
          },
          {
            id: "n3",
            kind: "ছুটি",
            title: "মহান বিজয় দিবস",
            body: "বিদ্যালয় বন্ধ থাকবে।",
            date: f(-6),
            eventDate: `${y}-12-16`,
            pinned: false,
          },
          {
            id: "n4",
            kind: "নোটিশ",
            title: "অভিভাবক সমাবেশ",
            body: "দশম শ্রেণির অভিভাবকদের উপস্থিত থাকার অনুরোধ করা হলো।",
            date: f(-9),
            eventDate: f(4),
            pinned: false,
          },
        ),
          [
            ["আমার বন্ধু রাশেদ", "মুহম্মদ জাফর ইকবাল", 3],
            ["পথের পাঁচালী", "বিভূতিভূষণ বন্দ্যোপাধ্যায়", 2],
            ["ঠাকুরমার ঝুলি", "দক্ষিণারঞ্জন মিত্র মজুমদার", 2],
            ["হাজার বছর ধরে", "জহির রায়হান", 2],
            ["বিজ্ঞানের মজার খেলা", "আব্দুল্লাহ আল-মুতী", 3],
            ["Oxford Advanced Learner's Dictionary", "Oxford", 1],
            ["সংশপ্তক", "শহীদুল্লা কায়সার", 1],
            ["দীপু নাম্বার টু", "মুহম্মদ জাফর ইকবাল", 2],
          ].forEach((s, d) =>
            e.books.push({
              id: "b" + (d + 1),
              title: s[0],
              author: s[1],
              copies: s[2],
              code: "L-" + String(101 + d),
              shelf: "তাক " + (1 + (d % 3)),
            }),
          ));
        const E = e.teachers.filter((s) => s.type === "শিক্ষক");
        (E.forEach((s, d) =>
          e.staff.push({
            uid: "demo_" + s.id,
            email: `teacher${d + 1}@demo.school`,
            name: s.name,
            phone: s.phone,
            status: "active",
            teacherId: s.id,
            extra: [],
            classes: [],
            subjects: [],
            at: `${y}-01-10T09:00:00`,
          }),
        ),
          e.staff.push(
            {
              uid: "demo_p1",
              email: "hasan@demo.school",
              name: "মোঃ হাসান মাহমুদ",
              designation: "সহকারী শিক্ষক",
              subject: "গণিত",
              phone: "01712345678",
              indexNo: "1098765",
              nid: "1990123456789",
              qualification: "এম.এসসি (গণিত)",
              joinDate: T.iso(C),
              address: "স্টেশন রোড, সদর",
              blood: "B+",
              photo: "",
              status: "pending",
              teacherId: "",
              extra: [],
              classes: [],
              subjects: [],
              at: new Date(C.getTime() - 864e5).toISOString(),
            },
            {
              uid: "demo_p2",
              email: "shirin@demo.school",
              name: "শিরিন আক্তার",
              designation: "সহকারী শিক্ষক",
              subject: "বাংলা প্রথম পত্র",
              phone: "01898765432",
              indexNo: "",
              nid: "",
              qualification: "বি.এ (অনার্স)",
              joinDate: "",
              address: "পূর্বপাড়া",
              blood: "",
              photo: "",
              status: "pending",
              teacherId: "",
              extra: [],
              classes: [],
              subjects: [],
              at: /* @__PURE__ */ new Date().toISOString(),
            },
          ));
        const L = E[2];
        L &&
          e.requests.push({
            id: "rq1",
            uid: "demo_" + L.id,
            teacherId: L.id,
            name: L.name,
            before: { phone: L.phone, address: "" },
            after: { phone: "01755667788", address: "কলেজ রোড, সদর" },
            note: "নতুন নম্বর নিয়েছি",
            status: "pending",
            at: /* @__PURE__ */ new Date().toISOString(),
          });
        const q = (s, d) => {
          const M = b.classes.find((_) => _.id === s),
            $ = M && M.teacherBySection[d],
            I = e.teachers.find((_) => _.id === $);
          return I
            ? { by: "demo_" + I.id, bn: I.name }
            : { by: "admin", bn: b.school.headName || "সুপার অ্যাডমিন" };
        };
        (Object.keys(e.attendance).forEach((s) => {
          const [, d, M] = s.split("|");
          e.attLog[s] = q(d, M);
        }),
          e.payments.forEach((s) => {
            const d = e.students.find(($) => $.id === s.studentId);
            if (!d) return;
            const M =
              Math.random() < 0.75
                ? q(d.classId, d.section)
                : { by: "admin", bn: b.school.headName || "সুপার অ্যাডমিন" };
            Object.assign(s, M, { cls: `${d.classId}|${d.section}` });
          }));
        const P = T.iso(new Date(C.getTime() - 7 * 864e5));
        (e.payments
          .filter((s) => s.date >= P)
          .forEach((s) => {
            const d = e.students.find((M) => M.id === s.studentId);
            e.log.push({
              id: "lgp" + s.id,
              by: s.by,
              bn: s.bn,
              role: s.by === "admin" ? "admin" : "teacher",
              type: "fee",
              text: `ফি আদায়: ${d.nameBn} · ৳${s.total} · রসিদ ${s.receiptNo}`,
              at:
                s.date +
                "T1" +
                Math.floor(Math.random() * 6) +
                ":" +
                String(10 + Math.floor(Math.random() * 49)) +
                ":00",
            });
          }),
          Object.keys(e.attendance)
            .filter((s) => s >= P)
            .forEach((s) => {
              const [d, M, $] = s.split("|"),
                I = e.attLog[s],
                _ = Object.values(e.attendance[s]).filter((B) => B === "A").length;
              e.log.push({
                id: "lga" + s,
                by: I.by,
                bn: I.bn,
                role: I.by === "admin" ? "admin" : "teacher",
                type: "attendance",
                text: `হাজিরা: ${b.classes.find((B) => B.id === M).short} ${$} শাখা · অনুপস্থিত ${_} জন`,
                at: d + "T10:0" + Math.floor(Math.random() * 9) + ":00",
              });
            }),
          e.loans.push(
            { id: "l1", bookId: "b1", studentId: "st3", issueDate: f(-20), dueDate: f(-6), returnDate: "" },
            { id: "l2", bookId: "b5", studentId: "st40", issueDate: f(-4), dueDate: f(10), returnDate: "" },
          ));
      },
    },
    ie = {
      admit: "প্রবেশপত্র",
      testimonial: "প্রশংসাপত্র",
      transcript: "একাডেমিক ট্রান্সক্রিপ্ট",
      tabulation: "ফলাফল শিট",
      tc: "ছাড়পত্র",
      idcard: "শিক্ষার্থী আইডি কার্ড",
      staffid: "শিক্ষক-কর্মচারী আইডি কার্ড",
      receipt: "ফি রসিদ",
      routine: "ক্লাস রুটিন",
      attsheet: "হাজিরা খাতা",
      notice: "নোটিশ",
      salarysheet: "বেতন শিট",
      ledger: "আয়-ব্যয় প্রতিবেদন",
    };
  (async () => {
    const e = document.getElementById("v"),
      n = decodeURIComponent(location.hash.slice(1) || ""),
      t = n.startsWith("demo:"),
      c = t ? n.slice(5) : n,
      k = (w, u, p, g, j, y) => {
        const b = g
          ? [
              ["ডকুমেন্ট", ie[g.t] || g.t],
              ["ক্রমিক নং", c],
              ["নাম", g.n],
              ["আইডি", g.i],
              ["বিবরণ", g.x],
              ["ইস্যুর তারিখ", g.d ? T.date(g.d) : ""],
            ].filter((O) => O[1])
          : [["ক্রমিক নং", c]];
        e.innerHTML = `<div class="vtop"><span class="logo-mark">${y && y.logo ? `<img src="${y.logo}" alt="">` : G("shield")}</span><div><div style="font-weight:500;font-size:17px">${V((y && y.name) || "ডকুমেন্ট যাচাই")}</div><div class="muted small-t">${V(y && y.e ? "EIIN " + T.bd(y.e) : "স্কুল ম্যানেজমেন্ট সিস্টেম")}</div></div></div>
      <div class="vbadge ${w}"><span class="vtick">${G(u)}</span><span>${p}</span></div>
      <div class="vbody"><dl class="kv">${b.map(([O, R]) => `<dt>${V(O)}</dt><dd>${V(T.bd(R))}</dd>`).join("")}</dl>${j ? `<p class="muted small-t mt-3 mb-0">${V(j)}</p>` : ""}</div>`;
      };
    if (!c) return k("bad", "alert", "QR কোডটি পড়া যায়নি", null, "লিংকটি অসম্পূর্ণ। ডকুমেন্টের QR আবার স্ক্যান করুন");
    e.innerHTML =
      '<div class="vbody text-center sec" style="padding:48px"><span class="spin" style="display:inline-block;border-color:var(--line-2);border-top-color:var(--primary)"></span><div class="mt-2">যাচাই করা হচ্ছে…</div></div>';
    try {
      if (t) {
        const u = await X.idbGet("demo_v2"),
          p = u && (u.documents || []).find((b) => b.serial === c),
          g = u && (u.payments || []).find((b) => b.receiptNo === c),
          j = p
            ? { t: p.type, n: p.name, i: p.sid, d: p.issuedAt, x: p.info }
            : g
              ? {
                  t: "receipt",
                  n: ((u.students || []).find((b) => b.id === g.studentId) || {}).nameBn,
                  d: g.date,
                  x: "৳" + g.total,
                }
              : null,
          y = u
            ? { name: u.settings.school.name, logo: u.settings.school.logo, e: u.settings.school.eiin }
            : null;
        return j
          ? k(
              "warn",
              "check",
              "ডেমো ডকুমেন্ট: নমুনা রেকর্ডে পাওয়া গেছে",
              j,
              "এটি ডেমো মোডে তৈরি নমুনা ডকুমেন্ট, আসল নয়",
              y,
            )
          : k(
              "bad",
              "alert",
              "রেকর্ডে পাওয়া যায়নি",
              null,
              "ডেমোর তথ্য শুধু যে ব্রাউজারে ডেমো চালানো হয়েছে সেখানেই থাকে",
              y,
            );
      }
      if (!F.init()) throw new Error("offline");
      const w = await F.verify(c);
      w
        ? k(
            "ok",
            "check",
            "যাচাই সম্পন্ন: ডকুমেন্টটি আসল",
            w,
            "এই ডকুমেন্ট স্কুলের অনলাইন রেকর্ডে নিবন্ধিত আছে। ডকুমেন্টের লেখার সাথে উপরের তথ্য মিলিয়ে নিন",
            { name: w.s, e: w.e },
          )
        : k(
            "bad",
            "alert",
            "রেকর্ডে পাওয়া যায়নি",
            null,
            "এই ক্রমিক নম্বরের কোনো ডকুমেন্ট স্কুলের রেকর্ডে নেই। ডকুমেন্টটি নকল হতে পারে, স্কুলে যোগাযোগ করুন",
          );
    } catch {
      k("bad", "alert", "এখন যাচাই করা যাচ্ছে না", null, "ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন");
    }
  })();
})();
