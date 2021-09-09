(window.webpackJsonp = window.webpackJsonp || []).push([[17], {
    t6oF: function(t, n, e) {
        "use strict";
        (function(t) {
            var n = e("zIRd");
            (function() {
                var e, i = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, n, e) {
                    t != Array.prototype && t != Object.prototype && (t[n] = e.value)
                }
                ;
                var r = function(n) {
                    n = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof t && t, n];
                    for (var e = 0; e < n.length; ++e) {
                        var i = n[e];
                        if (i && i.Math == Math)
                            return i
                    }
                    return globalThis
                }(this);
                function o(t) {
                    var n = 0;
                    return function() {
                        return n < t.length ? {
                            done: !1,
                            value: t[n++]
                        } : {
                            done: !0
                        }
                    }
                }
                function a(t) {
                    var n = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                    return n ? n.call(t) : {
                        next: o(t)
                    }
                }
                !function(t, n) {
                    if (n) {
                        var e = r;
                        t = t.split(".");
                        for (var o = 0; o < t.length - 1; o++) {
                            var a = t[o];
                            a in e || (e[a] = {}),
                            e = e[a]
                        }
                        (n = n(o = e[t = t[t.length - 1]])) != o && null != n && i(e, t, {
                            configurable: !0,
                            writable: !0,
                            value: n
                        })
                    }
                }("Promise", (function(t) {
                    function n(t) {
                        this.b = 0,
                        this.c = void 0,
                        this.a = [];
                        var n = this.f();
                        try {
                            t(n.resolve, n.reject)
                        } catch (e) {
                            n.reject(e)
                        }
                    }
                    function e() {
                        this.a = null
                    }
                    function i(t) {
                        return t instanceof n ? t : new n((function(n) {
                            n(t)
                        }
                        ))
                    }
                    if (t)
                        return t;
                    e.prototype.b = function(t) {
                        if (null == this.a) {
                            this.a = [];
                            var n = this;
                            this.c((function() {
                                n.g()
                            }
                            ))
                        }
                        this.a.push(t)
                    }
                    ;
                    var o = r.setTimeout;
                    e.prototype.c = function(t) {
                        o(t, 0)
                    }
                    ,
                    e.prototype.g = function() {
                        for (; this.a && this.a.length; ) {
                            var t = this.a;
                            this.a = [];
                            for (var n = 0; n < t.length; ++n) {
                                var e = t[n];
                                t[n] = null;
                                try {
                                    e()
                                } catch (i) {
                                    this.f(i)
                                }
                            }
                        }
                        this.a = null
                    }
                    ,
                    e.prototype.f = function(t) {
                        this.c((function() {
                            throw t
                        }
                        ))
                    }
                    ,
                    n.prototype.f = function() {
                        function t(t) {
                            return function(i) {
                                e || (e = !0,
                                t.call(n, i))
                            }
                        }
                        var n = this
                          , e = !1;
                        return {
                            resolve: t(this.v),
                            reject: t(this.g)
                        }
                    }
                    ,
                    n.prototype.v = function(t) {
                        if (t === this)
                            this.g(new TypeError("A Promise cannot resolve to itself"));
                        else if (t instanceof n)
                            this.o(t);
                        else {
                            t: switch (typeof t) {
                            case "object":
                                var e = null != t;
                                break t;
                            case "function":
                                e = !0;
                                break t;
                            default:
                                e = !1
                            }
                            e ? this.m(t) : this.h(t)
                        }
                    }
                    ,
                    n.prototype.m = function(t) {
                        var n = void 0;
                        try {
                            n = t.then
                        } catch (e) {
                            return void this.g(e)
                        }
                        "function" == typeof n ? this.u(n, t) : this.h(t)
                    }
                    ,
                    n.prototype.g = function(t) {
                        this.i(2, t)
                    }
                    ,
                    n.prototype.h = function(t) {
                        this.i(1, t)
                    }
                    ,
                    n.prototype.i = function(t, n) {
                        if (0 != this.b)
                            throw Error("Cannot settle(" + t + ", " + n + "): Promise already settled in state" + this.b);
                        this.b = t,
                        this.c = n,
                        this.l()
                    }
                    ,
                    n.prototype.l = function() {
                        if (null != this.a) {
                            for (var t = 0; t < this.a.length; ++t)
                                s.b(this.a[t]);
                            this.a = null
                        }
                    }
                    ;
                    var s = new e;
                    return n.prototype.o = function(t) {
                        var n = this.f();
                        t.Pa(n.resolve, n.reject)
                    }
                    ,
                    n.prototype.u = function(t, n) {
                        var e = this.f();
                        try {
                            t.call(n, e.resolve, e.reject)
                        } catch (i) {
                            e.reject(i)
                        }
                    }
                    ,
                    n.prototype.then = function(t, e) {
                        function i(t, n) {
                            return "function" == typeof t ? function(n) {
                                try {
                                    r(t(n))
                                } catch (e) {
                                    o(e)
                                }
                            }
                            : n
                        }
                        var r, o, a = new n((function(t, n) {
                            r = t,
                            o = n
                        }
                        ));
                        return this.Pa(i(t, r), i(e, o)),
                        a
                    }
                    ,
                    n.prototype.catch = function(t) {
                        return this.then(void 0, t)
                    }
                    ,
                    n.prototype.Pa = function(t, n) {
                        function e() {
                            switch (i.b) {
                            case 1:
                                t(i.c);
                                break;
                            case 2:
                                n(i.c);
                                break;
                            default:
                                throw Error("Unexpected state: " + i.b)
                            }
                        }
                        var i = this;
                        null == this.a ? s.b(e) : this.a.push(e)
                    }
                    ,
                    n.resolve = i,
                    n.reject = function(t) {
                        return new n((function(n, e) {
                            e(t)
                        }
                        ))
                    }
                    ,
                    n.race = function(t) {
                        return new n((function(n, e) {
                            for (var r = a(t), o = r.next(); !o.done; o = r.next())
                                i(o.value).Pa(n, e)
                        }
                        ))
                    }
                    ,
                    n.all = function(t) {
                        var e = a(t)
                          , r = e.next();
                        return r.done ? i([]) : new n((function(t, n) {
                            function o(n) {
                                return function(e) {
                                    a[n] = e,
                                    0 == --s && t(a)
                                }
                            }
                            var a = []
                              , s = 0;
                            do {
                                a.push(void 0),
                                s++,
                                i(r.value).Pa(o(a.length - 1), n),
                                r = e.next()
                            } while (!r.done)
                        }
                        ))
                    }
                    ,
                    n
                }
                ));
                var s = s || {}
                  , u = this || self
                  , c = /^[\w+/_-]+[=]{0,2}$/
                  , h = null;
                function l() {}
                function f(t) {
                    var n = typeof t;
                    if ("object" == n) {
                        if (!t)
                            return "null";
                        if (t instanceof Array)
                            return "array";
                        if (t instanceof Object)
                            return n;
                        var e = Object.prototype.toString.call(t);
                        if ("[object Window]" == e)
                            return "object";
                        if ("[object Array]" == e || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice"))
                            return "array";
                        if ("[object Function]" == e || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call"))
                            return "function"
                    } else if ("function" == n && void 0 === t.call)
                        return "object";
                    return n
                }
                function d(t) {
                    var n = f(t);
                    return "array" == n || "object" == n && "number" == typeof t.length
                }
                function p(t) {
                    return "function" == f(t)
                }
                function v(t) {
                    var n = typeof t;
                    return "object" == n && null != t || "function" == n
                }
                function m(t) {
                    return Object.prototype.hasOwnProperty.call(t, g) && t[g] || (t[g] = ++b)
                }
                var g = "closure_uid_" + (1e9 * Math.random() >>> 0)
                  , b = 0;
                function y(t, n, e) {
                    return t.call.apply(t.bind, arguments)
                }
                function w(t, n, e) {
                    if (!t)
                        throw Error();
                    if (2 < arguments.length) {
                        var i = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var e = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(e, i),
                            t.apply(n, e)
                        }
                    }
                    return function() {
                        return t.apply(n, arguments)
                    }
                }
                function I(t, n, e) {
                    return (I = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? y : w).apply(null, arguments)
                }
                function T(t, n) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var n = e.slice();
                        return n.push.apply(n, arguments),
                        t.apply(this, n)
                    }
                }
                var E = Date.now || function() {
                    return +new Date
                }
                ;
                function A(t, n) {
                    function e() {}
                    e.prototype = n.prototype,
                    t.$a = n.prototype,
                    t.prototype = new e,
                    t.prototype.constructor = t
                }
                function k(t, n, e) {
                    this.code = _ + t,
                    this.message = n || O[t] || "",
                    this.a = e || null
                }
                function S(t) {
                    var n = t && t.code;
                    return n ? new k(n.substring(_.length),t.message,t.serverResponse) : null
                }
                A(k, Error),
                k.prototype.w = function() {
                    var t = {
                        code: this.code,
                        message: this.message
                    };
                    return this.a && (t.serverResponse = this.a),
                    t
                }
                ,
                k.prototype.toJSON = function() {
                    return this.w()
                }
                ;
                var N, _ = "auth/", O = {
                    "admin-restricted-operation": "This operation is restricted to administrators only.",
                    "argument-error": "",
                    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                    "cordova-not-ready": "Cordova framework is not ready.",
                    "cors-unsupported": "This browser is not supported.",
                    "credential-already-in-use": "This credential is already associated with a different user account.",
                    "custom-token-mismatch": "The custom token corresponds to a different audience.",
                    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                    "email-already-in-use": "The email address is already in use by another account.",
                    "expired-action-code": "The action code has expired. ",
                    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                    "internal-error": "An internal error has occurred.",
                    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                    "invalid-auth-event": "An internal error has occurred.",
                    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
                    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                    "invalid-email": "The email address is badly formatted.",
                    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                    "invalid-credential": "The supplied auth credential is malformed or has expired.",
                    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                    "wrong-password": "The password is invalid or the user does not have a password.",
                    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                    "invalid-provider-id": "The specified provider ID is invalid.",
                    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                    "missing-continue-uri": "A continue URL must be provided in the request.",
                    "missing-iframe-start": "An internal error has occurred.",
                    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                    "missing-multi-factor-info": "No second factor identifier is provided.",
                    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                    "app-deleted": "This instance of FirebaseApp has been deleted.",
                    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                    "no-auth-event": "An internal error has occurred.",
                    "no-such-provider": "User was not linked to an account with the given provider.",
                    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                    "provider-already-linked": "User can only be linked to one identity for the given provider.",
                    "quota-exceeded": "The project's quota for this operation has been exceeded.",
                    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                    "rejected-credential": "The request contains malformed or mismatching credentials.",
                    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                    timeout: "The operation has timed out.",
                    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                    "unverified-email": "The operation requires a verified email.",
                    "user-cancelled": "The user did not grant your application the permissions it requested.",
                    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                    "user-disabled": "The user account has been disabled by an administrator.",
                    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                    "user-signed-out": "",
                    "weak-password": "The password must be 6 characters long or more.",
                    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                }, C = {
                    kd: {
                        Sa: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                        Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                        Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                        id: "b"
                    },
                    rd: {
                        Sa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                        Ya: "https://securetoken.googleapis.com/v1/token",
                        Va: "https://identitytoolkit.googleapis.com/v2/",
                        id: "p"
                    },
                    td: {
                        Sa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                        Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                        Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                        id: "s"
                    },
                    ud: {
                        Sa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                        Ya: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                        Va: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                        id: "t"
                    }
                };
                function R(t) {
                    for (var n in C)
                        if (C[n].id === t)
                            return {
                                firebaseEndpoint: (t = C[n]).Sa,
                                secureTokenEndpoint: t.Ya,
                                identityPlatformEndpoint: t.Va
                            };
                    return null
                }
                function P(t) {
                    if (!t)
                        return !1;
                    try {
                        return !!t.$goog_Thenable
                    } catch (n) {
                        return !1
                    }
                }
                function D(t) {
                    if (Error.captureStackTrace)
                        Error.captureStackTrace(this, D);
                    else {
                        var n = Error().stack;
                        n && (this.stack = n)
                    }
                    t && (this.message = String(t))
                }
                function L(t, n) {
                    for (var e = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++)
                        e += t[r] + (r < n.length ? n[r] : "%s");
                    D.call(this, e + t[i])
                }
                function x(t, n) {
                    throw new L("Failure" + (t ? ": " + t : ""),Array.prototype.slice.call(arguments, 1))
                }
                function M(t, n) {
                    this.c = t,
                    this.f = n,
                    this.b = 0,
                    this.a = null
                }
                function j(t, n) {
                    t.f(n),
                    100 > t.b && (t.b++,
                    n.next = t.a,
                    t.a = n)
                }
                function U() {
                    this.b = this.a = null
                }
                N = R("__EID__") ? "__EID__" : void 0,
                A(D, Error),
                D.prototype.name = "CustomError",
                A(L, D),
                L.prototype.name = "AssertionError",
                M.prototype.get = function() {
                    if (0 < this.b) {
                        this.b--;
                        var t = this.a;
                        this.a = t.next,
                        t.next = null
                    } else
                        t = this.c();
                    return t
                }
                ;
                var V = new M((function() {
                    return new K
                }
                ),(function(t) {
                    t.reset()
                }
                ));
                function F() {
                    var t = yn
                      , n = null;
                    return t.a && (n = t.a,
                    t.a = t.a.next,
                    t.a || (t.b = null),
                    n.next = null),
                    n
                }
                function K() {
                    this.next = this.b = this.a = null
                }
                U.prototype.add = function(t, n) {
                    var e = V.get();
                    e.set(t, n),
                    this.b ? this.b.next = e : this.a = e,
                    this.b = e
                }
                ,
                K.prototype.set = function(t, n) {
                    this.a = t,
                    this.b = n,
                    this.next = null
                }
                ,
                K.prototype.reset = function() {
                    this.next = this.b = this.a = null
                }
                ;
                var q = Array.prototype.indexOf ? function(t, n) {
                    return Array.prototype.indexOf.call(t, n, void 0)
                }
                : function(t, n) {
                    if ("string" == typeof t)
                        return "string" != typeof n || 1 != n.length ? -1 : t.indexOf(n, 0);
                    for (var e = 0; e < t.length; e++)
                        if (e in t && t[e] === n)
                            return e;
                    return -1
                }
                  , H = Array.prototype.forEach ? function(t, n, e) {
                    Array.prototype.forEach.call(t, n, e)
                }
                : function(t, n, e) {
                    for (var i = t.length, r = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++)
                        o in r && n.call(e, r[o], o, t)
                }
                ;
                var G = Array.prototype.filter ? function(t, n) {
                    return Array.prototype.filter.call(t, n, void 0)
                }
                : function(t, n) {
                    for (var e = t.length, i = [], r = 0, o = "string" == typeof t ? t.split("") : t, a = 0; a < e; a++)
                        if (a in o) {
                            var s = o[a];
                            n.call(void 0, s, a, t) && (i[r++] = s)
                        }
                    return i
                }
                  , B = Array.prototype.map ? function(t, n) {
                    return Array.prototype.map.call(t, n, void 0)
                }
                : function(t, n) {
                    for (var e = t.length, i = Array(e), r = "string" == typeof t ? t.split("") : t, o = 0; o < e; o++)
                        o in r && (i[o] = n.call(void 0, r[o], o, t));
                    return i
                }
                  , W = Array.prototype.some ? function(t, n) {
                    return Array.prototype.some.call(t, n, void 0)
                }
                : function(t, n) {
                    for (var e = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < e; r++)
                        if (r in i && n.call(void 0, i[r], r, t))
                            return !0;
                    return !1
                }
                ;
                function X(t, n) {
                    return 0 <= q(t, n)
                }
                function J(t, n) {
                    var e;
                    return (e = 0 <= (n = q(t, n))) && Array.prototype.splice.call(t, n, 1),
                    e
                }
                function Y(t, n) {
                    !function(t, n) {
                        for (var e = "string" == typeof t ? t.split("") : t, i = t.length - 1; 0 <= i; --i)
                            i in e && n.call(void 0, e[i], i, t)
                    }(t, (function(e, i) {
                        n.call(void 0, e, i, t) && 1 == Array.prototype.splice.call(t, i, 1).length && 0
                    }
                    ))
                }
                function z(t) {
                    return Array.prototype.concat.apply([], arguments)
                }
                function $(t) {
                    var n = t.length;
                    if (0 < n) {
                        for (var e = Array(n), i = 0; i < n; i++)
                            e[i] = t[i];
                        return e
                    }
                    return []
                }
                var Z, Q = String.prototype.trim ? function(t) {
                    return t.trim()
                }
                : function(t) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
                }
                , tt = /&/g, nt = /</g, et = />/g, it = /"/g, rt = /'/g, ot = /\x00/g, at = /[\x00&<>"']/;
                function st(t, n) {
                    return -1 != t.indexOf(n)
                }
                function ut(t, n) {
                    return t < n ? -1 : t > n ? 1 : 0
                }
                t: {
                    var ct = u.navigator;
                    if (ct) {
                        var ht = ct.userAgent;
                        if (ht) {
                            Z = ht;
                            break t
                        }
                    }
                    Z = ""
                }
                function lt(t) {
                    return st(Z, t)
                }
                function ft(t, n) {
                    for (var e in t)
                        n.call(void 0, t[e], e, t)
                }
                function dt(t) {
                    for (var n in t)
                        return !1;
                    return !0
                }
                function pt(t) {
                    var n, e = {};
                    for (n in t)
                        e[n] = t[n];
                    return e
                }
                var vt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                function mt(t, n) {
                    for (var e, i, r = 1; r < arguments.length; r++) {
                        for (e in i = arguments[r])
                            t[e] = i[e];
                        for (var o = 0; o < vt.length; o++)
                            e = vt[o],
                            Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e])
                    }
                }
                function gt(t, n) {
                    t: {
                        try {
                            var e = t && t.ownerDocument
                              , i = e && (e.defaultView || e.parentWindow);
                            if ((i = i || u).Element && i.Location) {
                                var r = i;
                                break t
                            }
                        } catch (a) {}
                        r = null
                    }
                    if (r && void 0 !== r[n] && (!t || !(t instanceof r[n]) && (t instanceof r.Location || t instanceof r.Element))) {
                        if (v(t))
                            try {
                                var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
                            } catch (a) {
                                o = "<object could not be stringified>"
                            }
                        else
                            o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                        x("Argument is not a %s (or a non-Element, non-Location mock); got: %s", n, o)
                    }
                }
                function bt(t, n) {
                    this.a = t === It && n || "",
                    this.b = wt
                }
                function yt(t) {
                    return t instanceof bt && t.constructor === bt && t.b === wt ? t.a : (x("expected object of type Const, got '" + t + "'"),
                    "type_error:Const")
                }
                bt.prototype.sa = !0,
                bt.prototype.ra = function() {
                    return this.a
                }
                ,
                bt.prototype.toString = function() {
                    return "Const{" + this.a + "}"
                }
                ;
                var wt = {}
                  , It = {}
                  , Tt = new bt(It,"");
                function Et(t, n) {
                    this.a = t === Ot && n || "",
                    this.b = _t
                }
                function At(t) {
                    return t instanceof Et && t.constructor === Et && t.b === _t ? t.a : (x("expected object of type TrustedResourceUrl, got '" + t + "' of type " + f(t)),
                    "type_error:TrustedResourceUrl")
                }
                function kt(t, n) {
                    var e = yt(t);
                    if (!Nt.test(e))
                        throw Error("Invalid TrustedResourceUrl format: " + e);
                    return t = e.replace(St, (function(t, i) {
                        if (!Object.prototype.hasOwnProperty.call(n, i))
                            throw Error('Found marker, "' + i + '", in format string, "' + e + '", but no valid label mapping found in args: ' + JSON.stringify(n));
                        return (t = n[i])instanceof bt ? yt(t) : encodeURIComponent(String(t))
                    }
                    )),
                    new Et(Ot,t)
                }
                Et.prototype.sa = !0,
                Et.prototype.ra = function() {
                    return this.a.toString()
                }
                ,
                Et.prototype.toString = function() {
                    return "TrustedResourceUrl{" + this.a + "}"
                }
                ;
                var St = /%{(\w+)}/g
                  , Nt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
                  , _t = {}
                  , Ot = {};
                function Ct(t, n) {
                    this.a = t === xt && n || "",
                    this.b = Lt
                }
                function Rt(t) {
                    return t instanceof Ct && t.constructor === Ct && t.b === Lt ? t.a : (x("expected object of type SafeUrl, got '" + t + "' of type " + f(t)),
                    "type_error:SafeUrl")
                }
                Ct.prototype.sa = !0,
                Ct.prototype.ra = function() {
                    return this.a.toString()
                }
                ,
                Ct.prototype.toString = function() {
                    return "SafeUrl{" + this.a + "}"
                }
                ;
                var Pt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
                function Dt(t) {
                    return t instanceof Ct ? t : (t = "object" == typeof t && t.sa ? t.ra() : String(t),
                    Pt.test(t) || (t = "about:invalid#zClosurez"),
                    new Ct(xt,t))
                }
                var Lt = {}
                  , xt = {};
                function Mt() {
                    this.a = "",
                    this.b = Ut
                }
                function jt(t) {
                    return t instanceof Mt && t.constructor === Mt && t.b === Ut ? t.a : (x("expected object of type SafeHtml, got '" + t + "' of type " + f(t)),
                    "type_error:SafeHtml")
                }
                Mt.prototype.sa = !0,
                Mt.prototype.ra = function() {
                    return this.a.toString()
                }
                ,
                Mt.prototype.toString = function() {
                    return "SafeHtml{" + this.a + "}"
                }
                ;
                var Ut = {};
                function Vt(t) {
                    var n = new Mt;
                    return n.a = t,
                    n
                }
                Vt("<!DOCTYPE html>");
                var Ft = Vt("");
                function Kt(t, n) {
                    for (var e = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < e.length; )
                        i += e.shift() + r.shift();
                    return i + e.join("%s")
                }
                function qt(t) {
                    return at.test(t) && (-1 != t.indexOf("&") && (t = t.replace(tt, "&amp;")),
                    -1 != t.indexOf("<") && (t = t.replace(nt, "&lt;")),
                    -1 != t.indexOf(">") && (t = t.replace(et, "&gt;")),
                    -1 != t.indexOf('"') && (t = t.replace(it, "&quot;")),
                    -1 != t.indexOf("'") && (t = t.replace(rt, "&#39;")),
                    -1 != t.indexOf("\0") && (t = t.replace(ot, "&#0;"))),
                    t
                }
                function Ht(t) {
                    return Ht[" "](t),
                    t
                }
                Vt("<br>"),
                Ht[" "] = l;
                var Gt, Bt, Wt = lt("Opera"), Xt = lt("Trident") || lt("MSIE"), Jt = lt("Edge"), Yt = Jt || Xt, zt = lt("Gecko") && !(st(Z.toLowerCase(), "webkit") && !lt("Edge")) && !(lt("Trident") || lt("MSIE")) && !lt("Edge"), $t = st(Z.toLowerCase(), "webkit") && !lt("Edge");
                function Zt() {
                    var t = u.document;
                    return t ? t.documentMode : void 0
                }
                t: {
                    var Qt = ""
                      , tn = (Bt = Z,
                    zt ? /rv:([^\);]+)(\)|;)/.exec(Bt) : Jt ? /Edge\/([\d\.]+)/.exec(Bt) : Xt ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Bt) : $t ? /WebKit\/(\S+)/.exec(Bt) : Wt ? /(?:Version)[ \/]?(\S+)/.exec(Bt) : void 0);
                    if (tn && (Qt = tn ? tn[1] : ""),
                    Xt) {
                        var nn = Zt();
                        if (null != nn && nn > parseFloat(Qt)) {
                            Gt = String(nn);
                            break t
                        }
                    }
                    Gt = Qt
                }
                var en, rn = {};
                function on(t) {
                    return function(t, n) {
                        var e = rn;
                        return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : e[t] = n(t)
                    }(t, (function() {
                        for (var n = 0, e = Q(String(Gt)).split("."), i = Q(String(t)).split("."), r = Math.max(e.length, i.length), o = 0; 0 == n && o < r; o++) {
                            var a = e[o] || ""
                              , s = i[o] || "";
                            do {
                                if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""],
                                s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""],
                                0 == a[0].length && 0 == s[0].length)
                                    break;
                                n = ut(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || ut(0 == a[2].length, 0 == s[2].length) || ut(a[2], s[2]),
                                a = a[3],
                                s = s[3]
                            } while (0 == n)
                        }
                        return 0 <= n
                    }
                    ))
                }
                en = u.document && Xt ? Zt() : void 0;
                try {
                    new self.OffscreenCanvas(0,0).getContext("2d")
                } catch (Bt) {}
                var an = !Xt || 9 <= Number(en);
                function sn(t) {
                    var n = document;
                    return "string" == typeof t ? n.getElementById(t) : t
                }
                function un(t, n) {
                    ft(n, (function(n, e) {
                        n && "object" == typeof n && n.sa && (n = n.ra()),
                        "style" == e ? t.style.cssText = n : "class" == e ? t.className = n : "for" == e ? t.htmlFor = n : ln.hasOwnProperty(e) ? t.setAttribute(ln[e], n) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? t.setAttribute(e, n) : t[e] = n
                    }
                    ))
                }
                var cn, hn, ln = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                };
                function fn(t, n, e) {
                    function i(e) {
                        e && n.appendChild("string" == typeof e ? t.createTextNode(e) : e)
                    }
                    for (var r = 2; r < e.length; r++) {
                        var o = e[r];
                        !d(o) || v(o) && 0 < o.nodeType ? i(o) : H(pn(o) ? $(o) : o, i)
                    }
                }
                function dn(t, n) {
                    return n = String(n),
                    "application/xhtml+xml" === t.contentType && (n = n.toLowerCase()),
                    t.createElement(n)
                }
                function pn(t) {
                    if (t && "number" == typeof t.length) {
                        if (v(t))
                            return "function" == typeof t.item || "string" == typeof t.item;
                        if (p(t))
                            return "function" == typeof t.item
                    }
                    return !1
                }
                function vn(t) {
                    u.setTimeout((function() {
                        throw t
                    }
                    ), 0)
                }
                function mn() {
                    var t = u.MessageChannel;
                    if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !lt("Presto") && (t = function() {
                        var t = dn(document, "IFRAME");
                        t.style.display = "none",
                        function(t) {
                            var n = new Et(Ot,yt(Tt));
                            gt(t, "HTMLIFrameElement"),
                            t.src = At(n).toString()
                        }(t),
                        document.documentElement.appendChild(t);
                        var n = t.contentWindow;
                        (t = n.document).open(),
                        t.write(jt(Ft)),
                        t.close();
                        var e = "callImmediate" + Math.random()
                          , i = "file:" == n.location.protocol ? "*" : n.location.protocol + "//" + n.location.host;
                        t = I((function(t) {
                            "*" != i && t.origin != i || t.data != e || this.port1.onmessage()
                        }
                        ), this),
                        n.addEventListener("message", t, !1),
                        this.port1 = {},
                        this.port2 = {
                            postMessage: function() {
                                n.postMessage(e, i)
                            }
                        }
                    }
                    ),
                    void 0 !== t && !lt("Trident") && !lt("MSIE")) {
                        var n = new t
                          , e = {}
                          , i = e;
                        return n.port1.onmessage = function() {
                            if (void 0 !== e.next) {
                                var t = (e = e.next).Fb;
                                e.Fb = null,
                                t()
                            }
                        }
                        ,
                        function(t) {
                            i.next = {
                                Fb: t
                            },
                            i = i.next,
                            n.port2.postMessage(0)
                        }
                    }
                    return function(t) {
                        u.setTimeout(t, 0)
                    }
                }
                function gn(t, n) {
                    hn || function() {
                        if (u.Promise && u.Promise.resolve) {
                            var t = u.Promise.resolve(void 0);
                            hn = function() {
                                t.then(wn)
                            }
                        } else
                            hn = function() {
                                var t = wn;
                                !p(u.setImmediate) || u.Window && u.Window.prototype && !lt("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (cn || (cn = mn()),
                                cn(t)) : u.setImmediate(t)
                            }
                    }(),
                    bn || (hn(),
                    bn = !0),
                    yn.add(t, n)
                }
                var bn = !1
                  , yn = new U;
                function wn() {
                    for (var t; t = F(); ) {
                        try {
                            t.a.call(t.b)
                        } catch (n) {
                            vn(n)
                        }
                        j(V, t)
                    }
                    bn = !1
                }
                function In(t, n) {
                    if (this.a = Tn,
                    this.i = void 0,
                    this.f = this.b = this.c = null,
                    this.g = this.h = !1,
                    t != l)
                        try {
                            var e = this;
                            t.call(n, (function(t) {
                                Ln(e, En, t)
                            }
                            ), (function(t) {
                                if (!(t instanceof Kn))
                                    try {
                                        if (t instanceof Error)
                                            throw t;
                                        throw Error("Promise rejected.")
                                    } catch (n) {}
                                Ln(e, An, t)
                            }
                            ))
                        } catch (i) {
                            Ln(this, An, i)
                        }
                }
                var Tn = 0
                  , En = 2
                  , An = 3;
                function kn() {
                    this.next = this.f = this.b = this.g = this.a = null,
                    this.c = !1
                }
                kn.prototype.reset = function() {
                    this.f = this.b = this.g = this.a = null,
                    this.c = !1
                }
                ;
                var Sn = new M((function() {
                    return new kn
                }
                ),(function(t) {
                    t.reset()
                }
                ));
                function Nn(t, n, e) {
                    var i = Sn.get();
                    return i.g = t,
                    i.b = n,
                    i.f = e,
                    i
                }
                function _n(t) {
                    if (t instanceof In)
                        return t;
                    var n = new In(l);
                    return Ln(n, En, t),
                    n
                }
                function On(t) {
                    return new In((function(n, e) {
                        e(t)
                    }
                    ))
                }
                function Cn(t, n, e) {
                    xn(t, n, e, null) || gn(T(n, t))
                }
                function Rn(t) {
                    return new In((function(n) {
                        var e = t.length
                          , i = [];
                        if (e)
                            for (var r = function(t, r, o) {
                                e--,
                                i[t] = r ? {
                                    Ob: !0,
                                    value: o
                                } : {
                                    Ob: !1,
                                    reason: o
                                },
                                0 == e && n(i)
                            }, o = 0; o < t.length; o++)
                                Cn(t[o], T(r, o, !0), T(r, o, !1));
                        else
                            n(i)
                    }
                    ))
                }
                function Pn(t, n) {
                    t.b || t.a != En && t.a != An || Mn(t),
                    t.f ? t.f.next = n : t.b = n,
                    t.f = n
                }
                function Dn(t, n, e, i) {
                    var r = Nn(null, null, null);
                    return r.a = new In((function(t, o) {
                        r.g = n ? function(e) {
                            try {
                                var r = n.call(i, e);
                                t(r)
                            } catch (a) {
                                o(a)
                            }
                        }
                        : t,
                        r.b = e ? function(n) {
                            try {
                                var r = e.call(i, n);
                                void 0 === r && n instanceof Kn ? o(n) : t(r)
                            } catch (a) {
                                o(a)
                            }
                        }
                        : o
                    }
                    )),
                    r.a.c = t,
                    Pn(t, r),
                    r.a
                }
                function Ln(t, n, e) {
                    t.a == Tn && (t === e && (n = An,
                    e = new TypeError("Promise cannot resolve to itself")),
                    t.a = 1,
                    xn(e, t.Zc, t.$c, t) || (t.i = e,
                    t.a = n,
                    t.c = null,
                    Mn(t),
                    n != An || e instanceof Kn || function(t, n) {
                        t.g = !0,
                        gn((function() {
                            t.g && Fn.call(null, n)
                        }
                        ))
                    }(t, e)))
                }
                function xn(t, n, e, i) {
                    if (t instanceof In)
                        return Pn(t, Nn(n || l, e || null, i)),
                        !0;
                    if (P(t))
                        return t.then(n, e, i),
                        !0;
                    if (v(t))
                        try {
                            var r = t.then;
                            if (p(r))
                                return function(t, n, e, i, r) {
                                    function o(t) {
                                        a || (a = !0,
                                        i.call(r, t))
                                    }
                                    var a = !1;
                                    try {
                                        n.call(t, (function(t) {
                                            a || (a = !0,
                                            e.call(r, t))
                                        }
                                        ), o)
                                    } catch (s) {
                                        o(s)
                                    }
                                }(t, r, n, e, i),
                                !0
                        } catch (o) {
                            return e.call(i, o),
                            !0
                        }
                    return !1
                }
                function Mn(t) {
                    t.h || (t.h = !0,
                    gn(t.fc, t))
                }
                function jn(t) {
                    var n = null;
                    return t.b && (n = t.b,
                    t.b = n.next,
                    n.next = null),
                    t.b || (t.f = null),
                    n
                }
                function Un(t, n, e, i) {
                    if (e == An && n.b && !n.c)
                        for (; t && t.g; t = t.c)
                            t.g = !1;
                    if (n.a)
                        n.a.c = null,
                        Vn(n, e, i);
                    else
                        try {
                            n.c ? n.g.call(n.f) : Vn(n, e, i)
                        } catch (r) {
                            Fn.call(null, r)
                        }
                    j(Sn, n)
                }
                function Vn(t, n, e) {
                    n == En ? t.g.call(t.f, e) : t.b && t.b.call(t.f, e)
                }
                In.prototype.then = function(t, n, e) {
                    return Dn(this, p(t) ? t : null, p(n) ? n : null, e)
                }
                ,
                In.prototype.$goog_Thenable = !0,
                (e = In.prototype).na = function(t, n) {
                    return (t = Nn(t, t, n)).c = !0,
                    Pn(this, t),
                    this
                }
                ,
                e.s = function(t, n) {
                    return Dn(this, null, t, n)
                }
                ,
                e.cancel = function(t) {
                    if (this.a == Tn) {
                        var n = new Kn(t);
                        gn((function() {
                            !function t(n, e) {
                                if (n.a == Tn)
                                    if (n.c) {
                                        var i = n.c;
                                        if (i.b) {
                                            for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++,
                                            s.a == n && (o = s),
                                            !(o && 1 < r))); s = s.next)
                                                o || (a = s);
                                            o && (i.a == Tn && 1 == r ? t(i, e) : (a ? ((r = a).next == i.f && (i.f = r),
                                            r.next = r.next.next) : jn(i),
                                            Un(i, o, An, e)))
                                        }
                                        n.c = null
                                    } else
                                        Ln(n, An, e)
                            }(this, n)
                        }
                        ), this)
                    }
                }
                ,
                e.Zc = function(t) {
                    this.a = Tn,
                    Ln(this, En, t)
                }
                ,
                e.$c = function(t) {
                    this.a = Tn,
                    Ln(this, An, t)
                }
                ,
                e.fc = function() {
                    for (var t; t = jn(this); )
                        Un(this, t, this.a, this.i);
                    this.h = !1
                }
                ;
                var Fn = vn;
                function Kn(t) {
                    D.call(this, t)
                }
                function qn() {
                    0 != Hn && (Gn[m(this)] = this),
                    this.xa = this.xa,
                    this.oa = this.oa
                }
                A(Kn, D),
                Kn.prototype.name = "cancel";
                var Hn = 0
                  , Gn = {};
                function Bn(t) {
                    if (!t.xa && (t.xa = !0,
                    t.Da(),
                    0 != Hn)) {
                        var n = m(t);
                        if (0 != Hn && t.oa && 0 < t.oa.length)
                            throw Error(t + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
                        delete Gn[n]
                    }
                }
                qn.prototype.xa = !1,
                qn.prototype.Da = function() {
                    if (this.oa)
                        for (; this.oa.length; )
                            this.oa.shift()()
                }
                ;
                var Wn = Object.freeze || function(t) {
                    return t
                }
                  , Xn = !Xt || 9 <= Number(en)
                  , Jn = Xt && !on("9")
                  , Yn = function() {
                    if (!u.addEventListener || !Object.defineProperty)
                        return !1;
                    var t = !1
                      , n = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    try {
                        u.addEventListener("test", l, n),
                        u.removeEventListener("test", l, n)
                    } catch (e) {}
                    return t
                }();
                function zn(t, n) {
                    this.type = t,
                    this.b = this.target = n,
                    this.defaultPrevented = !1
                }
                function $n(t, n) {
                    if (zn.call(this, t ? t.type : ""),
                    this.relatedTarget = this.b = this.target = null,
                    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0,
                    this.key = "",
                    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1,
                    this.pointerId = 0,
                    this.pointerType = "",
                    this.a = null,
                    t) {
                        var e = this.type = t.type
                          , i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                        if (this.target = t.target || t.srcElement,
                        this.b = n,
                        n = t.relatedTarget) {
                            if (zt) {
                                t: {
                                    try {
                                        Ht(n.nodeName);
                                        var r = !0;
                                        break t
                                    } catch (o) {}
                                    r = !1
                                }
                                r || (n = null)
                            }
                        } else
                            "mouseover" == e ? n = t.fromElement : "mouseout" == e && (n = t.toElement);
                        this.relatedTarget = n,
                        i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX,
                        this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY,
                        this.screenX = i.screenX || 0,
                        this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX,
                        this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY,
                        this.screenX = t.screenX || 0,
                        this.screenY = t.screenY || 0),
                        this.button = t.button,
                        this.key = t.key || "",
                        this.ctrlKey = t.ctrlKey,
                        this.altKey = t.altKey,
                        this.shiftKey = t.shiftKey,
                        this.metaKey = t.metaKey,
                        this.pointerId = t.pointerId || 0,
                        this.pointerType = "string" == typeof t.pointerType ? t.pointerType : Zn[t.pointerType] || "",
                        this.a = t,
                        t.defaultPrevented && this.preventDefault()
                    }
                }
                zn.prototype.preventDefault = function() {
                    this.defaultPrevented = !0
                }
                ,
                A($n, zn);
                var Zn = Wn({
                    2: "touch",
                    3: "pen",
                    4: "mouse"
                });
                $n.prototype.preventDefault = function() {
                    $n.$a.preventDefault.call(this);
                    var t = this.a;
                    if (t.preventDefault)
                        t.preventDefault();
                    else if (t.returnValue = !1,
                    Jn)
                        try {
                            (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
                        } catch (n) {}
                }
                ,
                $n.prototype.g = function() {
                    return this.a
                }
                ;
                var Qn = "closure_listenable_" + (1e6 * Math.random() | 0)
                  , te = 0;
                function ne(t, n, e, i, r) {
                    this.listener = t,
                    this.proxy = null,
                    this.src = n,
                    this.type = e,
                    this.capture = !!i,
                    this.Ua = r,
                    this.key = ++te,
                    this.va = this.Oa = !1
                }
                function ee(t) {
                    t.va = !0,
                    t.listener = null,
                    t.proxy = null,
                    t.src = null,
                    t.Ua = null
                }
                function ie(t) {
                    this.src = t,
                    this.a = {},
                    this.b = 0
                }
                function re(t, n) {
                    var e = n.type;
                    e in t.a && J(t.a[e], n) && (ee(n),
                    0 == t.a[e].length && (delete t.a[e],
                    t.b--))
                }
                function oe(t, n, e, i) {
                    for (var r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (!o.va && o.listener == n && o.capture == !!e && o.Ua == i)
                            return r
                    }
                    return -1
                }
                ie.prototype.add = function(t, n, e, i, r) {
                    var o = t.toString();
                    (t = this.a[o]) || (t = this.a[o] = [],
                    this.b++);
                    var a = oe(t, n, i, r);
                    return -1 < a ? (n = t[a],
                    e || (n.Oa = !1)) : ((n = new ne(n,this.src,o,!!i,r)).Oa = e,
                    t.push(n)),
                    n
                }
                ;
                var ae = "closure_lm_" + (1e6 * Math.random() | 0)
                  , se = {};
                function ue(t, n, e, i, r) {
                    if (i && i.once)
                        he(t, n, e, i, r);
                    else if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++)
                            ue(t, n[o], e, i, r);
                    else
                        e = ye(e),
                        t && t[Qn] ? Ie(t, n, e, v(i) ? !!i.capture : !!i, r) : ce(t, n, e, !1, i, r)
                }
                function ce(t, n, e, i, r, o) {
                    if (!n)
                        throw Error("Invalid event type");
                    var a = v(r) ? !!r.capture : !!r
                      , s = ge(t);
                    if (s || (t[ae] = s = new ie(t)),
                    !(e = s.add(n, e, i, a, o)).proxy) {
                        if (i = function() {
                            var t = me
                              , n = Xn ? function(e) {
                                return t.call(n.src, n.listener, e)
                            }
                            : function(e) {
                                if (!(e = t.call(n.src, n.listener, e)))
                                    return e
                            }
                            ;
                            return n
                        }(),
                        e.proxy = i,
                        i.src = t,
                        i.listener = e,
                        t.addEventListener)
                            Yn || (r = a),
                            void 0 === r && (r = !1),
                            t.addEventListener(n.toString(), i, r);
                        else if (t.attachEvent)
                            t.attachEvent(de(n.toString()), i);
                        else {
                            if (!t.addListener || !t.removeListener)
                                throw Error("addEventListener and attachEvent are unavailable.");
                            t.addListener(i)
                        }
                        0
                    }
                }
                function he(t, n, e, i, r) {
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++)
                            he(t, n[o], e, i, r);
                    else
                        e = ye(e),
                        t && t[Qn] ? Te(t, n, e, v(i) ? !!i.capture : !!i, r) : ce(t, n, e, !0, i, r)
                }
                function le(t, n, e, i, r) {
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++)
                            le(t, n[o], e, i, r);
                    else
                        i = v(i) ? !!i.capture : !!i,
                        e = ye(e),
                        t && t[Qn] ? (t = t.v,
                        (n = String(n).toString())in t.a && (-1 < (e = oe(o = t.a[n], e, i, r)) && (ee(o[e]),
                        Array.prototype.splice.call(o, e, 1),
                        0 == o.length && (delete t.a[n],
                        t.b--)))) : t && (t = ge(t)) && (n = t.a[n.toString()],
                        t = -1,
                        n && (t = oe(n, e, i, r)),
                        (e = -1 < t ? n[t] : null) && fe(e))
                }
                function fe(t) {
                    if ("number" != typeof t && t && !t.va) {
                        var n = t.src;
                        if (n && n[Qn])
                            re(n.v, t);
                        else {
                            var e = t.type
                              , i = t.proxy;
                            n.removeEventListener ? n.removeEventListener(e, i, t.capture) : n.detachEvent ? n.detachEvent(de(e), i) : n.addListener && n.removeListener && n.removeListener(i),
                            (e = ge(n)) ? (re(e, t),
                            0 == e.b && (e.src = null,
                            n[ae] = null)) : ee(t)
                        }
                    }
                }
                function de(t) {
                    return t in se ? se[t] : se[t] = "on" + t
                }
                function pe(t, n, e, i) {
                    var r = !0;
                    if ((t = ge(t)) && (n = t.a[n.toString()]))
                        for (n = n.concat(),
                        t = 0; t < n.length; t++) {
                            var o = n[t];
                            o && o.capture == e && !o.va && (o = ve(o, i),
                            r = r && !1 !== o)
                        }
                    return r
                }
                function ve(t, n) {
                    var e = t.listener
                      , i = t.Ua || t.src;
                    return t.Oa && fe(t),
                    e.call(i, n)
                }
                function me(t, n) {
                    if (t.va)
                        return !0;
                    if (!Xn) {
                        if (!n)
                            t: {
                                n = ["window", "event"];
                                for (var e = u, i = 0; i < n.length; i++)
                                    if (null == (e = e[n[i]])) {
                                        n = null;
                                        break t
                                    }
                                n = e
                            }
                        if (n = new $n(i = n,this),
                        e = !0,
                        !(0 > i.keyCode || null != i.returnValue)) {
                            t: {
                                var r = !1;
                                if (0 == i.keyCode)
                                    try {
                                        i.keyCode = -1;
                                        break t
                                    } catch (a) {
                                        r = !0
                                    }
                                (r || null == i.returnValue) && (i.returnValue = !0)
                            }
                            for (i = [],
                            r = n.b; r; r = r.parentNode)
                                i.push(r);
                            for (t = t.type,
                            r = i.length - 1; 0 <= r; r--) {
                                n.b = i[r];
                                var o = pe(i[r], t, !0, n);
                                e = e && o
                            }
                            for (r = 0; r < i.length; r++)
                                n.b = i[r],
                                o = pe(i[r], t, !1, n),
                                e = e && o
                        }
                        return e
                    }
                    return ve(t, new $n(n,this))
                }
                function ge(t) {
                    return (t = t[ae])instanceof ie ? t : null
                }
                var be = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
                function ye(t) {
                    return p(t) ? t : (t[be] || (t[be] = function(n) {
                        return t.handleEvent(n)
                    }
                    ),
                    t[be])
                }
                function we() {
                    qn.call(this),
                    this.v = new ie(this),
                    this.$b = this,
                    this.fb = null
                }
                function Ie(t, n, e, i, r) {
                    t.v.add(String(n), e, !1, i, r)
                }
                function Te(t, n, e, i, r) {
                    t.v.add(String(n), e, !0, i, r)
                }
                function Ee(t, n, e, i) {
                    if (!(n = t.v.a[String(n)]))
                        return !0;
                    n = n.concat();
                    for (var r = !0, o = 0; o < n.length; ++o) {
                        var a = n[o];
                        if (a && !a.va && a.capture == e) {
                            var s = a.listener
                              , u = a.Ua || a.src;
                            a.Oa && re(t.v, a),
                            r = !1 !== s.call(u, i) && r
                        }
                    }
                    return r && !i.defaultPrevented
                }
                function Ae(t, n, e) {
                    if (p(t))
                        e && (t = I(t, e));
                    else {
                        if (!t || "function" != typeof t.handleEvent)
                            throw Error("Invalid listener argument");
                        t = I(t.handleEvent, t)
                    }
                    return 2147483647 < Number(n) ? -1 : u.setTimeout(t, n || 0)
                }
                function ke(t) {
                    var n = null;
                    return new In((function(e, i) {
                        -1 == (n = Ae((function() {
                            e(void 0)
                        }
                        ), t)) && i(Error("Failed to schedule timer."))
                    }
                    )).s((function(t) {
                        throw u.clearTimeout(n),
                        t
                    }
                    ))
                }
                function Se(t) {
                    if (t.V && "function" == typeof t.V)
                        return t.V();
                    if ("string" == typeof t)
                        return t.split("");
                    if (d(t)) {
                        for (var n = [], e = t.length, i = 0; i < e; i++)
                            n.push(t[i]);
                        return n
                    }
                    for (i in n = [],
                    e = 0,
                    t)
                        n[e++] = t[i];
                    return n
                }
                function Ne(t) {
                    if (t.Y && "function" == typeof t.Y)
                        return t.Y();
                    if (!t.V || "function" != typeof t.V) {
                        if (d(t) || "string" == typeof t) {
                            var n = [];
                            t = t.length;
                            for (var e = 0; e < t; e++)
                                n.push(e);
                            return n
                        }
                        for (var i in n = [],
                        e = 0,
                        t)
                            n[e++] = i;
                        return n
                    }
                }
                function _e(t, n) {
                    this.b = {},
                    this.a = [],
                    this.c = 0;
                    var e = arguments.length;
                    if (1 < e) {
                        if (e % 2)
                            throw Error("Uneven number of arguments");
                        for (var i = 0; i < e; i += 2)
                            this.set(arguments[i], arguments[i + 1])
                    } else if (t)
                        if (t instanceof _e)
                            for (e = t.Y(),
                            i = 0; i < e.length; i++)
                                this.set(e[i], t.get(e[i]));
                        else
                            for (i in t)
                                this.set(i, t[i])
                }
                function Oe(t) {
                    if (t.c != t.a.length) {
                        for (var n = 0, e = 0; n < t.a.length; ) {
                            var i = t.a[n];
                            Ce(t.b, i) && (t.a[e++] = i),
                            n++
                        }
                        t.a.length = e
                    }
                    if (t.c != t.a.length) {
                        var r = {};
                        for (e = n = 0; n < t.a.length; )
                            Ce(r, i = t.a[n]) || (t.a[e++] = i,
                            r[i] = 1),
                            n++;
                        t.a.length = e
                    }
                }
                function Ce(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n)
                }
                A(we, qn),
                we.prototype[Qn] = !0,
                we.prototype.addEventListener = function(t, n, e, i) {
                    ue(this, t, n, e, i)
                }
                ,
                we.prototype.removeEventListener = function(t, n, e, i) {
                    le(this, t, n, e, i)
                }
                ,
                we.prototype.dispatchEvent = function(t) {
                    var n, e = this.fb;
                    if (e)
                        for (n = []; e; e = e.fb)
                            n.push(e);
                    e = this.$b;
                    var i = t.type || t;
                    if ("string" == typeof t)
                        t = new zn(t,e);
                    else if (t instanceof zn)
                        t.target = t.target || e;
                    else {
                        var r = t;
                        mt(t = new zn(i,e), r)
                    }
                    if (r = !0,
                    n)
                        for (var o = n.length - 1; 0 <= o; o--) {
                            var a = t.b = n[o];
                            r = Ee(a, i, !0, t) && r
                        }
                    if (r = Ee(a = t.b = e, i, !0, t) && r,
                    r = Ee(a, i, !1, t) && r,
                    n)
                        for (o = 0; o < n.length; o++)
                            r = Ee(a = t.b = n[o], i, !1, t) && r;
                    return r
                }
                ,
                we.prototype.Da = function() {
                    if (we.$a.Da.call(this),
                    this.v) {
                        var t, n = this.v;
                        for (t in n.a) {
                            for (var e = n.a[t], i = 0; i < e.length; i++)
                                ee(e[i]);
                            delete n.a[t],
                            n.b--
                        }
                    }
                    this.fb = null
                }
                ,
                (e = _e.prototype).V = function() {
                    Oe(this);
                    for (var t = [], n = 0; n < this.a.length; n++)
                        t.push(this.b[this.a[n]]);
                    return t
                }
                ,
                e.Y = function() {
                    return Oe(this),
                    this.a.concat()
                }
                ,
                e.clear = function() {
                    this.b = {},
                    this.c = this.a.length = 0
                }
                ,
                e.get = function(t, n) {
                    return Ce(this.b, t) ? this.b[t] : n
                }
                ,
                e.set = function(t, n) {
                    Ce(this.b, t) || (this.c++,
                    this.a.push(t)),
                    this.b[t] = n
                }
                ,
                e.forEach = function(t, n) {
                    for (var e = this.Y(), i = 0; i < e.length; i++) {
                        var r = e[i]
                          , o = this.get(r);
                        t.call(n, o, r, this)
                    }
                }
                ;
                var Re = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
                function Pe(t, n) {
                    var e;
                    this.a = this.l = this.f = "",
                    this.g = null,
                    this.h = this.c = "",
                    this.i = !1,
                    t instanceof Pe ? (this.i = void 0 !== n ? n : t.i,
                    De(this, t.f),
                    this.l = t.l,
                    this.a = t.a,
                    Le(this, t.g),
                    this.c = t.c,
                    xe(this, ti(t.b)),
                    this.h = t.h) : t && (e = String(t).match(Re)) ? (this.i = !!n,
                    De(this, e[1] || "", !0),
                    this.l = Fe(e[2] || ""),
                    this.a = Fe(e[3] || "", !0),
                    Le(this, e[4]),
                    this.c = Fe(e[5] || "", !0),
                    xe(this, e[6] || "", !0),
                    this.h = Fe(e[7] || "")) : (this.i = !!n,
                    this.b = new Je(null,this.i))
                }
                function De(t, n, e) {
                    t.f = e ? Fe(n, !0) : n,
                    t.f && (t.f = t.f.replace(/:$/, ""))
                }
                function Le(t, n) {
                    if (n) {
                        if (n = Number(n),
                        isNaN(n) || 0 > n)
                            throw Error("Bad port number " + n);
                        t.g = n
                    } else
                        t.g = null
                }
                function xe(t, n, e) {
                    n instanceof Je ? (t.b = n,
                    function(t, n) {
                        n && !t.f && (Ye(t),
                        t.c = null,
                        t.a.forEach((function(t, n) {
                            var e = n.toLowerCase();
                            n != e && ($e(this, n),
                            Qe(this, e, t))
                        }
                        ), t)),
                        t.f = n
                    }(t.b, t.i)) : (e || (n = Ke(n, We)),
                    t.b = new Je(n,t.i))
                }
                function Me(t, n, e) {
                    t.b.set(n, e)
                }
                function je(t, n) {
                    return t.b.get(n)
                }
                function Ue(t) {
                    return t instanceof Pe ? new Pe(t) : new Pe(t,void 0)
                }
                function Ve(t, n, e, i) {
                    var r = new Pe(null,void 0);
                    return t && De(r, t),
                    n && (r.a = n),
                    e && Le(r, e),
                    i && (r.c = i),
                    r
                }
                function Fe(t, n) {
                    return t ? n ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
                }
                function Ke(t, n, e) {
                    return "string" == typeof t ? (t = encodeURI(t).replace(n, qe),
                    e && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    t) : null
                }
                function qe(t) {
                    return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
                }
                Pe.prototype.toString = function() {
                    var t = []
                      , n = this.f;
                    n && t.push(Ke(n, He, !0), ":");
                    var e = this.a;
                    return (e || "file" == n) && (t.push("//"),
                    (n = this.l) && t.push(Ke(n, He, !0), "@"),
                    t.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    null != (e = this.g) && t.push(":", String(e))),
                    (e = this.c) && (this.a && "/" != e.charAt(0) && t.push("/"),
                    t.push(Ke(e, "/" == e.charAt(0) ? Be : Ge, !0))),
                    (e = this.b.toString()) && t.push("?", e),
                    (e = this.h) && t.push("#", Ke(e, Xe)),
                    t.join("")
                }
                ,
                Pe.prototype.resolve = function(t) {
                    var n = new Pe(this)
                      , e = !!t.f;
                    e ? De(n, t.f) : e = !!t.l,
                    e ? n.l = t.l : e = !!t.a,
                    e ? n.a = t.a : e = null != t.g;
                    var i = t.c;
                    if (e)
                        Le(n, t.g);
                    else if (e = !!t.c) {
                        if ("/" != i.charAt(0))
                            if (this.a && !this.c)
                                i = "/" + i;
                            else {
                                var r = n.c.lastIndexOf("/");
                                -1 != r && (i = n.c.substr(0, r + 1) + i)
                            }
                        if (".." == (r = i) || "." == r)
                            i = "";
                        else if (st(r, "./") || st(r, "/.")) {
                            i = 0 == r.lastIndexOf("/", 0),
                            r = r.split("/");
                            for (var o = [], a = 0; a < r.length; ) {
                                var s = r[a++];
                                "." == s ? i && a == r.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(),
                                i && a == r.length && o.push("")) : (o.push(s),
                                i = !0)
                            }
                            i = o.join("/")
                        } else
                            i = r
                    }
                    return e ? n.c = i : e = "" !== t.b.toString(),
                    e ? xe(n, ti(t.b)) : e = !!t.h,
                    e && (n.h = t.h),
                    n
                }
                ;
                var He = /[#\/\?@]/g
                  , Ge = /[#\?:]/g
                  , Be = /[#\?]/g
                  , We = /[#\?@]/g
                  , Xe = /#/g;
                function Je(t, n) {
                    this.b = this.a = null,
                    this.c = t || null,
                    this.f = !!n
                }
                function Ye(t) {
                    t.a || (t.a = new _e,
                    t.b = 0,
                    t.c && function(t, n) {
                        if (t) {
                            t = t.split("&");
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e].indexOf("=")
                                  , r = null;
                                if (0 <= i) {
                                    var o = t[e].substring(0, i);
                                    r = t[e].substring(i + 1)
                                } else
                                    o = t[e];
                                n(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
                            }
                        }
                    }(t.c, (function(n, e) {
                        t.add(decodeURIComponent(n.replace(/\+/g, " ")), e)
                    }
                    )))
                }
                function ze(t) {
                    var n = Ne(t);
                    if (void 0 === n)
                        throw Error("Keys are undefined");
                    var e = new Je(null,void 0);
                    t = Se(t);
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i]
                          , o = t[i];
                        Array.isArray(o) ? Qe(e, r, o) : e.add(r, o)
                    }
                    return e
                }
                function $e(t, n) {
                    Ye(t),
                    n = ni(t, n),
                    Ce(t.a.b, n) && (t.c = null,
                    t.b -= t.a.get(n).length,
                    Ce((t = t.a).b, n) && (delete t.b[n],
                    t.c--,
                    t.a.length > 2 * t.c && Oe(t)))
                }
                function Ze(t, n) {
                    return Ye(t),
                    n = ni(t, n),
                    Ce(t.a.b, n)
                }
                function Qe(t, n, e) {
                    $e(t, n),
                    0 < e.length && (t.c = null,
                    t.a.set(ni(t, n), $(e)),
                    t.b += e.length)
                }
                function ti(t) {
                    var n = new Je;
                    return n.c = t.c,
                    t.a && (n.a = new _e(t.a),
                    n.b = t.b),
                    n
                }
                function ni(t, n) {
                    return n = String(n),
                    t.f && (n = n.toLowerCase()),
                    n
                }
                function ei(t) {
                    var n = [];
                    return function t(n, e, i) {
                        if (null == e)
                            i.push("null");
                        else {
                            if ("object" == typeof e) {
                                if (Array.isArray(e)) {
                                    var r = e;
                                    e = r.length,
                                    i.push("[");
                                    for (var o = "", a = 0; a < e; a++)
                                        i.push(o),
                                        t(n, r[a], i),
                                        o = ",";
                                    return void i.push("]")
                                }
                                if (!(e instanceof String || e instanceof Number || e instanceof Boolean)) {
                                    for (r in i.push("{"),
                                    o = "",
                                    e)
                                        Object.prototype.hasOwnProperty.call(e, r) && ("function" != typeof (a = e[r]) && (i.push(o),
                                        ai(r, i),
                                        i.push(":"),
                                        t(n, a, i),
                                        o = ","));
                                    return void i.push("}")
                                }
                                e = e.valueOf()
                            }
                            switch (typeof e) {
                            case "string":
                                ai(e, i);
                                break;
                            case "number":
                                i.push(isFinite(e) && !isNaN(e) ? String(e) : "null");
                                break;
                            case "boolean":
                                i.push(String(e));
                                break;
                            case "function":
                                i.push("null");
                                break;
                            default:
                                throw Error("Unknown type: " + typeof e)
                            }
                        }
                    }(new ii, t, n),
                    n.join("")
                }
                function ii() {}
                (e = Je.prototype).add = function(t, n) {
                    Ye(this),
                    this.c = null,
                    t = ni(this, t);
                    var e = this.a.get(t);
                    return e || this.a.set(t, e = []),
                    e.push(n),
                    this.b += 1,
                    this
                }
                ,
                e.clear = function() {
                    this.a = this.c = null,
                    this.b = 0
                }
                ,
                e.forEach = function(t, n) {
                    Ye(this),
                    this.a.forEach((function(e, i) {
                        H(e, (function(e) {
                            t.call(n, e, i, this)
                        }
                        ), this)
                    }
                    ), this)
                }
                ,
                e.Y = function() {
                    Ye(this);
                    for (var t = this.a.V(), n = this.a.Y(), e = [], i = 0; i < n.length; i++)
                        for (var r = t[i], o = 0; o < r.length; o++)
                            e.push(n[i]);
                    return e
                }
                ,
                e.V = function(t) {
                    Ye(this);
                    var n = [];
                    if ("string" == typeof t)
                        Ze(this, t) && (n = z(n, this.a.get(ni(this, t))));
                    else {
                        t = this.a.V();
                        for (var e = 0; e < t.length; e++)
                            n = z(n, t[e])
                    }
                    return n
                }
                ,
                e.set = function(t, n) {
                    return Ye(this),
                    this.c = null,
                    Ze(this, t = ni(this, t)) && (this.b -= this.a.get(t).length),
                    this.a.set(t, [n]),
                    this.b += 1,
                    this
                }
                ,
                e.get = function(t, n) {
                    return t && 0 < (t = this.V(t)).length ? String(t[0]) : n
                }
                ,
                e.toString = function() {
                    if (this.c)
                        return this.c;
                    if (!this.a)
                        return "";
                    for (var t = [], n = this.a.Y(), e = 0; e < n.length; e++) {
                        var i = n[e]
                          , r = encodeURIComponent(String(i));
                        i = this.V(i);
                        for (var o = 0; o < i.length; o++) {
                            var a = r;
                            "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))),
                            t.push(a)
                        }
                    }
                    return this.c = t.join("&")
                }
                ;
                var ri = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "/": "\\/",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\v": "\\u000b"
                }
                  , oi = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
                function ai(t, n) {
                    n.push('"', t.replace(oi, (function(t) {
                        var n = ri[t];
                        return n || (n = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1),
                        ri[t] = n),
                        n
                    }
                    )), '"')
                }
                function si() {
                    var t = Si();
                    return Xt && !!en && 11 == en || /Edge\/\d+/.test(t)
                }
                function ui() {
                    return u.window && u.window.location.href || self && self.location && self.location.href || ""
                }
                function ci(t, n) {
                    n = n || u.window;
                    var e = "about:blank";
                    t && (e = Rt(Dt(t))),
                    n.location.href = e
                }
                function hi(t) {
                    return !!((t = (t || Si()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
                }
                function li(t) {
                    t = t || u.window;
                    try {
                        t.close()
                    } catch (n) {}
                }
                function fi(t, n, e) {
                    var i = Math.floor(1e9 * Math.random()).toString();
                    n = n || 500,
                    e = e || 600;
                    var r = (window.screen.availHeight - e) / 2
                      , o = (window.screen.availWidth - n) / 2;
                    for (a in n = {
                        width: n,
                        height: e,
                        top: 0 < r ? r : 0,
                        left: 0 < o ? o : 0,
                        location: !0,
                        resizable: !0,
                        statusbar: !0,
                        toolbar: !1
                    },
                    e = Si().toLowerCase(),
                    i && (n.target = i,
                    st(e, "crios/") && (n.target = "_blank")),
                    Ei(Si()) == Ii && (t = t || "http://localhost",
                    n.scrollbars = !0),
                    e = t || "",
                    (t = n) || (t = {}),
                    i = window,
                    n = e instanceof Ct ? e : Dt(void 0 !== e.href ? e.href : String(e)),
                    e = t.target || e.target,
                    r = [],
                    t)
                        switch (a) {
                        case "width":
                        case "height":
                        case "top":
                        case "left":
                            r.push(a + "=" + t[a]);
                            break;
                        case "target":
                        case "noopener":
                        case "noreferrer":
                            break;
                        default:
                            r.push(a + "=" + (t[a] ? 1 : 0))
                        }
                    var a = r.join(",");
                    if ((lt("iPhone") && !lt("iPod") && !lt("iPad") || lt("iPad") || lt("iPod")) && i.navigator && i.navigator.standalone && e && "_self" != e ? (gt(a = dn(document, "A"), "HTMLAnchorElement"),
                    n instanceof Ct || n instanceof Ct || (n = "object" == typeof n && n.sa ? n.ra() : String(n),
                    Pt.test(n) || (n = "about:invalid#zClosurez"),
                    n = new Ct(xt,n)),
                    a.href = Rt(n),
                    a.setAttribute("target", e),
                    t.noreferrer && a.setAttribute("rel", "noreferrer"),
                    (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1),
                    a.dispatchEvent(t),
                    a = {}) : t.noreferrer ? (a = i.open("", e, a),
                    t = Rt(n),
                    a && (Yt && st(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"),
                    a.opener = null,
                    t = Vt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + qt(t) + '">'),
                    i = a.document) && (i.write(jt(t)),
                    i.close())) : (a = i.open(Rt(n), e, a)) && t.noopener && (a.opener = null),
                    a)
                        try {
                            a.focus()
                        } catch (s) {}
                    return a
                }
                var di = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
                  , pi = /^[^@]+@[^@]+$/;
                function vi() {
                    var t = null;
                    return new In((function(n) {
                        "complete" == u.document.readyState ? n() : (t = function() {
                            n()
                        }
                        ,
                        he(window, "load", t))
                    }
                    )).s((function(n) {
                        throw le(window, "load", t),
                        n
                    }
                    ))
                }
                function mi(t) {
                    return t = t || Si(),
                    !("file:" !== Ri() && "ionic:" !== Ri() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
                }
                function gi() {
                    var t = u.window;
                    try {
                        return !(!t || t == t.top)
                    } catch (n) {
                        return !1
                    }
                }
                function bi() {
                    return void 0 !== u.WorkerGlobalScope && "function" == typeof u.importScripts
                }
                function yi() {
                    return n.a.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : n.a.INTERNAL.hasOwnProperty("node") ? "Node" : bi() ? "Worker" : "Browser"
                }
                function wi() {
                    var t = yi();
                    return "ReactNative" === t || "Node" === t
                }
                var Ii = "Firefox"
                  , Ti = "Chrome";
                function Ei(t) {
                    var n = t.toLowerCase();
                    return st(n, "opera/") || st(n, "opr/") || st(n, "opios/") ? "Opera" : st(n, "iemobile") ? "IEMobile" : st(n, "msie") || st(n, "trident/") ? "IE" : st(n, "edge/") ? "Edge" : st(n, "firefox/") ? Ii : st(n, "silk/") ? "Silk" : st(n, "blackberry") ? "Blackberry" : st(n, "webos") ? "Webos" : !st(n, "safari/") || st(n, "chrome/") || st(n, "crios/") || st(n, "android") ? !st(n, "chrome/") && !st(n, "crios/") || st(n, "edge/") ? st(n, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : Ti : "Safari"
                }
                var Ai = {
                    ld: "FirebaseCore-web",
                    nd: "FirebaseUI-web"
                };
                function ki(t, n) {
                    n = n || [];
                    var e, i = [], r = {};
                    for (e in Ai)
                        r[Ai[e]] = !0;
                    for (e = 0; e < n.length; e++)
                        void 0 !== r[n[e]] && (delete r[n[e]],
                        i.push(n[e]));
                    return i.sort(),
                    (n = i).length || (n = ["FirebaseCore-web"]),
                    "Browser" === (i = yi()) ? i = Ei(r = Si()) : "Worker" === i && (i = Ei(r = Si()) + "-" + i),
                    i + "/JsCore/" + t + "/" + n.join(",")
                }
                function Si() {
                    return u.navigator && u.navigator.userAgent || ""
                }
                function Ni(t, n) {
                    t = t.split("."),
                    n = n || u;
                    for (var e = 0; e < t.length && "object" == typeof n && null != n; e++)
                        n = n[t[e]];
                    return e != t.length && (n = void 0),
                    n
                }
                function _i() {
                    try {
                        var t = u.localStorage
                          , n = Mi();
                        if (t)
                            return t.setItem(n, "1"),
                            t.removeItem(n),
                            !si() || !!u.indexedDB
                    } catch (e) {
                        return bi() && !!u.indexedDB
                    }
                    return !1
                }
                function Oi() {
                    return (Ci() || "chrome-extension:" === Ri() || mi()) && !wi() && _i() && !bi()
                }
                function Ci() {
                    return "http:" === Ri() || "https:" === Ri()
                }
                function Ri() {
                    return u.location && u.location.protocol || null
                }
                function Pi(t) {
                    return !hi(t = t || Si()) && Ei(t) != Ii
                }
                function Di(t) {
                    return void 0 === t ? null : ei(t)
                }
                function Li(t) {
                    var n, e = {};
                    for (n in t)
                        t.hasOwnProperty(n) && null !== t[n] && void 0 !== t[n] && (e[n] = t[n]);
                    return e
                }
                function xi(t) {
                    if (null !== t)
                        return JSON.parse(t)
                }
                function Mi(t) {
                    return t || Math.floor(1e9 * Math.random()).toString()
                }
                function ji(t) {
                    return "Safari" != Ei(t = t || Si()) && !t.toLowerCase().match(/iphone|ipad|ipod/)
                }
                function Ui() {
                    var t = u.___jsl;
                    if (t && t.H)
                        for (var n in t.H)
                            if (t.H[n].r = t.H[n].r || [],
                            t.H[n].L = t.H[n].L || [],
                            t.H[n].r = t.H[n].L.concat(),
                            t.CP)
                                for (var e = 0; e < t.CP.length; e++)
                                    t.CP[e] = null
                }
                function Vi(t, n) {
                    if (t > n)
                        throw Error("Short delay should be less than long delay!");
                    this.a = t,
                    this.c = n,
                    t = Si(),
                    n = yi(),
                    this.b = hi(t) || "ReactNative" === n
                }
                function Fi() {
                    var t = u.document;
                    return !t || void 0 === t.visibilityState || "visible" == t.visibilityState
                }
                function Ki(t) {
                    "undefined" != typeof console && "function" == typeof console.warn && console.warn(t)
                }
                function qi(t) {
                    try {
                        var n = new Date(parseInt(t, 10));
                        if (!isNaN(n.getTime()) && !/[^0-9]/.test(t))
                            return n.toUTCString()
                    } catch (e) {}
                    return null
                }
                function Hi() {
                    return !(!Ni("fireauth.oauthhelper", u) && !Ni("fireauth.iframe", u))
                }
                Vi.prototype.get = function() {
                    var t = u.navigator;
                    return !t || "boolean" != typeof t.onLine || !Ci() && "chrome-extension:" !== Ri() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
                }
                ;
                var Gi, Bi = {};
                function Wi(t) {
                    Bi[t] || (Bi[t] = !0,
                    Ki(t))
                }
                try {
                    var Xi = {};
                    Object.defineProperty(Xi, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 1
                    }),
                    Object.defineProperty(Xi, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 2
                    }),
                    Gi = 2 == Xi.abcd
                } catch (Bt) {
                    Gi = !1
                }
                function Ji(t, n, e) {
                    Gi ? Object.defineProperty(t, n, {
                        configurable: !0,
                        enumerable: !0,
                        value: e
                    }) : t[n] = e
                }
                function Yi(t, n) {
                    if (n)
                        for (var e in n)
                            n.hasOwnProperty(e) && Ji(t, e, n[e])
                }
                function zi(t) {
                    var n = {};
                    return Yi(n, t),
                    n
                }
                function $i(t) {
                    var n = t;
                    if ("object" == typeof t && null != t)
                        for (var e in n = "length"in t ? [] : {},
                        t)
                            Ji(n, e, $i(t[e]));
                    return n
                }
                function Zi(t) {
                    var n = t && (t[ir] ? "phone" : null);
                    if (!(n && t && t[er]))
                        throw new k("internal-error","Internal assert: invalid MultiFactorInfo object");
                    Ji(this, "uid", t[er]),
                    Ji(this, "displayName", t[tr] || null);
                    var e = null;
                    t[nr] && (e = new Date(t[nr]).toUTCString()),
                    Ji(this, "enrollmentTime", e),
                    Ji(this, "factorId", n)
                }
                function Qi(t) {
                    try {
                        var n = new rr(t)
                    } catch (e) {
                        n = null
                    }
                    return n
                }
                Zi.prototype.w = function() {
                    return {
                        uid: this.uid,
                        displayName: this.displayName,
                        factorId: this.factorId,
                        enrollmentTime: this.enrollmentTime
                    }
                }
                ;
                var tr = "displayName"
                  , nr = "enrolledAt"
                  , er = "mfaEnrollmentId"
                  , ir = "phoneInfo";
                function rr(t) {
                    Zi.call(this, t),
                    Ji(this, "phoneNumber", t[ir])
                }
                function or(t) {
                    var n = {}
                      , e = t[cr]
                      , i = t[lr]
                      , r = t[fr];
                    if (t = Qi(t[hr]),
                    !r || r != sr && r != ur && !e || r == ur && !i || r == ar && !t)
                        throw Error("Invalid checkActionCode response!");
                    r == ur ? (n[pr] = e || null,
                    n[mr] = e || null,
                    n[dr] = i) : (n[pr] = i || null,
                    n[mr] = i || null,
                    n[dr] = e || null),
                    n[vr] = t || null,
                    Ji(this, br, r),
                    Ji(this, gr, $i(n))
                }
                A(rr, Zi),
                rr.prototype.w = function() {
                    var t = rr.$a.w.call(this);
                    return t.phoneNumber = this.phoneNumber,
                    t
                }
                ;
                var ar = "REVERT_SECOND_FACTOR_ADDITION"
                  , sr = "EMAIL_SIGNIN"
                  , ur = "VERIFY_AND_CHANGE_EMAIL"
                  , cr = "email"
                  , hr = "mfaInfo"
                  , lr = "newEmail"
                  , fr = "requestType"
                  , dr = "email"
                  , pr = "fromEmail"
                  , vr = "multiFactorInfo"
                  , mr = "previousEmail"
                  , gr = "data"
                  , br = "operation";
                function yr(t) {
                    var n = je(t = Ue(t), wr) || null
                      , e = je(t, Ir) || null
                      , i = je(t, Ar) || null;
                    if (i = i && Sr[i] || null,
                    !n || !e || !i)
                        throw new k("argument-error",wr + ", " + Ir + "and " + Ar + " are required in a valid action code URL.");
                    Yi(this, {
                        apiKey: n,
                        operation: i,
                        code: e,
                        continueUrl: je(t, Tr) || null,
                        languageCode: je(t, Er) || null,
                        tenantId: je(t, kr) || null
                    })
                }
                var wr = "apiKey"
                  , Ir = "oobCode"
                  , Tr = "continueUrl"
                  , Er = "languageCode"
                  , Ar = "mode"
                  , kr = "tenantId"
                  , Sr = {
                    recoverEmail: "RECOVER_EMAIL",
                    resetPassword: "PASSWORD_RESET",
                    revertSecondFactorAddition: ar,
                    signIn: sr,
                    verifyAndChangeEmail: ur,
                    verifyEmail: "VERIFY_EMAIL"
                };
                function Nr(t) {
                    try {
                        return new yr(t)
                    } catch (n) {
                        return null
                    }
                }
                function _r(t) {
                    var n = t[Dr];
                    if (void 0 === n)
                        throw new k("missing-continue-uri");
                    if ("string" != typeof n || "string" == typeof n && !n.length)
                        throw new k("invalid-continue-uri");
                    this.h = n,
                    this.b = this.a = null,
                    this.g = !1;
                    var e = t[Or];
                    if (e && "object" == typeof e) {
                        n = e[Mr];
                        var i = e[Lr];
                        if (e = e[xr],
                        "string" == typeof n && n.length) {
                            if (this.a = n,
                            void 0 !== i && "boolean" != typeof i)
                                throw new k("argument-error",Lr + " property must be a boolean when specified.");
                            if (this.g = !!i,
                            void 0 !== e && ("string" != typeof e || "string" == typeof e && !e.length))
                                throw new k("argument-error",xr + " property must be a non empty string when specified.");
                            this.b = e || null
                        } else {
                            if (void 0 !== n)
                                throw new k("argument-error",Mr + " property must be a non empty string when specified.");
                            if (void 0 !== i || void 0 !== e)
                                throw new k("missing-android-pkg-name")
                        }
                    } else if (void 0 !== e)
                        throw new k("argument-error",Or + " property must be a non null object when specified.");
                    if (this.f = null,
                    (n = t[Pr]) && "object" == typeof n) {
                        if ("string" == typeof (n = n[jr]) && n.length)
                            this.f = n;
                        else if (void 0 !== n)
                            throw new k("argument-error",jr + " property must be a non empty string when specified.")
                    } else if (void 0 !== n)
                        throw new k("argument-error",Pr + " property must be a non null object when specified.");
                    if (void 0 !== (n = t[Rr]) && "boolean" != typeof n)
                        throw new k("argument-error",Rr + " property must be a boolean when specified.");
                    if (this.c = !!n,
                    void 0 !== (t = t[Cr]) && ("string" != typeof t || "string" == typeof t && !t.length))
                        throw new k("argument-error",Cr + " property must be a non empty string when specified.");
                    this.i = t || null
                }
                var Or = "android"
                  , Cr = "dynamicLinkDomain"
                  , Rr = "handleCodeInApp"
                  , Pr = "iOS"
                  , Dr = "url"
                  , Lr = "installApp"
                  , xr = "minimumVersion"
                  , Mr = "packageName"
                  , jr = "bundleId";
                function Ur(t) {
                    var n = {};
                    for (var e in n.continueUrl = t.h,
                    n.canHandleCodeInApp = t.c,
                    (n.androidPackageName = t.a) && (n.androidMinimumVersion = t.b,
                    n.androidInstallApp = t.g),
                    n.iOSBundleId = t.f,
                    n.dynamicLinkDomain = t.i,
                    n)
                        null === n[e] && delete n[e];
                    return n
                }
                var Vr = null;
                function Fr(t) {
                    var n = "";
                    return function(t, n) {
                        function e(n) {
                            for (; i < t.length; ) {
                                var e = t.charAt(i++)
                                  , r = Vr[e];
                                if (null != r)
                                    return r;
                                if (!/^[\s\xa0]*$/.test(e))
                                    throw Error("Unknown base64 encoding at char: " + e)
                            }
                            return n
                        }
                        !function() {
                            if (!Vr) {
                                Vr = {};
                                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++)
                                    for (var i = t.concat(n[e].split("")), r = 0; r < i.length; r++) {
                                        var o = i[r];
                                        void 0 === Vr[o] && (Vr[o] = r)
                                    }
                            }
                        }();
                        for (var i = 0; ; ) {
                            var r = e(-1)
                              , o = e(0)
                              , a = e(64)
                              , s = e(64);
                            if (64 === s && -1 === r)
                                break;
                            n(r << 2 | o >> 4),
                            64 != a && (n(o << 4 & 240 | a >> 2),
                            64 != s && n(a << 6 & 192 | s))
                        }
                    }(t, (function(t) {
                        n += String.fromCharCode(t)
                    }
                    )),
                    n
                }
                function Kr(t) {
                    var n = Hr(t);
                    if (!(n && n.sub && n.iss && n.aud && n.exp))
                        throw Error("Invalid JWT");
                    this.g = t,
                    this.c = n.exp,
                    this.h = n.sub,
                    E(),
                    this.a = n.provider_id || n.firebase && n.firebase.sign_in_provider || null,
                    this.f = n.firebase && n.firebase.tenant || null,
                    this.b = !!n.is_anonymous || "anonymous" == this.a
                }
                function qr(t) {
                    try {
                        return new Kr(t)
                    } catch (n) {
                        return null
                    }
                }
                function Hr(t) {
                    if (!t)
                        return null;
                    if (3 != (t = t.split(".")).length)
                        return null;
                    for (var n = (4 - (t = t[1]).length % 4) % 4, e = 0; e < n; e++)
                        t += ".";
                    try {
                        return JSON.parse(Fr(t))
                    } catch (i) {}
                    return null
                }
                Kr.prototype.S = function() {
                    return this.f
                }
                ,
                Kr.prototype.i = function() {
                    return this.b
                }
                ,
                Kr.prototype.toString = function() {
                    return this.g
                }
                ;
                var Gr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
                  , Br = ["client_id", "response_type", "scope", "redirect_uri", "state"]
                  , Wr = {
                    md: {
                        Ja: "locale",
                        ua: 700,
                        ta: 600,
                        fa: "facebook.com",
                        Wa: Br
                    },
                    od: {
                        Ja: null,
                        ua: 500,
                        ta: 750,
                        fa: "github.com",
                        Wa: Br
                    },
                    pd: {
                        Ja: "hl",
                        ua: 515,
                        ta: 680,
                        fa: "google.com",
                        Wa: Br
                    },
                    vd: {
                        Ja: "lang",
                        ua: 485,
                        ta: 705,
                        fa: "twitter.com",
                        Wa: Gr
                    },
                    jd: {
                        Ja: "locale",
                        ua: 640,
                        ta: 600,
                        fa: "apple.com",
                        Wa: []
                    }
                };
                function Xr(t) {
                    for (var n in Wr)
                        if (Wr[n].fa == t)
                            return Wr[n];
                    return null
                }
                function Jr(t) {
                    var n = {};
                    n["facebook.com"] = Qr,
                    n["google.com"] = no,
                    n["github.com"] = to,
                    n["twitter.com"] = eo;
                    var e = t && t[zr];
                    try {
                        if (e)
                            return n[e] ? new n[e](t) : new Zr(t);
                        if (void 0 !== t[Yr])
                            return new $r(t)
                    } catch (i) {}
                    return null
                }
                var Yr = "idToken"
                  , zr = "providerId";
                function $r(t) {
                    var n = t[zr];
                    if (!n && t[Yr]) {
                        var e = qr(t[Yr]);
                        e && e.a && (n = e.a)
                    }
                    if (!n)
                        throw Error("Invalid additional user info!");
                    "anonymous" != n && "custom" != n || (n = null),
                    e = !1,
                    void 0 !== t.isNewUser ? e = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (e = !0),
                    Ji(this, "providerId", n),
                    Ji(this, "isNewUser", e)
                }
                function Zr(t) {
                    $r.call(this, t),
                    Ji(this, "profile", $i((t = xi(t.rawUserInfo || "{}")) || {}))
                }
                function Qr(t) {
                    if (Zr.call(this, t),
                    "facebook.com" != this.providerId)
                        throw Error("Invalid provider ID!")
                }
                function to(t) {
                    if (Zr.call(this, t),
                    "github.com" != this.providerId)
                        throw Error("Invalid provider ID!");
                    Ji(this, "username", this.profile && this.profile.login || null)
                }
                function no(t) {
                    if (Zr.call(this, t),
                    "google.com" != this.providerId)
                        throw Error("Invalid provider ID!")
                }
                function eo(t) {
                    if (Zr.call(this, t),
                    "twitter.com" != this.providerId)
                        throw Error("Invalid provider ID!");
                    Ji(this, "username", t.screenName || null)
                }
                function io(t) {
                    var n = Ue(t)
                      , e = je(n, "link")
                      , i = je(Ue(e), "link");
                    return n = je(n, "deep_link_id"),
                    je(Ue(n), "link") || n || i || e || t
                }
                function ro(t, n) {
                    if (!t && !n)
                        throw new k("internal-error","Internal assert: no raw session string available");
                    if (t && n)
                        throw new k("internal-error","Internal assert: unable to determine the session type");
                    this.a = t || null,
                    this.b = n || null,
                    this.type = this.a ? oo : ao
                }
                A(Zr, $r),
                A(Qr, Zr),
                A(to, Zr),
                A(no, Zr),
                A(eo, Zr);
                var oo = "enroll"
                  , ao = "signin";
                function so() {}
                function uo(t, n) {
                    return t.then((function(t) {
                        if (t[za]) {
                            var e = qr(t[za]);
                            if (!e || n != e.h)
                                throw new k("user-mismatch");
                            return t
                        }
                        throw new k("user-mismatch")
                    }
                    )).s((function(t) {
                        throw t && t.code && t.code == _ + "user-not-found" ? new k("user-mismatch") : t
                    }
                    ))
                }
                function co(t, n) {
                    if (!n)
                        throw new k("internal-error","failed to construct a credential");
                    this.a = n,
                    Ji(this, "providerId", t),
                    Ji(this, "signInMethod", t)
                }
                function ho(t) {
                    return {
                        pendingToken: t.a,
                        requestUri: "http://localhost"
                    }
                }
                function lo(t) {
                    if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken)
                        try {
                            return new co(t.providerId,t.pendingToken)
                        } catch (n) {}
                    return null
                }
                function fo(t, n, e) {
                    if (this.a = null,
                    n.idToken || n.accessToken)
                        n.idToken && Ji(this, "idToken", n.idToken),
                        n.accessToken && Ji(this, "accessToken", n.accessToken),
                        n.nonce && !n.pendingToken && Ji(this, "nonce", n.nonce),
                        n.pendingToken && (this.a = n.pendingToken);
                    else {
                        if (!n.oauthToken || !n.oauthTokenSecret)
                            throw new k("internal-error","failed to construct a credential");
                        Ji(this, "accessToken", n.oauthToken),
                        Ji(this, "secret", n.oauthTokenSecret)
                    }
                    Ji(this, "providerId", t),
                    Ji(this, "signInMethod", e)
                }
                function po(t) {
                    var n = {};
                    return t.idToken && (n.id_token = t.idToken),
                    t.accessToken && (n.access_token = t.accessToken),
                    t.secret && (n.oauth_token_secret = t.secret),
                    n.providerId = t.providerId,
                    t.nonce && !t.a && (n.nonce = t.nonce),
                    n = {
                        postBody: ze(n).toString(),
                        requestUri: "http://localhost"
                    },
                    t.a && (delete n.postBody,
                    n.pendingToken = t.a),
                    n
                }
                function vo(t) {
                    if (t && t.providerId && t.signInMethod) {
                        var n = {
                            idToken: t.oauthIdToken,
                            accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                            oauthTokenSecret: t.oauthTokenSecret,
                            oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                            nonce: t.nonce,
                            pendingToken: t.pendingToken
                        };
                        try {
                            return new fo(t.providerId,n,t.signInMethod)
                        } catch (e) {}
                    }
                    return null
                }
                function mo(t, n) {
                    this.Pc = n || [],
                    Yi(this, {
                        providerId: t,
                        isOAuthProvider: !0
                    }),
                    this.Hb = {},
                    this.ob = (Xr(t) || {}).Ja || null,
                    this.nb = null
                }
                function go(t) {
                    if ("string" != typeof t || 0 != t.indexOf("saml."))
                        throw new k("argument-error",'SAML provider IDs must be prefixed with "saml."');
                    mo.call(this, t, [])
                }
                function bo(t) {
                    mo.call(this, t, Br),
                    this.a = []
                }
                function yo() {
                    bo.call(this, "facebook.com")
                }
                function wo(t) {
                    if (!t)
                        throw new k("argument-error","credential failed: expected 1 argument (the OAuth access token).");
                    var n = t;
                    return v(t) && (n = t.accessToken),
                    (new yo).credential({
                        accessToken: n
                    })
                }
                function Io() {
                    bo.call(this, "github.com")
                }
                function To(t) {
                    if (!t)
                        throw new k("argument-error","credential failed: expected 1 argument (the OAuth access token).");
                    var n = t;
                    return v(t) && (n = t.accessToken),
                    (new Io).credential({
                        accessToken: n
                    })
                }
                function Eo() {
                    bo.call(this, "google.com"),
                    this.Ca("profile")
                }
                function Ao(t, n) {
                    var e = t;
                    return v(t) && (e = t.idToken,
                    n = t.accessToken),
                    (new Eo).credential({
                        idToken: e,
                        accessToken: n
                    })
                }
                function ko() {
                    mo.call(this, "twitter.com", Gr)
                }
                function So(t, n) {
                    var e = t;
                    if (v(e) || (e = {
                        oauthToken: t,
                        oauthTokenSecret: n
                    }),
                    !e.oauthToken || !e.oauthTokenSecret)
                        throw new k("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");
                    return new fo("twitter.com",e,"twitter.com")
                }
                function No(t, n, e) {
                    this.a = t,
                    this.f = n,
                    Ji(this, "providerId", "password"),
                    Ji(this, "signInMethod", e === Oo.EMAIL_LINK_SIGN_IN_METHOD ? Oo.EMAIL_LINK_SIGN_IN_METHOD : Oo.EMAIL_PASSWORD_SIGN_IN_METHOD)
                }
                function _o(t) {
                    return t && t.email && t.password ? new No(t.email,t.password,t.signInMethod) : null
                }
                function Oo() {
                    Yi(this, {
                        providerId: "password",
                        isOAuthProvider: !1
                    })
                }
                function Co(t, n) {
                    if (!(n = Ro(n)))
                        throw new k("argument-error","Invalid email link!");
                    return new No(t,n.code,Oo.EMAIL_LINK_SIGN_IN_METHOD)
                }
                function Ro(t) {
                    return (t = Nr(t = io(t))) && t.operation === sr ? t : null
                }
                function Po(t) {
                    if (!(t.cb && t.bb || t.La && t.ea))
                        throw new k("internal-error");
                    this.a = t,
                    Ji(this, "providerId", "phone"),
                    this.fa = "phone",
                    Ji(this, "signInMethod", "phone")
                }
                function Do(t) {
                    if (t && "phone" === t.providerId && (t.verificationId && t.verificationCode || t.temporaryProof && t.phoneNumber)) {
                        var n = {};
                        return H(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], (function(e) {
                            t[e] && (n[e] = t[e])
                        }
                        )),
                        new Po(n)
                    }
                    return null
                }
                function Lo(t) {
                    return t.a.La && t.a.ea ? {
                        temporaryProof: t.a.La,
                        phoneNumber: t.a.ea
                    } : {
                        sessionInfo: t.a.cb,
                        code: t.a.bb
                    }
                }
                function xo(t) {
                    try {
                        this.a = t || n.a.auth()
                    } catch (e) {
                        throw new k("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                    }
                    Yi(this, {
                        providerId: "phone",
                        isOAuthProvider: !1
                    })
                }
                function Mo(t, n) {
                    if (!t)
                        throw new k("missing-verification-id");
                    if (!n)
                        throw new k("missing-verification-code");
                    return new Po({
                        cb: t,
                        bb: n
                    })
                }
                function jo(t) {
                    if (t.temporaryProof && t.phoneNumber)
                        return new Po({
                            La: t.temporaryProof,
                            ea: t.phoneNumber
                        });
                    var n = t && t.providerId;
                    if (!n || "password" === n)
                        return null;
                    var e = t && t.oauthAccessToken
                      , i = t && t.oauthTokenSecret
                      , r = t && t.nonce
                      , o = t && t.oauthIdToken
                      , a = t && t.pendingToken;
                    try {
                        switch (n) {
                        case "google.com":
                            return Ao(o, e);
                        case "facebook.com":
                            return wo(e);
                        case "github.com":
                            return To(e);
                        case "twitter.com":
                            return So(e, i);
                        default:
                            return e || i || o || a ? a ? 0 == n.indexOf("saml.") ? new co(n,a) : new fo(n,{
                                pendingToken: a,
                                idToken: t.oauthIdToken,
                                accessToken: t.oauthAccessToken
                            },n) : new bo(n).credential({
                                idToken: o,
                                accessToken: e,
                                rawNonce: r
                            }) : null
                        }
                    } catch (s) {
                        return null
                    }
                }
                function Uo(t) {
                    if (!t.isOAuthProvider)
                        throw new k("invalid-oauth-provider")
                }
                function Vo(t, n, e, i, r, o, a) {
                    if (this.c = t,
                    this.b = n || null,
                    this.g = e || null,
                    this.f = i || null,
                    this.i = o || null,
                    this.h = a || null,
                    this.a = r || null,
                    !this.g && !this.a)
                        throw new k("invalid-auth-event");
                    if (this.g && this.a)
                        throw new k("invalid-auth-event");
                    if (this.g && !this.f)
                        throw new k("invalid-auth-event")
                }
                function Fo(t) {
                    return (t = t || {}).type ? new Vo(t.type,t.eventId,t.urlResponse,t.sessionId,t.error && S(t.error),t.postBody,t.tenantId) : null
                }
                function Ko() {
                    this.b = null,
                    this.a = []
                }
                ro.prototype.Ha = function() {
                    return this.a ? _n(this.a) : _n(this.b)
                }
                ,
                ro.prototype.w = function() {
                    return this.type == oo ? {
                        multiFactorSession: {
                            idToken: this.a
                        }
                    } : {
                        multiFactorSession: {
                            pendingCredential: this.b
                        }
                    }
                }
                ,
                so.prototype.ja = function() {}
                ,
                so.prototype.b = function() {}
                ,
                so.prototype.c = function() {}
                ,
                so.prototype.w = function() {}
                ,
                co.prototype.ja = function(t) {
                    return bs(t, ho(this))
                }
                ,
                co.prototype.b = function(t, n) {
                    var e = ho(this);
                    return e.idToken = n,
                    ys(t, e)
                }
                ,
                co.prototype.c = function(t, n) {
                    return uo(ws(t, ho(this)), n)
                }
                ,
                co.prototype.w = function() {
                    return {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod,
                        pendingToken: this.a
                    }
                }
                ,
                fo.prototype.ja = function(t) {
                    return bs(t, po(this))
                }
                ,
                fo.prototype.b = function(t, n) {
                    var e = po(this);
                    return e.idToken = n,
                    ys(t, e)
                }
                ,
                fo.prototype.c = function(t, n) {
                    return uo(ws(t, po(this)), n)
                }
                ,
                fo.prototype.w = function() {
                    var t = {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod
                    };
                    return this.idToken && (t.oauthIdToken = this.idToken),
                    this.accessToken && (t.oauthAccessToken = this.accessToken),
                    this.secret && (t.oauthTokenSecret = this.secret),
                    this.nonce && (t.nonce = this.nonce),
                    this.a && (t.pendingToken = this.a),
                    t
                }
                ,
                mo.prototype.Ka = function(t) {
                    return this.Hb = pt(t),
                    this
                }
                ,
                A(go, mo),
                A(bo, mo),
                bo.prototype.Ca = function(t) {
                    return X(this.a, t) || this.a.push(t),
                    this
                }
                ,
                bo.prototype.Pb = function() {
                    return $(this.a)
                }
                ,
                bo.prototype.credential = function(t, n) {
                    var e;
                    if (!(e = v(t) ? {
                        idToken: t.idToken || null,
                        accessToken: t.accessToken || null,
                        nonce: t.rawNonce || null
                    } : {
                        idToken: t || null,
                        accessToken: n || null
                    }).idToken && !e.accessToken)
                        throw new k("argument-error","credential failed: must provide the ID token and/or the access token.");
                    return new fo(this.providerId,e,this.providerId)
                }
                ,
                A(yo, bo),
                Ji(yo, "PROVIDER_ID", "facebook.com"),
                Ji(yo, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
                A(Io, bo),
                Ji(Io, "PROVIDER_ID", "github.com"),
                Ji(Io, "GITHUB_SIGN_IN_METHOD", "github.com"),
                A(Eo, bo),
                Ji(Eo, "PROVIDER_ID", "google.com"),
                Ji(Eo, "GOOGLE_SIGN_IN_METHOD", "google.com"),
                A(ko, mo),
                Ji(ko, "PROVIDER_ID", "twitter.com"),
                Ji(ko, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
                No.prototype.ja = function(t) {
                    return this.signInMethod == Oo.EMAIL_LINK_SIGN_IN_METHOD ? nu(t, _s, {
                        email: this.a,
                        oobCode: this.f
                    }) : nu(t, zs, {
                        email: this.a,
                        password: this.f
                    })
                }
                ,
                No.prototype.b = function(t, n) {
                    return this.signInMethod == Oo.EMAIL_LINK_SIGN_IN_METHOD ? nu(t, Os, {
                        idToken: n,
                        email: this.a,
                        oobCode: this.f
                    }) : nu(t, qs, {
                        idToken: n,
                        email: this.a,
                        password: this.f
                    })
                }
                ,
                No.prototype.c = function(t, n) {
                    return uo(this.ja(t), n)
                }
                ,
                No.prototype.w = function() {
                    return {
                        email: this.a,
                        password: this.f,
                        signInMethod: this.signInMethod
                    }
                }
                ,
                Yi(Oo, {
                    PROVIDER_ID: "password"
                }),
                Yi(Oo, {
                    EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
                }),
                Yi(Oo, {
                    EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
                }),
                Po.prototype.ja = function(t) {
                    return t.eb(Lo(this))
                }
                ,
                Po.prototype.b = function(t, n) {
                    var e = Lo(this);
                    return e.idToken = n,
                    nu(t, Zs, e)
                }
                ,
                Po.prototype.c = function(t, n) {
                    var e = Lo(this);
                    return e.operation = "REAUTH",
                    uo(t = nu(t, Qs, e), n)
                }
                ,
                Po.prototype.w = function() {
                    var t = {
                        providerId: "phone"
                    };
                    return this.a.cb && (t.verificationId = this.a.cb),
                    this.a.bb && (t.verificationCode = this.a.bb),
                    this.a.La && (t.temporaryProof = this.a.La),
                    this.a.ea && (t.phoneNumber = this.a.ea),
                    t
                }
                ,
                xo.prototype.eb = function(t, n) {
                    var e = this.a.a;
                    return _n(n.verify()).then((function(i) {
                        if ("string" != typeof i)
                            throw new k("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                        switch (n.type) {
                        case "recaptcha":
                            var r = v(t) ? t.session : null
                              , o = v(t) ? t.phoneNumber : t;
                            return (r && r.type == oo ? r.Ha().then((function(t) {
                                return function(t, n) {
                                    return nu(t, Gs, n).then((function(t) {
                                        return t.phoneSessionInfo.sessionInfo
                                    }
                                    ))
                                }(e, {
                                    idToken: t,
                                    phoneEnrollmentInfo: {
                                        phoneNumber: o,
                                        recaptchaToken: i
                                    }
                                })
                            }
                            )) : r && r.type == ao ? r.Ha().then((function(n) {
                                return function(t, n) {
                                    return nu(t, Bs, n).then((function(t) {
                                        return t.phoneResponseInfo.sessionInfo
                                    }
                                    ))
                                }(e, {
                                    mfaPendingCredential: n,
                                    mfaEnrollmentId: t.multiFactorHint && t.multiFactorHint.uid || t.multiFactorUid,
                                    phoneSignInInfo: {
                                        recaptchaToken: i
                                    }
                                })
                            }
                            )) : function(t, n) {
                                return nu(t, Fs, n)
                            }(e, {
                                phoneNumber: o,
                                recaptchaToken: i
                            })).then((function(t) {
                                return "function" == typeof n.reset && n.reset(),
                                t
                            }
                            ), (function(t) {
                                throw "function" == typeof n.reset && n.reset(),
                                t
                            }
                            ));
                        default:
                            throw new k("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                        }
                    }
                    ))
                }
                ,
                Yi(xo, {
                    PROVIDER_ID: "phone"
                }),
                Yi(xo, {
                    PHONE_SIGN_IN_METHOD: "phone"
                }),
                Vo.prototype.getUid = function() {
                    var t = [];
                    return t.push(this.c),
                    this.b && t.push(this.b),
                    this.f && t.push(this.f),
                    this.h && t.push(this.h),
                    t.join("-")
                }
                ,
                Vo.prototype.S = function() {
                    return this.h
                }
                ,
                Vo.prototype.w = function() {
                    return {
                        type: this.c,
                        eventId: this.b,
                        urlResponse: this.g,
                        sessionId: this.f,
                        postBody: this.i,
                        tenantId: this.h,
                        error: this.a && this.a.w()
                    }
                }
                ;
                var qo, Ho = null;
                function Go(t) {
                    var n = "unauthorized-domain"
                      , e = void 0
                      , i = Ue(t);
                    t = i.a,
                    "chrome-extension" == (i = i.f) ? e = Kt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? e = Kt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : n = "operation-not-supported-in-this-environment",
                    k.call(this, n, e)
                }
                function Bo(t, n, e) {
                    k.call(this, t, e),
                    (t = n || {}).Ib && Ji(this, "email", t.Ib),
                    t.ea && Ji(this, "phoneNumber", t.ea),
                    t.credential && Ji(this, "credential", t.credential),
                    t.Yb && Ji(this, "tenantId", t.Yb)
                }
                function Wo(t) {
                    if (t.code) {
                        var n = t.code || "";
                        0 == n.indexOf(_) && (n = n.substring(_.length));
                        var e = {
                            credential: jo(t),
                            Yb: t.tenantId
                        };
                        if (t.email)
                            e.Ib = t.email;
                        else if (t.phoneNumber)
                            e.ea = t.phoneNumber;
                        else if (!e.credential)
                            return new k(n,t.message || void 0);
                        return new Bo(n,e,t.message)
                    }
                    return null
                }
                function Xo() {}
                function Jo(t) {
                    return t.c || (t.c = t.b())
                }
                function Yo() {}
                function zo(t) {
                    if (!t.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                        for (var n = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e = 0; e < n.length; e++) {
                            var i = n[e];
                            try {
                                return new ActiveXObject(i),
                                t.f = i
                            } catch (r) {}
                        }
                        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                    }
                    return t.f
                }
                function $o() {}
                function Zo() {
                    this.a = new XDomainRequest,
                    this.readyState = 0,
                    this.onreadystatechange = null,
                    this.responseType = this.responseText = this.response = "",
                    this.status = -1,
                    this.statusText = "",
                    this.a.onload = I(this.pc, this),
                    this.a.onerror = I(this.Rb, this),
                    this.a.onprogress = I(this.qc, this),
                    this.a.ontimeout = I(this.uc, this)
                }
                function Qo(t, n) {
                    t.readyState = n,
                    t.onreadystatechange && t.onreadystatechange()
                }
                function ta(t, n, e) {
                    this.reset(t, n, e, void 0, void 0)
                }
                A(Go, k),
                A(Bo, k),
                Bo.prototype.w = function() {
                    var t = {
                        code: this.code,
                        message: this.message
                    };
                    this.email && (t.email = this.email),
                    this.phoneNumber && (t.phoneNumber = this.phoneNumber),
                    this.tenantId && (t.tenantId = this.tenantId);
                    var n = this.credential && this.credential.w();
                    return n && mt(t, n),
                    t
                }
                ,
                Bo.prototype.toJSON = function() {
                    return this.w()
                }
                ,
                Xo.prototype.c = null,
                A(Yo, Xo),
                Yo.prototype.a = function() {
                    var t = zo(this);
                    return t ? new ActiveXObject(t) : new XMLHttpRequest
                }
                ,
                Yo.prototype.b = function() {
                    var t = {};
                    return zo(this) && (t[0] = !0,
                    t[1] = !0),
                    t
                }
                ,
                qo = new Yo,
                A($o, Xo),
                $o.prototype.a = function() {
                    var t = new XMLHttpRequest;
                    if ("withCredentials"in t)
                        return t;
                    if ("undefined" != typeof XDomainRequest)
                        return new Zo;
                    throw Error("Unsupported browser")
                }
                ,
                $o.prototype.b = function() {
                    return {}
                }
                ,
                (e = Zo.prototype).open = function(t, n, e) {
                    if (null != e && !e)
                        throw Error("Only async requests are supported.");
                    this.a.open(t, n)
                }
                ,
                e.send = function(t) {
                    if (t) {
                        if ("string" != typeof t)
                            throw Error("Only string data is supported");
                        this.a.send(t)
                    } else
                        this.a.send()
                }
                ,
                e.abort = function() {
                    this.a.abort()
                }
                ,
                e.setRequestHeader = function() {}
                ,
                e.getResponseHeader = function(t) {
                    return "content-type" == t.toLowerCase() ? this.a.contentType : ""
                }
                ,
                e.pc = function() {
                    this.status = 200,
                    this.response = this.responseText = this.a.responseText,
                    Qo(this, 4)
                }
                ,
                e.Rb = function() {
                    this.status = 500,
                    this.response = this.responseText = "",
                    Qo(this, 4)
                }
                ,
                e.uc = function() {
                    this.Rb()
                }
                ,
                e.qc = function() {
                    this.status = 200,
                    Qo(this, 1)
                }
                ,
                e.getAllResponseHeaders = function() {
                    return "content-type: " + this.a.contentType
                }
                ,
                ta.prototype.a = null;
                function na(t) {
                    this.f = t,
                    this.b = this.c = this.a = null
                }
                function ea(t, n) {
                    this.name = t,
                    this.value = n
                }
                ta.prototype.reset = function(t, n, e, i, r) {
                    "number" == typeof r || 0,
                    i || E(),
                    delete this.a
                }
                ,
                ea.prototype.toString = function() {
                    return this.name
                }
                ;
                var ia = new ea("SEVERE",1e3)
                  , ra = new ea("WARNING",900)
                  , oa = new ea("CONFIG",700)
                  , aa = new ea("FINE",500);
                na.prototype.log = function(t, n, e) {
                    if (t.value >= function t(n) {
                        return n.c ? n.c : n.a ? t(n.a) : (x("Root logger has no level set."),
                        null)
                    }(this).value)
                        for (p(n) && (n = n()),
                        t = new ta(t,String(n),this.f),
                        e && (t.a = e),
                        e = this; e; )
                            e = e.a
                }
                ;
                var sa = {}
                  , ua = null;
                function ca(t) {
                    var n;
                    if (ua || (ua = new na(""),
                    sa[""] = ua,
                    ua.c = oa),
                    !(n = sa[t])) {
                        n = new na(t);
                        var e = t.lastIndexOf(".")
                          , i = t.substr(e + 1);
                        (e = ca(t.substr(0, e))).b || (e.b = {}),
                        e.b[i] = n,
                        n.a = e,
                        sa[t] = n
                    }
                    return n
                }
                function ha(t, n) {
                    t && t.log(aa, n, void 0)
                }
                function la(t) {
                    this.f = t
                }
                function fa(t) {
                    we.call(this),
                    this.o = t,
                    this.readyState = da,
                    this.status = 0,
                    this.responseType = this.responseText = this.response = this.statusText = "",
                    this.onreadystatechange = null,
                    this.i = new Headers,
                    this.b = null,
                    this.m = "GET",
                    this.g = "",
                    this.a = !1,
                    this.h = ca("goog.net.FetchXmlHttp"),
                    this.l = this.c = this.f = null
                }
                A(la, Xo),
                la.prototype.a = function() {
                    return new fa(this.f)
                }
                ,
                la.prototype.b = function(t) {
                    return function() {
                        return t
                    }
                }({}),
                A(fa, we);
                var da = 0;
                function pa(t) {
                    t.c.read().then(t.oc.bind(t)).catch(t.Ta.bind(t))
                }
                function va(t, n) {
                    n && t.f && (t.status = t.f.status,
                    t.statusText = t.f.statusText),
                    t.readyState = 4,
                    t.f = null,
                    t.c = null,
                    t.l = null,
                    ma(t)
                }
                function ma(t) {
                    t.onreadystatechange && t.onreadystatechange.call(t)
                }
                function ga(t) {
                    we.call(this),
                    this.headers = new _e,
                    this.O = t || null,
                    this.c = !1,
                    this.A = this.a = null,
                    this.h = this.P = this.l = "",
                    this.f = this.N = this.i = this.G = !1,
                    this.g = 0,
                    this.o = null,
                    this.m = ba,
                    this.u = this.R = !1
                }
                (e = fa.prototype).open = function(t, n) {
                    if (this.readyState != da)
                        throw this.abort(),
                        Error("Error reopening a connection");
                    this.m = t,
                    this.g = n,
                    this.readyState = 1,
                    ma(this)
                }
                ,
                e.send = function(t) {
                    if (1 != this.readyState)
                        throw this.abort(),
                        Error("need to call open() first. ");
                    this.a = !0;
                    var n = {
                        headers: this.i,
                        method: this.m,
                        credentials: void 0,
                        cache: void 0
                    };
                    t && (n.body = t),
                    this.o.fetch(new Request(this.g,n)).then(this.tc.bind(this), this.Ta.bind(this))
                }
                ,
                e.abort = function() {
                    this.response = this.responseText = "",
                    this.i = new Headers,
                    this.status = 0,
                    this.c && this.c.cancel("Request was aborted."),
                    1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1,
                    va(this, !1)),
                    this.readyState = da
                }
                ,
                e.tc = function(t) {
                    this.a && (this.f = t,
                    this.b || (this.b = t.headers,
                    this.readyState = 2,
                    ma(this)),
                    this.a && (this.readyState = 3,
                    ma(this),
                    this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.rc.bind(this), this.Ta.bind(this)) : void 0 !== u.ReadableStream && "body"in t ? (this.response = this.responseText = "",
                    this.c = t.body.getReader(),
                    this.l = new TextDecoder,
                    pa(this)) : t.text().then(this.sc.bind(this), this.Ta.bind(this)))))
                }
                ,
                e.oc = function(t) {
                    if (this.a) {
                        var n = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                            stream: !t.done
                        });
                        n && (this.response = this.responseText += n),
                        t.done ? va(this, !0) : ma(this),
                        3 == this.readyState && pa(this)
                    }
                }
                ,
                e.sc = function(t) {
                    this.a && (this.response = this.responseText = t,
                    va(this, !0))
                }
                ,
                e.rc = function(t) {
                    this.a && (this.response = t,
                    va(this, !0))
                }
                ,
                e.Ta = function(t) {
                    var n = this.h;
                    n && n.log(ra, "Failed to fetch url " + this.g, t instanceof Error ? t : Error(t)),
                    this.a && va(this, !0)
                }
                ,
                e.setRequestHeader = function(t, n) {
                    this.i.append(t, n)
                }
                ,
                e.getResponseHeader = function(t) {
                    return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.h) && t.log(ra, "Attempting to get response header but no headers have been received for url: " + this.g, void 0),
                    "")
                }
                ,
                e.getAllResponseHeaders = function() {
                    if (!this.b) {
                        var t = this.h;
                        return t && t.log(ra, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0),
                        ""
                    }
                    t = [];
                    for (var n = this.b.entries(), e = n.next(); !e.done; )
                        e = e.value,
                        t.push(e[0] + ": " + e[1]),
                        e = n.next();
                    return t.join("\r\n")
                }
                ,
                A(ga, we);
                var ba = "";
                ga.prototype.b = ca("goog.net.XhrIo");
                var ya = /^https?$/i
                  , wa = ["POST", "PUT"];
                function Ia(t, n, e, i, r) {
                    if (t.a)
                        throw Error("[goog.net.XhrIo] Object is active with another request=" + t.l + "; newUri=" + n);
                    e = e ? e.toUpperCase() : "GET",
                    t.l = n,
                    t.h = "",
                    t.P = e,
                    t.G = !1,
                    t.c = !0,
                    t.a = t.O ? t.O.a() : qo.a(),
                    t.A = t.O ? Jo(t.O) : Jo(qo),
                    t.a.onreadystatechange = I(t.Ub, t);
                    try {
                        ha(t.b, Ca(t, "Opening Xhr")),
                        t.N = !0,
                        t.a.open(e, String(n), !0),
                        t.N = !1
                    } catch (a) {
                        return ha(t.b, Ca(t, "Error opening Xhr: " + a.message)),
                        void Ea(t, a)
                    }
                    n = i || "";
                    var o = new _e(t.headers);
                    r && function(t, n) {
                        if (t.forEach && "function" == typeof t.forEach)
                            t.forEach(n, void 0);
                        else if (d(t) || "string" == typeof t)
                            H(t, n, void 0);
                        else
                            for (var e = Ne(t), i = Se(t), r = i.length, o = 0; o < r; o++)
                                n.call(void 0, i[o], e && e[o], t)
                    }(r, (function(t, n) {
                        o.set(n, t)
                    }
                    )),
                    r = function(t) {
                        t: {
                            for (var n = Ta, e = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < e; r++)
                                if (r in i && n.call(void 0, i[r], r, t)) {
                                    n = r;
                                    break t
                                }
                            n = -1
                        }
                        return 0 > n ? null : "string" == typeof t ? t.charAt(n) : t[n]
                    }(o.Y()),
                    i = u.FormData && n instanceof u.FormData,
                    !X(wa, e) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
                    o.forEach((function(t, n) {
                        this.a.setRequestHeader(n, t)
                    }
                    ), t),
                    t.m && (t.a.responseType = t.m),
                    "withCredentials"in t.a && t.a.withCredentials !== t.R && (t.a.withCredentials = t.R);
                    try {
                        Na(t),
                        0 < t.g && (t.u = function(t) {
                            return Xt && on(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout
                        }(t.a),
                        ha(t.b, Ca(t, "Will abort after " + t.g + "ms if incomplete, xhr2 " + t.u)),
                        t.u ? (t.a.timeout = t.g,
                        t.a.ontimeout = I(t.Ma, t)) : t.o = Ae(t.Ma, t.g, t)),
                        ha(t.b, Ca(t, "Sending request")),
                        t.i = !0,
                        t.a.send(n),
                        t.i = !1
                    } catch (a) {
                        ha(t.b, Ca(t, "Send error: " + a.message)),
                        Ea(t, a)
                    }
                }
                function Ta(t) {
                    return "content-type" == t.toLowerCase()
                }
                function Ea(t, n) {
                    t.c = !1,
                    t.a && (t.f = !0,
                    t.a.abort(),
                    t.f = !1),
                    t.h = n,
                    Aa(t),
                    Sa(t)
                }
                function Aa(t) {
                    t.G || (t.G = !0,
                    t.dispatchEvent("complete"),
                    t.dispatchEvent("error"))
                }
                function ka(t) {
                    if (t.c && void 0 !== s)
                        if (t.A[1] && 4 == _a(t) && 2 == Oa(t))
                            ha(t.b, Ca(t, "Local request error detected and ignored"));
                        else if (t.i && 4 == _a(t))
                            Ae(t.Ub, 0, t);
                        else if (t.dispatchEvent("readystatechange"),
                        4 == _a(t)) {
                            ha(t.b, Ca(t, "Request complete")),
                            t.c = !1;
                            try {
                                var n, e = Oa(t);
                                t: switch (e) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var i = !0;
                                    break t;
                                default:
                                    i = !1
                                }
                                if (!(n = i)) {
                                    var r;
                                    if (r = 0 === e) {
                                        var o = String(t.l).match(Re)[1] || null;
                                        if (!o && u.self && u.self.location) {
                                            var a = u.self.location.protocol;
                                            o = a.substr(0, a.length - 1)
                                        }
                                        r = !ya.test(o ? o.toLowerCase() : "")
                                    }
                                    n = r
                                }
                                if (n)
                                    t.dispatchEvent("complete"),
                                    t.dispatchEvent("success");
                                else {
                                    try {
                                        var c = 2 < _a(t) ? t.a.statusText : ""
                                    } catch (h) {
                                        ha(t.b, "Can not get status: " + h.message),
                                        c = ""
                                    }
                                    t.h = c + " [" + Oa(t) + "]",
                                    Aa(t)
                                }
                            } finally {
                                Sa(t)
                            }
                        }
                }
                function Sa(t, n) {
                    if (t.a) {
                        Na(t);
                        var e = t.a
                          , i = t.A[0] ? l : null;
                        t.a = null,
                        t.A = null,
                        n || t.dispatchEvent("ready");
                        try {
                            e.onreadystatechange = i
                        } catch (r) {
                            (t = t.b) && t.log(ia, "Problem encountered resetting onreadystatechange: " + r.message, void 0)
                        }
                    }
                }
                function Na(t) {
                    t.a && t.u && (t.a.ontimeout = null),
                    t.o && (u.clearTimeout(t.o),
                    t.o = null)
                }
                function _a(t) {
                    return t.a ? t.a.readyState : 0
                }
                function Oa(t) {
                    try {
                        return 2 < _a(t) ? t.a.status : -1
                    } catch (n) {
                        return -1
                    }
                }
                function Ca(t, n) {
                    return n + " [" + t.P + " " + t.l + " " + Oa(t) + "]"
                }
                function Ra(t) {
                    var n = qa;
                    this.g = [],
                    this.u = n,
                    this.o = t || null,
                    this.f = this.a = !1,
                    this.c = void 0,
                    this.m = this.A = this.i = !1,
                    this.h = 0,
                    this.b = null,
                    this.l = 0
                }
                function Pa(t, n, e) {
                    t.a = !0,
                    t.c = e,
                    t.f = !n,
                    Ma(t)
                }
                function Da(t) {
                    if (t.a) {
                        if (!t.m)
                            throw new ja(t);
                        t.m = !1
                    }
                }
                function La(t, n, e, i) {
                    t.g.push([n, e, i]),
                    t.a && Ma(t)
                }
                function xa(t) {
                    return W(t.g, (function(t) {
                        return p(t[1])
                    }
                    ))
                }
                function Ma(t) {
                    if (t.h && t.a && xa(t)) {
                        var n = t.h
                          , e = Fa[n];
                        e && (u.clearTimeout(e.a),
                        delete Fa[n]),
                        t.h = 0
                    }
                    t.b && (t.b.l--,
                    delete t.b),
                    n = t.c;
                    for (var i = e = !1; t.g.length && !t.i; ) {
                        var r = t.g.shift()
                          , o = r[0]
                          , a = r[1];
                        if (r = r[2],
                        o = t.f ? a : o)
                            try {
                                var s = o.call(r || t.o, n);
                                void 0 !== s && (t.f = t.f && (s == n || s instanceof Error),
                                t.c = n = s),
                                (P(n) || "function" == typeof u.Promise && n instanceof u.Promise) && (i = !0,
                                t.i = !0)
                            } catch (c) {
                                n = c,
                                t.f = !0,
                                xa(t) || (e = !0)
                            }
                    }
                    t.c = n,
                    i && (s = I(t.v, t, !0),
                    i = I(t.v, t, !1),
                    n instanceof Ra ? (La(n, s, i),
                    n.A = !0) : n.then(s, i)),
                    e && (n = new Va(n),
                    Fa[n.a] = n,
                    t.h = n.a)
                }
                function ja() {
                    D.call(this)
                }
                function Ua() {
                    D.call(this)
                }
                function Va(t) {
                    this.a = u.setTimeout(I(this.c, this), 0),
                    this.b = t
                }
                (e = ga.prototype).Ma = function() {
                    void 0 !== s && this.a && (this.h = "Timed out after " + this.g + "ms, aborting",
                    ha(this.b, Ca(this, this.h)),
                    this.dispatchEvent("timeout"),
                    this.abort(8))
                }
                ,
                e.abort = function() {
                    this.a && this.c && (ha(this.b, Ca(this, "Aborting")),
                    this.c = !1,
                    this.f = !0,
                    this.a.abort(),
                    this.f = !1,
                    this.dispatchEvent("complete"),
                    this.dispatchEvent("abort"),
                    Sa(this))
                }
                ,
                e.Da = function() {
                    this.a && (this.c && (this.c = !1,
                    this.f = !0,
                    this.a.abort(),
                    this.f = !1),
                    Sa(this, !0)),
                    ga.$a.Da.call(this)
                }
                ,
                e.Ub = function() {
                    this.xa || (this.N || this.i || this.f ? ka(this) : this.Ic())
                }
                ,
                e.Ic = function() {
                    ka(this)
                }
                ,
                e.getResponse = function() {
                    try {
                        if (!this.a)
                            return null;
                        if ("response"in this.a)
                            return this.a.response;
                        switch (this.m) {
                        case ba:
                        case "text":
                            return this.a.responseText;
                        case "arraybuffer":
                            if ("mozResponseArrayBuffer"in this.a)
                                return this.a.mozResponseArrayBuffer
                        }
                        var t = this.b;
                        return t && t.log(ia, "Response type " + this.m + " is not supported on this browser", void 0),
                        null
                    } catch (n) {
                        return ha(this.b, "Can not get response: " + n.message),
                        null
                    }
                }
                ,
                Ra.prototype.cancel = function(t) {
                    if (this.a)
                        this.c instanceof Ra && this.c.cancel();
                    else {
                        if (this.b) {
                            var n = this.b;
                            delete this.b,
                            t ? n.cancel(t) : (n.l--,
                            0 >= n.l && n.cancel())
                        }
                        this.u ? this.u.call(this.o, this) : this.m = !0,
                        this.a || (t = new Ua(this),
                        Da(this),
                        Pa(this, !1, t))
                    }
                }
                ,
                Ra.prototype.v = function(t, n) {
                    this.i = !1,
                    Pa(this, t, n)
                }
                ,
                Ra.prototype.then = function(t, n, e) {
                    var i, r, o = new In((function(t, n) {
                        i = t,
                        r = n
                    }
                    ));
                    return La(this, i, (function(t) {
                        t instanceof Ua ? o.cancel() : r(t)
                    }
                    )),
                    o.then(t, n, e)
                }
                ,
                Ra.prototype.$goog_Thenable = !0,
                A(ja, D),
                ja.prototype.message = "Deferred has already fired",
                ja.prototype.name = "AlreadyCalledError",
                A(Ua, D),
                Ua.prototype.message = "Deferred was canceled",
                Ua.prototype.name = "CanceledError",
                Va.prototype.c = function() {
                    throw delete Fa[this.a],
                    this.b
                }
                ;
                var Fa = {};
                function Ka(t) {
                    var n = {}
                      , e = n.document || document
                      , i = At(t).toString()
                      , r = dn(document, "SCRIPT")
                      , o = {
                        Vb: r,
                        Ma: void 0
                    }
                      , a = new Ra(o)
                      , s = null
                      , l = null != n.timeout ? n.timeout : 5e3;
                    return 0 < l && (s = window.setTimeout((function() {
                        Ha(r, !0);
                        var t = new Wa(Ba,"Timeout reached for loading script " + i);
                        Da(a),
                        Pa(a, !1, t)
                    }
                    ), l),
                    o.Ma = s),
                    r.onload = r.onreadystatechange = function() {
                        r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (Ha(r, n.wd || !1, s),
                        Da(a),
                        Pa(a, !0, null))
                    }
                    ,
                    r.onerror = function() {
                        Ha(r, !0, s);
                        var t = new Wa(Ga,"Error while loading script " + i);
                        Da(a),
                        Pa(a, !1, t)
                    }
                    ,
                    mt(o = n.attributes || {}, {
                        type: "text/javascript",
                        charset: "UTF-8"
                    }),
                    un(r, o),
                    function(t, n) {
                        gt(t, "HTMLScriptElement"),
                        t.src = At(n),
                        null === h && (h = (n = (n = u.document).querySelector && n.querySelector("script[nonce]")) && (n = n.nonce || n.getAttribute("nonce")) && c.test(n) ? n : ""),
                        (n = h) && t.setAttribute("nonce", n)
                    }(r, t),
                    function(t) {
                        var n;
                        return (n = (t || document).getElementsByTagName("HEAD")) && 0 != n.length ? n[0] : t.documentElement
                    }(e).appendChild(r),
                    a
                }
                function qa() {
                    if (this && this.Vb) {
                        var t = this.Vb;
                        t && "SCRIPT" == t.tagName && Ha(t, !0, this.Ma)
                    }
                }
                function Ha(t, n, e) {
                    null != e && u.clearTimeout(e),
                    t.onload = l,
                    t.onerror = l,
                    t.onreadystatechange = l,
                    n && window.setTimeout((function() {
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }
                    ), 0)
                }
                var Ga = 0
                  , Ba = 1;
                function Wa(t, n) {
                    var e = "Jsloader error (code #" + t + ")";
                    n && (e += ": " + n),
                    D.call(this, e),
                    this.code = t
                }
                function Xa(t) {
                    this.f = t
                }
                function Ja(t, e, i) {
                    if (this.c = t,
                    t = e || {},
                    this.l = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token",
                    this.v = t.secureTokenTimeout || $a,
                    this.g = pt(t.secureTokenHeaders || Za),
                    this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                    this.i = t.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/",
                    this.m = t.firebaseTimeout || Qa,
                    this.a = pt(t.firebaseHeaders || ts),
                    i && (this.a["X-Client-Version"] = i,
                    this.g["X-Client-Version"] = i),
                    i = "Node" == yi(),
                    !(i = u.XMLHttpRequest || i && n.a.INTERNAL.node && n.a.INTERNAL.node.XMLHttpRequest) && !bi())
                        throw new k("internal-error","The XMLHttpRequest compatibility library was not found.");
                    this.f = void 0,
                    bi() ? this.f = new la(self) : wi() ? this.f = new Xa(i) : this.f = new $o,
                    this.b = null
                }
                A(Wa, D),
                A(Xa, Xo),
                Xa.prototype.a = function() {
                    return new this.f
                }
                ,
                Xa.prototype.b = function() {
                    return {}
                }
                ;
                var Ya, za = "idToken", $a = new Vi(3e4,6e4), Za = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }, Qa = new Vi(3e4,6e4), ts = {
                    "Content-Type": "application/json"
                };
                function ns(t, n) {
                    n ? t.a["X-Firebase-Locale"] = n : delete t.a["X-Firebase-Locale"]
                }
                function es(t, n) {
                    n && (t.l = is("https://securetoken.googleapis.com/v1/token", n),
                    t.h = is("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", n),
                    t.i = is("https://identitytoolkit.googleapis.com/v2/", n))
                }
                function is(t, n) {
                    return t = Ue(t),
                    n = Ue(n.url),
                    t.c = t.a + t.c,
                    De(t, n.f),
                    t.a = n.a,
                    Le(t, n.g),
                    t.toString()
                }
                function rs(t, n) {
                    n ? (t.a["X-Client-Version"] = n,
                    t.g["X-Client-Version"] = n) : (delete t.a["X-Client-Version"],
                    delete t.g["X-Client-Version"])
                }
                function os(t, n, e, i, r, o, a) {
                    (function() {
                        var t = Si();
                        return !((t = Ei(t) != Ti ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && 30 > t) && (!Xt || !en || 9 < en)
                    }
                    )() || bi() ? t = I(t.u, t) : (Ya || (Ya = new In((function(t, n) {
                        !function(t, n) {
                            if (((window.gapi || {}).client || {}).request)
                                t();
                            else {
                                u[ss] = function() {
                                    ((window.gapi || {}).client || {}).request ? t() : n(Error("CORS_UNSUPPORTED"))
                                }
                                ,
                                function(t, n) {
                                    La(t, null, n, void 0)
                                }(Ka(kt(as, {
                                    onload: ss
                                })), (function() {
                                    n(Error("CORS_UNSUPPORTED"))
                                }
                                ))
                            }
                        }(t, n)
                    }
                    ))),
                    t = I(t.o, t)),
                    t(n, e, i, r, o, a)
                }
                Ja.prototype.S = function() {
                    return this.b
                }
                ,
                Ja.prototype.u = function(t, n, e, i, r, o) {
                    if (bi() && (void 0 === u.fetch || void 0 === u.Headers || void 0 === u.Request))
                        throw new k("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                    var a = new ga(this.f);
                    if (o) {
                        a.g = Math.max(0, o);
                        var s = setTimeout((function() {
                            a.dispatchEvent("timeout")
                        }
                        ), o)
                    }
                    Ie(a, "complete", (function() {
                        s && clearTimeout(s);
                        var t = null;
                        try {
                            t = JSON.parse(function(t) {
                                try {
                                    return t.a ? t.a.responseText : ""
                                } catch (n) {
                                    return ha(t.b, "Can not get responseText: " + n.message),
                                    ""
                                }
                            }(this)) || null
                        } catch (e) {
                            t = null
                        }
                        n && n(t)
                    }
                    )),
                    Te(a, "ready", (function() {
                        s && clearTimeout(s),
                        Bn(this)
                    }
                    )),
                    Te(a, "timeout", (function() {
                        s && clearTimeout(s),
                        Bn(this),
                        n && n(null)
                    }
                    )),
                    Ia(a, t, e, i, r)
                }
                ;
                var as = new bt(It,"https://apis.google.com/js/client.js?onload=%{onload}")
                  , ss = "__fcb" + Math.floor(1e6 * Math.random()).toString();
                function us(t, n, e, i, r, o, a) {
                    var s = Ue(n + e);
                    Me(s, "key", t.c),
                    a && Me(s, "cb", E().toString());
                    var u = "GET" == i;
                    if (u)
                        for (var c in r)
                            r.hasOwnProperty(c) && Me(s, c, r[c]);
                    return new In((function(n, e) {
                        os(t, s.toString(), (function(t) {
                            t ? t.error ? e(iu(t, o || {})) : n(t) : e(new k("network-request-failed"))
                        }
                        ), i, u ? void 0 : ei(Li(r)), t.a, t.m.get())
                    }
                    ))
                }
                function cs(t) {
                    if ("string" != typeof (t = t.email) || !pi.test(t))
                        throw new k("invalid-email")
                }
                function hs(t) {
                    "email"in t && cs(t)
                }
                function ls(t) {
                    if (!t[za]) {
                        if (t.mfaPendingCredential)
                            throw new k("multi-factor-auth-required",null,pt(t));
                        throw new k("internal-error")
                    }
                }
                function fs(t) {
                    if (t.phoneNumber || t.temporaryProof) {
                        if (!t.phoneNumber || !t.temporaryProof)
                            throw new k("internal-error")
                    } else {
                        if (!t.sessionInfo)
                            throw new k("missing-verification-id");
                        if (!t.code)
                            throw new k("missing-verification-code")
                    }
                }
                Ja.prototype.o = function(t, n, e, i, r) {
                    var o = this;
                    Ya.then((function() {
                        window.gapi.client.setApiKey(o.c);
                        var a = window.gapi.auth.getToken();
                        window.gapi.auth.setToken(null),
                        window.gapi.client.request({
                            path: t,
                            method: e,
                            body: i,
                            headers: r,
                            authType: "none",
                            callback: function(t) {
                                window.gapi.auth.setToken(a),
                                n && n(t)
                            }
                        })
                    }
                    )).s((function(t) {
                        n && n({
                            error: {
                                message: t && t.message || "CORS_UNSUPPORTED"
                            }
                        })
                    }
                    ))
                }
                ,
                Ja.prototype.yb = function() {
                    return nu(this, Hs, {})
                }
                ,
                Ja.prototype.Ab = function(t, n) {
                    return nu(this, Ks, {
                        idToken: t,
                        email: n
                    })
                }
                ,
                Ja.prototype.Bb = function(t, n) {
                    return nu(this, qs, {
                        idToken: t,
                        password: n
                    })
                }
                ;
                var ds = {
                    displayName: "DISPLAY_NAME",
                    photoUrl: "PHOTO_URL"
                };
                function ps(t) {
                    if (!t.phoneVerificationInfo)
                        throw new k("internal-error");
                    if (!t.phoneVerificationInfo.sessionInfo)
                        throw new k("missing-verification-id");
                    if (!t.phoneVerificationInfo.code)
                        throw new k("missing-verification-code")
                }
                function vs(t) {
                    if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken)
                        throw new k("internal-error")
                }
                function ms(t, n) {
                    return n.oauthIdToken && n.providerId && 0 == n.providerId.indexOf("oidc.") && !n.pendingToken && (t.sessionId ? n.nonce = t.sessionId : t.postBody && (Ze(t = new Je(t.postBody), "nonce") && (n.nonce = t.get("nonce")))),
                    n
                }
                function gs(t) {
                    var n = null;
                    if (t.needConfirmation ? (t.code = "account-exists-with-different-credential",
                    n = Wo(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use",
                    n = Wo(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use",
                    n = Wo(t)) : t.errorMessage && (n = eu(t.errorMessage)),
                    n)
                        throw n;
                    ls(t)
                }
                function bs(t, n) {
                    return n.returnIdpCredential = !0,
                    nu(t, Ws, n)
                }
                function ys(t, n) {
                    return n.returnIdpCredential = !0,
                    nu(t, Js, n)
                }
                function ws(t, n) {
                    return n.returnIdpCredential = !0,
                    n.autoCreate = !1,
                    nu(t, Xs, n)
                }
                function Is(t) {
                    if (!t.oobCode)
                        throw new k("invalid-action-code")
                }
                (e = Ja.prototype).Cb = function(t, n) {
                    var e = {
                        idToken: t
                    }
                      , i = [];
                    return ft(ds, (function(t, r) {
                        var o = n[r];
                        null === o ? i.push(t) : r in n && (e[r] = o)
                    }
                    )),
                    i.length && (e.deleteAttribute = i),
                    nu(this, Ks, e)
                }
                ,
                e.ub = function(t, n) {
                    return mt(t = {
                        requestType: "PASSWORD_RESET",
                        email: t
                    }, n),
                    nu(this, Ms, t)
                }
                ,
                e.vb = function(t, n) {
                    return mt(t = {
                        requestType: "EMAIL_SIGNIN",
                        email: t
                    }, n),
                    nu(this, Ds, t)
                }
                ,
                e.tb = function(t, n) {
                    return mt(t = {
                        requestType: "VERIFY_EMAIL",
                        idToken: t
                    }, n),
                    nu(this, Ls, t)
                }
                ,
                e.Db = function(t, n, e) {
                    return mt(t = {
                        requestType: "VERIFY_AND_CHANGE_EMAIL",
                        idToken: t,
                        newEmail: n
                    }, e),
                    nu(this, xs, t)
                }
                ,
                e.eb = function(t) {
                    return nu(this, $s, t)
                }
                ,
                e.mb = function(t, n) {
                    return nu(this, Vs, {
                        oobCode: t,
                        newPassword: n
                    })
                }
                ,
                e.Qa = function(t) {
                    return nu(this, Es, {
                        oobCode: t
                    })
                }
                ,
                e.ib = function(t) {
                    return nu(this, Ts, {
                        oobCode: t
                    })
                }
                ;
                var Ts = {
                    endpoint: "setAccountInfo",
                    B: Is,
                    Z: "email",
                    C: !0
                }
                  , Es = {
                    endpoint: "resetPassword",
                    B: Is,
                    F: function(t) {
                        var n = t.requestType;
                        if (!n || !t.email && "EMAIL_SIGNIN" != n && "VERIFY_AND_CHANGE_EMAIL" != n)
                            throw new k("internal-error")
                    },
                    C: !0
                }
                  , As = {
                    endpoint: "signupNewUser",
                    B: function(t) {
                        if (cs(t),
                        !t.password)
                            throw new k("weak-password")
                    },
                    F: ls,
                    U: !0,
                    C: !0
                }
                  , ks = {
                    endpoint: "createAuthUri",
                    C: !0
                }
                  , Ss = {
                    endpoint: "deleteAccount",
                    M: ["idToken"]
                }
                  , Ns = {
                    endpoint: "setAccountInfo",
                    M: ["idToken", "deleteProvider"],
                    B: function(t) {
                        if ("array" != f(t.deleteProvider))
                            throw new k("internal-error")
                    }
                }
                  , _s = {
                    endpoint: "emailLinkSignin",
                    M: ["email", "oobCode"],
                    B: cs,
                    F: ls,
                    U: !0,
                    C: !0
                }
                  , Os = {
                    endpoint: "emailLinkSignin",
                    M: ["idToken", "email", "oobCode"],
                    B: cs,
                    F: ls,
                    U: !0
                }
                  , Cs = {
                    endpoint: "accounts/mfaEnrollment:finalize",
                    M: ["idToken", "phoneVerificationInfo"],
                    B: ps,
                    F: ls,
                    C: !0,
                    Na: !0
                }
                  , Rs = {
                    endpoint: "accounts/mfaSignIn:finalize",
                    M: ["mfaPendingCredential", "phoneVerificationInfo"],
                    B: ps,
                    F: ls,
                    C: !0,
                    Na: !0
                }
                  , Ps = {
                    endpoint: "getAccountInfo"
                }
                  , Ds = {
                    endpoint: "getOobConfirmationCode",
                    M: ["requestType"],
                    B: function(t) {
                        if ("EMAIL_SIGNIN" != t.requestType)
                            throw new k("internal-error");
                        cs(t)
                    },
                    Z: "email",
                    C: !0
                }
                  , Ls = {
                    endpoint: "getOobConfirmationCode",
                    M: ["idToken", "requestType"],
                    B: function(t) {
                        if ("VERIFY_EMAIL" != t.requestType)
                            throw new k("internal-error")
                    },
                    Z: "email",
                    C: !0
                }
                  , xs = {
                    endpoint: "getOobConfirmationCode",
                    M: ["idToken", "newEmail", "requestType"],
                    B: function(t) {
                        if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType)
                            throw new k("internal-error")
                    },
                    Z: "email",
                    C: !0
                }
                  , Ms = {
                    endpoint: "getOobConfirmationCode",
                    M: ["requestType"],
                    B: function(t) {
                        if ("PASSWORD_RESET" != t.requestType)
                            throw new k("internal-error");
                        cs(t)
                    },
                    Z: "email",
                    C: !0
                }
                  , js = {
                    kb: !0,
                    endpoint: "getProjectConfig",
                    Tb: "GET"
                }
                  , Us = {
                    kb: !0,
                    endpoint: "getRecaptchaParam",
                    Tb: "GET",
                    F: function(t) {
                        if (!t.recaptchaSiteKey)
                            throw new k("internal-error")
                    }
                }
                  , Vs = {
                    endpoint: "resetPassword",
                    B: Is,
                    Z: "email",
                    C: !0
                }
                  , Fs = {
                    endpoint: "sendVerificationCode",
                    M: ["phoneNumber", "recaptchaToken"],
                    Z: "sessionInfo",
                    C: !0
                }
                  , Ks = {
                    endpoint: "setAccountInfo",
                    M: ["idToken"],
                    B: hs,
                    U: !0
                }
                  , qs = {
                    endpoint: "setAccountInfo",
                    M: ["idToken"],
                    B: function(t) {
                        if (hs(t),
                        !t.password)
                            throw new k("weak-password")
                    },
                    F: ls,
                    U: !0
                }
                  , Hs = {
                    endpoint: "signupNewUser",
                    F: ls,
                    U: !0,
                    C: !0
                }
                  , Gs = {
                    endpoint: "accounts/mfaEnrollment:start",
                    M: ["idToken", "phoneEnrollmentInfo"],
                    B: function(t) {
                        if (!t.phoneEnrollmentInfo)
                            throw new k("internal-error");
                        if (!t.phoneEnrollmentInfo.phoneNumber)
                            throw new k("missing-phone-number");
                        if (!t.phoneEnrollmentInfo.recaptchaToken)
                            throw new k("missing-app-credential")
                    },
                    F: function(t) {
                        if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
                            throw new k("internal-error")
                    },
                    C: !0,
                    Na: !0
                }
                  , Bs = {
                    endpoint: "accounts/mfaSignIn:start",
                    M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
                    B: function(t) {
                        if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
                            throw new k("missing-app-credential")
                    },
                    F: function(t) {
                        if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
                            throw new k("internal-error")
                    },
                    C: !0,
                    Na: !0
                }
                  , Ws = {
                    endpoint: "verifyAssertion",
                    B: vs,
                    Xa: ms,
                    F: gs,
                    U: !0,
                    C: !0
                }
                  , Xs = {
                    endpoint: "verifyAssertion",
                    B: vs,
                    Xa: ms,
                    F: function(t) {
                        if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage)
                            throw new k("user-not-found");
                        if (t.errorMessage)
                            throw eu(t.errorMessage);
                        ls(t)
                    },
                    U: !0,
                    C: !0
                }
                  , Js = {
                    endpoint: "verifyAssertion",
                    B: function(t) {
                        if (vs(t),
                        !t.idToken)
                            throw new k("internal-error")
                    },
                    Xa: ms,
                    F: gs,
                    U: !0
                }
                  , Ys = {
                    endpoint: "verifyCustomToken",
                    B: function(t) {
                        if (!t.token)
                            throw new k("invalid-custom-token")
                    },
                    F: ls,
                    U: !0,
                    C: !0
                }
                  , zs = {
                    endpoint: "verifyPassword",
                    B: function(t) {
                        if (cs(t),
                        !t.password)
                            throw new k("wrong-password")
                    },
                    F: ls,
                    U: !0,
                    C: !0
                }
                  , $s = {
                    endpoint: "verifyPhoneNumber",
                    B: fs,
                    F: ls,
                    C: !0
                }
                  , Zs = {
                    endpoint: "verifyPhoneNumber",
                    B: function(t) {
                        if (!t.idToken)
                            throw new k("internal-error");
                        fs(t)
                    },
                    F: function(t) {
                        if (t.temporaryProof)
                            throw t.code = "credential-already-in-use",
                            Wo(t);
                        ls(t)
                    }
                }
                  , Qs = {
                    Gb: {
                        USER_NOT_FOUND: "user-not-found"
                    },
                    endpoint: "verifyPhoneNumber",
                    B: fs,
                    F: ls,
                    C: !0
                }
                  , tu = {
                    endpoint: "accounts/mfaEnrollment:withdraw",
                    M: ["idToken", "mfaEnrollmentId"],
                    F: function(t) {
                        if (!!t[za] ^ !!t.refreshToken)
                            throw new k("internal-error")
                    },
                    C: !0,
                    Na: !0
                };
                function nu(t, n, e) {
                    if (!function(t, n) {
                        if (!n || !n.length)
                            return !0;
                        if (!t)
                            return !1;
                        for (var e = 0; e < n.length; e++) {
                            var i = t[n[e]];
                            if (null == i || "" === i)
                                return !1
                        }
                        return !0
                    }(e, n.M))
                        return On(new k("internal-error"));
                    var i, r = !!n.Na, o = n.Tb || "POST";
                    return _n(e).then(n.B).then((function() {
                        return n.U && (e.returnSecureToken = !0),
                        n.C && t.b && void 0 === e.tenantId && (e.tenantId = t.b),
                        us(t, r ? t.i : t.h, n.endpoint, o, e, n.Gb, n.kb || !1)
                    }
                    )).then((function(t) {
                        return i = t,
                        n.Xa ? n.Xa(e, i) : i
                    }
                    )).then(n.F).then((function() {
                        if (!n.Z)
                            return i;
                        if (!(n.Z in i))
                            throw new k("internal-error");
                        return i[n.Z]
                    }
                    ))
                }
                function eu(t) {
                    return iu({
                        error: {
                            errors: [{
                                message: t
                            }],
                            code: 400,
                            message: t
                        }
                    })
                }
                function iu(t, n) {
                    var e = (t.error && t.error.errors && t.error.errors[0] || {}).reason || ""
                      , i = {
                        keyInvalid: "invalid-api-key",
                        ipRefererBlocked: "app-not-authorized"
                    };
                    if (e = i[e] ? new k(i[e]) : null)
                        return e;
                    for (var r in e = t.error && t.error.message || "",
                    mt(i = {
                        INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                        CREDENTIAL_MISMATCH: "custom-token-mismatch",
                        MISSING_CUSTOM_TOKEN: "internal-error",
                        INVALID_IDENTIFIER: "invalid-email",
                        MISSING_CONTINUE_URI: "internal-error",
                        INVALID_EMAIL: "invalid-email",
                        INVALID_PASSWORD: "wrong-password",
                        USER_DISABLED: "user-disabled",
                        MISSING_PASSWORD: "internal-error",
                        EMAIL_EXISTS: "email-already-in-use",
                        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                        INVALID_IDP_RESPONSE: "invalid-credential",
                        INVALID_PENDING_TOKEN: "invalid-credential",
                        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                        MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                        INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                        INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                        INVALID_SENDER: "invalid-sender",
                        EMAIL_NOT_FOUND: "user-not-found",
                        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                        EXPIRED_OOB_CODE: "expired-action-code",
                        INVALID_OOB_CODE: "invalid-action-code",
                        MISSING_OOB_CODE: "internal-error",
                        INVALID_PROVIDER_ID: "invalid-provider-id",
                        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                        INVALID_ID_TOKEN: "invalid-user-token",
                        TOKEN_EXPIRED: "user-token-expired",
                        USER_NOT_FOUND: "user-token-expired",
                        CORS_UNSUPPORTED: "cors-unsupported",
                        DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                        INVALID_APP_ID: "invalid-app-id",
                        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                        WEAK_PASSWORD: "weak-password",
                        OPERATION_NOT_ALLOWED: "operation-not-allowed",
                        USER_CANCELLED: "user-cancelled",
                        CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                        INVALID_APP_CREDENTIAL: "invalid-app-credential",
                        INVALID_CODE: "invalid-verification-code",
                        INVALID_PHONE_NUMBER: "invalid-phone-number",
                        INVALID_SESSION_INFO: "invalid-verification-id",
                        INVALID_TEMPORARY_PROOF: "invalid-credential",
                        MISSING_APP_CREDENTIAL: "missing-app-credential",
                        MISSING_CODE: "missing-verification-code",
                        MISSING_PHONE_NUMBER: "missing-phone-number",
                        MISSING_SESSION_INFO: "missing-verification-id",
                        QUOTA_EXCEEDED: "quota-exceeded",
                        SESSION_EXPIRED: "code-expired",
                        REJECTED_CREDENTIAL: "rejected-credential",
                        INVALID_CONTINUE_URI: "invalid-continue-uri",
                        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                        MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                        INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                        INVALID_CERT_HASH: "invalid-cert-hash",
                        UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                        INVALID_TENANT_ID: "invalid-tenant-id",
                        TENANT_ID_MISMATCH: "tenant-id-mismatch",
                        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                        EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
                        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                        UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                        UNVERIFIED_EMAIL: "unverified-email"
                    }, n || {}),
                    n = (n = e.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < n.length ? n[1] : void 0,
                    i)
                        if (0 === e.indexOf(r))
                            return new k(i[r],n);
                    return !n && t && (n = Di(t)),
                    new k("internal-error",n)
                }
                function ru(t) {
                    this.b = t,
                    this.a = null,
                    this.qb = function(t) {
                        return (uu || (uu = new In((function(t, n) {
                            function e() {
                                Ui(),
                                Ni("gapi.load")("gapi.iframes", {
                                    callback: t,
                                    ontimeout: function() {
                                        Ui(),
                                        n(Error("Network Error"))
                                    },
                                    timeout: au.get()
                                })
                            }
                            if (Ni("gapi.iframes.Iframe"))
                                t();
                            else if (Ni("gapi.load"))
                                e();
                            else {
                                var i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                                u[i] = function() {
                                    Ni("gapi.load") ? e() : n(Error("Network Error"))
                                }
                                ,
                                _n(Ka(i = kt(ou, {
                                    onload: i
                                }))).s((function() {
                                    n(Error("Network Error"))
                                }
                                ))
                            }
                        }
                        )).s((function(t) {
                            throw uu = null,
                            t
                        }
                        )))).then((function() {
                            return new In((function(n, e) {
                                Ni("gapi.iframes.getContext")().open({
                                    where: document.body,
                                    url: t.b,
                                    messageHandlersFilter: Ni("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                    attributes: {
                                        style: {
                                            position: "absolute",
                                            top: "-100px",
                                            width: "1px",
                                            height: "1px"
                                        }
                                    },
                                    dontclear: !0
                                }, (function(i) {
                                    function r() {
                                        clearTimeout(o),
                                        n()
                                    }
                                    t.a = i,
                                    t.a.restyle({
                                        setHideOnLeave: !1
                                    });
                                    var o = setTimeout((function() {
                                        e(Error("Network Error"))
                                    }
                                    ), su.get());
                                    i.ping(r).then(r, (function() {
                                        e(Error("Network Error"))
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }(this)
                }
                var ou = new bt(It,"https://apis.google.com/js/api.js?onload=%{onload}")
                  , au = new Vi(3e4,6e4)
                  , su = new Vi(5e3,15e3)
                  , uu = null;
                function cu(t, n, e, i) {
                    this.l = t,
                    this.h = n,
                    this.i = e,
                    this.g = i,
                    this.f = null,
                    this.g ? t = Ve((t = Ue(this.g.url)).f, t.a, t.g, "/emulator/auth/iframe") : t = Ve("https", this.l, null, "/__/auth/iframe"),
                    this.a = t,
                    Me(this.a, "apiKey", this.h),
                    Me(this.a, "appName", this.i),
                    this.b = null,
                    this.c = []
                }
                function hu(t, n, e, i, r, o) {
                    this.u = t,
                    this.o = n,
                    this.c = e,
                    this.v = i,
                    this.m = o,
                    this.i = this.g = this.l = null,
                    this.a = r,
                    this.h = this.f = null
                }
                function lu(t) {
                    try {
                        return n.a.app(t).auth().Ga()
                    } catch (e) {
                        return []
                    }
                }
                function fu(t, n, e, i, r, o) {
                    this.o = t,
                    this.g = n,
                    this.b = e,
                    this.f = o,
                    this.c = i || null,
                    this.i = r || null,
                    this.l = this.u = this.A = null,
                    this.h = [],
                    this.v = this.a = null
                }
                function du(t) {
                    var n = ui();
                    return function(t) {
                        return nu(t, js, {}).then((function(t) {
                            return t.authorizedDomains || []
                        }
                        ))
                    }(t).then((function(t) {
                        t: {
                            var e = Ue(n)
                              , i = e.f;
                            e = e.a;
                            for (var r = 0; r < t.length; r++) {
                                var o = t[r]
                                  , a = e
                                  , s = i;
                                if (0 == o.indexOf("chrome-extension://") ? a = Ue(o).a == a && "chrome-extension" == s : "http" != s && "https" != s ? a = !1 : di.test(o) ? a = a == o : (o = o.split(".").join("\\."),
                                a = new RegExp("^(.+\\." + o + "|" + o + ")$","i").test(a)),
                                a) {
                                    t = !0;
                                    break t
                                }
                            }
                            t = !1
                        }
                        if (!t)
                            throw new Go(ui())
                    }
                    ))
                }
                function pu(t) {
                    return t.v || (t.v = vi().then((function() {
                        if (!t.u) {
                            var n = t.c
                              , e = t.i
                              , i = lu(t.b)
                              , r = new cu(t.o,t.g,t.b,t.f);
                            r.f = n,
                            r.b = e,
                            r.c = $(i || []),
                            t.u = r.toString()
                        }
                        t.m = new ru(t.u),
                        function(t) {
                            if (!t.m)
                                throw Error("IfcHandler must be initialized!");
                            !function(t, n) {
                                t.qb.then((function() {
                                    t.a.register("authEvent", n, Ni("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                }
                                ))
                            }(t.m, (function(n) {
                                var e = {};
                                if (n && n.authEvent) {
                                    var i = !1;
                                    for (n = Fo(n.authEvent),
                                    e = 0; e < t.h.length; e++)
                                        i = t.h[e](n) || i;
                                    return (e = {}).status = i ? "ACK" : "ERROR",
                                    _n(e)
                                }
                                return e.status = "ERROR",
                                _n(e)
                            }
                            ))
                        }(t)
                    }
                    ))),
                    t.v
                }
                function vu(t) {
                    return t.l || (t.A = t.c ? ki(t.c, lu(t.b)) : null,
                    t.l = new Ja(t.g,R(t.i),t.A),
                    t.f && es(t.l, t.f)),
                    t.l
                }
                function mu(t, n, e, i, r, o, a, s, u, c, h, l) {
                    return (t = new hu(t,n,e,i,r,l)).l = o,
                    t.g = a,
                    t.i = s,
                    t.b = pt(u || null),
                    t.f = c,
                    t.xb(h).toString()
                }
                function gu(t) {
                    if (this.a = t || n.a.INTERNAL.reactNative && n.a.INTERNAL.reactNative.AsyncStorage,
                    !this.a)
                        throw new k("internal-error","The React Native compatibility library was not found.");
                    this.type = "asyncStorage"
                }
                function bu(t) {
                    this.b = t,
                    this.a = {},
                    this.f = I(this.c, this)
                }
                cu.prototype.toString = function() {
                    return this.f ? Me(this.a, "v", this.f) : $e(this.a.b, "v"),
                    this.b ? Me(this.a, "eid", this.b) : $e(this.a.b, "eid"),
                    this.c.length ? Me(this.a, "fw", this.c.join(",")) : $e(this.a.b, "fw"),
                    this.a.toString()
                }
                ,
                hu.prototype.xb = function(t) {
                    return this.h = t,
                    this
                }
                ,
                hu.prototype.toString = function() {
                    if (this.m) {
                        var t = Ue(this.m.url);
                        t = Ve(t.f, t.a, t.g, "/emulator/auth/handler")
                    } else
                        t = Ve("https", this.u, null, "/__/auth/handler");
                    if (Me(t, "apiKey", this.o),
                    Me(t, "appName", this.c),
                    Me(t, "authType", this.v),
                    this.a.isOAuthProvider) {
                        var e = this.a;
                        try {
                            var i = n.a.app(this.c).auth().ka()
                        } catch (u) {
                            i = null
                        }
                        for (var r in e.nb = i,
                        Me(t, "providerId", this.a.providerId),
                        e = Li((i = this.a).Hb))
                            e[r] = e[r].toString();
                        r = i.Pc,
                        e = pt(e);
                        for (var o = 0; o < r.length; o++) {
                            var a = r[o];
                            a in e && delete e[a]
                        }
                        i.ob && i.nb && !e[i.ob] && (e[i.ob] = i.nb),
                        dt(e) || Me(t, "customParameters", Di(e))
                    }
                    if ("function" == typeof this.a.Pb && ((i = this.a.Pb()).length && Me(t, "scopes", i.join(","))),
                    this.l ? Me(t, "redirectUrl", this.l) : $e(t.b, "redirectUrl"),
                    this.g ? Me(t, "eventId", this.g) : $e(t.b, "eventId"),
                    this.i ? Me(t, "v", this.i) : $e(t.b, "v"),
                    this.b)
                        for (var s in this.b)
                            this.b.hasOwnProperty(s) && !je(t, s) && Me(t, s, this.b[s]);
                    return this.h ? Me(t, "tid", this.h) : $e(t.b, "tid"),
                    this.f ? Me(t, "eid", this.f) : $e(t.b, "eid"),
                    (s = lu(this.c)).length && Me(t, "fw", s.join(",")),
                    t.toString()
                }
                ,
                (e = fu.prototype).Nb = function(t, n, e) {
                    var i = new k("popup-closed-by-user")
                      , r = new k("web-storage-unsupported")
                      , o = this
                      , a = !1;
                    return this.la().then((function() {
                        (function(t) {
                            var n = {
                                type: "webStorageSupport"
                            };
                            return pu(t).then((function() {
                                return function(t, n) {
                                    return t.qb.then((function() {
                                        return new In((function(e) {
                                            t.a.send(n.type, n, e, Ni("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                        }
                                        ))
                                    }
                                    ))
                                }(t.m, n)
                            }
                            )).then((function(t) {
                                if (t && t.length && void 0 !== t[0].webStorageSupport)
                                    return t[0].webStorageSupport;
                                throw Error()
                            }
                            ))
                        }
                        )(o).then((function(e) {
                            e || (t && li(t),
                            n(r),
                            a = !0)
                        }
                        ))
                    }
                    )).s((function() {}
                    )).then((function() {
                        if (!a)
                            return function(t) {
                                return new In((function(n) {
                                    return function e() {
                                        ke(2e3).then((function() {
                                            if (t && !t.closed)
                                                return e();
                                            n()
                                        }
                                        ))
                                    }()
                                }
                                ))
                            }(t)
                    }
                    )).then((function() {
                        if (!a)
                            return ke(e).then((function() {
                                n(i)
                            }
                            ))
                    }
                    ))
                }
                ,
                e.Wb = function() {
                    var t = Si();
                    return !Pi(t) && !ji(t)
                }
                ,
                e.Sb = function() {
                    return !1
                }
                ,
                e.Lb = function(t, n, e, i, r, o, a, s) {
                    if (!t)
                        return On(new k("popup-blocked"));
                    if (a && !Pi())
                        return this.la().s((function(n) {
                            li(t),
                            r(n)
                        }
                        )),
                        i(),
                        _n();
                    this.a || (this.a = du(vu(this)));
                    var u = this;
                    return this.a.then((function() {
                        var n = u.la().s((function(n) {
                            throw li(t),
                            r(n),
                            n
                        }
                        ));
                        return i(),
                        n
                    }
                    )).then((function() {
                        (Uo(e),
                        a) || ci(mu(u.o, u.g, u.b, n, e, null, o, u.c, void 0, u.i, s, u.f), t)
                    }
                    )).s((function(t) {
                        throw "auth/network-request-failed" == t.code && (u.a = null),
                        t
                    }
                    ))
                }
                ,
                e.Mb = function(t, n, e, i) {
                    this.a || (this.a = du(vu(this)));
                    var r = this;
                    return this.a.then((function() {
                        Uo(n),
                        ci(mu(r.o, r.g, r.b, t, n, ui(), e, r.c, void 0, r.i, i, r.f))
                    }
                    )).s((function(t) {
                        throw "auth/network-request-failed" == t.code && (r.a = null),
                        t
                    }
                    ))
                }
                ,
                e.la = function() {
                    var t = this;
                    return pu(this).then((function() {
                        return t.m.qb
                    }
                    )).s((function() {
                        throw t.a = null,
                        new k("network-request-failed")
                    }
                    ))
                }
                ,
                e.Zb = function() {
                    return !0
                }
                ,
                e.Ea = function(t) {
                    this.h.push(t)
                }
                ,
                e.Ra = function(t) {
                    Y(this.h, (function(n) {
                        return n == t
                    }
                    ))
                }
                ,
                (e = gu.prototype).get = function(t) {
                    return _n(this.a.getItem(t)).then((function(t) {
                        return t && xi(t)
                    }
                    ))
                }
                ,
                e.set = function(t, n) {
                    return _n(this.a.setItem(t, Di(n)))
                }
                ,
                e.T = function(t) {
                    return _n(this.a.removeItem(t))
                }
                ,
                e.ca = function() {}
                ,
                e.ia = function() {}
                ;
                var yu, wu = [];
                function Iu(t, n, e) {
                    dt(t.a) && t.b.addEventListener("message", t.f),
                    void 0 === t.a[n] && (t.a[n] = []),
                    t.a[n].push(e)
                }
                function Tu(t) {
                    this.a = t
                }
                function Eu(t) {
                    this.c = t,
                    this.b = !1,
                    this.a = []
                }
                function Au(t, n, e, i) {
                    var r, o, a, s, u = e || {}, c = null;
                    if (t.b)
                        return On(Error("connection_unavailable"));
                    var h = i ? 800 : 50
                      , l = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                    return new In((function(e, i) {
                        l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(),
                        l.port1.start(),
                        a = setTimeout((function() {
                            i(Error("unsupported_event"))
                        }
                        ), h),
                        c = {
                            messageChannel: l,
                            onMessage: o = function(t) {
                                t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a),
                                s = setTimeout((function() {
                                    i(Error("timeout"))
                                }
                                ), 3e3)) : "done" === t.data.status ? (clearTimeout(s),
                                void 0 !== t.data.response ? e(t.data.response) : i(Error("unknown_error"))) : (clearTimeout(a),
                                clearTimeout(s),
                                i(Error("invalid_response"))))
                            }
                        },
                        t.a.push(c),
                        l.port1.addEventListener("message", o),
                        t.c.postMessage({
                            eventType: n,
                            eventId: r,
                            data: u
                        }, [l.port2])) : i(Error("connection_unavailable"))
                    }
                    )).then((function(n) {
                        return ku(t, c),
                        n
                    }
                    )).s((function(n) {
                        throw ku(t, c),
                        n
                    }
                    ))
                }
                function ku(t, n) {
                    if (n) {
                        var e = n.messageChannel
                          , i = n.onMessage;
                        e && (e.port1.removeEventListener("message", i),
                        e.port1.close()),
                        Y(t.a, (function(t) {
                            return t == n
                        }
                        ))
                    }
                }
                function Su() {
                    if (!Ou())
                        throw new k("web-storage-unsupported");
                    this.c = {},
                    this.a = [],
                    this.b = 0,
                    this.m = u.indexedDB,
                    this.type = "indexedDB",
                    this.g = this.l = this.f = this.i = null,
                    this.o = !1,
                    this.h = null;
                    var t = this;
                    bi() && self ? (this.l = function() {
                        var t = bi() ? self : null;
                        if (H(wu, (function(e) {
                            e.b == t && (n = e)
                        }
                        )),
                        !n) {
                            var n = new bu(t);
                            wu.push(n)
                        }
                        return n
                    }(),
                    Iu(this.l, "keyChanged", (function(n, e) {
                        return Lu(t).then((function(n) {
                            return 0 < n.length && H(t.a, (function(t) {
                                t(n)
                            }
                            )),
                            {
                                keyProcessed: X(n, e.key)
                            }
                        }
                        ))
                    }
                    )),
                    Iu(this.l, "ping", (function() {
                        return _n(["keyChanged"])
                    }
                    ))) : function() {
                        var t = u.navigator;
                        return t && t.serviceWorker ? _n().then((function() {
                            return t.serviceWorker.ready
                        }
                        )).then((function(t) {
                            return t.active || null
                        }
                        )).s((function() {
                            return null
                        }
                        )) : _n(null)
                    }().then((function(n) {
                        (t.h = n) && (t.g = new Eu(new Tu(n)),
                        Au(t.g, "ping", null, !0).then((function(n) {
                            n[0].fulfilled && X(n[0].value, "keyChanged") && (t.o = !0)
                        }
                        )).s((function() {}
                        )))
                    }
                    ))
                }
                function Nu(t) {
                    return new In((function(n, e) {
                        var i = t.m.open("firebaseLocalStorageDb", 1);
                        i.onerror = function(t) {
                            try {
                                t.preventDefault()
                            } catch (n) {}
                            e(Error(t.target.error))
                        }
                        ,
                        i.onupgradeneeded = function(t) {
                            t = t.target.result;
                            try {
                                t.createObjectStore("firebaseLocalStorage", {
                                    keyPath: "fbase_key"
                                })
                            } catch (n) {
                                e(n)
                            }
                        }
                        ,
                        i.onsuccess = function(i) {
                            (i = i.target.result).objectStoreNames.contains("firebaseLocalStorage") ? n(i) : function(t) {
                                return new In((function(n, e) {
                                    var i = t.m.deleteDatabase("firebaseLocalStorageDb");
                                    i.onsuccess = function() {
                                        n()
                                    }
                                    ,
                                    i.onerror = function(t) {
                                        e(Error(t.target.error))
                                    }
                                }
                                ))
                            }(t).then((function() {
                                return Nu(t)
                            }
                            )).then((function(t) {
                                n(t)
                            }
                            )).s((function(t) {
                                e(t)
                            }
                            ))
                        }
                    }
                    ))
                }
                function _u(t) {
                    return t.v || (t.v = Nu(t)),
                    t.v
                }
                function Ou() {
                    try {
                        return !!u.indexedDB
                    } catch (Bt) {
                        return !1
                    }
                }
                function Cu(t) {
                    return t.objectStore("firebaseLocalStorage")
                }
                function Ru(t, n) {
                    return t.transaction(["firebaseLocalStorage"], n ? "readwrite" : "readonly")
                }
                function Pu(t) {
                    return new In((function(n, e) {
                        t.onsuccess = function(t) {
                            t && t.target ? n(t.target.result) : n()
                        }
                        ,
                        t.onerror = function(t) {
                            e(t.target.error)
                        }
                    }
                    ))
                }
                function Du(t, n) {
                    return t.g && t.h && function() {
                        var t = u.navigator;
                        return t && t.serviceWorker && t.serviceWorker.controller || null
                    }() === t.h ? Au(t.g, "keyChanged", {
                        key: n
                    }, t.o).then((function() {}
                    )).s((function() {}
                    )) : _n()
                }
                function Lu(t) {
                    return _u(t).then((function(t) {
                        var n = Cu(Ru(t, !1));
                        return n.getAll ? Pu(n.getAll()) : new In((function(t, e) {
                            var i = []
                              , r = n.openCursor();
                            r.onsuccess = function(n) {
                                (n = n.target.result) ? (i.push(n.value),
                                n.continue()) : t(i)
                            }
                            ,
                            r.onerror = function(t) {
                                e(t.target.error)
                            }
                        }
                        ))
                    }
                    )).then((function(n) {
                        var e = {}
                          , i = [];
                        if (0 == t.b) {
                            for (i = 0; i < n.length; i++)
                                e[n[i].fbase_key] = n[i].value;
                            i = function t(n, e) {
                                var i, r = [];
                                for (i in n)
                                    i in e ? typeof n[i] != typeof e[i] ? r.push(i) : "object" == typeof n[i] && null != n[i] && null != e[i] ? 0 < t(n[i], e[i]).length && r.push(i) : n[i] !== e[i] && r.push(i) : r.push(i);
                                for (i in e)
                                    i in n || r.push(i);
                                return r
                            }(t.c, e),
                            t.c = e
                        }
                        return i
                    }
                    ))
                }
                function xu(t) {
                    t.i && t.i.cancel("STOP_EVENT"),
                    t.f && (clearTimeout(t.f),
                    t.f = null)
                }
                function Mu(t) {
                    var n = this
                      , e = null;
                    this.a = [],
                    this.type = "indexedDB",
                    this.c = t,
                    this.b = _n().then((function() {
                        if (Ou()) {
                            var t = Mi()
                              , i = "__sak" + t;
                            return yu || (yu = new Su),
                            (e = yu).set(i, t).then((function() {
                                return e.get(i)
                            }
                            )).then((function(n) {
                                if (n !== t)
                                    throw Error("indexedDB not supported!");
                                return e.T(i)
                            }
                            )).then((function() {
                                return e
                            }
                            )).s((function() {
                                return n.c
                            }
                            ))
                        }
                        return n.c
                    }
                    )).then((function(t) {
                        return n.type = t.type,
                        t.ca((function(t) {
                            H(n.a, (function(n) {
                                n(t)
                            }
                            ))
                        }
                        )),
                        t
                    }
                    ))
                }
                function ju() {
                    this.a = {},
                    this.type = "inMemory"
                }
                function Uu() {
                    if (!function() {
                        var t = "Node" == yi();
                        if (!(t = Vu() || t && n.a.INTERNAL.node && n.a.INTERNAL.node.localStorage))
                            return !1;
                        try {
                            return t.setItem("__sak", "1"),
                            t.removeItem("__sak"),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }()) {
                        if ("Node" == yi())
                            throw new k("internal-error","The LocalStorage compatibility library was not found.");
                        throw new k("web-storage-unsupported")
                    }
                    this.a = Vu() || n.a.INTERNAL.node.localStorage,
                    this.type = "localStorage"
                }
                function Vu() {
                    try {
                        var t = u.localStorage
                          , n = Mi();
                        return t && (t.setItem(n, "1"),
                        t.removeItem(n)),
                        t
                    } catch (e) {
                        return null
                    }
                }
                function Fu() {
                    this.type = "nullStorage"
                }
                function Ku() {
                    if (!function() {
                        var t = "Node" == yi();
                        if (!(t = qu() || t && n.a.INTERNAL.node && n.a.INTERNAL.node.sessionStorage))
                            return !1;
                        try {
                            return t.setItem("__sak", "1"),
                            t.removeItem("__sak"),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }()) {
                        if ("Node" == yi())
                            throw new k("internal-error","The SessionStorage compatibility library was not found.");
                        throw new k("web-storage-unsupported")
                    }
                    this.a = qu() || n.a.INTERNAL.node.sessionStorage,
                    this.type = "sessionStorage"
                }
                function qu() {
                    try {
                        var t = u.sessionStorage
                          , n = Mi();
                        return t && (t.setItem(n, "1"),
                        t.removeItem(n)),
                        t
                    } catch (e) {
                        return null
                    }
                }
                function Hu() {
                    var t = {};
                    t.Browser = Wu,
                    t.Node = Xu,
                    t.ReactNative = Ju,
                    t.Worker = Yu,
                    this.a = t[yi()]
                }
                bu.prototype.c = function(t) {
                    var n = t.data.eventType
                      , e = t.data.eventId
                      , i = this.a[n];
                    if (i && 0 < i.length) {
                        t.ports[0].postMessage({
                            status: "ack",
                            eventId: e,
                            eventType: n,
                            response: null
                        });
                        var r = [];
                        H(i, (function(n) {
                            r.push(_n().then((function() {
                                return n(t.origin, t.data.data)
                            }
                            )))
                        }
                        )),
                        Rn(r).then((function(i) {
                            var r = [];
                            H(i, (function(t) {
                                r.push({
                                    fulfilled: t.Ob,
                                    value: t.value,
                                    reason: t.reason ? t.reason.message : void 0
                                })
                            }
                            )),
                            H(r, (function(t) {
                                for (var n in t)
                                    void 0 === t[n] && delete t[n]
                            }
                            )),
                            t.ports[0].postMessage({
                                status: "done",
                                eventId: e,
                                eventType: n,
                                response: r
                            })
                        }
                        ))
                    }
                }
                ,
                Tu.prototype.postMessage = function(t, n) {
                    this.a.postMessage(t, n)
                }
                ,
                Eu.prototype.close = function() {
                    for (; 0 < this.a.length; )
                        ku(this, this.a[0]);
                    this.b = !0
                }
                ,
                (e = Su.prototype).set = function(t, n) {
                    var e, i = !1, r = this;
                    return _u(this).then((function(n) {
                        return Pu((n = Cu(Ru(e = n, !0))).get(t))
                    }
                    )).then((function(o) {
                        var a = Cu(Ru(e, !0));
                        return o ? (o.value = n,
                        Pu(a.put(o))) : (r.b++,
                        i = !0,
                        (o = {}).fbase_key = t,
                        o.value = n,
                        Pu(a.add(o)))
                    }
                    )).then((function() {
                        return r.c[t] = n,
                        Du(r, t)
                    }
                    )).na((function() {
                        i && r.b--
                    }
                    ))
                }
                ,
                e.get = function(t) {
                    return _u(this).then((function(n) {
                        return Pu(Cu(Ru(n, !1)).get(t))
                    }
                    )).then((function(t) {
                        return t && t.value
                    }
                    ))
                }
                ,
                e.T = function(t) {
                    var n = !1
                      , e = this;
                    return _u(this).then((function(i) {
                        return n = !0,
                        e.b++,
                        Pu(Cu(Ru(i, !0)).delete(t))
                    }
                    )).then((function() {
                        return delete e.c[t],
                        Du(e, t)
                    }
                    )).na((function() {
                        n && e.b--
                    }
                    ))
                }
                ,
                e.ca = function(t) {
                    0 == this.a.length && function(t) {
                        xu(t),
                        function n() {
                            t.f = setTimeout((function() {
                                t.i = Lu(t).then((function(n) {
                                    0 < n.length && H(t.a, (function(t) {
                                        t(n)
                                    }
                                    ))
                                }
                                )).then((function() {
                                    n()
                                }
                                )).s((function(t) {
                                    "STOP_EVENT" != t.message && n()
                                }
                                ))
                            }
                            ), 800)
                        }()
                    }(this),
                    this.a.push(t)
                }
                ,
                e.ia = function(t) {
                    Y(this.a, (function(n) {
                        return n == t
                    }
                    )),
                    0 == this.a.length && xu(this)
                }
                ,
                (e = Mu.prototype).get = function(t) {
                    return this.b.then((function(n) {
                        return n.get(t)
                    }
                    ))
                }
                ,
                e.set = function(t, n) {
                    return this.b.then((function(e) {
                        return e.set(t, n)
                    }
                    ))
                }
                ,
                e.T = function(t) {
                    return this.b.then((function(n) {
                        return n.T(t)
                    }
                    ))
                }
                ,
                e.ca = function(t) {
                    this.a.push(t)
                }
                ,
                e.ia = function(t) {
                    Y(this.a, (function(n) {
                        return n == t
                    }
                    ))
                }
                ,
                (e = ju.prototype).get = function(t) {
                    return _n(this.a[t])
                }
                ,
                e.set = function(t, n) {
                    return this.a[t] = n,
                    _n()
                }
                ,
                e.T = function(t) {
                    return delete this.a[t],
                    _n()
                }
                ,
                e.ca = function() {}
                ,
                e.ia = function() {}
                ,
                (e = Uu.prototype).get = function(t) {
                    var n = this;
                    return _n().then((function() {
                        return xi(n.a.getItem(t))
                    }
                    ))
                }
                ,
                e.set = function(t, n) {
                    var e = this;
                    return _n().then((function() {
                        var i = Di(n);
                        null === i ? e.T(t) : e.a.setItem(t, i)
                    }
                    ))
                }
                ,
                e.T = function(t) {
                    var n = this;
                    return _n().then((function() {
                        n.a.removeItem(t)
                    }
                    ))
                }
                ,
                e.ca = function(t) {
                    u.window && ue(u.window, "storage", t)
                }
                ,
                e.ia = function(t) {
                    u.window && le(u.window, "storage", t)
                }
                ,
                (e = Fu.prototype).get = function() {
                    return _n(null)
                }
                ,
                e.set = function() {
                    return _n()
                }
                ,
                e.T = function() {
                    return _n()
                }
                ,
                e.ca = function() {}
                ,
                e.ia = function() {}
                ,
                (e = Ku.prototype).get = function(t) {
                    var n = this;
                    return _n().then((function() {
                        return xi(n.a.getItem(t))
                    }
                    ))
                }
                ,
                e.set = function(t, n) {
                    var e = this;
                    return _n().then((function() {
                        var i = Di(n);
                        null === i ? e.T(t) : e.a.setItem(t, i)
                    }
                    ))
                }
                ,
                e.T = function(t) {
                    var n = this;
                    return _n().then((function() {
                        n.a.removeItem(t)
                    }
                    ))
                }
                ,
                e.ca = function() {}
                ,
                e.ia = function() {}
                ;
                var Gu, Bu, Wu = {
                    D: Uu,
                    ab: Ku
                }, Xu = {
                    D: Uu,
                    ab: Ku
                }, Ju = {
                    D: gu,
                    ab: Fu
                }, Yu = {
                    D: Uu,
                    ab: Fu
                }, zu = {
                    qd: "local",
                    NONE: "none",
                    sd: "session"
                };
                function $u() {
                    var t = !(ji(Si()) || !gi())
                      , n = Pi()
                      , e = _i();
                    this.v = t,
                    this.h = n,
                    this.l = e,
                    this.a = {},
                    Gu || (Gu = new Hu),
                    t = Gu;
                    try {
                        this.g = !si() && Hi() || !u.indexedDB ? new t.a.D : new Mu(bi() ? new ju : new t.a.D)
                    } catch (i) {
                        this.g = new ju,
                        this.h = !0
                    }
                    try {
                        this.i = new t.a.ab
                    } catch (i) {
                        this.i = new ju
                    }
                    this.m = new ju,
                    this.f = I(this.Xb, this),
                    this.b = {}
                }
                function Zu() {
                    return Bu || (Bu = new $u),
                    Bu
                }
                function Qu(t, n) {
                    switch (n) {
                    case "session":
                        return t.i;
                    case "none":
                        return t.m;
                    default:
                        return t.g
                    }
                }
                function tc(t, n) {
                    return "firebase:" + t.name + (n ? ":" + n : "")
                }
                function nc(t, n, e) {
                    return e = tc(n, e),
                    "local" == n.D && (t.b[e] = null),
                    Qu(t, n.D).T(e)
                }
                function ec(t) {
                    t.c && (clearInterval(t.c),
                    t.c = null)
                }
                function ic(t) {
                    this.a = t,
                    this.b = Zu()
                }
                (e = $u.prototype).get = function(t, n) {
                    return Qu(this, t.D).get(tc(t, n))
                }
                ,
                e.set = function(t, n, e) {
                    var i = tc(t, e)
                      , r = this
                      , o = Qu(this, t.D);
                    return o.set(i, n).then((function() {
                        return o.get(i)
                    }
                    )).then((function(n) {
                        "local" == t.D && (r.b[i] = n)
                    }
                    ))
                }
                ,
                e.addListener = function(t, n, e) {
                    t = tc(t, n),
                    this.l && (this.b[t] = u.localStorage.getItem(t)),
                    dt(this.a) && (Qu(this, "local").ca(this.f),
                    this.h || (si() || !Hi()) && u.indexedDB || !this.l || function(t) {
                        ec(t),
                        t.c = setInterval((function() {
                            for (var n in t.a) {
                                var e = u.localStorage.getItem(n)
                                  , i = t.b[n];
                                e != i && (t.b[n] = e,
                                e = new $n({
                                    type: "storage",
                                    key: n,
                                    target: window,
                                    oldValue: i,
                                    newValue: e,
                                    a: !0
                                }),
                                t.Xb(e))
                            }
                        }
                        ), 1e3)
                    }(this)),
                    this.a[t] || (this.a[t] = []),
                    this.a[t].push(e)
                }
                ,
                e.removeListener = function(t, n, e) {
                    t = tc(t, n),
                    this.a[t] && (Y(this.a[t], (function(t) {
                        return t == e
                    }
                    )),
                    0 == this.a[t].length && delete this.a[t]),
                    dt(this.a) && (Qu(this, "local").ia(this.f),
                    ec(this))
                }
                ,
                e.Xb = function(t) {
                    if (t && t.g) {
                        var n = t.a.key;
                        if (null == n)
                            for (var e in this.a) {
                                var i = this.b[e];
                                void 0 === i && (i = null);
                                var r = u.localStorage.getItem(e);
                                r !== i && (this.b[e] = r,
                                this.lb(e))
                            }
                        else if (0 == n.indexOf("firebase:") && this.a[n]) {
                            if (void 0 !== t.a.a ? Qu(this, "local").ia(this.f) : ec(this),
                            this.v)
                                if (e = u.localStorage.getItem(n),
                                (i = t.a.newValue) !== e)
                                    null !== i ? u.localStorage.setItem(n, i) : u.localStorage.removeItem(n);
                                else if (this.b[n] === i && void 0 === t.a.a)
                                    return;
                            var o = this;
                            e = function() {
                                void 0 === t.a.a && o.b[n] === u.localStorage.getItem(n) || (o.b[n] = u.localStorage.getItem(n),
                                o.lb(n))
                            }
                            ,
                            Xt && en && 10 == en && u.localStorage.getItem(n) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(e, 10) : e()
                        }
                    } else
                        H(t, I(this.lb, this))
                }
                ,
                e.lb = function(t) {
                    this.a[t] && H(this.a[t], (function(t) {
                        t()
                    }
                    ))
                }
                ;
                var rc, oc = {
                    name: "authEvent",
                    D: "local"
                };
                function ac() {
                    this.a = Zu()
                }
                function sc(t, n) {
                    this.b = uc,
                    this.f = u.Uint8Array ? new Uint8Array(this.b) : Array(this.b),
                    this.g = this.c = 0,
                    this.a = [],
                    this.i = t,
                    this.h = n,
                    this.l = u.Int32Array ? new Int32Array(64) : Array(64),
                    void 0 === rc && (rc = u.Int32Array ? new Int32Array(vc) : vc),
                    this.reset()
                }
                A(sc, (function() {
                    this.b = -1
                }
                ));
                for (var uc = 64, cc = uc - 1, hc = [], lc = 0; lc < cc; lc++)
                    hc[lc] = 0;
                var fc = z(128, hc);
                function dc(t) {
                    for (var n = t.f, e = t.l, i = 0, r = 0; r < n.length; )
                        e[i++] = n[r] << 24 | n[r + 1] << 16 | n[r + 2] << 8 | n[r + 3],
                        r = 4 * i;
                    for (n = 16; 64 > n; n++) {
                        r = 0 | e[n - 15],
                        i = 0 | e[n - 2];
                        var o = (0 | e[n - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0
                          , a = (0 | e[n - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                        e[n] = o + a | 0
                    }
                    i = 0 | t.a[0],
                    r = 0 | t.a[1];
                    var s = 0 | t.a[2]
                      , u = 0 | t.a[3]
                      , c = 0 | t.a[4]
                      , h = 0 | t.a[5]
                      , l = 0 | t.a[6];
                    for (o = 0 | t.a[7],
                    n = 0; 64 > n; n++) {
                        var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                        a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | rc[n]) | 0) + (0 | e[n]) | 0) | 0,
                        o = l,
                        l = h,
                        h = c,
                        c = u + a | 0,
                        u = s,
                        s = r,
                        r = i,
                        i = a + f | 0
                    }
                    t.a[0] = t.a[0] + i | 0,
                    t.a[1] = t.a[1] + r | 0,
                    t.a[2] = t.a[2] + s | 0,
                    t.a[3] = t.a[3] + u | 0,
                    t.a[4] = t.a[4] + c | 0,
                    t.a[5] = t.a[5] + h | 0,
                    t.a[6] = t.a[6] + l | 0,
                    t.a[7] = t.a[7] + o | 0
                }
                function pc(t, n, e) {
                    void 0 === e && (e = n.length);
                    var i = 0
                      , r = t.c;
                    if ("string" == typeof n)
                        for (; i < e; )
                            t.f[r++] = n.charCodeAt(i++),
                            r == t.b && (dc(t),
                            r = 0);
                    else {
                        if (!d(n))
                            throw Error("message must be string or array");
                        for (; i < e; ) {
                            var o = n[i++];
                            if (!("number" == typeof o && 0 <= o && 255 >= o && o == (0 | o)))
                                throw Error("message must be a byte array");
                            t.f[r++] = o,
                            r == t.b && (dc(t),
                            r = 0)
                        }
                    }
                    t.c = r,
                    t.g += e
                }
                sc.prototype.reset = function() {
                    this.g = this.c = 0,
                    this.a = u.Int32Array ? new Int32Array(this.h) : $(this.h)
                }
                ;
                var vc = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                function mc() {
                    sc.call(this, 8, gc)
                }
                A(mc, sc);
                var gc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
                function bc(t, n, e, i, r, o) {
                    this.m = t,
                    this.i = n,
                    this.l = e,
                    this.v = i || null,
                    this.u = r || null,
                    this.o = o,
                    this.h = n + ":" + e,
                    this.A = new ac,
                    this.g = new ic(this.h),
                    this.f = null,
                    this.b = [],
                    this.a = this.c = null
                }
                function yc(t) {
                    return new k("invalid-cordova-configuration",t)
                }
                function wc(t) {
                    var n = new mc;
                    pc(n, t),
                    t = [];
                    var e = 8 * n.g;
                    56 > n.c ? pc(n, fc, 56 - n.c) : pc(n, fc, n.b - (n.c - 56));
                    for (var i = 63; 56 <= i; i--)
                        n.f[i] = 255 & e,
                        e /= 256;
                    for (dc(n),
                    i = e = 0; i < n.i; i++)
                        for (var r = 24; 0 <= r; r -= 8)
                            t[e++] = n.a[i] >> r & 255;
                    return function(t) {
                        return B(t, (function(t) {
                            return 1 < (t = t.toString(16)).length ? t : "0" + t
                        }
                        )).join("")
                    }(t)
                }
                function Ic(t, n) {
                    for (var e = 0; e < t.b.length; e++)
                        try {
                            t.b[e](n)
                        } catch (i) {}
                }
                function Tc(t) {
                    return t.f || (t.f = t.la().then((function() {
                        return new In((function(n) {
                            t.Ea((function e(i) {
                                return n(i),
                                t.Ra(e),
                                !1
                            }
                            )),
                            function(t) {
                                function n(n) {
                                    i = !0,
                                    r && r.cancel(),
                                    Ec(t).then((function(i) {
                                        var r = e;
                                        if (i && n && n.url) {
                                            var o = null;
                                            -1 != (r = io(n.url)).indexOf("/__/auth/callback") && (o = (o = "object" == typeof (o = xi(je(o = Ue(r), "firebaseError") || null)) ? S(o) : null) ? new Vo(i.c,i.b,null,null,o,null,i.S()) : new Vo(i.c,i.b,r,i.f,null,null,i.S())),
                                            r = o || e
                                        }
                                        Ic(t, r)
                                    }
                                    ))
                                }
                                var e = new Vo("unknown",null,null,null,new k("no-auth-event"))
                                  , i = !1
                                  , r = ke(500).then((function() {
                                    return Ec(t).then((function() {
                                        i || Ic(t, e)
                                    }
                                    ))
                                }
                                ))
                                  , o = u.handleOpenURL;
                                u.handleOpenURL = function(t) {
                                    if (0 == t.toLowerCase().indexOf(Ni("BuildInfo.packageName", u).toLowerCase() + "://") && n({
                                        url: t
                                    }),
                                    "function" == typeof o)
                                        try {
                                            o(t)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                }
                                ,
                                Ho || (Ho = new Ko),
                                function(t) {
                                    var n = Ho;
                                    n.a.push(t),
                                    n.b || (n.b = function(t) {
                                        for (var e = 0; e < n.a.length; e++)
                                            n.a[e](t)
                                    }
                                    ,
                                    "function" == typeof (t = Ni("universalLinks.subscribe", u)) && t(null, n.b))
                                }(n)
                            }(t)
                        }
                        ))
                    }
                    ))),
                    t.f
                }
                function Ec(t) {
                    var n = null;
                    return function(t) {
                        return t.b.get(oc, t.a).then((function(t) {
                            return Fo(t)
                        }
                        ))
                    }(t.g).then((function(e) {
                        return n = e,
                        nc((e = t.g).b, oc, e.a)
                    }
                    )).then((function() {
                        return n
                    }
                    ))
                }
                function Ac(t) {
                    this.a = t,
                    this.b = Zu()
                }
                (e = bc.prototype).la = function() {
                    return this.Ia ? this.Ia : this.Ia = (mi(void 0) ? vi().then((function() {
                        return new In((function(t, n) {
                            var e = u.document
                              , i = setTimeout((function() {
                                n(Error("Cordova framework is not ready."))
                            }
                            ), 1e3);
                            e.addEventListener("deviceready", (function() {
                                clearTimeout(i),
                                t()
                            }
                            ), !1)
                        }
                        ))
                    }
                    )) : On(Error("Cordova must run in an Android or iOS file scheme."))).then((function() {
                        if ("function" != typeof Ni("universalLinks.subscribe", u))
                            throw yc("cordova-universal-links-plugin-fix is not installed");
                        if (void 0 === Ni("BuildInfo.packageName", u))
                            throw yc("cordova-plugin-buildinfo is not installed");
                        if ("function" != typeof Ni("cordova.plugins.browsertab.openUrl", u))
                            throw yc("cordova-plugin-browsertab is not installed");
                        if ("function" != typeof Ni("cordova.InAppBrowser.open", u))
                            throw yc("cordova-plugin-inappbrowser is not installed")
                    }
                    ), (function() {
                        throw new k("cordova-not-ready")
                    }
                    ))
                }
                ,
                e.Nb = function(t, n) {
                    return n(new k("operation-not-supported-in-this-environment")),
                    _n()
                }
                ,
                e.Lb = function() {
                    return On(new k("operation-not-supported-in-this-environment"))
                }
                ,
                e.Zb = function() {
                    return !1
                }
                ,
                e.Wb = function() {
                    return !0
                }
                ,
                e.Sb = function() {
                    return !0
                }
                ,
                e.Mb = function(t, n, e, i) {
                    if (this.c)
                        return On(new k("redirect-operation-pending"));
                    var r = this
                      , o = u.document
                      , a = null
                      , s = null
                      , c = null
                      , h = null;
                    return this.c = _n().then((function() {
                        return Uo(n),
                        Tc(r)
                    }
                    )).then((function() {
                        return function(t, n, e, i, r) {
                            var o = function() {
                                for (var t = 20, n = []; 0 < t; )
                                    n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                                    t--;
                                return n.join("")
                            }()
                              , a = new Vo(n,i,null,o,new k("no-auth-event"),null,r)
                              , s = Ni("BuildInfo.packageName", u);
                            if ("string" != typeof s)
                                throw new k("invalid-cordova-configuration");
                            var c = Ni("BuildInfo.displayName", u)
                              , h = {};
                            if (Si().toLowerCase().match(/iphone|ipad|ipod/))
                                h.ibi = s;
                            else {
                                if (!Si().toLowerCase().match(/android/))
                                    return On(new k("operation-not-supported-in-this-environment"));
                                h.apn = s
                            }
                            c && (h.appDisplayName = c),
                            o = wc(o),
                            h.sessionId = o;
                            var l = mu(t.m, t.i, t.l, n, e, null, i, t.v, h, t.u, r, t.o);
                            return t.la().then((function() {
                                var n = t.h;
                                return t.A.a.set(oc, a.w(), n)
                            }
                            )).then((function() {
                                var n = Ni("cordova.plugins.browsertab.isAvailable", u);
                                if ("function" != typeof n)
                                    throw new k("invalid-cordova-configuration");
                                var e = null;
                                n((function(n) {
                                    if (n) {
                                        if ("function" != typeof (e = Ni("cordova.plugins.browsertab.openUrl", u)))
                                            throw new k("invalid-cordova-configuration");
                                        e(l)
                                    } else {
                                        if ("function" != typeof (e = Ni("cordova.InAppBrowser.open", u)))
                                            throw new k("invalid-cordova-configuration");
                                        n = Si(),
                                        t.a = e(l, n.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || n.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
                                    }
                                }
                                ))
                            }
                            ))
                        }(r, t, n, e, i)
                    }
                    )).then((function() {
                        return new In((function(t, n) {
                            s = function() {
                                var n = Ni("cordova.plugins.browsertab.close", u);
                                return t(),
                                "function" == typeof n && n(),
                                r.a && "function" == typeof r.a.close && (r.a.close(),
                                r.a = null),
                                !1
                            }
                            ,
                            r.Ea(s),
                            c = function() {
                                a || (a = ke(2e3).then((function() {
                                    n(new k("redirect-cancelled-by-user"))
                                }
                                )))
                            }
                            ,
                            h = function() {
                                Fi() && c()
                            }
                            ,
                            o.addEventListener("resume", c, !1),
                            Si().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", h, !1)
                        }
                        )).s((function(t) {
                            return Ec(r).then((function() {
                                throw t
                            }
                            ))
                        }
                        ))
                    }
                    )).na((function() {
                        c && o.removeEventListener("resume", c, !1),
                        h && o.removeEventListener("visibilitychange", h, !1),
                        a && a.cancel(),
                        s && r.Ra(s),
                        r.c = null
                    }
                    ))
                }
                ,
                e.Ea = function(t) {
                    this.b.push(t),
                    Tc(this).s((function(n) {
                        "auth/invalid-cordova-configuration" === n.code && (n = new Vo("unknown",null,null,null,new k("no-auth-event")),
                        t(n))
                    }
                    ))
                }
                ,
                e.Ra = function(t) {
                    Y(this.b, (function(n) {
                        return n == t
                    }
                    ))
                }
                ;
                var kc = {
                    name: "pendingRedirect",
                    D: "session"
                };
                function Sc(t) {
                    return nc(t.b, kc, t.a)
                }
                function Nc(t, n, e, i) {
                    this.i = {},
                    this.u = 0,
                    this.O = t,
                    this.m = n,
                    this.v = e,
                    this.G = i,
                    this.h = [],
                    this.f = !1,
                    this.l = I(this.o, this),
                    this.b = new qc,
                    this.A = new Xc,
                    this.g = new Ac(Fc(this.m, this.v)),
                    this.c = {},
                    this.c.unknown = this.b,
                    this.c.signInViaRedirect = this.b,
                    this.c.linkViaRedirect = this.b,
                    this.c.reauthViaRedirect = this.b,
                    this.c.signInViaPopup = this.A,
                    this.c.linkViaPopup = this.A,
                    this.c.reauthViaPopup = this.A,
                    this.a = _c(this.O, this.m, this.v, N, this.G)
                }
                function _c(t, e, i, r, o) {
                    var a = n.a.SDK_VERSION || null;
                    return mi() ? new bc(t,e,i,a,r,o) : new fu(t,e,i,a,r,o)
                }
                function Oc(t) {
                    t.f || (t.f = !0,
                    t.a.Ea(t.l));
                    var n = t.a;
                    return t.a.la().s((function(e) {
                        throw t.a == n && t.reset(),
                        e
                    }
                    ))
                }
                function Cc(t) {
                    t.a.Wb() && Oc(t).s((function(n) {
                        var e = new Vo("unknown",null,null,null,new k("operation-not-supported-in-this-environment"));
                        Mc(n) && t.o(e)
                    }
                    )),
                    t.a.Sb() || Hc(t.b)
                }
                function Rc(t, n) {
                    X(t.h, n) || t.h.push(n),
                    t.f || function(t) {
                        return t.b.get(kc, t.a).then((function(t) {
                            return "pending" == t
                        }
                        ))
                    }(t.g).then((function(n) {
                        n ? Sc(t.g).then((function() {
                            Oc(t).s((function(n) {
                                var e = new Vo("unknown",null,null,null,new k("operation-not-supported-in-this-environment"));
                                Mc(n) && t.o(e)
                            }
                            ))
                        }
                        )) : Cc(t)
                    }
                    )).s((function() {
                        Cc(t)
                    }
                    ))
                }
                function Pc(t, n) {
                    Y(t.h, (function(t) {
                        return t == n
                    }
                    ))
                }
                Nc.prototype.reset = function() {
                    this.f = !1,
                    this.a.Ra(this.l),
                    this.a = _c(this.O, this.m, this.v, null, this.G),
                    this.i = {}
                }
                ,
                Nc.prototype.o = function(t) {
                    if (!t)
                        throw new k("invalid-auth-event");
                    if (6e5 <= E() - this.u && (this.i = {},
                    this.u = 0),
                    t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
                        return !1;
                    for (var n = !1, e = 0; e < this.h.length; e++) {
                        var i = this.h[e];
                        if (i.Eb(t.c, t.b)) {
                            (n = this.c[t.c]) && (n.h(t, i),
                            t && (t.f || t.b) && (this.i[t.getUid()] = !0,
                            this.u = E())),
                            n = !0;
                            break
                        }
                    }
                    return Hc(this.b),
                    n
                }
                ;
                var Dc = new Vi(2e3,1e4)
                  , Lc = new Vi(3e4,6e4);
                function xc(t, n, e, i, r, o, a) {
                    return t.a.Lb(n, e, i, (function() {
                        t.f || (t.f = !0,
                        t.a.Ea(t.l))
                    }
                    ), (function() {
                        t.reset()
                    }
                    ), r, o, a)
                }
                function Mc(t) {
                    return !(!t || "auth/cordova-not-ready" != t.code)
                }
                function jc(t, n, e, i, r) {
                    var o;
                    return function(t) {
                        return t.b.set(kc, "pending", t.a)
                    }(t.g).then((function() {
                        return t.a.Mb(n, e, i, r).s((function(n) {
                            if (Mc(n))
                                throw new k("operation-not-supported-in-this-environment");
                            return o = n,
                            Sc(t.g).then((function() {
                                throw o
                            }
                            ))
                        }
                        )).then((function() {
                            return t.a.Zb() ? new In((function() {}
                            )) : Sc(t.g).then((function() {
                                return t.qa()
                            }
                            )).then((function() {}
                            )).s((function() {}
                            ))
                        }
                        ))
                    }
                    ))
                }
                function Uc(t, n, e, i, r) {
                    return t.a.Nb(i, (function(t) {
                        n.ma(e, null, t, r)
                    }
                    ), Dc.get())
                }
                Nc.prototype.qa = function() {
                    return this.b.qa()
                }
                ;
                var Vc = {};
                function Fc(t, n, e) {
                    return t = t + ":" + n,
                    e && (t = t + ":" + e.url),
                    t
                }
                function Kc(t, n, e, i) {
                    var r = Fc(n, e, i);
                    return Vc[r] || (Vc[r] = new Nc(t,n,e,i)),
                    Vc[r]
                }
                function qc() {
                    this.b = null,
                    this.f = [],
                    this.c = [],
                    this.a = null,
                    this.i = this.g = !1
                }
                function Hc(t) {
                    t.g || (t.g = !0,
                    Wc(t, !1, null, null))
                }
                function Gc(t) {
                    t.g && !t.i && Wc(t, !1, null, null)
                }
                function Bc(t, n) {
                    if (t.b = function() {
                        return _n(n)
                    }
                    ,
                    t.f.length)
                        for (var e = 0; e < t.f.length; e++)
                            t.f[e](n)
                }
                function Wc(t, n, e, i) {
                    n ? i ? function(t, n) {
                        if (t.b = function() {
                            return On(n)
                        }
                        ,
                        t.c.length)
                            for (var e = 0; e < t.c.length; e++)
                                t.c[e](n)
                    }(t, i) : Bc(t, e) : Bc(t, {
                        user: null
                    }),
                    t.f = [],
                    t.c = []
                }
                function Xc() {}
                function Jc() {
                    this.hb = !1,
                    Object.defineProperty(this, "appVerificationDisabled", {
                        get: function() {
                            return this.hb
                        },
                        set: function(t) {
                            this.hb = t
                        },
                        enumerable: !1
                    })
                }
                function Yc(t, n) {
                    this.a = n,
                    Ji(this, "verificationId", t)
                }
                function zc(t, n, e, i) {
                    return new xo(t).eb(n, e).then((function(t) {
                        return new Yc(t,i)
                    }
                    ))
                }
                function $c(t) {
                    var n = Hr(t);
                    if (!(n && n.exp && n.auth_time && n.iat))
                        throw new k("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                    Yi(this, {
                        token: t,
                        expirationTime: qi(1e3 * n.exp),
                        authTime: qi(1e3 * n.auth_time),
                        issuedAtTime: qi(1e3 * n.iat),
                        signInProvider: n.firebase && n.firebase.sign_in_provider ? n.firebase.sign_in_provider : null,
                        signInSecondFactor: n.firebase && n.firebase.sign_in_second_factor ? n.firebase.sign_in_second_factor : null,
                        claims: n
                    })
                }
                function Zc(t, n, e) {
                    var i = n && n[th];
                    if (!i)
                        throw new k("argument-error","Internal assert: Invalid MultiFactorResolver");
                    this.a = t,
                    this.f = pt(n),
                    this.g = e,
                    this.c = new ro(null,i),
                    this.b = [];
                    var r = this;
                    H(n[Qc] || [], (function(t) {
                        (t = Qi(t)) && r.b.push(t)
                    }
                    )),
                    Ji(this, "auth", this.a),
                    Ji(this, "session", this.c),
                    Ji(this, "hints", this.b)
                }
                qc.prototype.reset = function() {
                    this.b = null,
                    this.a && (this.a.cancel(),
                    this.a = null)
                }
                ,
                qc.prototype.h = function(t, n) {
                    if (t) {
                        this.reset(),
                        this.g = !0;
                        var e = t.c
                          , i = t.b
                          , r = t.a && "auth/web-storage-unsupported" == t.a.code
                          , o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
                        this.i = !(!r && !o),
                        "unknown" != e || r || o ? t.a ? (Wc(this, !0, null, t.a),
                        _n()) : n.Fa(e, i) ? function(t, n, e) {
                            e = e.Fa(n.c, n.b);
                            var i = n.g
                              , r = n.f
                              , o = n.i
                              , a = n.S()
                              , s = !!n.c.match(/Redirect$/);
                            e(i, r, a, o).then((function(n) {
                                Wc(t, s, n, null)
                            }
                            )).s((function(n) {
                                Wc(t, s, null, n)
                            }
                            ))
                        }(this, t, n) : On(new k("invalid-auth-event")) : (Wc(this, !1, null, null),
                        _n())
                    } else
                        On(new k("invalid-auth-event"))
                }
                ,
                qc.prototype.qa = function() {
                    var t = this;
                    return new In((function(n, e) {
                        t.b ? t.b().then(n, e) : (t.f.push(n),
                        t.c.push(e),
                        function(t) {
                            var n = new k("timeout");
                            t.a && t.a.cancel(),
                            t.a = ke(Lc.get()).then((function() {
                                t.b || (t.g = !0,
                                Wc(t, !0, null, n))
                            }
                            ))
                        }(t))
                    }
                    ))
                }
                ,
                Xc.prototype.h = function(t, n) {
                    if (t) {
                        var e = t.c
                          , i = t.b;
                        t.a ? (n.ma(t.c, null, t.a, t.b),
                        _n()) : n.Fa(e, i) ? function(t, n) {
                            var e = t.b
                              , i = t.c;
                            n.Fa(i, e)(t.g, t.f, t.S(), t.i).then((function(t) {
                                n.ma(i, t, null, e)
                            }
                            )).s((function(t) {
                                n.ma(i, null, t, e)
                            }
                            ))
                        }(t, n) : On(new k("invalid-auth-event"))
                    } else
                        On(new k("invalid-auth-event"))
                }
                ,
                Yc.prototype.confirm = function(t) {
                    return t = Mo(this.verificationId, t),
                    this.a(t)
                }
                ;
                var Qc = "mfaInfo"
                  , th = "mfaPendingCredential";
                function nh(t, n, e, i) {
                    k.call(this, "multi-factor-auth-required", i, n),
                    this.b = new Zc(t,n,e),
                    Ji(this, "resolver", this.b)
                }
                function eh(t, n, e) {
                    if (t && v(t.serverResponse) && "auth/multi-factor-auth-required" === t.code)
                        try {
                            return new nh(n,t.serverResponse,e,t.message)
                        } catch (i) {}
                    return null
                }
                function ih() {}
                function rh(t) {
                    Ji(this, "factorId", t.fa),
                    this.a = t
                }
                function oh(t) {
                    if (rh.call(this, t),
                    this.a.fa != xo.PROVIDER_ID)
                        throw new k("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")
                }
                function ah(t, n) {
                    for (var e in zn.call(this, t),
                    n)
                        this[e] = n[e]
                }
                function sh(t, n) {
                    this.a = t,
                    this.b = [],
                    this.c = I(this.xc, this),
                    ue(this.a, "userReloaded", this.c);
                    var e = [];
                    n && n.multiFactor && n.multiFactor.enrolledFactors && H(n.multiFactor.enrolledFactors, (function(t) {
                        var n = null
                          , i = {};
                        if (t) {
                            t.uid && (i[er] = t.uid),
                            t.displayName && (i[tr] = t.displayName),
                            t.enrollmentTime && (i[nr] = new Date(t.enrollmentTime).toISOString()),
                            t.phoneNumber && (i[ir] = t.phoneNumber);
                            try {
                                n = new rr(i)
                            } catch (r) {}
                            t = n
                        } else
                            t = null;
                        t && e.push(t)
                    }
                    )),
                    uh(this, e)
                }
                function uh(t, n) {
                    t.b = n,
                    Ji(t, "enrolledFactors", n)
                }
                function ch(t, n, e) {
                    if (this.h = t,
                    this.i = n,
                    this.g = e,
                    this.c = 3e4,
                    this.f = 96e4,
                    this.b = null,
                    this.a = this.c,
                    this.f < this.c)
                        throw Error("Proactive refresh lower bound greater than upper bound!")
                }
                function hh(t) {
                    this.c = t,
                    this.b = this.a = null
                }
                function lh(t) {
                    return t.b && 1e3 * t.b.c || 0
                }
                function fh(t, n) {
                    var e = n.refreshToken;
                    t.b = qr(n[za] || ""),
                    t.a = e
                }
                function dh(t, n) {
                    return function(t, n) {
                        return new In((function(e, i) {
                            "refresh_token" == n.grant_type && n.refresh_token || "authorization_code" == n.grant_type && n.code ? os(t, t.l + "?key=" + encodeURIComponent(t.c), (function(t) {
                                t ? t.error ? i(iu(t)) : t.access_token && t.refresh_token ? e(t) : i(new k("internal-error")) : i(new k("network-request-failed"))
                            }
                            ), "POST", ze(n).toString(), t.g, t.v.get()) : i(new k("internal-error"))
                        }
                        ))
                    }(t.c, n).then((function(n) {
                        return t.b = qr(n.access_token),
                        t.a = n.refresh_token,
                        {
                            accessToken: t.b.toString(),
                            refreshToken: t.a
                        }
                    }
                    )).s((function(n) {
                        throw "auth/user-token-expired" == n.code && (t.a = null),
                        n
                    }
                    ))
                }
                function ph(t, n) {
                    this.a = t || null,
                    this.b = n || null,
                    Yi(this, {
                        lastSignInTime: qi(n || null),
                        creationTime: qi(t || null)
                    })
                }
                function vh(t, n, e, i, r, o) {
                    Yi(this, {
                        uid: t,
                        displayName: i || null,
                        photoURL: r || null,
                        email: e || null,
                        phoneNumber: o || null,
                        providerId: n
                    })
                }
                function mh(t, e, i) {
                    this.G = [],
                    this.l = t.apiKey,
                    this.m = t.appName,
                    this.o = t.authDomain || null;
                    var r = n.a.SDK_VERSION ? ki(n.a.SDK_VERSION) : null;
                    this.a = new Ja(this.l,R(N),r),
                    t.emulatorConfig && es(this.a, t.emulatorConfig),
                    this.b = new hh(this.a),
                    Ah(this, e[za]),
                    fh(this.b, e),
                    Ji(this, "refreshToken", this.b.a),
                    Nh(this, i || {}),
                    we.call(this),
                    this.P = !1,
                    this.o && Oi() && (this.i = Kc(this.o, this.l, this.m)),
                    this.R = [],
                    this.f = null,
                    this.u = function(t) {
                        return new ch((function() {
                            return t.I(!0)
                        }
                        ),(function(t) {
                            return !(!t || "auth/network-request-failed" != t.code)
                        }
                        ),(function() {
                            var n = lh(t.b) - E() - 3e5;
                            return 0 < n ? n : 0
                        }
                        ))
                    }(this),
                    this.$ = I(this.gb, this);
                    var o = this;
                    this.pa = null,
                    this.Ba = function(t) {
                        o.wa(t.h)
                    }
                    ,
                    this.ba = null,
                    this.za = function(t) {
                        es(o.a, t.c)
                    }
                    ,
                    this.W = null,
                    this.X = [],
                    this.Aa = function(t) {
                        yh(o, t.f)
                    }
                    ,
                    this.aa = null,
                    this.N = new sh(this,i),
                    Ji(this, "multiFactor", this.N)
                }
                function gh(t, n) {
                    t.ba && le(t.ba, "languageCodeChanged", t.Ba),
                    (t.ba = n) && ue(n, "languageCodeChanged", t.Ba)
                }
                function bh(t, n) {
                    t.W && le(t.W, "emulatorConfigChanged", t.za),
                    (t.W = n) && ue(n, "emulatorConfigChanged", t.za)
                }
                function yh(t, e) {
                    t.X = e,
                    rs(t.a, n.a.SDK_VERSION ? ki(n.a.SDK_VERSION, t.X) : null)
                }
                function wh(t, n) {
                    t.aa && le(t.aa, "frameworkChanged", t.Aa),
                    (t.aa = n) && ue(n, "frameworkChanged", t.Aa)
                }
                function Ih(t) {
                    try {
                        return n.a.app(t.m).auth()
                    } catch (e) {
                        throw new k("internal-error","No firebase.auth.Auth instance is available for the Firebase App '" + t.m + "'!")
                    }
                }
                function Th(t) {
                    t.A || t.u.b || (t.u.start(),
                    le(t, "tokenChanged", t.$),
                    ue(t, "tokenChanged", t.$))
                }
                function Eh(t) {
                    le(t, "tokenChanged", t.$),
                    t.u.stop()
                }
                function Ah(t, n) {
                    t.ya = n,
                    Ji(t, "_lat", n)
                }
                function kh(t) {
                    for (var n = [], e = 0; e < t.R.length; e++)
                        n.push(t.R[e](t));
                    return Rn(n).then((function() {
                        return t
                    }
                    ))
                }
                function Sh(t) {
                    t.i && !t.P && (t.P = !0,
                    Rc(t.i, t))
                }
                function Nh(t, n) {
                    Yi(t, {
                        uid: n.uid,
                        displayName: n.displayName || null,
                        photoURL: n.photoURL || null,
                        email: n.email || null,
                        emailVerified: n.emailVerified || !1,
                        phoneNumber: n.phoneNumber || null,
                        isAnonymous: n.isAnonymous || !1,
                        tenantId: n.tenantId || null,
                        metadata: new ph(n.createdAt,n.lastLoginAt),
                        providerData: []
                    }),
                    t.a.b = t.tenantId
                }
                function _h() {}
                function Oh(t) {
                    return _n().then((function() {
                        if (t.A)
                            throw new k("app-deleted")
                    }
                    ))
                }
                function Ch(t) {
                    return B(t.providerData, (function(t) {
                        return t.providerId
                    }
                    ))
                }
                function Rh(t, n) {
                    n && (Ph(t, n.providerId),
                    t.providerData.push(n))
                }
                function Ph(t, n) {
                    Y(t.providerData, (function(t) {
                        return t.providerId == n
                    }
                    ))
                }
                function Dh(t, n, e) {
                    ("uid" != n || e) && t.hasOwnProperty(n) && Ji(t, n, e)
                }
                function Lh(t, n) {
                    t != n && (Yi(t, {
                        uid: n.uid,
                        displayName: n.displayName,
                        photoURL: n.photoURL,
                        email: n.email,
                        emailVerified: n.emailVerified,
                        phoneNumber: n.phoneNumber,
                        isAnonymous: n.isAnonymous,
                        tenantId: n.tenantId,
                        providerData: []
                    }),
                    n.metadata ? Ji(t, "metadata", function(t) {
                        return new ph(t.a,t.b)
                    }(n.metadata)) : Ji(t, "metadata", new ph),
                    H(n.providerData, (function(n) {
                        Rh(t, n)
                    }
                    )),
                    function(t, n) {
                        t.b = n.b,
                        t.a = n.a
                    }(t.b, n.b),
                    Ji(t, "refreshToken", t.b.a),
                    uh(t.N, n.N.b))
                }
                function xh(t) {
                    return t.I().then((function(n) {
                        var e = t.isAnonymous;
                        return function(t, n) {
                            return nu(t.a, Ps, {
                                idToken: n
                            }).then(I(t.Jc, t))
                        }(t, n).then((function() {
                            return e || Dh(t, "isAnonymous", !1),
                            n
                        }
                        ))
                    }
                    ))
                }
                function Mh(t, n) {
                    n[za] && t.ya != n[za] && (fh(t.b, n),
                    t.dispatchEvent(new ah("tokenChanged")),
                    Ah(t, n[za]),
                    Dh(t, "refreshToken", t.b.a))
                }
                function jh(t, n) {
                    return xh(t).then((function() {
                        if (X(Ch(t), n))
                            return kh(t).then((function() {
                                throw new k("provider-already-linked")
                            }
                            ))
                    }
                    ))
                }
                function Uh(t, n, e) {
                    return zi({
                        user: t,
                        credential: jo(n),
                        additionalUserInfo: n = Jr(n),
                        operationType: e
                    })
                }
                function Vh(t, n) {
                    return Mh(t, n),
                    t.reload().then((function() {
                        return t
                    }
                    ))
                }
                function Fh(t, e, i, r, o) {
                    if (!Oi())
                        return On(new k("operation-not-supported-in-this-environment"));
                    if (t.f && !o)
                        return On(t.f);
                    var a = Xr(i.providerId)
                      , s = Mi(t.uid + ":::")
                      , u = null;
                    (!Pi() || gi()) && t.o && i.isOAuthProvider && (u = mu(t.o, t.l, t.m, e, i, null, s, n.a.SDK_VERSION || null, null, null, t.tenantId));
                    var c = fi(u, a && a.ua, a && a.ta);
                    return r = r().then((function() {
                        if (qh(t),
                        !o)
                            return t.I().then((function() {}
                            ))
                    }
                    )).then((function() {
                        return xc(t.i, c, e, i, s, !!u, t.tenantId)
                    }
                    )).then((function() {
                        return new In((function(n, i) {
                            t.ma(e, null, new k("cancelled-popup-request"), t.h || null),
                            t.g = n,
                            t.O = i,
                            t.h = s,
                            t.c = Uc(t.i, t, e, c, s)
                        }
                        ))
                    }
                    )).then((function(t) {
                        return c && li(c),
                        t ? zi(t) : null
                    }
                    )).s((function(t) {
                        throw c && li(c),
                        t
                    }
                    )),
                    Hh(t, r, o)
                }
                function Kh(t, n, e, i, r) {
                    if (!Oi())
                        return On(new k("operation-not-supported-in-this-environment"));
                    if (t.f && !r)
                        return On(t.f);
                    var o = null
                      , a = Mi(t.uid + ":::");
                    return i = i().then((function() {
                        if (qh(t),
                        !r)
                            return t.I().then((function() {}
                            ))
                    }
                    )).then((function() {
                        return t.ga = a,
                        kh(t)
                    }
                    )).then((function(n) {
                        return t.ha && (n = (n = t.ha).b.set(Wh, t.w(), n.a)),
                        n
                    }
                    )).then((function() {
                        return jc(t.i, n, e, a, t.tenantId)
                    }
                    )).s((function(n) {
                        if (o = n,
                        t.ha)
                            return Xh(t.ha);
                        throw o
                    }
                    )).then((function() {
                        if (o)
                            throw o
                    }
                    )),
                    Hh(t, i, r)
                }
                function qh(t) {
                    if (!t.i || !t.P) {
                        if (t.i && !t.P)
                            throw new k("internal-error");
                        throw new k("auth-domain-config-required")
                    }
                }
                function Hh(t, n, e) {
                    var i = function(t, n, e) {
                        return t.f && !e ? (n.cancel(),
                        On(t.f)) : n.s((function(n) {
                            throw !n || "auth/user-disabled" != n.code && "auth/user-token-expired" != n.code || (t.f || t.dispatchEvent(new ah("userInvalidated")),
                            t.f = n),
                            n
                        }
                        ))
                    }(t, n, e);
                    return t.G.push(i),
                    i.na((function() {
                        J(t.G, i)
                    }
                    )),
                    i.s((function(n) {
                        var e = null;
                        throw n && "auth/multi-factor-auth-required" === n.code && (e = eh(n.w(), Ih(t), I(t.ic, t))),
                        e || n
                    }
                    ))
                }
                function Gh(t) {
                    if (!t.apiKey)
                        return null;
                    var n = {
                        apiKey: t.apiKey,
                        authDomain: t.authDomain,
                        appName: t.appName,
                        emulatorConfig: t.emulatorConfig
                    }
                      , e = {};
                    if (!t.stsTokenManager || !t.stsTokenManager.accessToken)
                        return null;
                    e[za] = t.stsTokenManager.accessToken,
                    e.refreshToken = t.stsTokenManager.refreshToken || null;
                    var i = new mh(n,e,t);
                    return t.providerData && H(t.providerData, (function(t) {
                        t && Rh(i, zi(t))
                    }
                    )),
                    t.redirectEventId && (i.ga = t.redirectEventId),
                    i
                }
                function Bh(t) {
                    this.a = t,
                    this.b = Zu()
                }
                Zc.prototype.Qc = function(t) {
                    var n = this;
                    return t.rb(this.a.a, this.c).then((function(t) {
                        var e = pt(n.f);
                        return delete e[Qc],
                        delete e[th],
                        mt(e, t),
                        n.g(e)
                    }
                    ))
                }
                ,
                A(nh, k),
                ih.prototype.rb = function(t, n, e) {
                    return n.type == oo ? function(t, n, e, i) {
                        return e.Ha().then((function(e) {
                            return e = {
                                idToken: e
                            },
                            void 0 !== i && (e.displayName = i),
                            mt(e, {
                                phoneVerificationInfo: Lo(t.a)
                            }),
                            nu(n, Cs, e)
                        }
                        ))
                    }(this, t, n, e) : function(t, n, e) {
                        return e.Ha().then((function(e) {
                            return mt(e = {
                                mfaPendingCredential: e
                            }, {
                                phoneVerificationInfo: Lo(t.a)
                            }),
                            nu(n, Rs, e)
                        }
                        ))
                    }(this, t, n)
                }
                ,
                A(rh, ih),
                A(oh, rh),
                A(ah, zn),
                (e = sh.prototype).xc = function(t) {
                    uh(this, function(t) {
                        var n = [];
                        return H(t.mfaInfo || [], (function(t) {
                            (t = Qi(t)) && n.push(t)
                        }
                        )),
                        n
                    }(t.gd))
                }
                ,
                e.Qb = function() {
                    return this.a.I().then((function(t) {
                        return new ro(t,null)
                    }
                    ))
                }
                ,
                e.ec = function(t, n) {
                    var e = this
                      , i = this.a.a;
                    return this.Qb().then((function(e) {
                        return t.rb(i, e, n)
                    }
                    )).then((function(t) {
                        return Mh(e.a, t),
                        e.a.reload()
                    }
                    ))
                }
                ,
                e.ad = function(t) {
                    var n = this
                      , e = "string" == typeof t ? t : t.uid
                      , i = this.a.a;
                    return this.a.I().then((function(t) {
                        return nu(i, tu, {
                            idToken: t,
                            mfaEnrollmentId: e
                        })
                    }
                    )).then((function(t) {
                        var i = G(n.b, (function(t) {
                            return t.uid != e
                        }
                        ));
                        return uh(n, i),
                        Mh(n.a, t),
                        n.a.reload().s((function(t) {
                            if ("auth/user-token-expired" != t.code)
                                throw t
                        }
                        ))
                    }
                    ))
                }
                ,
                e.w = function() {
                    return {
                        multiFactor: {
                            enrolledFactors: B(this.b, (function(t) {
                                return t.w()
                            }
                            ))
                        }
                    }
                }
                ,
                ch.prototype.start = function() {
                    this.a = this.c,
                    function t(n, e) {
                        n.stop(),
                        n.b = ke(function(t, n) {
                            return n ? (t.a = t.c,
                            t.g()) : (n = t.a,
                            t.a *= 2,
                            t.a > t.f && (t.a = t.f),
                            n)
                        }(n, e)).then((function() {
                            return function() {
                                var t = u.document
                                  , n = null;
                                return Fi() || !t ? _n() : new In((function(e) {
                                    n = function() {
                                        Fi() && (t.removeEventListener("visibilitychange", n, !1),
                                        e())
                                    }
                                    ,
                                    t.addEventListener("visibilitychange", n, !1)
                                }
                                )).s((function(e) {
                                    throw t.removeEventListener("visibilitychange", n, !1),
                                    e
                                }
                                ))
                            }()
                        }
                        )).then((function() {
                            return n.h()
                        }
                        )).then((function() {
                            t(n, !0)
                        }
                        )).s((function(e) {
                            n.i(e) && t(n, !1)
                        }
                        ))
                    }(this, !0)
                }
                ,
                ch.prototype.stop = function() {
                    this.b && (this.b.cancel(),
                    this.b = null)
                }
                ,
                hh.prototype.w = function() {
                    return {
                        apiKey: this.c.c,
                        refreshToken: this.a,
                        accessToken: this.b && this.b.toString(),
                        expirationTime: lh(this)
                    }
                }
                ,
                hh.prototype.getToken = function(t) {
                    return t = !!t,
                    this.b && !this.a ? On(new k("user-token-expired")) : t || !this.b || E() > lh(this) - 3e4 ? this.a ? dh(this, {
                        grant_type: "refresh_token",
                        refresh_token: this.a
                    }) : _n(null) : _n({
                        accessToken: this.b.toString(),
                        refreshToken: this.a
                    })
                }
                ,
                ph.prototype.w = function() {
                    return {
                        lastLoginAt: this.b,
                        createdAt: this.a
                    }
                }
                ,
                A(mh, we),
                mh.prototype.wa = function(t) {
                    this.pa = t,
                    ns(this.a, t)
                }
                ,
                mh.prototype.ka = function() {
                    return this.pa
                }
                ,
                mh.prototype.Ga = function() {
                    return $(this.X)
                }
                ,
                mh.prototype.gb = function() {
                    this.u.b && (this.u.stop(),
                    this.u.start())
                }
                ,
                Ji(mh.prototype, "providerId", "firebase"),
                (e = mh.prototype).reload = function() {
                    var t = this;
                    return Hh(this, Oh(this).then((function() {
                        return xh(t).then((function() {
                            return kh(t)
                        }
                        )).then(_h)
                    }
                    )))
                }
                ,
                e.nc = function(t) {
                    return this.I(t).then((function(t) {
                        return new $c(t)
                    }
                    ))
                }
                ,
                e.I = function(t) {
                    var n = this;
                    return Hh(this, Oh(this).then((function() {
                        return n.b.getToken(t)
                    }
                    )).then((function(t) {
                        if (!t)
                            throw new k("internal-error");
                        return t.accessToken != n.ya && (Ah(n, t.accessToken),
                        n.dispatchEvent(new ah("tokenChanged"))),
                        Dh(n, "refreshToken", t.refreshToken),
                        t.accessToken
                    }
                    )))
                }
                ,
                e.Jc = function(t) {
                    if (!(t = t.users) || !t.length)
                        throw new k("internal-error");
                    Nh(this, {
                        uid: (t = t[0]).localId,
                        displayName: t.displayName,
                        photoURL: t.photoUrl,
                        email: t.email,
                        emailVerified: !!t.emailVerified,
                        phoneNumber: t.phoneNumber,
                        lastLoginAt: t.lastLoginAt,
                        createdAt: t.createdAt,
                        tenantId: t.tenantId
                    });
                    for (var n = function(t) {
                        return (t = t.providerUserInfo) && t.length ? B(t, (function(t) {
                            return new vh(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)
                        }
                        )) : []
                    }(t), e = 0; e < n.length; e++)
                        Rh(this, n[e]);
                    Dh(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length)),
                    this.dispatchEvent(new ah("userReloaded",{
                        gd: t
                    }))
                }
                ,
                e.Kc = function(t) {
                    return Wi("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),
                    this.sb(t)
                }
                ,
                e.sb = function(t) {
                    var n = this
                      , e = null;
                    return Hh(this, t.c(this.a, this.uid).then((function(t) {
                        return Mh(n, t),
                        e = Uh(n, t, "reauthenticate"),
                        n.f = null,
                        n.reload()
                    }
                    )).then((function() {
                        return e
                    }
                    )), !0)
                }
                ,
                e.Bc = function(t) {
                    return Wi("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),
                    this.pb(t)
                }
                ,
                e.pb = function(t) {
                    var n = this
                      , e = null;
                    return Hh(this, jh(this, t.providerId).then((function() {
                        return n.I()
                    }
                    )).then((function(e) {
                        return t.b(n.a, e)
                    }
                    )).then((function(t) {
                        return e = Uh(n, t, "link"),
                        Vh(n, t)
                    }
                    )).then((function() {
                        return e
                    }
                    )))
                }
                ,
                e.Cc = function(t, n) {
                    var e = this;
                    return Hh(this, jh(this, "phone").then((function() {
                        return zc(Ih(e), t, n, I(e.pb, e))
                    }
                    )))
                }
                ,
                e.Lc = function(t, n) {
                    var e = this;
                    return Hh(this, _n().then((function() {
                        return zc(Ih(e), t, n, I(e.sb, e))
                    }
                    )), !0)
                }
                ,
                e.Ab = function(t) {
                    var n = this;
                    return Hh(this, this.I().then((function(e) {
                        return n.a.Ab(e, t)
                    }
                    )).then((function(t) {
                        return Mh(n, t),
                        n.reload()
                    }
                    )))
                }
                ,
                e.dd = function(t) {
                    var n = this;
                    return Hh(this, this.I().then((function(e) {
                        return t.b(n.a, e)
                    }
                    )).then((function(t) {
                        return Mh(n, t),
                        n.reload()
                    }
                    )))
                }
                ,
                e.Bb = function(t) {
                    var n = this;
                    return Hh(this, this.I().then((function(e) {
                        return n.a.Bb(e, t)
                    }
                    )).then((function(t) {
                        return Mh(n, t),
                        n.reload()
                    }
                    )))
                }
                ,
                e.Cb = function(t) {
                    if (void 0 === t.displayName && void 0 === t.photoURL)
                        return Oh(this);
                    var n = this;
                    return Hh(this, this.I().then((function(e) {
                        return n.a.Cb(e, {
                            displayName: t.displayName,
                            photoUrl: t.photoURL
                        })
                    }
                    )).then((function(t) {
                        return Mh(n, t),
                        Dh(n, "displayName", t.displayName || null),
                        Dh(n, "photoURL", t.photoUrl || null),
                        H(n.providerData, (function(t) {
                            "password" === t.providerId && (Ji(t, "displayName", n.displayName),
                            Ji(t, "photoURL", n.photoURL))
                        }
                        )),
                        kh(n)
                    }
                    )).then(_h))
                }
                ,
                e.bd = function(t) {
                    var n = this;
                    return Hh(this, xh(this).then((function(e) {
                        return X(Ch(n), t) ? function(t, n, e) {
                            return nu(t, Ns, {
                                idToken: n,
                                deleteProvider: e
                            })
                        }(n.a, e, [t]).then((function(t) {
                            var e = {};
                            return H(t.providerUserInfo || [], (function(t) {
                                e[t.providerId] = !0
                            }
                            )),
                            H(Ch(n), (function(t) {
                                e[t] || Ph(n, t)
                            }
                            )),
                            e[xo.PROVIDER_ID] || Ji(n, "phoneNumber", null),
                            kh(n)
                        }
                        )) : kh(n).then((function() {
                            throw new k("no-such-provider")
                        }
                        ))
                    }
                    )))
                }
                ,
                e.delete = function() {
                    var t = this;
                    return Hh(this, this.I().then((function(n) {
                        return nu(t.a, Ss, {
                            idToken: n
                        })
                    }
                    )).then((function() {
                        t.dispatchEvent(new ah("userDeleted"))
                    }
                    ))).then((function() {
                        for (var n = 0; n < t.G.length; n++)
                            t.G[n].cancel("app-deleted");
                        gh(t, null),
                        bh(t, null),
                        wh(t, null),
                        t.G = [],
                        t.A = !0,
                        Eh(t),
                        Ji(t, "refreshToken", null),
                        t.i && Pc(t.i, t)
                    }
                    ))
                }
                ,
                e.Eb = function(t, n) {
                    return !!("linkViaPopup" == t && (this.h || null) == n && this.g || "reauthViaPopup" == t && (this.h || null) == n && this.g || "linkViaRedirect" == t && (this.ga || null) == n || "reauthViaRedirect" == t && (this.ga || null) == n)
                }
                ,
                e.ma = function(t, n, e, i) {
                    "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.h || null) || (e && this.O ? this.O(e) : n && !e && this.g && this.g(n),
                    this.c && (this.c.cancel(),
                    this.c = null),
                    delete this.g,
                    delete this.O)
                }
                ,
                e.Fa = function(t, n) {
                    return "linkViaPopup" == t && n == (this.h || null) ? I(this.Jb, this) : "reauthViaPopup" == t && n == (this.h || null) ? I(this.Kb, this) : "linkViaRedirect" == t && (this.ga || null) == n ? I(this.Jb, this) : "reauthViaRedirect" == t && (this.ga || null) == n ? I(this.Kb, this) : null
                }
                ,
                e.Dc = function(t) {
                    var n = this;
                    return Fh(this, "linkViaPopup", t, (function() {
                        return jh(n, t.providerId).then((function() {
                            return kh(n)
                        }
                        ))
                    }
                    ), !1)
                }
                ,
                e.Mc = function(t) {
                    return Fh(this, "reauthViaPopup", t, (function() {
                        return _n()
                    }
                    ), !0)
                }
                ,
                e.Ec = function(t) {
                    var n = this;
                    return Kh(this, "linkViaRedirect", t, (function() {
                        return jh(n, t.providerId)
                    }
                    ), !1)
                }
                ,
                e.Nc = function(t) {
                    return Kh(this, "reauthViaRedirect", t, (function() {
                        return _n()
                    }
                    ), !0)
                }
                ,
                e.Jb = function(t, n, e, i) {
                    var r = this;
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null;
                    return Hh(this, this.I().then((function(e) {
                        return ys(r.a, {
                            requestUri: t,
                            postBody: i,
                            sessionId: n,
                            idToken: e
                        })
                    }
                    )).then((function(t) {
                        return o = Uh(r, t, "link"),
                        Vh(r, t)
                    }
                    )).then((function() {
                        return o
                    }
                    )))
                }
                ,
                e.Kb = function(t, n, e, i) {
                    var r = this;
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null;
                    return Hh(this, _n().then((function() {
                        return uo(ws(r.a, {
                            requestUri: t,
                            sessionId: n,
                            postBody: i,
                            tenantId: e
                        }), r.uid)
                    }
                    )).then((function(t) {
                        return o = Uh(r, t, "reauthenticate"),
                        Mh(r, t),
                        r.f = null,
                        r.reload()
                    }
                    )).then((function() {
                        return o
                    }
                    )), !0)
                }
                ,
                e.tb = function(t) {
                    var n = this
                      , e = null;
                    return Hh(this, this.I().then((function(n) {
                        return e = n,
                        void 0 === t || dt(t) ? {} : Ur(new _r(t))
                    }
                    )).then((function(t) {
                        return n.a.tb(e, t)
                    }
                    )).then((function(t) {
                        if (n.email != t)
                            return n.reload()
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.Db = function(t, n) {
                    var e = this
                      , i = null;
                    return Hh(this, this.I().then((function(t) {
                        return i = t,
                        void 0 === n || dt(n) ? {} : Ur(new _r(n))
                    }
                    )).then((function(n) {
                        return e.a.Db(i, t, n)
                    }
                    )).then((function(t) {
                        if (e.email != t)
                            return e.reload()
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.ic = function(t) {
                    var n = null
                      , e = this;
                    return Hh(this, t = uo(_n(t), e.uid).then((function(t) {
                        return n = Uh(e, t, "reauthenticate"),
                        Mh(e, t),
                        e.f = null,
                        e.reload()
                    }
                    )).then((function() {
                        return n
                    }
                    )), !0)
                }
                ,
                e.toJSON = function() {
                    return this.w()
                }
                ,
                e.w = function() {
                    var t = {
                        uid: this.uid,
                        displayName: this.displayName,
                        photoURL: this.photoURL,
                        email: this.email,
                        emailVerified: this.emailVerified,
                        phoneNumber: this.phoneNumber,
                        isAnonymous: this.isAnonymous,
                        tenantId: this.tenantId,
                        providerData: [],
                        apiKey: this.l,
                        appName: this.m,
                        authDomain: this.o,
                        stsTokenManager: this.b.w(),
                        redirectEventId: this.ga || null
                    };
                    return this.metadata && mt(t, this.metadata.w()),
                    H(this.providerData, (function(n) {
                        t.providerData.push(function(t) {
                            var n, e = {};
                            for (n in t)
                                t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e
                        }(n))
                    }
                    )),
                    mt(t, this.N.w()),
                    t
                }
                ;
                var Wh = {
                    name: "redirectUser",
                    D: "session"
                };
                function Xh(t) {
                    return nc(t.b, Wh, t.a)
                }
                function Jh(t) {
                    this.a = t,
                    this.b = Zu(),
                    this.c = null,
                    this.f = function(t) {
                        var n = $h("local")
                          , e = $h("session")
                          , i = $h("none");
                        return function(t, n, e) {
                            var i = tc(n, e)
                              , r = Qu(t, n.D);
                            return t.get(n, e).then((function(o) {
                                var a = null;
                                try {
                                    a = xi(u.localStorage.getItem(i))
                                } catch (s) {}
                                if (a && !o)
                                    return u.localStorage.removeItem(i),
                                    t.set(n, a, e);
                                a && o && "localStorage" != r.type && u.localStorage.removeItem(i)
                            }
                            ))
                        }(t.b, n, t.a).then((function() {
                            return t.b.get(e, t.a)
                        }
                        )).then((function(r) {
                            return r ? e : t.b.get(i, t.a).then((function(e) {
                                return e ? i : t.b.get(n, t.a).then((function(e) {
                                    return e ? n : t.b.get(zh, t.a).then((function(t) {
                                        return t ? $h(t) : n
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        )).then((function(n) {
                            return t.c = n,
                            Yh(t, n.D)
                        }
                        )).s((function() {
                            t.c || (t.c = n)
                        }
                        ))
                    }(this),
                    this.b.addListener($h("local"), this.a, I(this.g, this))
                }
                function Yh(t, n) {
                    var e, i = [];
                    for (e in zu)
                        zu[e] !== n && i.push(nc(t.b, $h(zu[e]), t.a));
                    return i.push(nc(t.b, zh, t.a)),
                    function(t) {
                        return new In((function(n, e) {
                            var i = t.length
                              , r = [];
                            if (i)
                                for (var o = function(t, e) {
                                    i--,
                                    r[t] = e,
                                    0 == i && n(r)
                                }, a = function(t) {
                                    e(t)
                                }, s = 0; s < t.length; s++)
                                    Cn(t[s], T(o, s), a);
                            else
                                n(r)
                        }
                        ))
                    }(i)
                }
                Jh.prototype.g = function() {
                    var t = this
                      , n = $h("local");
                    nl(this, (function() {
                        return _n().then((function() {
                            return t.c && "local" != t.c.D ? t.b.get(n, t.a) : null
                        }
                        )).then((function(e) {
                            if (e)
                                return Yh(t, "local").then((function() {
                                    t.c = n
                                }
                                ))
                        }
                        ))
                    }
                    ))
                }
                ;
                var zh = {
                    name: "persistence",
                    D: "session"
                };
                function $h(t) {
                    return {
                        name: "authUser",
                        D: t
                    }
                }
                function Zh(t, n) {
                    return nl(t, (function() {
                        return t.b.set(t.c, n.w(), t.a)
                    }
                    ))
                }
                function Qh(t) {
                    return nl(t, (function() {
                        return nc(t.b, t.c, t.a)
                    }
                    ))
                }
                function tl(t, n, e) {
                    return nl(t, (function() {
                        return t.b.get(t.c, t.a).then((function(t) {
                            return t && n && (t.authDomain = n),
                            t && e && (t.emulatorConfig = e),
                            Gh(t || {})
                        }
                        ))
                    }
                    ))
                }
                function nl(t, n) {
                    return t.f = t.f.then(n, n),
                    t.f
                }
                function el(t) {
                    if (this.m = !1,
                    Ji(this, "settings", new Jc),
                    Ji(this, "app", t),
                    !ll(this).options || !ll(this).options.apiKey)
                        throw new k("invalid-api-key");
                    t = n.a.SDK_VERSION ? ki(n.a.SDK_VERSION) : null,
                    this.a = new Ja(ll(this).options && ll(this).options.apiKey,R(N),t),
                    this.R = [],
                    this.u = [],
                    this.P = [],
                    this.ac = n.a.INTERNAL.createSubscribe(I(this.yc, this)),
                    this.X = void 0,
                    this.bc = n.a.INTERNAL.createSubscribe(I(this.zc, this)),
                    cl(this, null),
                    this.l = new Jh(ll(this).options.apiKey + ":" + ll(this).name),
                    this.G = new Bh(ll(this).options.apiKey + ":" + ll(this).name),
                    this.$ = vl(this, function(t) {
                        var n = ll(t).options.authDomain
                          , e = function(t) {
                            var n = function(t, n) {
                                return t.b.get(Wh, t.a).then((function(t) {
                                    return t && n && (t.authDomain = n),
                                    Gh(t || {})
                                }
                                ))
                            }(t.G, ll(t).options.authDomain).then((function(n) {
                                return (t.o = n) && (n.ha = t.G),
                                Xh(t.G)
                            }
                            ));
                            return vl(t, n)
                        }(t).then((function() {
                            return tl(t.l, n, t.f)
                        }
                        )).then((function(n) {
                            return n ? (n.ha = t.G,
                            t.o && (t.o.ga || null) == (n.ga || null) ? n : n.reload().then((function() {
                                return Zh(t.l, n).then((function() {
                                    return n
                                }
                                ))
                            }
                            )).s((function(e) {
                                return "auth/network-request-failed" == e.code ? n : Qh(t.l)
                            }
                            ))) : null
                        }
                        )).then((function(n) {
                            cl(t, n || null)
                        }
                        ));
                        return vl(t, e)
                    }(this)),
                    this.i = vl(this, function(t) {
                        return t.$.then((function() {
                            return sl(t)
                        }
                        )).s((function() {}
                        )).then((function() {
                            if (!t.m)
                                return t.pa()
                        }
                        )).s((function() {}
                        )).then((function() {
                            if (!t.m) {
                                t.ba = !0;
                                var n = t.l;
                                n.b.addListener($h("local"), n.a, t.pa)
                            }
                        }
                        ))
                    }(this)),
                    this.ba = !1,
                    this.pa = I(this.Yc, this),
                    this.Ba = I(this.da, this),
                    this.ya = I(this.kc, this),
                    this.za = I(this.vc, this),
                    this.Aa = I(this.wc, this),
                    this.b = null,
                    function(t) {
                        var n = ll(t).options.authDomain
                          , e = ll(t).options.apiKey;
                        n && Oi() && (t.gb = t.$.then((function() {
                            if (!t.m) {
                                if (t.b = Kc(n, e, ll(t).name, t.f),
                                Rc(t.b, t),
                                fl(t) && Sh(fl(t)),
                                t.o) {
                                    Sh(t.o);
                                    var i = t.o;
                                    i.wa(t.ka()),
                                    gh(i, t),
                                    yh(i = t.o, t.N),
                                    wh(i, t),
                                    es((i = t.o).a, t.f),
                                    bh(i, t),
                                    t.o = null
                                }
                                return t.b
                            }
                        }
                        )))
                    }(this),
                    this.INTERNAL = {},
                    this.INTERNAL.delete = I(this.delete, this),
                    this.INTERNAL.logFramework = I(this.Fc, this),
                    this.A = 0,
                    we.call(this),
                    function(t) {
                        Object.defineProperty(t, "lc", {
                            get: function() {
                                return this.ka()
                            },
                            set: function(t) {
                                this.wa(t)
                            },
                            enumerable: !1
                        }),
                        t.aa = null,
                        Object.defineProperty(t, "ti", {
                            get: function() {
                                return this.S()
                            },
                            set: function(t) {
                                this.xb(t)
                            },
                            enumerable: !1
                        }),
                        t.W = null
                    }(this),
                    this.N = [],
                    this.f = null
                }
                function il(t) {
                    zn.call(this, "languageCodeChanged"),
                    this.h = t
                }
                function rl(t) {
                    zn.call(this, "emulatorConfigChanged"),
                    this.c = t
                }
                function ol(t) {
                    zn.call(this, "frameworkChanged"),
                    this.f = t
                }
                function al(t) {
                    return t.gb || On(new k("auth-domain-config-required"))
                }
                function sl(t) {
                    if (!Oi())
                        return On(new k("operation-not-supported-in-this-environment"));
                    var n = al(t).then((function() {
                        return t.b.qa()
                    }
                    )).then((function(t) {
                        return t ? zi(t) : null
                    }
                    ));
                    return vl(t, n)
                }
                function ul(t, n) {
                    var e = {};
                    return e.apiKey = ll(t).options.apiKey,
                    e.authDomain = ll(t).options.authDomain,
                    e.appName = ll(t).name,
                    t.f && (e.emulatorConfig = t.f),
                    t.$.then((function() {
                        return function(t, n, e, i) {
                            var r = new mh(t,n);
                            return e && (r.ha = e),
                            i && yh(r, i),
                            r.reload().then((function() {
                                return r
                            }
                            ))
                        }(e, n, t.G, t.Ga())
                    }
                    )).then((function(n) {
                        return fl(t) && n.uid == fl(t).uid ? (Lh(fl(t), n),
                        t.da(n)) : (cl(t, n),
                        Sh(n),
                        t.da(n))
                    }
                    )).then((function() {
                        pl(t)
                    }
                    ))
                }
                function cl(t, n) {
                    fl(t) && (function(t, n) {
                        Y(t.R, (function(t) {
                            return t == n
                        }
                        ))
                    }(fl(t), t.Ba),
                    le(fl(t), "tokenChanged", t.ya),
                    le(fl(t), "userDeleted", t.za),
                    le(fl(t), "userInvalidated", t.Aa),
                    Eh(fl(t))),
                    n && (n.R.push(t.Ba),
                    ue(n, "tokenChanged", t.ya),
                    ue(n, "userDeleted", t.za),
                    ue(n, "userInvalidated", t.Aa),
                    0 < t.A && Th(n)),
                    Ji(t, "currentUser", n),
                    n && (n.wa(t.ka()),
                    gh(n, t),
                    yh(n, t.N),
                    wh(n, t),
                    es(n.a, t.f),
                    bh(n, t))
                }
                function hl(t, n) {
                    var e = null
                      , i = null;
                    return vl(t, n.then((function(n) {
                        return e = jo(n),
                        i = Jr(n),
                        ul(t, n)
                    }
                    ), (function(n) {
                        var e = null;
                        throw n && "auth/multi-factor-auth-required" === n.code && (e = eh(n.w(), t, I(t.jc, t))),
                        e || n
                    }
                    )).then((function() {
                        return zi({
                            user: fl(t),
                            credential: e,
                            additionalUserInfo: i,
                            operationType: "signIn"
                        })
                    }
                    )))
                }
                function ll(t) {
                    return t.app
                }
                function fl(t) {
                    return t.currentUser
                }
                function dl(t) {
                    return fl(t) && fl(t)._lat || null
                }
                function pl(t) {
                    if (t.ba) {
                        for (var n = 0; n < t.u.length; n++)
                            t.u[n] && t.u[n](dl(t));
                        if (t.X !== t.getUid() && t.P.length)
                            for (t.X = t.getUid(),
                            n = 0; n < t.P.length; n++)
                                t.P[n] && t.P[n](dl(t))
                    }
                }
                function vl(t, n) {
                    return t.R.push(n),
                    n.na((function() {
                        J(t.R, n)
                    }
                    )),
                    n
                }
                function ml() {}
                function gl() {
                    this.a = {},
                    this.b = 1e12
                }
                Jh.prototype.wb = function(t) {
                    var n = null
                      , e = this;
                    return function(t) {
                        var n = new k("invalid-persistence-type")
                          , e = new k("unsupported-persistence-type");
                        t: {
                            for (i in zu)
                                if (zu[i] == t) {
                                    var i = !0;
                                    break t
                                }
                            i = !1
                        }
                        if (!i || "string" != typeof t)
                            throw n;
                        switch (yi()) {
                        case "ReactNative":
                            if ("session" === t)
                                throw e;
                            break;
                        case "Node":
                            if ("none" !== t)
                                throw e;
                            break;
                        case "Worker":
                            if ("session" === t || !Ou() && "none" !== t)
                                throw e;
                            break;
                        default:
                            if (!_i() && "none" !== t)
                                throw e
                        }
                    }(t),
                    nl(this, (function() {
                        return t != e.c.D ? e.b.get(e.c, e.a).then((function(i) {
                            return n = i,
                            Yh(e, t)
                        }
                        )).then((function() {
                            if (e.c = $h(t),
                            n)
                                return e.b.set(e.c, n, e.a)
                        }
                        )) : _n()
                    }
                    ))
                }
                ,
                A(el, we),
                A(il, zn),
                A(rl, zn),
                A(ol, zn),
                (e = el.prototype).wb = function(t) {
                    return vl(this, t = this.l.wb(t))
                }
                ,
                e.wa = function(t) {
                    this.aa === t || this.m || (this.aa = t,
                    ns(this.a, this.aa),
                    this.dispatchEvent(new il(this.ka())))
                }
                ,
                e.ka = function() {
                    return this.aa
                }
                ,
                e.ed = function() {
                    var t = u.navigator;
                    this.wa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
                }
                ,
                e.fd = function(t) {
                    if (!this.f) {
                        if (!/^https?:\/\//.test(t))
                            throw new k("argument-error","Emulator URL must start with a valid scheme (http:// or https://).");
                        Ki("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
                        u.document && vi().then((function() {
                            var t = u.document.createElement("div");
                            t.innerText = "Running in emulator mode. Do not use with production credentials.",
                            t.style.position = "fixed",
                            t.style.width = "100%",
                            t.style.backgroundColor = "#ffffff",
                            t.style.border = ".1em solid #000000",
                            t.style.color = "#ff0000",
                            t.style.bottom = "0px",
                            t.style.left = "0px",
                            t.style.margin = "0px",
                            t.style.zIndex = 1e4,
                            t.style.textAlign = "center",
                            t.classList.add("firebase-emulator-warning"),
                            u.document.body.appendChild(t)
                        }
                        )),
                        this.f = {
                            url: t
                        },
                        this.settings.hb = !0,
                        es(this.a, this.f),
                        this.dispatchEvent(new rl(this.f))
                    }
                }
                ,
                e.Fc = function(t) {
                    this.N.push(t),
                    rs(this.a, n.a.SDK_VERSION ? ki(n.a.SDK_VERSION, this.N) : null),
                    this.dispatchEvent(new ol(this.N))
                }
                ,
                e.Ga = function() {
                    return $(this.N)
                }
                ,
                e.xb = function(t) {
                    this.W === t || this.m || (this.W = t,
                    this.a.b = this.W)
                }
                ,
                e.S = function() {
                    return this.W
                }
                ,
                e.toJSON = function() {
                    return {
                        apiKey: ll(this).options.apiKey,
                        authDomain: ll(this).options.authDomain,
                        appName: ll(this).name,
                        currentUser: fl(this) && fl(this).w()
                    }
                }
                ,
                e.Eb = function(t, n) {
                    switch (t) {
                    case "unknown":
                    case "signInViaRedirect":
                        return !0;
                    case "signInViaPopup":
                        return this.h == n && !!this.g;
                    default:
                        return !1
                    }
                }
                ,
                e.ma = function(t, n, e, i) {
                    "signInViaPopup" == t && this.h == i && (e && this.O ? this.O(e) : n && !e && this.g && this.g(n),
                    this.c && (this.c.cancel(),
                    this.c = null),
                    delete this.g,
                    delete this.O)
                }
                ,
                e.Fa = function(t, n) {
                    return "signInViaRedirect" == t || "signInViaPopup" == t && this.h == n && this.g ? I(this.hc, this) : null
                }
                ,
                e.hc = function(t, n, e, i) {
                    var r = this
                      , o = {
                        requestUri: t,
                        postBody: i,
                        sessionId: n,
                        tenantId: e
                    };
                    return this.c && (this.c.cancel(),
                    this.c = null),
                    r.$.then((function() {
                        return hl(r, bs(r.a, o))
                    }
                    ))
                }
                ,
                e.Wc = function(t) {
                    if (!Oi())
                        return On(new k("operation-not-supported-in-this-environment"));
                    var e = this
                      , i = Xr(t.providerId)
                      , r = Mi()
                      , o = null;
                    (!Pi() || gi()) && ll(this).options.authDomain && t.isOAuthProvider && (o = mu(ll(this).options.authDomain, ll(this).options.apiKey, ll(this).name, "signInViaPopup", t, null, r, n.a.SDK_VERSION || null, null, null, this.S(), this.f));
                    var a = fi(o, i && i.ua, i && i.ta);
                    return vl(this, i = al(this).then((function(n) {
                        return xc(n, a, "signInViaPopup", t, r, !!o, e.S())
                    }
                    )).then((function() {
                        return new In((function(t, n) {
                            e.ma("signInViaPopup", null, new k("cancelled-popup-request"), e.h),
                            e.g = t,
                            e.O = n,
                            e.h = r,
                            e.c = Uc(e.b, e, "signInViaPopup", a, r)
                        }
                        ))
                    }
                    )).then((function(t) {
                        return a && li(a),
                        t ? zi(t) : null
                    }
                    )).s((function(t) {
                        throw a && li(a),
                        t
                    }
                    )))
                }
                ,
                e.Xc = function(t) {
                    if (!Oi())
                        return On(new k("operation-not-supported-in-this-environment"));
                    var n = this;
                    return vl(this, al(this).then((function() {
                        return function(t) {
                            return nl(t, (function() {
                                return t.b.set(zh, t.c.D, t.a)
                            }
                            ))
                        }(n.l)
                    }
                    )).then((function() {
                        return jc(n.b, "signInViaRedirect", t, void 0, n.S())
                    }
                    )))
                }
                ,
                e.qa = function() {
                    var t = this;
                    return sl(this).then((function(n) {
                        return t.b && Gc(t.b.b),
                        n
                    }
                    )).s((function(n) {
                        throw t.b && Gc(t.b.b),
                        n
                    }
                    ))
                }
                ,
                e.cd = function(t) {
                    if (!t)
                        return On(new k("null-user"));
                    if (this.W != t.tenantId)
                        return On(new k("tenant-id-mismatch"));
                    var n = this
                      , e = {};
                    e.apiKey = ll(this).options.apiKey,
                    e.authDomain = ll(this).options.authDomain,
                    e.appName = ll(this).name;
                    var i = function(t, n, e, i) {
                        var r = t.b
                          , o = {};
                        return o[za] = r.b && r.b.toString(),
                        o.refreshToken = r.a,
                        n = new mh(n || {
                            apiKey: t.l,
                            authDomain: t.o,
                            appName: t.m
                        },o),
                        e && (n.ha = e),
                        i && yh(n, i),
                        Lh(n, t),
                        n
                    }(t, e, n.G, n.Ga());
                    return vl(this, this.i.then((function() {
                        if (ll(n).options.apiKey != t.l)
                            return i.reload()
                    }
                    )).then((function() {
                        return fl(n) && t.uid == fl(n).uid ? (Lh(fl(n), t),
                        n.da(t)) : (cl(n, i),
                        Sh(i),
                        n.da(i))
                    }
                    )).then((function() {
                        pl(n)
                    }
                    )))
                }
                ,
                e.zb = function() {
                    var t = this;
                    return vl(this, this.i.then((function() {
                        return t.b && Gc(t.b.b),
                        fl(t) ? (cl(t, null),
                        Qh(t.l).then((function() {
                            pl(t)
                        }
                        ))) : _n()
                    }
                    )))
                }
                ,
                e.Yc = function() {
                    var t = this;
                    return tl(this.l, ll(this).options.authDomain).then((function(n) {
                        if (!t.m) {
                            var e;
                            if (e = fl(t) && n) {
                                e = fl(t).uid;
                                var i = n.uid;
                                e = null != e && "" !== e && null != i && "" !== i && e == i
                            }
                            if (e)
                                return Lh(fl(t), n),
                                fl(t).I();
                            (fl(t) || n) && (cl(t, n),
                            n && (Sh(n),
                            n.ha = t.G),
                            t.b && Rc(t.b, t),
                            pl(t))
                        }
                    }
                    ))
                }
                ,
                e.da = function(t) {
                    return Zh(this.l, t)
                }
                ,
                e.kc = function() {
                    pl(this),
                    this.da(fl(this))
                }
                ,
                e.vc = function() {
                    this.zb()
                }
                ,
                e.wc = function() {
                    this.zb()
                }
                ,
                e.jc = function(t) {
                    var n = this;
                    return this.i.then((function() {
                        return hl(n, _n(t))
                    }
                    ))
                }
                ,
                e.yc = function(t) {
                    var n = this;
                    this.addAuthTokenListener((function() {
                        t.next(fl(n))
                    }
                    ))
                }
                ,
                e.zc = function(t) {
                    var n = this;
                    !function(t, n) {
                        t.P.push(n),
                        vl(t, t.i.then((function() {
                            !t.m && X(t.P, n) && t.X !== t.getUid() && (t.X = t.getUid(),
                            n(dl(t)))
                        }
                        )))
                    }(this, (function() {
                        t.next(fl(n))
                    }
                    ))
                }
                ,
                e.Hc = function(t, n, e) {
                    var i = this;
                    return this.ba && Promise.resolve().then((function() {
                        "function" == typeof t ? t(fl(i)) : "function" == typeof t.next && t.next(fl(i))
                    }
                    )),
                    this.ac(t, n, e)
                }
                ,
                e.Gc = function(t, n, e) {
                    var i = this;
                    return this.ba && Promise.resolve().then((function() {
                        i.X = i.getUid(),
                        "function" == typeof t ? t(fl(i)) : "function" == typeof t.next && t.next(fl(i))
                    }
                    )),
                    this.bc(t, n, e)
                }
                ,
                e.mc = function(t) {
                    var n = this;
                    return vl(this, this.i.then((function() {
                        return fl(n) ? fl(n).I(t).then((function(t) {
                            return {
                                accessToken: t
                            }
                        }
                        )) : null
                    }
                    )))
                }
                ,
                e.Sc = function(t) {
                    var n = this;
                    return this.i.then((function() {
                        return hl(n, nu(n.a, Ys, {
                            token: t
                        }))
                    }
                    )).then((function(t) {
                        var e = t.user;
                        return Dh(e, "isAnonymous", !1),
                        n.da(e),
                        t
                    }
                    ))
                }
                ,
                e.Tc = function(t, n) {
                    var e = this;
                    return this.i.then((function() {
                        return hl(e, nu(e.a, zs, {
                            email: t,
                            password: n
                        }))
                    }
                    ))
                }
                ,
                e.dc = function(t, n) {
                    var e = this;
                    return this.i.then((function() {
                        return hl(e, nu(e.a, As, {
                            email: t,
                            password: n
                        }))
                    }
                    ))
                }
                ,
                e.Za = function(t) {
                    var n = this;
                    return this.i.then((function() {
                        return hl(n, t.ja(n.a))
                    }
                    ))
                }
                ,
                e.Rc = function(t) {
                    return Wi("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),
                    this.Za(t)
                }
                ,
                e.yb = function() {
                    var t = this;
                    return this.i.then((function() {
                        var n = fl(t);
                        if (n && n.isAnonymous) {
                            var e = zi({
                                providerId: null,
                                isNewUser: !1
                            });
                            return zi({
                                user: n,
                                credential: null,
                                additionalUserInfo: e,
                                operationType: "signIn"
                            })
                        }
                        return hl(t, t.a.yb()).then((function(n) {
                            var e = n.user;
                            return Dh(e, "isAnonymous", !0),
                            t.da(e),
                            n
                        }
                        ))
                    }
                    ))
                }
                ,
                e.getUid = function() {
                    return fl(this) && fl(this).uid || null
                }
                ,
                e.cc = function(t) {
                    this.addAuthTokenListener(t),
                    this.A++,
                    0 < this.A && fl(this) && Th(fl(this))
                }
                ,
                e.Oc = function(t) {
                    var n = this;
                    H(this.u, (function(e) {
                        e == t && n.A--
                    }
                    )),
                    0 > this.A && (this.A = 0),
                    0 == this.A && fl(this) && Eh(fl(this)),
                    this.removeAuthTokenListener(t)
                }
                ,
                e.addAuthTokenListener = function(t) {
                    var n = this;
                    this.u.push(t),
                    vl(this, this.i.then((function() {
                        n.m || X(n.u, t) && t(dl(n))
                    }
                    )))
                }
                ,
                e.removeAuthTokenListener = function(t) {
                    Y(this.u, (function(n) {
                        return n == t
                    }
                    ))
                }
                ,
                e.delete = function() {
                    this.m = !0;
                    for (var t = 0; t < this.R.length; t++)
                        this.R[t].cancel("app-deleted");
                    return this.R = [],
                    this.l && (t = this.l).b.removeListener($h("local"), t.a, this.pa),
                    this.b && (Pc(this.b, this),
                    Gc(this.b.b)),
                    Promise.resolve()
                }
                ,
                e.gc = function(t) {
                    return vl(this, function(t, n) {
                        return nu(t, ks, {
                            identifier: n,
                            continueUri: Ci() ? ui() : "http://localhost"
                        }).then((function(t) {
                            return t.signinMethods || []
                        }
                        ))
                    }(this.a, t))
                }
                ,
                e.Ac = function(t) {
                    return !!Ro(t)
                }
                ,
                e.vb = function(t, n) {
                    var e = this;
                    return vl(this, _n().then((function() {
                        var t = new _r(n);
                        if (!t.c)
                            throw new k("argument-error",Rr + " must be true when sending sign in link to email");
                        return Ur(t)
                    }
                    )).then((function(n) {
                        return e.a.vb(t, n)
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.hd = function(t) {
                    return this.Qa(t).then((function(t) {
                        return t.data.email
                    }
                    ))
                }
                ,
                e.mb = function(t, n) {
                    return vl(this, this.a.mb(t, n).then((function() {}
                    )))
                }
                ,
                e.Qa = function(t) {
                    return vl(this, this.a.Qa(t).then((function(t) {
                        return new or(t)
                    }
                    )))
                }
                ,
                e.ib = function(t) {
                    return vl(this, this.a.ib(t).then((function() {}
                    )))
                }
                ,
                e.ub = function(t, n) {
                    var e = this;
                    return vl(this, _n().then((function() {
                        return void 0 === n || dt(n) ? {} : Ur(new _r(n))
                    }
                    )).then((function(n) {
                        return e.a.ub(t, n)
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.Vc = function(t, n) {
                    return vl(this, zc(this, t, n, I(this.Za, this)))
                }
                ,
                e.Uc = function(t, n) {
                    var e = this;
                    return vl(this, _n().then((function() {
                        var i = n || ui()
                          , r = Co(t, i);
                        if (!(i = Ro(i)))
                            throw new k("argument-error","Invalid email link!");
                        if (i.tenantId !== e.S())
                            throw new k("tenant-id-mismatch");
                        return e.Za(r)
                    }
                    )))
                }
                ,
                ml.prototype.render = function() {}
                ,
                ml.prototype.reset = function() {}
                ,
                ml.prototype.getResponse = function() {}
                ,
                ml.prototype.execute = function() {}
                ;
                var bl = null;
                function yl(t, n) {
                    return (n = wl(n)) && t.a[n] || null
                }
                function wl(t) {
                    return (t = void 0 === t ? 1e12 : t) ? t.toString() : null
                }
                function Il(t, n) {
                    this.g = !1,
                    this.c = n,
                    this.a = this.b = null,
                    this.h = "invisible" !== this.c.size,
                    this.f = sn(t);
                    var e = this;
                    this.i = function() {
                        e.execute()
                    }
                    ,
                    this.h ? this.execute() : ue(this.f, "click", this.i)
                }
                function Tl(t) {
                    if (t.g)
                        throw Error("reCAPTCHA mock was already deleted!")
                }
                function El() {}
                function Al() {}
                gl.prototype.render = function(t, n) {
                    return this.a[this.b.toString()] = new Il(t,n),
                    this.b++
                }
                ,
                gl.prototype.reset = function(t) {
                    var n = yl(this, t);
                    t = wl(t),
                    n && t && (n.delete(),
                    delete this.a[t])
                }
                ,
                gl.prototype.getResponse = function(t) {
                    return (t = yl(this, t)) ? t.getResponse() : null
                }
                ,
                gl.prototype.execute = function(t) {
                    (t = yl(this, t)) && t.execute()
                }
                ,
                Il.prototype.getResponse = function() {
                    return Tl(this),
                    this.b
                }
                ,
                Il.prototype.execute = function() {
                    Tl(this);
                    var t = this;
                    this.a || (this.a = setTimeout((function() {
                        t.b = function() {
                            for (var t = 50, n = []; 0 < t; )
                                n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                                t--;
                            return n.join("")
                        }();
                        var n = t.c.callback
                          , e = t.c["expired-callback"];
                        if (n)
                            try {
                                n(t.b)
                            } catch (i) {}
                        t.a = setTimeout((function() {
                            if (t.a = null,
                            t.b = null,
                            e)
                                try {
                                    e()
                                } catch (i) {}
                            t.h && t.execute()
                        }
                        ), 6e4)
                    }
                    ), 500))
                }
                ,
                Il.prototype.delete = function() {
                    Tl(this),
                    this.g = !0,
                    clearTimeout(this.a),
                    this.a = null,
                    le(this.f, "click", this.i)
                }
                ,
                Ji(El, "FACTOR_ID", "phone"),
                Al.prototype.g = function() {
                    return bl || (bl = new gl),
                    _n(bl)
                }
                ,
                Al.prototype.c = function() {}
                ;
                var kl = null;
                function Sl() {
                    this.b = u.grecaptcha ? 1 / 0 : 0,
                    this.f = null,
                    this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                }
                var Nl = new bt(It,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}")
                  , _l = new Vi(3e4,6e4);
                Sl.prototype.g = function(t) {
                    var n = this;
                    return new In((function(e, i) {
                        var r = setTimeout((function() {
                            i(new k("network-request-failed"))
                        }
                        ), _l.get());
                        !u.grecaptcha || t !== n.f && !n.b ? (u[n.a] = function() {
                            if (u.grecaptcha) {
                                n.f = t;
                                var o = u.grecaptcha.render;
                                u.grecaptcha.render = function(t, e) {
                                    return t = o(t, e),
                                    n.b++,
                                    t
                                }
                                ,
                                clearTimeout(r),
                                e(u.grecaptcha)
                            } else
                                clearTimeout(r),
                                i(new k("internal-error"));
                            delete u[n.a]
                        }
                        ,
                        _n(Ka(kt(Nl, {
                            onload: n.a,
                            hl: t || ""
                        }))).s((function() {
                            clearTimeout(r),
                            i(new k("internal-error","Unable to load external reCAPTCHA dependencies!"))
                        }
                        ))) : (clearTimeout(r),
                        e(u.grecaptcha))
                    }
                    ))
                }
                ,
                Sl.prototype.c = function() {
                    this.b--
                }
                ;
                var Ol = null;
                function Cl(t, n, e, i, r, o, a) {
                    if (Ji(this, "type", "recaptcha"),
                    this.c = this.f = null,
                    this.A = !1,
                    this.m = n,
                    this.g = null,
                    a ? (kl || (kl = new Al),
                    a = kl) : (Ol || (Ol = new Sl),
                    a = Ol),
                    this.v = a,
                    this.a = e || {
                        theme: "light",
                        type: "image"
                    },
                    this.h = [],
                    this.a[Dl])
                        throw new k("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                    if (this.i = "invisible" === this.a[Ll],
                    !u.document)
                        throw new k("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                    if (!sn(n) || !this.i && sn(n).hasChildNodes())
                        throw new k("argument-error","reCAPTCHA container is either not found or already contains inner elements!");
                    this.o = new Ja(t,o || null,r || null),
                    this.u = i || function() {
                        return null
                    }
                    ;
                    var s = this;
                    this.l = [];
                    var c = this.a[Rl];
                    this.a[Rl] = function(t) {
                        if (xl(s, t),
                        "function" == typeof c)
                            c(t);
                        else if ("string" == typeof c) {
                            var n = Ni(c, u);
                            "function" == typeof n && n(t)
                        }
                    }
                    ;
                    var h = this.a[Pl];
                    this.a[Pl] = function() {
                        if (xl(s, null),
                        "function" == typeof h)
                            h();
                        else if ("string" == typeof h) {
                            var t = Ni(h, u);
                            "function" == typeof t && t()
                        }
                    }
                }
                var Rl = "callback"
                  , Pl = "expired-callback"
                  , Dl = "sitekey"
                  , Ll = "size";
                function xl(t, n) {
                    for (var e = 0; e < t.l.length; e++)
                        try {
                            t.l[e](n)
                        } catch (i) {}
                }
                function Ml(t, n) {
                    return t.h.push(n),
                    n.na((function() {
                        J(t.h, n)
                    }
                    )),
                    n
                }
                function jl(t) {
                    if (t.A)
                        throw new k("internal-error","RecaptchaVerifier instance has been destroyed.")
                }
                function Ul(t, e, i) {
                    var r = !1;
                    try {
                        this.b = i || n.a.app()
                    } catch (s) {
                        throw new k("argument-error","No firebase.app.App instance is currently initialized.")
                    }
                    if (!this.b.options || !this.b.options.apiKey)
                        throw new k("invalid-api-key");
                    i = this.b.options.apiKey;
                    var o = this
                      , a = null;
                    try {
                        a = this.b.auth().Ga()
                    } catch (s) {}
                    try {
                        r = this.b.auth().settings.appVerificationDisabledForTesting
                    } catch (s) {}
                    a = n.a.SDK_VERSION ? ki(n.a.SDK_VERSION, a) : null,
                    Cl.call(this, i, t, e, (function() {
                        try {
                            var t = o.b.auth().ka()
                        } catch (n) {
                            t = null
                        }
                        return t
                    }
                    ), a, R(N), r)
                }
                function Vl(t, n, e, i) {
                    t: {
                        e = Array.prototype.slice.call(e);
                        for (var r = 0, o = !1, a = 0; a < n.length; a++)
                            if (n[a].optional)
                                o = !0;
                            else {
                                if (o)
                                    throw new k("internal-error","Argument validator encountered a required argument after an optional argument.");
                                r++
                            }
                        if (o = n.length,
                        e.length < r || o < e.length)
                            i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + e.length + ".";
                        else {
                            for (r = 0; r < e.length; r++)
                                if (o = n[r].optional && void 0 === e[r],
                                !n[r].K(e[r]) && !o) {
                                    if (n = n[r],
                                    0 > r || r >= Fl.length)
                                        throw new k("internal-error","Argument validator received an unsupported number of arguments.");
                                    e = Fl[r],
                                    i = (i ? "" : e + " argument ") + (n.name ? '"' + n.name + '" ' : "") + "must be " + n.J + ".";
                                    break t
                                }
                            i = null
                        }
                    }
                    if (i)
                        throw new k("argument-error",t + " failed: " + i)
                }
                (e = Cl.prototype).Ia = function() {
                    var t = this;
                    return this.f ? this.f : this.f = Ml(this, _n().then((function() {
                        if (Ci() && !bi())
                            return vi();
                        throw new k("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                    }
                    )).then((function() {
                        return t.v.g(t.u())
                    }
                    )).then((function(n) {
                        return t.g = n,
                        nu(t.o, Us, {})
                    }
                    )).then((function(n) {
                        t.a[Dl] = n.recaptchaSiteKey
                    }
                    )).s((function(n) {
                        throw t.f = null,
                        n
                    }
                    )))
                }
                ,
                e.render = function() {
                    jl(this);
                    var t = this;
                    return Ml(this, this.Ia().then((function() {
                        if (null === t.c) {
                            var n = t.m;
                            if (!t.i) {
                                var e = sn(n);
                                n = function(t, n, e) {
                                    var i = arguments
                                      , r = document
                                      , o = String(i[0])
                                      , a = i[1];
                                    if (!an && a && (a.name || a.type)) {
                                        if (o = ["<", o],
                                        a.name && o.push(' name="', qt(a.name), '"'),
                                        a.type) {
                                            o.push(' type="', qt(a.type), '"');
                                            var s = {};
                                            mt(s, a),
                                            delete s.type,
                                            a = s
                                        }
                                        o.push(">"),
                                        o = o.join("")
                                    }
                                    return o = dn(r, o),
                                    a && ("string" == typeof a ? o.className = a : Array.isArray(a) ? o.className = a.join(" ") : un(o, a)),
                                    2 < i.length && fn(r, o, i),
                                    o
                                }("DIV"),
                                e.appendChild(n)
                            }
                            t.c = t.g.render(n, t.a)
                        }
                        return t.c
                    }
                    )))
                }
                ,
                e.verify = function() {
                    jl(this);
                    var t = this;
                    return Ml(this, this.render().then((function(n) {
                        return new In((function(e) {
                            var i = t.g.getResponse(n);
                            if (i)
                                e(i);
                            else {
                                t.l.push((function n(i) {
                                    i && (function(t, n) {
                                        Y(t.l, (function(t) {
                                            return t == n
                                        }
                                        ))
                                    }(t, n),
                                    e(i))
                                }
                                )),
                                t.i && t.g.execute(t.c)
                            }
                        }
                        ))
                    }
                    )))
                }
                ,
                e.reset = function() {
                    jl(this),
                    null !== this.c && this.g.reset(this.c)
                }
                ,
                e.clear = function() {
                    jl(this),
                    this.A = !0,
                    this.v.c();
                    for (var t = 0; t < this.h.length; t++)
                        this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");
                    if (!this.i) {
                        t = sn(this.m);
                        for (var n; n = t.firstChild; )
                            t.removeChild(n)
                    }
                }
                ,
                A(Ul, Cl);
                var Fl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");
                function Kl(t, n) {
                    return {
                        name: t || "",
                        J: "a valid string",
                        optional: !!n,
                        K: function(t) {
                            return "string" == typeof t
                        }
                    }
                }
                function ql(t, n) {
                    return {
                        name: t || "",
                        J: "a boolean",
                        optional: !!n,
                        K: function(t) {
                            return "boolean" == typeof t
                        }
                    }
                }
                function Hl(t, n) {
                    return {
                        name: t || "",
                        J: "a valid object",
                        optional: !!n,
                        K: v
                    }
                }
                function Gl(t, n) {
                    return {
                        name: t || "",
                        J: "a function",
                        optional: !!n,
                        K: function(t) {
                            return "function" == typeof t
                        }
                    }
                }
                function Bl(t, n) {
                    return {
                        name: t || "",
                        J: "null",
                        optional: !!n,
                        K: function(t) {
                            return null === t
                        }
                    }
                }
                function Wl(t) {
                    return {
                        name: t ? t + "Credential" : "credential",
                        J: t ? "a valid " + t + " credential" : "a valid credential",
                        optional: !1,
                        K: function(n) {
                            if (!n)
                                return !1;
                            var e = !t || n.providerId === t;
                            return !(!n.ja || !e)
                        }
                    }
                }
                function Xl(t, n) {
                    return v(t) && "string" == typeof t.type && t.type === n && "function" == typeof t.Ha
                }
                function Jl(t) {
                    return v(t) && "string" == typeof t.uid
                }
                function Yl(t, n, e, i) {
                    return {
                        name: e || "",
                        J: t.J + " or " + n.J,
                        optional: !!i,
                        K: function(e) {
                            return t.K(e) || n.K(e)
                        }
                    }
                }
                function zl(t, n) {
                    for (var e in n) {
                        var i = n[e].name;
                        t[i] = Ql(i, t[e], n[e].j)
                    }
                }
                function $l(t, n) {
                    for (var e in n) {
                        var i = n[e].name;
                        i !== e && Object.defineProperty(t, i, {
                            get: T((function(t) {
                                return this[t]
                            }
                            ), e),
                            set: T((function(t, n, e, i) {
                                Vl(t, [e], [i], !0),
                                this[n] = i
                            }
                            ), i, e, n[e].jb),
                            enumerable: !0
                        })
                    }
                }
                function Zl(t, n, e, i) {
                    t[n] = Ql(n, e, i)
                }
                function Ql(t, n, e) {
                    function i() {
                        var t = Array.prototype.slice.call(arguments);
                        return Vl(o, e, t),
                        n.apply(this, t)
                    }
                    if (!e)
                        return n;
                    var r, o = function(t) {
                        return (t = t.split("."))[t.length - 1]
                    }(t);
                    for (r in n)
                        i[r] = n[r];
                    for (r in n.prototype)
                        i.prototype[r] = n.prototype[r];
                    return i
                }
                zl(el.prototype, {
                    ib: {
                        name: "applyActionCode",
                        j: [Kl("code")]
                    },
                    Qa: {
                        name: "checkActionCode",
                        j: [Kl("code")]
                    },
                    mb: {
                        name: "confirmPasswordReset",
                        j: [Kl("code"), Kl("newPassword")]
                    },
                    dc: {
                        name: "createUserWithEmailAndPassword",
                        j: [Kl("email"), Kl("password")]
                    },
                    gc: {
                        name: "fetchSignInMethodsForEmail",
                        j: [Kl("email")]
                    },
                    qa: {
                        name: "getRedirectResult",
                        j: []
                    },
                    Ac: {
                        name: "isSignInWithEmailLink",
                        j: [Kl("emailLink")]
                    },
                    Gc: {
                        name: "onAuthStateChanged",
                        j: [Yl(Hl(), Gl(), "nextOrObserver"), Gl("opt_error", !0), Gl("opt_completed", !0)]
                    },
                    Hc: {
                        name: "onIdTokenChanged",
                        j: [Yl(Hl(), Gl(), "nextOrObserver"), Gl("opt_error", !0), Gl("opt_completed", !0)]
                    },
                    ub: {
                        name: "sendPasswordResetEmail",
                        j: [Kl("email"), Yl(Hl("opt_actionCodeSettings", !0), Bl(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    vb: {
                        name: "sendSignInLinkToEmail",
                        j: [Kl("email"), Hl("actionCodeSettings")]
                    },
                    wb: {
                        name: "setPersistence",
                        j: [Kl("persistence")]
                    },
                    Rc: {
                        name: "signInAndRetrieveDataWithCredential",
                        j: [Wl()]
                    },
                    yb: {
                        name: "signInAnonymously",
                        j: []
                    },
                    Za: {
                        name: "signInWithCredential",
                        j: [Wl()]
                    },
                    Sc: {
                        name: "signInWithCustomToken",
                        j: [Kl("token")]
                    },
                    Tc: {
                        name: "signInWithEmailAndPassword",
                        j: [Kl("email"), Kl("password")]
                    },
                    Uc: {
                        name: "signInWithEmailLink",
                        j: [Kl("email"), Kl("emailLink", !0)]
                    },
                    Vc: {
                        name: "signInWithPhoneNumber",
                        j: [Kl("phoneNumber"), {
                            name: "applicationVerifier",
                            J: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            K: function(t) {
                                return !(!t || "string" != typeof t.type || "function" != typeof t.verify)
                            }
                        }]
                    },
                    Wc: {
                        name: "signInWithPopup",
                        j: [{
                            name: "authProvider",
                            J: "a valid Auth provider",
                            optional: !1,
                            K: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Xc: {
                        name: "signInWithRedirect",
                        j: [{
                            name: "authProvider",
                            J: "a valid Auth provider",
                            optional: !1,
                            K: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    cd: {
                        name: "updateCurrentUser",
                        j: [Yl({
                            name: "user",
                            J: "an instance of Firebase User",
                            optional: !1,
                            K: function(t) {
                                return !!(t && t instanceof mh)
                            }
                        }, Bl(), "user")]
                    },
                    zb: {
                        name: "signOut",
                        j: []
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    },
                    ed: {
                        name: "useDeviceLanguage",
                        j: []
                    },
                    fd: {
                        name: "useEmulator",
                        j: [Kl("url")]
                    },
                    hd: {
                        name: "verifyPasswordResetCode",
                        j: [Kl("code")]
                    }
                }),
                $l(el.prototype, {
                    lc: {
                        name: "languageCode",
                        jb: Yl(Kl(), Bl(), "languageCode")
                    },
                    ti: {
                        name: "tenantId",
                        jb: Yl(Kl(), Bl(), "tenantId")
                    }
                }),
                el.Persistence = zu,
                el.Persistence.LOCAL = "local",
                el.Persistence.SESSION = "session",
                el.Persistence.NONE = "none",
                zl(mh.prototype, {
                    delete: {
                        name: "delete",
                        j: []
                    },
                    nc: {
                        name: "getIdTokenResult",
                        j: [ql("opt_forceRefresh", !0)]
                    },
                    I: {
                        name: "getIdToken",
                        j: [ql("opt_forceRefresh", !0)]
                    },
                    Bc: {
                        name: "linkAndRetrieveDataWithCredential",
                        j: [Wl()]
                    },
                    pb: {
                        name: "linkWithCredential",
                        j: [Wl()]
                    },
                    Cc: {
                        name: "linkWithPhoneNumber",
                        j: [Kl("phoneNumber"), {
                            name: "applicationVerifier",
                            J: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            K: function(t) {
                                return !(!t || "string" != typeof t.type || "function" != typeof t.verify)
                            }
                        }]
                    },
                    Dc: {
                        name: "linkWithPopup",
                        j: [{
                            name: "authProvider",
                            J: "a valid Auth provider",
                            optional: !1,
                            K: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Ec: {
                        name: "linkWithRedirect",
                        j: [{
                            name: "authProvider",
                            J: "a valid Auth provider",
                            optional: !1,
                            K: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Kc: {
                        name: "reauthenticateAndRetrieveDataWithCredential",
                        j: [Wl()]
                    },
                    sb: {
                        name: "reauthenticateWithCredential",
                        j: [Wl()]
                    },
                    Lc: {
                        name: "reauthenticateWithPhoneNumber",
                        j: [Kl("phoneNumber"), {
                            name: "applicationVerifier",
                            J: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            K: function(t) {
                                return !(!t || "string" != typeof t.type || "function" != typeof t.verify)
                            }
                        }]
                    },
                    Mc: {
                        name: "reauthenticateWithPopup",
                        j: [{
                            name: "authProvider",
                            J: "a valid Auth provider",
                            optional: !1,
                            K: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Nc: {
                        name: "reauthenticateWithRedirect",
                        j: [{
                            name: "authProvider",
                            J: "a valid Auth provider",
                            optional: !1,
                            K: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    reload: {
                        name: "reload",
                        j: []
                    },
                    tb: {
                        name: "sendEmailVerification",
                        j: [Yl(Hl("opt_actionCodeSettings", !0), Bl(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    },
                    bd: {
                        name: "unlink",
                        j: [Kl("provider")]
                    },
                    Ab: {
                        name: "updateEmail",
                        j: [Kl("email")]
                    },
                    Bb: {
                        name: "updatePassword",
                        j: [Kl("password")]
                    },
                    dd: {
                        name: "updatePhoneNumber",
                        j: [Wl("phone")]
                    },
                    Cb: {
                        name: "updateProfile",
                        j: [Hl("profile")]
                    },
                    Db: {
                        name: "verifyBeforeUpdateEmail",
                        j: [Kl("email"), Yl(Hl("opt_actionCodeSettings", !0), Bl(null, !0), "opt_actionCodeSettings", !0)]
                    }
                }),
                zl(gl.prototype, {
                    execute: {
                        name: "execute"
                    },
                    render: {
                        name: "render"
                    },
                    reset: {
                        name: "reset"
                    },
                    getResponse: {
                        name: "getResponse"
                    }
                }),
                zl(ml.prototype, {
                    execute: {
                        name: "execute"
                    },
                    render: {
                        name: "render"
                    },
                    reset: {
                        name: "reset"
                    },
                    getResponse: {
                        name: "getResponse"
                    }
                }),
                zl(In.prototype, {
                    na: {
                        name: "finally"
                    },
                    s: {
                        name: "catch"
                    },
                    then: {
                        name: "then"
                    }
                }),
                $l(Jc.prototype, {
                    appVerificationDisabled: {
                        name: "appVerificationDisabledForTesting",
                        jb: ql("appVerificationDisabledForTesting")
                    }
                }),
                zl(Yc.prototype, {
                    confirm: {
                        name: "confirm",
                        j: [Kl("verificationCode")]
                    }
                }),
                Zl(so, "fromJSON", (function(t) {
                    t = "string" == typeof t ? JSON.parse(t) : t;
                    for (var n, e = [vo, _o, Do, lo], i = 0; i < e.length; i++)
                        if (n = e[i](t))
                            return n;
                    return null
                }
                ), [Yl(Kl(), Hl(), "json")]),
                Zl(Oo, "credential", (function(t, n) {
                    return new No(t,n)
                }
                ), [Kl("email"), Kl("password")]),
                zl(No.prototype, {
                    w: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    }
                }),
                zl(yo.prototype, {
                    Ca: {
                        name: "addScope",
                        j: [Kl("scope")]
                    },
                    Ka: {
                        name: "setCustomParameters",
                        j: [Hl("customOAuthParameters")]
                    }
                }),
                Zl(yo, "credential", wo, [Yl(Kl(), Hl(), "token")]),
                Zl(Oo, "credentialWithLink", Co, [Kl("email"), Kl("emailLink")]),
                zl(Io.prototype, {
                    Ca: {
                        name: "addScope",
                        j: [Kl("scope")]
                    },
                    Ka: {
                        name: "setCustomParameters",
                        j: [Hl("customOAuthParameters")]
                    }
                }),
                Zl(Io, "credential", To, [Yl(Kl(), Hl(), "token")]),
                zl(Eo.prototype, {
                    Ca: {
                        name: "addScope",
                        j: [Kl("scope")]
                    },
                    Ka: {
                        name: "setCustomParameters",
                        j: [Hl("customOAuthParameters")]
                    }
                }),
                Zl(Eo, "credential", Ao, [Yl(Kl(), Yl(Hl(), Bl()), "idToken"), Yl(Kl(), Bl(), "accessToken", !0)]),
                zl(ko.prototype, {
                    Ka: {
                        name: "setCustomParameters",
                        j: [Hl("customOAuthParameters")]
                    }
                }),
                Zl(ko, "credential", So, [Yl(Kl(), Hl(), "token"), Kl("secret", !0)]),
                zl(bo.prototype, {
                    Ca: {
                        name: "addScope",
                        j: [Kl("scope")]
                    },
                    credential: {
                        name: "credential",
                        j: [Yl(Kl(), Yl(Hl(), Bl()), "optionsOrIdToken"), Yl(Kl(), Bl(), "accessToken", !0)]
                    },
                    Ka: {
                        name: "setCustomParameters",
                        j: [Hl("customOAuthParameters")]
                    }
                }),
                zl(fo.prototype, {
                    w: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    }
                }),
                zl(co.prototype, {
                    w: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    }
                }),
                Zl(xo, "credential", Mo, [Kl("verificationId"), Kl("verificationCode")]),
                zl(xo.prototype, {
                    eb: {
                        name: "verifyPhoneNumber",
                        j: [Yl(Kl(), {
                            name: "phoneInfoOptions",
                            J: "valid phone info options",
                            optional: !1,
                            K: function(t) {
                                return !!t && (t.session && t.phoneNumber ? Xl(t.session, oo) && "string" == typeof t.phoneNumber : t.session && t.multiFactorHint ? Xl(t.session, ao) && Jl(t.multiFactorHint) : t.session && t.multiFactorUid ? Xl(t.session, ao) && "string" == typeof t.multiFactorUid : !!t.phoneNumber && "string" == typeof t.phoneNumber)
                            }
                        }, "phoneInfoOptions"), {
                            name: "applicationVerifier",
                            J: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            K: function(t) {
                                return !(!t || "string" != typeof t.type || "function" != typeof t.verify)
                            }
                        }]
                    }
                }),
                zl(Po.prototype, {
                    w: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    }
                }),
                zl(k.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    }
                }),
                zl(Bo.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    }
                }),
                zl(Go.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    }
                }),
                zl(nh.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Kl(null, !0)]
                    }
                }),
                zl(Zc.prototype, {
                    Qc: {
                        name: "resolveSignIn",
                        j: [{
                            name: "multiFactorAssertion",
                            J: "a valid multiFactorAssertion",
                            optional: !1,
                            K: function(t) {
                                return !!t && !!t.rb
                            }
                        }]
                    }
                }),
                zl(sh.prototype, {
                    Qb: {
                        name: "getSession",
                        j: []
                    },
                    ec: {
                        name: "enroll",
                        j: [{
                            name: "multiFactorAssertion",
                            J: "a valid multiFactorAssertion",
                            optional: !1,
                            K: function(t) {
                                return !!t && !!t.rb
                            }
                        }, Kl("displayName", !0)]
                    },
                    ad: {
                        name: "unenroll",
                        j: [Yl({
                            name: "multiFactorInfo",
                            J: "a valid multiFactorInfo",
                            optional: !1,
                            K: Jl
                        }, Kl(), "multiFactorInfoIdentifier")]
                    }
                }),
                zl(Ul.prototype, {
                    clear: {
                        name: "clear",
                        j: []
                    },
                    render: {
                        name: "render",
                        j: []
                    },
                    verify: {
                        name: "verify",
                        j: []
                    }
                }),
                Zl(yr, "parseLink", Nr, [Kl("link")]),
                Zl(El, "assertion", (function(t) {
                    return new oh(t)
                }
                ), [Wl("phone")]),
                function() {
                    if (void 0 === n.a || !n.a.INTERNAL || !n.a.INTERNAL.registerComponent)
                        throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                    var t = {
                        ActionCodeInfo: {
                            Operation: {
                                EMAIL_SIGNIN: sr,
                                PASSWORD_RESET: "PASSWORD_RESET",
                                RECOVER_EMAIL: "RECOVER_EMAIL",
                                REVERT_SECOND_FACTOR_ADDITION: ar,
                                VERIFY_AND_CHANGE_EMAIL: ur,
                                VERIFY_EMAIL: "VERIFY_EMAIL"
                            }
                        },
                        Auth: el,
                        AuthCredential: so,
                        Error: k
                    };
                    Zl(t, "EmailAuthProvider", Oo, []),
                    Zl(t, "FacebookAuthProvider", yo, []),
                    Zl(t, "GithubAuthProvider", Io, []),
                    Zl(t, "GoogleAuthProvider", Eo, []),
                    Zl(t, "TwitterAuthProvider", ko, []),
                    Zl(t, "OAuthProvider", bo, [Kl("providerId")]),
                    Zl(t, "SAMLAuthProvider", go, [Kl("providerId")]),
                    Zl(t, "PhoneAuthProvider", xo, [{
                        name: "auth",
                        J: "an instance of Firebase Auth",
                        optional: !0,
                        K: function(t) {
                            return !!(t && t instanceof el)
                        }
                    }]),
                    Zl(t, "RecaptchaVerifier", Ul, [Yl(Kl(), {
                        name: "",
                        J: "an HTML element",
                        optional: !1,
                        K: function(t) {
                            return !!(t && t instanceof Element)
                        }
                    }, "recaptchaContainer"), Hl("recaptchaParameters", !0), {
                        name: "app",
                        J: "an instance of Firebase App",
                        optional: !0,
                        K: function(t) {
                            return !!(t && t instanceof n.a.app.App)
                        }
                    }]),
                    Zl(t, "ActionCodeURL", yr, []),
                    Zl(t, "PhoneMultiFactorGenerator", El, []),
                    n.a.INTERNAL.registerComponent({
                        name: "auth",
                        instanceFactory: function(t) {
                            return new el(t = t.getProvider("app").getImmediate())
                        },
                        multipleInstances: !1,
                        serviceProps: t,
                        instantiationMode: "LAZY",
                        type: "PUBLIC"
                    }),
                    n.a.INTERNAL.registerComponent({
                        name: "auth-internal",
                        instanceFactory: function(t) {
                            return {
                                getUid: I((t = t.getProvider("auth").getImmediate()).getUid, t),
                                getToken: I(t.mc, t),
                                addAuthTokenListener: I(t.cc, t),
                                removeAuthTokenListener: I(t.Oc, t)
                            }
                        },
                        multipleInstances: !1,
                        instantiationMode: "LAZY",
                        type: "PRIVATE"
                    }),
                    n.a.registerVersion("@firebase/auth", "0.15.1"),
                    n.a.INTERNAL.extendNamespace({
                        User: mh
                    })
                }()
            }
            ).apply(void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        ).call(this, e("yLpj"))
    }
}]);
//# sourceMappingURL=ff239f9d-ccb6db188b6dcaa50522.js.map
