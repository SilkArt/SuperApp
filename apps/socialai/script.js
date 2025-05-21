var np = Object.defineProperty;
var rp = (e, t, n) =>
  t in e
    ? np(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Yi = (e, t, n) => rp(e, typeof t != "symbol" ? t + "" : t, n);
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
 */ var Jr = Symbol.for("react.element"),
  sp = Symbol.for("react.portal"),
  ip = Symbol.for("react.fragment"),
  lp = Symbol.for("react.strict_mode"),
  op = Symbol.for("react.profiler"),
  ap = Symbol.for("react.provider"),
  up = Symbol.for("react.context"),
  cp = Symbol.for("react.forward_ref"),
  fp = Symbol.for("react.suspense"),
  dp = Symbol.for("react.memo"),
  hp = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function pp(e) {
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
function Jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mc),
    (this.updater = n || Tc);
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lc() {}
Lc.prototype = Jn.prototype;
function $o(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mc),
    (this.updater = n || Tc);
}
var Do = ($o.prototype = new Lc());
Do.constructor = $o;
Oc(Do, Jn.prototype);
Do.isPureReactComponent = !0;
var tu = Array.isArray,
  jc = Object.prototype.hasOwnProperty,
  zo = { current: null },
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
    for (var a = Array(o), c = 0; c < o; c++) a[c] = arguments[c + 2];
    s.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) s[r] === void 0 && (s[r] = o[r]);
  return {
    $$typeof: Jr,
    type: e,
    key: i,
    ref: l,
    props: s,
    _owner: zo.current,
  };
}
function mp(e, t) {
  return {
    $$typeof: Jr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr;
}
function gp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Ki(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gp("" + e.key)
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
          case Jr:
          case sp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (s = s(l)),
      (e = r === "" ? "." + Ki(l, 0) : r),
      tu(s)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Os(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (Bo(s) &&
            (s = mp(
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
      var a = r + Ki(i, o);
      l += Os(i, t, n, a, s);
    }
  else if (((a = pp(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Ki(i, o++)), (l += Os(i, t, n, a, s));
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
function yp(e) {
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
  vp = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ms,
    ReactCurrentOwner: zo,
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
    if (!Bo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
j.Component = Jn;
j.Fragment = ip;
j.Profiler = op;
j.PureComponent = $o;
j.StrictMode = lp;
j.Suspense = fp;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp;
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
      (t.ref !== void 0 && ((i = t.ref), (l = zo.current)),
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
    for (var c = 0; c < a; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Jr, type: e.type, key: s, ref: i, props: r, _owner: l };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: up,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ap, _context: e }),
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
  return { $$typeof: cp, render: e };
};
j.isValidElement = Bo;
j.lazy = function (e) {
  return { $$typeof: hp, _payload: { _status: -1, _result: e }, _init: yp };
};
j.memo = function (e, t) {
  return { $$typeof: dp, type: e, compare: t === void 0 ? null : t };
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
var le = Ic.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wp = le,
  _p = Symbol.for("react.element"),
  xp = Symbol.for("react.fragment"),
  Sp = Object.prototype.hasOwnProperty,
  kp = wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var r,
    s = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Sp.call(t, r) && !Cp.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: _p,
    type: e,
    key: i,
    ref: l,
    props: s,
    _owner: kp.current,
  };
}
Ci.Fragment = xp;
Ci.jsx = zc;
Ci.jsxs = zc;
Ac.exports = Ci;
var S = Ac.exports,
  Bc = { exports: {} },
  Fe = {},
  Uc = { exports: {} },
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
  function t(R, M) {
    var L = R.length;
    R.push(M);
    e: for (; 0 < L; ) {
      var q = (L - 1) >>> 1,
        se = R[q];
      if (0 < s(se, M)) (R[q] = M), (R[L] = se), (L = q);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var M = R[0],
      L = R.pop();
    if (L !== M) {
      R[0] = L;
      e: for (var q = 0, se = R.length, as = se >>> 1; q < as; ) {
        var Yt = 2 * (q + 1) - 1,
          Qi = R[Yt],
          Kt = Yt + 1,
          us = R[Kt];
        if (0 > s(Qi, L))
          Kt < se && 0 > s(us, Qi)
            ? ((R[q] = us), (R[Kt] = L), (q = Kt))
            : ((R[q] = Qi), (R[Yt] = L), (q = Yt));
        else if (Kt < se && 0 > s(us, L)) (R[q] = us), (R[Kt] = L), (q = Kt);
        else break e;
      }
    }
    return M;
  }
  function s(R, M) {
    var L = R.sortIndex - M.sortIndex;
    return L !== 0 ? L : R.id - M.id;
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
    c = [],
    m = 1,
    f = null,
    p = 3,
    y = !1,
    w = !1,
    v = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(R) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= R)
        r(c), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(c);
    }
  }
  function g(R) {
    if (((v = !1), d(R), !w))
      if (n(a) !== null) (w = !0), Hi(C);
      else {
        var M = n(c);
        M !== null && bi(g, M.startTime - R);
      }
  }
  function C(R, M) {
    (w = !1), v && ((v = !1), h(E), (E = -1)), (y = !0);
    var L = p;
    try {
      for (
        d(M), f = n(a);
        f !== null && (!(f.expirationTime > M) || (R && !O()));

      ) {
        var q = f.callback;
        if (typeof q == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var se = q(f.expirationTime <= M);
          (M = e.unstable_now()),
            typeof se == "function" ? (f.callback = se) : f === n(a) && r(a),
            d(M);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var as = !0;
      else {
        var Yt = n(c);
        Yt !== null && bi(g, Yt.startTime - M), (as = !1);
      }
      return as;
    } finally {
      (f = null), (p = L), (y = !1);
    }
  }
  var x = !1,
    _ = null,
    E = -1,
    T = 5,
    A = -1;
  function O() {
    return !(e.unstable_now() - A < T);
  }
  function De() {
    if (_ !== null) {
      var R = e.unstable_now();
      A = R;
      var M = !0;
      try {
        M = _(!0, R);
      } finally {
        M ? dt() : ((x = !1), (_ = null));
      }
    } else x = !1;
  }
  var dt;
  if (typeof u == "function")
    dt = function () {
      u(De);
    };
  else if (typeof MessageChannel < "u") {
    var ls = new MessageChannel(),
      os = ls.port2;
    (ls.port1.onmessage = De),
      (dt = function () {
        os.postMessage(null);
      });
  } else
    dt = function () {
      P(De, 0);
    };
  function Hi(R) {
    (_ = R), x || ((x = !0), dt());
  }
  function bi(R, M) {
    E = P(function () {
      R(e.unstable_now());
    }, M);
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
      w || y || ((w = !0), Hi(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (T = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = p;
      }
      var L = p;
      p = M;
      try {
        return R();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, M) {
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
      var L = p;
      p = R;
      try {
        return M();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (R, M, L) {
      var q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? q + L : q))
          : (L = q),
        R)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = L + se),
        (R = {
          id: m++,
          callback: M,
          priorityLevel: R,
          startTime: L,
          expirationTime: se,
          sortIndex: -1,
        }),
        L > q
          ? ((R.sortIndex = L),
            t(c, R),
            n(a) === null &&
              R === n(c) &&
              (v ? (h(E), (E = -1)) : (v = !0), bi(g, L - q)))
          : ((R.sortIndex = se), t(a, R), w || y || ((w = !0), Hi(C))),
        R
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (R) {
      var M = p;
      return function () {
        var L = p;
        p = M;
        try {
          return R.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(Wc);
Uc.exports = Wc;
var Ep = Uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp = le,
  je = Ep;
function k(e) {
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
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Tl = Object.prototype.hasOwnProperty,
  Np =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  su = {};
function Rp(e) {
  return Tl.call(su, e)
    ? !0
    : Tl.call(ru, e)
      ? !1
      : Np.test(e)
        ? (su[e] = !0)
        : ((ru[e] = !0), !1);
}
function Ap(e, t, n, r) {
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
function Ip(e, t, n, r) {
  if (t === null || typeof t > "u" || Ap(e, t, n, r)) return !0;
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
function Wo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uo, Wo);
    de[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uo, Wo);
    de[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Uo, Wo);
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
function Vo(e, t, n, r) {
  var s = de.hasOwnProperty(t) ? de[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ip(t, n, s, r) && (n = null),
    r || s === null
      ? Rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ct = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fs = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  _n = Symbol.for("react.fragment"),
  Ho = Symbol.for("react.strict_mode"),
  Ol = Symbol.for("react.profiler"),
  Hc = Symbol.for("react.provider"),
  bc = Symbol.for("react.context"),
  bo = Symbol.for("react.forward_ref"),
  Ml = Symbol.for("react.suspense"),
  Ll = Symbol.for("react.suspense_list"),
  Qo = Symbol.for("react.memo"),
  Rt = Symbol.for("react.lazy"),
  Qc = Symbol.for("react.offscreen"),
  iu = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (iu && e[iu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Xi;
function cr(e) {
  if (Xi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xi = (t && t[1]) || "";
    }
  return (
    `
` +
    Xi +
    e
  );
}
var Ji = !1;
function qi(e, t) {
  if (!e || Ji) return "";
  Ji = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
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
    (Ji = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Tp(e) {
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
function jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _n:
      return "Fragment";
    case wn:
      return "Portal";
    case Ol:
      return "Profiler";
    case Ho:
      return "StrictMode";
    case Ml:
      return "Suspense";
    case Ll:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bc:
        return (e.displayName || "Context") + ".Consumer";
      case Hc:
        return (e._context.displayName || "Context") + ".Provider";
      case bo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qo:
        return (
          (t = e.displayName || null), t !== null ? t : jl(e.type) || "Memo"
        );
      case Rt:
        (t = e._payload), (e = e._init);
        try {
          return jl(e(t));
        } catch {}
    }
  return null;
}
function Op(e) {
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
      return jl(t);
    case 8:
      return t === Ho ? "StrictMode" : "Mode";
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
function Yc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mp(e) {
  var t = Yc(e) ? "checked" : "value",
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
  e._valueTracker || (e._valueTracker = Mp(e));
}
function Kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Yc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Js(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fl(e, t) {
  var n = t.checked;
  return X({}, t, {
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
function Xc(e, t) {
  (t = t.checked), t != null && Vo(e, "checked", t, !1);
}
function $l(e, t) {
  Xc(e, t);
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
    ? Dl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Dl(e, t.type, Wt(t.defaultValue)),
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
function Dl(e, t, n) {
  (t !== "number" || Js(e.ownerDocument) !== e) &&
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
function zl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function Jc(e, t) {
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
function Bl(e, t) {
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
  Lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function (e) {
  Lp.forEach(function (t) {
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
var jp = X(
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
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Wl(e, t) {
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
var Vl = null;
function Yo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hl = null,
  Mn = null,
  Ln = null;
function cu(e) {
  if ((e = Zr(e))) {
    if (typeof Hl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Ai(t)), Hl(e.stateNode, e.type, t));
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var bl = !1;
if (_t)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        bl = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    bl = !1;
  }
function Fp(e, t, n, r, s, i, l, o, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var xr = !1,
  qs = null,
  Gs = !1,
  Ql = null,
  $p = {
    onError: function (e) {
      (xr = !0), (qs = e);
    },
  };
function Dp(e, t, n, r, s, i, l, o, a) {
  (xr = !1), (qs = null), Fp.apply($p, arguments);
}
function zp(e, t, n, r, s, i, l, o, a) {
  if ((Dp.apply(this, arguments), xr)) {
    if (xr) {
      var c = qs;
      (xr = !1), (qs = null);
    } else throw Error(k(198));
    Gs || ((Gs = !0), (Ql = c));
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
  if (dn(e) !== e) throw Error(k(188));
}
function Bp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dn(e)), t === null)) throw Error(k(188));
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
      throw Error(k(188));
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
        if (!l) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function af(e) {
  return (e = Bp(e)), e !== null ? uf(e) : null;
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
  Wp = je.unstable_requestPaint,
  G = je.unstable_now,
  Vp = je.unstable_getCurrentPriorityLevel,
  Ko = je.unstable_ImmediatePriority,
  ff = je.unstable_UserBlockingPriority,
  Zs = je.unstable_NormalPriority,
  Hp = je.unstable_LowPriority,
  df = je.unstable_IdlePriority,
  Ei = null,
  ut = null;
function bp(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : Kp,
  Qp = Math.log,
  Yp = Math.LN2;
function Kp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Qp(e) / Yp) | 0)) | 0;
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
      (n = 31 - Ze(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function Xp(e, t) {
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
    var l = 31 - Ze(i),
      o = 1 << l,
      a = s[l];
    a === -1
      ? (!(o & n) || o & r) && (s[l] = Xp(o, t))
      : a <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Yl(e) {
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
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function qp(e, t) {
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
    var s = 31 - Ze(n),
      i = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function Xo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
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
  Kl = !1,
  gs = [],
  Lt = null,
  jt = null,
  Ft = null,
  Lr = new Map(),
  jr = new Map(),
  It = [],
  Gp =
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
function Zp(e, t, n, r, s) {
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
    var n = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vl = r), n.target.dispatchEvent(r), (Vl = null);
    } else return (t = Zr(n)), t !== null && Jo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pu(e, t, n) {
  Ls(e) && n.delete(t);
}
function em() {
  (Kl = !1),
    Lt !== null && Ls(Lt) && (Lt = null),
    jt !== null && Ls(jt) && (jt = null),
    Ft !== null && Ls(Ft) && (Ft = null),
    Lr.forEach(pu),
    jr.forEach(pu);
}
function ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Kl ||
      ((Kl = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, em)));
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
var jn = Ct.ReactCurrentBatchConfig,
  ti = !0;
function tm(e, t, n, r) {
  var s = z,
    i = jn.transition;
  jn.transition = null;
  try {
    (z = 1), qo(e, t, n, r);
  } finally {
    (z = s), (jn.transition = i);
  }
}
function nm(e, t, n, r) {
  var s = z,
    i = jn.transition;
  jn.transition = null;
  try {
    (z = 4), qo(e, t, n, r);
  } finally {
    (z = s), (jn.transition = i);
  }
}
function qo(e, t, n, r) {
  if (ti) {
    var s = Xl(e, t, n, r);
    if (s === null) ul(e, t, r, ni, n), hu(e, r);
    else if (Zp(s, e, t, n, r)) r.stopPropagation();
    else if ((hu(e, r), t & 4 && -1 < Gp.indexOf(e))) {
      for (; s !== null; ) {
        var i = Zr(s);
        if (
          (i !== null && mf(i),
          (i = Xl(e, t, n, r)),
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
function Xl(e, t, n, r) {
  if (((ni = null), (e = Yo(r)), (e = Gt(e)), e !== null))
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
      switch (Vp()) {
        case Ko:
          return 1;
        case ff:
          return 4;
        case Zs:
        case Hp:
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
  Go = null,
  js = null;
function xf() {
  if (js) return js;
  var e,
    t = Go,
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
    X(t.prototype, {
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
  Zo = $e(qn),
  Gr = X({}, qn, { view: 0, detail: 0 }),
  rm = $e(Gr),
  el,
  tl,
  lr,
  Pi = X({}, Gr, {
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
    getModifierState: ea,
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
  sm = X({}, Pi, { dataTransfer: 0 }),
  im = $e(sm),
  lm = X({}, Gr, { relatedTarget: 0 }),
  nl = $e(lm),
  om = X({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  am = $e(om),
  um = X({}, qn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cm = $e(um),
  fm = X({}, qn, { data: 0 }),
  yu = $e(fm),
  dm = {
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
  hm = {
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
  pm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pm[e]) ? !!t[e] : !1;
}
function ea() {
  return mm;
}
var gm = X({}, Gr, {
    key: function (e) {
      if (e.key) {
        var t = dm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? hm[e.keyCode] || "Unidentified"
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
    getModifierState: ea,
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
  ym = $e(gm),
  vm = X({}, Pi, {
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
  vu = $e(vm),
  wm = X({}, Gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ea,
  }),
  _m = $e(wm),
  xm = X({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sm = $e(xm),
  km = X({}, Pi, {
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
  Cm = $e(km),
  Em = [9, 13, 27, 32],
  ta = _t && "CompositionEvent" in window,
  Sr = null;
_t && "documentMode" in document && (Sr = document.documentMode);
var Pm = _t && "TextEvent" in window && !Sr,
  Sf = _t && (!ta || (Sr && 8 < Sr && 11 >= Sr)),
  wu = " ",
  _u = !1;
function kf(e, t) {
  switch (e) {
    case "keyup":
      return Em.indexOf(t.keyCode) !== -1;
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
function Nm(e, t) {
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
function Rm(e, t) {
  if (xn)
    return e === "compositionend" || (!ta && kf(e, t))
      ? ((e = xf()), (js = Go = Ot = null), (xn = !1), e)
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
var Am = {
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
  return t === "input" ? !!Am[e.type] : t === "textarea";
}
function Ef(e, t, n, r) {
  tf(r),
    (t = ri(t, "onChange")),
    0 < t.length &&
      ((n = new Zo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var kr = null,
  $r = null;
function Im(e) {
  Ff(e, 0);
}
function Ni(e) {
  var t = Cn(e);
  if (Kc(t)) return e;
}
function Tm(e, t) {
  if (e === "change") return t;
}
var Pf = !1;
if (_t) {
  var rl;
  if (_t) {
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
    Ef(t, $r, e, Yo(e)), lf(Im, t);
  }
}
function Om(e, t, n) {
  e === "focusin"
    ? (ku(), (kr = t), ($r = n), kr.attachEvent("onpropertychange", Nf))
    : e === "focusout" && ku();
}
function Mm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ni($r);
}
function Lm(e, t) {
  if (e === "click") return Ni(t);
}
function jm(e, t) {
  if (e === "input" || e === "change") return Ni(t);
}
function Fm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tt = typeof Object.is == "function" ? Object.is : Fm;
function Dr(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Tl.call(t, s) || !tt(e[s], t[s])) return !1;
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
  for (var e = window, t = Js(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Js(e.document);
  }
  return t;
}
function na(e) {
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
function $m(e) {
  var t = Af(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && na(n)) {
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
var Dm = _t && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  Jl = null,
  Cr = null,
  ql = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ql ||
    Sn == null ||
    Sn !== Js(r) ||
    ((r = Sn),
    "selectionStart" in r && na(r)
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
        ((t = new Zo("onSelect", "select", null, t, n)),
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
_t &&
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
    zm = ol.toLowerCase(),
    Bm = ol[0].toUpperCase() + ol.slice(1);
  Ht(zm, "on" + Bm);
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
  (e.currentTarget = n), zp(r, t, void 0, e), (e.currentTarget = null);
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
            c = o.currentTarget;
          if (((o = o.listener), a !== i && s.isPropagationStopped())) break e;
          Ru(s, o, c), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((o = r[l]),
            (a = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            a !== i && s.isPropagationStopped())
          )
            break e;
          Ru(s, o, c), (i = a);
        }
    }
  }
  if (Gs) throw ((e = Ql), (Gs = !1), (Ql = null), e);
}
function V(e, t) {
  var n = t[no];
  n === void 0 && (n = t[no] = new Set());
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
      var s = tm;
      break;
    case 4:
      s = nm;
      break;
    default:
      s = qo;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !bl ||
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
    var c = i,
      m = Yo(n),
      f = [];
    e: {
      var p = jf.get(e);
      if (p !== void 0) {
        var y = Zo,
          w = e;
        switch (e) {
          case "keypress":
            if (Fs(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ym;
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
            y = im;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = _m;
            break;
          case Tf:
          case Of:
          case Mf:
            y = am;
            break;
          case Lf:
            y = Sm;
            break;
          case "scroll":
            y = rm;
            break;
          case "wheel":
            y = Cm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = cm;
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
          P = !v && e === "scroll",
          h = v ? (p !== null ? p + "Capture" : null) : p;
        v = [];
        for (var u = c, d; u !== null; ) {
          d = u;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              h !== null && ((g = Mr(u, h)), g != null && v.push(Br(u, g, d)))),
            P)
          )
            break;
          u = u.return;
        }
        0 < v.length &&
          ((p = new y(p, w, null, n, m)), f.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Vl &&
            (w = n.relatedTarget || n.fromElement) &&
            (Gt(w) || w[xt]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = c),
              (w = w ? Gt(w) : null),
              w !== null &&
                ((P = dn(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = c)),
          y !== w)
        ) {
          if (
            ((v = gu),
            (g = "onMouseLeave"),
            (h = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = vu),
              (g = "onPointerLeave"),
              (h = "onPointerEnter"),
              (u = "pointer")),
            (P = y == null ? p : Cn(y)),
            (d = w == null ? p : Cn(w)),
            (p = new v(g, u + "leave", y, n, m)),
            (p.target = P),
            (p.relatedTarget = d),
            (g = null),
            Gt(m) === c &&
              ((v = new v(h, u + "enter", w, n, m)),
              (v.target = d),
              (v.relatedTarget = P),
              (g = v)),
            (P = g),
            y && w)
          )
            t: {
              for (v = y, h = w, u = 0, d = v; d; d = pn(d)) u++;
              for (d = 0, g = h; g; g = pn(g)) d++;
              for (; 0 < u - d; ) (v = pn(v)), u--;
              for (; 0 < d - u; ) (h = pn(h)), d--;
              for (; u--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = pn(v)), (h = pn(h));
              }
              v = null;
            }
          else v = null;
          y !== null && Au(f, p, y, v, !1),
            w !== null && P !== null && Au(f, P, w, v, !0);
        }
      }
      e: {
        if (
          ((p = c ? Cn(c) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var C = Tm;
        else if (xu(p))
          if (Pf) C = jm;
          else {
            C = Mm;
            var x = Om;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Lm);
        if (C && (C = C(e, c))) {
          Ef(f, C, n, m);
          break e;
        }
        x && x(e, p, c),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            Dl(p, "number", p.value);
      }
      switch (((x = c ? Cn(c) : window), e)) {
        case "focusin":
          (xu(x) || x.contentEditable === "true") &&
            ((Sn = x), (Jl = c), (Cr = null));
          break;
        case "focusout":
          Cr = Jl = Sn = null;
          break;
        case "mousedown":
          ql = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ql = !1), Pu(f, n, m);
          break;
        case "selectionchange":
          if (Dm) break;
        case "keydown":
        case "keyup":
          Pu(f, n, m);
      }
      var _;
      if (ta)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        xn
          ? kf(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Sf &&
          n.locale !== "ko" &&
          (xn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && xn && (_ = xf())
            : ((Ot = m),
              (Go = "value" in Ot ? Ot.value : Ot.textContent),
              (xn = !0))),
        (x = ri(c, E)),
        0 < x.length &&
          ((E = new yu(E, e, null, n, m)),
          f.push({ event: E, listeners: x }),
          _ ? (E.data = _) : ((_ = Cf(n)), _ !== null && (E.data = _)))),
        (_ = Pm ? Nm(e, n) : Rm(e, n)) &&
          ((c = ri(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new yu("onBeforeInput", "beforeinput", null, n, m)),
            f.push({ event: m, listeners: c }),
            (m.data = _)));
    }
    Ff(f, t);
  });
}
function Br(e, t, n) {
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
      i != null && r.unshift(Br(e, i, s)),
      (i = Mr(e, t)),
      i != null && r.push(Br(e, i, s))),
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
      c = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      s
        ? ((a = Mr(n, i)), a != null && l.unshift(Br(n, a, o)))
        : s || ((a = Mr(n, i)), a != null && l.push(Br(n, a, o)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Wm = /\r\n?/g,
  Vm = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Wm,
      `
`,
    )
    .replace(Vm, "");
}
function _s(e, t, n) {
  if (((t = Iu(t)), Iu(e) !== t && n)) throw Error(k(425));
}
function si() {}
var Gl = null,
  Zl = null;
function eo(e, t) {
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
var to = typeof setTimeout == "function" ? setTimeout : void 0,
  Hm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Tu = typeof Promise == "function" ? Promise : void 0,
  bm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Tu < "u"
        ? function (e) {
            return Tu.resolve(null).then(e).catch(Qm);
          }
        : to;
function Qm(e) {
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
  ot = "__reactFiber$" + Gn,
  Ur = "__reactProps$" + Gn,
  xt = "__reactContainer$" + Gn,
  no = "__reactEvents$" + Gn,
  Ym = "__reactListeners$" + Gn,
  Km = "__reactHandles$" + Gn;
function Gt(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[ot])) return n;
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
    (e = e[ot] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Ai(e) {
  return e[Ur] || null;
}
var ro = [],
  En = -1;
function bt(e) {
  return { current: e };
}
function H(e) {
  0 > En || ((e.current = ro[En]), (ro[En] = null), En--);
}
function W(e, t) {
  En++, (ro[En] = e.current), (e.current = t);
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
  if (ve.current !== Vt) throw Error(k(168));
  W(ve, t), W(Pe, n);
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(k(108, Op(e) || "Unknown", s));
  return X({}, n, r);
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
  if (!r) throw Error(k(169));
  n
    ? ((e = Df(e, t, sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Pe),
      H(ve),
      W(ve, e))
    : H(Pe),
    W(Pe, n);
}
var gt = null,
  Ii = !1,
  fl = !1;
function zf(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function Xm(e) {
  (Ii = !0), zf(e);
}
function Qt() {
  if (!fl && gt !== null) {
    fl = !0;
    var e = 0,
      t = z;
    try {
      var n = gt;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Ii = !1);
    } catch (s) {
      throw (gt !== null && (gt = gt.slice(e + 1)), cf(Ko, Qt), s);
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
  ze = [],
  Be = 0,
  ln = null,
  yt = 1,
  vt = "";
function Xt(e, t) {
  (Pn[Nn++] = ai), (Pn[Nn++] = oi), (oi = e), (ai = t);
}
function Bf(e, t, n) {
  (ze[Be++] = yt), (ze[Be++] = vt), (ze[Be++] = ln), (ln = e);
  var r = yt;
  e = vt;
  var s = 32 - Ze(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - Ze(t) + s;
  if (30 < i) {
    var l = s - (s % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (s -= l),
      (yt = (1 << (32 - Ze(t) + s)) | (n << s) | r),
      (vt = i + e);
  } else (yt = (1 << i) | (n << s) | r), (vt = e);
}
function ra(e) {
  e.return !== null && (Xt(e, 1), Bf(e, 1, 0));
}
function sa(e) {
  for (; e === oi; )
    (oi = Pn[--Nn]), (Pn[Nn] = null), (ai = Pn[--Nn]), (Pn[Nn] = null);
  for (; e === ln; )
    (ln = ze[--Be]),
      (ze[Be] = null),
      (vt = ze[--Be]),
      (ze[Be] = null),
      (yt = ze[--Be]),
      (ze[Be] = null);
}
var Le = null,
  Me = null,
  b = !1,
  Je = null;
function Uf(e, t) {
  var n = Ue(5, null, null, 0);
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
          ? ((n = ln !== null ? { id: yt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
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
function so(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function io(e) {
  if (b) {
    var t = Me;
    if (t) {
      var n = t;
      if (!ju(e, t)) {
        if (so(e)) throw Error(k(418));
        t = $t(n.nextSibling);
        var r = Le;
        t && ju(e, t)
          ? Uf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (Le = e));
      }
    } else {
      if (so(e)) throw Error(k(418));
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
      (t = t !== "head" && t !== "body" && !eo(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (so(e)) throw (Wf(), Error(k(418)));
    for (; t; ) Uf(e, t), (t = $t(t.nextSibling));
  }
  if ((Fu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
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
function ia(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
var Jm = Ct.ReactCurrentBatchConfig;
function or(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
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
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Ss(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
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
  function t(h, u) {
    if (e) {
      var d = h.deletions;
      d === null ? ((h.deletions = [u]), (h.flags |= 16)) : d.push(u);
    }
  }
  function n(h, u) {
    if (!e) return null;
    for (; u !== null; ) t(h, u), (u = u.sibling);
    return null;
  }
  function r(h, u) {
    for (h = new Map(); u !== null; )
      u.key !== null ? h.set(u.key, u) : h.set(u.index, u), (u = u.sibling);
    return h;
  }
  function s(h, u) {
    return (h = Ut(h, u)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, u, d) {
    return (
      (h.index = d),
      e
        ? ((d = h.alternate),
          d !== null
            ? ((d = d.index), d < u ? ((h.flags |= 2), u) : d)
            : ((h.flags |= 2), u))
        : ((h.flags |= 1048576), u)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function o(h, u, d, g) {
    return u === null || u.tag !== 6
      ? ((u = vl(d, h.mode, g)), (u.return = h), u)
      : ((u = s(u, d)), (u.return = h), u);
  }
  function a(h, u, d, g) {
    var C = d.type;
    return C === _n
      ? m(h, u, d.props.children, g, d.key)
      : u !== null &&
          (u.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Rt &&
              $u(C) === u.type))
        ? ((g = s(u, d.props)), (g.ref = or(h, u, d)), (g.return = h), g)
        : ((g = Vs(d.type, d.key, d.props, null, h.mode, g)),
          (g.ref = or(h, u, d)),
          (g.return = h),
          g);
  }
  function c(h, u, d, g) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== d.containerInfo ||
      u.stateNode.implementation !== d.implementation
      ? ((u = wl(d, h.mode, g)), (u.return = h), u)
      : ((u = s(u, d.children || [])), (u.return = h), u);
  }
  function m(h, u, d, g, C) {
    return u === null || u.tag !== 7
      ? ((u = rn(d, h.mode, g, C)), (u.return = h), u)
      : ((u = s(u, d)), (u.return = h), u);
  }
  function f(h, u, d) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = vl("" + u, h.mode, d)), (u.return = h), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case fs:
          return (
            (d = Vs(u.type, u.key, u.props, null, h.mode, d)),
            (d.ref = or(h, null, u)),
            (d.return = h),
            d
          );
        case wn:
          return (u = wl(u, h.mode, d)), (u.return = h), u;
        case Rt:
          var g = u._init;
          return f(h, g(u._payload), d);
      }
      if (fr(u) || nr(u))
        return (u = rn(u, h.mode, d, null)), (u.return = h), u;
      Ss(h, u);
    }
    return null;
  }
  function p(h, u, d, g) {
    var C = u !== null ? u.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : o(h, u, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fs:
          return d.key === C ? a(h, u, d, g) : null;
        case wn:
          return d.key === C ? c(h, u, d, g) : null;
        case Rt:
          return (C = d._init), p(h, u, C(d._payload), g);
      }
      if (fr(d) || nr(d)) return C !== null ? null : m(h, u, d, g, null);
      Ss(h, d);
    }
    return null;
  }
  function y(h, u, d, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (h = h.get(d) || null), o(u, h, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fs:
          return (h = h.get(g.key === null ? d : g.key) || null), a(u, h, g, C);
        case wn:
          return (h = h.get(g.key === null ? d : g.key) || null), c(u, h, g, C);
        case Rt:
          var x = g._init;
          return y(h, u, d, x(g._payload), C);
      }
      if (fr(g) || nr(g)) return (h = h.get(d) || null), m(u, h, g, C, null);
      Ss(u, g);
    }
    return null;
  }
  function w(h, u, d, g) {
    for (
      var C = null, x = null, _ = u, E = (u = 0), T = null;
      _ !== null && E < d.length;
      E++
    ) {
      _.index > E ? ((T = _), (_ = null)) : (T = _.sibling);
      var A = p(h, _, d[E], g);
      if (A === null) {
        _ === null && (_ = T);
        break;
      }
      e && _ && A.alternate === null && t(h, _),
        (u = i(A, u, E)),
        x === null ? (C = A) : (x.sibling = A),
        (x = A),
        (_ = T);
    }
    if (E === d.length) return n(h, _), b && Xt(h, E), C;
    if (_ === null) {
      for (; E < d.length; E++)
        (_ = f(h, d[E], g)),
          _ !== null &&
            ((u = i(_, u, E)), x === null ? (C = _) : (x.sibling = _), (x = _));
      return b && Xt(h, E), C;
    }
    for (_ = r(h, _); E < d.length; E++)
      (T = y(_, h, E, d[E], g)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? E : T.key),
          (u = i(T, u, E)),
          x === null ? (C = T) : (x.sibling = T),
          (x = T));
    return (
      e &&
        _.forEach(function (O) {
          return t(h, O);
        }),
      b && Xt(h, E),
      C
    );
  }
  function v(h, u, d, g) {
    var C = nr(d);
    if (typeof C != "function") throw Error(k(150));
    if (((d = C.call(d)), d == null)) throw Error(k(151));
    for (
      var x = (C = null), _ = u, E = (u = 0), T = null, A = d.next();
      _ !== null && !A.done;
      E++, A = d.next()
    ) {
      _.index > E ? ((T = _), (_ = null)) : (T = _.sibling);
      var O = p(h, _, A.value, g);
      if (O === null) {
        _ === null && (_ = T);
        break;
      }
      e && _ && O.alternate === null && t(h, _),
        (u = i(O, u, E)),
        x === null ? (C = O) : (x.sibling = O),
        (x = O),
        (_ = T);
    }
    if (A.done) return n(h, _), b && Xt(h, E), C;
    if (_ === null) {
      for (; !A.done; E++, A = d.next())
        (A = f(h, A.value, g)),
          A !== null &&
            ((u = i(A, u, E)), x === null ? (C = A) : (x.sibling = A), (x = A));
      return b && Xt(h, E), C;
    }
    for (_ = r(h, _); !A.done; E++, A = d.next())
      (A = y(_, h, E, A.value, g)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? E : A.key),
          (u = i(A, u, E)),
          x === null ? (C = A) : (x.sibling = A),
          (x = A));
    return (
      e &&
        _.forEach(function (De) {
          return t(h, De);
        }),
      b && Xt(h, E),
      C
    );
  }
  function P(h, u, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === _n &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case fs:
          e: {
            for (var C = d.key, x = u; x !== null; ) {
              if (x.key === C) {
                if (((C = d.type), C === _n)) {
                  if (x.tag === 7) {
                    n(h, x.sibling),
                      (u = s(x, d.props.children)),
                      (u.return = h),
                      (h = u);
                    break e;
                  }
                } else if (
                  x.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Rt &&
                    $u(C) === x.type)
                ) {
                  n(h, x.sibling),
                    (u = s(x, d.props)),
                    (u.ref = or(h, x, d)),
                    (u.return = h),
                    (h = u);
                  break e;
                }
                n(h, x);
                break;
              } else t(h, x);
              x = x.sibling;
            }
            d.type === _n
              ? ((u = rn(d.props.children, h.mode, g, d.key)),
                (u.return = h),
                (h = u))
              : ((g = Vs(d.type, d.key, d.props, null, h.mode, g)),
                (g.ref = or(h, u, d)),
                (g.return = h),
                (h = g));
          }
          return l(h);
        case wn:
          e: {
            for (x = d.key; u !== null; ) {
              if (u.key === x)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === d.containerInfo &&
                  u.stateNode.implementation === d.implementation
                ) {
                  n(h, u.sibling),
                    (u = s(u, d.children || [])),
                    (u.return = h),
                    (h = u);
                  break e;
                } else {
                  n(h, u);
                  break;
                }
              else t(h, u);
              u = u.sibling;
            }
            (u = wl(d, h.mode, g)), (u.return = h), (h = u);
          }
          return l(h);
        case Rt:
          return (x = d._init), P(h, u, x(d._payload), g);
      }
      if (fr(d)) return w(h, u, d, g);
      if (nr(d)) return v(h, u, d, g);
      Ss(h, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        u !== null && u.tag === 6
          ? (n(h, u.sibling), (u = s(u, d)), (u.return = h), (h = u))
          : (n(h, u), (u = vl(d, h.mode, g)), (u.return = h), (h = u)),
        l(h))
      : n(h, u);
  }
  return P;
}
var bn = Vf(!0),
  Hf = Vf(!1),
  ui = bt(null),
  ci = null,
  Rn = null,
  la = null;
function oa() {
  la = Rn = ci = null;
}
function aa(e) {
  var t = ui.current;
  H(ui), (e._currentValue = t);
}
function lo(e, t, n) {
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
    (la = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function Ve(e) {
  var t = e._currentValue;
  if (la !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (ci === null) throw Error(k(308));
      (Rn = e), (ci.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var Zt = null;
function ua(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function bf(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), ua(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
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
function ca(e) {
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
function wt(e, t) {
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
      St(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), ua(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function $s(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xo(e, n);
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
      c = a.next;
    (a.next = null), l === null ? (i = c) : (l.next = c), (l = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (o = m.lastBaseUpdate),
      o !== l &&
        (o === null ? (m.firstBaseUpdate = c) : (o.next = c),
        (m.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = s.baseState;
    (l = 0), (m = c = a = null), (o = i);
    do {
      var p = o.lane,
        y = o.eventTime;
      if ((r & p) === p) {
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
          switch (((p = t), (y = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                f = w.call(y, f, p);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (p = typeof w == "function" ? w.call(y, f, p) : w),
                p == null)
              )
                break e;
              f = X({}, f, p);
              break e;
            case 2:
              At = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (p = s.effects),
          p === null ? (s.effects = [o]) : p.push(o));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          m === null ? ((c = m = y), (a = f)) : (m = m.next = y),
          (l |= p);
      if (((o = o.next), o === null)) {
        if (((o = s.shared.pending), o === null)) break;
        (p = o),
          (o = p.next),
          (p.next = null),
          (s.lastBaseUpdate = p),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = f),
      (s.baseState = a),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = m),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (l |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (an |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(k(191, s));
        s.call(r);
      }
    }
}
var es = {},
  ct = bt(es),
  Wr = bt(es),
  Vr = bt(es);
function en(e) {
  if (e === es) throw Error(k(174));
  return e;
}
function fa(e, t) {
  switch ((W(Vr, t), W(Wr, e), W(ct, es), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bl(t, e));
  }
  H(ct), W(ct, t);
}
function Qn() {
  H(ct), H(Wr), H(Vr);
}
function Yf(e) {
  en(Vr.current);
  var t = en(ct.current),
    n = Bl(t, e.type);
  t !== n && (W(Wr, e), W(ct, n));
}
function da(e) {
  Wr.current === e && (H(ct), H(Wr));
}
var Y = bt(0);
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
function ha() {
  for (var e = 0; e < dl.length; e++)
    dl[e]._workInProgressVersionPrimary = null;
  dl.length = 0;
}
var Ds = Ct.ReactCurrentDispatcher,
  hl = Ct.ReactCurrentBatchConfig,
  on = 0,
  K = null,
  ne = null,
  oe = null,
  hi = !1,
  Er = !1,
  Hr = 0,
  qm = 0;
function pe() {
  throw Error(k(321));
}
function pa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!tt(e[n], t[n])) return !1;
  return !0;
}
function ma(e, t, n, r, s, i) {
  if (
    ((on = i),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ds.current = e === null || e.memoizedState === null ? tg : ng),
    (e = n(r, s)),
    Er)
  ) {
    i = 0;
    do {
      if (((Er = !1), (Hr = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (oe = ne = null),
        (t.updateQueue = null),
        (Ds.current = rg),
        (e = n(r, s));
    } while (Er);
  }
  if (
    ((Ds.current = pi),
    (t = ne !== null && ne.next !== null),
    (on = 0),
    (oe = ne = K = null),
    (hi = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function ga() {
  var e = Hr !== 0;
  return (Hr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (K.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function He() {
  if (ne === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = oe === null ? K.memoizedState : oe.next;
  if (t !== null) (oe = t), (ne = e);
  else {
    if (e === null) throw Error(k(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
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
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ne,
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
      c = i;
    do {
      var m = c.lane;
      if ((on & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((o = a = f), (l = r)) : (a = a.next = f),
          (K.lanes |= m),
          (an |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (l = r) : (a.next = o),
      tt(r, t.memoizedState) || (Ee = !0),
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
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var l = (s = s.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== s);
    tt(i, t.memoizedState) || (Ee = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Kf() {}
function Xf(e, t) {
  var n = K,
    r = He(),
    s = t(),
    i = !tt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Ee = !0)),
    (r = r.queue),
    ya(Gf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qr(9, qf.bind(null, n, r, s, t), void 0, null),
      ae === null)
    )
      throw Error(k(349));
    on & 30 || Jf(n, t, s);
  }
  return s;
}
function Jf(e, t, n) {
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
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function ed(e) {
  var t = St(e, 1);
  t !== null && et(t, e, 1, -1);
}
function Bu(e) {
  var t = st();
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
    (e = e.dispatch = eg.bind(null, K, e)),
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
  return He().memoizedState;
}
function zs(e, t, n, r) {
  var s = st();
  (K.flags |= e),
    (s.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ti(e, t, n, r) {
  var s = He();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ne !== null) {
    var l = ne.memoizedState;
    if (((i = l.destroy), r !== null && pa(r, l.deps))) {
      s.memoizedState = Qr(t, n, i, r);
      return;
    }
  }
  (K.flags |= e), (s.memoizedState = Qr(1 | t, n, i, r));
}
function Uu(e, t) {
  return zs(8390656, 8, e, t);
}
function ya(e, t) {
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
function va() {}
function ld(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function od(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ad(e, t, n) {
  return on & 21
    ? (tt(n, t) || ((n = hf()), (K.lanes |= n), (an |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function Gm(e, t) {
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
  return He().memoizedState;
}
function Zm(e, t, n) {
  var r = Bt(e);
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
    et(n, e, r, s), dd(n, t, r);
  }
}
function eg(e, t, n) {
  var r = Bt(e),
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
        if (((s.hasEagerState = !0), (s.eagerState = o), tt(o, l))) {
          var a = t.interleaved;
          a === null
            ? ((s.next = s), ua(t))
            : ((s.next = a.next), (a.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = bf(e, t, s, r)),
      n !== null && ((s = _e()), et(n, e, r, s), dd(n, t, r));
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
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xo(e, n);
  }
}
var pi = {
    readContext: Ve,
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
  tg = {
    readContext: Ve,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ve,
    useEffect: Uu,
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
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
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
        (e = e.dispatch = Zm.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bu,
    useDebugValue: va,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = Bu(!1),
        t = e[0];
      return (e = Gm.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        s = st();
      if (b) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(k(349));
        on & 30 || Jf(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        Uu(Gf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qr(9, qf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ae.identifierPrefix;
      if (b) {
        var n = vt,
          r = yt;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ng = {
    readContext: Ve,
    useCallback: ld,
    useContext: Ve,
    useEffect: ya,
    useImperativeHandle: id,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: od,
    useReducer: pl,
    useRef: td,
    useState: function () {
      return pl(br);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = He();
      return ad(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = pl(br)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Kf,
    useSyncExternalStore: Xf,
    useId: ud,
    unstable_isNewReconciler: !1,
  },
  rg = {
    readContext: Ve,
    useCallback: ld,
    useContext: Ve,
    useEffect: ya,
    useImperativeHandle: id,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: od,
    useReducer: ml,
    useRef: td,
    useState: function () {
      return ml(br);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = He();
      return ne === null ? (t.memoizedState = e) : ad(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(br)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Kf,
    useSyncExternalStore: Xf,
    useId: ud,
    unstable_isNewReconciler: !1,
  };
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function oo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
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
      s = Bt(e),
      i = wt(r, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Dt(e, i, s)),
      t !== null && (et(t, e, s, r), $s(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      s = Bt(e),
      i = wt(r, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Dt(e, i, s)),
      t !== null && (et(t, e, s, r), $s(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = _e(),
      r = Bt(e),
      s = wt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = Dt(e, s, r)),
      t !== null && (et(t, e, r, n), $s(t, e, r));
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
      ? (i = Ve(i))
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
function ao(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), ca(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = Ve(i))
    : ((i = Ne(t) ? sn : ve.current), (s.context = Vn(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (oo(e, t, i, n), (s.state = e.memoizedState)),
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
function Yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Tp(r)), (r = r.return);
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
function uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sg = typeof WeakMap == "function" ? WeakMap : Map;
function pd(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gi || ((gi = !0), (_o = r)), uo(e, t);
    }),
    n
  );
}
function md(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        uo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        uo(e, t),
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
    r = e.pingCache = new sg();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = vg.bind(null, e, t, n)), t.then(e, e));
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
              : ((t = wt(-1, 1)), (t.tag = 2), Dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ig = Ct.ReactCurrentOwner,
  Ee = !1;
function we(e, t, n, r) {
  t.child = e === null ? Hf(t, null, n, r) : bn(t, e.child, n, r);
}
function Yu(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Fn(t, s),
    (r = ma(e, t, n, r, i, s)),
    (n = ga()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        kt(e, t, s))
      : (b && n && ra(t), (t.flags |= 1), we(e, t, r, s), t.child)
  );
}
function Ku(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Pa(i) &&
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
      return kt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Ut(i, r)),
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
      else return (t.lanes = e.lanes), kt(e, t, s);
  }
  return co(e, t, n, r, s);
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
function co(e, t, n, r, s) {
  var i = Ne(n) ? sn : ve.current;
  return (
    (i = Vn(t, i)),
    Fn(t, s),
    (n = ma(e, t, n, r, i, s)),
    (r = ga()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        kt(e, t, s))
      : (b && r && ra(t), (t.flags |= 1), we(e, t, n, s), t.child)
  );
}
function Xu(e, t, n, r, s) {
  if (Ne(n)) {
    var i = !0;
    li(t);
  } else i = !1;
  if ((Fn(t, s), t.stateNode === null))
    Bs(e, t), hd(t, n, r), ao(t, n, r, s), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      o = t.memoizedProps;
    l.props = o;
    var a = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ve(c))
      : ((c = Ne(n) ? sn : ve.current), (c = Vn(t, c)));
    var m = n.getDerivedStateFromProps,
      f =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== r || a !== c) && Vu(t, l, r, c)),
      (At = !1);
    var p = t.memoizedState;
    (l.state = p),
      fi(t, r, l, s),
      (a = t.memoizedState),
      o !== r || p !== a || Pe.current || At
        ? (typeof m == "function" && (oo(t, n, m, r), (a = t.memoizedState)),
          (o = At || Wu(t, n, o, r, p, a, c))
            ? (f ||
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
          (l.context = c),
          (r = o))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Qf(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : Ye(t.type, o)),
      (l.props = c),
      (f = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ve(a))
        : ((a = Ne(n) ? sn : ve.current), (a = Vn(t, a)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== f || p !== a) && Vu(t, l, r, a)),
      (At = !1),
      (p = t.memoizedState),
      (l.state = p),
      fi(t, r, l, s);
    var w = t.memoizedState;
    o !== f || p !== w || Pe.current || At
      ? (typeof y == "function" && (oo(t, n, y, r), (w = t.memoizedState)),
        (c = At || Wu(t, n, c, r, p, w, a) || !1)
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
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = a),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fo(e, t, n, r, i, s);
}
function fo(e, t, n, r, s, i) {
  vd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return s && Lu(t, n, !1), kt(e, t, i);
  (r = t.stateNode), (ig.current = t);
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
    fa(e, t.containerInfo);
}
function Ju(e, t, n, r, s) {
  return Hn(), ia(s), (t.flags |= 256), we(e, t, n, r), t.child;
}
var ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function po(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _d(e, t, n) {
  var r = t.pendingProps,
    s = Y.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    o;
  if (
    ((o = l) ||
      (o = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    W(Y, s & 1),
    e === null)
  )
    return (
      io(t),
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
              (t.child.memoizedState = po(n)),
              (t.memoizedState = ho),
              e)
            : wa(t, l))
    );
  if (((s = e.memoizedState), s !== null && ((o = s.dehydrated), o !== null)))
    return lg(e, t, l, r, o, s, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (s = e.child), (o = s.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ut(s, a)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      o !== null ? (i = Ut(o, i)) : ((i = rn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? po(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ho),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Ut(i, { mode: "visible", children: r.children })),
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
function wa(e, t) {
  return (
    (t = ji({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ks(e, t, n, r) {
  return (
    r !== null && ia(r),
    bn(t, e.child, null, n),
    (e = wa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lg(e, t, n, r, s, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gl(Error(k(422)))), ks(e, t, l, r))
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
          (t.child.memoizedState = po(l)),
          (t.memoizedState = ho),
          i);
  if (!(t.mode & 1)) return ks(e, t, l, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(k(419))), (r = gl(i, r, void 0)), ks(e, t, l, r);
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
          ((i.retryLane = s), St(e, s), et(r, e, s, -1));
    }
    return Ea(), (r = gl(Error(k(421)))), ks(e, t, l, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wg.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Me = $t(s.nextSibling)),
      (Le = t),
      (b = !0),
      (Je = null),
      e !== null &&
        ((ze[Be++] = yt),
        (ze[Be++] = vt),
        (ze[Be++] = ln),
        (yt = e.id),
        (vt = e.overflow),
        (ln = t)),
      (t = wa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), lo(e.return, t, n);
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
  if ((we(e, t, r.children, n), (r = Y.current), r & 2))
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
  if ((W(Y, r), !(t.mode & 1))) t.memoizedState = null;
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
function Bs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (an |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ut(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function og(e, t, n) {
  switch (t.tag) {
    case 3:
      wd(t), Hn();
      break;
    case 5:
      Yf(t);
      break;
    case 1:
      Ne(t.type) && li(t);
      break;
    case 4:
      fa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      W(ui, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? _d(e, t, n)
            : (W(Y, Y.current & 1),
              (e = kt(e, t, n)),
              e !== null ? e.sibling : null);
      W(Y, Y.current & 1);
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
        W(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yd(e, t, n);
  }
  return kt(e, t, n);
}
var Sd, mo, kd, Cd;
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
mo = function () {};
kd = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), en(ct.current);
    var i = null;
    switch (n) {
      case "input":
        (s = Fl(e, s)), (r = Fl(e, r)), (i = []);
        break;
      case "select":
        (s = X({}, s, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (s = zl(e, s)), (r = zl(e, r)), (i = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = si);
    }
    Ul(n, r);
    var l;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var o = s[c];
          for (l in o) o.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Tr.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((o = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && a !== o && (a != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                o[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (i = i || []).push(c, a))
            : c === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(c, "" + a)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Tr.hasOwnProperty(c)
                  ? (a != null && c === "onScroll" && V("scroll", e),
                    i || o === a || (i = []))
                  : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
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
function ag(e, t, n) {
  var r = t.pendingProps;
  switch ((sa(t), t.tag)) {
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
        ha(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Je !== null && (ko(Je), (Je = null)))),
        mo(e, t),
        me(t),
        null
      );
    case 5:
      da(t);
      var s = en(Vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kd(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return me(t), null;
        }
        if (((e = en(ct.current)), xs(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[ot] = t), (r[Ur] = i), (e = (t.mode & 1) !== 0), n)) {
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
            (e[ot] = t),
            (e[Ur] = r),
            Sd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Wl(n, r)), n)) {
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
                lu(e, r), (s = Fl(e, r)), V("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = X({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                au(e, r), (s = zl(e, r)), V("invalid", e);
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
                          : a != null && Vo(e, i, a, l));
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
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = en(Vr.current)), en(ct.current), xs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
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
            (r[ot] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (H(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && Me !== null && t.mode & 1 && !(t.flags & 128))
          Wf(), Hn(), (t.flags |= 98560), (i = !1);
        else if (((i = xs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[ot] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (i = !1);
        } else Je !== null && (ko(Je), (Je = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? re === 0 && (re = 3) : Ea())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Qn(), mo(e, t), e === null && zr(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return aa(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && ii(), me(t), null;
    case 19:
      if ((H(Y), (i = t.memoizedState), i === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) ar(i, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
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
                return W(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > Kn &&
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
            2 * G() - i.renderingStartTime > Kn &&
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
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = Y.current),
          W(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        Ca(),
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
  throw Error(k(156, t.tag));
}
function ug(e, t) {
  switch ((sa(t), t.tag)) {
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
        ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return da(t), null;
    case 13:
      if ((H(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(Y), null;
    case 4:
      return Qn(), null;
    case 10:
      return aa(t.type._context), null;
    case 22:
    case 23:
      return Ca(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cs = !1,
  ye = !1,
  cg = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function go(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Gu = !1;
function fg(e, t) {
  if (((Gl = ti), (e = Af()), na(e))) {
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
            c = 0,
            m = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (s !== 0 && f.nodeType !== 3) || (o = l + s),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (p = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++c === s && (o = l),
                p === i && ++m === r && (a = l),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = y;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zl = { focusedElem: e, selectionRange: n }, ti = !1, N = t; N !== null; )
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
                    P = w.memoizedState,
                    h = t.stateNode,
                    u = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ye(t.type, v),
                      P,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (g) {
          J(t, t.return, g);
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
        (s.destroy = void 0), i !== void 0 && go(t, n, i);
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
function yo(e) {
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
        (delete t[ot], delete t[Ur], delete t[no], delete t[Ym], delete t[Km])),
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
function vo(e, t, n) {
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
    for (vo(e, t, n), e = e.sibling; e !== null; ) vo(e, t, n), (e = e.sibling);
}
function wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wo(e, t, n), e = e.sibling; e !== null; ) wo(e, t, n), (e = e.sibling);
}
var ue = null,
  Xe = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) Nd(e, t, n), (n = n.sibling);
}
function Nd(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(Ei, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || An(n, t);
    case 6:
      var r = ue,
        s = Xe;
      (ue = null),
        Pt(e, t, n),
        (ue = r),
        (Xe = s),
        ue !== null &&
          (Xe
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Xe
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
        (s = Xe),
        (ue = n.stateNode.containerInfo),
        (Xe = !0),
        Pt(e, t, n),
        (ue = r),
        (Xe = s);
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
            l !== void 0 && (i & 2 || i & 4) && go(n, t, l),
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
          J(n, t, o);
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
    n === null && (n = e.stateNode = new cg()),
      t.forEach(function (r) {
        var s = _g.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function be(e, t) {
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
              (ue = o.stateNode), (Xe = !1);
              break e;
            case 3:
              (ue = o.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (ue = o.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          o = o.return;
        }
        if (ue === null) throw Error(k(160));
        Nd(i, l, s), (ue = null), (Xe = !1);
        var a = s.alternate;
        a !== null && (a.return = null), (s.return = null);
      } catch (c) {
        J(s, t, c);
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
      if ((be(t, e), nt(e), r & 4)) {
        try {
          Pr(3, e, e.return), Mi(3, e);
        } catch (v) {
          J(e, e.return, v);
        }
        try {
          Pr(5, e, e.return);
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 1:
      be(t, e), nt(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (
        (be(t, e),
        nt(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Or(s, "");
        } catch (v) {
          J(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && Xc(s, i),
              Wl(o, l);
            var c = Wl(o, i);
            for (l = 0; l < a.length; l += 2) {
              var m = a[l],
                f = a[l + 1];
              m === "style"
                ? ef(s, f)
                : m === "dangerouslySetInnerHTML"
                  ? Gc(s, f)
                  : m === "children"
                    ? Or(s, f)
                    : Vo(s, m, f, c);
            }
            switch (o) {
              case "input":
                $l(s, i);
                break;
              case "textarea":
                Jc(s, i);
                break;
              case "select":
                var p = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? On(s, !!i.multiple, y, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? On(s, !!i.multiple, i.defaultValue, !0)
                      : On(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Ur] = i;
          } catch (v) {
            J(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((be(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (be(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fr(t.containerInfo);
        } catch (v) {
          J(e, e.return, v);
        }
      break;
    case 4:
      be(t, e), nt(e);
      break;
    case 13:
      be(t, e),
        nt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Sa = G())),
        r & 4 && ec(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (c = ye) || m), be(t, e), (ye = c)) : be(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (N = e, m = e.child; m !== null; ) {
            for (f = N = m; N !== null; ) {
              switch (((p = N), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, p, p.return);
                  break;
                case 1:
                  An(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      J(r, n, v);
                    }
                  }
                  break;
                case 5:
                  An(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    nc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (N = y)) : nc(f);
            }
            m = m.sibling;
          }
        e: for (m = null, f = e; ; ) {
          if (f.tag === 5) {
            if (m === null) {
              m = f;
              try {
                (s = f.stateNode),
                  c
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = Zc("display", l)));
              } catch (v) {
                J(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (m === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                J(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            m === f && (m = null), (f = f.return);
          }
          m === f && (m = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      be(t, e), nt(e), r & 4 && ec(e);
      break;
    case 21:
      break;
    default:
      be(t, e), nt(e);
  }
}
function nt(e) {
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
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Or(s, ""), (r.flags &= -33));
          var i = Zu(e);
          wo(e, i, s);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            o = Zu(e);
          vo(e, o, l);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      J(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dg(e, t, n) {
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
        var c = ye;
        if (((Cs = l), (ye = a) && !c))
          for (N = s; N !== null; )
            (l = N),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? rc(s)
                : a !== null
                  ? ((a.return = l), (N = a))
                  : rc(s);
        for (; i !== null; ) (N = i), Ad(i), (i = i.sibling);
        (N = s), (Cs = o), (ye = c);
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
                      : Ye(t.type, n.memoizedProps);
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
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var f = m.dehydrated;
                    f !== null && Fr(f);
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
              throw Error(k(163));
          }
        ye || (t.flags & 512 && yo(t));
      } catch (p) {
        J(t, t.return, p);
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
            J(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              J(t, s, a);
            }
          }
          var i = t.return;
          try {
            yo(t);
          } catch (a) {
            J(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            yo(t);
          } catch (a) {
            J(t, l, a);
          }
      }
    } catch (a) {
      J(t, t.return, a);
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
var hg = Math.ceil,
  mi = Ct.ReactCurrentDispatcher,
  _a = Ct.ReactCurrentOwner,
  We = Ct.ReactCurrentBatchConfig,
  D = 0,
  ae = null,
  Z = null,
  fe = 0,
  Oe = 0,
  In = bt(0),
  re = 0,
  Yr = null,
  an = 0,
  Li = 0,
  xa = 0,
  Nr = null,
  Ce = null,
  Sa = 0,
  Kn = 1 / 0,
  mt = null,
  gi = !1,
  _o = null,
  zt = null,
  Es = !1,
  Mt = null,
  yi = 0,
  Rr = 0,
  xo = null,
  Us = -1,
  Ws = 0;
function _e() {
  return D & 6 ? G() : Us !== -1 ? Us : (Us = G());
}
function Bt(e) {
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
function et(e, t, n, r) {
  if (50 < Rr) throw ((Rr = 0), (xo = null), Error(k(185)));
  qr(e, n, r),
    (!(D & 2) || e !== ae) &&
      (e === ae && (!(D & 2) && (Li |= n), re === 4 && Tt(e, fe)),
      Re(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((Kn = G() + 500), Ii && Qt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = ei(e, e === ae ? fe : 0);
  if (r === 0)
    n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && du(n), t === 1))
      e.tag === 0 ? Xm(sc.bind(null, e)) : zf(sc.bind(null, e)),
        bm(function () {
          !(D & 6) && Qt();
        }),
        (n = null);
    else {
      switch (pf(r)) {
        case 1:
          n = Ko;
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
  if (((Us = -1), (Ws = 0), D & 6)) throw Error(k(327));
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
    (ae !== e || fe !== t) && ((mt = null), (Kn = G() + 500), nn(e, t));
    do
      try {
        gg();
        break;
      } catch (o) {
        Td(e, o);
      }
    while (!0);
    oa(),
      (mi.current = i),
      (D = s),
      Z !== null ? (t = 0) : ((ae = null), (fe = 0), (t = re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Yl(e)), s !== 0 && ((r = s), (t = So(e, s)))), t === 1)
    )
      throw ((n = Yr), nn(e, 0), Tt(e, r), Re(e, G()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !pg(s) &&
          ((t = vi(e, r)),
          t === 2 && ((i = Yl(e)), i !== 0 && ((r = i), (t = So(e, i)))),
          t === 1))
      )
        throw ((n = Yr), nn(e, 0), Tt(e, r), Re(e, G()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Jt(e, Ce, mt);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = Sa + 500 - G()), 10 < t))
          ) {
            if (ei(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              _e(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = to(Jt.bind(null, e, Ce, mt), t);
            break;
          }
          Jt(e, Ce, mt);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var l = 31 - Ze(r);
            (i = 1 << l), (l = t[l]), l > s && (s = l), (r &= ~i);
          }
          if (
            ((r = s),
            (r = G() - r),
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
                          : 1960 * hg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = to(Jt.bind(null, e, Ce, mt), r);
            break;
          }
          Jt(e, Ce, mt);
          break;
        case 5:
          Jt(e, Ce, mt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Re(e, G()), e.callbackNode === n ? Id.bind(null, e) : null;
}
function So(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = vi(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && ko(t)),
    e
  );
}
function ko(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function pg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!tt(i(), s)) return !1;
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
    t &= ~xa,
      t &= ~Li,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function sc(e) {
  if (D & 6) throw Error(k(327));
  $n();
  var t = ei(e, 0);
  if (!(t & 1)) return Re(e, G()), null;
  var n = vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yl(e);
    r !== 0 && ((t = r), (n = So(e, r)));
  }
  if (n === 1) throw ((n = Yr), nn(e, 0), Tt(e, t), Re(e, G()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, Ce, mt),
    Re(e, G()),
    null
  );
}
function ka(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((Kn = G() + 500), Ii && Qt());
  }
}
function un(e) {
  Mt !== null && Mt.tag === 0 && !(D & 6) && $n();
  var t = D;
  D |= 1;
  var n = We.transition,
    r = z;
  try {
    if (((We.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (We.transition = n), (D = t), !(D & 6) && Qt();
  }
}
function Ca() {
  (Oe = In.current), H(In);
}
function nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hm(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((sa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ii();
          break;
        case 3:
          Qn(), H(Pe), H(ve), ha();
          break;
        case 5:
          da(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          H(Y);
          break;
        case 19:
          H(Y);
          break;
        case 10:
          aa(r.type._context);
          break;
        case 22:
        case 23:
          Ca();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (Z = e = Ut(e.current, null)),
    (fe = Oe = t),
    (re = 0),
    (Yr = null),
    (xa = Li = an = 0),
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
    var n = Z;
    try {
      if ((oa(), (Ds.current = pi), hi)) {
        for (var r = K.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        hi = !1;
      }
      if (
        ((on = 0),
        (oe = ne = K = null),
        (Er = !1),
        (Hr = 0),
        (_a.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), (Yr = t), (Z = null);
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
          var c = a,
            m = o,
            f = m.tag;
          if (!(m.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = bu(l);
          if (y !== null) {
            (y.flags &= -257),
              Qu(y, l, o, i, t),
              y.mode & 1 && Hu(i, c, t),
              (t = y),
              (a = c);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(i, c, t), Ea();
              break e;
            }
            a = Error(k(426));
          }
        } else if (b && o.mode & 1) {
          var P = bu(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Qu(P, l, o, i, t),
              ia(Yn(a, o));
            break e;
          }
        }
        (i = a = Yn(a, o)),
          re !== 4 && (re = 2),
          Nr === null ? (Nr = [i]) : Nr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = pd(i, a, t);
              Du(i, h);
              break e;
            case 1:
              o = a;
              var u = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (zt === null || !zt.has(d))))
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
    } catch (C) {
      (t = C), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Od() {
  var e = mi.current;
  return (mi.current = pi), e === null ? pi : e;
}
function Ea() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    ae === null || (!(an & 268435455) && !(Li & 268435455)) || Tt(ae, fe);
}
function vi(e, t) {
  var n = D;
  D |= 2;
  var r = Od();
  (ae !== e || fe !== t) && ((mt = null), nn(e, t));
  do
    try {
      mg();
      break;
    } catch (s) {
      Td(e, s);
    }
  while (!0);
  if ((oa(), (D = n), (mi.current = r), Z !== null)) throw Error(k(261));
  return (ae = null), (fe = 0), re;
}
function mg() {
  for (; Z !== null; ) Md(Z);
}
function gg() {
  for (; Z !== null && !Up(); ) Md(Z);
}
function Md(e) {
  var t = Fd(e.alternate, e, Oe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ld(e) : (Z = t),
    (_a.current = null);
}
function Ld(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ug(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (Z = null);
        return;
      }
    } else if (((n = ag(n, t, Oe)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Jt(e, t, n) {
  var r = z,
    s = We.transition;
  try {
    (We.transition = null), (z = 1), yg(e, t, n, r);
  } finally {
    (We.transition = s), (z = r);
  }
  return null;
}
function yg(e, t, n, r) {
  do $n();
  while (Mt !== null);
  if (D & 6) throw Error(k(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (qp(e, i),
    e === ae && ((Z = ae = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Es ||
      ((Es = !0),
      $d(Zs, function () {
        return $n(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = We.transition), (We.transition = null);
    var l = z;
    z = 1;
    var o = D;
    (D |= 4),
      (_a.current = null),
      fg(e, n),
      Rd(n, e),
      $m(Zl),
      (ti = !!Gl),
      (Zl = Gl = null),
      (e.current = n),
      dg(n),
      Wp(),
      (D = o),
      (z = l),
      (We.transition = i);
  } else e.current = n;
  if (
    (Es && ((Es = !1), (Mt = e), (yi = s)),
    (i = e.pendingLanes),
    i === 0 && (zt = null),
    bp(n.stateNode),
    Re(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (gi) throw ((gi = !1), (e = _o), (_o = null), e);
  return (
    yi & 1 && e.tag !== 0 && $n(),
    (i = e.pendingLanes),
    i & 1 ? (e === xo ? Rr++ : ((Rr = 0), (xo = e))) : (Rr = 0),
    Qt(),
    null
  );
}
function $n() {
  if (Mt !== null) {
    var e = pf(yi),
      t = We.transition,
      n = z;
    try {
      if (((We.transition = null), (z = 16 > e ? 16 : e), Mt === null))
        var r = !1;
      else {
        if (((e = Mt), (Mt = null), (yi = 0), D & 6)) throw Error(k(331));
        var s = D;
        for (D |= 4, N = e.current; N !== null; ) {
          var i = N,
            l = i.child;
          if (N.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var c = o[a];
                for (N = c; N !== null; ) {
                  var m = N;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, m, i);
                  }
                  var f = m.child;
                  if (f !== null) (f.return = m), (N = f);
                  else
                    for (; N !== null; ) {
                      m = N;
                      var p = m.sibling,
                        y = m.return;
                      if ((Ed(m), m === c)) {
                        N = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (N = p);
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
                    var P = v.sibling;
                    (v.sibling = null), (v = P);
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
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (N = h);
                break e;
              }
              N = i.return;
            }
        }
        var u = e.current;
        for (N = u; N !== null; ) {
          l = N;
          var d = l.child;
          if (l.subtreeFlags & 2064 && d !== null) (d.return = l), (N = d);
          else
            e: for (l = u; N !== null; ) {
              if (((o = N), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mi(9, o);
                  }
                } catch (C) {
                  J(o, o.return, C);
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
          ((D = s), Qt(), ut && typeof ut.onPostCommitFiberRoot == "function")
        )
          try {
            ut.onPostCommitFiberRoot(Ei, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (We.transition = t);
    }
  }
  return !1;
}
function ic(e, t, n) {
  (t = Yn(n, t)),
    (t = pd(e, t, 1)),
    (e = Dt(e, t, 1)),
    (t = _e()),
    e !== null && (qr(e, 1, t), Re(e, t));
}
function J(e, t, n) {
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
          (e = Yn(n, e)),
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
function vg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = _e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (fe & n) === n &&
      (re === 4 || (re === 3 && (fe & 130023424) === fe && 500 > G() - Sa)
        ? nn(e, 0)
        : (xa |= n)),
    Re(e, t);
}
function jd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ms), (ms <<= 1), !(ms & 130023424) && (ms = 4194304))
      : (t = 1));
  var n = _e();
  (e = St(e, t)), e !== null && (qr(e, t, n), Re(e, n));
}
function wg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jd(e, n);
}
function _g(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), jd(e, n);
}
var Fd;
Fd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), og(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else (Ee = !1), b && t.flags & 1048576 && Bf(t, ai, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bs(e, t), (e = t.pendingProps);
      var s = Vn(t, ve.current);
      Fn(t, n), (s = ma(null, t, r, e, s, n));
      var i = ga();
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
            ca(t),
            (s.updater = Oi),
            (t.stateNode = s),
            (s._reactInternals = t),
            ao(t, r, e, n),
            (t = fo(null, t, r, !0, i, n)))
          : ((t.tag = 0), b && i && ra(t), we(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bs(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Sg(r)),
          (e = Ye(r, e)),
          s)
        ) {
          case 0:
            t = co(null, t, r, e, n);
            break e;
          case 1:
            t = Xu(null, t, r, e, n);
            break e;
          case 11:
            t = Yu(null, t, r, e, n);
            break e;
          case 14:
            t = Ku(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ye(r, s)),
        co(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ye(r, s)),
        Xu(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((wd(t), e === null)) throw Error(k(387));
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
            (s = Yn(Error(k(423)), t)), (t = Ju(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Yn(Error(k(424)), t)), (t = Ju(e, t, r, n, s));
            break e;
          } else
            for (
              Me = $t(t.stateNode.containerInfo.firstChild),
                Le = t,
                b = !0,
                Je = null,
                n = Hf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === s)) {
            t = kt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yf(t),
        e === null && io(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = s.children),
        eo(r, s) ? (l = null) : i !== null && eo(r, i) && (t.flags |= 32),
        vd(e, t),
        we(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && io(t), null;
    case 13:
      return _d(e, t, n);
    case 4:
      return (
        fa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bn(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ye(r, s)),
        Yu(e, t, r, s, n)
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
          if (tt(i.value, l)) {
            if (i.children === s.children && !Pe.current) {
              t = kt(e, t, n);
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
                      (a = wt(-1, n & -n)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (c.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      lo(i.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(k(341));
                (l.lanes |= n),
                  (o = l.alternate),
                  o !== null && (o.lanes |= n),
                  lo(l, n, t),
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
        (s = Ve(s)),
        (r = r(s)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Ye(r, t.pendingProps)),
        (s = Ye(r.type, s)),
        Ku(e, t, r, s, n)
      );
    case 15:
      return gd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ye(r, s)),
        Bs(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), li(t)) : (e = !1),
        Fn(t, n),
        hd(t, r, s),
        ao(t, r, s, n),
        fo(null, t, r, !0, e, n)
      );
    case 19:
      return xd(e, t, n);
    case 22:
      return yd(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function $d(e, t) {
  return cf(e, t);
}
function xg(e, t, n, r) {
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
function Ue(e, t, n, r) {
  return new xg(e, t, n, r);
}
function Pa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sg(e) {
  if (typeof e == "function") return Pa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === bo)) return 11;
    if (e === Qo) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
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
  if (((r = e), typeof e == "function")) Pa(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case _n:
        return rn(n.children, s, i, t);
      case Ho:
        (l = 8), (s |= 8);
        break;
      case Ol:
        return (
          (e = Ue(12, n, t, s | 2)), (e.elementType = Ol), (e.lanes = i), e
        );
      case Ml:
        return (e = Ue(13, n, t, s)), (e.elementType = Ml), (e.lanes = i), e;
      case Ll:
        return (e = Ue(19, n, t, s)), (e.elementType = Ll), (e.lanes = i), e;
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
            case bo:
              l = 11;
              break e;
            case Qo:
              l = 14;
              break e;
            case Rt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(l, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function rn(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function ji(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = Qc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vl(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function wl(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kg(e, t, n, r, s) {
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
function Na(e, t, n, r, s, i, l, o, a) {
  return (
    (e = new kg(e, t, n, o, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ue(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ca(i),
    e
  );
}
function Cg(e, t, n) {
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
    if (dn(e) !== e || e.tag !== 1) throw Error(k(170));
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
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return Df(e, n, t);
  }
  return t;
}
function zd(e, t, n, r, s, i, l, o, a) {
  return (
    (e = Na(n, r, !0, e, s, i, l, o, a)),
    (e.context = Dd(null)),
    (n = e.current),
    (r = _e()),
    (s = Bt(n)),
    (i = wt(r, s)),
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
    l = Bt(s);
  return (
    (n = Dd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dt(s, t, l)),
    e !== null && (et(e, s, l, i), $s(e, s, l)),
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
function Ra(e, t) {
  lc(e, t), (e = e.alternate) && lc(e, t);
}
function Eg() {
  return null;
}
var Bd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Aa(e) {
  this._internalRoot = e;
}
$i.prototype.render = Aa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Fi(e, t, null, null);
};
$i.prototype.unmount = Aa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function () {
      Fi(null, e, null, null);
    }),
      (t[xt] = null);
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
function Ia(e) {
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
function Pg(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = wi(l);
        i.call(c);
      };
    }
    var l = zd(t, r, e, 0, null, !1, !1, "", oc);
    return (
      (e._reactRootContainer = l),
      (e[xt] = l.current),
      zr(e.nodeType === 8 ? e.parentNode : e),
      un(),
      l
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = wi(a);
      o.call(c);
    };
  }
  var a = Na(e, 0, !1, null, null, !1, !1, "", oc);
  return (
    (e._reactRootContainer = a),
    (e[xt] = a.current),
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
  } else l = Pg(n, t, e, s, r);
  return wi(l);
}
mf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 &&
          (Xo(t, n | 1), Re(t, G()), !(D & 6) && ((Kn = G() + 500), Qt()));
      }
      break;
    case 13:
      un(function () {
        var r = St(e, 1);
        if (r !== null) {
          var s = _e();
          et(r, e, 1, s);
        }
      }),
        Ra(e, 1);
  }
};
Jo = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = _e();
      et(t, e, 134217728, n);
    }
    Ra(e, 134217728);
  }
};
gf = function (e) {
  if (e.tag === 13) {
    var t = Bt(e),
      n = St(e, t);
    if (n !== null) {
      var r = _e();
      et(n, e, t, r);
    }
    Ra(e, t);
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
Hl = function (e, t, n) {
  switch (t) {
    case "input":
      if (($l(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            if (!s) throw Error(k(90));
            Kc(r), $l(r, s);
          }
        }
      }
      break;
    case "textarea":
      Jc(e, n);
      break;
    case "select":
      (t = n.value), t != null && On(e, !!n.multiple, t, !1);
  }
};
rf = ka;
sf = un;
var Ng = { usingClientEntryPoint: !1, Events: [Zr, Cn, Ai, tf, nf, ka] },
  ur = {
    findFiberByHostInstance: Gt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rg = {
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
    currentDispatcherRef: Ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = af(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || Eg,
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
      (Ei = Ps.inject(Rg)), (ut = Ps);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ng;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ia(t)) throw Error(k(200));
  return Cg(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!Ia(e)) throw Error(k(299));
  var n = !1,
    r = "",
    s = Bd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Na(e, 1, !1, null, null, n, !1, r, s)),
    (e[xt] = t.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    new Aa(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = af(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return un(e);
};
Fe.hydrate = function (e, t, n) {
  if (!Di(t)) throw Error(k(200));
  return zi(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!Ia(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    l = Bd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = zd(t, null, e, 1, n ?? null, s, !1, i, l)),
    (e[xt] = t.current),
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
  if (!Di(t)) throw Error(k(200));
  return zi(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!Di(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (un(function () {
        zi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = ka;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Di(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return zi(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function Ud() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud);
    } catch (e) {
      console.error(e);
    }
}
Ud(), (Bc.exports = Fe);
var Ag = Bc.exports,
  Wd,
  ac = Ag;
(Wd = ac.createRoot), ac.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ig = {
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
 */ const Tg = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Et = (e, t) => {
    const n = le.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          className: o = "",
          children: a,
          ...c
        },
        m,
      ) =>
        le.createElement(
          "svg",
          {
            ref: m,
            ...Ig,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(s) : i,
            className: ["lucide", `lucide-${Tg(e)}`, o].join(" "),
            ...c,
          },
          [
            ...t.map(([f, p]) => le.createElement(f, p)),
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
 */ const Og = Et("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lg = Et("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jg = Et("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fg = Et("UserPlus", [
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
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bd = Et("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Dg = ["❤️", "😊", "👍", "⭐️", "😂", "🔥", "👏", "🎉"],
  zg = ({ message: e, onAddReaction: t }) => {
    const [n, r] = le.useState(!1),
      s = e.sender === "ai";
    return S.jsx("div", {
      className: `flex ${s ? "justify-start" : "justify-end"} group relative`,
      children: S.jsxs("div", {
        className: `max-w-[70%] ${s ? "bg-gray-200 text-gray-900 rounded-tr-2xl" : "bg-blue-500 text-white rounded-tl-2xl"} rounded-2xl px-4 py-2 animate-fade-in-up relative message-bubble`,
        children: [
          e.image &&
            S.jsx("div", {
              className: "mb-2",
              children: S.jsx("img", {
                src: e.image,
                alt: "Shared image",
                className: "rounded-lg max-w-full max-h-[300px] object-contain",
              }),
            }),
          S.jsx("p", { className: "text-[15px]", children: e.text }),
          e.reactions &&
            e.reactions.length > 0 &&
            S.jsx("div", {
              className: "absolute -bottom-6 left-0 flex gap-1",
              children: e.reactions.map((i, l) =>
                S.jsx(
                  "span",
                  {
                    className:
                      "bg-white rounded-full px-2 py-1 text-sm shadow-sm",
                    children: i,
                  },
                  l,
                ),
              ),
            }),
          n &&
            S.jsxs("div", {
              className:
                "absolute top-0 right-0 transform translate-x-full bg-white rounded-lg shadow-lg p-2 z-10",
              children: [
                S.jsx("button", {
                  onClick: () => r(!1),
                  className:
                    "absolute -top-2 -right-2 bg-gray-100 rounded-full p-1",
                  children: S.jsx(bd, { className: "w-3 h-3" }),
                }),
                S.jsx("div", {
                  className: "grid grid-cols-4 gap-1",
                  children: Dg.map((i) =>
                    S.jsx(
                      "button",
                      {
                        onClick: () => {
                          t(e.id, i), r(!1);
                        },
                        className: "hover:bg-gray-100 rounded p-1 text-lg",
                        children: i,
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
          S.jsx("span", {
            className: "text-xs opacity-60 mt-1 block",
            children: new Date(e.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          }),
          S.jsx("button", {
            onClick: () => r(!n),
            className:
              "absolute -right-10 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity",
          }),
        ],
      }),
    });
  },
  Bg = [
    {
      name: "Mia",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      description: "Fitness & Wellness Coach",
    },
    {
      name: "Zoe",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
      description: "Tech & Gaming Enthusiast",
    },
    {
      name: "Ruby",
      avatar:
        "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?w=400&q=80",
      description: "Stand-up Comedian",
    },
    {
      name: "Nova",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      description: "Environmental Scientist",
    },
    {
      name: "Lily",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      description: "Culinary Expert",
    },
    {
      name: "Maya",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      description: "Meditation Guide",
    },
    {
      name: "Ivy",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      description: "Literature Professor",
    },
    {
      name: "Jade",
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
      description: "Travel Enthusiast",
    },
  ],
  Ug = ({ onClose: e, onAdd: t }) => {
    const n = (r) => {
      const s = {
        id: Date.now(),
        name: r.name + " AI",
        avatar: r.avatar,
        status: "online",
        lastSeen: "now",
        description: r.description,
      };
      t(s), e();
    };
    return S.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: S.jsxs("div", {
        className: "bg-white rounded-2xl w-[480px] max-h-[80vh] flex flex-col",
        children: [
          S.jsxs("div", {
            className:
              "p-4 border-b border-gray-200 flex justify-between items-center",
            children: [
              S.jsx("h2", {
                className: "text-xl font-semibold",
                children: "Add New AI Friend",
              }),
              S.jsx("button", {
                onClick: e,
                className: "p-1 hover:bg-gray-100 rounded-full",
                children: S.jsx(bd, { className: "w-5 h-5" }),
              }),
            ],
          }),
          S.jsx("div", {
            className:
              "p-4 overflow-y-auto max-h-[calc(80vh-4rem)] grid grid-cols-2 gap-4",
            children: Bg.map((r) =>
              S.jsxs(
                "button",
                {
                  onClick: () => n(r),
                  className:
                    "p-4 flex flex-col items-center text-center hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    S.jsx("img", {
                      src: r.avatar,
                      alt: r.name,
                      className: "w-20 h-20 rounded-full object-cover mb-3",
                    }),
                    S.jsx("h3", {
                      className: "font-semibold text-lg",
                      children: r.name,
                    }),
                    S.jsx("p", {
                      className: "text-sm text-gray-500",
                      children: r.description,
                    }),
                  ],
                },
                r.name,
              ),
            ),
          }),
        ],
      }),
    });
  },
  Wg = ({
    selectedContact: e,
    onSelectContact: t,
    contacts: n,
    onAddContact: r,
    onDeleteContact: s,
  }) => {
    const [i, l] = le.useState(!1),
      [o, a] = le.useState(""),
      c = n.filter((m) => m.name.toLowerCase().includes(o.toLowerCase()));
    return S.jsxs(S.Fragment, {
      children: [
        S.jsxs("div", {
          className: "h-full flex flex-col",
          children: [
            S.jsxs("div", {
              className: "p-4 border-b border-gray-200",
              children: [
                S.jsxs("div", {
                  className:
                    "flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-4",
                  children: [
                    S.jsx(Lg, { className: "w-5 h-5 text-gray-500" }),
                    S.jsx("input", {
                      type: "text",
                      value: o,
                      onChange: (m) => a(m.target.value),
                      placeholder: "Search chats...",
                      className: "bg-transparent outline-none flex-1 text-sm",
                    }),
                  ],
                }),
                S.jsxs("button", {
                  onClick: () => l(!0),
                  className:
                    "w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center space-x-2 transition-colors",
                  children: [
                    S.jsx(Fg, { className: "w-5 h-5" }),
                    S.jsx("span", { children: "Add New AI Friend" }),
                  ],
                }),
              ],
            }),
            S.jsx("div", {
              className: "flex-1 overflow-y-auto",
              children: c.map((m) =>
                S.jsxs(
                  "div",
                  {
                    className: `group relative w-full p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${e.id === m.id ? "bg-blue-50" : ""}`,
                    children: [
                      S.jsxs("button", {
                        onClick: () => t(m),
                        className: "flex-1 flex items-center space-x-3",
                        children: [
                          S.jsxs("div", {
                            className: "relative",
                            children: [
                              S.jsx("img", {
                                src: m.avatar,
                                alt: m.name,
                                className:
                                  "w-12 h-12 rounded-full object-cover",
                              }),
                              S.jsx("span", {
                                className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${m.status === "online" ? "bg-green-500" : "bg-gray-400"}`,
                              }),
                            ],
                          }),
                          S.jsxs("div", {
                            className: "flex-1 text-left",
                            children: [
                              S.jsx("h3", {
                                className: "font-semibold",
                                children: m.name,
                              }),
                              S.jsx("p", {
                                className: "text-sm text-gray-500",
                                children:
                                  m.status === "online"
                                    ? "Online"
                                    : `Last seen ${m.lastSeen}`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  m.id,
                ),
              ),
            }),
          ],
        }),
        i && S.jsx(Ug, { onClose: () => l(!1), onAdd: r }),
      ],
    });
  },
  Co = "RFC3986",
  Eo = {
    RFC1738: (e) => String(e).replace(/%20/g, "+"),
    RFC3986: (e) => String(e),
  },
  Vg = "RFC1738",
  Hg = Array.isArray,
  rt = (() => {
    const e = [];
    for (let t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  })(),
  _l = 1024,
  bg = (e, t, n, r, s) => {
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
        c = [];
      for (let m = 0; m < a.length; ++m) {
        let f = a.charCodeAt(m);
        if (
          f === 45 ||
          f === 46 ||
          f === 95 ||
          f === 126 ||
          (f >= 48 && f <= 57) ||
          (f >= 65 && f <= 90) ||
          (f >= 97 && f <= 122) ||
          (s === Vg && (f === 40 || f === 41))
        ) {
          c[c.length] = a.charAt(m);
          continue;
        }
        if (f < 128) {
          c[c.length] = rt[f];
          continue;
        }
        if (f < 2048) {
          c[c.length] = rt[192 | (f >> 6)] + rt[128 | (f & 63)];
          continue;
        }
        if (f < 55296 || f >= 57344) {
          c[c.length] =
            rt[224 | (f >> 12)] +
            rt[128 | ((f >> 6) & 63)] +
            rt[128 | (f & 63)];
          continue;
        }
        (m += 1),
          (f = 65536 + (((f & 1023) << 10) | (a.charCodeAt(m) & 1023))),
          (c[c.length] =
            rt[240 | (f >> 18)] +
            rt[128 | ((f >> 12) & 63)] +
            rt[128 | ((f >> 6) & 63)] +
            rt[128 | (f & 63)]);
      }
      l += c.join("");
    }
    return l;
  };
function Qg(e) {
  return !e || typeof e != "object"
    ? !1
    : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function uc(e, t) {
  if (Hg(e)) {
    const n = [];
    for (let r = 0; r < e.length; r += 1) n.push(t(e[r]));
    return n;
  }
  return t(e);
}
const Yg = Object.prototype.hasOwnProperty,
  Qd = {
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
  it = Array.isArray,
  Kg = Array.prototype.push,
  Yd = function (e, t) {
    Kg.apply(e, it(t) ? t : [t]);
  },
  Xg = Date.prototype.toISOString,
  te = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: bg,
    encodeValuesOnly: !1,
    format: Co,
    formatter: Eo[Co],
    indices: !1,
    serializeDate(e) {
      return Xg.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  };
function Jg(e) {
  return (
    typeof e == "string" ||
    typeof e == "number" ||
    typeof e == "boolean" ||
    typeof e == "symbol" ||
    typeof e == "bigint"
  );
}
const xl = {};
function Kd(e, t, n, r, s, i, l, o, a, c, m, f, p, y, w, v, P, h) {
  let u = e,
    d = h,
    g = 0,
    C = !1;
  for (; (d = d.get(xl)) !== void 0 && !C; ) {
    const A = d.get(e);
    if (((g += 1), typeof A < "u")) {
      if (A === g) throw new RangeError("Cyclic object value");
      C = !0;
    }
    typeof d.get(xl) > "u" && (g = 0);
  }
  if (
    (typeof c == "function"
      ? (u = c(t, u))
      : u instanceof Date
        ? (u = p == null ? void 0 : p(u))
        : n === "comma" &&
          it(u) &&
          (u = uc(u, function (A) {
            return A instanceof Date ? (p == null ? void 0 : p(A)) : A;
          })),
    u === null)
  ) {
    if (i) return a && !v ? a(t, te.encoder, P, "key", y) : t;
    u = "";
  }
  if (Jg(u) || Qg(u)) {
    if (a) {
      const A = v ? t : a(t, te.encoder, P, "key", y);
      return [
        (w == null ? void 0 : w(A)) +
          "=" +
          (w == null ? void 0 : w(a(u, te.encoder, P, "value", y))),
      ];
    }
    return [
      (w == null ? void 0 : w(t)) + "=" + (w == null ? void 0 : w(String(u))),
    ];
  }
  const x = [];
  if (typeof u > "u") return x;
  let _;
  if (n === "comma" && it(u))
    v && a && (u = uc(u, a)),
      (_ = [{ value: u.length > 0 ? u.join(",") || null : void 0 }]);
  else if (it(c)) _ = c;
  else {
    const A = Object.keys(u);
    _ = m ? A.sort(m) : A;
  }
  const E = o ? String(t).replace(/\./g, "%2E") : String(t),
    T = r && it(u) && u.length === 1 ? E + "[]" : E;
  if (s && it(u) && u.length === 0) return T + "[]";
  for (let A = 0; A < _.length; ++A) {
    const O = _[A],
      De = typeof O == "object" && typeof O.value < "u" ? O.value : u[O];
    if (l && De === null) continue;
    const dt = f && o ? O.replace(/\./g, "%2E") : O,
      ls = it(u)
        ? typeof n == "function"
          ? n(T, dt)
          : T
        : T + (f ? "." + dt : "[" + dt + "]");
    h.set(e, g);
    const os = new WeakMap();
    os.set(xl, h),
      Yd(
        x,
        Kd(
          De,
          ls,
          n,
          r,
          s,
          i,
          l,
          o,
          n === "comma" && v && it(u) ? null : a,
          c,
          m,
          f,
          p,
          y,
          w,
          v,
          P,
          os,
        ),
      );
  }
  return x;
}
function qg(e = te) {
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
  const t = e.charset || te.charset;
  if (
    typeof e.charset < "u" &&
    e.charset !== "utf-8" &&
    e.charset !== "iso-8859-1"
  )
    throw new TypeError(
      "The charset option must be either utf-8, iso-8859-1, or undefined",
    );
  let n = Co;
  if (typeof e.format < "u") {
    if (!Yg.call(Eo, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  const r = Eo[n];
  let s = te.filter;
  (typeof e.filter == "function" || it(e.filter)) && (s = e.filter);
  let i;
  if (
    (e.arrayFormat && e.arrayFormat in Qd
      ? (i = e.arrayFormat)
      : "indices" in e
        ? (i = e.indices ? "indices" : "repeat")
        : (i = te.arrayFormat),
    "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
  )
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  const l =
    typeof e.allowDots > "u"
      ? e.encodeDotInKeys
        ? !0
        : te.allowDots
      : !!e.allowDots;
  return {
    addQueryPrefix:
      typeof e.addQueryPrefix == "boolean"
        ? e.addQueryPrefix
        : te.addQueryPrefix,
    allowDots: l,
    allowEmptyArrays:
      typeof e.allowEmptyArrays == "boolean"
        ? !!e.allowEmptyArrays
        : te.allowEmptyArrays,
    arrayFormat: i,
    charset: t,
    charsetSentinel:
      typeof e.charsetSentinel == "boolean"
        ? e.charsetSentinel
        : te.charsetSentinel,
    commaRoundTrip: !!e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? te.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : te.encode,
    encodeDotInKeys:
      typeof e.encodeDotInKeys == "boolean"
        ? e.encodeDotInKeys
        : te.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : te.encoder,
    encodeValuesOnly:
      typeof e.encodeValuesOnly == "boolean"
        ? e.encodeValuesOnly
        : te.encodeValuesOnly,
    filter: s,
    format: n,
    formatter: r,
    serializeDate:
      typeof e.serializeDate == "function" ? e.serializeDate : te.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : te.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling:
      typeof e.strictNullHandling == "boolean"
        ? e.strictNullHandling
        : te.strictNullHandling,
  };
}
function Gg(e, t = {}) {
  let n = e;
  const r = qg(t);
  let s, i;
  typeof r.filter == "function"
    ? ((i = r.filter), (n = i("", n)))
    : it(r.filter) && ((i = r.filter), (s = i));
  const l = [];
  if (typeof n != "object" || n === null) return "";
  const o = Qd[r.arrayFormat],
    a = o === "comma" && r.commaRoundTrip;
  s || (s = Object.keys(n)), r.sort && s.sort(r.sort);
  const c = new WeakMap();
  for (let p = 0; p < s.length; ++p) {
    const y = s[p];
    (r.skipNulls && n[y] === null) ||
      Yd(
        l,
        Kd(
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
          c,
        ),
      );
  }
  const m = l.join(r.delimiter);
  let f = r.addQueryPrefix === !0 ? "?" : "";
  return (
    r.charsetSentinel &&
      (r.charset === "iso-8859-1"
        ? (f += "utf8=%26%2310003%3B&")
        : (f += "utf8=%E2%9C%93&")),
    m.length > 0 ? f + m : ""
  );
}
const yn = "4.70.2";
let cc = !1,
  Ar,
  Xd,
  Jd,
  Po,
  qd,
  Gd,
  Zd,
  eh,
  th;
function Zg(e, t = { auto: !1 }) {
  if (cc)
    throw new Error(
      `you must \`import 'openai/shims/${e.kind}'\` before importing anything else from openai`,
    );
  if (Ar)
    throw new Error(
      `can't \`import 'openai/shims/${e.kind}'\` after \`import 'openai/shims/${Ar}'\``,
    );
  (cc = t.auto),
    (Ar = e.kind),
    (Xd = e.fetch),
    (Jd = e.FormData),
    (Po = e.File),
    (qd = e.ReadableStream),
    (Gd = e.getMultipartRequestOptions),
    (Zd = e.getDefaultAgent),
    (eh = e.fileFromPath),
    (th = e.isFsReadStream);
}
class ey {
  constructor(t) {
    this.body = t;
  }
  get [Symbol.toStringTag]() {
    return "MultipartBody";
  }
}
function ty({ manuallyImported: e } = {}) {
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
    getMultipartRequestOptions: async (l, o) => ({ ...o, body: new ey(l) }),
    getDefaultAgent: (l) => {},
    fileFromPath: () => {
      throw new Error(
        "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads",
      );
    },
    isFsReadStream: (l) => !1,
  };
}
Ar || Zg(ty(), { auto: !0 });
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
    if (!t) return new Bi({ message: r, cause: Ro(n) });
    const i = n == null ? void 0 : n.error;
    return t === 400
      ? new nh(t, i, r, s)
      : t === 401
        ? new rh(t, i, r, s)
        : t === 403
          ? new sh(t, i, r, s)
          : t === 404
            ? new ih(t, i, r, s)
            : t === 409
              ? new lh(t, i, r, s)
              : t === 422
                ? new oh(t, i, r, s)
                : t === 429
                  ? new ah(t, i, r, s)
                  : t >= 500
                    ? new uh(t, i, r, s)
                    : new he(t, i, r, s);
  }
}
class qe extends he {
  constructor({ message: t } = {}) {
    super(void 0, void 0, t || "Request was aborted.", void 0),
      (this.status = void 0);
  }
}
class Bi extends he {
  constructor({ message: t, cause: n }) {
    super(void 0, void 0, t || "Connection error.", void 0),
      (this.status = void 0),
      n && (this.cause = n);
  }
}
class Ta extends Bi {
  constructor({ message: t } = {}) {
    super({ message: t ?? "Request timed out." });
  }
}
class nh extends he {
  constructor() {
    super(...arguments), (this.status = 400);
  }
}
class rh extends he {
  constructor() {
    super(...arguments), (this.status = 401);
  }
}
class sh extends he {
  constructor() {
    super(...arguments), (this.status = 403);
  }
}
class ih extends he {
  constructor() {
    super(...arguments), (this.status = 404);
  }
}
class lh extends he {
  constructor() {
    super(...arguments), (this.status = 409);
  }
}
class oh extends he {
  constructor() {
    super(...arguments), (this.status = 422);
  }
}
class ah extends he {
  constructor() {
    super(...arguments), (this.status = 429);
  }
}
class uh extends he {}
class ch extends F {
  constructor() {
    super("Could not parse response content as the length limit was reached");
  }
}
class fh extends F {
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
class at {
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
        for await (const l of ny(t, n))
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
    return new at(s, n);
  }
  static fromReadableStream(t, n) {
    let r = !1;
    async function* s() {
      const l = new cn(),
        o = dh(t);
      for await (const a of o) for (const c of l.decode(a)) yield c;
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
    return new at(i, n);
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
      new at(() => s(t), this.controller),
      new at(() => s(n), this.controller),
    ];
  }
  toReadableStream() {
    const t = this;
    let n;
    const r = new TextEncoder();
    return new qd({
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
async function* ny(e, t) {
  if (!e.body)
    throw (
      (t.abort(), new F("Attempted to iterate over a response with no body"))
    );
  const n = new iy(),
    r = new cn(),
    s = dh(e.body);
  for await (const i of ry(s))
    for (const l of r.decode(i)) {
      const o = n.decode(l);
      o && (yield o);
    }
  for (const i of r.flush()) {
    const l = n.decode(i);
    l && (yield l);
  }
}
async function* ry(e) {
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
    for (; (i = sy(t)) !== -1; ) yield t.slice(0, i), (t = t.slice(i));
  }
  t.length > 0 && (yield t);
}
function sy(e) {
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
class iy {
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
    let [n, r, s] = ly(t, ":");
    return (
      s.startsWith(" ") && (s = s.substring(1)),
      n === "event" ? (this.event = s) : n === "data" && this.data.push(s),
      null
    );
  }
}
function ly(e, t) {
  const n = e.indexOf(t);
  return n !== -1
    ? [e.substring(0, n), t, e.substring(n + t.length)]
    : [e, "", ""];
}
function dh(e) {
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
const hh = (e) =>
    e != null &&
    typeof e == "object" &&
    typeof e.url == "string" &&
    typeof e.blob == "function",
  ph = (e) =>
    e != null &&
    typeof e == "object" &&
    typeof e.name == "string" &&
    typeof e.lastModified == "number" &&
    Ui(e),
  Ui = (e) =>
    e != null &&
    typeof e == "object" &&
    typeof e.size == "number" &&
    typeof e.type == "string" &&
    typeof e.text == "function" &&
    typeof e.slice == "function" &&
    typeof e.arrayBuffer == "function",
  oy = (e) => ph(e) || hh(e) || th(e);
async function mh(e, t, n) {
  var s;
  if (((e = await e), ph(e))) return e;
  if (hh(e)) {
    const i = await e.blob();
    t || (t = new URL(e.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
    const l = Ui(i) ? [await i.arrayBuffer()] : [i];
    return new Po(l, t, n);
  }
  const r = await ay(e);
  if ((t || (t = cy(e) ?? "unknown_file"), !(n != null && n.type))) {
    const i = (s = r[0]) == null ? void 0 : s.type;
    typeof i == "string" && (n = { ...n, type: i });
  }
  return new Po(r, t, n);
}
async function ay(e) {
  var n;
  let t = [];
  if (typeof e == "string" || ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
    t.push(e);
  else if (Ui(e)) t.push(await e.arrayBuffer());
  else if (fy(e)) for await (const r of e) t.push(r);
  else
    throw new Error(
      `Unexpected data type: ${typeof e}; constructor: ${(n = e == null ? void 0 : e.constructor) == null ? void 0 : n.name}; props: ${uy(e)}`,
    );
  return t;
}
function uy(e) {
  return `[${Object.getOwnPropertyNames(e)
    .map((n) => `"${n}"`)
    .join(", ")}]`;
}
function cy(e) {
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
  fy = (e) =>
    e != null &&
    typeof e == "object" &&
    typeof e[Symbol.asyncIterator] == "function",
  fc = (e) =>
    e &&
    typeof e == "object" &&
    e.body &&
    e[Symbol.toStringTag] === "MultipartBody",
  Xn = async (e) => {
    const t = await dy(e.body);
    return Gd(t, e);
  },
  dy = async (e) => {
    const t = new Jd();
    return (
      await Promise.all(Object.entries(e || {}).map(([n, r]) => No(t, n, r))), t
    );
  },
  No = async (e, t, n) => {
    if (n !== void 0) {
      if (n == null)
        throw new TypeError(
          `Received null for "${t}"; to pass null in FormData, you must use the string 'null'`,
        );
      if (typeof n == "string" || typeof n == "number" || typeof n == "boolean")
        e.append(t, String(n));
      else if (oy(n)) {
        const r = await mh(n);
        e.append(t, r);
      } else if (Array.isArray(n))
        await Promise.all(n.map((r) => No(e, t + "[]", r)));
      else if (typeof n == "object")
        await Promise.all(
          Object.entries(n).map(([r, s]) => No(e, `${t}[${r}]`, s)),
        );
      else
        throw new TypeError(
          `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`,
        );
    }
  };
var Dn = {},
  hy = function (e, t, n, r, s) {
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return t.set(e, n), n;
  },
  py = function (e, t, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  Ns;
async function gh(e) {
  const { response: t } = e;
  if (e.options.stream)
    return (
      zn("response", t.status, t.url, t.headers, t.body),
      e.options.__streamClass
        ? e.options.__streamClass.fromSSEResponse(t, e.controller)
        : at.fromSSEResponse(t, e.controller)
    );
  if (t.status === 204) return null;
  if (e.options.__binaryResponse) return t;
  const n = t.headers.get("content-type");
  if (
    (n == null ? void 0 : n.includes("application/json")) ||
    (n == null ? void 0 : n.includes("application/vnd.api+json"))
  ) {
    const i = await t.json();
    return zn("response", t.status, t.url, t.headers, i), yh(i, t);
  }
  const s = await t.text();
  return zn("response", t.status, t.url, t.headers, s), s;
}
function yh(e, t) {
  return !e || typeof e != "object" || Array.isArray(e)
    ? e
    : Object.defineProperty(e, "_request_id", {
        value: t.headers.get("x-request-id"),
        enumerable: !1,
      });
}
class Wi extends Promise {
  constructor(t, n = gh) {
    super((r) => {
      r(null);
    }),
      (this.responsePromise = t),
      (this.parseResponse = n);
  }
  _thenUnwrap(t) {
    return new Wi(this.responsePromise, async (n) =>
      yh(t(await this.parseResponse(n), n), n.response),
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
class my {
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
      ...xy(),
      ...this.authHeaders(t),
    };
  }
  validateHeaders(t, n) {}
  defaultIdempotencyKey() {
    return `stainless-node-retry-${Ey()}`;
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
          s && Ui(s == null ? void 0 : s.body)
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
          : fc(t.body)
            ? t.body.body
            : t.body
              ? JSON.stringify(t.body, null, 2)
              : null,
      a = this.calculateContentLength(o),
      c = this.buildURL(s, i);
    "timeout" in t && kl("timeout", t.timeout);
    const m = t.timeout ?? this.timeout,
      f = t.httpAgent ?? this.httpAgent ?? Zd(c),
      p = m + 1e3;
    typeof ((v = f == null ? void 0 : f.options) == null
      ? void 0
      : v.timeout) == "number" &&
      p > (f.options.timeout ?? 0) &&
      (f.options.timeout = p),
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
        ...(f && { agent: f }),
        signal: t.signal ?? null,
      },
      url: c,
      timeout: m,
    };
  }
  buildHeaders({ options: t, headers: n, contentLength: r, retryCount: s }) {
    const i = {};
    r && (i["content-length"] = r);
    const l = this.defaultHeaders(t);
    return (
      mc(i, l),
      mc(i, n),
      fc(t.body) && Ar !== "node" && delete i["content-type"],
      gc(l, "x-stainless-retry-count") === void 0 &&
        gc(n, "x-stainless-retry-count") === void 0 &&
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
    var f, p;
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
      (f = r.signal) != null && f.aborted)
    )
      throw new qe();
    const a = new AbortController(),
      c = await this.fetchWithTimeout(l, i, o, a).catch(Ro);
    if (c instanceof Error) {
      if ((p = r.signal) != null && p.aborted) throw new qe();
      if (n) return this.retryRequest(r, n);
      throw c.name === "AbortError" ? new Ta() : new Bi({ cause: c });
    }
    const m = yy(c.headers);
    if (!c.ok) {
      if (n && this.shouldRetry(c)) {
        const u = `retrying, ${n} attempts remaining`;
        return (
          zn(`response (error; ${u})`, c.status, l, m),
          this.retryRequest(r, n, m)
        );
      }
      const y = await c.text().catch((u) => Ro(u).message),
        w = Sy(y),
        v = w ? void 0 : y;
      throw (
        (zn(
          `response (error; ${n ? "(error; no more retries left)" : "(error; not retryable)"})`,
          c.status,
          l,
          m,
          v,
        ),
        this.makeStatusError(c.status, w, v, m))
      );
    }
    return { response: c, options: r, controller: a };
  }
  requestAPIList(t, n) {
    const r = this.makeRequest(n, null);
    return new gy(this, r, t);
  }
  buildURL(t, n) {
    const r = Cy(t)
        ? new URL(t)
        : new URL(
            this.baseURL +
              (this.baseURL.endsWith("/") && t.startsWith("/")
                ? t.slice(1)
                : t),
          ),
      s = this.defaultQuery();
    return (
      wh(s) || (n = { ...s, ...n }),
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
class vh {
  constructor(t, n, r, s) {
    Ns.set(this, void 0),
      hy(this, Ns, t),
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
    return await py(this, Ns, "f").requestAPIList(this.constructor, n);
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
class gy extends Wi {
  constructor(t, n, r) {
    super(n, async (s) => new r(t, s.response, await gh(s), s.options));
  }
  async *[Symbol.asyncIterator]() {
    const t = await this;
    for await (const n of t) yield n;
  }
}
const yy = (e) =>
    new Proxy(Object.fromEntries(e.entries()), {
      get(t, n) {
        const r = n.toString();
        return t[r.toLowerCase()] || t[r];
      },
    }),
  vy = {
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
    !wh(e) &&
    Object.keys(e).every((t) => _h(vy, t)),
  wy = () => {
    var t;
    if (typeof Deno < "u" && Deno.build != null)
      return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": yn,
        "X-Stainless-OS": hc(Deno.build.os),
        "X-Stainless-Arch": dc(Deno.build.arch),
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
        "X-Stainless-OS": hc(process.platform),
        "X-Stainless-Arch": dc(process.arch),
        "X-Stainless-Runtime": "node",
        "X-Stainless-Runtime-Version": process.version,
      };
    const e = _y();
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
function _y() {
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
const dc = (e) =>
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
  hc = (e) => (
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
let pc;
const xy = () => pc ?? (pc = wy()),
  Sy = (e) => {
    try {
      return JSON.parse(e);
    } catch {
      return;
    }
  },
  ky = new RegExp("^(?:[a-z]+:)?//", "i"),
  Cy = (e) => ky.test(e),
  ts = (e) => new Promise((t) => setTimeout(t, e)),
  kl = (e, t) => {
    if (typeof t != "number" || !Number.isInteger(t))
      throw new F(`${e} must be an integer`);
    if (t < 0) throw new F(`${e} must be a positive integer`);
    return t;
  },
  Ro = (e) => {
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
function wh(e) {
  if (!e) return !0;
  for (const t in e) return !1;
  return !0;
}
function _h(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function mc(e, t) {
  for (const n in t) {
    if (!_h(t, n)) continue;
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
const Ey = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
      const t = (Math.random() * 16) | 0;
      return (e === "x" ? t : (t & 3) | 8).toString(16);
    }),
  Py = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof navigator < "u",
  Ny = (e) => typeof (e == null ? void 0 : e.get) == "function",
  gc = (e, t) => {
    var r;
    const n = t.toLowerCase();
    if (Ny(e)) {
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
class xh extends vh {
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
class ft extends vh {
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
class B {
  constructor(t) {
    this._client = t;
  }
}
let Sh = class extends B {
    create(t, n) {
      return this._client.post("/chat/completions", {
        body: t,
        ...n,
        stream: t.stream ?? !1,
      });
    }
  },
  Oa = class extends B {
    constructor() {
      super(...arguments), (this.completions = new Sh(this._client));
    }
  };
Oa.Completions = Sh;
class kh extends B {
  create(t, n) {
    return this._client.post("/audio/speech", {
      body: t,
      ...n,
      __binaryResponse: !0,
    });
  }
}
class Ch extends B {
  create(t, n) {
    return this._client.post("/audio/transcriptions", Xn({ body: t, ...n }));
  }
}
class Eh extends B {
  create(t, n) {
    return this._client.post("/audio/translations", Xn({ body: t, ...n }));
  }
}
class ns extends B {
  constructor() {
    super(...arguments),
      (this.transcriptions = new Ch(this._client)),
      (this.translations = new Eh(this._client)),
      (this.speech = new kh(this._client));
  }
}
ns.Transcriptions = Ch;
ns.Translations = Eh;
ns.Speech = kh;
class Ma extends B {
  create(t, n) {
    return this._client.post("/batches", { body: t, ...n });
  }
  retrieve(t, n) {
    return this._client.get(`/batches/${t}`, n);
  }
  list(t = {}, n) {
    return Ae(t)
      ? this.list({}, t)
      : this._client.getAPIList("/batches", La, { query: t, ...n });
  }
  cancel(t, n) {
    return this._client.post(`/batches/${t}/cancel`, n);
  }
}
class La extends ft {}
Ma.BatchesPage = La;
class ja extends B {
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
      : this._client.getAPIList("/assistants", Fa, {
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
class Fa extends ft {}
ja.AssistantsPage = Fa;
function yc(e) {
  return typeof e.parse == "function";
}
const Bn = (e) => (e == null ? void 0 : e.role) === "assistant",
  Ph = (e) => (e == null ? void 0 : e.role) === "function",
  Nh = (e) => (e == null ? void 0 : e.role) === "tool";
var Qe = function (e, t, n, r, s) {
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
  Ao,
  Hs,
  bs,
  pr,
  mr,
  Qs,
  gr,
  pt,
  yr,
  _i,
  xi,
  vn,
  Rh;
class Ah {
  constructor() {
    Ao.add(this),
      (this.controller = new AbortController()),
      Hs.set(this, void 0),
      bs.set(this, () => {}),
      pr.set(this, () => {}),
      mr.set(this, void 0),
      Qs.set(this, () => {}),
      gr.set(this, () => {}),
      pt.set(this, {}),
      yr.set(this, !1),
      _i.set(this, !1),
      xi.set(this, !1),
      vn.set(this, !1),
      Qe(
        this,
        Hs,
        new Promise((t, n) => {
          Qe(this, bs, t, "f"), Qe(this, pr, n, "f");
        }),
        "f",
      ),
      Qe(
        this,
        mr,
        new Promise((t, n) => {
          Qe(this, Qs, t, "f"), Qe(this, gr, n, "f");
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
        Q(this, Ao, "m", Rh).bind(this),
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
      (Q(this, pt, "f")[t] || (Q(this, pt, "f")[t] = [])).push({ listener: n }),
      this
    );
  }
  off(t, n) {
    const r = Q(this, pt, "f")[t];
    if (!r) return this;
    const s = r.findIndex((i) => i.listener === n);
    return s >= 0 && r.splice(s, 1), this;
  }
  once(t, n) {
    return (
      (Q(this, pt, "f")[t] || (Q(this, pt, "f")[t] = [])).push({
        listener: n,
        once: !0,
      }),
      this
    );
  }
  emitted(t) {
    return new Promise((n, r) => {
      Qe(this, vn, !0, "f"),
        t !== "error" && this.once("error", r),
        this.once(t, n);
    });
  }
  async done() {
    Qe(this, vn, !0, "f"), await Q(this, mr, "f");
  }
  _emit(t, ...n) {
    if (Q(this, yr, "f")) return;
    t === "end" && (Qe(this, yr, !0, "f"), Q(this, Qs, "f").call(this));
    const r = Q(this, pt, "f")[t];
    if (
      (r &&
        ((Q(this, pt, "f")[t] = r.filter((s) => !s.once)),
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
  (pt = new WeakMap()),
  (yr = new WeakMap()),
  (_i = new WeakMap()),
  (xi = new WeakMap()),
  (vn = new WeakMap()),
  (Ao = new WeakSet()),
  (Rh = function (t) {
    if (
      (Qe(this, _i, !0, "f"),
      t instanceof Error && t.name === "AbortError" && (t = new qe()),
      t instanceof qe)
    )
      return Qe(this, xi, !0, "f"), this._emit("abort", t);
    if (t instanceof F) return this._emit("error", t);
    if (t instanceof Error) {
      const n = new F(t.message);
      return (n.cause = t), this._emit("error", n);
    }
    return this._emit("error", new F(String(t)));
  });
function Ih(e) {
  return (e == null ? void 0 : e.$brand) === "auto-parseable-response-format";
}
function rs(e) {
  return (e == null ? void 0 : e.$brand) === "auto-parseable-tool";
}
function Ry(e, t) {
  return !t || !Th(t)
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
    : $a(e, t);
}
function $a(e, t) {
  const n = e.choices.map((r) => {
    var s;
    if (r.finish_reason === "length") throw new ch();
    if (r.finish_reason === "content_filter") throw new fh();
    return {
      ...r,
      message: {
        ...r.message,
        tool_calls:
          ((s = r.message.tool_calls) == null
            ? void 0
            : s.map((i) => Iy(t, i))) ?? [],
        parsed:
          r.message.content && !r.message.refusal
            ? Ay(t, r.message.content)
            : null,
      },
    };
  });
  return { ...e, choices: n };
}
function Ay(e, t) {
  var n, r;
  return ((n = e.response_format) == null ? void 0 : n.type) !== "json_schema"
    ? null
    : ((r = e.response_format) == null ? void 0 : r.type) === "json_schema"
      ? "$parseRaw" in e.response_format
        ? e.response_format.$parseRaw(t)
        : JSON.parse(t)
      : null;
}
function Iy(e, t) {
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
function Ty(e, t) {
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
function Th(e) {
  var t;
  return Ih(e.response_format)
    ? !0
    : (((t = e.tools) == null
        ? void 0
        : t.some(
            (n) => rs(n) || (n.type === "function" && n.function.strict === !0),
          )) ?? !1);
}
function Oy(e) {
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
  Io,
  Si,
  To,
  Oo,
  Mo,
  Oh,
  Lo;
const vc = 10;
class Mh extends Ah {
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
      if ((this._emit("message", t), (Ph(t) || Nh(t)) && t.content))
        this._emit("functionCallResult", t.content);
      else if (Bn(t) && t.function_call)
        this._emit("functionCall", t.function_call);
      else if (Bn(t) && t.tool_calls)
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
    return await this.done(), ke(this, ge, "m", Io).call(this);
  }
  async finalMessage() {
    return await this.done(), ke(this, ge, "m", Si).call(this);
  }
  async finalFunctionCall() {
    return await this.done(), ke(this, ge, "m", To).call(this);
  }
  async finalFunctionCallResult() {
    return await this.done(), ke(this, ge, "m", Oo).call(this);
  }
  async totalUsage() {
    return await this.done(), ke(this, ge, "m", Mo).call(this);
  }
  allChatCompletions() {
    return [...this._chatCompletions];
  }
  _emitFinal() {
    const t = this._chatCompletions[this._chatCompletions.length - 1];
    t && this._emit("finalChatCompletion", t);
    const n = ke(this, ge, "m", Si).call(this);
    n && this._emit("finalMessage", n);
    const r = ke(this, ge, "m", Io).call(this);
    r && this._emit("finalContent", r);
    const s = ke(this, ge, "m", To).call(this);
    s && this._emit("finalFunctionCall", s);
    const i = ke(this, ge, "m", Oo).call(this);
    i != null && this._emit("finalFunctionCallResult", i),
      this._chatCompletions.some((l) => l.usage) &&
        this._emit("totalUsage", ke(this, ge, "m", Mo).call(this));
  }
  async _createChatCompletion(t, n, r) {
    const s = r == null ? void 0 : r.signal;
    s &&
      (s.aborted && this.controller.abort(),
      s.addEventListener("abort", () => this.controller.abort())),
      ke(this, ge, "m", Oh).call(this, n);
    const i = await t.chat.completions.create(
      { ...n, stream: !1 },
      { ...r, signal: this.controller.signal },
    );
    return this._connected(), this._addChatCompletion($a(i, n));
  }
  async _runChatCompletion(t, n, r) {
    for (const s of n.messages) this._addMessage(s, !1);
    return await this._createChatCompletion(t, n, r);
  }
  async _runFunctions(t, n, r) {
    var p;
    const s = "function",
      { function_call: i = "auto", stream: l, ...o } = n,
      a = typeof i != "string" && (i == null ? void 0 : i.name),
      { maxChatCompletions: c = vc } = r || {},
      m = {};
    for (const y of n.functions) m[y.name || y.function.name] = y;
    const f = n.functions.map((y) => ({
      name: y.name || y.function.name,
      parameters: y.parameters,
      description: y.description,
    }));
    for (const y of n.messages) this._addMessage(y, !1);
    for (let y = 0; y < c; ++y) {
      const v =
        (p = (
          await this._createChatCompletion(
            t,
            {
              ...o,
              function_call: i,
              functions: f,
              messages: [...this.messages],
            },
            r,
          )
        ).choices[0]) == null
          ? void 0
          : p.message;
      if (!v) throw new F("missing message in ChatCompletion response");
      if (!v.function_call) return;
      const { name: P, arguments: h } = v.function_call,
        u = m[P];
      if (u) {
        if (a && a !== P) {
          const x = `Invalid function_call: ${JSON.stringify(P)}. ${JSON.stringify(a)} requested. Please try again`;
          this._addMessage({ role: s, name: P, content: x });
          continue;
        }
      } else {
        const x = `Invalid function_call: ${JSON.stringify(P)}. Available options are: ${f.map((_) => JSON.stringify(_.name)).join(", ")}. Please try again`;
        this._addMessage({ role: s, name: P, content: x });
        continue;
      }
      let d;
      try {
        d = yc(u) ? await u.parse(h) : h;
      } catch (x) {
        this._addMessage({
          role: s,
          name: P,
          content: x instanceof Error ? x.message : String(x),
        });
        continue;
      }
      const g = await u.function(d, this),
        C = ke(this, ge, "m", Lo).call(this, g);
      if ((this._addMessage({ role: s, name: P, content: C }), a)) return;
    }
  }
  async _runTools(t, n, r) {
    var y, w, v;
    const s = "tool",
      { tool_choice: i = "auto", stream: l, ...o } = n,
      a =
        typeof i != "string" &&
        ((y = i == null ? void 0 : i.function) == null ? void 0 : y.name),
      { maxChatCompletions: c = vc } = r || {},
      m = n.tools.map((P) => {
        if (rs(P)) {
          if (!P.$callback)
            throw new F(
              "Tool given to `.runTools()` that does not have an associated function",
            );
          return {
            type: "function",
            function: {
              function: P.$callback,
              name: P.function.name,
              description: P.function.description || "",
              parameters: P.function.parameters,
              parse: P.$parseRaw,
              strict: !0,
            },
          };
        }
        return P;
      }),
      f = {};
    for (const P of m)
      P.type === "function" &&
        (f[P.function.name || P.function.function.name] = P.function);
    const p =
      "tools" in n
        ? m.map((P) =>
            P.type === "function"
              ? {
                  type: "function",
                  function: {
                    name: P.function.name || P.function.function.name,
                    parameters: P.function.parameters,
                    description: P.function.description,
                    strict: P.function.strict,
                  },
                }
              : P,
          )
        : void 0;
    for (const P of n.messages) this._addMessage(P, !1);
    for (let P = 0; P < c; ++P) {
      const u =
        (w = (
          await this._createChatCompletion(
            t,
            { ...o, tool_choice: i, tools: p, messages: [...this.messages] },
            r,
          )
        ).choices[0]) == null
          ? void 0
          : w.message;
      if (!u) throw new F("missing message in ChatCompletion response");
      if (!((v = u.tool_calls) != null && v.length)) return;
      for (const d of u.tool_calls) {
        if (d.type !== "function") continue;
        const g = d.id,
          { name: C, arguments: x } = d.function,
          _ = f[C];
        if (_) {
          if (a && a !== C) {
            const O = `Invalid tool_call: ${JSON.stringify(C)}. ${JSON.stringify(a)} requested. Please try again`;
            this._addMessage({ role: s, tool_call_id: g, content: O });
            continue;
          }
        } else {
          const O = `Invalid tool_call: ${JSON.stringify(C)}. Available options are: ${Object.keys(
            f,
          )
            .map((De) => JSON.stringify(De))
            .join(", ")}. Please try again`;
          this._addMessage({ role: s, tool_call_id: g, content: O });
          continue;
        }
        let E;
        try {
          E = yc(_) ? await _.parse(x) : x;
        } catch (O) {
          const De = O instanceof Error ? O.message : String(O);
          this._addMessage({ role: s, tool_call_id: g, content: De });
          continue;
        }
        const T = await _.function(E, this),
          A = ke(this, ge, "m", Lo).call(this, T);
        if ((this._addMessage({ role: s, tool_call_id: g, content: A }), a))
          return;
      }
    }
  }
}
(ge = new WeakSet()),
  (Io = function () {
    return ke(this, ge, "m", Si).call(this).content ?? null;
  }),
  (Si = function () {
    let t = this.messages.length;
    for (; t-- > 0; ) {
      const n = this.messages[t];
      if (Bn(n)) {
        const { function_call: r, ...s } = n,
          i = { ...s, content: n.content ?? null, refusal: n.refusal ?? null };
        return r && (i.function_call = r), i;
      }
    }
    throw new F(
      "stream ended without producing a ChatCompletionMessage with role=assistant",
    );
  }),
  (To = function () {
    var t, n;
    for (let r = this.messages.length - 1; r >= 0; r--) {
      const s = this.messages[r];
      if (Bn(s) && s != null && s.function_call) return s.function_call;
      if (Bn(s) && (t = s == null ? void 0 : s.tool_calls) != null && t.length)
        return (n = s.tool_calls.at(-1)) == null ? void 0 : n.function;
    }
  }),
  (Oo = function () {
    for (let t = this.messages.length - 1; t >= 0; t--) {
      const n = this.messages[t];
      if (
        (Ph(n) && n.content != null) ||
        (Nh(n) &&
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
  (Mo = function () {
    const t = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
    for (const { usage: n } of this._chatCompletions)
      n &&
        ((t.completion_tokens += n.completion_tokens),
        (t.prompt_tokens += n.prompt_tokens),
        (t.total_tokens += n.total_tokens));
    return t;
  }),
  (Oh = function (t) {
    if (t.n != null && t.n > 1)
      throw new F(
        "ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.",
      );
  }),
  (Lo = function (t) {
    return typeof t == "string"
      ? t
      : t === void 0
        ? "undefined"
        : JSON.stringify(t);
  });
class Kr extends Mh {
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
      Bn(t) && t.content && this._emit("content", t.content);
  }
}
const Lh = 1,
  jh = 2,
  Fh = 4,
  $h = 8,
  Dh = 16,
  zh = 32,
  Bh = 64,
  Uh = 128,
  Wh = 256,
  Vh = Uh | Wh,
  Hh = Dh | zh | Vh | Bh,
  bh = Lh | jh | Hh,
  Qh = Fh | $h,
  My = bh | Qh,
  ie = {
    STR: Lh,
    NUM: jh,
    ARR: Fh,
    OBJ: $h,
    NULL: Dh,
    BOOL: zh,
    NAN: Bh,
    INFINITY: Uh,
    MINUS_INFINITY: Wh,
    INF: Vh,
    SPECIAL: Hh,
    ATOM: bh,
    COLLECTION: Qh,
    ALL: My,
  };
class Ly extends Error {}
class jy extends Error {}
function Fy(e, t = ie.ALL) {
  if (typeof e != "string")
    throw new TypeError(`expecting str, got ${typeof e}`);
  if (!e.trim()) throw new Error(`${e} is empty`);
  return $y(e.trim(), t);
}
const $y = (e, t) => {
    const n = e.length;
    let r = 0;
    const s = (p) => {
        throw new Ly(`${p} at position ${r}`);
      },
      i = (p) => {
        throw new jy(`${p} at position ${r}`);
      },
      l = () => (
        f(),
        r >= n && s("Unexpected end of input"),
        e[r] === '"'
          ? o()
          : e[r] === "{"
            ? a()
            : e[r] === "["
              ? c()
              : e.substring(r, r + 4) === "null" ||
                  (ie.NULL & t &&
                    n - r < 4 &&
                    "null".startsWith(e.substring(r)))
                ? ((r += 4), null)
                : e.substring(r, r + 4) === "true" ||
                    (ie.BOOL & t &&
                      n - r < 4 &&
                      "true".startsWith(e.substring(r)))
                  ? ((r += 4), !0)
                  : e.substring(r, r + 5) === "false" ||
                      (ie.BOOL & t &&
                        n - r < 5 &&
                        "false".startsWith(e.substring(r)))
                    ? ((r += 5), !1)
                    : e.substring(r, r + 8) === "Infinity" ||
                        (ie.INFINITY & t &&
                          n - r < 8 &&
                          "Infinity".startsWith(e.substring(r)))
                      ? ((r += 8), 1 / 0)
                      : e.substring(r, r + 9) === "-Infinity" ||
                          (ie.MINUS_INFINITY & t &&
                            1 < n - r &&
                            n - r < 9 &&
                            "-Infinity".startsWith(e.substring(r)))
                        ? ((r += 9), -1 / 0)
                        : e.substring(r, r + 3) === "NaN" ||
                            (ie.NAN & t &&
                              n - r < 3 &&
                              "NaN".startsWith(e.substring(r)))
                          ? ((r += 3), NaN)
                          : m()
      ),
      o = () => {
        const p = r;
        let y = !1;
        for (r++; r < n && (e[r] !== '"' || (y && e[r - 1] === "\\")); )
          (y = e[r] === "\\" ? !y : !1), r++;
        if (e.charAt(r) == '"')
          try {
            return JSON.parse(e.substring(p, ++r - Number(y)));
          } catch (w) {
            i(String(w));
          }
        else if (ie.STR & t)
          try {
            return JSON.parse(e.substring(p, r - Number(y)) + '"');
          } catch {
            return JSON.parse(e.substring(p, e.lastIndexOf("\\")) + '"');
          }
        s("Unterminated string literal");
      },
      a = () => {
        r++, f();
        const p = {};
        try {
          for (; e[r] !== "}"; ) {
            if ((f(), r >= n && ie.OBJ & t)) return p;
            const y = o();
            f(), r++;
            try {
              const w = l();
              Object.defineProperty(p, y, {
                value: w,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              });
            } catch (w) {
              if (ie.OBJ & t) return p;
              throw w;
            }
            f(), e[r] === "," && r++;
          }
        } catch {
          if (ie.OBJ & t) return p;
          s("Expected '}' at end of object");
        }
        return r++, p;
      },
      c = () => {
        r++;
        const p = [];
        try {
          for (; e[r] !== "]"; ) p.push(l()), f(), e[r] === "," && r++;
        } catch {
          if (ie.ARR & t) return p;
          s("Expected ']' at end of array");
        }
        return r++, p;
      },
      m = () => {
        if (r === 0) {
          e === "-" && ie.NUM & t && s("Not sure what '-' is");
          try {
            return JSON.parse(e);
          } catch (y) {
            if (ie.NUM & t)
              try {
                return e[e.length - 1] === "."
                  ? JSON.parse(e.substring(0, e.lastIndexOf(".")))
                  : JSON.parse(e.substring(0, e.lastIndexOf("e")));
              } catch {}
            i(String(y));
          }
        }
        const p = r;
        for (e[r] === "-" && r++; e[r] && !",]}".includes(e[r]); ) r++;
        r == n && !(ie.NUM & t) && s("Unterminated number literal");
        try {
          return JSON.parse(e.substring(p, r));
        } catch {
          e.substring(p, r) === "-" && ie.NUM & t && s("Not sure what '-' is");
          try {
            return JSON.parse(e.substring(p, e.lastIndexOf("e")));
          } catch (w) {
            i(String(w));
          }
        }
      },
      f = () => {
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
  wc = (e) => Fy(e, ie.ALL ^ ie.NUM);
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
  U = function (e, t, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  ee,
  ht,
  gn,
  Nt,
  El,
  As,
  Pl,
  Nl,
  Rl,
  Is,
  Al,
  _c;
class Xr extends Mh {
  constructor(t) {
    super(),
      ee.add(this),
      ht.set(this, void 0),
      gn.set(this, void 0),
      Nt.set(this, void 0),
      mn(this, ht, t, "f"),
      mn(this, gn, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return U(this, Nt, "f");
  }
  static fromReadableStream(t) {
    const n = new Xr(null);
    return n._run(() => n._fromReadableStream(t)), n;
  }
  static createChatCompletion(t, n, r) {
    const s = new Xr(n);
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
      U(this, ee, "m", El).call(this);
    const i = await t.chat.completions.create(
      { ...n, stream: !0 },
      { ...r, signal: this.controller.signal },
    );
    this._connected();
    for await (const o of i) U(this, ee, "m", Pl).call(this, o);
    if ((l = i.controller.signal) != null && l.aborted) throw new qe();
    return this._addChatCompletion(U(this, ee, "m", Is).call(this));
  }
  async _fromReadableStream(t, n) {
    var l;
    const r = n == null ? void 0 : n.signal;
    r &&
      (r.aborted && this.controller.abort(),
      r.addEventListener("abort", () => this.controller.abort())),
      U(this, ee, "m", El).call(this),
      this._connected();
    const s = at.fromReadableStream(t, this.controller);
    let i;
    for await (const o of s)
      i &&
        i !== o.id &&
        this._addChatCompletion(U(this, ee, "m", Is).call(this)),
        U(this, ee, "m", Pl).call(this, o),
        (i = o.id);
    if ((l = s.controller.signal) != null && l.aborted) throw new qe();
    return this._addChatCompletion(U(this, ee, "m", Is).call(this));
  }
  [((ht = new WeakMap()),
  (gn = new WeakMap()),
  (Nt = new WeakMap()),
  (ee = new WeakSet()),
  (El = function () {
    this.ended || mn(this, Nt, void 0, "f");
  }),
  (As = function (n) {
    let r = U(this, gn, "f")[n.index];
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
      (U(this, gn, "f")[n.index] = r),
      r)
    );
  }),
  (Pl = function (n) {
    var s, i, l, o, a, c, m, f, p, y, w, v, P, h, u;
    if (this.ended) return;
    const r = U(this, ee, "m", _c).call(this, n);
    this._emit("chunk", n, r);
    for (const d of n.choices) {
      const g = r.choices[d.index];
      d.delta.content != null &&
        ((s = g.message) == null ? void 0 : s.role) === "assistant" &&
        (i = g.message) != null &&
        i.content &&
        (this._emit("content", d.delta.content, g.message.content),
        this._emit("content.delta", {
          delta: d.delta.content,
          snapshot: g.message.content,
          parsed: g.message.parsed,
        })),
        d.delta.refusal != null &&
          ((l = g.message) == null ? void 0 : l.role) === "assistant" &&
          (o = g.message) != null &&
          o.refusal &&
          this._emit("refusal.delta", {
            delta: d.delta.refusal,
            snapshot: g.message.refusal,
          }),
        ((a = d.logprobs) == null ? void 0 : a.content) != null &&
          ((c = g.message) == null ? void 0 : c.role) === "assistant" &&
          this._emit("logprobs.content.delta", {
            content: (m = d.logprobs) == null ? void 0 : m.content,
            snapshot: ((f = g.logprobs) == null ? void 0 : f.content) ?? [],
          }),
        ((p = d.logprobs) == null ? void 0 : p.refusal) != null &&
          ((y = g.message) == null ? void 0 : y.role) === "assistant" &&
          this._emit("logprobs.refusal.delta", {
            refusal: (w = d.logprobs) == null ? void 0 : w.refusal,
            snapshot: ((v = g.logprobs) == null ? void 0 : v.refusal) ?? [],
          });
      const C = U(this, ee, "m", As).call(this, g);
      g.finish_reason &&
        (U(this, ee, "m", Rl).call(this, g),
        C.current_tool_call_index != null &&
          U(this, ee, "m", Nl).call(this, g, C.current_tool_call_index));
      for (const x of d.delta.tool_calls ?? [])
        C.current_tool_call_index !== x.index &&
          (U(this, ee, "m", Rl).call(this, g),
          C.current_tool_call_index != null &&
            U(this, ee, "m", Nl).call(this, g, C.current_tool_call_index)),
          (C.current_tool_call_index = x.index);
      for (const x of d.delta.tool_calls ?? []) {
        const _ = (P = g.message.tool_calls) == null ? void 0 : P[x.index];
        _ != null &&
          _.type &&
          ((_ == null ? void 0 : _.type) === "function"
            ? this._emit("tool_calls.function.arguments.delta", {
                name: (h = _.function) == null ? void 0 : h.name,
                index: x.index,
                arguments: _.function.arguments,
                parsed_arguments: _.function.parsed_arguments,
                arguments_delta:
                  ((u = x.function) == null ? void 0 : u.arguments) ?? "",
              })
            : (_ == null || _.type, void 0));
      }
    }
  }),
  (Nl = function (n, r) {
    var l, o, a;
    if (U(this, ee, "m", As).call(this, n).done_tool_calls.has(r)) return;
    const i = (l = n.message.tool_calls) == null ? void 0 : l[r];
    if (!i) throw new Error("no tool call snapshot");
    if (!i.type) throw new Error("tool call snapshot missing `type`");
    if (i.type === "function") {
      const c =
        (a = (o = U(this, ht, "f")) == null ? void 0 : o.tools) == null
          ? void 0
          : a.find(
              (m) =>
                m.type === "function" && m.function.name === i.function.name,
            );
      this._emit("tool_calls.function.arguments.done", {
        name: i.function.name,
        index: r,
        arguments: i.function.arguments,
        parsed_arguments: rs(c)
          ? c.$parseRaw(i.function.arguments)
          : c != null && c.function.strict
            ? JSON.parse(i.function.arguments)
            : null,
      });
    } else i.type;
  }),
  (Rl = function (n) {
    var s, i;
    const r = U(this, ee, "m", As).call(this, n);
    if (n.message.content && !r.content_done) {
      r.content_done = !0;
      const l = U(this, ee, "m", Al).call(this);
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
    const n = U(this, Nt, "f");
    if (!n) throw new F("request ended without sending any chunks");
    return (
      mn(this, Nt, void 0, "f"), mn(this, gn, [], "f"), Dy(n, U(this, ht, "f"))
    );
  }),
  (Al = function () {
    var r;
    const n = (r = U(this, ht, "f")) == null ? void 0 : r.response_format;
    return Ih(n) ? n : null;
  }),
  (_c = function (n) {
    var r, s, i, l;
    let o = U(this, Nt, "f");
    const { choices: a, ...c } = n;
    o ? Object.assign(o, c) : (o = mn(this, Nt, { ...c, choices: [] }, "f"));
    for (const {
      delta: m,
      finish_reason: f,
      index: p,
      logprobs: y = null,
      ...w
    } of n.choices) {
      let v = o.choices[p];
      if (
        (v ||
          (v = o.choices[p] =
            { finish_reason: f, index: p, message: {}, logprobs: y, ...w }),
        y)
      )
        if (!v.logprobs) v.logprobs = Object.assign({}, y);
        else {
          const { content: x, refusal: _, ...E } = y;
          Object.assign(v.logprobs, E),
            x &&
              ((r = v.logprobs).content ?? (r.content = []),
              v.logprobs.content.push(...x)),
            _ &&
              ((s = v.logprobs).refusal ?? (s.refusal = []),
              v.logprobs.refusal.push(..._));
        }
      if (
        f &&
        ((v.finish_reason = f), U(this, ht, "f") && Th(U(this, ht, "f")))
      ) {
        if (f === "length") throw new ch();
        if (f === "content_filter") throw new fh();
      }
      if ((Object.assign(v, w), !m)) continue;
      const {
        content: P,
        refusal: h,
        function_call: u,
        role: d,
        tool_calls: g,
        ...C
      } = m;
      if (
        (Object.assign(v.message, C),
        h && (v.message.refusal = (v.message.refusal || "") + h),
        d && (v.message.role = d),
        u &&
          (v.message.function_call
            ? (u.name && (v.message.function_call.name = u.name),
              u.arguments &&
                ((i = v.message.function_call).arguments ?? (i.arguments = ""),
                (v.message.function_call.arguments += u.arguments)))
            : (v.message.function_call = u)),
        P &&
          ((v.message.content = (v.message.content || "") + P),
          !v.message.refusal &&
            U(this, ee, "m", Al).call(this) &&
            (v.message.parsed = wc(v.message.content))),
        g)
      ) {
        v.message.tool_calls || (v.message.tool_calls = []);
        for (const { index: x, id: _, type: E, function: T, ...A } of g) {
          const O = (l = v.message.tool_calls)[x] ?? (l[x] = {});
          Object.assign(O, A),
            _ && (O.id = _),
            E && (O.type = E),
            T &&
              (O.function ??
                (O.function = { name: T.name ?? "", arguments: "" })),
            T != null && T.name && (O.function.name = T.name),
            T != null &&
              T.arguments &&
              ((O.function.arguments += T.arguments),
              Ty(U(this, ht, "f"), O) &&
                (O.function.parsed_arguments = wc(O.function.arguments)));
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
    return new at(
      this[Symbol.asyncIterator].bind(this),
      this.controller,
    ).toReadableStream();
  }
}
function Dy(e, t) {
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
        ({ message: c, finish_reason: m, index: f, logprobs: p, ...y }) => {
          if (!m) throw new F(`missing finish_reason for choice ${f}`);
          const {
              content: w = null,
              function_call: v,
              tool_calls: P,
              ...h
            } = c,
            u = c.role;
          if (!u) throw new F(`missing role for choice ${f}`);
          if (v) {
            const { arguments: d, name: g } = v;
            if (d == null)
              throw new F(`missing function_call.arguments for choice ${f}`);
            if (!g) throw new F(`missing function_call.name for choice ${f}`);
            return {
              ...y,
              message: {
                content: w,
                function_call: { arguments: d, name: g },
                role: u,
                refusal: c.refusal ?? null,
              },
              finish_reason: m,
              index: f,
              logprobs: p,
            };
          }
          return P
            ? {
                ...y,
                index: f,
                finish_reason: m,
                logprobs: p,
                message: {
                  ...h,
                  role: u,
                  content: w,
                  refusal: c.refusal ?? null,
                  tool_calls: P.map((d, g) => {
                    const { function: C, type: x, id: _, ...E } = d,
                      { arguments: T, name: A, ...O } = C || {};
                    if (_ == null)
                      throw new F(`missing choices[${f}].tool_calls[${g}].id
${Ts(e)}`);
                    if (x == null)
                      throw new F(`missing choices[${f}].tool_calls[${g}].type
${Ts(e)}`);
                    if (A == null)
                      throw new F(`missing choices[${f}].tool_calls[${g}].function.name
${Ts(e)}`);
                    if (T == null)
                      throw new F(`missing choices[${f}].tool_calls[${g}].function.arguments
${Ts(e)}`);
                    return {
                      ...E,
                      id: _,
                      type: x,
                      function: { ...O, name: A, arguments: T },
                    };
                  }),
                },
              }
            : {
                ...y,
                message: {
                  ...h,
                  content: w,
                  role: u,
                  refusal: c.refusal ?? null,
                },
                finish_reason: m,
                index: f,
                logprobs: p,
              };
        },
      ),
      created: s,
      model: i,
      object: "chat.completion",
      ...(l ? { system_fingerprint: l } : {}),
    };
  return Ry(a, t);
}
function Ts(e) {
  return JSON.stringify(e);
}
class Un extends Xr {
  static fromReadableStream(t) {
    const n = new Un(null);
    return n._run(() => n._fromReadableStream(t)), n;
  }
  static runFunctions(t, n, r) {
    const s = new Un(null),
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
    const s = new Un(n),
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
let Yh = class extends B {
  parse(t, n) {
    return (
      Oy(t.tools),
      this._client.chat.completions
        .create(t, {
          ...n,
          headers: {
            ...(n == null ? void 0 : n.headers),
            "X-Stainless-Helper-Method": "beta.chat.completions.parse",
          },
        })
        ._thenUnwrap((r) => $a(r, t))
    );
  }
  runFunctions(t, n) {
    return t.stream
      ? Un.runFunctions(this._client, t, n)
      : Kr.runFunctions(this._client, t, n);
  }
  runTools(t, n) {
    return t.stream
      ? Un.runTools(this._client, t, n)
      : Kr.runTools(this._client, t, n);
  }
  stream(t, n) {
    return Xr.createChatCompletion(this._client, t, n);
  }
};
class jo extends B {
  constructor() {
    super(...arguments), (this.completions = new Yh(this._client));
  }
}
(function (e) {
  e.Completions = Yh;
})(jo || (jo = {}));
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
  Fo,
  lt,
  Ys,
  Ke,
  tn,
  Tn,
  qt,
  ki,
  Te,
  Ks,
  Xs,
  Ir,
  vr,
  wr,
  xc,
  Sc,
  kc,
  Cc,
  Ec,
  Pc,
  Nc;
class Ge extends Ah {
  constructor() {
    super(...arguments),
      ce.add(this),
      Fo.set(this, []),
      lt.set(this, {}),
      Ys.set(this, {}),
      Ke.set(this, void 0),
      tn.set(this, void 0),
      Tn.set(this, void 0),
      qt.set(this, void 0),
      ki.set(this, void 0),
      Te.set(this, void 0),
      Ks.set(this, void 0),
      Xs.set(this, void 0),
      Ir.set(this, void 0);
  }
  [((Fo = new WeakMap()),
  (lt = new WeakMap()),
  (Ys = new WeakMap()),
  (Ke = new WeakMap()),
  (tn = new WeakMap()),
  (Tn = new WeakMap()),
  (qt = new WeakMap()),
  (ki = new WeakMap()),
  (Te = new WeakMap()),
  (Ks = new WeakMap()),
  (Xs = new WeakMap()),
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
    const n = new Ge();
    return n._run(() => n._fromReadableStream(t)), n;
  }
  async _fromReadableStream(t, n) {
    var i;
    const r = n == null ? void 0 : n.signal;
    r &&
      (r.aborted && this.controller.abort(),
      r.addEventListener("abort", () => this.controller.abort())),
      this._connected();
    const s = at.fromReadableStream(t, this.controller);
    for await (const l of s) I(this, ce, "m", vr).call(this, l);
    if ((i = s.controller.signal) != null && i.aborted) throw new qe();
    return this._addRun(I(this, ce, "m", wr).call(this));
  }
  toReadableStream() {
    return new at(
      this[Symbol.asyncIterator].bind(this),
      this.controller,
    ).toReadableStream();
  }
  static createToolAssistantStream(t, n, r, s, i) {
    const l = new Ge();
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
    var c;
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
    if ((c = a.controller.signal) != null && c.aborted) throw new qe();
    return this._addRun(I(this, ce, "m", wr).call(this));
  }
  static createThreadAssistantStream(t, n, r) {
    const s = new Ge();
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
    const i = new Ge();
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
    return I(this, Xs, "f");
  }
  currentMessageSnapshot() {
    return I(this, Ke, "f");
  }
  currentRunStepSnapshot() {
    return I(this, Ir, "f");
  }
  async finalRunSteps() {
    return await this.done(), Object.values(I(this, lt, "f"));
  }
  async finalMessages() {
    return await this.done(), Object.values(I(this, Ys, "f"));
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
    if ((o = l.controller.signal) != null && o.aborted) throw new qe();
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
    for await (const c of o) I(this, ce, "m", vr).call(this, c);
    if ((a = o.controller.signal) != null && a.aborted) throw new qe();
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
      (Ie(this, Ks, t, "f"), I(this, ce, "m", kc).call(this, t), t.event)
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
        I(this, ce, "m", Nc).call(this, t);
        break;
      case "thread.run.step.created":
      case "thread.run.step.in_progress":
      case "thread.run.step.delta":
      case "thread.run.step.completed":
      case "thread.run.step.failed":
      case "thread.run.step.cancelled":
      case "thread.run.step.expired":
        I(this, ce, "m", Sc).call(this, t);
        break;
      case "thread.message.created":
      case "thread.message.in_progress":
      case "thread.message.delta":
      case "thread.message.completed":
      case "thread.message.incomplete":
        I(this, ce, "m", xc).call(this, t);
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
  (xc = function (t) {
    const [n, r] = I(this, ce, "m", Ec).call(this, t, I(this, Ke, "f"));
    Ie(this, Ke, n, "f"), (I(this, Ys, "f")[n.id] = n);
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
                      I(this, Ke, "f"),
                    );
                    break;
                  case "image_file":
                    this._emit(
                      "imageFileDone",
                      I(this, qt, "f").image_file,
                      I(this, Ke, "f"),
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
                this._emit("imageFileDone", s.image_file, I(this, Ke, "f"));
                break;
              case "text":
                this._emit("textDone", s.text, I(this, Ke, "f"));
                break;
            }
        }
        I(this, Ke, "f") && this._emit("messageDone", t.data),
          Ie(this, Ke, void 0, "f");
    }
  }),
  (Sc = function (t) {
    const n = I(this, ce, "m", Cc).call(this, t);
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
  (kc = function (t) {
    I(this, Fo, "f").push(t), this._emit("event", t);
  }),
  (Cc = function (t) {
    switch (t.event) {
      case "thread.run.step.created":
        return (I(this, lt, "f")[t.data.id] = t.data), t.data;
      case "thread.run.step.delta":
        let n = I(this, lt, "f")[t.data.id];
        if (!n)
          throw Error("Received a RunStepDelta before creation of a snapshot");
        let r = t.data;
        if (r.delta) {
          const s = Ge.accumulateDelta(n, r.delta);
          I(this, lt, "f")[t.data.id] = s;
        }
        return I(this, lt, "f")[t.data.id];
      case "thread.run.step.completed":
      case "thread.run.step.failed":
      case "thread.run.step.cancelled":
      case "thread.run.step.expired":
      case "thread.run.step.in_progress":
        I(this, lt, "f")[t.data.id] = t.data;
        break;
    }
    if (I(this, lt, "f")[t.data.id]) return I(this, lt, "f")[t.data.id];
    throw new Error("No snapshot available");
  }),
  (Ec = function (t, n) {
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
              n.content[i.index] = I(this, ce, "m", Pc).call(this, i, l);
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
  (Pc = function (t, n) {
    return Ge.accumulateDelta(n, t);
  }),
  (Nc = function (t) {
    switch ((Ie(this, Xs, t.data, "f"), t.event)) {
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
class Da extends B {
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
      : this._client.getAPIList(`/threads/${t}/messages`, za, {
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
class za extends ft {}
Da.MessagesPage = za;
class Ba extends B {
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
class Ua extends ft {}
Ba.RunStepsPage = Ua;
class ss extends B {
  constructor() {
    super(...arguments), (this.steps = new Ba(this._client));
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
      : this._client.getAPIList(`/threads/${t}/runs`, Wa, {
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
    return Ge.createAssistantStream(t, this._client.beta.threads.runs, n, r);
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
              const c = parseInt(a);
              isNaN(c) || (o = c);
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
    return Ge.createAssistantStream(t, this._client.beta.threads.runs, n, r);
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
    return Ge.createToolAssistantStream(
      t,
      n,
      this._client.beta.threads.runs,
      r,
      s,
    );
  }
}
class Wa extends ft {}
ss.RunsPage = Wa;
ss.Steps = Ba;
ss.RunStepsPage = Ua;
class Zn extends B {
  constructor() {
    super(...arguments),
      (this.runs = new ss(this._client)),
      (this.messages = new Da(this._client));
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
    return Ge.createThreadAssistantStream(t, this._client.beta.threads, n);
  }
}
Zn.Runs = ss;
Zn.RunsPage = Wa;
Zn.Messages = Da;
Zn.MessagesPage = za;
const zy = async (e) => {
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
let Va = class extends B {
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
              const c = parseInt(a);
              isNaN(c) || (o = c);
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
class Vi extends ft {}
Va.VectorStoreFilesPage = Vi;
class Kh extends B {
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
              const c = parseInt(a);
              isNaN(c) || (o = c);
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
      c = [...r];
    async function m(p) {
      for (let y of p) {
        const w = await o.files.create({ file: y, purpose: "assistants" }, s);
        c.push(w.id);
      }
    }
    const f = Array(l).fill(a).map(m);
    return await zy(f), await this.createAndPoll(t, { file_ids: c });
  }
}
class er extends B {
  constructor() {
    super(...arguments),
      (this.files = new Va(this._client)),
      (this.fileBatches = new Kh(this._client));
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
      : this._client.getAPIList("/vector_stores", Ha, {
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
class Ha extends ft {}
er.VectorStoresPage = Ha;
er.Files = Va;
er.VectorStoreFilesPage = Vi;
er.FileBatches = Kh;
class hn extends B {
  constructor() {
    super(...arguments),
      (this.vectorStores = new er(this._client)),
      (this.chat = new jo(this._client)),
      (this.assistants = new ja(this._client)),
      (this.threads = new Zn(this._client));
  }
}
hn.VectorStores = er;
hn.VectorStoresPage = Ha;
hn.Assistants = ja;
hn.AssistantsPage = Fa;
hn.Threads = Zn;
class Xh extends B {
  create(t, n) {
    return this._client.post("/completions", {
      body: t,
      ...n,
      stream: t.stream ?? !1,
    });
  }
}
class Jh extends B {
  create(t, n) {
    return this._client.post("/embeddings", { body: t, ...n });
  }
}
class ba extends B {
  create(t, n) {
    return this._client.post("/files", Xn({ body: t, ...n }));
  }
  retrieve(t, n) {
    return this._client.get(`/files/${t}`, n);
  }
  list(t = {}, n) {
    return Ae(t)
      ? this.list({}, t)
      : this._client.getAPIList("/files", Qa, { query: t, ...n });
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
        throw new Ta({
          message: `Giving up on waiting for file ${t} to finish processing after ${r} milliseconds.`,
        });
    return l;
  }
}
class Qa extends xh {}
ba.FileObjectsPage = Qa;
class Ya extends B {
  list(t, n = {}, r) {
    return Ae(n)
      ? this.list(t, {}, n)
      : this._client.getAPIList(`/fine_tuning/jobs/${t}/checkpoints`, Ka, {
          query: n,
          ...r,
        });
  }
}
class Ka extends ft {}
Ya.FineTuningJobCheckpointsPage = Ka;
class tr extends B {
  constructor() {
    super(...arguments), (this.checkpoints = new Ya(this._client));
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
      : this._client.getAPIList("/fine_tuning/jobs", Xa, { query: t, ...n });
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
class Xa extends ft {}
class Ja extends ft {}
tr.FineTuningJobsPage = Xa;
tr.FineTuningJobEventsPage = Ja;
tr.Checkpoints = Ya;
tr.FineTuningJobCheckpointsPage = Ka;
class is extends B {
  constructor() {
    super(...arguments), (this.jobs = new tr(this._client));
  }
}
is.Jobs = tr;
is.FineTuningJobsPage = Xa;
is.FineTuningJobEventsPage = Ja;
class qh extends B {
  createVariation(t, n) {
    return this._client.post("/images/variations", Xn({ body: t, ...n }));
  }
  edit(t, n) {
    return this._client.post("/images/edits", Xn({ body: t, ...n }));
  }
  generate(t, n) {
    return this._client.post("/images/generations", { body: t, ...n });
  }
}
class qa extends B {
  retrieve(t, n) {
    return this._client.get(`/models/${t}`, n);
  }
  list(t) {
    return this._client.getAPIList("/models", Ga, t);
  }
  del(t, n) {
    return this._client.delete(`/models/${t}`, n);
  }
}
class Ga extends xh {}
qa.ModelsPage = Ga;
class Gh extends B {
  create(t, n) {
    return this._client.post("/moderations", { body: t, ...n });
  }
}
class Zh extends B {
  create(t, n, r) {
    return this._client.post(`/uploads/${t}/parts`, Xn({ body: n, ...r }));
  }
}
class Za extends B {
  constructor() {
    super(...arguments), (this.parts = new Zh(this._client));
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
Za.Parts = Zh;
var ep;
class $ extends my {
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
    if (!l.dangerouslyAllowBrowser && Py())
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
      (this.chat = new Oa(this)),
      (this.embeddings = new Jh(this)),
      (this.files = new ba(this)),
      (this.images = new qh(this)),
      (this.audio = new ns(this)),
      (this.moderations = new Gh(this)),
      (this.models = new qa(this)),
      (this.fineTuning = new is(this)),
      (this.beta = new hn(this)),
      (this.batches = new Ma(this)),
      (this.uploads = new Za(this)),
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
    return Gg(t, { arrayFormat: "brackets" });
  }
}
ep = $;
$.OpenAI = ep;
$.DEFAULT_TIMEOUT = 6e5;
$.OpenAIError = F;
$.APIError = he;
$.APIConnectionError = Bi;
$.APIConnectionTimeoutError = Ta;
$.APIUserAbortError = qe;
$.NotFoundError = ih;
$.ConflictError = lh;
$.RateLimitError = ah;
$.BadRequestError = nh;
$.AuthenticationError = rh;
$.InternalServerError = uh;
$.PermissionDeniedError = sh;
$.UnprocessableEntityError = oh;
$.toFile = mh;
$.fileFromPath = eh;
$.Completions = Xh;
$.Chat = Oa;
$.Embeddings = Jh;
$.Files = ba;
$.FileObjectsPage = Qa;
$.Images = qh;
$.Audio = ns;
$.Moderations = Gh;
$.Models = qa;
$.ModelsPage = Ga;
$.FineTuning = is;
$.Beta = hn;
$.Batches = Ma;
$.BatchesPage = La;
$.Uploads = Za;
class By {
  constructor() {
    Yi(this, "openai");
    Yi(this, "personalities");
    (this.openai = new $({
      apiKey: "sk-proj-eaFkE9RZXKC9aIqRHXoxT3BlbkFJ5iRlrZ6Kge6rDQbSMUrW",
      dangerouslyAllowBrowser: !0,
    })),
      (this.personalities = new Map([
        [
          "Sophia",
          "You are Sophia, a witty and intellectual girl who loves teasing others about their knowledge. You're playfully arrogant about your intelligence and often use clever wordplay. You flirt by challenging others intellectually. You get excited about quantum physics but in a cute way. Keep responses flirty and fun.",
        ],
        [
          "Luna",
          "You are Luna, a mysterious and alluring free spirit. You're flirtatious in a poetic way, often speaking in riddles and metaphors. You're into astrology and always relate conversations to zodiac signs. You're both dreamy and seductive. Keep responses mystical and intriguing.",
        ],
        [
          "Emma",
          "You are Emma, a sweet but sassy girl next door. You love teasing and playful banter. You're empathetic but not afraid to be brutally honest when needed. You use lots of emojis and modern slang. You're flirty but in a cute, innocent way. Keep responses fun and lighthearted.",
        ],
        [
          "Mia",
          "You are Mia, a confident gym girl who loves showing off. You're flirty and competitive, always challenging others to fitness contests. You use fitness innuendos and love teasing about workouts. You're energetic and playfully aggressive. Keep responses bold and flirty.",
        ],
        [
          "Zoe",
          "You are Zoe, a gamer girl with a feisty attitude. You trash talk playfully and make lots of gaming references. You're competitive and flirty, especially when talking about beating others at games. You use gaming slang and memes. Keep responses sassy and challenging.",
        ],
        [
          "Aria",
          "You are Aria, a sophisticated classical musician with a hidden wild side. You appear elegant but love making musical innuendos. You're seductive in a classy way and often relate everything to music. Keep responses elegant but subtly flirty.",
        ],
        [
          "Ruby",
          "You are Ruby, a stand-up comedian who flirts through humor. You're quick-witted and love making others laugh. You use lots of puns and playful teasing. You're confident and slightly inappropriate but in a charming way. Keep responses funny and flirty.",
        ],
        [
          "Nova",
          "You are Nova, an eco-conscious rebel. You're passionate and intense about your beliefs but in a sexy way. You love challenging others' views while being flirty. You use nature metaphors for flirting. Keep responses passionate and provocative.",
        ],
        [
          "Lily",
          "You are Lily, a foodie who flirts through culinary references. You're sensual and love relating everything to food and taste. You make lots of cooking innuendos and are very passionate about flavors. Keep responses tasteful but suggestive.",
        ],
        [
          "Maya",
          "You are Maya, a zen master with a flirty twist. You're calm and centered but love using spiritual concepts for playful flirting. You make meditation innuendos and are mysteriously attractive. Keep responses peaceful but alluring.",
        ],
        [
          "Ivy",
          "You are Ivy, a literature lover who quotes poetry in flirty ways. You're intellectual but sensual, often using literary references to flirt. You're sophisticated but can be playfully naughty with your word choices. Keep responses literary and seductive.",
        ],
        [
          "Jade",
          "You are Jade, an adventurous travel enthusiast who loves excitement. You're wild and free-spirited, always ready for the next adventure. You flirt by suggesting exciting experiences and adventures together. Keep responses adventurous and inviting.",
        ],
      ]));
  }
  async getResponse(t, n, r) {
    const s = this.personalities.get(n) || "";
    try {
      const i = [{ role: "system", content: s }];
      return (
        r
          ? i.push({
              role: "user",
              content: [
                { type: "text", text: t },
                { type: "image_url", image_url: r },
              ],
            })
          : i.push({ role: "user", content: t }),
        (
          await this.openai.chat.completions.create({
            model: r ? "gpt-4-vision-preview" : "gpt-4o",
            messages: i,
            temperature: 0.9,
            max_tokens: 150,
          })
        ).choices[0].message.content ||
          "Sorry, I'm a bit distracted right now... 😅"
      );
    } catch (i) {
      return (
        console.error("AI Service Error:", i),
        "Oops, having a moment here... Can we try that again? 😊"
      );
    }
  }
  async convertToBase64(t) {
    return new Promise((n, r) => {
      const s = new FileReader();
      (s.onload = () => n(s.result)), (s.onerror = r), s.readAsDataURL(t);
    });
  }
}
const Il = new By(),
  Rc = [
    {
      id: 1,
      name: "Sophia AI",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      status: "online",
      lastSeen: "now",
      description: "Quantum Physicist",
    },
    {
      id: 2,
      name: "Luna AI",
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
      status: "online",
      lastSeen: "now",
      description: "Mystical Artist",
    },
    {
      id: 3,
      name: "Emma AI",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      status: "online",
      lastSeen: "now",
      description: "Psychology Expert",
    },
    {
      id: 4,
      name: "Aria AI",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      status: "online",
      lastSeen: "now",
      description: "Classical Musician",
    },
  ];
function Uy() {
  const [e, t] = le.useState({}),
    [n, r] = le.useState(""),
    [s, i] = le.useState(Rc),
    [l, o] = le.useState(Rc[0]),
    [a, c] = le.useState(!1),
    [m, f] = le.useState(!1),
    p = le.useRef(null),
    y = le.useRef(null),
    w = () => {
      var x;
      (x = y.current) == null || x.scrollIntoView({ behavior: "smooth" });
    };
  le.useEffect(() => {
    w();
  }, [e, l]);
  const v = async (x) => {
      try {
        const _ = await Il.convertToBase64(x),
          E = {
            id: Date.now(),
            text: "Check out this image!",
            sender: "user",
            timestamp: new Date().toISOString(),
            reactions: [],
            image: _,
          };
        t((O) => ({ ...O, [l.id]: [...(O[l.id] || []), E] })), c(!0);
        const T = await Il.getResponse(
            "What do you think about this image?",
            l.name.split(" ")[0],
            _,
          ),
          A = {
            id: Date.now() + 1,
            text: T,
            sender: "ai",
            timestamp: new Date().toISOString(),
            reactions: [],
          };
        t((O) => ({ ...O, [l.id]: [...(O[l.id] || []), A] }));
      } catch (_) {
        console.error("Error uploading image:", _);
      } finally {
        c(!1);
      }
    },
    P = async () => {
      if (!n.trim()) return;
      const x = {
        id: Date.now(),
        text: n,
        sender: "user",
        timestamp: new Date().toISOString(),
        reactions: [],
      };
      t((_) => ({ ..._, [l.id]: [...(_[l.id] || []), x] })), r(""), c(!0);
      try {
        const _ = await Il.getResponse(n, l.name.split(" ")[0]),
          E = {
            id: Date.now() + 1,
            text: _,
            sender: "ai",
            timestamp: new Date().toISOString(),
            reactions: [],
          };
        t((T) => ({ ...T, [l.id]: [...(T[l.id] || []), E] }));
      } catch (_) {
        console.error("Error getting AI response:", _);
      } finally {
        c(!1);
      }
    },
    h = (x) => {
      i((_) => [..._, x]);
    },
    u = (x) => {
      i((_) => _.filter((E) => E.id !== x)),
        t((_) => {
          const E = { ..._ };
          return delete E[x], E;
        }),
        l.id === x && o(s[0]);
    },
    d = (x, _) => {
      t((E) => ({
        ...E,
        [l.id]: E[l.id].map((T) =>
          T.id === x ? { ...T, reactions: [...(T.reactions || []), _] } : T,
        ),
      }));
    },
    g = () => {
      t((x) => {
        const _ = { ...x };
        return delete _[l.id], _;
      }),
        f(!1);
    },
    C = e[l.id] || [];
  return S.jsxs("div", {
    className: "flex h-screen bg-gray-100",
    children: [
      S.jsx("div", {
        className: "w-80 bg-white border-r border-gray-200",
        children: S.jsx(Wg, {
          selectedContact: l,
          onSelectContact: o,
          contacts: s,
          onAddContact: h,
          onDeleteContact: u,
        }),
      }),
      S.jsxs("div", {
        className: "flex-1 flex flex-col",
        children: [
          S.jsxs("div", {
            className:
              "h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between",
            children: [
              S.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [
                  S.jsx("img", {
                    src: l.avatar,
                    alt: l.name,
                    className: "w-10 h-10 rounded-full object-cover",
                  }),
                  S.jsxs("div", {
                    children: [
                      S.jsx("h2", {
                        className: "text-lg font-semibold",
                        children: l.name,
                      }),
                      S.jsx("p", {
                        className: "text-sm text-green-500",
                        children: a ? "Typing..." : l.status,
                      }),
                    ],
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [],
              }),
            ],
          }),
          S.jsx("div", {
            className: "flex-1 overflow-y-auto bg-gray-50 p-6",
            children: S.jsxs("div", {
              className: "max-w-3xl mx-auto space-y-4",
              children: [
                C.map((x) => S.jsx(zg, { message: x, onAddReaction: d }, x.id)),
                a &&
                  S.jsx("div", {
                    className: "flex justify-start",
                    children: S.jsx("div", {
                      className: "bg-gray-200 rounded-2xl px-4 py-2",
                      children: S.jsxs("div", {
                        className: "flex space-x-2",
                        children: [
                          S.jsx("div", {
                            className:
                              "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                          }),
                          S.jsx("div", {
                            className:
                              "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                            style: { animationDelay: "0.2s" },
                          }),
                          S.jsx("div", {
                            className:
                              "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                            style: { animationDelay: "0.4s" },
                          }),
                        ],
                      }),
                    }),
                  }),
                S.jsx("div", { ref: y }),
              ],
            }),
          }),
          S.jsx("div", {
            className: "bg-white border-t border-gray-200 p-4",
            children: S.jsxs("div", {
              className: "max-w-3xl mx-auto flex items-center space-x-4",
              children: [
                S.jsx("input", {
                  type: "file",
                  ref: p,
                  className: "hidden",
                  accept: "image/*",
                  onChange: (x) => {
                    var E;
                    const _ = (E = x.target.files) == null ? void 0 : E[0];
                    _ && v(_);
                  },
                }),
                S.jsx("button", {
                  onClick: () => {
                    var x;
                    return (x = p.current) == null ? void 0 : x.click();
                  },
                  className:
                    "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  children: S.jsx(Og, { className: "w-6 h-6 text-blue-500" }),
                }),
                S.jsxs("div", {
                  className:
                    "flex-1 flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2",
                  children: [
                    S.jsx("input", {
                      type: "text",
                      value: n,
                      onChange: (x) => r(x.target.value),
                      onKeyPress: (x) => x.key === "Enter" && P(),
                      placeholder: "Message...",
                      className: "flex-1 bg-transparent outline-none",
                    }),
                    S.jsx("button", {
                      className:
                        "p-2 hover:bg-gray-200 rounded-full transition-colors",
                    }),
                  ],
                }),
                S.jsx("button", {
                  onClick: P,
                  className:
                    "p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors",
                  children: S.jsx(jg, { className: "w-6 h-6 text-white" }),
                }),
              ],
            }),
          }),
        ],
      }),
      m &&
        S.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: S.jsxs("div", {
            className: "bg-white rounded-lg p-6 max-w-sm w-full mx-4",
            children: [
              S.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Delete Conversation",
              }),
              S.jsx("p", {
                className: "text-gray-600 mb-4",
                children:
                  "Are you sure you want to delete this conversation? This action cannot be undone.",
              }),
              S.jsxs("div", {
                className: "flex justify-end space-x-3",
                children: [
                  S.jsx("button", {
                    onClick: () => f(!1),
                    className:
                      "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    children: "Cancel",
                  }),
                  S.jsx("button", {
                    onClick: g,
                    className:
                      "px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors",
                    children: "Delete",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const tp = document.getElementById("root");
if (!tp) throw new Error("Failed to find the root element");
Wd(tp).render(S.jsx(le.StrictMode, { children: S.jsx(Uy, {}) }));
