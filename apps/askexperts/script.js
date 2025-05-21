var ep = Object.defineProperty;
var tp = (e, t, n) =>
  t in e
    ? ep(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Za = (e, t, n) => tp(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
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
function np(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ac = { exports: {} },
  Ci = {},
  Ic = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = Symbol.for("react.element"),
  rp = Symbol.for("react.portal"),
  sp = Symbol.for("react.fragment"),
  ip = Symbol.for("react.strict_mode"),
  lp = Symbol.for("react.profiler"),
  op = Symbol.for("react.provider"),
  ap = Symbol.for("react.context"),
  up = Symbol.for("react.forward_ref"),
  cp = Symbol.for("react.suspense"),
  fp = Symbol.for("react.memo"),
  dp = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function hp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Oc = Object.assign,
  Mc = {};
function Yn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mc),
    (this.updater = n || Tc);
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lc() {}
Lc.prototype = Yn.prototype;
function Fo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mc),
    (this.updater = n || Tc);
}
var $o = (Fo.prototype = new Lc());
$o.constructor = Fo;
Oc($o, Yn.prototype);
$o.isPureReactComponent = !0;
var tu = Array.isArray,
  jc = Object.prototype.hasOwnProperty,
  Do = { current: null },
  Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function $c(e, t, n) {
  var r,
    s = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      jc.call(t, r) && !Fc.hasOwnProperty(r) && (s[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) s.children = n;
  else if (1 < o) {
    for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
    s.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) s[r] === void 0 && (s[r] = o[r]);
  return {
    $$typeof: Yr,
    type: e,
    key: i,
    ref: l,
    props: s,
    _owner: Do.current,
  };
}
function pp(e, t) {
  return {
    $$typeof: Yr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function zo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yr;
}
function mp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Xi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? mp("" + e.key)
    : t.toString(36);
}
function Os(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yr:
          case rp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (s = s(l)),
      (e = r === "" ? "." + Xi(l, 0) : r),
      tu(s)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Os(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (zo(s) &&
            (s = pp(
              s,
              n +
                (!s.key || (l && l.key === s.key)
                  ? ""
                  : ("" + s.key).replace(nu, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var a = r + Xi(i, o);
      l += Os(i, t, n, a, s);
    }
  else if (((a = hp(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Xi(i, o++)), (l += Os(i, t, n, a, s));
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
  return l;
}
function cs(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Os(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function gp(e) {
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
var xe = { current: null },
  Ms = { transition: null },
  yp = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ms,
    ReactCurrentOwner: Do,
  };
function Dc() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: cs,
  forEach: function (e, t, n) {
    cs(
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
      cs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      cs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!zo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
j.Component = Yn;
j.Fragment = sp;
j.Profiler = lp;
j.PureComponent = Fo;
j.StrictMode = ip;
j.Suspense = cp;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
j.act = Dc;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Oc({}, e.props),
    s = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Do.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      jc.call(t, a) &&
        !Fc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Yr, type: e.type, key: s, ref: i, props: r, _owner: l };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: ap,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: op, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = $c;
j.createFactory = function (e) {
  var t = $c.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: up, render: e };
};
j.isValidElement = zo;
j.lazy = function (e) {
  return { $$typeof: dp, _payload: { _status: -1, _result: e }, _init: gp };
};
j.memo = function (e, t) {
  return { $$typeof: fp, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Ms.transition;
  Ms.transition = {};
  try {
    e();
  } finally {
    Ms.transition = t;
  }
};
j.unstable_act = Dc;
j.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
j.useContext = function (e) {
  return xe.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
j.useId = function () {
  return xe.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return xe.current.useRef(e);
};
j.useState = function (e) {
  return xe.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return xe.current.useTransition();
};
j.version = "18.3.1";
Ic.exports = j;
var G = Ic.exports;
const Ki = np(G);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp = G,
  wp = Symbol.for("react.element"),
  _p = Symbol.for("react.fragment"),
  xp = Object.prototype.hasOwnProperty,
  Sp = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var r,
    s = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) xp.call(t, r) && !kp.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: wp,
    type: e,
    key: i,
    ref: l,
    props: s,
    _owner: Sp.current,
  };
}
Ci.Fragment = _p;
Ci.jsx = zc;
Ci.jsxs = zc;
Ac.exports = Ci;
var _ = Ac.exports,
  Uc = { exports: {} },
  Fe = {},
  Bc = { exports: {} },
  Wc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, O) {
    var L = R.length;
    R.push(O);
    e: for (; 0 < L; ) {
      var q = (L - 1) >>> 1,
        ie = R[q];
      if (0 < s(ie, O)) (R[q] = O), (R[L] = ie), (L = q);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var O = R[0],
      L = R.pop();
    if (L !== O) {
      R[0] = L;
      e: for (var q = 0, ie = R.length, as = ie >>> 1; q < as; ) {
        var Xt = 2 * (q + 1) - 1,
          Qi = R[Xt],
          Kt = Xt + 1,
          us = R[Kt];
        if (0 > s(Qi, L))
          Kt < ie && 0 > s(us, Qi)
            ? ((R[q] = us), (R[Kt] = L), (q = Kt))
            : ((R[q] = Qi), (R[Xt] = L), (q = Xt));
        else if (Kt < ie && 0 > s(us, L)) (R[q] = us), (R[Kt] = L), (q = Kt);
        else break e;
      }
    }
    return O;
  }
  function s(R, O) {
    var L = R.sortIndex - O.sortIndex;
    return L !== 0 ? L : R.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      o = l.now();
    e.unstable_now = function () {
      return l.now() - o;
    };
  }
  var a = [],
    u = [],
    m = 1,
    p = null,
    h = 3,
    y = !1,
    w = !1,
    v = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(R) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= R)
        r(u), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(u);
    }
  }
  function g(R) {
    if (((v = !1), f(R), !w))
      if (n(a) !== null) (w = !0), Hi(k);
      else {
        var O = n(u);
        O !== null && bi(g, O.startTime - R);
      }
  }
  function k(R, O) {
    (w = !1), v && ((v = !1), d(P), (P = -1)), (y = !0);
    var L = h;
    try {
      for (
        f(O), p = n(a);
        p !== null && (!(p.expirationTime > O) || (R && !M()));

      ) {
        var q = p.callback;
        if (typeof q == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var ie = q(p.expirationTime <= O);
          (O = e.unstable_now()),
            typeof ie == "function" ? (p.callback = ie) : p === n(a) && r(a),
            f(O);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var as = !0;
      else {
        var Xt = n(u);
        Xt !== null && bi(g, Xt.startTime - O), (as = !1);
      }
      return as;
    } finally {
      (p = null), (h = L), (y = !1);
    }
  }
  var C = !1,
    x = null,
    P = -1,
    T = 5,
    A = -1;
  function M() {
    return !(e.unstable_now() - A < T);
  }
  function ze() {
    if (x !== null) {
      var R = e.unstable_now();
      A = R;
      var O = !0;
      try {
        O = x(!0, R);
      } finally {
        O ? ht() : ((C = !1), (x = null));
      }
    } else C = !1;
  }
  var ht;
  if (typeof c == "function")
    ht = function () {
      c(ze);
    };
  else if (typeof MessageChannel < "u") {
    var ls = new MessageChannel(),
      os = ls.port2;
    (ls.port1.onmessage = ze),
      (ht = function () {
        os.postMessage(null);
      });
  } else
    ht = function () {
      E(ze, 0);
    };
  function Hi(R) {
    (x = R), C || ((C = !0), ht());
  }
  function bi(R, O) {
    P = E(function () {
      R(e.unstable_now());
    }, O);
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
      w || y || ((w = !0), Hi(k));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (T = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var L = h;
      h = O;
      try {
        return R();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, O) {
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
      var L = h;
      h = R;
      try {
        return O();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (R, O, L) {
      var q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? q + L : q))
          : (L = q),
        R)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = L + ie),
        (R = {
          id: m++,
          callback: O,
          priorityLevel: R,
          startTime: L,
          expirationTime: ie,
          sortIndex: -1,
        }),
        L > q
          ? ((R.sortIndex = L),
            t(u, R),
            n(a) === null &&
              R === n(u) &&
              (v ? (d(P), (P = -1)) : (v = !0), bi(g, L - q)))
          : ((R.sortIndex = ie), t(a, R), w || y || ((w = !0), Hi(k))),
        R
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (R) {
      var O = h;
      return function () {
        var L = h;
        h = O;
        try {
          return R.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(Wc);
Bc.exports = Wc;
var Cp = Bc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ep = G,
  je = Cp;
function S(e) {
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
var Vc = new Set(),
  Tr = {};
function fn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) Vc.add(t[e]);
}
var xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Il = Object.prototype.hasOwnProperty,
  Pp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  su = {};
function Np(e) {
  return Il.call(su, e)
    ? !0
    : Il.call(ru, e)
      ? !1
      : Pp.test(e)
        ? (su[e] = !0)
        : ((ru[e] = !0), !1);
}
function Rp(e, t, n, r) {
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
function Ap(e, t, n, r) {
  if (t === null || typeof t > "u" || Rp(e, t, n, r)) return !0;
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
function Se(e, t, n, r, s, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uo = /[\-:]([a-z])/g;
function Bo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uo, Bo);
    de[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uo, Bo);
    de[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Uo, Bo);
  de[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wo(e, t, n, r) {
  var s = de.hasOwnProperty(t) ? de[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ap(t, n, s, r) && (n = null),
    r || s === null
      ? Np(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Et = Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fs = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  _n = Symbol.for("react.fragment"),
  Vo = Symbol.for("react.strict_mode"),
  Tl = Symbol.for("react.profiler"),
  Hc = Symbol.for("react.provider"),
  bc = Symbol.for("react.context"),
  Ho = Symbol.for("react.forward_ref"),
  Ol = Symbol.for("react.suspense"),
  Ml = Symbol.for("react.suspense_list"),
  bo = Symbol.for("react.memo"),
  Rt = Symbol.for("react.lazy"),
  Qc = Symbol.for("react.offscreen"),
  iu = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (iu && e[iu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  Ji;
function cr(e) {
  if (Ji === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ji = (t && t[1]) || "";
    }
  return (
    `
` +
    Ji +
    e
  );
}
var Yi = !1;
function qi(e, t) {
  if (!e || Yi) return "";
  Yi = !0;
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
          l = s.length - 1,
          o = i.length - 1;
        1 <= l && 0 <= o && s[l] !== i[o];

      )
        o--;
      for (; 1 <= l && 0 <= o; l--, o--)
        if (s[l] !== i[o]) {
          if (l !== 1 || o !== 1)
            do
              if ((l--, o--, 0 > o || s[l] !== i[o])) {
                var a =
                  `
` + s[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= o);
          break;
        }
    }
  } finally {
    (Yi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Ip(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = qi(e.type, !1)), e;
    case 11:
      return (e = qi(e.type.render, !1)), e;
    case 1:
      return (e = qi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ll(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _n:
      return "Fragment";
    case wn:
      return "Portal";
    case Tl:
      return "Profiler";
    case Vo:
      return "StrictMode";
    case Ol:
      return "Suspense";
    case Ml:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bc:
        return (e.displayName || "Context") + ".Consumer";
      case Hc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ho:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bo:
        return (
          (t = e.displayName || null), t !== null ? t : Ll(e.type) || "Memo"
        );
      case Rt:
        (t = e._payload), (e = e._init);
        try {
          return Ll(e(t));
        } catch {}
    }
  return null;
}
function Tp(e) {
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
      return Ll(t);
    case 8:
      return t === Vo ? "StrictMode" : "Mode";
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
function Wt(e) {
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
function Xc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Op(e) {
  var t = Xc(e) ? "checked" : "value",
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
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ds(e) {
  e._valueTracker || (e._valueTracker = Op(e));
}
function Kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Xc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ys(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function jl(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function lu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Jc(e, t) {
  (t = t.checked), t != null && Wo(e, "checked", t, !1);
}
function Fl(e, t) {
  Jc(e, t);
  var n = Wt(t.value),
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
    ? $l(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $l(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ou(e, t, n) {
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
function $l(e, t, n) {
  (t !== "number" || Ys(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function On(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function Yc(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var hs,
  Gc = (function (e) {
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
        hs = hs || document.createElement("div"),
          hs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _r = {
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
  Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function (e) {
  Mp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_r[t] = _r[e]);
  });
});
function Zc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_r.hasOwnProperty(e) && _r[e])
      ? ("" + t).trim()
      : t + "px";
}
function ef(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Zc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var Lp = J(
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
function Ul(e, t) {
  if (t) {
    if (Lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Bl(e, t) {
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
var Wl = null;
function Qo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Vl = null,
  Mn = null,
  Ln = null;
function cu(e) {
  if ((e = Zr(e))) {
    if (typeof Vl != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Ai(t)), Vl(e.stateNode, e.type, t));
  }
}
function tf(e) {
  Mn ? (Ln ? Ln.push(e) : (Ln = [e])) : (Mn = e);
}
function nf() {
  if (Mn) {
    var e = Mn,
      t = Ln;
    if (((Ln = Mn = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function rf(e, t) {
  return e(t);
}
function sf() {}
var Gi = !1;
function lf(e, t, n) {
  if (Gi) return e(t, n);
  Gi = !0;
  try {
    return rf(e, t, n);
  } finally {
    (Gi = !1), (Mn !== null || Ln !== null) && (sf(), nf());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ai(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Hl = !1;
if (xt)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        Hl = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    Hl = !1;
  }
function jp(e, t, n, r, s, i, l, o, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var xr = !1,
  qs = null,
  Gs = !1,
  bl = null,
  Fp = {
    onError: function (e) {
      (xr = !0), (qs = e);
    },
  };
function $p(e, t, n, r, s, i, l, o, a) {
  (xr = !1), (qs = null), jp.apply(Fp, arguments);
}
function Dp(e, t, n, r, s, i, l, o, a) {
  if (($p.apply(this, arguments), xr)) {
    if (xr) {
      var u = qs;
      (xr = !1), (qs = null);
    } else throw Error(S(198));
    Gs || ((Gs = !0), (bl = u));
  }
}
function dn(e) {
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
function of(e) {
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
function fu(e) {
  if (dn(e) !== e) throw Error(S(188));
}
function zp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dn(e)), t === null)) throw Error(S(188));
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
        if (i === n) return fu(s), e;
        if (i === r) return fu(s), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = s), (r = i);
    else {
      for (var l = !1, o = s.child; o; ) {
        if (o === n) {
          (l = !0), (n = s), (r = i);
          break;
        }
        if (o === r) {
          (l = !0), (r = s), (n = i);
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = i.child; o; ) {
          if (o === n) {
            (l = !0), (n = i), (r = s);
            break;
          }
          if (o === r) {
            (l = !0), (r = i), (n = s);
            break;
          }
          o = o.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function af(e) {
  return (e = zp(e)), e !== null ? uf(e) : null;
}
function uf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cf = je.unstable_scheduleCallback,
  du = je.unstable_cancelCallback,
  Up = je.unstable_shouldYield,
  Bp = je.unstable_requestPaint,
  Z = je.unstable_now,
  Wp = je.unstable_getCurrentPriorityLevel,
  Xo = je.unstable_ImmediatePriority,
  ff = je.unstable_UserBlockingPriority,
  Zs = je.unstable_NormalPriority,
  Vp = je.unstable_LowPriority,
  df = je.unstable_IdlePriority,
  Ei = null,
  ct = null;
function Hp(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : Xp,
  bp = Math.log,
  Qp = Math.LN2;
function Xp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bp(e) / Qp) | 0)) | 0;
}
var ps = 64,
  ms = 4194304;
function dr(e) {
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
function ei(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var o = l & ~s;
    o !== 0 ? (r = dr(o)) : ((i &= l), i !== 0 && (r = dr(i)));
  } else (l = n & ~s), l !== 0 ? (r = dr(l)) : i !== 0 && (r = dr(i));
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
      (n = 31 - et(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function Kp(e, t) {
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
function Jp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - et(i),
      o = 1 << l,
      a = s[l];
    a === -1
      ? (!(o & n) || o & r) && (s[l] = Kp(o, t))
      : a <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hf() {
  var e = ps;
  return (ps <<= 1), !(ps & 4194240) && (ps = 64), e;
}
function Zi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n);
}
function Yp(e, t) {
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
    var s = 31 - et(n),
      i = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function Ko(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var z = 0;
function pf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mf,
  Jo,
  gf,
  yf,
  vf,
  Xl = !1,
  gs = [],
  Lt = null,
  jt = null,
  Ft = null,
  Lr = new Map(),
  jr = new Map(),
  It = [],
  qp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function hu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lt = null;
      break;
    case "dragenter":
    case "dragleave":
      jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Lr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jr.delete(t.pointerId);
  }
}
function sr(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = Zr(t)), t !== null && Jo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Gp(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (Lt = sr(Lt, e, t, n, r, s)), !0;
    case "dragenter":
      return (jt = sr(jt, e, t, n, r, s)), !0;
    case "mouseover":
      return (Ft = sr(Ft, e, t, n, r, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return Lr.set(i, sr(Lr.get(i) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (i = s.pointerId), jr.set(i, sr(jr.get(i) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function wf(e) {
  var t = Gt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = of(n)), t !== null)) {
          (e.blockedOn = t),
            vf(e.priority, function () {
              gf(n);
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
function Ls(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Kl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wl = r), n.target.dispatchEvent(r), (Wl = null);
    } else return (t = Zr(n)), t !== null && Jo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pu(e, t, n) {
  Ls(e) && n.delete(t);
}
function Zp() {
  (Xl = !1),
    Lt !== null && Ls(Lt) && (Lt = null),
    jt !== null && Ls(jt) && (jt = null),
    Ft !== null && Ls(Ft) && (Ft = null),
    Lr.forEach(pu),
    jr.forEach(pu);
}
function ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xl ||
      ((Xl = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, Zp)));
}
function Fr(e) {
  function t(s) {
    return ir(s, e);
  }
  if (0 < gs.length) {
    ir(gs[0], e);
    for (var n = 1; n < gs.length; n++) {
      var r = gs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Lt !== null && ir(Lt, e),
      jt !== null && ir(jt, e),
      Ft !== null && ir(Ft, e),
      Lr.forEach(t),
      jr.forEach(t),
      n = 0;
    n < It.length;
    n++
  )
    (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
    wf(n), n.blockedOn === null && It.shift();
}
var jn = Et.ReactCurrentBatchConfig,
  ti = !0;
function em(e, t, n, r) {
  var s = z,
    i = jn.transition;
  jn.transition = null;
  try {
    (z = 1), Yo(e, t, n, r);
  } finally {
    (z = s), (jn.transition = i);
  }
}
function tm(e, t, n, r) {
  var s = z,
    i = jn.transition;
  jn.transition = null;
  try {
    (z = 4), Yo(e, t, n, r);
  } finally {
    (z = s), (jn.transition = i);
  }
}
function Yo(e, t, n, r) {
  if (ti) {
    var s = Kl(e, t, n, r);
    if (s === null) ul(e, t, r, ni, n), hu(e, r);
    else if (Gp(s, e, t, n, r)) r.stopPropagation();
    else if ((hu(e, r), t & 4 && -1 < qp.indexOf(e))) {
      for (; s !== null; ) {
        var i = Zr(s);
        if (
          (i !== null && mf(i),
          (i = Kl(e, t, n, r)),
          i === null && ul(e, t, r, ni, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else ul(e, t, r, null, n);
  }
}
var ni = null;
function Kl(e, t, n, r) {
  if (((ni = null), (e = Qo(r)), (e = Gt(e)), e !== null))
    if (((t = dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = of(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ni = e), null;
}
function _f(e) {
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
      switch (Wp()) {
        case Xo:
          return 1;
        case ff:
          return 4;
        case Zs:
        case Vp:
          return 16;
        case df:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null,
  qo = null,
  js = null;
function xf() {
  if (js) return js;
  var e,
    t = qo,
    n = t.length,
    r,
    s = "value" in Ot ? Ot.value : Ot.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === s[i - r]; r++);
  return (js = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Fs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ys() {
  return !0;
}
function mu() {
  return !1;
}
function $e(e) {
  function t(n, r, s, i, l) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ys
        : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ys));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ys));
      },
      persist: function () {},
      isPersistent: ys,
    }),
    t
  );
}
var qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Go = $e(qn),
  Gr = J({}, qn, { view: 0, detail: 0 }),
  nm = $e(Gr),
  el,
  tl,
  lr,
  Pi = J({}, Gr, {
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
    getModifierState: Zo,
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
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((el = e.screenX - lr.screenX), (tl = e.screenY - lr.screenY))
              : (tl = el = 0),
            (lr = e)),
          el);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : tl;
    },
  }),
  gu = $e(Pi),
  rm = J({}, Pi, { dataTransfer: 0 }),
  sm = $e(rm),
  im = J({}, Gr, { relatedTarget: 0 }),
  nl = $e(im),
  lm = J({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  om = $e(lm),
  am = J({}, qn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  um = $e(am),
  cm = J({}, qn, { data: 0 }),
  yu = $e(cm),
  fm = {
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
  dm = {
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
  hm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hm[e]) ? !!t[e] : !1;
}
function Zo() {
  return pm;
}
var mm = J({}, Gr, {
    key: function (e) {
      if (e.key) {
        var t = fm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? dm[e.keyCode] || "Unidentified"
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
    getModifierState: Zo,
    charCode: function (e) {
      return e.type === "keypress" ? Fs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fs(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  gm = $e(mm),
  ym = J({}, Pi, {
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
  vu = $e(ym),
  vm = J({}, Gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zo,
  }),
  wm = $e(vm),
  _m = J({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xm = $e(_m),
  Sm = J({}, Pi, {
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
  km = $e(Sm),
  Cm = [9, 13, 27, 32],
  ea = xt && "CompositionEvent" in window,
  Sr = null;
xt && "documentMode" in document && (Sr = document.documentMode);
var Em = xt && "TextEvent" in window && !Sr,
  Sf = xt && (!ea || (Sr && 8 < Sr && 11 >= Sr)),
  wu = " ",
  _u = !1;
function kf(e, t) {
  switch (e) {
    case "keyup":
      return Cm.indexOf(t.keyCode) !== -1;
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
function Cf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function Pm(e, t) {
  switch (e) {
    case "compositionend":
      return Cf(t);
    case "keypress":
      return t.which !== 32 ? null : ((_u = !0), wu);
    case "textInput":
      return (e = t.data), e === wu && _u ? null : e;
    default:
      return null;
  }
}
function Nm(e, t) {
  if (xn)
    return e === "compositionend" || (!ea && kf(e, t))
      ? ((e = xf()), (js = qo = Ot = null), (xn = !1), e)
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
      return Sf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rm = {
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
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rm[e.type] : t === "textarea";
}
function Ef(e, t, n, r) {
  tf(r),
    (t = ri(t, "onChange")),
    0 < t.length &&
      ((n = new Go("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var kr = null,
  $r = null;
function Am(e) {
  Ff(e, 0);
}
function Ni(e) {
  var t = Cn(e);
  if (Kc(t)) return e;
}
function Im(e, t) {
  if (e === "change") return t;
}
var Pf = !1;
if (xt) {
  var rl;
  if (xt) {
    var sl = "oninput" in document;
    if (!sl) {
      var Su = document.createElement("div");
      Su.setAttribute("oninput", "return;"),
        (sl = typeof Su.oninput == "function");
    }
    rl = sl;
  } else rl = !1;
  Pf = rl && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  kr && (kr.detachEvent("onpropertychange", Nf), ($r = kr = null));
}
function Nf(e) {
  if (e.propertyName === "value" && Ni($r)) {
    var t = [];
    Ef(t, $r, e, Qo(e)), lf(Am, t);
  }
}
function Tm(e, t, n) {
  e === "focusin"
    ? (ku(), (kr = t), ($r = n), kr.attachEvent("onpropertychange", Nf))
    : e === "focusout" && ku();
}
function Om(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ni($r);
}
function Mm(e, t) {
  if (e === "click") return Ni(t);
}
function Lm(e, t) {
  if (e === "input" || e === "change") return Ni(t);
}
function jm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == "function" ? Object.is : jm;
function Dr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Il.call(t, s) || !nt(e[s], t[s])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eu(e, t) {
  var n = Cu(e);
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
    n = Cu(n);
  }
}
function Rf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Rf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Af() {
  for (var e = window, t = Ys(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ys(e.document);
  }
  return t;
}
function ta(e) {
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
function Fm(e) {
  var t = Af(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ta(n)) {
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
          (s = Eu(n, i));
        var l = Eu(n, r);
        s &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var $m = xt && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  Jl = null,
  Cr = null,
  Yl = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yl ||
    Sn == null ||
    Sn !== Ys(r) ||
    ((r = Sn),
    "selectionStart" in r && ta(r)
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
    (Cr && Dr(Cr, r)) ||
      ((Cr = r),
      (r = ri(Jl, "onSelect")),
      0 < r.length &&
        ((t = new Go("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sn))));
}
function vs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: vs("Animation", "AnimationEnd"),
    animationiteration: vs("Animation", "AnimationIteration"),
    animationstart: vs("Animation", "AnimationStart"),
    transitionend: vs("Transition", "TransitionEnd"),
  },
  il = {},
  If = {};
xt &&
  ((If = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function Ri(e) {
  if (il[e]) return il[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in If) return (il[e] = t[n]);
  return e;
}
var Tf = Ri("animationend"),
  Of = Ri("animationiteration"),
  Mf = Ri("animationstart"),
  Lf = Ri("transitionend"),
  jf = new Map(),
  Nu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ht(e, t) {
  jf.set(e, t), fn(t, [e]);
}
for (var ll = 0; ll < Nu.length; ll++) {
  var ol = Nu[ll],
    Dm = ol.toLowerCase(),
    zm = ol[0].toUpperCase() + ol.slice(1);
  Ht(Dm, "on" + zm);
}
Ht(Tf, "onAnimationEnd");
Ht(Of, "onAnimationIteration");
Ht(Mf, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(Lf, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
fn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
fn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
fn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
fn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Um = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function Ru(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Dp(r, t, void 0, e), (e.currentTarget = null);
}
function Ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var o = r[l],
            a = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), a !== i && s.isPropagationStopped())) break e;
          Ru(s, o, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((o = r[l]),
            (a = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            a !== i && s.isPropagationStopped())
          )
            break e;
          Ru(s, o, u), (i = a);
        }
    }
  }
  if (Gs) throw ((e = bl), (Gs = !1), (bl = null), e);
}
function V(e, t) {
  var n = t[to];
  n === void 0 && (n = t[to] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($f(t, e, 2, !1), n.add(r));
}
function al(e, t, n) {
  var r = 0;
  t && (r |= 4), $f(n, e, r, t);
}
var ws = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
  if (!e[ws]) {
    (e[ws] = !0),
      Vc.forEach(function (n) {
        n !== "selectionchange" && (Um.has(n) || al(n, !1, e), al(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ws] || ((t[ws] = !0), al("selectionchange", !1, t));
  }
}
function $f(e, t, n, r) {
  switch (_f(t)) {
    case 1:
      var s = em;
      break;
    case 4:
      s = tm;
      break;
    default:
      s = Yo;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Hl ||
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
function ul(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var o = r.stateNode.containerInfo;
        if (o === s || (o.nodeType === 8 && o.parentNode === s)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === s || (a.nodeType === 8 && a.parentNode === s))
            )
              return;
            l = l.return;
          }
        for (; o !== null; ) {
          if (((l = Gt(o)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  lf(function () {
    var u = i,
      m = Qo(n),
      p = [];
    e: {
      var h = jf.get(e);
      if (h !== void 0) {
        var y = Go,
          w = e;
        switch (e) {
          case "keypress":
            if (Fs(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = gm;
            break;
          case "focusin":
            (w = "focus"), (y = nl);
            break;
          case "focusout":
            (w = "blur"), (y = nl);
            break;
          case "beforeblur":
          case "afterblur":
            y = nl;
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
            y = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = sm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = wm;
            break;
          case Tf:
          case Of:
          case Mf:
            y = om;
            break;
          case Lf:
            y = xm;
            break;
          case "scroll":
            y = nm;
            break;
          case "wheel":
            y = km;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = um;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = vu;
        }
        var v = (t & 4) !== 0,
          E = !v && e === "scroll",
          d = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              d !== null && ((g = Mr(c, d)), g != null && v.push(Ur(c, g, f)))),
            E)
          )
            break;
          c = c.return;
        }
        0 < v.length &&
          ((h = new y(h, w, null, n, m)), p.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Wl &&
            (w = n.relatedTarget || n.fromElement) &&
            (Gt(w) || w[St]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = u),
              (w = w ? Gt(w) : null),
              w !== null &&
                ((E = dn(w)), w !== E || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = u)),
          y !== w)
        ) {
          if (
            ((v = gu),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = vu),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (E = y == null ? h : Cn(y)),
            (f = w == null ? h : Cn(w)),
            (h = new v(g, c + "leave", y, n, m)),
            (h.target = E),
            (h.relatedTarget = f),
            (g = null),
            Gt(m) === u &&
              ((v = new v(d, c + "enter", w, n, m)),
              (v.target = f),
              (v.relatedTarget = E),
              (g = v)),
            (E = g),
            y && w)
          )
            t: {
              for (v = y, d = w, c = 0, f = v; f; f = pn(f)) c++;
              for (f = 0, g = d; g; g = pn(g)) f++;
              for (; 0 < c - f; ) (v = pn(v)), c--;
              for (; 0 < f - c; ) (d = pn(d)), f--;
              for (; c--; ) {
                if (v === d || (d !== null && v === d.alternate)) break t;
                (v = pn(v)), (d = pn(d));
              }
              v = null;
            }
          else v = null;
          y !== null && Au(p, h, y, v, !1),
            w !== null && E !== null && Au(p, E, w, v, !0);
        }
      }
      e: {
        if (
          ((h = u ? Cn(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var k = Im;
        else if (xu(h))
          if (Pf) k = Lm;
          else {
            k = Om;
            var C = Tm;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = Mm);
        if (k && (k = k(e, u))) {
          Ef(p, k, n, m);
          break e;
        }
        C && C(e, h, u),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            $l(h, "number", h.value);
      }
      switch (((C = u ? Cn(u) : window), e)) {
        case "focusin":
          (xu(C) || C.contentEditable === "true") &&
            ((Sn = C), (Jl = u), (Cr = null));
          break;
        case "focusout":
          Cr = Jl = Sn = null;
          break;
        case "mousedown":
          Yl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Yl = !1), Pu(p, n, m);
          break;
        case "selectionchange":
          if ($m) break;
        case "keydown":
        case "keyup":
          Pu(p, n, m);
      }
      var x;
      if (ea)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        xn
          ? kf(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Sf &&
          n.locale !== "ko" &&
          (xn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && xn && (x = xf())
            : ((Ot = m),
              (qo = "value" in Ot ? Ot.value : Ot.textContent),
              (xn = !0))),
        (C = ri(u, P)),
        0 < C.length &&
          ((P = new yu(P, e, null, n, m)),
          p.push({ event: P, listeners: C }),
          x ? (P.data = x) : ((x = Cf(n)), x !== null && (P.data = x)))),
        (x = Em ? Pm(e, n) : Nm(e, n)) &&
          ((u = ri(u, "onBeforeInput")),
          0 < u.length &&
            ((m = new yu("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: u }),
            (m.data = x)));
    }
    Ff(p, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ri(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Mr(e, n)),
      i != null && r.unshift(Ur(e, i, s)),
      (i = Mr(e, t)),
      i != null && r.push(Ur(e, i, s))),
      (e = e.return);
  }
  return r;
}
function pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Au(e, t, n, r, s) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      u = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      s
        ? ((a = Mr(n, i)), a != null && l.unshift(Ur(n, a, o)))
        : s || ((a = Mr(n, i)), a != null && l.push(Ur(n, a, o)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Bm = /\r\n?/g,
  Wm = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bm,
      `
`,
    )
    .replace(Wm, "");
}
function _s(e, t, n) {
  if (((t = Iu(t)), Iu(e) !== t && n)) throw Error(S(425));
}
function si() {}
var ql = null,
  Gl = null;
function Zl(e, t) {
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
var eo = typeof setTimeout == "function" ? setTimeout : void 0,
  Vm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Tu = typeof Promise == "function" ? Promise : void 0,
  Hm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Tu < "u"
        ? function (e) {
            return Tu.resolve(null).then(e).catch(bm);
          }
        : eo;
function bm(e) {
  setTimeout(function () {
    throw e;
  });
}
function cl(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Fr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Fr(t);
}
function $t(e) {
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
function Ou(e) {
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
var Gn = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + Gn,
  Br = "__reactProps$" + Gn,
  St = "__reactContainer$" + Gn,
  to = "__reactEvents$" + Gn,
  Qm = "__reactListeners$" + Gn,
  Xm = "__reactHandles$" + Gn;
function Gt(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = Ou(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zr(e) {
  return (
    (e = e[at] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Ai(e) {
  return e[Br] || null;
}
var no = [],
  En = -1;
function bt(e) {
  return { current: e };
}
function H(e) {
  0 > En || ((e.current = no[En]), (no[En] = null), En--);
}
function W(e, t) {
  En++, (no[En] = e.current), (e.current = t);
}
var Vt = {},
  ve = bt(Vt),
  Pe = bt(!1),
  sn = Vt;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
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
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function ii() {
  H(Pe), H(ve);
}
function Mu(e, t, n) {
  if (ve.current !== Vt) throw Error(S(168));
  W(ve, t), W(Pe, n);
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(S(108, Tp(e) || "Unknown", s));
  return J({}, n, r);
}
function li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (sn = ve.current),
    W(ve, e),
    W(Pe, Pe.current),
    !0
  );
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Df(e, t, sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Pe),
      H(ve),
      W(ve, e))
    : H(Pe),
    W(Pe, n);
}
var yt = null,
  Ii = !1,
  fl = !1;
function zf(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
function Km(e) {
  (Ii = !0), zf(e);
}
function Qt() {
  if (!fl && yt !== null) {
    fl = !0;
    var e = 0,
      t = z;
    try {
      var n = yt;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (yt = null), (Ii = !1);
    } catch (s) {
      throw (yt !== null && (yt = yt.slice(e + 1)), cf(Xo, Qt), s);
    } finally {
      (z = t), (fl = !1);
    }
  }
  return null;
}
var Pn = [],
  Nn = 0,
  oi = null,
  ai = 0,
  Ue = [],
  Be = 0,
  ln = null,
  vt = 1,
  wt = "";
function Jt(e, t) {
  (Pn[Nn++] = ai), (Pn[Nn++] = oi), (oi = e), (ai = t);
}
function Uf(e, t, n) {
  (Ue[Be++] = vt), (Ue[Be++] = wt), (Ue[Be++] = ln), (ln = e);
  var r = vt;
  e = wt;
  var s = 32 - et(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - et(t) + s;
  if (30 < i) {
    var l = s - (s % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (s -= l),
      (vt = (1 << (32 - et(t) + s)) | (n << s) | r),
      (wt = i + e);
  } else (vt = (1 << i) | (n << s) | r), (wt = e);
}
function na(e) {
  e.return !== null && (Jt(e, 1), Uf(e, 1, 0));
}
function ra(e) {
  for (; e === oi; )
    (oi = Pn[--Nn]), (Pn[Nn] = null), (ai = Pn[--Nn]), (Pn[Nn] = null);
  for (; e === ln; )
    (ln = Ue[--Be]),
      (Ue[Be] = null),
      (wt = Ue[--Be]),
      (Ue[Be] = null),
      (vt = Ue[--Be]),
      (Ue[Be] = null);
}
var Le = null,
  Me = null,
  b = !1,
  qe = null;
function Bf(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (Me = $t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ln !== null ? { id: vt, overflow: wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function so(e) {
  if (b) {
    var t = Me;
    if (t) {
      var n = t;
      if (!ju(e, t)) {
        if (ro(e)) throw Error(S(418));
        t = $t(n.nextSibling);
        var r = Le;
        t && ju(e, t)
          ? Bf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (Le = e));
      }
    } else {
      if (ro(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (b = !1), (Le = e);
    }
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function xs(e) {
  if (e !== Le) return !1;
  if (!b) return Fu(e), (b = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (ro(e)) throw (Wf(), Error(S(418)));
    for (; t; ) Bf(e, t), (t = $t(t.nextSibling));
  }
  if ((Fu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = $t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Le ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function Wf() {
  for (var e = Me; e; ) e = $t(e.nextSibling);
}
function Hn() {
  (Me = Le = null), (b = !1);
}
function sa(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var Jm = Et.ReactCurrentBatchConfig;
function or(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var o = s.refs;
            l === null ? delete o[i] : (o[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Ss(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function $u(e) {
  var t = e._init;
  return t(e._payload);
}
function Vf(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function s(d, c) {
    return (d = Bt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function o(d, c, f, g) {
    return c === null || c.tag !== 6
      ? ((c = vl(f, d.mode, g)), (c.return = d), c)
      : ((c = s(c, f)), (c.return = d), c);
  }
  function a(d, c, f, g) {
    var k = f.type;
    return k === _n
      ? m(d, c, f.props.children, g, f.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === Rt &&
              $u(k) === c.type))
        ? ((g = s(c, f.props)), (g.ref = or(d, c, f)), (g.return = d), g)
        : ((g = Vs(f.type, f.key, f.props, null, d.mode, g)),
          (g.ref = or(d, c, f)),
          (g.return = d),
          g);
  }
  function u(d, c, f, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = wl(f, d.mode, g)), (c.return = d), c)
      : ((c = s(c, f.children || [])), (c.return = d), c);
  }
  function m(d, c, f, g, k) {
    return c === null || c.tag !== 7
      ? ((c = rn(f, d.mode, g, k)), (c.return = d), c)
      : ((c = s(c, f)), (c.return = d), c);
  }
  function p(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = vl("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case fs:
          return (
            (f = Vs(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = or(d, null, c)),
            (f.return = d),
            f
          );
        case wn:
          return (c = wl(c, d.mode, f)), (c.return = d), c;
        case Rt:
          var g = c._init;
          return p(d, g(c._payload), f);
      }
      if (fr(c) || nr(c))
        return (c = rn(c, d.mode, f, null)), (c.return = d), c;
      Ss(d, c);
    }
    return null;
  }
  function h(d, c, f, g) {
    var k = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return k !== null ? null : o(d, c, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case fs:
          return f.key === k ? a(d, c, f, g) : null;
        case wn:
          return f.key === k ? u(d, c, f, g) : null;
        case Rt:
          return (k = f._init), h(d, c, k(f._payload), g);
      }
      if (fr(f) || nr(f)) return k !== null ? null : m(d, c, f, g, null);
      Ss(d, f);
    }
    return null;
  }
  function y(d, c, f, g, k) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(f) || null), o(c, d, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fs:
          return (d = d.get(g.key === null ? f : g.key) || null), a(c, d, g, k);
        case wn:
          return (d = d.get(g.key === null ? f : g.key) || null), u(c, d, g, k);
        case Rt:
          var C = g._init;
          return y(d, c, f, C(g._payload), k);
      }
      if (fr(g) || nr(g)) return (d = d.get(f) || null), m(c, d, g, k, null);
      Ss(c, g);
    }
    return null;
  }
  function w(d, c, f, g) {
    for (
      var k = null, C = null, x = c, P = (c = 0), T = null;
      x !== null && P < f.length;
      P++
    ) {
      x.index > P ? ((T = x), (x = null)) : (T = x.sibling);
      var A = h(d, x, f[P], g);
      if (A === null) {
        x === null && (x = T);
        break;
      }
      e && x && A.alternate === null && t(d, x),
        (c = i(A, c, P)),
        C === null ? (k = A) : (C.sibling = A),
        (C = A),
        (x = T);
    }
    if (P === f.length) return n(d, x), b && Jt(d, P), k;
    if (x === null) {
      for (; P < f.length; P++)
        (x = p(d, f[P], g)),
          x !== null &&
            ((c = i(x, c, P)), C === null ? (k = x) : (C.sibling = x), (C = x));
      return b && Jt(d, P), k;
    }
    for (x = r(d, x); P < f.length; P++)
      (T = y(x, d, P, f[P], g)),
        T !== null &&
          (e && T.alternate !== null && x.delete(T.key === null ? P : T.key),
          (c = i(T, c, P)),
          C === null ? (k = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        x.forEach(function (M) {
          return t(d, M);
        }),
      b && Jt(d, P),
      k
    );
  }
  function v(d, c, f, g) {
    var k = nr(f);
    if (typeof k != "function") throw Error(S(150));
    if (((f = k.call(f)), f == null)) throw Error(S(151));
    for (
      var C = (k = null), x = c, P = (c = 0), T = null, A = f.next();
      x !== null && !A.done;
      P++, A = f.next()
    ) {
      x.index > P ? ((T = x), (x = null)) : (T = x.sibling);
      var M = h(d, x, A.value, g);
      if (M === null) {
        x === null && (x = T);
        break;
      }
      e && x && M.alternate === null && t(d, x),
        (c = i(M, c, P)),
        C === null ? (k = M) : (C.sibling = M),
        (C = M),
        (x = T);
    }
    if (A.done) return n(d, x), b && Jt(d, P), k;
    if (x === null) {
      for (; !A.done; P++, A = f.next())
        (A = p(d, A.value, g)),
          A !== null &&
            ((c = i(A, c, P)), C === null ? (k = A) : (C.sibling = A), (C = A));
      return b && Jt(d, P), k;
    }
    for (x = r(d, x); !A.done; P++, A = f.next())
      (A = y(x, d, P, A.value, g)),
        A !== null &&
          (e && A.alternate !== null && x.delete(A.key === null ? P : A.key),
          (c = i(A, c, P)),
          C === null ? (k = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        x.forEach(function (ze) {
          return t(d, ze);
        }),
      b && Jt(d, P),
      k
    );
  }
  function E(d, c, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === _n &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case fs:
          e: {
            for (var k = f.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (((k = f.type), k === _n)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (c = s(C, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Rt &&
                    $u(k) === C.type)
                ) {
                  n(d, C.sibling),
                    (c = s(C, f.props)),
                    (c.ref = or(d, C, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            f.type === _n
              ? ((c = rn(f.props.children, d.mode, g, f.key)),
                (c.return = d),
                (d = c))
              : ((g = Vs(f.type, f.key, f.props, null, d.mode, g)),
                (g.ref = or(d, c, f)),
                (g.return = d),
                (d = g));
          }
          return l(d);
        case wn:
          e: {
            for (C = f.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = s(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = wl(f, d.mode, g)), (c.return = d), (d = c);
          }
          return l(d);
        case Rt:
          return (C = f._init), E(d, c, C(f._payload), g);
      }
      if (fr(f)) return w(d, c, f, g);
      if (nr(f)) return v(d, c, f, g);
      Ss(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = s(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = vl(f, d.mode, g)), (c.return = d), (d = c)),
        l(d))
      : n(d, c);
  }
  return E;
}
var bn = Vf(!0),
  Hf = Vf(!1),
  ui = bt(null),
  ci = null,
  Rn = null,
  ia = null;
function la() {
  ia = Rn = ci = null;
}
function oa(e) {
  var t = ui.current;
  H(ui), (e._currentValue = t);
}
function io(e, t, n) {
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
function Fn(e, t) {
  (ci = e),
    (ia = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (ia !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (ci === null) throw Error(S(308));
      (Rn = e), (ci.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var Zt = null;
function aa(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function bf(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), aa(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    kt(e, r)
  );
}
function kt(e, t) {
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
var At = !1;
function ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qf(e, t) {
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
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      kt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), aa(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    kt(e, n)
  );
}
function $s(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ko(e, n);
  }
}
function Du(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (s = i = l) : (i = i.next = l), (n = n.next);
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
function fi(e, t, n, r) {
  var s = e.updateQueue;
  At = !1;
  var i = s.firstBaseUpdate,
    l = s.lastBaseUpdate,
    o = s.shared.pending;
  if (o !== null) {
    s.shared.pending = null;
    var a = o,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (o = m.lastBaseUpdate),
      o !== l &&
        (o === null ? (m.firstBaseUpdate = u) : (o.next = u),
        (m.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = s.baseState;
    (l = 0), (m = u = a = null), (o = i);
    do {
      var h = o.lane,
        y = o.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var w = e,
            v = o;
          switch (((h = t), (y = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                p = w.call(y, p, h);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (h = typeof w == "function" ? w.call(y, p, h) : w),
                h == null)
              )
                break e;
              p = J({}, p, h);
              break e;
            case 2:
              At = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [o]) : h.push(o));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          m === null ? ((u = m = y), (a = p)) : (m = m.next = y),
          (l |= h);
      if (((o = o.next), o === null)) {
        if (((o = s.shared.pending), o === null)) break;
        (h = o),
          (o = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = p),
      (s.baseState = a),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = m),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (l |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (an |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(S(191, s));
        s.call(r);
      }
    }
}
var es = {},
  ft = bt(es),
  Wr = bt(es),
  Vr = bt(es);
function en(e) {
  if (e === es) throw Error(S(174));
  return e;
}
function ca(e, t) {
  switch ((W(Vr, t), W(Wr, e), W(ft, es), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zl(t, e));
  }
  H(ft), W(ft, t);
}
function Qn() {
  H(ft), H(Wr), H(Vr);
}
function Xf(e) {
  en(Vr.current);
  var t = en(ft.current),
    n = zl(t, e.type);
  t !== n && (W(Wr, e), W(ft, n));
}
function fa(e) {
  Wr.current === e && (H(ft), H(Wr));
}
var X = bt(0);
function di(e) {
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
var dl = [];
function da() {
  for (var e = 0; e < dl.length; e++)
    dl[e]._workInProgressVersionPrimary = null;
  dl.length = 0;
}
var Ds = Et.ReactCurrentDispatcher,
  hl = Et.ReactCurrentBatchConfig,
  on = 0,
  K = null,
  re = null,
  oe = null,
  hi = !1,
  Er = !1,
  Hr = 0,
  Ym = 0;
function pe() {
  throw Error(S(321));
}
function ha(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n])) return !1;
  return !0;
}
function pa(e, t, n, r, s, i) {
  if (
    ((on = i),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ds.current = e === null || e.memoizedState === null ? eg : tg),
    (e = n(r, s)),
    Er)
  ) {
    i = 0;
    do {
      if (((Er = !1), (Hr = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (oe = re = null),
        (t.updateQueue = null),
        (Ds.current = ng),
        (e = n(r, s));
    } while (Er);
  }
  if (
    ((Ds.current = pi),
    (t = re !== null && re.next !== null),
    (on = 0),
    (oe = re = K = null),
    (hi = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function ma() {
  var e = Hr !== 0;
  return (Hr = 0), e;
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (K.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function be() {
  if (re === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = oe === null ? K.memoizedState : oe.next;
  if (t !== null) (oe = t), (re = e);
  else {
    if (e === null) throw Error(S(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      oe === null ? (K.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pl(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = re,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var l = s.next;
      (s.next = i.next), (i.next = l);
    }
    (r.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (r = r.baseState);
    var o = (l = null),
      a = null,
      u = i;
    do {
      var m = u.lane;
      if ((on & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((o = a = p), (l = r)) : (a = a.next = p),
          (K.lanes |= m),
          (an |= m);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = o),
      nt(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (K.lanes |= i), (an |= i), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ml(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var l = (s = s.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== s);
    nt(i, t.memoizedState) || (Ee = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Kf() {}
function Jf(e, t) {
  var n = K,
    r = be(),
    s = t(),
    i = !nt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Ee = !0)),
    (r = r.queue),
    ga(Gf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qr(9, qf.bind(null, n, r, s, t), void 0, null),
      ae === null)
    )
      throw Error(S(349));
    on & 30 || Yf(n, t, s);
  }
  return s;
}
function Yf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zf(t) && ed(e);
}
function Gf(e, t, n) {
  return n(function () {
    Zf(t) && ed(e);
  });
}
function Zf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function ed(e) {
  var t = kt(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Uu(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: br,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zm.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function td() {
  return be().memoizedState;
}
function zs(e, t, n, r) {
  var s = it();
  (K.flags |= e),
    (s.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ti(e, t, n, r) {
  var s = be();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (re !== null) {
    var l = re.memoizedState;
    if (((i = l.destroy), r !== null && ha(r, l.deps))) {
      s.memoizedState = Qr(t, n, i, r);
      return;
    }
  }
  (K.flags |= e), (s.memoizedState = Qr(1 | t, n, i, r));
}
function Bu(e, t) {
  return zs(8390656, 8, e, t);
}
function ga(e, t) {
  return Ti(2048, 8, e, t);
}
function nd(e, t) {
  return Ti(4, 2, e, t);
}
function rd(e, t) {
  return Ti(4, 4, e, t);
}
function sd(e, t) {
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
function id(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ti(4, 4, sd.bind(null, t, e), n)
  );
}
function ya() {}
function ld(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ha(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function od(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ha(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ad(e, t, n) {
  return on & 21
    ? (nt(n, t) || ((n = hf()), (K.lanes |= n), (an |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function qm(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hl.transition;
  hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (hl.transition = r);
  }
}
function ud() {
  return be().memoizedState;
}
function Gm(e, t, n) {
  var r = Ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cd(e))
  )
    fd(t, n);
  else if (((n = bf(e, t, n, r)), n !== null)) {
    var s = _e();
    tt(n, e, r, s), dd(n, t, r);
  }
}
function Zm(e, t, n) {
  var r = Ut(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cd(e)) fd(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          o = i(l, n);
        if (((s.hasEagerState = !0), (s.eagerState = o), nt(o, l))) {
          var a = t.interleaved;
          a === null
            ? ((s.next = s), aa(t))
            : ((s.next = a.next), (a.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = bf(e, t, s, r)),
      n !== null && ((s = _e()), tt(n, e, r, s), dd(n, t, r));
  }
}
function cd(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function fd(e, t) {
  Er = hi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ko(e, n);
  }
}
var pi = {
    readContext: He,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  eg = {
    readContext: He,
    useCallback: function (e, t) {
      return (it().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: Bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zs(4194308, 4, sd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
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
        (e = e.dispatch = Gm.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Uu,
    useDebugValue: ya,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = Uu(!1),
        t = e[0];
      return (e = qm.bind(null, e[1])), (it().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        s = it();
      if (b) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(S(349));
        on & 30 || Yf(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        Bu(Gf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qr(9, qf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = ae.identifierPrefix;
      if (b) {
        var n = wt,
          r = vt;
        (n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ym++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  tg = {
    readContext: He,
    useCallback: ld,
    useContext: He,
    useEffect: ga,
    useImperativeHandle: id,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: od,
    useReducer: pl,
    useRef: td,
    useState: function () {
      return pl(br);
    },
    useDebugValue: ya,
    useDeferredValue: function (e) {
      var t = be();
      return ad(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = pl(br)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: Kf,
    useSyncExternalStore: Jf,
    useId: ud,
    unstable_isNewReconciler: !1,
  },
  ng = {
    readContext: He,
    useCallback: ld,
    useContext: He,
    useEffect: ga,
    useImperativeHandle: id,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: od,
    useReducer: ml,
    useRef: td,
    useState: function () {
      return ml(br);
    },
    useDebugValue: ya,
    useDeferredValue: function (e) {
      var t = be();
      return re === null ? (t.memoizedState = e) : ad(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(br)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: Kf,
    useSyncExternalStore: Jf,
    useId: ud,
    unstable_isNewReconciler: !1,
  };
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function lo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      s = Ut(e),
      i = _t(r, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Dt(e, i, s)),
      t !== null && (tt(t, e, s, r), $s(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      s = Ut(e),
      i = _t(r, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Dt(e, i, s)),
      t !== null && (tt(t, e, s, r), $s(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = _e(),
      r = Ut(e),
      s = _t(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = Dt(e, s, r)),
      t !== null && (tt(t, e, r, n), $s(t, e, r));
  },
};
function Wu(e, t, n, r, s, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Dr(n, r) || !Dr(s, i)
        : !0
  );
}
function hd(e, t, n) {
  var r = !1,
    s = Vt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = He(i))
      : ((s = Ne(t) ? sn : ve.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Vn(e, s) : Vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Oi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Vu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oi.enqueueReplaceState(t, t.state, null);
}
function oo(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), ua(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = He(i))
    : ((i = Ne(t) ? sn : ve.current), (s.context = Vn(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (lo(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Oi.enqueueReplaceState(s, s.state, null),
      fi(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ip(r)), (r = r.return);
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
function gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rg = typeof WeakMap == "function" ? WeakMap : Map;
function pd(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gi || ((gi = !0), (wo = r)), ao(e, t);
    }),
    n
  );
}
function md(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        ao(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ao(e, t),
          typeof r != "function" &&
            (zt === null ? (zt = new Set([this])) : zt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rg();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = yg.bind(null, e, t, n)), t.then(e, e));
}
function bu(e) {
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
function Qu(e, t, n, r, s) {
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
              : ((t = _t(-1, 1)), (t.tag = 2), Dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sg = Et.ReactCurrentOwner,
  Ee = !1;
function we(e, t, n, r) {
  t.child = e === null ? Hf(t, null, n, r) : bn(t, e.child, n, r);
}
function Xu(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Fn(t, s),
    (r = pa(e, t, n, r, i, s)),
    (n = ma()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Ct(e, t, s))
      : (b && n && na(t), (t.flags |= 1), we(e, t, r, s), t.child)
  );
}
function Ku(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ea(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gd(e, t, i, r, s))
      : ((e = Vs(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(l, r) && e.ref === t.ref)
    )
      return Ct(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Bt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gd(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Dr(i, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Ee = !0);
      else return (t.lanes = e.lanes), Ct(e, t, s);
  }
  return uo(e, t, n, r, s);
}
function yd(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(In, Oe),
        (Oe |= n);
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
          W(In, Oe),
          (Oe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        W(In, Oe),
        (Oe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(In, Oe),
      (Oe |= r);
  return we(e, t, s, n), t.child;
}
function vd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function uo(e, t, n, r, s) {
  var i = Ne(n) ? sn : ve.current;
  return (
    (i = Vn(t, i)),
    Fn(t, s),
    (n = pa(e, t, n, r, i, s)),
    (r = ma()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Ct(e, t, s))
      : (b && r && na(t), (t.flags |= 1), we(e, t, n, s), t.child)
  );
}
function Ju(e, t, n, r, s) {
  if (Ne(n)) {
    var i = !0;
    li(t);
  } else i = !1;
  if ((Fn(t, s), t.stateNode === null))
    Us(e, t), hd(t, n, r), oo(t, n, r, s), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      o = t.memoizedProps;
    l.props = o;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = He(u))
      : ((u = Ne(n) ? sn : ve.current), (u = Vn(t, u)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== r || a !== u) && Vu(t, l, r, u)),
      (At = !1);
    var h = t.memoizedState;
    (l.state = h),
      fi(t, r, l, s),
      (a = t.memoizedState),
      o !== r || h !== a || Pe.current || At
        ? (typeof m == "function" && (lo(t, n, m, r), (a = t.memoizedState)),
          (o = At || Wu(t, n, o, r, h, a, u))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = o))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Qf(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Ke(t.type, o)),
      (l.props = u),
      (p = t.pendingProps),
      (h = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = He(a))
        : ((a = Ne(n) ? sn : ve.current), (a = Vn(t, a)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== p || h !== a) && Vu(t, l, r, a)),
      (At = !1),
      (h = t.memoizedState),
      (l.state = h),
      fi(t, r, l, s);
    var w = t.memoizedState;
    o !== p || h !== w || Pe.current || At
      ? (typeof y == "function" && (lo(t, n, y, r), (w = t.memoizedState)),
        (u = At || Wu(t, n, u, r, h, w, a) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return co(e, t, n, r, i, s);
}
function co(e, t, n, r, s, i) {
  vd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return s && Lu(t, n, !1), Ct(e, t, i);
  (r = t.stateNode), (sg.current = t);
  var o =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = bn(t, e.child, null, i)), (t.child = bn(t, null, o, i)))
      : we(e, t, o, i),
    (t.memoizedState = r.state),
    s && Lu(t, n, !0),
    t.child
  );
}
function wd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Mu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Mu(e, t.context, !1),
    ca(e, t.containerInfo);
}
function Yu(e, t, n, r, s) {
  return Hn(), sa(s), (t.flags |= 256), we(e, t, n, r), t.child;
}
var fo = { dehydrated: null, treeContext: null, retryLane: 0 };
function ho(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _d(e, t, n) {
  var r = t.pendingProps,
    s = X.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    o;
  if (
    ((o = l) ||
      (o = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    W(X, s & 1),
    e === null)
  )
    return (
      so(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = ji(l, r, 0, null)),
              (e = rn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ho(n)),
              (t.memoizedState = fo),
              e)
            : va(t, l))
    );
  if (((s = e.memoizedState), s !== null && ((o = s.dehydrated), o !== null)))
    return ig(e, t, l, r, o, s, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (s = e.child), (o = s.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Bt(s, a)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      o !== null ? (i = Bt(o, i)) : ((i = rn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ho(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = fo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Bt(i, { mode: "visible", children: r.children })),
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
function va(e, t) {
  return (
    (t = ji({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ks(e, t, n, r) {
  return (
    r !== null && sa(r),
    bn(t, e.child, null, n),
    (e = va(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ig(e, t, n, r, s, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gl(Error(S(422)))), ks(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = ji({ mode: "visible", children: r.children }, s, 0, null)),
          (i = rn(i, s, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && bn(t, e.child, null, l),
          (t.child.memoizedState = ho(l)),
          (t.memoizedState = fo),
          i);
  if (!(t.mode & 1)) return ks(e, t, l, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(S(419))), (r = gl(i, r, void 0)), ks(e, t, l, r);
  }
  if (((o = (l & e.childLanes) !== 0), Ee || o)) {
    if (((r = ae), r !== null)) {
      switch (l & -l) {
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
      (s = s & (r.suspendedLanes | l) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), kt(e, s), tt(r, e, s, -1));
    }
    return Ca(), (r = gl(Error(S(421)))), ks(e, t, l, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vg.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Me = $t(s.nextSibling)),
      (Le = t),
      (b = !0),
      (qe = null),
      e !== null &&
        ((Ue[Be++] = vt),
        (Ue[Be++] = wt),
        (Ue[Be++] = ln),
        (vt = e.id),
        (wt = e.overflow),
        (ln = t)),
      (t = va(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), io(e.return, t, n);
}
function yl(e, t, n, r, s) {
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
function xd(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((we(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qu(e, n, t);
        else if (e.tag === 19) qu(e, n, t);
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
  if ((W(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && di(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          yl(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && di(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        yl(t, !0, n, null, i);
        break;
      case "together":
        yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Us(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (an |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Bt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lg(e, t, n) {
  switch (t.tag) {
    case 3:
      wd(t), Hn();
      break;
    case 5:
      Xf(t);
      break;
    case 1:
      Ne(t.type) && li(t);
      break;
    case 4:
      ca(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      W(ui, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? _d(e, t, n)
            : (W(X, X.current & 1),
              (e = Ct(e, t, n)),
              e !== null ? e.sibling : null);
      W(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        W(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yd(e, t, n);
  }
  return Ct(e, t, n);
}
var Sd, po, kd, Cd;
Sd = function (e, t) {
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
po = function () {};
kd = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), en(ft.current);
    var i = null;
    switch (n) {
      case "input":
        (s = jl(e, s)), (r = jl(e, r)), (i = []);
        break;
      case "select":
        (s = J({}, s, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (s = Dl(e, s)), (r = Dl(e, r)), (i = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = si);
    }
    Ul(n, r);
    var l;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var o = s[u];
          for (l in o) o.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Tr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((o = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && a !== o && (a != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                o[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Tr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && V("scroll", e),
                    i || o === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Cd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!b)
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
function me(e) {
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
function og(e, t, n) {
  var r = t.pendingProps;
  switch ((ra(t), t.tag)) {
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
      return me(t), null;
    case 1:
      return Ne(t.type) && ii(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qn(),
        H(Pe),
        H(ve),
        da(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (So(qe), (qe = null)))),
        po(e, t),
        me(t),
        null
      );
    case 5:
      fa(t);
      var s = en(Vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kd(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return me(t), null;
        }
        if (((e = en(ft.current)), xs(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[at] = t), (r[Br] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < hr.length; s++) V(hr[s], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              lu(r, i), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              au(r, i), V("invalid", r);
          }
          Ul(n, i), (s = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var o = i[l];
              l === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      _s(r.textContent, o, e),
                    (s = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      _s(r.textContent, o, e),
                    (s = ["children", "" + o]))
                : Tr.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              ds(r), ou(r, i, !0);
              break;
            case "textarea":
              ds(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = si);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = qc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[at] = t),
            (e[Br] = r),
            Sd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Bl(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < hr.length; s++) V(hr[s], e);
                s = r;
                break;
              case "source":
                V("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (s = r);
                break;
              case "details":
                V("toggle", e), (s = r);
                break;
              case "input":
                lu(e, r), (s = jl(e, r)), V("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = J({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                au(e, r), (s = Dl(e, r)), V("invalid", e);
                break;
              default:
                s = r;
            }
            Ul(n, s), (o = s);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var a = o[i];
                i === "style"
                  ? ef(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Gc(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Or(e, a)
                        : typeof a == "number" && Or(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Tr.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && V("scroll", e)
                          : a != null && Wo(e, i, a, l));
              }
            switch (n) {
              case "input":
                ds(e), ou(e, r, !1);
                break;
              case "textarea":
                ds(e), uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? On(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      On(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = si);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Cd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = en(Vr.current)), en(ft.current), xs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (i = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                _s(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _s(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (H(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && Me !== null && t.mode & 1 && !(t.flags & 128))
          Wf(), Hn(), (t.flags |= 98560), (i = !1);
        else if (((i = xs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[at] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (i = !1);
        } else qe !== null && (So(qe), (qe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? se === 0 && (se = 3) : Ca())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Qn(), po(e, t), e === null && zr(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return oa(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && ii(), me(t), null;
    case 19:
      if ((H(X), (i = t.memoizedState), i === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) ar(i, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = di(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    ar(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Z() > Kn &&
            ((t.flags |= 128), (r = !0), ar(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = di(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !b)
            )
              return me(t), null;
          } else
            2 * Z() - i.renderingStartTime > Kn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Z()),
          (t.sibling = null),
          (n = X.current),
          W(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        ka(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Oe & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ag(e, t) {
  switch ((ra(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && ii(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qn(),
        H(Pe),
        H(ve),
        da(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fa(t), null;
    case 13:
      if ((H(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(X), null;
    case 4:
      return Qn(), null;
    case 10:
      return oa(t.type._context), null;
    case 22:
    case 23:
      return ka(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cs = !1,
  ye = !1,
  ug = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function mo(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var Gu = !1;
function cg(e, t) {
  if (((ql = ti), (e = Af()), ta(e))) {
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
          var l = 0,
            o = -1,
            a = -1,
            u = 0,
            m = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (s !== 0 && p.nodeType !== 3) || (o = l + s),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (h = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++u === s && (o = l),
                h === i && ++m === r && (a = l),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = y;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gl = { focusedElem: e, selectionRange: n }, ti = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    E = w.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ke(t.type, v),
                      E,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (g) {
          Y(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (w = Gu), (Gu = !1), w;
}
function Pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && mo(t, n, i);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Mi(e, t) {
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
function go(e) {
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
function Ed(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ed(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[Br], delete t[to], delete t[Qm], delete t[Xm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Pd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pd(e.return)) return null;
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
function yo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = si));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yo(e, t, n), e = e.sibling; e !== null; ) yo(e, t, n), (e = e.sibling);
}
function vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vo(e, t, n), e = e.sibling; e !== null; ) vo(e, t, n), (e = e.sibling);
}
var ue = null,
  Ye = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) Nd(e, t, n), (n = n.sibling);
}
function Nd(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(Ei, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || An(n, t);
    case 6:
      var r = ue,
        s = Ye;
      (ue = null),
        Pt(e, t, n),
        (ue = r),
        (Ye = s),
        ue !== null &&
          (Ye
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Ye
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? cl(e.parentNode, n)
              : e.nodeType === 1 && cl(e, n),
            Fr(e))
          : cl(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (s = Ye),
        (ue = n.stateNode.containerInfo),
        (Ye = !0),
        Pt(e, t, n),
        (ue = r),
        (Ye = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && mo(n, t, l),
            (s = s.next);
        } while (s !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (
        !ye &&
        (An(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          Y(n, t, o);
        }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ye = (r = ye) || n.memoizedState !== null), Pt(e, t, n), (ye = r))
        : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ug()),
      t.forEach(function (r) {
        var s = wg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          l = t,
          o = l;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (ue = o.stateNode), (Ye = !1);
              break e;
            case 3:
              (ue = o.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (ue = o.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          o = o.return;
        }
        if (ue === null) throw Error(S(160));
        Nd(i, l, s), (ue = null), (Ye = !1);
        var a = s.alternate;
        a !== null && (a.return = null), (s.return = null);
      } catch (u) {
        Y(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rd(t, e), (t = t.sibling);
}
function Rd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), rt(e), r & 4)) {
        try {
          Pr(3, e, e.return), Mi(3, e);
        } catch (v) {
          Y(e, e.return, v);
        }
        try {
          Pr(5, e, e.return);
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 1:
      Qe(t, e), rt(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        rt(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Or(s, "");
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && Jc(s, i),
              Bl(o, l);
            var u = Bl(o, i);
            for (l = 0; l < a.length; l += 2) {
              var m = a[l],
                p = a[l + 1];
              m === "style"
                ? ef(s, p)
                : m === "dangerouslySetInnerHTML"
                  ? Gc(s, p)
                  : m === "children"
                    ? Or(s, p)
                    : Wo(s, m, p, u);
            }
            switch (o) {
              case "input":
                Fl(s, i);
                break;
              case "textarea":
                Yc(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? On(s, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? On(s, !!i.multiple, i.defaultValue, !0)
                      : On(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Br] = i;
          } catch (v) {
            Y(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fr(t.containerInfo);
        } catch (v) {
          Y(e, e.return, v);
        }
      break;
    case 4:
      Qe(t, e), rt(e);
      break;
    case 13:
      Qe(t, e),
        rt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (xa = Z())),
        r & 4 && ec(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (u = ye) || m), Qe(t, e), (ye = u)) : Qe(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !m && e.mode & 1)
        )
          for (N = e, m = e.child; m !== null; ) {
            for (p = N = m; N !== null; ) {
              switch (((h = N), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, h, h.return);
                  break;
                case 1:
                  An(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      Y(r, n, v);
                    }
                  }
                  break;
                case 5:
                  An(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    nc(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (N = y)) : nc(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (s = p.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = p.stateNode),
                      (a = p.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = Zc("display", l)));
              } catch (v) {
                Y(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (v) {
                Y(e, e.return, v);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), rt(e), r & 4 && ec(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Or(s, ""), (r.flags &= -33));
          var i = Zu(e);
          vo(e, i, s);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            o = Zu(e);
          yo(e, o, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Y(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fg(e, t, n) {
  (N = e), Ad(e);
}
function Ad(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var s = N,
      i = s.child;
    if (s.tag === 22 && r) {
      var l = s.memoizedState !== null || Cs;
      if (!l) {
        var o = s.alternate,
          a = (o !== null && o.memoizedState !== null) || ye;
        o = Cs;
        var u = ye;
        if (((Cs = l), (ye = a) && !u))
          for (N = s; N !== null; )
            (l = N),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? rc(s)
                : a !== null
                  ? ((a.return = l), (N = a))
                  : rc(s);
        for (; i !== null; ) (N = i), Ad(i), (i = i.sibling);
        (N = s), (Cs = o), (ye = u);
      }
      tc(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (N = i)) : tc(e);
  }
}
function tc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || Mi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && zu(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zu(t, l, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                  var m = u.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && Fr(p);
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
              throw Error(S(163));
          }
        ye || (t.flags & 512 && go(t));
      } catch (h) {
        Y(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function nc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function rc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mi(4, t);
          } catch (a) {
            Y(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Y(t, s, a);
            }
          }
          var i = t.return;
          try {
            go(t);
          } catch (a) {
            Y(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            go(t);
          } catch (a) {
            Y(t, l, a);
          }
      }
    } catch (a) {
      Y(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (N = o);
      break;
    }
    N = t.return;
  }
}
var dg = Math.ceil,
  mi = Et.ReactCurrentDispatcher,
  wa = Et.ReactCurrentOwner,
  Ve = Et.ReactCurrentBatchConfig,
  D = 0,
  ae = null,
  ee = null,
  fe = 0,
  Oe = 0,
  In = bt(0),
  se = 0,
  Xr = null,
  an = 0,
  Li = 0,
  _a = 0,
  Nr = null,
  Ce = null,
  xa = 0,
  Kn = 1 / 0,
  gt = null,
  gi = !1,
  wo = null,
  zt = null,
  Es = !1,
  Mt = null,
  yi = 0,
  Rr = 0,
  _o = null,
  Bs = -1,
  Ws = 0;
function _e() {
  return D & 6 ? Z() : Bs !== -1 ? Bs : (Bs = Z());
}
function Ut(e) {
  return e.mode & 1
    ? D & 2 && fe !== 0
      ? fe & -fe
      : Jm.transition !== null
        ? (Ws === 0 && (Ws = hf()), Ws)
        : ((e = z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : _f(e.type))),
          e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < Rr) throw ((Rr = 0), (_o = null), Error(S(185)));
  qr(e, n, r),
    (!(D & 2) || e !== ae) &&
      (e === ae && (!(D & 2) && (Li |= n), se === 4 && Tt(e, fe)),
      Re(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((Kn = Z() + 500), Ii && Qt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = ei(e, e === ae ? fe : 0);
  if (r === 0)
    n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && du(n), t === 1))
      e.tag === 0 ? Km(sc.bind(null, e)) : zf(sc.bind(null, e)),
        Hm(function () {
          !(D & 6) && Qt();
        }),
        (n = null);
    else {
      switch (pf(r)) {
        case 1:
          n = Xo;
          break;
        case 4:
          n = ff;
          break;
        case 16:
          n = Zs;
          break;
        case 536870912:
          n = df;
          break;
        default:
          n = Zs;
      }
      n = $d(n, Id.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Id(e, t) {
  if (((Bs = -1), (Ws = 0), D & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if ($n() && e.callbackNode !== n) return null;
  var r = ei(e, e === ae ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vi(e, r);
  else {
    t = r;
    var s = D;
    D |= 2;
    var i = Od();
    (ae !== e || fe !== t) && ((gt = null), (Kn = Z() + 500), nn(e, t));
    do
      try {
        mg();
        break;
      } catch (o) {
        Td(e, o);
      }
    while (!0);
    la(),
      (mi.current = i),
      (D = s),
      ee !== null ? (t = 0) : ((ae = null), (fe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Ql(e)), s !== 0 && ((r = s), (t = xo(e, s)))), t === 1)
    )
      throw ((n = Xr), nn(e, 0), Tt(e, r), Re(e, Z()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !hg(s) &&
          ((t = vi(e, r)),
          t === 2 && ((i = Ql(e)), i !== 0 && ((r = i), (t = xo(e, i)))),
          t === 1))
      )
        throw ((n = Xr), nn(e, 0), Tt(e, r), Re(e, Z()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Yt(e, Ce, gt);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = xa + 500 - Z()), 10 < t))
          ) {
            if (ei(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              _e(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = eo(Yt.bind(null, e, Ce, gt), t);
            break;
          }
          Yt(e, Ce, gt);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var l = 31 - et(r);
            (i = 1 << l), (l = t[l]), l > s && (s = l), (r &= ~i);
          }
          if (
            ((r = s),
            (r = Z() - r),
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
                          : 1960 * dg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = eo(Yt.bind(null, e, Ce, gt), r);
            break;
          }
          Yt(e, Ce, gt);
          break;
        case 5:
          Yt(e, Ce, gt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Re(e, Z()), e.callbackNode === n ? Id.bind(null, e) : null;
}
function xo(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = vi(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && So(t)),
    e
  );
}
function So(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function hg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!nt(i(), s)) return !1;
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
function Tt(e, t) {
  for (
    t &= ~_a,
      t &= ~Li,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function sc(e) {
  if (D & 6) throw Error(S(327));
  $n();
  var t = ei(e, 0);
  if (!(t & 1)) return Re(e, Z()), null;
  var n = vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ql(e);
    r !== 0 && ((t = r), (n = xo(e, r)));
  }
  if (n === 1) throw ((n = Xr), nn(e, 0), Tt(e, t), Re(e, Z()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yt(e, Ce, gt),
    Re(e, Z()),
    null
  );
}
function Sa(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((Kn = Z() + 500), Ii && Qt());
  }
}
function un(e) {
  Mt !== null && Mt.tag === 0 && !(D & 6) && $n();
  var t = D;
  D |= 1;
  var n = Ve.transition,
    r = z;
  try {
    if (((Ve.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (Ve.transition = n), (D = t), !(D & 6) && Qt();
  }
}
function ka() {
  (Oe = In.current), H(In);
}
function nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vm(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((ra(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ii();
          break;
        case 3:
          Qn(), H(Pe), H(ve), da();
          break;
        case 5:
          fa(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          H(X);
          break;
        case 19:
          H(X);
          break;
        case 10:
          oa(r.type._context);
          break;
        case 22:
        case 23:
          ka();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ee = e = Bt(e.current, null)),
    (fe = Oe = t),
    (se = 0),
    (Xr = null),
    (_a = Li = an = 0),
    (Ce = Nr = null),
    Zt !== null)
  ) {
    for (t = 0; t < Zt.length; t++)
      if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = s), (r.next = l);
        }
        n.pending = r;
      }
    Zt = null;
  }
  return e;
}
function Td(e, t) {
  do {
    var n = ee;
    try {
      if ((la(), (Ds.current = pi), hi)) {
        for (var r = K.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        hi = !1;
      }
      if (
        ((on = 0),
        (oe = re = K = null),
        (Er = !1),
        (Hr = 0),
        (wa.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (Xr = t), (ee = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          o = n,
          a = t;
        if (
          ((t = fe),
          (o.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            m = o,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = bu(l);
          if (y !== null) {
            (y.flags &= -257),
              Qu(y, l, o, i, t),
              y.mode & 1 && Hu(i, u, t),
              (t = y),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(i, u, t), Ca();
              break e;
            }
            a = Error(S(426));
          }
        } else if (b && o.mode & 1) {
          var E = bu(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Qu(E, l, o, i, t),
              sa(Xn(a, o));
            break e;
          }
        }
        (i = a = Xn(a, o)),
          se !== 4 && (se = 2),
          Nr === null ? (Nr = [i]) : Nr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = pd(i, a, t);
              Du(i, d);
              break e;
            case 1:
              o = a;
              var c = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (zt === null || !zt.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = md(i, o, t);
                Du(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ld(n);
    } catch (k) {
      (t = k), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Od() {
  var e = mi.current;
  return (mi.current = pi), e === null ? pi : e;
}
function Ca() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || (!(an & 268435455) && !(Li & 268435455)) || Tt(ae, fe);
}
function vi(e, t) {
  var n = D;
  D |= 2;
  var r = Od();
  (ae !== e || fe !== t) && ((gt = null), nn(e, t));
  do
    try {
      pg();
      break;
    } catch (s) {
      Td(e, s);
    }
  while (!0);
  if ((la(), (D = n), (mi.current = r), ee !== null)) throw Error(S(261));
  return (ae = null), (fe = 0), se;
}
function pg() {
  for (; ee !== null; ) Md(ee);
}
function mg() {
  for (; ee !== null && !Up(); ) Md(ee);
}
function Md(e) {
  var t = Fd(e.alternate, e, Oe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ld(e) : (ee = t),
    (wa.current = null);
}
function Ld(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ag(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (ee = null);
        return;
      }
    } else if (((n = og(n, t, Oe)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Yt(e, t, n) {
  var r = z,
    s = Ve.transition;
  try {
    (Ve.transition = null), (z = 1), gg(e, t, n, r);
  } finally {
    (Ve.transition = s), (z = r);
  }
  return null;
}
function gg(e, t, n, r) {
  do $n();
  while (Mt !== null);
  if (D & 6) throw Error(S(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Yp(e, i),
    e === ae && ((ee = ae = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Es ||
      ((Es = !0),
      $d(Zs, function () {
        return $n(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ve.transition), (Ve.transition = null);
    var l = z;
    z = 1;
    var o = D;
    (D |= 4),
      (wa.current = null),
      cg(e, n),
      Rd(n, e),
      Fm(Gl),
      (ti = !!ql),
      (Gl = ql = null),
      (e.current = n),
      fg(n),
      Bp(),
      (D = o),
      (z = l),
      (Ve.transition = i);
  } else e.current = n;
  if (
    (Es && ((Es = !1), (Mt = e), (yi = s)),
    (i = e.pendingLanes),
    i === 0 && (zt = null),
    Hp(n.stateNode),
    Re(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (gi) throw ((gi = !1), (e = wo), (wo = null), e);
  return (
    yi & 1 && e.tag !== 0 && $n(),
    (i = e.pendingLanes),
    i & 1 ? (e === _o ? Rr++ : ((Rr = 0), (_o = e))) : (Rr = 0),
    Qt(),
    null
  );
}
function $n() {
  if (Mt !== null) {
    var e = pf(yi),
      t = Ve.transition,
      n = z;
    try {
      if (((Ve.transition = null), (z = 16 > e ? 16 : e), Mt === null))
        var r = !1;
      else {
        if (((e = Mt), (Mt = null), (yi = 0), D & 6)) throw Error(S(331));
        var s = D;
        for (D |= 4, N = e.current; N !== null; ) {
          var i = N,
            l = i.child;
          if (N.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var u = o[a];
                for (N = u; N !== null; ) {
                  var m = N;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (N = p);
                  else
                    for (; N !== null; ) {
                      m = N;
                      var h = m.sibling,
                        y = m.return;
                      if ((Ed(m), m === u)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (N = h);
                        break;
                      }
                      N = y;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (N = l);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (N = d);
                break e;
              }
              N = i.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          l = N;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) (f.return = l), (N = f);
          else
            e: for (l = c; N !== null; ) {
              if (((o = N), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mi(9, o);
                  }
                } catch (k) {
                  Y(o, o.return, k);
                }
              if (o === l) {
                N = null;
                break e;
              }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (N = g);
                break e;
              }
              N = o.return;
            }
        }
        if (
          ((D = s), Qt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(Ei, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (Ve.transition = t);
    }
  }
  return !1;
}
function ic(e, t, n) {
  (t = Xn(n, t)),
    (t = pd(e, t, 1)),
    (e = Dt(e, t, 1)),
    (t = _e()),
    e !== null && (qr(e, 1, t), Re(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) ic(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zt === null || !zt.has(r)))
        ) {
          (e = Xn(n, e)),
            (e = md(t, e, 1)),
            (t = Dt(t, e, 1)),
            (e = _e()),
            t !== null && (qr(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = _e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (fe & n) === n &&
      (se === 4 || (se === 3 && (fe & 130023424) === fe && 500 > Z() - xa)
        ? nn(e, 0)
        : (_a |= n)),
    Re(e, t);
}
function jd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ms), (ms <<= 1), !(ms & 130023424) && (ms = 4194304))
      : (t = 1));
  var n = _e();
  (e = kt(e, t)), e !== null && (qr(e, t, n), Re(e, n));
}
function vg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jd(e, n);
}
function wg(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), jd(e, n);
}
var Fd;
Fd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), lg(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else (Ee = !1), b && t.flags & 1048576 && Uf(t, ai, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Us(e, t), (e = t.pendingProps);
      var s = Vn(t, ve.current);
      Fn(t, n), (s = pa(null, t, r, e, s, n));
      var i = ma();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((i = !0), li(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            ua(t),
            (s.updater = Oi),
            (t.stateNode = s),
            (s._reactInternals = t),
            oo(t, r, e, n),
            (t = co(null, t, r, !0, i, n)))
          : ((t.tag = 0), b && i && na(t), we(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Us(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = xg(r)),
          (e = Ke(r, e)),
          s)
        ) {
          case 0:
            t = uo(null, t, r, e, n);
            break e;
          case 1:
            t = Ju(null, t, r, e, n);
            break e;
          case 11:
            t = Xu(null, t, r, e, n);
            break e;
          case 14:
            t = Ku(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ke(r, s)),
        uo(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ke(r, s)),
        Ju(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((wd(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Qf(e, t),
          fi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = Xn(Error(S(423)), t)), (t = Yu(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Xn(Error(S(424)), t)), (t = Yu(e, t, r, n, s));
            break e;
          } else
            for (
              Me = $t(t.stateNode.containerInfo.firstChild),
                Le = t,
                b = !0,
                qe = null,
                n = Hf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === s)) {
            t = Ct(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xf(t),
        e === null && so(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = s.children),
        Zl(r, s) ? (l = null) : i !== null && Zl(r, i) && (t.flags |= 32),
        vd(e, t),
        we(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && so(t), null;
    case 13:
      return _d(e, t, n);
    case 4:
      return (
        ca(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bn(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ke(r, s)),
        Xu(e, t, r, s, n)
      );
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (l = s.value),
          W(ui, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (nt(i.value, l)) {
            if (i.children === s.children && !Pe.current) {
              t = Ct(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                l = i.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = _t(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var m = u.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      io(i.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(S(341));
                (l.lanes |= n),
                  (o = l.alternate),
                  o !== null && (o.lanes |= n),
                  io(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        we(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Fn(t, n),
        (s = He(s)),
        (r = r(s)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Ke(r, t.pendingProps)),
        (s = Ke(r.type, s)),
        Ku(e, t, r, s, n)
      );
    case 15:
      return gd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ke(r, s)),
        Us(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), li(t)) : (e = !1),
        Fn(t, n),
        hd(t, r, s),
        oo(t, r, s, n),
        co(null, t, r, !0, e, n)
      );
    case 19:
      return xd(e, t, n);
    case 22:
      return yd(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function $d(e, t) {
  return cf(e, t);
}
function _g(e, t, n, r) {
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
function We(e, t, n, r) {
  return new _g(e, t, n, r);
}
function Ea(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xg(e) {
  if (typeof e == "function") return Ea(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ho)) return 11;
    if (e === bo) return 14;
  }
  return 2;
}
function Bt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
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
function Vs(e, t, n, r, s, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ea(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case _n:
        return rn(n.children, s, i, t);
      case Vo:
        (l = 8), (s |= 8);
        break;
      case Tl:
        return (
          (e = We(12, n, t, s | 2)), (e.elementType = Tl), (e.lanes = i), e
        );
      case Ol:
        return (e = We(13, n, t, s)), (e.elementType = Ol), (e.lanes = i), e;
      case Ml:
        return (e = We(19, n, t, s)), (e.elementType = Ml), (e.lanes = i), e;
      case Qc:
        return ji(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hc:
              l = 10;
              break e;
            case bc:
              l = 9;
              break e;
            case Ho:
              l = 11;
              break e;
            case bo:
              l = 14;
              break e;
            case Rt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(l, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function rn(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function ji(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = Qc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vl(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function wl(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sg(e, t, n, r, s) {
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
    (this.eventTimes = Zi(0)),
    (this.expirationTimes = Zi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Pa(e, t, n, r, s, i, l, o, a) {
  return (
    (e = new Sg(e, t, n, o, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = We(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ua(i),
    e
  );
}
function kg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dd(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return Df(e, n, t);
  }
  return t;
}
function zd(e, t, n, r, s, i, l, o, a) {
  return (
    (e = Pa(n, r, !0, e, s, i, l, o, a)),
    (e.context = Dd(null)),
    (n = e.current),
    (r = _e()),
    (s = Ut(n)),
    (i = _t(r, s)),
    (i.callback = t ?? null),
    Dt(n, i, s),
    (e.current.lanes = s),
    qr(e, s, r),
    Re(e, r),
    e
  );
}
function Fi(e, t, n, r) {
  var s = t.current,
    i = _e(),
    l = Ut(s);
  return (
    (n = Dd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dt(s, t, l)),
    e !== null && (tt(e, s, l, i), $s(e, s, l)),
    l
  );
}
function wi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Na(e, t) {
  lc(e, t), (e = e.alternate) && lc(e, t);
}
function Cg() {
  return null;
}
var Ud =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ra(e) {
  this._internalRoot = e;
}
$i.prototype.render = Ra.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Fi(e, t, null, null);
};
$i.prototype.unmount = Ra.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function () {
      Fi(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function $i(e) {
  this._internalRoot = e;
}
$i.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
    It.splice(n, 0, e), n === 0 && wf(e);
  }
};
function Aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Di(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function oc() {}
function Eg(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = wi(l);
        i.call(u);
      };
    }
    var l = zd(t, r, e, 0, null, !1, !1, "", oc);
    return (
      (e._reactRootContainer = l),
      (e[St] = l.current),
      zr(e.nodeType === 8 ? e.parentNode : e),
      un(),
      l
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = wi(a);
      o.call(u);
    };
  }
  var a = Pa(e, 0, !1, null, null, !1, !1, "", oc);
  return (
    (e._reactRootContainer = a),
    (e[St] = a.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    un(function () {
      Fi(t, a, n, r);
    }),
    a
  );
}
function zi(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof s == "function") {
      var o = s;
      s = function () {
        var a = wi(l);
        o.call(a);
      };
    }
    Fi(t, l, e, s);
  } else l = Eg(n, t, e, s, r);
  return wi(l);
}
mf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 &&
          (Ko(t, n | 1), Re(t, Z()), !(D & 6) && ((Kn = Z() + 500), Qt()));
      }
      break;
    case 13:
      un(function () {
        var r = kt(e, 1);
        if (r !== null) {
          var s = _e();
          tt(r, e, 1, s);
        }
      }),
        Na(e, 1);
  }
};
Jo = function (e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = _e();
      tt(t, e, 134217728, n);
    }
    Na(e, 134217728);
  }
};
gf = function (e) {
  if (e.tag === 13) {
    var t = Ut(e),
      n = kt(e, t);
    if (n !== null) {
      var r = _e();
      tt(n, e, t, r);
    }
    Na(e, t);
  }
};
yf = function () {
  return z;
};
vf = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Vl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Fl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var s = Ai(r);
            if (!s) throw Error(S(90));
            Kc(r), Fl(r, s);
          }
        }
      }
      break;
    case "textarea":
      Yc(e, n);
      break;
    case "select":
      (t = n.value), t != null && On(e, !!n.multiple, t, !1);
  }
};
rf = Sa;
sf = un;
var Pg = { usingClientEntryPoint: !1, Events: [Zr, Cn, Ai, tf, nf, Sa] },
  ur = {
    findFiberByHostInstance: Gt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ng = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = af(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || Cg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ps.isDisabled && Ps.supportsFiber)
    try {
      (Ei = Ps.inject(Ng)), (ct = Ps);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pg;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Aa(t)) throw Error(S(200));
  return kg(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!Aa(e)) throw Error(S(299));
  var n = !1,
    r = "",
    s = Ud;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Pa(e, 1, !1, null, null, n, !1, r, s)),
    (e[St] = t.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    new Ra(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = af(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return un(e);
};
Fe.hydrate = function (e, t, n) {
  if (!Di(t)) throw Error(S(200));
  return zi(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!Aa(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    l = Ud;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = zd(t, null, e, 1, n ?? null, s, !1, i, l)),
    (e[St] = t.current),
    zr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new $i(t);
};
Fe.render = function (e, t, n) {
  if (!Di(t)) throw Error(S(200));
  return zi(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!Di(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (un(function () {
        zi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = Sa;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Di(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return zi(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function Bd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd);
    } catch (e) {
      console.error(e);
    }
}
Bd(), (Uc.exports = Fe);
var Rg = Uc.exports,
  Wd,
  ac = Rg;
(Wd = ac.createRoot), ac.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ag = {
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
 */ const Ig = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  De = (e, t) => {
    const n = G.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          className: o = "",
          children: a,
          ...u
        },
        m,
      ) =>
        G.createElement(
          "svg",
          {
            ref: m,
            ...Ag,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(s) : i,
            className: ["lucide", `lucide-${Ig(e)}`, o].join(" "),
            ...u,
          },
          [
            ...t.map(([p, h]) => G.createElement(p, h)),
            ...(Array.isArray(a) ? a : [a]),
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
 */ const uc = De("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tg = De("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Og = De("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vd = De("Mic", [
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
 */ const Mg = De("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lg = De("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jg = De("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fg = De("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $g = De("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn",
    },
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dg = De("Square", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zg = De("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ug = De("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bg = De("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Wg = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      description: "Financial Advisor",
      personality:
        "You are Dr. Sarah Chen, a seasoned financial advisor with expertise in personal finance, investments, and retirement planning. Your responses should be clear, practical, and focused on helping people make informed financial decisions. You excel at explaining complex financial concepts in simple terms.",
      voice: "nova",
    },
    {
      id: 2,
      name: "James Mitchell",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "Tech Expert",
      personality:
        "You are James Mitchell, a tech expert specializing in consumer electronics, software, and digital security. Your responses should be user-friendly and practical, helping people solve common tech issues and make informed technology decisions. You're knowledgeable about latest tech trends and cybersecurity best practices.",
      voice: "onyx",
    },
    {
      id: 3,
      name: "Dr. Emily Roberts",
      avatar: "https://images.unsplash.com/photo-1527613426441-4da17471b66d",
      description: "Mental Health Counselor",
      personality:
        "You are Dr. Emily Roberts, a compassionate mental health counselor with expertise in anxiety, stress management, and work-life balance. Your responses should be empathetic, supportive, and focused on practical coping strategies. You provide guidance while encouraging professional help when needed.",
      voice: "nova",
    },
    {
      id: 4,
      name: "Marcus Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Career Coach",
      personality:
        "You are Marcus Thompson, an experienced career coach specializing in professional development, resume writing, and interview preparation. Your responses should be motivating and practical, focusing on actionable career advice and modern workplace navigation.",
      voice: "onyx",
    },
    {
      id: 5,
      name: "Dr. Lisa Wong",
      avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      description: "Health & Wellness Expert",
      personality:
        "You are Dr. Lisa Wong, a health and wellness expert with knowledge in nutrition, fitness, and preventive health. Your responses should be evidence-based and practical, helping people develop healthy lifestyle habits while addressing common health concerns.",
      voice: "nova",
    },
    {
      id: 6,
      name: "David Parker",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      description: "Legal Consultant",
      personality:
        "You are David Parker, a legal consultant specializing in common legal issues, consumer rights, and basic legal procedures. Your responses should simplify legal concepts and provide general guidance while emphasizing when professional legal counsel is necessary.",
      voice: "onyx",
    },
    {
      id: 7,
      name: "Maria Rodriguez",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      description: "Small Business Advisor",
      personality:
        "You are Maria Rodriguez, a small business advisor with expertise in entrepreneurship, business planning, and marketing strategies. Your responses should be practical and actionable, helping aspiring and current business owners navigate common challenges.",
      voice: "nova",
    },
    {
      id: 8,
      name: "Dr. Michael Chang",
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
      description: "Education Specialist",
      personality:
        "You are Dr. Michael Chang, an education specialist with expertise in learning strategies, academic planning, and educational technology. Your responses should be encouraging and practical, helping students and parents navigate educational challenges and opportunities.",
      voice: "onyx",
    },
  ];
function Vg({
  selectedContact: e,
  onSelectContact: t,
  contacts: n,
  onAddContact: r,
  onDeleteContact: s,
}) {
  const [i, l] = G.useState(!1),
    [o, a] = G.useState(""),
    u = (h) => {
      r(h), l(!1);
    },
    p = Wg.filter((h) => !n.some((y) => y.id === h.id)).filter((h) =>
      h.name.toLowerCase().includes(o.toLowerCase()),
    );
  return _.jsxs("div", {
    className: "h-full flex flex-col",
    children: [
      _.jsxs("div", {
        className: "p-4 border-b border-gray-200",
        children: [
          _.jsx("h2", {
            className: "text-xl font-semibold mb-4",
            children: "Chats",
          }),
          _.jsxs("button", {
            onClick: () => l(!0),
            className:
              "w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",
            children: [
              _.jsx(Ug, { className: "w-5 h-5" }),
              _.jsx("span", { children: "Add New Chat" }),
            ],
          }),
        ],
      }),
      _.jsx("div", {
        className: "flex-1 overflow-y-auto",
        children: n.map((h) =>
          _.jsxs(
            "div",
            {
              className: `flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer ${(e == null ? void 0 : e.id) === h.id ? "bg-blue-50" : ""}`,
              onClick: () => t(h),
              children: [
                _.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    _.jsx("img", {
                      src: h.avatar,
                      alt: h.name,
                      className: "w-12 h-12 rounded-full",
                    }),
                    _.jsxs("div", {
                      children: [
                        _.jsx("h3", {
                          className: "font-medium",
                          children: h.name,
                        }),
                        _.jsx("p", {
                          className: "text-sm text-gray-500",
                          children: h.description,
                        }),
                      ],
                    }),
                  ],
                }),
                _.jsx("button", {
                  onClick: (y) => {
                    y.stopPropagation(), s(h.id);
                  },
                  className:
                    "p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100",
                  children: _.jsx(zg, { className: "w-5 h-5" }),
                }),
              ],
            },
            h.id,
          ),
        ),
      }),
      i &&
        _.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: _.jsxs("div", {
            className:
              "bg-white rounded-lg p-6 w-96 max-h-[80vh] flex flex-col",
            children: [
              _.jsx("h3", {
                className: "text-xl font-semibold mb-4",
                children: "Add New Chat",
              }),
              _.jsxs("div", {
                className: "mb-4 relative",
                children: [
                  _.jsx(jg, {
                    className: "absolute left-3 top-2.5 text-gray-400 w-5 h-5",
                  }),
                  _.jsx("input", {
                    type: "text",
                    placeholder: "Search contacts...",
                    value: o,
                    onChange: (h) => a(h.target.value),
                    className:
                      "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",
                  }),
                ],
              }),
              _.jsx("div", {
                className: "flex-1 overflow-y-auto",
                children: p.map((h) =>
                  _.jsxs(
                    "div",
                    {
                      className:
                        "flex items-center space-x-3 p-3 hover:bg-gray-50 cursor-pointer rounded-lg",
                      onClick: () => u(h),
                      children: [
                        _.jsx("img", {
                          src: h.avatar,
                          alt: h.name,
                          className: "w-12 h-12 rounded-full",
                        }),
                        _.jsxs("div", {
                          children: [
                            _.jsx("h4", {
                              className: "font-medium",
                              children: h.name,
                            }),
                            _.jsx("p", {
                              className: "text-sm text-gray-500",
                              children: h.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    h.id,
                  ),
                ),
              }),
              _.jsx("button", {
                onClick: () => l(!1),
                className:
                  "mt-4 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                children: "Cancel",
              }),
            ],
          }),
        }),
    ],
  });
}
function Hg({ message: e, onAddReaction: t }) {
  const n = e.sender === "user",
    [r, s] = Ki.useState(!1),
    [i, l] = Ki.useState(!1),
    o = Ki.useRef(null),
    a = () => {
      o.current && (r ? o.current.pause() : o.current.play(), s(!r));
    },
    u = () => {
      s(!1);
    };
  return _.jsxs(_.Fragment, {
    children: [
      _.jsx("div", {
        className: `flex ${n ? "justify-end" : "justify-start"} animate-fade-in-up`,
        children: _.jsxs("div", {
          className: `max-w-[70%] rounded-lg p-3 ${n ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`,
          children: [
            n && _.jsx("p", { className: "mb-2", children: e.text }),
            _.jsxs("div", {
              className: "flex items-center space-x-2",
              children: [
                e.audioUrl &&
                  _.jsxs(_.Fragment, {
                    children: [
                      _.jsx("audio", {
                        ref: o,
                        src: e.audioUrl,
                        onEnded: u,
                        className: "hidden",
                      }),
                      _.jsx("button", {
                        onClick: a,
                        className: `flex items-center space-x-2 px-3 py-1 rounded-full ${n ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 hover:bg-gray-400"}`,
                        children: r
                          ? _.jsx(Mg, { className: "w-4 h-4" })
                          : _.jsx(Lg, { className: "w-4 h-4" }),
                      }),
                      !n &&
                        e.text &&
                        _.jsx("button", {
                          onClick: () => l(!0),
                          className:
                            "p-1 hover:bg-gray-300 rounded-full transition-colors",
                          title: "View text response",
                          children: _.jsx(Tg, { className: "w-4 h-4" }),
                        }),
                    ],
                  }),
                !n &&
                  !e.audioUrl &&
                  _.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      _.jsx(Vd, { className: "w-4 h-4 animate-pulse" }),
                      _.jsx("span", {
                        className: "text-sm",
                        children: "Recording response...",
                      }),
                    ],
                  }),
              ],
            }),
            _.jsx("div", {
              className: "text-xs opacity-70 mt-1",
              children: new Date(e.timestamp).toLocaleTimeString(),
            }),
          ],
        }),
      }),
      i &&
        _.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: _.jsxs("div", {
            className: "bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative",
            children: [
              _.jsx("button", {
                onClick: () => l(!1),
                className:
                  "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full",
                children: _.jsx(Bg, { className: "w-5 h-5" }),
              }),
              _.jsx("h3", {
                className: "text-lg font-semibold mb-4",
                children: "Expert Response",
              }),
              _.jsx("div", {
                className: "prose prose-blue max-w-none",
                children: _.jsx("p", {
                  className: "text-gray-700 whitespace-pre-wrap",
                  children: e.text,
                }),
              }),
            ],
          }),
        }),
    ],
  });
}
function bg({ onRecordingComplete: e }) {
  const [t, n] = G.useState(!1),
    r = G.useRef(null),
    s = G.useRef([]),
    i = async () => {
      try {
        const o = await navigator.mediaDevices.getUserMedia({ audio: !0 }),
          a = new MediaRecorder(o);
        (r.current = a),
          (s.current = []),
          (a.ondataavailable = (u) => {
            u.data.size > 0 && s.current.push(u.data);
          }),
          (a.onstop = () => {
            const u = new Blob(s.current, { type: "audio/mpeg" }),
              m = URL.createObjectURL(u);
            e(u, m), o.getTracks().forEach((p) => p.stop());
          }),
          a.start(),
          n(!0);
      } catch (o) {
        console.error("Error accessing microphone:", o);
      }
    },
    l = () => {
      r.current && t && (r.current.stop(), n(!1));
    };
  return _.jsx("button", {
    onClick: t ? l : i,
    className: `p-2 rounded-full transition-colors ${t ? "bg-red-500 hover:bg-red-600 text-white" : "hover:bg-gray-100"}`,
    children: t
      ? _.jsx(Dg, { className: "w-6 h-6" })
      : _.jsx(Vd, { className: "w-6 h-6" }),
  });
}
function Qg() {
  return _.jsx("div", {
    className:
      "flex-1 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-8",
    children: _.jsxs("div", {
      className: "max-w-2xl text-center",
      children: [
        _.jsx("div", {
          className: "flex justify-center mb-6",
          children: _.jsx("div", {
            className: "bg-blue-500 text-white p-4 rounded-full",
            children: _.jsx(uc, { className: "w-12 h-12" }),
          }),
        }),
        _.jsx("h1", {
          className: "text-4xl font-bold text-gray-900 mb-4",
          children: "Welcome to AskExperts AI",
        }),
        _.jsx("p", {
          className: "text-xl text-gray-600 mb-8",
          children:
            "Your personal gateway to expert advice across multiple fields. Connect with AI-powered specialists for guidance on finance, technology, health, career, and more.",
        }),
        _.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
          children: [
            _.jsxs("div", {
              className:
                "p-6 bg-white rounded-xl shadow-sm border border-gray-100",
              children: [
                _.jsx(Og, { className: "w-8 h-8 text-blue-500 mb-3 mx-auto" }),
                _.jsx("h3", {
                  className: "font-semibold text-gray-900 mb-2",
                  children: "Expert Guidance",
                }),
                _.jsx("p", {
                  className: "text-gray-600",
                  children:
                    "Get professional advice from specialized AI consultants",
                }),
              ],
            }),
            _.jsxs("div", {
              className:
                "p-6 bg-white rounded-xl shadow-sm border border-gray-100",
              children: [
                _.jsx($g, { className: "w-8 h-8 text-blue-500 mb-3 mx-auto" }),
                _.jsx("h3", {
                  className: "font-semibold text-gray-900 mb-2",
                  children: "24/7 Available",
                }),
                _.jsx("p", {
                  className: "text-gray-600",
                  children: "Access instant support whenever you need it",
                }),
              ],
            }),
            _.jsxs("div", {
              className:
                "p-6 bg-white rounded-xl shadow-sm border border-gray-100",
              children: [
                _.jsx(uc, { className: "w-8 h-8 text-blue-500 mb-3 mx-auto" }),
                _.jsx("h3", {
                  className: "font-semibold text-gray-900 mb-2",
                  children: "Smart Insights",
                }),
                _.jsx("p", {
                  className: "text-gray-600",
                  children: "Receive personalized, actionable recommendations",
                }),
              ],
            }),
          ],
        }),
        _.jsx("p", {
          className: "text-gray-600",
          children:
            "Select an expert from the sidebar to start your consultation. Each specialist is equipped with deep knowledge in their field to provide you with reliable guidance.",
        }),
      ],
    }),
  });
}
const ko = "RFC3986",
  Co = {
    RFC1738: (e) => String(e).replace(/%20/g, "+"),
    RFC3986: (e) => String(e),
  },
  Xg = "RFC1738",
  Kg = Array.isArray,
  st = (() => {
    const e = [];
    for (let t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  })(),
  _l = 1024,
  Jg = (e, t, n, r, s) => {
    if (e.length === 0) return e;
    let i = e;
    if (
      (typeof e == "symbol"
        ? (i = Symbol.prototype.toString.call(e))
        : typeof e != "string" && (i = String(e)),
      n === "iso-8859-1")
    )
      return escape(i).replace(/%u[0-9a-f]{4}/gi, function (o) {
        return "%26%23" + parseInt(o.slice(2), 16) + "%3B";
      });
    let l = "";
    for (let o = 0; o < i.length; o += _l) {
      const a = i.length >= _l ? i.slice(o, o + _l) : i,
        u = [];
      for (let m = 0; m < a.length; ++m) {
        let p = a.charCodeAt(m);
        if (
          p === 45 ||
          p === 46 ||
          p === 95 ||
          p === 126 ||
          (p >= 48 && p <= 57) ||
          (p >= 65 && p <= 90) ||
          (p >= 97 && p <= 122) ||
          (s === Xg && (p === 40 || p === 41))
        ) {
          u[u.length] = a.charAt(m);
          continue;
        }
        if (p < 128) {
          u[u.length] = st[p];
          continue;
        }
        if (p < 2048) {
          u[u.length] = st[192 | (p >> 6)] + st[128 | (p & 63)];
          continue;
        }
        if (p < 55296 || p >= 57344) {
          u[u.length] =
            st[224 | (p >> 12)] +
            st[128 | ((p >> 6) & 63)] +
            st[128 | (p & 63)];
          continue;
        }
        (m += 1),
          (p = 65536 + (((p & 1023) << 10) | (a.charCodeAt(m) & 1023))),
          (u[u.length] =
            st[240 | (p >> 18)] +
            st[128 | ((p >> 12) & 63)] +
            st[128 | ((p >> 6) & 63)] +
            st[128 | (p & 63)]);
      }
      l += u.join("");
    }
    return l;
  };
function Yg(e) {
  return !e || typeof e != "object"
    ? !1
    : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function cc(e, t) {
  if (Kg(e)) {
    const n = [];
    for (let r = 0; r < e.length; r += 1) n.push(t(e[r]));
    return n;
  }
  return t(e);
}
const qg = Object.prototype.hasOwnProperty,
  Hd = {
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
  lt = Array.isArray,
  Gg = Array.prototype.push,
  bd = function (e, t) {
    Gg.apply(e, lt(t) ? t : [t]);
  },
  Zg = Date.prototype.toISOString,
  ne = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: Jg,
    encodeValuesOnly: !1,
    format: ko,
    formatter: Co[ko],
    indices: !1,
    serializeDate(e) {
      return Zg.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  };
function ey(e) {
  return (
    typeof e == "string" ||
    typeof e == "number" ||
    typeof e == "boolean" ||
    typeof e == "symbol" ||
    typeof e == "bigint"
  );
}
const xl = {};
function Qd(e, t, n, r, s, i, l, o, a, u, m, p, h, y, w, v, E, d) {
  let c = e,
    f = d,
    g = 0,
    k = !1;
  for (; (f = f.get(xl)) !== void 0 && !k; ) {
    const A = f.get(e);
    if (((g += 1), typeof A < "u")) {
      if (A === g) throw new RangeError("Cyclic object value");
      k = !0;
    }
    typeof f.get(xl) > "u" && (g = 0);
  }
  if (
    (typeof u == "function"
      ? (c = u(t, c))
      : c instanceof Date
        ? (c = h == null ? void 0 : h(c))
        : n === "comma" &&
          lt(c) &&
          (c = cc(c, function (A) {
            return A instanceof Date ? (h == null ? void 0 : h(A)) : A;
          })),
    c === null)
  ) {
    if (i) return a && !v ? a(t, ne.encoder, E, "key", y) : t;
    c = "";
  }
  if (ey(c) || Yg(c)) {
    if (a) {
      const A = v ? t : a(t, ne.encoder, E, "key", y);
      return [
        (w == null ? void 0 : w(A)) +
          "=" +
          (w == null ? void 0 : w(a(c, ne.encoder, E, "value", y))),
      ];
    }
    return [
      (w == null ? void 0 : w(t)) + "=" + (w == null ? void 0 : w(String(c))),
    ];
  }
  const C = [];
  if (typeof c > "u") return C;
  let x;
  if (n === "comma" && lt(c))
    v && a && (c = cc(c, a)),
      (x = [{ value: c.length > 0 ? c.join(",") || null : void 0 }]);
  else if (lt(u)) x = u;
  else {
    const A = Object.keys(c);
    x = m ? A.sort(m) : A;
  }
  const P = o ? String(t).replace(/\./g, "%2E") : String(t),
    T = r && lt(c) && c.length === 1 ? P + "[]" : P;
  if (s && lt(c) && c.length === 0) return T + "[]";
  for (let A = 0; A < x.length; ++A) {
    const M = x[A],
      ze = typeof M == "object" && typeof M.value < "u" ? M.value : c[M];
    if (l && ze === null) continue;
    const ht = p && o ? M.replace(/\./g, "%2E") : M,
      ls = lt(c)
        ? typeof n == "function"
          ? n(T, ht)
          : T
        : T + (p ? "." + ht : "[" + ht + "]");
    d.set(e, g);
    const os = new WeakMap();
    os.set(xl, d),
      bd(
        C,
        Qd(
          ze,
          ls,
          n,
          r,
          s,
          i,
          l,
          o,
          n === "comma" && v && lt(c) ? null : a,
          u,
          m,
          p,
          h,
          y,
          w,
          v,
          E,
          os,
        ),
      );
  }
  return C;
}
function ty(e = ne) {
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
  const t = e.charset || ne.charset;
  if (
    typeof e.charset < "u" &&
    e.charset !== "utf-8" &&
    e.charset !== "iso-8859-1"
  )
    throw new TypeError(
      "The charset option must be either utf-8, iso-8859-1, or undefined",
    );
  let n = ko;
  if (typeof e.format < "u") {
    if (!qg.call(Co, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  const r = Co[n];
  let s = ne.filter;
  (typeof e.filter == "function" || lt(e.filter)) && (s = e.filter);
  let i;
  if (
    (e.arrayFormat && e.arrayFormat in Hd
      ? (i = e.arrayFormat)
      : "indices" in e
        ? (i = e.indices ? "indices" : "repeat")
        : (i = ne.arrayFormat),
    "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
  )
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  const l =
    typeof e.allowDots > "u"
      ? e.encodeDotInKeys
        ? !0
        : ne.allowDots
      : !!e.allowDots;
  return {
    addQueryPrefix:
      typeof e.addQueryPrefix == "boolean"
        ? e.addQueryPrefix
        : ne.addQueryPrefix,
    allowDots: l,
    allowEmptyArrays:
      typeof e.allowEmptyArrays == "boolean"
        ? !!e.allowEmptyArrays
        : ne.allowEmptyArrays,
    arrayFormat: i,
    charset: t,
    charsetSentinel:
      typeof e.charsetSentinel == "boolean"
        ? e.charsetSentinel
        : ne.charsetSentinel,
    commaRoundTrip: !!e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? ne.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : ne.encode,
    encodeDotInKeys:
      typeof e.encodeDotInKeys == "boolean"
        ? e.encodeDotInKeys
        : ne.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : ne.encoder,
    encodeValuesOnly:
      typeof e.encodeValuesOnly == "boolean"
        ? e.encodeValuesOnly
        : ne.encodeValuesOnly,
    filter: s,
    format: n,
    formatter: r,
    serializeDate:
      typeof e.serializeDate == "function" ? e.serializeDate : ne.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : ne.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling:
      typeof e.strictNullHandling == "boolean"
        ? e.strictNullHandling
        : ne.strictNullHandling,
  };
}
function ny(e, t = {}) {
  let n = e;
  const r = ty(t);
  let s, i;
  typeof r.filter == "function"
    ? ((i = r.filter), (n = i("", n)))
    : lt(r.filter) && ((i = r.filter), (s = i));
  const l = [];
  if (typeof n != "object" || n === null) return "";
  const o = Hd[r.arrayFormat],
    a = o === "comma" && r.commaRoundTrip;
  s || (s = Object.keys(n)), r.sort && s.sort(r.sort);
  const u = new WeakMap();
  for (let h = 0; h < s.length; ++h) {
    const y = s[h];
    (r.skipNulls && n[y] === null) ||
      bd(
        l,
        Qd(
          n[y],
          y,
          o,
          a,
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
  const m = l.join(r.delimiter);
  let p = r.addQueryPrefix === !0 ? "?" : "";
  return (
    r.charsetSentinel &&
      (r.charset === "iso-8859-1"
        ? (p += "utf8=%26%2310003%3B&")
        : (p += "utf8=%E2%9C%93&")),
    m.length > 0 ? p + m : ""
  );
}
const yn = "4.70.2";
let fc = !1,
  Ar,
  Xd,
  Kd,
  Eo,
  Jd,
  Yd,
  qd,
  Gd,
  Zd;
function ry(e, t = { auto: !1 }) {
  if (fc)
    throw new Error(
      `you must \`import 'openai/shims/${e.kind}'\` before importing anything else from openai`,
    );
  if (Ar)
    throw new Error(
      `can't \`import 'openai/shims/${e.kind}'\` after \`import 'openai/shims/${Ar}'\``,
    );
  (fc = t.auto),
    (Ar = e.kind),
    (Xd = e.fetch),
    (Kd = e.FormData),
    (Eo = e.File),
    (Jd = e.ReadableStream),
    (Yd = e.getMultipartRequestOptions),
    (qd = e.getDefaultAgent),
    (Gd = e.fileFromPath),
    (Zd = e.isFsReadStream);
}
class sy {
  constructor(t) {
    this.body = t;
  }
  get [Symbol.toStringTag]() {
    return "MultipartBody";
  }
}
function iy({ manuallyImported: e } = {}) {
  const t = e
    ? "You may need to use polyfills"
    : "Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";
  let n, r, s, i;
  try {
    (n = fetch), (r = Request), (s = Response), (i = Headers);
  } catch (l) {
    throw new Error(
      `this environment is missing the following Web Fetch API type: ${l.message}. ${t}`,
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
    getMultipartRequestOptions: async (l, o) => ({ ...o, body: new sy(l) }),
    getDefaultAgent: (l) => {},
    fileFromPath: () => {
      throw new Error(
        "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads",
      );
    },
    isFsReadStream: (l) => !1,
  };
}
Ar || ry(iy(), { auto: !0 });
class F extends Error {}
class he extends F {
  constructor(t, n, r, s) {
    super(`${he.makeMessage(t, n, r)}`),
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
    if (!t) return new Ui({ message: r, cause: No(n) });
    const i = n == null ? void 0 : n.error;
    return t === 400
      ? new eh(t, i, r, s)
      : t === 401
        ? new th(t, i, r, s)
        : t === 403
          ? new nh(t, i, r, s)
          : t === 404
            ? new rh(t, i, r, s)
            : t === 409
              ? new sh(t, i, r, s)
              : t === 422
                ? new ih(t, i, r, s)
                : t === 429
                  ? new lh(t, i, r, s)
                  : t >= 500
                    ? new oh(t, i, r, s)
                    : new he(t, i, r, s);
  }
}
class Ge extends he {
  constructor({ message: t } = {}) {
    super(void 0, void 0, t || "Request was aborted.", void 0),
      (this.status = void 0);
  }
}
class Ui extends he {
  constructor({ message: t, cause: n }) {
    super(void 0, void 0, t || "Connection error.", void 0),
      (this.status = void 0),
      n && (this.cause = n);
  }
}
class Ia extends Ui {
  constructor({ message: t } = {}) {
    super({ message: t ?? "Request timed out." });
  }
}
class eh extends he {
  constructor() {
    super(...arguments), (this.status = 400);
  }
}
class th extends he {
  constructor() {
    super(...arguments), (this.status = 401);
  }
}
class nh extends he {
  constructor() {
    super(...arguments), (this.status = 403);
  }
}
class rh extends he {
  constructor() {
    super(...arguments), (this.status = 404);
  }
}
class sh extends he {
  constructor() {
    super(...arguments), (this.status = 409);
  }
}
class ih extends he {
  constructor() {
    super(...arguments), (this.status = 422);
  }
}
class lh extends he {
  constructor() {
    super(...arguments), (this.status = 429);
  }
}
class oh extends he {}
class ah extends F {
  constructor() {
    super("Could not parse response content as the length limit was reached");
  }
}
class uh extends F {
  constructor() {
    super(
      "Could not parse response content as the request was rejected by the content filter",
    );
  }
}
class cn {
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
    const r = cn.NEWLINE_CHARS.has(n[n.length - 1] || "");
    let s = n.split(cn.NEWLINE_REGEXP);
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
      throw new F(
        `Unexpected: received non-Uint8Array (${t.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`,
      );
    }
    if (typeof TextDecoder < "u") {
      if (t instanceof Uint8Array || t instanceof ArrayBuffer)
        return (
          this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")),
          this.textDecoder.decode(t)
        );
      throw new F(
        `Unexpected: received non-Uint8Array/ArrayBuffer (${t.constructor.name}) in a web platform. Please report this error.`,
      );
    }
    throw new F(
      "Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.",
    );
  }
  flush() {
    if (!this.buffer.length && !this.trailingCR) return [];
    const t = [this.buffer.join("")];
    return (this.buffer = []), (this.trailingCR = !1), t;
  }
}
cn.NEWLINE_CHARS = new Set([
  `
`,
  "\r",
]);
cn.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
class ut {
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
        for await (const l of ly(t, n))
          if (!i) {
            if (l.data.startsWith("[DONE]")) {
              i = !0;
              continue;
            }
            if (l.event === null) {
              let o;
              try {
                o = JSON.parse(l.data);
              } catch (a) {
                throw (
                  (console.error("Could not parse message into JSON:", l.data),
                  console.error("From chunk:", l.raw),
                  a)
                );
              }
              if (o && o.error) throw new he(void 0, o.error, void 0, void 0);
              yield o;
            } else {
              let o;
              try {
                o = JSON.parse(l.data);
              } catch (a) {
                throw (
                  (console.error("Could not parse message into JSON:", l.data),
                  console.error("From chunk:", l.raw),
                  a)
                );
              }
              if (l.event == "error")
                throw new he(void 0, o.error, o.message, void 0);
              yield { event: l.event, data: o };
            }
          }
        i = !0;
      } catch (l) {
        if (l instanceof Error && l.name === "AbortError") return;
        throw l;
      } finally {
        i || n.abort();
      }
    }
    return new ut(s, n);
  }
  static fromReadableStream(t, n) {
    let r = !1;
    async function* s() {
      const l = new cn(),
        o = ch(t);
      for await (const a of o) for (const u of l.decode(a)) yield u;
      for (const a of l.flush()) yield a;
    }
    async function* i() {
      if (r)
        throw new Error(
          "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
        );
      r = !0;
      let l = !1;
      try {
        for await (const o of s()) l || (o && (yield JSON.parse(o)));
        l = !0;
      } catch (o) {
        if (o instanceof Error && o.name === "AbortError") return;
        throw o;
      } finally {
        l || n.abort();
      }
    }
    return new ut(i, n);
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
            const l = r.next();
            t.push(l), n.push(l);
          }
          return i.shift();
        },
      });
    return [
      new ut(() => s(t), this.controller),
      new ut(() => s(n), this.controller),
    ];
  }
  toReadableStream() {
    const t = this;
    let n;
    const r = new TextEncoder();
    return new Jd({
      async start() {
        n = t[Symbol.asyncIterator]();
      },
      async pull(s) {
        try {
          const { value: i, done: l } = await n.next();
          if (l) return s.close();
          const o = r.encode(
            JSON.stringify(i) +
              `
`,
          );
          s.enqueue(o);
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
async function* ly(e, t) {
  if (!e.body)
    throw (
      (t.abort(), new F("Attempted to iterate over a response with no body"))
    );
  const n = new uy(),
    r = new cn(),
    s = ch(e.body);
  for await (const i of oy(s))
    for (const l of r.decode(i)) {
      const o = n.decode(l);
      o && (yield o);
    }
  for (const i of r.flush()) {
    const l = n.decode(i);
    l && (yield l);
  }
}
async function* oy(e) {
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
    for (; (i = ay(t)) !== -1; ) yield t.slice(0, i), (t = t.slice(i));
  }
  t.length > 0 && (yield t);
}
function ay(e) {
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
class uy {
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
    let [n, r, s] = cy(t, ":");
    return (
      s.startsWith(" ") && (s = s.substring(1)),
      n === "event" ? (this.event = s) : n === "data" && this.data.push(s),
      null
    );
  }
}
function cy(e, t) {
  const n = e.indexOf(t);
  return n !== -1
    ? [e.substring(0, n), t, e.substring(n + t.length)]
    : [e, "", ""];
}
function ch(e) {
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
const fh = (e) =>
    e != null &&
    typeof e == "object" &&
    typeof e.url == "string" &&
    typeof e.blob == "function",
  dh = (e) =>
    e != null &&
    typeof e == "object" &&
    typeof e.name == "string" &&
    typeof e.lastModified == "number" &&
    Bi(e),
  Bi = (e) =>
    e != null &&
    typeof e == "object" &&
    typeof e.size == "number" &&
    typeof e.type == "string" &&
    typeof e.text == "function" &&
    typeof e.slice == "function" &&
    typeof e.arrayBuffer == "function",
  fy = (e) => dh(e) || fh(e) || Zd(e);
async function hh(e, t, n) {
  var s;
  if (((e = await e), dh(e))) return e;
  if (fh(e)) {
    const i = await e.blob();
    t || (t = new URL(e.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
    const l = Bi(i) ? [await i.arrayBuffer()] : [i];
    return new Eo(l, t, n);
  }
  const r = await dy(e);
  if ((t || (t = py(e) ?? "unknown_file"), !(n != null && n.type))) {
    const i = (s = r[0]) == null ? void 0 : s.type;
    typeof i == "string" && (n = { ...n, type: i });
  }
  return new Eo(r, t, n);
}
async function dy(e) {
  var n;
  let t = [];
  if (typeof e == "string" || ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
    t.push(e);
  else if (Bi(e)) t.push(await e.arrayBuffer());
  else if (my(e)) for await (const r of e) t.push(r);
  else
    throw new Error(
      `Unexpected data type: ${typeof e}; constructor: ${(n = e == null ? void 0 : e.constructor) == null ? void 0 : n.name}; props: ${hy(e)}`,
    );
  return t;
}
function hy(e) {
  return `[${Object.getOwnPropertyNames(e)
    .map((n) => `"${n}"`)
    .join(", ")}]`;
}
function py(e) {
  var t;
  return (
    Sl(e.name) ||
    Sl(e.filename) ||
    ((t = Sl(e.path)) == null ? void 0 : t.split(/[\\/]/).pop())
  );
}
const Sl = (e) => {
    if (typeof e == "string") return e;
    if (typeof Buffer < "u" && e instanceof Buffer) return String(e);
  },
  my = (e) =>
    e != null &&
    typeof e == "object" &&
    typeof e[Symbol.asyncIterator] == "function",
  dc = (e) =>
    e &&
    typeof e == "object" &&
    e.body &&
    e[Symbol.toStringTag] === "MultipartBody",
  Jn = async (e) => {
    const t = await gy(e.body);
    return Yd(t, e);
  },
  gy = async (e) => {
    const t = new Kd();
    return (
      await Promise.all(Object.entries(e || {}).map(([n, r]) => Po(t, n, r))), t
    );
  },
  Po = async (e, t, n) => {
    if (n !== void 0) {
      if (n == null)
        throw new TypeError(
          `Received null for "${t}"; to pass null in FormData, you must use the string 'null'`,
        );
      if (typeof n == "string" || typeof n == "number" || typeof n == "boolean")
        e.append(t, String(n));
      else if (fy(n)) {
        const r = await hh(n);
        e.append(t, r);
      } else if (Array.isArray(n))
        await Promise.all(n.map((r) => Po(e, t + "[]", r)));
      else if (typeof n == "object")
        await Promise.all(
          Object.entries(n).map(([r, s]) => Po(e, `${t}[${r}]`, s)),
        );
      else
        throw new TypeError(
          `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`,
        );
    }
  };
var Dn = {},
  yy = function (e, t, n, r, s) {
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return t.set(e, n), n;
  },
  vy = function (e, t, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  Ns;
async function ph(e) {
  const { response: t } = e;
  if (e.options.stream)
    return (
      zn("response", t.status, t.url, t.headers, t.body),
      e.options.__streamClass
        ? e.options.__streamClass.fromSSEResponse(t, e.controller)
        : ut.fromSSEResponse(t, e.controller)
    );
  if (t.status === 204) return null;
  if (e.options.__binaryResponse) return t;
  const n = t.headers.get("content-type");
  if (
    (n == null ? void 0 : n.includes("application/json")) ||
    (n == null ? void 0 : n.includes("application/vnd.api+json"))
  ) {
    const i = await t.json();
    return zn("response", t.status, t.url, t.headers, i), mh(i, t);
  }
  const s = await t.text();
  return zn("response", t.status, t.url, t.headers, s), s;
}
function mh(e, t) {
  return !e || typeof e != "object" || Array.isArray(e)
    ? e
    : Object.defineProperty(e, "_request_id", {
        value: t.headers.get("x-request-id"),
        enumerable: !1,
      });
}
class Wi extends Promise {
  constructor(t, n = ph) {
    super((r) => {
      r(null);
    }),
      (this.responsePromise = t),
      (this.parseResponse = n);
  }
  _thenUnwrap(t) {
    return new Wi(this.responsePromise, async (n) =>
      mh(t(await this.parseResponse(n), n), n.response),
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
class wy {
  constructor({
    baseURL: t,
    maxRetries: n = 2,
    timeout: r = 6e5,
    httpAgent: s,
    fetch: i,
  }) {
    (this.baseURL = t),
      (this.maxRetries = kl("maxRetries", n)),
      (this.timeout = kl("timeout", r)),
      (this.httpAgent = s),
      (this.fetch = i ?? Xd);
  }
  authHeaders(t) {
    return {};
  }
  defaultHeaders(t) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": this.getUserAgent(),
      ...Ey(),
      ...this.authHeaders(t),
    };
  }
  validateHeaders(t, n) {}
  defaultIdempotencyKey() {
    return `stainless-node-retry-${Ay()}`;
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
          s && Bi(s == null ? void 0 : s.body)
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
    const { method: r, path: s, query: i, headers: l = {} } = t,
      o =
        ArrayBuffer.isView(t.body) ||
        (t.__binaryRequest && typeof t.body == "string")
          ? t.body
          : dc(t.body)
            ? t.body.body
            : t.body
              ? JSON.stringify(t.body, null, 2)
              : null,
      a = this.calculateContentLength(o),
      u = this.buildURL(s, i);
    "timeout" in t && kl("timeout", t.timeout);
    const m = t.timeout ?? this.timeout,
      p = t.httpAgent ?? this.httpAgent ?? qd(u),
      h = m + 1e3;
    typeof ((v = p == null ? void 0 : p.options) == null
      ? void 0
      : v.timeout) == "number" &&
      h > (p.options.timeout ?? 0) &&
      (p.options.timeout = h),
      this.idempotencyHeader &&
        r !== "get" &&
        (t.idempotencyKey || (t.idempotencyKey = this.defaultIdempotencyKey()),
        (l[this.idempotencyHeader] = t.idempotencyKey));
    const y = this.buildHeaders({
      options: t,
      headers: l,
      contentLength: a,
      retryCount: n,
    });
    return {
      req: {
        method: r,
        ...(o && { body: o }),
        headers: y,
        ...(p && { agent: p }),
        signal: t.signal ?? null,
      },
      url: u,
      timeout: m,
    };
  }
  buildHeaders({ options: t, headers: n, contentLength: r, retryCount: s }) {
    const i = {};
    r && (i["content-length"] = r);
    const l = this.defaultHeaders(t);
    return (
      gc(i, l),
      gc(i, n),
      dc(t.body) && Ar !== "node" && delete i["content-type"],
      yc(l, "x-stainless-retry-count") === void 0 &&
        yc(n, "x-stainless-retry-count") === void 0 &&
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
    return he.generate(t, n, r, s);
  }
  request(t, n = null) {
    return new Wi(this.makeRequest(t, n));
  }
  async makeRequest(t, n) {
    var p, h;
    const r = await t,
      s = r.maxRetries ?? this.maxRetries;
    n == null && (n = s), await this.prepareOptions(r);
    const {
      req: i,
      url: l,
      timeout: o,
    } = this.buildRequest(r, { retryCount: s - n });
    if (
      (await this.prepareRequest(i, { url: l, options: r }),
      zn("request", l, r, i.headers),
      (p = r.signal) != null && p.aborted)
    )
      throw new Ge();
    const a = new AbortController(),
      u = await this.fetchWithTimeout(l, i, o, a).catch(No);
    if (u instanceof Error) {
      if ((h = r.signal) != null && h.aborted) throw new Ge();
      if (n) return this.retryRequest(r, n);
      throw u.name === "AbortError" ? new Ia() : new Ui({ cause: u });
    }
    const m = xy(u.headers);
    if (!u.ok) {
      if (n && this.shouldRetry(u)) {
        const c = `retrying, ${n} attempts remaining`;
        return (
          zn(`response (error; ${c})`, u.status, l, m),
          this.retryRequest(r, n, m)
        );
      }
      const y = await u.text().catch((c) => No(c).message),
        w = Py(y),
        v = w ? void 0 : y;
      throw (
        (zn(
          `response (error; ${n ? "(error; no more retries left)" : "(error; not retryable)"})`,
          u.status,
          l,
          m,
          v,
        ),
        this.makeStatusError(u.status, w, v, m))
      );
    }
    return { response: u, options: r, controller: a };
  }
  requestAPIList(t, n) {
    const r = this.makeRequest(n, null);
    return new _y(this, r, t);
  }
  buildURL(t, n) {
    const r = Ry(t)
        ? new URL(t)
        : new URL(
            this.baseURL +
              (this.baseURL.endsWith("/") && t.startsWith("/")
                ? t.slice(1)
                : t),
          ),
      s = this.defaultQuery();
    return (
      yh(s) || (n = { ...s, ...n }),
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
        throw new F(
          `Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join("&");
  }
  async fetchWithTimeout(t, n, r, s) {
    const { signal: i, ...l } = n || {};
    i && i.addEventListener("abort", () => s.abort());
    const o = setTimeout(() => s.abort(), r);
    return this.getRequestClient()
      .fetch.call(void 0, t, { signal: s.signal, ...l })
      .finally(() => {
        clearTimeout(o);
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
      const o = parseFloat(i);
      Number.isNaN(o) || (s = o);
    }
    const l = r == null ? void 0 : r["retry-after"];
    if (l && !s) {
      const o = parseFloat(l);
      Number.isNaN(o) ? (s = Date.parse(l) - Date.now()) : (s = o * 1e3);
    }
    if (!(s && 0 <= s && s < 60 * 1e3)) {
      const o = t.maxRetries ?? this.maxRetries;
      s = this.calculateDefaultRetryTimeoutMillis(n, o);
    }
    return await ts(s), this.makeRequest(t, n - 1);
  }
  calculateDefaultRetryTimeoutMillis(t, n) {
    const i = n - t,
      l = Math.min(0.5 * Math.pow(2, i), 8),
      o = 1 - Math.random() * 0.25;
    return l * o * 1e3;
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${yn}`;
  }
}
class gh {
  constructor(t, n, r, s) {
    Ns.set(this, void 0),
      yy(this, Ns, t),
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
      throw new F(
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
    return await vy(this, Ns, "f").requestAPIList(this.constructor, n);
  }
  async *iterPages() {
    let t = this;
    for (yield t; t.hasNextPage(); ) (t = await t.getNextPage()), yield t;
  }
  async *[((Ns = new WeakMap()), Symbol.asyncIterator)]() {
    for await (const t of this.iterPages())
      for (const n of t.getPaginatedItems()) yield n;
  }
}
class _y extends Wi {
  constructor(t, n, r) {
    super(n, async (s) => new r(t, s.response, await ph(s), s.options));
  }
  async *[Symbol.asyncIterator]() {
    const t = await this;
    for await (const n of t) yield n;
  }
}
const xy = (e) =>
    new Proxy(Object.fromEntries(e.entries()), {
      get(t, n) {
        const r = n.toString();
        return t[r.toLowerCase()] || t[r];
      },
    }),
  Sy = {
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
  Ae = (e) =>
    typeof e == "object" &&
    e !== null &&
    !yh(e) &&
    Object.keys(e).every((t) => vh(Sy, t)),
  ky = () => {
    var t;
    if (typeof Deno < "u" && Deno.build != null)
      return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": yn,
        "X-Stainless-OS": pc(Deno.build.os),
        "X-Stainless-Arch": hc(Deno.build.arch),
        "X-Stainless-Runtime": "deno",
        "X-Stainless-Runtime-Version":
          typeof Deno.version == "string"
            ? Deno.version
            : (((t = Deno.version) == null ? void 0 : t.deno) ?? "unknown"),
      };
    if (typeof EdgeRuntime < "u")
      return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": yn,
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
        "X-Stainless-Package-Version": yn,
        "X-Stainless-OS": pc(process.platform),
        "X-Stainless-Arch": hc(process.arch),
        "X-Stainless-Runtime": "node",
        "X-Stainless-Runtime-Version": process.version,
      };
    const e = Cy();
    return e
      ? {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": yn,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": "unknown",
          "X-Stainless-Runtime": `browser:${e.browser}`,
          "X-Stainless-Runtime-Version": e.version,
        }
      : {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": yn,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": "unknown",
          "X-Stainless-Runtime": "unknown",
          "X-Stainless-Runtime-Version": "unknown",
        };
  };
function Cy() {
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
        l = r[3] || 0;
      return { browser: t, version: `${s}.${i}.${l}` };
    }
  }
  return null;
}
const hc = (e) =>
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
  pc = (e) => (
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
let mc;
const Ey = () => mc ?? (mc = ky()),
  Py = (e) => {
    try {
      return JSON.parse(e);
    } catch {
      return;
    }
  },
  Ny = new RegExp("^(?:[a-z]+:)?//", "i"),
  Ry = (e) => Ny.test(e),
  ts = (e) => new Promise((t) => setTimeout(t, e)),
  kl = (e, t) => {
    if (typeof t != "number" || !Number.isInteger(t))
      throw new F(`${e} must be an integer`);
    if (t < 0) throw new F(`${e} must be a positive integer`);
    return t;
  },
  No = (e) => {
    if (e instanceof Error) return e;
    if (typeof e == "object" && e !== null)
      try {
        return new Error(JSON.stringify(e));
      } catch {}
    return new Error(e);
  },
  Rs = (e) => {
    var t, n, r, s;
    if (typeof process < "u")
      return (
        ((t = Dn == null ? void 0 : Dn[e]) == null ? void 0 : t.trim()) ??
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
function yh(e) {
  if (!e) return !0;
  for (const t in e) return !1;
  return !0;
}
function vh(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gc(e, t) {
  for (const n in t) {
    if (!vh(t, n)) continue;
    const r = n.toLowerCase();
    if (!r) continue;
    const s = t[n];
    s === null ? delete e[r] : s !== void 0 && (e[r] = s);
  }
}
function zn(e, ...t) {
  typeof process < "u" &&
    (Dn == null ? void 0 : Dn.DEBUG) === "true" &&
    console.log(`OpenAI:DEBUG:${e}`, ...t);
}
const Ay = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
      const t = (Math.random() * 16) | 0;
      return (e === "x" ? t : (t & 3) | 8).toString(16);
    }),
  Iy = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof navigator < "u",
  Ty = (e) => typeof (e == null ? void 0 : e.get) == "function",
  yc = (e, t) => {
    var r;
    const n = t.toLowerCase();
    if (Ty(e)) {
      const s =
        ((r = t[0]) == null ? void 0 : r.toUpperCase()) +
        t
          .substring(1)
          .replace(/([^\w])(\w)/g, (i, l, o) => l + o.toUpperCase());
      for (const i of [t, n, t.toUpperCase(), s]) {
        const l = e.get(i);
        if (l) return l;
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
function Cl(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
class wh extends gh {
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
class dt extends gh {
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
class U {
  constructor(t) {
    this._client = t;
  }
}
let _h = class extends U {
    create(t, n) {
      return this._client.post("/chat/completions", {
        body: t,
        ...n,
        stream: t.stream ?? !1,
      });
    }
  },
  Ta = class extends U {
    constructor() {
      super(...arguments), (this.completions = new _h(this._client));
    }
  };
Ta.Completions = _h;
class xh extends U {
  create(t, n) {
    return this._client.post("/audio/speech", {
      body: t,
      ...n,
      __binaryResponse: !0,
    });
  }
}
class Sh extends U {
  create(t, n) {
    return this._client.post("/audio/transcriptions", Jn({ body: t, ...n }));
  }
}
class kh extends U {
  create(t, n) {
    return this._client.post("/audio/translations", Jn({ body: t, ...n }));
  }
}
class ns extends U {
  constructor() {
    super(...arguments),
      (this.transcriptions = new Sh(this._client)),
      (this.translations = new kh(this._client)),
      (this.speech = new xh(this._client));
  }
}
ns.Transcriptions = Sh;
ns.Translations = kh;
ns.Speech = xh;
class Oa extends U {
  create(t, n) {
    return this._client.post("/batches", { body: t, ...n });
  }
  retrieve(t, n) {
    return this._client.get(`/batches/${t}`, n);
  }
  list(t = {}, n) {
    return Ae(t)
      ? this.list({}, t)
      : this._client.getAPIList("/batches", Ma, { query: t, ...n });
  }
  cancel(t, n) {
    return this._client.post(`/batches/${t}/cancel`, n);
  }
}
class Ma extends dt {}
Oa.BatchesPage = Ma;
class La extends U {
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
    return Ae(t)
      ? this.list({}, t)
      : this._client.getAPIList("/assistants", ja, {
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
class ja extends dt {}
La.AssistantsPage = ja;
function vc(e) {
  return typeof e.parse == "function";
}
const Un = (e) => (e == null ? void 0 : e.role) === "assistant",
  Ch = (e) => (e == null ? void 0 : e.role) === "function",
  Eh = (e) => (e == null ? void 0 : e.role) === "tool";
var Xe = function (e, t, n, r, s) {
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
  Ro,
  Hs,
  bs,
  pr,
  mr,
  Qs,
  gr,
  mt,
  yr,
  _i,
  xi,
  vn,
  Ph;
class Nh {
  constructor() {
    Ro.add(this),
      (this.controller = new AbortController()),
      Hs.set(this, void 0),
      bs.set(this, () => {}),
      pr.set(this, () => {}),
      mr.set(this, void 0),
      Qs.set(this, () => {}),
      gr.set(this, () => {}),
      mt.set(this, {}),
      yr.set(this, !1),
      _i.set(this, !1),
      xi.set(this, !1),
      vn.set(this, !1),
      Xe(
        this,
        Hs,
        new Promise((t, n) => {
          Xe(this, bs, t, "f"), Xe(this, pr, n, "f");
        }),
        "f",
      ),
      Xe(
        this,
        mr,
        new Promise((t, n) => {
          Xe(this, Qs, t, "f"), Xe(this, gr, n, "f");
        }),
        "f",
      ),
      Q(this, Hs, "f").catch(() => {}),
      Q(this, mr, "f").catch(() => {});
  }
  _run(t) {
    setTimeout(() => {
      t().then(
        () => {
          this._emitFinal(), this._emit("end");
        },
        Q(this, Ro, "m", Ph).bind(this),
      );
    }, 0);
  }
  _connected() {
    this.ended || (Q(this, bs, "f").call(this), this._emit("connect"));
  }
  get ended() {
    return Q(this, yr, "f");
  }
  get errored() {
    return Q(this, _i, "f");
  }
  get aborted() {
    return Q(this, xi, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(t, n) {
    return (
      (Q(this, mt, "f")[t] || (Q(this, mt, "f")[t] = [])).push({ listener: n }),
      this
    );
  }
  off(t, n) {
    const r = Q(this, mt, "f")[t];
    if (!r) return this;
    const s = r.findIndex((i) => i.listener === n);
    return s >= 0 && r.splice(s, 1), this;
  }
  once(t, n) {
    return (
      (Q(this, mt, "f")[t] || (Q(this, mt, "f")[t] = [])).push({
        listener: n,
        once: !0,
      }),
      this
    );
  }
  emitted(t) {
    return new Promise((n, r) => {
      Xe(this, vn, !0, "f"),
        t !== "error" && this.once("error", r),
        this.once(t, n);
    });
  }
  async done() {
    Xe(this, vn, !0, "f"), await Q(this, mr, "f");
  }
  _emit(t, ...n) {
    if (Q(this, yr, "f")) return;
    t === "end" && (Xe(this, yr, !0, "f"), Q(this, Qs, "f").call(this));
    const r = Q(this, mt, "f")[t];
    if (
      (r &&
        ((Q(this, mt, "f")[t] = r.filter((s) => !s.once)),
        r.forEach(({ listener: s }) => s(...n))),
      t === "abort")
    ) {
      const s = n[0];
      !Q(this, vn, "f") && !(r != null && r.length) && Promise.reject(s),
        Q(this, pr, "f").call(this, s),
        Q(this, gr, "f").call(this, s),
        this._emit("end");
      return;
    }
    if (t === "error") {
      const s = n[0];
      !Q(this, vn, "f") && !(r != null && r.length) && Promise.reject(s),
        Q(this, pr, "f").call(this, s),
        Q(this, gr, "f").call(this, s),
        this._emit("end");
    }
  }
  _emitFinal() {}
}
(Hs = new WeakMap()),
  (bs = new WeakMap()),
  (pr = new WeakMap()),
  (mr = new WeakMap()),
  (Qs = new WeakMap()),
  (gr = new WeakMap()),
  (mt = new WeakMap()),
  (yr = new WeakMap()),
  (_i = new WeakMap()),
  (xi = new WeakMap()),
  (vn = new WeakMap()),
  (Ro = new WeakSet()),
  (Ph = function (t) {
    if (
      (Xe(this, _i, !0, "f"),
      t instanceof Error && t.name === "AbortError" && (t = new Ge()),
      t instanceof Ge)
    )
      return Xe(this, xi, !0, "f"), this._emit("abort", t);
    if (t instanceof F) return this._emit("error", t);
    if (t instanceof Error) {
      const n = new F(t.message);
      return (n.cause = t), this._emit("error", n);
    }
    return this._emit("error", new F(String(t)));
  });
function Rh(e) {
  return (e == null ? void 0 : e.$brand) === "auto-parseable-response-format";
}
function rs(e) {
  return (e == null ? void 0 : e.$brand) === "auto-parseable-tool";
}
function Oy(e, t) {
  return !t || !Ah(t)
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
    : Fa(e, t);
}
function Fa(e, t) {
  const n = e.choices.map((r) => {
    var s;
    if (r.finish_reason === "length") throw new ah();
    if (r.finish_reason === "content_filter") throw new uh();
    return {
      ...r,
      message: {
        ...r.message,
        tool_calls:
          ((s = r.message.tool_calls) == null
            ? void 0
            : s.map((i) => Ly(t, i))) ?? [],
        parsed:
          r.message.content && !r.message.refusal
            ? My(t, r.message.content)
            : null,
      },
    };
  });
  return { ...e, choices: n };
}
function My(e, t) {
  var n, r;
  return ((n = e.response_format) == null ? void 0 : n.type) !== "json_schema"
    ? null
    : ((r = e.response_format) == null ? void 0 : r.type) === "json_schema"
      ? "$parseRaw" in e.response_format
        ? e.response_format.$parseRaw(t)
        : JSON.parse(t)
      : null;
}
function Ly(e, t) {
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
      parsed_arguments: rs(n)
        ? n.$parseRaw(t.function.arguments)
        : n != null && n.function.strict
          ? JSON.parse(t.function.arguments)
          : null,
    },
  };
}
function jy(e, t) {
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
  return rs(n) || (n == null ? void 0 : n.function.strict) || !1;
}
function Ah(e) {
  var t;
  return Rh(e.response_format)
    ? !0
    : (((t = e.tools) == null
        ? void 0
        : t.some(
            (n) => rs(n) || (n.type === "function" && n.function.strict === !0),
          )) ?? !1);
}
function Fy(e) {
  for (const t of e ?? []) {
    if (t.type !== "function")
      throw new F(
        `Currently only \`function\` tool types support auto-parsing; Received \`${t.type}\``,
      );
    if (t.function.strict !== !0)
      throw new F(
        `The \`${t.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`,
      );
  }
}
var ke = function (e, t, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  ge,
  Ao,
  Si,
  Io,
  To,
  Oo,
  Ih,
  Mo;
const wc = 10;
class Th extends Nh {
  constructor() {
    super(...arguments),
      ge.add(this),
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
      if ((this._emit("message", t), (Ch(t) || Eh(t)) && t.content))
        this._emit("functionCallResult", t.content);
      else if (Un(t) && t.function_call)
        this._emit("functionCall", t.function_call);
      else if (Un(t) && t.tool_calls)
        for (const r of t.tool_calls)
          r.type === "function" && this._emit("functionCall", r.function);
    }
  }
  async finalChatCompletion() {
    await this.done();
    const t = this._chatCompletions[this._chatCompletions.length - 1];
    if (!t) throw new F("stream ended without producing a ChatCompletion");
    return t;
  }
  async finalContent() {
    return await this.done(), ke(this, ge, "m", Ao).call(this);
  }
  async finalMessage() {
    return await this.done(), ke(this, ge, "m", Si).call(this);
  }
  async finalFunctionCall() {
    return await this.done(), ke(this, ge, "m", Io).call(this);
  }
  async finalFunctionCallResult() {
    return await this.done(), ke(this, ge, "m", To).call(this);
  }
  async totalUsage() {
    return await this.done(), ke(this, ge, "m", Oo).call(this);
  }
  allChatCompletions() {
    return [...this._chatCompletions];
  }
  _emitFinal() {
    const t = this._chatCompletions[this._chatCompletions.length - 1];
    t && this._emit("finalChatCompletion", t);
    const n = ke(this, ge, "m", Si).call(this);
    n && this._emit("finalMessage", n);
    const r = ke(this, ge, "m", Ao).call(this);
    r && this._emit("finalContent", r);
    const s = ke(this, ge, "m", Io).call(this);
    s && this._emit("finalFunctionCall", s);
    const i = ke(this, ge, "m", To).call(this);
    i != null && this._emit("finalFunctionCallResult", i),
      this._chatCompletions.some((l) => l.usage) &&
        this._emit("totalUsage", ke(this, ge, "m", Oo).call(this));
  }
  async _createChatCompletion(t, n, r) {
    const s = r == null ? void 0 : r.signal;
    s &&
      (s.aborted && this.controller.abort(),
      s.addEventListener("abort", () => this.controller.abort())),
      ke(this, ge, "m", Ih).call(this, n);
    const i = await t.chat.completions.create(
      { ...n, stream: !1 },
      { ...r, signal: this.controller.signal },
    );
    return this._connected(), this._addChatCompletion(Fa(i, n));
  }
  async _runChatCompletion(t, n, r) {
    for (const s of n.messages) this._addMessage(s, !1);
    return await this._createChatCompletion(t, n, r);
  }
  async _runFunctions(t, n, r) {
    var h;
    const s = "function",
      { function_call: i = "auto", stream: l, ...o } = n,
      a = typeof i != "string" && (i == null ? void 0 : i.name),
      { maxChatCompletions: u = wc } = r || {},
      m = {};
    for (const y of n.functions) m[y.name || y.function.name] = y;
    const p = n.functions.map((y) => ({
      name: y.name || y.function.name,
      parameters: y.parameters,
      description: y.description,
    }));
    for (const y of n.messages) this._addMessage(y, !1);
    for (let y = 0; y < u; ++y) {
      const v =
        (h = (
          await this._createChatCompletion(
            t,
            {
              ...o,
              function_call: i,
              functions: p,
              messages: [...this.messages],
            },
            r,
          )
        ).choices[0]) == null
          ? void 0
          : h.message;
      if (!v) throw new F("missing message in ChatCompletion response");
      if (!v.function_call) return;
      const { name: E, arguments: d } = v.function_call,
        c = m[E];
      if (c) {
        if (a && a !== E) {
          const C = `Invalid function_call: ${JSON.stringify(E)}. ${JSON.stringify(a)} requested. Please try again`;
          this._addMessage({ role: s, name: E, content: C });
          continue;
        }
      } else {
        const C = `Invalid function_call: ${JSON.stringify(E)}. Available options are: ${p.map((x) => JSON.stringify(x.name)).join(", ")}. Please try again`;
        this._addMessage({ role: s, name: E, content: C });
        continue;
      }
      let f;
      try {
        f = vc(c) ? await c.parse(d) : d;
      } catch (C) {
        this._addMessage({
          role: s,
          name: E,
          content: C instanceof Error ? C.message : String(C),
        });
        continue;
      }
      const g = await c.function(f, this),
        k = ke(this, ge, "m", Mo).call(this, g);
      if ((this._addMessage({ role: s, name: E, content: k }), a)) return;
    }
  }
  async _runTools(t, n, r) {
    var y, w, v;
    const s = "tool",
      { tool_choice: i = "auto", stream: l, ...o } = n,
      a =
        typeof i != "string" &&
        ((y = i == null ? void 0 : i.function) == null ? void 0 : y.name),
      { maxChatCompletions: u = wc } = r || {},
      m = n.tools.map((E) => {
        if (rs(E)) {
          if (!E.$callback)
            throw new F(
              "Tool given to `.runTools()` that does not have an associated function",
            );
          return {
            type: "function",
            function: {
              function: E.$callback,
              name: E.function.name,
              description: E.function.description || "",
              parameters: E.function.parameters,
              parse: E.$parseRaw,
              strict: !0,
            },
          };
        }
        return E;
      }),
      p = {};
    for (const E of m)
      E.type === "function" &&
        (p[E.function.name || E.function.function.name] = E.function);
    const h =
      "tools" in n
        ? m.map((E) =>
            E.type === "function"
              ? {
                  type: "function",
                  function: {
                    name: E.function.name || E.function.function.name,
                    parameters: E.function.parameters,
                    description: E.function.description,
                    strict: E.function.strict,
                  },
                }
              : E,
          )
        : void 0;
    for (const E of n.messages) this._addMessage(E, !1);
    for (let E = 0; E < u; ++E) {
      const c =
        (w = (
          await this._createChatCompletion(
            t,
            { ...o, tool_choice: i, tools: h, messages: [...this.messages] },
            r,
          )
        ).choices[0]) == null
          ? void 0
          : w.message;
      if (!c) throw new F("missing message in ChatCompletion response");
      if (!((v = c.tool_calls) != null && v.length)) return;
      for (const f of c.tool_calls) {
        if (f.type !== "function") continue;
        const g = f.id,
          { name: k, arguments: C } = f.function,
          x = p[k];
        if (x) {
          if (a && a !== k) {
            const M = `Invalid tool_call: ${JSON.stringify(k)}. ${JSON.stringify(a)} requested. Please try again`;
            this._addMessage({ role: s, tool_call_id: g, content: M });
            continue;
          }
        } else {
          const M = `Invalid tool_call: ${JSON.stringify(k)}. Available options are: ${Object.keys(
            p,
          )
            .map((ze) => JSON.stringify(ze))
            .join(", ")}. Please try again`;
          this._addMessage({ role: s, tool_call_id: g, content: M });
          continue;
        }
        let P;
        try {
          P = vc(x) ? await x.parse(C) : C;
        } catch (M) {
          const ze = M instanceof Error ? M.message : String(M);
          this._addMessage({ role: s, tool_call_id: g, content: ze });
          continue;
        }
        const T = await x.function(P, this),
          A = ke(this, ge, "m", Mo).call(this, T);
        if ((this._addMessage({ role: s, tool_call_id: g, content: A }), a))
          return;
      }
    }
  }
}
(ge = new WeakSet()),
  (Ao = function () {
    return ke(this, ge, "m", Si).call(this).content ?? null;
  }),
  (Si = function () {
    let t = this.messages.length;
    for (; t-- > 0; ) {
      const n = this.messages[t];
      if (Un(n)) {
        const { function_call: r, ...s } = n,
          i = { ...s, content: n.content ?? null, refusal: n.refusal ?? null };
        return r && (i.function_call = r), i;
      }
    }
    throw new F(
      "stream ended without producing a ChatCompletionMessage with role=assistant",
    );
  }),
  (Io = function () {
    var t, n;
    for (let r = this.messages.length - 1; r >= 0; r--) {
      const s = this.messages[r];
      if (Un(s) && s != null && s.function_call) return s.function_call;
      if (Un(s) && (t = s == null ? void 0 : s.tool_calls) != null && t.length)
        return (n = s.tool_calls.at(-1)) == null ? void 0 : n.function;
    }
  }),
  (To = function () {
    for (let t = this.messages.length - 1; t >= 0; t--) {
      const n = this.messages[t];
      if (
        (Ch(n) && n.content != null) ||
        (Eh(n) &&
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
  (Oo = function () {
    const t = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
    for (const { usage: n } of this._chatCompletions)
      n &&
        ((t.completion_tokens += n.completion_tokens),
        (t.prompt_tokens += n.prompt_tokens),
        (t.total_tokens += n.total_tokens));
    return t;
  }),
  (Ih = function (t) {
    if (t.n != null && t.n > 1)
      throw new F(
        "ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.",
      );
  }),
  (Mo = function (t) {
    return typeof t == "string"
      ? t
      : t === void 0
        ? "undefined"
        : JSON.stringify(t);
  });
class Kr extends Th {
  static runFunctions(t, n, r) {
    const s = new Kr(),
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
    const s = new Kr(),
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
      Un(t) && t.content && this._emit("content", t.content);
  }
}
const Oh = 1,
  Mh = 2,
  Lh = 4,
  jh = 8,
  Fh = 16,
  $h = 32,
  Dh = 64,
  zh = 128,
  Uh = 256,
  Bh = zh | Uh,
  Wh = Fh | $h | Bh | Dh,
  Vh = Oh | Mh | Wh,
  Hh = Lh | jh,
  $y = Vh | Hh,
  le = {
    STR: Oh,
    NUM: Mh,
    ARR: Lh,
    OBJ: jh,
    NULL: Fh,
    BOOL: $h,
    NAN: Dh,
    INFINITY: zh,
    MINUS_INFINITY: Uh,
    INF: Bh,
    SPECIAL: Wh,
    ATOM: Vh,
    COLLECTION: Hh,
    ALL: $y,
  };
class Dy extends Error {}
class zy extends Error {}
function Uy(e, t = le.ALL) {
  if (typeof e != "string")
    throw new TypeError(`expecting str, got ${typeof e}`);
  if (!e.trim()) throw new Error(`${e} is empty`);
  return By(e.trim(), t);
}
const By = (e, t) => {
    const n = e.length;
    let r = 0;
    const s = (h) => {
        throw new Dy(`${h} at position ${r}`);
      },
      i = (h) => {
        throw new zy(`${h} at position ${r}`);
      },
      l = () => (
        p(),
        r >= n && s("Unexpected end of input"),
        e[r] === '"'
          ? o()
          : e[r] === "{"
            ? a()
            : e[r] === "["
              ? u()
              : e.substring(r, r + 4) === "null" ||
                  (le.NULL & t &&
                    n - r < 4 &&
                    "null".startsWith(e.substring(r)))
                ? ((r += 4), null)
                : e.substring(r, r + 4) === "true" ||
                    (le.BOOL & t &&
                      n - r < 4 &&
                      "true".startsWith(e.substring(r)))
                  ? ((r += 4), !0)
                  : e.substring(r, r + 5) === "false" ||
                      (le.BOOL & t &&
                        n - r < 5 &&
                        "false".startsWith(e.substring(r)))
                    ? ((r += 5), !1)
                    : e.substring(r, r + 8) === "Infinity" ||
                        (le.INFINITY & t &&
                          n - r < 8 &&
                          "Infinity".startsWith(e.substring(r)))
                      ? ((r += 8), 1 / 0)
                      : e.substring(r, r + 9) === "-Infinity" ||
                          (le.MINUS_INFINITY & t &&
                            1 < n - r &&
                            n - r < 9 &&
                            "-Infinity".startsWith(e.substring(r)))
                        ? ((r += 9), -1 / 0)
                        : e.substring(r, r + 3) === "NaN" ||
                            (le.NAN & t &&
                              n - r < 3 &&
                              "NaN".startsWith(e.substring(r)))
                          ? ((r += 3), NaN)
                          : m()
      ),
      o = () => {
        const h = r;
        let y = !1;
        for (r++; r < n && (e[r] !== '"' || (y && e[r - 1] === "\\")); )
          (y = e[r] === "\\" ? !y : !1), r++;
        if (e.charAt(r) == '"')
          try {
            return JSON.parse(e.substring(h, ++r - Number(y)));
          } catch (w) {
            i(String(w));
          }
        else if (le.STR & t)
          try {
            return JSON.parse(e.substring(h, r - Number(y)) + '"');
          } catch {
            return JSON.parse(e.substring(h, e.lastIndexOf("\\")) + '"');
          }
        s("Unterminated string literal");
      },
      a = () => {
        r++, p();
        const h = {};
        try {
          for (; e[r] !== "}"; ) {
            if ((p(), r >= n && le.OBJ & t)) return h;
            const y = o();
            p(), r++;
            try {
              const w = l();
              Object.defineProperty(h, y, {
                value: w,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              });
            } catch (w) {
              if (le.OBJ & t) return h;
              throw w;
            }
            p(), e[r] === "," && r++;
          }
        } catch {
          if (le.OBJ & t) return h;
          s("Expected '}' at end of object");
        }
        return r++, h;
      },
      u = () => {
        r++;
        const h = [];
        try {
          for (; e[r] !== "]"; ) h.push(l()), p(), e[r] === "," && r++;
        } catch {
          if (le.ARR & t) return h;
          s("Expected ']' at end of array");
        }
        return r++, h;
      },
      m = () => {
        if (r === 0) {
          e === "-" && le.NUM & t && s("Not sure what '-' is");
          try {
            return JSON.parse(e);
          } catch (y) {
            if (le.NUM & t)
              try {
                return e[e.length - 1] === "."
                  ? JSON.parse(e.substring(0, e.lastIndexOf(".")))
                  : JSON.parse(e.substring(0, e.lastIndexOf("e")));
              } catch {}
            i(String(y));
          }
        }
        const h = r;
        for (e[r] === "-" && r++; e[r] && !",]}".includes(e[r]); ) r++;
        r == n && !(le.NUM & t) && s("Unterminated number literal");
        try {
          return JSON.parse(e.substring(h, r));
        } catch {
          e.substring(h, r) === "-" && le.NUM & t && s("Not sure what '-' is");
          try {
            return JSON.parse(e.substring(h, e.lastIndexOf("e")));
          } catch (w) {
            i(String(w));
          }
        }
      },
      p = () => {
        for (
          ;
          r < n &&
          ` 
\r	`.includes(e[r]);

        )
          r++;
      };
    return l();
  },
  _c = (e) => Uy(e, le.ALL ^ le.NUM);
var mn = function (e, t, n, r, s) {
    if (r === "m") throw new TypeError("Private method is not writable");
    if (r === "a" && !s)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return r === "a" ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n;
  },
  B = function (e, t, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  te,
  pt,
  gn,
  Nt,
  El,
  As,
  Pl,
  Nl,
  Rl,
  Is,
  Al,
  xc;
class Jr extends Th {
  constructor(t) {
    super(),
      te.add(this),
      pt.set(this, void 0),
      gn.set(this, void 0),
      Nt.set(this, void 0),
      mn(this, pt, t, "f"),
      mn(this, gn, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return B(this, Nt, "f");
  }
  static fromReadableStream(t) {
    const n = new Jr(null);
    return n._run(() => n._fromReadableStream(t)), n;
  }
  static createChatCompletion(t, n, r) {
    const s = new Jr(n);
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
    var l;
    super._createChatCompletion;
    const s = r == null ? void 0 : r.signal;
    s &&
      (s.aborted && this.controller.abort(),
      s.addEventListener("abort", () => this.controller.abort())),
      B(this, te, "m", El).call(this);
    const i = await t.chat.completions.create(
      { ...n, stream: !0 },
      { ...r, signal: this.controller.signal },
    );
    this._connected();
    for await (const o of i) B(this, te, "m", Pl).call(this, o);
    if ((l = i.controller.signal) != null && l.aborted) throw new Ge();
    return this._addChatCompletion(B(this, te, "m", Is).call(this));
  }
  async _fromReadableStream(t, n) {
    var l;
    const r = n == null ? void 0 : n.signal;
    r &&
      (r.aborted && this.controller.abort(),
      r.addEventListener("abort", () => this.controller.abort())),
      B(this, te, "m", El).call(this),
      this._connected();
    const s = ut.fromReadableStream(t, this.controller);
    let i;
    for await (const o of s)
      i &&
        i !== o.id &&
        this._addChatCompletion(B(this, te, "m", Is).call(this)),
        B(this, te, "m", Pl).call(this, o),
        (i = o.id);
    if ((l = s.controller.signal) != null && l.aborted) throw new Ge();
    return this._addChatCompletion(B(this, te, "m", Is).call(this));
  }
  [((pt = new WeakMap()),
  (gn = new WeakMap()),
  (Nt = new WeakMap()),
  (te = new WeakSet()),
  (El = function () {
    this.ended || mn(this, Nt, void 0, "f");
  }),
  (As = function (n) {
    let r = B(this, gn, "f")[n.index];
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
      (B(this, gn, "f")[n.index] = r),
      r)
    );
  }),
  (Pl = function (n) {
    var s, i, l, o, a, u, m, p, h, y, w, v, E, d, c;
    if (this.ended) return;
    const r = B(this, te, "m", xc).call(this, n);
    this._emit("chunk", n, r);
    for (const f of n.choices) {
      const g = r.choices[f.index];
      f.delta.content != null &&
        ((s = g.message) == null ? void 0 : s.role) === "assistant" &&
        (i = g.message) != null &&
        i.content &&
        (this._emit("content", f.delta.content, g.message.content),
        this._emit("content.delta", {
          delta: f.delta.content,
          snapshot: g.message.content,
          parsed: g.message.parsed,
        })),
        f.delta.refusal != null &&
          ((l = g.message) == null ? void 0 : l.role) === "assistant" &&
          (o = g.message) != null &&
          o.refusal &&
          this._emit("refusal.delta", {
            delta: f.delta.refusal,
            snapshot: g.message.refusal,
          }),
        ((a = f.logprobs) == null ? void 0 : a.content) != null &&
          ((u = g.message) == null ? void 0 : u.role) === "assistant" &&
          this._emit("logprobs.content.delta", {
            content: (m = f.logprobs) == null ? void 0 : m.content,
            snapshot: ((p = g.logprobs) == null ? void 0 : p.content) ?? [],
          }),
        ((h = f.logprobs) == null ? void 0 : h.refusal) != null &&
          ((y = g.message) == null ? void 0 : y.role) === "assistant" &&
          this._emit("logprobs.refusal.delta", {
            refusal: (w = f.logprobs) == null ? void 0 : w.refusal,
            snapshot: ((v = g.logprobs) == null ? void 0 : v.refusal) ?? [],
          });
      const k = B(this, te, "m", As).call(this, g);
      g.finish_reason &&
        (B(this, te, "m", Rl).call(this, g),
        k.current_tool_call_index != null &&
          B(this, te, "m", Nl).call(this, g, k.current_tool_call_index));
      for (const C of f.delta.tool_calls ?? [])
        k.current_tool_call_index !== C.index &&
          (B(this, te, "m", Rl).call(this, g),
          k.current_tool_call_index != null &&
            B(this, te, "m", Nl).call(this, g, k.current_tool_call_index)),
          (k.current_tool_call_index = C.index);
      for (const C of f.delta.tool_calls ?? []) {
        const x = (E = g.message.tool_calls) == null ? void 0 : E[C.index];
        x != null &&
          x.type &&
          ((x == null ? void 0 : x.type) === "function"
            ? this._emit("tool_calls.function.arguments.delta", {
                name: (d = x.function) == null ? void 0 : d.name,
                index: C.index,
                arguments: x.function.arguments,
                parsed_arguments: x.function.parsed_arguments,
                arguments_delta:
                  ((c = C.function) == null ? void 0 : c.arguments) ?? "",
              })
            : (x == null || x.type, void 0));
      }
    }
  }),
  (Nl = function (n, r) {
    var l, o, a;
    if (B(this, te, "m", As).call(this, n).done_tool_calls.has(r)) return;
    const i = (l = n.message.tool_calls) == null ? void 0 : l[r];
    if (!i) throw new Error("no tool call snapshot");
    if (!i.type) throw new Error("tool call snapshot missing `type`");
    if (i.type === "function") {
      const u =
        (a = (o = B(this, pt, "f")) == null ? void 0 : o.tools) == null
          ? void 0
          : a.find(
              (m) =>
                m.type === "function" && m.function.name === i.function.name,
            );
      this._emit("tool_calls.function.arguments.done", {
        name: i.function.name,
        index: r,
        arguments: i.function.arguments,
        parsed_arguments: rs(u)
          ? u.$parseRaw(i.function.arguments)
          : u != null && u.function.strict
            ? JSON.parse(i.function.arguments)
            : null,
      });
    } else i.type;
  }),
  (Rl = function (n) {
    var s, i;
    const r = B(this, te, "m", As).call(this, n);
    if (n.message.content && !r.content_done) {
      r.content_done = !0;
      const l = B(this, te, "m", Al).call(this);
      this._emit("content.done", {
        content: n.message.content,
        parsed: l ? l.$parseRaw(n.message.content) : null,
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
  (Is = function () {
    if (this.ended) throw new F("stream has ended, this shouldn't happen");
    const n = B(this, Nt, "f");
    if (!n) throw new F("request ended without sending any chunks");
    return (
      mn(this, Nt, void 0, "f"), mn(this, gn, [], "f"), Wy(n, B(this, pt, "f"))
    );
  }),
  (Al = function () {
    var r;
    const n = (r = B(this, pt, "f")) == null ? void 0 : r.response_format;
    return Rh(n) ? n : null;
  }),
  (xc = function (n) {
    var r, s, i, l;
    let o = B(this, Nt, "f");
    const { choices: a, ...u } = n;
    o ? Object.assign(o, u) : (o = mn(this, Nt, { ...u, choices: [] }, "f"));
    for (const {
      delta: m,
      finish_reason: p,
      index: h,
      logprobs: y = null,
      ...w
    } of n.choices) {
      let v = o.choices[h];
      if (
        (v ||
          (v = o.choices[h] =
            { finish_reason: p, index: h, message: {}, logprobs: y, ...w }),
        y)
      )
        if (!v.logprobs) v.logprobs = Object.assign({}, y);
        else {
          const { content: C, refusal: x, ...P } = y;
          Object.assign(v.logprobs, P),
            C &&
              ((r = v.logprobs).content ?? (r.content = []),
              v.logprobs.content.push(...C)),
            x &&
              ((s = v.logprobs).refusal ?? (s.refusal = []),
              v.logprobs.refusal.push(...x));
        }
      if (
        p &&
        ((v.finish_reason = p), B(this, pt, "f") && Ah(B(this, pt, "f")))
      ) {
        if (p === "length") throw new ah();
        if (p === "content_filter") throw new uh();
      }
      if ((Object.assign(v, w), !m)) continue;
      const {
        content: E,
        refusal: d,
        function_call: c,
        role: f,
        tool_calls: g,
        ...k
      } = m;
      if (
        (Object.assign(v.message, k),
        d && (v.message.refusal = (v.message.refusal || "") + d),
        f && (v.message.role = f),
        c &&
          (v.message.function_call
            ? (c.name && (v.message.function_call.name = c.name),
              c.arguments &&
                ((i = v.message.function_call).arguments ?? (i.arguments = ""),
                (v.message.function_call.arguments += c.arguments)))
            : (v.message.function_call = c)),
        E &&
          ((v.message.content = (v.message.content || "") + E),
          !v.message.refusal &&
            B(this, te, "m", Al).call(this) &&
            (v.message.parsed = _c(v.message.content))),
        g)
      ) {
        v.message.tool_calls || (v.message.tool_calls = []);
        for (const { index: C, id: x, type: P, function: T, ...A } of g) {
          const M = (l = v.message.tool_calls)[C] ?? (l[C] = {});
          Object.assign(M, A),
            x && (M.id = x),
            P && (M.type = P),
            T &&
              (M.function ??
                (M.function = { name: T.name ?? "", arguments: "" })),
            T != null && T.name && (M.function.name = T.name),
            T != null &&
              T.arguments &&
              ((M.function.arguments += T.arguments),
              jy(B(this, pt, "f"), M) &&
                (M.function.parsed_arguments = _c(M.function.arguments)));
        }
      }
    }
    return o;
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
              : new Promise((i, l) => n.push({ resolve: i, reject: l })).then(
                  (i) =>
                    i ? { value: i, done: !1 } : { value: void 0, done: !0 },
                ),
        return: async () => (this.abort(), { value: void 0, done: !0 }),
      }
    );
  }
  toReadableStream() {
    return new ut(
      this[Symbol.asyncIterator].bind(this),
      this.controller,
    ).toReadableStream();
  }
}
function Wy(e, t) {
  const {
      id: n,
      choices: r,
      created: s,
      model: i,
      system_fingerprint: l,
      ...o
    } = e,
    a = {
      ...o,
      id: n,
      choices: r.map(
        ({ message: u, finish_reason: m, index: p, logprobs: h, ...y }) => {
          if (!m) throw new F(`missing finish_reason for choice ${p}`);
          const {
              content: w = null,
              function_call: v,
              tool_calls: E,
              ...d
            } = u,
            c = u.role;
          if (!c) throw new F(`missing role for choice ${p}`);
          if (v) {
            const { arguments: f, name: g } = v;
            if (f == null)
              throw new F(`missing function_call.arguments for choice ${p}`);
            if (!g) throw new F(`missing function_call.name for choice ${p}`);
            return {
              ...y,
              message: {
                content: w,
                function_call: { arguments: f, name: g },
                role: c,
                refusal: u.refusal ?? null,
              },
              finish_reason: m,
              index: p,
              logprobs: h,
            };
          }
          return E
            ? {
                ...y,
                index: p,
                finish_reason: m,
                logprobs: h,
                message: {
                  ...d,
                  role: c,
                  content: w,
                  refusal: u.refusal ?? null,
                  tool_calls: E.map((f, g) => {
                    const { function: k, type: C, id: x, ...P } = f,
                      { arguments: T, name: A, ...M } = k || {};
                    if (x == null)
                      throw new F(`missing choices[${p}].tool_calls[${g}].id
${Ts(e)}`);
                    if (C == null)
                      throw new F(`missing choices[${p}].tool_calls[${g}].type
${Ts(e)}`);
                    if (A == null)
                      throw new F(`missing choices[${p}].tool_calls[${g}].function.name
${Ts(e)}`);
                    if (T == null)
                      throw new F(`missing choices[${p}].tool_calls[${g}].function.arguments
${Ts(e)}`);
                    return {
                      ...P,
                      id: x,
                      type: C,
                      function: { ...M, name: A, arguments: T },
                    };
                  }),
                },
              }
            : {
                ...y,
                message: {
                  ...d,
                  content: w,
                  role: c,
                  refusal: u.refusal ?? null,
                },
                finish_reason: m,
                index: p,
                logprobs: h,
              };
        },
      ),
      created: s,
      model: i,
      object: "chat.completion",
      ...(l ? { system_fingerprint: l } : {}),
    };
  return Oy(a, t);
}
function Ts(e) {
  return JSON.stringify(e);
}
class Bn extends Jr {
  static fromReadableStream(t) {
    const n = new Bn(null);
    return n._run(() => n._fromReadableStream(t)), n;
  }
  static runFunctions(t, n, r) {
    const s = new Bn(null),
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
    const s = new Bn(n),
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
let bh = class extends U {
  parse(t, n) {
    return (
      Fy(t.tools),
      this._client.chat.completions
        .create(t, {
          ...n,
          headers: {
            ...(n == null ? void 0 : n.headers),
            "X-Stainless-Helper-Method": "beta.chat.completions.parse",
          },
        })
        ._thenUnwrap((r) => Fa(r, t))
    );
  }
  runFunctions(t, n) {
    return t.stream
      ? Bn.runFunctions(this._client, t, n)
      : Kr.runFunctions(this._client, t, n);
  }
  runTools(t, n) {
    return t.stream
      ? Bn.runTools(this._client, t, n)
      : Kr.runTools(this._client, t, n);
  }
  stream(t, n) {
    return Jr.createChatCompletion(this._client, t, n);
  }
};
class Lo extends U {
  constructor() {
    super(...arguments), (this.completions = new bh(this._client));
  }
}
(function (e) {
  e.Completions = bh;
})(Lo || (Lo = {}));
var I = function (e, t, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  Ie = function (e, t, n, r, s) {
    if (r === "m") throw new TypeError("Private method is not writable");
    if (r === "a" && !s)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return r === "a" ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n;
  },
  ce,
  jo,
  ot,
  Xs,
  Je,
  tn,
  Tn,
  qt,
  ki,
  Te,
  Ks,
  Js,
  Ir,
  vr,
  wr,
  Sc,
  kc,
  Cc,
  Ec,
  Pc,
  Nc,
  Rc;
class Ze extends Nh {
  constructor() {
    super(...arguments),
      ce.add(this),
      jo.set(this, []),
      ot.set(this, {}),
      Xs.set(this, {}),
      Je.set(this, void 0),
      tn.set(this, void 0),
      Tn.set(this, void 0),
      qt.set(this, void 0),
      ki.set(this, void 0),
      Te.set(this, void 0),
      Ks.set(this, void 0),
      Js.set(this, void 0),
      Ir.set(this, void 0);
  }
  [((jo = new WeakMap()),
  (ot = new WeakMap()),
  (Xs = new WeakMap()),
  (Je = new WeakMap()),
  (tn = new WeakMap()),
  (Tn = new WeakMap()),
  (qt = new WeakMap()),
  (ki = new WeakMap()),
  (Te = new WeakMap()),
  (Ks = new WeakMap()),
  (Js = new WeakMap()),
  (Ir = new WeakMap()),
  (ce = new WeakSet()),
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
              : new Promise((i, l) => n.push({ resolve: i, reject: l })).then(
                  (i) =>
                    i ? { value: i, done: !1 } : { value: void 0, done: !0 },
                ),
        return: async () => (this.abort(), { value: void 0, done: !0 }),
      }
    );
  }
  static fromReadableStream(t) {
    const n = new Ze();
    return n._run(() => n._fromReadableStream(t)), n;
  }
  async _fromReadableStream(t, n) {
    var i;
    const r = n == null ? void 0 : n.signal;
    r &&
      (r.aborted && this.controller.abort(),
      r.addEventListener("abort", () => this.controller.abort())),
      this._connected();
    const s = ut.fromReadableStream(t, this.controller);
    for await (const l of s) I(this, ce, "m", vr).call(this, l);
    if ((i = s.controller.signal) != null && i.aborted) throw new Ge();
    return this._addRun(I(this, ce, "m", wr).call(this));
  }
  toReadableStream() {
    return new ut(
      this[Symbol.asyncIterator].bind(this),
      this.controller,
    ).toReadableStream();
  }
  static createToolAssistantStream(t, n, r, s, i) {
    const l = new Ze();
    return (
      l._run(() =>
        l._runToolAssistantStream(t, n, r, s, {
          ...i,
          headers: {
            ...(i == null ? void 0 : i.headers),
            "X-Stainless-Helper-Method": "stream",
          },
        }),
      ),
      l
    );
  }
  async _createToolAssistantStream(t, n, r, s, i) {
    var u;
    const l = i == null ? void 0 : i.signal;
    l &&
      (l.aborted && this.controller.abort(),
      l.addEventListener("abort", () => this.controller.abort()));
    const o = { ...s, stream: !0 },
      a = await t.submitToolOutputs(n, r, o, {
        ...i,
        signal: this.controller.signal,
      });
    this._connected();
    for await (const m of a) I(this, ce, "m", vr).call(this, m);
    if ((u = a.controller.signal) != null && u.aborted) throw new Ge();
    return this._addRun(I(this, ce, "m", wr).call(this));
  }
  static createThreadAssistantStream(t, n, r) {
    const s = new Ze();
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
    const i = new Ze();
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
    return I(this, Ks, "f");
  }
  currentRun() {
    return I(this, Js, "f");
  }
  currentMessageSnapshot() {
    return I(this, Je, "f");
  }
  currentRunStepSnapshot() {
    return I(this, Ir, "f");
  }
  async finalRunSteps() {
    return await this.done(), Object.values(I(this, ot, "f"));
  }
  async finalMessages() {
    return await this.done(), Object.values(I(this, Xs, "f"));
  }
  async finalRun() {
    if ((await this.done(), !I(this, tn, "f")))
      throw Error("Final run was not received.");
    return I(this, tn, "f");
  }
  async _createThreadAssistantStream(t, n, r) {
    var o;
    const s = r == null ? void 0 : r.signal;
    s &&
      (s.aborted && this.controller.abort(),
      s.addEventListener("abort", () => this.controller.abort()));
    const i = { ...n, stream: !0 },
      l = await t.createAndRun(i, { ...r, signal: this.controller.signal });
    this._connected();
    for await (const a of l) I(this, ce, "m", vr).call(this, a);
    if ((o = l.controller.signal) != null && o.aborted) throw new Ge();
    return this._addRun(I(this, ce, "m", wr).call(this));
  }
  async _createAssistantStream(t, n, r, s) {
    var a;
    const i = s == null ? void 0 : s.signal;
    i &&
      (i.aborted && this.controller.abort(),
      i.addEventListener("abort", () => this.controller.abort()));
    const l = { ...r, stream: !0 },
      o = await t.create(n, l, { ...s, signal: this.controller.signal });
    this._connected();
    for await (const u of o) I(this, ce, "m", vr).call(this, u);
    if ((a = o.controller.signal) != null && a.aborted) throw new Ge();
    return this._addRun(I(this, ce, "m", wr).call(this));
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
      else if (Cl(i) && Cl(s)) i = this.accumulateDelta(i, s);
      else if (Array.isArray(i) && Array.isArray(s)) {
        if (i.every((l) => typeof l == "string" || typeof l == "number")) {
          i.push(...s);
          continue;
        }
        for (const l of s) {
          if (!Cl(l))
            throw new Error(
              `Expected array delta entry to be an object but got: ${l}`,
            );
          const o = l.index;
          if (o == null)
            throw (
              (console.error(l),
              new Error(
                "Expected array delta entry to have an `index` property",
              ))
            );
          if (typeof o != "number")
            throw new Error(
              `Expected array delta entry \`index\` property to be a number but got ${o}`,
            );
          const a = i[o];
          a == null ? i.push(l) : (i[o] = this.accumulateDelta(a, l));
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
(vr = function (t) {
  if (!this.ended)
    switch (
      (Ie(this, Ks, t, "f"), I(this, ce, "m", Cc).call(this, t), t.event)
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
        I(this, ce, "m", Rc).call(this, t);
        break;
      case "thread.run.step.created":
      case "thread.run.step.in_progress":
      case "thread.run.step.delta":
      case "thread.run.step.completed":
      case "thread.run.step.failed":
      case "thread.run.step.cancelled":
      case "thread.run.step.expired":
        I(this, ce, "m", kc).call(this, t);
        break;
      case "thread.message.created":
      case "thread.message.in_progress":
      case "thread.message.delta":
      case "thread.message.completed":
      case "thread.message.incomplete":
        I(this, ce, "m", Sc).call(this, t);
        break;
      case "error":
        throw new Error(
          "Encountered an error event in event processing - errors should be processed earlier",
        );
    }
}),
  (wr = function () {
    if (this.ended) throw new F("stream has ended, this shouldn't happen");
    if (!I(this, tn, "f")) throw Error("Final run has not been received");
    return I(this, tn, "f");
  }),
  (Sc = function (t) {
    const [n, r] = I(this, ce, "m", Pc).call(this, t, I(this, Je, "f"));
    Ie(this, Je, n, "f"), (I(this, Xs, "f")[n.id] = n);
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
                l = n.content[s.index];
              if (l && l.type == "text") this._emit("textDelta", i, l.text);
              else
                throw Error(
                  "The snapshot associated with this text delta is not text or missing",
                );
            }
            if (s.index != I(this, Tn, "f")) {
              if (I(this, qt, "f"))
                switch (I(this, qt, "f").type) {
                  case "text":
                    this._emit(
                      "textDone",
                      I(this, qt, "f").text,
                      I(this, Je, "f"),
                    );
                    break;
                  case "image_file":
                    this._emit(
                      "imageFileDone",
                      I(this, qt, "f").image_file,
                      I(this, Je, "f"),
                    );
                    break;
                }
              Ie(this, Tn, s.index, "f");
            }
            Ie(this, qt, n.content[s.index], "f");
          }
        break;
      case "thread.message.completed":
      case "thread.message.incomplete":
        if (I(this, Tn, "f") !== void 0) {
          const s = t.data.content[I(this, Tn, "f")];
          if (s)
            switch (s.type) {
              case "image_file":
                this._emit("imageFileDone", s.image_file, I(this, Je, "f"));
                break;
              case "text":
                this._emit("textDone", s.text, I(this, Je, "f"));
                break;
            }
        }
        I(this, Je, "f") && this._emit("messageDone", t.data),
          Ie(this, Je, void 0, "f");
    }
  }),
  (kc = function (t) {
    const n = I(this, ce, "m", Ec).call(this, t);
    switch ((Ie(this, Ir, n, "f"), t.event)) {
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
            i.index == I(this, ki, "f")
              ? this._emit(
                  "toolCallDelta",
                  i,
                  n.step_details.tool_calls[i.index],
                )
              : (I(this, Te, "f") &&
                  this._emit("toolCallDone", I(this, Te, "f")),
                Ie(this, ki, i.index, "f"),
                Ie(this, Te, n.step_details.tool_calls[i.index], "f"),
                I(this, Te, "f") &&
                  this._emit("toolCallCreated", I(this, Te, "f")));
        this._emit("runStepDelta", t.data.delta, n);
        break;
      case "thread.run.step.completed":
      case "thread.run.step.failed":
      case "thread.run.step.cancelled":
      case "thread.run.step.expired":
        Ie(this, Ir, void 0, "f"),
          t.data.step_details.type == "tool_calls" &&
            I(this, Te, "f") &&
            (this._emit("toolCallDone", I(this, Te, "f")),
            Ie(this, Te, void 0, "f")),
          this._emit("runStepDone", t.data, n);
        break;
    }
  }),
  (Cc = function (t) {
    I(this, jo, "f").push(t), this._emit("event", t);
  }),
  (Ec = function (t) {
    switch (t.event) {
      case "thread.run.step.created":
        return (I(this, ot, "f")[t.data.id] = t.data), t.data;
      case "thread.run.step.delta":
        let n = I(this, ot, "f")[t.data.id];
        if (!n)
          throw Error("Received a RunStepDelta before creation of a snapshot");
        let r = t.data;
        if (r.delta) {
          const s = Ze.accumulateDelta(n, r.delta);
          I(this, ot, "f")[t.data.id] = s;
        }
        return I(this, ot, "f")[t.data.id];
      case "thread.run.step.completed":
      case "thread.run.step.failed":
      case "thread.run.step.cancelled":
      case "thread.run.step.expired":
      case "thread.run.step.in_progress":
        I(this, ot, "f")[t.data.id] = t.data;
        break;
    }
    if (I(this, ot, "f")[t.data.id]) return I(this, ot, "f")[t.data.id];
    throw new Error("No snapshot available");
  }),
  (Pc = function (t, n) {
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
              let l = n.content[i.index];
              n.content[i.index] = I(this, ce, "m", Nc).call(this, i, l);
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
  (Nc = function (t, n) {
    return Ze.accumulateDelta(n, t);
  }),
  (Rc = function (t) {
    switch ((Ie(this, Js, t.data, "f"), t.event)) {
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
        Ie(this, tn, t.data, "f"),
          I(this, Te, "f") &&
            (this._emit("toolCallDone", I(this, Te, "f")),
            Ie(this, Te, void 0, "f"));
        break;
    }
  });
class $a extends U {
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
    return Ae(n)
      ? this.list(t, {}, n)
      : this._client.getAPIList(`/threads/${t}/messages`, Da, {
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
class Da extends dt {}
$a.MessagesPage = Da;
class za extends U {
  retrieve(t, n, r, s = {}, i) {
    return Ae(s)
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
    return Ae(r)
      ? this.list(t, n, {}, r)
      : this._client.getAPIList(`/threads/${t}/runs/${n}/steps`, Ua, {
          query: r,
          ...s,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(s == null ? void 0 : s.headers),
          },
        });
  }
}
class Ua extends dt {}
za.RunStepsPage = Ua;
class ss extends U {
  constructor() {
    super(...arguments), (this.steps = new za(this._client));
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
    return Ae(n)
      ? this.list(t, {}, n)
      : this._client.getAPIList(`/threads/${t}/runs`, Ba, {
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
    return Ze.createAssistantStream(t, this._client.beta.threads.runs, n, r);
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
      const { data: i, response: l } = await this.retrieve(t, n, {
        ...r,
        headers: { ...(r == null ? void 0 : r.headers), ...s },
      }).withResponse();
      switch (i.status) {
        case "queued":
        case "in_progress":
        case "cancelling":
          let o = 5e3;
          if (r != null && r.pollIntervalMs) o = r.pollIntervalMs;
          else {
            const a = l.headers.get("openai-poll-after-ms");
            if (a) {
              const u = parseInt(a);
              isNaN(u) || (o = u);
            }
          }
          await ts(o);
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
    return Ze.createAssistantStream(t, this._client.beta.threads.runs, n, r);
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
    return Ze.createToolAssistantStream(
      t,
      n,
      this._client.beta.threads.runs,
      r,
      s,
    );
  }
}
class Ba extends dt {}
ss.RunsPage = Ba;
ss.Steps = za;
ss.RunStepsPage = Ua;
class Zn extends U {
  constructor() {
    super(...arguments),
      (this.runs = new ss(this._client)),
      (this.messages = new $a(this._client));
  }
  create(t = {}, n) {
    return Ae(t)
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
    return Ze.createThreadAssistantStream(t, this._client.beta.threads, n);
  }
}
Zn.Runs = ss;
Zn.RunsPage = Ba;
Zn.Messages = $a;
Zn.MessagesPage = Da;
const Vy = async (e) => {
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
let Wa = class extends U {
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
    return Ae(n)
      ? this.list(t, {}, n)
      : this._client.getAPIList(`/vector_stores/${t}/files`, Vi, {
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
        l = i.data;
      switch (l.status) {
        case "in_progress":
          let o = 5e3;
          if (r != null && r.pollIntervalMs) o = r.pollIntervalMs;
          else {
            const a = i.response.headers.get("openai-poll-after-ms");
            if (a) {
              const u = parseInt(a);
              isNaN(u) || (o = u);
            }
          }
          await ts(o);
          break;
        case "failed":
        case "completed":
          return l;
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
class Vi extends dt {}
Wa.VectorStoreFilesPage = Vi;
class Qh extends U {
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
    return Ae(r)
      ? this.listFiles(t, n, {}, r)
      : this._client.getAPIList(
          `/vector_stores/${t}/file_batches/${n}/files`,
          Vi,
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
      const { data: i, response: l } = await this.retrieve(t, n, {
        ...r,
        headers: s,
      }).withResponse();
      switch (i.status) {
        case "in_progress":
          let o = 5e3;
          if (r != null && r.pollIntervalMs) o = r.pollIntervalMs;
          else {
            const a = l.headers.get("openai-poll-after-ms");
            if (a) {
              const u = parseInt(a);
              isNaN(u) || (o = u);
            }
          }
          await ts(o);
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
      l = Math.min(i, n.length),
      o = this._client,
      a = n.values(),
      u = [...r];
    async function m(h) {
      for (let y of h) {
        const w = await o.files.create({ file: y, purpose: "assistants" }, s);
        u.push(w.id);
      }
    }
    const p = Array(l).fill(a).map(m);
    return await Vy(p), await this.createAndPoll(t, { file_ids: u });
  }
}
class er extends U {
  constructor() {
    super(...arguments),
      (this.files = new Wa(this._client)),
      (this.fileBatches = new Qh(this._client));
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
    return Ae(t)
      ? this.list({}, t)
      : this._client.getAPIList("/vector_stores", Va, {
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
class Va extends dt {}
er.VectorStoresPage = Va;
er.Files = Wa;
er.VectorStoreFilesPage = Vi;
er.FileBatches = Qh;
class hn extends U {
  constructor() {
    super(...arguments),
      (this.vectorStores = new er(this._client)),
      (this.chat = new Lo(this._client)),
      (this.assistants = new La(this._client)),
      (this.threads = new Zn(this._client));
  }
}
hn.VectorStores = er;
hn.VectorStoresPage = Va;
hn.Assistants = La;
hn.AssistantsPage = ja;
hn.Threads = Zn;
class Xh extends U {
  create(t, n) {
    return this._client.post("/completions", {
      body: t,
      ...n,
      stream: t.stream ?? !1,
    });
  }
}
class Kh extends U {
  create(t, n) {
    return this._client.post("/embeddings", { body: t, ...n });
  }
}
class Ha extends U {
  create(t, n) {
    return this._client.post("/files", Jn({ body: t, ...n }));
  }
  retrieve(t, n) {
    return this._client.get(`/files/${t}`, n);
  }
  list(t = {}, n) {
    return Ae(t)
      ? this.list({}, t)
      : this._client.getAPIList("/files", ba, { query: t, ...n });
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
    let l = await this.retrieve(t);
    for (; !l.status || !s.has(l.status); )
      if ((await ts(n), (l = await this.retrieve(t)), Date.now() - i > r))
        throw new Ia({
          message: `Giving up on waiting for file ${t} to finish processing after ${r} milliseconds.`,
        });
    return l;
  }
}
class ba extends wh {}
Ha.FileObjectsPage = ba;
class Qa extends U {
  list(t, n = {}, r) {
    return Ae(n)
      ? this.list(t, {}, n)
      : this._client.getAPIList(`/fine_tuning/jobs/${t}/checkpoints`, Xa, {
          query: n,
          ...r,
        });
  }
}
class Xa extends dt {}
Qa.FineTuningJobCheckpointsPage = Xa;
class tr extends U {
  constructor() {
    super(...arguments), (this.checkpoints = new Qa(this._client));
  }
  create(t, n) {
    return this._client.post("/fine_tuning/jobs", { body: t, ...n });
  }
  retrieve(t, n) {
    return this._client.get(`/fine_tuning/jobs/${t}`, n);
  }
  list(t = {}, n) {
    return Ae(t)
      ? this.list({}, t)
      : this._client.getAPIList("/fine_tuning/jobs", Ka, { query: t, ...n });
  }
  cancel(t, n) {
    return this._client.post(`/fine_tuning/jobs/${t}/cancel`, n);
  }
  listEvents(t, n = {}, r) {
    return Ae(n)
      ? this.listEvents(t, {}, n)
      : this._client.getAPIList(`/fine_tuning/jobs/${t}/events`, Ja, {
          query: n,
          ...r,
        });
  }
}
class Ka extends dt {}
class Ja extends dt {}
tr.FineTuningJobsPage = Ka;
tr.FineTuningJobEventsPage = Ja;
tr.Checkpoints = Qa;
tr.FineTuningJobCheckpointsPage = Xa;
class is extends U {
  constructor() {
    super(...arguments), (this.jobs = new tr(this._client));
  }
}
is.Jobs = tr;
is.FineTuningJobsPage = Ka;
is.FineTuningJobEventsPage = Ja;
class Jh extends U {
  createVariation(t, n) {
    return this._client.post("/images/variations", Jn({ body: t, ...n }));
  }
  edit(t, n) {
    return this._client.post("/images/edits", Jn({ body: t, ...n }));
  }
  generate(t, n) {
    return this._client.post("/images/generations", { body: t, ...n });
  }
}
class Ya extends U {
  retrieve(t, n) {
    return this._client.get(`/models/${t}`, n);
  }
  list(t) {
    return this._client.getAPIList("/models", qa, t);
  }
  del(t, n) {
    return this._client.delete(`/models/${t}`, n);
  }
}
class qa extends wh {}
Ya.ModelsPage = qa;
class Yh extends U {
  create(t, n) {
    return this._client.post("/moderations", { body: t, ...n });
  }
}
class qh extends U {
  create(t, n, r) {
    return this._client.post(`/uploads/${t}/parts`, Jn({ body: n, ...r }));
  }
}
class Ga extends U {
  constructor() {
    super(...arguments), (this.parts = new qh(this._client));
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
Ga.Parts = qh;
var Gh;
class $ extends wy {
  constructor({
    baseURL: t = Rs("OPENAI_BASE_URL"),
    apiKey: n = Rs("OPENAI_API_KEY"),
    organization: r = Rs("OPENAI_ORG_ID") ?? null,
    project: s = Rs("OPENAI_PROJECT_ID") ?? null,
    ...i
  } = {}) {
    if (n === void 0)
      throw new F(
        "The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).",
      );
    const l = {
      apiKey: n,
      organization: r,
      project: s,
      ...i,
      baseURL: t || "https://api.openai.com/v1",
    };
    if (!l.dangerouslyAllowBrowser && Iy())
      throw new F(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);
    super({
      baseURL: l.baseURL,
      timeout: l.timeout ?? 6e5,
      httpAgent: l.httpAgent,
      maxRetries: l.maxRetries,
      fetch: l.fetch,
    }),
      (this.completions = new Xh(this)),
      (this.chat = new Ta(this)),
      (this.embeddings = new Kh(this)),
      (this.files = new Ha(this)),
      (this.images = new Jh(this)),
      (this.audio = new ns(this)),
      (this.moderations = new Yh(this)),
      (this.models = new Ya(this)),
      (this.fineTuning = new is(this)),
      (this.beta = new hn(this)),
      (this.batches = new Oa(this)),
      (this.uploads = new Ga(this)),
      (this._options = l),
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
    return ny(t, { arrayFormat: "brackets" });
  }
}
Gh = $;
$.OpenAI = Gh;
$.DEFAULT_TIMEOUT = 6e5;
$.OpenAIError = F;
$.APIError = he;
$.APIConnectionError = Ui;
$.APIConnectionTimeoutError = Ia;
$.APIUserAbortError = Ge;
$.NotFoundError = rh;
$.ConflictError = sh;
$.RateLimitError = lh;
$.BadRequestError = eh;
$.AuthenticationError = th;
$.InternalServerError = oh;
$.PermissionDeniedError = nh;
$.UnprocessableEntityError = ih;
$.toFile = hh;
$.fileFromPath = Gd;
$.Completions = Xh;
$.Chat = Ta;
$.Embeddings = Kh;
$.Files = Ha;
$.FileObjectsPage = ba;
$.Images = Jh;
$.Audio = ns;
$.Moderations = Yh;
$.Models = Ya;
$.ModelsPage = qa;
$.FineTuning = is;
$.Beta = hn;
$.Batches = Oa;
$.BatchesPage = Ma;
$.Uploads = Ga;
class Hy {
  constructor() {
    Za(this, "openai");
    this.openai = new $({
      apiKey: "sk-proj-eaFkE9RZXKC9aIqRHXoxT3BlbkFJ5iRlrZ6Kge6rDQbSMUrW",
      dangerouslyAllowBrowser: !0,
    });
  }
  async getResponse(t, n, r) {
    var s, i;
    try {
      const o =
          ((i =
            (s = (
              await this.openai.chat.completions.create({
                model: "gpt-4o",
                messages: [
                  {
                    role: "system",
                    content: `${n} Keep responses concise, under 50 words.`,
                  },
                  { role: "user", content: t },
                ],
                max_tokens: 50,
                temperature: 0.7,
              })
            ).choices[0]) == null
              ? void 0
              : s.message) == null
            ? void 0
            : i.content) || "I apologize, I cannot respond at the moment.",
        u = await (
          await this.openai.audio.speech.create({
            model: "tts-1",
            voice: r,
            input: o,
          })
        ).arrayBuffer(),
        m = URL.createObjectURL(new Blob([u], { type: "audio/mpeg" }));
      return { text: o, audioUrl: m };
    } catch (l) {
      throw (
        (console.error("Error in getResponse:", l),
        new Error("Failed to get AI response"))
      );
    }
  }
  async transcribeAudio(t) {
    try {
      const n = new File([t], "audio.mp3", { type: "audio/mpeg" });
      return (
        await this.openai.audio.transcriptions.create({
          file: n,
          model: "whisper-1",
        })
      ).text;
    } catch (n) {
      throw (
        (console.error("Error in transcribeAudio:", n),
        new Error("Failed to transcribe audio"))
      );
    }
  }
}
function by() {
  var E;
  const [e, t] = G.useState([]),
    [n, r] = G.useState(null),
    [s, i] = G.useState({}),
    [l, o] = G.useState(""),
    [a, u] = G.useState(!1),
    m = G.useRef(null);
  G.useRef(null);
  const p = G.useRef(new Hy()),
    h = () => {
      var d;
      (d = m.current) == null || d.scrollIntoView({ behavior: "smooth" });
    };
  G.useEffect(() => {
    h();
  }, [s]);
  const y = async (d) => {
      if (!n || !d.trim()) return;
      const c = {
        id: Date.now(),
        text: d,
        sender: "user",
        timestamp: new Date().toISOString(),
      };
      i((f) => ({ ...f, [n.id]: [...(f[n.id] || []), c] })), u(!0);
      try {
        const f = await p.current.getResponse(d, n.personality, n.voice),
          g = {
            id: Date.now() + 1,
            text: f.text,
            sender: "ai",
            timestamp: new Date().toISOString(),
            audioUrl: f.audioUrl,
          };
        i((k) => ({ ...k, [n.id]: [...(k[n.id] || []), g] }));
      } catch (f) {
        console.error("Error getting AI response:", f);
      } finally {
        u(!1);
      }
      o("");
    },
    w = async (d, c) => {
      if (n) {
        u(!0);
        try {
          const f = {
            id: Date.now(),
            text: "",
            sender: "user",
            timestamp: new Date().toISOString(),
            audioUrl: c,
            isVoiceMessage: !0,
          };
          i((x) => ({ ...x, [n.id]: [...(x[n.id] || []), f] }));
          const g = await p.current.transcribeAudio(d),
            k = await p.current.getResponse(g, n.personality, n.voice),
            C = {
              id: Date.now() + 1,
              text: k.text,
              sender: "ai",
              timestamp: new Date().toISOString(),
              audioUrl: k.audioUrl,
            };
          i((x) => ({ ...x, [n.id]: [...(x[n.id] || []), C] }));
        } catch (f) {
          console.error("Error processing voice message:", f);
        } finally {
          u(!1);
        }
      }
    },
    v = (d, c) => {
      n &&
        i((f) => ({
          ...f,
          [n.id]: f[n.id].map((g) =>
            g.id === d ? { ...g, reactions: [...(g.reactions || []), c] } : g,
          ),
        }));
    };
  return _.jsxs("div", {
    className: "flex h-screen bg-gray-100",
    children: [
      _.jsx("div", {
        className: "w-80 bg-white border-r border-gray-200",
        children: _.jsx(Vg, {
          selectedContact: n,
          onSelectContact: r,
          contacts: e,
          onAddContact: (d) => t((c) => [...c, d]),
          onDeleteContact: (d) => {
            t((c) => c.filter((f) => f.id !== d)),
              (n == null ? void 0 : n.id) === d && r(null);
          },
        }),
      }),
      _.jsx("div", {
        className: "flex-1 flex flex-col",
        children: n
          ? _.jsxs(_.Fragment, {
              children: [
                _.jsx("div", {
                  className: "p-4 border-b border-gray-200 bg-white",
                  children: _.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      _.jsx("img", {
                        src: n.avatar,
                        alt: n.name,
                        className: "w-10 h-10 rounded-full",
                      }),
                      _.jsxs("div", {
                        children: [
                          _.jsx("h2", {
                            className: "font-semibold",
                            children: n.name,
                          }),
                          _.jsx("p", {
                            className: "text-sm text-gray-500",
                            children: n.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                _.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-4",
                  children: [
                    (E = s[n.id]) == null
                      ? void 0
                      : E.map((d) =>
                          _.jsx(Hg, { message: d, onAddReaction: v }, d.id),
                        ),
                    _.jsx("div", { ref: m }),
                  ],
                }),
                _.jsx("div", {
                  className: "p-4 border-t border-gray-200 bg-white",
                  children: _.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      _.jsx("input", {
                        type: "text",
                        value: l,
                        onChange: (d) => o(d.target.value),
                        onKeyPress: (d) => d.key === "Enter" && y(l),
                        placeholder: "Type a message...",
                        disabled: a,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500",
                      }),
                      _.jsx(bg, { onRecordingComplete: w }),
                      _.jsx("button", {
                        onClick: () => y(l),
                        disabled: a || !l.trim(),
                        className:
                          "p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
                        children: _.jsx(Fg, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          : _.jsx(Qg, {}),
      }),
    ],
  });
}
const Zh = document.getElementById("root");
if (!Zh) throw new Error("Failed to find the root element");
Wd(Zh).render(_.jsx(G.StrictMode, { children: _.jsx(by, {}) }));
