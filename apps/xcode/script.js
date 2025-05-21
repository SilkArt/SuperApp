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
function Mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ds = { exports: {} },
  vl = {},
  ps = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for("react.element"),
  Rc = Symbol.for("react.portal"),
  Ic = Symbol.for("react.fragment"),
  Dc = Symbol.for("react.strict_mode"),
  Fc = Symbol.for("react.profiler"),
  $c = Symbol.for("react.provider"),
  Uc = Symbol.for("react.context"),
  Ac = Symbol.for("react.forward_ref"),
  Vc = Symbol.for("react.suspense"),
  Hc = Symbol.for("react.memo"),
  Bc = Symbol.for("react.lazy"),
  Zi = Symbol.iterator;
function Wc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zi && e[Zi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ms = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hs = Object.assign,
  vs = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vs),
    (this.updater = n || ms);
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
function gs() {}
gs.prototype = gn.prototype;
function ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vs),
    (this.updater = n || ms);
}
var ri = (ni.prototype = new gs());
ri.constructor = ni;
hs(ri, gn.prototype);
ri.isPureReactComponent = !0;
var Ji = Array.isArray,
  ys = Object.prototype.hasOwnProperty,
  li = { current: null },
  ws = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ss(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ys.call(t, r) && !ws.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ur,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: li.current,
  };
}
function Qc(e, t) {
  return {
    $$typeof: ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function oi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function Kc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qi = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Kc("" + e.key)
    : t.toString(36);
}
function Mr(e, t, n, r, l) {
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
          case ur:
          case Rc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Rl(i, 0) : r),
      Ji(l)
        ? ((n = ""),
          e != null && (n = e.replace(qi, "$&/") + "/"),
          Mr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (oi(l) &&
            (l = Qc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(qi, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ji(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Rl(o, u);
      i += Mr(o, t, n, s, l);
    }
  else if (((s = Wc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Rl(o, u++)), (i += Mr(o, t, n, s, l));
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
function mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Mr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Yc(e) {
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
var de = { current: null },
  Rr = { transition: null },
  Xc = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Rr,
    ReactCurrentOwner: li,
  };
function ks() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: mr,
  forEach: function (e, t, n) {
    mr(
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
      mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!oi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
D.Component = gn;
D.Fragment = Ic;
D.Profiler = Fc;
D.PureComponent = ni;
D.StrictMode = Dc;
D.Suspense = Vc;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xc;
D.act = ks;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = hs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = li.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ys.call(t, s) &&
        !ws.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Uc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $c, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = Ss;
D.createFactory = function (e) {
  var t = Ss.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Ac, render: e };
};
D.isValidElement = oi;
D.lazy = function (e) {
  return { $$typeof: Bc, _payload: { _status: -1, _result: e }, _init: Yc };
};
D.memo = function (e, t) {
  return { $$typeof: Hc, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
D.unstable_act = ks;
D.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
D.useContext = function (e) {
  return de.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
D.useId = function () {
  return de.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return de.current.useRef(e);
};
D.useState = function (e) {
  return de.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return de.current.useTransition();
};
D.version = "18.3.1";
ps.exports = D;
var O = ps.exports;
const nn = Mc(O);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gc = O,
  Zc = Symbol.for("react.element"),
  Jc = Symbol.for("react.fragment"),
  qc = Object.prototype.hasOwnProperty,
  bc = Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function xs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) qc.call(t, r) && !ef.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Zc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bc.current,
  };
}
vl.Fragment = Jc;
vl.jsx = xs;
vl.jsxs = xs;
ds.exports = vl;
var z = ds.exports,
  Es = { exports: {} },
  _e = {},
  Cs = { exports: {} },
  _s = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, L) {
    var R = C.length;
    C.push(L);
    e: for (; 0 < R; ) {
      var j = (R - 1) >>> 1,
        M = C[j];
      if (0 < l(M, L)) (C[j] = L), (C[R] = M), (R = j);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0],
      R = C.pop();
    if (R !== L) {
      C[0] = R;
      e: for (var j = 0, M = C.length, ee = M >>> 1; j < ee; ) {
        var we = 2 * (j + 1) - 1,
          Be = C[we],
          Pt = we + 1,
          pr = C[Pt];
        if (0 > l(Be, R))
          Pt < M && 0 > l(pr, Be)
            ? ((C[j] = pr), (C[Pt] = R), (j = Pt))
            : ((C[j] = Be), (C[we] = R), (j = we));
        else if (Pt < M && 0 > l(pr, R)) (C[j] = pr), (C[Pt] = R), (j = Pt);
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var R = C.sortIndex - L.sortIndex;
    return R !== 0 ? R : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    w = !1,
    k = !1,
    E = !1,
    U = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= C)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function v(C) {
    if (((E = !1), d(C), !k))
      if (n(s) !== null) (k = !0), A(y);
      else {
        var L = n(c);
        L !== null && Pe(v, L.startTime - C);
      }
  }
  function y(C, L) {
    (k = !1), E && ((E = !1), f(P), (P = -1)), (w = !0);
    var R = p;
    try {
      for (
        d(L), m = n(s);
        m !== null && (!(m.expirationTime > L) || (C && !b()));

      ) {
        var j = m.callback;
        if (typeof j == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var M = j(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof M == "function" ? (m.callback = M) : m === n(s) && r(s),
            d(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var ee = !0;
      else {
        var we = n(c);
        we !== null && Pe(v, we.startTime - L), (ee = !1);
      }
      return ee;
    } finally {
      (m = null), (p = R), (w = !1);
    }
  }
  var x = !1,
    S = null,
    P = -1,
    I = 5,
    N = -1;
  function b() {
    return !(e.unstable_now() - N < I);
  }
  function Ve() {
    if (S !== null) {
      var C = e.unstable_now();
      N = C;
      var L = !0;
      try {
        L = S(!0, C);
      } finally {
        L ? He() : ((x = !1), (S = null));
      }
    } else x = !1;
  }
  var He;
  if (typeof a == "function")
    He = function () {
      a(Ve);
    };
  else if (typeof MessageChannel < "u") {
    var ot = new MessageChannel(),
      T = ot.port2;
    (ot.port1.onmessage = Ve),
      (He = function () {
        T.postMessage(null);
      });
  } else
    He = function () {
      U(Ve, 0);
    };
  function A(C) {
    (S = C), x || ((x = !0), He());
  }
  function Pe(C, L) {
    P = U(function () {
      C(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), A(y));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = p;
      }
      var R = p;
      p = L;
      try {
        return C();
      } finally {
        p = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, L) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var R = p;
      p = C;
      try {
        return L();
      } finally {
        p = R;
      }
    }),
    (e.unstable_scheduleCallback = function (C, L, R) {
      var j = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? j + R : j))
          : (R = j),
        C)
      ) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return (
        (M = R + M),
        (C = {
          id: h++,
          callback: L,
          priorityLevel: C,
          startTime: R,
          expirationTime: M,
          sortIndex: -1,
        }),
        R > j
          ? ((C.sortIndex = R),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (E ? (f(P), (P = -1)) : (E = !0), Pe(v, R - j)))
          : ((C.sortIndex = M), t(s, C), k || w || ((k = !0), A(y))),
        C
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (C) {
      var L = p;
      return function () {
        var R = p;
        p = L;
        try {
          return C.apply(this, arguments);
        } finally {
          p = R;
        }
      };
    });
})(_s);
Cs.exports = _s;
var tf = Cs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf = O,
  Ce = tf;
function g(e) {
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
var Ns = new Set(),
  Bn = {};
function At(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Bn[e] = t, e = 0; e < t.length; e++) Ns.add(t[e]);
}
var et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ao = Object.prototype.hasOwnProperty,
  rf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bi = {},
  eu = {};
function lf(e) {
  return ao.call(eu, e)
    ? !0
    : ao.call(bi, e)
      ? !1
      : rf.test(e)
        ? (eu[e] = !0)
        : ((bi[e] = !0), !1);
}
function of(e, t, n, r) {
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
function uf(e, t, n, r) {
  if (t === null || typeof t > "u" || of(e, t, n, r)) return !0;
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
function pe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ii = /[\-:]([a-z])/g;
function ui(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ii, ui);
    oe[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ii, ui);
    oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ii, ui);
  oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function si(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (uf(t, n, l, r) && (n = null),
    r || l === null
      ? lf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var lt = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hr = Symbol.for("react.element"),
  Bt = Symbol.for("react.portal"),
  Wt = Symbol.for("react.fragment"),
  ai = Symbol.for("react.strict_mode"),
  co = Symbol.for("react.profiler"),
  Ps = Symbol.for("react.provider"),
  js = Symbol.for("react.context"),
  ci = Symbol.for("react.forward_ref"),
  fo = Symbol.for("react.suspense"),
  po = Symbol.for("react.suspense_list"),
  fi = Symbol.for("react.memo"),
  ut = Symbol.for("react.lazy"),
  zs = Symbol.for("react.offscreen"),
  tu = Symbol.iterator;
function Sn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tu && e[tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Il;
function jn(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || "";
    }
  return (
    `
` +
    Il +
    e
  );
}
var Dl = !1;
function Fl(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
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
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jn(e) : "";
}
function sf(e) {
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
      return (e = Fl(e.type, !1)), e;
    case 11:
      return (e = Fl(e.type.render, !1)), e;
    case 1:
      return (e = Fl(e.type, !0)), e;
    default:
      return "";
  }
}
function mo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case Bt:
      return "Portal";
    case co:
      return "Profiler";
    case ai:
      return "StrictMode";
    case fo:
      return "Suspense";
    case po:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case js:
        return (e.displayName || "Context") + ".Consumer";
      case Ps:
        return (e._context.displayName || "Context") + ".Provider";
      case ci:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fi:
        return (
          (t = e.displayName || null), t !== null ? t : mo(e.type) || "Memo"
        );
      case ut:
        (t = e._payload), (e = e._init);
        try {
          return mo(e(t));
        } catch {}
    }
  return null;
}
function af(e) {
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
      return mo(t);
    case 8:
      return t === ai ? "StrictMode" : "Mode";
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
function xt(e) {
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
function Ls(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function cf(e) {
  var t = Ls(e) ? "checked" : "value",
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
function vr(e) {
  e._valueTracker || (e._valueTracker = cf(e));
}
function Os(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ls(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ho(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function nu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ts(e, t) {
  (t = t.checked), t != null && si(e, "checked", t, !1);
}
function vo(e, t) {
  Ts(e, t);
  var n = xt(t.value),
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
    ? go(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && go(e, t.type, xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ru(e, t, n) {
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
function go(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (zn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xt(n) };
}
function Ms(e, t) {
  var n = xt(t.value),
    r = xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Rs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var gr,
  Is = (function (e) {
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
        gr = gr || document.createElement("div"),
          gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
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
  ff = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function (e) {
  ff.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]);
  });
});
function Ds(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Fs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ds(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var df = Y(
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
function So(e, t) {
  if (t) {
    if (df[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function ko(e, t) {
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
var xo = null;
function di(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Eo = null,
  ln = null,
  on = null;
function iu(e) {
  if ((e = cr(e))) {
    if (typeof Eo != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = kl(t)), Eo(e.stateNode, e.type, t));
  }
}
function $s(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function Us() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), iu(e), t)) for (e = 0; e < t.length; e++) iu(t[e]);
  }
}
function As(e, t) {
  return e(t);
}
function Vs() {}
var $l = !1;
function Hs(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return As(e, t, n);
  } finally {
    ($l = !1), (ln !== null || on !== null) && (Vs(), Us());
  }
}
function Qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
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
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var Co = !1;
if (et)
  try {
    var kn = {};
    Object.defineProperty(kn, "passive", {
      get: function () {
        Co = !0;
      },
    }),
      window.addEventListener("test", kn, kn),
      window.removeEventListener("test", kn, kn);
  } catch {
    Co = !1;
  }
function pf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Rn = !1,
  Kr = null,
  Yr = !1,
  _o = null,
  mf = {
    onError: function (e) {
      (Rn = !0), (Kr = e);
    },
  };
function hf(e, t, n, r, l, o, i, u, s) {
  (Rn = !1), (Kr = null), pf.apply(mf, arguments);
}
function vf(e, t, n, r, l, o, i, u, s) {
  if ((hf.apply(this, arguments), Rn)) {
    if (Rn) {
      var c = Kr;
      (Rn = !1), (Kr = null);
    } else throw Error(g(198));
    Yr || ((Yr = !0), (_o = c));
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
function Bs(e) {
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
function uu(e) {
  if (Vt(e) !== e) throw Error(g(188));
}
function gf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(g(188));
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
        if (o === n) return uu(l), e;
        if (o === r) return uu(l), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Ws(e) {
  return (e = gf(e)), e !== null ? Qs(e) : null;
}
function Qs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ks = Ce.unstable_scheduleCallback,
  su = Ce.unstable_cancelCallback,
  yf = Ce.unstable_shouldYield,
  wf = Ce.unstable_requestPaint,
  G = Ce.unstable_now,
  Sf = Ce.unstable_getCurrentPriorityLevel,
  pi = Ce.unstable_ImmediatePriority,
  Ys = Ce.unstable_UserBlockingPriority,
  Xr = Ce.unstable_NormalPriority,
  kf = Ce.unstable_LowPriority,
  Xs = Ce.unstable_IdlePriority,
  gl = null,
  Ye = null;
function xf(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $e = Math.clz32 ? Math.clz32 : _f,
  Ef = Math.log,
  Cf = Math.LN2;
function _f(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ef(e) / Cf) | 0)) | 0;
}
var yr = 64,
  wr = 4194304;
function Ln(e) {
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
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Ln(u)) : ((o &= i), o !== 0 && (r = Ln(o)));
  } else (i = n & ~l), i !== 0 ? (r = Ln(i)) : o !== 0 && (r = Ln(o));
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
      (n = 31 - $e(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Nf(e, t) {
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
function Pf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - $e(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Nf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function No(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Gs() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $e(t)),
    (e[t] = n);
}
function jf(e, t) {
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
    var l = 31 - $e(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function mi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var $ = 0;
function Zs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Js,
  hi,
  qs,
  bs,
  ea,
  Po = !1,
  Sr = [],
  pt = null,
  mt = null,
  ht = null,
  Kn = new Map(),
  Yn = new Map(),
  at = [],
  zf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function au(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yn.delete(t.pointerId);
  }
}
function xn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = cr(t)), t !== null && hi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Lf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (pt = xn(pt, e, t, n, r, l)), !0;
    case "dragenter":
      return (mt = xn(mt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ht = xn(ht, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Kn.set(o, xn(Kn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Yn.set(o, xn(Yn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ta(e) {
  var t = Lt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Bs(n)), t !== null)) {
          (e.blockedOn = t),
            ea(e.priority, function () {
              qs(n);
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
function Ir(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (xo = r), n.target.dispatchEvent(r), (xo = null);
    } else return (t = cr(n)), t !== null && hi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function cu(e, t, n) {
  Ir(e) && n.delete(t);
}
function Of() {
  (Po = !1),
    pt !== null && Ir(pt) && (pt = null),
    mt !== null && Ir(mt) && (mt = null),
    ht !== null && Ir(ht) && (ht = null),
    Kn.forEach(cu),
    Yn.forEach(cu);
}
function En(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Po ||
      ((Po = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Of)));
}
function Xn(e) {
  function t(l) {
    return En(l, e);
  }
  if (0 < Sr.length) {
    En(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && En(pt, e),
      mt !== null && En(mt, e),
      ht !== null && En(ht, e),
      Kn.forEach(t),
      Yn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    ta(n), n.blockedOn === null && at.shift();
}
var un = lt.ReactCurrentBatchConfig,
  Zr = !0;
function Tf(e, t, n, r) {
  var l = $,
    o = un.transition;
  un.transition = null;
  try {
    ($ = 1), vi(e, t, n, r);
  } finally {
    ($ = l), (un.transition = o);
  }
}
function Mf(e, t, n, r) {
  var l = $,
    o = un.transition;
  un.transition = null;
  try {
    ($ = 4), vi(e, t, n, r);
  } finally {
    ($ = l), (un.transition = o);
  }
}
function vi(e, t, n, r) {
  if (Zr) {
    var l = jo(e, t, n, r);
    if (l === null) Gl(e, t, r, Jr, n), au(e, r);
    else if (Lf(l, e, t, n, r)) r.stopPropagation();
    else if ((au(e, r), t & 4 && -1 < zf.indexOf(e))) {
      for (; l !== null; ) {
        var o = cr(l);
        if (
          (o !== null && Js(o),
          (o = jo(e, t, n, r)),
          o === null && Gl(e, t, r, Jr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Jr = null;
function jo(e, t, n, r) {
  if (((Jr = null), (e = di(r)), (e = Lt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Bs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Jr = e), null;
}
function na(e) {
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
      switch (Sf()) {
        case pi:
          return 1;
        case Ys:
          return 4;
        case Xr:
        case kf:
          return 16;
        case Xs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ft = null,
  gi = null,
  Dr = null;
function ra() {
  if (Dr) return Dr;
  var e,
    t = gi,
    n = t.length,
    r,
    l = "value" in ft ? ft.value : ft.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Fr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function fu() {
  return !1;
}
function Ne(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kr
        : fu),
      (this.isPropagationStopped = fu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yi = Ne(yn),
  ar = Y({}, yn, { view: 0, detail: 0 }),
  Rf = Ne(ar),
  Al,
  Vl,
  Cn,
  yl = Y({}, ar, {
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
    getModifierState: wi,
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
        : (e !== Cn &&
            (Cn && e.type === "mousemove"
              ? ((Al = e.screenX - Cn.screenX), (Vl = e.screenY - Cn.screenY))
              : (Vl = Al = 0),
            (Cn = e)),
          Al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vl;
    },
  }),
  du = Ne(yl),
  If = Y({}, yl, { dataTransfer: 0 }),
  Df = Ne(If),
  Ff = Y({}, ar, { relatedTarget: 0 }),
  Hl = Ne(Ff),
  $f = Y({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uf = Ne($f),
  Af = Y({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vf = Ne(Af),
  Hf = Y({}, yn, { data: 0 }),
  pu = Ne(Hf),
  Bf = {
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
  Wf = {
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
  Qf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qf[e]) ? !!t[e] : !1;
}
function wi() {
  return Kf;
}
var Yf = Y({}, ar, {
    key: function (e) {
      if (e.key) {
        var t = Bf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Wf[e.keyCode] || "Unidentified"
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
    getModifierState: wi,
    charCode: function (e) {
      return e.type === "keypress" ? Fr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Xf = Ne(Yf),
  Gf = Y({}, yl, {
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
  mu = Ne(Gf),
  Zf = Y({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wi,
  }),
  Jf = Ne(Zf),
  qf = Y({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bf = Ne(qf),
  ed = Y({}, yl, {
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
  td = Ne(ed),
  nd = [9, 13, 27, 32],
  Si = et && "CompositionEvent" in window,
  In = null;
et && "documentMode" in document && (In = document.documentMode);
var rd = et && "TextEvent" in window && !In,
  la = et && (!Si || (In && 8 < In && 11 >= In)),
  hu = " ",
  vu = !1;
function oa(e, t) {
  switch (e) {
    case "keyup":
      return nd.indexOf(t.keyCode) !== -1;
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
function ia(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qt = !1;
function ld(e, t) {
  switch (e) {
    case "compositionend":
      return ia(t);
    case "keypress":
      return t.which !== 32 ? null : ((vu = !0), hu);
    case "textInput":
      return (e = t.data), e === hu && vu ? null : e;
    default:
      return null;
  }
}
function od(e, t) {
  if (Qt)
    return e === "compositionend" || (!Si && oa(e, t))
      ? ((e = ra()), (Dr = gi = ft = null), (Qt = !1), e)
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
      return la && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var id = {
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
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!id[e.type] : t === "textarea";
}
function ua(e, t, n, r) {
  $s(r),
    (t = qr(t, "onChange")),
    0 < t.length &&
      ((n = new yi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Dn = null,
  Gn = null;
function ud(e) {
  ya(e, 0);
}
function wl(e) {
  var t = Xt(e);
  if (Os(t)) return e;
}
function sd(e, t) {
  if (e === "change") return t;
}
var sa = !1;
if (et) {
  var Bl;
  if (et) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var yu = document.createElement("div");
      yu.setAttribute("oninput", "return;"),
        (Wl = typeof yu.oninput == "function");
    }
    Bl = Wl;
  } else Bl = !1;
  sa = Bl && (!document.documentMode || 9 < document.documentMode);
}
function wu() {
  Dn && (Dn.detachEvent("onpropertychange", aa), (Gn = Dn = null));
}
function aa(e) {
  if (e.propertyName === "value" && wl(Gn)) {
    var t = [];
    ua(t, Gn, e, di(e)), Hs(ud, t);
  }
}
function ad(e, t, n) {
  e === "focusin"
    ? (wu(), (Dn = t), (Gn = n), Dn.attachEvent("onpropertychange", aa))
    : e === "focusout" && wu();
}
function cd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return wl(Gn);
}
function fd(e, t) {
  if (e === "click") return wl(t);
}
function dd(e, t) {
  if (e === "input" || e === "change") return wl(t);
}
function pd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == "function" ? Object.is : pd;
function Zn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ao.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function Su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ku(e, t) {
  var n = Su(e);
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
    n = Su(n);
  }
}
function ca(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ca(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function fa() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function ki(e) {
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
function md(e) {
  var t = fa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ca(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ki(n)) {
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
          (l = ku(n, o));
        var i = ku(n, r);
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
var hd = et && "documentMode" in document && 11 >= document.documentMode,
  Kt = null,
  zo = null,
  Fn = null,
  Lo = !1;
function xu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Lo ||
    Kt == null ||
    Kt !== Qr(r) ||
    ((r = Kt),
    "selectionStart" in r && ki(r)
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
    (Fn && Zn(Fn, r)) ||
      ((Fn = r),
      (r = qr(zo, "onSelect")),
      0 < r.length &&
        ((t = new yi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  Ql = {},
  da = {};
et &&
  ((da = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yt.animationend.animation,
    delete Yt.animationiteration.animation,
    delete Yt.animationstart.animation),
  "TransitionEvent" in window || delete Yt.transitionend.transition);
function Sl(e) {
  if (Ql[e]) return Ql[e];
  if (!Yt[e]) return e;
  var t = Yt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in da) return (Ql[e] = t[n]);
  return e;
}
var pa = Sl("animationend"),
  ma = Sl("animationiteration"),
  ha = Sl("animationstart"),
  va = Sl("transitionend"),
  ga = new Map(),
  Eu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ct(e, t) {
  ga.set(e, t), At(t, [e]);
}
for (var Kl = 0; Kl < Eu.length; Kl++) {
  var Yl = Eu[Kl],
    vd = Yl.toLowerCase(),
    gd = Yl[0].toUpperCase() + Yl.slice(1);
  Ct(vd, "on" + gd);
}
Ct(pa, "onAnimationEnd");
Ct(ma, "onAnimationIteration");
Ct(ha, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(va, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
At(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
At(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
At("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
At(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
At(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
At(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var On =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  yd = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function Cu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), vf(r, t, void 0, e), (e.currentTarget = null);
}
function ya(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Cu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Cu(l, u, c), (o = s);
        }
    }
  }
  if (Yr) throw ((e = _o), (Yr = !1), (_o = null), e);
}
function H(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wa(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), wa(n, e, r, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      Ns.forEach(function (n) {
        n !== "selectionchange" && (yd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), Xl("selectionchange", !1, t));
  }
}
function wa(e, t, n, r) {
  switch (na(t)) {
    case 1:
      var l = Tf;
      break;
    case 4:
      l = Mf;
      break;
    default:
      l = vi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Co ||
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
function Gl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Lt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Hs(function () {
    var c = o,
      h = di(n),
      m = [];
    e: {
      var p = ga.get(e);
      if (p !== void 0) {
        var w = yi,
          k = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Xf;
            break;
          case "focusin":
            (k = "focus"), (w = Hl);
            break;
          case "focusout":
            (k = "blur"), (w = Hl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Hl;
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
            w = du;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Df;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Jf;
            break;
          case pa:
          case ma:
          case ha:
            w = Uf;
            break;
          case va:
            w = bf;
            break;
          case "scroll":
            w = Rf;
            break;
          case "wheel":
            w = td;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = mu;
        }
        var E = (t & 4) !== 0,
          U = !E && e === "scroll",
          f = E ? (p !== null ? p + "Capture" : null) : p;
        E = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Qn(a, f)), v != null && E.push(qn(a, v, d)))),
            U)
          )
            break;
          a = a.return;
        }
        0 < E.length &&
          ((p = new w(p, k, null, n, h)), m.push({ event: p, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== xo &&
            (k = n.relatedTarget || n.fromElement) &&
            (Lt(k) || k[tt]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          w
            ? ((k = n.relatedTarget || n.toElement),
              (w = c),
              (k = k ? Lt(k) : null),
              k !== null &&
                ((U = Vt(k)), k !== U || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((w = null), (k = c)),
          w !== k)
        ) {
          if (
            ((E = du),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = mu),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (U = w == null ? p : Xt(w)),
            (d = k == null ? p : Xt(k)),
            (p = new E(v, a + "leave", w, n, h)),
            (p.target = U),
            (p.relatedTarget = d),
            (v = null),
            Lt(h) === c &&
              ((E = new E(f, a + "enter", k, n, h)),
              (E.target = d),
              (E.relatedTarget = U),
              (v = E)),
            (U = v),
            w && k)
          )
            t: {
              for (E = w, f = k, a = 0, d = E; d; d = Ht(d)) a++;
              for (d = 0, v = f; v; v = Ht(v)) d++;
              for (; 0 < a - d; ) (E = Ht(E)), a--;
              for (; 0 < d - a; ) (f = Ht(f)), d--;
              for (; a--; ) {
                if (E === f || (f !== null && E === f.alternate)) break t;
                (E = Ht(E)), (f = Ht(f));
              }
              E = null;
            }
          else E = null;
          w !== null && _u(m, p, w, E, !1),
            k !== null && U !== null && _u(m, U, k, E, !0);
        }
      }
      e: {
        if (
          ((p = c ? Xt(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var y = sd;
        else if (gu(p))
          if (sa) y = dd;
          else {
            y = cd;
            var x = ad;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (y = fd);
        if (y && (y = y(e, c))) {
          ua(m, y, n, h);
          break e;
        }
        x && x(e, p, c),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            go(p, "number", p.value);
      }
      switch (((x = c ? Xt(c) : window), e)) {
        case "focusin":
          (gu(x) || x.contentEditable === "true") &&
            ((Kt = x), (zo = c), (Fn = null));
          break;
        case "focusout":
          Fn = zo = Kt = null;
          break;
        case "mousedown":
          Lo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Lo = !1), xu(m, n, h);
          break;
        case "selectionchange":
          if (hd) break;
        case "keydown":
        case "keyup":
          xu(m, n, h);
      }
      var S;
      if (Si)
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
        Qt
          ? oa(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (la &&
          n.locale !== "ko" &&
          (Qt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Qt && (S = ra())
            : ((ft = h),
              (gi = "value" in ft ? ft.value : ft.textContent),
              (Qt = !0))),
        (x = qr(c, P)),
        0 < x.length &&
          ((P = new pu(P, e, null, n, h)),
          m.push({ event: P, listeners: x }),
          S ? (P.data = S) : ((S = ia(n)), S !== null && (P.data = S)))),
        (S = rd ? ld(e, n) : od(e, n)) &&
          ((c = qr(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new pu("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = S)));
    }
    ya(m, t);
  });
}
function qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Qn(e, n)),
      o != null && r.unshift(qn(e, o, l)),
      (o = Qn(e, t)),
      o != null && r.push(qn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _u(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Qn(n, o)), s != null && i.unshift(qn(n, s, u)))
        : l || ((s = Qn(n, o)), s != null && i.push(qn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var wd = /\r\n?/g,
  Sd = /\u0000|\uFFFD/g;
function Nu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wd,
      `
`,
    )
    .replace(Sd, "");
}
function Cr(e, t, n) {
  if (((t = Nu(t)), Nu(e) !== t && n)) throw Error(g(425));
}
function br() {}
var Oo = null,
  To = null;
function Mo(e, t) {
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
var Ro = typeof setTimeout == "function" ? setTimeout : void 0,
  kd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pu = typeof Promise == "function" ? Promise : void 0,
  xd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Pu < "u"
        ? function (e) {
            return Pu.resolve(null).then(e).catch(Ed);
          }
        : Ro;
function Ed(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Xn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Xn(t);
}
function vt(e) {
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
function ju(e) {
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
  Ke = "__reactFiber$" + wn,
  bn = "__reactProps$" + wn,
  tt = "__reactContainer$" + wn,
  Io = "__reactEvents$" + wn,
  Cd = "__reactListeners$" + wn,
  _d = "__reactHandles$" + wn;
function Lt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ju(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = ju(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[Ke] || e[tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function kl(e) {
  return e[bn] || null;
}
var Do = [],
  Gt = -1;
function _t(e) {
  return { current: e };
}
function B(e) {
  0 > Gt || ((e.current = Do[Gt]), (Do[Gt] = null), Gt--);
}
function V(e, t) {
  Gt++, (Do[Gt] = e.current), (e.current = t);
}
var Et = {},
  ae = _t(Et),
  ve = _t(!1),
  It = Et;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
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
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function el() {
  B(ve), B(ae);
}
function zu(e, t, n) {
  if (ae.current !== Et) throw Error(g(168));
  V(ae, t), V(ve, n);
}
function Sa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, af(e) || "Unknown", l));
  return Y({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Et),
    (It = ae.current),
    V(ae, e),
    V(ve, ve.current),
    !0
  );
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = Sa(e, t, It)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ve),
      B(ae),
      V(ae, e))
    : B(ve),
    V(ve, n);
}
var Ze = null,
  xl = !1,
  Jl = !1;
function ka(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
function Nd(e) {
  (xl = !0), ka(e);
}
function Nt() {
  if (!Jl && Ze !== null) {
    Jl = !0;
    var e = 0,
      t = $;
    try {
      var n = Ze;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ze = null), (xl = !1);
    } catch (l) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), Ks(pi, Nt), l);
    } finally {
      ($ = t), (Jl = !1);
    }
  }
  return null;
}
var Zt = [],
  Jt = 0,
  nl = null,
  rl = 0,
  je = [],
  ze = 0,
  Dt = null,
  Je = 1,
  qe = "";
function jt(e, t) {
  (Zt[Jt++] = rl), (Zt[Jt++] = nl), (nl = e), (rl = t);
}
function xa(e, t, n) {
  (je[ze++] = Je), (je[ze++] = qe), (je[ze++] = Dt), (Dt = e);
  var r = Je;
  e = qe;
  var l = 32 - $e(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - $e(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Je = (1 << (32 - $e(t) + l)) | (n << l) | r),
      (qe = o + e);
  } else (Je = (1 << o) | (n << l) | r), (qe = e);
}
function xi(e) {
  e.return !== null && (jt(e, 1), xa(e, 1, 0));
}
function Ei(e) {
  for (; e === nl; )
    (nl = Zt[--Jt]), (Zt[Jt] = null), (rl = Zt[--Jt]), (Zt[Jt] = null);
  for (; e === Dt; )
    (Dt = je[--ze]),
      (je[ze] = null),
      (qe = je[--ze]),
      (je[ze] = null),
      (Je = je[--ze]),
      (je[ze] = null);
}
var Ee = null,
  xe = null,
  W = !1,
  Fe = null;
function Ea(e, t) {
  var n = Le(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (xe = vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dt !== null ? { id: Je, overflow: qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Le(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $o(e) {
  if (W) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (Fo(e)) throw Error(g(418));
        t = vt(n.nextSibling);
        var r = Ee;
        t && Ou(e, t)
          ? Ea(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ee = e));
      }
    } else {
      if (Fo(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ee = e);
    }
  }
}
function Tu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function _r(e) {
  if (e !== Ee) return !1;
  if (!W) return Tu(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Mo(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Fo(e)) throw (Ca(), Error(g(418)));
    for (; t; ) Ea(e, t), (t = vt(t.nextSibling));
  }
  if ((Tu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Ee ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ca() {
  for (var e = xe; e; ) e = vt(e.nextSibling);
}
function dn() {
  (xe = Ee = null), (W = !1);
}
function Ci(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var Pd = lt.ReactCurrentBatchConfig;
function _n(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function Nr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Mu(e) {
  var t = e._init;
  return t(e._payload);
}
function _a(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = St(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = lo(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var y = d.type;
    return y === Wt
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
          (a.elementType === y ||
            (typeof y == "object" &&
              y !== null &&
              y.$$typeof === ut &&
              Mu(y) === a.type))
        ? ((v = l(a, d.props)), (v.ref = _n(f, a, d)), (v.return = f), v)
        : ((v = Wr(d.type, d.key, d.props, null, f.mode, v)),
          (v.ref = _n(f, a, d)),
          (v.return = f),
          v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = oo(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, y) {
    return a === null || a.tag !== 7
      ? ((a = Rt(d, f.mode, v, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = lo("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case hr:
          return (
            (d = Wr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = _n(f, null, a)),
            (d.return = f),
            d
          );
        case Bt:
          return (a = oo(a, f.mode, d)), (a.return = f), a;
        case ut:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (zn(a) || Sn(a))
        return (a = Rt(a, f.mode, d, null)), (a.return = f), a;
      Nr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var y = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return y !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hr:
          return d.key === y ? s(f, a, d, v) : null;
        case Bt:
          return d.key === y ? c(f, a, d, v) : null;
        case ut:
          return (y = d._init), p(f, a, y(d._payload), v);
      }
      if (zn(d) || Sn(d)) return y !== null ? null : h(f, a, d, v, null);
      Nr(f, d);
    }
    return null;
  }
  function w(f, a, d, v, y) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(a, f, "" + v, y);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case hr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, y);
        case Bt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, y);
        case ut:
          var x = v._init;
          return w(f, a, d, x(v._payload), y);
      }
      if (zn(v) || Sn(v)) return (f = f.get(d) || null), h(a, f, v, y, null);
      Nr(a, v);
    }
    return null;
  }
  function k(f, a, d, v) {
    for (
      var y = null, x = null, S = a, P = (a = 0), I = null;
      S !== null && P < d.length;
      P++
    ) {
      S.index > P ? ((I = S), (S = null)) : (I = S.sibling);
      var N = p(f, S, d[P], v);
      if (N === null) {
        S === null && (S = I);
        break;
      }
      e && S && N.alternate === null && t(f, S),
        (a = o(N, a, P)),
        x === null ? (y = N) : (x.sibling = N),
        (x = N),
        (S = I);
    }
    if (P === d.length) return n(f, S), W && jt(f, P), y;
    if (S === null) {
      for (; P < d.length; P++)
        (S = m(f, d[P], v)),
          S !== null &&
            ((a = o(S, a, P)), x === null ? (y = S) : (x.sibling = S), (x = S));
      return W && jt(f, P), y;
    }
    for (S = r(f, S); P < d.length; P++)
      (I = w(S, f, P, d[P], v)),
        I !== null &&
          (e && I.alternate !== null && S.delete(I.key === null ? P : I.key),
          (a = o(I, a, P)),
          x === null ? (y = I) : (x.sibling = I),
          (x = I));
    return (
      e &&
        S.forEach(function (b) {
          return t(f, b);
        }),
      W && jt(f, P),
      y
    );
  }
  function E(f, a, d, v) {
    var y = Sn(d);
    if (typeof y != "function") throw Error(g(150));
    if (((d = y.call(d)), d == null)) throw Error(g(151));
    for (
      var x = (y = null), S = a, P = (a = 0), I = null, N = d.next();
      S !== null && !N.done;
      P++, N = d.next()
    ) {
      S.index > P ? ((I = S), (S = null)) : (I = S.sibling);
      var b = p(f, S, N.value, v);
      if (b === null) {
        S === null && (S = I);
        break;
      }
      e && S && b.alternate === null && t(f, S),
        (a = o(b, a, P)),
        x === null ? (y = b) : (x.sibling = b),
        (x = b),
        (S = I);
    }
    if (N.done) return n(f, S), W && jt(f, P), y;
    if (S === null) {
      for (; !N.done; P++, N = d.next())
        (N = m(f, N.value, v)),
          N !== null &&
            ((a = o(N, a, P)), x === null ? (y = N) : (x.sibling = N), (x = N));
      return W && jt(f, P), y;
    }
    for (S = r(f, S); !N.done; P++, N = d.next())
      (N = w(S, f, P, N.value, v)),
        N !== null &&
          (e && N.alternate !== null && S.delete(N.key === null ? P : N.key),
          (a = o(N, a, P)),
          x === null ? (y = N) : (x.sibling = N),
          (x = N));
    return (
      e &&
        S.forEach(function (Ve) {
          return t(f, Ve);
        }),
      W && jt(f, P),
      y
    );
  }
  function U(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Wt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case hr:
          e: {
            for (var y = d.key, x = a; x !== null; ) {
              if (x.key === y) {
                if (((y = d.type), y === Wt)) {
                  if (x.tag === 7) {
                    n(f, x.sibling),
                      (a = l(x, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  x.elementType === y ||
                  (typeof y == "object" &&
                    y !== null &&
                    y.$$typeof === ut &&
                    Mu(y) === x.type)
                ) {
                  n(f, x.sibling),
                    (a = l(x, d.props)),
                    (a.ref = _n(f, x, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, x);
                break;
              } else t(f, x);
              x = x.sibling;
            }
            d.type === Wt
              ? ((a = Rt(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Wr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = _n(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Bt:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = oo(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case ut:
          return (x = d._init), U(f, a, x(d._payload), v);
      }
      if (zn(d)) return k(f, a, d, v);
      if (Sn(d)) return E(f, a, d, v);
      Nr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = lo(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return U;
}
var pn = _a(!0),
  Na = _a(!1),
  ll = _t(null),
  ol = null,
  qt = null,
  _i = null;
function Ni() {
  _i = qt = ol = null;
}
function Pi(e) {
  var t = ll.current;
  B(ll), (e._currentValue = t);
}
function Uo(e, t, n) {
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
function sn(e, t) {
  (ol = e),
    (_i = qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (_i !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qt === null)) {
      if (ol === null) throw Error(g(308));
      (qt = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else qt = qt.next = e;
  return t;
}
var Ot = null;
function ji(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function Pa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ji(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    nt(e, r)
  );
}
function nt(e, t) {
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
function zi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ja(e, t) {
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
function be(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      nt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ji(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    nt(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mi(e, n);
  }
}
function Ru(e, t) {
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
function il(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            E = u;
          switch (((p = t), (w = n), E.tag)) {
            case 1:
              if (((k = E.payload), typeof k == "function")) {
                m = k.call(w, m, p);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = E.payload),
                (p = typeof k == "function" ? k.call(w, m, p) : k),
                p == null)
              )
                break e;
              m = Y({}, m, p);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = w), (s = m)) : (h = h.next = w),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    ($t |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Iu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var fr = {},
  Xe = _t(fr),
  er = _t(fr),
  tr = _t(fr);
function Tt(e) {
  if (e === fr) throw Error(g(174));
  return e;
}
function Li(e, t) {
  switch ((V(tr, t), V(er, e), V(Xe, fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wo(t, e));
  }
  B(Xe), V(Xe, t);
}
function mn() {
  B(Xe), B(er), B(tr);
}
function za(e) {
  Tt(tr.current);
  var t = Tt(Xe.current),
    n = wo(t, e.type);
  t !== n && (V(er, e), V(Xe, n));
}
function Oi(e) {
  er.current === e && (B(Xe), B(er));
}
var Q = _t(0);
function ul(e) {
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
var ql = [];
function Ti() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Ur = lt.ReactCurrentDispatcher,
  bl = lt.ReactCurrentBatchConfig,
  Ft = 0,
  K = null,
  J = null,
  te = null,
  sl = !1,
  $n = !1,
  nr = 0,
  jd = 0;
function ie() {
  throw Error(g(321));
}
function Mi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function Ri(e, t, n, r, l, o) {
  if (
    ((Ft = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? Td : Md),
    (e = n(r, l)),
    $n)
  ) {
    o = 0;
    do {
      if ((($n = !1), (nr = 0), 25 <= o)) throw Error(g(301));
      (o += 1),
        (te = J = null),
        (t.updateQueue = null),
        (Ur.current = Rd),
        (e = n(r, l));
    } while ($n);
  }
  if (
    ((Ur.current = al),
    (t = J !== null && J.next !== null),
    (Ft = 0),
    (te = J = K = null),
    (sl = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function Ii() {
  var e = nr !== 0;
  return (nr = 0), e;
}
function Qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (K.memoizedState = te = e) : (te = te.next = e), te;
}
function Me() {
  if (J === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = te === null ? K.memoizedState : te.next;
  if (t !== null) (te = t), (J = e);
  else {
    if (e === null) throw Error(g(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      te === null ? (K.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function eo(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(g(311));
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
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((Ft & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (K.lanes |= h),
          ($t |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Ae(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (K.lanes |= o), ($t |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function to(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ae(o, t.memoizedState) || (he = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function La() {}
function Oa(e, t) {
  var n = K,
    r = Me(),
    l = t(),
    o = !Ae(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    Di(Ra.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lr(9, Ma.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(g(349));
    Ft & 30 || Ta(n, t, l);
  }
  return l;
}
function Ta(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ma(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ia(t) && Da(e);
}
function Ra(e, t, n) {
  return n(function () {
    Ia(t) && Da(e);
  });
}
function Ia(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function Da(e) {
  var t = nt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Du(e) {
  var t = Qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Od.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function lr(e, t, n, r) {
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
function Fa() {
  return Me().memoizedState;
}
function Ar(e, t, n, r) {
  var l = Qe();
  (K.flags |= e),
    (l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function El(e, t, n, r) {
  var l = Me();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && Mi(r, i.deps))) {
      l.memoizedState = lr(t, n, o, r);
      return;
    }
  }
  (K.flags |= e), (l.memoizedState = lr(1 | t, n, o, r));
}
function Fu(e, t) {
  return Ar(8390656, 8, e, t);
}
function Di(e, t) {
  return El(2048, 8, e, t);
}
function $a(e, t) {
  return El(4, 2, e, t);
}
function Ua(e, t) {
  return El(4, 4, e, t);
}
function Aa(e, t) {
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
function Va(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), El(4, 4, Aa.bind(null, t, e), n)
  );
}
function Fi() {}
function Ha(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ba(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wa(e, t, n) {
  return Ft & 21
    ? (Ae(n, t) || ((n = Gs()), (K.lanes |= n), ($t |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function zd(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (bl.transition = r);
  }
}
function Qa() {
  return Me().memoizedState;
}
function Ld(e, t, n) {
  var r = wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ka(e))
  )
    Ya(t, n);
  else if (((n = Pa(e, t, n, r)), n !== null)) {
    var l = fe();
    Ue(n, e, r, l), Xa(n, t, r);
  }
}
function Od(e, t, n) {
  var r = wt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ka(e)) Ya(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ae(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), ji(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pa(e, t, l, r)),
      n !== null && ((l = fe()), Ue(n, e, r, l), Xa(n, t, r));
  }
}
function Ka(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Ya(e, t) {
  $n = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Xa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mi(e, n);
  }
}
var al = {
    readContext: Te,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  Td = {
    readContext: Te,
    useCallback: function (e, t) {
      return (Qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: Fu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ar(4194308, 4, Aa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ar(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ar(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Qe();
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
        (e = e.dispatch = Ld.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Du,
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      return (Qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Du(!1),
        t = e[0];
      return (e = zd.bind(null, e[1])), (Qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        l = Qe();
      if (W) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(g(349));
        Ft & 30 || Ta(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Fu(Ra.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        lr(9, Ma.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qe(),
        t = ne.identifierPrefix;
      if (W) {
        var n = qe,
          r = Je;
        (n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Md = {
    readContext: Te,
    useCallback: Ha,
    useContext: Te,
    useEffect: Di,
    useImperativeHandle: Va,
    useInsertionEffect: $a,
    useLayoutEffect: Ua,
    useMemo: Ba,
    useReducer: eo,
    useRef: Fa,
    useState: function () {
      return eo(rr);
    },
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      var t = Me();
      return Wa(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = eo(rr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: La,
    useSyncExternalStore: Oa,
    useId: Qa,
    unstable_isNewReconciler: !1,
  },
  Rd = {
    readContext: Te,
    useCallback: Ha,
    useContext: Te,
    useEffect: Di,
    useImperativeHandle: Va,
    useInsertionEffect: $a,
    useLayoutEffect: Ua,
    useMemo: Ba,
    useReducer: to,
    useRef: Fa,
    useState: function () {
      return to(rr);
    },
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      var t = Me();
      return J === null ? (t.memoizedState = e) : Wa(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = to(rr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: La,
    useSyncExternalStore: Oa,
    useId: Qa,
    unstable_isNewReconciler: !1,
  };
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ao(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = wt(e),
      o = be(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = gt(e, o, l)),
      t !== null && (Ue(t, e, l, r), $r(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = wt(e),
      o = be(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = gt(e, o, l)),
      t !== null && (Ue(t, e, l, r), $r(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = wt(e),
      l = be(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = gt(e, l, r)),
      t !== null && (Ue(t, e, r, n), $r(t, e, r));
  },
};
function $u(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Zn(n, r) || !Zn(l, o)
        : !0
  );
}
function Ga(e, t, n) {
  var r = !1,
    l = Et,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Te(o))
      : ((l = ge(t) ? It : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? fn(e, l) : Et)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Uu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function Vo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), zi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Te(o))
    : ((o = ge(t) ? It : ae.current), (l.context = fn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ao(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Cl.enqueueReplaceState(l, l.state, null),
      il(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sf(r)), (r = r.return);
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
function no(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ho(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Id = typeof WeakMap == "function" ? WeakMap : Map;
function Za(e, t, n) {
  (n = be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fl || ((fl = !0), (qo = r)), Ho(e, t);
    }),
    n
  );
}
function Ja(e, t, n) {
  (n = be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ho(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ho(e, t),
          typeof r != "function" &&
            (yt === null ? (yt = new Set([this])) : yt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Id();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Gd.bind(null, e, t, n)), t.then(e, e));
}
function Vu(e) {
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
function Hu(e, t, n, r, l) {
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
              : ((t = be(-1, 1)), (t.tag = 2), gt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Dd = lt.ReactCurrentOwner,
  he = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Na(t, null, n, r) : pn(t, e.child, n, r);
}
function Bu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    sn(t, l),
    (r = Ri(e, t, n, r, o, l)),
    (n = Ii()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        rt(e, t, l))
      : (W && n && xi(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Wu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Qi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), qa(e, t, o, r, l))
      : ((e = Wr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zn), n(i, r) && e.ref === t.ref)
    )
      return rt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = St(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zn(o, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), rt(e, t, l);
  }
  return Bo(e, t, n, r, l);
}
function ba(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(en, Se),
        (Se |= n);
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
          V(en, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        V(en, Se),
        (Se |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(en, Se),
      (Se |= r);
  return ce(e, t, l, n), t.child;
}
function ec(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bo(e, t, n, r, l) {
  var o = ge(n) ? It : ae.current;
  return (
    (o = fn(t, o)),
    sn(t, l),
    (n = Ri(e, t, n, r, o, l)),
    (r = Ii()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        rt(e, t, l))
      : (W && r && xi(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function Qu(e, t, n, r, l) {
  if (ge(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if ((sn(t, l), t.stateNode === null))
    Vr(e, t), Ga(t, n, r), Vo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Te(c))
      : ((c = ge(n) ? It : ae.current), (c = fn(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Uu(t, i, r, c)),
      (st = !1);
    var p = t.memoizedState;
    (i.state = p),
      il(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || ve.current || st
        ? (typeof h == "function" && (Ao(t, n, h, r), (s = t.memoizedState)),
          (u = st || $u(t, n, u, r, p, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ja(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Ie(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Te(s))
        : ((s = ge(n) ? It : ae.current), (s = fn(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && Uu(t, i, r, s)),
      (st = !1),
      (p = t.memoizedState),
      (i.state = p),
      il(t, r, i, l);
    var k = t.memoizedState;
    u !== m || p !== k || ve.current || st
      ? (typeof w == "function" && (Ao(t, n, w, r), (k = t.memoizedState)),
        (c = st || $u(t, n, c, r, p, k, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wo(e, t, n, r, o, l);
}
function Wo(e, t, n, r, l, o) {
  ec(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Lu(t, n, !1), rt(e, t, o);
  (r = t.stateNode), (Dd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = pn(t, e.child, null, o)), (t.child = pn(t, null, u, o)))
      : ce(e, t, u, o),
    (t.memoizedState = r.state),
    l && Lu(t, n, !0),
    t.child
  );
}
function tc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zu(e, t.context, !1),
    Li(e, t.containerInfo);
}
function Ku(e, t, n, r, l) {
  return dn(), Ci(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ko(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nc(e, t, n) {
  var r = t.pendingProps,
    l = Q.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    V(Q, l & 1),
    e === null)
  )
    return (
      $o(t),
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
                : (o = Pl(i, r, 0, null)),
              (e = Rt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ko(n)),
              (t.memoizedState = Qo),
              e)
            : $i(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Fd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = St(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = St(u, o)) : ((o = Rt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ko(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Qo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = St(o, { mode: "visible", children: r.children })),
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
function $i(e, t) {
  return (
    (t = Pl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pr(e, t, n, r) {
  return (
    r !== null && Ci(r),
    pn(t, e.child, null, n),
    (e = $i(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Fd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = no(Error(g(422)))), Pr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Pl({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Rt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && pn(t, e.child, null, i),
          (t.child.memoizedState = Ko(i)),
          (t.memoizedState = Qo),
          o);
  if (!(t.mode & 1)) return Pr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(g(419))), (r = no(o, r, void 0)), Pr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), he || u)) {
    if (((r = ne), r !== null)) {
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
          ((o.retryLane = l), nt(e, l), Ue(r, e, l, -1));
    }
    return Wi(), (r = no(Error(g(421)))), Pr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (xe = vt(l.nextSibling)),
      (Ee = t),
      (W = !0),
      (Fe = null),
      e !== null &&
        ((je[ze++] = Je),
        (je[ze++] = qe),
        (je[ze++] = Dt),
        (Je = e.id),
        (qe = e.overflow),
        (Dt = t)),
      (t = $i(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Yu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Uo(e.return, t, n);
}
function ro(e, t, n, r, l) {
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
function rc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Yu(e, n, t);
        else if (e.tag === 19) Yu(e, n, t);
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
  if ((V(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ul(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ro(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ul(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ro(t, !0, n, null, o);
        break;
      case "together":
        ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($t |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = St(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function $d(e, t, n) {
  switch (t.tag) {
    case 3:
      tc(t), dn();
      break;
    case 5:
      za(t);
      break;
    case 1:
      ge(t.type) && tl(t);
      break;
    case 4:
      Li(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      V(ll, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? nc(e, t, n)
            : (V(Q, Q.current & 1),
              (e = rt(e, t, n)),
              e !== null ? e.sibling : null);
      V(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        V(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ba(e, t, n);
  }
  return rt(e, t, n);
}
var lc, Yo, oc, ic;
lc = function (e, t) {
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
Yo = function () {};
oc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Tt(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ho(e, l)), (r = ho(e, r)), (o = []);
        break;
      case "select":
        (l = Y({}, l, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = yo(e, l)), (r = yo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    So(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Bn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(c, "" + s)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Bn.hasOwnProperty(c)
                  ? (s != null && c === "onScroll" && H("scroll", e),
                    o || u === s || (o = []))
                  : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ic = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
  if (!W)
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
function ue(e) {
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
function Ud(e, t, n) {
  var r = t.pendingProps;
  switch ((Ei(t), t.tag)) {
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
      return ue(t), null;
    case 1:
      return ge(t.type) && el(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mn(),
        B(ve),
        B(ae),
        Ti(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Fe !== null && (ti(Fe), (Fe = null)))),
        Yo(e, t),
        ue(t),
        null
      );
    case 5:
      Oi(t);
      var l = Tt(tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        oc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return ue(t), null;
        }
        if (((e = Tt(Xe.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ke] = t), (r[bn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < On.length; l++) H(On[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              nu(r, o), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              lu(r, o), H("invalid", r);
          }
          So(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Bn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              vr(r), ru(r, o, !0);
              break;
            case "textarea":
              vr(r), ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Rs(n)),
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
            (e[Ke] = t),
            (e[bn] = r),
            lc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ko(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < On.length; l++) H(On[l], e);
                l = r;
                break;
              case "source":
                H("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (l = r);
                break;
              case "details":
                H("toggle", e), (l = r);
                break;
              case "input":
                nu(e, r), (l = ho(e, r)), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Y({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                lu(e, r), (l = yo(e, r)), H("invalid", e);
                break;
              default:
                l = r;
            }
            So(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Fs(e, s)
                  : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Is(e, s))
                    : o === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && Wn(e, s)
                        : typeof s == "number" && Wn(e, "" + s)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Bn.hasOwnProperty(o)
                          ? s != null && o === "onScroll" && H("scroll", e)
                          : s != null && si(e, o, s, i));
              }
            switch (n) {
              case "input":
                vr(e), ru(e, r, !1);
                break;
              case "textarea":
                vr(e), ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
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
                typeof l.onClick == "function" && (e.onclick = br);
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
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = Tt(tr.current)), Tt(Xe.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (o = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (B(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && xe !== null && t.mode & 1 && !(t.flags & 128))
          Ca(), dn(), (t.flags |= 98560), (o = !1);
        else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(g(317));
            o[Ke] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else Fe !== null && (ti(Fe), (Fe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? q === 0 && (q = 3) : Wi())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        mn(), Yo(e, t), e === null && Jn(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return Pi(t.type._context), ue(t), null;
    case 17:
      return ge(t.type) && el(), ue(t), null;
    case 19:
      if ((B(Q), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Nn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ul(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Nn(o, !1),
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
                return V(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            G() > vn &&
            ((t.flags |= 128), (r = !0), Nn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ul(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
            )
              return ue(t), null;
          } else
            2 * G() - o.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = G()),
          (t.sibling = null),
          (n = Q.current),
          V(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        Bi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function Ad(e, t) {
  switch ((Ei(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mn(),
        B(ve),
        B(ae),
        Ti(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Oi(t), null;
    case 13:
      if ((B(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(Q), null;
    case 4:
      return mn(), null;
    case 10:
      return Pi(t.type._context), null;
    case 22:
    case 23:
      return Bi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1,
  se = !1,
  Vd = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function Xo(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Xu = !1;
function Hd(e, t) {
  if (((Oo = Zr), (e = fa()), ki(e))) {
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
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++h === r && (s = i),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (To = { focusedElem: e, selectionRange: n }, Zr = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var E = k.memoizedProps,
                    U = k.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : Ie(t.type, E),
                      U,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
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
                throw Error(g(163));
            }
        } catch (v) {
          X(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (k = Xu), (Xu = !1), k;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Xo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
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
function Go(e) {
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
function uc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), uc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[bn], delete t[Io], delete t[Cd], delete t[_d])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sc(e.return)) return null;
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
function Zo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zo(e, t, n), e = e.sibling; e !== null; ) Zo(e, t, n), (e = e.sibling);
}
function Jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), (e = e.sibling);
}
var re = null,
  De = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) ac(e, t, n), (n = n.sibling);
}
function ac(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || bt(n, t);
    case 6:
      var r = re,
        l = De;
      (re = null),
        it(e, t, n),
        (re = r),
        (De = l),
        re !== null &&
          (De
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (De
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zl(e.parentNode, n)
              : e.nodeType === 1 && Zl(e, n),
            Xn(e))
          : Zl(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = De),
        (re = n.stateNode.containerInfo),
        (De = !0),
        it(e, t, n),
        (re = r),
        (De = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Xo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (bt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          X(n, t, u);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), it(e, t, n), (se = r))
        : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function Zu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vd()),
      t.forEach(function (r) {
        var l = Jd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (re = u.stateNode), (De = !1);
              break e;
            case 3:
              (re = u.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (re = u.stateNode.containerInfo), (De = !0);
              break e;
          }
          u = u.return;
        }
        if (re === null) throw Error(g(160));
        ac(o, i, l), (re = null), (De = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        X(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cc(t, e), (t = t.sibling);
}
function cc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), We(e), r & 4)) {
        try {
          Un(3, e, e.return), _l(3, e);
        } catch (E) {
          X(e, e.return, E);
        }
        try {
          Un(5, e, e.return);
        } catch (E) {
          X(e, e.return, E);
        }
      }
      break;
    case 1:
      Re(t, e), We(e), r & 512 && n !== null && bt(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        We(e),
        r & 512 && n !== null && bt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wn(l, "");
        } catch (E) {
          X(e, e.return, E);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ts(l, o),
              ko(u, i);
            var c = ko(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                m = s[i + 1];
              h === "style"
                ? Fs(l, m)
                : h === "dangerouslySetInnerHTML"
                  ? Is(l, m)
                  : h === "children"
                    ? Wn(l, m)
                    : si(l, h, m, c);
            }
            switch (u) {
              case "input":
                vo(l, o);
                break;
              case "textarea":
                Ms(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? rn(l, !!o.multiple, w, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? rn(l, !!o.multiple, o.defaultValue, !0)
                      : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[bn] = o;
          } catch (E) {
            X(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Re(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (E) {
          X(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xn(t.containerInfo);
        } catch (E) {
          X(e, e.return, E);
        }
      break;
    case 4:
      Re(t, e), We(e);
      break;
    case 13:
      Re(t, e),
        We(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Vi = G())),
        r & 4 && Zu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (c = se) || h), Re(t, e), (se = c)) : Re(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (m = _ = h; _ !== null; ) {
              switch (((p = _), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Un(4, p, p.return);
                  break;
                case 1:
                  bt(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (E) {
                      X(r, n, E);
                    }
                  }
                  break;
                case 5:
                  bt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    qu(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (_ = w)) : qu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ds("display", i)));
              } catch (E) {
                X(e, e.return, E);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (E) {
                X(e, e.return, E);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), We(e), r & 4 && Zu(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wn(l, ""), (r.flags &= -33));
          var o = Gu(e);
          Jo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Gu(e);
          Zo(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      X(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bd(e, t, n) {
  (_ = e), fc(e);
}
function fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || jr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = jr;
        var c = se;
        if (((jr = i), (se = s) && !c))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? bu(l)
                : s !== null
                  ? ((s.return = i), (_ = s))
                  : bu(l);
        for (; o !== null; ) (_ = o), fc(o), (o = o.sibling);
        (_ = l), (jr = u), (se = c);
      }
      Ju(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Ju(e);
  }
}
function Ju(e) {
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
              se || _l(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Iu(t, o, r);
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
                Iu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Xn(m);
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
              throw Error(g(163));
          }
        se || (t.flags & 512 && Go(t));
      } catch (p) {
        X(t, t.return, p);
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
function qu(e) {
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
function bu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (s) {
            X(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              X(t, l, s);
            }
          }
          var o = t.return;
          try {
            Go(t);
          } catch (s) {
            X(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Go(t);
          } catch (s) {
            X(t, i, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var Wd = Math.ceil,
  cl = lt.ReactCurrentDispatcher,
  Ui = lt.ReactCurrentOwner,
  Oe = lt.ReactCurrentBatchConfig,
  F = 0,
  ne = null,
  Z = null,
  le = 0,
  Se = 0,
  en = _t(0),
  q = 0,
  or = null,
  $t = 0,
  Nl = 0,
  Ai = 0,
  An = null,
  me = null,
  Vi = 0,
  vn = 1 / 0,
  Ge = null,
  fl = !1,
  qo = null,
  yt = null,
  zr = !1,
  dt = null,
  dl = 0,
  Vn = 0,
  bo = null,
  Hr = -1,
  Br = 0;
function fe() {
  return F & 6 ? G() : Hr !== -1 ? Hr : (Hr = G());
}
function wt(e) {
  return e.mode & 1
    ? F & 2 && le !== 0
      ? le & -le
      : Pd.transition !== null
        ? (Br === 0 && (Br = Gs()), Br)
        : ((e = $),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : na(e.type))),
          e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Vn) throw ((Vn = 0), (bo = null), Error(g(185)));
  sr(e, n, r),
    (!(F & 2) || e !== ne) &&
      (e === ne && (!(F & 2) && (Nl |= n), q === 4 && ct(e, le)),
      ye(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((vn = G() + 500), xl && Nt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Pf(e, t);
  var r = Gr(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && su(n), t === 1))
      e.tag === 0 ? Nd(es.bind(null, e)) : ka(es.bind(null, e)),
        xd(function () {
          !(F & 6) && Nt();
        }),
        (n = null);
    else {
      switch (Zs(r)) {
        case 1:
          n = pi;
          break;
        case 4:
          n = Ys;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = Xs;
          break;
        default:
          n = Xr;
      }
      n = wc(n, dc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function dc(e, t) {
  if (((Hr = -1), (Br = 0), F & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = Gr(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var o = mc();
    (ne !== e || le !== t) && ((Ge = null), (vn = G() + 500), Mt(e, t));
    do
      try {
        Yd();
        break;
      } catch (u) {
        pc(e, u);
      }
    while (!0);
    Ni(),
      (cl.current = o),
      (F = l),
      Z !== null ? (t = 0) : ((ne = null), (le = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = No(e)), l !== 0 && ((r = l), (t = ei(e, l)))), t === 1)
    )
      throw ((n = or), Mt(e, 0), ct(e, r), ye(e, G()), n);
    if (t === 6) ct(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Qd(l) &&
          ((t = pl(e, r)),
          t === 2 && ((o = No(e)), o !== 0 && ((r = o), (t = ei(e, o)))),
          t === 1))
      )
        throw ((n = or), Mt(e, 0), ct(e, r), ye(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          zt(e, me, Ge);
          break;
        case 3:
          if (
            (ct(e, r), (r & 130023424) === r && ((t = Vi + 500 - G()), 10 < t))
          ) {
            if (Gr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ro(zt.bind(null, e, me, Ge), t);
            break;
          }
          zt(e, me, Ge);
          break;
        case 4:
          if ((ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - $e(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
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
                          : 1960 * Wd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ro(zt.bind(null, e, me, Ge), r);
            break;
          }
          zt(e, me, Ge);
          break;
        case 5:
          zt(e, me, Ge);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return ye(e, G()), e.callbackNode === n ? dc.bind(null, e) : null;
}
function ei(e, t) {
  var n = An;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && ti(t)),
    e
  );
}
function ti(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function Qd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ae(o(), l)) return !1;
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
function ct(e, t) {
  for (
    t &= ~Ai,
      t &= ~Nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $e(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function es(e) {
  if (F & 6) throw Error(g(327));
  an();
  var t = Gr(e, 0);
  if (!(t & 1)) return ye(e, G()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = No(e);
    r !== 0 && ((t = r), (n = ei(e, r)));
  }
  if (n === 1) throw ((n = or), Mt(e, 0), ct(e, t), ye(e, G()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, me, Ge),
    ye(e, G()),
    null
  );
}
function Hi(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((vn = G() + 500), xl && Nt());
  }
}
function Ut(e) {
  dt !== null && dt.tag === 0 && !(F & 6) && an();
  var t = F;
  F |= 1;
  var n = Oe.transition,
    r = $;
  try {
    if (((Oe.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (Oe.transition = n), (F = t), !(F & 6) && Nt();
  }
}
function Bi() {
  (Se = en.current), B(en);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), kd(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Ei(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          mn(), B(ve), B(ae), Ti();
          break;
        case 5:
          Oi(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          B(Q);
          break;
        case 19:
          B(Q);
          break;
        case 10:
          Pi(r.type._context);
          break;
        case 22:
        case 23:
          Bi();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (Z = e = St(e.current, null)),
    (le = Se = t),
    (q = 0),
    (or = null),
    (Ai = Nl = $t = 0),
    (me = An = null),
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
function pc(e, t) {
  do {
    var n = Z;
    try {
      if ((Ni(), (Ur.current = al), sl)) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        ((Ft = 0),
        (te = J = K = null),
        ($n = !1),
        (nr = 0),
        (Ui.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (or = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = le),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = Vu(i);
          if (w !== null) {
            (w.flags &= -257),
              Hu(w, i, u, o, t),
              w.mode & 1 && Au(o, c, t),
              (t = w),
              (s = c);
            var k = t.updateQueue;
            if (k === null) {
              var E = new Set();
              E.add(s), (t.updateQueue = E);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Au(o, c, t), Wi();
              break e;
            }
            s = Error(g(426));
          }
        } else if (W && u.mode & 1) {
          var U = Vu(i);
          if (U !== null) {
            !(U.flags & 65536) && (U.flags |= 256),
              Hu(U, i, u, o, t),
              Ci(hn(s, u));
            break e;
          }
        }
        (o = s = hn(s, u)),
          q !== 4 && (q = 2),
          An === null ? (An = [o]) : An.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Za(o, s, t);
              Ru(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (yt === null || !yt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Ja(o, u, t);
                Ru(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vc(n);
    } catch (y) {
      (t = y), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mc() {
  var e = cl.current;
  return (cl.current = al), e === null ? al : e;
}
function Wi() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ne === null || (!($t & 268435455) && !(Nl & 268435455)) || ct(ne, le);
}
function pl(e, t) {
  var n = F;
  F |= 2;
  var r = mc();
  (ne !== e || le !== t) && ((Ge = null), Mt(e, t));
  do
    try {
      Kd();
      break;
    } catch (l) {
      pc(e, l);
    }
  while (!0);
  if ((Ni(), (F = n), (cl.current = r), Z !== null)) throw Error(g(261));
  return (ne = null), (le = 0), q;
}
function Kd() {
  for (; Z !== null; ) hc(Z);
}
function Yd() {
  for (; Z !== null && !yf(); ) hc(Z);
}
function hc(e) {
  var t = yc(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps),
    t === null ? vc(e) : (Z = t),
    (Ui.current = null);
}
function vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ad(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Z = null);
        return;
      }
    } else if (((n = Ud(n, t, Se)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function zt(e, t, n) {
  var r = $,
    l = Oe.transition;
  try {
    (Oe.transition = null), ($ = 1), Xd(e, t, n, r);
  } finally {
    (Oe.transition = l), ($ = r);
  }
  return null;
}
function Xd(e, t, n, r) {
  do an();
  while (dt !== null);
  if (F & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (jf(e, o),
    e === ne && ((Z = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      wc(Xr, function () {
        return an(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Oe.transition), (Oe.transition = null);
    var i = $;
    $ = 1;
    var u = F;
    (F |= 4),
      (Ui.current = null),
      Hd(e, n),
      cc(n, e),
      md(To),
      (Zr = !!Oo),
      (To = Oo = null),
      (e.current = n),
      Bd(n),
      wf(),
      (F = u),
      ($ = i),
      (Oe.transition = o);
  } else e.current = n;
  if (
    (zr && ((zr = !1), (dt = e), (dl = l)),
    (o = e.pendingLanes),
    o === 0 && (yt = null),
    xf(n.stateNode),
    ye(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw ((fl = !1), (e = qo), (qo = null), e);
  return (
    dl & 1 && e.tag !== 0 && an(),
    (o = e.pendingLanes),
    o & 1 ? (e === bo ? Vn++ : ((Vn = 0), (bo = e))) : (Vn = 0),
    Nt(),
    null
  );
}
function an() {
  if (dt !== null) {
    var e = Zs(dl),
      t = Oe.transition,
      n = $;
    try {
      if (((Oe.transition = null), ($ = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (dl = 0), F & 6)) throw Error(g(331));
        var l = F;
        for (F |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (_ = c; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (_ = m);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var p = h.sibling,
                        w = h.return;
                      if ((uc(h), h === c)) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (_ = p);
                        break;
                      }
                      _ = w;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var E = k.child;
                if (E !== null) {
                  k.child = null;
                  do {
                    var U = E.sibling;
                    (E.sibling = null), (E = U);
                  } while (E !== null);
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
                    Un(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (_ = f);
                break e;
              }
              _ = o.return;
            }
        }
        var a = e.current;
        for (_ = a; _ !== null; ) {
          i = _;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (_ = d);
          else
            e: for (i = a; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _l(9, u);
                  }
                } catch (y) {
                  X(u, u.return, y);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (_ = v);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((F = l), Nt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (Oe.transition = t);
    }
  }
  return !1;
}
function ts(e, t, n) {
  (t = hn(n, t)),
    (t = Za(e, t, 1)),
    (e = gt(e, t, 1)),
    (t = fe()),
    e !== null && (sr(e, 1, t), ye(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) ts(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ts(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yt === null || !yt.has(r)))
        ) {
          (e = hn(n, e)),
            (e = Ja(t, e, 1)),
            (t = gt(t, e, 1)),
            (e = fe()),
            t !== null && (sr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (q === 4 || (q === 3 && (le & 130023424) === le && 500 > G() - Vi)
        ? Mt(e, 0)
        : (Ai |= n)),
    ye(e, t);
}
function gc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = fe();
  (e = nt(e, t)), e !== null && (sr(e, t, n), ye(e, n));
}
function Zd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gc(e, n);
}
function Jd(e, t) {
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
      throw Error(g(314));
  }
  r !== null && r.delete(t), gc(e, n);
}
var yc;
yc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), $d(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), W && t.flags & 1048576 && xa(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vr(e, t), (e = t.pendingProps);
      var l = fn(t, ae.current);
      sn(t, n), (l = Ri(null, t, r, e, l, n));
      var o = Ii();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((o = !0), tl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            zi(t),
            (l.updater = Cl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Vo(t, r, e, n),
            (t = Wo(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && xi(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = bd(r)),
          (e = Ie(r, e)),
          l)
        ) {
          case 0:
            t = Bo(null, t, r, e, n);
            break e;
          case 1:
            t = Qu(null, t, r, e, n);
            break e;
          case 11:
            t = Bu(null, t, r, e, n);
            break e;
          case 14:
            t = Wu(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Bo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Qu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((tc(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ja(e, t),
          il(t, r, null, n);
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
            (l = hn(Error(g(423)), t)), (t = Ku(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = hn(Error(g(424)), t)), (t = Ku(e, t, r, n, l));
            break e;
          } else
            for (
              xe = vt(t.stateNode.containerInfo.firstChild),
                Ee = t,
                W = !0,
                Fe = null,
                n = Na(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), r === l)) {
            t = rt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        za(t),
        e === null && $o(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Mo(r, l) ? (i = null) : o !== null && Mo(r, o) && (t.flags |= 32),
        ec(e, t),
        ce(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && $o(t), null;
    case 13:
      return nc(e, t, n);
    case 4:
      return (
        Li(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Bu(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          V(ll, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ae(o.value, i)) {
            if (o.children === l.children && !ve.current) {
              t = rt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = be(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Uo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(g(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Uo(i, n, t),
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
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        sn(t, n),
        (l = Te(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ie(r, t.pendingProps)),
        (l = Ie(r.type, l)),
        Wu(e, t, r, l, n)
      );
    case 15:
      return qa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Vr(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), tl(t)) : (e = !1),
        sn(t, n),
        Ga(t, r, l),
        Vo(t, r, l, n),
        Wo(null, t, r, !0, e, n)
      );
    case 19:
      return rc(e, t, n);
    case 22:
      return ba(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function wc(e, t) {
  return Ks(e, t);
}
function qd(e, t, n, r) {
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
function Le(e, t, n, r) {
  return new qd(e, t, n, r);
}
function Qi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bd(e) {
  if (typeof e == "function") return Qi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ci)) return 11;
    if (e === fi) return 14;
  }
  return 2;
}
function St(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
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
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Qi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Wt:
        return Rt(n.children, l, o, t);
      case ai:
        (i = 8), (l |= 8);
        break;
      case co:
        return (
          (e = Le(12, n, t, l | 2)), (e.elementType = co), (e.lanes = o), e
        );
      case fo:
        return (e = Le(13, n, t, l)), (e.elementType = fo), (e.lanes = o), e;
      case po:
        return (e = Le(19, n, t, l)), (e.elementType = po), (e.lanes = o), e;
      case zs:
        return Pl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ps:
              i = 10;
              break e;
            case js:
              i = 9;
              break e;
            case ci:
              i = 11;
              break e;
            case fi:
              i = 14;
              break e;
            case ut:
              (i = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Le(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rt(e, t, n, r) {
  return (e = Le(7, e, r, t)), (e.lanes = n), e;
}
function Pl(e, t, n, r) {
  return (
    (e = Le(22, e, r, t)),
    (e.elementType = zs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function lo(e, t, n) {
  return (e = Le(6, e, null, t)), (e.lanes = n), e;
}
function oo(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ep(e, t, n, r, l) {
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
    (this.eventTimes = Ul(0)),
    (this.expirationTimes = Ul(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ul(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ki(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new ep(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Le(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zi(o),
    e
  );
}
function tp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Sa(e, n, t);
  }
  return t;
}
function kc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Ki(n, r, !0, e, l, o, i, u, s)),
    (e.context = Sc(null)),
    (n = e.current),
    (r = fe()),
    (l = wt(n)),
    (o = be(r, l)),
    (o.callback = t ?? null),
    gt(n, o, l),
    (e.current.lanes = l),
    sr(e, l, r),
    ye(e, r),
    e
  );
}
function jl(e, t, n, r) {
  var l = t.current,
    o = fe(),
    i = wt(l);
  return (
    (n = Sc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = be(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gt(l, t, i)),
    e !== null && (Ue(e, l, i, o), $r(e, l, i)),
    i
  );
}
function ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ns(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yi(e, t) {
  ns(e, t), (e = e.alternate) && ns(e, t);
}
function np() {
  return null;
}
var xc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xi(e) {
  this._internalRoot = e;
}
zl.prototype.render = Xi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  jl(e, t, null, null);
};
zl.prototype.unmount = Xi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      jl(null, e, null, null);
    }),
      (t[tt] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && ta(e);
  }
};
function Gi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function rs() {}
function rp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ml(i);
        o.call(c);
      };
    }
    var i = kc(t, r, e, 0, null, !1, !1, "", rs);
    return (
      (e._reactRootContainer = i),
      (e[tt] = i.current),
      Jn(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ml(s);
      u.call(c);
    };
  }
  var s = Ki(e, 0, !1, null, null, !1, !1, "", rs);
  return (
    (e._reactRootContainer = s),
    (e[tt] = s.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      jl(t, s, n, r);
    }),
    s
  );
}
function Ol(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ml(i);
        u.call(s);
      };
    }
    jl(t, i, e, l);
  } else i = rp(n, t, e, l, r);
  return ml(i);
}
Js = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (mi(t, n | 1), ye(t, G()), !(F & 6) && ((vn = G() + 500), Nt()));
      }
      break;
    case 13:
      Ut(function () {
        var r = nt(e, 1);
        if (r !== null) {
          var l = fe();
          Ue(r, e, 1, l);
        }
      }),
        Yi(e, 1);
  }
};
hi = function (e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ue(t, e, 134217728, n);
    }
    Yi(e, 134217728);
  }
};
qs = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      n = nt(e, t);
    if (n !== null) {
      var r = fe();
      Ue(n, e, t, r);
    }
    Yi(e, t);
  }
};
bs = function () {
  return $;
};
ea = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
Eo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = kl(r);
            if (!l) throw Error(g(90));
            Os(r), vo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ms(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
As = Hi;
Vs = Ut;
var lp = { usingClientEntryPoint: !1, Events: [cr, Xt, kl, $s, Us, Hi] },
  Pn = {
    findFiberByHostInstance: Lt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  op = {
    bundleType: Pn.bundleType,
    version: Pn.version,
    rendererPackageName: Pn.rendererPackageName,
    rendererConfig: Pn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ws(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pn.findFiberByHostInstance || np,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber)
    try {
      (gl = Lr.inject(op)), (Ye = Lr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lp;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gi(t)) throw Error(g(200));
  return tp(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Gi(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = xc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ki(e, 1, !1, null, null, n, !1, r, l)),
    (e[tt] = t.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    new Xi(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = Ws(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Ut(e);
};
_e.hydrate = function (e, t, n) {
  if (!Ll(t)) throw Error(g(200));
  return Ol(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Gi(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = xc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = kc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[tt] = t.current),
    Jn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zl(t);
};
_e.render = function (e, t, n) {
  if (!Ll(t)) throw Error(g(200));
  return Ol(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!Ll(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Ol(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Hi;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ll(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return Ol(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Ec() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec);
    } catch (e) {
      console.error(e);
    }
}
Ec(), (Es.exports = _e);
var ip = Es.exports,
  Cc,
  ls = ip;
(Cc = ls.createRoot), ls.hydrateRoot;
function up(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function os(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? os(Object(n), !0).forEach(function (r) {
          up(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : os(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function sp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ap(e, t) {
  if (e == null) return {};
  var n = sp(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function cp(e, t) {
  return fp(e) || dp(e, t) || pp(e, t) || mp();
}
function fp(e) {
  if (Array.isArray(e)) return e;
}
function dp(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [],
      r = !0,
      l = !1,
      o = void 0;
    try {
      for (
        var i = e[Symbol.iterator](), u;
        !(r = (u = i.next()).done) && (n.push(u.value), !(t && n.length === t));
        r = !0
      );
    } catch (s) {
      (l = !0), (o = s);
    } finally {
      try {
        !r && i.return != null && i.return();
      } finally {
        if (l) throw o;
      }
    }
    return n;
  }
}
function pp(e, t) {
  if (e) {
    if (typeof e == "string") return us(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return us(e, t);
  }
}
function us(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function mp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hp(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ss(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function as(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ss(Object(n), !0).forEach(function (r) {
          hp(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ss(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function vp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return t.reduceRight(function (l, o) {
      return o(l);
    }, r);
  };
}
function Tn(e) {
  return function t() {
    for (
      var n = this, r = arguments.length, l = new Array(r), o = 0;
      o < r;
      o++
    )
      l[o] = arguments[o];
    return l.length >= e.length
      ? e.apply(this, l)
      : function () {
          for (var i = arguments.length, u = new Array(i), s = 0; s < i; s++)
            u[s] = arguments[s];
          return t.apply(n, [].concat(l, u));
        };
  };
}
function hl(e) {
  return {}.toString.call(e).includes("Object");
}
function gp(e) {
  return !Object.keys(e).length;
}
function ir(e) {
  return typeof e == "function";
}
function yp(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function wp(e, t) {
  return (
    hl(t) || kt("changeType"),
    Object.keys(t).some(function (n) {
      return !yp(e, n);
    }) && kt("changeField"),
    t
  );
}
function Sp(e) {
  ir(e) || kt("selectorType");
}
function kp(e) {
  ir(e) || hl(e) || kt("handlerType"),
    hl(e) &&
      Object.values(e).some(function (t) {
        return !ir(t);
      }) &&
      kt("handlersType");
}
function xp(e) {
  e || kt("initialIsRequired"),
    hl(e) || kt("initialType"),
    gp(e) && kt("initialContent");
}
function Ep(e, t) {
  throw new Error(e[t] || e.default);
}
var Cp = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField:
      'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package",
  },
  kt = Tn(Ep)(Cp),
  Or = { changes: wp, selector: Sp, handler: kp, initial: xp };
function _p(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Or.initial(e), Or.handler(t);
  var n = { current: e },
    r = Tn(jp)(n, t),
    l = Tn(Pp)(n),
    o = Tn(Or.changes)(e),
    i = Tn(Np)(n);
  function u() {
    var c =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (h) {
            return h;
          };
    return Or.selector(c), c(n.current);
  }
  function s(c) {
    vp(r, l, o, i)(c);
  }
  return [u, s];
}
function Np(e, t) {
  return ir(t) ? t(e.current) : t;
}
function Pp(e, t) {
  return (e.current = as(as({}, e.current), t)), t;
}
function jp(e, t, n) {
  return (
    ir(t)
      ? t(e.current)
      : Object.keys(n).forEach(function (r) {
          var l;
          return (l = t[r]) === null || l === void 0
            ? void 0
            : l.call(t, e.current[r]);
        }),
    n
  );
}
var zp = { create: _p },
  Lp = {
    paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs" },
  };
function Op(e) {
  return function t() {
    for (
      var n = this, r = arguments.length, l = new Array(r), o = 0;
      o < r;
      o++
    )
      l[o] = arguments[o];
    return l.length >= e.length
      ? e.apply(this, l)
      : function () {
          for (var i = arguments.length, u = new Array(i), s = 0; s < i; s++)
            u[s] = arguments[s];
          return t.apply(n, [].concat(l, u));
        };
  };
}
function Tp(e) {
  return {}.toString.call(e).includes("Object");
}
function Mp(e) {
  return (
    e || cs("configIsRequired"),
    Tp(e) || cs("configType"),
    e.urls ? (Rp(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function Rp() {
  console.warn(_c.deprecation);
}
function Ip(e, t) {
  throw new Error(e[t] || e.default);
}
var _c = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
  },
  cs = Op(Ip)(_c),
  Dp = { config: Mp },
  Fp = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return function (l) {
      return n.reduceRight(function (o, i) {
        return i(o);
      }, l);
    };
  };
function Nc(e, t) {
  return (
    Object.keys(t).forEach(function (n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], Nc(e[n], t[n]));
    }),
    is(is({}, e), t)
  );
}
var $p = { type: "cancelation", msg: "operation is manually canceled" };
function io(e) {
  var t = !1,
    n = new Promise(function (r, l) {
      e.then(function (o) {
        return t ? l($p) : r(o);
      }),
        e.catch(l);
    });
  return (
    (n.cancel = function () {
      return (t = !0);
    }),
    n
  );
}
var Up = zp.create({
    config: Lp,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  Pc = cp(Up, 2),
  dr = Pc[0],
  Tl = Pc[1];
function Ap(e) {
  var t = Dp.config(e),
    n = t.monaco,
    r = ap(t, ["monaco"]);
  Tl(function (l) {
    return { config: Nc(l.config, r), monaco: n };
  });
}
function Vp() {
  var e = dr(function (t) {
    var n = t.monaco,
      r = t.isInitialized,
      l = t.resolve;
    return { monaco: n, isInitialized: r, resolve: l };
  });
  if (!e.isInitialized) {
    if ((Tl({ isInitialized: !0 }), e.monaco))
      return e.resolve(e.monaco), io(uo);
    if (window.monaco && window.monaco.editor)
      return jc(window.monaco), e.resolve(window.monaco), io(uo);
    Fp(Hp, Wp)(Qp);
  }
  return io(uo);
}
function Hp(e) {
  return document.body.appendChild(e);
}
function Bp(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function Wp(e) {
  var t = dr(function (r) {
      var l = r.config,
        o = r.reject;
      return { config: l, reject: o };
    }),
    n = Bp("".concat(t.config.paths.vs, "/loader.js"));
  return (
    (n.onload = function () {
      return e();
    }),
    (n.onerror = t.reject),
    n
  );
}
function Qp() {
  var e = dr(function (n) {
      var r = n.config,
        l = n.resolve,
        o = n.reject;
      return { config: r, resolve: l, reject: o };
    }),
    t = window.require;
  t.config(e.config),
    t(
      ["vs/editor/editor.main"],
      function (n) {
        jc(n), e.resolve(n);
      },
      function (n) {
        e.reject(n);
      },
    );
}
function jc(e) {
  dr().monaco || Tl({ monaco: e });
}
function Kp() {
  return dr(function (e) {
    var t = e.monaco;
    return t;
  });
}
var uo = new Promise(function (e, t) {
    return Tl({ resolve: e, reject: t });
  }),
  zc = { config: Ap, init: Vp, __getMonacoInstance: Kp },
  Yp = {
    wrapper: { display: "flex", position: "relative", textAlign: "initial" },
    fullWidth: { width: "100%" },
    hide: { display: "none" },
  },
  so = Yp,
  Xp = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  Gp = Xp;
function Zp({ children: e }) {
  return nn.createElement("div", { style: Gp.container }, e);
}
var Jp = Zp,
  qp = Jp;
function bp({
  width: e,
  height: t,
  isEditorReady: n,
  loading: r,
  _ref: l,
  className: o,
  wrapperProps: i,
}) {
  return nn.createElement(
    "section",
    { style: { ...so.wrapper, width: e, height: t }, ...i },
    !n && nn.createElement(qp, null, r),
    nn.createElement("div", {
      ref: l,
      style: { ...so.fullWidth, ...(!n && so.hide) },
      className: o,
    }),
  );
}
var em = bp,
  Lc = O.memo(em);
function tm(e) {
  O.useEffect(e, []);
}
var Oc = tm;
function nm(e, t, n = !0) {
  let r = O.useRef(!0);
  O.useEffect(
    r.current || !n
      ? () => {
          r.current = !1;
        }
      : e,
    t,
  );
}
var ke = nm;
function Hn() {}
function tn(e, t, n, r) {
  return rm(e, r) || lm(e, t, n, r);
}
function rm(e, t) {
  return e.editor.getModel(Tc(e, t));
}
function lm(e, t, n, r) {
  return e.editor.createModel(t, n, r ? Tc(e, r) : void 0);
}
function Tc(e, t) {
  return e.Uri.parse(t);
}
function om({
  original: e,
  modified: t,
  language: n,
  originalLanguage: r,
  modifiedLanguage: l,
  originalModelPath: o,
  modifiedModelPath: i,
  keepCurrentOriginalModel: u = !1,
  keepCurrentModifiedModel: s = !1,
  theme: c = "light",
  loading: h = "Loading...",
  options: m = {},
  height: p = "100%",
  width: w = "100%",
  className: k,
  wrapperProps: E = {},
  beforeMount: U = Hn,
  onMount: f = Hn,
}) {
  let [a, d] = O.useState(!1),
    [v, y] = O.useState(!0),
    x = O.useRef(null),
    S = O.useRef(null),
    P = O.useRef(null),
    I = O.useRef(f),
    N = O.useRef(U),
    b = O.useRef(!1);
  Oc(() => {
    let T = zc.init();
    return (
      T.then((A) => (S.current = A) && y(!1)).catch(
        (A) =>
          (A == null ? void 0 : A.type) !== "cancelation" &&
          console.error("Monaco initialization: error:", A),
      ),
      () => (x.current ? ot() : T.cancel())
    );
  }),
    ke(
      () => {
        if (x.current && S.current) {
          let T = x.current.getOriginalEditor(),
            A = tn(S.current, e || "", r || n || "text", o || "");
          A !== T.getModel() && T.setModel(A);
        }
      },
      [o],
      a,
    ),
    ke(
      () => {
        if (x.current && S.current) {
          let T = x.current.getModifiedEditor(),
            A = tn(S.current, t || "", l || n || "text", i || "");
          A !== T.getModel() && T.setModel(A);
        }
      },
      [i],
      a,
    ),
    ke(
      () => {
        let T = x.current.getModifiedEditor();
        T.getOption(S.current.editor.EditorOption.readOnly)
          ? T.setValue(t || "")
          : t !== T.getValue() &&
            (T.executeEdits("", [
              {
                range: T.getModel().getFullModelRange(),
                text: t || "",
                forceMoveMarkers: !0,
              },
            ]),
            T.pushUndoStop());
      },
      [t],
      a,
    ),
    ke(
      () => {
        var T, A;
        (A = (T = x.current) == null ? void 0 : T.getModel()) == null ||
          A.original.setValue(e || "");
      },
      [e],
      a,
    ),
    ke(
      () => {
        let { original: T, modified: A } = x.current.getModel();
        S.current.editor.setModelLanguage(T, r || n || "text"),
          S.current.editor.setModelLanguage(A, l || n || "text");
      },
      [n, r, l],
      a,
    ),
    ke(
      () => {
        var T;
        (T = S.current) == null || T.editor.setTheme(c);
      },
      [c],
      a,
    ),
    ke(
      () => {
        var T;
        (T = x.current) == null || T.updateOptions(m);
      },
      [m],
      a,
    );
  let Ve = O.useCallback(() => {
      var Pe;
      if (!S.current) return;
      N.current(S.current);
      let T = tn(S.current, e || "", r || n || "text", o || ""),
        A = tn(S.current, t || "", l || n || "text", i || "");
      (Pe = x.current) == null || Pe.setModel({ original: T, modified: A });
    }, [n, t, l, e, r, o, i]),
    He = O.useCallback(() => {
      var T;
      !b.current &&
        P.current &&
        ((x.current = S.current.editor.createDiffEditor(P.current, {
          automaticLayout: !0,
          ...m,
        })),
        Ve(),
        (T = S.current) == null || T.editor.setTheme(c),
        d(!0),
        (b.current = !0));
    }, [m, c, Ve]);
  O.useEffect(() => {
    a && I.current(x.current, S.current);
  }, [a]),
    O.useEffect(() => {
      !v && !a && He();
    }, [v, a, He]);
  function ot() {
    var A, Pe, C, L;
    let T = (A = x.current) == null ? void 0 : A.getModel();
    u || (Pe = T == null ? void 0 : T.original) == null || Pe.dispose(),
      s || (C = T == null ? void 0 : T.modified) == null || C.dispose(),
      (L = x.current) == null || L.dispose();
  }
  return nn.createElement(Lc, {
    width: w,
    height: p,
    isEditorReady: a,
    loading: h,
    _ref: P,
    className: k,
    wrapperProps: E,
  });
}
var im = om;
O.memo(im);
function um(e) {
  let t = O.useRef();
  return (
    O.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var sm = um,
  Tr = new Map();
function am({
  defaultValue: e,
  defaultLanguage: t,
  defaultPath: n,
  value: r,
  language: l,
  path: o,
  theme: i = "light",
  line: u,
  loading: s = "Loading...",
  options: c = {},
  overrideServices: h = {},
  saveViewState: m = !0,
  keepCurrentModel: p = !1,
  width: w = "100%",
  height: k = "100%",
  className: E,
  wrapperProps: U = {},
  beforeMount: f = Hn,
  onMount: a = Hn,
  onChange: d,
  onValidate: v = Hn,
}) {
  let [y, x] = O.useState(!1),
    [S, P] = O.useState(!0),
    I = O.useRef(null),
    N = O.useRef(null),
    b = O.useRef(null),
    Ve = O.useRef(a),
    He = O.useRef(f),
    ot = O.useRef(),
    T = O.useRef(r),
    A = sm(o),
    Pe = O.useRef(!1),
    C = O.useRef(!1);
  Oc(() => {
    let j = zc.init();
    return (
      j
        .then((M) => (I.current = M) && P(!1))
        .catch(
          (M) =>
            (M == null ? void 0 : M.type) !== "cancelation" &&
            console.error("Monaco initialization: error:", M),
        ),
      () => (N.current ? R() : j.cancel())
    );
  }),
    ke(
      () => {
        var M, ee, we, Be;
        let j = tn(I.current, e || r || "", t || l || "", o || n || "");
        j !== ((M = N.current) == null ? void 0 : M.getModel()) &&
          (m &&
            Tr.set(A, (ee = N.current) == null ? void 0 : ee.saveViewState()),
          (we = N.current) == null || we.setModel(j),
          m && ((Be = N.current) == null || Be.restoreViewState(Tr.get(o))));
      },
      [o],
      y,
    ),
    ke(
      () => {
        var j;
        (j = N.current) == null || j.updateOptions(c);
      },
      [c],
      y,
    ),
    ke(
      () => {
        !N.current ||
          r === void 0 ||
          (N.current.getOption(I.current.editor.EditorOption.readOnly)
            ? N.current.setValue(r)
            : r !== N.current.getValue() &&
              ((C.current = !0),
              N.current.executeEdits("", [
                {
                  range: N.current.getModel().getFullModelRange(),
                  text: r,
                  forceMoveMarkers: !0,
                },
              ]),
              N.current.pushUndoStop(),
              (C.current = !1)));
      },
      [r],
      y,
    ),
    ke(
      () => {
        var M, ee;
        let j = (M = N.current) == null ? void 0 : M.getModel();
        j &&
          l &&
          ((ee = I.current) == null || ee.editor.setModelLanguage(j, l));
      },
      [l],
      y,
    ),
    ke(
      () => {
        var j;
        u !== void 0 && ((j = N.current) == null || j.revealLine(u));
      },
      [u],
      y,
    ),
    ke(
      () => {
        var j;
        (j = I.current) == null || j.editor.setTheme(i);
      },
      [i],
      y,
    );
  let L = O.useCallback(() => {
    var j;
    if (!(!b.current || !I.current) && !Pe.current) {
      He.current(I.current);
      let M = o || n,
        ee = tn(I.current, r || e || "", t || l || "", M || "");
      (N.current =
        (j = I.current) == null
          ? void 0
          : j.editor.create(
              b.current,
              { model: ee, automaticLayout: !0, ...c },
              h,
            )),
        m && N.current.restoreViewState(Tr.get(M)),
        I.current.editor.setTheme(i),
        u !== void 0 && N.current.revealLine(u),
        x(!0),
        (Pe.current = !0);
    }
  }, [e, t, n, r, l, o, c, h, m, i, u]);
  O.useEffect(() => {
    y && Ve.current(N.current, I.current);
  }, [y]),
    O.useEffect(() => {
      !S && !y && L();
    }, [S, y, L]),
    (T.current = r),
    O.useEffect(() => {
      var j, M;
      y &&
        d &&
        ((j = ot.current) == null || j.dispose(),
        (ot.current =
          (M = N.current) == null
            ? void 0
            : M.onDidChangeModelContent((ee) => {
                C.current || d(N.current.getValue(), ee);
              })));
    }, [y, d]),
    O.useEffect(() => {
      if (y) {
        let j = I.current.editor.onDidChangeMarkers((M) => {
          var we;
          let ee = (we = N.current.getModel()) == null ? void 0 : we.uri;
          if (ee && M.find((Be) => Be.path === ee.path)) {
            let Be = I.current.editor.getModelMarkers({ resource: ee });
            v == null || v(Be);
          }
        });
        return () => {
          j == null || j.dispose();
        };
      }
      return () => {};
    }, [y, v]);
  function R() {
    var j, M;
    (j = ot.current) == null || j.dispose(),
      p
        ? m && Tr.set(o, N.current.saveViewState())
        : (M = N.current.getModel()) == null || M.dispose(),
      N.current.dispose();
  }
  return nn.createElement(Lc, {
    width: w,
    height: k,
    isEditorReady: y,
    loading: s,
    _ref: b,
    className: E,
    wrapperProps: U,
  });
}
var cm = am,
  fm = O.memo(cm),
  dm = fm;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var pm = {
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
 */ const mm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ml = (e, t) => {
    const n = O.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: u = "",
          children: s,
          ...c
        },
        h,
      ) =>
        O.createElement(
          "svg",
          {
            ref: h,
            ...pm,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${mm(e)}`, u].join(" "),
            ...c,
          },
          [
            ...t.map(([m, p]) => O.createElement(m, p)),
            ...(Array.isArray(s) ? s : [s]),
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
 */ const hm = Ml("FilePlus", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M9 15h6", key: "cctwl0" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vm = Ml("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ym = Ml("Terminal", [
    ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
  ]),
  fs = `// SwiftUI Example
import SwiftUI

struct ContentView: View {
    @State private var name = ""
    
    var body: some View {
        VStack {
            Text("Hello, SwiftUI!")
                .font(.largeTitle)
                .padding()
            
            TextField("Enter your name", text: $name)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
            
            if !name.isEmpty {
                Text("Welcome, \\(name)!")
                    .font(.title)
                    .foregroundColor(.blue)
            }
            
            Button(action: {
                print("Button tapped!")
            }) {
                Text("Tap Me!")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
        }
        .padding()
    }
}`;
function wm({ code: e, onCodeChange: t }) {
  const n = O.useRef(null);
  O.useEffect(() => {
    n.current && (e || (t(""), n.current.setValue("")));
  }, [e, t]);
  const r = (o) => {
      (n.current = o), e || (o.setValue(fs), t(fs));
    },
    l = (o) => {
      o !== void 0 && t(o);
    };
  return z.jsxs("div", {
    className: "h-full flex flex-col",
    children: [
      z.jsxs("div", {
        className:
          "bg-[#1e1e1e] p-4 flex items-center justify-between border-b border-gray-700",
        children: [
          z.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              z.jsxs("div", {
                className: "flex space-x-2",
                children: [
                  z.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-red-500",
                  }),
                  z.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-yellow-500",
                  }),
                  z.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-green-500",
                  }),
                ],
              }),
              z.jsx("span", {
                className: "ml-4 text-gray-300 text-sm",
                children: "MyApp.swift",
              }),
            ],
          }),
          z.jsx("button", {
            className: "text-gray-400 hover:text-white",
          }),
        ],
      }),
      z.jsx("div", {
        className: "flex-1",
        children: z.jsx(dm, {
          height: "100%",
          defaultLanguage: "swift",
          theme: "vs-dark",
          value: e,
          onChange: l,
          onMount: r,
          options: {
            fontSize: 14,
            minimap: { enabled: !1 },
            scrollBeyondLastLine: !1,
            lineNumbers: "on",
            roundedSelection: !1,
            cursorStyle: "line",
            automaticLayout: !0,
            tabSize: 4,
            wordWrap: "on",
            folding: !0,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 3,
            showUnused: !1,
            renderLineHighlight: "all",
            scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
          },
        }),
      }),
    ],
  });
}
function Sm({ state: e }) {
  const { isLoading: t, output: n, error: r } = e;
  return z.jsxs("div", {
    className: "h-full flex flex-col bg-gray-900 text-white",
    children: [
      z.jsxs("div", {
        className:
          "bg-[#1e1e1e] p-4 flex items-center justify-between border-b border-gray-700",
        children: [
          z.jsx("span", {
            className: "text-sm text-gray-300",
            children: "SwiftUI Preview",
          }),
          z.jsx(ym, { size: 18, className: "text-gray-400" }),
        ],
      }),
      z.jsx("div", {
        className: "flex-1 flex items-center justify-center bg-[#1e1e1e]",
        children: z.jsxs("div", {
          className:
            "relative w-[300px] h-[600px] bg-black rounded-[45px] shadow-2xl border-4 border-gray-800",
          children: [
            z.jsx("div", {
              className:
                "absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20",
            }),
            z.jsx("div", {
              className:
                "absolute top-[20px] left-[12px] right-[12px] bottom-[20px] bg-white rounded-[30px] overflow-hidden",
              children: t
                ? z.jsx("div", {
                    className: "flex items-center justify-center h-full",
                    children: z.jsx("div", {
                      className:
                        "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500",
                    }),
                  })
                : r
                  ? z.jsx("div", {
                      className: "p-4 text-red-500 text-sm",
                      children: r,
                    })
                  : z.jsx("div", {
                      className: "h-full overflow-auto",
                      children: z.jsx("div", {
                        className:
                          "min-h-full w-full flex flex-col items-center justify-start p-4 text-black antialiased [&_*]:text-black",
                        dangerouslySetInnerHTML: { __html: n.preview },
                      }),
                    }),
            }),
            z.jsx("div", {
              className:
                "absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[120px] h-[4px] bg-gray-600 rounded-full",
            }),
          ],
        }),
      }),
      z.jsx("div", {
        className:
          "h-[300px] bg-[#1e1e1e] border-t border-gray-700 overflow-auto",
        children: z.jsx("div", {
          className: "p-4 font-mono text-sm space-y-1",
          children: n.console.map((l, o) =>
            z.jsx(
              "div",
              {
                className: "text-gray-300 whitespace-pre-wrap break-words",
                children: l,
              },
              o,
            ),
          ),
        }),
      }),
    ],
  });
}
const km = "sk-proj-eaFkE9RZXKC9aIqRHXoxT3BlbkFJ5iRlrZ6Kge6rDQbSMUrW",
  xm = "gpt-4o",
  Em = "2000",
  Cm = "0.3";
async function _m(e) {
  try {
    const t = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${km}`,
      },
      body: JSON.stringify({
        model: xm,
        messages: [
          {
            role: "system",
            content:
              "You are a Swift and SwiftUI expert that converts Swift/SwiftUI code to equivalent HTML/Tailwind CSS. \n            Follow these rules:\n            1. Convert SwiftUI views to semantic HTML with Tailwind CSS\n            2. Maintain visual hierarchy and styling\n            3. Implement basic interactivity where possible\n            4. Return response in this format:\n               ```html\n               <!-- HTML/Tailwind output -->\n               ```\n               ```console\n               // Console messages, errors, or print statements\n               ```\n            5. No explanations, just the code blocks",
          },
          { role: "user", content: e },
        ],
        max_tokens: Number(Em),
        temperature: Number(Cm),
      }),
    });
    if (!t.ok) throw new Error("OpenAI API request failed");
    const r = (await t.json()).choices[0].message.content,
      l = r.match(/```html([\s\S]*?)```/),
      o = r.match(/```console([\s\S]*?)```/),
      i = l
        ? l[1].trim()
        : '<div class="flex items-center justify-center h-full"><div class="text-red-500">Invalid SwiftUI code or conversion error</div></div>',
      u = o
        ? o[1]
            .trim()
            .split(
              `
`,
            )
            .map((s) => s.trim())
        : ["No console output available"];
    return { htmlContent: i, consoleOutput: u };
  } catch (t) {
    return (
      console.error("Error converting Swift code:", t),
      {
        htmlContent:
          '<div class="flex items-center justify-center h-full"><div class="text-red-500">Failed to process SwiftUI code</div></div>',
        consoleOutput: ["Error: Failed to connect to OpenAI API"],
      }
    );
  }
}
async function Nm(e) {
  try {
    const { htmlContent: t, consoleOutput: n } = await _m(e);
    return { isLoading: !1, output: { console: n, preview: t } };
  } catch {
    return {
      isLoading: !1,
      output: {
        console: ["Error: Failed to simulate Swift code"],
        preview: "",
      },
      error: "Failed to process Swift code",
    };
  }
}
function Pm() {
  const [e, t] = O.useState(""),
    [n, r] = O.useState({
      isLoading: !1,
      output: {
        console: [
          "Welcome to Xcode",
          "Type your code and click Run Code to execute",
        ],
        preview: "",
      },
    }),
    l = async () => {
      if (!e.trim()) {
        r({
          isLoading: !1,
          output: { console: ["Error: No code to execute"], preview: "" },
          error: "Please enter some Swift code first",
        });
        return;
      }
      r((i) => ({ ...i, isLoading: !0 }));
      try {
        const i = await Nm(e);
        r(i);
      } catch {
        r({
          isLoading: !1,
          output: { console: ["Error executing code"], preview: "" },
          error: "Failed to execute code",
        });
      }
    },
    o = () => {
      t(""),
        r({
          isLoading: !1,
          output: {
            console: [
              "Welcome to Xode",
              "Type your code and click Run Code to execute",
            ],
            preview: "",
          },
        });
    };
  return z.jsxs("div", {
    className: "min-h-screen bg-[#1e1e1e] flex flex-col",
    children: [
      z.jsx("header", {
        className: "bg-[#2d2d2d] border-b border-gray-700 p-4",
        children: z.jsxs("div", {
          className: "max-w-7xl mx-auto flex items-center justify-between",
          children: [
            z.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                z.jsx("h1", {
                  className: "text-white text-xl font-semibold",
                  children: "Xcode",
                }),
                z.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    z.jsxs("button", {
                      onClick: o,
                      className:
                        "bg-gray-700 hover:bg-gray-600 text-white px-4 py-1.5 rounded-md text-sm flex items-center space-x-2 transition-colors",
                      children: [
                        z.jsx(hm, { size: 16 }),
                        z.jsx("span", { children: "New Code" }),
                      ],
                    }),
                    z.jsxs("button", {
                      onClick: l,
                      disabled: n.isLoading,
                      className:
                        "bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm flex items-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: [
                        z.jsx(vm, { size: 16 }),
                        z.jsx("span", {
                          children: n.isLoading ? "Running..." : "Run Code",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            z.jsx("div", {
              className: "text-gray-400 text-sm",
              children: "SwiftUI Simulator",
            }),
          ],
        }),
      }),
      z.jsxs("main", {
        className: "flex-1 flex",
        children: [
          z.jsx("div", {
            className: "flex-1 border-r border-gray-700",
            children: z.jsx(wm, { code: e, onCodeChange: t }),
          }),
          z.jsx("div", {
            className: "w-[600px]",
            children: z.jsx(Sm, { state: n }),
          }),
        ],
      }),
    ],
  });
}
Cc(document.getElementById("root")).render(
  z.jsx(O.StrictMode, { children: z.jsx(Pm, {}) }),
);
