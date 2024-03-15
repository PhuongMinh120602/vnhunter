"use strict";
(globalThis["webpackChunkhtm_frontend_2023"] = globalThis["webpackChunkhtm_frontend_2023"] || []).push([[489], {
    53489: (e,t,a)=>{
        a.r(t),
        a.d(t, {
            default: ()=>A
        });
        var n = a(61758)
          , i = a(38734)
          , o = a(81155)
          , s = a(90587)
          , l = a(45551)
          , r = a(58790)
          , c = a(18468)
          , d = a(97174)
          , u = a(32456)
          , v = function(e, t, a, n) {
            function i(e) {
                return e instanceof a ? e : new a((function(t) {
                    t(e)
                }
                ))
            }
            return new (a || (a = Promise))((function(a, o) {
                function s(e) {
                    try {
                        r(n.next(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function l(e) {
                    try {
                        r(n["throw"](e))
                    } catch (t) {
                        o(t)
                    }
                }
                function r(e) {
                    e.done ? a(e.value) : i(e.value).then(s, l)
                }
                r((n = n.apply(e, t || [])).next())
            }
            ))
        };
        const h = e=>((0,
        n.Qi)("data-v-2e759c18"),
        e = e(),
        (0,
        n.jt)(),
        e)
          , p = (0,
        n.Fv)('<div class="kv" data-v-2e759c18><div class="car" data-v-2e759c18></div><div class="city" data-v-2e759c18></div><div class="driven-wheel left" data-v-2e759c18><div class="blur" data-v-2e759c18></div></div><img class="driven-wheel-light left" src="imgs/kv/driven-wheel-light.png" data-v-2e759c18><div class="driven-wheel right" data-v-2e759c18><div class="blur" data-v-2e759c18></div></div><img class="driven-wheel-light right" src="imgs/kv/driven-wheel-light.png" data-v-2e759c18><img src="/imgs/blocker/shadow.png" class="pointer-none absolute shadow" data-v-2e759c18></div><div class="logo" data-v-2e759c18><img src="/imgs/logo_htm.png" class="pointer-none mt-4 absolute blocker__logo" style="height:80px;width:auto;" data-v-2e759c18></div>', 2)
          , g = {
            class: "absolute flex-nowrap items-center blocker__bottom",
            style: {
                bottom: "30px",
                right: "30px"
            }
        }
          , w = ["innerHTML"]
          , _ = ["innerHTML"]
          , k = h((()=>(0,
        n.Lk)("img", {
            src: "/imgs/blocker/qr_code_new.png",
            class: "pointer-none ml-12",
            style: {
                height: "150px",
                width: "auto"
            }
        }, null, -1)))
          , m = (0,
        n.pM)({
            __name: "Blocker",
            setup(e) {
                const {t} = (0,
                u.s9)()
                  , a = c.Ay.timeline()
                  , o = c.Ay.timeline({
                    repeat: -1
                })
                  , s = navigator.userAgent.toLowerCase()
                  , l = (0,
                n.EW)((()=>/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(s)))
                  , h = ()=>{
                    c.Ay.fromTo(".driven-wheel-light", {
                        opacity: 0
                    }, {
                        opacity: 1,
                        delay: .5,
                        duration: .5
                    }),
                    o.to(".driven-wheel", {
                        rotation: "-=360_cw",
                        ease: d.WG.easeNone,
                        duration: 1.5,
                        repeat: -1
                    }).fromTo(".car", {
                        y: 8
                    }, {
                        y: 0,
                        yoyo: !0,
                        repeat: -1,
                        duration: 1.5,
                        ease: d.br.easeIn
                    }).to(".city", {
                        ease: d.WG.easeNone,
                        duration: .8,
                        repeat: -1
                    }, "-=0.5")
                }
                ;
                return (0,
                n.sV)((()=>v(this, void 0, void 0, (function*() {
                    yield(0,
                    n.dY)(),
                    h()
                }
                )))),
                (0,
                n.xo)((()=>{
                    a && a.kill(),
                    o && o.kill()
                }
                )),
                (e,a)=>((0,
                n.uX)(),
                (0,
                n.CE)("div", {
                    class: (0,
                    r.C4)(["fullscreen text-center", [(0,
                    i.R1)(l) ? "blocker-tablet" : "blocker-desktop"]])
                }, [p, (0,
                n.Lk)("div", g, [(0,
                n.Lk)("div", null, [(0,
                n.Lk)("div", {
                    class: (0,
                    r.C4)(["text-2xl font-bold whitespace-nowrap", {
                        "text-left": !(0,
                        i.R1)(l)
                    }]),
                    innerHTML: (0,
                    i.R1)(t)("COUNTDOWN_CTA")
                }, null, 10, w), (0,
                n.Lk)("div", {
                    class: "text-2xl font-400 whitespace-nowrap",
                    innerHTML: (0,
                    i.R1)(t)("COUNTDOWN_CTA_DESC")
                }, null, 8, _)]), k])], 2))
            }
        });
        var b = a(12807);
        const y = (0,
        b.A)(m, [["__scopeId", "data-v-2e759c18"]])
          , f = y
          , x = {
            key: 0,
            class: "blocker fullscreen"
        }
          , C = {
            __name: "MainLayout",
            setup(e) {
                const t = (0,
                n.EW)((()=>/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
                  , a = (0,
                l.Z)()
                  , {now: r} = (0,
                o.A)()
                  , {settings: c} = (0,
                s.bP)(a)
                  , d = (0,
                n.EW)((()=>{
                    if (c.value?.mysterious_stop_at && c.value?.season_start_at)
                        switch (!0) {
                        case +new Date(c.value?.mysterious_stop_at) > r.value:
                            return "mysterious_countdown";
                        case +new Date(c.value?.season_start_at) > r.value:
                            return "countdown";
                        default:
                            return ""
                        }
                }
                ));
                return (e,a)=>{
                    const o = (0,
                    n.g2)("RouterView");
                    return (0,
                    i.R1)(t) || (0,
                    i.R1)(d) ? ((0,
                    n.uX)(),
                    (0,
                    n.Wv)(o, {
                        key: 1
                    })) : ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", x, [(0,
                    n.bF)(f)]))
                }
            }
        }
          , T = C
          , A = T
    }
}]);
