(() => { (() => { var e = { 728: () => { const e = document.querySelectorAll(".__btn"); if (e.length > 0) for (const t of e) t.addEventListener("mouseenter", (e => { let l = document.createElement("div"); l.className = "__btnBubble"; let o = t.getBoundingClientRect(), n = e.pageY - o.top - document.documentElement.scrollTop - 5, s = e.pageX - o.left - 5; l.style.top = n + "px", l.style.left = s + "px", t.append(l), t.addEventListener("mouseleave", (e => { setTimeout((() => { l.remove() }), 2e3) })) })) }, 316: () => { const e = document.querySelectorAll(".switch__input"); for (const t of e) t.addEventListener("click", (e => { t.checked ? (t.previousElementSibling.classList.remove("__active"), t.nextElementSibling.classList.add("__active")) : (t.previousElementSibling.classList.add("__active"), t.nextElementSibling.classList.remove("__active")) })) }, 469: () => { const e = document.querySelectorAll(".__textarea"); if (e.length > 0) for (const t of e) { let e = t.querySelector(".__textarea__count"), l = t.querySelector("textarea").value, o = 1200; t.addEventListener("input", (() => { l = t.querySelector("textarea").value, e.innerText = o - l.length })) } }, 23: () => { window.addEventListener("load", (() => { const e = document.querySelectorAll(".popup__link"), t = document.querySelector("body"), l = document.querySelectorAll(".fixed-block"), o = document.querySelector("#kviz"); let n = !0; const s = 400; let c, i, r = document.querySelectorAll(".kviz__tab"); if (r.length > 0) { let e = document.querySelectorAll(".kviz__btn"), t = document.querySelectorAll(".kviz__switch"); for (let l = 0; l < r.length; l++) { let o = r[l], n = o.querySelectorAll(".radio__input"); for (const e of n) e.addEventListener("click", (() => { e.classList.contains("__otherkviz") && 1 == e.checked ? (console.log(o.querySelector("textarea")), o.querySelector("textarea").parentElement.classList.add("__show")) : o.querySelectorAll("textarea").length > 0 && o.querySelector("textarea").parentElement.classList.remove("__show") })); l < r.length - 1 && e[l].addEventListener("click", (() => { let e = document.querySelector(".kviz__tab.__active"); e.classList.remove("__active"), e.nextElementSibling.classList.add("__active") })), l < r.length - 2 && t[l].addEventListener("click", (() => { let e = document.querySelector(".kviz__tab.__active"); e.classList.remove("__active"), e.previousElementSibling.classList.add("__active") })) } } if (setTimeout((() => { o.classList.add("open"), m() }), 9e4), e.length > 0) for (let t = 0; t < e.length; t++) { const l = e[t]; l.addEventListener("click", (function (e) { l.classList.contains("__colorParent") && (c = l.getAttribute("data-color"), i = "color--" + c); const t = l.getAttribute("data-popupId"); a(document.getElementById(t)), e.preventDefault() })) } const d = document.querySelectorAll(".close__popup"); if (d.length > 0) for (let e = 0; e < d.length; e++) { const t = d[e]; t.addEventListener("click", (function (e) { u(t.closest(".popup")), e.preventDefault() })) } function a(e) { if (e && n) { const t = document.querySelector(".popup.open"); t ? u(t, !1) : m(), null != c && e.classList.add(i), e.classList.add("open"), e.addEventListener("click", (function (e) { e.target.closest(".popup__content") || u(e.target.closest(".popup")) })) } } function u(e) { let r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; n && (e.classList.remove("open"), e.classList.remove(i), c = null, i = null, r && (setTimeout((() => { for (let e = 0; e < l.length; e++)l[e].style.paddingRight = "0px"; t.style.paddingRight = "0px", t.classList.remove("lock") }), s), n = !1, setTimeout((function () { n = !0 }), s)), e.classList.contains("popupkviz") && setTimeout((() => { o.classList.add("open"), m() }), 15e4)) } function m() { const e = window.innerWidth - document.querySelector(".page").offsetWidth + "px"; if (l.length > 0) for (let t = 0; t < l.length; t++)l[t].style.paddingRight = e; t.style.paddingRight = e, t.classList.add("lock"), n = !1, setTimeout((function () { n = !0 }), s) } document.addEventListener("keydown", (function (e) { 27 === e.which && u(document.querySelector(".popup.open")) })), Element.prototype.closest || (Element.prototype.closest = function (e) { let t = this; for (; t;) { if (t.matches(e)) return t; t = t.parentElement } return null }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector) })) }, 95: () => { window.addEventListener("DOMContentLoaded", (function () { [].forEach.call(document.querySelectorAll(".__tel"), (function (e) { var t; function l(e) { e.keyCode && (t = e.keyCode), this.selectionStart < 1 && e.preventDefault(); var l = "+_ (___) ___-__-__", o = 0, n = l.replace(/\D/g, ""), s = this.value.replace(/\D/g, ""), c = l.replace(/[_\d]/g, (function (e) { return o < s.length ? s.charAt(o++) || n.charAt(o) : e })); -1 != (o = c.indexOf("_")) && (o < 1 && (o = 15), c = c.slice(0, o)); var i = l.substr(0, this.value.length).replace(/_+/g, (function (e) { return "\\d{1," + e.length + "}" })).replace(/[+()]/g, "\\$&"); (!(i = new RegExp("^" + i + "$")).test(this.value) || this.value.length <= 0 || t > 47 && t < 58) && (this.value = c), "blur" == e.type && this.value.length <= 1 && (this.value = "") } e.addEventListener("input", l, !1), e.addEventListener("focus", l, !1), e.addEventListener("blur", l, !1), e.addEventListener("keydown", l, !1) })) })) }, 669: () => { let e = document.querySelectorAll("._anim-items"); if (e.length > 0) { function t() { for (let t = 0; t < e.length; t++) { const o = e[t], n = o.offsetHeight, s = l(o).top, c = 2; let i = window.innerHeight - n / c; n > window.innerHeight && (i = window.innerHeight - window.innerHeight / c), pageYOffset > s - i && pageYOffset < s + n ? o.classList.add("_active") : o.classList.contains("_anim-no-hide") || o.classList.remove("_active") } } function l(e) { const t = e.getBoundingClientRect(), l = window.pageXOffset || document.documentElement.scrollLeft, o = window.pageYOffset || document.documentElement.scrollTop; return { top: t.top + o, left: t.left + l } } window.addEventListener("scroll", t), setTimeout((() => { t() }), 1700); const o = document.querySelectorAll(".allprojects__btn"); if (o.length > 0) for (const n of o) { let s = document.querySelector(".proects__list"); n.addEventListener("click", (e => { if (s.classList.toggle("__showAll")) n.lastElementChild.innerText = "Скрыть", n.firstElementChild.style.display = "none", t(); else { let e, t = document.querySelectorAll("._anim-items._active"); for (e = document.documentElement.scrollWidth >= 476 ? 10 : 5; e < t.length; e++)t[e].classList.remove("_active"); n.lastElementChild.innerText = "Показать еще проекты", n.firstElementChild.style.display = "flex" } })) } } } }, t = {}; function l(o) { var n = t[o]; if (void 0 !== n) return n.exports; var s = t[o] = { exports: {} }; return e[o](s, s.exports, l), s.exports } (() => { "use strict"; l(669), l(95); const e = { windowEl: window, documentEl: document, htmlEl: document.documentElement, bodyEl: document.body }; l(316); const t = document.querySelector(".burger"), o = document.querySelector(".nav"); t.addEventListener("click", (l => { t.classList.toggle("__remove") ? (o.classList.add("__show"), (() => { var t; const l = null === (t = document) || void 0 === t ? void 0 : t.querySelectorAll(".fixed-block"), o = window.scrollY, n = window.innerWidth - e.bodyEl.offsetWidth + "px"; e.htmlEl.style.scrollBehavior = "none", l.forEach((e => { e.classList.add("fix") })), e.bodyEl.style.paddingRight = n, e.bodyEl.classList.add("dis-scroll"), e.bodyEl.dataset.position = o, e.bodyEl.style.top = `-${o}px` })()) : (o.classList.remove("__show"), (() => { var t; const l = null === (t = document) || void 0 === t ? void 0 : t.querySelectorAll(".fixed-block"), o = (document.body, parseInt(e.bodyEl.dataset.position, 10)); l.forEach((e => { e.classList.remove("fix") })), e.bodyEl.style.paddingRight = "0px", e.bodyEl.style.top = "auto", e.bodyEl.classList.remove("dis-scroll"), window.scroll({ top: o, left: 0 }), e.bodyEl.removeAttribute("data-position") })()) })); const n = document.querySelector(".header"); window.addEventListener("scroll", (e => { let t = document.documentElement.scrollWidth, l = window.pageYOffset; n.classList.contains("fix") || (t > 993 ? l >= 27 ? n.classList.add("__blur") : n.classList.remove("__blur") : t > 476 ? l >= 14 ? n.classList.add("__blur") : n.classList.remove("__blur") : l >= 10 ? n.classList.add("__blur") : n.classList.remove("__blur")) }), { passive: !0 }), l(728), l(469), l(23) })() })(); const e = document.querySelectorAll(".__scrollContact"); for (let t of e) t.addEventListener("click", (function (e) { e.preventDefault(); const l = t.getAttribute("href").substr(1); document.getElementById(l).scrollIntoView({ behavior: "smooth", block: "start" }) })) })();