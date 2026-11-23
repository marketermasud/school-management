(() => {
  "use strict";
  const SCHOOL_NAME = "Parkhidirpur High School";
  const qe = {
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
    M = (t, s = "") => `<svg class="ico ${s}" viewBox="0 0 24 24" aria-hidden="true">${qe[t] || ""}</svg>`,
    Ts = "০১২৩৪৫৬৭৮৯",
    o = {
      n: (t) => Number(t || 0).toLocaleString("bn-BD"),
      tk: (t) => "৳" + Number(t || 0).toLocaleString("bn-BD"),
      pct: (t) => Number(t || 0).toLocaleString("bn-BD", { maximumFractionDigits: 1 }) + "%",
      gpa: (t) =>
        Number(t || 0)
          .toFixed(2)
          .replace(/[0-9]/g, (s) => Ts[s]),
      bd: (t) => String(t != null ? t : "").replace(/[0-9]/g, (s) => Ts[s]),
      en: (t) => String(t != null ? t : "").replace(/[০-৯]/g, (s) => Ts.indexOf(s)),
      iso: (t) => new Date(t.getTime() - t.getTimezoneOffset() * 6e4).toISOString().slice(0, 10),
      date: (t) =>
        t
          ? /* @__PURE__ */ new Date(t + "T00:00").toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "—",
      dateN: (t) => (t ? o.bd(t.split("-").reverse().join("/")) : "—"),
      dateS: (t) =>
        t
          ? /* @__PURE__ */ new Date(t + "T00:00").toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "short",
            })
          : "—",
      day: (t) => /* @__PURE__ */ new Date(t + "T00:00").toLocaleDateString("bn-BD", { weekday: "long" }),
      month: (t, s) => new Date(t, s, 1).toLocaleDateString("bn-BD", { month: "long", year: "numeric" }),
      ym: (t) => {
        const [s, e] = t.split("-").map(Number);
        return o.month(s, e - 1);
      },
      monS: (t) => {
        const [s, e] = t.split("-").map(Number);
        return new Date(s, e - 1, 1).toLocaleDateString("bn-BD", { month: "short" });
      },
      initials: (t) =>
        (t || "?")
          .replace(/^(মোঃ|মোছাঃ|মাওলানা)\s*/, "")
          .trim()
          .charAt(0) || "?",
      age: (t) => {
        if (!t) return "";
        const s = new Date(t),
          e = /* @__PURE__ */ new Date();
        let a = e.getFullYear() - s.getFullYear();
        return (e < new Date(e.getFullYear(), s.getMonth(), s.getDate()) && a--, a);
      },
      time: (t) => {
        if (!t) return "";
        const [s, e] = t.split(":").map(Number),
          a = ((s + 11) % 12) + 1;
        return o.bd(`${a}:${String(e).padStart(2, "0")}`);
      },
    },
    m = (t) =>
      String(t != null ? t : "").replace(
        /[&<>"']/g,
        (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s],
      ),
    r = (t, s = document) => s.querySelector(t),
    T = (t, s = document) => [...s.querySelectorAll(t)],
    u = {
      toast(t, s = "ok") {
        const e = r("#toasts");
        if (!e) return;
        const a = document.createElement("div");
        ((a.className = "toast-x"),
          (a.innerHTML = M(s === "ok" ? "check" : "alert") + `<span>${m(t)}</span>`),
          e.appendChild(a),
          setTimeout(() => {
            ((a.style.transition = "opacity .2s"), (a.style.opacity = 0), setTimeout(() => a.remove(), 220));
          }, 2800));
      },
      success(t, s = "", e = "") {
        const a = document.createElement("div");
        ((a.className = "succ"),
          (a.innerHTML = `<div class="sb"><svg viewBox="0 0 84 84"><circle class="c1" cx="42" cy="42" r="40"/><circle class="c2" cx="42" cy="42" r="38"/><path class="ck" d="M27 43 l10 10 l20 -22"/></svg><h4>${m(t)}</h4>${e ? `<div class="amt num">${m(e)}</div>` : ""}${s ? `<p>${m(s)}</p>` : ""}</div>`),
          document.body.appendChild(a));
        const i = () => {
          a.isConnected && (a.classList.add("out"), setTimeout(() => a.remove(), 250));
        };
        ((a.onclick = i), setTimeout(i, e ? 2100 : 1600));
      },
      busy(t, s = "তৈরি হচ্ছে…") {
        let e = r("#busy");
        (t && !e
          ? ((e = document.createElement("div")),
            (e.id = "busy"),
            (e.className = "busy"),
            (e.innerHTML = `<div class="bx"><span class="spin"></span><span>${m(s)}</span></div>`),
            document.body.appendChild(e))
          : t && (e.querySelector("span:last-child").textContent = s),
          !t && e && e.remove());
      },
      modal({ title: t, body: s, foot: e = "", size: a = "", onMount: i, cls: c = "" }) {
        const l = document.createElement("div");
        ((l.className = "modal-x " + c),
          (l.innerHTML = `<div class="scrim"></div><div class="box ${a}" role="dialog" aria-modal="true">
      ${t ? `<div class="mh"><h3>${t}</h3><button class="btn btn-quiet btn-icon" data-close aria-label="বন্ধ">${M("x")}</button></div>` : ""}
      <div class="mb-wrap">${s}</div>${e ? `<div class="mf">${e}</div>` : ""}</div>`),
          document.body.appendChild(l));
        const d = () => {
            l.classList.contains("closing") ||
              (l.classList.add("closing"),
              setTimeout(() => {
                (l.remove(), l.dispatchEvent(new Event("closed")));
              }, 150),
              document.removeEventListener("keydown", n));
          },
          n = (v) => {
            v.key === "Escape" &&
              document.querySelectorAll(".modal-x:not(.closing)")[
                document.querySelectorAll(".modal-x:not(.closing)").length - 1
              ] === l &&
              d();
          };
        (document.addEventListener("keydown", n),
          (l.querySelector(".scrim").onclick = d),
          T("[data-close]", l).forEach((v) => (v.onclick = d)),
          (l.close = d),
          i && i(l, d));
        const p = l.querySelector(
          "input:not([type=hidden]):not([type=file]):not([type=checkbox]),select,textarea",
        );
        return (p && !c.includes("nofocus") && window.innerWidth > 760 && setTimeout(() => p.focus(), 60), l);
      },
      confirm(t, s = "মুছে ফেলুন", e = true) {
        return new Promise((a) => {
          let i = false;
          u.modal({
            title: "নিশ্চিত করুন",
            size: "sm",
            cls: "nofocus",
            body: `<div class="mb"><p class="sec mb-0">${t}</p></div>`,
            foot: `<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn ${e ? "btn-danger" : "btn-primary"}" data-ok>${s}</button>`,
            onMount: (l, d) => {
              l.querySelector("[data-ok]").onclick = () => {
                ((i = true), d(), a(true));
              };
            },
          }).addEventListener("closed", () => {
            i || a(false);
          });
        });
      },
      tween(t, s, e = 800, a) {
        const i = performance.now(),
          c =
            a ||
            (t.dataset.f === "pct"
              ? (d) => o.pct(Math.round(d * 10) / 10)
              : t.dataset.f === "tk"
                ? (d) => o.tk(Math.round(d))
                : (d) => o.n(Math.round(d))),
          l = (d) => {
            const n = Math.min(1, (d - i) / e),
              p = 1 - Math.pow(1 - n, 3);
            ((t.textContent = c(s * p)), n < 1 && requestAnimationFrame(l));
          };
        requestAnimationFrame(l);
      },
      tip: {
        show(t, s, e) {
          const a = r("#tip");
          a &&
            ((a.textContent = t),
            (a.style.left = s + 12 + "px"),
            (a.style.top = e - 36 + "px"),
            (a.style.opacity = 1));
        },
        hide() {
          const t = r("#tip");
          t && (t.style.opacity = 0);
        },
      },
      bindTips(t) {
        T("[data-tip]", t).forEach((s) => {
          ((s.onmousemove = (e) => s.dataset.tip && u.tip.show(s.dataset.tip, e.clientX, e.clientY)),
            (s.onmouseleave = () => u.tip.hide()));
        });
      },
      readImage(t, s = 300, e = "image/jpeg") {
        return new Promise((a, i) => {
          const c = new FileReader();
          ((c.onload = () => {
            const l = new Image();
            ((l.onload = () => {
              const d = Math.min(1, s / Math.max(l.width, l.height)),
                n = document.createElement("canvas");
              ((n.width = Math.round(l.width * d)),
                (n.height = Math.round(l.height * d)),
                n.getContext("2d").drawImage(l, 0, 0, n.width, n.height),
                a(n.toDataURL(e, 0.85)));
            }),
              (l.onerror = i),
              (l.src = c.result));
          }),
            (c.onerror = i),
            c.readAsDataURL(t));
        });
      },
      avatar(t, s, e = "", a) {
        return `<span class="avatar ${e} ${a === "F" ? "f" : ""}">${s ? `<img src="${s}" alt="">` : m(o.initials(t))}</span>`;
      },
      formData(t) {
        const s = {};
        return (
          T("[name]", t).forEach((e) => {
            e.type !== "file" && (s[e.name] = e.type === "checkbox" ? e.checked : e.value.trim());
          }),
          s
        );
      },
      download(t, s, e = "application/json") {
        try {
          const a = document.createElement("a");
          return (
            (a.href = URL.createObjectURL(s instanceof Blob ? s : new Blob([s], { type: e }))),
            (a.download = t),
            document.body.appendChild(a),
            a.click(),
            setTimeout(() => {
              (URL.revokeObjectURL(a.href), a.remove());
            }, 1e3),
            true
          );
        } catch {
          return false;
        }
      },
      empty(t, s = "list") {
        return `<div class="empty">${M(s)}<div>${t}</div></div>`;
      },
      sel(t, s, e, a, i = "col-md-6", c = "") {
        return `<div class="${i}"><label class="form-label">${s}</label><select class="form-select" name="${t}" ${c}>${e
          .map((l) => {
            const [d, n] = Array.isArray(l) ? l : [l, l];
            return `<option value="${m(d)}" ${String(d) === String(a != null ? a : "") ? "selected" : ""}>${m(n)}</option>`;
          })
          .join("")}</select></div>`;
      },
      inp(t, s, e = "", a = "", i = "col-md-6") {
        return `<div class="${i}"><label class="form-label">${s}</label><input class="form-control" name="${t}" value="${m(e != null ? e : "")}" ${a}></div>`;
      },
    },
    at = /* @__PURE__ */ (() => {
      const t = [
          "2hjcyI6Im5pYW1vRGh0dWEiLCJvblhqVXp1RGJ5NVhQbFJVVnVRU2NpeXJkRnpnRUVvVUJ5U2F6SUEiOiJ5ZUtpcGEiew==",
          "I5Njk2ZS10bmVtZWdhbmFtLWxvb2hjcyI6ImRJdGNlam9ycCIsIm1vYy5wcGFlc2FiZXJpZi45Njk2ZS10bmVtZWdhbmFtLWxvb",
          "TZ25pZ2Fzc2VtIiwicHBhLmVnYXJvdHNlc2FiZXJpZi45Njk2ZS10bmVtZWdhbmFtLWxvb2hjcyI6InRla2N1QmVnYXJvdHMiLC",
          "fSI2NzU0Yjc4MzAxNGYyNWMzZmY0YTM1OmJldzoxMTY4MDE0NzcyNDoxIjoiZElwcGEiLCIxMTY4MDE0NzcyNCI6ImRJcmVkbmV",
        ],
        s = () =>
          JSON.parse(
            atob([...t].reverse().join(""))
              .split("")
              .reverse()
              .join(""),
          ),
        e = "main",
        a = ["logo", "headSign", "seal"],
        i = {
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
              "trash",
            ],
            maps: ["attendance", "marks", "routine", "salaries"],
          },
          teacher: {
            cols: ["students", "teachers", "payments", "notices", "exams", "documents"],
            maps: ["attendance", "marks", "routine"],
          },
        },
        c = [
          "students/",
          "attendance/",
          "marks/",
          "payments/",
          "documents/",
          "log/",
          "requests/",
          "/verify/",
        ];
      let l = null,
        d = null,
        n = null,
        p = null,
        v = null,
        g = null,
        h = /* @__PURE__ */ new Map(),
        b = null,
        k = false,
        y = false,
        f = [],
        x = "saved",
        I = "admin",
        S = 0,
        N = null;
      // কী-এর ক্রম আলাদা হলেও একই তথ্য একই ধরা হবে
      const sj = (L) =>
        L && typeof L == "object"
          ? Array.isArray(L)
            ? "[" + L.map(sj).join(",") + "]"
            : "{" +
              Object.keys(L)
                .sort()
                .filter((q) => L[q] !== void 0)
                .map((q) => JSON.stringify(q) + ":" + sj(L[q]))
                .join(",") +
              "}"
          : JSON.stringify(L === void 0 ? null : L);
      const R = (L) => String(L).replace(/\|/g, "~").replace(/\//g, "_"),
        Q = (L) => JSON.parse(JSON.stringify(L)),
        xt = (L) => {
          ((x = L), f.forEach((q) => q(L)));
        };
      function bt() {
        if (l) return true;
        const L = window.firebase;
        if (!L || !L.initializeApp) return false;
        try {
          ((l = L.apps.length ? L.app() : L.initializeApp(s())),
            (d = L.auth ? L.auth() : null),
            (n = L.firestore()),
            (v = L.firestore.FieldValue),
            (g = L.firestore.Timestamp));
          try {
            n.enablePersistence({ synchronizeTabs: true }).catch(() => {});
          } catch {}
          return ((p = n.collection("schools").doc(e)), true);
        } catch (q) {
          return (console.warn(q), false);
        }
      }
      function D(L) {
        if (L[0] === "/") {
          const [, V, U] = L.split("/");
          return n.collection(V).doc(U);
        }
        const q = L.indexOf("/");
        return p.collection(L.slice(0, q)).doc(L.slice(q + 1));
      }
      function P(L) {
        const q = /* @__PURE__ */ new Map(),
          V = Q(L.settings);
        (delete V.admin,
          delete V.secret,
          a.forEach((B) => {
            (q.set("meta/img_" + B, { v: (L.settings.school || {})[B] || "" }), (V.school[B] = ""));
          }),
          q.set("meta/settings", V),
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
            "trash",
          ].forEach((B) => (L[B] || []).forEach((W) => q.set(`${B}/${R(W.id)}`, W))),
          (L.teachers || []).forEach((B) => {
            const { salary: W, ...F } = B;
            (q.set(`teachers/${R(B.id)}`, F), q.set(`pay/${R(B.id)}`, { v: +W || 0 }));
          }),
          Object.entries(L.attendance || {}).forEach(([B, W]) => {
            const [F, Mt, Rt] = B.split("|"),
              _t = (L.attLog || {})[B] || {};
            q.set(`attendance/${R(B)}`, {
              k: B,
              v: W,
              d: F,
              cls: `${Mt}|${Rt}`,
              by: _t.by || "",
              bn: _t.bn || "",
            });
          }),
          Object.entries(L.marks || {}).forEach(([B, W]) => {
            const [F, Mt] = B.split("|"),
              Rt = (L.students || []).find((Ds) => Ds.id === Mt),
              _t = (L.marksLog || {})[B] || {};
            q.set(`marks/${R(B)}`, {
              k: B,
              v: W,
              e: F,
              cls: Rt ? `${Rt.classId}|${Rt.section}` : "",
              by: _t.by || "",
            });
          }),
          ["routine", "salaries"].forEach((B) =>
            Object.entries(L[B] || {}).forEach(([W, F]) => q.set(`${B}/${R(W)}`, { k: W, v: F })),
          ),
          (L.staff || []).forEach((B) => q.set("/staff/" + B.uid, B)));
        const U = L.settings.school || {};
        return (
          (L.documents || []).forEach((B) =>
            q.set("/verify/" + R(B.serial), {
              t: B.type,
              n: B.name || "",
              i: B.sid || "",
              d: B.issuedAt || "",
              x: B.info || "",
              s: U.name || "",
              e: U.eiin || "",
            }),
          ),
          (L.payments || []).forEach((B) => {
            const W = (L.students || []).find((F) => F.id === B.studentId) || {};
            q.set("/verify/" + R(B.receiptNo), {
              t: "receipt",
              n: W.nameBn || "",
              i: W.studentId || "",
              d: B.date,
              x: "৳" + B.total,
              s: U.name || "",
              e: U.eiin || "",
            });
          }),
          I !== "admin" &&
            [...q.keys()].forEach((B) => {
              c.some((W) => B.startsWith(W)) || q.delete(B);
            }),
          q
        );
      }
      const Y = (L) => (L && typeof L.toMillis == "function" ? L.toMillis() : 0);
      async function Z(L, q) {
        let V = p.collection(L);
        return (
          q && S > 0 && (V = V.where("u", ">", g.fromMillis(S))),
          (await V.get()).docs.map((U) => {
            const W = U.data();
            return (W._del && !W.id && (W.id = U.id), W);
          })
        );
      }
      async function X(L, q) {
        const V = i[I],
          U = !!(L && L.db),
          B = await p.collection("meta").get(),
          W = {};
        if ((B.docs.forEach((K) => (W[K.id] = K.data())), !W.settings)) return null;
        const F = U ? L.db : { v: 2 },
          ns = W.settings;
        (delete ns.u,
          (ns.school = ns.school || {}),
          a.forEach((K) => (ns.school[K] = (W["img_" + K] || {}).v || "")),
          // একই থাকলে পুরোনো অবজেক্টই রাখা হয়, যাতে খোলা সেটিংস পেজের পরিবর্তন হারিয়ে না যায়
          (U && F.settings && sj(F.settings) === sj(ns)) || (F.settings = ns));
        let Mt = S;
        const Rt = (K) => {
            const rt = Y(K.u);
            return (rt > Mt && (Mt = rt), delete K.u, K);
          },
          _t = V.cols.filter((K) => K !== "requests" || I === "admin"),
          Ds = await Promise.all([
            ..._t.map((K) => (K === "trash" ? Z(K, U).catch(() => []) : Z(K, U))),
            ...V.maps.map((K) => Z(K, U)),
          ]);
        if (
          (_t.forEach((K, rt) => {
            const ut = Ds[rt].map(Rt);
            ((F[K] = U ? F[K] || [] : []),
              ut.forEach((Kt) => {
                const Ls = F[K].findIndex((ya) => ya.id === Kt.id || (Kt._del && R(ya.id) === Kt.id));
                Kt._del ? Ls > -1 && F[K].splice(Ls, 1) : Ls > -1 ? (F[K][Ls] = Kt) : F[K].push(Kt);
              }));
          }),
          V.maps.forEach((K, rt) => {
            ((F[K] = U ? F[K] || {} : {}),
              Ds[_t.length + rt].map(Rt).forEach((ut) => {
                if (ut.k) {
                  if (ut._del) {
                    delete F[K][ut.k];
                    return;
                  }
                  ((F[K][ut.k] = ut.v),
                    K === "attendance" &&
                      ((F.attLog = F.attLog || {}), (F.attLog[ut.k] = { by: ut.by || "", bn: ut.bn || "" })),
                    K === "marks" &&
                      ((F.marksLog = F.marksLog || {}), (F.marksLog[ut.k] = { by: ut.by || "" })));
                }
              }));
          }),
          I === "admin")
        ) {
          const K = (await p.collection("pay").get()).docs;
          ((F._pay = {}),
            K.forEach((rt) => (F._pay[rt.id] = rt.data().v)),
            (F.teachers || []).forEach((rt) => {
              var ut, Kt;
              return (rt.salary = (Kt = (ut = F._pay[R(rt.id)]) != null ? ut : rt.salary) != null ? Kt : 0);
            }),
            (F.staff = (await n.collection("staff").get()).docs
              .map((rt) => {
                const ut = rt.data();
                return (delete ut.u, ut);
              })
              .filter((rt) => !rt._del)));
        } else
          ((F.requests = (await p.collection("requests").where("uid", "==", q).get()).docs.map((K) => {
            const rt = K.data();
            return (delete rt.u, rt);
          })),
            (F.staff = []));
        return (
          delete F._pay,
          ["ledger", "books", "loans", "log", "requests", "trash"].forEach((K) => (F[K] = F[K] || [])),
          ["salaries"].forEach((K) => (F[K] = F[K] || {})),
          (S = Mt),
          F
        );
      }
      function ot(L) {
        ((h = /* @__PURE__ */ new Map()), P(L).forEach((q, V) => h.set(V, JSON.stringify(q))));
      }
      async function j() {
        if (N && $.raw)
          try {
            await $.idbPut(N, { db: $.raw, since: S });
          } catch {}
      }
      async function A() {
        if (k) {
          y = true;
          return;
        }
        const L = $.raw;
        if (((pend = false), !(!L || !p))) {
          ((k = true), xt("saving"));
          try {
            const q = P(L),
              V = [];
            (q.forEach((U, B) => {
              const W = JSON.stringify(U);
              h.get(B) !== W && V.push(["set", B, U, W]);
            }),
              h.forEach((U, B) => {
                q.has(B) || V.push(["del", B]);
              }));
            for (let U = 0; U < V.length; U += 400) {
              const B = n.batch();
              (V.slice(U, U + 400).forEach((W) => {
                if (W[0] === "set") {
                  const F = Q(W[2]);
                  ((F.u = v.serverTimestamp()), B.set(D(W[1]), F));
                } else
                  W[1][0] === "/"
                    ? B.delete(D(W[1]))
                    : B.set(D(W[1]), {
                        _del: true,
                        id: JSON.parse(h.get(W[1]) || "{}").id || "",
                        k: JSON.parse(h.get(W[1]) || "{}").k || "",
                        u: v.serverTimestamp(),
                      });
              }),
                await B.commit(),
                V.slice(U, U + 400).forEach((W) => (W[0] === "set" ? h.set(W[1], W[3]) : h.delete(W[1]))));
            }
            (xt(navigator.onLine === false ? "offline" : "saved"), j());
          } catch (q) {
            (console.warn(q),
              xt("error"),
              u.toast(
                q && q.code === "permission-denied"
                  ? "এই কাজের অনুমতি আপনার নেই, তাই অনলাইনে সংরক্ষণ হয়নি"
                  : "অনলাইনে সংরক্ষণ করা যায়নি, ইন্টারনেট সংযোগ দেখুন",
                "warn",
              ));
          }
          ((k = false), y && ((y = false), A()));
        }
      }
      // ---- রিয়েলটাইম: অন্য কেউ কিছু বদলালে সাথে সাথে এখানে আনা ----
      let lsn = [],
        rmCb = null,
        pullT = null,
        pulling = false,
        pullAgain = false,
        pend = false,
        dirty = 0,
        myUid = null,
        lastStaff = "";
      const schedPull = (ms = 650) => {
        (clearTimeout(pullT), (pullT = setTimeout(pull, ms)));
      };
      function stopListen() {
        (lsn.forEach((L) => {
          try {
            L();
          } catch {}
        }),
          (lsn = []),
          clearTimeout(pullT));
      }
      function listen(uid) {
        if ((stopListen(), (myUid = uid), !p)) return;
        const base = g.fromMillis(Math.max(S, 1)),
          on = (q) => {
            try {
              lsn.push(
                q.onSnapshot(
                  (V) => {
                    V.metadata.hasPendingWrites || (V.docChanges().length && schedPull());
                  },
                  (V) => console.warn("listen", V && V.code),
                ),
              );
            } catch (V) {
              console.warn(V);
            }
          },
          V = i[I];
        ([...V.cols.filter((K) => K !== "requests" || I === "admin"), ...V.maps, "meta"].forEach((K) =>
          on(p.collection(K).where("u", ">", base)),
        ),
          I === "admin"
            ? (on(p.collection("pay").where("u", ">", base)), on(n.collection("staff").where("u", ">", base)))
            : (on(p.collection("requests").where("uid", "==", uid)), lsn.push(
                n
                  .collection("staff")
                  .doc(uid)
                  .onSnapshot(
                    (V) => V.metadata.hasPendingWrites || schedPull(),
                    () => {},
                  ),
              )));
      }
      async function pull() {
        if (!$.raw || $.mode !== "live" || !p) return;
        if (pulling) return void (pullAgain = true);
        if (k) return void schedPull(500);
        pulling = true;
        try {
          pend && (clearTimeout(b), await A());
          const d0 = dirty;
          let changed = 0;
          await X({ db: $.raw }, myUid);
          try {
            $.normalize($.raw);
          } catch {}
          try {
            typeof le == "function" && le();
          } catch {}
          const q = P($.raw);
          (q.forEach((U, B) => {
            const W = h.get(B);
            W !== JSON.stringify(U) && (!W || sj(JSON.parse(W)) !== sj(U)) && changed++;
          }),
            h.forEach((U, B) => {
              q.has(B) || changed++;
            }));
          let st = null,
            stOk = false;
          if (I !== "admin" && myUid) {
            try {
              ((st = await this_.myStaff(myUid)), (stOk = true));
            } catch {}
            const js = JSON.stringify(st || {});
            stOk && js !== lastStaff && ((lastStaff = js), changed++);
          }
          (d0 === dirty ? ot($.raw) : A(), changed && (j(), rmCb && rmCb(stOk ? { staff: st } : {})));
        } catch (U) {
          console.warn("pull", U);
        }
        ((pulling = false), pullAgain && ((pullAgain = false), schedPull(300)));
      }
      const this_ = {
        init: bt,
        get ready() {
          return !!p;
        },
        get status() {
          return x;
        },
        get role() {
          return I;
        },
        onStatus(L) {
          f.push(L);
        },
        user: () => d && d.currentUser,
        waitUser() {
          return new Promise((L) => {
            const q = d.onAuthStateChanged((V) => {
              (q(), L(V));
            });
          });
        },
        async signIn(L, q) {
          return d.signInWithEmailAndPassword(L, q);
        },
        async signOut() {
          try {
            await d.signOut();
          } catch {}
          (stopListen(), (rmCb = null), (h = /* @__PURE__ */ new Map()), (S = 0), (N = null));
        },
        async resetPassword(L) {
          return d.sendPasswordResetEmail(L);
        },
        async changePassword(L, q) {
          const V = d.currentUser,
            U = window.firebase;
          (await V.reauthenticateWithCredential(U.auth.EmailAuthProvider.credential(V.email, L)),
            await V.updatePassword(q));
        },
        async signUp(L, q, V) {
          const B = (await d.createUserWithEmailAndPassword(L, q)).user.uid;
          return (
            await n
              .collection("staff")
              .doc(B)
              .set({
                ...Q(V),
                uid: B,
                email: L,
                status: "pending",
                classes: [],
                subjects: [],
                teacherId: "",
                at: /* @__PURE__ */ new Date().toISOString(),
                u: v.serverTimestamp(),
              }),
            B
          );
        },
        async myStaff(L) {
          const q = await n.collection("staff").doc(L).get();
          if (!q.exists) return null;
          const V = q.data();
          return (delete V.u, V);
        },
        async load(L, q) {
          ((I = L), (N = `live3_${q}_${L}`));
          const V = await $.idbGet(N);
          S = (V && V.since) || 0;
          let U;
          try {
            U = await X(V, q);
          } catch (B) {
            if (V && V.db && B && B.code !== "permission-denied") ((U = V.db), xt("offline"));
            else throw B;
          }
          return U;
        },
        remember: ot,
        saveCache: j,
        async seed(L) {
          ((h = /* @__PURE__ */ new Map()), await A());
        },
        schedule() {
          (dirty++, (pend = true), clearTimeout(b), xt("saving"), (b = setTimeout(A, 500)));
        },
        flush() {
          return (clearTimeout(b), A());
        },
        async allocate(L, q, V) {
          const U = p.collection("counters").doc(L);
          return n.runTransaction(async (B) => {
            const W = await B.get(U),
              F = Math.max(W.exists ? W.data().n : 0, V || 0);
            return (B.set(U, { n: F + q }), F + 1);
          });
        },
        async verify(L) {
          const q = await n.collection("verify").doc(R(L)).get();
          return q.exists ? q.data() : null;
        },
        listen(L, q) {
          ((rmCb = q), listen(L));
        },
        stopListen,
        setStaffSeen(L) {
          lastStaff = JSON.stringify(L || {});
        },
        pullNow() {
          schedPull(50);
        },
      };
      return this_;
    })(),
    $ = (() => {
      const t = "sms_highschool",
        s = "demo_v2";
      let e = null,
        a = null,
        i = null,
        c = null;
      const l = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      function d() {
        return a
          ? Promise.resolve(a)
          : new Promise((x, I) => {
              try {
                const S = indexedDB.open(t, 1);
                ((S.onupgradeneeded = () => S.result.createObjectStore("kv")),
                  (S.onsuccess = () => {
                    ((a = S.result), x(a));
                  }),
                  (S.onerror = () => I(S.error)));
              } catch (S) {
                I(S);
              }
            });
      }
      const n = (x) =>
          d()
            .then(
              (I) =>
                new Promise((S) => {
                  const N = I.transaction("kv", "readonly").objectStore("kv").get(x);
                  ((N.onsuccess = () => S(N.result || null)), (N.onerror = () => S(null)));
                }),
            )
            .catch(() => null),
        p = (x, I) =>
          d()
            .then(
              (S) =>
                new Promise((N) => {
                  const R = S.transaction("kv", "readwrite");
                  (R.objectStore("kv").put(I, x),
                    (R.oncomplete = () => N(true)),
                    (R.onerror = () => N(false)));
                }),
            )
            .catch(() => false),
        v = (x) =>
          d()
            .then(
              (I) =>
                new Promise((S) => {
                  const N = I.transaction("kv", "readwrite");
                  (N.objectStore("kv").delete(x), (N.oncomplete = S), (N.onerror = S));
                }),
            )
            .catch(() => 0);
      function g() {
        try {
          typeof le == "function" && le();
        } catch {}
        if (c === "live") return at.schedule();
        c === "demo" && (clearTimeout(i), (i = setTimeout(() => p(s, e), 150)));
      }
      window.addEventListener("pagehide", () => {
        (c === "demo" && i && (clearTimeout(i), p(s, e)), c === "live" && at.flush());
      });
      function h() {
        const x = (D, P, Y, Z) => ({
            id: "c" + D,
            order: D,
            name: P,
            short: Y,
            sections: ["ক", "খ"],
            hasGroups: Z,
            teacherBySection: {},
          }),
          I = [
            x(6, "ষষ্ঠ শ্রেণি", "৬ষ্ঠ", false),
            x(7, "সপ্তম শ্রেণি", "৭ম", false),
            x(8, "অষ্টম শ্রেণি", "৮ম", false),
            x(9, "নবম শ্রেণি", "৯ম", true),
            x(10, "দশম শ্রেণি", "১০ম", true),
          ],
          S = ["c6", "c7", "c8", "c9", "c10"],
          N = ["c6", "c7", "c8"],
          R = ["c9", "c10"],
          Q = (D, P, Y, Z = "", X) => ({
            id: "s" + P,
            name: D,
            short: X || D,
            code: P,
            classes: Y,
            group: Z,
            fullMarks: 100,
            passMarks: 33,
          }),
          xt = [
            Q("বাংলা প্রথম পত্র", "101", S, "", "বাংলা ১ম"),
            Q("বাংলা দ্বিতীয় পত্র", "102", S, "", "বাংলা ২য়"),
            Q("English 1st Paper", "107", S, "", "Eng 1st"),
            Q("English 2nd Paper", "108", S, "", "Eng 2nd"),
            Q("গণিত", "109", S),
            Q("সাধারণ বিজ্ঞান", "127", N, "", "বিজ্ঞান"),
            Q("বাংলাদেশ ও বিশ্বপরিচয়", "150", S, "", "বাওবি"),
            Q("ধর্ম ও নৈতিক শিক্ষা", "111", S, "", "ধর্ম"),
            Q("তথ্য ও যোগাযোগ প্রযুক্তি", "154", S, "", "আইসিটি"),
            Q("কৃষিশিক্ষা", "134", S, "", "কৃষি"),
            Q("পদার্থবিজ্ঞান", "136", R, "বিজ্ঞান", "পদার্থ"),
            Q("রসায়ন", "137", R, "বিজ্ঞান"),
            Q("জীববিজ্ঞান", "138", R, "বিজ্ঞান", "জীব"),
            Q("উচ্চতর গণিত", "126", R, "বিজ্ঞান", "উ. গণিত"),
            Q("ইতিহাস ও বিশ্বসভ্যতা", "153", R, "মানবিক", "ইতিহাস"),
            Q("ভূগোল ও পরিবেশ", "110", R, "মানবিক", "ভূগোল"),
            Q("পৌরনীতি ও নাগরিকতা", "140", R, "মানবিক", "পৌরনীতি"),
            Q("অর্থনীতি", "141", R, "মানবিক"),
            Q("হিসাববিজ্ঞান", "146", R, "ব্যবসায় শিক্ষা", "হিসাব"),
            Q("ব্যবসায় উদ্যোগ", "143", R, "ব্যবসায় শিক্ষা", "ব্যবসায়"),
            Q("ফিন্যান্স ও ব্যাংকিং", "152", R, "ব্যবসায় শিক্ষা", "ফিন্যান্স"),
          ],
          bt = (D) => ({ c6: D[0], c7: D[1], c8: D[2], c9: D[3], c10: D[4] });
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
            secret: l() + l(),
            classes: I,
            subjects: xt,
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
              { id: "fh_m", name: "মাসিক বেতন", type: "monthly", amounts: bt([300, 300, 350, 400, 400]) },
              { id: "fh_a", name: "ভর্তি ও সেশন ফি", type: "yearly", amounts: bt([1500, 1500, 1500, 2e3, 2e3]) },
              { id: "fh_e", name: "পরীক্ষার ফি", type: "once", amounts: bt([250, 250, 250, 350, 350]) },
              { id: "fh_d", name: "উন্নয়ন ফি", type: "once", amounts: bt([500, 500, 500, 500, 500]) },
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
          trash: [],
          attLog: {},
          marksLog: {},
        };
      }
      function b(x) {
        const I = h();
        for (const S of Object.keys(I)) x[S] === void 0 && (x[S] = I[S]);
        for (const S of Object.keys(I.settings)) x.settings[S] === void 0 && (x.settings[S] = I.settings[S]);
        for (const S of Object.keys(I.settings.school))
          x.settings.school[S] === void 0 && (x.settings.school[S] = "");
        for (const S of Object.keys(I.settings.docs))
          x.settings.docs[S] === void 0 && (x.settings.docs[S] = I.settings.docs[S]);
        return (
          x.settings.subjects.forEach((S) => {
            (S.short || (S.short = S.name),
              S.passMarks == null && (S.passMarks = Math.round(S.fullMarks * 0.33)));
          }),
          x.settings.classes.forEach((S) => {
            S.teacherBySection || (S.teacherBySection = {});
          }),
          x.settings._feeY ||
            ((x.settings._feeY = 1),
            (x.settings.feeHeads || []).forEach((S) => {
              S.type === "once" && !/পরীক্ষা/.test(S.name) && (S.type = "yearly");
            })),
          (x.exams || []).forEach((S) => {
            S.schedule || (S.schedule = []);
          }),
          (x.teachers || []).forEach((S) => {
            S.subjects || (S.subjects = k(x, S.subject));
          }),
          (x.v = 2),
          x
        );
      }
      function k(x, I) {
        return (x.settings.subjects || []).filter((N) => I && N.name === I).map((N) => N.id);
      }
      async function y(x) {
        try {
          const I = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("sms::" + x));
          return [...new Uint8Array(I)].map((S) => S.toString(16).padStart(2, "0")).join("");
        } catch {
          return "x" + f("sms::" + x);
        }
      }
      function f(x) {
        let I = 2166136261,
          S = 5381;
        for (let N = 0; N < x.length; N++) {
          const R = x.charCodeAt(N);
          ((I = Math.imul(I ^ R, 16777619)), (S = ((S << 5) + S + R) | 0));
        }
        return (I >>> 0).toString(16).padStart(8, "0") + (S >>> 0).toString(16).padStart(8, "0");
      }
      return {
        uid: l,
        hash: y,
        quickHash: f,
        defaults: h,
        idbGet: n,
        idbPut: p,
        get mode() {
          return c;
        },
        get raw() {
          return e;
        },
        get settings() {
          return e.settings;
        },
        isSetup() {
          return !!e;
        },
        normalize(x) {
          return b(x);
        },
        async openDemo(x) {
          if (((c = "demo"), (e = x ? null : await n(s)), !e)) {
            ((e = h()),
              Object.assign(e.settings.school, {
                name: "আদর্শ উচ্চ বিদ্যালয়",
                nameEn: "Adarsha High School",
                eiin: "১১২২৩৩",
                address: "কলেজ রোড, সদর, ময়মনসিংহ",
              }));
            try {
              const I = JSON.parse(localStorage.getItem("sms_brand") || "null");
              I && I.name && Object.assign(e.settings.school, { name: I.name, logo: I.logo || "" });
            } catch {}
            (Oe.fill(e), b(e));
            try {
              ((e.routine = {}), Qe(Gt()));
            } catch {}
            await p(s, e);
          }
          return (b(e), e);
        },
        async resetDemo() {
          return (await v(s), this.openDemo(true));
        },
        async openLive(x, I) {
          return ((c = "live"), (e = await at.load(x, I)), e && (b(e), at.remember(e), at.saveCache()), e);
        },
        async createLive(x) {
          return ((c = "live"), (e = h()), Object.assign(e.settings.school, x), await at.seed(e), e);
        },
        async allocSerials(x, I) {
          const S = /* @__PURE__ */ new Date().getFullYear(),
            N = x + S;
          if (c === "live") return at.allocate(N, I, e.settings.serials[N] || 0);
          const R = (e.settings.serials[N] || 0) + 1;
          return ((e.settings.serials[N] = R + I - 1), g(), R);
        },
        async serial(x) {
          const I = /* @__PURE__ */ new Date().getFullYear(),
            S = await this.allocSerials(x, 1);
          return `${x}-${I}-${String(S).padStart(4, "0")}`;
        },
        close() {
          ((e = null), (c = null));
        },
        save() {
          g();
        },
        all(x) {
          return e[x];
        },
        find(x, I) {
          return e[x].find((S) => S.id === I);
        },
        upsert(x, I) {
          if (!I.id) ((I.id = l()), (I.createdAt = /* @__PURE__ */ new Date().toISOString()), e[x].push(I));
          else {
            const S = e[x].findIndex((N) => N.id === I.id);
            S > -1 ? (e[x][S] = { ...e[x][S], ...I }) : e[x].push(I);
          }
          return (g(), I);
        },
        remove(x, I) {
          ((e[x] = e[x].filter((S) => S.id !== I)), g());
        },
        getAtt(x, I, S) {
          return e.attendance[`${x}|${I}|${S}`] || null;
        },
        setAtt(x, I, S, N) {
          ((e.attendance[`${x}|${I}|${S}`] = N), g());
        },
        exportJSON() {
          return JSON.stringify({
            app: "sms-highschool",
            version: 2,
            mode: c,
            exportedAt: /* @__PURE__ */ new Date().toISOString(),
            data: e,
          });
        },
        async importJSON(x) {
          const I = JSON.parse(x),
            S = I.data || I;
          if (!S.settings || !Array.isArray(S.students)) throw new Error("bad");
          ((e = b(S)), g(), c === "live" && (await at.flush()));
        },
        async wipeData() {
          const x = e.settings,
            I = h();
          ((I.settings = x), (I.settings.serials = {}), (e = I), g(), c === "live" && (await at.flush()));
        },
      };
    })(),
    Oe = {
      fill(t) {
        const s = (D) => D[Math.floor(Math.random() * D.length)],
          e = (D, P) => D + Math.floor(Math.random() * (P - D + 1)),
          a = [
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
          i = [
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
          c = [
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
          l = [
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
          d = [
            "রাশিদা বেগম",
            "নাসরিন আক্তার",
            "শাহনাজ পারভীন",
            "মর্জিনা খাতুন",
            "ফাতেমা বেগম",
            "সালমা আক্তার",
            "রোকসানা বেগম",
            "হাসিনা খাতুন",
          ],
          n = ["চরপাড়া", "নতুনবাজার", "পূর্বপাড়া", "কলেজ রোড", "স্টেশন রোড", "মধ্যপাড়া"],
          p = ["A+", "B+", "O+", "AB+", "O-", "B-"],
          v = /* @__PURE__ */ new Date().getFullYear(),
          g = t.settings;
        Object.assign(g.school, {
          headName: g.school.headName || "মোঃ আব্দুল মান্নান",
          phone: g.school.phone || "01711-000000",
          established: g.school.established || "১৯৬৮",
          nameEn: g.school.nameEn || "Charpara High School",
        });
        let h = 0;
        g.classes.forEach((D) =>
          D.sections.forEach((P) => {
            const Y = e(10, 13);
            for (let Z = 1; Z <= Y; Z++) {
              const X = Math.random() < 0.5 ? "M" : "F";
              h++;
              const ot = new Date(v - (D.order + 5), e(0, 11), e(1, 27));
              t.students.push({
                id: "st" + h,
                studentId: `${v}${String(D.order).padStart(2, "0")}${String(h).padStart(3, "0")}`,
                nameBn: s(X === "M" ? a : i) + " " + s(c),
                nameEn: "",
                classId: D.id,
                section: P,
                group: D.hasGroups ? s(g.groups) : "",
                roll: Z,
                gender: X,
                dob: o.iso(ot),
                religion: Math.random() < 0.9 ? "ইসলাম" : "হিন্দু",
                blood: s(p),
                father: s(l),
                mother: s(d),
                phone: "01" + s(["7", "8", "9", "3", "5", "6"]) + String(e(1e7, 99999999)),
                address: s(n) + ", সদর",
                admissionDate: `${v}-01-0${e(1, 8)}`,
                sscReg: D.order >= 9 ? String(e(191e7, 1999999999)) : "",
                status: "active",
                photo: "",
                custom: {},
              });
            }
          }),
        );
        for (let D = 1; D <= 8; D++) {
          const P = Math.random() < 0.5 ? "M" : "F";
          (h++,
            t.students.push({
              id: "st" + h,
              studentId: `${v - 1}10${String(D).padStart(3, "0")}`,
              nameBn: s(P === "M" ? a : i) + " " + s(c),
              nameEn: "",
              classId: "c10",
              section: "ক",
              group: s(g.groups),
              roll: D,
              gender: P,
              dob: o.iso(new Date(v - 17, e(0, 11), e(1, 27))),
              religion: "ইসলাম",
              blood: s(p),
              father: s(l),
              mother: s(d),
              phone: "01" + s(["7", "8", "9"]) + String(e(1e7, 99999999)),
              address: s(n) + ", সদর",
              admissionDate: `${v - 5}-01-05`,
              sscReg: String(e(181e7, 1899999999)),
              sscRoll: String(e(1e5, 999999)),
              sscGpa: s(["5.00", "4.89", "4.67", "4.50", "4.11", "3.94"]),
              sscYear: String(v - 1),
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
        ].forEach((D, P) =>
          t.teachers.push({
            id: "t" + (P + 1),
            name: D[0],
            designation: D[1],
            subject: D[2],
            type: D[3],
            qualification: D[4],
            salary: D[5],
            phone: "01" + s(["7", "8", "9", "1"]) + String(e(1e7, 99999999)),
            email: "",
            joinDate: `${e(2005, 2022)}-0${e(1, 9)}-15`,
            address: "",
            photo: "",
            status: "active",
          }),
        ),
          g.classes.forEach((D, P) =>
            D.sections.forEach((Y, Z) => {
              D.teacherBySection[Y] = "t" + (2 + ((P * 2 + Z) % 10));
            }),
          ));
        const k = /* @__PURE__ */ new Date();
        for (let D = 56; D >= 1; D--) {
          const P = new Date(k);
          if ((P.setDate(k.getDate() - D), g.weeklyOff.includes(P.getDay()))) continue;
          const Y = o.iso(P),
            Z = 0.84 + Math.random() * 0.12;
          g.classes.forEach((X) =>
            X.sections.forEach((ot) => {
              const j = {};
              (t.students
                .filter((A) => A.classId === X.id && A.section === ot && A.status === "active")
                .forEach((A) => {
                  const L = Math.random();
                  j[A.id] = L < Z ? "P" : L < Z + 0.03 ? "L" : "A";
                }),
                (t.attendance[`${Y}|${X.id}|${ot}`] = j));
            }),
          );
        }
        const y = [6, 0, 1, 2, 3, 4];
        g.classes.forEach((D) =>
          D.sections.forEach((P) => {
            const Y = g.subjects.filter((X) => X.classes.includes(D.id) && !X.group),
              Z = {};
            (y.forEach((X, ot) => {
              ((Z[X] = {}),
                g.periods
                  .filter((j) => !j.brk)
                  .forEach((j, A) => {
                    const L = Y[(ot + A + D.order) % Y.length],
                      q = t.teachers.find((V) => V.subject === L.name);
                    Z[X][j.id] = { subjectId: L.id, teacherId: q ? q.id : "" };
                  }));
            }),
              (t.routine[`${D.id}|${P}`] = Z));
          }),
        );
        const f = {
            id: "ex1",
            name: "অর্ধবার্ষিক পরীক্ষা",
            session: String(v),
            classes: g.classes.map((D) => D.id),
            startDate: `${v}-06-15`,
            endDate: `${v}-06-28`,
            published: true,
          },
          x = {
            id: "ex2",
            name: "বার্ষিক পরীক্ষা",
            session: String(v),
            classes: g.classes.map((D) => D.id),
            startDate: `${v}-12-01`,
            endDate: `${v}-12-14`,
            published: false,
          };
        (t.exams.push(f, x),
          t.students
            .filter((D) => D.status === "active")
            .forEach((D) => {
              const P = e(45, 92),
                Y = {};
              (g.subjects
                .filter((Z) => Z.classes.includes(D.classId) && (!Z.group || Z.group === D.group))
                .forEach((Z) => {
                  Y[Z.id] = Math.max(18, Math.min(100, P + e(-16, 12)));
                }),
                (t.marks[`ex1|${D.id}`] = Y));
            }));
        let I = 0;
        const S = k.getMonth() + 1;
        (t.students
          .filter((D) => D.status === "active")
          .forEach((D) => {
            const P = e(Math.max(1, S - 3), S);
            for (let Y = 1; Y <= P; Y += e(1, 3)) {
              const Z = Math.min(P - Y + 1, e(1, 3)),
                X = [];
              for (let A = 0; A < Z; A++)
                X.push({
                  headId: "fh_m",
                  label: "মাসিক বেতন",
                  month: `${v}-${String(Y + A).padStart(2, "0")}`,
                  amount: g.feeHeads[0].amounts[D.classId],
                });
              (Y === 1 &&
                X.push({ headId: "fh_a", label: "ভর্তি ও সেশন ফি", amount: g.feeHeads[1].amounts[D.classId] }),
                I++);
              const ot = `${v}-${String(Math.min(Y + Z - 1, S)).padStart(2, "0")}-${String(e(3, 20)).padStart(2, "0")}`,
                j = X.reduce((A, L) => A + L.amount, 0);
              (t.payments.push({
                id: "pay" + I,
                receiptNo: `RCP-${v}-${String(I).padStart(4, "0")}`,
                studentId: D.id,
                date: ot > o.iso(k) ? o.iso(k) : ot,
                items: X,
                discount: 0,
                total: j,
                method: s(["নগদ", "নগদ", "বিকাশ", "নগদ"]),
                note: "",
              }),
                (Y += Z - 1));
            }
          }),
          (g.serials["RCP" + v] = I));
        for (let D = Math.max(1, S - 5); D <= S; D++) {
          const P = `${v}-${String(D).padStart(2, "0")}`;
          ([
            ["বিদ্যুৎ ও পানি বিল", e(4500, 7e3)],
            ["স্টেশনারি ও ছাপা", e(2e3, 5e3)],
            ["রক্ষণাবেক্ষণ", e(1e3, 6e3)],
          ].forEach(([Y, Z], X) =>
            t.ledger.push({
              id: `lg${D}_${X}`,
              type: "expense",
              date: `${P}-1${X}`,
              category: Y,
              amount: Z,
              note: "",
            }),
          ),
            D < S &&
              ((t.salaries[P] = {}),
              t.teachers.forEach((Y) => {
                t.salaries[P][Y.id] = { paid: true, date: `${P}-28`, amount: Y.salary };
              })));
        }
        t.ledger.push({
          id: "lgg",
          type: "income",
          date: `${v}-${String(Math.max(1, S - 2)).padStart(2, "0")}-05`,
          category: "সরকারি অনুদান",
          amount: 15e4,
          note: "অবকাঠামো অনুদান",
        });
        const N = (D) => {
          const P = new Date(k);
          return (P.setDate(k.getDate() + D), o.iso(P));
        };
        (t.notices.push(
          {
            id: "n1",
            kind: "নোটিশ",
            title: "বার্ষিক পরীক্ষার সময়সূচি প্রকাশ",
            body: "আগামী ১ ডিসেম্বর থেকে বার্ষিক পরীক্ষা শুরু হবে। বিস্তারিত সময়সূচি নোটিশ বোর্ডে দেওয়া আছে। সকল শিক্ষার্থীকে বকেয়া বেতন পরিশোধ করে প্রবেশপত্র সংগ্রহ করতে বলা হলো।",
            date: N(-2),
            pinned: true,
            eventDate: "",
          },
          {
            id: "n2",
            kind: "ইভেন্ট",
            title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
            body: "বিদ্যালয় মাঠে সকাল ৯টায় উদ্বোধন।",
            date: N(-5),
            eventDate: N(9),
            pinned: false,
          },
          {
            id: "n3",
            kind: "ছুটি",
            title: "মহান বিজয় দিবস",
            body: "বিদ্যালয় বন্ধ থাকবে।",
            date: N(-6),
            eventDate: `${v}-12-16`,
            pinned: false,
          },
          {
            id: "n4",
            kind: "নোটিশ",
            title: "অভিভাবক সমাবেশ",
            body: "দশম শ্রেণির অভিভাবকদের উপস্থিত থাকার অনুরোধ করা হলো।",
            date: N(-9),
            eventDate: N(4),
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
          ].forEach((D, P) =>
            t.books.push({
              id: "b" + (P + 1),
              title: D[0],
              author: D[1],
              copies: D[2],
              code: "L-" + String(101 + P),
              shelf: "তাক " + (1 + (P % 3)),
            }),
          ));
        const R = t.teachers.filter((D) => D.type === "শিক্ষক");
        (R.forEach((D, P) =>
          t.staff.push({
            uid: "demo_" + D.id,
            email: `teacher${P + 1}@demo.school`,
            name: D.name,
            phone: D.phone,
            status: "active",
            teacherId: D.id,
            extra: [],
            classes: [],
            subjects: [],
            at: `${v}-01-10T09:00:00`,
          }),
        ),
          t.staff.push(
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
              joinDate: o.iso(k),
              address: "স্টেশন রোড, সদর",
              blood: "B+",
              photo: "",
              status: "pending",
              teacherId: "",
              extra: [],
              classes: [],
              subjects: [],
              at: new Date(k.getTime() - 864e5).toISOString(),
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
        const Q = R[2];
        Q &&
          t.requests.push({
            id: "rq1",
            uid: "demo_" + Q.id,
            teacherId: Q.id,
            name: Q.name,
            before: { phone: Q.phone, address: "" },
            after: { phone: "01755667788", address: "কলেজ রোড, সদর" },
            note: "নতুন নম্বর নিয়েছি",
            status: "pending",
            at: /* @__PURE__ */ new Date().toISOString(),
          });
        const xt = (D, P) => {
          const Y = g.classes.find((ot) => ot.id === D),
            Z = Y && Y.teacherBySection[P],
            X = t.teachers.find((ot) => ot.id === Z);
          return X
            ? { by: "demo_" + X.id, bn: X.name }
            : { by: "admin", bn: g.school.headName || "সুপার অ্যাডমিন" };
        };
        (Object.keys(t.attendance).forEach((D) => {
          const [, P, Y] = D.split("|");
          t.attLog[D] = xt(P, Y);
        }),
          t.payments.forEach((D) => {
            const P = t.students.find((Z) => Z.id === D.studentId);
            if (!P) return;
            const Y =
              Math.random() < 0.75
                ? xt(P.classId, P.section)
                : { by: "admin", bn: g.school.headName || "সুপার অ্যাডমিন" };
            Object.assign(D, Y, { cls: `${P.classId}|${P.section}` });
          }));
        const bt = o.iso(new Date(k.getTime() - 7 * 864e5));
        (t.payments
          .filter((D) => D.date >= bt)
          .forEach((D) => {
            const P = t.students.find((Y) => Y.id === D.studentId);
            t.log.push({
              id: "lgp" + D.id,
              by: D.by,
              bn: D.bn,
              role: D.by === "admin" ? "admin" : "teacher",
              type: "fee",
              text: `ফি আদায়: ${P.nameBn} · ৳${D.total} · রসিদ ${D.receiptNo}`,
              at:
                D.date +
                "T1" +
                Math.floor(Math.random() * 6) +
                ":" +
                String(10 + Math.floor(Math.random() * 49)) +
                ":00",
            });
          }),
          Object.keys(t.attendance)
            .filter((D) => D >= bt)
            .forEach((D) => {
              const [P, Y, Z] = D.split("|"),
                X = t.attLog[D],
                ot = Object.values(t.attendance[D]).filter((j) => j === "A").length;
              t.log.push({
                id: "lga" + D,
                by: X.by,
                bn: X.bn,
                role: X.by === "admin" ? "admin" : "teacher",
                type: "attendance",
                text: `হাজিরা: ${g.classes.find((j) => j.id === Y).short} ${Z} শাখা · অনুপস্থিত ${ot} জন`,
                at: P + "T10:0" + Math.floor(Math.random() * 9) + ":00",
              });
            }),
          t.loans.push(
            { id: "l1", bookId: "b1", studentId: "st3", issueDate: N(-20), dueDate: N(-6), returnDate: "" },
            { id: "l2", bookId: "b5", studentId: "st40", issueDate: N(-4), dueDate: N(10), returnDate: "" },
          ));
      },
    },
    E = () => $.settings,
    _ = () => $.raw,
    et = (t) => E().classes.find((s) => s.id === t),
    gt = (t) => (et(t) || {}).name || "—",
    it = (t) => (et(t) || {}).short || "—",
    tt = () => [...E().classes].sort((t, s) => t.order - s.order),
    ht = () => $.all("students").filter((t) => t.status === "active"),
    wt = (t) => E().weeklyOff.includes(/* @__PURE__ */ new Date(t + "T00:00").getDay()),
    G = () => o.iso(/* @__PURE__ */ new Date()),
    ee = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"],
    Xt = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
    bs = [6, 0, 1, 2, 3, 4, 5],
    Vt = (t) => ($.find("teachers", t) || {}).name || "",
    $t = (t) => E().subjects.find((s) => s.id === t),
    Et = (t) =>
      t.sort((s, e) => {
        var a, i;
        return (
          (((a = et(s.classId)) == null ? void 0 : a.order) || 0) -
            (((i = et(e.classId)) == null ? void 0 : i.order) || 0) ||
          s.section.localeCompare(e.section) ||
          +s.roll - +e.roll
        );
      }),
    qt = (t, s) =>
      (s ? '<option value="">সব শ্রেণি</option>' : "") +
      tt()
        .map((e) => `<option value="${e.id}" ${e.id === t ? "selected" : ""}>${m(e.name)}</option>`)
        .join(""),
    Dt = (t, s, e) => {
      const a = et(t);
      return (
        (e ? '<option value="">সব শাখা</option>' : "") +
        (a
          ? a.sections
              .map((i) => `<option value="${m(i)}" ${i === s ? "selected" : ""}>${m(i)} শাখা</option>`)
              .join("")
          : "")
      );
    },
    qs = (t) => `${it(t.classId)} · ${t.section} শাখা · রোল ${o.n(t.roll)}`;
  function gs(t) {
    return E()
      .subjects.filter((s) => s.classes.includes(t.classId) && (!s.group || s.group === t.group))
      .sort((s, e) => s.code.localeCompare(e.code));
  }
  function Lt(t) {
    return E()
      .subjects.filter((s) => s.classes.includes(t))
      .sort((s, e) => s.code.localeCompare(e.code));
  }
  function ae(t) {
    const s = [...E().grading].sort((e, a) => a.min - e.min);
    return s.find((e) => t >= e.min) || s[s.length - 1];
  }
  function Be(t) {
    const s = [...E().grading].sort((e, a) => a.gp - e.gp);
    return (s.find((e) => t >= e.gp) || s[s.length - 1]).grade;
  }
  function Os(t, s) {
    const e = _().marks[`${t}|${s.id}`] || {},
      a = gs(s).map((p) => {
        const v = e[p.id],
          g = v !== void 0 && v !== "" && v !== null;
        if (!g) return { s: p, has: g, v: null };
        const h = (v / p.fullMarks) * 100,
          b = v < p.passMarks,
          k = b ? { grade: "F", gp: 0 } : ae(h);
        return { s: p, has: g, v: +v, pct: h, fail: b, grade: k.grade, gp: k.gp };
      }),
      i = a.filter((p) => p.has),
      c = i.filter((p) => p.fail).length,
      l = i.reduce((p, v) => p + v.v, 0),
      d = a.reduce((p, v) => p + v.s.fullMarks, 0),
      n = i.length ? (c ? 0 : i.reduce((p, v) => p + v.gp, 0) / i.length) : 0;
    return {
      rows: a,
      total: l,
      full: d,
      gpa: n,
      grade: c ? "F" : i.length ? Be(n) : "—",
      pass: i.length > 0 && !c,
      fails: c,
      complete: i.length === a.length && a.length > 0,
      entered: i.length,
    };
  }
  function ts(t, s) {
    const e = ht()
      .filter((i) => i.classId === s)
      .map((i) => ({ st: i, r: Os(t, i) }))
      .filter((i) => i.r.entered);
    (e.sort((i, c) => c.r.pass - i.r.pass || c.r.gpa - i.r.gpa || c.r.total - i.r.total),
      e.forEach((i, c) => (i.pos = c + 1)));
    const a = {};
    return (
      e.forEach((i) => {
        (a[i.st.section] = a[i.st.section] || []).push(i);
      }),
      Object.values(a).forEach((i) => i.forEach((c, l) => (c.secPos = l + 1))),
      e
    );
  }
  function ne() {
    const t = [...$.all("exams")].sort((e, a) => (e.startDate < a.startDate ? 1 : -1)),
      s = new Set(Object.keys(_().marks).map((e) => e.split("|")[0]));
    return (t.find((e) => s.has(e.id)) || t[0] || {}).id || "";
  }
  function Bs() {
    return E().feeHeads.find((t) => t.type === "monthly");
  }
  function ie(t) {
    const s = /* @__PURE__ */ new Set();
    return (
      $.all("payments").forEach((e) => {
        e.studentId === t.id &&
          e.items.forEach((a) => {
            a.month && s.add(a.month);
          });
      }),
      s
    );
  }
  function Yt(t) {
    const s = Bs();
    if (!s) return { months: [], amount: 0 };
    const e = +E().school.session || /* @__PURE__ */ new Date().getFullYear(),
      a = /* @__PURE__ */ new Date(),
      i = e < a.getFullYear() ? 12 : e > a.getFullYear() ? 0 : a.getMonth() + 1,
      c = ie(t),
      l = [],
      d = t.admissionDate && t.admissionDate.startsWith(String(e)) ? +t.admissionDate.slice(5, 7) : 1;
    for (let n = d; n <= i; n++) {
      const p = `${e}-${String(n).padStart(2, "0")}`;
      c.has(p) || l.push(p);
    }
    return { months: l, amount: l.length * (+s.amounts[t.classId] || 0), rate: +s.amounts[t.classId] || 0 };
  }
  const Ae = () =>
      $.all("payments").map((t) => ({
        id: t.id,
        type: "income",
        date: t.date,
        category: "শিক্ষার্থী ফি",
        amount: t.total,
        note: t.receiptNo,
        auto: true,
        studentId: t.studentId,
      })),
    As = () => [...Ae(), ...$.all("ledger")].sort((t, s) => (t.date < s.date ? 1 : -1));
  function He() {
    const t = {};
    return (
      Object.entries(_().attendance).forEach(([s, e]) => {
        const a = s.split("|")[0];
        ((t[a] = t[a] || { p: 0, t: 0 }),
          Object.values(e).forEach((i) => {
            (t[a].t++, i === "P" && t[a].p++);
          }));
      }),
      t
    );
  }
  function Hs(t, s, e) {
    let a = 0,
      i = 0,
      c = 0;
    const l = [];
    return (
      Object.entries(_().attendance).forEach(([d, n]) => {
        const [p, v, g] = d.split("|");
        if (v !== t.classId || g !== t.section || !(t.id in n) || (s && p < s) || (e && p > e)) return;
        const h = n[t.id];
        (h === "P" ? a++ : h === "A" ? i++ : c++, l.push([p, h]));
      }),
      l.sort((d, n) => (d[0] < n[0] ? -1 : 1)),
      { p: a, a: i, l: c, t: a + i + c, days: l }
    );
  }
  const $s = {
      get() {
        try {
          return localStorage.getItem("sms_mode") || "live";
        } catch {
          return "live";
        }
      },
      set(t) {
        try {
          t ? localStorage.setItem("sms_mode", t) : localStorage.removeItem("sms_mode");
        } catch {}
      },
    },
    de = { logged: () => !!$.raw },
    J = {
      role: "admin",
      uid: "admin",
      name: "সুপার অ্যাডমিন",
      email: "",
      teacherId: "",
      classes: [],
      subjects: [],
    },
    O = () => J.role === "admin",
    Gt = () => tt().flatMap((t) => t.sections.map((s) => `${t.id}|${s}`)),
    Ot = (t) => {
      const [s, e] = t.split("|");
      return `${it(s)} ${e}`;
    },
    Bt = () => (O() ? Gt() : Gt().filter((t) => J.classes.includes(t))),
    kt = (t, s) => O() || J.classes.includes(`${t}|${s}`),
    Ce = (t, s, e) => kt(s, e) || J.subjects.includes(t),
    At = () => [...new Set(Bt().map((t) => t.split("|")[0]))];
  function Cs(t, s = []) {
    const e = new Set(s || []);
    return (
      E().classes.forEach((a) =>
        Object.entries(a.teacherBySection || {}).forEach(([i, c]) => {
          c && c === t && e.add(`${a.id}|${i}`);
        }),
      ),
      [...e]
    );
  }
  function le() {
    !O() ||
      !$.raw ||
      (_().staff || []).forEach((t) => {
        if (!t.teacherId) return;
        const s = $.find("teachers", t.teacherId);
        ((t.classes = Cs(t.teacherId, t.extra)),
          (t.subjects = s ? s.subjects || [] : []),
          (t.name = s ? s.name : t.name));
      });
  }
  function ce(t) {
    const s = $.find("teachers", t.teacherId) || {};
    Object.assign(J, {
      role: "teacher",
      uid: t.uid,
      name: s.name || t.name,
      email: t.email || "",
      teacherId: t.teacherId,
      classes: t.classes || [],
      subjects: t.subjects || s.subjects || [],
      notes: t.notes || [],
    });
  }
  function oe(t, s) {
    Object.assign(J, {
      role: "admin",
      uid: t || "admin",
      name: ($.raw && E().school.headName) || "সুপার অ্যাডমিন",
      email: s || "",
      teacherId: "",
      classes: [],
      subjects: [],
    });
  }
  function vt(t, s, e = "") {
    try {
      $.upsert("log", {
        by: J.uid,
        bn: J.name,
        role: J.role,
        type: t,
        text: s,
        ref: e,
        at: /* @__PURE__ */ new Date().toISOString(),
      });
    } catch {}
  }
  // রিসাইকেল বিন: মুছে ফেলা জিনিস এখানে জমা থাকে, চাইলে ফিরিয়ে আনা যায়
  const TRASH_KIND = {
    students: "শিক্ষার্থী",
    teachers: "শিক্ষক/কর্মচারী",
    payments: "ফি-এর রসিদ",
    ledger: "আয়-ব্যয়ের হিসাব",
    notices: "নোটিশ",
    books: "বই",
    exams: "পরীক্ষা",
  };
  function trashIt(col, id, label, extra) {
    const rec = $.find(col, id);
    if (!rec) return false;
    return (
      $.upsert("trash", {
        col,
        data: JSON.parse(JSON.stringify(rec)),
        extra: extra || null,
        label: label || "",
        by: J.uid,
        bn: J.name,
        role: J.role,
        at: new Date().toISOString(),
      }),
      $.remove(col, id),
      vt("delete", `মুছে ফেলা হয়েছে (${TRASH_KIND[col] || col}): ${label || ""}`, id),
      true
    );
  }
  function restoreTrash(t) {
    const col = t.col,
      d = t.data;
    if (!d || !$.all(col)) return false;
    if ($.find(col, d.id)) return (u.toast("এটি আগে থেকেই তালিকায় আছে", "warn"), false);
    if (col === "students" && d.status === "active") {
      const k = $.all("students").find(
        (x) => x.status === "active" && x.classId === d.classId && x.section === d.section && +x.roll == +d.roll,
      );
      k && (d.roll = _s(d.classId, d.section));
    }
    return (
      _()[col].push(d),
      t.extra && t.extra.marks && Object.assign(_().marks, t.extra.marks),
      $.remove("trash", t.id),
      vt("restore", `ফিরিয়ে আনা হয়েছে (${TRASH_KIND[col] || col}): ${t.label || ""}`, d.id),
      true
    );
  }
  const re = () =>
      '<div class="toasts" id="toasts"></div><div class="tip" id="tip"></div><div id="printRoot"></div>',
    Ne = {
      "auth/invalid-credential": "ইমেইল বা পাসওয়ার্ড মেলেনি",
      "auth/wrong-password": "ইমেইল বা পাসওয়ার্ড মেলেনি",
      "auth/user-not-found": "ইমেইল বা পাসওয়ার্ড মেলেনি",
      "auth/invalid-email": "ইমেইল ঠিকানা সঠিক নয়",
      "auth/email-already-in-use": "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট আছে",
      "auth/weak-password": "পাসওয়ার্ড অন্তত ৬ অক্ষরের দিন",
      "auth/network-request-failed": "ইন্টারনেট সংযোগ পাওয়া যায়নি",
      "auth/too-many-requests": "অনেকবার চেষ্টা হয়েছে, কিছুক্ষণ পরে আবার চেষ্টা করুন",
      "auth/operation-not-allowed": "Firebase-এ Email/Password লগইন চালু করা নেই",
      "permission-denied": "অনুমতি নেই, Firestore-এর রুলস ঠিকমতো বসানো হয়েছে কিনা দেখুন",
    },
    Ct = (t) => Ne[t && t.code] || "কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন";
  function me() {
    try {
      const t = E().school;
      localStorage.setItem(
        "sms_brand",
        JSON.stringify({ name: t.name, logo: t.logo && t.logo.length < 4e5 ? t.logo : "" }),
      );
    } catch {}
  }
  function Ns() {
    try {
      return JSON.parse(localStorage.getItem("sms_brand") || "null") || {};
    } catch {
      return {};
    }
  }
  function Pe() {
    return `<svg class="art" viewBox="0 0 640 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><pattern id="ruled" width="640" height="34" patternUnits="userSpaceOnUse"><line x1="0" y1="33" x2="640" y2="33" stroke="#ffffff" stroke-opacity=".05"/></pattern></defs>
    <rect width="640" height="900" fill="url(#ruled)"/>
    <line x1="92" y1="0" x2="92" y2="900" stroke="#f0a830" stroke-opacity=".35"/>
    <g transform="translate(360 470) rotate(-28)" class="pencil">
      <rect x="-210" y="-15" width="380" height="30" rx="3" fill="#f0a830"/><rect x="-210" y="-15" width="380" height="10" fill="#f6c25e"/>
      <rect x="170" y="-15" width="34" height="30" fill="#c9cdd6"/><rect x="176" y="-15" width="3" height="30" fill="#a5aab6"/><rect x="186" y="-15" width="3" height="30" fill="#a5aab6"/><rect x="196" y="-15" width="3" height="30" fill="#a5aab6"/>
      <rect x="204" y="-15" width="30" height="30" rx="5" fill="#e6878a"/>
      <path d="M-210 -15 L-262 0 L-210 15 Z" fill="#edd2a6"/><path d="M-246 -5 L-262 0 L-246 5 Z" fill="#2b2f3a"/>
    </g>
    <g fill="none" stroke="#ffffff" stroke-opacity=".16" stroke-width="1.5"><circle cx="470" cy="210" r="64"/><path d="M406 210 h128 M470 146 v128"/><path d="M150 680 l90 -150 l90 150 z"/></g>
  </svg>`;
  }
  function ps(t, s, e, a) {
    const i = Ns();
    ((document.documentElement.dataset.theme = "light"),
      (document.body.innerHTML =
        re() +
        `
  <div class="auth">
    <div class="auth-art">${Pe()}
      <div class="brand"><span class="logo-mark">${i.logo ? `<img src="${i.logo}" alt="">` : M("school")}</span> ${m(i.name || SCHOOL_NAME)}</div>
      <h2>${a}</h2>
      <div class="foot"><span>৬ষ্ঠ থেকে ১০ম শ্রেণি</span><span>হাজিরা, পরীক্ষা, ফি, সনদ</span><span>QR দিয়ে যাচাই</span></div>
    </div>
    <div class="auth-form"><div class="auth-card view-enter">
      <h1>${t}</h1><p class="lead">${s}</p>${e}
    </div></div>
  </div>`));
  }
  function Fe() {
    (ps(
      "স্কুলের তথ্য দিন",
      "প্রথমবার প্রবেশ করেছেন। স্কুলের মূল তথ্য দিন, বাকি সব পরে সেটিংস থেকে বদলানো যাবে। সিস্টেম একদম ফাঁকা অবস্থায় শুরু হবে",
      `
    <form id="setupForm" autocomplete="off">
      <div class="mb-3"><label class="form-label">স্কুলের নাম</label><input class="form-control" name="name" required placeholder="যেমন: চরপাড়া উচ্চ বিদ্যালয়"></div>
      <div class="row g-3 mb-3"><div class="col-6"><label class="form-label">EIIN</label><input class="form-control" name="eiin" inputmode="numeric"></div>
      <div class="col-6"><label class="form-label">শিক্ষাবর্ষ</label><input class="form-control" name="session" value="${/* @__PURE__ */ new Date().getFullYear()}"></div></div>
      <div class="mb-4"><label class="form-label">ঠিকানা</label><input class="form-control" name="address" placeholder="গ্রাম/রোড, উপজেলা, জেলা"></div>
      <button class="btn btn-primary btn-lg w-100">শুরু করুন</button><div class="err" id="err"></div>
    </form>`,
      "ভর্তি থেকে প্রশংসাপত্র, স্কুলের সব কাজ <em>এক খাতায়</em>",
    ),
      (r("#setupForm").onsubmit = async (t) => {
        t.preventDefault();
        const s = u.formData(t.target);
        u.busy(true, "সাজানো হচ্ছে…");
        try {
          (await $.createLive({
            name: s.name,
            eiin: s.eiin,
            session: s.session || String(/* @__PURE__ */ new Date().getFullYear()),
            address: s.address,
          }),
            u.busy(false),
            us());
        } catch (e) {
          (u.busy(false), (r("#err").textContent = Ct(e)));
        }
      }));
  }
  function ss(t = "") {
    const s = Ns();
    (ps(
      "লগইন",
      `${m(s.name || SCHOOL_NAME)} · প্রধান শিক্ষক ও শিক্ষকদের জন্য`,
      `
    <form id="loginForm">
      <div class="mb-3"><label class="form-label">ইমেইল</label><input class="form-control" type="email" name="u" required autocomplete="username"></div>
      <div class="mb-2"><label class="form-label">পাসওয়ার্ড</label><input class="form-control" type="password" name="p" required autocomplete="current-password"></div>
      <div class="text-end mb-4"><a href="#" id="forgot" class="small-t">পাসওয়ার্ড ভুলে গেছেন?</a></div>
      <button class="btn btn-primary btn-lg w-100">প্রবেশ করুন</button><div class="err" id="err" style="word-break:break-all">${m(t)}</div>
      <div class="text-center mt-2 small-t sec">শিক্ষক? অ্যাকাউন্ট নেই? <a href="#" id="toSignup">আবেদন করুন</a></div>
    </form>`,
      "আজকের হাজিরা খাতা <em>অপেক্ষা করছে</em>",
    ),
      (r("#toSignup").onclick = (e) => {
        (e.preventDefault(), Re());
      }),
      (r("#loginForm").onsubmit = async (e) => {
        e.preventDefault();
        const a = u.formData(e.target);
        ((r("#err").textContent = ""), u.busy(true, "প্রবেশ করা হচ্ছে…"));
        try {
          (await at.signIn(a.u, a.p), u.busy(false), Ht());
        } catch (i) {
          (u.busy(false), (r("#err").textContent = Ct(i)));
        }
      }),
      (r("#forgot").onclick = async (e) => {
        e.preventDefault();
        const a = r("[name=u]").value.trim();
        if (!a) return (r("#err").textContent = "আগে ইমেইল লিখুন");
        try {
          (await at.resetPassword(a), u.toast("পাসওয়ার্ড বদলানোর লিংক ইমেইলে পাঠানো হয়েছে"));
        } catch (i) {
          r("#err").textContent = Ct(i);
        }
      }));
  }
  const ze = [
    "সহকারী প্রধান শিক্ষক",
    "সিনিয়র শিক্ষক",
    "সহকারী শিক্ষক",
    "খণ্ডকালীন শিক্ষক",
    "অফিস সহকারী",
    "হিসাবরক্ষক",
    "লাইব্রেরিয়ান",
  ];
  function Re() {
    let t = "";
    (ps(
      "শিক্ষক হিসেবে আবেদন",
      "নিজের তথ্য দিয়ে আবেদন করুন। প্রধান শিক্ষক অনুমোদন দিলে এই ইমেইল আর পাসওয়ার্ড দিয়ে লগইন করতে পারবেন",
      `
    <form id="suForm" autocomplete="off">
      <div class="photo-pick mb-3"><span id="suPv">${u.avatar("", "", "lg")}</span><label class="btn btn-ghost mb-0">${M("upload", "ico-16")} ছবি<input type="file" accept="image/*" id="suPh" hidden></label></div>
      <div class="row g-3">
        ${u.inp("name", "পুরো নাম *", "", "required", "col-12")}
        ${u.sel("designation", "পদবি", ze, "সহকারী শিক্ষক", "col-6")}${u.inp("subject", "যে বিষয় পড়ান", "", 'placeholder="যেমন: গণিত"', "col-6")}
        ${u.inp("phone", "মোবাইল *", "", 'required inputmode="tel"', "col-6")}${u.inp("indexNo", "ইনডেক্স / MPO নং", "", "", "col-6")}
        ${u.inp("nid", "জাতীয় পরিচয়পত্র নং", "", "", "col-6")}${u.inp("joinDate", "যোগদানের তারিখ", "", 'type="date"', "col-6")}
        ${u.inp("qualification", "শিক্ষাগত যোগ্যতা", "", "", "col-6")}${u.inp("blood", "রক্তের গ্রুপ", "", "", "col-6")}
        ${u.inp("address", "ঠিকানা", "", "", "col-12")}
      </div>
      <div class="fsec mt-3">লগইনের তথ্য</div>
      <div class="mb-3"><label class="form-label">ইমেইল *</label><input class="form-control" type="email" name="email" required autocomplete="username"><div class="hint">পাসওয়ার্ড ভুলে গেলে এই ইমেইলে বদলানোর লিংক যাবে</div></div>
      <div class="row g-3 mb-4"><div class="col-6"><label class="form-label">পাসওয়ার্ড *</label><input class="form-control" type="password" name="password" required minlength="6" autocomplete="new-password"></div>
      <div class="col-6"><label class="form-label">আবার লিখুন *</label><input class="form-control" type="password" name="password2" required minlength="6" autocomplete="new-password"></div></div>
      <button class="btn btn-primary btn-lg w-100">আবেদন জমা দিন</button><div class="err" id="err"></div>
      <div class="text-center mt-2 small-t"><a href="#" id="toLogin">লগইন পেজে ফিরে যান</a></div>
    </form>`,
      "আপনার শ্রেণির হাজিরা, নম্বর আর ফি <em>এক জায়গায়</em>",
    ),
      (r("#suPh").onchange = async (s) => {
        const e = s.target.files[0];
        e && ((t = await u.readImage(e, 320)), (r("#suPv").innerHTML = u.avatar("", t, "lg")));
      }),
      (r("#toLogin").onclick = (s) => {
        (s.preventDefault(), ss());
      }),
      (r("#suForm").onsubmit = async (s) => {
        s.preventDefault();
        const e = u.formData(s.target);
        if (e.password !== e.password2) return (r("#err").textContent = "দুটি পাসওয়ার্ড মেলেনি");
        const { email: a, password: i, password2: c, ...l } = e;
        u.busy(true, "আবেদন পাঠানো হচ্ছে…");
        try {
          if (!at.init()) throw { code: "auth/network-request-failed" };
          (await at.signUp(a, i, { ...l, photo: t }),
            u.busy(false),
            u.success("আবেদন জমা হয়েছে", "প্রধান শিক্ষকের অনুমোদনের পর লগইন করতে পারবেন"),
            Ht());
        } catch (d) {
          (u.busy(false), (r("#err").textContent = Ct(d)));
        }
      }));
  }
  function _e(t) {
    const s = t.status === "disabled" || t.status === "removed",
      e = t.status === "rejected";
    (ps(
      s ? "অ্যাকাউন্ট বন্ধ আছে" : e ? "আবেদন গৃহীত হয়নি" : "অনুমোদনের অপেক্ষায়",
      s
        ? "প্রধান শিক্ষক এই অ্যাকাউন্ট আপাতত বন্ধ রেখেছেন। প্রয়োজনে তাঁর সাথে যোগাযোগ করুন"
        : e
          ? "প্রধান শিক্ষক এই আবেদন গ্রহণ করেননি। প্রয়োজনে তাঁর সাথে যোগাযোগ করুন"
          : `${m(t.name || "")}, আপনার আবেদন প্রধান শিক্ষকের কাছে পৌঁছেছে। অনুমোদন পেলে এখান থেকেই ভেতরে ঢুকতে পারবেন`,
      `
    <div class="card-x card-pad mb-3"><dl class="kv mb-0"><dt>ইমেইল</dt><dd>${m(t.email || "")}</dd><dt>মোবাইল</dt><dd>${m(o.bd(t.phone || ""))}</dd><dt>আবেদনের তারিখ</dt><dd>${t.at ? o.date(t.at.slice(0, 10)) : ""}</dd></dl></div>
    <div class="d-flex gap-2"><button class="btn btn-primary flex-fill" id="pRe">আবার দেখুন</button><button class="btn btn-ghost flex-fill" id="pOut">লগআউট</button></div>`,
      "আপনার শ্রেণির হাজিরা, নম্বর আর ফি <em>এক জায়গায়</em>",
    ),
      (r("#pRe").onclick = () => {
        (jt(true, "দেখা হচ্ছে…"), Ht());
      }),
      (r("#pOut").onclick = async () => {
        (await at.signOut(), Ht());
      }));
  }
  function Ve() {
    (ps(
      "সংযোগ পাওয়া যায়নি",
      "অনলাইন ডেটাবেসের সাথে সংযোগ করা যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন",
      '<button class="btn btn-primary btn-lg w-100" id="retry">আবার চেষ্টা করুন</button>',
      "আজকের হাজিরা খাতা <em>অপেক্ষা করছে</em>",
    ),
      (r("#retry").onclick = () => location.reload()));
  }
  function jt(t, s) {
    let e = r("#splash");
    if (t) {
      e || ((e = document.createElement("div")), (e.id = "splash"), document.body.appendChild(e));
      const a = Ns();
      ((e.className = "splash"),
        (e.innerHTML = `<div class="sp-mark"><svg class="sp-ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="54"/><circle class="arc" cx="60" cy="60" r="54"/></svg><div class="sp-logo">${a.logo ? `<img src="${a.logo}" alt="">` : m(o.initials(a.name || "স"))}</div></div><div class="sp-name">${m(a.name || SCHOOL_NAME)}</div><div class="sp-text">${m(s || "লোড হচ্ছে…")}</div>`));
    } else e && (e.classList.add("out"), setTimeout(() => e.remove(), 450));
  }
  const pe = [
      [
        "প্রতিদিনের কাজ",
        [
          ["dashboard", "ড্যাশবোর্ড", "dashboard", 1],
          ["students", "শিক্ষার্থী", "students", 1],
          ["teachers", "শিক্ষক ও কর্মচারী", "teachers", 0],
          ["attendance", "উপস্থিতি", "attendance", 1],
          ["routine", "ক্লাস রুটিন", "routine", 1],
        ],
      ],
      [
        "একাডেমিক",
        [
          ["exams", "পরীক্ষা ও ফলাফল", "exam", 1],
          ["examroutine", "পরীক্ষার রুটিন", "calendar", 1],
          ["documents", "ডকুমেন্ট ও সনদ", "docs", 1],
          ["library", "লাইব্রেরি", "library", 0],
        ],
      ],
      [
        "হিসাব",
        [
          ["fees", "ফি আদায়", "fee", 1],
          ["accounts", "আয়-ব্যয়", "wallet", 0],
          ["payroll", "বেতন", "salary", 0],
        ],
      ],
      ["যোগাযোগ", [["notices", "নোটিশ ও ইভেন্ট", "notice", 1]]],
      [
        "প্রশাসন",
        [
          ["staff", "শিক্ষক অ্যাকাউন্ট", "shield", 0],
          ["activity", "কার্যক্রম", "list", 0],
          ["trash", "রিসাইকেল বিন", "trash", 0],
        ],
      ],
    ],
    ue = pe
      .flatMap((t) => t[1])
      .concat([
        ["settings", "সেটিংস", "settings", 0],
        ["profile", "আমার প্রোফাইল", "teachers", 1],
      ]),
    Ps = (t) => (O() ? t !== "profile" : !!(ue.find((s) => s[0] === t) || [])[3]),
    ys = () =>
      O()
        ? (_().staff || []).filter((t) => t.status === "pending").length +
          (_().requests || []).filter((t) => t.status === "pending").length
        : 0;
  function Fs() {
    document.documentElement.dataset.theme = E().theme === "dark" ? "dark" : "light";
  }
  function es() {
    const t = E().school;
    (Fs(),
      (document.body.innerHTML =
        re() +
        `
  ${$.mode === "demo" ? `<div class="demo-bar">${M("school", "ico-16")}<span><b>ডেমো মোড</b> · নমুনা তথ্য, আসল ডেটায় কোনো প্রভাব নেই</span><label class="d-flex align-items-center gap-2" style="font-size:13px">যেভাবে দেখছেন <select class="form-select form-select-sm" id="demoRole" style="width:auto;height:30px;background-color:rgba(255,255,255,.55);border:0">${[["admin", "সুপার অ্যাডমিন"], ...(_().staff || []).filter((e) => e.status === "active").map((e) => [e.uid, "শিক্ষক: " + ($.find("teachers", e.teacherId) || {}).name])].map((e) => `<option value="${e[0]}" ${e[0] === (O() ? "admin" : J.uid) ? "selected" : ""}>${m(e[1])}</option>`).join("")}</select></label><button class="btn btn-sm" id="demoRe">নতুন করে সাজান</button><button class="btn btn-sm" id="demoOut">ডেমো থেকে বের হন</button></div>` : ""}
  <div class="shell">
    <aside class="side" id="side">
      <div class="logo"><span class="logo-mark">${t.logo ? `<img src="${t.logo}" alt="">` : m(o.initials(t.name))}</span>
        <div style="min-width:0"><div class="logo-name">${m(t.name)}</div><div class="logo-sub">শিক্ষাবর্ষ ${m(o.bd(t.session))}</div></div></div>
      <div class="side-clock" id="sideClock">${clockText()}</div>
      <button class="search-btn" id="openPal">${M("search", "ico-16")} খুঁজুন <span class="kbd">Ctrl K</span></button>
      ${pe
        .map(([e, a]) => {
          const i = a.filter((c) => Ps(c[0]));
          return i.length
            ? `<div class="nav-label">${e}</div>` +
                i
                  .map(
                    (c) =>
                      `<a class="nav-item" href="#${c[0]}" data-nav="${c[0]}">${M(c[2])}<span>${c[1]}</span>${c[0] === "staff" && ys() ? `<span class="cnt badge-n">${o.n(ys())}</span>` : ""}</a>`,
                  )
                  .join("")
            : "";
        })
        .join("")}
      <div class="side-foot">
        <div class="me-card">${O() ? `<span class="avatar sm" style="background:var(--gold);color:#2b1d03">${M("shield", "ico-16")}</span>` : u.avatar(J.name, ($.find("teachers", J.teacherId) || {}).photo, "sm")}<div style="min-width:0"><div class="text-truncate" style="color:#fff;font-size:14px">${m(J.name)}</div><div style="font-size:12px;color:var(--side-muted)">${O() ? "সুপার অ্যাডমিন" : "শিক্ষক"}</div></div></div>
        ${O() ? `<a class="nav-item" href="#settings" data-nav="settings">${M("settings")}<span>সেটিংস</span></a>` : `<a class="nav-item" href="#profile" data-nav="profile">${M("teachers")}<span>আমার প্রোফাইল</span></a>`}
        <a class="nav-item" href="#" id="themeBtn">${M(E().theme === "dark" ? "sun" : "moon")}<span>${E().theme === "dark" ? "লাইট মোড" : "ডার্ক মোড"}</span></a>
        <a class="nav-item" href="#" id="logout">${M("logout")}<span>${$.mode === "demo" ? "ডেমো থেকে বের হন" : "লগআউট"}</span></a>
      </div>
    </aside>
    <div class="main">
      <header class="topbar"><button class="btn btn-quiet btn-icon menu-btn" id="menuBtn" aria-label="মেনু">${M("menu")}</button>
        <h1 id="ttl"></h1><span class="sub" id="ttlSub"></span><span class="sync" id="sync"></span><div class="actions" id="tAct"></div>${O() ? "" : `<button class="btn btn-quiet btn-icon bell" id="bell" aria-label="বার্তা">${M("notice")}<span class="bell-n" id="bellN" hidden></span></button>`}</header>
      <main class="view" id="view"></main>
    </div>
  </div>`),
      (r("#logout").onclick = async (e) => {
        if ((e.preventDefault(), history.replaceState(null, "", location.pathname), $.mode === "demo"))
          return ($s.set(null), $.close(), Ht());
        (u.busy(true, "বের হচ্ছে…"), await at.flush(), await at.signOut(), $.close(), u.busy(false), Ht());
      }),
      $.mode === "demo" &&
        ((r("#demoRe").onclick = async () => {
          (await u.confirm("ডেমোর সব পরিবর্তন মুছে নতুন নমুনা তথ্য সাজানো হবে", "নতুন করে সাজান", false)) &&
            (jt(true, "নমুনা তথ্য সাজানো হচ্ছে…"), await $.resetDemo(), us());
        }),
        (r("#demoOut").onclick = () => {
          ($s.set(null), $.close(), history.replaceState(null, "", location.pathname), Ht());
        }),
        (r("#demoRole").onchange = (e) => {
          try {
            localStorage.setItem("sms_demo_role", e.target.value);
          } catch {}
          (ve(), history.replaceState(null, "", location.pathname + "#dashboard"), es(), Nt());
        })));
    const s = (e) => {
      const a = r("#sync");
      if (!a) return;
      const i = {
        saving: ["সংরক্ষণ হচ্ছে", "saving"],
        saved: ["সব সংরক্ষিত", "ok"],
        offline: ["অফলাইন, পরে মিলবে", "warn"],
        error: ["সংরক্ষণ হয়নি", "bad"],
      }[e] || ["", ""];
      ((a.className = "sync " + i[1]), (a.innerHTML = `<i></i>${i[0]}`));
    };
    ($.mode === "live" && (s(at.status), at._hooked || ((at._hooked = 1), at.onStatus(s))),
      (r("#themeBtn").onclick = (e) => {
        (e.preventDefault(), (E().theme = E().theme === "dark" ? "light" : "dark"), $.save(), es(), Nt());
      }),
      (r("#openPal").onclick = Rs),
      r("#bell") && ((r("#bell").onclick = openNotes), bellUpdate()),
      (r("#menuBtn").onclick = () => zs(true)),
      T(".side .nav-item[data-nav]").forEach((e) =>
        e.addEventListener("click", (a) => {
          (zs(false),
            e.dataset.nav === "documents" && typeof w != "undefined" && (w.type = ""),
            location.hash === "#" + e.dataset.nav && (a.preventDefault(), C()));
        }),
      ));
  }
  function zs(t) {
    r("#side").classList.toggle("open", t);
    let s = r(".side-scrim");
    (t &&
      !s &&
      ((s = document.createElement("div")),
      (s.className = "side-scrim"),
      (s.onclick = () => zs(false)),
      document.body.appendChild(s)),
      !t && s && s.remove());
  }
  const dt = {};
  let he = "";
  function Nt(quiet) {
    if (!de.logged() || !r("#view")) return;
    quiet = quiet === true;
    const t = (location.hash || "#dashboard").slice(1),
      s = dt[t] && Ps(t) ? t : "dashboard";
    ((he = s),
      T(".side .nav-item[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === s)),
      (r("#tAct").innerHTML = ""),
      (r("#ttlSub").textContent = ""));
    const e = r("#view");
    if (quiet) return (e.classList.remove("view-enter"), dt[s](e));
    (e.classList.remove("view-enter"),
      e.offsetWidth,
      e.classList.add("view-enter"),
      dt[s](e),
      window.scrollTo(0, 0));
  }
  const C = () => Nt(),
    ct = (t, s = "", e = "") => {
      ((r("#ttl").textContent = t),
        (r("#ttlSub").textContent = s),
        (r("#tAct").innerHTML = e),
        (document.title = t + " · " + E().school.name));
    };
  function Rs() {
    r(".pal") ||
      u.modal({
        cls: "pal",
        body: `<div style="position:relative">${M("search", "pi")}<input class="form-control" id="pq" placeholder="শিক্ষার্থী, শিক্ষক, বই বা পেজের নাম লিখুন"></div><div class="res" id="pr"></div>`,
        onMount: (t, s) => {
          let e = [],
            a = 0;
          const i = () => {
              const d = r("#pq", t).value.trim(),
                n = o.en(d).toLowerCase(),
                p = ue
                  .filter((f) => Ps(f[0]) && (!n || f[1].includes(d)))
                  .map((f) => ({
                    g: "পেজ",
                    html: `${M(f[2], "ico-16 muted")}<span>${f[1]}</span>`,
                    go: () => (location.hash = f[0]),
                  })),
                v = (f, x) =>
                  f.filter((I) =>
                    x(I).some((S) =>
                      String(S || "")
                        .toLowerCase()
                        .includes(n),
                    ),
                  ),
                g = n
                  ? v($.all("students"), (f) => [f.nameBn, f.nameEn, f.studentId, f.phone, String(f.roll)])
                      .slice(0, 8)
                      .map((f) => ({
                        g: "শিক্ষার্থী",
                        html: `${u.avatar(f.nameBn, f.photo, "sm", f.gender)}<span>${m(f.nameBn)}</span><span class="meta">${m(qs(f))}</span>`,
                        go: () => Vs(f.id),
                      }))
                  : [],
                h =
                  n && O()
                    ? v($.all("teachers"), (f) => [f.name, f.designation, f.subject, f.phone])
                        .slice(0, 5)
                        .map((f) => ({
                          g: "শিক্ষক ও কর্মচারী",
                          html: `${u.avatar(f.name, f.photo, "sm")}<span>${m(f.name)}</span><span class="meta">${m(f.designation)}</span>`,
                          go: () => Ys(f),
                        }))
                    : [],
                b = n
                  ? v($.all("books"), (f) => [f.title, f.author, f.code])
                      .slice(0, 4)
                      .map((f) => ({
                        g: "বই",
                        html: `${M("library", "ico-16 muted")}<span>${m(f.title)}</span><span class="meta">${m(f.author)}</span>`,
                        go: () => {
                          location.hash = "library";
                        },
                      }))
                  : [];
              ((e = [...g, ...h, ...b, ...p]), (a = 0));
              let k = "",
                y = "";
              (e.forEach((f, x) => {
                (f.g !== k && ((k = f.g), (y += `<div class="grp">${k}</div>`)),
                  (y += `<div class="it ${x === 0 ? "on" : ""}" data-i="${x}">${f.html}</div>`));
              }),
                (r("#pr", t).innerHTML = y || u.empty("কিছু পাওয়া যায়নি", "search")),
                T(".it", t).forEach((f) => {
                  ((f.onclick = () => l(+f.dataset.i)), (f.onmousemove = () => c(+f.dataset.i)));
                }));
            },
            c = (d) => {
              var n;
              ((a = d),
                T(".it", t).forEach((p) => p.classList.toggle("on", +p.dataset.i === d)),
                (n = r(`.it[data-i="${d}"]`, t)) == null || n.scrollIntoView({ block: "nearest" }));
            },
            l = (d) => {
              const n = e[d];
              n && (s(), setTimeout(n.go, 160));
            };
          ((r("#pq", t).oninput = i),
            (r("#pq", t).onkeydown = (d) => {
              (d.key === "ArrowDown" && (d.preventDefault(), c(Math.min(e.length - 1, a + 1))),
                d.key === "ArrowUp" && (d.preventDefault(), c(Math.max(0, a - 1))),
                d.key === "Enter" && l(a));
            }),
            i());
        },
      });
  }
  function us() {
    (autoSession(), me(), Fs(), es(), Nt(), jt(false), startClock());
  }
  // শিক্ষাবর্ষ: নতুন বছর এলে নিজে থেকেই চলতি বছর হয়ে যাবে
  function autoSession() {
    if (!$.raw) return false;
    const y = new Date().getFullYear(),
      sc = E().school;
    if (+sc.session >= y) return false;
    const old = sc.session;
    return (
      (sc.session = String(y)),
      O() && ($.save(), vt("session", `শিক্ষাবর্ষ নিজে থেকে বদলেছে: ${o.bd(old)} → ${o.bd(y)}`)),
      true
    );
  }
  // সাইডবারে সবসময় তারিখ ও সময়
  let clkT = null;
  function clockText() {
    const d = new Date(),
      h = d.getHours(),
      pr = h < 4 ? "রাত" : h < 12 ? "সকাল" : h < 15 ? "দুপুর" : h < 18 ? "বিকাল" : h < 20 ? "সন্ধ্যা" : "রাত",
      t = `${pr} ${o.bd(((h + 11) % 12) + 1)}:${o.bd(String(d.getMinutes()).padStart(2, "0"))}:${o.bd(String(d.getSeconds()).padStart(2, "0"))}`;
    return `<span class="ck-t">${t}</span><span class="ck-d">${o.day(o.iso(d))}, ${o.date(o.iso(d))}</span>`;
  }
  function startClock() {
    const tick = () => {
      const c = r("#sideClock");
      if ((c && (c.innerHTML = clockText()), $.raw && autoSession())) {
        const l = r(".logo-sub");
        l && (l.textContent = "শিক্ষাবর্ষ " + o.bd(E().school.session));
      }
    };
    (tick(), clkT || (clkT = setInterval(tick, 1e3)));
  }
  // রিয়েলটাইম হালনাগাদ এলে পেজ নতুন করে দেখানো
  let lvT = null;
  function canLiveRender() {
    if (r(".modal-x:not(.closing)") || r(".pal")) return "wait";
    const a = document.activeElement;
    if (a && a.closest && a.closest("#view") && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) return "wait";
    if (he === "attendance" && r("#saved .tag.y")) return "note";
    if (he === "settings" || (he === "exams" && r("#view .marks-in"))) return "note";
    return "ok";
  }
  function liveRefresh(force) {
    if ((clearTimeout(lvT), !$.raw || !r("#view"))) return;
    const c = force ? "ok" : canLiveRender();
    if (c === "wait") return void (lvT = setTimeout(() => liveRefresh(), 1500));
    if (c === "note") {
      if (!r("#liveNote")) {
        const b = document.createElement("button");
        ((b.id = "liveNote"),
          (b.className = "btn btn-gold btn-sm live-note"),
          (b.innerHTML = `${M("arrowUp", "ico-16")} নতুন তথ্য এসেছে, দেখুন`),
          (b.onclick = () => liveRefresh(true)),
          r(".topbar") && r(".topbar").insertBefore(b, r("#tAct")));
      }
      return;
    }
    const y = window.scrollY;
    (es(), Nt(true), window.scrollTo(0, y), startClock(), bellUpdate());
  }
  function liveUpdate(info) {
    if (!$.raw || $.mode !== "live") return;
    if (!O() && info && "staff" in info) {
      const st = info.staff;
      if (!st || st.status !== "active")
        return (u.toast("আপনার অ্যাকাউন্টের অবস্থা বদলেছে", "warn"), at.stopListen(), $.close(), Ht());
      const before = new Set((J.notes || []).map((n) => n.id));
      (Object.assign(J, { notes: st.notes || [] }), ce(st));
      (st.notes || [])
        .filter((n) => !before.has(n.id) && !noteSeen(n.id))
        .forEach((n) => u.toast("নতুন বার্তা: " + n.title, "ok"));
    }
    liveRefresh();
  }
  // শিক্ষকের কাছে বার্তা (অ্যাডমিন তথ্য বদলালে)
  const seenKey = () => "sms_notes_seen_" + J.uid;
  function seenSet() {
    try {
      return new Set(JSON.parse(localStorage.getItem(seenKey()) || "[]"));
    } catch {
      return new Set();
    }
  }
  const noteSeen = (id) => seenSet().has(id);
  function bellUpdate() {
    const b = r("#bellN");
    if (!b) return;
    const s = seenSet(),
      n = (J.notes || []).filter((x) => !s.has(x.id)).length;
    ((b.hidden = !n), (b.textContent = o.n(n)));
  }
  function openNotes() {
    const list = [...(J.notes || [])].sort((a, b) => (a.at < b.at ? 1 : -1)),
      s = seenSet();
    (u.modal({
      title: "বার্তা",
      cls: "nofocus",
      body: `<div class="mb">${
        list.length
          ? list
              .map(
                (n) =>
                  `<div class="note-row ${s.has(n.id) ? "" : "new"}"><div class="d-flex gap-2 align-items-baseline"><b class="flex-grow-1">${m(n.title)}</b><span class="muted small-t text-nowrap">${o.dateS(n.at.slice(0, 10))}, ${o.time(n.at.slice(11, 16))}</span></div>${n.text ? `<div class="sec small-t mt-1">${m(n.text)}</div>` : ""}<div class="muted small-t mt-1">${m(n.bn || "সুপার অ্যাডমিন")}</div></div>`,
              )
              .join("")
          : u.empty("কোনো বার্তা নেই", "notice")
      }</div>`,
      foot: '<button class="btn btn-primary" data-close>ঠিক আছে</button>',
    }),
      (() => {
        try {
          localStorage.setItem(seenKey(), JSON.stringify(list.map((n) => n.id).slice(0, 200)));
        } catch {}
      })(),
      bellUpdate());
  }
  // অ্যাডমিন থেকে শিক্ষকের অ্যাকাউন্টে বার্তা পাঠানো (staff ডকুমেন্টে থাকে, শিক্ষক সাথে সাথে পান)
  function notifyTeacher(teacherId, title, text) {
    const st = (_().staff || []).filter((x) => x.teacherId === teacherId && x.status !== "removed");
    st.forEach((x) => {
      ((x.notes = [
        { id: $.uid(), title, text: text || "", at: new Date().toISOString(), by: J.uid, bn: J.name },
        ...(x.notes || []),
      ].slice(0, 40)),
        $.save());
    });
    return st.length;
  }
  function goLive(uid, staff) {
    $.mode === "live" && (staff && at.setStaffSeen(staff), at.listen(uid, liveUpdate));
  }
  function ve() {
    let t = "admin";
    try {
      t = localStorage.getItem("sms_demo_role") || "admin";
    } catch {}
    const s = (_().staff || []).find((e) => e.uid === t && e.status === "active");
    s
      ? ((s.classes = Cs(s.teacherId, s.extra)),
        (s.subjects = ($.find("teachers", s.teacherId) || {}).subjects || []),
        ce(s))
      : oe("admin");
  }
  async function Ht() {
    const t = $s.get();
    if ((r("#splash") || jt(true), t === "demo")) return (await $.openDemo(), ve(), us());
    if (($.close(), !at.init())) return (jt(false), Ve());
    try {
      const s = await at.waitUser();
      if (!s) return (jt(false), ss());
      jt(true, "তথ্য আনা হচ্ছে…");
      let e = null;
      try {
        e = await at.myStaff(s.uid);
      } catch {
        e = null;
      }
      if (e)
        return e.status !== "active"
          ? (jt(false), _e(e))
          : (await $.openLive("teacher", s.uid))
            ? (ce(e), us(), goLive(s.uid, e))
            : (await at.signOut(),
              jt(false),
              ss("স্কুলের তথ্য এখনো সাজানো হয়নি, প্রধান শিক্ষকের সাথে যোগাযোগ করুন"));
      let a;
      try {
        a = await $.openLive("admin", s.uid);
      } catch (i) {
        return (
          await at.signOut(),
          jt(false),
          i && i.code === "permission-denied"
            ? ss(
                `এই অ্যাকাউন্টের অনুমতি নেই। শিক্ষক হলে "আবেদন করুন" থেকে আবেদন করুন। অ্যাডমিন হলে Firestore রুলসে এই UID দেখুন: ${s.uid}`,
              )
            : ss(Ct(i))
        );
      }
      if ((oe(s.uid, s.email), !a)) return (jt(false), Fe());
      (us(), goLive(s.uid));
    } catch (s) {
      (console.warn(s), jt(false), ss(Ct(s)));
    }
  }
  (window.addEventListener("hashchange", Nt),
    document.addEventListener("keydown", (t) => {
      (t.ctrlKey || t.metaKey) &&
        t.key.toLowerCase() === "k" &&
        de.logged() &&
        r("#view") &&
        (t.preventDefault(), Rs());
    }),
    (dt.dashboard = (t) => {
      if (!O()) return $a(t);
      const s = G(),
        e = /* @__PURE__ */ new Date();
      (ct(
        "ড্যাশবোর্ড",
        "",
        `<button class="btn btn-ghost" id="palBtn">${M("search", "ico-16")}<span>খুঁজুন</span></button>`,
      ),
        (r("#palBtn").onclick = Rs));
      const a = ht(),
        i = a.filter((j) => j.gender === "M").length,
        c = He(),
        l = c[s],
        d = E().classes.reduce((j, A) => j + A.sections.length, 0),
        n = Object.keys(_().attendance).filter((j) => j.startsWith(s + "|")).length,
        p = s.slice(0, 7),
        v = $.all("payments")
          .filter((j) => j.date.startsWith(p))
          .reduce((j, A) => j + A.total, 0),
        g = a
          .map((j) => ({ s: j, d: Yt(j) }))
          .filter((j) => j.d.amount > 0)
          .sort((j, A) => A.d.amount - j.d.amount),
        h = g.reduce((j, A) => j + A.d.amount, 0),
        b = $.all("teachers").filter((j) => j.status !== "left");
      ((t.innerHTML = `
  <div class="today mb-3">
    <svg class="art" width="360" height="220" viewBox="0 0 360 220" aria-hidden="true"><g fill="none" stroke="#fff" stroke-opacity=".07" stroke-width="1.5"><circle cx="260" cy="60" r="90"/><circle cx="260" cy="60" r="140"/><circle cx="260" cy="60" r="190"/></g></svg>
    <div class="date">${o.day(s)}, ${o.date(s)}</div>
    <h2>${m(E().school.name)}</h2>
    <div class="k stagger">
      <div><div class="l">অধ্যয়নরত শিক্ষার্থী</div><div class="v num" data-to="${a.length}">০</div><div class="s">ছাত্র ${o.n(i)} · ছাত্রী ${o.n(a.length - i)}</div></div>
      <div><div class="l">আজকের উপস্থিতি</div>${l ? `<div class="v num gold" data-to="${((l.p / l.t) * 100).toFixed(1)}" data-f="pct">০</div><div class="s">${o.n(d)}টি শাখার মধ্যে ${o.n(n)}টিতে নেওয়া হয়েছে</div>` : `<div class="v" style="font-size:20px;line-height:34px">${wt(s) ? "সাপ্তাহিক ছুটি" : "এখনো নেওয়া হয়নি"}</div><div class="s">${wt(s) ? "আজ ক্লাস নেই" : `${o.n(d)}টি শাখা বাকি`}</div>`}</div>
      <div><div class="l">এ মাসে ফি আদায়</div><div class="v num" data-to="${v}" data-f="tk">০</div><div class="s">${o.n($.all("payments").filter((j) => j.date.startsWith(p)).length)}টি রসিদ</div></div>
      <div><div class="l">মোট বকেয়া বেতন</div><div class="v num gold" data-to="${h}" data-f="tk">০</div><div class="s">${o.n(g.length)} জন শিক্ষার্থীর</div></div>
    </div>
    ${ys() ? `<a href="#staff" class="d-flex align-items-center gap-2 mb-2" style="position:relative;color:var(--gold);text-decoration:none;font-size:14px">${M("shield", "ico-16")} ${o.n(ys())}টি আবেদন আপনার অনুমোদনের অপেক্ষায় আছে →</a>` : ""}
    <div class="qa">
      <button class="btn btn-gold" id="qAdd">${M("plus", "ico-16")} নতুন ভর্তি</button>
      <a class="btn" href="#attendance">${M("attendance", "ico-16")} উপস্থিতি নিন</a>
      <a class="btn" href="#fees">${M("fee", "ico-16")} ফি আদায়</a>
      <a class="btn" href="#documents">${M("docs", "ico-16")} প্রবেশপত্র ও সনদ</a>
      <a class="btn" href="#notices">${M("notice", "ico-16")} নোটিশ দিন</a>
    </div>
  </div>

  <div class="row g-3 mb-3">
    <div class="col-xl-8"><div class="card-x h-100">
      <div class="card-head"><h3>উপস্থিতির ছবি</h3><span class="right">গত ৮ সপ্তাহ · বর্গে মাউস রাখলে দিনের হার দেখাবে</span></div>
      <div class="card-pad" id="heatWrap"></div></div></div>
    <div class="col-xl-4"><div class="card-x h-100">
      <div class="card-head"><h3>শ্রেণিভিত্তিক শিক্ষার্থী</h3><span class="right legend"><i style="background:var(--primary)"></i> ছাত্র <i style="background:var(--gold);margin-left:8px"></i> ছাত্রী</span></div>
      <div class="card-pad" id="bars"></div></div></div>
  </div>

  <div class="row g-3 mb-3">
    <div class="col-xl-5"><div class="card-x h-100">
      <div class="card-head"><h3>আয় ও ব্যয়</h3><span class="right legend"><i style="background:var(--primary)"></i> আয় <i style="background:var(--gold);margin-left:8px"></i> ব্যয়</span></div>
      <div class="card-pad" id="cash"></div></div></div>
    <div class="col-xl-4 col-lg-7"><div class="card-x h-100">
      <div class="card-head"><h3>নোটিশ ও আসন্ন ইভেন্ট</h3><a class="right" href="#notices">সব দেখুন</a></div><div id="nts"></div></div></div>
    <div class="col-xl-3 col-lg-5"><div class="card-x h-100">
      <div class="card-head"><h3>এ সপ্তাহে জন্মদিন</h3></div><div id="bday"></div></div></div>
  </div>

  <div class="row g-3">
    <div class="col-lg-4"><div class="card-x h-100"><div class="card-head"><h3>নজর দিন</h3><span class="right">টানা ৩ দিন অনুপস্থিত</span></div><div id="watch"></div></div></div>
    <div class="col-lg-4"><div class="card-x h-100"><div class="card-head"><h3>সবচেয়ে বেশি বকেয়া</h3><a class="right" href="#fees">ফি আদায়</a></div><div id="dues"></div></div></div>
    <div class="col-lg-4"><div class="card-x h-100"><div class="card-head"><h3>সাম্প্রতিক ভর্তি</h3><a class="right" href="#students">সব দেখুন</a></div><div id="recent"></div></div></div>
  </div>`),
        (r("#qAdd").onclick = () => admitStart()),
        T("[data-to]", t).forEach((j) => u.tween(j, +j.dataset.to)));
      const k = 8,
        y = new Date(e);
      y.setDate(e.getDate() - ((e.getDay() + 1) % 7) - (k - 1) * 7);
      let f = `<div class="heat" style="--weeks:${k}">`;
      (bs.forEach((j) => {
        f += `<span class="dl">${ee[j]}</span>`;
        for (let A = 0; A < k; A++) {
          const L = new Date(y);
          L.setDate(y.getDate() + A * 7 + ((j - 6 + 7) % 7));
          const q = o.iso(L),
            V = q > s,
            U = c[q];
          let B = "c",
            W = 0,
            F = o.dateS(q) + " · ";
          if (V) ((B += " off"), (F = ""));
          else if (wt(q)) ((B += " off"), (F += "ছুটি"));
          else if (U) {
            const Mt = (U.p / U.t) * 100;
            ((W = Mt >= 93 ? 4 : Mt >= 88 ? 3 : Mt >= 80 ? 2 : 1), (F += "উপস্থিতি " + o.pct(Mt.toFixed(1))));
          } else F += "হাজিরা নেওয়া হয়নি";
          (q === s && (B += " today"),
            (f += `<span class="${B}" data-l="${W}" data-tip="${F}" style="${V ? "visibility:hidden" : ""}"></span>`));
        }
      }),
        (f +=
          '</div><div class="legend mt-3">কম <i style="background:var(--h1)"></i><i style="background:var(--h2)"></i><i style="background:var(--h3)"></i><i style="background:var(--h4)"></i> বেশি</div>'));
      const x = Object.keys(c)
          .filter((j) => j <= s)
          .sort()
          .slice(-5),
        I = [];
      (tt().forEach((j) =>
        j.sections.forEach((A) => {
          let L = 0,
            q = 0;
          (x.forEach((V) => {
            const U = $.getAtt(V, j.id, A);
            U &&
              Object.values(U).forEach((B) => {
                (q++, B === "P" && L++);
              });
          }),
            q && I.push({ label: `${j.short} ${A}`, r: (L / q) * 100 }));
        }),
      ),
        I.sort((j, A) => j.r - A.r));
      const S = `<div class="rank"><div class="sec mb-2 small-t">শেষ ${o.n(x.length)} কর্মদিবসে শাখাভিত্তিক হার</div>
    ${I.map((j) => `<div class="rank-row"><span>${m(j.label)} শাখা</span><span class="track"><span class="${j.r < 85 ? "n" : "b"}" style="width:0" data-w="${Math.max(4, ((j.r - 60) / 40) * 100)}"></span></span><span class="num text-end ${j.r < 85 ? "down" : ""}">${o.pct(j.r.toFixed(0))}</span></div>`).join("") || '<div class="muted small-t">এখনো হাজিরার তথ্য নেই</div>'}</div>`;
      ((r("#heatWrap").innerHTML = `<div class="heat-wrap"><div>${f}</div>${S}</div>`),
        u.bindTips(r("#heatWrap")));
      const N = tt().map((j) => {
          const A = a.filter((L) => L.classId === j.id);
          return {
            c: j,
            m: A.filter((L) => L.gender === "M").length,
            f: A.filter((L) => L.gender !== "M").length,
          };
        }),
        R = Math.max(1, ...N.map((j) => j.m + j.f));
      ((r("#bars").innerHTML =
        N.map(
          (j) => `<div class="bar-row"><span class="sec">${m(j.c.short)}</span>
    <div class="track" style="height:12px;border-radius:6px" data-tip="ছাত্র ${o.n(j.m)}, ছাত্রী ${o.n(j.f)}"><span class="b" style="width:0" data-w="${(j.m / R) * 100}"></span><span class="g" style="width:0" data-w="${(j.f / R) * 100}"></span></div>
    <span class="num text-end">${o.n(j.m + j.f)}</span></div>`,
        ).join("") || u.empty("কোনো শ্রেণি নেই")),
        u.bindTips(r("#bars")));
      const Q = As(),
        xt = [];
      for (let j = 5; j >= 0; j--) {
        const A = new Date(e.getFullYear(), e.getMonth() - j, 1);
        xt.push(o.iso(A).slice(0, 7));
      }
      const bt = xt.map((j) => ({
          m: j,
          in: Q.filter((A) => A.type === "income" && A.date.startsWith(j)).reduce((A, L) => A + L.amount, 0),
          ex: Q.filter((A) => A.type === "expense" && A.date.startsWith(j)).reduce((A, L) => A + L.amount, 0),
        })),
        D = Math.max(1, ...bt.map((j) => Math.max(j.in, j.ex))),
        P = bt[bt.length - 1];
      ((r("#cash").innerHTML =
        `<div class="d-flex gap-4 mb-2"><div><div class="muted small-t">এ মাসে আয়</div><div class="num" style="font-size:20px;font-weight:500">${o.tk(P.in)}</div></div>
    <div><div class="muted small-t">এ মাসে ব্যয়</div><div class="num" style="font-size:20px;font-weight:500">${o.tk(P.ex)}</div></div></div>
    <div class="cols">${bt.map((j) => `<div class="col"><div class="pair" data-tip="${o.ym(j.m)} · আয় ${o.tk(j.in)}, ব্যয় ${o.tk(j.ex)}"><span class="in" data-h="${(j.in / D) * 100}"></span><span class="ex" data-h="${(j.ex / D) * 100}"></span></div><span class="lb">${o.monS(j.m)}</span></div>`).join("")}</div>`),
        u.bindTips(r("#cash")));
      const Y = [...$.all("notices")]
        .sort((j, A) => A.pinned - j.pinned || (j.date < A.date ? 1 : -1))
        .slice(0, 4);
      ((r("#nts").innerHTML = Y.length
        ? Y.map((j) => {
            const A = j.eventDate || j.date;
            return `<div class="list-row click" data-n="${j.id}"><div class="date-chip"><b class="num">${o.bd(+A.slice(8))}</b><span>${o.monS(A.slice(0, 7))}</span></div>
    <div style="min-width:0" class="flex-grow-1"><div class="text-truncate">${m(j.title)}</div><div class="muted small-t">${m(j.kind)}${j.eventDate ? " · " + o.day(j.eventDate) : ""}</div></div>${j.pinned ? `<span class="tag gold">${M("pin", "ico-16")}</span>` : ""}</div>`;
          }).join("")
        : u.empty("কোনো নোটিশ নেই", "notice")),
        T("[data-n]", t).forEach((j) => (j.onclick = () => Us($.find("notices", j.dataset.n)))));
      const Z = a
        .filter((j) => {
          if (!j.dob) return false;
          const A = /* @__PURE__ */ new Date(j.dob + "T00:00");
          for (let L = 0; L < 7; L++) {
            const q = new Date(e);
            if ((q.setDate(e.getDate() + L), q.getMonth() === A.getMonth() && q.getDate() === A.getDate()))
              return true;
          }
          return false;
        })
        .sort((j, A) => (j.dob.slice(5) < A.dob.slice(5) ? -1 : 1));
      r("#bday").innerHTML = Z.length
        ? Z.slice(0, 5)
            .map((j) => xs(j, `<span class="tag gold">${o.dateS(s.slice(0, 4) + j.dob.slice(4))}</span>`))
            .join("")
        : u.empty("এ সপ্তাহে কারো জন্মদিন নেই", "gift");
      const X = [];
      (tt().forEach((j) =>
        j.sections.forEach((A) => {
          const L = Object.keys(_().attendance)
            .filter((q) => q.endsWith(`|${j.id}|${A}`))
            .sort()
            .slice(-3);
          L.length < 3 ||
            a
              .filter((q) => q.classId === j.id && q.section === A)
              .forEach((q) => {
                L.every((V) => _().attendance[V][q.id] === "A") && X.push(q);
              });
        }),
      ),
        (r("#watch").innerHTML = X.length
          ? X.slice(0, 5)
              .map((j) => xs(j, '<span class="tag r">৩ দিন</span>'))
              .join("")
          : u.empty("কেউ টানা অনুপস্থিত নেই", "check")),
        (r("#dues").innerHTML = g.length
          ? g
              .slice(0, 5)
              .map((j) =>
                xs(
                  j.s,
                  `<div class="text-end"><div class="num">${o.tk(j.d.amount)}</div><div class="muted" style="font-size:12px">${o.n(j.d.months.length)} মাস</div></div>`,
                ),
              )
              .join("")
          : u.empty("কারো বকেয়া নেই", "check")));
      const ot = [...a]
        .sort((j, A) =>
          (A.createdAt || A.admissionDate || "") > (j.createdAt || j.admissionDate || "") ? 1 : -1,
        )
        .slice(0, 5);
      ((r("#recent").innerHTML = ot.length
        ? ot.map((j) => xs(j, `<span class="muted small-t">${o.dateS(j.admissionDate)}</span>`)).join("")
        : u.empty("এখনো কোনো শিক্ষার্থী নেই", "students")),
        T("[data-sid]", t).forEach((j) => (j.onclick = () => Vs(j.dataset.sid))),
        setTimeout(() => {
          (T("[data-w]", t).forEach((j) => (j.style.width = j.dataset.w + "%")),
            T("[data-h]", t).forEach((j) => (j.style.height = Math.max(2, j.dataset.h) + "%")));
        }, 80));
    }));
  const xs = (
      t,
      s,
    ) => `<div class="list-row click" data-sid="${t.id}">${u.avatar(t.nameBn, t.photo, "", t.gender)}
  <div class="flex-grow-1" style="min-width:0"><div class="text-truncate">${m(t.nameBn)}</div><div class="muted small-t">${m(qs(t))}</div></div>${s}</div>`,
    nt = { q: "", cls: "", sec: "", grp: "", status: "active" };
  dt.students = (t) => {
    (ct(
      "শিক্ষার্থী",
      O() ? "" : "আপনার শ্রেণির শিক্ষার্থী",
      `${O() ? `<button class="btn btn-ghost" id="promo">${M("arrowUp", "ico-16")}<span>প্রমোশন</span></button>` : ""}<button class="btn btn-ghost" id="csv">${M("download", "ico-16")}<span>CSV</span></button><button class="btn btn-primary" id="addSt">${M("plus", "ico-16")}<span>নতুন ভর্তি</span></button>`,
    ),
      (r("#addSt").onclick = () => admitStart()),
      r("#promo") && (r("#promo").onclick = Ye),
      !O() && nt.cls && !At().includes(nt.cls) && (nt.cls = ""),
      (t.innerHTML = `
  <div class="toolbar">
    <div class="input-ico grow">${M("search")}<input class="form-control" id="fq" placeholder="নাম, রোল, আইডি বা মোবাইল" value="${m(nt.q)}"></div>
    <select class="form-select" id="fc">${
      O()
        ? qt(nt.cls, true)
        : '<option value="">আমার সব শ্রেণি</option>' +
          tt()
            .filter((a) => At().includes(a.id))
            .map((a) => `<option value="${a.id}" ${a.id === nt.cls ? "selected" : ""}>${m(a.name)}</option>`)
            .join("")
    }</select>
    <select class="form-select" id="fs">${Dt(nt.cls, nt.sec, true)}</select>
    <select class="form-select" id="fg"><option value="">সব বিভাগ</option>${E()
      .groups.map((a) => `<option ${a === nt.grp ? "selected" : ""}>${m(a)}</option>`)
      .join("")}</select>
    <select class="form-select" id="fst">${[
      ["active", "অধ্যয়নরত"],
      ["transferred", "বদলি হয়েছে"],
      ["passed", "পাস করে বেরিয়েছে"],
      ["left", "প্রাক্তন"],
      ["", "সবাই"],
    ]
      .map((a) => `<option value="${a[0]}" ${a[0] === nt.status ? "selected" : ""}>${a[1]}</option>`)
      .join("")}</select>
    <span class="muted ms-auto small-t" id="cnt"></span>
  </div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রোল</th><th>নাম</th><th>শ্রেণি</th><th class="hide-m">বিভাগ</th><th class="hide-m">পিতার নাম</th><th class="hide-m">মোবাইল</th><th class="r">বকেয়া</th><th></th></tr></thead><tbody id="tb"></tbody></table></div></div>`));
    let s = [];
    const e = () => {
      const a = o.en(nt.q).toLowerCase();
      ((s = Et(
        $.all("students").filter(
          (i) =>
            kt(i.classId, i.section) &&
            (!nt.status || i.status === nt.status) &&
            (!nt.cls || i.classId === nt.cls) &&
            (!nt.sec || i.section === nt.sec) &&
            (!nt.grp || i.group === nt.grp) &&
            (!a ||
              [i.nameBn, i.nameEn, i.studentId, i.phone, String(i.roll), i.father].some((c) =>
                String(c || "")
                  .toLowerCase()
                  .includes(a),
              )),
        ),
      )),
        (r("#cnt").textContent = o.n(s.length) + " জন"),
        (r("#tb").innerHTML = s.length
          ? s
              .map((i) => {
                const c = i.status === "active" ? Yt(i) : { amount: 0 };
                return `<tr class="click" data-id="${i.id}">
      <td><span class="roll num">${o.n(i.roll)}</span></td>
      <td><div class="d-flex align-items-center gap-2">${u.avatar(i.nameBn, i.photo, "", i.gender)}<div><div>${m(i.nameBn)}</div><div class="muted num" style="font-size:12.5px">${m(o.bd(i.studentId || ""))}</div></div></div></td>
      <td>${m(it(i.classId))} · ${m(i.section)}</td><td class="hide-m">${i.group ? m(i.group) : '<span class="muted">—</span>'}</td>
      <td class="sec hide-m">${m(i.father || "—")}</td><td class="num sec hide-m">${m(o.bd(i.phone) || "—")}</td>
      <td class="r num">${c.amount ? `<span class="down">${o.tk(c.amount)}</span>` : '<span class="muted">—</span>'}</td>
      <td class="r">${O() ? `<button class="btn btn-quiet btn-icon btn-sm" data-edit="${i.id}" aria-label="সম্পাদনা">${M("edit", "ico-16")}</button>` : M("chevron", "ico-16 muted")}</td></tr>`;
              })
              .join("")
          : `<tr><td colspan="8">${u.empty("এই খোঁজে কোনো শিক্ষার্থী পাওয়া যায়নি", "search")}</td></tr>`),
        T("#tb tr[data-id]").forEach(
          (i) =>
            (i.onclick = (c) => {
              const l = c.target.closest("[data-edit]");
              l ? hs($.find("students", l.dataset.edit)) : Vs(i.dataset.id);
            }),
        ));
    };
    ((r("#csv").onclick = () => {
      const a = [
          "আইডি",
          "রোল",
          "নাম",
          "শ্রেণি",
          "শাখা",
          "বিভাগ",
          "পিতা",
          "মাতা",
          "মোবাইল",
          "জন্ম তারিখ",
          "ঠিকানা",
        ],
        i = s.map((l) => [
          l.studentId,
          l.roll,
          l.nameBn,
          gt(l.classId),
          l.section,
          l.group,
          l.father,
          l.mother,
          l.phone,
          l.dob,
          l.address,
        ]),
        c =
          "\uFEFF" +
          [a, ...i].map((l) => l.map((d) => `"${String(d != null ? d : "").replace(/"/g, '""')}"`).join(","))
            .join(`
`);
      u.download(`students-${G()}.csv`, c, "text/csv") || u.toast("এখানে ডাউনলোড চালু নেই", "warn");
    }),
      (r("#fq").oninput = (a) => {
        ((nt.q = a.target.value), e());
      }),
      (r("#fc").onchange = (a) => {
        ((nt.cls = a.target.value), (nt.sec = ""), (r("#fs").innerHTML = Dt(nt.cls, "", true)), e());
      }),
      (r("#fs").onchange = (a) => {
        ((nt.sec = a.target.value), e());
      }),
      (r("#fg").onchange = (a) => {
        ((nt.grp = a.target.value), e());
      }),
      (r("#fst").onchange = (a) => {
        ((nt.status = a.target.value), e());
      }),
      e());
  };
  function fe(t) {
    const s = et(t),
      a = `${E().school.session || /* @__PURE__ */ new Date().getFullYear()}${String(s ? s.order : 0).padStart(2, "0")}`,
      i = $.all("students")
        .map((c) => c.studentId)
        .filter((c) => c && c.startsWith(a))
        .map((c) => +c.slice(a.length) || 0);
    return a + String((i.length ? Math.max(...i) : 0) + 1).padStart(3, "0");
  }
  function _s(t, s) {
    const e = ht()
      .filter((a) => a.classId === t && a.section === s)
      .map((a) => +a.roll);
    return e.length ? Math.max(...e) + 1 : 1;
  }
  function hs(t = null, pre = null) {
    var d;
    if (t && !O()) return u.toast("ভর্তির পর তথ্য বদলাতে পারেন শুধু প্রধান শিক্ষক", "warn");
    const s = (pre && et(pre.classId)) || (O() ? tt()[0] : et((Bt()[0] || "").split("|")[0]) || tt()[0]),
      e = t || {
        classId: s == null ? void 0 : s.id,
        section: s == null ? void 0 : (pre && pre.section) || s.sections[0],
        gender: "M",
        status: "active",
        admissionDate: G(),
        custom: {},
        religion: "ইসলাম",
        admType: (pre && pre.admType) || "new",
      };
    const isTr = e.admType === "transfer" || !!(e.tc && (e.tc.no || e.tc.img || e.tc.received)),
      tc = e.tc || {};
    let a = e.photo || "",
      tcImg = tc.img || "";
    const i = u.inp,
      c = u.sel,
      l = E()
        .customFields.map((n) =>
          i(
            "cf_" + n.id,
            m(n.label),
            (e.custom || {})[n.id] || "",
            `type="${n.type === "number" ? "number" : n.type === "date" ? "date" : "text"}"`,
          ),
        )
        .join("");
    u.modal({
      title: t
        ? "শিক্ষার্থীর তথ্য সম্পাদনা"
        : isTr
          ? "নতুন ভর্তি · অন্য বিদ্যালয় থেকে (টিসিসহ)"
          : "নতুন ভর্তি",
      size: "lg",
      body: `<form class="mb" id="sf" autocomplete="off">
      <div class="fsec">ব্যক্তিগত তথ্য</div>
      <div class="photo-pick mb-3"><span id="pv">${u.avatar(e.nameBn, a, "lg", e.gender)}</span>
        <div><label class="btn btn-ghost mb-0">${M("upload", "ico-16")} ছবি বাছুন<input type="file" accept="image/*" id="ph" hidden></label>
        <button type="button" class="btn btn-quiet" id="phx" ${a ? "" : "hidden"}>সরান</button><div class="hint">পাসপোর্ট সাইজের ছবি দিন, নিজে থেকে ছোট করে রাখা হবে</div></div></div>
      <div class="row g-3">
        ${i("nameBn", "নাম (বাংলায়) *", e.nameBn, "required")}${i("nameEn", "নাম (ইংরেজিতে)", e.nameEn)}
        ${i("dob", "জন্ম তারিখ", e.dob, 'type="date"', "col-md-4")}
        ${c(
          "gender",
          "লিঙ্গ",
          [
            ["M", "ছাত্র"],
            ["F", "ছাত্রী"],
          ],
          e.gender,
          "col-md-4",
        )}
        ${c("blood", "রক্তের গ্রুপ", ["", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"], e.blood || "", "col-md-4")}
        ${c("religion", "ধর্ম", ["ইসলাম", "হিন্দু", "বৌদ্ধ", "খ্রিস্টান", "অন্যান্য"], e.religion, "col-md-4")}
        ${i("birthReg", "জন্ম নিবন্ধন নং", e.birthReg, 'inputmode="numeric"', "col-md-8")}
      </div>
      <div class="fsec">একাডেমিক তথ্য</div>
      <div class="row g-3">
        <div class="col-md-4"><label class="form-label">শ্রেণি *</label><select class="form-select" name="classId" id="fCls">${
          pre && !t
            ? `<option value="${s.id}" selected>${m(s.name)}</option>`
            : O()
            ? qt(e.classId)
            : tt()
                .filter((n) => At().includes(n.id))
                .map(
                  (n) =>
                    `<option value="${n.id}" ${n.id === e.classId ? "selected" : ""}>${m(n.name)}</option>`,
                )
                .join("")
        }</select></div>
        <div class="col-md-4"><label class="form-label">শাখা *</label><select class="form-select" name="section" id="fSec">${Dt(e.classId, e.section)}</select></div>
        ${i("roll", "রোল *", (d = e.roll) != null ? d : _s(e.classId, e.section), 'type="number" min="1" required id="fRoll"', "col-md-4")}
        <div class="col-md-4" id="grpBox"><label class="form-label">বিভাগ</label><select class="form-select" name="group">${E()
          .groups.map((n) => `<option ${n === e.group ? "selected" : ""}>${m(n)}</option>`)
          .join("")}</select></div>
        ${i("sscReg", "রেজিস্ট্রেশন নং (বোর্ড)", e.sscReg, 'inputmode="numeric"', "col-md-4 ssc-col")}
        ${i("studentId", "শিক্ষার্থী আইডি", e.studentId || fe(e.classId), 'id="sid"', "col-md-4")}
        ${i("admissionDate", "ভর্তির তারিখ", e.admissionDate, 'type="date"', "col-md-4")}
        ${c(
          "status",
          "অবস্থা",
          [
            ["active", "অধ্যয়নরত"],
            ["transferred", "বদলি হয়েছে"],
            ["passed", "পাস করে বেরিয়েছে"],
            ["left", "প্রাক্তন"],
          ],
          e.status,
          "col-md-4",
        )}
        ${isTr ? "" : i("prevSchool", "আগের প্রতিষ্ঠান", e.prevSchool, "", "col-md-4")}
      </div>
      ${
        isTr
          ? `<div class="fsec">ছাড়পত্র (টিসি) · অন্য বিদ্যালয় থেকে আসা</div>
      <div class="row g-3">
        ${i("prevSchool", "আগের বিদ্যালয়ের নাম *", e.prevSchool, "required", "col-md-8")}${i("tc_cls", "আগের বিদ্যালয়ে শ্রেণি", tc.cls, 'placeholder="যেমন: সপ্তম শ্রেণি"', "col-md-4")}
        ${i("tc_no", "টিসি নম্বর", tc.no, "", "col-md-4")}${i("tc_date", "টিসির তারিখ", tc.date, 'type="date"', "col-md-4")}
        <div class="col-md-4 d-flex align-items-end"><label class="check mb-2"><input type="checkbox" name="tc_received" ${tc.received ? "checked" : ""}> টিসি জমা পেয়েছি</label></div>
        <div class="col-12"><div class="tc-pick"><span id="tcPv">${tcImg ? `<img src="${tcImg}" alt="টিসি">` : M("docs")}</span>
          <div><label class="btn btn-ghost mb-0">${M("upload", "ico-16")} টিসির ছবি আপলোড<input type="file" accept="image/*" id="tcPh" hidden></label>
          <button type="button" class="btn btn-quiet" id="tcX" ${tcImg ? "" : "hidden"}>সরান</button><div class="hint">ছাড়পত্রের পরিষ্কার ছবি বা স্ক্যান দিন, নিজে থেকে ছোট করে রাখা হবে</div></div></div></div>
      </div>`
          : ""
      }
      <div class="ssc-col"><div class="fsec">এসএসসি ফলাফল (প্রশংসাপত্রের জন্য)</div>
      <div class="row g-3">${i("sscRoll", "বোর্ড রোল", e.sscRoll, 'inputmode="numeric"', "col-md-3")}${i("sscGpa", "জিপিএ", e.sscGpa, 'placeholder="৫.০০"', "col-md-3")}${i("sscYear", "পরীক্ষার সন", e.sscYear, 'inputmode="numeric"', "col-md-3")}${i("sscBoard", "বোর্ড", e.sscBoard || E().docs.board, "", "col-md-3")}</div></div>
      <div class="fsec">অভিভাবক</div>
      <div class="row g-3">
        ${i("father", "পিতার নাম", e.father)}${i("mother", "মাতার নাম", e.mother)}
        ${i("guardian", "অভিভাবকের নাম (পিতা-মাতা ছাড়া হলে)", e.guardian)}${i("phone", "অভিভাবকের মোবাইল *", e.phone, 'required inputmode="tel"')}
        ${i("address", "বর্তমান ঠিকানা", e.address, "", "col-12")}
      </div>
      ${l ? `<div class="fsec">অতিরিক্ত তথ্য</div><div class="row g-3">${l}</div>` : ""}
      <div class="err" id="sfErr"></div>
    </form>`,
      foot: `${t ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="delSt">${M("trash", "ico-16")} মুছুন</button>` : ""}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="saveSt">${t ? "সংরক্ষণ" : "ভর্তি করুন"}</button>`,
      onMount: (n, p) => {
        const v = r("#sf", n),
          g = () => {
            const h = et(r("#fCls", n).value);
            ((r("#grpBox", n).hidden = !(h && h.hasGroups)),
              T(".ssc-col", n).forEach((b) => (b.hidden = !(h && h.order >= 9))));
          };
        (g(),
          (r("#fCls", n).onchange = (h) => {
            ((r("#fSec", n).innerHTML = Dt(h.target.value)),
              t ||
                ((r("#sid", n).value = fe(h.target.value)),
                (r("#fRoll", n).value = _s(h.target.value, r("#fSec", n).value))),
              g());
          }),
          (r("#fSec", n).onchange = (h) => {
            t || (r("#fRoll", n).value = _s(r("#fCls", n).value, h.target.value));
          }),
          (r("#ph", n).onchange = async (h) => {
            const b = h.target.files[0];
            b &&
              ((a = await u.readImage(b, 320)),
              (r("#pv", n).innerHTML = u.avatar("", a, "lg")),
              (r("#phx", n).hidden = false));
          }),
          r("#tcPh", n) &&
            ((r("#tcPh", n).onchange = async (h) => {
              const b = h.target.files[0];
              b &&
                ((tcImg = await u.readImage(b, 1100)),
                (r("#tcPv", n).innerHTML = `<img src="${tcImg}" alt="টিসি">`),
                (r("#tcX", n).hidden = false));
            }),
            (r("#tcX", n).onclick = () => {
              ((tcImg = ""), (r("#tcPv", n).innerHTML = M("docs")), (r("#tcX", n).hidden = true));
            })),
          (r("#phx", n).onclick = () => {
            ((a = ""),
              (r("#pv", n).innerHTML = u.avatar(r("[name=nameBn]", n).value, "", "lg")),
              (r("#phx", n).hidden = true));
          }),
          (r("#saveSt", n).onclick = () => {
            if (!v.reportValidity()) return;
            const h = u.formData(v),
              b = et(h.classId);
            b.hasGroups || (h.group = "");
            const k = $.all("students").find(
              (f) =>
                f.id !== e.id &&
                f.status === "active" &&
                f.classId === h.classId &&
                f.section === h.section &&
                +f.roll == +h.roll,
            );
            if (k && h.status === "active") {
              r("#sfErr", n).textContent =
                `${b.short} ${h.section} শাখায় রোল ${o.n(h.roll)} আগে থেকেই ${k.nameBn}-এর`;
              return;
            }
            const y = {};
            if (isTr) {
              ((h.tc = {
                no: h.tc_no || "",
                date: h.tc_date || "",
                cls: h.tc_cls || "",
                received: !!h.tc_received,
                img: tcImg,
              }),
                (h.admType = "transfer"));
            } else h.admType = e.admType || "new";
            if (
              (["tc_no", "tc_date", "tc_cls", "tc_received"].forEach((f) => delete h[f]),
              Object.keys(h)
                .filter((f) => f.startsWith("cf_"))
                .forEach((f) => {
                  ((y[f.slice(3)] = h[f]), delete h[f]);
                }),
              (h.roll = +h.roll),
              !O() && !kt(h.classId, h.section))
            ) {
              r("#sfErr", n).textContent = "এই শাখায় ভর্তি করার অনুমতি আপনার নেই";
              return;
            }
            ($.upsert("students", {
              ...(t ? { id: t.id } : { createdBy: J.uid, createdByName: J.name }),
              ...h,
              photo: a,
              custom: y,
            }),
              vt(
                t ? "student-edit" : "admission",
                `${t ? "তথ্য হালনাগাদ" : isTr ? "ভর্তি (অন্য বিদ্যালয় থেকে, টিসি " + (h.tc.received ? "জমা" : "বাকি") + ")" : "নতুন ভর্তি"}: ${h.nameBn} (${it(h.classId)} ${h.section}, রোল ${o.n(h.roll)})`,
              ),
              p(),
              u.success(
                t ? "তথ্য হালনাগাদ হয়েছে" : "ভর্তি সম্পন্ন হয়েছে",
                `${h.nameBn} · ${it(h.classId)} ${h.section} শাখা · রোল ${o.n(h.roll)}`,
              ),
              C());
          }),
          t &&
            (r("#delSt", n).onclick = async () => {
              (await u.confirm(
                `${m(t.nameBn)}-এর সব তথ্য মুছে যাবে। শুধু ভুল করে যোগ হলে মুছুন, নইলে অবস্থা বদলে "প্রাক্তন" করুন`,
              )) &&
                (trashIt("students", t.id, `${t.nameBn} (${it(t.classId)} ${t.section}, রোল ${o.n(t.roll)})`),
                p(),
                u.toast("শিক্ষার্থী মুছে ফেলা হয়েছে, রিসাইকেল বিন থেকে ফিরিয়ে আনা যাবে"),
                C());
            }));
      },
    });
  }
  // ---- ভর্তি শুরু: শ্রেণি বাছাই → ষষ্ঠে নতুন ভর্তি, বাকিগুলোতে উত্তীর্ণ বা টিসিসহ নতুন ----
  const prevClass = (c) => {
    const l = tt(),
      i = l.findIndex((x) => x.id === c.id);
    return i > 0 ? l[i - 1] : null;
  };
  function admitStart() {
    const allowed = O() ? tt() : tt().filter((c) => At().includes(c.id));
    if (!allowed.length) return u.toast("আপনাকে এখনো কোনো শ্রেণির দায়িত্ব দেওয়া হয়নি", "warn");
    u.modal({
      title: "নতুন ভর্তি",
      cls: "nofocus",
      body: `<div class="mb"><label class="form-label">কোন শ্রেণিতে ভর্তি হবে</label>
      <div class="adm-cls">${allowed.map((c) => `<button type="button" class="adm-c" data-c="${c.id}"><b>${m(c.short)}</b><span>${m(c.name)}</span></button>`).join("")}</div>
      <div id="admOpt" class="mt-3"></div></div>`,
      onMount: (l, d) => {
        const go = (fn) => (d(), setTimeout(fn, 170));
        T("[data-c]", l).forEach(
          (b) =>
            (b.onclick = () => {
              T("[data-c]", l).forEach((x) => x.classList.toggle("on", x === b));
              const c = et(b.dataset.c),
                pc = prevClass(c);
              if (!pc) return go(() => hs(null, { classId: c.id, admType: "new" }));
              const n = ht().filter((x) => x.classId === pc.id).length;
              ((r("#admOpt", l).innerHTML = `<div class="adm-opts">
            <button type="button" class="adm-o" id="aoP">${M("arrowUp")}<div><b>${m(pc.name)} থেকে উত্তীর্ণ শিক্ষার্থী</b><span>বার্ষিক পরীক্ষায় পাস করা শিক্ষার্থীদের বাছাই করে ${m(c.name)}-তে তুলুন · ${o.n(n)} জন আছে</span></div></button>
            <button type="button" class="adm-o" id="aoT">${M("docs")}<div><b>নতুন ভর্তি (অন্য বিদ্যালয় থেকে)</b><span>ছাড়পত্র (টিসি) সহ ভর্তি · টিসির ছবি আপলোড করা যাবে</span></div></button></div>`),
                (r("#aoP", l).onclick = () => go(() => promoteIn(c))),
                (r("#aoT", l).onclick = () => go(() => hs(null, { classId: c.id, admType: "transfer" }))));
            }),
        );
      },
    });
  }
  function promoteIn(c) {
    const pc = prevClass(c);
    if (!pc) return;
    const exs = $.all("exams")
        .filter((x) => !x.classes || x.classes.includes(pc.id))
        .sort((a, b) => ((b.session || "") + (b.startDate || "")).localeCompare((a.session || "") + (a.startDate || ""))),
      hasRes = (x) => ts(x.id, pc.id).length > 0,
      ann = exs.filter((x) => /বার্ষিক|annual/i.test(x.name) && !/অর্ধ|half/i.test(x.name)),
      annual = ann.find(hasRes) || exs.find(hasRes) || ann[0] || exs[0],
      secs = O() ? c.sections : c.sections.filter((x) => kt(c.id, x));
    if (!secs.length) return u.toast(`${c.name}-এ ভর্তি করার অনুমতি আপনার নেই`, "warn");
    const st = { exam: annual ? annual.id : "", sec: secs[0], force: false };
    u.modal({
      title: `${m(pc.name)} থেকে উত্তীর্ণ → ${m(c.name)}`,
      size: "lg",
      cls: "nofocus",
      body: `<div class="mb"><div class="row g-3 mb-2">
        <div class="col-md-6"><label class="form-label">ফলাফলের ভিত্তি</label><select class="form-select" id="prE">${exs.map((x) => `<option value="${x.id}" ${x.id === st.exam ? "selected" : ""}>${m(x.name)} ${o.bd(x.session || "")}</option>`).join("")}<option value="" ${st.exam ? "" : "selected"}>ফলাফল ছাড়া (হাতে বাছাই)</option></select></div>
        <div class="col-md-3"><label class="form-label">নতুন শাখা</label><select class="form-select" id="prS">${secs.map((x) => `<option value="${m(x)}">${m(x)} শাখা</option>`).join("")}</select></div>
        <div class="col-md-3 d-flex align-items-end"><button type="button" class="btn btn-ghost w-100" id="prAll">${M("check", "ico-16")} উত্তীর্ণ সবাই</button></div></div>
        ${O() ? '<label class="check small-t mb-2"><input type="checkbox" id="prF"> বিশেষ বিবেচনায় অকৃতকার্যদেরও বাছাই করা যাবে</label>' : ""}
        <div class="hint mb-2">বাছাই করা শিক্ষার্থীরা ${m(c.name)}-তে চলে যাবে। নতুন রোল মেধাক্রম অনুযায়ী বসবে। আগের শ্রেণির তথ্য শিক্ষার্থীর ইতিহাসে থেকে যাবে</div>
        <div class="card-x"><div class="tbl-wrap" style="max-height:52vh"><table class="tbl dense"><thead><tr><th style="width:36px"></th><th>রোল</th><th>নাম</th><th class="hide-m">শাখা</th><th class="r">জিপিএ</th><th class="r">ফলাফল</th>${c.hasGroups ? "<th>বিভাগ</th>" : ""}</tr></thead><tbody id="prB"></tbody></table></div></div></div>`,
      foot: `<span class="me-auto muted small-t" id="prN"></span><button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="prGo">${M("arrowUp", "ico-16")} ${m(c.short)}-তে ভর্তি করুন</button>`,
      onMount: (l, d) => {
        let rows = [];
        const cnt = () => {
            const n = T("[data-ps]:checked", l).length;
            r("#prN", l).textContent = n ? `${o.n(n)} জন বাছাই করা হয়েছে` : "কাউকে বাছাই করা হয়নি";
          },
          draw = () => {
            const res = st.exam ? ts(st.exam, pc.id) : [],
              byId = new Map(res.map((x) => [x.st.id, x]));
            ((rows = ht()
              .filter((x) => x.classId === pc.id)
              .map((x) => ({ s: x, r: byId.get(x.st ? x.st.id : x.id) }))
              .sort((a, b) =>
                a.r && b.r ? a.r.pos - b.r.pos : a.r ? -1 : b.r ? 1 : a.s.section.localeCompare(b.s.section) || a.s.roll - b.s.roll,
              )),
              (r("#prB", l).innerHTML = rows.length
                ? rows
                    .map(({ s: x, r: y }) => {
                      const fail = y && !y.r.pass,
                        dis = fail && !st.force,
                        tag = !st.exam
                          ? '<span class="tag">—</span>'
                          : !y
                            ? '<span class="tag y">ফলাফল নেই</span>'
                            : fail
                              ? `<span class="tag r">অকৃতকার্য</span>`
                              : `<span class="tag g">উত্তীর্ণ · ${o.n(y.pos)}</span>`;
                      return `<tr class="${dis ? "muted" : ""}"><td><input type="checkbox" data-ps="${x.id}" ${dis ? "disabled" : ""} style="accent-color:var(--primary)"></td><td><span class="roll num">${o.n(x.roll)}</span></td>
                <td><div class="d-flex align-items-center gap-2">${u.avatar(x.nameBn, x.photo, "sm", x.gender)}<div><div>${m(x.nameBn)}</div><div class="muted num" style="font-size:12px">${m(o.bd(x.studentId || ""))}</div></div></div></td>
                <td class="hide-m">${m(x.section)}</td><td class="r num">${y ? o.gpa(y.r.gpa) : "—"}</td><td class="r">${tag}</td>
                ${c.hasGroups ? `<td><select class="form-select form-select-sm" data-pg="${x.id}" style="min-width:120px">${E().groups.map((g) => `<option ${g === (x.group || E().groups[0]) ? "selected" : ""}>${m(g)}</option>`).join("")}</select></td>` : ""}</tr>`;
                    })
                    .join("")
                : `<tr><td colspan="7">${u.empty(`${m(pc.name)}-এ এখন কোনো অধ্যয়নরত শিক্ষার্থী নেই`, "students")}</td></tr>`),
              T("[data-ps]", l).forEach((x) => (x.onchange = cnt)),
              cnt());
          };
        ((r("#prE", l).onchange = (x) => {
          ((st.exam = x.target.value), draw());
        }),
          (r("#prS", l).onchange = (x) => (st.sec = x.target.value)),
          r("#prF", l) &&
            (r("#prF", l).onchange = (x) => {
              ((st.force = x.target.checked), draw());
            }),
          (r("#prAll", l).onclick = () => {
            (T("[data-ps]:not(:disabled)", l).forEach((x) => {
              const y = rows.find((z) => z.s.id === x.dataset.ps);
              x.checked = !st.exam || !!(y && y.r && y.r.r.pass);
            }),
              cnt());
          }),
          (r("#prGo", l).onclick = async () => {
            const ids = T("[data-ps]:checked", l).map((x) => x.dataset.ps);
            if (!ids.length) return u.toast("অন্তত একজন শিক্ষার্থী বাছাই করুন", "warn");
            if (!O() && !kt(c.id, st.sec)) return u.toast("এই শাখায় ভর্তি করার অনুমতি আপনার নেই", "warn");
            if (
              !(await u.confirm(
                `${o.n(ids.length)} জন শিক্ষার্থী ${m(pc.name)} থেকে ${m(c.name)}, ${m(st.sec)} শাখায় যাবে`,
                "ভর্তি করুন",
                false,
              ))
            )
              return;
            let roll = _s(c.id, st.sec);
            const ses = E().school.session,
              ex = st.exam ? $.find("exams", st.exam) : null;
            (rows
              .filter((x) => ids.includes(x.s.id))
              .forEach(({ s: x, r: y }) => {
                const g = r(`[data-pg="${x.id}"]`, l);
                $.upsert("students", {
                  id: x.id,
                  history: [
                    ...(x.history || []),
                    {
                      session: (ex && ex.session) || x.session || ses,
                      classId: x.classId,
                      section: x.section,
                      roll: x.roll,
                      exam: ex ? ex.name : "",
                      gpa: y ? +y.r.gpa.toFixed(2) : null,
                      grade: y ? y.r.grade : "",
                      at: new Date().toISOString(),
                    },
                  ],
                  classId: c.id,
                  section: st.sec,
                  roll: roll++,
                  group: c.hasGroups ? (g ? g.value : x.group || E().groups[0]) : "",
                  session: ses,
                  admType: "promoted",
                  promotedFrom: pc.id,
                  promotedAt: G(),
                  promotedBy: J.name,
                });
              }),
              vt(
                "promotion",
                `${pc.short} থেকে ${c.short} ${st.sec} শাখায় উত্তীর্ণ: ${o.n(ids.length)} জন${ex ? " (" + ex.name + " অনুযায়ী)" : ""}`,
              ),
              d(),
              u.success("উত্তীর্ণ শিক্ষার্থী ভর্তি হয়েছে", `${o.n(ids.length)} জন এখন ${c.name}, ${st.sec} শাখায়`),
              C());
          }),
          draw());
      },
    });
  }
  function Vs(t) {
    const s = $.find("students", t);
    if (!s) return;
    const e = et(s.classId),
      a = Hs(s),
      i = Hs(s, G().slice(0, 7) + "-01"),
      c = a.t ? (a.p / a.t) * 100 : null,
      l = {
        active: ["অধ্যয়নরত", "g"],
        transferred: ["বদলি হয়েছে", "y"],
        passed: ["পাস করে বেরিয়েছে", "b"],
        left: ["প্রাক্তন", ""],
      }[s.status] || ["", ""],
      d = Yt(s),
      n = $.all("payments")
        .filter((h) => h.studentId === s.id)
        .sort((h, b) => (h.date < b.date ? 1 : -1)),
      p = $.all("exams").filter((h) => _().marks[`${h.id}|${s.id}`]),
      v = e && e.teacherBySection ? Vt(e.teacherBySection[s.section]) : "",
      g = [
        ["শিক্ষার্থী আইডি", s.studentId],
        ["শ্রেণি ও শাখা", `${gt(s.classId)}, ${s.section} শাখা`],
        ["রোল", o.n(s.roll)],
        ...(e && e.hasGroups ? [["বিভাগ", s.group]] : []),
        ...(s.sscReg ? [["রেজিস্ট্রেশন নং", s.sscReg]] : []),
        ...(v ? [["শ্রেণি শিক্ষক", v]] : []),
        ["নাম (ইংরেজি)", s.nameEn],
        ["জন্ম তারিখ", s.dob ? `${o.date(s.dob)} (${o.n(o.age(s.dob))} বছর)` : ""],
        ["জন্ম নিবন্ধন", s.birthReg],
        ["লিঙ্গ", s.gender === "M" ? "ছাত্র" : "ছাত্রী"],
        ["ধর্ম", s.religion],
        ["রক্তের গ্রুপ", s.blood],
        ["পিতার নাম", s.father],
        ["মাতার নাম", s.mother],
        ...(s.guardian ? [["অভিভাবক", s.guardian]] : []),
        ["মোবাইল", s.phone],
        ["ঠিকানা", s.address],
        ["ভর্তির তারিখ", s.admissionDate ? o.date(s.admissionDate) : ""],
        [
          "ভর্তির ধরন",
          { transfer: "অন্য বিদ্যালয় থেকে (টিসিসহ)", promoted: `${gt(s.promotedFrom)} থেকে উত্তীর্ণ` }[s.admType] ||
            "নতুন ভর্তি",
        ],
        ...(s.prevSchool ? [["আগের প্রতিষ্ঠান", s.prevSchool]] : []),
        ...(s.tc
          ? [
              [
                "ছাড়পত্র (টিসি)",
                `${s.tc.received ? "জমা হয়েছে" : "জমা বাকি"}${s.tc.no ? " · নং " + s.tc.no : ""}${s.tc.date ? " · " + o.date(s.tc.date) : ""}${s.tc.cls ? " · " + s.tc.cls : ""}`,
              ],
            ]
          : []),
        ...((s.history || []).length
          ? [
              [
                "আগের শ্রেণি",
                s.history
                  .map((h) => `${it(h.classId)} ${h.section}, রোল ${h.roll}${h.gpa != null ? ", জিপিএ " + Number(h.gpa).toFixed(2) : ""} (${h.session || ""})`)
                  .join(" · "),
              ],
            ]
          : []),
        ...(s.sscGpa
          ? [
              [
                "এসএসসি",
                `জিপিএ ${s.sscGpa}, ${s.sscYear || ""} (${s.sscBoard || ""} বোর্ড), রোল ${s.sscRoll || "—"}`,
              ],
            ]
          : []),
        ...E().customFields.map((h) => [h.label, (s.custom || {})[h.id]]),
      ];
    u.modal({
      title: "শিক্ষার্থীর প্রোফাইল",
      size: "lg",
      cls: "nofocus",
      body: `<div class="mb">
      <div class="prof-head mb-3">${u.avatar(s.nameBn, s.photo, "lg", s.gender)}<div style="min-width:0"><h2 style="font-size:25px">${m(s.nameBn)}</h2>
        <div class="sec mt-1">${m(gt(s.classId))} · ${m(s.section)} শাখা · রোল ${o.n(s.roll)}</div>
        <div class="mt-2 d-flex gap-2 flex-wrap"><span class="tag ${l[1]}">${l[0]}</span>${s.group ? `<span class="tag">${m(s.group)}</span>` : ""}${d.amount ? `<span class="tag r">বকেয়া ${o.tk(d.amount)}</span>` : '<span class="tag g">বেতন হালনাগাদ</span>'}</div></div></div>
      <div class="tabs" id="ptabs"><button class="on" data-t="info">তথ্য</button><button data-t="att">উপস্থিতি</button><button data-t="res">ফলাফল</button><button data-t="fee">ফি</button></div>
      <div data-p="info"><dl class="kv">${g.map(([h, b]) => `<dt>${m(h)}</dt><dd>${b ? m(o.bd(b)) : '<span class="muted">—</span>'}</dd>`).join("")}</dl></div>
      <div data-p="att" hidden><div class="row g-3 mb-3">
        <div class="col-6 col-md-3"><div class="card-x card-pad stat"><div class="label">মোট হার</div><div class="fig num" style="font-size:26px">${c != null ? o.pct(c.toFixed(1)) : "—"}</div></div></div>
        <div class="col-6 col-md-3"><div class="card-x card-pad stat"><div class="label">এ মাসে উপস্থিত</div><div class="fig num" style="font-size:26px">${o.n(i.p)}</div></div></div>
        <div class="col-6 col-md-3"><div class="card-x card-pad stat"><div class="label">এ মাসে অনুপস্থিত</div><div class="fig num down" style="font-size:26px">${o.n(i.a)}</div></div></div>
        <div class="col-6 col-md-3"><div class="card-x card-pad stat"><div class="label">এ মাসে ছুটি</div><div class="fig num" style="font-size:26px">${o.n(i.l)}</div></div></div></div>
        <div class="sec small-t mb-2">শেষ ${o.n(Math.min(60, a.days.length))} কর্মদিবস</div>
        <div class="d-flex flex-wrap gap-1">${
          a.days
            .slice(-60)
            .map(
              ([h, b]) =>
                `<span data-tip="${o.dateS(h)} · ${b === "P" ? "উপস্থিত" : b === "A" ? "অনুপস্থিত" : "ছুটি"}" style="width:16px;height:16px;border-radius:4px;background:${b === "P" ? "var(--h3)" : b === "A" ? "var(--neg)" : "var(--gold)"}"></span>`,
            )
            .join("") || '<span class="muted small-t">হাজিরার তথ্য নেই</span>'
        }</div></div>
      <div data-p="res" hidden>${
        p.length
          ? `<table class="tbl dense"><thead><tr><th>পরীক্ষা</th><th class="r">মোট নম্বর</th><th class="r">জিপিএ</th><th class="r">গ্রেড</th><th class="r">মেধাক্রম</th><th></th></tr></thead><tbody>${p
              .map((h) => {
                const b = Os(h.id, s),
                  k = (ts(h.id, s.classId).find((y) => y.st.id === s.id) || {}).pos;
                return `<tr><td>${m(h.name)} <span class="muted">${o.bd(h.session)}</span></td><td class="r num">${o.n(b.total)}/${o.n(b.full)}</td><td class="r num">${o.gpa(b.gpa)}</td><td class="r"><span class="gp ${b.grade === "F" ? "gp-F" : ""}">${b.grade}</span></td><td class="r num">${k ? o.n(k) : "—"}</td>
        <td class="r"><button class="btn btn-ghost btn-sm" data-tr="${h.id}">${M("docs", "ico-16")} ট্রান্সক্রিপ্ট</button></td></tr>`;
              })
              .join("")}</tbody></table>`
          : u.empty("কোনো পরীক্ষার নম্বর নেই", "exam")
      }</div>
      <div data-p="fee" hidden>${d.amount ? `<div class="card-x card-pad mb-3" style="background:var(--neg-soft);border-color:transparent"><b>${o.tk(d.amount)}</b> বকেয়া · ${d.months.map((h) => o.monS(h)).join(", ")}</div>` : ""}
        ${n.length ? `<table class="tbl dense"><thead><tr><th>রসিদ</th><th>তারিখ</th><th>বিবরণ</th><th class="r">টাকা</th><th></th></tr></thead><tbody>${n.map((h) => `<tr><td class="num">${m(h.receiptNo)}</td><td>${o.dateS(h.date)}</td><td class="sec small-t">${m(h.items.map((b) => (b.month ? o.monS(b.month) : b.label)).join(", "))}</td><td class="r num">${o.tk(h.total)}</td><td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-rc="${h.id}" aria-label="রসিদ">${M("print", "ico-16")}</button></td></tr>`).join("")}</tbody></table>` : u.empty("কোনো ফি জমা নেই", "fee")}</div>
    </div>`,
      foot: `<div class="me-auto d-flex gap-2 flex-wrap">${O() ? `<button class="btn btn-ghost" data-doc="testimonial">${M("award", "ico-16")} প্রশংসাপত্র</button>` : ""}<button class="btn btn-ghost" data-doc="idcard">${M("id", "ico-16")} আইডি কার্ড</button>${O() ? `<button class="btn btn-ghost" data-doc="tc">${M("docs", "ico-16")} ছাড়পত্র</button>` : ""}</div>
      ${s.tc && s.tc.img ? `<button class="btn btn-ghost" id="tcView">${M("docs", "ico-16")} টিসি দেখুন</button>` : ""}${s.createdByName ? `<span class="muted small-t me-2">ভর্তি করেছেন: ${m(s.createdByName)}</span>` : ""}${kt(s.classId, s.section) ? `<button class="btn btn-ghost" id="feeSt">${M("fee", "ico-16")} ফি নিন</button>` : ""}${O() ? `<button class="btn btn-primary" id="edSt">${M("edit", "ico-16")} সম্পাদনা</button>` : ""}`,
      onMount: (h, b) => {
        (T("#ptabs button", h).forEach(
          (k) =>
            (k.onclick = () => {
              (T("#ptabs button", h).forEach((y) => y.classList.toggle("on", y === k)),
                T("[data-p]", h).forEach((y) => (y.hidden = y.dataset.p !== k.dataset.t)));
            }),
        ),
          u.bindTips(h),
          r("#edSt", h) &&
            (r("#edSt", h).onclick = () => {
              (b(), setTimeout(() => hs(s), 160));
            }),
          r("#tcView", h) &&
            (r("#tcView", h).onclick = () =>
              u.modal({
                title: `ছাড়পত্র (টিসি) · ${m(s.nameBn)}`,
                size: "lg",
                cls: "nofocus",
                body: `<div class="mb text-center"><img src="${s.tc.img}" alt="টিসি" style="max-width:100%;border-radius:10px;border:1px solid var(--line)"></div>`,
                foot: '<button class="btn btn-primary" data-close>বন্ধ করুন</button>',
              })),
          r("#feeSt", h) &&
            (r("#feeSt", h).onclick = () => {
              (b(), setTimeout(() => Ss(s.id), 160));
            }),
          T("[data-doc]", h).forEach(
            (k) =>
              (k.onclick = () => {
                (b(), setTimeout(() => mt(k.dataset.doc, { students: [s.id] }), 160));
              }),
          ),
          T("[data-tr]", h).forEach(
            (k) =>
              (k.onclick = () => {
                (b(), setTimeout(() => mt("transcript", { students: [s.id], examId: k.dataset.tr }), 160));
              }),
          ),
          T("[data-rc]", h).forEach(
            (k) =>
              (k.onclick = () => {
                (b(), setTimeout(() => mt("receipt", { paymentId: k.dataset.rc }), 160));
              }),
          ));
      },
    });
  }
  function Ye() {
    var s, e;
    const t = $.all("exams");
    u.modal({
      title: "শ্রেণি প্রমোশন",
      size: "sm",
      body: `<form class="mb" id="pf"><p class="sec small-t">এক শ্রেণির শিক্ষার্থীদের পরের শ্রেণিতে তুলে দিন। পরীক্ষা বাছাই করলে ফেল করা শিক্ষার্থীরা আগের শ্রেণিতেই থাকবে, আর নতুন রোল মেধাক্রম অনুযায়ী বসবে</p>
      <div class="mb-3"><label class="form-label">কোন শ্রেণি থেকে</label><select class="form-select" name="from">${qt((s = tt()[0]) == null ? void 0 : s.id)}</select></div>
      <div class="mb-3"><label class="form-label">কোন শ্রেণিতে</label><select class="form-select" name="to">${qt((e = tt()[1]) == null ? void 0 : e.id)}<option value="__passed">পাস করে বেরিয়েছে (দশম শ্রেণির জন্য)</option></select></div>
      <div class="mb-3"><label class="form-label">ফলাফলের ভিত্তি</label><select class="form-select" name="exam"><option value="">সবাইকে তুলুন, রোল একই থাকবে</option>${t.map((a) => `<option value="${a.id}">${m(a.name)} ${o.bd(a.session)}</option>`).join("")}</select></div>
      <div class="mb-1"><label class="form-label">নতুন শিক্ষাবর্ষ</label><input class="form-control" name="session" value="${(+E().school.session || /* @__PURE__ */ new Date().getFullYear()) + 1}"></div>
      <div class="hint">চলতি শিক্ষাবর্ষ সেটিংস থেকে আলাদাভাবে বদলাতে হবে</div></form>`,
      foot: '<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="doP">প্রমোশন দিন</button>',
      onMount: (a, i) =>
        (r("#doP", a).onclick = async () => {
          const c = u.formData(r("#pf", a));
          if (c.from === c.to) return u.toast("একই শ্রেণি বাছাই করা হয়েছে", "warn");
          let l = ht().filter((v) => v.classId === c.from);
          if (!l.length) return u.toast("এই শ্রেণিতে কোনো শিক্ষার্থী নেই", "warn");
          let d = l,
            n = [];
          if (c.exam) {
            const v = ts(c.exam, c.from),
              g = v.filter((h) => h.r.pass).map((h) => h.st.id);
            ((d = v.filter((h) => h.r.pass).map((h) => h.st)), (n = l.filter((h) => !g.includes(h.id))));
          }
          if (
            !(await u.confirm(
              `${o.n(d.length)} জন ${c.to === "__passed" ? "পাস করে বেরিয়েছে হিসেবে চিহ্নিত হবে" : gt(c.to) + "-এ যাবে"}${n.length ? `, ${o.n(n.length)} জন আগের শ্রেণিতে থাকবে` : ""}`,
              "প্রমোশন দিন",
              false,
            ))
          )
            return;
          const p = {};
          (d.forEach((v) => {
            if (c.to === "__passed") {
              $.upsert("students", { id: v.id, status: "passed" });
              return;
            }
            const g = et(c.to),
              h = g.sections.includes(v.section) ? v.section : g.sections[0];
            ((p[h] = (p[h] || 0) + 1),
              $.upsert("students", {
                id: v.id,
                classId: c.to,
                section: h,
                roll: c.exam ? p[h] : v.roll,
                group: g.hasGroups ? v.group || E().groups[0] : "",
              }));
          }),
            i(),
            u.success("প্রমোশন সম্পন্ন", `${o.n(d.length)} জন নতুন শ্রেণিতে উঠেছে`),
            C());
        }),
    });
  }
  const Wt = { q: "", type: "" };
  dt.teachers = (t) => {
    (ct(
      "শিক্ষক ও কর্মচারী",
      "",
      `<button class="btn btn-primary" id="addT">${M("plus", "ico-16")}<span>নতুন যোগ করুন</span></button>`,
    ),
      (r("#addT").onclick = () => Ys()),
      (t.innerHTML = `<div class="toolbar">
    <div class="input-ico grow">${M("search")}<input class="form-control" id="tq" placeholder="নাম, পদবি বা বিষয়" value="${m(Wt.q)}"></div>
    <div class="seg" id="tt">${[
      ["", "সবাই"],
      ["শিক্ষক", "শিক্ষক"],
      ["কর্মচারী", "কর্মচারী"],
    ]
      .map((i) => `<button data-v="${i[0]}" class="${i[0] === Wt.type ? "on" : ""}">${i[1]}</button>`)
      .join("")}</div>
    <span class="muted ms-auto small-t" id="tc"></span></div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>নাম ও পদবি</th><th>বিষয়</th><th class="hide-m">শ্রেণি শিক্ষক</th><th class="hide-m">যোগ্যতা</th><th class="hide-m">মোবাইল</th><th class="hide-m">যোগদান</th><th class="r">বেতন</th></tr></thead><tbody id="ttb"></tbody></table></div></div>`));
    const s = (i) => {
        const c = E().designations.indexOf(i);
        return c < 0 ? 99 : c;
      },
      e = (i) => {
        const c = [];
        return (
          E().classes.forEach((l) =>
            Object.entries(l.teacherBySection || {}).forEach(([d, n]) => {
              n === i && c.push(`${l.short} ${d}`);
            }),
          ),
          c.join(", ")
        );
      },
      a = () => {
        const i = o.en(Wt.q).toLowerCase(),
          c = $.all("teachers")
            .filter(
              (l) =>
                (!Wt.type || l.type === Wt.type) &&
                (!i ||
                  [l.name, l.designation, l.subject, l.phone].some((d) =>
                    String(d || "")
                      .toLowerCase()
                      .includes(i),
                  )),
            )
            .sort(
              (l, d) =>
                (l.status === "left") - (d.status === "left") ||
                s(l.designation) - s(d.designation) ||
                (l.joinDate || "").localeCompare(d.joinDate || ""),
            );
        ((r("#tc").textContent = o.n(c.length) + " জন"),
          (r("#ttb").innerHTML = c.length
            ? c
                .map(
                  (l) => `<tr class="click" data-id="${l.id}">
      <td><div class="d-flex align-items-center gap-2">${u.avatar(l.name, l.photo)}<div><div>${m(l.name)}${l.status === "left" ? ' <span class="tag">প্রাক্তন</span>' : ""}</div><div class="muted" style="font-size:12.5px">${m(l.designation)}</div></div></div></td>
      <td>${l.subject ? m(l.subject) : '<span class="muted">—</span>'}</td><td class="hide-m">${e(l.id) || '<span class="muted">—</span>'}</td><td class="sec hide-m">${m(l.qualification || "—")}</td><td class="num sec hide-m">${m(o.bd(l.phone) || "—")}</td>
      <td class="sec hide-m">${l.joinDate ? o.date(l.joinDate) : "—"}</td><td class="r num">${l.salary ? o.tk(l.salary) : "—"}</td></tr>`,
                )
                .join("")
            : `<tr><td colspan="7">${u.empty("কাউকে পাওয়া যায়নি", "search")}</td></tr>`),
          T("#ttb tr[data-id]").forEach((l) => (l.onclick = () => Ys($.find("teachers", l.dataset.id)))));
      };
    ((r("#tq").oninput = (i) => {
      ((Wt.q = i.target.value), a());
    }),
      T("#tt button").forEach(
        (i) =>
          (i.onclick = () => {
            ((Wt.type = i.dataset.v), T("#tt button").forEach((c) => c.classList.toggle("on", c === i)), a());
          }),
      ),
      a());
  };
  function Ys(t = null) {
    const s = t || { type: "শিক্ষক", status: "active", designation: "সহকারী শিক্ষক" };
    let e = s.photo || "";
    const a = u.inp;
    u.modal({
      title: t ? "তথ্য সম্পাদনা" : "নতুন শিক্ষক বা কর্মচারী",
      size: "lg",
      body: `<form class="mb" id="tf" autocomplete="off">
      <div class="photo-pick mb-3"><span id="tpv">${u.avatar(s.name, e, "lg")}</span>
        <label class="btn btn-ghost mb-0">${M("upload", "ico-16")} ছবি বাছুন<input type="file" accept="image/*" id="tph" hidden></label></div>
      <div class="row g-3">
        ${a("name", "নাম *", s.name, "required")}
        ${u.sel("type", "ধরন", ["শিক্ষক", "কর্মচারী"], s.type, "col-md-3")}
        ${u.sel("designation", "পদবি", E().designations, s.designation, "col-md-3")}
        ${a("subject", "বিষয়", s.subject, 'list="subjList"')}
        <datalist id="subjList">${[...new Set(E().subjects.map((i) => i.name))].map((i) => `<option value="${m(i)}">`).join("")}</datalist>
        <div class="col-12"><label class="form-label">যে বিষয়গুলোর নম্বর দিতে পারবেন</label><div class="d-flex flex-wrap gap-2">${[
          ...new Map(E().subjects.map((i) => [i.id, i])).values(),
        ]
          .sort((i, c) => i.code.localeCompare(c.code))
          .map(
            (i) =>
              `<label class="chip-edit" style="padding:0 10px;gap:6px"><input type="checkbox" data-sub="${i.id}" ${(s.subjects || []).includes(i.id) ? "checked" : ""} style="accent-color:var(--primary)"> ${m(i.short)}</label>`,
          )
          .join("")}</div></div>
        ${a("qualification", "শিক্ষাগত যোগ্যতা", s.qualification)}${a("phone", "মোবাইল *", s.phone, 'required inputmode="tel"')}
        ${a("email", "ইমেইল", s.email, 'type="email"')}${a("joinDate", "যোগদানের তারিখ", s.joinDate, 'type="date"', "col-md-4")}
        ${a("indexNo", "ইনডেক্স / MPO নং", s.indexNo, "", "col-md-4")}${a("salary", "মাসিক বেতন (টাকা)", s.salary, 'type="number" min="0"', "col-md-4")}
        ${a("nid", "জাতীয় পরিচয়পত্র নং", s.nid, "", "col-md-4")}${a("blood", "রক্তের গ্রুপ", s.blood, "", "col-md-4")}
        ${u.sel(
          "status",
          "অবস্থা",
          [
            ["active", "কর্মরত"],
            ["left", "প্রাক্তন"],
          ],
          s.status,
          "col-md-4",
        )}
        ${a("address", "ঠিকানা", s.address, "", "col-12")}
      </div></form>`,
      foot: `${t ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="delT">${M("trash", "ico-16")} মুছুন</button><button class="btn btn-ghost" id="tid">${M("id", "ico-16")} আইডি কার্ড</button>` : ""}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="saveT">সংরক্ষণ</button>`,
      onMount: (i, c) => {
        ((r("#tph", i).onchange = async (l) => {
          const d = l.target.files[0];
          d && ((e = await u.readImage(d, 320)), (r("#tpv", i).innerHTML = u.avatar("", e, "lg")));
        }),
          (r("#saveT", i).onclick = () => {
            const l = r("#tf", i);
            if (!l.reportValidity()) return;
            const d = u.formData(l);
            ((d.salary = +d.salary || 0),
              (d.subjects = T("[data-sub]", i)
                .filter((n) => n.checked)
                .map((n) => n.dataset.sub)),
              (() => {
                if (!t) return;
                const L = {
                    name: "নাম",
                    type: "ধরন",
                    designation: "পদবি",
                    subject: "বিষয়",
                    qualification: "শিক্ষাগত যোগ্যতা",
                    phone: "মোবাইল",
                    email: "ইমেইল",
                    joinDate: "যোগদানের তারিখ",
                    indexNo: "ইনডেক্স / MPO নং",
                    salary: "মাসিক বেতন",
                    nid: "জাতীয় পরিচয়পত্র",
                    blood: "রক্তের গ্রুপ",
                    status: "অবস্থা",
                    address: "ঠিকানা",
                  },
                  ch = Object.keys(L).filter((k) => String(d[k] != null ? d[k] : "") !== String(t[k] != null ? t[k] : ""));
                (JSON.stringify([...(d.subjects || [])].sort()) !== JSON.stringify([...(t.subjects || [])].sort()) &&
                  ch.push("subjects"),
                  e !== (t.photo || "") && ch.push("photo"));
                if (!ch.length) return;
                const names = ch.map((k) => (k === "subjects" ? "নম্বর দেওয়ার বিষয়" : k === "photo" ? "ছবি" : L[k]));
                (vt("teacher-edit", `${d.name}-এর তথ্য বদল: ${names.join(", ")}`, t.id),
                  notifyTeacher(t.id, "সুপার অ্যাডমিন আপনার তথ্য পরিবর্তন করেছেন", "যা বদলেছে: " + names.join(", ")) &&
                    u.toast("শিক্ষকের কাছে বার্তা পাঠানো হয়েছে"));
              })(),
              $.upsert("teachers", { ...(t ? { id: t.id } : {}), ...d, photo: e }),
              c(),
              u.success("তথ্য সংরক্ষিত", d.name),
              C());
          }),
          t &&
            ((r("#delT", i).onclick = async () => {
              const acc = (_().staff || []).find(
                (x) => x.teacherId === t.id && ["active", "pending"].includes(x.status),
              );
              if (acc)
                return u.modal({
                  title: "এখন মোছা যাবে না",
                  size: "sm",
                  body: `<div class="mb"><p class="sec mb-0">${m(t.name)}-এর শিক্ষক অ্যাকাউন্ট (${m(acc.email || "")}) এখনো চালু আছে। আগে "শিক্ষক অ্যাকাউন্ট" পেজ থেকে অ্যাকাউন্টটি বন্ধ বা মুছে ফেলুন, তারপর এখান থেকে মোছা যাবে।</p></div>`,
                  foot: '<button class="btn btn-ghost" data-close>ঠিক আছে</button><button class="btn btn-primary" id="goSt">শিক্ষক অ্যাকাউন্টে যান</button>',
                  onMount: (x, y) =>
                    (r("#goSt", x).onclick = () => {
                      (y(), c(), (zt = "active"), (location.hash = "staff"));
                    }),
                });
              (await u.confirm(`${m(t.name)}-এর তথ্য মুছে যাবে (রিসাইকেল বিন থেকে ফেরানো যাবে)`)) &&
                (trashIt("teachers", t.id, `${t.name} · ${t.designation || ""}`), c(), u.toast("মুছে ফেলা হয়েছে"), C());
            }),
            (r("#tid", i).onclick = () => {
              (c(), setTimeout(() => mt("staffid", { teachers: [t.id] }), 160));
            })));
      },
    });
  }
  let as = "take";
  const H = { date: "", cls: "", sec: "", month: "" };
  function ws(t, s) {
    var e, a, i;
    if (s && !O()) {
      const c = Bt();
      if (!c.includes(`${t.cls}|${t.sec}`)) {
        const l = c.find((d) => d.startsWith(t.cls + "|")) || c[0] || "";
        [t.cls, t.sec] = l ? l.split("|") : ["", ""];
      }
      return;
    }
    ((t.cls = et(t.cls) ? t.cls : ((e = tt()[0]) == null ? void 0 : e.id) || ""),
      ((a = et(t.cls)) != null && a.sections.includes(t.sec)) ||
        (t.sec = ((i = et(t.cls)) == null ? void 0 : i.sections[0]) || ""));
  }
  const Gs = (t, s) =>
      O()
        ? `<select class="form-select" id="${t}">${qt(s)}</select>`
        : `<select class="form-select" id="${t}">${tt()
            .filter((e) => At().includes(e.id))
            .map((e) => `<option value="${e.id}" ${e.id === s ? "selected" : ""}>${m(e.name)}</option>`)
            .join("")}</select>`,
    ns = (t, s) => {
      var e;
      return O()
        ? Dt(t, s)
        : (((e = et(t)) == null ? void 0 : e.sections) || [])
            .filter((a) => kt(t, a))
            .map((a) => `<option value="${m(a)}" ${a === s ? "selected" : ""}>${m(a)} শাখা</option>`)
            .join("");
    };
  dt.attendance = (t) => {
    if (((H.date = H.date || G()), (H.month = H.month || G().slice(0, 7)), ws(H, true), !H.cls)) {
      (ct("উপস্থিতি"),
        (t.innerHTML = `<div class="card-x">${u.empty("আপনাকে এখনো কোনো শ্রেণির দায়িত্ব দেওয়া হয়নি। প্রধান শিক্ষক শ্রেণি দিলে এখানে দেখাবে", "attendance")}</div>`));
      return;
    }
    (ct(
      "উপস্থিতি",
      "",
      as === "month"
        ? `<button class="btn btn-ghost" id="prt">${M("print", "ico-16")}<span>প্রিন্ট / PDF</span></button>`
        : "",
    ),
      (t.innerHTML = `<div class="tabs"><button data-t="take" class="${as === "take" ? "on" : ""}">হাজিরা নিন</button><button data-t="month" class="${as === "month" ? "on" : ""}">মাসিক হাজিরা খাতা</button></div><div id="attBody"></div>`),
      T(".tabs button", t).forEach(
        (s) =>
          (s.onclick = () => {
            ((as = s.dataset.t), dt.attendance(t));
          }),
      ),
      as === "take" ? Ge(r("#attBody")) : We(r("#attBody")),
      r("#prt") &&
        (r("#prt").onclick = () => mt("attsheet", { classId: H.cls, section: H.sec, month: H.month })));
  };
  function Ge(t) {
    t.innerHTML = `<div class="toolbar">
    <input type="date" class="form-control" id="ad" value="${H.date}" max="${G()}">
    ${Gs("ac", H.cls)}
    <select class="form-select" id="as">${ns(H.cls, H.sec)}</select>
    <span id="saved" class="ms-1"></span><span id="takenBy" class="ms-auto muted small-t"></span></div>
  <div class="card-x mb-3"><div class="card-pad d-flex flex-wrap align-items-center gap-3">
    <div class="att-sum" id="sum"></div>
    <div class="ms-auto d-flex gap-2"><button class="btn btn-ghost" id="allP">${M("check", "ico-16")} সবাই উপস্থিত</button><button class="btn btn-primary" id="saveA">সংরক্ষণ করুন</button></div>
  </div></div>
  <div id="offNote"></div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রোল</th><th>নাম</th><th class="hide-m">এ মাসে অনুপস্থিত</th><th class="r">হাজিরা</th></tr></thead><tbody id="atb"></tbody></table></div></div>`;
    let s = {},
      e = false;
    const a = () => Et(ht().filter((d) => d.classId === H.cls && d.section === H.sec)),
      i = () => {
        const d = Object.values(s),
          n = d.filter((b) => b === "P").length,
          p = d.filter((b) => b === "A").length,
          v = d.filter((b) => b === "L").length;
        ((r("#sum").innerHTML =
          `<div>মোট<b class="num">${o.n(d.length)}</b></div><div>উপস্থিত<b class="num" style="color:var(--pos)">${o.n(n)}</b></div><div>অনুপস্থিত<b class="num" style="color:var(--neg)">${o.n(p)}</b></div><div>ছুটি<b class="num" style="color:var(--warn)">${o.n(v)}</b></div>`),
          (r("#saved").innerHTML = e
            ? '<span class="tag y">সংরক্ষণ বাকি</span>'
            : $.getAtt(H.date, H.cls, H.sec)
              ? `<span class="tag g">${M("check", "ico-16")} সংরক্ষিত</span>`
              : ""));
        const g = (_().attLog || {})[`${H.date}|${H.cls}|${H.sec}`];
        r("#takenBy").textContent = g && g.bn ? `হাজিরা নিয়েছেন: ${g.bn}` : "";
        const h = !O() && H.date !== G();
        ((r("#saveA").disabled = h),
          (r("#allP").disabled = h),
          T("#atb .att button").forEach((b) => (b.disabled = h)),
          h &&
            !r("#lockNote") &&
            r("#offNote").insertAdjacentHTML(
              "afterbegin",
              `<div id="lockNote" class="card-x card-pad mb-3 sec" style="background:var(--raised);border-color:transparent">${M("lock", "ico-16")} আগের দিনের হাজিরা শুধু দেখা যাবে। ভুল থাকলে প্রধান শিক্ষক ঠিক করতে পারবেন</div>`,
            ));
      },
      c = () => {
        const d = $.getAtt(H.date, H.cls, H.sec),
          n = a(),
          p = H.date.slice(0, 7) + "-01";
        ((s = {}),
          n.forEach((v) => (s[v.id] = d && d[v.id] ? d[v.id] : "P")),
          (e = false),
          (r("#offNote").innerHTML = wt(H.date)
            ? `<div class="card-x card-pad mb-3 sec" style="background:var(--gold-soft);border-color:transparent">${o.day(H.date)} সাপ্তাহিক ছুটির দিন। দরকার হলে তবুও হাজিরা নিতে পারেন</div>`
            : ""),
          (r("#atb").innerHTML = n.length
            ? n
                .map((v) => {
                  const g = Hs(v, p, H.date).a;
                  return `<tr data-id="${v.id}"><td><span class="roll num">${o.n(v.roll)}</span></td>
      <td><div class="d-flex align-items-center gap-2">${u.avatar(v.nameBn, v.photo, "sm", v.gender)}<span>${m(v.nameBn)}</span></div></td>
      <td class="hide-m">${g ? `<span class="${g >= 3 ? "down" : "sec"} num">${o.n(g)} দিন</span>` : '<span class="muted">—</span>'}</td>
      <td class="r"><div class="att">${[
        ["P", "উপস্থিত", "উ"],
        ["A", "অনুপস্থিত", "অ"],
        ["L", "ছুটি", "ছু"],
      ]
        .map(
          ([h, b, k]) =>
            `<button data-v="${h}" class="${s[v.id] === h ? "on" : ""}" aria-label="${b}"><span class="lf">${b}</span><span class="ls">${k}</span></button>`,
        )
        .join("")}</div></td></tr>`;
                })
                .join("")
            : `<tr><td colspan="4">${u.empty("এই শাখায় কোনো শিক্ষার্থী নেই", "students")}</td></tr>`),
          i());
      };
    ((r("#atb").onclick = (d) => {
      const n = d.target.closest(".att button");
      n &&
        ((s[n.closest("tr").dataset.id] = n.dataset.v),
        (e = true),
        T("button", n.parentElement).forEach((p) => p.classList.toggle("on", p === n)),
        i());
    }),
      (r("#allP").onclick = () => {
        (Object.keys(s).forEach((d) => (s[d] = "P")),
          (e = true),
          T("#atb .att button").forEach((d) => d.classList.toggle("on", d.dataset.v === "P")),
          i());
      }),
      (r("#saveA").onclick = () => {
        if (!Object.keys(s).length) return u.toast("এই শাখায় কোনো শিক্ষার্থী নেই", "warn");
        ((_().attLog = _().attLog || {}),
          (_().attLog[`${H.date}|${H.cls}|${H.sec}`] = { by: J.uid, bn: J.name }),
          $.setAtt(H.date, H.cls, H.sec, { ...s }),
          (e = false),
          i(),
          vt(
            "attendance",
            `হাজিরা: ${it(H.cls)} ${H.sec} শাখা, ${o.dateS(H.date)} · অনুপস্থিত ${o.n(Object.values(s).filter((d) => d === "A").length)} জন`,
          ),
          u.success(
            "হাজিরা সংরক্ষিত",
            `${it(H.cls)} ${H.sec} শাখা · উপস্থিত ${o.n(Object.values(s).filter((d) => d === "P").length)}, অনুপস্থিত ${o.n(Object.values(s).filter((d) => d === "A").length)} জন`,
          ));
      }));
    const l = (d) => async (n) => {
      if (e && !(await u.confirm("এই শাখার হাজিরা এখনো সংরক্ষণ হয়নি। না করেই অন্যটায় যাবেন?", "হ্যাঁ, যাব"))) {
        n.target.value = n.target.dataset.prev;
        return;
      }
      (d(n), (n.target.dataset.prev = n.target.value));
    };
    (["#ad", "#ac", "#as"].forEach((d) => {
      r(d).dataset.prev = r(d).value;
    }),
      (r("#ad").onchange = l((d) => {
        ((H.date = d.target.value || G()), c());
      })),
      (r("#ac").onchange = l((d) => {
        ((H.cls = d.target.value),
          (r("#as").innerHTML = ns(H.cls)),
          (H.sec = r("#as").value),
          (r("#as").dataset.prev = H.sec),
          c());
      })),
      (r("#as").onchange = l((d) => {
        ((H.sec = d.target.value), c());
      })),
      c());
  }
  function We(t) {
    t.innerHTML = `<div class="toolbar">
    <input type="month" class="form-control" id="rm" value="${H.month}" max="${G().slice(0, 7)}">
    ${Gs("rc", H.cls)}
    <select class="form-select" id="rs">${ns(H.cls, H.sec)}</select>
    <span class="ms-auto legend" style="gap:14px"><span><b class="mk-P">●</b> উপস্থিত</span><span><b class="mk-A">অ</b> অনুপস্থিত</span><span><b class="mk-L">ছু</b> ছুটি</span></span></div>
  <div class="card-x"><div class="card-head"><h3 id="rh"></h3><span class="right" id="rsub"></span></div><div class="tbl-wrap" id="rw"></div></div>`;
    const s = () => {
      const [e, a] = H.month.split("-").map(Number),
        i = new Date(e, a, 0).getDate();
      r("#rh").textContent = `${gt(H.cls)}, ${H.sec} শাখা`;
      const c = [...Array(i)].map((p, v) => `${H.month}-${String(v + 1).padStart(2, "0")}`),
        l = c.map((p) => $.getAtt(p, H.cls, H.sec)),
        d = Et(ht().filter((p) => p.classId === H.cls && p.section === H.sec));
      let n = `<table class="tbl dense monthly"><thead><tr><th>রোল</th><th style="min-width:160px">নাম</th>${c.map((p, v) => `<th class="d num ${wt(p) ? "off" : ""}" title="${o.day(p)}">${o.n(v + 1)}</th>`).join("")}<th class="r">উপস্থিত</th><th class="r">হার</th></tr></thead><tbody>`;
      ((n +=
        d
          .map((p) => {
            let v = 0,
              g = 0;
            const h = c
              .map((b, k) => {
                const y = l[k] && l[k][p.id];
                return (
                  y && (g++, y === "P" && v++),
                  `<td class="d ${wt(b) ? "off" : ""}">${y === "P" ? '<span class="mk-P">●</span>' : y === "A" ? '<span class="mk-A">অ</span>' : y === "L" ? '<span class="mk-L">ছু</span>' : ""}</td>`
                );
              })
              .join("");
            return `<tr><td><span class="roll num">${o.n(p.roll)}</span></td><td class="text-nowrap">${m(p.nameBn)}</td>${h}<td class="r num">${o.n(v)}/${o.n(g)}</td><td class="r num ${g && v / g < 0.75 ? "down" : ""}">${g ? o.pct(((v / g) * 100).toFixed(0)) : "—"}</td></tr>`;
          })
          .join("") || `<tr><td colspan="${i + 4}">${u.empty("এই শাখায় কোনো শিক্ষার্থী নেই")}</td></tr>`),
        (r("#rw").innerHTML = n + "</tbody></table>"),
        (r("#rsub").textContent = `${o.month(e, a - 1)} · ${o.n(l.filter(Boolean).length)} দিন ক্লাস হয়েছে`));
    };
    ((r("#rm").onchange = (e) => {
      ((H.month = e.target.value || G().slice(0, 7)), s());
    }),
      (r("#rc").onchange = (e) => {
        ((H.cls = e.target.value), (r("#rs").innerHTML = ns(H.cls)), (H.sec = r("#rs").value), s());
      }),
      (r("#rs").onchange = (e) => {
        ((H.sec = e.target.value), s());
      }),
      s());
  }
  const st = { cls: "", sec: "", mode: "class", teacher: "" },
    ks = () => bs.filter((t) => !E().weeklyOff.includes(t)),
    Ue = (t) => {
      const [s, e] = t.split("|");
      return `${gt(s)} · ${e} শাখা`;
    };
  function Je() {
    return (
      (E().routineMeta = E().routineMeta || {
        title: `ক্লাস রুটিন ${o.bd(E().school.session)}`,
        effective: "",
      }),
      E().routineMeta
    );
  }
  function js(t, s, e, a) {
    if (!e) return "";
    for (const [i, c] of Object.entries(_().routine)) {
      if (i === a) continue;
      const l = c[t] && c[t][s];
      if (l && l.teacherId === e) return Ot(i);
    }
    return "";
  }
  dt.routine = (t) => {
    var i;
    if (!O() && !st.init) {
      st.init = 1;
      const c = Bt()[0];
      c && ([st.cls, st.sec] = c.split("|"));
    }
    (ws(st),
      ct(
        "ক্লাস রুটিন",
        "",
        `<button class="btn btn-ghost" id="rtp">${M("print", "ico-16")}<span>প্রিন্ট / PDF</span></button>`,
      ),
      (r("#rtp").onclick = () =>
        mt(
          "routine",
          st.mode === "class"
            ? { scope: "class", classId: st.cls, section: st.sec }
            : { scope: "teacher", teacherId: st.teacher },
        )));
    const s = $.all("teachers").filter((c) => c.type === "শিক্ষক" && c.status !== "left");
    (st.teacher || (st.teacher = (!O() && J.teacherId) || ((i = s[0]) == null ? void 0 : i.id) || ""),
      (t.innerHTML = `<div class="toolbar">
    <div class="seg" id="rmode"><button data-v="class" class="${st.mode === "class" ? "on" : ""}">শ্রেণির রুটিন</button><button data-v="teacher" class="${st.mode === "teacher" ? "on" : ""}">শিক্ষকের রুটিন</button></div>
    ${st.mode === "class" ? `<select class="form-select" id="rc">${qt(st.cls)}</select><select class="form-select" id="rs">${Dt(st.cls, st.sec)}</select>` : `<select class="form-select" id="rtt">${s.map((c) => `<option value="${c.id}" ${c.id === st.teacher ? "selected" : ""}>${m(c.name)}</option>`).join("")}</select>`}
    <span class="ms-auto muted small-t">${st.mode === "class" && O() ? "ঘরে ক্লিক করে বিষয় ও শিক্ষক বসান" : "শুধু দেখার জন্য"}</span></div>
  <div class="card-x card-pad" style="overflow:auto"><div id="rtg" style="min-width:820px"></div></div>`),
      T("#rmode button").forEach(
        (c) =>
          (c.onclick = () => {
            ((st.mode = c.dataset.v), dt.routine(t));
          }),
      ),
      r("#rc") &&
        ((r("#rc").onchange = (c) => {
          ((st.cls = c.target.value), (st.sec = et(st.cls).sections[0]), dt.routine(t));
        }),
        (r("#rs").onchange = (c) => {
          ((st.sec = c.target.value), a());
        })),
      r("#rtt") &&
        (r("#rtt").onchange = (c) => {
          ((st.teacher = c.target.value), a());
        }));
    const e = E().periods,
      a = () => {
        const c = `${st.cls}|${st.sec}`,
          l = _().routine[c] || {};
        let d = `<table class="rt"><thead><tr><th style="width:84px"></th>${e.map((n) => `<th style="${n.brk ? "width:44px" : ""}">${n.brk ? "" : m(n.label)}<span class="t">${n.brk ? "" : o.time(n.start) + "–" + o.time(n.end)}</span></th>`).join("")}</tr></thead><tbody>`;
        (ks().forEach((n, p) => {
          ((d += `<tr><td class="day">${Xt[n]}</td>`),
            e.forEach((v) => {
              var g;
              if (v.brk) {
                d +=
                  p === 0
                    ? `<td rowspan="${ks().length}" class="brk">${m(v.label)} · ${o.time(v.start)}</td>`
                    : "";
                return;
              }
              if (st.mode === "class") {
                const h = (l[n] || {})[v.id],
                  b = h && $t(h.subjectId),
                  k = h && js(n, v.id, h.teacherId, c);
                d += `<td><div class="cell ${b ? "set" : ""} ${k ? "clash" : ""}" data-d="${n}" data-p="${v.id}" style="${O() ? "" : "cursor:default"}" ${k ? `data-tip="এই সময়ে ${m(Vt(h.teacherId))} ${m(k)}-এও আছেন"` : ""}>${b ? `<b>${m(b.short)}</b><span>${m(Vt(h.teacherId)) || "—"}</span>` : `<span class="muted">${O() ? "+" : ""}</span>`}</div></td>`;
              } else {
                let h = "";
                for (const [b, k] of Object.entries(_().routine)) {
                  const y = k[n] && k[n][v.id];
                  y &&
                    y.teacherId === st.teacher &&
                    (h = `<b>${m(Ot(b))}</b><span>${m(((g = $t(y.subjectId)) == null ? void 0 : g.short) || "")}</span>`);
                }
                d += `<td><div class="cell ${h ? "set" : ""}" style="cursor:default">${h}</div></td>`;
              }
            }),
            (d += "</tr>"));
        }),
          (r("#rtg").innerHTML = d + "</tbody></table>"),
          u.bindTips(r("#rtg")),
          st.mode === "class" &&
            O() &&
            T(".cell[data-d]").forEach((n) => (n.onclick = () => Ze(c, +n.dataset.d, n.dataset.p, a))));
      };
    a();
  };
  function Ze(t, s, e, a) {
    const [i] = t.split("|"),
      c = (_().routine[t] = _().routine[t] || {});
    c[s] = c[s] || {};
    const l = c[s][e] || {},
      d = E().periods.find((p) => p.id === e),
      n = $.all("teachers").filter((p) => p.type === "শিক্ষক" && p.status !== "left");
    u.modal({
      title: `${Ue(t)} · ${Xt[s]}, ${d.label} পিরিয়ড`,
      size: "sm",
      body: `<form class="mb" id="rcf"><div class="mb-3"><label class="form-label">বিষয়</label><select class="form-select" name="subjectId" id="rtS0"><option value="">খালি রাখুন</option>${Lt(
        i,
      )
        .map(
          (p) =>
            `<option value="${p.id}" ${p.id === l.subjectId ? "selected" : ""}>${m(p.name)}${p.group ? ` (${m(p.group)})` : ""}</option>`,
        )
        .join("")}</select></div>
      <div class="mb-1"><label class="form-label">শিক্ষক</label><select class="form-select" name="teacherId" id="rtT"><option value="">বাছাই করুন</option>${n
        .map((p) => {
          const v = js(s, e, p.id, t);
          return `<option value="${p.id}" ${p.id === l.teacherId ? "selected" : ""}>${m(p.name)}${p.subject ? ` · ${m(p.subject)}` : ""}${v ? ` · ব্যস্ত (${v})` : ""}</option>`;
        })
        .join("")}</select></div>
      <div class="err" id="rtE"></div></form>`,
      foot: '<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="rtS">সংরক্ষণ</button>',
      onMount: (p, v) => {
        const g = () => {
          const h = js(s, e, r("#rtT", p).value, t);
          r("#rtE", p).textContent = h ? `এই সময়ে এই শিক্ষক ${h}-এ ক্লাস নিচ্ছেন` : "";
        };
        ((r("#rtS0", p).onchange = () => {
          if (r("#rtT", p).value) return;
          const h = $t(r("#rtS0", p).value),
            b = h && n.find((k) => k.subject === h.name && !js(s, e, k.id, t));
          b && ((r("#rtT", p).value = b.id), g());
        }),
          (r("#rtT", p).onchange = g),
          g(),
          (r("#rtS", p).onclick = () => {
            const h = u.formData(r("#rcf", p));
            (h.subjectId ? (c[s][e] = h) : delete c[s][e], $.save(), v(), a());
          }));
      },
    });
  }
  function Qe(t) {
    const s = ks(),
      e = E().periods.filter((l) => !l.brk),
      a = $.all("teachers").filter((l) => l.type === "শিক্ষক" && l.status !== "left"),
      i = {},
      c = (l, d) => l.subject && (l.subject === d.name || d.name.split(" ")[0] === l.subject.split(" ")[0]);
    t.forEach((l, d) => {
      const [n] = l.split("|"),
        p = Lt(n).filter((y) => !y.group),
        v = Lt(n).filter((y) => y.group),
        g = [];
      let h = 0;
      for (
        ;
        g.length < s.length * e.length &&
        (p.forEach((y) => g.push(y)), v.length && g.push(v[h++ % v.length]), !(!p.length && !v.length));
      );
      if (!g.length) return;
      const b = {};
      let k = (d * 3) % g.length;
      (s.forEach((y) => {
        b[y] = {};
        const f = /* @__PURE__ */ new Set();
        e.forEach((x) => {
          let I = null;
          for (let R = 0; R < g.length; R++) {
            const Q = g[(k + R) % g.length];
            if (!f.has(Q.id)) {
              ((I = Q), (k = (k + R + 1) % g.length));
              break;
            }
          }
          (I || ((I = g[k % g.length]), k++), f.add(I.id));
          const S = (i[y + "|" + x.id] = i[y + "|" + x.id] || /* @__PURE__ */ new Set()),
            N = a.find((R) => R.subject === I.name && !S.has(R.id)) || a.find((R) => c(R, I) && !S.has(R.id));
          (N && S.add(N.id), (b[y][x.id] = { subjectId: I.id, teacherId: N ? N.id : "" }));
        });
      }),
        (_().routine[l] = b));
    });
  }
  const Ms = { exam: "" };
  dt.examroutine = (t) => {
    const s = [...$.all("exams")].sort((d, n) => (d.startDate < n.startDate ? 1 : -1));
    $.find("exams", Ms.exam) || (Ms.exam = (s.find((d) => !d.published) || s[0] || {}).id || "");
    const e = $.find("exams", Ms.exam);
    if (
      (ct(
        "পরীক্ষার রুটিন",
        "",
        e
          ? `<button class="btn btn-ghost" id="erp">${M("print", "ico-16")}<span>প্রিন্ট / PDF</span></button>${O() ? `<button class="btn btn-primary" id="erAdd">${M("plus", "ico-16")}<span>দিন যোগ করুন</span></button>` : ""}`
          : "",
      ),
      !e)
    ) {
      t.innerHTML = `<div class="card-x">${u.empty(O() ? 'আগে "পরীক্ষা ও ফলাফল" থেকে একটি পরীক্ষা যোগ করুন' : "কোনো পরীক্ষা নেই", "calendar")}</div>`;
      return;
    }
    const a = tt().filter((d) => e.classes.includes(d.id)),
      i = (e.schedule = e.schedule || []);
    i.sort((d, n) => (d.date + d.start < n.date + n.start ? -1 : 1));
    const c = a.map((d) => {
      const n = new Set(i.map((p) => (p.entries || {})[d.id]).filter(Boolean));
      return { c: d, miss: Lt(d.id).filter((p) => !n.has(p.id)) };
    });
    if (
      ((t.innerHTML = `<div class="toolbar"><select class="form-select" id="erx">${s.map((d) => `<option value="${d.id}" ${d.id === e.id ? "selected" : ""}>${m(d.name)} ${o.bd(d.session)}</option>`).join("")}</select>
      <span class="sec small-t">${e.startDate ? o.date(e.startDate) : ""}${e.endDate ? " – " + o.date(e.endDate) : ""}</span>
      <span class="ms-auto muted small-t">${O() ? "প্রতিটি সারি একটি পরীক্ষার দিন। ঘরে বিষয় বাছুন, ফাঁকা রাখলে সেদিন ওই শ্রেণির পরীক্ষা নেই" : "শুধু দেখার জন্য"}</span></div>
    <div class="card-x mb-3" style="overflow:auto"><table class="tbl" style="min-width:${260 + a.length * 170}px"><thead><tr><th style="width:150px">তারিখ ও বার</th><th style="width:150px">সময়</th>${a.map((d) => `<th>${m(d.name)}</th>`).join("")}${O() ? "<th></th>" : ""}</tr></thead><tbody>
    ${
      i.length
        ? i
            .map(
              (
                d,
              ) => `<tr data-r="${d.id}"><td>${O() ? `<input type="date" class="form-control form-control-sm" data-f="date" value="${d.date || ""}">` : `<b>${d.date ? o.dateS(d.date) : "—"}</b>`}<div class="muted small-t mt-1">${d.date ? o.day(d.date) : ""}</div></td>
      <td>${O() ? `<div class="d-flex gap-1"><input type="time" class="form-control form-control-sm" data-f="start" value="${d.start || ""}"><input type="time" class="form-control form-control-sm" data-f="end" value="${d.end || ""}"></div>` : `${o.time(d.start)}–${o.time(d.end)}`}</td>
      ${a
        .map((n) => {
          var v;
          const p = (d.entries || {})[n.id];
          return `<td>${
            O()
              ? `<select class="form-select form-select-sm" data-c="${n.id}"><option value="">—</option>${Lt(
                  n.id,
                )
                  .map(
                    (g) =>
                      `<option value="${g.id}" ${g.id === p ? "selected" : ""}>${m(g.short)}${g.group ? " (" + m(g.group.slice(0, 4)) + ")" : ""}</option>`,
                  )
                  .join("")}</select>`
              : p
                ? m(((v = $t(p)) == null ? void 0 : v.name) || "")
                : '<span class="muted">—</span>'
          }</td>`;
        })
        .join("")}
      ${O() ? `<td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-del aria-label="মুছুন">${M("trash", "ico-16")}</button></td>` : ""}</tr>`,
            )
            .join("")
        : `<tr><td colspan="${a.length + 3}">${u.empty(O() ? 'এখনো কোনো দিন যোগ করা হয়নি। "দিন যোগ করুন" চাপুন অথবা নিচের বাটনে সব দিন একবারে সাজান' : "রুটিন এখনো প্রকাশ হয়নি", "calendar")}</td></tr>`
    }
    </tbody></table></div>
    ${
      O()
        ? `<div class="row g-3"><div class="col-lg-8"><div class="card-x"><div class="card-head"><h3>যে বিষয়ের তারিখ বাকি</h3></div><div class="card-pad">${c.map((d) => `<div class="mb-2"><b class="small-t">${m(d.c.short)}:</b> ${d.miss.length ? d.miss.map((n) => `<span class="tag y" style="margin:2px">${m(n.short)}</span>`).join("") : '<span class="tag g">সব বিষয়ের তারিখ ঠিক হয়েছে</span>'}</div>`).join("")}</div></div></div>
      <div class="col-lg-4"><div class="card-x card-pad"><h3 style="font-size:15px" class="mb-2">সব দিন একবারে সাজান</h3><p class="muted small-t">শুরুর তারিখ থেকে ছুটির দিন বাদ দিয়ে প্রতিদিন একটি করে বিষয় বসবে। পরে যেকোনো ঘর বদলানো যাবে</p>
      <div class="row g-2"><div class="col-6"><input type="date" class="form-control form-control-sm" id="erFrom" value="${e.startDate || G()}"></div><div class="col-3"><input type="time" class="form-control form-control-sm" id="erS" value="10:00"></div><div class="col-3"><input type="time" class="form-control form-control-sm" id="erE" value="13:00"></div></div>
      <button class="btn btn-ghost w-100 mt-2" id="erAuto">${M("calendar", "ico-16")} সাজিয়ে দিন</button></div></div></div>`
        : ""
    }`),
      (r("#erx").onchange = (d) => {
        ((Ms.exam = d.target.value), C());
      }),
      r("#erp") && (r("#erp").onclick = () => mt("examroutine", { examId: e.id })),
      !O())
    )
      return;
    const l = () => {
      $.save();
    };
    (T("tr[data-r]", t).forEach((d) => {
      const n = i.find((p) => p.id === d.dataset.r);
      (T("[data-f]", d).forEach(
        (p) =>
          (p.onchange = () => {
            ((n[p.dataset.f] = p.value), l(), p.dataset.f === "date" && C());
          }),
      ),
        T("[data-c]", d).forEach(
          (p) =>
            (p.onchange = () => {
              n.entries = n.entries || {};
              const v = p.value && i.find((g) => g !== n && (g.entries || {})[p.dataset.c] === p.value);
              (v &&
                u.toast(
                  `${it(p.dataset.c)}-এর এই বিষয় ${v.date ? o.dateS(v.date) : "অন্য দিনে"} আগেই আছে`,
                  "warn",
                ),
                p.value ? (n.entries[p.dataset.c] = p.value) : delete n.entries[p.dataset.c],
                l());
            }),
        ),
        (r("[data-del]", d).onclick = () => {
          ((e.schedule = i.filter((p) => p !== n)), l(), C());
        }));
    }),
      (r("#erAdd").onclick = () => {
        var p, v;
        const d = i.length ? i[i.length - 1].date : e.startDate || G();
        let n = /* @__PURE__ */ new Date(d + "T00:00");
        for (i.length && n.setDate(n.getDate() + 1); E().weeklyOff.includes(n.getDay());)
          n.setDate(n.getDate() + 1);
        (i.push({
          id: $.uid(),
          date: o.iso(n),
          start: ((p = i[0]) == null ? void 0 : p.start) || "10:00",
          end: ((v = i[0]) == null ? void 0 : v.end) || "13:00",
          entries: {},
        }),
          l(),
          C());
      }),
      (r("#erAuto").onclick = async () => {
        var g, h;
        if (i.length && !(await u.confirm("আগের রুটিনের জায়গায় নতুন করে সাজানো হবে", "সাজান", false))) return;
        const d = a.map((b) => ({
            c: b,
            subs: Lt(b.id)
              .filter((k) => !k.group)
              .concat(Lt(b.id).filter((k) => k.group)),
          })),
          n = Math.max(...d.map((b) => b.subs.length), 0);
        let p = /* @__PURE__ */ new Date((r("#erFrom").value || G()) + "T00:00");
        const v = [];
        for (let b = 0; b < n; b++) {
          for (; E().weeklyOff.includes(p.getDay());) p.setDate(p.getDate() + 1);
          const k = {};
          (d.forEach((y) => {
            y.subs[b] && (k[y.c.id] = y.subs[b].id);
          }),
            v.push({ id: $.uid(), date: o.iso(p), start: r("#erS").value, end: r("#erE").value, entries: k }),
            p.setDate(p.getDate() + 1));
        }
        ((e.schedule = v),
          e.startDate || (e.startDate = (g = v[0]) == null ? void 0 : g.date),
          (e.endDate = ((h = v[v.length - 1]) == null ? void 0 : h.date) || e.endDate),
          l(),
          u.success("পরীক্ষার রুটিন সাজানো হয়েছে", `${o.n(v.length)} দিন · ${o.n(a.length)}টি শ্রেণি`),
          C());
      }));
  };
  let is = "list";
  const z = { exam: "", cls: "", sec: "", subj: "" };
  dt.exams = (t) => {
    const s = [...$.all("exams")].sort((e, a) => (e.startDate < a.startDate ? 1 : -1));
    ($.find("exams", z.exam) || (z.exam = ne()),
      ws(z),
      !O() && is === "list" && (is = "marks"),
      ct(
        "পরীক্ষা ও ফলাফল",
        "",
        O()
          ? `<button class="btn btn-primary" id="addEx">${M("plus", "ico-16")}<span>নতুন পরীক্ষা</span></button>`
          : "",
      ),
      r("#addEx") && (r("#addEx").onclick = () => be()),
      (t.innerHTML = `<div class="tabs">${[
        ["list", "পরীক্ষাসমূহ"],
        ["marks", "নম্বর দিন"],
        ["results", "ফলাফল"],
      ]
        .filter((e) => O() || e[0] !== "list")
        .map((e) => `<button data-t="${e[0]}" class="${is === e[0] ? "on" : ""}">${e[1]}</button>`)
        .join("")}</div><div id="exBody"></div>`),
      T(".tabs button", t).forEach(
        (e) =>
          (e.onclick = () => {
            ((is = e.dataset.t), dt.exams(t));
          }),
      ),
      { list: Xe, marks: ta, results: sa }[is](r("#exBody"), s));
  };
  function Ke(t) {
    let s = 0,
      e = 0;
    return (
      ht()
        .filter((a) => t.classes.includes(a.classId))
        .forEach((a) => {
          const i = _().marks[`${t.id}|${a.id}`] || {};
          gs(a).forEach((c) => {
            (s++, i[c.id] !== void 0 && i[c.id] !== "" && e++);
          });
        }),
      s ? (e / s) * 100 : 0
    );
  }
  function Xe(t, s) {
    ((t.innerHTML = s.length
      ? `<div class="row g-3 stagger">${s
          .map((e) => {
            const a = Ke(e);
            return `<div class="col-md-6 col-xl-4"><div class="card-x card-pad h-100 d-flex flex-column">
    <div class="d-flex align-items-start gap-2"><div class="flex-grow-1"><h3 style="font-size:17px">${m(e.name)}</h3><div class="muted small-t">শিক্ষাবর্ষ ${o.bd(e.session)} · ${e.startDate ? o.dateS(e.startDate) : ""}${e.endDate ? " – " + o.dateS(e.endDate) : ""}</div></div>
      <span class="tag ${e.published ? "g" : "y"}">${e.published ? "ফলাফল প্রকাশিত" : "চলমান"}</span></div>
    <div class="muted small-t mt-3">${e.classes.map((i) => it(i)).join(", ")} শ্রেণি</div>
    <div class="d-flex align-items-center gap-2 mt-2"><span class="track flex-grow-1"><span class="b" style="width:${a}%"></span></span><span class="small-t num sec">${o.pct(a.toFixed(0))} নম্বর দেওয়া হয়েছে</span></div>
    <div class="d-flex gap-2 mt-3 flex-wrap pt-1">
      <button class="btn btn-ghost btn-sm" data-a="marks" data-e="${e.id}">${M("edit", "ico-16")} নম্বর</button>
      <button class="btn btn-ghost btn-sm" data-a="results" data-e="${e.id}">${M("trend", "ico-16")} ফলাফল</button>
      <button class="btn btn-ghost btn-sm" data-a="admit" data-e="${e.id}">${M("id", "ico-16")} প্রবেশপত্র</button>
      <button class="btn btn-quiet btn-sm btn-icon ms-auto" data-a="edit" data-e="${e.id}" aria-label="সম্পাদনা">${M("settings", "ico-16")}</button></div>
  </div></div>`;
          })
          .join("")}</div>`
      : `<div class="card-x">${u.empty('এখনো কোনো পরীক্ষা যোগ করা হয়নি। উপরের "নতুন পরীক্ষা" বাটনে চাপুন', "exam")}</div>`),
      T("[data-a]", t).forEach(
        (e) =>
          (e.onclick = () => {
            const a = $.find("exams", e.dataset.e);
            if (((z.exam = a.id), e.dataset.a === "edit")) return be(a);
            if (e.dataset.a === "admit") return mt("admit", { examId: a.id });
            ((is = e.dataset.a), C());
          }),
      ));
  }
  function be(t = null) {
    const s = t || {
      name: "",
      session: E().school.session,
      classes: tt().map((e) => e.id),
      startDate: "",
      endDate: "",
      published: false,
    };
    u.modal({
      title: t ? "পরীক্ষা সম্পাদনা" : "নতুন পরীক্ষা",
      body: `<form class="mb" id="exf"><div class="row g-3">
      ${u.inp("name", "পরীক্ষার নাম *", s.name, 'required list="exNames"', "col-md-8")}<datalist id="exNames"><option value="প্রথম সাময়িক পরীক্ষা"><option value="অর্ধবার্ষিক পরীক্ষা"><option value="দ্বিতীয় সাময়িক পরীক্ষা"><option value="বার্ষিক পরীক্ষা"><option value="নির্বাচনী (টেস্ট) পরীক্ষা"><option value="প্রাক-নির্বাচনী পরীক্ষা"></datalist>
      ${u.inp("session", "শিক্ষাবর্ষ", s.session, "", "col-md-4")}
      ${u.inp("startDate", "শুরু", s.startDate, 'type="date"')}${u.inp("endDate", "শেষ", s.endDate, 'type="date"')}
      <div class="col-12"><label class="form-label">কোন শ্রেণিগুলোর জন্য</label><div class="d-flex flex-wrap gap-3">${tt()
        .map(
          (e) =>
            `<label class="check"><input type="checkbox" data-cl="${e.id}" ${s.classes.includes(e.id) ? "checked" : ""}>${m(e.name)}</label>`,
        )
        .join("")}</div></div>
      <div class="col-12"><label class="switch"><input type="checkbox" name="published" ${s.published ? "checked" : ""}> ফলাফল প্রকাশিত</label></div>
    </div></form>`,
      foot: `${t ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="dEx">${M("trash", "ico-16")} মুছুন</button>` : ""}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="sEx">সংরক্ষণ</button>`,
      onMount: (e, a) => {
        ((r("#sEx", e).onclick = () => {
          const i = r("#exf", e);
          if (!i.reportValidity()) return;
          const c = u.formData(i);
          if (
            ((c.classes = T("[data-cl]", e)
              .filter((d) => d.checked)
              .map((d) => d.dataset.cl)),
            !c.classes.length)
          )
            return u.toast("অন্তত একটি শ্রেণি বাছুন", "warn");
          const l = $.upsert("exams", { ...(t ? { id: t.id } : {}), ...c });
          ((z.exam = l.id), a(), u.success("পরীক্ষা সংরক্ষিত", c.name), C());
        }),
          t &&
            (r("#dEx", e).onclick = async () => {
              const em = {};
              (await u.confirm(`${m(t.name)} এবং এর সব নম্বর মুছে যাবে (রিসাইকেল বিন থেকে ফেরানো যাবে)`)) &&
                (Object.keys(_().marks).forEach((i) => {
                  i.startsWith(t.id + "|") && ((em[i] = _().marks[i]), delete _().marks[i]);
                }),
                trashIt("exams", t.id, `${t.name} ${o.bd(t.session || "")}`, { marks: em }),
                a(),
                C());
            }));
      },
    });
  }
  function ge(t) {
    return `<select class="form-select" id="xe">${t.map((s) => `<option value="${s.id}" ${s.id === z.exam ? "selected" : ""}>${m(s.name)} ${o.bd(s.session)}</option>`).join("")}</select>`;
  }
  function ta(t, s) {
    var k, y;
    if (!s.length) {
      t.innerHTML = `<div class="card-x">${u.empty("আগে একটি পরীক্ষা যোগ করুন", "exam")}</div>`;
      return;
    }
    const e = $.find("exams", z.exam),
      a = (f, x) => O() || kt(f, x) || Lt(f).some((I) => J.subjects.includes(I.id)),
      i = tt().filter((f) => e.classes.includes(f.id) && f.sections.some((x) => a(f.id, x)));
    if (
      (i.find((f) => f.id === z.cls) || ((z.cls = (k = i[0]) == null ? void 0 : k.id), (z.sec = "")), !z.cls)
    ) {
      t.innerHTML = `<div class="card-x">${u.empty("এই পরীক্ষায় আপনার কোনো শ্রেণি বা বিষয় নেই", "exam")}</div>`;
      return;
    }
    const c = et(z.cls).sections.filter((f) => a(z.cls, f));
    c.includes(z.sec) || (z.sec = c[0]);
    const l = Lt(z.cls).filter((f) => Ce(f.id, z.cls, z.sec));
    l.find((f) => f.id === z.subj) || (z.subj = ((y = l[0]) == null ? void 0 : y.id) || "");
    const d = !O() && e.published;
    t.innerHTML = `<div class="toolbar">${ge(s)}
    <select class="form-select" id="xc">${i.map((f) => `<option value="${f.id}" ${f.id === z.cls ? "selected" : ""}>${m(f.name)}</option>`).join("")}</select>
    <select class="form-select" id="xs">${c.map((f) => `<option value="${m(f)}" ${f === z.sec ? "selected" : ""}>${m(f)} শাখা</option>`).join("")}</select>
    <select class="form-select" id="xsub">${l.map((f) => `<option value="${f.id}" ${f.id === z.subj ? "selected" : ""}>${m(f.name)}${f.group ? ` (${m(f.group)})` : ""}</option>`).join("")}</select>
    ${d ? `<span class="ms-auto ro-note">${M("lock", "ico-16")} ফলাফল প্রকাশিত, নম্বর বদলাতে পারবেন শুধু প্রধান শিক্ষক</span>` : '<button class="btn btn-primary ms-auto" id="xSave">সংরক্ষণ করুন</button>'}</div>
  <div class="card-x"><div class="card-head"><h3 id="xh"></h3><span class="right" id="xinfo"></span></div><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রোল</th><th>নাম</th><th class="hide-m">বিভাগ</th><th class="c">প্রাপ্ত নম্বর</th><th class="r">গ্রেড</th></tr></thead><tbody id="xtb"></tbody></table></div></div>`;
    const n = $t(z.subj),
      p = Et(
        ht().filter(
          (f) =>
            f.classId === z.cls && f.section === z.sec && (!(n != null && n.group) || f.group === n.group),
        ),
      );
    ((r("#xh").textContent = `${n ? n.name : ""} · ${it(z.cls)} ${z.sec} শাখা`),
      (r("#xinfo").textContent = n ? `পূর্ণমান ${o.n(n.fullMarks)} · পাস ${o.n(n.passMarks)}` : ""));
    const v = (f) =>
      f === "" || f == null || isNaN(f)
        ? '<span class="muted">—</span>'
        : +f < n.passMarks
          ? '<span class="gp gp-F">F</span>'
          : `<span class="gp">${ae((f / n.fullMarks) * 100).grade}</span>`;
    r("#xtb").innerHTML =
      n && p.length
        ? p
            .map((f, x) => {
              const I = (_().marks[`${e.id}|${f.id}`] || {})[n.id];
              return `<tr data-id="${f.id}"><td><span class="roll num">${o.n(f.roll)}</span></td><td>${m(f.nameBn)}</td><td class="sec hide-m">${m(f.group || "—")}</td>
    <td class="c"><input class="marks-in num" inputmode="numeric" data-i="${x}" value="${I != null ? I : ""}" ${d ? "disabled" : ""}></td><td class="r" data-g>${v(I)}</td></tr>`;
            })
            .join("")
        : `<tr><td colspan="5">${u.empty(n ? "এই শাখায় এই বিষয়ের কোনো শিক্ষার্থী নেই" : "এই শ্রেণির কোনো বিষয় নেই", "students")}</td></tr>`;
    let g = false;
    T(".marks-in", t).forEach((f) => {
      ((f.oninput = () => {
        f.value = o.en(f.value).replace(/[^0-9.]/g, "");
        const x = f.value,
          I = x !== "" && (+x > n.fullMarks || +x < 0);
        (f.classList.toggle("bad", I),
          (f.closest("tr").querySelector("[data-g]").innerHTML = v(x === "" ? "" : +x)),
          (g = true));
      }),
        (f.onkeydown = (x) => {
          var I, S;
          ((x.key === "Enter" || x.key === "ArrowDown") &&
            (x.preventDefault(), (I = r(`.marks-in[data-i="${+f.dataset.i + 1}"]`, t)) == null || I.focus()),
            x.key === "ArrowUp" &&
              (x.preventDefault(),
              (S = r(`.marks-in[data-i="${+f.dataset.i - 1}"]`, t)) == null || S.focus()));
        }),
        (f.onfocus = () => f.select()));
    });
    const h = () =>
      T(".marks-in.bad", t).length
        ? (u.toast(`পূর্ণমান ${o.n(n.fullMarks)}-এর বেশি নম্বর দেওয়া যাবে না`, "warn"), false)
        : ((_().marksLog = _().marksLog || {}),
          T("#xtb tr[data-id]", t).forEach((f) => {
            const x = `${e.id}|${f.dataset.id}`,
              I = f.querySelector(".marks-in").value;
            _().marks[x] = _().marks[x] || {};
            const S = _().marks[x][n.id];
            (I === "" ? delete _().marks[x][n.id] : (_().marks[x][n.id] = +I),
              S !== _().marks[x][n.id] && (_().marksLog[x] = { by: J.uid }));
          }),
          $.save(),
          vt("marks", `নম্বর: ${e.name}, ${n.name}, ${it(z.cls)} ${z.sec} শাখা`),
          (g = false),
          u.success("নম্বর সংরক্ষিত", `${n.name} · ${it(z.cls)} ${z.sec} শাখা`),
          true);
    r("#xSave") && (r("#xSave").onclick = h);
    const b = (f) => async (x) => {
      if (g && !(await u.confirm("নম্বর এখনো সংরক্ষণ হয়নি। সংরক্ষণ করে এগোবেন?", "সংরক্ষণ করে এগোন", false))) {
        f(x);
        return;
      }
      (g && !h()) || f(x);
    };
    ((r("#xe").onchange = b((f) => {
      ((z.exam = f.target.value), C());
    })),
      (r("#xc").onchange = b((f) => {
        ((z.cls = f.target.value), (z.sec = et(z.cls).sections[0]), C());
      })),
      (r("#xs").onchange = b((f) => {
        ((z.sec = f.target.value), C());
      })),
      (r("#xsub").onchange = b((f) => {
        ((z.subj = f.target.value), C());
      })));
  }
  function sa(t, s) {
    var h;
    if (!s.length) {
      t.innerHTML = `<div class="card-x">${u.empty("আগে একটি পরীক্ষা যোগ করুন", "exam")}</div>`;
      return;
    }
    const e = $.find("exams", z.exam),
      a = tt().filter((b) => e.classes.includes(b.id) && (O() || At().includes(b.id)));
    if ((a.find((b) => b.id === z.cls) || (z.cls = (h = a[0]) == null ? void 0 : h.id), !z.cls)) {
      t.innerHTML = `<div class="card-x">${u.empty("আপনার কোনো শ্রেণি এই পরীক্ষায় নেই", "exam")}</div>`;
      return;
    }
    const i = ts(e.id, z.cls),
      c = et(z.cls).sections.filter((b) => kt(z.cls, b)),
      l = z.rsec || "",
      d = i.filter((b) => (!l || b.st.section === l) && kt(b.st.classId, b.st.section)),
      n = d.filter((b) => b.r.pass).length,
      p = d.filter((b) => b.r.grade === "A+").length,
      v = {};
    (E().grading.forEach((b) => (v[b.grade] = 0)),
      d.forEach((b) => {
        v[b.r.grade] != null && v[b.r.grade]++;
      }));
    const g = Math.max(1, ...Object.values(v));
    ((t.innerHTML = `<div class="toolbar">${ge(s)}
    <select class="form-select" id="xc">${a.map((b) => `<option value="${b.id}" ${b.id === z.cls ? "selected" : ""}>${m(b.name)}</option>`).join("")}</select>
    <select class="form-select" id="xrs"><option value="">সব শাখা</option>${c.map((b) => `<option ${b === l ? "selected" : ""}>${m(b)}</option>`).join("")}</select>
    <div class="ms-auto d-flex gap-2 flex-wrap">${e.published ? `<span class="tag g" style="height:38px;padding:0 12px">${M("check", "ico-16")} প্রকাশিত</span>` : O() ? `<button class="btn btn-gold" id="pubRes">${M("award", "ico-16")} ফলাফল প্রকাশ করুন</button>` : '<span class="tag y" style="height:38px;padding:0 12px">এখনো প্রকাশ হয়নি</span>'}${O() ? `<button class="btn btn-ghost" id="tabSheet">${M("register", "ico-16")} ফলাফল শিট</button>` : ""}<button class="btn btn-primary" id="allTr">${M("docs", "ico-16")} সবার ট্রান্সক্রিপ্ট</button></div></div>
  <div class="row g-3 mb-3 stagger">
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">পরীক্ষার্থী</div><div class="fig num">${o.n(d.length)}</div><div class="note">${o.n(ht().filter((b) => b.classId === z.cls && (!l || b.section === l)).length)} জনের মধ্যে</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">পাসের হার</div><div class="fig num">${d.length ? o.pct(((n / d.length) * 100).toFixed(1)) : "—"}</div><div class="note">পাস ${o.n(n)} · ফেল ${o.n(d.length - n)}</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">জিপিএ ৫</div><div class="fig num" style="color:var(--gold-ink)">${o.n(p)}</div><div class="note">A+ পেয়েছে</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad"><div class="label sec small-t mb-2">গ্রেড বিন্যাস</div>
      <div class="d-flex align-items-end gap-1" style="height:58px">${Object.entries(v)
        .map(
          ([b, k]) =>
            `<div class="flex-grow-1 text-center" data-tip="${b}: ${o.n(k)} জন"><div style="height:${Math.max(3, (k / g) * 40)}px;border-radius:4px 4px 1px 1px;background:${b === "F" ? "var(--neg)" : b === "A+" ? "var(--gold)" : "var(--h3)"}"></div><div class="muted" style="font-size:11px;margin-top:3px">${b}</div></div>`,
        )
        .join("")}</div></div></div>
  </div>
  ${
    d.filter((b) => b.r.pass).length >= 3
      ? `<div class="card-x card-pad mb-3"><div class="sec small-t mb-1">${l ? l + " শাখার" : "শ্রেণির"} সেরা তিন</div><div class="podium">${[
          1, 0, 2,
        ]
          .map((b) => {
            const k = d.filter((y) => y.r.pass)[b];
            return `<div class="pd p${b + 1}">${u.avatar(k.st.nameBn, k.st.photo, "lg", k.st.gender).replace("avatar lg", "avatar lg mx-auto")}<div class="mt-2" style="font-weight:500">${m(k.st.nameBn)}</div><div class="muted small-t">রোল ${o.n(k.st.roll)} · জিপিএ ${o.gpa(k.r.gpa)} · ${o.n(k.r.total)} নম্বর</div><div class="st">${o.n(b + 1)}</div></div>`;
          })
          .join("")}</div></div>`
      : ""
  }
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>মেধাক্রম</th><th>রোল</th><th>নাম</th><th class="hide-m">শাখা</th><th class="r">মোট</th><th class="r">জিপিএ</th><th class="r">গ্রেড</th><th class="r hide-m">ফেল</th><th></th></tr></thead><tbody>
  ${
    d.length
      ? d
          .map(
            (
              b,
              k,
            ) => `<tr class="click res-row" style="animation-delay:${Math.min(k, 20) * 25}ms" data-s="${b.st.id}"><td class="num">${b.r.pass ? (b.pos <= 3 ? `<span class="medal m${b.pos}">${o.n(b.pos)}</span>` : `<span class="roll">${o.n(b.pos)}</span>`) : '<span class="muted">—</span>'}</td><td class="num">${o.n(b.st.roll)}</td><td>${m(b.st.nameBn)}${b.r.complete ? "" : ' <span class="tag y">নম্বর অসম্পূর্ণ</span>'}</td><td class="hide-m">${m(b.st.section)}</td>
    <td class="r num">${o.n(b.r.total)}</td><td class="r num">${o.gpa(b.r.gpa)}</td><td class="r"><span class="gp ${b.r.grade === "F" ? "gp-F" : ""}">${b.r.grade}</span></td><td class="r num hide-m">${b.r.fails ? `<span class="down">${o.n(b.r.fails)}</span>` : "—"}</td>
    <td class="r"><button class="btn btn-quiet btn-sm btn-icon" aria-label="ট্রান্সক্রিপ্ট">${M("docs", "ico-16")}</button></td></tr>`,
          )
          .join("")
      : `<tr><td colspan="9">${u.empty("এই পরীক্ষায় এখনো নম্বর দেওয়া হয়নি", "exam")}</td></tr>`
  }
  </tbody></table></div></div>`),
      u.bindTips(t),
      (r("#xe").onchange = (b) => {
        ((z.exam = b.target.value), C());
      }),
      (r("#xc").onchange = (b) => {
        ((z.cls = b.target.value), (z.rsec = ""), C());
      }),
      (r("#xrs").onchange = (b) => {
        ((z.rsec = b.target.value), C());
      }),
      r("#pubRes") &&
        (r("#pubRes").onclick = async () => {
          const b = i.filter((y) => !y.r.complete).length;
          if (
            !(await u.confirm(
              `${m(e.name)}-এর ফলাফল প্রকাশ করা হবে${b ? `। ${o.n(b)} জনের নম্বর এখনো অসম্পূর্ণ` : ""}`,
              "প্রকাশ করুন",
              false,
            ))
          )
            return;
          $.upsert("exams", { id: e.id, published: true });
          const k = tt()
            .filter((y) => e.classes.includes(y.id))
            .flatMap((y) => ts(e.id, y.id));
          (u.success(
            "ফলাফল প্রকাশিত হয়েছে",
            `পাসের হার ${k.length ? o.pct(((k.filter((y) => y.r.pass).length / k.length) * 100).toFixed(1)) : "—"} · জিপিএ ৫ পেয়েছে ${o.n(k.filter((y) => y.r.grade === "A+").length)} জন`,
          ),
            C());
        }),
      r("#tabSheet") &&
        (r("#tabSheet").onclick = () => mt("tabulation", { examId: e.id, classId: z.cls, section: l })),
      (r("#allTr").onclick = () =>
        mt("transcript", { examId: e.id, classId: z.cls, section: l || et(z.cls).sections[0] })),
      T("[data-s]", t).forEach(
        (b) => (b.onclick = () => mt("transcript", { examId: e.id, students: [b.dataset.s] })),
      ));
  }
  let ds = "collect";
  const yt = { cls: "", sec: "", q: "" };
  dt.fees = (t) => {
    (ct(
      "ফি আদায়",
      "",
      `<button class="btn btn-primary" id="newPay">${M("plus", "ico-16")}<span>ফি জমা নিন</span></button>`,
    ),
      (r("#newPay").onclick = () => Ss()));
    const s = G().slice(0, 7),
      e = $.all("payments").filter((n) => O() || n.by === J.uid);
    !O() && ds === "heads" && (ds = "collect");
    const a = e.filter((n) => n.date.startsWith(s)).reduce((n, p) => n + p.total, 0),
      i = e.filter((n) => n.date === G()).reduce((n, p) => n + p.total, 0),
      c = e.filter((n) => n.date.startsWith(s.slice(0, 4))).reduce((n, p) => n + p.total, 0),
      l = ht()
        .filter((n) => kt(n.classId, n.section))
        .map((n) => ({ s: n, d: Yt(n) }))
        .filter((n) => n.d.amount > 0);
    ((t.innerHTML = `<div class="row g-3 mb-3 stagger">
    <div class="col-6 col-xl-3"><div class="card-x card-pad stat"><div class="label">${O() ? "আজ আদায়" : "আজ আমার আদায়"}</div><div class="fig num" data-to="${i}" data-f="tk">০</div><div class="note">${o.n(e.filter((n) => n.date === G()).length)}টি রসিদ</div></div></div>
    <div class="col-6 col-xl-3"><div class="card-x card-pad stat"><div class="label">এ মাসে আদায়</div><div class="fig num" data-to="${a}" data-f="tk">০</div><div class="note">${o.ym(s)}</div></div></div>
    <div class="col-6 col-xl-3"><div class="card-x card-pad stat"><div class="label">এ বছরে আদায়</div><div class="fig num" data-to="${c}" data-f="tk">০</div><div class="note">${o.n(e.filter((n) => n.date.startsWith(s.slice(0, 4))).length)}টি রসিদ</div></div></div>
    <div class="col-6 col-xl-3"><div class="card-x card-pad stat"><div class="label">মোট বকেয়া বেতন</div><div class="fig num down" data-to="${l.reduce((n, p) => n + p.d.amount, 0)}" data-f="tk">০</div><div class="note">${o.n(l.length)} জনের</div></div></div>
  </div>
  <div class="tabs">${[
    ["collect", O() ? "রসিদসমূহ" : "আমার রসিদ"],
    ["dues", "বকেয়া তালিকা"],
    ["heads", "ফি-এর হার"],
  ]
    .filter((n) => O() || n[0] !== "heads")
    .map((n) => `<button data-t="${n[0]}" class="${ds === n[0] ? "on" : ""}">${n[1]}</button>`)
    .join("")}</div><div id="feeBody"></div>`),
      T("[data-to]", t).forEach((n) => u.tween(n, +n.dataset.to)),
      T(".tabs button", t).forEach(
        (n) =>
          (n.onclick = () => {
            ((ds = n.dataset.t), dt.fees(t));
          }),
      ));
    const d = r("#feeBody");
    if (ds === "collect") {
      d.innerHTML = `<div class="toolbar"><div class="input-ico grow">${M("search")}<input class="form-control" id="pq" placeholder="রসিদ নং, নাম বা রোল" value="${m(yt.q)}"></div><input type="month" class="form-control" id="pm" value="${yt.month || ""}"><span class="ms-auto muted small-t" id="pc"></span></div>
      <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রসিদ নং</th><th>তারিখ</th><th>শিক্ষার্থী</th><th class="hide-m">বিবরণ</th><th class="hide-m">আদায়কারী</th><th class="r">টাকা</th><th></th></tr></thead><tbody id="ptb"></tbody></table></div></div>`;
      const n = () => {
        const p = o.en(yt.q).toLowerCase(),
          v = [...e]
            .filter((g) => {
              const h = $.find("students", g.studentId) || {};
              return (
                (!yt.month || g.date.startsWith(yt.month)) &&
                (!p ||
                  [g.receiptNo, h.nameBn, String(h.roll), h.studentId].some((b) =>
                    String(b || "")
                      .toLowerCase()
                      .includes(p),
                  ))
              );
            })
            .sort((g, h) => (g.date < h.date ? 1 : g.date > h.date ? -1 : g.receiptNo < h.receiptNo ? 1 : -1))
            .slice(0, 300);
        ((r("#pc").textContent = `${o.n(v.length)}টি রসিদ · ${o.tk(v.reduce((g, h) => g + h.total, 0))}`),
          (r("#ptb").innerHTML = v.length
            ? v
                .map((g) => {
                  const h = $.find("students", g.studentId);
                  return `<tr class="click" data-p="${g.id}"><td class="num">${m(o.bd(g.receiptNo))}</td><td class="sec">${o.dateS(g.date)}</td>
        <td>${h ? `${m(h.nameBn)} <span class="muted small-t">${m(it(h.classId))} ${m(h.section)} · ${o.n(h.roll)}</span>` : '<span class="muted">মুছে ফেলা শিক্ষার্থী</span>'}</td>
        <td class="sec small-t hide-m">${m(g.items.map((b) => (b.month ? o.monS(b.month) : b.label)).join(", "))}</td><td class="hide-m sec small-t">${m(g.bn || "অ্যাডমিন")} · ${m(g.method)}</td><td class="r num">${o.tk(g.total)}</td>
        <td class="r">${O() ? `<button class="btn btn-quiet btn-sm btn-icon" data-x="${g.id}" aria-label="মুছুন">${M("trash", "ico-16")}</button>` : M("print", "ico-16 muted")}</td></tr>`;
                })
                .join("")
            : `<tr><td colspan="7">${u.empty("কোনো রসিদ নেই", "receipt")}</td></tr>`),
          T("#ptb tr[data-p]").forEach(
            (g) =>
              (g.onclick = async (h) => {
                if (h.target.closest("[data-x]")) {
                  const b = $.find("payments", g.dataset.p);
                  (await u.confirm("এই রসিদটি বাতিল হবে এবং সংশ্লিষ্ট মাস আবার বকেয়া দেখাবে")) &&
                    (trashIt("payments", g.dataset.p, `রসিদ ${b.receiptNo} · ${o.tk(b.total)}`),
                    vt("fee-cancel", `রসিদ বাতিল: ${b.receiptNo} (${o.tk(b.total)})`),
                    C());
                  return;
                }
                mt("receipt", { paymentId: g.dataset.p });
              }),
          ));
      };
      ((r("#pq").oninput = (p) => {
        ((yt.q = p.target.value), n());
      }),
        (r("#pm").onchange = (p) => {
          ((yt.month = p.target.value), n());
        }),
        n());
    } else if (ds === "dues") {
      (ws(yt),
        (d.innerHTML = `<div class="toolbar"><select class="form-select" id="dc">${
          O()
            ? qt(yt.dcls || "", true)
            : '<option value="">আমার সব শ্রেণি</option>' +
              tt()
                .filter((p) => At().includes(p.id))
                .map(
                  (p) =>
                    `<option value="${p.id}" ${p.id === yt.dcls ? "selected" : ""}>${m(p.name)}</option>`,
                )
                .join("")
        }</select><span class="ms-auto muted small-t" id="dcnt"></span></div>
      <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>রোল</th><th>নাম</th><th>শ্রেণি</th><th class="hide-m">বকেয়া মাস</th><th class="hide-m">মোবাইল</th><th class="r">বকেয়া</th><th></th></tr></thead><tbody id="dtb"></tbody></table></div></div>`));
      const n = () => {
        const p = Et(l.filter((v) => !yt.dcls || v.s.classId === yt.dcls).map((v) => v.s)).map((v) => ({
          s: v,
          d: Yt(v),
        }));
        ((r("#dcnt").textContent = `${o.n(p.length)} জন · ${o.tk(p.reduce((v, g) => v + g.d.amount, 0))}`),
          (r("#dtb").innerHTML = p.length
            ? p
                .map(
                  (
                    v,
                  ) => `<tr><td><span class="roll num">${o.n(v.s.roll)}</span></td><td>${m(v.s.nameBn)}</td><td>${m(it(v.s.classId))} ${m(v.s.section)}</td>
        <td class="sec small-t hide-m">${v.d.months.map((g) => o.monS(g)).join(", ")}</td><td class="num sec hide-m">${m(o.bd(v.s.phone))}</td><td class="r num down">${o.tk(v.d.amount)}</td>
        <td class="r"><button class="btn btn-ghost btn-sm" data-c="${v.s.id}">আদায় করুন</button></td></tr>`,
                )
                .join("")
            : `<tr><td colspan="7">${u.empty("কারো বকেয়া নেই", "check")}</td></tr>`),
          T("[data-c]", d).forEach((v) => (v.onclick = () => Ss(v.dataset.c))));
      };
      ((r("#dc").onchange = (p) => {
        ((yt.dcls = p.target.value), n());
      }),
        n());
    } else ((d.innerHTML = ea()), aa(d));
  };
  function ea() {
    const t = tt();
    return `<div class="card-x"><div class="card-head"><h3>ফি-এর খাত ও হার</h3><span class="right">শ্রেণিভেদে টাকার পরিমাণ লিখুন, ঘর ছাড়লেই সংরক্ষণ হবে</span></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>খাত</th><th>ধরন</th>${t.map((s) => `<th class="c">${m(s.short)}</th>`).join("")}<th></th></tr></thead><tbody>
    ${E()
      .feeHeads.map(
        (
          s,
        ) => `<tr data-h="${s.id}"><td><input class="form-control form-control-sm" data-f="name" value="${m(s.name)}" style="min-width:150px"></td>
      <td><select class="form-select form-select-sm" data-f="type" style="min-width:110px"><option value="monthly" ${s.type === "monthly" ? "selected" : ""}>মাসিক</option><option value="yearly" ${s.type === "yearly" ? "selected" : ""}>বছরে একবার</option><option value="once" ${s.type === "once" ? "selected" : ""}>প্রয়োজনমতো</option></select></td>
      ${t
        .map((e) => {
          var a;
          return `<td class="c"><input class="marks-in num" data-amt="${e.id}" value="${(a = s.amounts[e.id]) != null ? a : ""}"></td>`;
        })
        .join("")}
      <td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-del aria-label="মুছুন">${M("trash", "ico-16")}</button></td></tr>`,
      )
      .join("")}
    </tbody></table></div><div class="card-pad"><button class="btn btn-ghost" id="addHead">${M("plus", "ico-16")} খাত যোগ করুন</button><div class="hint mt-2">"মাসিক" ধরনের খাত থেকে বকেয়া হিসাব হয়। একটির বেশি মাসিক খাত থাকলে প্রথমটি ধরা হবে। "বছরে একবার" ধরনের খাত (যেমন ভর্তি ও সেশন ফি) একবার আদায় হলে ওই শিক্ষাবর্ষে আর নেওয়া যাবে না। "প্রয়োজনমতো" খাত (যেমন পরীক্ষার ফি) বারবার নেওয়া যায়</div></div></div>`;
  }
  function aa(t) {
    (T("tr[data-h]", t).forEach((s) => {
      const e = E().feeHeads.find((a) => a.id === s.dataset.h);
      (T("[data-f]", s).forEach(
        (a) =>
          (a.onchange = () => {
            ((e[a.dataset.f] = a.value), $.save(), u.toast("সংরক্ষিত"));
          }),
      ),
        T("[data-amt]", s).forEach(
          (a) =>
            (a.onchange = () => {
              ((e.amounts[a.dataset.amt] = +o.en(a.value) || 0), $.save(), u.toast("সংরক্ষিত"));
            }),
        ),
        (r("[data-del]", s).onclick = async () => {
          (await u.confirm(`"${m(e.name)}" খাতটি মুছে যাবে। পুরোনো রসিদ ঠিক থাকবে`)) &&
            ((E().feeHeads = E().feeHeads.filter((a) => a !== e)), $.save(), C());
        }));
    }),
      (r("#addHead", t).onclick = () => {
        (E().feeHeads.push({ id: "fh" + $.uid(), name: "নতুন খাত", type: "yearly", amounts: {} }),
          $.save(),
          C());
      }));
  }
  function paidYearly(st, headId, ses) {
    return $.all("payments").find(
      (p) =>
        p.studentId === st.id &&
        (p.items || []).some(
          (x) => x.headId === headId && !x.month && String(x.session || (p.date || "").slice(0, 4)) === String(ses),
        ),
    );
  }
  function Ss(t) {
    var c, l;
    let s = t ? $.find("students", t) : null;
    if (!O() && !Bt().length) return u.toast("আপনাকে এখনো কোনো শ্রেণির দায়িত্ব দেওয়া হয়নি", "warn");
    if (s && !kt(s.classId, s.section)) return u.toast("এই শিক্ষার্থীর ফি নেওয়ার অনুমতি আপনার নেই", "warn");
    const e = (Bt()[0] || "|").split("|"),
      a = s || (O() ? null : { classId: e[0], section: e[1] }),
      i = +E().school.session || /* @__PURE__ */ new Date().getFullYear();
    u.modal({
      title: "ফি জমা নিন",
      size: "lg",
      body: `<div class="mb">
      <div class="row g-3 mb-2">
        <div class="col-md-4"><label class="form-label">শ্রেণি</label>${Gs("cc", a ? a.classId : (c = tt()[0]) == null ? void 0 : c.id)}</div>
        <div class="col-md-3"><label class="form-label">শাখা</label><select class="form-select" id="cs">${ns(a ? a.classId : (l = tt()[0]) == null ? void 0 : l.id, a == null ? void 0 : a.section)}</select></div>
        <div class="col-md-5"><label class="form-label">শিক্ষার্থী</label><select class="form-select" id="cst"></select></div>
      </div>
      <div id="feeBox"></div></div>`,
      foot: `<span class="me-auto" style="font-size:18px"><span class="muted small-t">মোট</span> <b class="num" id="ftot">৳০</b></span><button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-ghost" id="fSave">সংরক্ষণ</button><button class="btn btn-primary" id="fSavePrint">${M("print", "ico-16")} সংরক্ষণ ও রসিদ</button>`,
      onMount: (d, n) => {
        const p = () => {
            const y = Et(
              ht().filter((f) => f.classId === r("#cc", d).value && f.section === r("#cs", d).value),
            );
            ((r("#cst", d).innerHTML = y
              .map(
                (f) =>
                  `<option value="${f.id}" ${s && f.id === s.id ? "selected" : ""}>${o.n(f.roll)}. ${m(f.nameBn)}</option>`,
              )
              .join("")),
              (s = $.find("students", r("#cst", d).value)),
              v());
          },
          v = () => {
            if (!s) {
              ((r("#feeBox", d).innerHTML = u.empty("এই শাখায় কোনো শিক্ষার্থী নেই")), h());
              return;
            }
            const y = ie(s),
              f = Bs(),
              x = Yt(s),
              I = [...Array(12)].map((S, N) => `${i}-${String(N + 1).padStart(2, "0")}`);
            ((r("#feeBox", d).innerHTML = `
          <div class="card-x card-pad mb-3 d-flex align-items-center gap-3" style="background:var(--hover)">${u.avatar(s.nameBn, s.photo, "", s.gender)}<div class="flex-grow-1"><div>${m(s.nameBn)}</div><div class="muted small-t">${m(qs(s))} · আইডি ${m(o.bd(s.studentId))}</div></div>
            ${x.amount ? `<span class="tag r">বকেয়া ${o.tk(x.amount)}</span>` : '<span class="tag g">বকেয়া নেই</span>'}</div>
          ${
            f
              ? `<div class="fsec">${m(f.name)} · মাসে ${o.tk(f.amounts[s.classId] || 0)}</div>
          <div class="d-flex flex-wrap gap-2 mb-2">${I.map((S) => {
            const N = y.has(S),
              R = x.months.includes(S);
            return `<label class="chip-edit" style="padding:0 11px;gap:7px;${N ? "opacity:.5" : R ? "background:var(--neg-soft)" : ""}"><input type="checkbox" data-m="${S}" ${N ? "disabled checked" : R ? "checked" : ""} style="accent-color:var(--primary)"> ${o.monS(S)}${N ? " ✓" : ""}</label>`;
          }).join("")}</div>`
              : ""
          }
          <div class="fsec">অন্যান্য ফি</div>
          ${E()
            .feeHeads.filter((S) => S.type !== "monthly")
            .map((S) => {
              const pd = S.type === "yearly" ? paidYearly(s, S.id, i) : null;
              return pd
                ? `<div class="d-flex align-items-center gap-3 mb-2" style="opacity:.6"><label class="check flex-grow-1" style="margin:0"><input type="checkbox" disabled checked> ${m(S.name)} <span class="tag g">${o.bd(i)} সালে আদায় হয়েছে · রসিদ ${m(o.bd(pd.receiptNo))}</span></label><input class="form-control form-control-sm num" style="width:120px" value="${o.n(pd.items.find((x) => x.headId === S.id).amount)}" disabled></div>`
                : `<div class="d-flex align-items-center gap-3 mb-2"><label class="check flex-grow-1" style="margin:0"><input type="checkbox" data-h="${S.id}"> ${m(S.name)}${S.type === "yearly" ? ' <span class="muted small-t">(বছরে একবার)</span>' : ""}</label><input class="form-control form-control-sm num" style="width:120px" data-ha="${S.id}" value="${S.amounts[s.classId] || 0}"></div>`;
            })
            .join("")}
          <div class="row g-3 mt-1">
            ${u.inp("discount", "ছাড় (টাকা)", 0, 'type="number" min="0" id="fdisc"', "col-md-3")}
            ${u.sel("method", "মাধ্যম", ["নগদ", "বিকাশ", "নগদ (মোবাইল)", "রকেট", "ব্যাংক"], "নগদ", "col-md-3", 'id="fmeth"')}
            ${u.inp("date", "তারিখ", G(), 'type="date" id="fdate"', "col-md-3")}
            ${u.inp("note", "মন্তব্য", "", 'id="fnote"', "col-md-3")}
          </div>`),
              T("input", r("#feeBox", d)).forEach((S) => S.addEventListener("input", h)),
              h());
          },
          g = () => {
            if (!s) return [];
            const y = Bs(),
              f = [];
            return (
              T("[data-m]:not(:disabled):checked", d).forEach((x) =>
                f.push({
                  headId: y.id,
                  label: y.name,
                  month: x.dataset.m,
                  amount: +y.amounts[s.classId] || 0,
                }),
              ),
              T("[data-h]:checked", d).forEach((x) => {
                const I = E().feeHeads.find((S) => S.id === x.dataset.h);
                f.push({
                  headId: I.id,
                  label: I.name,
                  amount: +o.en(r(`[data-ha="${I.id}"]`, d).value) || 0,
                  session: String(i),
                });
              }),
              f
            );
          },
          h = () => {
            var f;
            const y =
              g().reduce((x, I) => x + I.amount, 0) -
              (+((f = r("#fdisc", d)) == null ? void 0 : f.value) || 0);
            r("#ftot", d).textContent = o.tk(Math.max(0, y));
          };
        let b = false;
        const k = async (y) => {
          if (b) return;
          const f = g();
          if (!f.length) return u.toast("অন্তত একটি মাস বা খাত বাছুন", "warn");
          const dup = f.find((x) => {
            const H = E().feeHeads.find((z) => z.id === x.headId);
            return H && H.type === "yearly" && !x.month && paidYearly(s, H.id, i);
          });
          if (dup) return u.toast(`${dup.label} এই শিক্ষাবর্ষে আগেই আদায় হয়েছে`, "warn");
          const x = +r("#fdisc", d).value || 0,
            I = Math.max(0, f.reduce((R, Q) => R + Q.amount, 0) - x);
          b = true;
          let S;
          try {
            S = await $.serial("RCP");
          } catch {
            return ((b = false), u.toast("রসিদ নম্বর নেওয়া যায়নি, ইন্টারনেট সংযোগ দেখুন", "warn"));
          }
          const N = $.upsert("payments", {
            receiptNo: S,
            by: J.uid,
            bn: J.name,
            cls: `${s.classId}|${s.section}`,
            studentId: s.id,
            date: r("#fdate", d).value || G(),
            items: f,
            discount: x,
            total: I,
            method: r("#fmeth", d).value,
            note: r("#fnote", d).value,
          });
          (vt("fee", `ফি আদায়: ${s.nameBn} (${it(s.classId)} ${s.section}) · ${o.tk(I)} · রসিদ ${S}`),
            n(),
            u.success("টাকা আদায় হয়েছে", `রসিদ ${o.bd(N.receiptNo)} · ${s.nameBn}`, o.tk(I)),
            C(),
            y && setTimeout(() => mt("receipt", { paymentId: N.id }), 2200));
        };
        ((r("#cc", d).onchange = () => {
          ((r("#cs", d).innerHTML = ns(r("#cc", d).value)), (s = null), p());
        }),
          (r("#cs", d).onchange = () => {
            ((s = null), p());
          }),
          (r("#cst", d).onchange = () => {
            ((s = $.find("students", r("#cst", d).value)), v());
          }),
          (r("#fSave", d).onclick = () => k(false)),
          (r("#fSavePrint", d).onclick = () => k(true)),
          p());
      },
    });
  }
  const ft = { month: "", type: "" };
  dt.accounts = (t) => {
    var d;
    ((ft.month = (d = ft.month) != null ? d : G().slice(0, 7)),
      ct(
        "আয়-ব্যয়",
        "",
        `<button class="btn btn-ghost" id="accP">${M("print", "ico-16")}<span>প্রতিবেদন</span></button><button class="btn btn-ghost" id="addIn">${M("plus", "ico-16")}<span>আয়</span></button><button class="btn btn-primary" id="addEx">${M("plus", "ico-16")}<span>ব্যয়</span></button>`,
      ),
      (r("#addIn").onclick = () => Ws("income")),
      (r("#addEx").onclick = () => Ws("expense")),
      (r("#accP").onclick = () => mt("ledger", { month: ft.month })));
    const s = As().filter((n) => !ft.month || n.date.startsWith(ft.month)),
      e = s.filter((n) => n.type === "income").reduce((n, p) => n + p.amount, 0),
      a = s.filter((n) => n.type === "expense").reduce((n, p) => n + p.amount, 0),
      i = {};
    s.filter((n) => n.type === "expense").forEach((n) => (i[n.category] = (i[n.category] || 0) + n.amount));
    const c = Math.max(1, ...Object.values(i)),
      l = s.filter((n) => !ft.type || n.type === ft.type);
    ((t.innerHTML = `<div class="toolbar"><input type="month" class="form-control" id="am" value="${ft.month}"><button class="btn btn-quiet" id="amAll">সব সময়</button>
    <div class="seg ms-auto" id="at">${[
      ["", "সব"],
      ["income", "আয়"],
      ["expense", "ব্যয়"],
    ]
      .map((n) => `<button data-v="${n[0]}" class="${n[0] === ft.type ? "on" : ""}">${n[1]}</button>`)
      .join("")}</div></div>
  <div class="row g-3 mb-3 stagger">
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">মোট আয়</div><div class="fig num" data-to="${e}" data-f="tk">০</div><div class="note">${ft.month ? o.ym(ft.month) : "সব সময়"}</div></div></div>
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">মোট ব্যয়</div><div class="fig num" data-to="${a}" data-f="tk">০</div><div class="note">${o.n(s.filter((n) => n.type === "expense").length)}টি খরচ</div></div></div>
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">উদ্বৃত্ত</div><div class="fig num ${e - a < 0 ? "down" : "up"}">${e - a < 0 ? "−" : ""}${o.tk(Math.abs(e - a))}</div><div class="note">আয় বাদ ব্যয়</div></div></div>
  </div>
  <div class="row g-3"><div class="col-xl-8"><div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>তারিখ</th><th>খাত</th><th class="hide-m">বিবরণ</th><th class="r">আয়</th><th class="r">ব্যয়</th><th></th></tr></thead><tbody>
    ${
      l.length
        ? l
            .slice(0, 400)
            .map(
              (
                n,
              ) => `<tr ${n.auto ? "" : `class="click" data-l="${n.id}"`}><td class="sec">${o.dateS(n.date)}</td><td>${m(n.category)}</td><td class="sec small-t hide-m">${m(o.bd(n.note || ""))}${n.auto ? " · ফি আদায় থেকে" : ""}</td>
      <td class="r num">${n.type === "income" ? `<span class="up">${o.tk(n.amount)}</span>` : ""}</td><td class="r num">${n.type === "expense" ? o.tk(n.amount) : ""}</td><td class="r">${n.auto ? "" : M("chevron", "ico-16 muted")}</td></tr>`,
            )
            .join("")
        : `<tr><td colspan="6">${u.empty("এই সময়ে কোনো লেনদেন নেই", "wallet")}</td></tr>`
    }
  </tbody></table></div></div></div>
  <div class="col-xl-4"><div class="card-x"><div class="card-head"><h3>খাতভিত্তিক ব্যয়</h3></div><div class="card-pad">
    ${
      Object.keys(i).length
        ? Object.entries(i)
            .sort((n, p) => p[1] - n[1])
            .map(
              ([n, p]) =>
                `<div class="mb-3"><div class="d-flex small-t mb-1"><span>${m(n)}</span><span class="ms-auto num">${o.tk(p)}</span></div><div class="track"><span class="g" style="width:${(p / c) * 100}%"></span></div></div>`,
            )
            .join("")
        : '<div class="muted small-t">কোনো ব্যয় নেই</div>'
    }
  </div></div></div></div>`),
      T("[data-to]", t).forEach((n) => u.tween(n, +n.dataset.to)),
      (r("#am").onchange = (n) => {
        ((ft.month = n.target.value), C());
      }),
      (r("#amAll").onclick = () => {
        ((ft.month = ""), C());
      }),
      T("#at button").forEach(
        (n) =>
          (n.onclick = () => {
            ((ft.type = n.dataset.v), C());
          }),
      ),
      T("[data-l]", t).forEach((n) => (n.onclick = () => Ws(null, $.find("ledger", n.dataset.l)))));
  };
  function Ws(t, s = null) {
    const e = s ? s.type : t,
      a = e === "income" ? E().incomeCats : E().expenseCats;
    u.modal({
      title: (s ? "সম্পাদনা: " : "নতুন ") + (e === "income" ? "আয়" : "ব্যয়"),
      size: "sm",
      body: `<form class="mb" id="lf"><div class="row g-3">${u.sel("category", "খাত", a, s == null ? void 0 : s.category, "col-12")}
      ${u.inp("amount", "টাকা *", s == null ? void 0 : s.amount, 'type="number" min="1" required', "col-6")}${u.inp("date", "তারিখ", (s == null ? void 0 : s.date) || G(), 'type="date"', "col-6")}
      ${u.inp("note", "বিবরণ", s == null ? void 0 : s.note, "", "col-12")}</div></form>`,
      foot: `${s ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="ld">${M("trash", "ico-16")} মুছুন</button>` : ""}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="ls">সংরক্ষণ</button>`,
      onMount: (i, c) => {
        ((r("#ls", i).onclick = () => {
          const l = r("#lf", i);
          if (!l.reportValidity()) return;
          const d = u.formData(l);
          ((d.amount = +d.amount),
            $.upsert("ledger", { ...(s ? { id: s.id } : { type: e }), ...d }),
            c(),
            u.success(e === "income" ? "আয় যোগ হয়েছে" : "ব্যয় যোগ হয়েছে", d.category, o.tk(d.amount)),
            C());
        }),
          s &&
            (r("#ld", i).onclick = async () => {
              (await u.confirm("এই লেনদেন মুছে যাবে")) &&
                (trashIt("ledger", s.id, `${s.category || ""} · ${o.tk(s.amount)} · ${o.dateS(s.date)}`), c(), C());
            }));
      },
    });
  }
  const Tt = { m: "" };
  dt.payroll = (t) => {
    ((Tt.m = Tt.m || G().slice(0, 7)),
      ct(
        "বেতন",
        "",
        `<button class="btn btn-ghost" id="slp">${M("print", "ico-16")}<span>বেতন শিট</span></button>`,
      ),
      (r("#slp").onclick = () => mt("salarysheet", { month: Tt.m })));
    const s = $.all("teachers").filter((n) => n.status !== "left"),
      e = (_().salaries[Tt.m] = _().salaries[Tt.m] || {}),
      a = s.reduce((n, p) => n + (+p.salary || 0), 0),
      i = s.filter((n) => {
        var p;
        return (p = e[n.id]) == null ? void 0 : p.paid;
      }),
      c = i.reduce((n, p) => n + (e[p.id].amount || 0), 0);
    t.innerHTML = `<div class="toolbar"><input type="month" class="form-control" id="pm" value="${Tt.m}"><span class="sec small-t">${o.ym(Tt.m)}</span>
    <button class="btn btn-primary ms-auto" id="payAll">${M("check", "ico-16")} বাকি সবার বেতন দিন</button></div>
  <div class="row g-3 mb-3 stagger">
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">মোট বেতন</div><div class="fig num">${o.tk(a)}</div><div class="note">${o.n(s.length)} জন</div></div></div>
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">পরিশোধিত</div><div class="fig num up">${o.tk(c)}</div><div class="note">${o.n(i.length)} জন</div></div></div>
    <div class="col-md-4"><div class="card-x card-pad stat"><div class="label">বাকি</div><div class="fig num ${a - c > 0 ? "down" : ""}">${o.tk(Math.max(0, a - c))}</div><div class="note">${o.n(s.length - i.length)} জন</div></div></div>
  </div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>নাম ও পদবি</th><th class="r">মাসিক বেতন</th><th class="hide-m">পরিশোধের তারিখ</th><th class="r">অবস্থা</th></tr></thead><tbody>
  ${
    s
      .map((n) => {
        const p = e[n.id];
        return `<tr><td><div class="d-flex align-items-center gap-2">${u.avatar(n.name, n.photo, "sm")}<div><div>${m(n.name)}</div><div class="muted" style="font-size:12.5px">${m(n.designation)}</div></div></div></td>
    <td class="r num">${o.tk(n.salary || 0)}</td><td class="sec hide-m">${p != null && p.paid ? o.date(p.date) : "—"}</td>
    <td class="r">${p != null && p.paid ? `<button class="btn btn-ghost btn-sm" data-un="${n.id}"><span class="up">${M("check", "ico-16")}</span> পরিশোধিত</button>` : `<button class="btn btn-primary btn-sm" data-pay="${n.id}">বেতন দিন</button>`}</td></tr>`;
      })
      .join("") || `<tr><td colspan="4">${u.empty("কোনো শিক্ষক বা কর্মচারী নেই", "teachers")}</td></tr>`
  }
  </tbody></table></div></div>
  <div class="hint mt-2">বেতন দিলে আয়-ব্যয় খাতায় "শিক্ষক-কর্মচারী বেতন" হিসেবে ব্যয় যোগ হয়। বেতনের পরিমাণ শিক্ষকের প্রোফাইল থেকে বদলানো যায়</div>`;
    const l = () => {
        const n = Object.values(e)
            .filter((g) => g.paid)
            .reduce((g, h) => g + h.amount, 0),
          p = "salary:" + Tt.m,
          v = $.all("ledger").find((g) => g.ref === p);
        n
          ? $.upsert("ledger", {
              ...(v ? { id: v.id } : {}),
              type: "expense",
              category: E().expenseCats[0] || "বেতন",
              amount: n,
              date: (v == null ? void 0 : v.date) || G(),
              note: o.ym(Tt.m) + " মাসের বেতন",
              ref: p,
            })
          : v && $.remove("ledger", v.id);
      },
      d = (n) => {
        const p = $.find("teachers", n);
        e[n] = { paid: true, date: G(), amount: +p.salary || 0 };
      };
    ((r("#pm").onchange = (n) => {
      ((Tt.m = n.target.value || G().slice(0, 7)), C());
    }),
      T("[data-pay]", t).forEach(
        (n) =>
          (n.onclick = () => {
            (d(n.dataset.pay), l(), $.save());
            const p = $.find("teachers", n.dataset.pay);
            (u.success("বেতন দেওয়া হয়েছে", p.name, o.tk(p.salary || 0)), C());
          }),
      ),
      T("[data-un]", t).forEach(
        (n) =>
          (n.onclick = async () => {
            (await u.confirm("এই মাসের বেতন অপরিশোধিত হিসেবে চিহ্নিত হবে", "হ্যাঁ, বাতিল করুন")) &&
              (delete e[n.dataset.un], l(), $.save(), C());
          }),
      ),
      (r("#payAll").onclick = async () => {
        const n = s.filter((p) => {
          var v;
          return !((v = e[p.id]) != null && v.paid);
        });
        if (!n.length) return u.toast("সবার বেতন দেওয়া হয়ে গেছে");
        (await u.confirm(
          `${o.n(n.length)} জনকে মোট ${o.tk(n.reduce((p, v) => p + (+v.salary || 0), 0))} বেতন দেওয়া হবে`,
          "বেতন দিন",
          false,
        )) &&
          (n.forEach((p) => d(p.id)),
          l(),
          $.save(),
          u.success(
            "সবার বেতন দেওয়া হয়েছে",
            `${o.n(n.length)} জন`,
            o.tk(n.reduce((p, v) => p + (+v.salary || 0), 0)),
          ),
          C());
      }));
  };
  const St = { kind: "", cal: "" };
  dt.notices = (t) => {
    ((St.cal = St.cal || G().slice(0, 7)),
      ct(
        "নোটিশ ও ইভেন্ট",
        "",
        O()
          ? `<button class="btn btn-primary" id="addN">${M("plus", "ico-16")}<span>নতুন নোটিশ</span></button>`
          : "",
      ),
      r("#addN") && (r("#addN").onclick = () => Us()));
    const s = [...$.all("notices")]
        .filter((n) => !St.kind || n.kind === St.kind)
        .sort((n, p) => p.pinned - n.pinned || (n.date < p.date ? 1 : -1)),
      [e, a] = St.cal.split("-").map(Number),
      i = new Date(e, a, 0).getDate(),
      c = new Date(e, a - 1, 1).getDay(),
      l = {};
    $.all("notices").forEach((n) => {
      const p = n.eventDate || "";
      p.startsWith(St.cal) && (l[+p.slice(8)] = l[+p.slice(8)] || []).push(n);
    });
    const d = (c - 6 + 7) % 7;
    ((t.innerHTML = `<div class="row g-3"><div class="col-xl-8">
    <div class="toolbar"><div class="seg" id="nk">${[
      ["", "সব"],
      ["নোটিশ", "নোটিশ"],
      ["ইভেন্ট", "ইভেন্ট"],
      ["ছুটি", "ছুটি"],
    ]
      .map((n) => `<button data-v="${n[0]}" class="${n[0] === St.kind ? "on" : ""}">${n[1]}</button>`)
      .join("")}</div></div>
    <div class="d-flex flex-column gap-3 stagger">${
      s.length
        ? s
            .map(
              (n) => `<div class="card-x card-pad" style="cursor:pointer" data-n="${n.id}">
      <div class="d-flex align-items-start gap-3"><div class="date-chip"><b class="num">${o.bd(+n.date.slice(8))}</b><span>${o.monS(n.date.slice(0, 7))}</span></div>
      <div class="flex-grow-1" style="min-width:0"><div class="d-flex align-items-center gap-2 flex-wrap"><h3 style="font-size:16.5px">${m(n.title)}</h3><span class="tag ${n.kind === "ছুটি" ? "gold" : n.kind === "ইভেন্ট" ? "b" : ""}">${m(n.kind)}</span>${n.pinned ? `<span class="tag gold">${M("pin", "ico-16")} উপরে রাখা</span>` : ""}</div>
      <p class="sec mb-0 mt-1" style="white-space:pre-line">${m(n.body)}</p>${n.eventDate ? `<div class="small-t mt-2" style="color:var(--primary)">${M("calendar", "ico-16")} ${o.day(n.eventDate)}, ${o.date(n.eventDate)}</div>` : ""}</div>
      ${O() ? `<button class="btn btn-ghost btn-sm" data-print="${n.id}">${M("print", "ico-16")}<span class="hide-m">প্রিন্ট</span></button>` : ""}</div></div>`,
            )
            .join("")
        : `<div class="card-x">${u.empty("কোনো নোটিশ নেই", "notice")}</div>`
    }</div></div>
  <div class="col-xl-4"><div class="card-x" style="position:sticky;top:84px"><div class="card-head"><button class="btn btn-quiet btn-icon btn-sm" id="cp" aria-label="আগের মাস" style="transform:scaleX(-1)">${M("chevron", "ico-16")}</button><h3 class="flex-grow-1 text-center">${o.month(e, a - 1)}</h3><button class="btn btn-quiet btn-icon btn-sm" id="cn" aria-label="পরের মাস">${M("chevron", "ico-16")}</button></div>
    <div class="card-pad"><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center">
      ${bs.map((n) => `<div class="muted" style="font-size:12px;padding-bottom:4px">${ee[n]}</div>`).join("")}
      ${"<div></div>".repeat(d)}${[...Array(i)]
        .map((n, p) => {
          const v = `${St.cal}-${String(p + 1).padStart(2, "0")}`,
            g = l[p + 1],
            h = wt(v),
            b = v === G();
          return `<div ${g ? `data-tip="${m(g.map((k) => k.title).join(", "))}"` : ""} style="aspect-ratio:1;border-radius:9px;display:grid;place-items:center;font-size:13.5px;position:relative;${b ? "background:var(--primary);color:#fff;" : g ? "background:var(--gold-soft);color:var(--gold-ink);font-weight:500;" : h ? "color:var(--muted);" : ""}">${o.n(p + 1)}</div>`;
        })
        .join("")}
    </div><div class="d-flex gap-3 mt-3 small-t muted"><span class="legend"><i style="background:var(--gold-soft);border:1px solid var(--gold)"></i> ইভেন্ট/ছুটি</span><span class="legend"><i style="background:var(--primary)"></i> আজ</span></div></div></div></div></div>`),
      u.bindTips(t),
      T("#nk button").forEach(
        (n) =>
          (n.onclick = () => {
            ((St.kind = n.dataset.v), C());
          }),
      ),
      (r("#cp").onclick = () => {
        const n = new Date(e, a - 2, 1);
        ((St.cal = o.iso(n).slice(0, 7)), C());
      }),
      (r("#cn").onclick = () => {
        const n = new Date(e, a, 1);
        ((St.cal = o.iso(n).slice(0, 7)), C());
      }),
      O() &&
        T("[data-n]", t).forEach(
          (n) =>
            (n.onclick = (p) => {
              if (p.target.closest("[data-print]")) return mt("notice", { noticeId: n.dataset.n });
              Us($.find("notices", n.dataset.n));
            }),
        ));
  };
  function Us(t = null) {
    const s = t || { kind: "নোটিশ", date: G(), pinned: false };
    u.modal({
      title: t ? "নোটিশ সম্পাদনা" : "নতুন নোটিশ",
      body: `<form class="mb" id="nf"><div class="row g-3">${u.sel("kind", "ধরন", ["নোটিশ", "ইভেন্ট", "ছুটি"], s.kind, "col-md-4")}${u.inp("title", "শিরোনাম *", s.title, "required", "col-md-8")}
      <div class="col-12"><label class="form-label">বিস্তারিত</label><textarea class="form-control" name="body" rows="5">${m(s.body || "")}</textarea></div>
      ${u.inp("date", "প্রকাশের তারিখ", s.date, 'type="date"', "col-md-4")}${u.inp("eventDate", "অনুষ্ঠান/ছুটির তারিখ (থাকলে)", s.eventDate, 'type="date"', "col-md-4")}${u.inp("memo", "স্মারক নং", s.memo, "", "col-md-4")}
      <div class="col-12"><label class="switch"><input type="checkbox" name="pinned" ${s.pinned ? "checked" : ""}> তালিকার উপরে রাখুন</label></div></div></form>`,
      foot: `${t ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="nd">${M("trash", "ico-16")} মুছুন</button><button class="btn btn-ghost" id="np">${M("print", "ico-16")} প্রিন্ট</button>` : ""}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="ns">প্রকাশ করুন</button>`,
      onMount: (e, a) => {
        ((r("#ns", e).onclick = () => {
          const i = r("#nf", e);
          if (!i.reportValidity()) return;
          const c = u.formData(i);
          ($.upsert("notices", { ...(t ? { id: t.id } : {}), ...c }),
            a(),
            u.success("নোটিশ প্রকাশিত", c.title),
            C());
        }),
          t &&
            ((r("#nd", e).onclick = async () => {
              (await u.confirm("নোটিশটি মুছে যাবে")) && (trashIt("notices", t.id, t.title), a(), C());
            }),
            (r("#np", e).onclick = () => {
              (a(), setTimeout(() => mt("notice", { noticeId: t.id }), 160));
            })));
      },
    });
  }
  let ls = "books";
  const Js = { q: "" },
    $e = (t) => $.all("loans").filter((s) => s.bookId === t && !s.returnDate).length;
  dt.library = (t) => {
    (ct(
      "লাইব্রেরি",
      "",
      `<button class="btn btn-ghost" id="addB">${M("plus", "ico-16")}<span>নতুন বই</span></button><button class="btn btn-primary" id="issue">${M("library", "ico-16")}<span>বই ধার দিন</span></button>`,
    ),
      (r("#addB").onclick = () => ye()),
      (r("#issue").onclick = () => na()));
    const s = $.all("books"),
      e = $.all("loans"),
      a = e.filter((l) => !l.returnDate),
      i = a.filter((l) => l.dueDate < G());
    ((t.innerHTML = `<div class="row g-3 mb-3 stagger">
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">মোট বই</div><div class="fig num">${o.n(s.reduce((l, d) => l + (+d.copies || 0), 0))}</div><div class="note">${o.n(s.length)}টি শিরোনাম</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">ধারে আছে</div><div class="fig num">${o.n(a.length)}</div><div class="note">শিক্ষার্থীদের কাছে</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">ফেরতের সময় পার</div><div class="fig num ${i.length ? "down" : ""}">${o.n(i.length)}</div><div class="note">মনে করিয়ে দিন</div></div></div>
    <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">এ মাসে ধার</div><div class="fig num">${o.n(e.filter((l) => l.issueDate.startsWith(G().slice(0, 7))).length)}</div><div class="note">বার</div></div></div></div>
  <div class="tabs"><button data-t="books" class="${ls === "books" ? "on" : ""}">বইয়ের তালিকা</button><button data-t="loans" class="${ls === "loans" ? "on" : ""}">ধার ও ফেরত</button></div>
  <div class="toolbar"><div class="input-ico grow">${M("search")}<input class="form-control" id="lq" placeholder="${ls === "books" ? "বইয়ের নাম, লেখক বা কোড" : "শিক্ষার্থী বা বইয়ের নাম"}" value="${m(Js.q)}"></div></div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl" id="ltb"></table></div></div>`),
      T(".tabs button", t).forEach(
        (l) =>
          (l.onclick = () => {
            ((ls = l.dataset.t), C());
          }),
      ));
    const c = () => {
      const l = o.en(Js.q).toLowerCase();
      if (ls === "books") {
        const d = s.filter(
          (n) =>
            !l ||
            [n.title, n.author, n.code].some((p) =>
              String(p || "")
                .toLowerCase()
                .includes(l),
            ),
        );
        ((r("#ltb").innerHTML =
          `<thead><tr><th>কোড</th><th>বইয়ের নাম</th><th class="hide-m">লেখক</th><th class="hide-m">অবস্থান</th><th class="r">কপি</th><th class="r">পাওয়া যাবে</th></tr></thead><tbody>${
            d.length
              ? d
                  .map((n) => {
                    const p = (+n.copies || 0) - $e(n.id);
                    return `<tr class="click" data-b="${n.id}"><td class="num sec">${m(o.bd(n.code || ""))}</td><td>${m(n.title)}</td><td class="sec hide-m">${m(n.author || "")}</td><td class="sec hide-m">${m(n.shelf || "")}</td><td class="r num">${o.n(n.copies)}</td><td class="r"><span class="tag ${p > 0 ? "g" : "r"}">${o.n(p)}</span></td></tr>`;
                  })
                  .join("")
              : `<tr><td colspan="6">${u.empty("কোনো বই নেই", "library")}</td></tr>`
          }</tbody>`),
          T("[data-b]").forEach((n) => (n.onclick = () => ye($.find("books", n.dataset.b)))));
      } else {
        const d = [...e]
          .sort((n, p) => !!n.returnDate - !!p.returnDate || (n.issueDate < p.issueDate ? 1 : -1))
          .filter((n) => {
            const p = $.find("students", n.studentId) || {},
              v = $.find("books", n.bookId) || {};
            return (
              !l ||
              [p.nameBn, v.title, String(p.roll)].some((g) =>
                String(g || "")
                  .toLowerCase()
                  .includes(l),
              )
            );
          });
        ((r("#ltb").innerHTML =
          `<thead><tr><th>বই</th><th>শিক্ষার্থী</th><th class="hide-m">ধার</th><th>ফেরতের তারিখ</th><th class="r"></th></tr></thead><tbody>${
            d.length
              ? d
                  .map((n) => {
                    const p = $.find("students", n.studentId),
                      v = $.find("books", n.bookId),
                      g = !n.returnDate && n.dueDate < G();
                    return `<tr><td>${m((v == null ? void 0 : v.title) || "মুছে ফেলা বই")}</td><td>${p ? `${m(p.nameBn)} <span class="muted small-t">${m(it(p.classId))} ${m(p.section)}</span>` : "—"}</td><td class="sec hide-m">${o.dateS(n.issueDate)}</td>
        <td>${n.returnDate ? `<span class="muted">ফেরত ${o.dateS(n.returnDate)}</span>` : `<span class="${g ? "down" : ""}">${o.dateS(n.dueDate)}${g ? " · সময় পার" : ""}</span>`}</td>
        <td class="r">${n.returnDate ? '<span class="tag g">ফেরত</span>' : `<button class="btn btn-ghost btn-sm" data-ret="${n.id}">ফেরত নিন</button>`}</td></tr>`;
                  })
                  .join("")
              : `<tr><td colspan="5">${u.empty("কোনো ধার নেই", "library")}</td></tr>`
          }</tbody>`),
          T("[data-ret]").forEach(
            (n) =>
              (n.onclick = () => {
                ($.upsert("loans", { id: n.dataset.ret, returnDate: G() }),
                  u.toast("বই ফেরত নেওয়া হয়েছে"),
                  C());
              }),
          ));
      }
    };
    ((r("#lq").oninput = (l) => {
      ((Js.q = l.target.value), c());
    }),
      c());
  };
  function ye(t = null) {
    var s;
    u.modal({
      title: t ? "বইয়ের তথ্য" : "নতুন বই",
      size: "sm",
      body: `<form class="mb" id="bf"><div class="row g-3">${u.inp("title", "বইয়ের নাম *", t == null ? void 0 : t.title, "required", "col-12")}${u.inp("author", "লেখক", t == null ? void 0 : t.author, "", "col-12")}
      ${u.inp("code", "কোড", t == null ? void 0 : t.code, "", "col-4")}${u.inp("copies", "কপি", (s = t == null ? void 0 : t.copies) != null ? s : 1, 'type="number" min="0"', "col-4")}${u.inp("shelf", "অবস্থান", t == null ? void 0 : t.shelf, "", "col-4")}</div></form>`,
      foot: `${t ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="bd">${M("trash", "ico-16")} মুছুন</button>` : ""}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="bs">সংরক্ষণ</button>`,
      onMount: (e, a) => {
        ((r("#bs", e).onclick = () => {
          const i = r("#bf", e);
          if (!i.reportValidity()) return;
          const c = u.formData(i);
          ((c.copies = +c.copies || 0), $.upsert("books", { ...(t ? { id: t.id } : {}), ...c }), a(), C());
        }),
          t &&
            (r("#bd", e).onclick = async () => {
              (await u.confirm("বইটি তালিকা থেকে মুছে যাবে")) && (trashIt("books", t.id, t.title), a(), C());
            }));
      },
    });
  }
  function na() {
    const t = /* @__PURE__ */ new Date();
    t.setDate(t.getDate() + 14);
    const s = $.all("books").filter((a) => (+a.copies || 0) - $e(a.id) > 0),
      e = tt()[0];
    u.modal({
      title: "বই ধার দিন",
      size: "sm",
      body: `<form class="mb" id="if"><div class="row g-3"><div class="col-12"><label class="form-label">বই</label><select class="form-select" name="bookId">${s.map((a) => `<option value="${a.id}">${m(a.title)}</option>`).join("")}</select></div>
      <div class="col-6"><label class="form-label">শ্রেণি</label><select class="form-select" id="ic">${qt(e == null ? void 0 : e.id)}</select></div><div class="col-6"><label class="form-label">শাখা</label><select class="form-select" id="is">${Dt(e == null ? void 0 : e.id)}</select></div>
      <div class="col-12"><label class="form-label">শিক্ষার্থী</label><select class="form-select" name="studentId" id="ist"></select></div>
      ${u.inp("issueDate", "ধারের তারিখ", G(), 'type="date"', "col-6")}${u.inp("dueDate", "ফেরতের তারিখ", o.iso(t), 'type="date"', "col-6")}</div></form>`,
      foot: '<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="iss">ধার দিন</button>',
      onMount: (a, i) => {
        const c = () => {
          r("#ist", a).innerHTML = Et(
            ht().filter((l) => l.classId === r("#ic", a).value && l.section === r("#is", a).value),
          )
            .map((l) => `<option value="${l.id}">${o.n(l.roll)}. ${m(l.nameBn)}</option>`)
            .join("");
        };
        ((r("#ic", a).onchange = () => {
          ((r("#is", a).innerHTML = Dt(r("#ic", a).value)), c());
        }),
          (r("#is", a).onchange = c),
          c(),
          (r("#iss", a).onclick = () => {
            const l = u.formData(r("#if", a));
            if (!l.bookId || !l.studentId) return u.toast("বই ও শিক্ষার্থী বাছুন", "warn");
            ($.upsert("loans", { ...l, returnDate: "" }),
              i(),
              u.success("বই ধার দেওয়া হয়েছে", ($.find("books", l.bookId) || {}).title),
              (ls = "loans"),
              C());
          }));
      },
    });
  }
  const xe = 96 / 25.4,
    we = ["admit", "transcript", "idcard", "receipt", "routine", "examroutine", "attsheet"],
    Pt = {
      admit: {
        title: "প্রবেশপত্র",
        desc: "A4-এর অর্ধেক, ল্যান্ডস্কেপ · এক পাতায় দুটি",
        unit: "A5",
        orient: "l",
        lock: true,
        pfx: "ADM",
        icon: "id",
      },
      testimonial: {
        title: "প্রশংসাপত্র",
        desc: "A4 পোর্ট্রেট · এসএসসি ফলাফলসহ",
        unit: "A4",
        orient: "p",
        pfx: "TST",
        icon: "award",
      },
      transcript: {
        title: "একাডেমিক ট্রান্সক্রিপ্ট",
        desc: "বিষয়ভিত্তিক নম্বর, জিপিএ, মেধাক্রম",
        unit: "A4",
        orient: "p",
        pfx: "TRN",
        icon: "exam",
      },
      tabulation: {
        title: "ফলাফল শিট",
        desc: "পুরো শ্রেণির টেবুলেশন শিট",
        unit: "A4",
        orient: "l",
        pfx: "TAB",
        icon: "register",
      },
      tc: {
        title: "ছাড়পত্র (TC)",
        desc: "বদলি সনদ, A4 পোর্ট্রেট",
        unit: "A4",
        orient: "p",
        pfx: "TC",
        icon: "docs",
      },
      idcard: {
        title: "শিক্ষার্থী আইডি কার্ড",
        desc: "CR80 মাপ · এক পাতায় ৯টি",
        unit: "card",
        orient: "p",
        lock: true,
        pfx: "SID",
        icon: "id",
      },
      staffid: {
        title: "শিক্ষক-কর্মচারী আইডি কার্ড",
        desc: "CR80 মাপ · এক পাতায় ৯টি",
        unit: "card",
        orient: "p",
        lock: true,
        pfx: "TID",
        icon: "id",
      },
      receipt: {
        title: "ফি রসিদ",
        desc: "অফিস ও শিক্ষার্থী কপি এক পাতায়",
        unit: "A5",
        orient: "l",
        pfx: "RCP",
        icon: "receipt",
      },
      routine: {
        title: "ক্লাস রুটিন",
        desc: "শ্রেণি বা শিক্ষকের সাপ্তাহিক রুটিন",
        unit: "A4",
        orient: "l",
        pfx: "RTN",
        icon: "routine",
      },
      attsheet: {
        title: "মাসিক হাজিরা খাতা",
        desc: "শাখাভিত্তিক মাসের হাজিরা",
        unit: "A4",
        orient: "l",
        pfx: "ATT",
        icon: "attendance",
      },
      notice: {
        title: "নোটিশ",
        desc: "প্যাডে ছাপা বিজ্ঞপ্তি",
        unit: "A4",
        orient: "p",
        pfx: "NTC",
        icon: "notice",
      },
      salarysheet: {
        title: "বেতন শিট",
        desc: "মাসিক বেতন ও স্বাক্ষরের ঘর",
        unit: "A4",
        orient: "p",
        pfx: "SAL",
        icon: "salary",
      },
      ledger: {
        title: "আয়-ব্যয় প্রতিবেদন",
        desc: "মাসের খাতভিত্তিক হিসাব",
        unit: "A4",
        orient: "p",
        pfx: "ACC",
        icon: "wallet",
      },
      examroutine: {
        title: "পরীক্ষার রুটিন",
        desc: "সব শ্রেণির পরীক্ষার তারিখ এক পাতায়",
        unit: "A4",
        orient: "l",
        pfx: "EXR",
        icon: "calendar",
      },
    },
    It = {
      pending: [],
      fixed: {},
      serial(t, s, e) {
        const a = $.all("documents").find((p) => p.type === t && p.key === s);
        if (a) return a.serial;
        const i = t + "|" + s,
          c = Pt[t].pfx,
          l = /* @__PURE__ */ new Date().getFullYear(),
          d = this.pending.find((p) => p.type === t && p.key === s);
        if (d) return d.serial;
        let n = this.fixed[i];
        if (!n) {
          const p =
            (E().serials[c + l] || 0) + this.pending.filter((v) => v.pfx === c && !v.final).length + 1;
          n = `${c}-${l}-${String(p).padStart(4, "0")}`;
        }
        return (this.pending.push({ type: t, key: s, pfx: c, serial: n, final: !!this.fixed[i], ...e }), n);
      },
      async finalize() {
        const t = /* @__PURE__ */ new Date().getFullYear(),
          s = {};
        this.pending.filter((e) => !e.final).forEach((e) => (s[e.pfx] = s[e.pfx] || []).push(e));
        for (const [e, a] of Object.entries(s)) {
          const i = await $.allocSerials(e, a.length);
          a.forEach((c, l) => {
            this.fixed[c.type + "|" + c.key] = `${e}-${t}-${String(i + l).padStart(4, "0")}`;
          });
        }
      },
      commit() {
        (this.pending.forEach((t) => {
          $.all("documents").some((s) => s.serial === t.serial) ||
            $.upsert("documents", {
              type: t.type,
              key: t.key,
              serial: t.serial,
              name: t.name || "",
              sid: t.sid || "",
              issuedAt: G(),
              info: t.info || "",
              by: J.uid,
              bn: J.name,
            });
        }),
          this.pending.length &&
            vt("doc", `${Pt[this.pending[0].type].title} ইস্যু · ${o.n(this.pending.length)}টি`),
          (this.pending = []),
          (this.fixed = {}));
      },
    };
  function ke() {
    return location.origin + location.pathname.replace(/[^/]*$/, "");
  }
  function Zs(t) {
    return ke() + "verify.html#" + ($.mode === "demo" ? "demo:" : "") + encodeURIComponent(t.serial);
  }
  function Qs(t) {
    try {
      const s = qrcode(0, "M");
      return (s.addData(t), s.make(), s.createDataURL(4, 0));
    } catch {
      return "";
    }
  }
  const cs = (t, s = 19, e = "যাচাই করতে স্ক্যান করুন") =>
    w.qr
      ? `<div class="qrbox"><div class="q" style="width:${s}mm;height:${s}mm"><img src="${Qs(Zs(t))}" alt=""></div>${e ? `<small>${e}</small>` : ""}</div>`
      : "";
  function je(t) {
    const s = E().school;
    return s.logo
      ? `<img src="${s.logo}" alt="">`
      : `<div class="ph" style="font-size:${t}pt">${m(o.initials(s.name))}</div>`;
  }
  function vs(t, s) {
    const e = E().school;
    return `<div class="dh"><div class="lg" style="${s ? "width:13mm;height:13mm" : ""}">${je(s ? 12 : 16)}</div>
    <div class="ttl"><div class="nm" style="${s ? "font-size:14pt" : ""}">${m(e.name)}</div>${e.nameEn ? `<div class="en">${m(e.nameEn)}</div>` : ""}
    <div class="ad">${m(e.address || "")}${e.eiin ? ` · EIIN: ${m(o.bd(e.eiin))}` : ""}${e.code && !s ? ` · কোড: ${m(o.bd(e.code))}` : ""}</div></div>
    ${t ? `<div class="qr">${t}</div>` : `<div class="spacer" style="${s ? "width:13mm" : ""}"></div>`}</div>`;
  }
  function os(t, s = {}) {
    const e = E().school,
      a = s.head && w.sigImg;
    return `<div class="sign"><div class="img">${a && e.headSign ? `<img class="sg" src="${e.headSign}" alt="">` : ""}${a && e.seal ? `<img class="seal" src="${e.seal}" alt="">` : ""}</div>
    <div class="ln">${m(t)}</div>${s.head && e.headName ? `<div class="sub">${m(e.headName)}</div>` : s.sub ? `<div class="sub">${m(s.sub)}</div>` : ""}</div>`;
  }
  const rs = () => os(E().docs.signLabel, { head: true }),
    Ks = (t, s = 2) =>
      `<div class="igrid" style="grid-template-columns:repeat(${s},minmax(0,1fr))">${t
        .filter(Boolean)
        .map(
          ([e, a]) =>
            `<div class="ir"><span class="k">${m(e)}</span><span class="c">:</span><span class="v">${m(o.bd(a != null ? a : ""))}</span></div>`,
        )
        .join("")}</div>`,
    ia = (t) => `<div class="photo">${t.photo ? `<img src="${t.photo}" alt="">` : "ছবি"}</div>`,
    da = () => {
      const t =
        '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 38V8a6 6 0 0 1 6-6h30"/><path d="M7 38V13a6 6 0 0 1 6-6h25"/><circle cx="7" cy="7" r="2.4" fill="currentColor"/><path d="M14 14c6 0 10 4 10 10"/></svg>';
      return [
        ["top:9mm;left:9mm", ""],
        ["top:9mm;right:9mm", "transform:scaleX(-1)"],
        ["bottom:9mm;left:9mm", "transform:scaleY(-1)"],
        ["bottom:9mm;right:9mm", "transform:scale(-1,-1)"],
      ]
        .map(([s, e]) => `<div class="corner" style="${s};${e}">${t}</div>`)
        .join("");
    };
  function la(t, s) {
    return t
      .split(
        `
`,
      )
      .map(
        (e) =>
          `<p style="margin:0 0 3mm">${m(e).replace(/\{([^}]+)\}/g, (a, i) => {
            const c = s[i.trim()];
            return c ? `<b>${m(o.bd(c))}</b>` : "<b>................</b>";
          })}</p>`,
      )
      .join("");
  }
  function ca(t, s = {}) {
    return {
      নাম: t.nameBn,
      পিতা: t.father,
      মাতা: t.mother,
      ঠিকানা: t.address,
      শ্রেণি: gt(t.classId),
      শাখা: t.section,
      রোল: t.roll,
      আইডি: t.studentId,
      বিভাগ: t.group,
      জন্ম_তারিখ: t.dob ? o.date(t.dob) : "",
      পরীক্ষার_সন: t.sscYear || s.year,
      বোর্ড: t.sscBoard || s.board,
      জিপিএ: t.sscGpa,
      বোর্ড_রোল: t.sscRoll,
      রেজি_নং: t.sscReg,
      কারণ: s.reason,
      ...s.more,
    };
  }
  const Ft = {
    admit(t, s) {
      const e = It.serial("admit", `${s.id}|${t.id}`, { name: t.nameBn, sid: t.studentId, info: s.name }),
        a = cs(
          {
            type: "admit",
            serial: e,
            name: t.nameBn,
            sid: t.studentId,
            info: `${s.name} · ${it(t.classId)} ${t.section} · রোল ${t.roll}`,
          },
          17,
          "",
        ),
        i = et(t.classId);
      return `<div class="doc admit" style="padding:7.5mm 10mm 6.5mm"><div class="frame" style="inset:4mm"></div><div class="inner">
      ${vs(a, true)}<div class="rule" style="margin-top:2mm"></div><div class="rule2" style="margin-bottom:2.5mm"></div>
      <div style="display:flex;align-items:center;justify-content:center;gap:4mm;margin-bottom:3mm"><span class="title-pill" style="font-size:12pt">প্রবেশপত্র</span><span class="exam">${m(s.name)} ${m(o.bd(s.session))}</span></div>
      <div style="display:flex;gap:6mm;align-items:flex-start">
        <div style="flex:1;min-width:0">${Ks([["নাম", t.nameBn], ["শিক্ষার্থী আইডি", t.studentId], ["পিতার নাম", t.father], ["মাতার নাম", t.mother], ["শ্রেণি", gt(t.classId)], ["শাখা", t.section], ["রোল নং", t.roll], i && i.hasGroups ? ["বিভাগ", t.group] : ["শিক্ষাবর্ষ", s.session], ...(t.sscReg ? [["রেজি. নং", t.sscReg]] : [])], 2)}</div>
        ${ia(t)}</div>
      <div style="margin-top:3mm"><div style="font-size:8.5pt;font-weight:600;color:var(--ink)">পরীক্ষার্থীর জন্য নির্দেশনা${s.startDate ? ` · পরীক্ষা শুরু ${o.date(s.startDate)}` : ""}</div>
        <ol class="rules">${E()
          .docs.admitRules.split(
            `
`,
          )
          .filter(Boolean)
          .map((c) => `<li>${m(c)}</li>`)
          .join("")}</ol></div>
      <div class="signs" style="padding-top:2mm">${os(E().docs.classTeacherLabel)}<div class="serial" style="align-self:flex-end">ক্রমিক: ${m(e)}</div>${rs()}</div>
    </div></div>`;
    },
    cert(t, s, e) {
      const a = t === "testimonial",
        i = E().school,
        c = It.serial(t, s.id, { name: s.nameBn, sid: s.studentId }),
        l = cs(
          {
            type: t,
            serial: c,
            name: s.nameBn,
            sid: s.studentId,
            date: e.date,
            info: `${it(s.classId)} · ${s.father || ""}`,
          },
          22,
        ),
        d = la(
          a ? E().docs.testimonialText : E().docs.tcText,
          ca(s, { year: e.year, board: e.board, reason: e.reason }),
        );
      return `<div class="doc cert" style="padding:17mm 22mm 21mm"><div class="frame" style="inset:7mm;border-width:.8mm"></div>${da()}
      ${i.logo ? `<div class="watermark"><img src="${i.logo}" alt=""></div>` : ""}
      <div class="inner">
        <div style="text-align:center"><div class="dh" style="justify-content:center"><div class="lg" style="width:22mm;height:22mm">${je(20)}</div></div>
          <div class="dh"><div class="ttl"><div class="nm" style="font-size:22pt;margin-top:2mm">${m(i.name)}</div>${i.nameEn ? `<div class="en" style="font-size:10pt">${m(i.nameEn)}</div>` : ""}
          <div class="ad">${m(i.address || "")}</div><div class="ad">${[i.eiin && "EIIN: " + o.bd(i.eiin), i.established && "স্থাপিত: " + o.bd(i.established), i.phone && "ফোন: " + o.bd(i.phone)].filter(Boolean).join(" · ")}</div></div></div></div>
        <div class="rule"></div><div class="rule2"></div>
        <div class="meta-row"><span>ক্রমিক নং: <b>${m(c)}</b></span><span>তারিখ: <b>${o.dateN(e.date)}</b></span></div>
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding-bottom:${w.orient === "l" ? 4 : 16}mm">
        <div class="title-u">${a ? "প্রশংসাপত্র" : "ছাড়পত্র"}</div>${a ? "" : '<div style="text-align:center;font-size:9pt;color:#4a5263">Transfer Certificate</div>'}
        <div class="body" style="margin-top:${w.orient === "l" ? 5 : 10}mm">${d}</div></div>
        <div class="signs" style="align-items:flex-end">${l || "<div></div>"}${rs()}</div>
      </div></div>`;
    },
    transcript(t, s, e) {
      const a = Os(s.id, t),
        i = e[t.id] || {},
        c = et(t.classId),
        l = It.serial("transcript", `${s.id}|${t.id}`, { name: t.nameBn, sid: t.studentId, info: s.name }),
        d = cs({
          type: "transcript",
          serial: l,
          name: t.nameBn,
          sid: t.studentId,
          info: `${s.name} · জিপিএ ${a.gpa.toFixed(2)} · ${a.grade}`,
        }),
        n = w.orient === "l",
        p = `<table class="mt"><thead><tr><th>ক্রম</th><th>কোড</th><th style="text-align:left">বিষয়</th><th>পূর্ণমান</th><th>প্রাপ্ত নম্বর</th><th>লেটার গ্রেড</th><th>গ্রেড পয়েন্ট</th></tr></thead><tbody>
      ${a.rows.map((h, b) => `<tr><td>${o.n(b + 1)}</td><td>${o.bd(h.s.code)}</td><td class="l">${m(h.s.name)}</td><td>${o.n(h.s.fullMarks)}</td><td class="${h.fail ? "F" : ""}">${h.has ? o.n(h.v) : "—"}</td><td class="${h.fail ? "F" : ""}">${h.has ? h.grade : "—"}</td><td>${h.has ? o.gpa(h.gp) : "—"}</td></tr>`).join("")}
      </tbody><tfoot><tr><td colspan="3" class="l">মোট</td><td>${o.n(a.full)}</td><td>${o.n(a.total)}</td><td>${a.grade}</td><td>${o.gpa(a.gpa)}</td></tr></tfoot></table>`,
        v = `<div class="sum-box"><div><small>মোট নম্বর</small><b>${o.n(a.total)}</b></div><div><small>জিপিএ</small><b>${o.gpa(a.gpa)}</b></div><div><small>গ্রেড</small><b>${a.grade}</b></div>
      <div><small>ফলাফল</small><b class="${a.pass ? "pass" : "fail"}">${a.pass ? "উত্তীর্ণ" : "অনুত্তীর্ণ"}</b></div><div><small>শ্রেণিতে মেধাক্রম</small><b>${a.pass && i.pos ? o.n(i.pos) : "—"}</b></div><div><small>শাখায় মেধাক্রম</small><b>${a.pass && i.secPos ? o.n(i.secPos) : "—"}</b></div></div>`,
        g = `<table class="scale"><thead><tr><th>নম্বর</th><th>গ্রেড</th><th>পয়েন্ট</th></tr></thead><tbody>${[
          ...E().grading,
        ]
          .sort((h, b) => b.min - h.min)
          .map(
            (h, b, k) =>
              `<tr><td>${o.n(h.min)}${b ? "–" + o.n(k[b - 1].min - 1) : "–১০০"}</td><td>${h.grade}</td><td>${o.gpa(h.gp)}</td></tr>`,
          )
          .join("")}</tbody></table>`;
      return `<div class="doc" style="padding:13mm 14mm 12mm"><div class="frame" style="inset:6mm"></div><div class="inner">
      ${vs(d)}<div class="rule"></div><div class="rule2"></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.5mm;margin-bottom:4mm"><span class="title-pill">একাডেমিক ট্রান্সক্রিপ্ট</span><span style="font-weight:600;color:var(--ink)">${m(s.name)} ${m(o.bd(s.session))}</span></div>
      <div style="margin-bottom:4mm">${Ks([["নাম", t.nameBn], ["শিক্ষার্থী আইডি", t.studentId], ["পিতার নাম", t.father], ["মাতার নাম", t.mother], ["শ্রেণি", gt(t.classId)], ["শাখা", t.section], ["রোল নং", t.roll], c && c.hasGroups ? ["বিভাগ", t.group] : ["জন্ম তারিখ", t.dob ? o.dateN(t.dob) : ""], ...(c && c.hasGroups ? [["জন্ম তারিখ", t.dob ? o.dateN(t.dob) : ""]] : []), ["শিক্ষাবর্ষ", s.session]], n ? 3 : 2)}</div>
      <div class="tr-body">${n ? `<div style="flex:1;min-width:0">${p}</div><div class="tr-side">${v}${g}</div>` : `${p}<div class="tr-foot">${v}${g}</div>`}</div>
      <div class="signs" style="padding-top:4mm">${os(E().docs.classTeacherLabel)}${os(E().docs.examCtrlLabel)}${rs()}</div>
      <div class="serial" style="text-align:center;margin-top:2mm">ক্রমিক: ${m(l)} · ইস্যুর তারিখ: ${o.dateN(w.date)}</div>
    </div></div>`;
    },
    idcard(t) {
      const s = It.serial("idcard", t.id, { name: t.nameBn, sid: t.studentId }),
        e = E().school,
        a = +E().school.session || /* @__PURE__ */ new Date().getFullYear();
      return `<div class="idc"><div class="top"><div class="s">${m(e.name)}</div>${e.nameEn ? `<div class="e">${m(e.nameEn)}</div>` : ""}<div class="bar"></div></div>
      <div class="ph">${t.photo ? `<img src="${t.photo}" alt="">` : m(o.initials(t.nameBn))}</div>
      <div class="n">${m(t.nameBn)}</div><div class="tg">শিক্ষার্থী</div>
      <table><tr><td class="k">শ্রেণি</td><td>${m(it(t.classId))}, ${m(t.section)} শাখা</td></tr><tr><td class="k">রোল</td><td>${o.n(t.roll)}</td></tr><tr><td class="k">আইডি</td><td>${m(o.bd(t.studentId))}</td></tr>
        <tr><td class="k">রক্তের গ্রুপ</td><td>${m(t.blood || "—")}</td></tr><tr><td class="k">মোবাইল</td><td>${m(o.bd(t.phone || ""))}</td></tr><tr><td class="k">মেয়াদ</td><td>${o.bd("31/12/" + a)}</td></tr></table>
      <div class="bt">${w.qr ? `<div class="q"><img src="${Qs(Zs({ type: "idcard", serial: s, name: t.nameBn, sid: t.studentId, info: `${it(t.classId)} ${t.section} · রোল ${t.roll}` }))}" alt=""></div>` : "<div></div>"}
        <div class="sg">${w.sigImg && e.headSign ? `<img src="${e.headSign}" alt="">` : ""}<div>প্রধান শিক্ষক</div></div></div><div class="foot"></div></div>`;
    },
    staffid(t) {
      const s = It.serial("staffid", t.id, { name: t.name, sid: t.indexNo || t.id }),
        e = E().school;
      return `<div class="idc"><div class="top"><div class="s">${m(e.name)}</div>${e.nameEn ? `<div class="e">${m(e.nameEn)}</div>` : ""}<div class="bar"></div></div>
      <div class="ph">${t.photo ? `<img src="${t.photo}" alt="">` : m(o.initials(t.name))}</div>
      <div class="n">${m(t.name)}</div><div class="tg">${m(t.designation)}</div>
      <table>${t.subject ? `<tr><td class="k">বিষয়</td><td>${m(t.subject)}</td></tr>` : ""}${t.indexNo ? `<tr><td class="k">ইনডেক্স</td><td>${m(o.bd(t.indexNo))}</td></tr>` : ""}<tr><td class="k">রক্তের গ্রুপ</td><td>${m(t.blood || "—")}</td></tr><tr><td class="k">মোবাইল</td><td>${m(o.bd(t.phone || ""))}</td></tr><tr><td class="k">যোগদান</td><td>${t.joinDate ? o.dateN(t.joinDate) : "—"}</td></tr></table>
      <div class="bt">${w.qr ? `<div class="q"><img src="${Qs(Zs({ type: "staffid", serial: s, name: t.name, sid: t.indexNo || "", info: t.designation }))}" alt=""></div>` : "<div></div>"}
        <div class="sg">${w.sigImg && e.headSign ? `<img src="${e.headSign}" alt="">` : ""}<div>প্রধান শিক্ষক</div></div></div><div class="foot"></div></div>`;
    },
    receipt(t, s) {
      const e = $.find("students", t.studentId) || { nameBn: "—", classId: "", section: "", roll: "" },
        a = cs(
          {
            type: "receipt",
            serial: t.receiptNo,
            name: e.nameBn,
            sid: e.studentId,
            date: t.date,
            info: o.tk(t.total),
          },
          15,
          "",
        ),
        i = w.orient === "l";
      return `<div class="doc" style="padding:${i ? "7mm 10mm 6mm" : "9mm 8mm 8mm"}"><div class="frame" style="inset:4mm"></div><div class="inner">
      ${vs(a, true)}<div class="rule" style="margin-top:2mm"></div><div class="rule2" style="margin-bottom:2mm"></div>
      <div style="display:flex;align-items:center;justify-content:center;gap:3mm;margin-bottom:2.5mm"><span class="title-pill" style="font-size:11pt">টাকা প্রাপ্তির রসিদ</span><span style="font-size:8.5pt;border:.25mm solid #9aa3b2;border-radius:3mm;padding:.3mm 2.5mm;color:#3b4252">${s}</span></div>
      <div class="meta-row" style="margin-bottom:2mm"><span>রসিদ নং: <b>${m(o.bd(t.receiptNo))}</b></span><span>তারিখ: <b>${o.dateN(t.date)}</b></span></div>
      ${Ks(
        [
          ["নাম", e.nameBn],
          ["আইডি", e.studentId],
          ["শ্রেণি", `${it(e.classId)}, ${e.section} শাখা`],
          ["রোল", e.roll],
        ],
        i ? 2 : 1,
      )}
      <table class="mt" style="margin-top:2.5mm;font-size:9pt"><thead><tr><th style="width:9mm">ক্রম</th><th style="text-align:left">বিবরণ</th><th style="width:26mm">টাকা</th></tr></thead><tbody>
        ${t.items.map((c, l) => `<tr><td>${o.n(l + 1)}</td><td class="l">${m(c.label)}${c.month ? ` (${o.ym(c.month)})` : ""}</td><td style="text-align:right">${o.n(c.amount)}</td></tr>`).join("")}
        ${t.discount ? `<tr><td></td><td class="l">ছাড়</td><td style="text-align:right">−${o.n(t.discount)}</td></tr>` : ""}</tbody>
        <tfoot><tr><td colspan="2" class="l">সর্বমোট (${m(t.method)})</td><td style="text-align:right">${o.tk(t.total)}</td></tr></tfoot></table>
      <div class="signs" style="padding-top:2mm">${os("আদায়কারীর স্বাক্ষর")}${rs()}</div>
    </div></div>`;
    },
    notice(t) {
      const s = It.serial("notice", t.id, { name: t.title }),
        e = cs({ type: "notice", serial: s, name: t.title, date: t.date }, 19);
      return `<div class="doc" style="padding:15mm 18mm 15mm"><div class="frame" style="inset:7mm"></div><div class="inner">
      ${vs(e)}<div class="rule"></div><div class="rule2"></div>
      <div class="meta-row"><span>স্মারক নং: <b>${m(o.bd(t.memo || s))}</b></span><span>তারিখ: <b>${o.dateN(t.date)}</b></span></div>
      <div class="title-u" style="margin-top:10mm;font-size:20pt">বিজ্ঞপ্তি</div>
      <div style="margin-top:8mm;font-size:12.5pt;font-weight:600">বিষয়: ${m(t.title)}</div>
      <div class="serif" style="margin-top:5mm;font-size:12pt;line-height:2;text-align:justify;white-space:pre-line">${m(t.body || "")}${
        t.eventDate
          ? `

তারিখ: ${o.day(t.eventDate)}, ${o.date(t.eventDate)}`
          : ""
      }</div>
      <div class="signs" style="justify-content:flex-end">${rs()}</div>
    </div></div>`;
    },
  };
  function Ut({
    type: t,
    key: s,
    title: e,
    sub: a,
    columns: i,
    rows: c,
    rowsPerPage: l,
    foot: d = "",
    tableCls: n = "mt",
    after: p = "",
  }) {
    const v = It.serial(t, s, { name: e }),
      g = cs({ type: t, serial: v, name: e, info: a || "" }, 17, ""),
      h = [];
    for (let b = 0; b < Math.max(1, c.length); b += l) h.push(c.slice(b, b + l));
    return h.map(
      (b, k) => `<div class="doc" style="padding:11mm 12mm 10mm"><div class="inner">
    ${vs(g, true)}<div class="rule" style="margin-top:2mm"></div><div class="rule2" style="margin-bottom:2.5mm"></div>
    <div style="display:flex;justify-content:center;align-items:center;gap:4mm;margin-bottom:2.5mm"><span class="title-pill" style="font-size:11.5pt">${m(e)}</span>${a ? `<b style="color:var(--ink)">${m(a)}</b>` : ""}</div>
    <table class="${n}"><thead><tr>${i.map((y) => `<th style="${y.w ? "width:" + y.w : ""}">${y.h}</th>`).join("")}</tr></thead><tbody>${b.join("") || `<tr><td colspan="${i.length}">কোনো তথ্য নেই</td></tr>`}</tbody>${k === h.length - 1 ? d : ""}</table>
    ${k === h.length - 1 ? p : ""}
    ${k === h.length - 1 ? `<div class="signs" style="padding-top:4mm">${os("প্রস্তুতকারীর স্বাক্ষর")}${rs()}</div>` : '<div style="margin-top:auto"></div>'}
    <div class="pg-no">${m(v)} · পৃষ্ঠা ${o.n(k + 1)}/${o.n(h.length)}</div>
  </div></div>`,
    );
  }
  const Jt = {
      tabulation(t, s, e) {
        const a = ts(t.id, s).filter((n) => !e || n.st.section === e),
          i = Lt(s),
          c = w.orient === "l",
          l = a.map(
            (
              n,
            ) => `<tr><td>${n.r.pass ? o.n(n.pos) : "—"}</td><td>${o.n(n.st.roll)}</td><td class="l">${m(n.st.nameBn)}${e ? "" : ` <span style="color:#6b7385">(${m(n.st.section)})</span>`}</td>
      ${i
        .map((p) => {
          const v = n.r.rows.find((g) => g.s.id === p.id);
          return v
            ? `<td class="${v.fail ? "F" : ""}">${v.has ? o.n(v.v) + "<br>" + v.grade : "—"}</td>`
            : '<td style="background:#f1f2f5">·</td>';
        })
        .join("")}
      <td>${o.n(n.r.total)}</td><td><b>${o.gpa(n.r.gpa)}</b></td><td class="${n.r.grade === "F" ? "F" : ""}"><b>${n.r.grade}</b></td></tr>`,
          ),
          d = a.filter((n) => n.r.pass).length;
        return Ut({
          type: "tabulation",
          key: `${t.id}|${s}|${e}`,
          title: "ফলাফল শিট",
          sub: `${t.name} ${o.bd(t.session)} · ${gt(s)}${e ? ", " + e + " শাখা" : ""}`,
          tableCls: "tab",
          columns: [
            { h: "মেধা", w: "9mm" },
            { h: "রোল", w: "9mm" },
            { h: "নাম" },
            ...i.map((n) => ({ h: m(n.short) })),
            { h: "মোট", w: "11mm" },
            { h: "জিপিএ", w: "11mm" },
            { h: "গ্রেড", w: "10mm" },
          ],
          rows: l,
          rowsPerPage: c ? 16 : 26,
          after: `<div style="font-size:9pt;margin-top:2mm">মোট পরীক্ষার্থী ${o.n(a.length)} · উত্তীর্ণ ${o.n(d)} · অনুত্তীর্ণ ${o.n(a.length - d)} · পাসের হার ${a.length ? o.pct(((d / a.length) * 100).toFixed(1)) : "—"} · জিপিএ ৫: ${o.n(a.filter((n) => n.r.grade === "A+").length)}</div>`,
        });
      },
      routine(t) {
        const s = E().periods,
          e = ks(),
          a = Je(),
          i = s.map((g) => ({
            h: g.brk
              ? ""
              : `${m(g.label)}<br><span style="font-size:7.5pt;font-weight:400">${o.time(g.start)}–${o.time(g.end)}</span>`,
            w: g.brk ? "9mm" : "",
          })),
          c = a.effective ? ` · কার্যকর ${o.dateN(a.effective)}` : "",
          l = (g, h, b) => {
            const k = ((_().routine[g] || {})[h] || {})[b.id],
              y = k && $t(k.subjectId);
            return y
              ? `<b>${m(y.short)}</b><br><span style="font-size:7.5pt">${m(Vt(k.teacherId))}</span>`
              : "";
          };
        if (t.scope === "master") {
          const g = Gt(),
            h = w.orient === "l";
          return e.flatMap((b) =>
            Ut({
              type: "routine",
              key: "master|" + b,
              title: a.title,
              sub: Xt[b] + c,
              tableCls: "tab",
              columns: [{ h: "শ্রেণি", w: "20mm" }, ...i],
              rows: g.map(
                (k, y) =>
                  `<tr><td class="l"><b>${m(Ot(k))}</b></td>${s.map((f) => (f.brk ? (y === 0 ? `<td rowspan="${g.length}" style="background:#fbf2df;writing-mode:vertical-rl;font-weight:600;color:#8a5a0b">${m(f.label)}</td>` : "") : `<td style="height:${h ? 12 : 16}mm">${l(k, b, f)}</td>`)).join("")}</tr>`,
              ),
              rowsPerPage: h ? 12 : 16,
            }),
          );
        }
        if (t.scope === "allclasses")
          return Gt().flatMap((g) => {
            const [h, b] = g.split("|");
            return Jt.routine({ classId: h, section: b });
          });
        let d = a.title,
          n,
          p;
        if (t.teacherId)
          ((n = Vt(t.teacherId)),
            (p = (g, h) => {
              var b;
              for (const [k, y] of Object.entries(_().routine)) {
                const f = y[g] && y[g][h.id];
                if (f && f.teacherId === t.teacherId) {
                  const [x, I] = k.split("|");
                  return `<b>${m(it(x))} ${m(I)}</b><br>${m(((b = $t(f.subjectId)) == null ? void 0 : b.short) || "")}`;
                }
              }
              return "";
            }));
        else {
          n = `${gt(t.classId)}, ${t.section} শাখা${c}`;
          const g = _().routine[`${t.classId}|${t.section}`] || {};
          p = (h, b) => {
            const k = (g[h] || {})[b.id],
              y = k && $t(k.subjectId);
            return y
              ? `<b>${m(y.short)}</b><br><span style="font-size:8pt">${m(Vt(k.teacherId))}</span>`
              : "";
          };
        }
        const v = e.map(
          (g, h) =>
            `<tr><td class="l"><b>${Xt[g]}</b></td>${s.map((b) => (b.brk ? (h === 0 ? `<td rowspan="${e.length}" style="background:#fbf2df;writing-mode:vertical-rl;font-weight:600;color:#8a5a0b">${m(b.label)}</td>` : "") : `<td style="height:${w.orient === "l" ? 19 : 26}mm">${p(g, b)}</td>`)).join("")}</tr>`,
        );
        return Ut({
          type: "routine",
          key: t.teacherId || `${t.classId}|${t.section}`,
          title: d,
          sub: n,
          columns: [{ h: "দিন", w: "24mm" }, ...i],
          rows: v,
          rowsPerPage: 7,
        });
      },
      attsheet(t) {
        const [s, e] = t.month.split("-").map(Number),
          a = new Date(s, e, 0).getDate(),
          i = [...Array(a)].map((n, p) => `${t.month}-${String(p + 1).padStart(2, "0")}`),
          c = i.map((n) => $.getAtt(n, t.classId, t.section)),
          d = Et(ht().filter((n) => n.classId === t.classId && n.section === t.section)).map((n) => {
            let p = 0,
              v = 0;
            const g = i
              .map((h, b) => {
                const k = c[b] && c[b][n.id];
                return (
                  k && (v++, k === "P" && p++),
                  `<td style="${wt(h) ? "background:#eef0f4" : ""}${k === "A" ? ";color:#c0291b;font-weight:600" : ""}">${k === "P" ? "✓" : k === "A" ? "অ" : k === "L" ? "ছু" : ""}</td>`
                );
              })
              .join("");
            return `<tr><td>${o.n(n.roll)}</td><td class="l">${m(n.nameBn)}</td>${g}<td>${o.n(p)}</td><td>${v ? o.n(Math.round((p / v) * 100)) + "%" : "—"}</td></tr>`;
          });
        return Ut({
          type: "attsheet",
          key: `${t.classId}|${t.section}|${t.month}`,
          title: "মাসিক হাজিরা খাতা",
          sub: `${gt(t.classId)}, ${t.section} শাখা · ${o.ym(t.month)}`,
          tableCls: "tab",
          columns: [
            { h: "রোল", w: "8mm" },
            { h: "নাম", w: "38mm" },
            ...i.map((n, p) => ({ h: o.n(p + 1) })),
            { h: "উপ.", w: "8mm" },
            { h: "%", w: "9mm" },
          ],
          rows: d,
          rowsPerPage: w.orient === "l" ? 24 : 36,
        });
      },
      salarysheet(t) {
        const s = $.all("teachers").filter((i) => i.status !== "left"),
          e = _().salaries[t.month] || {},
          a = s.map((i, c) => {
            var l;
            return `<tr><td>${o.n(c + 1)}</td><td class="l">${m(i.name)}</td><td class="l">${m(i.designation)}</td><td style="text-align:right">${o.n(i.salary || 0)}</td><td>${(l = e[i.id]) != null && l.paid ? o.dateN(e[i.id].date) : ""}</td><td style="width:32mm"></td></tr>`;
          });
        return Ut({
          type: "salarysheet",
          key: t.month,
          title: "বেতন শিট",
          sub: o.ym(t.month),
          columns: [
            { h: "ক্রম", w: "10mm" },
            { h: "নাম" },
            { h: "পদবি" },
            { h: "বেতন (৳)", w: "24mm" },
            { h: "পরিশোধ", w: "22mm" },
            { h: "স্বাক্ষর", w: "32mm" },
          ],
          rows: a,
          rowsPerPage: w.orient === "l" ? 14 : 24,
          foot: `<tfoot><tr><td colspan="3" class="l">মোট</td><td style="text-align:right">${o.n(s.reduce((i, c) => i + (+c.salary || 0), 0))}</td><td colspan="2"></td></tr></tfoot>`,
        });
      },
      examroutine(t) {
        const s = tt().filter((i) => t.classes.includes(i.id)),
          a = [...(t.schedule || [])]
            .sort((i, c) => (i.date + i.start < c.date + c.start ? -1 : 1))
            .map(
              (i, c) =>
                `<tr><td>${o.n(c + 1)}</td><td class="l"><b>${i.date ? o.dateN(i.date) : ""}</b><br><span style="font-size:8pt">${i.date ? o.day(i.date) : ""}</span></td><td>${o.time(i.start)}–${o.time(i.end)}</td>${s
                  .map((l) => {
                    const d = $t((i.entries || {})[l.id]);
                    return `<td>${d ? `<b>${m(d.short)}</b><br><span style="font-size:7.5pt">কোড ${o.bd(d.code)}</span>` : "—"}</td>`;
                  })
                  .join("")}</tr>`,
            );
        return Ut({
          type: "examroutine",
          key: t.id,
          title: "পরীক্ষার রুটিন",
          sub: `${t.name} ${o.bd(t.session)}`,
          tableCls: "tab",
          columns: [
            { h: "ক্রম", w: "9mm" },
            { h: "তারিখ ও বার", w: "28mm" },
            { h: "সময়", w: "24mm" },
            ...s.map((i) => ({ h: m(i.name) })),
          ],
          rows: a.length ? a : [],
          rowsPerPage: w.orient === "l" ? 14 : 22,
          after: `<ol style="font-size:9pt;margin-top:4mm;padding-left:5mm">${E()
            .docs.admitRules.split(
              `
`,
            )
            .filter(Boolean)
            .map((i) => `<li>${m(i)}</li>`)
            .join("")}</ol>`,
        });
      },
      ledger(t) {
        const s = As().filter((p) => !t.month || p.date.startsWith(t.month)),
          e = (p) => {
            const v = {};
            return (
              s.filter((g) => g.type === p).forEach((g) => (v[g.category] = (v[g.category] || 0) + g.amount)),
              Object.entries(v)
            );
          },
          a = e("income"),
          i = e("expense"),
          c = a.reduce((p, v) => p + v[1], 0),
          l = i.reduce((p, v) => p + v[1], 0),
          d = Math.max(a.length, i.length),
          n = [...Array(d)].map(
            (p, v) =>
              `<tr><td class="l">${a[v] ? m(a[v][0]) : ""}</td><td style="text-align:right">${a[v] ? o.n(a[v][1]) : ""}</td><td class="l">${i[v] ? m(i[v][0]) : ""}</td><td style="text-align:right">${i[v] ? o.n(i[v][1]) : ""}</td></tr>`,
          );
        return Ut({
          type: "ledger",
          key: t.month || "all",
          title: "আয়-ব্যয় প্রতিবেদন",
          sub: t.month ? o.ym(t.month) : "সব সময়",
          columns: [
            { h: "আয়ের খাত" },
            { h: "টাকা", w: "28mm" },
            { h: "ব্যয়ের খাত" },
            { h: "টাকা", w: "28mm" },
          ],
          rows: n,
          rowsPerPage: 30,
          foot: `<tfoot><tr><td class="l">মোট আয়</td><td style="text-align:right">${o.n(c)}</td><td class="l">মোট ব্যয়</td><td style="text-align:right">${o.n(l)}</td></tr></tfoot>`,
          after: `<div class="sum-box" style="grid-template-columns:repeat(3,1fr);margin-top:5mm"><div><small>মোট আয়</small><b>${o.tk(c)}</b></div><div><small>মোট ব্যয়</small><b>${o.tk(l)}</b></div><div><small>উদ্বৃত্ত</small><b class="${c - l < 0 ? "fail" : "pass"}">${o.tk(c - l)}</b></div></div>`,
        });
      },
    },
    w = {
      type: "",
      opts: {},
      orient: "p",
      qr: true,
      sigImg: true,
      date: "",
      picked: null,
      cls: "",
      sec: "",
      exam: "",
      year: "",
      board: "",
      reason: "",
    };
  function mt(t, s = {}) {
    var e;
    if (!O() && !we.includes(t)) return u.toast("এই ডকুমেন্ট শুধু প্রধান শিক্ষক তৈরি করতে পারেন", "warn");
    if (
      (Object.assign(w, {
        type: t,
        opts: { ...s },
        orient: Pt[t].orient,
        qr: E().docs.showQR !== false,
        sigImg: true,
        date: G(),
        picked: null,
        year: "",
        board: E().docs.board,
        reason: "",
      }),
      ["testimonial", "tc"].includes(t) &&
        !s.students &&
        (w.cls = (e = tt().slice(-1)[0]) == null ? void 0 : e.id),
      s.students && s.students.length)
    ) {
      const a = $.find("students", s.students[0]);
      ((w.cls = a.classId), (w.sec = a.section), (w.picked = new Set(s.students)));
    } else (s.classId && (w.cls = s.classId), (w.sec = s.section || ""));
    (s.examId && (w.exam = s.examId),
      s.teachers && (w.picked = new Set(s.teachers)),
      location.hash === "#documents" ? C() : (location.hash = "documents"));
  }
  dt.documents = (t) => {
    if (!w.type) return oa(t);
    ra(t);
  };
  function oa(t) {
    ct("ডকুমেন্ট ও সনদ");
    const s = [
        ["শিক্ষার্থীর সনদ ও কার্ড", ["admit", "testimonial", "transcript", "tc", "idcard"]],
        ["ফলাফল ও একাডেমিক", ["tabulation", "routine", "examroutine", "attsheet"]],
        ["অফিস ও হিসাব", ["receipt", "notice", "salarysheet", "ledger", "staffid"]],
      ]
        .map(([a, i]) => [a, i.filter((c) => O() || we.includes(c))])
        .filter((a) => a[1].length),
      e = $.all("documents").length;
    ((t.innerHTML = `<div class="card-x card-pad mb-4 d-flex flex-wrap align-items-center gap-3" style="background:var(--primary-soft);border-color:transparent">${M("shield", "ico-20")}<div class="flex-grow-1"><b>প্রতিটি ডকুমেন্টে ক্রমিক নং আর QR কোড থাকে</b><div class="sec small-t">স্ক্যান করলে যাচাই পাতায় ডকুমেন্টের তথ্য দেখাবে। এ পর্যন্ত ${o.n(e)}টি ডকুমেন্ট ইস্যু হয়েছে। ডিজাইন আর লেখা সেটিংস থেকে বদলানো যায়</div></div>${O() ? '<a class="btn btn-ghost" href="#settings" id="docSet">ডকুমেন্ট সেটিংস</a>' : ""}</div>
    ${s
      .map(
        ([a, i]) =>
          `<h3 style="font-size:15px;margin:0 0 12px" class="sec">${a}</h3><div class="doc-tiles mb-4 stagger">${i
            .map((c) => {
              const l = Pt[c];
              return `<div class="doc-tile" data-k="${c}"><div class="pg ${l.orient === "l" && l.unit !== "card" ? "land" : ""}"></div><div><h4>${l.title}</h4><p>${l.desc}</p></div></div>`;
            })
            .join("")}</div>`,
      )
      .join("")}
    <div class="card-x"><div class="card-head"><h3>সাম্প্রতিক ইস্যু</h3><span class="right">${o.n(e)}টি</span></div>
    ${
      e
        ? `<table class="tbl dense"><thead><tr><th>ক্রমিক নং</th><th>ধরন</th><th>নাম</th><th class="hide-m">ইস্যু করেছেন</th><th class="r">তারিখ</th></tr></thead><tbody>${[
            ...$.all("documents"),
          ]
            .filter((a) => O() || a.by === J.uid)
            .reverse()
            .slice(0, 12)
            .map((a) => {
              var i;
              return `<tr><td class="num">${m(a.serial)}</td><td>${m(((i = Pt[a.type]) == null ? void 0 : i.title) || a.type)}</td><td>${m(a.name)}</td><td class="sec hide-m">${m(a.bn || "—")}</td><td class="r sec">${o.dateS(a.issuedAt)}</td></tr>`;
            })
            .join("")}</tbody></table>`
        : u.empty("এখনো কোনো ডকুমেন্ট প্রিন্ট বা ডাউনলোড হয়নি", "docs")
    }</div>`),
      T(".doc-tile", t).forEach((a) => (a.onclick = () => mt(a.dataset.k))),
      r("#docSet") &&
        (r("#docSet").onclick = () => {
          fs = "docs";
        }));
  }
  function ra(t) {
    var h, b, k;
    const s = Pt[w.type],
      e = w.type;
    (ct(
      s.title,
      s.desc,
      `<button class="btn btn-ghost" id="back">${M("arrowLeft", "ico-16")}<span>সব ডকুমেন্ট</span></button>`,
    ),
      (r("#back").onclick = () => {
        ((w.type = ""), C());
      }));
    const a = [...$.all("exams")].sort((y, f) => (y.startDate < f.startDate ? 1 : -1));
    ($.find("exams", w.exam) || (w.exam = ne()),
      (!et(w.cls) || (!O() && !At().includes(w.cls))) &&
        (w.cls = O() ? ((h = tt()[0]) == null ? void 0 : h.id) : At()[0]));
    const i = ["admit", "testimonial", "transcript", "tc", "idcard"].includes(e),
      c = ["admit", "transcript", "tabulation", "examroutine"].includes(e);
    let l = "";
    if (
      (c &&
        (l += `<div class="mb-3"><label class="form-label">পরীক্ষা</label><select class="form-select" id="sEx">${a.map((y) => `<option value="${y.id}" ${y.id === w.exam ? "selected" : ""}>${m(y.name)} ${o.bd(y.session)}</option>`).join("") || '<option value="">আগে পরীক্ষা যোগ করুন</option>'}</select></div>`),
      e === "routine" &&
        ((w.opts.scope =
          w.opts.scope || (w.opts.teacherId ? "teacher" : w.opts.classId ? "class" : "master")),
        (l += `<div class="mb-3"><label class="form-label">কোন রুটিন</label><select class="form-select" id="sSc">${[
          ["master", "সব শ্রেণি, প্রতিদিন এক পাতা"],
          ["allclasses", "সব শ্রেণি, প্রতি শাখা এক পাতা"],
          ["class", "একটি শ্রেণি"],
          ["teacher", "একজন শিক্ষক"],
        ]
          .map((y) => `<option value="${y[0]}" ${y[0] === w.opts.scope ? "selected" : ""}>${y[1]}</option>`)
          .join("")}</select></div>`)),
      (i || ["tabulation", "attsheet"].includes(e) || (e === "routine" && w.opts.scope === "class")) &&
        (l += `<div class="row g-2 mb-3"><div class="col-7"><label class="form-label">শ্রেণি</label><select class="form-select" id="sCl">${
          O()
            ? qt(w.cls)
            : tt()
                .filter((y) => At().includes(y.id))
                .map(
                  (y) => `<option value="${y.id}" ${y.id === w.cls ? "selected" : ""}>${m(y.name)}</option>`,
                )
                .join("")
        }</select></div><div class="col-5"><label class="form-label">শাখা</label><select class="form-select" id="sSe">${Dt(w.cls, w.sec, ["tabulation", "admit", "idcard", "transcript"].includes(e))}</select></div></div>`),
      e === "routine" &&
        w.opts.scope === "teacher" &&
        (l += `<div class="mb-3"><label class="form-label">শিক্ষক</label><select class="form-select" id="sTe">${$.all(
          "teachers",
        )
          .filter((y) => y.type === "শিক্ষক")
          .map(
            (y) =>
              `<option value="${y.id}" ${y.id === w.opts.teacherId ? "selected" : ""}>${m(y.name)}</option>`,
          )
          .join("")}</select></div>`),
      e === "routine" &&
        w.opts.scope === "teacher" &&
        !w.opts.teacherId &&
        (w.opts.teacherId = ($.all("teachers").find((y) => y.type === "শিক্ষক") || {}).id),
      i &&
        (l +=
          '<div class="mb-3"><div class="d-flex align-items-center mb-1"><label class="form-label mb-0">শিক্ষার্থী</label><label class="check ms-auto small-t" style="margin:0"><input type="checkbox" id="pickAll"> সবাই</label></div><div class="pick-list" id="pick"></div></div>'),
      e === "staffid" &&
        (l +=
          '<div class="mb-3"><div class="d-flex align-items-center mb-1"><label class="form-label mb-0">শিক্ষক ও কর্মচারী</label><label class="check ms-auto small-t" style="margin:0"><input type="checkbox" id="pickAll"> সবাই</label></div><div class="pick-list" id="pick"></div></div>'),
      e === "receipt")
    ) {
      const y = [...$.all("payments")]
        .filter((f) => O() || f.by === J.uid)
        .sort((f, x) => (f.date < x.date ? 1 : -1))
        .slice(0, 200);
      (w.opts.paymentId || (w.opts.paymentId = (b = y[0]) == null ? void 0 : b.id),
        (l += `<div class="mb-3"><label class="form-label">রসিদ</label><select class="form-select" id="sPay">${y.map((f) => `<option value="${f.id}" ${f.id === w.opts.paymentId ? "selected" : ""}>${m(o.bd(f.receiptNo))} · ${m(($.find("students", f.studentId) || {}).nameBn || "")}</option>`).join("")}</select></div>`));
    }
    if (e === "notice") {
      const y = [...$.all("notices")].sort((f, x) => (f.date < x.date ? 1 : -1));
      (w.opts.noticeId || (w.opts.noticeId = (k = y[0]) == null ? void 0 : k.id),
        (l += `<div class="mb-3"><label class="form-label">নোটিশ</label><select class="form-select" id="sNt">${y.map((f) => `<option value="${f.id}" ${f.id === w.opts.noticeId ? "selected" : ""}>${m(f.title)}</option>`).join("")}</select></div>`));
    }
    (["attsheet", "salarysheet", "ledger"].includes(e) &&
      ((w.opts.month = w.opts.month || G().slice(0, 7)),
      (l += `<div class="mb-3"><label class="form-label">মাস</label><input type="month" class="form-control" id="sMo" value="${w.opts.month}"></div>`)),
      e === "testimonial" &&
        (l += `<div class="row g-2 mb-3"><div class="col-6"><label class="form-label">এসএসসি সন</label><input class="form-control" id="sYr" value="${m(w.year || E().school.session)}"></div><div class="col-6"><label class="form-label">বোর্ড</label><input class="form-control" id="sBd" value="${m(w.board)}"></div><div class="col-12 hint">শিক্ষার্থীর প্রোফাইলে আলাদা দেওয়া থাকলে সেটাই বসবে</div></div>`),
      e === "tc" &&
        (l += `<div class="mb-3"><label class="form-label">ছাড়পত্রের কারণ</label><input class="form-control" id="sRe" value="${m(w.reason)}" placeholder="যেমন: পারিবারিক স্থানান্তরের কারণে"></div>`),
      (l += `<div class="mb-3"><label class="form-label">ইস্যুর তারিখ</label><input type="date" class="form-control" id="sDt" value="${w.date}"></div>`),
      (l += `<div class="mb-3"><label class="form-label">কাগজের দিক</label>${s.lock ? `<div class="sec small-t">${s.unit === "card" ? "A4 পোর্ট্রেট, এক পাতায় ৯টি কার্ড" : "A4-এর অর্ধেক ল্যান্ডস্কেপ, এক পাতায় দুটি, মাঝে কাটার দাগ"}</div>` : `<div class="seg w-100" id="sOr"><button data-v="p" class="flex-fill ${w.orient === "p" ? "on" : ""}">পোর্ট্রেট</button><button data-v="l" class="flex-fill ${w.orient === "l" ? "on" : ""}">ল্যান্ডস্কেপ</button></div><div class="hint">${s.unit === "A5" ? "A4-এর অর্ধেক মাপে, এক পাতায় দুটি কপি" : "A4 কাগজ"}</div>`}</div>`),
      (l += `<div class="d-flex flex-column gap-2 mb-3"><label class="switch"><input type="checkbox" id="sQr" ${w.qr ? "checked" : ""}> যাচাইয়ের QR কোড</label><label class="switch"><input type="checkbox" id="sSg" ${w.sigImg ? "checked" : ""}> স্বাক্ষর ও সিলের ছবি ${E().school.headSign ? "" : '<span class="muted small-t">(সেটিংসে যোগ করুন)</span>'}</label></div>`),
      (t.innerHTML = `<div class="doc-studio"><div class="doc-ctrl card-x card-pad">${l}
    <div class="d-flex gap-2"><button class="btn btn-primary flex-fill" id="dPdf">${M("download", "ico-16")} PDF নামান</button><button class="btn btn-ghost flex-fill" id="dPrint">${M("print", "ico-16")} প্রিন্ট</button></div>
    <div class="hint mt-2" id="dInfo"></div></div>
    <div class="doc-stage" id="stage"></div></div>`));
    const d = () => {
        if (!r("#pick")) return;
        let y;
        (e === "staffid"
          ? (y = $.all("teachers")
              .filter((f) => f.status !== "left")
              .map((f) => ({ id: f.id, label: `${f.name}`, sub: f.designation })))
          : (y = Et(
              $.all("students").filter(
                (f) =>
                  kt(f.classId, f.section) &&
                  (f.status === "active" ||
                    ["testimonial", "tc"].includes(e) ||
                    (w.picked && w.picked.has(f.id))) &&
                  f.classId === w.cls &&
                  (!w.sec || f.section === w.sec),
              ),
            )
              .sort((f, x) => (f.status === "active") - (x.status === "active"))
              .map((f) => ({
                id: f.id,
                label: `${o.n(f.roll)}. ${f.nameBn}`,
                sub:
                  f.status === "active"
                    ? `${f.section} শাখা`
                    : { passed: "পাস করেছে", transferred: "বদলি", left: "প্রাক্তন" }[f.status] || "",
              }))),
          w.picked ||
            (w.picked = new Set(
              ["admit", "idcard", "transcript", "staffid"].includes(e)
                ? y.map((f) => f.id)
                : y.slice(0, 1).map((f) => f.id),
            )),
          (r("#pick").innerHTML =
            y
              .map(
                (f) =>
                  `<label><input type="checkbox" value="${f.id}" ${w.picked.has(f.id) ? "checked" : ""}> <span class="flex-grow-1">${m(f.label)}</span><span class="muted small-t">${m(f.sub)}</span></label>`,
              )
              .join("") || '<div class="empty" style="padding:20px">কেউ নেই</div>'),
          (r("#pickAll").checked = y.length && y.every((f) => w.picked.has(f.id))),
          T("#pick input").forEach(
            (f) =>
              (f.onchange = () => {
                (f.checked ? w.picked.add(f.value) : w.picked.delete(f.value),
                  (r("#pickAll").checked = y.every((x) => w.picked.has(x.id))),
                  v());
              }),
          ),
          (r("#pickAll").onchange = (f) => {
            (y.forEach((x) => (f.target.checked ? w.picked.add(x.id) : w.picked.delete(x.id))), d(), v());
          }));
      },
      n = (y, f, x) => {
        const I = r(y);
        I && (I[f] = x);
      };
    (n("#sEx", "onchange", (y) => {
      ((w.exam = y.target.value), v());
    }),
      n("#sCl", "onchange", (y) => {
        ((w.cls = y.target.value),
          (r("#sSe").innerHTML = Dt(w.cls, "", ["tabulation", "admit", "idcard", "transcript"].includes(e))),
          (w.sec = r("#sSe").value),
          (w.picked = null),
          d(),
          v());
      }),
      n("#sSe", "onchange", (y) => {
        ((w.sec = y.target.value), (w.picked = null), d(), v());
      }),
      n("#sTe", "onchange", (y) => {
        ((w.opts.teacherId = y.target.value), v());
      }),
      n("#sSc", "onchange", (y) => {
        ((w.opts.scope = y.target.value), C());
      }),
      n("#sPay", "onchange", (y) => {
        ((w.opts.paymentId = y.target.value), v());
      }),
      n("#sNt", "onchange", (y) => {
        ((w.opts.noticeId = y.target.value), v());
      }),
      n("#sMo", "onchange", (y) => {
        ((w.opts.month = y.target.value), v());
      }),
      n("#sYr", "oninput", (y) => {
        ((w.year = y.target.value), v());
      }),
      n("#sBd", "oninput", (y) => {
        ((w.board = y.target.value), v());
      }),
      n("#sRe", "oninput", (y) => {
        ((w.reason = y.target.value), v());
      }),
      n("#sDt", "onchange", (y) => {
        ((w.date = y.target.value || G()), v());
      }),
      n("#sQr", "onchange", (y) => {
        ((w.qr = y.target.checked), v());
      }),
      n("#sSg", "onchange", (y) => {
        ((w.sigImg = y.target.checked), v());
      }),
      T("#sOr button").forEach(
        (y) =>
          (y.onclick = () => {
            ((w.orient = y.dataset.v),
              T("#sOr button").forEach((f) => f.classList.toggle("on", f === y)),
              v());
          }),
      ),
      r("#sSe") &&
        (!["tabulation", "admit", "idcard", "transcript"].includes(e) &&
          !et(w.cls).sections.includes(w.sec) &&
          (w.sec = et(w.cls).sections[0]),
        (r("#sSe").value = w.sec || ""),
        (w.sec = r("#sSe").value)),
      d());
    let p;
    const v = () => {
        (clearTimeout(p), (p = setTimeout(g, 60)));
      },
      g = () => {
        const y = Me();
        ((w.sheets = y),
          Xs(y),
          (r("#dInfo").textContent = y.length
            ? `${o.n(y.length)} পাতা · ${y.orient === "l" ? "A4 ল্যান্ডস্কেপ" : "A4 পোর্ট্রেট"}`
            : ""));
      };
    ((r("#dPrint").onclick = () => pa()),
      (r("#dPdf").onclick = () => ua()),
      (window.onresize = () => {
        he === "documents" && w.type && Xs(w.sheets || []);
      }),
      g());
  }
  function Me() {
    It.pending = [];
    const t = w.type,
      s = Pt[t],
      e = [],
      a = $.find("exams", w.exam),
      i = () => (w.picked ? Et([...w.picked].map((l) => $.find("students", l)).filter(Boolean)) : []);
    if (t === "admit") a && i().forEach((l) => e.push(Ft.admit(l, a)));
    else if (t === "testimonial" || t === "tc")
      i().forEach((l) =>
        e.push(Ft.cert(t, l, { date: w.date, year: w.year, board: w.board, reason: w.reason })),
      );
    else if (t === "transcript") {
      if (a) {
        const l = {},
          d = {};
        (i().forEach((n) => {
          d[n.classId] || ((d[n.classId] = 1), ts(a.id, n.classId).forEach((p) => (l[p.st.id] = p)));
        }),
          i().forEach((n) => e.push(Ft.transcript(n, a, l))));
      }
    } else if (t === "idcard") i().forEach((l) => e.push(Ft.idcard(l)));
    else if (t === "staffid")
      [...(w.picked || [])]
        .map((l) => $.find("teachers", l))
        .filter(Boolean)
        .forEach((l) => e.push(Ft.staffid(l)));
    else if (t === "receipt") {
      const l = $.find("payments", w.opts.paymentId);
      l && e.push(Ft.receipt(l, "শিক্ষার্থী কপি"), Ft.receipt(l, "অফিস কপি"));
    } else if (t === "notice") {
      const l = $.find("notices", w.opts.noticeId);
      l && e.push(Ft.notice(l));
    } else if (t === "tabulation") a && e.push(...Jt.tabulation(a, w.cls, w.sec));
    else if (t === "routine") {
      const l = w.opts.scope;
      e.push(
        ...Jt.routine(
          l === "teacher"
            ? { teacherId: w.opts.teacherId }
            : l === "class"
              ? { classId: w.cls, section: w.sec || et(w.cls).sections[0] }
              : { scope: l },
        ),
      );
    } else
      t === "attsheet"
        ? e.push(
            ...Jt.attsheet({ classId: w.cls, section: w.sec || et(w.cls).sections[0], month: w.opts.month }),
          )
        : t === "salarysheet"
          ? e.push(...Jt.salarysheet({ month: w.opts.month }))
          : t === "ledger"
            ? e.push(...Jt.ledger({ month: w.opts.month }))
            : t === "examroutine" && a && e.push(...Jt.examroutine(a));
    const c = [];
    if (s.unit === "A4")
      (e.forEach((l) => c.push(`<div class="sheet ${w.orient === "l" ? "land" : ""}">${l}</div>`)),
        (c.orient = w.orient));
    else if (s.unit === "A5") {
      const l = w.orient === "p";
      for (let d = 0; d < e.length; d += 2)
        c.push(
          `<div class="sheet ${l ? "land split-h" : "split-v"}"><div class="slot">${e[d]}</div><div class="slot ${e[d + 1] ? "" : "blank"}">${e[d + 1] || ""}</div><span class="cut">✂ এখানে কাটুন</span></div>`,
        );
      c.orient = l ? "l" : "p";
    } else {
      for (let l = 0; l < e.length; l += 9)
        c.push(`<div class="sheet cards">${e.slice(l, l + 9).join("")}</div>`);
      c.orient = "p";
    }
    return c;
  }
  function Xs(t) {
    const s = r("#stage");
    if (!s) return;
    if (!t.length) {
      s.innerHTML = `<div class="empty" style="color:#e5e8ef">${M("docs")}<div>${!$.all("exams").length && ["admit", "transcript", "tabulation"].includes(w.type) ? "আগে একটি পরীক্ষা যোগ করুন" : "বাম পাশ থেকে বাছাই করুন"}</div></div>`;
      return;
    }
    const e = t.orient === "l",
      a = (e ? 297 : 210) * xe,
      i = (e ? 210 : 297) * xe,
      c = Math.min(s.clientWidth - 56, 980),
      l = Math.min(1, c / a),
      d = t.slice(0, 40);
    s.innerHTML =
      d
        .map(
          (n) =>
            `<div class="sheet-holder" style="width:${a * l}px;height:${i * l}px"><div style="transform:scale(${l});transform-origin:0 0;width:${a}px;height:${i}px">${n}</div></div>`,
        )
        .join("") +
      (t.length > d.length
        ? `<div style="color:#e5e8ef" class="small-t">প্রিভিউতে প্রথম ${o.n(d.length)} পাতা দেখানো হচ্ছে, প্রিন্ট ও PDF-এ সব ${o.n(t.length)} পাতা থাকবে</div>`
        : "");
  }
  function ma(t) {
    let s = r("#pageStyle");
    (s || ((s = document.createElement("style")), (s.id = "pageStyle"), document.head.appendChild(s)),
      (s.textContent = `@page{size:A4 ${t === "l" ? "landscape" : "portrait"};margin:0}`));
  }
  async function Se() {
    try {
      await It.finalize();
    } catch {
      return (u.toast("ক্রমিক নম্বর নেওয়া যায়নি, ইন্টারনেট সংযোগ দেখুন", "warn"), null);
    }
    const t = Me();
    return ((w.sheets = t), Xs(t), t);
  }
  async function pa() {
    if (!(w.sheets || []).length) return u.toast("ছাপার মতো কিছু বাছাই করা হয়নি", "warn");
    const t = await Se();
    if (t) {
      ((r("#printRoot").innerHTML = t.join("")), ma(t.orient), await Ie(r("#printRoot")), It.commit());
      try {
        window.print();
      } catch {
        u.toast("এই পরিবেশে প্রিন্ট চালু নেই, PDF নামিয়ে প্রিন্ট করুন", "warn");
      }
      setTimeout(() => {
        r("#printRoot").innerHTML = "";
      }, 1500);
    }
  }
  function Ie(t) {
    return Promise.all(
      [...t.querySelectorAll("img")].map((s) =>
        s.complete
          ? 1
          : new Promise((e) => {
              s.onload = s.onerror = e;
            }),
      ),
    ).then(() => (document.fonts ? document.fonts.ready : 1));
  }
  async function ua() {
    if (!(w.sheets || []).length) return u.toast("PDF বানানোর মতো কিছু বাছাই করা হয়নি", "warn");
    if (!window.jspdf || !window.html2canvas) return u.toast("PDF লাইব্রেরি লোড হয়নি", "warn");
    const t = await Se();
    if (!t) return;
    u.busy(true, `PDF তৈরি হচ্ছে… ০/${o.n(t.length)}`);
    const s = t.orient === "l",
      e = document.createElement("div");
    ((e.style.cssText = "position:fixed;left:-20000px;top:0;z-index:-1;background:#fff"),
      document.body.appendChild(e));
    try {
      await (document.fonts ? document.fonts.ready : 1);
      const a = new jspdf.jsPDF({
        orientation: s ? "landscape" : "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });
      for (let l = 0; l < t.length; l++) {
        ((e.innerHTML = t[l]), await Ie(e));
        const d = await html2canvas(e.firstElementChild, {
          scale: 2.2,
          backgroundColor: "#ffffff",
          useCORS: true,
          logging: false,
        });
        (l && a.addPage("a4", s ? "landscape" : "portrait"),
          a.addImage(d.toDataURL("image/jpeg", 0.93), "JPEG", 0, 0, s ? 297 : 210, s ? 210 : 297),
          u.busy(true, `PDF তৈরি হচ্ছে… ${o.n(l + 1)}/${o.n(t.length)}`));
      }
      It.commit();
      const i = `${Pt[w.type].pfx.toLowerCase()}-${G()}.pdf`,
        c = a.output("blob");
      u.download(i, c, "application/pdf")
        ? u.toast(`${i} নামানো হয়েছে`)
        : u.toast("এই পরিবেশে ডাউনলোড চালু নেই, নিজের সাইটে খুললে কাজ করবে", "warn");
    } catch (a) {
      (console.error(a), u.toast("PDF তৈরি করা গেল না", "warn"));
    }
    (e.remove(), u.busy(false));
  }
  let fs = "school";
  const ha = [
    ["school", "স্কুলের তথ্য", "school"],
    ["sign", "স্বাক্ষর ও সিল", "edit"],
    ["docs", "ডকুমেন্ট ও সনদ", "docs"],
    ["classes", "শ্রেণি ও শাখা", "layers"],
    ["subjects", "বিষয়", "library"],
    ["grading", "গ্রেডিং", "award"],
    ["periods", "পিরিয়ড ও সময়", "clock"],
    ["lists", "তালিকা", "list"],
    ["fields", "অতিরিক্ত তথ্যঘর", "plus"],
    ["admin", "অ্যাডমিন", "lock"],
    ["backup", "ব্যাকআপ", "database"],
  ];
  dt.settings = (t) => {
    (ct("সেটিংস", "স্কুলের সব তথ্য, ডকুমেন্টের লেখা আর তালিকা এখান থেকে বদলান"),
      (t.innerHTML = `<div class="set-grid"><nav class="set-nav">${ha.map((s) => `<button data-t="${s[0]}" class="${s[0] === fs ? "on" : ""}">${M(s[2], "ico-16")}${s[1]}</button>`).join("")}</nav><div id="tabBody" style="min-width:0;max-width:960px"></div></div>`),
      T(".set-nav button", t).forEach(
        (s) =>
          (s.onclick = () => {
            ((fs = s.dataset.t),
              T(".set-nav button", t).forEach((e) => e.classList.toggle("on", e === s)),
              Is[fs](r("#tabBody")));
          }),
      ),
      Is[fs](r("#tabBody")));
  };
  const lt = (t = "সংরক্ষণ হয়েছে") => {
      ($.save(), u.toast(t));
    },
    Is = {
      school(t) {
        const s = E().school;
        let e = s.logo;
        const a = (i, c, l = "", d = "col-md-6") => u.inp(i, c, s[i], l, d);
        ((t.innerHTML = `<div class="card-x card-pad"><form id="scf"><div class="photo-pick mb-4"><span class="logo-mark" id="lgv" style="width:76px;height:76px;font-size:28px;border-radius:18px">${e ? `<img src="${e}" alt="">` : m(o.initials(s.name))}</span>
      <div><label class="btn btn-ghost mb-0">${M("upload", "ico-16")} লোগো বাছুন<input type="file" accept="image/*" id="lg" hidden></label> <button type="button" class="btn btn-quiet" id="lgx">সরান</button><div class="hint">লোগো সব ডকুমেন্টের হেডারে আর জলছাপে বসবে। সাদা বা স্বচ্ছ পটভূমির PNG ভালো</div></div></div>
      <div class="row g-3">${a("name", "স্কুলের নাম (বাংলা) *", "required")}${a("nameEn", "স্কুলের নাম (ইংরেজি)")}${a("eiin", "EIIN", "", "col-md-3")}${a("code", "স্কুল কোড", "", "col-md-3")}${a("established", "স্থাপিত", "", "col-md-3")}${a("session", "চলতি শিক্ষাবর্ষ", "", "col-md-3")}
      ${a("address", "ঠিকানা", "", "col-12")}${a("phone", "ফোন", "", "col-md-4")}${a("email", "ইমেইল", 'type="email"', "col-md-4")}${a("website", "ওয়েবসাইট", "", "col-md-4")}${a("headName", "প্রধান শিক্ষকের নাম")}${a("motto", "স্কুলের মূলমন্ত্র")}</div>
      <div class="fsec">সাপ্তাহিক ছুটি</div><div class="d-flex flex-wrap gap-3">${bs.map((i) => `<label class="check"><input type="checkbox" data-off="${i}" ${E().weeklyOff.includes(i) ? "checked" : ""}>${Xt[i]}</label>`).join("")}</div>
      <div class="mt-4"><button class="btn btn-primary">সংরক্ষণ</button></div></form></div>`),
          (r("#lg").onchange = async (i) => {
            const c = i.target.files[0];
            c &&
              ((e = await u.readImage(c, 360, "image/png")),
              (r("#lgv").innerHTML = `<img src="${e}" alt="">`));
          }),
          (r("#lgx").onclick = () => {
            ((e = ""), (r("#lgv").textContent = o.initials(s.name)));
          }),
          (r("#scf").onsubmit = (i) => {
            (i.preventDefault(),
              i.target.reportValidity() &&
                (Object.assign(s, u.formData(i.target), { logo: e }),
                (E().weeklyOff = T("[data-off]")
                  .filter((c) => c.checked)
                  .map((c) => +c.dataset.off)),
                lt(),
                me(),
                es(),
                Nt(),
                u.success("স্কুলের তথ্য সংরক্ষিত")));
          }));
      },
      sign(t) {
        const s = E().school,
          e = (
            a,
            i,
            c,
          ) => `<div class="col-md-6"><div class="card-x card-pad h-100"><h3 style="font-size:15px" class="mb-1">${i}</h3><p class="muted small-t">${c}</p>
      <div class="img-slot mb-3" style="width:100%;height:120px" id="v_${a}">${s[a] ? `<img src="${s[a]}" alt="">` : "কোনো ছবি নেই"}</div>
      <label class="btn btn-ghost mb-0">${M("upload", "ico-16")} ছবি বাছুন<input type="file" accept="image/*" data-k="${a}" hidden></label> <button class="btn btn-quiet" data-x="${a}">সরান</button></div></div>`;
        ((t.innerHTML = `<div class="row g-3">${e("headSign", "প্রধান শিক্ষকের স্বাক্ষর", "সাদা কাগজে কালো কালিতে স্বাক্ষর করে ছবি তুলুন বা স্ক্যান করুন। স্বচ্ছ PNG হলে সবচেয়ে ভালো দেখায়")}${e("seal", "স্কুলের সিল", "গোল সিলের ছবি। স্বাক্ষরের উপর হালকা করে বসবে")}</div>
      <div class="card-x card-pad mt-3"><div class="sec small-t">স্বাক্ষরের নিচের লেখা: <b>${m(E().docs.signLabel)}</b>${s.headName ? ` · নাম: <b>${m(s.headName)}</b>` : ""}. এগুলো "ডকুমেন্ট ও সনদ" আর "স্কুলের তথ্য" ট্যাব থেকে বদলাতে পারবেন। ছবি না দিলে শুধু ফাঁকা দাগ আর লেখা ছাপা হবে, পরে হাতে স্বাক্ষর ও সিল দেওয়া যাবে</div></div>`),
          T("[data-k]", t).forEach(
            (a) =>
              (a.onchange = async (i) => {
                const c = i.target.files[0];
                c &&
                  ((s[a.dataset.k] = await u.readImage(c, 500, "image/png")), lt("ছবি সংরক্ষিত"), Is.sign(t));
              }),
          ),
          T("[data-x]", t).forEach(
            (a) =>
              (a.onclick = () => {
                ((s[a.dataset.x] = ""), lt("সরানো হয়েছে"), Is.sign(t));
              }),
          ));
      },
      docs(t) {
        const s = E().docs,
          e = [
            "নাম",
            "পিতা",
            "মাতা",
            "ঠিকানা",
            "শ্রেণি",
            "শাখা",
            "রোল",
            "আইডি",
            "বিভাগ",
            "জন্ম_তারিখ",
            "পরীক্ষার_সন",
            "বোর্ড",
            "জিপিএ",
            "বোর্ড_রোল",
            "রেজি_নং",
            "কারণ",
          ];
        ((t.innerHTML = `<form id="dcf"><div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-3">স্বাক্ষরের লেখা ও QR</h3><div class="row g-3">
      ${u.inp("signLabel", "প্রধান শিক্ষকের স্বাক্ষরের নিচে", s.signLabel)}${u.inp("classTeacherLabel", "শ্রেণি শিক্ষকের স্বাক্ষরের নিচে", s.classTeacherLabel)}
      ${u.inp("examCtrlLabel", "পরীক্ষা নিয়ন্ত্রকের স্বাক্ষরের নিচে", s.examCtrlLabel)}${u.inp("board", "শিক্ষা বোর্ড (প্রশংসাপত্রের জন্য)", s.board)}
      <div class="col-12"><div class="card-x card-pad" style="background:var(--primary-soft);border-color:transparent"><div class="d-flex gap-2 align-items-start">${M("shield", "ico-16")}<div class="small-t sec">QR যাচাই নিজে থেকে চলে, কিছু বসাতে হয় না। স্ক্যান করলে এই সাইটের যাচাই পাতা খুলবে: <span class="num">${m(ke())}verify.html</span></div></div></div></div>
      <div class="col-12"><label class="switch"><input type="checkbox" name="showQR" ${s.showQR !== false ? "checked" : ""}> নতুন ডকুমেন্টে QR কোড আগে থেকে চালু থাকবে</label></div></div></div>
      <div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-1">প্রবেশপত্রের নির্দেশনা</h3><p class="muted small-t">প্রতি লাইনে একটি নির্দেশনা</p><textarea class="form-control" name="admitRules" rows="5">${m(s.admitRules)}</textarea></div>
      <div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-1">প্রশংসাপত্রের লেখা</h3><p class="muted small-t">বন্ধনীর {ঘর} গুলো শিক্ষার্থীর তথ্য দিয়ে নিজে থেকে বসবে। নিচের যেকোনো ঘরে ক্লিক করলে লেখায় যোগ হবে</p>
        <div class="d-flex flex-wrap gap-1 mb-2">${e.map((a) => `<button type="button" class="tag b" style="border:0" data-ins="testimonialText" data-k="${a}">{${a}}</button>`).join("")}</div>
        <textarea class="form-control serif" name="testimonialText" rows="8" style="font-family:'Noto Serif Bengali',serif">${m(s.testimonialText)}</textarea></div>
      <div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-1">ছাড়পত্রের লেখা</h3><div class="d-flex flex-wrap gap-1 mb-2">${e.map((a) => `<button type="button" class="tag b" style="border:0" data-ins="tcText" data-k="${a}">{${a}}</button>`).join("")}</div>
        <textarea class="form-control" name="tcText" rows="6" style="font-family:'Noto Serif Bengali',serif">${m(s.tcText)}</textarea></div>
      <div class="card-x card-pad mb-3 sec small-t" style="background:var(--gold-soft);border-color:transparent">প্রবেশপত্র আর প্রশংসাপত্রের নিজস্ব ডিজাইনের স্যাম্পল দিলে সেই অনুযায়ী লেআউট বদলে দেওয়া হবে। এখনকার লেখা আর সেটিংস তখনও কাজ করবে</div>
      <button class="btn btn-primary">সংরক্ষণ</button> <button type="button" class="btn btn-ghost" id="prevT">${M("award", "ico-16")} প্রশংসাপত্র দেখুন</button></form>`),
          T("[data-ins]", t).forEach(
            (a) =>
              (a.onclick = () => {
                var l, d;
                const i = r(`[name=${a.dataset.ins}]`, t),
                  c = (l = i.selectionStart) != null ? l : i.value.length;
                ((i.value =
                  i.value.slice(0, c) +
                  `{${a.dataset.k}}` +
                  i.value.slice((d = i.selectionEnd) != null ? d : c)),
                  i.focus());
              }),
          ),
          (r("#dcf").onsubmit = (a) => {
            (a.preventDefault(), Object.assign(s, u.formData(a.target)), lt());
          }),
          (r("#prevT").onclick = () => {
            (Object.assign(s, u.formData(r("#dcf"))), $.save());
            const a =
              ht().find((i) => {
                var c;
                return ((c = et(i.classId)) == null ? void 0 : c.order) >= 10;
              }) || ht()[0];
            mt("testimonial", a ? { students: [a.id] } : {});
          }));
      },
      classes(t) {
        const s = $.all("teachers").filter((a) => a.type === "শিক্ষক" && a.status !== "left"),
          e = () => {
            ((t.innerHTML = `<div class="card-x"><div class="card-head"><h3>শ্রেণি, শাখা ও শ্রেণি শিক্ষক</h3><span class="right">শাখা যোগ করতে ঘরে লিখে Enter চাপুন</span></div>
      ${tt()
        .map((a) => {
          const i = $.all("students").filter((c) => c.classId === a.id && c.status === "active").length;
          return `<div class="srow" data-c="${a.id}">
        <div style="min-width:150px"><div>${m(a.name)}</div><div class="muted small-t">${o.n(i)} জন${a.hasGroups ? " · বিভাগ আছে" : ""}</div></div>
        <div class="flex-grow-1 d-flex flex-wrap align-items-center gap-1">${a.sections.map((c) => `<span class="chip-edit">${m(c)} শাখা<select class="form-select form-select-sm" data-ct="${m(c)}" style="width:auto;height:24px;padding:0 24px 0 6px;font-size:12px;border:0;background-color:transparent" title="শ্রেণি শিক্ষক"><option value="">শ্রেণি শিক্ষক</option>${s.map((l) => `<option value="${l.id}" ${a.teacherBySection[c] === l.id ? "selected" : ""}>${m(l.name)}</option>`).join("")}</select><button data-rs="${m(c)}" aria-label="সরান">${M("x", "ico-16")}</button></span>`).join("")}
          <input class="form-control form-control-sm" style="width:110px;height:28px" placeholder="নতুন শাখা" data-as></div>
        <button class="btn btn-quiet btn-icon btn-sm" data-ec aria-label="সম্পাদনা">${M("edit", "ico-16")}</button><button class="btn btn-quiet btn-icon btn-sm" data-dc aria-label="মুছুন">${M("trash", "ico-16")}</button></div>`;
        })
        .join("")}
      <div class="srow"><button class="btn btn-ghost" id="addC">${M("plus", "ico-16")} শ্রেণি যোগ করুন</button></div></div>`),
              T("[data-c]", t).forEach((a) => {
                const i = et(a.dataset.c);
                ((r("[data-as]", a).onkeydown = (c) => {
                  if (c.key !== "Enter") return;
                  const l = c.target.value.trim();
                  if (l) {
                    if (i.sections.includes(l)) return u.toast("এই শাখা আগেই আছে", "warn");
                    (i.sections.push(l), lt("শাখা যোগ হয়েছে"), e());
                  }
                }),
                  T("[data-ct]", a).forEach(
                    (c) =>
                      (c.onchange = () => {
                        ((i.teacherBySection[c.dataset.ct] = c.value), lt("শ্রেণি শিক্ষক বসানো হয়েছে"));
                      }),
                  ),
                  T("[data-rs]", a).forEach(
                    (c) =>
                      (c.onclick = async () => {
                        const l = c.dataset.rs,
                          d = $.all("students").filter(
                            (n) => n.classId === i.id && n.section === l && n.status === "active",
                          ).length;
                        if (d) return u.toast(`${l} শাখায় ${o.n(d)} জন আছে, আগে তাদের সরান`, "warn");
                        (await u.confirm(`${i.name}-এর ${l} শাখা সরানো হবে`, "সরান")) &&
                          ((i.sections = i.sections.filter((n) => n !== l)), lt(), e());
                      }),
                  ),
                  (r("[data-ec]", a).onclick = () => Ee(i, e)),
                  (r("[data-dc]", a).onclick = async () => {
                    if ($.all("students").some((c) => c.classId === i.id))
                      return u.toast("এই শ্রেণিতে শিক্ষার্থী আছে, তাই মোছা যাবে না", "warn");
                    (await u.confirm(`${i.name} মুছে যাবে`)) &&
                      ((E().classes = E().classes.filter((c) => c.id !== i.id)), lt(), e());
                  }));
              }),
              (r("#addC").onclick = () => Ee(null, e)));
          };
        e();
      },
      subjects(t) {
        const s = () => {
          const e = [...E().subjects].sort((a, i) => a.code.localeCompare(i.code));
          ((t.innerHTML = `<div class="d-flex mb-3 align-items-center"><span class="sec">মোট ${o.n(e.length)}টি বিষয়</span><button class="btn btn-primary ms-auto" id="addSub">${M("plus", "ico-16")} বিষয় যোগ করুন</button></div>
      <div class="card-x"><div class="tbl-wrap"><table class="tbl dense"><thead><tr><th>কোড</th><th>বিষয়</th><th class="hide-m">সংক্ষেপ</th><th>শ্রেণি</th><th class="hide-m">বিভাগ</th><th class="r">পূর্ণমান</th><th class="r">পাস</th></tr></thead><tbody>
      ${e.map((a) => `<tr class="click" data-s="${a.id}"><td class="num">${m(o.bd(a.code))}</td><td>${m(a.name)}</td><td class="sec hide-m">${m(a.short)}</td><td class="sec small-t">${a.classes.map((i) => it(i)).join(", ")}</td><td class="hide-m">${a.group ? `<span class="tag">${m(a.group)}</span>` : '<span class="muted small-t">সবার জন্য</span>'}</td><td class="r num">${o.n(a.fullMarks)}</td><td class="r num">${o.n(a.passMarks)}</td></tr>`).join("")}
      </tbody></table></div></div>`),
            T("[data-s]", t).forEach(
              (a) =>
                (a.onclick = () =>
                  De(
                    E().subjects.find((i) => i.id === a.dataset.s),
                    s,
                  )),
            ),
            (r("#addSub").onclick = () => De(null, s)));
        };
        s();
      },
      grading(t) {
        const s = () => {
          const e = [...E().grading].sort((a, i) => i.min - a.min);
          ((t.innerHTML = `<div class="card-x"><div class="card-head"><h3>গ্রেডিং পদ্ধতি</h3><span class="right">শতকরা নম্বর অনুযায়ী</span></div><table class="tbl dense"><thead><tr><th>সর্বনিম্ন নম্বর (%)</th><th>লেটার গ্রেড</th><th>গ্রেড পয়েন্ট</th><th></th></tr></thead><tbody>
        ${e.map((a, i) => `<tr data-i="${E().grading.indexOf(a)}"><td><input class="marks-in" data-f="min" value="${a.min}"></td><td><input class="marks-in" data-f="grade" value="${m(a.grade)}"></td><td><input class="marks-in" data-f="gp" value="${a.gp}"></td><td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-del aria-label="মুছুন">${M("trash", "ico-16")}</button></td></tr>`).join("")}
        </tbody></table><div class="card-pad"><button class="btn btn-ghost" id="addG">${M("plus", "ico-16")} ধাপ যোগ করুন</button><div class="hint mt-2">কোনো বিষয়ে পাস নম্বরের কম পেলে সেই বিষয়ে F ধরা হয়, আর মোট জিপিএ ০.০০ হয়। প্রতিটি বিষয়ের পাস নম্বর "বিষয়" ট্যাব থেকে বদলান</div></div></div>`),
            T("tr[data-i]", t).forEach((a) => {
              const i = E().grading[+a.dataset.i];
              (T("[data-f]", a).forEach(
                (c) =>
                  (c.onchange = () => {
                    ((i[c.dataset.f] = c.dataset.f === "grade" ? c.value.trim() : +o.en(c.value) || 0), lt());
                  }),
              ),
                (r("[data-del]", a).onclick = () => {
                  (E().grading.splice(+a.dataset.i, 1), lt(), s());
                }));
            }),
            (r("#addG").onclick = () => {
              (E().grading.push({ min: 0, grade: "নতুন", gp: 0 }), lt(), s());
            }));
        };
        s();
      },
      periods(t) {
        const s = () => {
          ((t.innerHTML = `<div class="card-x"><div class="card-head"><h3>পিরিয়ড ও সময়</h3><span class="right">রুটিন এই অনুযায়ী সাজানো হয়</span></div><table class="tbl dense"><thead><tr><th>নাম</th><th>শুরু</th><th>শেষ</th><th>বিরতি</th><th></th></tr></thead><tbody>
        ${E()
          .periods.map(
            (
              e,
              a,
            ) => `<tr data-i="${a}"><td><input class="form-control form-control-sm" data-f="label" value="${m(e.label)}" style="width:110px"></td><td><input type="time" class="form-control form-control-sm" data-f="start" value="${e.start}" style="width:120px"></td><td><input type="time" class="form-control form-control-sm" data-f="end" value="${e.end}" style="width:120px"></td>
          <td><label class="switch"><input type="checkbox" data-f="brk" ${e.brk ? "checked" : ""}></label></td><td class="r"><button class="btn btn-quiet btn-sm btn-icon" data-up aria-label="উপরে">${M("arrowUp", "ico-16")}</button><button class="btn btn-quiet btn-sm btn-icon" data-del aria-label="মুছুন">${M("trash", "ico-16")}</button></td></tr>`,
          )
          .join("")}
        </tbody></table><div class="card-pad"><button class="btn btn-ghost" id="addP">${M("plus", "ico-16")} পিরিয়ড যোগ করুন</button></div></div>`),
            T("tr[data-i]", t).forEach((e) => {
              const a = +e.dataset.i,
                i = E().periods[a];
              (T("[data-f]", e).forEach(
                (c) =>
                  (c.onchange = () => {
                    ((i[c.dataset.f] = c.type === "checkbox" ? c.checked : c.value), lt());
                  }),
              ),
                (r("[data-del]", e).onclick = async () => {
                  (await u.confirm(`${m(i.label)} পিরিয়ড আর রুটিনে এর সব ক্লাস সরানো হবে`, "সরান")) &&
                    (E().periods.splice(a, 1), lt(), s());
                }),
                (r("[data-up]", e).onclick = () => {
                  if (!a) return;
                  const c = E().periods;
                  (([c[a - 1], c[a]] = [c[a], c[a - 1]]), lt(), s());
                }));
            }),
            (r("#addP").onclick = () => {
              const e = E().periods[E().periods.length - 1];
              (E().periods.push({
                id: "p" + $.uid(),
                label: "নতুন",
                start: (e == null ? void 0 : e.end) || "10:00",
                end: (e == null ? void 0 : e.end) || "10:45",
              }),
                lt(),
                s());
            }));
        };
        s();
      },
      lists(t) {
        const s = (
            a,
            i,
            c,
          ) => `<div class="card-x mb-3"><div class="card-head"><h3>${i}</h3><span class="right">${c}</span></div>
      <div class="card-pad d-flex flex-wrap align-items-center">${E()
        [a].map(
          (l, d) =>
            `<span class="chip-edit">${m(l)}<button data-k="${a}" data-i="${d}" aria-label="সরান">${M("x", "ico-16")}</button></span>`,
        )
        .join("")}
      <input class="form-control form-control-sm ms-1" style="width:200px;height:28px" placeholder="নতুন যোগ করুন, তারপর Enter" data-add="${a}"></div></div>`,
          e = () => {
            ((t.innerHTML =
              s("designations", "পদবি", "এই ক্রমে শিক্ষকরা সাজানো হয়") +
              s("groups", "বিভাগ (৯ম–১০ম)", "") +
              s("expenseCats", "ব্যয়ের খাত", "প্রথমটি বেতনের জন্য ব্যবহার হয়") +
              s("incomeCats", "আয়ের খাত", "")),
              T("[data-add]", t).forEach(
                (a) =>
                  (a.onkeydown = (i) => {
                    if (i.key !== "Enter") return;
                    const c = a.value.trim();
                    !c ||
                      E()[a.dataset.add].includes(c) ||
                      (E()[a.dataset.add].push(c), lt("যোগ হয়েছে"), e());
                  }),
              ),
              T("[data-k]", t).forEach(
                (a) =>
                  (a.onclick = () => {
                    (E()[a.dataset.k].splice(+a.dataset.i, 1), lt("সরানো হয়েছে"), e());
                  }),
              ));
          };
        e();
      },
      fields(t) {
        const s = () => {
          ((t.innerHTML = `<p class="sec">শিক্ষার্থীর ফর্মে বাড়তি ঘর লাগলে এখানে যোগ করুন, যেমন উপবৃত্তি নম্বর বা বাসের রুট। এগুলো ভর্তি ফর্ম আর প্রোফাইলে দেখাবে</p>
      <div class="card-x">${E()
        .customFields.map(
          (e) =>
            `<div class="srow"><div class="flex-grow-1">${m(e.label)}</div><span class="tag">${{ text: "লেখা", number: "সংখ্যা", date: "তারিখ" }[e.type]}</span><button class="btn btn-quiet btn-icon btn-sm" data-rf="${e.id}" aria-label="সরান">${M("trash", "ico-16")}</button></div>`,
        )
        .join("")}
      <form class="srow" id="cff"><input class="form-control" name="label" placeholder="ঘরের নাম" required style="max-width:320px"><select class="form-select" name="type" style="width:120px"><option value="text">লেখা</option><option value="number">সংখ্যা</option><option value="date">তারিখ</option></select><button class="btn btn-primary">${M("plus", "ico-16")} যোগ</button></form></div>`),
            (r("#cff").onsubmit = (e) => {
              (e.preventDefault(),
                E().customFields.push({ id: $.uid(), ...u.formData(e.target) }),
                lt("ঘর যোগ হয়েছে"),
                s());
            }),
            T("[data-rf]", t).forEach(
              (e) =>
                (e.onclick = async () => {
                  (await u.confirm("এই ঘর আর এতে লেখা সব তথ্য সরানো হবে", "সরান")) &&
                    ((E().customFields = E().customFields.filter((a) => a.id !== e.dataset.rf)), lt(), s());
                }),
            ));
        };
        s();
      },
      admin(t) {
        const s = $.mode === "live",
          e = s && at.user();
        ((t.innerHTML = `<div class="card-x card-pad" style="max-width:520px">${
          s
            ? `<div class="mb-3"><div class="muted small-t">অ্যাডমিন অ্যাকাউন্ট</div><div style="font-size:16px">${m(e ? e.email : "")}</div></div><form id="pwf">
      <div class="mb-3"><label class="form-label">বর্তমান পাসওয়ার্ড</label><input class="form-control" type="password" name="o" required autocomplete="current-password"></div>
      <div class="mb-3"><label class="form-label">নতুন পাসওয়ার্ড</label><input class="form-control" type="password" name="n" minlength="6" required autocomplete="new-password"></div>
      <button class="btn btn-primary">${M("lock", "ico-16")} পাসওয়ার্ড বদলান</button><div class="err" id="pwe"></div></form>`
            : '<div class="sec">ডেমো মোডে কোনো পাসওয়ার্ড নেই। আসল সিস্টেমে অ্যাডমিনের ইমেইল আর পাসওয়ার্ড দিয়ে লগইন করতে হয়</div>'
        }</div>
      <div class="card-x card-pad mt-3" style="max-width:520px"><label class="switch"><input type="checkbox" id="thm" ${E().theme === "dark" ? "checked" : ""}> ডার্ক মোড</label></div>`),
          s &&
            (r("#pwf").onsubmit = async (a) => {
              a.preventDefault();
              const i = u.formData(a.target);
              u.busy(true, "বদলানো হচ্ছে…");
              try {
                (await at.changePassword(i.o, i.n),
                  u.busy(false),
                  a.target.reset(),
                  (r("#pwe").textContent = ""),
                  u.success("পাসওয়ার্ড বদলানো হয়েছে"));
              } catch (c) {
                (u.busy(false), (r("#pwe").textContent = Ct(c)));
              }
            }),
          (r("#thm").onchange = (a) => {
            ((E().theme = a.target.checked ? "dark" : "light"), $.save(), es(), Nt());
          }));
      },
      backup(t) {
        const s = (new Blob([$.exportJSON()]).size / 1024).toFixed(0);
        ((t.innerHTML = `<div class="card-x mb-3"><div class="card-head"><h3>ব্যাকআপ নিন</h3><span class="right">ডেটার আকার প্রায় ${o.n(s)} KB</span></div>
      <div class="card-pad"><p class="sec">${$.mode === "live" ? "সব তথ্য অনলাইন ডেটাবেসে নিরাপদে রাখা আছে। তবুও মাঝে মাঝে একটি ব্যাকআপ ফাইল নিজের কাছে রেখে দিন" : "ডেমোর তথ্য শুধু এই ব্রাউজারে থাকে, আসল সিস্টেমের সাথে এর কোনো সম্পর্ক নেই"}</p>
      <button class="btn btn-primary" id="dl">${M("download", "ico-16")} ব্যাকআপ ফাইল নামান</button> <button class="btn btn-ghost" id="cp">${M("copy", "ico-16")} কপি করুন</button></div></div>
      <div class="card-x mb-3"><div class="card-head"><h3>ব্যাকআপ থেকে ফিরিয়ে আনুন</h3></div><div class="card-pad"><p class="sec">বর্তমান সব তথ্যের জায়গায় ফাইলের তথ্য বসবে</p>
      <label class="btn btn-ghost mb-0">${M("upload", "ico-16")} ফাইল বাছুন<input type="file" accept=".json,application/json" id="imp" hidden></label></div></div>
      <div class="card-x"><div class="card-head"><h3 style="color:var(--neg)">সব তথ্য মুছুন</h3></div><div class="card-pad"><p class="sec">শিক্ষার্থী, শিক্ষক, হাজিরা, নম্বর, হিসাব সব মুছে যাবে। স্কুলের তথ্য, বিষয় আর অন্যান্য সেটিংস থেকে যাবে। আগে ব্যাকআপ নিয়ে রাখুন</p>
      <button class="btn btn-danger" id="rst">${M("trash", "ico-16")} সব ডেটা মুছুন</button></div></div>`),
          (r("#dl").onclick = () => {
            u.download(`school-backup-${G()}.json`, $.exportJSON()) ||
              u.toast("এখানে ডাউনলোড চালু নেই, কপি করুন", "warn");
          }),
          (r("#cp").onclick = async () => {
            try {
              (await navigator.clipboard.writeText($.exportJSON()),
                u.toast("কপি হয়েছে, একটি .json ফাইলে পেস্ট করে রাখুন"));
            } catch {
              u.toast("কপি করা গেল না", "warn");
            }
          }),
          (r("#imp").onchange = async (e) => {
            const a = e.target.files[0];
            if (a && (await u.confirm("বর্তমান সব তথ্যের জায়গায় ব্যাকআপের তথ্য বসবে", "ফিরিয়ে আনুন")))
              try {
                (u.busy(true, "ফিরিয়ে আনা হচ্ছে…"),
                  await $.importJSON(await a.text()),
                  u.busy(false),
                  u.success("ব্যাকআপ ফিরিয়ে আনা হয়েছে"),
                  es(),
                  Nt());
              } catch {
                (u.busy(false), u.toast("ফাইলটি সঠিক ব্যাকআপ নয়", "warn"));
              }
          }),
          (r("#rst").onclick = async () => {
            (await u.confirm(
              "শিক্ষার্থী, শিক্ষক, হাজিরা, নম্বর আর হিসাবের সব তথ্য স্থায়ীভাবে মুছে যাবে। স্কুলের সেটিংস থেকে যাবে",
              "সব মুছুন",
            )) &&
              (u.busy(true, "মোছা হচ্ছে…"),
              await $.wipeData(),
              u.busy(false),
              u.success("সব তথ্য মুছে ফেলা হয়েছে"),
              C());
          }));
      },
    };
  function Ee(t, s) {
    const e = t || {
      name: "",
      short: "",
      order: Math.max(0, ...E().classes.map((a) => a.order)) + 1,
      hasGroups: false,
    };
    u.modal({
      title: t ? "শ্রেণি সম্পাদনা" : "নতুন শ্রেণি",
      size: "sm",
      body: `<form class="mb" id="cf"><div class="mb-3"><label class="form-label">নাম</label><input class="form-control" name="name" value="${m(e.name)}" required placeholder="যেমন: নবম শ্রেণি"></div>
      <div class="row g-3 mb-3"><div class="col-6"><label class="form-label">সংক্ষেপে</label><input class="form-control" name="short" value="${m(e.short)}" placeholder="৯ম"></div>
      <div class="col-6"><label class="form-label">ক্রম</label><input class="form-control" type="number" name="order" value="${e.order}"></div></div>
      <label class="switch"><input type="checkbox" name="hasGroups" ${e.hasGroups ? "checked" : ""}> এই শ্রেণিতে বিভাগ আছে</label></form>`,
      foot: '<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="sv">সংরক্ষণ</button>',
      onMount: (a, i) =>
        (r("#sv", a).onclick = () => {
          const c = r("#cf", a);
          if (!c.reportValidity()) return;
          const l = u.formData(c);
          ((l.order = +l.order),
            (l.short = l.short || l.name),
            t
              ? Object.assign(t, l)
              : E().classes.push({ id: "c" + $.uid(), sections: ["ক"], teacherBySection: {}, ...l }),
            lt(),
            i(),
            s());
        }),
    });
  }
  function De(t, s) {
    const e = t || { name: "", short: "", code: "", classes: [], group: "", fullMarks: 100, passMarks: 33 };
    u.modal({
      title: t ? "বিষয় সম্পাদনা" : "নতুন বিষয়",
      body: `<form class="mb" id="subf"><div class="row g-3">
      ${u.inp("name", "বিষয়ের নাম *", e.name, "required", "col-md-6")}${u.inp("short", "সংক্ষেপ (ফলাফল শিটে)", e.short, "", "col-md-3")}${u.inp("code", "কোড *", e.code, "required", "col-md-3")}
      ${u.sel("group", "বিভাগ", [["", "সবার জন্য"], ...E().groups], e.group, "col-md-6")}${u.inp("fullMarks", "পূর্ণমান", e.fullMarks, 'type="number"', "col-md-3")}${u.inp("passMarks", "পাস নম্বর", e.passMarks, 'type="number"', "col-md-3")}
      <div class="col-12"><label class="form-label">কোন কোন শ্রেণিতে পড়ানো হয়</label><div class="d-flex flex-wrap gap-3">${tt()
        .map(
          (a) =>
            `<label class="check"><input type="checkbox" data-cl="${a.id}" ${e.classes.includes(a.id) ? "checked" : ""}>${m(a.short)}</label>`,
        )
        .join("")}</div></div>
    </div></form>`,
      foot: `${t ? `<button class="btn btn-quiet me-auto" style="color:var(--neg)" id="dsub">${M("trash", "ico-16")} মুছুন</button>` : ""}<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="ssub">সংরক্ষণ</button>`,
      onMount: (a, i) => {
        ((r("#ssub", a).onclick = () => {
          const c = r("#subf", a);
          if (!c.reportValidity()) return;
          const l = u.formData(c);
          if (
            ((l.classes = T("[data-cl]", a)
              .filter((d) => d.checked)
              .map((d) => d.dataset.cl)),
            (l.fullMarks = +l.fullMarks || 100),
            (l.passMarks = +l.passMarks || Math.round(l.fullMarks * 0.33)),
            (l.short = l.short || l.name),
            !l.classes.length)
          )
            return u.toast("অন্তত একটি শ্রেণি বাছুন", "warn");
          (t ? Object.assign(t, l) : E().subjects.push({ id: "s" + $.uid(), ...l }), lt(), i(), s());
        }),
          t &&
            (r("#dsub", a).onclick = async () => {
              (await u.confirm(`${m(t.name)} বিষয়টি মুছে যাবে`)) &&
                ((E().subjects = E().subjects.filter((c) => c.id !== t.id)), lt(), i(), s());
            }));
      },
    });
  }
  const Zt = [
      ["name", "নাম"],
      ["designation", "পদবি"],
      ["subject", "বিষয়"],
      ["phone", "মোবাইল"],
      ["indexNo", "ইনডেক্স / MPO নং"],
      ["nid", "জাতীয় পরিচয়পত্র"],
      ["qualification", "শিক্ষাগত যোগ্যতা"],
      ["joinDate", "যোগদানের তারিখ"],
      ["blood", "রক্তের গ্রুপ"],
      ["address", "ঠিকানা"],
    ],
    te = {
      admission: "ভর্তি",
      "student-edit": "শিক্ষার্থীর তথ্য",
      attendance: "হাজিরা",
      fee: "ফি আদায়",
      "fee-cancel": "রসিদ বাতিল",
      marks: "নম্বর",
      doc: "ডকুমেন্ট",
      approve: "অনুমোদন",
      request: "তথ্য বদলের আবেদন",
      access: "দায়িত্ব বদল",
      delete: "মুছে ফেলা",
      restore: "ফিরিয়ে আনা",
      promotion: "পরবর্তী শ্রেণিতে উত্তীর্ণ",
      "teacher-edit": "শিক্ষকের তথ্য বদল",
      session: "শিক্ষাবর্ষ",
    },
    Qt = (t) => $.find("teachers", t.teacherId) || {},
    ms = (t) => ((t || []).length ? t.map(Ot).join(", ") : "—"),
    se = (t) => Cs(t, []);
  let zt = "pending";
  dt.staff = (t) => {
    const s = _().staff || [],
      e = (_().requests || []).filter((d) => d.status === "pending"),
      a = s.filter((d) => d.status === "pending"),
      i = s.filter((d) => d.status === "active"),
      c = s.filter((d) => ["disabled", "rejected"].includes(d.status));
    (zt === "pending" && !a.length && e.length && (zt = "requests"),
      ct("শিক্ষক অ্যাকাউন্ট", "আবেদন অনুমোদন, শ্রেণির দায়িত্ব আর অ্যাকাউন্ট নিয়ন্ত্রণ"),
      (t.innerHTML = `<div class="row g-3 mb-3 stagger">
      <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">অনুমোদনের অপেক্ষায়</div><div class="fig num ${a.length ? "down" : ""}">${o.n(a.length)}</div><div class="note">নতুন আবেদন</div></div></div>
      <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">সক্রিয় শিক্ষক অ্যাকাউন্ট</div><div class="fig num">${o.n(i.length)}</div><div class="note">লগইন করতে পারেন</div></div></div>
      <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">তথ্য বদলের আবেদন</div><div class="fig num ${e.length ? "down" : ""}">${o.n(e.length)}</div><div class="note">যাচাই বাকি</div></div></div>
      <div class="col-6 col-lg-3"><div class="card-x card-pad stat"><div class="label">বন্ধ বা বাতিল</div><div class="fig num">${o.n(c.length)}</div><div class="note">লগইন করতে পারেন না</div></div></div></div>
    <div class="tabs">${[
      ["pending", `অনুমোদনের অপেক্ষায় (${o.n(a.length)})`],
      ["active", "সক্রিয় অ্যাকাউন্ট"],
      ["requests", `তথ্য বদলের আবেদন (${o.n(e.length)})`],
      ["off", "বন্ধ ও বাতিল"],
    ]
      .map((d) => `<button data-t="${d[0]}" class="${zt === d[0] ? "on" : ""}">${d[1]}</button>`)
      .join("")}</div>
    <div id="stBody"></div>`),
      T(".tabs button", t).forEach(
        (d) =>
          (d.onclick = () => {
            ((zt = d.dataset.t), C());
          }),
      ));
    const l = r("#stBody");
    zt === "pending"
      ? ((l.innerHTML = a.length
          ? `<div class="row g-3 stagger">${a
              .map(
                (d) => `<div class="col-md-6 col-xl-4"><div class="card-x card-pad h-100 d-flex flex-column">
      <div class="d-flex gap-3 align-items-center mb-3">${u.avatar(d.name, d.photo, "lg")}<div style="min-width:0"><h3 style="font-size:17px">${m(d.name)}</h3><div class="sec small-t">${m(d.designation || "")}${d.subject ? " · " + m(d.subject) : ""}</div><div class="muted small-t">আবেদন: ${d.at ? o.dateS(d.at.slice(0, 10)) : ""}</div></div></div>
      <dl class="kv small-t mb-3" style="grid-template-columns:110px 1fr"><dt>মোবাইল</dt><dd>${m(o.bd(d.phone || "—"))}</dd><dt>ইনডেক্স</dt><dd>${m(o.bd(d.indexNo || "—"))}</dd><dt>ইমেইল</dt><dd class="text-truncate">${m(d.email || "")}</dd></dl>
      <div class="d-flex gap-2 mt-auto"><button class="btn btn-primary flex-fill" data-ap="${d.uid}">${M("check", "ico-16")} যাচাই ও অনুমোদন</button><button class="btn btn-ghost" data-rj="${d.uid}">বাতিল</button></div></div></div>`,
              )
              .join("")}</div>`
          : `<div class="card-x">${u.empty('নতুন কোনো আবেদন নেই। শিক্ষকরা লগইন পেজের "আবেদন করুন" থেকে আবেদন করলে এখানে দেখাবে', "shield")}</div>`),
        T("[data-ap]", l).forEach((d) => (d.onclick = () => fa(s.find((n) => n.uid === d.dataset.ap)))),
        T("[data-rj]", l).forEach(
          (d) =>
            (d.onclick = async () => {
              const n = s.find((p) => p.uid === d.dataset.rj);
              (await u.confirm(`${m(n.name)}-এর আবেদন বাতিল হবে। তিনি লগইন করতে পারবেন না`, "বাতিল করুন")) &&
                ((n.status = "rejected"), $.save(), vt("approve", `আবেদন বাতিল: ${n.name}`), C());
            }),
        ))
      : zt === "active"
        ? ((l.innerHTML = `<div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>শিক্ষক</th><th>শ্রেণি শিক্ষক</th><th class="hide-m">বাড়তি দায়িত্ব</th><th class="hide-m">নম্বর দেওয়ার বিষয়</th><th class="hide-m">শেষ কাজ</th><th></th></tr></thead><tbody>
      ${
        i.length
          ? i
              .map((d) => {
                const n = Qt(d),
                  p = [...(_().log || [])]
                    .filter((v) => v.by === d.uid)
                    .sort((v, g) => (v.at < g.at ? 1 : -1))[0];
                return `<tr><td><div class="d-flex align-items-center gap-2">${u.avatar(n.name || d.name, n.photo, "sm")}<div><div>${m(n.name || d.name)}</div><div class="muted" style="font-size:12px">${m(d.email || "")}</div></div></div></td>
        <td>${m(ms(se(d.teacherId)))}</td><td class="hide-m">${(d.extra || []).length ? `<span class="tag gold">${m(ms(d.extra))}</span>` : '<span class="muted">—</span>'}</td>
        <td class="hide-m sec small-t">${
          (n.subjects || [])
            .map((v) => {
              var g;
              return (g = $t(v)) == null ? void 0 : g.short;
            })
            .filter(Boolean)
            .join(", ") || "—"
        }</td>
        <td class="hide-m sec small-t">${p ? `${m(te[p.type] || p.type)} · ${o.dateS(p.at.slice(0, 10))}` : "—"}</td>
        <td class="r text-nowrap"><button class="btn btn-ghost btn-sm" data-as="${d.uid}">দায়িত্ব</button> <button class="btn btn-quiet btn-sm" data-off="${d.uid}">বন্ধ করুন</button></td></tr>`;
              })
              .join("")
          : `<tr><td colspan="6">${u.empty("এখনো কোনো সক্রিয় শিক্ষক অ্যাকাউন্ট নেই", "teachers")}</td></tr>`
      }</tbody></table></div></div>
      <div class="hint mt-2">শ্রেণি শিক্ষক বসানো যায় এখান থেকে অথবা সেটিংস → শ্রেণি ও শাখা থেকে। কোনো শ্রেণি শিক্ষক না থাকলে অন্য শিক্ষককে "বাড়তি দায়িত্ব" দিন, তখন ওই শাখার হাজিরা, ফি আর নম্বর তিনিও নিতে পারবেন</div>`),
          T("[data-as]", l).forEach((d) => (d.onclick = () => ba(s.find((n) => n.uid === d.dataset.as)))),
          T("[data-off]", l).forEach(
            (d) =>
              (d.onclick = async () => {
                const n = s.find((p) => p.uid === d.dataset.off);
                (await u.confirm(
                  `${m(Qt(n).name || n.name)}-এর অ্যাকাউন্ট বন্ধ হবে। তিনি আর লগইন করতে পারবেন না, তাঁর আগের কাজের রেকর্ড থেকে যাবে`,
                  "বন্ধ করুন",
                )) &&
                  ((n.status = "disabled"),
                  $.save(),
                  vt("access", `অ্যাকাউন্ট বন্ধ: ${Qt(n).name || n.name}`),
                  C());
              }),
          ))
        : zt === "requests"
          ? ((l.innerHTML = e.length
              ? `<div class="card-x">${e
                  .map(
                    (
                      d,
                    ) => `<div class="list-row click" data-rq="${d.id}">${u.avatar(d.name, ($.find("teachers", d.teacherId) || {}).photo)}
      <div class="flex-grow-1"><div>${m(d.name)}</div><div class="muted small-t">${o.n(Object.keys(d.after || {}).length)}টি তথ্য বদলাতে চান: ${Object.keys(
        d.after || {},
      )
        .map((n) => (Zt.find((p) => p[0] === n) || [n, n === "photo" ? "ছবি" : n])[1])
        .join(", ")}</div></div>
      <span class="muted small-t">${d.at ? o.dateS(d.at.slice(0, 10)) : ""}</span><button class="btn btn-primary btn-sm">যাচাই করুন</button></div>`,
                  )
                  .join("")}</div>`
              : `<div class="card-x">${u.empty("যাচাইয়ের অপেক্ষায় কোনো আবেদন নেই", "check")}</div>`),
            T("[data-rq]", l).forEach(
              (d) => (d.onclick = () => ga(_().requests.find((n) => n.id === d.dataset.rq))),
            ))
          : ((l.innerHTML = `<div class="card-x">${c.length ? c.map((d) => `<div class="list-row">${u.avatar(d.name, d.photo)}<div class="flex-grow-1"><div>${m(Qt(d).name || d.name)}</div><div class="muted small-t">${m(d.email || "")}</div></div><span class="tag ${d.status === "rejected" ? "r" : ""}">${d.status === "rejected" ? "আবেদন বাতিল" : "বন্ধ"}</span><button class="btn btn-ghost btn-sm" data-on="${d.uid}">${d.status === "rejected" ? "আবার যাচাই করুন" : "আবার চালু করুন"}</button><button class="btn btn-quiet btn-sm" style="color:var(--neg)" data-rm="${d.uid}">${M("trash", "ico-16")} অ্যাকাউন্ট মুছুন</button></div>`).join("") : u.empty("কোনো বন্ধ অ্যাকাউন্ট নেই", "check")}</div>
      <div class="hint mt-2">অ্যাকাউন্ট বন্ধ বা মুছে ফেলার পরেই "শিক্ষক ও কর্মচারী" তালিকা থেকে ওই শিক্ষকের তথ্য মোছা যাবে</div>`),
            T("[data-rm]", l).forEach(
              (d) =>
                (d.onclick = async () => {
                  const n = s.find((p) => p.uid === d.dataset.rm);
                  (await u.confirm(
                    `${m(Qt(n).name || n.name)}-এর লগইন অ্যাকাউন্ট স্থায়ীভাবে মুছে যাবে। তিনি আর লগইন করতে পারবেন না। শিক্ষক তালিকার তথ্য ও আগের কাজের রেকর্ড থেকে যাবে`,
                    "অ্যাকাউন্ট মুছুন",
                  )) &&
                    ((n.status = "removed"),
                    (n.removedAt = new Date().toISOString()),
                    $.save(),
                    vt("delete", `শিক্ষক অ্যাকাউন্ট মুছে ফেলা: ${Qt(n).name || n.name} (${n.email || ""})`),
                    C());
                }),
            ),
            T("[data-on]", l).forEach(
              (d) =>
                (d.onclick = () => {
                  const n = s.find((p) => p.uid === d.dataset.on);
                  if (n.status === "rejected" || !n.teacherId) {
                    ((n.status = "pending"), $.save(), (zt = "pending"), C());
                    return;
                  }
                  ((n.status = "active"),
                    $.save(),
                    vt("access", `অ্যাকাউন্ট চালু: ${Qt(n).name}`),
                    u.success("অ্যাকাউন্ট আবার চালু হয়েছে", Qt(n).name),
                    C());
                }),
            ));
  };
  function Es(t, s, e = []) {
    return `<div class="d-flex flex-wrap gap-2">${Gt()
      .map(
        (a) =>
          `<label class="chip-edit" style="padding:0 10px;gap:6px;${e.includes(a) ? "opacity:.45" : ""}"><input type="checkbox" data-${t}="${a}" ${s.includes(a) ? "checked" : ""} ${e.includes(a) ? "disabled" : ""} style="accent-color:var(--primary)"> ${m(Ot(a))}</label>`,
      )
      .join("")}</div>`;
  }
  function Le(t) {
    return `<div class="d-flex flex-wrap gap-2">${[...E().subjects]
      .sort((s, e) => s.code.localeCompare(e.code))
      .map(
        (s) =>
          `<label class="chip-edit" style="padding:0 10px;gap:6px"><input type="checkbox" data-sb="${s.id}" ${t.includes(s.id) ? "checked" : ""} style="accent-color:var(--primary)"> ${m(s.short)}</label>`,
      )
      .join("")}</div>`;
  }
  function va() {
    const t = {};
    return (
      E().classes.forEach((s) =>
        Object.entries(s.teacherBySection || {}).forEach(([e, a]) => {
          a && (t[`${s.id}|${e}`] = a);
        }),
      ),
      t
    );
  }
  function Te(t, s) {
    E().classes.forEach((e) =>
      e.sections.forEach((a) => {
        const i = `${e.id}|${a}`;
        s.includes(i)
          ? (e.teacherBySection[a] = t)
          : e.teacherBySection[a] === t && (e.teacherBySection[a] = "");
      }),
    );
  }
  function fa(t) {
    const s = new Set(
        (_().staff || []).filter((l) => l.teacherId && l.uid !== t.uid).map((l) => l.teacherId),
      ),
      e = $.all("teachers").filter((l) => !s.has(l.id) && l.status !== "left"),
      a = e.find(
        (l) =>
          (l.phone && t.phone && o.en(l.phone).slice(-8) === o.en(t.phone).slice(-8)) ||
          (l.indexNo && l.indexNo === t.indexNo),
      ),
      i = E()
        .subjects.filter((l) => t.subject && (l.name === t.subject || l.name.startsWith(t.subject)))
        .map((l) => l.id),
      c = va();
    u.modal({
      title: "আবেদন যাচাই ও অনুমোদন",
      size: "lg",
      body: `<div class="mb">
      <div class="prof-head mb-3">${u.avatar(t.name, t.photo, "lg")}<div><h2 style="font-size:22px">${m(t.name)}</h2><div class="sec">${m(t.designation || "")}${t.subject ? " · " + m(t.subject) : ""}</div><div class="muted small-t">${m(t.email || "")}</div></div></div>
      <dl class="kv mb-2">${Zt.slice(3)
        .map(
          ([l, d]) =>
            `<dt>${d}</dt><dd>${t[l] ? m(l === "joinDate" ? o.date(t[l]) : o.bd(t[l])) : '<span class="muted">—</span>'}</dd>`,
        )
        .join("")}</dl>
      <div class="fsec">শিক্ষকের রেকর্ড</div>
      <select class="form-select mb-1" id="apLink"><option value="">নতুন রেকর্ড তৈরি হবে (আবেদনের তথ্য দিয়ে)</option>${e.map((l) => `<option value="${l.id}" ${a && a.id === l.id ? "selected" : ""}>আগের রেকর্ডের সাথে যুক্ত করুন: ${m(l.name)} · ${m(l.designation)}</option>`).join("")}</select>
      <div class="hint">শিক্ষক তালিকায় আগে থেকে নাম থাকলে সেটা বাছুন, তাহলে একই মানুষের দুটো রেকর্ড হবে না</div>
      <div class="fsec">শ্রেণি শিক্ষক হিসেবে দায়িত্ব</div>${Es("ct", [])}
      <div class="hint">যে শাখায় আগে অন্য শ্রেণি শিক্ষক আছেন, টিক দিলে সেখানে ইনি শ্রেণি শিক্ষক হবেন। বর্তমান: ${
        Object.keys(c).length
          ? Object.entries(c)
              .map(([l, d]) => `${Ot(l)}: ${Vt(d)}`)
              .join(", ")
          : "কেউ নেই"
      }</div>
      <div class="fsec">বাড়তি দায়িত্ব (অন্য শাখা)</div>${Es("ex", [])}
      <div class="fsec">যে বিষয়গুলোর নম্বর দিতে পারবেন</div>${Le(i)}
    </div>`,
      foot: `<button class="btn btn-ghost" data-close>পরে</button><button class="btn btn-primary" id="apGo">${M("check", "ico-16")} অনুমোদন দিন</button>`,
      onMount: (l, d) =>
        (r("#apGo", l).onclick = () => {
          const n = r("#apLink", l).value,
            p = T("[data-ct]:checked", l).map((b) => b.dataset.ct),
            v = T("[data-ex]:checked", l).map((b) => b.dataset.ex),
            g = T("[data-sb]:checked", l).map((b) => b.dataset.sb);
          let h;
          (n
            ? ((h = $.find("teachers", n)),
              Object.assign(h, {
                phone: h.phone || t.phone,
                indexNo: h.indexNo || t.indexNo,
                photo: h.photo || t.photo || "",
                email: t.email,
                subjects: g,
              }),
              $.upsert("teachers", h))
            : (h = $.upsert("teachers", {
                name: t.name,
                designation: t.designation || "সহকারী শিক্ষক",
                subject: t.subject || "",
                type: "শিক্ষক",
                phone: t.phone || "",
                indexNo: t.indexNo || "",
                nid: t.nid || "",
                qualification: t.qualification || "",
                joinDate: t.joinDate || "",
                address: t.address || "",
                blood: t.blood || "",
                email: t.email || "",
                photo: t.photo || "",
                salary: 0,
                status: "active",
                subjects: g,
              })),
            Te(h.id, p),
            Object.assign(t, {
              status: "active",
              teacherId: h.id,
              extra: v,
              approvedAt: /* @__PURE__ */ new Date().toISOString(),
            }),
            $.save(),
            vt("approve", `শিক্ষক অনুমোদন: ${h.name}${p.length ? " · শ্রেণি শিক্ষক " + ms(p) : ""}`),
            d(),
            u.success("অনুমোদন দেওয়া হয়েছে", `${h.name} এখন লগইন করতে পারবেন`),
            C());
        }),
    });
  }
  function ba(t) {
    const s = Qt(t),
      e = se(t.teacherId);
    u.modal({
      title: `দায়িত্ব: ${s.name || t.name}`,
      size: "lg",
      body: `<div class="mb"><div class="fsec">শ্রেণি শিক্ষক</div>${Es("ct", e)}
      <div class="fsec">বাড়তি দায়িত্ব</div>${Es("ex", t.extra || [], e)}
      <div class="hint">যেদিন শ্রেণি শিক্ষক অনুপস্থিত, সেদিনের জন্য অন্য শিক্ষককে এখানে শাখা দিন। কাজ শেষে টিক তুলে দিলেই অনুমতি চলে যাবে</div>
      <div class="fsec">যে বিষয়গুলোর নম্বর দিতে পারবেন</div>${Le(s.subjects || [])}</div>`,
      foot: '<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="acGo">সংরক্ষণ</button>',
      onMount: (a, i) =>
        (r("#acGo", a).onclick = () => {
          const c = T("[data-ct]:checked", a).map((d) => d.dataset.ct),
            l = T("[data-ex]:checked", a)
              .map((d) => d.dataset.ex)
              .filter((d) => !c.includes(d));
          (Te(t.teacherId, c),
            (t.extra = l),
            (s.subjects = T("[data-sb]:checked", a).map((d) => d.dataset.sb)),
            $.upsert("teachers", s),
            $.save(),
            vt(
              "access",
              `দায়িত্ব বদল: ${s.name} · শ্রেণি শিক্ষক ${ms(c)}${l.length ? " · বাড়তি " + ms(l) : ""}`,
            ),
            notifyTeacher(
              t.teacherId,
              "আপনার দায়িত্ব পরিবর্তন করা হয়েছে",
              `শ্রেণি শিক্ষক: ${ms(c)}${l.length ? " · বাড়তি দায়িত্ব: " + ms(l) : ""}`,
            ),
            i(),
            u.success("দায়িত্ব হালনাগাদ হয়েছে", s.name),
            C());
        }),
    });
  }
  function ga(t) {
    const s = $.find("teachers", t.teacherId) || {},
      e = Object.keys(t.after || {})
        .map((a) => {
          const i = a === "photo" ? "ছবি" : (Zt.find((l) => l[0] === a) || [a, a])[1],
            c = (l) =>
              a === "photo"
                ? l
                  ? `<img src="${l}" style="width:56px;height:56px;border-radius:12px;object-fit:cover">`
                  : "—"
                : m(a === "joinDate" && l ? o.date(l) : o.bd(l || "—"));
          return `<tr><td class="sec">${i}</td><td>${a === "photo" ? c((t.before || {})[a]) : `<span class="diff-old">${c((t.before || {})[a])}</span>`}</td><td>${a === "photo" ? c(t.after[a]) : `<span class="diff-new">${c(t.after[a])}</span>`}</td></tr>`;
        })
        .join("");
    u.modal({
      title: "তথ্য বদলের আবেদন যাচাই",
      size: "lg",
      body: `<div class="mb"><div class="d-flex align-items-center gap-3 mb-3">${u.avatar(s.name, s.photo)}<div><b>${m(t.name)}</b><div class="muted small-t">আবেদন: ${t.at ? o.date(t.at.slice(0, 10)) : ""}</div></div></div>
      <table class="tbl dense"><thead><tr><th>তথ্য</th><th>আগে ছিল</th><th>এখন চাইছেন</th></tr></thead><tbody>${e}</tbody></table>
      ${t.note ? `<p class="sec small-t mt-3 mb-0">শিক্ষকের মন্তব্য: ${m(t.note)}</p>` : ""}</div>`,
      foot: `<button class="btn btn-ghost me-auto" style="color:var(--neg)" id="rqNo">বাতিল করুন</button><button class="btn btn-ghost" data-close>পরে</button><button class="btn btn-primary" id="rqOk">${M("check", "ico-16")} অনুমোদন দিন</button>`,
      onMount: (a, i) => {
        ((r("#rqOk", a).onclick = () => {
          (s.id && (Object.assign(s, t.after), $.upsert("teachers", s)),
            Object.assign(t, { status: "approved", doneAt: /* @__PURE__ */ new Date().toISOString() }),
            $.save(),
            vt("approve", `তথ্য বদল অনুমোদন: ${t.name}`),
            notifyTeacher(t.teacherId, "আপনার তথ্য বদলের আবেদন অনুমোদিত হয়েছে", ""),
            i(),
            u.success("তথ্য হালনাগাদ হয়েছে", t.name),
            C());
        }),
          (r("#rqNo", a).onclick = () => {
            (Object.assign(t, { status: "rejected", doneAt: /* @__PURE__ */ new Date().toISOString() }),
              $.save(),
              vt("approve", `তথ্য বদল বাতিল: ${t.name}`),
              notifyTeacher(t.teacherId, "আপনার তথ্য বদলের আবেদন গ্রহণ করা হয়নি", ""),
              i(),
              C());
          }));
      },
    });
  }
  const tb = { q: "", col: "" };
  dt.trash = (t) => {
    ct("রিসাইকেল বিন", "মুছে ফেলা জিনিস এখান থেকে ফিরিয়ে আনা যায়");
    const all = [...(_().trash || [])].sort((a, b) => (a.at < b.at ? 1 : -1)),
      cols = [...new Set(all.map((a) => a.col))];
    t.innerHTML = `<div class="toolbar"><div class="input-ico grow">${M("search")}<input class="form-control" id="trq" placeholder="নাম বা বিবরণ" value="${m(tb.q)}"></div>
    <select class="form-select" id="trc"><option value="">সব ধরন</option>${cols.map((c) => `<option value="${c}" ${c === tb.col ? "selected" : ""}>${m(TRASH_KIND[c] || c)}</option>`).join("")}</select>
    <span class="ms-auto muted small-t" id="trn"></span>${all.length ? `<button class="btn btn-quiet btn-sm" style="color:var(--neg)" id="trAll">${M("trash", "ico-16")} সব স্থায়ীভাবে মুছুন</button>` : ""}</div>
    <div class="card-x"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>কী</th><th>বিবরণ</th><th class="hide-m">কে মুছেছেন</th><th>কখন</th><th></th></tr></thead><tbody id="trb"></tbody></table></div></div>
    <div class="hint mt-2">শিক্ষার্থী, শিক্ষক, রসিদ, পরীক্ষা (নম্বরসহ), নোটিশ, বই বা হিসাব মুছলে এখানে জমা থাকে। "ফিরিয়ে আনুন" চাপলে আগের জায়গায় ফিরে যাবে</div>`;
    const draw = () => {
      const q = o.en(tb.q).toLowerCase(),
        list = all.filter(
          (a) => (!tb.col || a.col === tb.col) && (!q || String(a.label || "").toLowerCase().includes(q)),
        );
      ((r("#trn").textContent = o.n(list.length) + "টি"),
        (r("#trb").innerHTML = list.length
          ? list
              .map(
                (a) => `<tr><td><span class="tag">${m(TRASH_KIND[a.col] || a.col)}</span></td><td>${a.col === "students" && a.data ? `<div class="d-flex align-items-center gap-2">${u.avatar(a.data.nameBn, a.data.photo, "sm", a.data.gender)}<span>${m(o.bd(a.label))}</span></div>` : m(o.bd(a.label))}</td>
          <td class="hide-m sec">${m(a.bn || "")} ${a.role === "admin" ? '<span class="tag gold">অ্যাডমিন</span>' : ""}</td>
          <td class="sec text-nowrap small-t">${o.dateS(a.at.slice(0, 10))}, ${o.time(a.at.slice(11, 16))}</td>
          <td class="r text-nowrap"><button class="btn btn-ghost btn-sm" data-rs="${a.id}">${M("arrowLeft", "ico-16")} ফিরিয়ে আনুন</button> <button class="btn btn-quiet btn-sm btn-icon" data-pd="${a.id}" aria-label="স্থায়ীভাবে মুছুন">${M("x", "ico-16")}</button></td></tr>`,
              )
              .join("")
          : `<tr><td colspan="5">${u.empty("রিসাইকেল বিন খালি", "trash")}</td></tr>`),
        T("[data-rs]", t).forEach(
          (b) =>
            (b.onclick = () => {
              const a = all.find((x) => x.id === b.dataset.rs);
              a && restoreTrash(a) && (u.success("ফিরিয়ে আনা হয়েছে", o.bd(a.label)), C());
            }),
        ),
        T("[data-pd]", t).forEach(
          (b) =>
            (b.onclick = async () => {
              const a = all.find((x) => x.id === b.dataset.pd);
              a &&
                (await u.confirm(`"${m(o.bd(a.label))}" স্থায়ীভাবে মুছে যাবে, আর ফেরানো যাবে না`, "স্থায়ীভাবে মুছুন")) &&
                ($.remove("trash", a.id), vt("delete", `রিসাইকেল বিন থেকে স্থায়ীভাবে মোছা: ${a.label}`), C());
            }),
        ));
    };
    ((r("#trq").oninput = (e) => {
      ((tb.q = e.target.value), draw());
    }),
      (r("#trc").onchange = (e) => {
        ((tb.col = e.target.value), draw());
      }),
      r("#trAll") &&
        (r("#trAll").onclick = async () => {
          (await u.confirm(`রিসাইকেল বিনের ${o.n(all.length)}টি জিনিস স্থায়ীভাবে মুছে যাবে, আর ফেরানো যাবে না`, "সব মুছুন")) &&
            (all.forEach((a) => $.remove("trash", a.id)),
            vt("delete", `রিসাইকেল বিন খালি করা হয়েছে (${o.n(all.length)}টি)`),
            C());
        }),
      draw());
  };
  const pt = { who: "", type: "", from: "", to: "" };
  ((dt.activity = (t) => {
    ((pt.from = pt.from || o.iso(new Date(Date.now() - 6 * 864e5))),
      (pt.to = pt.to || G()),
      ct("কার্যক্রম", "কে কখন কী করেছেন"));
    const s = [...(_().log || [])].sort((d, n) => (d.at < n.at ? 1 : -1)),
      e = [...new Map(s.map((d) => [d.by, d.bn])).entries()],
      a = s.filter(
        (d) =>
          (!pt.who || d.by === pt.who) &&
          (!pt.type || d.type === pt.type) &&
          d.at.slice(0, 10) >= pt.from &&
          d.at.slice(0, 10) <= pt.to,
      ),
      i = G(),
      c = {};
    $.all("payments")
      .filter((d) => d.date === i)
      .forEach((d) => {
        const n = d.bn || "অ্যাডমিন";
        c[n] = (c[n] || 0) + d.total;
      });
    const l = Object.entries(_().attendance)
      .filter(([d]) => d.startsWith(i + "|"))
      .map(([d]) => ({
        k: d.split("|").slice(1).join("|"),
        by: ((_().attLog || {})[d] || {}).bn || "অ্যাডমিন",
      }));
    ((t.innerHTML = `<div class="row g-3 mb-3">
    <div class="col-lg-6"><div class="card-x h-100"><div class="card-head"><h3>আজ কে কত ফি আদায় করেছেন</h3></div>${
      Object.keys(c).length
        ? Object.entries(c)
            .sort((d, n) => n[1] - d[1])
            .map(
              ([d, n]) =>
                `<div class="list-row"><span class="flex-grow-1">${m(d)}</span><b class="num">${o.tk(n)}</b></div>`,
            )
            .join("")
        : u.empty("আজ এখনো কোনো ফি আদায় হয়নি", "fee")
    }</div></div>
    <div class="col-lg-6"><div class="card-x h-100"><div class="card-head"><h3>আজকের হাজিরা কে নিয়েছেন</h3><span class="right">${o.n(l.length)}/${o.n(Gt().length)} শাখা</span></div>${l.length ? `<div class="card-pad d-flex flex-wrap gap-2">${l.map((d) => `<span class="tag b">${m(Ot(d.k))}: ${m(d.by)}</span>`).join("")}</div>` : u.empty("আজ এখনো কোনো হাজিরা নেওয়া হয়নি", "attendance")}</div></div></div>
  <div class="toolbar"><select class="form-select" id="aw"><option value="">সবাই</option>${e.map(([d, n]) => `<option value="${m(d)}" ${d === pt.who ? "selected" : ""}>${m(n)}</option>`).join("")}</select>
    <select class="form-select" id="at"><option value="">সব কাজ</option>${Object.entries(te)
      .map(([d, n]) => `<option value="${d}" ${d === pt.type ? "selected" : ""}>${n}</option>`)
      .join("")}</select>
    <input type="date" class="form-control" id="af" value="${pt.from}"><input type="date" class="form-control" id="ato" value="${pt.to}"><span class="ms-auto muted small-t">${o.n(a.length)}টি কাজ</span></div>
  <div class="card-x"><div class="tbl-wrap"><table class="tbl dense"><thead><tr><th>সময়</th><th>কে</th><th>কাজ</th><th>বিবরণ</th></tr></thead><tbody>
  ${
    a.length
      ? a
          .slice(0, 500)
          .map(
            (d) =>
              `<tr><td class="sec text-nowrap small-t">${o.dateS(d.at.slice(0, 10))}, ${o.time(d.at.slice(11, 16))}</td><td class="text-nowrap">${m(d.bn)} ${d.role === "admin" ? '<span class="tag gold">অ্যাডমিন</span>' : ""}</td><td><span class="tag">${m(te[d.type] || d.type)}</span></td><td class="sec">${m(o.bd(d.text))}</td></tr>`,
          )
          .join("")
      : `<tr><td colspan="4">${u.empty("এই সময়ে কোনো কাজের রেকর্ড নেই", "list")}</td></tr>`
  }
  </tbody></table></div></div>`),
      (r("#aw").onchange = (d) => {
        ((pt.who = d.target.value), C());
      }),
      (r("#at").onchange = (d) => {
        ((pt.type = d.target.value), C());
      }),
      (r("#af").onchange = (d) => {
        ((pt.from = d.target.value), C());
      }),
      (r("#ato").onchange = (d) => {
        ((pt.to = d.target.value), C());
      }));
  }),
    (dt.profile = (t) => {
      const s = $.find("teachers", J.teacherId) || {},
        e = [...(_().requests || [])].filter((i) => i.uid === J.uid).sort((i, c) => (i.at < c.at ? 1 : -1)),
        a = e.find((i) => i.status === "pending");
      (ct("আমার প্রোফাইল"),
        (t.innerHTML = `<div class="row g-3"><div class="col-xl-8"><div class="card-x card-pad">
      <div class="prof-head mb-4">${u.avatar(s.name, s.photo, "lg")}<div><h2 style="font-size:24px">${m(s.name || J.name)}</h2><div class="sec">${m(s.designation || "")}${s.subject ? " · " + m(s.subject) : ""}</div><div class="muted small-t">${m(J.email)}</div></div>
        <button class="btn btn-primary ms-auto" id="chg" ${a ? "disabled" : ""}>${M("edit", "ico-16")} তথ্য বদলের আবেদন</button></div>
      ${a ? `<div class="card-x card-pad mb-3" style="background:var(--warn-soft);border-color:transparent">${M("clock", "ico-16")} আপনার একটি তথ্য বদলের আবেদন প্রধান শিক্ষকের যাচাইয়ের অপেক্ষায় আছে</div>` : ""}
      <dl class="kv">${Zt.slice(1)
        .map(
          ([i, c]) =>
            `<dt>${c}</dt><dd>${s[i] ? m(i === "joinDate" ? o.date(s[i]) : o.bd(s[i])) : '<span class="muted">—</span>'}</dd>`,
        )
        .join("")}</dl></div>
      ${
        e.length
          ? `<div class="card-x mt-3"><div class="card-head"><h3>আমার আবেদনগুলো</h3></div>${e
              .map(
                (i) =>
                  `<div class="list-row"><span class="flex-grow-1 small-t">${Object.keys(i.after || {})
                    .map((c) => (Zt.find((l) => l[0] === c) || [c, c === "photo" ? "ছবি" : c])[1])
                    .join(
                      ", ",
                    )}</span><span class="muted small-t">${i.at ? o.dateS(i.at.slice(0, 10)) : ""}</span><span class="tag ${i.status === "approved" ? "g" : i.status === "rejected" ? "r" : "y"}">${{ approved: "অনুমোদিত", rejected: "বাতিল", pending: "অপেক্ষায়" }[i.status]}</span></div>`,
              )
              .join("")}</div>`
          : ""
      }
    </div>
    <div class="col-xl-4"><div class="card-x card-pad mb-3"><h3 style="font-size:15px" class="mb-2">আমার দায়িত্ব</h3>
      <div class="muted small-t mb-1">শ্রেণি ও শাখা</div><div class="d-flex flex-wrap gap-1 mb-3">${
        Bt().length
          ? Bt()
              .map((i) => `<span class="tag b">${m(Ot(i))}</span>`)
              .join("")
          : '<span class="muted small-t">এখনো দেওয়া হয়নি</span>'
      }</div>
      <div class="muted small-t mb-1">যে বিষয়ের নম্বর দিতে পারেন</div><div class="d-flex flex-wrap gap-1">${
        J.subjects.length
          ? J.subjects
              .map((i) => {
                var c;
                return `<span class="tag">${m(((c = $t(i)) == null ? void 0 : c.short) || "")}</span>`;
              })
              .join("")
          : '<span class="muted small-t">—</span>'
      }</div></div>
      <div class="card-x card-pad">${$.mode === "live" ? `<h3 style="font-size:15px" class="mb-3">পাসওয়ার্ড বদলান</h3><form id="pwf"><input class="form-control mb-2" type="password" name="o" placeholder="বর্তমান পাসওয়ার্ড" required autocomplete="current-password"><input class="form-control mb-2" type="password" name="n" placeholder="নতুন পাসওয়ার্ড" minlength="6" required autocomplete="new-password"><button class="btn btn-ghost w-100">${M("lock", "ico-16")} বদলান</button><div class="err" id="pwe"></div></form>` : '<div class="sec small-t">ডেমোতে পাসওয়ার্ড বদলানো যায় না</div>'}
      <label class="switch mt-3"><input type="checkbox" id="thm" ${E().theme === "dark" ? "checked" : ""}> ডার্ক মোড</label></div></div></div>`),
        r("#pwf") &&
          (r("#pwf").onsubmit = async (i) => {
            i.preventDefault();
            const c = u.formData(i.target);
            u.busy(true, "বদলানো হচ্ছে…");
            try {
              (await at.changePassword(c.o, c.n),
                u.busy(false),
                i.target.reset(),
                u.success("পাসওয়ার্ড বদলানো হয়েছে"));
            } catch (l) {
              (u.busy(false), (r("#pwe").textContent = Ct(l)));
            }
          }),
        (r("#thm").onchange = (i) => {
          ((E().theme = i.target.checked ? "dark" : "light"), Fs());
        }),
        (r("#chg").onclick = () => {
          let i = s.photo || "";
          u.modal({
            title: "তথ্য বদলের আবেদন",
            size: "lg",
            body: `<form class="mb" id="pcf"><p class="sec small-t">যে তথ্য বদলাতে চান শুধু সেটা বদলান। প্রধান শিক্ষক আগের আর নতুন তথ্য মিলিয়ে দেখে অনুমোদন দিলে তবেই বদলাবে</p>
        <div class="photo-pick mb-3"><span id="pcv">${u.avatar(s.name, i, "lg")}</span><label class="btn btn-ghost mb-0">${M("upload", "ico-16")} নতুন ছবি<input type="file" accept="image/*" id="pcp" hidden></label></div>
        <div class="row g-3">${Zt.map(([c, l]) => u.inp(c, l, s[c], c === "joinDate" ? 'type="date"' : "", c === "address" || c === "name" ? "col-12" : "col-md-6")).join("")}
        ${u.inp("note", "মন্তব্য (কেন বদলাতে চান)", "", "", "col-12")}</div></form>`,
            foot: '<button class="btn btn-ghost" data-close>বাতিল</button><button class="btn btn-primary" id="pcGo">আবেদন পাঠান</button>',
            onMount: (c, l) => {
              ((r("#pcp", c).onchange = async (d) => {
                const n = d.target.files[0];
                n && ((i = await u.readImage(n, 320)), (r("#pcv", c).innerHTML = u.avatar("", i, "lg")));
              }),
                (r("#pcGo", c).onclick = () => {
                  const d = u.formData(r("#pcf", c)),
                    n = {},
                    p = {};
                  if (
                    (Zt.forEach(([v]) => {
                      (d[v] || "") !== (s[v] || "") && ((n[v] = s[v] || ""), (p[v] = d[v]));
                    }),
                    i !== (s.photo || "") && ((n.photo = s.photo || ""), (p.photo = i)),
                    !Object.keys(p).length)
                  )
                    return u.toast("কোনো তথ্য বদলানো হয়নি", "warn");
                  ($.upsert("requests", {
                    uid: J.uid,
                    teacherId: J.teacherId,
                    name: s.name || J.name,
                    before: n,
                    after: p,
                    note: d.note,
                    status: "pending",
                    at: /* @__PURE__ */ new Date().toISOString(),
                  }),
                    vt("request", `তথ্য বদলের আবেদন: ${Object.keys(p).length}টি তথ্য`),
                    l(),
                    u.success("আবেদন পাঠানো হয়েছে", "প্রধান শিক্ষক যাচাই করে অনুমোদন দেবেন"),
                    C());
                }));
            },
          });
        }));
    }));
  function $a(t) {
    const s = G(),
      e = Bt(),
      a = $.find("teachers", J.teacherId) || {};
    ct("ড্যাশবোর্ড");
    const i = e.filter((h) => $.getAtt(s, ...h.split("|"))),
      c = $.all("payments")
        .filter((h) => h.by === J.uid && h.date === s)
        .reduce((h, b) => h + b.total, 0),
      l = ht().filter((h) => kt(h.classId, h.section)),
      d = l.reduce((h, b) => h + Yt(b).amount, 0),
      n = /* @__PURE__ */ new Date().getDay(),
      p = E().periods.filter((h) => !h.brk),
      v = [];
    (Object.entries(_().routine).forEach(([h, b]) =>
      p.forEach((k) => {
        const y = b[n] && b[n][k.id];
        y && y.teacherId === J.teacherId && v.push({ p: k, k: h, s: $t(y.subjectId) });
      }),
    ),
      v.sort((h, b) => (h.p.start < b.p.start ? -1 : 1)));
    const g = se(J.teacherId);
    ((t.innerHTML = `<div class="today mb-3">
    <div class="date">${o.day(s)}, ${o.date(s)}</div><h2>${m(a.name || J.name)}</h2>
    <div class="k stagger">
      <div><div class="l">আমার শাখা</div><div class="v num">${o.n(e.length)}</div><div class="s">${m(ms(e))}</div></div>
      <div><div class="l">আজ হাজিরা বাকি</div><div class="v num ${e.length - i.length ? "gold" : ""}">${wt(s) ? "—" : o.n(e.length - i.length)}</div><div class="s">${wt(s) ? "আজ সাপ্তাহিক ছুটি" : `${o.n(i.length)}টি শাখায় নেওয়া হয়েছে`}</div></div>
      <div><div class="l">আজ আমার আদায়</div><div class="v num" data-to="${c}" data-f="tk">০</div><div class="s">আমার দেওয়া রসিদ</div></div>
      <div><div class="l">আমার শাখার বকেয়া</div><div class="v num gold" data-to="${d}" data-f="tk">০</div><div class="s">${o.n(l.length)} জন শিক্ষার্থী</div></div>
    </div>
    <div class="qa"><a class="btn btn-gold" href="#attendance">${M("attendance", "ico-16")} উপস্থিতি নিন</a><button class="btn" id="tFee">${M("fee", "ico-16")} ফি জমা নিন</button><button class="btn" id="tAdd">${M("plus", "ico-16")} নতুন ভর্তি</button><a class="btn" href="#exams">${M("exam", "ico-16")} নম্বর দিন</a></div>
  </div>
  <div class="row g-3">
    <div class="col-xl-7"><div class="card-x h-100"><div class="card-head"><h3>আমার শাখাগুলো</h3></div>
      ${
        e.length
          ? e
              .map((h) => {
                const [b, k] = h.split("|"),
                  y = ht().filter((I) => I.classId === b && I.section === k).length,
                  f = $.getAtt(s, b, k),
                  x = f ? Object.values(f).filter((I) => I === "A").length : 0;
                return `<div class="list-row"><div class="date-chip" style="width:52px"><b>${m(it(b))}</b><span>${m(k)} শাখা</span></div><div class="flex-grow-1"><div>${m(gt(b))}, ${m(k)} শাখা ${g.includes(h) ? '<span class="tag b">শ্রেণি শিক্ষক</span>' : '<span class="tag gold">বাড়তি দায়িত্ব</span>'}</div><div class="muted small-t">${o.n(y)} জন শিক্ষার্থী</div></div>
          ${f ? `<span class="tag g">${M("check", "ico-16")} হাজিরা হয়েছে · অনুপস্থিত ${o.n(x)}</span>` : wt(s) ? '<span class="tag">ছুটি</span>' : `<button class="btn btn-primary btn-sm" data-att="${h}">হাজিরা নিন</button>`}</div>`;
              })
              .join("")
          : u.empty("প্রধান শিক্ষক এখনো আপনাকে কোনো শাখার দায়িত্ব দেননি", "layers")
      }</div></div>
    <div class="col-xl-5"><div class="card-x mb-3"><div class="card-head"><h3>আজ আমার ক্লাস</h3><span class="right">${Xt[n]}</span></div>
      ${v.length ? v.map((h) => `<div class="list-row"><span class="num sec small-t" style="width:92px">${o.time(h.p.start)}–${o.time(h.p.end)}</span><span class="flex-grow-1">${m(h.s ? h.s.name : "")}</span><span class="tag">${m(Ot(h.k))}</span></div>`).join("") : u.empty(wt(s) ? "আজ ক্লাস নেই" : "আজ রুটিনে আপনার কোনো ক্লাস নেই", "routine")}</div>
      <div class="card-x"><div class="card-head"><h3>নোটিশ</h3><a class="right" href="#notices">সব দেখুন</a></div>${
        [...$.all("notices")]
          .sort((h, b) => b.pinned - h.pinned || (h.date < b.date ? 1 : -1))
          .slice(0, 4)
          .map(
            (h) =>
              `<div class="list-row"><div class="date-chip"><b class="num">${o.bd(+h.date.slice(8))}</b><span>${o.monS(h.date.slice(0, 7))}</span></div><div class="flex-grow-1 text-truncate">${m(h.title)}</div></div>`,
          )
          .join("") || u.empty("কোনো নোটিশ নেই", "notice")
      }</div></div>
  </div>`),
      T("[data-to]", t).forEach((h) => u.tween(h, +h.dataset.to)),
      (r("#tFee").onclick = () => Ss()),
      (r("#tAdd").onclick = () => admitStart()),
      T("[data-att]", t).forEach(
        (h) =>
          (h.onclick = () => {
            (([H.cls, H.sec] = h.dataset.att.split("|")),
              (H.date = G()),
              (as = "take"),
              (location.hash = "attendance"));
          }),
      ));
  }
  Ht();
})();
