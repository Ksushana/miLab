 - < ![CDATA[! function(t, n) {
     "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).__SVGATOR_PLAYER__ = n()
 }(this, (function() {
     "use strict";

     function t(n) {
         return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
             return typeof t
         } : function(t) {
             return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
         })(n)
     }

     function n(t, n) {
         if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
     }

     function r(t, n) {
         for (var r = 0; r < n.length; r++) {
             var e = n[r];
             e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
         }
     }

     function e(t, n, e) {
         return n && r(t.prototype, n), e && r(t, e), t
     }

     function i(t) {
         return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
             return t.__proto__ || Object.getPrototypeOf(t)
         })(t)
     }

     function o(t, n) {
         return (o = Object.setPrototypeOf || function(t, n) {
             return t.__proto__ = n, t
         })(t, n)
     }

     function u(t, n) {
         return !n || "object" != typeof n && "function" != typeof n ? function(t) {
             if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
             return t
         }(t) : n
     }

     function a(t) {
         var n = function() {
             if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
             if (Reflect.construct.sham) return !1;
             if ("function" == typeof Proxy) return !0;
             try {
                 return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
             } catch (t) {
                 return !1
             }
         }();
         return function() {
             var r, e = i(t);
             if (n) {
                 var o = i(this).constructor;
                 r = Reflect.construct(e, arguments, o)
             } else r = e.apply(this, arguments);
             return u(this, r)
         }
     }

     function l(t, n, r) {
         return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, n, r) {
             var e = function(t, n) {
                 for (; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = i(t)););
                 return t
             }(t, n);
             if (e) {
                 var o = Object.getOwnPropertyDescriptor(e, n);
                 return o.get ? o.get.call(r) : o.value
             }
         })(t, n, r || t)
     }
     var f = s(Math.pow(10, -6));

     function s(t) {
         var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
         if (Number.isInteger(t)) return t;
         var r = Math.pow(10, n);
         return Math.round((+t + Number.EPSILON) * r) / r
     }

     function c(t, n) {
         var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
         return Math.abs(t - n) < r
     }
     var h = Math.PI / 180;

     function v(t) {
         return t
     }

     function y(t, n, r) {
         var e = 1 - r;
         return 3 * r * e * (t * e + n * r) + r * r * r
     }

     function d() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
             n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
             r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
             e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
         return t < 0 || t > 1 || r < 0 || r > 1 ? null : c(t, n) && c(r, e) ? v : function(i) {
             if (i <= 0) return t > 0 ? i * n / t : 0 === n && r > 0 ? i * e / r : 0;
             if (i >= 1) return r < 1 ? 1 + (i - 1) * (e - 1) / (r - 1) : 1 === r && t < 1 ? 1 + (i - 1) * (n - 1) / (t - 1) : 1;
             for (var o, u = 0, a = 1; u < a;) {
                 var l = y(t, r, o = (u + a) / 2);
                 if (c(i, l)) break;
                 l < i ? u = o : a = o
             }
             return y(n, e, o)
         }
     }

     function g() {
         return 1
     }

     function p(t) {
         return 1 === t ? 1 : 0
     }

     function m() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
             n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
         if (1 === t) {
             if (0 === n) return p;
             if (1 === n) return g
         }
         var r = 1 / t;
         return function(t) {
             return t >= 1 ? 1 : (t += n * r) - t % r
         }
     }

     function b(t, n, r) {
         return t >= .5 ? r : n
     }

     function w(t, n, r) {
         return 0 === t || n === r ? n : t * (r - n) + n
     }

     function x(t, n, r) {
         var e = w(t, n, r);
         return e <= 0 ? 0 : e
     }

     function k(t, n, r) {
         return 0 === t ? n : 1 === t ? r : {
             x: w(t, n.x, r.x),
             y: w(t, n.y, r.y)
         }
     }

     function A(t, n, r) {
         var e = function(t, n, r) {
             return Math.round(w(t, n, r))
         }(t, n, r);
         return e <= 0 ? 0 : e >= 255 ? 255 : e
     }

     function _(t, n, r) {
         return 0 === t ? n : 1 === t ? r : {
             r: A(t, n.r, r.r),
             g: A(t, n.g, r.g),
             b: A(t, n.b, r.b),
             a: w(t, null == n.a ? 1 : n.a, null == r.a ? 1 : r.a)
         }
     }

     function S(t, n, r) {
         if (0 === t) return n;
         if (1 === t) return r;
         var e = n.length;
         if (e !== r.length) return b(t, n, r);
         for (var i = [], o = 0; o < e; o++) i.push(_(t, n[o], r[o]));
         return i
     }

     function O(t, n) {
         for (var r = [], e = 0; e < t; e++) r.push(n);
         return r
     }

     function M(t, n) {
         if (--n <= 0) return t;
         var r = (t = Object.assign([], t)).length;
         do {
             for (var e = 0; e < r; e++) t.push(t[e])
         } while (--n > 0);
         return t
     }
     var j, P = function() {
             function t(r) {
                 n(this, t), this.list = r, this.length = r.length
             }
             return e(t, [{
                 key: "setAttribute",
                 value: function(t, n) {
                     for (var r = this.list, e = 0; e < this.length; e++) r[e].setAttribute(t, n)
                 }
             }, {
                 key: "removeAttribute",
                 value: function(t) {
                     for (var n = this.list, r = 0; r < this.length; r++) n[r].removeAttribute(t)
                 }
             }, {
                 key: "style",
                 value: function(t, n) {
                     for (var r = this.list, e = 0; e < this.length; e++) r[e].style[t] = n
                 }
             }]), t
         }(),
         B = /-./g,
         E = function(t, n) {
             return n.toUpperCase()
         };

     function F(t) {
         return "function" == typeof t ? t : b
     }

     function I(t) {
         return t ? "function" == typeof t ? t : Array.isArray(t) ? function(t) {
             var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
             if (!Array.isArray(t)) return n;
             switch (t.length) {
                 case 1:
                     return m(t[0]) || n;
                 case 2:
                     return m(t[0], t[1]) || n;
                 case 4:
                     return d(t[0], t[1], t[2], t[3]) || n
             }
             return n
         }(t, null) : function(t, n) {
             var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
             switch (t) {
                 case "linear":
                     return v;
                 case "steps":
                     return m(n.steps || 1, n.jump || 0) || r;
                 case "bezier":
                 case "cubic-bezier":
                     return d(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || r
             }
             return r
         }(t.type, t.value, null) : null
     }

     function R(t, n, r) {
         var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
             i = n.length - 1;
         if (t <= n[0].t) return e ? [0, 0, n[0].v] : n[0].v;
         if (t >= n[i].t) return e ? [i, 1, n[i].v] : n[i].v;
         var o, u = n[0],
             a = null;
         for (o = 1; o <= i; o++) {
             if (!(t > n[o].t)) {
                 a = n[o];
                 break
             }
             u = n[o]
         }
         return null == a ? e ? [i, 1, n[i].v] : n[i].v : u.t === a.t ? e ? [o, 1, a.v] : a.v : (t = (t - u.t) / (a.t - u.t), u.e && (t = u.e(t)), e ? [o, t, r(t, u.v, a.v)] : r(t, u.v, a.v))
     }

     function q(t, n) {
         var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
         return t && t.length ? "function" != typeof n ? null : ("function" != typeof r && (r = null), function(e) {
             var i = R(e, t, n);
             return null != i && r && (i = r(i)), i
         }) : null
     }

     function T(t, n) {
         return t.t - n.t
     }

     function N(n, r, e, i, o) {
         var u, a = "@" === e[0],
             l = "#" === e[0],
             f = j[e],
             s = b;
         switch (a ? (u = e.substr(1), e = u.replace(B, E)) : l && (e = e.substr(1)), t(f)) {
             case "function":
                 if (s = f(i, o, R, I, e, a, r, n), l) return s;
                 break;
             case "string":
                 s = q(i, F(f));
                 break;
             case "object":
                 if ((s = q(i, F(f.i), f.f)) && "function" == typeof f.u) return f.u(r, s, e, a, n)
         }
         return s ? function(t, n, r) {
             var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
             if (e) return t instanceof P ? function(e) {
                 return t.style(n, r(e))
             } : function(e) {
                 return t.style[n] = r(e)
             };
             if (Array.isArray(n)) {
                 var i = n.length;
                 return function(e) {
                     var o = r(e);
                     if (null == o)
                         for (var u = 0; u < i; u++) t[u].removeAttribute(n);
                     else
                         for (var a = 0; a < i; a++) t[a].setAttribute(n, o)
                 }
             }
             return function(e) {
                 var i = r(e);
                 null == i ? t.removeAttribute(n) : t.setAttribute(n, i)
             }
         }(r, e, s, a) : null
     }

     function C(n, r, e, i) {
         if (!i || "object" !== t(i)) return null;
         var o = null,
             u = null;
         return Array.isArray(i) ? u = function(t) {
             if (!t || !t.length) return null;
             for (var n = 0; n < t.length; n++) t[n].e && (t[n].e = I(t[n].e));
             return t.sort(T)
         }(i) : (u = i.keys, o = i.data || null), u ? N(n, r, e, u, o) : null
     }

     function z(t, n, r) {
         if (!r) return null;
         var e = [];
         for (var i in r)
             if (r.hasOwnProperty(i)) {
                 var o = C(t, n, i, r[i]);
                 o && e.push(o)
             }
         return e.length ? e : null
     }

     function L(t, n) {
         if (!n.duration || n.duration < 0) return null;
         var r = function(t, n) {
             if (!n) return null;
             var r = [];
             if (Array.isArray(n))
                 for (var e = n.length, i = 0; i < e; i++) {
                     var o = n[i];
                     if (2 === o.length) {
                         var u = null;
                         if ("string" == typeof o[0]) u = t.getElementById(o[0]);
                         else if (Array.isArray(o[0])) {
                             u = [];
                             for (var a = 0; a < o[0].length; a++)
                                 if ("string" == typeof o[0][a]) {
                                     var l = t.getElementById(o[0][a]);
                                     l && u.push(l)
                                 }
                             u = u.length ? 1 === u.length ? u[0] : new P(u) : null
                         }
                         if (u) {
                             var f = z(t, u, o[1]);
                             f && (r = r.concat(f))
                         }
                     }
                 } else
                     for (var s in n)
                         if (n.hasOwnProperty(s)) {
                             var c = t.getElementById(s);
                             if (c) {
                                 var h = z(t, c, n[s]);
                                 h && (r = r.concat(h))
                             }
                         }
             return r.length ? r : null
         }(t, n.elements);
         return r ? function(t, n) {
             var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                 e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                 i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                 o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                 u = t.length,
                 a = e > 0 ? n : 0;
             i && r % 2 == 0 && (a = n - a);
             var l = null;
             return function(f, s) {
                 var c = f % n,
                     h = 1 + (f - c) / n;
                 s *= e, i && h % 2 == 0 && (s = -s);
                 var v = !1;
                 if (h > r) c = a, v = !0, -1 === o && (c = e > 0 ? 0 : n);
                 else if (s < 0 && (c = n - c), c === l) return !1;
                 l = c;
                 for (var y = 0; y < u; y++) t[y](c);
                 return v
             }
         }(r, n.duration, n.iterations || 1 / 0, n.direction || 1, !!n.alternate, n.fill || 1) : null
     }
     var D = function() {
         function t(r, e) {
             var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
             n(this, t), this._id = 0, this._running = !1, this._rollingBack = !1, this._animations = r, this.duration = e.duration, this.alternate = e.alternate, this.fill = e.fill, this.iterations = e.iterations, this.direction = i.direction || 1, this.speed = i.speed || 1, this.fps = i.fps || 100, this.offset = i.offset || 0, this.rollbackStartOffset = 0
         }
         return e(t, [{
             key: "_rollback",
             value: function() {
                 var t = this,
                     n = 1 / 0,
                     r = null;
                 this.rollbackStartOffset = this.offset, this._rollingBack || (this._rollingBack = !0, this._running = !0);
                 this._id = window.requestAnimationFrame((function e(i) {
                     if (t._rollingBack) {
                         null == r && (r = i);
                         var o = i - r,
                             u = t.rollbackStartOffset - o,
                             a = Math.round(u * t.speed);
                         if (a > t.duration && n != 1 / 0) {
                             var l = !!t.alternate && a / t.duration % 2 > 1,
                                 f = a % t.duration;
                             a = (f += l ? t.duration : 0) || t.duration
                         }
                         var s = t.fps ? 1e3 / t.fps : 0,
                             c = Math.max(0, a);
                         if (c < n - s) {
                             t.offset = c, n = c;
                             for (var h = t._animations, v = h.length, y = 0; y < v; y++) h[y](c, t.direction)
                         }
                         var d = !1;
                         if (t.iterations > 0 && -1 === t.fill) {
                             var g = t.iterations * t.duration,
                                 p = g == a;
                             a = p ? 0 : a, t.offset = p ? 0 : t.offset, d = a > g
                         }
                         a > 0 && t.offset >= a && !d ? t._id = window.requestAnimationFrame(e) : t.stop()
                     }
                 }))
             }
         }, {
             key: "_start",
             value: function() {
                 var t = this,
                     n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                     r = -1 / 0,
                     e = null,
                     i = {},
                     o = function o(u) {
                         t._running = !0, null == e && (e = u);
                         var a = Math.round((u - e + n) * t.speed),
                             l = t.fps ? 1e3 / t.fps : 0;
                         if (a > r + l && !t._rollingBack) {
                             t.offset = a, r = a;
                             for (var f = t._animations, s = f.length, c = 0, h = 0; h < s; h++) i[h] ? c++ : (i[h] = f[h](a, t.direction), i[h] && c++);
                             if (c === s) return void t._stop()
                         }
                         t._id = window.requestAnimationFrame(o)
                     };
                 this._id = window.requestAnimationFrame(o)
             }
         }, {
             key: "_stop",
             value: function() {
                 this._id && window.cancelAnimationFrame(this._id), this._running = !1, this._rollingBack = !1
             }
         }, {
             key: "play",
             value: function() {
                 !this._rollingBack && this._running || (this._rollingBack = !1, this.rollbackStartOffset > this.duration && (this.offset = this.rollbackStartOffset - (this.rollbackStartOffset - this.offset) % this.duration, this.rollbackStartOffset = 0), this._start(this.offset))
             }
         }, {
             key: "stop",
             value: function() {
                 this._stop(), this.offset = 0, this.rollbackStartOffset = 0;
                 var t = this.direction,
                     n = this._animations;
                 window.requestAnimationFrame((function() {
                     for (var r = 0; r < n.length; r++) n[r](0, t)
                 }))
             }
         }, {
             key: "reachedToEnd",
             value: function() {
                 return this.iterations > 0 && this.offset >= this.iterations * this.duration
             }
         }, {
             key: "restart",
             value: function() {
                 this._stop(), this.offset = 0, this._start()
             }
         }, {
             key: "pause",
             value: function() {
                 this._stop()
             }
         }, {
             key: "reverse",
             value: function() {
                 this.direction = -this.direction
             }
         }], [{
             key: "build",
             value: function(n, r) {
                 return (n = function(t, n) {
                     if (j = n, !t || !t.root || !Array.isArray(t.animations)) return null;
                     for (var r = document.getElementsByTagName("svg"), e = !1, i = 0; i < r.length; i++)
                         if (r[i].id === t.root && !r[i].svgatorAnimation) {
                             (e = r[i]).svgatorAnimation = !0;
                             break
                         }
                     if (!e) return null;
                     var o = t.animations.map((function(t) {
                         return L(e, t)
                     })).filter((function(t) {
                         return !!t
                     }));
                     return o.length ? {
                         element: e,
                         animations: o,
                         animationSettings: t.animationSettings,
                         options: t.options || void 0
                     } : null
                 }(n, r)) ? {
                     el: n.element,
                     options: n.options || {},
                     player: new t(n.animations, n.animationSettings, n.options)
                 } : null
             }
         }]), t
     }();

     function Q(t) {
         return s(t) + ""
     }

     function U(t) {
         var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
         return t && t.length ? t.map(Q).join(n) : ""
     }

     function V(t) {
         return t ? null == t.a || t.a >= 1 ? "rgb(" + t.r + "," + t.g + "," + t.b + ")" : "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")" : "transparent"
     }! function() {
         for (var t = 0, n = ["ms", "moz", "webkit", "o"], r = 0; r < n.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[n[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n[r] + "CancelAnimationFrame"] || window[n[r] + "CancelRequestAnimationFrame"];
         window.requestAnimationFrame || (window.requestAnimationFrame = function(n) {
             var r = Date.now(),
                 e = Math.max(0, 16 - (r - t)),
                 i = window.setTimeout((function() {
                     n(r + e)
                 }), e);
             return t = r + e, i
         }, window.cancelAnimationFrame = window.clearTimeout)
     }();
     var G = {
             f: null,
             i: function(t, n, r) {
                 return 0 === t ? n : 1 === t ? r : {
                     x: x(t, n.x, r.x),
                     y: x(t, n.y, r.y)
                 }
             },
             u: function(t, n) {
                 return function(r) {
                     var e = n(r);
                     t.setAttribute("rx", Q(e.x)), t.setAttribute("ry", Q(e.y))
                 }
             }
         },
         H = {
             f: null,
             i: function(t, n, r) {
                 return 0 === t ? n : 1 === t ? r : {
                     width: x(t, n.width, r.width),
                     height: x(t, n.height, r.height)
                 }
             },
             u: function(t, n) {
                 return function(r) {
                     var e = n(r);
                     t.setAttribute("width", Q(e.width)), t.setAttribute("height", Q(e.height))
                 }
             }
         },
         Y = Math.sin,
         Z = Math.cos,
         J = Math.acos,
         K = Math.asin,
         W = Math.tan,
         X = Math.atan2,
         $ = Math.PI / 180,
         tt = 180 / Math.PI,
         nt = Math.sqrt,
         rt = function() {
             function t() {
                 var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                     e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                     i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                     o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                     u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                     a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                 n(this, t), this.m = [r, e, i, o, u, a], this.i = null, this.w = null, this.s = null
             }
             return e(t, [{
                 key: "determinant",
                 get: function() {
                     var t = this.m;
                     return t[0] * t[3] - t[1] * t[2]
                 }
             }, {
                 key: "isIdentity",
                 get: function() {
                     if (null === this.i) {
                         var t = this.m;
                         this.i = 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5]
                     }
                     return this.i
                 }
             }, {
                 key: "point",
                 value: function(t, n) {
                     var r = this.m;
                     return {
                         x: r[0] * t + r[2] * n + r[4],
                         y: r[1] * t + r[3] * n + r[5]
                     }
                 }
             }, {
                 key: "translateSelf",
                 value: function() {
                     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                         n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                     if (!t && !n) return this;
                     var r = this.m;
                     return r[4] += r[0] * t + r[2] * n, r[5] += r[1] * t + r[3] * n, this.w = this.s = this.i = null, this
                 }
             }, {
                 key: "rotateSelf",
                 value: function() {
                     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                     if (t %= 360) {
                         var n = Y(t *= $),
                             r = Z(t),
                             e = this.m,
                             i = e[0],
                             o = e[1];
                         e[0] = i * r + e[2] * n, e[1] = o * r + e[3] * n, e[2] = e[2] * r - i * n, e[3] = e[3] * r - o * n, this.w = this.s = this.i = null
                     }
                     return this
                 }
             }, {
                 key: "scaleSelf",
                 value: function() {
                     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                         n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                     if (1 !== t || 1 !== n) {
                         var r = this.m;
                         r[0] *= t, r[1] *= t, r[2] *= n, r[3] *= n, this.w = this.s = this.i = null
                     }
                     return this
                 }
             }, {
                 key: "skewSelf",
                 value: function(t, n) {
                     if (n %= 360, (t %= 360) || n) {
                         var r = this.m,
                             e = r[0],
                             i = r[1],
                             o = r[2],
                             u = r[3];
                         t && (t = W(t * $), r[2] += e * t, r[3] += i * t), n && (n = W(n * $), r[0] += o * n, r[1] += u * n), this.w = this.s = this.i = null
                     }
                     return this
                 }
             }, {
                 key: "resetSelf",
                 value: function() {
                     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                         n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                         r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                         e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                         i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                         o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                         u = this.m;
                     return u[0] = t, u[1] = n, u[2] = r, u[3] = e, u[4] = i, u[5] = o, this.w = this.s = this.i = null, this
                 }
             }, {
                 key: "recomposeSelf",
                 value: function() {
                     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                         n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                         r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                         e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                         i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                     return this.isIdentity || this.resetSelf(), t && (t.x || t.y) && this.translateSelf(t.x, t.y), n && this.rotateSelf(n), r && (r.x && this.skewSelf(r.x, 0), r.y && this.skewSelf(0, r.y)), !e || 1 === e.x && 1 === e.y || this.scaleSelf(e.x, e.y), i && (i.x || i.y) && this.translateSelf(i.x, i.y), this
                 }
             }, {
                 key: "decompose",
                 value: function() {
                     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                         n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                         r = this.m,
                         e = r[0] * r[0] + r[1] * r[1],
                         i = [
                             [r[0], r[1]],
                             [r[2], r[3]]
                         ],
                         o = nt(e);
                     if (0 === o) return {
                         origin: {
                             x: s(r[4]),
                             y: s(r[5])
                         },
                         translate: {
                             x: s(t),
                             y: s(n)
                         },
                         scale: {
                             x: 0,
                             y: 0
                         },
                         skew: {
                             x: 0,
                             y: 0
                         },
                         rotate: 0
                     };
                     i[0][0] /= o, i[0][1] /= o;
                     var u = r[0] * r[3] - r[1] * r[2] < 0;
                     u && (o = -o);
                     var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                     i[1][0] -= i[0][0] * a, i[1][1] -= i[0][1] * a;
                     var l = nt(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                     if (0 === l) return {
                         origin: {
                             x: s(r[4]),
                             y: s(r[5])
                         },
                         translate: {
                             x: s(t),
                             y: s(n)
                         },
                         scale: {
                             x: s(o),
                             y: 0
                         },
                         skew: {
                             x: 0,
                             y: 0
                         },
                         rotate: 0
                     };
                     i[1][0] /= l, i[1][1] /= l, a /= l;
                     var f = 0;
                     return i[1][1] < 0 ? (f = J(i[1][1]) * tt, i[0][1] < 0 && (f = 360 - f)) : f = K(i[0][1]) * tt, u && (f = -f), a = X(a, nt(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * tt, u && (a = -a), {
                         origin: {
                             x: s(r[4]),
                             y: s(r[5])
                         },
                         translate: {
                             x: s(t),
                             y: s(n)
                         },
                         scale: {
                             x: s(o),
                             y: s(l)
                         },
                         skew: {
                             x: s(a),
                             y: 0
                         },
                         rotate: s(f)
                     }
                 }
             }, {
                 key: "toString",
                 value: function() {
                     return null === this.s && (this.s = "matrix(" + this.m.map((function(t) {
                         return s(t)
                     })).join(" ") + ")"), this.s
                 }
             }]), t
         }();
     Object.freeze({
         M: 2,
         L: 2,
         Z: 0,
         H: 1,
         V: 1,
         C: 6,
         Q: 4,
         T: 2,
         S: 4,
         A: 7
     });
     var et = {},
         it = null;

     function ot(n) {
         var r = function() {
             if (it) return it;
             if ("object" !== ("undefined" == typeof document ? "undefined" : t(document)) || !document.createElementNS) return {};
             var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
             return n && n.style ? (n.style.position = "absolute", n.style.opacity = "0.01", n.style.zIndex = "-9999", n.style.left = "-9999px", n.style.width = "1px", n.style.height = "1px", it = {
                 svg: n
             }) : {}
         }().svg;
         if (!r) return function(t) {
             return null
         };
         var e = document.createElementNS(r.namespaceURI, "path");
         e.setAttributeNS(null, "d", n), e.setAttributeNS(null, "fill", "none"), e.setAttributeNS(null, "stroke", "none"), r.appendChild(e);
         var i = e.getTotalLength();
         return function(t) {
             var n = e.getPointAtLength(i * t);
             return {
                 x: n.x,
                 y: n.y
             }
         }
     }

     function ut(t) {
         return et[t] ? et[t] : et[t] = ot(t)
     }

     function at(t, n, r, e) {
         if (!t || !e) return !1;
         var i = ["M", t.x, t.y];
         if (n && r && (i.push("C"), i.push(n.x), i.push(n.y), i.push(r.x), i.push(r.y)), n ? !r : r) {
             var o = n || r;
             i.push("Q"), i.push(o.x), i.push(o.y)
         }
         return n || r || i.push("L"), i.push(e.x), i.push(e.y), i.join(" ")
     }

     function lt(t, n, r, e) {
         var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
             o = at(t, n, r, e),
             u = ut(o);
         try {
             return u(i)
         } catch (t) {
             return null
         }
     }

     function ft(t, n, r, e) {
         var i = 1 - e;
         return i * i * t + 2 * i * e * n + e * e * r
     }

     function st(t, n, r, e) {
         return 2 * (1 - e) * (n - t) + 2 * e * (r - n)
     }

     function ct(t, n, r, e) {
         var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
             o = lt(t, n, null, r, e);
         return o || (o = {
             x: ft(t.x, n.x, r.x, e),
             y: ft(t.y, n.y, r.y, e)
         }), i && (o.a = ht(t, n, r, e)), o
     }

     function ht(t, n, r, e) {
         return Math.atan2(st(t.y, n.y, r.y, e), st(t.x, n.x, r.x, e))
     }

     function vt(t, n, r, e, i) {
         var o = i * i;
         return i * o * (e - t + 3 * (n - r)) + 3 * o * (t + r - 2 * n) + 3 * i * (n - t) + t
     }

     function yt(t, n, r, e, i) {
         var o = 1 - i;
         return 3 * (o * o * (n - t) + 2 * o * i * (r - n) + i * i * (e - r))
     }

     function dt(t, n, r, e, i) {
         var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
             u = lt(t, n, r, e, i);
         return u || (u = {
             x: vt(t.x, n.x, r.x, e.x, i),
             y: vt(t.y, n.y, r.y, e.y, i)
         }), o && (u.a = gt(t, n, r, e, i)), u
     }

     function gt(t, n, r, e, i) {
         return Math.atan2(yt(t.y, n.y, r.y, e.y, i), yt(t.x, n.x, r.x, e.x, i))
     }

     function pt(t, n, r) {
         return t + (n - t) * r
     }

     function mt(t, n, r) {
         var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
             i = {
                 x: pt(t.x, n.x, r),
                 y: pt(t.y, n.y, r)
             };
         return e && (i.a = bt(t, n)), i
     }

     function bt(t, n) {
         return Math.atan2(n.y - t.y, n.x - t.x)
     }

     function wt(t, n, r) {
         var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
         if (kt(n)) {
             if (At(r)) return ct(n, r.start, r, t, e)
         } else if (kt(r)) {
             if (n.end) return ct(n, n.end, r, t, e)
         } else {
             if (n.end) return r.start ? dt(n, n.end, r.start, r, t, e) : ct(n, n.end, r, t, e);
             if (r.start) return ct(n, r.start, r, t, e)
         }
         return mt(n, r, t, e)
     }

     function xt(t, n, r) {
         var e = wt(t, n, r, !0);
         return e.a = function(t) {
             var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
             return n ? t + Math.PI : t
         }(e.a) / h, e
     }

     function kt(t) {
         return !t.type || "corner" === t.type
     }

     function At(t) {
         return null != t.start && !kt(t)
     }
     var _t = new rt;
     var St = {
             f: Q,
             i: w
         },
         Ot = {
             f: Q,
             i: function(t, n, r) {
                 var e = w(t, n, r);
                 return e <= 0 ? 0 : e >= 1 ? 1 : e
             }
         };

     function Mt(t, n, r, e, i, o, u, a) {
         return n = function(t, n, r) {
                 for (var e, i, o, u = t.length - 1, a = {}, l = 0; l <= u; l++)(e = t[l]).e && (e.e = n(e.e)), e.v && "g" === (i = e.v).t && i.r && (o = r.getElementById(i.r)) && (a[i.r] = o.querySelectorAll("stop"));
                 return a
             }(t, e, a),
             function(e) {
                 var i, o = r(e, t, jt);
                 return o ? "c" === o.t ? V(o.v) : "g" === o.t ? (n[o.r] && function(t, n) {
                     for (var r = 0, e = t.length; r < e; r++) t[r].setAttribute("stop-color", V(n[r]))
                 }(n[o.r], o.v), (i = o.r) ? "url(#" + i + ")" : "none") : "none" : "none"
             }
     }

     function jt(t, n, r) {
         if (0 === t) return n;
         if (1 === t) return r;
         if (n && r) {
             var e = n.t;
             if (e === r.t) switch (n.t) {
                 case "c":
                     return {
                         t: e,
                         v: _(t, n.v, r.v)
                     };
                 case "g":
                     if (n.r === r.r) return {
                         t: e,
                         v: S(t, n.v, r.v),
                         r: n.r
                     }
             }
         }
         return b(t, n, r)
     }
     var Pt = {
         fill: Mt,
         "fill-opacity": Ot,
         stroke: Mt,
         "stroke-opacity": Ot,
         "stroke-width": St,
         "stroke-dashoffset": {
             f: Q,
             i: w
         },
         "stroke-dasharray": {
             f: function(t) {
                 var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                 return t && t.length > 0 && (t = t.map((function(t) {
                     return s(t, 4)
                 }))), U(t, n)
             },
             i: function(t, n, r) {
                 var e, i, o, u = n.length,
                     a = r.length;
                 if (u !== a)
                     if (0 === u) n = O(u = a, 0);
                     else if (0 === a) a = u, r = O(u, 0);
                 else {
                     var l = (o = (e = u) * (i = a) / function(t, n) {
                         for (var r; n;) r = n, n = t % n, t = r;
                         return t || 1
                     }(e, i)) < 0 ? -o : o;
                     n = M(n, Math.floor(l / u)), r = M(r, Math.floor(l / a)), u = a = l
                 }
                 for (var f = [], c = 0; c < u; c++) f.push(s(x(t, n[c], r[c])));
                 return f
             }
         },
         opacity: Ot,
         transform: function(n, r, e, i) {
             if (!(n = function(n, r) {
                     if (!n || "object" !== t(n)) return null;
                     var e = !1;
                     for (var i in n) n.hasOwnProperty(i) && (n[i] && n[i].length ? (n[i].forEach((function(t) {
                         t.e && (t.e = r(t.e))
                     })), e = !0) : delete n[i]);
                     return e ? n : null
                 }(n, i))) return null;
             var o = function(t, i, o) {
                 var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                 return n[t] ? e(i, n[t], o) : r && r[t] ? r[t] : u
             };
             return r && r.a && n.o ? function(t) {
                 var r = e(t, n.o, xt);
                 return _t.recomposeSelf(r, o("r", t, w, 0) + r.a, o("k", t, k), o("s", t, k), o("t", t, k)).toString()
             } : function(t) {
                 return _t.recomposeSelf(o("o", t, wt, null), o("r", t, w, 0), o("k", t, k), o("s", t, k), o("t", t, k)).toString()
             }
         },
         r: St,
         "#size": H,
         "#radius": G,
         _: function(t, n) {
             if (Array.isArray(t))
                 for (var r = 0; r < t.length; r++) this[t[r]] = n;
             else this[t] = n
         }
     };
     return function(t) {
         ! function(t, n) {
             if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
             t.prototype = Object.create(n && n.prototype, {
                 constructor: {
                     value: t,
                     writable: !0,
                     configurable: !0
                 }
             }), n && o(t, n)
         }(u, t);
         var r = a(u);

         function u() {
             return n(this, u), r.apply(this, arguments)
         }
         return e(u, null, [{
             key: "build",
             value: function(t) {
                 var n = l(i(u), "build", this).call(this, t, Pt);
                 if (!n) return null;
                 n.el, n.options;
                 var r = n.player;
                 return function(t, n, r) {
                     t.play()
                 }(r), r
             }
         }]), u
     }(D)
 })); __SVGATOR_PLAYER__.build({
     "root": "e5Pv1iNQoCa1",
     "animations": [{
         "duration": 10000,
         "direction": 1,
         "iterations": 0,
         "fill": 1,
         "alternate": false,
         "speed": 1,
         "elements": {
             "e5Pv1iNQoCa2": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -244.5,
                             "y": -101.88515
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 244.500002,
                                 "y": 102,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2700,
                             "v": {
                                 "x": 244.500002,
                                 "y": 102,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3700,
                             "v": {
                                 "x": 244.500002,
                                 "y": 109,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5500,
                             "v": {
                                 "x": 244.500002,
                                 "y": 119,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 244.500002,
                                 "y": 102,
                                 "type": "corner"
                             }
                         }],
                         "s": [{
                             "t": 0,
                             "v": {
                                 "x": 1.000002,
                                 "y": 1
                             }
                         }, {
                             "t": 2700,
                             "v": {
                                 "x": 1,
                                 "y": 0.995632
                             }
                         }, {
                             "t": 3700,
                             "v": {
                                 "x": 1,
                                 "y": 0.92
                             }
                         }, {
                             "t": 5500,
                             "v": {
                                 "x": 1,
                                 "y": 0.8
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 1,
                                 "y": 1
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa3": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -244,
                             "y": -433
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 244,
                                 "y": 433,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3500,
                             "v": {
                                 "x": 244,
                                 "y": 381,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5200,
                             "v": {
                                 "x": 244,
                                 "y": 391,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6700,
                             "v": {
                                 "x": 244,
                                 "y": 414,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 244,
                                 "y": 433,
                                 "type": "corner"
                             }
                         }],
                         "s": [{
                             "t": 0,
                             "v": {
                                 "x": 1,
                                 "y": 1
                             }
                         }, {
                             "t": 3500,
                             "v": {
                                 "x": 1,
                                 "y": 1
                             }
                         }, {
                             "t": 5200,
                             "v": {
                                 "x": 1,
                                 "y": 1.3
                             }
                         }, {
                             "t": 6700,
                             "v": {
                                 "x": 1,
                                 "y": 1.3
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 1,
                                 "y": 1
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa4": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -242.5,
                             "y": -92.785972
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 243.5,
                                 "y": 279.785972,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 243.5,
                                 "y": 245,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 243.5,
                                 "y": 280.5,
                                 "type": "corner"
                             }
                         }],
                         "s": [{
                             "t": 0,
                             "v": {
                                 "x": 1,
                                 "y": 1
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 1,
                                 "y": 1.2
                             }
                         }, {
                             "t": 4000,
                             "v": {
                                 "x": 1,
                                 "y": 1.2
                             }
                         }, {
                             "t": 7000,
                             "v": {
                                 "x": 1,
                                 "y": 1
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 1,
                                 "y": 1
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa5": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -243.923784,
                             "y": -288.665985
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 243.92,
                                 "y": 288.665985,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 243.921135,
                                 "y": 258,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 243.922018,
                                 "y": 258,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5200,
                             "v": {
                                 "x": 243.922106,
                                 "y": 258,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 243.923784,
                                 "y": 288.665985,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa6": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -243.5,
                             "y": -492
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 244.167999,
                                 "y": 492,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3500,
                             "v": {
                                 "x": 243.934199,
                                 "y": 439,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6700,
                             "v": {
                                 "x": 243.7171,
                                 "y": 490,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 243.5,
                                 "y": 492,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa7": {
                 "transform": {
                     "data": {
                         "s": {
                             "x": 0.937862,
                             "y": 1
                         },
                         "t": {
                             "x": -244.5,
                             "y": -16.6983
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 244.167999,
                                 "y": 16.698299,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2700,
                             "v": {
                                 "x": 244.226099,
                                 "y": 16.7,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3700,
                             "v": {
                                 "x": 244.292499,
                                 "y": 30.7,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5500,
                             "v": {
                                 "x": 244.350599,
                                 "y": 50.78,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 244.5,
                                 "y": 16.6983,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa8": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -275.996003,
                             "y": -331.78601
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 275.996003,
                                 "y": 335.214111,
                                 "type": "corner"
                             }
                         }, {
                             "t": 1000,
                             "v": {
                                 "x": 249.919391,
                                 "y": 312.264589,
                                 "type": "corner"
                             }
                         }, {
                             "t": 4200,
                             "v": {
                                 "x": 272.642132,
                                 "y": 274.56078,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6000,
                             "v": {
                                 "x": 303.177966,
                                 "y": 272.200109,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7500,
                             "v": {
                                 "x": 312.792508,
                                 "y": 329.98199,
                                 "type": "corner"
                             }
                         }, {
                             "t": 9000,
                             "v": {
                                 "x": 295.592436,
                                 "y": 351.982239,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 275.996003,
                                 "y": 331.786011,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa13": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -210.996002,
                             "y": -379.78601
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 210.996003,
                                 "y": 379.227781,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2000,
                             "v": {
                                 "x": 195.40749,
                                 "y": 351.050464,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3500,
                             "v": {
                                 "x": 213.07383,
                                 "y": 305.321484,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 172.000444,
                                 "y": 351.178931,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6200,
                             "v": {
                                 "x": 200.53412,
                                 "y": 401.01365,
                                 "type": "corner"
                             }
                         }, {
                             "t": 8500,
                             "v": {
                                 "x": 237.000446,
                                 "y": 412.785888,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 210.996003,
                                 "y": 379.786011,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa18": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -197.996002,
                             "y": -279.78601
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 197.996003,
                                 "y": 279.786011,
                                 "type": "corner"
                             }
                         }, {
                             "t": 1200,
                             "v": {
                                 "x": 190.351089,
                                 "y": 256.458035,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 204.504444,
                                 "y": 237.356819,
                                 "type": "corner"
                             }
                         }, {
                             "t": 4200,
                             "v": {
                                 "x": 206.262814,
                                 "y": 196.989009,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5700,
                             "v": {
                                 "x": 230.493781,
                                 "y": 171.211121,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7000,
                             "v": {
                                 "x": 204.339087,
                                 "y": 212.614215,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7700,
                             "v": {
                                 "x": 200.971549,
                                 "y": 240.861769,
                                 "type": "corner"
                             }
                         }, {
                             "t": 8700,
                             "v": {
                                 "x": 204.504455,
                                 "y": 260.680885,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 197.996003,
                                 "y": 280.5,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa23": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -325.996003,
                             "y": -284.656006
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 325.996003,
                                 "y": 284.656006,
                                 "type": "corner"
                             }
                         }, {
                             "t": 1200,
                             "v": {
                                 "x": 314.311585,
                                 "y": 256.458027,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3200,
                             "v": {
                                 "x": 324.71078,
                                 "y": 219.136887,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 311.167923,
                                 "y": 202.214218,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6500,
                             "v": {
                                 "x": 328.429664,
                                 "y": 178.993938,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7700,
                             "v": {
                                 "x": 341.594213,
                                 "y": 216.510225,
                                 "type": "corner"
                             }
                         }, {
                             "t": 9000,
                             "v": {
                                 "x": 327.196001,
                                 "y": 251.627412,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 325.996003,
                                 "y": 288.666,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa28": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -346.996003,
                             "y": -301.656006
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 351.493753,
                                 "y": 301.656006,
                                 "type": "corner"
                             }
                         }, {
                             "t": 1200,
                             "v": {
                                 "x": 372.804901,
                                 "y": 293.000102,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 384.489297,
                                 "y": 265.263049,
                                 "type": "corner"
                             }
                         }, {
                             "t": 4200,
                             "v": {
                                 "x": 412.480412,
                                 "y": 241.000102,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 403.987098,
                                 "y": 206.67204,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6200,
                             "v": {
                                 "x": 447.004456,
                                 "y": 196.955941,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7500,
                             "v": {
                                 "x": 390.783608,
                                 "y": 226.477169,
                                 "type": "corner"
                             }
                         }, {
                             "t": 8700,
                             "v": {
                                 "x": 403.846774,
                                 "y": 273.607169,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 346.996003,
                                 "y": 301.656006,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa33": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -299.996003,
                             "y": -464.78601
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 299.996003,
                                 "y": 464.786011,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 289.631609,
                                 "y": 437.964839,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 306.49822,
                                 "y": 420.406601,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7500,
                             "v": {
                                 "x": 288.987098,
                                 "y": 437.964839,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 299.996013,
                                 "y": 462.96484,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa38": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -350.996003,
                             "y": -404.78601
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 351.493764,
                                 "y": 406.60716,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 386.597828,
                                 "y": 374,
                                 "type": "corner"
                             }
                         }, {
                             "t": 4200,
                             "v": {
                                 "x": 393.666706,
                                 "y": 342.83483,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6200,
                             "v": {
                                 "x": 437.765941,
                                 "y": 342.83483,
                                 "type": "corner"
                             }
                         }, {
                             "t": 8200,
                             "v": {
                                 "x": 424.987098,
                                 "y": 406.60716,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 350.996003,
                                 "y": 404.786011,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa43": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -117.896004,
                             "y": -281.78601
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 117.498196,
                                 "y": 279.785991,
                                 "type": "corner"
                             }
                         }, {
                             "t": 1200,
                             "v": {
                                 "x": 141.503546,
                                 "y": 304.048951,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 159.000457,
                                 "y": 335.214111,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3700,
                             "v": {
                                 "x": 159.005783,
                                 "y": 370.571879,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 130.915059,
                                 "y": 409.357781,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6200,
                             "v": {
                                 "x": 96.376765,
                                 "y": 413.607038,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7500,
                             "v": {
                                 "x": 124.226566,
                                 "y": 357.357766,
                                 "type": "corner"
                             }
                         }, {
                             "t": 8700,
                             "v": {
                                 "x": 121.111292,
                                 "y": 321.048937,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 117.896004,
                                 "y": 281.786011,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa48": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -331.996003,
                             "y": -38.785903
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 331.996003,
                                 "y": 38.785922,
                                 "type": "corner"
                             }
                         }, {
                             "t": 1200,
                             "v": {
                                 "x": 328.068386,
                                 "y": 58.178829,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 345.493764,
                                 "y": 78.399496,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3700,
                             "v": {
                                 "x": 334.489317,
                                 "y": 106.103731,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 358.489326,
                                 "y": 139.38748,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6200,
                             "v": {
                                 "x": 331.49822,
                                 "y": 107.384745,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7500,
                             "v": {
                                 "x": 345.493782,
                                 "y": 77.571814,
                                 "type": "corner"
                             }
                         }, {
                             "t": 8700,
                             "v": {
                                 "x": 325.995992,
                                 "y": 58.178854,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 331.996003,
                                 "y": 38.785904,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa53": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -184.583616,
                             "y": -133.001065
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 175.991521,
                                 "y": 127.785991,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 210.995991,
                                 "y": 184.393045,
                                 "type": "corner"
                             }
                         }, {
                             "t": 3700,
                             "v": {
                                 "x": 203.334728,
                                 "y": 217.911631,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 178.498236,
                                 "y": 241.000098,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7000,
                             "v": {
                                 "x": 154.433387,
                                 "y": 200.591608,
                                 "type": "corner"
                             }
                         }, {
                             "t": 8500,
                             "v": {
                                 "x": 161.518388,
                                 "y": 154.887133,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 175.996003,
                                 "y": 127.786007,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa58": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -117.995998,
                             "y": -186.785995
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 117.498203,
                                 "y": 185.96483,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 48.786075,
                                 "y": 260.393062,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 105.170663,
                                 "y": 312.393062,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7500,
                             "v": {
                                 "x": 46.235459,
                                 "y": 260.393047,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 117.995999,
                                 "y": 186.785996,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa63": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -136.995998,
                             "y": -54.7859
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 131.89553,
                                 "y": 54.7859,
                                 "type": "corner"
                             }
                         }, {
                             "t": 1200,
                             "v": {
                                 "x": 98.004898,
                                 "y": 96.964731,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 126.513351,
                                 "y": 136.57834,
                                 "type": "corner"
                             }
                         }, {
                             "t": 4200,
                             "v": {
                                 "x": 69.936145,
                                 "y": 148.214125,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6000,
                             "v": {
                                 "x": 82.9,
                                 "y": 186.785991,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7200,
                             "v": {
                                 "x": 63.40225,
                                 "y": 140.671052,
                                 "type": "corner"
                             }
                         }, {
                             "t": 8200,
                             "v": {
                                 "x": 128.046673,
                                 "y": 96.964747,
                                 "type": "corner"
                             }
                         }, {
                             "t": 9500,
                             "v": {
                                 "x": 105.802229,
                                 "y": 69.607169,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 132.000445,
                                 "y": 58.17883,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa68": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -311.996003,
                             "y": -186.785995
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 299.99601,
                                 "y": 226.477169,
                                 "type": "corner"
                             }
                         }, {
                             "t": 1700,
                             "v": {
                                 "x": 312.000447,
                                 "y": 187,
                                 "type": "corner"
                             }
                         }, {
                             "t": 4200,
                             "v": {
                                 "x": 300.688067,
                                 "y": 148.214111,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5500,
                             "v": {
                                 "x": 266.550545,
                                 "y": 116.357681,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7200,
                             "v": {
                                 "x": 319.493782,
                                 "y": 140.671038,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 299.776545,
                                 "y": 223.607169,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa73": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -224.895997,
                             "y": -80.785896
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 227.555001,
                                 "y": 38.785909,
                                 "type": "corner"
                             }
                         }, {
                             "t": 4500,
                             "v": {
                                 "x": 234.004903,
                                 "y": 112.96473,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7000,
                             "v": {
                                 "x": 155.695555,
                                 "y": 50.711085,
                                 "type": "corner"
                             }
                         }, {
                             "t": 9700,
                             "v": {
                                 "x": 229.036414,
                                 "y": 38.785909,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 230.493764,
                                 "y": 38.785888,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa78": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -170.996002,
                             "y": -465.78601
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 156.493763,
                                 "y": 437.964839,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 204.504455,
                                 "y": 443.571879,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 230.493763,
                                 "y": 476.823541,
                                 "type": "corner"
                             }
                         }, {
                             "t": 6200,
                             "v": {
                                 "x": 156.493763,
                                 "y": 471.785888,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 152.502683,
                                 "y": 437.96483,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             },
             "e5Pv1iNQoCa83": {
                 "transform": {
                     "data": {
                         "t": {
                             "x": -131.896009,
                             "y": -414.785991
                         }
                     },
                     "keys": {
                         "o": [{
                             "t": 0,
                             "v": {
                                 "x": 92.9,
                                 "y": 376,
                                 "type": "corner"
                             }
                         }, {
                             "t": 2500,
                             "v": {
                                 "x": 68.283866,
                                 "y": 320.571897,
                                 "type": "corner"
                             }
                         }, {
                             "t": 5000,
                             "v": {
                                 "x": 98.498232,
                                 "y": 299.178937,
                                 "type": "corner"
                             }
                         }, {
                             "t": 7500,
                             "v": {
                                 "x": 59.502696,
                                 "y": 337.96482,
                                 "type": "corner"
                             }
                         }, {
                             "t": 10000,
                             "v": {
                                 "x": 93.004915,
                                 "y": 373.999981,
                                 "type": "corner"
                             }
                         }]
                     }
                 }
             }
         }
     }],
     "options": {
         "start": "load",
         "hover": null,
         "click": null,
         "scroll": null,
         "font": "embed",
         "exportedIds": "unique",
         "svgFormat": "animated",
         "title": "Group 23999"
     },
     "animationSettings": {
         "duration": 10000,
         "direction": 1,
         "iterations": 0,
         "fill": 1,
         "alternate": false,
         "speed": 1
     }
 })]] >