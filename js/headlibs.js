WebFontConfig = {
    /*
    loading: function() {},
    active: function() {},
    inactive: function() {},
    fontloading: function(familyName, fvd) {},
    fontactive: function(familyName, fvd) {},
    fontinactive: function(familyName, fvd) {},
*/
    custom: {
        families: ['ProximaNovaLight']
    }
};
/* Web Font Loader v1.6.6 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function () {
    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function n(a, b, c) {
        n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return n.apply(null, arguments)
    }

    var p = Date.now || function () {
        return +new Date
    };

    function r(a, b) {
        this.D = a;
        this.m = b || a;
        this.F = this.m.document
    }

    r.prototype.createElement = function (a, b, c) {
        a = this.F.createElement(a);
        if (b) for (var d in b) b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
        c && a.appendChild(this.F.createTextNode(c));
        return a
    };

    function s(a, b, c) {
        a = a.F.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild)
    }

    function t(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), f = 0; f < b.length; f += 1) {
            for (var e = !1, g = 0; g < d.length; g += 1) if (b[f] === d[g]) {
                e = !0;
                break
            }
            e || d.push(b[f])
        }
        b = [];
        for (f = 0; f < d.length; f += 1) {
            e = !1;
            for (g = 0; g < c.length; g += 1) if (d[f] === c[g]) {
                e = !0;
                break
            }
            e || b.push(d[f])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function u(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, f = c.length; d < f; d++) if (c[d] == b) return !0;
        return !1
    }

    function v(a) {
        if ("string" === typeof a.da) return a.da;
        var b = a.m.location.protocol;
        "about:" == b && (b = a.D.location.protocol);
        return "https:" == b ? "https:" : "http:"
    }

    function w(a, b) {
        var c = a.createElement("link", {rel: "stylesheet", href: b, media: "all"}), d = !1;
        c.onload = function () {
            d || (d = !0)
        };
        c.onerror = function () {
            d || (d = !0)
        };
        s(a, "head", c)
    }

    function x(a, b, c, d) {
        var f = a.F.getElementsByTagName("head")[0];
        if (f) {
            var e = a.createElement("script", {src: b}), g = !1;
            e.onload = e.onreadystatechange = function () {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), e.onload = e.onreadystatechange = null, "HEAD" == e.parentNode.tagName && f.removeChild(e))
            };
            f.appendChild(e);
            setTimeout(function () {
                g || (g = !0, c && c(Error("Script load timeout")))
            }, d || 5E3);
            return e
        }
        return null
    };

    function y(a) {
        this.ca = a || "-"
    }

    y.prototype.d = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.ca)
    };

    function A(a, b) {
        this.V = a;
        this.N = 4;
        this.H = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.H = c[1], this.N = parseInt(c[2], 10))
    }

    A.prototype.getName = function () {
        return this.V
    };

    function B(a) {
        return a.H + a.N
    }

    function ca(a) {
        var b = 4, c = "n", d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b
    };

    function da(a, b) {
        this.a = a;
        this.h = a.m.document.documentElement;
        this.J = b;
        this.f = "wf";
        this.e = new y("-");
        this.Z = !1 !== b.events;
        this.u = !1 !== b.classes
    }

    function ea(a) {
        a.u && t(a.h, [a.e.d(a.f, "loading")]);
        C(a, "loading")
    }

    function D(a) {
        if (a.u) {
            var b = u(a.h, a.e.d(a.f, "active")), c = [], d = [a.e.d(a.f, "loading")];
            b || c.push(a.e.d(a.f, "inactive"));
            t(a.h, c, d)
        }
        C(a, "inactive")
    }

    function C(a, b, c) {
        if (a.Z && a.J[b]) if (c) a.J[b](c.getName(), B(c)); else a.J[b]()
    };

    function fa() {
        this.t = {}
    }

    function ga(a, b, c) {
        var d = [], f;
        for (f in b) if (b.hasOwnProperty(f)) {
            var e = a.t[f];
            e && d.push(e(b[f], c))
        }
        return d
    };

    function E(a, b) {
        this.a = a;
        this.q = b;
        this.j = this.a.createElement("span", {"aria-hidden": "true"}, this.q)
    }

    function G(a, b) {
        var c = a.j, d;
        d = [];
        for (var f = b.V.split(/,\s*/), e = 0; e < f.length; e++) {
            var g = f[e].replace(/['"]/g, "");
            -1 == g.indexOf(" ") ? d.push(g) : d.push("'" + g + "'")
        }
        d = d.join(",");
        f = "normal";
        "o" === b.H ? f = "oblique" : "i" === b.H && (f = "italic");
        c.style.cssText = "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + d + ";" + ("font-style:" + f + ";font-weight:" + (b.N + "00") + ";")
    }

    function H(a) {
        s(a.a, "body", a.j)
    }

    E.prototype.remove = function () {
        var a = this.j;
        a.parentNode && a.parentNode.removeChild(a)
    };

    function I(a, b, c, d, f, e, g) {
        this.O = a;
        this.ba = b;
        this.a = c;
        this.g = d;
        this.q = g || "BESbswy";
        this.s = {};
        this.M = f || 3E3;
        this.T = e || null;
        this.C = this.B = this.w = this.v = null;
        this.v = new E(this.a, this.q);
        this.w = new E(this.a, this.q);
        this.B = new E(this.a, this.q);
        this.C = new E(this.a, this.q);
        G(this.v, new A(this.g.getName() + ",serif", B(this.g)));
        G(this.w, new A(this.g.getName() + ",sans-serif", B(this.g)));
        G(this.B, new A("serif", B(this.g)));
        G(this.C, new A("sans-serif", B(this.g)));
        H(this.v);
        H(this.w);
        H(this.B);
        H(this.C)
    }

    var J = {ga: "serif", fa: "sans-serif"}, K = null;

    function L() {
        if (null === K) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            K = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
        }
        return K
    }

    I.prototype.start = function () {
        this.s.serif = this.B.j.offsetWidth;
        this.s["sans-serif"] = this.C.j.offsetWidth;
        this.ea = p();
        M(this)
    };

    function N(a, b, c) {
        for (var d in J) if (J.hasOwnProperty(d) && b === a.s[J[d]] && c === a.s[J[d]]) return !0;
        return !1
    }

    function M(a) {
        var b = a.v.j.offsetWidth, c = a.w.j.offsetWidth, d;
        (d = b === a.s.serif && c === a.s["sans-serif"]) || (d = L() && N(a, b, c));
        d ? p() - a.ea >= a.M ? L() && N(a, b, c) && (null === a.T || a.T.hasOwnProperty(a.g.getName())) ? O(a, a.O) : O(a, a.ba) : ha(a) : O(a, a.O)
    }

    function ha(a) {
        setTimeout(n(function () {
            M(this)
        }, a), 50)
    }

    function O(a, b) {
        setTimeout(n(function () {
            this.v.remove();
            this.w.remove();
            this.B.remove();
            this.C.remove();
            b(this.g)
        }, a), 0)
    };

    function P(a, b, c) {
        this.a = a;
        this.o = b;
        this.K = 0;
        this.X = this.S = !1;
        this.M = c
    }

    P.prototype.$ = function (a) {
        var b = this.o;
        b.u && t(b.h, [b.e.d(b.f, a.getName(), B(a).toString(), "active")], [b.e.d(b.f, a.getName(), B(a).toString(), "loading"), b.e.d(b.f, a.getName(), B(a).toString(), "inactive")]);
        C(b, "fontactive", a);
        this.X = !0;
        Q(this)
    };
    P.prototype.aa = function (a) {
        var b = this.o;
        if (b.u) {
            var c = u(b.h, b.e.d(b.f, a.getName(), B(a).toString(), "active")), d = [],
                f = [b.e.d(b.f, a.getName(), B(a).toString(), "loading")];
            c || d.push(b.e.d(b.f, a.getName(), B(a).toString(), "inactive"));
            t(b.h, d, f)
        }
        C(b, "fontinactive", a);
        Q(this)
    };

    function Q(a) {
        0 == --a.K && a.S && (a.X ? (a = a.o, a.u && t(a.h, [a.e.d(a.f, "active")], [a.e.d(a.f, "loading"), a.e.d(a.f, "inactive")]), C(a, "active")) : D(a.o))
    };

    function R(a) {
        this.D = a;
        this.p = new fa;
        this.U = 0;
        this.P = this.Q = !0
    }

    R.prototype.load = function (a) {
        this.a = new r(this.D, a.context || this.D);
        this.Q = !1 !== a.events;
        this.P = !1 !== a.classes;
        ia(this, new da(this.a, a), a)
    };

    function ja(a, b, c, d, f) {
        var e = 0 == --a.U;
        (a.P || a.Q) && setTimeout(function () {
            var a = f || null, l = d || null || {};
            if (0 === c.length && e) D(b.o); else {
                b.K += c.length;
                e && (b.S = e);
                var h, k = [];
                for (h = 0; h < c.length; h++) {
                    var m = c[h], z = l[m.getName()], q = b.o, F = m;
                    q.u && t(q.h, [q.e.d(q.f, F.getName(), B(F).toString(), "loading")]);
                    C(q, "fontloading", F);
                    q = null;
                    q = new I(n(b.$, b), n(b.aa, b), b.a, m, b.M, a, z);
                    k.push(q)
                }
                for (h = 0; h < k.length; h++) k[h].start()
            }
        }, 0)
    }

    function ia(a, b, c) {
        var d = [], f = c.timeout;
        ea(b);
        var d = ga(a.p, c, a.a), e = new P(a.a, b, f);
        a.U = d.length;
        b = 0;
        for (c = d.length; b < c; b++) d[b].load(function (b, c, d) {
            ja(a, e, b, c, d)
        })
    };

    function S(a, b, c) {
        this.I = a ? a : b + ka;
        this.k = [];
        this.L = [];
        this.Y = c || ""
    }

    var ka = "//fonts.googleapis.com/css";
    S.prototype.d = function () {
        if (0 == this.k.length) throw Error("No fonts to load!");
        if (-1 != this.I.indexOf("kit=")) return this.I;
        for (var a = this.k.length, b = [], c = 0; c < a; c++) b.push(this.k[c].replace(/ /g, "+"));
        a = this.I + "?family=" + b.join("%7C");
        0 < this.L.length && (a += "&subset=" + this.L.join(","));
        0 < this.Y.length && (a += "&text=" + encodeURIComponent(this.Y));
        return a
    };

    function T(a) {
        this.k = a;
        this.W = [];
        this.G = {}
    }

    var U = {
            latin: "BESbswy",
            cyrillic: "&#1081;&#1103;&#1046;",
            greek: "&#945;&#946;&#931;",
            khmer: "&#x1780;&#x1781;&#x1782;",
            Hanuman: "&#x1780;&#x1781;&#x1782;"
        }, la = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        }, ma = {i: "i", italic: "i", n: "n", normal: "n"},
        na = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    T.prototype.parse = function () {
        for (var a = this.k.length, b = 0; b < a; b++) {
            var c = this.k[b].split(":"), d = c[0].replace(/\+/g, " "), f = ["n4"];
            if (2 <= c.length) {
                var e;
                var g = c[1];
                e = [];
                if (g) for (var g = g.split(","), l = g.length, h = 0; h < l; h++) {
                    var k;
                    k = g[h];
                    if (k.match(/^[\w-]+$/)) if (k = na.exec(k.toLowerCase()), null == k) k = ""; else {
                        var m;
                        m = k[1];
                        if (null == m || "" == m) m = "4"; else {
                            var z = la[m];
                            m = z ? z : isNaN(m) ? "4" : m.substr(0, 1)
                        }
                        k = k[2];
                        k = [null == k || "" == k ? "n" : ma[k], m].join("")
                    } else k = "";
                    k && e.push(k)
                }
                0 < e.length && (f = e);
                3 == c.length && (c = c[2], e = [],
                    c = c ? c.split(",") : e, 0 < c.length && (c = U[c[0]]) && (this.G[d] = c))
            }
            this.G[d] || (c = U[d]) && (this.G[d] = c);
            for (c = 0; c < f.length; c += 1) this.W.push(new A(d, f[c]))
        }
    };

    function V(a, b) {
        this.a = a;
        this.c = b
    }

    var oa = {Arimo: !0, Cousine: !0, Tinos: !0};
    V.prototype.load = function (a) {
        for (var b = this.a, c = new S(this.c.api, v(b), this.c.text), d = this.c.families, f = d.length, e = 0; e < f; e++) {
            var g = d[e].split(":");
            3 == g.length && c.L.push(g.pop());
            var l = "";
            2 == g.length && "" != g[1] && (l = ":");
            c.k.push(g.join(l))
        }
        d = new T(d);
        d.parse();
        w(b, c.d());
        a(d.W, d.G, oa)
    };

    function W(a, b) {
        this.a = a;
        this.c = b;
        this.R = []
    }

    W.prototype.A = function (a) {
        var b = this.a;
        return v(this.a) + (this.c.api || "//f.fontdeck.com/s/css/js/") + (b.m.location.hostname || b.D.location.hostname) + "/" + a + ".js"
    };
    W.prototype.load = function (a) {
        var b = this.c.id, c = this.a.m, d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
            for (var g = 0, l = c.fonts.length; g < l; ++g) {
                var h = c.fonts[g];
                d.R.push(new A(h.name, ca("font-weight:" + h.weight + ";font-style:" + h.style)))
            }
            a(d.R)
        }, x(this.a, this.A(b), function (b) {
            b && a([])
        })) : a([])
    };

    function X(a, b) {
        this.a = a;
        this.c = b
    }

    X.prototype.A = function (a) {
        return (this.c.api || "https://use.typekit.net") + "/" + a + ".js"
    };
    X.prototype.load = function (a) {
        var b = this.c.id, c = this.a.m;
        b ? x(this.a, this.A(b), function (b) {
            if (b) a([]); else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
                b = c.Typekit.config.fn;
                for (var f = [], e = 0; e < b.length; e += 2) for (var g = b[e], l = b[e + 1], h = 0; h < l.length; h++) f.push(new A(g, l[h]));
                try {
                    c.Typekit.load({events: !1, classes: !1, async: !0})
                } catch (k) {
                }
                a(f)
            }
        }, 2E3) : a([])
    };

    function Y(a, b) {
        this.a = a;
        this.c = b
    }

    Y.prototype.A = function (a, b) {
        var c = v(this.a), d = (this.c.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    };
    Y.prototype.load = function (a) {
        var b = this.c.projectId, c = this.c.version;
        if (b) {
            var d = this.a.m;
            x(this.a, this.A(b, c), function (c) {
                if (c) a([]); else if (d["__mti_fntLst" + b]) {
                    c = d["__mti_fntLst" + b]();
                    var e = [];
                    if (c) for (var g = 0; g < c.length; g++) e.push(new A(c[g].fontfamily));
                    a(e)
                } else a([])
            }).id = "__MonotypeAPIScript__" + b
        } else a([])
    };

    function pa(a, b) {
        this.a = a;
        this.c = b
    }

    pa.prototype.load = function (a) {
        var b, c, d = this.c.urls || [], f = this.c.families || [], e = this.c.testStrings || {};
        b = 0;
        for (c = d.length; b < c; b++) w(this.a, d[b]);
        d = [];
        b = 0;
        for (c = f.length; b < c; b++) {
            var g = f[b].split(":");
            if (g[1]) for (var l = g[1].split(","), h = 0; h < l.length; h += 1) d.push(new A(g[0], l[h])); else d.push(new A(g[0]))
        }
        a(d, e)
    };
    var Z = new R(window);
    Z.p.t.custom = function (a, b) {
        return new pa(b, a)
    };
    Z.p.t.fontdeck = function (a, b) {
        return new W(b, a)
    };
    Z.p.t.monotype = function (a, b) {
        return new Y(b, a)
    };
    Z.p.t.typekit = function (a, b) {
        return new X(b, a)
    };
    Z.p.t.google = function (a, b) {
        return new V(b, a)
    };
    var $ = {load: n(Z.load, Z)};
    "function" === typeof define && define.amd ? define(function () {
        return $
    }) : "undefined" !== typeof module && module.exports ? module.exports = $ : (window.WebFont = $, window.WebFontConfig && Z.load(window.WebFontConfig));
}());

/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-inlinesvg-input-inputtypes-promises-svg-svgclippaths-prefixes-teststyles !*/
!function (e, t, n) {
    function i(e) {
        var t = d.className, n = Modernizr._config.classPrefix || "";
        if (m && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), m ? d.className.baseVal = t : d.className = t)
    }

    function s(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, i, a, o, r;
        for (var l in f) {
            if (e = [], t = f[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
            for (i = s(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) o = e[a], r = o.split("."), 1 === r.length ? Modernizr[r[0]] = i : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = i), c.push((i ? "" : "no-") + r.join("-"))
        }
    }

    function o() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : m ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function r() {
        var e = t.body;
        return e || (e = o(m ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, n, i, s) {
        var a, l, c, f, p = "modernizr", u = o("div"), m = r();
        if (parseInt(i, 10)) for (; i--;) c = o("div"), c.id = s ? s[i] : p + (i + 1), u.appendChild(c);
        return a = o("style"), a.type = "text/css", a.id = "s" + p, (m.fake ? m : u).appendChild(a), m.appendChild(u), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), u.id = p, m.fake && (m.style.background = "", m.style.overflow = "hidden", f = d.style.overflow, d.style.overflow = "hidden", d.appendChild(m)), l = n(u, e), m.fake ? (m.parentNode.removeChild(m), d.style.overflow = f, d.offsetHeight) : u.parentNode.removeChild(u), !!l
    }

    var c = [], d = t.documentElement, f = [], p = {
        _version: "3.0.0",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (e, t) {
            var n = this;
            setTimeout(function () {
                t(n[e])
            }, 0)
        },
        addTest: function (e, t, n) {
            f.push({name: e, fn: t, options: n})
        },
        addAsyncTest: function (e) {
            f.push({name: null, fn: e})
        }
    }, Modernizr = function () {
    };
    Modernizr.prototype = p, Modernizr = new Modernizr, Modernizr.addTest("promises", function () {
        return "Promise" in e && "resolve" in e.Promise && "reject" in e.Promise && "all" in e.Promise && "race" in e.Promise && function () {
            var t;
            return new e.Promise(function (e) {
                t = e
            }), "function" == typeof t
        }()
    }), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var u = p._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    p._prefixes = u;
    var m = "svg" === d.nodeName.toLowerCase();
    Modernizr.addTest("inlinesvg", function () {
        var e = o("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var h = o("input"), v = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        g = {};
    Modernizr.input = function (t) {
        for (var n = 0, i = t.length; i > n; n++) g[t[n]] = !!(t[n] in h);
        return g.list && (g.list = !(!o("datalist") || !e.HTMLDataListElement)), g
    }(v);
    var w = "search tel url email datetime date month week time datetime-local number range color".split(" "), y = {};
    Modernizr.inputtypes = function (e) {
        for (var i, s, a, o = e.length, r = ":)", l = 0; o > l; l++) h.setAttribute("type", i = e[l]), a = "text" !== h.type && "style" in h, a && (h.value = r, h.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && h.style.WebkitAppearance !== n ? (d.appendChild(h), s = t.defaultView, a = s.getComputedStyle && "textfield" !== s.getComputedStyle(h, null).WebkitAppearance && 0 !== h.offsetHeight, d.removeChild(h)) : /^(search|tel)$/.test(i) || (a = /^(url|email|number)$/.test(i) ? h.checkValidity && h.checkValidity() === !1 : h.value != r)), y[e[l]] = !!a;
        return y
    }(w);
    var C = {}.toString;
    Modernizr.addTest("svgclippaths", function () {
        return !!t.createElementNS && /SVGClipPath/.test(C.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    p.testStyles = l;
    a(), i(c), delete p.addTest, delete p.addAsyncTest;
    for (var b = 0; b < Modernizr._q.length; b++) Modernizr._q[b]();
    e.Modernizr = Modernizr
}(window, document);
/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function () {
    "use strict";

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    if (!styleMedia) {
        var style = document.createElement('style'),
            script = document.getElementsByTagName('script')[0],
            info = null;

        style.type = 'text/css';
        style.id = 'matchmediajs-test';

        script.parentNode.insertBefore(style, script);

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

        styleMedia = {
            matchMedium: function (media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function (media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());
/*! Picturefill - Responsive Images that work today.
*  Author: Scott Jehl, Filament Group, 2012 ( new proposal implemented by Shawn Jansepar )
*  License: MIT/GPLv2
*  Spec: http://picture.responsiveimages.org/
*/
(function (w, doc, image) {
    // Enable strict mode
    "use strict";

    function expose(picturefill) {
        /* expose picturefill */
        if (typeof module === "object" && typeof module.exports === "object") {
            // CommonJS, just export
            module.exports = picturefill;
        } else if (typeof define === "function" && define.amd) {
            // AMD support
            define("picturefill", function () {
                return picturefill;
            });
        }
        if (typeof w === "object") {
            // If no AMD and we are in the browser, attach to window
            w.picturefill = picturefill;
        }
    }

    // If picture is supported, well, that's awesome. Let's get outta here...
    if (w.HTMLPictureElement) {
        expose(function () {
        });
        return;
    }

    // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
    doc.createElement("picture");

    // local object for method references and testing exposure
    var pf = w.picturefill || {};

    var regWDesc = /\s+\+?\d+(e\d+)?w/;

    // namespace
    pf.ns = "picturefill";

    // srcset support test
    (function () {
        pf.srcsetSupported = "srcset" in image;
        pf.sizesSupported = "sizes" in image;
        pf.curSrcSupported = "currentSrc" in image;
    })();

    // just a string trim workaround
    pf.trim = function (str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    };

    /**
     * Gets a string and returns the absolute URL
     * @param src
     * @returns {String} absolute URL
     */
    pf.makeUrl = (function () {
        var anchor = doc.createElement("a");
        return function (src) {
            anchor.href = src;
            return anchor.href;
        };
    })();

    /**
     * Shortcut method for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
     */
    pf.restrictsMixedContent = function () {
        return w.location.protocol === "https:";
    };
    /**
     * Shortcut method for matchMedia ( for easy overriding in tests )
     */

    pf.matchesMedia = function (media) {
        return w.matchMedia && w.matchMedia(media).matches;
    };

    // Shortcut method for `devicePixelRatio` ( for easy overriding in tests )
    pf.getDpr = function () {
        return (w.devicePixelRatio || 1);
    };

    /**
     * Get width in css pixel value from a "length" value
     * http://dev.w3.org/csswg/css-values-3/#length-value
     */
    pf.getWidthFromLength = function (length) {
        var cssValue;
        // If a length is specified and doesn’t contain a percentage, and it is greater than 0 or using `calc`, use it. Else, abort.
        if (!(length && length.indexOf("%") > -1 === false && (parseFloat(length) > 0 || length.indexOf("calc(") > -1))) {
            return false;
        }

        /**
         * If length is specified in  `vw` units, use `%` instead since the div we’re measuring
         * is injected at the top of the document.
         *
         * TODO: maybe we should put this behind a feature test for `vw`? The risk of doing this is possible browser inconsistancies with vw vs %
         */
        length = length.replace("vw", "%");

        // Create a cached element for getting length value widths
        if (!pf.lengthEl) {
            pf.lengthEl = doc.createElement("div");

            // Positioning styles help prevent padding/margin/width on `html` or `body` from throwing calculations off.
            pf.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden";

            // Add a class, so that everyone knows where this element comes from
            pf.lengthEl.className = "helper-from-picturefill-js";
        }

        pf.lengthEl.style.width = "0px";

        try {
            pf.lengthEl.style.width = length;
        } catch (e) {
        }

        doc.body.appendChild(pf.lengthEl);

        cssValue = pf.lengthEl.offsetWidth;

        if (cssValue <= 0) {
            cssValue = false;
        }

        doc.body.removeChild(pf.lengthEl);

        return cssValue;
    };

    pf.detectTypeSupport = function (type, typeUri) {
        // based on Modernizr's lossless img-webp test
        // note: asynchronous
        var image = new w.Image();
        image.onerror = function () {
            pf.types[type] = false;
            picturefill();
        };
        image.onload = function () {
            pf.types[type] = image.width === 1;
            picturefill();
        };
        image.src = typeUri;

        return "pending";
    };
    // container of supported mime types that one might need to qualify before using
    pf.types = pf.types || {};

    pf.initTypeDetects = function () {
        // Add support for standard mime types
        pf.types["image/jpeg"] = true;
        pf.types["image/gif"] = true;
        pf.types["image/png"] = true;
        pf.types["image/svg+xml"] = doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        pf.types["image/webp"] = pf.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=");
    };

    pf.verifyTypeSupport = function (source) {
        var type = source.getAttribute("type");
        // if type attribute exists, return test result, otherwise return true
        if (type === null || type === "") {
            return true;
        } else {
            var pfType = pf.types[type];
            // if the type test is a function, run it and return "pending" status. The function will rerun picturefill on pending elements once finished.
            if (typeof pfType === "string" && pfType !== "pending") {
                pf.types[type] = pf.detectTypeSupport(type, pfType);
                return "pending";
            } else if (typeof pfType === "function") {
                pfType();
                return "pending";
            } else {
                return pfType;
            }
        }
    };

    // Parses an individual `size` and returns the length, and optional media query
    pf.parseSize = function (sourceSizeStr) {
        var match = /(\([^)]+\))?\s*(.+)/g.exec(sourceSizeStr);
        return {
            media: match && match[1],
            length: match && match[2]
        };
    };

    // Takes a string of sizes and returns the width in pixels as a number
    pf.findWidthFromSourceSize = function (sourceSizeListStr) {
        // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
        //                            or (min-width:30em) calc(30% - 15px)
        var sourceSizeList = pf.trim(sourceSizeListStr).split(/\s*,\s*/),
            winningLength;

        for (var i = 0, len = sourceSizeList.length; i < len; i++) {
            // Match <media-condition>? length, ie ( min-width: 50em ) 100%
            var sourceSize = sourceSizeList[i],
                // Split "( min-width: 50em ) 100%" into separate strings
                parsedSize = pf.parseSize(sourceSize),
                length = parsedSize.length,
                media = parsedSize.media;

            if (!length) {
                continue;
            }
            // if there is no media query or it matches, choose this as our winning length
            if ((!media || pf.matchesMedia(media)) &&
                // pass the length to a method that can properly determine length
                // in pixels based on these formats: http://dev.w3.org/csswg/css-values-3/#length-value
                (winningLength = pf.getWidthFromLength(length))) {
                break;
            }
        }

        //if we have no winningLength fallback to 100vw
        return winningLength || Math.max(w.innerWidth || 0, doc.documentElement.clientWidth);
    };

    pf.parseSrcset = function (srcset) {
        /**
         * A lot of this was pulled from Boris Smus’ parser for the now-defunct WHATWG `srcset`
         * https://github.com/borismus/srcset-polyfill/blob/master/js/srcset-info.js
         *
         * 1. Let input (`srcset`) be the value passed to this algorithm.
         * 2. Let position be a pointer into input, initially pointing at the start of the string.
         * 3. Let raw candidates be an initially empty ordered list of URLs with associated
         *    unparsed descriptors. The order of entries in the list is the order in which entries
         *    are added to the list.
         */
        var candidates = [];

        while (srcset !== "") {
            srcset = srcset.replace(/^\s+/g, "");

            // 5. Collect a sequence of characters that are not space characters, and let that be url.
            var pos = srcset.search(/\s/g),
                url, descriptor = null;

            if (pos !== -1) {
                url = srcset.slice(0, pos);

                var last = url.slice(-1);

                // 6. If url ends with a U+002C COMMA character (,), remove that character from url
                // and let descriptors be the empty string. Otherwise, follow these substeps
                // 6.1. If url is empty, then jump to the step labeled descriptor parser.

                if (last === "," || url === "") {
                    url = url.replace(/,+$/, "");
                    descriptor = "";
                }
                srcset = srcset.slice(pos + 1);

                // 6.2. Collect a sequence of characters that are not U+002C COMMA characters (,), and
                // let that be descriptors.
                if (descriptor === null) {
                    var descpos = srcset.indexOf(",");
                    if (descpos !== -1) {
                        descriptor = srcset.slice(0, descpos);
                        srcset = srcset.slice(descpos + 1);
                    } else {
                        descriptor = srcset;
                        srcset = "";
                    }
                }
            } else {
                url = srcset;
                srcset = "";
            }

            // 7. Add url to raw candidates, associated with descriptors.
            if (url || descriptor) {
                candidates.push({
                    url: url,
                    descriptor: descriptor
                });
            }
        }
        return candidates;
    };

    pf.parseDescriptor = function (descriptor, sizesattr) {
        // 11. Descriptor parser: Let candidates be an initially empty source set. The order of entries in the list
        // is the order in which entries are added to the list.
        var sizes = sizesattr || "100vw",
            sizeDescriptor = descriptor && descriptor.replace(/(^\s+|\s+$)/g, ""),
            widthInCssPixels = pf.findWidthFromSourceSize(sizes),
            resCandidate;

        if (sizeDescriptor) {
            var splitDescriptor = sizeDescriptor.split(" ");

            for (var i = splitDescriptor.length - 1; i >= 0; i--) {
                var curr = splitDescriptor[i],
                    lastchar = curr && curr.slice(curr.length - 1);

                if ((lastchar === "h" || lastchar === "w") && !pf.sizesSupported) {
                    resCandidate = parseFloat((parseInt(curr, 10) / widthInCssPixels));
                } else if (lastchar === "x") {
                    var res = curr && parseFloat(curr, 10);
                    resCandidate = res && !isNaN(res) ? res : 1;
                }
            }
        }
        return resCandidate || 1;
    };

    /**
     * Takes a srcset in the form of url/
     * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
     *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
     *     "images/pic-small.png"
     * Get an array of image candidates in the form of
     *      {url: "/foo/bar.png", resolution: 1}
     * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
     * If sizes is specified, resolution is calculated
     */
    pf.getCandidatesFromSourceSet = function (srcset, sizes) {
        var candidates = pf.parseSrcset(srcset),
            formattedCandidates = [];

        for (var i = 0, len = candidates.length; i < len; i++) {
            var candidate = candidates[i];

            formattedCandidates.push({
                url: candidate.url,
                resolution: pf.parseDescriptor(candidate.descriptor, sizes)
            });
        }
        return formattedCandidates;
    };

    /**
     * if it's an img element and it has a srcset property,
     * we need to remove the attribute so we can manipulate src
     * (the property's existence infers native srcset support, and a srcset-supporting browser will prioritize srcset's value over our winning picture candidate)
     * this moves srcset's value to memory for later use and removes the attr
     */
    pf.dodgeSrcset = function (img) {
        if (img.srcset) {
            img[pf.ns].srcset = img.srcset;
            img.srcset = "";
            img.setAttribute("data-pfsrcset", img[pf.ns].srcset);
        }
    };

    // Accept a source or img element and process its srcset and sizes attrs
    pf.processSourceSet = function (el) {
        var srcset = el.getAttribute("srcset"),
            sizes = el.getAttribute("sizes"),
            candidates = [];

        // if it's an img element, use the cached srcset property (defined or not)
        if (el.nodeName.toUpperCase() === "IMG" && el[pf.ns] && el[pf.ns].srcset) {
            srcset = el[pf.ns].srcset;
        }

        if (srcset) {
            candidates = pf.getCandidatesFromSourceSet(srcset, sizes);
        }
        return candidates;
    };

    pf.backfaceVisibilityFix = function (picImg) {
        // See: https://github.com/scottjehl/picturefill/issues/332
        var style = picImg.style || {},
            WebkitBackfaceVisibility = "webkitBackfaceVisibility" in style,
            currentZoom = style.zoom;

        if (WebkitBackfaceVisibility) {
            style.zoom = ".999";

            WebkitBackfaceVisibility = picImg.offsetWidth;

            style.zoom = currentZoom;
        }
    };

    pf.setIntrinsicSize = (function () {
        var urlCache = {};
        var setSize = function (picImg, width, res) {
            if (width) {
                picImg.setAttribute("width", parseInt(width / res, 10));
            }
        };
        return function (picImg, bestCandidate) {
            var img;
            if (!picImg[pf.ns] || w.pfStopIntrinsicSize) {
                return;
            }
            if (picImg[pf.ns].dims === undefined) {
                picImg[pf.ns].dims = picImg.getAttribute("width") || picImg.getAttribute("height");
            }
            if (picImg[pf.ns].dims) {
                return;
            }

            if (bestCandidate.url in urlCache) {
                setSize(picImg, urlCache[bestCandidate.url], bestCandidate.resolution);
            } else {
                img = doc.createElement("img");
                img.onload = function () {
                    urlCache[bestCandidate.url] = img.width;

                    //IE 10/11 don't calculate width for svg outside document
                    if (!urlCache[bestCandidate.url]) {
                        try {
                            doc.body.appendChild(img);
                            urlCache[bestCandidate.url] = img.width || img.offsetWidth;
                            doc.body.removeChild(img);
                        } catch (e) {
                        }
                    }

                    if (picImg.src === bestCandidate.url) {
                        setSize(picImg, urlCache[bestCandidate.url], bestCandidate.resolution);
                    }
                    picImg = null;
                    img.onload = null;
                    img = null;
                };
                img.src = bestCandidate.url;
            }
        };
    })();

    pf.applyBestCandidate = function (candidates, picImg) {
        var candidate,
            length,
            bestCandidate;

        candidates.sort(pf.ascendingSort);

        length = candidates.length;
        bestCandidate = candidates[length - 1];

        for (var i = 0; i < length; i++) {
            candidate = candidates[i];
            if (candidate.resolution >= pf.getDpr()) {
                bestCandidate = candidate;
                break;
            }
        }

        if (bestCandidate) {

            bestCandidate.url = pf.makeUrl(bestCandidate.url);

            if (picImg.src !== bestCandidate.url) {
                if (pf.restrictsMixedContent() && bestCandidate.url.substr(0, "http:".length).toLowerCase() === "http:") {
                    if (window.console !== undefined) {
                        console.warn("Blocked mixed content image " + bestCandidate.url);
                    }
                } else {
                    picImg.src = bestCandidate.url;
                    // currentSrc attribute and property to match
                    // http://picture.responsiveimages.org/#the-img-element
                    if (!pf.curSrcSupported) {
                        picImg.currentSrc = picImg.src;
                    }

                    pf.backfaceVisibilityFix(picImg);
                }
            }

            pf.setIntrinsicSize(picImg, bestCandidate);
        }
    };

    pf.ascendingSort = function (a, b) {
        return a.resolution - b.resolution;
    };

    /**
     * In IE9, <source> elements get removed if they aren't children of
     * video elements. Thus, we conditionally wrap source elements
     * using <!--[if IE 9]><video style="display: none;"><![endif]-->
     * and must account for that here by moving those source elements
     * back into the picture element.
     */
    pf.removeVideoShim = function (picture) {
        var videos = picture.getElementsByTagName("video");
        if (videos.length) {
            var video = videos[0],
                vsources = video.getElementsByTagName("source");
            while (vsources.length) {
                picture.insertBefore(vsources[0], video);
            }
            // Remove the video element once we're finished removing its children
            video.parentNode.removeChild(video);
        }
    };

    /**
     * Find all `img` elements, and add them to the candidate list if they have
     * a `picture` parent, a `sizes` attribute in basic `srcset` supporting browsers,
     * a `srcset` attribute at all, and they haven’t been evaluated already.
     */
    pf.getAllElements = function () {
        var elems = [],
            imgs = doc.getElementsByTagName("img");

        for (var h = 0, len = imgs.length; h < len; h++) {
            var currImg = imgs[h];

            if (currImg.parentNode.nodeName.toUpperCase() === "PICTURE" ||
                (currImg.getAttribute("srcset") !== null) || currImg[pf.ns] && currImg[pf.ns].srcset !== null) {
                elems.push(currImg);
            }
        }
        return elems;
    };

    pf.getMatch = function (img, picture) {
        var sources = picture.childNodes,
            match;

        // Go through each child, and if they have media queries, evaluate them
        for (var j = 0, slen = sources.length; j < slen; j++) {
            var source = sources[j];

            // ignore non-element nodes
            if (source.nodeType !== 1) {
                continue;
            }

            // Hitting the `img` element that started everything stops the search for `sources`.
            // If no previous `source` matches, the `img` itself is evaluated later.
            if (source === img) {
                return match;
            }

            // ignore non-`source` nodes
            if (source.nodeName.toUpperCase() !== "SOURCE") {
                continue;
            }
            // if it's a source element that has the `src` property set, throw a warning in the console
            if (source.getAttribute("src") !== null && typeof console !== undefined) {
                console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
            }

            var media = source.getAttribute("media");

            // if source does not have a srcset attribute, skip
            if (!source.getAttribute("srcset")) {
                continue;
            }

            // if there's no media specified, OR w.matchMedia is supported
            if ((!media || pf.matchesMedia(media))) {
                var typeSupported = pf.verifyTypeSupport(source);

                if (typeSupported === true) {
                    match = source;
                    break;
                } else if (typeSupported === "pending") {
                    return false;
                }
            }
        }

        return match;
    };

    function picturefill(opt) {
        var elements,
            element,
            parent,
            firstMatch,
            candidates,
            options = opt || {};

        elements = options.elements || pf.getAllElements();

        // Loop through all elements
        for (var i = 0, plen = elements.length; i < plen; i++) {
            element = elements[i];
            parent = element.parentNode;
            firstMatch = undefined;
            candidates = undefined;

            // immediately skip non-`img` nodes
            if (element.nodeName.toUpperCase() !== "IMG") {
                continue;
            }

            // expando for caching data on the img
            if (!element[pf.ns]) {
                element[pf.ns] = {};
            }

            // if the element has already been evaluated, skip it unless
            // `options.reevaluate` is set to true ( this, for example,
            // is set to true when running `picturefill` on `resize` ).
            if (!options.reevaluate && element[pf.ns].evaluated) {
                continue;
            }

            // if `img` is in a `picture` element
            if (parent && parent.nodeName.toUpperCase() === "PICTURE") {

                // IE9 video workaround
                pf.removeVideoShim(parent);

                // return the first match which might undefined
                // returns false if there is a pending source
                // TODO the return type here is brutal, cleanup
                firstMatch = pf.getMatch(element, parent);

                // if any sources are pending in this picture due to async type test(s)
                // remove the evaluated attr and skip for now ( the pending test will
                // rerun picturefill on this element when complete)
                if (firstMatch === false) {
                    continue;
                }
            } else {
                firstMatch = undefined;
            }

            // Cache and remove `srcset` if present and we’re going to be doing `picture`/`srcset`/`sizes` polyfilling to it.
            if ((parent && parent.nodeName.toUpperCase() === "PICTURE") ||
                (!pf.sizesSupported && (element.srcset && regWDesc.test(element.srcset)))) {
                pf.dodgeSrcset(element);
            }

            if (firstMatch) {
                candidates = pf.processSourceSet(firstMatch);
                pf.applyBestCandidate(candidates, element);
            } else {
                // No sources matched, so we’re down to processing the inner `img` as a source.
                candidates = pf.processSourceSet(element);

                if (element.srcset === undefined || element[pf.ns].srcset) {
                    // Either `srcset` is completely unsupported, or we need to polyfill `sizes` functionality.
                    pf.applyBestCandidate(candidates, element);
                } // Else, resolution-only `srcset` is supported natively.
            }

            // set evaluated to true to avoid unnecessary reparsing
            element[pf.ns].evaluated = true;
        }
    }

    /**
     * Sets up picture polyfill by polling the document and running
     * the polyfill every 250ms until the document is ready.
     * Also attaches picturefill on resize
     */
    function runPicturefill() {
        pf.initTypeDetects();
        picturefill();
        var intervalId = setInterval(function () {
            // When the document has finished loading, stop checking for new images
            // https://github.com/ded/domready/blob/master/ready.js#L15
            picturefill();

            if (/^loaded|^i|^c/.test(doc.readyState)) {
                clearInterval(intervalId);
                return;
            }
        }, 250);

        var resizeTimer;
        var handleResize = function () {
            picturefill({reevaluate: true});
        };

        function checkResize() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 60);
        }

        if (w.addEventListener) {
            w.addEventListener("resize", checkResize, false);
        } else if (w.attachEvent) {
            w.attachEvent("onresize", checkResize);
        }
    }

    runPicturefill();

    /* expose methods for testing */
    picturefill._ = pf;

    expose(picturefill);

})(window, window.document, new window.Image());
/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function (w) {
    "use strict";
    // Bail out for browsers that have addListener support
    if (w.matchMedia && w.matchMedia('all').addListener) {
        return false;
    }

    var localMatchMedia = w.matchMedia,
        hasMediaQueries = localMatchMedia('only all').matches,
        isListening = false,
        timeoutID = 0,    // setTimeout for debouncing 'handleChange'
        queries = [],   // Contains each 'mql' and associated 'listeners' if 'addListener' is used
        handleChange = function (evt) {
            // Debounce
            w.clearTimeout(timeoutID);

            timeoutID = w.setTimeout(function () {
                for (var i = 0, il = queries.length; i < il; i++) {
                    var mql = queries[i].mql,
                        listeners = queries[i].listeners || [],
                        matches = localMatchMedia(mql.media).matches;

                    // Update mql.matches value and call listeners
                    // Fire listeners only if transitioning to or from matched state
                    if (matches !== mql.matches) {
                        mql.matches = matches;

                        for (var j = 0, jl = listeners.length; j < jl; j++) {
                            listeners[j].call(w, mql);
                        }
                    }
                }
            }, 30);
        };

    w.matchMedia = function (media) {
        var mql = localMatchMedia(media),
            listeners = [],
            index = 0;

        mql.addListener = function (listener) {
            // Changes would not occur to css media type so return now (Affects IE <= 8)
            if (!hasMediaQueries) {
                return;
            }

            // Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
            // There should only ever be 1 resize listener running for performance
            if (!isListening) {
                isListening = true;
                w.addEventListener('resize', handleChange, true);
            }

            // Push object only if it has not been pushed already
            if (index === 0) {
                index = queries.push({
                    mql: mql,
                    listeners: listeners
                });
            }

            listeners.push(listener);
        };

        mql.removeListener = function (listener) {
            for (var i = 0, il = listeners.length; i < il; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                }
            }
        };

        return mql;
    };
}(this));
/* Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
(function (w) {

    "use strict";

    //exposed namespace
    var respond = {};
    w.respond = respond;

    //define update even in native-mq-supporting browsers, to avoid errors
    respond.update = function () {
    };

    //define ajax obj
    var requestQueue = [],
        xmlHttp = (function () {
            var xmlhttpmethod = false;
            try {
                xmlhttpmethod = new w.XMLHttpRequest();
            }
            catch (e) {
                xmlhttpmethod = new w.ActiveXObject("Microsoft.XMLHTTP");
            }
            return function () {
                return xmlhttpmethod;
            };
        })(),

        //tweaked Ajax functions from Quirksmode
        ajax = function (url, callback) {
            var req = xmlHttp();
            if (!req) {
                return;
            }
            req.open("GET", url, true);
            req.onreadystatechange = function () {
                if (req.readyState !== 4 || req.status !== 200 && req.status !== 304) {
                    return;
                }
                callback(req.responseText);
            };
            if (req.readyState === 4) {
                return;
            }
            req.send(null);
        },
        isUnsupportedMediaQuery = function (query) {
            return query.replace(respond.regex.minmaxwh, '').match(respond.regex.other);
        };

    //expose for testing
    respond.ajax = ajax;
    respond.queue = requestQueue;
    respond.unsupportedmq = isUnsupportedMediaQuery;
    respond.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    };

    //expose media query support flag for external use
    respond.mediaQueriesSupported = w.matchMedia && w.matchMedia("only all") !== null && w.matchMedia("only all").matches;

    //if media queries are supported, exit here
    if (respond.mediaQueriesSupported) {
        return;
    }

    //define vars
    var doc = w.document,
        docElem = doc.documentElement,
        mediastyles = [],
        rules = [],
        appendedEls = [],
        parsedSheets = {},
        resizeThrottle = 30,
        head = doc.getElementsByTagName("head")[0] || docElem,
        base = doc.getElementsByTagName("base")[0],
        links = head.getElementsByTagName("link"),

        lastCall,
        resizeDefer,

        //cached container for 1em value, populated the first time it's needed
        eminpx,

        // returns the value of 1em in pixels
        getEmValue = function () {
            var ret,
                div = doc.createElement('div'),
                body = doc.body,
                originalHTMLFontSize = docElem.style.fontSize,
                originalBodyFontSize = body && body.style.fontSize,
                fakeUsed = false;

            div.style.cssText = "position:absolute;font-size:1em;width:1em";

            if (!body) {
                body = fakeUsed = doc.createElement("body");
                body.style.background = "none";
            }

            // 1em in a media query is the value of the default font size of the browser
            // reset docElem and body to ensure the correct value is returned
            docElem.style.fontSize = "100%";
            body.style.fontSize = "100%";

            body.appendChild(div);

            if (fakeUsed) {
                docElem.insertBefore(body, docElem.firstChild);
            }

            ret = div.offsetWidth;

            if (fakeUsed) {
                docElem.removeChild(body);
            }
            else {
                body.removeChild(div);
            }

            // restore the original values
            docElem.style.fontSize = originalHTMLFontSize;
            if (originalBodyFontSize) {
                body.style.fontSize = originalBodyFontSize;
            }


            //also update eminpx before returning
            ret = eminpx = parseFloat(ret);

            return ret;
        },

        //enable/disable styles
        applyMedia = function (fromResize) {
            var name = "clientWidth",
                docElemProp = docElem[name],
                currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[name] || docElemProp,
                styleBlocks = {},
                lastLink = links[links.length - 1],
                now = (new Date()).getTime();

            //throttle resize calls
            if (fromResize && lastCall && now - lastCall < resizeThrottle) {
                w.clearTimeout(resizeDefer);
                resizeDefer = w.setTimeout(applyMedia, resizeThrottle);
                return;
            }
            else {
                lastCall = now;
            }

            for (var i in mediastyles) {
                if (mediastyles.hasOwnProperty(i)) {
                    var thisstyle = mediastyles[i],
                        min = thisstyle.minw,
                        max = thisstyle.maxw,
                        minnull = min === null,
                        maxnull = max === null,
                        em = "em";

                    if (!!min) {
                        min = parseFloat(min) * (min.indexOf(em) > -1 ? (eminpx || getEmValue()) : 1);
                    }
                    if (!!max) {
                        max = parseFloat(max) * (max.indexOf(em) > -1 ? (eminpx || getEmValue()) : 1);
                    }

                    // if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
                    if (!thisstyle.hasquery || (!minnull || !maxnull) && (minnull || currWidth >= min) && (maxnull || currWidth <= max)) {
                        if (!styleBlocks[thisstyle.media]) {
                            styleBlocks[thisstyle.media] = [];
                        }
                        styleBlocks[thisstyle.media].push(rules[thisstyle.rules]);
                    }
                }
            }

            //remove any existing respond style element(s)
            for (var j in appendedEls) {
                if (appendedEls.hasOwnProperty(j)) {
                    if (appendedEls[j] && appendedEls[j].parentNode === head) {
                        head.removeChild(appendedEls[j]);
                    }
                }
            }
            appendedEls.length = 0;

            //inject active styles, grouped by media type
            for (var k in styleBlocks) {
                if (styleBlocks.hasOwnProperty(k)) {
                    var ss = doc.createElement("style"),
                        css = styleBlocks[k].join("\n");

                    ss.type = "text/css";
                    ss.media = k;

                    //originally, ss was appended to a documentFragment and sheets were appended in bulk.
                    //this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
                    head.insertBefore(ss, lastLink.nextSibling);

                    if (ss.styleSheet) {
                        ss.styleSheet.cssText = css;
                    }
                    else {
                        ss.appendChild(doc.createTextNode(css));
                    }

                    //push to appendedEls to track for later removal
                    appendedEls.push(ss);
                }
            }
        },
        //find media blocks in css text, convert to style blocks
        translate = function (styles, href, media) {
            var qs = styles.replace(respond.regex.comments, '')
                    .replace(respond.regex.keyframes, '')
                    .match(respond.regex.media),
                ql = qs && qs.length || 0;

            //try to get CSS path
            href = href.substring(0, href.lastIndexOf("/"));

            var repUrls = function (css) {
                    return css.replace(respond.regex.urls, "$1" + href + "$2$3");
                },
                useMedia = !ql && media;

            //if path exists, tack on trailing slash
            if (href.length) {
                href += "/";
            }

            //if no internal queries exist, but media attr does, use that
            //note: this currently lacks support for situations where a media attr is specified on a link AND
            //its associated stylesheet has internal CSS media queries.
            //In those cases, the media attribute will currently be ignored.
            if (useMedia) {
                ql = 1;
            }

            for (var i = 0; i < ql; i++) {
                var fullq, thisq, eachq, eql;

                //media attr
                if (useMedia) {
                    fullq = media;
                    rules.push(repUrls(styles));
                }
                //parse for styles
                else {
                    fullq = qs[i].match(respond.regex.findStyles) && RegExp.$1;
                    rules.push(RegExp.$2 && repUrls(RegExp.$2));
                }

                eachq = fullq.split(",");
                eql = eachq.length;

                for (var j = 0; j < eql; j++) {
                    thisq = eachq[j];

                    if (isUnsupportedMediaQuery(thisq)) {
                        continue;
                    }

                    mediastyles.push({
                        media: thisq.split("(")[0].match(respond.regex.only) && RegExp.$2 || "all",
                        rules: rules.length - 1,
                        hasquery: thisq.indexOf("(") > -1,
                        minw: thisq.match(respond.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: thisq.match(respond.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    });
                }
            }

            applyMedia();
        },

        //recurse through request queue, get css text
        makeRequests = function () {
            if (requestQueue.length) {
                var thisRequest = requestQueue.shift();

                ajax(thisRequest.href, function (styles) {
                    translate(styles, thisRequest.href, thisRequest.media);
                    parsedSheets[thisRequest.href] = true;

                    // by wrapping recursive function call in setTimeout
                    // we prevent "Stack overflow" error in IE7
                    w.setTimeout(function () {
                        makeRequests();
                    }, 0);
                });
            }
        },

        //loop stylesheets, send text content to translate
        ripCSS = function () {

            for (var i = 0; i < links.length; i++) {
                var sheet = links[i],
                    href = sheet.href,
                    media = sheet.media,
                    isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";

                //only links plz and prevent re-parsing
                if (!!href && isCSS && !parsedSheets[href]) {
                    // selectivizr exposes css through the rawCssText expando
                    if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
                        translate(sheet.styleSheet.rawCssText, href, media);
                        parsedSheets[href] = true;
                    } else {
                        if ((!/^([a-zA-Z:]*\/\/)/.test(href) && !base) ||
                            href.replace(RegExp.$1, "").split("/")[0] === w.location.host) {
                            // IE7 doesn't handle urls that start with '//' for ajax request
                            // manually add in the protocol
                            if (href.substring(0, 2) === "//") {
                                href = w.location.protocol + href;
                            }
                            requestQueue.push({
                                href: href,
                                media: media
                            });
                        }
                    }
                }
            }
            makeRequests();
        };

    //translate CSS
    ripCSS();

    //expose update for re-running respond later on
    respond.update = ripCSS;

    //expose getEmValue
    respond.getEmValue = getEmValue;

    //adjust on resize
    function callMedia() {
        applyMedia(true);
    }

    if (w.addEventListener) {
        w.addEventListener("resize", callMedia, false);
    }
    else if (w.attachEvent) {
        w.attachEvent("onresize", callMedia);
    }
})(this);
/*!
 * JavaScript Cookie v2.0.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var _OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
            window.Cookies = _OldCookies;
            return api;
        };
    }
}(function () {
    function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function init(converter) {
        function api(key, value, attributes) {
            var result;

            // Write

            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);

                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }

                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {
                }

                if (!converter.write) {
                    value = encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                } else {
                    value = converter.write(value, key);
                }

                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);

                return (document.cookie = [
                    key, '=', value,
                    attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
                    attributes.path && '; path=' + attributes.path,
                    attributes.domain && '; domain=' + attributes.domain,
                    attributes.secure ? '; secure' : ''
                ].join(''));
            }

            // Read

            if (!key) {
                result = {};
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var name = parts[0].replace(rdecode, decodeURIComponent);
                var cookie = parts.slice(1).join('=');

                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    cookie = converter.read ?
                        converter.read(cookie, name) : converter(cookie, name) ||
                        cookie.replace(rdecode, decodeURIComponent);

                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {
                        }
                    }

                    if (key === name) {
                        result = cookie;
                        break;
                    }

                    if (!key) {
                        result[name] = cookie;
                    }
                } catch (e) {
                }
            }

            return result;
        }

        api.get = api.set = api;
        api.getJSON = function () {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};

        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.withConverter = init;

        return api;
    }

    return init(function () {
    });
}));
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty,
        k = {}, l = a.document, m = "2.1.4", n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P),
            W = new RegExp("^" + N + "$"), X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = ma(b);
        for (b in{submit: !0, reset: !0}) d.pseudos[b] = na(b);

        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(n(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;
                while (e = f[j++]) fa.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }

    var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {position: "absolute", visibility: "hidden", display: "block"},
        Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--) if (b = Ea[e] + c, b in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Ja(this, !0)
        }, hide: function () {
            return Ja(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }

    n.Tween = Ka, Ka.prototype = {
        constructor: Ka, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/, Qa = [Va], Ra = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"),
        ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {}, f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(),
                p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? e : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1}) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(xb, "\r\n")}
                }) : {name: b.name, value: c.replace(xb, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});

/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {
    }

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in it's storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (typeof evt === 'object') {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after it's first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of it's properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (type === 'object') {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('eventEmitter/EventEmitter', [], function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = EventEmitter;
    }
    else {
        this.EventEmitter = EventEmitter;
    }
}.call(this));

/*!
 * eventie v1.0.4
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false */

(function (window) {


    var docElem = document.documentElement;

    var bind = function () {
    };

    function getIEEvent(obj) {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement || obj;
        return event;
    }

    if (docElem.addEventListener) {
        bind = function (obj, type, fn) {
            obj.addEventListener(type, fn, false);
        };
    } else if (docElem.attachEvent) {
        bind = function (obj, type, fn) {
            obj[type + fn] = fn.handleEvent ?
                function () {
                    var event = getIEEvent(obj);
                    fn.handleEvent.call(fn, event);
                } :
                function () {
                    var event = getIEEvent(obj);
                    fn.call(obj, event);
                };
            obj.attachEvent("on" + type, obj[type + fn]);
        };
    }

    var unbind = function () {
    };

    if (docElem.removeEventListener) {
        unbind = function (obj, type, fn) {
            obj.removeEventListener(type, fn, false);
        };
    } else if (docElem.detachEvent) {
        unbind = function (obj, type, fn) {
            obj.detachEvent("on" + type, obj[type + fn]);
            try {
                delete obj[type + fn];
            } catch (err) {
                // can't delete window object properties
                obj[type + fn] = undefined;
            }
        };
    }

    var eventie = {
        bind: bind,
        unbind: unbind
    };

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('eventie/eventie', eventie);
    } else {
        // browser global
        window.eventie = eventie;
    }

})(this);

/*!
 * imagesLoaded v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function (window, factory) {
    'use strict';
    // universal module definition

    /*global define: false, module: false, require: false */

    if (typeof define == 'function' && define.amd) {
        // AMD
        define([
            'eventEmitter/EventEmitter',
            'eventie/eventie'
        ], function (EventEmitter, eventie) {
            return factory(window, EventEmitter, eventie);
        });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            window,
            require('wolfy87-eventemitter'),
            require('eventie')
        );
    } else {
        // browser global
        window.imagesLoaded = factory(
            window,
            window.EventEmitter,
            window.eventie
        );
    }

})(window,

// --------------------------  factory -------------------------- //

    function factory(window, EventEmitter, eventie) {


        var $ = window.jQuery;
        var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
        function extend(a, b) {
            for (var prop in b) {
                a[prop] = b[prop];
            }
            return a;
        }

        var objToString = Object.prototype.toString;

        function isArray(obj) {
            return objToString.call(obj) == '[object Array]';
        }

// turn element or nodeList into an array
        function makeArray(obj) {
            var ary = [];
            if (isArray(obj)) {
                // use object if already an array
                ary = obj;
            } else if (typeof obj.length == 'number') {
                // convert nodeList to array
                for (var i = 0; i < obj.length; i++) {
                    ary.push(obj[i]);
                }
            } else {
                // array of single index
                ary.push(obj);
            }
            return ary;
        }

        // -------------------------- imagesLoaded -------------------------- //

        /**
         * @param {Array, Element, NodeList, String} elem
         * @param {Object or Function} options - if function, use as callback
         * @param {Function} onAlways - callback function
         */
        function ImagesLoaded(elem, options, onAlways) {
            // coerce ImagesLoaded() without new, to be new ImagesLoaded()
            if (!(this instanceof ImagesLoaded)) {
                return new ImagesLoaded(elem, options, onAlways);
            }
            // use elem as selector string
            if (typeof elem == 'string') {
                elem = document.querySelectorAll(elem);
            }

            this.elements = makeArray(elem);
            this.options = extend({}, this.options);

            if (typeof options == 'function') {
                onAlways = options;
            } else {
                extend(this.options, options);
            }

            if (onAlways) {
                this.on('always', onAlways);
            }

            this.getImages();

            if ($) {
                // add jQuery Deferred object
                this.jqDeferred = new $.Deferred();
            }

            // HACK check async to allow time to bind listeners
            var _this = this;
            setTimeout(function () {
                _this.check();
            });
        }

        ImagesLoaded.prototype = new EventEmitter();

        ImagesLoaded.prototype.options = {};

        ImagesLoaded.prototype.getImages = function () {
            this.images = [];

            // filter & find items if we have an item selector
            for (var i = 0; i < this.elements.length; i++) {
                var elem = this.elements[i];
                this.addElementImages(elem);
            }
        };

        /**
         * @param {Node} element
         */
        ImagesLoaded.prototype.addElementImages = function (elem) {
            // filter siblings
            if (elem.nodeName == 'IMG') {
                this.addImage(elem);
            }
            // get background image on element
            if (this.options.background === true) {
                this.addElementBackgroundImages(elem);
            }

            // find children
            // no non-element nodes, #143
            var nodeType = elem.nodeType;
            if (!nodeType || !elementNodeTypes[nodeType]) {
                return;
            }
            var childImgs = elem.querySelectorAll('img');
            // concat childElems to filterFound array
            for (var i = 0; i < childImgs.length; i++) {
                var img = childImgs[i];
                this.addImage(img);
            }

            // get child background images
            if (typeof this.options.background == 'string') {
                var children = elem.querySelectorAll(this.options.background);
                for (i = 0; i < children.length; i++) {
                    var child = children[i];
                    this.addElementBackgroundImages(child);
                }
            }
        };

        var elementNodeTypes = {
            1: true,
            9: true,
            11: true
        };

        ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
            var style = getStyle(elem);
            // get url inside url("...")
            var reURL = /url\(['"]*([^'"\)]+)['"]*\)/gi;
            var matches = reURL.exec(style.backgroundImage);
            while (matches !== null) {
                var url = matches && matches[1];
                if (url) {
                    this.addBackground(url, elem);
                }
                matches = reURL.exec(style.backgroundImage);
            }
        };

        // IE8
        var getStyle = window.getComputedStyle || function (elem) {
            return elem.currentStyle;
        };

        /**
         * @param {Image} img
         */
        ImagesLoaded.prototype.addImage = function (img) {
            var loadingImage = new LoadingImage(img);
            this.images.push(loadingImage);
        };

        ImagesLoaded.prototype.addBackground = function (url, elem) {
            var background = new Background(url, elem);
            this.images.push(background);
        };

        ImagesLoaded.prototype.check = function () {
            var _this = this;
            this.progressedCount = 0;
            this.hasAnyBroken = false;
            // complete if no images
            if (!this.images.length) {
                this.complete();
                return;
            }

            function onProgress(image, elem, message) {
                // HACK - Chrome triggers event before object properties have changed. #83
                setTimeout(function () {
                    _this.progress(image, elem, message);
                });
            }

            for (var i = 0; i < this.images.length; i++) {
                var loadingImage = this.images[i];
                loadingImage.once('progress', onProgress);
                loadingImage.check();
            }
        };

        ImagesLoaded.prototype.progress = function (image, elem, message) {
            this.progressedCount++;
            this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
            // progress event
            this.emit('progress', this, image, elem);
            if (this.jqDeferred && this.jqDeferred.notify) {
                this.jqDeferred.notify(this, image);
            }
            // check if completed
            if (this.progressedCount == this.images.length) {
                this.complete();
            }

            if (this.options.debug && console) {
                console.log('progress: ' + message, image, elem);
            }
        };

        ImagesLoaded.prototype.complete = function () {
            var eventName = this.hasAnyBroken ? 'fail' : 'done';
            this.isComplete = true;
            this.emit(eventName, this);
            this.emit('always', this);
            if (this.jqDeferred) {
                var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
                this.jqDeferred[jqMethod](this);
            }
        };

        // --------------------------  -------------------------- //

        function LoadingImage(img) {
            this.img = img;
        }

        LoadingImage.prototype = new EventEmitter();

        LoadingImage.prototype.check = function () {
            // If complete is true and browser supports natural sizes,
            // try to check for image status manually.
            var isComplete = this.getIsImageComplete();
            if (isComplete) {
                // report based on naturalWidth
                this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
                return;
            }

            // If none of the checks above matched, simulate loading on detached element.
            this.proxyImage = new Image();
            eventie.bind(this.proxyImage, 'load', this);
            eventie.bind(this.proxyImage, 'error', this);
            // bind to image as well for Firefox. #191
            eventie.bind(this.img, 'load', this);
            eventie.bind(this.img, 'error', this);
            this.proxyImage.src = this.img.src;
        };

        LoadingImage.prototype.getIsImageComplete = function () {
            return this.img.complete && this.img.naturalWidth !== undefined;
        };

        LoadingImage.prototype.confirm = function (isLoaded, message) {
            this.isLoaded = isLoaded;
            this.emit('progress', this, this.img, message);
        };

        // ----- events ----- //

        // trigger specified handler for event type
        LoadingImage.prototype.handleEvent = function (event) {
            var method = 'on' + event.type;
            if (this[method]) {
                this[method](event);
            }
        };

        LoadingImage.prototype.onload = function () {
            this.confirm(true, 'onload');
            this.unbindEvents();
        };

        LoadingImage.prototype.onerror = function () {
            this.confirm(false, 'onerror');
            this.unbindEvents();
        };

        LoadingImage.prototype.unbindEvents = function () {
            eventie.unbind(this.proxyImage, 'load', this);
            eventie.unbind(this.proxyImage, 'error', this);
            eventie.unbind(this.img, 'load', this);
            eventie.unbind(this.img, 'error', this);
        };

        // -------------------------- Background -------------------------- //

        function Background(url, element) {
            this.url = url;
            this.element = element;
            this.img = new Image();
        }

        // inherit LoadingImage prototype
        Background.prototype = new LoadingImage();

        Background.prototype.check = function () {
            eventie.bind(this.img, 'load', this);
            eventie.bind(this.img, 'error', this);
            this.img.src = this.url;
            // check if image is already complete
            var isComplete = this.getIsImageComplete();
            if (isComplete) {
                this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
                this.unbindEvents();
            }
        };

        Background.prototype.unbindEvents = function () {
            eventie.unbind(this.img, 'load', this);
            eventie.unbind(this.img, 'error', this);
        };

        Background.prototype.confirm = function (isLoaded, message) {
            this.isLoaded = isLoaded;
            this.emit('progress', this, this.element, message);
        };

        // -------------------------- jQuery -------------------------- //

        ImagesLoaded.makeJQueryPlugin = function (jQuery) {
            jQuery = jQuery || window.jQuery;
            if (!jQuery) {
                return;
            }
            // set local variable
            $ = jQuery;
            // $().imagesLoaded()
            $.fn.imagesLoaded = function (options, callback) {
                var instance = new ImagesLoaded(this, options, callback);
                return instance.jqDeferred.promise($(this));
            };
        };
        // try making plugin
        ImagesLoaded.makeJQueryPlugin();

        // --------------------------  -------------------------- //

        return ImagesLoaded;

    });

/*! http://mths.be/placeholder v2.1.2 by @mathias */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    // Opera Mini v7 doesn't support placeholder although its DOM seems to indicate so
    var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = $.fn.placeholder = function () {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        var settings = {};

        placeholder = $.fn.placeholder = function (options) {

            var defaults = {customClass: 'placeholder'};
            settings = $.extend({}, defaults, options);

            var $this = this;
            $this
                .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.' + settings.customClass)
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function (element) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }

                return $element.data('placeholder-enabled') && $element.hasClass(settings.customClass) ? '' : element.value;
            },
            'set': function (element, value) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }

                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value === '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != safeActiveElement()) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass(settings.customClass)) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function () {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function () {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.' + settings.customClass, this).each(clearPlaceholder);
                setTimeout(function () {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function () {
            $('.' + settings.customClass).each(function () {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function (i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass(settings.customClass)) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().nextAll('input[type="password"]:first').show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass(settings.customClass);
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value === '') {
            if (input.type === 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().prop({'type': 'text'});
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {'type': 'text'}));
                    }
                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-password': $input,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prevAll('input[type="text"]:first').attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass(settings.customClass);
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass(settings.customClass);
        }
    }

    function safeActiveElement() {
        // Avoid IE9 `document.activeElement` of death
        // https://github.com/mathiasbynens/jquery-placeholder/pull/99
        try {
            return document.activeElement;
        } catch (exception) {
        }
    }

}));
/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function () {
    function n(n, t) {
        if (n !== t) {
            var r = null === n, e = n === w, u = n === n, o = null === t, i = t === w, f = t === t;
            if (n > t && !o || !u || r && !i && f || e && f) return 1;
            if (n < t && !r || !f || o && !e && u || i && u) return -1
        }
        return 0
    }

    function t(n, t, r) {
        for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e;) if (t(n[u], u, n)) return u;
        return -1
    }

    function r(n, t, r) {
        if (t !== t) return p(n, r);
        r -= 1;
        for (var e = n.length; ++r < e;) if (n[r] === t) return r;
        return -1
    }

    function e(n) {
        return typeof n == "function" || false
    }

    function u(n) {
        return null == n ? "" : n + ""
    }

    function o(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < t.indexOf(n.charAt(r));) ;
        return r
    }

    function i(n, t) {
        for (var r = n.length; r-- && -1 < t.indexOf(n.charAt(r));) ;
        return r
    }

    function f(t, r) {
        return n(t.a, r.a) || t.b - r.b
    }

    function a(n) {
        return Nn[n]
    }

    function c(n) {
        return Tn[n]
    }

    function l(n, t, r) {
        return t ? n = Bn[n] : r && (n = Dn[n]), "\\" + n
    }

    function s(n) {
        return "\\" + Dn[n]
    }

    function p(n, t, r) {
        var e = n.length;
        for (t += r ? 0 : -1; r ? t-- : ++t < e;) {
            var u = n[t];
            if (u !== u) return t
        }
        return -1
    }

    function h(n) {
        return !!n && typeof n == "object"
    }

    function _(n) {
        return 160 >= n && 9 <= n && 13 >= n || 32 == n || 160 == n || 5760 == n || 6158 == n || 8192 <= n && (8202 >= n || 8232 == n || 8233 == n || 8239 == n || 8287 == n || 12288 == n || 65279 == n);
    }

    function v(n, t) {
        for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) n[r] === t && (n[r] = z, o[++u] = r);
        return o
    }

    function g(n) {
        for (var t = -1, r = n.length; ++t < r && _(n.charCodeAt(t));) ;
        return t
    }

    function y(n) {
        for (var t = n.length; t-- && _(n.charCodeAt(t));) ;
        return t
    }

    function d(n) {
        return Ln[n]
    }

    function m(_) {
        function Nn(n) {
            if (h(n) && !(Oo(n) || n instanceof zn)) {
                if (n instanceof Ln) return n;
                if (nu.call(n, "__chain__") && nu.call(n, "__wrapped__")) return Mr(n)
            }
            return new Ln(n)
        }

        function Tn() {
        }

        function Ln(n, t, r) {
            this.__wrapped__ = n, this.__actions__ = r || [],
                this.__chain__ = !!t
        }

        function zn(n) {
            this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Ru, this.__views__ = []
        }

        function Bn() {
            this.__data__ = {}
        }

        function Dn(n) {
            var t = n ? n.length : 0;
            for (this.data = {hash: gu(null), set: new lu}; t--;) this.push(n[t])
        }

        function Mn(n, t) {
            var r = n.data;
            return (typeof t == "string" || ge(t) ? r.set.has(t) : r.hash[t]) ? 0 : -1
        }

        function qn(n, t) {
            var r = -1, e = n.length;
            for (t || (t = Be(e)); ++r < e;) t[r] = n[r];
            return t
        }

        function Pn(n, t) {
            for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n);) ;
            return n
        }

        function Kn(n, t) {
            for (var r = -1, e = n.length; ++r < e;) if (!t(n[r], r, n)) return false;
            return true
        }

        function Vn(n, t) {
            for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) {
                var i = n[r];
                t(i, r, n) && (o[++u] = i)
            }
            return o
        }

        function Gn(n, t) {
            for (var r = -1, e = n.length, u = Be(e); ++r < e;) u[r] = t(n[r], r, n);
            return u
        }

        function Jn(n, t) {
            for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
            return n
        }

        function Xn(n, t, r, e) {
            var u = -1, o = n.length;
            for (e && o && (r = n[++u]); ++u < o;) r = t(r, n[u], u, n);
            return r
        }

        function Hn(n, t) {
            for (var r = -1, e = n.length; ++r < e;) if (t(n[r], r, n)) return true;
            return false
        }

        function Qn(n, t, r, e) {
            return n !== w && nu.call(e, r) ? n : t
        }

        function nt(n, t, r) {
            for (var e = -1, u = zo(t), o = u.length; ++e < o;) {
                var i = u[e], f = n[i], a = r(f, t[i], i, n, t);
                (a === a ? a === f : f !== f) && (f !== w || i in n) || (n[i] = a)
            }
            return n
        }

        function tt(n, t) {
            return null == t ? n : et(t, zo(t), n)
        }

        function rt(n, t) {
            for (var r = -1, e = null == n, u = !e && Er(n), o = u ? n.length : 0, i = t.length, f = Be(i); ++r < i;) {
                var a = t[r];
                f[r] = u ? Cr(a, o) ? n[a] : w : e ? w : n[a]
            }
            return f
        }

        function et(n, t, r) {
            r || (r = {});
            for (var e = -1, u = t.length; ++e < u;) {
                var o = t[e];
                r[o] = n[o]
            }
            return r
        }

        function ut(n, t, r) {
            var e = typeof n;
            return "function" == e ? t === w ? n : Bt(n, t, r) : null == n ? Fe : "object" == e ? bt(n) : t === w ? ze(n) : xt(n, t)
        }

        function ot(n, t, r, e, u, o, i) {
            var f;
            if (r && (f = u ? r(n, e, u) : r(n)), f !== w) return f;
            if (!ge(n)) return n;
            if (e = Oo(n)) {
                if (f = kr(n), !t) return qn(n, f)
            } else {
                var a = ru.call(n), c = a == K;
                if (a != Z && a != B && (!c || u)) return Fn[a] ? Rr(n, a, t) : u ? n : {};
                if (f = Ir(c ? {} : n), !t) return tt(f, n)
            }
            for (o || (o = []), i || (i = []), u = o.length; u--;) if (o[u] == n) return i[u];
            return o.push(n), i.push(f), (e ? Pn : _t)(n, function (e, u) {
                f[u] = ot(e, t, r, u, n, o, i)
            }), f
        }

        function it(n, t, r) {
            if (typeof n != "function") throw new Ge(L);
            return su(function () {
                n.apply(w, r)
            }, t)
        }

        function ft(n, t) {
            var e = n ? n.length : 0, u = [];
            if (!e) return u;
            var o = -1, i = xr(), f = i === r, a = f && t.length >= F && gu && lu ? new Dn(t) : null, c = t.length;
            a && (i = Mn, f = false, t = a);
            n:for (; ++o < e;) if (a = n[o], f && a === a) {
                for (var l = c; l--;) if (t[l] === a) continue n;
                u.push(a)
            } else 0 > i(t, a, 0) && u.push(a);
            return u
        }

        function at(n, t) {
            var r = true;
            return Su(n, function (n, e, u) {
                return r = !!t(n, e, u)
            }), r
        }

        function ct(n, t, r, e) {
            var u = e, o = u;
            return Su(n, function (n, i, f) {
                i = +t(n, i, f), (r(i, u) || i === e && i === o) && (u = i,
                    o = n)
            }), o
        }

        function lt(n, t) {
            var r = [];
            return Su(n, function (n, e, u) {
                t(n, e, u) && r.push(n)
            }), r
        }

        function st(n, t, r, e) {
            var u;
            return r(n, function (n, r, o) {
                return t(n, r, o) ? (u = e ? r : n, false) : void 0
            }), u
        }

        function pt(n, t, r, e) {
            e || (e = []);
            for (var u = -1, o = n.length; ++u < o;) {
                var i = n[u];
                h(i) && Er(i) && (r || Oo(i) || pe(i)) ? t ? pt(i, t, r, e) : Jn(e, i) : r || (e[e.length] = i)
            }
            return e
        }

        function ht(n, t) {
            Nu(n, t, Re)
        }

        function _t(n, t) {
            return Nu(n, t, zo)
        }

        function vt(n, t) {
            return Tu(n, t, zo)
        }

        function gt(n, t) {
            for (var r = -1, e = t.length, u = -1, o = []; ++r < e;) {
                var i = t[r];
                ve(n[i]) && (o[++u] = i)
            }
            return o
        }

        function yt(n, t, r) {
            if (null != n) {
                r !== w && r in Br(n) && (t = [r]), r = 0;
                for (var e = t.length; null != n && r < e;) n = n[t[r++]];
                return r && r == e ? n : w
            }
        }

        function dt(n, t, r, e, u, o) {
            if (n === t) n = true; else if (null == n || null == t || !ge(n) && !h(t)) n = n !== n && t !== t; else n:{
                var i = dt, f = Oo(n), a = Oo(t), c = D, l = D;
                f || (c = ru.call(n), c == B ? c = Z : c != Z && (f = xe(n))), a || (l = ru.call(t), l == B ? l = Z : l != Z && xe(t));
                var s = c == Z, a = l == Z, l = c == l;
                if (!l || f || s) {
                    if (!e && (c = s && nu.call(n, "__wrapped__"), a = a && nu.call(t, "__wrapped__"), c || a)) {
                        n = i(c ? n.value() : n, a ? t.value() : t, r, e, u, o);
                        break n
                    }
                    if (l) {
                        for (u || (u = []), o || (o = []), c = u.length; c--;) if (u[c] == n) {
                            n = o[c] == t;
                            break n
                        }
                        u.push(n), o.push(t), n = (f ? yr : mr)(n, t, i, r, e, u, o), u.pop(), o.pop()
                    } else n = false
                } else n = dr(n, t, c)
            }
            return n
        }

        function mt(n, t, r) {
            var e = t.length, u = e, o = !r;
            if (null == n) return !u;
            for (n = Br(n); e--;) {
                var i = t[e];
                if (o && i[2] ? i[1] !== n[i[0]] : !(i[0] in n)) return false
            }
            for (; ++e < u;) {
                var i = t[e], f = i[0], a = n[f], c = i[1];
                if (o && i[2]) {
                    if (a === w && !(f in n)) return false
                } else if (i = r ? r(a, c, f) : w, i === w ? !dt(c, a, r, true) : !i) return false
            }
            return true
        }

        function wt(n, t) {
            var r = -1, e = Er(n) ? Be(n.length) : [];
            return Su(n, function (n, u, o) {
                e[++r] = t(n, u, o)
            }), e
        }

        function bt(n) {
            var t = Ar(n);
            if (1 == t.length && t[0][2]) {
                var r = t[0][0], e = t[0][1];
                return function (n) {
                    return null == n ? false : n[r] === e && (e !== w || r in Br(n))
                }
            }
            return function (n) {
                return mt(n, t)
            }
        }

        function xt(n, t) {
            var r = Oo(n), e = Wr(n) && t === t && !ge(t), u = n + "";
            return n = Dr(n), function (o) {
                if (null == o) return false;
                var i = u;
                if (o = Br(o), !(!r && e || i in o)) {
                    if (o = 1 == n.length ? o : yt(o, Et(n, 0, -1)), null == o) return false;
                    i = Zr(n), o = Br(o)
                }
                return o[i] === t ? t !== w || i in o : dt(t, o[i], w, true)
            }
        }

        function At(n, t, r, e, u) {
            if (!ge(n)) return n;
            var o = Er(t) && (Oo(t) || xe(t)), i = o ? w : zo(t);
            return Pn(i || t, function (f, a) {
                if (i && (a = f, f = t[a]), h(f)) {
                    e || (e = []), u || (u = []);
                    n:{
                        for (var c = a, l = e, s = u, p = l.length, _ = t[c]; p--;) if (l[p] == _) {
                            n[c] = s[p];
                            break n
                        }
                        var p = n[c], v = r ? r(p, _, c, n, t) : w, g = v === w;
                        g && (v = _, Er(_) && (Oo(_) || xe(_)) ? v = Oo(p) ? p : Er(p) ? qn(p) : [] : me(_) || pe(_) ? v = pe(p) ? ke(p) : me(p) ? p : {} : g = false), l.push(_), s.push(v), g ? n[c] = At(v, _, r, l, s) : (v === v ? v !== p : p === p) && (n[c] = v)
                    }
                } else c = n[a], l = r ? r(c, f, a, n, t) : w, (s = l === w) && (l = f), l === w && (!o || a in n) || !s && (l === l ? l === c : c !== c) || (n[a] = l);
            }), n
        }

        function jt(n) {
            return function (t) {
                return null == t ? w : t[n]
            }
        }

        function kt(n) {
            var t = n + "";
            return n = Dr(n), function (r) {
                return yt(r, n, t)
            }
        }

        function It(n, t) {
            for (var r = n ? t.length : 0; r--;) {
                var e = t[r];
                if (e != u && Cr(e)) {
                    var u = e;
                    pu.call(n, e, 1)
                }
            }
        }

        function Rt(n, t) {
            return n + yu(ku() * (t - n + 1))
        }

        function Ot(n, t, r, e, u) {
            return u(n, function (n, u, o) {
                r = e ? (e = false, n) : t(r, n, u, o)
            }), r
        }

        function Et(n, t, r) {
            var e = -1, u = n.length;
            for (t = null == t ? 0 : +t || 0, 0 > t && (t = -t > u ? 0 : u + t), r = r === w || r > u ? u : +r || 0, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Be(u); ++e < u;) r[e] = n[e + t];
            return r
        }

        function Ct(n, t) {
            var r;
            return Su(n, function (n, e, u) {
                return r = t(n, e, u), !r
            }), !!r
        }

        function Ut(n, t) {
            var r = n.length;
            for (n.sort(t); r--;) n[r] = n[r].c;
            return n
        }

        function Wt(t, r, e) {
            var u = wr(), o = -1;
            return r = Gn(r, function (n) {
                return u(n)
            }), t = wt(t, function (n) {
                return {
                    a: Gn(r, function (t) {
                        return t(n)
                    }), b: ++o, c: n
                }
            }), Ut(t, function (t, r) {
                var u;
                n:{
                    for (var o = -1, i = t.a, f = r.a, a = i.length, c = e.length; ++o < a;) if (u = n(i[o], f[o])) {
                        if (o >= c) break n;
                        o = e[o], u *= "asc" === o || true === o ? 1 : -1;
                        break n
                    }
                    u = t.b - r.b
                }
                return u
            })
        }

        function $t(n, t) {
            var r = 0;
            return Su(n, function (n, e, u) {
                r += +t(n, e, u) || 0
            }), r
        }

        function St(n, t) {
            var e = -1, u = xr(), o = n.length, i = u === r, f = i && o >= F, a = f && gu && lu ? new Dn(void 0) : null,
                c = [];
            a ? (u = Mn, i = false) : (f = false, a = t ? [] : c);
            n:for (; ++e < o;) {
                var l = n[e], s = t ? t(l, e, n) : l;
                if (i && l === l) {
                    for (var p = a.length; p--;) if (a[p] === s) continue n;
                    t && a.push(s), c.push(l)
                } else 0 > u(a, s, 0) && ((t || f) && a.push(s), c.push(l))
            }
            return c
        }

        function Ft(n, t) {
            for (var r = -1, e = t.length, u = Be(e); ++r < e;) u[r] = n[t[r]];
            return u
        }

        function Nt(n, t, r, e) {
            for (var u = n.length, o = e ? u : -1; (e ? o-- : ++o < u) && t(n[o], o, n);) ;
            return r ? Et(n, e ? 0 : o, e ? o + 1 : u) : Et(n, e ? o + 1 : 0, e ? u : o)
        }

        function Tt(n, t) {
            var r = n;
            r instanceof zn && (r = r.value());
            for (var e = -1, u = t.length; ++e < u;) var o = t[e], r = o.func.apply(o.thisArg, Jn([r], o.args));
            return r
        }

        function Lt(n, t, r) {
            var e = 0, u = n ? n.length : e;
            if (typeof t == "number" && t === t && u <= Eu) {
                for (; e < u;) {
                    var o = e + u >>> 1, i = n[o];
                    (r ? i <= t : i < t) && null !== i ? e = o + 1 : u = o
                }
                return u
            }
            return zt(n, t, Fe, r)
        }

        function zt(n, t, r, e) {
            t = r(t);
            for (var u = 0, o = n ? n.length : 0, i = t !== t, f = null === t, a = t === w; u < o;) {
                var c = yu((u + o) / 2), l = r(n[c]), s = l !== w, p = l === l;
                (i ? p || e : f ? p && s && (e || null != l) : a ? p && (e || s) : null == l ? 0 : e ? l <= t : l < t) ? u = c + 1 : o = c
            }
            return xu(o, Ou)
        }

        function Bt(n, t, r) {
            if (typeof n != "function") return Fe;
            if (t === w) return n;
            switch (r) {
                case 1:
                    return function (r) {
                        return n.call(t, r)
                    };
                case 3:
                    return function (r, e, u) {
                        return n.call(t, r, e, u)
                    };
                case 4:
                    return function (r, e, u, o) {
                        return n.call(t, r, e, u, o)
                    };
                case 5:
                    return function (r, e, u, o, i) {
                        return n.call(t, r, e, u, o, i)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }

        function Dt(n) {
            var t = new ou(n.byteLength);
            return new hu(t).set(new hu(n)),
                t
        }

        function Mt(n, t, r) {
            for (var e = r.length, u = -1, o = bu(n.length - e, 0), i = -1, f = t.length, a = Be(f + o); ++i < f;) a[i] = t[i];
            for (; ++u < e;) a[r[u]] = n[u];
            for (; o--;) a[i++] = n[u++];
            return a
        }

        function qt(n, t, r) {
            for (var e = -1, u = r.length, o = -1, i = bu(n.length - u, 0), f = -1, a = t.length, c = Be(i + a); ++o < i;) c[o] = n[o];
            for (i = o; ++f < a;) c[i + f] = t[f];
            for (; ++e < u;) c[i + r[e]] = n[o++];
            return c
        }

        function Pt(n, t) {
            return function (r, e, u) {
                var o = t ? t() : {};
                if (e = wr(e, u, 3), Oo(r)) {
                    u = -1;
                    for (var i = r.length; ++u < i;) {
                        var f = r[u];
                        n(o, f, e(f, u, r), r)
                    }
                } else Su(r, function (t, r, u) {
                    n(o, t, e(t, r, u), u)
                });
                return o
            }
        }

        function Kt(n) {
            return le(function (t, r) {
                var e = -1, u = null == t ? 0 : r.length, o = 2 < u ? r[u - 2] : w, i = 2 < u ? r[2] : w,
                    f = 1 < u ? r[u - 1] : w;
                for (typeof o == "function" ? (o = Bt(o, f, 5), u -= 2) : (o = typeof f == "function" ? f : w, u -= o ? 1 : 0), i && Ur(r[0], r[1], i) && (o = 3 > u ? w : o, u = 1); ++e < u;) (i = r[e]) && n(t, i, o);
                return t
            })
        }

        function Vt(n, t) {
            return function (r, e) {
                var u = r ? Bu(r) : 0;
                if (!Sr(u)) return n(r, e);
                for (var o = t ? u : -1, i = Br(r); (t ? o-- : ++o < u) && false !== e(i[o], o, i);) ;
                return r
            }
        }

        function Zt(n) {
            return function (t, r, e) {
                var u = Br(t);
                e = e(t);
                for (var o = e.length, i = n ? o : -1; n ? i-- : ++i < o;) {
                    var f = e[i];
                    if (false === r(u[f], f, u)) break
                }
                return t
            }
        }

        function Yt(n, t) {
            function r() {
                return (this && this !== Zn && this instanceof r ? e : n).apply(t, arguments)
            }

            var e = Jt(n);
            return r
        }

        function Gt(n) {
            return function (t) {
                var r = -1;
                t = $e(Ce(t));
                for (var e = t.length, u = ""; ++r < e;) u = n(u, t[r], r);
                return u
            }
        }

        function Jt(n) {
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return new n;
                    case 1:
                        return new n(t[0]);
                    case 2:
                        return new n(t[0], t[1]);
                    case 3:
                        return new n(t[0], t[1], t[2]);
                    case 4:
                        return new n(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new n(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var r = $u(n.prototype), t = n.apply(r, t);
                return ge(t) ? t : r
            }
        }

        function Xt(n) {
            function t(r, e, u) {
                return u && Ur(r, e, u) && (e = w), r = gr(r, n, w, w, w, w, w, e), r.placeholder = t.placeholder, r
            }

            return t
        }

        function Ht(n, t) {
            return le(function (r) {
                var e = r[0];
                return null == e ? e : (r.push(t), n.apply(w, r))
            })
        }

        function Qt(n, t) {
            return function (r, e, u) {
                if (u && Ur(r, e, u) && (e = w), e = wr(e, u, 3), 1 == e.length) {
                    u = r = Oo(r) ? r : zr(r);
                    for (var o = e, i = -1, f = u.length, a = t, c = a; ++i < f;) {
                        var l = u[i], s = +o(l);
                        n(s, a) && (a = s, c = l)
                    }
                    if (u = c, !r.length || u !== t) return u
                }
                return ct(r, e, n, t)
            }
        }

        function nr(n, r) {
            return function (e, u, o) {
                return u = wr(u, o, 3), Oo(e) ? (u = t(e, u, r), -1 < u ? e[u] : w) : st(e, u, n)
            }
        }

        function tr(n) {
            return function (r, e, u) {
                return r && r.length ? (e = wr(e, u, 3), t(r, e, n)) : -1
            }
        }

        function rr(n) {
            return function (t, r, e) {
                return r = wr(r, e, 3), st(t, r, n, true)
            }
        }

        function er(n) {
            return function () {
                for (var t, r = arguments.length, e = n ? r : -1, u = 0, o = Be(r); n ? e-- : ++e < r;) {
                    var i = o[u++] = arguments[e];
                    if (typeof i != "function") throw new Ge(L);
                    !t && Ln.prototype.thru && "wrapper" == br(i) && (t = new Ln([], true))
                }
                for (e = t ? -1 : r; ++e < r;) {
                    var i = o[e], u = br(i), f = "wrapper" == u ? zu(i) : w;
                    t = f && $r(f[0]) && f[1] == (E | k | R | C) && !f[4].length && 1 == f[9] ? t[br(f[0])].apply(t, f[3]) : 1 == i.length && $r(i) ? t[u]() : t.thru(i)
                }
                return function () {
                    var n = arguments, e = n[0];
                    if (t && 1 == n.length && Oo(e) && e.length >= F) return t.plant(e).value();
                    for (var u = 0, n = r ? o[u].apply(this, n) : e; ++u < r;) n = o[u].call(this, n);
                    return n
                }
            }
        }

        function ur(n, t) {
            return function (r, e, u) {
                return typeof e == "function" && u === w && Oo(r) ? n(r, e) : t(r, Bt(e, u, 3))
            }
        }

        function or(n) {
            return function (t, r, e) {
                return (typeof r != "function" || e !== w) && (r = Bt(r, e, 3)), n(t, r, Re)
            }
        }

        function ir(n) {
            return function (t, r, e) {
                return (typeof r != "function" || e !== w) && (r = Bt(r, e, 3)), n(t, r)
            }
        }

        function fr(n) {
            return function (t, r, e) {
                var u = {};
                return r = wr(r, e, 3), _t(t, function (t, e, o) {
                    o = r(t, e, o), e = n ? o : e, t = n ? t : o, u[e] = t
                }), u
            }
        }

        function ar(n) {
            return function (t, r, e) {
                return t = u(t), (n ? t : "") + pr(t, r, e) + (n ? "" : t)
            }
        }

        function cr(n) {
            var t = le(function (r, e) {
                var u = v(e, t.placeholder);
                return gr(r, n, w, e, u)
            });
            return t
        }

        function lr(n, t) {
            return function (r, e, u, o) {
                var i = 3 > arguments.length;
                return typeof e == "function" && o === w && Oo(r) ? n(r, e, u, i) : Ot(r, wr(e, o, 4), u, i, t)
            }
        }

        function sr(n, t, r, e, u, o, i, f, a, c) {
            function l() {
                for (var m = arguments.length, b = m, j = Be(m); b--;) j[b] = arguments[b];
                if (e && (j = Mt(j, e, u)), o && (j = qt(j, o, i)), _ || y) {
                    var b = l.placeholder, k = v(j, b), m = m - k.length;
                    if (m < c) {
                        var I = f ? qn(f) : w, m = bu(c - m, 0), E = _ ? k : w, k = _ ? w : k, C = _ ? j : w,
                            j = _ ? w : j;
                        return t |= _ ? R : O, t &= ~(_ ? O : R),
                        g || (t &= ~(x | A)), j = [n, t, r, C, E, j, k, I, a, m], I = sr.apply(w, j), $r(n) && Du(I, j), I.placeholder = b, I
                    }
                }
                if (b = p ? r : this, I = h ? b[n] : n, f) for (m = j.length, E = xu(f.length, m), k = qn(j); E--;) C = f[E], j[E] = Cr(C, m) ? k[C] : w;
                return s && a < j.length && (j.length = a), this && this !== Zn && this instanceof l && (I = d || Jt(n)), I.apply(b, j)
            }

            var s = t & E, p = t & x, h = t & A, _ = t & k, g = t & j, y = t & I, d = h ? w : Jt(n);
            return l
        }

        function pr(n, t, r) {
            return n = n.length, t = +t, n < t && mu(t) ? (t -= n, r = null == r ? " " : r + "", Ue(r, vu(t / r.length)).slice(0, t)) : ""
        }

        function hr(n, t, r, e) {
            function u() {
                for (var t = -1, f = arguments.length, a = -1, c = e.length, l = Be(c + f); ++a < c;) l[a] = e[a];
                for (; f--;) l[a++] = arguments[++t];
                return (this && this !== Zn && this instanceof u ? i : n).apply(o ? r : this, l)
            }

            var o = t & x, i = Jt(n);
            return u
        }

        function _r(n) {
            var t = Pe[n];
            return function (n, r) {
                return (r = r === w ? 0 : +r || 0) ? (r = au(10, r), t(n * r) / r) : t(n)
            }
        }

        function vr(n) {
            return function (t, r, e, u) {
                var o = wr(e);
                return null == e && o === ut ? Lt(t, r, n) : zt(t, r, o(e, u, 1), n)
            }
        }

        function gr(n, t, r, e, u, o, i, f) {
            var a = t & A;
            if (!a && typeof n != "function") throw new Ge(L);
            var c = e ? e.length : 0;
            if (c || (t &= ~(R | O), e = u = w), c -= u ? u.length : 0, t & O) {
                var l = e, s = u;
                e = u = w
            }
            var p = a ? w : zu(n);
            return r = [n, t, r, e, u, l, s, o, i, f], p && (e = r[1], t = p[1], f = e | t, u = t == E && e == k || t == E && e == C && r[7].length <= p[8] || t == (E | C) && e == k, (f < E || u) && (t & x && (r[2] = p[2], f |= e & x ? 0 : j), (e = p[3]) && (u = r[3], r[3] = u ? Mt(u, e, p[4]) : qn(e), r[4] = u ? v(r[3], z) : qn(p[4])), (e = p[5]) && (u = r[5], r[5] = u ? qt(u, e, p[6]) : qn(e), r[6] = u ? v(r[5], z) : qn(p[6])), (e = p[7]) && (r[7] = qn(e)), t & E && (r[8] = null == r[8] ? p[8] : xu(r[8], p[8])), null == r[9] && (r[9] = p[9]), r[0] = p[0], r[1] = f), t = r[1], f = r[9]), r[9] = null == f ? a ? 0 : n.length : bu(f - c, 0) || 0, (p ? Lu : Du)(t == x ? Yt(r[0], r[2]) : t != R && t != (x | R) || r[4].length ? sr.apply(w, r) : hr.apply(w, r), r);
        }

        function yr(n, t, r, e, u, o, i) {
            var f = -1, a = n.length, c = t.length;
            if (a != c && (!u || c <= a)) return false;
            for (; ++f < a;) {
                var l = n[f], c = t[f], s = e ? e(u ? c : l, u ? l : c, f) : w;
                if (s !== w) {
                    if (s) continue;
                    return false
                }
                if (u) {
                    if (!Hn(t, function (n) {
                        return l === n || r(l, n, e, u, o, i)
                    })) return false
                } else if (l !== c && !r(l, c, e, u, o, i)) return false
            }
            return true
        }

        function dr(n, t, r) {
            switch (r) {
                case M:
                case q:
                    return +n == +t;
                case P:
                    return n.name == t.name && n.message == t.message;
                case V:
                    return n != +n ? t != +t : n == +t;
                case Y:
                case G:
                    return n == t + ""
            }
            return false
        }

        function mr(n, t, r, e, u, o, i) {
            var f = zo(n), a = f.length, c = zo(t).length;
            if (a != c && !u) return false;
            for (c = a; c--;) {
                var l = f[c];
                if (!(u ? l in t : nu.call(t, l))) return false
            }
            for (var s = u; ++c < a;) {
                var l = f[c], p = n[l], h = t[l], _ = e ? e(u ? h : p, u ? p : h, l) : w;
                if (_ === w ? !r(p, h, e, u, o, i) : !_) return false;
                s || (s = "constructor" == l)
            }
            return s || (r = n.constructor, e = t.constructor, !(r != e && "constructor" in n && "constructor" in t) || typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) ? true : false
        }

        function wr(n, t, r) {
            var e = Nn.callback || Se, e = e === Se ? ut : e;
            return r ? e(n, t, r) : e
        }

        function br(n) {
            for (var t = n.name + "", r = Wu[t], e = r ? r.length : 0; e--;) {
                var u = r[e], o = u.func;
                if (null == o || o == n) return u.name
            }
            return t
        }

        function xr(n, t, e) {
            var u = Nn.indexOf || Vr, u = u === Vr ? r : u;
            return n ? u(n, t, e) : u
        }

        function Ar(n) {
            n = Oe(n);
            for (var t = n.length; t--;) {
                var r = n[t][1];
                n[t][2] = r === r && !ge(r)
            }
            return n
        }

        function jr(n, t) {
            var r = null == n ? w : n[t];
            return ye(r) ? r : w
        }

        function kr(n) {
            var t = n.length, r = new n.constructor(t);
            return t && "string" == typeof n[0] && nu.call(n, "index") && (r.index = n.index, r.input = n.input), r
        }

        function Ir(n) {
            return n = n.constructor, typeof n == "function" && n instanceof n || (n = Ve),
                new n
        }

        function Rr(n, t, r) {
            var e = n.constructor;
            switch (t) {
                case J:
                    return Dt(n);
                case M:
                case q:
                    return new e(+n);
                case X:
                case H:
                case Q:
                case nn:
                case tn:
                case rn:
                case en:
                case un:
                case on:
                    return t = n.buffer, new e(r ? Dt(t) : t, n.byteOffset, n.length);
                case V:
                case G:
                    return new e(n);
                case Y:
                    var u = new e(n.source, kn.exec(n));
                    u.lastIndex = n.lastIndex
            }
            return u
        }

        function Or(n, t, r) {
            return null == n || Wr(t, n) || (t = Dr(t), n = 1 == t.length ? n : yt(n, Et(t, 0, -1)), t = Zr(t)), t = null == n ? n : n[t], null == t ? w : t.apply(n, r)
        }

        function Er(n) {
            return null != n && Sr(Bu(n));
        }

        function Cr(n, t) {
            return n = typeof n == "number" || On.test(n) ? +n : -1, t = null == t ? Cu : t, -1 < n && 0 == n % 1 && n < t
        }

        function Ur(n, t, r) {
            if (!ge(r)) return false;
            var e = typeof t;
            return ("number" == e ? Er(r) && Cr(t, r.length) : "string" == e && t in r) ? (t = r[t], n === n ? n === t : t !== t) : false
        }

        function Wr(n, t) {
            var r = typeof n;
            return "string" == r && dn.test(n) || "number" == r ? true : Oo(n) ? false : !yn.test(n) || null != t && n in Br(t)
        }

        function $r(n) {
            var t = br(n), r = Nn[t];
            return typeof r == "function" && t in zn.prototype ? n === r ? true : (t = zu(r), !!t && n === t[0]) : false
        }

        function Sr(n) {
            return typeof n == "number" && -1 < n && 0 == n % 1 && n <= Cu;
        }

        function Fr(n, t) {
            return n === w ? t : Eo(n, t, Fr)
        }

        function Nr(n, t) {
            n = Br(n);
            for (var r = -1, e = t.length, u = {}; ++r < e;) {
                var o = t[r];
                o in n && (u[o] = n[o])
            }
            return u
        }

        function Tr(n, t) {
            var r = {};
            return ht(n, function (n, e, u) {
                t(n, e, u) && (r[e] = n)
            }), r
        }

        function Lr(n) {
            for (var t = Re(n), r = t.length, e = r && n.length, u = !!e && Sr(e) && (Oo(n) || pe(n)), o = -1, i = []; ++o < r;) {
                var f = t[o];
                (u && Cr(f, e) || nu.call(n, f)) && i.push(f)
            }
            return i
        }

        function zr(n) {
            return null == n ? [] : Er(n) ? ge(n) ? n : Ve(n) : Ee(n)
        }

        function Br(n) {
            return ge(n) ? n : Ve(n)
        }

        function Dr(n) {
            if (Oo(n)) return n;
            var t = [];
            return u(n).replace(mn, function (n, r, e, u) {
                t.push(e ? u.replace(An, "$1") : r || n)
            }), t
        }

        function Mr(n) {
            return n instanceof zn ? n.clone() : new Ln(n.__wrapped__, n.__chain__, qn(n.__actions__))
        }

        function qr(n, t, r) {
            return n && n.length ? ((r ? Ur(n, t, r) : null == t) && (t = 1), Et(n, 0 > t ? 0 : t)) : []
        }

        function Pr(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? Ur(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), Et(n, 0, 0 > t ? 0 : t)) : []
        }

        function Kr(n) {
            return n ? n[0] : w
        }

        function Vr(n, t, e) {
            var u = n ? n.length : 0;
            if (!u) return -1;
            if (typeof e == "number") e = 0 > e ? bu(u + e, 0) : e; else if (e) return e = Lt(n, t),
                e < u && (t === t ? t === n[e] : n[e] !== n[e]) ? e : -1;
            return r(n, t, e || 0)
        }

        function Zr(n) {
            var t = n ? n.length : 0;
            return t ? n[t - 1] : w
        }

        function Yr(n) {
            return qr(n, 1)
        }

        function Gr(n, t, e, u) {
            if (!n || !n.length) return [];
            null != t && typeof t != "boolean" && (u = e, e = Ur(n, t, u) ? w : t, t = false);
            var o = wr();
            if ((null != e || o !== ut) && (e = o(e, u, 3)), t && xr() === r) {
                t = e;
                var i;
                e = -1, u = n.length;
                for (var o = -1, f = []; ++e < u;) {
                    var a = n[e], c = t ? t(a, e, n) : a;
                    e && i === c || (i = c, f[++o] = a)
                }
                n = f
            } else n = St(n, e);
            return n
        }

        function Jr(n) {
            if (!n || !n.length) return [];
            var t = -1, r = 0;
            n = Vn(n, function (n) {
                return Er(n) ? (r = bu(n.length, r), true) : void 0
            });
            for (var e = Be(r); ++t < r;) e[t] = Gn(n, jt(t));
            return e
        }

        function Xr(n, t, r) {
            return n && n.length ? (n = Jr(n), null == t ? n : (t = Bt(t, r, 4), Gn(n, function (n) {
                return Xn(n, t, w, true)
            }))) : []
        }

        function Hr(n, t) {
            var r = -1, e = n ? n.length : 0, u = {};
            for (!e || t || Oo(n[0]) || (t = []); ++r < e;) {
                var o = n[r];
                t ? u[o] = t[r] : o && (u[o[0]] = o[1])
            }
            return u
        }

        function Qr(n) {
            return n = Nn(n), n.__chain__ = true, n
        }

        function ne(n, t, r) {
            return t.call(r, n)
        }

        function te(n, t, r) {
            var e = Oo(n) ? Kn : at;
            return r && Ur(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = wr(t, r, 3)),
                e(n, t)
        }

        function re(n, t, r) {
            var e = Oo(n) ? Vn : lt;
            return t = wr(t, r, 3), e(n, t)
        }

        function ee(n, t, r, e) {
            var u = n ? Bu(n) : 0;
            return Sr(u) || (n = Ee(n), u = n.length), r = typeof r != "number" || e && Ur(t, r, e) ? 0 : 0 > r ? bu(u + r, 0) : r || 0, typeof n == "string" || !Oo(n) && be(n) ? r <= u && -1 < n.indexOf(t, r) : !!u && -1 < xr(n, t, r)
        }

        function ue(n, t, r) {
            var e = Oo(n) ? Gn : wt;
            return t = wr(t, r, 3), e(n, t)
        }

        function oe(n, t, r) {
            if (r ? Ur(n, t, r) : null == t) {
                n = zr(n);
                var e = n.length;
                return 0 < e ? n[Rt(0, e - 1)] : w
            }
            r = -1, n = je(n);
            var e = n.length, u = e - 1;
            for (t = xu(0 > t ? 0 : +t || 0, e); ++r < t;) {
                var e = Rt(r, u), o = n[e];
                n[e] = n[r], n[r] = o
            }
            return n.length = t, n
        }

        function ie(n, t, r) {
            var e = Oo(n) ? Hn : Ct;
            return r && Ur(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = wr(t, r, 3)), e(n, t)
        }

        function fe(n, t) {
            var r;
            if (typeof t != "function") {
                if (typeof n != "function") throw new Ge(L);
                var e = n;
                n = t, t = e
            }
            return function () {
                return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = w), r
            }
        }

        function ae(n, t, r) {
            function e(t, r) {
                r && iu(r), a = p = h = w, t && (_ = ho(), c = n.apply(s, f), p || a || (f = s = w))
            }

            function u() {
                var n = t - (ho() - l);
                0 >= n || n > t ? e(h, a) : p = su(u, n)
            }

            function o() {
                e(g, p);
            }

            function i() {
                if (f = arguments, l = ho(), s = this, h = g && (p || !y), false === v) var r = y && !p; else {
                    a || y || (_ = l);
                    var e = v - (l - _), i = 0 >= e || e > v;
                    i ? (a && (a = iu(a)), _ = l, c = n.apply(s, f)) : a || (a = su(o, e))
                }
                return i && p ? p = iu(p) : p || t === v || (p = su(u, t)), r && (i = true, c = n.apply(s, f)), !i || p || a || (f = s = w), c
            }

            var f, a, c, l, s, p, h, _ = 0, v = false, g = true;
            if (typeof n != "function") throw new Ge(L);
            if (t = 0 > t ? 0 : +t || 0, true === r) var y = true,
                g = false; else ge(r) && (y = !!r.leading, v = "maxWait" in r && bu(+r.maxWait || 0, t), g = "trailing" in r ? !!r.trailing : g);
            return i.cancel = function () {
                p && iu(p), a && iu(a),
                    _ = 0, a = p = h = w
            }, i
        }

        function ce(n, t) {
            function r() {
                var e = arguments, u = t ? t.apply(this, e) : e[0], o = r.cache;
                return o.has(u) ? o.get(u) : (e = n.apply(this, e), r.cache = o.set(u, e), e)
            }

            if (typeof n != "function" || t && typeof t != "function") throw new Ge(L);
            return r.cache = new ce.Cache, r
        }

        function le(n, t) {
            if (typeof n != "function") throw new Ge(L);
            return t = bu(t === w ? n.length - 1 : +t || 0, 0), function () {
                for (var r = arguments, e = -1, u = bu(r.length - t, 0), o = Be(u); ++e < u;) o[e] = r[t + e];
                switch (t) {
                    case 0:
                        return n.call(this, o);
                    case 1:
                        return n.call(this, r[0], o);
                    case 2:
                        return n.call(this, r[0], r[1], o)
                }
                for (u = Be(t + 1), e = -1; ++e < t;) u[e] = r[e];
                return u[t] = o, n.apply(this, u)
            }
        }

        function se(n, t) {
            return n > t
        }

        function pe(n) {
            return h(n) && Er(n) && nu.call(n, "callee") && !cu.call(n, "callee")
        }

        function he(n, t, r, e) {
            return e = (r = typeof r == "function" ? Bt(r, e, 3) : w) ? r(n, t) : w, e === w ? dt(n, t, r) : !!e
        }

        function _e(n) {
            return h(n) && typeof n.message == "string" && ru.call(n) == P
        }

        function ve(n) {
            return ge(n) && ru.call(n) == K
        }

        function ge(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t)
        }

        function ye(n) {
            return null == n ? false : ve(n) ? uu.test(Qe.call(n)) : h(n) && Rn.test(n)
        }

        function de(n) {
            return typeof n == "number" || h(n) && ru.call(n) == V
        }

        function me(n) {
            var t;
            if (!h(n) || ru.call(n) != Z || pe(n) || !(nu.call(n, "constructor") || (t = n.constructor, typeof t != "function" || t instanceof t))) return false;
            var r;
            return ht(n, function (n, t) {
                r = t
            }), r === w || nu.call(n, r)
        }

        function we(n) {
            return ge(n) && ru.call(n) == Y
        }

        function be(n) {
            return typeof n == "string" || h(n) && ru.call(n) == G
        }

        function xe(n) {
            return h(n) && Sr(n.length) && !!Sn[ru.call(n)]
        }

        function Ae(n, t) {
            return n < t
        }

        function je(n) {
            var t = n ? Bu(n) : 0;
            return Sr(t) ? t ? qn(n) : [] : Ee(n)
        }

        function ke(n) {
            return et(n, Re(n))
        }

        function Ie(n) {
            return gt(n, Re(n))
        }

        function Re(n) {
            if (null == n) return [];
            ge(n) || (n = Ve(n));
            for (var t = n.length, t = t && Sr(t) && (Oo(n) || pe(n)) && t || 0, r = n.constructor, e = -1, r = typeof r == "function" && r.prototype === n, u = Be(t), o = 0 < t; ++e < t;) u[e] = e + "";
            for (var i in n) o && Cr(i, t) || "constructor" == i && (r || !nu.call(n, i)) || u.push(i);
            return u
        }

        function Oe(n) {
            n = Br(n);
            for (var t = -1, r = zo(n), e = r.length, u = Be(e); ++t < e;) {
                var o = r[t];
                u[t] = [o, n[o]]
            }
            return u
        }

        function Ee(n) {
            return Ft(n, zo(n))
        }

        function Ce(n) {
            return (n = u(n)) && n.replace(En, a).replace(xn, "")
        }

        function Ue(n, t) {
            var r = "";
            if (n = u(n), t = +t, 1 > t || !n || !mu(t)) return r;
            do t % 2 && (r += n), t = yu(t / 2), n += n; while (t);
            return r
        }

        function We(n, t, r) {
            var e = n;
            return (n = u(n)) ? (r ? Ur(e, t, r) : null == t) ? n.slice(g(n), y(n) + 1) : (t += "", n.slice(o(n, t), i(n, t) + 1)) : n
        }

        function $e(n, t, r) {
            return r && Ur(n, t, r) && (t = w), n = u(n), n.match(t || Wn) || []
        }

        function Se(n, t, r) {
            return r && Ur(n, t, r) && (t = w), h(n) ? Ne(n) : ut(n, t)
        }

        function Fe(n) {
            return n
        }

        function Ne(n) {
            return bt(ot(n, true))
        }

        function Te(n, t, r) {
            if (null == r) {
                var e = ge(t), u = e ? zo(t) : w;
                ((u = u && u.length ? gt(t, u) : w) ? u.length : e) || (u = false, r = t, t = n, n = this)
            }
            u || (u = gt(t, zo(t)));
            var o = true, e = -1, i = ve(n), f = u.length;
            false === r ? o = false : ge(r) && "chain" in r && (o = r.chain);
            for (; ++e < f;) {
                r = u[e];
                var a = t[r];
                n[r] = a, i && (n.prototype[r] = function (t) {
                    return function () {
                        var r = this.__chain__;
                        if (o || r) {
                            var e = n(this.__wrapped__);
                            return (e.__actions__ = qn(this.__actions__)).push({
                                func: t,
                                args: arguments,
                                thisArg: n
                            }), e.__chain__ = r, e
                        }
                        return t.apply(n, Jn([this.value()], arguments));
                    }
                }(a))
            }
            return n
        }

        function Le() {
        }

        function ze(n) {
            return Wr(n) ? jt(n) : kt(n)
        }

        _ = _ ? Yn.defaults(Zn.Object(), _, Yn.pick(Zn, $n)) : Zn;
        var Be = _.Array, De = _.Date, Me = _.Error, qe = _.Function, Pe = _.Math, Ke = _.Number, Ve = _.Object,
            Ze = _.RegExp, Ye = _.String, Ge = _.TypeError, Je = Be.prototype, Xe = Ve.prototype, He = Ye.prototype,
            Qe = qe.prototype.toString, nu = Xe.hasOwnProperty, tu = 0, ru = Xe.toString, eu = Zn._,
            uu = Ze("^" + Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            ou = _.ArrayBuffer, iu = _.clearTimeout, fu = _.parseFloat, au = Pe.pow, cu = Xe.propertyIsEnumerable,
            lu = jr(_, "Set"), su = _.setTimeout, pu = Je.splice, hu = _.Uint8Array, _u = jr(_, "WeakMap"),
            vu = Pe.ceil, gu = jr(Ve, "create"), yu = Pe.floor, du = jr(Be, "isArray"), mu = _.isFinite,
            wu = jr(Ve, "keys"), bu = Pe.max, xu = Pe.min, Au = jr(De, "now"), ju = _.parseInt, ku = Pe.random,
            Iu = Ke.NEGATIVE_INFINITY, Ru = Ke.POSITIVE_INFINITY, Ou = 4294967294, Eu = 2147483647,
            Cu = 9007199254740991, Uu = _u && new _u, Wu = {};
        Nn.support = {}, Nn.templateSettings = {
            escape: _n,
            evaluate: vn,
            interpolate: gn,
            variable: "",
            imports: {_: Nn}
        };
        var $u = function () {
                function n() {
                }

                return function (t) {
                    if (ge(t)) {
                        n.prototype = t;
                        var r = new n;
                        n.prototype = w
                    }
                    return r || {}
                }
            }(), Su = Vt(_t), Fu = Vt(vt, true), Nu = Zt(), Tu = Zt(true), Lu = Uu ? function (n, t) {
                return Uu.set(n, t), n
            } : Fe, zu = Uu ? function (n) {
                return Uu.get(n)
            } : Le, Bu = jt("length"), Du = function () {
                var n = 0, t = 0;
                return function (r, e) {
                    var u = ho(), o = S - (u - t);
                    if (t = u, 0 < o) {
                        if (++n >= $) return r
                    } else n = 0;
                    return Lu(r, e)
                }
            }(), Mu = le(function (n, t) {
                return h(n) && Er(n) ? ft(n, pt(t, false, true)) : []
            }), qu = tr(), Pu = tr(true), Ku = le(function (n) {
                for (var t = n.length, e = t, u = Be(l), o = xr(), i = o === r, f = []; e--;) {
                    var a = n[e] = Er(a = n[e]) ? a : [];
                    u[e] = i && 120 <= a.length && gu && lu ? new Dn(e && a) : null
                }
                var i = n[0], c = -1, l = i ? i.length : 0, s = u[0];
                n:for (; ++c < l;) if (a = i[c], 0 > (s ? Mn(s, a) : o(f, a, 0))) {
                    for (e = t; --e;) {
                        var p = u[e];
                        if (0 > (p ? Mn(p, a) : o(n[e], a, 0))) continue n
                    }
                    s && s.push(a), f.push(a)
                }
                return f
            }), Vu = le(function (t, r) {
                r = pt(r);
                var e = rt(t, r);
                return It(t, r.sort(n)), e
            }), Zu = vr(), Yu = vr(true), Gu = le(function (n) {
                return St(pt(n, false, true));
            }), Ju = le(function (n, t) {
                return Er(n) ? ft(n, t) : []
            }), Xu = le(Jr), Hu = le(function (n) {
                var t = n.length, r = 2 < t ? n[t - 2] : w, e = 1 < t ? n[t - 1] : w;
                return 2 < t && typeof r == "function" ? t -= 2 : (r = 1 < t && typeof e == "function" ? (--t, e) : w, e = w), n.length = t, Xr(n, r, e)
            }), Qu = le(function (n) {
                return n = pt(n), this.thru(function (t) {
                    t = Oo(t) ? t : [Br(t)];
                    for (var r = n, e = -1, u = t.length, o = -1, i = r.length, f = Be(u + i); ++e < u;) f[e] = t[e];
                    for (; ++o < i;) f[e++] = r[o];
                    return f
                })
            }), no = le(function (n, t) {
                return rt(n, pt(t))
            }), to = Pt(function (n, t, r) {
                nu.call(n, r) ? ++n[r] : n[r] = 1
            }), ro = nr(Su), eo = nr(Fu, true), uo = ur(Pn, Su), oo = ur(function (n, t) {
                for (var r = n.length; r-- && false !== t(n[r], r, n);) ;
                return n
            }, Fu), io = Pt(function (n, t, r) {
                nu.call(n, r) ? n[r].push(t) : n[r] = [t]
            }), fo = Pt(function (n, t, r) {
                n[r] = t
            }), ao = le(function (n, t, r) {
                var e = -1, u = typeof t == "function", o = Wr(t), i = Er(n) ? Be(n.length) : [];
                return Su(n, function (n) {
                    var f = u ? t : o && null != n ? n[t] : w;
                    i[++e] = f ? f.apply(n, r) : Or(n, t, r)
                }), i
            }), co = Pt(function (n, t, r) {
                n[r ? 0 : 1].push(t)
            }, function () {
                return [[], []]
            }), lo = lr(Xn, Su), so = lr(function (n, t, r, e) {
                var u = n.length;
                for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
                return r
            }, Fu), po = le(function (n, t) {
                if (null == n) return [];
                var r = t[2];
                return r && Ur(t[0], t[1], r) && (t.length = 1), Wt(n, pt(t), [])
            }), ho = Au || function () {
                return (new De).getTime()
            }, _o = le(function (n, t, r) {
                var e = x;
                if (r.length) var u = v(r, _o.placeholder), e = e | R;
                return gr(n, e, t, r, u)
            }), vo = le(function (n, t) {
                t = t.length ? pt(t) : Ie(n);
                for (var r = -1, e = t.length; ++r < e;) {
                    var u = t[r];
                    n[u] = gr(n[u], x, n)
                }
                return n
            }), go = le(function (n, t, r) {
                var e = x | A;
                if (r.length) var u = v(r, go.placeholder), e = e | R;
                return gr(t, e, n, r, u)
            }), yo = Xt(k), mo = Xt(I), wo = le(function (n, t) {
                return it(n, 1, t)
            }), bo = le(function (n, t, r) {
                return it(n, t, r)
            }), xo = er(), Ao = er(true), jo = le(function (n, t) {
                if (t = pt(t), typeof n != "function" || !Kn(t, e)) throw new Ge(L);
                var r = t.length;
                return le(function (e) {
                    for (var u = xu(e.length, r); u--;) e[u] = t[u](e[u]);
                    return n.apply(this, e)
                })
            }), ko = cr(R), Io = cr(O), Ro = le(function (n, t) {
                return gr(n, C, w, w, w, pt(t))
            }), Oo = du || function (n) {
                return h(n) && Sr(n.length) && ru.call(n) == D
            }, Eo = Kt(At), Co = Kt(function (n, t, r) {
                return r ? nt(n, t, r) : tt(n, t)
            }), Uo = Ht(Co, function (n, t) {
                return n === w ? t : n
            }), Wo = Ht(Eo, Fr), $o = rr(_t), So = rr(vt), Fo = or(Nu), No = or(Tu), To = ir(_t), Lo = ir(vt),
            zo = wu ? function (n) {
                var t = null == n ? w : n.constructor;
                return typeof t == "function" && t.prototype === n || typeof n != "function" && Er(n) ? Lr(n) : ge(n) ? wu(n) : []
            } : Lr, Bo = fr(true), Do = fr(), Mo = le(function (n, t) {
                if (null == n) return {};
                if ("function" != typeof t[0]) return t = Gn(pt(t), Ye), Nr(n, ft(Re(n), t));
                var r = Bt(t[0], t[1], 3);
                return Tr(n, function (n, t, e) {
                    return !r(n, t, e)
                })
            }), qo = le(function (n, t) {
                return null == n ? {} : "function" == typeof t[0] ? Tr(n, Bt(t[0], t[1], 3)) : Nr(n, pt(t))
            }), Po = Gt(function (n, t, r) {
                return t = t.toLowerCase(), n + (r ? t.charAt(0).toUpperCase() + t.slice(1) : t);
            }), Ko = Gt(function (n, t, r) {
                return n + (r ? "-" : "") + t.toLowerCase()
            }), Vo = ar(), Zo = ar(true), Yo = Gt(function (n, t, r) {
                return n + (r ? "_" : "") + t.toLowerCase()
            }), Go = Gt(function (n, t, r) {
                return n + (r ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
            }), Jo = le(function (n, t) {
                try {
                    return n.apply(w, t)
                } catch (r) {
                    return _e(r) ? r : new Me(r)
                }
            }), Xo = le(function (n, t) {
                return function (r) {
                    return Or(r, n, t)
                }
            }), Ho = le(function (n, t) {
                return function (r) {
                    return Or(n, r, t)
                }
            }), Qo = _r("ceil"), ni = _r("floor"), ti = Qt(se, Iu), ri = Qt(Ae, Ru), ei = _r("round");
        return Nn.prototype = Tn.prototype,
            Ln.prototype = $u(Tn.prototype), Ln.prototype.constructor = Ln, zn.prototype = $u(Tn.prototype), zn.prototype.constructor = zn, Bn.prototype["delete"] = function (n) {
            return this.has(n) && delete this.__data__[n]
        }, Bn.prototype.get = function (n) {
            return "__proto__" == n ? w : this.__data__[n]
        }, Bn.prototype.has = function (n) {
            return "__proto__" != n && nu.call(this.__data__, n)
        }, Bn.prototype.set = function (n, t) {
            return "__proto__" != n && (this.__data__[n] = t), this
        }, Dn.prototype.push = function (n) {
            var t = this.data;
            typeof n == "string" || ge(n) ? t.set.add(n) : t.hash[n] = true;
        }, ce.Cache = Bn, Nn.after = function (n, t) {
            if (typeof t != "function") {
                if (typeof n != "function") throw new Ge(L);
                var r = n;
                n = t, t = r
            }
            return n = mu(n = +n) ? n : 0, function () {
                return 1 > --n ? t.apply(this, arguments) : void 0
            }
        }, Nn.ary = function (n, t, r) {
            return r && Ur(n, t, r) && (t = w), t = n && null == t ? n.length : bu(+t || 0, 0), gr(n, E, w, w, w, w, t)
        }, Nn.assign = Co, Nn.at = no, Nn.before = fe, Nn.bind = _o, Nn.bindAll = vo, Nn.bindKey = go, Nn.callback = Se, Nn.chain = Qr, Nn.chunk = function (n, t, r) {
            t = (r ? Ur(n, t, r) : null == t) ? 1 : bu(yu(t) || 1, 1), r = 0;
            for (var e = n ? n.length : 0, u = -1, o = Be(vu(e / t)); r < e;) o[++u] = Et(n, r, r += t);
            return o
        }, Nn.compact = function (n) {
            for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r;) {
                var o = n[t];
                o && (u[++e] = o)
            }
            return u
        }, Nn.constant = function (n) {
            return function () {
                return n
            }
        }, Nn.countBy = to, Nn.create = function (n, t, r) {
            var e = $u(n);
            return r && Ur(n, t, r) && (t = w), t ? tt(e, t) : e
        }, Nn.curry = yo, Nn.curryRight = mo, Nn.debounce = ae, Nn.defaults = Uo, Nn.defaultsDeep = Wo, Nn.defer = wo, Nn.delay = bo, Nn.difference = Mu, Nn.drop = qr, Nn.dropRight = Pr, Nn.dropRightWhile = function (n, t, r) {
            return n && n.length ? Nt(n, wr(t, r, 3), true, true) : []
        }, Nn.dropWhile = function (n, t, r) {
            return n && n.length ? Nt(n, wr(t, r, 3), true) : []
        }, Nn.fill = function (n, t, r, e) {
            var u = n ? n.length : 0;
            if (!u) return [];
            for (r && typeof r != "number" && Ur(n, t, r) && (r = 0, e = u), u = n.length, r = null == r ? 0 : +r || 0, 0 > r && (r = -r > u ? 0 : u + r), e = e === w || e > u ? u : +e || 0, 0 > e && (e += u), u = r > e ? 0 : e >>> 0, r >>>= 0; r < u;) n[r++] = t;
            return n
        }, Nn.filter = re, Nn.flatten = function (n, t, r) {
            var e = n ? n.length : 0;
            return r && Ur(n, t, r) && (t = false), e ? pt(n, t) : []
        }, Nn.flattenDeep = function (n) {
            return n && n.length ? pt(n, true) : []
        }, Nn.flow = xo, Nn.flowRight = Ao, Nn.forEach = uo, Nn.forEachRight = oo, Nn.forIn = Fo,
            Nn.forInRight = No, Nn.forOwn = To, Nn.forOwnRight = Lo, Nn.functions = Ie, Nn.groupBy = io, Nn.indexBy = fo, Nn.initial = function (n) {
            return Pr(n, 1)
        }, Nn.intersection = Ku, Nn.invert = function (n, t, r) {
            r && Ur(n, t, r) && (t = w), r = -1;
            for (var e = zo(n), u = e.length, o = {}; ++r < u;) {
                var i = e[r], f = n[i];
                t ? nu.call(o, f) ? o[f].push(i) : o[f] = [i] : o[f] = i
            }
            return o
        }, Nn.invoke = ao, Nn.keys = zo, Nn.keysIn = Re, Nn.map = ue, Nn.mapKeys = Bo, Nn.mapValues = Do, Nn.matches = Ne, Nn.matchesProperty = function (n, t) {
            return xt(n, ot(t, true))
        }, Nn.memoize = ce, Nn.merge = Eo, Nn.method = Xo, Nn.methodOf = Ho,
            Nn.mixin = Te, Nn.modArgs = jo, Nn.negate = function (n) {
            if (typeof n != "function") throw new Ge(L);
            return function () {
                return !n.apply(this, arguments)
            }
        }, Nn.omit = Mo, Nn.once = function (n) {
            return fe(2, n)
        }, Nn.pairs = Oe, Nn.partial = ko, Nn.partialRight = Io, Nn.partition = co, Nn.pick = qo, Nn.pluck = function (n, t) {
            return ue(n, ze(t))
        }, Nn.property = ze, Nn.propertyOf = function (n) {
            return function (t) {
                return yt(n, Dr(t), t + "")
            }
        }, Nn.pull = function () {
            var n = arguments, t = n[0];
            if (!t || !t.length) return t;
            for (var r = 0, e = xr(), u = n.length; ++r < u;) for (var o = 0, i = n[r]; -1 < (o = e(t, i, o));) pu.call(t, o, 1);
            return t
        }, Nn.pullAt = Vu, Nn.range = function (n, t, r) {
            r && Ur(n, t, r) && (t = r = w), n = +n || 0, r = null == r ? 1 : +r || 0, null == t ? (t = n, n = 0) : t = +t || 0;
            var e = -1;
            t = bu(vu((t - n) / (r || 1)), 0);
            for (var u = Be(t); ++e < t;) u[e] = n, n += r;
            return u
        }, Nn.rearg = Ro, Nn.reject = function (n, t, r) {
            var e = Oo(n) ? Vn : lt;
            return t = wr(t, r, 3), e(n, function (n, r, e) {
                return !t(n, r, e)
            })
        }, Nn.remove = function (n, t, r) {
            var e = [];
            if (!n || !n.length) return e;
            var u = -1, o = [], i = n.length;
            for (t = wr(t, r, 3); ++u < i;) r = n[u], t(r, u, n) && (e.push(r), o.push(u));
            return It(n, o), e
        }, Nn.rest = Yr, Nn.restParam = le,
            Nn.set = function (n, t, r) {
                if (null == n) return n;
                var e = t + "";
                t = null != n[e] || Wr(t, n) ? [e] : Dr(t);
                for (var e = -1, u = t.length, o = u - 1, i = n; null != i && ++e < u;) {
                    var f = t[e];
                    ge(i) && (e == o ? i[f] = r : null == i[f] && (i[f] = Cr(t[e + 1]) ? [] : {})), i = i[f]
                }
                return n
            }, Nn.shuffle = function (n) {
            return oe(n, Ru)
        }, Nn.slice = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? (r && typeof r != "number" && Ur(n, t, r) && (t = 0, r = e), Et(n, t, r)) : []
        }, Nn.sortBy = function (n, t, r) {
            if (null == n) return [];
            r && Ur(n, t, r) && (t = w);
            var e = -1;
            return t = wr(t, r, 3), n = wt(n, function (n, r, u) {
                return {
                    a: t(n, r, u),
                    b: ++e, c: n
                }
            }), Ut(n, f)
        }, Nn.sortByAll = po, Nn.sortByOrder = function (n, t, r, e) {
            return null == n ? [] : (e && Ur(t, r, e) && (r = w), Oo(t) || (t = null == t ? [] : [t]), Oo(r) || (r = null == r ? [] : [r]), Wt(n, t, r))
        }, Nn.spread = function (n) {
            if (typeof n != "function") throw new Ge(L);
            return function (t) {
                return n.apply(this, t)
            }
        }, Nn.take = function (n, t, r) {
            return n && n.length ? ((r ? Ur(n, t, r) : null == t) && (t = 1), Et(n, 0, 0 > t ? 0 : t)) : []
        }, Nn.takeRight = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? Ur(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), Et(n, 0 > t ? 0 : t)) : []
        }, Nn.takeRightWhile = function (n, t, r) {
            return n && n.length ? Nt(n, wr(t, r, 3), false, true) : []
        }, Nn.takeWhile = function (n, t, r) {
            return n && n.length ? Nt(n, wr(t, r, 3)) : []
        }, Nn.tap = function (n, t, r) {
            return t.call(r, n), n
        },Nn.throttle = function (n, t, r) {
            var e = true, u = true;
            if (typeof n != "function") throw new Ge(L);
            return false === r ? e = false : ge(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), ae(n, t, {
                leading: e,
                maxWait: +t,
                trailing: u
            })
        },Nn.thru = ne,Nn.times = function (n, t, r) {
            if (n = yu(n), 1 > n || !mu(n)) return [];
            var e = -1, u = Be(xu(n, 4294967295));
            for (t = Bt(t, r, 1); ++e < n;) 4294967295 > e ? u[e] = t(e) : t(e);
            return u
        },Nn.toArray = je,Nn.toPlainObject = ke,Nn.transform = function (n, t, r, e) {
            var u = Oo(n) || xe(n);
            return t = wr(t, e, 4), null == r && (u || ge(n) ? (e = n.constructor, r = u ? Oo(n) ? new e : [] : $u(ve(e) ? e.prototype : w)) : r = {}), (u ? Pn : _t)(n, function (n, e, u) {
                return t(r, n, e, u)
            }), r
        },Nn.union = Gu,Nn.uniq = Gr,Nn.unzip = Jr,Nn.unzipWith = Xr,Nn.values = Ee,Nn.valuesIn = function (n) {
            return Ft(n, Re(n))
        },Nn.where = function (n, t) {
            return re(n, bt(t))
        },Nn.without = Ju,Nn.wrap = function (n, t) {
            return t = null == t ? Fe : t, gr(t, R, w, [n], [])
        },Nn.xor = function () {
            for (var n = -1, t = arguments.length; ++n < t;) {
                var r = arguments[n];
                if (Er(r)) var e = e ? Jn(ft(e, r), ft(r, e)) : r
            }
            return e ? St(e) : []
        },Nn.zip = Xu,Nn.zipObject = Hr,Nn.zipWith = Hu,Nn.backflow = Ao,Nn.collect = ue,Nn.compose = Ao,Nn.each = uo,Nn.eachRight = oo,Nn.extend = Co,Nn.iteratee = Se,Nn.methods = Ie,Nn.object = Hr,Nn.select = re,Nn.tail = Yr,Nn.unique = Gr,Te(Nn, Nn),Nn.add = function (n, t) {
            return (+n || 0) + (+t || 0)
        },Nn.attempt = Jo,Nn.camelCase = Po,Nn.capitalize = function (n) {
            return (n = u(n)) && n.charAt(0).toUpperCase() + n.slice(1)
        },Nn.ceil = Qo,Nn.clone = function (n, t, r, e) {
            return t && typeof t != "boolean" && Ur(n, t, r) ? t = false : typeof t == "function" && (e = r,
                r = t, t = false), typeof r == "function" ? ot(n, t, Bt(r, e, 3)) : ot(n, t)
        },Nn.cloneDeep = function (n, t, r) {
            return typeof t == "function" ? ot(n, true, Bt(t, r, 3)) : ot(n, true)
        },Nn.deburr = Ce,Nn.endsWith = function (n, t, r) {
            n = u(n), t += "";
            var e = n.length;
            return r = r === w ? e : xu(0 > r ? 0 : +r || 0, e), r -= t.length, 0 <= r && n.indexOf(t, r) == r
        },Nn.escape = function (n) {
            return (n = u(n)) && hn.test(n) ? n.replace(sn, c) : n
        },Nn.escapeRegExp = function (n) {
            return (n = u(n)) && bn.test(n) ? n.replace(wn, l) : n || "(?:)"
        },Nn.every = te,Nn.find = ro,Nn.findIndex = qu,Nn.findKey = $o,Nn.findLast = eo,
            Nn.findLastIndex = Pu,Nn.findLastKey = So,Nn.findWhere = function (n, t) {
            return ro(n, bt(t))
        },Nn.first = Kr,Nn.floor = ni,Nn.get = function (n, t, r) {
            return n = null == n ? w : yt(n, Dr(t), t + ""), n === w ? r : n
        },Nn.gt = se,Nn.gte = function (n, t) {
            return n >= t
        },Nn.has = function (n, t) {
            if (null == n) return false;
            var r = nu.call(n, t);
            if (!r && !Wr(t)) {
                if (t = Dr(t), n = 1 == t.length ? n : yt(n, Et(t, 0, -1)), null == n) return false;
                t = Zr(t), r = nu.call(n, t)
            }
            return r || Sr(n.length) && Cr(t, n.length) && (Oo(n) || pe(n))
        },Nn.identity = Fe,Nn.includes = ee,Nn.indexOf = Vr,Nn.inRange = function (n, t, r) {
            return t = +t || 0, r === w ? (r = t, t = 0) : r = +r || 0, n >= xu(t, r) && n < bu(t, r)
        },Nn.isArguments = pe,Nn.isArray = Oo,Nn.isBoolean = function (n) {
            return true === n || false === n || h(n) && ru.call(n) == M
        },Nn.isDate = function (n) {
            return h(n) && ru.call(n) == q
        },Nn.isElement = function (n) {
            return !!n && 1 === n.nodeType && h(n) && !me(n)
        },Nn.isEmpty = function (n) {
            return null == n ? true : Er(n) && (Oo(n) || be(n) || pe(n) || h(n) && ve(n.splice)) ? !n.length : !zo(n).length
        },Nn.isEqual = he,Nn.isError = _e,Nn.isFinite = function (n) {
            return typeof n == "number" && mu(n)
        },Nn.isFunction = ve,Nn.isMatch = function (n, t, r, e) {
            return r = typeof r == "function" ? Bt(r, e, 3) : w, mt(n, Ar(t), r)
        },Nn.isNaN = function (n) {
            return de(n) && n != +n
        },Nn.isNative = ye,Nn.isNull = function (n) {
            return null === n
        },Nn.isNumber = de,Nn.isObject = ge,Nn.isPlainObject = me,Nn.isRegExp = we,Nn.isString = be,Nn.isTypedArray = xe,Nn.isUndefined = function (n) {
            return n === w
        },Nn.kebabCase = Ko,Nn.last = Zr,Nn.lastIndexOf = function (n, t, r) {
            var e = n ? n.length : 0;
            if (!e) return -1;
            var u = e;
            if (typeof r == "number") u = (0 > r ? bu(e + r, 0) : xu(r || 0, e - 1)) + 1; else if (r) return u = Lt(n, t, true) - 1, n = n[u], (t === t ? t === n : n !== n) ? u : -1;
            if (t !== t) return p(n, u, true);
            for (; u--;) if (n[u] === t) return u;
            return -1
        },Nn.lt = Ae,Nn.lte = function (n, t) {
            return n <= t
        },Nn.max = ti,Nn.min = ri,Nn.noConflict = function () {
            return Zn._ = eu, this
        },Nn.noop = Le,Nn.now = ho,Nn.pad = function (n, t, r) {
            n = u(n), t = +t;
            var e = n.length;
            return e < t && mu(t) ? (e = (t - e) / 2, t = yu(e), e = vu(e), r = pr("", e, r), r.slice(0, t) + n + r) : n
        },Nn.padLeft = Vo,Nn.padRight = Zo,Nn.parseInt = function (n, t, r) {
            return (r ? Ur(n, t, r) : null == t) ? t = 0 : t && (t = +t), n = We(n), ju(n, t || (In.test(n) ? 16 : 10))
        },Nn.random = function (n, t, r) {
            r && Ur(n, t, r) && (t = r = w);
            var e = null == n, u = null == t;
            return null == r && (u && typeof n == "boolean" ? (r = n, n = 1) : typeof t == "boolean" && (r = t, u = true)), e && u && (t = 1, u = false), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, r || n % 1 || t % 1 ? (r = ku(), xu(n + r * (t - n + fu("1e-" + ((r + "").length - 1))), t)) : Rt(n, t)
        },Nn.reduce = lo,Nn.reduceRight = so,Nn.repeat = Ue,Nn.result = function (n, t, r) {
            var e = null == n ? w : n[t];
            return e === w && (null == n || Wr(t, n) || (t = Dr(t), n = 1 == t.length ? n : yt(n, Et(t, 0, -1)), e = null == n ? w : n[Zr(t)]), e = e === w ? r : e), ve(e) ? e.call(n) : e
        },Nn.round = ei,Nn.runInContext = m,Nn.size = function (n) {
            var t = n ? Bu(n) : 0;
            return Sr(t) ? t : zo(n).length
        },Nn.snakeCase = Yo,Nn.some = ie,Nn.sortedIndex = Zu,Nn.sortedLastIndex = Yu,Nn.startCase = Go,Nn.startsWith = function (n, t, r) {
            return n = u(n), r = null == r ? 0 : xu(0 > r ? 0 : +r || 0, n.length), n.lastIndexOf(t, r) == r
        },Nn.sum = function (n, t, r) {
            if (r && Ur(n, t, r) && (t = w), t = wr(t, r, 3), 1 == t.length) {
                n = Oo(n) ? n : zr(n), r = n.length;
                for (var e = 0; r--;) e += +t(n[r]) || 0;
                n = e
            } else n = $t(n, t);
            return n
        },Nn.template = function (n, t, r) {
            var e = Nn.templateSettings;
            r && Ur(n, t, r) && (t = r = w), n = u(n), t = nt(tt({}, r || t), e, Qn), r = nt(tt({}, t.imports), e.imports, Qn);
            var o, i, f = zo(r), a = Ft(r, f), c = 0;
            r = t.interpolate || Cn;
            var l = "__p+='";
            r = Ze((t.escape || Cn).source + "|" + r.source + "|" + (r === gn ? jn : Cn).source + "|" + (t.evaluate || Cn).source + "|$", "g");
            var p = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
            if (n.replace(r, function (t, r, e, u, f, a) {
                return e || (e = u), l += n.slice(c, a).replace(Un, s), r && (o = true, l += "'+__e(" + r + ")+'"), f && (i = true, l += "';" + f + ";\n__p+='"), e && (l += "'+((__t=(" + e + "))==null?'':__t)+'"), c = a + t.length, t
            }), l += "';", (t = t.variable) || (l = "with(obj){" + l + "}"), l = (i ? l.replace(fn, "") : l).replace(an, "$1").replace(cn, "$1;"),
                l = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (o ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}", t = Jo(function () {
                return qe(f, p + "return " + l).apply(w, a)
            }), t.source = l, _e(t)) throw t;
            return t
        },Nn.trim = We,Nn.trimLeft = function (n, t, r) {
            var e = n;
            return (n = u(n)) ? n.slice((r ? Ur(e, t, r) : null == t) ? g(n) : o(n, t + "")) : n
        },Nn.trimRight = function (n, t, r) {
            var e = n;
            return (n = u(n)) ? (r ? Ur(e, t, r) : null == t) ? n.slice(0, y(n) + 1) : n.slice(0, i(n, t + "") + 1) : n;
        },Nn.trunc = function (n, t, r) {
            r && Ur(n, t, r) && (t = w);
            var e = U;
            if (r = W, null != t) if (ge(t)) {
                var o = "separator" in t ? t.separator : o, e = "length" in t ? +t.length || 0 : e;
                r = "omission" in t ? u(t.omission) : r
            } else e = +t || 0;
            if (n = u(n), e >= n.length) return n;
            if (e -= r.length, 1 > e) return r;
            if (t = n.slice(0, e), null == o) return t + r;
            if (we(o)) {
                if (n.slice(e).search(o)) {
                    var i, f = n.slice(0, e);
                    for (o.global || (o = Ze(o.source, (kn.exec(o) || "") + "g")), o.lastIndex = 0; n = o.exec(f);) i = n.index;
                    t = t.slice(0, null == i ? e : i)
                }
            } else n.indexOf(o, e) != e && (o = t.lastIndexOf(o),
            -1 < o && (t = t.slice(0, o)));
            return t + r
        },Nn.unescape = function (n) {
            return (n = u(n)) && pn.test(n) ? n.replace(ln, d) : n
        },Nn.uniqueId = function (n) {
            var t = ++tu;
            return u(n) + t
        },Nn.words = $e,Nn.all = te,Nn.any = ie,Nn.contains = ee,Nn.eq = he,Nn.detect = ro,Nn.foldl = lo,Nn.foldr = so,Nn.head = Kr,Nn.include = ee,Nn.inject = lo,Te(Nn, function () {
            var n = {};
            return _t(Nn, function (t, r) {
                Nn.prototype[r] || (n[r] = t)
            }), n
        }(), false),Nn.sample = oe,Nn.prototype.sample = function (n) {
            return this.__chain__ || null != n ? this.thru(function (t) {
                return oe(t, n)
            }) : oe(this.value());
        },Nn.VERSION = b,Pn("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
            Nn[n].placeholder = Nn
        }),Pn(["drop", "take"], function (n, t) {
            zn.prototype[n] = function (r) {
                var e = this.__filtered__;
                if (e && !t) return new zn(this);
                r = null == r ? 1 : bu(yu(r) || 0, 0);
                var u = this.clone();
                return e ? u.__takeCount__ = xu(u.__takeCount__, r) : u.__views__.push({
                    size: r,
                    type: n + (0 > u.__dir__ ? "Right" : "")
                }), u
            }, zn.prototype[n + "Right"] = function (t) {
                return this.reverse()[n](t).reverse()
            }
        }),Pn(["filter", "map", "takeWhile"], function (n, t) {
            var r = t + 1, e = r != T;
            zn.prototype[n] = function (n, t) {
                var u = this.clone();
                return u.__iteratees__.push({iteratee: wr(n, t, 1), type: r}), u.__filtered__ = u.__filtered__ || e, u
            }
        }),Pn(["first", "last"], function (n, t) {
            var r = "take" + (t ? "Right" : "");
            zn.prototype[n] = function () {
                return this[r](1).value()[0]
            }
        }),Pn(["initial", "rest"], function (n, t) {
            var r = "drop" + (t ? "" : "Right");
            zn.prototype[n] = function () {
                return this.__filtered__ ? new zn(this) : this[r](1)
            }
        }),Pn(["pluck", "where"], function (n, t) {
            var r = t ? "filter" : "map", e = t ? bt : ze;
            zn.prototype[n] = function (n) {
                return this[r](e(n))
            }
        }),zn.prototype.compact = function () {
            return this.filter(Fe)
        },zn.prototype.reject = function (n, t) {
            return n = wr(n, t, 1), this.filter(function (t) {
                return !n(t)
            })
        },zn.prototype.slice = function (n, t) {
            n = null == n ? 0 : +n || 0;
            var r = this;
            return r.__filtered__ && (0 < n || 0 > t) ? new zn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== w && (t = +t || 0, r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r)
        },zn.prototype.takeRightWhile = function (n, t) {
            return this.reverse().takeWhile(n, t).reverse()
        },zn.prototype.toArray = function () {
            return this.take(Ru);
        },_t(zn.prototype, function (n, t) {
            var r = /^(?:filter|map|reject)|While$/.test(t), e = /^(?:first|last)$/.test(t),
                u = Nn[e ? "take" + ("last" == t ? "Right" : "") : t];
            u && (Nn.prototype[t] = function () {
                function t(n) {
                    return e && i ? u(n, 1)[0] : u.apply(w, Jn([n], o))
                }

                var o = e ? [1] : arguments, i = this.__chain__, f = this.__wrapped__, a = !!this.__actions__.length,
                    c = f instanceof zn, l = o[0], s = c || Oo(f);
                return s && r && typeof l == "function" && 1 != l.length && (c = s = false), l = {
                    func: ne,
                    args: [t],
                    thisArg: w
                }, a = c && !a, e && !i ? a ? (f = f.clone(), f.__actions__.push(l), n.call(f)) : u.call(w, this.value())[0] : !e && s ? (f = a ? f : new zn(this),
                    f = n.apply(f, o), f.__actions__.push(l), new Ln(f, i)) : this.thru(t)
            })
        }),Pn("join pop push replace shift sort splice split unshift".split(" "), function (n) {
            var t = (/^(?:replace|split)$/.test(n) ? He : Je)[n],
                r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = /^(?:join|pop|replace|shift)$/.test(n);
            Nn.prototype[n] = function () {
                var n = arguments;
                return e && !this.__chain__ ? t.apply(this.value(), n) : this[r](function (r) {
                    return t.apply(r, n)
                })
            }
        }),_t(zn.prototype, function (n, t) {
            var r = Nn[t];
            if (r) {
                var e = r.name + "";
                (Wu[e] || (Wu[e] = [])).push({
                    name: t, func: r
                })
            }
        }),Wu[sr(w, A).name] = [{name: "wrapper", func: w}],zn.prototype.clone = function () {
            var n = new zn(this.__wrapped__);
            return n.__actions__ = qn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = qn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = qn(this.__views__), n
        },zn.prototype.reverse = function () {
            if (this.__filtered__) {
                var n = new zn(this);
                n.__dir__ = -1, n.__filtered__ = true
            } else n = this.clone(), n.__dir__ *= -1;
            return n
        },zn.prototype.value = function () {
            var n, t = this.__wrapped__.value(), r = this.__dir__, e = Oo(t), u = 0 > r, o = e ? t.length : 0;
            n = o;
            for (var i = this.__views__, f = 0, a = -1, c = i.length; ++a < c;) {
                var l = i[a], s = l.size;
                switch (l.type) {
                    case"drop":
                        f += s;
                        break;
                    case"dropRight":
                        n -= s;
                        break;
                    case"take":
                        n = xu(n, f + s);
                        break;
                    case"takeRight":
                        f = bu(f, n - s)
                }
            }
            if (n = {
                start: f,
                end: n
            }, i = n.start, f = n.end, n = f - i, u = u ? f : i - 1, i = this.__iteratees__, f = i.length, a = 0, c = xu(n, this.__takeCount__), !e || o < F || o == n && c == n) return Tt(t, this.__actions__);
            e = [];
            n:for (; n-- && a < c;) {
                for (u += r, o = -1, l = t[u]; ++o < f;) {
                    var p = i[o], s = p.type, p = p.iteratee(l);
                    if (s == T) l = p; else if (!p) {
                        if (s == N) continue n;
                        break n
                    }
                }
                e[a++] = l
            }
            return e
        },Nn.prototype.chain = function () {
            return Qr(this)
        },Nn.prototype.commit = function () {
            return new Ln(this.value(), this.__chain__)
        },Nn.prototype.concat = Qu,Nn.prototype.plant = function (n) {
            for (var t, r = this; r instanceof Tn;) {
                var e = Mr(r);
                t ? u.__wrapped__ = e : t = e;
                var u = e, r = r.__wrapped__
            }
            return u.__wrapped__ = n, t
        },Nn.prototype.reverse = function () {
            function n(n) {
                return n.reverse()
            }

            var t = this.__wrapped__;
            return t instanceof zn ? (this.__actions__.length && (t = new zn(this)),
                t = t.reverse(), t.__actions__.push({
                func: ne,
                args: [n],
                thisArg: w
            }), new Ln(t, this.__chain__)) : this.thru(n)
        },Nn.prototype.toString = function () {
            return this.value() + ""
        },Nn.prototype.run = Nn.prototype.toJSON = Nn.prototype.valueOf = Nn.prototype.value = function () {
            return Tt(this.__wrapped__, this.__actions__)
        },Nn.prototype.collect = Nn.prototype.map,Nn.prototype.head = Nn.prototype.first,Nn.prototype.select = Nn.prototype.filter,Nn.prototype.tail = Nn.prototype.rest,Nn
    }

    var w, b = "3.10.1", x = 1, A = 2, j = 4, k = 8, I = 16, R = 32, O = 64, E = 128, C = 256, U = 30, W = "...",
        $ = 150, S = 16, F = 200, N = 1, T = 2, L = "Expected a function", z = "__lodash_placeholder__",
        B = "[object Arguments]", D = "[object Array]", M = "[object Boolean]", q = "[object Date]",
        P = "[object Error]", K = "[object Function]", V = "[object Number]", Z = "[object Object]",
        Y = "[object RegExp]", G = "[object String]", J = "[object ArrayBuffer]", X = "[object Float32Array]",
        H = "[object Float64Array]", Q = "[object Int8Array]", nn = "[object Int16Array]", tn = "[object Int32Array]",
        rn = "[object Uint8Array]", en = "[object Uint8ClampedArray]", un = "[object Uint16Array]",
        on = "[object Uint32Array]", fn = /\b__p\+='';/g, an = /\b(__p\+=)''\+/g, cn = /(__e\(.*?\)|\b__t\))\+'';/g,
        ln = /&(?:amp|lt|gt|quot|#39|#96);/g, sn = /[&<>"'`]/g, pn = RegExp(ln.source), hn = RegExp(sn.source),
        _n = /<%-([\s\S]+?)%>/g, vn = /<%([\s\S]+?)%>/g, gn = /<%=([\s\S]+?)%>/g,
        yn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, dn = /^\w*$/,
        mn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        wn = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g, bn = RegExp(wn.source),
        xn = /[\u0300-\u036f\ufe20-\ufe23]/g, An = /\\(\\)?/g, jn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, kn = /\w*$/,
        In = /^0[xX]/, Rn = /^\[object .+?Constructor\]$/, On = /^\d+$/, En = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        Cn = /($^)/, Un = /['\n\r\u2028\u2029\\]/g,
        Wn = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
        $n = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),
        Sn = {};
    Sn[X] = Sn[H] = Sn[Q] = Sn[nn] = Sn[tn] = Sn[rn] = Sn[en] = Sn[un] = Sn[on] = true, Sn[B] = Sn[D] = Sn[J] = Sn[M] = Sn[q] = Sn[P] = Sn[K] = Sn["[object Map]"] = Sn[V] = Sn[Z] = Sn[Y] = Sn["[object Set]"] = Sn[G] = Sn["[object WeakMap]"] = false;
    var Fn = {};
    Fn[B] = Fn[D] = Fn[J] = Fn[M] = Fn[q] = Fn[X] = Fn[H] = Fn[Q] = Fn[nn] = Fn[tn] = Fn[V] = Fn[Z] = Fn[Y] = Fn[G] = Fn[rn] = Fn[en] = Fn[un] = Fn[on] = true, Fn[P] = Fn[K] = Fn["[object Map]"] = Fn["[object Set]"] = Fn["[object WeakMap]"] = false;
    var Nn = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss"
        }, Tn = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"},
        Ln = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`"},
        zn = {"function": true, object: true}, Bn = {
            0: "x30",
            1: "x31",
            2: "x32",
            3: "x33",
            4: "x34",
            5: "x35",
            6: "x36",
            7: "x37",
            8: "x38",
            9: "x39",
            A: "x41",
            B: "x42",
            C: "x43",
            D: "x44",
            E: "x45",
            F: "x46",
            a: "x61",
            b: "x62",
            c: "x63",
            d: "x64",
            e: "x65",
            f: "x66",
            n: "x6e",
            r: "x72",
            t: "x74",
            u: "x75",
            v: "x76",
            x: "x78"
        }, Dn = {
            "\\": "\\",
            "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"
        }, Mn = zn[typeof exports] && exports && !exports.nodeType && exports,
        qn = zn[typeof module] && module && !module.nodeType && module,
        Pn = zn[typeof self] && self && self.Object && self,
        Kn = zn[typeof window] && window && window.Object && window, Vn = qn && qn.exports === Mn && Mn,
        Zn = Mn && qn && typeof global == "object" && global && global.Object && global || Kn !== (this && this.window) && Kn || Pn || this,
        Yn = m();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Zn._ = Yn, define(function () {
        return Yn
    })) : Mn && qn ? Vn ? (qn.exports = Yn)._ = Yn : Mn._ = Yn : Zn._ = Yn
}).call(this);
//     Backbone.js 1.3.2

//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function (factory) {

    // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
    // We use `self` instead of `window` for `WebWorker` support.
    var root = (typeof self == 'object' && self.self === self && self) ||
        (typeof global == 'object' && global.global === global && global);

    // Set up Backbone appropriately for the environment. Start with AMD.
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'jquery', 'exports'], function (_, $, exports) {
            // Export global even in AMD case in case this script is loaded with
            // others that may still expect a global Backbone.
            root.Backbone = factory(root, exports, _, $);
        });

        // Next for Node.js or CommonJS. jQuery may not be needed as a module.
    } else if (typeof exports !== 'undefined') {
        var _ = require('underscore'), $;
        try {
            $ = require('jquery');
        } catch (e) {
        }
        factory(root, exports, _, $);

        // Finally, as a browser global.
    } else {
        root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
    }

})(function (root, Backbone, _, $) {

    // Initial Setup
    // -------------

    // Save the previous value of the `Backbone` variable, so that it can be
    // restored later on, if `noConflict` is used.
    var previousBackbone = root.Backbone;

    // Create a local reference to a common array method we'll want to use later.
    var slice = Array.prototype.slice;

    // Current version of the library. Keep in sync with `package.json`.
    Backbone.VERSION = '1.3.2';

    // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
    // the `$` variable.
    Backbone.$ = $;

    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function () {
        root.Backbone = previousBackbone;
        return this;
    };

    // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
    // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
    // set a `X-Http-Method-Override` header.
    Backbone.emulateHTTP = false;

    // Turn on `emulateJSON` to support legacy servers that can't deal with direct
    // `application/json` requests ... this will encode the body as
    // `application/x-www-form-urlencoded` instead and will send the model in a
    // form param named `model`.
    Backbone.emulateJSON = false;

    // Proxy Backbone class methods to Underscore functions, wrapping the model's
    // `attributes` object or collection's `models` array behind the scenes.
    //
    // collection.filter(function(model) { return model.get('age') > 10 });
    // collection.each(this.addView);
    //
    // `Function#apply` can be slow so we use the method's arg count, if we know it.
    var addMethod = function (length, method, attribute) {
        switch (length) {
            case 1:
                return function () {
                    return _[method](this[attribute]);
                };
            case 2:
                return function (value) {
                    return _[method](this[attribute], value);
                };
            case 3:
                return function (iteratee, context) {
                    return _[method](this[attribute], cb(iteratee, this), context);
                };
            case 4:
                return function (iteratee, defaultVal, context) {
                    return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
                };
            default:
                return function () {
                    var args = slice.call(arguments);
                    args.unshift(this[attribute]);
                    return _[method].apply(_, args);
                };
        }
    };
    var addUnderscoreMethods = function (Class, methods, attribute) {
        _.each(methods, function (length, method) {
            if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
        });
    };

    // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
    var cb = function (iteratee, instance) {
        if (_.isFunction(iteratee)) return iteratee;
        if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
        if (_.isString(iteratee)) return function (model) {
            return model.get(iteratee);
        };
        return iteratee;
    };
    var modelMatcher = function (attrs) {
        var matcher = _.matches(attrs);
        return function (model) {
            return matcher(model.attributes);
        };
    };

    // Backbone.Events
    // ---------------

    // A module that can be mixed in to *any object* in order to provide it with
    // a custom event channel. You may bind a callback to an event with `on` or
    // remove with `off`; `trigger`-ing an event fires all callbacks in
    // succession.
    //
    //     var object = {};
    //     _.extend(object, Backbone.Events);
    //     object.on('expand', function(){ alert('expanded'); });
    //     object.trigger('expand');
    //
    var Events = Backbone.Events = {};

    // Regular expression used to split event strings.
    var eventSplitter = /\s+/;

    // Iterates over the standard `event, callback` (as well as the fancy multiple
    // space-separated events `"change blur", callback` and jQuery-style event
    // maps `{event: callback}`).
    var eventsApi = function (iteratee, events, name, callback, opts) {
        var i = 0, names;
        if (name && typeof name === 'object') {
            // Handle event maps.
            if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
            for (names = _.keys(name); i < names.length; i++) {
                events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
            }
        } else if (name && eventSplitter.test(name)) {
            // Handle space-separated event names by delegating them individually.
            for (names = name.split(eventSplitter); i < names.length; i++) {
                events = iteratee(events, names[i], callback, opts);
            }
        } else {
            // Finally, standard events.
            events = iteratee(events, name, callback, opts);
        }
        return events;
    };

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    Events.on = function (name, callback, context) {
        return internalOn(this, name, callback, context);
    };

    // Guard the `listening` argument from the public API.
    var internalOn = function (obj, name, callback, context, listening) {
        obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
            context: context,
            ctx: obj,
            listening: listening
        });

        if (listening) {
            var listeners = obj._listeners || (obj._listeners = {});
            listeners[listening.id] = listening;
        }

        return obj;
    };

    // Inversion-of-control versions of `on`. Tell *this* object to listen to
    // an event in another object... keeping track of what it's listening to
    // for easier unbinding later.
    Events.listenTo = function (obj, name, callback) {
        if (!obj) return this;
        var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
        var listeningTo = this._listeningTo || (this._listeningTo = {});
        var listening = listeningTo[id];

        // This object is not listening to any other events on `obj` yet.
        // Setup the necessary references to track the listening callbacks.
        if (!listening) {
            var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
            listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
        }

        // Bind callbacks on obj, and keep track of them on listening.
        internalOn(obj, name, callback, this, listening);
        return this;
    };

    // The reducing API that adds a callback to the `events` object.
    var onApi = function (events, name, callback, options) {
        if (callback) {
            var handlers = events[name] || (events[name] = []);
            var context = options.context, ctx = options.ctx, listening = options.listening;
            if (listening) listening.count++;

            handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
        }
        return events;
    };

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    Events.off = function (name, callback, context) {
        if (!this._events) return this;
        this._events = eventsApi(offApi, this._events, name, callback, {
            context: context,
            listeners: this._listeners
        });
        return this;
    };

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    Events.stopListening = function (obj, name, callback) {
        var listeningTo = this._listeningTo;
        if (!listeningTo) return this;

        var ids = obj ? [obj._listenId] : _.keys(listeningTo);

        for (var i = 0; i < ids.length; i++) {
            var listening = listeningTo[ids[i]];

            // If listening doesn't exist, this object is not currently
            // listening to obj. Break out early.
            if (!listening) break;

            listening.obj.off(name, callback, this);
        }

        return this;
    };

    // The reducing API that removes a callback from the `events` object.
    var offApi = function (events, name, callback, options) {
        if (!events) return;

        var i = 0, listening;
        var context = options.context, listeners = options.listeners;

        // Delete all events listeners and "drop" events.
        if (!name && !callback && !context) {
            var ids = _.keys(listeners);
            for (; i < ids.length; i++) {
                listening = listeners[ids[i]];
                delete listeners[listening.id];
                delete listening.listeningTo[listening.objId];
            }
            return;
        }

        var names = name ? [name] : _.keys(events);
        for (; i < names.length; i++) {
            name = names[i];
            var handlers = events[name];

            // Bail out if there are no events stored.
            if (!handlers) break;

            // Replace events if there are any remaining.  Otherwise, clean up.
            var remaining = [];
            for (var j = 0; j < handlers.length; j++) {
                var handler = handlers[j];
                if (
                    callback && callback !== handler.callback &&
                    callback !== handler.callback._callback ||
                    context && context !== handler.context
                ) {
                    remaining.push(handler);
                } else {
                    listening = handler.listening;
                    if (listening && --listening.count === 0) {
                        delete listeners[listening.id];
                        delete listening.listeningTo[listening.objId];
                    }
                }
            }

            // Update tail event if the list has any events.  Otherwise, clean up.
            if (remaining.length) {
                events[name] = remaining;
            } else {
                delete events[name];
            }
        }
        return events;
    };

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, its listener will be removed. If multiple events
    // are passed in using the space-separated syntax, the handler will fire
    // once for each event, not once for a combination of all events.
    Events.once = function (name, callback, context) {
        // Map the event into a `{event: once}` object.
        var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
        if (typeof name === 'string' && context == null) callback = void 0;
        return this.on(events, callback, context);
    };

    // Inversion-of-control versions of `once`.
    Events.listenToOnce = function (obj, name, callback) {
        // Map the event into a `{event: once}` object.
        var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
        return this.listenTo(obj, events);
    };

    // Reduces the event callbacks into a map of `{event: onceWrapper}`.
    // `offer` unbinds the `onceWrapper` after it has been called.
    var onceMap = function (map, name, callback, offer) {
        if (callback) {
            var once = map[name] = _.once(function () {
                offer(name, once);
                callback.apply(this, arguments);
            });
            once._callback = callback;
        }
        return map;
    };

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    Events.trigger = function (name) {
        if (!this._events) return this;

        var length = Math.max(0, arguments.length - 1);
        var args = Array(length);
        for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

        eventsApi(triggerApi, this._events, name, void 0, args);
        return this;
    };

    // Handles triggering the appropriate event callbacks.
    var triggerApi = function (objEvents, name, callback, args) {
        if (objEvents) {
            var events = objEvents[name];
            var allEvents = objEvents.all;
            if (events && allEvents) allEvents = allEvents.slice();
            if (events) triggerEvents(events, args);
            if (allEvents) triggerEvents(allEvents, [name].concat(args));
        }
        return objEvents;
    };

    // A difficult-to-believe, but optimized internal dispatch function for
    // triggering events. Tries to keep the usual cases speedy (most internal
    // Backbone events have 3 arguments).
    var triggerEvents = function (events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
            case 0:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx);
                return;
            case 1:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);
                return;
            case 2:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);
                return;
            case 3:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                return;
            default:
                while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
                return;
        }
    };

    // Aliases for backwards compatibility.
    Events.bind = Events.on;
    Events.unbind = Events.off;

    // Allow the `Backbone` object to serve as a global event bus, for folks who
    // want global "pubsub" in a convenient place.
    _.extend(Backbone, Events);

    // Backbone.Model
    // --------------

    // Backbone **Models** are the basic data object in the framework --
    // frequently representing a row in a table in a database on your server.
    // A discrete chunk of data and a bunch of useful, related methods for
    // performing computations and transformations on that data.

    // Create a new model with the specified attributes. A client id (`cid`)
    // is automatically generated and assigned for you.
    var Model = Backbone.Model = function (attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId(this.cidPrefix);
        this.attributes = {};
        if (options.collection) this.collection = options.collection;
        if (options.parse) attrs = this.parse(attrs, options) || {};
        var defaults = _.result(this, 'defaults');
        attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
    };

    // Attach all inheritable methods to the Model prototype.
    _.extend(Model.prototype, Events, {

        // A hash of attributes whose current and previous value differ.
        changed: null,

        // The value returned during the last failed validation.
        validationError: null,

        // The default name for the JSON `id` attribute is `"id"`. MongoDB and
        // CouchDB users may want to set this to `"_id"`.
        idAttribute: 'id',

        // The prefix is used to create the client id which is used to identify models locally.
        // You may want to override this if you're experiencing name clashes with model ids.
        cidPrefix: 'c',

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // Return a copy of the model's `attributes` object.
        toJSON: function (options) {
            return _.clone(this.attributes);
        },

        // Proxy `Backbone.sync` by default -- but override this if you need
        // custom syncing semantics for *this* particular model.
        sync: function () {
            return Backbone.sync.apply(this, arguments);
        },

        // Get the value of an attribute.
        get: function (attr) {
            return this.attributes[attr];
        },

        // Get the HTML-escaped value of an attribute.
        escape: function (attr) {
            return _.escape(this.get(attr));
        },

        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has: function (attr) {
            return this.get(attr) != null;
        },

        // Special-cased proxy to underscore's `_.matches` method.
        matches: function (attrs) {
            return !!_.iteratee(attrs, this)(this.attributes);
        },

        // Set a hash of model attributes on the object, firing `"change"`. This is
        // the core primitive operation of a model, updating the data and notifying
        // anyone who needs to know about the change in state. The heart of the beast.
        set: function (key, val, options) {
            if (key == null) return this;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            var attrs;
            if (typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options || (options = {});

            // Run validation.
            if (!this._validate(attrs, options)) return false;

            // Extract attributes and options.
            var unset = options.unset;
            var silent = options.silent;
            var changes = [];
            var changing = this._changing;
            this._changing = true;

            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {};
            }

            var current = this.attributes;
            var changed = this.changed;
            var prev = this._previousAttributes;

            // For each `set` attribute, update or delete the current value.
            for (var attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val)) changes.push(attr);
                if (!_.isEqual(prev[attr], val)) {
                    changed[attr] = val;
                } else {
                    delete changed[attr];
                }
                unset ? delete current[attr] : current[attr] = val;
            }

            // Update the `id`.
            if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

            // Trigger all relevant attribute changes.
            if (!silent) {
                if (changes.length) this._pending = options;
                for (var i = 0; i < changes.length; i++) {
                    this.trigger('change:' + changes[i], this, current[changes[i]], options);
                }
            }

            // You might be wondering why there's a `while` loop here. Changes can
            // be recursively nested within `"change"` events.
            if (changing) return this;
            if (!silent) {
                while (this._pending) {
                    options = this._pending;
                    this._pending = false;
                    this.trigger('change', this, options);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },

        // Remove an attribute from the model, firing `"change"`. `unset` is a noop
        // if the attribute doesn't exist.
        unset: function (attr, options) {
            return this.set(attr, void 0, _.extend({}, options, {unset: true}));
        },

        // Clear all attributes on the model, firing `"change"`.
        clear: function (options) {
            var attrs = {};
            for (var key in this.attributes) attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {unset: true}));
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function (attr) {
            if (attr == null) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function (diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            var changed = {};
            for (var attr in diff) {
                var val = diff[attr];
                if (_.isEqual(old[attr], val)) continue;
                changed[attr] = val;
            }
            return _.size(changed) ? changed : false;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function (attr) {
            if (attr == null || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function () {
            return _.clone(this._previousAttributes);
        },

        // Fetch the model from the server, merging the response with the model's
        // local attributes. Any changed attributes will trigger a "change" event.
        fetch: function (options) {
            options = _.extend({parse: true}, options);
            var model = this;
            var success = options.success;
            options.success = function (resp) {
                var serverAttrs = options.parse ? model.parse(resp, options) : resp;
                if (!model.set(serverAttrs, options)) return false;
                if (success) success.call(options.context, model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save: function (key, val, options) {
            // Handle both `"key", value` and `{key: value}` -style arguments.
            var attrs;
            if (key == null || typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options = _.extend({validate: true, parse: true}, options);
            var wait = options.wait;

            // If we're not waiting and attributes exist, save acts as
            // `set(attr).save(null, opts)` with validation. Otherwise, check if
            // the model will be valid when the attributes, if any, are set.
            if (attrs && !wait) {
                if (!this.set(attrs, options)) return false;
            } else if (!this._validate(attrs, options)) {
                return false;
            }

            // After a successful server-side save, the client is (optionally)
            // updated with the server-side state.
            var model = this;
            var success = options.success;
            var attributes = this.attributes;
            options.success = function (resp) {
                // Ensure attributes are restored during synchronous saves.
                model.attributes = attributes;
                var serverAttrs = options.parse ? model.parse(resp, options) : resp;
                if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
                if (serverAttrs && !model.set(serverAttrs, options)) return false;
                if (success) success.call(options.context, model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);

            // Set temporary attributes if `{wait: true}` to properly find new ids.
            if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

            var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
            if (method === 'patch' && !options.attrs) options.attrs = attrs;
            var xhr = this.sync(method, this, options);

            // Restore attributes.
            this.attributes = attributes;

            return xhr;
        },

        // Destroy this model on the server if it was already persisted.
        // Optimistically removes the model from its collection, if it has one.
        // If `wait: true` is passed, waits for the server to respond before removal.
        destroy: function (options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            var wait = options.wait;

            var destroy = function () {
                model.stopListening();
                model.trigger('destroy', model, model.collection, options);
            };

            options.success = function (resp) {
                if (wait) destroy();
                if (success) success.call(options.context, model, resp, options);
                if (!model.isNew()) model.trigger('sync', model, resp, options);
            };

            var xhr = false;
            if (this.isNew()) {
                _.defer(options.success);
            } else {
                wrapError(this, options);
                xhr = this.sync('delete', this, options);
            }
            if (!wait) destroy();
            return xhr;
        },

        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url: function () {
            var base =
                _.result(this, 'urlRoot') ||
                _.result(this.collection, 'url') ||
                urlError();
            if (this.isNew()) return base;
            var id = this.get(this.idAttribute);
            return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse: function (resp, options) {
            return resp;
        },

        // Create a new model with identical attributes to this one.
        clone: function () {
            return new this.constructor(this.attributes);
        },

        // A model is new if it has never been saved to the server, and lacks an id.
        isNew: function () {
            return !this.has(this.idAttribute);
        },

        // Check if the model is currently in a valid state.
        isValid: function (options) {
            return this._validate({}, _.extend({}, options, {validate: true}));
        },

        // Run validation against the next complete set of model attributes,
        // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
        _validate: function (attrs, options) {
            if (!options.validate || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error) return true;
            this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
            return false;
        }

    });

    // Underscore methods that we want to implement on the Model, mapped to the
    // number of arguments they take.
    var modelMethods = {
        keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
        omit: 0, chain: 1, isEmpty: 1
    };

    // Mix in each Underscore method as a proxy to `Model#attributes`.
    addUnderscoreMethods(Model, modelMethods, 'attributes');

    // Backbone.Collection
    // -------------------

    // If models tend to represent a single row of data, a Backbone Collection is
    // more analogous to a table full of data ... or a small slice or page of that
    // table, or a collection of rows that belong together for a particular reason
    // -- all of the messages in this particular folder, all of the documents
    // belonging to this particular author, and so on. Collections maintain
    // indexes of their models, both in order, and for lookup by `id`.

    // Create a new **Collection**, perhaps to contain a specific type of `model`.
    // If a `comparator` is specified, the Collection will maintain
    // its models in sort order, as they're added and removed.
    var Collection = Backbone.Collection = function (models, options) {
        options || (options = {});
        if (options.model) this.model = options.model;
        if (options.comparator !== void 0) this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) this.reset(models, _.extend({silent: true}, options));
    };

    // Default options for `Collection#set`.
    var setOptions = {add: true, remove: true, merge: true};
    var addOptions = {add: true, remove: false};

    // Splices `insert` into `array` at index `at`.
    var splice = function (array, insert, at) {
        at = Math.min(Math.max(at, 0), array.length);
        var tail = Array(array.length - at);
        var length = insert.length;
        var i;
        for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
        for (i = 0; i < length; i++) array[i + at] = insert[i];
        for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
    };

    // Define the Collection's inheritable methods.
    _.extend(Collection.prototype, Events, {

        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model: Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function (options) {
            return this.map(function (model) {
                return model.toJSON(options);
            });
        },

        // Proxy `Backbone.sync` by default.
        sync: function () {
            return Backbone.sync.apply(this, arguments);
        },

        // Add a model, or list of models to the set. `models` may be Backbone
        // Models or raw JavaScript objects to be converted to Models, or any
        // combination of the two.
        add: function (models, options) {
            return this.set(models, _.extend({merge: false}, options, addOptions));
        },

        // Remove a model, or a list of models from the set.
        remove: function (models, options) {
            options = _.extend({}, options);
            var singular = !_.isArray(models);
            models = singular ? [models] : models.slice();
            var removed = this._removeModels(models, options);
            if (!options.silent && removed.length) {
                options.changes = {added: [], merged: [], removed: removed};
                this.trigger('update', this, options);
            }
            return singular ? removed[0] : removed;
        },

        // Update a collection by `set`-ing a new list of models, adding new ones,
        // removing models that are no longer present, and merging models that
        // already exist in the collection, as necessary. Similar to **Model#set**,
        // the core operation for updating the data contained by the collection.
        set: function (models, options) {
            if (models == null) return;

            options = _.extend({}, setOptions, options);
            if (options.parse && !this._isModel(models)) {
                models = this.parse(models, options) || [];
            }

            var singular = !_.isArray(models);
            models = singular ? [models] : models.slice();

            var at = options.at;
            if (at != null) at = +at;
            if (at > this.length) at = this.length;
            if (at < 0) at += this.length + 1;

            var set = [];
            var toAdd = [];
            var toMerge = [];
            var toRemove = [];
            var modelMap = {};

            var add = options.add;
            var merge = options.merge;
            var remove = options.remove;

            var sort = false;
            var sortable = this.comparator && at == null && options.sort !== false;
            var sortAttr = _.isString(this.comparator) ? this.comparator : null;

            // Turn bare objects into model references, and prevent invalid models
            // from being added.
            var model, i;
            for (i = 0; i < models.length; i++) {
                model = models[i];

                // If a duplicate is found, prevent it from being added and
                // optionally merge it into the existing model.
                var existing = this.get(model);
                if (existing) {
                    if (merge && model !== existing) {
                        var attrs = this._isModel(model) ? model.attributes : model;
                        if (options.parse) attrs = existing.parse(attrs, options);
                        existing.set(attrs, options);
                        toMerge.push(existing);
                        if (sortable && !sort) sort = existing.hasChanged(sortAttr);
                    }
                    if (!modelMap[existing.cid]) {
                        modelMap[existing.cid] = true;
                        set.push(existing);
                    }
                    models[i] = existing;

                    // If this is a new, valid model, push it to the `toAdd` list.
                } else if (add) {
                    model = models[i] = this._prepareModel(model, options);
                    if (model) {
                        toAdd.push(model);
                        this._addReference(model, options);
                        modelMap[model.cid] = true;
                        set.push(model);
                    }
                }
            }

            // Remove stale models.
            if (remove) {
                for (i = 0; i < this.length; i++) {
                    model = this.models[i];
                    if (!modelMap[model.cid]) toRemove.push(model);
                }
                if (toRemove.length) this._removeModels(toRemove, options);
            }

            // See if sorting is needed, update `length` and splice in new models.
            var orderChanged = false;
            var replace = !sortable && add && remove;
            if (set.length && replace) {
                orderChanged = this.length !== set.length || _.some(this.models, function (m, index) {
                    return m !== set[index];
                });
                this.models.length = 0;
                splice(this.models, set, 0);
                this.length = this.models.length;
            } else if (toAdd.length) {
                if (sortable) sort = true;
                splice(this.models, toAdd, at == null ? this.length : at);
                this.length = this.models.length;
            }

            // Silently sort the collection if appropriate.
            if (sort) this.sort({silent: true});

            // Unless silenced, it's time to fire all appropriate add/sort/update events.
            if (!options.silent) {
                for (i = 0; i < toAdd.length; i++) {
                    if (at != null) options.index = at + i;
                    model = toAdd[i];
                    model.trigger('add', model, this, options);
                }
                if (sort || orderChanged) this.trigger('sort', this, options);
                if (toAdd.length || toRemove.length || toMerge.length) {
                    options.changes = {
                        added: toAdd,
                        removed: toRemove,
                        merged: toMerge
                    };
                    this.trigger('update', this, options);
                }
            }

            // Return the added (or merged) model (or models).
            return singular ? models[0] : models;
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any granular `add` or `remove` events. Fires `reset` when finished.
        // Useful for bulk operations and optimizations.
        reset: function (models, options) {
            options = options ? _.clone(options) : {};
            for (var i = 0; i < this.models.length; i++) {
                this._removeReference(this.models[i], options);
            }
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({silent: true}, options));
            if (!options.silent) this.trigger('reset', this, options);
            return models;
        },

        // Add a model to the end of the collection.
        push: function (model, options) {
            return this.add(model, _.extend({at: this.length}, options));
        },

        // Remove a model from the end of the collection.
        pop: function (options) {
            var model = this.at(this.length - 1);
            return this.remove(model, options);
        },

        // Add a model to the beginning of the collection.
        unshift: function (model, options) {
            return this.add(model, _.extend({at: 0}, options));
        },

        // Remove a model from the beginning of the collection.
        shift: function (options) {
            var model = this.at(0);
            return this.remove(model, options);
        },

        // Slice out a sub-array of models from the collection.
        slice: function () {
            return slice.apply(this.models, arguments);
        },

        // Get a model from the set by id, cid, model object with id or cid
        // properties, or an attributes object that is transformed through modelId.
        get: function (obj) {
            if (obj == null) return void 0;
            return this._byId[obj] ||
                this._byId[this.modelId(obj.attributes || obj)] ||
                obj.cid && this._byId[obj.cid];
        },

        // Returns `true` if the model is in the collection.
        has: function (obj) {
            return this.get(obj) != null;
        },

        // Get the model at the given index.
        at: function (index) {
            if (index < 0) index += this.length;
            return this.models[index];
        },

        // Return models with matching attributes. Useful for simple cases of
        // `filter`.
        where: function (attrs, first) {
            return this[first ? 'find' : 'filter'](attrs);
        },

        // Return the first model with matching attributes. Useful for simple cases
        // of `find`.
        findWhere: function (attrs) {
            return this.where(attrs, true);
        },

        // Force the collection to re-sort itself. You don't need to call this under
        // normal circumstances, as the set will maintain sort order as each item
        // is added.
        sort: function (options) {
            var comparator = this.comparator;
            if (!comparator) throw new Error('Cannot sort a set without a comparator');
            options || (options = {});

            var length = comparator.length;
            if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

            // Run sort based on type of `comparator`.
            if (length === 1 || _.isString(comparator)) {
                this.models = this.sortBy(comparator);
            } else {
                this.models.sort(comparator);
            }
            if (!options.silent) this.trigger('sort', this, options);
            return this;
        },

        // Pluck an attribute from each model in the collection.
        pluck: function (attr) {
            return this.map(attr + '');
        },

        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `reset: true` is passed, the response
        // data will be passed through the `reset` method instead of `set`.
        fetch: function (options) {
            options = _.extend({parse: true}, options);
            var success = options.success;
            var collection = this;
            options.success = function (resp) {
                var method = options.reset ? 'reset' : 'set';
                collection[method](resp, options);
                if (success) success.call(options.context, collection, resp, options);
                collection.trigger('sync', collection, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },

        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create: function (model, options) {
            options = options ? _.clone(options) : {};
            var wait = options.wait;
            model = this._prepareModel(model, options);
            if (!model) return false;
            if (!wait) this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function (m, resp, callbackOpts) {
                if (wait) collection.add(m, callbackOpts);
                if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
            };
            model.save(null, options);
            return model;
        },

        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse: function (resp, options) {
            return resp;
        },

        // Create a new collection with an identical list of models as this one.
        clone: function () {
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            });
        },

        // Define how to uniquely identify models in the collection.
        modelId: function (attrs) {
            return attrs[this.model.prototype.idAttribute || 'id'];
        },

        // Private method to reset all internal state. Called when the collection
        // is first initialized or reset.
        _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId = {};
        },

        // Prepare a hash of attributes (or other model) to be added to this
        // collection.
        _prepareModel: function (attrs, options) {
            if (this._isModel(attrs)) {
                if (!attrs.collection) attrs.collection = this;
                return attrs;
            }
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError) return model;
            this.trigger('invalid', this, model.validationError, options);
            return false;
        },

        // Internal method called by both remove and set.
        _removeModels: function (models, options) {
            var removed = [];
            for (var i = 0; i < models.length; i++) {
                var model = this.get(models[i]);
                if (!model) continue;

                var index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;

                // Remove references before triggering 'remove' event to prevent an
                // infinite loop. #3693
                delete this._byId[model.cid];
                var id = this.modelId(model.attributes);
                if (id != null) delete this._byId[id];

                if (!options.silent) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }

                removed.push(model);
                this._removeReference(model, options);
            }
            return removed;
        },

        // Method for checking whether an object should be considered a model for
        // the purposes of adding to the collection.
        _isModel: function (model) {
            return model instanceof Model;
        },

        // Internal method to create a model's ties to a collection.
        _addReference: function (model, options) {
            this._byId[model.cid] = model;
            var id = this.modelId(model.attributes);
            if (id != null) this._byId[id] = model;
            model.on('all', this._onModelEvent, this);
        },

        // Internal method to sever a model's ties to a collection.
        _removeReference: function (model, options) {
            delete this._byId[model.cid];
            var id = this.modelId(model.attributes);
            if (id != null) delete this._byId[id];
            if (this === model.collection) delete model.collection;
            model.off('all', this._onModelEvent, this);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent: function (event, model, collection, options) {
            if (model) {
                if ((event === 'add' || event === 'remove') && collection !== this) return;
                if (event === 'destroy') this.remove(model, options);
                if (event === 'change') {
                    var prevId = this.modelId(model.previousAttributes());
                    var id = this.modelId(model.attributes);
                    if (prevId !== id) {
                        if (prevId != null) delete this._byId[prevId];
                        if (id != null) this._byId[id] = model;
                    }
                }
            }
            this.trigger.apply(this, arguments);
        }

    });

    // Underscore methods that we want to implement on the Collection.
    // 90% of the core usefulness of Backbone Collections is actually implemented
    // right here:
    var collectionMethods = {
        forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
        foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
        select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
        contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
        head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
        without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
        isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
        sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3
    };

    // Mix in each Underscore method as a proxy to `Collection#models`.
    addUnderscoreMethods(Collection, collectionMethods, 'models');

    // Backbone.View
    // -------------

    // Backbone Views are almost more convention than they are actual code. A View
    // is simply a JavaScript object that represents a logical chunk of UI in the
    // DOM. This might be a single item, an entire list, a sidebar or panel, or
    // even the surrounding frame which wraps your whole app. Defining a chunk of
    // UI as a **View** allows you to define your DOM events declaratively, without
    // having to worry about render order ... and makes it easy for the view to
    // react to specific changes in the state of your models.

    // Creating a Backbone.View creates its initial element outside of the DOM,
    // if an existing element is not provided...
    var View = Backbone.View = function (options) {
        this.cid = _.uniqueId('view');
        _.extend(this, _.pick(options, viewOptions));
        this._ensureElement();
        this.initialize.apply(this, arguments);
    };

    // Cached regex to split keys for `delegate`.
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be set as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(View.prototype, Events, {

        // The default `tagName` of a View's element is `"div"`.
        tagName: 'div',

        // jQuery delegate for element lookup, scoped to DOM elements within the
        // current view. This should be preferred to global lookups where possible.
        $: function (selector) {
            return this.$el.find(selector);
        },

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render: function () {
            return this;
        },

        // Remove this view by taking the element out of the DOM, and removing any
        // applicable Backbone.Events listeners.
        remove: function () {
            this._removeElement();
            this.stopListening();
            return this;
        },

        // Remove this view's element from the document and all event listeners
        // attached to it. Exposed for subclasses using an alternative DOM
        // manipulation API.
        _removeElement: function () {
            this.$el.remove();
        },

        // Change the view's element (`this.el` property) and re-delegate the
        // view's events on the new element.
        setElement: function (element) {
            this.undelegateEvents();
            this._setElement(element);
            this.delegateEvents();
            return this;
        },

        // Creates the `this.el` and `this.$el` references for this view using the
        // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
        // context or an element. Subclasses can override this to utilize an
        // alternative DOM manipulation API and are only required to set the
        // `this.el` property.
        _setElement: function (el) {
            this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
            this.el = this.$el[0];
        },

        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save',
        //       'click .open':       function(e) { ... }
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        delegateEvents: function (events) {
            events || (events = _.result(this, 'events'));
            if (!events) return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[method];
                if (!method) continue;
                var match = key.match(delegateEventSplitter);
                this.delegate(match[1], match[2], _.bind(method, this));
            }
            return this;
        },

        // Add a single event listener to the view's element (or a child element
        // using `selector`). This only works for delegate-able events: not `focus`,
        // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
        delegate: function (eventName, selector, listener) {
            this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
            return this;
        },

        // Clears all callbacks previously bound to the view by `delegateEvents`.
        // You usually don't need to use this, but may wish to if you have multiple
        // Backbone views attached to the same DOM element.
        undelegateEvents: function () {
            if (this.$el) this.$el.off('.delegateEvents' + this.cid);
            return this;
        },

        // A finer-grained `undelegateEvents` for removing a single delegated event.
        // `selector` and `listener` are both optional.
        undelegate: function (eventName, selector, listener) {
            this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
            return this;
        },

        // Produces a DOM element to be assigned to your view. Exposed for
        // subclasses using an alternative DOM manipulation API.
        _createElement: function (tagName) {
            return document.createElement(tagName);
        },

        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement: function () {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, 'attributes'));
                if (this.id) attrs.id = _.result(this, 'id');
                if (this.className) attrs['class'] = _.result(this, 'className');
                this.setElement(this._createElement(_.result(this, 'tagName')));
                this._setAttributes(attrs);
            } else {
                this.setElement(_.result(this, 'el'));
            }
        },

        // Set attributes from a hash on this view's element.  Exposed for
        // subclasses using an alternative DOM manipulation API.
        _setAttributes: function (attributes) {
            this.$el.attr(attributes);
        }

    });

    // Backbone.sync
    // -------------

    // Override this function to change the manner in which Backbone persists
    // models to the server. You will be passed the type of request, and the
    // model in question. By default, makes a RESTful Ajax request
    // to the model's `url()`. Some possible customizations could be:
    //
    // * Use `setTimeout` to batch rapid-fire updates into a single request.
    // * Send up the models as XML instead of JSON.
    // * Persist models via WebSockets instead of Ajax.
    //
    // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
    // as `POST`, with a `_method` parameter containing the true HTTP method,
    // as well as all requests with the body as `application/x-www-form-urlencoded`
    // instead of `application/json` with the model in a param named `model`.
    // Useful when interfacing with server-side languages like **PHP** that make
    // it difficult to read the body of `PUT` requests.
    Backbone.sync = function (method, model, options) {
        var type = methodMap[method];

        // Default options, unless specified.
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });

        // Default JSON-request options.
        var params = {type: type, dataType: 'json'};

        // Ensure that we have a URL.
        if (!options.url) {
            params.url = _.result(model, 'url') || urlError();
        }

        // Ensure that we have the appropriate request data.
        if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(options.attrs || model.toJSON(options));
        }

        // For older servers, emulate JSON by encoding the request into an HTML-form.
        if (options.emulateJSON) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? {model: params.data} : {};
        }

        // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
        // And an `X-HTTP-Method-Override` header.
        if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
            params.type = 'POST';
            if (options.emulateJSON) params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function (xhr) {
                xhr.setRequestHeader('X-HTTP-Method-Override', type);
                if (beforeSend) return beforeSend.apply(this, arguments);
            };
        }

        // Don't process data on a non-GET request.
        if (params.type !== 'GET' && !options.emulateJSON) {
            params.processData = false;
        }

        // Pass along `textStatus` and `errorThrown` from jQuery.
        var error = options.error;
        options.error = function (xhr, textStatus, errorThrown) {
            options.textStatus = textStatus;
            options.errorThrown = errorThrown;
            if (error) error.call(options.context, xhr, textStatus, errorThrown);
        };

        // Make the request, allowing the user to override any Ajax options.
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger('request', model, xhr, options);
        return xhr;
    };

    // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'patch': 'PATCH',
        'delete': 'DELETE',
        'read': 'GET'
    };

    // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
    // Override this if you'd like to use a different library.
    Backbone.ajax = function () {
        return Backbone.$.ajax.apply(Backbone.$, arguments);
    };

    // Backbone.Router
    // ---------------

    // Routers map faux-URLs to actions, and fire events when routes are
    // matched. Creating a new one sets its `routes` hash, if not set statically.
    var Router = Backbone.Router = function (options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

    // Set up all inheritable **Backbone.Router** properties and methods.
    _.extend(Router.prototype, Events, {

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // Manually bind a single named route to a callback. For example:
        //
        //     this.route('search/:query/p:num', 'search', function(query, num) {
        //       ...
        //     });
        //
        route: function (route, name, callback) {
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (_.isFunction(name)) {
                callback = name;
                name = '';
            }
            if (!callback) callback = this[name];
            var router = this;
            Backbone.history.route(route, function (fragment) {
                var args = router._extractParameters(route, fragment);
                if (router.execute(callback, args, name) !== false) {
                    router.trigger.apply(router, ['route:' + name].concat(args));
                    router.trigger('route', name, args);
                    Backbone.history.trigger('route', router, name, args);
                }
            });
            return this;
        },

        // Execute a route handler with the provided parameters.  This is an
        // excellent place to do pre-route setup or post-route cleanup.
        execute: function (callback, args, name) {
            if (callback) callback.apply(this, args);
        },

        // Simple proxy to `Backbone.history` to save a fragment into the history.
        navigate: function (fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this;
        },

        // Bind all defined routes to `Backbone.history`. We have to reverse the
        // order of the routes here to support behavior where the most general
        // routes can be defined at the bottom of the route map.
        _bindRoutes: function () {
            if (!this.routes) return;
            this.routes = _.result(this, 'routes');
            var route, routes = _.keys(this.routes);
            while ((route = routes.pop()) != null) {
                this.route(route, this.routes[route]);
            }
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        _routeToRegExp: function (route) {
            route = route.replace(escapeRegExp, '\\$&')
                .replace(optionalParam, '(?:$1)?')
                .replace(namedParam, function (match, optional) {
                    return optional ? match : '([^/?]+)';
                })
                .replace(splatParam, '([^?]*?)');
            return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted decoded parameters. Empty or unmatched parameters will be
        // treated as `null` to normalize cross-browser behavior.
        _extractParameters: function (route, fragment) {
            var params = route.exec(fragment).slice(1);
            return _.map(params, function (param, i) {
                // Don't decode the search params.
                if (i === params.length - 1) return param || null;
                return param ? decodeURIComponent(param) : null;
            });
        }

    });

    // Backbone.History
    // ----------------

    // Handles cross-browser history management, based on either
    // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
    // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
    // and URL fragments. If the browser supports neither (old IE, natch),
    // falls back to polling.
    var History = Backbone.History = function () {
        this.handlers = [];
        this.checkUrl = _.bind(this.checkUrl, this);

        // Ensure that `History` can be used outside of the browser.
        if (typeof window !== 'undefined') {
            this.location = window.location;
            this.history = window.history;
        }
    };

    // Cached regex for stripping a leading hash/slash and trailing space.
    var routeStripper = /^[#\/]|\s+$/g;

    // Cached regex for stripping leading and trailing slashes.
    var rootStripper = /^\/+|\/+$/g;

    // Cached regex for stripping urls of hash.
    var pathStripper = /#.*$/;

    // Has the history handling already been started?
    History.started = false;

    // Set up all inheritable **Backbone.History** properties and methods.
    _.extend(History.prototype, Events, {

        // The default interval to poll for hash changes, if necessary, is
        // twenty times a second.
        interval: 50,

        // Are we at the app root?
        atRoot: function () {
            var path = this.location.pathname.replace(/[^\/]$/, '$&/');
            return path === this.root && !this.getSearch();
        },

        // Does the pathname match the root?
        matchRoot: function () {
            var path = this.decodeFragment(this.location.pathname);
            var rootPath = path.slice(0, this.root.length - 1) + '/';
            return rootPath === this.root;
        },

        // Unicode characters in `location.pathname` are percent encoded so they're
        // decoded for comparison. `%25` should not be decoded since it may be part
        // of an encoded parameter.
        decodeFragment: function (fragment) {
            return decodeURI(fragment.replace(/%25/g, '%2525'));
        },

        // In IE6, the hash fragment and search params are incorrect if the
        // fragment contains `?`.
        getSearch: function () {
            var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
            return match ? match[0] : '';
        },

        // Gets the true hash value. Cannot use location.hash directly due to bug
        // in Firefox where location.hash will always be decoded.
        getHash: function (window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : '';
        },

        // Get the pathname and search params, without the root.
        getPath: function () {
            var path = this.decodeFragment(
                this.location.pathname + this.getSearch()
            ).slice(this.root.length - 1);
            return path.charAt(0) === '/' ? path.slice(1) : path;
        },

        // Get the cross-browser normalized URL fragment from the path or hash.
        getFragment: function (fragment) {
            if (fragment == null) {
                if (this._usePushState || !this._wantsHashChange) {
                    fragment = this.getPath();
                } else {
                    fragment = this.getHash();
                }
            }
            return fragment.replace(routeStripper, '');
        },

        // Start the hash change handling, returning `true` if the current URL matches
        // an existing route, and `false` otherwise.
        start: function (options) {
            if (History.started) throw new Error('Backbone.history has already been started');
            History.started = true;

            // Figure out the initial configuration. Do we need an iframe?
            // Is pushState desired ... is it available?
            this.options = _.extend({root: '/'}, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
            this._useHashChange = this._wantsHashChange && this._hasHashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.history && this.history.pushState);
            this._usePushState = this._wantsPushState && this._hasPushState;
            this.fragment = this.getFragment();

            // Normalize root to always include a leading and trailing slash.
            this.root = ('/' + this.root + '/').replace(rootStripper, '/');

            // Transition from hashChange to pushState or vice versa if both are
            // requested.
            if (this._wantsHashChange && this._wantsPushState) {

                // If we've started off with a route from a `pushState`-enabled
                // browser, but we're currently in a browser that doesn't support it...
                if (!this._hasPushState && !this.atRoot()) {
                    var rootPath = this.root.slice(0, -1) || '/';
                    this.location.replace(rootPath + '#' + this.getPath());
                    // Return immediately as browser will do redirect to new url
                    return true;

                    // Or if we've started out with a hash-based route, but we're currently
                    // in a browser where it could be `pushState`-based instead...
                } else if (this._hasPushState && this.atRoot()) {
                    this.navigate(this.getHash(), {replace: true});
                }

            }

            // Proxy an iframe to handle location events if the browser doesn't
            // support the `hashchange` event, HTML5 history, or the user wants
            // `hashChange` but not `pushState`.
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement('iframe');
                this.iframe.src = 'javascript:0';
                this.iframe.style.display = 'none';
                this.iframe.tabIndex = -1;
                var body = document.body;
                // Using `appendChild` will throw on IE < 9 if the document is not ready.
                var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
                iWindow.document.open();
                iWindow.document.close();
                iWindow.location.hash = '#' + this.fragment;
            }

            // Add a cross-platform `addEventListener` shim for older browsers.
            var addEventListener = window.addEventListener || function (eventName, listener) {
                return attachEvent('on' + eventName, listener);
            };

            // Depending on whether we're using pushState or hashes, and whether
            // 'onhashchange' is supported, determine how we check the URL state.
            if (this._usePushState) {
                addEventListener('popstate', this.checkUrl, false);
            } else if (this._useHashChange && !this.iframe) {
                addEventListener('hashchange', this.checkUrl, false);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }

            if (!this.options.silent) return this.loadUrl();
        },

        // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
        // but possibly useful for unit testing Routers.
        stop: function () {
            // Add a cross-platform `removeEventListener` shim for older browsers.
            var removeEventListener = window.removeEventListener || function (eventName, listener) {
                return detachEvent('on' + eventName, listener);
            };

            // Remove window listeners.
            if (this._usePushState) {
                removeEventListener('popstate', this.checkUrl, false);
            } else if (this._useHashChange && !this.iframe) {
                removeEventListener('hashchange', this.checkUrl, false);
            }

            // Clean up the iframe if necessary.
            if (this.iframe) {
                document.body.removeChild(this.iframe);
                this.iframe = null;
            }

            // Some environments will throw when clearing an undefined interval.
            if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
            History.started = false;
        },

        // Add a route to be tested when the fragment changes. Routes added later
        // may override previous routes.
        route: function (route, callback) {
            this.handlers.unshift({route: route, callback: callback});
        },

        // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        checkUrl: function (e) {
            var current = this.getFragment();

            // If the user pressed the back button, the iframe's hash will have
            // changed and we should use that for comparison.
            if (current === this.fragment && this.iframe) {
                current = this.getHash(this.iframe.contentWindow);
            }

            if (current === this.fragment) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl();
        },

        // Attempt to load the current URL fragment. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the fragment,
        // returns `false`.
        loadUrl: function (fragment) {
            // If the root doesn't match, no routes can match either.
            if (!this.matchRoot()) return false;
            fragment = this.fragment = this.getFragment(fragment);
            return _.some(this.handlers, function (handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
        },

        // Save a fragment into the hash history, or replace the URL state if the
        // 'replace' option is passed. You are responsible for properly URL-encoding
        // the fragment in advance.
        //
        // The options object can contain `trigger: true` if you wish to have the
        // route callback be fired (not usually desirable), or `replace: true`, if
        // you wish to modify the current URL without adding an entry to the history.
        navigate: function (fragment, options) {
            if (!History.started) return false;
            if (!options || options === true) options = {trigger: !!options};

            // Normalize the fragment.
            fragment = this.getFragment(fragment || '');

            // Don't include a trailing slash on the root.
            var rootPath = this.root;
            if (fragment === '' || fragment.charAt(0) === '?') {
                rootPath = rootPath.slice(0, -1) || '/';
            }
            var url = rootPath + fragment;

            // Strip the hash and decode for matching.
            fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

            if (this.fragment === fragment) return;
            this.fragment = fragment;

            // If pushState is available, we use it to set the fragment as a real URL.
            if (this._usePushState) {
                this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

                // If hash changes haven't been explicitly disabled, update the hash
                // fragment to store history.
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, fragment, options.replace);
                if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
                    var iWindow = this.iframe.contentWindow;

                    // Opening and closing the iframe tricks IE7 and earlier to push a
                    // history entry on hash-tag change.  When replace is true, we don't
                    // want this.
                    if (!options.replace) {
                        iWindow.document.open();
                        iWindow.document.close();
                    }

                    this._updateHash(iWindow.location, fragment, options.replace);
                }

                // If you've told us that you explicitly don't want fallback hashchange-
                // based history, then `navigate` becomes a page refresh.
            } else {
                return this.location.assign(url);
            }
            if (options.trigger) return this.loadUrl(fragment);
        },

        // Update the hash location, either replacing the current entry, or adding
        // a new one to the browser history.
        _updateHash: function (location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, '');
                location.replace(href + '#' + fragment);
            } else {
                // Some browsers require that `hash` contains a leading #.
                location.hash = '#' + fragment;
            }
        }

    });

    // Create the default Backbone.history.
    Backbone.history = new History;

    // Helpers
    // -------

    // Helper function to correctly set up the prototype chain for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var extend = function (protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent constructor.
        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function () {
                return parent.apply(this, arguments);
            };
        }

        // Add static properties to the constructor function, if supplied.
        _.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function and add the prototype properties.
        child.prototype = _.create(parent.prototype, protoProps);
        child.prototype.constructor = child;

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Set up inheritance for the model, collection, router, view and history.
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function () {
        throw new Error('A "url" property or function must be specified');
    };

    // Wrap an optional error callback with a fallback error event.
    var wrapError = function (model, options) {
        var error = options.error;
        options.error = function (resp) {
            if (error) error.call(options.context, model, resp, options);
            model.trigger('error', model, resp, options);
        };
    };

    return Backbone;
});
// Backbone.ContainerView
// (c) 2014 Greg MacWilliam
// Freely distributed under the MIT license
(function (root, factory) {

    if (typeof exports !== 'undefined') {
        module.exports = factory(require('backbone'), require('underscore'));
    } else if (typeof define === 'function' && define.amd) {
        define(['backbone', 'underscore'], factory);
    } else {
        factory(root.Backbone, root._);
    }

}(this, function (Backbone, _) {

    var $ = Backbone.$;
    var ViewPrototype = Backbone.View.prototype;
    var ALL = '*';

    function isView(view, error) {
        if (view instanceof Backbone.View) return true;
        if (error) throw ('Not a View instance');
        return false;
    }

    function resolveViewSelector(view, selector) {
        if (!selector) return view.$el;
        if (selector instanceof $) return selector;
        return view.$(selector);
    }

    // ContainerView
    // --------------------------
    var ContainerView = Backbone.ContainerView = Backbone.View.extend({
        contentView: null,
        contentModels: null,

        // Subviews list accessor:
        // Creates a managed subview array if one does not yet exist.
        // Subviews list should always be accessed through this method.
        _sv: function (subviews) {
            if (subviews && _.isArray(subviews)) this.__sv = subviews;
            if (!this.__sv) this.__sv = [];
            return this.__sv;
        },

        // Adds a managed subview to the container:
        addSubview: function (views) {
            views = _.isArray(views) ? views : Array.prototype.slice.call(arguments);

            var added = _.filter(views, function (view) {
                if (isView(view, true) && view !== this) {
                    this._sv().push(view);
                    return true;
                }
            }, this);

            if (!added.length) return this;
            return added.length == 1 ? added[0] : added;
        },

        // Finds and removes a managed subview or view selector:
        // accepts a View object reference or selector string.
        releaseSubviews: function (view, options) {
            options = options || {};
            var selector = view;
            var subviews = this._sv();
            var revised = subviews;
            var remove = options.remove;

            if (selector === ALL) {
                // Releases all subview references:
                if (remove) _.invoke(subviews, 'remove');
                revised.length = 0;

            } else if (isView(view)) {
                // Removes a single View instance:
                if (remove) view.remove();
                revised = _.without(subviews, view);

            } else {
                // Removes all subviews that match the provided selector:
                revised = _.reject(subviews, function (view) {
                    if (view.$el.is(selector)) {
                        if (remove) view.remove();
                        return true;
                    }
                });
            }

            this._sv(revised);
            return this;
        },

        // Convenience method for releasing AND removing subviews:
        removeSubviews: function (view, options) {
            options = options || {};
            options.remove = true;
            return this.releaseSubviews(view, options);
        },

        // Specifies the number of subviews currently managed by the container:
        numSubviews: function () {
            return this._sv().length;
        },

        // Creates a new managed container view within the view:
        createSubcontainer: function (selector) {
            var $container = resolveViewSelector(this, selector);
            if (!$container.is(this.$el)) {
                return this.addSubview(ContainerView.create($container));
            }
            return this;
        },

        // Filter method used while rendering model lists:
        contentFilter: function (model) {
            return true;
        },

        // Sort method used while rendering model lists:
        contentSort: null,

        // Renders the current model/view content configuration:
        renderContent: function () {
            var subviews = [];
            var contentView = this.contentView;
            var contentModels = this.contentModels;
            var content = document.createDocumentFragment();

            // Render view constructor with models list:
            if (_.isFunction(contentView) && _.isArray(contentModels)) {

                // Sort models array when a sort method is defined:
                if (_.isFunction(this.contentSort)) {
                    contentModels = contentModels.slice();
                    contentModels.sort(_.bind(this.contentSort, this));
                }

                // Loop through collection and render all models that pass the filter:
                _.each(contentModels, function (model, index) {
                    if (this.contentFilter(model, index)) {
                        var view = new contentView({
                            model: model
                        });
                        subviews.push(view);
                        view.render();
                        content.appendChild(view.el);
                    }
                }, this);

                // Render single view:
            } else if (isView(contentView)) {
                contentView.render();
                subviews.push(contentView);
                content.appendChild(contentView.el);
            }

            // Replace container content, then cleanup old views and cache new subviews:
            this.$el.html(content);
            this.removeSubviews(ALL);
            this._sv(subviews);
            return this;
        },

        // Opens a single view, or a view constructor with a collection of models:
        open: function (view, models) {
            // Convert collection/model instances to an array:
            if (models instanceof Backbone.Collection) models = models.models;
            else if (models instanceof Backbone.Model) models = [models];

            this.contentModels = _.isArray(models) ? models : null;
            this.contentView = (_.isFunction(view) || isView(view, true)) ? view : null;
            return this.renderContent();
        },

        // Closes the region by emptying the display and releasing all content references:
        // The region is still usable for presenting content after calling "close".
        close: function () {
            this.$el.empty();
            this.removeSubviews(ALL);
            this.contentView = this.contentModels = null;
            return this;
        },

        // Adds a one-off view onto the end of the list:
        append: function (view, selector) {
            view = this.addSubview(view);
            view.render();
            resolveViewSelector(this, selector).append(view.$el);
            return this;
        },

        // Inserts a subview by replacing the targeted selector element:
        swapIn: function (view, selector) {
            if (!selector) {
                return this.append(view, selector);
            }

            view = this.addSubview(view);
            view.render();
            resolveViewSelector(this, selector).replaceWith(view.$el);
            return this;
        },

        // Removes the view by emptying, releasing all content, and orphaning the container:
        // The region is no longer usable after being removed.
        remove: function () {
            var result = ViewPrototype.remove.apply(this, arguments);
            this.close();
            return result;
        }

        // STATIC API:
    }, {
        // Convenience method for creating a new container view:
        create: function (selector) {
            return new ContainerView({
                el: selector
            });
        },

        // Installs ContainerView methods globally onto Backbone.View:
        install: function (enable) {
            Backbone.View.prototype = (enable !== false) ?
                _.extend({}, ViewPrototype, ContainerView.prototype) : ViewPrototype;
        }
    });

    return ContainerView;
}));
/*!
 * Backbone.GoogleMaps
 * A Backbone JS layer for the GoogleMaps API
 * Copyright (c)2012 Edan Schwartz
 * Distributed under MIT license
 * https://github.com/eschwartz/backbone.googlemaps
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['backbone', 'underscore', 'jquery'], factory);
    }
    else {
        // Browser globals
        factory(root.Backbone, root._, root.jQuery || root.Zepto || root.ender);
    }
}(this, function (Backbone, _, $) {

    'use strict';

    var GoogleMaps = {};

    /**
     * GoogleMaps.Location
     * --------------------
     * Representing a lat/lng location on a map
     */
    GoogleMaps.Location = Backbone.Model.extend({
        constructor: function () {
            _.bindAll(this, 'select', 'deselect', 'toggleSelect', 'getLatLng', 'getLatlng');

            this.defaults = _.extend({}, {
                lat: 0,
                lng: 0,
                selected: false,
                title: ""
            }, this.defaults);

            Backbone.Model.prototype.constructor.apply(this, arguments);

            // Trigger 'selected' and 'deselected' events
            this.on("change:selected", function (model, isSelected) {
                var topic = isSelected ? "selected" : "deselected";
                this.trigger(topic, this);
            }, this);
        },

        select: function () {
            this.set("selected", true);
        },

        deselect: function () {
            this.set("selected", false);
        },

        toggleSelect: function () {
            this.set("selected", !this.get("selected"));
        },

        getLatlng: function () {
            return this.getLatLng();
        },

        getLatLng: function () {
            return new google.maps.LatLng(this.get("lat"), this.get("lng"));
        }
    });

    /**
     * GoogleMaps.LocationCollection
     * ------------------------------
     * A collection of map locations
     */
    GoogleMaps.LocationCollection = Backbone.Collection.extend({
        constructor: function (opt_models, opt_options) {
            var options = _.defaults({}, opt_options, {
                model: GoogleMaps.Location
            });

            // Set default model
            options.model || (options.model = GoogleMaps.Location);

            Backbone.Collection.prototype.constructor.call(this, opt_models, options);

            // Deselect other models on model select
            // ie. Only a single model can be selected in a collection
            this.on("change:selected", function (selectedModel, isSelected) {
                if (isSelected) {
                    this.each(function (model) {
                        if (selectedModel.cid !== model.cid) {
                            model.deselect();
                        }
                    });
                }
            }, this);
        }
    });


    /**
     * GoogleMaps.MapView
     * ------------------
     * Base maps overlay view from which all other overlay views extend
     */
    GoogleMaps.MapView = Backbone.View.extend({
        constructor: function (options) {
            _.bindAll(this, 'render', 'close');

            // Hash of Google Map events
            // Events will be attached to this.gOverlay (google map or overlay)
            // eg `zoom_changed': 'handleZoomChange'
            this.mapEvents = this.mapEvents || {};

            this.overlayOptions = this.overlayOptions || {};

            Backbone.View.prototype.constructor.apply(this, arguments);

            this.options = options;

            // Ensure map and API loaded
            if (!google || !google.maps) throw new Error("Google maps API is not loaded.");
            if (!this.options.map && !this.map) throw new Error("A map must be specified.");
            this.gOverlay = this.map = this.options.map || this.map;

            // Add overlayOptions from ctor options
            // to this.overlayOptions
            _.extend(this.overlayOptions, this.options.overlayOptions);
        },

        // Attach listeners to the this.gOverlay
        // From the `mapEvents` hash
        bindMapEvents: function (mapEvents, opt_context) {
            var context = opt_context || this;

            mapEvents || (mapEvents = this.mapEvents);

            _.each(mapEvents, function (handlerRef, topic) {
                var handler = this._getHandlerFromReference(handlerRef);
                this._addGoogleMapsListener(topic, handler, context);
            }, this);
        },

        // handlerRef can be a named method of the view (string)
        // or a refernce to any function.
        _getHandlerFromReference: function (handlerRef) {
            var handler = _.isString(handlerRef) ? this[handlerRef] : handlerRef;

            if (!_.isFunction(handler)) {
                throw new Error("Unable to bind map event. " + handlerRef +
                    " is not a valid event handler method");
            }

            return handler;
        },

        _addGoogleMapsListener: function (topic, handler, opt_context) {
            if (opt_context) {
                handler = _.bind(handler, opt_context);
            }

            google.maps.event.addListener(this.gOverlay, topic, handler);
        },

        render: function () {
            this.trigger('before:render');
            if (this.beforeRender) {
                this.beforeRender();
            }
            this.bindMapEvents();

            this.trigger('render');
            if (this.onRender) {
                this.onRender();
            }

            return this;
        },

        // Clean up view
        // Remove overlay from map and remove event listeners
        close: function () {
            this.trigger('before:close');
            if (this.beforeClose) {
                this.beforeClose();
            }

            google.maps.event.clearInstanceListeners(this.gOverlay);
            if (this.gOverlay.setMap) {
                this.gOverlay.setMap(null);
            }
            this.gOverlay = null;

            this.trigger('close');
            if (this.onClose) {
                this.onClose();
            }
        }
    });

    /**
     * GoogleMaps.InfoWindow
     * ---------------------
     * View controller for a google.maps.InfoWindow overlay instance
     */
    GoogleMaps.InfoWindow = GoogleMaps.MapView.extend({
        constructor: function () {
            GoogleMaps.MapView.prototype.constructor.apply(this, arguments);

            _.bindAll(this, 'render', 'close');

            // Require a related marker instance
            if (!this.options.marker && !this.marker) throw new Error("A marker must be specified for InfoWindow view.");
            this.marker = this.options.marker || this.marker;

            // Set InfoWindow template
            this.template = this.template || this.options.template;

        },

        // Render
        render: function () {
            this.trigger('before:render');
            if (this.beforeRender) {
                this.beforeRender();
            }

            GoogleMaps.MapView.prototype.render.apply(this, arguments);

            // Render element
            var tmpl = (this.template) ? $(this.template).html() : '<h2><%=title %></h2>';
            this.$el.html(_.template(tmpl, this.model.toJSON()));

            // Create InfoWindow
            this.gOverlay = new google.maps.InfoWindow(_.extend({
                content: this.$el[0]
            }, this.overlayOptions));

            // Display InfoWindow on map
            this.gOverlay.open(this.map, this.marker);

            this.trigger('render');
            if (this.onRender) {
                this.onRender();
            }

            return this;
        },

        // Close and delete window, and clean up view
        close: function () {
            this.trigger('before:close');
            if (this.beforeClose) {
                this.beforeClose();
            }

            GoogleMaps.MapView.prototype.close.apply(this, arguments);

            this.trigger('close');
            if (this.onClose) {
                this.onClose();
            }

            return this;
        }
    });


    /**
     * GoogleMaps.MarkerView
     * ---------------------
     * View controller for a marker overlay
     */
    GoogleMaps.MarkerView = GoogleMaps.MapView.extend({
        constructor: function () {
            // Set associated InfoWindow view
            this.infoWindow = this.infoWindow || GoogleMaps.InfoWindow;

            GoogleMaps.MapView.prototype.constructor.apply(this, arguments);

            _.bindAll(this, 'render', 'close', 'openDetail', 'closeDetail', 'toggleSelect');

            // Ensure model
            if (!this.model) throw new Error("A model must be specified for a MarkerView");

            // Instantiate marker, with user defined properties
            this.gOverlay = new google.maps.Marker(_.extend({
                position: this.model.getLatLng(),
                map: this.map,
                title: this.model.title,
                animation: google.maps.Animation.DROP,
                visible: false										// hide, until render
            }, this.overlayOptions));

            // Add default mapEvents
            _.extend(this.mapEvents, {
                'click': 'toggleSelect'							// Select model on marker click
            });

            // Show detail view on model select
            this.model.on("change:selected", function (model, isSelected) {
                if (isSelected) {
                    this.openDetail();
                }
                else {
                    this.closeDetail();
                }
            }, this);
            this.model.on("change:lat change:lng", this.refreshOverlay, this);

            // Sync location model lat/lng with marker position
            this.bindMapEvents({
                'position_changed': 'updateModelPosition'
            });
        },

        // update overlay position if lat or lng change
        refreshOverlay: function () {
            // Only update overlay if we're not already in sync
            // Otherwise we end up in an endless loop of
            // update model <--eventhandler--> update overlay
            if (!this.model.getLatLng().equals(this.gOverlay.getPosition())) {
                this.gOverlay.setOptions({
                    position: this.model.getLatLng()
                });
            }
        },

        updateModelPosition: function () {
            var newPosition = this.gOverlay.getPosition();

            // Only update model if we're not already in sync
            // Otherwise we end up in an endless loop of
            // update model <--eventhandler--> update overlay
            if (!this.model.getLatLng().equals(newPosition)) {
                this.model.set({
                    lat: newPosition.lat(),
                    lng: newPosition.lng()
                });
            }
        },

        toggleSelect: function () {
            this.model.toggleSelect();
        },

        // Show the google maps marker overlay
        render: function () {
            this.trigger('before:render');
            if (this.beforeRender) {
                this.beforeRender();
            }

            GoogleMaps.MapView.prototype.render.apply(this, arguments);
            this.gOverlay.setVisible(true);

            this.trigger('render');
            if (this.onRender) {
                this.onRender();
            }

            return this;
        },

        close: function () {
            this.trigger('before:close');
            if (this.beforeClose) {
                this.beforeClose();
            }

            this.closeDetail();
            GoogleMaps.MapView.prototype.close.apply(this, arguments);
            this.model.off();

            this.trigger('close');
            if (this.onClose) {
                this.onClose()
            }

            return this;
        },

        openDetail: function () {
            this.detailView = new this.infoWindow({
                model: this.model,
                map: this.map,
                marker: this.gOverlay
            });
            this.detailView.render();
        },

        closeDetail: function () {
            if (this.detailView) {
                this.detailView.close();
                this.detailView = null;
            }
        }
    });


    /**
     * GoogleMaps.MarkerCollectionView
     * -------------------------------
     * Collection of MarkerViews
     */
    GoogleMaps.MarkerCollectionView = Backbone.View.extend({
        constructor: function (options) {
            this.markerView = this.markerView || GoogleMaps.MarkerView;
            this.markerViewChildren = this.markerViewChildren || {};

            Backbone.View.prototype.constructor.apply(this, arguments);

            this.options = options;

            _.bindAll(this, 'render', 'closeChildren', 'closeChild', 'addChild', 'refresh', 'close');

            // Ensure map property
            if (!this.options.map && !this.map) throw new Error("A map must be specified on MarkerCollectionView instantiation");
            this.map || (this.map = this.options.map);

            // Bind to collection
            this.collection.on("reset", this.refresh, this);
            this.collection.on("add", this.addChild, this);
            this.collection.on("remove", this.closeChild, this);
        },

        // Render MarkerViews for all models in collection
        render: function (collection) {
            var collection = collection || this.collection;

            this.trigger('before:render');
            if (this.beforeRender) {
                this.beforeRender();
            }

            // Create marker views for each model
            collection.each(this.addChild);

            this.trigger('render');
            if (this.onRender) {
                this.onRender();
            }

            return this;
        },

        // Close all child MarkerViews
        closeChildren: function () {
            for (var cid in this.markerViewChildren) {
                this.closeChild(this.markerViewChildren[cid]);
            }
        },

        closeChild: function (child) {
            // Param can be child's model, or child view itself
            var childView = (child instanceof Backbone.Model) ? this.markerViewChildren[child.cid] : child;

            childView.close();
            delete this.markerViewChildren[childView.model.cid];
        },

        // Add a MarkerView and render
        addChild: function (childModel) {
            var markerView = new this.markerView({
                model: childModel,
                map: this.map
            });

            this.markerViewChildren[childModel.cid] = markerView;

            markerView.render();
        },

        refresh: function () {
            this.closeChildren();
            this.render();
        },

        // Close all child MarkerViews
        close: function () {
            this.closeChildren();
            this.collection.off();
        }
    });

    Backbone.GoogleMaps = GoogleMaps;
    return GoogleMaps;
}));

/*!

 handlebars v4.0.4

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["Handlebars"] = factory();
    else
        root["Handlebars"] = factory();
})(this, function () {
    return /******/ (function (modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/
        var installedModules = {};

        /******/ 	// The require function
        /******/
        function __webpack_require__(moduleId) {

            /******/ 		// Check if module is in cache
            /******/
            if (installedModules[moduleId])
            /******/            return installedModules[moduleId].exports;

            /******/ 		// Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/            exports: {},
                /******/            id: moduleId,
                /******/            loaded: false
                /******/
            };

            /******/ 		// Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

            /******/ 		// Flag the module as loaded
            /******/
            module.loaded = true;

            /******/ 		// Return the exports of the module
            /******/
            return module.exports;
            /******/
        }


        /******/ 	// expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;

        /******/ 	// expose the module cache
        /******/
        __webpack_require__.c = installedModules;

        /******/ 	// __webpack_public_path__
        /******/
        __webpack_require__.p = "";

        /******/ 	// Load entry module and return exports
        /******/
        return __webpack_require__(0);
        /******/
    })
    /************************************************************************/
    /******/([
        /* 0 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;

            var _handlebarsRuntime = __webpack_require__(2);

            var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

            // Compiler imports

            var _handlebarsCompilerAst = __webpack_require__(21);

            var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

            var _handlebarsCompilerBase = __webpack_require__(22);

            var _handlebarsCompilerCompiler = __webpack_require__(27);

            var _handlebarsCompilerJavascriptCompiler = __webpack_require__(28);

            var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

            var _handlebarsCompilerVisitor = __webpack_require__(25);

            var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

            var _handlebarsNoConflict = __webpack_require__(20);

            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

            var _create = _handlebarsRuntime2['default'].create;

            function create() {
                var hb = _create();

                hb.compile = function (input, options) {
                    return _handlebarsCompilerCompiler.compile(input, options, hb);
                };
                hb.precompile = function (input, options) {
                    return _handlebarsCompilerCompiler.precompile(input, options, hb);
                };

                hb.AST = _handlebarsCompilerAst2['default'];
                hb.Compiler = _handlebarsCompilerCompiler.Compiler;
                hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
                hb.Parser = _handlebarsCompilerBase.parser;
                hb.parse = _handlebarsCompilerBase.parse;

                return hb;
            }

            var inst = create();
            inst.create = create;

            _handlebarsNoConflict2['default'](inst);

            inst.Visitor = _handlebarsCompilerVisitor2['default'];

            inst['default'] = inst;

            exports['default'] = inst;
            module.exports = exports['default'];

            /***/
        },
        /* 1 */
        /***/ function (module, exports) {

            "use strict";

            exports["default"] = function (obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            };

            exports.__esModule = true;

            /***/
        },
        /* 2 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireWildcard = __webpack_require__(3)['default'];

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;

            var _handlebarsBase = __webpack_require__(4);

            var base = _interopRequireWildcard(_handlebarsBase);

            // Each of these augment the Handlebars object. No need to setup here.
            // (This is done to easily share code between commonjs and browse envs)

            var _handlebarsSafeString = __webpack_require__(18);

            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

            var _handlebarsException = __webpack_require__(6);

            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

            var _handlebarsUtils = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_handlebarsUtils);

            var _handlebarsRuntime = __webpack_require__(19);

            var runtime = _interopRequireWildcard(_handlebarsRuntime);

            var _handlebarsNoConflict = __webpack_require__(20);

            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

            // For compatibility and usage outside of module systems, make the Handlebars object a namespace
            function create() {
                var hb = new base.HandlebarsEnvironment();

                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2['default'];
                hb.Exception = _handlebarsException2['default'];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;

                hb.VM = runtime;
                hb.template = function (spec) {
                    return runtime.template(spec, hb);
                };

                return hb;
            }

            var inst = create();
            inst.create = create;

            _handlebarsNoConflict2['default'](inst);

            inst['default'] = inst;

            exports['default'] = inst;
            module.exports = exports['default'];

            /***/
        },
        /* 3 */
        /***/ function (module, exports) {

            "use strict";

            exports["default"] = function (obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};

                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }

                    newObj["default"] = obj;
                    return newObj;
                }
            };

            exports.__esModule = true;

            /***/
        },
        /* 4 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;

            var _utils = __webpack_require__(5);

            var _exception = __webpack_require__(6);

            var _exception2 = _interopRequireDefault(_exception);

            var _helpers = __webpack_require__(7);

            var _decorators = __webpack_require__(15);

            var _logger = __webpack_require__(17);

            var _logger2 = _interopRequireDefault(_logger);

            var VERSION = '4.0.4';
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 7;

            exports.COMPILER_REVISION = COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
                2: '== 1.0.0-rc.3',
                3: '== 1.0.0-rc.4',
                4: '== 1.x.x',
                5: '== 2.0.0-alpha.x',
                6: '>= 2.0.0-beta.1',
                7: '>= 4.0.0'
            };

            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = '[object Object]';

            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};

                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
            }

            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,

                logger: _logger2['default'],
                log: _logger2['default'].log,

                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) {
                            throw new _exception2['default']('Arg not supported with multiple helpers');
                        }
                        _utils.extend(this.helpers, name);
                    } else {
                        this.helpers[name] = fn;
                    }
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },

                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) {
                        _utils.extend(this.partials, name);
                    } else {
                        if (typeof partial === 'undefined') {
                            throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
                        }
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },

                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) {
                            throw new _exception2['default']('Arg not supported with multiple decorators');
                        }
                        _utils.extend(this.decorators, name);
                    } else {
                        this.decorators[name] = fn;
                    }
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                }
            };

            var log = _logger2['default'].log;

            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2['default'];

            /***/
        },
        /* 5 */
        /***/ function (module, exports) {

            'use strict';

            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                '`': '&#x60;',
                '=': '&#x3D;'
            };

            var badChars = /[&<>"'`=]/g,
                possible = /[&<>"'`=]/;

            function escapeChar(chr) {
                return escape[chr];
            }

            function extend(obj /* , ...source */) {
                for (var i = 1; i < arguments.length; i++) {
                    for (var key in arguments[i]) {
                        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                            obj[key] = arguments[i][key];
                        }
                    }
                }

                return obj;
            }

            var toString = Object.prototype.toString;

            exports.toString = toString;
            // Sourced from lodash
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            /* eslint-disable func-style */
            var isFunction = function isFunction(value) {
                return typeof value === 'function';
            };
            // fallback for older versions of Chrome and Safari
            /* istanbul ignore next */
            if (isFunction(/x/)) {
                exports.isFunction = isFunction = function (value) {
                    return typeof value === 'function' && toString.call(value) === '[object Function]';
                };
            }
            exports.isFunction = isFunction;

            /* eslint-enable func-style */

            /* istanbul ignore next */
            var isArray = Array.isArray || function (value) {
                return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
            };

            exports.isArray = isArray;

            // Older IE versions do not directly support indexOf so we must implement our own, sadly.

            function indexOf(array, value) {
                for (var i = 0, len = array.length; i < len; i++) {
                    if (array[i] === value) {
                        return i;
                    }
                }
                return -1;
            }

            function escapeExpression(string) {
                if (typeof string !== 'string') {
                    // don't escape SafeStrings, since they're already safe
                    if (string && string.toHTML) {
                        return string.toHTML();
                    } else if (string == null) {
                        return '';
                    } else if (!string) {
                        return string + '';
                    }

                    // Force a string conversion as this will be done by the append regardless and
                    // the regex test will do this transparently behind the scenes, causing issues if
                    // an object's to string has escaped characters in it.
                    string = '' + string;
                }

                if (!possible.test(string)) {
                    return string;
                }
                return string.replace(badChars, escapeChar);
            }

            function isEmpty(value) {
                if (!value && value !== 0) {
                    return true;
                } else if (isArray(value) && value.length === 0) {
                    return true;
                } else {
                    return false;
                }
            }

            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
            }

            function blockParams(params, ids) {
                params.path = ids;
                return params;
            }

            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + '.' : '') + id;
            }

            /***/
        },
        /* 6 */
        /***/ function (module, exports) {

            'use strict';

            exports.__esModule = true;

            var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

            function Exception(message, node) {
                var loc = node && node.loc,
                    line = undefined,
                    column = undefined;
                if (loc) {
                    line = loc.start.line;
                    column = loc.start.column;

                    message += ' - ' + line + ':' + column;
                }

                var tmp = Error.prototype.constructor.call(this, message);

                // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
                for (var idx = 0; idx < errorProps.length; idx++) {
                    this[errorProps[idx]] = tmp[errorProps[idx]];
                }

                /* istanbul ignore else */
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, Exception);
                }

                if (loc) {
                    this.lineNumber = line;
                    this.column = column;
                }
            }

            Exception.prototype = new Error();

            exports['default'] = Exception;
            module.exports = exports['default'];

            /***/
        },
        /* 7 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;

            var _helpersBlockHelperMissing = __webpack_require__(8);

            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

            var _helpersEach = __webpack_require__(9);

            var _helpersEach2 = _interopRequireDefault(_helpersEach);

            var _helpersHelperMissing = __webpack_require__(10);

            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

            var _helpersIf = __webpack_require__(11);

            var _helpersIf2 = _interopRequireDefault(_helpersIf);

            var _helpersLog = __webpack_require__(12);

            var _helpersLog2 = _interopRequireDefault(_helpersLog);

            var _helpersLookup = __webpack_require__(13);

            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

            var _helpersWith = __webpack_require__(14);

            var _helpersWith2 = _interopRequireDefault(_helpersWith);

            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2['default'](instance);
                _helpersEach2['default'](instance);
                _helpersHelperMissing2['default'](instance);
                _helpersIf2['default'](instance);
                _helpersLog2['default'](instance);
                _helpersLookup2['default'](instance);
                _helpersWith2['default'](instance);
            }

            /***/
        },
        /* 8 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            var _utils = __webpack_require__(5);

            exports['default'] = function (instance) {
                instance.registerHelper('blockHelperMissing', function (context, options) {
                    var inverse = options.inverse,
                        fn = options.fn;

                    if (context === true) {
                        return fn(this);
                    } else if (context === false || context == null) {
                        return inverse(this);
                    } else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) {
                                options.ids = [options.name];
                            }

                            return instance.helpers.each(context, options);
                        } else {
                            return inverse(this);
                        }
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = {data: data};
                        }

                        return fn(context, options);
                    }
                });
            };

            module.exports = exports['default'];

            /***/
        },
        /* 9 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;

            var _utils = __webpack_require__(5);

            var _exception = __webpack_require__(6);

            var _exception2 = _interopRequireDefault(_exception);

            exports['default'] = function (instance) {
                instance.registerHelper('each', function (context, options) {
                    if (!options) {
                        throw new _exception2['default']('Must pass iterator to #each');
                    }

                    var fn = options.fn,
                        inverse = options.inverse,
                        i = 0,
                        ret = '',
                        data = undefined,
                        contextPath = undefined;

                    if (options.data && options.ids) {
                        contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
                    }

                    if (_utils.isFunction(context)) {
                        context = context.call(this);
                    }

                    if (options.data) {
                        data = _utils.createFrame(options.data);
                    }

                    function execIteration(field, index, last) {
                        if (data) {
                            data.key = field;
                            data.index = index;
                            data.first = index === 0;
                            data.last = !!last;

                            if (contextPath) {
                                data.contextPath = contextPath + field;
                            }
                        }

                        ret = ret + fn(context[field], {
                            data: data,
                            blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
                        });
                    }

                    if (context && typeof context === 'object') {
                        if (_utils.isArray(context)) {
                            for (var j = context.length; i < j; i++) {
                                if (i in context) {
                                    execIteration(i, i, i === context.length - 1);
                                }
                            }
                        } else {
                            var priorKey = undefined;

                            for (var key in context) {
                                if (context.hasOwnProperty(key)) {
                                    // We're running the iterations one step out of sync so we can detect
                                    // the last iteration without have to scan the object twice and create
                                    // an itermediate keys array.
                                    if (priorKey !== undefined) {
                                        execIteration(priorKey, i - 1);
                                    }
                                    priorKey = key;
                                    i++;
                                }
                            }
                            if (priorKey !== undefined) {
                                execIteration(priorKey, i - 1, true);
                            }
                        }
                    }

                    if (i === 0) {
                        ret = inverse(this);
                    }

                    return ret;
                });
            };

            module.exports = exports['default'];

            /***/
        },
        /* 10 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;

            var _exception = __webpack_require__(6);

            var _exception2 = _interopRequireDefault(_exception);

            exports['default'] = function (instance) {
                instance.registerHelper('helperMissing', function () /* [args, ]options */ {
                    if (arguments.length === 1) {
                        // A missing field in a {{foo}} construct.
                        return undefined;
                    } else {
                        // Someone is actually trying to call something, blow up.
                        throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                    }
                });
            };

            module.exports = exports['default'];

            /***/
        },
        /* 11 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            var _utils = __webpack_require__(5);

            exports['default'] = function (instance) {
                instance.registerHelper('if', function (conditional, options) {
                    if (_utils.isFunction(conditional)) {
                        conditional = conditional.call(this);
                    }

                    // Default behavior is to render the positive path if the value is truthy and not empty.
                    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
                        return options.inverse(this);
                    } else {
                        return options.fn(this);
                    }
                });

                instance.registerHelper('unless', function (conditional, options) {
                    return instance.helpers['if'].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            };

            module.exports = exports['default'];

            /***/
        },
        /* 12 */
        /***/ function (module, exports) {

            'use strict';

            exports.__esModule = true;

            exports['default'] = function (instance) {
                instance.registerHelper('log', function () /* message, options */ {
                    var args = [undefined],
                        options = arguments[arguments.length - 1];
                    for (var i = 0; i < arguments.length - 1; i++) {
                        args.push(arguments[i]);
                    }

                    var level = 1;
                    if (options.hash.level != null) {
                        level = options.hash.level;
                    } else if (options.data && options.data.level != null) {
                        level = options.data.level;
                    }
                    args[0] = level;

                    instance.log.apply(instance, args);
                });
            };

            module.exports = exports['default'];

            /***/
        },
        /* 13 */
        /***/ function (module, exports) {

            'use strict';

            exports.__esModule = true;

            exports['default'] = function (instance) {
                instance.registerHelper('lookup', function (obj, field) {
                    return obj && obj[field];
                });
            };

            module.exports = exports['default'];

            /***/
        },
        /* 14 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            var _utils = __webpack_require__(5);

            exports['default'] = function (instance) {
                instance.registerHelper('with', function (context, options) {
                    if (_utils.isFunction(context)) {
                        context = context.call(this);
                    }

                    var fn = options.fn;

                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                        }

                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([context], [data && data.contextPath])
                        });
                    } else {
                        return options.inverse(this);
                    }
                });
            };

            module.exports = exports['default'];

            /***/
        },
        /* 15 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;

            var _decoratorsInline = __webpack_require__(16);

            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

            function registerDefaultDecorators(instance) {
                _decoratorsInline2['default'](instance);
            }

            /***/
        },
        /* 16 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            var _utils = __webpack_require__(5);

            exports['default'] = function (instance) {
                instance.registerDecorator('inline', function (fn, props, container, options) {
                    var ret = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret = function (context, options) {
                            // Create a new partials stack frame prior to exec.
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret;
                        };
                    }

                    props.partials[options.args[0]] = options.fn;

                    return ret;
                });
            };

            module.exports = exports['default'];

            /***/
        },
        /* 17 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            exports.__esModule = true;

            var _utils = __webpack_require__(5);

            var logger = {
                methodMap: ['debug', 'info', 'warn', 'error'],
                level: 'info',

                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === 'string') {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) {
                            level = levelMap;
                        } else {
                            level = parseInt(level, 10);
                        }
                    }

                    return level;
                },

                // Can be overridden in the host environment
                log: function log(level) {
                    level = logger.lookupLevel(level);

                    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        if (!console[method]) {
                            // eslint-disable-line no-console
                            method = 'log';
                        }

                        for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            message[_key - 1] = arguments[_key];
                        }

                        console[method].apply(console, message); // eslint-disable-line no-console
                    }
                }
            };

            exports['default'] = logger;
            module.exports = exports['default'];

            /***/
        },
        /* 18 */
        /***/ function (module, exports) {

            // Build out our basic SafeString type
            'use strict';

            exports.__esModule = true;

            function SafeString(string) {
                this.string = string;
            }

            SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
                return '' + this.string;
            };

            exports['default'] = SafeString;
            module.exports = exports['default'];

            /***/
        },
        /* 19 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireWildcard = __webpack_require__(3)['default'];

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;

            var _utils = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_utils);

            var _exception = __webpack_require__(6);

            var _exception2 = _interopRequireDefault(_exception);

            var _base = __webpack_require__(4);

            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1,
                    currentRevision = _base.COMPILER_REVISION;

                if (compilerRevision !== currentRevision) {
                    if (compilerRevision < currentRevision) {
                        var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
                            compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                        throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
                    } else {
                        // Use the embedded version info since the runtime doesn't know about this revision yet
                        throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
                    }
                }
            }

            function template(templateSpec, env) {
                /* istanbul ignore next */
                if (!env) {
                    throw new _exception2['default']('No environment passed to template');
                }
                if (!templateSpec || !templateSpec.main) {
                    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
                }

                templateSpec.main.decorator = templateSpec.main_d;

                // Note: Using env.VM references rather than local var references throughout this section to allow
                // for external users to override these as psuedo-supported APIs.
                env.VM.checkRevision(templateSpec.compiler);

                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) {
                            options.ids[0] = true;
                        }
                    }

                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var result = env.VM.invokePartial.call(this, partial, context, options);

                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, options);
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split('\n');
                            for (var i = 0, l = lines.length; i < l; i++) {
                                if (!lines[i] && i + 1 === l) {
                                    break;
                                }

                                lines[i] = options.indent + lines[i];
                            }
                            result = lines.join('\n');
                        }
                        return result;
                    } else {
                        throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
                    }
                }

                // Just add water
                var container = {
                    strict: function strict(obj, name) {
                        if (!(name in obj)) {
                            throw new _exception2['default']('"' + name + '" not defined in ' + obj);
                        }
                        return obj[name];
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for (var i = 0; i < len; i++) {
                            if (depths[i] && depths[i][name] != null) {
                                return depths[i][name];
                            }
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === 'function' ? current.call(context) : current;
                    },

                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,

                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + '_d'];
                        return ret;
                    },

                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i],
                            fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) {
                            programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                        } else if (!programWrapper) {
                            programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                        }
                        return programWrapper;
                    },

                    data: function data(value, depth) {
                        while (value && depth--) {
                            value = value._parent;
                        }
                        return value;
                    },
                    merge: function merge(param, common) {
                        var obj = param || common;

                        if (param && common && param !== common) {
                            obj = Utils.extend({}, common, param);
                        }

                        return obj;
                    },

                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };

                function ret(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    var data = options.data;

                    ret._setup(options);
                    if (!options.partial && templateSpec.useData) {
                        data = initData(context, data);
                    }
                    var depths = undefined,
                        blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) {
                            depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
                        } else {
                            depths = [context];
                        }
                    }

                    function main(context /*, options*/) {
                        return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }

                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context, options);
                }

                ret.isTop = true;

                ret._setup = function (options) {
                    if (!options.partial) {
                        container.helpers = container.merge(options.helpers, env.helpers);

                        if (templateSpec.usePartial) {
                            container.partials = container.merge(options.partials, env.partials);
                        }
                        if (templateSpec.usePartial || templateSpec.useDecorators) {
                            container.decorators = container.merge(options.decorators, env.decorators);
                        }
                    } else {
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators;
                    }
                };

                ret._child = function (i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) {
                        throw new _exception2['default']('must pass block params');
                    }
                    if (templateSpec.useDepths && !depths) {
                        throw new _exception2['default']('must pass parent depths');
                    }

                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret;
            }

            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    var currentDepths = depths;
                    if (depths && context !== depths[0]) {
                        currentDepths = [context].concat(depths);
                    }

                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
                }

                prog = executeDecorators(fn, prog, container, depths, data, blockParams);

                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
            }

            function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === '@partial-block') {
                        partial = options.data['partial-block'];
                    } else {
                        partial = options.partials[options.name];
                    }
                } else if (!partial.call && !options.name) {
                    // This is a dynamic partial that returned a string
                    options.name = partial;
                    partial = options.partials[partial];
                }
                return partial;
            }

            function invokePartial(partial, context, options) {
                options.partial = true;
                if (options.ids) {
                    options.data.contextPath = options.ids[0] || options.data.contextPath;
                }

                var partialBlock = undefined;
                if (options.fn && options.fn !== noop) {
                    options.data = _base.createFrame(options.data);
                    partialBlock = options.data['partial-block'] = options.fn;

                    if (partialBlock.partials) {
                        options.partials = Utils.extend({}, options.partials, partialBlock.partials);
                    }
                }

                if (partial === undefined && partialBlock) {
                    partial = partialBlock;
                }

                if (partial === undefined) {
                    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
                } else if (partial instanceof Function) {
                    return partial(context, options);
                }
            }

            function noop() {
                return '';
            }

            function initData(context, data) {
                if (!data || !('root' in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context;
                }
                return data;
            }

            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props);
                }
                return prog;
            }

            /***/
        },
        /* 20 */
        /***/ function (module, exports) {

            /* WEBPACK VAR INJECTION */
            (function (global) {/* global window */
                'use strict';

                exports.__esModule = true;

                exports['default'] = function (Handlebars) {
                    /* istanbul ignore next */
                    var root = typeof global !== 'undefined' ? global : window,
                        $Handlebars = root.Handlebars;
                    /* istanbul ignore next */
                    Handlebars.noConflict = function () {
                        if (root.Handlebars === Handlebars) {
                            root.Handlebars = $Handlebars;
                        }
                    };
                };

                module.exports = exports['default'];
                /* WEBPACK VAR INJECTION */
            }.call(exports, (function () {
                return this;
            }())))

            /***/
        },
        /* 21 */
        /***/ function (module, exports) {

            'use strict';

            exports.__esModule = true;
            var AST = {
                // Public API used to evaluate derived attributes regarding AST nodes
                helpers: {
                    // a mustache is definitely a helper if:
                    // * it is an eligible helper, and
                    // * it has at least one parameter or hash segment
                    helperExpression: function helperExpression(node) {
                        return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
                    },

                    scopedId: function scopedId(path) {
                        return (/^\.|this\b/.test(path.original)
                        );
                    },

                    // an ID is simple if it only has one part, and that part is not
                    // `..` or `this`.
                    simpleId: function simpleId(path) {
                        return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
                    }
                }
            };

            // Must be exported as an object rather than the root of the module as the jison lexer
            // must modify the object to operate properly.
            exports['default'] = AST;
            module.exports = exports['default'];

            /***/
        },
        /* 22 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            var _interopRequireWildcard = __webpack_require__(3)['default'];

            exports.__esModule = true;
            exports.parse = parse;

            var _parser = __webpack_require__(23);

            var _parser2 = _interopRequireDefault(_parser);

            var _whitespaceControl = __webpack_require__(24);

            var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

            var _helpers = __webpack_require__(26);

            var Helpers = _interopRequireWildcard(_helpers);

            var _utils = __webpack_require__(5);

            exports.parser = _parser2['default'];

            var yy = {};
            _utils.extend(yy, Helpers);

            function parse(input, options) {
                // Just return if an already-compiled AST was passed in.
                if (input.type === 'Program') {
                    return input;
                }

                _parser2['default'].yy = yy;

                // Altering the shared object here, but this is ok as parser is a sync operation
                yy.locInfo = function (locInfo) {
                    return new yy.SourceLocation(options && options.srcName, locInfo);
                };

                var strip = new _whitespaceControl2['default'](options);
                return strip.accept(_parser2['default'].parse(input));
            }

            /***/
        },
        /* 23 */
        /***/ function (module, exports) {

            /* istanbul ignore next */
            /* Jison generated parser */
            "use strict";

            var handlebars = (function () {
                var parser = {
                    trace: function trace() {
                    },
                    yy: {},
                    symbols_: {
                        "error": 2,
                        "root": 3,
                        "program": 4,
                        "EOF": 5,
                        "program_repetition0": 6,
                        "statement": 7,
                        "mustache": 8,
                        "block": 9,
                        "rawBlock": 10,
                        "partial": 11,
                        "partialBlock": 12,
                        "content": 13,
                        "COMMENT": 14,
                        "CONTENT": 15,
                        "openRawBlock": 16,
                        "rawBlock_repetition_plus0": 17,
                        "END_RAW_BLOCK": 18,
                        "OPEN_RAW_BLOCK": 19,
                        "helperName": 20,
                        "openRawBlock_repetition0": 21,
                        "openRawBlock_option0": 22,
                        "CLOSE_RAW_BLOCK": 23,
                        "openBlock": 24,
                        "block_option0": 25,
                        "closeBlock": 26,
                        "openInverse": 27,
                        "block_option1": 28,
                        "OPEN_BLOCK": 29,
                        "openBlock_repetition0": 30,
                        "openBlock_option0": 31,
                        "openBlock_option1": 32,
                        "CLOSE": 33,
                        "OPEN_INVERSE": 34,
                        "openInverse_repetition0": 35,
                        "openInverse_option0": 36,
                        "openInverse_option1": 37,
                        "openInverseChain": 38,
                        "OPEN_INVERSE_CHAIN": 39,
                        "openInverseChain_repetition0": 40,
                        "openInverseChain_option0": 41,
                        "openInverseChain_option1": 42,
                        "inverseAndProgram": 43,
                        "INVERSE": 44,
                        "inverseChain": 45,
                        "inverseChain_option0": 46,
                        "OPEN_ENDBLOCK": 47,
                        "OPEN": 48,
                        "mustache_repetition0": 49,
                        "mustache_option0": 50,
                        "OPEN_UNESCAPED": 51,
                        "mustache_repetition1": 52,
                        "mustache_option1": 53,
                        "CLOSE_UNESCAPED": 54,
                        "OPEN_PARTIAL": 55,
                        "partialName": 56,
                        "partial_repetition0": 57,
                        "partial_option0": 58,
                        "openPartialBlock": 59,
                        "OPEN_PARTIAL_BLOCK": 60,
                        "openPartialBlock_repetition0": 61,
                        "openPartialBlock_option0": 62,
                        "param": 63,
                        "sexpr": 64,
                        "OPEN_SEXPR": 65,
                        "sexpr_repetition0": 66,
                        "sexpr_option0": 67,
                        "CLOSE_SEXPR": 68,
                        "hash": 69,
                        "hash_repetition_plus0": 70,
                        "hashSegment": 71,
                        "ID": 72,
                        "EQUALS": 73,
                        "blockParams": 74,
                        "OPEN_BLOCK_PARAMS": 75,
                        "blockParams_repetition_plus0": 76,
                        "CLOSE_BLOCK_PARAMS": 77,
                        "path": 78,
                        "dataName": 79,
                        "STRING": 80,
                        "NUMBER": 81,
                        "BOOLEAN": 82,
                        "UNDEFINED": 83,
                        "NULL": 84,
                        "DATA": 85,
                        "pathSegments": 86,
                        "SEP": 87,
                        "$accept": 0,
                        "$end": 1
                    },
                    terminals_: {
                        2: "error",
                        5: "EOF",
                        14: "COMMENT",
                        15: "CONTENT",
                        18: "END_RAW_BLOCK",
                        19: "OPEN_RAW_BLOCK",
                        23: "CLOSE_RAW_BLOCK",
                        29: "OPEN_BLOCK",
                        33: "CLOSE",
                        34: "OPEN_INVERSE",
                        39: "OPEN_INVERSE_CHAIN",
                        44: "INVERSE",
                        47: "OPEN_ENDBLOCK",
                        48: "OPEN",
                        51: "OPEN_UNESCAPED",
                        54: "CLOSE_UNESCAPED",
                        55: "OPEN_PARTIAL",
                        60: "OPEN_PARTIAL_BLOCK",
                        65: "OPEN_SEXPR",
                        68: "CLOSE_SEXPR",
                        72: "ID",
                        73: "EQUALS",
                        75: "OPEN_BLOCK_PARAMS",
                        77: "CLOSE_BLOCK_PARAMS",
                        80: "STRING",
                        81: "NUMBER",
                        82: "BOOLEAN",
                        83: "UNDEFINED",
                        84: "NULL",
                        85: "DATA",
                        87: "SEP"
                    },
                    productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
                    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
                                                      /**/) {

                        var $0 = $$.length - 1;
                        switch (yystate) {
                            case 1:
                                return $$[$0 - 1];
                                break;
                            case 2:
                                this.$ = yy.prepareProgram($$[$0]);
                                break;
                            case 3:
                                this.$ = $$[$0];
                                break;
                            case 4:
                                this.$ = $$[$0];
                                break;
                            case 5:
                                this.$ = $$[$0];
                                break;
                            case 6:
                                this.$ = $$[$0];
                                break;
                            case 7:
                                this.$ = $$[$0];
                                break;
                            case 8:
                                this.$ = $$[$0];
                                break;
                            case 9:
                                this.$ = {
                                    type: 'CommentStatement',
                                    value: yy.stripComment($$[$0]),
                                    strip: yy.stripFlags($$[$0], $$[$0]),
                                    loc: yy.locInfo(this._$)
                                };

                                break;
                            case 10:
                                this.$ = {
                                    type: 'ContentStatement',
                                    original: $$[$0],
                                    value: $$[$0],
                                    loc: yy.locInfo(this._$)
                                };

                                break;
                            case 11:
                                this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                                break;
                            case 12:
                                this.$ = {path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1]};
                                break;
                            case 13:
                                this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                                break;
                            case 14:
                                this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                                break;
                            case 15:
                                this.$ = {
                                    open: $$[$0 - 5],
                                    path: $$[$0 - 4],
                                    params: $$[$0 - 3],
                                    hash: $$[$0 - 2],
                                    blockParams: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                                };
                                break;
                            case 16:
                                this.$ = {
                                    path: $$[$0 - 4],
                                    params: $$[$0 - 3],
                                    hash: $$[$0 - 2],
                                    blockParams: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                                };
                                break;
                            case 17:
                                this.$ = {
                                    path: $$[$0 - 4],
                                    params: $$[$0 - 3],
                                    hash: $$[$0 - 2],
                                    blockParams: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                                };
                                break;
                            case 18:
                                this.$ = {strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0]};
                                break;
                            case 19:
                                var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                                    program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                                program.chained = true;

                                this.$ = {strip: $$[$0 - 2].strip, program: program, chain: true};

                                break;
                            case 20:
                                this.$ = $$[$0];
                                break;
                            case 21:
                                this.$ = {path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0])};
                                break;
                            case 22:
                                this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                                break;
                            case 23:
                                this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                                break;
                            case 24:
                                this.$ = {
                                    type: 'PartialStatement',
                                    name: $$[$0 - 3],
                                    params: $$[$0 - 2],
                                    hash: $$[$0 - 1],
                                    indent: '',
                                    strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                                    loc: yy.locInfo(this._$)
                                };

                                break;
                            case 25:
                                this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                                break;
                            case 26:
                                this.$ = {
                                    path: $$[$0 - 3],
                                    params: $$[$0 - 2],
                                    hash: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 4], $$[$0])
                                };
                                break;
                            case 27:
                                this.$ = $$[$0];
                                break;
                            case 28:
                                this.$ = $$[$0];
                                break;
                            case 29:
                                this.$ = {
                                    type: 'SubExpression',
                                    path: $$[$0 - 3],
                                    params: $$[$0 - 2],
                                    hash: $$[$0 - 1],
                                    loc: yy.locInfo(this._$)
                                };

                                break;
                            case 30:
                                this.$ = {type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$)};
                                break;
                            case 31:
                                this.$ = {
                                    type: 'HashPair',
                                    key: yy.id($$[$0 - 2]),
                                    value: $$[$0],
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 32:
                                this.$ = yy.id($$[$0 - 1]);
                                break;
                            case 33:
                                this.$ = $$[$0];
                                break;
                            case 34:
                                this.$ = $$[$0];
                                break;
                            case 35:
                                this.$ = {
                                    type: 'StringLiteral',
                                    value: $$[$0],
                                    original: $$[$0],
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 36:
                                this.$ = {
                                    type: 'NumberLiteral',
                                    value: Number($$[$0]),
                                    original: Number($$[$0]),
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 37:
                                this.$ = {
                                    type: 'BooleanLiteral',
                                    value: $$[$0] === 'true',
                                    original: $$[$0] === 'true',
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 38:
                                this.$ = {
                                    type: 'UndefinedLiteral',
                                    original: undefined,
                                    value: undefined,
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 39:
                                this.$ = {type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$)};
                                break;
                            case 40:
                                this.$ = $$[$0];
                                break;
                            case 41:
                                this.$ = $$[$0];
                                break;
                            case 42:
                                this.$ = yy.preparePath(true, $$[$0], this._$);
                                break;
                            case 43:
                                this.$ = yy.preparePath(false, $$[$0], this._$);
                                break;
                            case 44:
                                $$[$0 - 2].push({part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1]});
                                this.$ = $$[$0 - 2];
                                break;
                            case 45:
                                this.$ = [{part: yy.id($$[$0]), original: $$[$0]}];
                                break;
                            case 46:
                                this.$ = [];
                                break;
                            case 47:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 48:
                                this.$ = [$$[$0]];
                                break;
                            case 49:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 50:
                                this.$ = [];
                                break;
                            case 51:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 58:
                                this.$ = [];
                                break;
                            case 59:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 64:
                                this.$ = [];
                                break;
                            case 65:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 70:
                                this.$ = [];
                                break;
                            case 71:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 78:
                                this.$ = [];
                                break;
                            case 79:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 82:
                                this.$ = [];
                                break;
                            case 83:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 86:
                                this.$ = [];
                                break;
                            case 87:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 90:
                                this.$ = [];
                                break;
                            case 91:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 94:
                                this.$ = [];
                                break;
                            case 95:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 98:
                                this.$ = [$$[$0]];
                                break;
                            case 99:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 100:
                                this.$ = [$$[$0]];
                                break;
                            case 101:
                                $$[$0 - 1].push($$[$0]);
                                break;
                        }
                    },
                    table: [{
                        3: 1,
                        4: 2,
                        5: [2, 46],
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {1: [3]}, {5: [1, 4]}, {
                        5: [2, 2],
                        7: 5,
                        8: 6,
                        9: 7,
                        10: 8,
                        11: 9,
                        12: 10,
                        13: 11,
                        14: [1, 12],
                        15: [1, 20],
                        16: 17,
                        19: [1, 23],
                        24: 15,
                        27: 16,
                        29: [1, 21],
                        34: [1, 22],
                        39: [2, 2],
                        44: [2, 2],
                        47: [2, 2],
                        48: [1, 13],
                        51: [1, 14],
                        55: [1, 18],
                        59: 19,
                        60: [1, 24]
                    }, {1: [2, 1]}, {
                        5: [2, 47],
                        14: [2, 47],
                        15: [2, 47],
                        19: [2, 47],
                        29: [2, 47],
                        34: [2, 47],
                        39: [2, 47],
                        44: [2, 47],
                        47: [2, 47],
                        48: [2, 47],
                        51: [2, 47],
                        55: [2, 47],
                        60: [2, 47]
                    }, {
                        5: [2, 3],
                        14: [2, 3],
                        15: [2, 3],
                        19: [2, 3],
                        29: [2, 3],
                        34: [2, 3],
                        39: [2, 3],
                        44: [2, 3],
                        47: [2, 3],
                        48: [2, 3],
                        51: [2, 3],
                        55: [2, 3],
                        60: [2, 3]
                    }, {
                        5: [2, 4],
                        14: [2, 4],
                        15: [2, 4],
                        19: [2, 4],
                        29: [2, 4],
                        34: [2, 4],
                        39: [2, 4],
                        44: [2, 4],
                        47: [2, 4],
                        48: [2, 4],
                        51: [2, 4],
                        55: [2, 4],
                        60: [2, 4]
                    }, {
                        5: [2, 5],
                        14: [2, 5],
                        15: [2, 5],
                        19: [2, 5],
                        29: [2, 5],
                        34: [2, 5],
                        39: [2, 5],
                        44: [2, 5],
                        47: [2, 5],
                        48: [2, 5],
                        51: [2, 5],
                        55: [2, 5],
                        60: [2, 5]
                    }, {
                        5: [2, 6],
                        14: [2, 6],
                        15: [2, 6],
                        19: [2, 6],
                        29: [2, 6],
                        34: [2, 6],
                        39: [2, 6],
                        44: [2, 6],
                        47: [2, 6],
                        48: [2, 6],
                        51: [2, 6],
                        55: [2, 6],
                        60: [2, 6]
                    }, {
                        5: [2, 7],
                        14: [2, 7],
                        15: [2, 7],
                        19: [2, 7],
                        29: [2, 7],
                        34: [2, 7],
                        39: [2, 7],
                        44: [2, 7],
                        47: [2, 7],
                        48: [2, 7],
                        51: [2, 7],
                        55: [2, 7],
                        60: [2, 7]
                    }, {
                        5: [2, 8],
                        14: [2, 8],
                        15: [2, 8],
                        19: [2, 8],
                        29: [2, 8],
                        34: [2, 8],
                        39: [2, 8],
                        44: [2, 8],
                        47: [2, 8],
                        48: [2, 8],
                        51: [2, 8],
                        55: [2, 8],
                        60: [2, 8]
                    }, {
                        5: [2, 9],
                        14: [2, 9],
                        15: [2, 9],
                        19: [2, 9],
                        29: [2, 9],
                        34: [2, 9],
                        39: [2, 9],
                        44: [2, 9],
                        47: [2, 9],
                        48: [2, 9],
                        51: [2, 9],
                        55: [2, 9],
                        60: [2, 9]
                    }, {
                        20: 25,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 36,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 37,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        39: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        4: 38,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {13: 40, 15: [1, 20], 17: 39}, {
                        20: 42,
                        56: 41,
                        64: 43,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 45,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        5: [2, 10],
                        14: [2, 10],
                        15: [2, 10],
                        18: [2, 10],
                        19: [2, 10],
                        29: [2, 10],
                        34: [2, 10],
                        39: [2, 10],
                        44: [2, 10],
                        47: [2, 10],
                        48: [2, 10],
                        51: [2, 10],
                        55: [2, 10],
                        60: [2, 10]
                    }, {
                        20: 46,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 47,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 48,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 42,
                        56: 49,
                        64: 43,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        33: [2, 78],
                        49: 50,
                        65: [2, 78],
                        72: [2, 78],
                        80: [2, 78],
                        81: [2, 78],
                        82: [2, 78],
                        83: [2, 78],
                        84: [2, 78],
                        85: [2, 78]
                    }, {
                        23: [2, 33],
                        33: [2, 33],
                        54: [2, 33],
                        65: [2, 33],
                        68: [2, 33],
                        72: [2, 33],
                        75: [2, 33],
                        80: [2, 33],
                        81: [2, 33],
                        82: [2, 33],
                        83: [2, 33],
                        84: [2, 33],
                        85: [2, 33]
                    }, {
                        23: [2, 34],
                        33: [2, 34],
                        54: [2, 34],
                        65: [2, 34],
                        68: [2, 34],
                        72: [2, 34],
                        75: [2, 34],
                        80: [2, 34],
                        81: [2, 34],
                        82: [2, 34],
                        83: [2, 34],
                        84: [2, 34],
                        85: [2, 34]
                    }, {
                        23: [2, 35],
                        33: [2, 35],
                        54: [2, 35],
                        65: [2, 35],
                        68: [2, 35],
                        72: [2, 35],
                        75: [2, 35],
                        80: [2, 35],
                        81: [2, 35],
                        82: [2, 35],
                        83: [2, 35],
                        84: [2, 35],
                        85: [2, 35]
                    }, {
                        23: [2, 36],
                        33: [2, 36],
                        54: [2, 36],
                        65: [2, 36],
                        68: [2, 36],
                        72: [2, 36],
                        75: [2, 36],
                        80: [2, 36],
                        81: [2, 36],
                        82: [2, 36],
                        83: [2, 36],
                        84: [2, 36],
                        85: [2, 36]
                    }, {
                        23: [2, 37],
                        33: [2, 37],
                        54: [2, 37],
                        65: [2, 37],
                        68: [2, 37],
                        72: [2, 37],
                        75: [2, 37],
                        80: [2, 37],
                        81: [2, 37],
                        82: [2, 37],
                        83: [2, 37],
                        84: [2, 37],
                        85: [2, 37]
                    }, {
                        23: [2, 38],
                        33: [2, 38],
                        54: [2, 38],
                        65: [2, 38],
                        68: [2, 38],
                        72: [2, 38],
                        75: [2, 38],
                        80: [2, 38],
                        81: [2, 38],
                        82: [2, 38],
                        83: [2, 38],
                        84: [2, 38],
                        85: [2, 38]
                    }, {
                        23: [2, 39],
                        33: [2, 39],
                        54: [2, 39],
                        65: [2, 39],
                        68: [2, 39],
                        72: [2, 39],
                        75: [2, 39],
                        80: [2, 39],
                        81: [2, 39],
                        82: [2, 39],
                        83: [2, 39],
                        84: [2, 39],
                        85: [2, 39]
                    }, {
                        23: [2, 43],
                        33: [2, 43],
                        54: [2, 43],
                        65: [2, 43],
                        68: [2, 43],
                        72: [2, 43],
                        75: [2, 43],
                        80: [2, 43],
                        81: [2, 43],
                        82: [2, 43],
                        83: [2, 43],
                        84: [2, 43],
                        85: [2, 43],
                        87: [1, 51]
                    }, {72: [1, 35], 86: 52}, {
                        23: [2, 45],
                        33: [2, 45],
                        54: [2, 45],
                        65: [2, 45],
                        68: [2, 45],
                        72: [2, 45],
                        75: [2, 45],
                        80: [2, 45],
                        81: [2, 45],
                        82: [2, 45],
                        83: [2, 45],
                        84: [2, 45],
                        85: [2, 45],
                        87: [2, 45]
                    }, {
                        52: 53,
                        54: [2, 82],
                        65: [2, 82],
                        72: [2, 82],
                        80: [2, 82],
                        81: [2, 82],
                        82: [2, 82],
                        83: [2, 82],
                        84: [2, 82],
                        85: [2, 82]
                    }, {25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54]}, {
                        28: 60,
                        43: 61,
                        44: [1, 59],
                        47: [2, 56]
                    }, {13: 63, 15: [1, 20], 18: [1, 62]}, {15: [2, 48], 18: [2, 48]}, {
                        33: [2, 86],
                        57: 64,
                        65: [2, 86],
                        72: [2, 86],
                        80: [2, 86],
                        81: [2, 86],
                        82: [2, 86],
                        83: [2, 86],
                        84: [2, 86],
                        85: [2, 86]
                    }, {
                        33: [2, 40],
                        65: [2, 40],
                        72: [2, 40],
                        80: [2, 40],
                        81: [2, 40],
                        82: [2, 40],
                        83: [2, 40],
                        84: [2, 40],
                        85: [2, 40]
                    }, {
                        33: [2, 41],
                        65: [2, 41],
                        72: [2, 41],
                        80: [2, 41],
                        81: [2, 41],
                        82: [2, 41],
                        83: [2, 41],
                        84: [2, 41],
                        85: [2, 41]
                    }, {
                        20: 65,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {26: 66, 47: [1, 67]}, {
                        30: 68,
                        33: [2, 58],
                        65: [2, 58],
                        72: [2, 58],
                        75: [2, 58],
                        80: [2, 58],
                        81: [2, 58],
                        82: [2, 58],
                        83: [2, 58],
                        84: [2, 58],
                        85: [2, 58]
                    }, {
                        33: [2, 64],
                        35: 69,
                        65: [2, 64],
                        72: [2, 64],
                        75: [2, 64],
                        80: [2, 64],
                        81: [2, 64],
                        82: [2, 64],
                        83: [2, 64],
                        84: [2, 64],
                        85: [2, 64]
                    }, {
                        21: 70,
                        23: [2, 50],
                        65: [2, 50],
                        72: [2, 50],
                        80: [2, 50],
                        81: [2, 50],
                        82: [2, 50],
                        83: [2, 50],
                        84: [2, 50],
                        85: [2, 50]
                    }, {
                        33: [2, 90],
                        61: 71,
                        65: [2, 90],
                        72: [2, 90],
                        80: [2, 90],
                        81: [2, 90],
                        82: [2, 90],
                        83: [2, 90],
                        84: [2, 90],
                        85: [2, 90]
                    }, {
                        20: 75,
                        33: [2, 80],
                        50: 72,
                        63: 73,
                        64: 76,
                        65: [1, 44],
                        69: 74,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {72: [1, 80]}, {
                        23: [2, 42],
                        33: [2, 42],
                        54: [2, 42],
                        65: [2, 42],
                        68: [2, 42],
                        72: [2, 42],
                        75: [2, 42],
                        80: [2, 42],
                        81: [2, 42],
                        82: [2, 42],
                        83: [2, 42],
                        84: [2, 42],
                        85: [2, 42],
                        87: [1, 51]
                    }, {
                        20: 75,
                        53: 81,
                        54: [2, 84],
                        63: 82,
                        64: 76,
                        65: [1, 44],
                        69: 83,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {26: 84, 47: [1, 67]}, {47: [2, 55]}, {
                        4: 85,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        39: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {47: [2, 20]}, {
                        20: 86,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 87,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {26: 88, 47: [1, 67]}, {47: [2, 57]}, {
                        5: [2, 11],
                        14: [2, 11],
                        15: [2, 11],
                        19: [2, 11],
                        29: [2, 11],
                        34: [2, 11],
                        39: [2, 11],
                        44: [2, 11],
                        47: [2, 11],
                        48: [2, 11],
                        51: [2, 11],
                        55: [2, 11],
                        60: [2, 11]
                    }, {15: [2, 49], 18: [2, 49]}, {
                        20: 75,
                        33: [2, 88],
                        58: 89,
                        63: 90,
                        64: 76,
                        65: [1, 44],
                        69: 91,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        65: [2, 94],
                        66: 92,
                        68: [2, 94],
                        72: [2, 94],
                        80: [2, 94],
                        81: [2, 94],
                        82: [2, 94],
                        83: [2, 94],
                        84: [2, 94],
                        85: [2, 94]
                    }, {
                        5: [2, 25],
                        14: [2, 25],
                        15: [2, 25],
                        19: [2, 25],
                        29: [2, 25],
                        34: [2, 25],
                        39: [2, 25],
                        44: [2, 25],
                        47: [2, 25],
                        48: [2, 25],
                        51: [2, 25],
                        55: [2, 25],
                        60: [2, 25]
                    }, {
                        20: 93,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        31: 94,
                        33: [2, 60],
                        63: 95,
                        64: 76,
                        65: [1, 44],
                        69: 96,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 60],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        33: [2, 66],
                        36: 97,
                        63: 98,
                        64: 76,
                        65: [1, 44],
                        69: 99,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 66],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        22: 100,
                        23: [2, 52],
                        63: 101,
                        64: 76,
                        65: [1, 44],
                        69: 102,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        33: [2, 92],
                        62: 103,
                        63: 104,
                        64: 76,
                        65: [1, 44],
                        69: 105,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {33: [1, 106]}, {
                        33: [2, 79],
                        65: [2, 79],
                        72: [2, 79],
                        80: [2, 79],
                        81: [2, 79],
                        82: [2, 79],
                        83: [2, 79],
                        84: [2, 79],
                        85: [2, 79]
                    }, {33: [2, 81]}, {
                        23: [2, 27],
                        33: [2, 27],
                        54: [2, 27],
                        65: [2, 27],
                        68: [2, 27],
                        72: [2, 27],
                        75: [2, 27],
                        80: [2, 27],
                        81: [2, 27],
                        82: [2, 27],
                        83: [2, 27],
                        84: [2, 27],
                        85: [2, 27]
                    }, {
                        23: [2, 28],
                        33: [2, 28],
                        54: [2, 28],
                        65: [2, 28],
                        68: [2, 28],
                        72: [2, 28],
                        75: [2, 28],
                        80: [2, 28],
                        81: [2, 28],
                        82: [2, 28],
                        83: [2, 28],
                        84: [2, 28],
                        85: [2, 28]
                    }, {
                        23: [2, 30],
                        33: [2, 30],
                        54: [2, 30],
                        68: [2, 30],
                        71: 107,
                        72: [1, 108],
                        75: [2, 30]
                    }, {23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98]}, {
                        23: [2, 45],
                        33: [2, 45],
                        54: [2, 45],
                        65: [2, 45],
                        68: [2, 45],
                        72: [2, 45],
                        73: [1, 109],
                        75: [2, 45],
                        80: [2, 45],
                        81: [2, 45],
                        82: [2, 45],
                        83: [2, 45],
                        84: [2, 45],
                        85: [2, 45],
                        87: [2, 45]
                    }, {
                        23: [2, 44],
                        33: [2, 44],
                        54: [2, 44],
                        65: [2, 44],
                        68: [2, 44],
                        72: [2, 44],
                        75: [2, 44],
                        80: [2, 44],
                        81: [2, 44],
                        82: [2, 44],
                        83: [2, 44],
                        84: [2, 44],
                        85: [2, 44],
                        87: [2, 44]
                    }, {54: [1, 110]}, {
                        54: [2, 83],
                        65: [2, 83],
                        72: [2, 83],
                        80: [2, 83],
                        81: [2, 83],
                        82: [2, 83],
                        83: [2, 83],
                        84: [2, 83],
                        85: [2, 83]
                    }, {54: [2, 85]}, {
                        5: [2, 13],
                        14: [2, 13],
                        15: [2, 13],
                        19: [2, 13],
                        29: [2, 13],
                        34: [2, 13],
                        39: [2, 13],
                        44: [2, 13],
                        47: [2, 13],
                        48: [2, 13],
                        51: [2, 13],
                        55: [2, 13],
                        60: [2, 13]
                    }, {38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76]}, {
                        33: [2, 70],
                        40: 113,
                        65: [2, 70],
                        72: [2, 70],
                        75: [2, 70],
                        80: [2, 70],
                        81: [2, 70],
                        82: [2, 70],
                        83: [2, 70],
                        84: [2, 70],
                        85: [2, 70]
                    }, {47: [2, 18]}, {
                        5: [2, 14],
                        14: [2, 14],
                        15: [2, 14],
                        19: [2, 14],
                        29: [2, 14],
                        34: [2, 14],
                        39: [2, 14],
                        44: [2, 14],
                        47: [2, 14],
                        48: [2, 14],
                        51: [2, 14],
                        55: [2, 14],
                        60: [2, 14]
                    }, {33: [1, 114]}, {
                        33: [2, 87],
                        65: [2, 87],
                        72: [2, 87],
                        80: [2, 87],
                        81: [2, 87],
                        82: [2, 87],
                        83: [2, 87],
                        84: [2, 87],
                        85: [2, 87]
                    }, {33: [2, 89]}, {
                        20: 75,
                        63: 116,
                        64: 76,
                        65: [1, 44],
                        67: 115,
                        68: [2, 96],
                        69: 117,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {33: [1, 118]}, {32: 119, 33: [2, 62], 74: 120, 75: [1, 121]}, {
                        33: [2, 59],
                        65: [2, 59],
                        72: [2, 59],
                        75: [2, 59],
                        80: [2, 59],
                        81: [2, 59],
                        82: [2, 59],
                        83: [2, 59],
                        84: [2, 59],
                        85: [2, 59]
                    }, {33: [2, 61], 75: [2, 61]}, {33: [2, 68], 37: 122, 74: 123, 75: [1, 121]}, {
                        33: [2, 65],
                        65: [2, 65],
                        72: [2, 65],
                        75: [2, 65],
                        80: [2, 65],
                        81: [2, 65],
                        82: [2, 65],
                        83: [2, 65],
                        84: [2, 65],
                        85: [2, 65]
                    }, {33: [2, 67], 75: [2, 67]}, {23: [1, 124]}, {
                        23: [2, 51],
                        65: [2, 51],
                        72: [2, 51],
                        80: [2, 51],
                        81: [2, 51],
                        82: [2, 51],
                        83: [2, 51],
                        84: [2, 51],
                        85: [2, 51]
                    }, {23: [2, 53]}, {33: [1, 125]}, {
                        33: [2, 91],
                        65: [2, 91],
                        72: [2, 91],
                        80: [2, 91],
                        81: [2, 91],
                        82: [2, 91],
                        83: [2, 91],
                        84: [2, 91],
                        85: [2, 91]
                    }, {33: [2, 93]}, {
                        5: [2, 22],
                        14: [2, 22],
                        15: [2, 22],
                        19: [2, 22],
                        29: [2, 22],
                        34: [2, 22],
                        39: [2, 22],
                        44: [2, 22],
                        47: [2, 22],
                        48: [2, 22],
                        51: [2, 22],
                        55: [2, 22],
                        60: [2, 22]
                    }, {
                        23: [2, 99],
                        33: [2, 99],
                        54: [2, 99],
                        68: [2, 99],
                        72: [2, 99],
                        75: [2, 99]
                    }, {73: [1, 109]}, {
                        20: 75,
                        63: 126,
                        64: 76,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        5: [2, 23],
                        14: [2, 23],
                        15: [2, 23],
                        19: [2, 23],
                        29: [2, 23],
                        34: [2, 23],
                        39: [2, 23],
                        44: [2, 23],
                        47: [2, 23],
                        48: [2, 23],
                        51: [2, 23],
                        55: [2, 23],
                        60: [2, 23]
                    }, {47: [2, 19]}, {47: [2, 77]}, {
                        20: 75,
                        33: [2, 72],
                        41: 127,
                        63: 128,
                        64: 76,
                        65: [1, 44],
                        69: 129,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 72],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        5: [2, 24],
                        14: [2, 24],
                        15: [2, 24],
                        19: [2, 24],
                        29: [2, 24],
                        34: [2, 24],
                        39: [2, 24],
                        44: [2, 24],
                        47: [2, 24],
                        48: [2, 24],
                        51: [2, 24],
                        55: [2, 24],
                        60: [2, 24]
                    }, {68: [1, 130]}, {
                        65: [2, 95],
                        68: [2, 95],
                        72: [2, 95],
                        80: [2, 95],
                        81: [2, 95],
                        82: [2, 95],
                        83: [2, 95],
                        84: [2, 95],
                        85: [2, 95]
                    }, {68: [2, 97]}, {
                        5: [2, 21],
                        14: [2, 21],
                        15: [2, 21],
                        19: [2, 21],
                        29: [2, 21],
                        34: [2, 21],
                        39: [2, 21],
                        44: [2, 21],
                        47: [2, 21],
                        48: [2, 21],
                        51: [2, 21],
                        55: [2, 21],
                        60: [2, 21]
                    }, {33: [1, 131]}, {33: [2, 63]}, {
                        72: [1, 133],
                        76: 132
                    }, {33: [1, 134]}, {33: [2, 69]}, {15: [2, 12]}, {
                        14: [2, 26],
                        15: [2, 26],
                        19: [2, 26],
                        29: [2, 26],
                        34: [2, 26],
                        47: [2, 26],
                        48: [2, 26],
                        51: [2, 26],
                        55: [2, 26],
                        60: [2, 26]
                    }, {23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31]}, {
                        33: [2, 74],
                        42: 135,
                        74: 136,
                        75: [1, 121]
                    }, {
                        33: [2, 71],
                        65: [2, 71],
                        72: [2, 71],
                        75: [2, 71],
                        80: [2, 71],
                        81: [2, 71],
                        82: [2, 71],
                        83: [2, 71],
                        84: [2, 71],
                        85: [2, 71]
                    }, {33: [2, 73], 75: [2, 73]}, {
                        23: [2, 29],
                        33: [2, 29],
                        54: [2, 29],
                        65: [2, 29],
                        68: [2, 29],
                        72: [2, 29],
                        75: [2, 29],
                        80: [2, 29],
                        81: [2, 29],
                        82: [2, 29],
                        83: [2, 29],
                        84: [2, 29],
                        85: [2, 29]
                    }, {
                        14: [2, 15],
                        15: [2, 15],
                        19: [2, 15],
                        29: [2, 15],
                        34: [2, 15],
                        39: [2, 15],
                        44: [2, 15],
                        47: [2, 15],
                        48: [2, 15],
                        51: [2, 15],
                        55: [2, 15],
                        60: [2, 15]
                    }, {72: [1, 138], 77: [1, 137]}, {72: [2, 100], 77: [2, 100]}, {
                        14: [2, 16],
                        15: [2, 16],
                        19: [2, 16],
                        29: [2, 16],
                        34: [2, 16],
                        44: [2, 16],
                        47: [2, 16],
                        48: [2, 16],
                        51: [2, 16],
                        55: [2, 16],
                        60: [2, 16]
                    }, {33: [1, 139]}, {33: [2, 75]}, {33: [2, 32]}, {72: [2, 101], 77: [2, 101]}, {
                        14: [2, 17],
                        15: [2, 17],
                        19: [2, 17],
                        29: [2, 17],
                        34: [2, 17],
                        39: [2, 17],
                        44: [2, 17],
                        47: [2, 17],
                        48: [2, 17],
                        51: [2, 17],
                        55: [2, 17],
                        60: [2, 17]
                    }],
                    defaultActions: {
                        4: [2, 1],
                        55: [2, 55],
                        57: [2, 20],
                        61: [2, 57],
                        74: [2, 81],
                        83: [2, 85],
                        87: [2, 18],
                        91: [2, 89],
                        102: [2, 53],
                        105: [2, 93],
                        111: [2, 19],
                        112: [2, 77],
                        117: [2, 97],
                        120: [2, 63],
                        123: [2, 69],
                        124: [2, 12],
                        136: [2, 75],
                        137: [2, 32]
                    },
                    parseError: function parseError(str, hash) {
                        throw new Error(str);
                    },
                    parse: function parse(input) {
                        var self = this,
                            stack = [0],
                            vstack = [null],
                            lstack = [],
                            table = this.table,
                            yytext = "",
                            yylineno = 0,
                            yyleng = 0,
                            recovering = 0,
                            TERROR = 2,
                            EOF = 1;
                        this.lexer.setInput(input);
                        this.lexer.yy = this.yy;
                        this.yy.lexer = this.lexer;
                        this.yy.parser = this;
                        if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
                        var yyloc = this.lexer.yylloc;
                        lstack.push(yyloc);
                        var ranges = this.lexer.options && this.lexer.options.ranges;
                        if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;

                        function popStack(n) {
                            stack.length = stack.length - 2 * n;
                            vstack.length = vstack.length - n;
                            lstack.length = lstack.length - n;
                        }

                        function lex() {
                            var token;
                            token = self.lexer.lex() || 1;
                            if (typeof token !== "number") {
                                token = self.symbols_[token] || token;
                            }
                            return token;
                        }

                        var symbol,
                            preErrorSymbol,
                            state,
                            action,
                            a,
                            r,
                            yyval = {},
                            p,
                            len,
                            newState,
                            expected;
                        while (true) {
                            state = stack[stack.length - 1];
                            if (this.defaultActions[state]) {
                                action = this.defaultActions[state];
                            } else {
                                if (symbol === null || typeof symbol == "undefined") {
                                    symbol = lex();
                                }
                                action = table[state] && table[state][symbol];
                            }
                            if (typeof action === "undefined" || !action.length || !action[0]) {
                                var errStr = "";
                                if (!recovering) {
                                    expected = [];
                                    for (p in table[state]) if (this.terminals_[p] && p > 2) {
                                        expected.push("'" + this.terminals_[p] + "'");
                                    }
                                    if (this.lexer.showPosition) {
                                        errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                                    } else {
                                        errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                                    }
                                    this.parseError(errStr, {
                                        text: this.lexer.match,
                                        token: this.terminals_[symbol] || symbol,
                                        line: this.lexer.yylineno,
                                        loc: yyloc,
                                        expected: expected
                                    });
                                }
                            }
                            if (action[0] instanceof Array && action.length > 1) {
                                throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                            }
                            switch (action[0]) {
                                case 1:
                                    stack.push(symbol);
                                    vstack.push(this.lexer.yytext);
                                    lstack.push(this.lexer.yylloc);
                                    stack.push(action[1]);
                                    symbol = null;
                                    if (!preErrorSymbol) {
                                        yyleng = this.lexer.yyleng;
                                        yytext = this.lexer.yytext;
                                        yylineno = this.lexer.yylineno;
                                        yyloc = this.lexer.yylloc;
                                        if (recovering > 0) recovering--;
                                    } else {
                                        symbol = preErrorSymbol;
                                        preErrorSymbol = null;
                                    }
                                    break;
                                case 2:
                                    len = this.productions_[action[1]][1];
                                    yyval.$ = vstack[vstack.length - len];
                                    yyval._$ = {
                                        first_line: lstack[lstack.length - (len || 1)].first_line,
                                        last_line: lstack[lstack.length - 1].last_line,
                                        first_column: lstack[lstack.length - (len || 1)].first_column,
                                        last_column: lstack[lstack.length - 1].last_column
                                    };
                                    if (ranges) {
                                        yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                                    }
                                    r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                                    if (typeof r !== "undefined") {
                                        return r;
                                    }
                                    if (len) {
                                        stack = stack.slice(0, -1 * len * 2);
                                        vstack = vstack.slice(0, -1 * len);
                                        lstack = lstack.slice(0, -1 * len);
                                    }
                                    stack.push(this.productions_[action[1]][0]);
                                    vstack.push(yyval.$);
                                    lstack.push(yyval._$);
                                    newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                                    stack.push(newState);
                                    break;
                                case 3:
                                    return true;
                            }
                        }
                        return true;
                    }
                };
                /* Jison generated lexer */
                var lexer = (function () {
                    var lexer = {
                        EOF: 1,
                        parseError: function parseError(str, hash) {
                            if (this.yy.parser) {
                                this.yy.parser.parseError(str, hash);
                            } else {
                                throw new Error(str);
                            }
                        },
                        setInput: function setInput(input) {
                            this._input = input;
                            this._more = this._less = this.done = false;
                            this.yylineno = this.yyleng = 0;
                            this.yytext = this.matched = this.match = '';
                            this.conditionStack = ['INITIAL'];
                            this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0};
                            if (this.options.ranges) this.yylloc.range = [0, 0];
                            this.offset = 0;
                            return this;
                        },
                        input: function input() {
                            var ch = this._input[0];
                            this.yytext += ch;
                            this.yyleng++;
                            this.offset++;
                            this.match += ch;
                            this.matched += ch;
                            var lines = ch.match(/(?:\r\n?|\n).*/g);
                            if (lines) {
                                this.yylineno++;
                                this.yylloc.last_line++;
                            } else {
                                this.yylloc.last_column++;
                            }
                            if (this.options.ranges) this.yylloc.range[1]++;

                            this._input = this._input.slice(1);
                            return ch;
                        },
                        unput: function unput(ch) {
                            var len = ch.length;
                            var lines = ch.split(/(?:\r\n?|\n)/g);

                            this._input = ch + this._input;
                            this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                            //this.yyleng -= len;
                            this.offset -= len;
                            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1);
                            this.matched = this.matched.substr(0, this.matched.length - 1);

                            if (lines.length - 1) this.yylineno -= lines.length - 1;
                            var r = this.yylloc.range;

                            this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                            };

                            if (this.options.ranges) {
                                this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                            }
                            return this;
                        },
                        more: function more() {
                            this._more = true;
                            return this;
                        },
                        less: function less(n) {
                            this.unput(this.match.slice(n));
                        },
                        pastInput: function pastInput() {
                            var past = this.matched.substr(0, this.matched.length - this.match.length);
                            return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
                        },
                        upcomingInput: function upcomingInput() {
                            var next = this.match;
                            if (next.length < 20) {
                                next += this._input.substr(0, 20 - next.length);
                            }
                            return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
                        },
                        showPosition: function showPosition() {
                            var pre = this.pastInput();
                            var c = new Array(pre.length + 1).join("-");
                            return pre + this.upcomingInput() + "\n" + c + "^";
                        },
                        next: function next() {
                            if (this.done) {
                                return this.EOF;
                            }
                            if (!this._input) this.done = true;

                            var token, match, tempMatch, index, col, lines;
                            if (!this._more) {
                                this.yytext = '';
                                this.match = '';
                            }
                            var rules = this._currentRules();
                            for (var i = 0; i < rules.length; i++) {
                                tempMatch = this._input.match(this.rules[rules[i]]);
                                if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                                    match = tempMatch;
                                    index = i;
                                    if (!this.options.flex) break;
                                }
                            }
                            if (match) {
                                lines = match[0].match(/(?:\r\n?|\n).*/g);
                                if (lines) this.yylineno += lines.length;
                                this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                                };
                                this.yytext += match[0];
                                this.match += match[0];
                                this.matches = match;
                                this.yyleng = this.yytext.length;
                                if (this.options.ranges) {
                                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                                }
                                this._more = false;
                                this._input = this._input.slice(match[0].length);
                                this.matched += match[0];
                                token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                                if (this.done && this._input) this.done = false;
                                if (token) return token; else return;
                            }
                            if (this._input === "") {
                                return this.EOF;
                            } else {
                                return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                });
                            }
                        },
                        lex: function lex() {
                            var r = this.next();
                            if (typeof r !== 'undefined') {
                                return r;
                            } else {
                                return this.lex();
                            }
                        },
                        begin: function begin(condition) {
                            this.conditionStack.push(condition);
                        },
                        popState: function popState() {
                            return this.conditionStack.pop();
                        },
                        _currentRules: function _currentRules() {
                            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                        },
                        topState: function topState() {
                            return this.conditionStack[this.conditionStack.length - 2];
                        },
                        pushState: function begin(condition) {
                            this.begin(condition);
                        }
                    };
                    lexer.options = {};
                    lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
                                                             /**/) {

                        function strip(start, end) {
                            return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
                        }

                        var YYSTATE = YY_START;
                        switch ($avoiding_name_collisions) {
                            case 0:
                                if (yy_.yytext.slice(-2) === "\\\\") {
                                    strip(0, 1);
                                    this.begin("mu");
                                } else if (yy_.yytext.slice(-1) === "\\") {
                                    strip(0, 1);
                                    this.begin("emu");
                                } else {
                                    this.begin("mu");
                                }
                                if (yy_.yytext) return 15;

                                break;
                            case 1:
                                return 15;
                                break;
                            case 2:
                                this.popState();
                                return 15;

                                break;
                            case 3:
                                this.begin('raw');
                                return 15;
                                break;
                            case 4:
                                this.popState();
                                // Should be using `this.topState()` below, but it currently
                                // returns the second top instead of the first top. Opened an
                                // issue about it at https://github.com/zaach/jison/issues/291
                                if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
                                    return 15;
                                } else {
                                    yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
                                    return 'END_RAW_BLOCK';
                                }

                                break;
                            case 5:
                                return 15;
                                break;
                            case 6:
                                this.popState();
                                return 14;

                                break;
                            case 7:
                                return 65;
                                break;
                            case 8:
                                return 68;
                                break;
                            case 9:
                                return 19;
                                break;
                            case 10:
                                this.popState();
                                this.begin('raw');
                                return 23;

                                break;
                            case 11:
                                return 55;
                                break;
                            case 12:
                                return 60;
                                break;
                            case 13:
                                return 29;
                                break;
                            case 14:
                                return 47;
                                break;
                            case 15:
                                this.popState();
                                return 44;
                                break;
                            case 16:
                                this.popState();
                                return 44;
                                break;
                            case 17:
                                return 34;
                                break;
                            case 18:
                                return 39;
                                break;
                            case 19:
                                return 51;
                                break;
                            case 20:
                                return 48;
                                break;
                            case 21:
                                this.unput(yy_.yytext);
                                this.popState();
                                this.begin('com');

                                break;
                            case 22:
                                this.popState();
                                return 14;

                                break;
                            case 23:
                                return 48;
                                break;
                            case 24:
                                return 73;
                                break;
                            case 25:
                                return 72;
                                break;
                            case 26:
                                return 72;
                                break;
                            case 27:
                                return 87;
                                break;
                            case 28:
                                // ignore whitespace
                                break;
                            case 29:
                                this.popState();
                                return 54;
                                break;
                            case 30:
                                this.popState();
                                return 33;
                                break;
                            case 31:
                                yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                                return 80;
                                break;
                            case 32:
                                yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                                return 80;
                                break;
                            case 33:
                                return 85;
                                break;
                            case 34:
                                return 82;
                                break;
                            case 35:
                                return 82;
                                break;
                            case 36:
                                return 83;
                                break;
                            case 37:
                                return 84;
                                break;
                            case 38:
                                return 81;
                                break;
                            case 39:
                                return 75;
                                break;
                            case 40:
                                return 77;
                                break;
                            case 41:
                                return 72;
                                break;
                            case 42:
                                yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
                                return 72;
                                break;
                            case 43:
                                return 'INVALID';
                                break;
                            case 44:
                                return 5;
                                break;
                        }
                    };
                    lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
                    lexer.conditions = {
                        "mu": {
                            "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                            "inclusive": false
                        },
                        "emu": {"rules": [2], "inclusive": false},
                        "com": {"rules": [6], "inclusive": false},
                        "raw": {"rules": [3, 4, 5], "inclusive": false},
                        "INITIAL": {"rules": [0, 1, 44], "inclusive": true}
                    };
                    return lexer;
                })();
                parser.lexer = lexer;

                function Parser() {
                    this.yy = {};
                }

                Parser.prototype = parser;
                parser.Parser = Parser;
                return new Parser();
            })();
            exports.__esModule = true;
            exports['default'] = handlebars;

            /***/
        },
        /* 24 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;

            var _visitor = __webpack_require__(25);

            var _visitor2 = _interopRequireDefault(_visitor);

            function WhitespaceControl() {
                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                this.options = options;
            }

            WhitespaceControl.prototype = new _visitor2['default']();

            WhitespaceControl.prototype.Program = function (program) {
                var doStandalone = !this.options.ignoreStandalone;

                var isRoot = !this.isRootSeen;
                this.isRootSeen = true;

                var body = program.body;
                for (var i = 0, l = body.length; i < l; i++) {
                    var current = body[i],
                        strip = this.accept(current);

                    if (!strip) {
                        continue;
                    }

                    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
                        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
                        openStandalone = strip.openStandalone && _isPrevWhitespace,
                        closeStandalone = strip.closeStandalone && _isNextWhitespace,
                        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

                    if (strip.close) {
                        omitRight(body, i, true);
                    }
                    if (strip.open) {
                        omitLeft(body, i, true);
                    }

                    if (doStandalone && inlineStandalone) {
                        omitRight(body, i);

                        if (omitLeft(body, i)) {
                            // If we are on a standalone node, save the indent info for partials
                            if (current.type === 'PartialStatement') {
                                // Pull out the whitespace from the final line
                                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
                            }
                        }
                    }
                    if (doStandalone && openStandalone) {
                        omitRight((current.program || current.inverse).body);

                        // Strip out the previous content node if it's whitespace only
                        omitLeft(body, i);
                    }
                    if (doStandalone && closeStandalone) {
                        // Always strip the next node
                        omitRight(body, i);

                        omitLeft((current.inverse || current.program).body);
                    }
                }

                return program;
            };

            WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
                this.accept(block.program);
                this.accept(block.inverse);

                // Find the inverse program that is involed with whitespace stripping.
                var program = block.program || block.inverse,
                    inverse = block.program && block.inverse,
                    firstInverse = inverse,
                    lastInverse = inverse;

                if (inverse && inverse.chained) {
                    firstInverse = inverse.body[0].program;

                    // Walk the inverse chain to find the last inverse that is actually in the chain.
                    while (lastInverse.chained) {
                        lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
                    }
                }

                var strip = {
                    open: block.openStrip.open,
                    close: block.closeStrip.close,

                    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
                    // so our parent can determine if we actually are standalone
                    openStandalone: isNextWhitespace(program.body),
                    closeStandalone: isPrevWhitespace((firstInverse || program).body)
                };

                if (block.openStrip.close) {
                    omitRight(program.body, null, true);
                }

                if (inverse) {
                    var inverseStrip = block.inverseStrip;

                    if (inverseStrip.open) {
                        omitLeft(program.body, null, true);
                    }

                    if (inverseStrip.close) {
                        omitRight(firstInverse.body, null, true);
                    }
                    if (block.closeStrip.open) {
                        omitLeft(lastInverse.body, null, true);
                    }

                    // Find standalone else statments
                    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
                        omitLeft(program.body);
                        omitRight(firstInverse.body);
                    }
                } else if (block.closeStrip.open) {
                    omitLeft(program.body, null, true);
                }

                return strip;
            };

            WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
                return mustache.strip;
            };

            WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
                /* istanbul ignore next */
                var strip = node.strip || {};
                return {
                    inlineStandalone: true,
                    open: strip.open,
                    close: strip.close
                };
            };

            function isPrevWhitespace(body, i, isRoot) {
                if (i === undefined) {
                    i = body.length;
                }

                // Nodes that end with newlines are considered whitespace (but are special
                // cased for strip operations)
                var prev = body[i - 1],
                    sibling = body[i - 2];
                if (!prev) {
                    return isRoot;
                }

                if (prev.type === 'ContentStatement') {
                    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
                }
            }

            function isNextWhitespace(body, i, isRoot) {
                if (i === undefined) {
                    i = -1;
                }

                var next = body[i + 1],
                    sibling = body[i + 2];
                if (!next) {
                    return isRoot;
                }

                if (next.type === 'ContentStatement') {
                    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
                }
            }

            // Marks the node to the right of the position as omitted.
            // I.e. {{foo}}' ' will mark the ' ' node as omitted.
            //
            // If i is undefined, then the first child will be marked as such.
            //
            // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
            // content is met.
            function omitRight(body, i, multiple) {
                var current = body[i == null ? 0 : i + 1];
                if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
                    return;
                }

                var original = current.value;
                current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
                current.rightStripped = current.value !== original;
            }

            // Marks the node to the left of the position as omitted.
            // I.e. ' '{{foo}} will mark the ' ' node as omitted.
            //
            // If i is undefined then the last child will be marked as such.
            //
            // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
            // content is met.
            function omitLeft(body, i, multiple) {
                var current = body[i == null ? body.length - 1 : i - 1];
                if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
                    return;
                }

                // We omit the last node if it's whitespace only and not preceeded by a non-content node.
                var original = current.value;
                current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
                current.leftStripped = current.value !== original;
                return current.leftStripped;
            }

            exports['default'] = WhitespaceControl;
            module.exports = exports['default'];

            /***/
        },
        /* 25 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;

            var _exception = __webpack_require__(6);

            var _exception2 = _interopRequireDefault(_exception);

            function Visitor() {
                this.parents = [];
            }

            Visitor.prototype = {
                constructor: Visitor,
                mutating: false,

                // Visits a given value. If mutating, will replace the value if necessary.
                acceptKey: function acceptKey(node, name) {
                    var value = this.accept(node[name]);
                    if (this.mutating) {
                        // Hacky sanity check: This may have a few false positives for type for the helper
                        // methods but will generally do the right thing without a lot of overhead.
                        if (value && !Visitor.prototype[value.type]) {
                            throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
                        }
                        node[name] = value;
                    }
                },

                // Performs an accept operation with added sanity check to ensure
                // required keys are not removed.
                acceptRequired: function acceptRequired(node, name) {
                    this.acceptKey(node, name);

                    if (!node[name]) {
                        throw new _exception2['default'](node.type + ' requires ' + name);
                    }
                },

                // Traverses a given array. If mutating, empty respnses will be removed
                // for child elements.
                acceptArray: function acceptArray(array) {
                    for (var i = 0, l = array.length; i < l; i++) {
                        this.acceptKey(array, i);

                        if (!array[i]) {
                            array.splice(i, 1);
                            i--;
                            l--;
                        }
                    }
                },

                accept: function accept(object) {
                    if (!object) {
                        return;
                    }

                    /* istanbul ignore next: Sanity code */
                    if (!this[object.type]) {
                        throw new _exception2['default']('Unknown type: ' + object.type, object);
                    }

                    if (this.current) {
                        this.parents.unshift(this.current);
                    }
                    this.current = object;

                    var ret = this[object.type](object);

                    this.current = this.parents.shift();

                    if (!this.mutating || ret) {
                        return ret;
                    } else if (ret !== false) {
                        return object;
                    }
                },

                Program: function Program(program) {
                    this.acceptArray(program.body);
                },

                MustacheStatement: visitSubExpression,
                Decorator: visitSubExpression,

                BlockStatement: visitBlock,
                DecoratorBlock: visitBlock,

                PartialStatement: visitPartial,
                PartialBlockStatement: function PartialBlockStatement(partial) {
                    visitPartial.call(this, partial);

                    this.acceptKey(partial, 'program');
                },

                ContentStatement: function ContentStatement() /* content */ {
                },
                CommentStatement: function CommentStatement() /* comment */ {
                },

                SubExpression: visitSubExpression,

                PathExpression: function PathExpression() /* path */ {
                },

                StringLiteral: function StringLiteral() /* string */ {
                },
                NumberLiteral: function NumberLiteral() /* number */ {
                },
                BooleanLiteral: function BooleanLiteral() /* bool */ {
                },
                UndefinedLiteral: function UndefinedLiteral() /* literal */ {
                },
                NullLiteral: function NullLiteral() /* literal */ {
                },

                Hash: function Hash(hash) {
                    this.acceptArray(hash.pairs);
                },
                HashPair: function HashPair(pair) {
                    this.acceptRequired(pair, 'value');
                }
            };

            function visitSubExpression(mustache) {
                this.acceptRequired(mustache, 'path');
                this.acceptArray(mustache.params);
                this.acceptKey(mustache, 'hash');
            }

            function visitBlock(block) {
                visitSubExpression.call(this, block);

                this.acceptKey(block, 'program');
                this.acceptKey(block, 'inverse');
            }

            function visitPartial(partial) {
                this.acceptRequired(partial, 'name');
                this.acceptArray(partial.params);
                this.acceptKey(partial, 'hash');
            }

            exports['default'] = Visitor;
            module.exports = exports['default'];

            /***/
        },
        /* 26 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;
            exports.SourceLocation = SourceLocation;
            exports.id = id;
            exports.stripFlags = stripFlags;
            exports.stripComment = stripComment;
            exports.preparePath = preparePath;
            exports.prepareMustache = prepareMustache;
            exports.prepareRawBlock = prepareRawBlock;
            exports.prepareBlock = prepareBlock;
            exports.prepareProgram = prepareProgram;
            exports.preparePartialBlock = preparePartialBlock;

            var _exception = __webpack_require__(6);

            var _exception2 = _interopRequireDefault(_exception);

            function validateClose(open, close) {
                close = close.path ? close.path.original : close;

                if (open.path.original !== close) {
                    var errorNode = {loc: open.path.loc};

                    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
                }
            }

            function SourceLocation(source, locInfo) {
                this.source = source;
                this.start = {
                    line: locInfo.first_line,
                    column: locInfo.first_column
                };
                this.end = {
                    line: locInfo.last_line,
                    column: locInfo.last_column
                };
            }

            function id(token) {
                if (/^\[.*\]$/.test(token)) {
                    return token.substr(1, token.length - 2);
                } else {
                    return token;
                }
            }

            function stripFlags(open, close) {
                return {
                    open: open.charAt(2) === '~',
                    close: close.charAt(close.length - 3) === '~'
                };
            }

            function stripComment(comment) {
                return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
            }

            function preparePath(data, parts, loc) {
                loc = this.locInfo(loc);

                var original = data ? '@' : '',
                    dig = [],
                    depth = 0,
                    depthString = '';

                for (var i = 0, l = parts.length; i < l; i++) {
                    var part = parts[i].part,

                        // If we have [] syntax then we do not treat path references as operators,
                        // i.e. foo.[this] resolves to approximately context.foo['this']
                        isLiteral = parts[i].original !== part;
                    original += (parts[i].separator || '') + part;

                    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
                        if (dig.length > 0) {
                            throw new _exception2['default']('Invalid path: ' + original, {loc: loc});
                        } else if (part === '..') {
                            depth++;
                            depthString += '../';
                        }
                    } else {
                        dig.push(part);
                    }
                }

                return {
                    type: 'PathExpression',
                    data: data,
                    depth: depth,
                    parts: dig,
                    original: original,
                    loc: loc
                };
            }

            function prepareMustache(path, params, hash, open, strip, locInfo) {
                // Must use charAt to support IE pre-10
                var escapeFlag = open.charAt(3) || open.charAt(2),
                    escaped = escapeFlag !== '{' && escapeFlag !== '&';

                var decorator = /\*/.test(open);
                return {
                    type: decorator ? 'Decorator' : 'MustacheStatement',
                    path: path,
                    params: params,
                    hash: hash,
                    escaped: escaped,
                    strip: strip,
                    loc: this.locInfo(locInfo)
                };
            }

            function prepareRawBlock(openRawBlock, contents, close, locInfo) {
                validateClose(openRawBlock, close);

                locInfo = this.locInfo(locInfo);
                var program = {
                    type: 'Program',
                    body: contents,
                    strip: {},
                    loc: locInfo
                };

                return {
                    type: 'BlockStatement',
                    path: openRawBlock.path,
                    params: openRawBlock.params,
                    hash: openRawBlock.hash,
                    program: program,
                    openStrip: {},
                    inverseStrip: {},
                    closeStrip: {},
                    loc: locInfo
                };
            }

            function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
                if (close && close.path) {
                    validateClose(openBlock, close);
                }

                var decorator = /\*/.test(openBlock.open);

                program.blockParams = openBlock.blockParams;

                var inverse = undefined,
                    inverseStrip = undefined;

                if (inverseAndProgram) {
                    if (decorator) {
                        throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
                    }

                    if (inverseAndProgram.chain) {
                        inverseAndProgram.program.body[0].closeStrip = close.strip;
                    }

                    inverseStrip = inverseAndProgram.strip;
                    inverse = inverseAndProgram.program;
                }

                if (inverted) {
                    inverted = inverse;
                    inverse = program;
                    program = inverted;
                }

                return {
                    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
                    path: openBlock.path,
                    params: openBlock.params,
                    hash: openBlock.hash,
                    program: program,
                    inverse: inverse,
                    openStrip: openBlock.strip,
                    inverseStrip: inverseStrip,
                    closeStrip: close && close.strip,
                    loc: this.locInfo(locInfo)
                };
            }

            function prepareProgram(statements, loc) {
                if (!loc && statements.length) {
                    var firstLoc = statements[0].loc,
                        lastLoc = statements[statements.length - 1].loc;

                    /* istanbul ignore else */
                    if (firstLoc && lastLoc) {
                        loc = {
                            source: firstLoc.source,
                            start: {
                                line: firstLoc.start.line,
                                column: firstLoc.start.column
                            },
                            end: {
                                line: lastLoc.end.line,
                                column: lastLoc.end.column
                            }
                        };
                    }
                }

                return {
                    type: 'Program',
                    body: statements,
                    strip: {},
                    loc: loc
                };
            }

            function preparePartialBlock(open, program, close, locInfo) {
                validateClose(open, close);

                return {
                    type: 'PartialBlockStatement',
                    name: open.path,
                    params: open.params,
                    hash: open.hash,
                    program: program,
                    openStrip: open.strip,
                    closeStrip: close && close.strip,
                    loc: this.locInfo(locInfo)
                };
            }

            /***/
        },
        /* 27 */
        /***/ function (module, exports, __webpack_require__) {

            /* eslint-disable new-cap */

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;
            exports.Compiler = Compiler;
            exports.precompile = precompile;
            exports.compile = compile;

            var _exception = __webpack_require__(6);

            var _exception2 = _interopRequireDefault(_exception);

            var _utils = __webpack_require__(5);

            var _ast = __webpack_require__(21);

            var _ast2 = _interopRequireDefault(_ast);

            var slice = [].slice;

            function Compiler() {
            }

            // the foundHelper register will disambiguate helper lookup from finding a
            // function in a context. This is necessary for mustache compatibility, which
            // requires that context functions in blocks are evaluated by blockHelperMissing,
            // and then proceed as if the resulting value was provided to blockHelperMissing.

            Compiler.prototype = {
                compiler: Compiler,

                equals: function equals(other) {
                    var len = this.opcodes.length;
                    if (other.opcodes.length !== len) {
                        return false;
                    }

                    for (var i = 0; i < len; i++) {
                        var opcode = this.opcodes[i],
                            otherOpcode = other.opcodes[i];
                        if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
                            return false;
                        }
                    }

                    // We know that length is the same between the two arrays because they are directly tied
                    // to the opcode behavior above.
                    len = this.children.length;
                    for (var i = 0; i < len; i++) {
                        if (!this.children[i].equals(other.children[i])) {
                            return false;
                        }
                    }

                    return true;
                },

                guid: 0,

                compile: function compile(program, options) {
                    this.sourceNode = [];
                    this.opcodes = [];
                    this.children = [];
                    this.options = options;
                    this.stringParams = options.stringParams;
                    this.trackIds = options.trackIds;

                    options.blockParams = options.blockParams || [];

                    // These changes will propagate to the other compiler components
                    var knownHelpers = options.knownHelpers;
                    options.knownHelpers = {
                        'helperMissing': true,
                        'blockHelperMissing': true,
                        'each': true,
                        'if': true,
                        'unless': true,
                        'with': true,
                        'log': true,
                        'lookup': true
                    };
                    if (knownHelpers) {
                        for (var _name in knownHelpers) {
                            /* istanbul ignore else */
                            if (_name in knownHelpers) {
                                options.knownHelpers[_name] = knownHelpers[_name];
                            }
                        }
                    }

                    return this.accept(program);
                },

                compileProgram: function compileProgram(program) {
                    var childCompiler = new this.compiler(),
                        // eslint-disable-line new-cap
                        result = childCompiler.compile(program, this.options),
                        guid = this.guid++;

                    this.usePartial = this.usePartial || result.usePartial;

                    this.children[guid] = result;
                    this.useDepths = this.useDepths || result.useDepths;

                    return guid;
                },

                accept: function accept(node) {
                    /* istanbul ignore next: Sanity code */
                    if (!this[node.type]) {
                        throw new _exception2['default']('Unknown type: ' + node.type, node);
                    }

                    this.sourceNode.unshift(node);
                    var ret = this[node.type](node);
                    this.sourceNode.shift();
                    return ret;
                },

                Program: function Program(program) {
                    this.options.blockParams.unshift(program.blockParams);

                    var body = program.body,
                        bodyLength = body.length;
                    for (var i = 0; i < bodyLength; i++) {
                        this.accept(body[i]);
                    }

                    this.options.blockParams.shift();

                    this.isSimple = bodyLength === 1;
                    this.blockParams = program.blockParams ? program.blockParams.length : 0;

                    return this;
                },

                BlockStatement: function BlockStatement(block) {
                    transformLiteralToPath(block);

                    var program = block.program,
                        inverse = block.inverse;

                    program = program && this.compileProgram(program);
                    inverse = inverse && this.compileProgram(inverse);

                    var type = this.classifySexpr(block);

                    if (type === 'helper') {
                        this.helperSexpr(block, program, inverse);
                    } else if (type === 'simple') {
                        this.simpleSexpr(block);

                        // now that the simple mustache is resolved, we need to
                        // evaluate it by executing `blockHelperMissing`
                        this.opcode('pushProgram', program);
                        this.opcode('pushProgram', inverse);
                        this.opcode('emptyHash');
                        this.opcode('blockValue', block.path.original);
                    } else {
                        this.ambiguousSexpr(block, program, inverse);

                        // now that the simple mustache is resolved, we need to
                        // evaluate it by executing `blockHelperMissing`
                        this.opcode('pushProgram', program);
                        this.opcode('pushProgram', inverse);
                        this.opcode('emptyHash');
                        this.opcode('ambiguousBlockValue');
                    }

                    this.opcode('append');
                },

                DecoratorBlock: function DecoratorBlock(decorator) {
                    var program = decorator.program && this.compileProgram(decorator.program);
                    var params = this.setupFullMustacheParams(decorator, program, undefined),
                        path = decorator.path;

                    this.useDecorators = true;
                    this.opcode('registerDecorator', params.length, path.original);
                },

                PartialStatement: function PartialStatement(partial) {
                    this.usePartial = true;

                    var program = partial.program;
                    if (program) {
                        program = this.compileProgram(partial.program);
                    }

                    var params = partial.params;
                    if (params.length > 1) {
                        throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
                    } else if (!params.length) {
                        if (this.options.explicitPartialContext) {
                            this.opcode('pushLiteral', 'undefined');
                        } else {
                            params.push({type: 'PathExpression', parts: [], depth: 0});
                        }
                    }

                    var partialName = partial.name.original,
                        isDynamic = partial.name.type === 'SubExpression';
                    if (isDynamic) {
                        this.accept(partial.name);
                    }

                    this.setupFullMustacheParams(partial, program, undefined, true);

                    var indent = partial.indent || '';
                    if (this.options.preventIndent && indent) {
                        this.opcode('appendContent', indent);
                        indent = '';
                    }

                    this.opcode('invokePartial', isDynamic, partialName, indent);
                    this.opcode('append');
                },
                PartialBlockStatement: function PartialBlockStatement(partialBlock) {
                    this.PartialStatement(partialBlock);
                },

                MustacheStatement: function MustacheStatement(mustache) {
                    this.SubExpression(mustache);

                    if (mustache.escaped && !this.options.noEscape) {
                        this.opcode('appendEscaped');
                    } else {
                        this.opcode('append');
                    }
                },
                Decorator: function Decorator(decorator) {
                    this.DecoratorBlock(decorator);
                },

                ContentStatement: function ContentStatement(content) {
                    if (content.value) {
                        this.opcode('appendContent', content.value);
                    }
                },

                CommentStatement: function CommentStatement() {
                },

                SubExpression: function SubExpression(sexpr) {
                    transformLiteralToPath(sexpr);
                    var type = this.classifySexpr(sexpr);

                    if (type === 'simple') {
                        this.simpleSexpr(sexpr);
                    } else if (type === 'helper') {
                        this.helperSexpr(sexpr);
                    } else {
                        this.ambiguousSexpr(sexpr);
                    }
                },
                ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
                    var path = sexpr.path,
                        name = path.parts[0],
                        isBlock = program != null || inverse != null;

                    this.opcode('getContext', path.depth);

                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);

                    path.strict = true;
                    this.accept(path);

                    this.opcode('invokeAmbiguous', name, isBlock);
                },

                simpleSexpr: function simpleSexpr(sexpr) {
                    var path = sexpr.path;
                    path.strict = true;
                    this.accept(path);
                    this.opcode('resolvePossibleLambda');
                },

                helperSexpr: function helperSexpr(sexpr, program, inverse) {
                    var params = this.setupFullMustacheParams(sexpr, program, inverse),
                        path = sexpr.path,
                        name = path.parts[0];

                    if (this.options.knownHelpers[name]) {
                        this.opcode('invokeKnownHelper', params.length, name);
                    } else if (this.options.knownHelpersOnly) {
                        throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
                    } else {
                        path.strict = true;
                        path.falsy = true;

                        this.accept(path);
                        this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
                    }
                },

                PathExpression: function PathExpression(path) {
                    this.addDepth(path.depth);
                    this.opcode('getContext', path.depth);

                    var name = path.parts[0],
                        scoped = _ast2['default'].helpers.scopedId(path),
                        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

                    if (blockParamId) {
                        this.opcode('lookupBlockParam', blockParamId, path.parts);
                    } else if (!name) {
                        // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
                        this.opcode('pushContext');
                    } else if (path.data) {
                        this.options.data = true;
                        this.opcode('lookupData', path.depth, path.parts, path.strict);
                    } else {
                        this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
                    }
                },

                StringLiteral: function StringLiteral(string) {
                    this.opcode('pushString', string.value);
                },

                NumberLiteral: function NumberLiteral(number) {
                    this.opcode('pushLiteral', number.value);
                },

                BooleanLiteral: function BooleanLiteral(bool) {
                    this.opcode('pushLiteral', bool.value);
                },

                UndefinedLiteral: function UndefinedLiteral() {
                    this.opcode('pushLiteral', 'undefined');
                },

                NullLiteral: function NullLiteral() {
                    this.opcode('pushLiteral', 'null');
                },

                Hash: function Hash(hash) {
                    var pairs = hash.pairs,
                        i = 0,
                        l = pairs.length;

                    this.opcode('pushHash');

                    for (; i < l; i++) {
                        this.pushParam(pairs[i].value);
                    }
                    while (i--) {
                        this.opcode('assignToHash', pairs[i].key);
                    }
                    this.opcode('popHash');
                },

                // HELPERS
                opcode: function opcode(name) {
                    this.opcodes.push({opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc});
                },

                addDepth: function addDepth(depth) {
                    if (!depth) {
                        return;
                    }

                    this.useDepths = true;
                },

                classifySexpr: function classifySexpr(sexpr) {
                    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

                    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

                    // a mustache is an eligible helper if:
                    // * its id is simple (a single part, not `this` or `..`)
                    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

                    // if a mustache is an eligible helper but not a definite
                    // helper, it is ambiguous, and will be resolved in a later
                    // pass or at runtime.
                    var isEligible = !isBlockParam && (isHelper || isSimple);

                    // if ambiguous, we can possibly resolve the ambiguity now
                    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
                    if (isEligible && !isHelper) {
                        var _name2 = sexpr.path.parts[0],
                            options = this.options;

                        if (options.knownHelpers[_name2]) {
                            isHelper = true;
                        } else if (options.knownHelpersOnly) {
                            isEligible = false;
                        }
                    }

                    if (isHelper) {
                        return 'helper';
                    } else if (isEligible) {
                        return 'ambiguous';
                    } else {
                        return 'simple';
                    }
                },

                pushParams: function pushParams(params) {
                    for (var i = 0, l = params.length; i < l; i++) {
                        this.pushParam(params[i]);
                    }
                },

                pushParam: function pushParam(val) {
                    var value = val.value != null ? val.value : val.original || '';

                    if (this.stringParams) {
                        if (value.replace) {
                            value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
                        }

                        if (val.depth) {
                            this.addDepth(val.depth);
                        }
                        this.opcode('getContext', val.depth || 0);
                        this.opcode('pushStringParam', value, val.type);

                        if (val.type === 'SubExpression') {
                            // SubExpressions get evaluated and passed in
                            // in string params mode.
                            this.accept(val);
                        }
                    } else {
                        if (this.trackIds) {
                            var blockParamIndex = undefined;
                            if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
                                blockParamIndex = this.blockParamIndex(val.parts[0]);
                            }
                            if (blockParamIndex) {
                                var blockParamChild = val.parts.slice(1).join('.');
                                this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
                            } else {
                                value = val.original || value;
                                if (value.replace) {
                                    value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
                                }

                                this.opcode('pushId', val.type, value);
                            }
                        }
                        this.accept(val);
                    }
                },

                setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
                    var params = sexpr.params;
                    this.pushParams(params);

                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);

                    if (sexpr.hash) {
                        this.accept(sexpr.hash);
                    } else {
                        this.opcode('emptyHash', omitEmpty);
                    }

                    return params;
                },

                blockParamIndex: function blockParamIndex(name) {
                    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
                        var blockParams = this.options.blockParams[depth],
                            param = blockParams && _utils.indexOf(blockParams, name);
                        if (blockParams && param >= 0) {
                            return [depth, param];
                        }
                    }
                }
            };

            function precompile(input, options, env) {
                if (input == null || typeof input !== 'string' && input.type !== 'Program') {
                    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
                }

                options = options || {};
                if (!('data' in options)) {
                    options.data = true;
                }
                if (options.compat) {
                    options.useDepths = true;
                }

                var ast = env.parse(input, options),
                    environment = new env.Compiler().compile(ast, options);
                return new env.JavaScriptCompiler().compile(environment, options);
            }

            function compile(input, options, env) {
                if (options === undefined) options = {};

                if (input == null || typeof input !== 'string' && input.type !== 'Program') {
                    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
                }

                if (!('data' in options)) {
                    options.data = true;
                }
                if (options.compat) {
                    options.useDepths = true;
                }

                var compiled = undefined;

                function compileInput() {
                    var ast = env.parse(input, options),
                        environment = new env.Compiler().compile(ast, options),
                        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
                    return env.template(templateSpec);
                }

                // Template is only compiled on first use and cached after that point.
                function ret(context, execOptions) {
                    if (!compiled) {
                        compiled = compileInput();
                    }
                    return compiled.call(this, context, execOptions);
                }

                ret._setup = function (setupOptions) {
                    if (!compiled) {
                        compiled = compileInput();
                    }
                    return compiled._setup(setupOptions);
                };
                ret._child = function (i, data, blockParams, depths) {
                    if (!compiled) {
                        compiled = compileInput();
                    }
                    return compiled._child(i, data, blockParams, depths);
                };
                return ret;
            }

            function argEquals(a, b) {
                if (a === b) {
                    return true;
                }

                if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
                    for (var i = 0; i < a.length; i++) {
                        if (!argEquals(a[i], b[i])) {
                            return false;
                        }
                    }
                    return true;
                }
            }

            function transformLiteralToPath(sexpr) {
                if (!sexpr.path.parts) {
                    var literal = sexpr.path;
                    // Casting to string here to make false and 0 literal values play nicely with the rest
                    // of the system.
                    sexpr.path = {
                        type: 'PathExpression',
                        data: false,
                        depth: 0,
                        parts: [literal.original + ''],
                        original: literal.original + '',
                        loc: literal.loc
                    };
                }
            }

            /***/
        },
        /* 28 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            var _interopRequireDefault = __webpack_require__(1)['default'];

            exports.__esModule = true;

            var _base = __webpack_require__(4);

            var _exception = __webpack_require__(6);

            var _exception2 = _interopRequireDefault(_exception);

            var _utils = __webpack_require__(5);

            var _codeGen = __webpack_require__(29);

            var _codeGen2 = _interopRequireDefault(_codeGen);

            function Literal(value) {
                this.value = value;
            }

            function JavaScriptCompiler() {
            }

            JavaScriptCompiler.prototype = {
                // PUBLIC API: You can override these methods in a subclass to provide
                // alternative compiled forms for name lookup and buffering semantics
                nameLookup: function nameLookup(parent, name /* , type*/) {
                    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
                        return [parent, '.', name];
                    } else {
                        return [parent, '[', JSON.stringify(name), ']'];
                    }
                },
                depthedLookup: function depthedLookup(name) {
                    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
                },

                compilerInfo: function compilerInfo() {
                    var revision = _base.COMPILER_REVISION,
                        versions = _base.REVISION_CHANGES[revision];
                    return [revision, versions];
                },

                appendToBuffer: function appendToBuffer(source, location, explicit) {
                    // Force a source as this simplifies the merge logic.
                    if (!_utils.isArray(source)) {
                        source = [source];
                    }
                    source = this.source.wrap(source, location);

                    if (this.environment.isSimple) {
                        return ['return ', source, ';'];
                    } else if (explicit) {
                        // This is a case where the buffer operation occurs as a child of another
                        // construct, generally braces. We have to explicitly output these buffer
                        // operations to ensure that the emitted code goes in the correct location.
                        return ['buffer += ', source, ';'];
                    } else {
                        source.appendToBuffer = true;
                        return source;
                    }
                },

                initializeBuffer: function initializeBuffer() {
                    return this.quotedString('');
                },
                // END PUBLIC API

                compile: function compile(environment, options, context, asObject) {
                    this.environment = environment;
                    this.options = options;
                    this.stringParams = this.options.stringParams;
                    this.trackIds = this.options.trackIds;
                    this.precompile = !asObject;

                    this.name = this.environment.name;
                    this.isChild = !!context;
                    this.context = context || {
                        decorators: [],
                        programs: [],
                        environments: []
                    };

                    this.preamble();

                    this.stackSlot = 0;
                    this.stackVars = [];
                    this.aliases = {};
                    this.registers = {list: []};
                    this.hashes = [];
                    this.compileStack = [];
                    this.inlineStack = [];
                    this.blockParams = [];

                    this.compileChildren(environment, options);

                    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
                    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

                    var opcodes = environment.opcodes,
                        opcode = undefined,
                        firstLoc = undefined,
                        i = undefined,
                        l = undefined;

                    for (i = 0, l = opcodes.length; i < l; i++) {
                        opcode = opcodes[i];

                        this.source.currentLocation = opcode.loc;
                        firstLoc = firstLoc || opcode.loc;
                        this[opcode.opcode].apply(this, opcode.args);
                    }

                    // Flush any trailing content that might be pending.
                    this.source.currentLocation = firstLoc;
                    this.pushSource('');

                    /* istanbul ignore next */
                    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
                        throw new _exception2['default']('Compile completed with content left on stack');
                    }

                    if (!this.decorators.isEmpty()) {
                        this.useDecorators = true;

                        this.decorators.prepend('var decorators = container.decorators;\n');
                        this.decorators.push('return fn;');

                        if (asObject) {
                            this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
                        } else {
                            this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
                            this.decorators.push('}\n');
                            this.decorators = this.decorators.merge();
                        }
                    } else {
                        this.decorators = undefined;
                    }

                    var fn = this.createFunctionContext(asObject);
                    if (!this.isChild) {
                        var ret = {
                            compiler: this.compilerInfo(),
                            main: fn
                        };

                        if (this.decorators) {
                            ret.main_d = this.decorators; // eslint-disable-line camelcase
                            ret.useDecorators = true;
                        }

                        var _context = this.context;
                        var programs = _context.programs;
                        var decorators = _context.decorators;

                        for (i = 0, l = programs.length; i < l; i++) {
                            if (programs[i]) {
                                ret[i] = programs[i];
                                if (decorators[i]) {
                                    ret[i + '_d'] = decorators[i];
                                    ret.useDecorators = true;
                                }
                            }
                        }

                        if (this.environment.usePartial) {
                            ret.usePartial = true;
                        }
                        if (this.options.data) {
                            ret.useData = true;
                        }
                        if (this.useDepths) {
                            ret.useDepths = true;
                        }
                        if (this.useBlockParams) {
                            ret.useBlockParams = true;
                        }
                        if (this.options.compat) {
                            ret.compat = true;
                        }

                        if (!asObject) {
                            ret.compiler = JSON.stringify(ret.compiler);

                            this.source.currentLocation = {start: {line: 1, column: 0}};
                            ret = this.objectLiteral(ret);

                            if (options.srcName) {
                                ret = ret.toStringWithSourceMap({file: options.destName});
                                ret.map = ret.map && ret.map.toString();
                            } else {
                                ret = ret.toString();
                            }
                        } else {
                            ret.compilerOptions = this.options;
                        }

                        return ret;
                    } else {
                        return fn;
                    }
                },

                preamble: function preamble() {
                    // track the last context pushed into place to allow skipping the
                    // getContext opcode when it would be a noop
                    this.lastContext = 0;
                    this.source = new _codeGen2['default'](this.options.srcName);
                    this.decorators = new _codeGen2['default'](this.options.srcName);
                },

                createFunctionContext: function createFunctionContext(asObject) {
                    var varDeclarations = '';

                    var locals = this.stackVars.concat(this.registers.list);
                    if (locals.length > 0) {
                        varDeclarations += ', ' + locals.join(', ');
                    }

                    // Generate minimizer alias mappings
                    //
                    // When using true SourceNodes, this will update all references to the given alias
                    // as the source nodes are reused in situ. For the non-source node compilation mode,
                    // aliases will not be used, but this case is already being run on the client and
                    // we aren't concern about minimizing the template size.
                    var aliasCount = 0;
                    for (var alias in this.aliases) {
                        // eslint-disable-line guard-for-in
                        var node = this.aliases[alias];

                        if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
                            varDeclarations += ', alias' + ++aliasCount + '=' + alias;
                            node.children[0] = 'alias' + aliasCount;
                        }
                    }

                    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

                    if (this.useBlockParams || this.useDepths) {
                        params.push('blockParams');
                    }
                    if (this.useDepths) {
                        params.push('depths');
                    }

                    // Perform a second pass over the output to merge content when possible
                    var source = this.mergeSource(varDeclarations);

                    if (asObject) {
                        params.push(source);

                        return Function.apply(this, params);
                    } else {
                        return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
                    }
                },
                mergeSource: function mergeSource(varDeclarations) {
                    var isSimple = this.environment.isSimple,
                        appendOnly = !this.forceBuffer,
                        appendFirst = undefined,
                        sourceSeen = undefined,
                        bufferStart = undefined,
                        bufferEnd = undefined;
                    this.source.each(function (line) {
                        if (line.appendToBuffer) {
                            if (bufferStart) {
                                line.prepend('  + ');
                            } else {
                                bufferStart = line;
                            }
                            bufferEnd = line;
                        } else {
                            if (bufferStart) {
                                if (!sourceSeen) {
                                    appendFirst = true;
                                } else {
                                    bufferStart.prepend('buffer += ');
                                }
                                bufferEnd.add(';');
                                bufferStart = bufferEnd = undefined;
                            }

                            sourceSeen = true;
                            if (!isSimple) {
                                appendOnly = false;
                            }
                        }
                    });

                    if (appendOnly) {
                        if (bufferStart) {
                            bufferStart.prepend('return ');
                            bufferEnd.add(';');
                        } else if (!sourceSeen) {
                            this.source.push('return "";');
                        }
                    } else {
                        varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

                        if (bufferStart) {
                            bufferStart.prepend('return buffer + ');
                            bufferEnd.add(';');
                        } else {
                            this.source.push('return buffer;');
                        }
                    }

                    if (varDeclarations) {
                        this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
                    }

                    return this.source.merge();
                },

                // [blockValue]
                //
                // On stack, before: hash, inverse, program, value
                // On stack, after: return value of blockHelperMissing
                //
                // The purpose of this opcode is to take a block of the form
                // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
                // replace it on the stack with the result of properly
                // invoking blockHelperMissing.
                blockValue: function blockValue(name) {
                    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
                        params = [this.contextName(0)];
                    this.setupHelperArgs(name, 0, params);

                    var blockName = this.popStack();
                    params.splice(1, 0, blockName);

                    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
                },

                // [ambiguousBlockValue]
                //
                // On stack, before: hash, inverse, program, value
                // Compiler value, before: lastHelper=value of last found helper, if any
                // On stack, after, if no lastHelper: same as [blockValue]
                // On stack, after, if lastHelper: value
                ambiguousBlockValue: function ambiguousBlockValue() {
                    // We're being a bit cheeky and reusing the options value from the prior exec
                    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
                        params = [this.contextName(0)];
                    this.setupHelperArgs('', 0, params, true);

                    this.flushInline();

                    var current = this.topStack();
                    params.splice(1, 0, current);

                    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
                },

                // [appendContent]
                //
                // On stack, before: ...
                // On stack, after: ...
                //
                // Appends the string value of `content` to the current buffer
                appendContent: function appendContent(content) {
                    if (this.pendingContent) {
                        content = this.pendingContent + content;
                    } else {
                        this.pendingLocation = this.source.currentLocation;
                    }

                    this.pendingContent = content;
                },

                // [append]
                //
                // On stack, before: value, ...
                // On stack, after: ...
                //
                // Coerces `value` to a String and appends it to the current buffer.
                //
                // If `value` is truthy, or 0, it is coerced into a string and appended
                // Otherwise, the empty string is appended
                append: function append() {
                    if (this.isInline()) {
                        this.replaceStack(function (current) {
                            return [' != null ? ', current, ' : ""'];
                        });

                        this.pushSource(this.appendToBuffer(this.popStack()));
                    } else {
                        var local = this.popStack();
                        this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
                        if (this.environment.isSimple) {
                            this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
                        }
                    }
                },

                // [appendEscaped]
                //
                // On stack, before: value, ...
                // On stack, after: ...
                //
                // Escape `value` and append it to the buffer
                appendEscaped: function appendEscaped() {
                    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
                },

                // [getContext]
                //
                // On stack, before: ...
                // On stack, after: ...
                // Compiler value, after: lastContext=depth
                //
                // Set the value of the `lastContext` compiler value to the depth
                getContext: function getContext(depth) {
                    this.lastContext = depth;
                },

                // [pushContext]
                //
                // On stack, before: ...
                // On stack, after: currentContext, ...
                //
                // Pushes the value of the current context onto the stack.
                pushContext: function pushContext() {
                    this.pushStackLiteral(this.contextName(this.lastContext));
                },

                // [lookupOnContext]
                //
                // On stack, before: ...
                // On stack, after: currentContext[name], ...
                //
                // Looks up the value of `name` on the current context and pushes
                // it onto the stack.
                lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
                    var i = 0;

                    if (!scoped && this.options.compat && !this.lastContext) {
                        // The depthed query is expected to handle the undefined logic for the root level that
                        // is implemented below, so we evaluate that directly in compat mode
                        this.push(this.depthedLookup(parts[i++]));
                    } else {
                        this.pushContext();
                    }

                    this.resolvePath('context', parts, i, falsy, strict);
                },

                // [lookupBlockParam]
                //
                // On stack, before: ...
                // On stack, after: blockParam[name], ...
                //
                // Looks up the value of `parts` on the given block param and pushes
                // it onto the stack.
                lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
                    this.useBlockParams = true;

                    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
                    this.resolvePath('context', parts, 1);
                },

                // [lookupData]
                //
                // On stack, before: ...
                // On stack, after: data, ...
                //
                // Push the data lookup operator
                lookupData: function lookupData(depth, parts, strict) {
                    if (!depth) {
                        this.pushStackLiteral('data');
                    } else {
                        this.pushStackLiteral('container.data(data, ' + depth + ')');
                    }

                    this.resolvePath('data', parts, 0, true, strict);
                },

                resolvePath: function resolvePath(type, parts, i, falsy, strict) {
                    // istanbul ignore next

                    var _this = this;

                    if (this.options.strict || this.options.assumeObjects) {
                        this.push(strictLookup(this.options.strict && strict, this, parts, type));
                        return;
                    }

                    var len = parts.length;
                    for (; i < len; i++) {
                        /* eslint-disable no-loop-func */
                        this.replaceStack(function (current) {
                            var lookup = _this.nameLookup(current, parts[i], type);
                            // We want to ensure that zero and false are handled properly if the context (falsy flag)
                            // needs to have the special handling for these values.
                            if (!falsy) {
                                return [' != null ? ', lookup, ' : ', current];
                            } else {
                                // Otherwise we can use generic falsy handling
                                return [' && ', lookup];
                            }
                        });
                        /* eslint-enable no-loop-func */
                    }
                },

                // [resolvePossibleLambda]
                //
                // On stack, before: value, ...
                // On stack, after: resolved value, ...
                //
                // If the `value` is a lambda, replace it on the stack by
                // the return value of the lambda
                resolvePossibleLambda: function resolvePossibleLambda() {
                    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
                },

                // [pushStringParam]
                //
                // On stack, before: ...
                // On stack, after: string, currentContext, ...
                //
                // This opcode is designed for use in string mode, which
                // provides the string value of a parameter along with its
                // depth rather than resolving it immediately.
                pushStringParam: function pushStringParam(string, type) {
                    this.pushContext();
                    this.pushString(type);

                    // If it's a subexpression, the string result
                    // will be pushed after this opcode.
                    if (type !== 'SubExpression') {
                        if (typeof string === 'string') {
                            this.pushString(string);
                        } else {
                            this.pushStackLiteral(string);
                        }
                    }
                },

                emptyHash: function emptyHash(omitEmpty) {
                    if (this.trackIds) {
                        this.push('{}'); // hashIds
                    }
                    if (this.stringParams) {
                        this.push('{}'); // hashContexts
                        this.push('{}'); // hashTypes
                    }
                    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
                },
                pushHash: function pushHash() {
                    if (this.hash) {
                        this.hashes.push(this.hash);
                    }
                    this.hash = {values: [], types: [], contexts: [], ids: []};
                },
                popHash: function popHash() {
                    var hash = this.hash;
                    this.hash = this.hashes.pop();

                    if (this.trackIds) {
                        this.push(this.objectLiteral(hash.ids));
                    }
                    if (this.stringParams) {
                        this.push(this.objectLiteral(hash.contexts));
                        this.push(this.objectLiteral(hash.types));
                    }

                    this.push(this.objectLiteral(hash.values));
                },

                // [pushString]
                //
                // On stack, before: ...
                // On stack, after: quotedString(string), ...
                //
                // Push a quoted version of `string` onto the stack
                pushString: function pushString(string) {
                    this.pushStackLiteral(this.quotedString(string));
                },

                // [pushLiteral]
                //
                // On stack, before: ...
                // On stack, after: value, ...
                //
                // Pushes a value onto the stack. This operation prevents
                // the compiler from creating a temporary variable to hold
                // it.
                pushLiteral: function pushLiteral(value) {
                    this.pushStackLiteral(value);
                },

                // [pushProgram]
                //
                // On stack, before: ...
                // On stack, after: program(guid), ...
                //
                // Push a program expression onto the stack. This takes
                // a compile-time guid and converts it into a runtime-accessible
                // expression.
                pushProgram: function pushProgram(guid) {
                    if (guid != null) {
                        this.pushStackLiteral(this.programExpression(guid));
                    } else {
                        this.pushStackLiteral(null);
                    }
                },

                // [registerDecorator]
                //
                // On stack, before: hash, program, params..., ...
                // On stack, after: ...
                //
                // Pops off the decorator's parameters, invokes the decorator,
                // and inserts the decorator into the decorators list.
                registerDecorator: function registerDecorator(paramSize, name) {
                    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
                        options = this.setupHelperArgs(name, paramSize);

                    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
                },

                // [invokeHelper]
                //
                // On stack, before: hash, inverse, program, params..., ...
                // On stack, after: result of helper invocation
                //
                // Pops off the helper's parameters, invokes the helper,
                // and pushes the helper's return value onto the stack.
                //
                // If the helper is not found, `helperMissing` is called.
                invokeHelper: function invokeHelper(paramSize, name, isSimple) {
                    var nonHelper = this.popStack(),
                        helper = this.setupHelper(paramSize, name),
                        simple = isSimple ? [helper.name, ' || '] : '';

                    var lookup = ['('].concat(simple, nonHelper);
                    if (!this.options.strict) {
                        lookup.push(' || ', this.aliasable('helpers.helperMissing'));
                    }
                    lookup.push(')');

                    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
                },

                // [invokeKnownHelper]
                //
                // On stack, before: hash, inverse, program, params..., ...
                // On stack, after: result of helper invocation
                //
                // This operation is used when the helper is known to exist,
                // so a `helperMissing` fallback is not required.
                invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
                    var helper = this.setupHelper(paramSize, name);
                    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
                },

                // [invokeAmbiguous]
                //
                // On stack, before: hash, inverse, program, params..., ...
                // On stack, after: result of disambiguation
                //
                // This operation is used when an expression like `{{foo}}`
                // is provided, but we don't know at compile-time whether it
                // is a helper or a path.
                //
                // This operation emits more code than the other options,
                // and can be avoided by passing the `knownHelpers` and
                // `knownHelpersOnly` flags at compile-time.
                invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
                    this.useRegister('helper');

                    var nonHelper = this.popStack();

                    this.emptyHash();
                    var helper = this.setupHelper(0, name, helperCall);

                    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

                    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
                    if (!this.options.strict) {
                        lookup[0] = '(helper = ';
                        lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
                    }

                    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
                },

                // [invokePartial]
                //
                // On stack, before: context, ...
                // On stack after: result of partial invocation
                //
                // This operation pops off a context, invokes a partial with that context,
                // and pushes the result of the invocation back.
                invokePartial: function invokePartial(isDynamic, name, indent) {
                    var params = [],
                        options = this.setupParams(name, 1, params);

                    if (isDynamic) {
                        name = this.popStack();
                        delete options.name;
                    }

                    if (indent) {
                        options.indent = JSON.stringify(indent);
                    }
                    options.helpers = 'helpers';
                    options.partials = 'partials';
                    options.decorators = 'container.decorators';

                    if (!isDynamic) {
                        params.unshift(this.nameLookup('partials', name, 'partial'));
                    } else {
                        params.unshift(name);
                    }

                    if (this.options.compat) {
                        options.depths = 'depths';
                    }
                    options = this.objectLiteral(options);
                    params.push(options);

                    this.push(this.source.functionCall('container.invokePartial', '', params));
                },

                // [assignToHash]
                //
                // On stack, before: value, ..., hash, ...
                // On stack, after: ..., hash, ...
                //
                // Pops a value off the stack and assigns it to the current hash
                assignToHash: function assignToHash(key) {
                    var value = this.popStack(),
                        context = undefined,
                        type = undefined,
                        id = undefined;

                    if (this.trackIds) {
                        id = this.popStack();
                    }
                    if (this.stringParams) {
                        type = this.popStack();
                        context = this.popStack();
                    }

                    var hash = this.hash;
                    if (context) {
                        hash.contexts[key] = context;
                    }
                    if (type) {
                        hash.types[key] = type;
                    }
                    if (id) {
                        hash.ids[key] = id;
                    }
                    hash.values[key] = value;
                },

                pushId: function pushId(type, name, child) {
                    if (type === 'BlockParam') {
                        this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
                    } else if (type === 'PathExpression') {
                        this.pushString(name);
                    } else if (type === 'SubExpression') {
                        this.pushStackLiteral('true');
                    } else {
                        this.pushStackLiteral('null');
                    }
                },

                // HELPERS

                compiler: JavaScriptCompiler,

                compileChildren: function compileChildren(environment, options) {
                    var children = environment.children,
                        child = undefined,
                        compiler = undefined;

                    for (var i = 0, l = children.length; i < l; i++) {
                        child = children[i];
                        compiler = new this.compiler(); // eslint-disable-line new-cap

                        var index = this.matchExistingProgram(child);

                        if (index == null) {
                            this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
                            index = this.context.programs.length;
                            child.index = index;
                            child.name = 'program' + index;
                            this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                            this.context.decorators[index] = compiler.decorators;
                            this.context.environments[index] = child;

                            this.useDepths = this.useDepths || compiler.useDepths;
                            this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
                        } else {
                            child.index = index;
                            child.name = 'program' + index;

                            this.useDepths = this.useDepths || child.useDepths;
                            this.useBlockParams = this.useBlockParams || child.useBlockParams;
                        }
                    }
                },
                matchExistingProgram: function matchExistingProgram(child) {
                    for (var i = 0, len = this.context.environments.length; i < len; i++) {
                        var environment = this.context.environments[i];
                        if (environment && environment.equals(child)) {
                            return i;
                        }
                    }
                },

                programExpression: function programExpression(guid) {
                    var child = this.environment.children[guid],
                        programParams = [child.index, 'data', child.blockParams];

                    if (this.useBlockParams || this.useDepths) {
                        programParams.push('blockParams');
                    }
                    if (this.useDepths) {
                        programParams.push('depths');
                    }

                    return 'container.program(' + programParams.join(', ') + ')';
                },

                useRegister: function useRegister(name) {
                    if (!this.registers[name]) {
                        this.registers[name] = true;
                        this.registers.list.push(name);
                    }
                },

                push: function push(expr) {
                    if (!(expr instanceof Literal)) {
                        expr = this.source.wrap(expr);
                    }

                    this.inlineStack.push(expr);
                    return expr;
                },

                pushStackLiteral: function pushStackLiteral(item) {
                    this.push(new Literal(item));
                },

                pushSource: function pushSource(source) {
                    if (this.pendingContent) {
                        this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
                        this.pendingContent = undefined;
                    }

                    if (source) {
                        this.source.push(source);
                    }
                },

                replaceStack: function replaceStack(callback) {
                    var prefix = ['('],
                        stack = undefined,
                        createdStack = undefined,
                        usedLiteral = undefined;

                    /* istanbul ignore next */
                    if (!this.isInline()) {
                        throw new _exception2['default']('replaceStack on non-inline');
                    }

                    // We want to merge the inline statement into the replacement statement via ','
                    var top = this.popStack(true);

                    if (top instanceof Literal) {
                        // Literals do not need to be inlined
                        stack = [top.value];
                        prefix = ['(', stack];
                        usedLiteral = true;
                    } else {
                        // Get or create the current stack name for use by the inline
                        createdStack = true;
                        var _name = this.incrStack();

                        prefix = ['((', this.push(_name), ' = ', top, ')'];
                        stack = this.topStack();
                    }

                    var item = callback.call(this, stack);

                    if (!usedLiteral) {
                        this.popStack();
                    }
                    if (createdStack) {
                        this.stackSlot--;
                    }
                    this.push(prefix.concat(item, ')'));
                },

                incrStack: function incrStack() {
                    this.stackSlot++;
                    if (this.stackSlot > this.stackVars.length) {
                        this.stackVars.push('stack' + this.stackSlot);
                    }
                    return this.topStackName();
                },
                topStackName: function topStackName() {
                    return 'stack' + this.stackSlot;
                },
                flushInline: function flushInline() {
                    var inlineStack = this.inlineStack;
                    this.inlineStack = [];
                    for (var i = 0, len = inlineStack.length; i < len; i++) {
                        var entry = inlineStack[i];
                        /* istanbul ignore if */
                        if (entry instanceof Literal) {
                            this.compileStack.push(entry);
                        } else {
                            var stack = this.incrStack();
                            this.pushSource([stack, ' = ', entry, ';']);
                            this.compileStack.push(stack);
                        }
                    }
                },
                isInline: function isInline() {
                    return this.inlineStack.length;
                },

                popStack: function popStack(wrapped) {
                    var inline = this.isInline(),
                        item = (inline ? this.inlineStack : this.compileStack).pop();

                    if (!wrapped && item instanceof Literal) {
                        return item.value;
                    } else {
                        if (!inline) {
                            /* istanbul ignore next */
                            if (!this.stackSlot) {
                                throw new _exception2['default']('Invalid stack pop');
                            }
                            this.stackSlot--;
                        }
                        return item;
                    }
                },

                topStack: function topStack() {
                    var stack = this.isInline() ? this.inlineStack : this.compileStack,
                        item = stack[stack.length - 1];

                    /* istanbul ignore if */
                    if (item instanceof Literal) {
                        return item.value;
                    } else {
                        return item;
                    }
                },

                contextName: function contextName(context) {
                    if (this.useDepths && context) {
                        return 'depths[' + context + ']';
                    } else {
                        return 'depth' + context;
                    }
                },

                quotedString: function quotedString(str) {
                    return this.source.quotedString(str);
                },

                objectLiteral: function objectLiteral(obj) {
                    return this.source.objectLiteral(obj);
                },

                aliasable: function aliasable(name) {
                    var ret = this.aliases[name];
                    if (ret) {
                        ret.referenceCount++;
                        return ret;
                    }

                    ret = this.aliases[name] = this.source.wrap(name);
                    ret.aliasable = true;
                    ret.referenceCount = 1;

                    return ret;
                },

                setupHelper: function setupHelper(paramSize, name, blockHelper) {
                    var params = [],
                        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
                    var foundHelper = this.nameLookup('helpers', name, 'helper'),
                        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');

                    return {
                        params: params,
                        paramsInit: paramsInit,
                        name: foundHelper,
                        callParams: [callContext].concat(params)
                    };
                },

                setupParams: function setupParams(helper, paramSize, params) {
                    var options = {},
                        contexts = [],
                        types = [],
                        ids = [],
                        objectArgs = !params,
                        param = undefined;

                    if (objectArgs) {
                        params = [];
                    }

                    options.name = this.quotedString(helper);
                    options.hash = this.popStack();

                    if (this.trackIds) {
                        options.hashIds = this.popStack();
                    }
                    if (this.stringParams) {
                        options.hashTypes = this.popStack();
                        options.hashContexts = this.popStack();
                    }

                    var inverse = this.popStack(),
                        program = this.popStack();

                    // Avoid setting fn and inverse if neither are set. This allows
                    // helpers to do a check for `if (options.fn)`
                    if (program || inverse) {
                        options.fn = program || 'container.noop';
                        options.inverse = inverse || 'container.noop';
                    }

                    // The parameters go on to the stack in order (making sure that they are evaluated in order)
                    // so we need to pop them off the stack in reverse order
                    var i = paramSize;
                    while (i--) {
                        param = this.popStack();
                        params[i] = param;

                        if (this.trackIds) {
                            ids[i] = this.popStack();
                        }
                        if (this.stringParams) {
                            types[i] = this.popStack();
                            contexts[i] = this.popStack();
                        }
                    }

                    if (objectArgs) {
                        options.args = this.source.generateArray(params);
                    }

                    if (this.trackIds) {
                        options.ids = this.source.generateArray(ids);
                    }
                    if (this.stringParams) {
                        options.types = this.source.generateArray(types);
                        options.contexts = this.source.generateArray(contexts);
                    }

                    if (this.options.data) {
                        options.data = 'data';
                    }
                    if (this.useBlockParams) {
                        options.blockParams = 'blockParams';
                    }
                    return options;
                },

                setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
                    var options = this.setupParams(helper, paramSize, params);
                    options = this.objectLiteral(options);
                    if (useRegister) {
                        this.useRegister('options');
                        params.push('options');
                        return ['options=', options];
                    } else if (params) {
                        params.push(options);
                        return '';
                    } else {
                        return options;
                    }
                }
            };

            (function () {
                var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

                var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

                for (var i = 0, l = reservedWords.length; i < l; i++) {
                    compilerWords[reservedWords[i]] = true;
                }
            })();

            JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
                return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
            };

            function strictLookup(requireTerminal, compiler, parts, type) {
                var stack = compiler.popStack(),
                    i = 0,
                    len = parts.length;
                if (requireTerminal) {
                    len--;
                }

                for (; i < len; i++) {
                    stack = compiler.nameLookup(stack, parts[i], type);
                }

                if (requireTerminal) {
                    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
                } else {
                    return stack;
                }
            }

            exports['default'] = JavaScriptCompiler;
            module.exports = exports['default'];

            /***/
        },
        /* 29 */
        /***/ function (module, exports, __webpack_require__) {

            /* global define */
            'use strict';

            exports.__esModule = true;

            var _utils = __webpack_require__(5);

            var SourceNode = undefined;

            try {
                /* istanbul ignore next */
                if (false) {
                    // We don't support this in AMD environments. For these environments, we asusme that
                    // they are running on the browser and thus have no need for the source-map library.
                    var SourceMap = require('source-map');
                    SourceNode = SourceMap.SourceNode;
                }
            } catch (err) {
            }
            /* NOP */

            /* istanbul ignore if: tested but not covered in istanbul due to dist build  */
            if (!SourceNode) {
                SourceNode = function (line, column, srcFile, chunks) {
                    this.src = '';
                    if (chunks) {
                        this.add(chunks);
                    }
                };
                /* istanbul ignore next */
                SourceNode.prototype = {
                    add: function add(chunks) {
                        if (_utils.isArray(chunks)) {
                            chunks = chunks.join('');
                        }
                        this.src += chunks;
                    },
                    prepend: function prepend(chunks) {
                        if (_utils.isArray(chunks)) {
                            chunks = chunks.join('');
                        }
                        this.src = chunks + this.src;
                    },
                    toStringWithSourceMap: function toStringWithSourceMap() {
                        return {code: this.toString()};
                    },
                    toString: function toString() {
                        return this.src;
                    }
                };
            }

            function castChunk(chunk, codeGen, loc) {
                if (_utils.isArray(chunk)) {
                    var ret = [];

                    for (var i = 0, len = chunk.length; i < len; i++) {
                        ret.push(codeGen.wrap(chunk[i], loc));
                    }
                    return ret;
                } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
                    // Handle primitives that the SourceNode will throw up on
                    return chunk + '';
                }
                return chunk;
            }

            function CodeGen(srcFile) {
                this.srcFile = srcFile;
                this.source = [];
            }

            CodeGen.prototype = {
                isEmpty: function isEmpty() {
                    return !this.source.length;
                },
                prepend: function prepend(source, loc) {
                    this.source.unshift(this.wrap(source, loc));
                },
                push: function push(source, loc) {
                    this.source.push(this.wrap(source, loc));
                },

                merge: function merge() {
                    var source = this.empty();
                    this.each(function (line) {
                        source.add(['  ', line, '\n']);
                    });
                    return source;
                },

                each: function each(iter) {
                    for (var i = 0, len = this.source.length; i < len; i++) {
                        iter(this.source[i]);
                    }
                },

                empty: function empty() {
                    var loc = this.currentLocation || {start: {}};
                    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
                },
                wrap: function wrap(chunk) {
                    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {start: {}} : arguments[1];

                    if (chunk instanceof SourceNode) {
                        return chunk;
                    }

                    chunk = castChunk(chunk, this, loc);

                    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
                },

                functionCall: function functionCall(fn, type, params) {
                    params = this.generateList(params);
                    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
                },

                quotedString: function quotedString(str) {
                    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
                        .replace(/\u2029/g, '\\u2029') + '"';
                },

                objectLiteral: function objectLiteral(obj) {
                    var pairs = [];

                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            var value = castChunk(obj[key], this);
                            if (value !== 'undefined') {
                                pairs.push([this.quotedString(key), ':', value]);
                            }
                        }
                    }

                    var ret = this.generateList(pairs);
                    ret.prepend('{');
                    ret.add('}');
                    return ret;
                },

                generateList: function generateList(entries) {
                    var ret = this.empty();

                    for (var i = 0, len = entries.length; i < len; i++) {
                        if (i) {
                            ret.add(',');
                        }

                        ret.add(castChunk(entries[i], this));
                    }

                    return ret;
                },

                generateArray: function generateArray(entries) {
                    var ret = this.generateList(entries);
                    ret.prepend('[');
                    ret.add(']');

                    return ret;
                }
            };

            exports['default'] = CodeGen;
            module.exports = exports['default'];

            /***/
        }
        /******/])
});
;
$(function () {
    if (!Modernizr.input.placeholder && typeof $.fn.placeholder !== 'undefined') {
        $('input, textarea').placeholder();
    }
});
