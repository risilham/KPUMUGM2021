(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    "3g23": function(e, a, t) {
        var n = t("q1tI");
        function i(e) {
            return n.createElement("svg", e, n.createElement("path", {
                d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
            }))
        }
        i.defaultProps = {
            viewBox: "0 0 512 512"
        },
        e.exports = i,
        i.default = i
    },
    "6S9V": function(e, a, t) {
        "use strict";
        t("q1tI");
        var n = t("vOnD")
          , i = t("JMMV")
          , o = t("qKvR")
          , r = Object(n.c)(i.a).withConfig({
            displayName: "window-styled-container__Panel",
            componentId: "sc-1lg44l9-0"
        })(["margin:100px auto;width:", ";height:", ";position:relative;display:flex;flex-direction:column;"], (function(e) {
            return e.width
        }
        ), (function(e) {
            return e.height
        }
        ))
          , l = n.c.div.withConfig({
            displayName: "window-styled-container__TitleBar",
            componentId: "sc-1lg44l9-1"
        })(["width:100%;height:1.8em;background-color:#424147;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;display:flex;align-items:center;position:absolute;top:0;left:0;"])
          , c = function() {
            var e = n.c.div.withConfig({
                displayName: "window-styled-container__CommandButton",
                componentId: "sc-1lg44l9-2"
            })(["width:0.5em;height:0.5em;border-radius:0.25em;background-color:#C4C4C4;margin-right:0.4em;transition:background-color 0.1s;"])
              , a = n.c.div.withConfig({
                displayName: "window-styled-container__Group",
                componentId: "sc-1lg44l9-3"
            })(["display:flex;margin-left:1.25em;&:hover{div:nth-child(1){background-color:var(--kpum-orange);}div:nth-child(2){background-color:var(--kpum-lightorange);}div:nth-child(3){background-color:var(--kpum-teal);}}"]);
            return Object(o.a)(a, null, Object(o.a)(e, null), Object(o.a)(e, null), Object(o.a)(e, null))
        }
          , d = n.c.div.withConfig({
            displayName: "window-styled-container__Content",
            componentId: "sc-1lg44l9-4"
        })(["margin-top:1.8em;"]);
        a.a = function(e) {
            var a = e.children
              , t = e.width
              , n = e.height
              , i = e.style
              , s = e.className
              , m = e.contentContainerStyle;
            return Object(o.a)(r, {
                width: t,
                height: n,
                style: i,
                className: s
            }, Object(o.a)(l, null, Object(o.a)(c, null)), Object(o.a)(d, {
                style: m
            }, a))
        }
    },
    "7NUp": function(e, a, t) {
        e.exports = t.p + "static/kpumTextRepeatedBackground-71dc0237392dbd85844ac7e437581bf5.svg"
    },
    FBNj: function(e, a, t) {
        "use strict";
        var n = t("vOnD").c.h1.withConfig({
            displayName: "outlined__OutlinedTitle",
            componentId: "sc-1yf5dzx-0"
        })(['text-transform:uppercase;color:white;position:relative;z-index:2;font-family:var(--qanelas-main);width:fit-content;&::before{content:"', '";content:"', '" / "";position:absolute;top:0;left:0;-webkit-text-stroke:0.1em var(--kpum-teal);text-shadow:0 5px 10px rgb(0 0 0 / 0.6);z-index:-1;}'], (function(e) {
            return e.children
        }
        ), (function(e) {
            return e.children
        }
        ));
        a.a = n
    },
    RXBc: function(e, a, t) {
        "use strict";
        t.r(a);
        var n = t("MUpH")
          , i = t("q1tI")
          , o = t("vOnD")
          , r = t("Wbzz")
          , l = t("xXon")
          , c = t("WQXR")
          , d = t("ltWS")
          , s = t("6S9V")
          , m = t("JMMV")
          , u = t("FBNj")
          , p = t("ytUt")
          , g = t("7NUp")
          , h = t.n(g)
          , b = t("3g23")
          , f = t.n(b)
          , w = t("e2fX")
          , k = t.n(w)
          , v = t("qKvR");
        function x() {
            var e = Object(n.a)(["\n    body {\n        background: linear-gradient(to bottom, var(--kpum-lightorange) -100%, var(--kpum-cream) 100%);\n    }\n\n    header ~ main > section {\n        padding-left: 1rem;\n        padding-right: 1rem;\n        /* Or set globally in main.css instead? */\n    }\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        var y = Object(o.a)(x())
          , j = Object(o.c)(c.a).withConfig({
            displayName: "pages__HeroSection",
            componentId: "sc-6kvjaa-0"
        })(["background:linear-gradient( transparent 0%,var(--kpum-lightorange) 25%,var(--kpum-lightorange) 75%,transparent 100% ) no-repeat,url(", ") repeat,var(--kpum-lightorange);background-size:auto calc(100vh - var(--total-height-occupied-by-header)),250px,auto;background-position:0 var(--total-height-occupied-by-header),0 0,0 0;box-shadow:0 0 20px rgb(0 0 0 / 0.25);@media (prefers-reduced-motion){background-attachment:scroll;}box-sizing:content-box;padding-bottom:2rem;border-bottom-left-radius:100% 4rem;border-bottom-right-radius:100% 4rem;@keyframes repeatingtextbackgroundloop{50%{background-position:0 0,250px calc(calc(calc(250px / 1108) * 146) / 2),0 0;}100%{background-position:0 0,500px calc(calc(250px / 1108) * 146),0 0;}}"], h.a)
          , O = Object(o.c)(u.a).withConfig({
            displayName: "pages__MainTitle",
            componentId: "sc-6kvjaa-1"
        })(["font-size:5em;margin:0 auto 0.2em auto;@media only screen and (max-width:768px){font-size:4em;}"])
          , _ = o.c.p.withConfig({
            displayName: "pages__SubTitle",
            componentId: "sc-6kvjaa-2"
        })(["display:block;color:white;font-family:var(--qanelas-main);font-size:1.5em;font-weight:bold;text-shadow:0 2px 10px rgb(0 0 0 / 0.5);margin:0 0 2em 0;@media only screen and (max-width:768px){font-size:1.25em;}"])
          , C = o.c.div.withConfig({
            displayName: "pages__QuickDptCheck",
            componentId: "sc-6kvjaa-3"
        })(["display:flex;align-items:center;width:fit-content;margin:0 auto;margin-bottom:2rem;color:white;font-size:0.95em;& > p{margin:0;margin-right:1em;font-size:1.1em;font-weight:bold;text-shadow:0 0.1em 0.15em rgb(0 0 0 / 0.4);}@media only screen and (max-width:768px){flex-direction:column;margin-bottom:3rem;& > p{margin-right:0;margin-bottom:0.5em;}}"])
          , I = Object(o.c)(m.a).attrs({
            as: "form"
        }).withConfig({
            displayName: "pages__DptInputWrapper",
            componentId: "sc-6kvjaa-4"
        })(["display:flex;width:fit-content;overflow:hidden;& > label{display:none;}& > input{border:none;&:first-of-type{border-top-left-radius:inherit;border-bottom-left-radius:inherit;}font-family:inherit;font-size:inherit;width:10em;padding:1em;appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;}&:focus{outline:none;box-shadow:inset 0 0 0.1em 0.1em var(--kpum-orange);}}& > button{border:none;background-color:transparent;display:block;font-size:inherit;padding:0.875em;cursor:pointer;color:var(--kpum-black);transition:background-color 0.1s,color 0.1s;svg{display:block;height:1.25em;width:auto;fill:currentColor;transition:fill 0.1s;}&:hover{background-color:var(--kpum-orange);color:white;}&:disabled{opacity:0.25;}}"])
          , N = o.c.div.withConfig({
            displayName: "pages__ButtonGroup",
            componentId: "sc-6kvjaa-5"
        })(["display:flex;align-items:center;width:fit-content;margin-left:auto;margin-right:auto;& > *:not(:last-child){margin-right:1em;}@media only screen and (max-width:768px){flex-direction:column;align-items:stretch;& > *:not(:last-child){margin-right:0;margin-bottom:1em;}}"])
          , z = o.c.section.withConfig({
            displayName: "pages__Tagline",
            componentId: "sc-6kvjaa-6"
        })(["font-size:4em;font-size:min(4rem,7vw);font-family:var(--sekogure-main);p{display:block;color:var(--kpum-black);text-shadow:0.1em 0.1em 0 var(--kpum-cream);width:fit-content;margin:5rem auto;text-align:left;text-indent:-2em;padding-left:2em;transform:rotate(-2deg);white-space:nowrap;}"])
          , P = o.c.section.withConfig({
            displayName: "pages__VideografisSection",
            componentId: "sc-6kvjaa-7"
        })(['padding:5rem 2rem;position:relative;&::before{content:"";display:block;width:100%;max-width:70rem;height:100%;position:absolute;top:0;left:0;right:0;margin:0 auto;z-index:-1;background-color:var(--kpum-lightorange);border-radius:50%;}'])
          , D = Object(o.c)(s.a).withConfig({
            displayName: "pages__VideografisWindow",
            componentId: "sc-6kvjaa-8"
        })(["width:fit-content;margin:0 auto;overflow:hidden;iframe{display:block;width:60rem;height:40rem;@media only screen and (max-width:640px){height:25rem;}@media only screen and (max-width:480px){height:15rem;}max-width:100%;border:none;margin:0;padding:0;}"])
          , M = Object(o.c)(s.a).withConfig({
            displayName: "pages__PenjelasanPemilwa",
            componentId: "sc-6kvjaa-9"
        })(["background:linear-gradient(var(--kpum-lightorange) 0%,var(--kpum-orange) 200%);max-width:75ch;color:white;padding:2rem 2.5rem;h1{font-family:var(--qanelas-main);font-size:2em;text-shadow:0 0.06em 0.2em rgb(0 0 0 / 0.5);margin:0 0 0.5em 0;}p{font-weight:500;margin:0;}"])
          , U = function(e) {
            var a = e.date
              , t = e.month
              , n = e.children
              , i = e.smallText
              , r = o.c.div.withConfig({
                displayName: "pages__ItemsContainer",
                componentId: "sc-6kvjaa-10"
            })(["text-align:center;width:12em;margin:0 1em;"])
              , l = o.c.h1.withConfig({
                displayName: "pages__Tanggal",
                componentId: "sc-6kvjaa-11"
            })(["font-size:1.5em;color:white;-webkit-text-stroke:0.05em var(--kpum-darkteal);text-shadow:0 2px 5px rgb(0 0 0 / 0.25);&::first-line{font-size:2em;-webkit-text-stroke:0.05em var(--kpum-darkteal);}"])
              , c = Object(o.c)(m.a).attrs({
                as: "p"
            }).withConfig({
                displayName: "pages__Acara",
                componentId: "sc-6kvjaa-12"
            })(["display:flex;align-items:center;height:10rem;background:linear-gradient(to right bottom,var(--kpum-teal),var(--kpum-darkteal));color:white;font-size:1.2em;", " font-weight:bold;font-style:italic;justify-content:center;border-radius:1rem;border-top-left-radius:5rem 1rem;border-top-right-radius:5rem 1rem;"], i > 20 ? "font-size: 1em" : null);
            return Object(v.a)(r, null, Object(v.a)(l, null, a, Object(v.a)("br", null), t), Object(v.a)(c, null, n))
        };
        a.default = function() {
            var e = {
                niuInput: Object(i.useRef)(null),
                fakultasSelection: Object(i.useRef)(null)
            };
            return Object(v.a)(l.a, {
                title: "Beranda"
            }, Object(v.a)(y, null), Object(v.a)(j, null, Object(v.a)("div", {
                style: {
                    margin: "0 auto",
                    textAlign: "center"
                }
            }, Object(v.a)(O, null, "Pemilwa UGM 2020"), Object(v.a)(_, null, "Pemilihan Umum Mahasiswa Universitas Gadjah Mada"), Object(v.a)(C, null, Object(v.a)("p", null, "Cek status DPT:"), Object(v.a)(I, {
                onSubmit: function(a) {
                    a.preventDefault(),
                    Object(r.navigate)("/cek-dpt", {
                        state: {
                            preenteredNiuValue: e.niuInput.current.value
                        }
                    })
                }
            }, Object(v.a)("label", {
                htmlFor: "NIU"
            }, "Nomor Induk Universitas"), Object(v.a)("input", {
                type: "number",
                name: "NIU",
                placeholder: "NIU (6 digit)",
                tabIndex: "1",
                min: "100000",
                max: "999999",
                ref: e.niuInput
            }), Object(v.a)("button", {
                title: "Cek"
            }, Object(v.a)(f.a, null)))), Object(v.a)(N, null, Object(v.a)(d.a, {
                to: "/capresma"
            }, "Lihat Daftar Capresma"), Object(v.a)(d.a, {
                to: "/parma"
            }, "Lihat Daftar Partai Mahasiswa"), Object(v.a)(d.a, {
                to: "/produk-hukum"
            }, "Unduh Produk Hukum")))), Object(v.a)(z, null, Object(v.a)("p", null, "“Suarakan Aspirasi,", Object(v.a)("br", null), "Rayakan Demokrasi!”")), Object(v.a)("section", null, Object(v.a)(M, null, Object(v.a)("h1", null, "Pemilwa itu apa, ", Object(v.a)("i", null, "sih?")), Object(v.a)("p", null, "Pemilwa adalah kegiatan pemilihan presiden mahasiswa BEM KM UGM dan Dewan Perwakilan Mahasiswa Unsur Partai (DPM-UP) sebagai wujud demokrasi di kampus Universitas Gadjah Mada."))), Object(v.a)(P, null, Object(v.a)(D, null, Object(v.a)("iframe", {
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/mfnZEsavEjw",
                frameborder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: "allowfullscreen"
            }))), Object(v.a)("section", {
                style: {
                    margin: "5rem 0"
                }
            }, Object(v.a)(p.a, null, "Timeline"), Object(v.a)("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }
            }, k.a.map((function(e) {
                return e.agenda.map((function(a) {
                    return Object(v.a)(U, {
                        date: a.tanggal,
                        month: e.bulan,
                        smallText: a.acara.length > 20
                    }, a.acara)
                }
                ))
            }
            )))))
        }
    },
    WQXR: function(e, a, t) {
        "use strict";
        var n = t("vOnD").c.section.withConfig({
            displayName: "full-height-hero-section__FullHeight",
            componentId: "sc-1jxnuv1-0"
        })(["min-height:calc(100vh - var(--total-height-occupied-by-header));margin-top:calc(-1 * var(--total-height-occupied-by-header));padding-top:var(--total-height-occupied-by-header);display:flex;flex-direction:column;justify-content:center;"]);
        a.a = n
    },
    e2fX: function(e, a) {
        e.exports = [{
            bulan: "September",
            agenda: [{
                tanggal: "16-27",
                acara: "Pendaftaran, Verifikasi, Pengumuman Capresma &  DPUM-UP Lolos Berkas"
            }]
        }, {
            bulan: "Oktober",
            agenda: [{
                tanggal: 3,
                acara: "Deklarasi Damai"
            }, {
                tanggal: "5-15",
                acara: "Tour de Faculty Jilid 1"
            }, {
                tanggal: 10,
                acara: "Debat Capresma 1"
            }]
        }, {
            bulan: "November",
            agenda: [{
                tanggal: "1-13",
                acara: "Tour de Faculty Jilid 2"
            }, {
                tanggal: 7,
                acara: "Debat Capresma 2"
            }, {
                tanggal: "14-15",
                acara: "Masa Tenang"
            }, {
                tanggal: "16-18",
                acara: "Pemilwa"
            }, {
                tanggal: 19,
                acara: "Penghitungan"
            }, {
                tanggal: 21,
                acara: "Rapat Pleno Terbuka"
            }]
        }]
    },
    ghVa: function(e, a, t) {
        var n = t("q1tI");
        function i(e) {
            return n.createElement("svg", e, n.createElement("path", {
                d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            }))
        }
        i.defaultProps = {
            viewBox: "0 0 512 512"
        },
        e.exports = i,
        i.default = i
    },
    ltWS: function(e, a, t) {
        "use strict";
        var n = t("wx14")
          , i = (t("q1tI"),
        t("Wbzz"))
          , o = t("vOnD")
          , r = t("ghVa")
          , l = t.n(r)
          , c = (t("3g23"),
        t("qKvR"))
          , d = Object(o.c)(i.Link).withConfig({
            displayName: "link-button__StyledLink",
            componentId: "sc-1v5o2pi-0"
        })(["display:inline-block;background-color:white;border:0.25em solid var(--kpum-orange);border-radius:0.5rem;padding:0.5em 1em;font-weight:bold;color:var(--kpum-orange);text-decoration:none;box-shadow:0 3px 5px rgb(0 0 0 / 0.25);transition:background-color 0.1s,color 0.1s,box-shadow 0.3s,transform 0.1s;&:focus{outline:none;}&:hover{background-color:var(--kpum-orange);color:white;box-shadow:0 5px 8px rgb(0 0 0 / 0.5);}&:active{transform:translateY(0.1em);}", " svg{display:inline-block;}"], (function(e) {
            return "horizontal" == e.spaced ? "\n        &:not(:last-child) {\n            margin-right: 1em;\n        }\n    " : null
        }
        ));
        a.a = function(e) {
            var a = e.children
              , t = e.to
              , i = e.external
              , o = e.className
              , r = e.style
              , s = e.spaced
              , m = e.icon
              , u = e.onClick
              , p = e.as;
            return Object(c.a)(d, Object(n.a)({}, i ? {
                as: "a",
                href: t,
                onClick: u
            } : {
                to: t
            }, {
                className: o,
                style: r,
                spaced: s,
                as: p
            }), "download" == m ? Object(c.a)(l.a, null) : null, a)
        }
    },
    ytUt: function(e, a, t) {
        "use strict";
        t("q1tI");
        var n = t("vOnD")
          , i = t("qKvR")
          , o = n.c.div.withConfig({
            displayName: "gradient-with-pill__Pill",
            componentId: "sc-15cjzxe-0"
        })(["padding:1em 2.5em;background-color:rgb(255 255 255 / 0.4);border-radius:999px;width:fit-content;margin:2em auto;h1{margin:0;font-size:3em;text-transform:uppercase;font-weight:bold;color:var(--kpum-orange);@supports (-webkit-background-clip:text){background:linear-gradient(45deg,var(--kpum-orange),var(--kpum-lightorange));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}position:relative;z-index:1;}"]);
        a.a = function(e) {
            var a = e.children
              , t = e.style
              , n = e.className;
            return Object(i.a)(o, {
                style: t,
                className: n
            }, Object(i.a)("h1", null, a))
        }
    }
}]);
//# sourceMappingURL=component---src-pages-index-js-63ead95a359b4e4aefa0.js.map
