/*! For license information please see f2e80800-1e7a89e0ec1eca76d894.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[16], {
    xsWp: function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("mrSG")
              , r = n("zIRd")
              , i = n("q/0M")
              , o = n("qOnz")
              , u = n("x7I3")
              , s = n("/6Yf")
              , a = {
                OK: "ok",
                CANCELLED: "cancelled",
                UNKNOWN: "unknown",
                INVALID_ARGUMENT: "invalid-argument",
                DEADLINE_EXCEEDED: "deadline-exceeded",
                NOT_FOUND: "not-found",
                ALREADY_EXISTS: "already-exists",
                PERMISSION_DENIED: "permission-denied",
                UNAUTHENTICATED: "unauthenticated",
                RESOURCE_EXHAUSTED: "resource-exhausted",
                FAILED_PRECONDITION: "failed-precondition",
                ABORTED: "aborted",
                OUT_OF_RANGE: "out-of-range",
                UNIMPLEMENTED: "unimplemented",
                INTERNAL: "internal",
                UNAVAILABLE: "unavailable",
                DATA_LOSS: "data-loss"
            }
              , c = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this, n) || this).code = e,
                    r.message = n,
                    r.name = "FirebaseError",
                    r.toString = function() {
                        return r.name + ": [code=" + r.code + "]: " + r.message
                    }
                    ,
                    r
                }
                return Object(e.c)(n, t),
                n
            }(Error)
              , h = new i.b("@firebase/firestore");
            function f() {
                return h.logLevel
            }
            function l(t) {
                for (var n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                if (h.logLevel <= i.a.DEBUG) {
                    var o = n.map(v);
                    h.debug.apply(h, Object(e.g)(["Firestore (8.0.0): " + t], o))
                }
            }
            function p(t) {
                for (var n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                if (h.logLevel <= i.a.ERROR) {
                    var o = n.map(v);
                    h.error.apply(h, Object(e.g)(["Firestore (8.0.0): " + t], o))
                }
            }
            function d(t) {
                for (var n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                if (h.logLevel <= i.a.WARN) {
                    var o = n.map(v);
                    h.warn.apply(h, Object(e.g)(["Firestore (8.0.0): " + t], o))
                }
            }
            function v(t) {
                if ("string" == typeof t)
                    return t;
                try {
                    return e = t,
                    JSON.stringify(e)
                } catch (e) {
                    return t
                }
                var e
            }
            function y(t) {
                void 0 === t && (t = "Unexpected state");
                var e = "FIRESTORE (8.0.0) INTERNAL ASSERTION FAILED: " + t;
                throw p(e),
                new Error(e)
            }
            function g(t, e) {
                t || y()
            }
            function m(t, e) {
                return t
            }
            function b(t) {
                var e = "undefined" != typeof self && (self.crypto || self.msCrypto)
                  , n = new Uint8Array(t);
                if (e && "function" == typeof e.getRandomValues)
                    e.getRandomValues(n);
                else
                    for (var r = 0; r < t; r++)
                        n[r] = Math.floor(256 * Math.random());
                return n
            }
            var w = function() {
                function t() {}
                return t.t = function() {
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; n.length < 20; )
                        for (var r = b(40), i = 0; i < r.length; ++i)
                            n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
                    return n
                }
                ,
                t
            }();
            function I(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }
            function E(t, e, n) {
                return t.length === e.length && t.every((function(t, r) {
                    return n(t, e[r])
                }
                ))
            }
            function _(t) {
                return t + "\0"
            }
            var T = function() {
                function t(t) {
                    this.i = t
                }
                return t.fromBase64String = function(e) {
                    return new t(atob(e))
                }
                ,
                t.fromUint8Array = function(e) {
                    return new t(function(t) {
                        for (var e = "", n = 0; n < t.length; ++n)
                            e += String.fromCharCode(t[n]);
                        return e
                    }(e))
                }
                ,
                t.prototype.toBase64 = function() {
                    return t = this.i,
                    btoa(t);
                    var t
                }
                ,
                t.prototype.toUint8Array = function() {
                    return function(t) {
                        for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
                            e[n] = t.charCodeAt(n);
                        return e
                    }(this.i)
                }
                ,
                t.prototype.o = function() {
                    return 2 * this.i.length
                }
                ,
                t.prototype.h = function(t) {
                    return I(this.i, t.i)
                }
                ,
                t.prototype.isEqual = function(t) {
                    return this.i === t.i
                }
                ,
                t
            }();
            T.u = new T("");
            var O = function() {
                function t(t) {
                    this.l = t
                }
                return t.fromBase64String = function(e) {
                    try {
                        return new t(T.fromBase64String(e))
                    } catch (e) {
                        throw new c(a.INVALID_ARGUMENT,"Failed to construct Bytes from Base64 string: " + e)
                    }
                }
                ,
                t.fromUint8Array = function(e) {
                    return new t(T.fromUint8Array(e))
                }
                ,
                t.prototype.toBase64 = function() {
                    return this.l.toBase64()
                }
                ,
                t.prototype.toUint8Array = function() {
                    return this.l.toUint8Array()
                }
                ,
                t.prototype.toString = function() {
                    return "Bytes(base64: " + this.toBase64() + ")"
                }
                ,
                t.prototype.isEqual = function(t) {
                    return this.l.isEqual(t.l)
                }
                ,
                t
            }();
            function N() {
                if ("undefined" == typeof Uint8Array)
                    throw new c(a.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")
            }
            function A() {
                if ("undefined" == typeof atob)
                    throw new c(a.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")
            }
            var D = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n.fromBase64String = function(t) {
                    A();
                    try {
                        return new n(T.fromBase64String(t))
                    } catch (t) {
                        throw new c(a.INVALID_ARGUMENT,"Failed to construct Blob from Base64 string: " + t)
                    }
                }
                ,
                n.fromUint8Array = function(t) {
                    return N(),
                    new n(T.fromUint8Array(t))
                }
                ,
                n.prototype.toBase64 = function() {
                    return A(),
                    t.prototype.toBase64.call(this)
                }
                ,
                n.prototype.toUint8Array = function() {
                    return N(),
                    t.prototype.toUint8Array.call(this)
                }
                ,
                n.prototype.toString = function() {
                    return "Blob(base64: " + this.toBase64() + ")"
                }
                ,
                n
            }(O)
              , S = function(t, e, n, r, i, o) {
                this._ = t,
                this.persistenceKey = e,
                this.host = n,
                this.ssl = r,
                this.forceLongPolling = i,
                this.T = o
            }
              , j = function() {
                function t(t, e) {
                    this.projectId = t,
                    this.database = e || "(default)"
                }
                return Object.defineProperty(t.prototype, "I", {
                    get: function() {
                        return "(default)" === this.database
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.isEqual = function(e) {
                    return e instanceof t && e.projectId === this.projectId && e.database === this.database
                }
                ,
                t.prototype.h = function(t) {
                    return I(this.projectId, t.projectId) || I(this.database, t.database)
                }
                ,
                t
            }();
            function x(t) {
                var e = 0;
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e++;
                return e
            }
            function k(t, e) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            }
            function P(t) {
                for (var e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e))
                        return !1;
                return !0
            }
            var L = function() {
                function t(t, e) {
                    this.m = t,
                    this.A = e,
                    this.R = {}
                }
                return t.prototype.get = function(t) {
                    var e = this.m(t)
                      , n = this.R[e];
                    if (void 0 !== n)
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r]
                              , u = o[0]
                              , s = o[1];
                            if (this.A(u, t))
                                return s
                        }
                }
                ,
                t.prototype.has = function(t) {
                    return void 0 !== this.get(t)
                }
                ,
                t.prototype.set = function(t, e) {
                    var n = this.m(t)
                      , r = this.R[n];
                    if (void 0 !== r) {
                        for (var i = 0; i < r.length; i++)
                            if (this.A(r[i][0], t))
                                return void (r[i] = [t, e]);
                        r.push([t, e])
                    } else
                        this.R[n] = [[t, e]]
                }
                ,
                t.prototype.delete = function(t) {
                    var e = this.m(t)
                      , n = this.R[e];
                    if (void 0 === n)
                        return !1;
                    for (var r = 0; r < n.length; r++)
                        if (this.A(n[r][0], t))
                            return 1 === n.length ? delete this.R[e] : n.splice(r, 1),
                            !0;
                    return !1
                }
                ,
                t.prototype.forEach = function(t) {
                    k(this.R, (function(e, n) {
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r]
                              , u = o[0]
                              , s = o[1];
                            t(u, s)
                        }
                    }
                    ))
                }
                ,
                t.prototype.P = function() {
                    return P(this.R)
                }
                ,
                t
            }()
              , V = function() {
                function t(t, e) {
                    if (this.seconds = t,
                    this.nanoseconds = e,
                    e < 0)
                        throw new c(a.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: " + e);
                    if (e >= 1e9)
                        throw new c(a.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: " + e);
                    if (t < -62135596800)
                        throw new c(a.INVALID_ARGUMENT,"Timestamp seconds out of range: " + t);
                    if (t >= 253402300800)
                        throw new c(a.INVALID_ARGUMENT,"Timestamp seconds out of range: " + t)
                }
                return t.now = function() {
                    return t.fromMillis(Date.now())
                }
                ,
                t.fromDate = function(e) {
                    return t.fromMillis(e.getTime())
                }
                ,
                t.fromMillis = function(e) {
                    var n = Math.floor(e / 1e3);
                    return new t(n,1e6 * (e - 1e3 * n))
                }
                ,
                t.prototype.toDate = function() {
                    return new Date(this.toMillis())
                }
                ,
                t.prototype.toMillis = function() {
                    return 1e3 * this.seconds + this.nanoseconds / 1e6
                }
                ,
                t.prototype.g = function(t) {
                    return this.seconds === t.seconds ? I(this.nanoseconds, t.nanoseconds) : I(this.seconds, t.seconds)
                }
                ,
                t.prototype.isEqual = function(t) {
                    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
                }
                ,
                t.prototype.toString = function() {
                    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                }
                ,
                t.prototype.toJSON = function() {
                    return {
                        seconds: this.seconds,
                        nanoseconds: this.nanoseconds
                    }
                }
                ,
                t.prototype.valueOf = function() {
                    var t = this.seconds - -62135596800;
                    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
                }
                ,
                t
            }()
              , R = function() {
                function t(t) {
                    this.timestamp = t
                }
                return t.V = function(e) {
                    return new t(e)
                }
                ,
                t.min = function() {
                    return new t(new V(0,0))
                }
                ,
                t.prototype.h = function(t) {
                    return this.timestamp.g(t.timestamp)
                }
                ,
                t.prototype.isEqual = function(t) {
                    return this.timestamp.isEqual(t.timestamp)
                }
                ,
                t.prototype.p = function() {
                    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                }
                ,
                t.prototype.toString = function() {
                    return "SnapshotVersion(" + this.timestamp.toString() + ")"
                }
                ,
                t.prototype.v = function() {
                    return this.timestamp
                }
                ,
                t
            }()
              , C = function() {
                function t(t, e, n) {
                    void 0 === e ? e = 0 : e > t.length && y(),
                    void 0 === n ? n = t.length - e : n > t.length - e && y(),
                    this.segments = t,
                    this.offset = e,
                    this.S = n
                }
                return Object.defineProperty(t.prototype, "length", {
                    get: function() {
                        return this.S
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.isEqual = function(e) {
                    return 0 === t.D(this, e)
                }
                ,
                t.prototype.child = function(e) {
                    var n = this.segments.slice(this.offset, this.limit());
                    return e instanceof t ? e.forEach((function(t) {
                        n.push(t)
                    }
                    )) : n.push(e),
                    this.C(n)
                }
                ,
                t.prototype.limit = function() {
                    return this.offset + this.length
                }
                ,
                t.prototype.N = function(t) {
                    return t = void 0 === t ? 1 : t,
                    this.C(this.segments, this.offset + t, this.length - t)
                }
                ,
                t.prototype.F = function() {
                    return this.C(this.segments, this.offset, this.length - 1)
                }
                ,
                t.prototype.k = function() {
                    return this.segments[this.offset]
                }
                ,
                t.prototype.O = function() {
                    return this.get(this.length - 1)
                }
                ,
                t.prototype.get = function(t) {
                    return this.segments[this.offset + t]
                }
                ,
                t.prototype.P = function() {
                    return 0 === this.length
                }
                ,
                t.prototype.M = function(t) {
                    if (t.length < this.length)
                        return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e))
                            return !1;
                    return !0
                }
                ,
                t.prototype.$ = function(t) {
                    if (this.length + 1 !== t.length)
                        return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e))
                            return !1;
                    return !0
                }
                ,
                t.prototype.forEach = function(t) {
                    for (var e = this.offset, n = this.limit(); e < n; e++)
                        t(this.segments[e])
                }
                ,
                t.prototype.L = function() {
                    return this.segments.slice(this.offset, this.limit())
                }
                ,
                t.D = function(t, e) {
                    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                        var i = t.get(r)
                          , o = e.get(r);
                        if (i < o)
                            return -1;
                        if (i > o)
                            return 1
                    }
                    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                }
                ,
                t
            }()
              , U = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n.prototype.C = function(t, e, r) {
                    return new n(t,e,r)
                }
                ,
                n.prototype.B = function() {
                    return this.L().join("/")
                }
                ,
                n.prototype.toString = function() {
                    return this.B()
                }
                ,
                n.q = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    for (var r = [], i = 0, o = t; i < o.length; i++) {
                        var u = o[i];
                        if (u.indexOf("//") >= 0)
                            throw new c(a.INVALID_ARGUMENT,"Invalid segment (" + u + "). Paths must not contain // in them.");
                        r.push.apply(r, u.split("/").filter((function(t) {
                            return t.length > 0
                        }
                        )))
                    }
                    return new n(r)
                }
                ,
                n.U = function() {
                    return new n([])
                }
                ,
                n
            }(C)
              , M = /^[_a-zA-Z][_a-zA-Z0-9]*$/
              , q = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n.prototype.C = function(t, e, r) {
                    return new n(t,e,r)
                }
                ,
                n.K = function(t) {
                    return M.test(t)
                }
                ,
                n.prototype.B = function() {
                    return this.L().map((function(t) {
                        return t = t.replace("\\", "\\\\").replace("`", "\\`"),
                        n.K(t) || (t = "`" + t + "`"),
                        t
                    }
                    )).join(".")
                }
                ,
                n.prototype.toString = function() {
                    return this.B()
                }
                ,
                n.prototype.W = function() {
                    return 1 === this.length && "__name__" === this.get(0)
                }
                ,
                n.j = function() {
                    return new n(["__name__"])
                }
                ,
                n.G = function(t) {
                    for (var e = [], r = "", i = 0, o = function() {
                        if (0 === r.length)
                            throw new c(a.INVALID_ARGUMENT,"Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                        e.push(r),
                        r = ""
                    }, u = !1; i < t.length; ) {
                        var s = t[i];
                        if ("\\" === s) {
                            if (i + 1 === t.length)
                                throw new c(a.INVALID_ARGUMENT,"Path has trailing escape character: " + t);
                            var h = t[i + 1];
                            if ("\\" !== h && "." !== h && "`" !== h)
                                throw new c(a.INVALID_ARGUMENT,"Path has invalid escape sequence: " + t);
                            r += h,
                            i += 2
                        } else
                            "`" === s ? (u = !u,
                            i++) : "." !== s || u ? (r += s,
                            i++) : (o(),
                            i++)
                    }
                    if (o(),
                    u)
                        throw new c(a.INVALID_ARGUMENT,"Unterminated ` in path: " + t);
                    return new n(e)
                }
                ,
                n.U = function() {
                    return new n([])
                }
                ,
                n
            }(C)
              , F = function() {
                function t(t) {
                    this.path = t
                }
                return t.H = function(e) {
                    return new t(U.q(e))
                }
                ,
                t.J = function(e) {
                    return new t(U.q(e).N(5))
                }
                ,
                t.prototype.Y = function(t) {
                    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t
                }
                ,
                t.prototype.isEqual = function(t) {
                    return null !== t && 0 === U.D(this.path, t.path)
                }
                ,
                t.prototype.toString = function() {
                    return this.path.toString()
                }
                ,
                t.D = function(t, e) {
                    return U.D(t.path, e.path)
                }
                ,
                t.X = function(t) {
                    return t.length % 2 == 0
                }
                ,
                t.Z = function(e) {
                    return new t(new U(e.slice()))
                }
                ,
                t
            }();
            function G(t) {
                return null == t
            }
            function B(t) {
                return 0 === t && 1 / t == -1 / 0
            }
            function z(t) {
                return "number" == typeof t && Number.isInteger(t) && !B(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
            }
            var K = function(t, e, n, r, i, o, u) {
                void 0 === e && (e = null),
                void 0 === n && (n = []),
                void 0 === r && (r = []),
                void 0 === i && (i = null),
                void 0 === o && (o = null),
                void 0 === u && (u = null),
                this.path = t,
                this.collectionGroup = e,
                this.orderBy = n,
                this.filters = r,
                this.limit = i,
                this.startAt = o,
                this.endAt = u,
                this.tt = null
            };
            function W(t, e, n, r, i, o, u) {
                return void 0 === e && (e = null),
                void 0 === n && (n = []),
                void 0 === r && (r = []),
                void 0 === i && (i = null),
                void 0 === o && (o = null),
                void 0 === u && (u = null),
                new K(t,e,n,r,i,o,u)
            }
            function Q(t) {
                var e = m(t);
                if (null === e.tt) {
                    var n = e.path.B();
                    null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup),
                    n += "|f:",
                    n += e.filters.map((function(t) {
                        return function(t) {
                            return t.field.B() + t.op.toString() + Ct(t.value)
                        }(t)
                    }
                    )).join(","),
                    n += "|ob:",
                    n += e.orderBy.map((function(t) {
                        return (e = t).field.B() + e.dir;
                        var e
                    }
                    )).join(","),
                    G(e.limit) || (n += "|l:",
                    n += e.limit),
                    e.startAt && (n += "|lb:",
                    n += qn(e.startAt)),
                    e.endAt && (n += "|ub:",
                    n += qn(e.endAt)),
                    e.tt = n
                }
                return e.tt
            }
            function Y(t, e) {
                if (t.limit !== e.limit)
                    return !1;
                if (t.orderBy.length !== e.orderBy.length)
                    return !1;
                for (var n = 0; n < t.orderBy.length; n++)
                    if (!Kn(t.orderBy[n], e.orderBy[n]))
                        return !1;
                if (t.filters.length !== e.filters.length)
                    return !1;
                for (var r = 0; r < t.filters.length; r++)
                    if (i = t.filters[r],
                    o = e.filters[r],
                    i.op !== o.op || !i.field.isEqual(o.field) || !Pt(i.value, o.value))
                        return !1;
                var i, o;
                return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Gn(t.startAt, e.startAt) && Gn(t.endAt, e.endAt)
            }
            function H(t) {
                return F.X(t.path) && null === t.collectionGroup && 0 === t.filters.length
            }
            var X, J, $ = function() {
                function t(t, e, n, r, i, o, u) {
                    void 0 === i && (i = R.min()),
                    void 0 === o && (o = R.min()),
                    void 0 === u && (u = T.u),
                    this.target = t,
                    this.targetId = e,
                    this.et = n,
                    this.sequenceNumber = r,
                    this.nt = i,
                    this.lastLimboFreeSnapshotVersion = o,
                    this.resumeToken = u
                }
                return t.prototype.st = function(e) {
                    return new t(this.target,this.targetId,this.et,e,this.nt,this.lastLimboFreeSnapshotVersion,this.resumeToken)
                }
                ,
                t.prototype.it = function(e, n) {
                    return new t(this.target,this.targetId,this.et,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)
                }
                ,
                t.prototype.rt = function(e) {
                    return new t(this.target,this.targetId,this.et,this.sequenceNumber,this.nt,e,this.resumeToken)
                }
                ,
                t
            }(), Z = function(t) {
                this.count = t
            };
            function tt(t) {
                switch (t) {
                case a.OK:
                    return y();
                case a.CANCELLED:
                case a.UNKNOWN:
                case a.DEADLINE_EXCEEDED:
                case a.RESOURCE_EXHAUSTED:
                case a.INTERNAL:
                case a.UNAVAILABLE:
                case a.UNAUTHENTICATED:
                    return !1;
                case a.INVALID_ARGUMENT:
                case a.NOT_FOUND:
                case a.ALREADY_EXISTS:
                case a.PERMISSION_DENIED:
                case a.FAILED_PRECONDITION:
                case a.ABORTED:
                case a.OUT_OF_RANGE:
                case a.UNIMPLEMENTED:
                case a.DATA_LOSS:
                    return !0;
                default:
                    return y()
                }
            }
            function et(t) {
                if (void 0 === t)
                    return p("GRPC error has no .code"),
                    a.UNKNOWN;
                switch (t) {
                case X.OK:
                    return a.OK;
                case X.CANCELLED:
                    return a.CANCELLED;
                case X.UNKNOWN:
                    return a.UNKNOWN;
                case X.DEADLINE_EXCEEDED:
                    return a.DEADLINE_EXCEEDED;
                case X.RESOURCE_EXHAUSTED:
                    return a.RESOURCE_EXHAUSTED;
                case X.INTERNAL:
                    return a.INTERNAL;
                case X.UNAVAILABLE:
                    return a.UNAVAILABLE;
                case X.UNAUTHENTICATED:
                    return a.UNAUTHENTICATED;
                case X.INVALID_ARGUMENT:
                    return a.INVALID_ARGUMENT;
                case X.NOT_FOUND:
                    return a.NOT_FOUND;
                case X.ALREADY_EXISTS:
                    return a.ALREADY_EXISTS;
                case X.PERMISSION_DENIED:
                    return a.PERMISSION_DENIED;
                case X.FAILED_PRECONDITION:
                    return a.FAILED_PRECONDITION;
                case X.ABORTED:
                    return a.ABORTED;
                case X.OUT_OF_RANGE:
                    return a.OUT_OF_RANGE;
                case X.UNIMPLEMENTED:
                    return a.UNIMPLEMENTED;
                case X.DATA_LOSS:
                    return a.DATA_LOSS;
                default:
                    return y()
                }
            }
            (J = X || (X = {}))[J.OK = 0] = "OK",
            J[J.CANCELLED = 1] = "CANCELLED",
            J[J.UNKNOWN = 2] = "UNKNOWN",
            J[J.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT",
            J[J.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED",
            J[J.NOT_FOUND = 5] = "NOT_FOUND",
            J[J.ALREADY_EXISTS = 6] = "ALREADY_EXISTS",
            J[J.PERMISSION_DENIED = 7] = "PERMISSION_DENIED",
            J[J.UNAUTHENTICATED = 16] = "UNAUTHENTICATED",
            J[J.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED",
            J[J.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION",
            J[J.ABORTED = 10] = "ABORTED",
            J[J.OUT_OF_RANGE = 11] = "OUT_OF_RANGE",
            J[J.UNIMPLEMENTED = 12] = "UNIMPLEMENTED",
            J[J.INTERNAL = 13] = "INTERNAL",
            J[J.UNAVAILABLE = 14] = "UNAVAILABLE",
            J[J.DATA_LOSS = 15] = "DATA_LOSS";
            var nt = function() {
                function t(t, e) {
                    this.D = t,
                    this.root = e || it.EMPTY
                }
                return t.prototype.ot = function(e, n) {
                    return new t(this.D,this.root.ot(e, n, this.D).copy(null, null, it.at, null, null))
                }
                ,
                t.prototype.remove = function(e) {
                    return new t(this.D,this.root.remove(e, this.D).copy(null, null, it.at, null, null))
                }
                ,
                t.prototype.get = function(t) {
                    for (var e = this.root; !e.P(); ) {
                        var n = this.D(t, e.key);
                        if (0 === n)
                            return e.value;
                        n < 0 ? e = e.left : n > 0 && (e = e.right)
                    }
                    return null
                }
                ,
                t.prototype.indexOf = function(t) {
                    for (var e = 0, n = this.root; !n.P(); ) {
                        var r = this.D(t, n.key);
                        if (0 === r)
                            return e + n.left.size;
                        r < 0 ? n = n.left : (e += n.left.size + 1,
                        n = n.right)
                    }
                    return -1
                }
                ,
                t.prototype.P = function() {
                    return this.root.P()
                }
                ,
                Object.defineProperty(t.prototype, "size", {
                    get: function() {
                        return this.root.size
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.ht = function() {
                    return this.root.ht()
                }
                ,
                t.prototype.ct = function() {
                    return this.root.ct()
                }
                ,
                t.prototype.ut = function(t) {
                    return this.root.ut(t)
                }
                ,
                t.prototype.forEach = function(t) {
                    this.ut((function(e, n) {
                        return t(e, n),
                        !1
                    }
                    ))
                }
                ,
                t.prototype.toString = function() {
                    var t = [];
                    return this.ut((function(e, n) {
                        return t.push(e + ":" + n),
                        !1
                    }
                    )),
                    "{" + t.join(", ") + "}"
                }
                ,
                t.prototype.lt = function(t) {
                    return this.root.lt(t)
                }
                ,
                t.prototype._t = function() {
                    return new rt(this.root,null,this.D,!1)
                }
                ,
                t.prototype.ft = function(t) {
                    return new rt(this.root,t,this.D,!1)
                }
                ,
                t.prototype.dt = function() {
                    return new rt(this.root,null,this.D,!0)
                }
                ,
                t.prototype.wt = function(t) {
                    return new rt(this.root,t,this.D,!0)
                }
                ,
                t
            }()
              , rt = function() {
                function t(t, e, n, r) {
                    this.Et = r,
                    this.Tt = [];
                    for (var i = 1; !t.P(); )
                        if (i = e ? n(t.key, e) : 1,
                        r && (i *= -1),
                        i < 0)
                            t = this.Et ? t.left : t.right;
                        else {
                            if (0 === i) {
                                this.Tt.push(t);
                                break
                            }
                            this.Tt.push(t),
                            t = this.Et ? t.right : t.left
                        }
                }
                return t.prototype.It = function() {
                    var t = this.Tt.pop()
                      , e = {
                        key: t.key,
                        value: t.value
                    };
                    if (this.Et)
                        for (t = t.left; !t.P(); )
                            this.Tt.push(t),
                            t = t.right;
                    else
                        for (t = t.right; !t.P(); )
                            this.Tt.push(t),
                            t = t.left;
                    return e
                }
                ,
                t.prototype.At = function() {
                    return this.Tt.length > 0
                }
                ,
                t.prototype.Rt = function() {
                    if (0 === this.Tt.length)
                        return null;
                    var t = this.Tt[this.Tt.length - 1];
                    return {
                        key: t.key,
                        value: t.value
                    }
                }
                ,
                t
            }()
              , it = function() {
                function t(e, n, r, i, o) {
                    this.key = e,
                    this.value = n,
                    this.color = null != r ? r : t.RED,
                    this.left = null != i ? i : t.EMPTY,
                    this.right = null != o ? o : t.EMPTY,
                    this.size = this.left.size + 1 + this.right.size
                }
                return t.prototype.copy = function(e, n, r, i, o) {
                    return new t(null != e ? e : this.key,null != n ? n : this.value,null != r ? r : this.color,null != i ? i : this.left,null != o ? o : this.right)
                }
                ,
                t.prototype.P = function() {
                    return !1
                }
                ,
                t.prototype.ut = function(t) {
                    return this.left.ut(t) || t(this.key, this.value) || this.right.ut(t)
                }
                ,
                t.prototype.lt = function(t) {
                    return this.right.lt(t) || t(this.key, this.value) || this.left.lt(t)
                }
                ,
                t.prototype.min = function() {
                    return this.left.P() ? this : this.left.min()
                }
                ,
                t.prototype.ht = function() {
                    return this.min().key
                }
                ,
                t.prototype.ct = function() {
                    return this.right.P() ? this.key : this.right.ct()
                }
                ,
                t.prototype.ot = function(t, e, n) {
                    var r = this
                      , i = n(t, r.key);
                    return (r = i < 0 ? r.copy(null, null, null, r.left.ot(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.ot(t, e, n))).Pt()
                }
                ,
                t.prototype.gt = function() {
                    if (this.left.P())
                        return t.EMPTY;
                    var e = this;
                    return e.left.Vt() || e.left.left.Vt() || (e = e.yt()),
                    (e = e.copy(null, null, null, e.left.gt(), null)).Pt()
                }
                ,
                t.prototype.remove = function(e, n) {
                    var r, i = this;
                    if (n(e, i.key) < 0)
                        i.left.P() || i.left.Vt() || i.left.left.Vt() || (i = i.yt()),
                        i = i.copy(null, null, null, i.left.remove(e, n), null);
                    else {
                        if (i.left.Vt() && (i = i.bt()),
                        i.right.P() || i.right.Vt() || i.right.left.Vt() || (i = i.vt()),
                        0 === n(e, i.key)) {
                            if (i.right.P())
                                return t.EMPTY;
                            r = i.right.min(),
                            i = i.copy(r.key, r.value, null, null, i.right.gt())
                        }
                        i = i.copy(null, null, null, null, i.right.remove(e, n))
                    }
                    return i.Pt()
                }
                ,
                t.prototype.Vt = function() {
                    return this.color
                }
                ,
                t.prototype.Pt = function() {
                    var t = this;
                    return t.right.Vt() && !t.left.Vt() && (t = t.St()),
                    t.left.Vt() && t.left.left.Vt() && (t = t.bt()),
                    t.left.Vt() && t.right.Vt() && (t = t.Dt()),
                    t
                }
                ,
                t.prototype.yt = function() {
                    var t = this.Dt();
                    return t.right.left.Vt() && (t = (t = (t = t.copy(null, null, null, null, t.right.bt())).St()).Dt()),
                    t
                }
                ,
                t.prototype.vt = function() {
                    var t = this.Dt();
                    return t.left.left.Vt() && (t = (t = t.bt()).Dt()),
                    t
                }
                ,
                t.prototype.St = function() {
                    var e = this.copy(null, null, t.RED, null, this.right.left);
                    return this.right.copy(null, null, this.color, e, null)
                }
                ,
                t.prototype.bt = function() {
                    var e = this.copy(null, null, t.RED, this.left.right, null);
                    return this.left.copy(null, null, this.color, null, e)
                }
                ,
                t.prototype.Dt = function() {
                    var t = this.left.copy(null, null, !this.left.color, null, null)
                      , e = this.right.copy(null, null, !this.right.color, null, null);
                    return this.copy(null, null, !this.color, t, e)
                }
                ,
                t.prototype.Ct = function() {
                    var t = this.Nt();
                    return Math.pow(2, t) <= this.size + 1
                }
                ,
                t.prototype.Nt = function() {
                    if (this.Vt() && this.left.Vt())
                        throw y();
                    if (this.right.Vt())
                        throw y();
                    var t = this.left.Nt();
                    if (t !== this.right.Nt())
                        throw y();
                    return t + (this.Vt() ? 0 : 1)
                }
                ,
                t
            }();
            it.EMPTY = null,
            it.RED = !0,
            it.at = !1,
            it.EMPTY = new (function() {
                function t() {
                    this.size = 0
                }
                return Object.defineProperty(t.prototype, "key", {
                    get: function() {
                        throw y()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "value", {
                    get: function() {
                        throw y()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "color", {
                    get: function() {
                        throw y()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "left", {
                    get: function() {
                        throw y()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "right", {
                    get: function() {
                        throw y()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.copy = function(t, e, n, r, i) {
                    return this
                }
                ,
                t.prototype.ot = function(t, e, n) {
                    return new it(t,e)
                }
                ,
                t.prototype.remove = function(t, e) {
                    return this
                }
                ,
                t.prototype.P = function() {
                    return !0
                }
                ,
                t.prototype.ut = function(t) {
                    return !1
                }
                ,
                t.prototype.lt = function(t) {
                    return !1
                }
                ,
                t.prototype.ht = function() {
                    return null
                }
                ,
                t.prototype.ct = function() {
                    return null
                }
                ,
                t.prototype.Vt = function() {
                    return !1
                }
                ,
                t.prototype.Ct = function() {
                    return !0
                }
                ,
                t.prototype.Nt = function() {
                    return 0
                }
                ,
                t
            }());
            var ot = function() {
                function t(t) {
                    this.D = t,
                    this.data = new nt(this.D)
                }
                return t.prototype.has = function(t) {
                    return null !== this.data.get(t)
                }
                ,
                t.prototype.first = function() {
                    return this.data.ht()
                }
                ,
                t.prototype.last = function() {
                    return this.data.ct()
                }
                ,
                Object.defineProperty(t.prototype, "size", {
                    get: function() {
                        return this.data.size
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.indexOf = function(t) {
                    return this.data.indexOf(t)
                }
                ,
                t.prototype.forEach = function(t) {
                    this.data.ut((function(e, n) {
                        return t(e),
                        !1
                    }
                    ))
                }
                ,
                t.prototype.xt = function(t, e) {
                    for (var n = this.data.ft(t[0]); n.At(); ) {
                        var r = n.It();
                        if (this.D(r.key, t[1]) >= 0)
                            return;
                        e(r.key)
                    }
                }
                ,
                t.prototype.Ft = function(t, e) {
                    var n;
                    for (n = void 0 !== e ? this.data.ft(e) : this.data._t(); n.At(); )
                        if (!t(n.It().key))
                            return
                }
                ,
                t.prototype.kt = function(t) {
                    var e = this.data.ft(t);
                    return e.At() ? e.It().key : null
                }
                ,
                t.prototype._t = function() {
                    return new ut(this.data._t())
                }
                ,
                t.prototype.ft = function(t) {
                    return new ut(this.data.ft(t))
                }
                ,
                t.prototype.add = function(t) {
                    return this.copy(this.data.remove(t).ot(t, !0))
                }
                ,
                t.prototype.delete = function(t) {
                    return this.has(t) ? this.copy(this.data.remove(t)) : this
                }
                ,
                t.prototype.P = function() {
                    return this.data.P()
                }
                ,
                t.prototype.Ot = function(t) {
                    var e = this;
                    return e.size < t.size && (e = t,
                    t = this),
                    t.forEach((function(t) {
                        e = e.add(t)
                    }
                    )),
                    e
                }
                ,
                t.prototype.isEqual = function(e) {
                    if (!(e instanceof t))
                        return !1;
                    if (this.size !== e.size)
                        return !1;
                    for (var n = this.data._t(), r = e.data._t(); n.At(); ) {
                        var i = n.It().key
                          , o = r.It().key;
                        if (0 !== this.D(i, o))
                            return !1
                    }
                    return !0
                }
                ,
                t.prototype.L = function() {
                    var t = [];
                    return this.forEach((function(e) {
                        t.push(e)
                    }
                    )),
                    t
                }
                ,
                t.prototype.toString = function() {
                    var t = [];
                    return this.forEach((function(e) {
                        return t.push(e)
                    }
                    )),
                    "SortedSet(" + t.toString() + ")"
                }
                ,
                t.prototype.copy = function(e) {
                    var n = new t(this.D);
                    return n.data = e,
                    n
                }
                ,
                t
            }()
              , ut = function() {
                function t(t) {
                    this.Mt = t
                }
                return t.prototype.It = function() {
                    return this.Mt.It().key
                }
                ,
                t.prototype.At = function() {
                    return this.Mt.At()
                }
                ,
                t
            }()
              , st = new nt(F.D);
            function at() {
                return st
            }
            function ct() {
                return at()
            }
            var ht = new nt(F.D);
            function ft() {
                return ht
            }
            var lt = new nt(F.D)
              , pt = new ot(F.D);
            function dt() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                for (var n = pt, r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    n = n.add(o)
                }
                return n
            }
            var vt = new ot(I);
            function yt() {
                return vt
            }
            var gt = function() {
                function t(t) {
                    this.D = t ? function(e, n) {
                        return t(e, n) || F.D(e.key, n.key)
                    }
                    : function(t, e) {
                        return F.D(t.key, e.key)
                    }
                    ,
                    this.$t = ft(),
                    this.Lt = new nt(this.D)
                }
                return t.Bt = function(e) {
                    return new t(e.D)
                }
                ,
                t.prototype.has = function(t) {
                    return null != this.$t.get(t)
                }
                ,
                t.prototype.get = function(t) {
                    return this.$t.get(t)
                }
                ,
                t.prototype.first = function() {
                    return this.Lt.ht()
                }
                ,
                t.prototype.last = function() {
                    return this.Lt.ct()
                }
                ,
                t.prototype.P = function() {
                    return this.Lt.P()
                }
                ,
                t.prototype.indexOf = function(t) {
                    var e = this.$t.get(t);
                    return e ? this.Lt.indexOf(e) : -1
                }
                ,
                Object.defineProperty(t.prototype, "size", {
                    get: function() {
                        return this.Lt.size
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.forEach = function(t) {
                    this.Lt.ut((function(e, n) {
                        return t(e),
                        !1
                    }
                    ))
                }
                ,
                t.prototype.add = function(t) {
                    var e = this.delete(t.key);
                    return e.copy(e.$t.ot(t.key, t), e.Lt.ot(t, null))
                }
                ,
                t.prototype.delete = function(t) {
                    var e = this.get(t);
                    return e ? this.copy(this.$t.remove(t), this.Lt.remove(e)) : this
                }
                ,
                t.prototype.isEqual = function(e) {
                    if (!(e instanceof t))
                        return !1;
                    if (this.size !== e.size)
                        return !1;
                    for (var n = this.Lt._t(), r = e.Lt._t(); n.At(); ) {
                        var i = n.It().key
                          , o = r.It().key;
                        if (!i.isEqual(o))
                            return !1
                    }
                    return !0
                }
                ,
                t.prototype.toString = function() {
                    var t = [];
                    return this.forEach((function(e) {
                        t.push(e.toString())
                    }
                    )),
                    0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)"
                }
                ,
                t.prototype.copy = function(e, n) {
                    var r = new t;
                    return r.D = this.D,
                    r.$t = e,
                    r.Lt = n,
                    r
                }
                ,
                t
            }()
              , mt = function() {
                function t() {
                    this.qt = new nt(F.D)
                }
                return t.prototype.track = function(t) {
                    var e = t.doc.key
                      , n = this.qt.get(e);
                    n ? 0 !== t.type && 3 === n.type ? this.qt = this.qt.ot(e, t) : 3 === t.type && 1 !== n.type ? this.qt = this.qt.ot(e, {
                        type: n.type,
                        doc: t.doc
                    }) : 2 === t.type && 2 === n.type ? this.qt = this.qt.ot(e, {
                        type: 2,
                        doc: t.doc
                    }) : 2 === t.type && 0 === n.type ? this.qt = this.qt.ot(e, {
                        type: 0,
                        doc: t.doc
                    }) : 1 === t.type && 0 === n.type ? this.qt = this.qt.remove(e) : 1 === t.type && 2 === n.type ? this.qt = this.qt.ot(e, {
                        type: 1,
                        doc: n.doc
                    }) : 0 === t.type && 1 === n.type ? this.qt = this.qt.ot(e, {
                        type: 2,
                        doc: t.doc
                    }) : y() : this.qt = this.qt.ot(e, t)
                }
                ,
                t.prototype.Ut = function() {
                    var t = [];
                    return this.qt.ut((function(e, n) {
                        t.push(n)
                    }
                    )),
                    t
                }
                ,
                t
            }()
              , bt = function() {
                function t(t, e, n, r, i, o, u, s) {
                    this.query = t,
                    this.docs = e,
                    this.Kt = n,
                    this.docChanges = r,
                    this.Qt = i,
                    this.fromCache = o,
                    this.Wt = u,
                    this.jt = s
                }
                return t.Gt = function(e, n, r, i) {
                    var o = [];
                    return n.forEach((function(t) {
                        o.push({
                            type: 0,
                            doc: t
                        })
                    }
                    )),
                    new t(e,n,gt.Bt(n),o,r,i,!0,!1)
                }
                ,
                Object.defineProperty(t.prototype, "hasPendingWrites", {
                    get: function() {
                        return !this.Qt.P()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.isEqual = function(t) {
                    if (!(this.fromCache === t.fromCache && this.Wt === t.Wt && this.Qt.isEqual(t.Qt) && On(this.query, t.query) && this.docs.isEqual(t.docs) && this.Kt.isEqual(t.Kt)))
                        return !1;
                    var e = this.docChanges
                      , n = t.docChanges;
                    if (e.length !== n.length)
                        return !1;
                    for (var r = 0; r < e.length; r++)
                        if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
                            return !1;
                    return !0
                }
                ,
                t
            }()
              , wt = function() {
                function t(t, e, n, r, i) {
                    this.nt = t,
                    this.zt = e,
                    this.Ht = n,
                    this.Jt = r,
                    this.Yt = i
                }
                return t.Xt = function(e, n) {
                    var r = new Map;
                    return r.set(e, It.Zt(e, n)),
                    new t(R.min(),r,yt(),at(),dt())
                }
                ,
                t
            }()
              , It = function() {
                function t(t, e, n, r, i) {
                    this.resumeToken = t,
                    this.te = e,
                    this.ee = n,
                    this.ne = r,
                    this.se = i
                }
                return t.Zt = function(e, n) {
                    return new t(T.u,n,dt(),dt(),dt())
                }
                ,
                t
            }()
              , Et = function(t, e, n, r) {
                this.ie = t,
                this.removedTargetIds = e,
                this.key = n,
                this.re = r
            }
              , _t = function(t, e) {
                this.targetId = t,
                this.oe = e
            }
              , Tt = function(t, e, n, r) {
                void 0 === n && (n = T.u),
                void 0 === r && (r = null),
                this.state = t,
                this.targetIds = e,
                this.resumeToken = n,
                this.cause = r
            }
              , Ot = function() {
                function t() {
                    this.ae = 0,
                    this.he = Dt(),
                    this.ce = T.u,
                    this.ue = !1,
                    this.le = !0
                }
                return Object.defineProperty(t.prototype, "te", {
                    get: function() {
                        return this.ue
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "resumeToken", {
                    get: function() {
                        return this.ce
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "_e", {
                    get: function() {
                        return 0 !== this.ae
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "fe", {
                    get: function() {
                        return this.le
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.de = function(t) {
                    t.o() > 0 && (this.le = !0,
                    this.ce = t)
                }
                ,
                t.prototype.we = function() {
                    var t = dt()
                      , e = dt()
                      , n = dt();
                    return this.he.forEach((function(r, i) {
                        switch (i) {
                        case 0:
                            t = t.add(r);
                            break;
                        case 2:
                            e = e.add(r);
                            break;
                        case 1:
                            n = n.add(r);
                            break;
                        default:
                            y()
                        }
                    }
                    )),
                    new It(this.ce,this.ue,t,e,n)
                }
                ,
                t.prototype.Ee = function() {
                    this.le = !1,
                    this.he = Dt()
                }
                ,
                t.prototype.Te = function(t, e) {
                    this.le = !0,
                    this.he = this.he.ot(t, e)
                }
                ,
                t.prototype.Ie = function(t) {
                    this.le = !0,
                    this.he = this.he.remove(t)
                }
                ,
                t.prototype.me = function() {
                    this.ae += 1
                }
                ,
                t.prototype.Ae = function() {
                    this.ae -= 1
                }
                ,
                t.prototype.Re = function() {
                    this.le = !0,
                    this.ue = !0
                }
                ,
                t
            }()
              , Nt = function() {
                function t(t) {
                    this.Pe = t,
                    this.ge = new Map,
                    this.Ve = at(),
                    this.ye = At(),
                    this.pe = new ot(I)
                }
                return t.prototype.be = function(t) {
                    for (var e = 0, n = t.ie; e < n.length; e++) {
                        var r = n[e];
                        t.re instanceof cn ? this.ve(r, t.re) : t.re instanceof hn && this.Se(r, t.key, t.re)
                    }
                    for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
                        var u = o[i];
                        this.Se(u, t.key, t.re)
                    }
                }
                ,
                t.prototype.De = function(t) {
                    var e = this;
                    this.Ce(t, (function(n) {
                        var r = e.Ne(n);
                        switch (t.state) {
                        case 0:
                            e.xe(n) && r.de(t.resumeToken);
                            break;
                        case 1:
                            r.Ae(),
                            r._e || r.Ee(),
                            r.de(t.resumeToken);
                            break;
                        case 2:
                            r.Ae(),
                            r._e || e.removeTarget(n);
                            break;
                        case 3:
                            e.xe(n) && (r.Re(),
                            r.de(t.resumeToken));
                            break;
                        case 4:
                            e.xe(n) && (e.Fe(n),
                            r.de(t.resumeToken));
                            break;
                        default:
                            y()
                        }
                    }
                    ))
                }
                ,
                t.prototype.Ce = function(t, e) {
                    var n = this;
                    t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.ge.forEach((function(t, r) {
                        n.xe(r) && e(r)
                    }
                    ))
                }
                ,
                t.prototype.ke = function(t) {
                    var e = t.targetId
                      , n = t.oe.count
                      , r = this.Oe(e);
                    if (r) {
                        var i = r.target;
                        if (H(i))
                            if (0 === n) {
                                var o = new F(i.path);
                                this.Se(e, o, new hn(o,R.min()))
                            } else
                                g(1 === n);
                        else
                            this.Me(e) !== n && (this.Fe(e),
                            this.pe = this.pe.add(e))
                    }
                }
                ,
                t.prototype.$e = function(t) {
                    var e = this
                      , n = new Map;
                    this.ge.forEach((function(r, i) {
                        var o = e.Oe(i);
                        if (o) {
                            if (r.te && H(o.target)) {
                                var u = new F(o.target.path);
                                null !== e.Ve.get(u) || e.Le(i, u) || e.Se(i, u, new hn(u,t))
                            }
                            r.fe && (n.set(i, r.we()),
                            r.Ee())
                        }
                    }
                    ));
                    var r = dt();
                    this.ye.forEach((function(t, n) {
                        var i = !0;
                        n.Ft((function(t) {
                            var n = e.Oe(t);
                            return !n || 2 === n.et || (i = !1,
                            !1)
                        }
                        )),
                        i && (r = r.add(t))
                    }
                    ));
                    var i = new wt(t,n,this.pe,this.Ve,r);
                    return this.Ve = at(),
                    this.ye = At(),
                    this.pe = new ot(I),
                    i
                }
                ,
                t.prototype.ve = function(t, e) {
                    if (this.xe(t)) {
                        var n = this.Le(t, e.key) ? 2 : 0;
                        this.Ne(t).Te(e.key, n),
                        this.Ve = this.Ve.ot(e.key, e),
                        this.ye = this.ye.ot(e.key, this.Be(e.key).add(t))
                    }
                }
                ,
                t.prototype.Se = function(t, e, n) {
                    if (this.xe(t)) {
                        var r = this.Ne(t);
                        this.Le(t, e) ? r.Te(e, 1) : r.Ie(e),
                        this.ye = this.ye.ot(e, this.Be(e).delete(t)),
                        n && (this.Ve = this.Ve.ot(e, n))
                    }
                }
                ,
                t.prototype.removeTarget = function(t) {
                    this.ge.delete(t)
                }
                ,
                t.prototype.Me = function(t) {
                    var e = this.Ne(t).we();
                    return this.Pe.qe(t).size + e.ee.size - e.se.size
                }
                ,
                t.prototype.me = function(t) {
                    this.Ne(t).me()
                }
                ,
                t.prototype.Ne = function(t) {
                    var e = this.ge.get(t);
                    return e || (e = new Ot,
                    this.ge.set(t, e)),
                    e
                }
                ,
                t.prototype.Be = function(t) {
                    var e = this.ye.get(t);
                    return e || (e = new ot(I),
                    this.ye = this.ye.ot(t, e)),
                    e
                }
                ,
                t.prototype.xe = function(t) {
                    var e = null !== this.Oe(t);
                    return e || l("WatchChangeAggregator", "Detected inactive target", t),
                    e
                }
                ,
                t.prototype.Oe = function(t) {
                    var e = this.ge.get(t);
                    return e && e._e ? null : this.Pe.Ue(t)
                }
                ,
                t.prototype.Fe = function(t) {
                    var e = this;
                    this.ge.set(t, new Ot),
                    this.Pe.qe(t).forEach((function(n) {
                        e.Se(t, n, null)
                    }
                    ))
                }
                ,
                t.prototype.Le = function(t, e) {
                    return this.Pe.qe(t).has(e)
                }
                ,
                t
            }();
            function At() {
                return new nt(F.D)
            }
            function Dt() {
                return new nt(F.D)
            }
            function St(t) {
                var e, n;
                return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
            }
            function jt(t) {
                var e = Ut(t.mapValue.fields.__local_write_time__.timestampValue);
                return new V(e.seconds,e.nanos)
            }
            var xt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
            function kt(t) {
                return "nullValue"in t ? 0 : "booleanValue"in t ? 1 : "integerValue"in t || "doubleValue"in t ? 2 : "timestampValue"in t ? 3 : "stringValue"in t ? 5 : "bytesValue"in t ? 6 : "referenceValue"in t ? 7 : "geoPointValue"in t ? 8 : "arrayValue"in t ? 9 : "mapValue"in t ? St(t) ? 4 : 10 : y()
            }
            function Pt(t, e) {
                var n = kt(t);
                if (n !== kt(e))
                    return !1;
                switch (n) {
                case 0:
                    return !0;
                case 1:
                    return t.booleanValue === e.booleanValue;
                case 4:
                    return jt(t).isEqual(jt(e));
                case 3:
                    return function(t, e) {
                        if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length)
                            return t.timestampValue === e.timestampValue;
                        var n = Ut(t.timestampValue)
                          , r = Ut(e.timestampValue);
                        return n.seconds === r.seconds && n.nanos === r.nanos
                    }(t, e);
                case 5:
                    return t.stringValue === e.stringValue;
                case 6:
                    return function(t, e) {
                        return qt(t.bytesValue).isEqual(qt(e.bytesValue))
                    }(t, e);
                case 7:
                    return t.referenceValue === e.referenceValue;
                case 8:
                    return function(t, e) {
                        return Mt(t.geoPointValue.latitude) === Mt(e.geoPointValue.latitude) && Mt(t.geoPointValue.longitude) === Mt(e.geoPointValue.longitude)
                    }(t, e);
                case 2:
                    return function(t, e) {
                        if ("integerValue"in t && "integerValue"in e)
                            return Mt(t.integerValue) === Mt(e.integerValue);
                        if ("doubleValue"in t && "doubleValue"in e) {
                            var n = Mt(t.doubleValue)
                              , r = Mt(e.doubleValue);
                            return n === r ? B(n) === B(r) : isNaN(n) && isNaN(r)
                        }
                        return !1
                    }(t, e);
                case 9:
                    return E(t.arrayValue.values || [], e.arrayValue.values || [], Pt);
                case 10:
                    return function(t, e) {
                        var n = t.mapValue.fields || {}
                          , r = e.mapValue.fields || {};
                        if (x(n) !== x(r))
                            return !1;
                        for (var i in n)
                            if (n.hasOwnProperty(i) && (void 0 === r[i] || !Pt(n[i], r[i])))
                                return !1;
                        return !0
                    }(t, e);
                default:
                    return y()
                }
            }
            function Lt(t, e) {
                return void 0 !== (t.values || []).find((function(t) {
                    return Pt(t, e)
                }
                ))
            }
            function Vt(t, e) {
                var n = kt(t)
                  , r = kt(e);
                if (n !== r)
                    return I(n, r);
                switch (n) {
                case 0:
                    return 0;
                case 1:
                    return I(t.booleanValue, e.booleanValue);
                case 2:
                    return function(t, e) {
                        var n = Mt(t.integerValue || t.doubleValue)
                          , r = Mt(e.integerValue || e.doubleValue);
                        return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
                    }(t, e);
                case 3:
                    return Rt(t.timestampValue, e.timestampValue);
                case 4:
                    return Rt(jt(t), jt(e));
                case 5:
                    return I(t.stringValue, e.stringValue);
                case 6:
                    return function(t, e) {
                        var n = qt(t)
                          , r = qt(e);
                        return n.h(r)
                    }(t.bytesValue, e.bytesValue);
                case 7:
                    return function(t, e) {
                        for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                            var o = I(n[i], r[i]);
                            if (0 !== o)
                                return o
                        }
                        return I(n.length, r.length)
                    }(t.referenceValue, e.referenceValue);
                case 8:
                    return function(t, e) {
                        var n = I(Mt(t.latitude), Mt(e.latitude));
                        return 0 !== n ? n : I(Mt(t.longitude), Mt(e.longitude))
                    }(t.geoPointValue, e.geoPointValue);
                case 9:
                    return function(t, e) {
                        for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                            var o = Vt(n[i], r[i]);
                            if (o)
                                return o
                        }
                        return I(n.length, r.length)
                    }(t.arrayValue, e.arrayValue);
                case 10:
                    return function(t, e) {
                        var n = t.fields || {}
                          , r = Object.keys(n)
                          , i = e.fields || {}
                          , o = Object.keys(i);
                        r.sort(),
                        o.sort();
                        for (var u = 0; u < r.length && u < o.length; ++u) {
                            var s = I(r[u], o[u]);
                            if (0 !== s)
                                return s;
                            var a = Vt(n[r[u]], i[o[u]]);
                            if (0 !== a)
                                return a
                        }
                        return I(r.length, o.length)
                    }(t.mapValue, e.mapValue);
                default:
                    throw y()
                }
            }
            function Rt(t, e) {
                if ("string" == typeof t && "string" == typeof e && t.length === e.length)
                    return I(t, e);
                var n = Ut(t)
                  , r = Ut(e)
                  , i = I(n.seconds, r.seconds);
                return 0 !== i ? i : I(n.nanos, r.nanos)
            }
            function Ct(t) {
                return function t(e) {
                    return "nullValue"in e ? "null" : "booleanValue"in e ? "" + e.booleanValue : "integerValue"in e ? "" + e.integerValue : "doubleValue"in e ? "" + e.doubleValue : "timestampValue"in e ? function(t) {
                        var e = Ut(t);
                        return "time(" + e.seconds + "," + e.nanos + ")"
                    }(e.timestampValue) : "stringValue"in e ? e.stringValue : "bytesValue"in e ? qt(e.bytesValue).toBase64() : "referenceValue"in e ? (r = e.referenceValue,
                    F.J(r).toString()) : "geoPointValue"in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue"in e ? function(e) {
                        for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++)
                            r ? r = !1 : n += ",",
                            n += t(o[i]);
                        return n + "]"
                    }(e.arrayValue) : "mapValue"in e ? function(e) {
                        for (var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                            var u = o[i];
                            r ? r = !1 : n += ",",
                            n += u + ":" + t(e.fields[u])
                        }
                        return n + "}"
                    }(e.mapValue) : y();
                    var n, r
                }(t)
            }
            function Ut(t) {
                if (g(!!t),
                "string" == typeof t) {
                    var e = 0
                      , n = xt.exec(t);
                    if (g(!!n),
                    n[1]) {
                        var r = n[1];
                        r = (r + "000000000").substr(0, 9),
                        e = Number(r)
                    }
                    var i = new Date(t);
                    return {
                        seconds: Math.floor(i.getTime() / 1e3),
                        nanos: e
                    }
                }
                return {
                    seconds: Mt(t.seconds),
                    nanos: Mt(t.nanos)
                }
            }
            function Mt(t) {
                return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0
            }
            function qt(t) {
                return "string" == typeof t ? T.fromBase64String(t) : T.fromUint8Array(t)
            }
            function Ft(t, e) {
                return {
                    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.B()
                }
            }
            function Gt(t) {
                return !!t && "integerValue"in t
            }
            function Bt(t) {
                return !!t && "arrayValue"in t
            }
            function zt(t) {
                return !!t && "nullValue"in t
            }
            function Kt(t) {
                return !!t && "doubleValue"in t && isNaN(Number(t.doubleValue))
            }
            function Wt(t) {
                return !!t && "mapValue"in t
            }
            var Qt = {
                asc: "ASCENDING",
                desc: "DESCENDING"
            }
              , Yt = {
                "<": "LESS_THAN",
                "<=": "LESS_THAN_OR_EQUAL",
                ">": "GREATER_THAN",
                ">=": "GREATER_THAN_OR_EQUAL",
                "==": "EQUAL",
                "!=": "NOT_EQUAL",
                "array-contains": "ARRAY_CONTAINS",
                in: "IN",
                "not-in": "NOT_IN",
                "array-contains-any": "ARRAY_CONTAINS_ANY"
            }
              , Ht = function(t, e) {
                this._ = t,
                this.Ke = e
            };
            function Xt(t) {
                return {
                    integerValue: "" + t
                }
            }
            function Jt(t, e) {
                if (t.Ke) {
                    if (isNaN(e))
                        return {
                            doubleValue: "NaN"
                        };
                    if (e === 1 / 0)
                        return {
                            doubleValue: "Infinity"
                        };
                    if (e === -1 / 0)
                        return {
                            doubleValue: "-Infinity"
                        }
                }
                return {
                    doubleValue: B(e) ? "-0" : e
                }
            }
            function $t(t, e) {
                return z(e) ? Xt(e) : Jt(t, e)
            }
            function Zt(t, e) {
                return t.Ke ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
                    seconds: "" + e.seconds,
                    nanos: e.nanoseconds
                }
            }
            function te(t, e) {
                return t.Ke ? e.toBase64() : e.toUint8Array()
            }
            function ee(t, e) {
                return Zt(t, e.v())
            }
            function ne(t) {
                return g(!!t),
                R.V(function(t) {
                    var e = Ut(t);
                    return new V(e.seconds,e.nanos)
                }(t))
            }
            function re(t, e) {
                return function(t) {
                    return new U(["projects", t.projectId, "databases", t.database])
                }(t).child("documents").child(e).B()
            }
            function ie(t) {
                var e = U.q(t);
                return g(Ne(e)),
                e
            }
            function oe(t, e) {
                return re(t._, e.path)
            }
            function ue(t, e) {
                var n = ie(e);
                return g(n.get(1) === t._.projectId),
                g(!n.get(3) && !t._.database || n.get(3) === t._.database),
                new F(he(n))
            }
            function se(t, e) {
                return re(t._, e)
            }
            function ae(t) {
                var e = ie(t);
                return 4 === e.length ? U.U() : he(e)
            }
            function ce(t) {
                return new U(["projects", t._.projectId, "databases", t._.database]).B()
            }
            function he(t) {
                return g(t.length > 4 && "documents" === t.get(4)),
                t.N(5)
            }
            function fe(t, e, n) {
                return {
                    name: oe(t, e),
                    fields: n.proto.mapValue.fields
                }
            }
            function le(t, e) {
                var n;
                if (e instanceof Xe)
                    n = {
                        update: fe(t, e.key, e.value)
                    };
                else if (e instanceof nn)
                    n = {
                        delete: oe(t, e.key)
                    };
                else if (e instanceof Je)
                    n = {
                        update: fe(t, e.key, e.data),
                        updateMask: Oe(e.Qe)
                    };
                else if (e instanceof Ze)
                    n = {
                        transform: {
                            document: oe(t, e.key),
                            fieldTransforms: e.fieldTransforms.map((function(t) {
                                return function(t, e) {
                                    var n = e.transform;
                                    if (n instanceof xe)
                                        return {
                                            fieldPath: e.field.B(),
                                            setToServerValue: "REQUEST_TIME"
                                        };
                                    if (n instanceof ke)
                                        return {
                                            fieldPath: e.field.B(),
                                            appendMissingElements: {
                                                values: n.elements
                                            }
                                        };
                                    if (n instanceof Le)
                                        return {
                                            fieldPath: e.field.B(),
                                            removeAllFromArray: {
                                                values: n.elements
                                            }
                                        };
                                    if (n instanceof Re)
                                        return {
                                            fieldPath: e.field.B(),
                                            increment: n.We
                                        };
                                    throw y()
                                }(0, t)
                            }
                            ))
                        }
                    };
                else {
                    if (!(e instanceof rn))
                        return y();
                    n = {
                        verify: oe(t, e.key)
                    }
                }
                return e.Ge.je || (n.currentDocument = function(t, e) {
                    return void 0 !== e.updateTime ? {
                        updateTime: ee(t, e.updateTime)
                    } : void 0 !== e.exists ? {
                        exists: e.exists
                    } : y()
                }(t, e.Ge)),
                n
            }
            function pe(t, e) {
                var n = e.currentDocument ? function(t) {
                    return void 0 !== t.updateTime ? Ge.updateTime(ne(t.updateTime)) : void 0 !== t.exists ? Ge.exists(t.exists) : Ge.ze()
                }(e.currentDocument) : Ge.ze();
                if (e.update) {
                    e.update.name;
                    var r = ue(t, e.update.name)
                      , i = new on({
                        mapValue: {
                            fields: e.update.fields
                        }
                    });
                    if (e.updateMask) {
                        var o = function(t) {
                            var e = t.fieldPaths || [];
                            return new Me(e.map((function(t) {
                                return q.G(t)
                            }
                            )))
                        }(e.updateMask);
                        return new Je(r,i,o,n)
                    }
                    return new Xe(r,i,n)
                }
                if (e.delete) {
                    var u = ue(t, e.delete);
                    return new nn(u,n)
                }
                if (e.transform) {
                    var s = ue(t, e.transform.document)
                      , a = e.transform.fieldTransforms.map((function(e) {
                        return function(t, e) {
                            var n = null;
                            if ("setToServerValue"in e)
                                g("REQUEST_TIME" === e.setToServerValue),
                                n = new xe;
                            else if ("appendMissingElements"in e) {
                                var r = e.appendMissingElements.values || [];
                                n = new ke(r)
                            } else if ("removeAllFromArray"in e) {
                                var i = e.removeAllFromArray.values || [];
                                n = new Le(i)
                            } else
                                "increment"in e ? n = new Re(t,e.increment) : y();
                            var o = q.G(e.fieldPath);
                            return new qe(o,n)
                        }(t, e)
                    }
                    ));
                    return g(!0 === n.exists),
                    new Ze(s,a)
                }
                if (e.verify) {
                    var c = ue(t, e.verify);
                    return new rn(c,n)
                }
                return y()
            }
            function de(t, e) {
                return {
                    documents: [se(t, e.path)]
                }
            }
            function ve(t, e) {
                var n = {
                    structuredQuery: {}
                }
                  , r = e.path;
                null !== e.collectionGroup ? (n.parent = se(t, r),
                n.structuredQuery.from = [{
                    collectionId: e.collectionGroup,
                    allDescendants: !0
                }]) : (n.parent = se(t, r.F()),
                n.structuredQuery.from = [{
                    collectionId: r.O()
                }]);
                var i = function(t) {
                    if (0 !== t.length) {
                        var e = t.map((function(t) {
                            return function(t) {
                                if ("==" === t.op) {
                                    if (Kt(t.value))
                                        return {
                                            unaryFilter: {
                                                field: Ie(t.field),
                                                op: "IS_NAN"
                                            }
                                        };
                                    if (zt(t.value))
                                        return {
                                            unaryFilter: {
                                                field: Ie(t.field),
                                                op: "IS_NULL"
                                            }
                                        }
                                } else if ("!=" === t.op) {
                                    if (Kt(t.value))
                                        return {
                                            unaryFilter: {
                                                field: Ie(t.field),
                                                op: "IS_NOT_NAN"
                                            }
                                        };
                                    if (zt(t.value))
                                        return {
                                            unaryFilter: {
                                                field: Ie(t.field),
                                                op: "IS_NOT_NULL"
                                            }
                                        }
                                }
                                return {
                                    fieldFilter: {
                                        field: Ie(t.field),
                                        op: we(t.op),
                                        value: t.value
                                    }
                                }
                            }(t)
                        }
                        ));
                        return 1 === e.length ? e[0] : {
                            compositeFilter: {
                                op: "AND",
                                filters: e
                            }
                        }
                    }
                }(e.filters);
                i && (n.structuredQuery.where = i);
                var o = function(t) {
                    if (0 !== t.length)
                        return t.map((function(t) {
                            return function(t) {
                                return {
                                    field: Ie(t.field),
                                    direction: be(t.dir)
                                }
                            }(t)
                        }
                        ))
                }(e.orderBy);
                o && (n.structuredQuery.orderBy = o);
                var u = function(t, e) {
                    return t.Ke || G(e) ? e : {
                        value: e
                    }
                }(t, e.limit);
                return null !== u && (n.structuredQuery.limit = u),
                e.startAt && (n.structuredQuery.startAt = ge(e.startAt)),
                e.endAt && (n.structuredQuery.endAt = ge(e.endAt)),
                n
            }
            function ye(t) {
                var e = ae(t.parent)
                  , n = t.structuredQuery
                  , r = n.from ? n.from.length : 0
                  , i = null;
                if (r > 0) {
                    g(1 === r);
                    var o = n.from[0];
                    o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId)
                }
                var u = [];
                n.where && (u = function t(e) {
                    return e ? void 0 !== e.unaryFilter ? [Te(e)] : void 0 !== e.fieldFilter ? [_e(e)] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map((function(e) {
                        return t(e)
                    }
                    )).reduce((function(t, e) {
                        return t.concat(e)
                    }
                    )) : y() : []
                }(n.where));
                var s = [];
                n.orderBy && (s = n.orderBy.map((function(t) {
                    return function(t) {
                        return new Bn(Ee(t.field),function(t) {
                            switch (t) {
                            case "ASCENDING":
                                return "asc";
                            case "DESCENDING":
                                return "desc";
                            default:
                                return
                            }
                        }(t.direction))
                    }(t)
                }
                )));
                var a = null;
                n.limit && (a = function(t) {
                    var e;
                    return G(e = "object" == typeof t ? t.value : t) ? null : e
                }(n.limit));
                var c = null;
                n.startAt && (c = me(n.startAt));
                var h = null;
                return n.endAt && (h = me(n.endAt)),
                In(pn(e, i, s, u, a, "F", c, h))
            }
            function ge(t) {
                return {
                    before: t.before,
                    values: t.position
                }
            }
            function me(t) {
                var e = !!t.before
                  , n = t.values || [];
                return new Mn(n,e)
            }
            function be(t) {
                return Qt[t]
            }
            function we(t) {
                return Yt[t]
            }
            function Ie(t) {
                return {
                    fieldPath: t.B()
                }
            }
            function Ee(t) {
                return q.G(t.fieldPath)
            }
            function _e(t) {
                return jn.create(Ee(t.fieldFilter.field), function(t) {
                    switch (t) {
                    case "EQUAL":
                        return "==";
                    case "NOT_EQUAL":
                        return "!=";
                    case "GREATER_THAN":
                        return ">";
                    case "GREATER_THAN_OR_EQUAL":
                        return ">=";
                    case "LESS_THAN":
                        return "<";
                    case "LESS_THAN_OR_EQUAL":
                        return "<=";
                    case "ARRAY_CONTAINS":
                        return "array-contains";
                    case "IN":
                        return "in";
                    case "NOT_IN":
                        return "not-in";
                    case "ARRAY_CONTAINS_ANY":
                        return "array-contains-any";
                    case "OPERATOR_UNSPECIFIED":
                    default:
                        return y()
                    }
                }(t.fieldFilter.op), t.fieldFilter.value)
            }
            function Te(t) {
                switch (t.unaryFilter.op) {
                case "IS_NAN":
                    var e = Ee(t.unaryFilter.field);
                    return jn.create(e, "==", {
                        doubleValue: NaN
                    });
                case "IS_NULL":
                    var n = Ee(t.unaryFilter.field);
                    return jn.create(n, "==", {
                        nullValue: "NULL_VALUE"
                    });
                case "IS_NOT_NAN":
                    var r = Ee(t.unaryFilter.field);
                    return jn.create(r, "!=", {
                        doubleValue: NaN
                    });
                case "IS_NOT_NULL":
                    var i = Ee(t.unaryFilter.field);
                    return jn.create(i, "!=", {
                        nullValue: "NULL_VALUE"
                    });
                case "OPERATOR_UNSPECIFIED":
                default:
                    return y()
                }
            }
            function Oe(t) {
                var e = [];
                return t.fields.forEach((function(t) {
                    return e.push(t.B())
                }
                )),
                {
                    fieldPaths: e
                }
            }
            function Ne(t) {
                return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2)
            }
            var Ae = function() {
                this.He = void 0
            };
            function De(t, e, n) {
                return t instanceof xe ? function(t, e) {
                    var n = {
                        fields: {
                            __type__: {
                                stringValue: "server_timestamp"
                            },
                            __local_write_time__: {
                                timestampValue: {
                                    seconds: t.seconds,
                                    nanos: t.nanoseconds
                                }
                            }
                        }
                    };
                    return e && (n.fields.__previous_value__ = e),
                    {
                        mapValue: n
                    }
                }(n, e) : t instanceof ke ? Pe(t, e) : t instanceof Le ? Ve(t, e) : function(t, e) {
                    var n = je(t, e)
                      , r = Ce(n) + Ce(t.We);
                    return Gt(n) && Gt(t.We) ? Xt(r) : Jt(t.serializer, r)
                }(t, e)
            }
            function Se(t, e, n) {
                return t instanceof ke ? Pe(t, e) : t instanceof Le ? Ve(t, e) : n
            }
            function je(t, e) {
                return t instanceof Re ? Gt(n = e) || function(t) {
                    return !!t && "doubleValue"in t
                }(n) ? e : {
                    integerValue: 0
                } : null;
                var n
            }
            var xe = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n
            }(Ae)
              , ke = function(t) {
                function n(e) {
                    var n = this;
                    return (n = t.call(this) || this).elements = e,
                    n
                }
                return Object(e.c)(n, t),
                n
            }(Ae);
            function Pe(t, e) {
                for (var n = Ue(e), r = function(t) {
                    n.some((function(e) {
                        return Pt(e, t)
                    }
                    )) || n.push(t)
                }, i = 0, o = t.elements; i < o.length; i++)
                    r(o[i]);
                return {
                    arrayValue: {
                        values: n
                    }
                }
            }
            var Le = function(t) {
                function n(e) {
                    var n = this;
                    return (n = t.call(this) || this).elements = e,
                    n
                }
                return Object(e.c)(n, t),
                n
            }(Ae);
            function Ve(t, e) {
                for (var n = Ue(e), r = function(t) {
                    n = n.filter((function(e) {
                        return !Pt(e, t)
                    }
                    ))
                }, i = 0, o = t.elements; i < o.length; i++)
                    r(o[i]);
                return {
                    arrayValue: {
                        values: n
                    }
                }
            }
            var Re = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this) || this).serializer = e,
                    r.We = n,
                    r
                }
                return Object(e.c)(n, t),
                n
            }(Ae);
            function Ce(t) {
                return Mt(t.integerValue || t.doubleValue)
            }
            function Ue(t) {
                return Bt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
            }
            var Me = function() {
                function t(t) {
                    this.fields = t,
                    t.sort(q.D)
                }
                return t.prototype.Je = function(t) {
                    for (var e = 0, n = this.fields; e < n.length; e++)
                        if (n[e].M(t))
                            return !0;
                    return !1
                }
                ,
                t.prototype.isEqual = function(t) {
                    return E(this.fields, t.fields, (function(t, e) {
                        return t.isEqual(e)
                    }
                    ))
                }
                ,
                t
            }()
              , qe = function(t, e) {
                this.field = t,
                this.transform = e
            }
              , Fe = function(t, e) {
                this.version = t,
                this.transformResults = e
            }
              , Ge = function() {
                function t(t, e) {
                    this.updateTime = t,
                    this.exists = e
                }
                return t.ze = function() {
                    return new t
                }
                ,
                t.exists = function(e) {
                    return new t(void 0,e)
                }
                ,
                t.updateTime = function(e) {
                    return new t(e)
                }
                ,
                Object.defineProperty(t.prototype, "je", {
                    get: function() {
                        return void 0 === this.updateTime && void 0 === this.exists
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.isEqual = function(t) {
                    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime)
                }
                ,
                t
            }();
            function Be(t, e) {
                return void 0 !== t.updateTime ? e instanceof cn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof cn
            }
            var ze = function() {};
            function Ke(t, e, n) {
                return t instanceof Xe ? function(t, e, n) {
                    return new cn(t.key,n.version,t.value,{
                        hasCommittedMutations: !0
                    })
                }(t, 0, n) : t instanceof Je ? function(t, e, n) {
                    if (!Be(t.Ge, e))
                        return new fn(t.key,n.version);
                    var r = $e(t, e);
                    return new cn(t.key,n.version,r,{
                        hasCommittedMutations: !0
                    })
                }(t, e, n) : t instanceof Ze ? function(t, e, n) {
                    if (g(null != n.transformResults),
                    !Be(t.Ge, e))
                        return new fn(t.key,n.version);
                    var r = tn(t, e)
                      , i = function(t, e, n) {
                        var r = [];
                        g(t.length === n.length);
                        for (var i = 0; i < n.length; i++) {
                            var o = t[i]
                              , u = o.transform
                              , s = null;
                            e instanceof cn && (s = e.field(o.field)),
                            r.push(Se(u, s, n[i]))
                        }
                        return r
                    }(t.fieldTransforms, e, n.transformResults)
                      , o = n.version
                      , u = en(t, r.data(), i);
                    return new cn(t.key,o,u,{
                        hasCommittedMutations: !0
                    })
                }(t, e, n) : function(t, e, n) {
                    return new hn(t.key,n.version,{
                        hasCommittedMutations: !0
                    })
                }(t, 0, n)
            }
            function We(t, e, n, r) {
                return t instanceof Xe ? function(t, e) {
                    if (!Be(t.Ge, e))
                        return e;
                    var n = He(e);
                    return new cn(t.key,n,t.value,{
                        Ye: !0
                    })
                }(t, e) : t instanceof Je ? function(t, e) {
                    if (!Be(t.Ge, e))
                        return e;
                    var n = He(e)
                      , r = $e(t, e);
                    return new cn(t.key,n,r,{
                        Ye: !0
                    })
                }(t, e) : t instanceof Ze ? function(t, e, n, r) {
                    if (!Be(t.Ge, e))
                        return e;
                    var i = tn(t, e)
                      , o = function(t, e, n, r) {
                        for (var i = [], o = 0, u = t; o < u.length; o++) {
                            var s = u[o]
                              , a = s.transform
                              , c = null;
                            n instanceof cn && (c = n.field(s.field)),
                            null === c && r instanceof cn && (c = r.field(s.field)),
                            i.push(De(a, c, e))
                        }
                        return i
                    }(t.fieldTransforms, n, e, r)
                      , u = en(t, i.data(), o);
                    return new cn(t.key,i.version,u,{
                        Ye: !0
                    })
                }(t, e, r, n) : function(t, e) {
                    return Be(t.Ge, e) ? new hn(t.key,R.min()) : e
                }(t, e)
            }
            function Qe(t, e) {
                return t instanceof Ze ? function(t, e) {
                    for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
                        var o = i[r]
                          , u = e instanceof cn ? e.field(o.field) : void 0
                          , s = je(o.transform, u || null);
                        null != s && (n = null == n ? (new un).set(o.field, s) : n.set(o.field, s))
                    }
                    return n ? n.Xe() : null
                }(t, e) : null
            }
            function Ye(t, e) {
                return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ge.isEqual(e.Ge) && (0 === t.type ? t.value.isEqual(e.value) : 1 === t.type ? t.data.isEqual(e.data) && t.Qe.isEqual(e.Qe) : 2 !== t.type || E(t.fieldTransforms, t.fieldTransforms, (function(t, e) {
                    return function(t, e) {
                        return t.field.isEqual(e.field) && function(t, e) {
                            return t instanceof ke && e instanceof ke || t instanceof Le && e instanceof Le ? E(t.elements, e.elements, Pt) : t instanceof Re && e instanceof Re ? Pt(t.We, e.We) : t instanceof xe && e instanceof xe
                        }(t.transform, e.transform)
                    }(t, e)
                }
                )))
            }
            function He(t) {
                return t instanceof cn ? t.version : R.min()
            }
            var Xe = function(t) {
                function n(e, n, r) {
                    var i = this;
                    return (i = t.call(this) || this).key = e,
                    i.value = n,
                    i.Ge = r,
                    i.type = 0,
                    i
                }
                return Object(e.c)(n, t),
                n
            }(ze)
              , Je = function(t) {
                function n(e, n, r, i) {
                    var o = this;
                    return (o = t.call(this) || this).key = e,
                    o.data = n,
                    o.Qe = r,
                    o.Ge = i,
                    o.type = 1,
                    o
                }
                return Object(e.c)(n, t),
                n
            }(ze);
            function $e(t, e) {
                return function(t, e) {
                    var n = new un(e);
                    return t.Qe.fields.forEach((function(e) {
                        if (!e.P()) {
                            var r = t.data.field(e);
                            null !== r ? n.set(e, r) : n.delete(e)
                        }
                    }
                    )),
                    n.Xe()
                }(t, e instanceof cn ? e.data() : on.empty())
            }
            var Ze = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this) || this).key = e,
                    r.fieldTransforms = n,
                    r.type = 2,
                    r.Ge = Ge.exists(!0),
                    r
                }
                return Object(e.c)(n, t),
                n
            }(ze);
            function tn(t, e) {
                return e
            }
            function en(t, e, n) {
                for (var r = new un(e), i = 0; i < t.fieldTransforms.length; i++) {
                    var o = t.fieldTransforms[i];
                    r.set(o.field, n[i])
                }
                return r.Xe()
            }
            var nn = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this) || this).key = e,
                    r.Ge = n,
                    r.type = 3,
                    r
                }
                return Object(e.c)(n, t),
                n
            }(ze)
              , rn = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this) || this).key = e,
                    r.Ge = n,
                    r.type = 4,
                    r
                }
                return Object(e.c)(n, t),
                n
            }(ze)
              , on = function() {
                function t(t) {
                    this.proto = t
                }
                return t.empty = function() {
                    return new t({
                        mapValue: {}
                    })
                }
                ,
                t.prototype.field = function(t) {
                    if (t.P())
                        return this.proto;
                    for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
                        if (!e.mapValue.fields)
                            return null;
                        if (!Wt(e = e.mapValue.fields[t.get(n)]))
                            return null
                    }
                    return (e = (e.mapValue.fields || {})[t.O()]) || null
                }
                ,
                t.prototype.isEqual = function(t) {
                    return Pt(this.proto, t.proto)
                }
                ,
                t
            }()
              , un = function() {
                function t(t) {
                    void 0 === t && (t = on.empty()),
                    this.Ze = t,
                    this.tn = new Map
                }
                return t.prototype.set = function(t, e) {
                    return this.en(t, e),
                    this
                }
                ,
                t.prototype.delete = function(t) {
                    return this.en(t, null),
                    this
                }
                ,
                t.prototype.en = function(t, e) {
                    for (var n = this.tn, r = 0; r < t.length - 1; ++r) {
                        var i = t.get(r)
                          , o = n.get(i);
                        o instanceof Map ? n = o : o && 10 === kt(o) ? (o = new Map(Object.entries(o.mapValue.fields || {})),
                        n.set(i, o),
                        n = o) : (o = new Map,
                        n.set(i, o),
                        n = o)
                    }
                    n.set(t.O(), e)
                }
                ,
                t.prototype.Xe = function() {
                    var t = this.nn(q.U(), this.tn);
                    return null != t ? new on(t) : this.Ze
                }
                ,
                t.prototype.nn = function(t, e) {
                    var n = this
                      , r = !1
                      , i = this.Ze.field(t)
                      , o = Wt(i) ? Object.assign({}, i.mapValue.fields) : {};
                    return e.forEach((function(e, i) {
                        if (e instanceof Map) {
                            var u = n.nn(t.child(i), e);
                            null != u && (o[i] = u,
                            r = !0)
                        } else
                            null !== e ? (o[i] = e,
                            r = !0) : o.hasOwnProperty(i) && (delete o[i],
                            r = !0)
                    }
                    )),
                    r ? {
                        mapValue: {
                            fields: o
                        }
                    } : null
                }
                ,
                t
            }();
            function sn(t) {
                var e = [];
                return k(t.fields || {}, (function(t, n) {
                    var r = new q([t]);
                    if (Wt(n)) {
                        var i = sn(n.mapValue).fields;
                        if (0 === i.length)
                            e.push(r);
                        else
                            for (var o = 0, u = i; o < u.length; o++) {
                                var s = u[o];
                                e.push(r.child(s))
                            }
                    } else
                        e.push(r)
                }
                )),
                new Me(e)
            }
            var an = function(t, e) {
                this.key = t,
                this.version = e
            }
              , cn = function(t) {
                function n(e, n, r, i) {
                    var o = this;
                    return (o = t.call(this, e, n) || this).sn = r,
                    o.Ye = !!i.Ye,
                    o.hasCommittedMutations = !!i.hasCommittedMutations,
                    o
                }
                return Object(e.c)(n, t),
                n.prototype.field = function(t) {
                    return this.sn.field(t)
                }
                ,
                n.prototype.data = function() {
                    return this.sn
                }
                ,
                n.prototype.rn = function() {
                    return this.sn.proto
                }
                ,
                n.prototype.isEqual = function(t) {
                    return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ye === t.Ye && this.hasCommittedMutations === t.hasCommittedMutations && this.sn.isEqual(t.sn)
                }
                ,
                n.prototype.toString = function() {
                    return "Document(" + this.key + ", " + this.version + ", " + this.sn.toString() + ", {hasLocalMutations: " + this.Ye + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})"
                }
                ,
                Object.defineProperty(n.prototype, "hasPendingWrites", {
                    get: function() {
                        return this.Ye || this.hasCommittedMutations
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                n
            }(an)
              , hn = function(t) {
                function n(e, n, r) {
                    var i = this;
                    return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations),
                    i
                }
                return Object(e.c)(n, t),
                n.prototype.toString = function() {
                    return "NoDocument(" + this.key + ", " + this.version + ")"
                }
                ,
                Object.defineProperty(n.prototype, "hasPendingWrites", {
                    get: function() {
                        return this.hasCommittedMutations
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                n.prototype.isEqual = function(t) {
                    return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                }
                ,
                n
            }(an)
              , fn = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n.prototype.toString = function() {
                    return "UnknownDocument(" + this.key + ", " + this.version + ")"
                }
                ,
                Object.defineProperty(n.prototype, "hasPendingWrites", {
                    get: function() {
                        return !0
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                n.prototype.isEqual = function(t) {
                    return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                }
                ,
                n
            }(an)
              , ln = function(t, e, n, r, i, o, u, s) {
                void 0 === e && (e = null),
                void 0 === n && (n = []),
                void 0 === r && (r = []),
                void 0 === i && (i = null),
                void 0 === o && (o = "F"),
                void 0 === u && (u = null),
                void 0 === s && (s = null),
                this.path = t,
                this.collectionGroup = e,
                this.on = n,
                this.filters = r,
                this.limit = i,
                this.an = o,
                this.startAt = u,
                this.endAt = s,
                this.hn = null,
                this.cn = null,
                this.startAt,
                this.endAt
            };
            function pn(t, e, n, r, i, o, u, s) {
                return new ln(t,e,n,r,i,o,u,s)
            }
            function dn(t) {
                return new ln(t)
            }
            function vn(t) {
                return !G(t.limit) && "F" === t.an
            }
            function yn(t) {
                return !G(t.limit) && "L" === t.an
            }
            function gn(t) {
                return t.on.length > 0 ? t.on[0].field : null
            }
            function mn(t) {
                for (var e = 0, n = t.filters; e < n.length; e++) {
                    var r = n[e];
                    if (r.un())
                        return r.field
                }
                return null
            }
            function bn(t) {
                return null !== t.collectionGroup
            }
            function wn(t) {
                var e = m(t);
                if (null === e.hn) {
                    e.hn = [];
                    var n = mn(e)
                      , r = gn(e);
                    if (null !== n && null === r)
                        n.W() || e.hn.push(new Bn(n)),
                        e.hn.push(new Bn(q.j(),"asc"));
                    else {
                        for (var i = !1, o = 0, u = e.on; o < u.length; o++) {
                            var s = u[o];
                            e.hn.push(s),
                            s.field.W() && (i = !0)
                        }
                        if (!i) {
                            var a = e.on.length > 0 ? e.on[e.on.length - 1].dir : "asc";
                            e.hn.push(new Bn(q.j(),a))
                        }
                    }
                }
                return e.hn
            }
            function In(t) {
                var e = m(t);
                if (!e.cn)
                    if ("F" === e.an)
                        e.cn = W(e.path, e.collectionGroup, wn(e), e.filters, e.limit, e.startAt, e.endAt);
                    else {
                        for (var n = [], r = 0, i = wn(e); r < i.length; r++) {
                            var o = i[r]
                              , u = "desc" === o.dir ? "asc" : "desc";
                            n.push(new Bn(o.field,u))
                        }
                        var s = e.endAt ? new Mn(e.endAt.position,!e.endAt.before) : null
                          , a = e.startAt ? new Mn(e.startAt.position,!e.startAt.before) : null;
                        e.cn = W(e.path, e.collectionGroup, n, e.filters, e.limit, s, a)
                    }
                return e.cn
            }
            function En(t, e, n) {
                return new ln(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)
            }
            function _n(t, e) {
                return new ln(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),t.limit,t.an,e,t.endAt)
            }
            function Tn(t, e) {
                return new ln(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),t.limit,t.an,t.startAt,e)
            }
            function On(t, e) {
                return Y(In(t), In(e)) && t.an === e.an
            }
            function Nn(t) {
                return Q(In(t)) + "|lt:" + t.an
            }
            function An(t) {
                return "Query(target=" + function(t) {
                    var e = t.path.B();
                    return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup),
                    t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
                        return (e = t).field.B() + " " + e.op + " " + Ct(e.value);
                        var e
                    }
                    )).join(", ") + "]"),
                    G(t.limit) || (e += ", limit: " + t.limit),
                    t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
                        return (e = t).field.B() + " (" + e.dir + ")";
                        var e
                    }
                    )).join(", ") + "]"),
                    t.startAt && (e += ", startAt: " + qn(t.startAt)),
                    t.endAt && (e += ", endAt: " + qn(t.endAt)),
                    "Target(" + e + ")"
                }(In(t)) + "; limitType=" + t.an + ")"
            }
            function Dn(t, e) {
                return function(t, e) {
                    var n = e.key.path;
                    return null !== t.collectionGroup ? e.key.Y(t.collectionGroup) && t.path.M(n) : F.X(t.path) ? t.path.isEqual(n) : t.path.$(n)
                }(t, e) && function(t, e) {
                    for (var n = 0, r = t.on; n < r.length; n++) {
                        var i = r[n];
                        if (!i.field.W() && null === e.field(i.field))
                            return !1
                    }
                    return !0
                }(t, e) && function(t, e) {
                    for (var n = 0, r = t.filters; n < r.length; n++)
                        if (!r[n].matches(e))
                            return !1;
                    return !0
                }(t, e) && function(t, e) {
                    return !(t.startAt && !Fn(t.startAt, wn(t), e) || t.endAt && Fn(t.endAt, wn(t), e))
                }(t, e)
            }
            function Sn(t) {
                return function(e, n) {
                    for (var r = !1, i = 0, o = wn(t); i < o.length; i++) {
                        var u = o[i]
                          , s = zn(u, e, n);
                        if (0 !== s)
                            return s;
                        r = r || u.field.W()
                    }
                    return 0
                }
            }
            var jn = function(t) {
                function n(e, n, r) {
                    var i = this;
                    return (i = t.call(this) || this).field = e,
                    i.op = n,
                    i.value = r,
                    i
                }
                return Object(e.c)(n, t),
                n.create = function(t, e, r) {
                    return t.W() ? "in" === e || "not-in" === e ? this.ln(t, e, r) : new xn(t,e,r) : "array-contains" === e ? new Vn(t,r) : "in" === e ? new Rn(t,r) : "not-in" === e ? new Cn(t,r) : "array-contains-any" === e ? new Un(t,r) : new n(t,e,r)
                }
                ,
                n.ln = function(t, e, n) {
                    return "in" === e ? new kn(t,n) : new Pn(t,n)
                }
                ,
                n.prototype.matches = function(t) {
                    var e = t.field(this.field);
                    return "!=" === this.op ? null !== e && this._n(Vt(e, this.value)) : null !== e && kt(this.value) === kt(e) && this._n(Vt(e, this.value))
                }
                ,
                n.prototype._n = function(t) {
                    switch (this.op) {
                    case "<":
                        return t < 0;
                    case "<=":
                        return t <= 0;
                    case "==":
                        return 0 === t;
                    case "!=":
                        return 0 !== t;
                    case ">":
                        return t > 0;
                    case ">=":
                        return t >= 0;
                    default:
                        return y()
                    }
                }
                ,
                n.prototype.un = function() {
                    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
                }
                ,
                n
            }((function() {}
            ))
              , xn = function(t) {
                function n(e, n, r) {
                    var i = this;
                    return (i = t.call(this, e, n, r) || this).key = F.J(r.referenceValue),
                    i
                }
                return Object(e.c)(n, t),
                n.prototype.matches = function(t) {
                    var e = F.D(t.key, this.key);
                    return this._n(e)
                }
                ,
                n
            }(jn)
              , kn = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this, e, "in", n) || this).keys = Ln("in", n),
                    r
                }
                return Object(e.c)(n, t),
                n.prototype.matches = function(t) {
                    return this.keys.some((function(e) {
                        return e.isEqual(t.key)
                    }
                    ))
                }
                ,
                n
            }(jn)
              , Pn = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this, e, "not-in", n) || this).keys = Ln("not-in", n),
                    r
                }
                return Object(e.c)(n, t),
                n.prototype.matches = function(t) {
                    return !this.keys.some((function(e) {
                        return e.isEqual(t.key)
                    }
                    ))
                }
                ,
                n
            }(jn);
            function Ln(t, e) {
                var n;
                return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
                    return F.J(t.referenceValue)
                }
                ))
            }
            var Vn = function(t) {
                function n(e, n) {
                    return t.call(this, e, "array-contains", n) || this
                }
                return Object(e.c)(n, t),
                n.prototype.matches = function(t) {
                    var e = t.field(this.field);
                    return Bt(e) && Lt(e.arrayValue, this.value)
                }
                ,
                n
            }(jn)
              , Rn = function(t) {
                function n(e, n) {
                    return t.call(this, e, "in", n) || this
                }
                return Object(e.c)(n, t),
                n.prototype.matches = function(t) {
                    var e = t.field(this.field);
                    return null !== e && Lt(this.value.arrayValue, e)
                }
                ,
                n
            }(jn)
              , Cn = function(t) {
                function n(e, n) {
                    return t.call(this, e, "not-in", n) || this
                }
                return Object(e.c)(n, t),
                n.prototype.matches = function(t) {
                    if (Lt(this.value.arrayValue, {
                        nullValue: "NULL_VALUE"
                    }))
                        return !1;
                    var e = t.field(this.field);
                    return null !== e && !Lt(this.value.arrayValue, e)
                }
                ,
                n
            }(jn)
              , Un = function(t) {
                function n(e, n) {
                    return t.call(this, e, "array-contains-any", n) || this
                }
                return Object(e.c)(n, t),
                n.prototype.matches = function(t) {
                    var e = this
                      , n = t.field(this.field);
                    return !(!Bt(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
                        return Lt(e.value.arrayValue, t)
                    }
                    ))
                }
                ,
                n
            }(jn)
              , Mn = function(t, e) {
                this.position = t,
                this.before = e
            };
            function qn(t) {
                return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
                    return Ct(t)
                }
                )).join(",")
            }
            function Fn(t, e, n) {
                for (var r = 0, i = 0; i < t.position.length; i++) {
                    var o = e[i]
                      , u = t.position[i];
                    if (r = o.field.W() ? F.D(F.J(u.referenceValue), n.key) : Vt(u, n.field(o.field)),
                    "desc" === o.dir && (r *= -1),
                    0 !== r)
                        break
                }
                return t.before ? r <= 0 : r < 0
            }
            function Gn(t, e) {
                if (null === t)
                    return null === e;
                if (null === e)
                    return !1;
                if (t.before !== e.before || t.position.length !== e.position.length)
                    return !1;
                for (var n = 0; n < t.position.length; n++)
                    if (!Pt(t.position[n], e.position[n]))
                        return !1;
                return !0
            }
            var Bn = function(t, e) {
                void 0 === e && (e = "asc"),
                this.field = t,
                this.dir = e
            };
            function zn(t, e, n) {
                var r = t.field.W() ? F.D(e.key, n.key) : function(t, e, n) {
                    var r = e.field(t)
                      , i = n.field(t);
                    return null !== r && null !== i ? Vt(r, i) : y()
                }(t.field, e, n);
                switch (t.dir) {
                case "asc":
                    return r;
                case "desc":
                    return -1 * r;
                default:
                    return y()
                }
            }
            function Kn(t, e) {
                return t.dir === e.dir && t.field.isEqual(e.field)
            }
            var Wn = function() {
                var t = this;
                this.promise = new Promise((function(e, n) {
                    t.resolve = e,
                    t.reject = n
                }
                ))
            }
              , Qn = function() {
                function t(t, e, n, r, i) {
                    void 0 === n && (n = 1e3),
                    void 0 === r && (r = 1.5),
                    void 0 === i && (i = 6e4),
                    this.fn = t,
                    this.dn = e,
                    this.wn = n,
                    this.En = r,
                    this.Tn = i,
                    this.In = 0,
                    this.mn = null,
                    this.An = Date.now(),
                    this.reset()
                }
                return t.prototype.reset = function() {
                    this.In = 0
                }
                ,
                t.prototype.Rn = function() {
                    this.In = this.Tn
                }
                ,
                t.prototype.Pn = function(t) {
                    var e = this;
                    this.cancel();
                    var n = Math.floor(this.In + this.gn())
                      , r = Math.max(0, Date.now() - this.An)
                      , i = Math.max(0, n - r);
                    i > 0 && l("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.In + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"),
                    this.mn = this.fn.Vn(this.dn, i, (function() {
                        return e.An = Date.now(),
                        t()
                    }
                    )),
                    this.In *= this.En,
                    this.In < this.wn && (this.In = this.wn),
                    this.In > this.Tn && (this.In = this.Tn)
                }
                ,
                t.prototype.yn = function() {
                    null !== this.mn && (this.mn.pn(),
                    this.mn = null)
                }
                ,
                t.prototype.cancel = function() {
                    null !== this.mn && (this.mn.cancel(),
                    this.mn = null)
                }
                ,
                t.prototype.gn = function() {
                    return (Math.random() - .5) * this.In
                }
                ,
                t
            }()
              , Yn = function() {
                function t(t) {
                    var e = this;
                    this.bn = null,
                    this.vn = null,
                    this.result = void 0,
                    this.error = void 0,
                    this.Sn = !1,
                    this.Dn = !1,
                    t((function(t) {
                        e.Sn = !0,
                        e.result = t,
                        e.bn && e.bn(t)
                    }
                    ), (function(t) {
                        e.Sn = !0,
                        e.error = t,
                        e.vn && e.vn(t)
                    }
                    ))
                }
                return t.prototype.catch = function(t) {
                    return this.next(void 0, t)
                }
                ,
                t.prototype.next = function(e, n) {
                    var r = this;
                    return this.Dn && y(),
                    this.Dn = !0,
                    this.Sn ? this.error ? this.Cn(n, this.error) : this.Nn(e, this.result) : new t((function(t, i) {
                        r.bn = function(n) {
                            r.Nn(e, n).next(t, i)
                        }
                        ,
                        r.vn = function(e) {
                            r.Cn(n, e).next(t, i)
                        }
                    }
                    ))
                }
                ,
                t.prototype.xn = function() {
                    var t = this;
                    return new Promise((function(e, n) {
                        t.next(e, n)
                    }
                    ))
                }
                ,
                t.prototype.Fn = function(e) {
                    try {
                        var n = e();
                        return n instanceof t ? n : t.resolve(n)
                    } catch (e) {
                        return t.reject(e)
                    }
                }
                ,
                t.prototype.Nn = function(e, n) {
                    return e ? this.Fn((function() {
                        return e(n)
                    }
                    )) : t.resolve(n)
                }
                ,
                t.prototype.Cn = function(e, n) {
                    return e ? this.Fn((function() {
                        return e(n)
                    }
                    )) : t.reject(n)
                }
                ,
                t.resolve = function(e) {
                    return new t((function(t, n) {
                        t(e)
                    }
                    ))
                }
                ,
                t.reject = function(e) {
                    return new t((function(t, n) {
                        n(e)
                    }
                    ))
                }
                ,
                t.kn = function(e) {
                    return new t((function(t, n) {
                        var r = 0
                          , i = 0
                          , o = !1;
                        e.forEach((function(e) {
                            ++r,
                            e.next((function() {
                                ++i,
                                o && i === r && t()
                            }
                            ), (function(t) {
                                return n(t)
                            }
                            ))
                        }
                        )),
                        o = !0,
                        i === r && t()
                    }
                    ))
                }
                ,
                t.On = function(e) {
                    for (var n = t.resolve(!1), r = function(e) {
                        n = n.next((function(n) {
                            return n ? t.resolve(n) : e()
                        }
                        ))
                    }, i = 0, o = e; i < o.length; i++)
                        r(o[i]);
                    return n
                }
                ,
                t.forEach = function(t, e) {
                    var n = this
                      , r = [];
                    return t.forEach((function(t, i) {
                        r.push(e.call(n, t, i))
                    }
                    )),
                    this.kn(r)
                }
                ,
                t
            }()
              , Hn = function() {
                function n(t, e, r) {
                    this.name = t,
                    this.version = e,
                    this.Mn = r,
                    12.2 === n.$n(Object(o.m)()) && p("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
                }
                return n.delete = function(t) {
                    return l("SimpleDb", "Removing database:", t),
                    er(window.indexedDB.deleteDatabase(t)).xn()
                }
                ,
                n.Ln = function() {
                    if ("undefined" == typeof indexedDB)
                        return !1;
                    if (n.Bn())
                        return !0;
                    var t = Object(o.m)()
                      , e = n.$n(t)
                      , r = 0 < e && e < 10
                      , i = n.qn(t)
                      , u = 0 < i && i < 4.5;
                    return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || r || u)
                }
                ,
                n.Bn = function() {
                    var e;
                    return void 0 !== t && "YES" === (null === (e = {}) || void 0 === e ? void 0 : e.Un)
                }
                ,
                n.Kn = function(t, e) {
                    return t.store(e)
                }
                ,
                n.$n = function(t) {
                    var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i)
                      , n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }
                ,
                n.qn = function(t) {
                    var e = t.match(/Android ([\d.]+)/i)
                      , n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }
                ,
                n.prototype.Qn = function(t) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var n, r = this;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return this.db ? [3, 2] : (l("SimpleDb", "Opening database:", this.name),
                                n = this,
                                [4, new Promise((function(e, n) {
                                    var i = indexedDB.open(r.name, r.version);
                                    i.onsuccess = function(t) {
                                        var n = t.target.result;
                                        e(n)
                                    }
                                    ,
                                    i.onblocked = function() {
                                        n(new Jn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                                    }
                                    ,
                                    i.onerror = function(e) {
                                        var r = e.target.error;
                                        "VersionError" === r.name ? n(new c(a.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new Jn(t,r))
                                    }
                                    ,
                                    i.onupgradeneeded = function(t) {
                                        l("SimpleDb", 'Database "' + r.name + '" requires upgrade from version:', t.oldVersion);
                                        var e = t.target.result;
                                        r.Mn.createOrUpgrade(e, i.transaction, t.oldVersion, r.version).next((function() {
                                            l("SimpleDb", "Database upgrade to version " + r.version + " complete")
                                        }
                                        ))
                                    }
                                }
                                ))]);
                            case 1:
                                n.db = e.sent(),
                                e.label = 2;
                            case 2:
                                return [2, (this.Wn && (this.db.onversionchange = function(t) {
                                    return r.Wn(t)
                                }
                                ),
                                this.db)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.jn = function(t) {
                    this.Wn = t,
                    this.db && (this.db.onversionchange = function(e) {
                        return t(e)
                    }
                    )
                }
                ,
                n.prototype.runTransaction = function(t, n, r, i) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var o, u, s, a, c;
                        return Object(e.d)(this, (function(h) {
                            switch (h.label) {
                            case 0:
                                o = "readonly" === n,
                                u = 0,
                                s = function() {
                                    var n, s, c, h, f;
                                    return Object(e.d)(this, (function(e) {
                                        switch (e.label) {
                                        case 0:
                                            ++u,
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 4, , 5]),
                                            [4, a.Qn(t)];
                                        case 2:
                                            return a.db = e.sent(),
                                            n = Zn.open(a.db, t, o ? "readonly" : "readwrite", r),
                                            s = i(n).catch((function(t) {
                                                return n.abort(t),
                                                Yn.reject(t)
                                            }
                                            )).xn(),
                                            c = {},
                                            s.catch((function() {}
                                            )),
                                            [4, n.Gn];
                                        case 3:
                                            return [2, (c.value = (e.sent(),
                                            s),
                                            c)];
                                        case 4:
                                            return h = e.sent(),
                                            f = "FirebaseError" !== h.name && u < 3,
                                            l("SimpleDb", "Transaction failed with error:", h.message, "Retrying:", f),
                                            a.close(),
                                            f ? [3, 5] : [2, {
                                                value: Promise.reject(h)
                                            }];
                                        case 5:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ,
                                a = this,
                                h.label = 1;
                            case 1:
                                return [5, s()];
                            case 2:
                                if ("object" == typeof (c = h.sent()))
                                    return [2, c.value];
                                h.label = 3;
                            case 3:
                                return [3, 1];
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.close = function() {
                    this.db && this.db.close(),
                    this.db = void 0
                }
                ,
                n
            }()
              , Xn = function() {
                function t(t) {
                    this.zn = t,
                    this.Hn = !1,
                    this.Jn = null
                }
                return Object.defineProperty(t.prototype, "Sn", {
                    get: function() {
                        return this.Hn
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "Yn", {
                    get: function() {
                        return this.Jn
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "cursor", {
                    set: function(t) {
                        this.zn = t
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.done = function() {
                    this.Hn = !0
                }
                ,
                t.prototype.Xn = function(t) {
                    this.Jn = t
                }
                ,
                t.prototype.delete = function() {
                    return er(this.zn.delete())
                }
                ,
                t
            }()
              , Jn = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this, a.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) || this).name = "IndexedDbTransactionError",
                    r
                }
                return Object(e.c)(n, t),
                n
            }(c);
            function $n(t) {
                return "IndexedDbTransactionError" === t.name
            }
            var Zn = function() {
                function t(t, e) {
                    var n = this;
                    this.action = t,
                    this.transaction = e,
                    this.aborted = !1,
                    this.Zn = new Wn,
                    this.transaction.oncomplete = function() {
                        n.Zn.resolve()
                    }
                    ,
                    this.transaction.onabort = function() {
                        e.error ? n.Zn.reject(new Jn(t,e.error)) : n.Zn.resolve()
                    }
                    ,
                    this.transaction.onerror = function(e) {
                        var r = rr(e.target.error);
                        n.Zn.reject(new Jn(t,r))
                    }
                }
                return t.open = function(e, n, r, i) {
                    try {
                        return new t(n,e.transaction(i, r))
                    } catch (e) {
                        throw new Jn(n,e)
                    }
                }
                ,
                Object.defineProperty(t.prototype, "Gn", {
                    get: function() {
                        return this.Zn.promise
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.abort = function(t) {
                    t && this.Zn.reject(t),
                    this.aborted || (l("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"),
                    this.aborted = !0,
                    this.transaction.abort())
                }
                ,
                t.prototype.store = function(t) {
                    var e = this.transaction.objectStore(t);
                    return new tr(e)
                }
                ,
                t
            }()
              , tr = function() {
                function t(t) {
                    this.store = t
                }
                return t.prototype.put = function(t, e) {
                    var n;
                    return void 0 !== e ? (l("SimpleDb", "PUT", this.store.name, t, e),
                    n = this.store.put(e, t)) : (l("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
                    n = this.store.put(t)),
                    er(n)
                }
                ,
                t.prototype.add = function(t) {
                    return l("SimpleDb", "ADD", this.store.name, t, t),
                    er(this.store.add(t))
                }
                ,
                t.prototype.get = function(t) {
                    var e = this;
                    return er(this.store.get(t)).next((function(n) {
                        return void 0 === n && (n = null),
                        l("SimpleDb", "GET", e.store.name, t, n),
                        n
                    }
                    ))
                }
                ,
                t.prototype.delete = function(t) {
                    return l("SimpleDb", "DELETE", this.store.name, t),
                    er(this.store.delete(t))
                }
                ,
                t.prototype.count = function() {
                    return l("SimpleDb", "COUNT", this.store.name),
                    er(this.store.count())
                }
                ,
                t.prototype.ts = function(t, e) {
                    var n = this.cursor(this.options(t, e))
                      , r = [];
                    return this.es(n, (function(t, e) {
                        r.push(e)
                    }
                    )).next((function() {
                        return r
                    }
                    ))
                }
                ,
                t.prototype.ns = function(t, e) {
                    l("SimpleDb", "DELETE ALL", this.store.name);
                    var n = this.options(t, e);
                    n.ss = !1;
                    var r = this.cursor(n);
                    return this.es(r, (function(t, e, n) {
                        return n.delete()
                    }
                    ))
                }
                ,
                t.prototype.rs = function(t, e) {
                    var n;
                    e ? n = t : (n = {},
                    e = t);
                    var r = this.cursor(n);
                    return this.es(r, e)
                }
                ,
                t.prototype.os = function(t) {
                    var e = this.cursor({});
                    return new Yn((function(n, r) {
                        e.onerror = function(t) {
                            var e = rr(t.target.error);
                            r(e)
                        }
                        ,
                        e.onsuccess = function(e) {
                            var r = e.target.result;
                            r ? t(r.primaryKey, r.value).next((function(t) {
                                t ? r.continue() : n()
                            }
                            )) : n()
                        }
                    }
                    ))
                }
                ,
                t.prototype.es = function(t, e) {
                    var n = [];
                    return new Yn((function(r, i) {
                        t.onerror = function(t) {
                            i(t.target.error)
                        }
                        ,
                        t.onsuccess = function(t) {
                            var i = t.target.result;
                            if (i) {
                                var o = new Xn(i)
                                  , u = e(i.primaryKey, i.value, o);
                                if (u instanceof Yn) {
                                    var s = u.catch((function(t) {
                                        return o.done(),
                                        Yn.reject(t)
                                    }
                                    ));
                                    n.push(s)
                                }
                                o.Sn ? r() : null === o.Yn ? i.continue() : i.continue(o.Yn)
                            } else
                                r()
                        }
                    }
                    )).next((function() {
                        return Yn.kn(n)
                    }
                    ))
                }
                ,
                t.prototype.options = function(t, e) {
                    var n = void 0;
                    return void 0 !== t && ("string" == typeof t ? n = t : e = t),
                    {
                        index: n,
                        range: e
                    }
                }
                ,
                t.prototype.cursor = function(t) {
                    var e = "next";
                    if (t.reverse && (e = "prev"),
                    t.index) {
                        var n = this.store.index(t.index);
                        return t.ss ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
                    }
                    return this.store.openCursor(t.range, e)
                }
                ,
                t
            }();
            function er(t) {
                return new Yn((function(e, n) {
                    t.onsuccess = function(t) {
                        var n = t.target.result;
                        e(n)
                    }
                    ,
                    t.onerror = function(t) {
                        var e = rr(t.target.error);
                        n(e)
                    }
                }
                ))
            }
            var nr = !1;
            function rr(t) {
                var e = Hn.$n(Object(o.m)());
                if (e >= 12.2 && e < 13) {
                    var n = "An internal error was encountered in the Indexed Database server";
                    if (t.message.indexOf(n) >= 0) {
                        var r = new c("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
                        return nr || (nr = !0,
                        setTimeout((function() {
                            throw r
                        }
                        ), 0)),
                        r
                    }
                }
                return t
            }
            function ir() {
                return "undefined" != typeof window ? window : null
            }
            function or() {
                return "undefined" != typeof document ? document : null
            }
            var ur = function() {
                function t(t, e, n, r, i) {
                    this.hs = t,
                    this.dn = e,
                    this.cs = n,
                    this.op = r,
                    this.us = i,
                    this.ls = new Wn,
                    this.then = this.ls.promise.then.bind(this.ls.promise),
                    this.ls.promise.catch((function(t) {}
                    ))
                }
                return t._s = function(e, n, r, i, o) {
                    var u = new t(e,n,Date.now() + r,i,o);
                    return u.start(r),
                    u
                }
                ,
                t.prototype.start = function(t) {
                    var e = this;
                    this.fs = setTimeout((function() {
                        return e.ds()
                    }
                    ), t)
                }
                ,
                t.prototype.pn = function() {
                    return this.ds()
                }
                ,
                t.prototype.cancel = function(t) {
                    null !== this.fs && (this.clearTimeout(),
                    this.ls.reject(new c(a.CANCELLED,"Operation cancelled" + (t ? ": " + t : ""))))
                }
                ,
                t.prototype.ds = function() {
                    var t = this;
                    this.hs.ws((function() {
                        return null !== t.fs ? (t.clearTimeout(),
                        t.op().then((function(e) {
                            return t.ls.resolve(e)
                        }
                        ))) : Promise.resolve()
                    }
                    ))
                }
                ,
                t.prototype.clearTimeout = function() {
                    null !== this.fs && (this.us(this),
                    clearTimeout(this.fs),
                    this.fs = null)
                }
                ,
                t
            }()
              , sr = function() {
                function t() {
                    var t = this;
                    this.Es = Promise.resolve(),
                    this.Ts = [],
                    this.Is = !1,
                    this.As = [],
                    this.Rs = null,
                    this.Ps = !1,
                    this.gs = [],
                    this.Vs = new Qn(this,"async_queue_retry"),
                    this.ys = function() {
                        var e = or();
                        e && l("AsyncQueue", "Visibility state changed to  ", e.visibilityState),
                        t.Vs.yn()
                    }
                    ;
                    var e = or();
                    e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.ys)
                }
                return Object.defineProperty(t.prototype, "ps", {
                    get: function() {
                        return this.Is
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.ws = function(t) {
                    this.enqueue(t)
                }
                ,
                t.prototype.bs = function(t) {
                    this.vs(),
                    this.Ss(t)
                }
                ,
                t.prototype.Ds = function() {
                    if (!this.Is) {
                        this.Is = !0;
                        var t = or();
                        t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.ys)
                    }
                }
                ,
                t.prototype.enqueue = function(t) {
                    return this.vs(),
                    this.Is ? new Promise((function(t) {}
                    )) : this.Ss(t)
                }
                ,
                t.prototype.Cs = function(t) {
                    var e = this;
                    this.ws((function() {
                        return e.Ts.push(t),
                        e.Ns()
                    }
                    ))
                }
                ,
                t.prototype.Ns = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var t, n = this;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                if (0 === this.Ts.length)
                                    return [3, 5];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, this.Ts[0]()];
                            case 2:
                                return e.sent(),
                                this.Ts.shift(),
                                this.Vs.reset(),
                                [3, 4];
                            case 3:
                                if (!$n(t = e.sent()))
                                    throw t;
                                return l("AsyncQueue", "Operation failed with retryable error: " + t),
                                [3, 4];
                            case 4:
                                this.Ts.length > 0 && this.Vs.Pn((function() {
                                    return n.Ns()
                                }
                                )),
                                e.label = 5;
                            case 5:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ss = function(t) {
                    var e = this
                      , n = this.Es.then((function() {
                        return e.Ps = !0,
                        t().catch((function(t) {
                            throw e.Rs = t,
                            e.Ps = !1,
                            p("INTERNAL UNHANDLED ERROR: ", function(t) {
                                var e = t.message || "";
                                return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack),
                                e
                            }(t)),
                            t
                        }
                        )).then((function(t) {
                            return e.Ps = !1,
                            t
                        }
                        ))
                    }
                    ));
                    return this.Es = n,
                    n
                }
                ,
                t.prototype.Vn = function(t, e, n) {
                    var r = this;
                    this.vs(),
                    this.gs.indexOf(t) > -1 && (e = 0);
                    var i = ur._s(this, t, e, n, (function(t) {
                        return r.xs(t)
                    }
                    ));
                    return this.As.push(i),
                    i
                }
                ,
                t.prototype.vs = function() {
                    this.Rs && y()
                }
                ,
                t.prototype.Fs = function() {}
                ,
                t.prototype.ks = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var t;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, t = this.Es];
                            case 1:
                                e.sent(),
                                e.label = 2;
                            case 2:
                                if (t !== this.Es)
                                    return [3, 0];
                                e.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Os = function(t) {
                    for (var e = 0, n = this.As; e < n.length; e++)
                        if (n[e].dn === t)
                            return !0;
                    return !1
                }
                ,
                t.prototype.Ms = function(t) {
                    var e = this;
                    return this.ks().then((function() {
                        e.As.sort((function(t, e) {
                            return t.cs - e.cs
                        }
                        ));
                        for (var n = 0, r = e.As; n < r.length; n++) {
                            var i = r[n];
                            if (i.pn(),
                            "all" !== t && i.dn === t)
                                break
                        }
                        return e.ks()
                    }
                    ))
                }
                ,
                t.prototype.$s = function(t) {
                    this.gs.push(t)
                }
                ,
                t.prototype.xs = function(t) {
                    var e = this.As.indexOf(t);
                    this.As.splice(e, 1)
                }
                ,
                t
            }();
            function ar(t, e) {
                if (p("AsyncQueue", e + ": " + t),
                $n(t))
                    return new c(a.UNAVAILABLE,e + ": " + t);
                throw t
            }
            var cr = function() {
                this.Ls = void 0,
                this.listeners = []
            }
              , hr = function() {
                this.Bs = new L((function(t) {
                    return Nn(t)
                }
                ),On),
                this.onlineState = "Unknown",
                this.qs = new Set
            };
            function fr(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i, o, u, s, a, c;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            if (r = m(t),
                            i = n.query,
                            o = !1,
                            (u = r.Bs.get(i)) || (o = !0,
                            u = new cr),
                            !o)
                                return [3, 4];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]),
                            s = u,
                            [4, r.Us(i)];
                        case 2:
                            return s.Ls = e.sent(),
                            [3, 4];
                        case 3:
                            return a = e.sent(),
                            c = ar(a, "Initialization of query '" + An(n.query) + "' failed"),
                            [2, void n.onError(c)];
                        case 4:
                            return r.Bs.set(i, u),
                            u.listeners.push(n),
                            n.Ks(r.onlineState),
                            u.Ls && n.Qs(u.Ls) && vr(r),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            function lr(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i, o, u, s;
                    return Object(e.d)(this, (function(e) {
                        return r = m(t),
                        i = n.query,
                        o = !1,
                        (u = r.Bs.get(i)) && (s = u.listeners.indexOf(n)) >= 0 && (u.listeners.splice(s, 1),
                        o = 0 === u.listeners.length),
                        o ? [2, (r.Bs.delete(i),
                        r.Ws(i))] : [2]
                    }
                    ))
                }
                ))
            }
            function pr(t, e) {
                for (var n = m(t), r = !1, i = 0, o = e; i < o.length; i++) {
                    var u = o[i]
                      , s = u.query
                      , a = n.Bs.get(s);
                    if (a) {
                        for (var c = 0, h = a.listeners; c < h.length; c++)
                            h[c].Qs(u) && (r = !0);
                        a.Ls = u
                    }
                }
                r && vr(n)
            }
            function dr(t, e, n) {
                var r = m(t)
                  , i = r.Bs.get(e);
                if (i)
                    for (var o = 0, u = i.listeners; o < u.length; o++)
                        u[o].onError(n);
                r.Bs.delete(e)
            }
            function vr(t) {
                t.qs.forEach((function(t) {
                    t.next()
                }
                ))
            }
            var yr = function() {
                function t(t, e, n) {
                    this.query = t,
                    this.js = e,
                    this.Gs = !1,
                    this.zs = null,
                    this.onlineState = "Unknown",
                    this.options = n || {}
                }
                return t.prototype.Qs = function(t) {
                    if (!this.options.includeMetadataChanges) {
                        for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                            var i = r[n];
                            3 !== i.type && e.push(i)
                        }
                        t = new bt(t.query,t.docs,t.Kt,e,t.Qt,t.fromCache,t.Wt,!0)
                    }
                    var o = !1;
                    return this.Gs ? this.Hs(t) && (this.js.next(t),
                    o = !0) : this.Js(t, this.onlineState) && (this.Ys(t),
                    o = !0),
                    this.zs = t,
                    o
                }
                ,
                t.prototype.onError = function(t) {
                    this.js.error(t)
                }
                ,
                t.prototype.Ks = function(t) {
                    this.onlineState = t;
                    var e = !1;
                    return this.zs && !this.Gs && this.Js(this.zs, t) && (this.Ys(this.zs),
                    e = !0),
                    e
                }
                ,
                t.prototype.Js = function(t, e) {
                    if (!t.fromCache)
                        return !0;
                    var n = "Offline" !== e;
                    return !(this.options.Xs && n || t.docs.P() && "Offline" !== e)
                }
                ,
                t.prototype.Hs = function(t) {
                    if (t.docChanges.length > 0)
                        return !0;
                    var e = this.zs && this.zs.hasPendingWrites !== t.hasPendingWrites;
                    return !(!t.Wt && !e) && !0 === this.options.includeMetadataChanges
                }
                ,
                t.prototype.Ys = function(t) {
                    t = bt.Gt(t.query, t.docs, t.Qt, t.fromCache),
                    this.Gs = !0,
                    this.js.next(t)
                }
                ,
                t
            }()
              , gr = function() {
                function t(t) {
                    this.uid = t
                }
                return t.prototype.Zs = function() {
                    return null != this.uid
                }
                ,
                t.prototype.ti = function() {
                    return this.Zs() ? "uid:" + this.uid : "anonymous-user"
                }
                ,
                t.prototype.isEqual = function(t) {
                    return t.uid === this.uid
                }
                ,
                t
            }();
            gr.UNAUTHENTICATED = new gr(null),
            gr.ei = new gr("google-credentials-uid"),
            gr.ni = new gr("first-party-uid");
            var mr = function() {
                function t(t, e) {
                    var n = this;
                    this.previousValue = t,
                    e && (e.si = function(t) {
                        return n.ii(t)
                    }
                    ,
                    this.ri = function(t) {
                        return e.oi(t)
                    }
                    )
                }
                return t.prototype.ii = function(t) {
                    return this.previousValue = Math.max(t, this.previousValue),
                    this.previousValue
                }
                ,
                t.prototype.next = function() {
                    var t = ++this.previousValue;
                    return this.ri && this.ri(t),
                    t
                }
                ,
                t
            }();
            function br(t, e) {
                return "firestore_clients_" + t + "_" + e
            }
            function wr(t, e, n) {
                var r = "firestore_mutations_" + t + "_" + n;
                return e.Zs() && (r += "_" + e.uid),
                r
            }
            function Ir(t, e) {
                return "firestore_targets_" + t + "_" + e
            }
            mr.ai = -1;
            var Er = function() {
                function t(t, e, n, r) {
                    this.user = t,
                    this.batchId = e,
                    this.state = n,
                    this.error = r
                }
                return t.hi = function(e, n, r) {
                    var i = JSON.parse(r)
                      , o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error)
                      , u = void 0;
                    return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (u = new c(i.error.code,i.error.message)),
                    o ? new t(e,n,i.state,u) : (p("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r),
                    null)
                }
                ,
                t.prototype.ci = function() {
                    var t = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (t.error = {
                        code: this.error.code,
                        message: this.error.message
                    }),
                    JSON.stringify(t)
                }
                ,
                t
            }()
              , _r = function() {
                function t(t, e, n) {
                    this.targetId = t,
                    this.state = e,
                    this.error = n
                }
                return t.hi = function(e, n) {
                    var r = JSON.parse(n)
                      , i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error)
                      , o = void 0;
                    return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new c(r.error.code,r.error.message)),
                    i ? new t(e,r.state,o) : (p("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n),
                    null)
                }
                ,
                t.prototype.ci = function() {
                    var t = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (t.error = {
                        code: this.error.code,
                        message: this.error.message
                    }),
                    JSON.stringify(t)
                }
                ,
                t
            }()
              , Tr = function() {
                function t(t, e) {
                    this.clientId = t,
                    this.activeTargetIds = e
                }
                return t.hi = function(e, n) {
                    for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = yt(), u = 0; i && u < r.activeTargetIds.length; ++u)
                        i = z(r.activeTargetIds[u]),
                        o = o.add(r.activeTargetIds[u]);
                    return i ? new t(e,o) : (p("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n),
                    null)
                }
                ,
                t
            }()
              , Or = function() {
                function t(t, e) {
                    this.clientId = t,
                    this.onlineState = e
                }
                return t.hi = function(e) {
                    var n = JSON.parse(e);
                    return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId,n.onlineState) : (p("SharedClientState", "Failed to parse online state: " + e),
                    null)
                }
                ,
                t
            }()
              , Nr = function() {
                function t() {
                    this.activeTargetIds = yt()
                }
                return t.prototype.ui = function(t) {
                    this.activeTargetIds = this.activeTargetIds.add(t)
                }
                ,
                t.prototype.li = function(t) {
                    this.activeTargetIds = this.activeTargetIds.delete(t)
                }
                ,
                t.prototype.ci = function() {
                    var t = {
                        activeTargetIds: this.activeTargetIds.L(),
                        updateTimeMs: Date.now()
                    };
                    return JSON.stringify(t)
                }
                ,
                t
            }()
              , Ar = function() {
                function t(t, e, n, r, i) {
                    this.window = t,
                    this.fn = e,
                    this.persistenceKey = n,
                    this._i = r,
                    this.fi = null,
                    this.di = null,
                    this.si = null,
                    this.wi = this.Ei.bind(this),
                    this.Ti = new nt(I),
                    this.Ii = !1,
                    this.mi = [];
                    var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    this.storage = this.window.localStorage,
                    this.currentUser = i,
                    this.Ai = br(this.persistenceKey, this._i),
                    this.Ri = function(t) {
                        return "firestore_sequence_number_" + t
                    }(this.persistenceKey),
                    this.Ti = this.Ti.ot(this._i, new Nr),
                    this.Pi = new RegExp("^firestore_clients_" + o + "_([^_]*)$"),
                    this.gi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"),
                    this.Vi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"),
                    this.yi = function(t) {
                        return "firestore_online_state_" + t
                    }(this.persistenceKey),
                    this.window.addEventListener("storage", this.wi)
                }
                return t.Ln = function(t) {
                    return !(!t || !t.localStorage)
                }
                ,
                t.prototype.start = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var t, n, r, i, o, u, s, a, c, h, f, l = this;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fi.pi()];
                            case 1:
                                for (t = e.sent(),
                                n = 0,
                                r = t; n < r.length; n++)
                                    (i = r[n]) !== this._i && (o = this.getItem(br(this.persistenceKey, i))) && (u = Tr.hi(i, o)) && (this.Ti = this.Ti.ot(u.clientId, u));
                                for (this.bi(),
                                (s = this.storage.getItem(this.yi)) && (a = this.vi(s)) && this.Si(a),
                                c = 0,
                                h = this.mi; c < h.length; c++)
                                    f = h[c],
                                    this.Ei(f);
                                return this.mi = [],
                                this.window.addEventListener("unload", (function() {
                                    return l.Di()
                                }
                                )),
                                this.Ii = !0,
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.oi = function(t) {
                    this.setItem(this.Ri, JSON.stringify(t))
                }
                ,
                t.prototype.Ci = function() {
                    return this.Ni(this.Ti)
                }
                ,
                t.prototype.xi = function(t) {
                    var e = !1;
                    return this.Ti.forEach((function(n, r) {
                        r.activeTargetIds.has(t) && (e = !0)
                    }
                    )),
                    e
                }
                ,
                t.prototype.Fi = function(t) {
                    this.ki(t, "pending")
                }
                ,
                t.prototype.Oi = function(t, e, n) {
                    this.ki(t, e, n),
                    this.Mi(t)
                }
                ,
                t.prototype.$i = function(t) {
                    var e = "not-current";
                    if (this.xi(t)) {
                        var n = this.storage.getItem(Ir(this.persistenceKey, t));
                        if (n) {
                            var r = _r.hi(t, n);
                            r && (e = r.state)
                        }
                    }
                    return this.Li.ui(t),
                    this.bi(),
                    e
                }
                ,
                t.prototype.Bi = function(t) {
                    this.Li.li(t),
                    this.bi()
                }
                ,
                t.prototype.qi = function(t) {
                    return this.Li.activeTargetIds.has(t)
                }
                ,
                t.prototype.Ui = function(t) {
                    this.removeItem(Ir(this.persistenceKey, t))
                }
                ,
                t.prototype.Ki = function(t, e, n) {
                    this.Qi(t, e, n)
                }
                ,
                t.prototype.Wi = function(t, e, n) {
                    var r = this;
                    e.forEach((function(t) {
                        r.Mi(t)
                    }
                    )),
                    this.currentUser = t,
                    n.forEach((function(t) {
                        r.Fi(t)
                    }
                    ))
                }
                ,
                t.prototype.ji = function(t) {
                    this.Gi(t)
                }
                ,
                t.prototype.Di = function() {
                    this.Ii && (this.window.removeEventListener("storage", this.wi),
                    this.removeItem(this.Ai),
                    this.Ii = !1)
                }
                ,
                t.prototype.getItem = function(t) {
                    var e = this.storage.getItem(t);
                    return l("SharedClientState", "READ", t, e),
                    e
                }
                ,
                t.prototype.setItem = function(t, e) {
                    l("SharedClientState", "SET", t, e),
                    this.storage.setItem(t, e)
                }
                ,
                t.prototype.removeItem = function(t) {
                    l("SharedClientState", "REMOVE", t),
                    this.storage.removeItem(t)
                }
                ,
                t.prototype.Ei = function(t) {
                    var n = this
                      , r = t;
                    if (r.storageArea === this.storage) {
                        if (l("SharedClientState", "EVENT", r.key, r.newValue),
                        r.key === this.Ai)
                            return void p("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                        this.fn.Cs((function() {
                            return Object(e.b)(n, void 0, void 0, (function() {
                                var t, n, i, o, u, s;
                                return Object(e.d)(this, (function(e) {
                                    if (this.Ii) {
                                        if (null !== r.key)
                                            if (this.Pi.test(r.key)) {
                                                if (null == r.newValue)
                                                    return t = this.zi(r.key),
                                                    [2, this.Hi(t, null)];
                                                if (n = this.Ji(r.key, r.newValue))
                                                    return [2, this.Hi(n.clientId, n)]
                                            } else if (this.gi.test(r.key)) {
                                                if (null !== r.newValue && (i = this.Yi(r.key, r.newValue)))
                                                    return [2, this.Xi(i)]
                                            } else if (this.Vi.test(r.key)) {
                                                if (null !== r.newValue && (o = this.Zi(r.key, r.newValue)))
                                                    return [2, this.tr(o)]
                                            } else if (r.key === this.yi) {
                                                if (null !== r.newValue && (u = this.vi(r.newValue)))
                                                    return [2, this.Si(u)]
                                            } else
                                                r.key === this.Ri && (s = function(t) {
                                                    var e = mr.ai;
                                                    if (null != t)
                                                        try {
                                                            var n = JSON.parse(t);
                                                            g("number" == typeof n),
                                                            e = n
                                                        } catch (t) {
                                                            p("SharedClientState", "Failed to read sequence number from WebStorage", t)
                                                        }
                                                    return e
                                                }(r.newValue)) !== mr.ai && this.si(s)
                                    } else
                                        this.mi.push(r);
                                    return [2]
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                }
                ,
                Object.defineProperty(t.prototype, "Li", {
                    get: function() {
                        return this.Ti.get(this._i)
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.bi = function() {
                    this.setItem(this.Ai, this.Li.ci())
                }
                ,
                t.prototype.ki = function(t, e, n) {
                    var r = new Er(this.currentUser,t,e,n)
                      , i = wr(this.persistenceKey, this.currentUser, t);
                    this.setItem(i, r.ci())
                }
                ,
                t.prototype.Mi = function(t) {
                    var e = wr(this.persistenceKey, this.currentUser, t);
                    this.removeItem(e)
                }
                ,
                t.prototype.Gi = function(t) {
                    var e = {
                        clientId: this._i,
                        onlineState: t
                    };
                    this.storage.setItem(this.yi, JSON.stringify(e))
                }
                ,
                t.prototype.Qi = function(t, e, n) {
                    var r = Ir(this.persistenceKey, t)
                      , i = new _r(t,e,n);
                    this.setItem(r, i.ci())
                }
                ,
                t.prototype.zi = function(t) {
                    var e = this.Pi.exec(t);
                    return e ? e[1] : null
                }
                ,
                t.prototype.Ji = function(t, e) {
                    var n = this.zi(t);
                    return Tr.hi(n, e)
                }
                ,
                t.prototype.Yi = function(t, e) {
                    var n = this.gi.exec(t)
                      , r = Number(n[1])
                      , i = void 0 !== n[2] ? n[2] : null;
                    return Er.hi(new gr(i), r, e)
                }
                ,
                t.prototype.Zi = function(t, e) {
                    var n = this.Vi.exec(t)
                      , r = Number(n[1]);
                    return _r.hi(r, e)
                }
                ,
                t.prototype.vi = function(t) {
                    return Or.hi(t)
                }
                ,
                t.prototype.Xi = function(t) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(e) {
                            return t.user.uid === this.currentUser.uid ? [2, this.fi.er(t.batchId, t.state, t.error)] : (l("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid),
                            [2])
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.tr = function(t) {
                    return this.fi.nr(t.targetId, t.state, t.error)
                }
                ,
                t.prototype.Hi = function(t, e) {
                    var n = this
                      , r = e ? this.Ti.ot(t, e) : this.Ti.remove(t)
                      , i = this.Ni(this.Ti)
                      , o = this.Ni(r)
                      , u = []
                      , s = [];
                    return o.forEach((function(t) {
                        i.has(t) || u.push(t)
                    }
                    )),
                    i.forEach((function(t) {
                        o.has(t) || s.push(t)
                    }
                    )),
                    this.fi.sr(u, s).then((function() {
                        n.Ti = r
                    }
                    ))
                }
                ,
                t.prototype.Si = function(t) {
                    this.Ti.get(t.clientId) && this.di(t.onlineState)
                }
                ,
                t.prototype.Ni = function(t) {
                    var e = yt();
                    return t.forEach((function(t, n) {
                        e = e.Ot(n.activeTargetIds)
                    }
                    )),
                    e
                }
                ,
                t
            }()
              , Dr = function() {
                function t() {
                    this.ir = new Nr,
                    this.rr = {},
                    this.di = null,
                    this.si = null
                }
                return t.prototype.Fi = function(t) {}
                ,
                t.prototype.Oi = function(t, e, n) {}
                ,
                t.prototype.$i = function(t) {
                    return this.ir.ui(t),
                    this.rr[t] || "not-current"
                }
                ,
                t.prototype.Ki = function(t, e, n) {
                    this.rr[t] = e
                }
                ,
                t.prototype.Bi = function(t) {
                    this.ir.li(t)
                }
                ,
                t.prototype.qi = function(t) {
                    return this.ir.activeTargetIds.has(t)
                }
                ,
                t.prototype.Ui = function(t) {
                    delete this.rr[t]
                }
                ,
                t.prototype.Ci = function() {
                    return this.ir.activeTargetIds
                }
                ,
                t.prototype.xi = function(t) {
                    return this.ir.activeTargetIds.has(t)
                }
                ,
                t.prototype.start = function() {
                    return this.ir = new Nr,
                    Promise.resolve()
                }
                ,
                t.prototype.Wi = function(t, e, n) {}
                ,
                t.prototype.ji = function(t) {}
                ,
                t.prototype.Di = function() {}
                ,
                t.prototype.oi = function(t) {}
                ,
                t
            }()
              , Sr = function() {
                function t(t, e, n, r) {
                    this.batchId = t,
                    this.ar = e,
                    this.baseMutations = n,
                    this.mutations = r
                }
                return t.prototype.hr = function(t, e, n) {
                    for (var r = n.cr, i = 0; i < this.mutations.length; i++) {
                        var o = this.mutations[i];
                        o.key.isEqual(t) && (e = Ke(o, e, r[i]))
                    }
                    return e
                }
                ,
                t.prototype.ur = function(t, e) {
                    for (var n = 0, r = this.baseMutations; n < r.length; n++) {
                        var i = r[n];
                        i.key.isEqual(t) && (e = We(i, e, e, this.ar))
                    }
                    for (var o = e, u = 0, s = this.mutations; u < s.length; u++) {
                        var a = s[u];
                        a.key.isEqual(t) && (e = We(a, e, o, this.ar))
                    }
                    return e
                }
                ,
                t.prototype.lr = function(t) {
                    var e = this
                      , n = t;
                    return this.mutations.forEach((function(r) {
                        var i = e.ur(r.key, t.get(r.key));
                        i && (n = n.ot(r.key, i))
                    }
                    )),
                    n
                }
                ,
                t.prototype.keys = function() {
                    return this.mutations.reduce((function(t, e) {
                        return t.add(e.key)
                    }
                    ), dt())
                }
                ,
                t.prototype.isEqual = function(t) {
                    return this.batchId === t.batchId && E(this.mutations, t.mutations, (function(t, e) {
                        return Ye(t, e)
                    }
                    )) && E(this.baseMutations, t.baseMutations, (function(t, e) {
                        return Ye(t, e)
                    }
                    ))
                }
                ,
                t
            }()
              , jr = function() {
                function t(t, e, n, r) {
                    this.batch = t,
                    this._r = e,
                    this.cr = n,
                    this.dr = r
                }
                return t.from = function(e, n, r) {
                    g(e.mutations.length === r.length);
                    for (var i = lt, o = e.mutations, u = 0; u < o.length; u++)
                        i = i.ot(o[u].key, r[u].version);
                    return new t(e,n,r,i)
                }
                ,
                t
            }()
              , xr = function() {
                function t() {
                    this.wr = new L((function(t) {
                        return t.toString()
                    }
                    ),(function(t, e) {
                        return t.isEqual(e)
                    }
                    )),
                    this.Er = !1
                }
                return Object.defineProperty(t.prototype, "readTime", {
                    get: function() {
                        return this.Tr
                    },
                    set: function(t) {
                        this.Tr = t
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.Ir = function(t, e) {
                    this.mr(),
                    this.readTime = e,
                    this.wr.set(t.key, t)
                }
                ,
                t.prototype.Ar = function(t, e) {
                    this.mr(),
                    e && (this.readTime = e),
                    this.wr.set(t, null)
                }
                ,
                t.prototype.Rr = function(t, e) {
                    this.mr();
                    var n = this.wr.get(e);
                    return void 0 !== n ? Yn.resolve(n) : this.Pr(t, e)
                }
                ,
                t.prototype.getEntries = function(t, e) {
                    return this.gr(t, e)
                }
                ,
                t.prototype.apply = function(t) {
                    return this.mr(),
                    this.Er = !0,
                    this.Vr(t)
                }
                ,
                t.prototype.mr = function() {}
                ,
                t
            }()
              , kr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."
              , Pr = function() {
                function t() {
                    this.yr = []
                }
                return t.prototype.pr = function(t) {
                    this.yr.push(t)
                }
                ,
                t.prototype.br = function() {
                    this.yr.forEach((function(t) {
                        return t()
                    }
                    ))
                }
                ,
                t
            }()
              , Lr = function() {
                function t(t, e, n) {
                    this.vr = t,
                    this.Sr = e,
                    this.Dr = n
                }
                return t.prototype.Cr = function(t, e) {
                    var n = this;
                    return this.Sr.Nr(t, e).next((function(r) {
                        return n.Fr(t, e, r)
                    }
                    ))
                }
                ,
                t.prototype.Fr = function(t, e, n) {
                    return this.vr.Rr(t, e).next((function(t) {
                        for (var r = 0, i = n; r < i.length; r++)
                            t = i[r].ur(e, t);
                        return t
                    }
                    ))
                }
                ,
                t.prototype.kr = function(t, e, n) {
                    var r = ct();
                    return e.forEach((function(t, e) {
                        for (var i = 0, o = n; i < o.length; i++)
                            e = o[i].ur(t, e);
                        r = r.ot(t, e)
                    }
                    )),
                    r
                }
                ,
                t.prototype.Or = function(t, e) {
                    var n = this;
                    return this.vr.getEntries(t, e).next((function(e) {
                        return n.Mr(t, e)
                    }
                    ))
                }
                ,
                t.prototype.Mr = function(t, e) {
                    var n = this;
                    return this.Sr.$r(t, e).next((function(r) {
                        var i = n.kr(t, e, r)
                          , o = at();
                        return i.forEach((function(t, e) {
                            e || (e = new hn(t,R.min())),
                            o = o.ot(t, e)
                        }
                        )),
                        o
                    }
                    ))
                }
                ,
                t.prototype.Lr = function(t, e, n) {
                    return function(t) {
                        return F.X(t.path) && null === t.collectionGroup && 0 === t.filters.length
                    }(e) ? this.Br(t, e.path) : bn(e) ? this.qr(t, e, n) : this.Ur(t, e, n)
                }
                ,
                t.prototype.Br = function(t, e) {
                    return this.Cr(t, new F(e)).next((function(t) {
                        var e = ft();
                        return t instanceof cn && (e = e.ot(t.key, t)),
                        e
                    }
                    ))
                }
                ,
                t.prototype.qr = function(t, e, n) {
                    var r = this
                      , i = e.collectionGroup
                      , o = ft();
                    return this.Dr.Kr(t, i).next((function(u) {
                        return Yn.forEach(u, (function(u) {
                            var s = function(t, e) {
                                return new ln(e,null,t.on.slice(),t.filters.slice(),t.limit,t.an,t.startAt,t.endAt)
                            }(e, u.child(i));
                            return r.Ur(t, s, n).next((function(t) {
                                t.forEach((function(t, e) {
                                    o = o.ot(t, e)
                                }
                                ))
                            }
                            ))
                        }
                        )).next((function() {
                            return o
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ur = function(t, e, n) {
                    var r, i, o = this;
                    return this.vr.Lr(t, e, n).next((function(n) {
                        return r = n,
                        o.Sr.Qr(t, e)
                    }
                    )).next((function(e) {
                        return i = e,
                        o.Wr(t, i, r).next((function(t) {
                            r = t;
                            for (var e = 0, n = i; e < n.length; e++)
                                for (var o = n[e], u = 0, s = o.mutations; u < s.length; u++) {
                                    var a = s[u]
                                      , c = a.key
                                      , h = r.get(c)
                                      , f = We(a, h, h, o.ar);
                                    r = f instanceof cn ? r.ot(c, f) : r.remove(c)
                                }
                        }
                        ))
                    }
                    )).next((function() {
                        return r.forEach((function(t, n) {
                            Dn(e, n) || (r = r.remove(t))
                        }
                        )),
                        r
                    }
                    ))
                }
                ,
                t.prototype.Wr = function(t, e, n) {
                    for (var r = dt(), i = 0, o = e; i < o.length; i++)
                        for (var u = 0, s = o[i].mutations; u < s.length; u++) {
                            var a = s[u];
                            a instanceof Je && null === n.get(a.key) && (r = r.add(a.key))
                        }
                    var c = n;
                    return this.vr.getEntries(t, r).next((function(t) {
                        return t.forEach((function(t, e) {
                            null !== e && e instanceof cn && (c = c.ot(t, e))
                        }
                        )),
                        c
                    }
                    ))
                }
                ,
                t
            }()
              , Vr = function() {
                function t(t, e, n, r) {
                    this.targetId = t,
                    this.fromCache = e,
                    this.jr = n,
                    this.Gr = r
                }
                return t.zr = function(e, n) {
                    for (var r = dt(), i = dt(), o = 0, u = n.docChanges; o < u.length; o++) {
                        var s = u[o];
                        switch (s.type) {
                        case 0:
                            r = r.add(s.doc.key);
                            break;
                        case 1:
                            i = i.add(s.doc.key)
                        }
                    }
                    return new t(e,n.fromCache,r,i)
                }
                ,
                t
            }();
            function Rr(t, e) {
                var n = t[0]
                  , r = t[1]
                  , i = e[0]
                  , o = e[1]
                  , u = I(n, i);
                return 0 === u ? I(r, o) : u
            }
            var Cr = function() {
                function t(t) {
                    this.Hr = t,
                    this.buffer = new ot(Rr),
                    this.Jr = 0
                }
                return t.prototype.Yr = function() {
                    return ++this.Jr
                }
                ,
                t.prototype.Xr = function(t) {
                    var e = [t, this.Yr()];
                    if (this.buffer.size < this.Hr)
                        this.buffer = this.buffer.add(e);
                    else {
                        var n = this.buffer.last();
                        Rr(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
                    }
                }
                ,
                Object.defineProperty(t.prototype, "maxValue", {
                    get: function() {
                        return this.buffer.last()[0]
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t
            }()
              , Ur = {
                Zr: !1,
                eo: 0,
                no: 0,
                so: 0
            }
              , Mr = function() {
                function t(t, e, n) {
                    this.io = t,
                    this.ro = e,
                    this.oo = n
                }
                return t.ao = function(e) {
                    return new t(e,t.ho,t.co)
                }
                ,
                t
            }();
            Mr.uo = -1,
            Mr.lo = 1048576,
            Mr._o = 41943040,
            Mr.ho = 10,
            Mr.co = 1e3,
            Mr.fo = new Mr(Mr._o,Mr.ho,Mr.co),
            Mr.do = new Mr(Mr.uo,0,0);
            var qr = function() {
                function t(t, e) {
                    this.wo = t,
                    this.hs = e,
                    this.Eo = !1,
                    this.To = null
                }
                return t.prototype.start = function(t) {
                    this.wo.params.io !== Mr.uo && this.Io(t)
                }
                ,
                t.prototype.stop = function() {
                    this.To && (this.To.cancel(),
                    this.To = null)
                }
                ,
                Object.defineProperty(t.prototype, "Ii", {
                    get: function() {
                        return null !== this.To
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.Io = function(t) {
                    var n = this
                      , r = this.Eo ? 3e5 : 6e4;
                    l("LruGarbageCollector", "Garbage collection scheduled in " + r + "ms"),
                    this.To = this.hs.Vn("lru_garbage_collection", r, (function() {
                        return Object(e.b)(n, void 0, void 0, (function() {
                            var n;
                            return Object(e.d)(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    this.To = null,
                                    this.Eo = !0,
                                    e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, , 7]),
                                    [4, t.mo(this.wo)];
                                case 2:
                                    return e.sent(),
                                    [3, 7];
                                case 3:
                                    return $n(n = e.sent()) ? (l("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n),
                                    [3, 6]) : [3, 4];
                                case 4:
                                    return [4, oo(n)];
                                case 5:
                                    e.sent(),
                                    e.label = 6;
                                case 6:
                                    return [3, 7];
                                case 7:
                                    return [4, this.Io(t)];
                                case 8:
                                    return e.sent(),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }()
              , Fr = function() {
                function t(t, e) {
                    this.Ao = t,
                    this.params = e
                }
                return t.prototype.Ro = function(t, e) {
                    return this.Ao.Po(t).next((function(t) {
                        return Math.floor(e / 100 * t)
                    }
                    ))
                }
                ,
                t.prototype.Vo = function(t, e) {
                    var n = this;
                    if (0 === e)
                        return Yn.resolve(mr.ai);
                    var r = new Cr(e);
                    return this.Ao.Ce(t, (function(t) {
                        return r.Xr(t.sequenceNumber)
                    }
                    )).next((function() {
                        return n.Ao.yo(t, (function(t) {
                            return r.Xr(t)
                        }
                        ))
                    }
                    )).next((function() {
                        return r.maxValue
                    }
                    ))
                }
                ,
                t.prototype.po = function(t, e, n) {
                    return this.Ao.po(t, e, n)
                }
                ,
                t.prototype.bo = function(t, e) {
                    return this.Ao.bo(t, e)
                }
                ,
                t.prototype.vo = function(t, e) {
                    var n = this;
                    return this.params.io === Mr.uo ? (l("LruGarbageCollector", "Garbage collection skipped; disabled"),
                    Yn.resolve(Ur)) : this.So(t).next((function(r) {
                        return r < n.params.io ? (l("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.io),
                        Ur) : n.Do(t, e)
                    }
                    ))
                }
                ,
                t.prototype.So = function(t) {
                    return this.Ao.So(t)
                }
                ,
                t.prototype.Do = function(t, e) {
                    var n, r, o, u, s, a, c, h = this, p = Date.now();
                    return this.Ro(t, this.params.ro).next((function(e) {
                        return e > h.params.oo ? (l("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.oo + " from " + e),
                        r = h.params.oo) : r = e,
                        u = Date.now(),
                        h.Vo(t, r)
                    }
                    )).next((function(r) {
                        return n = r,
                        s = Date.now(),
                        h.po(t, n, e)
                    }
                    )).next((function(e) {
                        return o = e,
                        a = Date.now(),
                        h.bo(t, n)
                    }
                    )).next((function(t) {
                        return c = Date.now(),
                        f() <= i.a.DEBUG && l("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (u - p) + "ms\n\tDetermined least recently used " + r + " in " + (s - u) + "ms\n\tRemoved " + o + " targets in " + (a - s) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - p) + "ms"),
                        Yn.resolve({
                            Zr: !0,
                            eo: r,
                            no: o,
                            so: t
                        })
                    }
                    ))
                }
                ,
                t
            }();
            function Gr(t) {
                for (var e = "", n = 0; n < t.length; n++)
                    e.length > 0 && (e = zr(e)),
                    e = Br(t.get(n), e);
                return zr(e)
            }
            function Br(t, e) {
                for (var n = e, r = t.length, i = 0; i < r; i++) {
                    var o = t.charAt(i);
                    switch (o) {
                    case "\0":
                        n += "";
                        break;
                    case "":
                        n += "";
                        break;
                    default:
                        n += o
                    }
                }
                return n
            }
            function zr(t) {
                return t + ""
            }
            function Kr(t) {
                var e = t.length;
                if (g(e >= 2),
                2 === e)
                    return g("" === t.charAt(0) && "" === t.charAt(1)),
                    U.U();
                for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
                    var u = t.indexOf("", o);
                    switch ((u < 0 || u > n) && y(),
                    t.charAt(u + 1)) {
                    case "":
                        var s = t.substring(o, u)
                          , a = void 0;
                        0 === i.length ? a = s : (a = i += s,
                        i = ""),
                        r.push(a);
                        break;
                    case "":
                        i += t.substring(o, u),
                        i += "\0";
                        break;
                    case "":
                        i += t.substring(o, u + 1);
                        break;
                    default:
                        y()
                    }
                    o = u + 2
                }
                return new U(r)
            }
            var Wr = function(t) {
                this.Co = t
            };
            function Qr(t, e) {
                if (e.document)
                    return function(t, e, n) {
                        var r = ue(t, e.name)
                          , i = ne(e.updateTime)
                          , o = new on({
                            mapValue: {
                                fields: e.fields
                            }
                        });
                        return new cn(r,i,o,{
                            hasCommittedMutations: !!n
                        })
                    }(t.Co, e.document, !!e.hasCommittedMutations);
                if (e.noDocument) {
                    var n = F.Z(e.noDocument.path)
                      , r = $r(e.noDocument.readTime);
                    return new hn(n,r,{
                        hasCommittedMutations: !!e.hasCommittedMutations
                    })
                }
                if (e.unknownDocument) {
                    var i = F.Z(e.unknownDocument.path)
                      , o = $r(e.unknownDocument.version);
                    return new fn(i,o)
                }
                return y()
            }
            function Yr(t, e, n) {
                var r = Hr(n)
                  , i = e.key.path.F().L();
                if (e instanceof cn) {
                    var o = function(t, e) {
                        return {
                            name: oe(t, e.key),
                            fields: e.rn().mapValue.fields,
                            updateTime: Zt(t, e.version.v())
                        }
                    }(t.Co, e)
                      , u = e.hasCommittedMutations;
                    return new Ti(null,null,o,u,r,i)
                }
                if (e instanceof hn) {
                    var s = e.key.path.L()
                      , a = Jr(e.version)
                      , c = e.hasCommittedMutations;
                    return new Ti(null,new Ei(s,a),null,c,r,i)
                }
                if (e instanceof fn) {
                    var h = e.key.path.L()
                      , f = Jr(e.version);
                    return new Ti(new _i(h,f),null,null,!0,r,i)
                }
                return y()
            }
            function Hr(t) {
                var e = t.v();
                return [e.seconds, e.nanoseconds]
            }
            function Xr(t) {
                var e = new V(t[0],t[1]);
                return R.V(e)
            }
            function Jr(t) {
                var e = t.v();
                return new gi(e.seconds,e.nanoseconds)
            }
            function $r(t) {
                var e = new V(t.seconds,t.nanoseconds);
                return R.V(e)
            }
            function Zr(t, e) {
                var n = (e.baseMutations || []).map((function(e) {
                    return pe(t.Co, e)
                }
                ))
                  , r = e.mutations.map((function(e) {
                    return pe(t.Co, e)
                }
                ))
                  , i = V.fromMillis(e.localWriteTimeMs);
                return new Sr(e.batchId,i,n,r)
            }
            function ti(t) {
                var e, n, r = $r(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? $r(t.lastLimboFreeSnapshotVersion) : R.min();
                return void 0 !== t.query.documents ? (g(1 === (n = t.query).documents.length),
                e = In(dn(ae(n.documents[0])))) : e = ye(t.query),
                new $(e,t.targetId,0,t.lastListenSequenceNumber,r,i,T.fromBase64String(t.resumeToken))
            }
            function ei(t, e) {
                var n, r = Jr(e.nt), i = Jr(e.lastLimboFreeSnapshotVersion);
                n = H(e.target) ? de(t.Co, e.target) : ve(t.Co, e.target);
                var o = e.resumeToken.toBase64();
                return new Ni(e.targetId,Q(e.target),r,o,e.sequenceNumber,i,n)
            }
            var ni = function() {
                function t(t, e, n, r) {
                    this.userId = t,
                    this.serializer = e,
                    this.Dr = n,
                    this.No = r,
                    this.xo = {}
                }
                return t.Fo = function(e, n, r, i) {
                    return g("" !== e.uid),
                    new t(e.Zs() ? e.uid : "",n,r,i)
                }
                ,
                t.prototype.ko = function(t) {
                    var e = !0
                      , n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                    return oi(t).rs({
                        index: wi.userMutationsIndex,
                        range: n
                    }, (function(t, n, r) {
                        e = !1,
                        r.done()
                    }
                    )).next((function() {
                        return e
                    }
                    ))
                }
                ,
                t.prototype.Oo = function(t, e, n, r) {
                    var i = this
                      , o = ui(t)
                      , u = oi(t);
                    return u.add({}).next((function(s) {
                        g("number" == typeof s);
                        for (var a = new Sr(s,e,n,r), c = function(t, e, n) {
                            var r = n.baseMutations.map((function(e) {
                                return le(t.Co, e)
                            }
                            ))
                              , i = n.mutations.map((function(e) {
                                return le(t.Co, e)
                            }
                            ));
                            return new wi(e,n.batchId,n.ar.toMillis(),r,i)
                        }(i.serializer, i.userId, a), h = [], f = new ot((function(t, e) {
                            return I(t.B(), e.B())
                        }
                        )), l = 0, p = r; l < p.length; l++) {
                            var d = p[l]
                              , v = Ii.key(i.userId, d.key.path, s);
                            f = f.add(d.key.path.F()),
                            h.push(u.put(c)),
                            h.push(o.put(v, Ii.PLACEHOLDER))
                        }
                        return f.forEach((function(e) {
                            h.push(i.Dr.Mo(t, e))
                        }
                        )),
                        t.pr((function() {
                            i.xo[s] = a.keys()
                        }
                        )),
                        Yn.kn(h).next((function() {
                            return a
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.$o = function(t, e) {
                    var n = this;
                    return oi(t).get(e).next((function(t) {
                        return t ? (g(t.userId === n.userId),
                        Zr(n.serializer, t)) : null
                    }
                    ))
                }
                ,
                t.prototype.Lo = function(t, e) {
                    var n = this;
                    return this.xo[e] ? Yn.resolve(this.xo[e]) : this.$o(t, e).next((function(t) {
                        if (t) {
                            var r = t.keys();
                            return n.xo[e] = r,
                            r
                        }
                        return null
                    }
                    ))
                }
                ,
                t.prototype.Bo = function(t, e) {
                    var n = this
                      , r = e + 1
                      , i = IDBKeyRange.lowerBound([this.userId, r])
                      , o = null;
                    return oi(t).rs({
                        index: wi.userMutationsIndex,
                        range: i
                    }, (function(t, e, i) {
                        e.userId === n.userId && (g(e.batchId >= r),
                        o = Zr(n.serializer, e)),
                        i.done()
                    }
                    )).next((function() {
                        return o
                    }
                    ))
                }
                ,
                t.prototype.qo = function(t) {
                    var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY])
                      , n = -1;
                    return oi(t).rs({
                        index: wi.userMutationsIndex,
                        range: e,
                        reverse: !0
                    }, (function(t, e, r) {
                        n = e.batchId,
                        r.done()
                    }
                    )).next((function() {
                        return n
                    }
                    ))
                }
                ,
                t.prototype.Uo = function(t) {
                    var e = this
                      , n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                    return oi(t).ts(wi.userMutationsIndex, n).next((function(t) {
                        return t.map((function(t) {
                            return Zr(e.serializer, t)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Nr = function(t, e) {
                    var n = this
                      , r = Ii.prefixForPath(this.userId, e.path)
                      , i = IDBKeyRange.lowerBound(r)
                      , o = [];
                    return ui(t).rs({
                        range: i
                    }, (function(r, i, u) {
                        var s = r[0]
                          , a = r[1]
                          , c = r[2]
                          , h = Kr(a);
                        if (s === n.userId && e.path.isEqual(h))
                            return oi(t).get(c).next((function(t) {
                                if (!t)
                                    throw y();
                                g(t.userId === n.userId),
                                o.push(Zr(n.serializer, t))
                            }
                            ));
                        u.done()
                    }
                    )).next((function() {
                        return o
                    }
                    ))
                }
                ,
                t.prototype.$r = function(t, e) {
                    var n = this
                      , r = new ot(I)
                      , i = [];
                    return e.forEach((function(e) {
                        var o = Ii.prefixForPath(n.userId, e.path)
                          , u = IDBKeyRange.lowerBound(o)
                          , s = ui(t).rs({
                            range: u
                        }, (function(t, i, o) {
                            var u = t[0]
                              , s = t[1]
                              , a = t[2]
                              , c = Kr(s);
                            u === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done()
                        }
                        ));
                        i.push(s)
                    }
                    )),
                    Yn.kn(i).next((function() {
                        return n.Ko(t, r)
                    }
                    ))
                }
                ,
                t.prototype.Qr = function(t, e) {
                    var n = this
                      , r = e.path
                      , i = r.length + 1
                      , o = Ii.prefixForPath(this.userId, r)
                      , u = IDBKeyRange.lowerBound(o)
                      , s = new ot(I);
                    return ui(t).rs({
                        range: u
                    }, (function(t, e, o) {
                        var u = t[0]
                          , a = t[1]
                          , c = t[2]
                          , h = Kr(a);
                        u === n.userId && r.M(h) ? h.length === i && (s = s.add(c)) : o.done()
                    }
                    )).next((function() {
                        return n.Ko(t, s)
                    }
                    ))
                }
                ,
                t.prototype.Ko = function(t, e) {
                    var n = this
                      , r = []
                      , i = [];
                    return e.forEach((function(e) {
                        i.push(oi(t).get(e).next((function(t) {
                            if (null === t)
                                throw y();
                            g(t.userId === n.userId),
                            r.push(Zr(n.serializer, t))
                        }
                        )))
                    }
                    )),
                    Yn.kn(i).next((function() {
                        return r
                    }
                    ))
                }
                ,
                t.prototype.Qo = function(t, e) {
                    var n = this;
                    return ii(t.Wo, this.userId, e).next((function(r) {
                        return t.pr((function() {
                            n.jo(e.batchId)
                        }
                        )),
                        Yn.forEach(r, (function(e) {
                            return n.No.Go(t, e)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.jo = function(t) {
                    delete this.xo[t]
                }
                ,
                t.prototype.zo = function(t) {
                    var e = this;
                    return this.ko(t).next((function(n) {
                        if (!n)
                            return Yn.resolve();
                        var r = IDBKeyRange.lowerBound(Ii.prefixForUser(e.userId))
                          , i = [];
                        return ui(t).rs({
                            range: r
                        }, (function(t, n, r) {
                            if (t[0] === e.userId) {
                                var o = Kr(t[1]);
                                i.push(o)
                            } else
                                r.done()
                        }
                        )).next((function() {
                            g(0 === i.length)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ho = function(t, e) {
                    return ri(t, this.userId, e)
                }
                ,
                t.prototype.Jo = function(t) {
                    var e = this;
                    return si(t).get(this.userId).next((function(t) {
                        return t || new bi(e.userId,-1,"")
                    }
                    ))
                }
                ,
                t
            }();
            function ri(t, e, n) {
                var r = Ii.prefixForPath(e, n.path)
                  , i = r[1]
                  , o = IDBKeyRange.lowerBound(r)
                  , u = !1;
                return ui(t).rs({
                    range: o,
                    ss: !0
                }, (function(t, n, r) {
                    var o = t[0]
                      , s = t[1];
                    t[2],
                    o === e && s === i && (u = !0),
                    r.done()
                }
                )).next((function() {
                    return u
                }
                ))
            }
            function ii(t, e, n) {
                var r = t.store(wi.store)
                  , i = t.store(Ii.store)
                  , o = []
                  , u = IDBKeyRange.only(n.batchId)
                  , s = 0
                  , a = r.rs({
                    range: u
                }, (function(t, e, n) {
                    return s++,
                    n.delete()
                }
                ));
                o.push(a.next((function() {
                    g(1 === s)
                }
                )));
                for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
                    var l = f[h]
                      , p = Ii.key(e, l.key.path, n.batchId);
                    o.push(i.delete(p)),
                    c.push(l.key)
                }
                return Yn.kn(o).next((function() {
                    return c
                }
                ))
            }
            function oi(t) {
                return Gi.Kn(t, wi.store)
            }
            function ui(t) {
                return Gi.Kn(t, Ii.store)
            }
            function si(t) {
                return Gi.Kn(t, bi.store)
            }
            var ai = function() {
                function t(t, e) {
                    this.serializer = t,
                    this.Dr = e
                }
                return t.prototype.Ir = function(t, e, n) {
                    return fi(t).put(li(e), n)
                }
                ,
                t.prototype.Ar = function(t, e) {
                    var n = fi(t)
                      , r = li(e);
                    return n.delete(r)
                }
                ,
                t.prototype.updateMetadata = function(t, e) {
                    var n = this;
                    return this.getMetadata(t).next((function(r) {
                        return r.byteSize += e,
                        n.Yo(t, r)
                    }
                    ))
                }
                ,
                t.prototype.Rr = function(t, e) {
                    var n = this;
                    return fi(t).get(li(e)).next((function(t) {
                        return n.Xo(t)
                    }
                    ))
                }
                ,
                t.prototype.Zo = function(t, e) {
                    var n = this;
                    return fi(t).get(li(e)).next((function(t) {
                        var e = n.Xo(t);
                        return e ? {
                            ta: e,
                            size: pi(t)
                        } : null
                    }
                    ))
                }
                ,
                t.prototype.getEntries = function(t, e) {
                    var n = this
                      , r = ct();
                    return this.ea(t, e, (function(t, e) {
                        var i = n.Xo(e);
                        r = r.ot(t, i)
                    }
                    )).next((function() {
                        return r
                    }
                    ))
                }
                ,
                t.prototype.na = function(t, e) {
                    var n = this
                      , r = ct()
                      , i = new nt(F.D);
                    return this.ea(t, e, (function(t, e) {
                        var o = n.Xo(e);
                        o ? (r = r.ot(t, o),
                        i = i.ot(t, pi(e))) : (r = r.ot(t, null),
                        i = i.ot(t, 0))
                    }
                    )).next((function() {
                        return {
                            sa: r,
                            ia: i
                        }
                    }
                    ))
                }
                ,
                t.prototype.ea = function(t, e, n) {
                    if (e.P())
                        return Yn.resolve();
                    var r = IDBKeyRange.bound(e.first().path.L(), e.last().path.L())
                      , i = e._t()
                      , o = i.It();
                    return fi(t).rs({
                        range: r
                    }, (function(t, e, r) {
                        for (var u = F.Z(t); o && F.D(o, u) < 0; )
                            n(o, null),
                            o = i.It();
                        o && o.isEqual(u) && (n(o, e),
                        o = i.At() ? i.It() : null),
                        o ? r.Xn(o.path.L()) : r.done()
                    }
                    )).next((function() {
                        for (; o; )
                            n(o, null),
                            o = i.At() ? i.It() : null
                    }
                    ))
                }
                ,
                t.prototype.Lr = function(t, e, n) {
                    var r = this
                      , i = ft()
                      , o = e.path.length + 1
                      , u = {};
                    if (n.isEqual(R.min())) {
                        var s = e.path.L();
                        u.range = IDBKeyRange.lowerBound(s)
                    } else {
                        var a = e.path.L()
                          , c = Hr(n);
                        u.range = IDBKeyRange.lowerBound([a, c], !0),
                        u.index = Ti.collectionReadTimeIndex
                    }
                    return fi(t).rs(u, (function(t, n, u) {
                        if (t.length === o) {
                            var s = Qr(r.serializer, n);
                            e.path.M(s.key.path) ? s instanceof cn && Dn(e, s) && (i = i.ot(s.key, s)) : u.done()
                        }
                    }
                    )).next((function() {
                        return i
                    }
                    ))
                }
                ,
                t.prototype.ra = function(t) {
                    return new ci(this,!!t && t.oa)
                }
                ,
                t.prototype.aa = function(t) {
                    return this.getMetadata(t).next((function(t) {
                        return t.byteSize
                    }
                    ))
                }
                ,
                t.prototype.getMetadata = function(t) {
                    return hi(t).get(Oi.key).next((function(t) {
                        return g(!!t),
                        t
                    }
                    ))
                }
                ,
                t.prototype.Yo = function(t, e) {
                    return hi(t).put(Oi.key, e)
                }
                ,
                t.prototype.Xo = function(t) {
                    if (t) {
                        var e = Qr(this.serializer, t);
                        return e instanceof hn && e.version.isEqual(R.min()) ? null : e
                    }
                    return null
                }
                ,
                t
            }()
              , ci = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this) || this).ha = e,
                    r.oa = n,
                    r.ca = new L((function(t) {
                        return t.toString()
                    }
                    ),(function(t, e) {
                        return t.isEqual(e)
                    }
                    )),
                    r
                }
                return Object(e.c)(n, t),
                n.prototype.Vr = function(t) {
                    var e = this
                      , n = []
                      , r = 0
                      , i = new ot((function(t, e) {
                        return I(t.B(), e.B())
                    }
                    ));
                    return this.wr.forEach((function(o, u) {
                        var s = e.ca.get(o);
                        if (u) {
                            var a = Yr(e.ha.serializer, u, e.readTime);
                            i = i.add(o.path.F());
                            var c = pi(a);
                            r += c - s,
                            n.push(e.ha.Ir(t, o, a))
                        } else if (r -= s,
                        e.oa) {
                            var h = Yr(e.ha.serializer, new hn(o,R.min()), e.readTime);
                            n.push(e.ha.Ir(t, o, h))
                        } else
                            n.push(e.ha.Ar(t, o))
                    }
                    )),
                    i.forEach((function(r) {
                        n.push(e.ha.Dr.Mo(t, r))
                    }
                    )),
                    n.push(this.ha.updateMetadata(t, r)),
                    Yn.kn(n)
                }
                ,
                n.prototype.Pr = function(t, e) {
                    var n = this;
                    return this.ha.Zo(t, e).next((function(t) {
                        return null === t ? (n.ca.set(e, 0),
                        null) : (n.ca.set(e, t.size),
                        t.ta)
                    }
                    ))
                }
                ,
                n.prototype.gr = function(t, e) {
                    var n = this;
                    return this.ha.na(t, e).next((function(t) {
                        var e = t.sa;
                        return t.ia.forEach((function(t, e) {
                            n.ca.set(t, e)
                        }
                        )),
                        e
                    }
                    ))
                }
                ,
                n
            }(xr);
            function hi(t) {
                return Gi.Kn(t, Oi.store)
            }
            function fi(t) {
                return Gi.Kn(t, Ti.store)
            }
            function li(t) {
                return t.path.L()
            }
            function pi(t) {
                var e;
                if (t.document)
                    e = t.document;
                else if (t.unknownDocument)
                    e = t.unknownDocument;
                else {
                    if (!t.noDocument)
                        throw y();
                    e = t.noDocument
                }
                return JSON.stringify(e).length
            }
            var di = function() {
                function t() {
                    this.ua = new vi
                }
                return t.prototype.Mo = function(t, e) {
                    return this.ua.add(e),
                    Yn.resolve()
                }
                ,
                t.prototype.Kr = function(t, e) {
                    return Yn.resolve(this.ua.getEntries(e))
                }
                ,
                t
            }()
              , vi = function() {
                function t() {
                    this.index = {}
                }
                return t.prototype.add = function(t) {
                    var e = t.O()
                      , n = t.F()
                      , r = this.index[e] || new ot(U.D)
                      , i = !r.has(n);
                    return this.index[e] = r.add(n),
                    i
                }
                ,
                t.prototype.has = function(t) {
                    var e = t.O()
                      , n = t.F()
                      , r = this.index[e];
                    return r && r.has(n)
                }
                ,
                t.prototype.getEntries = function(t) {
                    return (this.index[t] || new ot(U.D)).L()
                }
                ,
                t
            }()
              , yi = function() {
                function t(t) {
                    this.serializer = t
                }
                return t.prototype.createOrUpgrade = function(t, e, n, r) {
                    var i = this;
                    g(n < r && n >= 0 && r <= 10);
                    var o = new Zn("createOrUpgrade",e);
                    n < 1 && r >= 1 && (function(t) {
                        t.createObjectStore(mi.store)
                    }(t),
                    function(t) {
                        t.createObjectStore(bi.store, {
                            keyPath: bi.keyPath
                        }),
                        t.createObjectStore(wi.store, {
                            keyPath: wi.keyPath,
                            autoIncrement: !0
                        }).createIndex(wi.userMutationsIndex, wi.userMutationsKeyPath, {
                            unique: !0
                        }),
                        t.createObjectStore(Ii.store)
                    }(t),
                    ji(t),
                    function(t) {
                        t.createObjectStore(Ti.store)
                    }(t));
                    var u = Yn.resolve();
                    return n < 3 && r >= 3 && (0 !== n && (function(t) {
                        t.deleteObjectStore(Ai.store),
                        t.deleteObjectStore(Ni.store),
                        t.deleteObjectStore(Di.store)
                    }(t),
                    ji(t)),
                    u = u.next((function() {
                        return function(t) {
                            var e = t.store(Di.store)
                              , n = new Di(0,0,R.min().v(),0);
                            return e.put(Di.key, n)
                        }(o)
                    }
                    ))),
                    n < 4 && r >= 4 && (0 !== n && (u = u.next((function() {
                        return function(t, e) {
                            return e.store(wi.store).ts().next((function(n) {
                                t.deleteObjectStore(wi.store),
                                t.createObjectStore(wi.store, {
                                    keyPath: wi.keyPath,
                                    autoIncrement: !0
                                }).createIndex(wi.userMutationsIndex, wi.userMutationsKeyPath, {
                                    unique: !0
                                });
                                var r = e.store(wi.store)
                                  , i = n.map((function(t) {
                                    return r.put(t)
                                }
                                ));
                                return Yn.kn(i)
                            }
                            ))
                        }(t, o)
                    }
                    ))),
                    u = u.next((function() {
                        !function(t) {
                            t.createObjectStore(xi.store, {
                                keyPath: xi.keyPath
                            })
                        }(t)
                    }
                    ))),
                    n < 5 && r >= 5 && (u = u.next((function() {
                        return i.removeAcknowledgedMutations(o)
                    }
                    ))),
                    n < 6 && r >= 6 && (u = u.next((function() {
                        return function(t) {
                            t.createObjectStore(Oi.store)
                        }(t),
                        i.addDocumentGlobal(o)
                    }
                    ))),
                    n < 7 && r >= 7 && (u = u.next((function() {
                        return i.ensureSequenceNumbers(o)
                    }
                    ))),
                    n < 8 && r >= 8 && (u = u.next((function() {
                        return i.createCollectionParentIndex(t, o)
                    }
                    ))),
                    n < 9 && r >= 9 && (u = u.next((function() {
                        !function(t) {
                            t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges")
                        }(t),
                        function(t) {
                            var e = t.objectStore(Ti.store);
                            e.createIndex(Ti.readTimeIndex, Ti.readTimeIndexPath, {
                                unique: !1
                            }),
                            e.createIndex(Ti.collectionReadTimeIndex, Ti.collectionReadTimeIndexPath, {
                                unique: !1
                            })
                        }(e)
                    }
                    ))),
                    n < 10 && r >= 10 && (u = u.next((function() {
                        return i.rewriteCanonicalIds(o)
                    }
                    ))),
                    u
                }
                ,
                t.prototype.addDocumentGlobal = function(t) {
                    var e = 0;
                    return t.store(Ti.store).rs((function(t, n) {
                        e += pi(n)
                    }
                    )).next((function() {
                        var n = new Oi(e);
                        return t.store(Oi.store).put(Oi.key, n)
                    }
                    ))
                }
                ,
                t.prototype.removeAcknowledgedMutations = function(t) {
                    var e = this
                      , n = t.store(bi.store)
                      , r = t.store(wi.store);
                    return n.ts().next((function(n) {
                        return Yn.forEach(n, (function(n) {
                            var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                            return r.ts(wi.userMutationsIndex, i).next((function(r) {
                                return Yn.forEach(r, (function(r) {
                                    g(r.userId === n.userId);
                                    var i = Zr(e.serializer, r);
                                    return ii(t, n.userId, i).next((function() {}
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.ensureSequenceNumbers = function(t) {
                    var e = t.store(Ai.store)
                      , n = t.store(Ti.store);
                    return t.store(Di.store).get(Di.key).next((function(t) {
                        var r = [];
                        return n.rs((function(n, i) {
                            var o = new U(n)
                              , u = function(t) {
                                return [0, Gr(t)]
                            }(o);
                            r.push(e.get(u).next((function(n) {
                                return n ? Yn.resolve() : function(n) {
                                    return e.put(new Ai(0,Gr(n),t.highestListenSequenceNumber))
                                }(o)
                            }
                            )))
                        }
                        )).next((function() {
                            return Yn.kn(r)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.createCollectionParentIndex = function(t, e) {
                    t.createObjectStore(Si.store, {
                        keyPath: Si.keyPath
                    });
                    var n = e.store(Si.store)
                      , r = new vi
                      , i = function(t) {
                        if (r.add(t)) {
                            var e = t.O()
                              , i = t.F();
                            return n.put({
                                collectionId: e,
                                parent: Gr(i)
                            })
                        }
                    };
                    return e.store(Ti.store).rs({
                        ss: !0
                    }, (function(t, e) {
                        var n = new U(t);
                        return i(n.F())
                    }
                    )).next((function() {
                        return e.store(Ii.store).rs({
                            ss: !0
                        }, (function(t, e) {
                            t[0];
                            var n = t[1]
                              , r = (t[2],
                            Kr(n));
                            return i(r.F())
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.rewriteCanonicalIds = function(t) {
                    var e = this
                      , n = t.store(Ni.store);
                    return n.rs((function(t, r) {
                        var i = ti(r)
                          , o = ei(e.serializer, i);
                        return n.put(o)
                    }
                    ))
                }
                ,
                t
            }()
              , gi = function(t, e) {
                this.seconds = t,
                this.nanoseconds = e
            }
              , mi = function(t, e, n) {
                this.ownerId = t,
                this.allowTabSynchronization = e,
                this.leaseTimestampMs = n
            };
            mi.store = "owner",
            mi.key = "owner";
            var bi = function(t, e, n) {
                this.userId = t,
                this.lastAcknowledgedBatchId = e,
                this.lastStreamToken = n
            };
            bi.store = "mutationQueues",
            bi.keyPath = "userId";
            var wi = function(t, e, n, r, i) {
                this.userId = t,
                this.batchId = e,
                this.localWriteTimeMs = n,
                this.baseMutations = r,
                this.mutations = i
            };
            wi.store = "mutations",
            wi.keyPath = "batchId",
            wi.userMutationsIndex = "userMutationsIndex",
            wi.userMutationsKeyPath = ["userId", "batchId"];
            var Ii = function() {
                function t() {}
                return t.prefixForUser = function(t) {
                    return [t]
                }
                ,
                t.prefixForPath = function(t, e) {
                    return [t, Gr(e)]
                }
                ,
                t.key = function(t, e, n) {
                    return [t, Gr(e), n]
                }
                ,
                t
            }();
            Ii.store = "documentMutations",
            Ii.PLACEHOLDER = new Ii;
            var Ei = function(t, e) {
                this.path = t,
                this.readTime = e
            }
              , _i = function(t, e) {
                this.path = t,
                this.version = e
            }
              , Ti = function(t, e, n, r, i, o) {
                this.unknownDocument = t,
                this.noDocument = e,
                this.document = n,
                this.hasCommittedMutations = r,
                this.readTime = i,
                this.parentPath = o
            };
            Ti.store = "remoteDocuments",
            Ti.readTimeIndex = "readTimeIndex",
            Ti.readTimeIndexPath = "readTime",
            Ti.collectionReadTimeIndex = "collectionReadTimeIndex",
            Ti.collectionReadTimeIndexPath = ["parentPath", "readTime"];
            var Oi = function(t) {
                this.byteSize = t
            };
            Oi.store = "remoteDocumentGlobal",
            Oi.key = "remoteDocumentGlobalKey";
            var Ni = function(t, e, n, r, i, o, u) {
                this.targetId = t,
                this.canonicalId = e,
                this.readTime = n,
                this.resumeToken = r,
                this.lastListenSequenceNumber = i,
                this.lastLimboFreeSnapshotVersion = o,
                this.query = u
            };
            Ni.store = "targets",
            Ni.keyPath = "targetId",
            Ni.queryTargetsIndexName = "queryTargetsIndex",
            Ni.queryTargetsKeyPath = ["canonicalId", "targetId"];
            var Ai = function(t, e, n) {
                this.targetId = t,
                this.path = e,
                this.sequenceNumber = n
            };
            Ai.store = "targetDocuments",
            Ai.keyPath = ["targetId", "path"],
            Ai.documentTargetsIndex = "documentTargetsIndex",
            Ai.documentTargetsKeyPath = ["path", "targetId"];
            var Di = function(t, e, n, r) {
                this.highestTargetId = t,
                this.highestListenSequenceNumber = e,
                this.lastRemoteSnapshotVersion = n,
                this.targetCount = r
            };
            Di.key = "targetGlobalKey",
            Di.store = "targetGlobal";
            var Si = function(t, e) {
                this.collectionId = t,
                this.parent = e
            };
            function ji(t) {
                t.createObjectStore(Ai.store, {
                    keyPath: Ai.keyPath
                }).createIndex(Ai.documentTargetsIndex, Ai.documentTargetsKeyPath, {
                    unique: !0
                }),
                t.createObjectStore(Ni.store, {
                    keyPath: Ni.keyPath
                }).createIndex(Ni.queryTargetsIndexName, Ni.queryTargetsKeyPath, {
                    unique: !0
                }),
                t.createObjectStore(Di.store)
            }
            Si.store = "collectionParents",
            Si.keyPath = ["collectionId", "parent"];
            var xi = function(t, e, n, r) {
                this.clientId = t,
                this.updateTimeMs = e,
                this.networkEnabled = n,
                this.inForeground = r
            };
            xi.store = "clientMetadata",
            xi.keyPath = "clientId";
            var ki = Object(e.g)(Object(e.g)(Object(e.g)([bi.store, wi.store, Ii.store, Ti.store, Ni.store, mi.store, Di.store, Ai.store], [xi.store]), [Oi.store]), [Si.store])
              , Pi = function() {
                function t() {
                    this.la = new vi
                }
                return t.prototype.Mo = function(t, e) {
                    var n = this;
                    if (!this.la.has(e)) {
                        var r = e.O()
                          , i = e.F();
                        t.pr((function() {
                            n.la.add(e)
                        }
                        ));
                        var o = {
                            collectionId: r,
                            parent: Gr(i)
                        };
                        return Li(t).put(o)
                    }
                    return Yn.resolve()
                }
                ,
                t.prototype.Kr = function(t, e) {
                    var n = []
                      , r = IDBKeyRange.bound([e, ""], [_(e), ""], !1, !0);
                    return Li(t).ts(r).next((function(t) {
                        for (var r = 0, i = t; r < i.length; r++) {
                            var o = i[r];
                            if (o.collectionId !== e)
                                break;
                            n.push(Kr(o.parent))
                        }
                        return n
                    }
                    ))
                }
                ,
                t
            }();
            function Li(t) {
                return Gi.Kn(t, Si.store)
            }
            var Vi = function() {
                function t(t) {
                    this._a = t
                }
                return t.prototype.next = function() {
                    return this._a += 2,
                    this._a
                }
                ,
                t.fa = function() {
                    return new t(0)
                }
                ,
                t.da = function() {
                    return new t(-1)
                }
                ,
                t
            }()
              , Ri = function() {
                function t(t, e) {
                    this.No = t,
                    this.serializer = e
                }
                return t.prototype.wa = function(t) {
                    var e = this;
                    return this.Ea(t).next((function(n) {
                        var r = new Vi(n.highestTargetId);
                        return n.highestTargetId = r.next(),
                        e.Ta(t, n).next((function() {
                            return n.highestTargetId
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ia = function(t) {
                    return this.Ea(t).next((function(t) {
                        return R.V(new V(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))
                    }
                    ))
                }
                ,
                t.prototype.ma = function(t) {
                    return this.Ea(t).next((function(t) {
                        return t.highestListenSequenceNumber
                    }
                    ))
                }
                ,
                t.prototype.Aa = function(t, e, n) {
                    var r = this;
                    return this.Ea(t).next((function(i) {
                        return i.highestListenSequenceNumber = e,
                        n && (i.lastRemoteSnapshotVersion = n.v()),
                        e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e),
                        r.Ta(t, i)
                    }
                    ))
                }
                ,
                t.prototype.Ra = function(t, e) {
                    var n = this;
                    return this.Pa(t, e).next((function() {
                        return n.Ea(t).next((function(r) {
                            return r.targetCount += 1,
                            n.ga(e, r),
                            n.Ta(t, r)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Va = function(t, e) {
                    return this.Pa(t, e)
                }
                ,
                t.prototype.ya = function(t, e) {
                    var n = this;
                    return this.pa(t, e.targetId).next((function() {
                        return Ci(t).delete(e.targetId)
                    }
                    )).next((function() {
                        return n.Ea(t)
                    }
                    )).next((function(e) {
                        return g(e.targetCount > 0),
                        e.targetCount -= 1,
                        n.Ta(t, e)
                    }
                    ))
                }
                ,
                t.prototype.po = function(t, e, n) {
                    var r = this
                      , i = 0
                      , o = [];
                    return Ci(t).rs((function(u, s) {
                        var a = ti(s);
                        a.sequenceNumber <= e && null === n.get(a.targetId) && (i++,
                        o.push(r.ya(t, a)))
                    }
                    )).next((function() {
                        return Yn.kn(o)
                    }
                    )).next((function() {
                        return i
                    }
                    ))
                }
                ,
                t.prototype.Ce = function(t, e) {
                    return Ci(t).rs((function(t, n) {
                        var r = ti(n);
                        e(r)
                    }
                    ))
                }
                ,
                t.prototype.Ea = function(t) {
                    return Ui(t).get(Di.key).next((function(t) {
                        return g(null !== t),
                        t
                    }
                    ))
                }
                ,
                t.prototype.Ta = function(t, e) {
                    return Ui(t).put(Di.key, e)
                }
                ,
                t.prototype.Pa = function(t, e) {
                    return Ci(t).put(ei(this.serializer, e))
                }
                ,
                t.prototype.ga = function(t, e) {
                    var n = !1;
                    return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId,
                    n = !0),
                    t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber,
                    n = !0),
                    n
                }
                ,
                t.prototype.ba = function(t) {
                    return this.Ea(t).next((function(t) {
                        return t.targetCount
                    }
                    ))
                }
                ,
                t.prototype.va = function(t, e) {
                    var n = Q(e)
                      , r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY])
                      , i = null;
                    return Ci(t).rs({
                        range: r,
                        index: Ni.queryTargetsIndexName
                    }, (function(t, n, r) {
                        var o = ti(n);
                        Y(e, o.target) && (i = o,
                        r.done())
                    }
                    )).next((function() {
                        return i
                    }
                    ))
                }
                ,
                t.prototype.Sa = function(t, e, n) {
                    var r = this
                      , i = []
                      , o = Mi(t);
                    return e.forEach((function(e) {
                        var u = Gr(e.path);
                        i.push(o.put(new Ai(n,u))),
                        i.push(r.No.Da(t, n, e))
                    }
                    )),
                    Yn.kn(i)
                }
                ,
                t.prototype.Ca = function(t, e, n) {
                    var r = this
                      , i = Mi(t);
                    return Yn.forEach(e, (function(e) {
                        var o = Gr(e.path);
                        return Yn.kn([i.delete([n, o]), r.No.Na(t, n, e)])
                    }
                    ))
                }
                ,
                t.prototype.pa = function(t, e) {
                    var n = Mi(t)
                      , r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                    return n.delete(r)
                }
                ,
                t.prototype.xa = function(t, e) {
                    var n = IDBKeyRange.bound([e], [e + 1], !1, !0)
                      , r = Mi(t)
                      , i = dt();
                    return r.rs({
                        range: n,
                        ss: !0
                    }, (function(t, e, n) {
                        var r = Kr(t[1])
                          , o = new F(r);
                        i = i.add(o)
                    }
                    )).next((function() {
                        return i
                    }
                    ))
                }
                ,
                t.prototype.Ho = function(t, e) {
                    var n = Gr(e.path)
                      , r = IDBKeyRange.bound([n], [_(n)], !1, !0)
                      , i = 0;
                    return Mi(t).rs({
                        index: Ai.documentTargetsIndex,
                        ss: !0,
                        range: r
                    }, (function(t, e, n) {
                        var r = t[0];
                        t[1],
                        0 !== r && (i++,
                        n.done())
                    }
                    )).next((function() {
                        return i > 0
                    }
                    ))
                }
                ,
                t.prototype.Ue = function(t, e) {
                    return Ci(t).get(e).next((function(t) {
                        return t ? ti(t) : null
                    }
                    ))
                }
                ,
                t
            }();
            function Ci(t) {
                return Gi.Kn(t, Ni.store)
            }
            function Ui(t) {
                return Gi.Kn(t, Di.store)
            }
            function Mi(t) {
                return Gi.Kn(t, Ai.store)
            }
            var qi = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time."
              , Fi = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this) || this).Wo = e,
                    r.Fa = n,
                    r
                }
                return Object(e.c)(n, t),
                n
            }(Pr)
              , Gi = function() {
                function t(e, n, r, i, o, u, s, h, f, l) {
                    if (this.allowTabSynchronization = e,
                    this.persistenceKey = n,
                    this.clientId = r,
                    this.fn = o,
                    this.window = u,
                    this.document = s,
                    this.ka = f,
                    this.Oa = l,
                    this.Ma = null,
                    this.$a = !1,
                    this.isPrimary = !1,
                    this.networkEnabled = !0,
                    this.La = null,
                    this.inForeground = !1,
                    this.Ba = null,
                    this.qa = null,
                    this.Ua = Number.NEGATIVE_INFINITY,
                    this.Ka = function(t) {
                        return Promise.resolve()
                    }
                    ,
                    !t.Ln())
                        throw new c(a.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                    this.No = new Ki(this,i),
                    this.Qa = n + "main",
                    this.serializer = new Wr(h),
                    this.Wa = new Hn(this.Qa,10,new yi(this.serializer)),
                    this.ja = new Ri(this.No,this.serializer),
                    this.Dr = new Pi,
                    this.vr = function(t, e) {
                        return new ai(t,e)
                    }(this.serializer, this.Dr),
                    this.window && this.window.localStorage ? this.Ga = this.window.localStorage : (this.Ga = null,
                    !1 === l && p("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
                }
                return t.Kn = function(t, e) {
                    if (t instanceof Fi)
                        return Hn.Kn(t.Wo, e);
                    throw y()
                }
                ,
                t.prototype.start = function() {
                    var t = this;
                    return this.za().then((function() {
                        if (!t.isPrimary && !t.allowTabSynchronization)
                            throw new c(a.FAILED_PRECONDITION,qi);
                        return t.Ha(),
                        t.Ja(),
                        t.Ya(),
                        t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                            return t.ja.ma(e)
                        }
                        ))
                    }
                    )).then((function(e) {
                        t.Ma = new mr(e,t.ka)
                    }
                    )).then((function() {
                        t.$a = !0
                    }
                    )).catch((function(e) {
                        return t.Wa && t.Wa.close(),
                        Promise.reject(e)
                    }
                    ))
                }
                ,
                t.prototype.Xa = function(t) {
                    var n = this;
                    return this.Ka = function(r) {
                        return Object(e.b)(n, void 0, void 0, (function() {
                            return Object(e.d)(this, (function(e) {
                                return this.Ii ? [2, t(r)] : [2]
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t(this.isPrimary)
                }
                ,
                t.prototype.Za = function(t) {
                    var n = this;
                    this.Wa.jn((function(r) {
                        return Object(e.b)(n, void 0, void 0, (function() {
                            return Object(e.d)(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return null === r.newVersion ? [4, t()] : [3, 2];
                                case 1:
                                    e.sent(),
                                    e.label = 2;
                                case 2:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.th = function(t) {
                    var n = this;
                    this.networkEnabled !== t && (this.networkEnabled = t,
                    this.fn.ws((function() {
                        return Object(e.b)(n, void 0, void 0, (function() {
                            return Object(e.d)(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    return this.Ii ? [4, this.za()] : [3, 2];
                                case 1:
                                    t.sent(),
                                    t.label = 2;
                                case 2:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    )))
                }
                ,
                t.prototype.za = function() {
                    var t = this;
                    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
                        return zi(e).put(new xi(t.clientId,Date.now(),t.networkEnabled,t.inForeground)).next((function() {
                            if (t.isPrimary)
                                return t.eh(e).next((function(e) {
                                    e || (t.isPrimary = !1,
                                    t.fn.Cs((function() {
                                        return t.Ka(!1)
                                    }
                                    )))
                                }
                                ))
                        }
                        )).next((function() {
                            return t.nh(e)
                        }
                        )).next((function(n) {
                            return t.isPrimary && !n ? t.sh(e).next((function() {
                                return !1
                            }
                            )) : !!n && t.ih(e).next((function() {
                                return !0
                            }
                            ))
                        }
                        ))
                    }
                    )).catch((function(e) {
                        if ($n(e))
                            return l("IndexedDbPersistence", "Failed to extend owner lease: ", e),
                            t.isPrimary;
                        if (!t.allowTabSynchronization)
                            throw e;
                        return l("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e),
                        !1
                    }
                    )).then((function(e) {
                        t.isPrimary !== e && t.fn.Cs((function() {
                            return t.Ka(e)
                        }
                        )),
                        t.isPrimary = e
                    }
                    ))
                }
                ,
                t.prototype.eh = function(t) {
                    var e = this;
                    return Bi(t).get(mi.key).next((function(t) {
                        return Yn.resolve(e.rh(t))
                    }
                    ))
                }
                ,
                t.prototype.oh = function(t) {
                    return zi(t).delete(this.clientId)
                }
                ,
                t.prototype.ah = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var n, r, i, o, u = this;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return !this.isPrimary || this.hh(this.Ua, 18e5) ? [3, 2] : (this.Ua = Date.now(),
                                [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(e) {
                                    var n = t.Kn(e, xi.store);
                                    return n.ts().next((function(t) {
                                        var e = u.uh(t, 18e5)
                                          , r = t.filter((function(t) {
                                            return -1 === e.indexOf(t)
                                        }
                                        ));
                                        return Yn.forEach(r, (function(t) {
                                            return n.delete(t.clientId)
                                        }
                                        )).next((function() {
                                            return r
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )).catch((function() {
                                    return []
                                }
                                ))]);
                            case 1:
                                if (n = e.sent(),
                                this.Ga)
                                    for (r = 0,
                                    i = n; r < i.length; r++)
                                        o = i[r],
                                        this.Ga.removeItem(this.lh(o.clientId));
                                e.label = 2;
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ya = function() {
                    var t = this;
                    this.qa = this.fn.Vn("client_metadata_refresh", 4e3, (function() {
                        return t.za().then((function() {
                            return t.ah()
                        }
                        )).then((function() {
                            return t.Ya()
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.rh = function(t) {
                    return !!t && t.ownerId === this.clientId
                }
                ,
                t.prototype.nh = function(t) {
                    var e = this;
                    return this.Oa ? Yn.resolve(!0) : Bi(t).get(mi.key).next((function(n) {
                        if (null !== n && e.hh(n.leaseTimestampMs, 5e3) && !e._h(n.ownerId)) {
                            if (e.rh(n) && e.networkEnabled)
                                return !0;
                            if (!e.rh(n)) {
                                if (!n.allowTabSynchronization)
                                    throw new c(a.FAILED_PRECONDITION,qi);
                                return !1
                            }
                        }
                        return !(!e.networkEnabled || !e.inForeground) || zi(t).ts().next((function(t) {
                            return void 0 === e.uh(t, 5e3).find((function(t) {
                                if (e.clientId !== t.clientId) {
                                    var n = !e.networkEnabled && t.networkEnabled
                                      , r = !e.inForeground && t.inForeground
                                      , i = e.networkEnabled === t.networkEnabled;
                                    if (n || r && i)
                                        return !0
                                }
                                return !1
                            }
                            ))
                        }
                        ))
                    }
                    )).next((function(t) {
                        return e.isPrimary !== t && l("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."),
                        t
                    }
                    ))
                }
                ,
                t.prototype.Di = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var t = this;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return this.$a = !1,
                                this.fh(),
                                this.qa && (this.qa.cancel(),
                                this.qa = null),
                                this.dh(),
                                this.wh(),
                                [4, this.Wa.runTransaction("shutdown", "readwrite", [mi.store, xi.store], (function(e) {
                                    var n = new Fi(e,mr.ai);
                                    return t.sh(n).next((function() {
                                        return t.oh(n)
                                    }
                                    ))
                                }
                                ))];
                            case 1:
                                return e.sent(),
                                this.Wa.close(),
                                this.Eh(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.uh = function(t, e) {
                    var n = this;
                    return t.filter((function(t) {
                        return n.hh(t.updateTimeMs, e) && !n._h(t.clientId)
                    }
                    ))
                }
                ,
                t.prototype.pi = function() {
                    var t = this;
                    return this.runTransaction("getActiveClients", "readonly", (function(e) {
                        return zi(e).ts().next((function(e) {
                            return t.uh(e, 18e5).map((function(t) {
                                return t.clientId
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                Object.defineProperty(t.prototype, "Ii", {
                    get: function() {
                        return this.$a
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.Th = function(t) {
                    return ni.Fo(t, this.serializer, this.Dr, this.No)
                }
                ,
                t.prototype.Ih = function() {
                    return this.ja
                }
                ,
                t.prototype.mh = function() {
                    return this.vr
                }
                ,
                t.prototype.Ah = function() {
                    return this.Dr
                }
                ,
                t.prototype.runTransaction = function(t, e, n) {
                    var r = this;
                    l("IndexedDbPersistence", "Starting transaction:", t);
                    var i, o = "readonly" === e ? "readonly" : "readwrite";
                    return this.Wa.runTransaction(t, o, ki, (function(o) {
                        return i = new Fi(o,r.Ma ? r.Ma.next() : mr.ai),
                        "readwrite-primary" === e ? r.eh(i).next((function(t) {
                            return !!t || r.nh(i)
                        }
                        )).next((function(e) {
                            if (!e)
                                throw p("Failed to obtain primary lease for action '" + t + "'."),
                                r.isPrimary = !1,
                                r.fn.Cs((function() {
                                    return r.Ka(!1)
                                }
                                )),
                                new c(a.FAILED_PRECONDITION,kr);
                            return n(i)
                        }
                        )).next((function(t) {
                            return r.ih(i).next((function() {
                                return t
                            }
                            ))
                        }
                        )) : r.Rh(i).next((function() {
                            return n(i)
                        }
                        ))
                    }
                    )).then((function(t) {
                        return i.br(),
                        t
                    }
                    ))
                }
                ,
                t.prototype.Rh = function(t) {
                    var e = this;
                    return Bi(t).get(mi.key).next((function(t) {
                        if (null !== t && e.hh(t.leaseTimestampMs, 5e3) && !e._h(t.ownerId) && !e.rh(t) && !(e.Oa || e.allowTabSynchronization && t.allowTabSynchronization))
                            throw new c(a.FAILED_PRECONDITION,qi)
                    }
                    ))
                }
                ,
                t.prototype.ih = function(t) {
                    var e = new mi(this.clientId,this.allowTabSynchronization,Date.now());
                    return Bi(t).put(mi.key, e)
                }
                ,
                t.Ln = function() {
                    return Hn.Ln()
                }
                ,
                t.prototype.sh = function(t) {
                    var e = this
                      , n = Bi(t);
                    return n.get(mi.key).next((function(t) {
                        return e.rh(t) ? (l("IndexedDbPersistence", "Releasing primary lease."),
                        n.delete(mi.key)) : Yn.resolve()
                    }
                    ))
                }
                ,
                t.prototype.hh = function(t, e) {
                    var n = Date.now();
                    return !(t < n - e || t > n && (p("Detected an update time that is in the future: " + t + " > " + n),
                    1))
                }
                ,
                t.prototype.Ha = function() {
                    var t = this;
                    null !== this.document && "function" == typeof this.document.addEventListener && (this.Ba = function() {
                        t.fn.ws((function() {
                            return t.inForeground = "visible" === t.document.visibilityState,
                            t.za()
                        }
                        ))
                    }
                    ,
                    this.document.addEventListener("visibilitychange", this.Ba),
                    this.inForeground = "visible" === this.document.visibilityState)
                }
                ,
                t.prototype.dh = function() {
                    this.Ba && (this.document.removeEventListener("visibilitychange", this.Ba),
                    this.Ba = null)
                }
                ,
                t.prototype.Ja = function() {
                    var t, e = this;
                    "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.La = function() {
                        e.fh(),
                        e.fn.ws((function() {
                            return e.Di()
                        }
                        ))
                    }
                    ,
                    this.window.addEventListener("unload", this.La))
                }
                ,
                t.prototype.wh = function() {
                    this.La && (this.window.removeEventListener("unload", this.La),
                    this.La = null)
                }
                ,
                t.prototype._h = function(t) {
                    var e;
                    try {
                        var n = null !== (null === (e = this.Ga) || void 0 === e ? void 0 : e.getItem(this.lh(t)));
                        return l("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"),
                        n
                    } catch (t) {
                        return p("IndexedDbPersistence", "Failed to get zombied client id.", t),
                        !1
                    }
                }
                ,
                t.prototype.fh = function() {
                    if (this.Ga)
                        try {
                            this.Ga.setItem(this.lh(this.clientId), String(Date.now()))
                        } catch (t) {
                            p("Failed to set zombie client id.", t)
                        }
                }
                ,
                t.prototype.Eh = function() {
                    if (this.Ga)
                        try {
                            this.Ga.removeItem(this.lh(this.clientId))
                        } catch (t) {}
                }
                ,
                t.prototype.lh = function(t) {
                    return "firestore_zombie_" + this.persistenceKey + "_" + t
                }
                ,
                t
            }();
            function Bi(t) {
                return Gi.Kn(t, mi.store)
            }
            function zi(t) {
                return Gi.Kn(t, xi.store)
            }
            var Ki = function() {
                function t(t, e) {
                    this.db = t,
                    this.wo = new Fr(this,e)
                }
                return t.prototype.Po = function(t) {
                    var e = this.Ph(t);
                    return this.db.Ih().ba(t).next((function(t) {
                        return e.next((function(e) {
                            return t + e
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ph = function(t) {
                    var e = 0;
                    return this.yo(t, (function(t) {
                        e++
                    }
                    )).next((function() {
                        return e
                    }
                    ))
                }
                ,
                t.prototype.Ce = function(t, e) {
                    return this.db.Ih().Ce(t, e)
                }
                ,
                t.prototype.yo = function(t, e) {
                    return this.gh(t, (function(t, n) {
                        return e(n)
                    }
                    ))
                }
                ,
                t.prototype.Da = function(t, e, n) {
                    return Wi(t, n)
                }
                ,
                t.prototype.Na = function(t, e, n) {
                    return Wi(t, n)
                }
                ,
                t.prototype.po = function(t, e, n) {
                    return this.db.Ih().po(t, e, n)
                }
                ,
                t.prototype.Go = function(t, e) {
                    return Wi(t, e)
                }
                ,
                t.prototype.Vh = function(t, e) {
                    return function(t, e) {
                        var n = !1;
                        return si(t).os((function(r) {
                            return ri(t, r, e).next((function(t) {
                                return t && (n = !0),
                                Yn.resolve(!t)
                            }
                            ))
                        }
                        )).next((function() {
                            return n
                        }
                        ))
                    }(t, e)
                }
                ,
                t.prototype.bo = function(t, e) {
                    var n = this
                      , r = this.db.mh().ra()
                      , i = []
                      , o = 0;
                    return this.gh(t, (function(u, s) {
                        if (s <= e) {
                            var a = n.Vh(t, u).next((function(e) {
                                if (!e)
                                    return o++,
                                    r.Rr(t, u).next((function() {
                                        return r.Ar(u),
                                        Mi(t).delete([0, Gr(u.path)])
                                    }
                                    ))
                            }
                            ));
                            i.push(a)
                        }
                    }
                    )).next((function() {
                        return Yn.kn(i)
                    }
                    )).next((function() {
                        return r.apply(t)
                    }
                    )).next((function() {
                        return o
                    }
                    ))
                }
                ,
                t.prototype.removeTarget = function(t, e) {
                    var n = e.st(t.Fa);
                    return this.db.Ih().Va(t, n)
                }
                ,
                t.prototype.yh = function(t, e) {
                    return Wi(t, e)
                }
                ,
                t.prototype.gh = function(t, e) {
                    var n, r = Mi(t), i = mr.ai;
                    return r.rs({
                        index: Ai.documentTargetsIndex
                    }, (function(t, r) {
                        var o = t[0]
                          , u = (t[1],
                        r.path)
                          , s = r.sequenceNumber;
                        0 === o ? (i !== mr.ai && e(new F(Kr(n)), i),
                        i = s,
                        n = u) : i = mr.ai
                    }
                    )).next((function() {
                        i !== mr.ai && e(new F(Kr(n)), i)
                    }
                    ))
                }
                ,
                t.prototype.So = function(t) {
                    return this.db.mh().aa(t)
                }
                ,
                t
            }();
            function Wi(t, e) {
                return Mi(t).put(function(t, e) {
                    return new Ai(0,Gr(t.path),e)
                }(e, t.Fa))
            }
            function Qi(t, e) {
                var n = t.projectId;
                return t.I || (n += "." + t.database),
                "firestore/" + e + "/" + n + "/"
            }
            var Yi = function() {
                function t(t, e, n) {
                    this.persistence = t,
                    this.ph = e,
                    this.bh = new nt(I),
                    this.Sh = new L((function(t) {
                        return Q(t)
                    }
                    ),Y),
                    this.Dh = R.min(),
                    this.Sr = t.Th(n),
                    this.Ch = t.mh(),
                    this.ja = t.Ih(),
                    this.Nh = new Lr(this.Ch,this.Sr,this.persistence.Ah()),
                    this.ph.xh(this.Nh)
                }
                return t.prototype.mo = function(t) {
                    var e = this;
                    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
                        return t.vo(n, e.bh)
                    }
                    ))
                }
                ,
                t
            }();
            function Hi(t, e) {
                var n = m(t);
                return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
                    var r = e.batch.keys()
                      , i = n.Ch.ra({
                        oa: !0
                    });
                    return function(t, e, n, r) {
                        var i = n.batch
                          , o = i.keys()
                          , u = Yn.resolve();
                        return o.forEach((function(t) {
                            u = u.next((function() {
                                return r.Rr(e, t)
                            }
                            )).next((function(e) {
                                var o = e
                                  , u = n.dr.get(t);
                                g(null !== u),
                                (!o || o.version.h(u) < 0) && (o = i.hr(t, o, n)) && r.Ir(o, n._r)
                            }
                            ))
                        }
                        )),
                        u.next((function() {
                            return t.Sr.Qo(e, i)
                        }
                        ))
                    }(n, t, e, i).next((function() {
                        return i.apply(t)
                    }
                    )).next((function() {
                        return n.Sr.zo(t)
                    }
                    )).next((function() {
                        return n.Nh.Or(t, r)
                    }
                    ))
                }
                ))
            }
            function Xi(t) {
                var e = m(t);
                return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
                    return e.ja.Ia(t)
                }
                ))
            }
            function Ji(t, e) {
                var n = m(t)
                  , r = e.nt
                  , i = n.bh;
                return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
                    var o = n.Ch.ra({
                        oa: !0
                    });
                    i = n.bh;
                    var u = [];
                    e.zt.forEach((function(e, o) {
                        var s = i.get(o);
                        if (s) {
                            u.push(n.ja.Ca(t, e.se, o).next((function() {
                                return n.ja.Sa(t, e.ee, o)
                            }
                            )));
                            var a = e.resumeToken;
                            if (a.o() > 0) {
                                var c = s.it(a, r).st(t.Fa);
                                i = i.ot(o, c),
                                function(t, e, n) {
                                    return g(e.resumeToken.o() > 0),
                                    0 === t.resumeToken.o() || e.nt.p() - t.nt.p() >= 3e8 || n.ee.size + n.ne.size + n.se.size > 0
                                }(s, c, e) && u.push(n.ja.Va(t, c))
                            }
                        }
                    }
                    ));
                    var s = at()
                      , a = dt();
                    if (e.Jt.forEach((function(t, e) {
                        a = a.add(t)
                    }
                    )),
                    u.push(o.getEntries(t, a).next((function(i) {
                        e.Jt.forEach((function(a, c) {
                            var h = i.get(a);
                            c instanceof hn && c.version.isEqual(R.min()) ? (o.Ar(a, r),
                            s = s.ot(a, c)) : null == h || c.version.h(h.version) > 0 || 0 === c.version.h(h.version) && h.hasPendingWrites ? (o.Ir(c, r),
                            s = s.ot(a, c)) : l("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", h.version, " Watch version:", c.version),
                            e.Yt.has(a) && u.push(n.persistence.No.yh(t, a))
                        }
                        ))
                    }
                    ))),
                    !r.isEqual(R.min())) {
                        var c = n.ja.Ia(t).next((function(e) {
                            return n.ja.Aa(t, t.Fa, r)
                        }
                        ));
                        u.push(c)
                    }
                    return Yn.kn(u).next((function() {
                        return o.apply(t)
                    }
                    )).next((function() {
                        return n.Nh.Mr(t, s)
                    }
                    ))
                }
                )).then((function(t) {
                    return n.bh = i,
                    t
                }
                ))
            }
            function $i(t, e) {
                var n = m(t);
                return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
                    return void 0 === e && (e = -1),
                    n.Sr.Bo(t, e)
                }
                ))
            }
            function Zi(t, e) {
                var n = m(t);
                return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
                    var r;
                    return n.ja.va(t, e).next((function(i) {
                        return i ? (r = i,
                        Yn.resolve(r)) : n.ja.wa(t).next((function(i) {
                            return r = new $(e,i,0,t.Fa),
                            n.ja.Ra(t, r).next((function() {
                                return r
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                )).then((function(t) {
                    var r = n.bh.get(t.targetId);
                    return (null === r || t.nt.h(r.nt) > 0) && (n.bh = n.bh.ot(t.targetId, t),
                    n.Sh.set(e, t.targetId)),
                    t
                }
                ))
            }
            function to(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var i, o, u, s;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            i = m(t),
                            o = i.bh.get(n),
                            u = r ? "readwrite" : "readwrite-primary",
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 4, , 5]),
                            r ? [3, 3] : [4, i.persistence.runTransaction("Release target", u, (function(t) {
                                return i.persistence.No.removeTarget(t, o)
                            }
                            ))];
                        case 2:
                            e.sent(),
                            e.label = 3;
                        case 3:
                            return [3, 5];
                        case 4:
                            if (!$n(s = e.sent()))
                                throw s;
                            return l("LocalStore", "Failed to update sequence numbers for target " + n + ": " + s),
                            [3, 5];
                        case 5:
                            return i.bh = i.bh.remove(n),
                            i.Sh.delete(o.target),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            function eo(t, e, n) {
                var r = m(t)
                  , i = R.min()
                  , o = dt();
                return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
                    return function(t, e, n) {
                        var r = m(t)
                          , i = r.Sh.get(n);
                        return void 0 !== i ? Yn.resolve(r.bh.get(i)) : r.ja.va(e, n)
                    }(r, t, In(e)).next((function(e) {
                        if (e)
                            return i = e.lastLimboFreeSnapshotVersion,
                            r.ja.xa(t, e.targetId).next((function(t) {
                                o = t
                            }
                            ))
                    }
                    )).next((function() {
                        return r.ph.Lr(t, e, n ? i : R.min(), n ? o : dt())
                    }
                    )).next((function(t) {
                        return {
                            documents: t,
                            Fh: o
                        }
                    }
                    ))
                }
                ))
            }
            function no(t, e) {
                var n = m(t)
                  , r = m(n.ja)
                  , i = n.bh.get(e);
                return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
                    return r.Ue(t, e).next((function(t) {
                        return t ? t.target : null
                    }
                    ))
                }
                ))
            }
            function ro(t) {
                var e = m(t);
                return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
                    return function(t, e, n) {
                        var r = m(t)
                          , i = at()
                          , o = Hr(n)
                          , u = fi(e)
                          , s = IDBKeyRange.lowerBound(o, !0);
                        return u.rs({
                            index: Ti.readTimeIndex,
                            range: s
                        }, (function(t, e) {
                            var n = Qr(r.serializer, e);
                            i = i.ot(n.key, n),
                            o = e.readTime
                        }
                        )).next((function() {
                            return {
                                kh: i,
                                readTime: Xr(o)
                            }
                        }
                        ))
                    }(e.Ch, t, e.Dh)
                }
                )).then((function(t) {
                    var n = t.kh
                      , r = t.readTime;
                    return e.Dh = r,
                    n
                }
                ))
            }
            function io(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var n;
                    return Object(e.d)(this, (function(e) {
                        return [2, (n = m(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                            return function(t) {
                                var e = fi(t)
                                  , n = R.min();
                                return e.rs({
                                    index: Ti.readTimeIndex,
                                    reverse: !0
                                }, (function(t, e, r) {
                                    e.readTime && (n = Xr(e.readTime)),
                                    r.done()
                                }
                                )).next((function() {
                                    return n
                                }
                                ))
                            }(t)
                        }
                        )).then((function(t) {
                            n.Dh = t
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            function oo(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    return Object(e.d)(this, (function(e) {
                        if (t.code !== a.FAILED_PRECONDITION || t.message !== kr)
                            throw t;
                        return l("LocalStore", "Unexpectedly lost primary lease"),
                        [2]
                    }
                    ))
                }
                ))
            }
            var uo = function() {
                function t() {
                    this.Oh = new ot(so.Mh),
                    this.$h = new ot(so.Lh)
                }
                return t.prototype.P = function() {
                    return this.Oh.P()
                }
                ,
                t.prototype.Da = function(t, e) {
                    var n = new so(t,e);
                    this.Oh = this.Oh.add(n),
                    this.$h = this.$h.add(n)
                }
                ,
                t.prototype.Bh = function(t, e) {
                    var n = this;
                    t.forEach((function(t) {
                        return n.Da(t, e)
                    }
                    ))
                }
                ,
                t.prototype.Na = function(t, e) {
                    this.qh(new so(t,e))
                }
                ,
                t.prototype.Uh = function(t, e) {
                    var n = this;
                    t.forEach((function(t) {
                        return n.Na(t, e)
                    }
                    ))
                }
                ,
                t.prototype.Kh = function(t) {
                    var e = this
                      , n = new F(new U([]))
                      , r = new so(n,t)
                      , i = new so(n,t + 1)
                      , o = [];
                    return this.$h.xt([r, i], (function(t) {
                        e.qh(t),
                        o.push(t.key)
                    }
                    )),
                    o
                }
                ,
                t.prototype.Qh = function() {
                    var t = this;
                    this.Oh.forEach((function(e) {
                        return t.qh(e)
                    }
                    ))
                }
                ,
                t.prototype.qh = function(t) {
                    this.Oh = this.Oh.delete(t),
                    this.$h = this.$h.delete(t)
                }
                ,
                t.prototype.Wh = function(t) {
                    var e = new F(new U([]))
                      , n = new so(e,t)
                      , r = new so(e,t + 1)
                      , i = dt();
                    return this.$h.xt([n, r], (function(t) {
                        i = i.add(t.key)
                    }
                    )),
                    i
                }
                ,
                t.prototype.Ho = function(t) {
                    var e = new so(t,0)
                      , n = this.Oh.kt(e);
                    return null !== n && t.isEqual(n.key)
                }
                ,
                t
            }()
              , so = function() {
                function t(t, e) {
                    this.key = t,
                    this.jh = e
                }
                return t.Mh = function(t, e) {
                    return F.D(t.key, e.key) || I(t.jh, e.jh)
                }
                ,
                t.Lh = function(t, e) {
                    return I(t.jh, e.jh) || F.D(t.key, e.key)
                }
                ,
                t
            }()
              , ao = function(t, e) {
                this.user = e,
                this.type = "OAuth",
                this.Gh = {},
                this.Gh.Authorization = "Bearer " + t
            }
              , co = function() {
                function t() {
                    this.zh = null
                }
                return t.prototype.getToken = function() {
                    return Promise.resolve(null)
                }
                ,
                t.prototype.Hh = function() {}
                ,
                t.prototype.Jh = function(t) {
                    this.zh = t,
                    t(gr.UNAUTHENTICATED)
                }
                ,
                t.prototype.Yh = function() {
                    this.zh = null
                }
                ,
                t
            }()
              , ho = function() {
                function t(t) {
                    var e = this;
                    this.Xh = null,
                    this.currentUser = gr.UNAUTHENTICATED,
                    this.Zh = !1,
                    this.tc = 0,
                    this.zh = null,
                    this.forceRefresh = !1,
                    this.Xh = function() {
                        e.tc++,
                        e.currentUser = e.ec(),
                        e.Zh = !0,
                        e.zh && e.zh(e.currentUser)
                    }
                    ,
                    this.tc = 0,
                    this.auth = t.getImmediate({
                        optional: !0
                    }),
                    this.auth ? this.auth.addAuthTokenListener(this.Xh) : (this.Xh(null),
                    t.get().then((function(t) {
                        e.auth = t,
                        e.Xh && e.auth.addAuthTokenListener(e.Xh)
                    }
                    ), (function() {}
                    )))
                }
                return t.prototype.getToken = function() {
                    var t = this
                      , e = this.tc
                      , n = this.forceRefresh;
                    return this.forceRefresh = !1,
                    this.auth ? this.auth.getToken(n).then((function(n) {
                        return t.tc !== e ? (l("FirebaseCredentialsProvider", "getToken aborted due to token change."),
                        t.getToken()) : n ? (g("string" == typeof n.accessToken),
                        new ao(n.accessToken,t.currentUser)) : null
                    }
                    )) : Promise.resolve(null)
                }
                ,
                t.prototype.Hh = function() {
                    this.forceRefresh = !0
                }
                ,
                t.prototype.Jh = function(t) {
                    this.zh = t,
                    this.Zh && t(this.currentUser)
                }
                ,
                t.prototype.Yh = function() {
                    this.auth && this.auth.removeAuthTokenListener(this.Xh),
                    this.Xh = null,
                    this.zh = null
                }
                ,
                t.prototype.ec = function() {
                    var t = this.auth && this.auth.getUid();
                    return g(null === t || "string" == typeof t),
                    new gr(t)
                }
                ,
                t
            }()
              , fo = function() {
                function t(t, e) {
                    this.nc = t,
                    this.sc = e,
                    this.type = "FirstParty",
                    this.user = gr.ni
                }
                return Object.defineProperty(t.prototype, "Gh", {
                    get: function() {
                        var t = {
                            "X-Goog-AuthUser": this.sc
                        }
                          , e = this.nc.auth.getAuthHeaderValueForFirstParty([]);
                        return e && (t.Authorization = e),
                        t
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t
            }()
              , lo = function() {
                function t(t, e) {
                    this.nc = t,
                    this.sc = e
                }
                return t.prototype.getToken = function() {
                    return Promise.resolve(new fo(this.nc,this.sc))
                }
                ,
                t.prototype.Jh = function(t) {
                    t(gr.ni)
                }
                ,
                t.prototype.Yh = function() {}
                ,
                t.prototype.Hh = function() {}
                ,
                t
            }()
              , po = function() {
                function t(t, e, n, r, i, o) {
                    this.fn = t,
                    this.ic = n,
                    this.rc = r,
                    this.oc = i,
                    this.listener = o,
                    this.state = 0,
                    this.ac = 0,
                    this.hc = null,
                    this.stream = null,
                    this.Vs = new Qn(t,e)
                }
                return t.prototype.cc = function() {
                    return 1 === this.state || 2 === this.state || 4 === this.state
                }
                ,
                t.prototype.uc = function() {
                    return 2 === this.state
                }
                ,
                t.prototype.start = function() {
                    3 !== this.state ? this.auth() : this.lc()
                }
                ,
                t.prototype.stop = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return this.cc() ? [4, this.close(0)] : [3, 2];
                            case 1:
                                t.sent(),
                                t.label = 2;
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype._c = function() {
                    this.state = 0,
                    this.Vs.reset()
                }
                ,
                t.prototype.fc = function() {
                    var t = this;
                    this.uc() && null === this.hc && (this.hc = this.fn.Vn(this.ic, 6e4, (function() {
                        return t.dc()
                    }
                    )))
                }
                ,
                t.prototype.wc = function(t) {
                    this.Ec(),
                    this.stream.send(t)
                }
                ,
                t.prototype.dc = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(t) {
                            return this.uc() ? [2, this.close(0)] : [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ec = function() {
                    this.hc && (this.hc.cancel(),
                    this.hc = null)
                }
                ,
                t.prototype.close = function(t, n) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return this.Ec(),
                                this.Vs.cancel(),
                                this.ac++,
                                3 !== t ? this.Vs.reset() : n && n.code === a.RESOURCE_EXHAUSTED ? (p(n.toString()),
                                p("Using maximum backoff delay to prevent overloading the backend."),
                                this.Vs.Rn()) : n && n.code === a.UNAUTHENTICATED && this.oc.Hh(),
                                null !== this.stream && (this.Tc(),
                                this.stream.close(),
                                this.stream = null),
                                this.state = t,
                                [4, this.listener.Ic(n)];
                            case 1:
                                return e.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Tc = function() {}
                ,
                t.prototype.auth = function() {
                    var t = this;
                    this.state = 1;
                    var e = this.mc(this.ac)
                      , n = this.ac;
                    this.oc.getToken().then((function(e) {
                        t.ac === n && t.Ac(e)
                    }
                    ), (function(n) {
                        e((function() {
                            var e = new c(a.UNKNOWN,"Fetching auth token failed: " + n.message);
                            return t.Rc(e)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ac = function(t) {
                    var e = this
                      , n = this.mc(this.ac);
                    this.stream = this.Pc(t),
                    this.stream.gc((function() {
                        n((function() {
                            return e.state = 2,
                            e.listener.gc()
                        }
                        ))
                    }
                    )),
                    this.stream.Ic((function(t) {
                        n((function() {
                            return e.Rc(t)
                        }
                        ))
                    }
                    )),
                    this.stream.onMessage((function(t) {
                        n((function() {
                            return e.onMessage(t)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.lc = function() {
                    var t = this;
                    this.state = 4,
                    this.Vs.Pn((function() {
                        return Object(e.b)(t, void 0, void 0, (function() {
                            return Object(e.d)(this, (function(t) {
                                return this.state = 0,
                                this.start(),
                                [2]
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Rc = function(t) {
                    return l("PersistentStream", "close with error: " + t),
                    this.stream = null,
                    this.close(3, t)
                }
                ,
                t.prototype.mc = function(t) {
                    var e = this;
                    return function(n) {
                        e.fn.ws((function() {
                            return e.ac === t ? n() : (l("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."),
                            Promise.resolve())
                        }
                        ))
                    }
                }
                ,
                t
            }()
              , vo = function(t) {
                function n(e, n, r, i, o) {
                    var u = this;
                    return (u = t.call(this, e, "listen_stream_connection_backoff", "listen_stream_idle", n, r, o) || this).serializer = i,
                    u
                }
                return Object(e.c)(n, t),
                n.prototype.Pc = function(t) {
                    return this.rc.Vc("Listen", t)
                }
                ,
                n.prototype.onMessage = function(t) {
                    this.Vs.reset();
                    var e = function(t, e) {
                        var n;
                        if ("targetChange"in e) {
                            e.targetChange;
                            var r = function(t) {
                                return "NO_CHANGE" === t ? 0 : "ADD" === t ? 1 : "REMOVE" === t ? 2 : "CURRENT" === t ? 3 : "RESET" === t ? 4 : y()
                            }(e.targetChange.targetChangeType || "NO_CHANGE")
                              , i = e.targetChange.targetIds || []
                              , o = function(t, e) {
                                return t.Ke ? (g(void 0 === e || "string" == typeof e),
                                T.fromBase64String(e || "")) : (g(void 0 === e || e instanceof Uint8Array),
                                T.fromUint8Array(e || new Uint8Array))
                            }(t, e.targetChange.resumeToken)
                              , u = e.targetChange.cause
                              , s = u && function(t) {
                                var e = void 0 === t.code ? a.UNKNOWN : et(t.code);
                                return new c(e,t.message || "")
                            }(u);
                            n = new Tt(r,i,o,s || null)
                        } else if ("documentChange"in e) {
                            e.documentChange;
                            var h = e.documentChange;
                            h.document,
                            h.document.name,
                            h.document.updateTime;
                            var f = ue(t, h.document.name)
                              , l = ne(h.document.updateTime)
                              , p = new on({
                                mapValue: {
                                    fields: h.document.fields
                                }
                            })
                              , d = new cn(f,l,p,{})
                              , v = h.targetIds || []
                              , m = h.removedTargetIds || [];
                            n = new Et(v,m,d.key,d)
                        } else if ("documentDelete"in e) {
                            e.documentDelete;
                            var b = e.documentDelete;
                            b.document;
                            var w = ue(t, b.document)
                              , I = b.readTime ? ne(b.readTime) : R.min()
                              , E = new hn(w,I)
                              , _ = b.removedTargetIds || [];
                            n = new Et([],_,E.key,E)
                        } else if ("documentRemove"in e) {
                            e.documentRemove;
                            var O = e.documentRemove;
                            O.document;
                            var N = ue(t, O.document)
                              , A = O.removedTargetIds || [];
                            n = new Et([],A,N,null)
                        } else {
                            if (!("filter"in e))
                                return y();
                            e.filter;
                            var D = e.filter;
                            D.targetId;
                            var S = D.count || 0
                              , j = new Z(S)
                              , x = D.targetId;
                            n = new _t(x,j)
                        }
                        return n
                    }(this.serializer, t)
                      , n = function(t) {
                        if (!("targetChange"in t))
                            return R.min();
                        var e = t.targetChange;
                        return e.targetIds && e.targetIds.length ? R.min() : e.readTime ? ne(e.readTime) : R.min()
                    }(t);
                    return this.listener.yc(e, n)
                }
                ,
                n.prototype.bc = function(t) {
                    var e = {};
                    e.database = ce(this.serializer),
                    e.addTarget = function(t, e) {
                        var n, r = e.target;
                        return (n = H(r) ? {
                            documents: de(t, r)
                        } : {
                            query: ve(t, r)
                        }).targetId = e.targetId,
                        e.resumeToken.o() > 0 && (n.resumeToken = te(t, e.resumeToken)),
                        n
                    }(this.serializer, t);
                    var n = function(t, e) {
                        var n = function(t, e) {
                            switch (e) {
                            case 0:
                                return null;
                            case 1:
                                return "existence-filter-mismatch";
                            case 2:
                                return "limbo-document";
                            default:
                                return y()
                            }
                        }(0, e.et);
                        return null == n ? null : {
                            "goog-listen-tags": n
                        }
                    }(this.serializer, t);
                    n && (e.labels = n),
                    this.wc(e)
                }
                ,
                n.prototype.vc = function(t) {
                    var e = {};
                    e.database = ce(this.serializer),
                    e.removeTarget = t,
                    this.wc(e)
                }
                ,
                n
            }(po)
              , yo = function(t) {
                function n(e, n, r, i, o) {
                    var u = this;
                    return (u = t.call(this, e, "write_stream_connection_backoff", "write_stream_idle", n, r, o) || this).serializer = i,
                    u.Sc = !1,
                    u
                }
                return Object(e.c)(n, t),
                Object.defineProperty(n.prototype, "Dc", {
                    get: function() {
                        return this.Sc
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                n.prototype.start = function() {
                    this.Sc = !1,
                    this.lastStreamToken = void 0,
                    t.prototype.start.call(this)
                }
                ,
                n.prototype.Tc = function() {
                    this.Sc && this.Cc([])
                }
                ,
                n.prototype.Pc = function(t) {
                    return this.rc.Vc("Write", t)
                }
                ,
                n.prototype.onMessage = function(t) {
                    if (g(!!t.streamToken),
                    this.lastStreamToken = t.streamToken,
                    this.Sc) {
                        this.Vs.reset();
                        var e = function(t, e) {
                            return t && t.length > 0 ? (g(void 0 !== e),
                            t.map((function(t) {
                                return function(t, e) {
                                    var n = t.updateTime ? ne(t.updateTime) : ne(e);
                                    n.isEqual(R.min()) && (n = ne(e));
                                    var r = null;
                                    return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults),
                                    new Fe(n,r)
                                }(t, e)
                            }
                            ))) : []
                        }(t.writeResults, t.commitTime)
                          , n = ne(t.commitTime);
                        return this.listener.Nc(n, e)
                    }
                    return g(!t.writeResults || 0 === t.writeResults.length),
                    this.Sc = !0,
                    this.listener.xc()
                }
                ,
                n.prototype.Fc = function() {
                    var t = {};
                    t.database = ce(this.serializer),
                    this.wc(t)
                }
                ,
                n.prototype.Cc = function(t) {
                    var e = this
                      , n = {
                        streamToken: this.lastStreamToken,
                        writes: t.map((function(t) {
                            return le(e.serializer, t)
                        }
                        ))
                    };
                    this.wc(n)
                }
                ,
                n
            }(po)
              , go = function(t) {
                function n(e, n, r) {
                    var i = this;
                    return (i = t.call(this) || this).credentials = e,
                    i.rc = n,
                    i.serializer = r,
                    i.kc = !1,
                    i
                }
                return Object(e.c)(n, t),
                n.prototype.Oc = function() {
                    if (this.kc)
                        throw new c(a.FAILED_PRECONDITION,"The client has already been terminated.")
                }
                ,
                n.prototype.Mc = function(t, e, n) {
                    var r = this;
                    return this.Oc(),
                    this.credentials.getToken().then((function(i) {
                        return r.rc.Mc(t, e, n, i)
                    }
                    )).catch((function(t) {
                        throw t.code === a.UNAUTHENTICATED && r.credentials.Hh(),
                        t
                    }
                    ))
                }
                ,
                n.prototype.$c = function(t, e, n) {
                    var r = this;
                    return this.Oc(),
                    this.credentials.getToken().then((function(i) {
                        return r.rc.$c(t, e, n, i)
                    }
                    )).catch((function(t) {
                        throw t.code === a.UNAUTHENTICATED && r.credentials.Hh(),
                        t
                    }
                    ))
                }
                ,
                n.prototype.terminate = function() {
                    this.kc = !1
                }
                ,
                n
            }((function() {}
            ))
              , mo = function() {
                function t(t, e) {
                    this.hs = t,
                    this.di = e,
                    this.state = "Unknown",
                    this.Lc = 0,
                    this.Bc = null,
                    this.qc = !0
                }
                return t.prototype.Uc = function() {
                    var t = this;
                    0 === this.Lc && (this.Kc("Unknown"),
                    this.Bc = this.hs.Vn("online_state_timeout", 1e4, (function() {
                        return t.Bc = null,
                        t.Qc("Backend didn't respond within 10 seconds."),
                        t.Kc("Offline"),
                        Promise.resolve()
                    }
                    )))
                }
                ,
                t.prototype.Wc = function(t) {
                    "Online" === this.state ? this.Kc("Unknown") : (this.Lc++,
                    this.Lc >= 1 && (this.jc(),
                    this.Qc("Connection failed 1 times. Most recent error: " + t.toString()),
                    this.Kc("Offline")))
                }
                ,
                t.prototype.set = function(t) {
                    this.jc(),
                    this.Lc = 0,
                    "Online" === t && (this.qc = !1),
                    this.Kc(t)
                }
                ,
                t.prototype.Kc = function(t) {
                    t !== this.state && (this.state = t,
                    this.di(t))
                }
                ,
                t.prototype.Qc = function(t) {
                    var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                    this.qc ? (p(e),
                    this.qc = !1) : l("OnlineStateTracker", e)
                }
                ,
                t.prototype.jc = function() {
                    null !== this.Bc && (this.Bc.cancel(),
                    this.Bc = null)
                }
                ,
                t
            }()
              , bo = function(t, n, r, i, o) {
                var u = this;
                this.Gc = t,
                this.zc = n,
                this.hs = r,
                this.Hc = {},
                this.Jc = [],
                this.Yc = new Map,
                this.Xc = new Set,
                this.Zc = [],
                this.tu = o,
                this.tu.eu((function(t) {
                    r.ws((function() {
                        return Object(e.b)(u, void 0, void 0, (function() {
                            return Object(e.d)(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    return So(this) ? (l("RemoteStore", "Restarting streams for network reachability change."),
                                    [4, function(t) {
                                        return Object(e.b)(this, void 0, void 0, (function() {
                                            var n;
                                            return Object(e.d)(this, (function(e) {
                                                switch (e.label) {
                                                case 0:
                                                    return (n = m(t)).Xc.add(4),
                                                    [4, Io(n)];
                                                case 1:
                                                    return e.sent(),
                                                    n.nu.set("Unknown"),
                                                    n.Xc.delete(4),
                                                    [4, wo(n)];
                                                case 2:
                                                    return e.sent(),
                                                    [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }(this)]) : [3, 2];
                                case 1:
                                    t.sent(),
                                    t.label = 2;
                                case 2:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                )),
                this.nu = new mo(r,i)
            };
            function wo(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var n, r;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            if (!So(t))
                                return [3, 4];
                            n = 0,
                            r = t.Zc,
                            e.label = 1;
                        case 1:
                            return n < r.length ? [4, (0,
                            r[n])(!0)] : [3, 4];
                        case 2:
                            e.sent(),
                            e.label = 3;
                        case 3:
                            return n++,
                            [3, 1];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Io(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var n, r;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            n = 0,
                            r = t.Zc,
                            e.label = 1;
                        case 1:
                            return n < r.length ? [4, (0,
                            r[n])(!1)] : [3, 4];
                        case 2:
                            e.sent(),
                            e.label = 3;
                        case 3:
                            return n++,
                            [3, 1];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Eo(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var n;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return n = m(t),
                            l("RemoteStore", "RemoteStore shutting down."),
                            n.Xc.add(5),
                            [4, Io(n)];
                        case 1:
                            return e.sent(),
                            n.tu.Di(),
                            n.nu.set("Unknown"),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            function _o(t, e) {
                var n = m(t);
                n.Yc.has(e.targetId) || (n.Yc.set(e.targetId, e),
                Do(n) ? Ao(n) : zo(n).uc() && Oo(n, e))
            }
            function To(t, e) {
                var n = m(t)
                  , r = zo(n);
                n.Yc.delete(e),
                r.uc() && No(n, e),
                0 === n.Yc.size && (r.uc() ? r.fc() : So(n) && n.nu.set("Unknown"))
            }
            function Oo(t, e) {
                t.su.me(e.targetId),
                zo(t).bc(e)
            }
            function No(t, e) {
                t.su.me(e),
                zo(t).vc(e)
            }
            function Ao(t) {
                t.su = new Nt({
                    qe: function(e) {
                        return t.Hc.qe(e)
                    },
                    Ue: function(e) {
                        return t.Yc.get(e) || null
                    }
                }),
                zo(t).start(),
                t.nu.Uc()
            }
            function Do(t) {
                return So(t) && !zo(t).cc() && t.Yc.size > 0
            }
            function So(t) {
                return 0 === m(t).Xc.size
            }
            function jo(t) {
                t.su = void 0
            }
            function xo(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    return Object(e.d)(this, (function(e) {
                        return t.Yc.forEach((function(e, n) {
                            Oo(t, e)
                        }
                        )),
                        [2]
                    }
                    ))
                }
                ))
            }
            function ko(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    return Object(e.d)(this, (function(e) {
                        return jo(t),
                        Do(t) ? (t.nu.Wc(n),
                        Ao(t)) : t.nu.set("Unknown"),
                        [2]
                    }
                    ))
                }
                ))
            }
            function Po(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var i, o, u;
                    return Object(e.d)(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            if (t.nu.set("Online"),
                            !(n instanceof Tt && 2 === n.state && n.cause))
                                return [3, 6];
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 3, , 5]),
                            [4, function(t, n) {
                                return Object(e.b)(this, void 0, void 0, (function() {
                                    var r, i, o, u;
                                    return Object(e.d)(this, (function(e) {
                                        switch (e.label) {
                                        case 0:
                                            r = n.cause,
                                            i = 0,
                                            o = n.targetIds,
                                            e.label = 1;
                                        case 1:
                                            return i < o.length ? (u = o[i],
                                            t.Yc.has(u) ? [4, t.Hc.iu(u, r)] : [3, 3]) : [3, 5];
                                        case 2:
                                            e.sent(),
                                            t.Yc.delete(u),
                                            t.su.removeTarget(u),
                                            e.label = 3;
                                        case 3:
                                            e.label = 4;
                                        case 4:
                                            return i++,
                                            [3, 1];
                                        case 5:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }(t, n)];
                        case 2:
                            return s.sent(),
                            [3, 5];
                        case 3:
                            return i = s.sent(),
                            l("RemoteStore", "Failed to remove targets %s: %s ", n.targetIds.join(","), i),
                            [4, Lo(t, i)];
                        case 4:
                            return s.sent(),
                            [3, 5];
                        case 5:
                            return [3, 13];
                        case 6:
                            if (n instanceof Et ? t.su.be(n) : n instanceof _t ? t.su.ke(n) : t.su.De(n),
                            r.isEqual(R.min()))
                                return [3, 13];
                            s.label = 7;
                        case 7:
                            return s.trys.push([7, 11, , 13]),
                            [4, Xi(t.Gc)];
                        case 8:
                            return o = s.sent(),
                            r.h(o) >= 0 ? [4, function(t, e) {
                                var n = t.su.$e(e);
                                return n.zt.forEach((function(n, r) {
                                    if (n.resumeToken.o() > 0) {
                                        var i = t.Yc.get(r);
                                        i && t.Yc.set(r, i.it(n.resumeToken, e))
                                    }
                                }
                                )),
                                n.Ht.forEach((function(e) {
                                    var n = t.Yc.get(e);
                                    if (n) {
                                        t.Yc.set(e, n.it(T.u, n.nt)),
                                        No(t, e);
                                        var r = new $(n.target,e,1,n.sequenceNumber);
                                        Oo(t, r)
                                    }
                                }
                                )),
                                t.Hc.ru(n)
                            }(t, r)] : [3, 10];
                        case 9:
                            s.sent(),
                            s.label = 10;
                        case 10:
                            return [3, 13];
                        case 11:
                            return l("RemoteStore", "Failed to raise snapshot:", u = s.sent()),
                            [4, Lo(t, u)];
                        case 12:
                            return s.sent(),
                            [3, 13];
                        case 13:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Lo(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var i = this;
                    return Object(e.d)(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            if (!$n(n))
                                throw n;
                            return t.Xc.add(1),
                            [4, Io(t)];
                        case 1:
                            return o.sent(),
                            t.nu.set("Offline"),
                            r || (r = function() {
                                return Xi(t.Gc)
                            }
                            ),
                            t.hs.Cs((function() {
                                return Object(e.b)(i, void 0, void 0, (function() {
                                    return Object(e.d)(this, (function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return l("RemoteStore", "Retrying IndexedDB access"),
                                            [4, r()];
                                        case 1:
                                            return e.sent(),
                                            t.Xc.delete(1),
                                            [4, wo(t)];
                                        case 2:
                                            return e.sent(),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            )),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Vo(t, e) {
                return e().catch((function(n) {
                    return Lo(t, n, e)
                }
                ))
            }
            function Ro(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var n, r, i, o, u;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            n = m(t),
                            r = Ko(n),
                            i = n.Jc.length > 0 ? n.Jc[n.Jc.length - 1].batchId : -1,
                            e.label = 1;
                        case 1:
                            if (!function(t) {
                                return So(t) && t.Jc.length < 10
                            }(n))
                                return [3, 7];
                            e.label = 2;
                        case 2:
                            return e.trys.push([2, 4, , 6]),
                            [4, $i(n.Gc, i)];
                        case 3:
                            return null === (o = e.sent()) ? (0 === n.Jc.length && r.fc(),
                            [3, 7]) : (i = o.batchId,
                            function(t, e) {
                                t.Jc.push(e);
                                var n = Ko(t);
                                n.uc() && n.Dc && n.Cc(e.mutations)
                            }(n, o),
                            [3, 6]);
                        case 4:
                            return u = e.sent(),
                            [4, Lo(n, u)];
                        case 5:
                            return e.sent(),
                            [3, 6];
                        case 6:
                            return [3, 1];
                        case 7:
                            return Co(n) && Uo(n),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Co(t) {
                return So(t) && !Ko(t).cc() && t.Jc.length > 0
            }
            function Uo(t) {
                Ko(t).start()
            }
            function Mo(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    return Object(e.d)(this, (function(e) {
                        return Ko(t).Fc(),
                        [2]
                    }
                    ))
                }
                ))
            }
            function qo(t) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var n, r, i, o;
                    return Object(e.d)(this, (function(e) {
                        for (n = Ko(t),
                        r = 0,
                        i = t.Jc; r < i.length; r++)
                            o = i[r],
                            n.Cc(o.mutations);
                        return [2]
                    }
                    ))
                }
                ))
            }
            function Fo(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var i, o;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return i = t.Jc.shift(),
                            o = jr.from(i, n, r),
                            [4, Vo(t, (function() {
                                return t.Hc.ou(o)
                            }
                            ))];
                        case 1:
                            return e.sent(),
                            [4, Ro(t)];
                        case 2:
                            return e.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Go(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    return Object(e.d)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return n && Ko(t).Dc ? [4, function(t, n) {
                                return Object(e.b)(this, void 0, void 0, (function() {
                                    var r, i;
                                    return Object(e.d)(this, (function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return tt(i = n.code) && i !== a.ABORTED ? (r = t.Jc.shift(),
                                            Ko(t)._c(),
                                            [4, Vo(t, (function() {
                                                return t.Hc.au(r.batchId, n)
                                            }
                                            ))]) : [3, 3];
                                        case 1:
                                            return e.sent(),
                                            [4, Ro(t)];
                                        case 2:
                                            e.sent(),
                                            e.label = 3;
                                        case 3:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }(t, n)] : [3, 2];
                        case 1:
                            r.sent(),
                            r.label = 2;
                        case 2:
                            return Co(t) && Uo(t),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Bo(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return r = m(t),
                            n ? (r.Xc.delete(2),
                            [4, wo(r)]) : [3, 2];
                        case 1:
                            return e.sent(),
                            [3, 5];
                        case 2:
                            return n ? [3, 4] : (r.Xc.add(2),
                            [4, Io(r)]);
                        case 3:
                            e.sent(),
                            r.nu.set("Unknown"),
                            e.label = 4;
                        case 4:
                            e.label = 5;
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function zo(t) {
                var n = this;
                return t.hu || (t.hu = function(t, e, n) {
                    var r = m(t);
                    return r.Oc(),
                    new vo(e,r.rc,r.credentials,r.serializer,n)
                }(t.zc, t.hs, {
                    gc: xo.bind(null, t),
                    Ic: ko.bind(null, t),
                    yc: Po.bind(null, t)
                }),
                t.Zc.push((function(r) {
                    return Object(e.b)(n, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return r ? (t.hu._c(),
                                Do(t) ? Ao(t) : t.nu.set("Unknown"),
                                [3, 3]) : [3, 1];
                            case 1:
                                return [4, t.hu.stop()];
                            case 2:
                                e.sent(),
                                jo(t),
                                e.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))),
                t.hu
            }
            function Ko(t) {
                var n = this;
                return t.cu || (t.cu = function(t, e, n) {
                    var r = m(t);
                    return r.Oc(),
                    new yo(e,r.rc,r.credentials,r.serializer,n)
                }(t.zc, t.hs, {
                    gc: Mo.bind(null, t),
                    Ic: Go.bind(null, t),
                    xc: qo.bind(null, t),
                    Nc: Fo.bind(null, t)
                }),
                t.Zc.push((function(r) {
                    return Object(e.b)(n, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return r ? (t.cu._c(),
                                [4, Ro(t)]) : [3, 2];
                            case 1:
                                return e.sent(),
                                [3, 4];
                            case 2:
                                return [4, t.cu.stop()];
                            case 3:
                                e.sent(),
                                t.Jc.length > 0 && (l("RemoteStore", "Stopping write stream with " + t.Jc.length + " pending writes"),
                                t.Jc = []),
                                e.label = 4;
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))),
                t.cu
            }
            var Wo = function(t) {
                this.key = t
            }
              , Qo = function(t) {
                this.key = t
            }
              , Yo = function() {
                function t(t, e) {
                    this.query = t,
                    this.uu = e,
                    this.lu = null,
                    this.te = !1,
                    this._u = dt(),
                    this.Qt = dt(),
                    this.fu = Sn(t),
                    this.du = new gt(this.fu)
                }
                return Object.defineProperty(t.prototype, "wu", {
                    get: function() {
                        return this.uu
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.Eu = function(t, e) {
                    var n = this
                      , r = e ? e.Tu : new mt
                      , i = e ? e.du : this.du
                      , o = e ? e.Qt : this.Qt
                      , u = i
                      , s = !1
                      , a = vn(this.query) && i.size === this.query.limit ? i.last() : null
                      , c = yn(this.query) && i.size === this.query.limit ? i.first() : null;
                    if (t.ut((function(t, e) {
                        var h = i.get(t)
                          , f = e instanceof cn ? e : null;
                        f && (f = Dn(n.query, f) ? f : null);
                        var l = !!h && n.Qt.has(h.key)
                          , p = !!f && (f.Ye || n.Qt.has(f.key) && f.hasCommittedMutations)
                          , d = !1;
                        h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
                            type: 3,
                            doc: f
                        }),
                        d = !0) : n.Iu(h, f) || (r.track({
                            type: 2,
                            doc: f
                        }),
                        d = !0,
                        (a && n.fu(f, a) > 0 || c && n.fu(f, c) < 0) && (s = !0)) : !h && f ? (r.track({
                            type: 0,
                            doc: f
                        }),
                        d = !0) : h && !f && (r.track({
                            type: 1,
                            doc: h
                        }),
                        d = !0,
                        (a || c) && (s = !0)),
                        d && (f ? (u = u.add(f),
                        o = p ? o.add(t) : o.delete(t)) : (u = u.delete(t),
                        o = o.delete(t)))
                    }
                    )),
                    vn(this.query) || yn(this.query))
                        for (; u.size > this.query.limit; ) {
                            var h = vn(this.query) ? u.last() : u.first();
                            u = u.delete(h.key),
                            o = o.delete(h.key),
                            r.track({
                                type: 1,
                                doc: h
                            })
                        }
                    return {
                        du: u,
                        Tu: r,
                        mu: s,
                        Qt: o
                    }
                }
                ,
                t.prototype.Iu = function(t, e) {
                    return t.Ye && e.hasCommittedMutations && !e.Ye
                }
                ,
                t.prototype.Vr = function(t, e, n) {
                    var r = this
                      , i = this.du;
                    this.du = t.du,
                    this.Qt = t.Qt;
                    var o = t.Tu.Ut();
                    o.sort((function(t, e) {
                        return function(t, e) {
                            var n = function(t) {
                                switch (t) {
                                case 0:
                                    return 1;
                                case 2:
                                case 3:
                                    return 2;
                                case 1:
                                    return 0;
                                default:
                                    return y()
                                }
                            };
                            return n(t) - n(e)
                        }(t.type, e.type) || r.fu(t.doc, e.doc)
                    }
                    )),
                    this.Au(n);
                    var u = e ? this.Ru() : []
                      , s = 0 === this._u.size && this.te ? 1 : 0
                      , a = s !== this.lu;
                    return this.lu = s,
                    0 !== o.length || a ? {
                        snapshot: new bt(this.query,t.du,i,o,t.Qt,0 === s,a,!1),
                        Pu: u
                    } : {
                        Pu: u
                    }
                }
                ,
                t.prototype.Ks = function(t) {
                    return this.te && "Offline" === t ? (this.te = !1,
                    this.Vr({
                        du: this.du,
                        Tu: new mt,
                        Qt: this.Qt,
                        mu: !1
                    }, !1)) : {
                        Pu: []
                    }
                }
                ,
                t.prototype.gu = function(t) {
                    return !this.uu.has(t) && !!this.du.has(t) && !this.du.get(t).Ye
                }
                ,
                t.prototype.Au = function(t) {
                    var e = this;
                    t && (t.ee.forEach((function(t) {
                        return e.uu = e.uu.add(t)
                    }
                    )),
                    t.ne.forEach((function(t) {}
                    )),
                    t.se.forEach((function(t) {
                        return e.uu = e.uu.delete(t)
                    }
                    )),
                    this.te = t.te)
                }
                ,
                t.prototype.Ru = function() {
                    var t = this;
                    if (!this.te)
                        return [];
                    var e = this._u;
                    this._u = dt(),
                    this.du.forEach((function(e) {
                        t.gu(e.key) && (t._u = t._u.add(e.key))
                    }
                    ));
                    var n = [];
                    return e.forEach((function(e) {
                        t._u.has(e) || n.push(new Qo(e))
                    }
                    )),
                    this._u.forEach((function(t) {
                        e.has(t) || n.push(new Wo(t))
                    }
                    )),
                    n
                }
                ,
                t.prototype.Vu = function(t) {
                    this.uu = t.Fh,
                    this._u = dt();
                    var e = this.Eu(t.documents);
                    return this.Vr(e, !0)
                }
                ,
                t.prototype.yu = function() {
                    return bt.Gt(this.query, this.du, this.Qt, 0 === this.lu)
                }
                ,
                t
            }()
              , Ho = function(t, e, n) {
                this.query = t,
                this.targetId = e,
                this.view = n
            }
              , Xo = function(t) {
                this.key = t,
                this.pu = !1
            }
              , Jo = function() {
                function t(t, e, n, r, i, o) {
                    this.Gc = t,
                    this.bu = e,
                    this.vu = n,
                    this.Su = r,
                    this.currentUser = i,
                    this.Du = o,
                    this.Cu = {},
                    this.Nu = new L((function(t) {
                        return Nn(t)
                    }
                    ),On),
                    this.xu = new Map,
                    this.Fu = [],
                    this.ku = new nt(F.D),
                    this.Ou = new Map,
                    this.Mu = new uo,
                    this.$u = {},
                    this.Lu = new Map,
                    this.Bu = Vi.da(),
                    this.onlineState = "Unknown",
                    this.qu = void 0
                }
                return Object.defineProperty(t.prototype, "Uu", {
                    get: function() {
                        return !0 === this.qu
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t
            }();
            function $o(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i, o, u, s, a;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return r = Tu(t),
                            (u = r.Nu.get(n)) ? (i = u.targetId,
                            r.Su.$i(i),
                            o = u.view.yu(),
                            [3, 4]) : [3, 1];
                        case 1:
                            return [4, Zi(r.Gc, In(n))];
                        case 2:
                            return s = e.sent(),
                            a = r.Su.$i(s.targetId),
                            i = s.targetId,
                            [4, Zo(r, n, i, "current" === a)];
                        case 3:
                            o = e.sent(),
                            r.Uu && _o(r.bu, s),
                            e.label = 4;
                        case 4:
                            return [2, o]
                        }
                    }
                    ))
                }
                ))
            }
            function Zo(t, n, r, i) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var o, u, s, a, c, h;
                    return Object(e.d)(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            return t.Ku = function(n, r, i) {
                                return function(t, n, r, i) {
                                    return Object(e.b)(this, void 0, void 0, (function() {
                                        var o, u, s;
                                        return Object(e.d)(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return (o = n.view.Eu(r)).mu ? [4, eo(t.Gc, n.query, !1).then((function(t) {
                                                    var e = t.documents;
                                                    return n.view.Eu(e, o)
                                                }
                                                ))] : [3, 2];
                                            case 1:
                                                o = e.sent(),
                                                e.label = 2;
                                            case 2:
                                                return u = i && i.zt.get(n.targetId),
                                                s = n.view.Vr(o, t.Uu, u),
                                                [2, (hu(t, n.targetId, s.Pu),
                                                s.snapshot)]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }(t, n, r, i)
                            }
                            ,
                            [4, eo(t.Gc, n, !0)];
                        case 1:
                            return o = f.sent(),
                            u = new Yo(n,o.Fh),
                            s = u.Eu(o.documents),
                            a = It.Zt(r, i && "Offline" !== t.onlineState),
                            c = u.Vr(s, t.Uu, a),
                            hu(t, r, c.Pu),
                            h = new Ho(n,r,u),
                            [2, (t.Nu.set(n, h),
                            t.xu.has(r) ? t.xu.get(r).push(n) : t.xu.set(r, [n]),
                            c.snapshot)]
                        }
                    }
                    ))
                }
                ))
            }
            function tu(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i, o;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return r = m(t),
                            i = r.Nu.get(n),
                            (o = r.xu.get(i.targetId)).length > 1 ? [2, (r.xu.set(i.targetId, o.filter((function(t) {
                                return !On(t, n)
                            }
                            ))),
                            void r.Nu.delete(n))] : r.Uu ? (r.Su.Bi(i.targetId),
                            r.Su.xi(i.targetId) ? [3, 2] : [4, to(r.Gc, i.targetId, !1).then((function() {
                                r.Su.Ui(i.targetId),
                                To(r.bu, i.targetId),
                                au(r, i.targetId)
                            }
                            )).catch(oo)]) : [3, 3];
                        case 1:
                            e.sent(),
                            e.label = 2;
                        case 2:
                            return [3, 5];
                        case 3:
                            return au(r, i.targetId),
                            [4, to(r.Gc, i.targetId, !0)];
                        case 4:
                            e.sent(),
                            e.label = 5;
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function eu(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            r = m(t),
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 4, , 6]),
                            [4, Ji(r.Gc, n)];
                        case 2:
                            return i = e.sent(),
                            n.zt.forEach((function(t, e) {
                                var n = r.Ou.get(e);
                                n && (g(t.ee.size + t.ne.size + t.se.size <= 1),
                                t.ee.size > 0 ? n.pu = !0 : t.ne.size > 0 ? g(n.pu) : t.se.size > 0 && (g(n.pu),
                                n.pu = !1))
                            }
                            )),
                            [4, pu(r, i, n)];
                        case 3:
                            return e.sent(),
                            [3, 6];
                        case 4:
                            return [4, oo(e.sent())];
                        case 5:
                            return e.sent(),
                            [3, 6];
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function nu(t, e, n) {
                var r = m(t);
                if (r.Uu && 0 === n || !r.Uu && 1 === n) {
                    var i = [];
                    r.Nu.forEach((function(t, n) {
                        var r = n.view.Ks(e);
                        r.snapshot && i.push(r.snapshot)
                    }
                    )),
                    function(t, e) {
                        var n = m(t);
                        n.onlineState = e;
                        var r = !1;
                        n.Bs.forEach((function(t, n) {
                            for (var i = 0, o = n.listeners; i < o.length; i++)
                                o[i].Ks(e) && (r = !0)
                        }
                        )),
                        r && vr(n)
                    }(r.vu, e),
                    i.length && r.Cu.yc(i),
                    r.onlineState = e,
                    r.Uu && r.Su.ji(e)
                }
            }
            function ru(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var i, o, u, s, a, c;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return (i = m(t)).Su.Ki(n, "rejected", r),
                            o = i.Ou.get(n),
                            (u = o && o.key) ? (s = (s = new nt(F.D)).ot(u, new hn(u,R.min())),
                            a = dt().add(u),
                            c = new wt(R.min(),new Map,new ot(I),s,a),
                            [4, eu(i, c)]) : [3, 2];
                        case 1:
                            return e.sent(),
                            i.ku = i.ku.remove(u),
                            i.Ou.delete(n),
                            lu(i),
                            [3, 4];
                        case 2:
                            return [4, to(i.Gc, n, !1).then((function() {
                                return au(i, n, r)
                            }
                            )).catch(oo)];
                        case 3:
                            e.sent(),
                            e.label = 4;
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function iu(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i, o;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            r = m(t),
                            i = n.batch.batchId,
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 4, , 6]),
                            [4, Hi(r.Gc, n)];
                        case 2:
                            return o = e.sent(),
                            su(r, i, null),
                            uu(r, i),
                            r.Su.Oi(i, "acknowledged"),
                            [4, pu(r, o)];
                        case 3:
                            return e.sent(),
                            [3, 6];
                        case 4:
                            return [4, oo(e.sent())];
                        case 5:
                            return e.sent(),
                            [3, 6];
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function ou(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var i, o;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            i = m(t),
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 4, , 6]),
                            [4, function(t, e) {
                                var n = m(t);
                                return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                                    var r;
                                    return n.Sr.$o(t, e).next((function(e) {
                                        return g(null !== e),
                                        r = e.keys(),
                                        n.Sr.Qo(t, e)
                                    }
                                    )).next((function() {
                                        return n.Sr.zo(t)
                                    }
                                    )).next((function() {
                                        return n.Nh.Or(t, r)
                                    }
                                    ))
                                }
                                ))
                            }(i.Gc, n)];
                        case 2:
                            return o = e.sent(),
                            su(i, n, r),
                            uu(i, n),
                            i.Su.Oi(n, "rejected", r),
                            [4, pu(i, o)];
                        case 3:
                            return e.sent(),
                            [3, 6];
                        case 4:
                            return [4, oo(e.sent())];
                        case 5:
                            return e.sent(),
                            [3, 6];
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function uu(t, e) {
                (t.Lu.get(e) || []).forEach((function(t) {
                    t.resolve()
                }
                )),
                t.Lu.delete(e)
            }
            function su(t, e, n) {
                var r = m(t)
                  , i = r.$u[r.currentUser.ti()];
                if (i) {
                    var o = i.get(e);
                    o && (n ? o.reject(n) : o.resolve(),
                    i = i.remove(e)),
                    r.$u[r.currentUser.ti()] = i
                }
            }
            function au(t, e, n) {
                void 0 === n && (n = null),
                t.Su.Bi(e);
                for (var r = 0, i = t.xu.get(e); r < i.length; r++) {
                    var o = i[r];
                    t.Nu.delete(o),
                    n && t.Cu.Qu(o, n)
                }
                t.xu.delete(e),
                t.Uu && t.Mu.Kh(e).forEach((function(e) {
                    t.Mu.Ho(e) || cu(t, e)
                }
                ))
            }
            function cu(t, e) {
                var n = t.ku.get(e);
                null !== n && (To(t.bu, n),
                t.ku = t.ku.remove(e),
                t.Ou.delete(n),
                lu(t))
            }
            function hu(t, e, n) {
                for (var r = 0, i = n; r < i.length; r++) {
                    var o = i[r];
                    o instanceof Wo ? (t.Mu.Da(o.key, e),
                    fu(t, o)) : o instanceof Qo ? (l("SyncEngine", "Document no longer in limbo: " + o.key),
                    t.Mu.Na(o.key, e),
                    t.Mu.Ho(o.key) || cu(t, o.key)) : y()
                }
            }
            function fu(t, e) {
                var n = e.key;
                t.ku.get(n) || (l("SyncEngine", "New document in limbo: " + n),
                t.Fu.push(n),
                lu(t))
            }
            function lu(t) {
                for (; t.Fu.length > 0 && t.ku.size < t.Du; ) {
                    var e = t.Fu.shift()
                      , n = t.Bu.next();
                    t.Ou.set(n, new Xo(e)),
                    t.ku = t.ku.ot(e, n),
                    _o(t.bu, new $(In(dn(e.path)),n,2,mr.ai))
                }
            }
            function pu(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var i, o, u, s;
                    return Object(e.d)(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return i = m(t),
                            o = [],
                            u = [],
                            s = [],
                            i.Nu.P() ? [3, 3] : (i.Nu.forEach((function(t, e) {
                                s.push(i.Ku(e, n, r).then((function(t) {
                                    if (t) {
                                        i.Uu && i.Su.Ki(e.targetId, t.fromCache ? "not-current" : "current"),
                                        o.push(t);
                                        var n = Vr.zr(e.targetId, t);
                                        u.push(n)
                                    }
                                }
                                )))
                            }
                            )),
                            [4, Promise.all(s)]);
                        case 1:
                            return a.sent(),
                            i.Cu.yc(o),
                            [4, function(t, n) {
                                return Object(e.b)(this, void 0, void 0, (function() {
                                    var r, i, o, u, s, a, c, h, f;
                                    return Object(e.d)(this, (function(e) {
                                        switch (e.label) {
                                        case 0:
                                            r = m(t),
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]),
                                            [4, r.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                                return Yn.forEach(n, (function(e) {
                                                    return Yn.forEach(e.jr, (function(n) {
                                                        return r.persistence.No.Da(t, e.targetId, n)
                                                    }
                                                    )).next((function() {
                                                        return Yn.forEach(e.Gr, (function(n) {
                                                            return r.persistence.No.Na(t, e.targetId, n)
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                }
                                                ))
                                            }
                                            ))];
                                        case 2:
                                            return e.sent(),
                                            [3, 4];
                                        case 3:
                                            if (!$n(i = e.sent()))
                                                throw i;
                                            return l("LocalStore", "Failed to update sequence numbers: " + i),
                                            [3, 4];
                                        case 4:
                                            for (o = 0,
                                            u = n; o < u.length; o++)
                                                s = u[o],
                                                a = s.targetId,
                                                s.fromCache || (c = r.bh.get(a),
                                                h = c.nt,
                                                f = c.rt(h),
                                                r.bh = r.bh.ot(a, f));
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }(i.Gc, u)];
                        case 2:
                            a.sent(),
                            a.label = 3;
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function du(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i;
                    return Object(e.d)(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return (r = m(t)).currentUser.isEqual(n) ? [3, 3] : (l("SyncEngine", "User change. New user:", n.ti()),
                            [4, function(t, n) {
                                return Object(e.b)(this, void 0, void 0, (function() {
                                    var r, i, o, u;
                                    return Object(e.d)(this, (function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return r = m(t),
                                            i = r.Sr,
                                            o = r.Nh,
                                            [4, r.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                                                var e;
                                                return r.Sr.Uo(t).next((function(u) {
                                                    return e = u,
                                                    i = r.persistence.Th(n),
                                                    o = new Lr(r.Ch,i,r.persistence.Ah()),
                                                    i.Uo(t)
                                                }
                                                )).next((function(n) {
                                                    for (var r = [], i = [], u = dt(), s = 0, a = e; s < a.length; s++) {
                                                        var c = a[s];
                                                        r.push(c.batchId);
                                                        for (var h = 0, f = c.mutations; h < f.length; h++) {
                                                            var l = f[h];
                                                            u = u.add(l.key)
                                                        }
                                                    }
                                                    for (var p = 0, d = n; p < d.length; p++) {
                                                        var v = d[p];
                                                        i.push(v.batchId);
                                                        for (var y = 0, g = v.mutations; y < g.length; y++) {
                                                            var m = g[y];
                                                            u = u.add(m.key)
                                                        }
                                                    }
                                                    return o.Or(t, u).next((function(t) {
                                                        return {
                                                            Wu: t,
                                                            ju: r,
                                                            Gu: i
                                                        }
                                                    }
                                                    ))
                                                }
                                                ))
                                            }
                                            ))];
                                        case 1:
                                            return u = e.sent(),
                                            [2, (r.Sr = i,
                                            r.Nh = o,
                                            r.ph.xh(r.Nh),
                                            u)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }(r.Gc, n)]);
                        case 1:
                            return i = o.sent(),
                            r.currentUser = n,
                            function(t, e) {
                                t.Lu.forEach((function(t) {
                                    t.forEach((function(t) {
                                        t.reject(new c(a.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))
                                    }
                                    ))
                                }
                                )),
                                t.Lu.clear()
                            }(r),
                            r.Su.Wi(n, i.ju, i.Gu),
                            [4, pu(r, i.Wu)];
                        case 2:
                            o.sent(),
                            o.label = 3;
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function vu(t, e) {
                var n = m(t)
                  , r = n.Ou.get(e);
                if (r && r.pu)
                    return dt().add(r.key);
                var i = dt()
                  , o = n.xu.get(e);
                if (!o)
                    return i;
                for (var u = 0, s = o; u < s.length; u++) {
                    var a = s[u]
                      , c = n.Nu.get(a);
                    i = i.Ot(c.view.wu)
                }
                return i
            }
            function yu(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i, o;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, eo((r = m(t)).Gc, n.query, !0)];
                        case 1:
                            return i = e.sent(),
                            o = n.view.Vu(i),
                            [2, (r.Uu && hu(r, n.targetId, o.Pu),
                            o)]
                        }
                    }
                    ))
                }
                ))
            }
            function gu(t, n, r, i) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var o, u;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, function(t, e) {
                                var n = m(t)
                                  , r = m(n.Sr);
                                return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
                                    return r.Lo(t, e).next((function(e) {
                                        return e ? n.Nh.Or(t, e) : Yn.resolve(null)
                                    }
                                    ))
                                }
                                ))
                            }((o = m(t)).Gc, n)];
                        case 1:
                            return null === (u = e.sent()) ? [3, 6] : "pending" !== r ? [3, 3] : [4, Ro(o.bu)];
                        case 2:
                            return e.sent(),
                            [3, 4];
                        case 3:
                            "acknowledged" === r || "rejected" === r ? (su(o, n, i || null),
                            uu(o, n),
                            function(t, e) {
                                m(m(t).Sr).jo(e)
                            }(o.Gc, n)) : y(),
                            e.label = 4;
                        case 4:
                            return [4, pu(o, u)];
                        case 5:
                            return e.sent(),
                            [3, 7];
                        case 6:
                            l("SyncEngine", "Cannot apply mutation batch with id: " + n),
                            e.label = 7;
                        case 7:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function mu(t, n) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i, o, u, s, a, c, h;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return Tu(r = m(t)),
                            Ou(r),
                            !0 !== n || !0 === r.qu ? [3, 3] : (i = r.Su.Ci(),
                            [4, bu(r, i.L())]);
                        case 1:
                            return o = e.sent(),
                            r.qu = !0,
                            [4, Bo(r.bu, !0)];
                        case 2:
                            for (e.sent(),
                            u = 0,
                            s = o; u < s.length; u++)
                                a = s[u],
                                _o(r.bu, a);
                            return [3, 7];
                        case 3:
                            return !1 !== n || !1 === r.qu ? [3, 7] : (c = [],
                            h = Promise.resolve(),
                            r.xu.forEach((function(t, e) {
                                r.Su.qi(e) ? c.push(e) : h = h.then((function() {
                                    return au(r, e),
                                    to(r.Gc, e, !0)
                                }
                                )),
                                To(r.bu, e)
                            }
                            )),
                            [4, h]);
                        case 4:
                            return e.sent(),
                            [4, bu(r, c)];
                        case 5:
                            return e.sent(),
                            function(t) {
                                var e = m(t);
                                e.Ou.forEach((function(t, n) {
                                    To(e.bu, n)
                                }
                                )),
                                e.Mu.Qh(),
                                e.Ou = new Map,
                                e.ku = new nt(F.D)
                            }(r),
                            r.qu = !1,
                            [4, Bo(r.bu, !1)];
                        case 6:
                            e.sent(),
                            e.label = 7;
                        case 7:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function bu(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var r, i, o, u, s, a, c, h, f, l, p, d, v, y;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            r = m(t),
                            i = [],
                            o = [],
                            u = 0,
                            s = n,
                            e.label = 1;
                        case 1:
                            return u < s.length ? (a = s[u],
                            c = void 0,
                            (h = r.xu.get(a)) && 0 !== h.length ? [4, Zi(r.Gc, In(h[0]))] : [3, 7]) : [3, 13];
                        case 2:
                            c = e.sent(),
                            f = 0,
                            l = h,
                            e.label = 3;
                        case 3:
                            return f < l.length ? (p = l[f],
                            d = r.Nu.get(p),
                            [4, yu(r, d)]) : [3, 6];
                        case 4:
                            (v = e.sent()).snapshot && o.push(v.snapshot),
                            e.label = 5;
                        case 5:
                            return f++,
                            [3, 3];
                        case 6:
                            return [3, 11];
                        case 7:
                            return [4, no(r.Gc, a)];
                        case 8:
                            return y = e.sent(),
                            [4, Zi(r.Gc, y)];
                        case 9:
                            return c = e.sent(),
                            [4, Zo(r, wu(y), a, !1)];
                        case 10:
                            e.sent(),
                            e.label = 11;
                        case 11:
                            i.push(c),
                            e.label = 12;
                        case 12:
                            return u++,
                            [3, 1];
                        case 13:
                            return [2, (r.Cu.yc(o),
                            i)]
                        }
                    }
                    ))
                }
                ))
            }
            function wu(t) {
                return pn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt)
            }
            function Iu(t) {
                var e = m(t);
                return m(m(e.Gc).persistence).pi()
            }
            function Eu(t, n, r, i) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var o, u, s;
                    return Object(e.d)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return (o = m(t)).qu ? (l("SyncEngine", "Ignoring unexpected query state notification."),
                            [3, 8]) : [3, 1];
                        case 1:
                            if (!o.xu.has(n))
                                return [3, 8];
                            switch (r) {
                            case "current":
                            case "not-current":
                                return [3, 2];
                            case "rejected":
                                return [3, 5]
                            }
                            return [3, 7];
                        case 2:
                            return [4, ro(o.Gc)];
                        case 3:
                            return u = e.sent(),
                            s = wt.Xt(n, "current" === r),
                            [4, pu(o, u, s)];
                        case 4:
                            return e.sent(),
                            [3, 8];
                        case 5:
                            return [4, to(o.Gc, n, !0)];
                        case 6:
                            return e.sent(),
                            au(o, n, i),
                            [3, 8];
                        case 7:
                            y(),
                            e.label = 8;
                        case 8:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function _u(t, n, r) {
                return Object(e.b)(this, void 0, void 0, (function() {
                    var i, o, u, s, a, c, h, f, p, d;
                    return Object(e.d)(this, (function(v) {
                        switch (v.label) {
                        case 0:
                            if (!(i = Tu(t)).qu)
                                return [3, 10];
                            o = 0,
                            u = n,
                            v.label = 1;
                        case 1:
                            return o < u.length ? (s = u[o],
                            i.xu.has(s) ? (l("SyncEngine", "Adding an already active target " + s),
                            [3, 5]) : [4, no(i.Gc, s)]) : [3, 6];
                        case 2:
                            return a = v.sent(),
                            [4, Zi(i.Gc, a)];
                        case 3:
                            return c = v.sent(),
                            [4, Zo(i, wu(a), c.targetId, !1)];
                        case 4:
                            v.sent(),
                            _o(i.bu, c),
                            v.label = 5;
                        case 5:
                            return o++,
                            [3, 1];
                        case 6:
                            h = function(t) {
                                return Object(e.d)(this, (function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return i.xu.has(t) ? [4, to(i.Gc, t, !1).then((function() {
                                            To(i.bu, t),
                                            au(i, t)
                                        }
                                        )).catch(oo)] : [3, 2];
                                    case 1:
                                        e.sent(),
                                        e.label = 2;
                                    case 2:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ,
                            f = 0,
                            p = r,
                            v.label = 7;
                        case 7:
                            return f < p.length ? (d = p[f],
                            [5, h(d)]) : [3, 10];
                        case 8:
                            v.sent(),
                            v.label = 9;
                        case 9:
                            return f++,
                            [3, 7];
                        case 10:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Tu(t) {
                var e = m(t);
                return e.bu.Hc.ru = eu.bind(null, e),
                e.bu.Hc.qe = vu.bind(null, e),
                e.bu.Hc.iu = ru.bind(null, e),
                e.Cu.yc = pr.bind(null, e.vu),
                e.Cu.Qu = dr.bind(null, e.vu),
                e
            }
            function Ou(t) {
                var e = m(t);
                return e.bu.Hc.ou = iu.bind(null, e),
                e.bu.Hc.au = ou.bind(null, e),
                e
            }
            var Nu = function() {
                function t() {}
                return t.prototype.xh = function(t) {
                    this.zu = t
                }
                ,
                t.prototype.Lr = function(t, e, n, r) {
                    var o = this;
                    return function(t) {
                        return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.on.length || 1 === t.on.length && t.on[0].field.W())
                    }(e) || n.isEqual(R.min()) ? this.Hu(t, e) : this.zu.Or(t, r).next((function(u) {
                        var s = o.Ju(e, u);
                        return (vn(e) || yn(e)) && o.mu(e.an, s, r, n) ? o.Hu(t, e) : (f() <= i.a.DEBUG && l("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), An(e)),
                        o.zu.Lr(t, e, n).next((function(t) {
                            return s.forEach((function(e) {
                                t = t.ot(e.key, e)
                            }
                            )),
                            t
                        }
                        )))
                    }
                    ))
                }
                ,
                t.prototype.Ju = function(t, e) {
                    var n = new ot(Sn(t));
                    return e.forEach((function(e, r) {
                        r instanceof cn && Dn(t, r) && (n = n.add(r))
                    }
                    )),
                    n
                }
                ,
                t.prototype.mu = function(t, e, n, r) {
                    if (n.size !== e.size)
                        return !0;
                    var i = "F" === t ? e.last() : e.first();
                    return !!i && (i.hasPendingWrites || i.version.h(r) > 0)
                }
                ,
                t.prototype.Hu = function(t, e) {
                    return f() <= i.a.DEBUG && l("IndexFreeQueryEngine", "Using full collection scan to execute query:", An(e)),
                    this.zu.Lr(t, e, R.min())
                }
                ,
                t
            }()
              , Au = function() {
                function t(t, e) {
                    this.Dr = t,
                    this.No = e,
                    this.Sr = [],
                    this.Yu = 1,
                    this.Xu = new ot(so.Mh)
                }
                return t.prototype.ko = function(t) {
                    return Yn.resolve(0 === this.Sr.length)
                }
                ,
                t.prototype.Oo = function(t, e, n, r) {
                    var i = this.Yu;
                    this.Yu++,
                    this.Sr.length > 0 && this.Sr[this.Sr.length - 1];
                    var o = new Sr(i,e,n,r);
                    this.Sr.push(o);
                    for (var u = 0, s = r; u < s.length; u++) {
                        var a = s[u];
                        this.Xu = this.Xu.add(new so(a.key,i)),
                        this.Dr.Mo(t, a.key.path.F())
                    }
                    return Yn.resolve(o)
                }
                ,
                t.prototype.$o = function(t, e) {
                    return Yn.resolve(this.Zu(e))
                }
                ,
                t.prototype.Bo = function(t, e) {
                    var n = e + 1
                      , r = this.tl(n)
                      , i = r < 0 ? 0 : r;
                    return Yn.resolve(this.Sr.length > i ? this.Sr[i] : null)
                }
                ,
                t.prototype.qo = function() {
                    return Yn.resolve(0 === this.Sr.length ? -1 : this.Yu - 1)
                }
                ,
                t.prototype.Uo = function(t) {
                    return Yn.resolve(this.Sr.slice())
                }
                ,
                t.prototype.Nr = function(t, e) {
                    var n = this
                      , r = new so(e,0)
                      , i = new so(e,Number.POSITIVE_INFINITY)
                      , o = [];
                    return this.Xu.xt([r, i], (function(t) {
                        var e = n.Zu(t.jh);
                        o.push(e)
                    }
                    )),
                    Yn.resolve(o)
                }
                ,
                t.prototype.$r = function(t, e) {
                    var n = this
                      , r = new ot(I);
                    return e.forEach((function(t) {
                        var e = new so(t,0)
                          , i = new so(t,Number.POSITIVE_INFINITY);
                        n.Xu.xt([e, i], (function(t) {
                            r = r.add(t.jh)
                        }
                        ))
                    }
                    )),
                    Yn.resolve(this.el(r))
                }
                ,
                t.prototype.Qr = function(t, e) {
                    var n = e.path
                      , r = n.length + 1
                      , i = n;
                    F.X(i) || (i = i.child(""));
                    var o = new so(new F(i),0)
                      , u = new ot(I);
                    return this.Xu.Ft((function(t) {
                        var e = t.key.path;
                        return !!n.M(e) && (e.length === r && (u = u.add(t.jh)),
                        !0)
                    }
                    ), o),
                    Yn.resolve(this.el(u))
                }
                ,
                t.prototype.el = function(t) {
                    var e = this
                      , n = [];
                    return t.forEach((function(t) {
                        var r = e.Zu(t);
                        null !== r && n.push(r)
                    }
                    )),
                    n
                }
                ,
                t.prototype.Qo = function(t, e) {
                    var n = this;
                    g(0 === this.nl(e.batchId, "removed")),
                    this.Sr.shift();
                    var r = this.Xu;
                    return Yn.forEach(e.mutations, (function(i) {
                        var o = new so(i.key,e.batchId);
                        return r = r.delete(o),
                        n.No.Go(t, i.key)
                    }
                    )).next((function() {
                        n.Xu = r
                    }
                    ))
                }
                ,
                t.prototype.jo = function(t) {}
                ,
                t.prototype.Ho = function(t, e) {
                    var n = new so(e,0)
                      , r = this.Xu.kt(n);
                    return Yn.resolve(e.isEqual(r && r.key))
                }
                ,
                t.prototype.zo = function(t) {
                    return this.Sr.length,
                    Yn.resolve()
                }
                ,
                t.prototype.nl = function(t, e) {
                    return this.tl(t)
                }
                ,
                t.prototype.tl = function(t) {
                    return 0 === this.Sr.length ? 0 : t - this.Sr[0].batchId
                }
                ,
                t.prototype.Zu = function(t) {
                    var e = this.tl(t);
                    return e < 0 || e >= this.Sr.length ? null : this.Sr[e]
                }
                ,
                t
            }()
              , Du = function() {
                function t(t, e) {
                    this.Dr = t,
                    this.sl = e,
                    this.docs = new nt(F.D),
                    this.size = 0
                }
                return t.prototype.Ir = function(t, e, n) {
                    var r = e.key
                      , i = this.docs.get(r)
                      , o = i ? i.size : 0
                      , u = this.sl(e);
                    return this.docs = this.docs.ot(r, {
                        ta: e,
                        size: u,
                        readTime: n
                    }),
                    this.size += u - o,
                    this.Dr.Mo(t, r.path.F())
                }
                ,
                t.prototype.Ar = function(t) {
                    var e = this.docs.get(t);
                    e && (this.docs = this.docs.remove(t),
                    this.size -= e.size)
                }
                ,
                t.prototype.Rr = function(t, e) {
                    var n = this.docs.get(e);
                    return Yn.resolve(n ? n.ta : null)
                }
                ,
                t.prototype.getEntries = function(t, e) {
                    var n = this
                      , r = ct();
                    return e.forEach((function(t) {
                        var e = n.docs.get(t);
                        r = r.ot(t, e ? e.ta : null)
                    }
                    )),
                    Yn.resolve(r)
                }
                ,
                t.prototype.Lr = function(t, e, n) {
                    for (var r = ft(), i = new F(e.path.child("")), o = this.docs.ft(i); o.At(); ) {
                        var u = o.It()
                          , s = u.key
                          , a = u.value
                          , c = a.ta
                          , h = a.readTime;
                        if (!e.path.M(s.path))
                            break;
                        h.h(n) <= 0 || c instanceof cn && Dn(e, c) && (r = r.ot(c.key, c))
                    }
                    return Yn.resolve(r)
                }
                ,
                t.prototype.il = function(t, e) {
                    return Yn.forEach(this.docs, (function(t) {
                        return e(t)
                    }
                    ))
                }
                ,
                t.prototype.ra = function(t) {
                    return new Su(this)
                }
                ,
                t.prototype.aa = function(t) {
                    return Yn.resolve(this.size)
                }
                ,
                t
            }()
              , Su = function(t) {
                function n(e) {
                    var n = this;
                    return (n = t.call(this) || this).ha = e,
                    n
                }
                return Object(e.c)(n, t),
                n.prototype.Vr = function(t) {
                    var e = this
                      , n = [];
                    return this.wr.forEach((function(r, i) {
                        i ? n.push(e.ha.Ir(t, i, e.readTime)) : e.ha.Ar(r)
                    }
                    )),
                    Yn.kn(n)
                }
                ,
                n.prototype.Pr = function(t, e) {
                    return this.ha.Rr(t, e)
                }
                ,
                n.prototype.gr = function(t, e) {
                    return this.ha.getEntries(t, e)
                }
                ,
                n
            }(xr)
              , ju = function() {
                function t(t) {
                    this.persistence = t,
                    this.rl = new L((function(t) {
                        return Q(t)
                    }
                    ),Y),
                    this.lastRemoteSnapshotVersion = R.min(),
                    this.highestTargetId = 0,
                    this.ol = 0,
                    this.al = new uo,
                    this.targetCount = 0,
                    this.hl = Vi.fa()
                }
                return t.prototype.Ce = function(t, e) {
                    return this.rl.forEach((function(t, n) {
                        return e(n)
                    }
                    )),
                    Yn.resolve()
                }
                ,
                t.prototype.Ia = function(t) {
                    return Yn.resolve(this.lastRemoteSnapshotVersion)
                }
                ,
                t.prototype.ma = function(t) {
                    return Yn.resolve(this.ol)
                }
                ,
                t.prototype.wa = function(t) {
                    return this.highestTargetId = this.hl.next(),
                    Yn.resolve(this.highestTargetId)
                }
                ,
                t.prototype.Aa = function(t, e, n) {
                    return n && (this.lastRemoteSnapshotVersion = n),
                    e > this.ol && (this.ol = e),
                    Yn.resolve()
                }
                ,
                t.prototype.Pa = function(t) {
                    this.rl.set(t.target, t);
                    var e = t.targetId;
                    e > this.highestTargetId && (this.hl = new Vi(e),
                    this.highestTargetId = e),
                    t.sequenceNumber > this.ol && (this.ol = t.sequenceNumber)
                }
                ,
                t.prototype.Ra = function(t, e) {
                    return this.Pa(e),
                    this.targetCount += 1,
                    Yn.resolve()
                }
                ,
                t.prototype.Va = function(t, e) {
                    return this.Pa(e),
                    Yn.resolve()
                }
                ,
                t.prototype.ya = function(t, e) {
                    return this.rl.delete(e.target),
                    this.al.Kh(e.targetId),
                    this.targetCount -= 1,
                    Yn.resolve()
                }
                ,
                t.prototype.po = function(t, e, n) {
                    var r = this
                      , i = 0
                      , o = [];
                    return this.rl.forEach((function(u, s) {
                        s.sequenceNumber <= e && null === n.get(s.targetId) && (r.rl.delete(u),
                        o.push(r.pa(t, s.targetId)),
                        i++)
                    }
                    )),
                    Yn.kn(o).next((function() {
                        return i
                    }
                    ))
                }
                ,
                t.prototype.ba = function(t) {
                    return Yn.resolve(this.targetCount)
                }
                ,
                t.prototype.va = function(t, e) {
                    var n = this.rl.get(e) || null;
                    return Yn.resolve(n)
                }
                ,
                t.prototype.Sa = function(t, e, n) {
                    return this.al.Bh(e, n),
                    Yn.resolve()
                }
                ,
                t.prototype.Ca = function(t, e, n) {
                    this.al.Uh(e, n);
                    var r = this.persistence.No
                      , i = [];
                    return r && e.forEach((function(e) {
                        i.push(r.Go(t, e))
                    }
                    )),
                    Yn.kn(i)
                }
                ,
                t.prototype.pa = function(t, e) {
                    return this.al.Kh(e),
                    Yn.resolve()
                }
                ,
                t.prototype.xa = function(t, e) {
                    var n = this.al.Wh(e);
                    return Yn.resolve(n)
                }
                ,
                t.prototype.Ho = function(t, e) {
                    return Yn.resolve(this.al.Ho(e))
                }
                ,
                t
            }()
              , xu = function() {
                function t(t) {
                    var e = this;
                    this.cl = {},
                    this.Ma = new mr(0),
                    this.$a = !1,
                    this.$a = !0,
                    this.No = t(this),
                    this.ja = new ju(this),
                    this.Dr = new di,
                    this.vr = function(t, n) {
                        return new Du(t,(function(t) {
                            return e.No.ul(t)
                        }
                        ))
                    }(this.Dr)
                }
                return t.prototype.start = function() {
                    return Promise.resolve()
                }
                ,
                t.prototype.Di = function() {
                    return this.$a = !1,
                    Promise.resolve()
                }
                ,
                Object.defineProperty(t.prototype, "Ii", {
                    get: function() {
                        return this.$a
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.Za = function() {}
                ,
                t.prototype.th = function() {}
                ,
                t.prototype.Ah = function() {
                    return this.Dr
                }
                ,
                t.prototype.Th = function(t) {
                    var e = this.cl[t.ti()];
                    return e || (e = new Au(this.Dr,this.No),
                    this.cl[t.ti()] = e),
                    e
                }
                ,
                t.prototype.Ih = function() {
                    return this.ja
                }
                ,
                t.prototype.mh = function() {
                    return this.vr
                }
                ,
                t.prototype.runTransaction = function(t, e, n) {
                    var r = this;
                    l("MemoryPersistence", "Starting transaction:", t);
                    var i = new ku(this.Ma.next());
                    return this.No.ll(),
                    n(i).next((function(t) {
                        return r.No._l(i).next((function() {
                            return t
                        }
                        ))
                    }
                    )).xn().then((function(t) {
                        return i.br(),
                        t
                    }
                    ))
                }
                ,
                t.prototype.fl = function(t, e) {
                    return Yn.On(Object.values(this.cl).map((function(n) {
                        return function() {
                            return n.Ho(t, e)
                        }
                    }
                    )))
                }
                ,
                t
            }()
              , ku = function(t) {
                function n(e) {
                    var n = this;
                    return (n = t.call(this) || this).Fa = e,
                    n
                }
                return Object(e.c)(n, t),
                n
            }(Pr)
              , Pu = function() {
                function t(t) {
                    this.persistence = t,
                    this.dl = new uo,
                    this.wl = null
                }
                return t.El = function(e) {
                    return new t(e)
                }
                ,
                Object.defineProperty(t.prototype, "Tl", {
                    get: function() {
                        if (this.wl)
                            return this.wl;
                        throw y()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.Da = function(t, e, n) {
                    return this.dl.Da(n, e),
                    this.Tl.delete(n.toString()),
                    Yn.resolve()
                }
                ,
                t.prototype.Na = function(t, e, n) {
                    return this.dl.Na(n, e),
                    this.Tl.add(n.toString()),
                    Yn.resolve()
                }
                ,
                t.prototype.Go = function(t, e) {
                    return this.Tl.add(e.toString()),
                    Yn.resolve()
                }
                ,
                t.prototype.removeTarget = function(t, e) {
                    var n = this;
                    this.dl.Kh(e.targetId).forEach((function(t) {
                        return n.Tl.add(t.toString())
                    }
                    ));
                    var r = this.persistence.Ih();
                    return r.xa(t, e.targetId).next((function(t) {
                        t.forEach((function(t) {
                            return n.Tl.add(t.toString())
                        }
                        ))
                    }
                    )).next((function() {
                        return r.ya(t, e)
                    }
                    ))
                }
                ,
                t.prototype.ll = function() {
                    this.wl = new Set
                }
                ,
                t.prototype._l = function(t) {
                    var e = this
                      , n = this.persistence.mh().ra();
                    return Yn.forEach(this.Tl, (function(r) {
                        var i = F.H(r);
                        return e.Il(t, i).next((function(t) {
                            t || n.Ar(i)
                        }
                        ))
                    }
                    )).next((function() {
                        return e.wl = null,
                        n.apply(t)
                    }
                    ))
                }
                ,
                t.prototype.yh = function(t, e) {
                    var n = this;
                    return this.Il(t, e).next((function(t) {
                        t ? n.Tl.delete(e.toString()) : n.Tl.add(e.toString())
                    }
                    ))
                }
                ,
                t.prototype.ul = function(t) {
                    return 0
                }
                ,
                t.prototype.Il = function(t, e) {
                    var n = this;
                    return Yn.On([function() {
                        return Yn.resolve(n.dl.Ho(e))
                    }
                    , function() {
                        return n.persistence.Ih().Ho(t, e)
                    }
                    , function() {
                        return n.persistence.fl(t, e)
                    }
                    ])
                }
                ,
                t
            }()
              , Lu = function() {
                function t(t) {
                    this.ml = t.ml,
                    this.Al = t.Al
                }
                return t.prototype.gc = function(t) {
                    this.Rl = t
                }
                ,
                t.prototype.Ic = function(t) {
                    this.Pl = t
                }
                ,
                t.prototype.onMessage = function(t) {
                    this.gl = t
                }
                ,
                t.prototype.close = function() {
                    this.Al()
                }
                ,
                t.prototype.send = function(t) {
                    this.ml(t)
                }
                ,
                t.prototype.Vl = function() {
                    this.Rl()
                }
                ,
                t.prototype.yl = function(t) {
                    this.Pl(t)
                }
                ,
                t.prototype.pl = function(t) {
                    this.gl(t)
                }
                ,
                t
            }()
              , Vu = {
                BatchGetDocuments: "batchGet",
                Commit: "commit",
                RunQuery: "runQuery"
            }
              , Ru = function(t) {
                function n(e) {
                    var n = this;
                    return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling,
                    n.T = e.T,
                    n
                }
                return Object(e.c)(n, t),
                n.prototype.Nl = function(t, e, n, r) {
                    return new Promise((function(i, o) {
                        var s = new u.d;
                        s.listenOnce(u.b.COMPLETE, (function() {
                            try {
                                switch (s.getLastErrorCode()) {
                                case u.a.NO_ERROR:
                                    var e = s.getResponseJson();
                                    l("Connection", "XHR received:", JSON.stringify(e)),
                                    i(e);
                                    break;
                                case u.a.TIMEOUT:
                                    l("Connection", 'RPC "' + t + '" timed out'),
                                    o(new c(a.DEADLINE_EXCEEDED,"Request time out"));
                                    break;
                                case u.a.HTTP_ERROR:
                                    var n = s.getStatus();
                                    if (l("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", s.getResponseText()),
                                    n > 0) {
                                        var r = s.getResponseJson().error;
                                        if (r && r.status && r.message) {
                                            var h = function(t) {
                                                var e = t.toLowerCase().replace("_", "-");
                                                return Object.values(a).indexOf(e) >= 0 ? e : a.UNKNOWN
                                            }(r.status);
                                            o(new c(h,r.message))
                                        } else
                                            o(new c(a.UNKNOWN,"Server responded with status " + s.getStatus()))
                                    } else
                                        o(new c(a.UNAVAILABLE,"Connection failed."));
                                    break;
                                default:
                                    y()
                                }
                            } finally {
                                l("Connection", 'RPC "' + t + '" completed.')
                            }
                        }
                        ));
                        var h = JSON.stringify(r);
                        s.send(e, "POST", h, n, 15)
                    }
                    ))
                }
                ,
                n.prototype.Vc = function(t, e) {
                    var n = [this.vl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"]
                      , r = Object(u.e)()
                      , i = {
                        httpSessionIdParam: "gsessionid",
                        initMessageHeaders: {},
                        messageUrlParams: {
                            database: "projects/" + this._.projectId + "/databases/" + this._.database
                        },
                        sendRawJson: !0,
                        supportsCrossDomainXhr: !0,
                        internalChannelParams: {
                            forwardChannelRequestTimeoutMs: 6e5
                        },
                        forceLongPolling: this.forceLongPolling,
                        detectBufferingProxy: this.T
                    };
                    this.Cl(i.initMessageHeaders, e),
                    Object(o.t)() || Object(o.w)() || Object(o.q)() || Object(o.s)() || Object(o.x)() || Object(o.p)() || (i.httpHeadersOverwriteParam = "$httpHeaders");
                    var s = n.join("");
                    l("Connection", "Creating WebChannel: " + s, i);
                    var h = r.createWebChannel(s, i)
                      , f = !1
                      , p = !1
                      , v = new Lu({
                        ml: function(t) {
                            p ? l("Connection", "Not sending because WebChannel is closed:", t) : (f || (l("Connection", "Opening WebChannel transport."),
                            h.open(),
                            f = !0),
                            l("Connection", "WebChannel sending:", t),
                            h.send(t))
                        },
                        Al: function() {
                            return h.close()
                        }
                    })
                      , y = function(t, e) {
                        h.listen(t, (function(t) {
                            try {
                                e(t)
                            } catch (t) {
                                setTimeout((function() {
                                    throw t
                                }
                                ), 0)
                            }
                        }
                        ))
                    };
                    return y(u.c.EventType.OPEN, (function() {
                        p || l("Connection", "WebChannel transport opened.")
                    }
                    )),
                    y(u.c.EventType.CLOSE, (function() {
                        p || (p = !0,
                        l("Connection", "WebChannel transport closed"),
                        v.yl())
                    }
                    )),
                    y(u.c.EventType.ERROR, (function(t) {
                        p || (p = !0,
                        d("Connection", "WebChannel transport errored:", t),
                        v.yl(new c(a.UNAVAILABLE,"The operation could not be completed")))
                    }
                    )),
                    y(u.c.EventType.MESSAGE, (function(t) {
                        var e;
                        if (!p) {
                            var n = t.data[0];
                            g(!!n);
                            var r = n
                              , i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                            if (i) {
                                l("Connection", "WebChannel received error:", i);
                                var o = i.status
                                  , u = function(t) {
                                    var e = X[t];
                                    if (void 0 !== e)
                                        return et(e)
                                }(o)
                                  , s = i.message;
                                void 0 === u && (u = a.INTERNAL,
                                s = "Unknown error status: " + o + " with message " + i.message),
                                p = !0,
                                v.yl(new c(u,s)),
                                h.close()
                            } else
                                l("Connection", "WebChannel received:", n),
                                v.pl(n)
                        }
                    }
                    )),
                    setTimeout((function() {
                        v.Vl()
                    }
                    ), 0),
                    v
                }
                ,
                n
            }(function() {
                function t(t) {
                    this.bl = t,
                    this._ = t._;
                    var e = t.ssl ? "https" : "http";
                    this.vl = e + "://" + t.host,
                    this.Sl = "projects/" + this._.projectId + "/databases/" + this._.database + "/documents"
                }
                return t.prototype.Mc = function(t, e, n, r) {
                    var i = this.Dl(t, e);
                    l("RestConnection", "Sending: ", i, n);
                    var o = {};
                    return this.Cl(o, r),
                    this.Nl(t, i, o, n).then((function(t) {
                        return l("RestConnection", "Received: ", t),
                        t
                    }
                    ), (function(e) {
                        throw d("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n),
                        e
                    }
                    ))
                }
                ,
                t.prototype.$c = function(t, e, n, r) {
                    return this.Mc(t, e, n, r)
                }
                ,
                t.prototype.Cl = function(t, e) {
                    if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.0.0",
                    t["Content-Type"] = "text/plain",
                    e)
                        for (var n in e.Gh)
                            e.Gh.hasOwnProperty(n) && (t[n] = e.Gh[n])
                }
                ,
                t.prototype.Dl = function(t, e) {
                    var n = Vu[t];
                    return this.vl + "/v1/" + e + ":" + n
                }
                ,
                t
            }())
              , Cu = function() {
                function t() {
                    var t = this;
                    this.xl = function() {
                        return t.Fl()
                    }
                    ,
                    this.kl = function() {
                        return t.Ol()
                    }
                    ,
                    this.Ml = [],
                    this.$l()
                }
                return t.prototype.eu = function(t) {
                    this.Ml.push(t)
                }
                ,
                t.prototype.Di = function() {
                    window.removeEventListener("online", this.xl),
                    window.removeEventListener("offline", this.kl)
                }
                ,
                t.prototype.$l = function() {
                    window.addEventListener("online", this.xl),
                    window.addEventListener("offline", this.kl)
                }
                ,
                t.prototype.Fl = function() {
                    l("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
                    for (var t = 0, e = this.Ml; t < e.length; t++)
                        (0,
                        e[t])(0)
                }
                ,
                t.prototype.Ol = function() {
                    l("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
                    for (var t = 0, e = this.Ml; t < e.length; t++)
                        (0,
                        e[t])(1)
                }
                ,
                t.Ln = function() {
                    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
                }
                ,
                t
            }()
              , Uu = function() {
                function t() {}
                return t.prototype.eu = function(t) {}
                ,
                t.prototype.Di = function() {}
                ,
                t
            }();
            function Mu(t) {
                return new Ht(t,!0)
            }
            var qu = function() {
                function t() {
                    this.synchronizeTabs = !1
                }
                return t.prototype.initialize = function(t) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return this.Su = this.Ll(t),
                                this.persistence = this.Bl(t),
                                [4, this.persistence.start()];
                            case 1:
                                return e.sent(),
                                this.ql = this.Ul(t),
                                this.Gc = this.Kl(t),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Ul = function(t) {
                    return null
                }
                ,
                t.prototype.Kl = function(t) {
                    return e = this.persistence,
                    n = new Nu,
                    r = t.Ql,
                    new Yi(e,n,r);
                    var e, n, r
                }
                ,
                t.prototype.Bl = function(t) {
                    return new xu(Pu.El)
                }
                ,
                t.prototype.Ll = function(t) {
                    return new Dr
                }
                ,
                t.prototype.terminate = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return this.ql && this.ql.stop(),
                                [4, this.Su.Di()];
                            case 1:
                                return t.sent(),
                                [4, this.persistence.Di()];
                            case 2:
                                return t.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }()
              , Fu = function(t) {
                function n(e, n, r) {
                    var i = this;
                    return (i = t.call(this) || this).Wl = e,
                    i.cacheSizeBytes = n,
                    i.forceOwnership = r,
                    i.synchronizeTabs = !1,
                    i
                }
                return Object(e.c)(n, t),
                n.prototype.initialize = function(n) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, t.prototype.initialize.call(this, n)];
                            case 1:
                                return e.sent(),
                                [4, io(this.Gc)];
                            case 2:
                                return e.sent(),
                                [4, this.Wl.initialize(this, n)];
                            case 3:
                                return e.sent(),
                                [4, Ou(this.Wl.fi)];
                            case 4:
                                return e.sent(),
                                [4, Ro(this.Wl.bu)];
                            case 5:
                                return e.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.Ul = function(t) {
                    var e = this.persistence.No.wo;
                    return new qr(e,t.hs)
                }
                ,
                n.prototype.Bl = function(t) {
                    var e = Qi(t.bl._, t.bl.persistenceKey)
                      , n = void 0 !== this.cacheSizeBytes ? Mr.ao(this.cacheSizeBytes) : Mr.fo
                      , r = Mu(t.bl._);
                    return new Gi(this.synchronizeTabs,e,t.clientId,n,t.hs,ir(),or(),r,this.Su,!!this.forceOwnership)
                }
                ,
                n.prototype.Ll = function(t) {
                    return new Dr
                }
                ,
                n
            }(qu)
              , Gu = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this, e, n, !1) || this).Wl = e,
                    r.cacheSizeBytes = n,
                    r.synchronizeTabs = !0,
                    r
                }
                return Object(e.c)(n, t),
                n.prototype.initialize = function(n) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var r, i = this;
                        return Object(e.d)(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, t.prototype.initialize.call(this, n)];
                            case 1:
                                return o.sent(),
                                r = this.Wl.fi,
                                this.Su instanceof Ar ? (this.Su.fi = {
                                    er: gu.bind(null, r),
                                    nr: Eu.bind(null, r),
                                    sr: _u.bind(null, r),
                                    pi: Iu.bind(null, r)
                                },
                                [4, this.Su.start()]) : [3, 3];
                            case 2:
                                o.sent(),
                                o.label = 3;
                            case 3:
                                return [4, this.persistence.Xa((function(t) {
                                    return Object(e.b)(i, void 0, void 0, (function() {
                                        return Object(e.d)(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return [4, mu(this.Wl.fi, t)];
                                            case 1:
                                                return e.sent(),
                                                this.ql && (t && !this.ql.Ii ? this.ql.start(this.Gc) : t || this.ql.stop()),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ))];
                            case 4:
                                return o.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n.prototype.Ll = function(t) {
                    var e = ir();
                    if (!Ar.Ln(e))
                        throw new c(a.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");
                    var n = Qi(t.bl._, t.bl.persistenceKey);
                    return new Ar(e,t.hs,n,t.clientId,t.Ql)
                }
                ,
                n
            }(Fu)
              , Bu = function() {
                function t() {}
                return t.prototype.initialize = function(t, n) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var r = this;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return this.Gc ? [3, 2] : (this.Gc = t.Gc,
                                this.Su = t.Su,
                                this.zc = this.jl(n),
                                this.bu = this.Gl(n),
                                this.vu = this.zl(n),
                                this.fi = this.Hl(n, !t.synchronizeTabs),
                                this.Su.di = function(t) {
                                    return nu(r.fi, t, 1)
                                }
                                ,
                                this.bu.Hc.Jl = du.bind(null, this.fi),
                                [4, Bo(this.bu, this.fi.Uu)]);
                            case 1:
                                e.sent(),
                                e.label = 2;
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.zl = function(t) {
                    return new hr
                }
                ,
                t.prototype.jl = function(t) {
                    var e, n = Mu(t.bl._), r = (e = t.bl,
                    new Ru(e));
                    return function(t, e, n) {
                        return new go(t,e,n)
                    }(t.credentials, r, n)
                }
                ,
                t.prototype.Gl = function(t) {
                    var e, n, r, i, o, u = this;
                    return e = this.Gc,
                    n = this.zc,
                    r = t.hs,
                    i = function(t) {
                        return nu(u.fi, t, 0)
                    }
                    ,
                    o = Cu.Ln() ? new Cu : new Uu,
                    new bo(e,n,r,i,o)
                }
                ,
                t.prototype.Hl = function(t, e) {
                    return function(t, e, n, r, i, o, u) {
                        var s = new Jo(t,e,n,r,i,o);
                        return u && (s.qu = !0),
                        s
                    }(this.Gc, this.bu, this.vu, this.Su, t.Ql, t.Du, e)
                }
                ,
                t.prototype.terminate = function() {
                    return Eo(this.bu)
                }
                ,
                t
            }()
              , zu = function() {
                function t(t) {
                    this.observer = t,
                    this.muted = !1
                }
                return t.prototype.next = function(t) {
                    this.observer.next && this.Yl(this.observer.next, t)
                }
                ,
                t.prototype.error = function(t) {
                    this.observer.error ? this.Yl(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t)
                }
                ,
                t.prototype.Xl = function() {
                    this.muted = !0
                }
                ,
                t.prototype.Yl = function(t, e) {
                    var n = this;
                    this.muted || setTimeout((function() {
                        n.muted || t(e)
                    }
                    ), 0)
                }
                ,
                t
            }();
            function Ku(t, e, n) {
                if (!n)
                    throw new c(a.INVALID_ARGUMENT,"Function " + t + "() cannot be called with an empty " + e + ".")
            }
            function Wu(t, e) {
                if (void 0 === e)
                    return {
                        merge: !1
                    };
                if (void 0 !== e.mergeFields && void 0 !== e.merge)
                    throw new c(a.INVALID_ARGUMENT,"Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
                return e
            }
            function Qu(t, e, n, r) {
                if (!0 === e && !0 === r)
                    throw new c(a.INVALID_ARGUMENT,t + " and " + n + " cannot be used together.")
            }
            function Yu(t) {
                if (void 0 === t)
                    return "undefined";
                if (null === t)
                    return "null";
                if ("string" == typeof t)
                    return t.length > 20 && (t = t.substring(0, 20) + "..."),
                    JSON.stringify(t);
                if ("number" == typeof t || "boolean" == typeof t)
                    return "" + t;
                if ("object" == typeof t) {
                    if (t instanceof Array)
                        return "an array";
                    var e = function(t) {
                        if (t.constructor) {
                            var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                            if (e && e.length > 1)
                                return e[1]
                        }
                        return null
                    }(t);
                    return e ? "a custom " + e + " object" : "an object"
                }
                return "function" == typeof t ? "a function" : y()
            }
            function Hu(t, e) {
                if (e <= 0)
                    throw new c(a.INVALID_ARGUMENT,"Function " + t + "() requires a positive number, but it was: " + e + ".")
            }
            var Xu = function(t) {
                for (var e = 0; e < t.length; ++e)
                    if (0 === t[e].length)
                        throw new c(a.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");
                this.Zl = new q(t)
            }
              , Ju = function(t) {
                function n() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    return t.call(this, e) || this
                }
                return Object(e.c)(n, t),
                n.documentId = function() {
                    return new n(q.j().B())
                }
                ,
                n.prototype.isEqual = function(t) {
                    return t instanceof n && this.Zl.isEqual(t.Zl)
                }
                ,
                n
            }(Xu)
              , $u = new RegExp("[~\\*/\\[\\]]")
              , Zu = function(t) {
                this.t_ = t
            }
              , ts = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n.prototype.e_ = function(t) {
                    if (2 !== t.n_)
                        throw 1 === t.n_ ? t.s_(this.t_ + "() can only appear at the top level of your update data") : t.s_(this.t_ + "() cannot be used with set() unless you pass {merge:true}");
                    return t.Qe.push(t.path),
                    null
                }
                ,
                n.prototype.isEqual = function(t) {
                    return t instanceof n
                }
                ,
                n
            }(Zu);
            function es(t, e, n) {
                return new ps({
                    n_: 3,
                    i_: e.settings.i_,
                    methodName: t.t_,
                    r_: n
                },e._,e.serializer,e.ignoreUndefinedProperties)
            }
            var ns = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n.prototype.e_ = function(t) {
                    return new qe(t.path,new xe)
                }
                ,
                n.prototype.isEqual = function(t) {
                    return t instanceof n
                }
                ,
                n
            }(Zu)
              , rs = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this, e) || this).o_ = n,
                    r
                }
                return Object(e.c)(n, t),
                n.prototype.e_ = function(t) {
                    var e = es(this, t, !0)
                      , n = this.o_.map((function(t) {
                        return bs(t, e)
                    }
                    ))
                      , r = new ke(n);
                    return new qe(t.path,r)
                }
                ,
                n.prototype.isEqual = function(t) {
                    return this === t
                }
                ,
                n
            }(Zu)
              , is = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this, e) || this).o_ = n,
                    r
                }
                return Object(e.c)(n, t),
                n.prototype.e_ = function(t) {
                    var e = es(this, t, !0)
                      , n = this.o_.map((function(t) {
                        return bs(t, e)
                    }
                    ))
                      , r = new Le(n);
                    return new qe(t.path,r)
                }
                ,
                n.prototype.isEqual = function(t) {
                    return this === t
                }
                ,
                n
            }(Zu)
              , os = function(t) {
                function n(e, n) {
                    var r = this;
                    return (r = t.call(this, e) || this).a_ = n,
                    r
                }
                return Object(e.c)(n, t),
                n.prototype.e_ = function(t) {
                    var e = new Re(t.serializer,$t(t.serializer, this.a_));
                    return new qe(t.path,e)
                }
                ,
                n.prototype.isEqual = function(t) {
                    return this === t
                }
                ,
                n
            }(Zu)
              , us = function() {
                function t(t, e) {
                    if (!isFinite(t) || t < -90 || t > 90)
                        throw new c(a.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: " + t);
                    if (!isFinite(e) || e < -180 || e > 180)
                        throw new c(a.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: " + e);
                    this.h_ = t,
                    this.c_ = e
                }
                return Object.defineProperty(t.prototype, "latitude", {
                    get: function() {
                        return this.h_
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "longitude", {
                    get: function() {
                        return this.c_
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.isEqual = function(t) {
                    return this.h_ === t.h_ && this.c_ === t.c_
                }
                ,
                t.prototype.toJSON = function() {
                    return {
                        latitude: this.h_,
                        longitude: this.c_
                    }
                }
                ,
                t.prototype.g = function(t) {
                    return I(this.h_, t.h_) || I(this.c_, t.c_)
                }
                ,
                t
            }()
              , ss = function(t) {
                this.u_ = t
            }
              , as = /^__.*__$/
              , cs = function(t, e, n) {
                this.l_ = t,
                this.__ = e,
                this.f_ = n
            }
              , hs = function() {
                function t(t, e, n) {
                    this.data = t,
                    this.Qe = e,
                    this.fieldTransforms = n
                }
                return t.prototype.d_ = function(t, e) {
                    var n = [];
                    return null !== this.Qe ? n.push(new Je(t,this.data,this.Qe,e)) : n.push(new Xe(t,this.data,e)),
                    this.fieldTransforms.length > 0 && n.push(new Ze(t,this.fieldTransforms)),
                    n
                }
                ,
                t
            }()
              , fs = function() {
                function t(t, e, n) {
                    this.data = t,
                    this.Qe = e,
                    this.fieldTransforms = n
                }
                return t.prototype.d_ = function(t, e) {
                    var n = [new Je(t,this.data,this.Qe,e)];
                    return this.fieldTransforms.length > 0 && n.push(new Ze(t,this.fieldTransforms)),
                    n
                }
                ,
                t
            }();
            function ls(t) {
                switch (t) {
                case 0:
                case 2:
                case 1:
                    return !0;
                case 3:
                case 4:
                    return !1;
                default:
                    throw y()
                }
            }
            var ps = function() {
                function t(t, e, n, r, i, o) {
                    this.settings = t,
                    this._ = e,
                    this.serializer = n,
                    this.ignoreUndefinedProperties = r,
                    void 0 === i && this.w_(),
                    this.fieldTransforms = i || [],
                    this.Qe = o || []
                }
                return Object.defineProperty(t.prototype, "path", {
                    get: function() {
                        return this.settings.path
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "n_", {
                    get: function() {
                        return this.settings.n_
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.E_ = function(e) {
                    return new t(Object.assign(Object.assign({}, this.settings), e),this._,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.Qe)
                }
                ,
                t.prototype.T_ = function(t) {
                    var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.E_({
                        path: n,
                        r_: !1
                    });
                    return r.I_(t),
                    r
                }
                ,
                t.prototype.m_ = function(t) {
                    var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.E_({
                        path: n,
                        r_: !1
                    });
                    return r.w_(),
                    r
                }
                ,
                t.prototype.A_ = function(t) {
                    return this.E_({
                        path: void 0,
                        r_: !0
                    })
                }
                ,
                t.prototype.s_ = function(t) {
                    return Os(t, this.settings.methodName, this.settings.R_ || !1, this.path, this.settings.i_)
                }
                ,
                t.prototype.contains = function(t) {
                    return void 0 !== this.Qe.find((function(e) {
                        return t.M(e)
                    }
                    )) || void 0 !== this.fieldTransforms.find((function(e) {
                        return t.M(e.field)
                    }
                    ))
                }
                ,
                t.prototype.w_ = function() {
                    if (this.path)
                        for (var t = 0; t < this.path.length; t++)
                            this.I_(this.path.get(t))
                }
                ,
                t.prototype.I_ = function(t) {
                    if (0 === t.length)
                        throw this.s_("Document fields must not be empty");
                    if (ls(this.n_) && as.test(t))
                        throw this.s_('Document fields cannot begin and end with "__"')
                }
                ,
                t
            }()
              , ds = function() {
                function t(t, e, n) {
                    this._ = t,
                    this.ignoreUndefinedProperties = e,
                    this.serializer = n || Mu(t)
                }
                return t.prototype.P_ = function(t, e, n, r) {
                    return void 0 === r && (r = !1),
                    new ps({
                        n_: t,
                        methodName: e,
                        i_: n,
                        path: q.U(),
                        r_: !1,
                        R_: r
                    },this._,this.serializer,this.ignoreUndefinedProperties)
                }
                ,
                t
            }();
            function vs(t, e, n, r, i, o) {
                void 0 === o && (o = {});
                var u = t.P_(o.merge || o.mergeFields ? 2 : 0, e, n, i);
                Es("Data must be an object, but it was:", u, r);
                var s, h, f = ws(r, u);
                if (o.merge)
                    s = new Me(u.Qe),
                    h = u.fieldTransforms;
                else if (o.mergeFields) {
                    for (var l = [], p = 0, d = o.mergeFields; p < d.length; p++) {
                        var v = d[p]
                          , g = void 0;
                        if (v instanceof Xu)
                            g = v.Zl;
                        else {
                            if ("string" != typeof v)
                                throw y();
                            g = Ts(e, v, n)
                        }
                        if (!u.contains(g))
                            throw new c(a.INVALID_ARGUMENT,"Field '" + g + "' is specified in your field mask but missing from your input data.");
                        Ns(l, g) || l.push(g)
                    }
                    s = new Me(l),
                    h = u.fieldTransforms.filter((function(t) {
                        return s.Je(t.field)
                    }
                    ))
                } else
                    s = null,
                    h = u.fieldTransforms;
                return new hs(new on(f),s,h)
            }
            function ys(t, e, n, r) {
                var i = t.P_(1, e, n);
                Es("Data must be an object, but it was:", i, r);
                var o = []
                  , u = new un;
                k(r, (function(t, r) {
                    var s = Ts(e, t, n)
                      , a = i.m_(s);
                    if (r instanceof ts || r instanceof ss && r.u_ instanceof ts)
                        o.push(s);
                    else {
                        var c = bs(r, a);
                        null != c && (o.push(s),
                        u.set(s, c))
                    }
                }
                ));
                var s = new Me(o);
                return new fs(u.Xe(),s,i.fieldTransforms)
            }
            function gs(t, e, n, r, i, o) {
                var u = t.P_(1, e, n)
                  , s = [_s(e, r, n)]
                  , h = [i];
                if (o.length % 2 != 0)
                    throw new c(a.INVALID_ARGUMENT,"Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
                for (var f = 0; f < o.length; f += 2)
                    s.push(_s(e, o[f])),
                    h.push(o[f + 1]);
                for (var l = [], p = new un, d = s.length - 1; d >= 0; --d)
                    if (!Ns(l, s[d])) {
                        var v = s[d]
                          , y = h[d]
                          , g = u.m_(v);
                        if (y instanceof ts || y instanceof ss && y.u_ instanceof ts)
                            l.push(v);
                        else {
                            var m = bs(y, g);
                            null != m && (l.push(v),
                            p.set(v, m))
                        }
                    }
                var b = new Me(l);
                return new fs(p.Xe(),b,u.fieldTransforms)
            }
            function ms(t, e, n, r) {
                return void 0 === r && (r = !1),
                bs(n, t.P_(r ? 4 : 3, e))
            }
            function bs(t, e) {
                if (t instanceof ss && (t = t.u_),
                Is(t))
                    return Es("Unsupported field value:", e, t),
                    ws(t, e);
                if (t instanceof Zu)
                    return function(t, e) {
                        if (!ls(e.n_))
                            throw e.s_(t.t_ + "() can only be used with update() and set()");
                        if (!e.path)
                            throw e.s_(t.t_ + "() is not currently supported inside arrays");
                        var n = t.e_(e);
                        n && e.fieldTransforms.push(n)
                    }(t, e),
                    null;
                if (e.path && e.Qe.push(e.path),
                t instanceof Array) {
                    if (e.settings.r_ && 4 !== e.n_)
                        throw e.s_("Nested arrays are not supported");
                    return function(t, e) {
                        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                            var u = bs(o[i], e.A_(r));
                            null == u && (u = {
                                nullValue: "NULL_VALUE"
                            }),
                            n.push(u),
                            r++
                        }
                        return {
                            arrayValue: {
                                values: n
                            }
                        }
                    }(t, e)
                }
                return function(t, e) {
                    if (null === t)
                        return {
                            nullValue: "NULL_VALUE"
                        };
                    if ("number" == typeof t)
                        return $t(e.serializer, t);
                    if ("boolean" == typeof t)
                        return {
                            booleanValue: t
                        };
                    if ("string" == typeof t)
                        return {
                            stringValue: t
                        };
                    if (t instanceof Date) {
                        var n = V.fromDate(t);
                        return {
                            timestampValue: Zt(e.serializer, n)
                        }
                    }
                    if (t instanceof V) {
                        var r = new V(t.seconds,1e3 * Math.floor(t.nanoseconds / 1e3));
                        return {
                            timestampValue: Zt(e.serializer, r)
                        }
                    }
                    if (t instanceof us)
                        return {
                            geoPointValue: {
                                latitude: t.latitude,
                                longitude: t.longitude
                            }
                        };
                    if (t instanceof O)
                        return {
                            bytesValue: te(e.serializer, t.l)
                        };
                    if (t instanceof cs) {
                        var i = e._
                          , o = t.l_;
                        if (!o.isEqual(i))
                            throw e.s_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
                        return {
                            referenceValue: re(t.l_ || e._, t.__.path)
                        }
                    }
                    if (void 0 === t && e.ignoreUndefinedProperties)
                        return null;
                    throw e.s_("Unsupported field value: " + Yu(t))
                }(t, e)
            }
            function ws(t, e) {
                var n = {};
                return P(t) ? e.path && e.path.length > 0 && e.Qe.push(e.path) : k(t, (function(t, r) {
                    var i = bs(r, e.T_(t));
                    null != i && (n[t] = i)
                }
                )),
                {
                    mapValue: {
                        fields: n
                    }
                }
            }
            function Is(t) {
                return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof V || t instanceof us || t instanceof O || t instanceof cs || t instanceof Zu)
            }
            function Es(t, e, n) {
                if (!Is(n) || !function(t) {
                    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
                }(n)) {
                    var r = Yu(n);
                    throw "an object" === r ? e.s_(t + " a custom object") : e.s_(t + " " + r)
                }
            }
            function _s(t, e, n) {
                if (e instanceof Xu)
                    return e.Zl;
                if ("string" == typeof e)
                    return Ts(t, e);
                throw Os("Field path arguments must be of type string or FieldPath.", t, !1, void 0, n)
            }
            function Ts(t, n, r) {
                try {
                    return function(t) {
                        if (t.search($u) >= 0)
                            throw new c(a.INVALID_ARGUMENT,"Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
                        try {
                            return new (Ju.bind.apply(Ju, Object(e.g)([void 0], t.split("."))))
                        } catch (n) {
                            throw new c(a.INVALID_ARGUMENT,"Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
                        }
                    }(n).Zl
                } catch (n) {
                    throw Os((i = n)instanceof Error ? i.message : i.toString(), t, !1, void 0, r)
                }
                var i
            }
            function Os(t, e, n, r, i) {
                var o = r && !r.P()
                  , u = void 0 !== i
                  , s = "Function " + e + "() called with invalid data";
                n && (s += " (via `toFirestore()`)");
                var h = "";
                return (o || u) && (h += " (found",
                o && (h += " in field " + r),
                u && (h += " in document " + i),
                h += ")"),
                new c(a.INVALID_ARGUMENT,(s += ". ") + t + h)
            }
            function Ns(t, e) {
                return t.some((function(t) {
                    return t.isEqual(e)
                }
                ))
            }
            var As = function() {
                function t(t) {
                    this.zc = t,
                    this.g_ = new Map,
                    this.mutations = [],
                    this.V_ = !1,
                    this.y_ = null,
                    this.p_ = new Set
                }
                return t.prototype.b_ = function(t) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var n, r = this;
                        return Object(e.d)(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                if (this.v_(),
                                this.mutations.length > 0)
                                    throw new c(a.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");
                                return [4, function(t, n) {
                                    return Object(e.b)(this, void 0, void 0, (function() {
                                        var r, i, o, u, s, a;
                                        return Object(e.d)(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return r = m(t),
                                                i = ce(r.serializer) + "/documents",
                                                o = {
                                                    documents: n.map((function(t) {
                                                        return oe(r.serializer, t)
                                                    }
                                                    ))
                                                },
                                                [4, r.$c("BatchGetDocuments", i, o)];
                                            case 1:
                                                return u = e.sent(),
                                                s = new Map,
                                                u.forEach((function(t) {
                                                    var e = function(t, e) {
                                                        return "found"in e ? function(t, e) {
                                                            g(!!e.found),
                                                            e.found.name,
                                                            e.found.updateTime;
                                                            var n = ue(t, e.found.name)
                                                              , r = ne(e.found.updateTime)
                                                              , i = new on({
                                                                mapValue: {
                                                                    fields: e.found.fields
                                                                }
                                                            });
                                                            return new cn(n,r,i,{})
                                                        }(t, e) : "missing"in e ? function(t, e) {
                                                            g(!!e.missing),
                                                            g(!!e.readTime);
                                                            var n = ue(t, e.missing)
                                                              , r = ne(e.readTime);
                                                            return new hn(n,r)
                                                        }(t, e) : y()
                                                    }(r.serializer, t);
                                                    s.set(e.key.toString(), e)
                                                }
                                                )),
                                                a = [],
                                                [2, (n.forEach((function(t) {
                                                    var e = s.get(t.toString());
                                                    g(!!e),
                                                    a.push(e)
                                                }
                                                )),
                                                a)]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }(this.zc, t)];
                            case 1:
                                return [2, ((n = i.sent()).forEach((function(t) {
                                    t instanceof hn || t instanceof cn ? r.S_(t) : y()
                                }
                                )),
                                n)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.set = function(t, e) {
                    this.write(e.d_(t, this.Ge(t))),
                    this.p_.add(t.toString())
                }
                ,
                t.prototype.update = function(t, e) {
                    try {
                        this.write(e.d_(t, this.D_(t)))
                    } catch (t) {
                        this.y_ = t
                    }
                    this.p_.add(t.toString())
                }
                ,
                t.prototype.delete = function(t) {
                    this.write([new nn(t,this.Ge(t))]),
                    this.p_.add(t.toString())
                }
                ,
                t.prototype.commit = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var t, n = this;
                        return Object(e.d)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                if (this.v_(),
                                this.y_)
                                    throw this.y_;
                                return t = this.g_,
                                this.mutations.forEach((function(e) {
                                    t.delete(e.key.toString())
                                }
                                )),
                                t.forEach((function(t, e) {
                                    var r = F.H(e);
                                    n.mutations.push(new rn(r,n.Ge(r)))
                                }
                                )),
                                [4, function(t, n) {
                                    return Object(e.b)(this, void 0, void 0, (function() {
                                        var r, i, o;
                                        return Object(e.d)(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return r = m(t),
                                                i = ce(r.serializer) + "/documents",
                                                o = {
                                                    writes: n.map((function(t) {
                                                        return le(r.serializer, t)
                                                    }
                                                    ))
                                                },
                                                [4, r.Mc("Commit", i, o)];
                                            case 1:
                                                return e.sent(),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }(this.zc, this.mutations)];
                            case 1:
                                return r.sent(),
                                this.V_ = !0,
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.S_ = function(t) {
                    var e;
                    if (t instanceof cn)
                        e = t.version;
                    else {
                        if (!(t instanceof hn))
                            throw y();
                        e = R.min()
                    }
                    var n = this.g_.get(t.key.toString());
                    if (n) {
                        if (!e.isEqual(n))
                            throw new c(a.ABORTED,"Document version changed between two reads.")
                    } else
                        this.g_.set(t.key.toString(), e)
                }
                ,
                t.prototype.Ge = function(t) {
                    var e = this.g_.get(t.toString());
                    return !this.p_.has(t.toString()) && e ? Ge.updateTime(e) : Ge.ze()
                }
                ,
                t.prototype.D_ = function(t) {
                    var e = this.g_.get(t.toString());
                    if (!this.p_.has(t.toString()) && e) {
                        if (e.isEqual(R.min()))
                            throw new c(a.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");
                        return Ge.updateTime(e)
                    }
                    return Ge.exists(!0)
                }
                ,
                t.prototype.write = function(t) {
                    this.v_(),
                    this.mutations = this.mutations.concat(t)
                }
                ,
                t.prototype.v_ = function() {}
                ,
                t
            }()
              , Ds = function() {
                function t(t, e, n, r) {
                    this.hs = t,
                    this.zc = e,
                    this.updateFunction = n,
                    this.ls = r,
                    this.C_ = 5,
                    this.Vs = new Qn(this.hs,"transaction_retry")
                }
                return t.prototype.run = function() {
                    this.N_()
                }
                ,
                t.prototype.N_ = function() {
                    var t = this;
                    this.Vs.Pn((function() {
                        return Object(e.b)(t, void 0, void 0, (function() {
                            var t, n, r = this;
                            return Object(e.d)(this, (function(e) {
                                return t = new As(this.zc),
                                (n = this.x_(t)) && n.then((function(e) {
                                    r.hs.ws((function() {
                                        return t.commit().then((function() {
                                            r.ls.resolve(e)
                                        }
                                        )).catch((function(t) {
                                            r.F_(t)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )).catch((function(t) {
                                    r.F_(t)
                                }
                                )),
                                [2]
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.x_ = function(t) {
                    try {
                        var e = this.updateFunction(t);
                        return !G(e) && e.catch && e.then ? e : (this.ls.reject(Error("Transaction callback must return a Promise")),
                        null)
                    } catch (t) {
                        return this.ls.reject(t),
                        null
                    }
                }
                ,
                t.prototype.F_ = function(t) {
                    var e = this;
                    this.C_ > 0 && this.k_(t) ? (this.C_ -= 1,
                    this.hs.ws((function() {
                        return e.N_(),
                        Promise.resolve()
                    }
                    ))) : this.ls.reject(t)
                }
                ,
                t.prototype.k_ = function(t) {
                    if ("FirebaseError" === t.name) {
                        var e = t.code;
                        return "aborted" === e || "failed-precondition" === e || !tt(e)
                    }
                    return !1
                }
                ,
                t
            }()
              , Ss = function() {
                function t(t, e) {
                    this.credentials = t,
                    this.hs = e,
                    this.clientId = w.t(),
                    this.O_ = new Wn
                }
                return t.prototype.start = function(t, n, r) {
                    var i = this;
                    this.M_(),
                    this.bl = t;
                    var o = new Wn
                      , u = !1;
                    return this.credentials.Jh((function(t) {
                        if (!u)
                            return u = !0,
                            l("FirestoreClient", "Initializing. user=", t.uid),
                            i.L_(n, r, t, o).then(i.O_.resolve, i.O_.reject);
                        i.hs.Cs((function() {
                            return function(t, n) {
                                return Object(e.b)(this, void 0, void 0, (function() {
                                    var r, i;
                                    return Object(e.d)(this, (function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return (r = m(t)).hs.Fs(),
                                            l("RemoteStore", "RemoteStore received new credentials"),
                                            i = So(r),
                                            r.Xc.add(3),
                                            [4, Io(r)];
                                        case 1:
                                            return e.sent(),
                                            i && r.nu.set("Unknown"),
                                            [4, r.Hc.Jl(n)];
                                        case 2:
                                            return e.sent(),
                                            r.Xc.delete(3),
                                            [4, wo(r)];
                                        case 3:
                                            return e.sent(),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }(i.bu, t)
                        }
                        ))
                    }
                    )),
                    this.hs.ws((function() {
                        return i.O_.promise
                    }
                    )),
                    o.promise
                }
                ,
                t.prototype.enableNetwork = function() {
                    var t = this;
                    return this.M_(),
                    this.hs.enqueue((function() {
                        return t.persistence.th(!0),
                        function(t) {
                            var e = m(t);
                            return e.Xc.delete(0),
                            wo(e)
                        }(t.bu)
                    }
                    ))
                }
                ,
                t.prototype.L_ = function(t, n, r, i) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var o, u, s = this;
                        return Object(e.d)(this, (function(c) {
                            switch (c.label) {
                            case 0:
                                return c.trys.push([0, 3, , 4]),
                                o = {
                                    hs: this.hs,
                                    bl: this.bl,
                                    clientId: this.clientId,
                                    credentials: this.credentials,
                                    Ql: r,
                                    Du: 100
                                },
                                [4, t.initialize(o)];
                            case 1:
                                return c.sent(),
                                [4, n.initialize(t, o)];
                            case 2:
                                return c.sent(),
                                this.persistence = t.persistence,
                                this.Su = t.Su,
                                this.Gc = t.Gc,
                                this.ql = t.ql,
                                this.zc = n.zc,
                                this.bu = n.bu,
                                this.fi = n.fi,
                                this.B_ = n.vu,
                                this.B_.Us = $o.bind(null, this.fi),
                                this.B_.Ws = tu.bind(null, this.fi),
                                this.persistence.Za((function() {
                                    return Object(e.b)(s, void 0, void 0, (function() {
                                        return Object(e.d)(this, (function(t) {
                                            switch (t.label) {
                                            case 0:
                                                return [4, this.terminate()];
                                            case 1:
                                                return t.sent(),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )),
                                i.resolve(),
                                [3, 4];
                            case 3:
                                if (u = c.sent(),
                                i.reject(u),
                                !function(t) {
                                    return "FirebaseError" === t.name ? t.code === a.FAILED_PRECONDITION || t.code === a.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code
                                }(u))
                                    throw u;
                                return [2, (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + u),
                                this.L_(new qu, new Bu, r, i))];
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.M_ = function() {
                    if (this.hs.ps)
                        throw new c(a.FAILED_PRECONDITION,"The client has already been terminated.")
                }
                ,
                t.prototype.disableNetwork = function() {
                    var t = this;
                    return this.M_(),
                    this.hs.enqueue((function() {
                        return t.persistence.th(!1),
                        function(t) {
                            return Object(e.b)(this, void 0, void 0, (function() {
                                var n;
                                return Object(e.d)(this, (function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return (n = m(t)).Xc.add(0),
                                        [4, Io(n)];
                                    case 1:
                                        return e.sent(),
                                        n.nu.set("Offline"),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }(t.bu)
                    }
                    ))
                }
                ,
                t.prototype.terminate = function() {
                    var t = this;
                    this.hs.Ds();
                    var n = new Wn;
                    return this.hs.bs((function() {
                        return Object(e.b)(t, void 0, void 0, (function() {
                            var t, r;
                            return Object(e.d)(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 4, , 5]),
                                    this.ql && this.ql.stop(),
                                    [4, Eo(this.bu)];
                                case 1:
                                    return e.sent(),
                                    [4, this.Su.Di()];
                                case 2:
                                    return e.sent(),
                                    [4, this.persistence.Di()];
                                case 3:
                                    return e.sent(),
                                    this.credentials.Yh(),
                                    n.resolve(),
                                    [3, 5];
                                case 4:
                                    return t = e.sent(),
                                    r = ar(t, "Failed to shutdown persistence"),
                                    n.reject(r),
                                    [3, 5];
                                case 5:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    n.promise
                }
                ,
                t.prototype.waitForPendingWrites = function() {
                    var t = this;
                    this.M_();
                    var n = new Wn;
                    return this.hs.ws((function() {
                        return function(t, n) {
                            return Object(e.b)(this, void 0, void 0, (function() {
                                var r, i, o, u, s;
                                return Object(e.d)(this, (function(e) {
                                    switch (e.label) {
                                    case 0:
                                        So((r = m(t)).bu) || l("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."),
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]),
                                        [4, function(t) {
                                            var e = m(t);
                                            return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                                                return e.Sr.qo(t)
                                            }
                                            ))
                                        }(r.Gc)];
                                    case 2:
                                        return -1 === (i = e.sent()) ? [2, void n.resolve()] : ((o = r.Lu.get(i) || []).push(n),
                                        r.Lu.set(i, o),
                                        [3, 4]);
                                    case 3:
                                        return u = e.sent(),
                                        s = ar(u, "Initialization of waitForPendingWrites() operation failed"),
                                        n.reject(s),
                                        [3, 4];
                                    case 4:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }(t.fi, n)
                    }
                    )),
                    n.promise
                }
                ,
                t.prototype.listen = function(t, e, n) {
                    var r = this;
                    this.M_();
                    var i = new zu(n)
                      , o = new yr(t,i,e);
                    return this.hs.ws((function() {
                        return fr(r.B_, o)
                    }
                    )),
                    function() {
                        i.Xl(),
                        r.hs.ws((function() {
                            return lr(r.B_, o)
                        }
                        ))
                    }
                }
                ,
                t.prototype.q_ = function(t) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var n, r = this;
                        return Object(e.d)(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return this.M_(),
                                [4, this.O_.promise];
                            case 1:
                                return i.sent(),
                                n = new Wn,
                                [2, (this.hs.ws((function() {
                                    return function(t, n, r) {
                                        return Object(e.b)(this, void 0, void 0, (function() {
                                            var i, o, u;
                                            return Object(e.d)(this, (function(e) {
                                                switch (e.label) {
                                                case 0:
                                                    return e.trys.push([0, 2, , 3]),
                                                    [4, function(t, e) {
                                                        var n = m(t);
                                                        return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                            return n.Nh.Cr(t, e)
                                                        }
                                                        ))
                                                    }(t, n)];
                                                case 1:
                                                    return (i = e.sent())instanceof cn ? r.resolve(i) : i instanceof hn ? r.resolve(null) : r.reject(new c(a.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")),
                                                    [3, 3];
                                                case 2:
                                                    return o = e.sent(),
                                                    u = ar(o, "Failed to get document '" + n + " from cache"),
                                                    r.reject(u),
                                                    [3, 3];
                                                case 3:
                                                    return [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }(r.Gc, t, n)
                                }
                                )),
                                n.promise)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.U_ = function(t, n) {
                    return void 0 === n && (n = {}),
                    Object(e.b)(this, void 0, void 0, (function() {
                        var r, i = this;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return this.M_(),
                                [4, this.O_.promise];
                            case 1:
                                return e.sent(),
                                r = new Wn,
                                [2, (this.hs.ws((function() {
                                    return function(t, e, n, r, i) {
                                        var o = new zu({
                                            next: function(o) {
                                                e.ws((function() {
                                                    return lr(t, u)
                                                }
                                                ));
                                                var s = o.docs.has(n);
                                                !s && o.fromCache ? i.reject(new c(a.UNAVAILABLE,"Failed to get document because the client is offline.")) : s && o.fromCache && r && "server" === r.source ? i.reject(new c(a.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o)
                                            },
                                            error: function(t) {
                                                return i.reject(t)
                                            }
                                        })
                                          , u = new yr(dn(n.path),o,{
                                            includeMetadataChanges: !0,
                                            Xs: !0
                                        });
                                        return fr(t, u)
                                    }(i.B_, i.hs, t, n, r)
                                }
                                )),
                                r.promise)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.K_ = function(t) {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        var n, r = this;
                        return Object(e.d)(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return this.M_(),
                                [4, this.O_.promise];
                            case 1:
                                return i.sent(),
                                n = new Wn,
                                [2, (this.hs.ws((function() {
                                    return function(t, n, r) {
                                        return Object(e.b)(this, void 0, void 0, (function() {
                                            var i, o, u, s, a, c;
                                            return Object(e.d)(this, (function(e) {
                                                switch (e.label) {
                                                case 0:
                                                    return e.trys.push([0, 2, , 3]),
                                                    [4, eo(t, n, !0)];
                                                case 1:
                                                    return i = e.sent(),
                                                    o = new Yo(n,i.Fh),
                                                    u = o.Eu(i.documents),
                                                    s = o.Vr(u, !1),
                                                    r.resolve(s.snapshot),
                                                    [3, 3];
                                                case 2:
                                                    return a = e.sent(),
                                                    c = ar(a, "Failed to execute query '" + n + " against cache"),
                                                    r.reject(c),
                                                    [3, 3];
                                                case 3:
                                                    return [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }(r.Gc, t, n)
                                }
                                )),
                                n.promise)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.Q_ = function(t, n) {
                    return void 0 === n && (n = {}),
                    Object(e.b)(this, void 0, void 0, (function() {
                        var r, i = this;
                        return Object(e.d)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return this.M_(),
                                [4, this.O_.promise];
                            case 1:
                                return e.sent(),
                                r = new Wn,
                                [2, (this.hs.ws((function() {
                                    return function(t, e, n, r, i) {
                                        var o = new zu({
                                            next: function(n) {
                                                e.ws((function() {
                                                    return lr(t, u)
                                                }
                                                )),
                                                n.fromCache && "server" === r.source ? i.reject(new c(a.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n)
                                            },
                                            error: function(t) {
                                                return i.reject(t)
                                            }
                                        })
                                          , u = new yr(n,o,{
                                            includeMetadataChanges: !0,
                                            Xs: !0
                                        });
                                        return fr(t, u)
                                    }(i.B_, i.hs, t, n, r)
                                }
                                )),
                                r.promise)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.write = function(t) {
                    var n = this;
                    this.M_();
                    var r = new Wn;
                    return this.hs.ws((function() {
                        return function(t, n, r) {
                            return Object(e.b)(this, void 0, void 0, (function() {
                                var i, o, u, s;
                                return Object(e.d)(this, (function(e) {
                                    switch (e.label) {
                                    case 0:
                                        i = Ou(t),
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 5, , 6]),
                                        [4, function(t, e) {
                                            var n, r = m(t), i = V.now(), o = e.reduce((function(t, e) {
                                                return t.add(e.key)
                                            }
                                            ), dt());
                                            return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                                                return r.Nh.Or(t, o).next((function(o) {
                                                    n = o;
                                                    for (var u = [], s = 0, a = e; s < a.length; s++) {
                                                        var c = a[s]
                                                          , h = Qe(c, n.get(c.key));
                                                        null != h && u.push(new Je(c.key,h,sn(h.proto.mapValue),Ge.exists(!0)))
                                                    }
                                                    return r.Sr.Oo(t, i, u, e)
                                                }
                                                ))
                                            }
                                            )).then((function(t) {
                                                var e = t.lr(n);
                                                return {
                                                    batchId: t.batchId,
                                                    wr: e
                                                }
                                            }
                                            ))
                                        }(i.Gc, n)];
                                    case 2:
                                        return o = e.sent(),
                                        i.Su.Fi(o.batchId),
                                        function(t, e, n) {
                                            var r = t.$u[t.currentUser.ti()];
                                            r || (r = new nt(I)),
                                            r = r.ot(e, n),
                                            t.$u[t.currentUser.ti()] = r
                                        }(i, o.batchId, r),
                                        [4, pu(i, o.wr)];
                                    case 3:
                                        return e.sent(),
                                        [4, Ro(i.bu)];
                                    case 4:
                                        return e.sent(),
                                        [3, 6];
                                    case 5:
                                        return u = e.sent(),
                                        s = ar(u, "Failed to persist write"),
                                        r.reject(s),
                                        [3, 6];
                                    case 6:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }(n.fi, t, r)
                    }
                    )),
                    r.promise
                }
                ,
                t.prototype._ = function() {
                    return this.bl._
                }
                ,
                t.prototype.W_ = function(t) {
                    var n = this;
                    this.M_();
                    var r = new zu(t);
                    return this.hs.ws((function() {
                        return Object(e.b)(n, void 0, void 0, (function() {
                            return Object(e.d)(this, (function(t) {
                                return [2, function(t, e) {
                                    m(t).qs.add(e),
                                    e.next()
                                }(this.B_, r)]
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    function() {
                        r.Xl(),
                        n.hs.ws((function() {
                            return Object(e.b)(n, void 0, void 0, (function() {
                                return Object(e.d)(this, (function(t) {
                                    return [2, function(t, e) {
                                        m(t).qs.delete(e)
                                    }(this.B_, r)]
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                }
                ,
                Object.defineProperty(t.prototype, "j_", {
                    get: function() {
                        return this.hs.ps
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.transaction = function(t) {
                    var e = this;
                    this.M_();
                    var n = new Wn;
                    return this.hs.ws((function() {
                        return new Ds(e.hs,e.zc,t,n).run(),
                        Promise.resolve()
                    }
                    )),
                    n.promise
                }
                ,
                t
            }();
            function js(t) {
                return function(t, e) {
                    if ("object" != typeof t || null === t)
                        return !1;
                    for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
                        var o = i[r];
                        if (o in n && "function" == typeof n[o])
                            return !0
                    }
                    return !1
                }(t)
            }
            var xs = function() {
                function t(t, e, n, r) {
                    this._ = t,
                    this.G_ = e,
                    this.z_ = n,
                    this.H_ = r
                }
                return t.prototype.J_ = function(t) {
                    switch (kt(t)) {
                    case 0:
                        return null;
                    case 1:
                        return t.booleanValue;
                    case 2:
                        return Mt(t.integerValue || t.doubleValue);
                    case 3:
                        return this.Y_(t.timestampValue);
                    case 4:
                        return this.X_(t);
                    case 5:
                        return t.stringValue;
                    case 6:
                        return this.H_(qt(t.bytesValue));
                    case 7:
                        return this.Z_(t.referenceValue);
                    case 8:
                        return this.tf(t.geoPointValue);
                    case 9:
                        return this.ef(t.arrayValue);
                    case 10:
                        return this.nf(t.mapValue);
                    default:
                        throw y()
                    }
                }
                ,
                t.prototype.nf = function(t) {
                    var e = this
                      , n = {};
                    return k(t.fields || {}, (function(t, r) {
                        n[t] = e.J_(r)
                    }
                    )),
                    n
                }
                ,
                t.prototype.tf = function(t) {
                    return new us(Mt(t.latitude),Mt(t.longitude))
                }
                ,
                t.prototype.ef = function(t) {
                    var e = this;
                    return (t.values || []).map((function(t) {
                        return e.J_(t)
                    }
                    ))
                }
                ,
                t.prototype.X_ = function(t) {
                    switch (this.G_) {
                    case "previous":
                        var e = function t(e) {
                            var n = e.mapValue.fields.__previous_value__;
                            return St(n) ? t(n) : n
                        }(t);
                        return null == e ? null : this.J_(e);
                    case "estimate":
                        return this.Y_(jt(t));
                    default:
                        return null
                    }
                }
                ,
                t.prototype.Y_ = function(t) {
                    var e = Ut(t);
                    return new V(e.seconds,e.nanos)
                }
                ,
                t.prototype.Z_ = function(t) {
                    var e = U.q(t);
                    g(Ne(e));
                    var n = new j(e.get(1),e.get(3))
                      , r = new F(e.N(5));
                    return n.isEqual(this._) || p("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this._.projectId + "/" + this._.database + ") instead."),
                    this.z_(r)
                }
                ,
                t
            }()
              , ks = Mr.uo
              , Ps = function() {
                function t(t) {
                    var e;
                    if (void 0 === t.host) {
                        if (void 0 !== t.ssl)
                            throw new c(a.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");
                        this.host = "firestore.googleapis.com",
                        this.ssl = !0
                    } else
                        this.host = t.host,
                        this.ssl = null === (e = t.ssl) || void 0 === e || e;
                    if (this.credentials = t.credentials,
                    this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties,
                    void 0 === t.cacheSizeBytes)
                        this.cacheSizeBytes = Mr._o;
                    else {
                        if (t.cacheSizeBytes !== ks && t.cacheSizeBytes < Mr.lo)
                            throw new c(a.INVALID_ARGUMENT,"cacheSizeBytes must be at least " + Mr.lo);
                        this.cacheSizeBytes = t.cacheSizeBytes
                    }
                    this.experimentalForceLongPolling = !!t.experimentalForceLongPolling,
                    this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling,
                    Qu("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling)
                }
                return t.prototype.isEqual = function(t) {
                    return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
                }
                ,
                t
            }()
              , Ls = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build."
              , Vs = function() {
                function t() {}
                return t.prototype.enableIndexedDbPersistence = function(t, e) {
                    throw new c(a.FAILED_PRECONDITION,Ls)
                }
                ,
                t.prototype.enableMultiTabIndexedDbPersistence = function(t) {
                    throw new c(a.FAILED_PRECONDITION,Ls)
                }
                ,
                t.prototype.clearIndexedDbPersistence = function(t) {
                    throw new c(a.FAILED_PRECONDITION,Ls)
                }
                ,
                t
            }()
              , Rs = function() {
                function t() {}
                return t.prototype.enableIndexedDbPersistence = function(t, e) {
                    var n = new Bu
                      , r = new Fu(n,t.sf().cacheSizeBytes,e);
                    return t.if(r, n)
                }
                ,
                t.prototype.enableMultiTabIndexedDbPersistence = function(t) {
                    var e = new Bu
                      , n = new Gu(e,t.sf().cacheSizeBytes);
                    return t.if(n, e)
                }
                ,
                t.prototype.clearIndexedDbPersistence = function(t) {
                    var n = this
                      , r = new Wn;
                    return t.rf.bs((function() {
                        return Object(e.b)(n, void 0, void 0, (function() {
                            var n;
                            return Object(e.d)(this, (function(i) {
                                switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]),
                                    [4, function(t) {
                                        return Object(e.b)(this, void 0, void 0, (function() {
                                            var n;
                                            return Object(e.d)(this, (function(e) {
                                                switch (e.label) {
                                                case 0:
                                                    return Hn.Ln() ? (n = t + "main",
                                                    [4, Hn.delete(n)]) : [2, Promise.resolve()];
                                                case 1:
                                                    return e.sent(),
                                                    [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }(Qi(t.l_, t.af))];
                                case 1:
                                    return i.sent(),
                                    r.resolve(),
                                    [3, 3];
                                case 2:
                                    return n = i.sent(),
                                    r.reject(n),
                                    [3, 3];
                                case 3:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    r.promise
                }
                ,
                t
            }()
              , Cs = function() {
                function t(n, r, i) {
                    var o = this;
                    if (void 0 === i && (i = new Vs),
                    this.hf = i,
                    this.cf = null,
                    this.rf = new sr,
                    this.INTERNAL = {
                        delete: function() {
                            return Object(e.b)(o, void 0, void 0, (function() {
                                return Object(e.d)(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return this.uf(),
                                        [4, this.lf.terminate()];
                                    case 1:
                                        return t.sent(),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                    },
                    "object" == typeof n.options) {
                        var u = n;
                        this.cf = u,
                        this.l_ = t._f(u),
                        this.af = u.name,
                        this.ff = new ho(r)
                    } else {
                        var s = n;
                        if (!s.projectId)
                            throw new c(a.INVALID_ARGUMENT,"Must provide projectId");
                        this.l_ = new j(s.projectId,s.database),
                        this.af = "[DEFAULT]",
                        this.ff = new co
                    }
                    this.df = new Ps({})
                }
                return Object.defineProperty(t.prototype, "wf", {
                    get: function() {
                        return this.Ef || (this.Ef = new ds(this.l_,this.df.ignoreUndefinedProperties)),
                        this.Ef
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.settings = function(t) {
                    t.merge && delete (t = Object.assign(Object.assign({}, this.df), t)).merge;
                    var e = new Ps(t);
                    if (this.lf && !this.df.isEqual(e))
                        throw new c(a.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
                    this.df = e,
                    void 0 !== e.credentials && (this.ff = function(t) {
                        if (!t)
                            return new co;
                        switch (t.type) {
                        case "gapi":
                            var e = t.client;
                            return g(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)),
                            new lo(e,t.sessionIndex || "0");
                        case "provider":
                            return t.client;
                        default:
                            throw new c(a.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")
                        }
                    }(e.credentials))
                }
                ,
                t.prototype.useEmulator = function(t, e) {
                    "firestore.googleapis.com" !== this.df.host && d("Host has been set in both settings() and useEmulator(), emulator host will be used"),
                    this.settings({
                        host: t + ":" + e,
                        ssl: !1,
                        merge: !0
                    })
                }
                ,
                t.prototype.enableNetwork = function() {
                    return this.uf(),
                    this.lf.enableNetwork()
                }
                ,
                t.prototype.disableNetwork = function() {
                    return this.uf(),
                    this.lf.disableNetwork()
                }
                ,
                t.prototype.enablePersistence = function(t) {
                    if (this.lf)
                        throw new c(a.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
                    var e = !1
                      , n = !1;
                    return t && Qu("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab),
                    e ? this.hf.enableMultiTabIndexedDbPersistence(this) : this.hf.enableIndexedDbPersistence(this, n)
                }
                ,
                t.prototype.clearPersistence = function() {
                    return Object(e.b)(this, void 0, void 0, (function() {
                        return Object(e.d)(this, (function(t) {
                            if (void 0 !== this.lf && !this.lf.j_)
                                throw new c(a.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                            return [2, this.hf.clearIndexedDbPersistence(this)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.terminate = function() {
                    return this.app._removeServiceInstance("firestore"),
                    this.INTERNAL.delete()
                }
                ,
                Object.defineProperty(t.prototype, "Tf", {
                    get: function() {
                        return this.uf(),
                        this.lf.j_
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.waitForPendingWrites = function() {
                    return this.uf(),
                    this.lf.waitForPendingWrites()
                }
                ,
                t.prototype.onSnapshotsInSync = function(t) {
                    if (this.uf(),
                    js(t))
                        return this.lf.W_(t);
                    var e = {
                        next: t
                    };
                    return this.lf.W_(e)
                }
                ,
                t.prototype.uf = function() {
                    return this.lf || this.if(new qu, new Bu),
                    this.lf
                }
                ,
                t.prototype.If = function() {
                    return new S(this.l_,this.af,this.df.host,this.df.ssl,this.df.experimentalForceLongPolling,this.df.experimentalAutoDetectLongPolling)
                }
                ,
                t.prototype.if = function(t, e) {
                    var n = this.If();
                    return this.lf = new Ss(this.ff,this.rf),
                    this.lf.start(n, t, e)
                }
                ,
                t._f = function(t) {
                    if (e = t.options,
                    !Object.prototype.hasOwnProperty.call(e, "projectId"))
                        throw new c(a.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');
                    var e, n = t.options.projectId;
                    if (!n || "string" != typeof n)
                        throw new c(a.INVALID_ARGUMENT,"projectId must be a string in FirebaseApp.options");
                    return new j(n)
                }
                ,
                Object.defineProperty(t.prototype, "app", {
                    get: function() {
                        if (!this.cf)
                            throw new c(a.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");
                        return this.cf
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.collection = function(t) {
                    return Ku("Firestore.collection", "path", t),
                    this.uf(),
                    new Xs(U.q(t),this,null)
                }
                ,
                t.prototype.doc = function(t) {
                    return Ku("Firestore.doc", "path", t),
                    this.uf(),
                    qs.mf(U.q(t), this, null)
                }
                ,
                t.prototype.collectionGroup = function(t) {
                    if (Ku("Firestore.collectionGroup", "collectionId", t),
                    t.indexOf("/") >= 0)
                        throw new c(a.INVALID_ARGUMENT,"Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
                    return this.uf(),
                    new Ys(function(t) {
                        return new ln(U.U(),t)
                    }(t),this,null)
                }
                ,
                t.prototype.runTransaction = function(t) {
                    var e = this;
                    return this.uf().transaction((function(n) {
                        return t(new Us(e,n))
                    }
                    ))
                }
                ,
                t.prototype.batch = function() {
                    return this.uf(),
                    new Ms(this)
                }
                ,
                t.prototype.sf = function() {
                    return this.df
                }
                ,
                t
            }()
              , Us = function() {
                function t(t, e) {
                    this.Af = t,
                    this.Rf = e
                }
                return t.prototype.get = function(t) {
                    var e = this
                      , n = Js("Transaction.get", t, this.Af);
                    return this.Rf.b_([n.__]).then((function(t) {
                        if (!t || 1 !== t.length)
                            return y();
                        var r = t[0];
                        if (r instanceof hn)
                            return new Gs(e.Af,n.__,null,!1,!1,n.f_);
                        if (r instanceof cn)
                            return new Gs(e.Af,n.__,r,!1,!1,n.f_);
                        throw y()
                    }
                    ))
                }
                ,
                t.prototype.set = function(t, e, n) {
                    var r = Js("Transaction.set", t, this.Af);
                    n = Wu("Transaction.set", n);
                    var i = Zs(r.f_, e, n)
                      , o = vs(this.Af.wf, "Transaction.set", r.__, i, null !== r.f_, n);
                    return this.Rf.set(r.__, o),
                    this
                }
                ,
                t.prototype.update = function(t, e, n) {
                    for (var r, i, o = [], u = 3; u < arguments.length; u++)
                        o[u - 3] = arguments[u];
                    return "string" == typeof e || e instanceof Ju ? (r = Js("Transaction.update", t, this.Af),
                    i = gs(this.Af.wf, "Transaction.update", r.__, e, n, o)) : (r = Js("Transaction.update", t, this.Af),
                    i = ys(this.Af.wf, "Transaction.update", r.__, e)),
                    this.Rf.update(r.__, i),
                    this
                }
                ,
                t.prototype.delete = function(t) {
                    var e = Js("Transaction.delete", t, this.Af);
                    return this.Rf.delete(e.__),
                    this
                }
                ,
                t
            }()
              , Ms = function() {
                function t(t) {
                    this.Af = t,
                    this.Pf = [],
                    this.gf = !1
                }
                return t.prototype.set = function(t, e, n) {
                    this.Vf();
                    var r = Js("WriteBatch.set", t, this.Af);
                    n = Wu("WriteBatch.set", n);
                    var i = Zs(r.f_, e, n)
                      , o = vs(this.Af.wf, "WriteBatch.set", r.__, i, null !== r.f_, n);
                    return this.Pf = this.Pf.concat(o.d_(r.__, Ge.ze())),
                    this
                }
                ,
                t.prototype.update = function(t, e, n) {
                    for (var r, i, o = [], u = 3; u < arguments.length; u++)
                        o[u - 3] = arguments[u];
                    return this.Vf(),
                    "string" == typeof e || e instanceof Ju ? (r = Js("WriteBatch.update", t, this.Af),
                    i = gs(this.Af.wf, "WriteBatch.update", r.__, e, n, o)) : (r = Js("WriteBatch.update", t, this.Af),
                    i = ys(this.Af.wf, "WriteBatch.update", r.__, e)),
                    this.Pf = this.Pf.concat(i.d_(r.__, Ge.exists(!0))),
                    this
                }
                ,
                t.prototype.delete = function(t) {
                    this.Vf();
                    var e = Js("WriteBatch.delete", t, this.Af);
                    return this.Pf = this.Pf.concat(new nn(e.__,Ge.ze())),
                    this
                }
                ,
                t.prototype.commit = function() {
                    return this.Vf(),
                    this.gf = !0,
                    this.Pf.length > 0 ? this.Af.uf().write(this.Pf) : Promise.resolve()
                }
                ,
                t.prototype.Vf = function() {
                    if (this.gf)
                        throw new c(a.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")
                }
                ,
                t
            }()
              , qs = function(t) {
                function n(e, n, r) {
                    var i = this;
                    return (i = t.call(this, n.l_, e, r) || this).__ = e,
                    i.firestore = n,
                    i.f_ = r,
                    i.lf = i.firestore.uf(),
                    i
                }
                return Object(e.c)(n, t),
                n.mf = function(t, e, r) {
                    if (t.length % 2 != 0)
                        throw new c(a.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but " + t.B() + " has " + t.length);
                    return new n(new F(t),e,r)
                }
                ,
                Object.defineProperty(n.prototype, "id", {
                    get: function() {
                        return this.__.path.O()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "parent", {
                    get: function() {
                        return new Xs(this.__.path.F(),this.firestore,this.f_)
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "path", {
                    get: function() {
                        return this.__.path.B()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                n.prototype.collection = function(t) {
                    if (Ku("DocumentReference.collection", "path", t),
                    !t)
                        throw new c(a.INVALID_ARGUMENT,"Must provide a non-empty collection name to collection()");
                    var e = U.q(t);
                    return new Xs(this.__.path.child(e),this.firestore,null)
                }
                ,
                n.prototype.isEqual = function(t) {
                    return t instanceof n && this.firestore === t.firestore && this.__.isEqual(t.__) && this.f_ === t.f_
                }
                ,
                n.prototype.set = function(t, e) {
                    e = Wu("DocumentReference.set", e);
                    var n = Zs(this.f_, t, e)
                      , r = vs(this.firestore.wf, "DocumentReference.set", this.__, n, null !== this.f_, e);
                    return this.lf.write(r.d_(this.__, Ge.ze()))
                }
                ,
                n.prototype.update = function(t, e) {
                    for (var n, r = [], i = 2; i < arguments.length; i++)
                        r[i - 2] = arguments[i];
                    return n = "string" == typeof t || t instanceof Ju ? gs(this.firestore.wf, "DocumentReference.update", this.__, t, e, r) : ys(this.firestore.wf, "DocumentReference.update", this.__, t),
                    this.lf.write(n.d_(this.__, Ge.exists(!0)))
                }
                ,
                n.prototype.delete = function() {
                    return this.lf.write([new nn(this.__,Ge.ze())])
                }
                ,
                n.prototype.onSnapshot = function() {
                    for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++)
                        i[o] = arguments[o];
                    var u = {
                        includeMetadataChanges: !1
                    }
                      , s = 0;
                    "object" != typeof i[s] || js(i[s]) || (u = i[s],
                    s++);
                    var a = {
                        includeMetadataChanges: u.includeMetadataChanges
                    };
                    if (js(i[s])) {
                        var c = i[s];
                        i[s] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c),
                        i[s + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c),
                        i[s + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c)
                    }
                    var h = {
                        next: function(t) {
                            i[s] && i[s](r.yf(t))
                        },
                        error: i[s + 1],
                        complete: i[s + 2]
                    };
                    return this.lf.listen(dn(this.__.path), a, h)
                }
                ,
                n.prototype.get = function(t) {
                    var e = this
                      , n = this.firestore.uf();
                    return t && "cache" === t.source ? n.q_(this.__).then((function(t) {
                        return new Gs(e.firestore,e.__,t,!0,t instanceof cn && t.Ye,e.f_)
                    }
                    )) : n.U_(this.__, t).then((function(t) {
                        return e.yf(t)
                    }
                    ))
                }
                ,
                n.prototype.withConverter = function(t) {
                    return new n(this.__,this.firestore,t)
                }
                ,
                n.prototype.yf = function(t) {
                    var e = t.docs.get(this.__);
                    return new Gs(this.firestore,this.__,e,t.fromCache,t.hasPendingWrites,this.f_)
                }
                ,
                n
            }(cs)
              , Fs = function() {
                function t(t, e) {
                    this.hasPendingWrites = t,
                    this.fromCache = e
                }
                return t.prototype.isEqual = function(t) {
                    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
                }
                ,
                t
            }()
              , Gs = function() {
                function t(t, e, n, r, i, o) {
                    this.Af = t,
                    this.__ = e,
                    this.pf = n,
                    this.bf = r,
                    this.vf = i,
                    this.f_ = o
                }
                return t.prototype.data = function(t) {
                    var e = this;
                    if (void 0 === t && (t = {}),
                    this.pf) {
                        if (this.f_) {
                            var n = new Bs(this.Af,this.__,this.pf,this.bf,this.vf,null);
                            return this.f_.fromFirestore(n, t)
                        }
                        return new xs(this.Af.l_,t.serverTimestamps || "none",(function(t) {
                            return new qs(t,e.Af,null)
                        }
                        ),(function(t) {
                            return new D(t)
                        }
                        )).J_(this.pf.rn())
                    }
                }
                ,
                t.prototype.get = function(t, e) {
                    var n = this;
                    if (void 0 === e && (e = {}),
                    this.pf) {
                        var r = this.pf.data().field(_s("DocumentSnapshot.get", t, this.__));
                        if (null !== r)
                            return new xs(this.Af.l_,e.serverTimestamps || "none",(function(t) {
                                return new qs(t,n.Af,n.f_)
                            }
                            ),(function(t) {
                                return new D(t)
                            }
                            )).J_(r)
                    }
                }
                ,
                Object.defineProperty(t.prototype, "id", {
                    get: function() {
                        return this.__.path.O()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "ref", {
                    get: function() {
                        return new qs(this.__,this.Af,this.f_)
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "exists", {
                    get: function() {
                        return null !== this.pf
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "metadata", {
                    get: function() {
                        return new Fs(this.vf,this.bf)
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.isEqual = function(e) {
                    return e instanceof t && this.Af === e.Af && this.bf === e.bf && this.__.isEqual(e.__) && (null === this.pf ? null === e.pf : this.pf.isEqual(e.pf)) && this.f_ === e.f_
                }
                ,
                t
            }()
              , Bs = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n.prototype.data = function(e) {
                    return t.prototype.data.call(this, e)
                }
                ,
                n
            }(Gs);
            function zs(t, e, n) {
                if ("string" == typeof n) {
                    if ("" === n)
                        throw new c(a.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
                    if (!bn(e) && -1 !== n.indexOf("/"))
                        throw new c(a.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
                    var r = e.path.child(U.q(n));
                    if (!F.X(r))
                        throw new c(a.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
                    return Ft(t, new F(r))
                }
                if (n instanceof cs)
                    return Ft(t, n.__);
                throw new c(a.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Yu(n) + ".")
            }
            function Ks(t, e) {
                if (!Array.isArray(t) || 0 === t.length)
                    throw new c(a.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
                if (t.length > 10)
                    throw new c(a.INVALID_ARGUMENT,"Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.")
            }
            function Ws(t, e, n) {
                if (!n.isEqual(e))
                    throw new c(a.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.")
            }
            function Qs(t) {
                if (yn(t) && 0 === t.on.length)
                    throw new c(a.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")
            }
            var Ys = function() {
                function t(t, e, n) {
                    this.Sf = t,
                    this.firestore = e,
                    this.f_ = n
                }
                return t.prototype.where = function(e, n, r) {
                    var i = _s("Query.where", e)
                      , o = function(t, e, n, r, i, o, u) {
                        var s;
                        if (i.W()) {
                            if ("array-contains" === o || "array-contains-any" === o)
                                throw new c(a.INVALID_ARGUMENT,"Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
                            if ("in" === o || "not-in" === o) {
                                Ks(u, o);
                                for (var h = [], f = 0, l = u; f < l.length; f++) {
                                    var p = l[f];
                                    h.push(zs(r, t, p))
                                }
                                s = {
                                    arrayValue: {
                                        values: h
                                    }
                                }
                            } else
                                s = zs(r, t, u)
                        } else
                            "in" !== o && "not-in" !== o && "array-contains-any" !== o || Ks(u, o),
                            s = ms(n, "Query.where", u, "in" === o || "not-in" === o);
                        var d = jn.create(i, o, s);
                        return function(t, e) {
                            if (e.un()) {
                                var n = mn(t);
                                if (null !== n && !n.isEqual(e.field))
                                    throw new c(a.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                                var r = gn(t);
                                null !== r && Ws(0, e.field, r)
                            }
                            var i = function(t, e) {
                                for (var n = 0, r = t.filters; n < r.length; n++) {
                                    var i = r[n];
                                    if (e.indexOf(i.op) >= 0)
                                        return i.op
                                }
                                return null
                            }(t, function(t) {
                                switch (t) {
                                case "!=":
                                    return ["!=", "not-in"];
                                case "array-contains":
                                    return ["array-contains", "array-contains-any", "not-in"];
                                case "in":
                                    return ["array-contains-any", "in", "not-in"];
                                case "array-contains-any":
                                    return ["array-contains", "array-contains-any", "in", "not-in"];
                                case "not-in":
                                    return ["array-contains", "array-contains-any", "in", "not-in", "!="];
                                default:
                                    return []
                                }
                            }(e.op));
                            if (null !== i)
                                throw i === e.op ? new c(a.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new c(a.INVALID_ARGUMENT,"Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.")
                        }(t, d),
                        d
                    }(this.Sf, 0, this.firestore.wf, this.firestore.l_, i, n, r);
                    return new t(function(t, e) {
                        var n = t.filters.concat([e]);
                        return new ln(t.path,t.collectionGroup,t.on.slice(),n,t.limit,t.an,t.startAt,t.endAt)
                    }(this.Sf, o),this.firestore,this.f_)
                }
                ,
                t.prototype.orderBy = function(e, n) {
                    var r;
                    if (void 0 === n || "asc" === n)
                        r = "asc";
                    else {
                        if ("desc" !== n)
                            throw new c(a.INVALID_ARGUMENT,"Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
                        r = "desc"
                    }
                    var i = _s("Query.orderBy", e)
                      , o = function(t, e, n) {
                        if (null !== t.startAt)
                            throw new c(a.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
                        if (null !== t.endAt)
                            throw new c(a.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
                        var r = new Bn(e,n);
                        return function(t, e) {
                            if (null === gn(t)) {
                                var n = mn(t);
                                null !== n && Ws(0, n, e.field)
                            }
                        }(t, r),
                        r
                    }(this.Sf, i, r);
                    return new t(function(t, e) {
                        var n = t.on.concat([e]);
                        return new ln(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.an,t.startAt,t.endAt)
                    }(this.Sf, o),this.firestore,this.f_)
                }
                ,
                t.prototype.limit = function(e) {
                    return Hu("Query.limit", e),
                    new t(En(this.Sf, e, "F"),this.firestore,this.f_)
                }
                ,
                t.prototype.limitToLast = function(e) {
                    return Hu("Query.limitToLast", e),
                    new t(En(this.Sf, e, "L"),this.firestore,this.f_)
                }
                ,
                t.prototype.startAt = function(e) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    var i = this.Df("Query.startAt", e, n, !0);
                    return new t(_n(this.Sf, i),this.firestore,this.f_)
                }
                ,
                t.prototype.startAfter = function(e) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    var i = this.Df("Query.startAfter", e, n, !1);
                    return new t(_n(this.Sf, i),this.firestore,this.f_)
                }
                ,
                t.prototype.endBefore = function(e) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    var i = this.Df("Query.endBefore", e, n, !0);
                    return new t(Tn(this.Sf, i),this.firestore,this.f_)
                }
                ,
                t.prototype.endAt = function(e) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    var i = this.Df("Query.endAt", e, n, !1);
                    return new t(Tn(this.Sf, i),this.firestore,this.f_)
                }
                ,
                t.prototype.isEqual = function(e) {
                    return e instanceof t && this.firestore === e.firestore && On(this.Sf, e.Sf) && this.f_ === e.f_
                }
                ,
                t.prototype.withConverter = function(e) {
                    return new t(this.Sf,this.firestore,e)
                }
                ,
                t.prototype.Df = function(t, e, n, r) {
                    if (e instanceof Gs)
                        return function(t, e, n, r, i) {
                            if (!r)
                                throw new c(a.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
                            for (var o = [], u = 0, s = wn(t); u < s.length; u++) {
                                var h = s[u];
                                if (h.field.W())
                                    o.push(Ft(e, r.key));
                                else {
                                    var f = r.field(h.field);
                                    if (St(f))
                                        throw new c(a.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "' + h.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                                    if (null === f) {
                                        var l = h.field.B();
                                        throw new c(a.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '" + l + "' (used as the orderBy) does not exist.")
                                    }
                                    o.push(f)
                                }
                            }
                            return new Mn(o,i)
                        }(this.Sf, this.firestore.l_, t, e.pf, r);
                    var i = [e].concat(n);
                    return function(t, e, n, r, i, o) {
                        var u = t.on;
                        if (i.length > u.length)
                            throw new c(a.INVALID_ARGUMENT,"Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
                        for (var s = [], h = 0; h < i.length; h++) {
                            var f = i[h];
                            if (u[h].field.W()) {
                                if ("string" != typeof f)
                                    throw new c(a.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof f);
                                if (!bn(t) && -1 !== f.indexOf("/"))
                                    throw new c(a.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + f + "' contains a slash.");
                                var l = t.path.child(U.q(f));
                                if (!F.X(l))
                                    throw new c(a.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + l + "' is not because it contains an odd number of segments.");
                                var p = new F(l);
                                s.push(Ft(e, p))
                            } else {
                                var d = ms(n, r, f);
                                s.push(d)
                            }
                        }
                        return new Mn(s,o)
                    }(this.Sf, this.firestore.l_, this.firestore.wf, t, i, r)
                }
                ,
                t.prototype.onSnapshot = function() {
                    for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++)
                        i[o] = arguments[o];
                    var u = {}
                      , s = 0;
                    if ("object" != typeof i[s] || js(i[s]) || (u = i[s],
                    s++),
                    js(i[s])) {
                        var a = i[s];
                        i[s] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a),
                        i[s + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a),
                        i[s + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a)
                    }
                    var c = {
                        next: function(t) {
                            i[s] && i[s](new Hs(r.firestore,r.Sf,t,r.f_))
                        },
                        error: i[s + 1],
                        complete: i[s + 2]
                    };
                    return Qs(this.Sf),
                    this.firestore.uf().listen(this.Sf, u, c)
                }
                ,
                t.prototype.get = function(t) {
                    var e = this;
                    Qs(this.Sf);
                    var n = this.firestore.uf();
                    return (t && "cache" === t.source ? n.K_(this.Sf) : n.Q_(this.Sf, t)).then((function(t) {
                        return new Hs(e.firestore,e.Sf,t,e.f_)
                    }
                    ))
                }
                ,
                t
            }()
              , Hs = function() {
                function t(t, e, n, r) {
                    this.Af = t,
                    this.Cf = e,
                    this.Nf = n,
                    this.f_ = r,
                    this.xf = null,
                    this.Ff = null,
                    this.metadata = new Fs(n.hasPendingWrites,n.fromCache)
                }
                return Object.defineProperty(t.prototype, "docs", {
                    get: function() {
                        var t = [];
                        return this.forEach((function(e) {
                            return t.push(e)
                        }
                        )),
                        t
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "empty", {
                    get: function() {
                        return this.Nf.docs.P()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "size", {
                    get: function() {
                        return this.Nf.docs.size
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.forEach = function(t, e) {
                    var n = this;
                    this.Nf.docs.forEach((function(r) {
                        t.call(e, n.kf(r, n.metadata.fromCache, n.Nf.Qt.has(r.key)))
                    }
                    ))
                }
                ,
                Object.defineProperty(t.prototype, "query", {
                    get: function() {
                        return new Ys(this.Cf,this.Af,this.f_)
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.docChanges = function(t) {
                    var e = !(!t || !t.includeMetadataChanges);
                    if (e && this.Nf.jt)
                        throw new c(a.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                    return this.xf && this.Ff === e || (this.xf = function(t, e, n) {
                        if (t.Kt.P()) {
                            var r = 0;
                            return t.docChanges.map((function(e) {
                                var i = n(e.doc, t.fromCache, t.Qt.has(e.doc.key));
                                return e.doc,
                                {
                                    type: "added",
                                    doc: i,
                                    oldIndex: -1,
                                    newIndex: r++
                                }
                            }
                            ))
                        }
                        var i = t.Kt;
                        return t.docChanges.filter((function(t) {
                            return e || 3 !== t.type
                        }
                        )).map((function(e) {
                            var r = n(e.doc, t.fromCache, t.Qt.has(e.doc.key))
                              , o = -1
                              , u = -1;
                            return 0 !== e.type && (o = i.indexOf(e.doc.key),
                            i = i.delete(e.doc.key)),
                            1 !== e.type && (u = (i = i.add(e.doc)).indexOf(e.doc.key)),
                            {
                                type: $s(e.type),
                                doc: r,
                                oldIndex: o,
                                newIndex: u
                            }
                        }
                        ))
                    }(this.Nf, e, this.kf.bind(this)),
                    this.Ff = e),
                    this.xf
                }
                ,
                t.prototype.isEqual = function(e) {
                    return e instanceof t && this.Af === e.Af && On(this.Cf, e.Cf) && this.Nf.isEqual(e.Nf) && this.f_ === e.f_
                }
                ,
                t.prototype.kf = function(t, e, n) {
                    return new Bs(this.Af,t.key,t,e,n,this.f_)
                }
                ,
                t
            }()
              , Xs = function(t) {
                function n(e, n, r) {
                    var i = this;
                    if ((i = t.call(this, dn(e), n, r) || this).Of = e,
                    e.length % 2 != 1)
                        throw new c(a.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but " + e.B() + " has " + e.length);
                    return i
                }
                return Object(e.c)(n, t),
                Object.defineProperty(n.prototype, "id", {
                    get: function() {
                        return this.Sf.path.O()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "parent", {
                    get: function() {
                        var t = this.Sf.path.F();
                        return t.P() ? null : new qs(new F(t),this.firestore,null)
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "path", {
                    get: function() {
                        return this.Sf.path.B()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                n.prototype.doc = function(t) {
                    0 === arguments.length && (t = w.t()),
                    Ku("CollectionReference.doc", "path", t);
                    var e = U.q(t);
                    return qs.mf(this.Sf.path.child(e), this.firestore, this.f_)
                }
                ,
                n.prototype.add = function(t) {
                    var e = this.f_ ? this.f_.toFirestore(t) : t
                      , n = this.doc();
                    return new qs(n.__,this.firestore,null).set(e).then((function() {
                        return n
                    }
                    ))
                }
                ,
                n.prototype.withConverter = function(t) {
                    return new n(this.Of,this.firestore,t)
                }
                ,
                n
            }(Ys);
            function Js(t, e, n) {
                var r = function(t, e) {
                    if (!(t instanceof e)) {
                        if (e.name === t.constructor.name)
                            throw new c(a.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
                        var n = Yu(t);
                        throw new c(a.INVALID_ARGUMENT,"Expected type '" + e.name + "', but it was: " + n)
                    }
                    return t
                }(e, qs);
                if (r.firestore !== n)
                    throw new c(a.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");
                return r
            }
            function $s(t) {
                switch (t) {
                case 0:
                    return "added";
                case 2:
                case 3:
                    return "modified";
                case 1:
                    return "removed";
                default:
                    return y()
                }
            }
            function Zs(t, e, n) {
                return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e
            }
            var ta, ea = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(e.c)(n, t),
                n.serverTimestamp = function() {
                    var t = new ns("serverTimestamp");
                    return t.t_ = "FieldValue.serverTimestamp",
                    new n(t)
                }
                ,
                n.delete = function() {
                    var t = new ts("deleteField");
                    return t.t_ = "FieldValue.delete",
                    new n(t)
                }
                ,
                n.arrayUnion = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var r = function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        return new rs("arrayUnion",t)
                    }
                    .apply(void 0, t);
                    return r.t_ = "FieldValue.arrayUnion",
                    new n(r)
                }
                ,
                n.arrayRemove = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var r = function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        return new is("arrayRemove",t)
                    }
                    .apply(void 0, t);
                    return r.t_ = "FieldValue.arrayRemove",
                    new n(r)
                }
                ,
                n.increment = function(t) {
                    var e = function(t) {
                        return new os("increment",t)
                    }(t);
                    return e.t_ = "FieldValue.increment",
                    new n(e)
                }
                ,
                n.prototype.isEqual = function(t) {
                    return this.u_.isEqual(t.u_)
                }
                ,
                n
            }(ss), na = {
                Firestore: Cs,
                GeoPoint: us,
                Timestamp: V,
                Blob: D,
                Transaction: Us,
                WriteBatch: Ms,
                DocumentReference: qs,
                DocumentSnapshot: Gs,
                Query: Ys,
                QueryDocumentSnapshot: Bs,
                QuerySnapshot: Hs,
                CollectionReference: Xs,
                FieldPath: Ju,
                FieldValue: ea,
                setLogLevel: function(t) {
                    var e;
                    e = t,
                    h.setLogLevel(e)
                },
                CACHE_SIZE_UNLIMITED: ks
            };
            (function(t, e) {
                t.INTERNAL.registerComponent(new s.a("firestore",(function(t) {
                    return function(t, e) {
                        return new Cs(t,e,new Rs)
                    }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"))
                }
                ),"PUBLIC").setServiceProps(Object.assign({}, na)))
            }
            )(ta = r.a),
            ta.registerVersion("@firebase/firestore", "2.0.0")
        }
        ).call(this, n("8oxB"))
    }
}]);
//# sourceMappingURL=f2e80800-1e7a89e0ec1eca76d894.js.map
