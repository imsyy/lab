(function(t) {
    function e(e) {
        for (var r, a, i = e[0], s = e[1], c = e[2], l = 0, p = []; l < i.length; l++)
            a = i[l],
            Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]),
            o[a] = 0;
        for (r in s)
            Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
        f && f(e);
        while (p.length)
            p.shift()();
        return u.push.apply(u, c || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < u.length; e++) {
            for (var n = u[e], r = !0, a = 1; a < n.length; a++) {
                var i = n[a];
                0 !== o[i] && (r = !1)
            }
            r && (u.splice(e--, 1),
            t = s(s.s = n[0]))
        }
        return t
    }
    var r = {}
      , a = {
        app: 0
    }
      , o = {
        app: 0
    }
      , u = [];
    function i(t) {
        return s.p + "js/" + ({
            about: "about",
            pornhub: "pornhub",
            "vertical-pornhub": "vertical-pornhub",
            youtube: "youtube"
        }[t] || t) + "." + {
            about: "7402a0d5",
            pornhub: "daf65c6f",
            "vertical-pornhub": "d97b8cec",
            youtube: "d73b68d4"
        }[t] + ".js"
    }
    function s(e) {
        if (r[e])
            return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function(t) {
        var e = []
          , n = {
            about: 1,
            pornhub: 1,
            "vertical-pornhub": 1,
            youtube: 1
        };
        a[t] ? e.push(a[t]) : 0 !== a[t] && n[t] && e.push(a[t] = new Promise((function(e, n) {
            for (var r = "css/" + ({
                about: "about",
                pornhub: "pornhub",
                "vertical-pornhub": "vertical-pornhub",
                youtube: "youtube"
            }[t] || t) + "." + {
                about: "e3c9c695",
                pornhub: "f656a9a6",
                "vertical-pornhub": "a55a8521",
                youtube: "48bc88b9"
            }[t] + ".css", o = s.p + r, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
                var c = u[i]
                  , l = c.getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (l === r || l === o))
                    return e()
            }
            var p = document.getElementsByTagName("style");
            for (i = 0; i < p.length; i++) {
                c = p[i],
                l = c.getAttribute("data-href");
                if (l === r || l === o)
                    return e()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet",
            f.type = "text/css",
            f.onload = e,
            f.onerror = function(e) {
                var r = e && e.target && e.target.src || o
                  , u = new Error("Loading CSS chunk " + t + " failed.\n(" + r + ")");
                u.code = "CSS_CHUNK_LOAD_FAILED",
                u.request = r,
                delete a[t],
                f.parentNode.removeChild(f),
                n(u)
            }
            ,
            f.href = o;
            var v = document.getElementsByTagName("head")[0];
            v.appendChild(f)
        }
        )).then((function() {
            a[t] = 0
        }
        )));
        var r = o[t];
        if (0 !== r)
            if (r)
                e.push(r[2]);
            else {
                var u = new Promise((function(e, n) {
                    r = o[t] = [e, n]
                }
                ));
                e.push(r[2] = u);
                var c, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                s.nc && l.setAttribute("nonce", s.nc),
                l.src = i(t);
                var p = new Error;
                c = function(e) {
                    l.onerror = l.onload = null,
                    clearTimeout(f);
                    var n = o[t];
                    if (0 !== n) {
                        if (n) {
                            var r = e && ("load" === e.type ? "missing" : e.type)
                              , a = e && e.target && e.target.src;
                            p.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")",
                            p.name = "ChunkLoadError",
                            p.type = r,
                            p.request = a,
                            n[1](p)
                        }
                        o[t] = void 0
                    }
                }
                ;
                var f = setTimeout((function() {
                    c({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = c,
                document.head.appendChild(l)
            }
        return Promise.all(e)
    }
    ,
    s.m = t,
    s.c = r,
    s.d = function(t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(t, e) {
        if (1 & e && (t = s(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                s.d(n, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return n
    }
    ,
    s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return s.d(e, "a", e),
        e
    }
    ,
    s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    s.p = "",
    s.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var c = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = c.push.bind(c);
    c.push = e,
    c = c.slice();
    for (var p = 0; p < c.length; p++)
        e(c[p]);
    var f = l;
    u.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "034f": function(t, e, n) {
        "use strict";
        var r = n("85ec")
          , a = n.n(r);
        a.a
    },
    2274: function(t, e, n) {},
    "2da4": function(t, e, n) {
        "use strict";
        var r = n("b75f")
          , a = n.n(r);
        a.a
    },
    "455a": function(t, e, n) {},
    "501e": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var r = n("2b0e")
          , a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("div", {
                staticClass: "logo"
            }, [n("logo")], 1), n("div", {
                staticClass: "description"
            }, [n("Description")], 1), n("div", {
                attrs: {
                    id: "nav"
                }
            }, [n("div", {
                staticClass: "menu"
            }, [n("router-link", {
                staticClass: "pb",
                attrs: {
                    to: "/"
                }
            }, [n("span", {
                staticClass: "prefix"
            }, [t._v("横版")]), n("span", {
                staticClass: "postfix"
            }, [t._v("Logo")])]), n("router-link", {
                staticClass: "vph",
                attrs: {
                    to: "/vertical-ph"
                }
            }, [n("p", {
                staticClass: "prefix"
            }, [t._v("竖版")]), n("p", {
                staticClass: "postfix"
            }, [t._v("Logo")])]), n("router-link", {
                staticClass: "yb",
                attrs: {
                    to: "/youtube"
                }
            }, [n("span", {
                staticClass: "prefix"
            }, [t._v("You")]), n("span", {
                staticClass: "postfix"
            }, [t._v("Tube")])]), n("router-link", {
                staticClass: "link-about",
                attrs: {
                    to: "/about"
                }
            }, [t._v("About")])], 1)]), n("router-view", {
                staticClass: "container"
            }), n("Slogan", {
                staticClass: "container"
            }), n("Faq", {
                staticClass: "container"
            }), n("Copyright", {
                staticClass: "container"
            })], 1)
        }
          , o = []
          , u = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , i = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "logo"
            }, [n("h1", [n("span", {
                staticClass: "prefix"
            }, [t._v("Logo")]), n("span", {
                staticClass: "postfix"
            }, [t._v("生成")])])])
        }
        ]
          , s = (n("6f33"),
        n("2877"))
          , c = {}
          , l = Object(s["a"])(c, u, i, !1, null, "03b36a2e", null)
          , p = l.exports
          , f = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , v = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "description"
            }, [n("h3", [t._v("PornHub 风格 Logo 生成")])])
        }
        ]
          , b = (n("2da4"),
        {})
          , h = Object(s["a"])(b, f, v, !1, null, "ee6a4bee", null)
          , d = h.exports
          , m = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , g = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "slogan"
            }, [n("h3", [n("span", {
                staticClass: "prefix"
            }, [t._v("Logo")]), n("span", {
                staticClass: "postfix"
            }, [t._v("生成器")])]), n("p", [t._v(" 这是一款简易的 Logo 生成工具，你可以用它生成 Pornhub 和 YouTube 风格的 Logo")])])
        }
        ]
          , _ = (n("80cf"),
        {})
          , y = Object(s["a"])(_, m, g, !1, null, "f989cec0", null)
          , C = y.exports
          , x = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , w = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "faq"
            }, [n("h3", [t._v("FAQ")]), n("p", [n("ol", [n("li", [n("p", [t._v("Q: 如何使用这款生成器？")]), n("p", [t._v("A: 这款生成器用起来非常简单，只需以下四步就能生成你的专属 Logo：")]), n("ul", [n("li", [t._v("选择一种样式")]), n("li", [t._v("编辑 Logo 中的文本")]), n("li", [t._v("选择自定义的文本颜色、背景颜色、文本大小...")]), n("li", [t._v("最后下载生成的 Logo")])])]), n("li", [n("p", [t._v("Q: 我可以使用生成的 Logo 用作个人或商业用途吗？")]), n("p", [t._v("A: 可以用作个人非商业用途")])])])])])
        }
        ]
          , E = (n("f758"),
        {})
          , L = Object(s["a"])(E, x, w, !1, null, "160e55c0", null)
          , O = L.exports
          , j = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", [t._v("Copyright © 無名の网页实验室")])
        }
          , P = []
          , T = (n("e0ae"),
        {})
          , k = Object(s["a"])(T, j, P, !1, null, "662a4558", null)
          , S = k.exports
          , A = {
            components: {
                logo: p,
                Description: d,
                Slogan: C,
                Faq: O,
                Copyright: S
            }
        }
          , $ = A
          , q = (n("034f"),
        Object(s["a"])($, a, o, !1, null, null, null))
          , N = q.exports
          , B = (n("d3b7"),
        n("8c4f"));
        r["a"].use(B["a"]);
        var D = new B["a"]({
            routes: [{
                path: "/",
                name: "pornhub",
                component: function() {
                    return n.e("pornhub").then(n.bind(null, "3a0e"))
                },
                meta: {
                    analytics: {
                        pageviewTemplate: function(t) {
                            return {
                                title: "PornHub 风格 Logo 生成器",
                                page: t.path
                            }
                        }
                    }
                }
            }, {
                path: "/youtube",
                name: "youtube",
                component: function() {
                    return n.e("youtube").then(n.bind(null, "c8f1"))
                },
                meta: {
                    analytics: {
                        pageviewTemplate: function(t) {
                            return {
                                title: "YouTube 风格 Logo 生成器",
                                page: t.path
                            }
                        }
                    }
                }
            }, {
                path: "/vertical-ph",
                name: "vertical-pornhub",
                component: function() {
                    return n.e("vertical-pornhub").then(n.bind(null, "94da"))
                },
                meta: {
                    analytics: {
                        pageviewTemplate: function(t) {
                            return {
                                title: "PornHub 风格 Logo 生成器（竖版）",
                                page: t.path
                            }
                        }
                    }
                }
            }, {
                path: "/about",
                name: "about",
                component: function() {
                    return n.e("about").then(n.bind(null, "f820"))
                },
                meta: {
                    analytics: {
                        pageviewTemplate: function(t) {
                            return {
                                title: "About",
                                page: t.path
                            }
                        }
                    }
                }
            }]
        })
          , F = n("e37d")
          , H = (n("be35"),
        n("2f62"));
        r["a"].use(H["a"]);
        var M = new H["a"].Store({
            state: {
                prefix: "编辑",
                suffix: "我"
            },
            mutations: {
                updatePrefix: function(t, e) {
                    t.prefix = e
                },
                updateSuffix: function(t, e) {
                    t.suffix = e
                }
            },
            actions: {}
        });
        r["a"].config.productionTip = !1,
        r["a"].use(F["a"]),
        new r["a"]({
            router: D,
            store: M,
            render: function(t) {
                return t(N)
            }
        }).$mount("#app")
    },
    "6f33": function(t, e, n) {
        "use strict";
        var r = n("455a")
          , a = n.n(r);
        a.a
    },
    "80cf": function(t, e, n) {
        "use strict";
        var r = n("2274")
          , a = n.n(r);
        a.a
    },
    "85ec": function(t, e, n) {},
    b75f: function(t, e, n) {},
    be35: function(t, e, n) {},
    c397: function(t, e, n) {},
    e0ae: function(t, e, n) {
        "use strict";
        var r = n("c397")
          , a = n.n(r);
        a.a
    },
    f758: function(t, e, n) {
        "use strict";
        var r = n("501e")
          , a = n.n(r);
        a.a
    }
});
//# sourceMappingURL=app.01f2cfb0.js.map
