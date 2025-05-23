﻿(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Df = { exports: {} },
  go = {},
  _f = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kr = Symbol.for("react.element"),
  ym = Symbol.for("react.portal"),
  vm = Symbol.for("react.fragment"),
  wm = Symbol.for("react.strict_mode"),
  Sm = Symbol.for("react.profiler"),
  xm = Symbol.for("react.provider"),
  Pm = Symbol.for("react.context"),
  km = Symbol.for("react.forward_ref"),
  Tm = Symbol.for("react.suspense"),
  Cm = Symbol.for("react.memo"),
  Em = Symbol.for("react.lazy"),
  au = Symbol.iterator;
function Am(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (au && e[au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Nf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jf = Object.assign,
  Ff = {};
function Kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ff),
    (this.updater = n || Nf);
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Of() {}
Of.prototype = Kn.prototype;
function Nl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ff),
    (this.updater = n || Nf);
}
var jl = (Nl.prototype = new Of());
jl.constructor = Nl;
jf(jl, Kn.prototype);
jl.isPureReactComponent = !0;
var uu = Array.isArray,
  If = Object.prototype.hasOwnProperty,
  Fl = { current: null },
  zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      If.call(t, r) && !zf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Kr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Fl.current,
  };
}
function Mm(e, t) {
  return {
    $$typeof: Kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ol(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kr;
}
function Rm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cu = /\/+/g;
function Bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rm("" + e.key)
    : t.toString(36);
}
function ki(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kr:
          case ym:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Bo(s, 0) : r),
      uu(i)
        ? ((n = ""),
          e != null && (n = e.replace(cu, "$&/") + "/"),
          ki(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ol(i) &&
            (i = Mm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(cu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), uu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Bo(o, l);
      s += ki(o, t, n, a, i);
    }
  else if (((a = Am(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Bo(o, l++)), (s += ki(o, t, n, a, i));
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
  return s;
}
function ni(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ki(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Lm(e) {
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
var ve = { current: null },
  Ti = { transition: null },
  Vm = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: Ti,
    ReactCurrentOwner: Fl,
  };
function Uf() {
  throw Error("act(...) is not supported in production builds of React.");
}
N.Children = {
  map: ni,
  forEach: function (e, t, n) {
    ni(
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
      ni(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ni(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ol(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
N.Component = Kn;
N.Fragment = vm;
N.Profiler = Sm;
N.PureComponent = Nl;
N.StrictMode = wm;
N.Suspense = Tm;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vm;
N.act = Uf;
N.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = jf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Fl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      If.call(t, a) &&
        !zf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Kr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xm, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = Bf;
N.createFactory = function (e) {
  var t = Bf.bind(null, e);
  return (t.type = e), t;
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: km, render: e };
};
N.isValidElement = Ol;
N.lazy = function (e) {
  return { $$typeof: Em, _payload: { _status: -1, _result: e }, _init: Lm };
};
N.memo = function (e, t) {
  return { $$typeof: Cm, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = Ti.transition;
  Ti.transition = {};
  try {
    e();
  } finally {
    Ti.transition = t;
  }
};
N.unstable_act = Uf;
N.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
N.useContext = function (e) {
  return ve.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
N.useId = function () {
  return ve.current.useId();
};
N.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
N.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
N.useRef = function (e) {
  return ve.current.useRef(e);
};
N.useState = function (e) {
  return ve.current.useState(e);
};
N.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function () {
  return ve.current.useTransition();
};
N.version = "18.3.1";
_f.exports = N;
var E = _f.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dm = E,
  _m = Symbol.for("react.element"),
  Nm = Symbol.for("react.fragment"),
  jm = Object.prototype.hasOwnProperty,
  Fm = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Om = { key: !0, ref: !0, __self: !0, __source: !0 };
function $f(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) jm.call(t, r) && !Om.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: _m,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Fm.current,
  };
}
go.Fragment = Nm;
go.jsx = $f;
go.jsxs = $f;
Df.exports = go;
var R = Df.exports,
  Wf = { exports: {} },
  Le = {},
  Hf = { exports: {} },
  Kf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, D) {
    var _ = C.length;
    C.push(D);
    e: for (; 0 < _; ) {
      var Y = (_ - 1) >>> 1,
        ne = C[Y];
      if (0 < i(ne, D)) (C[Y] = D), (C[_] = ne), (_ = Y);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var D = C[0],
      _ = C.pop();
    if (_ !== D) {
      C[0] = _;
      e: for (var Y = 0, ne = C.length, ei = ne >>> 1; Y < ei; ) {
        var $t = 2 * (Y + 1) - 1,
          zo = C[$t],
          Wt = $t + 1,
          ti = C[Wt];
        if (0 > i(zo, _))
          Wt < ne && 0 > i(ti, zo)
            ? ((C[Y] = ti), (C[Wt] = _), (Y = Wt))
            : ((C[Y] = zo), (C[$t] = _), (Y = $t));
        else if (Wt < ne && 0 > i(ti, _)) (C[Y] = ti), (C[Wt] = _), (Y = Wt);
        else break e;
      }
    }
    return D;
  }
  function i(C, D) {
    var _ = C.sortIndex - D.sortIndex;
    return _ !== 0 ? _ : C.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(C) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= C)
        r(u), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(u);
    }
  }
  function w(C) {
    if (((v = !1), m(C), !y))
      if (n(a) !== null) (y = !0), br(S);
      else {
        var D = n(u);
        D !== null && J(w, D.startTime - C);
      }
  }
  function S(C, D) {
    (y = !1), v && ((v = !1), p(k), (k = -1)), (g = !0);
    var _ = d;
    try {
      for (
        m(D), f = n(a);
        f !== null && (!(f.expirationTime > D) || (C && !te()));

      ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var ne = Y(f.expirationTime <= D);
          (D = e.unstable_now()),
            typeof ne == "function" ? (f.callback = ne) : f === n(a) && r(a),
            m(D);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ei = !0;
      else {
        var $t = n(u);
        $t !== null && J(w, $t.startTime - D), (ei = !1);
      }
      return ei;
    } finally {
      (f = null), (d = _), (g = !1);
    }
  }
  var T = !1,
    A = null,
    k = -1,
    j = 5,
    V = -1;
  function te() {
    return !(e.unstable_now() - V < j);
  }
  function mt() {
    if (A !== null) {
      var C = e.unstable_now();
      V = C;
      var D = !0;
      try {
        D = A(!0, C);
      } finally {
        D ? Ut() : ((T = !1), (A = null));
      }
    } else T = !1;
  }
  var Ut;
  if (typeof h == "function")
    Ut = function () {
      h(mt);
    };
  else if (typeof MessageChannel < "u") {
    var Zn = new MessageChannel(),
      lu = Zn.port2;
    (Zn.port1.onmessage = mt),
      (Ut = function () {
        lu.postMessage(null);
      });
  } else
    Ut = function () {
      P(mt, 0);
    };
  function br(C) {
    (A = C), T || ((T = !0), Ut());
  }
  function J(C, D) {
    k = P(function () {
      C(e.unstable_now());
    }, D);
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
      y || g || ((y = !0), br(S));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (j = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var _ = d;
      d = D;
      try {
        return C();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, D) {
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
      var _ = d;
      d = C;
      try {
        return D();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (C, D, _) {
      var Y = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? Y + _ : Y))
          : (_ = Y),
        C)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = _ + ne),
        (C = {
          id: c++,
          callback: D,
          priorityLevel: C,
          startTime: _,
          expirationTime: ne,
          sortIndex: -1,
        }),
        _ > Y
          ? ((C.sortIndex = _),
            t(u, C),
            n(a) === null &&
              C === n(u) &&
              (v ? (p(k), (k = -1)) : (v = !0), J(w, _ - Y)))
          : ((C.sortIndex = ne), t(a, C), y || g || ((y = !0), br(S))),
        C
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (C) {
      var D = d;
      return function () {
        var _ = d;
        d = D;
        try {
          return C.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(Kf);
Hf.exports = Kf;
var Im = Hf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm = E,
  Me = Im;
function x(e) {
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
var Gf = new Set(),
  Tr = {};
function an(e, t) {
  jn(e, t), jn(e + "Capture", t);
}
function jn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) Gf.add(t[e]);
}
var ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Cs = Object.prototype.hasOwnProperty,
  Bm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fu = {},
  du = {};
function Um(e) {
  return Cs.call(du, e)
    ? !0
    : Cs.call(fu, e)
      ? !1
      : Bm.test(e)
        ? (du[e] = !0)
        : ((fu[e] = !0), !1);
}
function $m(e, t, n, r) {
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
function Wm(e, t, n, r) {
  if (t === null || typeof t > "u" || $m(e, t, n, r)) return !0;
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
function we(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Il = /[\-:]([a-z])/g;
function zl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Il, zl);
    ae[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Il, zl);
    ae[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Il, zl);
  ae[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bl(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Wm(t, n, i, r) && (n = null),
    r || i === null
      ? Um(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ri = Symbol.for("react.element"),
  dn = Symbol.for("react.portal"),
  hn = Symbol.for("react.fragment"),
  Ul = Symbol.for("react.strict_mode"),
  Es = Symbol.for("react.profiler"),
  Qf = Symbol.for("react.provider"),
  Yf = Symbol.for("react.context"),
  $l = Symbol.for("react.forward_ref"),
  As = Symbol.for("react.suspense"),
  Ms = Symbol.for("react.suspense_list"),
  Wl = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  Xf = Symbol.for("react.offscreen"),
  hu = Symbol.iterator;
function qn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hu && e[hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  Uo;
function sr(e) {
  if (Uo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Uo = (t && t[1]) || "";
    }
  return (
    `
` +
    Uo +
    e
  );
}
var $o = !1;
function Wo(e, t) {
  if (!e || $o) return "";
  $o = !0;
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
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    ($o = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function Hm(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr("Lazy");
    case 13:
      return sr("Suspense");
    case 19:
      return sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wo(e.type, !1)), e;
    case 11:
      return (e = Wo(e.type.render, !1)), e;
    case 1:
      return (e = Wo(e.type, !0)), e;
    default:
      return "";
  }
}
function Rs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hn:
      return "Fragment";
    case dn:
      return "Portal";
    case Es:
      return "Profiler";
    case Ul:
      return "StrictMode";
    case As:
      return "Suspense";
    case Ms:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yf:
        return (e.displayName || "Context") + ".Consumer";
      case Qf:
        return (e._context.displayName || "Context") + ".Provider";
      case $l:
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
          (t = e.displayName || null), t !== null ? t : Rs(e.type) || "Memo"
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return Rs(e(t));
        } catch {}
    }
  return null;
}
function Km(e) {
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
      return Rs(t);
    case 8:
      return t === Ul ? "StrictMode" : "Mode";
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
function Dt(e) {
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
function Zf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Gm(e) {
  var t = Zf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
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
function ii(e) {
  e._valueTracker || (e._valueTracker = Gm(e));
}
function qf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ii(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ls(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Jf(e, t) {
  (t = t.checked), t != null && Bl(e, "checked", t, !1);
}
function Vs(e, t) {
  Jf(e, t);
  var n = Dt(t.value),
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
    ? Ds(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ds(e, t.type, Dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mu(e, t, n) {
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
function Ds(e, t, n) {
  (t !== "number" || Ii(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function Rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _s(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Dt(n) };
}
function bf(e, t) {
  var n = Dt(t.value),
    r = Dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ed(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ns(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ed(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var oi,
  td = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        oi = oi || document.createElement("div"),
          oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = oi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var dr = {
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
  Qm = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function (e) {
  Qm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dr[t] = dr[e]);
  });
});
function nd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (dr.hasOwnProperty(e) && dr[e])
      ? ("" + t).trim()
      : t + "px";
}
function rd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = nd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Ym = G(
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
function js(e, t) {
  if (t) {
    if (Ym[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Fs(e, t) {
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
var Os = null;
function Hl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Is = null,
  Ln = null,
  Vn = null;
function vu(e) {
  if ((e = Yr(e))) {
    if (typeof Is != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = xo(t)), Is(e.stateNode, e.type, t));
  }
}
function id(e) {
  Ln ? (Vn ? Vn.push(e) : (Vn = [e])) : (Ln = e);
}
function od() {
  if (Ln) {
    var e = Ln,
      t = Vn;
    if (((Vn = Ln = null), vu(e), t)) for (e = 0; e < t.length; e++) vu(t[e]);
  }
}
function sd(e, t) {
  return e(t);
}
function ld() {}
var Ho = !1;
function ad(e, t, n) {
  if (Ho) return e(t, n);
  Ho = !0;
  try {
    return sd(e, t, n);
  } finally {
    (Ho = !1), (Ln !== null || Vn !== null) && (ld(), od());
  }
}
function Er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xo(n);
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var zs = !1;
if (ct)
  try {
    var Jn = {};
    Object.defineProperty(Jn, "passive", {
      get: function () {
        zs = !0;
      },
    }),
      window.addEventListener("test", Jn, Jn),
      window.removeEventListener("test", Jn, Jn);
  } catch {
    zs = !1;
  }
function Xm(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var hr = !1,
  zi = null,
  Bi = !1,
  Bs = null,
  Zm = {
    onError: function (e) {
      (hr = !0), (zi = e);
    },
  };
function qm(e, t, n, r, i, o, s, l, a) {
  (hr = !1), (zi = null), Xm.apply(Zm, arguments);
}
function Jm(e, t, n, r, i, o, s, l, a) {
  if ((qm.apply(this, arguments), hr)) {
    if (hr) {
      var u = zi;
      (hr = !1), (zi = null);
    } else throw Error(x(198));
    Bi || ((Bi = !0), (Bs = u));
  }
}
function un(e) {
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
function ud(e) {
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
function wu(e) {
  if (un(e) !== e) throw Error(x(188));
}
function bm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = un(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wu(i), e;
        if (o === r) return wu(i), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function cd(e) {
  return (e = bm(e)), e !== null ? fd(e) : null;
}
function fd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dd = Me.unstable_scheduleCallback,
  Su = Me.unstable_cancelCallback,
  eg = Me.unstable_shouldYield,
  tg = Me.unstable_requestPaint,
  Z = Me.unstable_now,
  ng = Me.unstable_getCurrentPriorityLevel,
  Kl = Me.unstable_ImmediatePriority,
  hd = Me.unstable_UserBlockingPriority,
  Ui = Me.unstable_NormalPriority,
  rg = Me.unstable_LowPriority,
  pd = Me.unstable_IdlePriority,
  yo = null,
  Ze = null;
function ig(e) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function")
    try {
      Ze.onCommitFiberRoot(yo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : lg,
  og = Math.log,
  sg = Math.LN2;
function lg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((og(e) / sg) | 0)) | 0;
}
var si = 64,
  li = 4194304;
function ar(e) {
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
function $i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = ar(l)) : ((o &= s), o !== 0 && (r = ar(o)));
  } else (s = n & ~i), s !== 0 ? (r = ar(s)) : o !== 0 && (r = ar(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - He(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ag(e, t) {
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
function ug(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - He(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = ag(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Us(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function md() {
  var e = si;
  return (si <<= 1), !(si & 4194240) && (si = 64), e;
}
function Ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n);
}
function cg(e, t) {
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
    var i = 31 - He(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Gl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var O = 0;
function gd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yd,
  Ql,
  vd,
  wd,
  Sd,
  $s = !1,
  ai = [],
  Tt = null,
  Ct = null,
  Et = null,
  Ar = new Map(),
  Mr = new Map(),
  St = [],
  fg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function xu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      Ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mr.delete(t.pointerId);
  }
}
function bn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Yr(t)), t !== null && Ql(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function dg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Tt = bn(Tt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ct = bn(Ct, e, t, n, r, i)), !0;
    case "mouseover":
      return (Et = bn(Et, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ar.set(o, bn(Ar.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Mr.set(o, bn(Mr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function xd(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = un(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ud(n)), t !== null)) {
          (e.blockedOn = t),
            Sd(e.priority, function () {
              vd(n);
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
function Ci(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Os = r), n.target.dispatchEvent(r), (Os = null);
    } else return (t = Yr(n)), t !== null && Ql(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Pu(e, t, n) {
  Ci(e) && n.delete(t);
}
function hg() {
  ($s = !1),
    Tt !== null && Ci(Tt) && (Tt = null),
    Ct !== null && Ci(Ct) && (Ct = null),
    Et !== null && Ci(Et) && (Et = null),
    Ar.forEach(Pu),
    Mr.forEach(Pu);
}
function er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $s ||
      (($s = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, hg)));
}
function Rr(e) {
  function t(i) {
    return er(i, e);
  }
  if (0 < ai.length) {
    er(ai[0], e);
    for (var n = 1; n < ai.length; n++) {
      var r = ai[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Tt !== null && er(Tt, e),
      Ct !== null && er(Ct, e),
      Et !== null && er(Et, e),
      Ar.forEach(t),
      Mr.forEach(t),
      n = 0;
    n < St.length;
    n++
  )
    (r = St[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < St.length && ((n = St[0]), n.blockedOn === null); )
    xd(n), n.blockedOn === null && St.shift();
}
var Dn = pt.ReactCurrentBatchConfig,
  Wi = !0;
function pg(e, t, n, r) {
  var i = O,
    o = Dn.transition;
  Dn.transition = null;
  try {
    (O = 1), Yl(e, t, n, r);
  } finally {
    (O = i), (Dn.transition = o);
  }
}
function mg(e, t, n, r) {
  var i = O,
    o = Dn.transition;
  Dn.transition = null;
  try {
    (O = 4), Yl(e, t, n, r);
  } finally {
    (O = i), (Dn.transition = o);
  }
}
function Yl(e, t, n, r) {
  if (Wi) {
    var i = Ws(e, t, n, r);
    if (i === null) ts(e, t, r, Hi, n), xu(e, r);
    else if (dg(i, e, t, n, r)) r.stopPropagation();
    else if ((xu(e, r), t & 4 && -1 < fg.indexOf(e))) {
      for (; i !== null; ) {
        var o = Yr(i);
        if (
          (o !== null && yd(o),
          (o = Ws(e, t, n, r)),
          o === null && ts(e, t, r, Hi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ts(e, t, r, null, n);
  }
}
var Hi = null;
function Ws(e, t, n, r) {
  if (((Hi = null), (e = Hl(r)), (e = Xt(e)), e !== null))
    if (((t = un(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ud(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Hi = e), null;
}
function Pd(e) {
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
      switch (ng()) {
        case Kl:
          return 1;
        case hd:
          return 4;
        case Ui:
        case rg:
          return 16;
        case pd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null,
  Xl = null,
  Ei = null;
function kd() {
  if (Ei) return Ei;
  var e,
    t = Xl,
    n = t.length,
    r,
    i = "value" in Pt ? Pt.value : Pt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ei = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ai(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ui() {
  return !0;
}
function ku() {
  return !1;
}
function Ve(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ui
        : ku),
      (this.isPropagationStopped = ku),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ui));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ui));
      },
      persist: function () {},
      isPersistent: ui,
    }),
    t
  );
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zl = Ve(Gn),
  Qr = G({}, Gn, { view: 0, detail: 0 }),
  gg = Ve(Qr),
  Go,
  Qo,
  tr,
  vo = G({}, Qr, {
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
    getModifierState: ql,
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
        : (e !== tr &&
            (tr && e.type === "mousemove"
              ? ((Go = e.screenX - tr.screenX), (Qo = e.screenY - tr.screenY))
              : (Qo = Go = 0),
            (tr = e)),
          Go);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qo;
    },
  }),
  Tu = Ve(vo),
  yg = G({}, vo, { dataTransfer: 0 }),
  vg = Ve(yg),
  wg = G({}, Qr, { relatedTarget: 0 }),
  Yo = Ve(wg),
  Sg = G({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xg = Ve(Sg),
  Pg = G({}, Gn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kg = Ve(Pg),
  Tg = G({}, Gn, { data: 0 }),
  Cu = Ve(Tg),
  Cg = {
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
  Eg = {
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
  Ag = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ag[e]) ? !!t[e] : !1;
}
function ql() {
  return Mg;
}
var Rg = G({}, Qr, {
    key: function (e) {
      if (e.key) {
        var t = Cg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ai(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Eg[e.keyCode] || "Unidentified"
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
    getModifierState: ql,
    charCode: function (e) {
      return e.type === "keypress" ? Ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ai(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Lg = Ve(Rg),
  Vg = G({}, vo, {
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
  Eu = Ve(Vg),
  Dg = G({}, Qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ql,
  }),
  _g = Ve(Dg),
  Ng = G({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jg = Ve(Ng),
  Fg = G({}, vo, {
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
  Og = Ve(Fg),
  Ig = [9, 13, 27, 32],
  Jl = ct && "CompositionEvent" in window,
  pr = null;
ct && "documentMode" in document && (pr = document.documentMode);
var zg = ct && "TextEvent" in window && !pr,
  Td = ct && (!Jl || (pr && 8 < pr && 11 >= pr)),
  Au = " ",
  Mu = !1;
function Cd(e, t) {
  switch (e) {
    case "keyup":
      return Ig.indexOf(t.keyCode) !== -1;
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
function Ed(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pn = !1;
function Bg(e, t) {
  switch (e) {
    case "compositionend":
      return Ed(t);
    case "keypress":
      return t.which !== 32 ? null : ((Mu = !0), Au);
    case "textInput":
      return (e = t.data), e === Au && Mu ? null : e;
    default:
      return null;
  }
}
function Ug(e, t) {
  if (pn)
    return e === "compositionend" || (!Jl && Cd(e, t))
      ? ((e = kd()), (Ei = Xl = Pt = null), (pn = !1), e)
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
      return Td && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $g = {
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
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$g[e.type] : t === "textarea";
}
function Ad(e, t, n, r) {
  id(r),
    (t = Ki(t, "onChange")),
    0 < t.length &&
      ((n = new Zl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var mr = null,
  Lr = null;
function Wg(e) {
  Id(e, 0);
}
function wo(e) {
  var t = yn(e);
  if (qf(t)) return e;
}
function Hg(e, t) {
  if (e === "change") return t;
}
var Md = !1;
if (ct) {
  var Xo;
  if (ct) {
    var Zo = "oninput" in document;
    if (!Zo) {
      var Lu = document.createElement("div");
      Lu.setAttribute("oninput", "return;"),
        (Zo = typeof Lu.oninput == "function");
    }
    Xo = Zo;
  } else Xo = !1;
  Md = Xo && (!document.documentMode || 9 < document.documentMode);
}
function Vu() {
  mr && (mr.detachEvent("onpropertychange", Rd), (Lr = mr = null));
}
function Rd(e) {
  if (e.propertyName === "value" && wo(Lr)) {
    var t = [];
    Ad(t, Lr, e, Hl(e)), ad(Wg, t);
  }
}
function Kg(e, t, n) {
  e === "focusin"
    ? (Vu(), (mr = t), (Lr = n), mr.attachEvent("onpropertychange", Rd))
    : e === "focusout" && Vu();
}
function Gg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return wo(Lr);
}
function Qg(e, t) {
  if (e === "click") return wo(t);
}
function Yg(e, t) {
  if (e === "input" || e === "change") return wo(t);
}
function Xg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : Xg;
function Vr(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Cs.call(t, i) || !Ge(e[i], t[i])) return !1;
  }
  return !0;
}
function Du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _u(e, t) {
  var n = Du(e);
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
    n = Du(n);
  }
}
function Ld(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ld(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Vd() {
  for (var e = window, t = Ii(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ii(e.document);
  }
  return t;
}
function bl(e) {
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
function Zg(e) {
  var t = Vd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ld(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bl(n)) {
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
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = _u(n, o));
        var s = _u(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
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
var qg = ct && "documentMode" in document && 11 >= document.documentMode,
  mn = null,
  Hs = null,
  gr = null,
  Ks = !1;
function Nu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ks ||
    mn == null ||
    mn !== Ii(r) ||
    ((r = mn),
    "selectionStart" in r && bl(r)
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
    (gr && Vr(gr, r)) ||
      ((gr = r),
      (r = Ki(Hs, "onSelect")),
      0 < r.length &&
        ((t = new Zl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mn))));
}
function ci(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var gn = {
    animationend: ci("Animation", "AnimationEnd"),
    animationiteration: ci("Animation", "AnimationIteration"),
    animationstart: ci("Animation", "AnimationStart"),
    transitionend: ci("Transition", "TransitionEnd"),
  },
  qo = {},
  Dd = {};
ct &&
  ((Dd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gn.animationend.animation,
    delete gn.animationiteration.animation,
    delete gn.animationstart.animation),
  "TransitionEvent" in window || delete gn.transitionend.transition);
function So(e) {
  if (qo[e]) return qo[e];
  if (!gn[e]) return e;
  var t = gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dd) return (qo[e] = t[n]);
  return e;
}
var _d = So("animationend"),
  Nd = So("animationiteration"),
  jd = So("animationstart"),
  Fd = So("transitionend"),
  Od = new Map(),
  ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ot(e, t) {
  Od.set(e, t), an(t, [e]);
}
for (var Jo = 0; Jo < ju.length; Jo++) {
  var bo = ju[Jo],
    Jg = bo.toLowerCase(),
    bg = bo[0].toUpperCase() + bo.slice(1);
  Ot(Jg, "on" + bg);
}
Ot(_d, "onAnimationEnd");
Ot(Nd, "onAnimationIteration");
Ot(jd, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Fd, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
an(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
an(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
an("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
an(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
an(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
an(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ur =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function Fu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jm(r, t, void 0, e), (e.currentTarget = null);
}
function Id(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Fu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Fu(i, l, u), (o = a);
        }
    }
  }
  if (Bi) throw ((e = Bs), (Bi = !1), (Bs = null), e);
}
function B(e, t) {
  var n = t[Zs];
  n === void 0 && (n = t[Zs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zd(t, e, 2, !1), n.add(r));
}
function es(e, t, n) {
  var r = 0;
  t && (r |= 4), zd(n, e, r, t);
}
var fi = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[fi]) {
    (e[fi] = !0),
      Gf.forEach(function (n) {
        n !== "selectionchange" && (ey.has(n) || es(n, !1, e), es(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fi] || ((t[fi] = !0), es("selectionchange", !1, t));
  }
}
function zd(e, t, n, r) {
  switch (Pd(t)) {
    case 1:
      var i = pg;
      break;
    case 4:
      i = mg;
      break;
    default:
      i = Yl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !zs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function ts(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Xt(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  ad(function () {
    var u = o,
      c = Hl(n),
      f = [];
    e: {
      var d = Od.get(e);
      if (d !== void 0) {
        var g = Zl,
          y = e;
        switch (e) {
          case "keypress":
            if (Ai(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Lg;
            break;
          case "focusin":
            (y = "focus"), (g = Yo);
            break;
          case "focusout":
            (y = "blur"), (g = Yo);
            break;
          case "beforeblur":
          case "afterblur":
            g = Yo;
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
            g = Tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = vg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = _g;
            break;
          case _d:
          case Nd:
          case jd:
            g = xg;
            break;
          case Fd:
            g = jg;
            break;
          case "scroll":
            g = gg;
            break;
          case "wheel":
            g = Og;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = kg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Eu;
        }
        var v = (t & 4) !== 0,
          P = !v && e === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = Er(h, p)), w != null && v.push(_r(h, w, m)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Os &&
            (y = n.relatedTarget || n.fromElement) &&
            (Xt(y) || y[ft]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Xt(y) : null),
              y !== null &&
                ((P = un(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Tu),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Eu),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (P = g == null ? d : yn(g)),
            (m = y == null ? d : yn(y)),
            (d = new v(w, h + "leave", g, n, c)),
            (d.target = P),
            (d.relatedTarget = m),
            (w = null),
            Xt(c) === u &&
              ((v = new v(p, h + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = P),
              (w = v)),
            (P = w),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = fn(m)) h++;
              for (m = 0, w = p; w; w = fn(w)) m++;
              for (; 0 < h - m; ) (v = fn(v)), h--;
              for (; 0 < m - h; ) (p = fn(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = fn(v)), (p = fn(p));
              }
              v = null;
            }
          else v = null;
          g !== null && Ou(f, d, g, v, !1),
            y !== null && P !== null && Ou(f, P, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? yn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var S = Hg;
        else if (Ru(d))
          if (Md) S = Yg;
          else {
            S = Gg;
            var T = Kg;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = Qg);
        if (S && (S = S(e, u))) {
          Ad(f, S, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            Ds(d, "number", d.value);
      }
      switch (((T = u ? yn(u) : window), e)) {
        case "focusin":
          (Ru(T) || T.contentEditable === "true") &&
            ((mn = T), (Hs = u), (gr = null));
          break;
        case "focusout":
          gr = Hs = mn = null;
          break;
        case "mousedown":
          Ks = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ks = !1), Nu(f, n, c);
          break;
        case "selectionchange":
          if (qg) break;
        case "keydown":
        case "keyup":
          Nu(f, n, c);
      }
      var A;
      if (Jl)
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
        pn
          ? Cd(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Td &&
          n.locale !== "ko" &&
          (pn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && pn && (A = kd())
            : ((Pt = c),
              (Xl = "value" in Pt ? Pt.value : Pt.textContent),
              (pn = !0))),
        (T = Ki(u, k)),
        0 < T.length &&
          ((k = new Cu(k, e, null, n, c)),
          f.push({ event: k, listeners: T }),
          A ? (k.data = A) : ((A = Ed(n)), A !== null && (k.data = A)))),
        (A = zg ? Bg(e, n) : Ug(e, n)) &&
          ((u = Ki(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Cu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = A)));
    }
    Id(f, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Er(e, n)),
      o != null && r.unshift(_r(e, o, i)),
      (o = Er(e, t)),
      o != null && r.push(_r(e, o, i))),
      (e = e.return);
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Er(n, o)), a != null && s.unshift(_r(n, a, l)))
        : i || ((a = Er(n, o)), a != null && s.push(_r(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ty = /\r\n?/g,
  ny = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ty,
      `
`,
    )
    .replace(ny, "");
}
function di(e, t, n) {
  if (((t = Iu(t)), Iu(e) !== t && n)) throw Error(x(425));
}
function Gi() {}
var Gs = null,
  Qs = null;
function Ys(e, t) {
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
var Xs = typeof setTimeout == "function" ? setTimeout : void 0,
  ry = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zu = typeof Promise == "function" ? Promise : void 0,
  iy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zu < "u"
        ? function (e) {
            return zu.resolve(null).then(e).catch(oy);
          }
        : Xs;
function oy(e) {
  setTimeout(function () {
    throw e;
  });
}
function ns(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Rr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Rr(t);
}
function At(e) {
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
function Bu(e) {
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
var Qn = Math.random().toString(36).slice(2),
  Xe = "__reactFiber$" + Qn,
  Nr = "__reactProps$" + Qn,
  ft = "__reactContainer$" + Qn,
  Zs = "__reactEvents$" + Qn,
  sy = "__reactListeners$" + Qn,
  ly = "__reactHandles$" + Qn;
function Xt(e) {
  var t = e[Xe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[Xe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bu(e); e !== null; ) {
          if ((n = e[Xe])) return n;
          e = Bu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[Xe] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function xo(e) {
  return e[Nr] || null;
}
var qs = [],
  vn = -1;
function It(e) {
  return { current: e };
}
function U(e) {
  0 > vn || ((e.current = qs[vn]), (qs[vn] = null), vn--);
}
function z(e, t) {
  vn++, (qs[vn] = e.current), (e.current = t);
}
var _t = {},
  me = It(_t),
  Pe = It(!1),
  nn = _t;
function Fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Qi() {
  U(Pe), U(me);
}
function Uu(e, t, n) {
  if (me.current !== _t) throw Error(x(168));
  z(me, t), z(Pe, n);
}
function Bd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, Km(e) || "Unknown", i));
  return G({}, n, r);
}
function Yi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _t),
    (nn = me.current),
    z(me, e),
    z(Pe, Pe.current),
    !0
  );
}
function $u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Bd(e, t, nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Pe),
      U(me),
      z(me, e))
    : U(Pe),
    z(Pe, n);
}
var tt = null,
  Po = !1,
  rs = !1;
function Ud(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function ay(e) {
  (Po = !0), Ud(e);
}
function zt() {
  if (!rs && tt !== null) {
    rs = !0;
    var e = 0,
      t = O;
    try {
      var n = tt;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tt = null), (Po = !1);
    } catch (i) {
      throw (tt !== null && (tt = tt.slice(e + 1)), dd(Kl, zt), i);
    } finally {
      (O = t), (rs = !1);
    }
  }
  return null;
}
var wn = [],
  Sn = 0,
  Xi = null,
  Zi = 0,
  Ne = [],
  je = 0,
  rn = null,
  nt = 1,
  rt = "";
function Kt(e, t) {
  (wn[Sn++] = Zi), (wn[Sn++] = Xi), (Xi = e), (Zi = t);
}
function $d(e, t, n) {
  (Ne[je++] = nt), (Ne[je++] = rt), (Ne[je++] = rn), (rn = e);
  var r = nt;
  e = rt;
  var i = 32 - He(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - He(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (nt = (1 << (32 - He(t) + i)) | (n << i) | r),
      (rt = o + e);
  } else (nt = (1 << o) | (n << i) | r), (rt = e);
}
function ea(e) {
  e.return !== null && (Kt(e, 1), $d(e, 1, 0));
}
function ta(e) {
  for (; e === Xi; )
    (Xi = wn[--Sn]), (wn[Sn] = null), (Zi = wn[--Sn]), (wn[Sn] = null);
  for (; e === rn; )
    (rn = Ne[--je]),
      (Ne[je] = null),
      (rt = Ne[--je]),
      (Ne[je] = null),
      (nt = Ne[--je]),
      (Ne[je] = null);
}
var Ae = null,
  Ee = null,
  $ = !1,
  We = null;
function Wd(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Ee = At(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = rn !== null ? { id: nt, overflow: rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Js(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bs(e) {
  if ($) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!Wu(e, t)) {
        if (Js(e)) throw Error(x(418));
        t = At(n.nextSibling);
        var r = Ae;
        t && Wu(e, t)
          ? Wd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ae = e));
      }
    } else {
      if (Js(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Ae = e);
    }
  }
}
function Hu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function hi(e) {
  if (e !== Ae) return !1;
  if (!$) return Hu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ys(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (Js(e)) throw (Hd(), Error(x(418)));
    for (; t; ) Wd(e, t), (t = At(t.nextSibling));
  }
  if ((Hu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = At(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ae ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function Hd() {
  for (var e = Ee; e; ) e = At(e.nextSibling);
}
function On() {
  (Ee = Ae = null), ($ = !1);
}
function na(e) {
  We === null ? (We = [e]) : We.push(e);
}
var uy = pt.ReactCurrentBatchConfig;
function nr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Ku(e) {
  var t = e._init;
  return t(e._payload);
}
function Kd(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Vt(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, w) {
    return h === null || h.tag !== 6
      ? ((h = cs(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function a(p, h, m, w) {
    var S = m.type;
    return S === hn
      ? c(p, h, m.props.children, w, m.key)
      : h !== null &&
          (h.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === vt &&
              Ku(S) === h.type))
        ? ((w = i(h, m.props)), (w.ref = nr(p, h, m)), (w.return = p), w)
        : ((w = Ni(m.type, m.key, m.props, null, p.mode, w)),
          (w.ref = nr(p, h, m)),
          (w.return = p),
          w);
  }
  function u(p, h, m, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = fs(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, w, S) {
    return h === null || h.tag !== 7
      ? ((h = en(m, p.mode, w, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = cs("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ri:
          return (
            (m = Ni(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = nr(p, null, h)),
            (m.return = p),
            m
          );
        case dn:
          return (h = fs(h, p.mode, m)), (h.return = p), h;
        case vt:
          var w = h._init;
          return f(p, w(h._payload), m);
      }
      if (lr(h) || qn(h))
        return (h = en(h, p.mode, m, null)), (h.return = p), h;
      pi(p, h);
    }
    return null;
  }
  function d(p, h, m, w) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : l(p, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ri:
          return m.key === S ? a(p, h, m, w) : null;
        case dn:
          return m.key === S ? u(p, h, m, w) : null;
        case vt:
          return (S = m._init), d(p, h, S(m._payload), w);
      }
      if (lr(m) || qn(m)) return S !== null ? null : c(p, h, m, w, null);
      pi(p, m);
    }
    return null;
  }
  function g(p, h, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(m) || null), l(h, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ri:
          return (p = p.get(w.key === null ? m : w.key) || null), a(h, p, w, S);
        case dn:
          return (p = p.get(w.key === null ? m : w.key) || null), u(h, p, w, S);
        case vt:
          var T = w._init;
          return g(p, h, m, T(w._payload), S);
      }
      if (lr(w) || qn(w)) return (p = p.get(m) || null), c(h, p, w, S, null);
      pi(h, w);
    }
    return null;
  }
  function y(p, h, m, w) {
    for (
      var S = null, T = null, A = h, k = (h = 0), j = null;
      A !== null && k < m.length;
      k++
    ) {
      A.index > k ? ((j = A), (A = null)) : (j = A.sibling);
      var V = d(p, A, m[k], w);
      if (V === null) {
        A === null && (A = j);
        break;
      }
      e && A && V.alternate === null && t(p, A),
        (h = o(V, h, k)),
        T === null ? (S = V) : (T.sibling = V),
        (T = V),
        (A = j);
    }
    if (k === m.length) return n(p, A), $ && Kt(p, k), S;
    if (A === null) {
      for (; k < m.length; k++)
        (A = f(p, m[k], w)),
          A !== null &&
            ((h = o(A, h, k)), T === null ? (S = A) : (T.sibling = A), (T = A));
      return $ && Kt(p, k), S;
    }
    for (A = r(p, A); k < m.length; k++)
      (j = g(A, p, k, m[k], w)),
        j !== null &&
          (e && j.alternate !== null && A.delete(j.key === null ? k : j.key),
          (h = o(j, h, k)),
          T === null ? (S = j) : (T.sibling = j),
          (T = j));
    return (
      e &&
        A.forEach(function (te) {
          return t(p, te);
        }),
      $ && Kt(p, k),
      S
    );
  }
  function v(p, h, m, w) {
    var S = qn(m);
    if (typeof S != "function") throw Error(x(150));
    if (((m = S.call(m)), m == null)) throw Error(x(151));
    for (
      var T = (S = null), A = h, k = (h = 0), j = null, V = m.next();
      A !== null && !V.done;
      k++, V = m.next()
    ) {
      A.index > k ? ((j = A), (A = null)) : (j = A.sibling);
      var te = d(p, A, V.value, w);
      if (te === null) {
        A === null && (A = j);
        break;
      }
      e && A && te.alternate === null && t(p, A),
        (h = o(te, h, k)),
        T === null ? (S = te) : (T.sibling = te),
        (T = te),
        (A = j);
    }
    if (V.done) return n(p, A), $ && Kt(p, k), S;
    if (A === null) {
      for (; !V.done; k++, V = m.next())
        (V = f(p, V.value, w)),
          V !== null &&
            ((h = o(V, h, k)), T === null ? (S = V) : (T.sibling = V), (T = V));
      return $ && Kt(p, k), S;
    }
    for (A = r(p, A); !V.done; k++, V = m.next())
      (V = g(A, p, k, V.value, w)),
        V !== null &&
          (e && V.alternate !== null && A.delete(V.key === null ? k : V.key),
          (h = o(V, h, k)),
          T === null ? (S = V) : (T.sibling = V),
          (T = V));
    return (
      e &&
        A.forEach(function (mt) {
          return t(p, mt);
        }),
      $ && Kt(p, k),
      S
    );
  }
  function P(p, h, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === hn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ri:
          e: {
            for (var S = m.key, T = h; T !== null; ) {
              if (T.key === S) {
                if (((S = m.type), S === hn)) {
                  if (T.tag === 7) {
                    n(p, T.sibling),
                      (h = i(T, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === vt &&
                    Ku(S) === T.type)
                ) {
                  n(p, T.sibling),
                    (h = i(T, m.props)),
                    (h.ref = nr(p, T, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            m.type === hn
              ? ((h = en(m.props.children, p.mode, w, m.key)),
                (h.return = p),
                (p = h))
              : ((w = Ni(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = nr(p, h, m)),
                (w.return = p),
                (p = w));
          }
          return s(p);
        case dn:
          e: {
            for (T = m.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = fs(m, p.mode, w)), (h.return = p), (p = h);
          }
          return s(p);
        case vt:
          return (T = m._init), P(p, h, T(m._payload), w);
      }
      if (lr(m)) return y(p, h, m, w);
      if (qn(m)) return v(p, h, m, w);
      pi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = cs(m, p.mode, w)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return P;
}
var In = Kd(!0),
  Gd = Kd(!1),
  qi = It(null),
  Ji = null,
  xn = null,
  ra = null;
function ia() {
  ra = xn = Ji = null;
}
function oa(e) {
  var t = qi.current;
  U(qi), (e._currentValue = t);
}
function el(e, t, n) {
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
function _n(e, t) {
  (Ji = e),
    (ra = xn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (xe = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xn === null)) {
      if (Ji === null) throw Error(x(308));
      (xn = e), (Ji.dependencies = { lanes: 0, firstContext: e });
    } else xn = xn.next = e;
  return t;
}
var Zt = null;
function sa(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function Qd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), sa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    dt(e, r)
  );
}
function dt(e, t) {
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
var wt = !1;
function la(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Yd(e, t) {
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
function ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      dt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), sa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    dt(e, n)
  );
}
function Mi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
  }
}
function Gu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
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
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
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
function bi(e, t, n, r) {
  var i = e.updateQueue;
  wt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = G({}, f, d);
              break e;
            case 2:
              wt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (sn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Qu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(x(191, i));
        i.call(r);
      }
    }
}
var Xr = {},
  qe = It(Xr),
  jr = It(Xr),
  Fr = It(Xr);
function qt(e) {
  if (e === Xr) throw Error(x(174));
  return e;
}
function aa(e, t) {
  switch ((z(Fr, t), z(jr, e), z(qe, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ns(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ns(t, e));
  }
  U(qe), z(qe, t);
}
function zn() {
  U(qe), U(jr), U(Fr);
}
function Xd(e) {
  qt(Fr.current);
  var t = qt(qe.current),
    n = Ns(t, e.type);
  t !== n && (z(jr, e), z(qe, n));
}
function ua(e) {
  jr.current === e && (U(qe), U(jr));
}
var W = It(0);
function eo(e) {
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
var is = [];
function ca() {
  for (var e = 0; e < is.length; e++)
    is[e]._workInProgressVersionPrimary = null;
  is.length = 0;
}
var Ri = pt.ReactCurrentDispatcher,
  os = pt.ReactCurrentBatchConfig,
  on = 0,
  K = null,
  b = null,
  re = null,
  to = !1,
  yr = !1,
  Or = 0,
  cy = 0;
function ue() {
  throw Error(x(321));
}
function fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function da(e, t, n, r, i, o) {
  if (
    ((on = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ri.current = e === null || e.memoizedState === null ? py : my),
    (e = n(r, i)),
    yr)
  ) {
    o = 0;
    do {
      if (((yr = !1), (Or = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (re = b = null),
        (t.updateQueue = null),
        (Ri.current = gy),
        (e = n(r, i));
    } while (yr);
  }
  if (
    ((Ri.current = no),
    (t = b !== null && b.next !== null),
    (on = 0),
    (re = b = K = null),
    (to = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function ha() {
  var e = Or !== 0;
  return (Or = 0), e;
}
function Ye() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (K.memoizedState = re = e) : (re = re.next = e), re;
}
function ze() {
  if (b === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = re === null ? K.memoizedState : re.next;
  if (t !== null) (re = t), (b = e);
  else {
    if (e === null) throw Error(x(310));
    (b = e),
      (e = {
        memoizedState: b.memoizedState,
        baseState: b.baseState,
        baseQueue: b.baseQueue,
        queue: b.queue,
        next: null,
      }),
      re === null ? (K.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ss(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = b,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((on & c) === c)
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
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (K.lanes |= c),
          (sn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Ge(r, t.memoizedState) || (xe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (K.lanes |= o), (sn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ls(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ge(o, t.memoizedState) || (xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Zd() {}
function qd(e, t) {
  var n = K,
    r = ze(),
    i = t(),
    o = !Ge(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (xe = !0)),
    (r = r.queue),
    pa(eh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zr(9, bd.bind(null, n, r, i, t), void 0, null),
      ie === null)
    )
      throw Error(x(349));
    on & 30 || Jd(n, t, i);
  }
  return i;
}
function Jd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function bd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), th(t) && nh(e);
}
function eh(e, t, n) {
  return n(function () {
    th(t) && nh(e);
  });
}
function th(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function nh(e) {
  var t = dt(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Yu(e) {
  var t = Ye();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = hy.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function zr(e, t, n, r) {
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
function rh() {
  return ze().memoizedState;
}
function Li(e, t, n, r) {
  var i = Ye();
  (K.flags |= e),
    (i.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ko(e, t, n, r) {
  var i = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var s = b.memoizedState;
    if (((o = s.destroy), r !== null && fa(r, s.deps))) {
      i.memoizedState = zr(t, n, o, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = zr(1 | t, n, o, r));
}
function Xu(e, t) {
  return Li(8390656, 8, e, t);
}
function pa(e, t) {
  return ko(2048, 8, e, t);
}
function ih(e, t) {
  return ko(4, 2, e, t);
}
function oh(e, t) {
  return ko(4, 4, e, t);
}
function sh(e, t) {
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
function lh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ko(4, 4, sh.bind(null, t, e), n)
  );
}
function ma() {}
function ah(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uh(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ch(e, t, n) {
  return on & 21
    ? (Ge(n, t) || ((n = md()), (K.lanes |= n), (sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function fy(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = os.transition;
  os.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (os.transition = r);
  }
}
function fh() {
  return ze().memoizedState;
}
function dy(e, t, n) {
  var r = Lt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dh(e))
  )
    hh(t, n);
  else if (((n = Qd(e, t, n, r)), n !== null)) {
    var i = ye();
    Ke(n, e, r, i), ph(n, t, r);
  }
}
function hy(e, t, n) {
  var r = Lt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dh(e)) hh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ge(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), sa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qd(e, t, i, r)),
      n !== null && ((i = ye()), Ke(n, e, r, i), ph(n, t, r));
  }
}
function dh(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function hh(e, t) {
  yr = to = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ph(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
  }
}
var no = {
    readContext: Ie,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  py = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (Ye().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: Xu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Li(4194308, 4, sh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Li(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Li(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ye();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ye();
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
        (e = e.dispatch = dy.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ye();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yu,
    useDebugValue: ma,
    useDeferredValue: function (e) {
      return (Ye().memoizedState = e);
    },
    useTransition: function () {
      var e = Yu(!1),
        t = e[0];
      return (e = fy.bind(null, e[1])), (Ye().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = Ye();
      if ($) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(x(349));
        on & 30 || Jd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Xu(eh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        zr(9, bd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ye(),
        t = ie.identifierPrefix;
      if ($) {
        var n = rt,
          r = nt;
        (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  my = {
    readContext: Ie,
    useCallback: ah,
    useContext: Ie,
    useEffect: pa,
    useImperativeHandle: lh,
    useInsertionEffect: ih,
    useLayoutEffect: oh,
    useMemo: uh,
    useReducer: ss,
    useRef: rh,
    useState: function () {
      return ss(Ir);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = ze();
      return ch(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = ss(Ir)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Zd,
    useSyncExternalStore: qd,
    useId: fh,
    unstable_isNewReconciler: !1,
  },
  gy = {
    readContext: Ie,
    useCallback: ah,
    useContext: Ie,
    useEffect: pa,
    useImperativeHandle: lh,
    useInsertionEffect: ih,
    useLayoutEffect: oh,
    useMemo: uh,
    useReducer: ls,
    useRef: rh,
    useState: function () {
      return ls(Ir);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = ze();
      return b === null ? (t.memoizedState = e) : ch(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = ls(Ir)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Zd,
    useSyncExternalStore: qd,
    useId: fh,
    unstable_isNewReconciler: !1,
  };
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function tl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var To = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? un(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Lt(e),
      o = ot(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Mt(e, o, i)),
      t !== null && (Ke(t, e, i, r), Mi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Lt(e),
      o = ot(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Mt(e, o, i)),
      t !== null && (Ke(t, e, i, r), Mi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = Lt(e),
      i = ot(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Mt(e, i, r)),
      t !== null && (Ke(t, e, r, n), Mi(t, e, r));
  },
};
function Zu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Vr(n, r) || !Vr(i, o)
        : !0
  );
}
function mh(e, t, n) {
  var r = !1,
    i = _t,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ie(o))
      : ((i = ke(t) ? nn : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Fn(e, i) : _t)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = To),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function qu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && To.enqueueReplaceState(t, t.state, null);
}
function nl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), la(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ie(o))
    : ((o = ke(t) ? nn : me.current), (i.context = Fn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (tl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && To.enqueueReplaceState(i, i.state, null),
      bi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function as(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yy = typeof WeakMap == "function" ? WeakMap : Map;
function gh(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      io || ((io = !0), (hl = r)), rl(e, t);
    }),
    n
  );
}
function yh(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        rl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        rl(e, t),
          typeof r != "function" &&
            (Rt === null ? (Rt = new Set([this])) : Rt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yy();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Vy.bind(null, e, t, n)), t.then(e, e));
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
function ec(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ot(-1, 1)), (t.tag = 2), Mt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vy = pt.ReactCurrentOwner,
  xe = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Gd(t, null, n, r) : In(t, e.child, n, r);
}
function tc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    _n(t, i),
    (r = da(e, t, n, r, o, i)),
    (n = ha()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ht(e, t, i))
      : ($ && n && ea(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function nc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ka(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), vh(e, t, o, r, i))
      : ((e = Ni(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vr), n(s, r) && e.ref === t.ref)
    )
      return ht(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Vt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Vr(o, r) && e.ref === t.ref)
      if (((xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (xe = !0);
      else return (t.lanes = e.lanes), ht(e, t, i);
  }
  return il(e, t, n, r, i);
}
function wh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(kn, Ce),
        (Ce |= n);
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
          z(kn, Ce),
          (Ce |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(kn, Ce),
        (Ce |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(kn, Ce),
      (Ce |= r);
  return ge(e, t, i, n), t.child;
}
function Sh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function il(e, t, n, r, i) {
  var o = ke(n) ? nn : me.current;
  return (
    (o = Fn(t, o)),
    _n(t, i),
    (n = da(e, t, n, r, o, i)),
    (r = ha()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ht(e, t, i))
      : ($ && r && ea(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function rc(e, t, n, r, i) {
  if (ke(n)) {
    var o = !0;
    Yi(t);
  } else o = !1;
  if ((_n(t, i), t.stateNode === null))
    Vi(e, t), mh(t, n, r), nl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ie(u))
      : ((u = ke(n) ? nn : me.current), (u = Fn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && qu(t, s, r, u)),
      (wt = !1);
    var d = t.memoizedState;
    (s.state = d),
      bi(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Pe.current || wt
        ? (typeof c == "function" && (tl(t, n, c, r), (a = t.memoizedState)),
          (l = wt || Zu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Yd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ue(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ie(a))
        : ((a = ke(n) ? nn : me.current), (a = Fn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && qu(t, s, r, a)),
      (wt = !1),
      (d = t.memoizedState),
      (s.state = d),
      bi(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Pe.current || wt
      ? (typeof g == "function" && (tl(t, n, g, r), (y = t.memoizedState)),
        (u = wt || Zu(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ol(e, t, n, r, o, i);
}
function ol(e, t, n, r, i, o) {
  Sh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && $u(t, n, !1), ht(e, t, o);
  (r = t.stateNode), (vy.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = In(t, e.child, null, o)), (t.child = In(t, null, l, o)))
      : ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && $u(t, n, !0),
    t.child
  );
}
function xh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Uu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Uu(e, t.context, !1),
    aa(e, t.containerInfo);
}
function ic(e, t, n, r, i) {
  return On(), na(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var sl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ll(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ph(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(W, i & 1),
    e === null)
  )
    return (
      bs(t),
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
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ao(s, r, 0, null)),
              (e = en(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ll(n)),
              (t.memoizedState = sl),
              e)
            : ga(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return wy(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Vt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Vt(l, o)) : ((o = en(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ll(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = sl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Vt(o, { mode: "visible", children: r.children })),
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
function ga(e, t) {
  return (
    (t = Ao({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function mi(e, t, n, r) {
  return (
    r !== null && na(r),
    In(t, e.child, null, n),
    (e = ga(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wy(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = as(Error(x(422)))), mi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Ao({ mode: "visible", children: r.children }, i, 0, null)),
          (o = en(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && In(t, e.child, null, s),
          (t.child.memoizedState = ll(s)),
          (t.memoizedState = sl),
          o);
  if (!(t.mode & 1)) return mi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(x(419))), (r = as(o, r, void 0)), mi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), xe || l)) {
    if (((r = ie), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), dt(e, i), Ke(r, e, i, -1));
    }
    return Pa(), (r = as(Error(x(421)))), mi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ee = At(i.nextSibling)),
      (Ae = t),
      ($ = !0),
      (We = null),
      e !== null &&
        ((Ne[je++] = nt),
        (Ne[je++] = rt),
        (Ne[je++] = rn),
        (nt = e.id),
        (rt = e.overflow),
        (rn = t)),
      (t = ga(t, r.children)),
      (t.flags |= 4096),
      t);
}
function oc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), el(e.return, t, n);
}
function us(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function kh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && oc(e, n, t);
        else if (e.tag === 19) oc(e, n, t);
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
  if ((z(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && eo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          us(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && eo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        us(t, !0, n, null, o);
        break;
      case "together":
        us(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Sy(e, t, n) {
  switch (t.tag) {
    case 3:
      xh(t), On();
      break;
    case 5:
      Xd(t);
      break;
    case 1:
      ke(t.type) && Yi(t);
      break;
    case 4:
      aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(qi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ph(e, t, n)
            : (z(W, W.current & 1),
              (e = ht(e, t, n)),
              e !== null ? e.sibling : null);
      z(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wh(e, t, n);
  }
  return ht(e, t, n);
}
var Th, al, Ch, Eh;
Th = function (e, t) {
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
al = function () {};
Ch = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), qt(qe.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ls(e, i)), (r = Ls(e, r)), (o = []);
        break;
      case "select":
        (i = G({}, i, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = _s(e, i)), (r = _s(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gi);
    }
    js(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Tr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Tr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && B("scroll", e),
                    o || l === a || (o = []))
                  : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Eh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rr(e, t) {
  if (!$)
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
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xy(e, t, n) {
  var r = t.pendingProps;
  switch ((ta(t), t.tag)) {
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
      return ce(t), null;
    case 1:
      return ke(t.type) && Qi(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        zn(),
        U(Pe),
        U(me),
        ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (gl(We), (We = null)))),
        al(e, t),
        ce(t),
        null
      );
    case 5:
      ua(t);
      var i = qt(Fr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ch(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ce(t), null;
        }
        if (((e = qt(qe.current)), hi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Xe] = t), (r[Nr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ur.length; i++) B(ur[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              pu(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              gu(r, o), B("invalid", r);
          }
          js(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      di(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      di(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Tr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              ii(r), mu(r, o, !0);
              break;
            case "textarea":
              ii(r), yu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Gi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ed(n)),
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
            (e[Xe] = t),
            (e[Nr] = r),
            Th(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Fs(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ur.length; i++) B(ur[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                pu(e, r), (i = Ls(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                gu(e, r), (i = _s(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            js(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? rd(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && td(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Cr(e, a)
                        : typeof a == "number" && Cr(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Tr.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && B("scroll", e)
                          : a != null && Bl(e, o, a, s));
              }
            switch (n) {
              case "input":
                ii(e), mu(e, r, !1);
                break;
              case "textarea":
                ii(e), yu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Rn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Gi);
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
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Eh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = qt(Fr.current)), qt(qe.current), hi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xe] = t),
            (o = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                di(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  di(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xe] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (U(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Ee !== null && t.mode & 1 && !(t.flags & 128))
          Hd(), On(), (t.flags |= 98560), (o = !1);
        else if (((o = hi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[Xe] = t;
          } else
            On(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (o = !1);
        } else We !== null && (gl(We), (We = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? ee === 0 && (ee = 3) : Pa())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        zn(), al(e, t), e === null && Dr(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return oa(t.type._context), ce(t), null;
    case 17:
      return ke(t.type) && Qi(), ce(t), null;
    case 19:
      if ((U(W), (o = t.memoizedState), o === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) rr(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = eo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    rr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > Un &&
            ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = eo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              rr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !$)
            )
              return ce(t), null;
          } else
            2 * Z() - o.renderingStartTime > Un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = W.current),
          z(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        xa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ce & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Py(e, t) {
  switch ((ta(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && Qi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zn(),
        U(Pe),
        U(me),
        ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ua(t), null;
    case 13:
      if ((U(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        On();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(W), null;
    case 4:
      return zn(), null;
    case 10:
      return oa(t.type._context), null;
    case 22:
    case 23:
      return xa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gi = !1,
  de = !1,
  ky = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Pn(e, t) {
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
function ul(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var sc = !1;
function Ty(e, t) {
  if (((Gs = Wi), (e = Vd()), bl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qs = { focusedElem: e, selectionRange: n }, Wi = !1, M = t; M !== null; )
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
                    P = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ue(t.type, v),
                      P,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (w) {
          Q(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = sc), (sc = !1), y;
}
function vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ul(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Co(e, t) {
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
function cl(e) {
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
function Ah(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ah(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xe], delete t[Nr], delete t[Zs], delete t[sy], delete t[ly])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Mh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mh(e.return)) return null;
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
function fl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Gi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fl(e, t, n), e = e.sibling; e !== null; ) fl(e, t, n), (e = e.sibling);
}
function dl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dl(e, t, n), e = e.sibling; e !== null; ) dl(e, t, n), (e = e.sibling);
}
var oe = null,
  $e = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) Rh(e, t, n), (n = n.sibling);
}
function Rh(e, t, n) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function")
    try {
      Ze.onCommitFiberUnmount(yo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || Pn(n, t);
    case 6:
      var r = oe,
        i = $e;
      (oe = null),
        gt(e, t, n),
        (oe = r),
        ($e = i),
        oe !== null &&
          ($e
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        ($e
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ns(e.parentNode, n)
              : e.nodeType === 1 && ns(e, n),
            Rr(e))
          : ns(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (i = $e),
        (oe = n.stateNode.containerInfo),
        ($e = !0),
        gt(e, t, n),
        (oe = r),
        ($e = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && ul(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (Pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Q(n, t, l);
        }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), gt(e, t, n), (de = r))
        : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ky()),
      t.forEach(function (r) {
        var i = _y.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (oe = l.stateNode), ($e = !1);
              break e;
            case 3:
              (oe = l.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (oe = l.stateNode.containerInfo), ($e = !0);
              break e;
          }
          l = l.return;
        }
        if (oe === null) throw Error(x(160));
        Rh(o, s, i), (oe = null), ($e = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Lh(t, e), (t = t.sibling);
}
function Lh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Be(t, e), Qe(e), r & 4)) {
        try {
          vr(3, e, e.return), Co(3, e);
        } catch (v) {
          Q(e, e.return, v);
        }
        try {
          vr(5, e, e.return);
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 1:
      Be(t, e), Qe(e), r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (
        (Be(t, e),
        Qe(e),
        r & 512 && n !== null && Pn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Cr(i, "");
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Jf(i, o),
              Fs(l, s);
            var u = Fs(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? rd(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? td(i, f)
                  : c === "children"
                    ? Cr(i, f)
                    : Bl(i, c, f, u);
            }
            switch (l) {
              case "input":
                Vs(i, o);
                break;
              case "textarea":
                bf(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Rn(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Rn(i, !!o.multiple, o.defaultValue, !0)
                      : Rn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Nr] = o;
          } catch (v) {
            Q(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Be(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Be(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (v) {
          Q(e, e.return, v);
        }
      break;
    case 4:
      Be(t, e), Qe(e);
      break;
    case 13:
      Be(t, e),
        Qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (wa = Z())),
        r & 4 && ac(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (u = de) || c), Be(t, e), (de = u)) : Be(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (f = M = c; M !== null; ) {
              switch (((d = M), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vr(4, d, d.return);
                  break;
                case 1:
                  Pn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      Q(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Pn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    cc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (M = g)) : cc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = nd("display", s)));
              } catch (v) {
                Q(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                Q(e, e.return, v);
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
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Be(t, e), Qe(e), r & 4 && ac(e);
      break;
    case 21:
      break;
    default:
      Be(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Cr(i, ""), (r.flags &= -33));
          var o = lc(e);
          dl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = lc(e);
          fl(e, l, s);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cy(e, t, n) {
  (M = e), Vh(e);
}
function Vh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || gi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || de;
        l = gi;
        var u = de;
        if (((gi = s), (de = a) && !u))
          for (M = i; M !== null; )
            (s = M),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? fc(i)
                : a !== null
                  ? ((a.return = s), (M = a))
                  : fc(i);
        for (; o !== null; ) (M = o), Vh(o), (o = o.sibling);
        (M = i), (gi = l), (de = u);
      }
      uc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : uc(e);
  }
}
function uc(e) {
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
              de || Co(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ue(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Qu(t, o, r);
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
                Qu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
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
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Rr(f);
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
              throw Error(x(163));
          }
        de || (t.flags & 512 && cl(t));
      } catch (d) {
        Q(t, t.return, d);
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
function cc(e) {
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
function fc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Co(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, i, a);
            }
          }
          var o = t.return;
          try {
            cl(t);
          } catch (a) {
            Q(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            cl(t);
          } catch (a) {
            Q(t, s, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (M = l);
      break;
    }
    M = t.return;
  }
}
var Ey = Math.ceil,
  ro = pt.ReactCurrentDispatcher,
  ya = pt.ReactCurrentOwner,
  Oe = pt.ReactCurrentBatchConfig,
  F = 0,
  ie = null,
  q = null,
  le = 0,
  Ce = 0,
  kn = It(0),
  ee = 0,
  Br = null,
  sn = 0,
  Eo = 0,
  va = 0,
  wr = null,
  Se = null,
  wa = 0,
  Un = 1 / 0,
  et = null,
  io = !1,
  hl = null,
  Rt = null,
  yi = !1,
  kt = null,
  oo = 0,
  Sr = 0,
  pl = null,
  Di = -1,
  _i = 0;
function ye() {
  return F & 6 ? Z() : Di !== -1 ? Di : (Di = Z());
}
function Lt(e) {
  return e.mode & 1
    ? F & 2 && le !== 0
      ? le & -le
      : uy.transition !== null
        ? (_i === 0 && (_i = md()), _i)
        : ((e = O),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pd(e.type))),
          e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < Sr) throw ((Sr = 0), (pl = null), Error(x(185)));
  Gr(e, n, r),
    (!(F & 2) || e !== ie) &&
      (e === ie && (!(F & 2) && (Eo |= n), ee === 4 && xt(e, le)),
      Te(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Un = Z() + 500), Po && zt()));
}
function Te(e, t) {
  var n = e.callbackNode;
  ug(e, t);
  var r = $i(e, e === ie ? le : 0);
  if (r === 0)
    n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Su(n), t === 1))
      e.tag === 0 ? ay(dc.bind(null, e)) : Ud(dc.bind(null, e)),
        iy(function () {
          !(F & 6) && zt();
        }),
        (n = null);
    else {
      switch (gd(r)) {
        case 1:
          n = Kl;
          break;
        case 4:
          n = hd;
          break;
        case 16:
          n = Ui;
          break;
        case 536870912:
          n = pd;
          break;
        default:
          n = Ui;
      }
      n = zh(n, Dh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Dh(e, t) {
  if (((Di = -1), (_i = 0), F & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n) return null;
  var r = $i(e, e === ie ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = so(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Nh();
    (ie !== e || le !== t) && ((et = null), (Un = Z() + 500), bt(e, t));
    do
      try {
        Ry();
        break;
      } catch (l) {
        _h(e, l);
      }
    while (!0);
    ia(),
      (ro.current = o),
      (F = i),
      q !== null ? (t = 0) : ((ie = null), (le = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Us(e)), i !== 0 && ((r = i), (t = ml(e, i)))), t === 1)
    )
      throw ((n = Br), bt(e, 0), xt(e, r), Te(e, Z()), n);
    if (t === 6) xt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ay(i) &&
          ((t = so(e, r)),
          t === 2 && ((o = Us(e)), o !== 0 && ((r = o), (t = ml(e, o)))),
          t === 1))
      )
        throw ((n = Br), bt(e, 0), xt(e, r), Te(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Gt(e, Se, et);
          break;
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = wa + 500 - Z()), 10 < t))
          ) {
            if ($i(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Xs(Gt.bind(null, e, Se, et), t);
            break;
          }
          Gt(e, Se, et);
          break;
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - He(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
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
                          : 1960 * Ey(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xs(Gt.bind(null, e, Se, et), r);
            break;
          }
          Gt(e, Se, et);
          break;
        case 5:
          Gt(e, Se, et);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Te(e, Z()), e.callbackNode === n ? Dh.bind(null, e) : null;
}
function ml(e, t) {
  var n = wr;
  return (
    e.current.memoizedState.isDehydrated && (bt(e, t).flags |= 256),
    (e = so(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && gl(t)),
    e
  );
}
function gl(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function Ay(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ge(o(), i)) return !1;
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
function xt(e, t) {
  for (
    t &= ~va,
      t &= ~Eo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - He(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function dc(e) {
  if (F & 6) throw Error(x(327));
  Nn();
  var t = $i(e, 0);
  if (!(t & 1)) return Te(e, Z()), null;
  var n = so(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Us(e);
    r !== 0 && ((t = r), (n = ml(e, r)));
  }
  if (n === 1) throw ((n = Br), bt(e, 0), xt(e, t), Te(e, Z()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gt(e, Se, et),
    Te(e, Z()),
    null
  );
}
function Sa(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Un = Z() + 500), Po && zt());
  }
}
function ln(e) {
  kt !== null && kt.tag === 0 && !(F & 6) && Nn();
  var t = F;
  F |= 1;
  var n = Oe.transition,
    r = O;
  try {
    if (((Oe.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Oe.transition = n), (F = t), !(F & 6) && zt();
  }
}
function xa() {
  (Ce = kn.current), U(kn);
}
function bt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ry(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Qi();
          break;
        case 3:
          zn(), U(Pe), U(me), ca();
          break;
        case 5:
          ua(r);
          break;
        case 4:
          zn();
          break;
        case 13:
          U(W);
          break;
        case 19:
          U(W);
          break;
        case 10:
          oa(r.type._context);
          break;
        case 22:
        case 23:
          xa();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (q = e = Vt(e.current, null)),
    (le = Ce = t),
    (ee = 0),
    (Br = null),
    (va = Eo = sn = 0),
    (Se = wr = null),
    Zt !== null)
  ) {
    for (t = 0; t < Zt.length; t++)
      if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Zt = null;
  }
  return e;
}
function _h(e, t) {
  do {
    var n = q;
    try {
      if ((ia(), (Ri.current = no), to)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        to = !1;
      }
      if (
        ((on = 0),
        (re = b = K = null),
        (yr = !1),
        (Or = 0),
        (ya.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Br = t), (q = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = le),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = bu(s);
          if (g !== null) {
            (g.flags &= -257),
              ec(g, s, l, o, t),
              g.mode & 1 && Ju(o, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ju(o, u, t), Pa();
              break e;
            }
            a = Error(x(426));
          }
        } else if ($ && l.mode & 1) {
          var P = bu(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              ec(P, s, l, o, t),
              na(Bn(a, l));
            break e;
          }
        }
        (o = a = Bn(a, l)),
          ee !== 4 && (ee = 2),
          wr === null ? (wr = [o]) : wr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = gh(o, a, t);
              Gu(o, p);
              break e;
            case 1:
              l = a;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Rt === null || !Rt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = yh(o, l, t);
                Gu(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Fh(n);
    } catch (S) {
      (t = S), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nh() {
  var e = ro.current;
  return (ro.current = no), e === null ? no : e;
}
function Pa() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ie === null || (!(sn & 268435455) && !(Eo & 268435455)) || xt(ie, le);
}
function so(e, t) {
  var n = F;
  F |= 2;
  var r = Nh();
  (ie !== e || le !== t) && ((et = null), bt(e, t));
  do
    try {
      My();
      break;
    } catch (i) {
      _h(e, i);
    }
  while (!0);
  if ((ia(), (F = n), (ro.current = r), q !== null)) throw Error(x(261));
  return (ie = null), (le = 0), ee;
}
function My() {
  for (; q !== null; ) jh(q);
}
function Ry() {
  for (; q !== null && !eg(); ) jh(q);
}
function jh(e) {
  var t = Ih(e.alternate, e, Ce);
  (e.memoizedProps = e.pendingProps),
    t === null ? Fh(e) : (q = t),
    (ya.current = null);
}
function Fh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Py(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (q = null);
        return;
      }
    } else if (((n = xy(n, t, Ce)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Gt(e, t, n) {
  var r = O,
    i = Oe.transition;
  try {
    (Oe.transition = null), (O = 1), Ly(e, t, n, r);
  } finally {
    (Oe.transition = i), (O = r);
  }
  return null;
}
function Ly(e, t, n, r) {
  do Nn();
  while (kt !== null);
  if (F & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (cg(e, o),
    e === ie && ((q = ie = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yi ||
      ((yi = !0),
      zh(Ui, function () {
        return Nn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Oe.transition), (Oe.transition = null);
    var s = O;
    O = 1;
    var l = F;
    (F |= 4),
      (ya.current = null),
      Ty(e, n),
      Lh(n, e),
      Zg(Qs),
      (Wi = !!Gs),
      (Qs = Gs = null),
      (e.current = n),
      Cy(n),
      tg(),
      (F = l),
      (O = s),
      (Oe.transition = o);
  } else e.current = n;
  if (
    (yi && ((yi = !1), (kt = e), (oo = i)),
    (o = e.pendingLanes),
    o === 0 && (Rt = null),
    ig(n.stateNode),
    Te(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (io) throw ((io = !1), (e = hl), (hl = null), e);
  return (
    oo & 1 && e.tag !== 0 && Nn(),
    (o = e.pendingLanes),
    o & 1 ? (e === pl ? Sr++ : ((Sr = 0), (pl = e))) : (Sr = 0),
    zt(),
    null
  );
}
function Nn() {
  if (kt !== null) {
    var e = gd(oo),
      t = Oe.transition,
      n = O;
    try {
      if (((Oe.transition = null), (O = 16 > e ? 16 : e), kt === null))
        var r = !1;
      else {
        if (((e = kt), (kt = null), (oo = 0), F & 6)) throw Error(x(331));
        var i = F;
        for (F |= 4, M = e.current; M !== null; ) {
          var o = M,
            s = o.child;
          if (M.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (M = f);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var d = c.sibling,
                        g = c.return;
                      if ((Ah(c), c === u)) {
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
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var P = v.sibling;
                    (v.sibling = null), (v = P);
                  } while (v !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (M = s);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (M = p);
                break e;
              }
              M = o.return;
            }
        }
        var h = e.current;
        for (M = h; M !== null; ) {
          s = M;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (M = m);
          else
            e: for (s = h; M !== null; ) {
              if (((l = M), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Co(9, l);
                  }
                } catch (S) {
                  Q(l, l.return, S);
                }
              if (l === s) {
                M = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (M = w);
                break e;
              }
              M = l.return;
            }
        }
        if (
          ((F = i), zt(), Ze && typeof Ze.onPostCommitFiberRoot == "function")
        )
          try {
            Ze.onPostCommitFiberRoot(yo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Oe.transition = t);
    }
  }
  return !1;
}
function hc(e, t, n) {
  (t = Bn(n, t)),
    (t = gh(e, t, 1)),
    (e = Mt(e, t, 1)),
    (t = ye()),
    e !== null && (Gr(e, 1, t), Te(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) hc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rt === null || !Rt.has(r)))
        ) {
          (e = Bn(n, e)),
            (e = yh(t, e, 1)),
            (t = Mt(t, e, 1)),
            (e = ye()),
            t !== null && (Gr(t, 1, e), Te(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Vy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (le & n) === n &&
      (ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > Z() - wa)
        ? bt(e, 0)
        : (va |= n)),
    Te(e, t);
}
function Oh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = li), (li <<= 1), !(li & 130023424) && (li = 4194304))
      : (t = 1));
  var n = ye();
  (e = dt(e, t)), e !== null && (Gr(e, t, n), Te(e, n));
}
function Dy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Oh(e, n);
}
function _y(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Oh(e, n);
}
var Ih;
Ih = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), Sy(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else (xe = !1), $ && t.flags & 1048576 && $d(t, Zi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vi(e, t), (e = t.pendingProps);
      var i = Fn(t, me.current);
      _n(t, n), (i = da(null, t, r, e, i, n));
      var o = ha();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((o = !0), Yi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            la(t),
            (i.updater = To),
            (t.stateNode = i),
            (i._reactInternals = t),
            nl(t, r, e, n),
            (t = ol(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && ea(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = jy(r)),
          (e = Ue(r, e)),
          i)
        ) {
          case 0:
            t = il(null, t, r, e, n);
            break e;
          case 1:
            t = rc(null, t, r, e, n);
            break e;
          case 11:
            t = tc(null, t, r, e, n);
            break e;
          case 14:
            t = nc(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        il(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        rc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((xh(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Yd(e, t),
          bi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Bn(Error(x(423)), t)), (t = ic(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Bn(Error(x(424)), t)), (t = ic(e, t, r, n, i));
            break e;
          } else
            for (
              Ee = At(t.stateNode.containerInfo.firstChild),
                Ae = t,
                $ = !0,
                We = null,
                n = Gd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((On(), r === i)) {
            t = ht(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xd(t),
        e === null && bs(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ys(r, i) ? (s = null) : o !== null && Ys(r, o) && (t.flags |= 32),
        Sh(e, t),
        ge(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && bs(t), null;
    case 13:
      return Ph(e, t, n);
    case 4:
      return (
        aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = In(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        tc(e, t, r, i, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(qi, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ge(o.value, s)) {
            if (o.children === i.children && !Pe.current) {
              t = ht(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = ot(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      el(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(x(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  el(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        _n(t, n),
        (i = Ie(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ue(r, t.pendingProps)),
        (i = Ue(r.type, i)),
        nc(e, t, r, i, n)
      );
    case 15:
      return vh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        Vi(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), Yi(t)) : (e = !1),
        _n(t, n),
        mh(t, r, i),
        nl(t, r, i, n),
        ol(null, t, r, !0, e, n)
      );
    case 19:
      return kh(e, t, n);
    case 22:
      return wh(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function zh(e, t) {
  return dd(e, t);
}
function Ny(e, t, n, r) {
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
function Fe(e, t, n, r) {
  return new Ny(e, t, n, r);
}
function ka(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jy(e) {
  if (typeof e == "function") return ka(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $l)) return 11;
    if (e === Wl) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
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
function Ni(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) ka(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case hn:
        return en(n.children, i, o, t);
      case Ul:
        (s = 8), (i |= 8);
        break;
      case Es:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = Es), (e.lanes = o), e
        );
      case As:
        return (e = Fe(13, n, t, i)), (e.elementType = As), (e.lanes = o), e;
      case Ms:
        return (e = Fe(19, n, t, i)), (e.elementType = Ms), (e.lanes = o), e;
      case Xf:
        return Ao(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qf:
              s = 10;
              break e;
            case Yf:
              s = 9;
              break e;
            case $l:
              s = 11;
              break e;
            case Wl:
              s = 14;
              break e;
            case vt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function en(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function Ao(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = Xf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cs(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function fs(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Fy(e, t, n, r, i) {
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
    (this.eventTimes = Ko(0)),
    (this.expirationTimes = Ko(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ko(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ta(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Fy(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Fe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    la(o),
    e
  );
}
function Oy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bh(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (un(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return Bd(e, n, t);
  }
  return t;
}
function Uh(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ta(n, r, !0, e, i, o, s, l, a)),
    (e.context = Bh(null)),
    (n = e.current),
    (r = ye()),
    (i = Lt(n)),
    (o = ot(r, i)),
    (o.callback = t ?? null),
    Mt(n, o, i),
    (e.current.lanes = i),
    Gr(e, i, r),
    Te(e, r),
    e
  );
}
function Mo(e, t, n, r) {
  var i = t.current,
    o = ye(),
    s = Lt(i);
  return (
    (n = Bh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mt(i, t, s)),
    e !== null && (Ke(e, i, s, o), Mi(e, i, s)),
    s
  );
}
function lo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ca(e, t) {
  pc(e, t), (e = e.alternate) && pc(e, t);
}
function Iy() {
  return null;
}
var $h =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ea(e) {
  this._internalRoot = e;
}
Ro.prototype.render = Ea.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Mo(e, t, null, null);
};
Ro.prototype.unmount = Ea.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function () {
      Mo(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function Ro(e) {
  this._internalRoot = e;
}
Ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
    St.splice(n, 0, e), n === 0 && xd(e);
  }
};
function Aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Lo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mc() {}
function zy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = lo(s);
        o.call(u);
      };
    }
    var s = Uh(t, r, e, 0, null, !1, !1, "", mc);
    return (
      (e._reactRootContainer = s),
      (e[ft] = s.current),
      Dr(e.nodeType === 8 ? e.parentNode : e),
      ln(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = lo(a);
      l.call(u);
    };
  }
  var a = Ta(e, 0, !1, null, null, !1, !1, "", mc);
  return (
    (e._reactRootContainer = a),
    (e[ft] = a.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    ln(function () {
      Mo(t, a, n, r);
    }),
    a
  );
}
function Vo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = lo(s);
        l.call(a);
      };
    }
    Mo(t, s, e, i);
  } else s = zy(n, t, e, i, r);
  return lo(s);
}
yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes);
        n !== 0 &&
          (Gl(t, n | 1), Te(t, Z()), !(F & 6) && ((Un = Z() + 500), zt()));
      }
      break;
    case 13:
      ln(function () {
        var r = dt(e, 1);
        if (r !== null) {
          var i = ye();
          Ke(r, e, 1, i);
        }
      }),
        Ca(e, 1);
  }
};
Ql = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ke(t, e, 134217728, n);
    }
    Ca(e, 134217728);
  }
};
vd = function (e) {
  if (e.tag === 13) {
    var t = Lt(e),
      n = dt(e, t);
    if (n !== null) {
      var r = ye();
      Ke(n, e, t, r);
    }
    Ca(e, t);
  }
};
wd = function () {
  return O;
};
Sd = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
Is = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vs(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = xo(r);
            if (!i) throw Error(x(90));
            qf(r), Vs(r, i);
          }
        }
      }
      break;
    case "textarea":
      bf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Rn(e, !!n.multiple, t, !1);
  }
};
sd = Sa;
ld = ln;
var By = { usingClientEntryPoint: !1, Events: [Yr, yn, xo, id, od, Sa] },
  ir = {
    findFiberByHostInstance: Xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Uy = {
    bundleType: ir.bundleType,
    version: ir.version,
    rendererPackageName: ir.rendererPackageName,
    rendererConfig: ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ir.findFiberByHostInstance || Iy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vi.isDisabled && vi.supportsFiber)
    try {
      (yo = vi.inject(Uy)), (Ze = vi);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = By;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Aa(t)) throw Error(x(200));
  return Oy(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!Aa(e)) throw Error(x(299));
  var n = !1,
    r = "",
    i = $h;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ta(e, 1, !1, null, null, n, !1, r, i)),
    (e[ft] = t.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    new Ea(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = cd(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return ln(e);
};
Le.hydrate = function (e, t, n) {
  if (!Lo(t)) throw Error(x(200));
  return Vo(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!Aa(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = $h;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Uh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[ft] = t.current),
    Dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ro(t);
};
Le.render = function (e, t, n) {
  if (!Lo(t)) throw Error(x(200));
  return Vo(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!Lo(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (ln(function () {
        Vo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = Sa;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Lo(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Vo(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function Wh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wh);
    } catch (e) {
      console.error(e);
    }
}
Wh(), (Wf.exports = Le);
var $y = Wf.exports,
  Hh,
  gc = $y;
(Hh = gc.createRoot), gc.hydrateRoot;
function Wy(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function Do(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const yl = (e) => Array.isArray(e);
function Kh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ur(e) {
  return typeof e == "string" || Array.isArray(e);
}
function yc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Ma(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = yc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = yc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function _o(e, t, n) {
  const r = e.getProps();
  return Ma(r, t, n !== void 0 ? n : r.custom, e);
}
const Ra = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  La = ["initial", ...Ra],
  Zr = [
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
  cn = new Set(Zr),
  st = (e) => e * 1e3,
  lt = (e) => e / 1e3,
  Hy = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Ky = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Gy = { type: "keyframes", duration: 0.8 },
  Qy = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Yy = (e, { keyframes: t }) =>
    t.length > 2
      ? Gy
      : cn.has(e)
        ? e.startsWith("scale")
          ? Ky(t[1])
          : Hy
        : Qy;
function Va(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Xy = { skipAnimations: !1, useManualTiming: !1 },
  Zy = (e) => e !== null;
function No(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Zy),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const pe = (e) => e;
function qy(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    o.has(u) && (a.schedule(u), e()), u(s);
  }
  const a = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && o.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(l),
        (r = !1),
        i && ((i = !1), a.process(u));
    },
  };
  return a;
}
const wi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Jy = 40;
function Gh(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = wi.reduce((p, h) => ((p[h] = qy(o)), p), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    g = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Jy), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: wi.reduce((p, h) => {
      const m = s[h];
      return (p[h] = (w, S = !1, T = !1) => (n || y(), m.schedule(w, S, T))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < wi.length; h++) s[wi[h]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: I,
    cancel: Nt,
    state: se,
    steps: ds,
  } = Gh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pe, !0),
  Qh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  by = 1e-7,
  ev = 12;
function tv(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Qh(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > by && ++l < ev);
  return s;
}
function qr(e, t, n, r) {
  if (e === t && n === r) return pe;
  const i = (o) => tv(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Qh(i(o), t, r));
}
const Yh = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Xh = (e) => (t) => 1 - e(1 - t),
  Zh = qr(0.33, 1.53, 0.69, 0.99),
  Da = Xh(Zh),
  qh = Yh(Da),
  Jh = (e) =>
    (e *= 2) < 1 ? 0.5 * Da(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  _a = (e) => 1 - Math.sin(Math.acos(e)),
  bh = Xh(_a),
  ep = Yh(_a),
  tp = (e) => /^0[^.\s]+$/u.test(e);
function nv(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || tp(e)
      : !0;
}
let vl = pe;
const np = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  rp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  ip = rp("--"),
  rv = rp("var(--"),
  Na = (e) => (rv(e) ? iv.test(e.split("/*")[0].trim()) : !1),
  iv =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ov = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function sv(e) {
  const t = ov.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function op(e, t, n = 1) {
  const [r, i] = sv(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return np(s) ? parseFloat(s) : s;
  }
  return Na(i) ? op(i, t, n + 1) : i;
}
const jt = (e, t, n) => (n > t ? t : n < e ? e : n),
  Yn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  $r = { ...Yn, transform: (e) => jt(0, 1, e) },
  Si = { ...Yn, default: 1 },
  Jr = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  yt = Jr("deg"),
  Je = Jr("%"),
  L = Jr("px"),
  lv = Jr("vh"),
  av = Jr("vw"),
  vc = {
    ...Je,
    parse: (e) => Je.parse(e) / 100,
    transform: (e) => Je.transform(e * 100),
  },
  uv = new Set([
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
  wc = (e) => e === Yn || e === L,
  Sc = (e, t) => parseFloat(e.split(", ")[t]),
  xc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Sc(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Sc(o[1], e) : 0;
      }
    },
  cv = new Set(["x", "y", "z"]),
  fv = Zr.filter((e) => !cv.has(e));
function dv(e) {
  const t = [];
  return (
    fv.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const $n = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: xc(4, 13),
  y: xc(5, 14),
};
$n.translateX = $n.x;
$n.translateY = $n.y;
const sp = (e) => (t) => t.test(e),
  hv = { test: (e) => e === "auto", parse: (e) => e },
  lp = [Yn, L, Je, yt, av, lv, hv],
  Pc = (e) => lp.find(sp(e)),
  tn = new Set();
let wl = !1,
  Sl = !1;
function ap() {
  if (Sl) {
    const e = Array.from(tn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = dv(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var l;
            (l = r.getValue(o)) === null || l === void 0 || l.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Sl = !1), (wl = !1), tn.forEach((e) => e.complete()), tn.clear();
}
function up() {
  tn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Sl = !0);
  });
}
function pv() {
  up(), ap();
}
class ja {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (tn.add(this), wl || ((wl = !0), I.read(up), I.resolveKeyframes(ap)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      tn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), tn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const xr = (e) => Math.round(e * 1e5) / 1e5,
  Fa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function mv(e) {
  return e == null;
}
const gv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Oa = (e, t) => (n) =>
    !!(
      (typeof n == "string" && gv.test(n) && n.startsWith(e)) ||
      (t && !mv(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  cp = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, l] = r.match(Fa);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  yv = (e) => jt(0, 255, e),
  hs = { ...Yn, transform: (e) => Math.round(yv(e)) },
  Jt = {
    test: Oa("rgb", "red"),
    parse: cp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      hs.transform(e) +
      ", " +
      hs.transform(t) +
      ", " +
      hs.transform(n) +
      ", " +
      xr($r.transform(r)) +
      ")",
  };
function vv(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const xl = { test: Oa("#"), parse: vv, transform: Jt.transform },
  Tn = {
    test: Oa("hsl", "hue"),
    parse: cp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Je.transform(xr(t)) +
      ", " +
      Je.transform(xr(n)) +
      ", " +
      xr($r.transform(r)) +
      ")",
  },
  fe = {
    test: (e) => Jt.test(e) || xl.test(e) || Tn.test(e),
    parse: (e) =>
      Jt.test(e) ? Jt.parse(e) : Tn.test(e) ? Tn.parse(e) : xl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Jt.transform(e)
          : Tn.transform(e),
  },
  wv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Sv(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Fa)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(wv)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const fp = "number",
  dp = "color",
  xv = "var",
  Pv = "var(",
  kc = "${}",
  kv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Wr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const l = t
    .replace(
      kv,
      (a) => (
        fe.test(a)
          ? (r.color.push(o), i.push(dp), n.push(fe.parse(a)))
          : a.startsWith(Pv)
            ? (r.var.push(o), i.push(xv), n.push(a))
            : (r.number.push(o), i.push(fp), n.push(parseFloat(a))),
        ++o,
        kc
      ),
    )
    .split(kc);
  return { values: n, split: l, indexes: r, types: i };
}
function hp(e) {
  return Wr(e).values;
}
function pp(e) {
  const { split: t, types: n } = Wr(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s];
        l === fp
          ? (o += xr(i[s]))
          : l === dp
            ? (o += fe.transform(i[s]))
            : (o += i[s]);
      }
    return o;
  };
}
const Tv = (e) => (typeof e == "number" ? 0 : e);
function Cv(e) {
  const t = hp(e);
  return pp(e)(t.map(Tv));
}
const Ft = {
    test: Sv,
    parse: hp,
    createTransformer: pp,
    getAnimatableNone: Cv,
  },
  Ev = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Av(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Fa) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Ev.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Mv = /\b([a-z-]*)\(.*?\)/gu,
  Pl = {
    ...Ft,
    getAnimatableNone: (e) => {
      const t = e.match(Mv);
      return t ? t.map(Av).join(" ") : e;
    },
  },
  Rv = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L,
  },
  Lv = {
    rotate: yt,
    rotateX: yt,
    rotateY: yt,
    rotateZ: yt,
    scale: Si,
    scaleX: Si,
    scaleY: Si,
    scaleZ: Si,
    skew: yt,
    skewX: yt,
    skewY: yt,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: $r,
    originX: vc,
    originY: vc,
    originZ: L,
  },
  Tc = { ...Yn, transform: Math.round },
  Ia = {
    ...Rv,
    ...Lv,
    zIndex: Tc,
    size: L,
    fillOpacity: $r,
    strokeOpacity: $r,
    numOctaves: Tc,
  },
  Vv = {
    ...Ia,
    color: fe,
    backgroundColor: fe,
    outlineColor: fe,
    fill: fe,
    stroke: fe,
    borderColor: fe,
    borderTopColor: fe,
    borderRightColor: fe,
    borderBottomColor: fe,
    borderLeftColor: fe,
    filter: Pl,
    WebkitFilter: Pl,
  },
  za = (e) => Vv[e];
function mp(e, t) {
  let n = za(e);
  return (
    n !== Pl && (n = Ft), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Dv = new Set(["auto", "none", "0"]);
function _v(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !Dv.has(o) && Wr(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = mp(n, i);
}
class gp extends ja {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && ((u = u.trim()), Na(u))) {
        const c = op(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !uv.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Pc(i),
      l = Pc(o);
    if (s !== l)
      if (wc(s) && wc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) nv(t[i]) && r.push(i);
    r.length && _v(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = $n[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      l = i[s];
    (i[s] = $n[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ba(e) {
  return typeof e == "function";
}
let ji;
function Nv() {
  ji = void 0;
}
const be = {
    now: () => (
      ji === void 0 &&
        be.set(
          se.isProcessing || Xy.useManualTiming
            ? se.timestamp
            : performance.now(),
        ),
      ji
    ),
    set: (e) => {
      (ji = e), queueMicrotask(Nv);
    },
  },
  Cc = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Ft.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function jv(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Fv(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Cc(i, t),
    l = Cc(o, t);
  return !s || !l ? !1 : jv(e) || ((n === "spring" || Ba(n)) && r);
}
const Ov = 40;
class yp {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = be.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Ov
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && pv(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = be.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !Fv(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        a == null || a(No(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
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
function vp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Iv = 5;
function wp(e, t, n) {
  const r = Math.max(t - Iv, 0);
  return vp(n - e(r), t - r);
}
const ps = 0.001,
  zv = 0.01,
  Bv = 10,
  Uv = 0.05,
  $v = 1;
function Wv({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = jt(Uv, $v, s)),
    (e = jt(zv, Bv, lt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = kl(u, s),
            y = Math.exp(-f);
          return ps - (d / g) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = kl(Math.pow(u, 2), s);
          return ((-i(u) + ps > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -ps + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = Kv(i, o, l);
  if (((e = st(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Hv = 12;
function Kv(e, t, n) {
  let r = n;
  for (let i = 1; i < Hv; i++) r = r - e(r) / t(r);
  return r;
}
function kl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Gv = ["duration", "bounce"],
  Qv = ["stiffness", "damping", "mass"];
function Ec(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Yv(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ec(e, Qv) && Ec(e, Gv)) {
    const n = Wv(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Sp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = Yv({ ...r, velocity: -lt(r.velocity || 0) }),
    g = f || 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    P = lt(Math.sqrt(l / u)),
    p = Math.abs(v) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const m = kl(P, y);
    h = (w) => {
      const S = Math.exp(-y * P * w);
      return (
        o - S * (((g + y * P * v) / m) * Math.sin(m * w) + v * Math.cos(m * w))
      );
    };
  } else if (y === 1) h = (m) => o - Math.exp(-P * m) * (v + (g + P * v) * m);
  else {
    const m = P * Math.sqrt(y * y - 1);
    h = (w) => {
      const S = Math.exp(-y * P * w),
        T = Math.min(m * w, 300);
      return (
        o - (S * ((g + y * P * v) * Math.sinh(T) + m * v * Math.cosh(T))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (m) => {
      const w = h(m);
      if (d) s.done = m >= c;
      else {
        let S = 0;
        y < 1 && (S = m === 0 ? st(g) : wp(h, m, w));
        const T = Math.abs(S) <= n,
          A = Math.abs(o - w) <= t;
        s.done = T && A;
      }
      return (s.value = s.done ? o : w), s;
    },
  };
}
function Ac({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    y = (k) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
          ? l
          : a;
  let v = n * t;
  const P = f + v,
    p = s === void 0 ? P : s(P);
  p !== P && (v = p - f);
  const h = (k) => -v * Math.exp(-k / r),
    m = (k) => p + h(k),
    w = (k) => {
      const j = h(k),
        V = m(k);
      (d.done = Math.abs(j) <= u), (d.value = d.done ? p : V);
    };
  let S, T;
  const A = (k) => {
    g(d.value) &&
      ((S = k),
      (T = Sp({
        keyframes: [d.value, y(d.value)],
        velocity: wp(m, k, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let j = !1;
        return (
          !T && S === void 0 && ((j = !0), w(k), A(k)),
          S !== void 0 && k >= S ? T.next(k - S) : (!j && w(k), d)
        );
      },
    }
  );
}
const Xv = qr(0.42, 0, 1, 1),
  Zv = qr(0, 0, 0.58, 1),
  xp = qr(0.42, 0, 0.58, 1),
  qv = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ua = (e) => Array.isArray(e) && typeof e[0] == "number",
  Mc = {
    linear: pe,
    easeIn: Xv,
    easeInOut: xp,
    easeOut: Zv,
    circIn: _a,
    circInOut: ep,
    circOut: bh,
    backIn: Da,
    backInOut: qh,
    backOut: Zh,
    anticipate: Jh,
  },
  Rc = (e) => {
    if (Ua(e)) {
      vl(e.length === 4);
      const [t, n, r, i] = e;
      return qr(t, n, r, i);
    } else if (typeof e == "string") return vl(Mc[e] !== void 0), Mc[e];
    return e;
  },
  Jv = (e, t) => (n) => t(e(n)),
  at = (...e) => e.reduce(Jv),
  Wn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  H = (e, t, n) => e + (t - e) * n;
function ms(e, t, n) {
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
function bv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = ms(a, l, e + 1 / 3)), (o = ms(a, l, e)), (s = ms(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function ao(e, t) {
  return (n) => (n > 0 ? t : e);
}
const gs = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  e0 = [xl, Jt, Tn],
  t0 = (e) => e0.find((t) => t.test(e));
function Lc(e) {
  const t = t0(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Tn && (n = bv(n)), n;
}
const Vc = (e, t) => {
    const n = Lc(e),
      r = Lc(t);
    if (!n || !r) return ao(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = gs(n.red, r.red, o)),
      (i.green = gs(n.green, r.green, o)),
      (i.blue = gs(n.blue, r.blue, o)),
      (i.alpha = H(n.alpha, r.alpha, o)),
      Jt.transform(i)
    );
  },
  Tl = new Set(["none", "hidden"]);
function n0(e, t) {
  return Tl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function r0(e, t) {
  return (n) => H(e, t, n);
}
function $a(e) {
  return typeof e == "number"
    ? r0
    : typeof e == "string"
      ? Na(e)
        ? ao
        : fe.test(e)
          ? Vc
          : s0
      : Array.isArray(e)
        ? Pp
        : typeof e == "object"
          ? fe.test(e)
            ? Vc
            : i0
          : ao;
}
function Pp(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => $a(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function i0(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = $a(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function o0(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[o] = a), i[s]++;
  }
  return r;
}
const s0 = (e, t) => {
  const n = Ft.createTransformer(t),
    r = Wr(e),
    i = Wr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Tl.has(e) && !i.values.length) || (Tl.has(t) && !r.values.length)
      ? n0(e, t)
      : at(Pp(o0(r, i), i.values), n)
    : ao(e, t);
};
function kp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? H(e, t, n)
    : $a(e)(e, t);
}
function l0(e, t, n) {
  const r = [],
    i = n || kp,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || pe : t;
      l = at(a, l);
    }
    r.push(l);
  }
  return r;
}
function a0(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((vl(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = l0(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Wn(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(jt(e[0], e[o - 1], u)) : a;
}
function u0(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Wn(0, t, r);
    e.push(H(n, 1, i));
  }
}
function c0(e) {
  const t = [0];
  return u0(t, e.length - 1), t;
}
function f0(e, t) {
  return e.map((n) => n * t);
}
function d0(e, t) {
  return e.map(() => t || xp).splice(0, e.length - 1);
}
function uo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = qv(r) ? r.map(Rc) : Rc(r),
    o = { done: !1, value: t[0] },
    s = f0(n && n.length === t.length ? n : c0(t), e),
    l = a0(s, t, { ease: Array.isArray(i) ? i : d0(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
const Dc = 2e4;
function h0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Dc; ) (t += n), (r = e.next(t));
  return t >= Dc ? 1 / 0 : t;
}
const p0 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => I.update(t, !0),
      stop: () => Nt(t),
      now: () => (se.isProcessing ? se.timestamp : be.now()),
    };
  },
  m0 = { decay: Ac, inertia: Ac, tween: uo, keyframes: uo, spring: Sp },
  g0 = (e) => e / 100;
class Wa extends yp {
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
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || ja,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new s(o, l, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      l = Ba(n) ? n : m0[n] || uo;
    let a, u;
    l !== uo &&
      typeof t[0] != "number" &&
      ((a = at(g0, kp(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = h0(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
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
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: g,
      repeatType: y,
      repeatDelay: v,
      onUpdate: P,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      w = o;
    if (g) {
      const k = Math.min(this.currentTime, c) / f;
      let j = Math.floor(k),
        V = k % 1;
      !V && k >= 1 && (V = 1),
        V === 1 && j--,
        (j = Math.min(j, g + 1)),
        !!(j % 2) &&
          (y === "reverse"
            ? ((V = 1 - V), v && (V -= v / f))
            : y === "mirror" && (w = s)),
        (m = jt(0, 1, V) * f);
    }
    const S = h ? { done: !1, value: a[0] } : w.next(m);
    l && (S.value = l(S.value));
    let { done: T } = S;
    !h &&
      u !== null &&
      (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const A =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      A && i !== void 0 && (S.value = No(a, this.options, i)),
      P && P(S.value),
      A && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? lt(t.calculatedDuration) : 0;
  }
  get time() {
    return lt(this.currentTime);
  }
  set time(t) {
    (t = st(t)),
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
    (this.playbackSpeed = t), n && (this.time = lt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = p0, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
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
const y0 = new Set(["opacity", "clipPath", "filter", "transform"]),
  v0 = 10,
  w0 = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / v0), 2);
    for (let i = 0; i < r; i++) n += e(Wn(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function Ha(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const S0 = { linearEasing: void 0 };
function x0(e, t) {
  const n = Ha(e);
  return () => {
    var r;
    return (r = S0[t]) !== null && r !== void 0 ? r : n();
  };
}
const co = x0(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Tp(e) {
  return !!(
    (typeof e == "function" && co()) ||
    !e ||
    (typeof e == "string" && (e in Cl || co())) ||
    Ua(e) ||
    (Array.isArray(e) && e.every(Tp))
  );
}
const cr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Cl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cr([0, 0.65, 0.55, 1]),
    circOut: cr([0.55, 0, 1, 0.45]),
    backIn: cr([0.31, 0.01, 0.66, -0.59]),
    backOut: cr([0.33, 1.53, 0.69, 0.99]),
  };
function Cp(e, t) {
  if (e)
    return typeof e == "function" && co()
      ? w0(e, t)
      : Ua(e)
        ? cr(e)
        : Array.isArray(e)
          ? e.map((n) => Cp(n, t) || Cl.easeOut)
          : Cl[e];
}
function P0(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {},
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Cp(l, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function _c(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const k0 = Ha(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  fo = 10,
  T0 = 2e4;
function C0(e) {
  return Ba(e.type) || e.type === "spring" || !Tp(e.ease);
}
function E0(e, t) {
  const n = new Wa({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < T0; ) (r = n.sample(o)), i.push(r.value), (o += fo);
  return { times: void 0, keyframes: i, duration: o - fo, ease: "linear" };
}
const Ep = { anticipate: Jh, backInOut: qh, circInOut: ep };
function A0(e) {
  return e in Ep;
}
class Nc extends yp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new gp(
      o,
      (s, l) => this.onKeyframesResolved(s, l),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: l,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && co() && A0(s) && (s = Ep[s]), C0(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: g,
          motionValue: y,
          element: v,
          ...P
        } = this.options,
        p = E0(t, P);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (o = p.times),
        (s = p.ease),
        (l = "keyframes");
    }
    const f = P0(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (_c(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(No(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: o, type: l, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return lt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return lt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = st(t);
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
      if (!n) return pe;
      const { animation: r } = n;
      _c(r, t);
    }
    return pe;
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
      duration: i,
      type: o,
      ease: s,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        y = new Wa({
          ...g,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: l,
          isGenerator: !0,
        }),
        v = st(this.time);
      u.setWithVelocity(y.sample(v - fo).value, y.sample(v).value, fo);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
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
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: l,
    } = t;
    return (
      k0() &&
      r &&
      y0.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      l !== "inertia"
    );
  }
}
const M0 = Ha(() => window.ScrollTimeline !== void 0);
class R0 {
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
    const r = this.animations.map((i) =>
      M0() && i.attachTimeline ? i.attachTimeline(t) : n(i),
    );
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
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
function L0({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Ka =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      const l = Va(r, e) || {},
        a = l.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - st(a);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), l.onUpdate && l.onUpdate(d);
        },
        onComplete: () => {
          s(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      L0(l) || (c = { ...c, ...Yy(e, c) }),
        c.duration && (c.duration = st(c.duration)),
        c.repeatDelay && (c.repeatDelay = st(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !o && t.get() !== void 0)
      ) {
        const d = No(c.keyframes, l);
        if (d !== void 0)
          return (
            I.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new R0([])
          );
      }
      return !o && Nc.supports(c) ? new Nc(c) : new Wa(c);
    },
  V0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  D0 = (e) => (yl(e) ? e[e.length - 1] || 0 : e);
function Ga(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qa(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ya {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ga(this.subscriptions, t), () => Qa(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const jc = 30,
  _0 = (e) => !isNaN(parseFloat(e));
class N0 {
  constructor(t, n = {}) {
    (this.version = "11.11.10"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = be.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = be.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = _0(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ya());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            I.read(() => {
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
    const t = be.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > jc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, jc);
    return vp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Hr(e, t) {
  return new N0(e, t);
}
function j0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Hr(n));
}
function F0(e, t) {
  const n = _o(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = D0(o[s]);
    j0(e, s, l);
  }
}
const Xa = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  O0 = "framerAppearId",
  Ap = "data-" + Xa(O0);
function Mp(e) {
  return e.props[Ap];
}
const he = (e) => !!(e && e.getVelocity);
function I0(e) {
  return !!(he(e) && e.add);
}
function El(e, t) {
  const n = e.getValue("willChange");
  if (I0(n)) return n.add(t);
}
function z0({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Rp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null,
      ),
      g = a[f];
    if (g === void 0 || (c && z0(c, f))) continue;
    const y = { delay: n, ...Va(s || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = Mp(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, I);
        h !== null && ((y.startTime = h), (v = !0));
      }
    }
    El(e, f),
      d.start(
        Ka(f, d, g, e.shouldReduceMotion && cn.has(f) ? { type: !1 } : y, e, v),
      );
    const P = d.animation;
    P && u.push(P);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        I.update(() => {
          l && F0(e, l);
        });
      }),
    u
  );
}
function Al(e, t, n = {}) {
  var r;
  const i = _o(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(Rp(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return B0(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
    return u().then(() => c());
  } else return Promise.all([s(), l(n.delay)]);
}
function B0(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(U0)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Al(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function U0(e, t) {
  return e.sortNodePosition(t);
}
function $0(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Al(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Al(e, t, n);
  else {
    const i = typeof t == "function" ? _o(e, t, n.custom) : t;
    r = Promise.all(Rp(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const W0 = La.length;
function Lp(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Lp(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < W0; n++) {
    const r = La[n],
      i = e.props[r];
    (Ur(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const H0 = [...Ra].reverse(),
  K0 = Ra.length;
function G0(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => $0(e, n, r)));
}
function Q0(e) {
  let t = G0(e),
    n = Fc(),
    r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = _o(
      e,
      c,
      a === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function o(a) {
    t = a(e);
  }
  function s(a) {
    const { props: u } = e,
      c = Lp(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      y = 1 / 0;
    for (let P = 0; P < K0; P++) {
      const p = H0[P],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        w = Ur(m),
        S = p === a ? h.isActive : null;
      S === !1 && (y = P);
      let T = m === c[p] && m !== u[p] && w;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          Do(m) ||
          typeof m == "boolean")
      )
        continue;
      const A = Y0(h.prevProp, m);
      let k = A || (p === a && h.isActive && !T && w) || (P > y && w),
        j = !1;
      const V = Array.isArray(m) ? m : [m];
      let te = V.reduce(i(p), {});
      S === !1 && (te = {});
      const { prevResolvedValues: mt = {} } = h,
        Ut = { ...mt, ...te },
        Zn = (J) => {
          (k = !0),
            d.has(J) && ((j = !0), d.delete(J)),
            (h.needsAnimating[J] = !0);
          const C = e.getValue(J);
          C && (C.liveStyle = !1);
        };
      for (const J in Ut) {
        const C = te[J],
          D = mt[J];
        if (g.hasOwnProperty(J)) continue;
        let _ = !1;
        yl(C) && yl(D) ? (_ = !Kh(C, D)) : (_ = C !== D),
          _
            ? C != null
              ? Zn(J)
              : d.add(J)
            : C !== void 0 && d.has(J)
              ? Zn(J)
              : (h.protectedKeys[J] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = te),
        h.isActive && (g = { ...g, ...te }),
        r && e.blockInitialAnimation && (k = !1),
        k &&
          (!(T && A) || j) &&
          f.push(...V.map((J) => ({ animation: J, options: { type: p } })));
    }
    if (d.size) {
      const P = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (P[p] = h ?? null);
      }),
        f.push({ animation: P });
    }
    let v = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g;
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(a, u);
      }),
      (n[a].isActive = u);
    const f = s(a);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Fc()), (r = !0);
    },
  };
}
function Y0(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Kh(t, e) : !1;
}
function Ht(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Fc() {
  return {
    animate: Ht(!0),
    whileInView: Ht(),
    whileHover: Ht(),
    whileTap: Ht(),
    whileDrag: Ht(),
    whileFocus: Ht(),
    exit: Ht(),
  };
}
class Bt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class X0 extends Bt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Q0(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Do(t) && (this.unmountControls = t.subscribe(this.node));
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
let Z0 = 0;
class q0 extends Bt {
  constructor() {
    super(...arguments), (this.id = Z0++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const J0 = { animation: { Feature: X0 }, exit: { Feature: q0 } },
  Vp = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function jo(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const b0 = (e) => (t) => Vp(t) && e(t, jo(t));
function it(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ut(e, t, n, r) {
  return it(e, t, b0(n), r);
}
const Oc = (e, t) => Math.abs(e - t);
function e1(e, t) {
  const n = Oc(e.x, t.x),
    r = Oc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Dp {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = vs(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = e1(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: y } = f,
          { timestamp: v } = se;
        this.history.push({ ...y, timestamp: v });
        const { onStart: P, onMove: p } = this.handlers;
        d ||
          (P && P(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ys(d, this.transformPagePoint)),
          I.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const P = vs(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ys(d, this.transformPagePoint),
          this.history,
        );
        this.startEvent && g && g(f, P), y && y(f, P);
      }),
      !Vp(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = jo(t),
      l = ys(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = se;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, vs(l, this.history)),
      (this.removeListeners = at(
        ut(this.contextWindow, "pointermove", this.handlePointerMove),
        ut(this.contextWindow, "pointerup", this.handlePointerUp),
        ut(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Nt(this.updatePoint);
  }
}
function ys(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ic(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function vs({ point: e }, t) {
  return {
    point: e,
    delta: Ic(e, _p(t)),
    offset: Ic(e, t1(t)),
    velocity: n1(t, 0.1),
  };
}
function t1(e) {
  return e[0];
}
function _p(e) {
  return e[e.length - 1];
}
function n1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = _p(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > st(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = lt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Np(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const zc = Np("dragHorizontal"),
  Bc = Np("dragVertical");
function jp(e) {
  let t = !1;
  if (e === "y") t = Bc();
  else if (e === "x") t = zc();
  else {
    const n = zc(),
      r = Bc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Fp() {
  const e = jp(!0);
  return e ? (e(), !1) : !0;
}
function Cn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const Op = 1e-4,
  r1 = 1 - Op,
  i1 = 1 + Op,
  Ip = 0.01,
  o1 = 0 - Ip,
  s1 = 0 + Ip;
function Re(e) {
  return e.max - e.min;
}
function l1(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Uc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = H(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (e.translate = H(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= r1 && e.scale <= i1) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= o1 && e.translate <= s1) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Pr(e, t, n, r) {
  Uc(e.x, t.x, n.x, r ? r.originX : void 0),
    Uc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function $c(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Re(t));
}
function a1(e, t, n) {
  $c(e.x, t.x, n.x), $c(e.y, t.y, n.y);
}
function Wc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Re(t));
}
function kr(e, t, n) {
  Wc(e.x, t.x, n.x), Wc(e.y, t.y, n.y);
}
function u1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? H(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Hc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function c1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Hc(e.x, n, i), y: Hc(e.y, t, r) };
}
function Kc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function f1(e, t) {
  return { x: Kc(e.x, t.x), y: Kc(e.y, t.y) };
}
function d1(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return (
    i > r
      ? (n = Wn(t.min, t.max - r, e.min))
      : r > i && (n = Wn(e.min, e.max - i, t.min)),
    jt(0, 1, n)
  );
}
function h1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ml = 0.35;
function p1(e = Ml) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ml),
    { x: Gc(e, "left", "right"), y: Gc(e, "top", "bottom") }
  );
}
function Gc(e, t, n) {
  return { min: Qc(e, t), max: Qc(e, n) };
}
function Qc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Yc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  En = () => ({ x: Yc(), y: Yc() }),
  Xc = () => ({ min: 0, max: 0 }),
  X = () => ({ x: Xc(), y: Xc() });
function _e(e) {
  return [e("x"), e("y")];
}
function zp({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function m1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function g1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ws(e) {
  return e === void 0 || e === 1;
}
function Rl({ scale: e, scaleX: t, scaleY: n }) {
  return !ws(e) || !ws(t) || !ws(n);
}
function Qt(e) {
  return (
    Rl(e) ||
    Bp(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Bp(e) {
  return Zc(e.x) || Zc(e.y);
}
function Zc(e) {
  return e && e !== "0%";
}
function ho(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function qc(e, t, n, r, i) {
  return i !== void 0 && (e = ho(e, i, r)), ho(e, n, r) + t;
}
function Ll(e, t = 0, n = 1, r, i) {
  (e.min = qc(e.min, t, n, r, i)), (e.max = qc(e.max, t, n, r, i));
}
function Up(e, { x: t, y: n }) {
  Ll(e.x, t.translate, t.scale, t.originPoint),
    Ll(e.y, n.translate, n.scale, n.originPoint);
}
const Jc = 0.999999999999,
  bc = 1.0000000000001;
function y1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const { visualElement: a } = o.options;
    (a && a.props.style && a.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Mn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Up(e, s)),
      r && Qt(o.latestValues) && Mn(e, o.latestValues));
  }
  t.x < bc && t.x > Jc && (t.x = 1), t.y < bc && t.y > Jc && (t.y = 1);
}
function An(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function ef(e, t, n, r, i = 0.5) {
  const o = H(e.min, e.max, i);
  Ll(e, t, n, o, r);
}
function Mn(e, t) {
  ef(e.x, t.x, t.scaleX, t.scale, t.originX),
    ef(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function $p(e, t) {
  return zp(g1(e.getBoundingClientRect(), t));
}
function v1(e, t, n) {
  const r = $p(e, n),
    { scroll: i } = t;
  return i && (An(r.x, i.offset.x), An(r.y, i.offset.y)), r;
}
const Wp = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  w1 = new WeakMap();
class S1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = X()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(jo(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = jp(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _e((P) => {
            let p = this.getAxisMotionValue(P).get() || 0;
            if (Je.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[P];
                m && (p = Re(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[P] = p;
          }),
          y && I.postRender(() => y(c, f)),
          El(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: P } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = x1(P)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, P),
          this.updateAxis("y", f.point, P),
          this.visualElement.render(),
          v && v(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        _e((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Dp(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Wp(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && I.postRender(() => o(t, n));
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
    const { drag: i } = this.getProps();
    if (!r || !xi(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = u1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    n && Cn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = c1(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = p1(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _e((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = h1(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Cn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = v1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = f1(i.layout.layoutBox, o);
    if (n) {
      const l = n(m1(s));
      (this.hasMutatedConstraints = !!l), l && (s = zp(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = _e((c) => {
        if (!xi(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      El(this.visualElement, t), r.start(Ka(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    _e((t) => {
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
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    _e((n) => {
      const { drag: r } = this.getProps();
      if (!xi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - H(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Cn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _e((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[s] = d1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      _e((s) => {
        if (!xi(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(H(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    w1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ut(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Cn(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      I.read(r);
    const s = it(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (_e((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Ml,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function xi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function x1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class P1 extends Bt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = pe),
      (this.removeListeners = pe),
      (this.controls = new S1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || pe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const tf = (e) => (t, n) => {
  e && I.postRender(() => e(t, n));
};
class k1 extends Bt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = pe);
  }
  onPointerDown(t) {
    this.session = new Dp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Wp(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: tf(t),
      onStart: tf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && I.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ut(this.node.current, "pointerdown", (t) =>
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
const Fo = E.createContext(null);
function T1() {
  const e = E.useContext(Fo);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = E.useId();
  E.useEffect(() => r(i), []);
  const o = E.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const Za = E.createContext({}),
  Hp = E.createContext({}),
  Fi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function nf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const or = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = nf(e, t.target.x),
        r = nf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  C1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ft.parse(e);
      if (i.length > 5) return r;
      const o = Ft.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = H(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  po = {};
function E1(e) {
  Object.assign(po, e);
}
const { schedule: qa, cancel: DS } = Gh(queueMicrotask, !1);
class A1 extends E.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    E1(M1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Fi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              I.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      qa.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Kp(e) {
  const [t, n] = T1(),
    r = E.useContext(Za);
  return R.jsx(A1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(Hp),
    isPresent: t,
    safeToRemove: n,
  });
}
const M1 = {
    borderRadius: {
      ...or,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: or,
    borderTopRightRadius: or,
    borderBottomLeftRadius: or,
    borderBottomRightRadius: or,
    boxShadow: C1,
  },
  Gp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  R1 = Gp.length,
  rf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  of = (e) => typeof e == "number" || L.test(e);
function L1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = H(0, n.opacity !== void 0 ? n.opacity : 1, V1(r))),
      (e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, D1(r))))
    : o &&
      (e.opacity = H(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < R1; s++) {
    const l = `border${Gp[s]}Radius`;
    let a = sf(t, l),
      u = sf(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || of(a) === of(u)
        ? ((e[l] = Math.max(H(rf(a), rf(u), r), 0)),
          (Je.test(u) || Je.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function sf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const V1 = Qp(0, 0.5, bh),
  D1 = Qp(0.5, 0.95, pe);
function Qp(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Wn(e, t, r)));
}
function lf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function De(e, t) {
  lf(e.x, t.x), lf(e.y, t.y);
}
function af(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function uf(e, t, n, r, i) {
  return (
    (e -= t), (e = ho(e, 1 / n, r)), i !== void 0 && (e = ho(e, 1 / i, r)), e
  );
}
function _1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Je.test(t) &&
      ((t = parseFloat(t)), (t = H(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = H(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = uf(e.min, t, n, l, i)),
    (e.max = uf(e.max, t, n, l, i));
}
function cf(e, t, [n, r, i], o, s) {
  _1(e, t[n], t[r], t[i], t.scale, o, s);
}
const N1 = ["x", "scaleX", "originX"],
  j1 = ["y", "scaleY", "originY"];
function ff(e, t, n, r) {
  cf(e.x, t, N1, n ? n.x : void 0, r ? r.x : void 0),
    cf(e.y, t, j1, n ? n.y : void 0, r ? r.y : void 0);
}
function df(e) {
  return e.translate === 0 && e.scale === 1;
}
function Yp(e) {
  return df(e.x) && df(e.y);
}
function hf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function F1(e, t) {
  return hf(e.x, t.x) && hf(e.y, t.y);
}
function pf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Xp(e, t) {
  return pf(e.x, t.x) && pf(e.y, t.y);
}
function mf(e) {
  return Re(e.x) / Re(e.y);
}
function gf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class O1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ga(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Qa(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
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
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
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
function I1(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const z1 = (e, t) => e.depth - t.depth;
class B1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ga(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Qa(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(z1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Oi(e) {
  const t = he(e) ? e.get() : e;
  return V0(t) ? t.toValue() : t;
}
function U1(e, t) {
  const n = be.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Nt(r), e(o - t));
    };
  return I.read(r, !0), () => Nt(r);
}
function $1(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function W1(e, t, n) {
  const r = he(e) ? e : Hr(e);
  return r.start(Ka("", r, t, n)), r.animation;
}
const Yt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  fr = typeof window < "u" && window.MotionDebug !== void 0,
  Ss = ["", "X", "Y", "Z"],
  H1 = { visibility: "hidden" },
  yf = 1e3;
let K1 = 0;
function xs(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Zp(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Mp(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", I, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Zp(r);
}
function qp({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = K1++),
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
            fr &&
              (Yt.totalNodes =
                Yt.resolvedTargetDeltas =
                Yt.recalculatedProjection =
                  0),
            this.nodes.forEach(Y1),
            this.nodes.forEach(b1),
            this.nodes.forEach(ew),
            this.nodes.forEach(X1),
            fr && window.MotionDebug.record(Yt);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new B1());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ya()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = $1(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = U1(d, 250)),
            Fi.hasAnimatedSinceResize &&
              ((Fi.hasAnimatedSinceResize = !1), this.nodes.forEach(wf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || ow,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Xp(this.targetLayout, y) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const w = { ...Va(v, "layout"), onPlay: P, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || wf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Nt(this.updateProjection);
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
        this.nodes && this.nodes.forEach(tw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Zp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vf);
        return;
      }
      this.isUpdating || this.nodes.forEach(q1),
        (this.isUpdating = !1),
        this.nodes.forEach(J1),
        this.nodes.forEach(G1),
        this.nodes.forEach(Q1),
        this.clearAllSnapshots();
      const l = be.now();
      (se.delta = jt(0, 1e3 / 60, l - se.timestamp)),
        (se.timestamp = l),
        (se.isProcessing = !0),
        ds.update.process(se),
        ds.preRender.process(se),
        ds.render.process(se),
        (se.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), qa.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Z1), this.sharedNodes.forEach(nw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        I.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      I.postRender(() => {
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
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = X()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Yp(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || Qt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        sw(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: l } = this.options;
      if (!l) return X();
      const a = l.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(lw)
        )
      ) {
        const { scroll: c } = this.root;
        c && (An(a.x, c.offset.x), An(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = X();
      if (
        (De(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && De(a, s), An(a.x, f.offset.x), An(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(s, l = !1) {
      const a = X();
      De(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Mn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Qt(c.latestValues) && Mn(a, c.latestValues);
      }
      return Qt(this.latestValues) && Mn(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = X();
      De(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Qt(u.latestValues)) continue;
        Rl(u.latestValues) && u.updateSnapshot();
        const c = X(),
          f = u.measurePageBox();
        De(c, f),
          ff(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Qt(this.latestValues) && ff(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== se.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = se.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = X()),
              (this.relativeTargetOrigin = X()),
              kr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              De(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = X()), (this.targetWithTransforms = X())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                a1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : De(this.target, this.layout.layoutBox),
                  Up(this.target, this.targetDelta))
                : De(this.target, this.layout.layoutBox),
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
                (this.relativeTarget = X()),
                (this.relativeTargetOrigin = X()),
                kr(this.relativeTargetOrigin, this.target, g.target),
                De(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          fr && Yt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Rl(this.parent.latestValues) ||
          Bp(this.parent.latestValues)
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
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === se.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      De(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      y1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = X()));
      const { target: y } = l;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (af(this.prevProjectionDelta.x, this.projectionDelta.x),
          af(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Pr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !gf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !gf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        fr && Yt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        s)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = En()),
        (this.projectionDelta = En()),
        (this.projectionDeltaWithTransform = En());
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = En();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = X(),
        g = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        P = this.getStack(),
        p = !P || P.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(iw));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Sf(f.x, s.x, S),
          Sf(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (kr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            rw(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && F1(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = X()),
            De(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), L1(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Nt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = I.update(() => {
          (Fi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = W1(0, yf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
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
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(yf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Jp(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || X();
          const f = Re(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Re(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        De(l, a),
          Mn(l, c),
          Pr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new O1()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && xs("z", s, u, this.animationValues);
      for (let c = 0; c < Ss.length; c++)
        xs(`rotate${Ss[c]}`, s, u, this.animationValues),
          xs(`skew${Ss[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return H1;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Oi(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Oi(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Qt(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = I1(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
      for (const v in po) {
        if (d[v] === void 0) continue;
        const { correct: P, applyTo: p } = po[v],
          h = u.transform === "none" ? d[v] : P(d[v], f);
        if (p) {
          const m = p.length;
          for (let w = 0; w < m; w++) u[p[w]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Oi(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(vf),
        this.root.sharedNodes.clear();
    }
  };
}
function G1(e) {
  e.updateLayout();
}
function Q1(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? _e((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Re(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : Jp(o, n.layoutBox, r) &&
        _e((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Re(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const l = En();
    Pr(l, r, n.layoutBox);
    const a = En();
    s ? Pr(a, e.applyTransform(i, !0), n.measuredBox) : Pr(a, r, n.layoutBox);
    const u = !Yp(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = X();
          kr(y, n.layoutBox, d.layoutBox);
          const v = X();
          kr(v, r, g.layoutBox),
            Xp(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Y1(e) {
  fr && Yt.totalNodes++,
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
function X1(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Z1(e) {
  e.clearSnapshot();
}
function vf(e) {
  e.clearMeasurements();
}
function q1(e) {
  e.isLayoutDirty = !1;
}
function J1(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function wf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function b1(e) {
  e.resolveTargetDelta();
}
function ew(e) {
  e.calcProjection();
}
function tw(e) {
  e.resetSkewAndRotation();
}
function nw(e) {
  e.removeLeadSnapshot();
}
function Sf(e, t, n) {
  (e.translate = H(t.translate, 0, n)),
    (e.scale = H(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function xf(e, t, n, r) {
  (e.min = H(t.min, n.min, r)), (e.max = H(t.max, n.max, r));
}
function rw(e, t, n, r) {
  xf(e.x, t.x, n.x, r), xf(e.y, t.y, n.y, r);
}
function iw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ow = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Pf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  kf = Pf("applewebkit/") && !Pf("chrome/") ? Math.round : pe;
function Tf(e) {
  (e.min = kf(e.min)), (e.max = kf(e.max));
}
function sw(e) {
  Tf(e.x), Tf(e.y);
}
function Jp(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !l1(mf(t), mf(n), 0.2))
  );
}
function lw(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const aw = qp({
    attachResizeListener: (e, t) => it(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ps = { current: void 0 },
  bp = qp({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ps.current) {
        const e = new aw({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ps.current = e);
      }
      return Ps.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  uw = {
    pan: { Feature: k1 },
    drag: { Feature: P1, ProjectionNode: bp, MeasureLayout: Kp },
  };
function Cf(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Fp()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t);
      const a = l[r];
      a && I.postRender(() => a(o, s));
    };
  return ut(e.current, n, i, { passive: !e.getProps()[r] });
}
class cw extends Bt {
  mount() {
    this.unmount = at(Cf(this.node, !0), Cf(this.node, !1));
  }
  unmount() {}
}
class fw extends Bt {
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
    this.unmount = at(
      it(this.node.current, "focus", () => this.onFocus()),
      it(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const em = (e, t) => (t ? (e === t ? !0 : em(e, t.parentElement)) : !1);
function ks(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, jo(n));
}
class dw extends Bt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = pe),
      (this.removeEndListeners = pe),
      (this.removeAccessibleListeners = pe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = ut(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !em(this.node.current, l.target) ? c : u;
              d && I.update(() => d(l, a));
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          s = ut(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = at(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                ks("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && I.postRender(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = it(this.node.current, "keyup", s)),
              ks("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = it(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ks("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = it(this.node.current, "blur", r);
        this.removeAccessibleListeners = at(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && I.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Fp()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && I.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = ut(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      r = it(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = at(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Vl = new WeakMap(),
  Ts = new WeakMap(),
  hw = (e) => {
    const t = Vl.get(e.target);
    t && t(e);
  },
  pw = (e) => {
    e.forEach(hw);
  };
function mw({ root: e, ...t }) {
  const n = e || document;
  Ts.has(n) || Ts.set(n, {});
  const r = Ts.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(pw, { root: e, ...t })), r[i];
}
function gw(e, t, n) {
  const r = mw(t);
  return (
    Vl.set(e, n),
    r.observe(e),
    () => {
      Vl.delete(e), r.unobserve(e);
    }
  );
}
const yw = { some: 0, all: 1 };
class vw extends Bt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : yw[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return gw(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(ww(t, n)) && this.startObserver();
  }
  unmount() {}
}
function ww({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Sw = {
    inView: { Feature: vw },
    tap: { Feature: dw },
    focus: { Feature: fw },
    hover: { Feature: cw },
  },
  xw = { layout: { ProjectionNode: bp, MeasureLayout: Kp } },
  Ja = E.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Oo = E.createContext({}),
  ba = typeof window < "u",
  tm = ba ? E.useLayoutEffect : E.useEffect,
  nm = E.createContext({ strict: !1 });
function Pw(e, t, n, r, i) {
  var o, s;
  const { visualElement: l } = E.useContext(Oo),
    a = E.useContext(nm),
    u = E.useContext(Fo),
    c = E.useContext(Ja).reducedMotion,
    f = E.useRef();
  (r = r || a.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    g = E.useContext(Hp);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    kw(f.current, n, i, g),
    E.useInsertionEffect(() => {
      d && d.update(n, u);
    });
  const y = n[Ap],
    v = E.useRef(
      !!y &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, y)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, y)),
    );
  return (
    tm(() => {
      d &&
        ((window.MotionIsMounted = !0),
        d.updateFeatures(),
        qa.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    E.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var P;
            (P = window.MotionHandoffMarkAsComplete) === null ||
              P === void 0 ||
              P.call(window, y);
          }),
          (v.current = !1)));
    }),
    d
  );
}
function kw(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : rm(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (l && Cn(l)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function rm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : rm(e.parent);
}
function Tw(e, t, n) {
  return E.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Cn(n) && (n.current = r));
    },
    [t],
  );
}
function Io(e) {
  return Do(e.animate) || La.some((t) => Ur(e[t]));
}
function im(e) {
  return !!(Io(e) || e.variants);
}
function Cw(e, t) {
  if (Io(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ur(n) ? n : void 0,
      animate: Ur(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Ew(e) {
  const { initial: t, animate: n } = Cw(e, E.useContext(Oo));
  return E.useMemo(() => ({ initial: t, animate: n }), [Ef(t), Ef(n)]);
}
function Ef(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Af = {
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
  Hn = {};
for (const e in Af) Hn[e] = { isEnabled: (t) => Af[e].some((n) => !!t[n]) };
function Aw(e) {
  for (const t in e) Hn[t] = { ...Hn[t], ...e[t] };
}
const Mw = Symbol.for("motionComponentSymbol");
function Rw({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Aw(e);
  function o(l, a) {
    let u;
    const c = { ...E.useContext(Ja), ...l, layoutId: Lw(l) },
      { isStatic: f } = c,
      d = Ew(l),
      g = r(l, f);
    if (!f && ba) {
      Vw();
      const y = Dw(c);
      (u = y.MeasureLayout),
        (d.visualElement = Pw(i, g, c, t, y.ProjectionNode));
    }
    return R.jsxs(Oo.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? R.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, l, Tw(g, d.visualElement, a), g, f, d.visualElement),
      ],
    });
  }
  const s = E.forwardRef(o);
  return (s[Mw] = i), s;
}
function Lw({ layoutId: e }) {
  const t = E.useContext(Za).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Vw(e, t) {
  E.useContext(nm).strict;
}
function Dw(e) {
  const { drag: t, layout: n } = Hn;
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
const _w = [
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
function eu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(_w.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function om(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const sm = new Set([
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
function lm(e, t, n, r) {
  om(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(sm.has(i) ? i : Xa(i), t.attrs[i]);
}
function am(e, { layout: t, layoutId: n }) {
  return (
    cn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!po[e] || e === "opacity"))
  );
}
function tu(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (he(i[s]) ||
      (t.style && he(t.style[s])) ||
      am(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function um(e, t, n) {
  const r = tu(e, t, n);
  for (const i in e)
    if (he(e[i]) || he(t[i])) {
      const o =
        Zr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function nu(e) {
  const t = E.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Nw(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o,
) {
  const s = { latestValues: jw(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const cm = (e) => (t, n) => {
  const r = E.useContext(Oo),
    i = E.useContext(Fo),
    o = () => Nw(e, t, r, i);
  return n ? o() : nu(o);
};
function jw(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Oi(o[d]);
  let { initial: s, animate: l } = e;
  const a = Io(e),
    u = im(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  if (f && typeof f != "boolean" && !Do(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = Ma(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: P, ...p } = y;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[h] = m);
        }
        for (const h in v) i[h] = v[h];
      }
    }
  }
  return i;
}
const ru = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  fm = () => ({ ...ru(), attrs: {} }),
  dm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Fw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Ow = Zr.length;
function Iw(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < Ow; o++) {
    const s = Zr[o],
      l = e[s];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (s.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = dm(l, Ia[s]);
      if (!a) {
        i = !1;
        const c = Fw[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function iu(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (cn.has(a)) {
      s = !0;
      continue;
    } else if (ip(a)) {
      i[a] = u;
      continue;
    } else {
      const c = dm(u, Ia[a]);
      a.startsWith("origin") ? ((l = !0), (o[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = Iw(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
function Mf(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function zw(e, t, n) {
  const r = Mf(t, e.x, e.width),
    i = Mf(n, e.y, e.height);
  return `${r} ${i}`;
}
const Bw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Uw = { offset: "strokeDashoffset", array: "strokeDasharray" };
function $w(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Bw : Uw;
  e[o.offset] = L.transform(-r);
  const s = L.transform(t),
    l = L.transform(n);
  e[o.array] = `${s} ${l}`;
}
function ou(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
) {
  if ((iu(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = zw(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && $w(d, s, l, a, !1);
}
const su = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  Ww = {
    useVisualState: cm({
      scrapeMotionValuesFromProps: um,
      createRenderState: fm,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        I.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          I.render(() => {
            ou(n, r, su(t.tagName), e.transformTemplate), lm(t, n);
          });
      },
    }),
  },
  Hw = {
    useVisualState: cm({
      scrapeMotionValuesFromProps: tu,
      createRenderState: ru,
    }),
  };
function hm(e, t, n) {
  for (const r in t) !he(t[r]) && !am(r, n) && (e[r] = t[r]);
}
function Kw({ transformTemplate: e }, t) {
  return E.useMemo(() => {
    const n = ru();
    return iu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Gw(e, t) {
  const n = e.style || {},
    r = {};
  return hm(r, n, e), Object.assign(r, Kw(e, t)), r;
}
function Qw(e, t) {
  const n = {},
    r = Gw(e, t);
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
const Yw = new Set([
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
function mo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Yw.has(e)
  );
}
let pm = (e) => !mo(e);
function Xw(e) {
  e && (pm = (t) => (t.startsWith("on") ? !mo(t) : e(t)));
}
try {
  Xw(require("@emotion/is-prop-valid").default);
} catch {}
function Zw(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((pm(i) ||
        (n === !0 && mo(i)) ||
        (!t && !mo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function qw(e, t, n, r) {
  const i = E.useMemo(() => {
    const o = fm();
    return (
      ou(o, t, su(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    hm(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Jw(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (eu(n) ? qw : Qw)(r, o, s, n),
      u = Zw(r, typeof n == "string", e),
      c = n !== E.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = E.useMemo(() => (he(f) ? f.get() : f), [f]);
    return E.createElement(n, { ...c, children: d });
  };
}
function bw(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(eu(r) ? Ww : Hw),
      preloadedFeatures: e,
      useRender: Jw(i),
      createVisualElement: t,
      Component: r,
    };
    return Rw(s);
  };
}
const Dl = { current: null },
  mm = { current: !1 };
function eS() {
  if (((mm.current = !0), !!ba))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Dl.current = e.matches);
      e.addListener(t), t();
    } else Dl.current = !1;
}
function tS(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (he(i)) e.addValue(r, i);
    else if (he(o)) e.addValue(r, Hr(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Hr(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Rf = new WeakMap(),
  nS = [...lp, fe, Ft],
  rS = (e) => nS.find(sp(e)),
  Lf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class iS {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    l = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ja),
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
        const d = be.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), I.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u } = s;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Io(n)),
      (this.isVariantNode = im(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const d in f) {
      const g = f[d];
      a[d] !== void 0 && he(g) && g.set(a[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Rf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      mm.current || eS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Dl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Rf.delete(this.current),
      this.projection && this.projection.unmount(),
      Nt(this.notifyUpdate),
      Nt(this.render),
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
    const r = cn.has(t),
      i = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && I.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
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
    for (t in Hn) {
      const n = Hn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : X();
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
    for (let r = 0; r < Lf.length; r++) {
      const i = Lf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = tS(
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
        ((r = Hr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (np(i) || tp(i))
          ? (i = parseFloat(i))
          : !rS(i) && Ft.test(n) && (i = mp(t, n)),
        this.setBaseTarget(t, he(i) ? i.get() : i)),
      he(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = Ma(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !he(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ya()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class gm extends iS {
  constructor() {
    super(...arguments), (this.KeyframeResolver = gp);
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
function oS(e) {
  return window.getComputedStyle(e);
}
class sS extends gm {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = om);
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = za(n);
      return (r && r.default) || 0;
    } else {
      const r = oS(t),
        i = (ip(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return $p(t, n);
  }
  build(t, n, r) {
    iu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return tu(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    he(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class lS extends gm {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = X);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = za(n);
      return (r && r.default) || 0;
    }
    return (n = sm.has(n) ? n : Xa(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return um(t, n, r);
  }
  build(t, n, r) {
    ou(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    lm(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = su(t.tagName)), super.mount(t);
  }
}
const aS = (e, t) =>
    eu(e) ? new lS(t) : new sS(t, { allowProjection: e !== E.Fragment }),
  uS = bw({ ...J0, ...Sw, ...uw, ...xw }, aS),
  _l = Wy(uS);
class cS extends E.Component {
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
function fS({ children: e, isPresent: t }) {
  const n = E.useId(),
    r = E.useRef(null),
    i = E.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = E.useContext(Ja);
  return (
    E.useInsertionEffect(() => {
      const { width: s, height: l, top: a, left: u } = i.current;
      if (t || !r.current || !s || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    R.jsx(cS, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: E.cloneElement(e, { ref: r }),
    })
  );
}
const dS = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const l = nu(hS),
    a = E.useId(),
    u = E.useCallback(
      (f) => {
        l.set(f, !0);
        for (const d of l.values()) if (!d) return;
        r && r();
      },
      [l, r],
    ),
    c = E.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (l.set(f, !1), () => l.delete(f)),
      }),
      o ? [Math.random(), u] : [n, u],
    );
  return (
    E.useMemo(() => {
      l.forEach((f, d) => l.set(d, !1));
    }, [n]),
    E.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = R.jsx(fS, { isPresent: n, children: e })),
    R.jsx(Fo.Provider, { value: c, children: e })
  );
};
function hS() {
  return new Map();
}
const Pi = (e) => e.key || "";
function Vf(e) {
  const t = [];
  return (
    E.Children.forEach(e, (n) => {
      E.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const pS = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  const l = E.useMemo(() => Vf(e), [e]),
    a = l.map(Pi),
    u = E.useRef(!0),
    c = E.useRef(l),
    f = nu(() => new Map()),
    [d, g] = E.useState(l),
    [y, v] = E.useState(l);
  tm(() => {
    (u.current = !1), (c.current = l);
    for (let h = 0; h < y.length; h++) {
      const m = Pi(y[h]);
      a.includes(m) ? f.delete(m) : f.get(m) !== !0 && f.set(m, !1);
    }
  }, [y, a.length, a.join("-")]);
  const P = [];
  if (l !== d) {
    let h = [...l];
    for (let m = 0; m < y.length; m++) {
      const w = y[m],
        S = Pi(w);
      a.includes(S) || (h.splice(m, 0, w), P.push(w));
    }
    s === "wait" && P.length && (h = P), v(Vf(h)), g(l);
    return;
  }
  const { forceRender: p } = E.useContext(Za);
  return R.jsx(R.Fragment, {
    children: y.map((h) => {
      const m = Pi(h),
        w = l === y || a.includes(m),
        S = () => {
          if (f.has(m)) f.set(m, !0);
          else return;
          let T = !0;
          f.forEach((A) => {
            A || (T = !1);
          }),
            T && (p == null || p(), v(c.current), i && i());
        };
      return R.jsx(
        dS,
        {
          isPresent: w,
          initial: !u.current || r ? void 0 : !1,
          custom: w ? void 0 : n,
          presenceAffectsLayout: o,
          mode: s,
          onExitComplete: w ? void 0 : S,
          children: h,
        },
        m,
      );
    }),
  });
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var mS = {
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
 */ const gS = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Xn = (e, t) => {
    const n = E.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: s,
          className: l = "",
          children: a,
          ...u
        },
        c,
      ) =>
        E.createElement(
          "svg",
          {
            ref: c,
            ...mS,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: s ? (Number(o) * 24) / Number(i) : o,
            className: ["lucide", `lucide-${gS(e)}`, l].join(" "),
            ...u,
          },
          [
            ...t.map(([f, d]) => E.createElement(f, d)),
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
 */ const yS = Xn("Cloud", [
  [
    "path",
    { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vS = Xn("Droplets", [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4",
    },
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wS = Xn("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SS = Xn("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xS = Xn("Wind", [
  ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
  ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
  ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PS = Xn("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  kS = ({ weather: e, onDelete: t }) =>
    R.jsx(_l.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      className:
        "w-full max-w-md rounded-3xl overflow-hidden backdrop-blur-lg bg-white/10 text-white shadow-lg mb-6",
      children: R.jsxs("div", {
        className: "relative p-6",
        children: [
          R.jsx("button", {
            onClick: () => t(e.id),
            className: "absolute top-4 right-4 text-white/60 hover:text-white",
            children: "×",
          }),
          R.jsxs("div", {
            className: "flex justify-between items-start mb-8",
            children: [
              R.jsxs("div", {
                children: [
                  R.jsx("h2", {
                    className: "text-3xl font-semibold",
                    children: e.city,
                  }),
                  R.jsx("p", {
                    className: "text-white/60",
                    children: e.country,
                  }),
                ],
              }),
              R.jsxs("div", {
                className: "text-right",
                children: [
                  R.jsxs("div", {
                    className: "text-5xl font-light",
                    children: [Math.round(e.temp), "°"],
                  }),
                  R.jsxs("p", {
                    className: "text-white/60",
                    children: ["Feels like ", Math.round(e.feels_like), "°"],
                  }),
                ],
              }),
            ],
          }),
          R.jsx("div", {
            className: "flex justify-between items-center",
            children: R.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                R.jsx(yS, { className: "w-5 h-5 text-white/60" }),
                R.jsx("span", {
                  className: "capitalize",
                  children: e.description,
                }),
              ],
            }),
          }),
          R.jsxs("div", {
            className: "mt-6 grid grid-cols-2 gap-4",
            children: [
              R.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  R.jsx(vS, { className: "w-5 h-5 text-white/60" }),
                  R.jsxs("span", { children: [e.humidity, "% humidity"] }),
                ],
              }),
              R.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  R.jsx(xS, { className: "w-5 h-5 text-white/60" }),
                  R.jsxs("span", {
                    children: [Math.round(e.wind_speed), " m/s"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  TS = ({ onClose: e, onAdd: t }) => {
    const [n, r] = E.useState(""),
      i = (o) => {
        o.preventDefault(), n.trim() && (t(n.trim()), e());
      };
    return R.jsx(_l.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className:
        "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
      children: R.jsxs(_l.div, {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
        className: "bg-white rounded-2xl p-6 w-full max-w-md shadow-xl",
        children: [
          R.jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              R.jsx("h2", {
                className: "text-xl font-semibold",
                children: "Add City",
              }),
              R.jsx("button", {
                onClick: e,
                className: "p-1 hover:bg-gray-100 rounded-full",
                children: R.jsx(PS, { className: "w-5 h-5" }),
              }),
            ],
          }),
          R.jsxs("form", {
            onSubmit: i,
            children: [
              R.jsxs("div", {
                className: "relative",
                children: [
                  R.jsx(SS, {
                    className:
                      "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                  }),
                  R.jsx("input", {
                    type: "text",
                    value: n,
                    onChange: (o) => r(o.target.value),
                    placeholder: "Enter city name",
                    className:
                      "w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                ],
              }),
              R.jsxs("div", {
                className: "mt-4 flex justify-end gap-2",
                children: [
                  R.jsx("button", {
                    type: "button",
                    onClick: e,
                    className:
                      "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl",
                    children: "Cancel",
                  }),
                  R.jsx("button", {
                    type: "submit",
                    className:
                      "px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600",
                    children: "Add City",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  CS = ({ onAddCity: e }) =>
    R.jsxs("div", {
      className: "flex justify-between items-center mb-8",
      children: [
        R.jsx("h1", {
          className: "text-2xl font-semibold text-white",
          children: "Weather",
        }),
        R.jsx("button", {
          onClick: e,
          className:
            "p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
          children: R.jsx(wS, { className: "w-6 h-6 text-white" }),
        }),
      ],
    }),
  ES = ({ message: e }) =>
    R.jsx("div", {
      className:
        "bg-red-500/10 border border-red-500/20 text-white rounded-xl p-4 mb-6",
      children: e,
    }),
  AS = "03e1cead1dff44eb33c6d1d75a6f97f2",
  MS = "https://api.openweathermap.org/data/2.5";
async function RS(e) {
  const t = await fetch(`${MS}/weather?q=${e}&units=metric&appid=${AS}`);
  if (!t.ok) throw new Error("City not found");
  const n = await t.json();
  return {
    id: n.id,
    city: n.name,
    country: n.sys.country,
    temp: n.main.temp,
    feels_like: n.main.feels_like,
    humidity: n.main.humidity,
    wind_speed: n.wind.speed,
    description: n.weather[0].description,
    icon: n.weather[0].icon,
  };
}
function LS() {
  const [e, t] = E.useState([]),
    [n, r] = E.useState(null),
    [i, o] = E.useState(!1),
    s = async (a) => {
      o(!0);
      try {
        const u = await RS(a);
        t((c) => (c.some((f) => f.id === u.id) ? c : [...c, u])), r(null);
      } catch {
        r("Failed to fetch weather data. Please try again.");
      } finally {
        o(!1);
      }
    },
    l = (a) => {
      t((u) => u.filter((c) => c.id !== a));
    };
  return (
    E.useEffect(() => {
      e.length === 0 && s("Toronto");
    }, []),
    { weathers: e, error: n, isLoading: i, fetchWeather: s, deleteCity: l }
  );
}
function VS() {
  const [e, t] = E.useState(!1),
    {
      weathers: n,
      error: r,
      isLoading: i,
      fetchWeather: o,
      deleteCity: s,
    } = LS(),
    l = (a) => {
      o(a);
    };
  return R.jsx("div", {
    className: "min-h-screen p-4 sm:p-6 md:p-8",
    style: { background: "linear-gradient(to bottom, #1e40af, #3b82f6)" },
    children: R.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        R.jsx(CS, { onAddCity: () => t(!0) }),
        r && R.jsx(ES, { message: r }),
        R.jsx("div", {
          className: "grid gap-6 grid-cols-1",
          children: n.map((a) => R.jsx(kS, { weather: a, onDelete: s }, a.id)),
        }),
        R.jsx(pS, {
          children: e && R.jsx(TS, { onClose: () => t(!1), onAdd: l }),
        }),
        i &&
          R.jsx("div", {
            className:
              "fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center",
            children: R.jsx("div", {
              className: "bg-white rounded-lg p-4",
              children: "Loading...",
            }),
          }),
      ],
    }),
  });
}
Hh(document.getElementById("root")).render(
  R.jsx(E.StrictMode, { children: R.jsx(VS, {}) }),
);
