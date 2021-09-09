(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    "/Chu": function(e, n, t) {
        e.exports = t.p + "static/PKB-83442d2598f8655bf937f69ad6ab4552.png"
    },
    "3Vgj": function(e, n, t) {
        e.exports = t.p + "static/PSM-cbf98361973f60c3e0efc67ae9c8bd20.png"
    },
    "3g23": function(e, n, t) {
        var a = t("q1tI");
        function o(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
            }))
        }
        o.defaultProps = {
            viewBox: "0 0 512 512"
        },
        e.exports = o,
        o.default = o
    },
    "6S9V": function(e, n, t) {
        "use strict";
        t("q1tI");
        var a = t("vOnD")
          , o = t("JMMV")
          , i = t("qKvR")
          , r = Object(a.c)(o.a).withConfig({
            displayName: "window-styled-container__Panel",
            componentId: "sc-1lg44l9-0"
        })(["margin:100px auto;width:", ";height:", ";position:relative;display:flex;flex-direction:column;"], (function(e) {
            return e.width
        }
        ), (function(e) {
            return e.height
        }
        ))
          , c = a.c.div.withConfig({
            displayName: "window-styled-container__TitleBar",
            componentId: "sc-1lg44l9-1"
        })(["width:100%;height:1.8em;background-color:#424147;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;display:flex;align-items:center;position:absolute;top:0;left:0;"])
          , l = function() {
            var e = a.c.div.withConfig({
                displayName: "window-styled-container__CommandButton",
                componentId: "sc-1lg44l9-2"
            })(["width:0.5em;height:0.5em;border-radius:0.25em;background-color:#C4C4C4;margin-right:0.4em;transition:background-color 0.1s;"])
              , n = a.c.div.withConfig({
                displayName: "window-styled-container__Group",
                componentId: "sc-1lg44l9-3"
            })(["display:flex;margin-left:1.25em;&:hover{div:nth-child(1){background-color:var(--kpum-orange);}div:nth-child(2){background-color:var(--kpum-lightorange);}div:nth-child(3){background-color:var(--kpum-teal);}}"]);
            return Object(i.a)(n, null, Object(i.a)(e, null), Object(i.a)(e, null), Object(i.a)(e, null))
        }
          , u = a.c.div.withConfig({
            displayName: "window-styled-container__Content",
            componentId: "sc-1lg44l9-4"
        })(["margin-top:1.8em;"]);
        n.a = function(e) {
            var n = e.children
              , t = e.width
              , a = e.height
              , o = e.style
              , d = e.className
              , m = e.contentContainerStyle;
            return Object(i.a)(r, {
                width: t,
                height: a,
                style: o,
                className: d
            }, Object(i.a)(c, null, Object(i.a)(l, null)), Object(i.a)(u, {
                style: m
            }, n))
        }
    },
    CNOe: function(e, n, t) {
        "use strict";
        t("q1tI");
        var a = t("vOnD")
          , o = t("JMMV")
          , i = t("ceBb")
          , r = t("qKvR")
          , c = Object(a.c)(o.a).withConfig({
            displayName: "partai-logo__PartaiCircle",
            componentId: "sc-1d42fgu-0"
        })(["width:2.5em;height:2.5em;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:0.25em;box-sizing:border-box;img{width:100%;}"]);
        n.a = function(e) {
            var n = e.nama
              , a = e.className;
            return Object(r.a)(c, {
                className: a
            }, Object(r.a)("img", {
                src: t("MjOK")("./" + n + ".png"),
                alt: i[n],
                title: i[n]
            }))
        }
    },
    FBNj: function(e, n, t) {
        "use strict";
        var a = t("vOnD").c.h1.withConfig({
            displayName: "outlined__OutlinedTitle",
            componentId: "sc-1yf5dzx-0"
        })(['text-transform:uppercase;color:white;position:relative;z-index:2;font-family:var(--qanelas-main);width:fit-content;&::before{content:"', '";content:"', '" / "";position:absolute;top:0;left:0;-webkit-text-stroke:0.1em var(--kpum-teal);text-shadow:0 5px 10px rgb(0 0 0 / 0.6);z-index:-1;}'], (function(e) {
            return e.children
        }
        ), (function(e) {
            return e.children
        }
        ));
        n.a = a
    },
    MjOK: function(e, n, t) {
        var a = {
            "./Bunderan.png": "gVIW",
            "./FLP.png": "Y64I",
            "./PGR.png": "Wf0g",
            "./PKB.png": "/Chu",
            "./PSM.png": "3Vgj",
            "./Srikandi.png": "o2hM"
        };
        function o(e) {
            var n = i(e);
            return t(n)
        }
        function i(e) {
            if (!t.o(a, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND",
                n
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = i,
        e.exports = o,
        o.id = "MjOK"
    },
    PLy9: function(e, n, t) {
        var a = t("q1tI");
        function o(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            }))
        }
        o.defaultProps = {
            viewBox: "0 0 352 512"
        },
        e.exports = o,
        o.default = o
    },
    UPDh: function(e, n, t) {
        "use strict";
        t("q1tI");
        var a = t("vOnD")
          , o = t("6S9V")
          , i = t("qKvR")
          , r = Object(a.c)(o.a).withConfig({
            displayName: "list-window__Window",
            componentId: "vljj1l-0"
        })(["padding:2.5em;margin:0 auto;margin-bottom:2.5rem;max-width:650px;color:var(--kpum-black);"])
          , c = a.c.div.withConfig({
            displayName: "list-window__ListItemWrapper",
            componentId: "vljj1l-1"
        })(["max-width:60ch;margin:0 auto;"])
          , l = a.c.h1.withConfig({
            displayName: "list-window__Title",
            componentId: "vljj1l-2"
        })(["font-family:var(--qanelas-main);font-size:2.5em;font-weight:400;margin:0;"])
          , u = a.c.ol.withConfig({
            displayName: "list-window__ItemGroup",
            componentId: "vljj1l-3"
        })(["margin:0;padding:0;counter-reset:nomor;"])
          , d = a.c.li.withConfig({
            displayName: "list-window__Item",
            componentId: "vljj1l-4"
        })(["list-style:none;counter-increment:nomor;display:flex;align-items:flex-start;line-height:", ";margin-top:calc(", " + 1em);font-weight:500;&::before{display:flex;align-items:center;justify-content:center;content:counter(nomor);font-weight:bold;width:", ";height:", ";border-radius:50%;margin-top:calc(-1 * ", ");margin-right:0.5em;flex-shrink:0;color:white;background-color:var(--kpum-black);", '}position:relative;&:not(:last-child)::after{content:"";display:block;width:100%;height:1px;background-color:currentColor;opacity:0.2;position:absolute;left:0;bottom:-0.5em;}'], 1.25, "calc(calc(2em - 1.25em) / 2)", "2em", "2em", "calc(calc(2em - 1.25em) / 2)", (function(e) {
            return e.markerCSS
        }
        ));
        n.a = function(e) {
            var n = e.style
              , t = e.titleStyle
              , a = e.markerCSS
              , o = e.className
              , m = e.title
              , s = e.contents;
            return Object(i.a)(r, {
                style: n,
                className: o
            }, Object(i.a)(c, null, Object(i.a)(l, {
                style: t
            }, m), Object(i.a)(u, null, s.map((function(e) {
                return Object(i.a)(d, {
                    markerCSS: a
                }, e)
            }
            )))))
        }
    },
    WQXR: function(e, n, t) {
        "use strict";
        var a = t("vOnD").c.section.withConfig({
            displayName: "full-height-hero-section__FullHeight",
            componentId: "sc-1jxnuv1-0"
        })(["min-height:calc(100vh - var(--total-height-occupied-by-header));margin-top:calc(-1 * var(--total-height-occupied-by-header));padding-top:var(--total-height-occupied-by-header);display:flex;flex-direction:column;justify-content:center;"]);
        n.a = a
    },
    Wf0g: function(e, n, t) {
        e.exports = t.p + "static/PGR-cd1145428724264dc4cd146df5baa745.png"
    },
    Y64I: function(e, n, t) {
        e.exports = t.p + "static/FLP-fdbe043f47d44f44e61896881fb3cb0b.png"
    },
    Zcb1: function(e, n, t) {
        "use strict";
        t("q1tI");
        var a = t("vOnD")
          , o = t("JMMV")
          , i = (t("PLy9"),
        t("qKvR"))
          , r = Object(a.c)(o.a).withConfig({
            displayName: "modal-window__Panel",
            componentId: "sc-7hfo8g-0"
        })(["margin:100px auto;width:", ";height:", ";position:relative;display:flex;flex-direction:column;"], (function(e) {
            return e.width
        }
        ), (function(e) {
            return e.height
        }
        ))
          , c = a.c.div.withConfig({
            displayName: "modal-window__TitleBar",
            componentId: "sc-7hfo8g-1"
        })(["width:100%;margin-bottom:1rem;height:2.5em;background-color:#424147;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;display:flex;align-items:center;position:absolute;top:0;left:0;"])
          , l = function() {
            var e = a.c.div.withConfig({
                displayName: "modal-window__CommandButton",
                componentId: "sc-7hfo8g-2"
            })(["width:1.5em;height:1.5em;border-radius:0.75em;background-color:#C4C4C4;margin-right:0.4em;transition:background-color 0.1s;"])
              , n = a.c.div.withConfig({
                displayName: "modal-window__Group",
                componentId: "sc-7hfo8g-3"
            })(["display:flex;margin-left:1.25em;&:hover{div:nth-child(1){background-color:var(--kpum-orange);}}"]);
            return Object(i.a)(n, null, Object(i.a)(e, null))
        }
          , u = a.c.div.withConfig({
            displayName: "modal-window__Content",
            componentId: "sc-7hfo8g-4"
        })(["margin-top:1.8em;"])
          , d = a.c.div.withConfig({
            displayName: "modal-window__Backdrop",
            componentId: "sc-7hfo8g-5"
        })(["width:100vw;height:100vh;position:fixed;top:0;left:0;max-width:100%;z-index:9999;background-color:rgb(0 0 0 / 0.5);display:flex;flex-direction:column;align-items:center;justify-content:center;@media only screen and (max-width:768px){align-items:stretch;}&:not(.shown){display:none;}animation:modal-backdrop-fade 0.25s;@keyframes modal-backdrop-fade{from{background-color:rgb(0 0 0 / 0);}}"])
          , m = Object(a.c)(r).withConfig({
            displayName: "modal-window__Container",
            componentId: "sc-7hfo8g-6"
        })(["padding:1rem;margin:1rem;max-width:100%;max-height:100%;animation:modal-container-appear 0.25s cubic-bezier(0,2,1,1);@keyframes modal-container-appear{from{transform:scale(0.6) translateY(-25%);opacity:0;}}"])
          , s = a.c.button.withConfig({
            displayName: "modal-window__CloseButton",
            componentId: "sc-7hfo8g-7"
        })(["background-color:transparent;border:none;padding:0;margin:0;cursor:pointer;text-decoration:underline;display:flex;justify-content:center;align-items:center;font-family:inherit;font-size:1em;font-weight:500;color:var(--kpum-black);transition:color 0.1s;&:hover{color:var(--kpum-orange);span{color:var(--kpum-orange);}}svg{height:1.5em;width:auto;fill:currentColor;margin-right:0.5em;}span{color:white;}svg,span{display:block;}"]);
        n.a = function(e) {
            var n = e.children
              , t = e.show
              , a = e.handleClose;
            return Object(i.a)(d, {
                className: t && "shown"
            }, Object(i.a)(m, {
                role: "dialog"
            }, Object(i.a)(c, null, Object(i.a)(s, {
                onClick: a
            }, Object(i.a)(l, null), Object(i.a)("span", null, "Tutup"))), Object(i.a)(u, null, n)))
        }
    },
    bPrE: function(e, n, t) {
        "use strict";
        t("q1tI");
        var a = t("vOnD")
          , o = t("JMMV")
          , i = t("PLy9")
          , r = t.n(i)
          , c = t("qKvR")
          , l = a.c.div.withConfig({
            displayName: "modal__Backdrop",
            componentId: "jnfyg0-0"
        })(["width:100vw;height:100vh;position:fixed;top:0;left:0;max-width:100%;z-index:9999;background-color:rgb(0 0 0 / 0.5);display:flex;flex-direction:column;align-items:center;justify-content:center;@media only screen and (max-width:768px){align-items:stretch;}&:not(.shown){display:none;}animation:modal-backdrop-fade 0.25s;@keyframes modal-backdrop-fade{from{background-color:rgb(0 0 0 / 0);}}"])
          , u = Object(a.c)(o.a).withConfig({
            displayName: "modal__Container",
            componentId: "jnfyg0-1"
        })(["padding:1rem;margin:1rem;max-width:100%;max-height:100%;animation:modal-container-appear 0.25s cubic-bezier(0,2,1,1);@keyframes modal-container-appear{from{transform:scale(0.8);opacity:0;}}"])
          , d = a.c.button.withConfig({
            displayName: "modal__CloseButton",
            componentId: "jnfyg0-2"
        })(["background-color:transparent;border:none;padding:0;margin:0;cursor:pointer;text-decoration:underline;display:flex;align-items:center;font-family:inherit;font-size:1em;font-weight:500;color:var(--kpum-black);transition:color 0.1s;margin-bottom:1rem;&:hover{color:var(--kpum-orange);}svg{height:1.5em;width:auto;fill:currentColor;margin-right:0.5em;}svg,span{display:block;}"]);
        n.a = function(e) {
            var n = e.children
              , t = e.show
              , a = e.handleClose;
            return Object(c.a)(l, {
                className: t && "shown"
            }, Object(c.a)(u, {
                role: "dialog"
            }, Object(c.a)(d, {
                onClick: a
            }, Object(c.a)(r.a, null), Object(c.a)("span", null, "Tutup")), Object(c.a)("div", null, n)))
        }
    },
    ceBb: function(e) {
        e.exports = JSON.parse('{"Bunderan":"Partai Bunderan","FLP":"Future Leaders Party","PGR":"Partai Gotong Royong","PKB":"Partai Kampus Biru","PSM":"Partai Sayang Mama","Srikandi":"Partai Srikandi"}')
    },
    dN1p: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("MUpH")
          , o = t("q1tI")
          , i = t("vOnD")
          , r = t("xXon")
          , c = (t("WQXR"),
        t("6S9V"))
          , l = (t("CNOe"),
        t("UPDh"),
        t("ztVc"))
          , u = t("ltWS")
          , d = (t("FBNj"),
        t("bPrE"),
        t("Zcb1"))
          , m = t("JMMV")
          , s = t("qKvR");
        function p() {
            var e = Object(a.a)(["\n    body {\n        background-color: var(--kpum-cream);\n        /* Or use fading gradient? */\n        /* background: linear-gradient(to bottom, var(--kpum-lightorange), var(--kpum-cream)); */\n    }\n\n    /* Add/insert some [style/CSS] resets here (e.g. for ul and li elements) */\n"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        var h = Object(i.a)(p())
          , g = (i.c.div.withConfig({
            displayName: "produk-hukum__GlobalContainer",
            componentId: "sc-2wof45-0"
        })(["display:flex;flex-direction:column;align-items:center;padding:2rem;@media only screen and (max-width:768px){padding:1rem;}"]),
        [{
            judul: "Keputusan KPUM Nomor 1 Tahun 2020",
            keterangan: "Penetapan Komite Pelaksana Komisi Pemilihan Umum Mahasiswa",
            produkHukumId: "1QxBomzzhLQVt2G7pK0ifAQ5bHcJ4dRza"
        }, {
            judul: "Keputusan KPUM Nomor 2 Tahun 2020",
            keterangan: "Penetapan Staf Komisi Pemilihan Umum Mahasiswa",
            produkHukumId: "1n0ztd4x3S_JnBWPMcW0XF7akHkcAgu3x"
        }, {
            judul: "Keputusan KPUM Nomor 3 Tahun 2020",
            keterangan: "Kegiatan KPUM",
            produkHukumId: "1_fdROjMTNdLnK5wQ32Ox1l0vDeA5j7SO"
        }, {
            judul: "Keputusan KPUM Nomor 4 Tahun 2020",
            keterangan: "Penetapan Peserta Pemilihan Umum Mahasiswa",
            produkHukumId: "1ZbPe-HxP_AG5_lZKKL1YuRRhVZ67PaGn"
        }, {
            judul: "Keputusan KPUM Nomor 5 Tahun 2020",
            keterangan: "Penetapan Daftar Pemilih Tetap (DPT) Pemilihan Umum Mahasiswa Tahun 2020",
            produkHukumId: "1iwdaMueSWyZ7NtV67gzfEJTW8C6VqooU"
        }])
          , f = [{
            judul: "Peraturan KPUM Nomor 1 Tahun 2020",
            keterangan: "Tim Kerja Komisi Pemilihan Umum Mahasiswa",
            produkHukumId: "1P-su7SSpNz-5bCX3JaQ9WYZY7D_tyQXm"
        }, {
            judul: "Peraturan KPUM Nomor 2 Tahun 2020",
            keterangan: "Kode Etik Tim Kerja Komisi Pemilihan Umum Mahasiswa",
            produkHukumId: "1q8PKSnzjFC-Nanka0UzjJcRjUYkXYNmT"
        }, {
            judul: "Peraturan KPUM Nomor 3 Tahun 2020",
            keterangan: "Teknis Pendaftaran Partai Mahasiswa",
            produkHukumId: "1qCvQR-l5hLMJikaEKJLwx-jDsg_RK08M"
        }, {
            judul: "Peraturan KPUM Nomor 4 Tahun 2020",
            keterangan: "Teknis Pendaftaran Bakal Calon Presiden Mahasiswa dan Bakal Calon Dewan Perwakilan Mahasiswa Unsur Partai",
            produkHukumId: "1kGk36Qxu9Gslb8lLevof3ZC9_budOGIa"
        }, {
            judul: "Peraturan KPUM Nomor 5 Tahun 2020",
            keterangan: "Teknis Pelaksanaan Kampanye Pemilihan Umum Mahasiswa",
            produkHukumId: "1V-Wvec4ndDDO2ezYsQeyyjelqk-701H5"
        }, {
            judul: "Peraturan KPUM Nomor 6 Tahun 2020",
            keterangan: "Penyusunan Daftar Pemilih dalam Pemilihan Umum Mahasiswa",
            produkHukumId: "1_WuuZVCl5CU03eiKLyOlqvgH22d6T6XE"
        }, {
            judul: "Peraturan KPUM Nomor 7 Tahun 2020",
            keterangan: "Pelaksanaan Pemungutan, Penghitungan Suara, dan Penetapan Hasil Pemilihan Umum Mahasiswa",
            produkHukumId: "1bxX_S3drH6oK7KdUiAOkXZNiisa7mOHe"
        }]
          , k = i.c.div.withConfig({
            displayName: "produk-hukum__ModalContent",
            componentId: "sc-2wof45-1"
        })(["h1{font-size:1.75em;font-family:var(--qanelas-main);font-weight:700;width:fit-content;margin:0 auto 0.25em auto;}p{font-family:var(--qanelas-main);font-weight:300;font-size:1.25em;width:fit-content;margin:0 auto 1em auto;}iframe{display:block;margin:0 auto;height:60vh;width:60vw;@media only screen and (max-width:768px){width:100%;}}"])
          , b = i.c.section.withConfig({
            displayName: "produk-hukum__ListHukumSection",
            componentId: "sc-2wof45-2"
        })(["padding:0 1rem;"])
          , w = i.c.ul.withConfig({
            displayName: "produk-hukum__Group",
            componentId: "sc-2wof45-3"
        })(["margin:0;padding:0;counter-reset:hukum-count;"])
          , v = (Object(i.c)(c.a).withConfig({
            displayName: "produk-hukum__CustomWindow",
            componentId: "sc-2wof45-4"
        })(["padding:2.5em;margin:0 auto;margin-bottom:2.5rem;max-width:650px;counter-increment:hukum-count;color:var(--kpum-black);"]),
        Object(i.c)(m.a).attrs({
            as: "li"
        }).withConfig({
            displayName: "produk-hukum__CustomCard",
            componentId: "sc-2wof45-5"
        })(["display:flex;flex-direction:column;list-style:none;background-color:rgb(255 255 255 / 0.8);backdrop-filter:blur(20px);box-shadow:0 2px 5px rgb(0 0 0 / 0.25);max-width:500px;margin:0 auto;padding:1.5em;counter-increment:hukum-count;transition:all 0.4s cubic-bezier(0.175,0.885,0.32,1.275);&:hover{transform:translateY(-5px);box-shadow:0 6px 8px rgb(0 0 0 / 0.25);background-color:rgb(255 255 255 / 1.0);}&:not(:last-child){margin-bottom:1em;}"]))
          , y = i.c.div.withConfig({
            displayName: "produk-hukum__Number",
            componentId: "sc-2wof45-6"
        })(["display:block;min-width:1.5ch;text-align:right;margin-right:0.6em;font-size:3em;font-style:italic;font-weight:600;line-height:1;&::after{content:counter(hukum-count);}flex-shrink:0;"])
          , j = i.c.h2.withConfig({
            displayName: "produk-hukum__Name",
            componentId: "sc-2wof45-7"
        })(["margin:0;padding:0;font-size:1em;font-weight:bold;"])
          , x = i.c.p.withConfig({
            displayName: "produk-hukum__Description",
            componentId: "sc-2wof45-8"
        })(["margin:0.25em 0 0 0;"])
          , O = i.c.div.withConfig({
            displayName: "produk-hukum__CustomContainer",
            componentId: "sc-2wof45-9"
        })(["display:flex;"])
          , C = function(e) {
            var n = e.title
              , t = e.description;
            e.hukumURL;
            return Object(s.a)(O, null, Object(s.a)(y, null), Object(s.a)("div", null, Object(s.a)(j, null, n), Object(s.a)(x, null, t)))
        }
          , _ = Object(i.c)(u.a).withConfig({
            displayName: "produk-hukum__HukumButton",
            componentId: "sc-2wof45-10"
        })(["margin:1em 0 0 0;align-self:flex-end;text-align:center;max-width:100px;"])
          , P = i.c.a.withConfig({
            displayName: "produk-hukum__ButtonContainer",
            componentId: "sc-2wof45-11"
        })(["align-self:flex-end;"])
          , N = Object(i.c)(u.a).withConfig({
            displayName: "produk-hukum__UnduhButton",
            componentId: "sc-2wof45-12"
        })(["margin:1em 0 0 0;align-self:center;text-align:center;max-width:100px;"])
          , I = i.c.div.withConfig({
            displayName: "produk-hukum__ModalHukumButtonContainer",
            componentId: "sc-2wof45-13"
        })(["display:flex;flex-direction:column;"])
          , K = function(e) {
            var n = e.contents
              , t = Object(o.useState)(!1)
              , a = t[0]
              , i = t[1]
              , r = Object(o.useState)({
                judul: null,
                keterangan: null,
                produkHukumId: null,
                iframeSrcUrl: null
            })
              , c = r[0]
              , l = r[1];
            var u, m = function(e) {
                var n = e.item;
                return Object(s.a)(v, null, Object(s.a)(C, {
                    title: n.judul,
                    description: n.keterangan,
                    hukumURL: n.url
                }), Object(s.a)(P, {
                    href: "#0",
                    title: "Klik untuk melihat Produk Hukum",
                    onClick: function(e) {
                        !function(e, n) {
                            e.preventDefault(),
                            l({
                                judul: n.judul,
                                keterangan: n.keterangan,
                                iframeSrcUrl: "https://drive.google.com/file/d/" + n.produkHukumId + "/preview",
                                produkHukumId: n.produkHukumId
                            }),
                            i(!0)
                        }(e, n)
                    }
                }, Object(s.a)("div", null, Object(s.a)(_, null, "Selengkapnya"))))
            };
            return Object(s.a)(b, null, Object(s.a)(w, null, n.map((function(e) {
                return Object(s.a)(m, {
                    item: e
                })
            }
            ))), Object(s.a)(d.a, {
                show: a,
                handleClose: function() {
                    return i(!1)
                }
            }, Object(s.a)(k, null, Object(s.a)("h1", null, c.judul), Object(s.a)("p", null, c.keterangan), Object(s.a)("iframe", {
                src: c.iframeSrcUrl
            }), Object(s.a)(I, null, Object(s.a)(N, {
                external: !0,
                to: (u = c.produkHukumId,
                "https://drive.google.com/u/1/uc?id=" + u + "&export=download")
            }, "Unduh")))))
        }
          , M = i.c.h1.withConfig({
            displayName: "produk-hukum__GlitchyTitleAtas",
            componentId: "sc-2wof45-14"
        })(["font-size:3em;text-transform:uppercase;font-family:var(--qanelas-main);font-weight:bold;color:white;-webkit-text-stroke:1px var(--kpum-black);text-shadow:0.075em 0.075em 0 var(--kpum-orange),-0.075em -0.075em 0 var(--kpum-teal);margin:1em auto 0.5em auto;width:fit-content;text-align:center;"])
          , U = i.c.section.withConfig({
            displayName: "produk-hukum__KeputusanKPUMSection",
            componentId: "sc-2wof45-15"
        })(["padding:2rem 2rem;background-color:var(--kpum-lightorange);position:relative;"])
          , S = function(e) {
            var n = e.contentKeputusan
              , t = void 0 === n ? g : n;
            return Object(s.a)(U, {
                style: {
                    padding: "2rem 2rem"
                }
            }, Object(s.a)(M, null, "Keputusan Komisi Pemilihan Umum Mahasiswa"), Object(s.a)(K, {
                contents: t
            }))
        }
          , z = i.c.section.withConfig({
            displayName: "produk-hukum__PeraturanKPUMSection",
            componentId: "sc-2wof45-16"
        })(["padding:2rem 2rem;background-color:var(--kpum-cream);position:relative;"])
          , H = Object(i.c)(l.a).withConfig({
            displayName: "produk-hukum__CustomGlitchyTitle",
            componentId: "sc-2wof45-17"
        })(["font-size:3em;text-shadow:0.075em 0.075em 0 var(--kpum-lightorange),-0.075em -0.075em 0 var(--kpum-teal);"])
          , T = function(e) {
            var n = e.contentPeraturan
              , t = void 0 === n ? f : n;
            return Object(s.a)(z, null, Object(s.a)(H, null, "Peraturan Komisi Pemilihan Umum Mahasiswa"), Object(s.a)(K, {
                contents: t
            }))
        };
        n.default = function() {
            return Object(s.a)(r.a, {
                title: "Produk Hukum KPUM"
            }, Object(s.a)(h, null), Object(s.a)(S, null), Object(s.a)(T, null))
        }
    },
    gVIW: function(e, n, t) {
        e.exports = t.p + "static/Bunderan-9a30280473837e3936d161e68950127d.png"
    },
    ghVa: function(e, n, t) {
        var a = t("q1tI");
        function o(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            }))
        }
        o.defaultProps = {
            viewBox: "0 0 512 512"
        },
        e.exports = o,
        o.default = o
    },
    ltWS: function(e, n, t) {
        "use strict";
        var a = t("wx14")
          , o = (t("q1tI"),
        t("Wbzz"))
          , i = t("vOnD")
          , r = t("ghVa")
          , c = t.n(r)
          , l = (t("3g23"),
        t("qKvR"))
          , u = Object(i.c)(o.Link).withConfig({
            displayName: "link-button__StyledLink",
            componentId: "sc-1v5o2pi-0"
        })(["display:inline-block;background-color:white;border:0.25em solid var(--kpum-orange);border-radius:0.5rem;padding:0.5em 1em;font-weight:bold;color:var(--kpum-orange);text-decoration:none;box-shadow:0 3px 5px rgb(0 0 0 / 0.25);transition:background-color 0.1s,color 0.1s,box-shadow 0.3s,transform 0.1s;&:focus{outline:none;}&:hover{background-color:var(--kpum-orange);color:white;box-shadow:0 5px 8px rgb(0 0 0 / 0.5);}&:active{transform:translateY(0.1em);}", " svg{display:inline-block;}"], (function(e) {
            return "horizontal" == e.spaced ? "\n        &:not(:last-child) {\n            margin-right: 1em;\n        }\n    " : null
        }
        ));
        n.a = function(e) {
            var n = e.children
              , t = e.to
              , o = e.external
              , i = e.className
              , r = e.style
              , d = e.spaced
              , m = e.icon
              , s = e.onClick
              , p = e.as;
            return Object(l.a)(u, Object(a.a)({}, o ? {
                as: "a",
                href: t,
                onClick: s
            } : {
                to: t
            }, {
                className: i,
                style: r,
                spaced: d,
                as: p
            }), "download" == m ? Object(l.a)(c.a, null) : null, n)
        }
    },
    o2hM: function(e, n, t) {
        e.exports = t.p + "static/Srikandi-618d368af004eb50f2e0bc797ef0d3b6.png"
    },
    ztVc: function(e, n, t) {
        "use strict";
        var a = t("vOnD").c.h1.withConfig({
            displayName: "glitchy__GlitchyTitle",
            componentId: "sc-1lkmgi7-0"
        })(["font-size:2.5em;text-transform:uppercase;font-family:var(--qanelas-main);font-weight:bold;color:white;-webkit-text-stroke:1px var(--kpum-black);text-shadow:0.1em 0.1em 0 var(--kpum-lightorange),-0.1em -0.1em 0 var(--kpum-teal);margin:1em auto 0.5em auto;width:fit-content;text-align:center;"]);
        n.a = a
    }
}]);
//# sourceMappingURL=component---src-pages-produk-hukum-js-364c26d6f8176f99127d.js.map
