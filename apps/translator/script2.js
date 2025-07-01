(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver((s) => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
        const i = {};
        return (
            s.integrity && (i.integrity = s.integrity),
            s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
                s.crossOrigin === "use-credentials"
                    ? (i.credentials = "include")
                    : s.crossOrigin === "anonymous"
                        ? (i.credentials = "omit")
                        : (i.credentials = "same-origin"),
                i
        );
    }
    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i);
    }
})();
var wp = { exports: {} },
    bo = {},
    xp = { exports: {} },
    V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs = Symbol.for("react.element"),
    yv = Symbol.for("react.portal"),
    vv = Symbol.for("react.fragment"),
    wv = Symbol.for("react.strict_mode"),
    xv = Symbol.for("react.profiler"),
    Sv = Symbol.for("react.provider"),
    _v = Symbol.for("react.context"),
    Cv = Symbol.for("react.forward_ref"),
    Pv = Symbol.for("react.suspense"),
    kv = Symbol.for("react.memo"),
    Ev = Symbol.for("react.lazy"),
    Af = Symbol.iterator;
function Tv(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Af && e[Af]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
}
var Sp = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    _p = Object.assign,
    Cp = {};
function Or(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Cp),
        (this.updater = n || Sp);
}
Or.prototype.isReactComponent = {};
Or.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Or.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pp() {}
Pp.prototype = Or.prototype;
function Ru(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Cp),
        (this.updater = n || Sp);
}
var Mu = (Ru.prototype = new Pp());
Mu.constructor = Ru;
_p(Mu, Or.prototype);
Mu.isPureReactComponent = !0;
var Rf = Array.isArray,
    kp = Object.prototype.hasOwnProperty,
    Lu = { current: null },
    Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tp(e, t, n) {
    var r,
        s = {},
        i = null,
        o = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
            t))
            kp.call(t, r) && !Ep.hasOwnProperty(r) && (s[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) s.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        s.children = l;
    }
    if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
    return {
        $$typeof: Gs,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Lu.current,
    };
}
function Av(e, t) {
    return {
        $$typeof: Gs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Nu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gs;
}
function Rv(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Mf = /\/+/g;
function ha(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Rv("" + e.key)
        : t.toString(36);
}
function Oi(e, t, n, r, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Gs:
                    case yv:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
                (s = s(o)),
                (e = r === "" ? "." + ha(o, 0) : r),
                Rf(s)
                    ? ((n = ""),
                    e != null && (n = e.replace(Mf, "$&/") + "/"),
                        Oi(s, t, n, "", function (u) {
                            return u;
                        }))
                    : s != null &&
                    (Nu(s) &&
                    (s = Av(
                        s,
                        n +
                        (!s.key || (o && o.key === s.key)
                            ? ""
                            : ("" + s.key).replace(Mf, "$&/") + "/") +
                        e,
                    )),
                        t.push(s)),
                1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Rf(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + ha(i, a);
            o += Oi(i, t, n, l, s);
        }
    else if (((l = Tv(e)), typeof l == "function"))
        for (e = l.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (l = r + ha(i, a++)), (o += Oi(i, t, n, l, s));
    else if (i === "object")
        throw (
            ((t = String(e)),
                Error(
                    "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead.",
                ))
        );
    return o;
}
function ci(e, t, n) {
    if (e == null) return e;
    var r = [],
        s = 0;
    return (
        Oi(e, r, "", "", function (i) {
            return t.call(n, i, s++);
        }),
            r
    );
}
function Mv(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                    ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                    ((e._status = 2), (e._result = n));
                },
            ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Le = { current: null },
    Vi = { transition: null },
    Lv = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: Vi,
        ReactCurrentOwner: Lu,
    };
function Ap() {
    throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
    map: ci,
    forEach: function (e, t, n) {
        ci(
            e,
            function () {
                t.apply(this, arguments);
            },
            n,
        );
    },
    count: function (e) {
        var t = 0;
        return (
            ci(e, function () {
                t++;
            }),
                t
        );
    },
    toArray: function (e) {
        return (
            ci(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Nu(e))
            throw Error(
                "React.Children.only expected to receive a single React element child.",
            );
        return e;
    },
};
V.Component = Or;
V.Fragment = vv;
V.Profiler = xv;
V.PureComponent = Ru;
V.StrictMode = wv;
V.Suspense = Pv;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lv;
V.act = Ap;
V.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
    var r = _p({}, e.props),
        s = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (o = Lu.current)),
            t.key !== void 0 && (s = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (l in t)
            kp.call(t, l) &&
            !Ep.hasOwnProperty(l) &&
            (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: Gs, type: e.type, key: s, ref: i, props: r, _owner: o };
};
V.createContext = function (e) {
    return (
        (e = {
            $$typeof: _v,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
            (e.Provider = { $$typeof: Sv, _context: e }),
            (e.Consumer = e)
    );
};
V.createElement = Tp;
V.createFactory = function (e) {
    var t = Tp.bind(null, e);
    return (t.type = e), t;
};
V.createRef = function () {
    return { current: null };
};
V.forwardRef = function (e) {
    return { $$typeof: Cv, render: e };
};
V.isValidElement = Nu;
V.lazy = function (e) {
    return { $$typeof: Ev, _payload: { _status: -1, _result: e }, _init: Mv };
};
V.memo = function (e, t) {
    return { $$typeof: kv, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
    var t = Vi.transition;
    Vi.transition = {};
    try {
        e();
    } finally {
        Vi.transition = t;
    }
};
V.unstable_act = Ap;
V.useCallback = function (e, t) {
    return Le.current.useCallback(e, t);
};
V.useContext = function (e) {
    return Le.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
    return Le.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
    return Le.current.useEffect(e, t);
};
V.useId = function () {
    return Le.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
    return Le.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
    return Le.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
    return Le.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
    return Le.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
    return Le.current.useReducer(e, t, n);
};
V.useRef = function (e) {
    return Le.current.useRef(e);
};
V.useState = function (e) {
    return Le.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
    return Le.current.useTransition();
};
V.version = "18.3.1";
xp.exports = V;
var C = xp.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nv = C,
    Dv = Symbol.for("react.element"),
    Fv = Symbol.for("react.fragment"),
    Iv = Object.prototype.hasOwnProperty,
    Ov = Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Vv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rp(e, t, n) {
    var r,
        s = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t) Iv.call(t, r) && !Vv.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: Dv,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Ov.current,
    };
}
bo.Fragment = Fv;
bo.jsx = Rp;
bo.jsxs = Rp;
wp.exports = bo;
var T = wp.exports,
    Mp = { exports: {} },
    Xe = {},
    Lp = { exports: {} },
    Np = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(A, I) {
        var O = A.length;
        A.push(I);
        e: for (; 0 < O; ) {
            var te = (O - 1) >>> 1,
                ce = A[te];
            if (0 < s(ce, I)) (A[te] = I), (A[O] = ce), (O = te);
            else break e;
        }
    }
    function n(A) {
        return A.length === 0 ? null : A[0];
    }
    function r(A) {
        if (A.length === 0) return null;
        var I = A[0],
            O = A.pop();
        if (O !== I) {
            A[0] = O;
            e: for (var te = 0, ce = A.length, li = ce >>> 1; te < li; ) {
                var vn = 2 * (te + 1) - 1,
                    da = A[vn],
                    wn = vn + 1,
                    ui = A[wn];
                if (0 > s(da, O))
                    wn < ce && 0 > s(ui, da)
                        ? ((A[te] = ui), (A[wn] = O), (te = wn))
                        : ((A[te] = da), (A[vn] = O), (te = vn));
                else if (wn < ce && 0 > s(ui, O)) (A[te] = ui), (A[wn] = O), (te = wn);
                else break e;
            }
        }
        return I;
    }
    function s(A, I) {
        var O = A.sortIndex - I.sortIndex;
        return O !== 0 ? O : A.id - I.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function () {
            return o.now() - a;
        };
    }
    var l = [],
        u = [],
        f = 1,
        c = null,
        d = 3,
        g = !1,
        y = !1,
        v = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(A) {
        for (var I = n(u); I !== null; ) {
            if (I.callback === null) r(u);
            else if (I.startTime <= A)
                r(u), (I.sortIndex = I.expirationTime), t(l, I);
            else break;
            I = n(u);
        }
    }
    function w(A) {
        if (((v = !1), p(A), !y))
            if (n(l) !== null) (y = !0), ai(S);
            else {
                var I = n(u);
                I !== null && ie(w, I.startTime - A);
            }
    }
    function S(A, I) {
        (y = !1), v && ((v = !1), m(k), (k = -1)), (g = !0);
        var O = d;
        try {
            for (
                p(I), c = n(l);
                c !== null && (!(c.expirationTime > I) || (A && !F()));

            ) {
                var te = c.callback;
                if (typeof te == "function") {
                    (c.callback = null), (d = c.priorityLevel);
                    var ce = te(c.expirationTime <= I);
                    (I = e.unstable_now()),
                        typeof ce == "function" ? (c.callback = ce) : c === n(l) && r(l),
                        p(I);
                } else r(l);
                c = n(l);
            }
            if (c !== null) var li = !0;
            else {
                var vn = n(u);
                vn !== null && ie(w, vn.startTime - I), (li = !1);
            }
            return li;
        } finally {
            (c = null), (d = O), (g = !1);
        }
    }
    var _ = !1,
        P = null,
        k = -1,
        N = 5,
        R = -1;
    function F() {
        return !(e.unstable_now() - R < N);
    }
    function Ae() {
        if (P !== null) {
            var A = e.unstable_now();
            R = A;
            var I = !0;
            try {
                I = P(!0, A);
            } finally {
                I ? rt() : ((_ = !1), (P = null));
            }
        } else _ = !1;
    }
    var rt;
    if (typeof h == "function")
        rt = function () {
            h(Ae);
        };
    else if (typeof MessageChannel < "u") {
        var yn = new MessageChannel(),
            Ur = yn.port2;
        (yn.port1.onmessage = Ae),
            (rt = function () {
                Ur.postMessage(null);
            });
    } else
        rt = function () {
            x(Ae, 0);
        };
    function ai(A) {
        (P = A), _ || ((_ = !0), rt());
    }
    function ie(A, I) {
        k = x(function () {
            A(e.unstable_now());
        }, I);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (A) {
            A.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || g || ((y = !0), ai(S));
        }),
        (e.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
                : (N = 0 < A ? Math.floor(1e3 / A) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (A) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var I = 3;
                    break;
                default:
                    I = d;
            }
            var O = d;
            d = I;
            try {
                return A();
            } finally {
                d = O;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (A, I) {
            switch (A) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    A = 3;
            }
            var O = d;
            d = A;
            try {
                return I();
            } finally {
                d = O;
            }
        }),
        (e.unstable_scheduleCallback = function (A, I, O) {
            var te = e.unstable_now();
            switch (
                (typeof O == "object" && O !== null
                    ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? te + O : te))
                    : (O = te),
                    A)
                ) {
                case 1:
                    var ce = -1;
                    break;
                case 2:
                    ce = 250;
                    break;
                case 5:
                    ce = 1073741823;
                    break;
                case 4:
                    ce = 1e4;
                    break;
                default:
                    ce = 5e3;
            }
            return (
                (ce = O + ce),
                    (A = {
                        id: f++,
                        callback: I,
                        priorityLevel: A,
                        startTime: O,
                        expirationTime: ce,
                        sortIndex: -1,
                    }),
                    O > te
                        ? ((A.sortIndex = O),
                            t(u, A),
                        n(l) === null &&
                        A === n(u) &&
                        (v ? (m(k), (k = -1)) : (v = !0), ie(w, O - te)))
                        : ((A.sortIndex = ce), t(l, A), y || g || ((y = !0), ai(S))),
                    A
            );
        }),
        (e.unstable_shouldYield = F),
        (e.unstable_wrapCallback = function (A) {
            var I = d;
            return function () {
                var O = d;
                d = I;
                try {
                    return A.apply(this, arguments);
                } finally {
                    d = O;
                }
            };
        });
})(Np);
Lp.exports = Np;
var jv = Lp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bv = C,
    He = jv;
function E(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Dp = new Set(),
    ks = {};
function Bn(e, t) {
    Pr(e, t), Pr(e + "Capture", t);
}
function Pr(e, t) {
    for (ks[e] = t, e = 0; e < t.length; e++) Dp.add(t[e]);
}
var bt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    ll = Object.prototype.hasOwnProperty,
    Bv =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Lf = {},
    Nf = {};
function $v(e) {
    return ll.call(Nf, e)
        ? !0
        : ll.call(Lf, e)
            ? !1
            : Bv.test(e)
                ? (Nf[e] = !0)
                : ((Lf[e] = !0), !1);
}
function zv(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                    ? !n.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Uv(e, t, n, r) {
    if (t === null || typeof t > "u" || zv(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Ne(e, t, n, r, s, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = s),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        ve[e] = new Ne(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    ve[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ve[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    ve[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ve[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ve[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ve[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ve[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ve[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Du = /[\-:]([a-z])/g;
function Fu(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Du, Fu);
        ve[t] = new Ne(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Du, Fu);
        ve[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Du, Fu);
    ve[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ve[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Ne(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
    ve[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Iu(e, t, n, r) {
    var s = ve.hasOwnProperty(t) ? ve[t] : null;
    (s !== null
        ? s.type !== 0
        : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
    (Uv(t, n, s, r) && (n = null),
        r || s === null
            ? $v(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : s.mustUseProperty
                ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
                : ((t = s.attributeName),
                    (r = s.attributeNamespace),
                    n === null
                        ? e.removeAttribute(t)
                        : ((s = s.type),
                            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
                            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    fi = Symbol.for("react.element"),
    Yn = Symbol.for("react.portal"),
    Jn = Symbol.for("react.fragment"),
    Ou = Symbol.for("react.strict_mode"),
    ul = Symbol.for("react.profiler"),
    Fp = Symbol.for("react.provider"),
    Ip = Symbol.for("react.context"),
    Vu = Symbol.for("react.forward_ref"),
    cl = Symbol.for("react.suspense"),
    fl = Symbol.for("react.suspense_list"),
    ju = Symbol.for("react.memo"),
    Xt = Symbol.for("react.lazy"),
    Op = Symbol.for("react.offscreen"),
    Df = Symbol.iterator;
function Wr(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Df && e[Df]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
}
var Z = Object.assign,
    pa;
function Zr(e) {
    if (pa === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            pa = (t && t[1]) || "";
        }
    return (
        `
` +
        pa +
        e
    );
}
var ma = !1;
function ga(e, t) {
    if (!e || ma) return "";
    ma = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                    Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var s = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    o = s.length - 1,
                    a = i.length - 1;
                1 <= o && 0 <= a && s[o] !== i[a];

            )
                a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if ((o--, a--, 0 > a || s[o] !== i[a])) {
                                var l =
                                    `
` + s[o].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                    l.includes("<anonymous>") &&
                                    (l = l.replace("<anonymous>", e.displayName)),
                                        l
                                );
                            }
                        while (1 <= o && 0 <= a);
                    break;
                }
        }
    } finally {
        (ma = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Zr(e) : "";
}
function Wv(e) {
    switch (e.tag) {
        case 5:
            return Zr(e.type);
        case 16:
            return Zr("Lazy");
        case 13:
            return Zr("Suspense");
        case 19:
            return Zr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = ga(e.type, !1)), e;
        case 11:
            return (e = ga(e.type.render, !1)), e;
        case 1:
            return (e = ga(e.type, !0)), e;
        default:
            return "";
    }
}
function dl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Jn:
            return "Fragment";
        case Yn:
            return "Portal";
        case ul:
            return "Profiler";
        case Ou:
            return "StrictMode";
        case cl:
            return "Suspense";
        case fl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Ip:
                return (e.displayName || "Context") + ".Consumer";
            case Fp:
                return (e._context.displayName || "Context") + ".Provider";
            case Vu:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                    ((e = t.displayName || t.name || ""),
                        (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                        e
                );
            case ju:
                return (
                    (t = e.displayName || null), t !== null ? t : dl(e.type) || "Memo"
                );
            case Xt:
                (t = e._payload), (e = e._init);
                try {
                    return dl(e(t));
                } catch {}
        }
    return null;
}
function Hv(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                    (e = e.displayName || e.name || ""),
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return dl(t);
        case 8:
            return t === Ou ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function ln(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Vp(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function Kv(e) {
    var t = Vp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var s = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return s.call(this);
                },
                set: function (o) {
                    (r = "" + o), i.call(this, o);
                },
            }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                    getValue: function () {
                        return r;
                    },
                    setValue: function (o) {
                        r = "" + o;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[t];
                    },
                }
        );
    }
}
function di(e) {
    e._valueTracker || (e._valueTracker = Kv(e));
}
function jp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = Vp(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r),
            e !== n ? (t.setValue(e), !0) : !1
    );
}
function ro(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function hl(e, t) {
    var n = t.checked;
    return Z({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Ff(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ln(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function bp(e, t) {
    (t = t.checked), t != null && Iu(e, "checked", t, !1);
}
function pl(e, t) {
    bp(e, t);
    var n = ln(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? ml(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && ml(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
    t.defaultChecked != null &&
    (e.defaultChecked = !!t.defaultChecked);
}
function If(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
    n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ml(e, t, n) {
    (t !== "number" || ro(e.ownerDocument) !== e) &&
    (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var es = Array.isArray;
function pr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            (s = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + ln(n), t = null, s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                (e[s].selected = !0), r && (e[s].defaultSelected = !0);
                return;
            }
            t !== null || e[s].disabled || (t = e[s]);
        }
        t !== null && (t.selected = !0);
    }
}
function gl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
    return Z({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Of(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(E(92));
            if (es(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ln(n) };
}
function Bp(e, t) {
    var n = ln(t.value),
        r = ln(t.defaultValue);
    n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $p(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function yl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? $p(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e;
}
var hi,
    zp = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, s) {
                MSApp.execUnsafeLocalFunction(function () {
                    return e(t, n, r, s);
                });
            }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                hi = hi || document.createElement("div"),
                    hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = hi.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Es(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var fs = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Xv = ["Webkit", "ms", "Moz", "O"];
Object.keys(fs).forEach(function (e) {
    Xv.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fs[t] = fs[e]);
    });
});
function Up(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || (fs.hasOwnProperty(e) && fs[e])
            ? ("" + t).trim()
            : t + "px";
}
function Wp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                s = Up(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
        }
}
var Gv = Z(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    },
);
function vl(e, t) {
    if (t) {
        if (Gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(E(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(E(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(E(62));
    }
}
function wl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var xl = null;
function bu(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
    );
}
var Sl = null,
    mr = null,
    gr = null;
function jf(e) {
    if ((e = Js(e))) {
        if (typeof Sl != "function") throw Error(E(280));
        var t = e.stateNode;
        t && ((t = Wo(t)), Sl(e.stateNode, e.type, t));
    }
}
function Hp(e) {
    mr ? (gr ? gr.push(e) : (gr = [e])) : (mr = e);
}
function Kp() {
    if (mr) {
        var e = mr,
            t = gr;
        if (((gr = mr = null), jf(e), t)) for (e = 0; e < t.length; e++) jf(t[e]);
    }
}
function Xp(e, t) {
    return e(t);
}
function Gp() {}
var ya = !1;
function Qp(e, t, n) {
    if (ya) return e(t, n);
    ya = !0;
    try {
        return Xp(e, t, n);
    } finally {
        (ya = !1), (mr !== null || gr !== null) && (Gp(), Kp());
    }
}
function Ts(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
            ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(E(231, t, typeof n));
    return n;
}
var _l = !1;
if (bt)
    try {
        var Hr = {};
        Object.defineProperty(Hr, "passive", {
            get: function () {
                _l = !0;
            },
        }),
            window.addEventListener("test", Hr, Hr),
            window.removeEventListener("test", Hr, Hr);
    } catch {
        _l = !1;
    }
function Qv(e, t, n, r, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (f) {
        this.onError(f);
    }
}
var ds = !1,
    so = null,
    io = !1,
    Cl = null,
    Yv = {
        onError: function (e) {
            (ds = !0), (so = e);
        },
    };
function Jv(e, t, n, r, s, i, o, a, l) {
    (ds = !1), (so = null), Qv.apply(Yv, arguments);
}
function qv(e, t, n, r, s, i, o, a, l) {
    if ((Jv.apply(this, arguments), ds)) {
        if (ds) {
            var u = so;
            (ds = !1), (so = null);
        } else throw Error(E(198));
        io || ((io = !0), (Cl = u));
    }
}
function $n(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Yp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function bf(e) {
    if ($n(e) !== e) throw Error(E(188));
}
function Zv(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = $n(e)), t === null)) throw Error(E(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null) break;
        var i = s.alternate;
        if (i === null) {
            if (((r = s.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n) return bf(s), e;
                if (i === r) return bf(s), t;
                i = i.sibling;
            }
            throw Error(E(188));
        }
        if (n.return !== r.return) (n = s), (r = i);
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === n) {
                    (o = !0), (n = s), (r = i);
                    break;
                }
                if (a === r) {
                    (o = !0), (r = s), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (o = !0), (n = i), (r = s);
                        break;
                    }
                    if (a === r) {
                        (o = !0), (r = i), (n = s);
                        break;
                    }
                    a = a.sibling;
                }
                if (!o) throw Error(E(189));
            }
        }
        if (n.alternate !== r) throw Error(E(190));
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t;
}
function Jp(e) {
    return (e = Zv(e)), e !== null ? qp(e) : null;
}
function qp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = qp(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Zp = He.unstable_scheduleCallback,
    Bf = He.unstable_cancelCallback,
    ew = He.unstable_shouldYield,
    tw = He.unstable_requestPaint,
    re = He.unstable_now,
    nw = He.unstable_getCurrentPriorityLevel,
    Bu = He.unstable_ImmediatePriority,
    em = He.unstable_UserBlockingPriority,
    oo = He.unstable_NormalPriority,
    rw = He.unstable_LowPriority,
    tm = He.unstable_IdlePriority,
    Bo = null,
    _t = null;
function sw(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function")
        try {
            _t.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var dt = Math.clz32 ? Math.clz32 : aw,
    iw = Math.log,
    ow = Math.LN2;
function aw(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((iw(e) / ow) | 0)) | 0;
}
var pi = 64,
    mi = 4194304;
function ts(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function ao(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        s = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? (r = ts(a)) : ((i &= o), i !== 0 && (r = ts(i)));
    } else (o = n & ~s), o !== 0 ? (r = ts(o)) : i !== 0 && (r = ts(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & s) &&
        ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - dt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
    return r;
}
function lw(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function uw(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            s = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var o = 31 - dt(i),
            a = 1 << o,
            l = s[o];
        l === -1
            ? (!(a & n) || a & r) && (s[o] = lw(a, t))
            : l <= t && (e.expiredLanes |= a),
            (i &= ~a);
    }
}
function Pl(e) {
    return (
        (e = e.pendingLanes & -1073741825),
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function nm() {
    var e = pi;
    return (pi <<= 1), !(pi & 4194240) && (pi = 64), e;
}
function va(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Qs(e, t, n) {
    (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - dt(t)),
        (e[t] = n);
}
function cw(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - dt(n),
            i = 1 << s;
        (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
    }
}
function $u(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - dt(n),
            s = 1 << r;
        (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
    }
}
var $ = 0;
function rm(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sm,
    zu,
    im,
    om,
    am,
    kl = !1,
    gi = [],
    Zt = null,
    en = null,
    tn = null,
    As = new Map(),
    Rs = new Map(),
    Qt = [],
    fw =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " ",
        );
function $f(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Zt = null;
            break;
        case "dragenter":
        case "dragleave":
            en = null;
            break;
        case "mouseover":
        case "mouseout":
            tn = null;
            break;
        case "pointerover":
        case "pointerout":
            As.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Rs.delete(t.pointerId);
    }
}
function Kr(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: i,
            targetContainers: [s],
        }),
        t !== null && ((t = Js(t)), t !== null && zu(t)),
            e)
        : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
            e);
}
function dw(e, t, n, r, s) {
    switch (t) {
        case "focusin":
            return (Zt = Kr(Zt, e, t, n, r, s)), !0;
        case "dragenter":
            return (en = Kr(en, e, t, n, r, s)), !0;
        case "mouseover":
            return (tn = Kr(tn, e, t, n, r, s)), !0;
        case "pointerover":
            var i = s.pointerId;
            return As.set(i, Kr(As.get(i) || null, e, t, n, r, s)), !0;
        case "gotpointercapture":
            return (
                (i = s.pointerId), Rs.set(i, Kr(Rs.get(i) || null, e, t, n, r, s)), !0
            );
    }
    return !1;
}
function lm(e) {
    var t = En(e.target);
    if (t !== null) {
        var n = $n(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Yp(n)), t !== null)) {
                    (e.blockedOn = t),
                        am(e.priority, function () {
                            im(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function ji(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = El(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (xl = r), n.target.dispatchEvent(r), (xl = null);
        } else return (t = Js(n)), t !== null && zu(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function zf(e, t, n) {
    ji(e) && n.delete(t);
}
function hw() {
    (kl = !1),
    Zt !== null && ji(Zt) && (Zt = null),
    en !== null && ji(en) && (en = null),
    tn !== null && ji(tn) && (tn = null),
        As.forEach(zf),
        Rs.forEach(zf);
}
function Xr(e, t) {
    e.blockedOn === t &&
    ((e.blockedOn = null),
    kl ||
    ((kl = !0),
        He.unstable_scheduleCallback(He.unstable_NormalPriority, hw)));
}
function Ms(e) {
    function t(s) {
        return Xr(s, e);
    }
    if (0 < gi.length) {
        Xr(gi[0], e);
        for (var n = 1; n < gi.length; n++) {
            var r = gi[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Zt !== null && Xr(Zt, e),
        en !== null && Xr(en, e),
        tn !== null && Xr(tn, e),
            As.forEach(t),
            Rs.forEach(t),
            n = 0;
        n < Qt.length;
        n++
    )
        (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
        lm(n), n.blockedOn === null && Qt.shift();
}
var yr = Ut.ReactCurrentBatchConfig,
    lo = !0;
function pw(e, t, n, r) {
    var s = $,
        i = yr.transition;
    yr.transition = null;
    try {
        ($ = 1), Uu(e, t, n, r);
    } finally {
        ($ = s), (yr.transition = i);
    }
}
function mw(e, t, n, r) {
    var s = $,
        i = yr.transition;
    yr.transition = null;
    try {
        ($ = 4), Uu(e, t, n, r);
    } finally {
        ($ = s), (yr.transition = i);
    }
}
function Uu(e, t, n, r) {
    if (lo) {
        var s = El(e, t, n, r);
        if (s === null) Aa(e, t, r, uo, n), $f(e, r);
        else if (dw(s, e, t, n, r)) r.stopPropagation();
        else if (($f(e, r), t & 4 && -1 < fw.indexOf(e))) {
            for (; s !== null; ) {
                var i = Js(s);
                if (
                    (i !== null && sm(i),
                        (i = El(e, t, n, r)),
                    i === null && Aa(e, t, r, uo, n),
                    i === s)
                )
                    break;
                s = i;
            }
            s !== null && r.stopPropagation();
        } else Aa(e, t, r, null, n);
    }
}
var uo = null;
function El(e, t, n, r) {
    if (((uo = null), (e = bu(r)), (e = En(e)), e !== null))
        if (((t = $n(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Yp(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (uo = e), null;
}
function um(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (nw()) {
                case Bu:
                    return 1;
                case em:
                    return 4;
                case oo:
                case rw:
                    return 16;
                case tm:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Jt = null,
    Wu = null,
    bi = null;
function cm() {
    if (bi) return bi;
    var e,
        t = Wu,
        n = t.length,
        r,
        s = "value" in Jt ? Jt.value : Jt.textContent,
        i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
    return (bi = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Bi(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
    );
}
function yi() {
    return !0;
}
function Uf() {
    return !1;
}
function Ge(e) {
    function t(n, r, s, i, o) {
        (this._reactName = n),
            (this._targetInst = s),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null);
        for (var a in e)
            e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
            )
                ? yi
                : Uf),
                (this.isPropagationStopped = Uf),
                this
        );
    }
    return (
        Z(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                (n.preventDefault
                    ? n.preventDefault()
                    : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = yi));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                (n.stopPropagation
                    ? n.stopPropagation()
                    : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = yi));
            },
            persist: function () {},
            isPersistent: yi,
        }),
            t
    );
}
var Vr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Hu = Ge(Vr),
    Ys = Z({}, Vr, { view: 0, detail: 0 }),
    gw = Ge(Ys),
    wa,
    xa,
    Gr,
    $o = Z({}, Ys, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ku,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Gr &&
                (Gr && e.type === "mousemove"
                    ? ((wa = e.screenX - Gr.screenX), (xa = e.screenY - Gr.screenY))
                    : (xa = wa = 0),
                    (Gr = e)),
                    wa);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : xa;
        },
    }),
    Wf = Ge($o),
    yw = Z({}, $o, { dataTransfer: 0 }),
    vw = Ge(yw),
    ww = Z({}, Ys, { relatedTarget: 0 }),
    Sa = Ge(ww),
    xw = Z({}, Vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sw = Ge(xw),
    _w = Z({}, Vr, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Cw = Ge(_w),
    Pw = Z({}, Vr, { data: 0 }),
    Hf = Ge(Pw),
    kw = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Ew = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Tw = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Aw(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Tw[e]) ? !!t[e] : !1;
}
function Ku() {
    return Aw;
}
var Rw = Z({}, Ys, {
        key: function (e) {
            if (e.key) {
                var t = kw[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                    ? Ew[e.keyCode] || "Unidentified"
                    : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ku,
        charCode: function (e) {
            return e.type === "keypress" ? Bi(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Bi(e)
                : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
        },
    }),
    Mw = Ge(Rw),
    Lw = Z({}, $o, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Kf = Ge(Lw),
    Nw = Z({}, Ys, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ku,
    }),
    Dw = Ge(Nw),
    Fw = Z({}, Vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Iw = Ge(Fw),
    Ow = Z({}, $o, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Vw = Ge(Ow),
    jw = [9, 13, 27, 32],
    Xu = bt && "CompositionEvent" in window,
    hs = null;
bt && "documentMode" in document && (hs = document.documentMode);
var bw = bt && "TextEvent" in window && !hs,
    fm = bt && (!Xu || (hs && 8 < hs && 11 >= hs)),
    Xf = " ",
    Gf = !1;
function dm(e, t) {
    switch (e) {
        case "keyup":
            return jw.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function hm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qn = !1;
function Bw(e, t) {
    switch (e) {
        case "compositionend":
            return hm(t);
        case "keypress":
            return t.which !== 32 ? null : ((Gf = !0), Xf);
        case "textInput":
            return (e = t.data), e === Xf && Gf ? null : e;
        default:
            return null;
    }
}
function $w(e, t) {
    if (qn)
        return e === "compositionend" || (!Xu && dm(e, t))
            ? ((e = cm()), (bi = Wu = Jt = null), (qn = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return fm && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var zw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Qf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zw[e.type] : t === "textarea";
}
function pm(e, t, n, r) {
    Hp(r),
        (t = co(t, "onChange")),
    0 < t.length &&
    ((n = new Hu("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
}
var ps = null,
    Ls = null;
function Uw(e) {
    km(e, 0);
}
function zo(e) {
    var t = tr(e);
    if (jp(t)) return e;
}
function Ww(e, t) {
    if (e === "change") return t;
}
var mm = !1;
if (bt) {
    var _a;
    if (bt) {
        var Ca = "oninput" in document;
        if (!Ca) {
            var Yf = document.createElement("div");
            Yf.setAttribute("oninput", "return;"),
                (Ca = typeof Yf.oninput == "function");
        }
        _a = Ca;
    } else _a = !1;
    mm = _a && (!document.documentMode || 9 < document.documentMode);
}
function Jf() {
    ps && (ps.detachEvent("onpropertychange", gm), (Ls = ps = null));
}
function gm(e) {
    if (e.propertyName === "value" && zo(Ls)) {
        var t = [];
        pm(t, Ls, e, bu(e)), Qp(Uw, t);
    }
}
function Hw(e, t, n) {
    e === "focusin"
        ? (Jf(), (ps = t), (Ls = n), ps.attachEvent("onpropertychange", gm))
        : e === "focusout" && Jf();
}
function Kw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return zo(Ls);
}
function Xw(e, t) {
    if (e === "click") return zo(t);
}
function Gw(e, t) {
    if (e === "input" || e === "change") return zo(t);
}
function Qw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : Qw;
function Ns(e, t) {
    if (pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!ll.call(t, s) || !pt(e[s], t[s])) return !1;
    }
    return !0;
}
function qf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Zf(e, t) {
    var n = qf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = qf(n);
    }
}
function ym(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
                ? !1
                : t && t.nodeType === 3
                    ? ym(e, t.parentNode)
                    : "contains" in e
                        ? e.contains(t)
                        : e.compareDocumentPosition
                            ? !!(e.compareDocumentPosition(t) & 16)
                            : !1
        : !1;
}
function vm() {
    for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ro(e.document);
    }
    return t;
}
function Gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function Yw(e) {
    var t = vm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        ym(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Gu(n)) {
            if (
                ((t = r.start),
                    (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
                    e.getSelection)
            ) {
                e = e.getSelection();
                var s = n.textContent.length,
                    i = Math.min(r.start, s);
                (r = r.end === void 0 ? i : Math.min(r.end, s)),
                !e.extend && i > r && ((s = r), (r = i), (i = s)),
                    (s = Zf(n, i));
                var o = Zf(n, r);
                s &&
                o &&
                (e.rangeCount !== 1 ||
                    e.anchorNode !== s.node ||
                    e.anchorOffset !== s.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                ((t = t.createRange()),
                    t.setStart(s.node, s.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(o.node, o.offset))
                        : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Jw = bt && "documentMode" in document && 11 >= document.documentMode,
    Zn = null,
    Tl = null,
    ms = null,
    Al = !1;
function ed(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Al ||
    Zn == null ||
    Zn !== ro(r) ||
    ((r = Zn),
        "selectionStart" in r && Gu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
            ).getSelection()),
                (r = {
                    anchorNode: r.anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                })),
    (ms && Ns(ms, r)) ||
    ((ms = r),
        (r = co(Tl, "onSelect")),
    0 < r.length &&
    ((t = new Hu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zn))));
}
function vi(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
    );
}
var er = {
        animationend: vi("Animation", "AnimationEnd"),
        animationiteration: vi("Animation", "AnimationIteration"),
        animationstart: vi("Animation", "AnimationStart"),
        transitionend: vi("Transition", "TransitionEnd"),
    },
    Pa = {},
    wm = {};
bt &&
((wm = document.createElement("div").style),
"AnimationEvent" in window ||
(delete er.animationend.animation,
    delete er.animationiteration.animation,
    delete er.animationstart.animation),
"TransitionEvent" in window || delete er.transitionend.transition);
function Uo(e) {
    if (Pa[e]) return Pa[e];
    if (!er[e]) return e;
    var t = er[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in wm) return (Pa[e] = t[n]);
    return e;
}
var xm = Uo("animationend"),
    Sm = Uo("animationiteration"),
    _m = Uo("animationstart"),
    Cm = Uo("transitionend"),
    Pm = new Map(),
    td =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
        );
function hn(e, t) {
    Pm.set(e, t), Bn(t, [e]);
}
for (var ka = 0; ka < td.length; ka++) {
    var Ea = td[ka],
        qw = Ea.toLowerCase(),
        Zw = Ea[0].toUpperCase() + Ea.slice(1);
    hn(qw, "on" + Zw);
}
hn(xm, "onAnimationEnd");
hn(Sm, "onAnimationIteration");
hn(_m, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Cm, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
Bn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
    ),
);
Bn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
    ),
);
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Bn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Bn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ns =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
    e1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
function nd(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), qv(r, t, void 0, e), (e.currentTarget = null);
}
function km(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
                    nd(s, a, u), (i = l);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((a = r[o]),
                            (l = a.instance),
                            (u = a.currentTarget),
                            (a = a.listener),
                        l !== i && s.isPropagationStopped())
                    )
                        break e;
                    nd(s, a, u), (i = l);
                }
        }
    }
    if (io) throw ((e = Cl), (io = !1), (Cl = null), e);
}
function K(e, t) {
    var n = t[Dl];
    n === void 0 && (n = t[Dl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Em(t, e, 2, !1), n.add(r));
}
function Ta(e, t, n) {
    var r = 0;
    t && (r |= 4), Em(n, e, r, t);
}
var wi = "_reactListening" + Math.random().toString(36).slice(2);
function Ds(e) {
    if (!e[wi]) {
        (e[wi] = !0),
            Dp.forEach(function (n) {
                n !== "selectionchange" && (e1.has(n) || Ta(n, !1, e), Ta(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[wi] || ((t[wi] = !0), Ta("selectionchange", !1, t));
    }
}
function Em(e, t, n, r) {
    switch (um(t)) {
        case 1:
            var s = pw;
            break;
        case 4:
            s = mw;
            break;
        default:
            s = Uu;
    }
    (n = s.bind(null, t, n, e)),
        (s = void 0),
    !_l ||
    (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
    (s = !0),
        r
            ? s !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: s })
                : e.addEventListener(t, n, !0)
            : s !== void 0
                ? e.addEventListener(t, n, { passive: s })
                : e.addEventListener(t, n, !1);
}
function Aa(e, t, n, r, s) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = o.stateNode.containerInfo),
                            l === s || (l.nodeType === 8 && l.parentNode === s))
                        )
                            return;
                        o = o.return;
                    }
                for (; a !== null; ) {
                    if (((o = En(a)), o === null)) return;
                    if (((l = o.tag), l === 5 || l === 6)) {
                        r = i = o;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Qp(function () {
        var u = i,
            f = bu(n),
            c = [];
        e: {
            var d = Pm.get(e);
            if (d !== void 0) {
                var g = Hu,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (Bi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = Mw;
                        break;
                    case "focusin":
                        (y = "focus"), (g = Sa);
                        break;
                    case "focusout":
                        (y = "blur"), (g = Sa);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = Sa;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Wf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = vw;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Dw;
                        break;
                    case xm:
                    case Sm:
                    case _m:
                        g = Sw;
                        break;
                    case Cm:
                        g = Iw;
                        break;
                    case "scroll":
                        g = gw;
                        break;
                    case "wheel":
                        g = Vw;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = Cw;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Kf;
                }
                var v = (t & 4) !== 0,
                    x = !v && e === "scroll",
                    m = v ? (d !== null ? d + "Capture" : null) : d;
                v = [];
                for (var h = u, p; h !== null; ) {
                    p = h;
                    var w = p.stateNode;
                    if (
                        (p.tag === 5 &&
                        w !== null &&
                        ((p = w),
                        m !== null && ((w = Ts(h, m)), w != null && v.push(Fs(h, w, p)))),
                            x)
                    )
                        break;
                    h = h.return;
                }
                0 < v.length &&
                ((d = new g(d, y, null, n, f)), c.push({ event: d, listeners: v }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((d = e === "mouseover" || e === "pointerover"),
                        (g = e === "mouseout" || e === "pointerout"),
                    d &&
                    n !== xl &&
                    (y = n.relatedTarget || n.fromElement) &&
                    (En(y) || y[Bt]))
                )
                    break e;
                if (
                    (g || d) &&
                    ((d =
                        f.window === f
                            ? f
                            : (d = f.ownerDocument)
                                ? d.defaultView || d.parentWindow
                                : window),
                        g
                            ? ((y = n.relatedTarget || n.toElement),
                                (g = u),
                                (y = y ? En(y) : null),
                            y !== null &&
                            ((x = $n(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                            (y = null))
                            : ((g = null), (y = u)),
                    g !== y)
                ) {
                    if (
                        ((v = Wf),
                            (w = "onMouseLeave"),
                            (m = "onMouseEnter"),
                            (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                        ((v = Kf),
                            (w = "onPointerLeave"),
                            (m = "onPointerEnter"),
                            (h = "pointer")),
                            (x = g == null ? d : tr(g)),
                            (p = y == null ? d : tr(y)),
                            (d = new v(w, h + "leave", g, n, f)),
                            (d.target = x),
                            (d.relatedTarget = p),
                            (w = null),
                        En(f) === u &&
                        ((v = new v(m, h + "enter", y, n, f)),
                            (v.target = p),
                            (v.relatedTarget = x),
                            (w = v)),
                            (x = w),
                        g && y)
                    )
                        t: {
                            for (v = g, m = y, h = 0, p = v; p; p = Hn(p)) h++;
                            for (p = 0, w = m; w; w = Hn(w)) p++;
                            for (; 0 < h - p; ) (v = Hn(v)), h--;
                            for (; 0 < p - h; ) (m = Hn(m)), p--;
                            for (; h--; ) {
                                if (v === m || (m !== null && v === m.alternate)) break t;
                                (v = Hn(v)), (m = Hn(m));
                            }
                            v = null;
                        }
                    else v = null;
                    g !== null && rd(c, d, g, v, !1),
                    y !== null && x !== null && rd(c, x, y, v, !0);
                }
            }
            e: {
                if (
                    ((d = u ? tr(u) : window),
                        (g = d.nodeName && d.nodeName.toLowerCase()),
                    g === "select" || (g === "input" && d.type === "file"))
                )
                    var S = Ww;
                else if (Qf(d))
                    if (mm) S = Gw;
                    else {
                        S = Kw;
                        var _ = Hw;
                    }
                else
                    (g = d.nodeName) &&
                    g.toLowerCase() === "input" &&
                    (d.type === "checkbox" || d.type === "radio") &&
                    (S = Xw);
                if (S && (S = S(e, u))) {
                    pm(c, S, n, f);
                    break e;
                }
                _ && _(e, d, u),
                e === "focusout" &&
                (_ = d._wrapperState) &&
                _.controlled &&
                d.type === "number" &&
                ml(d, "number", d.value);
            }
            switch (((_ = u ? tr(u) : window), e)) {
                case "focusin":
                    (Qf(_) || _.contentEditable === "true") &&
                    ((Zn = _), (Tl = u), (ms = null));
                    break;
                case "focusout":
                    ms = Tl = Zn = null;
                    break;
                case "mousedown":
                    Al = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Al = !1), ed(c, n, f);
                    break;
                case "selectionchange":
                    if (Jw) break;
                case "keydown":
                case "keyup":
                    ed(c, n, f);
            }
            var P;
            if (Xu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var k = "onCompositionStart";
                            break e;
                        case "compositionend":
                            k = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            k = "onCompositionUpdate";
                            break e;
                    }
                    k = void 0;
                }
            else
                qn
                    ? dm(e, n) && (k = "onCompositionEnd")
                    : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k &&
            (fm &&
            n.locale !== "ko" &&
            (qn || k !== "onCompositionStart"
                ? k === "onCompositionEnd" && qn && (P = cm())
                : ((Jt = f),
                    (Wu = "value" in Jt ? Jt.value : Jt.textContent),
                    (qn = !0))),
                (_ = co(u, k)),
            0 < _.length &&
            ((k = new Hf(k, e, null, n, f)),
                c.push({ event: k, listeners: _ }),
                P ? (k.data = P) : ((P = hm(n)), P !== null && (k.data = P)))),
            (P = bw ? Bw(e, n) : $w(e, n)) &&
            ((u = co(u, "onBeforeInput")),
            0 < u.length &&
            ((f = new Hf("onBeforeInput", "beforeinput", null, n, f)),
                c.push({ event: f, listeners: u }),
                (f.data = P)));
        }
        km(c, t);
    });
}
function Fs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function co(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e,
            i = s.stateNode;
        s.tag === 5 &&
        i !== null &&
        ((s = i),
            (i = Ts(e, n)),
        i != null && r.unshift(Fs(e, i, s)),
            (i = Ts(e, t)),
        i != null && r.push(Fs(e, i, s))),
            (e = e.return);
    }
    return r;
}
function Hn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function rd(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
        u !== null &&
        ((a = u),
            s
                ? ((l = Ts(n, i)), l != null && o.unshift(Fs(n, l, a)))
                : s || ((l = Ts(n, i)), l != null && o.push(Fs(n, l, a)))),
            (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
}
var t1 = /\r\n?/g,
    n1 = /\u0000|\uFFFD/g;
function sd(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            t1,
            `
`,
        )
        .replace(n1, "");
}
function xi(e, t, n) {
    if (((t = sd(t)), sd(e) !== t && n)) throw Error(E(425));
}
function fo() {}
var Rl = null,
    Ml = null;
function Ll(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Nl = typeof setTimeout == "function" ? setTimeout : void 0,
    r1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    id = typeof Promise == "function" ? Promise : void 0,
    s1 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof id < "u"
                ? function (e) {
                    return id.resolve(null).then(e).catch(i1);
                }
                : Nl;
function i1(e) {
    setTimeout(function () {
        throw e;
    });
}
function Ra(e, t) {
    var n = t,
        r = 0;
    do {
        var s = n.nextSibling;
        if ((e.removeChild(n), s && s.nodeType === 8))
            if (((n = s.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(s), Ms(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = s;
    } while (n);
    Ms(t);
}
function nn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function od(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var jr = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + jr,
    Is = "__reactProps$" + jr,
    Bt = "__reactContainer$" + jr,
    Dl = "__reactEvents$" + jr,
    o1 = "__reactListeners$" + jr,
    a1 = "__reactHandles$" + jr;
function En(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Bt] || n[xt])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = od(e); e !== null; ) {
                    if ((n = e[xt])) return n;
                    e = od(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Js(e) {
    return (
        (e = e[xt] || e[Bt]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
}
function tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33));
}
function Wo(e) {
    return e[Is] || null;
}
var Fl = [],
    nr = -1;
function pn(e) {
    return { current: e };
}
function X(e) {
    0 > nr || ((e.current = Fl[nr]), (Fl[nr] = null), nr--);
}
function H(e, t) {
    nr++, (Fl[nr] = e.current), (e.current = t);
}
var un = {},
    Te = pn(un),
    Oe = pn(!1),
    Fn = un;
function kr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return un;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {},
        i;
    for (i in n) s[i] = t[i];
    return (
        r &&
        ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = s)),
            s
    );
}
function Ve(e) {
    return (e = e.childContextTypes), e != null;
}
function ho() {
    X(Oe), X(Te);
}
function ad(e, t, n) {
    if (Te.current !== un) throw Error(E(168));
    H(Te, t), H(Oe, n);
}
function Tm(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(E(108, Hv(e) || "Unknown", s));
    return Z({}, n, r);
}
function po(e) {
    return (
        (e =
            ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
            (Fn = Te.current),
            H(Te, e),
            H(Oe, Oe.current),
            !0
    );
}
function ld(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n
        ? ((e = Tm(e, t, Fn)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            X(Oe),
            X(Te),
            H(Te, e))
        : X(Oe),
        H(Oe, n);
}
var Mt = null,
    Ho = !1,
    Ma = !1;
function Am(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
}
function l1(e) {
    (Ho = !0), Am(e);
}
function mn() {
    if (!Ma && Mt !== null) {
        Ma = !0;
        var e = 0,
            t = $;
        try {
            var n = Mt;
            for ($ = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Mt = null), (Ho = !1);
        } catch (s) {
            throw (Mt !== null && (Mt = Mt.slice(e + 1)), Zp(Bu, mn), s);
        } finally {
            ($ = t), (Ma = !1);
        }
    }
    return null;
}
var rr = [],
    sr = 0,
    mo = null,
    go = 0,
    Je = [],
    qe = 0,
    In = null,
    Lt = 1,
    Nt = "";
function Sn(e, t) {
    (rr[sr++] = go), (rr[sr++] = mo), (mo = e), (go = t);
}
function Rm(e, t, n) {
    (Je[qe++] = Lt), (Je[qe++] = Nt), (Je[qe++] = In), (In = e);
    var r = Lt;
    e = Nt;
    var s = 32 - dt(r) - 1;
    (r &= ~(1 << s)), (n += 1);
    var i = 32 - dt(t) + s;
    if (30 < i) {
        var o = s - (s % 5);
        (i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (s -= o),
            (Lt = (1 << (32 - dt(t) + s)) | (n << s) | r),
            (Nt = i + e);
    } else (Lt = (1 << i) | (n << s) | r), (Nt = e);
}
function Qu(e) {
    e.return !== null && (Sn(e, 1), Rm(e, 1, 0));
}
function Yu(e) {
    for (; e === mo; )
        (mo = rr[--sr]), (rr[sr] = null), (go = rr[--sr]), (rr[sr] = null);
    for (; e === In; )
        (In = Je[--qe]),
            (Je[qe] = null),
            (Nt = Je[--qe]),
            (Je[qe] = null),
            (Lt = Je[--qe]),
            (Je[qe] = null);
}
var We = null,
    Ue = null,
    G = !1,
    ut = null;
function Mm(e, t) {
    var n = Ze(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ud(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                    t !== null
                        ? ((e.stateNode = t), (We = e), (Ue = nn(t.firstChild)), !0)
                        : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                    t !== null ? ((e.stateNode = t), (We = e), (Ue = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((n = In !== null ? { id: Lt, overflow: Nt } : null),
                            (e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824,
                            }),
                            (n = Ze(18, null, null, 0)),
                            (n.stateNode = t),
                            (n.return = e),
                            (e.child = n),
                            (We = e),
                            (Ue = null),
                            !0)
                        : !1
            );
        default:
            return !1;
    }
}
function Il(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ol(e) {
    if (G) {
        var t = Ue;
        if (t) {
            var n = t;
            if (!ud(e, t)) {
                if (Il(e)) throw Error(E(418));
                t = nn(n.nextSibling);
                var r = We;
                t && ud(e, t)
                    ? Mm(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (G = !1), (We = e));
            }
        } else {
            if (Il(e)) throw Error(E(418));
            (e.flags = (e.flags & -4097) | 2), (G = !1), (We = e);
        }
    }
}
function cd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    We = e;
}
function Si(e) {
    if (e !== We) return !1;
    if (!G) return cd(e), (G = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
            (t = t !== "head" && t !== "body" && !Ll(e.type, e.memoizedProps))),
        t && (t = Ue))
    ) {
        if (Il(e)) throw (Lm(), Error(E(418)));
        for (; t; ) Mm(e, t), (t = nn(t.nextSibling));
    }
    if ((cd(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(E(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ue = nn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ue = null;
        }
    } else Ue = We ? nn(e.stateNode.nextSibling) : null;
    return !0;
}
function Lm() {
    for (var e = Ue; e; ) e = nn(e.nextSibling);
}
function Er() {
    (Ue = We = null), (G = !1);
}
function Ju(e) {
    ut === null ? (ut = [e]) : ut.push(e);
}
var u1 = Ut.ReactCurrentBatchConfig;
function Qr(e, t, n) {
    if (
        ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(E(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(E(147, e));
            var s = r,
                i = "" + e;
            return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === i
                ? t.ref
                : ((t = function (o) {
                    var a = s.refs;
                    o === null ? delete a[i] : (a[i] = o);
                }),
                    (t._stringRef = i),
                    t);
        }
        if (typeof e != "string") throw Error(E(284));
        if (!n._owner) throw Error(E(290, e));
    }
    return e;
}
function _i(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
            Error(
                E(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : e,
                ),
            ))
    );
}
function fd(e) {
    var t = e._init;
    return t(e._payload);
}
function Nm(e) {
    function t(m, h) {
        if (e) {
            var p = m.deletions;
            p === null ? ((m.deletions = [h]), (m.flags |= 16)) : p.push(h);
        }
    }
    function n(m, h) {
        if (!e) return null;
        for (; h !== null; ) t(m, h), (h = h.sibling);
        return null;
    }
    function r(m, h) {
        for (m = new Map(); h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
        return m;
    }
    function s(m, h) {
        return (m = an(m, h)), (m.index = 0), (m.sibling = null), m;
    }
    function i(m, h, p) {
        return (
            (m.index = p),
                e
                    ? ((p = m.alternate),
                        p !== null
                            ? ((p = p.index), p < h ? ((m.flags |= 2), h) : p)
                            : ((m.flags |= 2), h))
                    : ((m.flags |= 1048576), h)
        );
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, h, p, w) {
        return h === null || h.tag !== 6
            ? ((h = Va(p, m.mode, w)), (h.return = m), h)
            : ((h = s(h, p)), (h.return = m), h);
    }
    function l(m, h, p, w) {
        var S = p.type;
        return S === Jn
            ? f(m, h, p.props.children, w, p.key)
            : h !== null &&
            (h.elementType === S ||
                (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Xt &&
                    fd(S) === h.type))
                ? ((w = s(h, p.props)), (w.ref = Qr(m, h, p)), (w.return = m), w)
                : ((w = Xi(p.type, p.key, p.props, null, m.mode, w)),
                    (w.ref = Qr(m, h, p)),
                    (w.return = m),
                    w);
    }
    function u(m, h, p, w) {
        return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== p.containerInfo ||
        h.stateNode.implementation !== p.implementation
            ? ((h = ja(p, m.mode, w)), (h.return = m), h)
            : ((h = s(h, p.children || [])), (h.return = m), h);
    }
    function f(m, h, p, w, S) {
        return h === null || h.tag !== 7
            ? ((h = Nn(p, m.mode, w, S)), (h.return = m), h)
            : ((h = s(h, p)), (h.return = m), h);
    }
    function c(m, h, p) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return (h = Va("" + h, m.mode, p)), (h.return = m), h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case fi:
                    return (
                        (p = Xi(h.type, h.key, h.props, null, m.mode, p)),
                            (p.ref = Qr(m, null, h)),
                            (p.return = m),
                            p
                    );
                case Yn:
                    return (h = ja(h, m.mode, p)), (h.return = m), h;
                case Xt:
                    var w = h._init;
                    return c(m, w(h._payload), p);
            }
            if (es(h) || Wr(h))
                return (h = Nn(h, m.mode, p, null)), (h.return = m), h;
            _i(m, h);
        }
        return null;
    }
    function d(m, h, p, w) {
        var S = h !== null ? h.key : null;
        if ((typeof p == "string" && p !== "") || typeof p == "number")
            return S !== null ? null : a(m, h, "" + p, w);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case fi:
                    return p.key === S ? l(m, h, p, w) : null;
                case Yn:
                    return p.key === S ? u(m, h, p, w) : null;
                case Xt:
                    return (S = p._init), d(m, h, S(p._payload), w);
            }
            if (es(p) || Wr(p)) return S !== null ? null : f(m, h, p, w, null);
            _i(m, p);
        }
        return null;
    }
    function g(m, h, p, w, S) {
        if ((typeof w == "string" && w !== "") || typeof w == "number")
            return (m = m.get(p) || null), a(h, m, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case fi:
                    return (m = m.get(w.key === null ? p : w.key) || null), l(h, m, w, S);
                case Yn:
                    return (m = m.get(w.key === null ? p : w.key) || null), u(h, m, w, S);
                case Xt:
                    var _ = w._init;
                    return g(m, h, p, _(w._payload), S);
            }
            if (es(w) || Wr(w)) return (m = m.get(p) || null), f(h, m, w, S, null);
            _i(h, w);
        }
        return null;
    }
    function y(m, h, p, w) {
        for (
            var S = null, _ = null, P = h, k = (h = 0), N = null;
            P !== null && k < p.length;
            k++
        ) {
            P.index > k ? ((N = P), (P = null)) : (N = P.sibling);
            var R = d(m, P, p[k], w);
            if (R === null) {
                P === null && (P = N);
                break;
            }
            e && P && R.alternate === null && t(m, P),
                (h = i(R, h, k)),
                _ === null ? (S = R) : (_.sibling = R),
                (_ = R),
                (P = N);
        }
        if (k === p.length) return n(m, P), G && Sn(m, k), S;
        if (P === null) {
            for (; k < p.length; k++)
                (P = c(m, p[k], w)),
                P !== null &&
                ((h = i(P, h, k)), _ === null ? (S = P) : (_.sibling = P), (_ = P));
            return G && Sn(m, k), S;
        }
        for (P = r(m, P); k < p.length; k++)
            (N = g(P, m, k, p[k], w)),
            N !== null &&
            (e && N.alternate !== null && P.delete(N.key === null ? k : N.key),
                (h = i(N, h, k)),
                _ === null ? (S = N) : (_.sibling = N),
                (_ = N));
        return (
            e &&
            P.forEach(function (F) {
                return t(m, F);
            }),
            G && Sn(m, k),
                S
        );
    }
    function v(m, h, p, w) {
        var S = Wr(p);
        if (typeof S != "function") throw Error(E(150));
        if (((p = S.call(p)), p == null)) throw Error(E(151));
        for (
            var _ = (S = null), P = h, k = (h = 0), N = null, R = p.next();
            P !== null && !R.done;
            k++, R = p.next()
        ) {
            P.index > k ? ((N = P), (P = null)) : (N = P.sibling);
            var F = d(m, P, R.value, w);
            if (F === null) {
                P === null && (P = N);
                break;
            }
            e && P && F.alternate === null && t(m, P),
                (h = i(F, h, k)),
                _ === null ? (S = F) : (_.sibling = F),
                (_ = F),
                (P = N);
        }
        if (R.done) return n(m, P), G && Sn(m, k), S;
        if (P === null) {
            for (; !R.done; k++, R = p.next())
                (R = c(m, R.value, w)),
                R !== null &&
                ((h = i(R, h, k)), _ === null ? (S = R) : (_.sibling = R), (_ = R));
            return G && Sn(m, k), S;
        }
        for (P = r(m, P); !R.done; k++, R = p.next())
            (R = g(P, m, k, R.value, w)),
            R !== null &&
            (e && R.alternate !== null && P.delete(R.key === null ? k : R.key),
                (h = i(R, h, k)),
                _ === null ? (S = R) : (_.sibling = R),
                (_ = R));
        return (
            e &&
            P.forEach(function (Ae) {
                return t(m, Ae);
            }),
            G && Sn(m, k),
                S
        );
    }
    function x(m, h, p, w) {
        if (
            (typeof p == "object" &&
            p !== null &&
            p.type === Jn &&
            p.key === null &&
            (p = p.props.children),
            typeof p == "object" && p !== null)
        ) {
            switch (p.$$typeof) {
                case fi:
                    e: {
                        for (var S = p.key, _ = h; _ !== null; ) {
                            if (_.key === S) {
                                if (((S = p.type), S === Jn)) {
                                    if (_.tag === 7) {
                                        n(m, _.sibling),
                                            (h = s(_, p.props.children)),
                                            (h.return = m),
                                            (m = h);
                                        break e;
                                    }
                                } else if (
                                    _.elementType === S ||
                                    (typeof S == "object" &&
                                        S !== null &&
                                        S.$$typeof === Xt &&
                                        fd(S) === _.type)
                                ) {
                                    n(m, _.sibling),
                                        (h = s(_, p.props)),
                                        (h.ref = Qr(m, _, p)),
                                        (h.return = m),
                                        (m = h);
                                    break e;
                                }
                                n(m, _);
                                break;
                            } else t(m, _);
                            _ = _.sibling;
                        }
                        p.type === Jn
                            ? ((h = Nn(p.props.children, m.mode, w, p.key)),
                                (h.return = m),
                                (m = h))
                            : ((w = Xi(p.type, p.key, p.props, null, m.mode, w)),
                                (w.ref = Qr(m, h, p)),
                                (w.return = m),
                                (m = w));
                    }
                    return o(m);
                case Yn:
                    e: {
                        for (_ = p.key; h !== null; ) {
                            if (h.key === _)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo === p.containerInfo &&
                                    h.stateNode.implementation === p.implementation
                                ) {
                                    n(m, h.sibling),
                                        (h = s(h, p.children || [])),
                                        (h.return = m),
                                        (m = h);
                                    break e;
                                } else {
                                    n(m, h);
                                    break;
                                }
                            else t(m, h);
                            h = h.sibling;
                        }
                        (h = ja(p, m.mode, w)), (h.return = m), (m = h);
                    }
                    return o(m);
                case Xt:
                    return (_ = p._init), x(m, h, _(p._payload), w);
            }
            if (es(p)) return y(m, h, p, w);
            if (Wr(p)) return v(m, h, p, w);
            _i(m, p);
        }
        return (typeof p == "string" && p !== "") || typeof p == "number"
            ? ((p = "" + p),
                h !== null && h.tag === 6
                    ? (n(m, h.sibling), (h = s(h, p)), (h.return = m), (m = h))
                    : (n(m, h), (h = Va(p, m.mode, w)), (h.return = m), (m = h)),
                o(m))
            : n(m, h);
    }
    return x;
}
var Tr = Nm(!0),
    Dm = Nm(!1),
    yo = pn(null),
    vo = null,
    ir = null,
    qu = null;
function Zu() {
    qu = ir = vo = null;
}
function ec(e) {
    var t = yo.current;
    X(yo), (e._currentValue = t);
}
function Vl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function vr(e, t) {
    (vo = e),
        (qu = ir = null),
        (e = e.dependencies),
    e !== null &&
    e.firstContext !== null &&
    (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function tt(e) {
    var t = e._currentValue;
    if (qu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), ir === null)) {
            if (vo === null) throw Error(E(308));
            (ir = e), (vo.dependencies = { lanes: 0, firstContext: e });
        } else ir = ir.next = e;
    return t;
}
var Tn = null;
function tc(e) {
    Tn === null ? (Tn = [e]) : Tn.push(e);
}
function Fm(e, t, n, r) {
    var s = t.interleaved;
    return (
        s === null ? ((n.next = n), tc(t)) : ((n.next = s.next), (s.next = n)),
            (t.interleaved = n),
            $t(e, r)
    );
}
function $t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
        n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function nc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Im(e, t) {
    (e = e.updateQueue),
    t.updateQueue === e &&
    (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
    });
}
function Ft(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function rn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), B & 2)) {
        var s = r.pending;
        return (
            s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
                (r.pending = t),
                $t(e, n)
        );
    }
    return (
        (s = r.interleaved),
            s === null ? ((t.next = t), tc(r)) : ((t.next = s.next), (s.next = t)),
            (r.interleaved = t),
            $t(e, n)
    );
}
function $i(e, t, n) {
    if (
        ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), $u(e, n);
    }
}
function dd(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var s = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
            } while (n !== null);
            i === null ? (s = i = t) : (i = i.next = t);
        } else s = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function wo(e, t, n, r) {
    var s = e.updateQueue;
    Gt = !1;
    var i = s.firstBaseUpdate,
        o = s.lastBaseUpdate,
        a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
        var f = e.alternate;
        f !== null &&
        ((f = f.updateQueue),
            (a = f.lastBaseUpdate),
        a !== o &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
            (f.lastBaseUpdate = l)));
    }
    if (i !== null) {
        var c = s.baseState;
        (o = 0), (f = u = l = null), (a = i);
        do {
            var d = a.lane,
                g = a.eventTime;
            if ((r & d) === d) {
                f !== null &&
                (f = f.next =
                    {
                        eventTime: g,
                        lane: 0,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null,
                    });
                e: {
                    var y = e,
                        v = a;
                    switch (((d = t), (g = n), v.tag)) {
                        case 1:
                            if (((y = v.payload), typeof y == "function")) {
                                c = y.call(g, c, d);
                                break e;
                            }
                            c = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = v.payload),
                                    (d = typeof y == "function" ? y.call(g, c, d) : y),
                                d == null)
                            )
                                break e;
                            c = Z({}, c, d);
                            break e;
                        case 2:
                            Gt = !0;
                    }
                }
                a.callback !== null &&
                a.lane !== 0 &&
                ((e.flags |= 64),
                    (d = s.effects),
                    d === null ? (s.effects = [a]) : d.push(a));
            } else
                (g = {
                    eventTime: g,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    f === null ? ((u = f = g), (l = c)) : (f = f.next = g),
                    (o |= d);
            if (((a = a.next), a === null)) {
                if (((a = s.shared.pending), a === null)) break;
                (d = a),
                    (a = d.next),
                    (d.next = null),
                    (s.lastBaseUpdate = d),
                    (s.shared.pending = null);
            }
        } while (!0);
        if (
            (f === null && (l = c),
                (s.baseState = l),
                (s.firstBaseUpdate = u),
                (s.lastBaseUpdate = f),
                (t = s.shared.interleaved),
            t !== null)
        ) {
            s = t;
            do (o |= s.lane), (s = s.next);
            while (s !== t);
        } else i === null && (s.shared.lanes = 0);
        (Vn |= o), (e.lanes = o), (e.memoizedState = c);
    }
}
function hd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                s = r.callback;
            if (s !== null) {
                if (((r.callback = null), (r = n), typeof s != "function"))
                    throw Error(E(191, s));
                s.call(r);
            }
        }
}
var qs = {},
    Ct = pn(qs),
    Os = pn(qs),
    Vs = pn(qs);
function An(e) {
    if (e === qs) throw Error(E(174));
    return e;
}
function rc(e, t) {
    switch ((H(Vs, t), H(Os, e), H(Ct, qs), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : yl(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = yl(t, e));
    }
    X(Ct), H(Ct, t);
}
function Ar() {
    X(Ct), X(Os), X(Vs);
}
function Om(e) {
    An(Vs.current);
    var t = An(Ct.current),
        n = yl(t, e.type);
    t !== n && (H(Os, e), H(Ct, n));
}
function sc(e) {
    Os.current === e && (X(Ct), X(Os));
}
var Y = pn(0);
function xo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var La = [];
function ic() {
    for (var e = 0; e < La.length; e++)
        La[e]._workInProgressVersionPrimary = null;
    La.length = 0;
}
var zi = Ut.ReactCurrentDispatcher,
    Na = Ut.ReactCurrentBatchConfig,
    On = 0,
    q = null,
    le = null,
    de = null,
    So = !1,
    gs = !1,
    js = 0,
    c1 = 0;
function xe() {
    throw Error(E(321));
}
function oc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!pt(e[n], t[n])) return !1;
    return !0;
}
function ac(e, t, n, r, s, i) {
    if (
        ((On = i),
            (q = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (zi.current = e === null || e.memoizedState === null ? p1 : m1),
            (e = n(r, s)),
            gs)
    ) {
        i = 0;
        do {
            if (((gs = !1), (js = 0), 25 <= i)) throw Error(E(301));
            (i += 1),
                (de = le = null),
                (t.updateQueue = null),
                (zi.current = g1),
                (e = n(r, s));
        } while (gs);
    }
    if (
        ((zi.current = _o),
            (t = le !== null && le.next !== null),
            (On = 0),
            (de = le = q = null),
            (So = !1),
            t)
    )
        throw Error(E(300));
    return e;
}
function lc() {
    var e = js !== 0;
    return (js = 0), e;
}
function yt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return de === null ? (q.memoizedState = de = e) : (de = de.next = e), de;
}
function nt() {
    if (le === null) {
        var e = q.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = le.next;
    var t = de === null ? q.memoizedState : de.next;
    if (t !== null) (de = t), (le = e);
    else {
        if (e === null) throw Error(E(310));
        (le = e),
            (e = {
                memoizedState: le.memoizedState,
                baseState: le.baseState,
                baseQueue: le.baseQueue,
                queue: le.queue,
                next: null,
            }),
            de === null ? (q.memoizedState = de = e) : (de = de.next = e);
    }
    return de;
}
function bs(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Da(e) {
    var t = nt(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = le,
        s = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            (s.next = i.next), (i.next = o);
        }
        (r.baseQueue = s = i), (n.pending = null);
    }
    if (s !== null) {
        (i = s.next), (r = r.baseState);
        var a = (o = null),
            l = null,
            u = i;
        do {
            var f = u.lane;
            if ((On & f) === f)
                l !== null &&
                (l = l.next =
                    {
                        lane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null,
                    }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var c = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                l === null ? ((a = l = c), (o = r)) : (l = l.next = c),
                    (q.lanes |= f),
                    (Vn |= f);
            }
            u = u.next;
        } while (u !== null && u !== i);
        l === null ? (o = r) : (l.next = a),
        pt(r, t.memoizedState) || (Ie = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        s = e;
        do (i = s.lane), (q.lanes |= i), (Vn |= i), (s = s.next);
        while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Fa(e) {
    var t = nt(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        s = n.pending,
        i = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = (s = s.next);
        do (i = e(i, o.action)), (o = o.next);
        while (o !== s);
        pt(i, t.memoizedState) || (Ie = !0),
            (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function Vm() {}
function jm(e, t) {
    var n = q,
        r = nt(),
        s = t(),
        i = !pt(r.memoizedState, s);
    if (
        (i && ((r.memoizedState = s), (Ie = !0)),
            (r = r.queue),
            uc($m.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (de !== null && de.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
                Bs(9, Bm.bind(null, n, r, s, t), void 0, null),
            he === null)
        )
            throw Error(E(349));
        On & 30 || bm(n, t, s);
    }
    return s;
}
function bm(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = q.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
                (q.updateQueue = t),
                (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Bm(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), zm(t) && Um(e);
}
function $m(e, t, n) {
    return n(function () {
        zm(t) && Um(e);
    });
}
function zm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !pt(e, n);
    } catch {
        return !0;
    }
}
function Um(e) {
    var t = $t(e, 1);
    t !== null && ht(t, e, 1, -1);
}
function pd(e) {
    var t = yt();
    return (
        typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: bs,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = h1.bind(null, q, e)),
            [t.memoizedState, e]
    );
}
function Bs(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            (t = q.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                    (q.updateQueue = t),
                    (t.lastEffect = e.next = e))
                : ((n = t.lastEffect),
                    n === null
                        ? (t.lastEffect = e.next = e)
                        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
            e
    );
}
function Wm() {
    return nt().memoizedState;
}
function Ui(e, t, n, r) {
    var s = yt();
    (q.flags |= e),
        (s.memoizedState = Bs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ko(e, t, n, r) {
    var s = nt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (le !== null) {
        var o = le.memoizedState;
        if (((i = o.destroy), r !== null && oc(r, o.deps))) {
            s.memoizedState = Bs(t, n, i, r);
            return;
        }
    }
    (q.flags |= e), (s.memoizedState = Bs(1 | t, n, i, r));
}
function md(e, t) {
    return Ui(8390656, 8, e, t);
}
function uc(e, t) {
    return Ko(2048, 8, e, t);
}
function Hm(e, t) {
    return Ko(4, 2, e, t);
}
function Km(e, t) {
    return Ko(4, 4, e, t);
}
function Xm(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
                t(e),
                function () {
                    t(null);
                }
        );
    if (t != null)
        return (
            (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
        );
}
function Gm(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Ko(4, 4, Xm.bind(null, t, e), n)
    );
}
function cc() {}
function Qm(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && oc(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Ym(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && oc(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jm(e, t, n) {
    return On & 21
        ? (pt(n, t) || ((n = nm()), (q.lanes |= n), (Vn |= n), (e.baseState = !0)),
            t)
        : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function f1(e, t) {
    var n = $;
    ($ = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Na.transition;
    Na.transition = {};
    try {
        e(!1), t();
    } finally {
        ($ = n), (Na.transition = r);
    }
}
function qm() {
    return nt().memoizedState;
}
function d1(e, t, n) {
    var r = on(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            Zm(e))
    )
        eg(t, n);
    else if (((n = Fm(e, t, n, r)), n !== null)) {
        var s = Me();
        ht(n, e, r, s), tg(n, t, r);
    }
}
function h1(e, t, n) {
    var r = on(e),
        s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Zm(e)) eg(t, s);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var o = t.lastRenderedState,
                    a = i(o, n);
                if (((s.hasEagerState = !0), (s.eagerState = a), pt(a, o))) {
                    var l = t.interleaved;
                    l === null
                        ? ((s.next = s), tc(t))
                        : ((s.next = l.next), (l.next = s)),
                        (t.interleaved = s);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Fm(e, t, s, r)),
        n !== null && ((s = Me()), ht(n, e, r, s), tg(n, t, r));
    }
}
function Zm(e) {
    var t = e.alternate;
    return e === q || (t !== null && t === q);
}
function eg(e, t) {
    gs = So = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function tg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), $u(e, n);
    }
}
var _o = {
        readContext: tt,
        useCallback: xe,
        useContext: xe,
        useEffect: xe,
        useImperativeHandle: xe,
        useInsertionEffect: xe,
        useLayoutEffect: xe,
        useMemo: xe,
        useReducer: xe,
        useRef: xe,
        useState: xe,
        useDebugValue: xe,
        useDeferredValue: xe,
        useTransition: xe,
        useMutableSource: xe,
        useSyncExternalStore: xe,
        useId: xe,
        unstable_isNewReconciler: !1,
    },
    p1 = {
        readContext: tt,
        useCallback: function (e, t) {
            return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: tt,
        useEffect: md,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                    Ui(4194308, 4, Xm.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Ui(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Ui(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = yt();
            return (
                (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
            );
        },
        useReducer: function (e, t, n) {
            var r = yt();
            return (
                (t = n !== void 0 ? n(t) : t),
                    (r.memoizedState = r.baseState = t),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                    (r.queue = e),
                    (e = e.dispatch = d1.bind(null, q, e)),
                    [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = yt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: pd,
        useDebugValue: cc,
        useDeferredValue: function (e) {
            return (yt().memoizedState = e);
        },
        useTransition: function () {
            var e = pd(!1),
                t = e[0];
            return (e = f1.bind(null, e[1])), (yt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = q,
                s = yt();
            if (G) {
                if (n === void 0) throw Error(E(407));
                n = n();
            } else {
                if (((n = t()), he === null)) throw Error(E(349));
                On & 30 || bm(r, t, n);
            }
            s.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (s.queue = i),
                    md($m.bind(null, r, i, e), [e]),
                    (r.flags |= 2048),
                    Bs(9, Bm.bind(null, r, i, n, t), void 0, null),
                    n
            );
        },
        useId: function () {
            var e = yt(),
                t = he.identifierPrefix;
            if (G) {
                var n = Nt,
                    r = Lt;
                (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = js++),
                0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = c1++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    m1 = {
        readContext: tt,
        useCallback: Qm,
        useContext: tt,
        useEffect: uc,
        useImperativeHandle: Gm,
        useInsertionEffect: Hm,
        useLayoutEffect: Km,
        useMemo: Ym,
        useReducer: Da,
        useRef: Wm,
        useState: function () {
            return Da(bs);
        },
        useDebugValue: cc,
        useDeferredValue: function (e) {
            var t = nt();
            return Jm(t, le.memoizedState, e);
        },
        useTransition: function () {
            var e = Da(bs)[0],
                t = nt().memoizedState;
            return [e, t];
        },
        useMutableSource: Vm,
        useSyncExternalStore: jm,
        useId: qm,
        unstable_isNewReconciler: !1,
    },
    g1 = {
        readContext: tt,
        useCallback: Qm,
        useContext: tt,
        useEffect: uc,
        useImperativeHandle: Gm,
        useInsertionEffect: Hm,
        useLayoutEffect: Km,
        useMemo: Ym,
        useReducer: Fa,
        useRef: Wm,
        useState: function () {
            return Fa(bs);
        },
        useDebugValue: cc,
        useDeferredValue: function (e) {
            var t = nt();
            return le === null ? (t.memoizedState = e) : Jm(t, le.memoizedState, e);
        },
        useTransition: function () {
            var e = Fa(bs)[0],
                t = nt().memoizedState;
            return [e, t];
        },
        useMutableSource: Vm,
        useSyncExternalStore: jm,
        useId: qm,
        unstable_isNewReconciler: !1,
    };
function ot(e, t) {
    if (e && e.defaultProps) {
        (t = Z({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function jl(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : Z({}, t, n)),
        (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xo = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? $n(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            s = on(e),
            i = Ft(r, s);
        (i.payload = t),
        n != null && (i.callback = n),
            (t = rn(e, i, s)),
        t !== null && (ht(t, e, s, r), $i(t, e, s));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            s = on(e),
            i = Ft(r, s);
        (i.tag = 1),
            (i.payload = t),
        n != null && (i.callback = n),
            (t = rn(e, i, s)),
        t !== null && (ht(t, e, s, r), $i(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Me(),
            r = on(e),
            s = Ft(n, r);
        (s.tag = 2),
        t != null && (s.callback = t),
            (t = rn(e, s, r)),
        t !== null && (ht(t, e, r, n), $i(t, e, r));
    },
};
function gd(e, t, n, r, s, i, o) {
    return (
        (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(r, i, o)
                : t.prototype && t.prototype.isPureReactComponent
                    ? !Ns(n, r) || !Ns(s, i)
                    : !0
    );
}
function ng(e, t, n) {
    var r = !1,
        s = un,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = tt(i))
            : ((s = Ve(t) ? Fn : Te.current),
                (r = t.contextTypes),
                (i = (r = r != null) ? kr(e, s) : un)),
            (t = new t(n, i)),
            (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = Xo),
            (e.stateNode = t),
            (t._reactInternals = e),
        r &&
        ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = s),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
    );
}
function yd(e, t, n, r) {
    (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
    t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
    t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xo.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
    var s = e.stateNode;
    (s.props = n), (s.state = e.memoizedState), (s.refs = {}), nc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (s.context = tt(i))
        : ((i = Ve(t) ? Fn : Te.current), (s.context = kr(e, i))),
        (s.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
    typeof i == "function" && (jl(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
    typeof s.getSnapshotBeforeUpdate == "function" ||
    (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
    ((t = s.state),
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" &&
    s.UNSAFE_componentWillMount(),
    t !== s.state && Xo.enqueueReplaceState(s, s.state, null),
        wo(e, n, s, r),
        (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rr(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Wv(r)), (r = r.return);
        while (r);
        var s = n;
    } catch (i) {
        s =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
}
function Ia(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bl(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var y1 = typeof WeakMap == "function" ? WeakMap : Map;
function rg(e, t, n) {
    (n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Po || ((Po = !0), (Yl = r)), Bl(e, t);
        }),
            n
    );
}
function sg(e, t, n) {
    (n = Ft(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        (n.payload = function () {
            return r(s);
        }),
            (n.callback = function () {
                Bl(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
            Bl(e, t),
            typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
            var o = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: o !== null ? o : "",
            });
        }),
            n
    );
}
function vd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new y1();
        var s = new Set();
        r.set(t, s);
    } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
    s.has(n) || (s.add(n), (e = L1.bind(null, e, t, n)), t.then(e, e));
}
function wd(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
            ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
                t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function xd(e, t, n, r, s) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = s), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
            n.tag === 1 &&
            (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ft(-1, 1)), (t.tag = 2), rn(n, t, 1))),
                (n.lanes |= 1)),
            e);
}
var v1 = Ut.ReactCurrentOwner,
    Ie = !1;
function Re(e, t, n, r) {
    t.child = e === null ? Dm(t, null, n, r) : Tr(t, e.child, n, r);
}
function Sd(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return (
        vr(t, s),
            (r = ac(e, t, n, r, i, s)),
            (n = lc()),
            e !== null && !Ie
                ? ((t.updateQueue = e.updateQueue),
                    (t.flags &= -2053),
                    (e.lanes &= ~s),
                    zt(e, t, s))
                : (G && n && Qu(t), (t.flags |= 1), Re(e, t, r, s), t.child)
    );
}
function _d(e, t, n, r, s) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
        !vc(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), ig(e, t, i, r, s))
            : ((e = Xi(n.type, null, r, t, t.mode, s)),
                (e.ref = t.ref),
                (e.return = t),
                (t.child = e));
    }
    if (((i = e.child), !(e.lanes & s))) {
        var o = i.memoizedProps;
        if (
            ((n = n.compare), (n = n !== null ? n : Ns), n(o, r) && e.ref === t.ref)
        )
            return zt(e, t, s);
    }
    return (
        (t.flags |= 1),
            (e = an(i, r)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e)
    );
}
function ig(e, t, n, r, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ns(i, r) && e.ref === t.ref)
            if (((Ie = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
                e.flags & 131072 && (Ie = !0);
            else return (t.lanes = e.lanes), zt(e, t, s);
    }
    return $l(e, t, n, r, s);
}
function og(e, t, n) {
    var r = t.pendingProps,
        s = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                H(ar, ze),
                (ze |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null,
                        }),
                        (t.updateQueue = null),
                        H(ar, ze),
                        (ze |= e),
                        null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = i !== null ? i.baseLanes : n),
                H(ar, ze),
                (ze |= r);
        }
    else
        i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
            H(ar, ze),
            (ze |= r);
    return Re(e, t, s, n), t.child;
}
function ag(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $l(e, t, n, r, s) {
    var i = Ve(n) ? Fn : Te.current;
    return (
        (i = kr(t, i)),
            vr(t, s),
            (n = ac(e, t, n, r, i, s)),
            (r = lc()),
            e !== null && !Ie
                ? ((t.updateQueue = e.updateQueue),
                    (t.flags &= -2053),
                    (e.lanes &= ~s),
                    zt(e, t, s))
                : (G && r && Qu(t), (t.flags |= 1), Re(e, t, n, s), t.child)
    );
}
function Cd(e, t, n, r, s) {
    if (Ve(n)) {
        var i = !0;
        po(t);
    } else i = !1;
    if ((vr(t, s), t.stateNode === null))
        Wi(e, t), ng(t, n, r), bl(t, n, r, s), (r = !0);
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var l = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null
            ? (u = tt(u))
            : ((u = Ve(n) ? Fn : Te.current), (u = kr(t, u)));
        var f = n.getDerivedStateFromProps,
            c =
                typeof f == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function";
        c ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
        ((a !== r || l !== u) && yd(t, o, r, u)),
            (Gt = !1);
        var d = t.memoizedState;
        (o.state = d),
            wo(t, r, o, s),
            (l = t.memoizedState),
            a !== r || d !== l || Oe.current || Gt
                ? (typeof f == "function" && (jl(t, n, f, r), (l = t.memoizedState)),
                    (a = Gt || gd(t, n, a, r, d, l, u))
                        ? (c ||
                        (typeof o.UNSAFE_componentWillMount != "function" &&
                            typeof o.componentWillMount != "function") ||
                        (typeof o.componentWillMount == "function" &&
                        o.componentWillMount(),
                        typeof o.UNSAFE_componentWillMount == "function" &&
                        o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" && (t.flags |= 4194308))
                        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                            (t.memoizedProps = r),
                            (t.memoizedState = l)),
                    (o.props = r),
                    (o.state = l),
                    (o.context = u),
                    (r = a))
                : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                    (r = !1));
    } else {
        (o = t.stateNode),
            Im(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : ot(t.type, a)),
            (o.props = u),
            (c = t.pendingProps),
            (d = o.context),
            (l = n.contextType),
            typeof l == "object" && l !== null
                ? (l = tt(l))
                : ((l = Ve(n) ? Fn : Te.current), (l = kr(t, l)));
        var g = n.getDerivedStateFromProps;
        (f =
            typeof g == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
        ((a !== c || d !== l) && yd(t, o, r, l)),
            (Gt = !1),
            (d = t.memoizedState),
            (o.state = d),
            wo(t, r, o, s);
        var y = t.memoizedState;
        a !== c || d !== y || Oe.current || Gt
            ? (typeof g == "function" && (jl(t, n, g, r), (y = t.memoizedState)),
                (u = Gt || gd(t, n, u, r, d, y, l) || !1)
                    ? (f ||
                    (typeof o.UNSAFE_componentWillUpdate != "function" &&
                        typeof o.componentWillUpdate != "function") ||
                    (typeof o.componentWillUpdate == "function" &&
                    o.componentWillUpdate(r, y, l),
                    typeof o.UNSAFE_componentWillUpdate == "function" &&
                    o.UNSAFE_componentWillUpdate(r, y, l)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                    : (typeof o.componentDidUpdate != "function" ||
                    (a === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                    (a === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 1024),
                        (t.memoizedProps = r),
                        (t.memoizedState = y)),
                (o.props = r),
                (o.state = y),
                (o.context = l),
                (r = u))
            : (typeof o.componentDidUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
                (r = !1));
    }
    return zl(e, t, n, r, i, s);
}
function zl(e, t, n, r, s, i) {
    ag(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return s && ld(t, n, !1), zt(e, t, i);
    (r = t.stateNode), (v1.current = t);
    var a =
        o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
            e !== null && o
                ? ((t.child = Tr(t, e.child, null, i)), (t.child = Tr(t, null, a, i)))
                : Re(e, t, a, i),
            (t.memoizedState = r.state),
        s && ld(t, n, !0),
            t.child
    );
}
function lg(e) {
    var t = e.stateNode;
    t.pendingContext
        ? ad(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ad(e, t.context, !1),
        rc(e, t.containerInfo);
}
function Pd(e, t, n, r, s) {
    return Er(), Ju(s), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function ug(e, t, n) {
    var r = t.pendingProps,
        s = Y.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        a;
    if (
        ((a = o) ||
        (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
            a
                ? ((i = !0), (t.flags &= -129))
                : (e === null || e.memoizedState !== null) && (s |= 1),
            H(Y, s & 1),
        e === null)
    )
        return (
            Ol(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (t.mode & 1
                        ? e.data === "$!"
                            ? (t.lanes = 8)
                            : (t.lanes = 1073741824)
                        : (t.lanes = 1),
                        null)
                    : ((o = r.children),
                        (e = r.fallback),
                        i
                            ? ((r = t.mode),
                                (i = t.child),
                                (o = { mode: "hidden", children: o }),
                                !(r & 1) && i !== null
                                    ? ((i.childLanes = 0), (i.pendingProps = o))
                                    : (i = Yo(o, r, 0, null)),
                                (e = Nn(e, r, n, null)),
                                (i.return = t),
                                (e.return = t),
                                (i.sibling = e),
                                (t.child = i),
                                (t.child.memoizedState = Wl(n)),
                                (t.memoizedState = Ul),
                                e)
                            : fc(t, o))
        );
    if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
        return w1(e, t, o, r, a, s, n);
    if (i) {
        (i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && t.child !== s
                ? ((r = t.child),
                    (r.childLanes = 0),
                    (r.pendingProps = l),
                    (t.deletions = null))
                : ((r = an(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
                a !== null ? (i = an(a, i)) : ((i = Nn(i, o, n, null)), (i.flags |= 2)),
                (i.return = t),
                (r.return = t),
                (r.sibling = i),
                (t.child = r),
                (r = i),
                (i = t.child),
                (o = e.child.memoizedState),
                (o =
                    o === null
                        ? Wl(n)
                        : {
                            baseLanes: o.baseLanes | n,
                            cachePool: null,
                            transitions: o.transitions,
                        }),
                (i.memoizedState = o),
                (i.childLanes = e.childLanes & ~n),
                (t.memoizedState = Ul),
                r
        );
    }
    return (
        (i = e.child),
            (e = i.sibling),
            (r = an(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
        e !== null &&
        ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r
    );
}
function fc(e, t) {
    return (
        (t = Yo({ mode: "visible", children: t }, e.mode, 0, null)),
            (t.return = e),
            (e.child = t)
    );
}
function Ci(e, t, n, r) {
    return (
        r !== null && Ju(r),
            Tr(t, e.child, null, n),
            (e = fc(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
    );
}
function w1(e, t, n, r, s, i, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Ia(Error(E(422)))), Ci(e, t, o, r))
            : t.memoizedState !== null
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((i = r.fallback),
                    (s = t.mode),
                    (r = Yo({ mode: "visible", children: r.children }, s, 0, null)),
                    (i = Nn(i, s, o, null)),
                    (i.flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                t.mode & 1 && Tr(t, e.child, null, o),
                    (t.child.memoizedState = Wl(o)),
                    (t.memoizedState = Ul),
                    i);
    if (!(t.mode & 1)) return Ci(e, t, o, null);
    if (s.data === "$!") {
        if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (i = Error(E(419))), (r = Ia(i, r, void 0)), Ci(e, t, o, r);
    }
    if (((a = (o & e.childLanes) !== 0), Ie || a)) {
        if (((r = he), r !== null)) {
            switch (o & -o) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0;
            }
            (s = s & (r.suspendedLanes | o) ? 0 : s),
            s !== 0 &&
            s !== i.retryLane &&
            ((i.retryLane = s), $t(e, s), ht(r, e, s, -1));
        }
        return yc(), (r = Ia(Error(E(421)))), Ci(e, t, o, r);
    }
    return s.data === "$?"
        ? ((t.flags |= 128),
            (t.child = e.child),
            (t = N1.bind(null, e)),
            (s._reactRetry = t),
            null)
        : ((e = i.treeContext),
            (Ue = nn(s.nextSibling)),
            (We = t),
            (G = !0),
            (ut = null),
        e !== null &&
        ((Je[qe++] = Lt),
            (Je[qe++] = Nt),
            (Je[qe++] = In),
            (Lt = e.id),
            (Nt = e.overflow),
            (In = t)),
            (t = fc(t, r.children)),
            (t.flags |= 4096),
            t);
}
function kd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vl(e.return, t, n);
}
function Oa(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: s,
        })
        : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = r),
            (i.tail = n),
            (i.tailMode = s));
}
function cg(e, t, n) {
    var r = t.pendingProps,
        s = r.revealOrder,
        i = r.tail;
    if ((Re(e, t, r.children, n), (r = Y.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && kd(e, n, t);
                else if (e.tag === 19) kd(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((H(Y, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (s) {
            case "forwards":
                for (n = t.child, s = null; n !== null; )
                    (e = n.alternate),
                    e !== null && xo(e) === null && (s = n),
                        (n = n.sibling);
                (n = s),
                    n === null
                        ? ((s = t.child), (t.child = null))
                        : ((s = n.sibling), (n.sibling = null)),
                    Oa(t, !1, s, n, i);
                break;
            case "backwards":
                for (n = null, s = t.child, t.child = null; s !== null; ) {
                    if (((e = s.alternate), e !== null && xo(e) === null)) {
                        t.child = s;
                        break;
                    }
                    (e = s.sibling), (s.sibling = n), (n = s), (s = e);
                }
                Oa(t, !0, n, null, i);
                break;
            case "together":
                Oa(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Wi(e, t) {
    !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
            (Vn |= t.lanes),
            !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
        for (
            e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling), (n = n.sibling = an(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function x1(e, t, n) {
    switch (t.tag) {
        case 3:
            lg(t), Er();
            break;
        case 5:
            Om(t);
            break;
        case 1:
            Ve(t.type) && po(t);
            break;
        case 4:
            rc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                s = t.memoizedProps.value;
            H(yo, r._currentValue), (r._currentValue = s);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (H(Y, Y.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                        ? ug(e, t, n)
                        : (H(Y, Y.current & 1),
                            (e = zt(e, t, n)),
                            e !== null ? e.sibling : null);
            H(Y, Y.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return cg(e, t, n);
                t.flags |= 128;
            }
            if (
                ((s = t.memoizedState),
                s !== null &&
                ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
                    H(Y, Y.current),
                    r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), og(e, t, n);
    }
    return zt(e, t, n);
}
var fg, Hl, dg, hg;
fg = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Hl = function () {};
dg = function (e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        (e = t.stateNode), An(Ct.current);
        var i = null;
        switch (n) {
            case "input":
                (s = hl(e, s)), (r = hl(e, r)), (i = []);
                break;
            case "select":
                (s = Z({}, s, { value: void 0 })),
                    (r = Z({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (s = gl(e, s)), (r = gl(e, r)), (i = []);
                break;
            default:
                typeof s.onClick != "function" &&
                typeof r.onClick == "function" &&
                (e.onclick = fo);
        }
        vl(n, r);
        var o;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                    u !== "children" &&
                    u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    u !== "autoFocus" &&
                    (ks.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (
                ((a = s != null ? s[u] : void 0),
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
            )
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) ||
                            (l && l.hasOwnProperty(o)) ||
                            (n || (n = {}), (n[o] = ""));
                        for (o in l)
                            l.hasOwnProperty(o) &&
                            a[o] !== l[o] &&
                            (n || (n = {}), (n[o] = l[o]));
                    } else n || (i || (i = []), i.push(u, n)), (n = l);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                            (a = a ? a.__html : void 0),
                        l != null && a !== l && (i = i || []).push(u, l))
                        : u === "children"
                            ? (typeof l != "string" && typeof l != "number") ||
                            (i = i || []).push(u, "" + l)
                            : u !== "suppressContentEditableWarning" &&
                            u !== "suppressHydrationWarning" &&
                            (ks.hasOwnProperty(u)
                                ? (l != null && u === "onScroll" && K("scroll", e),
                                i || a === l || (i = []))
                                : (i = i || []).push(u, l));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
hg = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Yr(e, t) {
    if (!G)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function Se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            (n |= s.lanes | s.childLanes),
                (r |= s.subtreeFlags & 14680064),
                (r |= s.flags & 14680064),
                (s.return = e),
                (s = s.sibling);
    else
        for (s = e.child; s !== null; )
            (n |= s.lanes | s.childLanes),
                (r |= s.subtreeFlags),
                (r |= s.flags),
                (s.return = e),
                (s = s.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function S1(e, t, n) {
    var r = t.pendingProps;
    switch ((Yu(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Se(t), null;
        case 1:
            return Ve(t.type) && ho(), Se(t), null;
        case 3:
            return (
                (r = t.stateNode),
                    Ar(),
                    X(Oe),
                    X(Te),
                    ic(),
                r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                (Si(t)
                    ? (t.flags |= 4)
                    : e === null ||
                    (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                    ((t.flags |= 1024), ut !== null && (Zl(ut), (ut = null)))),
                    Hl(e, t),
                    Se(t),
                    null
            );
        case 5:
            sc(t);
            var s = An(Vs.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                dg(e, t, n, r, s),
                e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(E(166));
                    return Se(t), null;
                }
                if (((e = An(Ct.current)), Si(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (((r[xt] = t), (r[Is] = i), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            K("cancel", r), K("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            K("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (s = 0; s < ns.length; s++) K(ns[s], r);
                            break;
                        case "source":
                            K("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            K("error", r), K("load", r);
                            break;
                        case "details":
                            K("toggle", r);
                            break;
                        case "input":
                            Ff(r, i), K("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                K("invalid", r);
                            break;
                        case "textarea":
                            Of(r, i), K("invalid", r);
                    }
                    vl(n, i), (s = null);
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o];
                            o === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                    (i.suppressHydrationWarning !== !0 &&
                                    xi(r.textContent, a, e),
                                        (s = ["children", a]))
                                    : typeof a == "number" &&
                                    r.textContent !== "" + a &&
                                    (i.suppressHydrationWarning !== !0 &&
                                    xi(r.textContent, a, e),
                                        (s = ["children", "" + a]))
                                : ks.hasOwnProperty(o) &&
                                a != null &&
                                o === "onScroll" &&
                                K("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            di(r), If(r, i, !0);
                            break;
                        case "textarea":
                            di(r), Vf(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = fo);
                    }
                    (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (o = s.nodeType === 9 ? s : s.ownerDocument),
                    e === "http://www.w3.org/1999/xhtml" && (e = $p(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")),
                                    (e.innerHTML = "<script><\/script>"),
                                    (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                    ? (e = o.createElement(n, { is: r.is }))
                                    : ((e = o.createElement(n)),
                                    n === "select" &&
                                    ((o = e),
                                        r.multiple
                                            ? (o.multiple = !0)
                                            : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[xt] = t),
                        (e[Is] = r),
                        fg(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = wl(n, r)), n)) {
                            case "dialog":
                                K("cancel", e), K("close", e), (s = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                K("load", e), (s = r);
                                break;
                            case "video":
                            case "audio":
                                for (s = 0; s < ns.length; s++) K(ns[s], e);
                                s = r;
                                break;
                            case "source":
                                K("error", e), (s = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                K("error", e), K("load", e), (s = r);
                                break;
                            case "details":
                                K("toggle", e), (s = r);
                                break;
                            case "input":
                                Ff(e, r), (s = hl(e, r)), K("invalid", e);
                                break;
                            case "option":
                                s = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (s = Z({}, r, { value: void 0 })),
                                    K("invalid", e);
                                break;
                            case "textarea":
                                Of(e, r), (s = gl(e, r)), K("invalid", e);
                                break;
                            default:
                                s = r;
                        }
                        vl(n, s), (a = s);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style"
                                    ? Wp(e, l)
                                    : i === "dangerouslySetInnerHTML"
                                        ? ((l = l ? l.__html : void 0), l != null && zp(e, l))
                                        : i === "children"
                                            ? typeof l == "string"
                                                ? (n !== "textarea" || l !== "") && Es(e, l)
                                                : typeof l == "number" && Es(e, "" + l)
                                            : i !== "suppressContentEditableWarning" &&
                                            i !== "suppressHydrationWarning" &&
                                            i !== "autoFocus" &&
                                            (ks.hasOwnProperty(i)
                                                ? l != null && i === "onScroll" && K("scroll", e)
                                                : l != null && Iu(e, i, l, o));
                            }
                        switch (n) {
                            case "input":
                                di(e), If(e, r, !1);
                                break;
                            case "textarea":
                                di(e), Vf(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ln(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? pr(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                        pr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof s.onClick == "function" && (e.onclick = fo);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Se(t), null;
        case 6:
            if (e && t.stateNode != null) hg(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
                if (((n = An(Vs.current)), An(Ct.current), Si(t))) {
                    if (
                        ((r = t.stateNode),
                            (n = t.memoizedProps),
                            (r[xt] = t),
                        (i = r.nodeValue !== n) && ((e = We), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                xi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                xi(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                        (r[xt] = t),
                        (t.stateNode = r);
            }
            return Se(t), null;
        case 13:
            if (
                (X(Y),
                    (r = t.memoizedState),
                e === null ||
                (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (G && Ue !== null && t.mode & 1 && !(t.flags & 128))
                    Lm(), Er(), (t.flags |= 98560), (i = !1);
                else if (((i = Si(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(E(318));
                        if (
                            ((i = t.memoizedState),
                                (i = i !== null ? i.dehydrated : null),
                                !i)
                        )
                            throw Error(E(317));
                        i[xt] = t;
                    } else
                        Er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    Se(t), (i = !1);
                } else ut !== null && (Zl(ut), (ut = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                r !== (e !== null && e.memoizedState !== null) &&
                r &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                (e === null || Y.current & 1 ? ue === 0 && (ue = 3) : yc())),
                t.updateQueue !== null && (t.flags |= 4),
                    Se(t),
                    null);
        case 4:
            return (
                Ar(), Hl(e, t), e === null && Ds(t.stateNode.containerInfo), Se(t), null
            );
        case 10:
            return ec(t.type._context), Se(t), null;
        case 17:
            return Ve(t.type) && ho(), Se(t), null;
        case 19:
            if ((X(Y), (i = t.memoizedState), i === null)) return Se(t), null;
            if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) Yr(i, !1);
                else {
                    if (ue !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = xo(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        Yr(i, !1),
                                        r = o.updateQueue,
                                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                                (i.lanes = e),
                                                (i.child = null),
                                                (i.subtreeFlags = 0),
                                                (i.memoizedProps = null),
                                                (i.memoizedState = null),
                                                (i.updateQueue = null),
                                                (i.dependencies = null),
                                                (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                                (i.lanes = o.lanes),
                                                (i.child = o.child),
                                                (i.subtreeFlags = 0),
                                                (i.deletions = null),
                                                (i.memoizedProps = o.memoizedProps),
                                                (i.memoizedState = o.memoizedState),
                                                (i.updateQueue = o.updateQueue),
                                                (i.type = o.type),
                                                (e = o.dependencies),
                                                (i.dependencies =
                                                    e === null
                                                        ? null
                                                        : {
                                                            lanes: e.lanes,
                                                            firstContext: e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return H(Y, (Y.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                    re() > Mr &&
                    ((t.flags |= 128), (r = !0), Yr(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = xo(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                                (r = !0),
                                (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                                Yr(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !o.alternate && !G)
                        )
                            return Se(t), null;
                    } else
                        2 * re() - i.renderingStartTime > Mr &&
                        n !== 1073741824 &&
                        ((t.flags |= 128), (r = !0), Yr(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = i.last),
                        n !== null ? (n.sibling = o) : (t.child = o),
                        (i.last = o));
            }
            return i.tail !== null
                ? ((t = i.tail),
                    (i.rendering = t),
                    (i.tail = t.sibling),
                    (i.renderingStartTime = re()),
                    (t.sibling = null),
                    (n = Y.current),
                    H(Y, r ? (n & 1) | 2 : n & 1),
                    t)
                : (Se(t), null);
        case 22:
        case 23:
            return (
                gc(),
                    (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                    r && t.mode & 1
                        ? ze & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : Se(t),
                    null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(E(156, t.tag));
}
function _1(e, t) {
    switch ((Yu(t), t.tag)) {
        case 1:
            return (
                Ve(t.type) && ho(),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                Ar(),
                    X(Oe),
                    X(Te),
                    ic(),
                    (e = t.flags),
                    e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return sc(t), null;
        case 13:
            if ((X(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(E(340));
                Er();
            }
            return (
                (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return X(Y), null;
        case 4:
            return Ar(), null;
        case 10:
            return ec(t.type._context), null;
        case 22:
        case 23:
            return gc(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Pi = !1,
    Pe = !1,
    C1 = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;
function or(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                ee(e, t, r);
            }
        else n.current = null;
}
function Kl(e, t, n) {
    try {
        n();
    } catch (r) {
        ee(e, t, r);
    }
}
var Ed = !1;
function P1(e, t) {
    if (((Rl = lo), (e = vm()), Gu(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        f = 0,
                        c = e,
                        d = null;
                    t: for (;;) {
                        for (
                            var g;
                            c !== n || (s !== 0 && c.nodeType !== 3) || (a = o + s),
                            c !== i || (r !== 0 && c.nodeType !== 3) || (l = o + r),
                            c.nodeType === 3 && (o += c.nodeValue.length),
                            (g = c.firstChild) !== null;

                        )
                            (d = c), (c = g);
                        for (;;) {
                            if (c === e) break t;
                            if (
                                (d === n && ++u === s && (a = o),
                                d === i && ++f === r && (l = o),
                                (g = c.nextSibling) !== null)
                            )
                                break;
                            (c = d), (d = c.parentNode);
                        }
                        c = g;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ml = { focusedElem: e, selectionRange: n }, lo = !1, M = t; M !== null; )
        if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
            (e.return = t), (M = e);
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var v = y.memoizedProps,
                                        x = y.memoizedState,
                                        m = t.stateNode,
                                        h = m.getSnapshotBeforeUpdate(
                                            t.elementType === t.type ? v : ot(t.type, v),
                                            x,
                                        );
                                    m.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var p = t.stateNode.containerInfo;
                                p.nodeType === 1
                                    ? (p.textContent = "")
                                    : p.nodeType === 9 &&
                                    p.documentElement &&
                                    p.removeChild(p.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(E(163));
                        }
                } catch (w) {
                    ee(t, t.return, w);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (M = e);
                    break;
                }
                M = t.return;
            }
    return (y = Ed), (Ed = !1), y;
}
function ys(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var s = (r = r.next);
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                (s.destroy = void 0), i !== void 0 && Kl(t, n, i);
            }
            s = s.next;
        } while (s !== r);
    }
}
function Go(e, t) {
    if (
        ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Xl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function pg(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), pg(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
    e.tag === 5 &&
    ((t = e.stateNode),
    t !== null &&
    (delete t[xt], delete t[Is], delete t[Dl], delete t[o1], delete t[a1])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function mg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Td(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || mg(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Gl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                    ? ((t = n.parentNode), t.insertBefore(e, n))
                    : ((t = n), t.appendChild(e)),
                    (n = n._reactRootContainer),
                n != null || t.onclick !== null || (t.onclick = fo));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Gl(e, t, n), e = e.sibling; e !== null; ) Gl(e, t, n), (e = e.sibling);
}
function Ql(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), (e = e.sibling);
}
var pe = null,
    lt = !1;
function Wt(e, t, n) {
    for (n = n.child; n !== null; ) gg(e, t, n), (n = n.sibling);
}
function gg(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function")
        try {
            _t.onCommitFiberUnmount(Bo, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Pe || or(n, t);
        case 6:
            var r = pe,
                s = lt;
            (pe = null),
                Wt(e, t, n),
                (pe = r),
                (lt = s),
            pe !== null &&
            (lt
                ? ((e = pe),
                    (n = n.stateNode),
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                : pe.removeChild(n.stateNode));
            break;
        case 18:
            pe !== null &&
            (lt
                ? ((e = pe),
                    (n = n.stateNode),
                    e.nodeType === 8
                        ? Ra(e.parentNode, n)
                        : e.nodeType === 1 && Ra(e, n),
                    Ms(e))
                : Ra(pe, n.stateNode));
            break;
        case 4:
            (r = pe),
                (s = lt),
                (pe = n.stateNode.containerInfo),
                (lt = !0),
                Wt(e, t, n),
                (pe = r),
                (lt = s);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !Pe &&
                ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
            ) {
                s = r = r.next;
                do {
                    var i = s,
                        o = i.destroy;
                    (i = i.tag),
                    o !== void 0 && (i & 2 || i & 4) && Kl(n, t, o),
                        (s = s.next);
                } while (s !== r);
            }
            Wt(e, t, n);
            break;
        case 1:
            if (
                !Pe &&
                (or(n, t),
                    (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (a) {
                    ee(n, t, a);
                }
            Wt(e, t, n);
            break;
        case 21:
            Wt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((Pe = (r = Pe) || n.memoizedState !== null), Wt(e, t, n), (Pe = r))
                : Wt(e, t, n);
            break;
        default:
            Wt(e, t, n);
    }
}
function Ad(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new C1()),
            t.forEach(function (r) {
                var s = D1.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(s, s));
            });
    }
}
function st(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = e,
                    o = t,
                    a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (pe = a.stateNode), (lt = !1);
                            break e;
                        case 3:
                            (pe = a.stateNode.containerInfo), (lt = !0);
                            break e;
                        case 4:
                            (pe = a.stateNode.containerInfo), (lt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (pe === null) throw Error(E(160));
                gg(i, o, s), (pe = null), (lt = !1);
                var l = s.alternate;
                l !== null && (l.return = null), (s.return = null);
            } catch (u) {
                ee(s, t, u);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) yg(t, e), (t = t.sibling);
}
function yg(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((st(t, e), mt(e), r & 4)) {
                try {
                    ys(3, e, e.return), Go(3, e);
                } catch (v) {
                    ee(e, e.return, v);
                }
                try {
                    ys(5, e, e.return);
                } catch (v) {
                    ee(e, e.return, v);
                }
            }
            break;
        case 1:
            st(t, e), mt(e), r & 512 && n !== null && or(n, n.return);
            break;
        case 5:
            if (
                (st(t, e),
                    mt(e),
                r & 512 && n !== null && or(n, n.return),
                e.flags & 32)
            ) {
                var s = e.stateNode;
                try {
                    Es(s, "");
                } catch (v) {
                    ee(e, e.return, v);
                }
            }
            if (r & 4 && ((s = e.stateNode), s != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" && i.type === "radio" && i.name != null && bp(s, i),
                            wl(a, o);
                        var u = wl(a, i);
                        for (o = 0; o < l.length; o += 2) {
                            var f = l[o],
                                c = l[o + 1];
                            f === "style"
                                ? Wp(s, c)
                                : f === "dangerouslySetInnerHTML"
                                    ? zp(s, c)
                                    : f === "children"
                                        ? Es(s, c)
                                        : Iu(s, f, c, u);
                        }
                        switch (a) {
                            case "input":
                                pl(s, i);
                                break;
                            case "textarea":
                                Bp(s, i);
                                break;
                            case "select":
                                var d = s._wrapperState.wasMultiple;
                                s._wrapperState.wasMultiple = !!i.multiple;
                                var g = i.value;
                                g != null
                                    ? pr(s, !!i.multiple, g, !1)
                                    : d !== !!i.multiple &&
                                    (i.defaultValue != null
                                        ? pr(s, !!i.multiple, i.defaultValue, !0)
                                        : pr(s, !!i.multiple, i.multiple ? [] : "", !1));
                        }
                        s[Is] = i;
                    } catch (v) {
                        ee(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((st(t, e), mt(e), r & 4)) {
                if (e.stateNode === null) throw Error(E(162));
                (s = e.stateNode), (i = e.memoizedProps);
                try {
                    s.nodeValue = i;
                } catch (v) {
                    ee(e, e.return, v);
                }
            }
            break;
        case 3:
            if (
                (st(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Ms(t.containerInfo);
                } catch (v) {
                    ee(e, e.return, v);
                }
            break;
        case 4:
            st(t, e), mt(e);
            break;
        case 13:
            st(t, e),
                mt(e),
                (s = e.child),
            s.flags & 8192 &&
            ((i = s.memoizedState !== null),
                (s.stateNode.isHidden = i),
            !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (pc = re())),
            r & 4 && Ad(e);
            break;
        case 22:
            if (
                ((f = n !== null && n.memoizedState !== null),
                    e.mode & 1 ? ((Pe = (u = Pe) || f), st(t, e), (Pe = u)) : st(t, e),
                    mt(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !f && e.mode & 1)
                )
                    for (M = e, f = e.child; f !== null; ) {
                        for (c = M = f; M !== null; ) {
                            switch (((d = M), (g = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ys(4, d, d.return);
                                    break;
                                case 1:
                                    or(d, d.return);
                                    var y = d.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (v) {
                                            ee(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    or(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Md(c);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = d), (M = g)) : Md(c);
                        }
                        f = f.sibling;
                    }
                e: for (f = null, c = e; ; ) {
                    if (c.tag === 5) {
                        if (f === null) {
                            f = c;
                            try {
                                (s = c.stateNode),
                                    u
                                        ? ((i = s.style),
                                            typeof i.setProperty == "function"
                                                ? i.setProperty("display", "none", "important")
                                                : (i.display = "none"))
                                        : ((a = c.stateNode),
                                            (l = c.memoizedProps.style),
                                            (o =
                                                l != null && l.hasOwnProperty("display")
                                                    ? l.display
                                                    : null),
                                            (a.style.display = Up("display", o)));
                            } catch (v) {
                                ee(e, e.return, v);
                            }
                        }
                    } else if (c.tag === 6) {
                        if (f === null)
                            try {
                                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                            } catch (v) {
                                ee(e, e.return, v);
                            }
                    } else if (
                        ((c.tag !== 22 && c.tag !== 23) ||
                            c.memoizedState === null ||
                            c === e) &&
                        c.child !== null
                    ) {
                        (c.child.return = c), (c = c.child);
                        continue;
                    }
                    if (c === e) break e;
                    for (; c.sibling === null; ) {
                        if (c.return === null || c.return === e) break e;
                        f === c && (f = null), (c = c.return);
                    }
                    f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
                }
            }
            break;
        case 19:
            st(t, e), mt(e), r & 4 && Ad(e);
            break;
        case 21:
            break;
        default:
            st(t, e), mt(e);
    }
}
function mt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (mg(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(E(160));
            }
            switch (r.tag) {
                case 5:
                    var s = r.stateNode;
                    r.flags & 32 && (Es(s, ""), (r.flags &= -33));
                    var i = Td(e);
                    Ql(e, i, s);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = Td(e);
                    Gl(e, a, o);
                    break;
                default:
                    throw Error(E(161));
            }
        } catch (l) {
            ee(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function k1(e, t, n) {
    (M = e), vg(e);
}
function vg(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var s = M,
            i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || Pi;
            if (!o) {
                var a = s.alternate,
                    l = (a !== null && a.memoizedState !== null) || Pe;
                a = Pi;
                var u = Pe;
                if (((Pi = o), (Pe = l) && !u))
                    for (M = s; M !== null; )
                        (o = M),
                            (l = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? Ld(s)
                                : l !== null
                                    ? ((l.return = o), (M = l))
                                    : Ld(s);
                for (; i !== null; ) (M = i), vg(i), (i = i.sibling);
                (M = s), (Pi = a), (Pe = u);
            }
            Rd(e);
        } else
            s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (M = i)) : Rd(e);
    }
}
function Rd(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Pe || Go(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Pe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var s =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : ot(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        s,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate,
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && hd(t, i, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                hd(t, o, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var f = u.memoizedState;
                                    if (f !== null) {
                                        var c = f.dehydrated;
                                        c !== null && Ms(c);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(E(163));
                    }
                Pe || (t.flags & 512 && Xl(t));
            } catch (d) {
                ee(t, t.return, d);
            }
        }
        if (t === e) {
            M = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function Md(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function Ld(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Go(4, t);
                    } catch (l) {
                        ee(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var s = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            ee(t, s, l);
                        }
                    }
                    var i = t.return;
                    try {
                        Xl(t);
                    } catch (l) {
                        ee(t, i, l);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Xl(t);
                    } catch (l) {
                        ee(t, o, l);
                    }
            }
        } catch (l) {
            ee(t, t.return, l);
        }
        if (t === e) {
            M = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (M = a);
            break;
        }
        M = t.return;
    }
}
var E1 = Math.ceil,
    Co = Ut.ReactCurrentDispatcher,
    dc = Ut.ReactCurrentOwner,
    et = Ut.ReactCurrentBatchConfig,
    B = 0,
    he = null,
    se = null,
    ye = 0,
    ze = 0,
    ar = pn(0),
    ue = 0,
    $s = null,
    Vn = 0,
    Qo = 0,
    hc = 0,
    vs = null,
    Fe = null,
    pc = 0,
    Mr = 1 / 0,
    Rt = null,
    Po = !1,
    Yl = null,
    sn = null,
    ki = !1,
    qt = null,
    ko = 0,
    ws = 0,
    Jl = null,
    Hi = -1,
    Ki = 0;
function Me() {
    return B & 6 ? re() : Hi !== -1 ? Hi : (Hi = re());
}
function on(e) {
    return e.mode & 1
        ? B & 2 && ye !== 0
            ? ye & -ye
            : u1.transition !== null
                ? (Ki === 0 && (Ki = nm()), Ki)
                : ((e = $),
                e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : um(e.type))),
                    e)
        : 1;
}
function ht(e, t, n, r) {
    if (50 < ws) throw ((ws = 0), (Jl = null), Error(E(185)));
    Qs(e, n, r),
    (!(B & 2) || e !== he) &&
    (e === he && (!(B & 2) && (Qo |= n), ue === 4 && Yt(e, ye)),
        je(e, r),
    n === 1 && B === 0 && !(t.mode & 1) && ((Mr = re() + 500), Ho && mn()));
}
function je(e, t) {
    var n = e.callbackNode;
    uw(e, t);
    var r = ao(e, e === he ? ye : 0);
    if (r === 0)
        n !== null && Bf(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Bf(n), t === 1))
            e.tag === 0 ? l1(Nd.bind(null, e)) : Am(Nd.bind(null, e)),
                s1(function () {
                    !(B & 6) && mn();
                }),
                (n = null);
        else {
            switch (rm(r)) {
                case 1:
                    n = Bu;
                    break;
                case 4:
                    n = em;
                    break;
                case 16:
                    n = oo;
                    break;
                case 536870912:
                    n = tm;
                    break;
                default:
                    n = oo;
            }
            n = Eg(n, wg.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function wg(e, t) {
    if (((Hi = -1), (Ki = 0), B & 6)) throw Error(E(327));
    var n = e.callbackNode;
    if (wr() && e.callbackNode !== n) return null;
    var r = ao(e, e === he ? ye : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Eo(e, r);
    else {
        t = r;
        var s = B;
        B |= 2;
        var i = Sg();
        (he !== e || ye !== t) && ((Rt = null), (Mr = re() + 500), Ln(e, t));
        do
            try {
                R1();
                break;
            } catch (a) {
                xg(e, a);
            }
        while (!0);
        Zu(),
            (Co.current = i),
            (B = s),
            se !== null ? (t = 0) : ((he = null), (ye = 0), (t = ue));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((s = Pl(e)), s !== 0 && ((r = s), (t = ql(e, s)))), t === 1)
        )
            throw ((n = $s), Ln(e, 0), Yt(e, r), je(e, re()), n);
        if (t === 6) Yt(e, r);
        else {
            if (
                ((s = e.current.alternate),
                !(r & 30) &&
                !T1(s) &&
                ((t = Eo(e, r)),
                t === 2 && ((i = Pl(e)), i !== 0 && ((r = i), (t = ql(e, i)))),
                t === 1))
            )
                throw ((n = $s), Ln(e, 0), Yt(e, r), je(e, re()), n);
            switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    _n(e, Fe, Rt);
                    break;
                case 3:
                    if (
                        (Yt(e, r), (r & 130023424) === r && ((t = pc + 500 - re()), 10 < t))
                    ) {
                        if (ao(e, 0) !== 0) break;
                        if (((s = e.suspendedLanes), (s & r) !== r)) {
                            Me(), (e.pingedLanes |= e.suspendedLanes & s);
                            break;
                        }
                        e.timeoutHandle = Nl(_n.bind(null, e, Fe, Rt), t);
                        break;
                    }
                    _n(e, Fe, Rt);
                    break;
                case 4:
                    if ((Yt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, s = -1; 0 < r; ) {
                        var o = 31 - dt(r);
                        (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
                    }
                    if (
                        ((r = s),
                            (r = re() - r),
                            (r =
                                (120 > r
                                    ? 120
                                    : 480 > r
                                        ? 480
                                        : 1080 > r
                                            ? 1080
                                            : 1920 > r
                                                ? 1920
                                                : 3e3 > r
                                                    ? 3e3
                                                    : 4320 > r
                                                        ? 4320
                                                        : 1960 * E1(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Nl(_n.bind(null, e, Fe, Rt), r);
                        break;
                    }
                    _n(e, Fe, Rt);
                    break;
                case 5:
                    _n(e, Fe, Rt);
                    break;
                default:
                    throw Error(E(329));
            }
        }
    }
    return je(e, re()), e.callbackNode === n ? wg.bind(null, e) : null;
}
function ql(e, t) {
    var n = vs;
    return (
        e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
            (e = Eo(e, t)),
        e !== 2 && ((t = Fe), (Fe = n), t !== null && Zl(t)),
            e
    );
}
function Zl(e) {
    Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function T1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r],
                        i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!pt(i(), s)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Yt(e, t) {
    for (
        t &= ~hc,
            t &= ~Qo,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - dt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Nd(e) {
    if (B & 6) throw Error(E(327));
    wr();
    var t = ao(e, 0);
    if (!(t & 1)) return je(e, re()), null;
    var n = Eo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Pl(e);
        r !== 0 && ((t = r), (n = ql(e, r)));
    }
    if (n === 1) throw ((n = $s), Ln(e, 0), Yt(e, t), je(e, re()), n);
    if (n === 6) throw Error(E(345));
    return (
        (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _n(e, Fe, Rt),
            je(e, re()),
            null
    );
}
function mc(e, t) {
    var n = B;
    B |= 1;
    try {
        return e(t);
    } finally {
        (B = n), B === 0 && ((Mr = re() + 500), Ho && mn());
    }
}
function jn(e) {
    qt !== null && qt.tag === 0 && !(B & 6) && wr();
    var t = B;
    B |= 1;
    var n = et.transition,
        r = $;
    try {
        if (((et.transition = null), ($ = 1), e)) return e();
    } finally {
        ($ = r), (et.transition = n), (B = t), !(B & 6) && mn();
    }
}
function gc() {
    (ze = ar.current), X(ar);
}
function Ln(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), r1(n)), se !== null))
        for (n = se.return; n !== null; ) {
            var r = n;
            switch ((Yu(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && ho();
                    break;
                case 3:
                    Ar(), X(Oe), X(Te), ic();
                    break;
                case 5:
                    sc(r);
                    break;
                case 4:
                    Ar();
                    break;
                case 13:
                    X(Y);
                    break;
                case 19:
                    X(Y);
                    break;
                case 10:
                    ec(r.type._context);
                    break;
                case 22:
                case 23:
                    gc();
            }
            n = n.return;
        }
    if (
        ((he = e),
            (se = e = an(e.current, null)),
            (ye = ze = t),
            (ue = 0),
            ($s = null),
            (hc = Qo = Vn = 0),
            (Fe = vs = null),
        Tn !== null)
    ) {
        for (t = 0; t < Tn.length; t++)
            if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var s = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    (i.next = s), (r.next = o);
                }
                n.pending = r;
            }
        Tn = null;
    }
    return e;
}
function xg(e, t) {
    do {
        var n = se;
        try {
            if ((Zu(), (zi.current = _o), So)) {
                for (var r = q.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null), (r = r.next);
                }
                So = !1;
            }
            if (
                ((On = 0),
                    (de = le = q = null),
                    (gs = !1),
                    (js = 0),
                    (dc.current = null),
                n === null || n.return === null)
            ) {
                (ue = 1), ($s = t), (se = null);
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    a = n,
                    l = t;
                if (
                    ((t = ye),
                        (a.flags |= 32768),
                    l !== null && typeof l == "object" && typeof l.then == "function")
                ) {
                    var u = l,
                        f = a,
                        c = f.tag;
                    if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var d = f.alternate;
                        d
                            ? ((f.updateQueue = d.updateQueue),
                                (f.memoizedState = d.memoizedState),
                                (f.lanes = d.lanes))
                            : ((f.updateQueue = null), (f.memoizedState = null));
                    }
                    var g = wd(o);
                    if (g !== null) {
                        (g.flags &= -257),
                            xd(g, o, a, i, t),
                        g.mode & 1 && vd(i, u, t),
                            (t = g),
                            (l = u);
                        var y = t.updateQueue;
                        if (y === null) {
                            var v = new Set();
                            v.add(l), (t.updateQueue = v);
                        } else y.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            vd(i, u, t), yc();
                            break e;
                        }
                        l = Error(E(426));
                    }
                } else if (G && a.mode & 1) {
                    var x = wd(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                            xd(x, o, a, i, t),
                            Ju(Rr(l, a));
                        break e;
                    }
                }
                (i = l = Rr(l, a)),
                ue !== 4 && (ue = 2),
                    vs === null ? (vs = [i]) : vs.push(i),
                    (i = o);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var m = rg(i, l, t);
                            dd(i, m);
                            break e;
                        case 1:
                            a = l;
                            var h = i.type,
                                p = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof h.getDerivedStateFromError == "function" ||
                                    (p !== null &&
                                        typeof p.componentDidCatch == "function" &&
                                        (sn === null || !sn.has(p))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var w = sg(i, a, t);
                                dd(i, w);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Cg(n);
        } catch (S) {
            (t = S), se === n && n !== null && (se = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Sg() {
    var e = Co.current;
    return (Co.current = _o), e === null ? _o : e;
}
function yc() {
    (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    he === null || (!(Vn & 268435455) && !(Qo & 268435455)) || Yt(he, ye);
}
function Eo(e, t) {
    var n = B;
    B |= 2;
    var r = Sg();
    (he !== e || ye !== t) && ((Rt = null), Ln(e, t));
    do
        try {
            A1();
            break;
        } catch (s) {
            xg(e, s);
        }
    while (!0);
    if ((Zu(), (B = n), (Co.current = r), se !== null)) throw Error(E(261));
    return (he = null), (ye = 0), ue;
}
function A1() {
    for (; se !== null; ) _g(se);
}
function R1() {
    for (; se !== null && !ew(); ) _g(se);
}
function _g(e) {
    var t = kg(e.alternate, e, ze);
    (e.memoizedProps = e.pendingProps),
        t === null ? Cg(e) : (se = t),
        (dc.current = null);
}
function Cg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = _1(n, t)), n !== null)) {
                (n.flags &= 32767), (se = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ue = 6), (se = null);
                return;
            }
        } else if (((n = S1(n, t, ze)), n !== null)) {
            se = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            se = t;
            return;
        }
        se = t = e;
    } while (t !== null);
    ue === 0 && (ue = 5);
}
function _n(e, t, n) {
    var r = $,
        s = et.transition;
    try {
        (et.transition = null), ($ = 1), M1(e, t, n, r);
    } finally {
        (et.transition = s), ($ = r);
    }
    return null;
}
function M1(e, t, n, r) {
    do wr();
    while (qt !== null);
    if (B & 6) throw Error(E(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(E(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (cw(e, i),
        e === he && ((se = he = null), (ye = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ki ||
        ((ki = !0),
            Eg(oo, function () {
                return wr(), null;
            })),
            (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = et.transition), (et.transition = null);
        var o = $;
        $ = 1;
        var a = B;
        (B |= 4),
            (dc.current = null),
            P1(e, n),
            yg(n, e),
            Yw(Ml),
            (lo = !!Rl),
            (Ml = Rl = null),
            (e.current = n),
            k1(n),
            tw(),
            (B = a),
            ($ = o),
            (et.transition = i);
    } else e.current = n;
    if (
        (ki && ((ki = !1), (qt = e), (ko = s)),
            (i = e.pendingLanes),
        i === 0 && (sn = null),
            sw(n.stateNode),
            je(e, re()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Po) throw ((Po = !1), (e = Yl), (Yl = null), e);
    return (
        ko & 1 && e.tag !== 0 && wr(),
            (i = e.pendingLanes),
            i & 1 ? (e === Jl ? ws++ : ((ws = 0), (Jl = e))) : (ws = 0),
            mn(),
            null
    );
}
function wr() {
    if (qt !== null) {
        var e = rm(ko),
            t = et.transition,
            n = $;
        try {
            if (((et.transition = null), ($ = 16 > e ? 16 : e), qt === null))
                var r = !1;
            else {
                if (((e = qt), (qt = null), (ko = 0), B & 6)) throw Error(E(331));
                var s = B;
                for (B |= 4, M = e.current; M !== null; ) {
                    var i = M,
                        o = i.child;
                    if (M.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (M = u; M !== null; ) {
                                    var f = M;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ys(8, f, i);
                                    }
                                    var c = f.child;
                                    if (c !== null) (c.return = f), (M = c);
                                    else
                                        for (; M !== null; ) {
                                            f = M;
                                            var d = f.sibling,
                                                g = f.return;
                                            if ((pg(f), f === u)) {
                                                M = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = g), (M = d);
                                                break;
                                            }
                                            M = g;
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var x = v.sibling;
                                        (v.sibling = null), (v = x);
                                    } while (v !== null);
                                }
                            }
                            M = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (M = o);
                    else
                        e: for (; M !== null; ) {
                            if (((i = M), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ys(9, i, i.return);
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                (m.return = i.return), (M = m);
                                break e;
                            }
                            M = i.return;
                        }
                }
                var h = e.current;
                for (M = h; M !== null; ) {
                    o = M;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (M = p);
                    else
                        e: for (o = h; M !== null; ) {
                            if (((a = M), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Go(9, a);
                                    }
                                } catch (S) {
                                    ee(a, a.return, S);
                                }
                            if (a === o) {
                                M = null;
                                break e;
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                (w.return = a.return), (M = w);
                                break e;
                            }
                            M = a.return;
                        }
                }
                if (
                    ((B = s), mn(), _t && typeof _t.onPostCommitFiberRoot == "function")
                )
                    try {
                        _t.onPostCommitFiberRoot(Bo, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            ($ = n), (et.transition = t);
        }
    }
    return !1;
}
function Dd(e, t, n) {
    (t = Rr(n, t)),
        (t = rg(e, t, 1)),
        (e = rn(e, t, 1)),
        (t = Me()),
    e !== null && (Qs(e, 1, t), je(e, t));
}
function ee(e, t, n) {
    if (e.tag === 3) Dd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Dd(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (sn === null || !sn.has(r)))
                ) {
                    (e = Rr(n, e)),
                        (e = sg(t, e, 1)),
                        (t = rn(t, e, 1)),
                        (e = Me()),
                    t !== null && (Qs(t, 1, e), je(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function L1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Me()),
        (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
    (ye & n) === n &&
    (ue === 4 || (ue === 3 && (ye & 130023424) === ye && 500 > re() - pc)
        ? Ln(e, 0)
        : (hc |= n)),
        je(e, t);
}
function Pg(e, t) {
    t === 0 &&
    (e.mode & 1
        ? ((t = mi), (mi <<= 1), !(mi & 130023424) && (mi = 4194304))
        : (t = 1));
    var n = Me();
    (e = $t(e, t)), e !== null && (Qs(e, t, n), je(e, n));
}
function N1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Pg(e, n);
}
function D1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                s = e.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(E(314));
    }
    r !== null && r.delete(t), Pg(e, n);
}
var kg;
kg = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Oe.current) Ie = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), x1(e, t, n);
            Ie = !!(e.flags & 131072);
        }
    else (Ie = !1), G && t.flags & 1048576 && Rm(t, go, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Wi(e, t), (e = t.pendingProps);
            var s = kr(t, Te.current);
            vr(t, n), (s = ac(null, t, r, e, s, n));
            var i = lc();
            return (
                (t.flags |= 1),
                    typeof s == "object" &&
                    s !== null &&
                    typeof s.render == "function" &&
                    s.$$typeof === void 0
                        ? ((t.tag = 1),
                            (t.memoizedState = null),
                            (t.updateQueue = null),
                            Ve(r) ? ((i = !0), po(t)) : (i = !1),
                            (t.memoizedState =
                                s.state !== null && s.state !== void 0 ? s.state : null),
                            nc(t),
                            (s.updater = Xo),
                            (t.stateNode = s),
                            (s._reactInternals = t),
                            bl(t, r, e, n),
                            (t = zl(null, t, r, !0, i, n)))
                        : ((t.tag = 0), G && i && Qu(t), Re(null, t, s, n), (t = t.child)),
                    t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Wi(e, t),
                        (e = t.pendingProps),
                        (s = r._init),
                        (r = s(r._payload)),
                        (t.type = r),
                        (s = t.tag = I1(r)),
                        (e = ot(r, e)),
                        s)
                    ) {
                    case 0:
                        t = $l(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Cd(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Sd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = _d(null, t, r, ot(r.type, e), n);
                        break e;
                }
                throw Error(E(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                    (s = t.pendingProps),
                    (s = t.elementType === r ? s : ot(r, s)),
                    $l(e, t, r, s, n)
            );
        case 1:
            return (
                (r = t.type),
                    (s = t.pendingProps),
                    (s = t.elementType === r ? s : ot(r, s)),
                    Cd(e, t, r, s, n)
            );
        case 3:
            e: {
                if ((lg(t), e === null)) throw Error(E(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (s = i.element),
                    Im(e, t),
                    wo(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                            (t.updateQueue.baseState = i),
                            (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (s = Rr(Error(E(423)), t)), (t = Pd(e, t, r, n, s));
                        break e;
                    } else if (r !== s) {
                        (s = Rr(Error(E(424)), t)), (t = Pd(e, t, r, n, s));
                        break e;
                    } else
                        for (
                            Ue = nn(t.stateNode.containerInfo.firstChild),
                                We = t,
                                G = !0,
                                ut = null,
                                n = Dm(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Er(), r === s)) {
                        t = zt(e, t, n);
                        break e;
                    }
                    Re(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Om(t),
                e === null && Ol(t),
                    (r = t.type),
                    (s = t.pendingProps),
                    (i = e !== null ? e.memoizedProps : null),
                    (o = s.children),
                    Ll(r, s) ? (o = null) : i !== null && Ll(r, i) && (t.flags |= 32),
                    ag(e, t),
                    Re(e, t, o, n),
                    t.child
            );
        case 6:
            return e === null && Ol(t), null;
        case 13:
            return ug(e, t, n);
        case 4:
            return (
                rc(t, t.stateNode.containerInfo),
                    (r = t.pendingProps),
                    e === null ? (t.child = Tr(t, null, r, n)) : Re(e, t, r, n),
                    t.child
            );
        case 11:
            return (
                (r = t.type),
                    (s = t.pendingProps),
                    (s = t.elementType === r ? s : ot(r, s)),
                    Sd(e, t, r, s, n)
            );
        case 7:
            return Re(e, t, t.pendingProps, n), t.child;
        case 8:
            return Re(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Re(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                        (s = t.pendingProps),
                        (i = t.memoizedProps),
                        (o = s.value),
                        H(yo, r._currentValue),
                        (r._currentValue = o),
                    i !== null)
                )
                    if (pt(i.value, o)) {
                        if (i.children === s.children && !Oe.current) {
                            t = zt(e, t, n);
                            break e;
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                o = i.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            (l = Ft(-1, n & -n)), (l.tag = 2);
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var f = u.pending;
                                                f === null
                                                    ? (l.next = l)
                                                    : ((l.next = f.next), (f.next = l)),
                                                    (u.pending = l);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (l = i.alternate),
                                        l !== null && (l.lanes |= n),
                                            Vl(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null)) throw Error(E(341));
                                (o.lanes |= n),
                                    (a = o.alternate),
                                a !== null && (a.lanes |= n),
                                    Vl(o, n, t),
                                    (o = i.sibling);
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        (i.return = o.return), (o = i);
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                Re(e, t, s.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (s = t.type),
                    (r = t.pendingProps.children),
                    vr(t, n),
                    (s = tt(s)),
                    (r = r(s)),
                    (t.flags |= 1),
                    Re(e, t, r, n),
                    t.child
            );
        case 14:
            return (
                (r = t.type),
                    (s = ot(r, t.pendingProps)),
                    (s = ot(r.type, s)),
                    _d(e, t, r, s, n)
            );
        case 15:
            return ig(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                    (s = t.pendingProps),
                    (s = t.elementType === r ? s : ot(r, s)),
                    Wi(e, t),
                    (t.tag = 1),
                    Ve(r) ? ((e = !0), po(t)) : (e = !1),
                    vr(t, n),
                    ng(t, r, s),
                    bl(t, r, s, n),
                    zl(null, t, r, !0, e, n)
            );
        case 19:
            return cg(e, t, n);
        case 22:
            return og(e, t, n);
    }
    throw Error(E(156, t.tag));
};
function Eg(e, t) {
    return Zp(e, t);
}
function F1(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
                this.return =
                    this.stateNode =
                        this.type =
                            this.elementType =
                                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
                this.updateQueue =
                    this.memoizedProps =
                        null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ze(e, t, n, r) {
    return new F1(e, t, n, r);
}
function vc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function I1(e) {
    if (typeof e == "function") return vc(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Vu)) return 11;
        if (e === ju) return 14;
    }
    return 2;
}
function an(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ze(e.tag, t, e.key, e.mode)),
                (n.elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
            : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = e.flags & 14680064),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
                t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
    );
}
function Xi(e, t, n, r, s, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) vc(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case Jn:
                return Nn(n.children, s, i, t);
            case Ou:
                (o = 8), (s |= 8);
                break;
            case ul:
                return (
                    (e = Ze(12, n, t, s | 2)), (e.elementType = ul), (e.lanes = i), e
                );
            case cl:
                return (e = Ze(13, n, t, s)), (e.elementType = cl), (e.lanes = i), e;
            case fl:
                return (e = Ze(19, n, t, s)), (e.elementType = fl), (e.lanes = i), e;
            case Op:
                return Yo(n, s, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Fp:
                            o = 10;
                            break e;
                        case Ip:
                            o = 9;
                            break e;
                        case Vu:
                            o = 11;
                            break e;
                        case ju:
                            o = 14;
                            break e;
                        case Xt:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(E(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Ze(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
}
function Nn(e, t, n, r) {
    return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function Yo(e, t, n, r) {
    return (
        (e = Ze(22, e, r, t)),
            (e.elementType = Op),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
    );
}
function Va(e, t, n) {
    return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function ja(e, t, n) {
    return (
        (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = n),
            (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            t
    );
}
function O1(e, t, n, r, s) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
                this.current =
                    this.pendingChildren =
                        null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = va(0)),
        (this.expirationTimes = va(-1)),
        (this.entangledLanes =
            this.finishedLanes =
                this.mutableReadLanes =
                    this.expiredLanes =
                        this.pingedLanes =
                            this.suspendedLanes =
                                this.pendingLanes =
                                    0),
        (this.entanglements = va(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = s),
        (this.mutableSourceEagerHydrationData = null);
}
function wc(e, t, n, r, s, i, o, a, l) {
    return (
        (e = new O1(e, t, n, a, l)),
            t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
            (i = Ze(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            nc(i),
            e
    );
}
function V1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Yn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Tg(e) {
    if (!e) return un;
    e = e._reactInternals;
    e: {
        if ($n(e) !== e || e.tag !== 1) throw Error(E(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ve(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(E(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ve(n)) return Tm(e, n, t);
    }
    return t;
}
function Ag(e, t, n, r, s, i, o, a, l) {
    return (
        (e = wc(n, r, !0, e, s, i, o, a, l)),
            (e.context = Tg(null)),
            (n = e.current),
            (r = Me()),
            (s = on(n)),
            (i = Ft(r, s)),
            (i.callback = t ?? null),
            rn(n, i, s),
            (e.current.lanes = s),
            Qs(e, s, r),
            je(e, r),
            e
    );
}
function Jo(e, t, n, r) {
    var s = t.current,
        i = Me(),
        o = on(s);
    return (
        (n = Tg(n)),
            t.context === null ? (t.context = n) : (t.pendingContext = n),
            (t = Ft(i, o)),
            (t.payload = { element: e }),
            (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
            (e = rn(s, t, o)),
        e !== null && (ht(e, s, o, i), $i(e, s, o)),
            o
    );
}
function To(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Fd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function xc(e, t) {
    Fd(e, t), (e = e.alternate) && Fd(e, t);
}
function j1() {
    return null;
}
var Rg =
    typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
        };
function Sc(e) {
    this._internalRoot = e;
}
qo.prototype.render = Sc.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    Jo(e, t, null, null);
};
qo.prototype.unmount = Sc.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        jn(function () {
            Jo(null, e, null, null);
        }),
            (t[Bt] = null);
    }
};
function qo(e) {
    this._internalRoot = e;
}
qo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = om();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
        Qt.splice(n, 0, e), n === 0 && lm(e);
    }
};
function _c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zo(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Id() {}
function b1(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = To(o);
                i.call(u);
            };
        }
        var o = Ag(t, r, e, 0, null, !1, !1, "", Id);
        return (
            (e._reactRootContainer = o),
                (e[Bt] = o.current),
                Ds(e.nodeType === 8 ? e.parentNode : e),
                jn(),
                o
        );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = To(l);
            a.call(u);
        };
    }
    var l = wc(e, 0, !1, null, null, !1, !1, "", Id);
    return (
        (e._reactRootContainer = l),
            (e[Bt] = l.current),
            Ds(e.nodeType === 8 ? e.parentNode : e),
            jn(function () {
                Jo(t, l, n, r);
            }),
            l
    );
}
function ea(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function () {
                var l = To(o);
                a.call(l);
            };
        }
        Jo(t, o, e, s);
    } else o = b1(n, t, e, s, r);
    return To(o);
}
sm = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ts(t.pendingLanes);
                n !== 0 &&
                ($u(t, n | 1), je(t, re()), !(B & 6) && ((Mr = re() + 500), mn()));
            }
            break;
        case 13:
            jn(function () {
                var r = $t(e, 1);
                if (r !== null) {
                    var s = Me();
                    ht(r, e, 1, s);
                }
            }),
                xc(e, 1);
    }
};
zu = function (e) {
    if (e.tag === 13) {
        var t = $t(e, 134217728);
        if (t !== null) {
            var n = Me();
            ht(t, e, 134217728, n);
        }
        xc(e, 134217728);
    }
};
im = function (e) {
    if (e.tag === 13) {
        var t = on(e),
            n = $t(e, t);
        if (n !== null) {
            var r = Me();
            ht(n, e, t, r);
        }
        xc(e, t);
    }
};
om = function () {
    return $;
};
am = function (e, t) {
    var n = $;
    try {
        return ($ = e), t();
    } finally {
        $ = n;
    }
};
Sl = function (e, t, n) {
    switch (t) {
        case "input":
            if ((pl(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var s = Wo(r);
                        if (!s) throw Error(E(90));
                        jp(r), pl(r, s);
                    }
                }
            }
            break;
        case "textarea":
            Bp(e, n);
            break;
        case "select":
            (t = n.value), t != null && pr(e, !!n.multiple, t, !1);
    }
};
Xp = mc;
Gp = jn;
var B1 = { usingClientEntryPoint: !1, Events: [Js, tr, Wo, Hp, Kp, mc] },
    Jr = {
        findFiberByHostInstance: En,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    $1 = {
        bundleType: Jr.bundleType,
        version: Jr.version,
        rendererPackageName: Jr.rendererPackageName,
        rendererConfig: Jr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ut.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Jp(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Jr.findFiberByHostInstance || j1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ei.isDisabled && Ei.supportsFiber)
        try {
            (Bo = Ei.inject($1)), (_t = Ei);
        } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B1;
Xe.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_c(t)) throw Error(E(200));
    return V1(e, t, null, n);
};
Xe.createRoot = function (e, t) {
    if (!_c(e)) throw Error(E(299));
    var n = !1,
        r = "",
        s = Rg;
    return (
        t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
            (t = wc(e, 1, !1, null, null, n, !1, r, s)),
            (e[Bt] = t.current),
            Ds(e.nodeType === 8 ? e.parentNode : e),
            new Sc(t)
    );
};
Xe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(E(188))
            : ((e = Object.keys(e).join(",")), Error(E(268, e)));
    return (e = Jp(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
    return jn(e);
};
Xe.hydrate = function (e, t, n) {
    if (!Zo(t)) throw Error(E(200));
    return ea(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
    if (!_c(e)) throw Error(E(405));
    var r = (n != null && n.hydratedSources) || null,
        s = !1,
        i = "",
        o = Rg;
    if (
        (n != null &&
        (n.unstable_strictMode === !0 && (s = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
            (t = Ag(t, null, e, 1, n ?? null, s, !1, i, o)),
            (e[Bt] = t.current),
            Ds(e),
            r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (s = n._getVersion),
                (s = s(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, s])
                    : t.mutableSourceEagerHydrationData.push(n, s);
    return new qo(t);
};
Xe.render = function (e, t, n) {
    if (!Zo(t)) throw Error(E(200));
    return ea(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
    if (!Zo(e)) throw Error(E(40));
    return e._reactRootContainer
        ? (jn(function () {
            ea(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Bt] = null);
            });
        }),
            !0)
        : !1;
};
Xe.unstable_batchedUpdates = mc;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Zo(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return ea(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Mg() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mg);
        } catch (e) {
            console.error(e);
        }
}
Mg(), (Mp.exports = Xe);
var z1 = Mp.exports,
    Lg,
    Od = z1;
(Lg = Od.createRoot), Od.hydrateRoot;
function U1(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map(),
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, s) =>
            s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
    });
}
function ta(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
}
const eu = (e) => Array.isArray(e);
function Ng(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
}
function zs(e) {
    return typeof e == "string" || Array.isArray(e);
}
function Vd(e) {
    const t = [{}, {}];
    return (
        e == null ||
        e.values.forEach((n, r) => {
            (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
        }),
            t
    );
}
function Cc(e, t, n, r) {
    if (typeof t == "function") {
        const [s, i] = Vd(r);
        t = t(n !== void 0 ? n : e.custom, s, i);
    }
    if (
        (typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function")
    ) {
        const [s, i] = Vd(r);
        t = t(n !== void 0 ? n : e.custom, s, i);
    }
    return t;
}
function na(e, t, n) {
    const r = e.getProps();
    return Cc(r, t, n !== void 0 ? n : r.custom, e);
}
const Pc = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
    ],
    kc = ["initial", ...Pc],
    Zs = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
    ],
    zn = new Set(Zs),
    It = (e) => e * 1e3,
    Ot = (e) => e / 1e3,
    W1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    H1 = (e) => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
    }),
    K1 = { type: "keyframes", duration: 0.8 },
    X1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    G1 = (e, { keyframes: t }) =>
        t.length > 2
            ? K1
            : zn.has(e)
                ? e.startsWith("scale")
                    ? H1(t[1])
                    : W1
                : X1;
function Ec(e, t) {
    return e ? e[t] || e.default || e : void 0;
}
const Q1 = { skipAnimations: !1, useManualTiming: !1 },
    Y1 = (e) => e !== null;
function ra(e, { repeat: t, repeatType: n = "loop" }, r) {
    const s = e.filter(Y1),
        i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !i || r === void 0 ? s[i] : r;
}
const Ee = (e) => e;
function J1(e) {
    let t = new Set(),
        n = new Set(),
        r = !1,
        s = !1;
    const i = new WeakSet();
    let o = { delta: 0, timestamp: 0, isProcessing: !1 };
    function a(u) {
        i.has(u) && (l.schedule(u), e()), u(o);
    }
    const l = {
        schedule: (u, f = !1, c = !1) => {
            const g = c && r ? t : n;
            return f && i.add(u), g.has(u) || g.add(u), u;
        },
        cancel: (u) => {
            n.delete(u), i.delete(u);
        },
        process: (u) => {
            if (((o = u), r)) {
                s = !0;
                return;
            }
            (r = !0),
                ([t, n] = [n, t]),
                n.clear(),
                t.forEach(a),
                (r = !1),
            s && ((s = !1), l.process(u));
        },
    };
    return l;
}
const Ti = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
    ],
    q1 = 40;
function Dg(e, t) {
    let n = !1,
        r = !0;
    const s = { delta: 0, timestamp: 0, isProcessing: !1 },
        i = () => (n = !0),
        o = Ti.reduce((m, h) => ((m[h] = J1(i)), m), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: f,
            render: c,
            postRender: d,
        } = o,
        g = () => {
            const m = performance.now();
            (n = !1),
                (s.delta = r ? 1e3 / 60 : Math.max(Math.min(m - s.timestamp, q1), 1)),
                (s.timestamp = m),
                (s.isProcessing = !0),
                a.process(s),
                l.process(s),
                u.process(s),
                f.process(s),
                c.process(s),
                d.process(s),
                (s.isProcessing = !1),
            n && t && ((r = !1), e(g));
        },
        y = () => {
            (n = !0), (r = !0), s.isProcessing || e(g);
        };
    return {
        schedule: Ti.reduce((m, h) => {
            const p = o[h];
            return (m[h] = (w, S = !1, _ = !1) => (n || y(), p.schedule(w, S, _))), m;
        }, {}),
        cancel: (m) => {
            for (let h = 0; h < Ti.length; h++) o[Ti[h]].cancel(m);
        },
        state: s,
        steps: o,
    };
}
const {
        schedule: W,
        cancel: cn,
        state: me,
        steps: ba,
    } = Dg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ee, !0),
    Fg = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    Z1 = 1e-7,
    ex = 12;
function tx(e, t, n, r, s) {
    let i,
        o,
        a = 0;
    do (o = t + (n - t) / 2), (i = Fg(o, r, s) - e), i > 0 ? (n = o) : (t = o);
    while (Math.abs(i) > Z1 && ++a < ex);
    return o;
}
function ei(e, t, n, r) {
    if (e === t && n === r) return Ee;
    const s = (i) => tx(i, 0, 1, e, n);
    return (i) => (i === 0 || i === 1 ? i : Fg(s(i), t, r));
}
const Ig = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
    Og = (e) => (t) => 1 - e(1 - t),
    Vg = ei(0.33, 1.53, 0.69, 0.99),
    Tc = Og(Vg),
    jg = Ig(Tc),
    bg = (e) =>
        (e *= 2) < 1 ? 0.5 * Tc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    Ac = (e) => 1 - Math.sin(Math.acos(e)),
    Bg = Og(Ac),
    $g = Ig(Ac),
    zg = (e) => /^0[^.\s]+$/u.test(e);
function nx(e) {
    return typeof e == "number"
        ? e === 0
        : e !== null
            ? e === "none" || e === "0" || zg(e)
            : !0;
}
let tu = Ee;
const Ug = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Wg = (e) => (t) => typeof t == "string" && t.startsWith(e),
    Hg = Wg("--"),
    rx = Wg("var(--"),
    Rc = (e) => (rx(e) ? sx.test(e.split("/*")[0].trim()) : !1),
    sx =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    ix = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ox(e) {
    const t = ix.exec(e);
    if (!t) return [,];
    const [, n, r, s] = t;
    return [`--${n ?? r}`, s];
}
function Kg(e, t, n = 1) {
    const [r, s] = ox(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const o = i.trim();
        return Ug(o) ? parseFloat(o) : o;
    }
    return Rc(s) ? Kg(s, t, n + 1) : s;
}
const fn = (e, t, n) => (n > t ? t : n < e ? e : n),
    br = {
        test: (e) => typeof e == "number",
        parse: parseFloat,
        transform: (e) => e,
    },
    Us = { ...br, transform: (e) => fn(0, 1, e) },
    Ai = { ...br, default: 1 },
    ti = (e) => ({
        test: (t) =>
            typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
    }),
    Kt = ti("deg"),
    Pt = ti("%"),
    D = ti("px"),
    ax = ti("vh"),
    lx = ti("vw"),
    jd = {
        ...Pt,
        parse: (e) => Pt.parse(e) / 100,
        transform: (e) => Pt.transform(e * 100),
    },
    ux = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        "x",
        "y",
        "translateX",
        "translateY",
    ]),
    bd = (e) => e === br || e === D,
    Bd = (e, t) => parseFloat(e.split(", ")[t]),
    $d =
        (e, t) =>
            (n, { transform: r }) => {
                if (r === "none" || !r) return 0;
                const s = r.match(/^matrix3d\((.+)\)$/u);
                if (s) return Bd(s[1], t);
                {
                    const i = r.match(/^matrix\((.+)\)$/u);
                    return i ? Bd(i[1], e) : 0;
                }
            },
    cx = new Set(["x", "y", "z"]),
    fx = Zs.filter((e) => !cx.has(e));
function dx(e) {
    const t = [];
    return (
        fx.forEach((n) => {
            const r = e.getValue(n);
            r !== void 0 &&
            (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
        }),
            t
    );
}
const Lr = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
        e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
        e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: $d(4, 13),
    y: $d(5, 14),
};
Lr.translateX = Lr.x;
Lr.translateY = Lr.y;
const Xg = (e) => (t) => t.test(e),
    hx = { test: (e) => e === "auto", parse: (e) => e },
    Gg = [br, D, Pt, Kt, lx, ax, hx],
    zd = (e) => Gg.find(Xg(e)),
    Dn = new Set();
let nu = !1,
    ru = !1;
function Qg() {
    if (ru) {
        const e = Array.from(Dn).filter((r) => r.needsMeasurement),
            t = new Set(e.map((r) => r.element)),
            n = new Map();
        t.forEach((r) => {
            const s = dx(r);
            s.length && (n.set(r, s), r.render());
        }),
            e.forEach((r) => r.measureInitialState()),
            t.forEach((r) => {
                r.render();
                const s = n.get(r);
                s &&
                s.forEach(([i, o]) => {
                    var a;
                    (a = r.getValue(i)) === null || a === void 0 || a.set(o);
                });
            }),
            e.forEach((r) => r.measureEndState()),
            e.forEach((r) => {
                r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
            });
    }
    (ru = !1), (nu = !1), Dn.forEach((e) => e.complete()), Dn.clear();
}
function Yg() {
    Dn.forEach((e) => {
        e.readKeyframes(), e.needsMeasurement && (ru = !0);
    });
}
function px() {
    Yg(), Qg();
}
class Mc {
    constructor(t, n, r, s, i, o = !1) {
        (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = n),
            (this.name = r),
            (this.motionValue = s),
            (this.element = i),
            (this.isAsync = o);
    }
    scheduleResolve() {
        (this.isScheduled = !0),
            this.isAsync
                ? (Dn.add(this), nu || ((nu = !0), W.read(Yg), W.resolveKeyframes(Qg)))
                : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: s,
        } = this;
        for (let i = 0; i < t.length; i++)
            if (t[i] === null)
                if (i === 0) {
                    const o = s == null ? void 0 : s.get(),
                        a = t[t.length - 1];
                    if (o !== void 0) t[0] = o;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l);
                    }
                    t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]);
                } else t[i] = t[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            Dn.delete(this);
    }
    cancel() {
        this.isComplete || ((this.isScheduled = !1), Dn.delete(this));
    }
    resume() {
        this.isComplete || this.scheduleResolve();
    }
}
const xs = (e) => Math.round(e * 1e5) / 1e5,
    Lc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function mx(e) {
    return e == null;
}
const gx =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Nc = (e, t) => (n) =>
        !!(
            (typeof n == "string" && gx.test(n) && n.startsWith(e)) ||
            (t && !mx(n) && Object.prototype.hasOwnProperty.call(n, t))
        ),
    Jg = (e, t, n) => (r) => {
        if (typeof r != "string") return r;
        const [s, i, o, a] = r.match(Lc);
        return {
            [e]: parseFloat(s),
            [t]: parseFloat(i),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1,
        };
    },
    yx = (e) => fn(0, 255, e),
    Ba = { ...br, transform: (e) => Math.round(yx(e)) },
    Rn = {
        test: Nc("rgb", "red"),
        parse: Jg("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            Ba.transform(e) +
            ", " +
            Ba.transform(t) +
            ", " +
            Ba.transform(n) +
            ", " +
            xs(Us.transform(r)) +
            ")",
    };
function vx(e) {
    let t = "",
        n = "",
        r = "",
        s = "";
    return (
        e.length > 5
            ? ((t = e.substring(1, 3)),
                (n = e.substring(3, 5)),
                (r = e.substring(5, 7)),
                (s = e.substring(7, 9)))
            : ((t = e.substring(1, 2)),
                (n = e.substring(2, 3)),
                (r = e.substring(3, 4)),
                (s = e.substring(4, 5)),
                (t += t),
                (n += n),
                (r += r),
                (s += s)),
            {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1,
            }
    );
}
const su = { test: Nc("#"), parse: vx, transform: Rn.transform },
    lr = {
        test: Nc("hsl", "hue"),
        parse: Jg("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            Pt.transform(xs(t)) +
            ", " +
            Pt.transform(xs(n)) +
            ", " +
            xs(Us.transform(r)) +
            ")",
    },
    Ce = {
        test: (e) => Rn.test(e) || su.test(e) || lr.test(e),
        parse: (e) =>
            Rn.test(e) ? Rn.parse(e) : lr.test(e) ? lr.parse(e) : su.parse(e),
        transform: (e) =>
            typeof e == "string"
                ? e
                : e.hasOwnProperty("red")
                    ? Rn.transform(e)
                    : lr.transform(e),
    },
    wx =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function xx(e) {
    var t, n;
    return (
        isNaN(e) &&
        typeof e == "string" &&
        (((t = e.match(Lc)) === null || t === void 0 ? void 0 : t.length) || 0) +
        (((n = e.match(wx)) === null || n === void 0 ? void 0 : n.length) || 0) >
        0
    );
}
const qg = "number",
    Zg = "color",
    Sx = "var",
    _x = "var(",
    Ud = "${}",
    Cx =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ws(e) {
    const t = e.toString(),
        n = [],
        r = { color: [], number: [], var: [] },
        s = [];
    let i = 0;
    const a = t
        .replace(
            Cx,
            (l) => (
                Ce.test(l)
                    ? (r.color.push(i), s.push(Zg), n.push(Ce.parse(l)))
                    : l.startsWith(_x)
                        ? (r.var.push(i), s.push(Sx), n.push(l))
                        : (r.number.push(i), s.push(qg), n.push(parseFloat(l))),
                    ++i,
                    Ud
            ),
        )
        .split(Ud);
    return { values: n, split: a, indexes: r, types: s };
}
function ey(e) {
    return Ws(e).values;
}
function ty(e) {
    const { split: t, types: n } = Ws(e),
        r = t.length;
    return (s) => {
        let i = "";
        for (let o = 0; o < r; o++)
            if (((i += t[o]), s[o] !== void 0)) {
                const a = n[o];
                a === qg
                    ? (i += xs(s[o]))
                    : a === Zg
                        ? (i += Ce.transform(s[o]))
                        : (i += s[o]);
            }
        return i;
    };
}
const Px = (e) => (typeof e == "number" ? 0 : e);
function kx(e) {
    const t = ey(e);
    return ty(e)(t.map(Px));
}
const dn = {
        test: xx,
        parse: ey,
        createTransformer: ty,
        getAnimatableNone: kx,
    },
    Ex = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Tx(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Lc) || [];
    if (!r) return e;
    const s = n.replace(r, "");
    let i = Ex.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const Ax = /\b([a-z-]*)\(.*?\)/gu,
    iu = {
        ...dn,
        getAnimatableNone: (e) => {
            const t = e.match(Ax);
            return t ? t.map(Tx).join(" ") : e;
        },
    },
    Rx = {
        borderWidth: D,
        borderTopWidth: D,
        borderRightWidth: D,
        borderBottomWidth: D,
        borderLeftWidth: D,
        borderRadius: D,
        radius: D,
        borderTopLeftRadius: D,
        borderTopRightRadius: D,
        borderBottomRightRadius: D,
        borderBottomLeftRadius: D,
        width: D,
        maxWidth: D,
        height: D,
        maxHeight: D,
        top: D,
        right: D,
        bottom: D,
        left: D,
        padding: D,
        paddingTop: D,
        paddingRight: D,
        paddingBottom: D,
        paddingLeft: D,
        margin: D,
        marginTop: D,
        marginRight: D,
        marginBottom: D,
        marginLeft: D,
        backgroundPositionX: D,
        backgroundPositionY: D,
    },
    Mx = {
        rotate: Kt,
        rotateX: Kt,
        rotateY: Kt,
        rotateZ: Kt,
        scale: Ai,
        scaleX: Ai,
        scaleY: Ai,
        scaleZ: Ai,
        skew: Kt,
        skewX: Kt,
        skewY: Kt,
        distance: D,
        translateX: D,
        translateY: D,
        translateZ: D,
        x: D,
        y: D,
        z: D,
        perspective: D,
        transformPerspective: D,
        opacity: Us,
        originX: jd,
        originY: jd,
        originZ: D,
    },
    Wd = { ...br, transform: Math.round },
    Dc = {
        ...Rx,
        ...Mx,
        zIndex: Wd,
        size: D,
        fillOpacity: Us,
        strokeOpacity: Us,
        numOctaves: Wd,
    },
    Lx = {
        ...Dc,
        color: Ce,
        backgroundColor: Ce,
        outlineColor: Ce,
        fill: Ce,
        stroke: Ce,
        borderColor: Ce,
        borderTopColor: Ce,
        borderRightColor: Ce,
        borderBottomColor: Ce,
        borderLeftColor: Ce,
        filter: iu,
        WebkitFilter: iu,
    },
    Fc = (e) => Lx[e];
function ny(e, t) {
    let n = Fc(e);
    return (
        n !== iu && (n = dn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
}
const Nx = new Set(["auto", "none", "0"]);
function Dx(e, t, n) {
    let r = 0,
        s;
    for (; r < e.length && !s; ) {
        const i = e[r];
        typeof i == "string" && !Nx.has(i) && Ws(i).values.length && (s = e[r]),
            r++;
    }
    if (s && n) for (const i of t) e[i] = ny(n, s);
}
class ry extends Mc {
    constructor(t, n, r, s, i) {
        super(t, n, r, s, i, !0);
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, element: n, name: r } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && ((u = u.trim()), Rc(u))) {
                const f = Kg(u, n.current);
                f !== void 0 && (t[l] = f),
                l === t.length - 1 && (this.finalKeyframe = u);
            }
        }
        if ((this.resolveNoneKeyframes(), !ux.has(r) || t.length !== 2)) return;
        const [s, i] = t,
            o = zd(s),
            a = zd(i);
        if (o !== a)
            if (bd(o) && bd(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u));
                }
            else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: t, name: n } = this,
            r = [];
        for (let s = 0; s < t.length; s++) nx(t[s]) && r.push(s);
        r.length && Dx(t, r, n);
    }
    measureInitialState() {
        const { element: t, unresolvedKeyframes: n, name: r } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = Lr[r](
                t.measureViewportBox(),
                window.getComputedStyle(t.current),
            )),
            (n[0] = this.measuredOrigin);
        const s = n[n.length - 1];
        s !== void 0 && t.getValue(r, s).jump(s, !1);
    }
    measureEndState() {
        var t;
        const { element: n, name: r, unresolvedKeyframes: s } = this;
        if (!n || !n.current) return;
        const i = n.getValue(r);
        i && i.jump(this.measuredOrigin, !1);
        const o = s.length - 1,
            a = s[o];
        (s[o] = Lr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u);
        }),
            this.resolveNoneKeyframes();
    }
}
function Ic(e) {
    return typeof e == "function";
}
let Gi;
function Fx() {
    Gi = void 0;
}
const kt = {
        now: () => (
            Gi === void 0 &&
            kt.set(
                me.isProcessing || Q1.useManualTiming
                    ? me.timestamp
                    : performance.now(),
            ),
                Gi
        ),
        set: (e) => {
            (Gi = e), queueMicrotask(Fx);
        },
    },
    Hd = (e, t) =>
        t === "zIndex"
            ? !1
            : !!(
                typeof e == "number" ||
                Array.isArray(e) ||
                (typeof e == "string" &&
                    (dn.test(e) || e === "0") &&
                    !e.startsWith("url("))
            );
function Ix(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ox(e, t, n, r) {
    const s = e[0];
    if (s === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const i = e[e.length - 1],
        o = Hd(s, t),
        a = Hd(i, t);
    return !o || !a ? !1 : Ix(e) || ((n === "spring" || Ic(n)) && r);
}
const Vx = 40;
class sy {
    constructor({
                    autoplay: t = !0,
                    delay: n = 0,
                    type: r = "keyframes",
                    repeat: s = 0,
                    repeatDelay: i = 0,
                    repeatType: o = "loop",
                    ...a
                }) {
        (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = kt.now()),
            (this.options = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: s,
                repeatDelay: i,
                repeatType: o,
                ...a,
            }),
            this.updateFinishedPromise();
    }
    calcStartTime() {
        return this.resolvedAt
            ? this.resolvedAt - this.createdAt > Vx
                ? this.resolvedAt
                : this.createdAt
            : this.createdAt;
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && px(), this._resolved;
    }
    onKeyframesResolved(t, n) {
        (this.resolvedAt = kt.now()), (this.hasAttemptedResolve = !0);
        const {
            name: r,
            type: s,
            velocity: i,
            delay: o,
            onComplete: a,
            onUpdate: l,
            isGenerator: u,
        } = this.options;
        if (!u && !Ox(t, r, s, i))
            if (o) this.options.duration = 0;
            else {
                l == null || l(ra(t, this.options, n)),
                a == null || a(),
                    this.resolveFinishedPromise();
                return;
            }
        const f = this.initPlayback(t, n);
        f !== !1 &&
        ((this._resolved = { keyframes: t, finalKeyframe: n, ...f }),
            this.onPostResolved());
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n);
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
        });
    }
}
function iy(e, t) {
    return t ? e * (1e3 / t) : 0;
}
const jx = 5;
function oy(e, t, n) {
    const r = Math.max(t - jx, 0);
    return iy(n - e(r), t - r);
}
const $a = 0.001,
    bx = 0.01,
    Bx = 10,
    $x = 0.05,
    zx = 1;
function Ux({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: n = 0,
                mass: r = 1,
            }) {
    let s,
        i,
        o = 1 - t;
    (o = fn($x, zx, o)),
        (e = fn(bx, Bx, Ot(e))),
        o < 1
            ? ((s = (u) => {
                const f = u * o,
                    c = f * e,
                    d = f - n,
                    g = ou(u, o),
                    y = Math.exp(-c);
                return $a - (d / g) * y;
            }),
                (i = (u) => {
                    const c = u * o * e,
                        d = c * n + n,
                        g = Math.pow(o, 2) * Math.pow(u, 2) * e,
                        y = Math.exp(-c),
                        v = ou(Math.pow(u, 2), o);
                    return ((-s(u) + $a > 0 ? -1 : 1) * ((d - g) * y)) / v;
                }))
            : ((s = (u) => {
                const f = Math.exp(-u * e),
                    c = (u - n) * e + 1;
                return -$a + f * c;
            }),
                (i = (u) => {
                    const f = Math.exp(-u * e),
                        c = (n - u) * (e * e);
                    return f * c;
                }));
    const a = 5 / e,
        l = Hx(s, i, a);
    if (((e = It(e)), isNaN(l)))
        return { stiffness: 100, damping: 10, duration: e };
    {
        const u = Math.pow(l, 2) * r;
        return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
    }
}
const Wx = 12;
function Hx(e, t, n) {
    let r = n;
    for (let s = 1; s < Wx; s++) r = r - e(r) / t(r);
    return r;
}
function ou(e, t) {
    return e * Math.sqrt(1 - t * t);
}
const Kx = ["duration", "bounce"],
    Xx = ["stiffness", "damping", "mass"];
function Kd(e, t) {
    return t.some((n) => e[n] !== void 0);
}
function Gx(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e,
    };
    if (!Kd(e, Xx) && Kd(e, Kx)) {
        const n = Ux(e);
        (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
    }
    return t;
}
function ay({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const s = e[0],
        i = e[e.length - 1],
        o = { done: !1, value: s },
        {
            stiffness: a,
            damping: l,
            mass: u,
            duration: f,
            velocity: c,
            isResolvedFromDuration: d,
        } = Gx({ ...r, velocity: -Ot(r.velocity || 0) }),
        g = c || 0,
        y = l / (2 * Math.sqrt(a * u)),
        v = i - s,
        x = Ot(Math.sqrt(a / u)),
        m = Math.abs(v) < 5;
    n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
    let h;
    if (y < 1) {
        const p = ou(x, y);
        h = (w) => {
            const S = Math.exp(-y * x * w);
            return (
                i - S * (((g + y * x * v) / p) * Math.sin(p * w) + v * Math.cos(p * w))
            );
        };
    } else if (y === 1) h = (p) => i - Math.exp(-x * p) * (v + (g + x * v) * p);
    else {
        const p = x * Math.sqrt(y * y - 1);
        h = (w) => {
            const S = Math.exp(-y * x * w),
                _ = Math.min(p * w, 300);
            return (
                i - (S * ((g + y * x * v) * Math.sinh(_) + p * v * Math.cosh(_))) / p
            );
        };
    }
    return {
        calculatedDuration: (d && f) || null,
        next: (p) => {
            const w = h(p);
            if (d) o.done = p >= f;
            else {
                let S = 0;
                y < 1 && (S = p === 0 ? It(g) : oy(h, p, w));
                const _ = Math.abs(S) <= n,
                    P = Math.abs(i - w) <= t;
                o.done = _ && P;
            }
            return (o.value = o.done ? i : w), o;
        },
    };
}
function Xd({
                keyframes: e,
                velocity: t = 0,
                power: n = 0.8,
                timeConstant: r = 325,
                bounceDamping: s = 10,
                bounceStiffness: i = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = 0.5,
                restSpeed: f,
            }) {
    const c = e[0],
        d = { done: !1, value: c },
        g = (k) => (a !== void 0 && k < a) || (l !== void 0 && k > l),
        y = (k) =>
            a === void 0
                ? l
                : l === void 0 || Math.abs(a - k) < Math.abs(l - k)
                    ? a
                    : l;
    let v = n * t;
    const x = c + v,
        m = o === void 0 ? x : o(x);
    m !== x && (v = m - c);
    const h = (k) => -v * Math.exp(-k / r),
        p = (k) => m + h(k),
        w = (k) => {
            const N = h(k),
                R = p(k);
            (d.done = Math.abs(N) <= u), (d.value = d.done ? m : R);
        };
    let S, _;
    const P = (k) => {
        g(d.value) &&
        ((S = k),
            (_ = ay({
                keyframes: [d.value, y(d.value)],
                velocity: oy(p, k, d.value),
                damping: s,
                stiffness: i,
                restDelta: u,
                restSpeed: f,
            })));
    };
    return (
        P(0),
            {
                calculatedDuration: null,
                next: (k) => {
                    let N = !1;
                    return (
                        !_ && S === void 0 && ((N = !0), w(k), P(k)),
                            S !== void 0 && k >= S ? _.next(k - S) : (!N && w(k), d)
                    );
                },
            }
    );
}
const Qx = ei(0.42, 0, 1, 1),
    Yx = ei(0, 0, 0.58, 1),
    ly = ei(0.42, 0, 0.58, 1),
    Jx = (e) => Array.isArray(e) && typeof e[0] != "number",
    Oc = (e) => Array.isArray(e) && typeof e[0] == "number",
    Gd = {
        linear: Ee,
        easeIn: Qx,
        easeInOut: ly,
        easeOut: Yx,
        circIn: Ac,
        circInOut: $g,
        circOut: Bg,
        backIn: Tc,
        backInOut: jg,
        backOut: Vg,
        anticipate: bg,
    },
    Qd = (e) => {
        if (Oc(e)) {
            tu(e.length === 4);
            const [t, n, r, s] = e;
            return ei(t, n, r, s);
        } else if (typeof e == "string") return tu(Gd[e] !== void 0), Gd[e];
        return e;
    },
    qx = (e, t) => (n) => t(e(n)),
    Vt = (...e) => e.reduce(qx),
    Nr = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r;
    },
    J = (e, t, n) => e + (t - e) * n;
function za(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
            n < 1 / 6
                ? e + (t - e) * 6 * n
                : n < 1 / 2
                    ? t
                    : n < 2 / 3
                        ? e + (t - e) * (2 / 3 - n) * 6
                        : e
    );
}
function Zx({ hue: e, saturation: t, lightness: n, alpha: r }) {
    (e /= 360), (t /= 100), (n /= 100);
    let s = 0,
        i = 0,
        o = 0;
    if (!t) s = i = o = n;
    else {
        const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        (s = za(l, a, e + 1 / 3)), (i = za(l, a, e)), (o = za(l, a, e - 1 / 3));
    }
    return {
        red: Math.round(s * 255),
        green: Math.round(i * 255),
        blue: Math.round(o * 255),
        alpha: r,
    };
}
function Ao(e, t) {
    return (n) => (n > 0 ? t : e);
}
const Ua = (e, t, n) => {
        const r = e * e,
            s = n * (t * t - r) + r;
        return s < 0 ? 0 : Math.sqrt(s);
    },
    eS = [su, Rn, lr],
    tS = (e) => eS.find((t) => t.test(e));
function Yd(e) {
    const t = tS(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === lr && (n = Zx(n)), n;
}
const Jd = (e, t) => {
        const n = Yd(e),
            r = Yd(t);
        if (!n || !r) return Ao(e, t);
        const s = { ...n };
        return (i) => (
            (s.red = Ua(n.red, r.red, i)),
                (s.green = Ua(n.green, r.green, i)),
                (s.blue = Ua(n.blue, r.blue, i)),
                (s.alpha = J(n.alpha, r.alpha, i)),
                Rn.transform(s)
        );
    },
    au = new Set(["none", "hidden"]);
function nS(e, t) {
    return au.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function rS(e, t) {
    return (n) => J(e, t, n);
}
function Vc(e) {
    return typeof e == "number"
        ? rS
        : typeof e == "string"
            ? Rc(e)
                ? Ao
                : Ce.test(e)
                    ? Jd
                    : oS
            : Array.isArray(e)
                ? uy
                : typeof e == "object"
                    ? Ce.test(e)
                        ? Jd
                        : sS
                    : Ao;
}
function uy(e, t) {
    const n = [...e],
        r = n.length,
        s = e.map((i, o) => Vc(i)(i, t[o]));
    return (i) => {
        for (let o = 0; o < r; o++) n[o] = s[o](i);
        return n;
    };
}
function sS(e, t) {
    const n = { ...e, ...t },
        r = {};
    for (const s in n)
        e[s] !== void 0 && t[s] !== void 0 && (r[s] = Vc(e[s])(e[s], t[s]));
    return (s) => {
        for (const i in r) n[i] = r[i](s);
        return n;
    };
}
function iS(e, t) {
    var n;
    const r = [],
        s = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < t.values.length; i++) {
        const o = t.types[i],
            a = e.indexes[o][s[o]],
            l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        (r[i] = l), s[o]++;
    }
    return r;
}
const oS = (e, t) => {
    const n = dn.createTransformer(t),
        r = Ws(e),
        s = Ws(t);
    return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
        ? (au.has(e) && !s.values.length) || (au.has(t) && !r.values.length)
            ? nS(e, t)
            : Vt(uy(iS(r, s), s.values), n)
        : Ao(e, t);
};
function cy(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number"
        ? J(e, t, n)
        : Vc(e)(e, t);
}
function aS(e, t, n) {
    const r = [],
        s = n || cy,
        i = e.length - 1;
    for (let o = 0; o < i; o++) {
        let a = s(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Ee : t;
            a = Vt(l, a);
        }
        r.push(a);
    }
    return r;
}
function lS(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
    const i = e.length;
    if ((tu(i === t.length), i === 1)) return () => t[0];
    if (i === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const o = aS(t, r, s),
        a = o.length,
        l = (u) => {
            let f = 0;
            if (a > 1) for (; f < e.length - 2 && !(u < e[f + 1]); f++);
            const c = Nr(e[f], e[f + 1], u);
            return o[f](c);
        };
    return n ? (u) => l(fn(e[0], e[i - 1], u)) : l;
}
function uS(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const s = Nr(0, t, r);
        e.push(J(n, 1, s));
    }
}
function cS(e) {
    const t = [0];
    return uS(t, e.length - 1), t;
}
function fS(e, t) {
    return e.map((n) => n * t);
}
function dS(e, t) {
    return e.map(() => t || ly).splice(0, e.length - 1);
}
function Ro({
                duration: e = 300,
                keyframes: t,
                times: n,
                ease: r = "easeInOut",
            }) {
    const s = Jx(r) ? r.map(Qd) : Qd(r),
        i = { done: !1, value: t[0] },
        o = fS(n && n.length === t.length ? n : cS(t), e),
        a = lS(o, t, { ease: Array.isArray(s) ? s : dS(t, s) });
    return {
        calculatedDuration: e,
        next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
    };
}
const qd = 2e4;
function hS(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < qd; ) (t += n), (r = e.next(t));
    return t >= qd ? 1 / 0 : t;
}
const pS = (e) => {
        const t = ({ timestamp: n }) => e(n);
        return {
            start: () => W.update(t, !0),
            stop: () => cn(t),
            now: () => (me.isProcessing ? me.timestamp : kt.now()),
        };
    },
    mS = { decay: Xd, inertia: Xd, tween: Ro, keyframes: Ro, spring: ay },
    gS = (e) => e / 100;
class jc extends sy {
    constructor(t) {
        super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
                if (
                    (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
                )
                    return;
                this.teardown();
                const { onStop: l } = this.options;
                l && l();
            });
        const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
            o = (s == null ? void 0 : s.KeyframeResolver) || Mc,
            a = (l, u) => this.onKeyframesResolved(l, u);
        (this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve();
    }
    initPlayback(t) {
        const {
                type: n = "keyframes",
                repeat: r = 0,
                repeatDelay: s = 0,
                repeatType: i,
                velocity: o = 0,
            } = this.options,
            a = Ic(n) ? n : mS[n] || Ro;
        let l, u;
        a !== Ro &&
        typeof t[0] != "number" &&
        ((l = Vt(gS, cy(t[0], t[1]))), (t = [0, 100]));
        const f = a({ ...this.options, keyframes: t });
        i === "mirror" &&
        (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
        f.calculatedDuration === null && (f.calculatedDuration = hS(f));
        const { calculatedDuration: c } = f,
            d = c + s,
            g = d * (r + 1) - s;
        return {
            generator: f,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: g,
        };
    }
    onPostResolved() {
        const { autoplay: t = !0 } = this.options;
        this.play(),
            this.pendingPlayState === "paused" || !t
                ? this.pause()
                : (this.state = this.pendingPlayState);
    }
    tick(t, n = !1) {
        const { resolved: r } = this;
        if (!r) {
            const { keyframes: k } = this.options;
            return { done: !0, value: k[k.length - 1] };
        }
        const {
            finalKeyframe: s,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: f,
            resolvedDuration: c,
        } = r;
        if (this.startTime === null) return i.next(0);
        const {
            delay: d,
            repeat: g,
            repeatType: y,
            repeatDelay: v,
            onUpdate: x,
        } = this.options;
        this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
            (this.startTime = Math.min(t - f / this.speed, this.startTime)),
            n
                ? (this.currentTime = t)
                : this.holdTime !== null
                    ? (this.currentTime = this.holdTime)
                    : (this.currentTime = Math.round(t - this.startTime) * this.speed);
        const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            h = this.speed >= 0 ? m < 0 : m > f;
        (this.currentTime = Math.max(m, 0)),
        this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = f);
        let p = this.currentTime,
            w = i;
        if (g) {
            const k = Math.min(this.currentTime, f) / c;
            let N = Math.floor(k),
                R = k % 1;
            !R && k >= 1 && (R = 1),
            R === 1 && N--,
                (N = Math.min(N, g + 1)),
            !!(N % 2) &&
            (y === "reverse"
                ? ((R = 1 - R), v && (R -= v / c))
                : y === "mirror" && (w = o)),
                (p = fn(0, 1, R) * c);
        }
        const S = h ? { done: !1, value: l[0] } : w.next(p);
        a && (S.value = a(S.value));
        let { done: _ } = S;
        !h &&
        u !== null &&
        (_ = this.speed >= 0 ? this.currentTime >= f : this.currentTime <= 0);
        const P =
            this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && _));
        return (
            P && s !== void 0 && (S.value = ra(l, this.options, s)),
            x && x(S.value),
            P && this.finish(),
                S
        );
    }
    get duration() {
        const { resolved: t } = this;
        return t ? Ot(t.calculatedDuration) : 0;
    }
    get time() {
        return Ot(this.currentTime);
    }
    set time(t) {
        (t = It(t)),
            (this.currentTime = t),
            this.holdTime !== null || this.speed === 0
                ? (this.holdTime = t)
                : this.driver && (this.startTime = this.driver.now() - t / this.speed);
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        (this.playbackSpeed = t), n && (this.time = Ot(this.currentTime));
    }
    play() {
        if (
            (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
        ) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped) return;
        const { driver: t = pS, onPlay: n, startTime: r } = this.options;
        this.driver || (this.driver = t((i) => this.tick(i))), n && n();
        const s = this.driver.now();
        this.holdTime !== null
            ? (this.startTime = s - this.holdTime)
            : this.startTime
                ? this.state === "finished" && (this.startTime = s)
                : (this.startTime = r ?? this.calcStartTime()),
        this.state === "finished" && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        (this.state = "paused"),
            (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
    }
    complete() {
        this.state !== "running" && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
    }
    finish() {
        this.teardown(), (this.state = "finished");
        const { onComplete: t } = this.options;
        t && t();
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
    }
    teardown() {
        (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
    }
    stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(t) {
        return (this.startTime = 0), this.tick(t, !0);
    }
}
const yS = new Set(["opacity", "clipPath", "filter", "transform"]),
    vS = 10,
    wS = (e, t) => {
        let n = "";
        const r = Math.max(Math.round(t / vS), 2);
        for (let s = 0; s < r; s++) n += e(Nr(0, r - 1, s)) + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
    };
function bc(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
}
const xS = { linearEasing: void 0 };
function SS(e, t) {
    const n = bc(e);
    return () => {
        var r;
        return (r = xS[t]) !== null && r !== void 0 ? r : n();
    };
}
const Mo = SS(() => {
    try {
        document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
        return !1;
    }
    return !0;
}, "linearEasing");
function fy(e) {
    return !!(
        (typeof e == "function" && Mo()) ||
        !e ||
        (typeof e == "string" && (e in lu || Mo())) ||
        Oc(e) ||
        (Array.isArray(e) && e.every(fy))
    );
}
const rs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    lu = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: rs([0, 0.65, 0.55, 1]),
        circOut: rs([0.55, 0, 1, 0.45]),
        backIn: rs([0.31, 0.01, 0.66, -0.59]),
        backOut: rs([0.33, 1.53, 0.69, 0.99]),
    };
function dy(e, t) {
    if (e)
        return typeof e == "function" && Mo()
            ? wS(e, t)
            : Oc(e)
                ? rs(e)
                : Array.isArray(e)
                    ? e.map((n) => dy(n, t) || lu.easeOut)
                    : lu[e];
}
function _S(
    e,
    t,
    n,
    {
        delay: r = 0,
        duration: s = 300,
        repeat: i = 0,
        repeatType: o = "loop",
        ease: a,
        times: l,
    } = {},
) {
    const u = { [t]: n };
    l && (u.offset = l);
    const f = dy(a, s);
    return (
        Array.isArray(f) && (u.easing = f),
            e.animate(u, {
                delay: r,
                duration: s,
                easing: Array.isArray(f) ? "linear" : f,
                fill: "both",
                iterations: i + 1,
                direction: o === "reverse" ? "alternate" : "normal",
            })
    );
}
function Zd(e, t) {
    (e.timeline = t), (e.onfinish = null);
}
const CS = bc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Lo = 10,
    PS = 2e4;
function kS(e) {
    return Ic(e.type) || e.type === "spring" || !fy(e.ease);
}
function ES(e, t) {
    const n = new jc({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0,
    });
    let r = { done: !1, value: e[0] };
    const s = [];
    let i = 0;
    for (; !r.done && i < PS; ) (r = n.sample(i)), s.push(r.value), (i += Lo);
    return { times: void 0, keyframes: s, duration: i - Lo, ease: "linear" };
}
const hy = { anticipate: bg, backInOut: jg, circInOut: $g };
function TS(e) {
    return e in hy;
}
class eh extends sy {
    constructor(t) {
        super(t);
        const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
        (this.resolver = new ry(
            i,
            (o, a) => this.onKeyframesResolved(o, a),
            n,
            r,
            s,
        )),
            this.resolver.scheduleResolve();
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: s = 300,
            times: i,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: f,
        } = this.options;
        if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
        if (
            (typeof o == "string" && Mo() && TS(o) && (o = hy[o]), kS(this.options))
        ) {
            const {
                    onComplete: d,
                    onUpdate: g,
                    motionValue: y,
                    element: v,
                    ...x
                } = this.options,
                m = ES(t, x);
            (t = m.keyframes),
            t.length === 1 && (t[1] = t[0]),
                (s = m.duration),
                (i = m.times),
                (o = m.ease),
                (a = "keyframes");
        }
        const c = _S(l.owner.current, u, t, {
            ...this.options,
            duration: s,
            times: i,
            ease: o,
        });
        return (
            (c.startTime = f ?? this.calcStartTime()),
                this.pendingTimeline
                    ? (Zd(c, this.pendingTimeline), (this.pendingTimeline = void 0))
                    : (c.onfinish = () => {
                        const { onComplete: d } = this.options;
                        l.set(ra(t, this.options, n)),
                        d && d(),
                            this.cancel(),
                            this.resolveFinishedPromise();
                    }),
                { animation: c, duration: s, times: i, type: a, ease: o, keyframes: t }
        );
    }
    get duration() {
        const { resolved: t } = this;
        if (!t) return 0;
        const { duration: n } = t;
        return Ot(n);
    }
    get time() {
        const { resolved: t } = this;
        if (!t) return 0;
        const { animation: n } = t;
        return Ot(n.currentTime || 0);
    }
    set time(t) {
        const { resolved: n } = this;
        if (!n) return;
        const { animation: r } = n;
        r.currentTime = It(t);
    }
    get speed() {
        const { resolved: t } = this;
        if (!t) return 1;
        const { animation: n } = t;
        return n.playbackRate;
    }
    set speed(t) {
        const { resolved: n } = this;
        if (!n) return;
        const { animation: r } = n;
        r.playbackRate = t;
    }
    get state() {
        const { resolved: t } = this;
        if (!t) return "idle";
        const { animation: n } = t;
        return n.playState;
    }
    get startTime() {
        const { resolved: t } = this;
        if (!t) return null;
        const { animation: n } = t;
        return n.startTime;
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const { resolved: n } = this;
            if (!n) return Ee;
            const { animation: r } = n;
            Zd(r, t);
        }
        return Ee;
    }
    play() {
        if (this.isStopped) return;
        const { resolved: t } = this;
        if (!t) return;
        const { animation: n } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play();
    }
    pause() {
        const { resolved: t } = this;
        if (!t) return;
        const { animation: n } = t;
        n.pause();
    }
    stop() {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
            return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const { resolved: t } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: s,
            type: i,
            ease: o,
            times: a,
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                    motionValue: u,
                    onUpdate: f,
                    onComplete: c,
                    element: d,
                    ...g
                } = this.options,
                y = new jc({
                    ...g,
                    keyframes: r,
                    duration: s,
                    type: i,
                    ease: o,
                    times: a,
                    isGenerator: !0,
                }),
                v = It(this.time);
            u.setWithVelocity(y.sample(v - Lo).value, y.sample(v).value, Lo);
        }
        const { onStop: l } = this.options;
        l && l(), this.cancel();
    }
    complete() {
        const { resolved: t } = this;
        t && t.animation.finish();
    }
    cancel() {
        const { resolved: t } = this;
        t && t.animation.cancel();
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: s,
            repeatType: i,
            damping: o,
            type: a,
        } = t;
        return (
            CS() &&
            r &&
            yS.has(r) &&
            n &&
            n.owner &&
            n.owner.current instanceof HTMLElement &&
            !n.owner.getProps().onUpdate &&
            !s &&
            i !== "mirror" &&
            o !== 0 &&
            a !== "inertia"
        );
    }
}
const AS = bc(() => window.ScrollTimeline !== void 0);
class RS {
    constructor(t) {
        (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n);
    }
    getAll(t) {
        return this.animations[0][t];
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
    }
    attachTimeline(t, n) {
        const r = this.animations.map((s) =>
            AS() && s.attachTimeline ? s.attachTimeline(t) : n(s),
        );
        return () => {
            r.forEach((s, i) => {
                s && s(), this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(t) {
        this.setAll("time", t);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(t) {
        this.setAll("speed", t);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t;
    }
    runAll(t) {
        this.animations.forEach((n) => n[t]());
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
function MS({
                when: e,
                delay: t,
                delayChildren: n,
                staggerChildren: r,
                staggerDirection: s,
                repeat: i,
                repeatType: o,
                repeatDelay: a,
                from: l,
                elapsed: u,
                ...f
            }) {
    return !!Object.keys(f).length;
}
const Bc =
        (e, t, n, r = {}, s, i) =>
            (o) => {
                const a = Ec(r, e) || {},
                    l = a.delay || r.delay || 0;
                let { elapsed: u = 0 } = r;
                u = u - It(l);
                let f = {
                    keyframes: Array.isArray(n) ? n : [null, n],
                    ease: "easeOut",
                    velocity: t.getVelocity(),
                    ...a,
                    delay: -u,
                    onUpdate: (d) => {
                        t.set(d), a.onUpdate && a.onUpdate(d);
                    },
                    onComplete: () => {
                        o(), a.onComplete && a.onComplete();
                    },
                    name: e,
                    motionValue: t,
                    element: i ? void 0 : s,
                };
                MS(a) || (f = { ...f, ...G1(e, f) }),
                f.duration && (f.duration = It(f.duration)),
                f.repeatDelay && (f.repeatDelay = It(f.repeatDelay)),
                f.from !== void 0 && (f.keyframes[0] = f.from);
                let c = !1;
                if (
                    ((f.type === !1 || (f.duration === 0 && !f.repeatDelay)) &&
                    ((f.duration = 0), f.delay === 0 && (c = !0)),
                    c && !i && t.get() !== void 0)
                ) {
                    const d = ra(f.keyframes, a);
                    if (d !== void 0)
                        return (
                            W.update(() => {
                                f.onUpdate(d), f.onComplete();
                            }),
                                new RS([])
                        );
                }
                return !i && eh.supports(f) ? new eh(f) : new jc(f);
            },
    LS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
    NS = (e) => (eu(e) ? e[e.length - 1] || 0 : e);
function $c(e, t) {
    e.indexOf(t) === -1 && e.push(t);
}
function zc(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
}
class Uc {
    constructor() {
        this.subscriptions = [];
    }
    add(t) {
        return $c(this.subscriptions, t), () => zc(this.subscriptions, t);
    }
    notify(t, n, r) {
        const s = this.subscriptions.length;
        if (s)
            if (s === 1) this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < s; i++) {
                    const o = this.subscriptions[i];
                    o && o(t, n, r);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
const th = 30,
    DS = (e) => !isNaN(parseFloat(e));
class FS {
    constructor(t, n = {}) {
        (this.version = "11.11.11"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (r, s = !0) => {
                const i = kt.now();
                this.updatedAt !== i && this.setPrevFrameValue(),
                    (this.prev = this.current),
                    this.setCurrent(r),
                this.current !== this.prev &&
                this.events.change &&
                this.events.change.notify(this.current),
                s &&
                this.events.renderRequest &&
                this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = n.owner);
    }
    setCurrent(t) {
        (this.current = t),
            (this.updatedAt = kt.now()),
        this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = DS(this.current));
    }
    setPrevFrameValue(t = this.current) {
        (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(t) {
        return this.on("change", t);
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Uc());
        const r = this.events[t].add(n);
        return t === "change"
            ? () => {
                r(),
                    W.read(() => {
                        this.events.change.getSize() || this.stop();
                    });
            }
            : r;
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
        (this.passiveEffect = t), (this.stopPassiveEffect = n);
    }
    set(t, n = !0) {
        !n || !this.passiveEffect
            ? this.updateAndNotify(t, n)
            : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
        this.set(n),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - r);
    }
    jump(t, n = !0) {
        this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
        return this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        const t = kt.now();
        if (
            !this.canTrackVelocity ||
            this.prevFrameValue === void 0 ||
            t - this.updatedAt > th
        )
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, th);
        return iy(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    start(t) {
        return (
            this.stop(),
                new Promise((n) => {
                    (this.hasAnimated = !0),
                        (this.animation = t(n)),
                    this.events.animationStart && this.events.animationStart.notify();
                }).then(() => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                        this.clearAnimation();
                })
        );
    }
    stop() {
        this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation();
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        this.clearListeners(),
            this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
}
function Hs(e, t) {
    return new FS(e, t);
}
function IS(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Hs(n));
}
function OS(e, t) {
    const n = na(e, t);
    let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
    i = { ...i, ...r };
    for (const o in i) {
        const a = NS(i[o]);
        IS(e, o, a);
    }
}
const Wc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    VS = "framerAppearId",
    py = "data-" + Wc(VS);
function my(e) {
    return e.props[py];
}
const ke = (e) => !!(e && e.getVelocity);
function jS(e) {
    return !!(ke(e) && e.add);
}
function uu(e, t) {
    const n = e.getValue("willChange");
    if (jS(n)) return n.add(t);
}
function bS({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return (t[n] = !1), r;
}
function gy(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
    var i;
    let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
    r && (o = r);
    const u = [],
        f = s && e.animationState && e.animationState.getState()[s];
    for (const c in l) {
        const d = e.getValue(
                c,
                (i = e.latestValues[c]) !== null && i !== void 0 ? i : null,
            ),
            g = l[c];
        if (g === void 0 || (f && bS(f, c))) continue;
        const y = { delay: n, ...Ec(o || {}, c) };
        let v = !1;
        if (window.MotionHandoffAnimation) {
            const m = my(e);
            if (m) {
                const h = window.MotionHandoffAnimation(m, c, W);
                h !== null && ((y.startTime = h), (v = !0));
            }
        }
        uu(e, c),
            d.start(
                Bc(c, d, g, e.shouldReduceMotion && zn.has(c) ? { type: !1 } : y, e, v),
            );
        const x = d.animation;
        x && u.push(x);
    }
    return (
        a &&
        Promise.all(u).then(() => {
            W.update(() => {
                a && OS(e, a);
            });
        }),
            u
    );
}
function cu(e, t, n = {}) {
    var r;
    const s = na(
        e,
        t,
        n.type === "exit"
            ? (r = e.presenceContext) === null || r === void 0
                ? void 0
                : r.custom
            : void 0,
    );
    let { transition: i = e.getDefaultTransition() || {} } = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(gy(e, s, n)) : () => Promise.resolve(),
        a =
            e.variantChildren && e.variantChildren.size
                ? (u = 0) => {
                    const {
                        delayChildren: f = 0,
                        staggerChildren: c,
                        staggerDirection: d,
                    } = i;
                    return BS(e, t, f + u, c, d, n);
                }
                : () => Promise.resolve(),
        { when: l } = i;
    if (l) {
        const [u, f] = l === "beforeChildren" ? [o, a] : [a, o];
        return u().then(() => f());
    } else return Promise.all([o(), a(n.delay)]);
}
function BS(e, t, n = 0, r = 0, s = 1, i) {
    const o = [],
        a = (e.variantChildren.size - 1) * r,
        l = s === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return (
        Array.from(e.variantChildren)
            .sort($S)
            .forEach((u, f) => {
                u.notify("AnimationStart", t),
                    o.push(
                        cu(u, t, { ...i, delay: n + l(f) }).then(() =>
                            u.notify("AnimationComplete", t),
                        ),
                    );
            }),
            Promise.all(o)
    );
}
function $S(e, t) {
    return e.sortNodePosition(t);
}
function zS(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const s = t.map((i) => cu(e, i, n));
        r = Promise.all(s);
    } else if (typeof t == "string") r = cu(e, t, n);
    else {
        const s = typeof t == "function" ? na(e, t, n.custom) : t;
        r = Promise.all(gy(e, s, n));
    }
    return r.then(() => {
        e.notify("AnimationComplete", t);
    });
}
const US = kc.length;
function yy(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? yy(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
    }
    const t = {};
    for (let n = 0; n < US; n++) {
        const r = kc[n],
            s = e.props[r];
        (zs(s) || s === !1) && (t[r] = s);
    }
    return t;
}
const WS = [...Pc].reverse(),
    HS = Pc.length;
function KS(e) {
    return (t) =>
        Promise.all(t.map(({ animation: n, options: r }) => zS(e, n, r)));
}
function XS(e) {
    let t = KS(e),
        n = nh(),
        r = !0;
    const s = (l) => (u, f) => {
        var c;
        const d = na(
            e,
            f,
            l === "exit"
                ? (c = e.presenceContext) === null || c === void 0
                    ? void 0
                    : c.custom
                : void 0,
        );
        if (d) {
            const { transition: g, transitionEnd: y, ...v } = d;
            u = { ...u, ...v, ...y };
        }
        return u;
    };
    function i(l) {
        t = l(e);
    }
    function o(l) {
        const { props: u } = e,
            f = yy(e.parent) || {},
            c = [],
            d = new Set();
        let g = {},
            y = 1 / 0;
        for (let x = 0; x < HS; x++) {
            const m = WS[x],
                h = n[m],
                p = u[m] !== void 0 ? u[m] : f[m],
                w = zs(p),
                S = m === l ? h.isActive : null;
            S === !1 && (y = x);
            let _ = p === f[m] && p !== u[m] && w;
            if (
                (_ && r && e.manuallyAnimateOnMount && (_ = !1),
                    (h.protectedKeys = { ...g }),
                (!h.isActive && S === null) ||
                (!p && !h.prevProp) ||
                ta(p) ||
                typeof p == "boolean")
            )
                continue;
            const P = GS(h.prevProp, p);
            let k = P || (m === l && h.isActive && !_ && w) || (x > y && w),
                N = !1;
            const R = Array.isArray(p) ? p : [p];
            let F = R.reduce(s(m), {});
            S === !1 && (F = {});
            const { prevResolvedValues: Ae = {} } = h,
                rt = { ...Ae, ...F },
                yn = (ie) => {
                    (k = !0),
                    d.has(ie) && ((N = !0), d.delete(ie)),
                        (h.needsAnimating[ie] = !0);
                    const A = e.getValue(ie);
                    A && (A.liveStyle = !1);
                };
            for (const ie in rt) {
                const A = F[ie],
                    I = Ae[ie];
                if (g.hasOwnProperty(ie)) continue;
                let O = !1;
                eu(A) && eu(I) ? (O = !Ng(A, I)) : (O = A !== I),
                    O
                        ? A != null
                            ? yn(ie)
                            : d.add(ie)
                        : A !== void 0 && d.has(ie)
                            ? yn(ie)
                            : (h.protectedKeys[ie] = !0);
            }
            (h.prevProp = p),
                (h.prevResolvedValues = F),
            h.isActive && (g = { ...g, ...F }),
            r && e.blockInitialAnimation && (k = !1),
            k &&
            (!(_ && P) || N) &&
            c.push(...R.map((ie) => ({ animation: ie, options: { type: m } })));
        }
        if (d.size) {
            const x = {};
            d.forEach((m) => {
                const h = e.getBaseTarget(m),
                    p = e.getValue(m);
                p && (p.liveStyle = !0), (x[m] = h ?? null);
            }),
                c.push({ animation: x });
        }
        let v = !!c.length;
        return (
            r &&
            (u.initial === !1 || u.initial === u.animate) &&
            !e.manuallyAnimateOnMount &&
            (v = !1),
                (r = !1),
                v ? t(c) : Promise.resolve()
        );
    }
    function a(l, u) {
        var f;
        if (n[l].isActive === u) return Promise.resolve();
        (f = e.variantChildren) === null ||
        f === void 0 ||
        f.forEach((d) => {
            var g;
            return (g = d.animationState) === null || g === void 0
                ? void 0
                : g.setActive(l, u);
        }),
            (n[l].isActive = u);
        const c = o(l);
        for (const d in n) n[d].protectedKeys = {};
        return c;
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n,
        reset: () => {
            (n = nh()), (r = !0);
        },
    };
}
function GS(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ng(t, e) : !1;
}
function xn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function nh() {
    return {
        animate: xn(!0),
        whileInView: xn(),
        whileHover: xn(),
        whileTap: xn(),
        whileDrag: xn(),
        whileFocus: xn(),
        exit: xn(),
    };
}
class gn {
    constructor(t) {
        (this.isMounted = !1), (this.node = t);
    }
    update() {}
}
class QS extends gn {
    constructor(t) {
        super(t), t.animationState || (t.animationState = XS(t));
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        ta(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: t } = this.node.getProps(),
            { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this);
    }
}
let YS = 0;
class JS extends gn {
    constructor() {
        super(...arguments), (this.id = YS++);
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const s = this.node.animationState.setActive("exit", !t);
        n && !t && s.then(() => n(this.id));
    }
    mount() {
        const { register: t } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id));
    }
    unmount() {}
}
const qS = { animation: { Feature: QS }, exit: { Feature: JS } },
    vy = (e) =>
        e.pointerType === "mouse"
            ? typeof e.button != "number" || e.button <= 0
            : e.isPrimary !== !1;
function sa(e, t = "page") {
    return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const ZS = (e) => (t) => vy(t) && e(t, sa(t));
function Dt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function jt(e, t, n, r) {
    return Dt(e, t, ZS(n), r);
}
const rh = (e, t) => Math.abs(e - t);
function e_(e, t) {
    const n = rh(e.x, t.x),
        r = rh(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
}
class wy {
    constructor(
        t,
        n,
        { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {},
    ) {
        if (
            ((this.startEvent = null),
                (this.lastMoveEvent = null),
                (this.lastMoveEventInfo = null),
                (this.handlers = {}),
                (this.contextWindow = window),
                (this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    const c = Ha(this.lastMoveEventInfo, this.history),
                        d = this.startEvent !== null,
                        g = e_(c.offset, { x: 0, y: 0 }) >= 3;
                    if (!d && !g) return;
                    const { point: y } = c,
                        { timestamp: v } = me;
                    this.history.push({ ...y, timestamp: v });
                    const { onStart: x, onMove: m } = this.handlers;
                    d ||
                    (x && x(this.lastMoveEvent, c),
                        (this.startEvent = this.lastMoveEvent)),
                    m && m(this.lastMoveEvent, c);
                }),
                (this.handlePointerMove = (c, d) => {
                    (this.lastMoveEvent = c),
                        (this.lastMoveEventInfo = Wa(d, this.transformPagePoint)),
                        W.update(this.updatePoint, !0);
                }),
                (this.handlePointerUp = (c, d) => {
                    this.end();
                    const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
                    if (
                        (this.dragSnapToOrigin && v && v(),
                            !(this.lastMoveEvent && this.lastMoveEventInfo))
                    )
                        return;
                    const x = Ha(
                        c.type === "pointercancel"
                            ? this.lastMoveEventInfo
                            : Wa(d, this.transformPagePoint),
                        this.history,
                    );
                    this.startEvent && g && g(c, x), y && y(c, x);
                }),
                !vy(t))
        )
            return;
        (this.dragSnapToOrigin = i),
            (this.handlers = n),
            (this.transformPagePoint = r),
            (this.contextWindow = s || window);
        const o = sa(t),
            a = Wa(o, this.transformPagePoint),
            { point: l } = a,
            { timestamp: u } = me;
        this.history = [{ ...l, timestamp: u }];
        const { onSessionStart: f } = n;
        f && f(t, Ha(a, this.history)),
            (this.removeListeners = Vt(
                jt(this.contextWindow, "pointermove", this.handlePointerMove),
                jt(this.contextWindow, "pointerup", this.handlePointerUp),
                jt(this.contextWindow, "pointercancel", this.handlePointerUp),
            ));
    }
    updateHandlers(t) {
        this.handlers = t;
    }
    end() {
        this.removeListeners && this.removeListeners(), cn(this.updatePoint);
    }
}
function Wa(e, t) {
    return t ? { point: t(e.point) } : e;
}
function sh(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
function Ha({ point: e }, t) {
    return {
        point: e,
        delta: sh(e, xy(t)),
        offset: sh(e, t_(t)),
        velocity: n_(t, 0.1),
    };
}
function t_(e) {
    return e[0];
}
function xy(e) {
    return e[e.length - 1];
}
function n_(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
        r = null;
    const s = xy(e);
    for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > It(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const i = Ot(s.timestamp - r.timestamp);
    if (i === 0) return { x: 0, y: 0 };
    const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Sy(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null;
        };
        return t === null ? ((t = e), n) : !1;
    };
}
const ih = Sy("dragHorizontal"),
    oh = Sy("dragVertical");
function _y(e) {
    let t = !1;
    if (e === "y") t = oh();
    else if (e === "x") t = ih();
    else {
        const n = ih(),
            r = oh();
        n && r
            ? (t = () => {
                n(), r();
            })
            : (n && n(), r && r());
    }
    return t;
}
function Cy() {
    const e = _y(!0);
    return e ? (e(), !1) : !0;
}
function ur(e) {
    return (
        e &&
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "current")
    );
}
const Py = 1e-4,
    r_ = 1 - Py,
    s_ = 1 + Py,
    ky = 0.01,
    i_ = 0 - ky,
    o_ = 0 + ky;
function Ke(e) {
    return e.max - e.min;
}
function a_(e, t, n) {
    return Math.abs(e - t) <= n;
}
function ah(e, t, n, r = 0.5) {
    (e.origin = r),
        (e.originPoint = J(t.min, t.max, e.origin)),
        (e.scale = Ke(n) / Ke(t)),
        (e.translate = J(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= r_ && e.scale <= s_) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= i_ && e.translate <= o_) || isNaN(e.translate)) &&
    (e.translate = 0);
}
function Ss(e, t, n, r) {
    ah(e.x, t.x, n.x, r ? r.originX : void 0),
        ah(e.y, t.y, n.y, r ? r.originY : void 0);
}
function lh(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + Ke(t));
}
function l_(e, t, n) {
    lh(e.x, t.x, n.x), lh(e.y, t.y, n.y);
}
function uh(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + Ke(t));
}
function _s(e, t, n) {
    uh(e.x, t.x, n.x), uh(e.y, t.y, n.y);
}
function u_(e, { min: t, max: n }, r) {
    return (
        t !== void 0 && e < t
            ? (e = r ? J(t, e, r.min) : Math.max(e, t))
            : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)),
            e
    );
}
function ch(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
    };
}
function c_(e, { top: t, left: n, bottom: r, right: s }) {
    return { x: ch(e.x, n, s), y: ch(e.y, t, r) };
}
function fh(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function f_(e, t) {
    return { x: fh(e.x, t.x), y: fh(e.y, t.y) };
}
function d_(e, t) {
    let n = 0.5;
    const r = Ke(e),
        s = Ke(t);
    return (
        s > r
            ? (n = Nr(t.min, t.max - r, e.min))
            : r > s && (n = Nr(e.min, e.max - s, t.min)),
            fn(0, 1, n)
    );
}
function h_(e, t) {
    const n = {};
    return (
        t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
            n
    );
}
const fu = 0.35;
function p_(e = fu) {
    return (
        e === !1 ? (e = 0) : e === !0 && (e = fu),
            { x: dh(e, "left", "right"), y: dh(e, "top", "bottom") }
    );
}
function dh(e, t, n) {
    return { min: hh(e, t), max: hh(e, n) };
}
function hh(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
}
const ph = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    cr = () => ({ x: ph(), y: ph() }),
    mh = () => ({ min: 0, max: 0 }),
    ne = () => ({ x: mh(), y: mh() });
function Ye(e) {
    return [e("x"), e("y")];
}
function Ey({ top: e, left: t, right: n, bottom: r }) {
    return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function m_({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function g_(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }),
        r = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ka(e) {
    return e === void 0 || e === 1;
}
function du({ scale: e, scaleX: t, scaleY: n }) {
    return !Ka(e) || !Ka(t) || !Ka(n);
}
function Cn(e) {
    return (
        du(e) ||
        Ty(e) ||
        e.z ||
        e.rotate ||
        e.rotateX ||
        e.rotateY ||
        e.skewX ||
        e.skewY
    );
}
function Ty(e) {
    return gh(e.x) || gh(e.y);
}
function gh(e) {
    return e && e !== "0%";
}
function No(e, t, n) {
    const r = e - n,
        s = t * r;
    return n + s;
}
function yh(e, t, n, r, s) {
    return s !== void 0 && (e = No(e, s, r)), No(e, n, r) + t;
}
function hu(e, t = 0, n = 1, r, s) {
    (e.min = yh(e.min, t, n, r, s)), (e.max = yh(e.max, t, n, r, s));
}
function Ay(e, { x: t, y: n }) {
    hu(e.x, t.translate, t.scale, t.originPoint),
        hu(e.y, n.translate, n.scale, n.originPoint);
}
const vh = 0.999999999999,
    wh = 1.0000000000001;
function y_(e, t, n, r = !1) {
    const s = n.length;
    if (!s) return;
    t.x = t.y = 1;
    let i, o;
    for (let a = 0; a < s; a++) {
        (i = n[a]), (o = i.projectionDelta);
        const { visualElement: l } = i.options;
        (l && l.props.style && l.props.style.display === "contents") ||
        (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        dr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
        o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Ay(e, o)),
        r && Cn(i.latestValues) && dr(e, i.latestValues));
    }
    t.x < wh && t.x > vh && (t.x = 1), t.y < wh && t.y > vh && (t.y = 1);
}
function fr(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
}
function xh(e, t, n, r, s = 0.5) {
    const i = J(e.min, e.max, s);
    hu(e, t, n, i, r);
}
function dr(e, t) {
    xh(e.x, t.x, t.scaleX, t.scale, t.originX),
        xh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ry(e, t) {
    return Ey(g_(e.getBoundingClientRect(), t));
}
function v_(e, t, n) {
    const r = Ry(e, n),
        { scroll: s } = t;
    return s && (fr(r.x, s.offset.x), fr(r.y, s.offset.y)), r;
}
const My = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
    w_ = new WeakMap();
class x_ {
    constructor(t) {
        (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ne()),
            (this.visualElement = t);
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const s = (f) => {
                const { dragSnapToOrigin: c } = this.getProps();
                c ? this.pauseAnimation() : this.stopAnimation(),
                n && this.snapToCursor(sa(f, "page").point);
            },
            i = (f, c) => {
                const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
                if (
                    d &&
                    !g &&
                    (this.openGlobalLock && this.openGlobalLock(),
                        (this.openGlobalLock = _y(d)),
                        !this.openGlobalLock)
                )
                    return;
                (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                    Ye((x) => {
                        let m = this.getAxisMotionValue(x).get() || 0;
                        if (Pt.test(m)) {
                            const { projection: h } = this.visualElement;
                            if (h && h.layout) {
                                const p = h.layout.layoutBox[x];
                                p && (m = Ke(p) * (parseFloat(m) / 100));
                            }
                        }
                        this.originPoint[x] = m;
                    }),
                y && W.postRender(() => y(f, c)),
                    uu(this.visualElement, "transform");
                const { animationState: v } = this.visualElement;
                v && v.setActive("whileDrag", !0);
            },
            o = (f, c) => {
                const {
                    dragPropagation: d,
                    dragDirectionLock: g,
                    onDirectionLock: y,
                    onDrag: v,
                } = this.getProps();
                if (!d && !this.openGlobalLock) return;
                const { offset: x } = c;
                if (g && this.currentDirection === null) {
                    (this.currentDirection = S_(x)),
                    this.currentDirection !== null && y && y(this.currentDirection);
                    return;
                }
                this.updateAxis("x", c.point, x),
                    this.updateAxis("y", c.point, x),
                    this.visualElement.render(),
                v && v(f, c);
            },
            a = (f, c) => this.stop(f, c),
            l = () =>
                Ye((f) => {
                    var c;
                    return (
                        this.getAnimationState(f) === "paused" &&
                        ((c = this.getAxisMotionValue(f).animation) === null || c === void 0
                            ? void 0
                            : c.play())
                    );
                }),
            { dragSnapToOrigin: u } = this.getProps();
        this.panSession = new wy(
            t,
            {
                onSessionStart: s,
                onStart: i,
                onMove: o,
                onSessionEnd: a,
                resumeAnimation: l,
            },
            {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: u,
                contextWindow: My(this.visualElement),
            },
        );
    }
    stop(t, n) {
        const r = this.isDragging;
        if ((this.cancel(), !r)) return;
        const { velocity: s } = n;
        this.startAnimation(s);
        const { onDragEnd: i } = this.getProps();
        i && W.postRender(() => i(t, n));
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
            (this.panSession = void 0);
        const { dragPropagation: r } = this.getProps();
        !r &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
        const { drag: s } = this.getProps();
        if (!r || !Ri(t, s, this.currentDirection)) return;
        const i = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints &&
        this.constraints[t] &&
        (o = u_(o, this.constraints[t], this.elastic[t])),
            i.set(o);
    }
    resolveConstraints() {
        var t;
        const { dragConstraints: n, dragElastic: r } = this.getProps(),
            s =
                this.visualElement.projection && !this.visualElement.projection.layout
                    ? this.visualElement.projection.measure(!1)
                    : (t = this.visualElement.projection) === null || t === void 0
                        ? void 0
                        : t.layout,
            i = this.constraints;
        n && ur(n)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : n && s
                ? (this.constraints = c_(s.layoutBox, n))
                : (this.constraints = !1),
            (this.elastic = p_(r)),
        i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ye((o) => {
            this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = h_(s.layoutBox[o], this.constraints[o]));
        });
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
        if (!t || !ur(t)) return !1;
        const r = t.current,
            { projection: s } = this.visualElement;
        if (!s || !s.layout) return !1;
        const i = v_(r, s.root, this.visualElement.getTransformPagePoint());
        let o = f_(s.layout.layoutBox, i);
        if (n) {
            const a = n(m_(o));
            (this.hasMutatedConstraints = !!a), a && (o = Ey(a));
        }
        return o;
    }
    startAnimation(t) {
        const {
                drag: n,
                dragMomentum: r,
                dragElastic: s,
                dragTransition: i,
                dragSnapToOrigin: o,
                onDragTransitionEnd: a,
            } = this.getProps(),
            l = this.constraints || {},
            u = Ye((f) => {
                if (!Ri(f, n, this.currentDirection)) return;
                let c = (l && l[f]) || {};
                o && (c = { min: 0, max: 0 });
                const d = s ? 200 : 1e6,
                    g = s ? 40 : 1e7,
                    y = {
                        type: "inertia",
                        velocity: r ? t[f] : 0,
                        bounceStiffness: d,
                        bounceDamping: g,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...c,
                    };
                return this.startAxisValueAnimation(f, y);
            });
        return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return (
            uu(this.visualElement, t), r.start(Bc(t, r, 0, n, this.visualElement, !1))
        );
    }
    stopAnimation() {
        Ye((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
        Ye((t) => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
                ? void 0
                : n.pause();
        });
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
            ? void 0
            : n.state;
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            s = r[n];
        return (
            s ||
            this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
        );
    }
    snapToCursor(t) {
        Ye((n) => {
            const { drag: r } = this.getProps();
            if (!Ri(n, r, this.currentDirection)) return;
            const { projection: s } = this.visualElement,
                i = this.getAxisMotionValue(n);
            if (s && s.layout) {
                const { min: o, max: a } = s.layout.layoutBox[n];
                i.set(t[n] - J(o, a, 0.5));
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: t, dragConstraints: n } = this.getProps(),
            { projection: r } = this.visualElement;
        if (!ur(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const s = { x: 0, y: 0 };
        Ye((o) => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                s[o] = d_({ min: l, max: l }, this.constraints[o]);
            }
        });
        const { transformTemplate: i } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            Ye((o) => {
                if (!Ri(o, t, null)) return;
                const a = this.getAxisMotionValue(o),
                    { min: l, max: u } = this.constraints[o];
                a.set(J(l, u, s[o]));
            });
    }
    addListeners() {
        if (!this.visualElement.current) return;
        w_.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = jt(t, "pointerdown", (l) => {
                const { drag: u, dragListener: f = !0 } = this.getProps();
                u && f && this.start(l);
            }),
            r = () => {
                const { dragConstraints: l } = this.getProps();
                ur(l) && l.current && (this.constraints = this.resolveRefConstraints());
            },
            { projection: s } = this.visualElement,
            i = s.addEventListener("measure", r);
        s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
            W.read(r);
        const o = Dt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = s.addEventListener(
                "didUpdate",
                ({ delta: l, hasLayoutChanged: u }) => {
                    this.isDragging &&
                    u &&
                    (Ye((f) => {
                        const c = this.getAxisMotionValue(f);
                        c &&
                        ((this.originPoint[f] += l[f].translate),
                            c.set(c.get() + l[f].translate));
                    }),
                        this.visualElement.render());
                },
            );
        return () => {
            o(), n(), i(), a && a();
        };
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: s = !1,
                dragConstraints: i = !1,
                dragElastic: o = fu,
                dragMomentum: a = !0,
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: s,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a,
        };
    }
}
function Ri(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
}
function S_(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class __ extends gn {
    constructor(t) {
        super(t),
            (this.removeGroupControls = Ee),
            (this.removeListeners = Ee),
            (this.controls = new x_(t));
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || Ee);
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners();
    }
}
const Sh = (e) => (t, n) => {
    e && W.postRender(() => e(t, n));
};
class C_ extends gn {
    constructor() {
        super(...arguments), (this.removePointerDownListener = Ee);
    }
    onPointerDown(t) {
        this.session = new wy(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: My(this.node),
        });
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: s,
        } = this.node.getProps();
        return {
            onSessionStart: Sh(t),
            onStart: Sh(n),
            onMove: r,
            onEnd: (i, o) => {
                delete this.session, s && W.postRender(() => s(i, o));
            },
        };
    }
    mount() {
        this.removePointerDownListener = jt(this.node.current, "pointerdown", (t) =>
            this.onPointerDown(t),
        );
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end();
    }
}
const ia = C.createContext(null);
function P_() {
    const e = C.useContext(ia);
    if (e === null) return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e,
        s = C.useId();
    C.useEffect(() => r(s), []);
    const i = C.useCallback(() => n && n(s), [s, n]);
    return !t && n ? [!1, i] : [!0];
}
const Hc = C.createContext({}),
    Ly = C.createContext({}),
    Qi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function _h(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const qr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (D.test(e)) e = parseFloat(e);
                else return e;
            const n = _h(e, t.target.x),
                r = _h(e, t.target.y);
            return `${n}% ${r}%`;
        },
    },
    k_ = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e,
                s = dn.parse(e);
            if (s.length > 5) return r;
            const i = dn.createTransformer(e),
                o = typeof s[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            (s[0 + o] /= a), (s[1 + o] /= l);
            const u = J(a, l, 0.5);
            return (
                typeof s[2 + o] == "number" && (s[2 + o] /= u),
                typeof s[3 + o] == "number" && (s[3 + o] /= u),
                    i(s)
            );
        },
    },
    Do = {};
function E_(e) {
    Object.assign(Do, e);
}
const { schedule: Kc, cancel: Fk } = Dg(queueMicrotask, !1);
class T_ extends C.Component {
    componentDidMount() {
        const {
                visualElement: t,
                layoutGroup: n,
                switchLayoutGroup: r,
                layoutId: s,
            } = this.props,
            { projection: i } = t;
        E_(A_),
        i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
            i.root.didUpdate(),
            i.addEventListener("animationComplete", () => {
                this.safeToRemove();
            }),
            i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
            })),
            (Qi.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(t) {
        const {
                layoutDependency: n,
                visualElement: r,
                drag: s,
                isPresent: i,
            } = this.props,
            o = r.projection;
        return (
            o &&
            ((o.isPresent = i),
                s || t.layoutDependency !== n || n === void 0
                    ? o.willUpdate()
                    : this.safeToRemove(),
            t.isPresent !== i &&
            (i
                ? o.promote()
                : o.relegate() ||
                W.postRender(() => {
                    const a = o.getStack();
                    (!a || !a.members.length) && this.safeToRemove();
                }))),
                null
        );
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t &&
        (t.root.didUpdate(),
            Kc.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
    }
    componentWillUnmount() {
        const {
                visualElement: t,
                layoutGroup: n,
                switchLayoutGroup: r,
            } = this.props,
            { projection: s } = t;
        s &&
        (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        r && r.deregister && r.deregister(s));
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t();
    }
    render() {
        return null;
    }
}
function Ny(e) {
    const [t, n] = P_(),
        r = C.useContext(Hc);
    return T.jsx(T_, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: C.useContext(Ly),
        isPresent: t,
        safeToRemove: n,
    });
}
const A_ = {
        borderRadius: {
            ...qr,
            applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
            ],
        },
        borderTopLeftRadius: qr,
        borderTopRightRadius: qr,
        borderBottomLeftRadius: qr,
        borderBottomRightRadius: qr,
        boxShadow: k_,
    },
    Dy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    R_ = Dy.length,
    Ch = (e) => (typeof e == "string" ? parseFloat(e) : e),
    Ph = (e) => typeof e == "number" || D.test(e);
function M_(e, t, n, r, s, i) {
    s
        ? ((e.opacity = J(0, n.opacity !== void 0 ? n.opacity : 1, L_(r))),
            (e.opacityExit = J(t.opacity !== void 0 ? t.opacity : 1, 0, N_(r))))
        : i &&
        (e.opacity = J(
            t.opacity !== void 0 ? t.opacity : 1,
            n.opacity !== void 0 ? n.opacity : 1,
            r,
        ));
    for (let o = 0; o < R_; o++) {
        const a = `border${Dy[o]}Radius`;
        let l = kh(t, a),
            u = kh(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0),
        u || (u = 0),
            l === 0 || u === 0 || Ph(l) === Ph(u)
                ? ((e[a] = Math.max(J(Ch(l), Ch(u), r), 0)),
                (Pt.test(u) || Pt.test(l)) && (e[a] += "%"))
                : (e[a] = u);
    }
    (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r));
}
function kh(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const L_ = Fy(0, 0.5, Bg),
    N_ = Fy(0.5, 0.95, Ee);
function Fy(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(Nr(e, t, r)));
}
function Eh(e, t) {
    (e.min = t.min), (e.max = t.max);
}
function Qe(e, t) {
    Eh(e.x, t.x), Eh(e.y, t.y);
}
function Th(e, t) {
    (e.translate = t.translate),
        (e.scale = t.scale),
        (e.originPoint = t.originPoint),
        (e.origin = t.origin);
}
function Ah(e, t, n, r, s) {
    return (
        (e -= t), (e = No(e, 1 / n, r)), s !== void 0 && (e = No(e, 1 / s, r)), e
    );
}
function D_(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
    if (
        (Pt.test(t) &&
        ((t = parseFloat(t)), (t = J(o.min, o.max, t / 100) - o.min)),
        typeof t != "number")
    )
        return;
    let a = J(i.min, i.max, r);
    e === i && (a -= t),
        (e.min = Ah(e.min, t, n, a, s)),
        (e.max = Ah(e.max, t, n, a, s));
}
function Rh(e, t, [n, r, s], i, o) {
    D_(e, t[n], t[r], t[s], t.scale, i, o);
}
const F_ = ["x", "scaleX", "originX"],
    I_ = ["y", "scaleY", "originY"];
function Mh(e, t, n, r) {
    Rh(e.x, t, F_, n ? n.x : void 0, r ? r.x : void 0),
        Rh(e.y, t, I_, n ? n.y : void 0, r ? r.y : void 0);
}
function Lh(e) {
    return e.translate === 0 && e.scale === 1;
}
function Iy(e) {
    return Lh(e.x) && Lh(e.y);
}
function Nh(e, t) {
    return e.min === t.min && e.max === t.max;
}
function O_(e, t) {
    return Nh(e.x, t.x) && Nh(e.y, t.y);
}
function Dh(e, t) {
    return (
        Math.round(e.min) === Math.round(t.min) &&
        Math.round(e.max) === Math.round(t.max)
    );
}
function Oy(e, t) {
    return Dh(e.x, t.x) && Dh(e.y, t.y);
}
function Fh(e) {
    return Ke(e.x) / Ke(e.y);
}
function Ih(e, t) {
    return (
        e.translate === t.translate &&
        e.scale === t.scale &&
        e.originPoint === t.originPoint
    );
}
class V_ {
    constructor() {
        this.members = [];
    }
    add(t) {
        $c(this.members, t), t.scheduleRender();
    }
    remove(t) {
        if (
            (zc(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
        ) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n);
        }
    }
    relegate(t) {
        const n = this.members.findIndex((s) => t === s);
        if (n === 0) return !1;
        let r;
        for (let s = n; s >= 0; s--) {
            const i = this.members[s];
            if (i.isPresent !== !1) {
                r = i;
                break;
            }
        }
        return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = r),
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot &&
            ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues = r.animationValues || r.latestValues)),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const { crossfade: s } = t.options;
            s === !1 && r.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((t) => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete();
        });
    }
    scheduleRender() {
        this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
        });
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
}
function j_(e, t, n) {
    let r = "";
    const s = e.x.translate / t.x,
        i = e.y.translate / t.y,
        o = (n == null ? void 0 : n.z) || 0;
    if (
        ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
            n)
    ) {
        const {
            transformPerspective: u,
            rotate: f,
            rotateX: c,
            rotateY: d,
            skewX: g,
            skewY: y,
        } = n;
        u && (r = `perspective(${u}px) ${r}`),
        f && (r += `rotate(${f}deg) `),
        c && (r += `rotateX(${c}deg) `),
        d && (r += `rotateY(${d}deg) `),
        g && (r += `skewX(${g}deg) `),
        y && (r += `skewY(${y}deg) `);
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const b_ = (e, t) => e.depth - t.depth;
class B_ {
    constructor() {
        (this.children = []), (this.isDirty = !1);
    }
    add(t) {
        $c(this.children, t), (this.isDirty = !0);
    }
    remove(t) {
        zc(this.children, t), (this.isDirty = !0);
    }
    forEach(t) {
        this.isDirty && this.children.sort(b_),
            (this.isDirty = !1),
            this.children.forEach(t);
    }
}
function Yi(e) {
    const t = ke(e) ? e.get() : e;
    return LS(t) ? t.toValue() : t;
}
function $_(e, t) {
    const n = kt.now(),
        r = ({ timestamp: s }) => {
            const i = s - n;
            i >= t && (cn(r), e(i - t));
        };
    return W.read(r, !0), () => cn(r);
}
function z_(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
}
function U_(e, t, n) {
    const r = ke(e) ? e : Hs(e);
    return r.start(Bc("", r, t, n)), r.animation;
}
const Pn = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0,
    },
    ss = typeof window < "u" && window.MotionDebug !== void 0,
    Xa = ["", "X", "Y", "Z"],
    W_ = { visibility: "hidden" },
    Oh = 1e3;
let H_ = 0;
function Ga(e, t, n, r) {
    const { latestValues: s } = t;
    s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Vy(e) {
    if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = my(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const { layout: s, layoutId: i } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", W, !(s || i));
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && Vy(r);
}
function jy({
                attachResizeListener: e,
                defaultParent: t,
                measureScroll: n,
                checkIsScrollRoot: r,
                resetTransform: s,
            }) {
    return class {
        constructor(o = {}, a = t == null ? void 0 : t()) {
            (this.id = H_++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.hasCheckedOptimisedAppear = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.scheduleUpdate = () => this.update()),
                (this.projectionUpdateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                    (this.projectionUpdateScheduled = !1),
                    ss &&
                    (Pn.totalNodes =
                        Pn.resolvedTargetDeltas =
                            Pn.recalculatedProjection =
                                0),
                        this.nodes.forEach(G_),
                        this.nodes.forEach(Z_),
                        this.nodes.forEach(eC),
                        this.nodes.forEach(Q_),
                    ss && window.MotionDebug.record(Pn);
                }),
                (this.resolvedRelativeTargetAt = 0),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = o),
                (this.root = a ? a.root || a : this),
                (this.path = a ? [...a.path, a] : []),
                (this.parent = a),
                (this.depth = a ? a.depth + 1 : 0);
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new B_());
        }
        addEventListener(o, a) {
            return (
                this.eventHandlers.has(o) || this.eventHandlers.set(o, new Uc()),
                    this.eventHandlers.get(o).add(a)
            );
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a);
        }
        hasListeners(o) {
            return this.eventHandlers.has(o);
        }
        mount(o, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = z_(o)), (this.instance = o);
            const { layoutId: l, layout: u, visualElement: f } = this.options;
            if (
                (f && !f.current && f.mount(o),
                    this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                a && (u || l) && (this.isLayoutDirty = !0),
                    e)
            ) {
                let c;
                const d = () => (this.root.updateBlockedByResize = !1);
                e(o, () => {
                    (this.root.updateBlockedByResize = !0),
                    c && c(),
                        (c = $_(d, 250)),
                    Qi.hasAnimatedSinceResize &&
                    ((Qi.hasAnimatedSinceResize = !1), this.nodes.forEach(jh));
                });
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 &&
            f &&
            (l || u) &&
            this.addEventListener(
                "didUpdate",
                ({
                     delta: c,
                     hasLayoutChanged: d,
                     hasRelativeTargetChanged: g,
                     layout: y,
                 }) => {
                    if (this.isTreeAnimationBlocked()) {
                        (this.target = void 0), (this.relativeTarget = void 0);
                        return;
                    }
                    const v =
                            this.options.transition || f.getDefaultTransition() || iC,
                        { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } =
                            f.getProps(),
                        h = !this.targetLayout || !Oy(this.targetLayout, y) || g,
                        p = !d && g;
                    if (
                        this.options.layoutRoot ||
                        (this.resumeFrom && this.resumeFrom.instance) ||
                        p ||
                        (d && (h || !this.currentAnimation))
                    ) {
                        this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                            (this.resumingFrom.resumingFrom = void 0)),
                            this.setAnimationOrigin(c, p);
                        const w = { ...Ec(v, "layout"), onPlay: x, onComplete: m };
                        (f.shouldReduceMotion || this.options.layoutRoot) &&
                        ((w.delay = 0), (w.type = !1)),
                            this.startAnimation(w);
                    } else
                        d || jh(this),
                        this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                    this.targetLayout = y;
                },
            );
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                cn(this.updateProjection);
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (
                this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                !1
            );
        }
        startUpdate() {
            this.isUpdateBlocked() ||
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(tC),
                this.animationId++);
        }
        getTransformTemplate() {
            const { visualElement: o } = this.options;
            return o && o.getProps().transformTemplate;
        }
        willUpdate(o = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if (
                (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                Vy(this),
                !this.root.isUpdating && this.root.startUpdate(),
                    this.isLayoutDirty)
            )
                return;
            this.isLayoutDirty = !0;
            for (let f = 0; f < this.path.length; f++) {
                const c = this.path[f];
                (c.shouldResetTransform = !0),
                    c.updateScroll("snapshot"),
                c.options.layoutRoot && c.willUpdate(!1);
            }
            const { layoutId: a, layout: l } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
                this.updateSnapshot(),
            o && this.notifyListeners("willUpdate");
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vh);
                return;
            }
            this.isUpdating || this.nodes.forEach(J_),
                (this.isUpdating = !1),
                this.nodes.forEach(q_),
                this.nodes.forEach(K_),
                this.nodes.forEach(X_),
                this.clearAllSnapshots();
            const a = kt.now();
            (me.delta = fn(0, 1e3 / 60, a - me.timestamp)),
                (me.timestamp = a),
                (me.isProcessing = !0),
                ba.update.process(me),
                ba.preRender.process(me),
                ba.render.process(me),
                (me.isProcessing = !1);
        }
        didUpdate() {
            this.updateScheduled ||
            ((this.updateScheduled = !0), Kc.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
            this.nodes.forEach(Y_), this.sharedNodes.forEach(nC);
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0),
                W.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
            W.postRender(() => {
                this.isLayoutDirty
                    ? this.root.didUpdate()
                    : this.root.checkUpdateFailed();
            });
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure());
        }
        updateLayout() {
            if (
                !this.instance ||
                (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            (this.layout = this.measure(!1)),
                (this.layoutCorrected = ne()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: a } = this.options;
            a &&
            a.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                o ? o.layoutBox : void 0,
            );
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (
                (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === o &&
                (a = !1),
                    a)
            ) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l,
                };
            }
        }
        resetTransform() {
            if (!s) return;
            const o =
                    this.isLayoutDirty ||
                    this.shouldResetTransform ||
                    this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !Iy(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                f = u !== this.prevTransformTemplateValue;
            o &&
            (a || Cn(this.latestValues) || f) &&
            (s(this.instance, u),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return (
                o && (l = this.removeTransform(l)),
                    oC(l),
                    {
                        animationId: this.root.animationId,
                        measuredBox: a,
                        layoutBox: l,
                        latestValues: {},
                        source: this.id,
                    }
            );
        }
        measurePageBox() {
            var o;
            const { visualElement: a } = this.options;
            if (!a) return ne();
            const l = a.measureViewportBox();
            if (
                !(
                    ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
                    this.path.some(aC)
                )
            ) {
                const { scroll: f } = this.root;
                f && (fr(l.x, f.offset.x), fr(l.y, f.offset.y));
            }
            return l;
        }
        removeElementScroll(o) {
            var a;
            const l = ne();
            if (
                (Qe(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
            )
                return l;
            for (let u = 0; u < this.path.length; u++) {
                const f = this.path[u],
                    { scroll: c, options: d } = f;
                f !== this.root &&
                c &&
                d.layoutScroll &&
                (c.wasRoot && Qe(l, o), fr(l.x, c.offset.x), fr(l.y, c.offset.y));
            }
            return l;
        }
        applyTransform(o, a = !1) {
            const l = ne();
            Qe(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const f = this.path[u];
                !a &&
                f.options.layoutScroll &&
                f.scroll &&
                f !== f.root &&
                dr(l, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
                Cn(f.latestValues) && dr(l, f.latestValues);
            }
            return Cn(this.latestValues) && dr(l, this.latestValues), l;
        }
        removeTransform(o) {
            const a = ne();
            Qe(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Cn(u.latestValues)) continue;
                du(u.latestValues) && u.updateSnapshot();
                const f = ne(),
                    c = u.measurePageBox();
                Qe(f, c),
                    Mh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, f);
            }
            return Cn(this.latestValues) && Mh(a, this.latestValues), a;
        }
        setTargetDelta(o) {
            (this.targetDelta = o),
                this.root.scheduleUpdateProjection(),
                (this.isProjectionDirty = !0);
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
            };
        }
        clearMeasurements() {
            (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== me.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(o = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (
                !(
                    o ||
                    (u && this.isSharedProjectionDirty) ||
                    this.isProjectionDirty ||
                    (!((a = this.parent) === null || a === void 0) &&
                        a.isProjectionDirty) ||
                    this.attemptToResolveRelativeTarget ||
                    this.root.updateBlockedByResize
                )
            )
                return;
            const { layout: c, layoutId: d } = this.options;
            if (!(!this.layout || !(c || d))) {
                if (
                    ((this.resolvedRelativeTargetAt = me.timestamp),
                    !this.targetDelta && !this.relativeTarget)
                ) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1
                        ? ((this.relativeParent = g),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = ne()),
                            (this.relativeTargetOrigin = ne()),
                            _s(
                                this.relativeTargetOrigin,
                                this.layout.layoutBox,
                                g.layout.layoutBox,
                            ),
                            Qe(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (
                        (this.target ||
                        ((this.target = ne()), (this.targetWithTransforms = ne())),
                            this.relativeTarget &&
                            this.relativeTargetOrigin &&
                            this.relativeParent &&
                            this.relativeParent.target
                                ? (this.forceRelativeParentToResolveTarget(),
                                    l_(
                                        this.target,
                                        this.relativeTarget,
                                        this.relativeParent.target,
                                    ))
                                : this.targetDelta
                                    ? (this.resumingFrom
                                        ? (this.target = this.applyTransform(this.layout.layoutBox))
                                        : Qe(this.target, this.layout.layoutBox),
                                        Ay(this.target, this.targetDelta))
                                    : Qe(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget)
                    ) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g &&
                        !!g.resumingFrom == !!this.resumingFrom &&
                        !g.options.layoutScroll &&
                        g.target &&
                        this.animationProgress !== 1
                            ? ((this.relativeParent = g),
                                this.forceRelativeParentToResolveTarget(),
                                (this.relativeTarget = ne()),
                                (this.relativeTargetOrigin = ne()),
                                _s(this.relativeTargetOrigin, this.target, g.target),
                                Qe(this.relativeTarget, this.relativeTargetOrigin))
                            : (this.relativeParent = this.relativeTarget = void 0);
                    }
                    ss && Pn.resolvedTargetDeltas++;
                }
            }
        }
        getClosestProjectingParent() {
            if (
                !(
                    !this.parent ||
                    du(this.parent.latestValues) ||
                    Ty(this.parent.latestValues)
                )
            )
                return this.parent.isProjecting()
                    ? this.parent
                    : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!(
                (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
                this.layout
            );
        }
        calcProjection() {
            var o;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if (
                ((this.isProjectionDirty ||
                    (!((o = this.parent) === null || o === void 0) &&
                        o.isProjectionDirty)) &&
                (u = !1),
                l &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (u = !1),
                this.resolvedRelativeTargetAt === me.timestamp && (u = !1),
                    u)
            )
                return;
            const { layout: f, layoutId: c } = this.options;
            if (
                ((this.isTreeAnimating = !!(
                    (this.parent && this.parent.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(f || c))
            )
                return;
            Qe(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x,
                g = this.treeScale.y;
            y_(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout &&
            !a.target &&
            (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
            ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ne()));
            const { target: y } = a;
            if (!y) {
                this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
                return;
            }
            !this.projectionDelta || !this.prevProjectionDelta
                ? this.createProjectionDeltas()
                : (Th(this.prevProjectionDelta.x, this.projectionDelta.x),
                    Th(this.prevProjectionDelta.y, this.projectionDelta.y)),
                Ss(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
            (this.treeScale.x !== d ||
                this.treeScale.y !== g ||
                !Ih(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                !Ih(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", y)),
            ss && Pn.recalculatedProjection++;
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(o = !0) {
            var a;
            if (
                ((a = this.options.visualElement) === null ||
                a === void 0 ||
                a.scheduleRender(),
                    o)
            ) {
                const l = this.getStack();
                l && l.scheduleRender();
            }
            this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
            (this.prevProjectionDelta = cr()),
                (this.projectionDelta = cr()),
                (this.projectionDeltaWithTransform = cr());
        }
        setAnimationOrigin(o, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                f = { ...this.latestValues },
                c = cr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !a);
            const d = ne(),
                g = l ? l.source : void 0,
                y = this.layout ? this.layout.source : void 0,
                v = g !== y,
                x = this.getStack(),
                m = !x || x.members.length <= 1,
                h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(sC));
            this.animationProgress = 0;
            let p;
            (this.mixTargetDelta = (w) => {
                const S = w / 1e3;
                bh(c.x, o.x, S),
                    bh(c.y, o.y, S),
                    this.setTargetDelta(c),
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout &&
                (_s(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                    rC(this.relativeTarget, this.relativeTargetOrigin, d, S),
                p && O_(this.relativeTarget, p) && (this.isProjectionDirty = !1),
                p || (p = ne()),
                    Qe(p, this.relativeTarget)),
                v &&
                ((this.animationValues = f), M_(f, u, this.latestValues, S, h, m)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = S);
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation &&
            (cn(this.pendingAnimation), (this.pendingAnimation = void 0)),
                (this.pendingAnimation = W.update(() => {
                    (Qi.hasAnimatedSinceResize = !0),
                        (this.currentAnimation = U_(0, Oh, {
                            ...o,
                            onUpdate: (a) => {
                                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
                            },
                            onComplete: () => {
                                o.onComplete && o.onComplete(), this.completeAnimation();
                            },
                        })),
                    this.resumingFrom &&
                    (this.resumingFrom.currentAnimation = this.currentAnimation),
                        (this.pendingAnimation = void 0);
                }));
        }
        completeAnimation() {
            this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0));
            const o = this.getStack();
            o && o.exitAnimationComplete(),
                (this.resumingFrom =
                    this.currentAnimation =
                        this.animationValues =
                            void 0),
                this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(Oh),
                this.currentAnimation.stop()),
                this.completeAnimation();
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: f,
            } = o;
            if (!(!a || !l || !u)) {
                if (
                    this !== o &&
                    this.layout &&
                    u &&
                    by(this.options.animationType, this.layout.layoutBox, u.layoutBox)
                ) {
                    l = this.target || ne();
                    const c = Ke(this.layout.layoutBox.x);
                    (l.x.min = o.target.x.min), (l.x.max = l.x.min + c);
                    const d = Ke(this.layout.layoutBox.y);
                    (l.y.min = o.target.y.min), (l.y.max = l.y.min + d);
                }
                Qe(a, l),
                    dr(a, f),
                    Ss(this.projectionDeltaWithTransform, this.layoutCorrected, a, f);
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new V_()),
                this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity:
                    u && u.shouldPreserveFollowOpacity
                        ? u.shouldPreserveFollowOpacity(a)
                        : void 0,
            });
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0;
        }
        getLead() {
            var o;
            const { layoutId: a } = this.options;
            return a
                ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
                this
                : this;
        }
        getPrevLead() {
            var o;
            const { layoutId: a } = this.options;
            return a
                ? (o = this.getStack()) === null || o === void 0
                    ? void 0
                    : o.prevLead
                : void 0;
        }
        getStack() {
            const { layoutId: o } = this.options;
            if (o) return this.root.sharedNodes.get(o);
        }
        promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
            const u = this.getStack();
            u && u.promote(this, l),
            o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            a && this.setOptions({ transition: a });
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1;
        }
        resetSkewAndRotation() {
            const { visualElement: o } = this.options;
            if (!o) return;
            let a = !1;
            const { latestValues: l } = o;
            if (
                ((l.z ||
                    l.rotate ||
                    l.rotateX ||
                    l.rotateY ||
                    l.rotateZ ||
                    l.skewX ||
                    l.skewY) &&
                (a = !0),
                    !a)
            )
                return;
            const u = {};
            l.z && Ga("z", o, u, this.animationValues);
            for (let f = 0; f < Xa.length; f++)
                Ga(`rotate${Xa[f]}`, o, u, this.animationValues),
                    Ga(`skew${Xa[f]}`, o, u, this.animationValues);
            o.render();
            for (const f in u)
                o.setStaticValue(f, u[f]),
                this.animationValues && (this.animationValues[f] = u[f]);
            o.scheduleRender();
        }
        getProjectionStyles(o) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return W_;
            const u = { visibility: "" },
                f = this.getTransformTemplate();
            if (this.needsReset)
                return (
                    (this.needsReset = !1),
                        (u.opacity = ""),
                        (u.pointerEvents = Yi(o == null ? void 0 : o.pointerEvents) || ""),
                        (u.transform = f ? f(this.latestValues, "") : "none"),
                        u
                );
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                const v = {};
                return (
                    this.options.layoutId &&
                    ((v.opacity =
                        this.latestValues.opacity !== void 0
                            ? this.latestValues.opacity
                            : 1),
                        (v.pointerEvents = Yi(o == null ? void 0 : o.pointerEvents) || "")),
                    this.hasProjected &&
                    !Cn(this.latestValues) &&
                    ((v.transform = f ? f({}, "") : "none"), (this.hasProjected = !1)),
                        v
                );
            }
            const d = c.animationValues || c.latestValues;
            this.applyTransformsToTarget(),
                (u.transform = j_(
                    this.projectionDeltaWithTransform,
                    this.treeScale,
                    d,
                )),
            f && (u.transform = f(d, u.transform));
            const { x: g, y } = this.projectionDelta;
            (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
                c.animationValues
                    ? (u.opacity =
                        c === this
                            ? (l =
                                (a = d.opacity) !== null && a !== void 0
                                    ? a
                                    : this.latestValues.opacity) !== null && l !== void 0
                                ? l
                                : 1
                            : this.preserveOpacity
                                ? this.latestValues.opacity
                                : d.opacityExit)
                    : (u.opacity =
                        c === this
                            ? d.opacity !== void 0
                                ? d.opacity
                                : ""
                            : d.opacityExit !== void 0
                                ? d.opacityExit
                                : 0);
            for (const v in Do) {
                if (d[v] === void 0) continue;
                const { correct: x, applyTo: m } = Do[v],
                    h = u.transform === "none" ? d[v] : x(d[v], c);
                if (m) {
                    const p = m.length;
                    for (let w = 0; w < p; w++) u[m[w]] = h;
                } else u[v] = h;
            }
            return (
                this.options.layoutId &&
                (u.pointerEvents =
                    c === this
                        ? Yi(o == null ? void 0 : o.pointerEvents) || ""
                        : "none"),
                    u
            );
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
            this.root.nodes.forEach((o) => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0
                    ? void 0
                    : a.stop();
            }),
                this.root.nodes.forEach(Vh),
                this.root.sharedNodes.clear();
        }
    };
}
function K_(e) {
    e.updateLayout();
}
function X_(e) {
    var t;
    const n =
        ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
        e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: s } = e.layout,
            { animationType: i } = e.options,
            o = n.source !== e.layout.source;
        i === "size"
            ? Ye((c) => {
                const d = o ? n.measuredBox[c] : n.layoutBox[c],
                    g = Ke(d);
                (d.min = r[c].min), (d.max = d.min + g);
            })
            : by(i, n.layoutBox, r) &&
            Ye((c) => {
                const d = o ? n.measuredBox[c] : n.layoutBox[c],
                    g = Ke(r[c]);
                (d.max = d.min + g),
                e.relativeTarget &&
                !e.currentAnimation &&
                ((e.isProjectionDirty = !0),
                    (e.relativeTarget[c].max = e.relativeTarget[c].min + g));
            });
        const a = cr();
        Ss(a, r, n.layoutBox);
        const l = cr();
        o ? Ss(l, e.applyTransform(s, !0), n.measuredBox) : Ss(l, r, n.layoutBox);
        const u = !Iy(a);
        let f = !1;
        if (!e.resumeFrom) {
            const c = e.getClosestProjectingParent();
            if (c && !c.resumeFrom) {
                const { snapshot: d, layout: g } = c;
                if (d && g) {
                    const y = ne();
                    _s(y, n.layoutBox, d.layoutBox);
                    const v = ne();
                    _s(v, r, g.layoutBox),
                    Oy(y, v) || (f = !0),
                    c.options.layoutRoot &&
                    ((e.relativeTarget = v),
                        (e.relativeTargetOrigin = y),
                        (e.relativeParent = c));
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: f,
        });
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r();
    }
    e.options.transition = void 0;
}
function G_(e) {
    ss && Pn.totalNodes++,
    e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
    (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
    )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Q_(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Y_(e) {
    e.clearSnapshot();
}
function Vh(e) {
    e.clearMeasurements();
}
function J_(e) {
    e.isLayoutDirty = !1;
}
function q_(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform();
}
function jh(e) {
    e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0);
}
function Z_(e) {
    e.resolveTargetDelta();
}
function eC(e) {
    e.calcProjection();
}
function tC(e) {
    e.resetSkewAndRotation();
}
function nC(e) {
    e.removeLeadSnapshot();
}
function bh(e, t, n) {
    (e.translate = J(t.translate, 0, n)),
        (e.scale = J(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
}
function Bh(e, t, n, r) {
    (e.min = J(t.min, n.min, r)), (e.max = J(t.max, n.max, r));
}
function rC(e, t, n, r) {
    Bh(e.x, t.x, n.x, r), Bh(e.y, t.y, n.y, r);
}
function sC(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const iC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    $h = (e) =>
        typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(e),
    zh = $h("applewebkit/") && !$h("chrome/") ? Math.round : Ee;
function Uh(e) {
    (e.min = zh(e.min)), (e.max = zh(e.max));
}
function oC(e) {
    Uh(e.x), Uh(e.y);
}
function by(e, t, n) {
    return (
        e === "position" || (e === "preserve-aspect" && !a_(Fh(t), Fh(n), 0.2))
    );
}
function aC(e) {
    var t;
    return (
        e !== e.root &&
        ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
    );
}
const lC = jy({
        attachResizeListener: (e, t) => Dt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => !0,
    }),
    Qa = { current: void 0 },
    By = jy({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
            if (!Qa.current) {
                const e = new lC({});
                e.mount(window), e.setOptions({ layoutScroll: !0 }), (Qa.current = e);
            }
            return Qa.current;
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none";
        },
        checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
    }),
    uC = {
        pan: { Feature: C_ },
        drag: { Feature: __, ProjectionNode: By, MeasureLayout: Ny },
    };
function Wh(e, t) {
    const n = t ? "pointerenter" : "pointerleave",
        r = t ? "onHoverStart" : "onHoverEnd",
        s = (i, o) => {
            if (i.pointerType === "touch" || Cy()) return;
            const a = e.getProps();
            e.animationState &&
            a.whileHover &&
            e.animationState.setActive("whileHover", t);
            const l = a[r];
            l && W.postRender(() => l(i, o));
        };
    return jt(e.current, n, s, { passive: !e.getProps()[r] });
}
class cC extends gn {
    mount() {
        this.unmount = Vt(Wh(this.node, !0), Wh(this.node, !1));
    }
    unmount() {}
}
class fC extends gn {
    constructor() {
        super(...arguments), (this.isActive = !1);
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible");
        } catch {
            t = !0;
        }
        !t ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
    }
    onBlur() {
        !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
    }
    mount() {
        this.unmount = Vt(
            Dt(this.node.current, "focus", () => this.onFocus()),
            Dt(this.node.current, "blur", () => this.onBlur()),
        );
    }
    unmount() {}
}
const $y = (e, t) => (t ? (e === t ? !0 : $y(e, t.parentElement)) : !1);
function Ya(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, sa(n));
}
class dC extends gn {
    constructor() {
        super(...arguments),
            (this.removeStartListeners = Ee),
            (this.removeEndListeners = Ee),
            (this.removeAccessibleListeners = Ee),
            (this.startPointerPress = (t, n) => {
                if (this.isPressing) return;
                this.removeEndListeners();
                const r = this.node.getProps(),
                    i = jt(
                        window,
                        "pointerup",
                        (a, l) => {
                            if (!this.checkPressEnd()) return;
                            const {
                                    onTap: u,
                                    onTapCancel: f,
                                    globalTapTarget: c,
                                } = this.node.getProps(),
                                d = !c && !$y(this.node.current, a.target) ? f : u;
                            d && W.update(() => d(a, l));
                        },
                        { passive: !(r.onTap || r.onPointerUp) },
                    ),
                    o = jt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                        passive: !(r.onTapCancel || r.onPointerCancel),
                    });
                (this.removeEndListeners = Vt(i, o)), this.startPress(t, n);
            }),
            (this.startAccessiblePress = () => {
                const t = (i) => {
                        if (i.key !== "Enter" || this.isPressing) return;
                        const o = (a) => {
                            a.key !== "Enter" ||
                            !this.checkPressEnd() ||
                            Ya("up", (l, u) => {
                                const { onTap: f } = this.node.getProps();
                                f && W.postRender(() => f(l, u));
                            });
                        };
                        this.removeEndListeners(),
                            (this.removeEndListeners = Dt(this.node.current, "keyup", o)),
                            Ya("down", (a, l) => {
                                this.startPress(a, l);
                            });
                    },
                    n = Dt(this.node.current, "keydown", t),
                    r = () => {
                        this.isPressing && Ya("cancel", (i, o) => this.cancelPress(i, o));
                    },
                    s = Dt(this.node.current, "blur", r);
                this.removeAccessibleListeners = Vt(n, s);
            });
    }
    startPress(t, n) {
        this.isPressing = !0;
        const { onTapStart: r, whileTap: s } = this.node.getProps();
        s &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        r && W.postRender(() => r(t, n));
    }
    checkPressEnd() {
        return (
            this.removeEndListeners(),
                (this.isPressing = !1),
            this.node.getProps().whileTap &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !1),
                !Cy()
        );
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const { onTapCancel: r } = this.node.getProps();
        r && W.postRender(() => r(t, n));
    }
    mount() {
        const t = this.node.getProps(),
            n = jt(
                t.globalTapTarget ? window : this.node.current,
                "pointerdown",
                this.startPointerPress,
                { passive: !(t.onTapStart || t.onPointerStart) },
            ),
            r = Dt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Vt(n, r);
    }
    unmount() {
        this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
    }
}
const pu = new WeakMap(),
    Ja = new WeakMap(),
    hC = (e) => {
        const t = pu.get(e.target);
        t && t(e);
    },
    pC = (e) => {
        e.forEach(hC);
    };
function mC({ root: e, ...t }) {
    const n = e || document;
    Ja.has(n) || Ja.set(n, {});
    const r = Ja.get(n),
        s = JSON.stringify(t);
    return r[s] || (r[s] = new IntersectionObserver(pC, { root: e, ...t })), r[s];
}
function gC(e, t, n) {
    const r = mC(t);
    return (
        pu.set(e, n),
            r.observe(e),
            () => {
                pu.delete(e), r.unobserve(e);
            }
    );
}
const yC = { some: 0, all: 1 };
class vC extends gn {
    constructor() {
        super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps(),
            { root: n, margin: r, amount: s = "some", once: i } = t,
            o = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof s == "number" ? s : yC[s],
            },
            a = (l) => {
                const { isIntersecting: u } = l;
                if (
                    this.isInView === u ||
                    ((this.isInView = u), i && !u && this.hasEnteredView)
                )
                    return;
                u && (this.hasEnteredView = !0),
                this.node.animationState &&
                this.node.animationState.setActive("whileInView", u);
                const { onViewportEnter: f, onViewportLeave: c } = this.node.getProps(),
                    d = u ? f : c;
                d && d(l);
            };
        return gC(this.node.current, o, a);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(wC(t, n)) && this.startObserver();
    }
    unmount() {}
}
function wC({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
}
const xC = {
        inView: { Feature: vC },
        tap: { Feature: dC },
        focus: { Feature: fC },
        hover: { Feature: cC },
    },
    SC = { layout: { ProjectionNode: By, MeasureLayout: Ny } },
    Xc = C.createContext({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
    }),
    oa = C.createContext({}),
    Gc = typeof window < "u",
    zy = Gc ? C.useLayoutEffect : C.useEffect,
    Uy = C.createContext({ strict: !1 });
function _C(e, t, n, r, s) {
    var i, o;
    const { visualElement: a } = C.useContext(oa),
        l = C.useContext(Uy),
        u = C.useContext(ia),
        f = C.useContext(Xc).reducedMotion,
        c = C.useRef();
    (r = r || l.renderer),
    !c.current &&
    r &&
    (c.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: f,
    }));
    const d = c.current,
        g = C.useContext(Ly);
    d &&
    !d.projection &&
    s &&
    (d.type === "html" || d.type === "svg") &&
    CC(c.current, n, s, g);
    const y = C.useRef(!1);
    C.useInsertionEffect(() => {
        d && y.current && d.update(n, u);
    });
    const v = n[py],
        x = C.useRef(
            !!v &&
            !(
                !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
                i.call(window, v)
            ) &&
            ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
                ? void 0
                : o.call(window, v)),
        );
    return (
        zy(() => {
            d &&
            ((y.current = !0),
                (window.MotionIsMounted = !0),
                d.updateFeatures(),
                Kc.render(d.render),
            x.current && d.animationState && d.animationState.animateChanges());
        }),
            C.useEffect(() => {
                d &&
                (!x.current && d.animationState && d.animationState.animateChanges(),
                x.current &&
                (queueMicrotask(() => {
                    var m;
                    (m = window.MotionHandoffMarkAsComplete) === null ||
                    m === void 0 ||
                    m.call(window, v);
                }),
                    (x.current = !1)));
            }),
            d
    );
}
function CC(e, t, n, r) {
    const {
        layoutId: s,
        layout: i,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u,
    } = t;
    (e.projection = new n(
        e.latestValues,
        t["data-framer-portal-id"] ? void 0 : Wy(e.parent),
    )),
        e.projection.setOptions({
            layoutId: s,
            layout: i,
            alwaysMeasureLayout: !!o || (a && ur(a)),
            visualElement: e,
            animationType: typeof i == "string" ? i : "both",
            initialPromotionConfig: r,
            layoutScroll: l,
            layoutRoot: u,
        });
}
function Wy(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : Wy(e.parent);
}
function PC(e, t, n) {
    return C.useCallback(
        (r) => {
            r && e.mount && e.mount(r),
            t && (r ? t.mount(r) : t.unmount()),
            n && (typeof n == "function" ? n(r) : ur(n) && (n.current = r));
        },
        [t],
    );
}
function aa(e) {
    return ta(e.animate) || kc.some((t) => zs(e[t]));
}
function Hy(e) {
    return !!(aa(e) || e.variants);
}
function kC(e, t) {
    if (aa(e)) {
        const { initial: n, animate: r } = e;
        return {
            initial: n === !1 || zs(n) ? n : void 0,
            animate: zs(r) ? r : void 0,
        };
    }
    return e.inherit !== !1 ? t : {};
}
function EC(e) {
    const { initial: t, animate: n } = kC(e, C.useContext(oa));
    return C.useMemo(() => ({ initial: t, animate: n }), [Hh(t), Hh(n)]);
}
function Hh(e) {
    return Array.isArray(e) ? e.join(" ") : e;
}
const Kh = {
        animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
    },
    Dr = {};
for (const e in Kh) Dr[e] = { isEnabled: (t) => Kh[e].some((n) => !!t[n]) };
function TC(e) {
    for (const t in e) Dr[t] = { ...Dr[t], ...e[t] };
}
const AC = Symbol.for("motionComponentSymbol");
function RC({
                preloadedFeatures: e,
                createVisualElement: t,
                useRender: n,
                useVisualState: r,
                Component: s,
            }) {
    e && TC(e);
    function i(a, l) {
        let u;
        const f = { ...C.useContext(Xc), ...a, layoutId: MC(a) },
            { isStatic: c } = f,
            d = EC(a),
            g = r(a, c);
        if (!c && Gc) {
            LC();
            const y = NC(f);
            (u = y.MeasureLayout),
                (d.visualElement = _C(s, g, f, t, y.ProjectionNode));
        }
        return T.jsxs(oa.Provider, {
            value: d,
            children: [
                u && d.visualElement
                    ? T.jsx(u, { visualElement: d.visualElement, ...f })
                    : null,
                n(s, a, PC(g, d.visualElement, l), g, c, d.visualElement),
            ],
        });
    }
    const o = C.forwardRef(i);
    return (o[AC] = s), o;
}
function MC({ layoutId: e }) {
    const t = C.useContext(Hc).id;
    return t && e !== void 0 ? t + "-" + e : e;
}
function LC(e, t) {
    C.useContext(Uy).strict;
}
function NC(e) {
    const { drag: t, layout: n } = Dr;
    if (!t && !n) return {};
    const r = { ...t, ...n };
    return {
        MeasureLayout:
            (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
                ? r.MeasureLayout
                : void 0,
        ProjectionNode: r.ProjectionNode,
    };
}
const DC = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];
function Qc(e) {
    return typeof e != "string" || e.includes("-")
        ? !1
        : !!(DC.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Ky(e, { style: t, vars: n }, r, s) {
    Object.assign(e.style, t, s && s.getProjectionStyles(r));
    for (const i in n) e.style.setProperty(i, n[i]);
}
const Xy = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);
function Gy(e, t, n, r) {
    Ky(e, t, void 0, r);
    for (const s in t.attrs) e.setAttribute(Xy.has(s) ? s : Wc(s), t.attrs[s]);
}
function Qy(e, { layout: t, layoutId: n }) {
    return (
        zn.has(e) ||
        e.startsWith("origin") ||
        ((t || n !== void 0) && (!!Do[e] || e === "opacity"))
    );
}
function Yc(e, t, n) {
    var r;
    const { style: s } = e,
        i = {};
    for (const o in s)
        (ke(s[o]) ||
            (t.style && ke(t.style[o])) ||
            Qy(o, e) ||
            ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
                ? void 0
                : r.liveStyle) !== void 0) &&
        (i[o] = s[o]);
    return i;
}
function Yy(e, t, n) {
    const r = Yc(e, t, n);
    for (const s in e)
        if (ke(e[s]) || ke(t[s])) {
            const i =
                Zs.indexOf(s) !== -1
                    ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
                    : s;
            r[i] = e[s];
        }
    return r;
}
function Jc(e) {
    const t = C.useRef(null);
    return t.current === null && (t.current = e()), t.current;
}
function FC(
    { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
    r,
    s,
    i,
) {
    const o = { latestValues: IC(r, s, i, e), renderState: t() };
    return n && (o.mount = (a) => n(r, a, o)), o;
}
const Jy = (e) => (t, n) => {
    const r = C.useContext(oa),
        s = C.useContext(ia),
        i = () => FC(e, t, r, s);
    return n ? i() : Jc(i);
};
function IC(e, t, n, r) {
    const s = {},
        i = r(e, {});
    for (const d in i) s[d] = Yi(i[d]);
    let { initial: o, animate: a } = e;
    const l = aa(e),
        u = Hy(e);
    t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let f = n ? n.initial === !1 : !1;
    f = f || o === !1;
    const c = f ? a : o;
    if (c && typeof c != "boolean" && !ta(c)) {
        const d = Array.isArray(c) ? c : [c];
        for (let g = 0; g < d.length; g++) {
            const y = Cc(e, d[g]);
            if (y) {
                const { transitionEnd: v, transition: x, ...m } = y;
                for (const h in m) {
                    let p = m[h];
                    if (Array.isArray(p)) {
                        const w = f ? p.length - 1 : 0;
                        p = p[w];
                    }
                    p !== null && (s[h] = p);
                }
                for (const h in v) s[h] = v[h];
            }
        }
    }
    return s;
}
const qc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
    qy = () => ({ ...qc(), attrs: {} }),
    Zy = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
    OC = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
    },
    VC = Zs.length;
function jC(e, t, n) {
    let r = "",
        s = !0;
    for (let i = 0; i < VC; i++) {
        const o = Zs[i],
            a = e[o];
        if (a === void 0) continue;
        let l = !0;
        if (
            (typeof a == "number"
                ? (l = a === (o.startsWith("scale") ? 1 : 0))
                : (l = parseFloat(a) === 0),
            !l || n)
        ) {
            const u = Zy(a, Dc[o]);
            if (!l) {
                s = !1;
                const f = OC[o] || o;
                r += `${f}(${u}) `;
            }
            n && (t[o] = u);
        }
    }
    return (r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r;
}
function Zc(e, t, n) {
    const { style: r, vars: s, transformOrigin: i } = e;
    let o = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (zn.has(l)) {
            o = !0;
            continue;
        } else if (Hg(l)) {
            s[l] = u;
            continue;
        } else {
            const f = Zy(u, Dc[l]);
            l.startsWith("origin") ? ((a = !0), (i[l] = f)) : (r[l] = f);
        }
    }
    if (
        (t.transform ||
        (o || n
            ? (r.transform = jC(t, e.transform, n))
            : r.transform && (r.transform = "none")),
            a)
    ) {
        const { originX: l = "50%", originY: u = "50%", originZ: f = 0 } = i;
        r.transformOrigin = `${l} ${u} ${f}`;
    }
}
function Xh(e, t, n) {
    return typeof e == "string" ? e : D.transform(t + n * e);
}
function bC(e, t, n) {
    const r = Xh(t, e.x, e.width),
        s = Xh(n, e.y, e.height);
    return `${r} ${s}`;
}
const BC = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    $C = { offset: "strokeDashoffset", array: "strokeDasharray" };
function zC(e, t, n = 1, r = 0, s = !0) {
    e.pathLength = 1;
    const i = s ? BC : $C;
    e[i.offset] = D.transform(-r);
    const o = D.transform(t),
        a = D.transform(n);
    e[i.array] = `${o} ${a}`;
}
function ef(
    e,
    {
        attrX: t,
        attrY: n,
        attrScale: r,
        originX: s,
        originY: i,
        pathLength: o,
        pathSpacing: a = 1,
        pathOffset: l = 0,
        ...u
    },
    f,
    c,
) {
    if ((Zc(e, u, c), f)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: d, style: g, dimensions: y } = e;
    d.transform && (y && (g.transform = d.transform), delete d.transform),
    y &&
    (s !== void 0 || i !== void 0 || g.transform) &&
    (g.transformOrigin = bC(
        y,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5,
    )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && zC(d, o, a, l, !1);
}
const tf = (e) => typeof e == "string" && e.toLowerCase() === "svg",
    UC = {
        useVisualState: Jy({
            scrapeMotionValuesFromProps: Yy,
            createRenderState: qy,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
                W.read(() => {
                    try {
                        n.dimensions =
                            typeof t.getBBox == "function"
                                ? t.getBBox()
                                : t.getBoundingClientRect();
                    } catch {
                        n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                }),
                    W.render(() => {
                        ef(n, r, tf(t.tagName), e.transformTemplate), Gy(t, n);
                    });
            },
        }),
    },
    WC = {
        useVisualState: Jy({
            scrapeMotionValuesFromProps: Yc,
            createRenderState: qc,
        }),
    };
function e0(e, t, n) {
    for (const r in t) !ke(t[r]) && !Qy(r, n) && (e[r] = t[r]);
}
function HC({ transformTemplate: e }, t) {
    return C.useMemo(() => {
        const n = qc();
        return Zc(n, t, e), Object.assign({}, n.vars, n.style);
    }, [t]);
}
function KC(e, t) {
    const n = e.style || {},
        r = {};
    return e0(r, n, e), Object.assign(r, HC(e, t)), r;
}
function XC(e, t) {
    const n = {},
        r = KC(e, t);
    return (
        e.drag &&
        e.dragListener !== !1 &&
        ((n.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
                e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
        e.tabIndex === void 0 &&
        (e.onTap || e.onTapStart || e.whileTap) &&
        (n.tabIndex = 0),
            (n.style = r),
            n
    );
}
const GC = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
]);
function Fo(e) {
    return (
        e.startsWith("while") ||
        (e.startsWith("drag") && e !== "draggable") ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        GC.has(e)
    );
}
let t0 = (e) => !Fo(e);
function QC(e) {
    e && (t0 = (t) => (t.startsWith("on") ? !Fo(t) : e(t)));
}
try {
    QC(require("@emotion/is-prop-valid").default);
} catch {}
function YC(e, t, n) {
    const r = {};
    for (const s in e)
        (s === "values" && typeof e.values == "object") ||
        ((t0(s) ||
                (n === !0 && Fo(s)) ||
                (!t && !Fo(s)) ||
                (e.draggable && s.startsWith("onDrag"))) &&
            (r[s] = e[s]));
    return r;
}
function JC(e, t, n, r) {
    const s = C.useMemo(() => {
        const i = qy();
        return (
            ef(i, t, tf(r), e.transformTemplate),
                { ...i.attrs, style: { ...i.style } }
        );
    }, [t]);
    if (e.style) {
        const i = {};
        e0(i, e.style, e), (s.style = { ...i, ...s.style });
    }
    return s;
}
function qC(e = !1) {
    return (n, r, s, { latestValues: i }, o) => {
        const l = (Qc(n) ? JC : XC)(r, i, o, n),
            u = YC(r, typeof n == "string", e),
            f = n !== C.Fragment ? { ...u, ...l, ref: s } : {},
            { children: c } = r,
            d = C.useMemo(() => (ke(c) ? c.get() : c), [c]);
        return C.createElement(n, { ...f, children: d });
    };
}
function ZC(e, t) {
    return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
        const o = {
            ...(Qc(r) ? UC : WC),
            preloadedFeatures: e,
            useRender: qC(s),
            createVisualElement: t,
            Component: r,
        };
        return RC(o);
    };
}
const mu = { current: null },
    n0 = { current: !1 };
function eP() {
    if (((n0.current = !0), !!Gc))
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => (mu.current = e.matches);
            e.addListener(t), t();
        } else mu.current = !1;
}
function tP(e, t, n) {
    for (const r in t) {
        const s = t[r],
            i = n[r];
        if (ke(s)) e.addValue(r, s);
        else if (ke(i)) e.addValue(r, Hs(s, { owner: e }));
        else if (i !== s)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Hs(o !== void 0 ? o : s, { owner: e }));
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t;
}
const Gh = new WeakMap(),
    nP = [...Gg, Ce, dn],
    rP = (e) => nP.find(Xg(e)),
    Qh = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
    ];
class sP {
    scrapeMotionValuesFromProps(t, n, r) {
        return {};
    }
    constructor(
        {
            parent: t,
            props: n,
            presenceContext: r,
            reducedMotionConfig: s,
            blockInitialAnimation: i,
            visualState: o,
        },
        a = {},
    ) {
        (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = Mc),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
            (this.render = () => {
                this.current &&
                (this.triggerBuild(),
                    this.renderInstance(
                        this.current,
                        this.renderState,
                        this.props.style,
                        this.projection,
                    ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
                const d = kt.now();
                this.renderScheduledAt < d &&
                ((this.renderScheduledAt = d), W.render(this.render, !1, !0));
            });
        const { latestValues: l, renderState: u } = o;
        (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = n.initial ? { ...l } : {}),
            (this.renderState = u),
            (this.parent = t),
            (this.props = n),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = a),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = aa(n)),
            (this.isVariantNode = Hy(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
        const { willChange: f, ...c } = this.scrapeMotionValuesFromProps(
            n,
            {},
            this,
        );
        for (const d in c) {
            const g = c[d];
            l[d] !== void 0 && ke(g) && g.set(l[d], !1);
        }
    }
    mount(t) {
        (this.current = t),
            Gh.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
        n0.current || eP(),
            (this.shouldReduceMotion =
                this.reducedMotionConfig === "never"
                    ? !1
                    : this.reducedMotionConfig === "always"
                        ? !0
                        : mu.current),
        this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
    }
    unmount() {
        Gh.delete(this.current),
        this.projection && this.projection.unmount(),
            cn(this.notifyUpdate),
            cn(this.render),
            this.valueSubscriptions.forEach((t) => t()),
            this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), (n.isMounted = !1));
        }
        this.current = null;
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = zn.has(t),
            s = n.on("change", (a) => {
                (this.latestValues[t] = a),
                this.props.onUpdate && W.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync &&
        (o = window.MotionCheckAppearSync(this, t, n)),
            this.valueSubscriptions.set(t, () => {
                s(), i(), o && o(), n.owner && n.stop();
            });
    }
    sortNodePosition(t) {
        return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== t.type
            ? 0
            : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
        let t = "animation";
        for (t in Dr) {
            const n = Dr[t];
            if (!n) continue;
            const { isEnabled: r, Feature: s } = n;
            if (
                (!this.features[t] &&
                s &&
                r(this.props) &&
                (this.features[t] = new s(this)),
                    this.features[t])
            ) {
                const i = this.features[t];
                i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ne();
    }
    getStaticValue(t) {
        return this.latestValues[t];
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n;
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = n);
        for (let r = 0; r < Qh.length; r++) {
            const s = Qh[r];
            this.propEventSubscriptions[s] &&
            (this.propEventSubscriptions[s](),
                delete this.propEventSubscriptions[s]);
            const i = "on" + s,
                o = t[i];
            o && (this.propEventSubscriptions[s] = this.on(s, o));
        }
        (this.prevMotionValues = tP(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
        )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
        return this.props;
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : void 0;
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return (
                n.variantChildren && n.variantChildren.add(t),
                    () => n.variantChildren.delete(t)
            );
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r &&
        (r && this.removeValue(t),
            this.bindToMotionValue(t, n),
            this.values.set(t, n),
            (this.latestValues[t] = n.get()));
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
        return this.values.has(t);
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return (
            r === void 0 &&
            n !== void 0 &&
            ((r = Hs(n === null ? void 0 : n, { owner: this })),
                this.addValue(t, r)),
                r
        );
    }
    readValue(t, n) {
        var r;
        let s =
            this.latestValues[t] !== void 0 || !this.current
                ? this.latestValues[t]
                : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
                r !== void 0
                    ? r
                    : this.readValueFromInstance(this.current, t, this.options);
        return (
            s != null &&
            (typeof s == "string" && (Ug(s) || zg(s))
                ? (s = parseFloat(s))
                : !rP(s) && dn.test(n) && (s = ny(t, n)),
                this.setBaseTarget(t, ke(s) ? s.get() : s)),
                ke(s) ? s.get() : s
        );
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
        var n;
        const { initial: r } = this.props;
        let s;
        if (typeof r == "string" || typeof r == "object") {
            const o = Cc(
                this.props,
                r,
                (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
            );
            o && (s = o[t]);
        }
        if (r && s !== void 0) return s;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !ke(i)
            ? i
            : this.initialValues[t] !== void 0 && s === void 0
                ? void 0
                : this.baseTarget[t];
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Uc()), this.events[t].add(n);
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n);
    }
}
class r0 extends sP {
    constructor() {
        super(...arguments), (this.KeyframeResolver = ry);
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t], delete r[t];
    }
}
function iP(e) {
    return window.getComputedStyle(e);
}
class oP extends r0 {
    constructor() {
        super(...arguments), (this.type = "html"), (this.renderInstance = Ky);
    }
    readValueFromInstance(t, n) {
        if (zn.has(n)) {
            const r = Fc(n);
            return (r && r.default) || 0;
        } else {
            const r = iP(t),
                s = (Hg(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof s == "string" ? s.trim() : s;
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return Ry(t, n);
    }
    build(t, n, r) {
        Zc(t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Yc(t, n, r);
    }
    handleChildMotionValue() {
        this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
        const { children: t } = this.props;
        ke(t) &&
        (this.childSubscription = t.on("change", (n) => {
            this.current && (this.current.textContent = `${n}`);
        }));
    }
}
class aP extends r0 {
    constructor() {
        super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ne);
    }
    getBaseTargetFromProps(t, n) {
        return t[n];
    }
    readValueFromInstance(t, n) {
        if (zn.has(n)) {
            const r = Fc(n);
            return (r && r.default) || 0;
        }
        return (n = Xy.has(n) ? n : Wc(n)), t.getAttribute(n);
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Yy(t, n, r);
    }
    build(t, n, r) {
        ef(t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(t, n, r, s) {
        Gy(t, n, r, s);
    }
    mount(t) {
        (this.isSVGTag = tf(t.tagName)), super.mount(t);
    }
}
const lP = (e, t) =>
        Qc(e) ? new aP(t) : new oP(t, { allowProjection: e !== C.Fragment }),
    uP = ZC({ ...qS, ...xC, ...uC, ...SC }, lP),
    Fr = U1(uP);
class cP extends C.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            (r.height = n.offsetHeight || 0),
                (r.width = n.offsetWidth || 0),
                (r.top = n.offsetTop),
                (r.left = n.offsetLeft);
        }
        return null;
    }
    componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function fP({ children: e, isPresent: t }) {
    const n = C.useId(),
        r = C.useRef(null),
        s = C.useRef({ width: 0, height: 0, top: 0, left: 0 }),
        { nonce: i } = C.useContext(Xc);
    return (
        C.useInsertionEffect(() => {
            const { width: o, height: a, top: l, left: u } = s.current;
            if (t || !r.current || !o || !a) return;
            r.current.dataset.motionPopId = n;
            const f = document.createElement("style");
            return (
                i && (f.nonce = i),
                    document.head.appendChild(f),
                f.sheet &&
                f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
                    () => {
                        document.head.removeChild(f);
                    }
            );
        }, [t]),
            T.jsx(cP, {
                isPresent: t,
                childRef: r,
                sizeRef: s,
                children: C.cloneElement(e, { ref: r }),
            })
    );
}
const dP = ({
                children: e,
                initial: t,
                isPresent: n,
                onExitComplete: r,
                custom: s,
                presenceAffectsLayout: i,
                mode: o,
            }) => {
    const a = Jc(hP),
        l = C.useId(),
        u = C.useCallback(
            (c) => {
                a.set(c, !0);
                for (const d of a.values()) if (!d) return;
                r && r();
            },
            [a, r],
        ),
        f = C.useMemo(
            () => ({
                id: l,
                initial: t,
                isPresent: n,
                custom: s,
                onExitComplete: u,
                register: (c) => (a.set(c, !1), () => a.delete(c)),
            }),
            i ? [Math.random(), u] : [n, u],
        );
    return (
        C.useMemo(() => {
            a.forEach((c, d) => a.set(d, !1));
        }, [n]),
            C.useEffect(() => {
                !n && !a.size && r && r();
            }, [n]),
        o === "popLayout" && (e = T.jsx(fP, { isPresent: n, children: e })),
            T.jsx(ia.Provider, { value: f, children: e })
    );
};
function hP() {
    return new Map();
}
const Mi = (e) => e.key || "";
function Yh(e) {
    const t = [];
    return (
        C.Children.forEach(e, (n) => {
            C.isValidElement(n) && t.push(n);
        }),
            t
    );
}
const s0 = ({
                children: e,
                exitBeforeEnter: t,
                custom: n,
                initial: r = !0,
                onExitComplete: s,
                presenceAffectsLayout: i = !0,
                mode: o = "sync",
            }) => {
    const a = C.useMemo(() => Yh(e), [e]),
        l = a.map(Mi),
        u = C.useRef(!0),
        f = C.useRef(a),
        c = Jc(() => new Map()),
        [d, g] = C.useState(a),
        [y, v] = C.useState(a);
    zy(() => {
        (u.current = !1), (f.current = a);
        for (let h = 0; h < y.length; h++) {
            const p = Mi(y[h]);
            l.includes(p) ? c.delete(p) : c.get(p) !== !0 && c.set(p, !1);
        }
    }, [y, l.length, l.join("-")]);
    const x = [];
    if (a !== d) {
        let h = [...a];
        for (let p = 0; p < y.length; p++) {
            const w = y[p],
                S = Mi(w);
            l.includes(S) || (h.splice(p, 0, w), x.push(w));
        }
        o === "wait" && x.length && (h = x), v(Yh(h)), g(a);
        return;
    }
    const { forceRender: m } = C.useContext(Hc);
    return T.jsx(T.Fragment, {
        children: y.map((h) => {
            const p = Mi(h),
                w = a === y || l.includes(p),
                S = () => {
                    if (c.has(p)) c.set(p, !0);
                    else return;
                    let _ = !0;
                    c.forEach((P) => {
                        P || (_ = !1);
                    }),
                    _ && (m == null || m(), v(f.current), s && s());
                };
            return T.jsx(
                dP,
                {
                    isPresent: w,
                    initial: !u.current || r ? void 0 : !1,
                    custom: w ? void 0 : n,
                    presenceAffectsLayout: i,
                    mode: o,
                    onExitComplete: w ? void 0 : S,
                    children: h,
                },
                p,
            );
        }),
    });
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var pP = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mP = (e) =>
        e
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
    Un = (e, t) => {
        const n = C.forwardRef(
            (
                {
                    color: r = "currentColor",
                    size: s = 24,
                    strokeWidth: i = 2,
                    absoluteStrokeWidth: o,
                    className: a = "",
                    children: l,
                    ...u
                },
                f,
            ) =>
                C.createElement(
                    "svg",
                    {
                        ref: f,
                        ...pP,
                        width: s,
                        height: s,
                        stroke: r,
                        strokeWidth: o ? (Number(i) * 24) / Number(s) : i,
                        className: ["lucide", `lucide-${mP(e)}`, a].join(" "),
                        ...u,
                    },
                    [
                        ...t.map(([c, d]) => C.createElement(c, d)),
                        ...(Array.isArray(l) ? l : [l]),
                    ],
                ),
        );
        return (n.displayName = `${e}`), n;
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gP = Un("Copy", [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
        },
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
        },
    ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yP = Un("Earth", [
    ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
    [
        "path",
        {
            d: "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",
            key: "1fi5u6",
        },
    ],
    [
        "path",
        {
            d: "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
            key: "xsiumc",
        },
    ],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vP = Un("Mic", [
    [
        "path",
        {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961",
        },
    ],
    ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wP = Un("RotateCcw", [
    [
        "path",
        { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xP = Un("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f",
        },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SP = Un("Volume2", [
    ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
    ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
    ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _P = Un("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    CP = ({ value: e, onChange: t, detectedLanguage: n }) => {
        const r = [
                { code: "af", name: "Afrikaans" },
                { code: "ar", name: "Arabic" },
                { code: "hy", name: "Armenian" },
                { code: "az", name: "Azerbaijani" },
                { code: "be", name: "Belarusian" },
                { code: "bs", name: "Bosnian" },
                { code: "bg", name: "Bulgarian" },
                { code: "ca", name: "Catalan" },
                { code: "zh", name: "Chinese" },
                { code: "hr", name: "Croatian" },
                { code: "cs", name: "Czech" },
                { code: "da", name: "Danish" },
                { code: "nl", name: "Dutch" },
                { code: "en", name: "English" },
                { code: "et", name: "Estonian" },
                { code: "fi", name: "Finnish" },
                { code: "fr", name: "French" },
                { code: "gl", name: "Galician" },
                { code: "de", name: "German" },
                { code: "el", name: "Greek" },
                { code: "he", name: "Hebrew" },
                { code: "hi", name: "Hindi" },
                { code: "hu", name: "Hungarian" },
                { code: "is", name: "Icelandic" },
                { code: "id", name: "Indonesian" },
                { code: "it", name: "Italian" },
                { code: "ja", name: "Japanese" },
                { code: "kn", name: "Kannada" },
                { code: "kk", name: "Kazakh" },
                { code: "ko", name: "Korean" },
                { code: "lv", name: "Latvian" },
                { code: "lt", name: "Lithuanian" },
                { code: "mk", name: "Macedonian" },
                { code: "ms", name: "Malay" },
                { code: "mr", name: "Marathi" },
                { code: "mi", name: "Maori" },
                { code: "ne", name: "Nepali" },
                { code: "no", name: "Norwegian" },
                { code: "fa", name: "Persian" },
                { code: "pl", name: "Polish" },
                { code: "pt", name: "Portuguese" },
                { code: "ro", name: "Romanian" },
                { code: "ru", name: "Russian" },
                { code: "sr", name: "Serbian" },
                { code: "sk", name: "Slovak" },
                { code: "sl", name: "Slovenian" },
                { code: "es", name: "Spanish" },
                { code: "sw", name: "Swahili" },
                { code: "sv", name: "Swedish" },
                { code: "tl", name: "Tagalog" },
                { code: "ta", name: "Tamil" },
                { code: "th", name: "Thai" },
                { code: "tr", name: "Turkish" },
                { code: "uk", name: "Ukrainian" },
                { code: "ur", name: "Urdu" },
                { code: "vi", name: "Vietnamese" },
                { code: "cy", name: "Welsh" },
            ],
            s = (i) => {
                var o;
                return (
                    ((o = r.find((a) => a.code === i)) == null ? void 0 : o.name) ||
                    i.toUpperCase()
                );
            };
        return T.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
                n &&
                T.jsxs("div", {
                    className: "flex items-center gap-2 text-sm text-[#8E8E93]",
                    children: [
                        T.jsx(yP, { className: "w-4 h-4" }),
                        T.jsxs("span", { children: ["From: ", s(n)] }),
                    ],
                }),
                T.jsxs("select", {
                    value: e,
                    onChange: (i) => t(i.target.value),
                    className:
                        "px-3 py-1.5 rounded-lg text-[#007AFF] bg-[#F2F2F7] dark:bg-[#2C2C2E] border border-[#E5E5EA] dark:border-[#3A3A3C] focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all duration-200",
                    children: [
                        T.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select language",
                        }),
                        r.map((i) =>
                            T.jsx("option", { value: i.code, children: i.name }, i.code),
                        ),
                    ],
                }),
            ],
        });
    },
    Jh = ({
              value: e,
              onChange: t,
              placeholder: n,
              readOnly: r,
              actions: s,
              isProcessing: i,
          }) =>
        T.jsxs("div", {
            className: "relative",
            children: [
                T.jsx("textarea", {
                    value: e,
                    onChange: (o) => (t == null ? void 0 : t(o.target.value)),
                    placeholder: n,
                    readOnly: r,
                    className: `w-full h-40 p-4 rounded-lg bg-transparent text-[#1C1C1E] dark:text-white placeholder-[#8E8E93] focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all duration-200 resize-none ${r ? "bg-[#F2F2F7] dark:bg-[#2C2C2E]" : ""}`,
                }),
                i &&
                T.jsx("div", {
                    className:
                        "absolute inset-0 bg-black/5 dark:bg-black/20 backdrop-blur-sm rounded-lg flex items-center justify-center",
                    children: T.jsxs("div", {
                        className: "flex items-center gap-3 text-[#8E8E93]",
                        children: [
                            T.jsx(Fr.div, {
                                className:
                                    "w-4 h-4 border-2 border-current border-t-transparent rounded-full",
                                animate: { rotate: 360 },
                                transition: { duration: 1, repeat: 1 / 0, ease: "linear" },
                            }),
                            "Processing...",
                        ],
                    }),
                }),
                s &&
                T.jsx(Fr.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "absolute bottom-4 right-4 flex gap-2",
                    children: s,
                }),
            ],
        }),
    PP = {
        defaultTargetLanguage: "es",
        voiceGender: "nova",
        autoPlayTranslation: !0,
    },
    i0 = C.createContext(void 0),
    kP = ({ children: e }) => {
        const [t, n] = C.useState(() => {
                const s = localStorage.getItem("translatorSettings");
                return s ? JSON.parse(s) : PP;
            }),
            r = (s) => {
                const i = { ...t, ...s };
                n(i), localStorage.setItem("translatorSettings", JSON.stringify(i));
            };
        return T.jsx(i0.Provider, {
            value: { settings: t, updateSettings: r },
            children: e,
        });
    },
    nf = () => {
        const e = C.useContext(i0);
        if (!e)
            throw new Error("useSettings must be used within a SettingsProvider");
        return e;
    },
    EP = ({ isOpen: e, onClose: t }) => {
        const { settings: n, updateSettings: r } = nf(),
            s = [
                { id: "alloy", name: "Alloy (American, English or French)" },
                { id: "ash", name: "Ash (American Male, English)" },
                { id: "ballad", name: "Ballad (British Male, English)" },
                { id: "coral", name: "Coral (American Female, English)" },
                { id: "echo", name: "Echo (American Male, English or French)" },
                { id: "fable", name: "Fable (British Male, English or German)" },
                { id: "nova", name: "Nova (American Female, English or Spanish)" },
                { id: "onyx", name: "Onyx (American Male, English or German)" },
                { id: "sage", name: "Sage (American Female, English)" },
                { id: "shimmer", name: "Shimmer (American Female, English or Japanese)" },
                { id: "verse", name: "Verse (American Male, English)"}
            ],
            i = [
                { code: "af", name: "Afrikaans" },
                { code: "ar", name: "Arabic" },
                { code: "hy", name: "Armenian" },
                { code: "az", name: "Azerbaijani" },
                { code: "be", name: "Belarusian" },
                { code: "bs", name: "Bosnian" },
                { code: "bg", name: "Bulgarian" },
                { code: "ca", name: "Catalan" },
                { code: "zh", name: "Chinese" },
                { code: "hr", name: "Croatian" },
                { code: "cs", name: "Czech" },
                { code: "da", name: "Danish" },
                { code: "nl", name: "Dutch" },
                { code: "en", name: "English" },
                { code: "et", name: "Estonian" },
                { code: "fi", name: "Finnish" },
                { code: "fr", name: "French" },
                { code: "gl", name: "Galician" },
                { code: "de", name: "German" },
                { code: "el", name: "Greek" },
                { code: "he", name: "Hebrew" },
                { code: "hi", name: "Hindi" },
                { code: "hu", name: "Hungarian" },
                { code: "is", name: "Icelandic" },
                { code: "id", name: "Indonesian" },
                { code: "it", name: "Italian" },
                { code: "ja", name: "Japanese" },
                { code: "kn", name: "Kannada" },
                { code: "kk", name: "Kazakh" },
                { code: "ko", name: "Korean" },
                { code: "lv", name: "Latvian" },
                { code: "lt", name: "Lithuanian" },
                { code: "mk", name: "Macedonian" },
                { code: "ms", name: "Malay" },
                { code: "mr", name: "Marathi" },
                { code: "mi", name: "Maori" },
                { code: "ne", name: "Nepali" },
                { code: "no", name: "Norwegian" },
                { code: "fa", name: "Persian" },
                { code: "pl", name: "Polish" },
                { code: "pt", name: "Portuguese" },
                { code: "ro", name: "Romanian" },
                { code: "ru", name: "Russian" },
                { code: "sr", name: "Serbian" },
                { code: "sk", name: "Slovak" },
                { code: "sl", name: "Slovenian" },
                { code: "es", name: "Spanish" },
                { code: "sw", name: "Swahili" },
                { code: "sv", name: "Swedish" },
                { code: "tl", name: "Tagalog" },
                { code: "ta", name: "Tamil" },
                { code: "th", name: "Thai" },
                { code: "tr", name: "Turkish" },
                { code: "uk", name: "Ukrainian" },
                { code: "ur", name: "Urdu" },
                { code: "vi", name: "Vietnamese" },
                { code: "cy", name: "Welsh" },
            ];
        return T.jsx(s0, {
            children:
                e &&
                T.jsxs(T.Fragment, {
                    children: [
                        T.jsx(Fr.div, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40",
                            onClick: t,
                        }),
                        T.jsxs(Fr.div, {
                            initial: { opacity: 0, scale: 0.95 },
                            animate: { opacity: 1, scale: 1 },
                            exit: { opacity: 0, scale: 0.95 },
                            className:
                                "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#2C2C2E] rounded-2xl shadow-xl z-50 p-6",
                            children: [
                                T.jsxs("div", {
                                    className: "flex justify-between items-center mb-6",
                                    children: [
                                        T.jsx("h2", {
                                            className: "text-xl font-semibold text-white",
                                            children: "Settings",
                                        }),
                                        T.jsx("button", {
                                            onClick: t,
                                            className:
                                                "p-2 rounded-full hover:bg-[#3A3A3C] transition-colors",
                                            children: T.jsx(_P, { className: "w-5 h-5" }),
                                        }),
                                    ],
                                }),
                                T.jsxs("div", {
                                    className: "space-y-6",
                                    children: [
                                        T.jsxs("div", {
                                            children: [
                                                T.jsx("label", {
                                                    className:
                                                        "block text-sm font-medium text-[#8E8E93] mb-2",
                                                    children: "Default Target Language",
                                                }),
                                                T.jsx("select", {
                                                    value: n.defaultTargetLanguage,
                                                    onChange: (o) =>
                                                        r({ defaultTargetLanguage: o.target.value }),
                                                    className:
                                                        "w-full px-3 py-2 rounded-lg bg-[#3A3A3C] text-white border border-[#48484A] focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all duration-200",
                                                    children: i.map((o) =>
                                                        T.jsx(
                                                            "option",
                                                            { value: o.code, children: o.name },
                                                            o.code,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        T.jsxs("div", {
                                            children: [
                                                T.jsx("label", {
                                                    className:
                                                        "block text-sm font-medium text-[#8E8E93] mb-2",
                                                    children: "Voice",
                                                }),
                                                T.jsx("select", {
                                                    value: n.voiceGender,
                                                    onChange: (o) => r({ voiceGender: o.target.value }),
                                                    className:
                                                        "w-full px-3 py-2 rounded-lg bg-[#3A3A3C] text-white border border-[#48484A] focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all duration-200",
                                                    children: s.map((o) =>
                                                        T.jsx(
                                                            "option",
                                                            { value: o.id, children: o.name },
                                                            o.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        T.jsxs("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                T.jsx("span", {
                                                    className: "text-sm font-medium text-[#8E8E93]",
                                                    children: "Auto-play translations",
                                                }),
                                                T.jsxs("label", {
                                                    className:
                                                        "relative inline-flex items-center cursor-pointer",
                                                    children: [
                                                        T.jsx("input", {
                                                            type: "checkbox",
                                                            checked: n.autoPlayTranslation,
                                                            onChange: (o) =>
                                                                r({ autoPlayTranslation: o.target.checked }),
                                                            className: "sr-only peer",
                                                        }),
                                                        T.jsx("div", {
                                                            className:
                                                                "w-11 h-6 bg-[#3A3A3C] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#007AFF] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        });
    },
    TP = () => {
        const [e, t] = C.useState(!1);
        return T.jsxs("header", {
            className: "bg-[#1C1C1E] sticky top-0 z-10",
            children: [
                T.jsxs("div", {
                    className:
                        "container mx-auto px-4 py-3 flex justify-between items-center max-w-3xl",
                    children: [
                        T.jsx("div", {
                            className: "flex items-center gap-2",
                            children: T.jsx("h1", {
                                className: "text-xl font-semibold text-white",
                                children: "Translate",
                            }),
                        }),
                        T.jsx("button", {
                            onClick: () => t(!0),
                            className:
                                "p-2 rounded-full text-[#007AFF] hover:bg-[#2C2C2E] transition-colors",
                            children: T.jsx(xP, { className: "w-5 h-5" }),
                        }),
                    ],
                }),
                T.jsx(EP, { isOpen: e, onClose: () => t(!1) }),
            ],
        });
    },
    gu = "RFC3986",
    yu = {
        RFC1738: (e) => String(e).replace(/%20/g, "+"),
        RFC3986: (e) => String(e),
    },
    AP = "RFC1738",
    RP = Array.isArray,
    gt = (() => {
        const e = [];
        for (let t = 0; t < 256; ++t)
            e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
    })(),
    qa = 1024,
    MP = (e, t, n, r, s) => {
        if (e.length === 0) return e;
        let i = e;
        if (
            (typeof e == "symbol"
                ? (i = Symbol.prototype.toString.call(e))
                : typeof e != "string" && (i = String(e)),
            n === "iso-8859-1")
        )
            return escape(i).replace(/%u[0-9a-f]{4}/gi, function (a) {
                return "%26%23" + parseInt(a.slice(2), 16) + "%3B";
            });
        let o = "";
        for (let a = 0; a < i.length; a += qa) {
            const l = i.length >= qa ? i.slice(a, a + qa) : i,
                u = [];
            for (let f = 0; f < l.length; ++f) {
                let c = l.charCodeAt(f);
                if (
                    c === 45 ||
                    c === 46 ||
                    c === 95 ||
                    c === 126 ||
                    (c >= 48 && c <= 57) ||
                    (c >= 65 && c <= 90) ||
                    (c >= 97 && c <= 122) ||
                    (s === AP && (c === 40 || c === 41))
                ) {
                    u[u.length] = l.charAt(f);
                    continue;
                }
                if (c < 128) {
                    u[u.length] = gt[c];
                    continue;
                }
                if (c < 2048) {
                    u[u.length] = gt[192 | (c >> 6)] + gt[128 | (c & 63)];
                    continue;
                }
                if (c < 55296 || c >= 57344) {
                    u[u.length] =
                        gt[224 | (c >> 12)] +
                        gt[128 | ((c >> 6) & 63)] +
                        gt[128 | (c & 63)];
                    continue;
                }
                (f += 1),
                    (c = 65536 + (((c & 1023) << 10) | (l.charCodeAt(f) & 1023))),
                    (u[u.length] =
                        gt[240 | (c >> 18)] +
                        gt[128 | ((c >> 12) & 63)] +
                        gt[128 | ((c >> 6) & 63)] +
                        gt[128 | (c & 63)]);
            }
            o += u.join("");
        }
        return o;
    };
function LP(e) {
    return !e || typeof e != "object"
        ? !1
        : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function qh(e, t) {
    if (RP(e)) {
        const n = [];
        for (let r = 0; r < e.length; r += 1) n.push(t(e[r]));
        return n;
    }
    return t(e);
}
const NP = Object.prototype.hasOwnProperty,
    o0 = {
        brackets(e) {
            return String(e) + "[]";
        },
        comma: "comma",
        indices(e, t) {
            return String(e) + "[" + t + "]";
        },
        repeat(e) {
            return String(e);
        },
    },
    vt = Array.isArray,
    DP = Array.prototype.push,
    a0 = function (e, t) {
        DP.apply(e, vt(t) ? t : [t]);
    },
    FP = Date.prototype.toISOString,
    ae = {
        addQueryPrefix: !1,
        allowDots: !1,
        allowEmptyArrays: !1,
        arrayFormat: "indices",
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encodeDotInKeys: !1,
        encoder: MP,
        encodeValuesOnly: !1,
        format: gu,
        formatter: yu[gu],
        indices: !1,
        serializeDate(e) {
            return FP.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    };
function IP(e) {
    return (
        typeof e == "string" ||
        typeof e == "number" ||
        typeof e == "boolean" ||
        typeof e == "symbol" ||
        typeof e == "bigint"
    );
}
const Za = {};
function l0(e, t, n, r, s, i, o, a, l, u, f, c, d, g, y, v, x, m) {
    let h = e,
        p = m,
        w = 0,
        S = !1;
    for (; (p = p.get(Za)) !== void 0 && !S; ) {
        const R = p.get(e);
        if (((w += 1), typeof R < "u")) {
            if (R === w) throw new RangeError("Cyclic object value");
            S = !0;
        }
        typeof p.get(Za) > "u" && (w = 0);
    }
    if (
        (typeof u == "function"
            ? (h = u(t, h))
            : h instanceof Date
                ? (h = d == null ? void 0 : d(h))
                : n === "comma" &&
                vt(h) &&
                (h = qh(h, function (R) {
                    return R instanceof Date ? (d == null ? void 0 : d(R)) : R;
                })),
        h === null)
    ) {
        if (i) return l && !v ? l(t, ae.encoder, x, "key", g) : t;
        h = "";
    }
    if (IP(h) || LP(h)) {
        if (l) {
            const R = v ? t : l(t, ae.encoder, x, "key", g);
            return [
                (y == null ? void 0 : y(R)) +
                "=" +
                (y == null ? void 0 : y(l(h, ae.encoder, x, "value", g))),
            ];
        }
        return [
            (y == null ? void 0 : y(t)) + "=" + (y == null ? void 0 : y(String(h))),
        ];
    }
    const _ = [];
    if (typeof h > "u") return _;
    let P;
    if (n === "comma" && vt(h))
        v && l && (h = qh(h, l)),
            (P = [{ value: h.length > 0 ? h.join(",") || null : void 0 }]);
    else if (vt(u)) P = u;
    else {
        const R = Object.keys(h);
        P = f ? R.sort(f) : R;
    }
    const k = a ? String(t).replace(/\./g, "%2E") : String(t),
        N = r && vt(h) && h.length === 1 ? k + "[]" : k;
    if (s && vt(h) && h.length === 0) return N + "[]";
    for (let R = 0; R < P.length; ++R) {
        const F = P[R],
            Ae = typeof F == "object" && typeof F.value < "u" ? F.value : h[F];
        if (o && Ae === null) continue;
        const rt = c && a ? F.replace(/\./g, "%2E") : F,
            yn = vt(h)
                ? typeof n == "function"
                    ? n(N, rt)
                    : N
                : N + (c ? "." + rt : "[" + rt + "]");
        m.set(e, w);
        const Ur = new WeakMap();
        Ur.set(Za, m),
            a0(
                _,
                l0(
                    Ae,
                    yn,
                    n,
                    r,
                    s,
                    i,
                    o,
                    a,
                    n === "comma" && v && vt(h) ? null : l,
                    u,
                    f,
                    c,
                    d,
                    g,
                    y,
                    v,
                    x,
                    Ur,
                ),
            );
    }
    return _;
}
function OP(e = ae) {
    if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
        throw new TypeError(
            "`allowEmptyArrays` option can only be `true` or `false`, when provided",
        );
    if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
        throw new TypeError(
            "`encodeDotInKeys` option can only be `true` or `false`, when provided",
        );
    if (
        e.encoder !== null &&
        typeof e.encoder < "u" &&
        typeof e.encoder != "function"
    )
        throw new TypeError("Encoder has to be a function.");
    const t = e.charset || ae.charset;
    if (
        typeof e.charset < "u" &&
        e.charset !== "utf-8" &&
        e.charset !== "iso-8859-1"
    )
        throw new TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined",
        );
    let n = gu;
    if (typeof e.format < "u") {
        if (!NP.call(yu, e.format))
            throw new TypeError("Unknown format option provided.");
        n = e.format;
    }
    const r = yu[n];
    let s = ae.filter;
    (typeof e.filter == "function" || vt(e.filter)) && (s = e.filter);
    let i;
    if (
        (e.arrayFormat && e.arrayFormat in o0
            ? (i = e.arrayFormat)
            : "indices" in e
                ? (i = e.indices ? "indices" : "repeat")
                : (i = ae.arrayFormat),
        "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    )
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    const o =
        typeof e.allowDots > "u"
            ? e.encodeDotInKeys
                ? !0
                : ae.allowDots
            : !!e.allowDots;
    return {
        addQueryPrefix:
            typeof e.addQueryPrefix == "boolean"
                ? e.addQueryPrefix
                : ae.addQueryPrefix,
        allowDots: o,
        allowEmptyArrays:
            typeof e.allowEmptyArrays == "boolean"
                ? !!e.allowEmptyArrays
                : ae.allowEmptyArrays,
        arrayFormat: i,
        charset: t,
        charsetSentinel:
            typeof e.charsetSentinel == "boolean"
                ? e.charsetSentinel
                : ae.charsetSentinel,
        commaRoundTrip: !!e.commaRoundTrip,
        delimiter: typeof e.delimiter > "u" ? ae.delimiter : e.delimiter,
        encode: typeof e.encode == "boolean" ? e.encode : ae.encode,
        encodeDotInKeys:
            typeof e.encodeDotInKeys == "boolean"
                ? e.encodeDotInKeys
                : ae.encodeDotInKeys,
        encoder: typeof e.encoder == "function" ? e.encoder : ae.encoder,
        encodeValuesOnly:
            typeof e.encodeValuesOnly == "boolean"
                ? e.encodeValuesOnly
                : ae.encodeValuesOnly,
        filter: s,
        format: n,
        formatter: r,
        serializeDate:
            typeof e.serializeDate == "function" ? e.serializeDate : ae.serializeDate,
        skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : ae.skipNulls,
        sort: typeof e.sort == "function" ? e.sort : null,
        strictNullHandling:
            typeof e.strictNullHandling == "boolean"
                ? e.strictNullHandling
                : ae.strictNullHandling,
    };
}
function VP(e, t = {}) {
    let n = e;
    const r = OP(t);
    let s, i;
    typeof r.filter == "function"
        ? ((i = r.filter), (n = i("", n)))
        : vt(r.filter) && ((i = r.filter), (s = i));
    const o = [];
    if (typeof n != "object" || n === null) return "";
    const a = o0[r.arrayFormat],
        l = a === "comma" && r.commaRoundTrip;
    s || (s = Object.keys(n)), r.sort && s.sort(r.sort);
    const u = new WeakMap();
    for (let d = 0; d < s.length; ++d) {
        const g = s[d];
        (r.skipNulls && n[g] === null) ||
        a0(
            o,
            l0(
                n[g],
                g,
                a,
                l,
                r.allowEmptyArrays,
                r.strictNullHandling,
                r.skipNulls,
                r.encodeDotInKeys,
                r.encode ? r.encoder : null,
                r.filter,
                r.sort,
                r.allowDots,
                r.serializeDate,
                r.format,
                r.formatter,
                r.encodeValuesOnly,
                r.charset,
                u,
            ),
        );
    }
    const f = o.join(r.delimiter);
    let c = r.addQueryPrefix === !0 ? "?" : "";
    return (
        r.charsetSentinel &&
        (r.charset === "iso-8859-1"
            ? (c += "utf8=%26%2310003%3B&")
            : (c += "utf8=%E2%9C%93&")),
            f.length > 0 ? c + f : ""
    );
}
const Gn = "4.70.2";
let Zh = !1,
    Cs,
    u0,
    c0,
    vu,
    f0,
    d0,
    h0,
    p0,
    m0;
function jP(e, t = { auto: !1 }) {
    if (Zh)
        throw new Error(
            `you must \`import 'openai/shims/${e.kind}'\` before importing anything else from openai`,
        );
    if (Cs)
        throw new Error(
            `can't \`import 'openai/shims/${e.kind}'\` after \`import 'openai/shims/${Cs}'\``,
        );
    (Zh = t.auto),
        (Cs = e.kind),
        (u0 = e.fetch),
        (c0 = e.FormData),
        (vu = e.File),
        (f0 = e.ReadableStream),
        (d0 = e.getMultipartRequestOptions),
        (h0 = e.getDefaultAgent),
        (p0 = e.fileFromPath),
        (m0 = e.isFsReadStream);
}
class bP {
    constructor(t) {
        this.body = t;
    }
    get [Symbol.toStringTag]() {
        return "MultipartBody";
    }
}
function BP({ manuallyImported: e } = {}) {
    const t = e
        ? "You may need to use polyfills"
        : "Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";
    let n, r, s, i;
    try {
        (n = fetch), (r = Request), (s = Response), (i = Headers);
    } catch (o) {
        throw new Error(
            `this environment is missing the following Web Fetch API type: ${o.message}. ${t}`,
        );
    }
    return {
        kind: "web",
        fetch: n,
        Request: r,
        Response: s,
        Headers: i,
        FormData:
            typeof FormData < "u"
                ? FormData
                : class {
                    constructor() {
                        throw new Error(
                            `file uploads aren't supported in this environment yet as 'FormData' is undefined. ${t}`,
                        );
                    }
                },
        Blob:
            typeof Blob < "u"
                ? Blob
                : class {
                    constructor() {
                        throw new Error(
                            `file uploads aren't supported in this environment yet as 'Blob' is undefined. ${t}`,
                        );
                    }
                },
        File:
            typeof File < "u"
                ? File
                : class {
                    constructor() {
                        throw new Error(
                            `file uploads aren't supported in this environment yet as 'File' is undefined. ${t}`,
                        );
                    }
                },
        ReadableStream:
            typeof ReadableStream < "u"
                ? ReadableStream
                : class {
                    constructor() {
                        throw new Error(
                            `streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${t}`,
                        );
                    }
                },
        getMultipartRequestOptions: async (o, a) => ({ ...a, body: new bP(o) }),
        getDefaultAgent: (o) => {},
        fileFromPath: () => {
            throw new Error(
                "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads",
            );
        },
        isFsReadStream: (o) => !1,
    };
}
Cs || jP(BP(), { auto: !0 });
class j extends Error {}
class we extends j {
    constructor(t, n, r, s) {
        super(`${we.makeMessage(t, n, r)}`),
            (this.status = t),
            (this.headers = s),
            (this.request_id = s == null ? void 0 : s["x-request-id"]);
        const i = n;
        (this.error = i),
            (this.code = i == null ? void 0 : i.code),
            (this.param = i == null ? void 0 : i.param),
            (this.type = i == null ? void 0 : i.type);
    }
    static makeMessage(t, n, r) {
        const s =
            n != null && n.message
                ? typeof n.message == "string"
                    ? n.message
                    : JSON.stringify(n.message)
                : n
                    ? JSON.stringify(n)
                    : r;
        return t && s
            ? `${t} ${s}`
            : t
                ? `${t} status code (no body)`
                : s || "(no status code or body)";
    }
    static generate(t, n, r, s) {
        if (!t) return new la({ message: r, cause: xu(n) });
        const i = n == null ? void 0 : n.error;
        return t === 400
            ? new g0(t, i, r, s)
            : t === 401
                ? new y0(t, i, r, s)
                : t === 403
                    ? new v0(t, i, r, s)
                    : t === 404
                        ? new w0(t, i, r, s)
                        : t === 409
                            ? new x0(t, i, r, s)
                            : t === 422
                                ? new S0(t, i, r, s)
                                : t === 429
                                    ? new _0(t, i, r, s)
                                    : t >= 500
                                        ? new C0(t, i, r, s)
                                        : new we(t, i, r, s);
    }
}
class ct extends we {
    constructor({ message: t } = {}) {
        super(void 0, void 0, t || "Request was aborted.", void 0),
            (this.status = void 0);
    }
}
class la extends we {
    constructor({ message: t, cause: n }) {
        super(void 0, void 0, t || "Connection error.", void 0),
            (this.status = void 0),
        n && (this.cause = n);
    }
}
class rf extends la {
    constructor({ message: t } = {}) {
        super({ message: t ?? "Request timed out." });
    }
}
class g0 extends we {
    constructor() {
        super(...arguments), (this.status = 400);
    }
}
class y0 extends we {
    constructor() {
        super(...arguments), (this.status = 401);
    }
}
class v0 extends we {
    constructor() {
        super(...arguments), (this.status = 403);
    }
}
class w0 extends we {
    constructor() {
        super(...arguments), (this.status = 404);
    }
}
class x0 extends we {
    constructor() {
        super(...arguments), (this.status = 409);
    }
}
class S0 extends we {
    constructor() {
        super(...arguments), (this.status = 422);
    }
}
class _0 extends we {
    constructor() {
        super(...arguments), (this.status = 429);
    }
}
class C0 extends we {}
class P0 extends j {
    constructor() {
        super("Could not parse response content as the length limit was reached");
    }
}
class k0 extends j {
    constructor() {
        super(
            "Could not parse response content as the request was rejected by the content filter",
        );
    }
}
class bn {
    constructor() {
        (this.buffer = []), (this.trailingCR = !1);
    }
    decode(t) {
        let n = this.decodeText(t);
        if (
            (this.trailingCR && ((n = "\r" + n), (this.trailingCR = !1)),
            n.endsWith("\r") && ((this.trailingCR = !0), (n = n.slice(0, -1))),
                !n)
        )
            return [];
        const r = bn.NEWLINE_CHARS.has(n[n.length - 1] || "");
        let s = n.split(bn.NEWLINE_REGEXP);
        return (
            r && s.pop(),
                s.length === 1 && !r
                    ? (this.buffer.push(s[0]), [])
                    : (this.buffer.length > 0 &&
                    ((s = [this.buffer.join("") + s[0], ...s.slice(1)]),
                        (this.buffer = [])),
                    r || (this.buffer = [s.pop() || ""]),
                        s)
        );
    }
    decodeText(t) {
        if (t == null) return "";
        if (typeof t == "string") return t;
        if (typeof Buffer < "u") {
            if (t instanceof Buffer) return t.toString();
            if (t instanceof Uint8Array) return Buffer.from(t).toString();
            throw new j(
                `Unexpected: received non-Uint8Array (${t.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`,
            );
        }
        if (typeof TextDecoder < "u") {
            if (t instanceof Uint8Array || t instanceof ArrayBuffer)
                return (
                    this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")),
                        this.textDecoder.decode(t)
                );
            throw new j(
                `Unexpected: received non-Uint8Array/ArrayBuffer (${t.constructor.name}) in a web platform. Please report this error.`,
            );
        }
        throw new j(
            "Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.",
        );
    }
    flush() {
        if (!this.buffer.length && !this.trailingCR) return [];
        const t = [this.buffer.join("")];
        return (this.buffer = []), (this.trailingCR = !1), t;
    }
}
bn.NEWLINE_CHARS = new Set([
    `
`,
    "\r",
]);
bn.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
class St {
    constructor(t, n) {
        (this.iterator = t), (this.controller = n);
    }
    static fromSSEResponse(t, n) {
        let r = !1;
        async function* s() {
            if (r)
                throw new Error(
                    "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
                );
            r = !0;
            let i = !1;
            try {
                for await (const o of $P(t, n))
                    if (!i) {
                        if (o.data.startsWith("[DONE]")) {
                            i = !0;
                            continue;
                        }
                        if (o.event === null) {
                            let a;
                            try {
                                a = JSON.parse(o.data);
                            } catch (l) {
                                throw (
                                    (console.error("Could not parse message into JSON:", o.data),
                                        console.error("From chunk:", o.raw),
                                        l)
                                );
                            }
                            if (a && a.error) throw new we(void 0, a.error, void 0, void 0);
                            yield a;
                        } else {
                            let a;
                            try {
                                a = JSON.parse(o.data);
                            } catch (l) {
                                throw (
                                    (console.error("Could not parse message into JSON:", o.data),
                                        console.error("From chunk:", o.raw),
                                        l)
                                );
                            }
                            if (o.event == "error")
                                throw new we(void 0, a.error, a.message, void 0);
                            yield { event: o.event, data: a };
                        }
                    }
                i = !0;
            } catch (o) {
                if (o instanceof Error && o.name === "AbortError") return;
                throw o;
            } finally {
                i || n.abort();
            }
        }
        return new St(s, n);
    }
    static fromReadableStream(t, n) {
        let r = !1;
        async function* s() {
            const o = new bn(),
                a = E0(t);
            for await (const l of a) for (const u of o.decode(l)) yield u;
            for (const l of o.flush()) yield l;
        }
        async function* i() {
            if (r)
                throw new Error(
                    "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
                );
            r = !0;
            let o = !1;
            try {
                for await (const a of s()) o || (a && (yield JSON.parse(a)));
                o = !0;
            } catch (a) {
                if (a instanceof Error && a.name === "AbortError") return;
                throw a;
            } finally {
                o || n.abort();
            }
        }
        return new St(i, n);
    }
    [Symbol.asyncIterator]() {
        return this.iterator();
    }
    tee() {
        const t = [],
            n = [],
            r = this.iterator(),
            s = (i) => ({
                next: () => {
                    if (i.length === 0) {
                        const o = r.next();
                        t.push(o), n.push(o);
                    }
                    return i.shift();
                },
            });
        return [
            new St(() => s(t), this.controller),
            new St(() => s(n), this.controller),
        ];
    }
    toReadableStream() {
        const t = this;
        let n;
        const r = new TextEncoder();
        return new f0({
            async start() {
                n = t[Symbol.asyncIterator]();
            },
            async pull(s) {
                try {
                    const { value: i, done: o } = await n.next();
                    if (o) return s.close();
                    const a = r.encode(
                        JSON.stringify(i) +
                        `
`,
                    );
                    s.enqueue(a);
                } catch (i) {
                    s.error(i);
                }
            },
            async cancel() {
                var s;
                await ((s = n.return) == null ? void 0 : s.call(n));
            },
        });
    }
}
async function* $P(e, t) {
    if (!e.body)
        throw (
            (t.abort(), new j("Attempted to iterate over a response with no body"))
        );
    const n = new WP(),
        r = new bn(),
        s = E0(e.body);
    for await (const i of zP(s))
        for (const o of r.decode(i)) {
            const a = n.decode(o);
            a && (yield a);
        }
    for (const i of r.flush()) {
        const o = n.decode(i);
        o && (yield o);
    }
}
async function* zP(e) {
    let t = new Uint8Array();
    for await (const n of e) {
        if (n == null) continue;
        const r =
            n instanceof ArrayBuffer
                ? new Uint8Array(n)
                : typeof n == "string"
                    ? new TextEncoder().encode(n)
                    : n;
        let s = new Uint8Array(t.length + r.length);
        s.set(t), s.set(r, t.length), (t = s);
        let i;
        for (; (i = UP(t)) !== -1; ) yield t.slice(0, i), (t = t.slice(i));
    }
    t.length > 0 && (yield t);
}
function UP(e) {
    for (let r = 0; r < e.length - 2; r++) {
        if ((e[r] === 10 && e[r + 1] === 10) || (e[r] === 13 && e[r + 1] === 13))
            return r + 2;
        if (
            e[r] === 13 &&
            e[r + 1] === 10 &&
            r + 3 < e.length &&
            e[r + 2] === 13 &&
            e[r + 3] === 10
        )
            return r + 4;
    }
    return -1;
}
class WP {
    constructor() {
        (this.event = null), (this.data = []), (this.chunks = []);
    }
    decode(t) {
        if ((t.endsWith("\r") && (t = t.substring(0, t.length - 1)), !t)) {
            if (!this.event && !this.data.length) return null;
            const i = {
                event: this.event,
                data: this.data.join(`
`),
                raw: this.chunks,
            };
            return (this.event = null), (this.data = []), (this.chunks = []), i;
        }
        if ((this.chunks.push(t), t.startsWith(":"))) return null;
        let [n, r, s] = HP(t, ":");
        return (
            s.startsWith(" ") && (s = s.substring(1)),
                n === "event" ? (this.event = s) : n === "data" && this.data.push(s),
                null
        );
    }
}
function HP(e, t) {
    const n = e.indexOf(t);
    return n !== -1
        ? [e.substring(0, n), t, e.substring(n + t.length)]
        : [e, "", ""];
}
function E0(e) {
    if (e[Symbol.asyncIterator]) return e;
    const t = e.getReader();
    return {
        async next() {
            try {
                const n = await t.read();
                return n != null && n.done && t.releaseLock(), n;
            } catch (n) {
                throw (t.releaseLock(), n);
            }
        },
        async return() {
            const n = t.cancel();
            return t.releaseLock(), await n, { done: !0, value: void 0 };
        },
        [Symbol.asyncIterator]() {
            return this;
        },
    };
}
const T0 = (e) =>
        e != null &&
        typeof e == "object" &&
        typeof e.url == "string" &&
        typeof e.blob == "function",
    A0 = (e) =>
        e != null &&
        typeof e == "object" &&
        typeof e.name == "string" &&
        typeof e.lastModified == "number" &&
        ua(e),
    ua = (e) =>
        e != null &&
        typeof e == "object" &&
        typeof e.size == "number" &&
        typeof e.type == "string" &&
        typeof e.text == "function" &&
        typeof e.slice == "function" &&
        typeof e.arrayBuffer == "function",
    KP = (e) => A0(e) || T0(e) || m0(e);
async function R0(e, t, n) {
    var s;
    if (((e = await e), A0(e))) return e;
    if (T0(e)) {
        const i = await e.blob();
        t || (t = new URL(e.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
        const o = ua(i) ? [await i.arrayBuffer()] : [i];
        return new vu(o, t, n);
    }
    const r = await XP(e);
    if ((t || (t = QP(e) ?? "unknown_file"), !(n != null && n.type))) {
        const i = (s = r[0]) == null ? void 0 : s.type;
        typeof i == "string" && (n = { ...n, type: i });
    }
    return new vu(r, t, n);
}
async function XP(e) {
    var n;
    let t = [];
    if (typeof e == "string" || ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        t.push(e);
    else if (ua(e)) t.push(await e.arrayBuffer());
    else if (YP(e)) for await (const r of e) t.push(r);
    else
        throw new Error(
            `Unexpected data type: ${typeof e}; constructor: ${(n = e == null ? void 0 : e.constructor) == null ? void 0 : n.name}; props: ${GP(e)}`,
        );
    return t;
}
function GP(e) {
    return `[${Object.getOwnPropertyNames(e)
        .map((n) => `"${n}"`)
        .join(", ")}]`;
}
function QP(e) {
    var t;
    return (
        el(e.name) ||
        el(e.filename) ||
        ((t = el(e.path)) == null ? void 0 : t.split(/[\\/]/).pop())
    );
}
const el = (e) => {
        if (typeof e == "string") return e;
        if (typeof Buffer < "u" && e instanceof Buffer) return String(e);
    },
    YP = (e) =>
        e != null &&
        typeof e == "object" &&
        typeof e[Symbol.asyncIterator] == "function",
    ep = (e) =>
        e &&
        typeof e == "object" &&
        e.body &&
        e[Symbol.toStringTag] === "MultipartBody",
    Ir = async (e) => {
        const t = await JP(e.body);
        return d0(t, e);
    },
    JP = async (e) => {
        const t = new c0();
        return (
            await Promise.all(Object.entries(e || {}).map(([n, r]) => wu(t, n, r))), t
        );
    },
    wu = async (e, t, n) => {
        if (n !== void 0) {
            if (n == null)
                throw new TypeError(
                    `Received null for "${t}"; to pass null in FormData, you must use the string 'null'`,
                );
            if (typeof n == "string" || typeof n == "number" || typeof n == "boolean")
                e.append(t, String(n));
            else if (KP(n)) {
                const r = await R0(n);
                e.append(t, r);
            } else if (Array.isArray(n))
                await Promise.all(n.map((r) => wu(e, t + "[]", r)));
            else if (typeof n == "object")
                await Promise.all(
                    Object.entries(n).map(([r, s]) => wu(e, `${t}[${r}]`, s)),
                );
            else
                throw new TypeError(
                    `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`,
                );
        }
    };
var xr = {},
    qP = function (e, t, n, r, s) {
        if (typeof t == "function" ? e !== t || !s : !t.has(e))
            throw new TypeError(
                "Cannot write private member to an object whose class did not declare it",
            );
        return t.set(e, n), n;
    },
    ZP = function (e, t, n, r) {
        if (n === "a" && !r)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e))
            throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
            );
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
    },
    Li;
async function M0(e) {
    const { response: t } = e;
    if (e.options.stream)
        return (
            Sr("response", t.status, t.url, t.headers, t.body),
                e.options.__streamClass
                    ? e.options.__streamClass.fromSSEResponse(t, e.controller)
                    : St.fromSSEResponse(t, e.controller)
        );
    if (t.status === 204) return null;
    if (e.options.__binaryResponse) return t;
    const n = t.headers.get("content-type");
    if (
        (n == null ? void 0 : n.includes("application/json")) ||
        (n == null ? void 0 : n.includes("application/vnd.api+json"))
    ) {
        const i = await t.json();
        return Sr("response", t.status, t.url, t.headers, i), L0(i, t);
    }
    const s = await t.text();
    return Sr("response", t.status, t.url, t.headers, s), s;
}
function L0(e, t) {
    return !e || typeof e != "object" || Array.isArray(e)
        ? e
        : Object.defineProperty(e, "_request_id", {
            value: t.headers.get("x-request-id"),
            enumerable: !1,
        });
}
class ca extends Promise {
    constructor(t, n = M0) {
        super((r) => {
            r(null);
        }),
            (this.responsePromise = t),
            (this.parseResponse = n);
    }
    _thenUnwrap(t) {
        return new ca(this.responsePromise, async (n) =>
            L0(t(await this.parseResponse(n), n), n.response),
        );
    }
    asResponse() {
        return this.responsePromise.then((t) => t.response);
    }
    async withResponse() {
        const [t, n] = await Promise.all([this.parse(), this.asResponse()]);
        return { data: t, response: n, request_id: n.headers.get("x-request-id") };
    }
    parse() {
        return (
            this.parsedPromise ||
            (this.parsedPromise = this.responsePromise.then(this.parseResponse)),
                this.parsedPromise
        );
    }
    then(t, n) {
        return this.parse().then(t, n);
    }
    catch(t) {
        return this.parse().catch(t);
    }
    finally(t) {
        return this.parse().finally(t);
    }
}
class ek {
    constructor({
                    baseURL: t,
                    maxRetries: n = 2,
                    timeout: r = 6e5,
                    httpAgent: s,
                    fetch: i,
                }) {
        (this.baseURL = t),
            (this.maxRetries = tl("maxRetries", n)),
            (this.timeout = tl("timeout", r)),
            (this.httpAgent = s),
            (this.fetch = i ?? u0);
    }
    authHeaders(t) {
        return {};
    }
    defaultHeaders(t) {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": this.getUserAgent(),
            ...ok(),
            ...this.authHeaders(t),
        };
    }
    validateHeaders(t, n) {}
    defaultIdempotencyKey() {
        return `stainless-node-retry-${ck()}`;
    }
    get(t, n) {
        return this.methodRequest("get", t, n);
    }
    post(t, n) {
        return this.methodRequest("post", t, n);
    }
    patch(t, n) {
        return this.methodRequest("patch", t, n);
    }
    put(t, n) {
        return this.methodRequest("put", t, n);
    }
    delete(t, n) {
        return this.methodRequest("delete", t, n);
    }
    methodRequest(t, n, r) {
        return this.request(
            Promise.resolve(r).then(async (s) => {
                const i =
                    s && ua(s == null ? void 0 : s.body)
                        ? new DataView(await s.body.arrayBuffer())
                        : (s == null ? void 0 : s.body) instanceof DataView
                            ? s.body
                            : (s == null ? void 0 : s.body) instanceof ArrayBuffer
                                ? new DataView(s.body)
                                : s && ArrayBuffer.isView(s == null ? void 0 : s.body)
                                    ? new DataView(s.body.buffer)
                                    : s == null
                                        ? void 0
                                        : s.body;
                return { method: t, path: n, ...s, body: i };
            }),
        );
    }
    getAPIList(t, n, r) {
        return this.requestAPIList(n, { method: "get", path: t, ...r });
    }
    calculateContentLength(t) {
        if (typeof t == "string") {
            if (typeof Buffer < "u") return Buffer.byteLength(t, "utf8").toString();
            if (typeof TextEncoder < "u")
                return new TextEncoder().encode(t).length.toString();
        } else if (ArrayBuffer.isView(t)) return t.byteLength.toString();
        return null;
    }
    buildRequest(t, { retryCount: n = 0 } = {}) {
        var v;
        const { method: r, path: s, query: i, headers: o = {} } = t,
            a =
                ArrayBuffer.isView(t.body) ||
                (t.__binaryRequest && typeof t.body == "string")
                    ? t.body
                    : ep(t.body)
                        ? t.body.body
                        : t.body
                            ? JSON.stringify(t.body, null, 2)
                            : null,
            l = this.calculateContentLength(a),
            u = this.buildURL(s, i);
        "timeout" in t && tl("timeout", t.timeout);
        const f = t.timeout ?? this.timeout,
            c = t.httpAgent ?? this.httpAgent ?? h0(u),
            d = f + 1e3;
        typeof ((v = c == null ? void 0 : c.options) == null
            ? void 0
            : v.timeout) == "number" &&
        d > (c.options.timeout ?? 0) &&
        (c.options.timeout = d),
        this.idempotencyHeader &&
        r !== "get" &&
        (t.idempotencyKey || (t.idempotencyKey = this.defaultIdempotencyKey()),
            (o[this.idempotencyHeader] = t.idempotencyKey));
        const g = this.buildHeaders({
            options: t,
            headers: o,
            contentLength: l,
            retryCount: n,
        });
        return {
            req: {
                method: r,
                ...(a && { body: a }),
                headers: g,
                ...(c && { agent: c }),
                signal: t.signal ?? null,
            },
            url: u,
            timeout: f,
        };
    }
    buildHeaders({ options: t, headers: n, contentLength: r, retryCount: s }) {
        const i = {};
        r && (i["content-length"] = r);
        const o = this.defaultHeaders(t);
        return (
            sp(i, o),
                sp(i, n),
            ep(t.body) && Cs !== "node" && delete i["content-type"],
            ip(o, "x-stainless-retry-count") === void 0 &&
            ip(n, "x-stainless-retry-count") === void 0 &&
            (i["x-stainless-retry-count"] = String(s)),
                this.validateHeaders(i, n),
                i
        );
    }
    async prepareOptions(t) {}
    async prepareRequest(t, { url: n, options: r }) {}
    parseHeaders(t) {
        return t
            ? Symbol.iterator in t
                ? Object.fromEntries(Array.from(t).map((n) => [...n]))
                : { ...t }
            : {};
    }
    makeStatusError(t, n, r, s) {
        return we.generate(t, n, r, s);
    }
    request(t, n = null) {
        return new ca(this.makeRequest(t, n));
    }
    async makeRequest(t, n) {
        var c, d;
        const r = await t,
            s = r.maxRetries ?? this.maxRetries;
        n == null && (n = s), await this.prepareOptions(r);
        const {
            req: i,
            url: o,
            timeout: a,
        } = this.buildRequest(r, { retryCount: s - n });
        if (
            (await this.prepareRequest(i, { url: o, options: r }),
                Sr("request", o, r, i.headers),
            (c = r.signal) != null && c.aborted)
        )
            throw new ct();
        const l = new AbortController(),
            u = await this.fetchWithTimeout(o, i, a, l).catch(xu);
        if (u instanceof Error) {
            if ((d = r.signal) != null && d.aborted) throw new ct();
            if (n) return this.retryRequest(r, n);
            throw u.name === "AbortError" ? new rf() : new la({ cause: u });
        }
        const f = nk(u.headers);
        if (!u.ok) {
            if (n && this.shouldRetry(u)) {
                const h = `retrying, ${n} attempts remaining`;
                return (
                    Sr(`response (error; ${h})`, u.status, o, f),
                        this.retryRequest(r, n, f)
                );
            }
            const g = await u.text().catch((h) => xu(h).message),
                y = ak(g),
                v = y ? void 0 : g;
            throw (
                (Sr(
                    `response (error; ${n ? "(error; no more retries left)" : "(error; not retryable)"})`,
                    u.status,
                    o,
                    f,
                    v,
                ),
                    this.makeStatusError(u.status, y, v, f))
            );
        }
        return { response: u, options: r, controller: l };
    }
    requestAPIList(t, n) {
        const r = this.makeRequest(n, null);
        return new tk(this, r, t);
    }
    buildURL(t, n) {
        const r = uk(t)
                ? new URL(t)
                : new URL(
                    this.baseURL +
                    (this.baseURL.endsWith("/") && t.startsWith("/")
                        ? t.slice(1)
                        : t),
                ),
            s = this.defaultQuery();
        return (
            D0(s) || (n = { ...s, ...n }),
            typeof n == "object" &&
            n &&
            !Array.isArray(n) &&
            (r.search = this.stringifyQuery(n)),
                r.toString()
        );
    }
    stringifyQuery(t) {
        return Object.entries(t)
            .filter(([n, r]) => typeof r < "u")
            .map(([n, r]) => {
                if (
                    typeof r == "string" ||
                    typeof r == "number" ||
                    typeof r == "boolean"
                )
                    return `${encodeURIComponent(n)}=${encodeURIComponent(r)}`;
                if (r === null) return `${encodeURIComponent(n)}=`;
                throw new j(
                    `Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
                );
            })
            .join("&");
    }
    async fetchWithTimeout(t, n, r, s) {
        const { signal: i, ...o } = n || {};
        i && i.addEventListener("abort", () => s.abort());
        const a = setTimeout(() => s.abort(), r);
        return this.getRequestClient()
            .fetch.call(void 0, t, { signal: s.signal, ...o })
            .finally(() => {
                clearTimeout(a);
            });
    }
    getRequestClient() {
        return { fetch: this.fetch };
    }
    shouldRetry(t) {
        const n = t.headers.get("x-should-retry");
        return n === "true"
            ? !0
            : n === "false"
                ? !1
                : t.status === 408 ||
                t.status === 409 ||
                t.status === 429 ||
                t.status >= 500;
    }
    async retryRequest(t, n, r) {
        let s;
        const i = r == null ? void 0 : r["retry-after-ms"];
        if (i) {
            const a = parseFloat(i);
            Number.isNaN(a) || (s = a);
        }
        const o = r == null ? void 0 : r["retry-after"];
        if (o && !s) {
            const a = parseFloat(o);
            Number.isNaN(a) ? (s = Date.parse(o) - Date.now()) : (s = a * 1e3);
        }
        if (!(s && 0 <= s && s < 60 * 1e3)) {
            const a = t.maxRetries ?? this.maxRetries;
            s = this.calculateDefaultRetryTimeoutMillis(n, a);
        }
        return await ni(s), this.makeRequest(t, n - 1);
    }
    calculateDefaultRetryTimeoutMillis(t, n) {
        const i = n - t,
            o = Math.min(0.5 * Math.pow(2, i), 8),
            a = 1 - Math.random() * 0.25;
        return o * a * 1e3;
    }
    getUserAgent() {
        return `${this.constructor.name}/JS ${Gn}`;
    }
}
class N0 {
    constructor(t, n, r, s) {
        Li.set(this, void 0),
            qP(this, Li, t),
            (this.options = s),
            (this.response = n),
            (this.body = r);
    }
    hasNextPage() {
        return this.getPaginatedItems().length ? this.nextPageInfo() != null : !1;
    }
    async getNextPage() {
        const t = this.nextPageInfo();
        if (!t)
            throw new j(
                "No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.",
            );
        const n = { ...this.options };
        if ("params" in t && typeof n.query == "object")
            n.query = { ...n.query, ...t.params };
        else if ("url" in t) {
            const r = [
                ...Object.entries(n.query || {}),
                ...t.url.searchParams.entries(),
            ];
            for (const [s, i] of r) t.url.searchParams.set(s, i);
            (n.query = void 0), (n.path = t.url.toString());
        }
        return await ZP(this, Li, "f").requestAPIList(this.constructor, n);
    }
    async *iterPages() {
        let t = this;
        for (yield t; t.hasNextPage(); ) (t = await t.getNextPage()), yield t;
    }
    async *[((Li = new WeakMap()), Symbol.asyncIterator)]() {
        for await (const t of this.iterPages())
            for (const n of t.getPaginatedItems()) yield n;
    }
}
class tk extends ca {
    constructor(t, n, r) {
        super(n, async (s) => new r(t, s.response, await M0(s), s.options));
    }
    async *[Symbol.asyncIterator]() {
        const t = await this;
        for await (const n of t) yield n;
    }
}
const nk = (e) =>
        new Proxy(Object.fromEntries(e.entries()), {
            get(t, n) {
                const r = n.toString();
                return t[r.toLowerCase()] || t[r];
            },
        }),
    rk = {
        method: !0,
        path: !0,
        query: !0,
        body: !0,
        headers: !0,
        maxRetries: !0,
        stream: !0,
        timeout: !0,
        httpAgent: !0,
        signal: !0,
        idempotencyKey: !0,
        __binaryRequest: !0,
        __binaryResponse: !0,
        __streamClass: !0,
    },
    be = (e) =>
        typeof e == "object" &&
        e !== null &&
        !D0(e) &&
        Object.keys(e).every((t) => F0(rk, t)),
    sk = () => {
        var t;
        if (typeof Deno < "u" && Deno.build != null)
            return {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Gn,
                "X-Stainless-OS": np(Deno.build.os),
                "X-Stainless-Arch": tp(Deno.build.arch),
                "X-Stainless-Runtime": "deno",
                "X-Stainless-Runtime-Version":
                    typeof Deno.version == "string"
                        ? Deno.version
                        : (((t = Deno.version) == null ? void 0 : t.deno) ?? "unknown"),
            };
        if (typeof EdgeRuntime < "u")
            return {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Gn,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": `other:${EdgeRuntime}`,
                "X-Stainless-Runtime": "edge",
                "X-Stainless-Runtime-Version": process.version,
            };
        if (
            Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
            "[object process]"
        )
            return {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Gn,
                "X-Stainless-OS": np(process.platform),
                "X-Stainless-Arch": tp(process.arch),
                "X-Stainless-Runtime": "node",
                "X-Stainless-Runtime-Version": process.version,
            };
        const e = ik();
        return e
            ? {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Gn,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": "unknown",
                "X-Stainless-Runtime": `browser:${e.browser}`,
                "X-Stainless-Runtime-Version": e.version,
            }
            : {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Gn,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": "unknown",
                "X-Stainless-Runtime": "unknown",
                "X-Stainless-Runtime-Version": "unknown",
            };
    };
function ik() {
    if (typeof navigator > "u" || !navigator) return null;
    const e = [
        { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        {
            key: "safari",
            pattern:
                /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
        },
    ];
    for (const { key: t, pattern: n } of e) {
        const r = n.exec(navigator.userAgent);
        if (r) {
            const s = r[1] || 0,
                i = r[2] || 0,
                o = r[3] || 0;
            return { browser: t, version: `${s}.${i}.${o}` };
        }
    }
    return null;
}
const tp = (e) =>
        e === "x32"
            ? "x32"
            : e === "x86_64" || e === "x64"
                ? "x64"
                : e === "arm"
                    ? "arm"
                    : e === "aarch64" || e === "arm64"
                        ? "arm64"
                        : e
                            ? `other:${e}`
                            : "unknown",
    np = (e) => (
        (e = e.toLowerCase()),
            e.includes("ios")
                ? "iOS"
                : e === "android"
                    ? "Android"
                    : e === "darwin"
                        ? "MacOS"
                        : e === "win32"
                            ? "Windows"
                            : e === "freebsd"
                                ? "FreeBSD"
                                : e === "openbsd"
                                    ? "OpenBSD"
                                    : e === "linux"
                                        ? "Linux"
                                        : e
                                            ? `Other:${e}`
                                            : "Unknown"
    );
let rp;
const ok = () => rp ?? (rp = sk()),
    ak = (e) => {
        try {
            return JSON.parse(e);
        } catch {
            return;
        }
    },
    lk = new RegExp("^(?:[a-z]+:)?//", "i"),
    uk = (e) => lk.test(e),
    ni = (e) => new Promise((t) => setTimeout(t, e)),
    tl = (e, t) => {
        if (typeof t != "number" || !Number.isInteger(t))
            throw new j(`${e} must be an integer`);
        if (t < 0) throw new j(`${e} must be a positive integer`);
        return t;
    },
    xu = (e) => {
        if (e instanceof Error) return e;
        if (typeof e == "object" && e !== null)
            try {
                return new Error(JSON.stringify(e));
            } catch {}
        return new Error(e);
    },
    Ni = (e) => {
        var t, n, r, s;
        if (typeof process < "u")
            return (
                ((t = xr == null ? void 0 : xr[e]) == null ? void 0 : t.trim()) ??
                void 0
            );
        if (typeof Deno < "u")
            return (s =
                (r = (n = Deno.env) == null ? void 0 : n.get) == null
                    ? void 0
                    : r.call(n, e)) == null
                ? void 0
                : s.trim();
    };
function D0(e) {
    if (!e) return !0;
    for (const t in e) return !1;
    return !0;
}
function F0(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
function sp(e, t) {
    for (const n in t) {
        if (!F0(t, n)) continue;
        const r = n.toLowerCase();
        if (!r) continue;
        const s = t[n];
        s === null ? delete e[r] : s !== void 0 && (e[r] = s);
    }
}
function Sr(e, ...t) {
    typeof process < "u" &&
    (xr == null ? void 0 : xr.DEBUG) === "true" &&
    console.log(`OpenAI:DEBUG:${e}`, ...t);
}
const ck = () =>
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
            const t = (Math.random() * 16) | 0;
            return (e === "x" ? t : (t & 3) | 8).toString(16);
        }),
    fk = () =>
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof navigator < "u",
    dk = (e) => typeof (e == null ? void 0 : e.get) == "function",
    ip = (e, t) => {
        var r;
        const n = t.toLowerCase();
        if (dk(e)) {
            const s =
                ((r = t[0]) == null ? void 0 : r.toUpperCase()) +
                t
                    .substring(1)
                    .replace(/([^\w])(\w)/g, (i, o, a) => o + a.toUpperCase());
            for (const i of [t, n, t.toUpperCase(), s]) {
                const o = e.get(i);
                if (o) return o;
            }
        }
        for (const [s, i] of Object.entries(e))
            if (s.toLowerCase() === n)
                return Array.isArray(i)
                    ? (i.length <= 1 ||
                    console.warn(
                        `Received ${i.length} entries for the ${t} header, using the first entry.`,
                    ),
                        i[0])
                    : i;
    };
function nl(e) {
    return e != null && typeof e == "object" && !Array.isArray(e);
}
class I0 extends N0 {
    constructor(t, n, r, s) {
        super(t, n, r, s), (this.data = r.data || []), (this.object = r.object);
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    nextPageParams() {
        return null;
    }
    nextPageInfo() {
        return null;
    }
}
class Et extends N0 {
    constructor(t, n, r, s) {
        super(t, n, r, s), (this.data = r.data || []);
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    nextPageParams() {
        const t = this.nextPageInfo();
        if (!t) return null;
        if ("params" in t) return t.params;
        const n = Object.fromEntries(t.url.searchParams);
        return Object.keys(n).length ? n : null;
    }
    nextPageInfo() {
        var r;
        const t = this.getPaginatedItems();
        if (!t.length) return null;
        const n = (r = t[t.length - 1]) == null ? void 0 : r.id;
        return n ? { params: { after: n } } : null;
    }
}
class z {
    constructor(t) {
        this._client = t;
    }
}
let O0 = class extends z {
        create(t, n) {
            return this._client.post("/chat/completions", {
                body: t,
                ...n,
                stream: t.stream ?? !1,
            });
        }
    },
    sf = class extends z {
        constructor() {
            super(...arguments), (this.completions = new O0(this._client));
        }
    };
sf.Completions = O0;
class V0 extends z {
    create(t, n) {
        return this._client.post("/audio/speech", {
            body: t,
            ...n,
            __binaryResponse: !0,
        });
    }
}
class j0 extends z {
    create(t, n) {
        return this._client.post("/audio/transcriptions", Ir({ body: t, ...n }));
    }
}
class b0 extends z {
    create(t, n) {
        return this._client.post("/audio/translations", Ir({ body: t, ...n }));
    }
}
let ri = class extends z {
    constructor() {
        super(...arguments),
            (this.transcriptions = new j0(this._client)),
            (this.translations = new b0(this._client)),
            (this.speech = new V0(this._client));
    }
};
ri.Transcriptions = j0;
ri.Translations = b0;
ri.Speech = V0;
class of extends z {
    create(t, n) {
        return this._client.post("/batches", { body: t, ...n });
    }
    retrieve(t, n) {
        return this._client.get(`/batches/${t}`, n);
    }
    list(t = {}, n) {
        return be(t)
            ? this.list({}, t)
            : this._client.getAPIList("/batches", af, { query: t, ...n });
    }
    cancel(t, n) {
        return this._client.post(`/batches/${t}/cancel`, n);
    }
}
class af extends Et {}
of.BatchesPage = af;
class lf extends z {
    create(t, n) {
        return this._client.post("/assistants", {
            body: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
    retrieve(t, n) {
        return this._client.get(`/assistants/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
    update(t, n, r) {
        return this._client.post(`/assistants/${t}`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    list(t = {}, n) {
        return be(t)
            ? this.list({}, t)
            : this._client.getAPIList("/assistants", uf, {
                query: t,
                ...n,
                headers: {
                    "OpenAI-Beta": "assistants=v2",
                    ...(n == null ? void 0 : n.headers),
                },
            });
    }
    del(t, n) {
        return this._client.delete(`/assistants/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
}
class uf extends Et {}
lf.AssistantsPage = uf;
function op(e) {
    return typeof e.parse == "function";
}
const _r = (e) => (e == null ? void 0 : e.role) === "assistant",
    B0 = (e) => (e == null ? void 0 : e.role) === "function",
    $0 = (e) => (e == null ? void 0 : e.role) === "tool";
var it = function (e, t, n, r, s) {
        if (r === "m") throw new TypeError("Private method is not writable");
        if (r === "a" && !s)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof t == "function" ? e !== t || !s : !t.has(e))
            throw new TypeError(
                "Cannot write private member to an object whose class did not declare it",
            );
        return r === "a" ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n;
    },
    Q = function (e, t, n, r) {
        if (n === "a" && !r)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e))
            throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
            );
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
    },
    Su,
    Ji,
    qi,
    is,
    os,
    Zi,
    as,
    At,
    ls,
    Io,
    Oo,
    Qn,
    z0;
class U0 {
    constructor() {
        Su.add(this),
            (this.controller = new AbortController()),
            Ji.set(this, void 0),
            qi.set(this, () => {}),
            is.set(this, () => {}),
            os.set(this, void 0),
            Zi.set(this, () => {}),
            as.set(this, () => {}),
            At.set(this, {}),
            ls.set(this, !1),
            Io.set(this, !1),
            Oo.set(this, !1),
            Qn.set(this, !1),
            it(
                this,
                Ji,
                new Promise((t, n) => {
                    it(this, qi, t, "f"), it(this, is, n, "f");
                }),
                "f",
            ),
            it(
                this,
                os,
                new Promise((t, n) => {
                    it(this, Zi, t, "f"), it(this, as, n, "f");
                }),
                "f",
            ),
            Q(this, Ji, "f").catch(() => {}),
            Q(this, os, "f").catch(() => {});
    }
    _run(t) {
        setTimeout(() => {
            t().then(
                () => {
                    this._emitFinal(), this._emit("end");
                },
                Q(this, Su, "m", z0).bind(this),
            );
        }, 0);
    }
    _connected() {
        this.ended || (Q(this, qi, "f").call(this), this._emit("connect"));
    }
    get ended() {
        return Q(this, ls, "f");
    }
    get errored() {
        return Q(this, Io, "f");
    }
    get aborted() {
        return Q(this, Oo, "f");
    }
    abort() {
        this.controller.abort();
    }
    on(t, n) {
        return (
            (Q(this, At, "f")[t] || (Q(this, At, "f")[t] = [])).push({ listener: n }),
                this
        );
    }
    off(t, n) {
        const r = Q(this, At, "f")[t];
        if (!r) return this;
        const s = r.findIndex((i) => i.listener === n);
        return s >= 0 && r.splice(s, 1), this;
    }
    once(t, n) {
        return (
            (Q(this, At, "f")[t] || (Q(this, At, "f")[t] = [])).push({
                listener: n,
                once: !0,
            }),
                this
        );
    }
    emitted(t) {
        return new Promise((n, r) => {
            it(this, Qn, !0, "f"),
            t !== "error" && this.once("error", r),
                this.once(t, n);
        });
    }
    async done() {
        it(this, Qn, !0, "f"), await Q(this, os, "f");
    }
    _emit(t, ...n) {
        if (Q(this, ls, "f")) return;
        t === "end" && (it(this, ls, !0, "f"), Q(this, Zi, "f").call(this));
        const r = Q(this, At, "f")[t];
        if (
            (r &&
            ((Q(this, At, "f")[t] = r.filter((s) => !s.once)),
                r.forEach(({ listener: s }) => s(...n))),
            t === "abort")
        ) {
            const s = n[0];
            !Q(this, Qn, "f") && !(r != null && r.length) && Promise.reject(s),
                Q(this, is, "f").call(this, s),
                Q(this, as, "f").call(this, s),
                this._emit("end");
            return;
        }
        if (t === "error") {
            const s = n[0];
            !Q(this, Qn, "f") && !(r != null && r.length) && Promise.reject(s),
                Q(this, is, "f").call(this, s),
                Q(this, as, "f").call(this, s),
                this._emit("end");
        }
    }
    _emitFinal() {}
}
(Ji = new WeakMap()),
    (qi = new WeakMap()),
    (is = new WeakMap()),
    (os = new WeakMap()),
    (Zi = new WeakMap()),
    (as = new WeakMap()),
    (At = new WeakMap()),
    (ls = new WeakMap()),
    (Io = new WeakMap()),
    (Oo = new WeakMap()),
    (Qn = new WeakMap()),
    (Su = new WeakSet()),
    (z0 = function (t) {
        if (
            (it(this, Io, !0, "f"),
            t instanceof Error && t.name === "AbortError" && (t = new ct()),
            t instanceof ct)
        )
            return it(this, Oo, !0, "f"), this._emit("abort", t);
        if (t instanceof j) return this._emit("error", t);
        if (t instanceof Error) {
            const n = new j(t.message);
            return (n.cause = t), this._emit("error", n);
        }
        return this._emit("error", new j(String(t)));
    });
function W0(e) {
    return (e == null ? void 0 : e.$brand) === "auto-parseable-response-format";
}
function si(e) {
    return (e == null ? void 0 : e.$brand) === "auto-parseable-tool";
}
function hk(e, t) {
    return !t || !H0(t)
        ? {
            ...e,
            choices: e.choices.map((n) => ({
                ...n,
                message: {
                    ...n.message,
                    parsed: null,
                    tool_calls: n.message.tool_calls ?? [],
                },
            })),
        }
        : cf(e, t);
}
function cf(e, t) {
    const n = e.choices.map((r) => {
        var s;
        if (r.finish_reason === "length") throw new P0();
        if (r.finish_reason === "content_filter") throw new k0();
        return {
            ...r,
            message: {
                ...r.message,
                tool_calls:
                    ((s = r.message.tool_calls) == null
                        ? void 0
                        : s.map((i) => mk(t, i))) ?? [],
                parsed:
                    r.message.content && !r.message.refusal
                        ? pk(t, r.message.content)
                        : null,
            },
        };
    });
    return { ...e, choices: n };
}
function pk(e, t) {
    var n, r;
    return ((n = e.response_format) == null ? void 0 : n.type) !== "json_schema"
        ? null
        : ((r = e.response_format) == null ? void 0 : r.type) === "json_schema"
            ? "$parseRaw" in e.response_format
                ? e.response_format.$parseRaw(t)
                : JSON.parse(t)
            : null;
}
function mk(e, t) {
    var r;
    const n =
        (r = e.tools) == null
            ? void 0
            : r.find((s) => {
                var i;
                return (
                    ((i = s.function) == null ? void 0 : i.name) === t.function.name
                );
            });
    return {
        ...t,
        function: {
            ...t.function,
            parsed_arguments: si(n)
                ? n.$parseRaw(t.function.arguments)
                : n != null && n.function.strict
                    ? JSON.parse(t.function.arguments)
                    : null,
        },
    };
}
function gk(e, t) {
    var r;
    if (!e) return !1;
    const n =
        (r = e.tools) == null
            ? void 0
            : r.find((s) => {
                var i;
                return (
                    ((i = s.function) == null ? void 0 : i.name) === t.function.name
                );
            });
    return si(n) || (n == null ? void 0 : n.function.strict) || !1;
}
function H0(e) {
    var t;
    return W0(e.response_format)
        ? !0
        : (((t = e.tools) == null
            ? void 0
            : t.some(
                (n) => si(n) || (n.type === "function" && n.function.strict === !0),
            )) ?? !1);
}
function yk(e) {
    for (const t of e ?? []) {
        if (t.type !== "function")
            throw new j(
                `Currently only \`function\` tool types support auto-parsing; Received \`${t.type}\``,
            );
        if (t.function.strict !== !0)
            throw new j(
                `The \`${t.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`,
            );
    }
}
var De = function (e, t, n, r) {
        if (n === "a" && !r)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e))
            throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
            );
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
    },
    _e,
    _u,
    Vo,
    Cu,
    Pu,
    ku,
    K0,
    Eu;
const ap = 10;
class X0 extends U0 {
    constructor() {
        super(...arguments),
            _e.add(this),
            (this._chatCompletions = []),
            (this.messages = []);
    }
    _addChatCompletion(t) {
        var r;
        this._chatCompletions.push(t), this._emit("chatCompletion", t);
        const n = (r = t.choices[0]) == null ? void 0 : r.message;
        return n && this._addMessage(n), t;
    }
    _addMessage(t, n = !0) {
        if (("content" in t || (t.content = null), this.messages.push(t), n)) {
            if ((this._emit("message", t), (B0(t) || $0(t)) && t.content))
                this._emit("functionCallResult", t.content);
            else if (_r(t) && t.function_call)
                this._emit("functionCall", t.function_call);
            else if (_r(t) && t.tool_calls)
                for (const r of t.tool_calls)
                    r.type === "function" && this._emit("functionCall", r.function);
        }
    }
    async finalChatCompletion() {
        await this.done();
        const t = this._chatCompletions[this._chatCompletions.length - 1];
        if (!t) throw new j("stream ended without producing a ChatCompletion");
        return t;
    }
    async finalContent() {
        return await this.done(), De(this, _e, "m", _u).call(this);
    }
    async finalMessage() {
        return await this.done(), De(this, _e, "m", Vo).call(this);
    }
    async finalFunctionCall() {
        return await this.done(), De(this, _e, "m", Cu).call(this);
    }
    async finalFunctionCallResult() {
        return await this.done(), De(this, _e, "m", Pu).call(this);
    }
    async totalUsage() {
        return await this.done(), De(this, _e, "m", ku).call(this);
    }
    allChatCompletions() {
        return [...this._chatCompletions];
    }
    _emitFinal() {
        const t = this._chatCompletions[this._chatCompletions.length - 1];
        t && this._emit("finalChatCompletion", t);
        const n = De(this, _e, "m", Vo).call(this);
        n && this._emit("finalMessage", n);
        const r = De(this, _e, "m", _u).call(this);
        r && this._emit("finalContent", r);
        const s = De(this, _e, "m", Cu).call(this);
        s && this._emit("finalFunctionCall", s);
        const i = De(this, _e, "m", Pu).call(this);
        i != null && this._emit("finalFunctionCallResult", i),
        this._chatCompletions.some((o) => o.usage) &&
        this._emit("totalUsage", De(this, _e, "m", ku).call(this));
    }
    async _createChatCompletion(t, n, r) {
        const s = r == null ? void 0 : r.signal;
        s &&
        (s.aborted && this.controller.abort(),
            s.addEventListener("abort", () => this.controller.abort())),
            De(this, _e, "m", K0).call(this, n);
        const i = await t.chat.completions.create(
            { ...n, stream: !1 },
            { ...r, signal: this.controller.signal },
        );
        return this._connected(), this._addChatCompletion(cf(i, n));
    }
    async _runChatCompletion(t, n, r) {
        for (const s of n.messages) this._addMessage(s, !1);
        return await this._createChatCompletion(t, n, r);
    }
    async _runFunctions(t, n, r) {
        var d;
        const s = "function",
            { function_call: i = "auto", stream: o, ...a } = n,
            l = typeof i != "string" && (i == null ? void 0 : i.name),
            { maxChatCompletions: u = ap } = r || {},
            f = {};
        for (const g of n.functions) f[g.name || g.function.name] = g;
        const c = n.functions.map((g) => ({
            name: g.name || g.function.name,
            parameters: g.parameters,
            description: g.description,
        }));
        for (const g of n.messages) this._addMessage(g, !1);
        for (let g = 0; g < u; ++g) {
            const v =
                (d = (
                    await this._createChatCompletion(
                        t,
                        {
                            ...a,
                            function_call: i,
                            functions: c,
                            messages: [...this.messages],
                        },
                        r,
                    )
                ).choices[0]) == null
                    ? void 0
                    : d.message;
            if (!v) throw new j("missing message in ChatCompletion response");
            if (!v.function_call) return;
            const { name: x, arguments: m } = v.function_call,
                h = f[x];
            if (h) {
                if (l && l !== x) {
                    const _ = `Invalid function_call: ${JSON.stringify(x)}. ${JSON.stringify(l)} requested. Please try again`;
                    this._addMessage({ role: s, name: x, content: _ });
                    continue;
                }
            } else {
                const _ = `Invalid function_call: ${JSON.stringify(x)}. Available options are: ${c.map((P) => JSON.stringify(P.name)).join(", ")}. Please try again`;
                this._addMessage({ role: s, name: x, content: _ });
                continue;
            }
            let p;
            try {
                p = op(h) ? await h.parse(m) : m;
            } catch (_) {
                this._addMessage({
                    role: s,
                    name: x,
                    content: _ instanceof Error ? _.message : String(_),
                });
                continue;
            }
            const w = await h.function(p, this),
                S = De(this, _e, "m", Eu).call(this, w);
            if ((this._addMessage({ role: s, name: x, content: S }), l)) return;
        }
    }
    async _runTools(t, n, r) {
        var g, y, v;
        const s = "tool",
            { tool_choice: i = "auto", stream: o, ...a } = n,
            l =
                typeof i != "string" &&
                ((g = i == null ? void 0 : i.function) == null ? void 0 : g.name),
            { maxChatCompletions: u = ap } = r || {},
            f = n.tools.map((x) => {
                if (si(x)) {
                    if (!x.$callback)
                        throw new j(
                            "Tool given to `.runTools()` that does not have an associated function",
                        );
                    return {
                        type: "function",
                        function: {
                            function: x.$callback,
                            name: x.function.name,
                            description: x.function.description || "",
                            parameters: x.function.parameters,
                            parse: x.$parseRaw,
                            strict: !0,
                        },
                    };
                }
                return x;
            }),
            c = {};
        for (const x of f)
            x.type === "function" &&
            (c[x.function.name || x.function.function.name] = x.function);
        const d =
            "tools" in n
                ? f.map((x) =>
                    x.type === "function"
                        ? {
                            type: "function",
                            function: {
                                name: x.function.name || x.function.function.name,
                                parameters: x.function.parameters,
                                description: x.function.description,
                                strict: x.function.strict,
                            },
                        }
                        : x,
                )
                : void 0;
        for (const x of n.messages) this._addMessage(x, !1);
        for (let x = 0; x < u; ++x) {
            const h =
                (y = (
                    await this._createChatCompletion(
                        t,
                        { ...a, tool_choice: i, tools: d, messages: [...this.messages] },
                        r,
                    )
                ).choices[0]) == null
                    ? void 0
                    : y.message;
            if (!h) throw new j("missing message in ChatCompletion response");
            if (!((v = h.tool_calls) != null && v.length)) return;
            for (const p of h.tool_calls) {
                if (p.type !== "function") continue;
                const w = p.id,
                    { name: S, arguments: _ } = p.function,
                    P = c[S];
                if (P) {
                    if (l && l !== S) {
                        const F = `Invalid tool_call: ${JSON.stringify(S)}. ${JSON.stringify(l)} requested. Please try again`;
                        this._addMessage({ role: s, tool_call_id: w, content: F });
                        continue;
                    }
                } else {
                    const F = `Invalid tool_call: ${JSON.stringify(S)}. Available options are: ${Object.keys(
                        c,
                    )
                        .map((Ae) => JSON.stringify(Ae))
                        .join(", ")}. Please try again`;
                    this._addMessage({ role: s, tool_call_id: w, content: F });
                    continue;
                }
                let k;
                try {
                    k = op(P) ? await P.parse(_) : _;
                } catch (F) {
                    const Ae = F instanceof Error ? F.message : String(F);
                    this._addMessage({ role: s, tool_call_id: w, content: Ae });
                    continue;
                }
                const N = await P.function(k, this),
                    R = De(this, _e, "m", Eu).call(this, N);
                if ((this._addMessage({ role: s, tool_call_id: w, content: R }), l))
                    return;
            }
        }
    }
}
(_e = new WeakSet()),
    (_u = function () {
        return De(this, _e, "m", Vo).call(this).content ?? null;
    }),
    (Vo = function () {
        let t = this.messages.length;
        for (; t-- > 0; ) {
            const n = this.messages[t];
            if (_r(n)) {
                const { function_call: r, ...s } = n,
                    i = { ...s, content: n.content ?? null, refusal: n.refusal ?? null };
                return r && (i.function_call = r), i;
            }
        }
        throw new j(
            "stream ended without producing a ChatCompletionMessage with role=assistant",
        );
    }),
    (Cu = function () {
        var t, n;
        for (let r = this.messages.length - 1; r >= 0; r--) {
            const s = this.messages[r];
            if (_r(s) && s != null && s.function_call) return s.function_call;
            if (_r(s) && (t = s == null ? void 0 : s.tool_calls) != null && t.length)
                return (n = s.tool_calls.at(-1)) == null ? void 0 : n.function;
        }
    }),
    (Pu = function () {
        for (let t = this.messages.length - 1; t >= 0; t--) {
            const n = this.messages[t];
            if (
                (B0(n) && n.content != null) ||
                ($0(n) &&
                    n.content != null &&
                    typeof n.content == "string" &&
                    this.messages.some((r) => {
                        var s;
                        return (
                            r.role === "assistant" &&
                            ((s = r.tool_calls) == null
                                ? void 0
                                : s.some(
                                    (i) => i.type === "function" && i.id === n.tool_call_id,
                                ))
                        );
                    }))
            )
                return n.content;
        }
    }),
    (ku = function () {
        const t = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
        for (const { usage: n } of this._chatCompletions)
            n &&
            ((t.completion_tokens += n.completion_tokens),
                (t.prompt_tokens += n.prompt_tokens),
                (t.total_tokens += n.total_tokens));
        return t;
    }),
    (K0 = function (t) {
        if (t.n != null && t.n > 1)
            throw new j(
                "ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.",
            );
    }),
    (Eu = function (t) {
        return typeof t == "string"
            ? t
            : t === void 0
                ? "undefined"
                : JSON.stringify(t);
    });
class Ks extends X0 {
    static runFunctions(t, n, r) {
        const s = new Ks(),
            i = {
                ...r,
                headers: {
                    ...(r == null ? void 0 : r.headers),
                    "X-Stainless-Helper-Method": "runFunctions",
                },
            };
        return s._run(() => s._runFunctions(t, n, i)), s;
    }
    static runTools(t, n, r) {
        const s = new Ks(),
            i = {
                ...r,
                headers: {
                    ...(r == null ? void 0 : r.headers),
                    "X-Stainless-Helper-Method": "runTools",
                },
            };
        return s._run(() => s._runTools(t, n, i)), s;
    }
    _addMessage(t, n = !0) {
        super._addMessage(t, n),
        _r(t) && t.content && this._emit("content", t.content);
    }
}
const G0 = 1,
    Q0 = 2,
    Y0 = 4,
    J0 = 8,
    q0 = 16,
    Z0 = 32,
    ev = 64,
    tv = 128,
    nv = 256,
    rv = tv | nv,
    sv = q0 | Z0 | rv | ev,
    iv = G0 | Q0 | sv,
    ov = Y0 | J0,
    vk = iv | ov,
    fe = {
        STR: G0,
        NUM: Q0,
        ARR: Y0,
        OBJ: J0,
        NULL: q0,
        BOOL: Z0,
        NAN: ev,
        INFINITY: tv,
        MINUS_INFINITY: nv,
        INF: rv,
        SPECIAL: sv,
        ATOM: iv,
        COLLECTION: ov,
        ALL: vk,
    };
class wk extends Error {}
class xk extends Error {}
function Sk(e, t = fe.ALL) {
    if (typeof e != "string")
        throw new TypeError(`expecting str, got ${typeof e}`);
    if (!e.trim()) throw new Error(`${e} is empty`);
    return _k(e.trim(), t);
}
const _k = (e, t) => {
        const n = e.length;
        let r = 0;
        const s = (d) => {
                throw new wk(`${d} at position ${r}`);
            },
            i = (d) => {
                throw new xk(`${d} at position ${r}`);
            },
            o = () => (
                c(),
                r >= n && s("Unexpected end of input"),
                    e[r] === '"'
                        ? a()
                        : e[r] === "{"
                            ? l()
                            : e[r] === "["
                                ? u()
                                : e.substring(r, r + 4) === "null" ||
                                (fe.NULL & t &&
                                    n - r < 4 &&
                                    "null".startsWith(e.substring(r)))
                                    ? ((r += 4), null)
                                    : e.substring(r, r + 4) === "true" ||
                                    (fe.BOOL & t &&
                                        n - r < 4 &&
                                        "true".startsWith(e.substring(r)))
                                        ? ((r += 4), !0)
                                        : e.substring(r, r + 5) === "false" ||
                                        (fe.BOOL & t &&
                                            n - r < 5 &&
                                            "false".startsWith(e.substring(r)))
                                            ? ((r += 5), !1)
                                            : e.substring(r, r + 8) === "Infinity" ||
                                            (fe.INFINITY & t &&
                                                n - r < 8 &&
                                                "Infinity".startsWith(e.substring(r)))
                                                ? ((r += 8), 1 / 0)
                                                : e.substring(r, r + 9) === "-Infinity" ||
                                                (fe.MINUS_INFINITY & t &&
                                                    1 < n - r &&
                                                    n - r < 9 &&
                                                    "-Infinity".startsWith(e.substring(r)))
                                                    ? ((r += 9), -1 / 0)
                                                    : e.substring(r, r + 3) === "NaN" ||
                                                    (fe.NAN & t &&
                                                        n - r < 3 &&
                                                        "NaN".startsWith(e.substring(r)))
                                                        ? ((r += 3), NaN)
                                                        : f()
            ),
            a = () => {
                const d = r;
                let g = !1;
                for (r++; r < n && (e[r] !== '"' || (g && e[r - 1] === "\\")); )
                    (g = e[r] === "\\" ? !g : !1), r++;
                if (e.charAt(r) == '"')
                    try {
                        return JSON.parse(e.substring(d, ++r - Number(g)));
                    } catch (y) {
                        i(String(y));
                    }
                else if (fe.STR & t)
                    try {
                        return JSON.parse(e.substring(d, r - Number(g)) + '"');
                    } catch {
                        return JSON.parse(e.substring(d, e.lastIndexOf("\\")) + '"');
                    }
                s("Unterminated string literal");
            },
            l = () => {
                r++, c();
                const d = {};
                try {
                    for (; e[r] !== "}"; ) {
                        if ((c(), r >= n && fe.OBJ & t)) return d;
                        const g = a();
                        c(), r++;
                        try {
                            const y = o();
                            Object.defineProperty(d, g, {
                                value: y,
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                            });
                        } catch (y) {
                            if (fe.OBJ & t) return d;
                            throw y;
                        }
                        c(), e[r] === "," && r++;
                    }
                } catch {
                    if (fe.OBJ & t) return d;
                    s("Expected '}' at end of object");
                }
                return r++, d;
            },
            u = () => {
                r++;
                const d = [];
                try {
                    for (; e[r] !== "]"; ) d.push(o()), c(), e[r] === "," && r++;
                } catch {
                    if (fe.ARR & t) return d;
                    s("Expected ']' at end of array");
                }
                return r++, d;
            },
            f = () => {
                if (r === 0) {
                    e === "-" && fe.NUM & t && s("Not sure what '-' is");
                    try {
                        return JSON.parse(e);
                    } catch (g) {
                        if (fe.NUM & t)
                            try {
                                return e[e.length - 1] === "."
                                    ? JSON.parse(e.substring(0, e.lastIndexOf(".")))
                                    : JSON.parse(e.substring(0, e.lastIndexOf("e")));
                            } catch {}
                        i(String(g));
                    }
                }
                const d = r;
                for (e[r] === "-" && r++; e[r] && !",]}".includes(e[r]); ) r++;
                r == n && !(fe.NUM & t) && s("Unterminated number literal");
                try {
                    return JSON.parse(e.substring(d, r));
                } catch {
                    e.substring(d, r) === "-" && fe.NUM & t && s("Not sure what '-' is");
                    try {
                        return JSON.parse(e.substring(d, e.lastIndexOf("e")));
                    } catch (y) {
                        i(String(y));
                    }
                }
            },
            c = () => {
                for (
                    ;
                    r < n &&
                    ` 
\r	`.includes(e[r]);

                )
                    r++;
            };
        return o();
    },
    lp = (e) => Sk(e, fe.ALL ^ fe.NUM);
var Kn = function (e, t, n, r, s) {
        if (r === "m") throw new TypeError("Private method is not writable");
        if (r === "a" && !s)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof t == "function" ? e !== t || !s : !t.has(e))
            throw new TypeError(
                "Cannot write private member to an object whose class did not declare it",
            );
        return r === "a" ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n;
    },
    U = function (e, t, n, r) {
        if (n === "a" && !r)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e))
            throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
            );
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
    },
    oe,
    Tt,
    Xn,
    Ht,
    rl,
    Di,
    sl,
    il,
    ol,
    Fi,
    al,
    up;
class Xs extends X0 {
    constructor(t) {
        super(),
            oe.add(this),
            Tt.set(this, void 0),
            Xn.set(this, void 0),
            Ht.set(this, void 0),
            Kn(this, Tt, t, "f"),
            Kn(this, Xn, [], "f");
    }
    get currentChatCompletionSnapshot() {
        return U(this, Ht, "f");
    }
    static fromReadableStream(t) {
        const n = new Xs(null);
        return n._run(() => n._fromReadableStream(t)), n;
    }
    static createChatCompletion(t, n, r) {
        const s = new Xs(n);
        return (
            s._run(() =>
                s._runChatCompletion(
                    t,
                    { ...n, stream: !0 },
                    {
                        ...r,
                        headers: {
                            ...(r == null ? void 0 : r.headers),
                            "X-Stainless-Helper-Method": "stream",
                        },
                    },
                ),
            ),
                s
        );
    }
    async _createChatCompletion(t, n, r) {
        var o;
        super._createChatCompletion;
        const s = r == null ? void 0 : r.signal;
        s &&
        (s.aborted && this.controller.abort(),
            s.addEventListener("abort", () => this.controller.abort())),
            U(this, oe, "m", rl).call(this);
        const i = await t.chat.completions.create(
            { ...n, stream: !0 },
            { ...r, signal: this.controller.signal },
        );
        this._connected();
        for await (const a of i) U(this, oe, "m", sl).call(this, a);
        if ((o = i.controller.signal) != null && o.aborted) throw new ct();
        return this._addChatCompletion(U(this, oe, "m", Fi).call(this));
    }
    async _fromReadableStream(t, n) {
        var o;
        const r = n == null ? void 0 : n.signal;
        r &&
        (r.aborted && this.controller.abort(),
            r.addEventListener("abort", () => this.controller.abort())),
            U(this, oe, "m", rl).call(this),
            this._connected();
        const s = St.fromReadableStream(t, this.controller);
        let i;
        for await (const a of s)
            i &&
            i !== a.id &&
            this._addChatCompletion(U(this, oe, "m", Fi).call(this)),
                U(this, oe, "m", sl).call(this, a),
                (i = a.id);
        if ((o = s.controller.signal) != null && o.aborted) throw new ct();
        return this._addChatCompletion(U(this, oe, "m", Fi).call(this));
    }
    [((Tt = new WeakMap()),
        (Xn = new WeakMap()),
        (Ht = new WeakMap()),
        (oe = new WeakSet()),
        (rl = function () {
            this.ended || Kn(this, Ht, void 0, "f");
        }),
        (Di = function (n) {
            let r = U(this, Xn, "f")[n.index];
            return (
                r ||
                ((r = {
                    content_done: !1,
                    refusal_done: !1,
                    logprobs_content_done: !1,
                    logprobs_refusal_done: !1,
                    done_tool_calls: new Set(),
                    current_tool_call_index: null,
                }),
                    (U(this, Xn, "f")[n.index] = r),
                    r)
            );
        }),
        (sl = function (n) {
            var s, i, o, a, l, u, f, c, d, g, y, v, x, m, h;
            if (this.ended) return;
            const r = U(this, oe, "m", up).call(this, n);
            this._emit("chunk", n, r);
            for (const p of n.choices) {
                const w = r.choices[p.index];
                p.delta.content != null &&
                ((s = w.message) == null ? void 0 : s.role) === "assistant" &&
                (i = w.message) != null &&
                i.content &&
                (this._emit("content", p.delta.content, w.message.content),
                    this._emit("content.delta", {
                        delta: p.delta.content,
                        snapshot: w.message.content,
                        parsed: w.message.parsed,
                    })),
                p.delta.refusal != null &&
                ((o = w.message) == null ? void 0 : o.role) === "assistant" &&
                (a = w.message) != null &&
                a.refusal &&
                this._emit("refusal.delta", {
                    delta: p.delta.refusal,
                    snapshot: w.message.refusal,
                }),
                ((l = p.logprobs) == null ? void 0 : l.content) != null &&
                ((u = w.message) == null ? void 0 : u.role) === "assistant" &&
                this._emit("logprobs.content.delta", {
                    content: (f = p.logprobs) == null ? void 0 : f.content,
                    snapshot: ((c = w.logprobs) == null ? void 0 : c.content) ?? [],
                }),
                ((d = p.logprobs) == null ? void 0 : d.refusal) != null &&
                ((g = w.message) == null ? void 0 : g.role) === "assistant" &&
                this._emit("logprobs.refusal.delta", {
                    refusal: (y = p.logprobs) == null ? void 0 : y.refusal,
                    snapshot: ((v = w.logprobs) == null ? void 0 : v.refusal) ?? [],
                });
                const S = U(this, oe, "m", Di).call(this, w);
                w.finish_reason &&
                (U(this, oe, "m", ol).call(this, w),
                S.current_tool_call_index != null &&
                U(this, oe, "m", il).call(this, w, S.current_tool_call_index));
                for (const _ of p.delta.tool_calls ?? [])
                    S.current_tool_call_index !== _.index &&
                    (U(this, oe, "m", ol).call(this, w),
                    S.current_tool_call_index != null &&
                    U(this, oe, "m", il).call(this, w, S.current_tool_call_index)),
                        (S.current_tool_call_index = _.index);
                for (const _ of p.delta.tool_calls ?? []) {
                    const P = (x = w.message.tool_calls) == null ? void 0 : x[_.index];
                    P != null &&
                    P.type &&
                    ((P == null ? void 0 : P.type) === "function"
                        ? this._emit("tool_calls.function.arguments.delta", {
                            name: (m = P.function) == null ? void 0 : m.name,
                            index: _.index,
                            arguments: P.function.arguments,
                            parsed_arguments: P.function.parsed_arguments,
                            arguments_delta:
                                ((h = _.function) == null ? void 0 : h.arguments) ?? "",
                        })
                        : (P == null || P.type, void 0));
                }
            }
        }),
        (il = function (n, r) {
            var o, a, l;
            if (U(this, oe, "m", Di).call(this, n).done_tool_calls.has(r)) return;
            const i = (o = n.message.tool_calls) == null ? void 0 : o[r];
            if (!i) throw new Error("no tool call snapshot");
            if (!i.type) throw new Error("tool call snapshot missing `type`");
            if (i.type === "function") {
                const u =
                    (l = (a = U(this, Tt, "f")) == null ? void 0 : a.tools) == null
                        ? void 0
                        : l.find(
                            (f) =>
                                f.type === "function" && f.function.name === i.function.name,
                        );
                this._emit("tool_calls.function.arguments.done", {
                    name: i.function.name,
                    index: r,
                    arguments: i.function.arguments,
                    parsed_arguments: si(u)
                        ? u.$parseRaw(i.function.arguments)
                        : u != null && u.function.strict
                            ? JSON.parse(i.function.arguments)
                            : null,
                });
            } else i.type;
        }),
        (ol = function (n) {
            var s, i;
            const r = U(this, oe, "m", Di).call(this, n);
            if (n.message.content && !r.content_done) {
                r.content_done = !0;
                const o = U(this, oe, "m", al).call(this);
                this._emit("content.done", {
                    content: n.message.content,
                    parsed: o ? o.$parseRaw(n.message.content) : null,
                });
            }
            n.message.refusal &&
            !r.refusal_done &&
            ((r.refusal_done = !0),
                this._emit("refusal.done", { refusal: n.message.refusal })),
            (s = n.logprobs) != null &&
            s.content &&
            !r.logprobs_content_done &&
            ((r.logprobs_content_done = !0),
                this._emit("logprobs.content.done", { content: n.logprobs.content })),
            (i = n.logprobs) != null &&
            i.refusal &&
            !r.logprobs_refusal_done &&
            ((r.logprobs_refusal_done = !0),
                this._emit("logprobs.refusal.done", { refusal: n.logprobs.refusal }));
        }),
        (Fi = function () {
            if (this.ended) throw new j("stream has ended, this shouldn't happen");
            const n = U(this, Ht, "f");
            if (!n) throw new j("request ended without sending any chunks");
            return (
                Kn(this, Ht, void 0, "f"), Kn(this, Xn, [], "f"), Ck(n, U(this, Tt, "f"))
            );
        }),
        (al = function () {
            var r;
            const n = (r = U(this, Tt, "f")) == null ? void 0 : r.response_format;
            return W0(n) ? n : null;
        }),
        (up = function (n) {
            var r, s, i, o;
            let a = U(this, Ht, "f");
            const { choices: l, ...u } = n;
            a ? Object.assign(a, u) : (a = Kn(this, Ht, { ...u, choices: [] }, "f"));
            for (const {
                delta: f,
                finish_reason: c,
                index: d,
                logprobs: g = null,
                ...y
            } of n.choices) {
                let v = a.choices[d];
                if (
                    (v ||
                    (v = a.choices[d] =
                        { finish_reason: c, index: d, message: {}, logprobs: g, ...y }),
                        g)
                )
                    if (!v.logprobs) v.logprobs = Object.assign({}, g);
                    else {
                        const { content: _, refusal: P, ...k } = g;
                        Object.assign(v.logprobs, k),
                        _ &&
                        ((r = v.logprobs).content ?? (r.content = []),
                            v.logprobs.content.push(..._)),
                        P &&
                        ((s = v.logprobs).refusal ?? (s.refusal = []),
                            v.logprobs.refusal.push(...P));
                    }
                if (
                    c &&
                    ((v.finish_reason = c), U(this, Tt, "f") && H0(U(this, Tt, "f")))
                ) {
                    if (c === "length") throw new P0();
                    if (c === "content_filter") throw new k0();
                }
                if ((Object.assign(v, y), !f)) continue;
                const {
                    content: x,
                    refusal: m,
                    function_call: h,
                    role: p,
                    tool_calls: w,
                    ...S
                } = f;
                if (
                    (Object.assign(v.message, S),
                    m && (v.message.refusal = (v.message.refusal || "") + m),
                    p && (v.message.role = p),
                    h &&
                    (v.message.function_call
                        ? (h.name && (v.message.function_call.name = h.name),
                        h.arguments &&
                        ((i = v.message.function_call).arguments ?? (i.arguments = ""),
                            (v.message.function_call.arguments += h.arguments)))
                        : (v.message.function_call = h)),
                    x &&
                    ((v.message.content = (v.message.content || "") + x),
                    !v.message.refusal &&
                    U(this, oe, "m", al).call(this) &&
                    (v.message.parsed = lp(v.message.content))),
                        w)
                ) {
                    v.message.tool_calls || (v.message.tool_calls = []);
                    for (const { index: _, id: P, type: k, function: N, ...R } of w) {
                        const F = (o = v.message.tool_calls)[_] ?? (o[_] = {});
                        Object.assign(F, R),
                        P && (F.id = P),
                        k && (F.type = k),
                        N &&
                        (F.function ??
                            (F.function = { name: N.name ?? "", arguments: "" })),
                        N != null && N.name && (F.function.name = N.name),
                        N != null &&
                        N.arguments &&
                        ((F.function.arguments += N.arguments),
                        gk(U(this, Tt, "f"), F) &&
                        (F.function.parsed_arguments = lp(F.function.arguments)));
                    }
                }
            }
            return a;
        }),
        Symbol.asyncIterator)]() {
        const t = [],
            n = [];
        let r = !1;
        return (
            this.on("chunk", (s) => {
                const i = n.shift();
                i ? i.resolve(s) : t.push(s);
            }),
                this.on("end", () => {
                    r = !0;
                    for (const s of n) s.resolve(void 0);
                    n.length = 0;
                }),
                this.on("abort", (s) => {
                    r = !0;
                    for (const i of n) i.reject(s);
                    n.length = 0;
                }),
                this.on("error", (s) => {
                    r = !0;
                    for (const i of n) i.reject(s);
                    n.length = 0;
                }),
                {
                    next: async () =>
                        t.length
                            ? { value: t.shift(), done: !1 }
                            : r
                                ? { value: void 0, done: !0 }
                                : new Promise((i, o) => n.push({ resolve: i, reject: o })).then(
                                    (i) =>
                                        i ? { value: i, done: !1 } : { value: void 0, done: !0 },
                                ),
                    return: async () => (this.abort(), { value: void 0, done: !0 }),
                }
        );
    }
    toReadableStream() {
        return new St(
            this[Symbol.asyncIterator].bind(this),
            this.controller,
        ).toReadableStream();
    }
}
function Ck(e, t) {
    const {
            id: n,
            choices: r,
            created: s,
            model: i,
            system_fingerprint: o,
            ...a
        } = e,
        l = {
            ...a,
            id: n,
            choices: r.map(
                ({ message: u, finish_reason: f, index: c, logprobs: d, ...g }) => {
                    if (!f) throw new j(`missing finish_reason for choice ${c}`);
                    const {
                            content: y = null,
                            function_call: v,
                            tool_calls: x,
                            ...m
                        } = u,
                        h = u.role;
                    if (!h) throw new j(`missing role for choice ${c}`);
                    if (v) {
                        const { arguments: p, name: w } = v;
                        if (p == null)
                            throw new j(`missing function_call.arguments for choice ${c}`);
                        if (!w) throw new j(`missing function_call.name for choice ${c}`);
                        return {
                            ...g,
                            message: {
                                content: y,
                                function_call: { arguments: p, name: w },
                                role: h,
                                refusal: u.refusal ?? null,
                            },
                            finish_reason: f,
                            index: c,
                            logprobs: d,
                        };
                    }
                    return x
                        ? {
                            ...g,
                            index: c,
                            finish_reason: f,
                            logprobs: d,
                            message: {
                                ...m,
                                role: h,
                                content: y,
                                refusal: u.refusal ?? null,
                                tool_calls: x.map((p, w) => {
                                    const { function: S, type: _, id: P, ...k } = p,
                                        { arguments: N, name: R, ...F } = S || {};
                                    if (P == null)
                                        throw new j(`missing choices[${c}].tool_calls[${w}].id
${Ii(e)}`);
                                    if (_ == null)
                                        throw new j(`missing choices[${c}].tool_calls[${w}].type
${Ii(e)}`);
                                    if (R == null)
                                        throw new j(`missing choices[${c}].tool_calls[${w}].function.name
${Ii(e)}`);
                                    if (N == null)
                                        throw new j(`missing choices[${c}].tool_calls[${w}].function.arguments
${Ii(e)}`);
                                    return {
                                        ...k,
                                        id: P,
                                        type: _,
                                        function: { ...F, name: R, arguments: N },
                                    };
                                }),
                            },
                        }
                        : {
                            ...g,
                            message: {
                                ...m,
                                content: y,
                                role: h,
                                refusal: u.refusal ?? null,
                            },
                            finish_reason: f,
                            index: c,
                            logprobs: d,
                        };
                },
            ),
            created: s,
            model: i,
            object: "chat.completion",
            ...(o ? { system_fingerprint: o } : {}),
        };
    return hk(l, t);
}
function Ii(e) {
    return JSON.stringify(e);
}
class Cr extends Xs {
    static fromReadableStream(t) {
        const n = new Cr(null);
        return n._run(() => n._fromReadableStream(t)), n;
    }
    static runFunctions(t, n, r) {
        const s = new Cr(null),
            i = {
                ...r,
                headers: {
                    ...(r == null ? void 0 : r.headers),
                    "X-Stainless-Helper-Method": "runFunctions",
                },
            };
        return s._run(() => s._runFunctions(t, n, i)), s;
    }
    static runTools(t, n, r) {
        const s = new Cr(n),
            i = {
                ...r,
                headers: {
                    ...(r == null ? void 0 : r.headers),
                    "X-Stainless-Helper-Method": "runTools",
                },
            };
        return s._run(() => s._runTools(t, n, i)), s;
    }
}
let av = class extends z {
    parse(t, n) {
        return (
            yk(t.tools),
                this._client.chat.completions
                    .create(t, {
                        ...n,
                        headers: {
                            ...(n == null ? void 0 : n.headers),
                            "X-Stainless-Helper-Method": "beta.chat.completions.parse",
                        },
                    })
                    ._thenUnwrap((r) => cf(r, t))
        );
    }
    runFunctions(t, n) {
        return t.stream
            ? Cr.runFunctions(this._client, t, n)
            : Ks.runFunctions(this._client, t, n);
    }
    runTools(t, n) {
        return t.stream
            ? Cr.runTools(this._client, t, n)
            : Ks.runTools(this._client, t, n);
    }
    stream(t, n) {
        return Xs.createChatCompletion(this._client, t, n);
    }
};
class Tu extends z {
    constructor() {
        super(...arguments), (this.completions = new av(this._client));
    }
}
(function (e) {
    e.Completions = av;
})(Tu || (Tu = {}));
var L = function (e, t, n, r) {
        if (n === "a" && !r)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e))
            throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
            );
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
    },
    Be = function (e, t, n, r, s) {
        if (r === "m") throw new TypeError("Private method is not writable");
        if (r === "a" && !s)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof t == "function" ? e !== t || !s : !t.has(e))
            throw new TypeError(
                "Cannot write private member to an object whose class did not declare it",
            );
        return r === "a" ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n;
    },
    ge,
    Au,
    wt,
    eo,
    at,
    Mn,
    hr,
    kn,
    jo,
    $e,
    to,
    no,
    Ps,
    us,
    cs,
    cp,
    fp,
    dp,
    hp,
    pp,
    mp,
    gp;
class ft extends U0 {
    constructor() {
        super(...arguments),
            ge.add(this),
            Au.set(this, []),
            wt.set(this, {}),
            eo.set(this, {}),
            at.set(this, void 0),
            Mn.set(this, void 0),
            hr.set(this, void 0),
            kn.set(this, void 0),
            jo.set(this, void 0),
            $e.set(this, void 0),
            to.set(this, void 0),
            no.set(this, void 0),
            Ps.set(this, void 0);
    }
    [((Au = new WeakMap()),
        (wt = new WeakMap()),
        (eo = new WeakMap()),
        (at = new WeakMap()),
        (Mn = new WeakMap()),
        (hr = new WeakMap()),
        (kn = new WeakMap()),
        (jo = new WeakMap()),
        ($e = new WeakMap()),
        (to = new WeakMap()),
        (no = new WeakMap()),
        (Ps = new WeakMap()),
        (ge = new WeakSet()),
        Symbol.asyncIterator)]() {
        const t = [],
            n = [];
        let r = !1;
        return (
            this.on("event", (s) => {
                const i = n.shift();
                i ? i.resolve(s) : t.push(s);
            }),
                this.on("end", () => {
                    r = !0;
                    for (const s of n) s.resolve(void 0);
                    n.length = 0;
                }),
                this.on("abort", (s) => {
                    r = !0;
                    for (const i of n) i.reject(s);
                    n.length = 0;
                }),
                this.on("error", (s) => {
                    r = !0;
                    for (const i of n) i.reject(s);
                    n.length = 0;
                }),
                {
                    next: async () =>
                        t.length
                            ? { value: t.shift(), done: !1 }
                            : r
                                ? { value: void 0, done: !0 }
                                : new Promise((i, o) => n.push({ resolve: i, reject: o })).then(
                                    (i) =>
                                        i ? { value: i, done: !1 } : { value: void 0, done: !0 },
                                ),
                    return: async () => (this.abort(), { value: void 0, done: !0 }),
                }
        );
    }
    static fromReadableStream(t) {
        const n = new ft();
        return n._run(() => n._fromReadableStream(t)), n;
    }
    async _fromReadableStream(t, n) {
        var i;
        const r = n == null ? void 0 : n.signal;
        r &&
        (r.aborted && this.controller.abort(),
            r.addEventListener("abort", () => this.controller.abort())),
            this._connected();
        const s = St.fromReadableStream(t, this.controller);
        for await (const o of s) L(this, ge, "m", us).call(this, o);
        if ((i = s.controller.signal) != null && i.aborted) throw new ct();
        return this._addRun(L(this, ge, "m", cs).call(this));
    }
    toReadableStream() {
        return new St(
            this[Symbol.asyncIterator].bind(this),
            this.controller,
        ).toReadableStream();
    }
    static createToolAssistantStream(t, n, r, s, i) {
        const o = new ft();
        return (
            o._run(() =>
                o._runToolAssistantStream(t, n, r, s, {
                    ...i,
                    headers: {
                        ...(i == null ? void 0 : i.headers),
                        "X-Stainless-Helper-Method": "stream",
                    },
                }),
            ),
                o
        );
    }
    async _createToolAssistantStream(t, n, r, s, i) {
        var u;
        const o = i == null ? void 0 : i.signal;
        o &&
        (o.aborted && this.controller.abort(),
            o.addEventListener("abort", () => this.controller.abort()));
        const a = { ...s, stream: !0 },
            l = await t.submitToolOutputs(n, r, a, {
                ...i,
                signal: this.controller.signal,
            });
        this._connected();
        for await (const f of l) L(this, ge, "m", us).call(this, f);
        if ((u = l.controller.signal) != null && u.aborted) throw new ct();
        return this._addRun(L(this, ge, "m", cs).call(this));
    }
    static createThreadAssistantStream(t, n, r) {
        const s = new ft();
        return (
            s._run(() =>
                s._threadAssistantStream(t, n, {
                    ...r,
                    headers: {
                        ...(r == null ? void 0 : r.headers),
                        "X-Stainless-Helper-Method": "stream",
                    },
                }),
            ),
                s
        );
    }
    static createAssistantStream(t, n, r, s) {
        const i = new ft();
        return (
            i._run(() =>
                i._runAssistantStream(t, n, r, {
                    ...s,
                    headers: {
                        ...(s == null ? void 0 : s.headers),
                        "X-Stainless-Helper-Method": "stream",
                    },
                }),
            ),
                i
        );
    }
    currentEvent() {
        return L(this, to, "f");
    }
    currentRun() {
        return L(this, no, "f");
    }
    currentMessageSnapshot() {
        return L(this, at, "f");
    }
    currentRunStepSnapshot() {
        return L(this, Ps, "f");
    }
    async finalRunSteps() {
        return await this.done(), Object.values(L(this, wt, "f"));
    }
    async finalMessages() {
        return await this.done(), Object.values(L(this, eo, "f"));
    }
    async finalRun() {
        if ((await this.done(), !L(this, Mn, "f")))
            throw Error("Final run was not received.");
        return L(this, Mn, "f");
    }
    async _createThreadAssistantStream(t, n, r) {
        var a;
        const s = r == null ? void 0 : r.signal;
        s &&
        (s.aborted && this.controller.abort(),
            s.addEventListener("abort", () => this.controller.abort()));
        const i = { ...n, stream: !0 },
            o = await t.createAndRun(i, { ...r, signal: this.controller.signal });
        this._connected();
        for await (const l of o) L(this, ge, "m", us).call(this, l);
        if ((a = o.controller.signal) != null && a.aborted) throw new ct();
        return this._addRun(L(this, ge, "m", cs).call(this));
    }
    async _createAssistantStream(t, n, r, s) {
        var l;
        const i = s == null ? void 0 : s.signal;
        i &&
        (i.aborted && this.controller.abort(),
            i.addEventListener("abort", () => this.controller.abort()));
        const o = { ...r, stream: !0 },
            a = await t.create(n, o, { ...s, signal: this.controller.signal });
        this._connected();
        for await (const u of a) L(this, ge, "m", us).call(this, u);
        if ((l = a.controller.signal) != null && l.aborted) throw new ct();
        return this._addRun(L(this, ge, "m", cs).call(this));
    }
    static accumulateDelta(t, n) {
        for (const [r, s] of Object.entries(n)) {
            if (!t.hasOwnProperty(r)) {
                t[r] = s;
                continue;
            }
            let i = t[r];
            if (i == null) {
                t[r] = s;
                continue;
            }
            if (r === "index" || r === "type") {
                t[r] = s;
                continue;
            }
            if (typeof i == "string" && typeof s == "string") i += s;
            else if (typeof i == "number" && typeof s == "number") i += s;
            else if (nl(i) && nl(s)) i = this.accumulateDelta(i, s);
            else if (Array.isArray(i) && Array.isArray(s)) {
                if (i.every((o) => typeof o == "string" || typeof o == "number")) {
                    i.push(...s);
                    continue;
                }
                for (const o of s) {
                    if (!nl(o))
                        throw new Error(
                            `Expected array delta entry to be an object but got: ${o}`,
                        );
                    const a = o.index;
                    if (a == null)
                        throw (
                            (console.error(o),
                                new Error(
                                    "Expected array delta entry to have an `index` property",
                                ))
                        );
                    if (typeof a != "number")
                        throw new Error(
                            `Expected array delta entry \`index\` property to be a number but got ${a}`,
                        );
                    const l = i[a];
                    l == null ? i.push(o) : (i[a] = this.accumulateDelta(l, o));
                }
                continue;
            } else
                throw Error(
                    `Unhandled record type: ${r}, deltaValue: ${s}, accValue: ${i}`,
                );
            t[r] = i;
        }
        return t;
    }
    _addRun(t) {
        return t;
    }
    async _threadAssistantStream(t, n, r) {
        return await this._createThreadAssistantStream(n, t, r);
    }
    async _runAssistantStream(t, n, r, s) {
        return await this._createAssistantStream(n, t, r, s);
    }
    async _runToolAssistantStream(t, n, r, s, i) {
        return await this._createToolAssistantStream(r, t, n, s, i);
    }
}
(us = function (t) {
    if (!this.ended)
        switch (
            (Be(this, to, t, "f"), L(this, ge, "m", dp).call(this, t), t.event)
            ) {
            case "thread.created":
                break;
            case "thread.run.created":
            case "thread.run.queued":
            case "thread.run.in_progress":
            case "thread.run.requires_action":
            case "thread.run.completed":
            case "thread.run.failed":
            case "thread.run.cancelling":
            case "thread.run.cancelled":
            case "thread.run.expired":
                L(this, ge, "m", gp).call(this, t);
                break;
            case "thread.run.step.created":
            case "thread.run.step.in_progress":
            case "thread.run.step.delta":
            case "thread.run.step.completed":
            case "thread.run.step.failed":
            case "thread.run.step.cancelled":
            case "thread.run.step.expired":
                L(this, ge, "m", fp).call(this, t);
                break;
            case "thread.message.created":
            case "thread.message.in_progress":
            case "thread.message.delta":
            case "thread.message.completed":
            case "thread.message.incomplete":
                L(this, ge, "m", cp).call(this, t);
                break;
            case "error":
                throw new Error(
                    "Encountered an error event in event processing - errors should be processed earlier",
                );
        }
}),
    (cs = function () {
        if (this.ended) throw new j("stream has ended, this shouldn't happen");
        if (!L(this, Mn, "f")) throw Error("Final run has not been received");
        return L(this, Mn, "f");
    }),
    (cp = function (t) {
        const [n, r] = L(this, ge, "m", pp).call(this, t, L(this, at, "f"));
        Be(this, at, n, "f"), (L(this, eo, "f")[n.id] = n);
        for (const s of r) {
            const i = n.content[s.index];
            (i == null ? void 0 : i.type) == "text" &&
            this._emit("textCreated", i.text);
        }
        switch (t.event) {
            case "thread.message.created":
                this._emit("messageCreated", t.data);
                break;
            case "thread.message.in_progress":
                break;
            case "thread.message.delta":
                if ((this._emit("messageDelta", t.data.delta, n), t.data.delta.content))
                    for (const s of t.data.delta.content) {
                        if (s.type == "text" && s.text) {
                            let i = s.text,
                                o = n.content[s.index];
                            if (o && o.type == "text") this._emit("textDelta", i, o.text);
                            else
                                throw Error(
                                    "The snapshot associated with this text delta is not text or missing",
                                );
                        }
                        if (s.index != L(this, hr, "f")) {
                            if (L(this, kn, "f"))
                                switch (L(this, kn, "f").type) {
                                    case "text":
                                        this._emit(
                                            "textDone",
                                            L(this, kn, "f").text,
                                            L(this, at, "f"),
                                        );
                                        break;
                                    case "image_file":
                                        this._emit(
                                            "imageFileDone",
                                            L(this, kn, "f").image_file,
                                            L(this, at, "f"),
                                        );
                                        break;
                                }
                            Be(this, hr, s.index, "f");
                        }
                        Be(this, kn, n.content[s.index], "f");
                    }
                break;
            case "thread.message.completed":
            case "thread.message.incomplete":
                if (L(this, hr, "f") !== void 0) {
                    const s = t.data.content[L(this, hr, "f")];
                    if (s)
                        switch (s.type) {
                            case "image_file":
                                this._emit("imageFileDone", s.image_file, L(this, at, "f"));
                                break;
                            case "text":
                                this._emit("textDone", s.text, L(this, at, "f"));
                                break;
                        }
                }
                L(this, at, "f") && this._emit("messageDone", t.data),
                    Be(this, at, void 0, "f");
        }
    }),
    (fp = function (t) {
        const n = L(this, ge, "m", hp).call(this, t);
        switch ((Be(this, Ps, n, "f"), t.event)) {
            case "thread.run.step.created":
                this._emit("runStepCreated", t.data);
                break;
            case "thread.run.step.delta":
                const r = t.data.delta;
                if (
                    r.step_details &&
                    r.step_details.type == "tool_calls" &&
                    r.step_details.tool_calls &&
                    n.step_details.type == "tool_calls"
                )
                    for (const i of r.step_details.tool_calls)
                        i.index == L(this, jo, "f")
                            ? this._emit(
                                "toolCallDelta",
                                i,
                                n.step_details.tool_calls[i.index],
                            )
                            : (L(this, $e, "f") &&
                            this._emit("toolCallDone", L(this, $e, "f")),
                                Be(this, jo, i.index, "f"),
                                Be(this, $e, n.step_details.tool_calls[i.index], "f"),
                            L(this, $e, "f") &&
                            this._emit("toolCallCreated", L(this, $e, "f")));
                this._emit("runStepDelta", t.data.delta, n);
                break;
            case "thread.run.step.completed":
            case "thread.run.step.failed":
            case "thread.run.step.cancelled":
            case "thread.run.step.expired":
                Be(this, Ps, void 0, "f"),
                t.data.step_details.type == "tool_calls" &&
                L(this, $e, "f") &&
                (this._emit("toolCallDone", L(this, $e, "f")),
                    Be(this, $e, void 0, "f")),
                    this._emit("runStepDone", t.data, n);
                break;
        }
    }),
    (dp = function (t) {
        L(this, Au, "f").push(t), this._emit("event", t);
    }),
    (hp = function (t) {
        switch (t.event) {
            case "thread.run.step.created":
                return (L(this, wt, "f")[t.data.id] = t.data), t.data;
            case "thread.run.step.delta":
                let n = L(this, wt, "f")[t.data.id];
                if (!n)
                    throw Error("Received a RunStepDelta before creation of a snapshot");
                let r = t.data;
                if (r.delta) {
                    const s = ft.accumulateDelta(n, r.delta);
                    L(this, wt, "f")[t.data.id] = s;
                }
                return L(this, wt, "f")[t.data.id];
            case "thread.run.step.completed":
            case "thread.run.step.failed":
            case "thread.run.step.cancelled":
            case "thread.run.step.expired":
            case "thread.run.step.in_progress":
                L(this, wt, "f")[t.data.id] = t.data;
                break;
        }
        if (L(this, wt, "f")[t.data.id]) return L(this, wt, "f")[t.data.id];
        throw new Error("No snapshot available");
    }),
    (pp = function (t, n) {
        let r = [];
        switch (t.event) {
            case "thread.message.created":
                return [t.data, r];
            case "thread.message.delta":
                if (!n)
                    throw Error(
                        "Received a delta with no existing snapshot (there should be one from message creation)",
                    );
                let s = t.data;
                if (s.delta.content)
                    for (const i of s.delta.content)
                        if (i.index in n.content) {
                            let o = n.content[i.index];
                            n.content[i.index] = L(this, ge, "m", mp).call(this, i, o);
                        } else (n.content[i.index] = i), r.push(i);
                return [n, r];
            case "thread.message.in_progress":
            case "thread.message.completed":
            case "thread.message.incomplete":
                if (n) return [n, r];
                throw Error("Received thread message event with no existing snapshot");
        }
        throw Error("Tried to accumulate a non-message event");
    }),
    (mp = function (t, n) {
        return ft.accumulateDelta(n, t);
    }),
    (gp = function (t) {
        switch ((Be(this, no, t.data, "f"), t.event)) {
            case "thread.run.created":
                break;
            case "thread.run.queued":
                break;
            case "thread.run.in_progress":
                break;
            case "thread.run.requires_action":
            case "thread.run.cancelled":
            case "thread.run.failed":
            case "thread.run.completed":
            case "thread.run.expired":
                Be(this, Mn, t.data, "f"),
                L(this, $e, "f") &&
                (this._emit("toolCallDone", L(this, $e, "f")),
                    Be(this, $e, void 0, "f"));
                break;
        }
    });
class ff extends z {
    create(t, n, r) {
        return this._client.post(`/threads/${t}/messages`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    retrieve(t, n, r) {
        return this._client.get(`/threads/${t}/messages/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    update(t, n, r, s) {
        return this._client.post(`/threads/${t}/messages/${n}`, {
            body: r,
            ...s,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(s == null ? void 0 : s.headers),
            },
        });
    }
    list(t, n = {}, r) {
        return be(n)
            ? this.list(t, {}, n)
            : this._client.getAPIList(`/threads/${t}/messages`, df, {
                query: n,
                ...r,
                headers: {
                    "OpenAI-Beta": "assistants=v2",
                    ...(r == null ? void 0 : r.headers),
                },
            });
    }
    del(t, n, r) {
        return this._client.delete(`/threads/${t}/messages/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
}
class df extends Et {}
ff.MessagesPage = df;
class hf extends z {
    retrieve(t, n, r, s = {}, i) {
        return be(s)
            ? this.retrieve(t, n, r, {}, s)
            : this._client.get(`/threads/${t}/runs/${n}/steps/${r}`, {
                query: s,
                ...i,
                headers: {
                    "OpenAI-Beta": "assistants=v2",
                    ...(i == null ? void 0 : i.headers),
                },
            });
    }
    list(t, n, r = {}, s) {
        return be(r)
            ? this.list(t, n, {}, r)
            : this._client.getAPIList(`/threads/${t}/runs/${n}/steps`, pf, {
                query: r,
                ...s,
                headers: {
                    "OpenAI-Beta": "assistants=v2",
                    ...(s == null ? void 0 : s.headers),
                },
            });
    }
}
class pf extends Et {}
hf.RunStepsPage = pf;
class ii extends z {
    constructor() {
        super(...arguments), (this.steps = new hf(this._client));
    }
    create(t, n, r) {
        const { include: s, ...i } = n;
        return this._client.post(`/threads/${t}/runs`, {
            query: { include: s },
            body: i,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
            stream: n.stream ?? !1,
        });
    }
    retrieve(t, n, r) {
        return this._client.get(`/threads/${t}/runs/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    update(t, n, r, s) {
        return this._client.post(`/threads/${t}/runs/${n}`, {
            body: r,
            ...s,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(s == null ? void 0 : s.headers),
            },
        });
    }
    list(t, n = {}, r) {
        return be(n)
            ? this.list(t, {}, n)
            : this._client.getAPIList(`/threads/${t}/runs`, mf, {
                query: n,
                ...r,
                headers: {
                    "OpenAI-Beta": "assistants=v2",
                    ...(r == null ? void 0 : r.headers),
                },
            });
    }
    cancel(t, n, r) {
        return this._client.post(`/threads/${t}/runs/${n}/cancel`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    async createAndPoll(t, n, r) {
        const s = await this.create(t, n, r);
        return await this.poll(t, s.id, r);
    }
    createAndStream(t, n, r) {
        return ft.createAssistantStream(t, this._client.beta.threads.runs, n, r);
    }
    async poll(t, n, r) {
        const s = {
            ...(r == null ? void 0 : r.headers),
            "X-Stainless-Poll-Helper": "true",
        };
        for (
            r != null &&
            r.pollIntervalMs &&
            (s["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString());
            ;

        ) {
            const { data: i, response: o } = await this.retrieve(t, n, {
                ...r,
                headers: { ...(r == null ? void 0 : r.headers), ...s },
            }).withResponse();
            switch (i.status) {
                case "queued":
                case "in_progress":
                case "cancelling":
                    let a = 5e3;
                    if (r != null && r.pollIntervalMs) a = r.pollIntervalMs;
                    else {
                        const l = o.headers.get("openai-poll-after-ms");
                        if (l) {
                            const u = parseInt(l);
                            isNaN(u) || (a = u);
                        }
                    }
                    await ni(a);
                    break;
                case "requires_action":
                case "incomplete":
                case "cancelled":
                case "completed":
                case "failed":
                case "expired":
                    return i;
            }
        }
    }
    stream(t, n, r) {
        return ft.createAssistantStream(t, this._client.beta.threads.runs, n, r);
    }
    submitToolOutputs(t, n, r, s) {
        return this._client.post(`/threads/${t}/runs/${n}/submit_tool_outputs`, {
            body: r,
            ...s,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(s == null ? void 0 : s.headers),
            },
            stream: r.stream ?? !1,
        });
    }
    async submitToolOutputsAndPoll(t, n, r, s) {
        const i = await this.submitToolOutputs(t, n, r, s);
        return await this.poll(t, i.id, s);
    }
    submitToolOutputsStream(t, n, r, s) {
        return ft.createToolAssistantStream(
            t,
            n,
            this._client.beta.threads.runs,
            r,
            s,
        );
    }
}
class mf extends Et {}
ii.RunsPage = mf;
ii.Steps = hf;
ii.RunStepsPage = pf;
class Br extends z {
    constructor() {
        super(...arguments),
            (this.runs = new ii(this._client)),
            (this.messages = new ff(this._client));
    }
    create(t = {}, n) {
        return be(t)
            ? this.create({}, t)
            : this._client.post("/threads", {
                body: t,
                ...n,
                headers: {
                    "OpenAI-Beta": "assistants=v2",
                    ...(n == null ? void 0 : n.headers),
                },
            });
    }
    retrieve(t, n) {
        return this._client.get(`/threads/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
    update(t, n, r) {
        return this._client.post(`/threads/${t}`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    del(t, n) {
        return this._client.delete(`/threads/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
    createAndRun(t, n) {
        return this._client.post("/threads/runs", {
            body: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
            stream: t.stream ?? !1,
        });
    }
    async createAndRunPoll(t, n) {
        const r = await this.createAndRun(t, n);
        return await this.runs.poll(r.thread_id, r.id, n);
    }
    createAndRunStream(t, n) {
        return ft.createThreadAssistantStream(t, this._client.beta.threads, n);
    }
}
Br.Runs = ii;
Br.RunsPage = mf;
Br.Messages = ff;
Br.MessagesPage = df;
const Pk = async (e) => {
    const t = await Promise.allSettled(e),
        n = t.filter((s) => s.status === "rejected");
    if (n.length) {
        for (const s of n) console.error(s.reason);
        throw new Error(`${n.length} promise(s) failed - see the above errors`);
    }
    const r = [];
    for (const s of t) s.status === "fulfilled" && r.push(s.value);
    return r;
};
let gf = class extends z {
    create(t, n, r) {
        return this._client.post(`/vector_stores/${t}/files`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    retrieve(t, n, r) {
        return this._client.get(`/vector_stores/${t}/files/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    list(t, n = {}, r) {
        return be(n)
            ? this.list(t, {}, n)
            : this._client.getAPIList(`/vector_stores/${t}/files`, fa, {
                query: n,
                ...r,
                headers: {
                    "OpenAI-Beta": "assistants=v2",
                    ...(r == null ? void 0 : r.headers),
                },
            });
    }
    del(t, n, r) {
        return this._client.delete(`/vector_stores/${t}/files/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    async createAndPoll(t, n, r) {
        const s = await this.create(t, n, r);
        return await this.poll(t, s.id, r);
    }
    async poll(t, n, r) {
        const s = {
            ...(r == null ? void 0 : r.headers),
            "X-Stainless-Poll-Helper": "true",
        };
        for (
            r != null &&
            r.pollIntervalMs &&
            (s["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString());
            ;

        ) {
            const i = await this.retrieve(t, n, { ...r, headers: s }).withResponse(),
                o = i.data;
            switch (o.status) {
                case "in_progress":
                    let a = 5e3;
                    if (r != null && r.pollIntervalMs) a = r.pollIntervalMs;
                    else {
                        const l = i.response.headers.get("openai-poll-after-ms");
                        if (l) {
                            const u = parseInt(l);
                            isNaN(u) || (a = u);
                        }
                    }
                    await ni(a);
                    break;
                case "failed":
                case "completed":
                    return o;
            }
        }
    }
    async upload(t, n, r) {
        const s = await this._client.files.create(
            { file: n, purpose: "assistants" },
            r,
        );
        return this.create(t, { file_id: s.id }, r);
    }
    async uploadAndPoll(t, n, r) {
        const s = await this.upload(t, n, r);
        return await this.poll(t, s.id, r);
    }
};
class fa extends Et {}
gf.VectorStoreFilesPage = fa;
class lv extends z {
    create(t, n, r) {
        return this._client.post(`/vector_stores/${t}/file_batches`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    retrieve(t, n, r) {
        return this._client.get(`/vector_stores/${t}/file_batches/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    cancel(t, n, r) {
        return this._client.post(`/vector_stores/${t}/file_batches/${n}/cancel`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    async createAndPoll(t, n, r) {
        const s = await this.create(t, n);
        return await this.poll(t, s.id, r);
    }
    listFiles(t, n, r = {}, s) {
        return be(r)
            ? this.listFiles(t, n, {}, r)
            : this._client.getAPIList(
                `/vector_stores/${t}/file_batches/${n}/files`,
                fa,
                {
                    query: r,
                    ...s,
                    headers: {
                        "OpenAI-Beta": "assistants=v2",
                        ...(s == null ? void 0 : s.headers),
                    },
                },
            );
    }
    async poll(t, n, r) {
        const s = {
            ...(r == null ? void 0 : r.headers),
            "X-Stainless-Poll-Helper": "true",
        };
        for (
            r != null &&
            r.pollIntervalMs &&
            (s["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString());
            ;

        ) {
            const { data: i, response: o } = await this.retrieve(t, n, {
                ...r,
                headers: s,
            }).withResponse();
            switch (i.status) {
                case "in_progress":
                    let a = 5e3;
                    if (r != null && r.pollIntervalMs) a = r.pollIntervalMs;
                    else {
                        const l = o.headers.get("openai-poll-after-ms");
                        if (l) {
                            const u = parseInt(l);
                            isNaN(u) || (a = u);
                        }
                    }
                    await ni(a);
                    break;
                case "failed":
                case "cancelled":
                case "completed":
                    return i;
            }
        }
    }
    async uploadAndPoll(t, { files: n, fileIds: r = [] }, s) {
        if (n == null || n.length == 0)
            throw new Error(
                "No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead",
            );
        const i = (s == null ? void 0 : s.maxConcurrency) ?? 5,
            o = Math.min(i, n.length),
            a = this._client,
            l = n.values(),
            u = [...r];
        async function f(d) {
            for (let g of d) {
                const y = await a.files.create({ file: g, purpose: "assistants" }, s);
                u.push(y.id);
            }
        }
        const c = Array(o).fill(l).map(f);
        return await Pk(c), await this.createAndPoll(t, { file_ids: u });
    }
}
class $r extends z {
    constructor() {
        super(...arguments),
            (this.files = new gf(this._client)),
            (this.fileBatches = new lv(this._client));
    }
    create(t, n) {
        return this._client.post("/vector_stores", {
            body: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
    retrieve(t, n) {
        return this._client.get(`/vector_stores/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
    update(t, n, r) {
        return this._client.post(`/vector_stores/${t}`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(r == null ? void 0 : r.headers),
            },
        });
    }
    list(t = {}, n) {
        return be(t)
            ? this.list({}, t)
            : this._client.getAPIList("/vector_stores", yf, {
                query: t,
                ...n,
                headers: {
                    "OpenAI-Beta": "assistants=v2",
                    ...(n == null ? void 0 : n.headers),
                },
            });
    }
    del(t, n) {
        return this._client.delete(`/vector_stores/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
}
class yf extends Et {}
$r.VectorStoresPage = yf;
$r.Files = gf;
$r.VectorStoreFilesPage = fa;
$r.FileBatches = lv;
class Wn extends z {
    constructor() {
        super(...arguments),
            (this.vectorStores = new $r(this._client)),
            (this.chat = new Tu(this._client)),
            (this.assistants = new lf(this._client)),
            (this.threads = new Br(this._client));
    }
}
Wn.VectorStores = $r;
Wn.VectorStoresPage = yf;
Wn.Assistants = lf;
Wn.AssistantsPage = uf;
Wn.Threads = Br;
class uv extends z {
    create(t, n) {
        return this._client.post("/completions", {
            body: t,
            ...n,
            stream: t.stream ?? !1,
        });
    }
}
class cv extends z {
    create(t, n) {
        return this._client.post("/embeddings", { body: t, ...n });
    }
}
class vf extends z {
    create(t, n) {
        return this._client.post("/files", Ir({ body: t, ...n }));
    }
    retrieve(t, n) {
        return this._client.get(`/files/${t}`, n);
    }
    list(t = {}, n) {
        return be(t)
            ? this.list({}, t)
            : this._client.getAPIList("/files", wf, { query: t, ...n });
    }
    del(t, n) {
        return this._client.delete(`/files/${t}`, n);
    }
    content(t, n) {
        return this._client.get(`/files/${t}/content`, {
            ...n,
            __binaryResponse: !0,
        });
    }
    retrieveContent(t, n) {
        return this._client.get(`/files/${t}/content`, {
            ...n,
            headers: {
                Accept: "application/json",
                ...(n == null ? void 0 : n.headers),
            },
        });
    }
    async waitForProcessing(
        t,
        { pollInterval: n = 5e3, maxWait: r = 30 * 60 * 1e3 } = {},
    ) {
        const s = new Set(["processed", "error", "deleted"]),
            i = Date.now();
        let o = await this.retrieve(t);
        for (; !o.status || !s.has(o.status); )
            if ((await ni(n), (o = await this.retrieve(t)), Date.now() - i > r))
                throw new rf({
                    message: `Giving up on waiting for file ${t} to finish processing after ${r} milliseconds.`,
                });
        return o;
    }
}
class wf extends I0 {}
vf.FileObjectsPage = wf;
class xf extends z {
    list(t, n = {}, r) {
        return be(n)
            ? this.list(t, {}, n)
            : this._client.getAPIList(`/fine_tuning/jobs/${t}/checkpoints`, Sf, {
                query: n,
                ...r,
            });
    }
}
class Sf extends Et {}
xf.FineTuningJobCheckpointsPage = Sf;
class zr extends z {
    constructor() {
        super(...arguments), (this.checkpoints = new xf(this._client));
    }
    create(t, n) {
        return this._client.post("/fine_tuning/jobs", { body: t, ...n });
    }
    retrieve(t, n) {
        return this._client.get(`/fine_tuning/jobs/${t}`, n);
    }
    list(t = {}, n) {
        return be(t)
            ? this.list({}, t)
            : this._client.getAPIList("/fine_tuning/jobs", _f, { query: t, ...n });
    }
    cancel(t, n) {
        return this._client.post(`/fine_tuning/jobs/${t}/cancel`, n);
    }
    listEvents(t, n = {}, r) {
        return be(n)
            ? this.listEvents(t, {}, n)
            : this._client.getAPIList(`/fine_tuning/jobs/${t}/events`, Cf, {
                query: n,
                ...r,
            });
    }
}
class _f extends Et {}
class Cf extends Et {}
zr.FineTuningJobsPage = _f;
zr.FineTuningJobEventsPage = Cf;
zr.Checkpoints = xf;
zr.FineTuningJobCheckpointsPage = Sf;
class oi extends z {
    constructor() {
        super(...arguments), (this.jobs = new zr(this._client));
    }
}
oi.Jobs = zr;
oi.FineTuningJobsPage = _f;
oi.FineTuningJobEventsPage = Cf;
class fv extends z {
    createVariation(t, n) {
        return this._client.post("/images/variations", Ir({ body: t, ...n }));
    }
    edit(t, n) {
        return this._client.post("/images/edits", Ir({ body: t, ...n }));
    }
    generate(t, n) {
        return this._client.post("/images/generations", { body: t, ...n });
    }
}
class Pf extends z {
    retrieve(t, n) {
        return this._client.get(`/models/${t}`, n);
    }
    list(t) {
        return this._client.getAPIList("/models", kf, t);
    }
    del(t, n) {
        return this._client.delete(`/models/${t}`, n);
    }
}
class kf extends I0 {}
Pf.ModelsPage = kf;
class dv extends z {
    create(t, n) {
        return this._client.post("/moderations", { body: t, ...n });
    }
}
class hv extends z {
    create(t, n, r) {
        return this._client.post(`/uploads/${t}/parts`, Ir({ body: n, ...r }));
    }
}
class Ef extends z {
    constructor() {
        super(...arguments), (this.parts = new hv(this._client));
    }
    create(t, n) {
        return this._client.post("/uploads", { body: t, ...n });
    }
    cancel(t, n) {
        return this._client.post(`/uploads/${t}/cancel`, n);
    }
    complete(t, n, r) {
        return this._client.post(`/uploads/${t}/complete`, { body: n, ...r });
    }
}
Ef.Parts = hv;
var pv;
class b extends ek {
    constructor({
                    baseURL: t = Ni("OPENAI_BASE_URL"),
                    apiKey: n = Ni("OPENAI_API_KEY"),
                    organization: r = Ni("OPENAI_ORG_ID") ?? null,
                    project: s = Ni("OPENAI_PROJECT_ID") ?? null,
                    ...i
                } = {}) {
        if (n === void 0)
            throw new j(
                "The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).",
            );
        const o = {
            apiKey: n,
            organization: r,
            project: s,
            ...i,
            baseURL: t || "https://api.openai.com/v1",
        };
        if (!o.dangerouslyAllowBrowser && fk())
            throw new j(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);
        super({
            baseURL: o.baseURL,
            timeout: o.timeout ?? 6e5,
            httpAgent: o.httpAgent,
            maxRetries: o.maxRetries,
            fetch: o.fetch,
        }),
            (this.completions = new uv(this)),
            (this.chat = new sf(this)),
            (this.embeddings = new cv(this)),
            (this.files = new vf(this)),
            (this.images = new fv(this)),
            (this.audio = new ri(this)),
            (this.moderations = new dv(this)),
            (this.models = new Pf(this)),
            (this.fineTuning = new oi(this)),
            (this.beta = new Wn(this)),
            (this.batches = new of(this)),
            (this.uploads = new Ef(this)),
            (this._options = o),
            (this.apiKey = n),
            (this.organization = r),
            (this.project = s);
    }
    defaultQuery() {
        return this._options.defaultQuery;
    }
    defaultHeaders(t) {
        return {
            ...super.defaultHeaders(t),
            "OpenAI-Organization": this.organization,
            "OpenAI-Project": this.project,
            ...this._options.defaultHeaders,
        };
    }
    authHeaders(t) {
        return { Authorization: `Bearer ${this.apiKey}` };
    }
    stringifyQuery(t) {
        return VP(t, { arrayFormat: "brackets" });
    }
}
pv = b;
b.OpenAI = pv;
b.DEFAULT_TIMEOUT = 6e5;
b.OpenAIError = j;
b.APIError = we;
b.APIConnectionError = la;
b.APIConnectionTimeoutError = rf;
b.APIUserAbortError = ct;
b.NotFoundError = w0;
b.ConflictError = x0;
b.RateLimitError = _0;
b.BadRequestError = g0;
b.AuthenticationError = y0;
b.InternalServerError = C0;
b.PermissionDeniedError = v0;
b.UnprocessableEntityError = S0;
b.toFile = R0;
b.fileFromPath = p0;
b.Completions = uv;
b.Chat = sf;
b.Embeddings = cv;
b.Files = vf;
b.FileObjectsPage = wf;
b.Images = fv;
b.Audio = ri;
b.Moderations = dv;
b.Models = Pf;
b.ModelsPage = kf;
b.FineTuning = oi;
b.Beta = Wn;
b.Batches = of;
b.BatchesPage = af;
b.Uploads = Ef;
const Tf = {
        OPENAI_API_KEY: "sk-proj-AIFstjEqUCJW2ENf10F1T3BlbkFJcEBRUFIOgsgRSGrw3mkW",
    },
    kk = new b({ apiKey: Tf.OPENAI_API_KEY, dangerouslyAllowBrowser: !0 }),
    Ek = ({ onResult: e }) => {
        const [t, n] = C.useState(!1),
            r = C.useRef(null),
            s = C.useRef([]),
            i = C.useRef(null),
            o = C.useRef(null),
            a = C.useRef(null),
            l = C.useRef(null),
            u = -50,
            f = 1500,
            c = C.useCallback(() => {
                i.current && (clearTimeout(i.current), (i.current = null)),
                l.current && (cancelAnimationFrame(l.current), (l.current = null)),
                o.current && (o.current.close(), (o.current = null)),
                    (s.current = []);
            }, []),
            d = C.useCallback(async () => {
                if (r.current && r.current.state !== "inactive") {
                    r.current.stop(), n(!1);
                    const x = new Blob(s.current, { type: "audio/webm" });
                    try {
                        const m = new FormData();
                        m.append("file", x, "audio.webm"), m.append("model", "whisper-1");
                        const h = await kk.audio.transcriptions.create({
                            file: new File([x], "audio.webm", { type: "audio/webm" }),
                            model: "whisper-1",
                        });
                        h.text && e && e(h.text);
                    } catch (m) {
                        console.error("Transcription error:", m);
                    }
                    (s.current = []), c();
                }
            }, [e, c]),
            g = C.useCallback(() => {
                if (!t || !a.current) return;
                const x = new Uint8Array(a.current.frequencyBinCount);
                a.current.getByteFrequencyData(x);
                const m = x.reduce((p, w) => p + w) / x.length;
                20 * Math.log10(m / 255) < u
                    ? i.current ||
                    (i.current = setTimeout(() => {
                        d();
                    }, f))
                    : i.current && (clearTimeout(i.current), (i.current = null)),
                    (l.current = requestAnimationFrame(g));
            }, [t, d]),
            y = C.useCallback(async () => {
                try {
                    const x = await navigator.mediaDevices.getUserMedia({ audio: !0 });
                    (o.current = new AudioContext()),
                        (a.current = o.current.createAnalyser()),
                        o.current.createMediaStreamSource(x).connect(a.current),
                        (a.current.minDecibels = -90),
                        (a.current.maxDecibels = -10),
                        (a.current.smoothingTimeConstant = 0.85),
                        (a.current.fftSize = 2048);
                    const h = new MediaRecorder(x, { mimeType: "audio/webm" });
                    (h.ondataavailable = (p) => {
                        p.data.size > 0 && s.current.push(p.data);
                    }),
                        (h.onstart = () => {
                            (s.current = []), (l.current = requestAnimationFrame(g));
                        }),
                        (h.onstop = () => {
                            x.getTracks().forEach((p) => p.stop()), c();
                        }),
                        (r.current = h),
                        h.start(1e3),
                        n(!0);
                } catch (x) {
                    console.error("Failed to start recording:", x);
                }
            }, [g, c]),
            v = C.useCallback(() => {
                t ? d() : y();
            }, [t, y, d]);
        return (
            C.useEffect(
                () => () => {
                    t && d(), c();
                },
                [t, d, c],
            ),
                {
                    isListening: t,
                    toggleListening: v,
                    startListening: y,
                    stopListening: d,
                }
        );
    },
    Tk = new b({ apiKey: Tf.OPENAI_API_KEY, dangerouslyAllowBrowser: !0 }),
    Ak = ({ language: e, voice: t } = {}) => {
        const { settings: n } = nf();
        return {
            speak: C.useCallback(
                async (s) => {
                    if (s)
                        try {
                            const o = await (
                                    await Tk.audio.speech.create({
                                        model: "gpt-4o-mini-tts",
                                        voice: t || n.voiceGender,
                                        instructions: "Speak like a native speaker of the language.",
                                        input: s,
                                    })
                                ).blob(),
                                a = URL.createObjectURL(o),
                                l = new Audio(a);
                            await l.play(),
                                (l.onended = () => {
                                    URL.revokeObjectURL(a);
                                });
                        } catch (i) {
                            console.error("Speech synthesis error:", i);
                        }
                },
                [t, n.voiceGender],
            ),
        };
    },
    mv = new b({ apiKey: Tf.OPENAI_API_KEY, dangerouslyAllowBrowser: !0 }),
    yp = async (e) => {
        var t, n, r;
        try {
            return (
                ((r =
                    (n =
                        (t = (
                            await mv.chat.completions.create({
                                model: "gpt-4o",
                                messages: [
                                    {
                                        role: "system",
                                        content:
                                            "You are a language detection expert. Return only the ISO 639-1 language code for the provided text.",
                                    },
                                    {
                                        role: "user",
                                        content: `Detect the language of this text and respond with only the ISO 639-1 code: "${e}"`,
                                    },
                                ],
                                temperature: 0,
                            })
                        ).choices[0]) == null
                            ? void 0
                            : t.message) == null
                        ? void 0
                        : n.content) == null
                    ? void 0
                    : r.trim().toLowerCase()) || "en"
            );
        } catch (s) {
            return console.error("Language detection error:", s), "en";
        }
    },
    vp = async (e, t) => {
        var n, r;
        try {
            return (
                ((r =
                    (n = (
                        await mv.chat.completions.create({
                            model: "gpt-4",
                            messages: [
                                {
                                    role: "system",
                                    content: `You are a professional translator. Translate the following text to ${t}. Provide only the translation without any additional comments.`,
                                },
                                { role: "user", content: e },
                            ],
                            temperature: 0.3,
                        })
                    ).choices[0]) == null
                        ? void 0
                        : n.message) == null
                    ? void 0
                    : r.content) || ""
            );
        } catch (s) {
            throw (
                (console.error("Translation error:", s),
                    new Error("Translation failed. Please try again."))
            );
        }
    },
    gv = C.createContext(void 0),
    Rk = ({ children: e }) => {
        const [t, n] = C.useState([]),
            r = C.useCallback((s, i) => {
                const o = Date.now();
                n((a) => [...a, { id: o, message: s, type: i }]),
                    setTimeout(() => {
                        n((a) => a.filter((l) => l.id !== o));
                    }, 3e3);
            }, []);
        return T.jsxs(gv.Provider, {
            value: { showToast: r },
            children: [
                e,
                T.jsx("div", {
                    className: "fixed bottom-4 right-4 z-50",
                    children: T.jsx(s0, {
                        children: t.map((s) =>
                            T.jsx(
                                Fr.div,
                                {
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: { opacity: 0, y: -20 },
                                    className: `mb-2 px-4 py-2 rounded-lg shadow-lg ${s.type === "success" ? "bg-green-500" : s.type === "error" ? "bg-red-500" : "bg-blue-500"} text-white`,
                                    children: s.message,
                                },
                                s.id,
                            ),
                        ),
                    }),
                }),
            ],
        });
    },
    Mk = () => {
        const e = C.useContext(gv);
        if (!e) throw new Error("useToast must be used within a ToastProvider");
        return e;
    };
function Lk(e, t) {
    var n = C.useRef(!1),
        r = C.useRef(),
        s = C.useRef(e),
        i = C.useCallback(function () {
            return n.current;
        }, []),
        o = C.useCallback(
            function () {
                (n.current = !1),
                r.current && clearTimeout(r.current),
                    (r.current = setTimeout(function () {
                        (n.current = !0), s.current();
                    }, t));
            },
            [t],
        ),
        a = C.useCallback(function () {
            (n.current = null), r.current && clearTimeout(r.current);
        }, []);
    return (
        C.useEffect(
            function () {
                s.current = e;
            },
            [e],
        ),
            C.useEffect(
                function () {
                    return o(), a;
                },
                [t],
            ),
            [i, a, o]
    );
}
function Nk(e, t, n) {
    n === void 0 && (n = []);
    var r = Lk(e, t),
        s = r[0],
        i = r[1],
        o = r[2];
    return C.useEffect(o, n), [s, i];
}
function Dk() {
    const { settings: e } = nf(),
        [t, n] = C.useState(""),
        [r, s] = C.useState(""),
        [i, o] = C.useState(e.defaultTargetLanguage),
        [a, l] = C.useState(),
        [u, f] = C.useState(!1),
        [c, d] = C.useState(!1),
        { showToast: g } = Mk(),
        { isListening: y, toggleListening: v } = Ek({
            onResult: async (w) => {
                n((S) => S + " " + w);
                try {
                    const S = await yp(w);
                    l(S);
                    const _ = await vp(w, i);
                    s((P) => P + " " + _), e.autoPlayTranslation && x(_);
                } catch {
                    g("Translation failed", "error");
                }
            },
        }),
        { speak: x } = Ak({ language: i, voice: e.voiceGender }),
        m = C.useCallback(async (w) => {
            if (w.trim()) {
                d(!0);
                try {
                    const S = await yp(w);
                    l(S);
                } catch (S) {
                    console.error("Language detection failed:", S);
                } finally {
                    d(!1);
                }
            }
        }, []),
        h = C.useCallback(async () => {
            if (!t.trim() || !i) {
                g("Please enter text and select a target language", "error");
                return;
            }
            f(!0);
            try {
                const w = await vp(t, i);
                s(w), e.autoPlayTranslation && x(w);
            } catch {
                g("Translation failed. Please try again.", "error");
            } finally {
                f(!1);
            }
        }, [t, i, g, x, e.autoPlayTranslation]),
        p = async (w) => {
            try {
                await navigator.clipboard.writeText(w),
                    g("Copied to clipboard!", "success");
            } catch {
                g("Failed to copy text", "error");
            }
        };
    return (
        Nk(
            () => {
                t.trim().length > 10 && m(t);
            },
            1e3,
            [t],
        ),
            C.useEffect(() => {
                a && i && t.trim().length > 0 && h();
            }, [a, i, h]),
            C.useEffect(() => {
                o(e.defaultTargetLanguage);
            }, [e.defaultTargetLanguage]),
            T.jsxs("div", {
                className: "min-h-screen bg-[#1C1C1E]",
                children: [
                    T.jsx(TP, {}),
                    T.jsx("main", {
                        className: "container mx-auto px-4 py-8 max-w-6xl",
                        children: T.jsxs(Fr.div, {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            className:
                                "bg-[#2C2C2E] rounded-2xl shadow-lg p-6 backdrop-blur-lg",
                            children: [
                                T.jsx("div", {
                                    className: "mb-6 flex justify-between items-center",
                                    children: T.jsx(CP, {
                                        value: i,
                                        onChange: o,
                                        detectedLanguage: a,
                                    }),
                                }),
                                T.jsxs("div", {
                                    className: "space-y-6",
                                    children: [
                                        T.jsx(Jh, {
                                            value: t,
                                            onChange: n,
                                            placeholder: "Type or speak your text here...",
                                            isProcessing: c,
                                            actions: T.jsxs(T.Fragment, {
                                                children: [
                                                    T.jsx("button", {
                                                        onClick: v,
                                                        className: `p-2 rounded-full ${y ? "bg-[#FF453A] text-white" : "hover:bg-[#3A3A3C]"}`,
                                                        title: y ? "Stop listening" : "Start listening",
                                                        children: T.jsx(vP, { className: "w-5 h-5" }),
                                                    }),
                                                    T.jsx("button", {
                                                        onClick: () => n(""),
                                                        className: "p-2 rounded-full hover:bg-[#3A3A3C]",
                                                        title: "Clear text",
                                                        children: T.jsx(wP, { className: "w-5 h-5" }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        T.jsx(Jh, {
                                            value: r,
                                            readOnly: !0,
                                            placeholder:
                                                "Translation will appear here automatically...",
                                            isProcessing: u,
                                            actions: T.jsxs(T.Fragment, {
                                                children: [
                                                    T.jsx("button", {
                                                        onClick: () => x(r),
                                                        className: "p-2 rounded-full hover:bg-[#3A3A3C]",
                                                        title: "Listen to translation",
                                                        disabled: !r,
                                                        children: T.jsx(SP, { className: "w-5 h-5" }),
                                                    }),
                                                    T.jsx("button", {
                                                        onClick: () => p(r),
                                                        className: "p-2 rounded-full hover:bg-[#3A3A3C]",
                                                        title: "Copy translation",
                                                        disabled: !r,
                                                        children: T.jsx(gP, { className: "w-5 h-5" }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            })
    );
}
Lg(document.getElementById("root")).render(
    T.jsx(C.StrictMode, {
        children: T.jsx(kP, { children: T.jsx(Rk, { children: T.jsx(Dk, {}) }) }),
    }),
);
