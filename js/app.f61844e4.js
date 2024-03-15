(()=>{
    var e = {
        21109: (e,o,t)=>{
            "use strict";
            var n = t(29104)
              , r = t(69410)
              , i = t(38734)
              , a = t(61758);
            function s(e, o) {
                const t = (0,
                a.g2)("RouterView");
                return (0,
                a.uX)(),
                (0,
                a.Wv)(t)
            }
            var _ = t(12807);
            const E = {}
              , l = (0,
            _.A)(E, [["render", s]])
              , T = l;
            var u = t(60604)
              , S = t(60455);
            const c = [{
                path: "/",
                component: ()=>Promise.all([t.e(121), t.e(996), t.e(489)]).then(t.bind(t, 53489)),
                children: [{
                    path: "",
                    component: ()=>Promise.all([t.e(121), t.e(996), t.e(144)]).then(t.bind(t, 16828))
                }, {
                    path: "component",
                    component: ()=>Promise.all([t.e(121), t.e(996), t.e(769)]).then(t.bind(t, 57311))
                }, {
                    path: "/terms",
                    component: ()=>Promise.all([t.e(121), t.e(996), t.e(144)]).then(t.bind(t, 16828))
                }, {
                    path: "/referral/:code",
                    component: ()=>Promise.all([t.e(121), t.e(996), t.e(144)]).then(t.bind(t, 16828))
                }, {
                    path: "/vote",
                    component: ()=>Promise.all([t.e(121), t.e(996), t.e(144)]).then(t.bind(t, 16828))
                }]
            }]
              , I = c;
            var N = t(45551)
              , O = t(90587)
              , d = t(65329)
              , h = function(e, o, t, n) {
                function r(e) {
                    return e instanceof t ? e : new t((function(o) {
                        o(e)
                    }
                    ))
                }
                return new (t || (t = Promise))((function(t, i) {
                    function a(e) {
                        try {
                            _(n.next(e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function s(e) {
                        try {
                            _(n["throw"](e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function _(e) {
                        e.done ? t(e.value) : r(e.value).then(a, s)
                    }
                    _((n = n.apply(e, o || [])).next())
                }
                ))
            };
            const R = (0,
            u.wE)((function() {
                const e = S.LA
                  , o = (0,
                S.aE)({
                    scrollBehavior: ()=>({
                        left: 0,
                        top: 0
                    }),
                    routes: I,
                    history: e("/")
                });
                return o.beforeEach(((e,o,t)=>h(this, void 0, void 0, (function*() {
                    var o, n, r, i, a, s;
                    const _ = (0,
                    N.Z)()
                      , {isAuthenticated: E} = (0,
                    O.bP)(_)
                      , l = ["vote", "geo", "students", "tt", "fb", "ig", "tele", "web", "reen", "yuni", "jess", "playinsg", "hall10", "hall16", "crescenthall", "hall8", "pioneerhall", "hall12", "hall7", "raffleshall", "hall15", "email", "hall14", "hall1", "saracahall"];
                    return l.includes(null === (n = null === (o = e.redirectedFrom) || void 0 === o ? void 0 : o.path) || void 0 === n ? void 0 : n.replace("/", "")) && d.m.trackData(null === (r = e.redirectedFrom) || void 0 === r ? void 0 : r.path.replace("/", "")),
                    (e.params.code || (null === (i = e.redirectedFrom) || void 0 === i ? void 0 : i.params.code)) && _.setReferralCode(e.params.code || (null === (a = e.redirectedFrom) || void 0 === a ? void 0 : a.params.code)),
                    "/found" !== e.path && "/found" !== (null === (s = e.redirectedFrom) || void 0 === s ? void 0 : s.path) || _.setAccessFoundCoin(!0),
                    yield _.fetchSettings(),
                    E.value || (yield _.playAsGuest(),
                    yield _.fetchEvents(),
                    "/" === e.path) ? E.value && (yield _.fetchUser(),
                    yield _.fetchEvents(),
                    "/" !== e.path) ? t("/") : t() : t("/")
                }
                )))),
                o
            }
            ));
            async function C(e, o) {
                const t = e(T);
                t.use(r.A, o);
                const n = (0,
                i.IG)("function" === typeof R ? await R({}) : R);
                return {
                    app: t,
                    router: n
                }
            }
            var A = t(43237)
              , p = t(85683)
              , m = t(79786);
            const P = {
                config: {},
                plugins: {
                    Notify: A.A,
                    Loading: p.A,
                    LocalStorage: m.A
                }
            };
            var U = t(81750);
            const f = "/";
            async function y({app: e, router: o}, t) {
                let n = !1;
                const r = e=>{
                    try {
                        return o.resolve(e).href
                    } catch (t) {}
                    return Object(e) === e ? null : e
                }
                  , i = e=>{
                    if (n = !0,
                    "string" === typeof e && /^https?:\/\//.test(e))
                        return void (window.location.href = e);
                    const o = r(e);
                    null !== o && (window.location.href = o)
                }
                  , a = window.location.href.replace(window.location.origin, "");
                for (let _ = 0; !1 === n && _ < t.length; _++)
                    try {
                        await t[_]({
                            app: e,
                            router: o,
                            ssrContext: null,
                            redirect: i,
                            urlPath: a,
                            publicPath: f
                        })
                    } catch (s) {
                        return s && s.url ? void i(s.url) : void U.error("[Quasar] boot error:", s)
                    }
                !0 !== n && (e.use(o),
                e.mount("#q-app"))
            }
            C(n.Ef, P).then((e=>{
                const [o,n] = void 0 !== Promise.allSettled ? ["allSettled", e=>e.map((e=>{
                    if ("rejected" !== e.status)
                        return e.value.default;
                    U.error("[Quasar] boot error:", e.reason)
                }
                ))] : ["all", e=>e.map((e=>e.default))];
                return Promise[o]([Promise.resolve().then(t.bind(t, 40886)), Promise.resolve().then(t.bind(t, 77854)), Promise.resolve().then(t.bind(t, 85405))]).then((o=>{
                    const t = n(o).filter((e=>"function" === typeof e));
                    y(e, t)
                }
                ))
            }
            ))
        }
        ,
        77854: (e,o,t)=>{
            "use strict";
            t.r(o),
            t.d(o, {
                api: ()=>l,
                default: ()=>T
            });
            var n, r = t(60604), i = t(79786), a = t(16306), s = t.n(a), _ = t(24974), E = function(e, o, t, n) {
                function r(e) {
                    return e instanceof t ? e : new t((function(o) {
                        o(e)
                    }
                    ))
                }
                return new (t || (t = Promise))((function(t, i) {
                    function a(e) {
                        try {
                            _(n.next(e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function s(e) {
                        try {
                            _(n["throw"](e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function _(e) {
                        e.done ? t(e.value) : r(e.value).then(a, s)
                    }
                    _((n = n.apply(e, o || [])).next())
                }
                ))
            };
            (function(e) {
                e["application/json"] = "application/json"
            }
            )(n || (n = {}));
            const l = s().create({
                baseURL: "https://vn.huntthemouse.sqkii.com/api",
                withCredentials: !0
            });
            l.interceptors.request.use((function(e) {
                const o = i.A.getItem("htm-2024_token");
                return e.headers = S(e),
                o && (e.headers.authorization = `Bearer ${o.toString()}`),
                e.data && (e.data = u(e.data)),
                e.params && (e.params = u(e.params)),
                e
            }
            ), (function(e) {
                return Promise.reject(e)
            }
            )),
            l.interceptors.response.use((e=>"success" === e.data.status ? e.data : (401 === e.data.error_code && (localStorage.removeItem("htm-2024_token"),
            location.reload()),
            Promise.reject((null === e || void 0 === e ? void 0 : e.data) || {
                data: void 0
            }))), (e=>E(void 0, void 0, void 0, (function*() {
                var o;
                return Promise.reject((null === (o = e.response) || void 0 === o ? void 0 : o.data) || "Network Error")
            }
            ))));
            const T = (0,
            r.zj)((({app: e})=>{
                e.config.globalProperties.$axios = s(),
                e.config.globalProperties.$analytic = e=>l.post("/user/action", e),
                e.config.globalProperties.$api = l
            }
            ));
            function u(e) {
                return Object.keys(e).map((o=>{
                    void 0 == e[o] && delete e[o]
                }
                )),
                e
            }
            function S(e) {
                var o;
                const t = {
                    "Content-Type": n["application/json"],
                    ctime: +new Date
                };
                let r = e.url || "";
                r.startsWith("/") || (r = "/" + r);
                const i = `${(null === (o = e.method) || void 0 === o ? void 0 : o.toUpperCase()) || ""}\n${t["Content-Type"]}\n${t["ctime"] || ""}\n${r}\n`;
                return t.sig = (0,
                _.Gz)("sha256", "eDpvnHuxCsGHiJTX").update(i).digest("base64"),
                t
            }
        }
        ,
        40886: (e,o,t)=>{
            "use strict";
            t.r(o),
            t.d(o, {
                default: ()=>s
            });
            var n = t(60604)
              , r = t(32456)
              , i = t(27005)
              , a = function(e, o, t, n) {
                function r(e) {
                    return e instanceof t ? e : new t((function(o) {
                        o(e)
                    }
                    ))
                }
                return new (t || (t = Promise))((function(t, i) {
                    function a(e) {
                        try {
                            _(n.next(e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function s(e) {
                        try {
                            _(n["throw"](e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function _(e) {
                        e.done ? t(e.value) : r(e.value).then(a, s)
                    }
                    _((n = n.apply(e, o || [])).next())
                }
                ))
            };
            const s = (0,
            n.zj)((({app: e})=>a(void 0, void 0, void 0, (function*() {
                const o = yield(0,
                i.A)()
                  , t = (0,
                r.hU)({
                    legacy: !1,
                    messages: o,
                    warnHtmlMessage: !1,
                    warnHtmlInMessage: "off",
                    locale: "en",
                    missingWarn: !1
                });
                e.use(t)
            }
            ))))
        }
        ,
        85405: (e,o,t)=>{
            "use strict";
            t.r(o),
            t.d(o, {
                default: ()=>i
            });
            var n = t(60604)
              , r = t(90587);
            const i = (0,
            n.zj)((({app: e})=>{
                e.use((0,
                r.Ey)())
            }
            ))
        }
        ,
        27005: (e,o,t)=>{
            "use strict";
            t.d(o, {
                A: ()=>E
            });
            var n = t(77854)
              , r = t(79786)
              , i = t(43436);
            const a = JSON.parse('{"SILVERCOIN_SILVERCOINFOUND_TITLE_VERIFYING":"Silver Burger #{order}","ONBOARDING_INSTRUCTION_1":"Find a Silver Burger to get a <br/><b>Nintendo Switch</b>!","ONBOARDING_COINVALUE_SILVER_1":"Worth","ONBOARDING_COINVALUE_SILVER_3":"each","ONBOARDING_BUTTON":"Start hunting!","LOADING_LOADINGTEXT_1":"Snacking on fried chicken...","LOADING_LOADINGTEXT_2":"You do not have to enter private property to find the Silver Burgers.","SAFETY_WELCOMETEXT_TITLE":"Welcome, Hunter!","SAFETY_WELCOMETEXT_1":"Here are some safety hints to help you search for the coins:","SAFETY_HINT1_TITLE":"The coins are not hidden in places that are restricted or require you to trespass.","SAFETY_HINT1_DESC":"This includes grass patches where stepping is prohibited. The coins are also not hidden in private residential property.","SAFETY_HINT2_TITLE":"You do not have to put yourself in danger to find the coins.","SAFETY_HINT2_DESC":"The coins are not hidden on roads, train tracks, or places of complete darkness.","SAFETY_HINT3_TITLE":"You do not have to vandalise, open, or dismantle objects to find the coins.","SAFETY_HINT3_DESC":"For example, rubbish bins, risers, plant displays, pebble displays, etc.","SAFETY_HINT4_TITLE":"The coins will not be hidden in waterworks, any water bodies, or underwater.","SAFETY_HINT4_DESC":"You do not have to enter water bodies or look inside drains.","SAFETY_HINT5_TITLE":"The coins will not be buried underground.","SAFETY_HINT5_DESC":"You do not have to damage lawns, beaches, etc.","SAFETY_HINT6_TITLE":"The coins will not be hidden in places of worship.","SAFETY_HINT6_DESC":"You do not have to enter mosques, churches, temples, synagogues, etc.","SAFETY_HINT7_TITLE":"The Silver Burgers will not be hidden within Science Centre Singapore’s carpark area, food establishments, and cordoned off areas.","SAFETY_HINT7_DESC":"This includes restaurants, cafes, food stalls, and places that are restricted within Science Centre Singapore.","SAFETY_WELCOMETEXT_2":"P.S. Remember to be considerate of your surroundings and people around you! Stay safe while hunting in the sun and/or at night!","SAFETY_TERMSANDCONDITIONS":"By playing {currentSeasonHuntName}, I acknowledge and agree to the safety messages and <span class=\\"underline color-primary\\" id=\\"TC\\">Terms & Conditions</span>.","SAFETY_BUTTON":"I agree","SAFETY_CHECKBOX":"Don’t show me again today","LEGEND_SILVER_UPCOMING":"Upcoming Silver Burger location","PRELAUNCH_BANNER_1":"10 Silver Burgers","PRELAUNCH_BANNER_2":"will be hidden here in {countdown}","TIPSANDTRICKS_TIMIIMESSAGE_GREETING":"Hi there, Guest Account #{userID}!","TIPSANDTRICKS_TIMIIMESSAGE_SILVER":"<b>10 Silver Burgers</b> exchangeable for a <b>Nintendo Switch each</b> will be hidden around SG in {TIME}!","TIPSANDTRICKS_TIMIIMESSAGE_SILVER_TO_BE_FOUND":"There are {number} Silver Burgers to be found!","CITY_CURRENT":"HCM","ENDGAMESCENARIOS_COUNTDOWN_1":"Starting in...","ENDGAMESCENARIOS_COUNTDOWN_2":"10D 23H 59M","ENDGAMESCENARIOS_COUNTDOWN_3":"Tap to find out more","MENU_FAIRNESS_HEADER":"Ensuring Fairness","MENU_FAIRNESS_DESCRIPTION":"Find out how Sqkii ensures fairness in our signature hunts.","MENU_FOUNDACOIN":"Found a Silver Burger?","MENU_CTA":"Follow us to stay updated on the hunt!","MENU_INVENTORY_2":"Get Crystals","MENU_INVENTORY_1":"Found a <br/> coin?","TIMELINE_TITLE":"JUN ‘23","TIMELINE_COUNTRY":"Ho Chi Minh City, VN","TIMELINE_COUNTDOWN":"10D 23H 59M","TIMELINE_COMINGSOON_DESC":"Find a Silver Coin to receive <amount here>!","TIMELINE_COMINGSOON_SUBTEXT":"This is a sample map. The position of the Silver Coin locations may change at the start of the hunt.","TIMELINE_REGISTERINTEREST_BUTTON":"Register your interest","TIMELINE_REGISTERINTERESTFORM_TITLE":"{currentSeasonHuntName}","TIMELINE_REGISTERINTERESTFORM_DESC":"By submitting your email address, you grant Sqkii consent to send email(s) that relate to upcoming hunts.","TIMELINE_EMAILADDRESS_3":"Email address","TIMELINE_INTTOJOINGAMEAS":"I’m interested to join the game as","TIMELINE_REGISTERINTERESTFORM_BUTTON":"Submit","TIMELINE_INTTOJOINGAMEAS_1":"A brand","TIMELINE_INTTOJOINGAMEAS_2":"A player","SERIALNUMBER_ERROR_3":"This serial number has already been entered. Please try another.","TIMELINE_EMAILADDRESSSUBMITTED_TITLE":"Email address submitted!","TIMELINE_EMAILADDRESSSUBMITTED_PLAYER_DESC":"Thank you for registering your interest for {hunt_name}!<br/><br/> \\n When the hunt begins, we’ll let you know at the following email address:","TIMELINE_EMAILADDRESSSUBMITTED_PLAYER_CTA":"Follow us on social media to stay updated on the hunt!","TIMELINE_EMAILADDRESSSUBMITTED_BUSINESS_DESC":"Thank you for registering your interest for {hunt_name}!<br/><br/>\\n We’ll reach out to you via email within 3 working days at the following email address:","TIMELINE_EMAILADDRESSSUBMITTED_BUSINESS_CTA":"Please check your spam or junk folder if you don’t receive it after 3 working days!<br/><br/>\\n Follow us on social media to stay updated on the hunt!","TIMELINE_REGISTER_ERROR":"Invalid credentials","TIMELINE_REGISTER_BRAND_NOTE":"Please provide your business email address instead of your personal email address.","TIMELINE_REGISTERED_BUTTON":"Your interest has been registered!","F":"Find a Silver Coin to exchange for ฿10,000!","SILVERCOINPOPUP_COIN_COUNT":"Silver Burger {order} of {total_silver_coin}","SILVERCOINPOPUP_COIN_1":"Silver Burger #{order}","SILVERCOINPOPUP_COIN_2":"Find this Silver Burger to get a","SILVERCOINPOPUP_COIN_PRIZE":"<b>Nintendo Switch!</b>","SILVERCOINPOPUP_COIN_TIMER_PRE":"Will be hidden in: {countdown}","SETTINGS_HEADING":"Settings","SETTINGS_NOTLOGGEDIN_HELLO":"Hello,","SETTINGS_NOTLOGGEDIN_GUESTNAME":"Guest #{HUNTER_ID}","SETTINGS_BUTTON_SIGNUPFORANACCOUNT":"Sign up for an account","SETTINGS_BUTTON_IHAVEANACCOUNT":"I have a #HuntTheMouse account","SETTINGS_BGM":"Background music","SETTINGS_SFX":"Sound effects","SETTINGS_SOCIALMEDIA":"Follow us on social media to stay updated on the hunt!","SETTINGS_GPS":"Troubleshoot GPS","SETTINGS_T&CS":"Terms & Conditions","SETTINGS_FAQS":"FAQs","SETTINGS_LOGGEDINAS":"You’re logged in as","SETTINGS_HUNTERNAME":"Hunter #{HUNTER_ID}","SETTINGS_LOGGEDIN_3":"Don’t like your Hunter ID?","SETTINGS_BUTTONCOPY_CHANGEHUNTERID":"Change Hunter ID","SETTINGS_BUTTON_LOGOUT":"Log out","SETTINGS_LEAVINGPOPUP_HEADING":"Leaving so soon?","SETTINGS_LEAVINGPOPUP_DESC":"Are you sure you want to log out of this account?","ADVENTURELOG_POPUP_HEADING":"Sqkii’s adventure log","ADVENTURELOG_POPUP_DESCRIPTION_1":"#HuntTheMouse in 2023","ADVENTURELOG_POPUP_DESCRIPTION_2":"Tap on a location below to quickly visit the city on the map!","ADVENTURELOG_POPUP_UPCOMING":"Upcoming","ADVENTURELOG_CURRENT_DATE_PRE":"Starting in {countdown}","ADVENTURELOG_CURRENT_LOCATION":"Silver Burger Quest, Singapore","ADVENTURELOG_CURRENT_SILVER":"10 Silver Burgers exchangeable for a Nintendo Switch each","ADVENTURELOG_POPUP_COMPLETED":"Completed","ADVENTURELOG_7_PAST_DATE":"November 2023","ADVENTURELOG_7_PAST_LOCATION":"Singapore","ADVENTURELOG_7_PAST_SILVER":"10 Silver Burgers worth 1 Nintendo Switch each","ADVENTURELOG_6_PAST_DATE":"June 2023","ADVENTURELOG_6_PAST_LOCATION":"Ho Chi Minh City, Vietnam","ADVENTURELOG_6_PAST_SILVER":"5 Silver Coins worth 5,000,000₫ each","ADVENTURELOG_5_PAST_DATE":"May 2023","ADVENTURELOG_5_PAST_LOCATION":"Bangkok, Thailand","ADVENTURELOG_5_PAST_SILVER":"5 Silver Coins worth ฿10,000 each","ADVENTURELOG_4_PAST_DATE":"May 2023","ADVENTURELOG_4_PAST_LOCATION":"Jakarta, Indonesia","ADVENTURELOG_4_PAST_SILVER":"5 Silver Coins worth Rp 5,000,000 each","ADVENTURELOG_3_PAST_DATE":"May 2023","ADVENTURELOG_3_PAST_LOCATION":"Kuala Lumpur, Malaysia","ADVENTURELOG_3_PAST_SILVER":"5 Silver Coins worth RM1,000 each","ADVENTURELOG_2_PAST_DATE":"April 2023","ADVENTURELOG_2_PAST_LOCATION":"Johor Bahru, Malaysia","ADVENTURELOG_2_PAST_SILVER":"3 Silver Coins worth RM1,000 each","ADVENTURELOG_1_PAST_DATE":"March 2023","ADVENTURELOG_1_PAST_LOCATION":"Singapore","ADVENTURELOG_1_PAST_GOLD":"1 Gold Coin worth S$50,000","ADVENTURELOG_1_PAST_SILVER":"100 Silver Coins worth S$500 each","ADVENTURELOG_POPUP_MOREHUNTS":"View more hunts here","5 Silver Coins":"5 Silver Coins","BANNER_TOBEHIDDEN":"will be hidden here in {countdown}","BANNER_TIMESUP":"Time\'s up for this coin!","SILVERCOIN_SILVERCOINNOTFOUND_1":"Silver Coin {number}","SILVERCOIN_SILVERCOINNOTFOUND_2":"This coin is no longer available to be found.","SILVERCOIN_SILVERCOINNOTFOUND_3":"This coin was not found by the end of the hunt and is no longer playable.<br/><br/>\\n Look out for new coins in the next hunt and search with more friends to find them!","SILVERCOIN_SILVERCOINNOTFOUND_CTA":"Follow us on social media to stay updated on the hunt!","GPS_ALLOWGPSPOPUP_HEADING":"Allow GPS?","GPS_ALLOWGPSPOPUP_DESCRIPTION_1":"The in-game map is based on real locations around you.","GPS_ALLOWGPSPOPUP_PERMISSION_1":"{url} would like to use your current location","GPS_ALLOWGPSPOPUP_PERMISSION_2":"Don’t Allow","GPS_ALLOWGPSPOPUP_PERMISSION_3":"OK","GPS_ALLOWGPSPOPUP_DESCRIPTION_2":"You’ll have to enable your Location Services to play!","GPS_ALLOWGPSPOPUP_BUTTON_LATER":"Later","GPS_ALLOWGPSPOPUP_BUTTON_ALLOWGPS":"Allow GPS","GPS_ERROR_NOT_DETECTED":"GPS not detected. If your location is still not showing up on the map, go to your settings and enable location services for the browser you’re on (Chrome, Safari).\\n Refresh this page once you have updated your location settings.<br/><br/><div class=\\"flex items-center justify-between full-width\\"><a class=\\"underline color-yellow\\" href=\\"https://support.apple.com/en-sg/HT207092\\" target=\\"_blank\\">Troubleshoot for iOS</a><a class=\\"underline color-yellow\\" href=\\"https://support.google.com/accounts/answer/6179507?hl=en&ref_topic=7189122\\" target=\\"_blank\\">Troubleshoot for Android</a></div>","GPS_ERROR_OUTSIDE_PRELAUNCH":"<div class=\\"text-sm\\">Looks like you’re outside of the playing area for this hunt!</div><div class=\\"mt-10\\">\\n Make sure that you’re located within Singapore, or check your GPS signal and refresh your browser to try again.</div>\\n <div class=\\"flex items-center justify-between mt-20 full-width\\"><a class=\\"underline color-yellow\\" href=\\"https://support.apple.com/en-sg/HT207092\\" target=\\"_blank\\">Troubleshoot for iOS</a><a class=\\"underline color-yellow\\" href=\\"https://support.google.com/accounts/answer/6179507?hl=en&ref_topic=7189122\\" target=\\"_blank\\">Troubleshoot for Android</a></div> <div id=\\"upcoming\\" class=\\"mt-20 font-bold text-center underline\\">Or see upcoming hunts</div></div>","GPS_ERROR_IOS":"Troubleshoot for iOS","GPS_ERROR_ANDRIOD":"Troubleshoot for Android","GPS_GPSENABLED":"Your GPS has been enabled.","GPS_ERROR_INSTRUCTION":"Looks like you’re outside of the playing area for this hunt!\\n Make sure that you’re located within Singapore, or check your GPS signal and refresh your browser to try again.","LOGIN_TITLE":"Log in to #HuntTheMouse","LOGIN_ALREADYHAVEACC":"It seems you already have an account. Enter your password to log in.","MOBILE_NUMBER":"Mobile Number","LOGIN_BASE":"Password","LOGIN_FORGOTPASSWORD":"Forgot password","LOGIN_BUTTON":"Log in","LOGIN_SIGNUP":"Don’t have an account? <span class=\\"color-primary underline\\" id=\\"SIGNUP\\">Sign up here.</span>","LOGIN_ERROR":"Invalid mobile number or password.<br/><br/>\\nYou have {numAttempts} attempts remaining before your account is locked. Please try again or tap “Forgot password” if you’d like to reset it!","LOGIN_ACCOUNTLOCKED_TITLE":"Account locked!","LOGIN_ACCOUNTLOCKED_DESC":"Your account has been locked temporarily due to 5 failed login attempts. Please try again after 5 minutes!","LOGIN_ACCOUNTLOCKED_BUTTON_COUNTDOWN":"Back to Login ({TIME}s)","LOGIN_ACCOUNTLOCKED_BACKTOMAP":"Return to map","LOGIN_ACCOUNTLOCKED_BUTTON":"Back to Login","LOGIN_ACCOUNTBANNED_TITLE":"Account banned!","LOGIN_ACCOUNTBANNED_DESC":"Your account has been banned due to suspicious activity. Please contact Sqkii on <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a> if you need assistance.","FORGOTPASSWORD_TITLE":"Forgot password","FORGOTPASSWORD_DESC":"No worries! Just tell us the mobile number you signed up with and we’ll send you an OTP.","FORGOTPASSWORD_BUTTON_SENDOTP":"Send OTP","FORGOTPASSWORD_OTPMESSAGE_INVALIDMOBILENUMBERERROR":"Please enter a valid mobile number.","FORGOTPASSWORD_ACCOUNTEXISTS_1":"If you have a #HuntTheMouse account, the following number will receive an OTP:","FORGOTPASSWORD_ACCOUNTEXISTS_3":"Enter it below to create a new password:","FORGOTPASSWORD_DIDNTRECEIVE":"Didn’t receive OTP? Tap here to resend ({TIME}s).","FORGOTPASSWORD_BUTTON_NEXT":"Next","FORGOTPASSWORD_ACCOUNTEXISTS_OTPINVALIDOREXPIRED":"The OTP you’ve entered is invalid or has expired. Please try again!","FORGOTPASSWORD_ACCOUNTEXISTS_OTPREACHEDLIMIT":"You’ve reached the limit of 5 resend attempts. Please contact Sqkii on <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a> for help!","FORGOTPASSWORD_CREATENEWPASSWORD_1":"Great! Now create a new password for your #HuntTheMouse account.","FORGOTPASSWORD_CREATENEWPASSWORD_2":"Password","FORGOTPASSWORD_CREATENEWPASSWORD_3":"Re-enter Password","FORGOTPASSWORD_CREATENEWPASSWORD_PASSWORDREQUIREMENT_1":"At least 8 characters","FORGOTPASSWORD_CREATENEWPASSWORD_PASSWORDREQUIREMENT_2":"At least 1 digit (0-9)","FORGOTPASSWORD_CREATENEWPASSWORD_PASSWORDREQUIREMENT_3":"At least 1 lowercase character (a-z)","FORGOTPASSWORD_CREATENEWPASSWORD_PASSWORDREQUIREMENT_4":"At least 1 uppercase character (A-Z)","FORGOTPASSWORD_CREATENEWPASSWORD_PASSWORDREQUIREMENT_5":"At least 1 special character (! &commat; # $ %)","FORGOTPASSWORD_CREATENEWPASSWORD_PASSWORDSMUSTMATCH":"Passwords must match","FORGOTPASSWORD_PASSWORDRESET_1":"Your password has been reset! Please log in with your new password.","SIGNUP_FORM_TITLE":"Save your progress","SIGNUP_FORM_DESC":"Create a #HuntTheMouse account to save your hunt progress!","SIGNUP_FORM_BUTTON":"Next","SIGNUP_FORM_LOGIN":"Already have a #HuntTheMouse account? \\n <span class=\\"color-primary underline\\" id=\\"LOGIN\\">Log in here</span>.","SIGNUP_FORM_INVALIDMOBILENUMBER":"Invalid mobile number. We’re working on including more countries’ numbers, but you can still play using a guest account for now!","SIGNUP_FORM_MOBILE_ERROR":"The mobile number entered is already in use. Please try again with another number.","SIGNUP_FORM_OTPTEXT_1":"We’ve sent an OTP to","SIGNUP_FORM_OTPTEXT_3":"Enter it below to continue:","SIGNUP_FORM_OTPTEXT_RESEND":"Didn’t receive OTP? <span class=\\"color-primary underline\\" id=\\"resendOTP\\">Tap here to resend ({TIME}s).</span>","SIGNUP_FORM_OTPTEXT_ERROR_1":"The OTP you’ve entered is invalid or has expired. Please try again!","SIGNUP_FORM_OTPTEXT_ERROR_2":"You’ve reached the limit of 5 resend attempts. Please contact Sqkii on <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a> for help!","SIGNUP_FORM_PASSWORDDESC":"Create a password for your account","SIGNUP_PASSWORDREQUIREMENT_1":"At least 8 characters","SIGNUP_PASSWORDREQUIREMENT_2":"At least 1 digit (0-9)","SIGNUP_PASSWORDREQUIREMENT_3":"At least 1 lowercase character (a-z)","SIGNUP_PASSWORDREQUIREMENT_4":"At least 1 uppercase character (A-Z)","SIGNUP_PASSWORDREQUIREMENT_5":"At least 1 special character (! &commat; # $ %)","SIGNUP_CREATEACCOUNT_CREATEPASSWORD_2":"Password","SIGNUP_CREATEACCOUNT_CREATEPASSWORD_4":"Re-enter Password","SIGNUP_TNC_CHECKBOX":"I have read and agree to the <span class=\\"underline color-primary\\" id=\\"TC\\">Terms and Conditions</span>.","SIGNUP_FORM_CREATEACCBUTTON":"Create account","SIGNUP_PASSWORDREQUIREMENT_6":"Passwords must match","SIGNUP_TNC_ERROR":"Please agree to the Terms and Conditions to proceed.","SIGNUP_CREATED_TITLE":"#HuntTheMouse account created!","SIGNUP_CREATED_DESC":"You have signed up as","SIGNUP_CREATED_HUNTER":"Hunter","SIGNUP_CREATED_GUEST":"Guest","SIGNUP_BUTTONCOPY_BACKTOMAP":"Back to map","SIGNUP_HELP_TITLE":"Don’t like your Hunter ID?","SIGNUP_HELP_DESC":"Don’t worry, you can change your Hunter ID later in the game’s settings.","OLDBUILD_HEADING":"Game build updated!","OLDBUILD_TEXT":"Clear cache and refresh the game to enjoy the most updated version and for the best hunting experience!","OLDBUILD_BUTTON_OK":"Refresh game","ENSURINGFAIRNESS_TITLE":"Ensuring Fairness","ENSURINGFAIRNESS_DESC":"Read more about how we ensure fairness for all players of #HuntTheMouse.","ENSURINGFAIRNESS_1_TITLE":"Eligibility","ENSURINGFAIRNESS_1_BODY":"All past and present staff of Sqkii and their immediate family members are not eligible to take part in #HuntTheMouse. <br/><br/>\\n In addition, despite not knowing the locations of the hidden items, working teams of our partners (if any) are also not eligible to take part in #HuntTheMouse. You may view the complete list of partners (if any) in the T&Cs.<br/><br/>\\n Details of all winners are carefully cross-checked to verify their eligibility before any prizes are processed.","ENSURINGFAIRNESS_2_TITLE":"Secured planning","ENSURINGFAIRNESS_2_BODY":"All sensitive information (such as hidden items hiding spots) is managed under strict protocols to prevent any leaks or foul play. <br/><br/>Our partners (if any) also do not have access to such information.","ENSURINGFAIRNESS_3_TITLE":"Hidden item updates","ENSURINGFAIRNESS_3_BODY":"We exercise due diligence in updating the status of the hidden items throughout the campaign. As soon as we are notified that the hidden item is found, immediate action is taken to verify the winner and update all other hunters.","ENSURINGFAIRNESS_4_TITLE":"Encrypted data","ENSURINGFAIRNESS_4_BODY":"All PII data (Personally identifiable information) collected for #HuntTheMouse will be safely-encrypted and used only for the campaign. Rest assured that your data is kept private and confidential.","COUNTDOWN_CTA":"The easiest #HuntTheMouse yet!","COUNTDOWN_CTA_DESC":"Scan here to hunt on your mobile.","LANDING_ENGPROMPT_DONOTTRANSLATE":"Want to play the #HuntTheMouse in English? <span class=\\"underline color-primary\\" id=\\"setting\\">Tap here</span>.","flavour_text_1":"Putting on make-up…","flavour_text_2":"Gathering courage…","flavour_text_3":"Running like the wind…","flavour_text_4":"Checking the map…","LEGEND_SILVERLAUNCHED":"Possible Silver Burger location","SAFETYREMINDER":"Reminder: You do not have to trespass to find the Silver Burgers! | Reminder: Use hand sanitiser often","MAIN_SAFETY REMINDER":"Reminder: You do not have to trespass to find the Silver Burgers! | Reminder: Use hand sanitiser often","ADVENTURELOG_POPUP_CURRENT":"Current","ADVENTURELOG_PAST_DATE":44986,"ADVENTURELOG_PAST_LOCATION":"Singapore","ADVENTURELOG_PAST_SILVER":"100 Silver Coins worth S$500 each","ADVENTURELOG_PAST_GOLD":"1 Gold Coin worth S$50,000","ADVENTURELOG_POPUP_UPCOMINGHUNTS":"View upcoming hunts here.","PROMOCODEQRNOACTIVITYBEFORE_SAFETYREMINDER":"Reminder: You do not have to trespass to find the Silver Burgers! | Reminder: Use hand sanitiser often","CITY_PAST_1":"BKK","CITY_PASTDATE_1":"MAY’23","MENU_DATE_TITLE":"JUN\'23","MENU_DATE_DESC":"Ongoing","SILVERCOIN_ELIGIBILITY":"Congratulations on finding a Silver Burger! Do note that you are no longer eligible to find any more Silver Burgers in this hunt!","SILVERCOIN_SILVERCOINFOUND_CONGRATS":"Congratulations!","SILVERCOIN_SILVERCOINFOUND_YOUFOUND":"You found","SILVERCOIN_SILVERCOINFOUND_WHATSNEXT":"What’s next?","SILVERCOIN_SILVERCOINFOUND_DESC":"Complete the following <b>within 24 hours</b> to receive your prize.","SILVERCOIN_PROCESS_1":"Enter Silver Burger serial no.","SILVERCOIN_PROCESS_2":"Enter personal details","SILVERCOIN_PROCESS_3":"Accept Winner’s Agreement","SILVERCOIN_PROCESS_4":"Provide bank account details","SILVERCOIN_PROCESS_5":"Send verification video","SILVERCOIN_PROCESS_6":"Exchange the Silver Burger for your prize at Science Centre Singapore on 9 – 12 Dec 2023","SILVERCOIN_PROCESS_7":"Receive your prize!","SILVERCOIN_BUTTON_PROCEED":"Proceed","SILVERCOIN_FORM_TITLE":"Enter personal details","SILVERCOIN_FORM_DESC":"This information is required for us to verify that you have found the Silver Burger.","SILVERCOIN_FIRSTNAME_1":"First Name","SILVERCOIN_LASTNAME_1":"Last Name","SILVERCOIN_NRIC":"Last 4 characters of your Identification Number","SILVERCOIN_MOBILENUMBER_1":"Mobile Number","SILVERCOIN_REENTERMOBILE":"Re-enter Mobile Number","SILVERCOIN_FORM_MOBILENUMINFO":"Your mobile number may be used to contact you for prize redemption. Please ensure that it is correct!","SILVERCOIN_AGE":"Please confirm your age","SILVERCOIN_FORM_BUTTON":"Submit","SILVERCOIN_INVALIDENTEREDMOBILENUMBER":"Mobile numbers do not match","SILVERCOIN_PARENT_TITLE":"Parent/Legal guardian details","SILVERCOIN_PARENT_DESC":"As you are below the age of 18, please provide the details of your parent/legal guardian who will be agreeing to the Winner’s Agreement on your behalf.","SILVERCOIN_PARENT_FIRSTNAME":"Parent/Legal Guardian’s First Name","SILVERCOIN_PARENT_LASTNAME":"Parent/Legal Guardian’s Last Name","SILVERCOIN_PARENT_NRIC":"Last 4 characters of Parent/Legal Guardian’s Identification Number","SILVERCOIN_PARENT_MOBILENUMBER":"Parent/Legal Guardian’s Mobile Number","SILVERCOIN_PARENT_REENTERMOBILENUMBER":"Re-enter Parent/Legal Guardian’s Mobile Number","Key in mobile number":"Re-enter Parent/Legal Guardian’s Mobile Number","SILVERCOIN_WINNERSAGREEMENT":"Winner’s Agreement","WINNERSAGREEMENT_ENGTAB":"English","WINNERSAGREEMENT_TRANSLATEDTAB":"Vietnamese","SILVERCOIN_WINNERSAGREEMENT_CHECKBOX":"I have read and agree to the Winner’s Agreement.","SILVERCOIN_WINNERSAGREEMENT_BUTTON":"Submit","WINNERSAGREEMENT_TRANSLATED_NOTE":"Please note that the Vietnamese version is provided as a reference for your convenience. In the event of any discrepancies, the English version should be taken as the official Winner’s Agreement.","SILVERCOIN_BANKDETAILSFORM":"Bank account details","SILVERCOIN_BANKACC_DESC":"This information is required for us to transfer you the prize after verification.","SILVERCOIN_BANKACC_COUNTRY":"Country of Residence","SILVERCOIN_BANKACC_CURRENCY":"Currency to receive prize in","SILVERCOIN_BANKACC_NAME":"Name on Bank Account","SILVERCOIN_BANKACC_BANKNAME":"Bank Name","SILVERCOIN_BANKACC_BANKCODE":"Bank Code","SILVERCOIN_BANKACC_BRANCHCODE":"Branch Code (if applicable)","SILVERCOIN_BANKACC_ACCNUM":"Bank Account Number","SILVERCOIN_BANKACC_TERMS":"Refer to the <span id=\\"TC\\" class=\\"underline color-primary\\">Terms & Conditions</span> to view eligible bank accounts for prize transfer.","SILVERCOIN_FORM_SGDINFO":"The prize will be converted into Singapore Dollars (SGD) at the currency exchange rate on Wise Payments Limited at 08:00 hrs GMT+8 on the day of the discovery of the Silver Coin","SILVERCOIN_VERIFICATIONVIDEO_TITLE":"Verification video","SILVERCOIN_VERIFICATIONVIDEO_STEP1_1":"Step 1:","SILVERCOIN_VERIFICATIONVIDEO_STEP1_2":"Take a 15 second video of where you found the Silver Burger.","SILVERCOIN_VERIFICATIONVIDEO_STEP1_3":"The video should include:<br/>\\n 1. You showing the Silver Burger clearly<br/>\\n 2. You showing the hiding spot where you found the Silver Burger<br/>\\n 3. Your face should also be clearly visible in the video<br/>\\n 4. The video should be in 9:16 dimension, portrait format<br/>","SILVERCOIN_VERIFICATIONVIDEO_STEP2_1":"Step 2:","SILVERCOIN_VERIFICATIONVIDEO_STEP2_2":"Send the video to Sqkii on <a class=\\"color-primary underline\\" href=\\"https://www.facebook.com/sqkii/\\" target=\\"_blank\\">Facebook</a> via DM within 24 hours of you finding the Silver Burger, along with the following message:","SILVERCOIN_VERIFICATIONVIDEO_STEP2_3":"Hi! I am Hunter {HUNTER}, submitting my verification video for {COIN}.","SILVERCOIN_SENTVERIFICATIONVIDEO_CHECKBOX":"I have submitted my verification video.","SILVERCOIN_SENTVERIFICATIONVIDEO_BUTTON":"Next","SILVERCOIN_MAILING_TITLE":"Coin return mailing proof","SILVERCOIN_MAILING_1":"Mail the coin back to Sqkii to complete the verification process!","SILVERCOIN_MAILING_STEP1_1":"Step 1:","SILVERCOIN_MAILING_STEP1_2":"Pack the coin securely and address the package to:","SILVERCOIN_MAILING_STEP1_3":"Sqkii \\n 18 Kaki Bukit Road 3\\n #02-12 \\n Singapore 415978","SILVERCOIN_MAILING_STEP2_1":"Step 2:","SILVERCOIN_MAILING_STEP2_2":"Take mailing proof:\\n For untracked mail, take a video that shows the parcel details followed by you dropping it into the postbox.\\n \\n For tracked mail, take a photo of the parcel details.","SILVERCOIN_MAILING_STEP3_1":"Step 3:","SILVERCOIN_MAILING_STEP3_2":"Send the mailing proof to Sqkii on <a class=\\"color-primary underline\\" href=\\"https://www.facebook.com/sqkii/\\" target=\\"_blank\\">Facebook</a> via DM within 14 days of you finding the coin.","SILVERCOIN_MAILING_CHECKBOX":"I have mailed the coin and submitted the mailing proof.","SILVERCOIN_MAILING_BUTTON":"Done","SILVERCOIN_SILVERCOINFOUND_TITLE":"Your submitted details","SILVERCOIN_SILVERCOINFOUND_1":"It seems like this Silver Burger has been found!","SILVERCOIN_SILVERCOINFOUND_2":"We are verifying the winner and will provide an update within","SILVERCOIN_SILVERCOINFOUND_UPDATED":"{countdown}","SILVERCOIN_SILVERCOINFOUND_CTA":"Follow us on social media to stay updated on the hunt!","SILVERCOIN_SILVERCOINFOUND_SUBMITTED_1":"Congrats!","SILVERCOIN_SILVERCOINFOUND_SUBMITTED_2":"Remember to exchange your Silver Burger for your prize at Science Centre Singapore. Collection is only available on <b>9 – 12 December 2023</b>, from <b>1000 hours – 1200 hours</b> and <b>1400 hours – 1800 hours</b>.<br/><br/>\\n\\nPrize may be forfeited if you fail to comply with the Terms & Conditions or Winner Agreement.","SILVERCOIN_SILVERCOINFOUND_SUBMITTED_3":"The Winner’s Agreement and your submitted information can be viewed and downloaded below.","SILVERCOIN_SILVERCOINFOUND_VIEWDETAILSBUTTON":"View submitted details","SILVERCOIN_SILVERCOINFOUND_WINNERSBUTTON":"View Winner’s Agreement","SILVERCOINFOUND_1":"First Name","SILVERCOINFOUND_2":"Last Name","SILVERCOINFOUND_NRIC":"Last 4 characters of your Identification Number","SILVERCOINFOUND_MOBILE":"Mobile Number","BANNER_VERIFYING":"Verifying Silver Burger status...","BANNER_FOUND_COIN":"found Silver Burger #{number}","SILVERCOIN_COINFOUNDVIDEO_TITLE":"Silver Burger #{number}","SILVERCOIN_COINFOUNDVIDEO_1":"Watch the video to find out where this Silver Burger was hidden!","SILVERCOIN_COINFOUNDVIDEO_2":"This Silver Burger was found by","SILVERCOIN_COINFOUNDVIDEO_OTHERHUNTERS":"<span class=\\"underline color-primary\\" id=\\"timeline\\">Tap here</span> to see other hunters in action!","BANNER_FORFEITED":"This Silver Burger has been forfeited","SILVERCOINFORFEITED_1":"This Silver Burger has been forfeited.","SILVERCOINFORFEITED_2":"Due to safety and/or gameplay reasons, this Silver Burger is no longer available to be found. Try hunting another Silver Burger instead!<br/><br/> Refer to the <span id=\\"TC\\" class=\\"color-link underline\\">T&Cs</span> for more details on Silver Burger forfeiture.","SILVERCOIN_COINFOUNDVIDEO_TIMESTAMP":"on {timestamp}","TIMELINE_COMINGSOON_STATUS":"Silver Coins – Coming soon","LEGEND_SILVER_POSSIBLE":"Possible Silver Burger location","SIGNUP_FORM_OTPTEXT_RESEND_NOCOUNTDOWN":"Didn’t receive OTP? <span class=\\"color-primary underline\\" id=\\"resendOTP\\">Tap here to resend.</span>","SILVERCOINPOPUP_SAFETY_AGREE":"By looking for this Silver Burger, I acknowledge and agree to the above safety messages and <span class=\\"underline color-primary\\" id=\\"TC\\">Terms & Conditions</span>.","SILVERCOINPOPUP_SAFETY_BUTTON_AGREE":"I agree","SILVERCOINPOPUP_SAFETY_CHECKBOX":"Don’t show me again today","SILVERCOINPOPUP_COIN_TIMER":"Next shrink in: <span class=\\"font-bold\\">{countdown}</span>","SILVERCOINPOPUP_SHRINK_BUTTONCOPY":"Shrink circle","SILVERCOINPOPUP_COIN_7":"Found this Silver Burger? <span class=\\"underline color-primary\\" id=\\"tap_here\\">Tap here!</span>","SILVERCOINPOPUP_COIN_8":"Need More Vitamin Crystals?","SILVERCOINPOPUP_COIN_9":"Complete a quick survey on #HuntTheMouse to get","SILVERCOINPOPUP_CRYSTAL_BUTTONCOPY":"Get","SILVERCOINPOPUP_COIN_10":"Tag &commat;sqkiimouse in an IG story or TikTok of you hunting outdoors, make Sqkii laugh, and she’ll give you a promo code to get","SILVERCOINPOPUP_SHRINKING_TIMER":"This circle is shrinking...","SILVERCOINPOPUP_NOSHRINK_TEXTBOX":"This circle can’t get any smaller for now. Come back in {TIME} to shrink it again!","SILVERCOINPOPUP_NOSHRINK_TEXTBOX2":"Wondering where this Silver Burger could be? Find out what other hunters are up to on our Instagram <a class=\\"underline color-link\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">&commat;sqkiimouse</a>!","SILVERCOINPOPUP_ABOUT_1":"About Silver Burger circles","SILVERCOINPOPUP_ABOUT_2":"A Silver Burger exchangeable for a Nintendo Switch is hidden somewhere within each of these circles! <br/><br/>\\nThese circles will shrink every 30 minutes, so keep a close eye on them.<br/><br/>\\n \\n \\n You can also use Vitamin Crystals to shrink circles ahead of time!","SHRINKINGCIRCLE_NOCRYSTALS_1":"Not enough Vitamin Crystals?","SHRINKINGCIRCLE_NOCRYSTALS_2":"Here’s a nearby action you can complete now to get more Vitamin Crystals!","SHRINKINGCIRCLE_GOTOBA_BUTTONCOPY":"Go","SHRINKINGCIRCLE_VIEWBA_BUTTONCOPY":"View other actions","SHRINKINGCIRCLE_CONFIRM_1":"Confirm circle shrink","SHRINKINGCIRCLE_CONFIRM_2":"Are you sure you want to shrink the circle of Silver Burger #{order}?","SHRINKINGCIRCLE_CONFIRM_NO":"No","SHRINKINGCIRCLE_CONFIRM_YES":"Yes","SHRINKINGCIRCLE_SHRINKED_PLAYERCIRCLE":"Your Circle","SHRINKINGCIRCLE_SHRANKED_AHEAD":"The Circle shrank <span class=\\"font-bold\\" style=\\"color: #FF2F2F\\">{countdown}</span> ahead of time!","SHRINKINGCIRCLE_SHRANKED_TAP":"Tap to continue","OFFERWALL_BASE_HEADER":"Get more Vitamin Crystals","OFFERWALL_BASE_TABHEADER_2":"New","OFFERWALL_BASE_TABHEADER_1":"Pending/Claimed","OFFERWALL_BASE_LISTOFBRANDACTIONS":"List of Brand Actions","OFFERWALL_BASE_PROMOCODETAB":"Have a promo code?","OFFERWALL_BASE_SORT_1":"Default sorting","OFFERWALL_BASE_SORT_2":"Nearest first","OFFERWALL_BASE_SORT_3":"Most Crystals first","OFFERWALL_FIRSTCOMPLETION":"x2 bonus for first-time completion","OFFERWALL_STATUS_REJECTED":"Rejected","OFFERWALL_PENDING_SORT_1":"Most recent","OFFERWALL_PENDING_SORT_2":"Pending first","OFFERWALL_PENDING_SORT_3":"Claimed first","OFFERWALL_JOINING":"Interested in joining #HuntTheMouse as a merchant? Tap here!","OFFERWALL_BASE_BRANDACTIONACTIONBUTTON":"Go","OFFERWALL_PENDING_ACTIONBUTTON":"Pending","OFFERWALL_MULTICLAIM_ACTIONTAB":"Claim all","OFFERWALL_MULTICLAIM_ACTIONBUTTON":"Claim all","OFFERWALL_BASE_SURVEY":"Complete a survey to earn more Crystals!","OFFERWALL_BASE_SURVEY_DESC":"Enjoying #HuntTheMouse? Complete a quick survey to earn 35 Crystals!","API_POPUP_BUTTONCOPY_HAVEACCOUNT":"Go to survey","OFFERWALL_BASE_MAKESQKIILAUGH":"Make Sqkii laugh to earn more Crystals!","PROMOCODE_POPUP_INSTRUCTIONS":"Enter the promo code you received from completing brand actions to redeem Vitamin Crystals!","PROMOCODE_POPUP_HEADER":"Enter promo code","PROMO_CODE":"Promo code","PROMOCODE_BUTTONCOPY_SUBMIT":"Submit","PROMOCODE_POPUP_INVALIDPROMOCODEERROR":"The promo code(s) you\'ve entered is invalid. Please try again.\\n You have {numAttempts} more attempts before getting timed out.","PROMOCODE_POPUP_5INVALIDATTEMPTS":"You have been timed out after making 5 invalid attempts. Please try again later.","PROMOCODE_POPUP_INSTRUCTIONS_SERVERBUSY":"The server is busy at the moment. Please try again in a few minutes.","PROMOCODE_CONFIRM_POPUP_HEADER":"Redeem this promo code?","PROMOCODE_CONFIRM_POPUP_DESC_GUEST_1":"You are currently using the following guest account:","PROMOCODE_CONFIRM_POPUP_DESC_GUESTID":"Redeem","PROMOCODE_CONFIRM_POPUP_DESC_GUEST_2":"<span class=\\"color-primary underline\\" id=\\"LOGIN\\">Log in</span> or <span class=\\"color-primary underline\\" id=\\"SIGNUP\\">sign up</span> for a player account before redeeming to keep your Vitamin Crystals safe!","PROMOCODE_CONFIRM_POPUP_DESC_PLAYER":"You are currently logged in to the following player account:","PROMOCODE_CRYSTALSRECEIVED_TEXT_1":"You received","PROMOCODE_CRYSTALSRECEIVED_TEXT_2":"{crystal} Vitamin Crystals!","PROMOCODE_CRYSTALSRECEIVED_TEXT_3":"Use these to find the hidden Silver Burgers!","PROMOCODE_BUTTONCOPY_GETMORECRYSTALS":"Get more Vitamin Crystals","PROMOCODE_POPUP_STATUS_HEADER":"Status","PROMOCODE_POPUP_STATUS_1":"Make Sqkii laugh","PROMOCODE_POPUP_STATUS_2":"Promo code used on: 15 May 2022, 12:39PM","PROMOCODE_POPUP_STATUS_CLAIMED":"Status: Claimed","LOGINBONUS_TITLE":"Login bonus","LOGINBONUS_DESC_1":"Come back daily to get free Vitamin Crystals!","LOGINBONUS_DESC_2":"Great job! You have claimed all available bonus Vitamin Crystals.","LOGINBONUS_DESC_3":"Come back tomorrow to get free","LOGINBONUS_DAY":"Day {number}","LOGINBONUS_DAY1":"Day 1","LOGINBONUS_DAY2":"Day 2","LOGINBONUS_DAY3":"Day 3","LOGINBONUS_DAY4":"Day 4","LOGINBONUS_DAY5":"Day 5","LOGINBONUS_DAY6":"Day 6","LOGINBONUS_DAY7":"Day 7","LOGINBONUS_DAY8":"Day 8","LOGINBONUS_MORECRYSTALS":"Want more Vitamin Crystals? <span id=\\"goOfferWall\\" class=\\"underline color-link\\">Tap here</span>.","LOGINBONUS_BUTTON_CLAIM":"Claim Day {number}","LOGINBONUS_CRYSTALSRECEIVED_TEXT_1":"You received","LOGINBONUS_CRYSTALSRECEIVED_TEXT_2":"Vitamin Crystals!","LOGINBONUS_CRYSTALSRECEIVED_TEXT_3":"Use these to find the hidden Silver Burgers!","LOGINBONUS_BUTTON_GETMORECRYSTALS":"Get more Vitamin Crystals","FREESHRINK_TITLE":"Welcome gift","FREESHRINK_DESC":"To celebrate the start of your journey as a Hunter, here are 200 Vitamin Crystals to try shrinking a Silver Crcle!","FREESHRINK_BUTTON_CLAIM":"Claim now!","FREESHRINK_BUTTON_HOWTOSHRINK":"How to shrink a circle?","SETTINGS_NOTLOGGEDIN_COMPLETESURVEY":"Enjoying #HuntTheMouse? Complete a quick survey and receive Vitamin Crystals!","SETTINGS_BUTTON_STARTSURVEY":"Start survey","CHANGEHUNTERID_POPUP_HEADING":"Change Hunter ID?","CHANGEHUNTERID_POPUP_TEXT_1":"Current Hunter ID:","CHANGEHUNTERID_POPUP_TEXT_SUGGESTION_1":"Hunter #{HUNTER_ID}","CHANGEHUNTERID_POPUP_TEXT_2":"Are you sure you want to change your Hunter ID? Another Hunter ID will be randomly generated for you.","CHANGEHUNTERID_POPUP_BUTTONCOPY_CONFIRMCHANGE":"Confirm change","CHANGEHUNTERID_POPUP_BUTTONCOPY_FREE":"FREE","CHANGEHUNTERID_HEADING":"Hunter ID changed!","CHANGEHUNTERID_NEWHUNTERID_1":"Your new Hunter ID is","CHANGEHUNTERID_NEWHUNTERID_2":"Hunter","CHANGEHUNTERID_NEWHUNTERID_3":"#LUCKY","CHANGEHUNTERID_NEWHUNTERID_4":"Not satisfied with your new Hunter ID?","CHANGEHUNTERID_BUTTONCOPY_CHANGEAGAIN":"Change again","FAQ_HEADING":"FAQs","FAQ_SEARCH":"Search","FAQ_ALLCATEGORIES":"All categories","FAQ_HOWTOPLAY":"How to Play","ANNOUNCEMENT_HEADING":"Announcement","ANNOUNCEMENT_BUTTON_OK":"Ok","ERROR_HEADING":"Uh-oh! \\n Something went wrong...","ERROR_DESCRIPTION":"We’re working hard to fix it!\\n Try refreshing this page or check back later!","ERROR_SOCIALMEDIA":"Follow us on social media to stay updated on the hunt!","GPS_ERROR_UPCOMINGHUNTS":"Or see upcoming hunts","MAPZOOM_TIMIIMESSAGE_ZOOMINSTRUCTIONS":"You do know you can zoom in by pinching the screen, right?","SURVEY_POPUP_HEADING":"Survey","SURVEY_BUTTONCOPY_NEXT":"Next","SURVEY_POPUP_QUESTION2_2":"Description here","SURVEY_POPUP_QUESTION2_OPTION_OTHER":"Other:","SURVEY_POPUP_QUESTION2_OPTION_OTHEREXPLANATION":"Type here","SURVEY_CRYSTALSRECEIVED_1":"You received","SURVEY_CRYSTALSRECEIVED_2":"40 Vitamin Crystals!","SURVEY_CRYSTALSRECEIVED_3":"Use these to find the hidden Silver Burgers!","SURVEY_BUTTONCOPY_BACKTOMAP":"Back to Map","TIPSANDTRICKS_POPUP_HEADING":"Tips and Tricks","TIPSANDTRICKS_POPUP_DESCRIPTION_2":"Need help finding the Silver Burgers?","TIPSANDTRICKS_POPUP_DESCRIPTION_1":"Here are some ways you can narrow down your search!","TIPSANDTRICKS_POPUP_1_CATEGORY":"Silver Burgers","TIPSANDTRICKS_POPUP_1_TITLE":"Shrink Silver Burger Circle","TIPSANDTRICKS_POPUP_1_DESC":"Silver Burger Circles shrink automatically every 30 minutes! You may also tap onto a Silver Circle to shrink it ahead of time! ","TIPSANDTRICKS_POPUP_2_CATEGORY":"Others","TIPSANDTRICKS_POPUP_2_TITLE":"Get notifications for important updates","TIPSANDTRICKS_POPUP_2_BUTTON":"Go to Telegram channel","TIPSANDTRICKS_POPUP_3_CATEGORY":"Others","TIPSANDTRICKS_POPUP_3_TITLE":"I have other questions!","TIPSANDTRICKS_POPUP_3_BUTTON":"Go to FAQ","TIPS_TIMIIMESSAGE_MOREINFO":"<a href=\\"{TIPS_AND_TRICKS_POPUP}\\">Tap here</a> to find out more about the hunt!","TERMS_TITLE":"Terms and Conditions","TERMS_LASTUPDATED":"Last updated on 24 November 2023, 10:00AM GMT+8","TERMS_ENGTAB":"English","TERMS_TRANSLATED TAB":"Vietnamese","TERMS_TRANSLATED_NOTE":"Please note that the Vietnamese version is provided as a reference for your convenience. In the event of any discrepancies, the English version should be taken as the official Terms & Conditions.","SERIALNUMBER_TITLE":"Found a Silver Burger?","SERIALNUMBER_DESC":"Enter the case-sensitive serial number that’s printed on the bottom of the Silver Burger.","ENTERSERIALNUMBER_SERIALNUMBER_1":"Serial number","SERIALNUMBER_ENSURINGFAIRNESS":"Want to know how we ensure fairness in our hunts? <br/> <span class=\\"color-primary underline\\" id=\\"ENSURE_FAIRNESS\\">Tap here to read more.</span>","SERIALNUMBER_ERROR_1":"You have made {NUM} invalid attempts to enter serial number. Please try again in {TIME}","SERIALNUMBER_ERROR_2":"You have made 5 invalid attempts to enter serial number. Please try again in {TIME}.","SERIALNUMBER_CONTINUE":"Continue where you left off for Silver Burger","SERIALNUMBER_BUTTON":"Submit","SERIALNUMBER_BUTTON_CONTINUE":"Continue","SURVEYQUESTION_1_AGE":"What is your age?","SURVEYQUESTION_2_FINDOUTHTM":"How did you first find out about #HuntTheMouse — Silver Burger Quest?","SURVEYQUESTION_3_HUNTSILVER":"Did you hunt for any of the Silver Burgers?","SURVEYQUESTION_4_NOTHUNT":"Why did you not try to hunt for any Silver Burgers?","SURVEYQUESTION_5_HUNTING_EXPERIENCE":"How much did you enjoy your hunting experience?","SURVEYQUESTION_6_ENJOY_HTM":"Why did you enjoy #HuntTheMouse — Silver Burger Quest?","SURVEYQUESTION_7_NOTENJOY_HTM":"Why did you not enjoy #HuntTheMouse — Silver Burger Quest?","SURVEYQUESTION_8_RECC_HTM":"How likely are you to recommend this hunt to your friends/family?","SURVEYQUESTION_9_MAP":"How useful was the map while you were hunting?","SURVEYQUESTION_10_HOURS_SPENT":"On average, how many hours did you spend each time you hunt?","SURVEYQUESTION_11_CIRCLE_SIZE":"At which point of the following circle sizes did you start hunting for Silver Burgers?","SURVEYQUESTION_12_HUNT_WITH":"Did you hunt alone or with your friends/family?","SURVEYQUESTION_13_HUNT_TOGETHER":"Why did you choose to hunt with other hunters?","SURVEYQUESTION_14_HUNT_ALONE":"Why did you choose to hunt alone?","SURVEYQUESTION_15_CRYSTAL_ACTIONS":"Did you perform any actions to get Vitamin Crystals?","SURVEYQUESTION_16_WHY_CRYSTAL_ACTIONS":"Why did you choose to perform actions to get Vitamin Crystals?","SURVEYQUESTION_17_WHY_NO_CRYSTAL_ACTIONS":"Why did you choose not to perform actions to get Vitamin Crystals?","SURVEYQUESTION_18_USE_CRYSTALS":"Did you use your Vitamin Crystals to shrink circles?","SURVEYQUESTION_19_WHY_USE_CRYSTALS":"Why did you choose to use your Vitamin Crystals to shrink circles?","SURVEYQUESTION_20_WHY_NO_USE_CRYSTALS":"Why did you choose not to use any Vitamin Crystals to shink circles?","SURVEYQUESTION_21_PLAY_HTM_UNTAME":"Did you play both #HuntTheMouse — Silver Burger Quest and #UNTAMEflavours?","SURVEYQUESTION_22_SYNC_ACCOUNTS":"Did you sync your #HTM and #UNTAMEflavours accounts?","SURVEYQUESTION_23_WHY_SYNC_ACCOUNTS":"Why did you choose to sync your #HTM and #UNTAMEflavours accounts?","SURVEYQUESTION_24_WHY_NO_SYNC_ACCOUNTS":"Why did you not choose to sync your #HTM and #UNTAMEflavours accounts?","SURVEYQUESTION_25_KNOW_UNTAME":"Did you know about UNTAME before playing this hunt?","SURVEYQUESTION_26_OTHER_FEEDBACK":"Do you have any other feedback?","SURVEY_OPTIONS_AGE_1":"12 and below","SURVEY_OPTIONS_AGE_2":"13 - 17","SURVEY_OPTIONS_AGE_3":"18 - 24","SURVEY_OPTIONS_AGE_4":"25 - 34","SURVEY_OPTIONS_AGE_5":"35 - 44","SURVEY_OPTIONS_AGE_6":"45 - 54","SURVEY_OPTIONS_AGE_7":"55 - 64","SURVEY_OPTIONS_AGE_8":"65 and above","SURVEY_OPTIONS_FINDOUTHTM_1":"Sqkii’s social media (Facebook, Instagram, Telegram, TikTok)","SURVEY_OPTIONS_FINDOUTHTM_2":"Science Centre Singapore social media (Facebook, Instagram, Telegram, TikTok)","SURVEY_OPTIONS_FINDOUTHTM_3":"Friends/family/word-of-mouth","SURVEY_OPTIONS_FINDOUTHTM_4":"Influencers:","SURVEY_OPTIONS_FINDOUTHTM_5":"University groups:","SURVEY_OPTIONS_FINDOUTHTM_6":"Other:","SURVEY_OPTIONS_HUNTSILVER_1":"Yes","SURVEY_OPTIONS_HUNTSILVER_2":"No","SURVEY_OPTIONS_NOTHUNT_1":"The prizes were not attractive enough","SURVEY_OPTIONS_NOTHUNT_2":"The Silver Burgers were too difficult to find","SURVEY_OPTIONS_NOTHUNT_3":"There were too many people hunting for the Silver Burgers","SURVEY_OPTIONS_NOTHUNT_4":"I had no time to hunt for the Silver Burgers","SURVEY_OPTIONS_NOTHUNT_5":"Other:","SURVEY_OPTIONS_HUNTING_EXPERIENCE_RATE_1":"Not at all","SURVEY_OPTIONS_HUNTING_EXPERIENCE_RATE_2":"Extremely","SURVEY_OPTIONS_HUNTING_EXPERIENCE_1":"I enjoyed hunting with friends/family","SURVEY_OPTIONS_HUNTING_EXPERIENCE_2":"I enjoyed the challenge of finding Silver Burgers","SURVEY_OPTIONS_HUNTING_EXPERIENCE_3":"I enjoyed exercising while hunting physically","SURVEY_OPTIONS_HUNTING_EXPERIENCE_4":"Other:","SURVEY_OPTIONS_NOTENJOY_HTM_1":"I do not enjoy hunting outdoors in the sun","SURVEY_OPTIONS_NOTENJOY_HTM_2":"The Silver Burgers were too difficult to find","SURVEY_OPTIONS_NOTENJOY_HTM_3":"There were too many people hunting for the Silver Burgers","SURVEY_OPTIONS_NOTENJOY_HTM_4":"Other:","SURVEY_OPTIONS_RECC_HTM_1":"Not at all","SURVEY_OPTIONS_RECC_HTM_2":"Extremely","SURVEY_OPTIONS_MAP_1":"Not at all","SURVEY_OPTIONS_MAP_2":"Extremely","SURVEY_OPTIONS_HOURS_SPENT":45200,"SURVEY_OPTIONS_CIRCLE_SIZE_1":"Size A","SURVEY_OPTIONS_CIRCLE_SIZE_2":"Size B","SURVEY_OPTIONS_CIRCLE_SIZE_3":"Size C","SURVEY_OPTIONS_CIRCLE_SIZE_4":"Size D","SURVEY_OPTIONS_HUNT_WITH_1":"Alone","SURVEY_OPTIONS_HUNT_WITH_2":"With friends","SURVEY_OPTIONS_HUNT_WITH_3":"With family","SURVEY_OPTIONS_HUNT_TOGETHER_1":"To discuss strategies","SURVEY_OPTIONS_HUNT_TOGETHER_2":"It was fun","SURVEY_OPTIONS_HUNT_TOGETHER_3":"I met them while hunting","SURVEY_OPTIONS_HUNT_TOGETHER_4":"To get a higher chance of finding Silver Burgers","SURVEY_OPTIONS_HUNT_TOGETHER_5":"Other:","SURVEY_OPTIONS_HUNT_ALONE_1":"I wanted to exercise as part of my hunting","SURVEY_OPTIONS_HUNT_ALONE_2":"None of my friends/family joined the hunt","SURVEY_OPTIONS_HUNT_ALONE_3":"I did not have the time to hunt with my friends/family","SURVEY_OPTIONS_HUNT_ALONE_4":"I wanted to focus on my own strategy","SURVEY_OPTIONS_HUNT_ALONE_5":"I did not want to split the prize","SURVEY_OPTIONS_HUNT_ALONE_6":"I wanted to hunt at my own pace","SURVEY_OPTIONS_HUNT_ALONE_7":"Other:","SURVEY_OPTIONS_CRYSTAL_ACTIONS_1":"Yes","SURVEY_OPTIONS_CRYSTAL_ACTIONS_2":"No","SURVEY_OPTIONS_WHY_CRYSTAL_ACTIONS_1":"I needed Vitamin Crystals to shrink circles","SURVEY_OPTIONS_WHY_CRYSTAL_ACTIONS_2":"The actions were easy to complete","SURVEY_OPTIONS_WHY_CRYSTAL_ACTIONS_3":"Other:","SURVEY_OPTIONS_WHY_NO_CRYSTAL_ACTIONS_1":"I was not interested in doing any of the actions","SURVEY_OPTIONS_WHY_NO_CRYSTAL_ACTIONS_2":"I did not need any Vitamin Crystals","SURVEY_OPTIONS_WHY_NO_CRYSTAL_ACTIONS_3":"The actions were too difficult to complete","SURVEY_OPTIONS_WHY_NO_CRYSTAL_ACTIONS_4":"Other:","SURVEY_OPTIONS_USE_CRYSTALS_1":"Yes","SURVEY_OPTIONS_USE_CRYSTALS_2":"No","SURVEY_OPTIONS_WHY_USE_CRYSTALS_1":"I felt like I was about to find the Silver Burger","SURVEY_OPTIONS_WHY_USE_CRYSTALS_2":"It was too difficult to hunt without using them","SURVEY_OPTIONS_WHY_USE_CRYSTALS_3":"I was afraid that other hunter nearby would find Silver Burgers before me","SURVEY_OPTIONS_WHY_USE_CRYSTALS_4":"The advantage was a good investment for my hunting strategy","SURVEY_OPTIONS_WHY_USE_CRYSTALS_5":"Other:","SURVEY_OPTIONS_WHY_NO_USE_CRYSTALS_1":"I did not hunt for Silver Burgers","SURVEY_OPTIONS_WHY_NO_USE_CRYSTALS_2":"I did not need any advantages","SURVEY_OPTIONS_WHY_NO_USE_CRYSTALS_3":"My friends already bought the advantages","SURVEY_OPTIONS_WHY_NO_USE_CRYSTALS_4":"Other:","SURVEY_OPTIONS_PLAY_HTM_UNTAME_1":"Yes","SURVEY_OPTIONS_PLAY_HTM_UNTAME_2":"No","SURVEY_OPTIONS_SYNC_ACCOUNTS_1":"Yes","SURVEY_OPTIONS_SYNC_ACCOUNTS_2":"No","SURVEY_OPTIONS_WHY_SYNC_ACCOUNTS_1":"I needed extra Vitamin Crystals","SURVEY_OPTIONS_WHY_SYNC_ACCOUNTS_2":"I wanted to combine and use the Vitamin Crystals to redeem prizes in #UNTAMEflavours","SURVEY_OPTIONS_WHY_SYNC_ACCOUNTS_3":"I wanted to combine and use the Vitamin Crystals to shrink circles in #HuntTheMouse — Silver Burger Quest","SURVEY_OPTIONS_WHY_SYNC_ACCOUNTS_4":"Other:","SURVEY_OPTION_WHY_NO_SYNC_ACCOUNTS_1":"I did not need any extra Vitamin Crystals","SURVEY_OPTION_WHY_NO_SYNC_ACCOUNTS_2":"I was not interested to combine and use the Vitamin Crystals across both games","SURVEY_OPTION_WHY_NO_SYNC_ACCOUNTS_3":"It was too difficult to sync accounts","SURVEY_OPTION_WHY_NO_SYNC_ACCOUNTS_4":"Other:","SURVEY_OPTION_KNOW_UNTAME_1":"Yes","SURVEY_OPTION_KNOW_UNTAME_2":"No","SURVEY_DESC_1_AGE":"Select one option.","SURVEYDESC_2_FINDOUTHTM":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_3_HUNTSILVER":"Select one option.","SURVEYDESC_4_NOTHUNT":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_5_HUNTING_EXPERIENCE":"Rate on a scale of 0 to 10!","SURVEYDESC_6_ENJOY_HTM":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_7_NOTENJOY_HTM":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_8_RECC_HTM":"Rate on a scale of 0 to 10!","SURVEYDESC_9_MAP":"Rate on a scale of 0 to 10!","SURVEYDESC_10_HOURS_SPENT":"Indicate your response below!","SURVEYDESC_11_CIRCLE_SIZE":"Choose one or more options.","SURVEYDESC_12_HUNT_WITH":"Choose one or more options.","SURVEYDESC_13_HUNT_TOGETHER":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_14_HUNT_ALONE":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_15_CRYSTAL_ACTIONS":"Select one option.","SURVEYDESC_16_WHY_CRYSTAL_ACTIONS":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_17_WHY_NO_CRYSTAL_ACTIONS":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_18_USE_CRYSTALS":"Select one option.","SURVEYDESC_19_WHY_USE_CRYSTALS":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_20_WHY_NO_USE_CRYSTALS":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_21_PLAY_HTM_UNTAME":"Select one option.","SURVEYDESC_22_SYNC_ACCOUNTS":"Select one option.","SURVEYDESC_23_WHY_SYNC_ACCOUNTS":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_24_WHY_NO_SYNC_ACCOUNTS":"Select at least one option. You can also select more if they are applicable to you.","SURVEYDESC_25_KNOW_UNTAME":"Select one option.","SURVEYDESC_26_OTHER_FEEDBACK":"Indicate your response below!","FAQ_ABOUTTHEGAME":"About the game","FAQ_ABOUTTHEGAME_QUESTION1_HEADING":"What is #HuntTheMouse all about?","FAQ_ABOUTTHEGAME_QUESTION1_DESCRIPTION":"#HuntTheMouse is a physical cash hunt where coins exchangeable for cash are hidden around a selected city. All the cash must be found within specific days from the start of the hunt.<br/><br/>\\n \\nFollow circles on the in-game map during the hunt to find these coins — the circles will shrink every 30 minutes until they reach their smallest size. Be the first person to pick up a coin to walk away with cold hard cash!","FAQ_ABOUTTHEGAME_QUESTION2_HEADING":"Why are you giving away cash?","FAQ_ABOUTTHEGAME_QUESTION2_DESCRIPTION":"Sqkii loves having fun and bringing all her human friends together, so she found the best way to make that happen — bringing the humans’ favourite physical cash hunt to new friends all around Asia-Pacific!","FAQ_ABOUTTHEGAME_QUESTION3_HEADING":"Who can join #HuntTheMouse?","FAQ_ABOUTTHEGAME_QUESTION3_DESCRIPTION":"We would love to be able to let everyone play, but unfortunately, there are some restrictions. Past and present employees of Sqkii and their immediate family members cannot participate in #HuntTheMouse.<br/><br/>\\n\\nFor those of you who are under the legal age of the specific cities our hunts will be held in, do seek consent from your parents if you wish to participate in our upcoming hunts!<br/><br/>\\n\\nP.S. Remember to also take a look at our Terms & Conditions for each hunt for more information about eligibility requirements! <span id=\'goTimeline\' class=\'underline color-link\'>Tap here to take a look at what’s next for #HuntTheMouse</span>.","FAQ_ABOUTTHEGAME_QUESTION4_HEADING":"When will the next hunt begin?","FAQ_ABOUTTHEGAME_QUESTION4_DESCRIPTION":"Several big #HuntTheMouse hunts will commence in 2024. Sqkii is now looking for places to hide the coins in!<br/><br/>\\n\\nP.S. A million dollar cash hunt will also be happening at the end of 2024 in Singapore!<br/><br/>\\n \\nIn the meantime, you can still explore the <a class=\\"underline color-link\\" href=\\"https://huntthemouse.sqkii.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">website</a> to see what happened in previous hunts of 2023. Follow us on <a class=\\"underline color-link\\" href=\\"https://t.me/SqkiiSG\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Telegram</a>, <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a>, <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram</a> and <a class=\\"underline color-link\\" href=\\"https://www.tiktok.com/{\'@\'}sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">TikTok</a> to be the first to get updates for upcoming hunts!","FAQ_ABOUTTHEGAME_QUESTION5_HEADING":"Who is Sqkii?","FAQ_ABOUTTHEGAME_QUESTION5_DESCRIPTION":"Sqkii is a gamification marketing company in Singapore that connects brands with gamers. You may have played some of our past games such as #HuntYourZodiac and The Magnum Pleasure Auction, though we are most known for our flagship campaign, #HuntTheMouse. By connecting brands with gamers through campaigns like this one, we drive unreal ROI for brands and give unreal rewards to gamers like you!<br/><br/>\\n \\nApart from Singapore, we’ve also been bringing #HuntTheMouse to other cities across Asia-Pacific. P.S. A million dollar cash hunt will be coming at the end of 2024. <span id=\'goTimeline\' class=\'underline color-link\'>Tap here to take a look at what’s next for #HuntTheMouse</span>.","FAQ_ACCOUNTCREATION":"Account creation and management","FAQ_ACCOUNTCREATION_QUESTION1_HEADING":"Why do I need to create a #HuntTheMouse account?","FAQ_ACCOUNTCREATION_QUESTION1_DESCRIPTION":"When you start the game for the first time, you’ll be given a guest account to let you start hunting immediately. You can choose to sign up for a #HuntTheMouse account to save your progress and advantages that you may gain in some editions of the hunt! <br/><br/>\\n \\n If you haven\'t created your account, just head over to the game’s settings and tap on \\"Sign up for an account\\" to create your account using your mobile number. If you already have an account, you can tap on \\"I have an account\\" instead.","FAQ_ACCOUNTCREATION_QUESTION2_HEADING":"Why do I need to use my mobile number?","FAQ_ACCOUNTCREATION_QUESTION2_DESCRIPTION":"When you sign up for an account, we’ll send you an SMS with an OTP. This helps to prevent anyone else from using your mobile number and protects all of you better. <br/><br/>\\n Psst — the mobile number you signed up with is important for prize redemption, so remember to submit it correctly!","FAQ_ACCOUNTCREATION_QUESTION3_HEADING":"Why can’t I create an account with a non-Singapore number?","FAQ_ACCOUNTCREATION_QUESTION3_DESCRIPTION":"Account creation is only available for Singapore-registered mobile numbers for this hunt, but don’t worry, we’re working on making it available for more of you soon! In the meantime, you can still continue playing #HuntTheMouse — Silver Burger Quest using your guest account!","FAQ_HOWTOHUNT":"How to hunt","FAQ_HOWTOHUNT_QUESTION1_HEADING":"Where can I hunt?","FAQ_HOWTOHUNT_QUESTION1_DESCRIPTION":"When the #HuntTheMouse begins in 2024, you will be able to hunt anywhere, in specific cities where Sqkii has hidden the coins in! However, remember to always abide by the safety hints and guidelines provided by Sqkii while hunting — they are there to ensure that you can hunt safely.<br/><br/>\\nHunters who violate safety hints and guidelines will not be eligible for prizes and may be reported to the authorities. Sqkii’s human friends will be keeping an eye on all you hunters, so be sure to remind your fellow hunters to hunt safely and responsibly while having fun!","FAQ_HOWTOHUNT_QUESTION2_HEADING":"How do I hunt for coins?","FAQ_HOWTOHUNT_QUESTION2_DESCRIPTION":"Each circle you see on the in-game map indicates where a coin may be hidden.<br/><br/>\\nThese circles shrink once every half an hour, narrowing down your search area for the  coins. You can also shrink these circles ahead of time using Crystals!<br/><br/>\\nHead down to the locations within these circles and start physically searching for coins!","FAQ_HOWTOHUNT_QUESTION3_HEADING":"How much cash can I get from finding coins?","FAQ_HOWTOHUNT_QUESTION3_DESCRIPTION":"Each coin varies in its amount depending on where the hunt is held in. Keep a look out for how much each coin is worth before the hunt begins!","FAQ_HOWTOHUNT_QUESTION4_HEADING":"I\'ve found a Silver Burger! How do I claim my reward?","FAQ_HOWTOHUNT_QUESTION4_DESCRIPTION":"Simply head to the bit.ly link on the Silver Burger. You’ll need to enter the serial number on the Silver Burger to start the verification process within 2 hours of you finding the burger. Follow the onscreen instructions carefully to complete the verification process!","FAQ_HOWTOHUNT_QUESTION5_HEADING":"Will the Silver Burgers be hidden in partner venues?","FAQ_HOWTOHUNT_QUESTION5_DESCRIPTION":"Some Silver Burgers may be hidden within #HuntTheMouse partners’ premises and can be accessed during opening hours. You do not have to trespass to find the Silver Burgers!","FAQ_HTM_UNTAMEFLAVOURS":"#HuntTheMouse — Silver Burger Quest and #UNTAMEflavours","FAQ_HTM_UNTAMEFLAVOURS_QUESTION1_HEADING":"What is #UNTAMEflavours all about?","FAQ_HTM_UNTAMEFLAVOURS_QUESTION1_DESCRIPTION":"#UNTAMEflavours is a virtual interactive game where you can help to annihilate all traces of the Decay and restore STEMlings’ home and food production Sites. The game runs from 16 October 2023, 1000 hours – 8 December 2023, 2359 hours.<br/><br/>\\nPlay mini-games and video quizzes to restore STEMlings’ home and the food production Sites — doing so gives you Vitamin Crystals which can be used to redeem attractive prizes in #UNTAMEflavours, or even used in #HuntTheMouse! <a class=\\"underline color-link\\" href=\\"https://untame.sqkii.com/htm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tap here to visit #UNTAMEflavours</a>.","FAQ_HTM_UNTAMEFLAVOURS_QUESTION2_HEADING":"How is #HuntTheMouse — Silver Burger Quest related to #UNTAMEflavours?","FAQ_HTM_UNTAMEFLAVOURS_QUESTION2_DESCRIPTION":"Both #HuntTheMouse — Silver Burger Quest and #UNTAMEflavours are brought to you by Sqkii in conjunction with Science Centre Singapore.<br/><br/>\\nSync your #HuntTheMouse account with your #UNTAMEflavours account to combine Vitamin Crystals and use them across both games. Your combined Vitamin Crystals can be used to shrink circles to find Silver Burgers in #HuntTheMouse or redeem prizes including PS5, iPad Air, Ergotune chair, Nintendo Switch, and more in #UNTAMEflavours!","FAQ_HTM_UNTAMEFLAVOURS_QUESTION3_HEADING":"What can I get from playing #UNTAMEflavours?","FAQ_HTM_UNTAMEFLAVOURS_QUESTION3_DESCRIPTION":"You can redeem prizes including PS5, iPad Air, Ergotune chair, Nintendo Switch and more with the Vitamin Crystals that you get from playing #UNTAMEflavours! These Vitamin Crystals can also be used to shrink Silver Burger circles in #HuntTheMouse — Silver Burger Quest, where a Silver Burger gives you a Nintendo Switch! <a class=\\"underline color-link\\" href=\\"https://untame.sqkii.com/htm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tap here to visit #UNTAMEflavours</a>.","FAQ_GETMORE":"Get more hints & Vitamin Crystals","FAQ_GETMORE_QUESTION1_HEADING":"How do I get more Silver Burger hints?","FAQ_GETMORE_QUESTION1_DESCRIPTION":"The Silver Burger gameplay is based on circles that you see on the in-game map, where these circles shrink once every half an hour. You can use Vitamin Crystals to shrink your selected circle(s) ahead of time and reduce your search area!<br/><br/>\\nTo shrink a circle, just tap on it on the map and you’ll see more details there.","FAQ_GETMORE_QUESTION2_HEADING":"What are Vitamin Crystals?","FAQ_GETMORE_QUESTION2_DESCRIPTION":"Vitamin Crystals are in-game resources that help you get ahead in the hunt! You can use Vitamin Crystals to shrink your selected Silver Burger circle(s) ahead of time.<br/><br/>\\nVitamin Crystals that you get during this hunt are only valid for the duration of this hunt and #UNTAMEflavours, so be sure to use your remaining Vitamin Crystals before all the Silver Burgers are found!<br/><br/>\\nIf you still have Vitamin Crystals left after the hunt ends, you can sync your #HuntTheMouse and #UNTAMEflavours accounts, then use your Vitamin Crystals to redeem prizes in #UNTAMEflavours (subject to prize availability). Prize redemption in #UNTAMEflavours ends on 8 December 2023, 2359 hours! <a class=\\"underline color-link\\" href=\\"https://untame.sqkii.com/htm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tap here to visit #UNTAMEflavours</a>.","FAQ_GETMORE_QUESTION3_HEADING":"How do I get more Vitamin Crystals?","FAQ_GETMORE_QUESTION3_DESCRIPTION":"Vitamin Crystals can be obtained by completing specific brand actions! You can view the list of brand actions and how many Vitamin Crystals you’ll get by tapping on the <a href=\\"{BRAND_ACTION_PAGE}\\">Get Vitamin Crystals</a> button in the game menu. Each brand action has a specific set of instructions, so follow them closely to complete them.<br/><br/>\\n Psst — you can also get extra Vitamin Crystals by making Sqkii laugh! Tag &commat;sqkiimouse in an <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram Story</a> or <a class=\\"underline color-link\\" href=\\"https://www.tiktok.com/{\'@\'}sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">TikTok</a> of you hunting outdoors, make Sqkii laugh, and she’ll DM you a promo code that you can use to get more Vitamin Crystals!<br/><br/>\\n Here are some tips to increase your likelihood of getting these extra Vitamin Crystals:\\n <ul class=\'my-10 ml-25\'>\\n <li>Abide by the safety guidelines</li>\\n <li>Make sure your Instagram/TikTok account and videos are public</li>\\n <li>Be as creative as you can</li>\\n </ul>\\n If you’re tagging Sqkii on TikTok, make sure to follow her account so that she can send you the promo code via DM!","FAQ_GETMORE_QUESTION4_HEADING":"I\'ve completed a brand action, but didn\'t receive any Vitamin Crystals.","FAQ_GETMORE_QUESTION4_DESCRIPTION":"Some brand actions require more processing time than others.<br/><br/>\\n Firstly, read the brand action’s steps again and check if you have correctly completed them all. Then, check if your completed brand action appears under the “Pending/Claimed” tab. A pending status means that it’s currently being verified!<br/><br/>\\n If it does not appear under the “Pending/Claimed” tab, try clearing your cache and refreshing your browser.<br/><br/>\\n If you’ve tried the above and still have an issue, drop us a message on <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a> or <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram</a> with your Hunter ID and a receipt or other record to show that you\'ve completed the brand action, and we\'ll work with you to resolve this!","FAQ_SUPPORT":"Support & others","FAQ_SUPPORT_QUESTION1_HEADING":"What should I do if my screen is stuck or isn’t loading properly?","FAQ_SUPPORT_QUESTION1_DESCRIPTION":"Give these a try and see if the issue is resolved!\\n <ul class=\'my-10 ml-25\' style=\'list-style-type: decimal\'>\\n <li>Clear your cache and refresh your browser</li>\\n <li>Make sure you’re not using an embedded browser, i.e. you’re not opening up the game within another app such as Facebook or Instagram, but directly in a browser such as Safari or Chrome!</li>\\n <li>Make sure you have a stable internet connection</li>\\n <li>Try using another browser</li>\\n </ul>\\n If the above don’t work, just drop us a message on <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a> or <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram</a> with your phone model, phone O.S., browser, browser O.S., hunter ID, and a screen recording of the issue and we’ll help you out!","FAQ_SUPPORT_QUESTION2_HEADING":"Where can I find all the latest news and updates on #HuntTheMouse?","FAQ_SUPPORT_QUESTION2_DESCRIPTION":"Follow our <a class=\\"underline color-link\\" href=\\"https://t.me/SqkiiSG\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Telegram Channel</a>, <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a>, <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram</a> and <a class=\\"underline color-link\\" href=\\"https://www.tiktok.com/{\'@\'}sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">TikTok</a> for the latest hints, news, and updates on the hunt! Be sure to check out the hashtag #HuntTheMouse to see other hunters in action.","FAQ_SUPPORT_QUESTION3_HEADING":"How can I contact Sqkii\'s human friends for business or media related enquiries?","FAQ_SUPPORT_QUESTION3_DESCRIPTION":"Like Sqkii, we love to make new friends too! For business enquiries, head over to our <a class=\\"underline color-link\\" href=\\"https://sqkii.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">main website</a> and fill in the form at the bottom to send us your message. We\'ll be in touch!<br/><br/>\\n For media enquiries, simply drop us a message on <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a> and we’ll get back to you!","FAQ_SUPPORT_QUESTION4_HEADING":"My question has not been answered by this FAQ, what can I do now?","FAQ_SUPPORT_QUESTION4_DESCRIPTION":"Fret not! Drop us a message on <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a> or <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram</a> and we will get back to you as soon as we can!<br/><br/>","DIALOGUE_TIPS_RANDOM_1":"You can tap on me to see more tips and tricks!","DIALOGUE_TIPS_RANDOM_2":"Want even more Vitamin Crystals? Tag &commat;sqkiimouse in an IG story or TikTok of you hunting outdoors and make Sqkii laugh!","DIALOGUE_TIPS_RANDOM_3":"Remember to stay hydrated while hunting! Tip: Bring an umbrella and water bottle out on your hunt!","DIALOGUE_SIGNUP_REMINDER_1":"I can help you save your Crystals if you sign up!","DIALOGUE_SIGNUP_REMINDER_2":"If you <a class=\\"underline color-link\\"  href=” {SIGN_UP_LOG_IN_PAGE}”>sign up/log in</a> to a #HuntTheMouse account, I can help you save your progress!<br><br><a class=\\"underline color-link\\" href=”{TIPS_AND_TRICKS_POPUP}“>Tap for more info on the hunt!</a>","DIALOGUE_SIGNUP_REMINDER_3":"I can help you save your progress if you sign up!","DIALOGUE_GPS_ENABLEGPS":"Enable GPS permissions to make the hunt easier!","DIALOGUE_SURVEY":"Start the survey and tell me what you think about the hunt!","DIALOGUE_TIPS_ENTERSSILVERCIRCLE":"There is a Silver Burger hidden somewhere around you! Let’s hunt for it now!","DIALOGUE_TIPS_NEWCOINDROPPED":"Breaking news! A new Silver Burger has been dropped! <a href=”{NEW_SILVER_BURGER_DROP_POP_UP}”>Tap here to view it</a>.","DIALOGUE_GPS_ENTERSSMALLESTCIRCLE":"Looks like you’re close to a Silver Burger! Please be aware of your surroundings, especially if it is crowded!","timeline_copy_position_1_1":"AUG 2017","timeline_copy_position_1_2":"DEC 2018","timeline_copy_position_1_3":"DEC 2021","timeline_copy_position_1_4":"MAR 2023","timeline_copy_position_1_5":"APR 2023","timeline_copy_position_1_6":"MAY 2023","timeline_copy_position_1_7":"MAY 2023","timeline_copy_position_1_8":"JUN 2023","timeline_copy_position_1_9":"NOV 2023","timeline_copy_position_1_10":2024,"timeline_copy_position_1_13":2024,"timeline_copy_position_1_14":2024,"timeline_copy_position_1_15":"JUN 2023","timeline_copy_position_2_1":"Singapore,SG","timeline_copy_position_2_2":"Singapore,SG","timeline_copy_position_2_3":"Singapore,SG","timeline_copy_position_2_4":"Singapore,SG","timeline_copy_position_2_5":"Johor Bahru, MY","timeline_copy_position_2_6":"Kuala Lumpur, MY","timeline_copy_position_2_7":"Jakarta, ID","timeline_copy_position_2_8":"Bangkok, TH","timeline_copy_position_2_9":"Silver Burger Quest","timeline_copy_position_2_9_complete":"Singapore, SG","timeline_copy_position_2_10":"Kuala Lumpur, MY","timeline_copy_position_2_13":"Ho Chi Minh City, VN","timeline_copy_position_2_14":"Singapore, SG","timeline_copy_position_2_15":"Ho Chi Minh City, VN","timeline_copy_position_3_1":"<span class=”font-bold color-yellow”>S$50,000</span>","timeline_copy_position_3_2":"<span class=”font-bold color-yellow”>S$134,000</span>","timeline_copy_position_3_3":"<span class=”font-bold color-yellow”>S$100,000</span>","timeline_copy_position_3_4":"<span class=”font-bold color-yellow”>S$100,000</span>","timeline_copy_position_3_5":"<span class=”font-bold color-yellow”>RM3,000</span>","timeline_copy_position_3_6":"<span class=”font-bold color-yellow”>RM5,000</span>","timeline_copy_position_3_7":"<span class=”font-bold color-yellow”>Rp 25,000,000</span>","timeline_copy_position_3_8":"<span class=”font-bold color-yellow”>฿50,000</span>","timeline_copy_position_3_9_launch":"<span class=”font-bold color-yellow”>Ongoing</span>","timeline_copy_position_3_9_prelaunch":"<span class=”font-bold color-yellow”>Coming soon</span>","timeline_copy_position_3_9":"<span class=”font-bold color-yellow”>10 Nintendo Switches</span>","timeline_copy_position_3_10":"<span class=”font-bold color-yellow”>RM200,000</span>","timeline_copy_position_3_11":"<span class=”font-bold color-yellow”>Rp250,000,000++</span>","timeline_copy_position_3_12":"<span class=”font-bold color-yellow”>฿500,000++</span>","timeline_copy_position_3_13":"<span class=”font-bold color-yellow”>1,000,000,000₫</span>","timeline_copy_position_3_14":"<span class=”font-bold color-yellow”>S$1,000,000</span>","timeline_copy_position_3_15":"<span class=”font-bold color-yellow”>25,000,000₫</span>","timeline_copy_position_3_prelaunch_status":"<span class=”font-bold color-yellow”>Upcoming</span>","timeline_copy_position_3_launch_status":"<span class=”font-bold color-yellow”>Ongoing</span>","timeline_copy_position_4_1":"A Gold Coin worth <span class=”font-bold color-yellow”>S$50,000</span> was hidden in Singapore.<br/><br/>\\n \\n More than 210,000 hunters joined the search for the hidden coin, and collectively drove over <span class=”font-bold color-yellow”>S$1,000,000</span> in extra revenue for participating partners!","timeline_copy_position_4_2":"A Gold Coin worth <span class=”font-bold color-yellow”>S$100,000</span> was hidden in Singapore. There were also 34 Silver Coins worth <span class=”font-bold color-yellow”>S$1,000</span> each.<br/><br/>\\n \\n Nearly half a million people were out of their homes hunting for cash, generating more than 50,000 organic IG stories. Take a look at some above!","timeline_copy_position_4_3":"A Gold Coin worth <span class=”font-bold color-yellow”>S$100,000</span> was virtually hidden in Singapore.<br/><br/>\\n \\n Amidst the pandemic, we found a way for hunters to have fun through hybrid physical and virtual game mechanics. They made more than 1,400,000 hunt attempts, and redeemed thousands of prizes and deals from participating partners!","timeline_copy_position_4_4":"A Gold Coin worth <span class=”font-bold color-yellow”>S$50,000</span> was hidden in Singapore. There were also 100 Silver Coins worth <span class=”font-bold color-yellow”>S$500</span> each.\\n \\n \\n \\n After a 3-year hiatus due to the pandemic, we brought back the physical hunt in the easiest #HuntTheMouse ever, where all coins were found within 30 days!","timeline_copy_position_4_5":"3 Silver Coins worth <span class=”font-bold color-yellow”>RM1,000</span> each were hidden in Johor Bahru.","timeline_copy_position_4_6":"5 Silver Coins worth <span class=”font-bold color-yellow”>RM1,000</span> each were hidden in Kuala Lumpur.","timeline_copy_position_4_7":"5 Silver Coins worth <span class=”font-bold color-yellow”>Rp 5,000,000</span> each were hidden in Jakarta.","timeline_copy_position_4_8":"5 Silver Coins worth <span class=”font-bold color-yellow”>฿10,000</span> each were hidden in various locations around Bangkok.<br/><br/>","timeline_copy_position_4_prelaunch":"5 Silver Coins worth <span class=”font-bold color-yellow”>5,000,000₫</span> each will be hidden in various locations around Ho Chi Minh City.<br/><br/> \\n \\n Find a Silver Coin to exchange for <span class=”font-bold color-yellow”>5,000,000₫</span> cash!","timeline_copy_position_4_launch":"5 Silver Coins worth <span class=”font-bold color-yellow”>5,000,000₫</span> each have been hidden in various locations around Ho Chi Minh City.<br/><br/> \\n \\n Find a Silver Coin to exchange for <span class=”font-bold color-yellow”>5,000,000₫</span> cash!","timeline_copy_position_4_9":"10 Silver Burgers worth <span class=”font-bold color-yellow”>1 Nintendo Switch</span> each were hidden in various locations around Singapore.","timeline_copy_position_4_9_launch":"10 Silver Burgers will be hidden in various locations around Singapore from 24 November 2023.<br/><br/>\\n\\nFind a Silver Burger to exchange for a <span class=”font-bold color-yellow”>Nintendo Switch!</span> All items must be found within 9 days.","timeline_copy_position_4_9_prelaunch":"10 Silver Burgers will be dropped in various locations around Singapore.<br/><br/>\\n\\nFind a Silver Burger to exchange for a <span class=”font-bold color-yellow”>Nintendo Switch!</span> All items must be found within 9 days.","timeline_copy_position_4_10":"<span class=”font-bold color-yellow”>RM200,000</span> will be hidden in Kuala Lumpur.<br/><br/> \\n\\nPsst — Sqkii is exploring the world and meeting lots of humans right now, so this hunt may be subject to change depending on interest! Follow us on <a class=\\"underline color-link\\" href=\\"https://t.me/SqkiiSG\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Telegram</a>, <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a>, <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram</a> and <a class=\\"underline color-link\\" href=\\"https://www.tiktok.com/{\'@\'}sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tiktok</a> to get the latest hunt updates.","timeline_copy_position_4_11":"<span class=”font-bold color-yellow”>Rp250,000,000</span> or more will be hidden in Jakarta.<br/><br/>\\n \\n The more interest there is in this hunt, the bigger this cash prize will become!","timeline_copy_position_4_12":"<span class=”font-bold color-yellow”>฿500,000</span> or more will be hidden in Bangkok.<br/><br/>\\n \\n The more interest there is in this hunt, the bigger this cash prize will become!","timeline_copy_position_4_13":"<span class=”font-bold color-yellow”>RM200,000</span> will be hidden in Kuala Lumpur.<br/><br/> \\n\\nPsst — Sqkii is exploring the world and meeting lots of humans right now, so this hunt may be subject to change depending on interest! Follow us on <a class=\\"underline color-link\\" href=\\"https://t.me/SqkiiSG\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Telegram</a>, <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a>, <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram</a> and <a class=\\"underline color-link\\" href=\\"https://www.tiktok.com/{\'@\'}sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tiktok</a> to get the latest hunt updates.","timeline_copy_position_4_14":"<span class=\\"font-bold color-yellow\\">S$1,000,000</span> will be hidden in Singapore.<br/><br/>\\n \\nPsst — Sqkii is exploring the world and meeting lots of humans right now, so this hunt may be subject to change depending on interest! Follow us on <a class=\\"underline color-link\\" href=\\"https://t.me/SqkiiSG\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Telegram</a>, <a class=\\"underline color-link\\" href=\\"https://facebook.com/sqkii\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Facebook</a>, <a class=\\"underline color-link\\" href=\\"https://instagram.com/sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Instagram</a> and <a class=\\"underline color-link\\" href=\\"https://www.tiktok.com/{\'@\'}sqkiimouse\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tiktok</a> to get the latest hunt updates.","timeline_copy_position_4_15":"5 Silver Coins worth <span class=”font-bold color-yellow”>5,000,000₫</span> each were hidden in various locations around Ho Chi Minh City.<br/><br/> ","timeline_copy_position_5a":"I’m interested!","timeline_copy_position_5b":"You’ve registered your interest!","timeline_copy_position_6":"This is a sample map. Look out for the actual map when each hunt begins!","visit_sqkii_facebook":"Visit Sqkii’s Facebook page!","visit_sqkii_instagram":"Visit Sqkii’s Instagram!","visit_sqkii_tiktok":"Visit Sqkii’s TikTok!","visit_sqkii_telegram":"Visit Sqkii’s Telegram!","OFFERWALL_NEW_ACTIONBUTTON":"Go","OFFERWALL_CLAIM_ACTIONBUTTON":"Claim","OFFERWALL_REJECTED_ACTIONBUTTON":"Rejected","OFFERWALL_CLAIMED_ACTIONBUTTON":"Claimed","OFFERWALL_TAP_HERE":"<span class=\\"color-primary underline\\">Tap here</span>!","TIPSANDTRICKS_TIMIIMESSAGE_TAP_HERE":"Tap here to sign up.","SILVERCOIN_SILVERCOINFOUND_VERIFICATION_2":"It seems like this Silver Burger has been found!","SILVERCOIN_SILVERCOINFOUND_VERIFICATION_3":"We are verifying the winner and will provide an update within","SILVERCOIN_SILVERCOINFOUND_VERIFICATION_CTA":"Follow us on social media to stay updated on the hunt!","SILVERCOINPOPUP_TAPPED_SAME_SILVERCOIN":"Don\'t remind me again","SURVEY_POPUP_ELABORATE_ERROR":"Please elaborate to continue.","CRYSTAL_POPUP_CLAIMMESSAGE":"You have Vitamin Crystals to claim!","CRYSTAL_POPUP_CLAIMNOW":"Tap here to claim now","OFFERWALL_BASE_BONUS":"x2 bonus for first-time completion","OFFERWALL_STATUS":"Status","OFFERWALL_STATUS_SUBMITTED":"Submitted on:","OFFERWALL_STATUS_PENDING":"Pending","OFFERWALL_STATUS_COMPLETED":"Completed on:","OFFERWALL_STATUS_CLAIMED":"Claimed","TIMELINE_STATUS_ONGOING":"Ongoing","TIMELINE_STATUS_ENDED":"Ended","TIMELINE_STATUS_COMING":"Coming soon","REDEEMPOPUP_HEADING":"Redeem this promo code?","REDEEMPOPUP_CONFIRMATION_ACCOUNT_GUEST":"You are currently using the following <b>guest account</b>:","REDEEMPOPUP_CONFIRMATION_ACCOUNT":"You are currently using the following <br>player account</b>:","REDEEMPOPUP_CONFIRMATION_REDEEMBUTTON":"Redeem","REDEEMPOPUP_CONFIRMATION_SIGNUP_LOGIN":"<span class=\\"color-primary underline\\" id=\\"LOGIN\\">Log in</span> or <span class=\\"color-primary underline\\" id=\\"SIGNUP\\">sign up</span> for a player account before redeeming to keep your Vitamin Crystals safe!","REDEEMPOPUP_CONFIRMATION_ACCOUNT_LOGGEDIN":"You are currently logged in to the following player account:","COPIED_HUNTER_ID":"Copied Hunter ID!","2HRBONUS_TITLE_AVAILABLE":"Bonus available!","2HRBONUS_DESC":"Come back every 2 hours between 10am to 10pm daily to get 5 free Crystals!","COUNTDOWN_TIMER_HOURS_2":"HOURS","COUNTDOWN_TIMER_MINUTES_2":"MINUTES","COUNTDOWN_TIMER_SECONDS_2":"SECONDS","2HRBONUS_BUTTON_CLAIM":"Claim now!","2HRBONUS_MORECRYSTALS":"Want more Vitamin Crystals? <span id=\\"goOfferWall\\" class=\\"underline color-link\\"> Tap here</span>.","2HRBONUS_TITLE_UNAVAILABLE":"Check back in a bit!","SURVEY_POPUP_QUESTION1_1":"Question {order} of {total_question}","SURVEY_POPUP_QUESTION1_3":"Extremely","SURVEY_POPUP_QUESTION1_4":"Not at all","ADVENTURELOG_CURRENT_DATE":"November 2023","MENU_INVENTORY_3":"Events & Updates","DAILY_MISSION_TITLE":"Daily Missions","DAILY_MISSION_DESC":"Missions reset at 0000 hours daily.","BUTTON_CLAIM":"Claim","BUTTON_GO":"Go","BUTTON_CLAIMED":"Claimed","SYNC_ACCOUNT_PROMPT_TITLE":"Sync your #HuntTheMouse and #UNTAMEflavours accounts!","SYNC_ACCOUNT_PROMPT_DESC_1":"<b>Combine & use your Vitamin Crystals</b> across both games","SYNC_ACCOUNT_PROMPT_DESC_2":"<b>Get free Vitamin Crystals</b> after syncing accounts","BUTTON_SIGN_UP_OR_LOGIN":"Sign up/Log in to #HuntTheMouse","BUTTON_SYNC_BOTH_ACCOUNTS":"Sync both accounts","SYNC_ACCOUNT_BA_TITLE":"Sync #HuntTheMouse and #UNTAMEflavours accounts","SYNC_ACCOUNT_BA_HEADER_1":"Submit your #UNTAMEflavours account details","SYNC_ACCOUNT_BA_DESC_1":"Don’t have an #UNTAMEflavours account yet? <span id=\\"SIGN_UP\\" class=\\"color-primary underline\\">Sign up now</span>","SYNC_ACCOUNT_BA_HEADER_2":"Claim free Vitamin Crystals!","SYNC_ACCOUNT_BA_DESC_2":"Free Vitamin Crystals can be claimed in #HuntTheMouse once your account has been verified.","CONFIRM_SYNC_TITLE":"Use this account to sync?","CONFIRM_SYNC_DESC":"You are currently using the following #HuntTheMouse ID:","CONFIRM_SYNC_HUNTER":"{HUNTER}","BUTTON_PROCEED":"Proceed","SYNC_ACCOUNT_FORM_TITLE":"Sync with your <br/> #UNTAMEflavours account","SYNC_ACCOUNT_FORM_DESC":"Enter the mobile number/email address and password that you used to sign up for your #UNTAMEflavours account.","BUTTON_SUBMIT":"Submit","FORGOT_PW_PROMPT_TITLE":"Forgot password","FORGOT_PW_PROMPT_DESC":"No worries! You can head over to #UNTAMEflavours to recover your password. <br/><br/> <span class=\'italic\'>Tapping the button will open a separate tab. </span>","BUTTON_GO_UNTAME":"Go to #UNTAMEflavours","CREDENTIAL":"Mobile number/email address","NOTIFICATION_SYNC_ACCOUNT_SUCCESS":"Your #HuntTheMouse and #UNTAMEflavours accounts have been synced successfully! Claim your Vitamin Crystals now. <br/><br/> <span id=\'GO_BA\' class=\'underline color-yellow\'>Tap here to claim now</span>","MENU_FOUNDCOIN_HEADER":"Found a Silver Burger?","MENU_FOUNDCOIN_DESC":"Tap here to key in the code found on the bottom of the Silver Burger.","MENU_UNTAME_HEADER":"#UNTAMEflavours","MENU_UNTAME_DESC":"Play simple games to get PS5, iPad Air, Ergotune chair, Nintendo Switch, extra Vitamin Crystals, and more!","PLAY_UNTAME_TITLE":"Play #UNTAMEflavours!","PLAY_UNTAME_DESC_1":"Play simple games to get PS5, iPad Air, Ergotune chair, Nintendo Switch, extra Vitamin Crystals, and more!","PLAY_UNTAME_DESC_2":"By tapping this button, a new tab will open on your browser to redirect you to #UNTAMEflavours.","dialogue_tips_nearsilvercircle":"You’re close to a Silver Burger circle! Head over to start hunting for it!","dialogue_tips_multiplesilvercircles":"There are many Silver Burgers hidden all around! Good luck hunting for them!","untameflavours_signup_dialogue_1":"Play simple games in #UNTAMEflavours to get PS5, iPad Air, Ergotune chair, Nintendo Switch, extra Vitamin Crystals, and more!<br><br><a href=\\"https://untame.sqkii.com/\\">Go to #UNTAMEflavours</a>","untameflavours_signup_dialogue_2":"Remember to play #UNTAMEflavours to get PS5, iPad Air, Ergotune chair, Nintendo Switch, extra Vitamin Crystals, and more!<br><br><a href=\\"https://untame.sqkii.com/\\">Go to #UNTAMEflavours</a> ","gps_dialogue_1":"You can provide your GPS location later by tapping on the location icon on the right!","sync_accounts_reminder_dialogue_1":"<a href=\\"{SYNC_ACCOUNTS_POPUP}\\">Sync your #HuntTheMouse and #UNTAMEflavours accounts</a> now to get extra Vitamin Crystals and use them across both games!","brand_action_reminder_dialogue_1":"Don’t have enough Vitamin Crystals? <a href=\\"{BRAND_ACTION_PAGE}\\">Complete actions</a> to get more Vitamin Crystals!","CIRCLE_SHRINK_SURVEY_QUESTION_1":"How would you rate the usefulness of the Circle Shrink?","CIRCLE_SHRINK_SURVEY_QUESTION_2":"Aww… How can we improve?","CIRCLE_SHRINK_SURVEY_QUESTION_3":"What did you like and how can we improve?","CIRCLE_SHRINK_SURVEY_QUESTION_4":"Nice! What did you like the most about it?","CIRCLE_SHRINK_SURVEY_DESCRIPTION_1":"Rate on a scale of 1 to 5!","CIRCLE_SHRINK_SURVEY_DESCRIPTION_2":"Share any feedback or suggestions you have below.","CIRCLE_SHRINK_SURVEY_DESCRIPTION_3":"Share any feedback or suggestions you have below.","CIRCLE_SHRINK_SURVEY_DESCRIPTION_4":"Share any feedback or suggestions you have below.","BA_TITLE_1_VISIT_SCS":"Visit Science Centre Singapore website!","BA_DESC_1_VISIT_SCS":"Tap “Go” to visit the Science Centre Singapore website.","BA_TITLE_2_PURCHASE_TICKET":"Purchase and redeem an UNTAME Onsite ticket!","BA_DESC_2_PURCHASE_TICKET":"Purchase a ticket, collect it at Science Centre Singapore, and enter the ticket code in-game to get Vitamin Crystals!","BA_TITLE_3_LEARN_UNTAME":"Learn more about UNTAME Onsite!","BA_DESC_3_LEARN_UNTAME":"Tap “Go” to find out more about UNTAME Onsite.","BA_TITLE_4_SYNC_ACCOUNTS":"Sync UNTAMEflavours account!","BA_DESC_4_SYNC_ACCOUNTS":"Sync your #HuntTheMouse and #UNTAMEflavours accounts to get extra Vitamin Crystals and use them across both games!","BA_TITLE_5_PLAY_UNTAME":"Play UNTAMEflavours!","BA_DESC_5_PLAY_UNTAME":"Play simple games in #UNTAMEflavours to get PS5, iPad Air, Ergotune chair, Nintendo Switch, extra Vitamin Crystals and more!","BA_TITLE_6_KEE":"Learn more about Kee!","BA_DESC_6_KEE":"Tap “Go” to visit Kee’s website and learn more about how Kee works.","BA_TITLE_7_MAKE_SQKII_LAUGH":"Make Sqkii laugh to earn more Vitamin Crystals!","BA_DESC_7_MAKE_SQKII_LAUGH":"Tag @sqkiimouse in an IG story or TikTok of you hunting outdoors, make Sqkii laugh, and she’ll give you a promo code for extra Vitamin Crystals!","BA_TITLE_8_VISIT_UNTAME":"Visit UNTAME Onsite!","BA_DESC_8_VISIT_UNTAME":"Tag @sqkiimouse in an IG story or TikTok of you visiting the UNTAME Onsite and Sqkii will give you a promo code for extra Vitamin Crystals!","BA_TITLE_9_SHARE_UNTAME":"Share about UNTAME Onsite!","BA_DESC_9_SHARE_UNTAME":"Repost about the UNTAME Onsite event in your IG story, tag @sqkiimouse, and Sqkii will give you a promo code for extra Vitamin Crystals!","BA_TITLE_10_SURVEY":"Complete a survey to earn more Vitamin Crystals!","BA_DESC_10_SURVEY":"Enjoying #HuntTheMouse? Complete a quick survey to earn extra Vitamin Crystals!","BA_TITLE_11_SPOT_HUNTERS":"Spot hunters at Science Centre Singapore","BA_DESC_11_SPOT_HUNTERS":"Tag @sqkiimouse in an IG story or TikTok of at least 5 hunters hunting at Science Centre Singapore on 26 Nov 2023, and Sqkii will give you a promo code for extra Vitamin Crystals!","combined_untame_preview_coins":"2 Silver Burgers will be hidden here soon. <br/> <span class=\'font-bold\' style=\'color:#82E930\'>Zoom in for more info</span>","untame_preview_coin_no_8":"1 Silver Burger <br/> will be hidden here in {TIME}","untame_preview_coin_no_7":"1 Silver Burger <br/> will be hidden here in {TIME}","daily_mission_1":"Shrink a Circle","daily_mission_2":"Perform 1 Brand Action","daily_mission_3":"Complete a 3KM walk","daily_mission_4":"Complete all 3 Daily Missions","BA_POPUP_STATUS_HEADER":"About Milestones","BA_POPUP_STATUS_DESC":"Complete Brand Actions to reach Milestones and be rewarded with bonus Vitamin Crystals!","BA_POPUP_ITEM":"{REQUIRED} Brand Action","DIALOGUE_BA_WALK":"Keep going! Only <span class=\'color-link font-bold\'>{PROGRESS}</span> more metres to go","UNTAME_TICKET_BA_TITLE":"Redeem UNTAME Onsite ticket code","UNTAME_TICKET_BA_HEADER_1":"Purchase an UNTAME Onsite ticket","UNTAME_TICKET_BA_DESC_1":"Don’t have a ticket yet? <a class=\\"color-primary underline\\" href=\\"https://www.gevme.com/scsonlinetickets\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Purchase now</a>\\n","UNTAME_TICKET_BA_HEADER_2":"Collect your ticket to receive a ticket code","UNTAME_TICKET_BA_DESC_2":"UNTAME Onsite tickets can be collected upon registering at the <b>UNTAME Onsite registration booth</b>, <b>Science Centre Singapore </b>between <b>24 November – 2 December 2023</b>.","UNTAME_TICKET_BA_HEADER_3":"Claim free Vitamin Crystals!","UNTAME_TICKET_BA_DESC_3":"Ensure that your #HuntTheMouse and #UNTAMEflavours accounts are synced to be eligible for reward redemption on both games. ","BUTTON_BA_ENTER_TICKET":"Enter ticket code","TICKET_BA_FORM_TITLE":"Redeem UNTAME Onsite <br/>ticket code","TICKET_BA_FORM_DESC":"Once you have collected your physical UNTAME Onsite ticket, enter the code found on your ticket. ","TIKCET_CODE_FIELDS":"Ticket code","SILVERCOIN_WINNERSAGREEMENTPROCESS_STEP2_3":"Copied!","REDEEM_TICKET_BA_TITLE":"Redeem this UNTAME Onsite <br/>ticket code?","REDEEM_TICKET_BA_DESC":"You are currently using the following <b>{PLAYER}</b>: <br/> <br/><b class=\'text-lg\'>{HUNTER}</b>","REDEEM_TICKET_BA_DES_1":"You have entered the following ticket code:","BUTTON_REDEEM":"Redeem","INVALID_TICKET_BA_CODE":"The ticket code you’ve entered is invalid. Please try again. <br/>You have {NUMBER} more attempts before getting timed out.","USED_TICKET_BA_CODE":" The ticket code you\'ve entered has been redeemed on #UNTAMEflavours,\\n      {TIME}. If this was you,\\n      <a\\n        class=\\"underline text-white font-bold\\"\\n        href=\\"{URL}\\"\\n        target=\\"_blank\\"\\n        rel=\\"noopener noreferrer\\"\\n      >\\n        sync your accounts\\n      </a>\\n      for help. now to enjoy rewards on both games! Otherwise, please contact\\n      Sqkii on\\n      <a\\n        class=\\"underline text-white font-bold\\"\\n        href=\\"https://www.facebook.com/sqkii\\"\\n        target=\\"_blank\\"\\n        rel=\\"noopener noreferrer\\"\\n      >\\n        Facebook\\n      </a>\\n      for help.","FAILED_5_TICKET_BA_CODE":"You have been timed out after making 5 invalid attempts. Please try again later.","CONFIRM_NOTE_SYNC_ACCOUNT":"Note: You are about to use a <b>#HuntTheMouse guest account</b> to\\n          sync. If this was not intended,\\n          <span id=\\"SIGN_UP_NOW\\" class=\\"underline\\">sign up/log</span> in before\\n          syncing.","TIPSANDTRICKS_TIMIIMESSAGE_HUNTENDED":"The Silver Burger Quest hunt has ended! #HuntTheMouse will be back in 2024. See you there!","CMS_LANDING_TITLE":"Brand A Dashboard","CMS_BUTTON_MANAGER_LOGIN":"Manager Login","CMS_BUTTON_STAFF_LOGIN":"Staff Login","CMS_LOGIN_MANAGER_TITLE":"Manager Log In","CMS_LOGIN_STAFF_TITLE":"Staff Log In","CMS_FIELDS_MANAGER":"Manager ID","CMS_FIELDS_STAFF":"Staff ID","CMS_FIELDS_PASSWORD":"Password","CMS_FORGOT_PASSWORD":"Forgot Password","CMS_BUTTON_LOGIN":"Log In","CMS_FORGOT_PW_TITLE":"Forgot password?","CMS_FORGOT_PW_DESC1":"Contact your Sqkii POC for help with resetting your password.","CMS_FORGOT_PW_DESC2":"Contact your manager for help with resetting your password.","CMS_BUTTON_BACK_LOGIN":"Back to Log In","CMS_LOGIN_ERRORS_MSG1":"You have entered an incorrect Manager ID and/or password. <br/><br/> Tap \'Forgot Password?\' if you need to reset it.","CMS_LOGIN_ERRORS_MSG2":"You have entered an incorrect Staff ID and/or password. <br/><br/> Tap \'Forgot Password?\' if you need to reset it.","CMS_LOGOUT_TITLE":"Are you sure?","CMS_LOGOUT_DESC":"Once you log out, you will have to enter your Manager ID and password to log back in.","CMS_BUTTON_LOGOUT":"Log Out","CMS_MENU_TITLE_1":"Receipt Verification","CMS_MENU_DESC_1":"{QUANTITY} tickets pending","CMS_MENU_TITLE_2":"Staff List","CMS_MENU_DESC_2":"Reset staff password","CMS_STAFF_FILTER_BY":"Filter by:","CMS_STAFF_ACTIVE":"Active","CMS_STAFF_DEACTIVE":"Deactivated","CMS_FIELDS_SEARCH":"Search Staff Name / ID","CMS_STAFF_ID":"Staff {ID}","CMS_STAFF_NAME":"Staff: <b>{NAME}</b>","CMS_STAFF_VIEW_DETAILS":"Tap to view details","CMS_BUTTON_CREATE_STAFF":"Create New Staff","CMS_CREATE_STAFF_TITLE":"Create New Staff","CMS_FIELDS_STAFF_NAME":"Staff Name","CMS_BUTTON_CREATE":"Create","CMS_STAFF_CREATED_TITLE":"Staff account created!","CMS_STAFF_CREATED_NAME":"Account created for <br/> <b>{NAME}</b>","CMS_STAFF_CREATED_ID":"Staff ID: <br/> <b>{ID}</b>","CMS_STAFF_CREATED_PASSWORD":"Password: <br/> <b>{PASSWORD}</b>","CMS_STAFF_DETAILS_TITLE":"Staff details","CMS_STAFF_DETAIL_ID":"Staff ID: <br/> <b>{ID}</b>","CMS_STAFF_DETAIL_NAME":"Staff name: <br/> <b>{NAME}</b>","CMS_STAFF_DETAIL_CREATED_AT":"Account created on <br/> <b>{CREATED_AT}</b>","CMS_STAFF_DETAIL_DEACTIVED_AT":"Account deactivated on <br/> <b>{DEACTIVED_AT}</b>","CMS_STAFF_DETAIL_STATUS":"Status: <b>{STATUS}</b>","CMS_STAFF_DETAIL_DEACTIVE_ACCOUNT":"Deactivate account","CMS_BUTTON_RESET_PASSWORD":"Reset password","CMS_RESET_PASSWORD_TITLE":"Reset password?","CMS_RESET_PASSWORD_DESC":"Staff <b>{ID}</b>, <b>{NAME}</b> will not be able to log in with their previous password.","CMS_BUTTON_CANCEL":"Cancel","CMS_BUTTON_CONFIRM":"Confirm","CMS_PASSWORD_CHANGED_TITLE":"Password changed!","CMS_PASSWORD_CHANGED_DESC":"Staff {ID}, {NAME}","CMS_PASSWORD_CHANGED_NEW_PASSWORD":"New password: <br/> <b>{NEW_PASSWORD}</b>","CMS_DEACTIVE_ACCOUNT_TITLE":"Deactivate staff account?","CMS_DEACTIVE_ACCOUNT_DESC":"Staff <b>{ID}</b>, <b>{NAME}</b> will not be able to log in and this action cannot be reversed.","CMS_DEACTIVE_CHANGED_TITLE":"Account deactivated!","CMS_DEACTIVE_CHANGED_DESC":"Staff {ID}, {NAME}","CMS_RECEIPT_TITLE":"Receipt verification","CMS_RECEIPT_FILTER_BY":"Filter by:","CMS_RECEIPT_PENDING":"Pending","CMS_RECEIPT_APPROVED":"Approved","CMS_RECEIPT_REJECTED":"Rejected","CMS_FIELDS_SEARCH_RECEIPT":"Search Ticket / Receipt ID","CMS_FIELDS_SELECT_BAS":"Select Brand Action(s)","CMS_FIELDS_SELECT_BA_DATE":"Receipt Submission Date","CMS_RECEIPT_TICKET":"TICKET #{TICKET}","CMS_RECEIPT_SUBMITED_AT":"Submitted on: <b>{SUBMITED_AT}</b>","CMS_RECEIPT_VIEW_DETAILS":"Tap to view details","CMS_RECEIPT_APPROVED_AT":"Approved on: <b>{APPROVED_AT}</b>","CMS_RECEIPT_APPROVED_ID":"Receipt ID: <b>{APPROVED_ID}</b>","CMS_RECEIPT_APPROVED_BA":"Brand Action: <b>{APPROVED_BA}</b>","CMS_RECEIPT_REJECTED_AT":"Rejected on: <b>{REJECTED_AT}</b>","CMS_RECEIPT_REJECTED_REASON":"Reason: <b>{REJECTED_REASON}</b>","CMS_RECEIPT_DETAIL_TITLE":"Receipt Verification","CMS_RECEIPT_DETAIL_TICKET":"Ticket #{TICKET}","CMS_RECEIPT_DETAIL_SUBMITED_AT":"Submitted on: <b>{SUBMITED_AT}</b>","CMS_RECEIPT_DETAIL_HUNTER_ID":"Hunter / Guest ID: <b>{TYPE} #{HUNTER_ID}</b>","CMS_RECEIPT_DETAIL_ID":"Receipt ID: <b>{ID}</b>","CMS_RECEIPT_DETAIL_BA":"Brand Action: <b>{APPROVED_BA}</b>","CMS_RECEIPT_DETAIL_SPENT_AMOUNT":"Amount Spent (S$): <b>{AMOUNT}</b>","CMS_RECEIPT_DETAIL_STATUS":"Status: <b>{STATUS}</b>","CMS_RECEIPT_DETAIL_APPROVED_AT":"Approved on: <b>{APPROVED_AT}</b>","CMS_RECEIPT_DETAIL_APPROVED_BY":"Approved by: <b>Staff #{APPROVED_BY}</b>","CMS_RECEIPT_DETAIL_REJECTED_REASON":"Rejection Reason: <br/> <b>{REJECTED_REASON}</b>","CMS_RECEIPT_DETAIL_REJECTED_AT":"Rejected on: <b>{REJECTED_AT}</b>","CMS_RECEIPT_DETAIL_REJECTED_BY":"Rejected by: <b>Staff #{REJECTED_BY}</b>","CMS_SUBMITTED_PHOTO_TITLE":"Submitted photos","CMS_BUTTON_CLOSE":"Close","CMS_FIELDS_RECEPIT_ID":"Receipt ID","CMS_FIELDS_SELECT_BA":"Select Brand Action","CMS_FIELDS_AMOUNT":"Amount Spent (S$)","CMS_FIELDS_MERCHANT_NAME":"Merchant Name","CMS_BUTTON_NEXT":"Next","CMS_FIELDS_RECEPIT_ID_ERROR":"Receipt ID cannot be left blank.","CMS_FIELDS_SELECT_BA_ERROR":"Select a Brand Action.","CMS_FIELDS_AMOUNT_ERROR":"Amount Spent (S$) cannot be left blank.","CMS_FIELDS_MERCHANT_NAME_ERROR":"Merchant name cannot be left blank.","CMS_RECEIPT_DETAIL_MERCHANT_NAME":"Merchant Name: <b>{MERCHANT_NAME}</b>","CMS_RECEIPT_APPROVED_TITLE":"Ticket Approved","CMS_RECEIPT_APPROVED_TICKET_ID":"Ticket ID: <br/> <b>#{TICKET_ID}</b>","CMS_RECEIPT_APPROVED_RECEIPT_ID":"Receipt ID: <br/> <b>#{RECEIPT_ID}</b>","CMS_RECEIPT_APPROVED_BRAND":"Brand Action: <br/> <b>{APPROVED_BA}</b>","CMS_RECEIPT_APPROVED_SPENT_AMOUNT":"Amount Spent (S$): <br/> <b>{AMOUNT}</b>","CMS_BUTTON_RETURN_RECEIPT":"Return to receipts","CMS_REJECT_REASON_TITILE":"Select rejection reason","CMS_REJECT_REASON_DESC_1":"Item(s) purchased is not eligible","CMS_REJECT_REASON_DESC_2":"Unclear receipt","CMS_REJECT_REASON_DESC_3":"Inauthentic receipt","CMS_REJECT_REASON_DESC_4":"Duplicate receipt","CMS_REJECT_REASON_DESC_5":"Date of transaction is not eligible","CMS_REJECT_REASON_DESC_6":"Other:","CMS_FIELDS_REASON_PLACEHOLDER":"Please enter your reason","CMS_REJECT_CONFIRM_TITLE":"Reject ticket?","CMS_REJECT_CONFIRM_DESC":"You will not be able to undo this action once you reject it.","CMS_BUTTON_REJECT":"Reject","CMS_RECEIPT_REJECTED_TITLE":"Ticket Rejected","CMS_RECEIPT_REJECTED_ID":"Ticket ID: <br/> <b>#{TICKET_ID}</b>","CMS_RECEIPT_REJECTED_REASONS":"Reason <br/> <b>#{REASON}</b>","EVENTS_UPDATE_TITLE":"Events & Updates","EVENTS_UPDATE_TEXT":"That’s all the Events & Updates we have for now. Check back soon!","CONTEST_TITLE":"TP.HCM Campus Rush","CONTEST_SUB_TITLE":"Sqkii wants to drop bonus coins near your university!","CONTEST_DESC_1":"The Top 3 universities with the most votes will have <b class=\'color-purple\'>extra coins</b> dropped nearby. Vote for your university now and get <b class=\'color-purple\'>{REWARD} free crystals</b>!","CONTEST_DESC_2":"Cast your votes by 10 March 2024","CONTEST_DAYS":"DAYS","CONTEST_HOURS":"HOURS","CONTEST_MINUTES":"MINUTES","CONTEST_SECOND":"SECOND","CONTEST_LEADERBOARD":"Leaderboard","CONTEST_LEADERBOARD_DESC":"Last updated on {DATE}","BUTTON_VOTE_NOW":"Vote now","BUTTON_SIGN_TO_VOTE":"Sign up / log in to vote","VOTING_TITLE_1":"TP.HCM Campus Rush","VOTING_DESC_1":"The universities with the Top 3 most votes will have extra coins dropped in the vicinity!","FIELD_SPECIFY_UNVERSITY":"Please specify which university","BUTTON_SUBMIT_VOTE":"Submit vote","VOTING_TITLE_2":"Confirm submission","VOTING_DESC_2":"Please check that the following information is correct. You may only vote once and it cannot be changed after.","VOTING_DESC_2_SELECT_INFO":"University selected <br/><br/> <b class=\'text-lg\'>{UNIVERSITY}</b>","BUTTON_CONFIRM":"Confirm","VOTING_TITLE_3":"Vote submitted","VOTING_DESC_3":"Thank you for voting in TP.HCM Campus Rush! <br/><br/> Keep a look out for the results on <br/><b>7 March 2024, 10:00AM</b>!","RECEIPT_VERIFICATION_5_NOTALLOWED_ALERT":"GPS not detected. If your location is still not showing up on the map, go to your settings and enable location services for the browser you’re on (Chrome, Safari).<br/><br/>Refresh this page once you have updated your location settings.<br/><br/><div class=\\"full-width flex items-center justify-between\\"><a class=\\"underline color-yellow\\" href=\\"https://support.apple.com/en-us/HT203040\\" target=\\"_blank\\">Troubleshoot for iOS</a><a class=\\"underline color-yellow\\" href=\\"https://support.google.com/chrome/answer/2693767?hl=en&co=GENIE.Platform%3DAndroid&oco=0\\" target=\\"_blank\\">Troubleshoot for Android</a></div>","RECEIPT_VERIFICATION_9_1PHOTOSAVED_HEADER":"Upload receipt","RECEIPT_VERIFICATION_6_TAKEPHOTO_HEADER":"Take photo","RECEIPT_VERIFICATION_7_PHOTOTAKEN_HEADER":"Review photo","RECEIPT_VERIFICATION_13_RECEIPTSUBMITTED_HEADER":"Receipt uploaded!","RECEIPT_VERIFICATION_6_TAKEPHOTO_DESCRIPTION":"Please ensure that the following details can be seen clearly: date of transaction; transaction/receipt number; item(s) purchased; total receipt value","RECEIPT_VERIFICATION_6_TAKEPHOTO_ACTIONBUTTON":"Upload from gallery","RECEIPT_VERIFICATION_7_TAKEPHOTO_ACTIONBUTTON":"RECEIPT_VERIFICATION_7_TAKEPHOTO_ACTIONBUTTON","RECEIPT_VERIFICATION_7_TAKEPHOTO_ACTIONBUTTON_1":"Save photo","RECEIPT_VERIFICATION_9_1PHOTOSAVED_MESSAGE":"Tap on a photo below to view and edit them","RECEIPT_VERIFICATION_9_1PHOTOSAVED_MESSAGE_1":"{num} of 5 photos uploaded","RECEIPT_VERIFICATION_9_1PHOTOSAVED_ACTIONBUTTON":"Submit","RECEIPT_VERIFICATION_12_DELETECONFIRMATION_HEADER":"Delete photo?","RECEIPT_VERIFICATION_12_DELETECONFIRMATION_DESCRIPTION":"You will not be able to keep the current photo.","RECEIPT_VERIFICATION_8_RETAKECONFIRMATION_ACTIONBUTTON_1":"Keep photo","RECEIPT_VERIFICATION_8_RETAKECONFIRMATION_ACTIONBUTTON":"Retake","RECEIPT_VERIFICATION_8_RETAKECONFIRMATION_MESSAGE":"You will not be able to keep the current photo.","RECEIPT_VERIFICATION_8_RETAKECONFIRMATION_HEADER":"Retake photo?","RECEIPT_VERIFICATION_13_RECEIPTSUBMITTED_DESCRIPTION_1":"Thank you for uploading your receipt!","RECEIPT_VERIFICATION_13_RECEIPTSUBMITTED_DESCRIPTION_2":"It may take up to 24 hours from the time of submission for your receipt to be verified.","RECEIPT_VERIFICATION_13_RECEIPTSUBMITTED_DESCRIPTION_3":"Once successfully verified, you will receive a notification to claim your Crystals.","RECEIPT_VERIFICATION_13_RECEIPTSUBMITTED_ACTIONBUTTON":"Back to Offers","RECEIPT_VERIFICATION_18_SENTOSAINFO_BRANDACTION_DESCRIPTION":"View participating outlets","RECEIPTVERIFICATION_18A_SENTOSAPARTICIPATINGOUTLETS_HEADER":"Participating Outlets","RECEIPT_VERIFICATION_1_INFO_HEADER_ACTION_1":"Spend $15 at myVillage. Every $15 spent across your receipts will entitle you to Crystals.","RECEIPTVERIFICATION_1_INFO_HEADER":"Upload receipt","RECEIPT_VERIFICATION_1_INFO_HEADER_ACTION_2":"Upload your receipt photo(s)","RECEIPT_VERIFICATION_1_INFO_HEADER_ACTION_2_DESCRIPTION":"View photo requirements","RECEIPT_VERIFICATION_1_INFO_HEADER_ACTION_3":"Await receipt verification","RECEIPT_VERIFICATION_1_INFO_HEADER_ACTION_3_DESCRIPTION":"Receipt verification may take up to 24 hours from the time of submission.","RECEIPT_VERIFICATION_1_INFO_HEADER_ACTION_4":"Claim rewards!","RECEIPT_VERIFICATION_1_INFO_HEADER_ACTION_4_DESCRIPTION":"Rewards can be claimed once your receipt has been verified.","VERIFICATION_HEADER_INFO_ACTIONBUTTON":"Go","VERIFICATION_1A_REQUIREMENTSPOPUP_HEADER":"Photo requirements","VERIFICATION_1A_REQUIREMENTSPOPUP_DESCRIPTION":"<li>Each submission must only contain one receipt. Up to 5 photos may be uploaded per submission to capture the full receipt.</li><li>Photo(s) must be of the original receipt.</li><li>Photo(s) must be clear and legible.</li><li>Photo must capture the full receipt (i.e. not cropped).</li><li>Photo(s) must include name and address of business establishment.</li><li>Photo(s) must include date of transaction, which must be between 01 March 2023, 12:01am to 01 April 2022, 11:59pm (both dates inclusive).</li><li>Photo(s) must include the transaction/receipt number.</li><li>Photo(s) must show the item(s) purchased and receipt value.</li>","PROMOCODE_POPUP_ENABLECAMERAACCESS_HEADER":"Enable camera access","PROMOCODE_POPUP_ENABLECAMERAACCESS_DESCRIPTION":"Access to your camera is required in order to upload receipts.","PROMOCODE_POPUP_BUTTONCOPY_SUBMIT_ALLOWACCESS":"Allow access","PROMOCODE_POPUP_BUTTONCOPY_LATER":"Later","VOTED_COIN_DROPPED_NEARBY":"will be dropped nearby","VOTED_FOR":"You voted for...","MENU_REFERRAL_HEADER":"Hunt together","MENU_REFERRAL_DESCRIPTION":"Invite your friends to join the hunt and get Crystals.","REFERRAL_TITLE":"Refer friends","REFERRAL_COPIED":"Referral link was copied in clipboard","REFERRAL_DESC_1":"Get {REWARD} Crystals","REFERRAL_DESC_2":"for each friend that joins the hunt!","REFERRAL_DESC_3":"Your referral link:","REFERRAL_DESC_4":"Sign up for an account to make referrals and earn rewards!","REFERRAL_DESC_5":"I have an account!","REFERRAL_HUNTER_ID":"Hunter ID","REFERRAL_STATUS":"Status","REFERRAL_VOTING_STATUS":"Voting Status","REFERRAL_BUTTON_PENDING":"Pending","REFERRAL_BUTTON_CLAIM":"Claim","REFERRAL_BUTTON_SIGN_UP":"Sign up for an account","REFERRAL_BUTTON_CLAIMED":"Claimed","REFERRAL_EMPTY_LIST":"<b>No friends here yet!</b><br/> Tell your friends to #HuntTheMouse with you now!","REFERRAL_PENDING_DIALOG_TITLE":"Pending referral status","REFERRAL_PENDING_DIALOG_DESC":"The “Pending” status means that the friend you’ve referred has not signed up for an account yet!<br/><br/>You will only be able to claim your reward when your friend(s) have successfully signed up for an account.","CONTEST_REFERRAL_DIALOG_TITLE":"Refer friends","CONTEST_REFERRAL_DIALOG_DESC_1":"<b class=\'text-lg\'>No referrals yet</b> <br/><br/>Once your friends sign up using your referral link, they’ll be directed here.","CONTEST_REFERRAL_DIALOG_DESC_2":"Your referral link:","CONTEST_REFERRAL_COPIED":"Your referral link has been copied! Share this with your friends and get them to vote for your university!"}');
            var s = t(65329)
              , _ = function(e, o, t, n) {
                function r(e) {
                    return e instanceof t ? e : new t((function(o) {
                        o(e)
                    }
                    ))
                }
                return new (t || (t = Promise))((function(t, i) {
                    function a(e) {
                        try {
                            _(n.next(e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function s(e) {
                        try {
                            _(n["throw"](e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function _(e) {
                        e.done ? t(e.value) : r(e.value).then(a, s)
                    }
                    _((n = n.apply(e, o || [])).next())
                }
                ))
            };
            function E() {
                return _(this, void 0, void 0, (function*() {
                    try {
                        let e = "";
                        r.A.has("lang") ? e = r.A.getItem("lang") : (r.A.set("lang", "vi"),
                        yield s.m.changeLang("vi"),
                        e = "vi");
                        const {data: o} = yield n.api.get("/content", {
                            params: {
                                lang: e
                            }
                        })
                          , t = null === o || void 0 === o ? void 0 : o.data;
                        if (t)
                            for (const [n,r] of Object.entries(t))
                                t[n] = String(r);
                        const a = (0,
                        i.omitBy)(t, (e=>!e));
                        return {
                            en: a
                        }
                    } catch (e) {
                        return {
                            en: a
                        }
                    }
                }
                ))
            }
        }
        ,
        51764: (e,o,t)=>{
            "use strict";
            t.d(o, {
                J: ()=>r
            });
            var n = t(77854);
            const r = {
                guest() {
                    return n.api.get("/guest")
                },
                getUser() {
                    return n.api.get("/user/me")
                },
                getSettings() {
                    return n.api.get("/setting")
                },
                getBuildVersion() {
                    return n.api.get("/build-version")
                },
                signupMobileNumber(e) {
                    return n.api.post("/user/register", e)
                },
                signupPassword(e) {
                    return n.api.post("/user/register", e)
                },
                forgotMobileNumber(e) {
                    return n.api.post("/forgot-password", e)
                },
                forgotOTP(e) {
                    return n.api.post("/forgot-password", e)
                },
                forgotPassword(e) {
                    return n.api.post("/forgot-password", e)
                },
                resendOTP(e) {
                    return n.api.post("/user/resend-otp", e)
                },
                login(e) {
                    return n.api.post("/login", e)
                },
                getIP() {
                    return n.api.get("https://api.ipify.org?format=json")
                },
                verifyMobileNumber(e) {
                    return n.api.post("/user/verify-mobile-number", e)
                }
            }
        }
        ,
        78287: (e,o,t)=>{
            "use strict";
            t.d(o, {
                T: ()=>r
            });
            var n = t(77854);
            const r = {
                get() {
                    return n.api.get("/brandaction")
                },
                uploadFile(e) {
                    return n.api.post("/brandaction/upload-receipt", e, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                },
                scan_qrcode(e) {
                    return n.api.post("/brandaction/scan-qrcode", e)
                },
                claim(e) {
                    return n.api.post("/brandaction/claim", {
                        user_brand_action_id: e
                    })
                },
                visit_web(e) {
                    return n.api.post("brandaction/visit-web", {
                        brand_action_id: e
                    })
                },
                getPhysical(e) {
                    return n.api.post("/brandaction/physical-store", e)
                },
                getNoti() {
                    return n.api.get("/brandaction/noti")
                },
                seenNoti(e) {
                    return n.api.post("/brandaction/seen-noti", e)
                },
                seenAllNoti(e) {
                    return n.api.post("/brandaction/seen-all-noti", e)
                },
                submitClientInfo(e) {
                    return n.api.post("brandaction/submit-client-info", e)
                },
                claimPromo(e) {
                    return n.api.post("/brandaction/claim-promo-codes", e)
                },
                claimAll() {
                    return n.api.get("/brandaction/claim-all")
                },
                getBrandIcons() {
                    return n.api.get("/brandaction/icons")
                },
                syncUntame(e) {
                    return n.api.post("/brandaction/sync-untame", e)
                },
                claimMileston(e) {
                    return n.api.post("/brandaction/claim-milestone", {
                        milestone_id: e
                    })
                },
                untameCheckTicket(e) {
                    return n.api.post("/brandaction/check-untame-ticket", {
                        code: e
                    })
                },
                untameTicket(e) {
                    return n.api.post("/brandaction/untame-ticket", {
                        code: e
                    })
                }
            }
        }
        ,
        96247: (e,o,t)=>{
            "use strict";
            t.d(o, {
                _: ()=>r
            });
            var n = t(77854);
            const r = {
                get() {
                    return n.api.get("/dailymission")
                },
                claim(e) {
                    return n.api.post("/dailymission/claim", {
                        unique_id: e
                    })
                },
                walk(e, o) {
                    return n.api.post("/dailymission/walk", {
                        lng: e,
                        lat: o
                    })
                },
                survey(e) {
                    return n.api.post("/user/shrink-pu-survey", e)
                }
            }
        }
        ,
        33640: (e,o,t)=>{
            "use strict";
            t.d(o, {
                l: ()=>r
            });
            var n = t(77854);
            const r = {
                list: ()=>n.api.get("/event"),
                contest: e=>n.api.get(`/event/contest/${e}`),
                seen: e=>n.api.post("/event/seen", {
                    id: e
                }),
                vote: e=>n.api.post(`/event/contest/${e.id}/vote`, {
                    school: e.school
                })
            }
        }
        ,
        3239: (e,o,t)=>{
            "use strict";
            t.d(o, {
                s: ()=>r
            });
            var n = t(77854);
            const r = {
                getCheckHint() {
                    return n.api.get("/hint/check-hint-shop")
                },
                getHint() {
                    return n.api.get("/hint")
                },
                buyHint(e) {
                    return n.api.post("/hint/buy-hint", e)
                }
            }
        }
        ,
        74329: (e,o,t)=>{
            "use strict";
            t.d(o, {
                u: ()=>r
            });
            var n = t(77854);
            const r = {
                getTimeline() {
                    return n.api.get("/timeline")
                },
                remind(e) {
                    return n.api.post("/season-consent", e)
                }
            }
        }
        ,
        65329: (e,o,t)=>{
            "use strict";
            t.d(o, {
                m: ()=>i
            });
            var n = t(77854)
              , r = function(e, o, t, n) {
                function r(e) {
                    return e instanceof t ? e : new t((function(o) {
                        o(e)
                    }
                    ))
                }
                return new (t || (t = Promise))((function(t, i) {
                    function a(e) {
                        try {
                            _(n.next(e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function s(e) {
                        try {
                            _(n["throw"](e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function _(e) {
                        e.done ? t(e.value) : r(e.value).then(a, s)
                    }
                    _((n = n.apply(e, o || [])).next())
                }
                ))
            };
            const i = {
                me() {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.get("/user/me")
                    }
                    ))
                },
                getSurvey() {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.get("/user/survey")
                    }
                    ))
                },
                updateSettings(e) {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.post("/user/setting", e)
                    }
                    ))
                },
                updateDropCoin(e) {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.post("/user/coin-drop", {
                            ids: e
                        })
                    }
                    ))
                },
                trackLocation(e) {
                    n.api.post("/user/location", e)
                },
                updateOnboarding(e) {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.post("/user/onboarding", e)
                    }
                    ))
                },
                logout() {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.post("/user/logout")
                    }
                    ))
                },
                changeHunterId() {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.post("/user/change-hunter-id")
                    }
                    ))
                },
                updateSurvey(e) {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.post("/user/survey", e)
                    }
                    ))
                },
                claimSurveyReward() {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.get("/user/survey-reward")
                    }
                    ))
                },
                trackData(e, o) {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.post("/track", {
                            type: e,
                            data: o
                        })
                    }
                    ))
                },
                changeLang(e) {
                    return r(this, void 0, void 0, (function*() {
                        return n.api.put("/user", {
                            lang: e
                        })
                    }
                    ))
                }
            }
        }
        ,
        45551: (e,o,t)=>{
            "use strict";
            t.d(o, {
                Z: ()=>S
            });
            var n = t(78287)
              , r = t(90587)
              , i = t(79786)
              , a = t(51764)
              , s = t(3239)
              , _ = t(74329)
              , E = t(96247)
              , l = t(33640)
              , T = t(81750)
              , u = function(e, o, t, n) {
                function r(e) {
                    return e instanceof t ? e : new t((function(o) {
                        o(e)
                    }
                    ))
                }
                return new (t || (t = Promise))((function(t, i) {
                    function a(e) {
                        try {
                            _(n.next(e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function s(e) {
                        try {
                            _(n["throw"](e))
                        } catch (o) {
                            i(o)
                        }
                    }
                    function _(e) {
                        e.done ? t(e.value) : r(e.value).then(a, s)
                    }
                    _((n = n.apply(e, o || [])).next())
                }
                ))
            };
            const S = (0,
            r.nY)("user", {
                state: ()=>({
                    token: i.A.getItem("htm-2024_token") || null,
                    user: null,
                    settings: null,
                    defaultPath: "home",
                    ioStore: {},
                    brand_actions: [],
                    newBrandActions: [],
                    user_brand_actions: [],
                    featured_brand_actions: [],
                    referral_code: "",
                    check_hint: null,
                    hint: [],
                    timeline: [],
                    activeTimeline: [],
                    currentTimelineIndex: 0,
                    isEndGame: !1,
                    accessFoundCoin: !1,
                    currentDate: null,
                    dailyMissions: [],
                    currentSeason: null,
                    specialPrevSeasonTrigger: !1,
                    milestones: [],
                    events: null,
                    contest: null
                }),
                getters: {
                    isAuthenticated: e=>!!e.token,
                    startHuntDate: e=>{
                        var o, t, n;
                        return "future" === (null === (o = e.currentSeason) || void 0 === o ? void 0 : o.status) ? (null === (t = e.currentSeason) || void 0 === t ? void 0 : t.end_at) || "" : (null === (n = e.currentSeason) || void 0 === n ? void 0 : n.start_at) || ""
                    }
                },
                actions: {
                    getZnsRemainingQuota: ()=>u(void 0, void 0, void 0, (function*() {
                        var e;
                        try {
                            const {data: o} = yield a.J.getSettings();
                            return null === (e = null === o || void 0 === o ? void 0 : o.zalo_daily_quota) || void 0 === e ? void 0 : e.remainingQuota
                        } catch (o) {
                            T.error("error", o)
                        }
                    }
                    )),
                    checkLimitZns: (e,o)=>u(void 0, void 0, void 0, (function*() {
                        try {
                            T.log(e),
                            o()
                        } catch (t) {}
                    }
                    )),
                    setSocket(e) {
                        this.ioStore = Object.assign(Object.assign({}, this.ioStore), e)
                    },
                    fetchBrandAction() {
                        return u(this, void 0, void 0, (function*() {
                            const {data: e} = yield n.T.get();
                            this.milestones = e.milestones,
                            this.brand_actions = e.brand_actions.map((o=>{
                                var t, n;
                                return Object.assign(Object.assign({}, o), {
                                    featured: null === (t = e.featured_brand_actions) || void 0 === t ? void 0 : t.find((e=>e.brand_action === o._id)),
                                    bonus: null === (n = e.bonus_brand_actions) || void 0 === n ? void 0 : n.find((e=>e.brand_action === o._id))
                                })
                            }
                            )),
                            this.newBrandActions = this.brand_actions.filter((e=>e.can_perform)).map((e=>Object.assign(Object.assign({}, e), {
                                status: "new"
                            }))),
                            this.featured_brand_actions = e.featured_brand_actions,
                            this.user_brand_actions = e.user_brand_actions.map((e=>{
                                const o = this.brand_actions.find((o=>o.unique_id === e.ba_unique_id));
                                return Object.assign(Object.assign(Object.assign({}, o), e), {
                                    _id: e._id,
                                    reward: null === o || void 0 === o ? void 0 : o.reward,
                                    userReward: null === e || void 0 === e ? void 0 : e.reward
                                })
                            }
                            ))
                        }
                        ))
                    },
                    setBrandAction(e) {
                        let o = -1;
                        o = "pending" === e.status ? this.brand_actions.findIndex((o=>o._id === e._id)) : this.brand_actions.findIndex((o=>o.user_ba_id === e.user_ba_id)),
                        o >= 0 && (this.brand_actions[o] = Object.assign(Object.assign({}, this.brand_actions[o]), e))
                    },
                    setUser(e) {
                        this.user = e
                    },
                    fetchUser() {
                        return u(this, void 0, void 0, (function*() {
                            const {data: e} = yield a.J.getUser();
                            this.user = e
                        }
                        ))
                    },
                    setSetting(e) {
                        return u(this, void 0, void 0, (function*() {
                            this.settings && (this.settings = Object.assign(Object.assign({}, this.settings), e))
                        }
                        ))
                    },
                    fetchSettings() {
                        var e, o;
                        return u(this, void 0, void 0, (function*() {
                            const {data: t} = yield a.J.getSettings();
                            this.settings = t,
                            this.currentDate = Date.now();
                            const n = null === (e = this.settings) || void 0 === e ? void 0 : e.seasons.find((e=>this.currentDate && +new Date(e.start_at) <= this.currentDate && this.currentDate < +new Date(e.end_at)));
                            n && (this.currentSeason = n),
                            this.specialPrevSeasonTrigger = !(null === (o = null === n || void 0 === n ? void 0 : n.fake_coins) || void 0 === o ? void 0 : o.length) && "future" === (null === n || void 0 === n ? void 0 : n.status)
                        }
                        ))
                    },
                    fetchCheckHint() {
                        return u(this, void 0, void 0, (function*() {
                            const {data: e} = yield s.s.getCheckHint();
                            this.check_hint = e
                        }
                        ))
                    },
                    fetchDailyMission() {
                        return u(this, void 0, void 0, (function*() {
                            const {data: e} = yield E._.get();
                            this.dailyMissions = e.sort(((e,o)=>o.progress >= o.required ? 1 : -1)).sort(((e,o)=>o.claimed_at ? -1 : 1))
                        }
                        ))
                    },
                    fetchHint() {
                        return u(this, void 0, void 0, (function*() {
                            const {data: e} = yield s.s.getHint();
                            this.hint = e
                        }
                        ))
                    },
                    fetchTimeline() {
                        return u(this, void 0, void 0, (function*() {
                            const {data: e} = yield _.u.getTimeline();
                            this.timeline = e.filter((e=>{
                                var o;
                                return e.season_id && e.season_id === (null === (o = this.currentSeason) || void 0 === o ? void 0 : o.id)
                            }
                            )),
                            this.setActiveTimeline()
                        }
                        ))
                    },
                    setToken(e) {
                        this.token = e,
                        i.A.set("htm-2024_token", e)
                    },
                    playAsGuest() {
                        return u(this, void 0, void 0, (function*() {
                            const {data: e} = yield a.J.guest();
                            this.setUser(e.user),
                            this.setToken(e.token)
                        }
                        ))
                    },
                    updateUser(e) {
                        const o = Object.assign(Object.assign({}, this.user), e);
                        return this.user = o,
                        o
                    },
                    logout() {
                        return u(this, void 0, void 0, (function*() {
                            this.user = null,
                            i.A.clear(),
                            location.reload()
                        }
                        ))
                    },
                    setReferralCode(e) {
                        this.referral_code = e
                    },
                    setAccessFoundCoin(e) {
                        this.accessFoundCoin = e
                    },
                    setActiveTimeline() {
                        this.activeTimeline = this.timeline.filter((e=>"ongoing" === e.status || "future" === e.status))
                    },
                    setCurrentTimelineIndex(e) {
                        this.currentTimelineIndex = e
                    },
                    updateSettings(e) {
                        const o = Object.assign(Object.assign({}, this.settings), e);
                        this.currentDate = Date.now(),
                        this.settings = o
                    },
                    updateEndgame(e) {
                        this.isEndGame = e
                    },
                    fetchEvents() {
                        return u(this, void 0, void 0, (function*() {
                            const {data: e} = yield l.l.list();
                            this.events = e
                        }
                        ))
                    },
                    getContest(e) {
                        return u(this, void 0, void 0, (function*() {
                            try {
                                const {data: o} = yield l.l.contest(e);
                                return o || null
                            } catch (o) {
                                T.error("error", o)
                            }
                        }
                        ))
                    },
                    fetchContest(e) {
                        return u(this, void 0, void 0, (function*() {
                            try {
                                const {data: o} = yield l.l.contest(e);
                                this.contest = o || null
                            } catch (o) {
                                T.error("error", o)
                            }
                        }
                        ))
                    }
                }
            })
        }
        ,
        78982: ()=>{}
        ,
        47790: ()=>{}
        ,
        73776: ()=>{}
        ,
        77965: ()=>{}
        ,
        66089: ()=>{}
        ,
        79368: ()=>{}
        ,
        64688: ()=>{}
        ,
        51069: ()=>{}
        ,
        15340: ()=>{}
        ,
        79838: ()=>{}
    }
      , o = {};
    function t(n) {
        var r = o[n];
        if (void 0 !== r)
            return r.exports;
        var i = o[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t),
        i.loaded = !0,
        i.exports
    }
    t.m = e,
    (()=>{
        var e = [];
        t.O = (o,n,r,i)=>{
            if (!n) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [n,r,i] = e[l], s = !0, _ = 0; _ < n.length; _++)
                        (!1 & i || a >= i) && Object.keys(t.O).every((e=>t.O[e](n[_]))) ? n.splice(_--, 1) : (s = !1,
                        i < a && (a = i));
                    if (s) {
                        e.splice(l--, 1);
                        var E = r();
                        void 0 !== E && (o = E)
                    }
                }
                return o
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--)
                e[l] = e[l - 1];
            e[l] = [n, r, i]
        }
    }
    )(),
    (()=>{
        t.n = e=>{
            var o = e && e.__esModule ? ()=>e["default"] : ()=>e;
            return t.d(o, {
                a: o
            }),
            o
        }
    }
    )(),
    (()=>{
        t.d = (e,o)=>{
            for (var n in o)
                t.o(o, n) && !t.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: o[n]
                })
        }
    }
    )(),
    (()=>{
        t.f = {},
        t.e = e=>Promise.all(Object.keys(t.f).reduce(((o,n)=>(t.f[n](e, o),
        o)), []))
    }
    )(),
    (()=>{
        t.u = e=>"js/" + (996 === e ? "chunk-common" : e) + "." + {
            144: "af964c59",
            489: "084b2295",
            769: "5e0ce6eb",
            996: "aca67543"
        }[e] + ".js"
    }
    )(),
    (()=>{
        t.miniCssF = e=>"css/" + e + "." + {
            144: "e62ed018",
            489: "22333a97",
            769: "b720e502"
        }[e] + ".css"
    }
    )(),
    (()=>{
        t.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }
    )(),
    (()=>{
        t.o = (e,o)=>Object.prototype.hasOwnProperty.call(e, o)
    }
    )(),
    (()=>{
        var e = {}
          , o = "htm-frontend-2023:";
        t.l = (n,r,i,a)=>{
            if (e[n])
                e[n].push(r);
            else {
                var s, _;
                if (void 0 !== i)
                    for (var E = document.getElementsByTagName("script"), l = 0; l < E.length; l++) {
                        var T = E[l];
                        if (T.getAttribute("src") == n || T.getAttribute("data-webpack") == o + i) {
                            s = T;
                            break
                        }
                    }
                s || (_ = !0,
                s = document.createElement("script"),
                s.charset = "utf-8",
                s.timeout = 120,
                t.nc && s.setAttribute("nonce", t.nc),
                s.setAttribute("data-webpack", o + i),
                s.src = n),
                e[n] = [r];
                var u = (o,t)=>{
                    s.onerror = s.onload = null,
                    clearTimeout(S);
                    var r = e[n];
                    if (delete e[n],
                    s.parentNode && s.parentNode.removeChild(s),
                    r && r.forEach((e=>e(t))),
                    o)
                        return o(t)
                }
                  , S = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: s
                }), 12e4);
                s.onerror = u.bind(null, s.onerror),
                s.onload = u.bind(null, s.onload),
                _ && document.head.appendChild(s)
            }
        }
    }
    )(),
    (()=>{
        t.r = e=>{
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }
    )(),
    (()=>{
        t.nmd = e=>(e.paths = [],
        e.children || (e.children = []),
        e)
    }
    )(),
    (()=>{
        t.p = "/"
    }
    )(),
    (()=>{
        if ("undefined" !== typeof document) {
            var e = (e,o,t,n,r)=>{
                var i = document.createElement("link");
                i.rel = "stylesheet",
                i.type = "text/css";
                var a = t=>{
                    if (i.onerror = i.onload = null,
                    "load" === t.type)
                        n();
                    else {
                        var a = t && ("load" === t.type ? "missing" : t.type)
                          , s = t && t.target && t.target.href || o
                          , _ = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                        _.code = "CSS_CHUNK_LOAD_FAILED",
                        _.type = a,
                        _.request = s,
                        i.parentNode.removeChild(i),
                        r(_)
                    }
                }
                ;
                return i.onerror = i.onload = a,
                i.href = o,
                t ? t.parentNode.insertBefore(i, t.nextSibling) : document.head.appendChild(i),
                i
            }
              , o = (e,o)=>{
                for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                    var r = t[n]
                      , i = r.getAttribute("data-href") || r.getAttribute("href");
                    if ("stylesheet" === r.rel && (i === e || i === o))
                        return r
                }
                var a = document.getElementsByTagName("style");
                for (n = 0; n < a.length; n++) {
                    r = a[n],
                    i = r.getAttribute("data-href");
                    if (i === e || i === o)
                        return r
                }
            }
              , n = n=>new Promise(((r,i)=>{
                var a = t.miniCssF(n)
                  , s = t.p + a;
                if (o(a, s))
                    return r();
                e(n, s, null, r, i)
            }
            ))
              , r = {
                524: 0
            };
            t.f.miniCss = (e,o)=>{
                var t = {
                    144: 1,
                    489: 1,
                    769: 1
                };
                r[e] ? o.push(r[e]) : 0 !== r[e] && t[e] && o.push(r[e] = n(e).then((()=>{
                    r[e] = 0
                }
                ), (o=>{
                    throw delete r[e],
                    o
                }
                )))
            }
        }
    }
    )(),
    (()=>{
        var e = {
            524: 0
        };
        t.f.j = (o,n)=>{
            var r = t.o(e, o) ? e[o] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else if (769 != o) {
                    var i = new Promise(((t,n)=>r = e[o] = [t, n]));
                    n.push(r[2] = i);
                    var a = t.p + t.u(o)
                      , s = new Error
                      , _ = n=>{
                        if (t.o(e, o) && (r = e[o],
                        0 !== r && (e[o] = void 0),
                        r)) {
                            var i = n && ("load" === n.type ? "missing" : n.type)
                              , a = n && n.target && n.target.src;
                            s.message = "Loading chunk " + o + " failed.\n(" + i + ": " + a + ")",
                            s.name = "ChunkLoadError",
                            s.type = i,
                            s.request = a,
                            r[1](s)
                        }
                    }
                    ;
                    t.l(a, _, "chunk-" + o, o)
                } else
                    e[o] = 0
        }
        ,
        t.O.j = o=>0 === e[o];
        var o = (o,n)=>{
            var r, i, [a,s,_] = n, E = 0;
            if (a.some((o=>0 !== e[o]))) {
                for (r in s)
                    t.o(s, r) && (t.m[r] = s[r]);
                if (_)
                    var l = _(t)
            }
            for (o && o(n); E < a.length; E++)
                i = a[E],
                t.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return t.O(l)
        }
          , n = globalThis["webpackChunkhtm_frontend_2023"] = globalThis["webpackChunkhtm_frontend_2023"] || [];
        n.forEach(o.bind(null, 0)),
        n.push = o.bind(null, n.push.bind(n))
    }
    )();
    var n = t.O(void 0, [121], (()=>t(21109)));
    n = t.O(n)
}
)();
