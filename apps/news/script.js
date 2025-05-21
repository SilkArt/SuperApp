(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Xu = { exports: {} },
  El = {},
  Gu = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
  jf = Symbol.for("react.portal"),
  Df = Symbol.for("react.fragment"),
  Mf = Symbol.for("react.strict_mode"),
  Ff = Symbol.for("react.profiler"),
  Af = Symbol.for("react.provider"),
  Uf = Symbol.for("react.context"),
  If = Symbol.for("react.forward_ref"),
  Bf = Symbol.for("react.suspense"),
  Hf = Symbol.for("react.memo"),
  $f = Symbol.for("react.lazy"),
  xs = Symbol.iterator;
function Vf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xs && e[xs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ju = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yu = Object.assign,
  Zu = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Ju);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bu() {}
bu.prototype = gn.prototype;
function xi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Ju);
}
var Ci = (xi.prototype = new bu());
Ci.constructor = xi;
Yu(Ci, gn.prototype);
Ci.isPureReactComponent = !0;
var Cs = Array.isArray,
  ea = Object.prototype.hasOwnProperty,
  _i = { current: null },
  ta = { key: !0, ref: !0, __self: !0, __source: !0 };
function na(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ea.call(t, r) && !ta.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: cr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: _i.current,
  };
}
function Wf(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ni(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function Qf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _s = /\/+/g;
function Kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qf("" + e.key)
    : t.toString(36);
}
function Fr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cr:
          case jf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Kl(i, 0) : r),
      Cs(l)
        ? ((n = ""),
          e != null && (n = e.replace(_s, "$&/") + "/"),
          Fr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Ni(l) &&
            (l = Wf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(_s, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Cs(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Kl(o, s);
      i += Fr(o, t, n, u, l);
    }
  else if (((u = Vf(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Kl(o, s++)), (i += Fr(o, t, n, u, l));
  else if (o === "object")
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
  return i;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Fr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Kf(e) {
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
var ce = { current: null },
  Ar = { transition: null },
  qf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Ar,
    ReactCurrentOwner: _i,
  };
function ra() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: wr,
  forEach: function (e, t, n) {
    wr(
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
      wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ni(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
j.Component = gn;
j.Fragment = Df;
j.Profiler = Ff;
j.PureComponent = xi;
j.StrictMode = Mf;
j.Suspense = Bf;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qf;
j.act = ra;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Yu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = _i.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      ea.call(t, u) &&
        !ta.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: Uf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Af, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = na;
j.createFactory = function (e) {
  var t = na.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: If, render: e };
};
j.isValidElement = Ni;
j.lazy = function (e) {
  return { $$typeof: $f, _payload: { _status: -1, _result: e }, _init: Kf };
};
j.memo = function (e, t) {
  return { $$typeof: Hf, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
j.unstable_act = ra;
j.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
j.useContext = function (e) {
  return ce.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
j.useId = function () {
  return ce.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return ce.current.useRef(e);
};
j.useState = function (e) {
  return ce.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return ce.current.useTransition();
};
j.version = "18.3.1";
Gu.exports = j;
var Ue = Gu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = Ue,
  Gf = Symbol.for("react.element"),
  Jf = Symbol.for("react.fragment"),
  Yf = Object.prototype.hasOwnProperty,
  Zf = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bf = { key: !0, ref: !0, __self: !0, __source: !0 };
function la(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Yf.call(t, r) && !bf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Gf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Zf.current,
  };
}
El.Fragment = Jf;
El.jsx = la;
El.jsxs = la;
Xu.exports = El;
var T = Xu.exports,
  oa = { exports: {} },
  Ce = {},
  ia = { exports: {} },
  sa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, L) {
    var z = R.length;
    R.push(L);
    e: for (; 0 < z; ) {
      var K = (z - 1) >>> 1,
        Z = R[K];
      if (0 < l(Z, L)) (R[K] = L), (R[z] = Z), (z = K);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var L = R[0],
      z = R.pop();
    if (z !== L) {
      R[0] = z;
      e: for (var K = 0, Z = R.length, gr = Z >>> 1; K < gr; ) {
        var _t = 2 * (K + 1) - 1,
          Ql = R[_t],
          Nt = _t + 1,
          vr = R[Nt];
        if (0 > l(Ql, z))
          Nt < Z && 0 > l(vr, Ql)
            ? ((R[K] = vr), (R[Nt] = z), (K = Nt))
            : ((R[K] = Ql), (R[_t] = z), (K = _t));
        else if (Nt < Z && 0 > l(vr, z)) (R[K] = vr), (R[Nt] = z), (K = Nt);
        else break e;
      }
    }
    return L;
  }
  function l(R, L) {
    var z = R.sortIndex - L.sortIndex;
    return z !== 0 ? z : R.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    a = [],
    d = 1,
    h = null,
    m = 3,
    w = !1,
    g = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(R) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= R)
        r(a), (L.sortIndex = L.expirationTime), t(u, L);
      else break;
      L = n(a);
    }
  }
  function S(R) {
    if (((v = !1), p(R), !g))
      if (n(u) !== null) (g = !0), Vl(E);
      else {
        var L = n(a);
        L !== null && Wl(S, L.startTime - R);
      }
  }
  function E(R, L) {
    (g = !1), v && ((v = !1), f(P), (P = -1)), (w = !0);
    var z = m;
    try {
      for (
        p(L), h = n(u);
        h !== null && (!(h.expirationTime > L) || (R && !je()));

      ) {
        var K = h.callback;
        if (typeof K == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Z = K(h.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(u) && r(u),
            p(L);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var gr = !0;
      else {
        var _t = n(a);
        _t !== null && Wl(S, _t.startTime - L), (gr = !1);
      }
      return gr;
    } finally {
      (h = null), (m = z), (w = !1);
    }
  }
  var C = !1,
    N = null,
    P = -1,
    B = 5,
    D = -1;
  function je() {
    return !(e.unstable_now() - D < B);
  }
  function En() {
    if (N !== null) {
      var R = e.unstable_now();
      D = R;
      var L = !0;
      try {
        L = N(!0, R);
      } finally {
        L ? xn() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var xn;
  if (typeof c == "function")
    xn = function () {
      c(En);
    };
  else if (typeof MessageChannel < "u") {
    var Es = new MessageChannel(),
      zf = Es.port2;
    (Es.port1.onmessage = En),
      (xn = function () {
        zf.postMessage(null);
      });
  } else
    xn = function () {
      x(En, 0);
    };
  function Vl(R) {
    (N = R), C || ((C = !0), xn());
  }
  function Wl(R, L) {
    P = x(function () {
      R(e.unstable_now());
    }, L);
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
      g || w || ((g = !0), Vl(E));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (R) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var z = m;
      m = L;
      try {
        return R();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, L) {
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
      var z = m;
      m = R;
      try {
        return L();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (R, L, z) {
      var K = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? K + z : K))
          : (z = K),
        R)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = z + Z),
        (R = {
          id: d++,
          callback: L,
          priorityLevel: R,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > K
          ? ((R.sortIndex = z),
            t(a, R),
            n(u) === null &&
              R === n(a) &&
              (v ? (f(P), (P = -1)) : (v = !0), Wl(S, z - K)))
          : ((R.sortIndex = Z), t(u, R), g || w || ((g = !0), Vl(E))),
        R
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (R) {
      var L = m;
      return function () {
        var z = m;
        m = L;
        try {
          return R.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(sa);
ia.exports = sa;
var ed = ia.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td = Ue,
  xe = ed;
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
var ua = new Set(),
  Kn = {};
function $t(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) ua.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xo = Object.prototype.hasOwnProperty,
  nd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ns = {},
  Rs = {};
function rd(e) {
  return xo.call(Rs, e)
    ? !0
    : xo.call(Ns, e)
      ? !1
      : nd.test(e)
        ? (Rs[e] = !0)
        : ((Ns[e] = !0), !1);
}
function ld(e, t, n, r) {
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
function od(e, t, n, r) {
  if (t === null || typeof t > "u" || ld(e, t, n, r)) return !0;
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
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ri = /[\-:]([a-z])/g;
function Pi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ri, Pi);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ri, Pi);
    re[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ri, Pi);
  re[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ti(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (od(t, n, l, r) && (n = null),
    r || l === null
      ? rd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  Oi = Symbol.for("react.strict_mode"),
  Co = Symbol.for("react.profiler"),
  aa = Symbol.for("react.provider"),
  ca = Symbol.for("react.context"),
  Li = Symbol.for("react.forward_ref"),
  _o = Symbol.for("react.suspense"),
  No = Symbol.for("react.suspense_list"),
  zi = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  fa = Symbol.for("react.offscreen"),
  Ps = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ps && e[Ps]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  ql;
function jn(e) {
  if (ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ql = (t && t[1]) || "";
    }
  return (
    `
` +
    ql +
    e
  );
}
var Xl = !1;
function Gl(e, t) {
  if (!e || Xl) return "";
  Xl = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Xl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jn(e) : "";
}
function id(e) {
  switch (e.tag) {
    case 5:
      return jn(e.type);
    case 16:
      return jn("Lazy");
    case 13:
      return jn("Suspense");
    case 19:
      return jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gl(e.type, !1)), e;
    case 11:
      return (e = Gl(e.type.render, !1)), e;
    case 1:
      return (e = Gl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ro(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case Co:
      return "Profiler";
    case Oi:
      return "StrictMode";
    case _o:
      return "Suspense";
    case No:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ca:
        return (e.displayName || "Context") + ".Consumer";
      case aa:
        return (e._context.displayName || "Context") + ".Provider";
      case Li:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zi:
        return (
          (t = e.displayName || null), t !== null ? t : Ro(e.type) || "Memo"
        );
      case it:
        (t = e._payload), (e = e._init);
        try {
          return Ro(e(t));
        } catch {}
    }
  return null;
}
function sd(e) {
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
      return Ro(t);
    case 8:
      return t === Oi ? "StrictMode" : "Mode";
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
function St(e) {
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
function da(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ud(e) {
  var t = da(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function kr(e) {
  e._valueTracker || (e._valueTracker = ud(e));
}
function pa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = da(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Po(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ts(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = St(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ha(e, t) {
  (t = t.checked), t != null && Ti(e, "checked", t, !1);
}
function To(e, t) {
  ha(e, t);
  var n = St(t.value),
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
    ? Oo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Oo(e, t.type, St(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Os(e, t, n) {
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
function Oo(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Lo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ls(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: St(n) };
}
function ma(e, t) {
  var n = St(t.value),
    r = St(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ya(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ya(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Er,
  ga = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
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
  ad = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (e) {
  ad.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
  });
});
function va(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
      ? ("" + t).trim()
      : t + "px";
}
function wa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = va(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var cd = W(
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
function jo(e, t) {
  if (t) {
    if (cd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Do(e, t) {
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
var Mo = null;
function ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fo = null,
  ln = null,
  on = null;
function js(e) {
  if ((e = pr(e))) {
    if (typeof Fo != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Rl(t)), Fo(e.stateNode, e.type, t));
  }
}
function Sa(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function ka() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), js(e), t)) for (e = 0; e < t.length; e++) js(t[e]);
  }
}
function Ea(e, t) {
  return e(t);
}
function xa() {}
var Jl = !1;
function Ca(e, t, n) {
  if (Jl) return e(t, n);
  Jl = !0;
  try {
    return Ea(e, t, n);
  } finally {
    (Jl = !1), (ln !== null || on !== null) && (xa(), ka());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rl(n);
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
var Ao = !1;
if (be)
  try {
    var _n = {};
    Object.defineProperty(_n, "passive", {
      get: function () {
        Ao = !0;
      },
    }),
      window.addEventListener("test", _n, _n),
      window.removeEventListener("test", _n, _n);
  } catch {
    Ao = !1;
  }
function fd(e, t, n, r, l, o, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Un = !1,
  Yr = null,
  Zr = !1,
  Uo = null,
  dd = {
    onError: function (e) {
      (Un = !0), (Yr = e);
    },
  };
function pd(e, t, n, r, l, o, i, s, u) {
  (Un = !1), (Yr = null), fd.apply(dd, arguments);
}
function hd(e, t, n, r, l, o, i, s, u) {
  if ((pd.apply(this, arguments), Un)) {
    if (Un) {
      var a = Yr;
      (Un = !1), (Yr = null);
    } else throw Error(k(198));
    Zr || ((Zr = !0), (Uo = a));
  }
}
function Vt(e) {
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
function _a(e) {
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
function Ds(e) {
  if (Vt(e) !== e) throw Error(k(188));
}
function md(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ds(l), e;
        if (o === r) return Ds(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Na(e) {
  return (e = md(e)), e !== null ? Ra(e) : null;
}
function Ra(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ra(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pa = xe.unstable_scheduleCallback,
  Ms = xe.unstable_cancelCallback,
  yd = xe.unstable_shouldYield,
  gd = xe.unstable_requestPaint,
  q = xe.unstable_now,
  vd = xe.unstable_getCurrentPriorityLevel,
  Di = xe.unstable_ImmediatePriority,
  Ta = xe.unstable_UserBlockingPriority,
  br = xe.unstable_NormalPriority,
  wd = xe.unstable_LowPriority,
  Oa = xe.unstable_IdlePriority,
  xl = null,
  Ke = null;
function Sd(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : xd,
  kd = Math.log,
  Ed = Math.LN2;
function xd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((kd(e) / Ed) | 0)) | 0;
}
var xr = 64,
  Cr = 4194304;
function Mn(e) {
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
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = Mn(s)) : ((o &= i), o !== 0 && (r = Mn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Mn(i)) : o !== 0 && (r = Mn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Cd(e, t) {
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
function _d(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ie(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? (!(s & n) || s & r) && (l[i] = Cd(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Io(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function La() {
  var e = xr;
  return (xr <<= 1), !(xr & 4194240) && (xr = 64), e;
}
function Yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Nd(e, t) {
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
    var l = 31 - Ie(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Mi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function za(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ja,
  Fi,
  Da,
  Ma,
  Fa,
  Bo = !1,
  _r = [],
  dt = null,
  pt = null,
  ht = null,
  Gn = new Map(),
  Jn = new Map(),
  ut = [],
  Rd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Fs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dt = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = pr(t)), t !== null && Fi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Pd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (dt = Nn(dt, e, t, n, r, l)), !0;
    case "dragenter":
      return (pt = Nn(pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ht = Nn(ht, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gn.set(o, Nn(Gn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Jn.set(o, Nn(Jn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Aa(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _a(n)), t !== null)) {
          (e.blockedOn = t),
            Fa(e.priority, function () {
              Da(n);
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
function Ur(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Mo = r), n.target.dispatchEvent(r), (Mo = null);
    } else return (t = pr(n)), t !== null && Fi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function As(e, t, n) {
  Ur(e) && n.delete(t);
}
function Td() {
  (Bo = !1),
    dt !== null && Ur(dt) && (dt = null),
    pt !== null && Ur(pt) && (pt = null),
    ht !== null && Ur(ht) && (ht = null),
    Gn.forEach(As),
    Jn.forEach(As);
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bo ||
      ((Bo = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Td)));
}
function Yn(e) {
  function t(l) {
    return Rn(l, e);
  }
  if (0 < _r.length) {
    Rn(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    dt !== null && Rn(dt, e),
      pt !== null && Rn(pt, e),
      ht !== null && Rn(ht, e),
      Gn.forEach(t),
      Jn.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    Aa(n), n.blockedOn === null && ut.shift();
}
var sn = rt.ReactCurrentBatchConfig,
  tl = !0;
function Od(e, t, n, r) {
  var l = F,
    o = sn.transition;
  sn.transition = null;
  try {
    (F = 1), Ai(e, t, n, r);
  } finally {
    (F = l), (sn.transition = o);
  }
}
function Ld(e, t, n, r) {
  var l = F,
    o = sn.transition;
  sn.transition = null;
  try {
    (F = 4), Ai(e, t, n, r);
  } finally {
    (F = l), (sn.transition = o);
  }
}
function Ai(e, t, n, r) {
  if (tl) {
    var l = Ho(e, t, n, r);
    if (l === null) so(e, t, r, nl, n), Fs(e, r);
    else if (Pd(l, e, t, n, r)) r.stopPropagation();
    else if ((Fs(e, r), t & 4 && -1 < Rd.indexOf(e))) {
      for (; l !== null; ) {
        var o = pr(l);
        if (
          (o !== null && ja(o),
          (o = Ho(e, t, n, r)),
          o === null && so(e, t, r, nl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else so(e, t, r, null, n);
  }
}
var nl = null;
function Ho(e, t, n, r) {
  if (((nl = null), (e = ji(r)), (e = Tt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _a(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nl = e), null;
}
function Ua(e) {
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
      switch (vd()) {
        case Di:
          return 1;
        case Ta:
          return 4;
        case br:
        case wd:
          return 16;
        case Oa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Ui = null,
  Ir = null;
function Ia() {
  if (Ir) return Ir;
  var e,
    t = Ui,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nr() {
  return !0;
}
function Us() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Nr
        : Us),
      (this.isPropagationStopped = Us),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nr));
      },
      persist: function () {},
      isPersistent: Nr,
    }),
    t
  );
}
var vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ii = _e(vn),
  dr = W({}, vn, { view: 0, detail: 0 }),
  zd = _e(dr),
  Zl,
  bl,
  Pn,
  Cl = W({}, dr, {
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
    getModifierState: Bi,
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
        : (e !== Pn &&
            (Pn && e.type === "mousemove"
              ? ((Zl = e.screenX - Pn.screenX), (bl = e.screenY - Pn.screenY))
              : (bl = Zl = 0),
            (Pn = e)),
          Zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bl;
    },
  }),
  Is = _e(Cl),
  jd = W({}, Cl, { dataTransfer: 0 }),
  Dd = _e(jd),
  Md = W({}, dr, { relatedTarget: 0 }),
  eo = _e(Md),
  Fd = W({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ad = _e(Fd),
  Ud = W({}, vn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Id = _e(Ud),
  Bd = W({}, vn, { data: 0 }),
  Bs = _e(Bd),
  Hd = {
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
  $d = {
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
  Vd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vd[e]) ? !!t[e] : !1;
}
function Bi() {
  return Wd;
}
var Qd = W({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = Hd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? $d[e.keyCode] || "Unidentified"
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
    getModifierState: Bi,
    charCode: function (e) {
      return e.type === "keypress" ? Br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Br(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Kd = _e(Qd),
  qd = W({}, Cl, {
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
  Hs = _e(qd),
  Xd = W({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bi,
  }),
  Gd = _e(Xd),
  Jd = W({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yd = _e(Jd),
  Zd = W({}, Cl, {
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
  bd = _e(Zd),
  ep = [9, 13, 27, 32],
  Hi = be && "CompositionEvent" in window,
  In = null;
be && "documentMode" in document && (In = document.documentMode);
var tp = be && "TextEvent" in window && !In,
  Ba = be && (!Hi || (In && 8 < In && 11 >= In)),
  $s = " ",
  Vs = !1;
function Ha(e, t) {
  switch (e) {
    case "keyup":
      return ep.indexOf(t.keyCode) !== -1;
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
function $a(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qt = !1;
function np(e, t) {
  switch (e) {
    case "compositionend":
      return $a(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vs = !0), $s);
    case "textInput":
      return (e = t.data), e === $s && Vs ? null : e;
    default:
      return null;
  }
}
function rp(e, t) {
  if (qt)
    return e === "compositionend" || (!Hi && Ha(e, t))
      ? ((e = Ia()), (Ir = Ui = ct = null), (qt = !1), e)
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
      return Ba && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lp = {
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
function Ws(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lp[e.type] : t === "textarea";
}
function Va(e, t, n, r) {
  Sa(r),
    (t = rl(t, "onChange")),
    0 < t.length &&
      ((n = new Ii("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Bn = null,
  Zn = null;
function op(e) {
  ec(e, 0);
}
function _l(e) {
  var t = Jt(e);
  if (pa(t)) return e;
}
function ip(e, t) {
  if (e === "change") return t;
}
var Wa = !1;
if (be) {
  var to;
  if (be) {
    var no = "oninput" in document;
    if (!no) {
      var Qs = document.createElement("div");
      Qs.setAttribute("oninput", "return;"),
        (no = typeof Qs.oninput == "function");
    }
    to = no;
  } else to = !1;
  Wa = to && (!document.documentMode || 9 < document.documentMode);
}
function Ks() {
  Bn && (Bn.detachEvent("onpropertychange", Qa), (Zn = Bn = null));
}
function Qa(e) {
  if (e.propertyName === "value" && _l(Zn)) {
    var t = [];
    Va(t, Zn, e, ji(e)), Ca(op, t);
  }
}
function sp(e, t, n) {
  e === "focusin"
    ? (Ks(), (Bn = t), (Zn = n), Bn.attachEvent("onpropertychange", Qa))
    : e === "focusout" && Ks();
}
function up(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _l(Zn);
}
function ap(e, t) {
  if (e === "click") return _l(t);
}
function cp(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function fp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : fp;
function bn(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!xo.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function qs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xs(e, t) {
  var n = qs(e);
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
    n = qs(n);
  }
}
function Ka(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ka(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function qa() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function $i(e) {
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
function dp(e) {
  var t = qa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ka(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && $i(n)) {
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
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Xs(n, o));
        var i = Xs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var pp = be && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  $o = null,
  Hn = null,
  Vo = !1;
function Gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vo ||
    Xt == null ||
    Xt !== Jr(r) ||
    ((r = Xt),
    "selectionStart" in r && $i(r)
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
    (Hn && bn(Hn, r)) ||
      ((Hn = r),
      (r = rl($o, "onSelect")),
      0 < r.length &&
        ((t = new Ii("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function Rr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gt = {
    animationend: Rr("Animation", "AnimationEnd"),
    animationiteration: Rr("Animation", "AnimationIteration"),
    animationstart: Rr("Animation", "AnimationStart"),
    transitionend: Rr("Transition", "TransitionEnd"),
  },
  ro = {},
  Xa = {};
be &&
  ((Xa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gt.animationend.animation,
    delete Gt.animationiteration.animation,
    delete Gt.animationstart.animation),
  "TransitionEvent" in window || delete Gt.transitionend.transition);
function Nl(e) {
  if (ro[e]) return ro[e];
  if (!Gt[e]) return e;
  var t = Gt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xa) return (ro[e] = t[n]);
  return e;
}
var Ga = Nl("animationend"),
  Ja = Nl("animationiteration"),
  Ya = Nl("animationstart"),
  Za = Nl("transitionend"),
  ba = new Map(),
  Js =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Et(e, t) {
  ba.set(e, t), $t(t, [e]);
}
for (var lo = 0; lo < Js.length; lo++) {
  var oo = Js[lo],
    hp = oo.toLowerCase(),
    mp = oo[0].toUpperCase() + oo.slice(1);
  Et(hp, "on" + mp);
}
Et(Ga, "onAnimationEnd");
Et(Ja, "onAnimationIteration");
Et(Ya, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Za, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
$t(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
$t(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
$t(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
$t(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Fn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  yp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function Ys(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hd(r, t, void 0, e), (e.currentTarget = null);
}
function ec(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          Ys(l, s, a), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          Ys(l, s, a), (o = u);
        }
    }
  }
  if (Zr) throw ((e = Uo), (Zr = !1), (Uo = null), e);
}
function U(e, t) {
  var n = t[Xo];
  n === void 0 && (n = t[Xo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (tc(t, e, 2, !1), n.add(r));
}
function io(e, t, n) {
  var r = 0;
  t && (r |= 4), tc(n, e, r, t);
}
var Pr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Pr]) {
    (e[Pr] = !0),
      ua.forEach(function (n) {
        n !== "selectionchange" && (yp.has(n) || io(n, !1, e), io(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pr] || ((t[Pr] = !0), io("selectionchange", !1, t));
  }
}
function tc(e, t, n, r) {
  switch (Ua(t)) {
    case 1:
      var l = Od;
      break;
    case 4:
      l = Ld;
      break;
    default:
      l = Ai;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ao ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function so(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Tt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ca(function () {
    var a = o,
      d = ji(n),
      h = [];
    e: {
      var m = ba.get(e);
      if (m !== void 0) {
        var w = Ii,
          g = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Kd;
            break;
          case "focusin":
            (g = "focus"), (w = eo);
            break;
          case "focusout":
            (g = "blur"), (w = eo);
            break;
          case "beforeblur":
          case "afterblur":
            w = eo;
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
            w = Is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Gd;
            break;
          case Ga:
          case Ja:
          case Ya:
            w = Ad;
            break;
          case Za:
            w = Yd;
            break;
          case "scroll":
            w = zd;
            break;
          case "wheel":
            w = bd;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Hs;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          f = v ? (m !== null ? m + "Capture" : null) : m;
        v = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var S = p.stateNode;
          if (
            (p.tag === 5 &&
              S !== null &&
              ((p = S),
              f !== null && ((S = Xn(c, f)), S != null && v.push(tr(c, S, p)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < v.length &&
          ((m = new w(m, g, null, n, d)), h.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Mo &&
            (g = n.relatedTarget || n.fromElement) &&
            (Tt(g) || g[et]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = a),
              (g = g ? Tt(g) : null),
              g !== null &&
                ((x = Vt(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = a)),
          w !== g)
        ) {
          if (
            ((v = Is),
            (S = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Hs),
              (S = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (x = w == null ? m : Jt(w)),
            (p = g == null ? m : Jt(g)),
            (m = new v(S, c + "leave", w, n, d)),
            (m.target = x),
            (m.relatedTarget = p),
            (S = null),
            Tt(d) === a &&
              ((v = new v(f, c + "enter", g, n, d)),
              (v.target = p),
              (v.relatedTarget = x),
              (S = v)),
            (x = S),
            w && g)
          )
            t: {
              for (v = w, f = g, c = 0, p = v; p; p = Wt(p)) c++;
              for (p = 0, S = f; S; S = Wt(S)) p++;
              for (; 0 < c - p; ) (v = Wt(v)), c--;
              for (; 0 < p - c; ) (f = Wt(f)), p--;
              for (; c--; ) {
                if (v === f || (f !== null && v === f.alternate)) break t;
                (v = Wt(v)), (f = Wt(f));
              }
              v = null;
            }
          else v = null;
          w !== null && Zs(h, m, w, v, !1),
            g !== null && x !== null && Zs(h, x, g, v, !0);
        }
      }
      e: {
        if (
          ((m = a ? Jt(a) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var E = ip;
        else if (Ws(m))
          if (Wa) E = cp;
          else {
            E = up;
            var C = sp;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = ap);
        if (E && (E = E(e, a))) {
          Va(h, E, n, d);
          break e;
        }
        C && C(e, m, a),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            Oo(m, "number", m.value);
      }
      switch (((C = a ? Jt(a) : window), e)) {
        case "focusin":
          (Ws(C) || C.contentEditable === "true") &&
            ((Xt = C), ($o = a), (Hn = null));
          break;
        case "focusout":
          Hn = $o = Xt = null;
          break;
        case "mousedown":
          Vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vo = !1), Gs(h, n, d);
          break;
        case "selectionchange":
          if (pp) break;
        case "keydown":
        case "keyup":
          Gs(h, n, d);
      }
      var N;
      if (Hi)
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
        qt
          ? Ha(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ba &&
          n.locale !== "ko" &&
          (qt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && qt && (N = Ia())
            : ((ct = d),
              (Ui = "value" in ct ? ct.value : ct.textContent),
              (qt = !0))),
        (C = rl(a, P)),
        0 < C.length &&
          ((P = new Bs(P, e, null, n, d)),
          h.push({ event: P, listeners: C }),
          N ? (P.data = N) : ((N = $a(n)), N !== null && (P.data = N)))),
        (N = tp ? np(e, n) : rp(e, n)) &&
          ((a = rl(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new Bs("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: a }),
            (d.data = N)));
    }
    ec(h, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Xn(e, n)),
      o != null && r.unshift(tr(e, o, l)),
      (o = Xn(e, t)),
      o != null && r.push(tr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      l
        ? ((u = Xn(n, o)), u != null && i.unshift(tr(n, u, s)))
        : l || ((u = Xn(n, o)), u != null && i.push(tr(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var gp = /\r\n?/g,
  vp = /\u0000|\uFFFD/g;
function bs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gp,
      `
`,
    )
    .replace(vp, "");
}
function Tr(e, t, n) {
  if (((t = bs(t)), bs(e) !== t && n)) throw Error(k(425));
}
function ll() {}
var Wo = null,
  Qo = null;
function Ko(e, t) {
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
var qo = typeof setTimeout == "function" ? setTimeout : void 0,
  wp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  eu = typeof Promise == "function" ? Promise : void 0,
  Sp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof eu < "u"
        ? function (e) {
            return eu.resolve(null).then(e).catch(kp);
          }
        : qo;
function kp(e) {
  setTimeout(function () {
    throw e;
  });
}
function uo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Yn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Yn(t);
}
function mt(e) {
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
function tu(e) {
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
var wn = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + wn,
  nr = "__reactProps$" + wn,
  et = "__reactContainer$" + wn,
  Xo = "__reactEvents$" + wn,
  Ep = "__reactListeners$" + wn,
  xp = "__reactHandles$" + wn;
function Tt(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = tu(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = tu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Qe] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Rl(e) {
  return e[nr] || null;
}
var Go = [],
  Yt = -1;
function xt(e) {
  return { current: e };
}
function I(e) {
  0 > Yt || ((e.current = Go[Yt]), (Go[Yt] = null), Yt--);
}
function A(e, t) {
  Yt++, (Go[Yt] = e.current), (e.current = t);
}
var kt = {},
  se = xt(kt),
  he = xt(!1),
  Ft = kt;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function ol() {
  I(he), I(se);
}
function nu(e, t, n) {
  if (se.current !== kt) throw Error(k(168));
  A(se, t), A(he, n);
}
function nc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, sd(e) || "Unknown", l));
  return W({}, n, r);
}
function il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kt),
    (Ft = se.current),
    A(se, e),
    A(he, he.current),
    !0
  );
}
function ru(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = nc(e, t, Ft)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(he),
      I(se),
      A(se, e))
    : I(he),
    A(he, n);
}
var Ge = null,
  Pl = !1,
  ao = !1;
function rc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function Cp(e) {
  (Pl = !0), rc(e);
}
function Ct() {
  if (!ao && Ge !== null) {
    ao = !0;
    var e = 0,
      t = F;
    try {
      var n = Ge;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (Pl = !1);
    } catch (l) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), Pa(Di, Ct), l);
    } finally {
      (F = t), (ao = !1);
    }
  }
  return null;
}
var Zt = [],
  bt = 0,
  sl = null,
  ul = 0,
  Ne = [],
  Re = 0,
  At = null,
  Je = 1,
  Ye = "";
function Rt(e, t) {
  (Zt[bt++] = ul), (Zt[bt++] = sl), (sl = e), (ul = t);
}
function lc(e, t, n) {
  (Ne[Re++] = Je), (Ne[Re++] = Ye), (Ne[Re++] = At), (At = e);
  var r = Je;
  e = Ye;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Je = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Ye = o + e);
  } else (Je = (1 << o) | (n << l) | r), (Ye = e);
}
function Vi(e) {
  e.return !== null && (Rt(e, 1), lc(e, 1, 0));
}
function Wi(e) {
  for (; e === sl; )
    (sl = Zt[--bt]), (Zt[bt] = null), (ul = Zt[--bt]), (Zt[bt] = null);
  for (; e === At; )
    (At = Ne[--Re]),
      (Ne[Re] = null),
      (Ye = Ne[--Re]),
      (Ne[Re] = null),
      (Je = Ne[--Re]),
      (Ne[Re] = null);
}
var ke = null,
  Se = null,
  H = !1,
  Ae = null;
function oc(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Se = mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = At !== null ? { id: Je, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Jo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (H) {
    var t = Se;
    if (t) {
      var n = t;
      if (!lu(e, t)) {
        if (Jo(e)) throw Error(k(418));
        t = mt(n.nextSibling);
        var r = ke;
        t && lu(e, t)
          ? oc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (ke = e));
      }
    } else {
      if (Jo(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (ke = e);
    }
  }
}
function ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function Or(e) {
  if (e !== ke) return !1;
  if (!H) return ou(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ko(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Jo(e)) throw (ic(), Error(k(418)));
    for (; t; ) oc(e, t), (t = mt(t.nextSibling));
  }
  if ((ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = ke ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function ic() {
  for (var e = Se; e; ) e = mt(e.nextSibling);
}
function dn() {
  (Se = ke = null), (H = !1);
}
function Qi(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
var _p = rt.ReactCurrentBatchConfig;
function Tn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Lr(e, t) {
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
function iu(e) {
  var t = e._init;
  return t(e._payload);
}
function sc(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = wt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, S) {
    return c === null || c.tag !== 6
      ? ((c = go(p, f.mode, S)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function u(f, c, p, S) {
    var E = p.type;
    return E === Kt
      ? d(f, c, p.props.children, S, p.key)
      : c !== null &&
          (c.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === it &&
              iu(E) === c.type))
        ? ((S = l(c, p.props)), (S.ref = Tn(f, c, p)), (S.return = f), S)
        : ((S = qr(p.type, p.key, p.props, null, f.mode, S)),
          (S.ref = Tn(f, c, p)),
          (S.return = f),
          S);
  }
  function a(f, c, p, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = vo(p, f.mode, S)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function d(f, c, p, S, E) {
    return c === null || c.tag !== 7
      ? ((c = Dt(p, f.mode, S, E)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = go("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Sr:
          return (
            (p = qr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Tn(f, null, c)),
            (p.return = f),
            p
          );
        case Qt:
          return (c = vo(c, f.mode, p)), (c.return = f), c;
        case it:
          var S = c._init;
          return h(f, S(c._payload), p);
      }
      if (Dn(c) || Cn(c))
        return (c = Dt(c, f.mode, p, null)), (c.return = f), c;
      Lr(f, c);
    }
    return null;
  }
  function m(f, c, p, S) {
    var E = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : s(f, c, "" + p, S);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          return p.key === E ? u(f, c, p, S) : null;
        case Qt:
          return p.key === E ? a(f, c, p, S) : null;
        case it:
          return (E = p._init), m(f, c, E(p._payload), S);
      }
      if (Dn(p) || Cn(p)) return E !== null ? null : d(f, c, p, S, null);
      Lr(f, p);
    }
    return null;
  }
  function w(f, c, p, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (f = f.get(p) || null), s(c, f, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Sr:
          return (f = f.get(S.key === null ? p : S.key) || null), u(c, f, S, E);
        case Qt:
          return (f = f.get(S.key === null ? p : S.key) || null), a(c, f, S, E);
        case it:
          var C = S._init;
          return w(f, c, p, C(S._payload), E);
      }
      if (Dn(S) || Cn(S)) return (f = f.get(p) || null), d(c, f, S, E, null);
      Lr(c, S);
    }
    return null;
  }
  function g(f, c, p, S) {
    for (
      var E = null, C = null, N = c, P = (c = 0), B = null;
      N !== null && P < p.length;
      P++
    ) {
      N.index > P ? ((B = N), (N = null)) : (B = N.sibling);
      var D = m(f, N, p[P], S);
      if (D === null) {
        N === null && (N = B);
        break;
      }
      e && N && D.alternate === null && t(f, N),
        (c = o(D, c, P)),
        C === null ? (E = D) : (C.sibling = D),
        (C = D),
        (N = B);
    }
    if (P === p.length) return n(f, N), H && Rt(f, P), E;
    if (N === null) {
      for (; P < p.length; P++)
        (N = h(f, p[P], S)),
          N !== null &&
            ((c = o(N, c, P)), C === null ? (E = N) : (C.sibling = N), (C = N));
      return H && Rt(f, P), E;
    }
    for (N = r(f, N); P < p.length; P++)
      (B = w(N, f, P, p[P], S)),
        B !== null &&
          (e && B.alternate !== null && N.delete(B.key === null ? P : B.key),
          (c = o(B, c, P)),
          C === null ? (E = B) : (C.sibling = B),
          (C = B));
    return (
      e &&
        N.forEach(function (je) {
          return t(f, je);
        }),
      H && Rt(f, P),
      E
    );
  }
  function v(f, c, p, S) {
    var E = Cn(p);
    if (typeof E != "function") throw Error(k(150));
    if (((p = E.call(p)), p == null)) throw Error(k(151));
    for (
      var C = (E = null), N = c, P = (c = 0), B = null, D = p.next();
      N !== null && !D.done;
      P++, D = p.next()
    ) {
      N.index > P ? ((B = N), (N = null)) : (B = N.sibling);
      var je = m(f, N, D.value, S);
      if (je === null) {
        N === null && (N = B);
        break;
      }
      e && N && je.alternate === null && t(f, N),
        (c = o(je, c, P)),
        C === null ? (E = je) : (C.sibling = je),
        (C = je),
        (N = B);
    }
    if (D.done) return n(f, N), H && Rt(f, P), E;
    if (N === null) {
      for (; !D.done; P++, D = p.next())
        (D = h(f, D.value, S)),
          D !== null &&
            ((c = o(D, c, P)), C === null ? (E = D) : (C.sibling = D), (C = D));
      return H && Rt(f, P), E;
    }
    for (N = r(f, N); !D.done; P++, D = p.next())
      (D = w(N, f, P, D.value, S)),
        D !== null &&
          (e && D.alternate !== null && N.delete(D.key === null ? P : D.key),
          (c = o(D, c, P)),
          C === null ? (E = D) : (C.sibling = D),
          (C = D));
    return (
      e &&
        N.forEach(function (En) {
          return t(f, En);
        }),
      H && Rt(f, P),
      E
    );
  }
  function x(f, c, p, S) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Kt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Sr:
          e: {
            for (var E = p.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (((E = p.type), E === Kt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (c = l(C, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === it &&
                    iu(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (c = l(C, p.props)),
                    (c.ref = Tn(f, C, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            p.type === Kt
              ? ((c = Dt(p.props.children, f.mode, S, p.key)),
                (c.return = f),
                (f = c))
              : ((S = qr(p.type, p.key, p.props, null, f.mode, S)),
                (S.ref = Tn(f, c, p)),
                (S.return = f),
                (f = S));
          }
          return i(f);
        case Qt:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = vo(p, f.mode, S)), (c.return = f), (f = c);
          }
          return i(f);
        case it:
          return (C = p._init), x(f, c, C(p._payload), S);
      }
      if (Dn(p)) return g(f, c, p, S);
      if (Cn(p)) return v(f, c, p, S);
      Lr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = go(p, f.mode, S)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return x;
}
var pn = sc(!0),
  uc = sc(!1),
  al = xt(null),
  cl = null,
  en = null,
  Ki = null;
function qi() {
  Ki = en = cl = null;
}
function Xi(e) {
  var t = al.current;
  I(al), (e._currentValue = t);
}
function Zo(e, t, n) {
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
function un(e, t) {
  (cl = e),
    (Ki = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if (Ki !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (cl === null) throw Error(k(308));
      (en = e), (cl.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var Ot = null;
function Gi(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function ac(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Gi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
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
var st = !1;
function Ji(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cc(e, t) {
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
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Gi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Hr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Mi(e, n);
  }
}
function su(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
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
function fl(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (o = a) : (i.next = a), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = a) : (s.next = a),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (d = a = u = null), (s = o);
    do {
      var m = s.lane,
        w = s.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            v = s;
          switch (((m = t), (w = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                h = g.call(w, h, m);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (m = typeof g == "function" ? g.call(w, h, m) : g),
                m == null)
              )
                break e;
              h = W({}, h, m);
              break e;
            case 2:
              st = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((a = d = w), (u = h)) : (d = d.next = w),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (It |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function uu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var hr = {},
  qe = xt(hr),
  rr = xt(hr),
  lr = xt(hr);
function Lt(e) {
  if (e === hr) throw Error(k(174));
  return e;
}
function Yi(e, t) {
  switch ((A(lr, t), A(rr, e), A(qe, hr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zo(t, e));
  }
  I(qe), A(qe, t);
}
function hn() {
  I(qe), I(rr), I(lr);
}
function fc(e) {
  Lt(lr.current);
  var t = Lt(qe.current),
    n = zo(t, e.type);
  t !== n && (A(rr, e), A(qe, n));
}
function Zi(e) {
  rr.current === e && (I(qe), I(rr));
}
var $ = xt(0);
function dl(e) {
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
var co = [];
function bi() {
  for (var e = 0; e < co.length; e++)
    co[e]._workInProgressVersionPrimary = null;
  co.length = 0;
}
var $r = rt.ReactCurrentDispatcher,
  fo = rt.ReactCurrentBatchConfig,
  Ut = 0,
  V = null,
  J = null,
  b = null,
  pl = !1,
  $n = !1,
  or = 0,
  Np = 0;
function le() {
  throw Error(k(321));
}
function es(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function ts(e, t, n, r, l, o) {
  if (
    ((Ut = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($r.current = e === null || e.memoizedState === null ? Op : Lp),
    (e = n(r, l)),
    $n)
  ) {
    o = 0;
    do {
      if ((($n = !1), (or = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (b = J = null),
        (t.updateQueue = null),
        ($r.current = zp),
        (e = n(r, l));
    } while ($n);
  }
  if (
    (($r.current = hl),
    (t = J !== null && J.next !== null),
    (Ut = 0),
    (b = J = V = null),
    (pl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function ns() {
  var e = or !== 0;
  return (or = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (V.memoizedState = b = e) : (b = b.next = e), b;
}
function Le() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = b === null ? V.memoizedState : b.next;
  if (t !== null) (b = t), (J = e);
  else {
    if (e === null) throw Error(k(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      b === null ? (V.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function po(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = o;
    do {
      var d = a.lane;
      if ((Ut & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (i = r)) : (u = u.next = h),
          (V.lanes |= d),
          (It |= d);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (i = r) : (u.next = s),
      He(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (V.lanes |= o), (It |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ho(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    He(o, t.memoizedState) || (pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function dc() {}
function pc(e, t) {
  var n = V,
    r = Le(),
    l = t(),
    o = !He(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    rs(yc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sr(9, mc.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(k(349));
    Ut & 30 || hc(n, t, l);
  }
  return l;
}
function hc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gc(t) && vc(e);
}
function yc(e, t, n) {
  return n(function () {
    gc(t) && vc(e);
  });
}
function gc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function vc(e) {
  var t = tt(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function au(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Tp.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wc() {
  return Le().memoizedState;
}
function Vr(e, t, n, r) {
  var l = We();
  (V.flags |= e),
    (l.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Tl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && es(r, i.deps))) {
      l.memoizedState = sr(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = sr(1 | t, n, o, r));
}
function cu(e, t) {
  return Vr(8390656, 8, e, t);
}
function rs(e, t) {
  return Tl(2048, 8, e, t);
}
function Sc(e, t) {
  return Tl(4, 2, e, t);
}
function kc(e, t) {
  return Tl(4, 4, e, t);
}
function Ec(e, t) {
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
function xc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Tl(4, 4, Ec.bind(null, t, e), n)
  );
}
function ls() {}
function Cc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && es(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _c(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && es(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nc(e, t, n) {
  return Ut & 21
    ? (He(n, t) || ((n = La()), (V.lanes |= n), (It |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Rp(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fo.transition;
  fo.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (fo.transition = r);
  }
}
function Rc() {
  return Le().memoizedState;
}
function Pp(e, t, n) {
  var r = vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pc(e))
  )
    Tc(t, n);
  else if (((n = ac(e, t, n, r)), n !== null)) {
    var l = ae();
    Be(n, e, r, l), Oc(n, t, r);
  }
}
function Tp(e, t, n) {
  var r = vt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pc(e)) Tc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), He(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Gi(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ac(e, t, l, r)),
      n !== null && ((l = ae()), Be(n, e, r, l), Oc(n, t, r));
  }
}
function Pc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Tc(e, t) {
  $n = pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Oc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Mi(e, n);
  }
}
var hl = {
    readContext: Oe,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Op = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vr(4194308, 4, Ec.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
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
        (e = e.dispatch = Pp.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: au,
    useDebugValue: ls,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = au(!1),
        t = e[0];
      return (e = Rp.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = We();
      if (H) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(k(349));
        Ut & 30 || hc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        cu(yc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        sr(9, mc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = ee.identifierPrefix;
      if (H) {
        var n = Ye,
          r = Je;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Np++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lp = {
    readContext: Oe,
    useCallback: Cc,
    useContext: Oe,
    useEffect: rs,
    useImperativeHandle: xc,
    useInsertionEffect: Sc,
    useLayoutEffect: kc,
    useMemo: _c,
    useReducer: po,
    useRef: wc,
    useState: function () {
      return po(ir);
    },
    useDebugValue: ls,
    useDeferredValue: function (e) {
      var t = Le();
      return Nc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = po(ir)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: dc,
    useSyncExternalStore: pc,
    useId: Rc,
    unstable_isNewReconciler: !1,
  },
  zp = {
    readContext: Oe,
    useCallback: Cc,
    useContext: Oe,
    useEffect: rs,
    useImperativeHandle: xc,
    useInsertionEffect: Sc,
    useLayoutEffect: kc,
    useMemo: _c,
    useReducer: ho,
    useRef: wc,
    useState: function () {
      return ho(ir);
    },
    useDebugValue: ls,
    useDeferredValue: function (e) {
      var t = Le();
      return J === null ? (t.memoizedState = e) : Nc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = ho(ir)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: dc,
    useSyncExternalStore: pc,
    useId: Rc,
    unstable_isNewReconciler: !1,
  };
function Me(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function bo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = vt(e),
      o = Ze(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, l)),
      t !== null && (Be(t, e, l, r), Hr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = vt(e),
      o = Ze(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, l)),
      t !== null && (Be(t, e, l, r), Hr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = vt(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = yt(e, l, r)),
      t !== null && (Be(t, e, r, n), Hr(t, e, r));
  },
};
function fu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bn(n, r) || !bn(l, o)
        : !0
  );
}
function Lc(e, t, n) {
  var r = !1,
    l = kt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Oe(o))
      : ((l = me(t) ? Ft : se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? fn(e, l) : kt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function du(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function ei(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ji(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Oe(o))
    : ((o = me(t) ? Ft : se.current), (l.context = fn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (bo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
      fl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += id(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function mo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jp = typeof WeakMap == "function" ? WeakMap : Map;
function zc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yl || ((yl = !0), (fi = r)), ti(e, t);
    }),
    n
  );
}
function jc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ti(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ti(e, t),
          typeof r != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function pu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = qp.bind(null, e, t, n)), t.then(e, e));
}
function hu(e) {
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
function mu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Dp = rt.ReactCurrentOwner,
  pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? uc(t, null, n, r) : pn(t, e.child, n, r);
}
function yu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    un(t, l),
    (r = ts(e, t, n, r, o, l)),
    (n = ns()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (H && n && Vi(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function gu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ds(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Dc(e, t, o, r, l))
      : ((e = qr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref)
    )
      return nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Dc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bn(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), nt(e, t, l);
  }
  return ni(e, t, n, r, l);
}
function Mc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(nn, we),
        (we |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(nn, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        A(nn, we),
        (we |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(nn, we),
      (we |= r);
  return ue(e, t, l, n), t.child;
}
function Fc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ni(e, t, n, r, l) {
  var o = me(n) ? Ft : se.current;
  return (
    (o = fn(t, o)),
    un(t, l),
    (n = ts(e, t, n, r, o, l)),
    (r = ns()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (H && r && Vi(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function vu(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    il(t);
  } else o = !1;
  if ((un(t, l), t.stateNode === null))
    Wr(e, t), Lc(t, n, r), ei(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Oe(a))
      : ((a = me(n) ? Ft : se.current), (a = fn(t, a)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && du(t, i, r, a)),
      (st = !1);
    var m = t.memoizedState;
    (i.state = m),
      fl(t, r, i, l),
      (u = t.memoizedState),
      s !== r || m !== u || he.current || st
        ? (typeof d == "function" && (bo(t, n, d, r), (u = t.memoizedState)),
          (s = st || fu(t, n, s, r, m, u, a))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      cc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Me(t.type, s)),
      (i.props = a),
      (h = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Oe(u))
        : ((u = me(n) ? Ft : se.current), (u = fn(t, u)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== h || m !== u) && du(t, i, r, u)),
      (st = !1),
      (m = t.memoizedState),
      (i.state = m),
      fl(t, r, i, l);
    var g = t.memoizedState;
    s !== h || m !== g || he.current || st
      ? (typeof w == "function" && (bo(t, n, w, r), (g = t.memoizedState)),
        (a = st || fu(t, n, a, r, m, g, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ri(e, t, n, r, o, l);
}
function ri(e, t, n, r, l, o) {
  Fc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ru(t, n, !1), nt(e, t, o);
  (r = t.stateNode), (Dp.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = pn(t, e.child, null, o)), (t.child = pn(t, null, s, o)))
      : ue(e, t, s, o),
    (t.memoizedState = r.state),
    l && ru(t, n, !0),
    t.child
  );
}
function Ac(e) {
  var t = e.stateNode;
  t.pendingContext
    ? nu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nu(e, t.context, !1),
    Yi(e, t.containerInfo);
}
function wu(e, t, n, r, l) {
  return dn(), Qi(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var li = { dehydrated: null, treeContext: null, retryLane: 0 };
function oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uc(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A($, l & 1),
    e === null)
  )
    return (
      Yo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = jl(i, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = oi(n)),
              (t.memoizedState = li),
              e)
            : os(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Mp(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = wt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = wt(s, o)) : ((o = Dt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? oi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = li),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = wt(o, { mode: "visible", children: r.children })),
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
function os(e, t) {
  return (
    (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zr(e, t, n, r) {
  return (
    r !== null && Qi(r),
    pn(t, e.child, null, n),
    (e = os(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Mp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mo(Error(k(422)))), zr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = jl({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Dt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && pn(t, e.child, null, i),
          (t.child.memoizedState = oi(i)),
          (t.memoizedState = li),
          o);
  if (!(t.mode & 1)) return zr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(k(419))), (r = mo(o, r, void 0)), zr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), pe || s)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), tt(e, l), Be(r, e, l, -1));
    }
    return fs(), (r = mo(Error(k(421)))), zr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Xp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Se = mt(l.nextSibling)),
      (ke = t),
      (H = !0),
      (Ae = null),
      e !== null &&
        ((Ne[Re++] = Je),
        (Ne[Re++] = Ye),
        (Ne[Re++] = At),
        (Je = e.id),
        (Ye = e.overflow),
        (At = t)),
      (t = os(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Su(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zo(e.return, t, n);
}
function yo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Ic(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Su(e, n, t);
        else if (e.tag === 19) Su(e, n, t);
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
  if ((A($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && dl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          yo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && dl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        yo(t, !0, n, null, o);
        break;
      case "together":
        yo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (It |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Fp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ac(t), dn();
      break;
    case 5:
      fc(t);
      break;
    case 1:
      me(t.type) && il(t);
      break;
    case 4:
      Yi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(al, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Uc(e, t, n)
            : (A($, $.current & 1),
              (e = nt(e, t, n)),
              e !== null ? e.sibling : null);
      A($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ic(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mc(e, t, n);
  }
  return nt(e, t, n);
}
var Bc, ii, Hc, $c;
Bc = function (e, t) {
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
ii = function () {};
Hc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Lt(qe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Po(e, l)), (r = Po(e, r)), (o = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Lo(e, l)), (r = Lo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ll);
    }
    jo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var s = l[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Kn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(a, "" + u)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (Kn.hasOwnProperty(a)
                  ? (u != null && a === "onScroll" && U("scroll", e),
                    o || s === u || (o = []))
                  : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
$c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!H)
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
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ap(e, t, n) {
  var r = t.pendingProps;
  switch ((Wi(t), t.tag)) {
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
      return oe(t), null;
    case 1:
      return me(t.type) && ol(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        I(he),
        I(se),
        bi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Or(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ae !== null && (hi(Ae), (Ae = null)))),
        ii(e, t),
        oe(t),
        null
      );
    case 5:
      Zi(t);
      var l = Lt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return oe(t), null;
        }
        if (((e = Lt(qe.current)), Or(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Qe] = t), (r[nr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Fn.length; l++) U(Fn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Ts(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Ls(r, o), U("invalid", r);
          }
          jo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Kn.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              kr(r), Os(r, o, !0);
              break;
            case "textarea":
              kr(r), zs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ll);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ya(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Qe] = t),
            (e[nr] = r),
            Bc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Do(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fn.length; l++) U(Fn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                Ts(e, r), (l = Po(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Ls(e, r), (l = Lo(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            jo(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? wa(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && ga(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && qn(e, u)
                        : typeof u == "number" && qn(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Kn.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && U("scroll", e)
                          : u != null && Ti(e, o, u, i));
              }
            switch (n) {
              case "input":
                kr(e), Os(e, r, !1);
                break;
              case "textarea":
                kr(e), zs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? rn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ll);
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
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) $c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Lt(lr.current)), Lt(qe.current), Or(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qe] = t),
            (o = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qe] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (I($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Se !== null && t.mode & 1 && !(t.flags & 128))
          ic(), dn(), (t.flags |= 98560), (o = !1);
        else if (((o = Or(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[Qe] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Ae !== null && (hi(Ae), (Ae = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? Y === 0 && (Y = 3) : fs())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        hn(), ii(e, t), e === null && er(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Xi(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && ol(), oe(t), null;
    case 19:
      if ((I($), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) On(o, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = dl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    On(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            q() > yn &&
            ((t.flags |= 128), (r = !0), On(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = dl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              On(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !H)
            )
              return oe(t), null;
          } else
            2 * q() - o.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), On(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = q()),
          (t.sibling = null),
          (n = $.current),
          A($, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        cs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Up(e, t) {
  switch ((Wi(t), t.tag)) {
    case 1:
      return (
        me(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        I(he),
        I(se),
        bi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Zi(t), null;
    case 13:
      if ((I($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I($), null;
    case 4:
      return hn(), null;
    case 10:
      return Xi(t.type._context), null;
    case 22:
    case 23:
      return cs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1,
  ie = !1,
  Ip = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function si(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ku = !1;
function Bp(e, t) {
  if (((Wo = tl), (e = qa()), $i(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            d = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (s = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === l && (s = i),
                m === o && ++d === r && (u = i),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qo = { focusedElem: e, selectionRange: n }, tl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
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
                  var v = g.memoizedProps,
                    x = g.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Me(t.type, v),
                      x,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(k(163));
            }
        } catch (S) {
          Q(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (g = ku), (ku = !1), g;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && si(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ll(e, t) {
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
function ui(e) {
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
function Vc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qe], delete t[nr], delete t[Xo], delete t[Ep], delete t[xp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Eu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wc(e.return)) return null;
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
function ai(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ai(e, t, n), e = e.sibling; e !== null; ) ai(e, t, n), (e = e.sibling);
}
function ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), (e = e.sibling);
}
var te = null,
  Fe = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), (n = n.sibling);
}
function Qc(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(xl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || tn(n, t);
    case 6:
      var r = te,
        l = Fe;
      (te = null),
        lt(e, t, n),
        (te = r),
        (Fe = l),
        te !== null &&
          (Fe
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Fe
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? uo(e.parentNode, n)
              : e.nodeType === 1 && uo(e, n),
            Yn(e))
          : uo(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = Fe),
        (te = n.stateNode.containerInfo),
        (Fe = !0),
        lt(e, t, n),
        (te = r),
        (Fe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && si(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Q(n, t, s);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), lt(e, t, n), (ie = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function xu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ip()),
      t.forEach(function (r) {
        var l = Gp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (te = s.stateNode), (Fe = !1);
              break e;
            case 3:
              (te = s.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (te = s.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(k(160));
        Qc(o, i, l), (te = null), (Fe = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (a) {
        Q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Kc(t, e), (t = t.sibling);
}
function Kc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Ve(e), r & 4)) {
        try {
          Vn(3, e, e.return), Ll(3, e);
        } catch (v) {
          Q(e, e.return, v);
        }
        try {
          Vn(5, e, e.return);
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 1:
      De(t, e), Ve(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Ve(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          qn(l, "");
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && ha(l, o),
              Do(s, i);
            var a = Do(s, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                h = u[i + 1];
              d === "style"
                ? wa(l, h)
                : d === "dangerouslySetInnerHTML"
                  ? ga(l, h)
                  : d === "children"
                    ? qn(l, h)
                    : Ti(l, d, h, a);
            }
            switch (s) {
              case "input":
                To(l, o);
                break;
              case "textarea":
                ma(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? rn(l, !!o.multiple, w, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? rn(l, !!o.multiple, o.defaultValue, !0)
                      : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (v) {
            Q(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((De(t, e), Ve(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yn(t.containerInfo);
        } catch (v) {
          Q(e, e.return, v);
        }
      break;
    case 4:
      De(t, e), Ve(e);
      break;
    case 13:
      De(t, e),
        Ve(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (us = q())),
        r & 4 && xu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || d), De(t, e), (ie = a)) : De(t, e),
        Ve(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (_ = e, d = e.child; d !== null; ) {
            for (h = _ = d; _ !== null; ) {
              switch (((m = _), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, m, m.return);
                  break;
                case 1:
                  tn(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      Q(r, n, v);
                    }
                  }
                  break;
                case 5:
                  tn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    _u(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (_ = w)) : _u(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = va("display", i)));
              } catch (v) {
                Q(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (v) {
                Q(e, e.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Ve(e), r & 4 && xu(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Ve(e);
  }
}
function Ve(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (qn(l, ""), (r.flags &= -33));
          var o = Eu(e);
          ci(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Eu(e);
          ai(e, s, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      Q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hp(e, t, n) {
  (_ = e), qc(e);
}
function qc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || jr;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ie;
        s = jr;
        var a = ie;
        if (((jr = i), (ie = u) && !a))
          for (_ = l; _ !== null; )
            (i = _),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Nu(l)
                : u !== null
                  ? ((u.return = i), (_ = u))
                  : Nu(l);
        for (; o !== null; ) (_ = o), qc(o), (o = o.sibling);
        (_ = l), (jr = s), (ie = a);
      }
      Cu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Cu(e);
  }
}
function Cu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Ll(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && uu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && Yn(h);
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
        ie || (t.flags & 512 && ui(t));
      } catch (m) {
        Q(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function _u(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Nu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ll(4, t);
          } catch (u) {
            Q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Q(t, l, u);
            }
          }
          var o = t.return;
          try {
            ui(t);
          } catch (u) {
            Q(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ui(t);
          } catch (u) {
            Q(t, i, u);
          }
      }
    } catch (u) {
      Q(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var $p = Math.ceil,
  ml = rt.ReactCurrentDispatcher,
  is = rt.ReactCurrentOwner,
  Te = rt.ReactCurrentBatchConfig,
  M = 0,
  ee = null,
  X = null,
  ne = 0,
  we = 0,
  nn = xt(0),
  Y = 0,
  ur = null,
  It = 0,
  zl = 0,
  ss = 0,
  Wn = null,
  de = null,
  us = 0,
  yn = 1 / 0,
  Xe = null,
  yl = !1,
  fi = null,
  gt = null,
  Dr = !1,
  ft = null,
  gl = 0,
  Qn = 0,
  di = null,
  Qr = -1,
  Kr = 0;
function ae() {
  return M & 6 ? q() : Qr !== -1 ? Qr : (Qr = q());
}
function vt(e) {
  return e.mode & 1
    ? M & 2 && ne !== 0
      ? ne & -ne
      : _p.transition !== null
        ? (Kr === 0 && (Kr = La()), Kr)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ua(e.type))),
          e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (di = null), Error(k(185)));
  fr(e, n, r),
    (!(M & 2) || e !== ee) &&
      (e === ee && (!(M & 2) && (zl |= n), Y === 4 && at(e, ne)),
      ye(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((yn = q() + 500), Pl && Ct()));
}
function ye(e, t) {
  var n = e.callbackNode;
  _d(e, t);
  var r = el(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && Ms(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ms(n), t === 1))
      e.tag === 0 ? Cp(Ru.bind(null, e)) : rc(Ru.bind(null, e)),
        Sp(function () {
          !(M & 6) && Ct();
        }),
        (n = null);
    else {
      switch (za(r)) {
        case 1:
          n = Di;
          break;
        case 4:
          n = Ta;
          break;
        case 16:
          n = br;
          break;
        case 536870912:
          n = Oa;
          break;
        default:
          n = br;
      }
      n = tf(n, Xc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xc(e, t) {
  if (((Qr = -1), (Kr = 0), M & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = el(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = Jc();
    (ee !== e || ne !== t) && ((Xe = null), (yn = q() + 500), jt(e, t));
    do
      try {
        Qp();
        break;
      } catch (s) {
        Gc(e, s);
      }
    while (!0);
    qi(),
      (ml.current = o),
      (M = l),
      X !== null ? (t = 0) : ((ee = null), (ne = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Io(e)), l !== 0 && ((r = l), (t = pi(e, l)))), t === 1)
    )
      throw ((n = ur), jt(e, 0), at(e, r), ye(e, q()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Vp(l) &&
          ((t = vl(e, r)),
          t === 2 && ((o = Io(e)), o !== 0 && ((r = o), (t = pi(e, o)))),
          t === 1))
      )
        throw ((n = ur), jt(e, 0), at(e, r), ye(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Pt(e, de, Xe);
          break;
        case 3:
          if (
            (at(e, r), (r & 130023424) === r && ((t = us + 500 - q()), 10 < t))
          ) {
            if (el(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = qo(Pt.bind(null, e, de, Xe), t);
            break;
          }
          Pt(e, de, Xe);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = q() - r),
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
                          : 1960 * $p(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qo(Pt.bind(null, e, de, Xe), r);
            break;
          }
          Pt(e, de, Xe);
          break;
        case 5:
          Pt(e, de, Xe);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ye(e, q()), e.callbackNode === n ? Xc.bind(null, e) : null;
}
function pi(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && hi(t)),
    e
  );
}
function hi(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function Vp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!He(o(), l)) return !1;
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
function at(e, t) {
  for (
    t &= ~ss,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ru(e) {
  if (M & 6) throw Error(k(327));
  an();
  var t = el(e, 0);
  if (!(t & 1)) return ye(e, q()), null;
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Io(e);
    r !== 0 && ((t = r), (n = pi(e, r)));
  }
  if (n === 1) throw ((n = ur), jt(e, 0), at(e, t), ye(e, q()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pt(e, de, Xe),
    ye(e, q()),
    null
  );
}
function as(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((yn = q() + 500), Pl && Ct());
  }
}
function Bt(e) {
  ft !== null && ft.tag === 0 && !(M & 6) && an();
  var t = M;
  M |= 1;
  var n = Te.transition,
    r = F;
  try {
    if (((Te.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Te.transition = n), (M = t), !(M & 6) && Ct();
  }
}
function cs() {
  (we = nn.current), I(nn);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wp(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Wi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ol();
          break;
        case 3:
          hn(), I(he), I(se), bi();
          break;
        case 5:
          Zi(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          I($);
          break;
        case 19:
          I($);
          break;
        case 10:
          Xi(r.type._context);
          break;
        case 22:
        case 23:
          cs();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (X = e = wt(e.current, null)),
    (ne = we = t),
    (Y = 0),
    (ur = null),
    (ss = zl = It = 0),
    (de = Wn = null),
    Ot !== null)
  ) {
    for (t = 0; t < Ot.length; t++)
      if (((n = Ot[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ot = null;
  }
  return e;
}
function Gc(e, t) {
  do {
    var n = X;
    try {
      if ((qi(), ($r.current = hl), pl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        pl = !1;
      }
      if (
        ((Ut = 0),
        (b = J = V = null),
        ($n = !1),
        (or = 0),
        (is.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (ur = t), (X = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = ne),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            d = s,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = hu(i);
          if (w !== null) {
            (w.flags &= -257),
              mu(w, i, s, o, t),
              w.mode & 1 && pu(o, a, t),
              (t = w),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              pu(o, a, t), fs();
              break e;
            }
            u = Error(k(426));
          }
        } else if (H && s.mode & 1) {
          var x = hu(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              mu(x, i, s, o, t),
              Qi(mn(u, s));
            break e;
          }
        }
        (o = u = mn(u, s)),
          Y !== 4 && (Y = 2),
          Wn === null ? (Wn = [o]) : Wn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = zc(o, u, t);
              su(o, f);
              break e;
            case 1:
              s = u;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (gt === null || !gt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = jc(o, s, t);
                su(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Zc(n);
    } catch (E) {
      (t = E), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jc() {
  var e = ml.current;
  return (ml.current = hl), e === null ? hl : e;
}
function fs() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    ee === null || (!(It & 268435455) && !(zl & 268435455)) || at(ee, ne);
}
function vl(e, t) {
  var n = M;
  M |= 2;
  var r = Jc();
  (ee !== e || ne !== t) && ((Xe = null), jt(e, t));
  do
    try {
      Wp();
      break;
    } catch (l) {
      Gc(e, l);
    }
  while (!0);
  if ((qi(), (M = n), (ml.current = r), X !== null)) throw Error(k(261));
  return (ee = null), (ne = 0), Y;
}
function Wp() {
  for (; X !== null; ) Yc(X);
}
function Qp() {
  for (; X !== null && !yd(); ) Yc(X);
}
function Yc(e) {
  var t = ef(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? Zc(e) : (X = t),
    (is.current = null);
}
function Zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Up(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (X = null);
        return;
      }
    } else if (((n = Ap(n, t, we)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function Pt(e, t, n) {
  var r = F,
    l = Te.transition;
  try {
    (Te.transition = null), (F = 1), Kp(e, t, n, r);
  } finally {
    (Te.transition = l), (F = r);
  }
  return null;
}
function Kp(e, t, n, r) {
  do an();
  while (ft !== null);
  if (M & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Nd(e, o),
    e === ee && ((X = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      tf(br, function () {
        return an(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Te.transition), (Te.transition = null);
    var i = F;
    F = 1;
    var s = M;
    (M |= 4),
      (is.current = null),
      Bp(e, n),
      Kc(n, e),
      dp(Qo),
      (tl = !!Wo),
      (Qo = Wo = null),
      (e.current = n),
      Hp(n),
      gd(),
      (M = s),
      (F = i),
      (Te.transition = o);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (ft = e), (gl = l)),
    (o = e.pendingLanes),
    o === 0 && (gt = null),
    Sd(n.stateNode),
    ye(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (yl) throw ((yl = !1), (e = fi), (fi = null), e);
  return (
    gl & 1 && e.tag !== 0 && an(),
    (o = e.pendingLanes),
    o & 1 ? (e === di ? Qn++ : ((Qn = 0), (di = e))) : (Qn = 0),
    Ct(),
    null
  );
}
function an() {
  if (ft !== null) {
    var e = za(gl),
      t = Te.transition,
      n = F;
    try {
      if (((Te.transition = null), (F = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (gl = 0), M & 6)) throw Error(k(331));
        var l = M;
        for (M |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (_ = a; _ !== null; ) {
                  var d = _;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, d, o);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (_ = h);
                  else
                    for (; _ !== null; ) {
                      d = _;
                      var m = d.sibling,
                        w = d.return;
                      if ((Vc(d), d === a)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (_ = m);
                        break;
                      }
                      _ = w;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (_ = f);
                break e;
              }
              _ = o.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (_ = p);
          else
            e: for (i = c; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, s);
                  }
                } catch (E) {
                  Q(s, s.return, E);
                }
              if (s === i) {
                _ = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (_ = S);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((M = l), Ct(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(xl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Te.transition = t);
    }
  }
  return !1;
}
function Pu(e, t, n) {
  (t = mn(n, t)),
    (t = zc(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = ae()),
    e !== null && (fr(e, 1, t), ye(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Pu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gt === null || !gt.has(r)))
        ) {
          (e = mn(n, e)),
            (e = jc(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = ae()),
            t !== null && (fr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (Y === 4 || (Y === 3 && (ne & 130023424) === ne && 500 > q() - us)
        ? jt(e, 0)
        : (ss |= n)),
    ye(e, t);
}
function bc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cr), (Cr <<= 1), !(Cr & 130023424) && (Cr = 4194304))
      : (t = 1));
  var n = ae();
  (e = tt(e, t)), e !== null && (fr(e, t, n), ye(e, n));
}
function Xp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bc(e, n);
}
function Gp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), bc(e, n);
}
var ef;
ef = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), Fp(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), H && t.flags & 1048576 && lc(t, ul, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wr(e, t), (e = t.pendingProps);
      var l = fn(t, se.current);
      un(t, n), (l = ts(null, t, r, e, l, n));
      var o = ns();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), il(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ji(t),
            (l.updater = Ol),
            (t.stateNode = l),
            (l._reactInternals = t),
            ei(t, r, e, n),
            (t = ri(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && Vi(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Yp(r)),
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = ni(null, t, r, e, n);
            break e;
          case 1:
            t = vu(null, t, r, e, n);
            break e;
          case 11:
            t = yu(null, t, r, e, n);
            break e;
          case 14:
            t = gu(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        ni(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        vu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ac(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          cc(e, t),
          fl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = mn(Error(k(423)), t)), (t = wu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mn(Error(k(424)), t)), (t = wu(e, t, r, n, l));
            break e;
          } else
            for (
              Se = mt(t.stateNode.containerInfo.firstChild),
                ke = t,
                H = !0,
                Ae = null,
                n = uc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), r === l)) {
            t = nt(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fc(t),
        e === null && Yo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ko(r, l) ? (i = null) : o !== null && Ko(r, o) && (t.flags |= 32),
        Fc(e, t),
        ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Yo(t), null;
    case 13:
      return Uc(e, t, n);
    case 4:
      return (
        Yi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        yu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          A(al, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (He(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ze(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Zo(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Zo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (l = Oe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        gu(e, t, r, l, n)
      );
    case 15:
      return Dc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Wr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), il(t)) : (e = !1),
        un(t, n),
        Lc(t, r, l),
        ei(t, r, l, n),
        ri(null, t, r, !0, e, n)
      );
    case 19:
      return Ic(e, t, n);
    case 22:
      return Mc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function tf(e, t) {
  return Pa(e, t);
}
function Jp(e, t, n, r) {
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
function Pe(e, t, n, r) {
  return new Jp(e, t, n, r);
}
function ds(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yp(e) {
  if (typeof e == "function") return ds(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Li)) return 11;
    if (e === zi) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
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
function qr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ds(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Kt:
        return Dt(n.children, l, o, t);
      case Oi:
        (i = 8), (l |= 8);
        break;
      case Co:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = Co), (e.lanes = o), e
        );
      case _o:
        return (e = Pe(13, n, t, l)), (e.elementType = _o), (e.lanes = o), e;
      case No:
        return (e = Pe(19, n, t, l)), (e.elementType = No), (e.lanes = o), e;
      case fa:
        return jl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case aa:
              i = 10;
              break e;
            case ca:
              i = 9;
              break e;
            case Li:
              i = 11;
              break e;
            case zi:
              i = 14;
              break e;
            case it:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Dt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = fa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function go(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function vo(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Zp(e, t, n, r, l) {
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
    (this.eventTimes = Yl(0)),
    (this.expirationTimes = Yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ps(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Zp(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Pe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ji(o),
    e
  );
}
function bp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nf(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
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
    if (me(n)) return nc(e, n, t);
  }
  return t;
}
function rf(e, t, n, r, l, o, i, s, u) {
  return (
    (e = ps(n, r, !0, e, l, o, i, s, u)),
    (e.context = nf(null)),
    (n = e.current),
    (r = ae()),
    (l = vt(n)),
    (o = Ze(r, l)),
    (o.callback = t ?? null),
    yt(n, o, l),
    (e.current.lanes = l),
    fr(e, l, r),
    ye(e, r),
    e
  );
}
function Dl(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = vt(l);
  return (
    (n = nf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yt(l, t, i)),
    e !== null && (Be(e, l, i, o), Hr(e, l, i)),
    i
  );
}
function wl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hs(e, t) {
  Tu(e, t), (e = e.alternate) && Tu(e, t);
}
function eh() {
  return null;
}
var lf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ms(e) {
  this._internalRoot = e;
}
Ml.prototype.render = ms.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Dl(e, t, null, null);
};
Ml.prototype.unmount = ms.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function () {
      Dl(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Ml(e) {
  this._internalRoot = e;
}
Ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ma();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && Aa(e);
  }
};
function ys(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ou() {}
function th(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = wl(i);
        o.call(a);
      };
    }
    var i = rf(t, r, e, 0, null, !1, !1, "", Ou);
    return (
      (e._reactRootContainer = i),
      (e[et] = i.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Bt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = wl(u);
      s.call(a);
    };
  }
  var u = ps(e, 0, !1, null, null, !1, !1, "", Ou);
  return (
    (e._reactRootContainer = u),
    (e[et] = u.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      Dl(t, u, n, r);
    }),
    u
  );
}
function Al(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = wl(i);
        s.call(u);
      };
    }
    Dl(t, i, e, l);
  } else i = th(n, t, e, l, r);
  return wl(i);
}
ja = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (Mi(t, n | 1), ye(t, q()), !(M & 6) && ((yn = q() + 500), Ct()));
      }
      break;
    case 13:
      Bt(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var l = ae();
          Be(r, e, 1, l);
        }
      }),
        hs(e, 1);
  }
};
Fi = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = ae();
      Be(t, e, 134217728, n);
    }
    hs(e, 134217728);
  }
};
Da = function (e) {
  if (e.tag === 13) {
    var t = vt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = ae();
      Be(n, e, t, r);
    }
    hs(e, t);
  }
};
Ma = function () {
  return F;
};
Fa = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
Fo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((To(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Rl(r);
            if (!l) throw Error(k(90));
            pa(r), To(r, l);
          }
        }
      }
      break;
    case "textarea":
      ma(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
Ea = as;
xa = Bt;
var nh = { usingClientEntryPoint: !1, Events: [pr, Jt, Rl, Sa, ka, as] },
  Ln = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  rh = {
    bundleType: Ln.bundleType,
    version: Ln.version,
    rendererPackageName: Ln.rendererPackageName,
    rendererConfig: Ln.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Na(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ln.findFiberByHostInstance || eh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mr.isDisabled && Mr.supportsFiber)
    try {
      (xl = Mr.inject(rh)), (Ke = Mr);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nh;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ys(t)) throw Error(k(200));
  return bp(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!ys(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = lf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ps(e, 1, !1, null, null, n, !1, r, l)),
    (e[et] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new ms(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Na(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Bt(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Fl(t)) throw Error(k(200));
  return Al(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!ys(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = lf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = rf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[et] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ml(t);
};
Ce.render = function (e, t, n) {
  if (!Fl(t)) throw Error(k(200));
  return Al(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Fl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Bt(function () {
        Al(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = as;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Al(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function of() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(of);
    } catch (e) {
      console.error(e);
    }
}
of(), (oa.exports = Ce);
var lh = oa.exports,
  sf,
  Lu = lh;
(sf = Lu.createRoot), Lu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var oh = {
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
 */ const ih = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ze = (e, t) => {
    const n = Ue.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: s = "",
          children: u,
          ...a
        },
        d,
      ) =>
        Ue.createElement(
          "svg",
          {
            ref: d,
            ...oh,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${ih(e)}`, s].join(" "),
            ...a,
          },
          [
            ...t.map(([h, m]) => Ue.createElement(h, m)),
            ...(Array.isArray(u) ? u : [u]),
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
 */ const sh = ze("Briefcase", [
  [
    "rect",
    {
      width: "20",
      height: "14",
      x: "2",
      y: "7",
      rx: "2",
      ry: "2",
      key: "eto64e",
    },
  ],
  ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uh = ze("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ah = ze("Cpu", [
  [
    "rect",
    { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
  ],
  ["rect", { x: "9", y: "9", width: "6", height: "6", key: "o3kz5p" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ch = ze("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fh = ze("Earth", [
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
 */ const dh = ze("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ph = ze("Film", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hh = ze("Gamepad2", [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mh = ze("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mi = ze("Newspaper", [
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
      key: "7pis2x",
    },
  ],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yh = ze("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gh = ze("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]),
  zu = [
    {
      id: "world",
      name: "World News",
      feedUrl:
        "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/webfeed/rss/rss-world",
    },
    {
      id: "canada",
      name: "Canada",
      feedUrl:
          "https://api.rss2json.com/v1/api.json?rss_url=\thttps://www.cbc.ca/webfeed/rss/rss-canada",
    },
    {
      id: "politics",
      name: "Politics",
      feedUrl:
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/webfeed/rss/rss-politics",
    },
    {
      id: "business",
      name: "Business",
      feedUrl:
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/webfeed/rss/rss-business",
    },
    {
      id: "health",
      name: "Health",
      feedUrl:
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/webfeed/rss/rss-health",
    },
    {
      id: "arts",
      name: "Arts",
      feedUrl:
        "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/webfeed/rss/rss-arts",
    },
    {
      id: "technology",
      name: "Technology",
      feedUrl:
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/webfeed/rss/rss-technology",
    },
    {
      id: "indigenous",
      name: "Indigenous",
      feedUrl:
        "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/webfeed/rss/rss-Indigenous",
    },
    {
      id: "sports",
      name: "Sports",
      feedUrl:
        "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/webfeed/rss/rss-sports",
    },
  ];
function uf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: vh } = Object.prototype,
  { getPrototypeOf: gs } = Object,
  Ul = ((e) => (t) => {
    const n = vh.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  $e = (e) => ((e = e.toLowerCase()), (t) => Ul(t) === e),
  Il = (e) => (t) => typeof t === e,
  { isArray: Sn } = Array,
  ar = Il("undefined");
function wh(e) {
  return (
    e !== null &&
    !ar(e) &&
    e.constructor !== null &&
    !ar(e.constructor) &&
    Ee(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const af = $e("ArrayBuffer");
function Sh(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && af(e.buffer)),
    t
  );
}
const kh = Il("string"),
  Ee = Il("function"),
  cf = Il("number"),
  Bl = (e) => e !== null && typeof e == "object",
  Eh = (e) => e === !0 || e === !1,
  Xr = (e) => {
    if (Ul(e) !== "object") return !1;
    const t = gs(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  xh = $e("Date"),
  Ch = $e("File"),
  _h = $e("Blob"),
  Nh = $e("FileList"),
  Rh = (e) => Bl(e) && Ee(e.pipe),
  Ph = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ee(e.append) &&
          ((t = Ul(e)) === "formdata" ||
            (t === "object" &&
              Ee(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Th = $e("URLSearchParams"),
  [Oh, Lh, zh, jh] = ["ReadableStream", "Request", "Response", "Headers"].map(
    $e,
  ),
  Dh = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Sn(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let s;
    for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
  }
}
function ff(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const zt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  df = (e) => !ar(e) && e !== zt;
function yi() {
  const { caseless: e } = (df(this) && this) || {},
    t = {},
    n = (r, l) => {
      const o = (e && ff(t, l)) || l;
      Xr(t[o]) && Xr(r)
        ? (t[o] = yi(t[o], r))
        : Xr(r)
          ? (t[o] = yi({}, r))
          : Sn(r)
            ? (t[o] = r.slice())
            : (t[o] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && mr(arguments[r], n);
  return t;
}
const Mh = (e, t, n, { allOwnKeys: r } = {}) => (
    mr(
      t,
      (l, o) => {
        n && Ee(l) ? (e[o] = uf(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Fh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ah = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Uh = (e, t, n, r) => {
    let l, o, i;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
      e = n !== !1 && gs(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Ih = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Bh = (e) => {
    if (!e) return null;
    if (Sn(e)) return e;
    let t = e.length;
    if (!cf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Hh = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && gs(Uint8Array)),
  $h = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  Vh = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Wh = $e("HTMLFormElement"),
  Qh = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  ju = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Kh = $e("RegExp"),
  pf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    mr(n, (l, o) => {
      let i;
      (i = t(l, o, e)) !== !1 && (r[o] = i || l);
    }),
      Object.defineProperties(e, r);
  },
  qh = (e) => {
    pf(e, (t, n) => {
      if (Ee(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ee(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Xh = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return Sn(e) ? r(e) : r(String(e).split(t)), n;
  },
  Gh = () => {},
  Jh = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  wo = "abcdefghijklmnopqrstuvwxyz",
  Du = "0123456789",
  hf = { DIGIT: Du, ALPHA: wo, ALPHA_DIGIT: wo + wo.toUpperCase() + Du },
  Yh = (e = 16, t = hf.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Zh(e) {
  return !!(
    e &&
    Ee(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const bh = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Bl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const o = Sn(r) ? [] : {};
            return (
              mr(r, (i, s) => {
                const u = n(i, l + 1);
                !ar(u) && (o[s] = u);
              }),
              (t[l] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  em = $e("AsyncFunction"),
  tm = (e) => e && (Bl(e) || Ee(e)) && Ee(e.then) && Ee(e.catch),
  mf = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            zt.addEventListener(
              "message",
              ({ source: l, data: o }) => {
                l === zt && o === n && r.length && r.shift()();
              },
              !1,
            ),
            (l) => {
              r.push(l), zt.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ee(zt.postMessage),
  ),
  nm =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(zt)
      : (typeof process < "u" && process.nextTick) || mf,
  y = {
    isArray: Sn,
    isArrayBuffer: af,
    isBuffer: wh,
    isFormData: Ph,
    isArrayBufferView: Sh,
    isString: kh,
    isNumber: cf,
    isBoolean: Eh,
    isObject: Bl,
    isPlainObject: Xr,
    isReadableStream: Oh,
    isRequest: Lh,
    isResponse: zh,
    isHeaders: jh,
    isUndefined: ar,
    isDate: xh,
    isFile: Ch,
    isBlob: _h,
    isRegExp: Kh,
    isFunction: Ee,
    isStream: Rh,
    isURLSearchParams: Th,
    isTypedArray: Hh,
    isFileList: Nh,
    forEach: mr,
    merge: yi,
    extend: Mh,
    trim: Dh,
    stripBOM: Fh,
    inherits: Ah,
    toFlatObject: Uh,
    kindOf: Ul,
    kindOfTest: $e,
    endsWith: Ih,
    toArray: Bh,
    forEachEntry: $h,
    matchAll: Vh,
    isHTMLForm: Wh,
    hasOwnProperty: ju,
    hasOwnProp: ju,
    reduceDescriptors: pf,
    freezeMethods: qh,
    toObjectSet: Xh,
    toCamelCase: Qh,
    noop: Gh,
    toFiniteNumber: Jh,
    findKey: ff,
    global: zt,
    isContextDefined: df,
    ALPHABET: hf,
    generateString: Yh,
    isSpecCompliantForm: Zh,
    toJSONObject: bh,
    isAsyncFn: em,
    isThenable: tm,
    setImmediate: mf,
    asap: nm,
  };
function O(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
y.inherits(O, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const yf = O.prototype,
  gf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  gf[e] = { value: e };
});
Object.defineProperties(O, gf);
Object.defineProperty(yf, "isAxiosError", { value: !0 });
O.from = (e, t, n, r, l, o) => {
  const i = Object.create(yf);
  return (
    y.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError",
    ),
    O.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const rm = null;
function gi(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function vf(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mu(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = vf(l)), !n && o ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function lm(e) {
  return y.isArray(e) && !e.some(gi);
}
const om = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Hl(e, t, n) {
  if (!y.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = y.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, x) {
        return !y.isUndefined(x[v]);
      },
    ));
  const r = n.metaTokens,
    l = n.visitor || d,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && y.isSpecCompliantForm(t);
  if (!y.isFunction(l)) throw new TypeError("visitor must be a function");
  function a(g) {
    if (g === null) return "";
    if (y.isDate(g)) return g.toISOString();
    if (!u && y.isBlob(g))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(g) || y.isTypedArray(g)
      ? u && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function d(g, v, x) {
    let f = g;
    if (g && !x && typeof g == "object") {
      if (y.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (y.isArray(g) && lm(g)) ||
        ((y.isFileList(g) || y.endsWith(v, "[]")) && (f = y.toArray(g)))
      )
        return (
          (v = vf(v)),
          f.forEach(function (p, S) {
            !(y.isUndefined(p) || p === null) &&
              t.append(
                i === !0 ? Mu([v], S, o) : i === null ? v : v + "[]",
                a(p),
              );
          }),
          !1
        );
    }
    return gi(g) ? !0 : (t.append(Mu(x, v, o), a(g)), !1);
  }
  const h = [],
    m = Object.assign(om, {
      defaultVisitor: d,
      convertValue: a,
      isVisitable: gi,
    });
  function w(g, v) {
    if (!y.isUndefined(g)) {
      if (h.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      h.push(g),
        y.forEach(g, function (f, c) {
          (!(y.isUndefined(f) || f === null) &&
            l.call(t, f, y.isString(c) ? c.trim() : c, v, m)) === !0 &&
            w(f, v ? v.concat(c) : [c]);
        }),
        h.pop();
    }
  }
  if (!y.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function Fu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function vs(e, t) {
  (this._pairs = []), e && Hl(e, this, t);
}
const wf = vs.prototype;
wf.append = function (t, n) {
  this._pairs.push([t, n]);
};
wf.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Fu);
      }
    : Fu;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function im(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Sf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || im,
    l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = y.isURLSearchParams(t) ? t.toString() : new vs(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Au {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    y.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const kf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  sm = typeof URLSearchParams < "u" ? URLSearchParams : vs,
  um = typeof FormData < "u" ? FormData : null,
  am = typeof Blob < "u" ? Blob : null,
  cm = {
    isBrowser: !0,
    classes: { URLSearchParams: sm, FormData: um, Blob: am },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ws = typeof window < "u" && typeof document < "u",
  vi = (typeof navigator == "object" && navigator) || void 0,
  fm =
    ws &&
    (!vi || ["ReactNative", "NativeScript", "NS"].indexOf(vi.product) < 0),
  dm =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  pm = (ws && window.location.href) || "http://localhost",
  hm = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ws,
        hasStandardBrowserEnv: fm,
        hasStandardBrowserWebWorkerEnv: dm,
        navigator: vi,
        origin: pm,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ge = { ...hm, ...cm };
function mm(e, t) {
  return Hl(
    e,
    new ge.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return ge.isNode && y.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function ym(e) {
  return y
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function gm(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Ef(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && y.isArray(l) ? l.length : i),
      u
        ? (y.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !s)
        : ((!l[i] || !y.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && y.isArray(l[i]) && (l[i] = gm(l[i])),
          !s)
    );
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return (
      y.forEachEntry(e, (r, l) => {
        t(ym(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function vm(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const yr = {
  transitional: kf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        o = y.isObject(t);
      if ((o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return l ? JSON.stringify(Ef(t)) : t;
      if (
        y.isArrayBuffer(t) ||
        y.isBuffer(t) ||
        y.isStream(t) ||
        y.isFile(t) ||
        y.isBlob(t) ||
        y.isReadableStream(t)
      )
        return t;
      if (y.isArrayBufferView(t)) return t.buffer;
      if (y.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let s;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return mm(t, this.formSerializer).toString();
        if ((s = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Hl(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return o || l ? (n.setContentType("application/json", !1), vm(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || yr.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (y.isResponse(t) || y.isReadableStream(t)) return t;
      if (t && y.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError"
              ? O.from(s, O.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ge.classes.FormData, Blob: ge.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  yr.headers[e] = {};
});
const wm = y.toObjectSet([
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
  ]),
  Sm = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            (l = i.indexOf(":")),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && wm[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Uu = Symbol("internals");
function zn(e) {
  return e && String(e).trim().toLowerCase();
}
function Gr(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Gr) : String(e);
}
function km(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Em = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function So(e, t, n, r, l) {
  if (y.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!y.isString(t))) {
    if (y.isString(r)) return t.indexOf(r) !== -1;
    if (y.isRegExp(r)) return r.test(t);
  }
}
function xm(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Cm(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
class ve {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function o(s, u, a) {
      const d = zn(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const h = y.findKey(l, d);
      (!h || l[h] === void 0 || a === !0 || (a === void 0 && l[h] !== !1)) &&
        (l[h || u] = Gr(s));
    }
    const i = (s, u) => y.forEach(s, (a, d) => o(a, d, u));
    if (y.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (y.isString(t) && (t = t.trim()) && !Em(t)) i(Sm(t), n);
    else if (y.isHeaders(t)) for (const [s, u] of t.entries()) o(u, s, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = zn(t)), t)) {
      const r = y.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return km(l);
        if (y.isFunction(n)) return n.call(this, l, r);
        if (y.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = zn(t)), t)) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || So(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function o(i) {
      if (((i = zn(i)), i)) {
        const s = y.findKey(r, i);
        s && (!n || So(r, r[s], s, n)) && (delete r[s], (l = !0));
      }
    }
    return y.isArray(t) ? t.forEach(o) : o(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || So(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      y.forEach(this, (l, o) => {
        const i = y.findKey(r, o);
        if (i) {
          (n[i] = Gr(l)), delete n[o];
          return;
        }
        const s = t ? xm(o) : String(o).trim();
        s !== o && delete n[o], (n[s] = Gr(l)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      y.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && y.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[Uu] = this[Uu] = { accessors: {} }).accessors,
      l = this.prototype;
    function o(i) {
      const s = zn(i);
      r[s] || (Cm(l, i), (r[s] = !0));
    }
    return y.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ve.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
y.reduceDescriptors(ve.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
y.freezeMethods(ve);
function ko(e, t) {
  const n = this || yr,
    r = t || n,
    l = ve.from(r.headers);
  let o = r.data;
  return (
    y.forEach(e, function (s) {
      o = s.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function xf(e) {
  return !!(e && e.__CANCEL__);
}
function kn(e, t, n) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
y.inherits(kn, O, { __CANCEL__: !0 });
function Cf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new O(
          "Request failed with status code " + n.status,
          [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function _m(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Nm(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        d = r[o];
      i || (i = a), (n[l] = u), (r[l] = a);
      let h = o,
        m = 0;
      for (; h !== l; ) (m += n[h++]), (h = h % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), a - i < t)) return;
      const w = d && a - d;
      return w ? Math.round((m * 1e3) / w) : void 0;
    }
  );
}
function Rm(e, t) {
  let n = 0,
    r = 1e3 / t,
    l,
    o;
  const i = (a, d = Date.now()) => {
    (n = d), (l = null), o && (clearTimeout(o), (o = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const d = Date.now(),
        h = d - n;
      h >= r
        ? i(a, d)
        : ((l = a),
          o ||
            (o = setTimeout(() => {
              (o = null), i(l);
            }, r - h)));
    },
    () => l && i(l),
  ];
}
const Sl = (e, t, n = 3) => {
    let r = 0;
    const l = Nm(50, 250);
    return Rm((o) => {
      const i = o.loaded,
        s = o.lengthComputable ? o.total : void 0,
        u = i - r,
        a = l(u),
        d = i <= s;
      r = i;
      const h = {
        loaded: i,
        total: s,
        progress: s ? i / s : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && s && d ? (s - i) / a : void 0,
        event: o,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(h);
    }, n);
  },
  Iu = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Bu =
    (e) =>
    (...t) =>
      y.asap(() => e(...t)),
  Pm = ge.hasStandardBrowserEnv
    ? (function () {
        const t =
            ge.navigator && /(msie|trident)/i.test(ge.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function l(o) {
          let i = o;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = l(window.location.href)),
          function (i) {
            const s = y.isString(i) ? l(i) : i;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Tm = ge.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, l, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          y.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            y.isString(r) && i.push("path=" + r),
            y.isString(l) && i.push("domain=" + l),
            o === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Om(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Lm(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _f(e, t) {
  return e && !Om(t) ? Lm(e, t) : t;
}
const Hu = (e) => (e instanceof ve ? { ...e } : e);
function Ht(e, t) {
  t = t || {};
  const n = {};
  function r(a, d, h) {
    return y.isPlainObject(a) && y.isPlainObject(d)
      ? y.merge.call({ caseless: h }, a, d)
      : y.isPlainObject(d)
        ? y.merge({}, d)
        : y.isArray(d)
          ? d.slice()
          : d;
  }
  function l(a, d, h) {
    if (y.isUndefined(d)) {
      if (!y.isUndefined(a)) return r(void 0, a, h);
    } else return r(a, d, h);
  }
  function o(a, d) {
    if (!y.isUndefined(d)) return r(void 0, d);
  }
  function i(a, d) {
    if (y.isUndefined(d)) {
      if (!y.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, d);
  }
  function s(a, d, h) {
    if (h in t) return r(a, d);
    if (h in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (a, d) => l(Hu(a), Hu(d), !0),
  };
  return (
    y.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const h = u[d] || l,
        m = h(e[d], t[d], d);
      (y.isUndefined(m) && h !== s) || (n[d] = m);
    }),
    n
  );
}
const Nf = (e) => {
    const t = Ht({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: l,
      xsrfCookieName: o,
      headers: i,
      auth: s,
    } = t;
    (t.headers = i = ve.from(i)),
      (t.url = Sf(_f(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : ""),
            ),
        );
    let u;
    if (y.isFormData(n)) {
      if (ge.hasStandardBrowserEnv || ge.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((u = i.getContentType()) !== !1) {
        const [a, ...d] = u
          ? u
              .split(";")
              .map((h) => h.trim())
              .filter(Boolean)
          : [];
        i.setContentType([a || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      ge.hasStandardBrowserEnv &&
      (r && y.isFunction(r) && (r = r(t)), r || (r !== !1 && Pm(t.url)))
    ) {
      const a = l && o && Tm.read(o);
      a && i.set(l, a);
    }
    return t;
  },
  zm = typeof XMLHttpRequest < "u",
  jm =
    zm &&
    function (e) {
      return new Promise(function (n, r) {
        const l = Nf(e);
        let o = l.data;
        const i = ve.from(l.headers).normalize();
        let { responseType: s, onUploadProgress: u, onDownloadProgress: a } = l,
          d,
          h,
          m,
          w,
          g;
        function v() {
          w && w(),
            g && g(),
            l.cancelToken && l.cancelToken.unsubscribe(d),
            l.signal && l.signal.removeEventListener("abort", d);
        }
        let x = new XMLHttpRequest();
        x.open(l.method.toUpperCase(), l.url, !0), (x.timeout = l.timeout);
        function f() {
          if (!x) return;
          const p = ve.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders(),
            ),
            E = {
              data:
                !s || s === "text" || s === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: p,
              config: e,
              request: x,
            };
          Cf(
            function (N) {
              n(N), v();
            },
            function (N) {
              r(N), v();
            },
            E,
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = f)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(f);
            }),
          (x.onabort = function () {
            x &&
              (r(new O("Request aborted", O.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function () {
            r(new O("Network Error", O.ERR_NETWORK, e, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let S = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = l.transitional || kf;
            l.timeoutErrorMessage && (S = l.timeoutErrorMessage),
              r(
                new O(
                  S,
                  E.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
                  e,
                  x,
                ),
              ),
              (x = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in x &&
            y.forEach(i.toJSON(), function (S, E) {
              x.setRequestHeader(E, S);
            }),
          y.isUndefined(l.withCredentials) ||
            (x.withCredentials = !!l.withCredentials),
          s && s !== "json" && (x.responseType = l.responseType),
          a && (([m, g] = Sl(a, !0)), x.addEventListener("progress", m)),
          u &&
            x.upload &&
            (([h, w] = Sl(u)),
            x.upload.addEventListener("progress", h),
            x.upload.addEventListener("loadend", w)),
          (l.cancelToken || l.signal) &&
            ((d = (p) => {
              x &&
                (r(!p || p.type ? new kn(null, e, x) : p),
                x.abort(),
                (x = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(d),
            l.signal &&
              (l.signal.aborted ? d() : l.signal.addEventListener("abort", d)));
        const c = _m(l.url);
        if (c && ge.protocols.indexOf(c) === -1) {
          r(new O("Unsupported protocol " + c + ":", O.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(o || null);
      });
    },
  Dm = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        l;
      const o = function (a) {
        if (!l) {
          (l = !0), s();
          const d = a instanceof Error ? a : this.reason;
          r.abort(
            d instanceof O ? d : new kn(d instanceof Error ? d.message : d),
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new O(`timeout ${t} of ms exceeded`, O.ETIMEDOUT));
        }, t);
      const s = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((a) => {
            a.unsubscribe
              ? a.unsubscribe(o)
              : a.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener("abort", o));
      const { signal: u } = r;
      return (u.unsubscribe = () => y.asap(s)), u;
    }
  },
  Mm = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      l;
    for (; r < n; ) (l = r + t), yield e.slice(r, l), (r = l);
  },
  Fm = async function* (e, t) {
    for await (const n of Am(e)) yield* Mm(n, t);
  },
  Am = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  $u = (e, t, n, r) => {
    const l = Fm(e, t);
    let o = 0,
      i,
      s = (u) => {
        i || ((i = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: a, value: d } = await l.next();
            if (a) {
              s(), u.close();
              return;
            }
            let h = d.byteLength;
            if (n) {
              let m = (o += h);
              n(m);
            }
            u.enqueue(new Uint8Array(d));
          } catch (a) {
            throw (s(a), a);
          }
        },
        cancel(u) {
          return s(u), l.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  $l =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Rf = $l && typeof ReadableStream == "function",
  Um =
    $l &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Pf = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Im =
    Rf &&
    Pf(() => {
      let e = !1;
      const t = new Request(ge.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Vu = 64 * 1024,
  wi = Rf && Pf(() => y.isReadableStream(new Response("").body)),
  kl = { stream: wi && ((e) => e.body) };
$l &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !kl[t] &&
        (kl[t] = y.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new O(
                `Response type '${t}' is not supported`,
                O.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const Bm = async (e) => {
    if (e == null) return 0;
    if (y.isBlob(e)) return e.size;
    if (y.isSpecCompliantForm(e))
      return (
        await new Request(ge.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (y.isArrayBufferView(e) || y.isArrayBuffer(e)) return e.byteLength;
    if ((y.isURLSearchParams(e) && (e = e + ""), y.isString(e)))
      return (await Um(e)).byteLength;
  },
  Hm = async (e, t) => {
    const n = y.toFiniteNumber(e.getContentLength());
    return n ?? Bm(t);
  },
  $m =
    $l &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: l,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: a,
        headers: d,
        withCredentials: h = "same-origin",
        fetchOptions: m,
      } = Nf(e);
      a = a ? (a + "").toLowerCase() : "text";
      let w = Dm([l, o && o.toAbortSignal()], i),
        g;
      const v =
        w &&
        w.unsubscribe &&
        (() => {
          w.unsubscribe();
        });
      let x;
      try {
        if (
          u &&
          Im &&
          n !== "get" &&
          n !== "head" &&
          (x = await Hm(d, r)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
            C;
          if (
            (y.isFormData(r) &&
              (C = E.headers.get("content-type")) &&
              d.setContentType(C),
            E.body)
          ) {
            const [N, P] = Iu(x, Sl(Bu(u)));
            r = $u(E.body, Vu, N, P);
          }
        }
        y.isString(h) || (h = h ? "include" : "omit");
        const f = "credentials" in Request.prototype;
        g = new Request(t, {
          ...m,
          signal: w,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: f ? h : void 0,
        });
        let c = await fetch(g);
        const p = wi && (a === "stream" || a === "response");
        if (wi && (s || (p && v))) {
          const E = {};
          ["status", "statusText", "headers"].forEach((B) => {
            E[B] = c[B];
          });
          const C = y.toFiniteNumber(c.headers.get("content-length")),
            [N, P] = (s && Iu(C, Sl(Bu(s), !0))) || [];
          c = new Response(
            $u(c.body, Vu, N, () => {
              P && P(), v && v();
            }),
            E,
          );
        }
        a = a || "text";
        let S = await kl[y.findKey(kl, a) || "text"](c, e);
        return (
          !p && v && v(),
          await new Promise((E, C) => {
            Cf(E, C, {
              data: S,
              headers: ve.from(c.headers),
              status: c.status,
              statusText: c.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (f) {
        throw (
          (v && v(),
          f && f.name === "TypeError" && /fetch/i.test(f.message)
            ? Object.assign(new O("Network Error", O.ERR_NETWORK, e, g), {
                cause: f.cause || f,
              })
            : O.from(f, f && f.code, e, g))
        );
      }
    }),
  Si = { http: rm, xhr: jm, fetch: $m };
y.forEach(Si, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Wu = (e) => `- ${e}`,
  Vm = (e) => y.isFunction(e) || e === null || e === !1,
  Tf = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const l = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !Vm(n) && ((r = Si[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new O(`Unknown adapter '${i}'`);
        if (r) break;
        l[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(l).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Wu).join(`
`)
            : " " + Wu(o[0])
          : "as no adapter specified";
        throw new O(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: Si,
  };
function Eo(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new kn(null, e);
}
function Qu(e) {
  return (
    Eo(e),
    (e.headers = ve.from(e.headers)),
    (e.data = ko.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Tf.getAdapter(e.adapter || yr.adapter)(e).then(
      function (r) {
        return (
          Eo(e),
          (r.data = ko.call(e, e.transformResponse, r)),
          (r.headers = ve.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          xf(r) ||
            (Eo(e),
            r &&
              r.response &&
              ((r.response.data = ko.call(e, e.transformResponse, r.response)),
              (r.response.headers = ve.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Of = "1.7.7",
  Ss = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ss[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Ku = {};
Ss.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      "[Axios v" +
      Of +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, s) => {
    if (t === !1)
      throw new O(
        l(i, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED,
      );
    return (
      n &&
        !Ku[i] &&
        ((Ku[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(o, i, s) : !0
    );
  };
};
function Wm(e, t, n) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const s = e[o],
        u = s === void 0 || i(s, o, e);
      if (u !== !0)
        throw new O("option " + o + " must be " + u, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new O("Unknown option " + o, O.ERR_BAD_OPTION);
  }
}
const ki = { assertOptions: Wm, validators: Ss },
  ot = ki.validators;
class Mt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Au(), response: new Au() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let l;
        Error.captureStackTrace
          ? Error.captureStackTrace((l = {}))
          : (l = new Error());
        const o = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ht(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: o } = n;
    r !== void 0 &&
      ki.assertOptions(
        r,
        {
          silentJSONParsing: ot.transitional(ot.boolean),
          forcedJSONParsing: ot.transitional(ot.boolean),
          clarifyTimeoutError: ot.transitional(ot.boolean),
        },
        !1,
      ),
      l != null &&
        (y.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : ki.assertOptions(
              l,
              { encode: ot.function, serialize: ot.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && y.merge(o.common, o[n.method]);
    o &&
      y.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete o[g];
        },
      ),
      (n.headers = ve.concat(i, o));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((u = u && v.synchronous), s.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let d,
      h = 0,
      m;
    if (!u) {
      const g = [Qu.bind(this), void 0];
      for (
        g.unshift.apply(g, s),
          g.push.apply(g, a),
          m = g.length,
          d = Promise.resolve(n);
        h < m;

      )
        d = d.then(g[h++], g[h++]);
      return d;
    }
    m = s.length;
    let w = n;
    for (h = 0; h < m; ) {
      const g = s[h++],
        v = s[h++];
      try {
        w = g(w);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      d = Qu.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (h = 0, m = a.length; h < m; ) d = d.then(a[h++], a[h++]);
    return d;
  }
  getUri(t) {
    t = Ht(this.defaults, t);
    const n = _f(t.baseURL, t.url);
    return Sf(n, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function (t) {
  Mt.prototype[t] = function (n, r) {
    return this.request(
      Ht(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
y.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, s) {
      return this.request(
        Ht(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        }),
      );
    };
  }
  (Mt.prototype[t] = n()), (Mt.prototype[t + "Form"] = n(!0));
});
class ks {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((s) => {
          r.subscribe(s), (o = s);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, s) {
        r.reason || ((r.reason = new kn(o, i, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new ks(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
function Qm(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Km(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Ei = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ei).forEach(([e, t]) => {
  Ei[t] = e;
});
function Lf(e) {
  const t = new Mt(e),
    n = uf(Mt.prototype.request, t);
  return (
    y.extend(n, Mt.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return Lf(Ht(e, l));
    }),
    n
  );
}
const G = Lf(yr);
G.Axios = Mt;
G.CanceledError = kn;
G.CancelToken = ks;
G.isCancel = xf;
G.VERSION = Of;
G.toFormData = Hl;
G.AxiosError = O;
G.Cancel = G.CanceledError;
G.all = function (t) {
  return Promise.all(t);
};
G.spread = Qm;
G.isAxiosError = Km;
G.mergeConfig = Ht;
G.AxiosHeaders = ve;
G.formToJSON = (e) => Ef(y.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = Tf.getAdapter;
G.HttpStatusCode = Ei;
G.default = G;
const qm = (e) => {
    const t = {
      world:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      canada:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      politics:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      business:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      health:
          "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      arts:
          "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
      technology:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      indigenous:
          "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
      sports:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      general:
        "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80",
    };
    return t[e] || t.general;
  },
  Xm = (e) => {
    const [t, n] = Ue.useState([]),
      [r, l] = Ue.useState(!0),
      [o, i] = Ue.useState(null);
    return (
      Ue.useEffect(() => {
        (async () => {
          var u;
          try {
            l(!0);
            const a = await G.get(e),
              d =
                ((u = new URL(e).searchParams.get("rss_url")) == null
                  ? void 0
                  : u.split("/")[3]) || "general",
              h = a.data.items.map((m) => {
                let w = Gm(m);
                return (
                  (w = Jm(w)),
                  w || (w = qm(d)),
                  {
                    title: m.title,
                    link: m.link,
                    pubDate: m.pubDate,
                    content: m.content,
                    contentSnippet: m.description,
                    categories: m.categories || [],
                    creator: m.author || m.creator || "Unknown",
                    imageUrl: w,
                    isoDate: m.pubDate,
                  }
                );
              });
            n(h), i(null);
          } catch (a) {
            i(a instanceof Error ? a.message : "Failed to fetch news");
          } finally {
            l(!1);
          }
        })();
      }, [e]),
      { news: t, loading: r, error: o }
    );
  },
  Gm = (e) => {
    var n, r, l, o, i, s, u, a, d, h, m, w;
    return (
      [
        (r = (n = e.media) == null ? void 0 : n.content) == null
          ? void 0
          : r.url,
        (s =
          (i =
            (o = (l = e.media) == null ? void 0 : l.group) == null
              ? void 0
              : o["media:content"]) == null
            ? void 0
            : i[0]) == null
          ? void 0
          : s.url,
        (u = e.enclosure) == null ? void 0 : u.url,
        (a = e.enclosure) == null ? void 0 : a.link,
        (d = e.image) == null ? void 0 : d.url,
        (h = e.image) == null ? void 0 : h.link,
        e.thumbnail,
        (w = (m = e.media) == null ? void 0 : m.thumbnail) == null
          ? void 0
          : w.url,
        qu(e.content),
        qu(e.description),
      ].find((g) => g && Ym(g)) || null
    );
  },
  qu = (e) => {
    if (!e) return null;
    const t = e.match(/<img[^>]+src="([^">]+)"/);
    if (t) return t[1];
    const n = e.match(/data-orig-file="([^">]+)"/);
    return n ? n[1] : null;
  },
  Jm = (e) => {
    if (!e) return null;
    try {
      const t = new URL(e);
      return (
        ["utm_source", "utm_medium", "utm_campaign"].forEach((n) => {
          t.searchParams.delete(n);
        }),
        t.toString()
      );
    } catch {
      return e;
    }
  },
  Ym = (e) => {
    if (!e) return !1;
    const t = /\.(jpg|jpeg|png|gif|webp)($|\?)/i,
      n = [
        "images.unsplash.com",
        "i.imgur.com",
        "cdn.",
        "wp-content",
        "media.",
        "assets.",
        "images.",
      ];
    try {
      const r = new URL(e);
      return t.test(e) || n.some((l) => r.hostname.includes(l));
    } catch {
      return !1;
    }
  },
  Zm = (e) =>
    ({
      technology: T.jsx(ah, { className: "w-4 h-4" }),
      business: T.jsx(sh, { className: "w-4 h-4" }),
      science: T.jsx(mi, { className: "w-4 h-4" }),
      world: T.jsx(fh, { className: "w-4 h-4" }),
      entertainment: T.jsx(ph, { className: "w-4 h-4" }),
      sports: T.jsx(yh, { className: "w-4 h-4" }),
      health: T.jsx(mh, { className: "w-4 h-4" }),
      gaming: T.jsx(hh, { className: "w-4 h-4" }),
      finance: T.jsx(ch, { className: "w-4 h-4" }),
    })[e] || T.jsx(mi, { className: "w-4 h-4" }),
  bm = ({ categories: e, activeCategory: t, onCategoryChange: n }) =>
    T.jsx("div", {
      className: "flex space-x-2 overflow-x-auto pb-2 mb-6 scrollbar-hide",
      children: e.map((r) =>
        T.jsxs(
          "button",
          {
            onClick: () => n(r.id),
            className: `flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap
            ${t === r.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
            children: [Zm(r.id), T.jsx("span", { children: r.name })],
          },
          r.id,
        ),
      ),
    }),
  e0 = ({ news: e }) => {
    const t = new Date(e.pubDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return T.jsxs("article", {
      className:
        "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",
      children: [
        T.jsxs("div", {
          className: "relative h-48 w-full overflow-hidden bg-gray-100",
          children: [
            T.jsx("img", {
              src: e.imageUrl,
              alt: e.title,
              className:
                "w-full h-full object-cover transition-transform duration-300 hover:scale-105",
              loading: "lazy",
              onError: (n) => {
                const r = n.target;
                (r.onerror = null),
                  (r.src = getDefaultImageForCategory("general"));
              },
            }),
            T.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
            }),
          ],
        }),
        T.jsxs("div", {
          className: "p-6",
          children: [
            T.jsxs("div", {
              className: "flex justify-between items-start gap-4 mb-4",
              children: [
                T.jsx("h2", {
                  className:
                    "text-xl font-semibold text-gray-900 line-clamp-2 flex-1",
                  children: e.title,
                }),
                T.jsx("a", {
                  href: e.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-blue-600 hover:text-blue-800 flex-shrink-0 p-1 hover:bg-blue-50 rounded-full transition-colors",
                  children: T.jsx(dh, { className: "w-5 h-5" }),
                }),
              ],
            }),
            T.jsx("p", {
              className: "text-gray-600 mb-4 line-clamp-3",
              children: e.contentSnippet || e.content,
            }),
            T.jsxs("div", {
              className:
                "flex justify-between items-center text-sm text-gray-500",
              children: [
                T.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    T.jsx(gh, { className: "w-4 h-4" }),
                    T.jsx("span", { children: e.creator || "Unknown" }),
                  ],
                }),
                T.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    T.jsx(uh, { className: "w-4 h-4" }),
                    T.jsx("time", { dateTime: e.isoDate, children: t }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function t0() {
  var i;
  const [e, t] = Ue.useState("world"),
    n = ((i = zu.find((s) => s.id === e)) == null ? void 0 : i.feedUrl) || "",
    { news: r, loading: l, error: o } = Xm(n);
  return T.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      T.jsx("header", {
        className: "bg-white shadow-sm",
        children: T.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
          children: T.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [
              T.jsx(mi, { className: "w-8 h-8 text-blue-600" }),
              T.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "CBC News",
              }),
            ],
          }),
        }),
      }),
      T.jsxs("main", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: [
          T.jsx(bm, { categories: zu, activeCategory: e, onCategoryChange: t }),
          o &&
            T.jsx("div", {
              className:
                "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6",
              children: o,
            }),
          l
            ? T.jsx("div", {
                className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                children: [...Array(6)].map((s, u) =>
                  T.jsx(
                    "div",
                    {
                      className:
                        "bg-white rounded-xl shadow-lg h-96 animate-pulse",
                    },
                    u,
                  ),
                ),
              })
            : T.jsx("div", {
                className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                children: r.map((s, u) => T.jsx(e0, { news: s }, s.link + u)),
              }),
        ],
      }),
    ],
  });
}
sf(document.getElementById("root")).render(
  T.jsx(Ue.StrictMode, { children: T.jsx(t0, {}) }),
);
