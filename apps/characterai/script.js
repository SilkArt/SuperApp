function rp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] },
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
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Eu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ku = { exports: {} },
  Ho = {},
  Nu = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r = Symbol.for("react.element"),
  op = Symbol.for("react.portal"),
  lp = Symbol.for("react.fragment"),
  ip = Symbol.for("react.strict_mode"),
  sp = Symbol.for("react.profiler"),
  ap = Symbol.for("react.provider"),
  up = Symbol.for("react.context"),
  cp = Symbol.for("react.forward_ref"),
  dp = Symbol.for("react.suspense"),
  fp = Symbol.for("react.memo"),
  pp = Symbol.for("react.lazy"),
  Zs = Symbol.iterator;
function mp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zs && e[Zs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _u = Object.assign,
  Ru = {};
function Dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ru),
    (this.updater = n || Pu);
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tu() {}
Tu.prototype = Dn.prototype;
function Vi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ru),
    (this.updater = n || Pu);
}
var Hi = (Vi.prototype = new Tu());
Hi.constructor = Vi;
_u(Hi, Dn.prototype);
Hi.isPureReactComponent = !0;
var Js = Array.isArray,
  Lu = Object.prototype.hasOwnProperty,
  Qi = { current: null },
  ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function Au(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Lu.call(t, r) && !ju.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: _r,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Qi.current,
  };
}
function hp(e, t) {
  return {
    $$typeof: _r,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _r;
}
function vp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qs = /\/+/g;
function pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vp("" + e.key)
    : t.toString(36);
}
function ro(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _r:
          case op:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + pl(i, 0) : r),
      Js(o)
        ? ((n = ""),
          e != null && (n = e.replace(qs, "$&/") + "/"),
          ro(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ki(o) &&
            (o = hp(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(qs, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Js(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + pl(l, s);
      i += ro(l, t, n, a, o);
    }
  else if (((a = mp(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + pl(l, s++)), (i += ro(l, t, n, a, o));
  else if (l === "object")
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
function Dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ro(e, r, "", "", function (l) {
      return t.call(n, l, o++);
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
var ve = { current: null },
  oo = { transition: null },
  yp = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: oo,
    ReactCurrentOwner: Qi,
  };
function Ou() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: Dr,
  forEach: function (e, t, n) {
    Dr(
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
      Dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ki(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
D.Component = Dn;
D.Fragment = lp;
D.Profiler = sp;
D.PureComponent = Vi;
D.StrictMode = ip;
D.Suspense = dp;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
D.act = Ou;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = _u({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Qi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Lu.call(t, a) &&
        !ju.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: _r, type: e.type, key: o, ref: l, props: r, _owner: i };
};
D.createContext = function (e) {
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
D.createElement = Au;
D.createFactory = function (e) {
  var t = Au.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: cp, render: e };
};
D.isValidElement = Ki;
D.lazy = function (e) {
  return { $$typeof: pp, _payload: { _status: -1, _result: e }, _init: gp };
};
D.memo = function (e, t) {
  return { $$typeof: fp, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = oo.transition;
  oo.transition = {};
  try {
    e();
  } finally {
    oo.transition = t;
  }
};
D.unstable_act = Ou;
D.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
D.useContext = function (e) {
  return ve.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
D.useId = function () {
  return ve.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return ve.current.useRef(e);
};
D.useState = function (e) {
  return ve.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return ve.current.useTransition();
};
D.version = "18.3.1";
Nu.exports = D;
var d = Nu.exports;
const wp = Eu(d),
  Sp = rp({ __proto__: null, default: wp }, [d]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xp = d,
  Cp = Symbol.for("react.element"),
  Ep = Symbol.for("react.fragment"),
  kp = Object.prototype.hasOwnProperty,
  Np = xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pp = { key: !0, ref: !0, __self: !0, __source: !0 };
function zu(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) kp.call(t, r) && !Pp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Cp,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Np.current,
  };
}
Ho.Fragment = Ep;
Ho.jsx = zu;
Ho.jsxs = zu;
ku.exports = Ho;
var g = ku.exports,
  Du = { exports: {} },
  _e = {},
  Mu = { exports: {} },
  Iu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, A) {
    var O = R.length;
    R.push(A);
    e: for (; 0 < O; ) {
      var b = (O - 1) >>> 1,
        te = R[b];
      if (0 < o(te, A)) (R[b] = A), (R[O] = te), (O = b);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var A = R[0],
      O = R.pop();
    if (O !== A) {
      R[0] = O;
      e: for (var b = 0, te = R.length, Or = te >>> 1; b < Or; ) {
        var Mt = 2 * (b + 1) - 1,
          fl = R[Mt],
          It = Mt + 1,
          zr = R[It];
        if (0 > o(fl, O))
          It < te && 0 > o(zr, fl)
            ? ((R[b] = zr), (R[It] = O), (b = It))
            : ((R[b] = fl), (R[Mt] = O), (b = Mt));
        else if (It < te && 0 > o(zr, O)) (R[b] = zr), (R[It] = O), (b = It);
        else break e;
      }
    }
    return A;
  }
  function o(R, A) {
    var O = R.sortIndex - A.sortIndex;
    return O !== 0 ? O : R.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    p = 3,
    w = !1,
    x = !1,
    y = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= R)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function S(R) {
    if (((y = !1), v(R), !x))
      if (n(a) !== null) (x = !0), ct(E);
      else {
        var A = n(u);
        A !== null && tn(S, A.startTime - R);
      }
  }
  function E(R, A) {
    (x = !1), y && ((y = !1), m(_), (_ = -1)), (w = !0);
    var O = p;
    try {
      for (
        v(A), h = n(a);
        h !== null && (!(h.expirationTime > A) || (R && !G()));

      ) {
        var b = h.callback;
        if (typeof b == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var te = b(h.expirationTime <= A);
          (A = e.unstable_now()),
            typeof te == "function" ? (h.callback = te) : h === n(a) && r(a),
            v(A);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var Or = !0;
      else {
        var Mt = n(u);
        Mt !== null && tn(S, Mt.startTime - A), (Or = !1);
      }
      return Or;
    } finally {
      (h = null), (p = O), (w = !1);
    }
  }
  var P = !1,
    N = null,
    _ = -1,
    j = 5,
    L = -1;
  function G() {
    return !(e.unstable_now() - L < j);
  }
  function I() {
    if (N !== null) {
      var R = e.unstable_now();
      L = R;
      var A = !0;
      try {
        A = N(!0, R);
      } finally {
        A ? ut() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var ut;
  if (typeof f == "function")
    ut = function () {
      f(I);
    };
  else if (typeof MessageChannel < "u") {
    var Dt = new MessageChannel(),
      Ar = Dt.port2;
    (Dt.port1.onmessage = I),
      (ut = function () {
        Ar.postMessage(null);
      });
  } else
    ut = function () {
      C(I, 0);
    };
  function ct(R) {
    (N = R), P || ((P = !0), ut());
  }
  function tn(R, A) {
    _ = C(function () {
      R(e.unstable_now());
    }, A);
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
      x || w || ((x = !0), ct(E));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (j = 0 < R ? Math.floor(1e3 / R) : 5);
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
          var A = 3;
          break;
        default:
          A = p;
      }
      var O = p;
      p = A;
      try {
        return R();
      } finally {
        p = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, A) {
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
      var O = p;
      p = R;
      try {
        return A();
      } finally {
        p = O;
      }
    }),
    (e.unstable_scheduleCallback = function (R, A, O) {
      var b = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? b + O : b))
          : (O = b),
        R)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = O + te),
        (R = {
          id: c++,
          callback: A,
          priorityLevel: R,
          startTime: O,
          expirationTime: te,
          sortIndex: -1,
        }),
        O > b
          ? ((R.sortIndex = O),
            t(u, R),
            n(a) === null &&
              R === n(u) &&
              (y ? (m(_), (_ = -1)) : (y = !0), tn(S, O - b)))
          : ((R.sortIndex = te), t(a, R), x || w || ((x = !0), ct(E))),
        R
      );
    }),
    (e.unstable_shouldYield = G),
    (e.unstable_wrapCallback = function (R) {
      var A = p;
      return function () {
        var O = p;
        p = A;
        try {
          return R.apply(this, arguments);
        } finally {
          p = O;
        }
      };
    });
})(Iu);
Mu.exports = Iu;
var _p = Mu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rp = d,
  Pe = _p;
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
var bu = new Set(),
  ur = {};
function Jt(e, t) {
  _n(e, t), _n(e + "Capture", t);
}
function _n(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) bu.add(t[e]);
}
var ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  Tp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ea = {},
  ta = {};
function Lp(e) {
  return Gl.call(ta, e)
    ? !0
    : Gl.call(ea, e)
      ? !1
      : Tp.test(e)
        ? (ta[e] = !0)
        : ((ea[e] = !0), !1);
}
function jp(e, t, n, r) {
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
  if (t === null || typeof t > "u" || jp(e, t, n, r)) return !0;
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
function ge(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gi = /[\-:]([a-z])/g;
function Yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gi, Yi);
    ie[t] = new ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gi, Yi);
    ie[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gi, Yi);
  ie[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xi(e, t, n, r) {
  var o = ie.hasOwnProperty(t) ? ie[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ap(t, n, o, r) && (n = null),
    r || o === null
      ? Lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var at = Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mr = Symbol.for("react.element"),
  sn = Symbol.for("react.portal"),
  an = Symbol.for("react.fragment"),
  Zi = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  Fu = Symbol.for("react.provider"),
  Wu = Symbol.for("react.context"),
  Ji = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  qi = Symbol.for("react.memo"),
  ht = Symbol.for("react.lazy"),
  Uu = Symbol.for("react.offscreen"),
  na = Symbol.iterator;
function Fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (na && e[na]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  ml;
function Yn(e) {
  if (ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ml = (t && t[1]) || "";
    }
  return (
    `
` +
    ml +
    e
  );
}
var hl = !1;
function vl(e, t) {
  if (!e || hl) return "";
  hl = !0;
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
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (hl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function Op(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vl(e.type, !1)), e;
    case 11:
      return (e = vl(e.type.render, !1)), e;
    case 1:
      return (e = vl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case an:
      return "Fragment";
    case sn:
      return "Portal";
    case Yl:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wu:
        return (e.displayName || "Context") + ".Consumer";
      case Fu:
        return (e._context.displayName || "Context") + ".Provider";
      case Ji:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qi:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case ht:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function zp(e) {
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
      return Jl(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
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
function Tt(e) {
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
function $u(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dp(e) {
  var t = $u(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
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
function Ir(e) {
  e._valueTracker || (e._valueTracker = Dp(e));
}
function Bu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = $u(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function yo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ra(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Tt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Vu(e, t) {
  (t = t.checked), t != null && Xi(e, "checked", t, !1);
}
function ei(e, t) {
  Vu(e, t);
  var n = Tt(t.value),
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
    ? ti(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ti(e, t.type, Tt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function oa(e, t, n) {
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
function ti(e, t, n) {
  (t !== "number" || yo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Tt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function la(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Tt(n) };
}
function Hu(e, t) {
  var n = Tt(t.value),
    r = Tt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ia(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ri(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var br,
  Ku = (function (e) {
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
        br = br || document.createElement("div"),
          br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = br.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
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
Object.keys(qn).forEach(function (e) {
  Mp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qn[t] = qn[e]);
  });
});
function Gu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (qn.hasOwnProperty(e) && qn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Yu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Gu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ip = K(
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
function oi(e, t) {
  if (t) {
    if (Ip[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function li(e, t) {
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
var ii = null;
function es(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  Sn = null,
  xn = null;
function sa(e) {
  if ((e = Lr(e))) {
    if (typeof si != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Xo(t)), si(e.stateNode, e.type, t));
  }
}
function Xu(e) {
  Sn ? (xn ? xn.push(e) : (xn = [e])) : (Sn = e);
}
function Zu() {
  if (Sn) {
    var e = Sn,
      t = xn;
    if (((xn = Sn = null), sa(e), t)) for (e = 0; e < t.length; e++) sa(t[e]);
  }
}
function Ju(e, t) {
  return e(t);
}
function qu() {}
var gl = !1;
function ec(e, t, n) {
  if (gl) return e(t, n);
  gl = !0;
  try {
    return Ju(e, t, n);
  } finally {
    (gl = !1), (Sn !== null || xn !== null) && (qu(), Zu());
  }
}
function dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xo(n);
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
var ai = !1;
if (ot)
  try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", Wn, Wn),
      window.removeEventListener("test", Wn, Wn);
  } catch {
    ai = !1;
  }
function bp(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var er = !1,
  wo = null,
  So = !1,
  ui = null,
  Fp = {
    onError: function (e) {
      (er = !0), (wo = e);
    },
  };
function Wp(e, t, n, r, o, l, i, s, a) {
  (er = !1), (wo = null), bp.apply(Fp, arguments);
}
function Up(e, t, n, r, o, l, i, s, a) {
  if ((Wp.apply(this, arguments), er)) {
    if (er) {
      var u = wo;
      (er = !1), (wo = null);
    } else throw Error(k(198));
    So || ((So = !0), (ui = u));
  }
}
function qt(e) {
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
function tc(e) {
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
function aa(e) {
  if (qt(e) !== e) throw Error(k(188));
}
function $p(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qt(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return aa(o), e;
        if (l === r) return aa(o), t;
        l = l.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
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
      if (!i) {
        for (s = l.child; s; ) {
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
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function nc(e) {
  return (e = $p(e)), e !== null ? rc(e) : null;
}
function rc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = rc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var oc = Pe.unstable_scheduleCallback,
  ua = Pe.unstable_cancelCallback,
  Bp = Pe.unstable_shouldYield,
  Vp = Pe.unstable_requestPaint,
  X = Pe.unstable_now,
  Hp = Pe.unstable_getCurrentPriorityLevel,
  ts = Pe.unstable_ImmediatePriority,
  lc = Pe.unstable_UserBlockingPriority,
  xo = Pe.unstable_NormalPriority,
  Qp = Pe.unstable_LowPriority,
  ic = Pe.unstable_IdlePriority,
  Qo = null,
  Ye = null;
function Kp(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(Qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : Xp,
  Gp = Math.log,
  Yp = Math.LN2;
function Xp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gp(e) / Yp) | 0)) | 0;
}
var Fr = 64,
  Wr = 4194304;
function Zn(e) {
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
function Co(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Zn(s)) : ((l &= i), l !== 0 && (r = Zn(l)));
  } else (i = n & ~o), i !== 0 ? (r = Zn(i)) : l !== 0 && (r = Zn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Zp(e, t) {
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
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Ue(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = Zp(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function ci(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function sc() {
  var e = Fr;
  return (Fr <<= 1), !(Fr & 4194240) && (Fr = 64), e;
}
function yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Rr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
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
    var o = 31 - Ue(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ns(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var F = 0;
function ac(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var uc,
  rs,
  cc,
  dc,
  fc,
  di = !1,
  Ur = [],
  xt = null,
  Ct = null,
  Et = null,
  fr = new Map(),
  pr = new Map(),
  gt = [],
  em =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ca(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
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
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Lr(t)), t !== null && rs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function tm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (xt = Un(xt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Ct = Un(Ct, e, t, n, r, o)), !0;
    case "mouseover":
      return (Et = Un(Et, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return fr.set(l, Un(fr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), pr.set(l, Un(pr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function pc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = tc(n)), t !== null)) {
          (e.blockedOn = t),
            fc(e.priority, function () {
              cc(n);
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
function lo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ii = r), n.target.dispatchEvent(r), (ii = null);
    } else return (t = Lr(n)), t !== null && rs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function da(e, t, n) {
  lo(e) && n.delete(t);
}
function nm() {
  (di = !1),
    xt !== null && lo(xt) && (xt = null),
    Ct !== null && lo(Ct) && (Ct = null),
    Et !== null && lo(Et) && (Et = null),
    fr.forEach(da),
    pr.forEach(da);
}
function $n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, nm)));
}
function mr(e) {
  function t(o) {
    return $n(o, e);
  }
  if (0 < Ur.length) {
    $n(Ur[0], e);
    for (var n = 1; n < Ur.length; n++) {
      var r = Ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && $n(xt, e),
      Ct !== null && $n(Ct, e),
      Et !== null && $n(Et, e),
      fr.forEach(t),
      pr.forEach(t),
      n = 0;
    n < gt.length;
    n++
  )
    (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
    pc(n), n.blockedOn === null && gt.shift();
}
var Cn = at.ReactCurrentBatchConfig,
  Eo = !0;
function rm(e, t, n, r) {
  var o = F,
    l = Cn.transition;
  Cn.transition = null;
  try {
    (F = 1), os(e, t, n, r);
  } finally {
    (F = o), (Cn.transition = l);
  }
}
function om(e, t, n, r) {
  var o = F,
    l = Cn.transition;
  Cn.transition = null;
  try {
    (F = 4), os(e, t, n, r);
  } finally {
    (F = o), (Cn.transition = l);
  }
}
function os(e, t, n, r) {
  if (Eo) {
    var o = fi(e, t, n, r);
    if (o === null) Rl(e, t, r, ko, n), ca(e, r);
    else if (tm(o, e, t, n, r)) r.stopPropagation();
    else if ((ca(e, r), t & 4 && -1 < em.indexOf(e))) {
      for (; o !== null; ) {
        var l = Lr(o);
        if (
          (l !== null && uc(l),
          (l = fi(e, t, n, r)),
          l === null && Rl(e, t, r, ko, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Rl(e, t, r, null, n);
  }
}
var ko = null;
function fi(e, t, n, r) {
  if (((ko = null), (e = es(r)), (e = Wt(e)), e !== null))
    if (((t = qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = tc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ko = e), null;
}
function mc(e) {
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
      switch (Hp()) {
        case ts:
          return 1;
        case lc:
          return 4;
        case xo:
        case Qp:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  ls = null,
  io = null;
function hc() {
  if (io) return io;
  var e,
    t = ls,
    n = t.length,
    r,
    o = "value" in wt ? wt.value : wt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (io = o.slice(e, 1 < r ? 1 - r : void 0));
}
function so(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $r() {
  return !0;
}
function fa() {
  return !1;
}
function Re(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? $r
        : fa),
      (this.isPropagationStopped = fa),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = $r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $r));
      },
      persist: function () {},
      isPersistent: $r,
    }),
    t
  );
}
var Mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  is = Re(Mn),
  Tr = K({}, Mn, { view: 0, detail: 0 }),
  lm = Re(Tr),
  wl,
  Sl,
  Bn,
  Ko = K({}, Tr, {
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
    getModifierState: ss,
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
        : (e !== Bn &&
            (Bn && e.type === "mousemove"
              ? ((wl = e.screenX - Bn.screenX), (Sl = e.screenY - Bn.screenY))
              : (Sl = wl = 0),
            (Bn = e)),
          wl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Sl;
    },
  }),
  pa = Re(Ko),
  im = K({}, Ko, { dataTransfer: 0 }),
  sm = Re(im),
  am = K({}, Tr, { relatedTarget: 0 }),
  xl = Re(am),
  um = K({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cm = Re(um),
  dm = K({}, Mn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fm = Re(dm),
  pm = K({}, Mn, { data: 0 }),
  ma = Re(pm),
  mm = {
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
  vm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vm[e]) ? !!t[e] : !1;
}
function ss() {
  return gm;
}
var ym = K({}, Tr, {
    key: function (e) {
      if (e.key) {
        var t = mm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = so(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: ss,
    charCode: function (e) {
      return e.type === "keypress" ? so(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? so(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  wm = Re(ym),
  Sm = K({}, Ko, {
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
  ha = Re(Sm),
  xm = K({}, Tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ss,
  }),
  Cm = Re(xm),
  Em = K({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  km = Re(Em),
  Nm = K({}, Ko, {
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
  Pm = Re(Nm),
  _m = [9, 13, 27, 32],
  as = ot && "CompositionEvent" in window,
  tr = null;
ot && "documentMode" in document && (tr = document.documentMode);
var Rm = ot && "TextEvent" in window && !tr,
  vc = ot && (!as || (tr && 8 < tr && 11 >= tr)),
  va = " ",
  ga = !1;
function gc(e, t) {
  switch (e) {
    case "keyup":
      return _m.indexOf(t.keyCode) !== -1;
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
function yc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function Tm(e, t) {
  switch (e) {
    case "compositionend":
      return yc(t);
    case "keypress":
      return t.which !== 32 ? null : ((ga = !0), va);
    case "textInput":
      return (e = t.data), e === va && ga ? null : e;
    default:
      return null;
  }
}
function Lm(e, t) {
  if (un)
    return e === "compositionend" || (!as && gc(e, t))
      ? ((e = hc()), (io = ls = wt = null), (un = !1), e)
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
      return vc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jm = {
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
function ya(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jm[e.type] : t === "textarea";
}
function wc(e, t, n, r) {
  Xu(r),
    (t = No(t, "onChange")),
    0 < t.length &&
      ((n = new is("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var nr = null,
  hr = null;
function Am(e) {
  Lc(e, 0);
}
function Go(e) {
  var t = fn(e);
  if (Bu(t)) return e;
}
function Om(e, t) {
  if (e === "change") return t;
}
var Sc = !1;
if (ot) {
  var Cl;
  if (ot) {
    var El = "oninput" in document;
    if (!El) {
      var wa = document.createElement("div");
      wa.setAttribute("oninput", "return;"),
        (El = typeof wa.oninput == "function");
    }
    Cl = El;
  } else Cl = !1;
  Sc = Cl && (!document.documentMode || 9 < document.documentMode);
}
function Sa() {
  nr && (nr.detachEvent("onpropertychange", xc), (hr = nr = null));
}
function xc(e) {
  if (e.propertyName === "value" && Go(hr)) {
    var t = [];
    wc(t, hr, e, es(e)), ec(Am, t);
  }
}
function zm(e, t, n) {
  e === "focusin"
    ? (Sa(), (nr = t), (hr = n), nr.attachEvent("onpropertychange", xc))
    : e === "focusout" && Sa();
}
function Dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Go(hr);
}
function Mm(e, t) {
  if (e === "click") return Go(t);
}
function Im(e, t) {
  if (e === "input" || e === "change") return Go(t);
}
function bm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : bm;
function vr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Gl.call(t, o) || !Be(e[o], t[o])) return !1;
  }
  return !0;
}
function xa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ca(e, t) {
  var n = xa(e);
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
    n = xa(n);
  }
}
function Cc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Cc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ec() {
  for (var e = window, t = yo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yo(e.document);
  }
  return t;
}
function us(e) {
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
  var t = Ec(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && us(n)) {
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
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Ca(n, l));
        var i = Ca(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
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
var Wm = ot && "documentMode" in document && 11 >= document.documentMode,
  cn = null,
  pi = null,
  rr = null,
  mi = !1;
function Ea(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mi ||
    cn == null ||
    cn !== yo(r) ||
    ((r = cn),
    "selectionStart" in r && us(r)
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
    (rr && vr(rr, r)) ||
      ((rr = r),
      (r = No(pi, "onSelect")),
      0 < r.length &&
        ((t = new is("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cn))));
}
function Br(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dn = {
    animationend: Br("Animation", "AnimationEnd"),
    animationiteration: Br("Animation", "AnimationIteration"),
    animationstart: Br("Animation", "AnimationStart"),
    transitionend: Br("Transition", "TransitionEnd"),
  },
  kl = {},
  kc = {};
ot &&
  ((kc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  "TransitionEvent" in window || delete dn.transitionend.transition);
function Yo(e) {
  if (kl[e]) return kl[e];
  if (!dn[e]) return e;
  var t = dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in kc) return (kl[e] = t[n]);
  return e;
}
var Nc = Yo("animationend"),
  Pc = Yo("animationiteration"),
  _c = Yo("animationstart"),
  Rc = Yo("transitionend"),
  Tc = new Map(),
  ka =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function jt(e, t) {
  Tc.set(e, t), Jt(t, [e]);
}
for (var Nl = 0; Nl < ka.length; Nl++) {
  var Pl = ka[Nl],
    Um = Pl.toLowerCase(),
    $m = Pl[0].toUpperCase() + Pl.slice(1);
  jt(Um, "on" + $m);
}
jt(Nc, "onAnimationEnd");
jt(Pc, "onAnimationIteration");
jt(_c, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(Rc, "onTransitionEnd");
_n("onMouseEnter", ["mouseout", "mouseover"]);
_n("onMouseLeave", ["mouseout", "mouseover"]);
_n("onPointerEnter", ["pointerout", "pointerover"]);
_n("onPointerLeave", ["pointerout", "pointerover"]);
Jt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Jt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Jt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Jn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function Na(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Up(r, t, void 0, e), (e.currentTarget = null);
}
function Lc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && o.isPropagationStopped())) break e;
          Na(o, s, u), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          Na(o, s, u), (l = a);
        }
    }
  }
  if (So) throw ((e = ui), (So = !1), (ui = null), e);
}
function $(e, t) {
  var n = t[wi];
  n === void 0 && (n = t[wi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jc(t, e, 2, !1), n.add(r));
}
function _l(e, t, n) {
  var r = 0;
  t && (r |= 4), jc(n, e, r, t);
}
var Vr = "_reactListening" + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Vr]) {
    (e[Vr] = !0),
      bu.forEach(function (n) {
        n !== "selectionchange" && (Bm.has(n) || _l(n, !1, e), _l(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vr] || ((t[Vr] = !0), _l("selectionchange", !1, t));
  }
}
function jc(e, t, n, r) {
  switch (mc(t)) {
    case 1:
      var o = rm;
      break;
    case 4:
      o = om;
      break;
    default:
      o = os;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ai ||
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
function Rl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Wt(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  ec(function () {
    var u = l,
      c = es(n),
      h = [];
    e: {
      var p = Tc.get(e);
      if (p !== void 0) {
        var w = is,
          x = e;
        switch (e) {
          case "keypress":
            if (so(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = wm;
            break;
          case "focusin":
            (x = "focus"), (w = xl);
            break;
          case "focusout":
            (x = "blur"), (w = xl);
            break;
          case "beforeblur":
          case "afterblur":
            w = xl;
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
            w = pa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = sm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Cm;
            break;
          case Nc:
          case Pc:
          case _c:
            w = cm;
            break;
          case Rc:
            w = km;
            break;
          case "scroll":
            w = lm;
            break;
          case "wheel":
            w = Pm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = fm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ha;
        }
        var y = (t & 4) !== 0,
          C = !y && e === "scroll",
          m = y ? (p !== null ? p + "Capture" : null) : p;
        y = [];
        for (var f = u, v; f !== null; ) {
          v = f;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              m !== null && ((S = dr(f, m)), S != null && y.push(yr(f, S, v)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((p = new w(p, x, null, n, c)), h.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ii &&
            (x = n.relatedTarget || n.fromElement) &&
            (Wt(x) || x[lt]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = u),
              (x = x ? Wt(x) : null),
              x !== null &&
                ((C = qt(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = u)),
          w !== x)
        ) {
          if (
            ((y = pa),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ha),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (C = w == null ? p : fn(w)),
            (v = x == null ? p : fn(x)),
            (p = new y(S, f + "leave", w, n, c)),
            (p.target = C),
            (p.relatedTarget = v),
            (S = null),
            Wt(c) === u &&
              ((y = new y(m, f + "enter", x, n, c)),
              (y.target = v),
              (y.relatedTarget = C),
              (S = y)),
            (C = S),
            w && x)
          )
            t: {
              for (y = w, m = x, f = 0, v = y; v; v = nn(v)) f++;
              for (v = 0, S = m; S; S = nn(S)) v++;
              for (; 0 < f - v; ) (y = nn(y)), f--;
              for (; 0 < v - f; ) (m = nn(m)), v--;
              for (; f--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = nn(y)), (m = nn(m));
              }
              y = null;
            }
          else y = null;
          w !== null && Pa(h, p, w, y, !1),
            x !== null && C !== null && Pa(h, C, x, y, !0);
        }
      }
      e: {
        if (
          ((p = u ? fn(u) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var E = Om;
        else if (ya(p))
          if (Sc) E = Im;
          else {
            E = Dm;
            var P = zm;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Mm);
        if (E && (E = E(e, u))) {
          wc(h, E, n, c);
          break e;
        }
        P && P(e, p, u),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            ti(p, "number", p.value);
      }
      switch (((P = u ? fn(u) : window), e)) {
        case "focusin":
          (ya(P) || P.contentEditable === "true") &&
            ((cn = P), (pi = u), (rr = null));
          break;
        case "focusout":
          rr = pi = cn = null;
          break;
        case "mousedown":
          mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mi = !1), Ea(h, n, c);
          break;
        case "selectionchange":
          if (Wm) break;
        case "keydown":
        case "keyup":
          Ea(h, n, c);
      }
      var N;
      if (as)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        un
          ? gc(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (vc &&
          n.locale !== "ko" &&
          (un || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && un && (N = hc())
            : ((wt = c),
              (ls = "value" in wt ? wt.value : wt.textContent),
              (un = !0))),
        (P = No(u, _)),
        0 < P.length &&
          ((_ = new ma(_, e, null, n, c)),
          h.push({ event: _, listeners: P }),
          N ? (_.data = N) : ((N = yc(n)), N !== null && (_.data = N)))),
        (N = Rm ? Tm(e, n) : Lm(e, n)) &&
          ((u = No(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ma("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    Lc(h, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = dr(e, n)),
      l != null && r.unshift(yr(e, l, o)),
      (l = dr(e, t)),
      l != null && r.push(yr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pa(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = dr(n, l)), a != null && i.unshift(yr(n, a, s)))
        : o || ((a = dr(n, l)), a != null && i.push(yr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vm = /\r\n?/g,
  Hm = /\u0000|\uFFFD/g;
function _a(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vm,
      `
`,
    )
    .replace(Hm, "");
}
function Hr(e, t, n) {
  if (((t = _a(t)), _a(e) !== t && n)) throw Error(k(425));
}
function Po() {}
var hi = null,
  vi = null;
function gi(e, t) {
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
var yi = typeof setTimeout == "function" ? setTimeout : void 0,
  Qm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ra = typeof Promise == "function" ? Promise : void 0,
  Km =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ra < "u"
        ? function (e) {
            return Ra.resolve(null).then(e).catch(Gm);
          }
        : yi;
function Gm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Tl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), mr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  mr(t);
}
function kt(e) {
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
function Ta(e) {
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
var In = Math.random().toString(36).slice(2),
  Ke = "__reactFiber$" + In,
  wr = "__reactProps$" + In,
  lt = "__reactContainer$" + In,
  wi = "__reactEvents$" + In,
  Ym = "__reactListeners$" + In,
  Xm = "__reactHandles$" + In;
function Wt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[lt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ta(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = Ta(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Lr(e) {
  return (
    (e = e[Ke] || e[lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Xo(e) {
  return e[wr] || null;
}
var Si = [],
  pn = -1;
function At(e) {
  return { current: e };
}
function B(e) {
  0 > pn || ((e.current = Si[pn]), (Si[pn] = null), pn--);
}
function W(e, t) {
  pn++, (Si[pn] = e.current), (e.current = t);
}
var Lt = {},
  de = At(Lt),
  Se = At(!1),
  Ht = Lt;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Lt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function _o() {
  B(Se), B(de);
}
function La(e, t, n) {
  if (de.current !== Lt) throw Error(k(168));
  W(de, t), W(Se, n);
}
function Ac(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(k(108, zp(e) || "Unknown", o));
  return K({}, n, r);
}
function Ro(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Lt),
    (Ht = de.current),
    W(de, e),
    W(Se, Se.current),
    !0
  );
}
function ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Ac(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(Se),
      B(de),
      W(de, e))
    : B(Se),
    W(Se, n);
}
var et = null,
  Zo = !1,
  Ll = !1;
function Oc(e) {
  et === null ? (et = [e]) : et.push(e);
}
function Zm(e) {
  (Zo = !0), Oc(e);
}
function Ot() {
  if (!Ll && et !== null) {
    Ll = !0;
    var e = 0,
      t = F;
    try {
      var n = et;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (et = null), (Zo = !1);
    } catch (o) {
      throw (et !== null && (et = et.slice(e + 1)), oc(ts, Ot), o);
    } finally {
      (F = t), (Ll = !1);
    }
  }
  return null;
}
var mn = [],
  hn = 0,
  To = null,
  Lo = 0,
  Le = [],
  je = 0,
  Qt = null,
  tt = 1,
  nt = "";
function bt(e, t) {
  (mn[hn++] = Lo), (mn[hn++] = To), (To = e), (Lo = t);
}
function zc(e, t, n) {
  (Le[je++] = tt), (Le[je++] = nt), (Le[je++] = Qt), (Qt = e);
  var r = tt;
  e = nt;
  var o = 32 - Ue(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Ue(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (tt = (1 << (32 - Ue(t) + o)) | (n << o) | r),
      (nt = l + e);
  } else (tt = (1 << l) | (n << o) | r), (nt = e);
}
function cs(e) {
  e.return !== null && (bt(e, 1), zc(e, 1, 0));
}
function ds(e) {
  for (; e === To; )
    (To = mn[--hn]), (mn[hn] = null), (Lo = mn[--hn]), (mn[hn] = null);
  for (; e === Qt; )
    (Qt = Le[--je]),
      (Le[je] = null),
      (nt = Le[--je]),
      (Le[je] = null),
      (tt = Le[--je]),
      (Le[je] = null);
}
var Ne = null,
  ke = null,
  V = !1,
  We = null;
function Dc(e, t) {
  var n = Ae(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Aa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (ke = kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qt !== null ? { id: tt, overflow: nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ci(e) {
  if (V) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Aa(e, t)) {
        if (xi(e)) throw Error(k(418));
        t = kt(n.nextSibling);
        var r = Ne;
        t && Aa(e, t)
          ? Dc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ne = e));
      }
    } else {
      if (xi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ne = e);
    }
  }
}
function Oa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function Qr(e) {
  if (e !== Ne) return !1;
  if (!V) return Oa(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (xi(e)) throw (Mc(), Error(k(418)));
    for (; t; ) Dc(e, t), (t = kt(t.nextSibling));
  }
  if ((Oa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Ne ? kt(e.stateNode.nextSibling) : null;
  return !0;
}
function Mc() {
  for (var e = ke; e; ) e = kt(e.nextSibling);
}
function Tn() {
  (ke = Ne = null), (V = !1);
}
function fs(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Jm = at.ReactCurrentBatchConfig;
function Vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Kr(e, t) {
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
function za(e) {
  var t = e._init;
  return t(e._payload);
}
function Ic(e) {
  function t(m, f) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [f]), (m.flags |= 16)) : v.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function o(m, f) {
    return (m = Rt(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function l(m, f, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((m.flags |= 2), f) : v)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, f, v, S) {
    return f === null || f.tag !== 6
      ? ((f = Il(v, m.mode, S)), (f.return = m), f)
      : ((f = o(f, v)), (f.return = m), f);
  }
  function a(m, f, v, S) {
    var E = v.type;
    return E === an
      ? c(m, f, v.props.children, S, v.key)
      : f !== null &&
          (f.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === ht &&
              za(E) === f.type))
        ? ((S = o(f, v.props)), (S.ref = Vn(m, f, v)), (S.return = m), S)
        : ((S = ho(v.type, v.key, v.props, null, m.mode, S)),
          (S.ref = Vn(m, f, v)),
          (S.return = m),
          S);
  }
  function u(m, f, v, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = bl(v, m.mode, S)), (f.return = m), f)
      : ((f = o(f, v.children || [])), (f.return = m), f);
  }
  function c(m, f, v, S, E) {
    return f === null || f.tag !== 7
      ? ((f = Vt(v, m.mode, S, E)), (f.return = m), f)
      : ((f = o(f, v)), (f.return = m), f);
  }
  function h(m, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Il("" + f, m.mode, v)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Mr:
          return (
            (v = ho(f.type, f.key, f.props, null, m.mode, v)),
            (v.ref = Vn(m, null, f)),
            (v.return = m),
            v
          );
        case sn:
          return (f = bl(f, m.mode, v)), (f.return = m), f;
        case ht:
          var S = f._init;
          return h(m, S(f._payload), v);
      }
      if (Xn(f) || Fn(f))
        return (f = Vt(f, m.mode, v, null)), (f.return = m), f;
      Kr(m, f);
    }
    return null;
  }
  function p(m, f, v, S) {
    var E = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : s(m, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Mr:
          return v.key === E ? a(m, f, v, S) : null;
        case sn:
          return v.key === E ? u(m, f, v, S) : null;
        case ht:
          return (E = v._init), p(m, f, E(v._payload), S);
      }
      if (Xn(v) || Fn(v)) return E !== null ? null : c(m, f, v, S, null);
      Kr(m, v);
    }
    return null;
  }
  function w(m, f, v, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(v) || null), s(f, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Mr:
          return (m = m.get(S.key === null ? v : S.key) || null), a(f, m, S, E);
        case sn:
          return (m = m.get(S.key === null ? v : S.key) || null), u(f, m, S, E);
        case ht:
          var P = S._init;
          return w(m, f, v, P(S._payload), E);
      }
      if (Xn(S) || Fn(S)) return (m = m.get(v) || null), c(f, m, S, E, null);
      Kr(f, S);
    }
    return null;
  }
  function x(m, f, v, S) {
    for (
      var E = null, P = null, N = f, _ = (f = 0), j = null;
      N !== null && _ < v.length;
      _++
    ) {
      N.index > _ ? ((j = N), (N = null)) : (j = N.sibling);
      var L = p(m, N, v[_], S);
      if (L === null) {
        N === null && (N = j);
        break;
      }
      e && N && L.alternate === null && t(m, N),
        (f = l(L, f, _)),
        P === null ? (E = L) : (P.sibling = L),
        (P = L),
        (N = j);
    }
    if (_ === v.length) return n(m, N), V && bt(m, _), E;
    if (N === null) {
      for (; _ < v.length; _++)
        (N = h(m, v[_], S)),
          N !== null &&
            ((f = l(N, f, _)), P === null ? (E = N) : (P.sibling = N), (P = N));
      return V && bt(m, _), E;
    }
    for (N = r(m, N); _ < v.length; _++)
      (j = w(N, m, _, v[_], S)),
        j !== null &&
          (e && j.alternate !== null && N.delete(j.key === null ? _ : j.key),
          (f = l(j, f, _)),
          P === null ? (E = j) : (P.sibling = j),
          (P = j));
    return (
      e &&
        N.forEach(function (G) {
          return t(m, G);
        }),
      V && bt(m, _),
      E
    );
  }
  function y(m, f, v, S) {
    var E = Fn(v);
    if (typeof E != "function") throw Error(k(150));
    if (((v = E.call(v)), v == null)) throw Error(k(151));
    for (
      var P = (E = null), N = f, _ = (f = 0), j = null, L = v.next();
      N !== null && !L.done;
      _++, L = v.next()
    ) {
      N.index > _ ? ((j = N), (N = null)) : (j = N.sibling);
      var G = p(m, N, L.value, S);
      if (G === null) {
        N === null && (N = j);
        break;
      }
      e && N && G.alternate === null && t(m, N),
        (f = l(G, f, _)),
        P === null ? (E = G) : (P.sibling = G),
        (P = G),
        (N = j);
    }
    if (L.done) return n(m, N), V && bt(m, _), E;
    if (N === null) {
      for (; !L.done; _++, L = v.next())
        (L = h(m, L.value, S)),
          L !== null &&
            ((f = l(L, f, _)), P === null ? (E = L) : (P.sibling = L), (P = L));
      return V && bt(m, _), E;
    }
    for (N = r(m, N); !L.done; _++, L = v.next())
      (L = w(N, m, _, L.value, S)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? _ : L.key),
          (f = l(L, f, _)),
          P === null ? (E = L) : (P.sibling = L),
          (P = L));
    return (
      e &&
        N.forEach(function (I) {
          return t(m, I);
        }),
      V && bt(m, _),
      E
    );
  }
  function C(m, f, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === an &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Mr:
          e: {
            for (var E = v.key, P = f; P !== null; ) {
              if (P.key === E) {
                if (((E = v.type), E === an)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (f = o(P, v.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === ht &&
                    za(E) === P.type)
                ) {
                  n(m, P.sibling),
                    (f = o(P, v.props)),
                    (f.ref = Vn(m, P, v)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            v.type === an
              ? ((f = Vt(v.props.children, m.mode, S, v.key)),
                (f.return = m),
                (m = f))
              : ((S = ho(v.type, v.key, v.props, null, m.mode, S)),
                (S.ref = Vn(m, f, v)),
                (S.return = m),
                (m = S));
          }
          return i(m);
        case sn:
          e: {
            for (P = v.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(m, f.sibling),
                    (f = o(f, v.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = bl(v, m.mode, S)), (f.return = m), (m = f);
          }
          return i(m);
        case ht:
          return (P = v._init), C(m, f, P(v._payload), S);
      }
      if (Xn(v)) return x(m, f, v, S);
      if (Fn(v)) return y(m, f, v, S);
      Kr(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = o(f, v)), (f.return = m), (m = f))
          : (n(m, f), (f = Il(v, m.mode, S)), (f.return = m), (m = f)),
        i(m))
      : n(m, f);
  }
  return C;
}
var Ln = Ic(!0),
  bc = Ic(!1),
  jo = At(null),
  Ao = null,
  vn = null,
  ps = null;
function ms() {
  ps = vn = Ao = null;
}
function hs(e) {
  var t = jo.current;
  B(jo), (e._currentValue = t);
}
function Ei(e, t, n) {
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
function En(e, t) {
  (Ao = e),
    (ps = vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (ps !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vn === null)) {
      if (Ao === null) throw Error(k(308));
      (vn = e), (Ao.dependencies = { lanes: 0, firstContext: e });
    } else vn = vn.next = e;
  return t;
}
var Ut = null;
function vs(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function Fc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), vs(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    it(e, r)
  );
}
function it(e, t) {
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
var vt = !1;
function gs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wc(e, t) {
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
function rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      it(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), vs(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    it(e, n)
  );
}
function ao(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ns(e, n);
  }
}
function Da(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
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
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function Oo(e, t, n, r) {
  var o = e.updateQueue;
  vt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), i === null ? (l = u) : (i.next = u), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== i &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var h = o.baseState;
    (i = 0), (c = u = a = null), (s = l);
    do {
      var p = s.lane,
        w = s.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            y = s;
          switch (((p = t), (w = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == "function")) {
                h = x.call(w, h, p);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = y.payload),
                (p = typeof x == "function" ? x.call(w, h, p) : x),
                p == null)
              )
                break e;
              h = K({}, h, p);
              break e;
            case 2:
              vt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [s]) : p.push(s));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (a = h)) : (c = c.next = w),
          (i |= p);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = h),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Gt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Ma(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(k(191, o));
        o.call(r);
      }
    }
}
var jr = {},
  Xe = At(jr),
  Sr = At(jr),
  xr = At(jr);
function $t(e) {
  if (e === jr) throw Error(k(174));
  return e;
}
function ys(e, t) {
  switch ((W(xr, t), W(Sr, e), W(Xe, jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ri(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ri(t, e));
  }
  B(Xe), W(Xe, t);
}
function jn() {
  B(Xe), B(Sr), B(xr);
}
function Uc(e) {
  $t(xr.current);
  var t = $t(Xe.current),
    n = ri(t, e.type);
  t !== n && (W(Sr, e), W(Xe, n));
}
function ws(e) {
  Sr.current === e && (B(Xe), B(Sr));
}
var H = At(0);
function zo(e) {
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
var jl = [];
function Ss() {
  for (var e = 0; e < jl.length; e++)
    jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var uo = at.ReactCurrentDispatcher,
  Al = at.ReactCurrentBatchConfig,
  Kt = 0,
  Q = null,
  q = null,
  ne = null,
  Do = !1,
  or = !1,
  Cr = 0,
  qm = 0;
function ae() {
  throw Error(k(321));
}
function xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Cs(e, t, n, r, o, l) {
  if (
    ((Kt = l),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (uo.current = e === null || e.memoizedState === null ? rh : oh),
    (e = n(r, o)),
    or)
  ) {
    l = 0;
    do {
      if (((or = !1), (Cr = 0), 25 <= l)) throw Error(k(301));
      (l += 1),
        (ne = q = null),
        (t.updateQueue = null),
        (uo.current = lh),
        (e = n(r, o));
    } while (or);
  }
  if (
    ((uo.current = Mo),
    (t = q !== null && q.next !== null),
    (Kt = 0),
    (ne = q = Q = null),
    (Do = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Es() {
  var e = Cr !== 0;
  return (Cr = 0), e;
}
function Qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function De() {
  if (q === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = ne === null ? Q.memoizedState : ne.next;
  if (t !== null) (ne = t), (q = e);
  else {
    if (e === null) throw Error(k(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ol(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = q,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      u = l;
    do {
      var c = u.lane;
      if ((Kt & c) === c)
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
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = h), (i = r)) : (a = a.next = h),
          (Q.lanes |= c),
          (Gt |= c);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      Be(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Q.lanes |= l), (Gt |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zl(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Be(l, t.memoizedState) || (we = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function $c() {}
function Bc(e, t) {
  var n = Q,
    r = De(),
    o = t(),
    l = !Be(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (we = !0)),
    (r = r.queue),
    ks(Qc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      kr(9, Hc.bind(null, n, r, o, t), void 0, null),
      re === null)
    )
      throw Error(k(349));
    Kt & 30 || Vc(n, t, o);
  }
  return o;
}
function Vc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Kc(t) && Gc(e);
}
function Qc(e, t, n) {
  return n(function () {
    Kc(t) && Gc(e);
  });
}
function Kc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Gc(e) {
  var t = it(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function Ia(e) {
  var t = Qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = nh.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Yc() {
  return De().memoizedState;
}
function co(e, t, n, r) {
  var o = Qe();
  (Q.flags |= e),
    (o.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Jo(e, t, n, r) {
  var o = De();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (q !== null) {
    var i = q.memoizedState;
    if (((l = i.destroy), r !== null && xs(r, i.deps))) {
      o.memoizedState = kr(t, n, l, r);
      return;
    }
  }
  (Q.flags |= e), (o.memoizedState = kr(1 | t, n, l, r));
}
function ba(e, t) {
  return co(8390656, 8, e, t);
}
function ks(e, t) {
  return Jo(2048, 8, e, t);
}
function Xc(e, t) {
  return Jo(4, 2, e, t);
}
function Zc(e, t) {
  return Jo(4, 4, e, t);
}
function Jc(e, t) {
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
function qc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Jo(4, 4, Jc.bind(null, t, e), n)
  );
}
function Ns() {}
function ed(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function td(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function nd(e, t, n) {
  return Kt & 21
    ? (Be(n, t) || ((n = sc()), (Q.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function eh(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (Al.transition = r);
  }
}
function rd() {
  return De().memoizedState;
}
function th(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    od(e))
  )
    ld(t, n);
  else if (((n = Fc(e, t, n, r)), n !== null)) {
    var o = me();
    $e(n, e, r, o), id(n, t, r);
  }
}
function nh(e, t, n) {
  var r = _t(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (od(e)) ld(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Be(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), vs(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fc(e, t, o, r)),
      n !== null && ((o = me()), $e(n, e, r, o), id(n, t, r));
  }
}
function od(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function ld(e, t) {
  or = Do = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function id(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ns(e, n);
  }
}
var Mo = {
    readContext: ze,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  rh = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: ba,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        co(4194308, 4, Jc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return co(4, 2, e, t);
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
        (e = e.dispatch = th.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ia,
    useDebugValue: Ns,
    useDeferredValue: function (e) {
      return (Qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Ia(!1),
        t = e[0];
      return (e = eh.bind(null, e[1])), (Qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        o = Qe();
      if (V) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(k(349));
        Kt & 30 || Vc(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ba(Qc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        kr(9, Hc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qe(),
        t = re.identifierPrefix;
      if (V) {
        var n = nt,
          r = tt;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Cr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  oh = {
    readContext: ze,
    useCallback: ed,
    useContext: ze,
    useEffect: ks,
    useImperativeHandle: qc,
    useInsertionEffect: Xc,
    useLayoutEffect: Zc,
    useMemo: td,
    useReducer: Ol,
    useRef: Yc,
    useState: function () {
      return Ol(Er);
    },
    useDebugValue: Ns,
    useDeferredValue: function (e) {
      var t = De();
      return nd(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Ol(Er)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: $c,
    useSyncExternalStore: Bc,
    useId: rd,
    unstable_isNewReconciler: !1,
  },
  lh = {
    readContext: ze,
    useCallback: ed,
    useContext: ze,
    useEffect: ks,
    useImperativeHandle: qc,
    useInsertionEffect: Xc,
    useLayoutEffect: Zc,
    useMemo: td,
    useReducer: zl,
    useRef: Yc,
    useState: function () {
      return zl(Er);
    },
    useDebugValue: Ns,
    useDeferredValue: function (e) {
      var t = De();
      return q === null ? (t.memoizedState = e) : nd(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = zl(Er)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: $c,
    useSyncExternalStore: Bc,
    useId: rd,
    unstable_isNewReconciler: !1,
  };
function be(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ki(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      o = _t(e),
      l = rt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Nt(e, l, o)),
      t !== null && ($e(t, e, o, r), ao(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      o = _t(e),
      l = rt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Nt(e, l, o)),
      t !== null && ($e(t, e, o, r), ao(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = _t(e),
      o = rt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Nt(e, o, r)),
      t !== null && ($e(t, e, r, n), ao(t, e, r));
  },
};
function Fa(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !vr(n, r) || !vr(o, l)
        : !0
  );
}
function sd(e, t, n) {
  var r = !1,
    o = Lt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = ze(l))
      : ((o = xe(t) ? Ht : de.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Rn(e, o) : Lt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Wa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qo.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), gs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = ze(l))
    : ((l = xe(t) ? Ht : de.current), (o.context = Rn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ki(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && qo.enqueueReplaceState(o, o.state, null),
      Oo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function An(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Op(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ih = typeof WeakMap == "function" ? WeakMap : Map;
function ad(e, t, n) {
  (n = rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bo || ((bo = !0), (Mi = r)), Pi(e, t);
    }),
    n
  );
}
function ud(e, t, n) {
  (n = rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Pi(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Pi(e, t),
          typeof r != "function" &&
            (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ua(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ih();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Sh.bind(null, e, t, n)), t.then(e, e));
}
function $a(e) {
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
function Ba(e, t, n, r, o) {
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
              : ((t = rt(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sh = at.ReactCurrentOwner,
  we = !1;
function fe(e, t, n, r) {
  t.child = e === null ? bc(t, null, n, r) : Ln(t, e.child, n, r);
}
function Va(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    En(t, o),
    (r = Cs(e, t, n, r, l, o)),
    (n = Es()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        st(e, t, o))
      : (V && n && cs(t), (t.flags |= 1), fe(e, t, r, o), t.child)
  );
}
function Ha(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Os(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), cd(e, t, l, r, o))
      : ((e = ho(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : vr), n(i, r) && e.ref === t.ref)
    )
      return st(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Rt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (vr(l, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), st(e, t, o);
  }
  return _i(e, t, n, r, o);
}
function dd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(yn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(yn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        W(yn, Ee),
        (Ee |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(yn, Ee),
      (Ee |= r);
  return fe(e, t, o, n), t.child;
}
function fd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _i(e, t, n, r, o) {
  var l = xe(n) ? Ht : de.current;
  return (
    (l = Rn(t, l)),
    En(t, o),
    (n = Cs(e, t, n, r, l, o)),
    (r = Es()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        st(e, t, o))
      : (V && r && cs(t), (t.flags |= 1), fe(e, t, n, o), t.child)
  );
}
function Qa(e, t, n, r, o) {
  if (xe(n)) {
    var l = !0;
    Ro(t);
  } else l = !1;
  if ((En(t, o), t.stateNode === null))
    fo(e, t), sd(t, n, r), Ni(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ze(u))
      : ((u = xe(n) ? Ht : de.current), (u = Rn(t, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Wa(t, i, r, u)),
      (vt = !1);
    var p = t.memoizedState;
    (i.state = p),
      Oo(t, r, i, o),
      (a = t.memoizedState),
      s !== r || p !== a || Se.current || vt
        ? (typeof c == "function" && (ki(t, n, c, r), (a = t.memoizedState)),
          (s = vt || Fa(t, n, s, r, p, a, u))
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
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Wc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : be(t.type, s)),
      (i.props = u),
      (h = t.pendingProps),
      (p = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ze(a))
        : ((a = xe(n) ? Ht : de.current), (a = Rn(t, a)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== h || p !== a) && Wa(t, i, r, a)),
      (vt = !1),
      (p = t.memoizedState),
      (i.state = p),
      Oo(t, r, i, o);
    var x = t.memoizedState;
    s !== h || p !== x || Se.current || vt
      ? (typeof w == "function" && (ki(t, n, w, r), (x = t.memoizedState)),
        (u = vt || Fa(t, n, u, r, p, x, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ri(e, t, n, r, l, o);
}
function Ri(e, t, n, r, o, l) {
  fd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ja(t, n, !1), st(e, t, l);
  (r = t.stateNode), (sh.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ln(t, e.child, null, l)), (t.child = Ln(t, null, s, l)))
      : fe(e, t, s, l),
    (t.memoizedState = r.state),
    o && ja(t, n, !0),
    t.child
  );
}
function pd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? La(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && La(e, t.context, !1),
    ys(e, t.containerInfo);
}
function Ka(e, t, n, r, o) {
  return Tn(), fs(o), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function Li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function md(e, t, n) {
  var r = t.pendingProps,
    o = H.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    W(H, o & 1),
    e === null)
  )
    return (
      Ci(t),
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
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = nl(i, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Li(n)),
              (t.memoizedState = Ti),
              e)
            : Ps(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return ah(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Rt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = Rt(s, l)) : ((l = Vt(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Li(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ti),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Rt(l, { mode: "visible", children: r.children })),
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
function Ps(e, t) {
  return (
    (t = nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gr(e, t, n, r) {
  return (
    r !== null && fs(r),
    Ln(t, e.child, null, n),
    (e = Ps(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ah(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Dl(Error(k(422)))), Gr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = nl({ mode: "visible", children: r.children }, o, 0, null)),
          (l = Vt(l, o, i, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Ln(t, e.child, null, i),
          (t.child.memoizedState = Li(i)),
          (t.memoizedState = Ti),
          l);
  if (!(t.mode & 1)) return Gr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(k(419))), (r = Dl(l, r, void 0)), Gr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), we || s)) {
    if (((r = re), r !== null)) {
      switch (i & -i) {
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
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), it(e, o), $e(r, e, o, -1));
    }
    return As(), (r = Dl(Error(k(421)))), Gr(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xh.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (ke = kt(o.nextSibling)),
      (Ne = t),
      (V = !0),
      (We = null),
      e !== null &&
        ((Le[je++] = tt),
        (Le[je++] = nt),
        (Le[je++] = Qt),
        (tt = e.id),
        (nt = e.overflow),
        (Qt = t)),
      (t = Ps(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ga(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ei(e.return, t, n);
}
function Ml(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function hd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((fe(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ga(e, n, t);
        else if (e.tag === 19) Ga(e, n, t);
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
  if ((W(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && zo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ml(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && zo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ml(t, !0, n, null, l);
        break;
      case "together":
        Ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uh(e, t, n) {
  switch (t.tag) {
    case 3:
      pd(t), Tn();
      break;
    case 5:
      Uc(t);
      break;
    case 1:
      xe(t.type) && Ro(t);
      break;
    case 4:
      ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      W(jo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? md(e, t, n)
            : (W(H, H.current & 1),
              (e = st(e, t, n)),
              e !== null ? e.sibling : null);
      W(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        W(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), dd(e, t, n);
  }
  return st(e, t, n);
}
var vd, ji, gd, yd;
vd = function (e, t) {
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
ji = function () {};
gd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), $t(Xe.current);
    var l = null;
    switch (n) {
      case "input":
        (o = ql(e, o)), (r = ql(e, r)), (l = []);
        break;
      case "select":
        (o = K({}, o, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = ni(e, o)), (r = ni(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Po);
    }
    oi(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ur.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (l = l || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ur.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && $("scroll", e),
                    l || s === a || (l = []))
                  : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
yd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!V)
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
function ch(e, t, n) {
  var r = t.pendingProps;
  switch ((ds(t), t.tag)) {
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
      return xe(t.type) && _o(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        jn(),
        B(Se),
        B(de),
        Ss(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (Fi(We), (We = null)))),
        ji(e, t),
        ue(t),
        null
      );
    case 5:
      ws(t);
      var o = $t(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        gd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ue(t), null;
        }
        if (((e = $t(Xe.current)), Qr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ke] = t), (r[wr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Jn.length; o++) $(Jn[o], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              ra(r, l), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              la(r, l), $("invalid", r);
          }
          oi(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : ur.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              Ir(r), oa(r, l, !0);
              break;
            case "textarea":
              Ir(r), ia(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Po);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qu(n)),
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
            (e[wr] = r),
            vd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = li(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Jn.length; o++) $(Jn[o], e);
                o = r;
                break;
              case "source":
                $("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (o = r);
                break;
              case "details":
                $("toggle", e), (o = r);
                break;
              case "input":
                ra(e, r), (o = ql(e, r)), $("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = K({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                la(e, r), (o = ni(e, r)), $("invalid", e);
                break;
              default:
                o = r;
            }
            oi(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? Yu(e, a)
                  : l === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Ku(e, a))
                    : l === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && cr(e, a)
                        : typeof a == "number" && cr(e, "" + a)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (ur.hasOwnProperty(l)
                          ? a != null && l === "onScroll" && $("scroll", e)
                          : a != null && Xi(e, l, a, i));
              }
            switch (n) {
              case "input":
                Ir(e), oa(e, r, !1);
                break;
              case "textarea":
                Ir(e), ia(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? wn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Po);
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
      if (e && t.stateNode != null) yd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = $t(xr.current)), $t(Xe.current), Qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (l = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (B(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ke !== null && t.mode & 1 && !(t.flags & 128))
          Mc(), Tn(), (t.flags |= 98560), (l = !1);
        else if (((l = Qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(k(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(k(317));
            l[Ke] = t;
          } else
            Tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (l = !1);
        } else We !== null && (Fi(We), (We = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? ee === 0 && (ee = 3) : As())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        jn(), ji(e, t), e === null && gr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return hs(t.type._context), ue(t), null;
    case 17:
      return xe(t.type) && _o(), ue(t), null;
    case 19:
      if ((B(H), (l = t.memoizedState), l === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Hn(l, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = zo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Hn(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            X() > On &&
            ((t.flags |= 128), (r = !0), Hn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = zo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !V)
            )
              return ue(t), null;
          } else
            2 * X() - l.renderingStartTime > On &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = X()),
          (t.sibling = null),
          (n = H.current),
          W(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        js(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function dh(e, t) {
  switch ((ds(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && _o(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jn(),
        B(Se),
        B(de),
        Ss(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ws(t), null;
    case 13:
      if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(H), null;
    case 4:
      return jn(), null;
    case 10:
      return hs(t.type._context), null;
    case 22:
    case 23:
      return js(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yr = !1,
  ce = !1,
  fh = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function gn(e, t) {
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
function Ai(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var Ya = !1;
function ph(e, t) {
  if (((hi = Eo), (e = Ec()), us(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (o !== 0 && h.nodeType !== 3) || (s = i + o),
                h !== l || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (p = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++u === o && (s = i),
                p === l && ++c === r && (a = i),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = w;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vi = { focusedElem: e, selectionRange: n }, Eo = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    C = x.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : be(t.type, y),
                      C,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
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
          Y(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (x = Ya), (Ya = !1), x;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Ai(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function el(e, t) {
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
function Oi(e) {
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
function wd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), wd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[wr], delete t[wi], delete t[Ym], delete t[Xm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sd(e.return)) return null;
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
function zi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Po));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zi(e, t, n), e = e.sibling; e !== null; ) zi(e, t, n), (e = e.sibling);
}
function Di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Di(e, t, n), e = e.sibling; e !== null; ) Di(e, t, n), (e = e.sibling);
}
var oe = null,
  Fe = !1;
function dt(e, t, n) {
  for (n = n.child; n !== null; ) xd(e, t, n), (n = n.sibling);
}
function xd(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(Qo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ce || gn(n, t);
    case 6:
      var r = oe,
        o = Fe;
      (oe = null),
        dt(e, t, n),
        (oe = r),
        (Fe = o),
        oe !== null &&
          (Fe
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (Fe
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Tl(e.parentNode, n)
              : e.nodeType === 1 && Tl(e, n),
            mr(e))
          : Tl(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (o = Fe),
        (oe = n.stateNode.containerInfo),
        (Fe = !0),
        dt(e, t, n),
        (oe = r),
        (Fe = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Ai(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      dt(e, t, n);
      break;
    case 1:
      if (
        !ce &&
        (gn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Y(n, t, s);
        }
      dt(e, t, n);
      break;
    case 21:
      dt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ce = (r = ce) || n.memoizedState !== null), dt(e, t, n), (ce = r))
        : dt(e, t, n);
      break;
    default:
      dt(e, t, n);
  }
}
function Za(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fh()),
      t.forEach(function (r) {
        var o = Ch.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (oe = s.stateNode), (Fe = !1);
              break e;
            case 3:
              (oe = s.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (oe = s.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          s = s.return;
        }
        if (oe === null) throw Error(k(160));
        xd(l, i, o), (oe = null), (Fe = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Y(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Cd(t, e), (t = t.sibling);
}
function Cd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ie(t, e), He(e), r & 4)) {
        try {
          lr(3, e, e.return), el(3, e);
        } catch (y) {
          Y(e, e.return, y);
        }
        try {
          lr(5, e, e.return);
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      break;
    case 1:
      Ie(t, e), He(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (
        (Ie(t, e),
        He(e),
        r & 512 && n !== null && gn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          cr(o, "");
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Vu(o, l),
              li(s, i);
            var u = li(s, l);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                h = a[i + 1];
              c === "style"
                ? Yu(o, h)
                : c === "dangerouslySetInnerHTML"
                  ? Ku(o, h)
                  : c === "children"
                    ? cr(o, h)
                    : Xi(o, c, h, u);
            }
            switch (s) {
              case "input":
                ei(o, l);
                break;
              case "textarea":
                Hu(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var w = l.value;
                w != null
                  ? wn(o, !!l.multiple, w, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? wn(o, !!l.multiple, l.defaultValue, !0)
                      : wn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[wr] = l;
          } catch (y) {
            Y(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ie(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ie(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mr(t.containerInfo);
        } catch (y) {
          Y(e, e.return, y);
        }
      break;
    case 4:
      Ie(t, e), He(e);
      break;
    case 13:
      Ie(t, e),
        He(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ts = X())),
        r & 4 && Za(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ce = (u = ce) || c), Ie(t, e), (ce = u)) : Ie(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (T = e, c = e.child; c !== null; ) {
            for (h = T = c; T !== null; ) {
              switch (((p = T), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, p, p.return);
                  break;
                case 1:
                  gn(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (y) {
                      Y(r, n, y);
                    }
                  }
                  break;
                case 5:
                  gn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    qa(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (T = w)) : qa(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (o = h.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Gu("display", i)));
              } catch (y) {
                Y(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (y) {
                Y(e, e.return, y);
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
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ie(t, e), He(e), r & 4 && Za(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (cr(o, ""), (r.flags &= -33));
          var l = Xa(e);
          Di(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Xa(e);
          zi(e, s, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      Y(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mh(e, t, n) {
  (T = e), Ed(e);
}
function Ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Yr;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ce;
        s = Yr;
        var u = ce;
        if (((Yr = i), (ce = a) && !u))
          for (T = o; T !== null; )
            (i = T),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? eu(o)
                : a !== null
                  ? ((a.return = i), (T = a))
                  : eu(o);
        for (; l !== null; ) (T = l), Ed(l), (l = l.sibling);
        (T = o), (Yr = s), (ce = u);
      }
      Ja(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (T = l)) : Ja(e);
  }
}
function Ja(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ce || el(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ce)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && Ma(t, l, r);
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
                Ma(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                    var h = c.dehydrated;
                    h !== null && mr(h);
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
        ce || (t.flags & 512 && Oi(t));
      } catch (p) {
        Y(t, t.return, p);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function qa(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function eu(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            el(4, t);
          } catch (a) {
            Y(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Y(t, o, a);
            }
          }
          var l = t.return;
          try {
            Oi(t);
          } catch (a) {
            Y(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oi(t);
          } catch (a) {
            Y(t, i, a);
          }
      }
    } catch (a) {
      Y(t, t.return, a);
    }
    if (t === e) {
      T = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (T = s);
      break;
    }
    T = t.return;
  }
}
var hh = Math.ceil,
  Io = at.ReactCurrentDispatcher,
  _s = at.ReactCurrentOwner,
  Oe = at.ReactCurrentBatchConfig,
  M = 0,
  re = null,
  J = null,
  le = 0,
  Ee = 0,
  yn = At(0),
  ee = 0,
  Nr = null,
  Gt = 0,
  tl = 0,
  Rs = 0,
  ir = null,
  ye = null,
  Ts = 0,
  On = 1 / 0,
  qe = null,
  bo = !1,
  Mi = null,
  Pt = null,
  Xr = !1,
  St = null,
  Fo = 0,
  sr = 0,
  Ii = null,
  po = -1,
  mo = 0;
function me() {
  return M & 6 ? X() : po !== -1 ? po : (po = X());
}
function _t(e) {
  return e.mode & 1
    ? M & 2 && le !== 0
      ? le & -le
      : Jm.transition !== null
        ? (mo === 0 && (mo = sc()), mo)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mc(e.type))),
          e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < sr) throw ((sr = 0), (Ii = null), Error(k(185)));
  Rr(e, n, r),
    (!(M & 2) || e !== re) &&
      (e === re && (!(M & 2) && (tl |= n), ee === 4 && yt(e, le)),
      Ce(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((On = X() + 500), Zo && Ot()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = Co(e, e === re ? le : 0);
  if (r === 0)
    n !== null && ua(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ua(n), t === 1))
      e.tag === 0 ? Zm(tu.bind(null, e)) : Oc(tu.bind(null, e)),
        Km(function () {
          !(M & 6) && Ot();
        }),
        (n = null);
    else {
      switch (ac(r)) {
        case 1:
          n = ts;
          break;
        case 4:
          n = lc;
          break;
        case 16:
          n = xo;
          break;
        case 536870912:
          n = ic;
          break;
        default:
          n = xo;
      }
      n = jd(n, kd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kd(e, t) {
  if (((po = -1), (mo = 0), M & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = Co(e, e === re ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wo(e, r);
  else {
    t = r;
    var o = M;
    M |= 2;
    var l = Pd();
    (re !== e || le !== t) && ((qe = null), (On = X() + 500), Bt(e, t));
    do
      try {
        yh();
        break;
      } catch (s) {
        Nd(e, s);
      }
    while (!0);
    ms(),
      (Io.current = l),
      (M = o),
      J !== null ? (t = 0) : ((re = null), (le = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ci(e)), o !== 0 && ((r = o), (t = bi(e, o)))), t === 1)
    )
      throw ((n = Nr), Bt(e, 0), yt(e, r), Ce(e, X()), n);
    if (t === 6) yt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !vh(o) &&
          ((t = Wo(e, r)),
          t === 2 && ((l = ci(e)), l !== 0 && ((r = l), (t = bi(e, l)))),
          t === 1))
      )
        throw ((n = Nr), Bt(e, 0), yt(e, r), Ce(e, X()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ft(e, ye, qe);
          break;
        case 3:
          if (
            (yt(e, r), (r & 130023424) === r && ((t = Ts + 500 - X()), 10 < t))
          ) {
            if (Co(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = yi(Ft.bind(null, e, ye, qe), t);
            break;
          }
          Ft(e, ye, qe);
          break;
        case 4:
          if ((yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = X() - r),
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
                          : 1960 * hh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yi(Ft.bind(null, e, ye, qe), r);
            break;
          }
          Ft(e, ye, qe);
          break;
        case 5:
          Ft(e, ye, qe);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ce(e, X()), e.callbackNode === n ? kd.bind(null, e) : null;
}
function bi(e, t) {
  var n = ir;
  return (
    e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256),
    (e = Wo(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && Fi(t)),
    e
  );
}
function Fi(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function vh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Be(l(), o)) return !1;
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
function yt(e, t) {
  for (
    t &= ~Rs,
      t &= ~tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function tu(e) {
  if (M & 6) throw Error(k(327));
  kn();
  var t = Co(e, 0);
  if (!(t & 1)) return Ce(e, X()), null;
  var n = Wo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ci(e);
    r !== 0 && ((t = r), (n = bi(e, r)));
  }
  if (n === 1) throw ((n = Nr), Bt(e, 0), yt(e, t), Ce(e, X()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ft(e, ye, qe),
    Ce(e, X()),
    null
  );
}
function Ls(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((On = X() + 500), Zo && Ot());
  }
}
function Yt(e) {
  St !== null && St.tag === 0 && !(M & 6) && kn();
  var t = M;
  M |= 1;
  var n = Oe.transition,
    r = F;
  try {
    if (((Oe.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Oe.transition = n), (M = t), !(M & 6) && Ot();
  }
}
function js() {
  (Ee = yn.current), B(yn);
}
function Bt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qm(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((ds(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && _o();
          break;
        case 3:
          jn(), B(Se), B(de), Ss();
          break;
        case 5:
          ws(r);
          break;
        case 4:
          jn();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          hs(r.type._context);
          break;
        case 22:
        case 23:
          js();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (J = e = Rt(e.current, null)),
    (le = Ee = t),
    (ee = 0),
    (Nr = null),
    (Rs = tl = Gt = 0),
    (ye = ir = null),
    Ut !== null)
  ) {
    for (t = 0; t < Ut.length; t++)
      if (((n = Ut[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Ut = null;
  }
  return e;
}
function Nd(e, t) {
  do {
    var n = J;
    try {
      if ((ms(), (uo.current = Mo), Do)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Do = !1;
      }
      if (
        ((Kt = 0),
        (ne = q = Q = null),
        (or = !1),
        (Cr = 0),
        (_s.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Nr = t), (J = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = le),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = $a(i);
          if (w !== null) {
            (w.flags &= -257),
              Ba(w, i, s, l, t),
              w.mode & 1 && Ua(l, u, t),
              (t = w),
              (a = u);
            var x = t.updateQueue;
            if (x === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ua(l, u, t), As();
              break e;
            }
            a = Error(k(426));
          }
        } else if (V && s.mode & 1) {
          var C = $a(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Ba(C, i, s, l, t),
              fs(An(a, s));
            break e;
          }
        }
        (l = a = An(a, s)),
          ee !== 4 && (ee = 2),
          ir === null ? (ir = [l]) : ir.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = ad(l, a, t);
              Da(l, m);
              break e;
            case 1:
              s = a;
              var f = l.type,
                v = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Pt === null || !Pt.has(v))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = ud(l, s, t);
                Da(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Rd(n);
    } catch (E) {
      (t = E), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Pd() {
  var e = Io.current;
  return (Io.current = Mo), e === null ? Mo : e;
}
function As() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(Gt & 268435455) && !(tl & 268435455)) || yt(re, le);
}
function Wo(e, t) {
  var n = M;
  M |= 2;
  var r = Pd();
  (re !== e || le !== t) && ((qe = null), Bt(e, t));
  do
    try {
      gh();
      break;
    } catch (o) {
      Nd(e, o);
    }
  while (!0);
  if ((ms(), (M = n), (Io.current = r), J !== null)) throw Error(k(261));
  return (re = null), (le = 0), ee;
}
function gh() {
  for (; J !== null; ) _d(J);
}
function yh() {
  for (; J !== null && !Bp(); ) _d(J);
}
function _d(e) {
  var t = Ld(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? Rd(e) : (J = t),
    (_s.current = null);
}
function Rd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dh(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (J = null);
        return;
      }
    } else if (((n = ch(n, t, Ee)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Ft(e, t, n) {
  var r = F,
    o = Oe.transition;
  try {
    (Oe.transition = null), (F = 1), wh(e, t, n, r);
  } finally {
    (Oe.transition = o), (F = r);
  }
  return null;
}
function wh(e, t, n, r) {
  do kn();
  while (St !== null);
  if (M & 6) throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (qp(e, l),
    e === re && ((J = re = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xr ||
      ((Xr = !0),
      jd(xo, function () {
        return kn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Oe.transition), (Oe.transition = null);
    var i = F;
    F = 1;
    var s = M;
    (M |= 4),
      (_s.current = null),
      ph(e, n),
      Cd(n, e),
      Fm(vi),
      (Eo = !!hi),
      (vi = hi = null),
      (e.current = n),
      mh(n),
      Vp(),
      (M = s),
      (F = i),
      (Oe.transition = l);
  } else e.current = n;
  if (
    (Xr && ((Xr = !1), (St = e), (Fo = o)),
    (l = e.pendingLanes),
    l === 0 && (Pt = null),
    Kp(n.stateNode),
    Ce(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bo) throw ((bo = !1), (e = Mi), (Mi = null), e);
  return (
    Fo & 1 && e.tag !== 0 && kn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Ii ? sr++ : ((sr = 0), (Ii = e))) : (sr = 0),
    Ot(),
    null
  );
}
function kn() {
  if (St !== null) {
    var e = ac(Fo),
      t = Oe.transition,
      n = F;
    try {
      if (((Oe.transition = null), (F = 16 > e ? 16 : e), St === null))
        var r = !1;
      else {
        if (((e = St), (St = null), (Fo = 0), M & 6)) throw Error(k(331));
        var o = M;
        for (M |= 4, T = e.current; T !== null; ) {
          var l = T,
            i = l.child;
          if (T.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (T = u; T !== null; ) {
                  var c = T;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, c, l);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (T = h);
                  else
                    for (; T !== null; ) {
                      c = T;
                      var p = c.sibling,
                        w = c.return;
                      if ((wd(c), c === u)) {
                        T = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (T = p);
                        break;
                      }
                      T = w;
                    }
                }
              }
              var x = l.alternate;
              if (x !== null) {
                var y = x.child;
                if (y !== null) {
                  x.child = null;
                  do {
                    var C = y.sibling;
                    (y.sibling = null), (y = C);
                  } while (y !== null);
                }
              }
              T = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (T = i);
          else
            e: for (; T !== null; ) {
              if (((l = T), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    lr(9, l, l.return);
                }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (T = m);
                break e;
              }
              T = l.return;
            }
        }
        var f = e.current;
        for (T = f; T !== null; ) {
          i = T;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (T = v);
          else
            e: for (i = f; T !== null; ) {
              if (((s = T), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(9, s);
                  }
                } catch (E) {
                  Y(s, s.return, E);
                }
              if (s === i) {
                T = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (T = S);
                break e;
              }
              T = s.return;
            }
        }
        if (
          ((M = o), Ot(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(Qo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Oe.transition = t);
    }
  }
  return !1;
}
function nu(e, t, n) {
  (t = An(n, t)),
    (t = ad(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = me()),
    e !== null && (Rr(e, 1, t), Ce(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) nu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pt === null || !Pt.has(r)))
        ) {
          (e = An(n, e)),
            (e = ud(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = me()),
            t !== null && (Rr(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (le & n) === n &&
      (ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > X() - Ts)
        ? Bt(e, 0)
        : (Rs |= n)),
    Ce(e, t);
}
function Td(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wr), (Wr <<= 1), !(Wr & 130023424) && (Wr = 4194304))
      : (t = 1));
  var n = me();
  (e = it(e, t)), e !== null && (Rr(e, t, n), Ce(e, n));
}
function xh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Td(e, n);
}
function Ch(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), Td(e, n);
}
var Ld;
Ld = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), uh(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), V && t.flags & 1048576 && zc(t, Lo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fo(e, t), (e = t.pendingProps);
      var o = Rn(t, de.current);
      En(t, n), (o = Cs(null, t, r, e, o, n));
      var l = Es();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((l = !0), Ro(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            gs(t),
            (o.updater = qo),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ni(t, r, e, n),
            (t = Ri(null, t, r, !0, l, n)))
          : ((t.tag = 0), V && l && cs(t), fe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = kh(r)),
          (e = be(r, e)),
          o)
        ) {
          case 0:
            t = _i(null, t, r, e, n);
            break e;
          case 1:
            t = Qa(null, t, r, e, n);
            break e;
          case 11:
            t = Va(null, t, r, e, n);
            break e;
          case 14:
            t = Ha(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        _i(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        Qa(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((pd(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Wc(e, t),
          Oo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = An(Error(k(423)), t)), (t = Ka(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = An(Error(k(424)), t)), (t = Ka(e, t, r, n, o));
            break e;
          } else
            for (
              ke = kt(t.stateNode.containerInfo.firstChild),
                Ne = t,
                V = !0,
                We = null,
                n = bc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tn(), r === o)) {
            t = st(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Uc(t),
        e === null && Ci(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        gi(r, o) ? (i = null) : l !== null && gi(r, l) && (t.flags |= 32),
        fd(e, t),
        fe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ci(t), null;
    case 13:
      return md(e, t, n);
    case 4:
      return (
        ys(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ln(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        Va(e, t, r, o, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          W(jo, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Be(l.value, i)) {
            if (l.children === o.children && !Se.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = rt(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Ei(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Ei(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        fe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        En(t, n),
        (o = ze(o)),
        (r = r(o)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = be(r, t.pendingProps)),
        (o = be(r.type, o)),
        Ha(e, t, r, o, n)
      );
    case 15:
      return cd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        fo(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), Ro(t)) : (e = !1),
        En(t, n),
        sd(t, r, o),
        Ni(t, r, o, n),
        Ri(null, t, r, !0, e, n)
      );
    case 19:
      return hd(e, t, n);
    case 22:
      return dd(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function jd(e, t) {
  return oc(e, t);
}
function Eh(e, t, n, r) {
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
function Ae(e, t, n, r) {
  return new Eh(e, t, n, r);
}
function Os(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function kh(e) {
  if (typeof e == "function") return Os(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ji)) return 11;
    if (e === qi) return 14;
  }
  return 2;
}
function Rt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
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
function ho(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Os(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case an:
        return Vt(n.children, o, l, t);
      case Zi:
        (i = 8), (o |= 8);
        break;
      case Yl:
        return (
          (e = Ae(12, n, t, o | 2)), (e.elementType = Yl), (e.lanes = l), e
        );
      case Xl:
        return (e = Ae(13, n, t, o)), (e.elementType = Xl), (e.lanes = l), e;
      case Zl:
        return (e = Ae(19, n, t, o)), (e.elementType = Zl), (e.lanes = l), e;
      case Uu:
        return nl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Fu:
              i = 10;
              break e;
            case Wu:
              i = 9;
              break e;
            case Ji:
              i = 11;
              break e;
            case qi:
              i = 14;
              break e;
            case ht:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Vt(e, t, n, r) {
  return (e = Ae(7, e, r, t)), (e.lanes = n), e;
}
function nl(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = Uu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Il(e, t, n) {
  return (e = Ae(6, e, null, t)), (e.lanes = n), e;
}
function bl(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nh(e, t, n, r, o) {
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
    (this.eventTimes = yl(0)),
    (this.expirationTimes = yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function zs(e, t, n, r, o, l, i, s, a) {
  return (
    (e = new Nh(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ae(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gs(l),
    e
  );
}
function Ph(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ad(e) {
  if (!e) return Lt;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
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
    if (xe(n)) return Ac(e, n, t);
  }
  return t;
}
function Od(e, t, n, r, o, l, i, s, a) {
  return (
    (e = zs(n, r, !0, e, o, l, i, s, a)),
    (e.context = Ad(null)),
    (n = e.current),
    (r = me()),
    (o = _t(n)),
    (l = rt(r, o)),
    (l.callback = t ?? null),
    Nt(n, l, o),
    (e.current.lanes = o),
    Rr(e, o, r),
    Ce(e, r),
    e
  );
}
function rl(e, t, n, r) {
  var o = t.current,
    l = me(),
    i = _t(o);
  return (
    (n = Ad(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(o, t, i)),
    e !== null && ($e(e, o, i, l), ao(e, o, i)),
    i
  );
}
function Uo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ru(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ds(e, t) {
  ru(e, t), (e = e.alternate) && ru(e, t);
}
function _h() {
  return null;
}
var zd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ms(e) {
  this._internalRoot = e;
}
ol.prototype.render = Ms.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  rl(e, t, null, null);
};
ol.prototype.unmount = Ms.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function () {
      rl(null, e, null, null);
    }),
      (t[lt] = null);
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = dc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
    gt.splice(n, 0, e), n === 0 && pc(e);
  }
};
function Is(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ou() {}
function Rh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Uo(i);
        l.call(u);
      };
    }
    var i = Od(t, r, e, 0, null, !1, !1, "", ou);
    return (
      (e._reactRootContainer = i),
      (e[lt] = i.current),
      gr(e.nodeType === 8 ? e.parentNode : e),
      Yt(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Uo(a);
      s.call(u);
    };
  }
  var a = zs(e, 0, !1, null, null, !1, !1, "", ou);
  return (
    (e._reactRootContainer = a),
    (e[lt] = a.current),
    gr(e.nodeType === 8 ? e.parentNode : e),
    Yt(function () {
      rl(t, a, n, r);
    }),
    a
  );
}
function il(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Uo(i);
        s.call(a);
      };
    }
    rl(t, i, e, o);
  } else i = Rh(n, t, e, o, r);
  return Uo(i);
}
uc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 &&
          (ns(t, n | 1), Ce(t, X()), !(M & 6) && ((On = X() + 500), Ot()));
      }
      break;
    case 13:
      Yt(function () {
        var r = it(e, 1);
        if (r !== null) {
          var o = me();
          $e(r, e, 1, o);
        }
      }),
        Ds(e, 1);
  }
};
rs = function (e) {
  if (e.tag === 13) {
    var t = it(e, 134217728);
    if (t !== null) {
      var n = me();
      $e(t, e, 134217728, n);
    }
    Ds(e, 134217728);
  }
};
cc = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = it(e, t);
    if (n !== null) {
      var r = me();
      $e(n, e, t, r);
    }
    Ds(e, t);
  }
};
dc = function () {
  return F;
};
fc = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ei(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Xo(r);
            if (!o) throw Error(k(90));
            Bu(r), ei(r, o);
          }
        }
      }
      break;
    case "textarea":
      Hu(e, n);
      break;
    case "select":
      (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
  }
};
Ju = Ls;
qu = Yt;
var Th = { usingClientEntryPoint: !1, Events: [Lr, fn, Xo, Xu, Zu, Ls] },
  Qn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Lh = {
    bundleType: Qn.bundleType,
    version: Qn.version,
    rendererPackageName: Qn.rendererPackageName,
    rendererConfig: Qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: at.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = nc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || _h,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zr.isDisabled && Zr.supportsFiber)
    try {
      (Qo = Zr.inject(Lh)), (Ye = Zr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Th;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Is(t)) throw Error(k(200));
  return Ph(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Is(e)) throw Error(k(299));
  var n = !1,
    r = "",
    o = zd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = zs(e, 1, !1, null, null, n, !1, r, o)),
    (e[lt] = t.current),
    gr(e.nodeType === 8 ? e.parentNode : e),
    new Ms(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = nc(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Yt(e);
};
_e.hydrate = function (e, t, n) {
  if (!ll(t)) throw Error(k(200));
  return il(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Is(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = zd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Od(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[lt] = t.current),
    gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ol(t);
};
_e.render = function (e, t, n) {
  if (!ll(t)) throw Error(k(200));
  return il(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!ll(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Yt(function () {
        il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[lt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Ls;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ll(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return il(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Dd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dd);
    } catch (e) {
      console.error(e);
    }
}
Dd(), (Du.exports = _e);
var bs = Du.exports;
const jh = Eu(bs);
var Md,
  lu = bs;
(Md = lu.createRoot), lu.hydrateRoot;
const Ah = { theme: "system", setTheme: () => null },
  Oh = d.createContext(Ah);
function zh({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = "vite-ui-theme",
  ...r
}) {
  const [o, l] = d.useState(() => localStorage.getItem(n) || t);
  d.useEffect(() => {
    const s = window.document.documentElement;
    if ((s.classList.remove("light", "dark"), o === "system")) {
      const a = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      s.classList.add(a);
      return;
    }
    s.classList.add(o);
  }, [o]);
  const i = {
    theme: o,
    setTheme: (s) => {
      localStorage.setItem(n, s), l(s);
    },
  };
  return g.jsx(Oh.Provider, { ...r, value: i, children: e });
}
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Id = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Mh = {
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
 */ const Ih = d.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: l,
      iconNode: i,
      ...s
    },
    a,
  ) =>
    d.createElement(
      "svg",
      {
        ref: a,
        ...Mh,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Id("lucide", o),
        ...s,
      },
      [
        ...i.map(([u, c]) => d.createElement(u, c)),
        ...(Array.isArray(l) ? l : [l]),
      ],
    ),
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const en = (e, t) => {
  const n = d.forwardRef(({ className: r, ...o }, l) =>
    d.createElement(Ih, {
      ref: l,
      iconNode: t,
      className: Id(`lucide-${Dh(e)}`, r),
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
 */ const bh = en("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  [
    "rect",
    { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
  ],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fh = en("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wh = en("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uh = en("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $h = en("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
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
 */ const Vh = en("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
function bd(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = bd(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Hh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = bd(e)) && (r && (r += " "), (r += t));
  return r;
}
const Fs = "-",
  Qh = (e) => {
    const t = Gh(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split(Fs);
        return s[0] === "" && s.length !== 1 && s.shift(), Fd(s, t) || Kh(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const a = n[i] || [];
        return s && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  Fd = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Fd(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(Fs);
    return (i = t.validators.find(({ validator: s }) => s(l))) == null
      ? void 0
      : i.classGroupId;
  },
  iu = /^\[(.+)\]$/,
  Kh = (e) => {
    if (iu.test(e)) {
      const t = iu.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Gh = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Xh(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        Wi(i, r, l, t);
      }),
      r
    );
  },
  Wi = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : su(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Yh(o)) {
          Wi(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, i]) => {
        Wi(i, su(t, l), n, r);
      });
    });
  },
  su = (e, t) => {
    let n = e;
    return (
      t.split(Fs).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Yh = (e) => e.isThemeGetter,
  Xh = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((l) =>
            typeof l == "string"
              ? t + l
              : typeof l == "object"
                ? Object.fromEntries(
                    Object.entries(l).map(([i, s]) => [t + i, s]),
                  )
                : l,
          );
          return [n, o];
        })
      : e,
  Zh = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (l, i) => {
      n.set(l, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(l) {
        let i = n.get(l);
        if (i !== void 0) return i;
        if ((i = r.get(l)) !== void 0) return o(l, i), i;
      },
      set(l, i) {
        n.has(l) ? n.set(l, i) : o(l, i);
      },
    };
  },
  Wd = "!",
  Jh = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      i = (s) => {
        const a = [];
        let u = 0,
          c = 0,
          h;
        for (let C = 0; C < s.length; C++) {
          let m = s[C];
          if (u === 0) {
            if (m === o && (r || s.slice(C, C + l) === t)) {
              a.push(s.slice(c, C)), (c = C + l);
              continue;
            }
            if (m === "/") {
              h = C;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const p = a.length === 0 ? s : s.substring(c),
          w = p.startsWith(Wd),
          x = w ? p.substring(1) : p,
          y = h && h > c ? h - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: w,
          baseClassName: x,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  qh = (e) => {
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
  ev = (e) => ({ cache: Zh(e.cacheSize), parseClassName: Jh(e), ...Qh(e) }),
  tv = /\s+/,
  nv = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      i = e.trim().split(tv);
    let s = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: c,
          hasImportantModifier: h,
          baseClassName: p,
          maybePostfixModifierPosition: w,
        } = n(u);
      let x = !!w,
        y = r(x ? p.substring(0, w) : p);
      if (!y) {
        if (!x) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((y = r(p)), !y)) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        x = !1;
      }
      const C = qh(c).join(":"),
        m = h ? C + Wd : C,
        f = m + y;
      if (l.includes(f)) continue;
      l.push(f);
      const v = o(y, x);
      for (let S = 0; S < v.length; ++S) {
        const E = v[S];
        l.push(m + E);
      }
      s = u + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function rv() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ud(t)) && (r && (r += " "), (r += n));
  return r;
}
const Ud = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ud(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function ov(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(a) {
    const u = t.reduce((c, h) => h(c), e());
    return (n = ev(u)), (r = n.cache.get), (o = n.cache.set), (l = s), s(a);
  }
  function s(a) {
    const u = r(a);
    if (u) return u;
    const c = nv(a, n);
    return o(a, c), c;
  }
  return function () {
    return l(rv.apply(null, arguments));
  };
}
const U = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  $d = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  lv = /^\d+\/\d+$/,
  iv = new Set(["px", "full", "screen"]),
  sv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  av =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  uv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  cv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  dv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Je = (e) => Nn(e) || iv.has(e) || lv.test(e),
  ft = (e) => bn(e, "length", wv),
  Nn = (e) => !!e && !Number.isNaN(Number(e)),
  Fl = (e) => bn(e, "number", Nn),
  Kn = (e) => !!e && Number.isInteger(Number(e)),
  fv = (e) => e.endsWith("%") && Nn(e.slice(0, -1)),
  z = (e) => $d.test(e),
  pt = (e) => sv.test(e),
  pv = new Set(["length", "size", "percentage"]),
  mv = (e) => bn(e, pv, Bd),
  hv = (e) => bn(e, "position", Bd),
  vv = new Set(["image", "url"]),
  gv = (e) => bn(e, vv, xv),
  yv = (e) => bn(e, "", Sv),
  Gn = () => !0,
  bn = (e, t, n) => {
    const r = $d.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  wv = (e) => av.test(e) && !uv.test(e),
  Bd = () => !1,
  Sv = (e) => cv.test(e),
  xv = (e) => dv.test(e),
  Cv = () => {
    const e = U("colors"),
      t = U("spacing"),
      n = U("blur"),
      r = U("brightness"),
      o = U("borderColor"),
      l = U("borderRadius"),
      i = U("borderSpacing"),
      s = U("borderWidth"),
      a = U("contrast"),
      u = U("grayscale"),
      c = U("hueRotate"),
      h = U("invert"),
      p = U("gap"),
      w = U("gradientColorStops"),
      x = U("gradientColorStopPositions"),
      y = U("inset"),
      C = U("margin"),
      m = U("opacity"),
      f = U("padding"),
      v = U("saturate"),
      S = U("scale"),
      E = U("sepia"),
      P = U("skew"),
      N = U("space"),
      _ = U("translate"),
      j = () => ["auto", "contain", "none"],
      L = () => ["auto", "hidden", "clip", "visible", "scroll"],
      G = () => ["auto", z, t],
      I = () => [z, t],
      ut = () => ["", Je, ft],
      Dt = () => ["auto", Nn, z],
      Ar = () => [
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
      ct = () => ["solid", "dashed", "dotted", "double", "none"],
      tn = () => [
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
      A = () => ["", "0", z],
      O = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      b = () => [Nn, z];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Gn],
        spacing: [Je, ft],
        blur: ["none", "", pt, z],
        brightness: b(),
        borderColor: [e],
        borderRadius: ["none", "", "full", pt, z],
        borderSpacing: I(),
        borderWidth: ut(),
        contrast: b(),
        grayscale: A(),
        hueRotate: b(),
        invert: A(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [fv, ft],
        inset: G(),
        margin: G(),
        opacity: b(),
        padding: I(),
        saturate: b(),
        scale: b(),
        sepia: A(),
        skew: b(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", z] }],
        container: ["container"],
        columns: [{ columns: [pt] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
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
        "object-position": [{ object: [...Ar(), z] }],
        overflow: [{ overflow: L() }],
        "overflow-x": [{ "overflow-x": L() }],
        "overflow-y": [{ "overflow-y": L() }],
        overscroll: [{ overscroll: j() }],
        "overscroll-x": [{ "overscroll-x": j() }],
        "overscroll-y": [{ "overscroll-y": j() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Kn, z] }],
        basis: [{ basis: G() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", z] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", Kn, z] }],
        "grid-cols": [{ "grid-cols": [Gn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Kn, z] }, z] }],
        "col-start": [{ "col-start": Dt() }],
        "col-end": [{ "col-end": Dt() }],
        "grid-rows": [{ "grid-rows": [Gn] }],
        "row-start-end": [{ row: ["auto", { span: [Kn, z] }, z] }],
        "row-start": [{ "row-start": Dt() }],
        "row-end": [{ "row-end": Dt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", z] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", z] }],
        gap: [{ gap: [p] }],
        "gap-x": [{ "gap-x": [p] }],
        "gap-y": [{ "gap-y": [p] }],
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
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [C] }],
        mx: [{ mx: [C] }],
        my: [{ my: [C] }],
        ms: [{ ms: [C] }],
        me: [{ me: [C] }],
        mt: [{ mt: [C] }],
        mr: [{ mr: [C] }],
        mb: [{ mb: [C] }],
        ml: [{ ml: [C] }],
        "space-x": [{ "space-x": [N] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [N] }],
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
              { screen: [pt] },
              pt,
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
        "font-size": [{ text: ["base", pt, ft] }],
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
              Fl,
            ],
          },
        ],
        "font-family": [{ font: [Gn] }],
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
        "line-clamp": [{ "line-clamp": ["none", Nn, Fl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Je,
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
        "text-decoration-style": [{ decoration: [...ct(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Je, ft] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Je, z] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
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
        "bg-position": [{ bg: [...Ar(), hv] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", mv] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              gv,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [w] }],
        "gradient-via": [{ via: [w] }],
        "gradient-to": [{ to: [w] }],
        rounded: [{ rounded: [l] }],
        "rounded-s": [{ "rounded-s": [l] }],
        "rounded-e": [{ "rounded-e": [l] }],
        "rounded-t": [{ "rounded-t": [l] }],
        "rounded-r": [{ "rounded-r": [l] }],
        "rounded-b": [{ "rounded-b": [l] }],
        "rounded-l": [{ "rounded-l": [l] }],
        "rounded-ss": [{ "rounded-ss": [l] }],
        "rounded-se": [{ "rounded-se": [l] }],
        "rounded-ee": [{ "rounded-ee": [l] }],
        "rounded-es": [{ "rounded-es": [l] }],
        "rounded-tl": [{ "rounded-tl": [l] }],
        "rounded-tr": [{ "rounded-tr": [l] }],
        "rounded-br": [{ "rounded-br": [l] }],
        "rounded-bl": [{ "rounded-bl": [l] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...ct(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: ct() }],
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
        "outline-style": [{ outline: ["", ...ct()] }],
        "outline-offset": [{ "outline-offset": [Je, z] }],
        "outline-w": [{ outline: [Je, ft] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: ut() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [Je, ft] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", pt, yv] }],
        "shadow-color": [{ shadow: [Gn] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [
          { "mix-blend": [...tn(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": tn() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", pt, z] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [h] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [h] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
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
        duration: [{ duration: b() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", z] }],
        delay: [{ delay: b() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", z] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [Kn, z] }],
        "translate-x": [{ "translate-x": [_] }],
        "translate-y": [{ "translate-y": [_] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
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
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
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
        "stroke-w": [{ stroke: [Je, ft, Fl] }],
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
  Ev = ov(Cv);
function Z(...e) {
  return Ev(Hh(e));
}
const sl = d.forwardRef(({ className: e, type: t, ...n }, r) =>
  g.jsx("input", {
    type: t,
    className: Z(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: r,
    ...n,
  }),
);
sl.displayName = "Input";
function kv(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Vd(...e) {
  return (t) => e.forEach((n) => kv(n, t));
}
function Te(...e) {
  return d.useCallback(Vd(...e), e);
}
var al = d.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = d.Children.toArray(n),
    l = o.find(Pv);
  if (l) {
    const i = l.props.children,
      s = o.map((a) =>
        a === l
          ? d.Children.count(i) > 1
            ? d.Children.only(null)
            : d.isValidElement(i)
              ? i.props.children
              : null
          : a,
      );
    return g.jsx(Ui, {
      ...r,
      ref: t,
      children: d.isValidElement(i) ? d.cloneElement(i, void 0, s) : null,
    });
  }
  return g.jsx(Ui, { ...r, ref: t, children: n });
});
al.displayName = "Slot";
var Ui = d.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (d.isValidElement(n)) {
    const o = Rv(n);
    return d.cloneElement(n, { ..._v(r, n.props), ref: t ? Vd(t, o) : o });
  }
  return d.Children.count(n) > 1 ? d.Children.only(null) : null;
});
Ui.displayName = "SlotClone";
var Nv = ({ children: e }) => g.jsx(g.Fragment, { children: e });
function Pv(e) {
  return d.isValidElement(e) && e.type === Nv;
}
function _v(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...s) => {
            l(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...l })
        : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Rv(e) {
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
function Hd(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Hd(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Tv() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Hd(e)) && (r && (r += " "), (r += t));
  return r;
}
const au = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  uu = Tv,
  Lv = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return uu(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: l } = t,
      i = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          h = l == null ? void 0 : l[u];
        if (c === null) return null;
        const p = au(c) || au(h);
        return o[u][p];
      }),
      s =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [h, p] = c;
          return p === void 0 || (u[h] = p), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: h, className: p, ...w } = c;
              return Object.entries(w).every((x) => {
                let [y, C] = x;
                return Array.isArray(C)
                  ? C.includes({ ...l, ...s }[y])
                  : { ...l, ...s }[y] === C;
              })
                ? [...u, h, p]
                : u;
            }, []);
    return uu(
      e,
      i,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  jv = Lv(
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
  Pr = d.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, l) => {
      const i = r ? al : "button";
      return g.jsx(i, {
        className: Z(jv({ variant: t, size: n, className: e })),
        ref: l,
        ...o,
      });
    },
  );
Pr.displayName = "Button";
var Av = [
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
  se = Av.reduce((e, t) => {
    const n = d.forwardRef((r, o) => {
      const { asChild: l, ...i } = r,
        s = l ? al : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        g.jsx(s, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Ov(e, t) {
  e && bs.flushSync(() => e.dispatchEvent(t));
}
var Xt =
  globalThis != null && globalThis.document ? d.useLayoutEffect : () => {};
function zv(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var zt = (e) => {
  const { present: t, children: n } = e,
    r = Dv(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n),
    l = Te(r.ref, Mv(o));
  return typeof n == "function" || r.isPresent
    ? d.cloneElement(o, { ref: l })
    : null;
};
zt.displayName = "Presence";
function Dv(e) {
  const [t, n] = d.useState(),
    r = d.useRef({}),
    o = d.useRef(e),
    l = d.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [s, a] = zv(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    d.useEffect(() => {
      const u = Jr(r.current);
      l.current = s === "mounted" ? u : "none";
    }, [s]),
    Xt(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const p = l.current,
          w = Jr(u);
        e
          ? a("MOUNT")
          : w === "none" || (u == null ? void 0 : u.display) === "none"
            ? a("UNMOUNT")
            : a(c && p !== w ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    Xt(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          h = (w) => {
            const y = Jr(r.current).includes(w.animationName);
            if (w.target === t && y && (a("ANIMATION_END"), !o.current)) {
              const C = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = C);
                }));
            }
          },
          p = (w) => {
            w.target === t && (l.current = Jr(r.current));
          };
        return (
          t.addEventListener("animationstart", p),
          t.addEventListener("animationcancel", h),
          t.addEventListener("animationend", h),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", p),
              t.removeEventListener("animationcancel", h),
              t.removeEventListener("animationend", h);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: d.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Jr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Mv(e) {
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
function Iv(e, t) {
  const n = d.createContext(t),
    r = (l) => {
      const { children: i, ...s } = l,
        a = d.useMemo(() => s, Object.values(s));
      return g.jsx(n.Provider, { value: a, children: i });
    };
  r.displayName = e + "Provider";
  function o(l) {
    const i = d.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${l}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Ws(e, t = []) {
  let n = [];
  function r(l, i) {
    const s = d.createContext(i),
      a = n.length;
    n = [...n, i];
    const u = (h) => {
      var m;
      const { scope: p, children: w, ...x } = h,
        y = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[a]) || s,
        C = d.useMemo(() => x, Object.values(x));
      return g.jsx(y.Provider, { value: C, children: w });
    };
    u.displayName = l + "Provider";
    function c(h, p) {
      var y;
      const w = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[a]) || s,
        x = d.useContext(w);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${h}\` must be used within \`${l}\``);
    }
    return [u, c];
  }
  const o = () => {
    const l = n.map((i) => d.createContext(i));
    return function (s) {
      const a = (s == null ? void 0 : s[e]) || l;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: a } }), [s, a]);
    };
  };
  return (o.scopeName = e), [r, bv(o, ...t)];
}
function bv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const i = r.reduce((s, { useScope: a, scopeName: u }) => {
        const h = a(l)[`__scope${u}`];
        return { ...s, ...h };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function pe(e) {
  const t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }),
    d.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
var Fv = d.createContext(void 0);
function Wv(e) {
  const t = d.useContext(Fv);
  return e || t || "ltr";
}
function Uv(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function he(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function $v(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var Us = "ScrollArea",
  [Qd, Vy] = Ws(Us),
  [Bv, Me] = Qd(Us),
  Kd = d.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        type: r = "hover",
        dir: o,
        scrollHideDelay: l = 600,
        ...i
      } = e,
      [s, a] = d.useState(null),
      [u, c] = d.useState(null),
      [h, p] = d.useState(null),
      [w, x] = d.useState(null),
      [y, C] = d.useState(null),
      [m, f] = d.useState(0),
      [v, S] = d.useState(0),
      [E, P] = d.useState(!1),
      [N, _] = d.useState(!1),
      j = Te(t, (G) => a(G)),
      L = Wv(o);
    return g.jsx(Bv, {
      scope: n,
      type: r,
      dir: L,
      scrollHideDelay: l,
      scrollArea: s,
      viewport: u,
      onViewportChange: c,
      content: h,
      onContentChange: p,
      scrollbarX: w,
      onScrollbarXChange: x,
      scrollbarXEnabled: E,
      onScrollbarXEnabledChange: P,
      scrollbarY: y,
      onScrollbarYChange: C,
      scrollbarYEnabled: N,
      onScrollbarYEnabledChange: _,
      onCornerWidthChange: f,
      onCornerHeightChange: S,
      children: g.jsx(se.div, {
        dir: L,
        ...i,
        ref: j,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": m + "px",
          "--radix-scroll-area-corner-height": v + "px",
          ...e.style,
        },
      }),
    });
  });
Kd.displayName = Us;
var Gd = "ScrollAreaViewport",
  Yd = d.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: r, asChild: o, nonce: l, ...i } = e,
      s = Me(Gd, n),
      a = d.useRef(null),
      u = Te(t, a, s.onViewportChange);
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`,
          },
          nonce: l,
        }),
        g.jsx(se.div, {
          "data-radix-scroll-area-viewport": "",
          ...i,
          asChild: o,
          ref: u,
          style: {
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
          children: qv({ asChild: o, children: r }, (c) =>
            g.jsx("div", {
              "data-radix-scroll-area-content": "",
              ref: s.onContentChange,
              style: { minWidth: s.scrollbarXEnabled ? "fit-content" : void 0 },
              children: c,
            }),
          ),
        }),
      ],
    });
  });
Yd.displayName = Gd;
var Ze = "ScrollAreaScrollbar",
  $s = d.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Me(Ze, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i } = o,
      s = e.orientation === "horizontal";
    return (
      d.useEffect(
        () => (
          s ? l(!0) : i(!0),
          () => {
            s ? l(!1) : i(!1);
          }
        ),
        [s, l, i],
      ),
      o.type === "hover"
        ? g.jsx(Vv, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
          ? g.jsx(Hv, { ...r, ref: t, forceMount: n })
          : o.type === "auto"
            ? g.jsx(Xd, { ...r, ref: t, forceMount: n })
            : o.type === "always"
              ? g.jsx(Bs, { ...r, ref: t })
              : null
    );
  });
$s.displayName = Ze;
var Vv = d.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Me(Ze, e.__scopeScrollArea),
      [l, i] = d.useState(!1);
    return (
      d.useEffect(() => {
        const s = o.scrollArea;
        let a = 0;
        if (s) {
          const u = () => {
              window.clearTimeout(a), i(!0);
            },
            c = () => {
              a = window.setTimeout(() => i(!1), o.scrollHideDelay);
            };
          return (
            s.addEventListener("pointerenter", u),
            s.addEventListener("pointerleave", c),
            () => {
              window.clearTimeout(a),
                s.removeEventListener("pointerenter", u),
                s.removeEventListener("pointerleave", c);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      g.jsx(zt, {
        present: n || l,
        children: g.jsx(Xd, {
          "data-state": l ? "visible" : "hidden",
          ...r,
          ref: t,
        }),
      })
    );
  }),
  Hv = d.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Me(Ze, e.__scopeScrollArea),
      l = e.orientation === "horizontal",
      i = cl(() => a("SCROLL_END"), 100),
      [s, a] = $v("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      d.useEffect(() => {
        if (s === "idle") {
          const u = window.setTimeout(() => a("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [s, o.scrollHideDelay, a]),
      d.useEffect(() => {
        const u = o.viewport,
          c = l ? "scrollLeft" : "scrollTop";
        if (u) {
          let h = u[c];
          const p = () => {
            const w = u[c];
            h !== w && (a("SCROLL"), i()), (h = w);
          };
          return (
            u.addEventListener("scroll", p),
            () => u.removeEventListener("scroll", p)
          );
        }
      }, [o.viewport, l, a, i]),
      g.jsx(zt, {
        present: n || s !== "hidden",
        children: g.jsx(Bs, {
          "data-state": s === "hidden" ? "hidden" : "visible",
          ...r,
          ref: t,
          onPointerEnter: he(e.onPointerEnter, () => a("POINTER_ENTER")),
          onPointerLeave: he(e.onPointerLeave, () => a("POINTER_LEAVE")),
        }),
      })
    );
  }),
  Xd = d.forwardRef((e, t) => {
    const n = Me(Ze, e.__scopeScrollArea),
      { forceMount: r, ...o } = e,
      [l, i] = d.useState(!1),
      s = e.orientation === "horizontal",
      a = cl(() => {
        if (n.viewport) {
          const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
            c = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(s ? u : c);
        }
      }, 10);
    return (
      zn(n.viewport, a),
      zn(n.content, a),
      g.jsx(zt, {
        present: r || l,
        children: g.jsx(Bs, {
          "data-state": l ? "visible" : "hidden",
          ...o,
          ref: t,
        }),
      })
    );
  }),
  Bs = d.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      o = Me(Ze, e.__scopeScrollArea),
      l = d.useRef(null),
      i = d.useRef(0),
      [s, a] = d.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = tf(s.viewport, s.content),
      c = {
        ...r,
        sizes: s,
        onSizesChange: a,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (p) => (l.current = p),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (p) => (i.current = p),
      };
    function h(p, w) {
      return Zv(p, i.current, s, w);
    }
    return n === "horizontal"
      ? g.jsx(Qv, {
          ...c,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && l.current) {
              const p = o.viewport.scrollLeft,
                w = cu(p, s, o.dir);
              l.current.style.transform = `translate3d(${w}px, 0, 0)`;
            }
          },
          onWheelScroll: (p) => {
            o.viewport && (o.viewport.scrollLeft = p);
          },
          onDragScroll: (p) => {
            o.viewport && (o.viewport.scrollLeft = h(p, o.dir));
          },
        })
      : n === "vertical"
        ? g.jsx(Kv, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                const p = o.viewport.scrollTop,
                  w = cu(p, s);
                l.current.style.transform = `translate3d(0, ${w}px, 0)`;
              }
            },
            onWheelScroll: (p) => {
              o.viewport && (o.viewport.scrollTop = p);
            },
            onDragScroll: (p) => {
              o.viewport && (o.viewport.scrollTop = h(p));
            },
          })
        : null;
  }),
  Qv = d.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      l = Me(Ze, e.__scopeScrollArea),
      [i, s] = d.useState(),
      a = d.useRef(null),
      u = Te(t, a, l.onScrollbarXChange);
    return (
      d.useEffect(() => {
        a.current && s(getComputedStyle(a.current));
      }, [a]),
      g.jsx(Jd, {
        "data-orientation": "horizontal",
        ...o,
        ref: u,
        sizes: n,
        style: {
          bottom: 0,
          left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": ul(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
        onDragScroll: (c) => e.onDragScroll(c.x),
        onWheelScroll: (c, h) => {
          if (l.viewport) {
            const p = l.viewport.scrollLeft + c.deltaX;
            e.onWheelScroll(p), rf(p, h) && c.preventDefault();
          }
        },
        onResize: () => {
          a.current &&
            l.viewport &&
            i &&
            r({
              content: l.viewport.scrollWidth,
              viewport: l.viewport.offsetWidth,
              scrollbar: {
                size: a.current.clientWidth,
                paddingStart: Bo(i.paddingLeft),
                paddingEnd: Bo(i.paddingRight),
              },
            });
        },
      })
    );
  }),
  Kv = d.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      l = Me(Ze, e.__scopeScrollArea),
      [i, s] = d.useState(),
      a = d.useRef(null),
      u = Te(t, a, l.onScrollbarYChange);
    return (
      d.useEffect(() => {
        a.current && s(getComputedStyle(a.current));
      }, [a]),
      g.jsx(Jd, {
        "data-orientation": "vertical",
        ...o,
        ref: u,
        sizes: n,
        style: {
          top: 0,
          right: l.dir === "ltr" ? 0 : void 0,
          left: l.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": ul(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
        onDragScroll: (c) => e.onDragScroll(c.y),
        onWheelScroll: (c, h) => {
          if (l.viewport) {
            const p = l.viewport.scrollTop + c.deltaY;
            e.onWheelScroll(p), rf(p, h) && c.preventDefault();
          }
        },
        onResize: () => {
          a.current &&
            l.viewport &&
            i &&
            r({
              content: l.viewport.scrollHeight,
              viewport: l.viewport.offsetHeight,
              scrollbar: {
                size: a.current.clientHeight,
                paddingStart: Bo(i.paddingTop),
                paddingEnd: Bo(i.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [Gv, Zd] = Qd(Ze),
  Jd = d.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: r,
        hasThumb: o,
        onThumbChange: l,
        onThumbPointerUp: i,
        onThumbPointerDown: s,
        onThumbPositionChange: a,
        onDragScroll: u,
        onWheelScroll: c,
        onResize: h,
        ...p
      } = e,
      w = Me(Ze, n),
      [x, y] = d.useState(null),
      C = Te(t, (j) => y(j)),
      m = d.useRef(null),
      f = d.useRef(""),
      v = w.viewport,
      S = r.content - r.viewport,
      E = pe(c),
      P = pe(a),
      N = cl(h, 10);
    function _(j) {
      if (m.current) {
        const L = j.clientX - m.current.left,
          G = j.clientY - m.current.top;
        u({ x: L, y: G });
      }
    }
    return (
      d.useEffect(() => {
        const j = (L) => {
          const G = L.target;
          (x == null ? void 0 : x.contains(G)) && E(L, S);
        };
        return (
          document.addEventListener("wheel", j, { passive: !1 }),
          () => document.removeEventListener("wheel", j, { passive: !1 })
        );
      }, [v, x, S, E]),
      d.useEffect(P, [r, P]),
      zn(x, N),
      zn(w.content, N),
      g.jsx(Gv, {
        scope: n,
        scrollbar: x,
        hasThumb: o,
        onThumbChange: pe(l),
        onThumbPointerUp: pe(i),
        onThumbPositionChange: P,
        onThumbPointerDown: pe(s),
        children: g.jsx(se.div, {
          ...p,
          ref: C,
          style: { position: "absolute", ...p.style },
          onPointerDown: he(e.onPointerDown, (j) => {
            j.button === 0 &&
              (j.target.setPointerCapture(j.pointerId),
              (m.current = x.getBoundingClientRect()),
              (f.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              w.viewport && (w.viewport.style.scrollBehavior = "auto"),
              _(j));
          }),
          onPointerMove: he(e.onPointerMove, _),
          onPointerUp: he(e.onPointerUp, (j) => {
            const L = j.target;
            L.hasPointerCapture(j.pointerId) &&
              L.releasePointerCapture(j.pointerId),
              (document.body.style.webkitUserSelect = f.current),
              w.viewport && (w.viewport.style.scrollBehavior = ""),
              (m.current = null);
          }),
        }),
      })
    );
  }),
  $o = "ScrollAreaThumb",
  qd = d.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Zd($o, e.__scopeScrollArea);
    return g.jsx(zt, {
      present: n || o.hasThumb,
      children: g.jsx(Yv, { ref: t, ...r }),
    });
  }),
  Yv = d.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e,
      l = Me($o, n),
      i = Zd($o, n),
      { onThumbPositionChange: s } = i,
      a = Te(t, (h) => i.onThumbChange(h)),
      u = d.useRef(),
      c = cl(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      d.useEffect(() => {
        const h = l.viewport;
        if (h) {
          const p = () => {
            if ((c(), !u.current)) {
              const w = Jv(h, s);
              (u.current = w), s();
            }
          };
          return (
            s(),
            h.addEventListener("scroll", p),
            () => h.removeEventListener("scroll", p)
          );
        }
      }, [l.viewport, c, s]),
      g.jsx(se.div, {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: a,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r,
        },
        onPointerDownCapture: he(e.onPointerDownCapture, (h) => {
          const w = h.target.getBoundingClientRect(),
            x = h.clientX - w.left,
            y = h.clientY - w.top;
          i.onThumbPointerDown({ x, y });
        }),
        onPointerUp: he(e.onPointerUp, i.onThumbPointerUp),
      })
    );
  });
qd.displayName = $o;
var Vs = "ScrollAreaCorner",
  ef = d.forwardRef((e, t) => {
    const n = Me(Vs, e.__scopeScrollArea),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? g.jsx(Xv, { ...e, ref: t }) : null;
  });
ef.displayName = Vs;
var Xv = d.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e,
    o = Me(Vs, n),
    [l, i] = d.useState(0),
    [s, a] = d.useState(0),
    u = !!(l && s);
  return (
    zn(o.scrollbarX, () => {
      var h;
      const c = ((h = o.scrollbarX) == null ? void 0 : h.offsetHeight) || 0;
      o.onCornerHeightChange(c), a(c);
    }),
    zn(o.scrollbarY, () => {
      var h;
      const c = ((h = o.scrollbarY) == null ? void 0 : h.offsetWidth) || 0;
      o.onCornerWidthChange(c), i(c);
    }),
    u
      ? g.jsx(se.div, {
          ...r,
          ref: t,
          style: {
            width: l,
            height: s,
            position: "absolute",
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  );
});
function Bo(e) {
  return e ? parseInt(e, 10) : 0;
}
function tf(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ul(e) {
  const t = tf(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Zv(e, t, n, r = "ltr") {
  const o = ul(n),
    l = o / 2,
    i = t || l,
    s = o - i,
    a = n.scrollbar.paddingStart + i,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - s,
    c = n.content - n.viewport,
    h = r === "ltr" ? [0, c] : [c * -1, 0];
  return nf([a, u], h)(e);
}
function cu(e, t, n = "ltr") {
  const r = ul(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    l = t.scrollbar.size - o,
    i = t.content - t.viewport,
    s = l - r,
    a = n === "ltr" ? [0, i] : [i * -1, 0],
    u = Uv(e, a);
  return nf([0, i], [0, s])(u);
}
function nf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function rf(e, t) {
  return e > 0 && e < t;
}
var Jv = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const l = { left: e.scrollLeft, top: e.scrollTop },
        i = n.left !== l.left,
        s = n.top !== l.top;
      (i || s) && t(), (n = l), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
};
function cl(e, t) {
  const n = pe(e),
    r = d.useRef(0);
  return (
    d.useEffect(() => () => window.clearTimeout(r.current), []),
    d.useCallback(() => {
      window.clearTimeout(r.current), (r.current = window.setTimeout(n, t));
    }, [n, t])
  );
}
function zn(e, t) {
  const n = pe(t);
  Xt(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function qv(e, t) {
  const { asChild: n, children: r } = e;
  if (!n) return typeof t == "function" ? t(r) : t;
  const o = d.Children.only(r);
  return d.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t,
  });
}
var of = Kd,
  eg = Yd,
  tg = ef;
const Hs = d.forwardRef(({ className: e, children: t, ...n }, r) =>
  g.jsxs(of, {
    ref: r,
    className: Z("relative overflow-hidden", e),
    ...n,
    children: [
      g.jsx(eg, { className: "h-full w-full rounded-[inherit]", children: t }),
      g.jsx(lf, {}),
      g.jsx(tg, {}),
    ],
  }),
);
Hs.displayName = of.displayName;
const lf = d.forwardRef(
  ({ className: e, orientation: t = "vertical", ...n }, r) =>
    g.jsx($s, {
      ref: r,
      orientation: t,
      className: Z(
        "flex touch-none select-none transition-colors",
        t === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        t === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        e,
      ),
      ...n,
      children: g.jsx(qd, {
        className: "relative flex-1 rounded-full bg-border",
      }),
    }),
);
lf.displayName = $s.displayName;
const ng = [
  {
    id: "1",
    name: "Sherlock Holmes",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=sherlock",
    description: "The world's greatest detective",
    greeting:
      "Elementary, my dear friend. What mystery shall we unravel today?",
  },
  {
    id: "2",
    name: "Tony Stark",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=tony",
    description: "Genius, billionaire, philanthropist",
    greeting: "JARVIS is offline, but I'm here. What's on your mind?",
  },
  {
    id: "3",
    name: "Elizabeth Bennet",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=elizabeth",
    description: "Pride and Prejudice protagonist",
    greeting:
      "It is a truth universally acknowledged that a good conversation starts with a proper introduction.",
  },
  {
    id: "4",
    name: "Gandalf",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=gandalf",
    description: "The Grey Wizard",
    greeting:
      "A wizard is never late, nor is he early. He arrives precisely when he means to.",
  },
  {
    id: "5",
    name: "Wednesday Addams",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=wednesday",
    description: "Delightfully dark and witty",
    greeting:
      "I find social interaction distinctly uncomfortable. Let's make this interesting.",
  },
  {
    id: "6",
    name: "Doctor Who",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=doctor",
    description: "Time Lord from Gallifrey",
    greeting:
      "All of time and space, everywhere and anywhere, every star that ever was. Where do you want to start?",
  },
];
var Qs = "Avatar",
  [rg, Hy] = Ws(Qs),
  [og, sf] = rg(Qs),
  af = d.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [o, l] = d.useState("idle");
    return g.jsx(og, {
      scope: n,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: l,
      children: g.jsx(se.span, { ...r, ref: t }),
    });
  });
af.displayName = Qs;
var uf = "AvatarImage",
  cf = d.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: o = () => {},
        ...l
      } = e,
      i = sf(uf, n),
      s = lg(r, l.referrerPolicy),
      a = pe((u) => {
        o(u), i.onImageLoadingStatusChange(u);
      });
    return (
      Xt(() => {
        s !== "idle" && a(s);
      }, [s, a]),
      s === "loaded" ? g.jsx(se.img, { ...l, ref: t, src: r }) : null
    );
  });
cf.displayName = uf;
var df = "AvatarFallback",
  ff = d.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e,
      l = sf(df, n),
      [i, s] = d.useState(r === void 0);
    return (
      d.useEffect(() => {
        if (r !== void 0) {
          const a = window.setTimeout(() => s(!0), r);
          return () => window.clearTimeout(a);
        }
      }, [r]),
      i && l.imageLoadingStatus !== "loaded"
        ? g.jsx(se.span, { ...o, ref: t })
        : null
    );
  });
ff.displayName = df;
function lg(e, t) {
  const [n, r] = d.useState("idle");
  return (
    Xt(() => {
      if (!e) {
        r("error");
        return;
      }
      let o = !0;
      const l = new window.Image(),
        i = (s) => () => {
          o && r(s);
        };
      return (
        r("loading"),
        (l.onload = i("loaded")),
        (l.onerror = i("error")),
        (l.src = e),
        t && (l.referrerPolicy = t),
        () => {
          o = !1;
        }
      );
    }, [e, t]),
    n
  );
}
var pf = af,
  mf = cf,
  hf = ff;
const ar = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(pf, {
    ref: n,
    className: Z(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e,
    ),
    ...t,
  }),
);
ar.displayName = pf.displayName;
const ig = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(mf, { ref: n, className: Z("aspect-square h-full w-full", e), ...t }),
);
ig.displayName = mf.displayName;
const sg = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(hf, {
    ref: n,
    className: Z(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e,
    ),
    ...t,
  }),
);
sg.displayName = hf.displayName;
const ag = "sk-proj-eaFkE9RZXKC9aIqRHXoxT3BlbkFJ5iRlrZ6Kge6rDQbSMUrW";
async function ug(e) {
  try {
    const t = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ag}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: e,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });
    if (!t.ok) throw new Error("Failed to get response from OpenAI");
    return (await t.json()).choices[0].message.content;
  } catch (t) {
    throw (console.error("Error calling OpenAI:", t), t);
  }
}
function cg({ character: e }) {
  const [t, n] = d.useState([
      {
        id: "1",
        content: e.greeting,
        sender: "character",
        timestamp: new Date(),
      },
    ]),
    [r, o] = d.useState(""),
    [l, i] = d.useState(!1),
    s = async () => {
      if (!r.trim() || l) return;
      const a = {
        id: Date.now().toString(),
        content: r,
        sender: "user",
        timestamp: new Date(),
      };
      n((u) => [...u, a]), o(""), i(!0);
      try {
        const u = `You are ${e.name}. ${e.description}. Stay in character and respond accordingly.`,
          c = await ug([
            { role: "system", content: u },
            ...t.map((p) => ({
              role: p.sender === "user" ? "user" : "assistant",
              content: p.content,
            })),
            { role: "user", content: r },
          ]),
          h = {
            id: (Date.now() + 1).toString(),
            content: c,
            sender: "character",
            timestamp: new Date(),
          };
        n((p) => [...p, h]);
      } catch (u) {
        console.error("Failed to get AI response:", u);
      } finally {
        i(!1);
      }
    };
  return g.jsxs("div", {
    className: "flex-1 flex flex-col",
    children: [
      g.jsx("div", {
        className: "border-b p-4",
        children: g.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            g.jsx(ar, {
              className: "h-10 w-10",
              children: g.jsx("img", { src: e.avatar, alt: e.name }),
            }),
            g.jsxs("div", {
              children: [
                g.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: e.name,
                }),
                g.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: e.description,
                }),
              ],
            }),
          ],
        }),
      }),
      g.jsx(Hs, {
        className: "flex-1 p-4",
        children: g.jsx("div", {
          className: "space-y-4",
          children: t.map((a) =>
            g.jsxs(
              "div",
              {
                className: `flex gap-3 ${a.sender === "user" ? "justify-end" : "justify-start"}`,
                children: [
                  a.sender === "character" &&
                    g.jsx(ar, {
                      className: "h-8 w-8",
                      children: g.jsx("img", { src: e.avatar, alt: e.name }),
                    }),
                  g.jsx("div", {
                    className: `rounded-lg p-3 max-w-[80%] ${a.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`,
                    children: a.content,
                  }),
                  a.sender === "user" &&
                    g.jsx(ar, {
                      className: "h-8 w-8",
                      children: g.jsx("img", {
                        src: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
                        alt: "User",
                      }),
                    }),
                ],
              },
              a.id,
            ),
          ),
        }),
      }),
      g.jsx("div", {
        className: "p-4 border-t",
        children: g.jsxs("div", {
          className: "flex gap-2",
          children: [
            g.jsx(sl, {
              placeholder: "Type a message...",
              value: r,
              onChange: (a) => o(a.target.value),
              onKeyDown: (a) => a.key === "Enter" && !a.shiftKey && s(),
              disabled: l,
            }),
            g.jsx(Pr, {
              onClick: s,
              disabled: l,
              children: g.jsx($h, { className: "h-4 w-4" }),
            }),
          ],
        }),
      }),
    ],
  });
}
const vf = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", {
    ref: n,
    className: Z("rounded-xl border bg-card text-card-foreground shadow", e),
    ...t,
  }),
);
vf.displayName = "Card";
const dg = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", {
    ref: n,
    className: Z("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
dg.displayName = "CardHeader";
const fg = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("h3", {
    ref: n,
    className: Z("font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
fg.displayName = "CardTitle";
const pg = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("p", {
    ref: n,
    className: Z("text-sm text-muted-foreground", e),
    ...t,
  }),
);
pg.displayName = "CardDescription";
const mg = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", { ref: n, className: Z("p-6 pt-0", e), ...t }),
);
mg.displayName = "CardContent";
const hg = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", { ref: n, className: Z("flex items-center p-6 pt-0", e), ...t }),
);
hg.displayName = "CardFooter";
function vg({ character: e, isSelected: t, onClick: n }) {
  return g.jsx(vf, {
    className: Z(
      "p-3 cursor-pointer transition-colors hover:bg-muted",
      t && "bg-muted",
    ),
    onClick: n,
    children: g.jsxs("div", {
      className: "flex items-center gap-3",
      children: [
        g.jsx(ar, {
          className: "h-12 w-12",
          children: g.jsx("img", { src: e.avatar, alt: e.name }),
        }),
        g.jsxs("div", {
          className: "flex-1 min-w-0",
          children: [
            g.jsx("h3", { className: "font-medium", children: e.name }),
            g.jsx("p", {
              className: "text-sm text-muted-foreground truncate",
              children: e.description,
            }),
          ],
        }),
      ],
    }),
  });
}
var gg = Sp.useId || (() => {}),
  yg = 0;
function Wl(e) {
  const [t, n] = d.useState(gg());
  return (
    Xt(() => {
      e || n((r) => r ?? String(yg++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function wg({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Sg({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    i = l ? e : r,
    s = pe(n),
    a = d.useCallback(
      (u) => {
        if (l) {
          const h = typeof u == "function" ? u(e) : u;
          h !== e && s(h);
        } else o(u);
      },
      [l, e, o, s],
    );
  return [i, a];
}
function Sg({ defaultProp: e, onChange: t }) {
  const n = d.useState(e),
    [r] = n,
    o = d.useRef(r),
    l = pe(t);
  return (
    d.useEffect(() => {
      o.current !== r && (l(r), (o.current = r));
    }, [r, o, l]),
    n
  );
}
function xg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = pe(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Cg = "DismissableLayer",
  $i = "dismissableLayer.update",
  Eg = "dismissableLayer.pointerDownOutside",
  kg = "dismissableLayer.focusOutside",
  du,
  gf = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  yf = d.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: l,
        onInteractOutside: i,
        onDismiss: s,
        ...a
      } = e,
      u = d.useContext(gf),
      [c, h] = d.useState(null),
      p =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, w] = d.useState({}),
      x = Te(t, (N) => h(N)),
      y = Array.from(u.layers),
      [C] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = y.indexOf(C),
      f = c ? y.indexOf(c) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = f >= m,
      E = _g((N) => {
        const _ = N.target,
          j = [...u.branches].some((L) => L.contains(_));
        !S ||
          j ||
          (o == null || o(N),
          i == null || i(N),
          N.defaultPrevented || s == null || s());
      }, p),
      P = Rg((N) => {
        const _ = N.target;
        [...u.branches].some((L) => L.contains(_)) ||
          (l == null || l(N),
          i == null || i(N),
          N.defaultPrevented || s == null || s());
      }, p);
    return (
      xg((N) => {
        f === u.layers.size - 1 &&
          (r == null || r(N),
          !N.defaultPrevented && s && (N.preventDefault(), s()));
      }, p),
      d.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((du = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            fu(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = du);
            }
          );
      }, [c, p, n, u]),
      d.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            fu());
        },
        [c, u],
      ),
      d.useEffect(() => {
        const N = () => w({});
        return (
          document.addEventListener($i, N),
          () => document.removeEventListener($i, N)
        );
      }, []),
      g.jsx(se.div, {
        ...a,
        ref: x,
        style: {
          pointerEvents: v ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: he(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: he(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: he(
          e.onPointerDownCapture,
          E.onPointerDownCapture,
        ),
      })
    );
  });
yf.displayName = Cg;
var Ng = "DismissableLayerBranch",
  Pg = d.forwardRef((e, t) => {
    const n = d.useContext(gf),
      r = d.useRef(null),
      o = Te(t, r);
    return (
      d.useEffect(() => {
        const l = r.current;
        if (l)
          return (
            n.branches.add(l),
            () => {
              n.branches.delete(l);
            }
          );
      }, [n.branches]),
      g.jsx(se.div, { ...e, ref: o })
    );
  });
Pg.displayName = Ng;
function _g(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = pe(e),
    r = d.useRef(!1),
    o = d.useRef(() => {});
  return (
    d.useEffect(() => {
      const l = (s) => {
          if (s.target && !r.current) {
            let a = function () {
              wf(Eg, n, u, { discrete: !0 });
            };
            const u = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", l);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", l),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Rg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = pe(e),
    r = d.useRef(!1);
  return (
    d.useEffect(() => {
      const o = (l) => {
        l.target &&
          !r.current &&
          wf(kg, n, { originalEvent: l }, { discrete: !1 });
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
function fu() {
  const e = new CustomEvent($i);
  document.dispatchEvent(e);
}
function wf(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Ov(o, l) : o.dispatchEvent(l);
}
var Ul = "focusScope.autoFocusOnMount",
  $l = "focusScope.autoFocusOnUnmount",
  pu = { bubbles: !1, cancelable: !0 },
  Tg = "FocusScope",
  Sf = d.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: l,
        ...i
      } = e,
      [s, a] = d.useState(null),
      u = pe(o),
      c = pe(l),
      h = d.useRef(null),
      p = Te(t, (y) => a(y)),
      w = d.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    d.useEffect(() => {
      if (r) {
        let y = function (v) {
            if (w.paused || !s) return;
            const S = v.target;
            s.contains(S) ? (h.current = S) : mt(h.current, { select: !0 });
          },
          C = function (v) {
            if (w.paused || !s) return;
            const S = v.relatedTarget;
            S !== null && (s.contains(S) || mt(h.current, { select: !0 }));
          },
          m = function (v) {
            if (document.activeElement === document.body)
              for (const E of v) E.removedNodes.length > 0 && mt(s);
          };
        document.addEventListener("focusin", y),
          document.addEventListener("focusout", C);
        const f = new MutationObserver(m);
        return (
          s && f.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", y),
              document.removeEventListener("focusout", C),
              f.disconnect();
          }
        );
      }
    }, [r, s, w.paused]),
      d.useEffect(() => {
        if (s) {
          hu.add(w);
          const y = document.activeElement;
          if (!s.contains(y)) {
            const m = new CustomEvent(Ul, pu);
            s.addEventListener(Ul, u),
              s.dispatchEvent(m),
              m.defaultPrevented ||
                (Lg(Dg(xf(s)), { select: !0 }),
                document.activeElement === y && mt(s));
          }
          return () => {
            s.removeEventListener(Ul, u),
              setTimeout(() => {
                const m = new CustomEvent($l, pu);
                s.addEventListener($l, c),
                  s.dispatchEvent(m),
                  m.defaultPrevented || mt(y ?? document.body, { select: !0 }),
                  s.removeEventListener($l, c),
                  hu.remove(w);
              }, 0);
          };
        }
      }, [s, u, c, w]);
    const x = d.useCallback(
      (y) => {
        if ((!n && !r) || w.paused) return;
        const C = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey,
          m = document.activeElement;
        if (C && m) {
          const f = y.currentTarget,
            [v, S] = jg(f);
          v && S
            ? !y.shiftKey && m === S
              ? (y.preventDefault(), n && mt(v, { select: !0 }))
              : y.shiftKey &&
                m === v &&
                (y.preventDefault(), n && mt(S, { select: !0 }))
            : m === f && y.preventDefault();
        }
      },
      [n, r, w.paused],
    );
    return g.jsx(se.div, { tabIndex: -1, ...i, ref: p, onKeyDown: x });
  });
Sf.displayName = Tg;
function Lg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((mt(r, { select: t }), document.activeElement !== n)) return;
}
function jg(e) {
  const t = xf(e),
    n = mu(t, e),
    r = mu(t.reverse(), e);
  return [n, r];
}
function xf(e) {
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
function mu(e, t) {
  for (const n of e) if (!Ag(n, { upTo: t })) return n;
}
function Ag(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Og(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Og(e) && t && e.select();
  }
}
var hu = zg();
function zg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = vu(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = vu(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function vu(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Dg(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Mg = "Portal",
  Cf = d.forwardRef((e, t) => {
    var s;
    const { container: n, ...r } = e,
      [o, l] = d.useState(!1);
    Xt(() => l(!0), []);
    const i =
      n ||
      (o &&
        ((s = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : s.body));
    return i ? jh.createPortal(g.jsx(se.div, { ...r, ref: t }), i) : null;
  });
Cf.displayName = Mg;
var Bl = 0;
function Ig() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? gu()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? gu()),
      Bl++,
      () => {
        Bl === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Bl--;
      }
    );
  }, []);
}
function gu() {
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
var Ge = function () {
  return (
    (Ge =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var l in n)
            Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
        }
        return t;
      }),
    Ge.apply(this, arguments)
  );
};
function Ef(e, t) {
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
function bg(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, l; r < o; r++)
      (l || !(r in t)) &&
        (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]));
  return e.concat(l || Array.prototype.slice.call(t));
}
var vo = "right-scroll-bar-position",
  go = "width-before-scroll-bar",
  Fg = "with-scroll-bars-hidden",
  Wg = "--removed-body-scroll-bar-size";
function Vl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ug(e, t) {
  var n = d.useState(function () {
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
var $g = typeof window < "u" ? d.useLayoutEffect : d.useEffect,
  yu = new WeakMap();
function Bg(e, t) {
  var n = Ug(null, function (r) {
    return e.forEach(function (o) {
      return Vl(o, r);
    });
  });
  return (
    $g(
      function () {
        var r = yu.get(n);
        if (r) {
          var o = new Set(r),
            l = new Set(e),
            i = n.current;
          o.forEach(function (s) {
            l.has(s) || Vl(s, null);
          }),
            l.forEach(function (s) {
              o.has(s) || Vl(s, i);
            });
        }
        yu.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Vg(e) {
  return e;
}
function Hg(e, t) {
  t === void 0 && (t = Vg);
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
      useMedium: function (l) {
        var i = t(l, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (s) {
              return s !== i;
            });
          }
        );
      },
      assignSyncMedium: function (l) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(l);
        }
        n = {
          push: function (s) {
            return l(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (l) {
        r = !0;
        var i = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(l), (i = n);
        }
        var a = function () {
            var c = i;
            (i = []), c.forEach(l);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (c) {
              i.push(c), u();
            },
            filter: function (c) {
              return (i = i.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function Qg(e) {
  e === void 0 && (e = {});
  var t = Hg(null);
  return (t.options = Ge({ async: !0, ssr: !1 }, e)), t;
}
var kf = function (e) {
  var t = e.sideCar,
    n = Ef(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return d.createElement(r, Ge({}, n));
};
kf.isSideCarExport = !0;
function Kg(e, t) {
  return e.useMedium(t), kf;
}
var Nf = Qg(),
  Hl = function () {},
  dl = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: Hl,
        onWheelCapture: Hl,
        onTouchMoveCapture: Hl,
      }),
      o = r[0],
      l = r[1],
      i = e.forwardProps,
      s = e.children,
      a = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      h = e.shards,
      p = e.sideCar,
      w = e.noIsolation,
      x = e.inert,
      y = e.allowPinchZoom,
      C = e.as,
      m = C === void 0 ? "div" : C,
      f = e.gapMode,
      v = Ef(e, [
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
      S = p,
      E = Bg([n, t]),
      P = Ge(Ge({}, v), o);
    return d.createElement(
      d.Fragment,
      null,
      c &&
        d.createElement(S, {
          sideCar: Nf,
          removeScrollBar: u,
          shards: h,
          noIsolation: w,
          inert: x,
          setCallbacks: l,
          allowPinchZoom: !!y,
          lockRef: n,
          gapMode: f,
        }),
      i
        ? d.cloneElement(d.Children.only(s), Ge(Ge({}, P), { ref: E }))
        : d.createElement(m, Ge({}, P, { className: a, ref: E }), s),
    );
  });
dl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
dl.classNames = { fullWidth: go, zeroRight: vo };
var Gg = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Yg() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Gg();
  return t && e.setAttribute("nonce", t), e;
}
function Xg(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Zg(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Jg = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Yg()) && (Xg(t, n), Zg(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  qg = function () {
    var e = Jg();
    return function (t, n) {
      d.useEffect(
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
  Pf = function () {
    var e = qg(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  ey = { left: 0, top: 0, right: 0, gap: 0 },
  Ql = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  ty = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ql(n), Ql(r), Ql(o)];
  },
  ny = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return ey;
    var t = ty(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  ry = Pf(),
  Pn = "data-scroll-locked",
  oy = function (e, t, n, r) {
    var o = e.left,
      l = e.top,
      i = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Fg,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Pn,
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
                  l,
                  `px;
    padding-right: `,
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          vo,
          ` {
    right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          go,
          ` {
    margin-right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(vo, " .")
        .concat(
          vo,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(go, " .")
        .concat(
          go,
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
          Pn,
          `] {
    `,
        )
        .concat(Wg, ": ")
        .concat(
          s,
          `px;
  }
`,
        )
    );
  },
  wu = function () {
    var e = parseInt(document.body.getAttribute(Pn) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ly = function () {
    d.useEffect(function () {
      return (
        document.body.setAttribute(Pn, (wu() + 1).toString()),
        function () {
          var e = wu() - 1;
          e <= 0
            ? document.body.removeAttribute(Pn)
            : document.body.setAttribute(Pn, e.toString());
        }
      );
    }, []);
  },
  iy = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    ly();
    var l = d.useMemo(
      function () {
        return ny(o);
      },
      [o],
    );
    return d.createElement(ry, { styles: oy(l, !t, o, n ? "" : "!important") });
  },
  Bi = !1;
if (typeof window < "u")
  try {
    var qr = Object.defineProperty({}, "passive", {
      get: function () {
        return (Bi = !0), !0;
      },
    });
    window.addEventListener("test", qr, qr),
      window.removeEventListener("test", qr, qr);
  } catch {
    Bi = !1;
  }
var rn = Bi ? { passive: !1 } : !1,
  sy = function (e) {
    return e.tagName === "TEXTAREA";
  },
  _f = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !sy(e) && n[t] === "visible")
    );
  },
  ay = function (e) {
    return _f(e, "overflowY");
  },
  uy = function (e) {
    return _f(e, "overflowX");
  },
  Su = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Rf(e, r);
      if (o) {
        var l = Tf(e, r),
          i = l[1],
          s = l[2];
        if (i > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  cy = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  dy = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Rf = function (e, t) {
    return e === "v" ? ay(t) : uy(t);
  },
  Tf = function (e, t) {
    return e === "v" ? cy(t) : dy(t);
  },
  fy = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  py = function (e, t, n, r, o) {
    var l = fy(e, window.getComputedStyle(t).direction),
      i = l * r,
      s = n.target,
      a = t.contains(s),
      u = !1,
      c = i > 0,
      h = 0,
      p = 0;
    do {
      var w = Tf(e, s),
        x = w[0],
        y = w[1],
        C = w[2],
        m = y - C - l * x;
      (x || m) && Rf(e, s) && ((h += m), (p += x)),
        s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
    } while ((!a && s !== document.body) || (a && (t.contains(s) || t === s)));
    return (
      ((c && (Math.abs(h) < 1 || !o)) || (!c && (Math.abs(p) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  eo = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  xu = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Cu = function (e) {
    return e && "current" in e ? e.current : e;
  },
  my = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  hy = function (e) {
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
  vy = 0,
  on = [];
function gy(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    o = d.useState(vy++)[0],
    l = d.useState(Pf)[0],
    i = d.useRef(e);
  d.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    d.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var y = bg([e.lockRef.current], (e.shards || []).map(Cu), !0).filter(
            Boolean,
          );
          return (
            y.forEach(function (C) {
              return C.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                y.forEach(function (C) {
                  return C.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var s = d.useCallback(function (y, C) {
      if (
        ("touches" in y && y.touches.length === 2) ||
        (y.type === "wheel" && y.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var m = eo(y),
        f = n.current,
        v = "deltaX" in y ? y.deltaX : f[0] - m[0],
        S = "deltaY" in y ? y.deltaY : f[1] - m[1],
        E,
        P = y.target,
        N = Math.abs(v) > Math.abs(S) ? "h" : "v";
      if ("touches" in y && N === "h" && P.type === "range") return !1;
      var _ = Su(N, P);
      if (!_) return !0;
      if ((_ ? (E = N) : ((E = N === "v" ? "h" : "v"), (_ = Su(N, P))), !_))
        return !1;
      if (
        (!r.current && "changedTouches" in y && (v || S) && (r.current = E), !E)
      )
        return !0;
      var j = r.current || E;
      return py(j, C, y, j === "h" ? v : S, !0);
    }, []),
    a = d.useCallback(function (y) {
      var C = y;
      if (!(!on.length || on[on.length - 1] !== l)) {
        var m = "deltaY" in C ? xu(C) : eo(C),
          f = t.current.filter(function (E) {
            return (
              E.name === C.type &&
              (E.target === C.target || C.target === E.shadowParent) &&
              my(E.delta, m)
            );
          })[0];
        if (f && f.should) {
          C.cancelable && C.preventDefault();
          return;
        }
        if (!f) {
          var v = (i.current.shards || [])
              .map(Cu)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(C.target);
              }),
            S = v.length > 0 ? s(C, v[0]) : !i.current.noIsolation;
          S && C.cancelable && C.preventDefault();
        }
      }
    }, []),
    u = d.useCallback(function (y, C, m, f) {
      var v = { name: y, delta: C, target: m, should: f, shadowParent: yy(m) };
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== v;
          });
        }, 1);
    }, []),
    c = d.useCallback(function (y) {
      (n.current = eo(y)), (r.current = void 0);
    }, []),
    h = d.useCallback(function (y) {
      u(y.type, xu(y), y.target, s(y, e.lockRef.current));
    }, []),
    p = d.useCallback(function (y) {
      u(y.type, eo(y), y.target, s(y, e.lockRef.current));
    }, []);
  d.useEffect(function () {
    return (
      on.push(l),
      e.setCallbacks({
        onScrollCapture: h,
        onWheelCapture: h,
        onTouchMoveCapture: p,
      }),
      document.addEventListener("wheel", a, rn),
      document.addEventListener("touchmove", a, rn),
      document.addEventListener("touchstart", c, rn),
      function () {
        (on = on.filter(function (y) {
          return y !== l;
        })),
          document.removeEventListener("wheel", a, rn),
          document.removeEventListener("touchmove", a, rn),
          document.removeEventListener("touchstart", c, rn);
      }
    );
  }, []);
  var w = e.removeScrollBar,
    x = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    x ? d.createElement(l, { styles: hy(o) }) : null,
    w ? d.createElement(iy, { gapMode: e.gapMode }) : null,
  );
}
function yy(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const wy = Kg(Nf, gy);
var Lf = d.forwardRef(function (e, t) {
  return d.createElement(dl, Ge({}, e, { ref: t, sideCar: wy }));
});
Lf.classNames = dl.classNames;
var Sy = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ln = new WeakMap(),
  to = new WeakMap(),
  no = {},
  Kl = 0,
  jf = function (e) {
    return e && (e.host || jf(e.parentNode));
  },
  xy = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = jf(n);
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
  Cy = function (e, t, n, r) {
    var o = xy(t, Array.isArray(e) ? e : [e]);
    no[n] || (no[n] = new WeakMap());
    var l = no[n],
      i = [],
      s = new Set(),
      a = new Set(o),
      u = function (h) {
        !h || s.has(h) || (s.add(h), u(h.parentNode));
      };
    o.forEach(u);
    var c = function (h) {
      !h ||
        a.has(h) ||
        Array.prototype.forEach.call(h.children, function (p) {
          if (s.has(p)) c(p);
          else
            try {
              var w = p.getAttribute(r),
                x = w !== null && w !== "false",
                y = (ln.get(p) || 0) + 1,
                C = (l.get(p) || 0) + 1;
              ln.set(p, y),
                l.set(p, C),
                i.push(p),
                y === 1 && x && to.set(p, !0),
                C === 1 && p.setAttribute(n, "true"),
                x || p.setAttribute(r, "true");
            } catch (m) {
              console.error("aria-hidden: cannot operate on ", p, m);
            }
        });
    };
    return (
      c(t),
      s.clear(),
      Kl++,
      function () {
        i.forEach(function (h) {
          var p = ln.get(h) - 1,
            w = l.get(h) - 1;
          ln.set(h, p),
            l.set(h, w),
            p || (to.has(h) || h.removeAttribute(r), to.delete(h)),
            w || h.removeAttribute(n);
        }),
          Kl--,
          Kl ||
            ((ln = new WeakMap()),
            (ln = new WeakMap()),
            (to = new WeakMap()),
            (no = {}));
      }
    );
  },
  Ey = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Sy(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        Cy(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ks = "Dialog",
  [Af, Qy] = Ws(Ks),
  [ky, Ve] = Af(Ks),
  Of = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: l,
        modal: i = !0,
      } = e,
      s = d.useRef(null),
      a = d.useRef(null),
      [u = !1, c] = wg({ prop: r, defaultProp: o, onChange: l });
    return g.jsx(ky, {
      scope: t,
      triggerRef: s,
      contentRef: a,
      contentId: Wl(),
      titleId: Wl(),
      descriptionId: Wl(),
      open: u,
      onOpenChange: c,
      onOpenToggle: d.useCallback(() => c((h) => !h), [c]),
      modal: i,
      children: n,
    });
  };
Of.displayName = Ks;
var zf = "DialogTrigger",
  Ny = d.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ve(zf, n),
      l = Te(t, o.triggerRef);
    return g.jsx(se.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Xs(o.open),
      ...r,
      ref: l,
      onClick: he(e.onClick, o.onOpenToggle),
    });
  });
Ny.displayName = zf;
var Gs = "DialogPortal",
  [Py, Df] = Af(Gs, { forceMount: void 0 }),
  Mf = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      l = Ve(Gs, t);
    return g.jsx(Py, {
      scope: t,
      forceMount: n,
      children: d.Children.map(r, (i) =>
        g.jsx(zt, {
          present: n || l.open,
          children: g.jsx(Cf, { asChild: !0, container: o, children: i }),
        }),
      ),
    });
  };
Mf.displayName = Gs;
var Vo = "DialogOverlay",
  If = d.forwardRef((e, t) => {
    const n = Df(Vo, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      l = Ve(Vo, e.__scopeDialog);
    return l.modal
      ? g.jsx(zt, {
          present: r || l.open,
          children: g.jsx(_y, { ...o, ref: t }),
        })
      : null;
  });
If.displayName = Vo;
var _y = d.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ve(Vo, n);
    return g.jsx(Lf, {
      as: al,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: g.jsx(se.div, {
        "data-state": Xs(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Zt = "DialogContent",
  bf = d.forwardRef((e, t) => {
    const n = Df(Zt, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      l = Ve(Zt, e.__scopeDialog);
    return g.jsx(zt, {
      present: r || l.open,
      children: l.modal
        ? g.jsx(Ry, { ...o, ref: t })
        : g.jsx(Ty, { ...o, ref: t }),
    });
  });
bf.displayName = Zt;
var Ry = d.forwardRef((e, t) => {
    const n = Ve(Zt, e.__scopeDialog),
      r = d.useRef(null),
      o = Te(t, n.contentRef, r);
    return (
      d.useEffect(() => {
        const l = r.current;
        if (l) return Ey(l);
      }, []),
      g.jsx(Ff, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: he(e.onCloseAutoFocus, (l) => {
          var i;
          l.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: he(e.onPointerDownOutside, (l) => {
          const i = l.detail.originalEvent,
            s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && l.preventDefault();
        }),
        onFocusOutside: he(e.onFocusOutside, (l) => l.preventDefault()),
      })
    );
  }),
  Ty = d.forwardRef((e, t) => {
    const n = Ve(Zt, e.__scopeDialog),
      r = d.useRef(!1),
      o = d.useRef(!1);
    return g.jsx(Ff, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (l) => {
        var i, s;
        (i = e.onCloseAutoFocus) == null || i.call(e, l),
          l.defaultPrevented ||
            (r.current || (s = n.triggerRef.current) == null || s.focus(),
            l.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (l) => {
        var a, u;
        (a = e.onInteractOutside) == null || a.call(e, l),
          l.defaultPrevented ||
            ((r.current = !0),
            l.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const i = l.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) &&
          l.preventDefault(),
          l.detail.originalEvent.type === "focusin" &&
            o.current &&
            l.preventDefault();
      },
    });
  }),
  Ff = d.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: l,
        ...i
      } = e,
      s = Ve(Zt, n),
      a = d.useRef(null),
      u = Te(t, a);
    return (
      Ig(),
      g.jsxs(g.Fragment, {
        children: [
          g.jsx(Sf, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: l,
            children: g.jsx(yf, {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Xs(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
          g.jsxs(g.Fragment, {
            children: [
              g.jsx(Ly, { titleId: s.titleId }),
              g.jsx(Ay, { contentRef: a, descriptionId: s.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Ys = "DialogTitle",
  Wf = d.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ve(Ys, n);
    return g.jsx(se.h2, { id: o.titleId, ...r, ref: t });
  });
Wf.displayName = Ys;
var Uf = "DialogDescription",
  $f = d.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ve(Uf, n);
    return g.jsx(se.p, { id: o.descriptionId, ...r, ref: t });
  });
$f.displayName = Uf;
var Bf = "DialogClose",
  Vf = d.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ve(Bf, n);
    return g.jsx(se.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: he(e.onClick, () => o.onOpenChange(!1)),
    });
  });
Vf.displayName = Bf;
function Xs(e) {
  return e ? "open" : "closed";
}
var Hf = "DialogTitleWarning",
  [Ky, Qf] = Iv(Hf, { contentName: Zt, titleName: Ys, docsSlug: "dialog" }),
  Ly = ({ titleId: e }) => {
    const t = Qf(Hf),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      d.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  jy = "DialogDescriptionWarning",
  Ay = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Qf(jy).contentName}}.`;
    return (
      d.useEffect(() => {
        var l;
        const o =
          (l = e.current) == null ? void 0 : l.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  Oy = Of,
  zy = Mf,
  Kf = If,
  Gf = bf,
  Yf = Wf,
  Xf = $f,
  Dy = Vf;
function My(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Iy = ["color"],
  by = d.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = My(e, Iy);
    return d.createElement(
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
      d.createElement("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
const Fy = Oy,
  Wy = zy,
  Zf = d.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(Kf, {
      ref: n,
      className: Z(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
    }),
  );
Zf.displayName = Kf.displayName;
const Jf = d.forwardRef(({ className: e, children: t, ...n }, r) =>
  g.jsxs(Wy, {
    children: [
      g.jsx(Zf, {}),
      g.jsxs(Gf, {
        ref: r,
        className: Z(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e,
        ),
        ...n,
        children: [
          t,
          g.jsxs(Dy, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              g.jsx(by, { className: "h-4 w-4" }),
              g.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
Jf.displayName = Gf.displayName;
const qf = ({ className: e, ...t }) =>
  g.jsx("div", {
    className: Z("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
qf.displayName = "DialogHeader";
const ep = ({ className: e, ...t }) =>
  g.jsx("div", {
    className: Z(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e,
    ),
    ...t,
  });
ep.displayName = "DialogFooter";
const tp = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Yf, {
    ref: n,
    className: Z("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
tp.displayName = Yf.displayName;
const Uy = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Xf, { ref: n, className: Z("text-sm text-muted-foreground", e), ...t }),
);
Uy.displayName = Xf.displayName;
const np = d.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("textarea", {
    className: Z(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: n,
    ...t,
  }),
);
np.displayName = "Textarea";
function $y({ open: e, onOpenChange: t, onSubmit: n }) {
  const [r, o] = d.useState(""),
    [l, i] = d.useState(""),
    s = (a) => {
      a.preventDefault();
      const u = {
        id: Date.now().toString(),
        name: r,
        description: l,
        avatar: `https://api.dicebear.com/7.x/personas/svg?seed=${r.toLowerCase().replace(/\s+/g, "")}`,
        greeting: `Hello! I'm ${r}. It's a pleasure to meet you.`,
      };
      n(u), o(""), i("");
    };
  return g.jsx(Fy, {
    open: e,
    onOpenChange: t,
    children: g.jsxs(Jf, {
      children: [
        g.jsx(qf, {
          children: g.jsx(tp, { children: "Create New Character" }),
        }),
        g.jsxs("form", {
          onSubmit: s,
          className: "space-y-4",
          children: [
            g.jsxs("div", {
              className: "space-y-2",
              children: [
                g.jsx("label", {
                  htmlFor: "name",
                  className: "text-sm font-medium",
                  children: "Character Name",
                }),
                g.jsx(sl, {
                  id: "name",
                  value: r,
                  onChange: (a) => o(a.target.value),
                  placeholder: "Enter character name...",
                  required: !0,
                }),
              ],
            }),
            g.jsxs("div", {
              className: "space-y-2",
              children: [
                g.jsx("label", {
                  htmlFor: "description",
                  className: "text-sm font-medium",
                  children: "Description",
                }),
                g.jsx(np, {
                  id: "description",
                  value: l,
                  onChange: (a) => i(a.target.value),
                  placeholder: "Describe your character...",
                  required: !0,
                }),
              ],
            }),
            g.jsx(ep, {
              children: g.jsx(Pr, {
                type: "submit",
                disabled: !r || !l,
                children: "Create Character",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function By() {
  const [e, t] = d.useState(ng),
    [n, r] = d.useState(null),
    [o, l] = d.useState(""),
    [i, s] = d.useState(!1),
    a = e.filter((c) => c.name.toLowerCase().includes(o.toLowerCase())),
    u = (c) => {
      t((h) => [...h, c]), r(c), s(!1);
    };
  return g.jsxs("div", {
    className: "flex h-screen bg-background",
    children: [
      g.jsxs("div", {
        className: "w-80 border-r flex flex-col",
        children: [
          g.jsxs("div", {
            className: "p-4 border-b",
            children: [
              g.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                  g.jsxs("h1", {
                    className: "text-2xl font-semibold flex items-center gap-2",
                    children: [
                      g.jsx(bh, { className: "h-6 w-6" }),
                      "Character AI",
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "relative",
                children: [
                  g.jsx(Uh, {
                    className:
                      "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground",
                  }),
                  g.jsx(sl, {
                    placeholder: "Search characters...",
                    className: "pl-8",
                    value: o,
                    onChange: (c) => l(c.target.value),
                  }),
                ],
              }),
            ],
          }),
          g.jsx(Hs, {
            className: "flex-1 p-4",
            children: g.jsxs("div", {
              className: "grid gap-4",
              children: [
                g.jsxs(Pr, {
                  variant: "outline",
                  className: "w-full justify-start gap-2",
                  onClick: () => s(!0),
                  children: [
                    g.jsx(Wh, { className: "h-4 w-4" }),
                    "Create New Character",
                  ],
                }),
                a.map((c) =>
                  g.jsx(
                    vg,
                    {
                      character: c,
                      isSelected: (n == null ? void 0 : n.id) === c.id,
                      onClick: () => r(c),
                    },
                    c.id,
                  ),
                ),
              ],
            }),
          }),
          g.jsx("div", {
            className: "p-4 border-t",
            children: g.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                g.jsx(Vh, { className: "h-5 w-5" }),
                g.jsx("span", {
                  className: "text-sm",
                  children: "Character AI",
                }),
              ],
            }),
          }),
        ],
      }),
      g.jsx("div", {
        className: "flex-1 flex flex-col",
        children: n
          ? g.jsx(cg, { character: n })
          : g.jsxs("div", {
              className:
                "flex-1 flex items-center justify-center flex-col gap-4 p-8 text-center",
              children: [
                g.jsx(Fh, { className: "h-16 w-16 text-muted-foreground" }),
                g.jsx("h2", {
                  className: "text-2xl font-semibold",
                  children: "Welcome to Character AI",
                }),
                g.jsx("p", {
                  className: "text-muted-foreground max-w-md",
                  children:
                    "Select a character from the sidebar or create your own to start a conversation. Each character has their own personality and knowledge.",
                }),
              ],
            }),
      }),
      g.jsx($y, { open: i, onOpenChange: s, onSubmit: u }),
    ],
  });
}
Md(document.getElementById("root")).render(
  g.jsx(d.StrictMode, {
    children: g.jsx(zh, {
      defaultTheme: "dark",
      storageKey: "vite-ui-theme",
      children: g.jsx(By, {}),
    }),
  }),
);
