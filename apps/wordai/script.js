function Cg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Ht =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rf = { exports: {} },
  Ki = {},
  Tf = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ho = Symbol.for("react.element"),
  Pg = Symbol.for("react.portal"),
  Og = Symbol.for("react.fragment"),
  Rg = Symbol.for("react.strict_mode"),
  Tg = Symbol.for("react.profiler"),
  Ag = Symbol.for("react.provider"),
  _g = Symbol.for("react.context"),
  kg = Symbol.for("react.forward_ref"),
  bg = Symbol.for("react.suspense"),
  Mg = Symbol.for("react.memo"),
  Ng = Symbol.for("react.lazy"),
  vc = Symbol.iterator;
function jg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vc && e[vc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _f = Object.assign,
  kf = {};
function dr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kf),
    (this.updater = n || Af);
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bf() {}
bf.prototype = dr.prototype;
function Fl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kf),
    (this.updater = n || Af);
}
var Ll = (Fl.prototype = new bf());
Ll.constructor = Fl;
_f(Ll, dr.prototype);
Ll.isPureReactComponent = !0;
var gc = Array.isArray,
  Mf = Object.prototype.hasOwnProperty,
  Dl = { current: null },
  Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function jf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Mf.call(t, r) && !Nf.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ho,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Dl.current,
  };
}
function Ig(e, t) {
  return {
    $$typeof: ho,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ul(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ho;
}
function Fg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yc = /\/+/g;
function Ps(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fg("" + e.key)
    : t.toString(36);
}
function Qo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ho:
          case Pg:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Ps(s, 0) : r),
      gc(o)
        ? ((n = ""),
          e != null && (n = e.replace(yc, "$&/") + "/"),
          Qo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ul(o) &&
            (o = Ig(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(yc, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), gc(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Ps(i, a);
      s += Qo(i, t, n, l, o);
    }
  else if (((l = jg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Ps(i, a++)), (s += Qo(i, t, n, l, o));
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
  return s;
}
function Oo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Qo(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Lg(e) {
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
var Te = { current: null },
  Yo = { transition: null },
  Dg = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Yo,
    ReactCurrentOwner: Dl,
  };
function If() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: Oo,
  forEach: function (e, t, n) {
    Oo(
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
      Oo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Oo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ul(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
$.Component = dr;
$.Fragment = Og;
$.Profiler = Tg;
$.PureComponent = Fl;
$.StrictMode = Rg;
$.Suspense = bg;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dg;
$.act = If;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = _f({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Dl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Mf.call(t, l) &&
        !Nf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ho, type: e.type, key: o, ref: i, props: r, _owner: s };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: _g,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ag, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = jf;
$.createFactory = function (e) {
  var t = jf.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: kg, render: e };
};
$.isValidElement = Ul;
$.lazy = function (e) {
  return { $$typeof: Ng, _payload: { _status: -1, _result: e }, _init: Lg };
};
$.memo = function (e, t) {
  return { $$typeof: Mg, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = Yo.transition;
  Yo.transition = {};
  try {
    e();
  } finally {
    Yo.transition = t;
  }
};
$.unstable_act = If;
$.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Te.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
$.useId = function () {
  return Te.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Te.current.useRef(e);
};
$.useState = function (e) {
  return Te.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Te.current.useTransition();
};
$.version = "18.3.1";
Tf.exports = $;
var y = Tf.exports;
const Dt = Of(y),
  Ug = Cg({ __proto__: null, default: Dt }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zg = y,
  Vg = Symbol.for("react.element"),
  $g = Symbol.for("react.fragment"),
  Bg = Object.prototype.hasOwnProperty,
  Hg = zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Bg.call(t, r) && !Wg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Vg,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Hg.current,
  };
}
Ki.Fragment = $g;
Ki.jsx = Ff;
Ki.jsxs = Ff;
Rf.exports = Ki;
var E = Rf.exports,
  Lf = { exports: {} },
  He = {},
  Df = { exports: {} },
  Uf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, T) {
    var N = R.length;
    R.push(T);
    e: for (; 0 < N; ) {
      var L = (N - 1) >>> 1,
        W = R[L];
      if (0 < o(W, T)) (R[L] = T), (R[N] = W), (N = L);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var T = R[0],
      N = R.pop();
    if (N !== T) {
      R[0] = N;
      e: for (var L = 0, W = R.length, Ee = W >>> 1; L < Ee; ) {
        var ve = 2 * (L + 1) - 1,
          jt = R[ve],
          Ce = ve + 1,
          ke = R[Ce];
        if (0 > o(jt, N))
          Ce < W && 0 > o(ke, jt)
            ? ((R[L] = ke), (R[Ce] = N), (L = Ce))
            : ((R[L] = jt), (R[ve] = N), (L = ve));
        else if (Ce < W && 0 > o(ke, N)) (R[L] = ke), (R[Ce] = N), (L = Ce);
        else break e;
      }
    }
    return T;
  }
  function o(R, T) {
    var N = R.sortIndex - T.sortIndex;
    return N !== 0 ? N : R.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    p = !1,
    g = !1,
    h = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(R) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= R)
        r(u), (T.sortIndex = T.expirationTime), t(l, T);
      else break;
      T = n(u);
    }
  }
  function S(R) {
    if (((h = !1), w(R), !g))
      if (n(l) !== null) (g = !0), D(C);
      else {
        var T = n(u);
        T !== null && H(S, T.startTime - R);
      }
  }
  function C(R, T) {
    (g = !1), h && ((h = !1), m(A), (A = -1)), (p = !0);
    var N = f;
    try {
      for (
        w(T), c = n(l);
        c !== null && (!(c.expirationTime > T) || (R && !F()));

      ) {
        var L = c.callback;
        if (typeof L == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var W = L(c.expirationTime <= T);
          (T = e.unstable_now()),
            typeof W == "function" ? (c.callback = W) : c === n(l) && r(l),
            w(T);
        } else r(l);
        c = n(l);
      }
      if (c !== null) var Ee = !0;
      else {
        var ve = n(u);
        ve !== null && H(S, ve.startTime - T), (Ee = !1);
      }
      return Ee;
    } finally {
      (c = null), (f = N), (p = !1);
    }
  }
  var O = !1,
    P = null,
    A = -1,
    I = 5,
    k = -1;
  function F() {
    return !(e.unstable_now() - k < I);
  }
  function M() {
    if (P !== null) {
      var R = e.unstable_now();
      k = R;
      var T = !0;
      try {
        T = P(!0, R);
      } finally {
        T ? V() : ((O = !1), (P = null));
      }
    } else O = !1;
  }
  var V;
  if (typeof v == "function")
    V = function () {
      v(M);
    };
  else if (typeof MessageChannel < "u") {
    var b = new MessageChannel(),
      B = b.port2;
    (b.port1.onmessage = M),
      (V = function () {
        B.postMessage(null);
      });
  } else
    V = function () {
      x(M, 0);
    };
  function D(R) {
    (P = R), O || ((O = !0), V());
  }
  function H(R, T) {
    A = x(function () {
      R(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), D(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = f;
      }
      var N = f;
      f = T;
      try {
        return R();
      } finally {
        f = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, T) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var N = f;
      f = R;
      try {
        return T();
      } finally {
        f = N;
      }
    }),
    (e.unstable_scheduleCallback = function (R, T, N) {
      var L = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? L + N : L))
          : (N = L),
        R)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = N + W),
        (R = {
          id: d++,
          callback: T,
          priorityLevel: R,
          startTime: N,
          expirationTime: W,
          sortIndex: -1,
        }),
        N > L
          ? ((R.sortIndex = N),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (h ? (m(A), (A = -1)) : (h = !0), H(S, N - L)))
          : ((R.sortIndex = W), t(l, R), g || p || ((g = !0), D(C))),
        R
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (R) {
      var T = f;
      return function () {
        var N = f;
        f = T;
        try {
          return R.apply(this, arguments);
        } finally {
          f = N;
        }
      };
    });
})(Uf);
Df.exports = Uf;
var Kg = Df.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qg = y,
  Be = Kg;
function _(e) {
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
var zf = new Set(),
  Kr = {};
function On(e, t) {
  nr(e, t), nr(e + "Capture", t);
}
function nr(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) zf.add(t[e]);
}
var Tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Aa = Object.prototype.hasOwnProperty,
  Gg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wc = {},
  xc = {};
function Qg(e) {
  return Aa.call(xc, e)
    ? !0
    : Aa.call(wc, e)
      ? !1
      : Gg.test(e)
        ? (xc[e] = !0)
        : ((wc[e] = !0), !1);
}
function Yg(e, t, n, r) {
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
function Xg(e, t, n, r) {
  if (t === null || typeof t > "u" || Yg(e, t, n, r)) return !0;
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
function Ae(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zl = /[\-:]([a-z])/g;
function Vl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zl, Vl);
    he[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zl, Vl);
    he[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zl, Vl);
  he[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xg(t, n, o, r) && (n = null),
    r || o === null
      ? Qg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ro = Symbol.for("react.element"),
  In = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  Bl = Symbol.for("react.strict_mode"),
  _a = Symbol.for("react.profiler"),
  Vf = Symbol.for("react.provider"),
  $f = Symbol.for("react.context"),
  Hl = Symbol.for("react.forward_ref"),
  ka = Symbol.for("react.suspense"),
  ba = Symbol.for("react.suspense_list"),
  Wl = Symbol.for("react.memo"),
  zt = Symbol.for("react.lazy"),
  Bf = Symbol.for("react.offscreen"),
  Sc = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sc && e[Sc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Os;
function br(e) {
  if (Os === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Os = (t && t[1]) || "";
    }
  return (
    `
` +
    Os +
    e
  );
}
var Rs = !1;
function Ts(e, t) {
  if (!e || Rs) return "";
  Rs = !0;
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
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Rs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function Zg(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ts(e.type, !1)), e;
    case 11:
      return (e = Ts(e.type.render, !1)), e;
    case 1:
      return (e = Ts(e.type, !0)), e;
    default:
      return "";
  }
}
function Ma(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case In:
      return "Portal";
    case _a:
      return "Profiler";
    case Bl:
      return "StrictMode";
    case ka:
      return "Suspense";
    case ba:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $f:
        return (e.displayName || "Context") + ".Consumer";
      case Vf:
        return (e._context.displayName || "Context") + ".Provider";
      case Hl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Wl:
        return (
          (t = e.displayName || null), t !== null ? t : Ma(e.type) || "Memo"
        );
      case zt:
        (t = e._payload), (e = e._init);
        try {
          return Ma(e(t));
        } catch {}
    }
  return null;
}
function Jg(e) {
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
      return Ma(t);
    case 8:
      return t === Bl ? "StrictMode" : "Mode";
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
function tn(e) {
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
function Hf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ey(e) {
  var t = Hf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function To(e) {
  e._valueTracker || (e._valueTracker = ey(e));
}
function Wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Na(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ec(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = tn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Kf(e, t) {
  (t = t.checked), t != null && $l(e, "checked", t, !1);
}
function ja(e, t) {
  Kf(e, t);
  var n = tn(t.value),
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
    ? Ia(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ia(e, t.type, tn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cc(e, t, n) {
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
function Ia(e, t, n) {
  (t !== "number" || vi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + tn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: tn(n) };
}
function qf(e, t) {
  var n = tn(t.value),
    r = tn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Oc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function La(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ao,
  Qf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ao = Ao || document.createElement("div"),
          Ao.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ao.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fr = {
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
  ty = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fr).forEach(function (e) {
  ty.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fr[t] = Fr[e]);
  });
});
function Yf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fr.hasOwnProperty(e) && Fr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Xf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Yf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var ny = te(
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
function Da(e, t) {
  if (t) {
    if (ny[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Ua(e, t) {
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
var za = null;
function Kl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Va = null,
  Gn = null,
  Qn = null;
function Rc(e) {
  if ((e = go(e))) {
    if (typeof Va != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Xi(t)), Va(e.stateNode, e.type, t));
  }
}
function Zf(e) {
  Gn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Gn = e);
}
function Jf() {
  if (Gn) {
    var e = Gn,
      t = Qn;
    if (((Qn = Gn = null), Rc(e), t)) for (e = 0; e < t.length; e++) Rc(t[e]);
  }
}
function ep(e, t) {
  return e(t);
}
function tp() {}
var As = !1;
function np(e, t, n) {
  if (As) return e(t, n);
  As = !0;
  try {
    return ep(e, t, n);
  } finally {
    (As = !1), (Gn !== null || Qn !== null) && (tp(), Jf());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xi(n);
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
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var $a = !1;
if (Tt)
  try {
    var Er = {};
    Object.defineProperty(Er, "passive", {
      get: function () {
        $a = !0;
      },
    }),
      window.addEventListener("test", Er, Er),
      window.removeEventListener("test", Er, Er);
  } catch {
    $a = !1;
  }
function ry(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Lr = !1,
  gi = null,
  yi = !1,
  Ba = null,
  oy = {
    onError: function (e) {
      (Lr = !0), (gi = e);
    },
  };
function iy(e, t, n, r, o, i, s, a, l) {
  (Lr = !1), (gi = null), ry.apply(oy, arguments);
}
function sy(e, t, n, r, o, i, s, a, l) {
  if ((iy.apply(this, arguments), Lr)) {
    if (Lr) {
      var u = gi;
      (Lr = !1), (gi = null);
    } else throw Error(_(198));
    yi || ((yi = !0), (Ba = u));
  }
}
function Rn(e) {
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
function rp(e) {
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
function Tc(e) {
  if (Rn(e) !== e) throw Error(_(188));
}
function ay(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Tc(o), e;
        if (i === r) return Tc(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function op(e) {
  return (e = ay(e)), e !== null ? ip(e) : null;
}
function ip(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ip(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sp = Be.unstable_scheduleCallback,
  Ac = Be.unstable_cancelCallback,
  ly = Be.unstable_shouldYield,
  uy = Be.unstable_requestPaint,
  ie = Be.unstable_now,
  cy = Be.unstable_getCurrentPriorityLevel,
  ql = Be.unstable_ImmediatePriority,
  ap = Be.unstable_UserBlockingPriority,
  wi = Be.unstable_NormalPriority,
  dy = Be.unstable_LowPriority,
  lp = Be.unstable_IdlePriority,
  qi = null,
  ht = null;
function fy(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(qi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : my,
  py = Math.log,
  hy = Math.LN2;
function my(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((py(e) / hy) | 0)) | 0;
}
var _o = 64,
  ko = 4194304;
function Nr(e) {
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
function xi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Nr(a)) : ((i &= s), i !== 0 && (r = Nr(i)));
  } else (s = n & ~o), s !== 0 ? (r = Nr(s)) : i !== 0 && (r = Nr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function vy(e, t) {
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
function gy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - it(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = vy(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Ha(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function up() {
  var e = _o;
  return (_o <<= 1), !(_o & 4194240) && (_o = 64), e;
}
function _s(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function yy(e, t) {
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
    var o = 31 - it(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Gl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var q = 0;
function cp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dp,
  Ql,
  fp,
  pp,
  hp,
  Wa = !1,
  bo = [],
  qt = null,
  Gt = null,
  Qt = null,
  Qr = new Map(),
  Yr = new Map(),
  $t = [],
  wy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function _c(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function Cr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = go(t)), t !== null && Ql(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function xy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (qt = Cr(qt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Gt = Cr(Gt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Qt = Cr(Qt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Qr.set(i, Cr(Qr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Yr.set(i, Cr(Yr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function mp(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rp(n)), t !== null)) {
          (e.blockedOn = t),
            hp(e.priority, function () {
              fp(n);
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
function Xo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ka(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (za = r), n.target.dispatchEvent(r), (za = null);
    } else return (t = go(n)), t !== null && Ql(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function kc(e, t, n) {
  Xo(e) && n.delete(t);
}
function Sy() {
  (Wa = !1),
    qt !== null && Xo(qt) && (qt = null),
    Gt !== null && Xo(Gt) && (Gt = null),
    Qt !== null && Xo(Qt) && (Qt = null),
    Qr.forEach(kc),
    Yr.forEach(kc);
}
function Pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wa ||
      ((Wa = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Sy)));
}
function Xr(e) {
  function t(o) {
    return Pr(o, e);
  }
  if (0 < bo.length) {
    Pr(bo[0], e);
    for (var n = 1; n < bo.length; n++) {
      var r = bo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qt !== null && Pr(qt, e),
      Gt !== null && Pr(Gt, e),
      Qt !== null && Pr(Qt, e),
      Qr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < $t.length;
    n++
  )
    (r = $t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $t.length && ((n = $t[0]), n.blockedOn === null); )
    mp(n), n.blockedOn === null && $t.shift();
}
var Yn = Nt.ReactCurrentBatchConfig,
  Si = !0;
function Ey(e, t, n, r) {
  var o = q,
    i = Yn.transition;
  Yn.transition = null;
  try {
    (q = 1), Yl(e, t, n, r);
  } finally {
    (q = o), (Yn.transition = i);
  }
}
function Cy(e, t, n, r) {
  var o = q,
    i = Yn.transition;
  Yn.transition = null;
  try {
    (q = 4), Yl(e, t, n, r);
  } finally {
    (q = o), (Yn.transition = i);
  }
}
function Yl(e, t, n, r) {
  if (Si) {
    var o = Ka(e, t, n, r);
    if (o === null) Us(e, t, r, Ei, n), _c(e, r);
    else if (xy(o, e, t, n, r)) r.stopPropagation();
    else if ((_c(e, r), t & 4 && -1 < wy.indexOf(e))) {
      for (; o !== null; ) {
        var i = go(o);
        if (
          (i !== null && dp(i),
          (i = Ka(e, t, n, r)),
          i === null && Us(e, t, r, Ei, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Us(e, t, r, null, n);
  }
}
var Ei = null;
function Ka(e, t, n, r) {
  if (((Ei = null), (e = Kl(r)), (e = hn(e)), e !== null))
    if (((t = Rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ei = e), null;
}
function vp(e) {
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
      switch (cy()) {
        case ql:
          return 1;
        case ap:
          return 4;
        case wi:
        case dy:
          return 16;
        case lp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null,
  Xl = null,
  Zo = null;
function gp() {
  if (Zo) return Zo;
  var e,
    t = Xl,
    n = t.length,
    r,
    o = "value" in Wt ? Wt.value : Wt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Zo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Jo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mo() {
  return !0;
}
function bc() {
  return !1;
}
function We(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Mo
        : bc),
      (this.isPropagationStopped = bc),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Mo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mo));
      },
      persist: function () {},
      isPersistent: Mo,
    }),
    t
  );
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zl = We(fr),
  vo = te({}, fr, { view: 0, detail: 0 }),
  Py = We(vo),
  ks,
  bs,
  Or,
  Gi = te({}, vo, {
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
    getModifierState: Jl,
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
        : (e !== Or &&
            (Or && e.type === "mousemove"
              ? ((ks = e.screenX - Or.screenX), (bs = e.screenY - Or.screenY))
              : (bs = ks = 0),
            (Or = e)),
          ks);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bs;
    },
  }),
  Mc = We(Gi),
  Oy = te({}, Gi, { dataTransfer: 0 }),
  Ry = We(Oy),
  Ty = te({}, vo, { relatedTarget: 0 }),
  Ms = We(Ty),
  Ay = te({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _y = We(Ay),
  ky = te({}, fr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  by = We(ky),
  My = te({}, fr, { data: 0 }),
  Nc = We(My),
  Ny = {
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
  jy = {
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
  Iy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Fy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Iy[e]) ? !!t[e] : !1;
}
function Jl() {
  return Fy;
}
var Ly = te({}, vo, {
    key: function (e) {
      if (e.key) {
        var t = Ny[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? jy[e.keyCode] || "Unidentified"
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
    getModifierState: Jl,
    charCode: function (e) {
      return e.type === "keypress" ? Jo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Jo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Dy = We(Ly),
  Uy = te({}, Gi, {
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
  jc = We(Uy),
  zy = te({}, vo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl,
  }),
  Vy = We(zy),
  $y = te({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  By = We($y),
  Hy = te({}, Gi, {
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
  Wy = We(Hy),
  Ky = [9, 13, 27, 32],
  eu = Tt && "CompositionEvent" in window,
  Dr = null;
Tt && "documentMode" in document && (Dr = document.documentMode);
var qy = Tt && "TextEvent" in window && !Dr,
  yp = Tt && (!eu || (Dr && 8 < Dr && 11 >= Dr)),
  Ic = " ",
  Fc = !1;
function wp(e, t) {
  switch (e) {
    case "keyup":
      return Ky.indexOf(t.keyCode) !== -1;
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
function xp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function Gy(e, t) {
  switch (e) {
    case "compositionend":
      return xp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fc = !0), Ic);
    case "textInput":
      return (e = t.data), e === Ic && Fc ? null : e;
    default:
      return null;
  }
}
function Qy(e, t) {
  if (Ln)
    return e === "compositionend" || (!eu && wp(e, t))
      ? ((e = gp()), (Zo = Xl = Wt = null), (Ln = !1), e)
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
      return yp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yy = {
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
function Lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yy[e.type] : t === "textarea";
}
function Sp(e, t, n, r) {
  Zf(r),
    (t = Ci(t, "onChange")),
    0 < t.length &&
      ((n = new Zl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ur = null,
  Zr = null;
function Xy(e) {
  Mp(e, 0);
}
function Qi(e) {
  var t = zn(e);
  if (Wf(t)) return e;
}
function Zy(e, t) {
  if (e === "change") return t;
}
var Ep = !1;
if (Tt) {
  var Ns;
  if (Tt) {
    var js = "oninput" in document;
    if (!js) {
      var Dc = document.createElement("div");
      Dc.setAttribute("oninput", "return;"),
        (js = typeof Dc.oninput == "function");
    }
    Ns = js;
  } else Ns = !1;
  Ep = Ns && (!document.documentMode || 9 < document.documentMode);
}
function Uc() {
  Ur && (Ur.detachEvent("onpropertychange", Cp), (Zr = Ur = null));
}
function Cp(e) {
  if (e.propertyName === "value" && Qi(Zr)) {
    var t = [];
    Sp(t, Zr, e, Kl(e)), np(Xy, t);
  }
}
function Jy(e, t, n) {
  e === "focusin"
    ? (Uc(), (Ur = t), (Zr = n), Ur.attachEvent("onpropertychange", Cp))
    : e === "focusout" && Uc();
}
function e0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qi(Zr);
}
function t0(e, t) {
  if (e === "click") return Qi(t);
}
function n0(e, t) {
  if (e === "input" || e === "change") return Qi(t);
}
function r0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var at = typeof Object.is == "function" ? Object.is : r0;
function Jr(e, t) {
  if (at(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Aa.call(t, o) || !at(e[o], t[o])) return !1;
  }
  return !0;
}
function zc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vc(e, t) {
  var n = zc(e);
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
    n = zc(n);
  }
}
function Pp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Pp(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Op() {
  for (var e = window, t = vi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vi(e.document);
  }
  return t;
}
function tu(e) {
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
function o0(e) {
  var t = Op(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tu(n)) {
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
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Vc(n, i));
        var s = Vc(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var i0 = Tt && "documentMode" in document && 11 >= document.documentMode,
  Dn = null,
  qa = null,
  zr = null,
  Ga = !1;
function $c(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ga ||
    Dn == null ||
    Dn !== vi(r) ||
    ((r = Dn),
    "selectionStart" in r && tu(r)
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
    (zr && Jr(zr, r)) ||
      ((zr = r),
      (r = Ci(qa, "onSelect")),
      0 < r.length &&
        ((t = new Zl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dn))));
}
function No(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Un = {
    animationend: No("Animation", "AnimationEnd"),
    animationiteration: No("Animation", "AnimationIteration"),
    animationstart: No("Animation", "AnimationStart"),
    transitionend: No("Transition", "TransitionEnd"),
  },
  Is = {},
  Rp = {};
Tt &&
  ((Rp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  "TransitionEvent" in window || delete Un.transitionend.transition);
function Yi(e) {
  if (Is[e]) return Is[e];
  if (!Un[e]) return e;
  var t = Un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rp) return (Is[e] = t[n]);
  return e;
}
var Tp = Yi("animationend"),
  Ap = Yi("animationiteration"),
  _p = Yi("animationstart"),
  kp = Yi("transitionend"),
  bp = new Map(),
  Bc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ln(e, t) {
  bp.set(e, t), On(t, [e]);
}
for (var Fs = 0; Fs < Bc.length; Fs++) {
  var Ls = Bc[Fs],
    s0 = Ls.toLowerCase(),
    a0 = Ls[0].toUpperCase() + Ls.slice(1);
  ln(s0, "on" + a0);
}
ln(Tp, "onAnimationEnd");
ln(Ap, "onAnimationIteration");
ln(_p, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(kp, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
On(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
On(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
On(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
On(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  l0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function Hc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sy(r, t, void 0, e), (e.currentTarget = null);
}
function Mp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Hc(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Hc(o, a, u), (i = l);
        }
    }
  }
  if (yi) throw ((e = Ba), (yi = !1), (Ba = null), e);
}
function Y(e, t) {
  var n = t[Ja];
  n === void 0 && (n = t[Ja] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Np(t, e, 2, !1), n.add(r));
}
function Ds(e, t, n) {
  var r = 0;
  t && (r |= 4), Np(n, e, r, t);
}
var jo = "_reactListening" + Math.random().toString(36).slice(2);
function eo(e) {
  if (!e[jo]) {
    (e[jo] = !0),
      zf.forEach(function (n) {
        n !== "selectionchange" && (l0.has(n) || Ds(n, !1, e), Ds(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jo] || ((t[jo] = !0), Ds("selectionchange", !1, t));
  }
}
function Np(e, t, n, r) {
  switch (vp(t)) {
    case 1:
      var o = Ey;
      break;
    case 4:
      o = Cy;
      break;
    default:
      o = Yl;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !$a ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Us(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = hn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  np(function () {
    var u = i,
      d = Kl(n),
      c = [];
    e: {
      var f = bp.get(e);
      if (f !== void 0) {
        var p = Zl,
          g = e;
        switch (e) {
          case "keypress":
            if (Jo(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Dy;
            break;
          case "focusin":
            (g = "focus"), (p = Ms);
            break;
          case "focusout":
            (g = "blur"), (p = Ms);
            break;
          case "beforeblur":
          case "afterblur":
            p = Ms;
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
            p = Mc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Ry;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Vy;
            break;
          case Tp:
          case Ap:
          case _p:
            p = _y;
            break;
          case kp:
            p = By;
            break;
          case "scroll":
            p = Py;
            break;
          case "wheel":
            p = Wy;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = by;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = jc;
        }
        var h = (t & 4) !== 0,
          x = !h && e === "scroll",
          m = h ? (f !== null ? f + "Capture" : null) : f;
        h = [];
        for (var v = u, w; v !== null; ) {
          w = v;
          var S = w.stateNode;
          if (
            (w.tag === 5 &&
              S !== null &&
              ((w = S),
              m !== null && ((S = Gr(v, m)), S != null && h.push(to(v, S, w)))),
            x)
          )
            break;
          v = v.return;
        }
        0 < h.length &&
          ((f = new p(f, g, null, n, d)), c.push({ event: f, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== za &&
            (g = n.relatedTarget || n.fromElement) &&
            (hn(g) || g[At]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = u),
              (g = g ? hn(g) : null),
              g !== null &&
                ((x = Rn(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = u)),
          p !== g)
        ) {
          if (
            ((h = Mc),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = jc),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (v = "pointer")),
            (x = p == null ? f : zn(p)),
            (w = g == null ? f : zn(g)),
            (f = new h(S, v + "leave", p, n, d)),
            (f.target = x),
            (f.relatedTarget = w),
            (S = null),
            hn(d) === u &&
              ((h = new h(m, v + "enter", g, n, d)),
              (h.target = w),
              (h.relatedTarget = x),
              (S = h)),
            (x = S),
            p && g)
          )
            t: {
              for (h = p, m = g, v = 0, w = h; w; w = _n(w)) v++;
              for (w = 0, S = m; S; S = _n(S)) w++;
              for (; 0 < v - w; ) (h = _n(h)), v--;
              for (; 0 < w - v; ) (m = _n(m)), w--;
              for (; v--; ) {
                if (h === m || (m !== null && h === m.alternate)) break t;
                (h = _n(h)), (m = _n(m));
              }
              h = null;
            }
          else h = null;
          p !== null && Wc(c, f, p, h, !1),
            g !== null && x !== null && Wc(c, x, g, h, !0);
        }
      }
      e: {
        if (
          ((f = u ? zn(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var C = Zy;
        else if (Lc(f))
          if (Ep) C = n0;
          else {
            C = e0;
            var O = Jy;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = t0);
        if (C && (C = C(e, u))) {
          Sp(c, C, n, d);
          break e;
        }
        O && O(e, f, u),
          e === "focusout" &&
            (O = f._wrapperState) &&
            O.controlled &&
            f.type === "number" &&
            Ia(f, "number", f.value);
      }
      switch (((O = u ? zn(u) : window), e)) {
        case "focusin":
          (Lc(O) || O.contentEditable === "true") &&
            ((Dn = O), (qa = u), (zr = null));
          break;
        case "focusout":
          zr = qa = Dn = null;
          break;
        case "mousedown":
          Ga = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ga = !1), $c(c, n, d);
          break;
        case "selectionchange":
          if (i0) break;
        case "keydown":
        case "keyup":
          $c(c, n, d);
      }
      var P;
      if (eu)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Ln
          ? wp(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (yp &&
          n.locale !== "ko" &&
          (Ln || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Ln && (P = gp())
            : ((Wt = d),
              (Xl = "value" in Wt ? Wt.value : Wt.textContent),
              (Ln = !0))),
        (O = Ci(u, A)),
        0 < O.length &&
          ((A = new Nc(A, e, null, n, d)),
          c.push({ event: A, listeners: O }),
          P ? (A.data = P) : ((P = xp(n)), P !== null && (A.data = P)))),
        (P = qy ? Gy(e, n) : Qy(e, n)) &&
          ((u = Ci(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Nc("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    Mp(c, t);
  });
}
function to(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ci(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Gr(e, n)),
      i != null && r.unshift(to(e, i, o)),
      (i = Gr(e, t)),
      i != null && r.push(to(e, i, o))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Gr(n, i)), l != null && s.unshift(to(n, l, a)))
        : o || ((l = Gr(n, i)), l != null && s.push(to(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var u0 = /\r\n?/g,
  c0 = /\u0000|\uFFFD/g;
function Kc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      u0,
      `
`,
    )
    .replace(c0, "");
}
function Io(e, t, n) {
  if (((t = Kc(t)), Kc(e) !== t && n)) throw Error(_(425));
}
function Pi() {}
var Qa = null,
  Ya = null;
function Xa(e, t) {
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
var Za = typeof setTimeout == "function" ? setTimeout : void 0,
  d0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qc = typeof Promise == "function" ? Promise : void 0,
  f0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qc < "u"
        ? function (e) {
            return qc.resolve(null).then(e).catch(p0);
          }
        : Za;
function p0(e) {
  setTimeout(function () {
    throw e;
  });
}
function zs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Xr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Xr(t);
}
function Yt(e) {
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
function Gc(e) {
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
var pr = Math.random().toString(36).slice(2),
  ft = "__reactFiber$" + pr,
  no = "__reactProps$" + pr,
  At = "__reactContainer$" + pr,
  Ja = "__reactEvents$" + pr,
  h0 = "__reactListeners$" + pr,
  m0 = "__reactHandles$" + pr;
function hn(e) {
  var t = e[ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gc(e); e !== null; ) {
          if ((n = e[ft])) return n;
          e = Gc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function go(e) {
  return (
    (e = e[ft] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Xi(e) {
  return e[no] || null;
}
var el = [],
  Vn = -1;
function un(e) {
  return { current: e };
}
function X(e) {
  0 > Vn || ((e.current = el[Vn]), (el[Vn] = null), Vn--);
}
function G(e, t) {
  Vn++, (el[Vn] = e.current), (e.current = t);
}
var nn = {},
  xe = un(nn),
  Ne = un(!1),
  wn = nn;
function rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function je(e) {
  return (e = e.childContextTypes), e != null;
}
function Oi() {
  X(Ne), X(xe);
}
function Qc(e, t, n) {
  if (xe.current !== nn) throw Error(_(168));
  G(xe, t), G(Ne, n);
}
function jp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, Jg(e) || "Unknown", o));
  return te({}, n, r);
}
function Ri(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
    (wn = xe.current),
    G(xe, e),
    G(Ne, Ne.current),
    !0
  );
}
function Yc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = jp(e, t, wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Ne),
      X(xe),
      G(xe, e))
    : X(Ne),
    G(Ne, n);
}
var Ct = null,
  Zi = !1,
  Vs = !1;
function Ip(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function v0(e) {
  (Zi = !0), Ip(e);
}
function cn() {
  if (!Vs && Ct !== null) {
    Vs = !0;
    var e = 0,
      t = q;
    try {
      var n = Ct;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (Zi = !1);
    } catch (o) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), sp(ql, cn), o);
    } finally {
      (q = t), (Vs = !1);
    }
  }
  return null;
}
var $n = [],
  Bn = 0,
  Ti = null,
  Ai = 0,
  qe = [],
  Ge = 0,
  xn = null,
  Pt = 1,
  Ot = "";
function fn(e, t) {
  ($n[Bn++] = Ai), ($n[Bn++] = Ti), (Ti = e), (Ai = t);
}
function Fp(e, t, n) {
  (qe[Ge++] = Pt), (qe[Ge++] = Ot), (qe[Ge++] = xn), (xn = e);
  var r = Pt;
  e = Ot;
  var o = 32 - it(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - it(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Pt = (1 << (32 - it(t) + o)) | (n << o) | r),
      (Ot = i + e);
  } else (Pt = (1 << i) | (n << o) | r), (Ot = e);
}
function nu(e) {
  e.return !== null && (fn(e, 1), Fp(e, 1, 0));
}
function ru(e) {
  for (; e === Ti; )
    (Ti = $n[--Bn]), ($n[Bn] = null), (Ai = $n[--Bn]), ($n[Bn] = null);
  for (; e === xn; )
    (xn = qe[--Ge]),
      (qe[Ge] = null),
      (Ot = qe[--Ge]),
      (qe[Ge] = null),
      (Pt = qe[--Ge]),
      (qe[Ge] = null);
}
var Ve = null,
  ze = null,
  Z = !1,
  ot = null;
function Lp(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (ze = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = xn !== null ? { id: Pt, overflow: Ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function tl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nl(e) {
  if (Z) {
    var t = ze;
    if (t) {
      var n = t;
      if (!Xc(e, t)) {
        if (tl(e)) throw Error(_(418));
        t = Yt(n.nextSibling);
        var r = Ve;
        t && Xc(e, t)
          ? Lp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ve = e));
      }
    } else {
      if (tl(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Ve = e);
    }
  }
}
function Zc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function Fo(e) {
  if (e !== Ve) return !1;
  if (!Z) return Zc(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xa(e.type, e.memoizedProps))),
    t && (t = ze))
  ) {
    if (tl(e)) throw (Dp(), Error(_(418)));
    for (; t; ) Lp(e, t), (t = Yt(t.nextSibling));
  }
  if ((Zc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else ze = Ve ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Dp() {
  for (var e = ze; e; ) e = Yt(e.nextSibling);
}
function or() {
  (ze = Ve = null), (Z = !1);
}
function ou(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var g0 = Nt.ReactCurrentBatchConfig;
function Rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Lo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Jc(e) {
  var t = e._init;
  return t(e._payload);
}
function Up(e) {
  function t(m, v) {
    if (e) {
      var w = m.deletions;
      w === null ? ((m.deletions = [v]), (m.flags |= 16)) : w.push(v);
    }
  }
  function n(m, v) {
    if (!e) return null;
    for (; v !== null; ) t(m, v), (v = v.sibling);
    return null;
  }
  function r(m, v) {
    for (m = new Map(); v !== null; )
      v.key !== null ? m.set(v.key, v) : m.set(v.index, v), (v = v.sibling);
    return m;
  }
  function o(m, v) {
    return (m = en(m, v)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, v, w) {
    return (
      (m.index = w),
      e
        ? ((w = m.alternate),
          w !== null
            ? ((w = w.index), w < v ? ((m.flags |= 2), v) : w)
            : ((m.flags |= 2), v))
        : ((m.flags |= 1048576), v)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, v, w, S) {
    return v === null || v.tag !== 6
      ? ((v = Gs(w, m.mode, S)), (v.return = m), v)
      : ((v = o(v, w)), (v.return = m), v);
  }
  function l(m, v, w, S) {
    var C = w.type;
    return C === Fn
      ? d(m, v, w.props.children, S, w.key)
      : v !== null &&
          (v.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === zt &&
              Jc(C) === v.type))
        ? ((S = o(v, w.props)), (S.ref = Rr(m, v, w)), (S.return = m), S)
        : ((S = si(w.type, w.key, w.props, null, m.mode, S)),
          (S.ref = Rr(m, v, w)),
          (S.return = m),
          S);
  }
  function u(m, v, w, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== w.containerInfo ||
      v.stateNode.implementation !== w.implementation
      ? ((v = Qs(w, m.mode, S)), (v.return = m), v)
      : ((v = o(v, w.children || [])), (v.return = m), v);
  }
  function d(m, v, w, S, C) {
    return v === null || v.tag !== 7
      ? ((v = yn(w, m.mode, S, C)), (v.return = m), v)
      : ((v = o(v, w)), (v.return = m), v);
  }
  function c(m, v, w) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Gs("" + v, m.mode, w)), (v.return = m), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ro:
          return (
            (w = si(v.type, v.key, v.props, null, m.mode, w)),
            (w.ref = Rr(m, null, v)),
            (w.return = m),
            w
          );
        case In:
          return (v = Qs(v, m.mode, w)), (v.return = m), v;
        case zt:
          var S = v._init;
          return c(m, S(v._payload), w);
      }
      if (Mr(v) || Sr(v))
        return (v = yn(v, m.mode, w, null)), (v.return = m), v;
      Lo(m, v);
    }
    return null;
  }
  function f(m, v, w, S) {
    var C = v !== null ? v.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return C !== null ? null : a(m, v, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ro:
          return w.key === C ? l(m, v, w, S) : null;
        case In:
          return w.key === C ? u(m, v, w, S) : null;
        case zt:
          return (C = w._init), f(m, v, C(w._payload), S);
      }
      if (Mr(w) || Sr(w)) return C !== null ? null : d(m, v, w, S, null);
      Lo(m, w);
    }
    return null;
  }
  function p(m, v, w, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(w) || null), a(v, m, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ro:
          return (m = m.get(S.key === null ? w : S.key) || null), l(v, m, S, C);
        case In:
          return (m = m.get(S.key === null ? w : S.key) || null), u(v, m, S, C);
        case zt:
          var O = S._init;
          return p(m, v, w, O(S._payload), C);
      }
      if (Mr(S) || Sr(S)) return (m = m.get(w) || null), d(v, m, S, C, null);
      Lo(v, S);
    }
    return null;
  }
  function g(m, v, w, S) {
    for (
      var C = null, O = null, P = v, A = (v = 0), I = null;
      P !== null && A < w.length;
      A++
    ) {
      P.index > A ? ((I = P), (P = null)) : (I = P.sibling);
      var k = f(m, P, w[A], S);
      if (k === null) {
        P === null && (P = I);
        break;
      }
      e && P && k.alternate === null && t(m, P),
        (v = i(k, v, A)),
        O === null ? (C = k) : (O.sibling = k),
        (O = k),
        (P = I);
    }
    if (A === w.length) return n(m, P), Z && fn(m, A), C;
    if (P === null) {
      for (; A < w.length; A++)
        (P = c(m, w[A], S)),
          P !== null &&
            ((v = i(P, v, A)), O === null ? (C = P) : (O.sibling = P), (O = P));
      return Z && fn(m, A), C;
    }
    for (P = r(m, P); A < w.length; A++)
      (I = p(P, m, A, w[A], S)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? A : I.key),
          (v = i(I, v, A)),
          O === null ? (C = I) : (O.sibling = I),
          (O = I));
    return (
      e &&
        P.forEach(function (F) {
          return t(m, F);
        }),
      Z && fn(m, A),
      C
    );
  }
  function h(m, v, w, S) {
    var C = Sr(w);
    if (typeof C != "function") throw Error(_(150));
    if (((w = C.call(w)), w == null)) throw Error(_(151));
    for (
      var O = (C = null), P = v, A = (v = 0), I = null, k = w.next();
      P !== null && !k.done;
      A++, k = w.next()
    ) {
      P.index > A ? ((I = P), (P = null)) : (I = P.sibling);
      var F = f(m, P, k.value, S);
      if (F === null) {
        P === null && (P = I);
        break;
      }
      e && P && F.alternate === null && t(m, P),
        (v = i(F, v, A)),
        O === null ? (C = F) : (O.sibling = F),
        (O = F),
        (P = I);
    }
    if (k.done) return n(m, P), Z && fn(m, A), C;
    if (P === null) {
      for (; !k.done; A++, k = w.next())
        (k = c(m, k.value, S)),
          k !== null &&
            ((v = i(k, v, A)), O === null ? (C = k) : (O.sibling = k), (O = k));
      return Z && fn(m, A), C;
    }
    for (P = r(m, P); !k.done; A++, k = w.next())
      (k = p(P, m, A, k.value, S)),
        k !== null &&
          (e && k.alternate !== null && P.delete(k.key === null ? A : k.key),
          (v = i(k, v, A)),
          O === null ? (C = k) : (O.sibling = k),
          (O = k));
    return (
      e &&
        P.forEach(function (M) {
          return t(m, M);
        }),
      Z && fn(m, A),
      C
    );
  }
  function x(m, v, w, S) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Fn &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Ro:
          e: {
            for (var C = w.key, O = v; O !== null; ) {
              if (O.key === C) {
                if (((C = w.type), C === Fn)) {
                  if (O.tag === 7) {
                    n(m, O.sibling),
                      (v = o(O, w.props.children)),
                      (v.return = m),
                      (m = v);
                    break e;
                  }
                } else if (
                  O.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === zt &&
                    Jc(C) === O.type)
                ) {
                  n(m, O.sibling),
                    (v = o(O, w.props)),
                    (v.ref = Rr(m, O, w)),
                    (v.return = m),
                    (m = v);
                  break e;
                }
                n(m, O);
                break;
              } else t(m, O);
              O = O.sibling;
            }
            w.type === Fn
              ? ((v = yn(w.props.children, m.mode, S, w.key)),
                (v.return = m),
                (m = v))
              : ((S = si(w.type, w.key, w.props, null, m.mode, S)),
                (S.ref = Rr(m, v, w)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case In:
          e: {
            for (O = w.key; v !== null; ) {
              if (v.key === O)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === w.containerInfo &&
                  v.stateNode.implementation === w.implementation
                ) {
                  n(m, v.sibling),
                    (v = o(v, w.children || [])),
                    (v.return = m),
                    (m = v);
                  break e;
                } else {
                  n(m, v);
                  break;
                }
              else t(m, v);
              v = v.sibling;
            }
            (v = Qs(w, m.mode, S)), (v.return = m), (m = v);
          }
          return s(m);
        case zt:
          return (O = w._init), x(m, v, O(w._payload), S);
      }
      if (Mr(w)) return g(m, v, w, S);
      if (Sr(w)) return h(m, v, w, S);
      Lo(m, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        v !== null && v.tag === 6
          ? (n(m, v.sibling), (v = o(v, w)), (v.return = m), (m = v))
          : (n(m, v), (v = Gs(w, m.mode, S)), (v.return = m), (m = v)),
        s(m))
      : n(m, v);
  }
  return x;
}
var ir = Up(!0),
  zp = Up(!1),
  _i = un(null),
  ki = null,
  Hn = null,
  iu = null;
function su() {
  iu = Hn = ki = null;
}
function au(e) {
  var t = _i.current;
  X(_i), (e._currentValue = t);
}
function rl(e, t, n) {
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
function Xn(e, t) {
  (ki = e),
    (iu = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (iu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (ki === null) throw Error(_(308));
      (Hn = e), (ki.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var mn = null;
function lu(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function Vp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), lu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
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
var Vt = !1;
function uu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $p(e, t) {
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
function Rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), lu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function ei(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
  }
}
function ed(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
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
function bi(e, t, n, r) {
  var o = e.updateQueue;
  Vt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var c = o.baseState;
    (s = 0), (d = u = l = null), (a = i);
    do {
      var f = a.lane,
        p = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            h = a;
          switch (((f = t), (p = n), h.tag)) {
            case 1:
              if (((g = h.payload), typeof g == "function")) {
                c = g.call(p, c, f);
                break e;
              }
              c = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = h.payload),
                (f = typeof g == "function" ? g.call(p, c, f) : g),
                f == null)
              )
                break e;
              c = te({}, c, f);
              break e;
            case 2:
              Vt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = p), (l = c)) : (d = d.next = p),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = c),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (En |= s), (e.lanes = s), (e.memoizedState = c);
  }
}
function td(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var yo = {},
  mt = un(yo),
  ro = un(yo),
  oo = un(yo);
function vn(e) {
  if (e === yo) throw Error(_(174));
  return e;
}
function cu(e, t) {
  switch ((G(oo, t), G(ro, e), G(mt, yo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : La(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = La(t, e));
  }
  X(mt), G(mt, t);
}
function sr() {
  X(mt), X(ro), X(oo);
}
function Bp(e) {
  vn(oo.current);
  var t = vn(mt.current),
    n = La(t, e.type);
  t !== n && (G(ro, e), G(mt, n));
}
function du(e) {
  ro.current === e && (X(mt), X(ro));
}
var J = un(0);
function Mi(e) {
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
var $s = [];
function fu() {
  for (var e = 0; e < $s.length; e++)
    $s[e]._workInProgressVersionPrimary = null;
  $s.length = 0;
}
var ti = Nt.ReactCurrentDispatcher,
  Bs = Nt.ReactCurrentBatchConfig,
  Sn = 0,
  ee = null,
  ae = null,
  ue = null,
  Ni = !1,
  Vr = !1,
  io = 0,
  y0 = 0;
function ge() {
  throw Error(_(321));
}
function pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n])) return !1;
  return !0;
}
function hu(e, t, n, r, o, i) {
  if (
    ((Sn = i),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ti.current = e === null || e.memoizedState === null ? E0 : C0),
    (e = n(r, o)),
    Vr)
  ) {
    i = 0;
    do {
      if (((Vr = !1), (io = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (ue = ae = null),
        (t.updateQueue = null),
        (ti.current = P0),
        (e = n(r, o));
    } while (Vr);
  }
  if (
    ((ti.current = ji),
    (t = ae !== null && ae.next !== null),
    (Sn = 0),
    (ue = ae = ee = null),
    (Ni = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function mu() {
  var e = io !== 0;
  return (io = 0), e;
}
function dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (ee.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Je() {
  if (ae === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ue === null ? ee.memoizedState : ue.next;
  if (t !== null) (ue = t), (ae = e);
  else {
    if (e === null) throw Error(_(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      ue === null ? (ee.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function so(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hs(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((Sn & d) === d)
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
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = c), (s = r)) : (l = l.next = c),
          (ee.lanes |= d),
          (En |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      at(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ee.lanes |= i), (En |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ws(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    at(i, t.memoizedState) || (Me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Hp() {}
function Wp(e, t) {
  var n = ee,
    r = Je(),
    o = t(),
    i = !at(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Me = !0)),
    (r = r.queue),
    vu(Gp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ao(9, qp.bind(null, n, r, o, t), void 0, null),
      ce === null)
    )
      throw Error(_(349));
    Sn & 30 || Kp(n, t, o);
  }
  return o;
}
function Kp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Qp(t) && Yp(e);
}
function Gp(e, t, n) {
  return n(function () {
    Qp(t) && Yp(e);
  });
}
function Qp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function Yp(e) {
  var t = _t(e, 1);
  t !== null && st(t, e, 1, -1);
}
function nd(e) {
  var t = dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: so,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = S0.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function ao(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xp() {
  return Je().memoizedState;
}
function ni(e, t, n, r) {
  var o = dt();
  (ee.flags |= e),
    (o.memoizedState = ao(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ji(e, t, n, r) {
  var o = Je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (((i = s.destroy), r !== null && pu(r, s.deps))) {
      o.memoizedState = ao(t, n, i, r);
      return;
    }
  }
  (ee.flags |= e), (o.memoizedState = ao(1 | t, n, i, r));
}
function rd(e, t) {
  return ni(8390656, 8, e, t);
}
function vu(e, t) {
  return Ji(2048, 8, e, t);
}
function Zp(e, t) {
  return Ji(4, 2, e, t);
}
function Jp(e, t) {
  return Ji(4, 4, e, t);
}
function eh(e, t) {
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
function th(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ji(4, 4, eh.bind(null, t, e), n)
  );
}
function gu() {}
function nh(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rh(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function oh(e, t, n) {
  return Sn & 21
    ? (at(n, t) || ((n = up()), (ee.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function w0(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Bs.transition;
  Bs.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (Bs.transition = r);
  }
}
function ih() {
  return Je().memoizedState;
}
function x0(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sh(e))
  )
    ah(t, n);
  else if (((n = Vp(e, t, n, r)), n !== null)) {
    var o = Oe();
    st(n, e, r, o), lh(n, t, r);
  }
}
function S0(e, t, n) {
  var r = Jt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sh(e)) ah(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), at(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), lu(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vp(e, t, o, r)),
      n !== null && ((o = Oe()), st(n, e, r, o), lh(n, t, r));
  }
}
function sh(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function ah(e, t) {
  Vr = Ni = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
  }
}
var ji = {
    readContext: Ze,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  E0 = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: rd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ni(4194308, 4, eh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ni(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ni(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dt();
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
        (e = e.dispatch = x0.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: nd,
    useDebugValue: gu,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = nd(!1),
        t = e[0];
      return (e = w0.bind(null, e[1])), (dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        o = dt();
      if (Z) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(_(349));
        Sn & 30 || Kp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        rd(Gp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ao(9, qp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = ce.identifierPrefix;
      if (Z) {
        var n = Ot,
          r = Pt;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = io++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = y0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  C0 = {
    readContext: Ze,
    useCallback: nh,
    useContext: Ze,
    useEffect: vu,
    useImperativeHandle: th,
    useInsertionEffect: Zp,
    useLayoutEffect: Jp,
    useMemo: rh,
    useReducer: Hs,
    useRef: Xp,
    useState: function () {
      return Hs(so);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = Je();
      return oh(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Hs(so)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: Hp,
    useSyncExternalStore: Wp,
    useId: ih,
    unstable_isNewReconciler: !1,
  },
  P0 = {
    readContext: Ze,
    useCallback: nh,
    useContext: Ze,
    useEffect: vu,
    useImperativeHandle: th,
    useInsertionEffect: Zp,
    useLayoutEffect: Jp,
    useMemo: rh,
    useReducer: Ws,
    useRef: Xp,
    useState: function () {
      return Ws(so);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = Je();
      return ae === null ? (t.memoizedState = e) : oh(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Ws(so)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: Hp,
    useSyncExternalStore: Wp,
    useId: ih,
    unstable_isNewReconciler: !1,
  };
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ol(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var es = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = Jt(e),
      i = Rt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Xt(e, i, o)),
      t !== null && (st(t, e, o, r), ei(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = Jt(e),
      i = Rt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Xt(e, i, o)),
      t !== null && (st(t, e, o, r), ei(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = Jt(e),
      o = Rt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Xt(e, o, r)),
      t !== null && (st(t, e, r, n), ei(t, e, r));
  },
};
function od(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Jr(n, r) || !Jr(o, i)
        : !0
  );
}
function uh(e, t, n) {
  var r = !1,
    o = nn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ze(i))
      : ((o = je(t) ? wn : xe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? rr(e, o) : nn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = es),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function id(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && es.enqueueReplaceState(t, t.state, null);
}
function il(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), uu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ze(i))
    : ((i = je(t) ? wn : xe.current), (o.context = rr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ol(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && es.enqueueReplaceState(o, o.state, null),
      bi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ar(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Zg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ks(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var O0 = typeof WeakMap == "function" ? WeakMap : Map;
function ch(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Fi || ((Fi = !0), (vl = r)), sl(e, t);
    }),
    n
  );
}
function dh(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        sl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        sl(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function sd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new O0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = U0.bind(null, e, t, n)), t.then(e, e));
}
function ad(e) {
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
function ld(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var R0 = Nt.ReactCurrentOwner,
  Me = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? zp(t, null, n, r) : ir(t, e.child, n, r);
}
function ud(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Xn(t, o),
    (r = hu(e, t, n, r, i, o)),
    (n = mu()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        kt(e, t, o))
      : (Z && n && nu(t), (t.flags |= 1), Pe(e, t, r, o), t.child)
  );
}
function cd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ou(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fh(e, t, i, r, o))
      : ((e = si(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jr), n(s, r) && e.ref === t.ref)
    )
      return kt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = en(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jr(i, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), kt(e, t, o);
  }
  return al(e, t, n, r, o);
}
function ph(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(Kn, De),
        (De |= n);
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
          G(Kn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        G(Kn, De),
        (De |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(Kn, De),
      (De |= r);
  return Pe(e, t, o, n), t.child;
}
function hh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function al(e, t, n, r, o) {
  var i = je(n) ? wn : xe.current;
  return (
    (i = rr(t, i)),
    Xn(t, o),
    (n = hu(e, t, n, r, i, o)),
    (r = mu()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        kt(e, t, o))
      : (Z && r && nu(t), (t.flags |= 1), Pe(e, t, n, o), t.child)
  );
}
function dd(e, t, n, r, o) {
  if (je(n)) {
    var i = !0;
    Ri(t);
  } else i = !1;
  if ((Xn(t, o), t.stateNode === null))
    ri(e, t), uh(t, n, r), il(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ze(u))
      : ((u = je(n) ? wn : xe.current), (u = rr(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && id(t, s, r, u)),
      (Vt = !1);
    var f = t.memoizedState;
    (s.state = f),
      bi(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Ne.current || Vt
        ? (typeof d == "function" && (ol(t, n, d, r), (l = t.memoizedState)),
          (a = Vt || od(t, n, a, r, f, l, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      $p(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : tt(t.type, a)),
      (s.props = u),
      (c = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ze(l))
        : ((l = je(n) ? wn : xe.current), (l = rr(t, l)));
    var p = n.getDerivedStateFromProps;
    (d =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== c || f !== l) && id(t, s, r, l)),
      (Vt = !1),
      (f = t.memoizedState),
      (s.state = f),
      bi(t, r, s, o);
    var g = t.memoizedState;
    a !== c || f !== g || Ne.current || Vt
      ? (typeof p == "function" && (ol(t, n, p, r), (g = t.memoizedState)),
        (u = Vt || od(t, n, u, r, f, g, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ll(e, t, n, r, i, o);
}
function ll(e, t, n, r, o, i) {
  hh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Yc(t, n, !1), kt(e, t, i);
  (r = t.stateNode), (R0.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ir(t, e.child, null, i)), (t.child = ir(t, null, a, i)))
      : Pe(e, t, a, i),
    (t.memoizedState = r.state),
    o && Yc(t, n, !0),
    t.child
  );
}
function mh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qc(e, t.context, !1),
    cu(e, t.containerInfo);
}
function fd(e, t, n, r, o) {
  return or(), ou(o), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function cl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vh(e, t, n) {
  var r = t.pendingProps,
    o = J.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    G(J, o & 1),
    e === null)
  )
    return (
      nl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = rs(s, r, 0, null)),
              (e = yn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = cl(n)),
              (t.memoizedState = ul),
              e)
            : yu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return T0(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = en(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = en(a, i)) : ((i = yn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? cl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ul),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = en(i, { mode: "visible", children: r.children })),
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
function yu(e, t) {
  return (
    (t = rs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Do(e, t, n, r) {
  return (
    r !== null && ou(r),
    ir(t, e.child, null, n),
    (e = yu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function T0(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ks(Error(_(422)))), Do(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = rs({ mode: "visible", children: r.children }, o, 0, null)),
          (i = yn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && ir(t, e.child, null, s),
          (t.child.memoizedState = cl(s)),
          (t.memoizedState = ul),
          i);
  if (!(t.mode & 1)) return Do(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(_(419))), (r = Ks(i, r, void 0)), Do(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Me || a)) {
    if (((r = ce), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), _t(e, o), st(r, e, o, -1));
    }
    return Pu(), (r = Ks(Error(_(421)))), Do(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = z0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ze = Yt(o.nextSibling)),
      (Ve = t),
      (Z = !0),
      (ot = null),
      e !== null &&
        ((qe[Ge++] = Pt),
        (qe[Ge++] = Ot),
        (qe[Ge++] = xn),
        (Pt = e.id),
        (Ot = e.overflow),
        (xn = t)),
      (t = yu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function pd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rl(e.return, t, n);
}
function qs(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function gh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Pe(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && pd(e, n, t);
        else if (e.tag === 19) pd(e, n, t);
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
  if ((G(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Mi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          qs(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Mi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        qs(t, !0, n, null, i);
        break;
      case "together":
        qs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ri(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function A0(e, t, n) {
  switch (t.tag) {
    case 3:
      mh(t), or();
      break;
    case 5:
      Bp(t);
      break;
    case 1:
      je(t.type) && Ri(t);
      break;
    case 4:
      cu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      G(_i, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? vh(e, t, n)
            : (G(J, J.current & 1),
              (e = kt(e, t, n)),
              e !== null ? e.sibling : null);
      G(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return gh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        G(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ph(e, t, n);
  }
  return kt(e, t, n);
}
var yh, dl, wh, xh;
yh = function (e, t) {
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
dl = function () {};
wh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), vn(mt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Na(e, o)), (r = Na(e, r)), (i = []);
        break;
      case "select":
        (o = te({}, o, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Fa(e, o)), (r = Fa(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Pi);
    }
    Da(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Kr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
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
                (Kr.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && Y("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
xh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tr(e, t) {
  if (!Z)
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
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _0(e, t, n) {
  var r = t.pendingProps;
  switch ((ru(t), t.tag)) {
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
      return ye(t), null;
    case 1:
      return je(t.type) && Oi(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sr(),
        X(Ne),
        X(xe),
        fu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (wl(ot), (ot = null)))),
        dl(e, t),
        ye(t),
        null
      );
    case 5:
      du(t);
      var o = vn(oo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return ye(t), null;
        }
        if (((e = vn(mt.current)), Fo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[ft] = t), (r[no] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < jr.length; o++) Y(jr[o], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Ec(r, i), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              Pc(r, i), Y("invalid", r);
          }
          Da(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Io(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Io(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Kr.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              To(r), Cc(r, i, !0);
              break;
            case "textarea":
              To(r), Oc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ft] = t),
            (e[no] = r),
            yh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ua(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < jr.length; o++) Y(jr[o], e);
                o = r;
                break;
              case "source":
                Y("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (o = r);
                break;
              case "details":
                Y("toggle", e), (o = r);
                break;
              case "input":
                Ec(e, r), (o = Na(e, r)), Y("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = te({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                Pc(e, r), (o = Fa(e, r)), Y("invalid", e);
                break;
              default:
                o = r;
            }
            Da(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Xf(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Qf(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && qr(e, l)
                        : typeof l == "number" && qr(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Kr.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && Y("scroll", e)
                          : l != null && $l(e, i, l, s));
              }
            switch (n) {
              case "input":
                To(e), Cc(e, r, !1);
                break;
              case "textarea":
                To(e), Oc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + tn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Pi);
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
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) xh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = vn(oo.current)), vn(mt.current), Fo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ft] = t),
            (i = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Io(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Io(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ft] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (X(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && ze !== null && t.mode & 1 && !(t.flags & 128))
          Dp(), or(), (t.flags |= 98560), (i = !1);
        else if (((i = Fo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[ft] = t;
          } else
            or(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (i = !1);
        } else ot !== null && (wl(ot), (ot = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? le === 0 && (le = 3) : Pu())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        sr(), dl(e, t), e === null && eo(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return au(t.type._context), ye(t), null;
    case 17:
      return je(t.type) && Oi(), ye(t), null;
    case 19:
      if ((X(J), (i = t.memoizedState), i === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Tr(i, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Mi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Tr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ie() > lr &&
            ((t.flags |= 128), (r = !0), Tr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Mi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Z)
            )
              return ye(t), null;
          } else
            2 * ie() - i.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ie()),
          (t.sibling = null),
          (n = J.current),
          G(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        Cu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function k0(e, t) {
  switch ((ru(t), t.tag)) {
    case 1:
      return (
        je(t.type) && Oi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sr(),
        X(Ne),
        X(xe),
        fu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return du(t), null;
    case 13:
      if ((X(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        or();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(J), null;
    case 4:
      return sr(), null;
    case 10:
      return au(t.type._context), null;
    case 22:
    case 23:
      return Cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Uo = !1,
  we = !1,
  b0 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function fl(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var hd = !1;
function M0(e, t) {
  if (((Qa = Si), (e = Op()), tu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              c !== n || (o !== 0 && c.nodeType !== 3) || (a = s + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (l = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (p = c.firstChild) !== null;

            )
              (f = c), (c = p);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++d === r && (l = s),
                (p = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ya = { focusedElem: e, selectionRange: n }, Si = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var h = g.memoizedProps,
                    x = g.memoizedState,
                    m = t.stateNode,
                    v = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : tt(t.type, h),
                      x,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (S) {
          oe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (g = hd), (hd = !1), g;
}
function $r(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && fl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ts(e, t) {
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
function pl(e) {
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
function Sh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ft], delete t[no], delete t[Ja], delete t[h0], delete t[m0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Eh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function md(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Eh(e.return)) return null;
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
function hl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hl(e, t, n), e = e.sibling; e !== null; ) hl(e, t, n), (e = e.sibling);
}
function ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ml(e, t, n), e = e.sibling; e !== null; ) ml(e, t, n), (e = e.sibling);
}
var de = null,
  rt = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) Ch(e, t, n), (n = n.sibling);
}
function Ch(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(qi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Wn(n, t);
    case 6:
      var r = de,
        o = rt;
      (de = null),
        It(e, t, n),
        (de = r),
        (rt = o),
        de !== null &&
          (rt
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null &&
        (rt
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? zs(e.parentNode, n)
              : e.nodeType === 1 && zs(e, n),
            Xr(e))
          : zs(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (o = rt),
        (de = n.stateNode.containerInfo),
        (rt = !0),
        It(e, t, n),
        (de = r),
        (rt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && fl(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          oe(n, t, a);
        }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), It(e, t, n), (we = r))
        : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function vd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new b0()),
      t.forEach(function (r) {
        var o = V0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (de = a.stateNode), (rt = !1);
              break e;
            case 3:
              (de = a.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (de = a.stateNode.containerInfo), (rt = !0);
              break e;
          }
          a = a.return;
        }
        if (de === null) throw Error(_(160));
        Ch(i, s, o), (de = null), (rt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        oe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ph(t, e), (t = t.sibling);
}
function Ph(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), ct(e), r & 4)) {
        try {
          $r(3, e, e.return), ts(3, e);
        } catch (h) {
          oe(e, e.return, h);
        }
        try {
          $r(5, e, e.return);
        } catch (h) {
          oe(e, e.return, h);
        }
      }
      break;
    case 1:
      et(t, e), ct(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        ct(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          qr(o, "");
        } catch (h) {
          oe(e, e.return, h);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Kf(o, i),
              Ua(a, s);
            var u = Ua(a, i);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                c = l[s + 1];
              d === "style"
                ? Xf(o, c)
                : d === "dangerouslySetInnerHTML"
                  ? Qf(o, c)
                  : d === "children"
                    ? qr(o, c)
                    : $l(o, d, c, u);
            }
            switch (a) {
              case "input":
                ja(o, i);
                break;
              case "textarea":
                qf(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? qn(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qn(o, !!i.multiple, i.defaultValue, !0)
                      : qn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[no] = i;
          } catch (h) {
            oe(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((et(t, e), ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (h) {
          oe(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xr(t.containerInfo);
        } catch (h) {
          oe(e, e.return, h);
        }
      break;
    case 4:
      et(t, e), ct(e);
      break;
    case 13:
      et(t, e),
        ct(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Su = ie())),
        r & 4 && vd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || d), et(t, e), (we = u)) : et(t, e),
        ct(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (j = e, d = e.child; d !== null; ) {
            for (c = j = d; j !== null; ) {
              switch (((f = j), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, f, f.return);
                  break;
                case 1:
                  Wn(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (h) {
                      oe(r, n, h);
                    }
                  }
                  break;
                case 5:
                  Wn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    yd(c);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (j = p)) : yd(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Yf("display", s)));
              } catch (h) {
                oe(e, e.return, h);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (h) {
                oe(e, e.return, h);
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
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      et(t, e), ct(e), r & 4 && vd(e);
      break;
    case 21:
      break;
    default:
      et(t, e), ct(e);
  }
}
function ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Eh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (qr(o, ""), (r.flags &= -33));
          var i = md(e);
          ml(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = md(e);
          hl(e, a, s);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      oe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function N0(e, t, n) {
  (j = e), Oh(e);
}
function Oh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Uo;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || we;
        a = Uo;
        var u = we;
        if (((Uo = s), (we = l) && !u))
          for (j = o; j !== null; )
            (s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? wd(o)
                : l !== null
                  ? ((l.return = s), (j = l))
                  : wd(o);
        for (; i !== null; ) (j = i), Oh(i), (i = i.sibling);
        (j = o), (Uo = a), (we = u);
      }
      gd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : gd(e);
  }
}
function gd(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || ts(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && td(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                td(t, s, n);
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
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && Xr(c);
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
              throw Error(_(163));
          }
        we || (t.flags & 512 && pl(t));
      } catch (f) {
        oe(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function yd(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function wd(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ts(4, t);
          } catch (l) {
            oe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              oe(t, o, l);
            }
          }
          var i = t.return;
          try {
            pl(t);
          } catch (l) {
            oe(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            pl(t);
          } catch (l) {
            oe(t, s, l);
          }
      }
    } catch (l) {
      oe(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var j0 = Math.ceil,
  Ii = Nt.ReactCurrentDispatcher,
  wu = Nt.ReactCurrentOwner,
  Ye = Nt.ReactCurrentBatchConfig,
  K = 0,
  ce = null,
  se = null,
  pe = 0,
  De = 0,
  Kn = un(0),
  le = 0,
  lo = null,
  En = 0,
  ns = 0,
  xu = 0,
  Br = null,
  be = null,
  Su = 0,
  lr = 1 / 0,
  Et = null,
  Fi = !1,
  vl = null,
  Zt = null,
  zo = !1,
  Kt = null,
  Li = 0,
  Hr = 0,
  gl = null,
  oi = -1,
  ii = 0;
function Oe() {
  return K & 6 ? ie() : oi !== -1 ? oi : (oi = ie());
}
function Jt(e) {
  return e.mode & 1
    ? K & 2 && pe !== 0
      ? pe & -pe
      : g0.transition !== null
        ? (ii === 0 && (ii = up()), ii)
        : ((e = q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vp(e.type))),
          e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < Hr) throw ((Hr = 0), (gl = null), Error(_(185)));
  mo(e, n, r),
    (!(K & 2) || e !== ce) &&
      (e === ce && (!(K & 2) && (ns |= n), le === 4 && Bt(e, pe)),
      Ie(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((lr = ie() + 500), Zi && cn()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  gy(e, t);
  var r = xi(e, e === ce ? pe : 0);
  if (r === 0)
    n !== null && Ac(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ac(n), t === 1))
      e.tag === 0 ? v0(xd.bind(null, e)) : Ip(xd.bind(null, e)),
        f0(function () {
          !(K & 6) && cn();
        }),
        (n = null);
    else {
      switch (cp(r)) {
        case 1:
          n = ql;
          break;
        case 4:
          n = ap;
          break;
        case 16:
          n = wi;
          break;
        case 536870912:
          n = lp;
          break;
        default:
          n = wi;
      }
      n = Nh(n, Rh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rh(e, t) {
  if (((oi = -1), (ii = 0), K & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = xi(e, e === ce ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Di(e, r);
  else {
    t = r;
    var o = K;
    K |= 2;
    var i = Ah();
    (ce !== e || pe !== t) && ((Et = null), (lr = ie() + 500), gn(e, t));
    do
      try {
        L0();
        break;
      } catch (a) {
        Th(e, a);
      }
    while (!0);
    su(),
      (Ii.current = i),
      (K = o),
      se !== null ? (t = 0) : ((ce = null), (pe = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ha(e)), o !== 0 && ((r = o), (t = yl(e, o)))), t === 1)
    )
      throw ((n = lo), gn(e, 0), Bt(e, r), Ie(e, ie()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !I0(o) &&
          ((t = Di(e, r)),
          t === 2 && ((i = Ha(e)), i !== 0 && ((r = i), (t = yl(e, i)))),
          t === 1))
      )
        throw ((n = lo), gn(e, 0), Bt(e, r), Ie(e, ie()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          pn(e, be, Et);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = Su + 500 - ie()), 10 < t))
          ) {
            if (xi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Za(pn.bind(null, e, be, Et), t);
            break;
          }
          pn(e, be, Et);
          break;
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - it(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ie() - r),
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
                          : 1960 * j0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Za(pn.bind(null, e, be, Et), r);
            break;
          }
          pn(e, be, Et);
          break;
        case 5:
          pn(e, be, Et);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Ie(e, ie()), e.callbackNode === n ? Rh.bind(null, e) : null;
}
function yl(e, t) {
  var n = Br;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = Di(e, t)),
    e !== 2 && ((t = be), (be = n), t !== null && wl(t)),
    e
  );
}
function wl(e) {
  be === null ? (be = e) : be.push.apply(be, e);
}
function I0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!at(i(), o)) return !1;
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
function Bt(e, t) {
  for (
    t &= ~xu,
      t &= ~ns,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xd(e) {
  if (K & 6) throw Error(_(327));
  Zn();
  var t = xi(e, 0);
  if (!(t & 1)) return Ie(e, ie()), null;
  var n = Di(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ha(e);
    r !== 0 && ((t = r), (n = yl(e, r)));
  }
  if (n === 1) throw ((n = lo), gn(e, 0), Bt(e, t), Ie(e, ie()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pn(e, be, Et),
    Ie(e, ie()),
    null
  );
}
function Eu(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((lr = ie() + 500), Zi && cn());
  }
}
function Cn(e) {
  Kt !== null && Kt.tag === 0 && !(K & 6) && Zn();
  var t = K;
  K |= 1;
  var n = Ye.transition,
    r = q;
  try {
    if (((Ye.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (Ye.transition = n), (K = t), !(K & 6) && cn();
  }
}
function Cu() {
  (De = Kn.current), X(Kn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), d0(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((ru(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Oi();
          break;
        case 3:
          sr(), X(Ne), X(xe), fu();
          break;
        case 5:
          du(r);
          break;
        case 4:
          sr();
          break;
        case 13:
          X(J);
          break;
        case 19:
          X(J);
          break;
        case 10:
          au(r.type._context);
          break;
        case 22:
        case 23:
          Cu();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (se = e = en(e.current, null)),
    (pe = De = t),
    (le = 0),
    (lo = null),
    (xu = ns = En = 0),
    (be = Br = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function Th(e, t) {
  do {
    var n = se;
    try {
      if ((su(), (ti.current = ji), Ni)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ni = !1;
      }
      if (
        ((Sn = 0),
        (ue = ae = ee = null),
        (Vr = !1),
        (io = 0),
        (wu.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (lo = t), (se = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = pe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = ad(s);
          if (p !== null) {
            (p.flags &= -257),
              ld(p, s, a, i, t),
              p.mode & 1 && sd(i, u, t),
              (t = p),
              (l = u);
            var g = t.updateQueue;
            if (g === null) {
              var h = new Set();
              h.add(l), (t.updateQueue = h);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              sd(i, u, t), Pu();
              break e;
            }
            l = Error(_(426));
          }
        } else if (Z && a.mode & 1) {
          var x = ad(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              ld(x, s, a, i, t),
              ou(ar(l, a));
            break e;
          }
        }
        (i = l = ar(l, a)),
          le !== 4 && (le = 2),
          Br === null ? (Br = [i]) : Br.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = ch(i, l, t);
              ed(i, m);
              break e;
            case 1:
              a = l;
              var v = i.type,
                w = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Zt === null || !Zt.has(w))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = dh(i, a, t);
                ed(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kh(n);
    } catch (C) {
      (t = C), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ah() {
  var e = Ii.current;
  return (Ii.current = ji), e === null ? ji : e;
}
function Pu() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ce === null || (!(En & 268435455) && !(ns & 268435455)) || Bt(ce, pe);
}
function Di(e, t) {
  var n = K;
  K |= 2;
  var r = Ah();
  (ce !== e || pe !== t) && ((Et = null), gn(e, t));
  do
    try {
      F0();
      break;
    } catch (o) {
      Th(e, o);
    }
  while (!0);
  if ((su(), (K = n), (Ii.current = r), se !== null)) throw Error(_(261));
  return (ce = null), (pe = 0), le;
}
function F0() {
  for (; se !== null; ) _h(se);
}
function L0() {
  for (; se !== null && !ly(); ) _h(se);
}
function _h(e) {
  var t = Mh(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? kh(e) : (se = t),
    (wu.current = null);
}
function kh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = k0(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (se = null);
        return;
      }
    } else if (((n = _0(n, t, De)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function pn(e, t, n) {
  var r = q,
    o = Ye.transition;
  try {
    (Ye.transition = null), (q = 1), D0(e, t, n, r);
  } finally {
    (Ye.transition = o), (q = r);
  }
  return null;
}
function D0(e, t, n, r) {
  do Zn();
  while (Kt !== null);
  if (K & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (yy(e, i),
    e === ce && ((se = ce = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zo ||
      ((zo = !0),
      Nh(wi, function () {
        return Zn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ye.transition), (Ye.transition = null);
    var s = q;
    q = 1;
    var a = K;
    (K |= 4),
      (wu.current = null),
      M0(e, n),
      Ph(n, e),
      o0(Ya),
      (Si = !!Qa),
      (Ya = Qa = null),
      (e.current = n),
      N0(n),
      uy(),
      (K = a),
      (q = s),
      (Ye.transition = i);
  } else e.current = n;
  if (
    (zo && ((zo = !1), (Kt = e), (Li = o)),
    (i = e.pendingLanes),
    i === 0 && (Zt = null),
    fy(n.stateNode),
    Ie(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Fi) throw ((Fi = !1), (e = vl), (vl = null), e);
  return (
    Li & 1 && e.tag !== 0 && Zn(),
    (i = e.pendingLanes),
    i & 1 ? (e === gl ? Hr++ : ((Hr = 0), (gl = e))) : (Hr = 0),
    cn(),
    null
  );
}
function Zn() {
  if (Kt !== null) {
    var e = cp(Li),
      t = Ye.transition,
      n = q;
    try {
      if (((Ye.transition = null), (q = 16 > e ? 16 : e), Kt === null))
        var r = !1;
      else {
        if (((e = Kt), (Kt = null), (Li = 0), K & 6)) throw Error(_(331));
        var o = K;
        for (K |= 4, j = e.current; j !== null; ) {
          var i = j,
            s = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var d = j;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $r(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (j = c);
                  else
                    for (; j !== null; ) {
                      d = j;
                      var f = d.sibling,
                        p = d.return;
                      if ((Sh(d), d === u)) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (j = f);
                        break;
                      }
                      j = p;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var h = g.child;
                if (h !== null) {
                  g.child = null;
                  do {
                    var x = h.sibling;
                    (h.sibling = null), (h = x);
                  } while (h !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (j = s);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $r(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (j = m);
                break e;
              }
              j = i.return;
            }
        }
        var v = e.current;
        for (j = v; j !== null; ) {
          s = j;
          var w = s.child;
          if (s.subtreeFlags & 2064 && w !== null) (w.return = s), (j = w);
          else
            e: for (s = v; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ts(9, a);
                  }
                } catch (C) {
                  oe(a, a.return, C);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (j = S);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((K = o), cn(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(qi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (Ye.transition = t);
    }
  }
  return !1;
}
function Sd(e, t, n) {
  (t = ar(n, t)),
    (t = ch(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = Oe()),
    e !== null && (mo(e, 1, t), Ie(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) Sd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          (e = ar(n, e)),
            (e = dh(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = Oe()),
            t !== null && (mo(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function U0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (pe & n) === n &&
      (le === 4 || (le === 3 && (pe & 130023424) === pe && 500 > ie() - Su)
        ? gn(e, 0)
        : (xu |= n)),
    Ie(e, t);
}
function bh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ko), (ko <<= 1), !(ko & 130023424) && (ko = 4194304))
      : (t = 1));
  var n = Oe();
  (e = _t(e, t)), e !== null && (mo(e, t, n), Ie(e, n));
}
function z0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bh(e, n);
}
function V0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), bh(e, n);
}
var Mh;
Mh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), A0(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), Z && t.flags & 1048576 && Fp(t, Ai, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ri(e, t), (e = t.pendingProps);
      var o = rr(t, xe.current);
      Xn(t, n), (o = hu(null, t, r, e, o, n));
      var i = mu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(r) ? ((i = !0), Ri(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            uu(t),
            (o.updater = es),
            (t.stateNode = o),
            (o._reactInternals = t),
            il(t, r, e, n),
            (t = ll(null, t, r, !0, i, n)))
          : ((t.tag = 0), Z && i && nu(t), Pe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ri(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = B0(r)),
          (e = tt(r, e)),
          o)
        ) {
          case 0:
            t = al(null, t, r, e, n);
            break e;
          case 1:
            t = dd(null, t, r, e, n);
            break e;
          case 11:
            t = ud(null, t, r, e, n);
            break e;
          case 14:
            t = cd(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        al(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        dd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((mh(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          $p(e, t),
          bi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ar(Error(_(423)), t)), (t = fd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ar(Error(_(424)), t)), (t = fd(e, t, r, n, o));
            break e;
          } else
            for (
              ze = Yt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                Z = !0,
                ot = null,
                n = zp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((or(), r === o)) {
            t = kt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bp(t),
        e === null && nl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Xa(r, o) ? (s = null) : i !== null && Xa(r, i) && (t.flags |= 32),
        hh(e, t),
        Pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && nl(t), null;
    case 13:
      return vh(e, t, n);
    case 4:
      return (
        cu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        ud(e, t, r, o, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          G(_i, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (at(i.value, s)) {
            if (i.children === o.children && !Ne.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Rt(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      rl(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(_(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  rl(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Pe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Xn(t, n),
        (o = Ze(o)),
        (r = r(o)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = tt(r, t.pendingProps)),
        (o = tt(r.type, o)),
        cd(e, t, r, o, n)
      );
    case 15:
      return fh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        ri(e, t),
        (t.tag = 1),
        je(r) ? ((e = !0), Ri(t)) : (e = !1),
        Xn(t, n),
        uh(t, r, o),
        il(t, r, o, n),
        ll(null, t, r, !0, e, n)
      );
    case 19:
      return gh(e, t, n);
    case 22:
      return ph(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Nh(e, t) {
  return sp(e, t);
}
function $0(e, t, n, r) {
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
function Qe(e, t, n, r) {
  return new $0(e, t, n, r);
}
function Ou(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function B0(e) {
  if (typeof e == "function") return Ou(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hl)) return 11;
    if (e === Wl) return 14;
  }
  return 2;
}
function en(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
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
function si(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ou(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Fn:
        return yn(n.children, o, i, t);
      case Bl:
        (s = 8), (o |= 8);
        break;
      case _a:
        return (
          (e = Qe(12, n, t, o | 2)), (e.elementType = _a), (e.lanes = i), e
        );
      case ka:
        return (e = Qe(13, n, t, o)), (e.elementType = ka), (e.lanes = i), e;
      case ba:
        return (e = Qe(19, n, t, o)), (e.elementType = ba), (e.lanes = i), e;
      case Bf:
        return rs(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vf:
              s = 10;
              break e;
            case $f:
              s = 9;
              break e;
            case Hl:
              s = 11;
              break e;
            case Wl:
              s = 14;
              break e;
            case zt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qe(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function yn(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function rs(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = Bf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gs(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function Qs(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function H0(e, t, n, r, o) {
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
    (this.eventTimes = _s(0)),
    (this.expirationTimes = _s(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _s(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ru(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new H0(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Qe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uu(i),
    e
  );
}
function W0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: In,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jh(e) {
  if (!e) return nn;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return jp(e, n, t);
  }
  return t;
}
function Ih(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Ru(n, r, !0, e, o, i, s, a, l)),
    (e.context = jh(null)),
    (n = e.current),
    (r = Oe()),
    (o = Jt(n)),
    (i = Rt(r, o)),
    (i.callback = t ?? null),
    Xt(n, i, o),
    (e.current.lanes = o),
    mo(e, o, r),
    Ie(e, r),
    e
  );
}
function os(e, t, n, r) {
  var o = t.current,
    i = Oe(),
    s = Jt(o);
  return (
    (n = jh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(o, t, s)),
    e !== null && (st(e, o, s, i), ei(e, o, s)),
    s
  );
}
function Ui(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ed(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tu(e, t) {
  Ed(e, t), (e = e.alternate) && Ed(e, t);
}
function K0() {
  return null;
}
var Fh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Au(e) {
  this._internalRoot = e;
}
is.prototype.render = Au.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  os(e, t, null, null);
};
is.prototype.unmount = Au.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      os(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function is(e) {
  this._internalRoot = e;
}
is.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++);
    $t.splice(n, 0, e), n === 0 && mp(e);
  }
};
function _u(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ss(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cd() {}
function q0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ui(s);
        i.call(u);
      };
    }
    var s = Ih(t, r, e, 0, null, !1, !1, "", Cd);
    return (
      (e._reactRootContainer = s),
      (e[At] = s.current),
      eo(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ui(l);
      a.call(u);
    };
  }
  var l = Ru(e, 0, !1, null, null, !1, !1, "", Cd);
  return (
    (e._reactRootContainer = l),
    (e[At] = l.current),
    eo(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      os(t, l, n, r);
    }),
    l
  );
}
function as(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Ui(s);
        a.call(l);
      };
    }
    os(t, s, e, o);
  } else s = q0(n, t, e, o, r);
  return Ui(s);
}
dp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nr(t.pendingLanes);
        n !== 0 &&
          (Gl(t, n | 1), Ie(t, ie()), !(K & 6) && ((lr = ie() + 500), cn()));
      }
      break;
    case 13:
      Cn(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var o = Oe();
          st(r, e, 1, o);
        }
      }),
        Tu(e, 1);
  }
};
Ql = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Oe();
      st(t, e, 134217728, n);
    }
    Tu(e, 134217728);
  }
};
fp = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Oe();
      st(n, e, t, r);
    }
    Tu(e, t);
  }
};
pp = function () {
  return q;
};
hp = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
Va = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ja(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Xi(r);
            if (!o) throw Error(_(90));
            Wf(r), ja(r, o);
          }
        }
      }
      break;
    case "textarea":
      qf(e, n);
      break;
    case "select":
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
ep = Eu;
tp = Cn;
var G0 = { usingClientEntryPoint: !1, Events: [go, zn, Xi, Zf, Jf, Eu] },
  Ar = {
    findFiberByHostInstance: hn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Q0 = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = op(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || K0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vo.isDisabled && Vo.supportsFiber)
    try {
      (qi = Vo.inject(Q0)), (ht = Vo);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G0;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_u(t)) throw Error(_(200));
  return W0(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!_u(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = Fh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ru(e, 1, !1, null, null, n, !1, r, o)),
    (e[At] = t.current),
    eo(e.nodeType === 8 ? e.parentNode : e),
    new Au(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = op(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return Cn(e);
};
He.hydrate = function (e, t, n) {
  if (!ss(t)) throw Error(_(200));
  return as(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!_u(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Fh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Ih(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[At] = t.current),
    eo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new is(t);
};
He.render = function (e, t, n) {
  if (!ss(t)) throw Error(_(200));
  return as(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!ss(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Cn(function () {
        as(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = Eu;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ss(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return as(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Lh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lh);
    } catch (e) {
      console.error(e);
    }
}
Lh(), (Lf.exports = He);
var wo = Lf.exports;
const Y0 = Of(wo);
var Dh,
  Pd = wo;
(Dh = Pd.createRoot), Pd.hydrateRoot;
const X0 = 1,
  Z0 = 1e6;
let Ys = 0;
function J0() {
  return (Ys = (Ys + 1) % Number.MAX_SAFE_INTEGER), Ys.toString();
}
const Xs = new Map(),
  Od = (e) => {
    if (Xs.has(e)) return;
    const t = setTimeout(() => {
      Xs.delete(e), Wr({ type: "REMOVE_TOAST", toastId: e });
    }, Z0);
    Xs.set(e, t);
  },
  ew = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, X0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Od(n)
            : e.toasts.forEach((r) => {
                Od(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  ai = [];
let li = { toasts: [] };
function Wr(e) {
  (li = ew(li, e)),
    ai.forEach((t) => {
      t(li);
    });
}
function tw({ ...e }) {
  const t = J0(),
    n = (o) => Wr({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Wr({ type: "DISMISS_TOAST", toastId: t });
  return (
    Wr({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function ku() {
  const [e, t] = y.useState(li);
  return (
    y.useEffect(
      () => (
        ai.push(t),
        () => {
          const n = ai.indexOf(t);
          n > -1 && ai.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: tw,
      dismiss: (n) => Wr({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ls(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var nw = ["color"],
  rw = y.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = ls(e, nw);
    return y.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      y.createElement("path", {
        d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  ow = ["color"],
  iw = y.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = ls(e, ow);
    return y.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      y.createElement("path", {
        d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  sw = ["color"],
  aw = y.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = ls(e, sw);
    return y.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      y.createElement("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  lw = ["color"],
  uw = y.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = ls(e, lw);
    return y.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      y.createElement("path", {
        d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
        fill: r,
      }),
    );
  });
function U(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function cw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function us(...e) {
  return (t) => e.forEach((n) => cw(n, t));
}
function Se(...e) {
  return y.useCallback(us(...e), e);
}
function dw(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = y.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(c) {
      const { scope: f, children: p, ...g } = c,
        h = (f == null ? void 0 : f[e][l]) || a,
        x = y.useMemo(() => g, Object.values(g));
      return E.jsx(h.Provider, { value: x, children: p });
    }
    function d(c, f) {
      const p = (f == null ? void 0 : f[e][l]) || a,
        g = y.useContext(p);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, d];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, fw(o, ...t)];
}
function fw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const c = l(i)[`__scope${u}`];
        return { ...a, ...c };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var ur = y.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = y.Children.toArray(n),
    i = o.find(hw);
  if (i) {
    const s = i.props.children,
      a = o.map((l) =>
        l === i
          ? y.Children.count(s) > 1
            ? y.Children.only(null)
            : y.isValidElement(s)
              ? s.props.children
              : null
          : l,
      );
    return E.jsx(xl, {
      ...r,
      ref: t,
      children: y.isValidElement(s) ? y.cloneElement(s, void 0, a) : null,
    });
  }
  return E.jsx(xl, { ...r, ref: t, children: n });
});
ur.displayName = "Slot";
var xl = y.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (y.isValidElement(n)) {
    const o = vw(n);
    return y.cloneElement(n, { ...mw(r, n.props), ref: t ? us(t, o) : o });
  }
  return y.Children.count(n) > 1 ? y.Children.only(null) : null;
});
xl.displayName = "SlotClone";
var pw = ({ children: e }) => E.jsx(E.Fragment, { children: e });
function hw(e) {
  return y.isValidElement(e) && e.type === pw;
}
function mw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vw(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function bu(e) {
  const t = e + "CollectionProvider",
    [n, r] = dw(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (p) => {
      const { scope: g, children: h } = p,
        x = Dt.useRef(null),
        m = Dt.useRef(new Map()).current;
      return E.jsx(o, { scope: g, itemMap: m, collectionRef: x, children: h });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Dt.forwardRef((p, g) => {
      const { scope: h, children: x } = p,
        m = i(a, h),
        v = Se(g, m.collectionRef);
      return E.jsx(ur, { ref: v, children: x });
    });
  l.displayName = a;
  const u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    c = Dt.forwardRef((p, g) => {
      const { scope: h, children: x, ...m } = p,
        v = Dt.useRef(null),
        w = Se(g, v),
        S = i(u, h);
      return (
        Dt.useEffect(
          () => (
            S.itemMap.set(v, { ref: v, ...m }), () => void S.itemMap.delete(v)
          ),
        ),
        E.jsx(ur, { [d]: "", ref: w, children: x })
      );
    });
  c.displayName = u;
  function f(p) {
    const g = i(e + "CollectionConsumer", p);
    return Dt.useCallback(() => {
      const x = g.collectionRef.current;
      if (!x) return [];
      const m = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (S, C) => m.indexOf(S.ref.current) - m.indexOf(C.ref.current),
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: c }, f, r];
}
function Mu(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = y.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (c) => {
      var m;
      const { scope: f, children: p, ...g } = c,
        h = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a,
        x = y.useMemo(() => g, Object.values(g));
      return E.jsx(h.Provider, { value: x, children: p });
    };
    u.displayName = i + "Provider";
    function d(c, f) {
      var h;
      const p = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a,
        g = y.useContext(p);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, gw(o, ...t)];
}
function gw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const c = l(i)[`__scope${u}`];
        return { ...a, ...c };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var yw = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  ne = yw.reduce((e, t) => {
    const n = y.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        a = i ? ur : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        E.jsx(a, { ...s, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Nu(e, t) {
  e && wo.flushSync(() => e.dispatchEvent(t));
}
function Re(e) {
  const t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    y.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function ww(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Re(e);
  y.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var xw = "DismissableLayer",
  Sl = "dismissableLayer.update",
  Sw = "dismissableLayer.pointerDownOutside",
  Ew = "dismissableLayer.focusOutside",
  Rd,
  Uh = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ju = y.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = y.useContext(Uh),
      [d, c] = y.useState(null),
      f =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = y.useState({}),
      g = Se(t, (P) => c(P)),
      h = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = h.indexOf(x),
      v = d ? h.indexOf(d) : -1,
      w = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = v >= m,
      C = Pw((P) => {
        const A = P.target,
          I = [...u.branches].some((k) => k.contains(A));
        !S ||
          I ||
          (o == null || o(P),
          s == null || s(P),
          P.defaultPrevented || a == null || a());
      }, f),
      O = Ow((P) => {
        const A = P.target;
        [...u.branches].some((k) => k.contains(A)) ||
          (i == null || i(P),
          s == null || s(P),
          P.defaultPrevented || a == null || a());
      }, f);
    return (
      ww((P) => {
        v === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && a && (P.preventDefault(), a()));
      }, f),
      y.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Rd = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Td(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Rd);
            }
          );
      }, [d, f, n, u]),
      y.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            Td());
        },
        [d, u],
      ),
      y.useEffect(() => {
        const P = () => p({});
        return (
          document.addEventListener(Sl, P),
          () => document.removeEventListener(Sl, P)
        );
      }, []),
      E.jsx(ne.div, {
        ...l,
        ref: g,
        style: {
          pointerEvents: w ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: U(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: U(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: U(e.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
ju.displayName = xw;
var Cw = "DismissableLayerBranch",
  zh = y.forwardRef((e, t) => {
    const n = y.useContext(Uh),
      r = y.useRef(null),
      o = Se(t, r);
    return (
      y.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      E.jsx(ne.div, { ...e, ref: o })
    );
  });
zh.displayName = Cw;
function Pw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Re(e),
    r = y.useRef(!1),
    o = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Vh(Sw, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Ow(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Re(e),
    r = y.useRef(!1);
  return (
    y.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Vh(Ew, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Td() {
  const e = new CustomEvent(Sl);
  document.dispatchEvent(e);
}
function Vh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Nu(o, i) : o.dispatchEvent(i);
}
var Rw = ju,
  Tw = zh,
  rn = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
  Aw = "Portal",
  Iu = y.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = y.useState(!1);
    rn(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? Y0.createPortal(E.jsx(ne.div, { ...r, ref: t }), s) : null;
  });
Iu.displayName = Aw;
function _w(e, t) {
  return y.useReducer((n, r) => t[n][r] ?? n, e);
}
var hr = (e) => {
  const { present: t, children: n } = e,
    r = kw(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n),
    i = Se(r.ref, bw(o));
  return typeof n == "function" || r.isPresent
    ? y.cloneElement(o, { ref: i })
    : null;
};
hr.displayName = "Presence";
function kw(e) {
  const [t, n] = y.useState(),
    r = y.useRef({}),
    o = y.useRef(e),
    i = y.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = _w(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const u = $o(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    rn(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const f = i.current,
          p = $o(u);
        e
          ? l("MOUNT")
          : p === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    rn(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          c = (p) => {
            const h = $o(r.current).includes(p.animationName);
            if (p.target === t && h && (l("ANIMATION_END"), !o.current)) {
              const x = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                }));
            }
          },
          f = (p) => {
            p.target === t && (i.current = $o(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: y.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function $o(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function bw(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Fu({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Mw({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    a = Re(n),
    l = y.useCallback(
      (u) => {
        if (i) {
          const c = typeof u == "function" ? u(e) : u;
          c !== e && a(c);
        } else o(u);
      },
      [i, e, o, a],
    );
  return [s, l];
}
function Mw({ defaultProp: e, onChange: t }) {
  const n = y.useState(e),
    [r] = n,
    o = y.useRef(r),
    i = Re(t);
  return (
    y.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var Nw = "VisuallyHidden",
  Lu = y.forwardRef((e, t) =>
    E.jsx(ne.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Lu.displayName = Nw;
var Du = "ToastProvider",
  [Uu, jw, Iw] = bu("Toast"),
  [$h, oO] = Mu("Toast", [Iw]),
  [Fw, cs] = $h(Du),
  Bh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [a, l] = y.useState(null),
      [u, d] = y.useState(0),
      c = y.useRef(!1),
      f = y.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Du}\`. Expected non-empty \`string\`.`,
        ),
      E.jsx(Uu.Provider, {
        scope: t,
        children: E.jsx(Fw, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: y.useCallback(() => d((p) => p + 1), []),
          onToastRemove: y.useCallback(() => d((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: c,
          isClosePausedRef: f,
          children: s,
        }),
      })
    );
  };
Bh.displayName = Du;
var Hh = "ToastViewport",
  Lw = ["F8"],
  El = "toast.viewportPause",
  Cl = "toast.viewportResume",
  Wh = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Lw,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = cs(Hh, n),
      a = jw(n),
      l = y.useRef(null),
      u = y.useRef(null),
      d = y.useRef(null),
      c = y.useRef(null),
      f = Se(t, c, s.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      g = s.toastCount > 0;
    y.useEffect(() => {
      const x = (m) => {
        var w;
        r.length !== 0 &&
          r.every((S) => m[S] || m.code === S) &&
          ((w = c.current) == null || w.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [r]),
      y.useEffect(() => {
        const x = l.current,
          m = c.current;
        if (g && x && m) {
          const v = () => {
              if (!s.isClosePausedRef.current) {
                const O = new CustomEvent(El);
                m.dispatchEvent(O), (s.isClosePausedRef.current = !0);
              }
            },
            w = () => {
              if (s.isClosePausedRef.current) {
                const O = new CustomEvent(Cl);
                m.dispatchEvent(O), (s.isClosePausedRef.current = !1);
              }
            },
            S = (O) => {
              !x.contains(O.relatedTarget) && w();
            },
            C = () => {
              x.contains(document.activeElement) || w();
            };
          return (
            x.addEventListener("focusin", v),
            x.addEventListener("focusout", S),
            x.addEventListener("pointermove", v),
            x.addEventListener("pointerleave", C),
            window.addEventListener("blur", v),
            window.addEventListener("focus", w),
            () => {
              x.removeEventListener("focusin", v),
                x.removeEventListener("focusout", S),
                x.removeEventListener("pointermove", v),
                x.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", v),
                window.removeEventListener("focus", w);
            }
          );
        }
      }, [g, s.isClosePausedRef]);
    const h = y.useCallback(
      ({ tabbingDirection: x }) => {
        const v = a().map((w) => {
          const S = w.ref.current,
            C = [S, ...Yw(S)];
          return x === "forwards" ? C : C.reverse();
        });
        return (x === "forwards" ? v.reverse() : v).flat();
      },
      [a],
    );
    return (
      y.useEffect(() => {
        const x = c.current;
        if (x) {
          const m = (v) => {
            var C, O, P;
            const w = v.altKey || v.ctrlKey || v.metaKey;
            if (v.key === "Tab" && !w) {
              const A = document.activeElement,
                I = v.shiftKey;
              if (v.target === x && I) {
                (C = u.current) == null || C.focus();
                return;
              }
              const M = h({ tabbingDirection: I ? "backwards" : "forwards" }),
                V = M.findIndex((b) => b === A);
              Zs(M.slice(V + 1))
                ? v.preventDefault()
                : I
                  ? (O = u.current) == null || O.focus()
                  : (P = d.current) == null || P.focus();
            }
          };
          return (
            x.addEventListener("keydown", m),
            () => x.removeEventListener("keydown", m)
          );
        }
      }, [a, h]),
      E.jsxs(Tw, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g &&
            E.jsx(Pl, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = h({ tabbingDirection: "forwards" });
                Zs(x);
              },
            }),
          E.jsx(Uu.Slot, {
            scope: n,
            children: E.jsx(ne.ol, { tabIndex: -1, ...i, ref: f }),
          }),
          g &&
            E.jsx(Pl, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const x = h({ tabbingDirection: "backwards" });
                Zs(x);
              },
            }),
        ],
      })
    );
  });
Wh.displayName = Hh;
var Kh = "ToastFocusProxy",
  Pl = y.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = cs(Kh, n);
    return E.jsx(Lu, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && r();
      },
    });
  });
Pl.displayName = Kh;
var ds = "Toast",
  Dw = "toast.swipeStart",
  Uw = "toast.swipeMove",
  zw = "toast.swipeCancel",
  Vw = "toast.swipeEnd",
  qh = y.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [a = !0, l] = Fu({ prop: r, defaultProp: o, onChange: i });
    return E.jsx(hr, {
      present: n || a,
      children: E.jsx(Hw, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Re(e.onPause),
        onResume: Re(e.onResume),
        onSwipeStart: U(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: U(e.onSwipeMove, (u) => {
          const { x: d, y: c } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${c}px`,
            );
        }),
        onSwipeCancel: U(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: U(e.onSwipeEnd, (u) => {
          const { x: d, y: c } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${c}px`,
            ),
            l(!1);
        }),
      }),
    });
  });
qh.displayName = ds;
var [$w, Bw] = $h(ds, { onClose() {} }),
  Hw = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: c,
        onSwipeCancel: f,
        onSwipeEnd: p,
        ...g
      } = e,
      h = cs(ds, n),
      [x, m] = y.useState(null),
      v = Se(t, (b) => m(b)),
      w = y.useRef(null),
      S = y.useRef(null),
      C = o || h.duration,
      O = y.useRef(0),
      P = y.useRef(C),
      A = y.useRef(0),
      { onToastAdd: I, onToastRemove: k } = h,
      F = Re(() => {
        var B;
        (x == null ? void 0 : x.contains(document.activeElement)) &&
          ((B = h.viewport) == null || B.focus()),
          s();
      }),
      M = y.useCallback(
        (b) => {
          !b ||
            b === 1 / 0 ||
            (window.clearTimeout(A.current),
            (O.current = new Date().getTime()),
            (A.current = window.setTimeout(F, b)));
        },
        [F],
      );
    y.useEffect(() => {
      const b = h.viewport;
      if (b) {
        const B = () => {
            M(P.current), u == null || u();
          },
          D = () => {
            const H = new Date().getTime() - O.current;
            (P.current = P.current - H),
              window.clearTimeout(A.current),
              l == null || l();
          };
        return (
          b.addEventListener(El, D),
          b.addEventListener(Cl, B),
          () => {
            b.removeEventListener(El, D), b.removeEventListener(Cl, B);
          }
        );
      }
    }, [h.viewport, C, l, u, M]),
      y.useEffect(() => {
        i && !h.isClosePausedRef.current && M(C);
      }, [i, C, h.isClosePausedRef, M]),
      y.useEffect(() => (I(), () => k()), [I, k]);
    const V = y.useMemo(() => (x ? em(x) : null), [x]);
    return h.viewport
      ? E.jsxs(E.Fragment, {
          children: [
            V &&
              E.jsx(Ww, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: V,
              }),
            E.jsx($w, {
              scope: n,
              onClose: F,
              children: wo.createPortal(
                E.jsx(Uu.ItemSlot, {
                  scope: n,
                  children: E.jsx(Rw, {
                    asChild: !0,
                    onEscapeKeyDown: U(a, () => {
                      h.isFocusedToastEscapeKeyDownRef.current || F(),
                        (h.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: E.jsx(ne.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": h.swipeDirection,
                      ...g,
                      ref: v,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: U(e.onKeyDown, (b) => {
                        b.key === "Escape" &&
                          (a == null || a(b.nativeEvent),
                          b.nativeEvent.defaultPrevented ||
                            ((h.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: U(e.onPointerDown, (b) => {
                        b.button === 0 &&
                          (w.current = { x: b.clientX, y: b.clientY });
                      }),
                      onPointerMove: U(e.onPointerMove, (b) => {
                        if (!w.current) return;
                        const B = b.clientX - w.current.x,
                          D = b.clientY - w.current.y,
                          H = !!S.current,
                          R = ["left", "right"].includes(h.swipeDirection),
                          T = ["left", "up"].includes(h.swipeDirection)
                            ? Math.min
                            : Math.max,
                          N = R ? T(0, B) : 0,
                          L = R ? 0 : T(0, D),
                          W = b.pointerType === "touch" ? 10 : 2,
                          Ee = { x: N, y: L },
                          ve = { originalEvent: b, delta: Ee };
                        H
                          ? ((S.current = Ee), Bo(Uw, c, ve, { discrete: !1 }))
                          : Ad(Ee, h.swipeDirection, W)
                            ? ((S.current = Ee),
                              Bo(Dw, d, ve, { discrete: !1 }),
                              b.target.setPointerCapture(b.pointerId))
                            : (Math.abs(B) > W || Math.abs(D) > W) &&
                              (w.current = null);
                      }),
                      onPointerUp: U(e.onPointerUp, (b) => {
                        const B = S.current,
                          D = b.target;
                        if (
                          (D.hasPointerCapture(b.pointerId) &&
                            D.releasePointerCapture(b.pointerId),
                          (S.current = null),
                          (w.current = null),
                          B)
                        ) {
                          const H = b.currentTarget,
                            R = { originalEvent: b, delta: B };
                          Ad(B, h.swipeDirection, h.swipeThreshold)
                            ? Bo(Vw, p, R, { discrete: !0 })
                            : Bo(zw, f, R, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (T) => T.preventDefault(),
                              { once: !0 },
                            );
                        }
                      }),
                    }),
                  }),
                }),
                h.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Ww = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = cs(ds, t),
      [i, s] = y.useState(!1),
      [a, l] = y.useState(!1);
    return (
      Gw(() => s(!0)),
      y.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : E.jsx(Iu, {
            asChild: !0,
            children: E.jsx(Lu, {
              ...r,
              children:
                i && E.jsxs(E.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  Kw = "ToastTitle",
  Gh = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return E.jsx(ne.div, { ...r, ref: t });
  });
Gh.displayName = Kw;
var qw = "ToastDescription",
  Qh = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return E.jsx(ne.div, { ...r, ref: t });
  });
Qh.displayName = qw;
var Yh = "ToastAction",
  Xh = y.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? E.jsx(Jh, {
          altText: n,
          asChild: !0,
          children: E.jsx(zu, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Yh}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Xh.displayName = Yh;
var Zh = "ToastClose",
  zu = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = Bw(Zh, n);
    return E.jsx(Jh, {
      asChild: !0,
      children: E.jsx(ne.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: U(e.onClick, o.onClose),
      }),
    });
  });
zu.displayName = Zh;
var Jh = y.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return E.jsx(ne.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function em(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Qw(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...em(r));
      }
    }),
    t
  );
}
function Bo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Nu(o, i) : o.dispatchEvent(i);
}
var Ad = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function Gw(e = () => {}) {
  const t = Re(e);
  rn(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function Qw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Yw(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zs(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var Xw = Bh,
  tm = Wh,
  nm = qh,
  rm = Gh,
  om = Qh,
  im = Xh,
  sm = zu;
function am(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = am(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Zw() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = am(e)) && (r && (r += " "), (r += t));
  return r;
}
const _d = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  kd = Zw,
  lm = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return kd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          c = i == null ? void 0 : i[u];
        if (d === null) return null;
        const f = _d(d) || _d(c);
        return o[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [c, f] = d;
          return f === void 0 || (u[c] = f), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: c, className: f, ...p } = d;
              return Object.entries(p).every((g) => {
                let [h, x] = g;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...a }[h])
                  : { ...i, ...a }[h] === x;
              })
                ? [...u, c, f]
                : u;
            }, []);
    return kd(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
function um(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = um(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Jw() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = um(e)) && (r && (r += " "), (r += t));
  return r;
}
const Vu = "-",
  e1 = (e) => {
    const t = n1(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(Vu);
        return a[0] === "" && a.length !== 1 && a.shift(), cm(a, t) || t1(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  cm = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? cm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Vu);
    return (s = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : s.classGroupId;
  },
  bd = /^\[(.+)\]$/,
  t1 = (e) => {
    if (bd.test(e)) {
      const t = bd.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  n1 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      o1(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Ol(s, r, i, t);
      }),
      r
    );
  },
  Ol = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Md(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (r1(o)) {
          Ol(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Ol(s, Md(t, i), n, r);
      });
    });
  },
  Md = (e, t) => {
    let n = e;
    return (
      t.split(Vu).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  r1 = (e) => e.isThemeGetter,
  o1 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, a]) => [t + s, a]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  i1 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  dm = "!",
  s1 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          d = 0,
          c;
        for (let x = 0; x < a.length; x++) {
          let m = a[x];
          if (u === 0) {
            if (m === o && (r || a.slice(x, x + i) === t)) {
              l.push(a.slice(d, x)), (d = x + i);
              continue;
            }
            if (m === "/") {
              c = x;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(d),
          p = f.startsWith(dm),
          g = p ? f.substring(1) : f,
          h = c && c > d ? c - d : void 0;
        return {
          modifiers: l,
          hasImportantModifier: p,
          baseClassName: g,
          maybePostfixModifierPosition: h,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  a1 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  l1 = (e) => ({ cache: i1(e.cacheSize), parseClassName: s1(e), ...e1(e) }),
  u1 = /\s+/,
  c1 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(u1);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: d,
          hasImportantModifier: c,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(u);
      let g = !!p,
        h = r(g ? f.substring(0, p) : f);
      if (!h) {
        if (!g) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((h = r(f)), !h)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        g = !1;
      }
      const x = a1(d).join(":"),
        m = c ? x + dm : x,
        v = m + h;
      if (i.includes(v)) continue;
      i.push(v);
      const w = o(h, g);
      for (let S = 0; S < w.length; ++S) {
        const C = w[S];
        i.push(m + C);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function d1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = fm(t)) && (r && (r += " "), (r += n));
  return r;
}
const fm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = fm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function f1(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const u = t.reduce((d, c) => c(d), e());
    return (n = l1(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const d = c1(l, n);
    return o(l, d), d;
  }
  return function () {
    return i(d1.apply(null, arguments));
  };
}
const Q = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  pm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  p1 = /^\d+\/\d+$/,
  h1 = new Set(["px", "full", "screen"]),
  m1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  v1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  g1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  y1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  w1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  St = (e) => Jn(e) || h1.has(e) || p1.test(e),
  Ft = (e) => mr(e, "length", T1),
  Jn = (e) => !!e && !Number.isNaN(Number(e)),
  Js = (e) => mr(e, "number", Jn),
  _r = (e) => !!e && Number.isInteger(Number(e)),
  x1 = (e) => e.endsWith("%") && Jn(e.slice(0, -1)),
  z = (e) => pm.test(e),
  Lt = (e) => m1.test(e),
  S1 = new Set(["length", "size", "percentage"]),
  E1 = (e) => mr(e, S1, hm),
  C1 = (e) => mr(e, "position", hm),
  P1 = new Set(["image", "url"]),
  O1 = (e) => mr(e, P1, _1),
  R1 = (e) => mr(e, "", A1),
  kr = () => !0,
  mr = (e, t, n) => {
    const r = pm.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  T1 = (e) => v1.test(e) && !g1.test(e),
  hm = () => !1,
  A1 = (e) => y1.test(e),
  _1 = (e) => w1.test(e),
  k1 = () => {
    const e = Q("colors"),
      t = Q("spacing"),
      n = Q("blur"),
      r = Q("brightness"),
      o = Q("borderColor"),
      i = Q("borderRadius"),
      s = Q("borderSpacing"),
      a = Q("borderWidth"),
      l = Q("contrast"),
      u = Q("grayscale"),
      d = Q("hueRotate"),
      c = Q("invert"),
      f = Q("gap"),
      p = Q("gradientColorStops"),
      g = Q("gradientColorStopPositions"),
      h = Q("inset"),
      x = Q("margin"),
      m = Q("opacity"),
      v = Q("padding"),
      w = Q("saturate"),
      S = Q("scale"),
      C = Q("sepia"),
      O = Q("skew"),
      P = Q("space"),
      A = Q("translate"),
      I = () => ["auto", "contain", "none"],
      k = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", z, t],
      M = () => [z, t],
      V = () => ["", St, Ft],
      b = () => ["auto", Jn, z],
      B = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      D = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      R = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", z],
      N = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      L = () => [Jn, z];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [kr],
        spacing: [St, Ft],
        blur: ["none", "", Lt, z],
        brightness: L(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Lt, z],
        borderSpacing: M(),
        borderWidth: V(),
        contrast: L(),
        grayscale: T(),
        hueRotate: L(),
        invert: T(),
        gap: M(),
        gradientColorStops: [e],
        gradientColorStopPositions: [x1, Ft],
        inset: F(),
        margin: F(),
        opacity: L(),
        padding: M(),
        saturate: L(),
        scale: L(),
        sepia: T(),
        skew: L(),
        space: M(),
        translate: M(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", z] }],
        container: ["container"],
        columns: [{ columns: [Lt] }],
        "break-after": [{ "break-after": N() }],
        "break-before": [{ "break-before": N() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...B(), z] }],
        overflow: [{ overflow: k() }],
        "overflow-x": [{ "overflow-x": k() }],
        "overflow-y": [{ "overflow-y": k() }],
        overscroll: [{ overscroll: I() }],
        "overscroll-x": [{ "overscroll-x": I() }],
        "overscroll-y": [{ "overscroll-y": I() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [h] }],
        "inset-x": [{ "inset-x": [h] }],
        "inset-y": [{ "inset-y": [h] }],
        start: [{ start: [h] }],
        end: [{ end: [h] }],
        top: [{ top: [h] }],
        right: [{ right: [h] }],
        bottom: [{ bottom: [h] }],
        left: [{ left: [h] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", _r, z] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", z] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", _r, z] }],
        "grid-cols": [{ "grid-cols": [kr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", _r, z] }, z] }],
        "col-start": [{ "col-start": b() }],
        "col-end": [{ "col-end": b() }],
        "grid-rows": [{ "grid-rows": [kr] }],
        "row-start-end": [{ row: ["auto", { span: [_r, z] }, z] }],
        "row-start": [{ "row-start": b() }],
        "row-end": [{ "row-end": b() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", z] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", z] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...R()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...R(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...R(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [v] }],
        px: [{ px: [v] }],
        py: [{ py: [v] }],
        ps: [{ ps: [v] }],
        pe: [{ pe: [v] }],
        pt: [{ pt: [v] }],
        pr: [{ pr: [v] }],
        pb: [{ pb: [v] }],
        pl: [{ pl: [v] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, t] }],
        "min-w": [{ "min-w": [z, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              z,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Lt] },
              Lt,
            ],
          },
        ],
        h: [{ h: [z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [z, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Lt, Ft] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Js,
            ],
          },
        ],
        "font-family": [{ font: [kr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              z,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Jn, Js] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              St,
              z,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", z] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", z] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...D(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", St, Ft] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", St, z] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: M() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              z,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", z] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...B(), C1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", E1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              O1,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [g] }],
        "gradient-via-pos": [{ via: [g] }],
        "gradient-to-pos": [{ to: [g] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...D(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: D() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...D()] }],
        "outline-offset": [{ "outline-offset": [St, z] }],
        "outline-w": [{ outline: [St, Ft] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [St, Ft] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Lt, R1] }],
        "shadow-color": [{ shadow: [kr] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Lt, z] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [c] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [c] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              z,
            ],
          },
        ],
        duration: [{ duration: L() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", z] }],
        delay: [{ delay: L() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", z] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [_r, z] }],
        "translate-x": [{ "translate-x": [A] }],
        "translate-y": [{ "translate-y": [A] }],
        "skew-x": [{ "skew-x": [O] }],
        "skew-y": [{ "skew-y": [O] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              z,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              z,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": M() }],
        "scroll-mx": [{ "scroll-mx": M() }],
        "scroll-my": [{ "scroll-my": M() }],
        "scroll-ms": [{ "scroll-ms": M() }],
        "scroll-me": [{ "scroll-me": M() }],
        "scroll-mt": [{ "scroll-mt": M() }],
        "scroll-mr": [{ "scroll-mr": M() }],
        "scroll-mb": [{ "scroll-mb": M() }],
        "scroll-ml": [{ "scroll-ml": M() }],
        "scroll-p": [{ "scroll-p": M() }],
        "scroll-px": [{ "scroll-px": M() }],
        "scroll-py": [{ "scroll-py": M() }],
        "scroll-ps": [{ "scroll-ps": M() }],
        "scroll-pe": [{ "scroll-pe": M() }],
        "scroll-pt": [{ "scroll-pt": M() }],
        "scroll-pr": [{ "scroll-pr": M() }],
        "scroll-pb": [{ "scroll-pb": M() }],
        "scroll-pl": [{ "scroll-pl": M() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", z] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [St, Ft, Js] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  b1 = f1(k1);
function me(...e) {
  return b1(Jw(e));
}
const M1 = Xw,
  mm = y.forwardRef(({ className: e, ...t }, n) =>
    E.jsx(tm, {
      ref: n,
      className: me(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
mm.displayName = tm.displayName;
const N1 = lm(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  vm = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
    E.jsx(nm, { ref: r, className: me(N1({ variant: t }), e), ...n }),
  );
vm.displayName = nm.displayName;
const j1 = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(im, {
    ref: n,
    className: me(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...t,
  }),
);
j1.displayName = im.displayName;
const gm = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(sm, {
    ref: n,
    className: me(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: E.jsx(aw, { className: "h-4 w-4" }),
  }),
);
gm.displayName = sm.displayName;
const ym = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(rm, {
    ref: n,
    className: me("text-sm font-semibold [&+div]:text-xs", e),
    ...t,
  }),
);
ym.displayName = rm.displayName;
const wm = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(om, { ref: n, className: me("text-sm opacity-90", e), ...t }),
);
wm.displayName = om.displayName;
function xm() {
  const { toasts: e } = ku();
  return E.jsxs(M1, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return E.jsxs(
          vm,
          {
            ...i,
            children: [
              E.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && E.jsx(ym, { children: n }),
                  r && E.jsx(wm, { children: r }),
                ],
              }),
              o,
              E.jsx(gm, {}),
            ],
          },
          t,
        );
      }),
      E.jsx(mm, {}),
    ],
  });
}
const Sm = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx("textarea", {
    className: me(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: n,
    ...t,
  }),
);
Sm.displayName = "Textarea";
const I1 = lm(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  nt = y.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? ur : "button";
      return E.jsx(s, {
        className: me(I1({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    },
  );
nt.displayName = "Button";
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Em = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var L1 = {
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
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D1 = y.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...a
    },
    l,
  ) =>
    y.createElement(
      "svg",
      {
        ref: l,
        ...L1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Em("lucide", o),
        ...a,
      },
      [
        ...s.map(([u, d]) => y.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yt = (e, t) => {
  const n = y.forwardRef(({ className: r, ...o }, i) =>
    y.createElement(D1, {
      ref: i,
      iconNode: t,
      className: Em(`lucide-${F1(e)}`, r),
      ...o,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U1 = yt("AlignCenter", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
  ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z1 = yt("AlignLeft", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
  ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = yt("AlignRight", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = yt("Bold", [
  [
    "path",
    {
      d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
      key: "mg9rjx",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = yt("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = yt("Redo", [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = yt("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = yt("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G1 = yt("Undo", [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }],
]);
function Q1() {
  return E.jsx("header", {
    className: "border-b bg-card shrink-0",
    children: E.jsxs("div", {
      className: "px-4 flex items-center justify-between h-14",
      children: [
        E.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            E.jsx("img", {
              src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Word_2013-2019_logo.svg",
              alt: "Word Logo",
              className: "w-8 h-8",
            }),
            E.jsx("h1", {
              className: "text-lg font-semibold text-primary",
              children: "Word AI",
            }),
          ],
        }),
      ],
    }),
  });
}
var Y1 = "Separator",
  Nd = "horizontal",
  X1 = ["horizontal", "vertical"],
  Cm = y.forwardRef((e, t) => {
    const { decorative: n, orientation: r = Nd, ...o } = e,
      i = Z1(r) ? r : Nd,
      a = n
        ? { role: "none" }
        : {
            "aria-orientation": i === "vertical" ? i : void 0,
            role: "separator",
          };
    return E.jsx(ne.div, { "data-orientation": i, ...a, ...o, ref: t });
  });
Cm.displayName = Y1;
function Z1(e) {
  return X1.includes(e);
}
var Pm = Cm;
const ui = y.forwardRef(
  (
    { className: e, orientation: t = "horizontal", decorative: n = !0, ...r },
    o,
  ) =>
    E.jsx(Pm, {
      ref: o,
      decorative: n,
      orientation: t,
      className: me(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e,
      ),
      ...r,
    }),
);
ui.displayName = Pm.displayName;
var J1 = y.createContext(void 0);
function Om(e) {
  const t = y.useContext(J1);
  return e || t || "ltr";
}
var ea = 0;
function ex() {
  y.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? jd()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? jd()),
      ea++,
      () => {
        ea === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          ea--;
      }
    );
  }, []);
}
function jd() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var ta = "focusScope.autoFocusOnMount",
  na = "focusScope.autoFocusOnUnmount",
  Id = { bubbles: !1, cancelable: !0 },
  tx = "FocusScope",
  Rm = y.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = y.useState(null),
      u = Re(o),
      d = Re(i),
      c = y.useRef(null),
      f = Se(t, (h) => l(h)),
      p = y.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    y.useEffect(() => {
      if (r) {
        let h = function (w) {
            if (p.paused || !a) return;
            const S = w.target;
            a.contains(S) ? (c.current = S) : Ut(c.current, { select: !0 });
          },
          x = function (w) {
            if (p.paused || !a) return;
            const S = w.relatedTarget;
            S !== null && (a.contains(S) || Ut(c.current, { select: !0 }));
          },
          m = function (w) {
            if (document.activeElement === document.body)
              for (const C of w) C.removedNodes.length > 0 && Ut(a);
          };
        document.addEventListener("focusin", h),
          document.addEventListener("focusout", x);
        const v = new MutationObserver(m);
        return (
          a && v.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", h),
              document.removeEventListener("focusout", x),
              v.disconnect();
          }
        );
      }
    }, [r, a, p.paused]),
      y.useEffect(() => {
        if (a) {
          Ld.add(p);
          const h = document.activeElement;
          if (!a.contains(h)) {
            const m = new CustomEvent(ta, Id);
            a.addEventListener(ta, u),
              a.dispatchEvent(m),
              m.defaultPrevented ||
                (nx(ax(Tm(a)), { select: !0 }),
                document.activeElement === h && Ut(a));
          }
          return () => {
            a.removeEventListener(ta, u),
              setTimeout(() => {
                const m = new CustomEvent(na, Id);
                a.addEventListener(na, d),
                  a.dispatchEvent(m),
                  m.defaultPrevented || Ut(h ?? document.body, { select: !0 }),
                  a.removeEventListener(na, d),
                  Ld.remove(p);
              }, 0);
          };
        }
      }, [a, u, d, p]);
    const g = y.useCallback(
      (h) => {
        if ((!n && !r) || p.paused) return;
        const x = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
          m = document.activeElement;
        if (x && m) {
          const v = h.currentTarget,
            [w, S] = rx(v);
          w && S
            ? !h.shiftKey && m === S
              ? (h.preventDefault(), n && Ut(w, { select: !0 }))
              : h.shiftKey &&
                m === w &&
                (h.preventDefault(), n && Ut(S, { select: !0 }))
            : m === v && h.preventDefault();
        }
      },
      [n, r, p.paused],
    );
    return E.jsx(ne.div, { tabIndex: -1, ...s, ref: f, onKeyDown: g });
  });
Rm.displayName = tx;
function nx(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Ut(r, { select: t }), document.activeElement !== n)) return;
}
function rx(e) {
  const t = Tm(e),
    n = Fd(t, e),
    r = Fd(t.reverse(), e);
  return [n, r];
}
function Tm(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Fd(e, t) {
  for (const n of e) if (!ox(n, { upTo: t })) return n;
}
function ox(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ix(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ix(e) && t && e.select();
  }
}
var Ld = sx();
function sx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Dd(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Dd(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Dd(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ax(e) {
  return e.filter((t) => t.tagName !== "A");
}
var lx = Ug.useId || (() => {}),
  ux = 0;
function Rl(e) {
  const [t, n] = y.useState(lx());
  return (
    rn(() => {
      n((r) => r ?? String(ux++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const cx = ["top", "right", "bottom", "left"],
  on = Math.min,
  Ue = Math.max,
  zi = Math.round,
  Ho = Math.floor,
  vt = (e) => ({ x: e, y: e }),
  dx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  fx = { start: "end", end: "start" };
function Tl(e, t, n) {
  return Ue(e, on(t, n));
}
function bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function vr(e) {
  return e.split("-")[1];
}
function $u(e) {
  return e === "x" ? "y" : "x";
}
function Bu(e) {
  return e === "y" ? "height" : "width";
}
function sn(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function Hu(e) {
  return $u(sn(e));
}
function px(e, t, n) {
  n === void 0 && (n = !1);
  const r = vr(e),
    o = Hu(e),
    i = Bu(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return t.reference[i] > t.floating[i] && (s = Vi(s)), [s, Vi(s)];
}
function hx(e) {
  const t = Vi(e);
  return [Al(e), t, Al(t)];
}
function Al(e) {
  return e.replace(/start|end/g, (t) => fx[t]);
}
function mx(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function vx(e, t, n, r) {
  const o = vr(e);
  let i = mx(Mt(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Al)))), i
  );
}
function Vi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => dx[t]);
}
function gx(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Am(e) {
  return typeof e != "number"
    ? gx(e)
    : { top: e, right: e, bottom: e, left: e };
}
function $i(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Ud(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = sn(t),
    s = Hu(t),
    a = Bu(s),
    l = Mt(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    c = r.y + r.height / 2 - o.height / 2,
    f = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: d, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: c };
      break;
    case "left":
      p = { x: r.x - o.width, y: c };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (vr(t)) {
    case "start":
      p[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const yx = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: c } = Ud(u, r, l),
    f = r,
    p = {},
    g = 0;
  for (let h = 0; h < a.length; h++) {
    const { name: x, fn: m } = a[h],
      {
        x: v,
        y: w,
        data: S,
        reset: C,
      } = await m({
        x: d,
        y: c,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: p,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = v ?? d),
      (c = w ?? c),
      (p = { ...p, [x]: { ...p[x], ...S } }),
      C &&
        g <= 50 &&
        (g++,
        typeof C == "object" &&
          (C.placement && (f = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: d, y: c } = Ud(u, f, l))),
        (h = -1));
  }
  return { x: d, y: c, placement: f, strategy: o, middlewareData: p };
};
async function uo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: c = "floating",
      altBoundary: f = !1,
      padding: p = 0,
    } = bt(t, e),
    g = Am(p),
    x = a[f ? (c === "floating" ? "reference" : "floating") : c],
    m = $i(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    v =
      c === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    w = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(w)))
      ? (await (i.getScale == null ? void 0 : i.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = $i(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: v,
            offsetParent: w,
            strategy: l,
          })
        : v,
    );
  return {
    top: (m.top - C.top + g.top) / S.y,
    bottom: (C.bottom - m.bottom + g.bottom) / S.y,
    left: (m.left - C.left + g.left) / S.x,
    right: (C.right - m.right + g.right) / S.x,
  };
}
const wx = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: d = 0 } = bt(e, t) || {};
      if (u == null) return {};
      const c = Am(d),
        f = { x: n, y: r },
        p = Hu(o),
        g = Bu(p),
        h = await s.getDimensions(u),
        x = p === "y",
        m = x ? "top" : "left",
        v = x ? "bottom" : "right",
        w = x ? "clientHeight" : "clientWidth",
        S = i.reference[g] + i.reference[p] - f[p] - i.floating[g],
        C = f[p] - i.reference[p],
        O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let P = O ? O[w] : 0;
      (!P || !(await (s.isElement == null ? void 0 : s.isElement(O)))) &&
        (P = a.floating[w] || i.floating[g]);
      const A = S / 2 - C / 2,
        I = P / 2 - h[g] / 2 - 1,
        k = on(c[m], I),
        F = on(c[v], I),
        M = k,
        V = P - h[g] - F,
        b = P / 2 - h[g] / 2 + A,
        B = Tl(M, b, V),
        D =
          !l.arrow &&
          vr(o) != null &&
          b !== B &&
          i.reference[g] / 2 - (b < M ? k : F) - h[g] / 2 < 0,
        H = D ? (b < M ? b - M : b - V) : 0;
      return {
        [p]: f[p] + H,
        data: {
          [p]: B,
          centerOffset: b - B - H,
          ...(D && { alignmentOffset: H }),
        },
        reset: D,
      };
    },
  }),
  xx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: c = !0,
              fallbackPlacements: f,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: h = !0,
              ...x
            } = bt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = Mt(o),
            v = sn(a),
            w = Mt(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            C = f || (w || !h ? [Vi(a)] : hx(a)),
            O = g !== "none";
          !f && O && C.push(...vx(a, h, g, S));
          const P = [a, ...C],
            A = await uo(t, x),
            I = [];
          let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && I.push(A[m]), c)) {
            const b = px(o, s, S);
            I.push(A[b[0]], A[b[1]]);
          }
          if (
            ((k = [...k, { placement: o, overflows: I }]),
            !I.every((b) => b <= 0))
          ) {
            var F, M;
            const b = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
              B = P[b];
            if (B)
              return {
                data: { index: b, overflows: k },
                reset: { placement: B },
              };
            let D =
              (M = k
                .filter((H) => H.overflows[0] <= 0)
                .sort((H, R) => H.overflows[1] - R.overflows[1])[0]) == null
                ? void 0
                : M.placement;
            if (!D)
              switch (p) {
                case "bestFit": {
                  var V;
                  const H =
                    (V = k
                      .filter((R) => {
                        if (O) {
                          const T = sn(R.placement);
                          return T === v || T === "y";
                        }
                        return !0;
                      })
                      .map((R) => [
                        R.placement,
                        R.overflows
                          .filter((T) => T > 0)
                          .reduce((T, N) => T + N, 0),
                      ])
                      .sort((R, T) => R[1] - T[1])[0]) == null
                      ? void 0
                      : V[0];
                  H && (D = H);
                  break;
                }
                case "initialPlacement":
                  D = a;
                  break;
              }
            if (o !== D) return { reset: { placement: D } };
          }
          return {};
        },
      }
    );
  };
function zd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Vd(e) {
  return cx.some((t) => e[t] >= 0);
}
const Sx = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = bt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await uo(t, { ...o, elementContext: "reference" }),
              s = zd(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Vd(s) },
            };
          }
          case "escaped": {
            const i = await uo(t, { ...o, altBoundary: !0 }),
              s = zd(i, n.floating);
            return { data: { escapedOffsets: s, escaped: Vd(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Ex(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Mt(n),
    a = vr(n),
    l = sn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    d = i && l ? -1 : 1,
    c = bt(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: g,
  } = typeof c == "number"
    ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: c.mainAxis || 0,
        crossAxis: c.crossAxis || 0,
        alignmentAxis: c.alignmentAxis,
      };
  return (
    a && typeof g == "number" && (p = a === "end" ? g * -1 : g),
    l ? { x: p * d, y: f * u } : { x: f * u, y: p * d }
  );
}
const Cx = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await Ex(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  Px = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: m, y: v } = x;
                  return { x: m, y: v };
                },
              },
              ...l
            } = bt(e, t),
            u = { x: n, y: r },
            d = await uo(t, l),
            c = sn(Mt(o)),
            f = $u(c);
          let p = u[f],
            g = u[c];
          if (i) {
            const x = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              v = p + d[x],
              w = p - d[m];
            p = Tl(v, p, w);
          }
          if (s) {
            const x = c === "y" ? "top" : "left",
              m = c === "y" ? "bottom" : "right",
              v = g + d[x],
              w = g - d[m];
            g = Tl(v, g, w);
          }
          const h = a.fn({ ...t, [f]: p, [c]: g });
          return {
            ...h,
            data: { x: h.x - n, y: h.y - r, enabled: { [f]: i, [c]: s } },
          };
        },
      }
    );
  },
  Ox = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = bt(e, t),
            d = { x: n, y: r },
            c = sn(o),
            f = $u(c);
          let p = d[f],
            g = d[c];
          const h = bt(a, t),
            x =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (l) {
            const w = f === "y" ? "height" : "width",
              S = i.reference[f] - i.floating[w] + x.mainAxis,
              C = i.reference[f] + i.reference[w] - x.mainAxis;
            p < S ? (p = S) : p > C && (p = C);
          }
          if (u) {
            var m, v;
            const w = f === "y" ? "width" : "height",
              S = ["top", "left"].includes(Mt(o)),
              C =
                i.reference[c] -
                i.floating[w] +
                ((S && ((m = s.offset) == null ? void 0 : m[c])) || 0) +
                (S ? 0 : x.crossAxis),
              O =
                i.reference[c] +
                i.reference[w] +
                (S ? 0 : ((v = s.offset) == null ? void 0 : v[c]) || 0) -
                (S ? x.crossAxis : 0);
            g < C ? (g = C) : g > O && (g = O);
          }
          return { [f]: p, [c]: g };
        },
      }
    );
  },
  Rx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = bt(e, t),
            d = await uo(t, u),
            c = Mt(o),
            f = vr(o),
            p = sn(o) === "y",
            { width: g, height: h } = i.floating;
          let x, m;
          c === "top" || c === "bottom"
            ? ((x = c),
              (m =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = c), (x = f === "end" ? "top" : "bottom"));
          const v = h - d.top - d.bottom,
            w = g - d.left - d.right,
            S = on(h - d[x], v),
            C = on(g - d[m], w),
            O = !t.middlewareData.shift;
          let P = S,
            A = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (A = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = v),
            O && !f)
          ) {
            const k = Ue(d.left, 0),
              F = Ue(d.right, 0),
              M = Ue(d.top, 0),
              V = Ue(d.bottom, 0);
            p
              ? (A = g - 2 * (k !== 0 || F !== 0 ? k + F : Ue(d.left, d.right)))
              : (P =
                  h - 2 * (M !== 0 || V !== 0 ? M + V : Ue(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: A, availableHeight: P });
          const I = await s.getDimensions(a.floating);
          return g !== I.width || h !== I.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function fs() {
  return typeof window < "u";
}
function gr(e) {
  return _m(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $e(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function wt(e) {
  var t;
  return (t = (_m(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function _m(e) {
  return fs() ? e instanceof Node || e instanceof $e(e).Node : !1;
}
function lt(e) {
  return fs() ? e instanceof Element || e instanceof $e(e).Element : !1;
}
function gt(e) {
  return fs() ? e instanceof HTMLElement || e instanceof $e(e).HTMLElement : !1;
}
function $d(e) {
  return !fs() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof $e(e).ShadowRoot;
}
function xo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ut(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function Tx(e) {
  return ["table", "td", "th"].includes(gr(e));
}
function ps(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Wu(e) {
  const t = Ku(),
    n = lt(e) ? ut(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function Ax(e) {
  let t = an(e);
  for (; gt(t) && !cr(t); ) {
    if (Wu(t)) return t;
    if (ps(t)) return null;
    t = an(t);
  }
  return null;
}
function Ku() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function cr(e) {
  return ["html", "body", "#document"].includes(gr(e));
}
function ut(e) {
  return $e(e).getComputedStyle(e);
}
function hs(e) {
  return lt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function an(e) {
  if (gr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || ($d(e) && e.host) || wt(e);
  return $d(t) ? t.host : t;
}
function km(e) {
  const t = an(e);
  return cr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : gt(t) && xo(t)
      ? t
      : km(t);
}
function co(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = km(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = $e(o);
  if (i) {
    const a = _l(s);
    return t.concat(
      s,
      s.visualViewport || [],
      xo(o) ? o : [],
      a && n ? co(a) : [],
    );
  }
  return t.concat(o, co(o, [], n));
}
function _l(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bm(e) {
  const t = ut(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = gt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = zi(n) !== i || zi(r) !== s;
  return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function qu(e) {
  return lt(e) ? e : e.contextElement;
}
function er(e) {
  const t = qu(e);
  if (!gt(t)) return vt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = bm(t);
  let s = (i ? zi(n.width) : n.width) / r,
    a = (i ? zi(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const _x = vt(0);
function Mm(e) {
  const t = $e(e);
  return !Ku() || !t.visualViewport
    ? _x
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function kx(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== $e(e)) ? !1 : t;
}
function Pn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = qu(e);
  let s = vt(1);
  t && (r ? lt(r) && (s = er(r)) : (s = er(e)));
  const a = kx(i, n, r) ? Mm(i) : vt(0);
  let l = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    d = o.width / s.x,
    c = o.height / s.y;
  if (i) {
    const f = $e(i),
      p = r && lt(r) ? $e(r) : r;
    let g = f,
      h = _l(g);
    for (; h && r && p !== g; ) {
      const x = er(h),
        m = h.getBoundingClientRect(),
        v = ut(h),
        w = m.left + (h.clientLeft + parseFloat(v.paddingLeft)) * x.x,
        S = m.top + (h.clientTop + parseFloat(v.paddingTop)) * x.y;
      (l *= x.x),
        (u *= x.y),
        (d *= x.x),
        (c *= x.y),
        (l += w),
        (u += S),
        (g = $e(h)),
        (h = _l(g));
    }
  }
  return $i({ width: d, height: c, x: l, y: u });
}
function Gu(e, t) {
  const n = hs(e).scrollLeft;
  return t ? t.left + n : Pn(wt(e)).left + n;
}
function Nm(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Gu(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function bx(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = wt(r),
    a = t ? ps(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = vt(1);
  const d = vt(0),
    c = gt(r);
  if (
    (c || (!c && !i)) &&
    ((gr(r) !== "body" || xo(s)) && (l = hs(r)), gt(r))
  ) {
    const p = Pn(r);
    (u = er(r)), (d.x = p.x + r.clientLeft), (d.y = p.y + r.clientTop);
  }
  const f = s && !c && !i ? Nm(s, l, !0) : vt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y,
  };
}
function Mx(e) {
  return Array.from(e.getClientRects());
}
function Nx(e) {
  const t = wt(e),
    n = hs(e),
    r = e.ownerDocument.body,
    o = Ue(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ue(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Gu(e);
  const a = -n.scrollTop;
  return (
    ut(r).direction === "rtl" && (s += Ue(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function jx(e, t) {
  const n = $e(e),
    r = wt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Ku();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function Ix(e, t) {
  const n = Pn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = gt(e) ? er(e) : vt(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    u = r * i.y;
  return { width: s, height: a, x: l, y: u };
}
function Bd(e, t, n) {
  let r;
  if (t === "viewport") r = jx(e, n);
  else if (t === "document") r = Nx(wt(e));
  else if (lt(t)) r = Ix(t, n);
  else {
    const o = Mm(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return $i(r);
}
function jm(e, t) {
  const n = an(e);
  return n === t || !lt(n) || cr(n)
    ? !1
    : ut(n).position === "fixed" || jm(n, t);
}
function Fx(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = co(e, [], !1).filter((a) => lt(a) && gr(a) !== "body"),
    o = null;
  const i = ut(e).position === "fixed";
  let s = i ? an(e) : e;
  for (; lt(s) && !cr(s); ) {
    const a = ut(s),
      l = Wu(s);
    !l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (xo(s) && !l && jm(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = a),
      (s = an(s));
  }
  return t.set(e, r), r;
}
function Lx(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? ps(t)
          ? []
          : Fx(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce(
      (u, d) => {
        const c = Bd(t, d, o);
        return (
          (u.top = Ue(c.top, u.top)),
          (u.right = on(c.right, u.right)),
          (u.bottom = on(c.bottom, u.bottom)),
          (u.left = Ue(c.left, u.left)),
          u
        );
      },
      Bd(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Dx(e) {
  const { width: t, height: n } = bm(e);
  return { width: t, height: n };
}
function Ux(e, t, n) {
  const r = gt(t),
    o = wt(t),
    i = n === "fixed",
    s = Pn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = vt(0);
  if (r || (!r && !i))
    if (((gr(t) !== "body" || xo(o)) && (a = hs(t)), r)) {
      const f = Pn(t, !0, i, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else o && (l.x = Gu(o));
  const u = o && !r && !i ? Nm(o, a) : vt(0),
    d = s.left + a.scrollLeft - l.x - u.x,
    c = s.top + a.scrollTop - l.y - u.y;
  return { x: d, y: c, width: s.width, height: s.height };
}
function ra(e) {
  return ut(e).position === "static";
}
function Hd(e, t) {
  if (!gt(e) || ut(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return wt(e) === n && (n = n.ownerDocument.body), n;
}
function Im(e, t) {
  const n = $e(e);
  if (ps(e)) return n;
  if (!gt(e)) {
    let o = an(e);
    for (; o && !cr(o); ) {
      if (lt(o) && !ra(o)) return o;
      o = an(o);
    }
    return n;
  }
  let r = Hd(e, t);
  for (; r && Tx(r) && ra(r); ) r = Hd(r, t);
  return r && cr(r) && ra(r) && !Wu(r) ? n : r || Ax(e) || n;
}
const zx = async function (e) {
  const t = this.getOffsetParent || Im,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Ux(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Vx(e) {
  return ut(e).direction === "rtl";
}
const $x = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bx,
  getDocumentElement: wt,
  getClippingRect: Lx,
  getOffsetParent: Im,
  getElementRects: zx,
  getClientRects: Mx,
  getDimensions: Dx,
  getScale: er,
  isElement: lt,
  isRTL: Vx,
};
function Bx(e, t) {
  let n = null,
    r;
  const o = wt(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const { left: u, top: d, width: c, height: f } = e.getBoundingClientRect();
    if ((a || t(), !c || !f)) return;
    const p = Ho(d),
      g = Ho(o.clientWidth - (u + c)),
      h = Ho(o.clientHeight - (d + f)),
      x = Ho(u),
      v = {
        rootMargin: -p + "px " + -g + "px " + -h + "px " + -x + "px",
        threshold: Ue(0, on(1, l)) || 1,
      };
    let w = !0;
    function S(C) {
      const O = C[0].intersectionRatio;
      if (O !== l) {
        if (!w) return s();
        O
          ? s(!1, O)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, v);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Hx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = qu(e),
    d = o || i ? [...(u ? co(u) : []), ...co(t)] : [];
  d.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n);
  });
  const c = u && a ? Bx(u, n) : null;
  let f = -1,
    p = null;
  s &&
    ((p = new ResizeObserver((m) => {
      let [v] = m;
      v &&
        v.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var w;
          (w = p) == null || w.observe(t);
        }))),
        n();
    })),
    u && !l && p.observe(u),
    p.observe(t));
  let g,
    h = l ? Pn(e) : null;
  l && x();
  function x() {
    const m = Pn(e);
    h &&
      (m.x !== h.x ||
        m.y !== h.y ||
        m.width !== h.width ||
        m.height !== h.height) &&
      n(),
      (h = m),
      (g = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var m;
      d.forEach((v) => {
        o && v.removeEventListener("scroll", n),
          i && v.removeEventListener("resize", n);
      }),
        c == null || c(),
        (m = p) == null || m.disconnect(),
        (p = null),
        l && cancelAnimationFrame(g);
    }
  );
}
const Wx = Cx,
  Kx = Px,
  qx = xx,
  Gx = Rx,
  Qx = Sx,
  Wd = wx,
  Yx = Ox,
  Xx = (e, t, n) => {
    const r = new Map(),
      o = { platform: $x, ...n },
      i = { ...o.platform, _c: r };
    return yx(e, t, { ...o, platform: i });
  };
var ci = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
function Bi(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Bi(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Bi(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Fm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kd(e, t) {
  const n = Fm(e);
  return Math.round(t * n) / n;
}
function oa(e) {
  const t = y.useRef(e);
  return (
    ci(() => {
      t.current = e;
    }),
    t
  );
}
function Zx(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [d, c] = y.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = y.useState(r);
  Bi(f, r) || p(r);
  const [g, h] = y.useState(null),
    [x, m] = y.useState(null),
    v = y.useCallback((R) => {
      R !== O.current && ((O.current = R), h(R));
    }, []),
    w = y.useCallback((R) => {
      R !== P.current && ((P.current = R), m(R));
    }, []),
    S = i || g,
    C = s || x,
    O = y.useRef(null),
    P = y.useRef(null),
    A = y.useRef(d),
    I = l != null,
    k = oa(l),
    F = oa(o),
    M = oa(u),
    V = y.useCallback(() => {
      if (!O.current || !P.current) return;
      const R = { placement: t, strategy: n, middleware: f };
      F.current && (R.platform = F.current),
        Xx(O.current, P.current, R).then((T) => {
          const N = { ...T, isPositioned: M.current !== !1 };
          b.current &&
            !Bi(A.current, N) &&
            ((A.current = N),
            wo.flushSync(() => {
              c(N);
            }));
        });
    }, [f, t, n, F, M]);
  ci(() => {
    u === !1 &&
      A.current.isPositioned &&
      ((A.current.isPositioned = !1), c((R) => ({ ...R, isPositioned: !1 })));
  }, [u]);
  const b = y.useRef(!1);
  ci(
    () => (
      (b.current = !0),
      () => {
        b.current = !1;
      }
    ),
    [],
  ),
    ci(() => {
      if ((S && (O.current = S), C && (P.current = C), S && C)) {
        if (k.current) return k.current(S, C, V);
        V();
      }
    }, [S, C, V, k, I]);
  const B = y.useMemo(
      () => ({ reference: O, floating: P, setReference: v, setFloating: w }),
      [v, w],
    ),
    D = y.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    H = y.useMemo(() => {
      const R = { position: n, left: 0, top: 0 };
      if (!D.floating) return R;
      const T = Kd(D.floating, d.x),
        N = Kd(D.floating, d.y);
      return a
        ? {
            ...R,
            transform: "translate(" + T + "px, " + N + "px)",
            ...(Fm(D.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: T, top: N };
    }, [n, a, D.floating, d.x, d.y]);
  return y.useMemo(
    () => ({ ...d, update: V, refs: B, elements: D, floatingStyles: H }),
    [d, V, B, D, H],
  );
}
const Jx = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Wd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Wd({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  eS = (e, t) => ({ ...Wx(e), options: [e, t] }),
  tS = (e, t) => ({ ...Kx(e), options: [e, t] }),
  nS = (e, t) => ({ ...Yx(e), options: [e, t] }),
  rS = (e, t) => ({ ...qx(e), options: [e, t] }),
  oS = (e, t) => ({ ...Gx(e), options: [e, t] }),
  iS = (e, t) => ({ ...Qx(e), options: [e, t] }),
  sS = (e, t) => ({ ...Jx(e), options: [e, t] });
var aS = "Arrow",
  Lm = y.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return E.jsx(ne.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : E.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Lm.displayName = aS;
var lS = Lm;
function uS(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = y.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(c) {
      const { scope: f, children: p, ...g } = c,
        h = (f == null ? void 0 : f[e][l]) || a,
        x = y.useMemo(() => g, Object.values(g));
      return E.jsx(h.Provider, { value: x, children: p });
    }
    function d(c, f) {
      const p = (f == null ? void 0 : f[e][l]) || a,
        g = y.useContext(p);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, d];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, cS(o, ...t)];
}
function cS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const c = l(i)[`__scope${u}`];
        return { ...a, ...c };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function dS(e) {
  const [t, n] = y.useState(void 0);
  return (
    rn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Qu = "Popper",
  [Dm, Um] = uS(Qu),
  [fS, zm] = Dm(Qu),
  Vm = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = y.useState(null);
    return E.jsx(fS, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
Vm.displayName = Qu;
var $m = "PopperAnchor",
  Bm = y.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = zm($m, n),
      s = y.useRef(null),
      a = Se(t, s);
    return (
      y.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : E.jsx(ne.div, { ...o, ref: a })
    );
  });
Bm.displayName = $m;
var Yu = "PopperContent",
  [pS, hS] = Dm(Yu),
  Hm = y.forwardRef((e, t) => {
    var ke, yr, Ke, wr, pc, hc;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: c = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: g,
        ...h
      } = e,
      x = zm(Yu, n),
      [m, v] = y.useState(null),
      w = Se(t, (xr) => v(xr)),
      [S, C] = y.useState(null),
      O = dS(S),
      P = (O == null ? void 0 : O.width) ?? 0,
      A = (O == null ? void 0 : O.height) ?? 0,
      I = r + (i !== "center" ? "-" + i : ""),
      k =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      F = Array.isArray(u) ? u : [u],
      M = F.length > 0,
      V = { padding: k, boundary: F.filter(vS), altBoundary: M },
      {
        refs: b,
        floatingStyles: B,
        placement: D,
        isPositioned: H,
        middlewareData: R,
      } = Zx({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...xr) =>
          Hx(...xr, { animationFrame: p === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          eS({ mainAxis: o + A, alignmentAxis: s }),
          l &&
            tS({
              mainAxis: !0,
              crossAxis: !1,
              limiter: c === "partial" ? nS() : void 0,
              ...V,
            }),
          l && rS({ ...V }),
          oS({
            ...V,
            apply: ({
              elements: xr,
              rects: mc,
              availableWidth: wg,
              availableHeight: xg,
            }) => {
              const { width: Sg, height: Eg } = mc.reference,
                Po = xr.floating.style;
              Po.setProperty("--radix-popper-available-width", `${wg}px`),
                Po.setProperty("--radix-popper-available-height", `${xg}px`),
                Po.setProperty("--radix-popper-anchor-width", `${Sg}px`),
                Po.setProperty("--radix-popper-anchor-height", `${Eg}px`);
            },
          }),
          S && sS({ element: S, padding: a }),
          gS({ arrowWidth: P, arrowHeight: A }),
          f && iS({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [T, N] = qm(D),
      L = Re(g);
    rn(() => {
      H && (L == null || L());
    }, [H, L]);
    const W = (ke = R.arrow) == null ? void 0 : ke.x,
      Ee = (yr = R.arrow) == null ? void 0 : yr.y,
      ve = ((Ke = R.arrow) == null ? void 0 : Ke.centerOffset) !== 0,
      [jt, Ce] = y.useState();
    return (
      rn(() => {
        m && Ce(window.getComputedStyle(m).zIndex);
      }, [m]),
      E.jsx("div", {
        ref: b.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: H ? B.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: jt,
          "--radix-popper-transform-origin": [
            (wr = R.transformOrigin) == null ? void 0 : wr.x,
            (pc = R.transformOrigin) == null ? void 0 : pc.y,
          ].join(" "),
          ...(((hc = R.hide) == null ? void 0 : hc.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: E.jsx(pS, {
          scope: n,
          placedSide: T,
          onArrowChange: C,
          arrowX: W,
          arrowY: Ee,
          shouldHideArrow: ve,
          children: E.jsx(ne.div, {
            "data-side": T,
            "data-align": N,
            ...h,
            ref: w,
            style: { ...h.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Hm.displayName = Yu;
var Wm = "PopperArrow",
  mS = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Km = y.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = hS(Wm, r),
      s = mS[i.placedSide];
    return E.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: E.jsx(lS, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Km.displayName = Wm;
function vS(e) {
  return e !== null;
}
var gS = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, m, v;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, d] = qm(n),
      c = { start: "0%", center: "50%", end: "100%" }[d],
      f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      p = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + l / 2;
    let g = "",
      h = "";
    return (
      u === "bottom"
        ? ((g = s ? c : `${f}px`), (h = `${-l}px`))
        : u === "top"
          ? ((g = s ? c : `${f}px`), (h = `${r.floating.height + l}px`))
          : u === "right"
            ? ((g = `${-l}px`), (h = s ? c : `${p}px`))
            : u === "left" &&
              ((g = `${r.floating.width + l}px`), (h = s ? c : `${p}px`)),
      { data: { x: g, y: h } }
    );
  },
});
function qm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var yS = Vm,
  wS = Bm,
  xS = Hm,
  SS = Km;
function ES(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = y.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(c) {
      const { scope: f, children: p, ...g } = c,
        h = (f == null ? void 0 : f[e][l]) || a,
        x = y.useMemo(() => g, Object.values(g));
      return E.jsx(h.Provider, { value: x, children: p });
    }
    function d(c, f) {
      const p = (f == null ? void 0 : f[e][l]) || a,
        g = y.useContext(p);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, d];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, CS(o, ...t)];
}
function CS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const c = l(i)[`__scope${u}`];
        return { ...a, ...c };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var ia = "rovingFocusGroup.onEntryFocus",
  PS = { bubbles: !1, cancelable: !0 },
  ms = "RovingFocusGroup",
  [kl, Gm, OS] = bu(ms),
  [RS, Qm] = ES(ms, [OS]),
  [TS, AS] = RS(ms),
  Ym = y.forwardRef((e, t) =>
    E.jsx(kl.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: E.jsx(kl.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: E.jsx(_S, { ...e, ref: t }),
      }),
    }),
  );
Ym.displayName = ms;
var _S = y.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        preventScrollOnEntryFocus: d = !1,
        ...c
      } = e,
      f = y.useRef(null),
      p = Se(t, f),
      g = Om(i),
      [h = null, x] = Fu({ prop: s, defaultProp: a, onChange: l }),
      [m, v] = y.useState(!1),
      w = Re(u),
      S = Gm(n),
      C = y.useRef(!1),
      [O, P] = y.useState(0);
    return (
      y.useEffect(() => {
        const A = f.current;
        if (A)
          return A.addEventListener(ia, w), () => A.removeEventListener(ia, w);
      }, [w]),
      E.jsx(TS, {
        scope: n,
        orientation: r,
        dir: g,
        loop: o,
        currentTabStopId: h,
        onItemFocus: y.useCallback((A) => x(A), [x]),
        onItemShiftTab: y.useCallback(() => v(!0), []),
        onFocusableItemAdd: y.useCallback(() => P((A) => A + 1), []),
        onFocusableItemRemove: y.useCallback(() => P((A) => A - 1), []),
        children: E.jsx(ne.div, {
          tabIndex: m || O === 0 ? -1 : 0,
          "data-orientation": r,
          ...c,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: U(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: U(e.onFocus, (A) => {
            const I = !C.current;
            if (A.target === A.currentTarget && I && !m) {
              const k = new CustomEvent(ia, PS);
              if ((A.currentTarget.dispatchEvent(k), !k.defaultPrevented)) {
                const F = S().filter((D) => D.focusable),
                  M = F.find((D) => D.active),
                  V = F.find((D) => D.id === h),
                  B = [M, V, ...F].filter(Boolean).map((D) => D.ref.current);
                Jm(B, d);
              }
            }
            C.current = !1;
          }),
          onBlur: U(e.onBlur, () => v(!1)),
        }),
      })
    );
  }),
  Xm = "RovingFocusGroupItem",
  Zm = y.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...s
      } = e,
      a = Rl(),
      l = i || a,
      u = AS(Xm, n),
      d = u.currentTabStopId === l,
      c = Gm(n),
      { onFocusableItemAdd: f, onFocusableItemRemove: p } = u;
    return (
      y.useEffect(() => {
        if (r) return f(), () => p();
      }, [r, f, p]),
      E.jsx(kl.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: E.jsx(ne.span, {
          tabIndex: d ? 0 : -1,
          "data-orientation": u.orientation,
          ...s,
          ref: t,
          onMouseDown: U(e.onMouseDown, (g) => {
            r ? u.onItemFocus(l) : g.preventDefault();
          }),
          onFocus: U(e.onFocus, () => u.onItemFocus(l)),
          onKeyDown: U(e.onKeyDown, (g) => {
            if (g.key === "Tab" && g.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (g.target !== g.currentTarget) return;
            const h = MS(g, u.orientation, u.dir);
            if (h !== void 0) {
              if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
              g.preventDefault();
              let m = c()
                .filter((v) => v.focusable)
                .map((v) => v.ref.current);
              if (h === "last") m.reverse();
              else if (h === "prev" || h === "next") {
                h === "prev" && m.reverse();
                const v = m.indexOf(g.currentTarget);
                m = u.loop ? NS(m, v + 1) : m.slice(v + 1);
              }
              setTimeout(() => Jm(m));
            }
          }),
        }),
      })
    );
  });
Zm.displayName = Xm;
var kS = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function bS(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function MS(e, t, n) {
  const r = bS(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return kS[r];
}
function Jm(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function NS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var jS = Ym,
  IS = Zm,
  FS = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  kn = new WeakMap(),
  Wo = new WeakMap(),
  Ko = {},
  sa = 0,
  ev = function (e) {
    return e && (e.host || ev(e.parentNode));
  },
  LS = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = ev(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  DS = function (e, t, n, r) {
    var o = LS(t, Array.isArray(e) ? e : [e]);
    Ko[n] || (Ko[n] = new WeakMap());
    var i = Ko[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      u = function (c) {
        !c || a.has(c) || (a.add(c), u(c.parentNode));
      };
    o.forEach(u);
    var d = function (c) {
      !c ||
        l.has(c) ||
        Array.prototype.forEach.call(c.children, function (f) {
          if (a.has(f)) d(f);
          else
            try {
              var p = f.getAttribute(r),
                g = p !== null && p !== "false",
                h = (kn.get(f) || 0) + 1,
                x = (i.get(f) || 0) + 1;
              kn.set(f, h),
                i.set(f, x),
                s.push(f),
                h === 1 && g && Wo.set(f, !0),
                x === 1 && f.setAttribute(n, "true"),
                g || f.setAttribute(r, "true");
            } catch (m) {
              console.error("aria-hidden: cannot operate on ", f, m);
            }
        });
    };
    return (
      d(t),
      a.clear(),
      sa++,
      function () {
        s.forEach(function (c) {
          var f = kn.get(c) - 1,
            p = i.get(c) - 1;
          kn.set(c, f),
            i.set(c, p),
            f || (Wo.has(c) || c.removeAttribute(r), Wo.delete(c)),
            p || c.removeAttribute(n);
        }),
          sa--,
          sa ||
            ((kn = new WeakMap()),
            (kn = new WeakMap()),
            (Wo = new WeakMap()),
            (Ko = {}));
      }
    );
  },
  US = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = FS(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        DS(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  pt = function () {
    return (
      (pt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      pt.apply(this, arguments)
    );
  };
function tv(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function zS(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var di = "right-scroll-bar-position",
  fi = "width-before-scroll-bar",
  VS = "with-scroll-bars-hidden",
  $S = "--removed-body-scroll-bar-size";
function aa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function BS(e, t) {
  var n = y.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var HS = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  qd = new WeakMap();
function WS(e, t) {
  var n = BS(null, function (r) {
    return e.forEach(function (o) {
      return aa(o, r);
    });
  });
  return (
    HS(
      function () {
        var r = qd.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (a) {
            i.has(a) || aa(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || aa(a, s);
            });
        }
        qd.set(n, e);
      },
      [e],
    ),
    n
  );
}
function KS(e) {
  return e;
}
function qS(e, t) {
  t === void 0 && (t = KS);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var d = s;
            (s = []), d.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (d) {
              s.push(d), u();
            },
            filter: function (d) {
              return (s = s.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function GS(e) {
  e === void 0 && (e = {});
  var t = qS(null);
  return (t.options = pt({ async: !0, ssr: !1 }, e)), t;
}
var nv = function (e) {
  var t = e.sideCar,
    n = tv(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return y.createElement(r, pt({}, n));
};
nv.isSideCarExport = !0;
function QS(e, t) {
  return e.useMedium(t), nv;
}
var rv = GS(),
  la = function () {},
  vs = y.forwardRef(function (e, t) {
    var n = y.useRef(null),
      r = y.useState({
        onScrollCapture: la,
        onWheelCapture: la,
        onTouchMoveCapture: la,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      c = e.shards,
      f = e.sideCar,
      p = e.noIsolation,
      g = e.inert,
      h = e.allowPinchZoom,
      x = e.as,
      m = x === void 0 ? "div" : x,
      v = e.gapMode,
      w = tv(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = f,
      C = WS([n, t]),
      O = pt(pt({}, w), o);
    return y.createElement(
      y.Fragment,
      null,
      d &&
        y.createElement(S, {
          sideCar: rv,
          removeScrollBar: u,
          shards: c,
          noIsolation: p,
          inert: g,
          setCallbacks: i,
          allowPinchZoom: !!h,
          lockRef: n,
          gapMode: v,
        }),
      s
        ? y.cloneElement(y.Children.only(a), pt(pt({}, O), { ref: C }))
        : y.createElement(m, pt({}, O, { className: l, ref: C }), a),
    );
  });
vs.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
vs.classNames = { fullWidth: fi, zeroRight: di };
var YS = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function XS() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = YS();
  return t && e.setAttribute("nonce", t), e;
}
function ZS(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function JS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var eE = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = XS()) && (ZS(t, n), JS(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  tE = function () {
    var e = eE();
    return function (t, n) {
      y.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  ov = function () {
    var e = tE(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  nE = { left: 0, top: 0, right: 0, gap: 0 },
  ua = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  rE = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ua(n), ua(r), ua(o)];
  },
  oE = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return nE;
    var t = rE(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  iE = ov(),
  tr = "data-scroll-locked",
  sE = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          VS,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          tr,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          di,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          fi,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(di, " .")
        .concat(
          di,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(fi, " .")
        .concat(
          fi,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          tr,
          `] {
    `,
        )
        .concat($S, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  Gd = function () {
    var e = parseInt(document.body.getAttribute(tr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  aE = function () {
    y.useEffect(function () {
      return (
        document.body.setAttribute(tr, (Gd() + 1).toString()),
        function () {
          var e = Gd() - 1;
          e <= 0
            ? document.body.removeAttribute(tr)
            : document.body.setAttribute(tr, e.toString());
        }
      );
    }, []);
  },
  lE = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    aE();
    var i = y.useMemo(
      function () {
        return oE(o);
      },
      [o],
    );
    return y.createElement(iE, { styles: sE(i, !t, o, n ? "" : "!important") });
  },
  bl = !1;
if (typeof window < "u")
  try {
    var qo = Object.defineProperty({}, "passive", {
      get: function () {
        return (bl = !0), !0;
      },
    });
    window.addEventListener("test", qo, qo),
      window.removeEventListener("test", qo, qo);
  } catch {
    bl = !1;
  }
var bn = bl ? { passive: !1 } : !1,
  uE = function (e) {
    return e.tagName === "TEXTAREA";
  },
  iv = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !uE(e) && n[t] === "visible")
    );
  },
  cE = function (e) {
    return iv(e, "overflowY");
  },
  dE = function (e) {
    return iv(e, "overflowX");
  },
  Qd = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = sv(e, r);
      if (o) {
        var i = av(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  fE = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  pE = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  sv = function (e, t) {
    return e === "v" ? cE(t) : dE(t);
  },
  av = function (e, t) {
    return e === "v" ? fE(t) : pE(t);
  },
  hE = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  mE = function (e, t, n, r, o) {
    var i = hE(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      d = s > 0,
      c = 0,
      f = 0;
    do {
      var p = av(e, a),
        g = p[0],
        h = p[1],
        x = p[2],
        m = h - x - i * g;
      (g || m) && sv(e, a) && ((c += m), (f += g)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((d && (Math.abs(c) < 1 || !o)) || (!d && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  Go = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Yd = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Xd = function (e) {
    return e && "current" in e ? e.current : e;
  },
  vE = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  gE = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  yE = 0,
  Mn = [];
function wE(e) {
  var t = y.useRef([]),
    n = y.useRef([0, 0]),
    r = y.useRef(),
    o = y.useState(yE++)[0],
    i = y.useState(ov)[0],
    s = y.useRef(e);
  y.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    y.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var h = zS([e.lockRef.current], (e.shards || []).map(Xd), !0).filter(
            Boolean,
          );
          return (
            h.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                h.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = y.useCallback(function (h, x) {
      if (
        ("touches" in h && h.touches.length === 2) ||
        (h.type === "wheel" && h.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var m = Go(h),
        v = n.current,
        w = "deltaX" in h ? h.deltaX : v[0] - m[0],
        S = "deltaY" in h ? h.deltaY : v[1] - m[1],
        C,
        O = h.target,
        P = Math.abs(w) > Math.abs(S) ? "h" : "v";
      if ("touches" in h && P === "h" && O.type === "range") return !1;
      var A = Qd(P, O);
      if (!A) return !0;
      if ((A ? (C = P) : ((C = P === "v" ? "h" : "v"), (A = Qd(P, O))), !A))
        return !1;
      if (
        (!r.current && "changedTouches" in h && (w || S) && (r.current = C), !C)
      )
        return !0;
      var I = r.current || C;
      return mE(I, x, h, I === "h" ? w : S, !0);
    }, []),
    l = y.useCallback(function (h) {
      var x = h;
      if (!(!Mn.length || Mn[Mn.length - 1] !== i)) {
        var m = "deltaY" in x ? Yd(x) : Go(x),
          v = t.current.filter(function (C) {
            return (
              C.name === x.type &&
              (C.target === x.target || x.target === C.shadowParent) &&
              vE(C.delta, m)
            );
          })[0];
        if (v && v.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!v) {
          var w = (s.current.shards || [])
              .map(Xd)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(x.target);
              }),
            S = w.length > 0 ? a(x, w[0]) : !s.current.noIsolation;
          S && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = y.useCallback(function (h, x, m, v) {
      var w = { name: h, delta: x, target: m, should: v, shadowParent: xE(m) };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== w;
          });
        }, 1);
    }, []),
    d = y.useCallback(function (h) {
      (n.current = Go(h)), (r.current = void 0);
    }, []),
    c = y.useCallback(function (h) {
      u(h.type, Yd(h), h.target, a(h, e.lockRef.current));
    }, []),
    f = y.useCallback(function (h) {
      u(h.type, Go(h), h.target, a(h, e.lockRef.current));
    }, []);
  y.useEffect(function () {
    return (
      Mn.push(i),
      e.setCallbacks({
        onScrollCapture: c,
        onWheelCapture: c,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, bn),
      document.addEventListener("touchmove", l, bn),
      document.addEventListener("touchstart", d, bn),
      function () {
        (Mn = Mn.filter(function (h) {
          return h !== i;
        })),
          document.removeEventListener("wheel", l, bn),
          document.removeEventListener("touchmove", l, bn),
          document.removeEventListener("touchstart", d, bn);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    g = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    g ? y.createElement(i, { styles: gE(o) }) : null,
    p ? y.createElement(lE, { gapMode: e.gapMode }) : null,
  );
}
function xE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const SE = QS(rv, wE);
var lv = y.forwardRef(function (e, t) {
  return y.createElement(vs, pt({}, e, { ref: t, sideCar: SE }));
});
lv.classNames = vs.classNames;
var Ml = ["Enter", " "],
  EE = ["ArrowDown", "PageUp", "Home"],
  uv = ["ArrowUp", "PageDown", "End"],
  CE = [...EE, ...uv],
  PE = { ltr: [...Ml, "ArrowRight"], rtl: [...Ml, "ArrowLeft"] },
  OE = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  So = "Menu",
  [fo, RE, TE] = bu(So),
  [Tn, cv] = Mu(So, [TE, Um, Qm]),
  gs = Um(),
  dv = Qm(),
  [AE, An] = Tn(So),
  [_E, Eo] = Tn(So),
  fv = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      a = gs(t),
      [l, u] = y.useState(null),
      d = y.useRef(!1),
      c = Re(i),
      f = Om(o);
    return (
      y.useEffect(() => {
        const p = () => {
            (d.current = !0),
              document.addEventListener("pointerdown", g, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", g, {
                capture: !0,
                once: !0,
              });
          },
          g = () => (d.current = !1);
        return (
          document.addEventListener("keydown", p, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", p, { capture: !0 }),
              document.removeEventListener("pointerdown", g, { capture: !0 }),
              document.removeEventListener("pointermove", g, { capture: !0 });
          }
        );
      }, []),
      E.jsx(yS, {
        ...a,
        children: E.jsx(AE, {
          scope: t,
          open: n,
          onOpenChange: c,
          content: l,
          onContentChange: u,
          children: E.jsx(_E, {
            scope: t,
            onClose: y.useCallback(() => c(!1), [c]),
            isUsingKeyboardRef: d,
            dir: f,
            modal: s,
            children: r,
          }),
        }),
      })
    );
  };
fv.displayName = So;
var kE = "MenuAnchor",
  Xu = y.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = gs(n);
    return E.jsx(wS, { ...o, ...r, ref: t });
  });
Xu.displayName = kE;
var Zu = "MenuPortal",
  [bE, pv] = Tn(Zu, { forceMount: void 0 }),
  hv = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = An(Zu, t);
    return E.jsx(bE, {
      scope: t,
      forceMount: n,
      children: E.jsx(hr, {
        present: n || i.open,
        children: E.jsx(Iu, { asChild: !0, container: o, children: r }),
      }),
    });
  };
hv.displayName = Zu;
var Xe = "MenuContent",
  [ME, Ju] = Tn(Xe),
  mv = y.forwardRef((e, t) => {
    const n = pv(Xe, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = An(Xe, e.__scopeMenu),
      s = Eo(Xe, e.__scopeMenu);
    return E.jsx(fo.Provider, {
      scope: e.__scopeMenu,
      children: E.jsx(hr, {
        present: r || i.open,
        children: E.jsx(fo.Slot, {
          scope: e.__scopeMenu,
          children: s.modal
            ? E.jsx(NE, { ...o, ref: t })
            : E.jsx(jE, { ...o, ref: t }),
        }),
      }),
    });
  }),
  NE = y.forwardRef((e, t) => {
    const n = An(Xe, e.__scopeMenu),
      r = y.useRef(null),
      o = Se(t, r);
    return (
      y.useEffect(() => {
        const i = r.current;
        if (i) return US(i);
      }, []),
      E.jsx(ec, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: U(e.onFocusOutside, (i) => i.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  jE = y.forwardRef((e, t) => {
    const n = An(Xe, e.__scopeMenu);
    return E.jsx(ec, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  ec = y.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: a,
        onEntryFocus: l,
        onEscapeKeyDown: u,
        onPointerDownOutside: d,
        onFocusOutside: c,
        onInteractOutside: f,
        onDismiss: p,
        disableOutsideScroll: g,
        ...h
      } = e,
      x = An(Xe, n),
      m = Eo(Xe, n),
      v = gs(n),
      w = dv(n),
      S = RE(n),
      [C, O] = y.useState(null),
      P = y.useRef(null),
      A = Se(t, P, x.onContentChange),
      I = y.useRef(0),
      k = y.useRef(""),
      F = y.useRef(0),
      M = y.useRef(null),
      V = y.useRef("right"),
      b = y.useRef(0),
      B = g ? lv : y.Fragment,
      D = g ? { as: ur, allowPinchZoom: !0 } : void 0,
      H = (T) => {
        var ke, yr;
        const N = k.current + T,
          L = S().filter((Ke) => !Ke.disabled),
          W = document.activeElement,
          Ee =
            (ke = L.find((Ke) => Ke.ref.current === W)) == null
              ? void 0
              : ke.textValue,
          ve = L.map((Ke) => Ke.textValue),
          jt = KE(ve, N, Ee),
          Ce =
            (yr = L.find((Ke) => Ke.textValue === jt)) == null
              ? void 0
              : yr.ref.current;
        (function Ke(wr) {
          (k.current = wr),
            window.clearTimeout(I.current),
            wr !== "" && (I.current = window.setTimeout(() => Ke(""), 1e3));
        })(N),
          Ce && setTimeout(() => Ce.focus());
      };
    y.useEffect(() => () => window.clearTimeout(I.current), []), ex();
    const R = y.useCallback((T) => {
      var L, W;
      return (
        V.current === ((L = M.current) == null ? void 0 : L.side) &&
        GE(T, (W = M.current) == null ? void 0 : W.area)
      );
    }, []);
    return E.jsx(ME, {
      scope: n,
      searchRef: k,
      onItemEnter: y.useCallback(
        (T) => {
          R(T) && T.preventDefault();
        },
        [R],
      ),
      onItemLeave: y.useCallback(
        (T) => {
          var N;
          R(T) || ((N = P.current) == null || N.focus(), O(null));
        },
        [R],
      ),
      onTriggerLeave: y.useCallback(
        (T) => {
          R(T) && T.preventDefault();
        },
        [R],
      ),
      pointerGraceTimerRef: F,
      onPointerGraceIntentChange: y.useCallback((T) => {
        M.current = T;
      }, []),
      children: E.jsx(B, {
        ...D,
        children: E.jsx(Rm, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: U(i, (T) => {
            var N;
            T.preventDefault(),
              (N = P.current) == null || N.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: s,
          children: E.jsx(ju, {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: c,
            onInteractOutside: f,
            onDismiss: p,
            children: E.jsx(jS, {
              asChild: !0,
              ...w,
              dir: m.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: C,
              onCurrentTabStopIdChange: O,
              onEntryFocus: U(l, (T) => {
                m.isUsingKeyboardRef.current || T.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: E.jsx(xS, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": bv(x.open),
                "data-radix-menu-content": "",
                dir: m.dir,
                ...v,
                ...h,
                ref: A,
                style: { outline: "none", ...h.style },
                onKeyDown: U(h.onKeyDown, (T) => {
                  const L =
                      T.target.closest("[data-radix-menu-content]") ===
                      T.currentTarget,
                    W = T.ctrlKey || T.altKey || T.metaKey,
                    Ee = T.key.length === 1;
                  L &&
                    (T.key === "Tab" && T.preventDefault(),
                    !W && Ee && H(T.key));
                  const ve = P.current;
                  if (T.target !== ve || !CE.includes(T.key)) return;
                  T.preventDefault();
                  const Ce = S()
                    .filter((ke) => !ke.disabled)
                    .map((ke) => ke.ref.current);
                  uv.includes(T.key) && Ce.reverse(), HE(Ce);
                }),
                onBlur: U(e.onBlur, (T) => {
                  T.currentTarget.contains(T.target) ||
                    (window.clearTimeout(I.current), (k.current = ""));
                }),
                onPointerMove: U(
                  e.onPointerMove,
                  po((T) => {
                    const N = T.target,
                      L = b.current !== T.clientX;
                    if (T.currentTarget.contains(N) && L) {
                      const W = T.clientX > b.current ? "right" : "left";
                      (V.current = W), (b.current = T.clientX);
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
mv.displayName = Xe;
var IE = "MenuGroup",
  tc = y.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return E.jsx(ne.div, { role: "group", ...r, ref: t });
  });
tc.displayName = IE;
var FE = "MenuLabel",
  vv = y.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return E.jsx(ne.div, { ...r, ref: t });
  });
vv.displayName = FE;
var Hi = "MenuItem",
  Zd = "menu.itemSelect",
  ys = y.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = y.useRef(null),
      s = Eo(Hi, e.__scopeMenu),
      a = Ju(Hi, e.__scopeMenu),
      l = Se(t, i),
      u = y.useRef(!1),
      d = () => {
        const c = i.current;
        if (!n && c) {
          const f = new CustomEvent(Zd, { bubbles: !0, cancelable: !0 });
          c.addEventListener(Zd, (p) => (r == null ? void 0 : r(p)), {
            once: !0,
          }),
            Nu(c, f),
            f.defaultPrevented ? (u.current = !1) : s.onClose();
        }
      };
    return E.jsx(gv, {
      ...o,
      ref: l,
      disabled: n,
      onClick: U(e.onClick, d),
      onPointerDown: (c) => {
        var f;
        (f = e.onPointerDown) == null || f.call(e, c), (u.current = !0);
      },
      onPointerUp: U(e.onPointerUp, (c) => {
        var f;
        u.current || (f = c.currentTarget) == null || f.click();
      }),
      onKeyDown: U(e.onKeyDown, (c) => {
        const f = a.searchRef.current !== "";
        n ||
          (f && c.key === " ") ||
          (Ml.includes(c.key) && (c.currentTarget.click(), c.preventDefault()));
      }),
    });
  });
ys.displayName = Hi;
var gv = y.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      s = Ju(Hi, n),
      a = dv(n),
      l = y.useRef(null),
      u = Se(t, l),
      [d, c] = y.useState(!1),
      [f, p] = y.useState("");
    return (
      y.useEffect(() => {
        const g = l.current;
        g && p((g.textContent ?? "").trim());
      }, [i.children]),
      E.jsx(fo.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? f,
        children: E.jsx(IS, {
          asChild: !0,
          ...a,
          focusable: !r,
          children: E.jsx(ne.div, {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: U(
              e.onPointerMove,
              po((g) => {
                r
                  ? s.onItemLeave(g)
                  : (s.onItemEnter(g),
                    g.defaultPrevented ||
                      g.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: U(
              e.onPointerLeave,
              po((g) => s.onItemLeave(g)),
            ),
            onFocus: U(e.onFocus, () => c(!0)),
            onBlur: U(e.onBlur, () => c(!1)),
          }),
        }),
      })
    );
  }),
  LE = "MenuCheckboxItem",
  yv = y.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return E.jsx(Cv, {
      scope: e.__scopeMenu,
      checked: n,
      children: E.jsx(ys, {
        role: "menuitemcheckbox",
        "aria-checked": Wi(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": rc(n),
        onSelect: U(
          o.onSelect,
          () => (r == null ? void 0 : r(Wi(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
yv.displayName = LE;
var wv = "MenuRadioGroup",
  [DE, UE] = Tn(wv, { value: void 0, onValueChange: () => {} }),
  xv = y.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      i = Re(r);
    return E.jsx(DE, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: i,
      children: E.jsx(tc, { ...o, ref: t }),
    });
  });
xv.displayName = wv;
var Sv = "MenuRadioItem",
  Ev = y.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = UE(Sv, e.__scopeMenu),
      i = n === o.value;
    return E.jsx(Cv, {
      scope: e.__scopeMenu,
      checked: i,
      children: E.jsx(ys, {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": rc(i),
        onSelect: U(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
Ev.displayName = Sv;
var nc = "MenuItemIndicator",
  [Cv, zE] = Tn(nc, { checked: !1 }),
  Pv = y.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = zE(nc, n);
    return E.jsx(hr, {
      present: r || Wi(i.checked) || i.checked === !0,
      children: E.jsx(ne.span, { ...o, ref: t, "data-state": rc(i.checked) }),
    });
  });
Pv.displayName = nc;
var VE = "MenuSeparator",
  Ov = y.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return E.jsx(ne.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t,
    });
  });
Ov.displayName = VE;
var $E = "MenuArrow",
  Rv = y.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = gs(n);
    return E.jsx(SS, { ...o, ...r, ref: t });
  });
Rv.displayName = $E;
var BE = "MenuSub",
  [iO, Tv] = Tn(BE),
  Ir = "MenuSubTrigger",
  Av = y.forwardRef((e, t) => {
    const n = An(Ir, e.__scopeMenu),
      r = Eo(Ir, e.__scopeMenu),
      o = Tv(Ir, e.__scopeMenu),
      i = Ju(Ir, e.__scopeMenu),
      s = y.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i,
      u = { __scopeMenu: e.__scopeMenu },
      d = y.useCallback(() => {
        s.current && window.clearTimeout(s.current), (s.current = null);
      }, []);
    return (
      y.useEffect(() => d, [d]),
      y.useEffect(() => {
        const c = a.current;
        return () => {
          window.clearTimeout(c), l(null);
        };
      }, [a, l]),
      E.jsx(Xu, {
        asChild: !0,
        ...u,
        children: E.jsx(gv, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": o.contentId,
          "data-state": bv(n.open),
          ...e,
          ref: us(t, o.onTriggerChange),
          onClick: (c) => {
            var f;
            (f = e.onClick) == null || f.call(e, c),
              !(e.disabled || c.defaultPrevented) &&
                (c.currentTarget.focus(), n.open || n.onOpenChange(!0));
          },
          onPointerMove: U(
            e.onPointerMove,
            po((c) => {
              i.onItemEnter(c),
                !c.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !s.current &&
                  (i.onPointerGraceIntentChange(null),
                  (s.current = window.setTimeout(() => {
                    n.onOpenChange(!0), d();
                  }, 100)));
            }),
          ),
          onPointerLeave: U(
            e.onPointerLeave,
            po((c) => {
              var p, g;
              d();
              const f =
                (p = n.content) == null ? void 0 : p.getBoundingClientRect();
              if (f) {
                const h = (g = n.content) == null ? void 0 : g.dataset.side,
                  x = h === "right",
                  m = x ? -5 : 5,
                  v = f[x ? "left" : "right"],
                  w = f[x ? "right" : "left"];
                i.onPointerGraceIntentChange({
                  area: [
                    { x: c.clientX + m, y: c.clientY },
                    { x: v, y: f.top },
                    { x: w, y: f.top },
                    { x: w, y: f.bottom },
                    { x: v, y: f.bottom },
                  ],
                  side: h,
                }),
                  window.clearTimeout(a.current),
                  (a.current = window.setTimeout(
                    () => i.onPointerGraceIntentChange(null),
                    300,
                  ));
              } else {
                if ((i.onTriggerLeave(c), c.defaultPrevented)) return;
                i.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: U(e.onKeyDown, (c) => {
            var p;
            const f = i.searchRef.current !== "";
            e.disabled ||
              (f && c.key === " ") ||
              (PE[r.dir].includes(c.key) &&
                (n.onOpenChange(!0),
                (p = n.content) == null || p.focus(),
                c.preventDefault()));
          }),
        }),
      })
    );
  });
Av.displayName = Ir;
var _v = "MenuSubContent",
  kv = y.forwardRef((e, t) => {
    const n = pv(Xe, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = An(Xe, e.__scopeMenu),
      s = Eo(Xe, e.__scopeMenu),
      a = Tv(_v, e.__scopeMenu),
      l = y.useRef(null),
      u = Se(t, l);
    return E.jsx(fo.Provider, {
      scope: e.__scopeMenu,
      children: E.jsx(hr, {
        present: r || i.open,
        children: E.jsx(fo.Slot, {
          scope: e.__scopeMenu,
          children: E.jsx(ec, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...o,
            ref: u,
            align: "start",
            side: s.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (d) => {
              var c;
              s.isUsingKeyboardRef.current &&
                ((c = l.current) == null || c.focus()),
                d.preventDefault();
            },
            onCloseAutoFocus: (d) => d.preventDefault(),
            onFocusOutside: U(e.onFocusOutside, (d) => {
              d.target !== a.trigger && i.onOpenChange(!1);
            }),
            onEscapeKeyDown: U(e.onEscapeKeyDown, (d) => {
              s.onClose(), d.preventDefault();
            }),
            onKeyDown: U(e.onKeyDown, (d) => {
              var p;
              const c = d.currentTarget.contains(d.target),
                f = OE[s.dir].includes(d.key);
              c &&
                f &&
                (i.onOpenChange(!1),
                (p = a.trigger) == null || p.focus(),
                d.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
kv.displayName = _v;
function bv(e) {
  return e ? "open" : "closed";
}
function Wi(e) {
  return e === "indeterminate";
}
function rc(e) {
  return Wi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function HE(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function WE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function KE(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = WE(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function qE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      u = t[s].x,
      d = t[s].y;
    l > r != d > r && n < ((u - a) * (r - l)) / (d - l) + a && (o = !o);
  }
  return o;
}
function GE(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return qE(n, t);
}
function po(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var QE = fv,
  YE = Xu,
  XE = hv,
  ZE = mv,
  JE = tc,
  eC = vv,
  tC = ys,
  nC = yv,
  rC = xv,
  oC = Ev,
  iC = Pv,
  sC = Ov,
  aC = Rv,
  lC = Av,
  uC = kv,
  oc = "DropdownMenu",
  [cC, sO] = Mu(oc, [cv]),
  _e = cv(),
  [dC, Mv] = cC(oc),
  Nv = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: i,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      l = _e(t),
      u = y.useRef(null),
      [d = !1, c] = Fu({ prop: o, defaultProp: i, onChange: s });
    return E.jsx(dC, {
      scope: t,
      triggerId: Rl(),
      triggerRef: u,
      contentId: Rl(),
      open: d,
      onOpenChange: c,
      onOpenToggle: y.useCallback(() => c((f) => !f), [c]),
      modal: a,
      children: E.jsx(QE, {
        ...l,
        open: d,
        onOpenChange: c,
        dir: r,
        modal: a,
        children: n,
      }),
    });
  };
Nv.displayName = oc;
var jv = "DropdownMenuTrigger",
  Iv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = Mv(jv, n),
      s = _e(n);
    return E.jsx(YE, {
      asChild: !0,
      ...s,
      children: E.jsx(ne.button, {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: us(t, i.triggerRef),
        onPointerDown: U(e.onPointerDown, (a) => {
          !r &&
            a.button === 0 &&
            a.ctrlKey === !1 &&
            (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: U(e.onKeyDown, (a) => {
          r ||
            (["Enter", " "].includes(a.key) && i.onOpenToggle(),
            a.key === "ArrowDown" && i.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        }),
      }),
    });
  });
Iv.displayName = jv;
var fC = "DropdownMenuPortal",
  Fv = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = _e(t);
    return E.jsx(XE, { ...r, ...n });
  };
Fv.displayName = fC;
var Lv = "DropdownMenuContent",
  Dv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Mv(Lv, n),
      i = _e(n),
      s = y.useRef(!1);
    return E.jsx(ZE, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...i,
      ...r,
      ref: t,
      onCloseAutoFocus: U(e.onCloseAutoFocus, (a) => {
        var l;
        s.current || (l = o.triggerRef.current) == null || l.focus(),
          (s.current = !1),
          a.preventDefault();
      }),
      onInteractOutside: U(e.onInteractOutside, (a) => {
        const l = a.detail.originalEvent,
          u = l.button === 0 && l.ctrlKey === !0,
          d = l.button === 2 || u;
        (!o.modal || d) && (s.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
Dv.displayName = Lv;
var pC = "DropdownMenuGroup",
  hC = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(JE, { ...o, ...r, ref: t });
  });
hC.displayName = pC;
var mC = "DropdownMenuLabel",
  Uv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(eC, { ...o, ...r, ref: t });
  });
Uv.displayName = mC;
var vC = "DropdownMenuItem",
  zv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(tC, { ...o, ...r, ref: t });
  });
zv.displayName = vC;
var gC = "DropdownMenuCheckboxItem",
  Vv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(nC, { ...o, ...r, ref: t });
  });
Vv.displayName = gC;
var yC = "DropdownMenuRadioGroup",
  wC = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(rC, { ...o, ...r, ref: t });
  });
wC.displayName = yC;
var xC = "DropdownMenuRadioItem",
  $v = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(oC, { ...o, ...r, ref: t });
  });
$v.displayName = xC;
var SC = "DropdownMenuItemIndicator",
  Bv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(iC, { ...o, ...r, ref: t });
  });
Bv.displayName = SC;
var EC = "DropdownMenuSeparator",
  Hv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(sC, { ...o, ...r, ref: t });
  });
Hv.displayName = EC;
var CC = "DropdownMenuArrow",
  PC = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(aC, { ...o, ...r, ref: t });
  });
PC.displayName = CC;
var OC = "DropdownMenuSubTrigger",
  Wv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(lC, { ...o, ...r, ref: t });
  });
Wv.displayName = OC;
var RC = "DropdownMenuSubContent",
  Kv = y.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _e(n);
    return E.jsx(uC, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
Kv.displayName = RC;
var TC = Nv,
  AC = Iv,
  _C = Fv,
  qv = Dv,
  Gv = Uv,
  Qv = zv,
  Yv = Vv,
  Xv = $v,
  Zv = Bv,
  Jv = Hv,
  eg = Wv,
  tg = Kv;
const kC = TC,
  bC = AC,
  MC = y.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    E.jsxs(eg, {
      ref: o,
      className: me(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t && "pl-8",
        e,
      ),
      ...r,
      children: [n, E.jsx(iw, { className: "ml-auto h-4 w-4" })],
    }),
  );
MC.displayName = eg.displayName;
const NC = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(tg, {
    ref: n,
    className: me(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e,
    ),
    ...t,
  }),
);
NC.displayName = tg.displayName;
const ng = y.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  E.jsx(_C, {
    children: E.jsx(qv, {
      ref: r,
      sideOffset: t,
      className: me(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  }),
);
ng.displayName = qv.displayName;
const pi = y.forwardRef(({ className: e, inset: t, ...n }, r) =>
  E.jsx(Qv, {
    ref: r,
    className: me(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e,
    ),
    ...n,
  }),
);
pi.displayName = Qv.displayName;
const jC = y.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  E.jsxs(Yv, {
    ref: o,
    className: me(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    checked: n,
    ...r,
    children: [
      E.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: E.jsx(Zv, { children: E.jsx(rw, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  }),
);
jC.displayName = Yv.displayName;
const IC = y.forwardRef(({ className: e, children: t, ...n }, r) =>
  E.jsxs(Xv, {
    ref: r,
    className: me(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      E.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: E.jsx(Zv, {
          children: E.jsx(uw, { className: "h-4 w-4 fill-current" }),
        }),
      }),
      t,
    ],
  }),
);
IC.displayName = Xv.displayName;
const FC = y.forwardRef(({ className: e, inset: t, ...n }, r) =>
  E.jsx(Gv, {
    ref: r,
    className: me("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n,
  }),
);
FC.displayName = Gv.displayName;
const LC = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(Jv, { ref: n, className: me("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
LC.displayName = Jv.displayName;
var ic = {},
  rg = {},
  sc = { exports: {} },
  og = function (t, n) {
    return function () {
      for (var o = new Array(arguments.length), i = 0; i < o.length; i++)
        o[i] = arguments[i];
      return t.apply(n, o);
    };
  },
  DC = og,
  dn = Object.prototype.toString;
function ac(e) {
  return Array.isArray(e);
}
function Nl(e) {
  return typeof e > "u";
}
function UC(e) {
  return (
    e !== null &&
    !Nl(e) &&
    e.constructor !== null &&
    !Nl(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function ig(e) {
  return dn.call(e) === "[object ArrayBuffer]";
}
function zC(e) {
  return dn.call(e) === "[object FormData]";
}
function VC(e) {
  var t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ig(e.buffer)),
    t
  );
}
function $C(e) {
  return typeof e == "string";
}
function BC(e) {
  return typeof e == "number";
}
function sg(e) {
  return e !== null && typeof e == "object";
}
function hi(e) {
  if (dn.call(e) !== "[object Object]") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function HC(e) {
  return dn.call(e) === "[object Date]";
}
function WC(e) {
  return dn.call(e) === "[object File]";
}
function KC(e) {
  return dn.call(e) === "[object Blob]";
}
function ag(e) {
  return dn.call(e) === "[object Function]";
}
function qC(e) {
  return sg(e) && ag(e.pipe);
}
function GC(e) {
  return dn.call(e) === "[object URLSearchParams]";
}
function QC(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function YC() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function lc(e, t) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e != "object" && (e = [e]), ac(e)))
      for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
}
function jl() {
  var e = {};
  function t(o, i) {
    hi(e[i]) && hi(o)
      ? (e[i] = jl(e[i], o))
      : hi(o)
        ? (e[i] = jl({}, o))
        : ac(o)
          ? (e[i] = o.slice())
          : (e[i] = o);
  }
  for (var n = 0, r = arguments.length; n < r; n++) lc(arguments[n], t);
  return e;
}
function XC(e, t, n) {
  return (
    lc(t, function (o, i) {
      n && typeof o == "function" ? (e[i] = DC(o, n)) : (e[i] = o);
    }),
    e
  );
}
function ZC(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var Fe = {
    isArray: ac,
    isArrayBuffer: ig,
    isBuffer: UC,
    isFormData: zC,
    isArrayBufferView: VC,
    isString: $C,
    isNumber: BC,
    isObject: sg,
    isPlainObject: hi,
    isUndefined: Nl,
    isDate: HC,
    isFile: WC,
    isBlob: KC,
    isFunction: ag,
    isStream: qC,
    isURLSearchParams: GC,
    isStandardBrowserEnv: YC,
    forEach: lc,
    merge: jl,
    extend: XC,
    trim: QC,
    stripBOM: ZC,
  },
  Nn = Fe;
function Jd(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var lg = function (t, n, r) {
    if (!n) return t;
    var o;
    if (r) o = r(n);
    else if (Nn.isURLSearchParams(n)) o = n.toString();
    else {
      var i = [];
      Nn.forEach(n, function (l, u) {
        l === null ||
          typeof l > "u" ||
          (Nn.isArray(l) ? (u = u + "[]") : (l = [l]),
          Nn.forEach(l, function (c) {
            Nn.isDate(c)
              ? (c = c.toISOString())
              : Nn.isObject(c) && (c = JSON.stringify(c)),
              i.push(Jd(u) + "=" + Jd(c));
          }));
      }),
        (o = i.join("&"));
    }
    if (o) {
      var s = t.indexOf("#");
      s !== -1 && (t = t.slice(0, s)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return t;
  },
  JC = Fe;
function ws() {
  this.handlers = [];
}
ws.prototype.use = function (t, n, r) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
ws.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
ws.prototype.forEach = function (t) {
  JC.forEach(this.handlers, function (r) {
    r !== null && t(r);
  });
};
var eP = ws,
  tP = Fe,
  nP = function (t, n) {
    tP.forEach(t, function (o, i) {
      i !== n &&
        i.toUpperCase() === n.toUpperCase() &&
        ((t[n] = o), delete t[i]);
    });
  },
  ug = function (t, n, r, o, i) {
    return (
      (t.config = n),
      r && (t.code = r),
      (t.request = o),
      (t.response = i),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      }),
      t
    );
  },
  cg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ca,
  ef;
function dg() {
  if (ef) return ca;
  ef = 1;
  var e = ug;
  return (
    (ca = function (n, r, o, i, s) {
      var a = new Error(n);
      return e(a, r, o, i, s);
    }),
    ca
  );
}
var da, tf;
function rP() {
  if (tf) return da;
  tf = 1;
  var e = dg();
  return (
    (da = function (n, r, o) {
      var i = o.config.validateStatus;
      !o.status || !i || i(o.status)
        ? n(o)
        : r(
            e(
              "Request failed with status code " + o.status,
              o.config,
              null,
              o.request,
              o,
            ),
          );
    }),
    da
  );
}
var fa, nf;
function oP() {
  if (nf) return fa;
  nf = 1;
  var e = Fe;
  return (
    (fa = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (r, o, i, s, a, l) {
              var u = [];
              u.push(r + "=" + encodeURIComponent(o)),
                e.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()),
                e.isString(s) && u.push("path=" + s),
                e.isString(a) && u.push("domain=" + a),
                l === !0 && u.push("secure"),
                (document.cookie = u.join("; "));
            },
            read: function (r) {
              var o = document.cookie.match(
                new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"),
              );
              return o ? decodeURIComponent(o[3]) : null;
            },
            remove: function (r) {
              this.write(r, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    fa
  );
}
var pa, rf;
function iP() {
  return (
    rf ||
      ((rf = 1),
      (pa = function (t) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
      })),
    pa
  );
}
var ha, of;
function sP() {
  return (
    of ||
      ((of = 1),
      (ha = function (t, n) {
        return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
      })),
    ha
  );
}
var ma, sf;
function aP() {
  if (sf) return ma;
  sf = 1;
  var e = iP(),
    t = sP();
  return (
    (ma = function (r, o) {
      return r && !e(o) ? t(r, o) : o;
    }),
    ma
  );
}
var va, af;
function lP() {
  if (af) return va;
  af = 1;
  var e = Fe,
    t = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  return (
    (va = function (r) {
      var o = {},
        i,
        s,
        a;
      return (
        r &&
          e.forEach(
            r.split(`
`),
            function (u) {
              if (
                ((a = u.indexOf(":")),
                (i = e.trim(u.substr(0, a)).toLowerCase()),
                (s = e.trim(u.substr(a + 1))),
                i)
              ) {
                if (o[i] && t.indexOf(i) >= 0) return;
                i === "set-cookie"
                  ? (o[i] = (o[i] ? o[i] : []).concat([s]))
                  : (o[i] = o[i] ? o[i] + ", " + s : s);
              }
            },
          ),
        o
      );
    }),
    va
  );
}
var ga, lf;
function uP() {
  if (lf) return ga;
  lf = 1;
  var e = Fe;
  return (
    (ga = e.isStandardBrowserEnv()
      ? (function () {
          var n = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a"),
            o;
          function i(s) {
            var a = s;
            return (
              n && (r.setAttribute("href", a), (a = r.href)),
              r.setAttribute("href", a),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (o = i(window.location.href)),
            function (a) {
              var l = e.isString(a) ? i(a) : a;
              return l.protocol === o.protocol && l.host === o.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    ga
  );
}
var ya, uf;
function xs() {
  if (uf) return ya;
  uf = 1;
  function e(t) {
    this.message = t;
  }
  return (
    (e.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
    (e.prototype.__CANCEL__ = !0),
    (ya = e),
    ya
  );
}
var wa, cf;
function df() {
  if (cf) return wa;
  cf = 1;
  var e = Fe,
    t = rP(),
    n = oP(),
    r = lg,
    o = aP(),
    i = lP(),
    s = uP(),
    a = dg(),
    l = cg,
    u = xs();
  return (
    (wa = function (c) {
      return new Promise(function (p, g) {
        var h = c.data,
          x = c.headers,
          m = c.responseType,
          v;
        function w() {
          c.cancelToken && c.cancelToken.unsubscribe(v),
            c.signal && c.signal.removeEventListener("abort", v);
        }
        e.isFormData(h) && delete x["Content-Type"];
        var S = new XMLHttpRequest();
        if (c.auth) {
          var C = c.auth.username || "",
            O = c.auth.password
              ? unescape(encodeURIComponent(c.auth.password))
              : "";
          x.Authorization = "Basic " + btoa(C + ":" + O);
        }
        var P = o(c.baseURL, c.url);
        S.open(c.method.toUpperCase(), r(P, c.params, c.paramsSerializer), !0),
          (S.timeout = c.timeout);
        function A() {
          if (S) {
            var k =
                "getAllResponseHeaders" in S
                  ? i(S.getAllResponseHeaders())
                  : null,
              F =
                !m || m === "text" || m === "json"
                  ? S.responseText
                  : S.response,
              M = {
                data: F,
                status: S.status,
                statusText: S.statusText,
                headers: k,
                config: c,
                request: S,
              };
            t(
              function (b) {
                p(b), w();
              },
              function (b) {
                g(b), w();
              },
              M,
            ),
              (S = null);
          }
        }
        if (
          ("onloadend" in S
            ? (S.onloadend = A)
            : (S.onreadystatechange = function () {
                !S ||
                  S.readyState !== 4 ||
                  (S.status === 0 &&
                    !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(A);
              }),
          (S.onabort = function () {
            S && (g(a("Request aborted", c, "ECONNABORTED", S)), (S = null));
          }),
          (S.onerror = function () {
            g(a("Network Error", c, null, S)), (S = null);
          }),
          (S.ontimeout = function () {
            var F = c.timeout
                ? "timeout of " + c.timeout + "ms exceeded"
                : "timeout exceeded",
              M = c.transitional || l;
            c.timeoutErrorMessage && (F = c.timeoutErrorMessage),
              g(
                a(
                  F,
                  c,
                  M.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                  S,
                ),
              ),
              (S = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var I =
            (c.withCredentials || s(P)) && c.xsrfCookieName
              ? n.read(c.xsrfCookieName)
              : void 0;
          I && (x[c.xsrfHeaderName] = I);
        }
        "setRequestHeader" in S &&
          e.forEach(x, function (F, M) {
            typeof h > "u" && M.toLowerCase() === "content-type"
              ? delete x[M]
              : S.setRequestHeader(M, F);
          }),
          e.isUndefined(c.withCredentials) ||
            (S.withCredentials = !!c.withCredentials),
          m && m !== "json" && (S.responseType = c.responseType),
          typeof c.onDownloadProgress == "function" &&
            S.addEventListener("progress", c.onDownloadProgress),
          typeof c.onUploadProgress == "function" &&
            S.upload &&
            S.upload.addEventListener("progress", c.onUploadProgress),
          (c.cancelToken || c.signal) &&
            ((v = function (k) {
              S &&
                (g(!k || (k && k.type) ? new u("canceled") : k),
                S.abort(),
                (S = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(v),
            c.signal &&
              (c.signal.aborted ? v() : c.signal.addEventListener("abort", v))),
          h || (h = null),
          S.send(h);
      });
    }),
    wa
  );
}
var fe = Fe,
  ff = nP,
  cP = ug,
  dP = cg,
  fP = { "Content-Type": "application/x-www-form-urlencoded" };
function pf(e, t) {
  !fe.isUndefined(e) &&
    fe.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function pP() {
  var e;
  return (
    (typeof XMLHttpRequest < "u" ||
      (typeof process < "u" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = df()),
    e
  );
}
function hP(e, t, n) {
  if (fe.isString(e))
    try {
      return (t || JSON.parse)(e), fe.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
var Ss = {
  transitional: dP,
  adapter: pP(),
  transformRequest: [
    function (t, n) {
      return (
        ff(n, "Accept"),
        ff(n, "Content-Type"),
        fe.isFormData(t) ||
        fe.isArrayBuffer(t) ||
        fe.isBuffer(t) ||
        fe.isStream(t) ||
        fe.isFile(t) ||
        fe.isBlob(t)
          ? t
          : fe.isArrayBufferView(t)
            ? t.buffer
            : fe.isURLSearchParams(t)
              ? (pf(n, "application/x-www-form-urlencoded;charset=utf-8"),
                t.toString())
              : fe.isObject(t) ||
                  (n && n["Content-Type"] === "application/json")
                ? (pf(n, "application/json"), hP(t))
                : t
      );
    },
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional || Ss.transitional,
        r = n && n.silentJSONParsing,
        o = n && n.forcedJSONParsing,
        i = !r && this.responseType === "json";
      if (i || (o && fe.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError" ? cP(s, this, "E_JSON_PARSE") : s;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
fe.forEach(["delete", "get", "head"], function (t) {
  Ss.headers[t] = {};
});
fe.forEach(["post", "put", "patch"], function (t) {
  Ss.headers[t] = fe.merge(fP);
});
var uc = Ss,
  mP = Fe,
  vP = uc,
  gP = function (t, n, r) {
    var o = this || vP;
    return (
      mP.forEach(r, function (s) {
        t = s.call(o, t, n);
      }),
      t
    );
  },
  xa,
  hf;
function fg() {
  return (
    hf ||
      ((hf = 1),
      (xa = function (t) {
        return !!(t && t.__CANCEL__);
      })),
    xa
  );
}
var mf = Fe,
  Sa = gP,
  yP = fg(),
  wP = uc,
  xP = xs();
function Ea(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new xP("canceled");
}
var SP = function (t) {
    Ea(t),
      (t.headers = t.headers || {}),
      (t.data = Sa.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = mf.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers,
      )),
      mf.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (o) {
          delete t.headers[o];
        },
      );
    var n = t.adapter || wP.adapter;
    return n(t).then(
      function (o) {
        return (
          Ea(t),
          (o.data = Sa.call(t, o.data, o.headers, t.transformResponse)),
          o
        );
      },
      function (o) {
        return (
          yP(o) ||
            (Ea(t),
            o &&
              o.response &&
              (o.response.data = Sa.call(
                t,
                o.response.data,
                o.response.headers,
                t.transformResponse,
              ))),
          Promise.reject(o)
        );
      },
    );
  },
  Le = Fe,
  pg = function (t, n) {
    n = n || {};
    var r = {};
    function o(d, c) {
      return Le.isPlainObject(d) && Le.isPlainObject(c)
        ? Le.merge(d, c)
        : Le.isPlainObject(c)
          ? Le.merge({}, c)
          : Le.isArray(c)
            ? c.slice()
            : c;
    }
    function i(d) {
      if (Le.isUndefined(n[d])) {
        if (!Le.isUndefined(t[d])) return o(void 0, t[d]);
      } else return o(t[d], n[d]);
    }
    function s(d) {
      if (!Le.isUndefined(n[d])) return o(void 0, n[d]);
    }
    function a(d) {
      if (Le.isUndefined(n[d])) {
        if (!Le.isUndefined(t[d])) return o(void 0, t[d]);
      } else return o(void 0, n[d]);
    }
    function l(d) {
      if (d in n) return o(t[d], n[d]);
      if (d in t) return o(void 0, t[d]);
    }
    var u = {
      url: s,
      method: s,
      data: s,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: l,
    };
    return (
      Le.forEach(Object.keys(t).concat(Object.keys(n)), function (c) {
        var f = u[c] || i,
          p = f(c);
        (Le.isUndefined(p) && f !== l) || (r[c] = p);
      }),
      r
    );
  },
  Ca,
  vf;
function hg() {
  return vf || ((vf = 1), (Ca = { version: "0.26.1" })), Ca;
}
var EP = hg().version,
  cc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    cc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
var gf = {};
cc.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      EP +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return function (i, s, a) {
    if (t === !1)
      throw new Error(o(s, " has been removed" + (n ? " in " + n : "")));
    return (
      n &&
        !gf[s] &&
        ((gf[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function CP(e, t, n) {
  if (typeof e != "object") throw new TypeError("options must be an object");
  for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
    var i = r[o],
      s = t[i];
    if (s) {
      var a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0) throw new TypeError("option " + i + " must be " + l);
      continue;
    }
    if (n !== !0) throw Error("Unknown option " + i);
  }
}
var PP = { assertOptions: CP, validators: cc },
  mg = Fe,
  OP = lg,
  yf = eP,
  wf = SP,
  Es = pg,
  vg = PP,
  jn = vg.validators;
function Co(e) {
  (this.defaults = e),
    (this.interceptors = { request: new yf(), response: new yf() });
}
Co.prototype.request = function (t, n) {
  typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
    (n = Es(this.defaults, n)),
    n.method
      ? (n.method = n.method.toLowerCase())
      : this.defaults.method
        ? (n.method = this.defaults.method.toLowerCase())
        : (n.method = "get");
  var r = n.transitional;
  r !== void 0 &&
    vg.assertOptions(
      r,
      {
        silentJSONParsing: jn.transitional(jn.boolean),
        forcedJSONParsing: jn.transitional(jn.boolean),
        clarifyTimeoutError: jn.transitional(jn.boolean),
      },
      !1,
    );
  var o = [],
    i = !0;
  this.interceptors.request.forEach(function (p) {
    (typeof p.runWhen == "function" && p.runWhen(n) === !1) ||
      ((i = i && p.synchronous), o.unshift(p.fulfilled, p.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function (p) {
    s.push(p.fulfilled, p.rejected);
  });
  var a;
  if (!i) {
    var l = [wf, void 0];
    for (
      Array.prototype.unshift.apply(l, o),
        l = l.concat(s),
        a = Promise.resolve(n);
      l.length;

    )
      a = a.then(l.shift(), l.shift());
    return a;
  }
  for (var u = n; o.length; ) {
    var d = o.shift(),
      c = o.shift();
    try {
      u = d(u);
    } catch (f) {
      c(f);
      break;
    }
  }
  try {
    a = wf(u);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; s.length; ) a = a.then(s.shift(), s.shift());
  return a;
};
Co.prototype.getUri = function (t) {
  return (
    (t = Es(this.defaults, t)),
    OP(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
  );
};
mg.forEach(["delete", "get", "head", "options"], function (t) {
  Co.prototype[t] = function (n, r) {
    return this.request(
      Es(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
mg.forEach(["post", "put", "patch"], function (t) {
  Co.prototype[t] = function (n, r, o) {
    return this.request(Es(o || {}, { method: t, url: n, data: r }));
  };
});
var RP = Co,
  Pa,
  xf;
function TP() {
  if (xf) return Pa;
  xf = 1;
  var e = xs();
  function t(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function (s) {
      r = s;
    });
    var o = this;
    this.promise.then(function (i) {
      if (o._listeners) {
        var s,
          a = o._listeners.length;
        for (s = 0; s < a; s++) o._listeners[s](i);
        o._listeners = null;
      }
    }),
      (this.promise.then = function (i) {
        var s,
          a = new Promise(function (l) {
            o.subscribe(l), (s = l);
          }).then(i);
        return (
          (a.cancel = function () {
            o.unsubscribe(s);
          }),
          a
        );
      }),
      n(function (s) {
        o.reason || ((o.reason = new e(s)), r(o.reason));
      });
  }
  return (
    (t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (t.prototype.subscribe = function (r) {
      if (this.reason) {
        r(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
    }),
    (t.prototype.unsubscribe = function (r) {
      if (this._listeners) {
        var o = this._listeners.indexOf(r);
        o !== -1 && this._listeners.splice(o, 1);
      }
    }),
    (t.source = function () {
      var r,
        o = new t(function (s) {
          r = s;
        });
      return { token: o, cancel: r };
    }),
    (Pa = t),
    Pa
  );
}
var Oa, Sf;
function AP() {
  return (
    Sf ||
      ((Sf = 1),
      (Oa = function (t) {
        return function (r) {
          return t.apply(null, r);
        };
      })),
    Oa
  );
}
var Ra, Ef;
function _P() {
  if (Ef) return Ra;
  Ef = 1;
  var e = Fe;
  return (
    (Ra = function (n) {
      return e.isObject(n) && n.isAxiosError === !0;
    }),
    Ra
  );
}
var Cf = Fe,
  kP = og,
  mi = RP,
  bP = pg,
  MP = uc;
function gg(e) {
  var t = new mi(e),
    n = kP(mi.prototype.request, t);
  return (
    Cf.extend(n, mi.prototype, t),
    Cf.extend(n, t),
    (n.create = function (o) {
      return gg(bP(e, o));
    }),
    n
  );
}
var xt = gg(MP);
xt.Axios = mi;
xt.Cancel = xs();
xt.CancelToken = TP();
xt.isCancel = fg();
xt.VERSION = hg().version;
xt.all = function (t) {
  return Promise.all(t);
};
xt.spread = AP();
xt.isAxiosError = _P();
sc.exports = xt;
sc.exports.default = xt;
var NP = sc.exports,
  yg = NP,
  re = {},
  dc = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.RequiredError = e.BaseAPI = e.COLLECTION_FORMATS = e.BASE_PATH = void 0);
  const t = yg;
  (e.BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "")),
    (e.COLLECTION_FORMATS = { csv: ",", ssv: " ", tsv: "	", pipes: "|" });
  class n {
    constructor(i, s = e.BASE_PATH, a = t.default) {
      (this.basePath = s),
        (this.axios = a),
        i &&
          ((this.configuration = i),
          (this.basePath = i.basePath || this.basePath));
    }
  }
  e.BaseAPI = n;
  class r extends Error {
    constructor(i, s) {
      super(s), (this.field = i), (this.name = "RequiredError");
    }
  }
  e.RequiredError = r;
})(dc);
var fc =
  (Ht && Ht.__awaiter) ||
  function (e, t, n, r) {
    function o(i) {
      return i instanceof n
        ? i
        : new n(function (s) {
            s(i);
          });
    }
    return new (n || (n = Promise))(function (i, s) {
      function a(d) {
        try {
          u(r.next(d));
        } catch (c) {
          s(c);
        }
      }
      function l(d) {
        try {
          u(r.throw(d));
        } catch (c) {
          s(c);
        }
      }
      function u(d) {
        d.done ? i(d.value) : o(d.value).then(a, l);
      }
      u((r = r.apply(e, t || [])).next());
    });
  };
Object.defineProperty(re, "__esModule", { value: !0 });
re.createRequestFunction =
  re.toPathString =
  re.serializeDataIfNeeded =
  re.setSearchParams =
  re.setOAuthToObject =
  re.setBearerAuthToObject =
  re.setBasicAuthToObject =
  re.setApiKeyToObject =
  re.assertParamExists =
  re.DUMMY_BASE_URL =
    void 0;
const jP = dc;
re.DUMMY_BASE_URL = "https://example.com";
re.assertParamExists = function (e, t, n) {
  if (n == null)
    throw new jP.RequiredError(
      t,
      `Required parameter ${t} was null or undefined when calling ${e}.`,
    );
};
re.setApiKeyToObject = function (e, t, n) {
  return fc(this, void 0, void 0, function* () {
    if (n && n.apiKey) {
      const r =
        typeof n.apiKey == "function" ? yield n.apiKey(t) : yield n.apiKey;
      e[t] = r;
    }
  });
};
re.setBasicAuthToObject = function (e, t) {
  t &&
    (t.username || t.password) &&
    (e.auth = { username: t.username, password: t.password });
};
re.setBearerAuthToObject = function (e, t) {
  return fc(this, void 0, void 0, function* () {
    if (t && t.accessToken) {
      const n =
        typeof t.accessToken == "function"
          ? yield t.accessToken()
          : yield t.accessToken;
      e.Authorization = "Bearer " + n;
    }
  });
};
re.setOAuthToObject = function (e, t, n, r) {
  return fc(this, void 0, void 0, function* () {
    if (r && r.accessToken) {
      const o =
        typeof r.accessToken == "function"
          ? yield r.accessToken(t, n)
          : yield r.accessToken;
      e.Authorization = "Bearer " + o;
    }
  });
};
function Il(e, t, n = "") {
  t != null &&
    (typeof t == "object"
      ? Array.isArray(t)
        ? t.forEach((r) => Il(e, r, n))
        : Object.keys(t).forEach((r) =>
            Il(e, t[r], `${n}${n !== "" ? "." : ""}${r}`),
          )
      : e.has(n)
        ? e.append(n, t)
        : e.set(n, t));
}
re.setSearchParams = function (e, ...t) {
  const n = new URLSearchParams(e.search);
  Il(n, t), (e.search = n.toString());
};
re.serializeDataIfNeeded = function (e, t, n) {
  const r = typeof e != "string";
  return (r && n && n.isJsonMime ? n.isJsonMime(t.headers["Content-Type"]) : r)
    ? JSON.stringify(e !== void 0 ? e : {})
    : e || "";
};
re.toPathString = function (e) {
  return e.pathname + e.search + e.hash;
};
re.createRequestFunction = function (e, t, n, r) {
  return (o = t, i = n) => {
    const s = Object.assign(Object.assign({}, e.options), {
      url: ((r == null ? void 0 : r.basePath) || i) + e.url,
    });
    return o.request(s);
  };
};
(function (e) {
  var t =
    (Ht && Ht.__awaiter) ||
    function (s, a, l, u) {
      function d(c) {
        return c instanceof l
          ? c
          : new l(function (f) {
              f(c);
            });
      }
      return new (l || (l = Promise))(function (c, f) {
        function p(x) {
          try {
            h(u.next(x));
          } catch (m) {
            f(m);
          }
        }
        function g(x) {
          try {
            h(u.throw(x));
          } catch (m) {
            f(m);
          }
        }
        function h(x) {
          x.done ? c(x.value) : d(x.value).then(p, g);
        }
        h((u = u.apply(s, a || [])).next());
      });
    };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.OpenAIApi =
      e.OpenAIApiFactory =
      e.OpenAIApiFp =
      e.OpenAIApiAxiosParamCreator =
      e.CreateImageRequestResponseFormatEnum =
      e.CreateImageRequestSizeEnum =
      e.ChatCompletionResponseMessageRoleEnum =
      e.ChatCompletionRequestMessageRoleEnum =
        void 0);
  const n = yg,
    r = re,
    o = dc;
  (e.ChatCompletionRequestMessageRoleEnum = {
    System: "system",
    User: "user",
    Assistant: "assistant",
    Function: "function",
  }),
    (e.ChatCompletionResponseMessageRoleEnum = {
      System: "system",
      User: "user",
      Assistant: "assistant",
      Function: "function",
    }),
    (e.CreateImageRequestSizeEnum = {
      _256x256: "256x256",
      _512x512: "512x512",
      _1024x1024: "1024x1024",
    }),
    (e.CreateImageRequestResponseFormatEnum = {
      Url: "url",
      B64Json: "b64_json",
    }),
    (e.OpenAIApiAxiosParamCreator = function (s) {
      return {
        cancelFineTune: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("cancelFineTune", "fineTuneId", a);
            const u = "/fine-tunes/{fine_tune_id}/cancel".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a)),
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              { url: r.toPathString(d), options: f }
            );
          }),
        createAnswer: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createAnswer", "createAnswerRequest", a);
            const u = "/answers",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createChatCompletion: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists(
              "createChatCompletion",
              "createChatCompletionRequest",
              a,
            );
            const u = "/chat/completions",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createClassification: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists(
              "createClassification",
              "createClassificationRequest",
              a,
            );
            const u = "/classifications",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createCompletion: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists(
              "createCompletion",
              "createCompletionRequest",
              a,
            );
            const u = "/completions",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createEdit: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createEdit", "createEditRequest", a);
            const u = "/edits",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createEmbedding: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createEmbedding", "createEmbeddingRequest", a);
            const u = "/embeddings",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createFile: (a, l, u = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createFile", "file", a),
              r.assertParamExists("createFile", "purpose", l);
            const d = "/files",
              c = new URL(d, r.DUMMY_BASE_URL);
            let f;
            s && (f = s.baseOptions);
            const p = Object.assign(Object.assign({ method: "POST" }, f), u),
              g = {},
              h = {},
              x = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && x.append("file", a),
              l !== void 0 && x.append("purpose", l),
              (g["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(c, h);
            let m = f && f.headers ? f.headers : {};
            return (
              (p.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, g), x.getHeaders()),
                  m,
                ),
                u.headers,
              )),
              (p.data = x),
              { url: r.toPathString(c), options: p }
            );
          }),
        createFineTune: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createFineTune", "createFineTuneRequest", a);
            const u = "/fine-tunes",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createImage: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createImage", "createImageRequest", a);
            const u = "/images/generations",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createImageEdit: (a, l, u, d, c, f, p, g = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createImageEdit", "image", a),
              r.assertParamExists("createImageEdit", "prompt", l);
            const h = "/images/edits",
              x = new URL(h, r.DUMMY_BASE_URL);
            let m;
            s && (m = s.baseOptions);
            const v = Object.assign(Object.assign({ method: "POST" }, m), g),
              w = {},
              S = {},
              C = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && C.append("image", a),
              u !== void 0 && C.append("mask", u),
              l !== void 0 && C.append("prompt", l),
              d !== void 0 && C.append("n", d),
              c !== void 0 && C.append("size", c),
              f !== void 0 && C.append("response_format", f),
              p !== void 0 && C.append("user", p),
              (w["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(x, S);
            let O = m && m.headers ? m.headers : {};
            return (
              (v.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, w), C.getHeaders()),
                  O,
                ),
                g.headers,
              )),
              (v.data = C),
              { url: r.toPathString(x), options: v }
            );
          }),
        createImageVariation: (a, l, u, d, c, f = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createImageVariation", "image", a);
            const p = "/images/variations",
              g = new URL(p, r.DUMMY_BASE_URL);
            let h;
            s && (h = s.baseOptions);
            const x = Object.assign(Object.assign({ method: "POST" }, h), f),
              m = {},
              v = {},
              w = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && w.append("image", a),
              l !== void 0 && w.append("n", l),
              u !== void 0 && w.append("size", u),
              d !== void 0 && w.append("response_format", d),
              c !== void 0 && w.append("user", c),
              (m["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(g, v);
            let S = h && h.headers ? h.headers : {};
            return (
              (x.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, m), w.getHeaders()),
                  S,
                ),
                f.headers,
              )),
              (x.data = w),
              { url: r.toPathString(g), options: x }
            );
          }),
        createModeration: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists(
              "createModeration",
              "createModerationRequest",
              a,
            );
            const u = "/moderations",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, c), l),
              p = {},
              g = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              (f.data = r.serializeDataIfNeeded(a, f, s)),
              { url: r.toPathString(d), options: f }
            );
          }),
        createSearch: (a, l, u = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createSearch", "engineId", a),
              r.assertParamExists("createSearch", "createSearchRequest", l);
            const d = "/engines/{engine_id}/search".replace(
                "{engine_id}",
                encodeURIComponent(String(a)),
              ),
              c = new URL(d, r.DUMMY_BASE_URL);
            let f;
            s && (f = s.baseOptions);
            const p = Object.assign(Object.assign({ method: "POST" }, f), u),
              g = {},
              h = {};
            (g["Content-Type"] = "application/json"), r.setSearchParams(c, h);
            let x = f && f.headers ? f.headers : {};
            return (
              (p.headers = Object.assign(
                Object.assign(Object.assign({}, g), x),
                u.headers,
              )),
              (p.data = r.serializeDataIfNeeded(l, p, s)),
              { url: r.toPathString(c), options: p }
            );
          }),
        createTranscription: (a, l, u, d, c, f, p = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createTranscription", "file", a),
              r.assertParamExists("createTranscription", "model", l);
            const g = "/audio/transcriptions",
              h = new URL(g, r.DUMMY_BASE_URL);
            let x;
            s && (x = s.baseOptions);
            const m = Object.assign(Object.assign({ method: "POST" }, x), p),
              v = {},
              w = {},
              S = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && S.append("file", a),
              l !== void 0 && S.append("model", l),
              u !== void 0 && S.append("prompt", u),
              d !== void 0 && S.append("response_format", d),
              c !== void 0 && S.append("temperature", c),
              f !== void 0 && S.append("language", f),
              (v["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(h, w);
            let C = x && x.headers ? x.headers : {};
            return (
              (m.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, v), S.getHeaders()),
                  C,
                ),
                p.headers,
              )),
              (m.data = S),
              { url: r.toPathString(h), options: m }
            );
          }),
        createTranslation: (a, l, u, d, c, f = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("createTranslation", "file", a),
              r.assertParamExists("createTranslation", "model", l);
            const p = "/audio/translations",
              g = new URL(p, r.DUMMY_BASE_URL);
            let h;
            s && (h = s.baseOptions);
            const x = Object.assign(Object.assign({ method: "POST" }, h), f),
              m = {},
              v = {},
              w = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && w.append("file", a),
              l !== void 0 && w.append("model", l),
              u !== void 0 && w.append("prompt", u),
              d !== void 0 && w.append("response_format", d),
              c !== void 0 && w.append("temperature", c),
              (m["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(g, v);
            let S = h && h.headers ? h.headers : {};
            return (
              (x.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, m), w.getHeaders()),
                  S,
                ),
                f.headers,
              )),
              (x.data = w),
              { url: r.toPathString(g), options: x }
            );
          }),
        deleteFile: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("deleteFile", "fileId", a);
            const u = "/files/{file_id}".replace(
                "{file_id}",
                encodeURIComponent(String(a)),
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "DELETE" }, c), l),
              p = {},
              g = {};
            r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              { url: r.toPathString(d), options: f }
            );
          }),
        deleteModel: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("deleteModel", "model", a);
            const u = "/models/{model}".replace(
                "{model}",
                encodeURIComponent(String(a)),
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "DELETE" }, c), l),
              p = {},
              g = {};
            r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              { url: r.toPathString(d), options: f }
            );
          }),
        downloadFile: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("downloadFile", "fileId", a);
            const u = "/files/{file_id}/content".replace(
                "{file_id}",
                encodeURIComponent(String(a)),
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, c), l),
              p = {},
              g = {};
            r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              { url: r.toPathString(d), options: f }
            );
          }),
        listEngines: (a = {}) =>
          t(this, void 0, void 0, function* () {
            const l = "/engines",
              u = new URL(l, r.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const c = Object.assign(Object.assign({ method: "GET" }, d), a),
              f = {},
              p = {};
            r.setSearchParams(u, p);
            let g = d && d.headers ? d.headers : {};
            return (
              (c.headers = Object.assign(
                Object.assign(Object.assign({}, f), g),
                a.headers,
              )),
              { url: r.toPathString(u), options: c }
            );
          }),
        listFiles: (a = {}) =>
          t(this, void 0, void 0, function* () {
            const l = "/files",
              u = new URL(l, r.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const c = Object.assign(Object.assign({ method: "GET" }, d), a),
              f = {},
              p = {};
            r.setSearchParams(u, p);
            let g = d && d.headers ? d.headers : {};
            return (
              (c.headers = Object.assign(
                Object.assign(Object.assign({}, f), g),
                a.headers,
              )),
              { url: r.toPathString(u), options: c }
            );
          }),
        listFineTuneEvents: (a, l, u = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("listFineTuneEvents", "fineTuneId", a);
            const d = "/fine-tunes/{fine_tune_id}/events".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a)),
              ),
              c = new URL(d, r.DUMMY_BASE_URL);
            let f;
            s && (f = s.baseOptions);
            const p = Object.assign(Object.assign({ method: "GET" }, f), u),
              g = {},
              h = {};
            l !== void 0 && (h.stream = l), r.setSearchParams(c, h);
            let x = f && f.headers ? f.headers : {};
            return (
              (p.headers = Object.assign(
                Object.assign(Object.assign({}, g), x),
                u.headers,
              )),
              { url: r.toPathString(c), options: p }
            );
          }),
        listFineTunes: (a = {}) =>
          t(this, void 0, void 0, function* () {
            const l = "/fine-tunes",
              u = new URL(l, r.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const c = Object.assign(Object.assign({ method: "GET" }, d), a),
              f = {},
              p = {};
            r.setSearchParams(u, p);
            let g = d && d.headers ? d.headers : {};
            return (
              (c.headers = Object.assign(
                Object.assign(Object.assign({}, f), g),
                a.headers,
              )),
              { url: r.toPathString(u), options: c }
            );
          }),
        listModels: (a = {}) =>
          t(this, void 0, void 0, function* () {
            const l = "/models",
              u = new URL(l, r.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const c = Object.assign(Object.assign({ method: "GET" }, d), a),
              f = {},
              p = {};
            r.setSearchParams(u, p);
            let g = d && d.headers ? d.headers : {};
            return (
              (c.headers = Object.assign(
                Object.assign(Object.assign({}, f), g),
                a.headers,
              )),
              { url: r.toPathString(u), options: c }
            );
          }),
        retrieveEngine: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("retrieveEngine", "engineId", a);
            const u = "/engines/{engine_id}".replace(
                "{engine_id}",
                encodeURIComponent(String(a)),
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, c), l),
              p = {},
              g = {};
            r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              { url: r.toPathString(d), options: f }
            );
          }),
        retrieveFile: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("retrieveFile", "fileId", a);
            const u = "/files/{file_id}".replace(
                "{file_id}",
                encodeURIComponent(String(a)),
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, c), l),
              p = {},
              g = {};
            r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              { url: r.toPathString(d), options: f }
            );
          }),
        retrieveFineTune: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("retrieveFineTune", "fineTuneId", a);
            const u = "/fine-tunes/{fine_tune_id}".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a)),
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, c), l),
              p = {},
              g = {};
            r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              { url: r.toPathString(d), options: f }
            );
          }),
        retrieveModel: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            r.assertParamExists("retrieveModel", "model", a);
            const u = "/models/{model}".replace(
                "{model}",
                encodeURIComponent(String(a)),
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            s && (c = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, c), l),
              p = {},
              g = {};
            r.setSearchParams(d, g);
            let h = c && c.headers ? c.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), h),
                l.headers,
              )),
              { url: r.toPathString(d), options: f }
            );
          }),
      };
    }),
    (e.OpenAIApiFp = function (s) {
      const a = e.OpenAIApiAxiosParamCreator(s);
      return {
        cancelFineTune(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.cancelFineTune(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createAnswer(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createAnswer(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createChatCompletion(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createChatCompletion(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createClassification(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createClassification(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createCompletion(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createCompletion(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createEdit(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createEdit(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createEmbedding(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createEmbedding(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createFile(l, u, d) {
          return t(this, void 0, void 0, function* () {
            const c = yield a.createFile(l, u, d);
            return r.createRequestFunction(c, n.default, o.BASE_PATH, s);
          });
        },
        createFineTune(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createFineTune(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createImage(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createImage(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createImageEdit(l, u, d, c, f, p, g, h) {
          return t(this, void 0, void 0, function* () {
            const x = yield a.createImageEdit(l, u, d, c, f, p, g, h);
            return r.createRequestFunction(x, n.default, o.BASE_PATH, s);
          });
        },
        createImageVariation(l, u, d, c, f, p) {
          return t(this, void 0, void 0, function* () {
            const g = yield a.createImageVariation(l, u, d, c, f, p);
            return r.createRequestFunction(g, n.default, o.BASE_PATH, s);
          });
        },
        createModeration(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createModeration(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        createSearch(l, u, d) {
          return t(this, void 0, void 0, function* () {
            const c = yield a.createSearch(l, u, d);
            return r.createRequestFunction(c, n.default, o.BASE_PATH, s);
          });
        },
        createTranscription(l, u, d, c, f, p, g) {
          return t(this, void 0, void 0, function* () {
            const h = yield a.createTranscription(l, u, d, c, f, p, g);
            return r.createRequestFunction(h, n.default, o.BASE_PATH, s);
          });
        },
        createTranslation(l, u, d, c, f, p) {
          return t(this, void 0, void 0, function* () {
            const g = yield a.createTranslation(l, u, d, c, f, p);
            return r.createRequestFunction(g, n.default, o.BASE_PATH, s);
          });
        },
        deleteFile(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.deleteFile(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        deleteModel(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.deleteModel(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        downloadFile(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.downloadFile(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        listEngines(l) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.listEngines(l);
            return r.createRequestFunction(u, n.default, o.BASE_PATH, s);
          });
        },
        listFiles(l) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.listFiles(l);
            return r.createRequestFunction(u, n.default, o.BASE_PATH, s);
          });
        },
        listFineTuneEvents(l, u, d) {
          return t(this, void 0, void 0, function* () {
            const c = yield a.listFineTuneEvents(l, u, d);
            return r.createRequestFunction(c, n.default, o.BASE_PATH, s);
          });
        },
        listFineTunes(l) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.listFineTunes(l);
            return r.createRequestFunction(u, n.default, o.BASE_PATH, s);
          });
        },
        listModels(l) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.listModels(l);
            return r.createRequestFunction(u, n.default, o.BASE_PATH, s);
          });
        },
        retrieveEngine(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.retrieveEngine(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        retrieveFile(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.retrieveFile(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        retrieveFineTune(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.retrieveFineTune(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
        retrieveModel(l, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.retrieveModel(l, u);
            return r.createRequestFunction(d, n.default, o.BASE_PATH, s);
          });
        },
      };
    }),
    (e.OpenAIApiFactory = function (s, a, l) {
      const u = e.OpenAIApiFp(s);
      return {
        cancelFineTune(d, c) {
          return u.cancelFineTune(d, c).then((f) => f(l, a));
        },
        createAnswer(d, c) {
          return u.createAnswer(d, c).then((f) => f(l, a));
        },
        createChatCompletion(d, c) {
          return u.createChatCompletion(d, c).then((f) => f(l, a));
        },
        createClassification(d, c) {
          return u.createClassification(d, c).then((f) => f(l, a));
        },
        createCompletion(d, c) {
          return u.createCompletion(d, c).then((f) => f(l, a));
        },
        createEdit(d, c) {
          return u.createEdit(d, c).then((f) => f(l, a));
        },
        createEmbedding(d, c) {
          return u.createEmbedding(d, c).then((f) => f(l, a));
        },
        createFile(d, c, f) {
          return u.createFile(d, c, f).then((p) => p(l, a));
        },
        createFineTune(d, c) {
          return u.createFineTune(d, c).then((f) => f(l, a));
        },
        createImage(d, c) {
          return u.createImage(d, c).then((f) => f(l, a));
        },
        createImageEdit(d, c, f, p, g, h, x, m) {
          return u.createImageEdit(d, c, f, p, g, h, x, m).then((v) => v(l, a));
        },
        createImageVariation(d, c, f, p, g, h) {
          return u.createImageVariation(d, c, f, p, g, h).then((x) => x(l, a));
        },
        createModeration(d, c) {
          return u.createModeration(d, c).then((f) => f(l, a));
        },
        createSearch(d, c, f) {
          return u.createSearch(d, c, f).then((p) => p(l, a));
        },
        createTranscription(d, c, f, p, g, h, x) {
          return u
            .createTranscription(d, c, f, p, g, h, x)
            .then((m) => m(l, a));
        },
        createTranslation(d, c, f, p, g, h) {
          return u.createTranslation(d, c, f, p, g, h).then((x) => x(l, a));
        },
        deleteFile(d, c) {
          return u.deleteFile(d, c).then((f) => f(l, a));
        },
        deleteModel(d, c) {
          return u.deleteModel(d, c).then((f) => f(l, a));
        },
        downloadFile(d, c) {
          return u.downloadFile(d, c).then((f) => f(l, a));
        },
        listEngines(d) {
          return u.listEngines(d).then((c) => c(l, a));
        },
        listFiles(d) {
          return u.listFiles(d).then((c) => c(l, a));
        },
        listFineTuneEvents(d, c, f) {
          return u.listFineTuneEvents(d, c, f).then((p) => p(l, a));
        },
        listFineTunes(d) {
          return u.listFineTunes(d).then((c) => c(l, a));
        },
        listModels(d) {
          return u.listModels(d).then((c) => c(l, a));
        },
        retrieveEngine(d, c) {
          return u.retrieveEngine(d, c).then((f) => f(l, a));
        },
        retrieveFile(d, c) {
          return u.retrieveFile(d, c).then((f) => f(l, a));
        },
        retrieveFineTune(d, c) {
          return u.retrieveFineTune(d, c).then((f) => f(l, a));
        },
        retrieveModel(d, c) {
          return u.retrieveModel(d, c).then((f) => f(l, a));
        },
      };
    });
  class i extends o.BaseAPI {
    cancelFineTune(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .cancelFineTune(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createAnswer(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createAnswer(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createChatCompletion(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createChatCompletion(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createClassification(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createClassification(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createCompletion(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createCompletion(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createEdit(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createEdit(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createEmbedding(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createEmbedding(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createFile(a, l, u) {
      return e
        .OpenAIApiFp(this.configuration)
        .createFile(a, l, u)
        .then((d) => d(this.axios, this.basePath));
    }
    createFineTune(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createFineTune(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createImage(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createImage(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createImageEdit(a, l, u, d, c, f, p, g) {
      return e
        .OpenAIApiFp(this.configuration)
        .createImageEdit(a, l, u, d, c, f, p, g)
        .then((h) => h(this.axios, this.basePath));
    }
    createImageVariation(a, l, u, d, c, f) {
      return e
        .OpenAIApiFp(this.configuration)
        .createImageVariation(a, l, u, d, c, f)
        .then((p) => p(this.axios, this.basePath));
    }
    createModeration(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createModeration(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createSearch(a, l, u) {
      return e
        .OpenAIApiFp(this.configuration)
        .createSearch(a, l, u)
        .then((d) => d(this.axios, this.basePath));
    }
    createTranscription(a, l, u, d, c, f, p) {
      return e
        .OpenAIApiFp(this.configuration)
        .createTranscription(a, l, u, d, c, f, p)
        .then((g) => g(this.axios, this.basePath));
    }
    createTranslation(a, l, u, d, c, f) {
      return e
        .OpenAIApiFp(this.configuration)
        .createTranslation(a, l, u, d, c, f)
        .then((p) => p(this.axios, this.basePath));
    }
    deleteFile(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .deleteFile(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    deleteModel(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .deleteModel(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    downloadFile(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .downloadFile(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    listEngines(a) {
      return e
        .OpenAIApiFp(this.configuration)
        .listEngines(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listFiles(a) {
      return e
        .OpenAIApiFp(this.configuration)
        .listFiles(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listFineTuneEvents(a, l, u) {
      return e
        .OpenAIApiFp(this.configuration)
        .listFineTuneEvents(a, l, u)
        .then((d) => d(this.axios, this.basePath));
    }
    listFineTunes(a) {
      return e
        .OpenAIApiFp(this.configuration)
        .listFineTunes(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listModels(a) {
      return e
        .OpenAIApiFp(this.configuration)
        .listModels(a)
        .then((l) => l(this.axios, this.basePath));
    }
    retrieveEngine(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .retrieveEngine(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    retrieveFile(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .retrieveFile(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    retrieveFineTune(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .retrieveFineTune(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    retrieveModel(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .retrieveModel(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
  }
  e.OpenAIApi = i;
})(rg);
var Cs = {};
const IP = "openai",
  FP = "3.3.0",
  LP = "Node.js library for the OpenAI API",
  DP = { type: "git", url: "git@github.com:openai/openai-node.git" },
  UP = ["openai", "open", "ai", "gpt-3", "gpt3"],
  zP = "OpenAI",
  VP = "MIT",
  $P = "./dist/index.js",
  BP = "./dist/index.d.ts",
  HP = { build: "tsc --outDir dist/" },
  WP = { axios: "^0.26.0", "form-data": "^4.0.0" },
  KP = { "@types/node": "^12.11.5", typescript: "^3.6.4" },
  qP = {
    name: IP,
    version: FP,
    description: LP,
    repository: DP,
    keywords: UP,
    author: zP,
    license: VP,
    main: $P,
    types: BP,
    scripts: HP,
    dependencies: WP,
    devDependencies: KP,
  };
var Ta, Pf;
function GP() {
  return (
    Pf ||
      ((Pf = 1),
      (Ta = typeof self == "object" ? self.FormData : window.FormData)),
    Ta
  );
}
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.Configuration = void 0;
const QP = qP;
class YP {
  constructor(t = {}) {
    (this.apiKey = t.apiKey),
      (this.organization = t.organization),
      (this.username = t.username),
      (this.password = t.password),
      (this.accessToken = t.accessToken),
      (this.basePath = t.basePath),
      (this.baseOptions = t.baseOptions),
      (this.formDataCtor = t.formDataCtor),
      this.baseOptions || (this.baseOptions = {}),
      (this.baseOptions.headers = Object.assign(
        {
          "User-Agent": `OpenAI/NodeJS/${QP.version}`,
          Authorization: `Bearer ${this.apiKey}`,
        },
        this.baseOptions.headers,
      )),
      this.organization &&
        (this.baseOptions.headers["OpenAI-Organization"] = this.organization),
      this.formDataCtor || (this.formDataCtor = GP());
  }
  isJsonMime(t) {
    const n = new RegExp(
      "^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$",
      "i",
    );
    return (
      t !== null &&
      (n.test(t) || t.toLowerCase() === "application/json-patch+json")
    );
  }
}
Cs.Configuration = YP;
(function (e) {
  var t =
      (Ht && Ht.__createBinding) ||
      (Object.create
        ? function (r, o, i, s) {
            s === void 0 && (s = i),
              Object.defineProperty(r, s, {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              });
          }
        : function (r, o, i, s) {
            s === void 0 && (s = i), (r[s] = o[i]);
          }),
    n =
      (Ht && Ht.__exportStar) ||
      function (r, o) {
        for (var i in r) i !== "default" && !o.hasOwnProperty(i) && t(o, r, i);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(rg, e), n(Cs, e);
})(ic);
const XP = new ic.Configuration({
    apiKey: "sk-proj-eaFkE9RZXKC9aIqRHXoxT3BlbkFJ5iRlrZ6Kge6rDQbSMUrW",
  }),
  ZP = new ic.OpenAIApi(XP);
async function JP(e, t) {
  var n, r;
  try {
    const o = t
      ? `Based on the following context:

${t}

Generate a continuation or related content.`
      : "Write a professional article about:";
    return (
      ((r =
        (n = (
          await ZP.createChatCompletion({
            model: "gpt-4o",
            messages: [{ role: "user", content: t ? o : `${o} ${e}` }],
            temperature: 0.7,
            max_tokens: 1e3,
          })
        ).data.choices[0]) == null
          ? void 0
          : n.message) == null
        ? void 0
        : r.content) || ""
    );
  } catch (o) {
    throw (
      (console.error("Error generating content:", o),
      new Error("Failed to generate content"))
    );
  }
}
function eO({ onContentGenerated: e, currentContent: t }) {
  const { toast: n } = ku(),
    [r, o] = y.useState(!1),
    i = async (s) => {
      if (!t && s !== "continue") {
        n({
          title: "No content",
          description: "Please enter some text first",
          duration: 2e3,
        });
        return;
      }
      o(!0);
      try {
        let a = "";
        switch (s) {
          case "continue":
            a = t || "Write a professional article";
            break;
          case "improve":
            a = `Improve the following text while maintaining its meaning:

${t}`;
            break;
          case "summarize":
            a = `Summarize the following text:

${t}`;
            break;
        }
        const l = await JP(a, s === "continue" ? t : void 0),
          u =
            s === "continue" && t
              ? `${t}

${l}`
              : l;
        e(u),
          n({
            title: "Success",
            description: "Content generated successfully",
            duration: 2e3,
          });
      } catch {
        n({
          title: "Error",
          description: "Failed to generate content. Please check your API key.",
          duration: 3e3,
          variant: "destructive",
        });
      } finally {
        o(!1);
      }
    };
  return E.jsxs(kC, {
    children: [
      E.jsx(bC, {
        asChild: !0,
        children: E.jsxs(nt, {
          variant: "secondary",
          className: "flex items-center gap-2",
          disabled: r,
          children: [
            E.jsx(K1, { className: "w-4 h-4" }),
            r ? "Processing..." : "AI Assistant",
          ],
        }),
      }),
      E.jsxs(ng, {
        children: [
          E.jsx(pi, {
            onClick: () => i("continue"),
            disabled: r,
            children: "Continue Writing",
          }),
          E.jsx(pi, {
            onClick: () => i("improve"),
            disabled: r || !t,
            children: "Improve Writing",
          }),
          E.jsx(pi, {
            onClick: () => i("summarize"),
            disabled: r || !t,
            children: "Summarize",
          }),
        ],
      }),
    ],
  });
}
function tO({
  onAIGenerate: e,
  currentContent: t,
  canUndo: n,
  canRedo: r,
  onUndo: o,
  onRedo: i,
}) {
  return E.jsx("div", {
    className: "border-b bg-card/50 shrink-0",
    children: E.jsx("div", {
      className: "px-4 py-2",
      children: E.jsxs("div", {
        className: "flex items-center gap-4",
        children: [
          E.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              E.jsx(nt, {
                variant: "ghost",
                size: "icon",
                onClick: o,
                disabled: !n,
                children: E.jsx(G1, { className: "w-4 h-4" }),
              }),
              E.jsx(nt, {
                variant: "ghost",
                size: "icon",
                onClick: i,
                disabled: !r,
                children: E.jsx(H1, { className: "w-4 h-4" }),
              }),
            ],
          }),
          E.jsx(eO, { onContentGenerated: e, currentContent: t }),
        ],
      }),
    }),
  });
}
function nO(e, t) {
  switch (t.type) {
    case "WRITE":
      return { past: [...e.past, e.present], present: t.content, future: [] };
    case "UNDO": {
      if (e.past.length === 0) return e;
      const n = e.past[e.past.length - 1];
      return {
        past: e.past.slice(0, -1),
        present: n,
        future: [e.present, ...e.future],
      };
    }
    case "REDO": {
      if (e.future.length === 0) return e;
      const n = e.future[0],
        r = e.future.slice(1);
      return { past: [...e.past, e.present], present: n, future: r };
    }
    default:
      return e;
  }
}
function rO() {
  const [e, t] = y.useReducer(nO, { past: [], present: "", future: [] }),
    n = (i) => {
      t({ type: "WRITE", content: i });
    },
    r = () => {
      t({ type: "UNDO" });
    },
    o = () => {
      t({ type: "REDO" });
    };
  return E.jsxs(E.Fragment, {
    children: [
      E.jsxs("div", {
        className: "flex flex-col h-screen bg-background",
        children: [
          E.jsx(Q1, {}),
          E.jsx(tO, {
            onAIGenerate: n,
            currentContent: e.present,
            canUndo: e.past.length > 0,
            canRedo: e.future.length > 0,
            onUndo: r,
            onRedo: o,
          }),
          E.jsx("main", {
            className: "flex-1 p-4",
            children: E.jsx("div", {
              className: "h-full bg-card rounded-lg shadow-sm border",
              children: E.jsx(Sm, {
                value: e.present,
                onChange: (i) => n(i.target.value),
                placeholder:
                  "Start typing or use AI assistant to generate content...",
                className:
                  "h-full w-full resize-none border-0 rounded-lg focus-visible:ring-0 text-lg",
              }),
            }),
          }),
        ],
      }),
      E.jsx(xm, {}),
    ],
  });
}
Dh(document.getElementById("root")).render(
  E.jsxs(y.StrictMode, { children: [E.jsx(rO, {}), E.jsx(xm, {})] }),
);
