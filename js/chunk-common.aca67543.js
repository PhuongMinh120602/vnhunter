"use strict";
(globalThis["webpackChunkhtm_frontend_2023"] = globalThis["webpackChunkhtm_frontend_2023"] || []).push([[996], {
    37959: (e,l,t)=>{
        t.d(l, {
            Ay: ()=>c,
            ax: ()=>p,
            fA: ()=>v
        });
        var n = t(45551)
          , a = t(90587)
          , o = t(67561)
          , s = t(43436)
          , i = t(38734)
          , u = t(61758)
          , r = t(25032)
          , d = function(e, l, t, n) {
            function a(e) {
                return e instanceof t ? e : new t((function(l) {
                    l(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, o) {
                function s(e) {
                    try {
                        u(n.next(e))
                    } catch (l) {
                        o(l)
                    }
                }
                function i(e) {
                    try {
                        u(n["throw"](e))
                    } catch (l) {
                        o(l)
                    }
                }
                function u(e) {
                    e.done ? t(e.value) : a(e.value).then(s, i)
                }
                u((n = n.apply(e, l || [])).next())
            }
            ))
        };
        function c({currentRoute: e, routesGetter: l, defaultBgm: t}) {
            var c;
            const p = (0,
            i.KR)()
              , {state: v} = (0,
            r.J)()
              , m = (0,
            i.KR)(null)
              , b = (0,
            n.Z)()
              , {user: f} = (0,
            a.bP)(b)
              , h = (0,
            u.EW)((()=>{
                var e, l;
                return (0 === (null === (e = f.value) || void 0 === e ? void 0 : e.setting.background_music) ? 0 : (null === (l = f.value) || void 0 === l ? void 0 : l.setting.background_music) || 100) / 100 * .1
            }
            ));
            let g = null === (c = f.value) || void 0 === c ? void 0 : c.setting.sound_effect;
            const y = ()=>{
                var e, l, t;
                p.value && (null === (e = m.value) || void 0 === e || e.fade(h.value, 0, 1e3)),
                g = null === (l = f.value) || void 0 === l ? void 0 : l.setting.sound_effect,
                b.updateUser({
                    setting: Object.assign(Object.assign({}, null === (t = f.value) || void 0 === t ? void 0 : t.setting), {
                        sound_effect: 0
                    })
                })
            }
              , k = ()=>{
                var e, l;
                p.value && (null === (e = m.value) || void 0 === e || e.fade(0, h.value, 1e3)),
                b.updateUser({
                    setting: Object.assign(Object.assign({}, null === (l = f.value) || void 0 === l ? void 0 : l.setting), {
                        sound_effect: g
                    })
                })
            }
              , x = (e=1)=>d(this, void 0, void 0, (function*() {
                return yield new Promise((l=>{
                    var t, n;
                    null === (t = m.value) || void 0 === t || t.once("fade", (()=>{
                        l(!0)
                    }
                    )),
                    null === (n = m.value) || void 0 === n || n.fade(e, 0, 1e3 * e)
                }
                ))
            }
            ))
              , w = e=>d(this, void 0, void 0, (function*() {
                var l;
                p.value !== e && (m.value && (yield x(h.value)),
                null === (l = m.value) || void 0 === l || l.unload(),
                m.value = null,
                p.value = void 0,
                e && (m.value = new o.Howl({
                    src: `audios/${e}.mp3`,
                    volume: h.value,
                    autoplay: !1,
                    loop: !0,
                    onloaderror: ()=>{
                        m.value
                    }
                }),
                m.value.play(),
                p.value = e))
            }
            ))
              , _ = ()=>{
                document.hidden ? y() : k()
            }
            ;
            return (0,
            u.sV)((()=>{
                const n = l.find((l=>l.path === (0,
                s.last)(e.value.split("/"))));
                v.value.loaded ? w((null === n || void 0 === n ? void 0 : n.bgm) || t) : w("landing"),
                document.addEventListener("visibilitychange", _)
            }
            )),
            (0,
            u.xo)((()=>{
                var e;
                document.removeEventListener("visibilitychange", _),
                null === (e = m.value) || void 0 === e || e.unload(),
                m.value = null
            }
            )),
            (0,
            u.wB)(e, (e=>{
                const n = l.find((l=>l.path === (0,
                s.last)(e.split("/"))));
                w((null === n || void 0 === n ? void 0 : n.bgm) || t)
            }
            )),
            (0,
            u.wB)(h, (e=>{
                var l;
                null === (l = m.value) || void 0 === l || l.volume(e)
            }
            )),
            (0,
            u.Gt)("bgm", {
                sound: m,
                play: w
            }),
            {
                sound: m,
                play: w
            }
        }
        const p = (e,l,t=1)=>{
            var s, i;
            const {user: u} = (0,
            a.bP)((0,
            n.Z)())
              , r = new o.Howl({
                src: [`audios/${e}.mp3`],
                rate: t,
                volume: .2 * (0 === (null === (s = u.value) || void 0 === s ? void 0 : s.setting.sound_effect) ? 0 : (null === (i = u.value) || void 0 === i ? void 0 : i.setting.sound_effect) || 100) / 100,
                autoplay: !1,
                loop: !!l,
                onend: ()=>{
                    l || r.unload()
                }
            });
            return r.play(),
            r
        }
          , v = ()=>(0,
        u.WQ)("bgm")
    }
    ,
    25032: (e,l,t)=>{
        t.d(l, {
            J: ()=>s,
            b: ()=>o
        });
        var n = t(38734)
          , a = t(61758);
        function o(e, l="state") {
            const t = (0,
            n.KR)(e);
            return (0,
            a.Gt)(l, t),
            {
                state: t
            }
        }
        function s(e="state") {
            const l = (0,
            a.WQ)(e);
            return {
                state: l
            }
        }
    }
    ,
    81155: (e,l,t)=>{
        t.d(l, {
            A: ()=>o,
            f: ()=>s
        });
        var n = t(38734)
          , a = t(61758);
        function o() {
            const e = (0,
            n.KR)(Date.now())
              , l = setInterval((()=>{
                e.value = Date.now()
            }
            ), 1e3);
            (0,
            a.Gt)("now", e);
            const t = ()=>{
                clearInterval(l)
            }
            ;
            return (0,
            a.xo)(t),
            {
                now: e,
                stopTicker: t
            }
        }
        function s() {
            const e = (0,
            a.WQ)("now");
            return e.value ? {
                now: e
            } : o()
        }
    }
    ,
    40956: (e,l,t)=>{
        t.d(l, {
            A: ()=>W
        });
        var n = t(61758)
          , a = t(38734)
          , o = t(29104)
          , s = t(58790)
          , i = t(92230)
          , u = t(25032)
          , r = t(90587)
          , d = t(45551);
        const c = e=>((0,
        n.Qi)("data-v-566d1fb6"),
        e = e(),
        (0,
        n.jt)(),
        e)
          , p = {
            class: "fullscreen"
        }
          , v = {
            class: "fixed flex flex-center crystal-dialog",
            style: {
                top: "14px",
                right: "16px",
                background: "linear-gradient(\n            180deg,\n            rgba(35, 0, 69, 0.8) 0%,\n            #5b1b9b 100%\n          ),\n          #462472",
                "border-radius": "5px",
                padding: "7px 12px",
                "z-index": "999999999999"
            }
        }
          , m = c((()=>(0,
        n.Lk)("img", {
            src: "imgs/crystal.png",
            width: "20"
        }, null, -1)))
          , b = ["innerHTML"]
          , f = {
            class: "general-dialog"
        }
          , h = {
            class: "full-width general-dialog-container column justify-center"
        }
          , g = {
            key: 0,
            class: "bottom",
            src: "imgs/bottom-crystal-dialog-1.png"
        }
          , y = {
            key: 0,
            style: {
                position: "absolute",
                width: "calc(100% + 20px)",
                height: "111px",
                top: "-40px",
                left: "0px",
                "background-color": "black",
                opacity: "0.6",
                "z-index": "10"
            }
        }
          , k = c((()=>(0,
        n.Lk)("div", {
            class: "absolute-full bg",
            style: {
                "z-index": "1"
            }
        }, null, -1)))
          , x = {
            class: "absolute-full flex flex-center",
            style: {
                "z-index": "2",
                position: "relative"
            }
        }
          , w = {
            class: "full-width"
        }
          , _ = {
            key: 0,
            class: "backdrop-css"
        }
          , C = {
            key: 3,
            class: "w-full",
            style: {
                height: "60px",
                position: "absolute",
                bottom: "30px",
                left: "0",
                right: "0"
            }
        }
          , L = {
            class: "fit realtive-position"
        }
          , A = {
            class: "fit flex-center",
            style: {
                position: "absolute",
                "z-index": "9999"
            }
        }
          , B = {
            key: 4,
            width: "75",
            src: "imgs/untame_sad.png",
            style: {
                position: "absolute",
                right: "-15px",
                bottom: "-30px"
            }
        }
          , E = (0,
        n.pM)({
            __name: "AnimatedDialog",
            props: {
                noBtnClose: {
                    type: Boolean
                },
                noHeader: {
                    type: Boolean
                },
                minHeightHeader: null,
                isCharacters: {
                    type: Boolean
                },
                showCrystalBottom: {
                    type: Boolean
                },
                showCrystal: {
                    type: Boolean
                },
                showIconLogout: {
                    type: Boolean
                },
                backdrop: {
                    type: Boolean
                }
            },
            setup(e) {
                const {state: l} = (0,
                u.J)()
                  , {user: t} = (0,
                r.bP)((0,
                d.Z)())
                  , c = (0,
                n.Ht)();
                return (u,r)=>{
                    var d, E;
                    return (0,
                    n.uX)(),
                    (0,
                    n.CE)("div", p, [(0,
                    n.bo)((0,
                    n.Lk)("div", v, [m, (0,
                    n.Lk)("p", {
                        class: "ml-5",
                        innerHTML: ((null === (d = (0,
                        a.R1)(t)) || void 0 === d ? void 0 : d.resources.crystal) || 0) > 99999 ? "99999<sup>+</sup>" : (null === (E = (0,
                        a.R1)(t)) || void 0 === E ? void 0 : E.resources.crystal) || 0
                    }, null, 8, b)], 512), [[o.aG, e.showCrystal]]), (0,
                    n.Lk)("div", f, [(0,
                    n.RG)(u.$slots, "crytalWallet"), (0,
                    n.RG)(u.$slots, "characters"), (0,
                    n.Lk)("div", h, [e.showCrystalBottom ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("img", g)) : (0,
                    n.Q3)("", !0), (0,
                    n.RG)(u.$slots, "timii"), e.noBtnClose ? (0,
                    n.Q3)("", !0) : ((0,
                    n.uX)(),
                    (0,
                    n.Wv)(i.A, {
                        key: 1,
                        class: (0,
                        s.C4)([(0,
                        a.R1)(l).flag && "no-pointer-events"]),
                        onClick: r[0] || (r[0] = e=>u.$emit("close"))
                    }, null, 8, ["class"])), (0,
                    n.RG)(u.$slots, "btnTopLeft"), e.noHeader ? (0,
                    n.Q3)("", !0) : ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", {
                        key: 2,
                        class: "dialog-animated__header",
                        style: (0,
                        s.Tr)({
                            minHeight: `${e.minHeightHeader}`
                        })
                    }, [e.backdrop ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", y)) : (0,
                    n.Q3)("", !0), k, (0,
                    n.Lk)("div", x, [(0,
                    n.RG)(u.$slots, "header")])], 4)), (0,
                    n.Lk)("div", w, [(0,
                    n.RG)(u.$slots, "special-box")]), (0,
                    n.Lk)("div", {
                        class: "full-width dialog-content",
                        style: (0,
                        s.Tr)("flex:1;" + ((0,
                        a.R1)(c).action ? "clip-path:polygon(100% 5px, 100% calc(100% - 80px), 0 calc(100% - 80px), 0 5px);padding-bottom:80px" : ""))
                    }, [e.backdrop ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", _)) : (0,
                    n.Q3)("", !0), (0,
                    n.RG)(u.$slots, "default")], 4), (0,
                    a.R1)(c).action ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", C, [(0,
                    n.Lk)("div", L, [(0,
                    n.Lk)("div", A, [(0,
                    n.RG)(u.$slots, "action")])])])) : (0,
                    n.Q3)("", !0), e.showIconLogout ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("img", B)) : (0,
                    n.Q3)("", !0)])])])
                }
            }
        });
        var R = t(12807)
          , $ = t(68666)
          , F = t(98582)
          , Q = t.n(F);
        const X = (0,
        R.A)(E, [["__scopeId", "data-v-566d1fb6"]])
          , W = X;
        Q()(E, "components", {
            QDialog: $.A
        })
    }
    ,
    92230: (e,l,t)=>{
        t.d(l, {
            A: ()=>u
        });
        var n = t(61758)
          , a = t(89169);
        const o = (0,
        n.Lk)("img", {
            src: "imgs/cross.png",
            width: "12",
            height: "12"
        }, null, -1)
          , s = (0,
        n.pM)({
            __name: "BtnClosePurple",
            emits: ["click"],
            setup(e, {emit: l}) {
                return (e,t)=>((0,
                n.uX)(),
                (0,
                n.Wv)(a.A, {
                    class: "btn-close-dialog",
                    flat: "",
                    onClick: t[0] || (t[0] = e=>l("click")),
                    shape: "square"
                }, {
                    default: (0,
                    n.k6)((()=>[o])),
                    _: 1
                }))
            }
        })
          , i = s
          , u = i
    }
    ,
    89169: (e,l,t)=>{
        t.d(l, {
            A: ()=>y
        });
        var n = t(61758)
          , a = t(58790)
          , o = t(29104)
          , s = t(38734)
          , i = t(37959)
          , u = t(32456);
        const r = {
            key: 0,
            class: "row flex-nowrap items-center justify-center full-width full-height"
        }
          , d = {
            class: "title"
        }
          , c = {
            key: 0,
            class: "amount ml-10"
        }
          , p = ["src"]
          , v = {
            key: 1,
            class: "amount ml-10"
        }
          , m = (0,
        n.pM)({
            __name: "Button",
            props: {
                type: {
                    default: "primary"
                },
                shape: {
                    default: "rounded"
                },
                size: {
                    default: "medium"
                },
                disable: {
                    type: Boolean,
                    default: !1
                },
                hideSFX: {
                    type: Boolean
                },
                icon: {
                    default: "crystal"
                },
                iconSize: {
                    default: 24
                },
                label: null,
                loading: {
                    type: Boolean
                },
                isPlus: {
                    type: Boolean
                },
                pointerEvent: null,
                title: null,
                amount: null
            },
            emits: ["click"],
            setup(e, {emit: l}) {
                const {t} = (0,
                u.s9)();
                return (u,m)=>{
                    const b = (0,
                    n.g2)("q-btn");
                    return (0,
                    n.uX)(),
                    (0,
                    n.CE)("div", (0,
                    n.v6)({
                        style: {
                            height: "48px",
                            width: "max-content"
                        },
                        class: ["o-custom-btn", ["o-" + e.type + "-" + e.shape, "o-" + e.type, "o-" + e.shape, "o-" + e.size]]
                    }, u.$attrs), [(0,
                    n.bF)(b, {
                        class: (0,
                        a.C4)(["custom-btn", [e.type + "-" + e.shape, e.type, e.shape, e.size, e.disable && "no-pointer-events", e.title && e.amount && "btn-icon-title"]]),
                        style: (0,
                        a.Tr)(e.pointerEvent && `pointer-events:${e.pointerEvent}`),
                        label: e.label,
                        loading: e.loading,
                        disable: e.disable,
                        onClick: m[0] || (m[0] = (0,
                        o.D$)((e=>{
                            (0,
                            s.R1)(i.ax)("button"),
                            l("click")
                        }
                        ), ["stop"])),
                        push: !e.disable,
                        rounded: "rounded" === e.shape
                    }, {
                        default: (0,
                        n.k6)((()=>[(0,
                        n.RG)(u.$slots, "default"), e.title && (e.amount || 0 === e.amount) ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", r, [(0,
                        n.Lk)("div", d, (0,
                        a.v_)(e.title), 1), e.amount > 0 ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", c, [(0,
                        n.eW)((0,
                        a.v_)(e.isPlus ? "+" : "-") + " ", 1), (0,
                        n.Lk)("img", {
                            src: `imgs/${e.icon}.png`,
                            width: "16",
                            height: "16",
                            class: "mx-2"
                        }, null, 8, p), (0,
                        n.eW)(" " + (0,
                        a.v_)(Math.abs(e.amount)), 1)])) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", v, (0,
                        a.v_)((0,
                        s.R1)(t)("CHANGEHUNTERID_POPUP_BUTTONCOPY_FREE")), 1))])) : (0,
                        n.Q3)("", !0)])),
                        _: 3
                    }, 8, ["class", "style", "label", "loading", "disable", "push", "rounded"])], 16)
                }
            }
        });
        var b = t(46959)
          , f = t(98582)
          , h = t.n(f);
        const g = m
          , y = g;
        h()(m, "components", {
            QBtn: b.A
        })
    }
    ,
    27515: (e,l,t)=>{
        t.d(l, {
            A: ()=>f
        });
        var n = t(61758)
          , a = t(58790)
          , o = t(38734);
        const s = {
            key: 0,
            src: "/icons/show.svg"
        }
          , i = {
            key: 1,
            src: "/icons/hide.svg"
        }
          , u = {
            key: 1,
            class: "icon-password"
        }
          , r = (0,
        n.Lk)("img", {
            src: "/icons/search.svg"
        }, null, -1)
          , d = [r]
          , c = (0,
        n.pM)({
            __name: "Input",
            props: {
                label: {
                    default: ""
                },
                error: {
                    type: Boolean,
                    default: !1
                },
                custom_prefix: null,
                type: {
                    default: "text"
                },
                modelValue: null,
                readonly: {
                    type: Boolean,
                    default: !1
                },
                prefix: null,
                placeholder: null,
                hasMobileLegend: {
                    type: Boolean
                },
                hasSelect: {
                    type: Boolean
                },
                center: {
                    type: Boolean
                }
            },
            setup(e) {
                const l = e
                  , t = (0,
                o.KR)(l.type)
                  , r = (0,
                o.KR)(!1);
                return (l,o)=>{
                    const c = (0,
                    n.g2)("q-input");
                    return (0,
                    n.uX)(),
                    (0,
                    n.CE)("div", {
                        class: (0,
                        a.C4)(["legend-input", [(r.value || e.modelValue || e.prefix || e.hasMobileLegend || e.hasSelect) && "input-focused", e.hasMobileLegend && "has-mobile-number", e.hasSelect && "has-select"]])
                    }, [(0,
                    n.Lk)("div", {
                        class: (0,
                        a.C4)(["label", [e.error ? "text-error" : "text-normal", e.center && "center"]]),
                        style: (0,
                        a.Tr)(e.custom_prefix && !e.modelValue ? `padding-left:${e.custom_prefix}px` : "")
                    }, (0,
                    a.v_)(e.label), 7), (0,
                    n.bF)(c, (0,
                    n.v6)({
                        placeholder: e.placeholder,
                        class: [e.error && "error-input"]
                    }, l.$attrs, {
                        "model-value": e.modelValue,
                        outlined: "",
                        dense: "",
                        type: t.value,
                        "input-style": [e.error ? "color: #ff0000" : "color: #202020", e.custom_prefix && !e.modelValue ? `padding-left:${e.custom_prefix}px` : ""],
                        readonly: e.readonly,
                        prefix: e.prefix,
                        onFocusin: o[1] || (o[1] = e=>r.value = !0),
                        onFocusout: o[2] || (o[2] = e=>r.value = !1)
                    }), {
                        default: (0,
                        n.k6)((()=>[(0,
                        n.RG)(l.$slots, "default"), "password" === e.type ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", {
                            key: 0,
                            class: "icon-password",
                            onClick: o[0] || (o[0] = e=>t.value = "password" === t.value ? "text" : "password")
                        }, ["password" === t.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("img", s)) : (0,
                        n.Q3)("", !0), "text" === t.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("img", i)) : (0,
                        n.Q3)("", !0)])) : (0,
                        n.Q3)("", !0), "search" === e.type ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", u, d)) : (0,
                        n.Q3)("", !0)])),
                        _: 3
                    }, 16, ["placeholder", "class", "model-value", "type", "input-style", "readonly", "prefix"])], 2)
                }
            }
        });
        var p = t(78020)
          , v = t(98582)
          , m = t.n(v);
        const b = c
          , f = b;
        m()(c, "components", {
            QInput: p.A
        })
    }
    ,
    60476: (e,l,t)=>{
        t.d(l, {
            A: ()=>d
        });
        var n = t(61758)
          , a = t(58790);
        const o = {
            class: "text-error text-xs row flex-nowrap items-start"
        }
          , s = (0,
        n.Lk)("img", {
            src: "imgs/uncorrect.png",
            width: "16",
            height: "16",
            class: ""
        }, null, -1)
          , i = {
            class: "ml-8"
        }
          , u = (0,
        n.pM)({
            __name: "TextError",
            props: {
                text: null
            },
            setup(e) {
                return (l,t)=>((0,
                n.uX)(),
                (0,
                n.CE)("div", o, [s, (0,
                n.Lk)("div", i, (0,
                a.v_)(e.text), 1)]))
            }
        })
          , r = u
          , d = r
    }
    ,
    57311: (e,l,t)=>{
        t.r(l),
        t.d(l, {
            default: ()=>R
        });
        var n = t(61758)
          , a = t(40956)
          , o = t(92230)
          , s = t(89169)
          , i = t(27515)
          , u = t(60476)
          , r = t(38734);
        const d = e=>((0,
        n.Qi)("data-v-0e9b0ddd"),
        e = e(),
        (0,
        n.jt)(),
        e)
          , c = d((()=>(0,
        n.Lk)("img", {
            src: "imgs/ic-arrow-left.png",
            height: "14",
            width: "14"
        }, null, -1)))
          , p = {
            class: "column flex-nowrap"
        }
          , v = d((()=>(0,
        n.Lk)("br", null, null, -1)))
          , m = d((()=>(0,
        n.Lk)("img", {
            src: "imgs/cross.png",
            height: "14",
            width: "14"
        }, null, -1)))
          , b = d((()=>(0,
        n.Lk)("br", null, null, -1)))
          , f = d((()=>(0,
        n.Lk)("img", {
            src: "imgs/ic-arrow-left.png",
            height: "14",
            width: "14"
        }, null, -1)))
          , h = d((()=>(0,
        n.Lk)("br", null, null, -1)))
          , g = d((()=>(0,
        n.Lk)("br", null, null, -1)))
          , y = d((()=>(0,
        n.Lk)("br", null, null, -1)))
          , k = d((()=>(0,
        n.Lk)("br", null, null, -1)))
          , x = {
            class: "flex flex-nowrap my-16"
        }
          , w = d((()=>(0,
        n.Lk)("span", null, "I have read and agree to the Terms and Conditions. ", -1)))
          , _ = (0,
        n.pM)({
            __name: "Components",
            setup(e) {
                const l = (0,
                r.KR)(!1);
                return (e,t)=>{
                    const r = (0,
                    n.g2)("q-checkbox");
                    return (0,
                    n.uX)(),
                    (0,
                    n.Wv)(a.A, {
                        title: e.$t("save_your_progress")
                    }, {
                        header: (0,
                        n.k6)((()=>[(0,
                        n.eW)(" Component example ")])),
                        btnTopRight: (0,
                        n.k6)((()=>[(0,
                        n.bF)(o.A, {
                            onClick: t[0] || (t[0] = l=>e.$emit("close"))
                        })])),
                        btnTopLeft: (0,
                        n.k6)((()=>[(0,
                        n.bF)(s.A, {
                            class: "absolute btn-back-left",
                            shape: "square"
                        }, {
                            default: (0,
                            n.k6)((()=>[c])),
                            _: 1
                        })])),
                        default: (0,
                        n.k6)((()=>[(0,
                        n.Lk)("div", p, [(0,
                        n.eW)(" Button shape is square"), v, (0,
                        n.bF)(s.A, {
                            shape: "square"
                        }, {
                            default: (0,
                            n.k6)((()=>[m])),
                            _: 1
                        }), (0,
                        n.eW)(" Button shape is circle"), b, (0,
                        n.bF)(s.A, {
                            shape: "square"
                        }, {
                            default: (0,
                            n.k6)((()=>[f])),
                            _: 1
                        }), (0,
                        n.eW)(" Button type is primary and default size is medium"), h, (0,
                        n.bF)(s.A, {
                            label: "Next"
                        }), (0,
                        n.bF)(s.A, {
                            label: "Next",
                            type: "secondary"
                        }), (0,
                        n.eW)(" Button type is primary and size is max-content "), g, (0,
                        n.bF)(s.A, {
                            label: "Next",
                            size: "max-content"
                        }), (0,
                        n.bF)(s.A, {
                            label: "No",
                            size: "small",
                            type: "secondary"
                        }), (0,
                        n.eW)(" Button type is puple and size is small "), y, (0,
                        n.bF)(s.A, {
                            label: "Claim",
                            size: "small"
                        }), (0,
                        n.eW)(" Button with icon and title (icon crystal-shards) "), (0,
                        n.bF)(s.A, {
                            title: "Purchase x1",
                            amount: 100,
                            size: "max-content"
                        }), (0,
                        n.eW)(" Input "), (0,
                        n.bF)(i.A, {
                            class: "full-width",
                            label: e.$t("cf_password_label")
                        }, null, 8, ["label"]), (0,
                        n.eW)(" mobile number "), (0,
                        n.bF)(i.A, {
                            class: "full-width",
                            label: e.$t("mobile_number"),
                            mask: "#### ####",
                            prefix: "+65",
                            autofocus: ""
                        }, null, 8, ["label"]), k, (0,
                        n.eW)(" Input with error "), (0,
                        n.bF)(i.A, {
                            class: "full-width",
                            label: e.$t("mobile_number"),
                            mask: "#### ####",
                            prefix: "+65",
                            autofocus: "",
                            error: !0
                        }, null, 8, ["label"]), (0,
                        n.bF)(u.A, {
                            class: "mt-12",
                            text: "Passwords must match"
                        }), (0,
                        n.Lk)("div", x, [(0,
                        n.bF)(r, {
                            modelValue: l.value,
                            "onUpdate:modelValue": t[1] || (t[1] = e=>l.value = e)
                        }, null, 8, ["modelValue"]), w])])])),
                        _: 1
                    }, 8, ["title"])
                }
            }
        });
        var C = t(12807)
          , L = t(30790)
          , A = t(98582)
          , B = t.n(A);
        const E = (0,
        C.A)(_, [["__scopeId", "data-v-0e9b0ddd"]])
          , R = E;
        B()(_, "components", {
            QCheckbox: L.A
        })
    }
}]);
